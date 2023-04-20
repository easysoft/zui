var Op = Object.defineProperty;
var Ip = (e, t, n) => t in e ? Op(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var E = (e, t, n) => (Ip(e, typeof t != "symbol" ? t + "" : t, n), n), zi = (e, t, n) => {
  if (!t.has(e))
    throw TypeError("Cannot " + n);
};
var b = (e, t, n) => (zi(e, t, "read from private field"), n ? n.call(e) : t.get(e)), x = (e, t, n) => {
  if (t.has(e))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(e) : t.set(e, n);
}, L = (e, t, n, o) => (zi(e, t, "write to private field"), o ? o.call(e, n) : t.set(e, n), n), kc = (e, t, n, o) => ({
  set _(i) {
    L(e, t, i, n);
  },
  get _() {
    return b(e, t, o);
  }
}), N = (e, t, n) => (zi(e, t, "access private method"), n);
var Si, U, Da, Ha, Bn, $c, Br = {}, Oa = [], Wp = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function ft(e, t) {
  for (var n in t)
    e[n] = t[n];
  return e;
}
function Ia(e) {
  var t = e.parentNode;
  t && t.removeChild(e);
}
function Wa(e, t, n) {
  var o, i, r, l = {};
  for (r in t)
    r == "key" ? o = t[r] : r == "ref" ? i = t[r] : l[r] = t[r];
  if (arguments.length > 2 && (l.children = arguments.length > 3 ? Si.call(arguments, 2) : n), typeof e == "function" && e.defaultProps != null)
    for (r in e.defaultProps)
      l[r] === void 0 && (l[r] = e.defaultProps[r]);
  return Er(e, l, o, i, null);
}
function Er(e, t, n, o, i) {
  var r = { type: e, props: t, key: n, ref: o, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: i ?? ++Da };
  return i == null && U.vnode != null && U.vnode(r), r;
}
function Up() {
  return { current: null };
}
function Ci(e) {
  return e.children;
}
function Tr(e, t) {
  this.props = e, this.context = t;
}
function xo(e, t) {
  if (t == null)
    return e.__ ? xo(e.__, e.__.__k.indexOf(e) + 1) : null;
  for (var n; t < e.__k.length; t++)
    if ((n = e.__k[t]) != null && n.__e != null)
      return n.__e;
  return typeof e.type == "function" ? xo(e) : null;
}
function Ua(e) {
  var t, n;
  if ((e = e.__) != null && e.__c != null) {
    for (e.__e = e.__c.base = null, t = 0; t < e.__k.length; t++)
      if ((n = e.__k[t]) != null && n.__e != null) {
        e.__e = e.__c.base = n.__e;
        break;
      }
    return Ua(e);
  }
}
function xc(e) {
  (!e.__d && (e.__d = !0) && Bn.push(e) && !zr.__r++ || $c !== U.debounceRendering) && (($c = U.debounceRendering) || setTimeout)(zr);
}
function zr() {
  for (var e; zr.__r = Bn.length; )
    e = Bn.sort(function(t, n) {
      return t.__v.__b - n.__v.__b;
    }), Bn = [], e.some(function(t) {
      var n, o, i, r, l, _;
      t.__d && (l = (r = (n = t).__v).__e, (_ = n.__P) && (o = [], (i = ft({}, r)).__v = r.__v + 1, Tl(_, r, i, n.__n, _.ownerSVGElement !== void 0, r.__h != null ? [l] : null, o, l ?? xo(r), r.__h), za(o, r), r.__e != l && Ua(r)));
    });
}
function Fa(e, t, n, o, i, r, l, _, a, h) {
  var s, d, u, c, f, y, p, m = o && o.__k || Oa, g = m.length;
  for (n.__k = [], s = 0; s < t.length; s++)
    if ((c = n.__k[s] = (c = t[s]) == null || typeof c == "boolean" ? null : typeof c == "string" || typeof c == "number" || typeof c == "bigint" ? Er(null, c, null, null, c) : Array.isArray(c) ? Er(Ci, { children: c }, null, null, null) : c.__b > 0 ? Er(c.type, c.props, c.key, c.ref ? c.ref : null, c.__v) : c) != null) {
      if (c.__ = n, c.__b = n.__b + 1, (u = m[s]) === null || u && c.key == u.key && c.type === u.type)
        m[s] = void 0;
      else
        for (d = 0; d < g; d++) {
          if ((u = m[d]) && c.key == u.key && c.type === u.type) {
            m[d] = void 0;
            break;
          }
          u = null;
        }
      Tl(e, c, u = u || Br, i, r, l, _, a, h), f = c.__e, (d = c.ref) && u.ref != d && (p || (p = []), u.ref && p.push(u.ref, null, c), p.push(d, c.__c || f, c)), f != null ? (y == null && (y = f), typeof c.type == "function" && c.__k === u.__k ? c.__d = a = ja(c, a, e) : a = Ba(e, c, u, m, f, a), typeof n.type == "function" && (n.__d = a)) : a && u.__e == a && a.parentNode != e && (a = xo(u));
    }
  for (n.__e = y, s = g; s--; )
    m[s] != null && qa(m[s], m[s]);
  if (p)
    for (s = 0; s < p.length; s++)
      Va(p[s], p[++s], p[++s]);
}
function ja(e, t, n) {
  for (var o, i = e.__k, r = 0; i && r < i.length; r++)
    (o = i[r]) && (o.__ = e, t = typeof o.type == "function" ? ja(o, t, n) : Ba(n, o, o, i, o.__e, t));
  return t;
}
function Ba(e, t, n, o, i, r) {
  var l, _, a;
  if (t.__d !== void 0)
    l = t.__d, t.__d = void 0;
  else if (n == null || i != r || i.parentNode == null)
    e:
      if (r == null || r.parentNode !== e)
        e.appendChild(i), l = null;
      else {
        for (_ = r, a = 0; (_ = _.nextSibling) && a < o.length; a += 2)
          if (_ == i)
            break e;
        e.insertBefore(i, r), l = r;
      }
  return l !== void 0 ? l : i.nextSibling;
}
function Fp(e, t, n, o, i) {
  var r;
  for (r in n)
    r === "children" || r === "key" || r in t || Vr(e, r, null, n[r], o);
  for (r in t)
    i && typeof t[r] != "function" || r === "children" || r === "key" || r === "value" || r === "checked" || n[r] === t[r] || Vr(e, r, t[r], n[r], o);
}
function Sc(e, t, n) {
  t[0] === "-" ? e.setProperty(t, n) : e[t] = n == null ? "" : typeof n != "number" || Wp.test(t) ? n : n + "px";
}
function Vr(e, t, n, o, i) {
  var r;
  e:
    if (t === "style")
      if (typeof n == "string")
        e.style.cssText = n;
      else {
        if (typeof o == "string" && (e.style.cssText = o = ""), o)
          for (t in o)
            n && t in n || Sc(e.style, t, "");
        if (n)
          for (t in n)
            o && n[t] === o[t] || Sc(e.style, t, n[t]);
      }
    else if (t[0] === "o" && t[1] === "n")
      r = t !== (t = t.replace(/Capture$/, "")), t = t.toLowerCase() in e ? t.toLowerCase().slice(2) : t.slice(2), e.l || (e.l = {}), e.l[t + r] = n, n ? o || e.addEventListener(t, r ? Ec : Cc, r) : e.removeEventListener(t, r ? Ec : Cc, r);
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
function Cc(e) {
  this.l[e.type + !1](U.event ? U.event(e) : e);
}
function Ec(e) {
  this.l[e.type + !0](U.event ? U.event(e) : e);
}
function Tl(e, t, n, o, i, r, l, _, a) {
  var h, s, d, u, c, f, y, p, m, g, w, k, T, C, S, v = t.type;
  if (t.constructor !== void 0)
    return null;
  n.__h != null && (a = n.__h, _ = t.__e = n.__e, t.__h = null, r = [_]), (h = U.__b) && h(t);
  try {
    e:
      if (typeof v == "function") {
        if (p = t.props, m = (h = v.contextType) && o[h.__c], g = h ? m ? m.props.value : h.__ : o, n.__c ? y = (s = t.__c = n.__c).__ = s.__E : ("prototype" in v && v.prototype.render ? t.__c = s = new v(p, g) : (t.__c = s = new Tr(p, g), s.constructor = v, s.render = Bp), m && m.sub(s), s.props = p, s.state || (s.state = {}), s.context = g, s.__n = o, d = s.__d = !0, s.__h = [], s._sb = []), s.__s == null && (s.__s = s.state), v.getDerivedStateFromProps != null && (s.__s == s.state && (s.__s = ft({}, s.__s)), ft(s.__s, v.getDerivedStateFromProps(p, s.__s))), u = s.props, c = s.state, d)
          v.getDerivedStateFromProps == null && s.componentWillMount != null && s.componentWillMount(), s.componentDidMount != null && s.__h.push(s.componentDidMount);
        else {
          if (v.getDerivedStateFromProps == null && p !== u && s.componentWillReceiveProps != null && s.componentWillReceiveProps(p, g), !s.__e && s.shouldComponentUpdate != null && s.shouldComponentUpdate(p, s.__s, g) === !1 || t.__v === n.__v) {
            for (s.props = p, s.state = s.__s, t.__v !== n.__v && (s.__d = !1), s.__v = t, t.__e = n.__e, t.__k = n.__k, t.__k.forEach(function($) {
              $ && ($.__ = t);
            }), w = 0; w < s._sb.length; w++)
              s.__h.push(s._sb[w]);
            s._sb = [], s.__h.length && l.push(s);
            break e;
          }
          s.componentWillUpdate != null && s.componentWillUpdate(p, s.__s, g), s.componentDidUpdate != null && s.__h.push(function() {
            s.componentDidUpdate(u, c, f);
          });
        }
        if (s.context = g, s.props = p, s.__v = t, s.__P = e, k = U.__r, T = 0, "prototype" in v && v.prototype.render) {
          for (s.state = s.__s, s.__d = !1, k && k(t), h = s.render(s.props, s.state, s.context), C = 0; C < s._sb.length; C++)
            s.__h.push(s._sb[C]);
          s._sb = [];
        } else
          do
            s.__d = !1, k && k(t), h = s.render(s.props, s.state, s.context), s.state = s.__s;
          while (s.__d && ++T < 25);
        s.state = s.__s, s.getChildContext != null && (o = ft(ft({}, o), s.getChildContext())), d || s.getSnapshotBeforeUpdate == null || (f = s.getSnapshotBeforeUpdate(u, c)), S = h != null && h.type === Ci && h.key == null ? h.props.children : h, Fa(e, Array.isArray(S) ? S : [S], t, n, o, i, r, l, _, a), s.base = t.__e, t.__h = null, s.__h.length && l.push(s), y && (s.__E = s.__ = null), s.__e = !1;
      } else
        r == null && t.__v === n.__v ? (t.__k = n.__k, t.__e = n.__e) : t.__e = jp(n.__e, t, n, o, i, r, l, a);
    (h = U.diffed) && h(t);
  } catch ($) {
    t.__v = null, (a || r != null) && (t.__e = _, t.__h = !!a, r[r.indexOf(_)] = null), U.__e($, t, n);
  }
}
function za(e, t) {
  U.__c && U.__c(t, e), e.some(function(n) {
    try {
      e = n.__h, n.__h = [], e.some(function(o) {
        o.call(n);
      });
    } catch (o) {
      U.__e(o, n.__v);
    }
  });
}
function jp(e, t, n, o, i, r, l, _) {
  var a, h, s, d = n.props, u = t.props, c = t.type, f = 0;
  if (c === "svg" && (i = !0), r != null) {
    for (; f < r.length; f++)
      if ((a = r[f]) && "setAttribute" in a == !!c && (c ? a.localName === c : a.nodeType === 3)) {
        e = a, r[f] = null;
        break;
      }
  }
  if (e == null) {
    if (c === null)
      return document.createTextNode(u);
    e = i ? document.createElementNS("http://www.w3.org/2000/svg", c) : document.createElement(c, u.is && u), r = null, _ = !1;
  }
  if (c === null)
    d === u || _ && e.data === u || (e.data = u);
  else {
    if (r = r && Si.call(e.childNodes), h = (d = n.props || Br).dangerouslySetInnerHTML, s = u.dangerouslySetInnerHTML, !_) {
      if (r != null)
        for (d = {}, f = 0; f < e.attributes.length; f++)
          d[e.attributes[f].name] = e.attributes[f].value;
      (s || h) && (s && (h && s.__html == h.__html || s.__html === e.innerHTML) || (e.innerHTML = s && s.__html || ""));
    }
    if (Fp(e, u, d, i, _), s)
      t.__k = [];
    else if (f = t.props.children, Fa(e, Array.isArray(f) ? f : [f], t, n, o, i && c !== "foreignObject", r, l, r ? r[0] : n.__k && xo(n, 0), _), r != null)
      for (f = r.length; f--; )
        r[f] != null && Ia(r[f]);
    _ || ("value" in u && (f = u.value) !== void 0 && (f !== e.value || c === "progress" && !f || c === "option" && f !== d.value) && Vr(e, "value", f, d.value, !1), "checked" in u && (f = u.checked) !== void 0 && f !== e.checked && Vr(e, "checked", f, d.checked, !1));
  }
  return e;
}
function Va(e, t, n) {
  try {
    typeof e == "function" ? e(t) : e.current = t;
  } catch (o) {
    U.__e(o, n);
  }
}
function qa(e, t, n) {
  var o, i;
  if (U.unmount && U.unmount(e), (o = e.ref) && (o.current && o.current !== e.__e || Va(o, null, t)), (o = e.__c) != null) {
    if (o.componentWillUnmount)
      try {
        o.componentWillUnmount();
      } catch (r) {
        U.__e(r, t);
      }
    o.base = o.__P = null, e.__c = void 0;
  }
  if (o = e.__k)
    for (i = 0; i < o.length; i++)
      o[i] && qa(o[i], t, n || typeof e.type != "function");
  n || e.__e == null || Ia(e.__e), e.__ = e.__e = e.__d = void 0;
}
function Bp(e, t, n) {
  return this.constructor(e, n);
}
function zp(e, t, n) {
  var o, i, r;
  U.__ && U.__(e, t), i = (o = typeof n == "function") ? null : n && n.__k || t.__k, r = [], Tl(t, e = (!o && n || t).__k = Wa(Ci, null, [e]), i || Br, Br, t.ownerSVGElement !== void 0, !o && n ? [n] : i ? null : t.firstChild ? Si.call(t.childNodes) : null, r, !o && n ? n : i ? i.__e : t.firstChild, o), za(r, e);
}
Si = Oa.slice, U = { __e: function(e, t, n, o) {
  for (var i, r, l; t = t.__; )
    if ((i = t.__c) && !i.__)
      try {
        if ((r = i.constructor) && r.getDerivedStateFromError != null && (i.setState(r.getDerivedStateFromError(e)), l = i.__d), i.componentDidCatch != null && (i.componentDidCatch(e, o || {}), l = i.__d), l)
          return i.__E = i;
      } catch (_) {
        e = _;
      }
  throw e;
} }, Da = 0, Ha = function(e) {
  return e != null && e.constructor === void 0;
}, Tr.prototype.setState = function(e, t) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = ft({}, this.state), typeof e == "function" && (e = e(ft({}, n), this.props)), e && ft(n, e), e != null && this.__v && (t && this._sb.push(t), xc(this));
}, Tr.prototype.forceUpdate = function(e) {
  this.__v && (this.__e = !0, e && this.__h.push(e), xc(this));
}, Tr.prototype.render = Ci, Bn = [], zr.__r = 0;
var Vp = 0;
function Ga(e, t, n, o, i) {
  var r, l, _ = {};
  for (l in t)
    l == "ref" ? r = t[l] : _[l] = t[l];
  var a = { type: e, props: _, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: --Vp, __source: i, __self: o };
  if (typeof e == "function" && (r = e.defaultProps))
    for (l in r)
      _[l] === void 0 && (_[l] = r[l]);
  return U.vnode && U.vnode(a), a;
}
var qe;
class qp {
  constructor(t = "") {
    x(this, qe, void 0);
    typeof t == "object" ? L(this, qe, t) : L(this, qe, document.appendChild(document.createComment(t)));
  }
  on(t, n, o) {
    b(this, qe).addEventListener(t, n, o);
  }
  once(t, n, o) {
    b(this, qe).addEventListener(t, n, { once: !0, ...o });
  }
  off(t, n, o) {
    b(this, qe).removeEventListener(t, n, o);
  }
  emit(t) {
    return b(this, qe).dispatchEvent(t), t;
  }
}
qe = new WeakMap();
const al = /* @__PURE__ */ new Set([
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
class Al extends qp {
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
    return typeof t == "string" && (al.has(t) ? (t = new Event(t), Object.assign(t, { detail: n })) : t = new CustomEvent(t, { detail: n })), super.emit(Al.createEvent(t, n));
  }
  static createEvent(t, n) {
    return typeof t == "string" && (al.has(t) ? (t = new Event(t), Object.assign(t, { detail: n })) : t = new CustomEvent(t, { detail: n })), t;
  }
}
var Ge, Bo, Wt, On;
class Tc extends Al {
  constructor(n = "", o) {
    super(n);
    x(this, Wt);
    x(this, Ge, /* @__PURE__ */ new Map());
    x(this, Bo, void 0);
    L(this, Bo, o == null ? void 0 : o.customEventSuffix);
  }
  on(n, o, i) {
    n = N(this, Wt, On).call(this, n), super.on(n, o, i), b(this, Ge).set(o, [n, i]);
  }
  off(n, o, i) {
    n = N(this, Wt, On).call(this, n), super.off(n, o, i), b(this, Ge).delete(o);
  }
  once(n, o, i) {
    n = N(this, Wt, On).call(this, n);
    const r = (l) => {
      o(l), b(this, Ge).delete(r);
    };
    super.once(n, r, i), b(this, Ge).set(r, [n, i]);
  }
  emit(n, o) {
    return typeof n == "string" && (n = N(this, Wt, On).call(this, n)), super.emit(n, o);
  }
  offAll() {
    Array.from(b(this, Ge).entries()).forEach(([n, [o, i]]) => {
      super.off(o, n, i);
    }), b(this, Ge).clear();
  }
}
Ge = new WeakMap(), Bo = new WeakMap(), Wt = new WeakSet(), On = function(n) {
  const o = b(this, Bo);
  return al.has(n) || typeof o != "string" || n.endsWith(o) ? n : `${n}${o}`;
};
function Gp(e, t) {
  if (e == null)
    return [e, void 0];
  typeof t == "string" && (t = t.split("."));
  const n = t.join(".");
  let o = e;
  const i = [o];
  for (; typeof o == "object" && o !== null && t.length; ) {
    let r = t.shift(), l;
    const _ = r.indexOf("[");
    if (_ > 0 && _ < r.length - 1 && r.endsWith("]") && (l = r.substring(_ + 1, r.length - 1), r = r.substring(0, _)), o = o[r], i.push(o), l !== void 0)
      if (typeof o == "object" && o !== null)
        o instanceof Map ? o = o.get(l) : o = o[l], i.push(o);
      else
        throw new Error(`Cannot access property "${r}[${l}]", the full path is "${n}".`);
  }
  if (t.length)
    throw new Error(`Cannot access property with rest path "${t.join(".")}", the full path is "${n}".`);
  return i;
}
function Yp(e, t, n) {
  const o = Gp(e, t), i = o[o.length - 1];
  return i === void 0 ? n : i;
}
function Vi(e) {
  return !!e && typeof e == "object" && !Array.isArray(e);
}
function ul(e, ...t) {
  if (!t.length)
    return e;
  const n = t.shift();
  if (Vi(e) && Vi(n))
    for (const o in n)
      Vi(n[o]) ? (e[o] || Object.assign(e, { [o]: {} }), ul(e[o], n[o])) : Object.assign(e, { [o]: n[o] });
  return ul(e, ...t);
}
function ye(e, ...t) {
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
var Ll = /* @__PURE__ */ ((e) => (e[e.B = 1] = "B", e[e.KB = 1024] = "KB", e[e.MB = 1048576] = "MB", e[e.GB = 1073741824] = "GB", e[e.TB = 1099511627776] = "TB", e))(Ll || {});
function Db(e, t = 2, n = "") {
  return Number.isNaN(e) ? "?KB" : (n || (e < 1024 ? n = "B" : e < 1048576 ? n = "KB" : e < 1073741824 ? n = "MB" : e < 1099511627776 ? n = "GB" : n = "TB"), (e / Ll[n]).toFixed(t) + n);
}
const Hb = (e) => {
  const t = /^[0-9]*(B|KB|MB|GB|TB)$/;
  e = e.toUpperCase();
  const n = e.match(t);
  if (!n)
    return 0;
  const o = n[1];
  return e = e.replace(o, ""), Number.parseInt(e, 10) * Ll[o];
};
var Pa;
let Nl = ((Pa = document.documentElement.getAttribute("lang")) == null ? void 0 : Pa.toLowerCase()) ?? "zh_cn", st;
function Kp() {
  return Nl;
}
function Xp(e) {
  Nl = e.toLowerCase();
}
function Jp(e, t) {
  st || (st = {}), typeof e == "string" && (e = { [e]: t ?? {} }), ul(st, e);
}
function dr(e, t, n, o, i, r) {
  Array.isArray(e) ? st && e.unshift(st) : e = st ? [st, e] : [e], typeof n == "string" && (r = i, i = o, o = n, n = void 0);
  const l = i || Nl;
  let _;
  for (const a of e) {
    if (!a)
      continue;
    const h = a[l];
    if (!h)
      continue;
    const s = r && a === st ? `${r}.${t}` : t;
    if (_ = Yp(h, s), _ !== void 0)
      break;
  }
  return _ === void 0 ? o : n ? ye(_, ...Array.isArray(n) ? n : [n]) : _;
}
dr.addLang = Jp;
dr.getCode = Kp;
dr.setCode = Xp;
function Zp(e) {
  return Object.fromEntries(Object.entries(e).map(([t, n]) => {
    if (typeof n == "string")
      try {
        n = JSON.parse(n);
      } catch {
      }
    return [t, n];
  }));
}
const qi = /* @__PURE__ */ new Map();
var Ye, on, Ce;
class Qe {
  constructor(t, n) {
    x(this, Ye, void 0);
    x(this, on, void 0);
    x(this, Ce, void 0);
    t = typeof t == "string" ? document.querySelector(t) : t, this.constructor.EVENTS && L(this, Ce, new Tc(t, { customEventSuffix: `.${this.constructor.KEY}` })), L(this, Ye, { ...this.constructor.DEFAULT }), this.setOptions({ ...t instanceof HTMLElement ? Zp(t.dataset) : null, ...n }), this.constructor.all.set(t, this), L(this, on, t), this.init(), requestAnimationFrame(() => {
      this.afterInit(), this.emit("inited", this);
    });
  }
  get options() {
    return b(this, Ye);
  }
  get element() {
    return b(this, on);
  }
  get events() {
    return b(this, Ce);
  }
  init() {
  }
  afterInit() {
  }
  setOptions(t) {
    return t && Object.assign(b(this, Ye), t), b(this, Ye);
  }
  render(t) {
    this.setOptions(t);
  }
  destroy() {
    this.constructor.all.delete(b(this, on)), b(this, Ce) && (this.emit("destroyed", this), b(this, Ce).offAll());
  }
  on(t, n, o) {
    var i;
    (i = b(this, Ce)) == null || i.on(t, n, o);
  }
  once(t, n, o) {
    var i;
    (i = b(this, Ce)) == null || i.once(t, n, o);
  }
  off(t, n, o) {
    var i;
    (i = b(this, Ce)) == null || i.off(t, n, o);
  }
  emit(t, n, o) {
    var r;
    let i = Tc.createEvent(t, n);
    if (o !== !1) {
      const l = o || `on${t[0].toUpperCase()}${t.substring(1)}`, _ = b(this, Ye)[l];
      _ && _(i) === !1 && (i.preventDefault(), i.stopPropagation());
    }
    return i = (r = b(this, Ce)) == null ? void 0 : r.emit(t, n), i;
  }
  i18n(t, n, o) {
    return dr(b(this, Ye).i18n, t, n, o, this.options.lang, this.constructor.NAME) ?? `{i18n:${t}}`;
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
    if (qi.has(t))
      return qi.get(t);
    const n = /* @__PURE__ */ new Map();
    return qi.set(t, n), n;
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
Ye = new WeakMap(), on = new WeakMap(), Ce = new WeakMap(), E(Qe, "EVENTS", !1), E(Qe, "DEFAULT", {});
class ae extends Qe {
  constructor() {
    super(...arguments);
    E(this, "ref", Up());
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
    zp(/* @__PURE__ */ Ga(o, { ref: this.ref, ...this.setOptions(n) }), this.element);
  }
}
E(ae, "Component");
var Rl, V, Ya, Ka, zn, Ac, Xa = {}, Ja = [], Qp = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function ht(e, t) {
  for (var n in t)
    e[n] = t[n];
  return e;
}
function Za(e) {
  var t = e.parentNode;
  t && t.removeChild(e);
}
function Ln(e, t, n) {
  var o, i, r, l = {};
  for (r in t)
    r == "key" ? o = t[r] : r == "ref" ? i = t[r] : l[r] = t[r];
  if (arguments.length > 2 && (l.children = arguments.length > 3 ? Rl.call(arguments, 2) : n), typeof e == "function" && e.defaultProps != null)
    for (r in e.defaultProps)
      l[r] === void 0 && (l[r] = e.defaultProps[r]);
  return Ar(e, l, o, i, null);
}
function Ar(e, t, n, o, i) {
  var r = { type: e, props: t, key: n, ref: o, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: i ?? ++Ya };
  return i == null && V.vnode != null && V.vnode(r), r;
}
function em() {
  return { current: null };
}
function Ml(e) {
  return e.children;
}
function Vn(e, t) {
  this.props = e, this.context = t;
}
function So(e, t) {
  if (t == null)
    return e.__ ? So(e.__, e.__.__k.indexOf(e) + 1) : null;
  for (var n; t < e.__k.length; t++)
    if ((n = e.__k[t]) != null && n.__e != null)
      return n.__e;
  return typeof e.type == "function" ? So(e) : null;
}
function Qa(e) {
  var t, n;
  if ((e = e.__) != null && e.__c != null) {
    for (e.__e = e.__c.base = null, t = 0; t < e.__k.length; t++)
      if ((n = e.__k[t]) != null && n.__e != null) {
        e.__e = e.__c.base = n.__e;
        break;
      }
    return Qa(e);
  }
}
function Lc(e) {
  (!e.__d && (e.__d = !0) && zn.push(e) && !qr.__r++ || Ac !== V.debounceRendering) && ((Ac = V.debounceRendering) || setTimeout)(qr);
}
function qr() {
  for (var e; qr.__r = zn.length; )
    e = zn.sort(function(t, n) {
      return t.__v.__b - n.__v.__b;
    }), zn = [], e.some(function(t) {
      var n, o, i, r, l, _;
      t.__d && (l = (r = (n = t).__v).__e, (_ = n.__P) && (o = [], (i = ht({}, r)).__v = r.__v + 1, ou(_, r, i, n.__n, _.ownerSVGElement !== void 0, r.__h != null ? [l] : null, o, l ?? So(r), r.__h), nm(o, r), r.__e != l && Qa(r)));
    });
}
function eu(e, t, n, o, i, r, l, _, a, h) {
  var s, d, u, c, f, y, p, m = o && o.__k || Ja, g = m.length;
  for (n.__k = [], s = 0; s < t.length; s++)
    if ((c = n.__k[s] = (c = t[s]) == null || typeof c == "boolean" ? null : typeof c == "string" || typeof c == "number" || typeof c == "bigint" ? Ar(null, c, null, null, c) : Array.isArray(c) ? Ar(Ml, { children: c }, null, null, null) : c.__b > 0 ? Ar(c.type, c.props, c.key, c.ref ? c.ref : null, c.__v) : c) != null) {
      if (c.__ = n, c.__b = n.__b + 1, (u = m[s]) === null || u && c.key == u.key && c.type === u.type)
        m[s] = void 0;
      else
        for (d = 0; d < g; d++) {
          if ((u = m[d]) && c.key == u.key && c.type === u.type) {
            m[d] = void 0;
            break;
          }
          u = null;
        }
      ou(e, c, u = u || Xa, i, r, l, _, a, h), f = c.__e, (d = c.ref) && u.ref != d && (p || (p = []), u.ref && p.push(u.ref, null, c), p.push(d, c.__c || f, c)), f != null ? (y == null && (y = f), typeof c.type == "function" && c.__k === u.__k ? c.__d = a = tu(c, a, e) : a = nu(e, c, u, m, f, a), typeof n.type == "function" && (n.__d = a)) : a && u.__e == a && a.parentNode != e && (a = So(u));
    }
  for (n.__e = y, s = g; s--; )
    m[s] != null && su(m[s], m[s]);
  if (p)
    for (s = 0; s < p.length; s++)
      ru(p[s], p[++s], p[++s]);
}
function tu(e, t, n) {
  for (var o, i = e.__k, r = 0; i && r < i.length; r++)
    (o = i[r]) && (o.__ = e, t = typeof o.type == "function" ? tu(o, t, n) : nu(n, o, o, i, o.__e, t));
  return t;
}
function nu(e, t, n, o, i, r) {
  var l, _, a;
  if (t.__d !== void 0)
    l = t.__d, t.__d = void 0;
  else if (n == null || i != r || i.parentNode == null)
    e:
      if (r == null || r.parentNode !== e)
        e.appendChild(i), l = null;
      else {
        for (_ = r, a = 0; (_ = _.nextSibling) && a < o.length; a += 2)
          if (_ == i)
            break e;
        e.insertBefore(i, r), l = r;
      }
  return l !== void 0 ? l : i.nextSibling;
}
function tm(e, t, n, o, i) {
  var r;
  for (r in n)
    r === "children" || r === "key" || r in t || Gr(e, r, null, n[r], o);
  for (r in t)
    i && typeof t[r] != "function" || r === "children" || r === "key" || r === "value" || r === "checked" || n[r] === t[r] || Gr(e, r, t[r], n[r], o);
}
function Nc(e, t, n) {
  t[0] === "-" ? e.setProperty(t, n) : e[t] = n == null ? "" : typeof n != "number" || Qp.test(t) ? n : n + "px";
}
function Gr(e, t, n, o, i) {
  var r;
  e:
    if (t === "style")
      if (typeof n == "string")
        e.style.cssText = n;
      else {
        if (typeof o == "string" && (e.style.cssText = o = ""), o)
          for (t in o)
            n && t in n || Nc(e.style, t, "");
        if (n)
          for (t in n)
            o && n[t] === o[t] || Nc(e.style, t, n[t]);
      }
    else if (t[0] === "o" && t[1] === "n")
      r = t !== (t = t.replace(/Capture$/, "")), t = t.toLowerCase() in e ? t.toLowerCase().slice(2) : t.slice(2), e.l || (e.l = {}), e.l[t + r] = n, n ? o || e.addEventListener(t, r ? Mc : Rc, r) : e.removeEventListener(t, r ? Mc : Rc, r);
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
function Rc(e) {
  this.l[e.type + !1](V.event ? V.event(e) : e);
}
function Mc(e) {
  this.l[e.type + !0](V.event ? V.event(e) : e);
}
function ou(e, t, n, o, i, r, l, _, a) {
  var h, s, d, u, c, f, y, p, m, g, w, k, T, C, S, v = t.type;
  if (t.constructor !== void 0)
    return null;
  n.__h != null && (a = n.__h, _ = t.__e = n.__e, t.__h = null, r = [_]), (h = V.__b) && h(t);
  try {
    e:
      if (typeof v == "function") {
        if (p = t.props, m = (h = v.contextType) && o[h.__c], g = h ? m ? m.props.value : h.__ : o, n.__c ? y = (s = t.__c = n.__c).__ = s.__E : ("prototype" in v && v.prototype.render ? t.__c = s = new v(p, g) : (t.__c = s = new Vn(p, g), s.constructor = v, s.render = rm), m && m.sub(s), s.props = p, s.state || (s.state = {}), s.context = g, s.__n = o, d = s.__d = !0, s.__h = [], s._sb = []), s.__s == null && (s.__s = s.state), v.getDerivedStateFromProps != null && (s.__s == s.state && (s.__s = ht({}, s.__s)), ht(s.__s, v.getDerivedStateFromProps(p, s.__s))), u = s.props, c = s.state, d)
          v.getDerivedStateFromProps == null && s.componentWillMount != null && s.componentWillMount(), s.componentDidMount != null && s.__h.push(s.componentDidMount);
        else {
          if (v.getDerivedStateFromProps == null && p !== u && s.componentWillReceiveProps != null && s.componentWillReceiveProps(p, g), !s.__e && s.shouldComponentUpdate != null && s.shouldComponentUpdate(p, s.__s, g) === !1 || t.__v === n.__v) {
            for (s.props = p, s.state = s.__s, t.__v !== n.__v && (s.__d = !1), s.__v = t, t.__e = n.__e, t.__k = n.__k, t.__k.forEach(function($) {
              $ && ($.__ = t);
            }), w = 0; w < s._sb.length; w++)
              s.__h.push(s._sb[w]);
            s._sb = [], s.__h.length && l.push(s);
            break e;
          }
          s.componentWillUpdate != null && s.componentWillUpdate(p, s.__s, g), s.componentDidUpdate != null && s.__h.push(function() {
            s.componentDidUpdate(u, c, f);
          });
        }
        if (s.context = g, s.props = p, s.__v = t, s.__P = e, k = V.__r, T = 0, "prototype" in v && v.prototype.render) {
          for (s.state = s.__s, s.__d = !1, k && k(t), h = s.render(s.props, s.state, s.context), C = 0; C < s._sb.length; C++)
            s.__h.push(s._sb[C]);
          s._sb = [];
        } else
          do
            s.__d = !1, k && k(t), h = s.render(s.props, s.state, s.context), s.state = s.__s;
          while (s.__d && ++T < 25);
        s.state = s.__s, s.getChildContext != null && (o = ht(ht({}, o), s.getChildContext())), d || s.getSnapshotBeforeUpdate == null || (f = s.getSnapshotBeforeUpdate(u, c)), S = h != null && h.type === Ml && h.key == null ? h.props.children : h, eu(e, Array.isArray(S) ? S : [S], t, n, o, i, r, l, _, a), s.base = t.__e, t.__h = null, s.__h.length && l.push(s), y && (s.__E = s.__ = null), s.__e = !1;
      } else
        r == null && t.__v === n.__v ? (t.__k = n.__k, t.__e = n.__e) : t.__e = om(n.__e, t, n, o, i, r, l, a);
    (h = V.diffed) && h(t);
  } catch ($) {
    t.__v = null, (a || r != null) && (t.__e = _, t.__h = !!a, r[r.indexOf(_)] = null), V.__e($, t, n);
  }
}
function nm(e, t) {
  V.__c && V.__c(t, e), e.some(function(n) {
    try {
      e = n.__h, n.__h = [], e.some(function(o) {
        o.call(n);
      });
    } catch (o) {
      V.__e(o, n.__v);
    }
  });
}
function om(e, t, n, o, i, r, l, _) {
  var a, h, s, d = n.props, u = t.props, c = t.type, f = 0;
  if (c === "svg" && (i = !0), r != null) {
    for (; f < r.length; f++)
      if ((a = r[f]) && "setAttribute" in a == !!c && (c ? a.localName === c : a.nodeType === 3)) {
        e = a, r[f] = null;
        break;
      }
  }
  if (e == null) {
    if (c === null)
      return document.createTextNode(u);
    e = i ? document.createElementNS("http://www.w3.org/2000/svg", c) : document.createElement(c, u.is && u), r = null, _ = !1;
  }
  if (c === null)
    d === u || _ && e.data === u || (e.data = u);
  else {
    if (r = r && Rl.call(e.childNodes), h = (d = n.props || Xa).dangerouslySetInnerHTML, s = u.dangerouslySetInnerHTML, !_) {
      if (r != null)
        for (d = {}, f = 0; f < e.attributes.length; f++)
          d[e.attributes[f].name] = e.attributes[f].value;
      (s || h) && (s && (h && s.__html == h.__html || s.__html === e.innerHTML) || (e.innerHTML = s && s.__html || ""));
    }
    if (tm(e, u, d, i, _), s)
      t.__k = [];
    else if (f = t.props.children, eu(e, Array.isArray(f) ? f : [f], t, n, o, i && c !== "foreignObject", r, l, r ? r[0] : n.__k && So(n, 0), _), r != null)
      for (f = r.length; f--; )
        r[f] != null && Za(r[f]);
    _ || ("value" in u && (f = u.value) !== void 0 && (f !== e.value || c === "progress" && !f || c === "option" && f !== d.value) && Gr(e, "value", f, d.value, !1), "checked" in u && (f = u.checked) !== void 0 && f !== e.checked && Gr(e, "checked", f, d.checked, !1));
  }
  return e;
}
function ru(e, t, n) {
  try {
    typeof e == "function" ? e(t) : e.current = t;
  } catch (o) {
    V.__e(o, n);
  }
}
function su(e, t, n) {
  var o, i;
  if (V.unmount && V.unmount(e), (o = e.ref) && (o.current && o.current !== e.__e || ru(o, null, t)), (o = e.__c) != null) {
    if (o.componentWillUnmount)
      try {
        o.componentWillUnmount();
      } catch (r) {
        V.__e(r, t);
      }
    o.base = o.__P = null, e.__c = void 0;
  }
  if (o = e.__k)
    for (i = 0; i < o.length; i++)
      o[i] && su(o[i], t, n || typeof e.type != "function");
  n || e.__e == null || Za(e.__e), e.__ = e.__e = e.__d = void 0;
}
function rm(e, t, n) {
  return this.constructor(e, n);
}
Rl = Ja.slice, V = { __e: function(e, t, n, o) {
  for (var i, r, l; t = t.__; )
    if ((i = t.__c) && !i.__)
      try {
        if ((r = i.constructor) && r.getDerivedStateFromError != null && (i.setState(r.getDerivedStateFromError(e)), l = i.__d), i.componentDidCatch != null && (i.componentDidCatch(e, o || {}), l = i.__d), l)
          return i.__E = i;
      } catch (_) {
        e = _;
      }
  throw e;
} }, Ya = 0, Ka = function(e) {
  return e != null && e.constructor === void 0;
}, Vn.prototype.setState = function(e, t) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = ht({}, this.state), typeof e == "function" && (e = e(ht({}, n), this.props)), e && ht(n, e), e != null && this.__v && (t && this._sb.push(t), Lc(this));
}, Vn.prototype.forceUpdate = function(e) {
  this.__v && (this.__e = !0, e && this.__h.push(e), Lc(this));
}, Vn.prototype.render = Ml, zn = [], qr.__r = 0;
var sm = 0;
function $e(e, t, n, o, i) {
  var r, l, _ = {};
  for (l in t)
    l == "ref" ? r = t[l] : _[l] = t[l];
  var a = { type: e, props: _, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: --sm, __source: i, __self: o };
  if (typeof e == "function" && (r = e.defaultProps))
    for (l in r)
      _[l] === void 0 && (_[l] = r[l]);
  return V.vnode && V.vnode(a), a;
}
function Ei(...e) {
  const t = [], n = /* @__PURE__ */ new Map(), o = (i, r) => {
    if (Array.isArray(i) && (r = i[1], i = i[0]), !i.length)
      return;
    const l = n.get(i);
    typeof l == "number" ? t[l][1] = !!r : (n.set(i, t.length), t.push([i, !!r]));
  };
  return e.forEach((i) => {
    typeof i == "function" && (i = i()), Array.isArray(i) ? Ei(...i).forEach(o) : i && typeof i == "object" ? Object.entries(i).forEach(o) : typeof i == "string" && i.split(" ").forEach((r) => o(r, !0));
  }), t.sort((i, r) => (n.get(i[0]) || 0) - (n.get(r[0]) || 0));
}
const M = (...e) => Ei(...e).reduce((t, [n, o]) => (o && t.push(n), t), []).join(" ");
function im({
  component: e = "div",
  className: t,
  children: n,
  style: o,
  attrs: i
}) {
  return Ln(e, {
    className: M(t),
    style: o,
    ...i
  }, n);
}
function iu({
  component: e = "a",
  className: t,
  children: n,
  attrs: o,
  url: i,
  disabled: r,
  active: l,
  icon: _,
  text: a,
  target: h,
  trailingIcon: s,
  hint: d,
  style: u,
  onClick: c
}) {
  const f = [
    typeof _ == "string" ? /* @__PURE__ */ $e("i", { class: `icon ${_}` }) : _,
    /* @__PURE__ */ $e("span", { className: "text", children: a }),
    typeof n == "function" ? n() : n,
    typeof s == "string" ? /* @__PURE__ */ $e("i", { class: `icon ${s}` }) : s
  ];
  return Ln(e, {
    className: M(t, { disabled: r, active: l }),
    title: d,
    [e === "a" ? "href" : "data-url"]: i,
    [e === "a" ? "target" : "data-target"]: h,
    style: u,
    onClick: c,
    ...o
  }, ...f);
}
function lm({
  component: e = "div",
  className: t,
  text: n,
  attrs: o,
  children: i,
  style: r,
  onClick: l
}) {
  return Ln(e, {
    className: M(t),
    style: r,
    onClick: l,
    ...o
  }, n, typeof i == "function" ? i() : i);
}
function cm({
  component: e = "div",
  className: t,
  style: n,
  space: o,
  flex: i,
  attrs: r,
  onClick: l,
  children: _
}) {
  return Ln(e, {
    className: M(t),
    style: { width: o, height: o, flex: i, ...n },
    onClick: l,
    ...r
  }, _);
}
function _m(e) {
  const {
    tag: t,
    className: n,
    style: o,
    renders: i,
    generateArgs: r = [],
    generatorThis: l,
    generators: _,
    onGenerate: a,
    onRenderItem: h,
    ...s
  } = e, d = [n], u = { ...o }, c = [], f = [];
  return i.forEach((y) => {
    const p = [];
    typeof y == "string" && _ && _[y] && (y = _[y]), typeof y == "function" ? a ? p.push(...a.call(l, y, c, ...r)) : p.push(...y.call(l, c, ...r) ?? []) : p.push(y), p.forEach((m) => {
      m != null && (typeof m == "object" && !Ha(m) && ("html" in m || "__html" in m || "className" in m || "style" in m || "attrs" in m || "children" in m) ? m.html ? c.push(
        /* @__PURE__ */ Ga("div", { className: M(m.className), style: m.style, dangerouslySetInnerHTML: { __html: m.html }, ...m.attrs ?? {} })
      ) : m.__html ? f.push(m.__html) : (m.style && Object.assign(u, m.style), m.className && d.push(m.className), m.children && c.push(m.children), m.attrs && Object.assign(s, m.attrs)) : c.push(m));
    });
  }), f.length && Object.assign(s, { dangerouslySetInnerHTML: { __html: f } }), [{
    className: M(d),
    style: u,
    ...s
  }, c];
}
function fl({
  tag: e = "div",
  ...t
}) {
  const [n, o] = _m(t);
  return Wa(e, n, ...o);
}
function am({ type: e, ...t }) {
  return /* @__PURE__ */ $e(fl, { ...t });
}
function lu({
  component: e = "div",
  className: t,
  children: n,
  style: o,
  attrs: i
}) {
  return Ln(e, {
    className: M(t),
    style: o,
    ...i
  }, n);
}
var Je;
let Ti = (Je = class extends Vn {
  constructor() {
    super(...arguments);
    E(this, "ref", em());
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
    const { commonItemProps: r, onClickItem: l } = n, _ = { key: i, ...o };
    return r && Object.assign(_, r[o.type || "item"]), (l || o.onClick) && (_.onClick = this.handleItemClick.bind(this, _, i, o.onClick)), _.className = M(_.className), _;
  }
  renderItem(n, o, i) {
    const r = this.getItemRenderProps(n, o, i), { itemRender: l } = n;
    if (l) {
      if (typeof l == "object") {
        const p = l[o.type || "item"];
        if (p)
          return /* @__PURE__ */ $e(p, { ...r });
      } else if (typeof l == "function") {
        const p = l.call(this, r, Ln);
        if (Ka(p))
          return p;
        typeof p == "object" && Object.assign(r, p);
      }
    }
    const { type: _ = "item", component: a, key: h = i, rootAttrs: s, rootClass: d, rootStyle: u, rootChildren: c, ...f } = r;
    if (_ === "html")
      return /* @__PURE__ */ $e(
        "li",
        {
          className: M("action-menu-item", `${this.name}-html`, d, f.className),
          ...s,
          style: u || f.style,
          dangerouslySetInnerHTML: { __html: f.html }
        },
        h
      );
    const y = !a || typeof a == "string" ? this.constructor.ItemComponents && this.constructor.ItemComponents[_] || Je.ItemComponents[_] : a;
    return Object.assign(f, {
      type: _,
      component: typeof a == "string" ? a : void 0
    }), this.renderTypedItem(y, {
      className: M(d),
      children: c,
      style: u,
      key: h,
      ...s
    }, {
      ...f,
      type: _,
      component: typeof a == "string" ? a : void 0
    });
  }
  renderTypedItem(n, o, i) {
    const { children: r, className: l, key: _, ...a } = o, { activeClass: h = "", activeKey: s, activeIcon: d } = this.props, u = d && s === _ ? /* @__PURE__ */ $e("i", { className: `checked icon icon-${d}` }) : null, c = s === _;
    return /* @__PURE__ */ $e(
      "li",
      {
        className: M("action-menu-item", `${this.name}-${i.type}`, l, { [h]: c }),
        ...a,
        children: [
          /* @__PURE__ */ $e(n, { ...i }),
          u,
          typeof r == "function" ? r() : r
        ]
      },
      _
    );
  }
  render() {
    const n = this.beforeRender(), {
      name: o,
      style: i,
      commonItemProps: r,
      className: l,
      items: _,
      children: a,
      itemRender: h,
      onClickItem: s,
      beforeRender: d,
      afterRender: u,
      beforeDestroy: c,
      activeClass: f,
      activeKey: y,
      ...p
    } = n, m = this.constructor.ROOT_TAG;
    return /* @__PURE__ */ $e(m, { class: M(this.name, l), style: i, ...p, ref: this.ref, children: [
      _ && _.map(this.renderItem.bind(this, n)),
      a
    ] });
  }
}, E(Je, "ItemComponents", {
  divider: im,
  item: iu,
  heading: lm,
  space: cm,
  custom: am,
  basic: lu
}), E(Je, "ROOT_TAG", "menu"), E(Je, "NAME", "action-menu"), Je);
class Pc extends ae {
}
E(Pc, "NAME", "actionmenu"), E(Pc, "Component", Ti);
function Dc({
  ...e
}) {
  return /* @__PURE__ */ $e(iu, { ...e });
}
var il, zo, Ne, rn;
let cu = (il = class extends Ti {
  constructor(n) {
    super(n);
    x(this, zo, /* @__PURE__ */ new Set());
    x(this, Ne, void 0);
    x(this, rn, (n, o, i) => {
      this.toggleNestedMenu(n, o), i.preventDefault();
    });
    L(this, Ne, n.nestedShow === void 0), b(this, Ne) && (this.state = { nestedShow: n.defaultNestedShow ?? {} });
  }
  get nestedTrigger() {
    return this.props.nestedTrigger;
  }
  beforeRender() {
    const n = super.beforeRender(), { nestedShow: o, nestedTrigger: i, defaultNestedShow: r, controlledMenu: l, ..._ } = n;
    return _;
  }
  renderNestedMenu(n) {
    let { items: o } = n;
    if (!o || (typeof o == "function" && (o = o(n, this)), !o.length))
      return;
    const i = this.constructor, { name: r, controlledMenu: l, nestedShow: _, beforeDestroy: a, beforeRender: h, itemRender: s, activeClass: d, activeKey: u, onClickItem: c, afterRender: f, commonItemProps: y, activeIcon: p } = this.props;
    return /* @__PURE__ */ $e(
      i,
      {
        items: o,
        name: r,
        nestedShow: b(this, Ne) ? this.state.nestedShow : _,
        nestedTrigger: this.nestedTrigger,
        controlledMenu: l || this,
        commonItemProps: y,
        onClickItem: c,
        afterRender: f,
        beforeRender: h,
        beforeDestroy: a,
        itemRender: s,
        activeClass: d,
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
  getItemRenderProps(n, o, i) {
    const r = super.getItemRenderProps(n, o, i);
    if (!this.isNestedItem(r))
      return r;
    const l = r.key ?? i;
    b(this, zo).add(l);
    const _ = this.isNestedMenuShow(l);
    if (_ && (r.rootChildren = [
      r.rootChildren,
      this.renderNestedMenu(o)
    ], r.component = Dc), this.nestedTrigger === "hover")
      r.rootAttrs = {
        ...r.rootAttrs,
        onMouseEnter: b(this, rn).bind(this, l, !0),
        onMouseLeave: b(this, rn).bind(this, l, !1)
      };
    else if (this.nestedTrigger === "click") {
      const { onClick: h } = r;
      r.onClick = (s) => {
        b(this, rn).call(this, l, void 0, s), h == null || h(s);
      };
    }
    const a = this.renderToggleIcon(_, r);
    return a && (r.children = [r.children, a]), r.rootClass = [r.rootClass, "has-nested-menu", _ ? "show" : ""], r;
  }
  isNestedMenuShow(n) {
    const o = b(this, Ne) ? this.state.nestedShow : this.props.nestedShow;
    return o && typeof o == "object" ? o[n] : !!o;
  }
  toggleNestedMenu(n, o) {
    const { controlledMenu: i } = this.props;
    if (i)
      return i.toggleNestedMenu(n, o);
    if (!b(this, Ne))
      return !1;
    let { nestedShow: r = {} } = this.state;
    if (typeof r == "boolean" && (r === !0 ? r = [...b(this, zo).values()].reduce((l, _) => (l[_] = !0, l), {}) : r = {}), o === void 0)
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
    b(this, Ne) && this.setState({ nestedShow: !0 });
  }
  hideAllNestedMenu() {
    b(this, Ne) && this.setState({ nestedShow: !1 });
  }
}, zo = new WeakMap(), Ne = new WeakMap(), rn = new WeakMap(), E(il, "ItemComponents", {
  item: Dc
}), il);
class Hc extends ae {
}
E(Hc, "NAME", "actionmenunested"), E(Hc, "Component", cu);
var Pl, q, _u, qn, Oc, au = {}, uu = [], um = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function dt(e, t) {
  for (var n in t)
    e[n] = t[n];
  return e;
}
function fu(e) {
  var t = e.parentNode;
  t && t.removeChild(e);
}
function fm(e, t, n) {
  var o, i, r, l = {};
  for (r in t)
    r == "key" ? o = t[r] : r == "ref" ? i = t[r] : l[r] = t[r];
  if (arguments.length > 2 && (l.children = arguments.length > 3 ? Pl.call(arguments, 2) : n), typeof e == "function" && e.defaultProps != null)
    for (r in e.defaultProps)
      l[r] === void 0 && (l[r] = e.defaultProps[r]);
  return Lr(e, l, o, i, null);
}
function Lr(e, t, n, o, i) {
  var r = { type: e, props: t, key: n, ref: o, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: i ?? ++_u };
  return i == null && q.vnode != null && q.vnode(r), r;
}
function Dl(e) {
  return e.children;
}
function Gn(e, t) {
  this.props = e, this.context = t;
}
function Co(e, t) {
  if (t == null)
    return e.__ ? Co(e.__, e.__.__k.indexOf(e) + 1) : null;
  for (var n; t < e.__k.length; t++)
    if ((n = e.__k[t]) != null && n.__e != null)
      return n.__e;
  return typeof e.type == "function" ? Co(e) : null;
}
function hu(e) {
  var t, n;
  if ((e = e.__) != null && e.__c != null) {
    for (e.__e = e.__c.base = null, t = 0; t < e.__k.length; t++)
      if ((n = e.__k[t]) != null && n.__e != null) {
        e.__e = e.__c.base = n.__e;
        break;
      }
    return hu(e);
  }
}
function Ic(e) {
  (!e.__d && (e.__d = !0) && qn.push(e) && !Yr.__r++ || Oc !== q.debounceRendering) && ((Oc = q.debounceRendering) || setTimeout)(Yr);
}
function Yr() {
  for (var e; Yr.__r = qn.length; )
    e = qn.sort(function(t, n) {
      return t.__v.__b - n.__v.__b;
    }), qn = [], e.some(function(t) {
      var n, o, i, r, l, _;
      t.__d && (l = (r = (n = t).__v).__e, (_ = n.__P) && (o = [], (i = dt({}, r)).__v = r.__v + 1, gu(_, r, i, n.__n, _.ownerSVGElement !== void 0, r.__h != null ? [l] : null, o, l ?? Co(r), r.__h), dm(o, r), r.__e != l && hu(r)));
    });
}
function du(e, t, n, o, i, r, l, _, a, h) {
  var s, d, u, c, f, y, p, m = o && o.__k || uu, g = m.length;
  for (n.__k = [], s = 0; s < t.length; s++)
    if ((c = n.__k[s] = (c = t[s]) == null || typeof c == "boolean" ? null : typeof c == "string" || typeof c == "number" || typeof c == "bigint" ? Lr(null, c, null, null, c) : Array.isArray(c) ? Lr(Dl, { children: c }, null, null, null) : c.__b > 0 ? Lr(c.type, c.props, c.key, c.ref ? c.ref : null, c.__v) : c) != null) {
      if (c.__ = n, c.__b = n.__b + 1, (u = m[s]) === null || u && c.key == u.key && c.type === u.type)
        m[s] = void 0;
      else
        for (d = 0; d < g; d++) {
          if ((u = m[d]) && c.key == u.key && c.type === u.type) {
            m[d] = void 0;
            break;
          }
          u = null;
        }
      gu(e, c, u = u || au, i, r, l, _, a, h), f = c.__e, (d = c.ref) && u.ref != d && (p || (p = []), u.ref && p.push(u.ref, null, c), p.push(d, c.__c || f, c)), f != null ? (y == null && (y = f), typeof c.type == "function" && c.__k === u.__k ? c.__d = a = pu(c, a, e) : a = mu(e, c, u, m, f, a), typeof n.type == "function" && (n.__d = a)) : a && u.__e == a && a.parentNode != e && (a = Co(u));
    }
  for (n.__e = y, s = g; s--; )
    m[s] != null && vu(m[s], m[s]);
  if (p)
    for (s = 0; s < p.length; s++)
      yu(p[s], p[++s], p[++s]);
}
function pu(e, t, n) {
  for (var o, i = e.__k, r = 0; i && r < i.length; r++)
    (o = i[r]) && (o.__ = e, t = typeof o.type == "function" ? pu(o, t, n) : mu(n, o, o, i, o.__e, t));
  return t;
}
function mu(e, t, n, o, i, r) {
  var l, _, a;
  if (t.__d !== void 0)
    l = t.__d, t.__d = void 0;
  else if (n == null || i != r || i.parentNode == null)
    e:
      if (r == null || r.parentNode !== e)
        e.appendChild(i), l = null;
      else {
        for (_ = r, a = 0; (_ = _.nextSibling) && a < o.length; a += 2)
          if (_ == i)
            break e;
        e.insertBefore(i, r), l = r;
      }
  return l !== void 0 ? l : i.nextSibling;
}
function hm(e, t, n, o, i) {
  var r;
  for (r in n)
    r === "children" || r === "key" || r in t || Kr(e, r, null, n[r], o);
  for (r in t)
    i && typeof t[r] != "function" || r === "children" || r === "key" || r === "value" || r === "checked" || n[r] === t[r] || Kr(e, r, t[r], n[r], o);
}
function Wc(e, t, n) {
  t[0] === "-" ? e.setProperty(t, n) : e[t] = n == null ? "" : typeof n != "number" || um.test(t) ? n : n + "px";
}
function Kr(e, t, n, o, i) {
  var r;
  e:
    if (t === "style")
      if (typeof n == "string")
        e.style.cssText = n;
      else {
        if (typeof o == "string" && (e.style.cssText = o = ""), o)
          for (t in o)
            n && t in n || Wc(e.style, t, "");
        if (n)
          for (t in n)
            o && n[t] === o[t] || Wc(e.style, t, n[t]);
      }
    else if (t[0] === "o" && t[1] === "n")
      r = t !== (t = t.replace(/Capture$/, "")), t = t.toLowerCase() in e ? t.toLowerCase().slice(2) : t.slice(2), e.l || (e.l = {}), e.l[t + r] = n, n ? o || e.addEventListener(t, r ? Fc : Uc, r) : e.removeEventListener(t, r ? Fc : Uc, r);
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
function Uc(e) {
  this.l[e.type + !1](q.event ? q.event(e) : e);
}
function Fc(e) {
  this.l[e.type + !0](q.event ? q.event(e) : e);
}
function gu(e, t, n, o, i, r, l, _, a) {
  var h, s, d, u, c, f, y, p, m, g, w, k, T, C, S, v = t.type;
  if (t.constructor !== void 0)
    return null;
  n.__h != null && (a = n.__h, _ = t.__e = n.__e, t.__h = null, r = [_]), (h = q.__b) && h(t);
  try {
    e:
      if (typeof v == "function") {
        if (p = t.props, m = (h = v.contextType) && o[h.__c], g = h ? m ? m.props.value : h.__ : o, n.__c ? y = (s = t.__c = n.__c).__ = s.__E : ("prototype" in v && v.prototype.render ? t.__c = s = new v(p, g) : (t.__c = s = new Gn(p, g), s.constructor = v, s.render = mm), m && m.sub(s), s.props = p, s.state || (s.state = {}), s.context = g, s.__n = o, d = s.__d = !0, s.__h = [], s._sb = []), s.__s == null && (s.__s = s.state), v.getDerivedStateFromProps != null && (s.__s == s.state && (s.__s = dt({}, s.__s)), dt(s.__s, v.getDerivedStateFromProps(p, s.__s))), u = s.props, c = s.state, d)
          v.getDerivedStateFromProps == null && s.componentWillMount != null && s.componentWillMount(), s.componentDidMount != null && s.__h.push(s.componentDidMount);
        else {
          if (v.getDerivedStateFromProps == null && p !== u && s.componentWillReceiveProps != null && s.componentWillReceiveProps(p, g), !s.__e && s.shouldComponentUpdate != null && s.shouldComponentUpdate(p, s.__s, g) === !1 || t.__v === n.__v) {
            for (s.props = p, s.state = s.__s, t.__v !== n.__v && (s.__d = !1), s.__v = t, t.__e = n.__e, t.__k = n.__k, t.__k.forEach(function($) {
              $ && ($.__ = t);
            }), w = 0; w < s._sb.length; w++)
              s.__h.push(s._sb[w]);
            s._sb = [], s.__h.length && l.push(s);
            break e;
          }
          s.componentWillUpdate != null && s.componentWillUpdate(p, s.__s, g), s.componentDidUpdate != null && s.__h.push(function() {
            s.componentDidUpdate(u, c, f);
          });
        }
        if (s.context = g, s.props = p, s.__v = t, s.__P = e, k = q.__r, T = 0, "prototype" in v && v.prototype.render) {
          for (s.state = s.__s, s.__d = !1, k && k(t), h = s.render(s.props, s.state, s.context), C = 0; C < s._sb.length; C++)
            s.__h.push(s._sb[C]);
          s._sb = [];
        } else
          do
            s.__d = !1, k && k(t), h = s.render(s.props, s.state, s.context), s.state = s.__s;
          while (s.__d && ++T < 25);
        s.state = s.__s, s.getChildContext != null && (o = dt(dt({}, o), s.getChildContext())), d || s.getSnapshotBeforeUpdate == null || (f = s.getSnapshotBeforeUpdate(u, c)), S = h != null && h.type === Dl && h.key == null ? h.props.children : h, du(e, Array.isArray(S) ? S : [S], t, n, o, i, r, l, _, a), s.base = t.__e, t.__h = null, s.__h.length && l.push(s), y && (s.__E = s.__ = null), s.__e = !1;
      } else
        r == null && t.__v === n.__v ? (t.__k = n.__k, t.__e = n.__e) : t.__e = pm(n.__e, t, n, o, i, r, l, a);
    (h = q.diffed) && h(t);
  } catch ($) {
    t.__v = null, (a || r != null) && (t.__e = _, t.__h = !!a, r[r.indexOf(_)] = null), q.__e($, t, n);
  }
}
function dm(e, t) {
  q.__c && q.__c(t, e), e.some(function(n) {
    try {
      e = n.__h, n.__h = [], e.some(function(o) {
        o.call(n);
      });
    } catch (o) {
      q.__e(o, n.__v);
    }
  });
}
function pm(e, t, n, o, i, r, l, _) {
  var a, h, s, d = n.props, u = t.props, c = t.type, f = 0;
  if (c === "svg" && (i = !0), r != null) {
    for (; f < r.length; f++)
      if ((a = r[f]) && "setAttribute" in a == !!c && (c ? a.localName === c : a.nodeType === 3)) {
        e = a, r[f] = null;
        break;
      }
  }
  if (e == null) {
    if (c === null)
      return document.createTextNode(u);
    e = i ? document.createElementNS("http://www.w3.org/2000/svg", c) : document.createElement(c, u.is && u), r = null, _ = !1;
  }
  if (c === null)
    d === u || _ && e.data === u || (e.data = u);
  else {
    if (r = r && Pl.call(e.childNodes), h = (d = n.props || au).dangerouslySetInnerHTML, s = u.dangerouslySetInnerHTML, !_) {
      if (r != null)
        for (d = {}, f = 0; f < e.attributes.length; f++)
          d[e.attributes[f].name] = e.attributes[f].value;
      (s || h) && (s && (h && s.__html == h.__html || s.__html === e.innerHTML) || (e.innerHTML = s && s.__html || ""));
    }
    if (hm(e, u, d, i, _), s)
      t.__k = [];
    else if (f = t.props.children, du(e, Array.isArray(f) ? f : [f], t, n, o, i && c !== "foreignObject", r, l, r ? r[0] : n.__k && Co(n, 0), _), r != null)
      for (f = r.length; f--; )
        r[f] != null && fu(r[f]);
    _ || ("value" in u && (f = u.value) !== void 0 && (f !== e.value || c === "progress" && !f || c === "option" && f !== d.value) && Kr(e, "value", f, d.value, !1), "checked" in u && (f = u.checked) !== void 0 && f !== e.checked && Kr(e, "checked", f, d.checked, !1));
  }
  return e;
}
function yu(e, t, n) {
  try {
    typeof e == "function" ? e(t) : e.current = t;
  } catch (o) {
    q.__e(o, n);
  }
}
function vu(e, t, n) {
  var o, i;
  if (q.unmount && q.unmount(e), (o = e.ref) && (o.current && o.current !== e.__e || yu(o, null, t)), (o = e.__c) != null) {
    if (o.componentWillUnmount)
      try {
        o.componentWillUnmount();
      } catch (r) {
        q.__e(r, t);
      }
    o.base = o.__P = null, e.__c = void 0;
  }
  if (o = e.__k)
    for (i = 0; i < o.length; i++)
      o[i] && vu(o[i], t, n || typeof e.type != "function");
  n || e.__e == null || fu(e.__e), e.__ = e.__e = e.__d = void 0;
}
function mm(e, t, n) {
  return this.constructor(e, n);
}
Pl = uu.slice, q = { __e: function(e, t, n, o) {
  for (var i, r, l; t = t.__; )
    if ((i = t.__c) && !i.__)
      try {
        if ((r = i.constructor) && r.getDerivedStateFromError != null && (i.setState(r.getDerivedStateFromError(e)), l = i.__d), i.componentDidCatch != null && (i.componentDidCatch(e, o || {}), l = i.__d), l)
          return i.__E = i;
      } catch (_) {
        e = _;
      }
  throw e;
} }, _u = 0, Gn.prototype.setState = function(e, t) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = dt({}, this.state), typeof e == "function" && (e = e(dt({}, n), this.props)), e && dt(n, e), e != null && this.__v && (t && this._sb.push(t), Ic(this));
}, Gn.prototype.forceUpdate = function(e) {
  this.__v && (this.__e = !0, e && this.__h.push(e), Ic(this));
}, Gn.prototype.render = Dl, qn = [], Yr.__r = 0;
var gm = 0;
function Pn(e, t, n, o, i) {
  var r, l, _ = {};
  for (l in t)
    l == "ref" ? r = t[l] : _[l] = t[l];
  var a = { type: e, props: _, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: --gm, __source: i, __self: o };
  if (typeof e == "function" && (r = e.defaultProps))
    for (l in r)
      _[l] === void 0 && (_[l] = r[l]);
  return q.vnode && q.vnode(a), a;
}
let We = class extends Gn {
  render() {
    const {
      component: t,
      type: n,
      btnType: o,
      size: i,
      className: r,
      children: l,
      url: _,
      target: a,
      disabled: h,
      active: s,
      loading: d,
      loadingIcon: u,
      loadingText: c,
      icon: f,
      text: y,
      trailingIcon: p,
      caret: m,
      square: g,
      hint: w,
      ...k
    } = this.props, T = t || (_ ? "a" : "button"), C = y == null || typeof y == "string" && !y.length || d && !c, S = m && C && !f && !p && !l && !d;
    return fm(
      T,
      {
        className: M("btn", n, r, {
          "btn-caret": S,
          disabled: h || d,
          active: s,
          loading: d,
          square: g === void 0 ? !S && !l && C : g
        }, i ? `size-${i}` : ""),
        title: w,
        [T === "a" ? "href" : "data-url"]: _,
        [T === "a" ? "target" : "data-target"]: a,
        type: T === "button" ? o : void 0,
        ...k
      },
      d ? /* @__PURE__ */ Pn("i", { class: `spin icon ${u || "icon-spinner-snake"}` }) : typeof f == "string" ? /* @__PURE__ */ Pn("i", { class: `icon ${f}` }) : f,
      C ? null : /* @__PURE__ */ Pn("span", { className: "text", children: d ? c : y }),
      d ? null : l,
      d ? null : typeof p == "string" ? /* @__PURE__ */ Pn("i", { class: `icon ${p}` }) : p,
      d ? null : m ? /* @__PURE__ */ Pn("span", { className: typeof m == "string" ? `caret-${m}` : "caret" }) : null
    );
  }
};
class jc extends ae {
}
E(jc, "NAME", "button"), E(jc, "Component", We);
var hl;
hl = { __e: function(e, t, n, o) {
  for (var i, r, l; t = t.__; )
    if ((i = t.__c) && !i.__)
      try {
        if ((r = i.constructor) && r.getDerivedStateFromError != null && (i.setState(r.getDerivedStateFromError(e)), l = i.__d), i.componentDidCatch != null && (i.componentDidCatch(e, o || {}), l = i.__d), l)
          return i.__E = i;
      } catch (_) {
        e = _;
      }
  throw e;
} };
var ym = 0;
function vm(e, t, n, o, i) {
  var r, l, _ = {};
  for (l in t)
    l == "ref" ? r = t[l] : _[l] = t[l];
  var a = { type: e, props: _, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: --ym, __source: i, __self: o };
  if (typeof e == "function" && (r = e.defaultProps))
    for (l in r)
      _[l] === void 0 && (_[l] = r[l]);
  return hl.vnode && hl.vnode(a), a;
}
var ll;
let Hl = (ll = class extends cu {
  get nestedTrigger() {
    return this.props.nestedTrigger || "click";
  }
  get menuName() {
    return "menu-nested";
  }
  beforeRender() {
    const t = super.beforeRender();
    let { hasIcons: n } = t;
    return n === void 0 && (n = t.items.some((o) => o.icon)), t.className = M(t.className, this.menuName, {
      "has-icons": n,
      "has-nested-items": t.items.some((o) => this.isNestedItem(o)),
      "menu-popup": t.popup
    }), t;
  }
  renderToggleIcon(t) {
    return /* @__PURE__ */ vm("span", { class: `${this.name}-toggle-icon caret-${t ? "down" : "right"}` });
  }
}, E(ll, "NAME", "menu"), ll);
class Bc extends ae {
}
E(Bc, "NAME", "menu"), E(Bc, "Component", Hl);
let bm = (e = 21) => crypto.getRandomValues(new Uint8Array(e)).reduce((t, n) => (n &= 63, n < 36 ? t += n.toString(36) : n < 62 ? t += (n - 26).toString(36).toUpperCase() : n > 62 ? t += "-" : t += "_", t), "");
const et = document, Xr = window, bu = et.documentElement, Yt = et.createElement.bind(et), wu = Yt("div"), Gi = Yt("table"), wm = Yt("tbody"), zc = Yt("tr"), { isArray: Ai, prototype: ku } = Array, { concat: km, filter: Ol, indexOf: $u, map: xu, push: $m, slice: Su, some: Il, splice: xm } = ku, Sm = /^#(?:[\w-]|\\.|[^\x00-\xa0])*$/, Cm = /^\.(?:[\w-]|\\.|[^\x00-\xa0])*$/, Em = /<.+>/, Tm = /^\w+$/;
function Wl(e, t) {
  const n = Am(t);
  return !e || !n && !Tn(t) && !ie(t) ? [] : !n && Cm.test(e) ? t.getElementsByClassName(e.slice(1).replace(/\\/g, "")) : !n && Tm.test(e) ? t.getElementsByTagName(e) : t.querySelectorAll(e);
}
class Li {
  constructor(t, n) {
    if (!t)
      return;
    if (dl(t))
      return t;
    let o = t;
    if (de(t)) {
      const i = (dl(n) ? n[0] : n) || et;
      if (o = Sm.test(t) && "getElementById" in i ? i.getElementById(t.slice(1).replace(/\\/g, "")) : Em.test(t) ? Tu(t) : Wl(t, i), !o)
        return;
    } else if (Kt(t))
      return this.ready(t);
    (o.nodeType || o === Xr) && (o = [o]), this.length = o.length;
    for (let i = 0, r = this.length; i < r; i++)
      this[i] = o[i];
  }
  init(t, n) {
    return new Li(t, n);
  }
}
const A = Li.prototype, R = A.init;
R.fn = R.prototype = A;
A.length = 0;
A.splice = xm;
typeof Symbol == "function" && (A[Symbol.iterator] = ku[Symbol.iterator]);
function dl(e) {
  return e instanceof Li;
}
function En(e) {
  return !!e && e === e.window;
}
function Tn(e) {
  return !!e && e.nodeType === 9;
}
function Am(e) {
  return !!e && e.nodeType === 11;
}
function ie(e) {
  return !!e && e.nodeType === 1;
}
function Lm(e) {
  return !!e && e.nodeType === 3;
}
function Nm(e) {
  return typeof e == "boolean";
}
function Kt(e) {
  return typeof e == "function";
}
function de(e) {
  return typeof e == "string";
}
function ve(e) {
  return e === void 0;
}
function Eo(e) {
  return e === null;
}
function Cu(e) {
  return !isNaN(parseFloat(e)) && isFinite(e);
}
function Ul(e) {
  if (typeof e != "object" || e === null)
    return !1;
  const t = Object.getPrototypeOf(e);
  return t === null || t === Object.prototype;
}
R.isWindow = En;
R.isFunction = Kt;
R.isArray = Ai;
R.isNumeric = Cu;
R.isPlainObject = Ul;
function ce(e, t, n) {
  if (n) {
    let o = e.length;
    for (; o--; )
      if (t.call(e[o], o, e[o]) === !1)
        return e;
  } else if (Ul(e)) {
    const o = Object.keys(e);
    for (let i = 0, r = o.length; i < r; i++) {
      const l = o[i];
      if (t.call(e[l], l, e[l]) === !1)
        return e;
    }
  } else
    for (let o = 0, i = e.length; o < i; o++)
      if (t.call(e[o], o, e[o]) === !1)
        return e;
  return e;
}
R.each = ce;
A.each = function(e) {
  return ce(this, e);
};
A.empty = function() {
  return this.each((e, t) => {
    for (; t.firstChild; )
      t.removeChild(t.firstChild);
  });
};
function Jr(...e) {
  const t = Nm(e[0]) ? e.shift() : !1, n = e.shift(), o = e.length;
  if (!n)
    return {};
  if (!o)
    return Jr(t, R, n);
  for (let i = 0; i < o; i++) {
    const r = e[i];
    for (const l in r)
      t && (Ai(r[l]) || Ul(r[l])) ? ((!n[l] || n[l].constructor !== r[l].constructor) && (n[l] = new r[l].constructor()), Jr(t, n[l], r[l])) : n[l] = r[l];
  }
  return n;
}
R.extend = Jr;
A.extend = function(e) {
  return Jr(A, e);
};
const Rm = /\S+/g;
function Ni(e) {
  return de(e) ? e.match(Rm) || [] : [];
}
A.toggleClass = function(e, t) {
  const n = Ni(e), o = !ve(t);
  return this.each((i, r) => {
    ie(r) && ce(n, (l, _) => {
      o ? t ? r.classList.add(_) : r.classList.remove(_) : r.classList.toggle(_);
    });
  });
};
A.addClass = function(e) {
  return this.toggleClass(e, !0);
};
A.removeAttr = function(e) {
  const t = Ni(e);
  return this.each((n, o) => {
    ie(o) && ce(t, (i, r) => {
      o.removeAttribute(r);
    });
  });
};
function Mm(e, t) {
  if (e) {
    if (de(e)) {
      if (arguments.length < 2) {
        if (!this[0] || !ie(this[0]))
          return;
        const n = this[0].getAttribute(e);
        return Eo(n) ? void 0 : n;
      }
      return ve(t) ? this : Eo(t) ? this.removeAttr(e) : this.each((n, o) => {
        ie(o) && o.setAttribute(e, t);
      });
    }
    for (const n in e)
      this.attr(n, e[n]);
    return this;
  }
}
A.attr = Mm;
A.removeClass = function(e) {
  return arguments.length ? this.toggleClass(e, !1) : this.attr("class", "");
};
A.hasClass = function(e) {
  return !!e && Il.call(this, (t) => ie(t) && t.classList.contains(e));
};
A.get = function(e) {
  return ve(e) ? Su.call(this) : (e = Number(e), this[e < 0 ? e + this.length : e]);
};
A.eq = function(e) {
  return R(this.get(e));
};
A.first = function() {
  return this.eq(0);
};
A.last = function() {
  return this.eq(-1);
};
function Pm(e) {
  return ve(e) ? this.get().map((t) => ie(t) || Lm(t) ? t.textContent : "").join("") : this.each((t, n) => {
    ie(n) && (n.textContent = e);
  });
}
A.text = Pm;
function tt(e, t, n) {
  if (!ie(e))
    return;
  const o = Xr.getComputedStyle(e, null);
  return n ? o.getPropertyValue(t) || void 0 : o[t] || e.style[t];
}
function He(e, t) {
  return parseInt(tt(e, t), 10) || 0;
}
function Vc(e, t) {
  return He(e, `border${t ? "Left" : "Top"}Width`) + He(e, `padding${t ? "Left" : "Top"}`) + He(e, `padding${t ? "Right" : "Bottom"}`) + He(e, `border${t ? "Right" : "Bottom"}Width`);
}
const Yi = {};
function Dm(e) {
  if (Yi[e])
    return Yi[e];
  const t = Yt(e);
  et.body.insertBefore(t, null);
  const n = tt(t, "display");
  return et.body.removeChild(t), Yi[e] = n !== "none" ? n : "block";
}
function qc(e) {
  return tt(e, "display") === "none";
}
function Eu(e, t) {
  const n = e && (e.matches || e.webkitMatchesSelector || e.msMatchesSelector);
  return !!n && !!t && n.call(e, t);
}
function Ri(e) {
  return de(e) ? (t, n) => Eu(n, e) : Kt(e) ? e : dl(e) ? (t, n) => e.is(n) : e ? (t, n) => n === e : () => !1;
}
A.filter = function(e) {
  const t = Ri(e);
  return R(Ol.call(this, (n, o) => t.call(n, o, n)));
};
function Rt(e, t) {
  return t ? e.filter(t) : e;
}
A.detach = function(e) {
  return Rt(this, e).each((t, n) => {
    n.parentNode && n.parentNode.removeChild(n);
  }), this;
};
const Hm = /^\s*<(\w+)[^>]*>/, Om = /^<(\w+)\s*\/?>(?:<\/\1>)?$/, Gc = {
  "*": wu,
  tr: wm,
  td: zc,
  th: zc,
  thead: Gi,
  tbody: Gi,
  tfoot: Gi
};
function Tu(e) {
  if (!de(e))
    return [];
  if (Om.test(e))
    return [Yt(RegExp.$1)];
  const t = Hm.test(e) && RegExp.$1, n = Gc[t] || Gc["*"];
  return n.innerHTML = e, R(n.childNodes).detach().get();
}
R.parseHTML = Tu;
A.has = function(e) {
  const t = de(e) ? (n, o) => Wl(e, o).length : (n, o) => o.contains(e);
  return this.filter(t);
};
A.not = function(e) {
  const t = Ri(e);
  return this.filter((n, o) => (!de(e) || ie(o)) && !t.call(o, n, o));
};
function rt(e, t, n, o) {
  const i = [], r = Kt(t), l = o && Ri(o);
  for (let _ = 0, a = e.length; _ < a; _++)
    if (r) {
      const h = t(e[_]);
      h.length && $m.apply(i, h);
    } else {
      let h = e[_][t];
      for (; h != null && !(o && l(-1, h)); )
        i.push(h), h = n ? h[t] : null;
    }
  return i;
}
function Au(e) {
  return e.multiple && e.options ? rt(Ol.call(e.options, (t) => t.selected && !t.disabled && !t.parentNode.disabled), "value") : e.value || "";
}
function Im(e) {
  return arguments.length ? this.each((t, n) => {
    const o = n.multiple && n.options;
    if (o || Ou.test(n.type)) {
      const i = Ai(e) ? xu.call(e, String) : Eo(e) ? [] : [String(e)];
      o ? ce(n.options, (r, l) => {
        l.selected = i.indexOf(l.value) >= 0;
      }, !0) : n.checked = i.indexOf(n.value) >= 0;
    } else
      n.value = ve(e) || Eo(e) ? "" : e;
  }) : this[0] && Au(this[0]);
}
A.val = Im;
A.is = function(e) {
  const t = Ri(e);
  return Il.call(this, (n, o) => t.call(n, o, n));
};
R.guid = 1;
function Ue(e) {
  return e.length > 1 ? Ol.call(e, (t, n, o) => $u.call(o, t) === n) : e;
}
R.unique = Ue;
A.add = function(e, t) {
  return R(Ue(this.get().concat(R(e, t).get())));
};
A.children = function(e) {
  return Rt(R(Ue(rt(this, (t) => t.children))), e);
};
A.parent = function(e) {
  return Rt(R(Ue(rt(this, "parentNode"))), e);
};
A.index = function(e) {
  const t = e ? R(e)[0] : this[0], n = e ? this : R(t).parent().children();
  return $u.call(n, t);
};
A.closest = function(e) {
  const t = this.filter(e);
  if (t.length)
    return t;
  const n = this.parent();
  return n.length ? n.closest(e) : t;
};
A.siblings = function(e) {
  return Rt(R(Ue(rt(this, (t) => R(t).parent().children().not(t)))), e);
};
A.find = function(e) {
  return R(Ue(rt(this, (t) => Wl(e, t))));
};
const Wm = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g, Um = /^$|^module$|\/(java|ecma)script/i, Fm = ["type", "src", "nonce", "noModule"];
function jm(e, t) {
  const n = R(e);
  n.filter("script").add(n.find("script")).each((o, i) => {
    if (Um.test(i.type) && bu.contains(i)) {
      const r = Yt("script");
      r.text = i.textContent.replace(Wm, ""), ce(Fm, (l, _) => {
        i[_] && (r[_] = i[_]);
      }), t.head.insertBefore(r, null), t.head.removeChild(r);
    }
  });
}
function Bm(e, t, n, o, i) {
  o ? e.insertBefore(t, n ? e.firstChild : null) : e.nodeName === "HTML" ? e.parentNode.replaceChild(t, e) : e.parentNode.insertBefore(t, n ? e : e.nextSibling), i && jm(t, e.ownerDocument);
}
function Mt(e, t, n, o, i, r, l, _) {
  return ce(e, (a, h) => {
    ce(R(h), (s, d) => {
      ce(R(t), (u, c) => {
        const f = n ? d : c, y = n ? c : d, p = n ? s : u;
        Bm(f, p ? y.cloneNode(!0) : y, o, i, !p);
      }, _);
    }, l);
  }, r), t;
}
A.after = function() {
  return Mt(arguments, this, !1, !1, !1, !0, !0);
};
A.append = function() {
  return Mt(arguments, this, !1, !1, !0);
};
function zm(e) {
  if (!arguments.length)
    return this[0] && this[0].innerHTML;
  if (ve(e))
    return this;
  const t = /<script[\s>]/.test(e);
  return this.each((n, o) => {
    ie(o) && (t ? R(o).empty().append(e) : o.innerHTML = e);
  });
}
A.html = zm;
A.appendTo = function(e) {
  return Mt(arguments, this, !0, !1, !0);
};
A.wrapInner = function(e) {
  return this.each((t, n) => {
    const o = R(n), i = o.contents();
    i.length ? i.wrapAll(e) : o.append(e);
  });
};
A.before = function() {
  return Mt(arguments, this, !1, !0);
};
A.wrapAll = function(e) {
  let t = R(e), n = t[0];
  for (; n.children.length; )
    n = n.firstElementChild;
  return this.first().before(t), this.appendTo(n);
};
A.wrap = function(e) {
  return this.each((t, n) => {
    const o = R(e)[0];
    R(n).wrapAll(t ? o.cloneNode(!0) : o);
  });
};
A.insertAfter = function(e) {
  return Mt(arguments, this, !0, !1, !1, !1, !1, !0);
};
A.insertBefore = function(e) {
  return Mt(arguments, this, !0, !0);
};
A.prepend = function() {
  return Mt(arguments, this, !1, !0, !0, !0, !0);
};
A.prependTo = function(e) {
  return Mt(arguments, this, !0, !0, !0, !1, !1, !0);
};
A.contents = function() {
  return R(Ue(rt(this, (e) => e.tagName === "IFRAME" ? [e.contentDocument] : e.tagName === "TEMPLATE" ? e.content.childNodes : e.childNodes)));
};
A.next = function(e, t, n) {
  return Rt(R(Ue(rt(this, "nextElementSibling", t, n))), e);
};
A.nextAll = function(e) {
  return this.next(e, !0);
};
A.nextUntil = function(e, t) {
  return this.next(t, !0, e);
};
A.parents = function(e, t) {
  return Rt(R(Ue(rt(this, "parentElement", !0, t))), e);
};
A.parentsUntil = function(e, t) {
  return this.parents(t, e);
};
A.prev = function(e, t, n) {
  return Rt(R(Ue(rt(this, "previousElementSibling", t, n))), e);
};
A.prevAll = function(e) {
  return this.prev(e, !0);
};
A.prevUntil = function(e, t) {
  return this.prev(t, !0, e);
};
A.map = function(e) {
  return R(km.apply([], xu.call(this, (t, n) => e.call(t, n, t))));
};
A.clone = function() {
  return this.map((e, t) => t.cloneNode(!0));
};
A.offsetParent = function() {
  return this.map((e, t) => {
    let n = t.offsetParent;
    for (; n && tt(n, "position") === "static"; )
      n = n.offsetParent;
    return n || bu;
  });
};
A.slice = function(e, t) {
  return R(Su.call(this, e, t));
};
const Vm = /-([a-z])/g;
function Fl(e) {
  return e.replace(Vm, (t, n) => n.toUpperCase());
}
A.ready = function(e) {
  const t = () => setTimeout(e, 0, R);
  return et.readyState !== "loading" ? t() : et.addEventListener("DOMContentLoaded", t), this;
};
A.unwrap = function() {
  return this.parent().each((e, t) => {
    if (t.tagName === "BODY")
      return;
    const n = R(t);
    n.replaceWith(n.children());
  }), this;
};
A.offset = function() {
  const e = this[0];
  if (!e)
    return;
  const t = e.getBoundingClientRect();
  return {
    top: t.top + Xr.pageYOffset,
    left: t.left + Xr.pageXOffset
  };
};
A.position = function() {
  const e = this[0];
  if (!e)
    return;
  const t = tt(e, "position") === "fixed", n = t ? e.getBoundingClientRect() : this.offset();
  if (!t) {
    const o = e.ownerDocument;
    let i = e.offsetParent || o.documentElement;
    for (; (i === o.body || i === o.documentElement) && tt(i, "position") === "static"; )
      i = i.parentNode;
    if (i !== e && ie(i)) {
      const r = R(i).offset();
      n.top -= r.top + He(i, "borderTopWidth"), n.left -= r.left + He(i, "borderLeftWidth");
    }
  }
  return {
    top: n.top - He(e, "marginTop"),
    left: n.left - He(e, "marginLeft")
  };
};
const Lu = {
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
A.prop = function(e, t) {
  if (e) {
    if (de(e))
      return e = Lu[e] || e, arguments.length < 2 ? this[0] && this[0][e] : this.each((n, o) => {
        o[e] = t;
      });
    for (const n in e)
      this.prop(n, e[n]);
    return this;
  }
};
A.removeProp = function(e) {
  return this.each((t, n) => {
    delete n[Lu[e] || e];
  });
};
const qm = /^--/;
function jl(e) {
  return qm.test(e);
}
const Ki = {}, { style: Gm } = wu, Ym = ["webkit", "moz", "ms"];
function Km(e, t = jl(e)) {
  if (t)
    return e;
  if (!Ki[e]) {
    const n = Fl(e), o = `${n[0].toUpperCase()}${n.slice(1)}`, i = `${n} ${Ym.join(`${o} `)}${o}`.split(" ");
    ce(i, (r, l) => {
      if (l in Gm)
        return Ki[e] = l, !1;
    });
  }
  return Ki[e];
}
const Xm = {
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
function Nu(e, t, n = jl(e)) {
  return !n && !Xm[e] && Cu(t) ? `${t}px` : t;
}
function Jm(e, t) {
  if (de(e)) {
    const n = jl(e);
    return e = Km(e, n), arguments.length < 2 ? this[0] && tt(this[0], e, n) : e ? (t = Nu(e, t, n), this.each((o, i) => {
      ie(i) && (n ? i.style.setProperty(e, t) : i.style[e] = t);
    })) : this;
  }
  for (const n in e)
    this.css(n, e[n]);
  return this;
}
A.css = Jm;
function Ru(e, t) {
  try {
    return e(t);
  } catch {
    return t;
  }
}
const Zm = /^\s+|\s+$/;
function Yc(e, t) {
  const n = e.dataset[t] || e.dataset[Fl(t)];
  return Zm.test(n) ? n : Ru(JSON.parse, n);
}
function Qm(e, t, n) {
  n = Ru(JSON.stringify, n), e.dataset[Fl(t)] = n;
}
function eg(e, t) {
  if (!e) {
    if (!this[0])
      return;
    const n = {};
    for (const o in this[0].dataset)
      n[o] = Yc(this[0], o);
    return n;
  }
  if (de(e))
    return arguments.length < 2 ? this[0] && Yc(this[0], e) : ve(t) ? this : this.each((n, o) => {
      Qm(o, e, t);
    });
  for (const n in e)
    this.data(n, e[n]);
  return this;
}
A.data = eg;
function Mu(e, t) {
  const n = e.documentElement;
  return Math.max(e.body[`scroll${t}`], n[`scroll${t}`], e.body[`offset${t}`], n[`offset${t}`], n[`client${t}`]);
}
ce([!0, !1], (e, t) => {
  ce(["Width", "Height"], (n, o) => {
    const i = `${t ? "outer" : "inner"}${o}`;
    A[i] = function(r) {
      if (this[0])
        return En(this[0]) ? t ? this[0][`inner${o}`] : this[0].document.documentElement[`client${o}`] : Tn(this[0]) ? Mu(this[0], o) : this[0][`${t ? "offset" : "client"}${o}`] + (r && t ? He(this[0], `margin${n ? "Top" : "Left"}`) + He(this[0], `margin${n ? "Bottom" : "Right"}`) : 0);
    };
  });
});
ce(["Width", "Height"], (e, t) => {
  const n = t.toLowerCase();
  A[n] = function(o) {
    if (!this[0])
      return ve(o) ? void 0 : this;
    if (!arguments.length)
      return En(this[0]) ? this[0].document.documentElement[`client${t}`] : Tn(this[0]) ? Mu(this[0], t) : this[0].getBoundingClientRect()[n] - Vc(this[0], !e);
    const i = parseInt(o, 10);
    return this.each((r, l) => {
      if (!ie(l))
        return;
      const _ = tt(l, "boxSizing");
      l.style[n] = Nu(n, i + (_ === "border-box" ? Vc(l, !e) : 0));
    });
  };
});
const Kc = "___cd";
A.toggle = function(e) {
  return this.each((t, n) => {
    if (!ie(n))
      return;
    (ve(e) ? qc(n) : e) ? (n.style.display = n[Kc] || "", qc(n) && (n.style.display = Dm(n.tagName))) : (n[Kc] = tt(n, "display"), n.style.display = "none");
  });
};
A.hide = function() {
  return this.toggle(!1);
};
A.show = function() {
  return this.toggle(!0);
};
const Xc = "___ce", Bl = ".", zl = { focus: "focusin", blur: "focusout" }, Pu = { mouseenter: "mouseover", mouseleave: "mouseout" }, tg = /^(mouse|pointer|contextmenu|drag|drop|click|dblclick)/i;
function Vl(e) {
  return Pu[e] || zl[e] || e;
}
function ql(e) {
  const t = e.split(Bl);
  return [t[0], t.slice(1).sort()];
}
A.trigger = function(e, t) {
  if (de(e)) {
    const [o, i] = ql(e), r = Vl(o);
    if (!r)
      return this;
    const l = tg.test(r) ? "MouseEvents" : "HTMLEvents";
    e = et.createEvent(l), e.initEvent(r, !0, !0), e.namespace = i.join(Bl), e.___ot = o;
  }
  e.___td = t;
  const n = e.___ot in zl;
  return this.each((o, i) => {
    n && Kt(i[e.___ot]) && (i[`___i${e.type}`] = !0, i[e.___ot](), i[`___i${e.type}`] = !1), i.dispatchEvent(e);
  });
};
function Du(e) {
  return e[Xc] = e[Xc] || {};
}
function ng(e, t, n, o, i) {
  const r = Du(e);
  r[t] = r[t] || [], r[t].push([n, o, i]), e.addEventListener(t, i);
}
function Hu(e, t) {
  return !t || !Il.call(t, (n) => e.indexOf(n) < 0);
}
function Zr(e, t, n, o, i) {
  const r = Du(e);
  if (t)
    r[t] && (r[t] = r[t].filter(([l, _, a]) => {
      if (i && a.guid !== i.guid || !Hu(l, n) || o && o !== _)
        return !0;
      e.removeEventListener(t, a);
    }));
  else
    for (t in r)
      Zr(e, t, n, o, i);
}
A.off = function(e, t, n) {
  if (ve(e))
    this.each((o, i) => {
      !ie(i) && !Tn(i) && !En(i) || Zr(i);
    });
  else if (de(e))
    Kt(t) && (n = t, t = ""), ce(Ni(e), (o, i) => {
      const [r, l] = ql(i), _ = Vl(r);
      this.each((a, h) => {
        !ie(h) && !Tn(h) && !En(h) || Zr(h, _, l, t, n);
      });
    });
  else
    for (const o in e)
      this.off(o, e[o]);
  return this;
};
A.remove = function(e) {
  return Rt(this, e).detach().off(), this;
};
A.replaceWith = function(e) {
  return this.before(e).remove();
};
A.replaceAll = function(e) {
  return R(e).replaceWith(this), this;
};
function og(e, t, n, o, i) {
  if (!de(e)) {
    for (const r in e)
      this.on(r, t, n, e[r], i);
    return this;
  }
  return de(t) || (ve(t) || Eo(t) ? t = "" : ve(n) ? (n = t, t = "") : (o = n, n = t, t = "")), Kt(o) || (o = n, n = void 0), o ? (ce(Ni(e), (r, l) => {
    const [_, a] = ql(l), h = Vl(_), s = _ in Pu, d = _ in zl;
    h && this.each((u, c) => {
      if (!ie(c) && !Tn(c) && !En(c))
        return;
      const f = function(y) {
        if (y.target[`___i${y.type}`])
          return y.stopImmediatePropagation();
        if (y.namespace && !Hu(a, y.namespace.split(Bl)) || !t && (d && (y.target !== c || y.___ot === h) || s && y.relatedTarget && c.contains(y.relatedTarget)))
          return;
        let p = c;
        if (t) {
          let g = y.target;
          for (; !Eu(g, t); )
            if (g === c || (g = g.parentNode, !g))
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
            return c;
          }
        }), Object.defineProperty(y, "data", {
          configurable: !0,
          get() {
            return n;
          }
        });
        const m = o.call(p, y, y.___td);
        i && Zr(c, h, a, t, f), m === !1 && (y.preventDefault(), y.stopPropagation());
      };
      f.guid = o.guid = o.guid || R.guid++, ng(c, h, a, t, f);
    });
  }), this) : this;
}
A.on = og;
function rg(e, t, n, o) {
  return this.on(e, t, n, o, !0);
}
A.one = rg;
const sg = /\r?\n/g;
function ig(e, t) {
  return `&${encodeURIComponent(e)}=${encodeURIComponent(t.replace(sg, `\r
`))}`;
}
const lg = /file|reset|submit|button|image/i, Ou = /radio|checkbox/i;
A.serialize = function() {
  let e = "";
  return this.each((t, n) => {
    ce(n.elements || [n], (o, i) => {
      if (i.disabled || !i.name || i.tagName === "FIELDSET" || lg.test(i.type) || Ou.test(i.type) && !i.checked)
        return;
      const r = Au(i);
      if (!ve(r)) {
        const l = Ai(r) ? r : [r];
        ce(l, (_, a) => {
          e += ig(i.name, a);
        });
      }
    });
  }), e.slice(1);
};
window.$ = R;
const Ub = R;
var Iu, G, Wu, Yn, Jc, Uu = {}, Fu = [], cg = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function pt(e, t) {
  for (var n in t)
    e[n] = t[n];
  return e;
}
function ju(e) {
  var t = e.parentNode;
  t && t.removeChild(e);
}
function Xi(e, t, n, o, i) {
  var r = { type: e, props: t, key: n, ref: o, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: i ?? ++Wu };
  return i == null && G.vnode != null && G.vnode(r), r;
}
function Gl(e) {
  return e.children;
}
function Kn(e, t) {
  this.props = e, this.context = t;
}
function To(e, t) {
  if (t == null)
    return e.__ ? To(e.__, e.__.__k.indexOf(e) + 1) : null;
  for (var n; t < e.__k.length; t++)
    if ((n = e.__k[t]) != null && n.__e != null)
      return n.__e;
  return typeof e.type == "function" ? To(e) : null;
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
function Zc(e) {
  (!e.__d && (e.__d = !0) && Yn.push(e) && !Qr.__r++ || Jc !== G.debounceRendering) && ((Jc = G.debounceRendering) || setTimeout)(Qr);
}
function Qr() {
  for (var e; Qr.__r = Yn.length; )
    e = Yn.sort(function(t, n) {
      return t.__v.__b - n.__v.__b;
    }), Yn = [], e.some(function(t) {
      var n, o, i, r, l, _;
      t.__d && (l = (r = (n = t).__v).__e, (_ = n.__P) && (o = [], (i = pt({}, r)).__v = r.__v + 1, Gu(_, r, i, n.__n, _.ownerSVGElement !== void 0, r.__h != null ? [l] : null, o, l ?? To(r), r.__h), ag(o, r), r.__e != l && Bu(r)));
    });
}
function zu(e, t, n, o, i, r, l, _, a, h) {
  var s, d, u, c, f, y, p, m = o && o.__k || Fu, g = m.length;
  for (n.__k = [], s = 0; s < t.length; s++)
    if ((c = n.__k[s] = (c = t[s]) == null || typeof c == "boolean" ? null : typeof c == "string" || typeof c == "number" || typeof c == "bigint" ? Xi(null, c, null, null, c) : Array.isArray(c) ? Xi(Gl, { children: c }, null, null, null) : c.__b > 0 ? Xi(c.type, c.props, c.key, c.ref ? c.ref : null, c.__v) : c) != null) {
      if (c.__ = n, c.__b = n.__b + 1, (u = m[s]) === null || u && c.key == u.key && c.type === u.type)
        m[s] = void 0;
      else
        for (d = 0; d < g; d++) {
          if ((u = m[d]) && c.key == u.key && c.type === u.type) {
            m[d] = void 0;
            break;
          }
          u = null;
        }
      Gu(e, c, u = u || Uu, i, r, l, _, a, h), f = c.__e, (d = c.ref) && u.ref != d && (p || (p = []), u.ref && p.push(u.ref, null, c), p.push(d, c.__c || f, c)), f != null ? (y == null && (y = f), typeof c.type == "function" && c.__k === u.__k ? c.__d = a = Vu(c, a, e) : a = qu(e, c, u, m, f, a), typeof n.type == "function" && (n.__d = a)) : a && u.__e == a && a.parentNode != e && (a = To(u));
    }
  for (n.__e = y, s = g; s--; )
    m[s] != null && Ku(m[s], m[s]);
  if (p)
    for (s = 0; s < p.length; s++)
      Yu(p[s], p[++s], p[++s]);
}
function Vu(e, t, n) {
  for (var o, i = e.__k, r = 0; i && r < i.length; r++)
    (o = i[r]) && (o.__ = e, t = typeof o.type == "function" ? Vu(o, t, n) : qu(n, o, o, i, o.__e, t));
  return t;
}
function qu(e, t, n, o, i, r) {
  var l, _, a;
  if (t.__d !== void 0)
    l = t.__d, t.__d = void 0;
  else if (n == null || i != r || i.parentNode == null)
    e:
      if (r == null || r.parentNode !== e)
        e.appendChild(i), l = null;
      else {
        for (_ = r, a = 0; (_ = _.nextSibling) && a < o.length; a += 2)
          if (_ == i)
            break e;
        e.insertBefore(i, r), l = r;
      }
  return l !== void 0 ? l : i.nextSibling;
}
function _g(e, t, n, o, i) {
  var r;
  for (r in n)
    r === "children" || r === "key" || r in t || es(e, r, null, n[r], o);
  for (r in t)
    i && typeof t[r] != "function" || r === "children" || r === "key" || r === "value" || r === "checked" || n[r] === t[r] || es(e, r, t[r], n[r], o);
}
function Qc(e, t, n) {
  t[0] === "-" ? e.setProperty(t, n) : e[t] = n == null ? "" : typeof n != "number" || cg.test(t) ? n : n + "px";
}
function es(e, t, n, o, i) {
  var r;
  e:
    if (t === "style")
      if (typeof n == "string")
        e.style.cssText = n;
      else {
        if (typeof o == "string" && (e.style.cssText = o = ""), o)
          for (t in o)
            n && t in n || Qc(e.style, t, "");
        if (n)
          for (t in n)
            o && n[t] === o[t] || Qc(e.style, t, n[t]);
      }
    else if (t[0] === "o" && t[1] === "n")
      r = t !== (t = t.replace(/Capture$/, "")), t = t.toLowerCase() in e ? t.toLowerCase().slice(2) : t.slice(2), e.l || (e.l = {}), e.l[t + r] = n, n ? o || e.addEventListener(t, r ? t_ : e_, r) : e.removeEventListener(t, r ? t_ : e_, r);
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
function e_(e) {
  this.l[e.type + !1](G.event ? G.event(e) : e);
}
function t_(e) {
  this.l[e.type + !0](G.event ? G.event(e) : e);
}
function Gu(e, t, n, o, i, r, l, _, a) {
  var h, s, d, u, c, f, y, p, m, g, w, k, T, C, S, v = t.type;
  if (t.constructor !== void 0)
    return null;
  n.__h != null && (a = n.__h, _ = t.__e = n.__e, t.__h = null, r = [_]), (h = G.__b) && h(t);
  try {
    e:
      if (typeof v == "function") {
        if (p = t.props, m = (h = v.contextType) && o[h.__c], g = h ? m ? m.props.value : h.__ : o, n.__c ? y = (s = t.__c = n.__c).__ = s.__E : ("prototype" in v && v.prototype.render ? t.__c = s = new v(p, g) : (t.__c = s = new Kn(p, g), s.constructor = v, s.render = fg), m && m.sub(s), s.props = p, s.state || (s.state = {}), s.context = g, s.__n = o, d = s.__d = !0, s.__h = [], s._sb = []), s.__s == null && (s.__s = s.state), v.getDerivedStateFromProps != null && (s.__s == s.state && (s.__s = pt({}, s.__s)), pt(s.__s, v.getDerivedStateFromProps(p, s.__s))), u = s.props, c = s.state, d)
          v.getDerivedStateFromProps == null && s.componentWillMount != null && s.componentWillMount(), s.componentDidMount != null && s.__h.push(s.componentDidMount);
        else {
          if (v.getDerivedStateFromProps == null && p !== u && s.componentWillReceiveProps != null && s.componentWillReceiveProps(p, g), !s.__e && s.shouldComponentUpdate != null && s.shouldComponentUpdate(p, s.__s, g) === !1 || t.__v === n.__v) {
            for (s.props = p, s.state = s.__s, t.__v !== n.__v && (s.__d = !1), s.__v = t, t.__e = n.__e, t.__k = n.__k, t.__k.forEach(function($) {
              $ && ($.__ = t);
            }), w = 0; w < s._sb.length; w++)
              s.__h.push(s._sb[w]);
            s._sb = [], s.__h.length && l.push(s);
            break e;
          }
          s.componentWillUpdate != null && s.componentWillUpdate(p, s.__s, g), s.componentDidUpdate != null && s.__h.push(function() {
            s.componentDidUpdate(u, c, f);
          });
        }
        if (s.context = g, s.props = p, s.__v = t, s.__P = e, k = G.__r, T = 0, "prototype" in v && v.prototype.render) {
          for (s.state = s.__s, s.__d = !1, k && k(t), h = s.render(s.props, s.state, s.context), C = 0; C < s._sb.length; C++)
            s.__h.push(s._sb[C]);
          s._sb = [];
        } else
          do
            s.__d = !1, k && k(t), h = s.render(s.props, s.state, s.context), s.state = s.__s;
          while (s.__d && ++T < 25);
        s.state = s.__s, s.getChildContext != null && (o = pt(pt({}, o), s.getChildContext())), d || s.getSnapshotBeforeUpdate == null || (f = s.getSnapshotBeforeUpdate(u, c)), S = h != null && h.type === Gl && h.key == null ? h.props.children : h, zu(e, Array.isArray(S) ? S : [S], t, n, o, i, r, l, _, a), s.base = t.__e, t.__h = null, s.__h.length && l.push(s), y && (s.__E = s.__ = null), s.__e = !1;
      } else
        r == null && t.__v === n.__v ? (t.__k = n.__k, t.__e = n.__e) : t.__e = ug(n.__e, t, n, o, i, r, l, a);
    (h = G.diffed) && h(t);
  } catch ($) {
    t.__v = null, (a || r != null) && (t.__e = _, t.__h = !!a, r[r.indexOf(_)] = null), G.__e($, t, n);
  }
}
function ag(e, t) {
  G.__c && G.__c(t, e), e.some(function(n) {
    try {
      e = n.__h, n.__h = [], e.some(function(o) {
        o.call(n);
      });
    } catch (o) {
      G.__e(o, n.__v);
    }
  });
}
function ug(e, t, n, o, i, r, l, _) {
  var a, h, s, d = n.props, u = t.props, c = t.type, f = 0;
  if (c === "svg" && (i = !0), r != null) {
    for (; f < r.length; f++)
      if ((a = r[f]) && "setAttribute" in a == !!c && (c ? a.localName === c : a.nodeType === 3)) {
        e = a, r[f] = null;
        break;
      }
  }
  if (e == null) {
    if (c === null)
      return document.createTextNode(u);
    e = i ? document.createElementNS("http://www.w3.org/2000/svg", c) : document.createElement(c, u.is && u), r = null, _ = !1;
  }
  if (c === null)
    d === u || _ && e.data === u || (e.data = u);
  else {
    if (r = r && Iu.call(e.childNodes), h = (d = n.props || Uu).dangerouslySetInnerHTML, s = u.dangerouslySetInnerHTML, !_) {
      if (r != null)
        for (d = {}, f = 0; f < e.attributes.length; f++)
          d[e.attributes[f].name] = e.attributes[f].value;
      (s || h) && (s && (h && s.__html == h.__html || s.__html === e.innerHTML) || (e.innerHTML = s && s.__html || ""));
    }
    if (_g(e, u, d, i, _), s)
      t.__k = [];
    else if (f = t.props.children, zu(e, Array.isArray(f) ? f : [f], t, n, o, i && c !== "foreignObject", r, l, r ? r[0] : n.__k && To(n, 0), _), r != null)
      for (f = r.length; f--; )
        r[f] != null && ju(r[f]);
    _ || ("value" in u && (f = u.value) !== void 0 && (f !== e.value || c === "progress" && !f || c === "option" && f !== d.value) && es(e, "value", f, d.value, !1), "checked" in u && (f = u.checked) !== void 0 && f !== e.checked && es(e, "checked", f, d.checked, !1));
  }
  return e;
}
function Yu(e, t, n) {
  try {
    typeof e == "function" ? e(t) : e.current = t;
  } catch (o) {
    G.__e(o, n);
  }
}
function Ku(e, t, n) {
  var o, i;
  if (G.unmount && G.unmount(e), (o = e.ref) && (o.current && o.current !== e.__e || Yu(o, null, t)), (o = e.__c) != null) {
    if (o.componentWillUnmount)
      try {
        o.componentWillUnmount();
      } catch (r) {
        G.__e(r, t);
      }
    o.base = o.__P = null, e.__c = void 0;
  }
  if (o = e.__k)
    for (i = 0; i < o.length; i++)
      o[i] && Ku(o[i], t, n || typeof e.type != "function");
  n || e.__e == null || ju(e.__e), e.__ = e.__e = e.__d = void 0;
}
function fg(e, t, n) {
  return this.constructor(e, n);
}
Iu = Fu.slice, G = { __e: function(e, t, n, o) {
  for (var i, r, l; t = t.__; )
    if ((i = t.__c) && !i.__)
      try {
        if ((r = i.constructor) && r.getDerivedStateFromError != null && (i.setState(r.getDerivedStateFromError(e)), l = i.__d), i.componentDidCatch != null && (i.componentDidCatch(e, o || {}), l = i.__d), l)
          return i.__E = i;
      } catch (_) {
        e = _;
      }
  throw e;
} }, Wu = 0, Kn.prototype.setState = function(e, t) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = pt({}, this.state), typeof e == "function" && (e = e(pt({}, n), this.props)), e && pt(n, e), e != null && this.__v && (t && this._sb.push(t), Zc(this));
}, Kn.prototype.forceUpdate = function(e) {
  this.__v && (this.__e = !0, e && this.__h.push(e), Zc(this));
}, Kn.prototype.render = Gl, Yn = [], Qr.__r = 0;
var hg = 0;
function dg(e, t, n, o, i) {
  var r, l, _ = {};
  for (l in t)
    l == "ref" ? r = t[l] : _[l] = t[l];
  var a = { type: e, props: _, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: --hg, __source: i, __self: o };
  if (typeof e == "function" && (r = e.defaultProps))
    for (l in r)
      _[l] === void 0 && (_[l] = r[l]);
  return G.vnode && G.vnode(a), a;
}
var pl, Zt;
pl = { __e: function(e, t, n, o) {
  for (var i, r, l; t = t.__; )
    if ((i = t.__c) && !i.__)
      try {
        if ((r = i.constructor) && r.getDerivedStateFromError != null && (i.setState(r.getDerivedStateFromError(e)), l = i.__d), i.componentDidCatch != null && (i.componentDidCatch(e, o || {}), l = i.__d), l)
          return i.__E = i;
      } catch (_) {
        e = _;
      }
  throw e;
} }, Zt = function(e) {
  return e != null && e.constructor === void 0;
};
var pg = 0;
function ze(e, t, n, o, i) {
  var r, l, _ = {};
  for (l in t)
    l == "ref" ? r = t[l] : _[l] = t[l];
  var a = { type: e, props: _, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: --pg, __source: i, __self: o };
  if (typeof e == "function" && (r = e.defaultProps))
    for (l in r)
      _[l] === void 0 && (_[l] = r[l]);
  return pl.vnode && pl.vnode(a), a;
}
var ml;
ml = { __e: function(e, t, n, o) {
  for (var i, r, l; t = t.__; )
    if ((i = t.__c) && !i.__)
      try {
        if ((r = i.constructor) && r.getDerivedStateFromError != null && (i.setState(r.getDerivedStateFromError(e)), l = i.__d), i.componentDidCatch != null && (i.componentDidCatch(e, o || {}), l = i.__d), l)
          return i.__E = i;
      } catch (_) {
        e = _;
      }
  throw e;
} };
var mg = 0;
function Mi(e, t, n, o, i) {
  var r, l, _ = {};
  for (l in t)
    l == "ref" ? r = t[l] : _[l] = t[l];
  var a = { type: e, props: _, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: --mg, __source: i, __self: o };
  if (typeof e == "function" && (r = e.defaultProps))
    for (l in r)
      _[l] === void 0 && (_[l] = r[l]);
  return ml.vnode && ml.vnode(a), a;
}
function gg({
  key: e,
  type: t,
  btnType: n,
  ...o
}) {
  return /* @__PURE__ */ Mi(We, { type: n, ...o });
}
var Xu, Y, Ju, Xn, n_, Zu = {}, Qu = [], yg = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function mt(e, t) {
  for (var n in t)
    e[n] = t[n];
  return e;
}
function ef(e) {
  var t = e.parentNode;
  t && t.removeChild(e);
}
function Ji(e, t, n, o, i) {
  var r = { type: e, props: t, key: n, ref: o, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: i ?? ++Ju };
  return i == null && Y.vnode != null && Y.vnode(r), r;
}
function vg() {
  return { current: null };
}
function Yl(e) {
  return e.children;
}
function Jn(e, t) {
  this.props = e, this.context = t;
}
function Ao(e, t) {
  if (t == null)
    return e.__ ? Ao(e.__, e.__.__k.indexOf(e) + 1) : null;
  for (var n; t < e.__k.length; t++)
    if ((n = e.__k[t]) != null && n.__e != null)
      return n.__e;
  return typeof e.type == "function" ? Ao(e) : null;
}
function tf(e) {
  var t, n;
  if ((e = e.__) != null && e.__c != null) {
    for (e.__e = e.__c.base = null, t = 0; t < e.__k.length; t++)
      if ((n = e.__k[t]) != null && n.__e != null) {
        e.__e = e.__c.base = n.__e;
        break;
      }
    return tf(e);
  }
}
function o_(e) {
  (!e.__d && (e.__d = !0) && Xn.push(e) && !ts.__r++ || n_ !== Y.debounceRendering) && ((n_ = Y.debounceRendering) || setTimeout)(ts);
}
function ts() {
  for (var e; ts.__r = Xn.length; )
    e = Xn.sort(function(t, n) {
      return t.__v.__b - n.__v.__b;
    }), Xn = [], e.some(function(t) {
      var n, o, i, r, l, _;
      t.__d && (l = (r = (n = t).__v).__e, (_ = n.__P) && (o = [], (i = mt({}, r)).__v = r.__v + 1, sf(_, r, i, n.__n, _.ownerSVGElement !== void 0, r.__h != null ? [l] : null, o, l ?? Ao(r), r.__h), wg(o, r), r.__e != l && tf(r)));
    });
}
function nf(e, t, n, o, i, r, l, _, a, h) {
  var s, d, u, c, f, y, p, m = o && o.__k || Qu, g = m.length;
  for (n.__k = [], s = 0; s < t.length; s++)
    if ((c = n.__k[s] = (c = t[s]) == null || typeof c == "boolean" ? null : typeof c == "string" || typeof c == "number" || typeof c == "bigint" ? Ji(null, c, null, null, c) : Array.isArray(c) ? Ji(Yl, { children: c }, null, null, null) : c.__b > 0 ? Ji(c.type, c.props, c.key, c.ref ? c.ref : null, c.__v) : c) != null) {
      if (c.__ = n, c.__b = n.__b + 1, (u = m[s]) === null || u && c.key == u.key && c.type === u.type)
        m[s] = void 0;
      else
        for (d = 0; d < g; d++) {
          if ((u = m[d]) && c.key == u.key && c.type === u.type) {
            m[d] = void 0;
            break;
          }
          u = null;
        }
      sf(e, c, u = u || Zu, i, r, l, _, a, h), f = c.__e, (d = c.ref) && u.ref != d && (p || (p = []), u.ref && p.push(u.ref, null, c), p.push(d, c.__c || f, c)), f != null ? (y == null && (y = f), typeof c.type == "function" && c.__k === u.__k ? c.__d = a = of(c, a, e) : a = rf(e, c, u, m, f, a), typeof n.type == "function" && (n.__d = a)) : a && u.__e == a && a.parentNode != e && (a = Ao(u));
    }
  for (n.__e = y, s = g; s--; )
    m[s] != null && cf(m[s], m[s]);
  if (p)
    for (s = 0; s < p.length; s++)
      lf(p[s], p[++s], p[++s]);
}
function of(e, t, n) {
  for (var o, i = e.__k, r = 0; i && r < i.length; r++)
    (o = i[r]) && (o.__ = e, t = typeof o.type == "function" ? of(o, t, n) : rf(n, o, o, i, o.__e, t));
  return t;
}
function rf(e, t, n, o, i, r) {
  var l, _, a;
  if (t.__d !== void 0)
    l = t.__d, t.__d = void 0;
  else if (n == null || i != r || i.parentNode == null)
    e:
      if (r == null || r.parentNode !== e)
        e.appendChild(i), l = null;
      else {
        for (_ = r, a = 0; (_ = _.nextSibling) && a < o.length; a += 2)
          if (_ == i)
            break e;
        e.insertBefore(i, r), l = r;
      }
  return l !== void 0 ? l : i.nextSibling;
}
function bg(e, t, n, o, i) {
  var r;
  for (r in n)
    r === "children" || r === "key" || r in t || ns(e, r, null, n[r], o);
  for (r in t)
    i && typeof t[r] != "function" || r === "children" || r === "key" || r === "value" || r === "checked" || n[r] === t[r] || ns(e, r, t[r], n[r], o);
}
function r_(e, t, n) {
  t[0] === "-" ? e.setProperty(t, n) : e[t] = n == null ? "" : typeof n != "number" || yg.test(t) ? n : n + "px";
}
function ns(e, t, n, o, i) {
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
  this.l[e.type + !1](Y.event ? Y.event(e) : e);
}
function i_(e) {
  this.l[e.type + !0](Y.event ? Y.event(e) : e);
}
function sf(e, t, n, o, i, r, l, _, a) {
  var h, s, d, u, c, f, y, p, m, g, w, k, T, C, S, v = t.type;
  if (t.constructor !== void 0)
    return null;
  n.__h != null && (a = n.__h, _ = t.__e = n.__e, t.__h = null, r = [_]), (h = Y.__b) && h(t);
  try {
    e:
      if (typeof v == "function") {
        if (p = t.props, m = (h = v.contextType) && o[h.__c], g = h ? m ? m.props.value : h.__ : o, n.__c ? y = (s = t.__c = n.__c).__ = s.__E : ("prototype" in v && v.prototype.render ? t.__c = s = new v(p, g) : (t.__c = s = new Jn(p, g), s.constructor = v, s.render = $g), m && m.sub(s), s.props = p, s.state || (s.state = {}), s.context = g, s.__n = o, d = s.__d = !0, s.__h = [], s._sb = []), s.__s == null && (s.__s = s.state), v.getDerivedStateFromProps != null && (s.__s == s.state && (s.__s = mt({}, s.__s)), mt(s.__s, v.getDerivedStateFromProps(p, s.__s))), u = s.props, c = s.state, d)
          v.getDerivedStateFromProps == null && s.componentWillMount != null && s.componentWillMount(), s.componentDidMount != null && s.__h.push(s.componentDidMount);
        else {
          if (v.getDerivedStateFromProps == null && p !== u && s.componentWillReceiveProps != null && s.componentWillReceiveProps(p, g), !s.__e && s.shouldComponentUpdate != null && s.shouldComponentUpdate(p, s.__s, g) === !1 || t.__v === n.__v) {
            for (s.props = p, s.state = s.__s, t.__v !== n.__v && (s.__d = !1), s.__v = t, t.__e = n.__e, t.__k = n.__k, t.__k.forEach(function($) {
              $ && ($.__ = t);
            }), w = 0; w < s._sb.length; w++)
              s.__h.push(s._sb[w]);
            s._sb = [], s.__h.length && l.push(s);
            break e;
          }
          s.componentWillUpdate != null && s.componentWillUpdate(p, s.__s, g), s.componentDidUpdate != null && s.__h.push(function() {
            s.componentDidUpdate(u, c, f);
          });
        }
        if (s.context = g, s.props = p, s.__v = t, s.__P = e, k = Y.__r, T = 0, "prototype" in v && v.prototype.render) {
          for (s.state = s.__s, s.__d = !1, k && k(t), h = s.render(s.props, s.state, s.context), C = 0; C < s._sb.length; C++)
            s.__h.push(s._sb[C]);
          s._sb = [];
        } else
          do
            s.__d = !1, k && k(t), h = s.render(s.props, s.state, s.context), s.state = s.__s;
          while (s.__d && ++T < 25);
        s.state = s.__s, s.getChildContext != null && (o = mt(mt({}, o), s.getChildContext())), d || s.getSnapshotBeforeUpdate == null || (f = s.getSnapshotBeforeUpdate(u, c)), S = h != null && h.type === Yl && h.key == null ? h.props.children : h, nf(e, Array.isArray(S) ? S : [S], t, n, o, i, r, l, _, a), s.base = t.__e, t.__h = null, s.__h.length && l.push(s), y && (s.__E = s.__ = null), s.__e = !1;
      } else
        r == null && t.__v === n.__v ? (t.__k = n.__k, t.__e = n.__e) : t.__e = kg(n.__e, t, n, o, i, r, l, a);
    (h = Y.diffed) && h(t);
  } catch ($) {
    t.__v = null, (a || r != null) && (t.__e = _, t.__h = !!a, r[r.indexOf(_)] = null), Y.__e($, t, n);
  }
}
function wg(e, t) {
  Y.__c && Y.__c(t, e), e.some(function(n) {
    try {
      e = n.__h, n.__h = [], e.some(function(o) {
        o.call(n);
      });
    } catch (o) {
      Y.__e(o, n.__v);
    }
  });
}
function kg(e, t, n, o, i, r, l, _) {
  var a, h, s, d = n.props, u = t.props, c = t.type, f = 0;
  if (c === "svg" && (i = !0), r != null) {
    for (; f < r.length; f++)
      if ((a = r[f]) && "setAttribute" in a == !!c && (c ? a.localName === c : a.nodeType === 3)) {
        e = a, r[f] = null;
        break;
      }
  }
  if (e == null) {
    if (c === null)
      return document.createTextNode(u);
    e = i ? document.createElementNS("http://www.w3.org/2000/svg", c) : document.createElement(c, u.is && u), r = null, _ = !1;
  }
  if (c === null)
    d === u || _ && e.data === u || (e.data = u);
  else {
    if (r = r && Xu.call(e.childNodes), h = (d = n.props || Zu).dangerouslySetInnerHTML, s = u.dangerouslySetInnerHTML, !_) {
      if (r != null)
        for (d = {}, f = 0; f < e.attributes.length; f++)
          d[e.attributes[f].name] = e.attributes[f].value;
      (s || h) && (s && (h && s.__html == h.__html || s.__html === e.innerHTML) || (e.innerHTML = s && s.__html || ""));
    }
    if (bg(e, u, d, i, _), s)
      t.__k = [];
    else if (f = t.props.children, nf(e, Array.isArray(f) ? f : [f], t, n, o, i && c !== "foreignObject", r, l, r ? r[0] : n.__k && Ao(n, 0), _), r != null)
      for (f = r.length; f--; )
        r[f] != null && ef(r[f]);
    _ || ("value" in u && (f = u.value) !== void 0 && (f !== e.value || c === "progress" && !f || c === "option" && f !== d.value) && ns(e, "value", f, d.value, !1), "checked" in u && (f = u.checked) !== void 0 && f !== e.checked && ns(e, "checked", f, d.checked, !1));
  }
  return e;
}
function lf(e, t, n) {
  try {
    typeof e == "function" ? e(t) : e.current = t;
  } catch (o) {
    Y.__e(o, n);
  }
}
function cf(e, t, n) {
  var o, i;
  if (Y.unmount && Y.unmount(e), (o = e.ref) && (o.current && o.current !== e.__e || lf(o, null, t)), (o = e.__c) != null) {
    if (o.componentWillUnmount)
      try {
        o.componentWillUnmount();
      } catch (r) {
        Y.__e(r, t);
      }
    o.base = o.__P = null, e.__c = void 0;
  }
  if (o = e.__k)
    for (i = 0; i < o.length; i++)
      o[i] && cf(o[i], t, n || typeof e.type != "function");
  n || e.__e == null || ef(e.__e), e.__ = e.__e = e.__d = void 0;
}
function $g(e, t, n) {
  return this.constructor(e, n);
}
Xu = Qu.slice, Y = { __e: function(e, t, n, o) {
  for (var i, r, l; t = t.__; )
    if ((i = t.__c) && !i.__)
      try {
        if ((r = i.constructor) && r.getDerivedStateFromError != null && (i.setState(r.getDerivedStateFromError(e)), l = i.__d), i.componentDidCatch != null && (i.componentDidCatch(e, o || {}), l = i.__d), l)
          return i.__E = i;
      } catch (_) {
        e = _;
      }
  throw e;
} }, Ju = 0, Jn.prototype.setState = function(e, t) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = mt({}, this.state), typeof e == "function" && (e = e(mt({}, n), this.props)), e && mt(n, e), e != null && this.__v && (t && this._sb.push(t), o_(this));
}, Jn.prototype.forceUpdate = function(e) {
  this.__v && (this.__e = !0, e && this.__h.push(e), o_(this));
}, Jn.prototype.render = Yl, Xn = [], ts.__r = 0;
var xg = 0;
function _f(e, t, n, o, i) {
  var r, l, _ = {};
  for (l in t)
    l == "ref" ? r = t[l] : _[l] = t[l];
  var a = { type: e, props: _, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: --xg, __source: i, __self: o };
  if (typeof e == "function" && (r = e.defaultProps))
    for (l in r)
      _[l] === void 0 && (_[l] = r[l]);
  return Y.vnode && Y.vnode(a), a;
}
var Pi, F, af, Zn, l_, os = {}, uf = [], Sg = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function gt(e, t) {
  for (var n in t)
    e[n] = t[n];
  return e;
}
function ff(e) {
  var t = e.parentNode;
  t && t.removeChild(e);
}
function hf(e, t, n) {
  var o, i, r, l = {};
  for (r in t)
    r == "key" ? o = t[r] : r == "ref" ? i = t[r] : l[r] = t[r];
  if (arguments.length > 2 && (l.children = arguments.length > 3 ? Pi.call(arguments, 2) : n), typeof e == "function" && e.defaultProps != null)
    for (r in e.defaultProps)
      l[r] === void 0 && (l[r] = e.defaultProps[r]);
  return Nr(e, l, o, i, null);
}
function Nr(e, t, n, o, i) {
  var r = { type: e, props: t, key: n, ref: o, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: i ?? ++af };
  return i == null && F.vnode != null && F.vnode(r), r;
}
function Di(e) {
  return e.children;
}
function Rr(e, t) {
  this.props = e, this.context = t;
}
function Lo(e, t) {
  if (t == null)
    return e.__ ? Lo(e.__, e.__.__k.indexOf(e) + 1) : null;
  for (var n; t < e.__k.length; t++)
    if ((n = e.__k[t]) != null && n.__e != null)
      return n.__e;
  return typeof e.type == "function" ? Lo(e) : null;
}
function df(e) {
  var t, n;
  if ((e = e.__) != null && e.__c != null) {
    for (e.__e = e.__c.base = null, t = 0; t < e.__k.length; t++)
      if ((n = e.__k[t]) != null && n.__e != null) {
        e.__e = e.__c.base = n.__e;
        break;
      }
    return df(e);
  }
}
function c_(e) {
  (!e.__d && (e.__d = !0) && Zn.push(e) && !rs.__r++ || l_ !== F.debounceRendering) && ((l_ = F.debounceRendering) || setTimeout)(rs);
}
function rs() {
  for (var e; rs.__r = Zn.length; )
    e = Zn.sort(function(t, n) {
      return t.__v.__b - n.__v.__b;
    }), Zn = [], e.some(function(t) {
      var n, o, i, r, l, _;
      t.__d && (l = (r = (n = t).__v).__e, (_ = n.__P) && (o = [], (i = gt({}, r)).__v = r.__v + 1, Kl(_, r, i, n.__n, _.ownerSVGElement !== void 0, r.__h != null ? [l] : null, o, l ?? Lo(r), r.__h), yf(o, r), r.__e != l && df(r)));
    });
}
function pf(e, t, n, o, i, r, l, _, a, h) {
  var s, d, u, c, f, y, p, m = o && o.__k || uf, g = m.length;
  for (n.__k = [], s = 0; s < t.length; s++)
    if ((c = n.__k[s] = (c = t[s]) == null || typeof c == "boolean" ? null : typeof c == "string" || typeof c == "number" || typeof c == "bigint" ? Nr(null, c, null, null, c) : Array.isArray(c) ? Nr(Di, { children: c }, null, null, null) : c.__b > 0 ? Nr(c.type, c.props, c.key, c.ref ? c.ref : null, c.__v) : c) != null) {
      if (c.__ = n, c.__b = n.__b + 1, (u = m[s]) === null || u && c.key == u.key && c.type === u.type)
        m[s] = void 0;
      else
        for (d = 0; d < g; d++) {
          if ((u = m[d]) && c.key == u.key && c.type === u.type) {
            m[d] = void 0;
            break;
          }
          u = null;
        }
      Kl(e, c, u = u || os, i, r, l, _, a, h), f = c.__e, (d = c.ref) && u.ref != d && (p || (p = []), u.ref && p.push(u.ref, null, c), p.push(d, c.__c || f, c)), f != null ? (y == null && (y = f), typeof c.type == "function" && c.__k === u.__k ? c.__d = a = mf(c, a, e) : a = gf(e, c, u, m, f, a), typeof n.type == "function" && (n.__d = a)) : a && u.__e == a && a.parentNode != e && (a = Lo(u));
    }
  for (n.__e = y, s = g; s--; )
    m[s] != null && bf(m[s], m[s]);
  if (p)
    for (s = 0; s < p.length; s++)
      vf(p[s], p[++s], p[++s]);
}
function mf(e, t, n) {
  for (var o, i = e.__k, r = 0; i && r < i.length; r++)
    (o = i[r]) && (o.__ = e, t = typeof o.type == "function" ? mf(o, t, n) : gf(n, o, o, i, o.__e, t));
  return t;
}
function gf(e, t, n, o, i, r) {
  var l, _, a;
  if (t.__d !== void 0)
    l = t.__d, t.__d = void 0;
  else if (n == null || i != r || i.parentNode == null)
    e:
      if (r == null || r.parentNode !== e)
        e.appendChild(i), l = null;
      else {
        for (_ = r, a = 0; (_ = _.nextSibling) && a < o.length; a += 2)
          if (_ == i)
            break e;
        e.insertBefore(i, r), l = r;
      }
  return l !== void 0 ? l : i.nextSibling;
}
function Cg(e, t, n, o, i) {
  var r;
  for (r in n)
    r === "children" || r === "key" || r in t || ss(e, r, null, n[r], o);
  for (r in t)
    i && typeof t[r] != "function" || r === "children" || r === "key" || r === "value" || r === "checked" || n[r] === t[r] || ss(e, r, t[r], n[r], o);
}
function __(e, t, n) {
  t[0] === "-" ? e.setProperty(t, n) : e[t] = n == null ? "" : typeof n != "number" || Sg.test(t) ? n : n + "px";
}
function ss(e, t, n, o, i) {
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
      r = t !== (t = t.replace(/Capture$/, "")), t = t.toLowerCase() in e ? t.toLowerCase().slice(2) : t.slice(2), e.l || (e.l = {}), e.l[t + r] = n, n ? o || e.addEventListener(t, r ? u_ : a_, r) : e.removeEventListener(t, r ? u_ : a_, r);
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
  this.l[e.type + !1](F.event ? F.event(e) : e);
}
function u_(e) {
  this.l[e.type + !0](F.event ? F.event(e) : e);
}
function Kl(e, t, n, o, i, r, l, _, a) {
  var h, s, d, u, c, f, y, p, m, g, w, k, T, C, S, v = t.type;
  if (t.constructor !== void 0)
    return null;
  n.__h != null && (a = n.__h, _ = t.__e = n.__e, t.__h = null, r = [_]), (h = F.__b) && h(t);
  try {
    e:
      if (typeof v == "function") {
        if (p = t.props, m = (h = v.contextType) && o[h.__c], g = h ? m ? m.props.value : h.__ : o, n.__c ? y = (s = t.__c = n.__c).__ = s.__E : ("prototype" in v && v.prototype.render ? t.__c = s = new v(p, g) : (t.__c = s = new Rr(p, g), s.constructor = v, s.render = Tg), m && m.sub(s), s.props = p, s.state || (s.state = {}), s.context = g, s.__n = o, d = s.__d = !0, s.__h = [], s._sb = []), s.__s == null && (s.__s = s.state), v.getDerivedStateFromProps != null && (s.__s == s.state && (s.__s = gt({}, s.__s)), gt(s.__s, v.getDerivedStateFromProps(p, s.__s))), u = s.props, c = s.state, d)
          v.getDerivedStateFromProps == null && s.componentWillMount != null && s.componentWillMount(), s.componentDidMount != null && s.__h.push(s.componentDidMount);
        else {
          if (v.getDerivedStateFromProps == null && p !== u && s.componentWillReceiveProps != null && s.componentWillReceiveProps(p, g), !s.__e && s.shouldComponentUpdate != null && s.shouldComponentUpdate(p, s.__s, g) === !1 || t.__v === n.__v) {
            for (s.props = p, s.state = s.__s, t.__v !== n.__v && (s.__d = !1), s.__v = t, t.__e = n.__e, t.__k = n.__k, t.__k.forEach(function($) {
              $ && ($.__ = t);
            }), w = 0; w < s._sb.length; w++)
              s.__h.push(s._sb[w]);
            s._sb = [], s.__h.length && l.push(s);
            break e;
          }
          s.componentWillUpdate != null && s.componentWillUpdate(p, s.__s, g), s.componentDidUpdate != null && s.__h.push(function() {
            s.componentDidUpdate(u, c, f);
          });
        }
        if (s.context = g, s.props = p, s.__v = t, s.__P = e, k = F.__r, T = 0, "prototype" in v && v.prototype.render) {
          for (s.state = s.__s, s.__d = !1, k && k(t), h = s.render(s.props, s.state, s.context), C = 0; C < s._sb.length; C++)
            s.__h.push(s._sb[C]);
          s._sb = [];
        } else
          do
            s.__d = !1, k && k(t), h = s.render(s.props, s.state, s.context), s.state = s.__s;
          while (s.__d && ++T < 25);
        s.state = s.__s, s.getChildContext != null && (o = gt(gt({}, o), s.getChildContext())), d || s.getSnapshotBeforeUpdate == null || (f = s.getSnapshotBeforeUpdate(u, c)), S = h != null && h.type === Di && h.key == null ? h.props.children : h, pf(e, Array.isArray(S) ? S : [S], t, n, o, i, r, l, _, a), s.base = t.__e, t.__h = null, s.__h.length && l.push(s), y && (s.__E = s.__ = null), s.__e = !1;
      } else
        r == null && t.__v === n.__v ? (t.__k = n.__k, t.__e = n.__e) : t.__e = Eg(n.__e, t, n, o, i, r, l, a);
    (h = F.diffed) && h(t);
  } catch ($) {
    t.__v = null, (a || r != null) && (t.__e = _, t.__h = !!a, r[r.indexOf(_)] = null), F.__e($, t, n);
  }
}
function yf(e, t) {
  F.__c && F.__c(t, e), e.some(function(n) {
    try {
      e = n.__h, n.__h = [], e.some(function(o) {
        o.call(n);
      });
    } catch (o) {
      F.__e(o, n.__v);
    }
  });
}
function Eg(e, t, n, o, i, r, l, _) {
  var a, h, s, d = n.props, u = t.props, c = t.type, f = 0;
  if (c === "svg" && (i = !0), r != null) {
    for (; f < r.length; f++)
      if ((a = r[f]) && "setAttribute" in a == !!c && (c ? a.localName === c : a.nodeType === 3)) {
        e = a, r[f] = null;
        break;
      }
  }
  if (e == null) {
    if (c === null)
      return document.createTextNode(u);
    e = i ? document.createElementNS("http://www.w3.org/2000/svg", c) : document.createElement(c, u.is && u), r = null, _ = !1;
  }
  if (c === null)
    d === u || _ && e.data === u || (e.data = u);
  else {
    if (r = r && Pi.call(e.childNodes), h = (d = n.props || os).dangerouslySetInnerHTML, s = u.dangerouslySetInnerHTML, !_) {
      if (r != null)
        for (d = {}, f = 0; f < e.attributes.length; f++)
          d[e.attributes[f].name] = e.attributes[f].value;
      (s || h) && (s && (h && s.__html == h.__html || s.__html === e.innerHTML) || (e.innerHTML = s && s.__html || ""));
    }
    if (Cg(e, u, d, i, _), s)
      t.__k = [];
    else if (f = t.props.children, pf(e, Array.isArray(f) ? f : [f], t, n, o, i && c !== "foreignObject", r, l, r ? r[0] : n.__k && Lo(n, 0), _), r != null)
      for (f = r.length; f--; )
        r[f] != null && ff(r[f]);
    _ || ("value" in u && (f = u.value) !== void 0 && (f !== e.value || c === "progress" && !f || c === "option" && f !== d.value) && ss(e, "value", f, d.value, !1), "checked" in u && (f = u.checked) !== void 0 && f !== e.checked && ss(e, "checked", f, d.checked, !1));
  }
  return e;
}
function vf(e, t, n) {
  try {
    typeof e == "function" ? e(t) : e.current = t;
  } catch (o) {
    F.__e(o, n);
  }
}
function bf(e, t, n) {
  var o, i;
  if (F.unmount && F.unmount(e), (o = e.ref) && (o.current && o.current !== e.__e || vf(o, null, t)), (o = e.__c) != null) {
    if (o.componentWillUnmount)
      try {
        o.componentWillUnmount();
      } catch (r) {
        F.__e(r, t);
      }
    o.base = o.__P = null, e.__c = void 0;
  }
  if (o = e.__k)
    for (i = 0; i < o.length; i++)
      o[i] && bf(o[i], t, n || typeof e.type != "function");
  n || e.__e == null || ff(e.__e), e.__ = e.__e = e.__d = void 0;
}
function Tg(e, t, n) {
  return this.constructor(e, n);
}
function Ag(e, t, n) {
  var o, i, r;
  F.__ && F.__(e, t), i = (o = typeof n == "function") ? null : n && n.__k || t.__k, r = [], Kl(t, e = (!o && n || t).__k = hf(Di, null, [e]), i || os, os, t.ownerSVGElement !== void 0, !o && n ? [n] : i ? null : t.firstChild ? Pi.call(t.childNodes) : null, r, !o && n ? n : i ? i.__e : t.firstChild, o), yf(r, e);
}
Pi = uf.slice, F = { __e: function(e, t, n, o) {
  for (var i, r, l; t = t.__; )
    if ((i = t.__c) && !i.__)
      try {
        if ((r = i.constructor) && r.getDerivedStateFromError != null && (i.setState(r.getDerivedStateFromError(e)), l = i.__d), i.componentDidCatch != null && (i.componentDidCatch(e, o || {}), l = i.__d), l)
          return i.__E = i;
      } catch (_) {
        e = _;
      }
  throw e;
} }, af = 0, Rr.prototype.setState = function(e, t) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = gt({}, this.state), typeof e == "function" && (e = e(gt({}, n), this.props)), e && gt(n, e), e != null && this.__v && (t && this._sb.push(t), c_(this));
}, Rr.prototype.forceUpdate = function(e) {
  this.__v && (this.__e = !0, e && this.__h.push(e), c_(this));
}, Rr.prototype.render = Di, Zn = [], rs.__r = 0;
function Lg(e) {
  return e.button === 2;
}
var Ng = 0;
function Rg(e, t, n, o, i) {
  var r, l, _ = {};
  for (l in t)
    l == "ref" ? r = t[l] : _[l] = t[l];
  var a = { type: e, props: _, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: --Ng, __source: i, __self: o };
  if (typeof e == "function" && (r = e.defaultProps))
    for (l in r)
      _[l] === void 0 && (_[l] = r[l]);
  return F.vnode && F.vnode(a), a;
}
function Xl(e) {
  return e.split("-")[1];
}
function wf(e) {
  return e === "y" ? "height" : "width";
}
function Qn(e) {
  return e.split("-")[0];
}
function kf(e) {
  return ["top", "bottom"].includes(Qn(e)) ? "x" : "y";
}
function f_(e, t, n) {
  let { reference: o, floating: i } = e;
  const r = o.x + o.width / 2 - i.width / 2, l = o.y + o.height / 2 - i.height / 2, _ = kf(t), a = wf(_), h = o[a] / 2 - i[a] / 2, s = _ === "x";
  let d;
  switch (Qn(t)) {
    case "top":
      d = { x: r, y: o.y - i.height };
      break;
    case "bottom":
      d = { x: r, y: o.y + o.height };
      break;
    case "right":
      d = { x: o.x + o.width, y: l };
      break;
    case "left":
      d = { x: o.x - i.width, y: l };
      break;
    default:
      d = { x: o.x, y: o.y };
  }
  switch (Xl(t)) {
    case "start":
      d[_] -= h * (n && s ? -1 : 1);
      break;
    case "end":
      d[_] += h * (n && s ? -1 : 1);
  }
  return d;
}
const Mg = async (e, t, n) => {
  const { placement: o = "bottom", strategy: i = "absolute", middleware: r = [], platform: l } = n, _ = r.filter(Boolean), a = await (l.isRTL == null ? void 0 : l.isRTL(t));
  let h = await l.getElementRects({ reference: e, floating: t, strategy: i }), { x: s, y: d } = f_(h, o, a), u = o, c = {}, f = 0;
  for (let y = 0; y < _.length; y++) {
    const { name: p, fn: m } = _[y], { x: g, y: w, data: k, reset: T } = await m({ x: s, y: d, initialPlacement: o, placement: u, strategy: i, middlewareData: c, rects: h, platform: l, elements: { reference: e, floating: t } });
    s = g ?? s, d = w ?? d, c = { ...c, [p]: { ...c[p], ...k } }, T && f <= 50 && (f++, typeof T == "object" && (T.placement && (u = T.placement), T.rects && (h = T.rects === !0 ? await l.getElementRects({ reference: e, floating: t, strategy: i }) : T.rects), { x: s, y: d } = f_(h, u, a)), y = -1);
  }
  return { x: s, y: d, placement: u, strategy: i, middlewareData: c };
};
function Pg(e) {
  return typeof e != "number" ? function(t) {
    return { top: 0, right: 0, bottom: 0, left: 0, ...t };
  }(e) : { top: e, right: e, bottom: e, left: e };
}
function is(e) {
  return { ...e, top: e.y, left: e.x, right: e.x + e.width, bottom: e.y + e.height };
}
async function Dg(e, t) {
  var n;
  t === void 0 && (t = {});
  const { x: o, y: i, platform: r, rects: l, elements: _, strategy: a } = e, { boundary: h = "clippingAncestors", rootBoundary: s = "viewport", elementContext: d = "floating", altBoundary: u = !1, padding: c = 0 } = t, f = Pg(c), y = _[u ? d === "floating" ? "reference" : "floating" : d], p = is(await r.getClippingRect({ element: (n = await (r.isElement == null ? void 0 : r.isElement(y))) == null || n ? y : y.contextElement || await (r.getDocumentElement == null ? void 0 : r.getDocumentElement(_.floating)), boundary: h, rootBoundary: s, strategy: a })), m = d === "floating" ? { ...l.floating, x: o, y: i } : l.reference, g = await (r.getOffsetParent == null ? void 0 : r.getOffsetParent(_.floating)), w = await (r.isElement == null ? void 0 : r.isElement(g)) && await (r.getScale == null ? void 0 : r.getScale(g)) || { x: 1, y: 1 }, k = is(r.convertOffsetParentRelativeRectToViewportRelativeRect ? await r.convertOffsetParentRelativeRectToViewportRelativeRect({ rect: m, offsetParent: g, strategy: a }) : m);
  return { top: (p.top - k.top + f.top) / w.y, bottom: (k.bottom - p.bottom + f.bottom) / w.y, left: (p.left - k.left + f.left) / w.x, right: (k.right - p.right + f.right) / w.x };
}
const Hg = ["top", "right", "bottom", "left"];
Hg.reduce((e, t) => e.concat(t, t + "-start", t + "-end"), []);
const Og = { left: "right", right: "left", bottom: "top", top: "bottom" };
function ls(e) {
  return e.replace(/left|right|bottom|top/g, (t) => Og[t]);
}
function Ig(e, t, n) {
  n === void 0 && (n = !1);
  const o = Xl(e), i = kf(e), r = wf(i);
  let l = i === "x" ? o === (n ? "end" : "start") ? "right" : "left" : o === "start" ? "bottom" : "top";
  return t.reference[r] > t.floating[r] && (l = ls(l)), { main: l, cross: ls(l) };
}
const Wg = { start: "end", end: "start" };
function Zi(e) {
  return e.replace(/start|end/g, (t) => Wg[t]);
}
const $f = function(e) {
  return e === void 0 && (e = {}), { name: "flip", options: e, async fn(t) {
    var n;
    const { placement: o, middlewareData: i, rects: r, initialPlacement: l, platform: _, elements: a } = t, { mainAxis: h = !0, crossAxis: s = !0, fallbackPlacements: d, fallbackStrategy: u = "bestFit", fallbackAxisSideDirection: c = "none", flipAlignment: f = !0, ...y } = e, p = Qn(o), m = Qn(l) === l, g = await (_.isRTL == null ? void 0 : _.isRTL(a.floating)), w = d || (m || !f ? [ls(l)] : function(O) {
      const z = ls(O);
      return [Zi(O), z, Zi(z)];
    }(l));
    d || c === "none" || w.push(...function(O, z, _e, pe) {
      const ne = Xl(O);
      let H = function(oe, Le, Pt) {
        const Dt = ["left", "right"], Ht = ["right", "left"], Fe = ["top", "bottom"], Xt = ["bottom", "top"];
        switch (oe) {
          case "top":
          case "bottom":
            return Pt ? Le ? Ht : Dt : Le ? Dt : Ht;
          case "left":
          case "right":
            return Le ? Fe : Xt;
          default:
            return [];
        }
      }(Qn(O), _e === "start", pe);
      return ne && (H = H.map((oe) => oe + "-" + ne), z && (H = H.concat(H.map(Zi)))), H;
    }(l, f, c, g));
    const k = [l, ...w], T = await Dg(t, y), C = [];
    let S = ((n = i.flip) == null ? void 0 : n.overflows) || [];
    if (h && C.push(T[p]), s) {
      const { main: O, cross: z } = Ig(o, r, g);
      C.push(T[O], T[z]);
    }
    if (S = [...S, { placement: o, overflows: C }], !C.every((O) => O <= 0)) {
      var v;
      const O = (((v = i.flip) == null ? void 0 : v.index) || 0) + 1, z = k[O];
      if (z)
        return { data: { index: O, overflows: S }, reset: { placement: z } };
      let _e = "bottom";
      switch (u) {
        case "bestFit": {
          var $;
          const pe = ($ = S.map((ne) => [ne, ne.overflows.filter((H) => H > 0).reduce((H, oe) => H + oe, 0)]).sort((ne, H) => ne[1] - H[1])[0]) == null ? void 0 : $[0].placement;
          pe && (_e = pe);
          break;
        }
        case "initialPlacement":
          _e = l;
      }
      if (o !== _e)
        return { reset: { placement: _e } };
    }
    return {};
  } };
};
function xe(e) {
  var t;
  return ((t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function Oe(e) {
  return xe(e).getComputedStyle(e);
}
function Lt(e) {
  return Sf(e) ? (e.nodeName || "").toLowerCase() : "";
}
let br;
function xf() {
  if (br)
    return br;
  const e = navigator.userAgentData;
  return e && Array.isArray(e.brands) ? (br = e.brands.map((t) => t.brand + "/" + t.version).join(" "), br) : navigator.userAgent;
}
function nt(e) {
  return e instanceof xe(e).HTMLElement;
}
function Te(e) {
  return e instanceof xe(e).Element;
}
function Sf(e) {
  return e instanceof xe(e).Node;
}
function h_(e) {
  return typeof ShadowRoot > "u" ? !1 : e instanceof xe(e).ShadowRoot || e instanceof ShadowRoot;
}
function Hi(e) {
  const { overflow: t, overflowX: n, overflowY: o, display: i } = Oe(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + o + n) && !["inline", "contents"].includes(i);
}
function Ug(e) {
  return ["table", "td", "th"].includes(Lt(e));
}
function gl(e) {
  const t = /firefox/i.test(xf()), n = Oe(e), o = n.backdropFilter || n.WebkitBackdropFilter;
  return n.transform !== "none" || n.perspective !== "none" || !!o && o !== "none" || t && n.willChange === "filter" || t && !!n.filter && n.filter !== "none" || ["transform", "perspective"].some((i) => n.willChange.includes(i)) || ["paint", "layout", "strict", "content"].some((i) => {
    const r = n.contain;
    return r != null && r.includes(i);
  });
}
function Cf() {
  return !/^((?!chrome|android).)*safari/i.test(xf());
}
function Jl(e) {
  return ["html", "body", "#document"].includes(Lt(e));
}
const d_ = Math.min, eo = Math.max, cs = Math.round;
function Ef(e) {
  const t = Oe(e);
  let n = parseFloat(t.width), o = parseFloat(t.height);
  const i = e.offsetWidth, r = e.offsetHeight, l = cs(n) !== i || cs(o) !== r;
  return l && (n = i, o = r), { width: n, height: o, fallback: l };
}
function Tf(e) {
  return Te(e) ? e : e.contextElement;
}
const Af = { x: 1, y: 1 };
function Qt(e) {
  const t = Tf(e);
  if (!nt(t))
    return Af;
  const n = t.getBoundingClientRect(), { width: o, height: i, fallback: r } = Ef(t);
  let l = (r ? cs(n.width) : n.width) / o, _ = (r ? cs(n.height) : n.height) / i;
  return l && Number.isFinite(l) || (l = 1), _ && Number.isFinite(_) || (_ = 1), { x: l, y: _ };
}
function qt(e, t, n, o) {
  var i, r;
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const l = e.getBoundingClientRect(), _ = Tf(e);
  let a = Af;
  t && (o ? Te(o) && (a = Qt(o)) : a = Qt(e));
  const h = _ ? xe(_) : window, s = !Cf() && n;
  let d = (l.left + (s && ((i = h.visualViewport) == null ? void 0 : i.offsetLeft) || 0)) / a.x, u = (l.top + (s && ((r = h.visualViewport) == null ? void 0 : r.offsetTop) || 0)) / a.y, c = l.width / a.x, f = l.height / a.y;
  if (_) {
    const y = xe(_), p = o && Te(o) ? xe(o) : o;
    let m = y.frameElement;
    for (; m && o && p !== y; ) {
      const g = Qt(m), w = m.getBoundingClientRect(), k = getComputedStyle(m);
      w.x += (m.clientLeft + parseFloat(k.paddingLeft)) * g.x, w.y += (m.clientTop + parseFloat(k.paddingTop)) * g.y, d *= g.x, u *= g.y, c *= g.x, f *= g.y, d += w.x, u += w.y, m = xe(m).frameElement;
    }
  }
  return { width: c, height: f, top: u, right: d + c, bottom: u + f, left: d, x: d, y: u };
}
function Ct(e) {
  return ((Sf(e) ? e.ownerDocument : e.document) || window.document).documentElement;
}
function Oi(e) {
  return Te(e) ? { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop } : { scrollLeft: e.pageXOffset, scrollTop: e.pageYOffset };
}
function Lf(e) {
  return qt(Ct(e)).left + Oi(e).scrollLeft;
}
function Fg(e, t, n) {
  const o = nt(t), i = Ct(t), r = qt(e, !0, n === "fixed", t);
  let l = { scrollLeft: 0, scrollTop: 0 };
  const _ = { x: 0, y: 0 };
  if (o || !o && n !== "fixed")
    if ((Lt(t) !== "body" || Hi(i)) && (l = Oi(t)), nt(t)) {
      const a = qt(t, !0);
      _.x = a.x + t.clientLeft, _.y = a.y + t.clientTop;
    } else
      i && (_.x = Lf(i));
  return { x: r.left + l.scrollLeft - _.x, y: r.top + l.scrollTop - _.y, width: r.width, height: r.height };
}
function No(e) {
  if (Lt(e) === "html")
    return e;
  const t = e.assignedSlot || e.parentNode || (h_(e) ? e.host : null) || Ct(e);
  return h_(t) ? t.host : t;
}
function p_(e) {
  return nt(e) && Oe(e).position !== "fixed" ? e.offsetParent : null;
}
function m_(e) {
  const t = xe(e);
  let n = p_(e);
  for (; n && Ug(n) && Oe(n).position === "static"; )
    n = p_(n);
  return n && (Lt(n) === "html" || Lt(n) === "body" && Oe(n).position === "static" && !gl(n)) ? t : n || function(o) {
    let i = No(o);
    for (; nt(i) && !Jl(i); ) {
      if (gl(i))
        return i;
      i = No(i);
    }
    return null;
  }(e) || t;
}
function Nf(e) {
  const t = No(e);
  return Jl(t) ? e.ownerDocument.body : nt(t) && Hi(t) ? t : Nf(t);
}
function to(e, t) {
  var n;
  t === void 0 && (t = []);
  const o = Nf(e), i = o === ((n = e.ownerDocument) == null ? void 0 : n.body), r = xe(o);
  return i ? t.concat(r, r.visualViewport || [], Hi(o) ? o : []) : t.concat(o, to(o));
}
function g_(e, t, n) {
  return t === "viewport" ? is(function(o, i) {
    const r = xe(o), l = Ct(o), _ = r.visualViewport;
    let a = l.clientWidth, h = l.clientHeight, s = 0, d = 0;
    if (_) {
      a = _.width, h = _.height;
      const u = Cf();
      (u || !u && i === "fixed") && (s = _.offsetLeft, d = _.offsetTop);
    }
    return { width: a, height: h, x: s, y: d };
  }(e, n)) : Te(t) ? function(o, i) {
    const r = qt(o, !0, i === "fixed"), l = r.top + o.clientTop, _ = r.left + o.clientLeft, a = nt(o) ? Qt(o) : { x: 1, y: 1 }, h = o.clientWidth * a.x, s = o.clientHeight * a.y, d = _ * a.x, u = l * a.y;
    return { top: u, left: d, right: d + h, bottom: u + s, x: d, y: u, width: h, height: s };
  }(t, n) : is(function(o) {
    var i;
    const r = Ct(o), l = Oi(o), _ = (i = o.ownerDocument) == null ? void 0 : i.body, a = eo(r.scrollWidth, r.clientWidth, _ ? _.scrollWidth : 0, _ ? _.clientWidth : 0), h = eo(r.scrollHeight, r.clientHeight, _ ? _.scrollHeight : 0, _ ? _.clientHeight : 0);
    let s = -l.scrollLeft + Lf(o);
    const d = -l.scrollTop;
    return Oe(_ || r).direction === "rtl" && (s += eo(r.clientWidth, _ ? _.clientWidth : 0) - a), { width: a, height: h, x: s, y: d };
  }(Ct(e)));
}
const jg = { getClippingRect: function(e) {
  let { element: t, boundary: n, rootBoundary: o, strategy: i } = e;
  const r = n === "clippingAncestors" ? function(h, s) {
    const d = s.get(h);
    if (d)
      return d;
    let u = to(h).filter((p) => Te(p) && Lt(p) !== "body"), c = null;
    const f = Oe(h).position === "fixed";
    let y = f ? No(h) : h;
    for (; Te(y) && !Jl(y); ) {
      const p = Oe(y), m = gl(y);
      (f ? m || c : m || p.position !== "static" || !c || !["absolute", "fixed"].includes(c.position)) ? c = p : u = u.filter((g) => g !== y), y = No(y);
    }
    return s.set(h, u), u;
  }(t, this._c) : [].concat(n), l = [...r, o], _ = l[0], a = l.reduce((h, s) => {
    const d = g_(t, s, i);
    return h.top = eo(d.top, h.top), h.right = d_(d.right, h.right), h.bottom = d_(d.bottom, h.bottom), h.left = eo(d.left, h.left), h;
  }, g_(t, _, i));
  return { width: a.right - a.left, height: a.bottom - a.top, x: a.left, y: a.top };
}, convertOffsetParentRelativeRectToViewportRelativeRect: function(e) {
  let { rect: t, offsetParent: n, strategy: o } = e;
  const i = nt(n), r = Ct(n);
  if (n === r)
    return t;
  let l = { scrollLeft: 0, scrollTop: 0 }, _ = { x: 1, y: 1 };
  const a = { x: 0, y: 0 };
  if ((i || !i && o !== "fixed") && ((Lt(n) !== "body" || Hi(r)) && (l = Oi(n)), nt(n))) {
    const h = qt(n);
    _ = Qt(n), a.x = h.x + n.clientLeft, a.y = h.y + n.clientTop;
  }
  return { width: t.width * _.x, height: t.height * _.y, x: t.x * _.x - l.scrollLeft * _.x + a.x, y: t.y * _.y - l.scrollTop * _.y + a.y };
}, isElement: Te, getDimensions: function(e) {
  return Ef(e);
}, getOffsetParent: m_, getDocumentElement: Ct, getScale: Qt, async getElementRects(e) {
  let { reference: t, floating: n, strategy: o } = e;
  const i = this.getOffsetParent || m_, r = this.getDimensions;
  return { reference: Fg(t, await i(n), o), floating: { x: 0, y: 0, ...await r(n) } };
}, getClientRects: (e) => Array.from(e.getClientRects()), isRTL: (e) => Oe(e).direction === "rtl" };
function Bg(e, t, n, o) {
  o === void 0 && (o = {});
  const { ancestorScroll: i = !0, ancestorResize: r = !0, elementResize: l = !0, animationFrame: _ = !1 } = o, a = i && !_, h = a || r ? [...Te(e) ? to(e) : e.contextElement ? to(e.contextElement) : [], ...to(t)] : [];
  h.forEach((c) => {
    a && c.addEventListener("scroll", n, { passive: !0 }), r && c.addEventListener("resize", n);
  });
  let s, d = null;
  if (l) {
    let c = !0;
    d = new ResizeObserver(() => {
      c || n(), c = !1;
    }), Te(e) && !_ && d.observe(e), Te(e) || !e.contextElement || _ || d.observe(e.contextElement), d.observe(t);
  }
  let u = _ ? qt(e) : null;
  return _ && function c() {
    const f = qt(e);
    !u || f.x === u.x && f.y === u.y && f.width === u.width && f.height === u.height || n(), u = f, s = requestAnimationFrame(c);
  }(), n(), () => {
    var c;
    h.forEach((f) => {
      a && f.removeEventListener("scroll", n), r && f.removeEventListener("resize", n);
    }), (c = d) == null || c.disconnect(), d = null, _ && cancelAnimationFrame(s);
  };
}
const Rf = (e, t, n) => {
  const o = /* @__PURE__ */ new Map(), i = { platform: jg, ...n }, r = { ...i.platform, _c: o };
  return Mg(e, t, { ...i, platform: r });
};
let zg = class extends Hl {
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
      middleware: [$f()],
      placement: "right-start"
    };
  }
  _getPopperElement() {
    var t;
    return (t = this.ref.current) == null ? void 0 : t.parentElement;
  }
  _createPopper() {
    const t = this._getPopperOptions();
    this.ref.current && Rf(this._getPopperElement(), this.ref.current, t).then(({ x: n, y: o }) => {
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
    return t.className = M(t.className, "menu-popup"), t;
  }
  renderToggleIcon() {
    return /* @__PURE__ */ Rg("span", { class: "contextmenu-toggle-icon caret-right" });
  }
};
var it, sn, Vo, qo, Os, Mf, Is, Pf;
class ge extends Qe {
  constructor() {
    super(...arguments);
    x(this, Os);
    x(this, Is);
    x(this, it, void 0);
    x(this, sn, void 0);
    x(this, Vo, void 0);
    E(this, "arrowEl");
    x(this, qo, void 0);
  }
  get isShown() {
    var n;
    return (n = b(this, it)) == null ? void 0 : n.classList.contains(this.constructor.CLASS_SHOW);
  }
  get menu() {
    return b(this, it) || this._ensureMenu();
  }
  get trigger() {
    return b(this, Vo) || this.element;
  }
  get isDynamic() {
    return this.options.items || this.options.menu;
  }
  init() {
    const { element: n } = this;
    n !== document.body && !n.hasAttribute("data-toggle") && n.setAttribute("data-toggle", "contextmenu");
  }
  show(n) {
    return L(this, Vo, n), this.emit("show", { menu: this, trigger: this.trigger }).defaultPrevented || this.isDynamic && !this._renderMenu() ? !1 : (this.menu.classList.add(this.constructor.CLASS_SHOW), this._createPopper(), this.emit("shown", this), !0);
  }
  hide() {
    var o, i;
    return (o = b(this, qo)) == null || o.call(this), this.emit("hide", this).defaultPrevented ? !1 : ((i = b(this, it)) == null || i.classList.remove(this.constructor.CLASS_SHOW), this.emit("hidden", this), !0);
  }
  toggle(n) {
    return this.isShown ? this.hide() : this.show(n);
  }
  destroy() {
    var n;
    super.destroy(), (n = b(this, it)) == null || n.remove();
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
        const _ = n.nextElementSibling;
        _ != null && _.classList.contains(o) ? i = _ : i = (r = n.parentNode) == null ? void 0 : r.querySelector(`.${o}`);
      }
      i && i.classList.add("menu-popup");
    }
    if (!i)
      throw new Error("ContextMenu: Cannot find menu element");
    return i.style.width = "max-content", i.style.position = this.options.strategy, i.style.top = "0", i.style.left = "0", L(this, it, i), i;
  }
  _getPopperOptions() {
    var r;
    const { placement: n, strategy: o } = this.options, i = {
      middleware: [],
      placement: n,
      strategy: o
    };
    return this.options.flip && ((r = i.middleware) == null || r.push($f())), i;
  }
  _createPopper() {
    const n = this._getPopperOptions(), o = this._getPopperElement();
    L(this, qo, Bg(o, this.menu, () => {
      Rf(o, this.menu, n).then(({ x: i, y: r, middlewareData: l, placement: _ }) => {
        Object.assign(this.menu.style, {
          left: `${i}px`,
          top: `${r}px`
        });
        const a = _.split("-")[0], h = N(this, Os, Mf).call(this, a);
        if (l.arrow && this.arrowEl) {
          const { x: s, y: d } = l.arrow;
          Object.assign(this.arrowEl.style, {
            left: s != null ? `${s}px` : "",
            top: d != null ? `${d}px` : "",
            [h]: `${-this.arrowEl.offsetWidth / 2}px`,
            background: "inherit",
            border: "inherit",
            ...N(this, Is, Pf).call(this, a)
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
    return !n || this.emit("updateMenu", { menu: n, trigger: this.trigger, contextmenu: this }).defaultPrevented ? !1 : (Ag(hf(zg, n), this.menu), !0);
  }
  _getPopperElement() {
    return b(this, sn) || L(this, sn, {
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
    }), b(this, sn);
  }
  static clear(n) {
    var a, h;
    n instanceof Event && (n = { event: n });
    const { event: o, exclude: i, ignoreSelector: r = ".not-hide-menu" } = n || {};
    if (o && r && ((h = (a = o.target).closest) != null && h.call(a, r)) || o && Lg(o))
      return;
    const l = this.getAll().entries(), _ = new Set(i || []);
    for (const [s, d] of l)
      _.has(s) || d.hide();
  }
  static show(n) {
    const { event: o, ...i } = n, r = this.ensure(document.body);
    return Object.keys(i).length && r.setOptions(i), r.show(o), o instanceof Event && o.stopPropagation(), r;
  }
  static hide() {
    const n = this.get(document.body);
    return n == null || n.hide(), n;
  }
}
it = new WeakMap(), sn = new WeakMap(), Vo = new WeakMap(), qo = new WeakMap(), Os = new WeakSet(), Mf = function(n) {
  return {
    top: "bottom",
    right: "left",
    bottom: "top",
    left: "right"
  }[n];
}, Is = new WeakSet(), Pf = function(n) {
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
}, E(ge, "NAME", "contextmenu"), E(ge, "EVENTS", !0), E(ge, "DEFAULT", {
  placement: "bottom-start",
  strategy: "fixed",
  flip: !0,
  preventOverflow: !0
}), E(ge, "MENU_CLASS", "contextmenu"), E(ge, "CLASS_SHOW", "show"), E(ge, "MENU_SELECTOR", '[data-toggle="contextmenu"]:not(.disabled):not(:disabled)');
document.addEventListener("contextmenu", (e) => {
  var o;
  const t = e.target;
  if ((o = t.closest) != null && o.call(t, `.${ge.MENU_CLASS}`))
    return;
  const n = t.closest(ge.MENU_SELECTOR);
  n && (ge.ensure(n).show(e), e.preventDefault());
});
document.addEventListener("click", ge.clear.bind(ge));
function Df(e) {
  return e.split("-")[1];
}
function Vg(e) {
  return e === "y" ? "height" : "width";
}
function Hf(e) {
  return e.split("-")[0];
}
function Of(e) {
  return ["top", "bottom"].includes(Hf(e)) ? "x" : "y";
}
function qg(e) {
  return typeof e != "number" ? function(t) {
    return { top: 0, right: 0, bottom: 0, left: 0, ...t };
  }(e) : { top: e, right: e, bottom: e, left: e };
}
const Gg = Math.min, Yg = Math.max;
function Kg(e, t, n) {
  return Yg(e, Gg(t, n));
}
const Xg = (e) => ({ name: "arrow", options: e, async fn(t) {
  const { element: n, padding: o = 0 } = e || {}, { x: i, y: r, placement: l, rects: _, platform: a } = t;
  if (n == null)
    return {};
  const h = qg(o), s = { x: i, y: r }, d = Of(l), u = Vg(d), c = await a.getDimensions(n), f = d === "y" ? "top" : "left", y = d === "y" ? "bottom" : "right", p = _.reference[u] + _.reference[d] - s[d] - _.floating[u], m = s[d] - _.reference[d], g = await (a.getOffsetParent == null ? void 0 : a.getOffsetParent(n));
  let w = g ? d === "y" ? g.clientHeight || 0 : g.clientWidth || 0 : 0;
  w === 0 && (w = _.floating[u]);
  const k = p / 2 - m / 2, T = h[f], C = w - c[u] - h[y], S = w / 2 - c[u] / 2 + k, v = Kg(T, S, C), $ = Df(l) != null && S != v && _.reference[u] / 2 - (S < T ? h[f] : h[y]) - c[u] / 2 < 0;
  return { [d]: s[d] - ($ ? S < T ? T - S : C - S : 0), data: { [d]: v, centerOffset: S - v } };
} }), Jg = ["top", "right", "bottom", "left"];
Jg.reduce((e, t) => e.concat(t, t + "-start", t + "-end"), []);
const Zg = function(e) {
  return e === void 0 && (e = 0), { name: "offset", options: e, async fn(t) {
    const { x: n, y: o } = t, i = await async function(r, l) {
      const { placement: _, platform: a, elements: h } = r, s = await (a.isRTL == null ? void 0 : a.isRTL(h.floating)), d = Hf(_), u = Df(_), c = Of(_) === "x", f = ["left", "top"].includes(d) ? -1 : 1, y = s && c ? -1 : 1, p = typeof l == "function" ? l(r) : l;
      let { mainAxis: m, crossAxis: g, alignmentAxis: w } = typeof p == "number" ? { mainAxis: p, crossAxis: 0, alignmentAxis: null } : { mainAxis: 0, crossAxis: 0, alignmentAxis: null, ...p };
      return u && typeof w == "number" && (g = u === "end" ? -1 * w : w), c ? { x: g * y, y: m * f } : { x: m * f, y: g * y };
    }(t, e);
    return { x: n + i.x, y: o + i.y, data: i };
  } };
};
var ln, cn, _n, Ws, If;
const hc = class extends ge {
  constructor() {
    super(...arguments);
    x(this, Ws);
    x(this, ln, !1);
    x(this, cn, 0);
    E(this, "hideLater", () => {
      b(this, _n).call(this), L(this, cn, window.setTimeout(this.hide.bind(this), 100));
    });
    x(this, _n, () => {
      clearTimeout(b(this, cn)), L(this, cn, 0);
    });
  }
  get isHover() {
    return this.options.trigger === "hover";
  }
  get elementShowClass() {
    return `with-${this.constructor.NAME}-show`;
  }
  show(n, o) {
    (o == null ? void 0 : o.clearOthers) !== !1 && hc.clear({ event: o == null ? void 0 : o.event, exclude: [this.element] });
    const i = super.show(n);
    return i && (!b(this, ln) && this.isHover && N(this, Ws, If).call(this), this.element.classList.add(this.elementShowClass)), i;
  }
  hide() {
    const n = super.hide();
    return n && this.element.classList.remove(this.elementShowClass), n;
  }
  toggle(n, o) {
    return this.isShown ? this.hide() : this.show(n, { event: n, ...o });
  }
  destroy() {
    b(this, ln) && (this.element.removeEventListener("mouseleave", this.hideLater), this.menu.removeEventListener("mouseenter", b(this, _n)), this.menu.removeEventListener("mouseleave", this.hideLater)), super.destroy();
  }
  _getArrowSize() {
    const { arrow: n } = this.options;
    return n ? typeof n == "number" ? n : 8 : 0;
  }
  _getPopperOptions() {
    var i, r;
    const n = super._getPopperOptions(), o = this._getArrowSize();
    return o && this.arrowEl && ((i = n.middleware) == null || i.push(Zg(o)), (r = n.middleware) == null || r.push(Xg({ element: this.arrowEl }))), n;
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
let he = hc;
ln = new WeakMap(), cn = new WeakMap(), _n = new WeakMap(), Ws = new WeakSet(), If = function() {
  const { menu: n } = this;
  n.addEventListener("mouseenter", b(this, _n)), n.addEventListener("mouseleave", this.hideLater), this.element.addEventListener("mouseleave", this.hideLater), L(this, ln, !0);
}, E(he, "NAME", "dropdown"), E(he, "MENU_CLASS", "dropdown-menu"), E(he, "MENU_SELECTOR", '[data-toggle="dropdown"]:not(.disabled):not(:disabled)'), E(he, "DEFAULT", {
  ...ge.DEFAULT,
  strategy: "fixed",
  trigger: "click"
});
document.addEventListener("click", function(e) {
  var o;
  const t = e.target, n = (o = t.closest) == null ? void 0 : o.call(t, he.MENU_SELECTOR);
  if (n) {
    const i = he.ensure(n);
    i.options.trigger === "click" && i.toggle();
  } else
    he.clear({ event: e });
});
document.addEventListener("mouseover", function(e) {
  var i;
  const t = e.target, n = (i = t.closest) == null ? void 0 : i.call(t, he.MENU_SELECTOR);
  if (!n)
    return;
  const o = he.ensure(n);
  o.isHover && o.show();
});
const Qg = (e) => {
  const t = document.getElementsByClassName("with-dropdown-show")[0];
  if (!t)
    return;
  const n = typeof t.closest == "function" ? t.closest(he.MENU_SELECTOR) : null;
  !n || !e.target.contains(n) || he.clear({ event: e });
};
window.addEventListener("scroll", Qg, !0);
var Go, an;
class ey extends Jn {
  constructor(n) {
    var o;
    super(n);
    x(this, Go, void 0);
    x(this, an, vg());
    this.state = { placement: ((o = n.dropdown) == null ? void 0 : o.placement) || "", show: !1 };
  }
  get ref() {
    return b(this, an);
  }
  get triggerElement() {
    return b(this, an).current;
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
    }), L(this, Go, he.ensure(this.triggerElement, {
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
    (n = b(this, Go)) == null || n.destroy();
  }
  beforeRender() {
    const { className: n, children: o, dropdown: i, ...r } = this.props;
    return {
      className: M("dropdown", n),
      children: typeof o == "function" ? o(this.state) : o,
      ...r,
      "data-toggle": "dropdown",
      "data-dropdown-placement": this.state.placement,
      ref: b(this, an)
    };
  }
  render() {
    const { children: n, ...o } = this.beforeRender();
    return /* @__PURE__ */ _f("div", { ...o, children: n });
  }
}
Go = new WeakMap(), an = new WeakMap();
class ty extends ey {
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
    return o.caret = i, /* @__PURE__ */ _f(We, { ...o });
  }
}
function Wf({
  key: e,
  type: t,
  btnType: n,
  ...o
}) {
  return /* @__PURE__ */ Mi(ty, { type: n, ...o });
}
var Zl, K, Uf, Ff, no, y_, jf = {}, Bf = [], ny = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function yt(e, t) {
  for (var n in t)
    e[n] = t[n];
  return e;
}
function zf(e) {
  var t = e.parentNode;
  t && t.removeChild(e);
}
function oy(e, t, n) {
  var o, i, r, l = {};
  for (r in t)
    r == "key" ? o = t[r] : r == "ref" ? i = t[r] : l[r] = t[r];
  if (arguments.length > 2 && (l.children = arguments.length > 3 ? Zl.call(arguments, 2) : n), typeof e == "function" && e.defaultProps != null)
    for (r in e.defaultProps)
      l[r] === void 0 && (l[r] = e.defaultProps[r]);
  return Mr(e, l, o, i, null);
}
function Mr(e, t, n, o, i) {
  var r = { type: e, props: t, key: n, ref: o, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: i ?? ++Uf };
  return i == null && K.vnode != null && K.vnode(r), r;
}
function Ql(e) {
  return e.children;
}
function oo(e, t) {
  this.props = e, this.context = t;
}
function Ro(e, t) {
  if (t == null)
    return e.__ ? Ro(e.__, e.__.__k.indexOf(e) + 1) : null;
  for (var n; t < e.__k.length; t++)
    if ((n = e.__k[t]) != null && n.__e != null)
      return n.__e;
  return typeof e.type == "function" ? Ro(e) : null;
}
function Vf(e) {
  var t, n;
  if ((e = e.__) != null && e.__c != null) {
    for (e.__e = e.__c.base = null, t = 0; t < e.__k.length; t++)
      if ((n = e.__k[t]) != null && n.__e != null) {
        e.__e = e.__c.base = n.__e;
        break;
      }
    return Vf(e);
  }
}
function v_(e) {
  (!e.__d && (e.__d = !0) && no.push(e) && !_s.__r++ || y_ !== K.debounceRendering) && ((y_ = K.debounceRendering) || setTimeout)(_s);
}
function _s() {
  for (var e; _s.__r = no.length; )
    e = no.sort(function(t, n) {
      return t.__v.__b - n.__v.__b;
    }), no = [], e.some(function(t) {
      var n, o, i, r, l, _;
      t.__d && (l = (r = (n = t).__v).__e, (_ = n.__P) && (o = [], (i = yt({}, r)).__v = r.__v + 1, Kf(_, r, i, n.__n, _.ownerSVGElement !== void 0, r.__h != null ? [l] : null, o, l ?? Ro(r), r.__h), sy(o, r), r.__e != l && Vf(r)));
    });
}
function qf(e, t, n, o, i, r, l, _, a, h) {
  var s, d, u, c, f, y, p, m = o && o.__k || Bf, g = m.length;
  for (n.__k = [], s = 0; s < t.length; s++)
    if ((c = n.__k[s] = (c = t[s]) == null || typeof c == "boolean" ? null : typeof c == "string" || typeof c == "number" || typeof c == "bigint" ? Mr(null, c, null, null, c) : Array.isArray(c) ? Mr(Ql, { children: c }, null, null, null) : c.__b > 0 ? Mr(c.type, c.props, c.key, c.ref ? c.ref : null, c.__v) : c) != null) {
      if (c.__ = n, c.__b = n.__b + 1, (u = m[s]) === null || u && c.key == u.key && c.type === u.type)
        m[s] = void 0;
      else
        for (d = 0; d < g; d++) {
          if ((u = m[d]) && c.key == u.key && c.type === u.type) {
            m[d] = void 0;
            break;
          }
          u = null;
        }
      Kf(e, c, u = u || jf, i, r, l, _, a, h), f = c.__e, (d = c.ref) && u.ref != d && (p || (p = []), u.ref && p.push(u.ref, null, c), p.push(d, c.__c || f, c)), f != null ? (y == null && (y = f), typeof c.type == "function" && c.__k === u.__k ? c.__d = a = Gf(c, a, e) : a = Yf(e, c, u, m, f, a), typeof n.type == "function" && (n.__d = a)) : a && u.__e == a && a.parentNode != e && (a = Ro(u));
    }
  for (n.__e = y, s = g; s--; )
    m[s] != null && Jf(m[s], m[s]);
  if (p)
    for (s = 0; s < p.length; s++)
      Xf(p[s], p[++s], p[++s]);
}
function Gf(e, t, n) {
  for (var o, i = e.__k, r = 0; i && r < i.length; r++)
    (o = i[r]) && (o.__ = e, t = typeof o.type == "function" ? Gf(o, t, n) : Yf(n, o, o, i, o.__e, t));
  return t;
}
function Yf(e, t, n, o, i, r) {
  var l, _, a;
  if (t.__d !== void 0)
    l = t.__d, t.__d = void 0;
  else if (n == null || i != r || i.parentNode == null)
    e:
      if (r == null || r.parentNode !== e)
        e.appendChild(i), l = null;
      else {
        for (_ = r, a = 0; (_ = _.nextSibling) && a < o.length; a += 2)
          if (_ == i)
            break e;
        e.insertBefore(i, r), l = r;
      }
  return l !== void 0 ? l : i.nextSibling;
}
function ry(e, t, n, o, i) {
  var r;
  for (r in n)
    r === "children" || r === "key" || r in t || as(e, r, null, n[r], o);
  for (r in t)
    i && typeof t[r] != "function" || r === "children" || r === "key" || r === "value" || r === "checked" || n[r] === t[r] || as(e, r, t[r], n[r], o);
}
function b_(e, t, n) {
  t[0] === "-" ? e.setProperty(t, n) : e[t] = n == null ? "" : typeof n != "number" || ny.test(t) ? n : n + "px";
}
function as(e, t, n, o, i) {
  var r;
  e:
    if (t === "style")
      if (typeof n == "string")
        e.style.cssText = n;
      else {
        if (typeof o == "string" && (e.style.cssText = o = ""), o)
          for (t in o)
            n && t in n || b_(e.style, t, "");
        if (n)
          for (t in n)
            o && n[t] === o[t] || b_(e.style, t, n[t]);
      }
    else if (t[0] === "o" && t[1] === "n")
      r = t !== (t = t.replace(/Capture$/, "")), t = t.toLowerCase() in e ? t.toLowerCase().slice(2) : t.slice(2), e.l || (e.l = {}), e.l[t + r] = n, n ? o || e.addEventListener(t, r ? k_ : w_, r) : e.removeEventListener(t, r ? k_ : w_, r);
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
function w_(e) {
  this.l[e.type + !1](K.event ? K.event(e) : e);
}
function k_(e) {
  this.l[e.type + !0](K.event ? K.event(e) : e);
}
function Kf(e, t, n, o, i, r, l, _, a) {
  var h, s, d, u, c, f, y, p, m, g, w, k, T, C, S, v = t.type;
  if (t.constructor !== void 0)
    return null;
  n.__h != null && (a = n.__h, _ = t.__e = n.__e, t.__h = null, r = [_]), (h = K.__b) && h(t);
  try {
    e:
      if (typeof v == "function") {
        if (p = t.props, m = (h = v.contextType) && o[h.__c], g = h ? m ? m.props.value : h.__ : o, n.__c ? y = (s = t.__c = n.__c).__ = s.__E : ("prototype" in v && v.prototype.render ? t.__c = s = new v(p, g) : (t.__c = s = new oo(p, g), s.constructor = v, s.render = ly), m && m.sub(s), s.props = p, s.state || (s.state = {}), s.context = g, s.__n = o, d = s.__d = !0, s.__h = [], s._sb = []), s.__s == null && (s.__s = s.state), v.getDerivedStateFromProps != null && (s.__s == s.state && (s.__s = yt({}, s.__s)), yt(s.__s, v.getDerivedStateFromProps(p, s.__s))), u = s.props, c = s.state, d)
          v.getDerivedStateFromProps == null && s.componentWillMount != null && s.componentWillMount(), s.componentDidMount != null && s.__h.push(s.componentDidMount);
        else {
          if (v.getDerivedStateFromProps == null && p !== u && s.componentWillReceiveProps != null && s.componentWillReceiveProps(p, g), !s.__e && s.shouldComponentUpdate != null && s.shouldComponentUpdate(p, s.__s, g) === !1 || t.__v === n.__v) {
            for (s.props = p, s.state = s.__s, t.__v !== n.__v && (s.__d = !1), s.__v = t, t.__e = n.__e, t.__k = n.__k, t.__k.forEach(function($) {
              $ && ($.__ = t);
            }), w = 0; w < s._sb.length; w++)
              s.__h.push(s._sb[w]);
            s._sb = [], s.__h.length && l.push(s);
            break e;
          }
          s.componentWillUpdate != null && s.componentWillUpdate(p, s.__s, g), s.componentDidUpdate != null && s.__h.push(function() {
            s.componentDidUpdate(u, c, f);
          });
        }
        if (s.context = g, s.props = p, s.__v = t, s.__P = e, k = K.__r, T = 0, "prototype" in v && v.prototype.render) {
          for (s.state = s.__s, s.__d = !1, k && k(t), h = s.render(s.props, s.state, s.context), C = 0; C < s._sb.length; C++)
            s.__h.push(s._sb[C]);
          s._sb = [];
        } else
          do
            s.__d = !1, k && k(t), h = s.render(s.props, s.state, s.context), s.state = s.__s;
          while (s.__d && ++T < 25);
        s.state = s.__s, s.getChildContext != null && (o = yt(yt({}, o), s.getChildContext())), d || s.getSnapshotBeforeUpdate == null || (f = s.getSnapshotBeforeUpdate(u, c)), S = h != null && h.type === Ql && h.key == null ? h.props.children : h, qf(e, Array.isArray(S) ? S : [S], t, n, o, i, r, l, _, a), s.base = t.__e, t.__h = null, s.__h.length && l.push(s), y && (s.__E = s.__ = null), s.__e = !1;
      } else
        r == null && t.__v === n.__v ? (t.__k = n.__k, t.__e = n.__e) : t.__e = iy(n.__e, t, n, o, i, r, l, a);
    (h = K.diffed) && h(t);
  } catch ($) {
    t.__v = null, (a || r != null) && (t.__e = _, t.__h = !!a, r[r.indexOf(_)] = null), K.__e($, t, n);
  }
}
function sy(e, t) {
  K.__c && K.__c(t, e), e.some(function(n) {
    try {
      e = n.__h, n.__h = [], e.some(function(o) {
        o.call(n);
      });
    } catch (o) {
      K.__e(o, n.__v);
    }
  });
}
function iy(e, t, n, o, i, r, l, _) {
  var a, h, s, d = n.props, u = t.props, c = t.type, f = 0;
  if (c === "svg" && (i = !0), r != null) {
    for (; f < r.length; f++)
      if ((a = r[f]) && "setAttribute" in a == !!c && (c ? a.localName === c : a.nodeType === 3)) {
        e = a, r[f] = null;
        break;
      }
  }
  if (e == null) {
    if (c === null)
      return document.createTextNode(u);
    e = i ? document.createElementNS("http://www.w3.org/2000/svg", c) : document.createElement(c, u.is && u), r = null, _ = !1;
  }
  if (c === null)
    d === u || _ && e.data === u || (e.data = u);
  else {
    if (r = r && Zl.call(e.childNodes), h = (d = n.props || jf).dangerouslySetInnerHTML, s = u.dangerouslySetInnerHTML, !_) {
      if (r != null)
        for (d = {}, f = 0; f < e.attributes.length; f++)
          d[e.attributes[f].name] = e.attributes[f].value;
      (s || h) && (s && (h && s.__html == h.__html || s.__html === e.innerHTML) || (e.innerHTML = s && s.__html || ""));
    }
    if (ry(e, u, d, i, _), s)
      t.__k = [];
    else if (f = t.props.children, qf(e, Array.isArray(f) ? f : [f], t, n, o, i && c !== "foreignObject", r, l, r ? r[0] : n.__k && Ro(n, 0), _), r != null)
      for (f = r.length; f--; )
        r[f] != null && zf(r[f]);
    _ || ("value" in u && (f = u.value) !== void 0 && (f !== e.value || c === "progress" && !f || c === "option" && f !== d.value) && as(e, "value", f, d.value, !1), "checked" in u && (f = u.checked) !== void 0 && f !== e.checked && as(e, "checked", f, d.checked, !1));
  }
  return e;
}
function Xf(e, t, n) {
  try {
    typeof e == "function" ? e(t) : e.current = t;
  } catch (o) {
    K.__e(o, n);
  }
}
function Jf(e, t, n) {
  var o, i;
  if (K.unmount && K.unmount(e), (o = e.ref) && (o.current && o.current !== e.__e || Xf(o, null, t)), (o = e.__c) != null) {
    if (o.componentWillUnmount)
      try {
        o.componentWillUnmount();
      } catch (r) {
        K.__e(r, t);
      }
    o.base = o.__P = null, e.__c = void 0;
  }
  if (o = e.__k)
    for (i = 0; i < o.length; i++)
      o[i] && Jf(o[i], t, n || typeof e.type != "function");
  n || e.__e == null || zf(e.__e), e.__ = e.__e = e.__d = void 0;
}
function ly(e, t, n) {
  return this.constructor(e, n);
}
Zl = Bf.slice, K = { __e: function(e, t, n, o) {
  for (var i, r, l; t = t.__; )
    if ((i = t.__c) && !i.__)
      try {
        if ((r = i.constructor) && r.getDerivedStateFromError != null && (i.setState(r.getDerivedStateFromError(e)), l = i.__d), i.componentDidCatch != null && (i.componentDidCatch(e, o || {}), l = i.__d), l)
          return i.__E = i;
      } catch (_) {
        e = _;
      }
  throw e;
} }, Uf = 0, Ff = function(e) {
  return e != null && e.constructor === void 0;
}, oo.prototype.setState = function(e, t) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = yt({}, this.state), typeof e == "function" && (e = e(yt({}, n), this.props)), e && yt(n, e), e != null && this.__v && (t && this._sb.push(t), v_(this));
}, oo.prototype.forceUpdate = function(e) {
  this.__v && (this.__e = !0, e && this.__h.push(e), v_(this));
}, oo.prototype.render = Ql, no = [], _s.__r = 0;
var cy = 0;
function $_(e, t, n, o, i) {
  var r, l, _ = {};
  for (l in t)
    l == "ref" ? r = t[l] : _[l] = t[l];
  var a = { type: e, props: _, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: --cy, __source: i, __self: o };
  if (typeof e == "function" && (r = e.defaultProps))
    for (l in r)
      _[l] === void 0 && (_[l] = r[l]);
  return K.vnode && K.vnode(a), a;
}
let Zf = class extends oo {
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
    return /* @__PURE__ */ $_(We, { ...i }, o);
  }
  renderItem(t, n, o) {
    const { itemRender: i, defaultBtnProps: r, onClickItem: l } = t, _ = { key: o, ...n };
    if (r && Object.assign(_, r), l && (_.onClick = this.handleItemClick.bind(this, _, o, n.onClick)), i) {
      const a = i.call(this, _, oy);
      if (Ff(a))
        return a;
      typeof a == "object" && Object.assign(_, a);
    }
    return this.onRenderItem(_, o);
  }
  render() {
    const t = this.beforeRender(), {
      className: n,
      items: o,
      size: i,
      type: r,
      defaultBtnProps: l,
      children: _,
      itemRender: a,
      onClickItem: h,
      beforeRender: s,
      afterRender: d,
      beforeDestroy: u,
      ...c
    } = t;
    return /* @__PURE__ */ $_(
      "div",
      {
        className: M("btn-group", i ? `size-${i}` : "", n),
        ...c,
        children: [
          o && o.map(this.renderItem.bind(this, t)),
          _
        ]
      }
    );
  }
};
function _y({
  key: e,
  type: t,
  btnType: n,
  ...o
}) {
  return /* @__PURE__ */ Mi(Zf, { type: n, ...o });
}
var Jt;
let An = (Jt = class extends Ti {
  beforeRender() {
    const { gap: t, btnProps: n, wrap: o, ...i } = super.beforeRender();
    return i.className = M(i.className, o ? "flex-wrap" : "", typeof t == "number" ? `gap-${t}` : ""), typeof t == "string" && (i.style ? i.style.gap = t : i.style = { gap: t }), i;
  }
  isBtnItem(t) {
    return t === "item" || t === "dropdown";
  }
  renderTypedItem(t, n, o) {
    const i = this.isBtnItem(o.type) ? { btnType: "ghost", ...this.props.btnProps } : {}, r = {
      ...n,
      ...i,
      ...o,
      className: M(`${this.name}-${o.type}`, n.className, i.className, o.className),
      style: Object.assign({}, n.style, i.style, o.style)
    };
    return /* @__PURE__ */ Mi(t, { ...r });
  }
}, E(Jt, "ItemComponents", {
  item: gg,
  dropdown: Wf,
  "btn-group": _y
}), E(Jt, "ROOT_TAG", "nav"), E(Jt, "NAME", "toolbar"), E(Jt, "defaultProps", {
  btnProps: {
    btnType: "ghost"
  }
}), Jt);
function ay({
  className: e,
  style: t,
  actions: n,
  heading: o,
  content: i,
  contentClass: r,
  children: l,
  close: _,
  onClose: a,
  icon: h,
  ...s
}) {
  let d;
  _ === !0 ? d = /* @__PURE__ */ ze(We, { className: "alert-close btn ghost", square: !0, onClick: a, children: /* @__PURE__ */ ze("span", { class: "close" }) }) : Zt(_) ? d = _ : typeof _ == "object" && (d = /* @__PURE__ */ ze(We, { ..._, onClick: a }));
  const u = Zt(n) ? n : n ? /* @__PURE__ */ ze(An, { ...n }) : null;
  return /* @__PURE__ */ ze("div", { className: M("alert", e), style: t, ...s, children: [
    Zt(h) ? h : typeof h == "string" ? /* @__PURE__ */ ze("i", { className: `icon ${h}` }) : null,
    Zt(i) ? i : /* @__PURE__ */ ze("div", { className: M("alert-content", r), children: [
      Zt(o) ? o : o && /* @__PURE__ */ ze("div", { className: "alert-heading", children: o }),
      /* @__PURE__ */ ze("div", { className: "alert-text", children: i }),
      o ? u : null
    ] }),
    o ? null : u,
    d,
    l
  ] });
}
function uy(e) {
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
let fy = class extends Kn {
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
      show: _,
      className: a,
      time: h,
      ...s
    } = this.props;
    return /* @__PURE__ */ dg(
      ay,
      {
        className: M("messager", a, i, l === !0 ? uy(r) : l, _ ? "in" : ""),
        ...s
      }
    );
  }
};
var un, Dr;
class Pr extends ae {
  constructor() {
    super(...arguments);
    x(this, un);
    E(this, "_show", !1);
    E(this, "_showTimer", 0);
    E(this, "_afterRender", ({ firstRender: n }) => {
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
    this._show || (this.emit("show"), this.render(), this._show = !0, N(this, un, Dr).call(this, () => {
      this.emit("shown");
      const { time: n } = this.options;
      n && N(this, un, Dr).call(this, () => this.hide(), n);
    }));
  }
  hide() {
    this._show && (this._show = !1, this.emit("hide"), this.render(), N(this, un, Dr).call(this, () => {
      this.emit("hidden");
    }));
  }
}
un = new WeakSet(), Dr = function(n, o = 200) {
  this._showTimer && clearTimeout(this._showTimer), this._showTimer = window.setTimeout(() => {
    n(), this._showTimer = 0;
  }, o);
}, E(Pr, "NAME", "MessagerItem"), E(Pr, "EVENTS", !0), E(Pr, "Component", fy);
var Ut, fn, Ke, Us, Qf, Fs, eh;
const dc = class extends Qe {
  constructor() {
    super(...arguments);
    x(this, Us);
    x(this, Fs);
    x(this, Ut, void 0);
    x(this, fn, bm(6));
    x(this, Ke, void 0);
  }
  get id() {
    return b(this, fn);
  }
  get isShown() {
    var n;
    return !!((n = b(this, Ke)) != null && n.isShown);
  }
  show(n) {
    this.setOptions(n), N(this, Us, Qf).call(this).show();
  }
  hide() {
    var n;
    (n = b(this, Ke)) == null || n.hide();
  }
  static show(n) {
    typeof n == "string" && (n = { content: n });
    const { container: o, ...i } = n, r = new dc(o || "body", i);
    return r.show(), r;
  }
};
let In = dc;
Ut = new WeakMap(), fn = new WeakMap(), Ke = new WeakMap(), Us = new WeakSet(), Qf = function() {
  if (b(this, Ke))
    b(this, Ke).setOptions(this.options);
  else {
    const n = N(this, Fs, eh).call(this), o = new Pr(n, this.options);
    o.on("hidden", () => {
      o.destroy(), n.remove(), L(this, Ut, void 0);
    }), L(this, Ke, o);
  }
  return b(this, Ke);
}, Fs = new WeakSet(), eh = function() {
  if (b(this, Ut))
    return b(this, Ut);
  const { placement: n = "top" } = this.options;
  let o = this.element.querySelector(`.messagers-${n}`);
  o || (o = document.createElement("div"), o.className = `messagers messagers-${n}`, this.element.appendChild(o));
  let i = o.querySelector(`#messager-${b(this, fn)}`);
  return i || (i = document.createElement("div"), i.className = "messager-holder", i.id = `messager-${b(this, fn)}`, o.appendChild(i), L(this, Ut, i)), i;
}, E(In, "NAME", "messager"), E(In, "DEFAULT", {
  placement: "top",
  animation: !0,
  close: !0,
  margin: 6,
  time: 5e3
});
R(document).on("zui.messager.show", (e, t) => {
  t && In.show(t);
});
var th, X, nh, ro, x_, oh = {}, rh = [], hy = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function vt(e, t) {
  for (var n in t)
    e[n] = t[n];
  return e;
}
function sh(e) {
  var t = e.parentNode;
  t && t.removeChild(e);
}
function Qi(e, t, n, o, i) {
  var r = { type: e, props: t, key: n, ref: o, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: i ?? ++nh };
  return i == null && X.vnode != null && X.vnode(r), r;
}
function ec(e) {
  return e.children;
}
function so(e, t) {
  this.props = e, this.context = t;
}
function Mo(e, t) {
  if (t == null)
    return e.__ ? Mo(e.__, e.__.__k.indexOf(e) + 1) : null;
  for (var n; t < e.__k.length; t++)
    if ((n = e.__k[t]) != null && n.__e != null)
      return n.__e;
  return typeof e.type == "function" ? Mo(e) : null;
}
function ih(e) {
  var t, n;
  if ((e = e.__) != null && e.__c != null) {
    for (e.__e = e.__c.base = null, t = 0; t < e.__k.length; t++)
      if ((n = e.__k[t]) != null && n.__e != null) {
        e.__e = e.__c.base = n.__e;
        break;
      }
    return ih(e);
  }
}
function S_(e) {
  (!e.__d && (e.__d = !0) && ro.push(e) && !us.__r++ || x_ !== X.debounceRendering) && ((x_ = X.debounceRendering) || setTimeout)(us);
}
function us() {
  for (var e; us.__r = ro.length; )
    e = ro.sort(function(t, n) {
      return t.__v.__b - n.__v.__b;
    }), ro = [], e.some(function(t) {
      var n, o, i, r, l, _;
      t.__d && (l = (r = (n = t).__v).__e, (_ = n.__P) && (o = [], (i = vt({}, r)).__v = r.__v + 1, ah(_, r, i, n.__n, _.ownerSVGElement !== void 0, r.__h != null ? [l] : null, o, l ?? Mo(r), r.__h), py(o, r), r.__e != l && ih(r)));
    });
}
function lh(e, t, n, o, i, r, l, _, a, h) {
  var s, d, u, c, f, y, p, m = o && o.__k || rh, g = m.length;
  for (n.__k = [], s = 0; s < t.length; s++)
    if ((c = n.__k[s] = (c = t[s]) == null || typeof c == "boolean" ? null : typeof c == "string" || typeof c == "number" || typeof c == "bigint" ? Qi(null, c, null, null, c) : Array.isArray(c) ? Qi(ec, { children: c }, null, null, null) : c.__b > 0 ? Qi(c.type, c.props, c.key, c.ref ? c.ref : null, c.__v) : c) != null) {
      if (c.__ = n, c.__b = n.__b + 1, (u = m[s]) === null || u && c.key == u.key && c.type === u.type)
        m[s] = void 0;
      else
        for (d = 0; d < g; d++) {
          if ((u = m[d]) && c.key == u.key && c.type === u.type) {
            m[d] = void 0;
            break;
          }
          u = null;
        }
      ah(e, c, u = u || oh, i, r, l, _, a, h), f = c.__e, (d = c.ref) && u.ref != d && (p || (p = []), u.ref && p.push(u.ref, null, c), p.push(d, c.__c || f, c)), f != null ? (y == null && (y = f), typeof c.type == "function" && c.__k === u.__k ? c.__d = a = ch(c, a, e) : a = _h(e, c, u, m, f, a), typeof n.type == "function" && (n.__d = a)) : a && u.__e == a && a.parentNode != e && (a = Mo(u));
    }
  for (n.__e = y, s = g; s--; )
    m[s] != null && fh(m[s], m[s]);
  if (p)
    for (s = 0; s < p.length; s++)
      uh(p[s], p[++s], p[++s]);
}
function ch(e, t, n) {
  for (var o, i = e.__k, r = 0; i && r < i.length; r++)
    (o = i[r]) && (o.__ = e, t = typeof o.type == "function" ? ch(o, t, n) : _h(n, o, o, i, o.__e, t));
  return t;
}
function _h(e, t, n, o, i, r) {
  var l, _, a;
  if (t.__d !== void 0)
    l = t.__d, t.__d = void 0;
  else if (n == null || i != r || i.parentNode == null)
    e:
      if (r == null || r.parentNode !== e)
        e.appendChild(i), l = null;
      else {
        for (_ = r, a = 0; (_ = _.nextSibling) && a < o.length; a += 2)
          if (_ == i)
            break e;
        e.insertBefore(i, r), l = r;
      }
  return l !== void 0 ? l : i.nextSibling;
}
function dy(e, t, n, o, i) {
  var r;
  for (r in n)
    r === "children" || r === "key" || r in t || fs(e, r, null, n[r], o);
  for (r in t)
    i && typeof t[r] != "function" || r === "children" || r === "key" || r === "value" || r === "checked" || n[r] === t[r] || fs(e, r, t[r], n[r], o);
}
function C_(e, t, n) {
  t[0] === "-" ? e.setProperty(t, n) : e[t] = n == null ? "" : typeof n != "number" || hy.test(t) ? n : n + "px";
}
function fs(e, t, n, o, i) {
  var r;
  e:
    if (t === "style")
      if (typeof n == "string")
        e.style.cssText = n;
      else {
        if (typeof o == "string" && (e.style.cssText = o = ""), o)
          for (t in o)
            n && t in n || C_(e.style, t, "");
        if (n)
          for (t in n)
            o && n[t] === o[t] || C_(e.style, t, n[t]);
      }
    else if (t[0] === "o" && t[1] === "n")
      r = t !== (t = t.replace(/Capture$/, "")), t = t.toLowerCase() in e ? t.toLowerCase().slice(2) : t.slice(2), e.l || (e.l = {}), e.l[t + r] = n, n ? o || e.addEventListener(t, r ? T_ : E_, r) : e.removeEventListener(t, r ? T_ : E_, r);
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
function E_(e) {
  this.l[e.type + !1](X.event ? X.event(e) : e);
}
function T_(e) {
  this.l[e.type + !0](X.event ? X.event(e) : e);
}
function ah(e, t, n, o, i, r, l, _, a) {
  var h, s, d, u, c, f, y, p, m, g, w, k, T, C, S, v = t.type;
  if (t.constructor !== void 0)
    return null;
  n.__h != null && (a = n.__h, _ = t.__e = n.__e, t.__h = null, r = [_]), (h = X.__b) && h(t);
  try {
    e:
      if (typeof v == "function") {
        if (p = t.props, m = (h = v.contextType) && o[h.__c], g = h ? m ? m.props.value : h.__ : o, n.__c ? y = (s = t.__c = n.__c).__ = s.__E : ("prototype" in v && v.prototype.render ? t.__c = s = new v(p, g) : (t.__c = s = new so(p, g), s.constructor = v, s.render = gy), m && m.sub(s), s.props = p, s.state || (s.state = {}), s.context = g, s.__n = o, d = s.__d = !0, s.__h = [], s._sb = []), s.__s == null && (s.__s = s.state), v.getDerivedStateFromProps != null && (s.__s == s.state && (s.__s = vt({}, s.__s)), vt(s.__s, v.getDerivedStateFromProps(p, s.__s))), u = s.props, c = s.state, d)
          v.getDerivedStateFromProps == null && s.componentWillMount != null && s.componentWillMount(), s.componentDidMount != null && s.__h.push(s.componentDidMount);
        else {
          if (v.getDerivedStateFromProps == null && p !== u && s.componentWillReceiveProps != null && s.componentWillReceiveProps(p, g), !s.__e && s.shouldComponentUpdate != null && s.shouldComponentUpdate(p, s.__s, g) === !1 || t.__v === n.__v) {
            for (s.props = p, s.state = s.__s, t.__v !== n.__v && (s.__d = !1), s.__v = t, t.__e = n.__e, t.__k = n.__k, t.__k.forEach(function($) {
              $ && ($.__ = t);
            }), w = 0; w < s._sb.length; w++)
              s.__h.push(s._sb[w]);
            s._sb = [], s.__h.length && l.push(s);
            break e;
          }
          s.componentWillUpdate != null && s.componentWillUpdate(p, s.__s, g), s.componentDidUpdate != null && s.__h.push(function() {
            s.componentDidUpdate(u, c, f);
          });
        }
        if (s.context = g, s.props = p, s.__v = t, s.__P = e, k = X.__r, T = 0, "prototype" in v && v.prototype.render) {
          for (s.state = s.__s, s.__d = !1, k && k(t), h = s.render(s.props, s.state, s.context), C = 0; C < s._sb.length; C++)
            s.__h.push(s._sb[C]);
          s._sb = [];
        } else
          do
            s.__d = !1, k && k(t), h = s.render(s.props, s.state, s.context), s.state = s.__s;
          while (s.__d && ++T < 25);
        s.state = s.__s, s.getChildContext != null && (o = vt(vt({}, o), s.getChildContext())), d || s.getSnapshotBeforeUpdate == null || (f = s.getSnapshotBeforeUpdate(u, c)), S = h != null && h.type === ec && h.key == null ? h.props.children : h, lh(e, Array.isArray(S) ? S : [S], t, n, o, i, r, l, _, a), s.base = t.__e, t.__h = null, s.__h.length && l.push(s), y && (s.__E = s.__ = null), s.__e = !1;
      } else
        r == null && t.__v === n.__v ? (t.__k = n.__k, t.__e = n.__e) : t.__e = my(n.__e, t, n, o, i, r, l, a);
    (h = X.diffed) && h(t);
  } catch ($) {
    t.__v = null, (a || r != null) && (t.__e = _, t.__h = !!a, r[r.indexOf(_)] = null), X.__e($, t, n);
  }
}
function py(e, t) {
  X.__c && X.__c(t, e), e.some(function(n) {
    try {
      e = n.__h, n.__h = [], e.some(function(o) {
        o.call(n);
      });
    } catch (o) {
      X.__e(o, n.__v);
    }
  });
}
function my(e, t, n, o, i, r, l, _) {
  var a, h, s, d = n.props, u = t.props, c = t.type, f = 0;
  if (c === "svg" && (i = !0), r != null) {
    for (; f < r.length; f++)
      if ((a = r[f]) && "setAttribute" in a == !!c && (c ? a.localName === c : a.nodeType === 3)) {
        e = a, r[f] = null;
        break;
      }
  }
  if (e == null) {
    if (c === null)
      return document.createTextNode(u);
    e = i ? document.createElementNS("http://www.w3.org/2000/svg", c) : document.createElement(c, u.is && u), r = null, _ = !1;
  }
  if (c === null)
    d === u || _ && e.data === u || (e.data = u);
  else {
    if (r = r && th.call(e.childNodes), h = (d = n.props || oh).dangerouslySetInnerHTML, s = u.dangerouslySetInnerHTML, !_) {
      if (r != null)
        for (d = {}, f = 0; f < e.attributes.length; f++)
          d[e.attributes[f].name] = e.attributes[f].value;
      (s || h) && (s && (h && s.__html == h.__html || s.__html === e.innerHTML) || (e.innerHTML = s && s.__html || ""));
    }
    if (dy(e, u, d, i, _), s)
      t.__k = [];
    else if (f = t.props.children, lh(e, Array.isArray(f) ? f : [f], t, n, o, i && c !== "foreignObject", r, l, r ? r[0] : n.__k && Mo(n, 0), _), r != null)
      for (f = r.length; f--; )
        r[f] != null && sh(r[f]);
    _ || ("value" in u && (f = u.value) !== void 0 && (f !== e.value || c === "progress" && !f || c === "option" && f !== d.value) && fs(e, "value", f, d.value, !1), "checked" in u && (f = u.checked) !== void 0 && f !== e.checked && fs(e, "checked", f, d.checked, !1));
  }
  return e;
}
function uh(e, t, n) {
  try {
    typeof e == "function" ? e(t) : e.current = t;
  } catch (o) {
    X.__e(o, n);
  }
}
function fh(e, t, n) {
  var o, i;
  if (X.unmount && X.unmount(e), (o = e.ref) && (o.current && o.current !== e.__e || uh(o, null, t)), (o = e.__c) != null) {
    if (o.componentWillUnmount)
      try {
        o.componentWillUnmount();
      } catch (r) {
        X.__e(r, t);
      }
    o.base = o.__P = null, e.__c = void 0;
  }
  if (o = e.__k)
    for (i = 0; i < o.length; i++)
      o[i] && fh(o[i], t, n || typeof e.type != "function");
  n || e.__e == null || sh(e.__e), e.__ = e.__e = e.__d = void 0;
}
function gy(e, t, n) {
  return this.constructor(e, n);
}
th = rh.slice, X = { __e: function(e, t, n, o) {
  for (var i, r, l; t = t.__; )
    if ((i = t.__c) && !i.__)
      try {
        if ((r = i.constructor) && r.getDerivedStateFromError != null && (i.setState(r.getDerivedStateFromError(e)), l = i.__d), i.componentDidCatch != null && (i.componentDidCatch(e, o || {}), l = i.__d), l)
          return i.__E = i;
      } catch (_) {
        e = _;
      }
  throw e;
} }, nh = 0, so.prototype.setState = function(e, t) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = vt({}, this.state), typeof e == "function" && (e = e(vt({}, n), this.props)), e && vt(n, e), e != null && this.__v && (t && this._sb.push(t), S_(this));
}, so.prototype.forceUpdate = function(e) {
  this.__v && (this.__e = !0, e && this.__h.push(e), S_(this));
}, so.prototype.render = ec, ro = [], us.__r = 0;
var yy = 0;
function wr(e, t, n, o, i) {
  var r, l, _ = {};
  for (l in t)
    l == "ref" ? r = t[l] : _[l] = t[l];
  var a = { type: e, props: _, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: --yy, __source: i, __self: o };
  if (typeof e == "function" && (r = e.defaultProps))
    for (l in r)
      _[l] === void 0 && (_[l] = r[l]);
  return X.vnode && X.vnode(a), a;
}
var Sr;
let vy = (Sr = class extends so {
  render() {
    const { percent: t, circleSize: n, circleBorderSize: o, circleBgColor: i, circleColor: r } = this.props, l = (n - o) / 2, _ = n / 2;
    return /* @__PURE__ */ wr("svg", { width: n, height: n, class: "progress-circle", children: [
      /* @__PURE__ */ wr("circle", { cx: _, cy: _, r: l, stroke: i, "stroke-width": o }),
      /* @__PURE__ */ wr("circle", { cx: _, cy: _, r: l, stroke: r, "stroke-dasharray": Math.PI * l * 2, "stroke-dashoffset": Math.PI * l * 2 * (100 - t) / 100, "stroke-width": o }),
      /* @__PURE__ */ wr("text", { x: _, y: _ + o / 4, "dominant-baseline": "middle", style: { fontSize: `${l}px` }, children: Math.round(t) })
    ] });
  }
}, E(Sr, "NAME", "zui.progress-circle"), E(Sr, "defaultProps", {
  circleSize: 24,
  circleBorderSize: 2,
  circleBgColor: "var(--progress-circle-bg)",
  circleColor: "var(--progress-circle-bar-color)"
}), Sr);
class A_ extends ae {
}
E(A_, "NAME", "table-sorter"), E(A_, "Component", vy);
var tc, J, hh, io, L_, dh = {}, ph = [], by = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function bt(e, t) {
  for (var n in t)
    e[n] = t[n];
  return e;
}
function mh(e) {
  var t = e.parentNode;
  t && t.removeChild(e);
}
function wy(e, t, n) {
  var o, i, r, l = {};
  for (r in t)
    r == "key" ? o = t[r] : r == "ref" ? i = t[r] : l[r] = t[r];
  if (arguments.length > 2 && (l.children = arguments.length > 3 ? tc.call(arguments, 2) : n), typeof e == "function" && e.defaultProps != null)
    for (r in e.defaultProps)
      l[r] === void 0 && (l[r] = e.defaultProps[r]);
  return Hr(e, l, o, i, null);
}
function Hr(e, t, n, o, i) {
  var r = { type: e, props: t, key: n, ref: o, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: i ?? ++hh };
  return i == null && J.vnode != null && J.vnode(r), r;
}
function nc(e) {
  return e.children;
}
function lo(e, t) {
  this.props = e, this.context = t;
}
function Po(e, t) {
  if (t == null)
    return e.__ ? Po(e.__, e.__.__k.indexOf(e) + 1) : null;
  for (var n; t < e.__k.length; t++)
    if ((n = e.__k[t]) != null && n.__e != null)
      return n.__e;
  return typeof e.type == "function" ? Po(e) : null;
}
function gh(e) {
  var t, n;
  if ((e = e.__) != null && e.__c != null) {
    for (e.__e = e.__c.base = null, t = 0; t < e.__k.length; t++)
      if ((n = e.__k[t]) != null && n.__e != null) {
        e.__e = e.__c.base = n.__e;
        break;
      }
    return gh(e);
  }
}
function N_(e) {
  (!e.__d && (e.__d = !0) && io.push(e) && !hs.__r++ || L_ !== J.debounceRendering) && ((L_ = J.debounceRendering) || setTimeout)(hs);
}
function hs() {
  for (var e; hs.__r = io.length; )
    e = io.sort(function(t, n) {
      return t.__v.__b - n.__v.__b;
    }), io = [], e.some(function(t) {
      var n, o, i, r, l, _;
      t.__d && (l = (r = (n = t).__v).__e, (_ = n.__P) && (o = [], (i = bt({}, r)).__v = r.__v + 1, wh(_, r, i, n.__n, _.ownerSVGElement !== void 0, r.__h != null ? [l] : null, o, l ?? Po(r), r.__h), $y(o, r), r.__e != l && gh(r)));
    });
}
function yh(e, t, n, o, i, r, l, _, a, h) {
  var s, d, u, c, f, y, p, m = o && o.__k || ph, g = m.length;
  for (n.__k = [], s = 0; s < t.length; s++)
    if ((c = n.__k[s] = (c = t[s]) == null || typeof c == "boolean" ? null : typeof c == "string" || typeof c == "number" || typeof c == "bigint" ? Hr(null, c, null, null, c) : Array.isArray(c) ? Hr(nc, { children: c }, null, null, null) : c.__b > 0 ? Hr(c.type, c.props, c.key, c.ref ? c.ref : null, c.__v) : c) != null) {
      if (c.__ = n, c.__b = n.__b + 1, (u = m[s]) === null || u && c.key == u.key && c.type === u.type)
        m[s] = void 0;
      else
        for (d = 0; d < g; d++) {
          if ((u = m[d]) && c.key == u.key && c.type === u.type) {
            m[d] = void 0;
            break;
          }
          u = null;
        }
      wh(e, c, u = u || dh, i, r, l, _, a, h), f = c.__e, (d = c.ref) && u.ref != d && (p || (p = []), u.ref && p.push(u.ref, null, c), p.push(d, c.__c || f, c)), f != null ? (y == null && (y = f), typeof c.type == "function" && c.__k === u.__k ? c.__d = a = vh(c, a, e) : a = bh(e, c, u, m, f, a), typeof n.type == "function" && (n.__d = a)) : a && u.__e == a && a.parentNode != e && (a = Po(u));
    }
  for (n.__e = y, s = g; s--; )
    m[s] != null && $h(m[s], m[s]);
  if (p)
    for (s = 0; s < p.length; s++)
      kh(p[s], p[++s], p[++s]);
}
function vh(e, t, n) {
  for (var o, i = e.__k, r = 0; i && r < i.length; r++)
    (o = i[r]) && (o.__ = e, t = typeof o.type == "function" ? vh(o, t, n) : bh(n, o, o, i, o.__e, t));
  return t;
}
function bh(e, t, n, o, i, r) {
  var l, _, a;
  if (t.__d !== void 0)
    l = t.__d, t.__d = void 0;
  else if (n == null || i != r || i.parentNode == null)
    e:
      if (r == null || r.parentNode !== e)
        e.appendChild(i), l = null;
      else {
        for (_ = r, a = 0; (_ = _.nextSibling) && a < o.length; a += 2)
          if (_ == i)
            break e;
        e.insertBefore(i, r), l = r;
      }
  return l !== void 0 ? l : i.nextSibling;
}
function ky(e, t, n, o, i) {
  var r;
  for (r in n)
    r === "children" || r === "key" || r in t || ds(e, r, null, n[r], o);
  for (r in t)
    i && typeof t[r] != "function" || r === "children" || r === "key" || r === "value" || r === "checked" || n[r] === t[r] || ds(e, r, t[r], n[r], o);
}
function R_(e, t, n) {
  t[0] === "-" ? e.setProperty(t, n) : e[t] = n == null ? "" : typeof n != "number" || by.test(t) ? n : n + "px";
}
function ds(e, t, n, o, i) {
  var r;
  e:
    if (t === "style")
      if (typeof n == "string")
        e.style.cssText = n;
      else {
        if (typeof o == "string" && (e.style.cssText = o = ""), o)
          for (t in o)
            n && t in n || R_(e.style, t, "");
        if (n)
          for (t in n)
            o && n[t] === o[t] || R_(e.style, t, n[t]);
      }
    else if (t[0] === "o" && t[1] === "n")
      r = t !== (t = t.replace(/Capture$/, "")), t = t.toLowerCase() in e ? t.toLowerCase().slice(2) : t.slice(2), e.l || (e.l = {}), e.l[t + r] = n, n ? o || e.addEventListener(t, r ? P_ : M_, r) : e.removeEventListener(t, r ? P_ : M_, r);
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
  this.l[e.type + !1](J.event ? J.event(e) : e);
}
function P_(e) {
  this.l[e.type + !0](J.event ? J.event(e) : e);
}
function wh(e, t, n, o, i, r, l, _, a) {
  var h, s, d, u, c, f, y, p, m, g, w, k, T, C, S, v = t.type;
  if (t.constructor !== void 0)
    return null;
  n.__h != null && (a = n.__h, _ = t.__e = n.__e, t.__h = null, r = [_]), (h = J.__b) && h(t);
  try {
    e:
      if (typeof v == "function") {
        if (p = t.props, m = (h = v.contextType) && o[h.__c], g = h ? m ? m.props.value : h.__ : o, n.__c ? y = (s = t.__c = n.__c).__ = s.__E : ("prototype" in v && v.prototype.render ? t.__c = s = new v(p, g) : (t.__c = s = new lo(p, g), s.constructor = v, s.render = Sy), m && m.sub(s), s.props = p, s.state || (s.state = {}), s.context = g, s.__n = o, d = s.__d = !0, s.__h = [], s._sb = []), s.__s == null && (s.__s = s.state), v.getDerivedStateFromProps != null && (s.__s == s.state && (s.__s = bt({}, s.__s)), bt(s.__s, v.getDerivedStateFromProps(p, s.__s))), u = s.props, c = s.state, d)
          v.getDerivedStateFromProps == null && s.componentWillMount != null && s.componentWillMount(), s.componentDidMount != null && s.__h.push(s.componentDidMount);
        else {
          if (v.getDerivedStateFromProps == null && p !== u && s.componentWillReceiveProps != null && s.componentWillReceiveProps(p, g), !s.__e && s.shouldComponentUpdate != null && s.shouldComponentUpdate(p, s.__s, g) === !1 || t.__v === n.__v) {
            for (s.props = p, s.state = s.__s, t.__v !== n.__v && (s.__d = !1), s.__v = t, t.__e = n.__e, t.__k = n.__k, t.__k.forEach(function($) {
              $ && ($.__ = t);
            }), w = 0; w < s._sb.length; w++)
              s.__h.push(s._sb[w]);
            s._sb = [], s.__h.length && l.push(s);
            break e;
          }
          s.componentWillUpdate != null && s.componentWillUpdate(p, s.__s, g), s.componentDidUpdate != null && s.__h.push(function() {
            s.componentDidUpdate(u, c, f);
          });
        }
        if (s.context = g, s.props = p, s.__v = t, s.__P = e, k = J.__r, T = 0, "prototype" in v && v.prototype.render) {
          for (s.state = s.__s, s.__d = !1, k && k(t), h = s.render(s.props, s.state, s.context), C = 0; C < s._sb.length; C++)
            s.__h.push(s._sb[C]);
          s._sb = [];
        } else
          do
            s.__d = !1, k && k(t), h = s.render(s.props, s.state, s.context), s.state = s.__s;
          while (s.__d && ++T < 25);
        s.state = s.__s, s.getChildContext != null && (o = bt(bt({}, o), s.getChildContext())), d || s.getSnapshotBeforeUpdate == null || (f = s.getSnapshotBeforeUpdate(u, c)), S = h != null && h.type === nc && h.key == null ? h.props.children : h, yh(e, Array.isArray(S) ? S : [S], t, n, o, i, r, l, _, a), s.base = t.__e, t.__h = null, s.__h.length && l.push(s), y && (s.__E = s.__ = null), s.__e = !1;
      } else
        r == null && t.__v === n.__v ? (t.__k = n.__k, t.__e = n.__e) : t.__e = xy(n.__e, t, n, o, i, r, l, a);
    (h = J.diffed) && h(t);
  } catch ($) {
    t.__v = null, (a || r != null) && (t.__e = _, t.__h = !!a, r[r.indexOf(_)] = null), J.__e($, t, n);
  }
}
function $y(e, t) {
  J.__c && J.__c(t, e), e.some(function(n) {
    try {
      e = n.__h, n.__h = [], e.some(function(o) {
        o.call(n);
      });
    } catch (o) {
      J.__e(o, n.__v);
    }
  });
}
function xy(e, t, n, o, i, r, l, _) {
  var a, h, s, d = n.props, u = t.props, c = t.type, f = 0;
  if (c === "svg" && (i = !0), r != null) {
    for (; f < r.length; f++)
      if ((a = r[f]) && "setAttribute" in a == !!c && (c ? a.localName === c : a.nodeType === 3)) {
        e = a, r[f] = null;
        break;
      }
  }
  if (e == null) {
    if (c === null)
      return document.createTextNode(u);
    e = i ? document.createElementNS("http://www.w3.org/2000/svg", c) : document.createElement(c, u.is && u), r = null, _ = !1;
  }
  if (c === null)
    d === u || _ && e.data === u || (e.data = u);
  else {
    if (r = r && tc.call(e.childNodes), h = (d = n.props || dh).dangerouslySetInnerHTML, s = u.dangerouslySetInnerHTML, !_) {
      if (r != null)
        for (d = {}, f = 0; f < e.attributes.length; f++)
          d[e.attributes[f].name] = e.attributes[f].value;
      (s || h) && (s && (h && s.__html == h.__html || s.__html === e.innerHTML) || (e.innerHTML = s && s.__html || ""));
    }
    if (ky(e, u, d, i, _), s)
      t.__k = [];
    else if (f = t.props.children, yh(e, Array.isArray(f) ? f : [f], t, n, o, i && c !== "foreignObject", r, l, r ? r[0] : n.__k && Po(n, 0), _), r != null)
      for (f = r.length; f--; )
        r[f] != null && mh(r[f]);
    _ || ("value" in u && (f = u.value) !== void 0 && (f !== e.value || c === "progress" && !f || c === "option" && f !== d.value) && ds(e, "value", f, d.value, !1), "checked" in u && (f = u.checked) !== void 0 && f !== e.checked && ds(e, "checked", f, d.checked, !1));
  }
  return e;
}
function kh(e, t, n) {
  try {
    typeof e == "function" ? e(t) : e.current = t;
  } catch (o) {
    J.__e(o, n);
  }
}
function $h(e, t, n) {
  var o, i;
  if (J.unmount && J.unmount(e), (o = e.ref) && (o.current && o.current !== e.__e || kh(o, null, t)), (o = e.__c) != null) {
    if (o.componentWillUnmount)
      try {
        o.componentWillUnmount();
      } catch (r) {
        J.__e(r, t);
      }
    o.base = o.__P = null, e.__c = void 0;
  }
  if (o = e.__k)
    for (i = 0; i < o.length; i++)
      o[i] && $h(o[i], t, n || typeof e.type != "function");
  n || e.__e == null || mh(e.__e), e.__ = e.__e = e.__d = void 0;
}
function Sy(e, t, n) {
  return this.constructor(e, n);
}
tc = ph.slice, J = { __e: function(e, t, n, o) {
  for (var i, r, l; t = t.__; )
    if ((i = t.__c) && !i.__)
      try {
        if ((r = i.constructor) && r.getDerivedStateFromError != null && (i.setState(r.getDerivedStateFromError(e)), l = i.__d), i.componentDidCatch != null && (i.componentDidCatch(e, o || {}), l = i.__d), l)
          return i.__E = i;
      } catch (_) {
        e = _;
      }
  throw e;
} }, hh = 0, lo.prototype.setState = function(e, t) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = bt({}, this.state), typeof e == "function" && (e = e(bt({}, n), this.props)), e && bt(n, e), e != null && this.__v && (t && this._sb.push(t), N_(this));
}, lo.prototype.forceUpdate = function(e) {
  this.__v && (this.__e = !0, e && this.__h.push(e), N_(this));
}, lo.prototype.render = nc, io = [], hs.__r = 0;
var Cy = 0;
function kr(e, t, n, o, i) {
  var r, l, _ = {};
  for (l in t)
    l == "ref" ? r = t[l] : _[l] = t[l];
  var a = { type: e, props: _, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: --Cy, __source: i, __self: o };
  if (typeof e == "function" && (r = e.defaultProps))
    for (l in r)
      _[l] === void 0 && (_[l] = r[l]);
  return J.vnode && J.vnode(a), a;
}
let Ey = class extends lo {
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
      component: n,
      className: o,
      children: i,
      text: r,
      icon: l,
      surffixIcon: _,
      disabled: a,
      defaultChecked: h,
      onChange: s,
      ...d
    } = this.props, u = this.state.checked ? 1 : 0, c = n || "div", f = typeof l == "string" ? /* @__PURE__ */ kr("i", { class: `icon ${l}` }) : l, y = typeof _ == "string" ? /* @__PURE__ */ kr("i", { class: `icon ${_}` }) : _, p = [
      /* @__PURE__ */ kr("input", { onChange: s, type: "checkbox", value: u, checked: !!this.state.checked }),
      /* @__PURE__ */ kr("label", { children: [
        f,
        r,
        y
      ] })
    ];
    return wy(
      c,
      {
        className: M("switch", o, { disabled: a }),
        onClick: this.handleOnClick,
        ...d
      },
      ...p,
      i
    );
  }
};
class D_ extends ae {
}
E(D_, "NAME", "switch"), E(D_, "Component", Ey);
function Ty(e) {
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
function Ay(e, t) {
  const n = typeof e == "string" ? document.querySelector(e) : e;
  if (!n)
    return !1;
  const o = n.getBoundingClientRect(), i = window.innerHeight || document.documentElement.clientHeight, r = window.innerWidth || document.documentElement.clientWidth;
  if (t != null && t.fullyCheck)
    return o.left >= 0 && o.top >= 0 && o.left + o.width <= r && o.top + o.height <= i;
  const l = o.top <= i && o.top + o.height >= 0, _ = o.left <= r && o.left + o.width >= 0;
  return l && _;
}
const Gb = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  classes: M,
  getClassList: Ei,
  isElementVisible: Ay,
  selectText: Ty
}, Symbol.toStringTag, { value: "Module" }));
/*! js-cookie v3.0.1 | MIT */
function $r(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t];
    for (var o in n)
      e[o] = n[o];
  }
  return e;
}
var Ly = {
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
function yl(e, t) {
  function n(i, r, l) {
    if (!(typeof document > "u")) {
      l = $r({}, t, l), typeof l.expires == "number" && (l.expires = new Date(Date.now() + l.expires * 864e5)), l.expires && (l.expires = l.expires.toUTCString()), i = encodeURIComponent(i).replace(/%(2[346B]|5E|60|7C)/g, decodeURIComponent).replace(/[()]/g, escape);
      var _ = "";
      for (var a in l)
        l[a] && (_ += "; " + a, l[a] !== !0 && (_ += "=" + l[a].split(";")[0]));
      return document.cookie = i + "=" + e.write(r, i) + _;
    }
  }
  function o(i) {
    if (!(typeof document > "u" || arguments.length && !i)) {
      for (var r = document.cookie ? document.cookie.split("; ") : [], l = {}, _ = 0; _ < r.length; _++) {
        var a = r[_].split("="), h = a.slice(1).join("=");
        try {
          var s = decodeURIComponent(a[0]);
          if (l[s] = e.read(h, s), i === s)
            break;
        } catch {
        }
      }
      return i ? l[i] : l;
    }
  }
  return Object.create(
    {
      set: n,
      get: o,
      remove: function(i, r) {
        n(
          i,
          "",
          $r({}, r, {
            expires: -1
          })
        );
      },
      withAttributes: function(i) {
        return yl(this.converter, $r({}, this.attributes, i));
      },
      withConverter: function(i) {
        return yl($r({}, this.converter, i), this.attributes);
      }
    },
    {
      attributes: { value: Object.freeze(t) },
      converter: { value: Object.freeze(e) }
    }
  );
}
var Ny = yl(Ly, { path: "/" });
window.$ && Object.assign(window.$, { cookie: Ny });
var xh = function(e, t, n, o) {
  var i;
  t[0] = 0;
  for (var r = 1; r < t.length; r++) {
    var l = t[r++], _ = t[r] ? (t[0] |= l ? 1 : 2, n[t[r++]]) : t[++r];
    l === 3 ? o[0] = _ : l === 4 ? o[1] = Object.assign(o[1] || {}, _) : l === 5 ? (o[1] = o[1] || {})[t[++r]] = _ : l === 6 ? o[1][t[++r]] += _ + "" : l ? (i = e.apply(_, xh(e, _, n, ["", null])), o.push(i), _[0] ? t[0] |= 2 : (t[r - 2] = 0, t[r] = i)) : o.push(_);
  }
  return o;
}, H_ = /* @__PURE__ */ new Map();
function Sh(e) {
  var t = H_.get(this);
  return t || (t = /* @__PURE__ */ new Map(), H_.set(this, t)), (t = xh(this, t.get(e) || (t.set(e, t = function(n) {
    for (var o, i, r = 1, l = "", _ = "", a = [0], h = function(u) {
      r === 1 && (u || (l = l.replace(/^\s*\n\s*|\s*\n\s*$/g, ""))) ? a.push(0, u, l) : r === 3 && (u || l) ? (a.push(3, u, l), r = 2) : r === 2 && l === "..." && u ? a.push(4, u, 0) : r === 2 && l && !u ? a.push(5, 0, !0, l) : r >= 5 && ((l || !u && r === 5) && (a.push(r, 0, l, i), r = 6), u && (a.push(r, u, 0, i), r = 6)), l = "";
    }, s = 0; s < n.length; s++) {
      s && (r === 1 && h(), h(s));
      for (var d = 0; d < n[s].length; d++)
        o = n[s][d], r === 1 ? o === "<" ? (h(), a = [a], r = 3) : l += o : r === 4 ? l === "--" && o === ">" ? (r = 1, l = "") : l = o + l[0] : _ ? o === _ ? _ = "" : l += o : o === '"' || o === "'" ? _ = o : o === ">" ? (h(), r = 1) : r && (o === "=" ? (r = 5, i = l, l = "") : o === "/" && (r < 5 || n[s][d + 1] === ">") ? (h(), r === 3 && (a = a[0]), r = a, (a = a[0]).push(2, 0, r), r = 0) : o === " " || o === "	" || o === `
` || o === "\r" ? (h(), r = 2) : l += o), r === 3 && l === "!--" && (r = 4, a = a[0]);
    }
    return h(), a;
  }(e)), t), arguments, [])).length > 1 ? t : t[0];
}
var pr, B, Ch, Eh, co, O_, Th, ps = {}, Ah = [], Ry = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function Ze(e, t) {
  for (var n in t)
    e[n] = t[n];
  return e;
}
function Lh(e) {
  var t = e.parentNode;
  t && t.removeChild(e);
}
function ms(e, t, n) {
  var o, i, r, l = {};
  for (r in t)
    r == "key" ? o = t[r] : r == "ref" ? i = t[r] : l[r] = t[r];
  if (arguments.length > 2 && (l.children = arguments.length > 3 ? pr.call(arguments, 2) : n), typeof e == "function" && e.defaultProps != null)
    for (r in e.defaultProps)
      l[r] === void 0 && (l[r] = e.defaultProps[r]);
  return _o(e, l, o, i, null);
}
function _o(e, t, n, o, i) {
  var r = { type: e, props: t, key: n, ref: o, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: i ?? ++Ch };
  return i == null && B.vnode != null && B.vnode(r), r;
}
function My() {
  return { current: null };
}
function mr(e) {
  return e.children;
}
function ao(e, t) {
  this.props = e, this.context = t;
}
function Do(e, t) {
  if (t == null)
    return e.__ ? Do(e.__, e.__.__k.indexOf(e) + 1) : null;
  for (var n; t < e.__k.length; t++)
    if ((n = e.__k[t]) != null && n.__e != null)
      return n.__e;
  return typeof e.type == "function" ? Do(e) : null;
}
function Nh(e) {
  var t, n;
  if ((e = e.__) != null && e.__c != null) {
    for (e.__e = e.__c.base = null, t = 0; t < e.__k.length; t++)
      if ((n = e.__k[t]) != null && n.__e != null) {
        e.__e = e.__c.base = n.__e;
        break;
      }
    return Nh(e);
  }
}
function vl(e) {
  (!e.__d && (e.__d = !0) && co.push(e) && !gs.__r++ || O_ !== B.debounceRendering) && ((O_ = B.debounceRendering) || setTimeout)(gs);
}
function gs() {
  for (var e; gs.__r = co.length; )
    e = co.sort(function(t, n) {
      return t.__v.__b - n.__v.__b;
    }), co = [], e.some(function(t) {
      var n, o, i, r, l, _;
      t.__d && (l = (r = (n = t).__v).__e, (_ = n.__P) && (o = [], (i = Ze({}, r)).__v = r.__v + 1, oc(_, r, i, n.__n, _.ownerSVGElement !== void 0, r.__h != null ? [l] : null, o, l ?? Do(r), r.__h), Hh(o, r), r.__e != l && Nh(r)));
    });
}
function Rh(e, t, n, o, i, r, l, _, a, h) {
  var s, d, u, c, f, y, p, m = o && o.__k || Ah, g = m.length;
  for (n.__k = [], s = 0; s < t.length; s++)
    if ((c = n.__k[s] = (c = t[s]) == null || typeof c == "boolean" ? null : typeof c == "string" || typeof c == "number" || typeof c == "bigint" ? _o(null, c, null, null, c) : Array.isArray(c) ? _o(mr, { children: c }, null, null, null) : c.__b > 0 ? _o(c.type, c.props, c.key, c.ref ? c.ref : null, c.__v) : c) != null) {
      if (c.__ = n, c.__b = n.__b + 1, (u = m[s]) === null || u && c.key == u.key && c.type === u.type)
        m[s] = void 0;
      else
        for (d = 0; d < g; d++) {
          if ((u = m[d]) && c.key == u.key && c.type === u.type) {
            m[d] = void 0;
            break;
          }
          u = null;
        }
      oc(e, c, u = u || ps, i, r, l, _, a, h), f = c.__e, (d = c.ref) && u.ref != d && (p || (p = []), u.ref && p.push(u.ref, null, c), p.push(d, c.__c || f, c)), f != null ? (y == null && (y = f), typeof c.type == "function" && c.__k === u.__k ? c.__d = a = Mh(c, a, e) : a = Dh(e, c, u, m, f, a), typeof n.type == "function" && (n.__d = a)) : a && u.__e == a && a.parentNode != e && (a = Do(u));
    }
  for (n.__e = y, s = g; s--; )
    m[s] != null && Ih(m[s], m[s]);
  if (p)
    for (s = 0; s < p.length; s++)
      Oh(p[s], p[++s], p[++s]);
}
function Mh(e, t, n) {
  for (var o, i = e.__k, r = 0; i && r < i.length; r++)
    (o = i[r]) && (o.__ = e, t = typeof o.type == "function" ? Mh(o, t, n) : Dh(n, o, o, i, o.__e, t));
  return t;
}
function Ph(e, t) {
  return t = t || [], e == null || typeof e == "boolean" || (Array.isArray(e) ? e.some(function(n) {
    Ph(n, t);
  }) : t.push(e)), t;
}
function Dh(e, t, n, o, i, r) {
  var l, _, a;
  if (t.__d !== void 0)
    l = t.__d, t.__d = void 0;
  else if (n == null || i != r || i.parentNode == null)
    e:
      if (r == null || r.parentNode !== e)
        e.appendChild(i), l = null;
      else {
        for (_ = r, a = 0; (_ = _.nextSibling) && a < o.length; a += 2)
          if (_ == i)
            break e;
        e.insertBefore(i, r), l = r;
      }
  return l !== void 0 ? l : i.nextSibling;
}
function Py(e, t, n, o, i) {
  var r;
  for (r in n)
    r === "children" || r === "key" || r in t || ys(e, r, null, n[r], o);
  for (r in t)
    i && typeof t[r] != "function" || r === "children" || r === "key" || r === "value" || r === "checked" || n[r] === t[r] || ys(e, r, t[r], n[r], o);
}
function I_(e, t, n) {
  t[0] === "-" ? e.setProperty(t, n) : e[t] = n == null ? "" : typeof n != "number" || Ry.test(t) ? n : n + "px";
}
function ys(e, t, n, o, i) {
  var r;
  e:
    if (t === "style")
      if (typeof n == "string")
        e.style.cssText = n;
      else {
        if (typeof o == "string" && (e.style.cssText = o = ""), o)
          for (t in o)
            n && t in n || I_(e.style, t, "");
        if (n)
          for (t in n)
            o && n[t] === o[t] || I_(e.style, t, n[t]);
      }
    else if (t[0] === "o" && t[1] === "n")
      r = t !== (t = t.replace(/Capture$/, "")), t = t.toLowerCase() in e ? t.toLowerCase().slice(2) : t.slice(2), e.l || (e.l = {}), e.l[t + r] = n, n ? o || e.addEventListener(t, r ? U_ : W_, r) : e.removeEventListener(t, r ? U_ : W_, r);
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
function W_(e) {
  this.l[e.type + !1](B.event ? B.event(e) : e);
}
function U_(e) {
  this.l[e.type + !0](B.event ? B.event(e) : e);
}
function oc(e, t, n, o, i, r, l, _, a) {
  var h, s, d, u, c, f, y, p, m, g, w, k, T, C, S, v = t.type;
  if (t.constructor !== void 0)
    return null;
  n.__h != null && (a = n.__h, _ = t.__e = n.__e, t.__h = null, r = [_]), (h = B.__b) && h(t);
  try {
    e:
      if (typeof v == "function") {
        if (p = t.props, m = (h = v.contextType) && o[h.__c], g = h ? m ? m.props.value : h.__ : o, n.__c ? y = (s = t.__c = n.__c).__ = s.__E : ("prototype" in v && v.prototype.render ? t.__c = s = new v(p, g) : (t.__c = s = new ao(p, g), s.constructor = v, s.render = Hy), m && m.sub(s), s.props = p, s.state || (s.state = {}), s.context = g, s.__n = o, d = s.__d = !0, s.__h = [], s._sb = []), s.__s == null && (s.__s = s.state), v.getDerivedStateFromProps != null && (s.__s == s.state && (s.__s = Ze({}, s.__s)), Ze(s.__s, v.getDerivedStateFromProps(p, s.__s))), u = s.props, c = s.state, d)
          v.getDerivedStateFromProps == null && s.componentWillMount != null && s.componentWillMount(), s.componentDidMount != null && s.__h.push(s.componentDidMount);
        else {
          if (v.getDerivedStateFromProps == null && p !== u && s.componentWillReceiveProps != null && s.componentWillReceiveProps(p, g), !s.__e && s.shouldComponentUpdate != null && s.shouldComponentUpdate(p, s.__s, g) === !1 || t.__v === n.__v) {
            for (s.props = p, s.state = s.__s, t.__v !== n.__v && (s.__d = !1), s.__v = t, t.__e = n.__e, t.__k = n.__k, t.__k.forEach(function($) {
              $ && ($.__ = t);
            }), w = 0; w < s._sb.length; w++)
              s.__h.push(s._sb[w]);
            s._sb = [], s.__h.length && l.push(s);
            break e;
          }
          s.componentWillUpdate != null && s.componentWillUpdate(p, s.__s, g), s.componentDidUpdate != null && s.__h.push(function() {
            s.componentDidUpdate(u, c, f);
          });
        }
        if (s.context = g, s.props = p, s.__v = t, s.__P = e, k = B.__r, T = 0, "prototype" in v && v.prototype.render) {
          for (s.state = s.__s, s.__d = !1, k && k(t), h = s.render(s.props, s.state, s.context), C = 0; C < s._sb.length; C++)
            s.__h.push(s._sb[C]);
          s._sb = [];
        } else
          do
            s.__d = !1, k && k(t), h = s.render(s.props, s.state, s.context), s.state = s.__s;
          while (s.__d && ++T < 25);
        s.state = s.__s, s.getChildContext != null && (o = Ze(Ze({}, o), s.getChildContext())), d || s.getSnapshotBeforeUpdate == null || (f = s.getSnapshotBeforeUpdate(u, c)), S = h != null && h.type === mr && h.key == null ? h.props.children : h, Rh(e, Array.isArray(S) ? S : [S], t, n, o, i, r, l, _, a), s.base = t.__e, t.__h = null, s.__h.length && l.push(s), y && (s.__E = s.__ = null), s.__e = !1;
      } else
        r == null && t.__v === n.__v ? (t.__k = n.__k, t.__e = n.__e) : t.__e = Dy(n.__e, t, n, o, i, r, l, a);
    (h = B.diffed) && h(t);
  } catch ($) {
    t.__v = null, (a || r != null) && (t.__e = _, t.__h = !!a, r[r.indexOf(_)] = null), B.__e($, t, n);
  }
}
function Hh(e, t) {
  B.__c && B.__c(t, e), e.some(function(n) {
    try {
      e = n.__h, n.__h = [], e.some(function(o) {
        o.call(n);
      });
    } catch (o) {
      B.__e(o, n.__v);
    }
  });
}
function Dy(e, t, n, o, i, r, l, _) {
  var a, h, s, d = n.props, u = t.props, c = t.type, f = 0;
  if (c === "svg" && (i = !0), r != null) {
    for (; f < r.length; f++)
      if ((a = r[f]) && "setAttribute" in a == !!c && (c ? a.localName === c : a.nodeType === 3)) {
        e = a, r[f] = null;
        break;
      }
  }
  if (e == null) {
    if (c === null)
      return document.createTextNode(u);
    e = i ? document.createElementNS("http://www.w3.org/2000/svg", c) : document.createElement(c, u.is && u), r = null, _ = !1;
  }
  if (c === null)
    d === u || _ && e.data === u || (e.data = u);
  else {
    if (r = r && pr.call(e.childNodes), h = (d = n.props || ps).dangerouslySetInnerHTML, s = u.dangerouslySetInnerHTML, !_) {
      if (r != null)
        for (d = {}, f = 0; f < e.attributes.length; f++)
          d[e.attributes[f].name] = e.attributes[f].value;
      (s || h) && (s && (h && s.__html == h.__html || s.__html === e.innerHTML) || (e.innerHTML = s && s.__html || ""));
    }
    if (Py(e, u, d, i, _), s)
      t.__k = [];
    else if (f = t.props.children, Rh(e, Array.isArray(f) ? f : [f], t, n, o, i && c !== "foreignObject", r, l, r ? r[0] : n.__k && Do(n, 0), _), r != null)
      for (f = r.length; f--; )
        r[f] != null && Lh(r[f]);
    _ || ("value" in u && (f = u.value) !== void 0 && (f !== e.value || c === "progress" && !f || c === "option" && f !== d.value) && ys(e, "value", f, d.value, !1), "checked" in u && (f = u.checked) !== void 0 && f !== e.checked && ys(e, "checked", f, d.checked, !1));
  }
  return e;
}
function Oh(e, t, n) {
  try {
    typeof e == "function" ? e(t) : e.current = t;
  } catch (o) {
    B.__e(o, n);
  }
}
function Ih(e, t, n) {
  var o, i;
  if (B.unmount && B.unmount(e), (o = e.ref) && (o.current && o.current !== e.__e || Oh(o, null, t)), (o = e.__c) != null) {
    if (o.componentWillUnmount)
      try {
        o.componentWillUnmount();
      } catch (r) {
        B.__e(r, t);
      }
    o.base = o.__P = null, e.__c = void 0;
  }
  if (o = e.__k)
    for (i = 0; i < o.length; i++)
      o[i] && Ih(o[i], t, n || typeof e.type != "function");
  n || e.__e == null || Lh(e.__e), e.__ = e.__e = e.__d = void 0;
}
function Hy(e, t, n) {
  return this.constructor(e, n);
}
function Wh(e, t, n) {
  var o, i, r;
  B.__ && B.__(e, t), i = (o = typeof n == "function") ? null : n && n.__k || t.__k, r = [], oc(t, e = (!o && n || t).__k = ms(mr, null, [e]), i || ps, ps, t.ownerSVGElement !== void 0, !o && n ? [n] : i ? null : t.firstChild ? pr.call(t.childNodes) : null, r, !o && n ? n : i ? i.__e : t.firstChild, o), Hh(r, e);
}
function Uh(e, t) {
  Wh(e, t, Uh);
}
function Oy(e, t, n) {
  var o, i, r, l = Ze({}, e.props);
  for (r in t)
    r == "key" ? o = t[r] : r == "ref" ? i = t[r] : l[r] = t[r];
  return arguments.length > 2 && (l.children = arguments.length > 3 ? pr.call(arguments, 2) : n), _o(e.type, l, o || e.key, i || e.ref, null);
}
function Iy(e, t) {
  var n = { __c: t = "__cC" + Th++, __: e, Consumer: function(o, i) {
    return o.children(i);
  }, Provider: function(o) {
    var i, r;
    return this.getChildContext || (i = [], (r = {})[t] = this, this.getChildContext = function() {
      return r;
    }, this.shouldComponentUpdate = function(l) {
      this.props.value !== l.value && i.some(vl);
    }, this.sub = function(l) {
      i.push(l);
      var _ = l.componentWillUnmount;
      l.componentWillUnmount = function() {
        i.splice(i.indexOf(l), 1), _ && _.call(l);
      };
    }), o.children;
  } };
  return n.Provider.__ = n.Consumer.contextType = n;
}
pr = Ah.slice, B = { __e: function(e, t, n, o) {
  for (var i, r, l; t = t.__; )
    if ((i = t.__c) && !i.__)
      try {
        if ((r = i.constructor) && r.getDerivedStateFromError != null && (i.setState(r.getDerivedStateFromError(e)), l = i.__d), i.componentDidCatch != null && (i.componentDidCatch(e, o || {}), l = i.__d), l)
          return i.__E = i;
      } catch (_) {
        e = _;
      }
  throw e;
} }, Ch = 0, Eh = function(e) {
  return e != null && e.constructor === void 0;
}, ao.prototype.setState = function(e, t) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = Ze({}, this.state), typeof e == "function" && (e = e(Ze({}, n), this.props)), e && Ze(n, e), e != null && this.__v && (t && this._sb.push(t), vl(this));
}, ao.prototype.forceUpdate = function(e) {
  this.__v && (this.__e = !0, e && this.__h.push(e), vl(this));
}, ao.prototype.render = mr, co = [], gs.__r = 0, Th = 0;
const Wy = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Component: ao,
  Fragment: mr,
  cloneElement: Oy,
  createContext: Iy,
  createElement: ms,
  createRef: My,
  h: ms,
  hydrate: Uh,
  get isValidElement() {
    return Eh;
  },
  get options() {
    return B;
  },
  render: Wh,
  toChildArray: Ph
}, Symbol.toStringTag, { value: "Module" }));
var Uy = Sh.bind(ms);
Object.assign(window, { htm: Sh, html: Uy, preact: Wy });
let Fy = (e = 21) => crypto.getRandomValues(new Uint8Array(e)).reduce((t, n) => (n &= 63, n < 36 ? t += n.toString(36) : n < 62 ? t += (n - 26).toString(36).toUpperCase() : n > 62 ? t += "-" : t += "_", t), "");
var Yo, lt, Re, hn, dn, Or;
const pc = class {
  /**
   * Create new store instance
   * @param name Name of store
   * @param type Store type
   */
  constructor(t, n = "local") {
    x(this, dn);
    x(this, Yo, void 0);
    x(this, lt, void 0);
    x(this, Re, void 0);
    x(this, hn, void 0);
    L(this, Yo, n), L(this, lt, `ZUI_STORE:${t ?? Fy()}`), L(this, Re, n === "local" ? localStorage : sessionStorage);
  }
  /**
   * Get store type
   */
  get type() {
    return b(this, Yo);
  }
  /**
   * Get session type store instance
   */
  get session() {
    return this.type === "session" ? this : (b(this, hn) || L(this, hn, new pc(b(this, lt), "session")), b(this, hn));
  }
  /**
   * Get value from store
   * @param key Key to get
   * @param defaultValue default value to return if key is not found
   * @returns Value of key or defaultValue if key is not found
   */
  get(t, n) {
    const o = b(this, Re).getItem(N(this, dn, Or).call(this, t));
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
    b(this, Re).setItem(N(this, dn, Or).call(this, t), JSON.stringify(n));
  }
  /**
   * Remove key-value pair from store
   * @param key Key to remove
   */
  remove(t) {
    b(this, Re).removeItem(N(this, dn, Or).call(this, t));
  }
  /**
   * Iterate all key-value pairs in store
   * @param callback Callback function to call for each key-value pair in the store
   */
  each(t) {
    for (let n = 0; n < b(this, Re).length; n++) {
      const o = b(this, Re).key(n);
      if (o != null && o.startsWith(b(this, lt))) {
        const i = b(this, Re).getItem(o);
        typeof i == "string" && t(o.substring(b(this, lt).length + 1), JSON.parse(i));
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
let vs = pc;
Yo = new WeakMap(), lt = new WeakMap(), Re = new WeakMap(), hn = new WeakMap(), dn = new WeakSet(), Or = function(t) {
  return `${b(this, lt)}:${t}`;
};
const jy = new vs("DEFAULT");
function By(e, t = "local") {
  return new vs(e, t);
}
Object.assign(jy, { create: By });
var Fh, Z, jh, uo, F_, Bh = {}, zh = [], zy = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function wt(e, t) {
  for (var n in t)
    e[n] = t[n];
  return e;
}
function Vh(e) {
  var t = e.parentNode;
  t && t.removeChild(e);
}
function el(e, t, n, o, i) {
  var r = { type: e, props: t, key: n, ref: o, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: i ?? ++jh };
  return i == null && Z.vnode != null && Z.vnode(r), r;
}
function rc(e) {
  return e.children;
}
function fo(e, t) {
  this.props = e, this.context = t;
}
function Ho(e, t) {
  if (t == null)
    return e.__ ? Ho(e.__, e.__.__k.indexOf(e) + 1) : null;
  for (var n; t < e.__k.length; t++)
    if ((n = e.__k[t]) != null && n.__e != null)
      return n.__e;
  return typeof e.type == "function" ? Ho(e) : null;
}
function qh(e) {
  var t, n;
  if ((e = e.__) != null && e.__c != null) {
    for (e.__e = e.__c.base = null, t = 0; t < e.__k.length; t++)
      if ((n = e.__k[t]) != null && n.__e != null) {
        e.__e = e.__c.base = n.__e;
        break;
      }
    return qh(e);
  }
}
function j_(e) {
  (!e.__d && (e.__d = !0) && uo.push(e) && !bs.__r++ || F_ !== Z.debounceRendering) && ((F_ = Z.debounceRendering) || setTimeout)(bs);
}
function bs() {
  for (var e; bs.__r = uo.length; )
    e = uo.sort(function(t, n) {
      return t.__v.__b - n.__v.__b;
    }), uo = [], e.some(function(t) {
      var n, o, i, r, l, _;
      t.__d && (l = (r = (n = t).__v).__e, (_ = n.__P) && (o = [], (i = wt({}, r)).__v = r.__v + 1, Xh(_, r, i, n.__n, _.ownerSVGElement !== void 0, r.__h != null ? [l] : null, o, l ?? Ho(r), r.__h), qy(o, r), r.__e != l && qh(r)));
    });
}
function Gh(e, t, n, o, i, r, l, _, a, h) {
  var s, d, u, c, f, y, p, m = o && o.__k || zh, g = m.length;
  for (n.__k = [], s = 0; s < t.length; s++)
    if ((c = n.__k[s] = (c = t[s]) == null || typeof c == "boolean" ? null : typeof c == "string" || typeof c == "number" || typeof c == "bigint" ? el(null, c, null, null, c) : Array.isArray(c) ? el(rc, { children: c }, null, null, null) : c.__b > 0 ? el(c.type, c.props, c.key, c.ref ? c.ref : null, c.__v) : c) != null) {
      if (c.__ = n, c.__b = n.__b + 1, (u = m[s]) === null || u && c.key == u.key && c.type === u.type)
        m[s] = void 0;
      else
        for (d = 0; d < g; d++) {
          if ((u = m[d]) && c.key == u.key && c.type === u.type) {
            m[d] = void 0;
            break;
          }
          u = null;
        }
      Xh(e, c, u = u || Bh, i, r, l, _, a, h), f = c.__e, (d = c.ref) && u.ref != d && (p || (p = []), u.ref && p.push(u.ref, null, c), p.push(d, c.__c || f, c)), f != null ? (y == null && (y = f), typeof c.type == "function" && c.__k === u.__k ? c.__d = a = Yh(c, a, e) : a = Kh(e, c, u, m, f, a), typeof n.type == "function" && (n.__d = a)) : a && u.__e == a && a.parentNode != e && (a = Ho(u));
    }
  for (n.__e = y, s = g; s--; )
    m[s] != null && Zh(m[s], m[s]);
  if (p)
    for (s = 0; s < p.length; s++)
      Jh(p[s], p[++s], p[++s]);
}
function Yh(e, t, n) {
  for (var o, i = e.__k, r = 0; i && r < i.length; r++)
    (o = i[r]) && (o.__ = e, t = typeof o.type == "function" ? Yh(o, t, n) : Kh(n, o, o, i, o.__e, t));
  return t;
}
function Kh(e, t, n, o, i, r) {
  var l, _, a;
  if (t.__d !== void 0)
    l = t.__d, t.__d = void 0;
  else if (n == null || i != r || i.parentNode == null)
    e:
      if (r == null || r.parentNode !== e)
        e.appendChild(i), l = null;
      else {
        for (_ = r, a = 0; (_ = _.nextSibling) && a < o.length; a += 2)
          if (_ == i)
            break e;
        e.insertBefore(i, r), l = r;
      }
  return l !== void 0 ? l : i.nextSibling;
}
function Vy(e, t, n, o, i) {
  var r;
  for (r in n)
    r === "children" || r === "key" || r in t || ws(e, r, null, n[r], o);
  for (r in t)
    i && typeof t[r] != "function" || r === "children" || r === "key" || r === "value" || r === "checked" || n[r] === t[r] || ws(e, r, t[r], n[r], o);
}
function B_(e, t, n) {
  t[0] === "-" ? e.setProperty(t, n) : e[t] = n == null ? "" : typeof n != "number" || zy.test(t) ? n : n + "px";
}
function ws(e, t, n, o, i) {
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
      r = t !== (t = t.replace(/Capture$/, "")), t = t.toLowerCase() in e ? t.toLowerCase().slice(2) : t.slice(2), e.l || (e.l = {}), e.l[t + r] = n, n ? o || e.addEventListener(t, r ? V_ : z_, r) : e.removeEventListener(t, r ? V_ : z_, r);
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
function z_(e) {
  this.l[e.type + !1](Z.event ? Z.event(e) : e);
}
function V_(e) {
  this.l[e.type + !0](Z.event ? Z.event(e) : e);
}
function Xh(e, t, n, o, i, r, l, _, a) {
  var h, s, d, u, c, f, y, p, m, g, w, k, T, C, S, v = t.type;
  if (t.constructor !== void 0)
    return null;
  n.__h != null && (a = n.__h, _ = t.__e = n.__e, t.__h = null, r = [_]), (h = Z.__b) && h(t);
  try {
    e:
      if (typeof v == "function") {
        if (p = t.props, m = (h = v.contextType) && o[h.__c], g = h ? m ? m.props.value : h.__ : o, n.__c ? y = (s = t.__c = n.__c).__ = s.__E : ("prototype" in v && v.prototype.render ? t.__c = s = new v(p, g) : (t.__c = s = new fo(p, g), s.constructor = v, s.render = Yy), m && m.sub(s), s.props = p, s.state || (s.state = {}), s.context = g, s.__n = o, d = s.__d = !0, s.__h = [], s._sb = []), s.__s == null && (s.__s = s.state), v.getDerivedStateFromProps != null && (s.__s == s.state && (s.__s = wt({}, s.__s)), wt(s.__s, v.getDerivedStateFromProps(p, s.__s))), u = s.props, c = s.state, d)
          v.getDerivedStateFromProps == null && s.componentWillMount != null && s.componentWillMount(), s.componentDidMount != null && s.__h.push(s.componentDidMount);
        else {
          if (v.getDerivedStateFromProps == null && p !== u && s.componentWillReceiveProps != null && s.componentWillReceiveProps(p, g), !s.__e && s.shouldComponentUpdate != null && s.shouldComponentUpdate(p, s.__s, g) === !1 || t.__v === n.__v) {
            for (s.props = p, s.state = s.__s, t.__v !== n.__v && (s.__d = !1), s.__v = t, t.__e = n.__e, t.__k = n.__k, t.__k.forEach(function($) {
              $ && ($.__ = t);
            }), w = 0; w < s._sb.length; w++)
              s.__h.push(s._sb[w]);
            s._sb = [], s.__h.length && l.push(s);
            break e;
          }
          s.componentWillUpdate != null && s.componentWillUpdate(p, s.__s, g), s.componentDidUpdate != null && s.__h.push(function() {
            s.componentDidUpdate(u, c, f);
          });
        }
        if (s.context = g, s.props = p, s.__v = t, s.__P = e, k = Z.__r, T = 0, "prototype" in v && v.prototype.render) {
          for (s.state = s.__s, s.__d = !1, k && k(t), h = s.render(s.props, s.state, s.context), C = 0; C < s._sb.length; C++)
            s.__h.push(s._sb[C]);
          s._sb = [];
        } else
          do
            s.__d = !1, k && k(t), h = s.render(s.props, s.state, s.context), s.state = s.__s;
          while (s.__d && ++T < 25);
        s.state = s.__s, s.getChildContext != null && (o = wt(wt({}, o), s.getChildContext())), d || s.getSnapshotBeforeUpdate == null || (f = s.getSnapshotBeforeUpdate(u, c)), S = h != null && h.type === rc && h.key == null ? h.props.children : h, Gh(e, Array.isArray(S) ? S : [S], t, n, o, i, r, l, _, a), s.base = t.__e, t.__h = null, s.__h.length && l.push(s), y && (s.__E = s.__ = null), s.__e = !1;
      } else
        r == null && t.__v === n.__v ? (t.__k = n.__k, t.__e = n.__e) : t.__e = Gy(n.__e, t, n, o, i, r, l, a);
    (h = Z.diffed) && h(t);
  } catch ($) {
    t.__v = null, (a || r != null) && (t.__e = _, t.__h = !!a, r[r.indexOf(_)] = null), Z.__e($, t, n);
  }
}
function qy(e, t) {
  Z.__c && Z.__c(t, e), e.some(function(n) {
    try {
      e = n.__h, n.__h = [], e.some(function(o) {
        o.call(n);
      });
    } catch (o) {
      Z.__e(o, n.__v);
    }
  });
}
function Gy(e, t, n, o, i, r, l, _) {
  var a, h, s, d = n.props, u = t.props, c = t.type, f = 0;
  if (c === "svg" && (i = !0), r != null) {
    for (; f < r.length; f++)
      if ((a = r[f]) && "setAttribute" in a == !!c && (c ? a.localName === c : a.nodeType === 3)) {
        e = a, r[f] = null;
        break;
      }
  }
  if (e == null) {
    if (c === null)
      return document.createTextNode(u);
    e = i ? document.createElementNS("http://www.w3.org/2000/svg", c) : document.createElement(c, u.is && u), r = null, _ = !1;
  }
  if (c === null)
    d === u || _ && e.data === u || (e.data = u);
  else {
    if (r = r && Fh.call(e.childNodes), h = (d = n.props || Bh).dangerouslySetInnerHTML, s = u.dangerouslySetInnerHTML, !_) {
      if (r != null)
        for (d = {}, f = 0; f < e.attributes.length; f++)
          d[e.attributes[f].name] = e.attributes[f].value;
      (s || h) && (s && (h && s.__html == h.__html || s.__html === e.innerHTML) || (e.innerHTML = s && s.__html || ""));
    }
    if (Vy(e, u, d, i, _), s)
      t.__k = [];
    else if (f = t.props.children, Gh(e, Array.isArray(f) ? f : [f], t, n, o, i && c !== "foreignObject", r, l, r ? r[0] : n.__k && Ho(n, 0), _), r != null)
      for (f = r.length; f--; )
        r[f] != null && Vh(r[f]);
    _ || ("value" in u && (f = u.value) !== void 0 && (f !== e.value || c === "progress" && !f || c === "option" && f !== d.value) && ws(e, "value", f, d.value, !1), "checked" in u && (f = u.checked) !== void 0 && f !== e.checked && ws(e, "checked", f, d.checked, !1));
  }
  return e;
}
function Jh(e, t, n) {
  try {
    typeof e == "function" ? e(t) : e.current = t;
  } catch (o) {
    Z.__e(o, n);
  }
}
function Zh(e, t, n) {
  var o, i;
  if (Z.unmount && Z.unmount(e), (o = e.ref) && (o.current && o.current !== e.__e || Jh(o, null, t)), (o = e.__c) != null) {
    if (o.componentWillUnmount)
      try {
        o.componentWillUnmount();
      } catch (r) {
        Z.__e(r, t);
      }
    o.base = o.__P = null, e.__c = void 0;
  }
  if (o = e.__k)
    for (i = 0; i < o.length; i++)
      o[i] && Zh(o[i], t, n || typeof e.type != "function");
  n || e.__e == null || Vh(e.__e), e.__ = e.__e = e.__d = void 0;
}
function Yy(e, t, n) {
  return this.constructor(e, n);
}
Fh = zh.slice, Z = { __e: function(e, t, n, o) {
  for (var i, r, l; t = t.__; )
    if ((i = t.__c) && !i.__)
      try {
        if ((r = i.constructor) && r.getDerivedStateFromError != null && (i.setState(r.getDerivedStateFromError(e)), l = i.__d), i.componentDidCatch != null && (i.componentDidCatch(e, o || {}), l = i.__d), l)
          return i.__E = i;
      } catch (_) {
        e = _;
      }
  throw e;
} }, jh = 0, fo.prototype.setState = function(e, t) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = wt({}, this.state), typeof e == "function" && (e = e(wt({}, n), this.props)), e && wt(n, e), e != null && this.__v && (t && this._sb.push(t), j_(this));
}, fo.prototype.forceUpdate = function(e) {
  this.__v && (this.__e = !0, e && this.__h.push(e), j_(this));
}, fo.prototype.render = rc, uo = [], bs.__r = 0;
var Ky = 0;
function tl(e, t, n, o, i) {
  var r, l, _ = {};
  for (l in t)
    l == "ref" ? r = t[l] : _[l] = t[l];
  var a = { type: e, props: _, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: --Ky, __source: i, __self: o };
  if (typeof e == "function" && (r = e.defaultProps))
    for (l in r)
      _[l] === void 0 && (_[l] = r[l]);
  return Z.vnode && Z.vnode(a), a;
}
function Xy(e) {
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
function Jy(e) {
  const [t, n, o] = typeof e == "string" ? Xy(e) : e;
  return t * 0.299 + n * 0.587 + o * 0.114 > 186;
}
function q_(e, t) {
  return Jy(e) ? (t == null ? void 0 : t.dark) ?? "#333333" : (t == null ? void 0 : t.light) ?? "#ffffff";
}
function G_(e, t = 255) {
  return Math.min(Math.max(e, 0), t);
}
function Zy(e, t, n) {
  e = e % 360 / 360, t = G_(t), n = G_(n);
  const o = n <= 0.5 ? n * (t + 1) : n + t - n * t, i = n * 2 - o, r = (l) => (l = l < 0 ? l + 1 : l > 1 ? l - 1 : l, l * 6 < 1 ? i + (o - i) * l * 6 : l * 2 < 1 ? o : l * 3 < 2 ? i + (o - i) * (2 / 3 - l) * 6 : i);
  return [
    r(e + 1 / 3) * 255,
    r(e) * 255,
    r(e - 1 / 3) * 255
  ];
}
function Qy(e) {
  let t = 0;
  if (typeof e != "string" && (e = String(e)), e && e.length)
    for (let n = 0; n < e.length; ++n)
      t += (n + 1) * e.charCodeAt(n);
  return t;
}
function ev(e, t) {
  return /^[\u4e00-\u9fa5\s]+$/.test(e) ? e = e.length <= t ? e : e.substring(e.length - t) : /^[A-Za-z\d\s]+$/.test(e) ? e = e[0].toUpperCase() : e = e.length <= t ? e : e.substring(0, t), e;
}
let tv = class extends fo {
  render() {
    const {
      className: t,
      style: n,
      size: o = "",
      circle: i,
      rounded: r,
      background: l,
      foreColor: _,
      text: a,
      code: h,
      maxTextLength: s = 2,
      src: d,
      hueDistance: u = 43,
      saturation: c = 0.4,
      lightness: f = 0.6,
      children: y,
      ...p
    } = this.props, m = ["avatar", t], g = { ...n, background: l, color: _ };
    let w = 32;
    o && (typeof o == "number" ? (g.width = `${o}px`, g.height = `${o}px`, g.fontSize = `${Math.max(12, Math.round(o / 2))}px`, w = o) : (m.push(`size-${o}`), w = { xs: 20, sm: 24, lg: 48, xl: 80 }[o])), i ? m.push("circle") : r && (typeof r == "number" ? g.borderRadius = `${r}px` : m.push(`rounded-${r}`));
    let k;
    if (d)
      m.push("has-img"), k = /* @__PURE__ */ tl("img", { className: "avatar-img", src: d, alt: a });
    else if (a != null && a.length) {
      const T = ev(a, s);
      if (m.push("has-text", `has-text-${T.length}`), l)
        !_ && l && (g.color = q_(l));
      else {
        const S = h ?? a, v = (typeof S == "number" ? S : Qy(S)) * u % 360;
        if (g.background = `hsl(${v},${c * 100}%,${f * 100}%)`, !_) {
          const $ = Zy(v, c, f);
          g.color = q_($);
        }
      }
      let C;
      w && w < 14 * T.length && (C = { transform: `scale(${w / (14 * T.length)})`, whiteSpace: "nowrap" }), k = /* @__PURE__ */ tl("div", { "data-actualSize": w, className: "avatar-text", style: C, children: T });
    }
    return /* @__PURE__ */ tl(
      "div",
      {
        className: M(m),
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
class Y_ extends ae {
}
E(Y_, "NAME", "avatar"), E(Y_, "Component", tv);
class K_ extends ae {
}
E(K_, "NAME", "btngroup"), E(K_, "Component", Zf);
function Qh(e, t, n) {
  if (n) {
    e.setAttribute("class", M(t));
    return;
  }
  Ei(e.getAttribute("class"), t).forEach(([o, i]) => {
    e.classList.toggle(o, i);
  });
}
function Wn(e, t, n) {
  if (typeof t == "object")
    return Object.entries(t).forEach(([o, i]) => {
      Wn(e, o, i);
    });
  n !== void 0 && (e.style[t] = typeof n == "number" ? `${n}px` : n);
}
function ks(e, t, n) {
  if (typeof t == "object")
    return Object.entries(t).forEach(([o, i]) => {
      ks(e, o, i);
    });
  n !== void 0 && (n === null ? e.removeAttribute(t) : e.setAttribute(t, n));
}
var Ft, Ko, ct, js, pn, Ir;
const me = class extends Qe {
  constructor() {
    super(...arguments);
    x(this, pn);
    x(this, Ft, 0);
    x(this, Ko, void 0);
    x(this, ct, void 0);
    x(this, js, (n) => {
      const o = n.target;
      (o.closest(me.DISMISS_SELECTOR) || this.options.backdrop === !0 && !o.closest(".modal-dialog") && o.closest(".modal")) && this.hide();
    });
  }
  get modalElement() {
    return this.element;
  }
  get isShown() {
    return this.modalElement.classList.contains(me.CLASS_SHOW);
  }
  get dialog() {
    return this.modalElement.querySelector(".modal-dialog");
  }
  afterInit() {
    if (this.on("click", b(this, js)), this.options.responsive && typeof ResizeObserver < "u") {
      const { dialog: n } = this;
      if (n) {
        const o = new ResizeObserver(() => {
          if (!this.isShown)
            return;
          const i = n.clientWidth, r = n.clientHeight;
          (!b(this, ct) || b(this, ct)[0] !== i || b(this, ct)[1] !== r) && (L(this, ct, [i, r]), this.layout());
        });
        o.observe(n), L(this, Ko, o);
      }
    }
    this.options.show && this.show();
  }
  destroy() {
    var n;
    super.destroy(), (n = b(this, Ko)) == null || n.disconnect();
  }
  show(n) {
    if (this.isShown)
      return !1;
    this.setOptions(n);
    const { modalElement: o } = this, { animation: i, backdrop: r, className: l, style: _ } = this.options;
    return Qh(o, [{
      "modal-trans": i,
      "modal-no-backdrop": !r
    }, me.CLASS_SHOW, l]), Wn(o, {
      zIndex: `${me.zIndex++}`,
      ..._
    }), this.layout(), this.emit("show", this), N(this, pn, Ir).call(this, () => {
      o.classList.add(me.CLASS_SHOWN), N(this, pn, Ir).call(this, () => {
        this.emit("shown", this);
      });
    }, 50), !0;
  }
  hide() {
    return this.isShown ? (this.modalElement.classList.remove(me.CLASS_SHOWN), this.emit("hide", this), N(this, pn, Ir).call(this, () => {
      this.modalElement.classList.remove(me.CLASS_SHOW), this.emit("hidden", this);
    }), !0) : !1;
  }
  layout(n, o) {
    if (!this.isShown)
      return;
    const { dialog: i } = this;
    if (!i)
      return;
    o = o ?? this.options.size, ks(i, "data-size", null);
    const r = { width: null, height: null };
    typeof o == "object" ? (r.width = o.width, r.height = o.height) : typeof o == "string" && ["md", "sm", "lg", "full"].includes(o) ? ks(i, "data-size", o) : o && (r.width = o), Wn(i, r), n = n ?? this.options.position ?? "fit";
    const l = i.clientWidth, _ = i.clientHeight;
    L(this, ct, [l, _]), typeof n == "function" && (n = n({ width: l, height: _ }));
    const a = {
      top: null,
      left: null,
      bottom: null,
      right: null,
      alignSelf: "center"
    };
    typeof n == "number" ? (a.alignSelf = "flex-start", a.top = n) : typeof n == "object" && n ? (a.alignSelf = "flex-start", Object.assign(a, n)) : n === "fit" ? (a.alignSelf = "flex-start", a.top = `${Math.max(0, Math.floor((window.innerHeight - _) / 3))}px`) : n === "bottom" ? a.alignSelf = "flex-end" : n === "top" ? a.alignSelf = "flex-start" : n !== "center" && typeof n == "string" && (a.alignSelf = "flex-start", a.top = n), Wn(i, a), Wn(this.modalElement, "justifyContent", a.left ? "flex-start" : "center");
  }
  static query(n) {
    if (n === void 0 ? n = document.querySelector(`.modal.${me.CLASS_SHOW}`) : typeof n == "string" && (n = document.querySelector(n)), !!n)
      return me.get(n);
  }
  static hide(n) {
    var o;
    (o = me.query(n)) == null || o.hide();
  }
  static show(n) {
    var o;
    (o = me.query(n)) == null || o.show();
  }
};
let fe = me;
Ft = new WeakMap(), Ko = new WeakMap(), ct = new WeakMap(), js = new WeakMap(), pn = new WeakSet(), Ir = function(n, o) {
  b(this, Ft) && (clearTimeout(b(this, Ft)), L(this, Ft, 0)), n && (this.options.animation ? L(this, Ft, window.setTimeout(n, o ?? this.options.transTime)) : n());
}, E(fe, "NAME", "Modal"), E(fe, "EVENTS", !0), E(fe, "DEFAULT", {
  position: "fit",
  show: !0,
  keyboard: !0,
  animation: !0,
  backdrop: !0,
  responsive: !0,
  transTime: 300
}), E(fe, "CLASS_SHOW", "show"), E(fe, "CLASS_SHOWN", "in"), E(fe, "DISMISS_SELECTOR", '[data-dismiss="modal"]'), E(fe, "zIndex", 2e3);
R(window).on("resize", () => {
  fe.all.forEach((e) => {
    const t = e;
    t.isShown && t.options.responsive && t.layout();
  });
});
R(document).on("zui.modal.hide", (e, t) => {
  fe.hide(t == null ? void 0 : t.target);
});
var Ii, j, ed, Un, ho, X_, $s = {}, td = [], nv = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function kt(e, t) {
  for (var n in t)
    e[n] = t[n];
  return e;
}
function nd(e) {
  var t = e.parentNode;
  t && t.removeChild(e);
}
function ov(e, t, n) {
  var o, i, r, l = {};
  for (r in t)
    r == "key" ? o = t[r] : r == "ref" ? i = t[r] : l[r] = t[r];
  if (arguments.length > 2 && (l.children = arguments.length > 3 ? Ii.call(arguments, 2) : n), typeof e == "function" && e.defaultProps != null)
    for (r in e.defaultProps)
      l[r] === void 0 && (l[r] = e.defaultProps[r]);
  return Wr(e, l, o, i, null);
}
function Wr(e, t, n, o, i) {
  var r = { type: e, props: t, key: n, ref: o, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: i ?? ++ed };
  return i == null && j.vnode != null && j.vnode(r), r;
}
function rv() {
  return { current: null };
}
function Wi(e) {
  return e.children;
}
function en(e, t) {
  this.props = e, this.context = t;
}
function Oo(e, t) {
  if (t == null)
    return e.__ ? Oo(e.__, e.__.__k.indexOf(e) + 1) : null;
  for (var n; t < e.__k.length; t++)
    if ((n = e.__k[t]) != null && n.__e != null)
      return n.__e;
  return typeof e.type == "function" ? Oo(e) : null;
}
function od(e) {
  var t, n;
  if ((e = e.__) != null && e.__c != null) {
    for (e.__e = e.__c.base = null, t = 0; t < e.__k.length; t++)
      if ((n = e.__k[t]) != null && n.__e != null) {
        e.__e = e.__c.base = n.__e;
        break;
      }
    return od(e);
  }
}
function J_(e) {
  (!e.__d && (e.__d = !0) && ho.push(e) && !xs.__r++ || X_ !== j.debounceRendering) && ((X_ = j.debounceRendering) || setTimeout)(xs);
}
function xs() {
  for (var e; xs.__r = ho.length; )
    e = ho.sort(function(t, n) {
      return t.__v.__b - n.__v.__b;
    }), ho = [], e.some(function(t) {
      var n, o, i, r, l, _;
      t.__d && (l = (r = (n = t).__v).__e, (_ = n.__P) && (o = [], (i = kt({}, r)).__v = r.__v + 1, sc(_, r, i, n.__n, _.ownerSVGElement !== void 0, r.__h != null ? [l] : null, o, l ?? Oo(r), r.__h), ld(o, r), r.__e != l && od(r)));
    });
}
function rd(e, t, n, o, i, r, l, _, a, h) {
  var s, d, u, c, f, y, p, m = o && o.__k || td, g = m.length;
  for (n.__k = [], s = 0; s < t.length; s++)
    if ((c = n.__k[s] = (c = t[s]) == null || typeof c == "boolean" ? null : typeof c == "string" || typeof c == "number" || typeof c == "bigint" ? Wr(null, c, null, null, c) : Array.isArray(c) ? Wr(Wi, { children: c }, null, null, null) : c.__b > 0 ? Wr(c.type, c.props, c.key, c.ref ? c.ref : null, c.__v) : c) != null) {
      if (c.__ = n, c.__b = n.__b + 1, (u = m[s]) === null || u && c.key == u.key && c.type === u.type)
        m[s] = void 0;
      else
        for (d = 0; d < g; d++) {
          if ((u = m[d]) && c.key == u.key && c.type === u.type) {
            m[d] = void 0;
            break;
          }
          u = null;
        }
      sc(e, c, u = u || $s, i, r, l, _, a, h), f = c.__e, (d = c.ref) && u.ref != d && (p || (p = []), u.ref && p.push(u.ref, null, c), p.push(d, c.__c || f, c)), f != null ? (y == null && (y = f), typeof c.type == "function" && c.__k === u.__k ? c.__d = a = sd(c, a, e) : a = id(e, c, u, m, f, a), typeof n.type == "function" && (n.__d = a)) : a && u.__e == a && a.parentNode != e && (a = Oo(u));
    }
  for (n.__e = y, s = g; s--; )
    m[s] != null && _d(m[s], m[s]);
  if (p)
    for (s = 0; s < p.length; s++)
      cd(p[s], p[++s], p[++s]);
}
function sd(e, t, n) {
  for (var o, i = e.__k, r = 0; i && r < i.length; r++)
    (o = i[r]) && (o.__ = e, t = typeof o.type == "function" ? sd(o, t, n) : id(n, o, o, i, o.__e, t));
  return t;
}
function id(e, t, n, o, i, r) {
  var l, _, a;
  if (t.__d !== void 0)
    l = t.__d, t.__d = void 0;
  else if (n == null || i != r || i.parentNode == null)
    e:
      if (r == null || r.parentNode !== e)
        e.appendChild(i), l = null;
      else {
        for (_ = r, a = 0; (_ = _.nextSibling) && a < o.length; a += 2)
          if (_ == i)
            break e;
        e.insertBefore(i, r), l = r;
      }
  return l !== void 0 ? l : i.nextSibling;
}
function sv(e, t, n, o, i) {
  var r;
  for (r in n)
    r === "children" || r === "key" || r in t || Ss(e, r, null, n[r], o);
  for (r in t)
    i && typeof t[r] != "function" || r === "children" || r === "key" || r === "value" || r === "checked" || n[r] === t[r] || Ss(e, r, t[r], n[r], o);
}
function Z_(e, t, n) {
  t[0] === "-" ? e.setProperty(t, n) : e[t] = n == null ? "" : typeof n != "number" || nv.test(t) ? n : n + "px";
}
function Ss(e, t, n, o, i) {
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
      r = t !== (t = t.replace(/Capture$/, "")), t = t.toLowerCase() in e ? t.toLowerCase().slice(2) : t.slice(2), e.l || (e.l = {}), e.l[t + r] = n, n ? o || e.addEventListener(t, r ? ea : Q_, r) : e.removeEventListener(t, r ? ea : Q_, r);
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
  this.l[e.type + !1](j.event ? j.event(e) : e);
}
function ea(e) {
  this.l[e.type + !0](j.event ? j.event(e) : e);
}
function sc(e, t, n, o, i, r, l, _, a) {
  var h, s, d, u, c, f, y, p, m, g, w, k, T, C, S, v = t.type;
  if (t.constructor !== void 0)
    return null;
  n.__h != null && (a = n.__h, _ = t.__e = n.__e, t.__h = null, r = [_]), (h = j.__b) && h(t);
  try {
    e:
      if (typeof v == "function") {
        if (p = t.props, m = (h = v.contextType) && o[h.__c], g = h ? m ? m.props.value : h.__ : o, n.__c ? y = (s = t.__c = n.__c).__ = s.__E : ("prototype" in v && v.prototype.render ? t.__c = s = new v(p, g) : (t.__c = s = new en(p, g), s.constructor = v, s.render = lv), m && m.sub(s), s.props = p, s.state || (s.state = {}), s.context = g, s.__n = o, d = s.__d = !0, s.__h = [], s._sb = []), s.__s == null && (s.__s = s.state), v.getDerivedStateFromProps != null && (s.__s == s.state && (s.__s = kt({}, s.__s)), kt(s.__s, v.getDerivedStateFromProps(p, s.__s))), u = s.props, c = s.state, d)
          v.getDerivedStateFromProps == null && s.componentWillMount != null && s.componentWillMount(), s.componentDidMount != null && s.__h.push(s.componentDidMount);
        else {
          if (v.getDerivedStateFromProps == null && p !== u && s.componentWillReceiveProps != null && s.componentWillReceiveProps(p, g), !s.__e && s.shouldComponentUpdate != null && s.shouldComponentUpdate(p, s.__s, g) === !1 || t.__v === n.__v) {
            for (s.props = p, s.state = s.__s, t.__v !== n.__v && (s.__d = !1), s.__v = t, t.__e = n.__e, t.__k = n.__k, t.__k.forEach(function($) {
              $ && ($.__ = t);
            }), w = 0; w < s._sb.length; w++)
              s.__h.push(s._sb[w]);
            s._sb = [], s.__h.length && l.push(s);
            break e;
          }
          s.componentWillUpdate != null && s.componentWillUpdate(p, s.__s, g), s.componentDidUpdate != null && s.__h.push(function() {
            s.componentDidUpdate(u, c, f);
          });
        }
        if (s.context = g, s.props = p, s.__v = t, s.__P = e, k = j.__r, T = 0, "prototype" in v && v.prototype.render) {
          for (s.state = s.__s, s.__d = !1, k && k(t), h = s.render(s.props, s.state, s.context), C = 0; C < s._sb.length; C++)
            s.__h.push(s._sb[C]);
          s._sb = [];
        } else
          do
            s.__d = !1, k && k(t), h = s.render(s.props, s.state, s.context), s.state = s.__s;
          while (s.__d && ++T < 25);
        s.state = s.__s, s.getChildContext != null && (o = kt(kt({}, o), s.getChildContext())), d || s.getSnapshotBeforeUpdate == null || (f = s.getSnapshotBeforeUpdate(u, c)), S = h != null && h.type === Wi && h.key == null ? h.props.children : h, rd(e, Array.isArray(S) ? S : [S], t, n, o, i, r, l, _, a), s.base = t.__e, t.__h = null, s.__h.length && l.push(s), y && (s.__E = s.__ = null), s.__e = !1;
      } else
        r == null && t.__v === n.__v ? (t.__k = n.__k, t.__e = n.__e) : t.__e = iv(n.__e, t, n, o, i, r, l, a);
    (h = j.diffed) && h(t);
  } catch ($) {
    t.__v = null, (a || r != null) && (t.__e = _, t.__h = !!a, r[r.indexOf(_)] = null), j.__e($, t, n);
  }
}
function ld(e, t) {
  j.__c && j.__c(t, e), e.some(function(n) {
    try {
      e = n.__h, n.__h = [], e.some(function(o) {
        o.call(n);
      });
    } catch (o) {
      j.__e(o, n.__v);
    }
  });
}
function iv(e, t, n, o, i, r, l, _) {
  var a, h, s, d = n.props, u = t.props, c = t.type, f = 0;
  if (c === "svg" && (i = !0), r != null) {
    for (; f < r.length; f++)
      if ((a = r[f]) && "setAttribute" in a == !!c && (c ? a.localName === c : a.nodeType === 3)) {
        e = a, r[f] = null;
        break;
      }
  }
  if (e == null) {
    if (c === null)
      return document.createTextNode(u);
    e = i ? document.createElementNS("http://www.w3.org/2000/svg", c) : document.createElement(c, u.is && u), r = null, _ = !1;
  }
  if (c === null)
    d === u || _ && e.data === u || (e.data = u);
  else {
    if (r = r && Ii.call(e.childNodes), h = (d = n.props || $s).dangerouslySetInnerHTML, s = u.dangerouslySetInnerHTML, !_) {
      if (r != null)
        for (d = {}, f = 0; f < e.attributes.length; f++)
          d[e.attributes[f].name] = e.attributes[f].value;
      (s || h) && (s && (h && s.__html == h.__html || s.__html === e.innerHTML) || (e.innerHTML = s && s.__html || ""));
    }
    if (sv(e, u, d, i, _), s)
      t.__k = [];
    else if (f = t.props.children, rd(e, Array.isArray(f) ? f : [f], t, n, o, i && c !== "foreignObject", r, l, r ? r[0] : n.__k && Oo(n, 0), _), r != null)
      for (f = r.length; f--; )
        r[f] != null && nd(r[f]);
    _ || ("value" in u && (f = u.value) !== void 0 && (f !== e.value || c === "progress" && !f || c === "option" && f !== d.value) && Ss(e, "value", f, d.value, !1), "checked" in u && (f = u.checked) !== void 0 && f !== e.checked && Ss(e, "checked", f, d.checked, !1));
  }
  return e;
}
function cd(e, t, n) {
  try {
    typeof e == "function" ? e(t) : e.current = t;
  } catch (o) {
    j.__e(o, n);
  }
}
function _d(e, t, n) {
  var o, i;
  if (j.unmount && j.unmount(e), (o = e.ref) && (o.current && o.current !== e.__e || cd(o, null, t)), (o = e.__c) != null) {
    if (o.componentWillUnmount)
      try {
        o.componentWillUnmount();
      } catch (r) {
        j.__e(r, t);
      }
    o.base = o.__P = null, e.__c = void 0;
  }
  if (o = e.__k)
    for (i = 0; i < o.length; i++)
      o[i] && _d(o[i], t, n || typeof e.type != "function");
  n || e.__e == null || nd(e.__e), e.__ = e.__e = e.__d = void 0;
}
function lv(e, t, n) {
  return this.constructor(e, n);
}
function cv(e, t, n) {
  var o, i, r;
  j.__ && j.__(e, t), i = (o = typeof n == "function") ? null : n && n.__k || t.__k, r = [], sc(t, e = (!o && n || t).__k = ov(Wi, null, [e]), i || $s, $s, t.ownerSVGElement !== void 0, !o && n ? [n] : i ? null : t.firstChild ? Ii.call(t.childNodes) : null, r, !o && n ? n : i ? i.__e : t.firstChild, o), ld(r, e);
}
Ii = td.slice, j = { __e: function(e, t, n, o) {
  for (var i, r, l; t = t.__; )
    if ((i = t.__c) && !i.__)
      try {
        if ((r = i.constructor) && r.getDerivedStateFromError != null && (i.setState(r.getDerivedStateFromError(e)), l = i.__d), i.componentDidCatch != null && (i.componentDidCatch(e, o || {}), l = i.__d), l)
          return i.__E = i;
      } catch (_) {
        e = _;
      }
  throw e;
} }, ed = 0, Un = function(e) {
  return e != null && e.constructor === void 0;
}, en.prototype.setState = function(e, t) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = kt({}, this.state), typeof e == "function" && (e = e(kt({}, n), this.props)), e && kt(n, e), e != null && this.__v && (t && this._sb.push(t), J_(this));
}, en.prototype.forceUpdate = function(e) {
  this.__v && (this.__e = !0, e && this.__h.push(e), J_(this));
}, en.prototype.render = Wi, ho = [], xs.__r = 0;
var _v = 0;
function se(e, t, n, o, i) {
  var r, l, _ = {};
  for (l in t)
    l == "ref" ? r = t[l] : _[l] = t[l];
  var a = { type: e, props: _, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: --_v, __source: i, __self: o };
  if (typeof e == "function" && (r = e.defaultProps))
    for (l in r)
      _[l] === void 0 && (_[l] = r[l]);
  return j.vnode && j.vnode(a), a;
}
let av = (e = 21) => crypto.getRandomValues(new Uint8Array(e)).reduce((t, n) => (n &= 63, n < 36 ? t += n.toString(36) : n < 62 ? t += (n - 26).toString(36).toUpperCase() : n > 62 ? t += "-" : t += "_", t), "");
class ad extends en {
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
    return Un(t) ? t : t === !1 || !n ? null : /* @__PURE__ */ se("div", { className: "modal-header", children: /* @__PURE__ */ se("div", { className: "modal-title", children: n }) });
  }
  renderActions() {
    const {
      actions: t,
      closeBtn: n
    } = this.props;
    return !n && !t ? null : Un(t) ? t : /* @__PURE__ */ se("div", { className: "modal-actions", children: [
      t ? /* @__PURE__ */ se(An, { ...t }) : null,
      n ? /* @__PURE__ */ se("button", { type: "button", class: "btn square ghost", "data-dismiss": "modal", children: /* @__PURE__ */ se("span", { class: "close" }) }) : null
    ] });
  }
  renderBody() {
    const {
      body: t
    } = this.props;
    return t ? Un(t) ? t : /* @__PURE__ */ se("div", { className: "modal-body", children: t }) : null;
  }
  renderFooter() {
    const {
      footer: t,
      footerActions: n
    } = this.props;
    return Un(t) ? t : t === !1 || !n ? null : /* @__PURE__ */ se("div", { className: "modal-footer", children: n ? /* @__PURE__ */ se(An, { ...n }) : null });
  }
  render() {
    const {
      className: t,
      style: n,
      children: o
    } = this.props;
    return /* @__PURE__ */ se("div", { className: M("modal-dialog", t), style: n, children: /* @__PURE__ */ se("div", { className: "modal-content", children: [
      this.renderHeader(),
      this.renderActions(),
      this.renderBody(),
      o,
      this.renderFooter()
    ] }) });
  }
}
E(ad, "defaultProps", { closeBtn: !0 });
var Xo, mn, Jo;
class uv extends en {
  constructor() {
    super(...arguments);
    x(this, Xo, rv());
    x(this, mn, void 0);
    E(this, "state", {});
    x(this, Jo, () => {
      var i, r;
      const n = (r = (i = b(this, Xo).current) == null ? void 0 : i.contentWindow) == null ? void 0 : r.document;
      if (!n)
        return;
      let o = b(this, mn);
      o == null || o.disconnect(), o = new ResizeObserver(() => {
        const l = n.body, _ = n.documentElement, a = Math.ceil(Math.max(l.scrollHeight, l.offsetHeight, _.offsetHeight));
        this.setState({ height: a });
      }), o.observe(n.body), o.observe(n.documentElement), L(this, mn, o);
    });
  }
  componentDidMount() {
    b(this, Jo).call(this);
  }
  componentWillUnmount() {
    var n;
    (n = b(this, mn)) == null || n.disconnect();
  }
  render() {
    const { url: n } = this.props;
    return /* @__PURE__ */ se(
      "iframe",
      {
        className: "modal-iframe",
        style: this.state,
        src: n,
        ref: b(this, Xo),
        onLoad: b(this, Jo)
      }
    );
  }
}
Xo = new WeakMap(), mn = new WeakMap(), Jo = new WeakMap();
function fv(e, t) {
  const { custom: n, title: o, content: i } = t;
  return {
    body: i,
    title: o,
    ...typeof n == "function" ? n() : n
  };
}
async function hv(e, t) {
  const { dataType: n, url: o, request: i, custom: r, title: l } = t, a = await (await fetch(o, i)).text();
  if (n !== "html")
    try {
      const h = JSON.parse(a);
      return {
        title: l,
        ...r,
        ...h
      };
    } catch {
    }
  return t.replace !== !1 && n === "html" ? [a] : {
    title: l,
    ...r,
    body: n === "html" ? /* @__PURE__ */ se("div", { className: "modal-body", dangerouslySetInnerHTML: { __html: a } }) : a
  };
}
async function dv(e, t) {
  const { url: n, custom: o, title: i } = t;
  return {
    title: i,
    ...o,
    body: /* @__PURE__ */ se(uv, { url: n })
  };
}
const pv = {
  custom: fv,
  ajax: hv,
  iframe: dv
};
var Zo, Qo, Me, gn, Ur, Bs, ud, er, bl;
const $o = class extends fe {
  constructor() {
    super(...arguments);
    x(this, gn);
    x(this, Bs);
    x(this, er);
    x(this, Zo, void 0);
    x(this, Qo, void 0);
    x(this, Me, void 0);
  }
  get id() {
    return b(this, Qo);
  }
  get loading() {
    return this.modalElement.classList.contains($o.LOADING_CLASS);
  }
  get modalElement() {
    let n = b(this, Zo);
    if (!n) {
      const { id: o } = this;
      n = this.element.querySelector(`#${o}`), n || (n = document.createElement("div"), ks(n, {
        id: o,
        style: this.options.style
      }), Qh(n, ["modal modal-async", this.options.className]), this.element.appendChild(n)), L(this, Zo, n);
    }
    return n;
  }
  afterInit() {
    super.afterInit(), L(this, Qo, this.options.id || `modal-${av()}`);
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
    b(this, Me) && clearTimeout(b(this, Me));
    const { modalElement: n, options: o } = this, { type: i, loadTimeout: r } = o, l = pv[i];
    if (!l)
      return console.warn(`Modal: Cannot build modal with type "${i}"`), !1;
    n.classList.add($o.LOADING_CLASS), await N(this, Bs, ud).call(this), r && L(this, Me, window.setTimeout(() => {
      L(this, Me, 0), N(this, er, bl).call(this, this.options.timeoutTip);
    }, r));
    const _ = await l(n, o);
    return _ === !1 ? await N(this, er, bl).call(this, this.options.failedTip) : _ && typeof _ == "object" && await N(this, gn, Ur).call(this, _), b(this, Me) && (clearTimeout(b(this, Me)), L(this, Me, 0)), n.classList.remove($o.LOADING_CLASS), !0;
  }
};
let Fn = $o;
Zo = new WeakMap(), Qo = new WeakMap(), Me = new WeakMap(), gn = new WeakSet(), Ur = function(n) {
  return new Promise((o) => {
    if (Array.isArray(n))
      return this.modalElement.innerHTML = n[0], o();
    const { afterRender: i, ...r } = n;
    n = {
      afterRender: (l) => {
        this.layout(), i == null || i(l), o();
      },
      ...r
    }, cv(
      /* @__PURE__ */ se(ad, { ...n }),
      this.modalElement
    );
  });
}, Bs = new WeakSet(), ud = function() {
  const { loadingText: n } = this.options;
  return N(this, gn, Ur).call(this, {
    body: /* @__PURE__ */ se("div", { className: "modal-loading-indicator", children: [
      /* @__PURE__ */ se("span", { className: "spinner" }),
      n ? /* @__PURE__ */ se("span", { className: "modal-loading-text", children: n }) : null
    ] })
  });
}, er = new WeakSet(), bl = function(n) {
  if (n)
    return N(this, gn, Ur).call(this, {
      body: /* @__PURE__ */ se("div", { className: "modal-load-failed", children: n })
    });
}, E(Fn, "LOADING_CLASS", "loading"), E(Fn, "DEFAULT", {
  ...fe.DEFAULT,
  loadTimeout: 1e4
});
var _t, zs, fd, Vs, hd, qs, dd;
class po extends Qe {
  constructor() {
    super(...arguments);
    x(this, zs);
    x(this, Vs);
    x(this, qs);
    x(this, _t, void 0);
  }
  get modal() {
    return b(this, _t);
  }
  get container() {
    const { container: n } = this.options;
    return typeof n == "string" ? document.querySelector(n) : n instanceof HTMLElement ? n : document.body;
  }
  show() {
    return N(this, Vs, hd).call(this).show();
  }
  hide() {
    var n;
    (n = b(this, _t)) == null || n.hide();
  }
}
_t = new WeakMap(), zs = new WeakSet(), fd = function() {
  const {
    container: n,
    ...o
  } = this.options, i = o, r = this.element.getAttribute("href") || "";
  return i.type || (i.target || r[0] === "#" ? i.type = "static" : i.type = i.type || (i.url ? "iframe" : "custom")), !i.url && (i.type === "iframe" || i.type === "ajax") && r[0] !== "#" && (i.url = r), i;
}, Vs = new WeakSet(), hd = function() {
  const n = N(this, zs, fd).call(this);
  let o = b(this, _t);
  return o ? o.setOptions(n) : n.type === "static" ? (o = new fe(N(this, qs, dd).call(this), n), L(this, _t, o)) : (o = new Fn(this.container, n), L(this, _t, o)), o;
}, qs = new WeakSet(), dd = function() {
  let n = this.options.target;
  if (!n) {
    const { element: o } = this;
    if (o.tagName === "A") {
      const i = o.getAttribute("href");
      i != null && i.startsWith("#") && (n = i);
    }
  }
  return this.container.querySelector(n || ".modal");
}, E(po, "NAME", "ModalTrigger"), E(po, "EVENTS", !0), E(po, "TOGGLE_SELECTOR", '[data-toggle="modal"]');
window.addEventListener("click", (e) => {
  var o;
  const t = e.target, n = (o = t.closest) == null ? void 0 : o.call(t, po.TOGGLE_SELECTOR);
  if (n) {
    const i = po.ensure(n);
    i && i.show();
  }
});
var cl;
let mv = (cl = class extends Ti {
  beforeRender() {
    const t = super.beforeRender();
    return t.className = M(t.className, t.type ? `nav-${t.type}` : "", {
      "nav-stacked": t.stacked
    }), t;
  }
}, E(cl, "NAME", "nav"), cl);
class ta extends ae {
}
E(ta, "NAME", "nav"), E(ta, "Component", mv);
var wl;
wl = { __e: function(e, t, n, o) {
  for (var i, r, l; t = t.__; )
    if ((i = t.__c) && !i.__)
      try {
        if ((r = i.constructor) && r.getDerivedStateFromError != null && (i.setState(r.getDerivedStateFromError(e)), l = i.__d), i.componentDidCatch != null && (i.componentDidCatch(e, o || {}), l = i.__d), l)
          return i.__E = i;
      } catch (_) {
        e = _;
      }
  throw e;
} };
var gv = 0;
function Et(e, t, n, o, i) {
  var r, l, _ = {};
  for (l in t)
    l == "ref" ? r = t[l] : _[l] = t[l];
  var a = { type: e, props: _, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: --gv, __source: i, __self: o };
  if (typeof e == "function" && (r = e.defaultProps))
    for (l in r)
      _[l] === void 0 && (_[l] = r[l]);
  return wl.vnode && wl.vnode(a), a;
}
function Io(e, t) {
  const n = e.pageTotal || Math.ceil(e.recTotal / e.recPerPage);
  return typeof t == "string" && (t === "first" ? t = 1 : t === "last" ? t = n : t === "prev" ? t = e.page - 1 : t === "next" ? t = e.page + 1 : t === "current" ? t = e.page : t = Number.parseInt(t, 10)), t = t !== void 0 ? Math.max(1, Math.min(t < 0 ? n + t : t, n)) : e.page, {
    ...e,
    pageTotal: n,
    page: t
  };
}
function yv({
  key: e,
  type: t,
  btnType: n,
  page: o,
  format: i,
  pagerInfo: r,
  linkCreator: l,
  ..._
}) {
  const a = Io(r, o);
  return _.text === void 0 && !_.icon && i && (_.text = typeof i == "function" ? i(a) : ye(i, a)), _.url === void 0 && l && (_.url = typeof l == "function" ? l(a) : ye(l, a)), _.disabled === void 0 && (_.disabled = o !== void 0 && a.page === r.page), /* @__PURE__ */ Et(We, { type: n, ..._ });
}
const Ve = 24 * 60 * 60 * 1e3, be = (e) => e ? (e instanceof Date || (typeof e == "string" && (e = e.trim(), /^\d+$/.test(e) && (e = Number.parseInt(e, 10))), typeof e == "number" && e < 1e10 && (e *= 1e3), e = new Date(e)), e) : /* @__PURE__ */ new Date(), gr = (e, t = /* @__PURE__ */ new Date()) => (e = be(e), t = be(t), e.getFullYear() === t.getFullYear() && e.getMonth() === t.getMonth() && e.getDate() === t.getDate()), na = (e, t = /* @__PURE__ */ new Date()) => be(e).getFullYear() === be(t).getFullYear(), vv = (e, t = /* @__PURE__ */ new Date()) => (e = be(e), t = be(t), e.getFullYear() === t.getFullYear() && e.getMonth() === t.getMonth()), Xb = (e, t = /* @__PURE__ */ new Date()) => {
  e = be(e), t = be(t);
  const n = 1e3 * 60 * 60 * 24, o = Math.floor(e.getTime() / n), i = Math.floor(t.getTime() / n);
  return Math.floor((o + 4) / 7) === Math.floor((i + 4) / 7);
}, Jb = (e, t) => gr(be(t), e), Zb = (e, t) => gr(be(t).getTime() - Ve, e), Qb = (e, t) => gr(be(t).getTime() + Ve, e), e0 = (e, t) => gr(be(t).getTime() - 2 * Ve, e), kl = (e, t = "yyyy-MM-dd hh:mm") => {
  e = be(e);
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
}, t0 = (e, t, n) => {
  const o = {
    full: "yyyy-M-d",
    month: "M-d",
    day: "d",
    str: "{0} ~ {1}",
    ...n
  }, i = kl(e, na(e) ? o.month : o.full);
  if (gr(e, t))
    return i;
  const r = kl(t, na(e, t) ? vv(e, t) ? o.day : o.month : o.full);
  return o.str.replace("{0}", i).replace("{1}", r);
}, n0 = (e) => {
  const t = (/* @__PURE__ */ new Date()).getTime();
  switch (e) {
    case "oneWeek":
      return t - Ve * 7;
    case "oneMonth":
      return t - Ve * 31;
    case "threeMonth":
      return t - Ve * 31 * 3;
    case "halfYear":
      return t - Ve * 183;
    case "oneYear":
      return t - Ve * 365;
    case "twoYear":
      return t - 2 * (Ve * 365);
    default:
      return 0;
  }
}, oa = (e, t, n = !0, o = Date.now()) => {
  switch (t) {
    case "year":
      return e *= 365, oa(e, "day", n, o);
    case "quarter":
      e *= 3;
      break;
    case "month":
      return e *= 30, oa(e, "day", n, o);
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
function bv({
  key: e,
  type: t,
  page: n,
  text: o = "",
  pagerInfo: i,
  children: r,
  ...l
}) {
  const _ = Io(i, n);
  return o = typeof o == "function" ? o(_) : ye(o, _), /* @__PURE__ */ Et(lu, { ...l, children: [
    r,
    o
  ] });
}
function wv({
  key: e,
  type: t,
  btnType: n,
  count: o = 12,
  pagerInfo: i,
  onClick: r,
  linkCreator: l,
  ..._
}) {
  if (!i.pageTotal)
    return;
  const a = { ..._, square: !0 }, h = () => (a.text = "", a.icon = "icon-ellipsis-h", a.disabled = !0, /* @__PURE__ */ Et(We, { type: n, ...a })), s = (u, c) => {
    const f = [];
    for (let y = u; y <= c; y++) {
      a.text = y, delete a.icon, a.disabled = !1;
      const p = Io(i, y);
      l && (a.url = typeof l == "function" ? l(p) : ye(l, p)), f.push(/* @__PURE__ */ Et(We, { type: n, ...a, onClick: r }));
    }
    return f;
  };
  let d = [];
  return d = [...s(1, 1)], i.pageTotal <= 1 || (i.pageTotal <= o ? d = [...d, ...s(2, i.pageTotal)] : i.page < o - 2 ? d = [...d, ...s(2, o - 2), h(), ...s(i.pageTotal, i.pageTotal)] : i.page > i.pageTotal - o + 3 ? d = [...d, h(), ...s(i.pageTotal - o + 3, i.pageTotal)] : d = [...d, h(), ...s(i.page - Math.ceil((o - 4) / 2), i.page + Math.floor((o - 4) / 2)), h(), ...s(i.pageTotal, i.pageTotal)]), d;
}
function kv({
  type: e,
  pagerInfo: t,
  linkCreator: n,
  items: o = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 100, 200, 500, 1e3, 2e3],
  dropdown: i = {},
  ...r
}) {
  var _;
  i.items = i.items ?? o.map((a) => {
    const h = { ...t, recPerPage: a };
    return {
      text: `${a}`,
      url: typeof n == "function" ? n(h) : ye(n, h)
    };
  });
  const { text: l = "" } = r;
  return r.text = typeof l == "function" ? l(t) : ye(l, t), i.menu = { ...i.menu, className: M((_ = i.menu) == null ? void 0 : _.className, "pager-size-menu") }, /* @__PURE__ */ Et(Wf, { type: "dropdown", dropdown: i, ...r });
}
function $v({
  key: e,
  page: t,
  type: n,
  btnType: o,
  pagerInfo: i,
  size: r,
  onClick: l,
  onChange: _,
  linkCreator: a,
  ...h
}) {
  const s = { ...h };
  let d;
  const u = (y) => {
    var p;
    d = Number((p = y.target) == null ? void 0 : p.value) || 1, d = d > i.pageTotal ? i.pageTotal : d;
  }, c = (y) => {
    if (!(y != null && y.target))
      return;
    d = d <= i.pageTotal ? d : i.pageTotal;
    const p = Io(i, d);
    _ && !_({ info: p, event: y }) || (y.target.href = s.url = typeof a == "function" ? a(p) : ye(a, p));
  }, f = Io(i, t || 0);
  return s.url = typeof a == "function" ? a(f) : ye(a, f), /* @__PURE__ */ Et("div", { className: M("input-group", "pager-goto-group", r ? `size-${r}` : ""), children: [
    /* @__PURE__ */ Et("input", { type: "number", class: "form-control", max: i.pageTotal, min: "1", onInput: u }),
    /* @__PURE__ */ Et(We, { type: o, ...s, onClick: c })
  ] });
}
var Hn;
let xv = (Hn = class extends An {
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
}, E(Hn, "NAME", "pager"), E(Hn, "defaultProps", {
  gap: 1,
  btnProps: {
    btnType: "ghost",
    size: "sm"
  }
}), E(Hn, "ItemComponents", {
  ...An.ItemComponents,
  link: yv,
  info: bv,
  nav: wv,
  "size-menu": kv,
  goto: $v
}), Hn);
class ra extends ae {
}
E(ra, "NAME", "pager"), E(ra, "Component", xv);
var pd, Q, md, mo, sa, gd = {}, yd = [], Sv = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function $t(e, t) {
  for (var n in t)
    e[n] = t[n];
  return e;
}
function vd(e) {
  var t = e.parentNode;
  t && t.removeChild(e);
}
function nl(e, t, n, o, i) {
  var r = { type: e, props: t, key: n, ref: o, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: i ?? ++md };
  return i == null && Q.vnode != null && Q.vnode(r), r;
}
function Cv() {
  return { current: null };
}
function ic(e) {
  return e.children;
}
function Tt(e, t) {
  this.props = e, this.context = t;
}
function Wo(e, t) {
  if (t == null)
    return e.__ ? Wo(e.__, e.__.__k.indexOf(e) + 1) : null;
  for (var n; t < e.__k.length; t++)
    if ((n = e.__k[t]) != null && n.__e != null)
      return n.__e;
  return typeof e.type == "function" ? Wo(e) : null;
}
function bd(e) {
  var t, n;
  if ((e = e.__) != null && e.__c != null) {
    for (e.__e = e.__c.base = null, t = 0; t < e.__k.length; t++)
      if ((n = e.__k[t]) != null && n.__e != null) {
        e.__e = e.__c.base = n.__e;
        break;
      }
    return bd(e);
  }
}
function ia(e) {
  (!e.__d && (e.__d = !0) && mo.push(e) && !Cs.__r++ || sa !== Q.debounceRendering) && ((sa = Q.debounceRendering) || setTimeout)(Cs);
}
function Cs() {
  for (var e; Cs.__r = mo.length; )
    e = mo.sort(function(t, n) {
      return t.__v.__b - n.__v.__b;
    }), mo = [], e.some(function(t) {
      var n, o, i, r, l, _;
      t.__d && (l = (r = (n = t).__v).__e, (_ = n.__P) && (o = [], (i = $t({}, r)).__v = r.__v + 1, xd(_, r, i, n.__n, _.ownerSVGElement !== void 0, r.__h != null ? [l] : null, o, l ?? Wo(r), r.__h), Tv(o, r), r.__e != l && bd(r)));
    });
}
function wd(e, t, n, o, i, r, l, _, a, h) {
  var s, d, u, c, f, y, p, m = o && o.__k || yd, g = m.length;
  for (n.__k = [], s = 0; s < t.length; s++)
    if ((c = n.__k[s] = (c = t[s]) == null || typeof c == "boolean" ? null : typeof c == "string" || typeof c == "number" || typeof c == "bigint" ? nl(null, c, null, null, c) : Array.isArray(c) ? nl(ic, { children: c }, null, null, null) : c.__b > 0 ? nl(c.type, c.props, c.key, c.ref ? c.ref : null, c.__v) : c) != null) {
      if (c.__ = n, c.__b = n.__b + 1, (u = m[s]) === null || u && c.key == u.key && c.type === u.type)
        m[s] = void 0;
      else
        for (d = 0; d < g; d++) {
          if ((u = m[d]) && c.key == u.key && c.type === u.type) {
            m[d] = void 0;
            break;
          }
          u = null;
        }
      xd(e, c, u = u || gd, i, r, l, _, a, h), f = c.__e, (d = c.ref) && u.ref != d && (p || (p = []), u.ref && p.push(u.ref, null, c), p.push(d, c.__c || f, c)), f != null ? (y == null && (y = f), typeof c.type == "function" && c.__k === u.__k ? c.__d = a = kd(c, a, e) : a = $d(e, c, u, m, f, a), typeof n.type == "function" && (n.__d = a)) : a && u.__e == a && a.parentNode != e && (a = Wo(u));
    }
  for (n.__e = y, s = g; s--; )
    m[s] != null && Cd(m[s], m[s]);
  if (p)
    for (s = 0; s < p.length; s++)
      Sd(p[s], p[++s], p[++s]);
}
function kd(e, t, n) {
  for (var o, i = e.__k, r = 0; i && r < i.length; r++)
    (o = i[r]) && (o.__ = e, t = typeof o.type == "function" ? kd(o, t, n) : $d(n, o, o, i, o.__e, t));
  return t;
}
function $d(e, t, n, o, i, r) {
  var l, _, a;
  if (t.__d !== void 0)
    l = t.__d, t.__d = void 0;
  else if (n == null || i != r || i.parentNode == null)
    e:
      if (r == null || r.parentNode !== e)
        e.appendChild(i), l = null;
      else {
        for (_ = r, a = 0; (_ = _.nextSibling) && a < o.length; a += 2)
          if (_ == i)
            break e;
        e.insertBefore(i, r), l = r;
      }
  return l !== void 0 ? l : i.nextSibling;
}
function Ev(e, t, n, o, i) {
  var r;
  for (r in n)
    r === "children" || r === "key" || r in t || Es(e, r, null, n[r], o);
  for (r in t)
    i && typeof t[r] != "function" || r === "children" || r === "key" || r === "value" || r === "checked" || n[r] === t[r] || Es(e, r, t[r], n[r], o);
}
function la(e, t, n) {
  t[0] === "-" ? e.setProperty(t, n) : e[t] = n == null ? "" : typeof n != "number" || Sv.test(t) ? n : n + "px";
}
function Es(e, t, n, o, i) {
  var r;
  e:
    if (t === "style")
      if (typeof n == "string")
        e.style.cssText = n;
      else {
        if (typeof o == "string" && (e.style.cssText = o = ""), o)
          for (t in o)
            n && t in n || la(e.style, t, "");
        if (n)
          for (t in n)
            o && n[t] === o[t] || la(e.style, t, n[t]);
      }
    else if (t[0] === "o" && t[1] === "n")
      r = t !== (t = t.replace(/Capture$/, "")), t = t.toLowerCase() in e ? t.toLowerCase().slice(2) : t.slice(2), e.l || (e.l = {}), e.l[t + r] = n, n ? o || e.addEventListener(t, r ? _a : ca, r) : e.removeEventListener(t, r ? _a : ca, r);
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
function ca(e) {
  this.l[e.type + !1](Q.event ? Q.event(e) : e);
}
function _a(e) {
  this.l[e.type + !0](Q.event ? Q.event(e) : e);
}
function xd(e, t, n, o, i, r, l, _, a) {
  var h, s, d, u, c, f, y, p, m, g, w, k, T, C, S, v = t.type;
  if (t.constructor !== void 0)
    return null;
  n.__h != null && (a = n.__h, _ = t.__e = n.__e, t.__h = null, r = [_]), (h = Q.__b) && h(t);
  try {
    e:
      if (typeof v == "function") {
        if (p = t.props, m = (h = v.contextType) && o[h.__c], g = h ? m ? m.props.value : h.__ : o, n.__c ? y = (s = t.__c = n.__c).__ = s.__E : ("prototype" in v && v.prototype.render ? t.__c = s = new v(p, g) : (t.__c = s = new Tt(p, g), s.constructor = v, s.render = Lv), m && m.sub(s), s.props = p, s.state || (s.state = {}), s.context = g, s.__n = o, d = s.__d = !0, s.__h = [], s._sb = []), s.__s == null && (s.__s = s.state), v.getDerivedStateFromProps != null && (s.__s == s.state && (s.__s = $t({}, s.__s)), $t(s.__s, v.getDerivedStateFromProps(p, s.__s))), u = s.props, c = s.state, d)
          v.getDerivedStateFromProps == null && s.componentWillMount != null && s.componentWillMount(), s.componentDidMount != null && s.__h.push(s.componentDidMount);
        else {
          if (v.getDerivedStateFromProps == null && p !== u && s.componentWillReceiveProps != null && s.componentWillReceiveProps(p, g), !s.__e && s.shouldComponentUpdate != null && s.shouldComponentUpdate(p, s.__s, g) === !1 || t.__v === n.__v) {
            for (s.props = p, s.state = s.__s, t.__v !== n.__v && (s.__d = !1), s.__v = t, t.__e = n.__e, t.__k = n.__k, t.__k.forEach(function($) {
              $ && ($.__ = t);
            }), w = 0; w < s._sb.length; w++)
              s.__h.push(s._sb[w]);
            s._sb = [], s.__h.length && l.push(s);
            break e;
          }
          s.componentWillUpdate != null && s.componentWillUpdate(p, s.__s, g), s.componentDidUpdate != null && s.__h.push(function() {
            s.componentDidUpdate(u, c, f);
          });
        }
        if (s.context = g, s.props = p, s.__v = t, s.__P = e, k = Q.__r, T = 0, "prototype" in v && v.prototype.render) {
          for (s.state = s.__s, s.__d = !1, k && k(t), h = s.render(s.props, s.state, s.context), C = 0; C < s._sb.length; C++)
            s.__h.push(s._sb[C]);
          s._sb = [];
        } else
          do
            s.__d = !1, k && k(t), h = s.render(s.props, s.state, s.context), s.state = s.__s;
          while (s.__d && ++T < 25);
        s.state = s.__s, s.getChildContext != null && (o = $t($t({}, o), s.getChildContext())), d || s.getSnapshotBeforeUpdate == null || (f = s.getSnapshotBeforeUpdate(u, c)), S = h != null && h.type === ic && h.key == null ? h.props.children : h, wd(e, Array.isArray(S) ? S : [S], t, n, o, i, r, l, _, a), s.base = t.__e, t.__h = null, s.__h.length && l.push(s), y && (s.__E = s.__ = null), s.__e = !1;
      } else
        r == null && t.__v === n.__v ? (t.__k = n.__k, t.__e = n.__e) : t.__e = Av(n.__e, t, n, o, i, r, l, a);
    (h = Q.diffed) && h(t);
  } catch ($) {
    t.__v = null, (a || r != null) && (t.__e = _, t.__h = !!a, r[r.indexOf(_)] = null), Q.__e($, t, n);
  }
}
function Tv(e, t) {
  Q.__c && Q.__c(t, e), e.some(function(n) {
    try {
      e = n.__h, n.__h = [], e.some(function(o) {
        o.call(n);
      });
    } catch (o) {
      Q.__e(o, n.__v);
    }
  });
}
function Av(e, t, n, o, i, r, l, _) {
  var a, h, s, d = n.props, u = t.props, c = t.type, f = 0;
  if (c === "svg" && (i = !0), r != null) {
    for (; f < r.length; f++)
      if ((a = r[f]) && "setAttribute" in a == !!c && (c ? a.localName === c : a.nodeType === 3)) {
        e = a, r[f] = null;
        break;
      }
  }
  if (e == null) {
    if (c === null)
      return document.createTextNode(u);
    e = i ? document.createElementNS("http://www.w3.org/2000/svg", c) : document.createElement(c, u.is && u), r = null, _ = !1;
  }
  if (c === null)
    d === u || _ && e.data === u || (e.data = u);
  else {
    if (r = r && pd.call(e.childNodes), h = (d = n.props || gd).dangerouslySetInnerHTML, s = u.dangerouslySetInnerHTML, !_) {
      if (r != null)
        for (d = {}, f = 0; f < e.attributes.length; f++)
          d[e.attributes[f].name] = e.attributes[f].value;
      (s || h) && (s && (h && s.__html == h.__html || s.__html === e.innerHTML) || (e.innerHTML = s && s.__html || ""));
    }
    if (Ev(e, u, d, i, _), s)
      t.__k = [];
    else if (f = t.props.children, wd(e, Array.isArray(f) ? f : [f], t, n, o, i && c !== "foreignObject", r, l, r ? r[0] : n.__k && Wo(n, 0), _), r != null)
      for (f = r.length; f--; )
        r[f] != null && vd(r[f]);
    _ || ("value" in u && (f = u.value) !== void 0 && (f !== e.value || c === "progress" && !f || c === "option" && f !== d.value) && Es(e, "value", f, d.value, !1), "checked" in u && (f = u.checked) !== void 0 && f !== e.checked && Es(e, "checked", f, d.checked, !1));
  }
  return e;
}
function Sd(e, t, n) {
  try {
    typeof e == "function" ? e(t) : e.current = t;
  } catch (o) {
    Q.__e(o, n);
  }
}
function Cd(e, t, n) {
  var o, i;
  if (Q.unmount && Q.unmount(e), (o = e.ref) && (o.current && o.current !== e.__e || Sd(o, null, t)), (o = e.__c) != null) {
    if (o.componentWillUnmount)
      try {
        o.componentWillUnmount();
      } catch (r) {
        Q.__e(r, t);
      }
    o.base = o.__P = null, e.__c = void 0;
  }
  if (o = e.__k)
    for (i = 0; i < o.length; i++)
      o[i] && Cd(o[i], t, n || typeof e.type != "function");
  n || e.__e == null || vd(e.__e), e.__ = e.__e = e.__d = void 0;
}
function Lv(e, t, n) {
  return this.constructor(e, n);
}
pd = yd.slice, Q = { __e: function(e, t, n, o) {
  for (var i, r, l; t = t.__; )
    if ((i = t.__c) && !i.__)
      try {
        if ((r = i.constructor) && r.getDerivedStateFromError != null && (i.setState(r.getDerivedStateFromError(e)), l = i.__d), i.componentDidCatch != null && (i.componentDidCatch(e, o || {}), l = i.__d), l)
          return i.__E = i;
      } catch (_) {
        e = _;
      }
  throw e;
} }, md = 0, Tt.prototype.setState = function(e, t) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = $t({}, this.state), typeof e == "function" && (e = e($t({}, n), this.props)), e && $t(n, e), e != null && this.__v && (t && this._sb.push(t), ia(this));
}, Tt.prototype.forceUpdate = function(e) {
  this.__v && (this.__e = !0, e && this.__h.push(e), ia(this));
}, Tt.prototype.render = ic, mo = [], Cs.__r = 0;
var Nv = 0;
function W(e, t, n, o, i) {
  var r, l, _ = {};
  for (l in t)
    l == "ref" ? r = t[l] : _[l] = t[l];
  var a = { type: e, props: _, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: --Nv, __source: i, __self: o };
  if (typeof e == "function" && (r = e.defaultProps))
    for (l in r)
      _[l] === void 0 && (_[l] = r[l]);
  return Q.vnode && Q.vnode(a), a;
}
let Rv = (e = 21) => crypto.getRandomValues(new Uint8Array(e)).reduce((t, n) => (n &= 63, n < 36 ? t += n.toString(36) : n < 62 ? t += (n - 26).toString(36).toUpperCase() : n > 62 ? t += "-" : t += "_", t), "");
var Gs;
class Mv extends Tt {
  constructor() {
    super(...arguments);
    x(this, Gs, (n) => {
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
      selections: _ = [],
      onClick: a,
      children: h
    } = this.props;
    let s;
    return _.length ? s = /* @__PURE__ */ W("div", { className: "picker-multi-selections", children: _.map((d, u) => /* @__PURE__ */ W("div", { className: "picker-multi-selection", children: [
      d.text ?? d.value,
      /* @__PURE__ */ W("div", { className: "picker-deselect-btn btn", onClick: b(this, Gs), "data-idx": u, children: /* @__PURE__ */ W("span", { className: "close" }) })
    ] })) }) : s = /* @__PURE__ */ W("span", { className: "picker-select-placeholder", children: r }), /* @__PURE__ */ W(
      "div",
      {
        className: M("picker-select picker-select-multi form-control", n, { disabled: i, focused: l }),
        style: o,
        onClick: a,
        children: [
          s,
          h,
          /* @__PURE__ */ W("span", { class: "caret" })
        ]
      }
    );
  }
}
Gs = new WeakMap();
var Ys;
class Pv extends Tt {
  constructor() {
    super(...arguments);
    x(this, Ys, (n) => {
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
      selections: _ = [],
      onDeselect: a,
      onClick: h,
      children: s
    } = this.props, [d] = _, u = d ? /* @__PURE__ */ W("span", { className: "picker-single-selection", children: d.text ?? d.value }) : /* @__PURE__ */ W("span", { className: "picker-select-placeholder", children: r }), c = d && a ? /* @__PURE__ */ W("button", { type: "button", className: "btn picker-deselect-btn", onClick: b(this, Ys), children: /* @__PURE__ */ W("span", { className: "close" }) }) : null;
    return /* @__PURE__ */ W(
      "div",
      {
        className: M("picker-select picker-select-single form-control", n, { disabled: i, focused: l }),
        style: o,
        onClick: h,
        children: [
          u,
          s,
          c,
          /* @__PURE__ */ W("span", { class: "caret" })
        ]
      }
    );
  }
}
Ys = new WeakMap();
var Ks, Ed, tr, Xs, nr, Js;
class Dv extends Tt {
  constructor() {
    super(...arguments);
    x(this, Ks);
    E(this, "state", { keys: "", shown: !1 });
    x(this, tr, (n) => {
      var o;
      (o = n.target) != null && o.closest(`#picker-menu-${this.props.id}`) || this.hide();
    });
    x(this, Xs, ({ item: n }) => {
      const o = this.props.items.find((i) => i.value === n.key);
      o && this.props.onSelectItem(o);
    });
    x(this, nr, (n) => {
      this.setState({ keys: n.target.value });
    });
    x(this, Js, () => {
      this.setState({ keys: "" });
    });
  }
  componentDidMount() {
    document.addEventListener("click", b(this, tr)), this.show();
  }
  componentWillUnmount() {
    document.removeEventListener("click", b(this, tr));
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
      maxWidth: _,
      width: a,
      menu: h,
      searchHint: s
    } = this.props, { shown: d, keys: u } = this.state, c = u.trim().length;
    return /* @__PURE__ */ W("div", { className: M("picker-menu", i, { shown: d, "has-search": c }), id: `picker-menu-${n}`, style: { maxHeight: l, maxWidth: _, width: a, ...r }, children: [
      o ? /* @__PURE__ */ W("div", { className: "picker-menu-search", children: [
        /* @__PURE__ */ W("input", { className: "form-control picker-menu-search-input", type: "text", placeholder: s, value: u, onChange: b(this, nr), onInput: b(this, nr) }),
        c ? /* @__PURE__ */ W("button", { type: "button", className: "btn picker-menu-search-clear", onClick: b(this, Js), children: /* @__PURE__ */ W("span", { className: "close" }) }) : /* @__PURE__ */ W("span", { className: "magnifier" })
      ] }) : null,
      /* @__PURE__ */ W(Hl, { className: "picker-menu-list", items: N(this, Ks, Ed).call(this), onClickItem: b(this, Xs), ...h })
    ] });
  }
}
Ks = new WeakSet(), Ed = function() {
  const { selections: n, items: o } = this.props, i = new Set(n), r = this.state.keys.toLowerCase().split(" ").filter((l) => l.length);
  return o.reduce((l, _) => {
    const {
      value: a,
      keys: h,
      text: s,
      ...d
    } = _;
    if (!r.length || r.every((u) => a.toLowerCase().includes(u) || (h == null ? void 0 : h.toLowerCase().includes(u)) || typeof s == "string" && s.toLowerCase().includes(u))) {
      let u = s ?? a;
      typeof u == "string" && r.length && (u = /* @__PURE__ */ W("span", { dangerouslySetInnerHTML: { __html: r.reduce((c, f) => c.replace(f, `<span class="picker-menu-item-match">${f}</span>`), u) } })), l.push({
        key: a,
        active: i.has(a),
        text: u,
        ...d
      });
    }
    return l;
  }, []);
}, tr = new WeakMap(), Xs = new WeakMap(), nr = new WeakMap(), Js = new WeakMap();
function aa(e) {
  const t = /* @__PURE__ */ new Set();
  return e.reduce((n, o) => (t.has(o) || (t.add(o), n.push(o)), n), []);
}
var _l, or, rr, sr, yn, Fr, ir, $l, Zs, Td, Qs, Ad, ei, ti, ni, oi, ri, Ld;
let Hv = (_l = class extends Tt {
  constructor(n) {
    super(n);
    x(this, yn);
    x(this, ir);
    x(this, Zs);
    x(this, Qs);
    x(this, ri);
    x(this, or, 0);
    x(this, rr, Rv());
    x(this, sr, Cv());
    x(this, ei, (n, o) => {
      const { valueList: i } = this, r = new Set(n.map((_) => _.value)), l = i.filter((_) => !r.has(_));
      this.setState({ value: l.length ? l.join(this.props.valueSplitter ?? ",") : void 0 });
    });
    x(this, ti, (n) => {
      console.log("#handleSelectClick", n), this.setState({ open: !0 });
    });
    x(this, ni, () => {
      this.close();
    });
    x(this, oi, (n) => {
      this.props.multi ? this.toggleValue(n.value) : this.setState({ value: n.value }, () => {
        var o;
        (o = b(this, sr).current) == null || o.hide();
      });
    });
    this.state = {
      value: N(this, Zs, Td).call(this, n.defaultValue) ?? "",
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
    return N(this, ir, $l).call(this, this.state.value);
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
      const i = ++kc(this, or)._;
      if (await N(this, yn, Fr).call(this, { loading: !0, items: [] }), n = await n(), b(this, or) !== i)
        return [];
    }
    const o = {};
    return Array.isArray(n) && this.state.items !== n && (o.items = n), this.state.loading && (o.loading = !1), Object.keys(o).length && await N(this, yn, Fr).call(this, o), n;
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
    await N(this, yn, Fr).call(this, { open: n }), n && this.loadItemList();
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
    } = this.props, l = r ? Mv : Pv;
    return /* @__PURE__ */ W("div", { className: M("picker", n), style: o, id: `picker-${b(this, rr)}`, children: [
      /* @__PURE__ */ W(l, { ...N(this, Qs, Ad).call(this) }),
      i,
      this.state.open ? /* @__PURE__ */ W(Dv, { ...N(this, ri, Ld).call(this), ref: b(this, sr) }) : null
    ] });
  }
}, or = new WeakMap(), rr = new WeakMap(), sr = new WeakMap(), yn = new WeakSet(), Fr = function(n) {
  return new Promise((o) => {
    this.setState(n, o);
  });
}, ir = new WeakSet(), $l = function(n) {
  return typeof n == "string" ? aa(n.split(this.props.valueSplitter ?? ",")) : Array.isArray(n) ? aa(n) : [];
}, Zs = new WeakSet(), Td = function(n) {
  const o = N(this, ir, $l).call(this, n);
  return o.length ? o.join(this.props.valueSplitter ?? ",") : void 0;
}, Qs = new WeakSet(), Ad = function() {
  const { placeholder: n, disabled: o } = this.props, { open: i } = this.state;
  return {
    focused: i,
    placeholder: n,
    disabled: o,
    selections: this.getSelections(),
    onClick: b(this, ti),
    onDeselect: b(this, ei)
  };
}, ei = new WeakMap(), ti = new WeakMap(), ni = new WeakMap(), oi = new WeakMap(), ri = new WeakSet(), Ld = function() {
  const { search: n, menuClass: o, menuWidth: i, menuStyle: r, menuMaxHeight: l, menuMaxWidth: _ } = this.props, { items: a } = this.state;
  return {
    id: b(this, rr),
    items: a,
    selections: this.valueList,
    search: n === !0 || typeof n == "number" && n <= a.length,
    style: r,
    className: o,
    width: i,
    maxHeight: l,
    maxWidth: _,
    onRequestHide: b(this, ni),
    onSelectItem: b(this, oi)
  };
}, E(_l, "defaultProps", {
  container: "body",
  valueSplitter: ",",
  search: !0,
  menuWidth: "auto",
  menuMaxHeight: 400
}), _l);
class ua extends ae {
}
E(ua, "NAME", "picker"), E(ua, "Component", Hv);
class fa extends ae {
}
E(fa, "NAME", "toolbar"), E(fa, "Component", An);
function yr(e) {
  return e.split("-")[1];
}
function lc(e) {
  return e === "y" ? "height" : "width";
}
function tn(e) {
  return e.split("-")[0];
}
function Ui(e) {
  return ["top", "bottom"].includes(tn(e)) ? "x" : "y";
}
function ha(e, t, n) {
  let { reference: o, floating: i } = e;
  const r = o.x + o.width / 2 - i.width / 2, l = o.y + o.height / 2 - i.height / 2, _ = Ui(t), a = lc(_), h = o[a] / 2 - i[a] / 2, s = _ === "x";
  let d;
  switch (tn(t)) {
    case "top":
      d = { x: r, y: o.y - i.height };
      break;
    case "bottom":
      d = { x: r, y: o.y + o.height };
      break;
    case "right":
      d = { x: o.x + o.width, y: l };
      break;
    case "left":
      d = { x: o.x - i.width, y: l };
      break;
    default:
      d = { x: o.x, y: o.y };
  }
  switch (yr(t)) {
    case "start":
      d[_] -= h * (n && s ? -1 : 1);
      break;
    case "end":
      d[_] += h * (n && s ? -1 : 1);
  }
  return d;
}
const Ov = async (e, t, n) => {
  const { placement: o = "bottom", strategy: i = "absolute", middleware: r = [], platform: l } = n, _ = r.filter(Boolean), a = await (l.isRTL == null ? void 0 : l.isRTL(t));
  let h = await l.getElementRects({ reference: e, floating: t, strategy: i }), { x: s, y: d } = ha(h, o, a), u = o, c = {}, f = 0;
  for (let y = 0; y < _.length; y++) {
    const { name: p, fn: m } = _[y], { x: g, y: w, data: k, reset: T } = await m({ x: s, y: d, initialPlacement: o, placement: u, strategy: i, middlewareData: c, rects: h, platform: l, elements: { reference: e, floating: t } });
    s = g ?? s, d = w ?? d, c = { ...c, [p]: { ...c[p], ...k } }, T && f <= 50 && (f++, typeof T == "object" && (T.placement && (u = T.placement), T.rects && (h = T.rects === !0 ? await l.getElementRects({ reference: e, floating: t, strategy: i }) : T.rects), { x: s, y: d } = ha(h, u, a)), y = -1);
  }
  return { x: s, y: d, placement: u, strategy: i, middlewareData: c };
};
function Nd(e) {
  return typeof e != "number" ? function(t) {
    return { top: 0, right: 0, bottom: 0, left: 0, ...t };
  }(e) : { top: e, right: e, bottom: e, left: e };
}
function Ts(e) {
  return { ...e, top: e.y, left: e.x, right: e.x + e.width, bottom: e.y + e.height };
}
async function Iv(e, t) {
  var n;
  t === void 0 && (t = {});
  const { x: o, y: i, platform: r, rects: l, elements: _, strategy: a } = e, { boundary: h = "clippingAncestors", rootBoundary: s = "viewport", elementContext: d = "floating", altBoundary: u = !1, padding: c = 0 } = t, f = Nd(c), y = _[u ? d === "floating" ? "reference" : "floating" : d], p = Ts(await r.getClippingRect({ element: (n = await (r.isElement == null ? void 0 : r.isElement(y))) == null || n ? y : y.contextElement || await (r.getDocumentElement == null ? void 0 : r.getDocumentElement(_.floating)), boundary: h, rootBoundary: s, strategy: a })), m = d === "floating" ? { ...l.floating, x: o, y: i } : l.reference, g = await (r.getOffsetParent == null ? void 0 : r.getOffsetParent(_.floating)), w = await (r.isElement == null ? void 0 : r.isElement(g)) && await (r.getScale == null ? void 0 : r.getScale(g)) || { x: 1, y: 1 }, k = Ts(r.convertOffsetParentRelativeRectToViewportRelativeRect ? await r.convertOffsetParentRelativeRectToViewportRelativeRect({ rect: m, offsetParent: g, strategy: a }) : m);
  return { top: (p.top - k.top + f.top) / w.y, bottom: (k.bottom - p.bottom + f.bottom) / w.y, left: (p.left - k.left + f.left) / w.x, right: (k.right - p.right + f.right) / w.x };
}
const Wv = Math.min, Uv = Math.max;
function Fv(e, t, n) {
  return Uv(e, Wv(t, n));
}
const jv = (e) => ({ name: "arrow", options: e, async fn(t) {
  const { element: n, padding: o = 0 } = e || {}, { x: i, y: r, placement: l, rects: _, platform: a } = t;
  if (n == null)
    return {};
  const h = Nd(o), s = { x: i, y: r }, d = Ui(l), u = lc(d), c = await a.getDimensions(n), f = d === "y" ? "top" : "left", y = d === "y" ? "bottom" : "right", p = _.reference[u] + _.reference[d] - s[d] - _.floating[u], m = s[d] - _.reference[d], g = await (a.getOffsetParent == null ? void 0 : a.getOffsetParent(n));
  let w = g ? d === "y" ? g.clientHeight || 0 : g.clientWidth || 0 : 0;
  w === 0 && (w = _.floating[u]);
  const k = p / 2 - m / 2, T = h[f], C = w - c[u] - h[y], S = w / 2 - c[u] / 2 + k, v = Fv(T, S, C), $ = yr(l) != null && S != v && _.reference[u] / 2 - (S < T ? h[f] : h[y]) - c[u] / 2 < 0;
  return { [d]: s[d] - ($ ? S < T ? T - S : C - S : 0), data: { [d]: v, centerOffset: S - v } };
} }), Bv = ["top", "right", "bottom", "left"];
Bv.reduce((e, t) => e.concat(t, t + "-start", t + "-end"), []);
const zv = { left: "right", right: "left", bottom: "top", top: "bottom" };
function As(e) {
  return e.replace(/left|right|bottom|top/g, (t) => zv[t]);
}
function Vv(e, t, n) {
  n === void 0 && (n = !1);
  const o = yr(e), i = Ui(e), r = lc(i);
  let l = i === "x" ? o === (n ? "end" : "start") ? "right" : "left" : o === "start" ? "bottom" : "top";
  return t.reference[r] > t.floating[r] && (l = As(l)), { main: l, cross: As(l) };
}
const qv = { start: "end", end: "start" };
function ol(e) {
  return e.replace(/start|end/g, (t) => qv[t]);
}
const Gv = function(e) {
  return e === void 0 && (e = {}), { name: "flip", options: e, async fn(t) {
    var n;
    const { placement: o, middlewareData: i, rects: r, initialPlacement: l, platform: _, elements: a } = t, { mainAxis: h = !0, crossAxis: s = !0, fallbackPlacements: d, fallbackStrategy: u = "bestFit", fallbackAxisSideDirection: c = "none", flipAlignment: f = !0, ...y } = e, p = tn(o), m = tn(l) === l, g = await (_.isRTL == null ? void 0 : _.isRTL(a.floating)), w = d || (m || !f ? [As(l)] : function(O) {
      const z = As(O);
      return [ol(O), z, ol(z)];
    }(l));
    d || c === "none" || w.push(...function(O, z, _e, pe) {
      const ne = yr(O);
      let H = function(oe, Le, Pt) {
        const Dt = ["left", "right"], Ht = ["right", "left"], Fe = ["top", "bottom"], Xt = ["bottom", "top"];
        switch (oe) {
          case "top":
          case "bottom":
            return Pt ? Le ? Ht : Dt : Le ? Dt : Ht;
          case "left":
          case "right":
            return Le ? Fe : Xt;
          default:
            return [];
        }
      }(tn(O), _e === "start", pe);
      return ne && (H = H.map((oe) => oe + "-" + ne), z && (H = H.concat(H.map(ol)))), H;
    }(l, f, c, g));
    const k = [l, ...w], T = await Iv(t, y), C = [];
    let S = ((n = i.flip) == null ? void 0 : n.overflows) || [];
    if (h && C.push(T[p]), s) {
      const { main: O, cross: z } = Vv(o, r, g);
      C.push(T[O], T[z]);
    }
    if (S = [...S, { placement: o, overflows: C }], !C.every((O) => O <= 0)) {
      var v;
      const O = (((v = i.flip) == null ? void 0 : v.index) || 0) + 1, z = k[O];
      if (z)
        return { data: { index: O, overflows: S }, reset: { placement: z } };
      let _e = "bottom";
      switch (u) {
        case "bestFit": {
          var $;
          const pe = ($ = S.map((ne) => [ne, ne.overflows.filter((H) => H > 0).reduce((H, oe) => H + oe, 0)]).sort((ne, H) => ne[1] - H[1])[0]) == null ? void 0 : $[0].placement;
          pe && (_e = pe);
          break;
        }
        case "initialPlacement":
          _e = l;
      }
      if (o !== _e)
        return { reset: { placement: _e } };
    }
    return {};
  } };
}, Yv = function(e) {
  return e === void 0 && (e = 0), { name: "offset", options: e, async fn(t) {
    const { x: n, y: o } = t, i = await async function(r, l) {
      const { placement: _, platform: a, elements: h } = r, s = await (a.isRTL == null ? void 0 : a.isRTL(h.floating)), d = tn(_), u = yr(_), c = Ui(_) === "x", f = ["left", "top"].includes(d) ? -1 : 1, y = s && c ? -1 : 1, p = typeof l == "function" ? l(r) : l;
      let { mainAxis: m, crossAxis: g, alignmentAxis: w } = typeof p == "number" ? { mainAxis: p, crossAxis: 0, alignmentAxis: null } : { mainAxis: 0, crossAxis: 0, alignmentAxis: null, ...p };
      return u && typeof w == "number" && (g = u === "end" ? -1 * w : w), c ? { x: g * y, y: m * f } : { x: m * f, y: g * y };
    }(t, e);
    return { x: n + i.x, y: o + i.y, data: i };
  } };
};
function Se(e) {
  var t;
  return ((t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function Ie(e) {
  return Se(e).getComputedStyle(e);
}
function Nt(e) {
  return Md(e) ? (e.nodeName || "").toLowerCase() : "";
}
let xr;
function Rd() {
  if (xr)
    return xr;
  const e = navigator.userAgentData;
  return e && Array.isArray(e.brands) ? (xr = e.brands.map((t) => t.brand + "/" + t.version).join(" "), xr) : navigator.userAgent;
}
function ot(e) {
  return e instanceof Se(e).HTMLElement;
}
function Ae(e) {
  return e instanceof Se(e).Element;
}
function Md(e) {
  return e instanceof Se(e).Node;
}
function da(e) {
  return typeof ShadowRoot > "u" ? !1 : e instanceof Se(e).ShadowRoot || e instanceof ShadowRoot;
}
function Fi(e) {
  const { overflow: t, overflowX: n, overflowY: o, display: i } = Ie(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + o + n) && !["inline", "contents"].includes(i);
}
function Kv(e) {
  return ["table", "td", "th"].includes(Nt(e));
}
function xl(e) {
  const t = /firefox/i.test(Rd()), n = Ie(e), o = n.backdropFilter || n.WebkitBackdropFilter;
  return n.transform !== "none" || n.perspective !== "none" || !!o && o !== "none" || t && n.willChange === "filter" || t && !!n.filter && n.filter !== "none" || ["transform", "perspective"].some((i) => n.willChange.includes(i)) || ["paint", "layout", "strict", "content"].some((i) => {
    const r = n.contain;
    return r != null && r.includes(i);
  });
}
function Pd() {
  return !/^((?!chrome|android).)*safari/i.test(Rd());
}
function cc(e) {
  return ["html", "body", "#document"].includes(Nt(e));
}
const pa = Math.min, go = Math.max, Ls = Math.round;
function Dd(e) {
  const t = Ie(e);
  let n = parseFloat(t.width), o = parseFloat(t.height);
  const i = e.offsetWidth, r = e.offsetHeight, l = Ls(n) !== i || Ls(o) !== r;
  return l && (n = i, o = r), { width: n, height: o, fallback: l };
}
function Hd(e) {
  return Ae(e) ? e : e.contextElement;
}
const Od = { x: 1, y: 1 };
function nn(e) {
  const t = Hd(e);
  if (!ot(t))
    return Od;
  const n = t.getBoundingClientRect(), { width: o, height: i, fallback: r } = Dd(t);
  let l = (r ? Ls(n.width) : n.width) / o, _ = (r ? Ls(n.height) : n.height) / i;
  return l && Number.isFinite(l) || (l = 1), _ && Number.isFinite(_) || (_ = 1), { x: l, y: _ };
}
function Gt(e, t, n, o) {
  var i, r;
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const l = e.getBoundingClientRect(), _ = Hd(e);
  let a = Od;
  t && (o ? Ae(o) && (a = nn(o)) : a = nn(e));
  const h = _ ? Se(_) : window, s = !Pd() && n;
  let d = (l.left + (s && ((i = h.visualViewport) == null ? void 0 : i.offsetLeft) || 0)) / a.x, u = (l.top + (s && ((r = h.visualViewport) == null ? void 0 : r.offsetTop) || 0)) / a.y, c = l.width / a.x, f = l.height / a.y;
  if (_) {
    const y = Se(_), p = o && Ae(o) ? Se(o) : o;
    let m = y.frameElement;
    for (; m && o && p !== y; ) {
      const g = nn(m), w = m.getBoundingClientRect(), k = getComputedStyle(m);
      w.x += (m.clientLeft + parseFloat(k.paddingLeft)) * g.x, w.y += (m.clientTop + parseFloat(k.paddingTop)) * g.y, d *= g.x, u *= g.y, c *= g.x, f *= g.y, d += w.x, u += w.y, m = Se(m).frameElement;
    }
  }
  return { width: c, height: f, top: u, right: d + c, bottom: u + f, left: d, x: d, y: u };
}
function At(e) {
  return ((Md(e) ? e.ownerDocument : e.document) || window.document).documentElement;
}
function ji(e) {
  return Ae(e) ? { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop } : { scrollLeft: e.pageXOffset, scrollTop: e.pageYOffset };
}
function Id(e) {
  return Gt(At(e)).left + ji(e).scrollLeft;
}
function Xv(e, t, n) {
  const o = ot(t), i = At(t), r = Gt(e, !0, n === "fixed", t);
  let l = { scrollLeft: 0, scrollTop: 0 };
  const _ = { x: 0, y: 0 };
  if (o || !o && n !== "fixed")
    if ((Nt(t) !== "body" || Fi(i)) && (l = ji(t)), ot(t)) {
      const a = Gt(t, !0);
      _.x = a.x + t.clientLeft, _.y = a.y + t.clientTop;
    } else
      i && (_.x = Id(i));
  return { x: r.left + l.scrollLeft - _.x, y: r.top + l.scrollTop - _.y, width: r.width, height: r.height };
}
function Uo(e) {
  if (Nt(e) === "html")
    return e;
  const t = e.assignedSlot || e.parentNode || (da(e) ? e.host : null) || At(e);
  return da(t) ? t.host : t;
}
function ma(e) {
  return ot(e) && Ie(e).position !== "fixed" ? e.offsetParent : null;
}
function ga(e) {
  const t = Se(e);
  let n = ma(e);
  for (; n && Kv(n) && Ie(n).position === "static"; )
    n = ma(n);
  return n && (Nt(n) === "html" || Nt(n) === "body" && Ie(n).position === "static" && !xl(n)) ? t : n || function(o) {
    let i = Uo(o);
    for (; ot(i) && !cc(i); ) {
      if (xl(i))
        return i;
      i = Uo(i);
    }
    return null;
  }(e) || t;
}
function Wd(e) {
  const t = Uo(e);
  return cc(t) ? e.ownerDocument.body : ot(t) && Fi(t) ? t : Wd(t);
}
function yo(e, t) {
  var n;
  t === void 0 && (t = []);
  const o = Wd(e), i = o === ((n = e.ownerDocument) == null ? void 0 : n.body), r = Se(o);
  return i ? t.concat(r, r.visualViewport || [], Fi(o) ? o : []) : t.concat(o, yo(o));
}
function ya(e, t, n) {
  return t === "viewport" ? Ts(function(o, i) {
    const r = Se(o), l = At(o), _ = r.visualViewport;
    let a = l.clientWidth, h = l.clientHeight, s = 0, d = 0;
    if (_) {
      a = _.width, h = _.height;
      const u = Pd();
      (u || !u && i === "fixed") && (s = _.offsetLeft, d = _.offsetTop);
    }
    return { width: a, height: h, x: s, y: d };
  }(e, n)) : Ae(t) ? function(o, i) {
    const r = Gt(o, !0, i === "fixed"), l = r.top + o.clientTop, _ = r.left + o.clientLeft, a = ot(o) ? nn(o) : { x: 1, y: 1 }, h = o.clientWidth * a.x, s = o.clientHeight * a.y, d = _ * a.x, u = l * a.y;
    return { top: u, left: d, right: d + h, bottom: u + s, x: d, y: u, width: h, height: s };
  }(t, n) : Ts(function(o) {
    var i;
    const r = At(o), l = ji(o), _ = (i = o.ownerDocument) == null ? void 0 : i.body, a = go(r.scrollWidth, r.clientWidth, _ ? _.scrollWidth : 0, _ ? _.clientWidth : 0), h = go(r.scrollHeight, r.clientHeight, _ ? _.scrollHeight : 0, _ ? _.clientHeight : 0);
    let s = -l.scrollLeft + Id(o);
    const d = -l.scrollTop;
    return Ie(_ || r).direction === "rtl" && (s += go(r.clientWidth, _ ? _.clientWidth : 0) - a), { width: a, height: h, x: s, y: d };
  }(At(e)));
}
const Jv = { getClippingRect: function(e) {
  let { element: t, boundary: n, rootBoundary: o, strategy: i } = e;
  const r = n === "clippingAncestors" ? function(h, s) {
    const d = s.get(h);
    if (d)
      return d;
    let u = yo(h).filter((p) => Ae(p) && Nt(p) !== "body"), c = null;
    const f = Ie(h).position === "fixed";
    let y = f ? Uo(h) : h;
    for (; Ae(y) && !cc(y); ) {
      const p = Ie(y), m = xl(y);
      (f ? m || c : m || p.position !== "static" || !c || !["absolute", "fixed"].includes(c.position)) ? c = p : u = u.filter((g) => g !== y), y = Uo(y);
    }
    return s.set(h, u), u;
  }(t, this._c) : [].concat(n), l = [...r, o], _ = l[0], a = l.reduce((h, s) => {
    const d = ya(t, s, i);
    return h.top = go(d.top, h.top), h.right = pa(d.right, h.right), h.bottom = pa(d.bottom, h.bottom), h.left = go(d.left, h.left), h;
  }, ya(t, _, i));
  return { width: a.right - a.left, height: a.bottom - a.top, x: a.left, y: a.top };
}, convertOffsetParentRelativeRectToViewportRelativeRect: function(e) {
  let { rect: t, offsetParent: n, strategy: o } = e;
  const i = ot(n), r = At(n);
  if (n === r)
    return t;
  let l = { scrollLeft: 0, scrollTop: 0 }, _ = { x: 1, y: 1 };
  const a = { x: 0, y: 0 };
  if ((i || !i && o !== "fixed") && ((Nt(n) !== "body" || Fi(r)) && (l = ji(n)), ot(n))) {
    const h = Gt(n);
    _ = nn(n), a.x = h.x + n.clientLeft, a.y = h.y + n.clientTop;
  }
  return { width: t.width * _.x, height: t.height * _.y, x: t.x * _.x - l.scrollLeft * _.x + a.x, y: t.y * _.y - l.scrollTop * _.y + a.y };
}, isElement: Ae, getDimensions: function(e) {
  return Dd(e);
}, getOffsetParent: ga, getDocumentElement: At, getScale: nn, async getElementRects(e) {
  let { reference: t, floating: n, strategy: o } = e;
  const i = this.getOffsetParent || ga, r = this.getDimensions;
  return { reference: Xv(t, await i(n), o), floating: { x: 0, y: 0, ...await r(n) } };
}, getClientRects: (e) => Array.from(e.getClientRects()), isRTL: (e) => Ie(e).direction === "rtl" };
function Zv(e, t, n, o) {
  o === void 0 && (o = {});
  const { ancestorScroll: i = !0, ancestorResize: r = !0, elementResize: l = !0, animationFrame: _ = !1 } = o, a = i && !_, h = a || r ? [...Ae(e) ? yo(e) : e.contextElement ? yo(e.contextElement) : [], ...yo(t)] : [];
  h.forEach((c) => {
    a && c.addEventListener("scroll", n, { passive: !0 }), r && c.addEventListener("resize", n);
  });
  let s, d = null;
  if (l) {
    let c = !0;
    d = new ResizeObserver(() => {
      c || n(), c = !1;
    }), Ae(e) && !_ && d.observe(e), Ae(e) || !e.contextElement || _ || d.observe(e.contextElement), d.observe(t);
  }
  let u = _ ? Gt(e) : null;
  return _ && function c() {
    const f = Gt(e);
    !u || f.x === u.x && f.y === u.y && f.width === u.width && f.height === u.height || n(), u = f, s = requestAnimationFrame(c);
  }(), n(), () => {
    var c;
    h.forEach((f) => {
      a && f.removeEventListener("scroll", n), r && f.removeEventListener("resize", n);
    }), (c = d) == null || c.disconnect(), d = null, _ && cancelAnimationFrame(s);
  };
}
const Qv = (e, t, n) => {
  const o = /* @__PURE__ */ new Map(), i = { platform: Jv, ...n }, r = { ...i.platform, _c: o };
  return Ov(e, t, { ...i, platform: r });
};
var vn, bn, wn, jt, ue, si, lr, cr, Sl, ii, Ud, li, Fd, ci, jd, _i, Bd, ai, zd, ui, Vd, fi, qd, kn, hi, Gd;
const It = class extends Qe {
  constructor() {
    super(...arguments);
    x(this, cr);
    x(this, ii);
    x(this, li);
    x(this, ci);
    x(this, _i);
    x(this, ai);
    x(this, ui);
    x(this, fi);
    x(this, hi);
    x(this, vn, !1);
    x(this, bn, void 0);
    x(this, wn, 0);
    x(this, jt, void 0);
    x(this, ue, void 0);
    x(this, si, void 0);
    x(this, lr, void 0);
    E(this, "hideLater", () => {
      b(this, kn).call(this), L(this, wn, window.setTimeout(this.hide.bind(this), 100));
    });
    x(this, kn, () => {
      clearTimeout(b(this, wn)), L(this, wn, 0);
    });
  }
  get isShown() {
    var n;
    return (n = b(this, jt)) == null ? void 0 : n.classList.contains(It.CLASS_SHOW);
  }
  get tooltip() {
    return b(this, jt) || N(this, li, Fd).call(this);
  }
  get trigger() {
    return b(this, si) || this.element;
  }
  get isHover() {
    return this.options.trigger === "hover";
  }
  get elementShowClass() {
    return `with-${It.NAME}-show`;
  }
  get isDynamic() {
    return this.options.title;
  }
  init() {
    const { element: n } = this;
    n !== document.body && !n.hasAttribute("data-toggle") && n.setAttribute("data-toggle", "tooltip");
  }
  show(n) {
    return this.setOptions(n), !b(this, vn) && this.isHover && N(this, hi, Gd).call(this), this.options.animation && this.tooltip.classList.add("fade"), this.element.classList.add(this.elementShowClass), this.tooltip.classList.add(It.CLASS_SHOW), N(this, ui, Vd).call(this), !0;
  }
  hide() {
    var n, o;
    return (n = b(this, lr)) == null || n.call(this), this.element.classList.remove(this.elementShowClass), (o = b(this, jt)) == null || o.classList.remove(It.CLASS_SHOW), !0;
  }
  toggle(n) {
    return this.isShown ? this.hide() : this.show(n);
  }
  destroy() {
    b(this, vn) && (this.element.removeEventListener("mouseleave", this.hideLater), this.tooltip.removeEventListener("mouseenter", b(this, kn)), this.tooltip.removeEventListener("mouseleave", this.hideLater)), super.destroy();
  }
  static clear(n) {
    n instanceof Event && (n = { event: n });
    const { exclude: o } = n || {}, i = this.getAll().entries(), r = new Set(o || []);
    for (const [l, _] of i)
      r.has(l) || _.hide();
  }
};
let ke = It;
vn = new WeakMap(), bn = new WeakMap(), wn = new WeakMap(), jt = new WeakMap(), ue = new WeakMap(), si = new WeakMap(), lr = new WeakMap(), cr = new WeakSet(), Sl = function() {
  const { arrow: n } = this.options;
  return typeof n == "number" ? n : 8;
}, ii = new WeakSet(), Ud = function() {
  const n = N(this, cr, Sl).call(this);
  return L(this, ue, document.createElement("div")), b(this, ue).style.position = this.options.strategy, b(this, ue).style.width = `${n}px`, b(this, ue).style.height = `${n}px`, b(this, ue).style.transform = "rotate(45deg)", b(this, ue);
}, li = new WeakSet(), Fd = function() {
  var i;
  const n = It.TOOLTIP_CLASS;
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
  if (this.options.arrow && (o == null || o.append(N(this, ii, Ud).call(this))), !o)
    throw new Error("Tooltip: Cannot find tooltip element");
  return o.style.width = "max-content", o.style.position = "absolute", o.style.top = "0", o.style.left = "0", document.body.appendChild(o), L(this, jt, o), o;
}, ci = new WeakSet(), jd = function() {
  var l;
  const n = N(this, cr, Sl).call(this), { strategy: o, placement: i } = this.options, r = {
    middleware: [Yv(n), Gv()],
    strategy: o,
    placement: i
  };
  return this.options.arrow && b(this, ue) && ((l = r.middleware) == null || l.push(jv({ element: b(this, ue) }))), r;
}, _i = new WeakSet(), Bd = function(n) {
  return {
    top: "bottom",
    right: "left",
    bottom: "top",
    left: "right"
  }[n];
}, ai = new WeakSet(), zd = function(n) {
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
}, ui = new WeakSet(), Vd = function() {
  const n = N(this, ci, jd).call(this), o = N(this, fi, qd).call(this);
  L(this, lr, Zv(o, this.tooltip, () => {
    Qv(o, this.tooltip, n).then(({ x: i, y: r, middlewareData: l, placement: _ }) => {
      Object.assign(this.tooltip.style, {
        left: `${i}px`,
        top: `${r}px`
      });
      const a = _.split("-")[0], h = N(this, _i, Bd).call(this, a);
      if (l.arrow && b(this, ue)) {
        const { x: s, y: d } = l.arrow;
        Object.assign(b(this, ue).style, {
          left: s != null ? `${s}px` : "",
          top: d != null ? `${d}px` : "",
          [h]: `${-b(this, ue).offsetWidth / 2}px`,
          background: "inherit",
          border: "inherit",
          ...N(this, ai, zd).call(this, a)
        });
      }
    });
  }));
}, fi = new WeakSet(), qd = function() {
  return b(this, bn) || L(this, bn, {
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
  }), b(this, bn);
}, kn = new WeakMap(), hi = new WeakSet(), Gd = function() {
  const { tooltip: n } = this;
  n.addEventListener("mouseenter", b(this, kn)), n.addEventListener("mouseleave", this.hideLater), this.element.addEventListener("mouseleave", this.hideLater), L(this, vn, !0);
}, E(ke, "NAME", "tooltip"), E(ke, "TOOLTIP_CLASS", "tooltip"), E(ke, "CLASS_SHOW", "show"), E(ke, "MENU_SELECTOR", '[data-toggle="tooltip"]:not(.disabled):not(:disabled)'), E(ke, "DEFAULT", {
  animation: !0,
  placement: "top",
  strategy: "absolute",
  trigger: "hover",
  type: "darker",
  arrow: !0
});
document.addEventListener("click", function(e) {
  var o;
  const t = e.target, n = (o = t.closest) == null ? void 0 : o.call(t, ke.MENU_SELECTOR);
  if (n) {
    const i = ke.ensure(n);
    i.options.trigger === "click" && i.toggle();
  } else
    ke.clear({ event: e });
});
document.addEventListener("mouseover", function(e) {
  var i;
  const t = e.target, n = (i = t.closest) == null ? void 0 : i.call(t, ke.MENU_SELECTOR);
  if (!n)
    return;
  const o = ke.ensure(n);
  o.isHover && o.show();
});
var _c, ee, Yd, Kd, vo, va, Xd = {}, Jd = [], eb = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function xt(e, t) {
  for (var n in t)
    e[n] = t[n];
  return e;
}
function Zd(e) {
  var t = e.parentNode;
  t && t.removeChild(e);
}
function ac(e, t, n) {
  var o, i, r, l = {};
  for (r in t)
    r == "key" ? o = t[r] : r == "ref" ? i = t[r] : l[r] = t[r];
  if (arguments.length > 2 && (l.children = arguments.length > 3 ? _c.call(arguments, 2) : n), typeof e == "function" && e.defaultProps != null)
    for (r in e.defaultProps)
      l[r] === void 0 && (l[r] = e.defaultProps[r]);
  return jr(e, l, o, i, null);
}
function jr(e, t, n, o, i) {
  var r = { type: e, props: t, key: n, ref: o, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: i ?? ++Yd };
  return i == null && ee.vnode != null && ee.vnode(r), r;
}
function tb() {
  return { current: null };
}
function uc(e) {
  return e.children;
}
function bo(e, t) {
  this.props = e, this.context = t;
}
function Fo(e, t) {
  if (t == null)
    return e.__ ? Fo(e.__, e.__.__k.indexOf(e) + 1) : null;
  for (var n; t < e.__k.length; t++)
    if ((n = e.__k[t]) != null && n.__e != null)
      return n.__e;
  return typeof e.type == "function" ? Fo(e) : null;
}
function Qd(e) {
  var t, n;
  if ((e = e.__) != null && e.__c != null) {
    for (e.__e = e.__c.base = null, t = 0; t < e.__k.length; t++)
      if ((n = e.__k[t]) != null && n.__e != null) {
        e.__e = e.__c.base = n.__e;
        break;
      }
    return Qd(e);
  }
}
function ba(e) {
  (!e.__d && (e.__d = !0) && vo.push(e) && !Ns.__r++ || va !== ee.debounceRendering) && ((va = ee.debounceRendering) || setTimeout)(Ns);
}
function Ns() {
  for (var e; Ns.__r = vo.length; )
    e = vo.sort(function(t, n) {
      return t.__v.__b - n.__v.__b;
    }), vo = [], e.some(function(t) {
      var n, o, i, r, l, _;
      t.__d && (l = (r = (n = t).__v).__e, (_ = n.__P) && (o = [], (i = xt({}, r)).__v = r.__v + 1, op(_, r, i, n.__n, _.ownerSVGElement !== void 0, r.__h != null ? [l] : null, o, l ?? Fo(r), r.__h), ob(o, r), r.__e != l && Qd(r)));
    });
}
function ep(e, t, n, o, i, r, l, _, a, h) {
  var s, d, u, c, f, y, p, m = o && o.__k || Jd, g = m.length;
  for (n.__k = [], s = 0; s < t.length; s++)
    if ((c = n.__k[s] = (c = t[s]) == null || typeof c == "boolean" ? null : typeof c == "string" || typeof c == "number" || typeof c == "bigint" ? jr(null, c, null, null, c) : Array.isArray(c) ? jr(uc, { children: c }, null, null, null) : c.__b > 0 ? jr(c.type, c.props, c.key, c.ref ? c.ref : null, c.__v) : c) != null) {
      if (c.__ = n, c.__b = n.__b + 1, (u = m[s]) === null || u && c.key == u.key && c.type === u.type)
        m[s] = void 0;
      else
        for (d = 0; d < g; d++) {
          if ((u = m[d]) && c.key == u.key && c.type === u.type) {
            m[d] = void 0;
            break;
          }
          u = null;
        }
      op(e, c, u = u || Xd, i, r, l, _, a, h), f = c.__e, (d = c.ref) && u.ref != d && (p || (p = []), u.ref && p.push(u.ref, null, c), p.push(d, c.__c || f, c)), f != null ? (y == null && (y = f), typeof c.type == "function" && c.__k === u.__k ? c.__d = a = tp(c, a, e) : a = np(e, c, u, m, f, a), typeof n.type == "function" && (n.__d = a)) : a && u.__e == a && a.parentNode != e && (a = Fo(u));
    }
  for (n.__e = y, s = g; s--; )
    m[s] != null && sp(m[s], m[s]);
  if (p)
    for (s = 0; s < p.length; s++)
      rp(p[s], p[++s], p[++s]);
}
function tp(e, t, n) {
  for (var o, i = e.__k, r = 0; i && r < i.length; r++)
    (o = i[r]) && (o.__ = e, t = typeof o.type == "function" ? tp(o, t, n) : np(n, o, o, i, o.__e, t));
  return t;
}
function np(e, t, n, o, i, r) {
  var l, _, a;
  if (t.__d !== void 0)
    l = t.__d, t.__d = void 0;
  else if (n == null || i != r || i.parentNode == null)
    e:
      if (r == null || r.parentNode !== e)
        e.appendChild(i), l = null;
      else {
        for (_ = r, a = 0; (_ = _.nextSibling) && a < o.length; a += 2)
          if (_ == i)
            break e;
        e.insertBefore(i, r), l = r;
      }
  return l !== void 0 ? l : i.nextSibling;
}
function nb(e, t, n, o, i) {
  var r;
  for (r in n)
    r === "children" || r === "key" || r in t || Rs(e, r, null, n[r], o);
  for (r in t)
    i && typeof t[r] != "function" || r === "children" || r === "key" || r === "value" || r === "checked" || n[r] === t[r] || Rs(e, r, t[r], n[r], o);
}
function wa(e, t, n) {
  t[0] === "-" ? e.setProperty(t, n) : e[t] = n == null ? "" : typeof n != "number" || eb.test(t) ? n : n + "px";
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
            n && t in n || wa(e.style, t, "");
        if (n)
          for (t in n)
            o && n[t] === o[t] || wa(e.style, t, n[t]);
      }
    else if (t[0] === "o" && t[1] === "n")
      r = t !== (t = t.replace(/Capture$/, "")), t = t.toLowerCase() in e ? t.toLowerCase().slice(2) : t.slice(2), e.l || (e.l = {}), e.l[t + r] = n, n ? o || e.addEventListener(t, r ? $a : ka, r) : e.removeEventListener(t, r ? $a : ka, r);
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
function ka(e) {
  this.l[e.type + !1](ee.event ? ee.event(e) : e);
}
function $a(e) {
  this.l[e.type + !0](ee.event ? ee.event(e) : e);
}
function op(e, t, n, o, i, r, l, _, a) {
  var h, s, d, u, c, f, y, p, m, g, w, k, T, C, S, v = t.type;
  if (t.constructor !== void 0)
    return null;
  n.__h != null && (a = n.__h, _ = t.__e = n.__e, t.__h = null, r = [_]), (h = ee.__b) && h(t);
  try {
    e:
      if (typeof v == "function") {
        if (p = t.props, m = (h = v.contextType) && o[h.__c], g = h ? m ? m.props.value : h.__ : o, n.__c ? y = (s = t.__c = n.__c).__ = s.__E : ("prototype" in v && v.prototype.render ? t.__c = s = new v(p, g) : (t.__c = s = new bo(p, g), s.constructor = v, s.render = sb), m && m.sub(s), s.props = p, s.state || (s.state = {}), s.context = g, s.__n = o, d = s.__d = !0, s.__h = [], s._sb = []), s.__s == null && (s.__s = s.state), v.getDerivedStateFromProps != null && (s.__s == s.state && (s.__s = xt({}, s.__s)), xt(s.__s, v.getDerivedStateFromProps(p, s.__s))), u = s.props, c = s.state, d)
          v.getDerivedStateFromProps == null && s.componentWillMount != null && s.componentWillMount(), s.componentDidMount != null && s.__h.push(s.componentDidMount);
        else {
          if (v.getDerivedStateFromProps == null && p !== u && s.componentWillReceiveProps != null && s.componentWillReceiveProps(p, g), !s.__e && s.shouldComponentUpdate != null && s.shouldComponentUpdate(p, s.__s, g) === !1 || t.__v === n.__v) {
            for (s.props = p, s.state = s.__s, t.__v !== n.__v && (s.__d = !1), s.__v = t, t.__e = n.__e, t.__k = n.__k, t.__k.forEach(function($) {
              $ && ($.__ = t);
            }), w = 0; w < s._sb.length; w++)
              s.__h.push(s._sb[w]);
            s._sb = [], s.__h.length && l.push(s);
            break e;
          }
          s.componentWillUpdate != null && s.componentWillUpdate(p, s.__s, g), s.componentDidUpdate != null && s.__h.push(function() {
            s.componentDidUpdate(u, c, f);
          });
        }
        if (s.context = g, s.props = p, s.__v = t, s.__P = e, k = ee.__r, T = 0, "prototype" in v && v.prototype.render) {
          for (s.state = s.__s, s.__d = !1, k && k(t), h = s.render(s.props, s.state, s.context), C = 0; C < s._sb.length; C++)
            s.__h.push(s._sb[C]);
          s._sb = [];
        } else
          do
            s.__d = !1, k && k(t), h = s.render(s.props, s.state, s.context), s.state = s.__s;
          while (s.__d && ++T < 25);
        s.state = s.__s, s.getChildContext != null && (o = xt(xt({}, o), s.getChildContext())), d || s.getSnapshotBeforeUpdate == null || (f = s.getSnapshotBeforeUpdate(u, c)), S = h != null && h.type === uc && h.key == null ? h.props.children : h, ep(e, Array.isArray(S) ? S : [S], t, n, o, i, r, l, _, a), s.base = t.__e, t.__h = null, s.__h.length && l.push(s), y && (s.__E = s.__ = null), s.__e = !1;
      } else
        r == null && t.__v === n.__v ? (t.__k = n.__k, t.__e = n.__e) : t.__e = rb(n.__e, t, n, o, i, r, l, a);
    (h = ee.diffed) && h(t);
  } catch ($) {
    t.__v = null, (a || r != null) && (t.__e = _, t.__h = !!a, r[r.indexOf(_)] = null), ee.__e($, t, n);
  }
}
function ob(e, t) {
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
function rb(e, t, n, o, i, r, l, _) {
  var a, h, s, d = n.props, u = t.props, c = t.type, f = 0;
  if (c === "svg" && (i = !0), r != null) {
    for (; f < r.length; f++)
      if ((a = r[f]) && "setAttribute" in a == !!c && (c ? a.localName === c : a.nodeType === 3)) {
        e = a, r[f] = null;
        break;
      }
  }
  if (e == null) {
    if (c === null)
      return document.createTextNode(u);
    e = i ? document.createElementNS("http://www.w3.org/2000/svg", c) : document.createElement(c, u.is && u), r = null, _ = !1;
  }
  if (c === null)
    d === u || _ && e.data === u || (e.data = u);
  else {
    if (r = r && _c.call(e.childNodes), h = (d = n.props || Xd).dangerouslySetInnerHTML, s = u.dangerouslySetInnerHTML, !_) {
      if (r != null)
        for (d = {}, f = 0; f < e.attributes.length; f++)
          d[e.attributes[f].name] = e.attributes[f].value;
      (s || h) && (s && (h && s.__html == h.__html || s.__html === e.innerHTML) || (e.innerHTML = s && s.__html || ""));
    }
    if (nb(e, u, d, i, _), s)
      t.__k = [];
    else if (f = t.props.children, ep(e, Array.isArray(f) ? f : [f], t, n, o, i && c !== "foreignObject", r, l, r ? r[0] : n.__k && Fo(n, 0), _), r != null)
      for (f = r.length; f--; )
        r[f] != null && Zd(r[f]);
    _ || ("value" in u && (f = u.value) !== void 0 && (f !== e.value || c === "progress" && !f || c === "option" && f !== d.value) && Rs(e, "value", f, d.value, !1), "checked" in u && (f = u.checked) !== void 0 && f !== e.checked && Rs(e, "checked", f, d.checked, !1));
  }
  return e;
}
function rp(e, t, n) {
  try {
    typeof e == "function" ? e(t) : e.current = t;
  } catch (o) {
    ee.__e(o, n);
  }
}
function sp(e, t, n) {
  var o, i;
  if (ee.unmount && ee.unmount(e), (o = e.ref) && (o.current && o.current !== e.__e || rp(o, null, t)), (o = e.__c) != null) {
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
      o[i] && sp(o[i], t, n || typeof e.type != "function");
  n || e.__e == null || Zd(e.__e), e.__ = e.__e = e.__d = void 0;
}
function sb(e, t, n) {
  return this.constructor(e, n);
}
_c = Jd.slice, ee = { __e: function(e, t, n, o) {
  for (var i, r, l; t = t.__; )
    if ((i = t.__c) && !i.__)
      try {
        if ((r = i.constructor) && r.getDerivedStateFromError != null && (i.setState(r.getDerivedStateFromError(e)), l = i.__d), i.componentDidCatch != null && (i.componentDidCatch(e, o || {}), l = i.__d), l)
          return i.__E = i;
      } catch (_) {
        e = _;
      }
  throw e;
} }, Yd = 0, Kd = function(e) {
  return e != null && e.constructor === void 0;
}, bo.prototype.setState = function(e, t) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = xt({}, this.state), typeof e == "function" && (e = e(xt({}, n), this.props)), e && xt(n, e), e != null && this.__v && (t && this._sb.push(t), ba(this));
}, bo.prototype.forceUpdate = function(e) {
  this.__v && (this.__e = !0, e && this.__h.push(e), ba(this));
}, bo.prototype.render = uc, vo = [], Ns.__r = 0;
var ib = 0;
function P(e, t, n, o, i) {
  var r, l, _ = {};
  for (l in t)
    l == "ref" ? r = t[l] : _[l] = t[l];
  var a = { type: e, props: _, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: --ib, __source: i, __self: o };
  if (typeof e == "function" && (r = e.defaultProps))
    for (l in r)
      _[l] === void 0 && (_[l] = r[l]);
  return ee.vnode && ee.vnode(a), a;
}
let lb = (e = 21) => crypto.getRandomValues(new Uint8Array(e)).reduce((t, n) => (n &= 63, n < 36 ? t += n.toString(36) : n < 62 ? t += (n - 26).toString(36).toUpperCase() : n > 62 ? t += "-" : t += "_", t), "");
var ip, te, lp, wo, xa, cp = {}, _p = [], cb = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function St(e, t) {
  for (var n in t)
    e[n] = t[n];
  return e;
}
function ap(e) {
  var t = e.parentNode;
  t && t.removeChild(e);
}
function rl(e, t, n, o, i) {
  var r = { type: e, props: t, key: n, ref: o, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: i ?? ++lp };
  return i == null && te.vnode != null && te.vnode(r), r;
}
function fc(e) {
  return e.children;
}
function ko(e, t) {
  this.props = e, this.context = t;
}
function jo(e, t) {
  if (t == null)
    return e.__ ? jo(e.__, e.__.__k.indexOf(e) + 1) : null;
  for (var n; t < e.__k.length; t++)
    if ((n = e.__k[t]) != null && n.__e != null)
      return n.__e;
  return typeof e.type == "function" ? jo(e) : null;
}
function up(e) {
  var t, n;
  if ((e = e.__) != null && e.__c != null) {
    for (e.__e = e.__c.base = null, t = 0; t < e.__k.length; t++)
      if ((n = e.__k[t]) != null && n.__e != null) {
        e.__e = e.__c.base = n.__e;
        break;
      }
    return up(e);
  }
}
function Sa(e) {
  (!e.__d && (e.__d = !0) && wo.push(e) && !Ms.__r++ || xa !== te.debounceRendering) && ((xa = te.debounceRendering) || setTimeout)(Ms);
}
function Ms() {
  for (var e; Ms.__r = wo.length; )
    e = wo.sort(function(t, n) {
      return t.__v.__b - n.__v.__b;
    }), wo = [], e.some(function(t) {
      var n, o, i, r, l, _;
      t.__d && (l = (r = (n = t).__v).__e, (_ = n.__P) && (o = [], (i = St({}, r)).__v = r.__v + 1, pp(_, r, i, n.__n, _.ownerSVGElement !== void 0, r.__h != null ? [l] : null, o, l ?? jo(r), r.__h), ab(o, r), r.__e != l && up(r)));
    });
}
function fp(e, t, n, o, i, r, l, _, a, h) {
  var s, d, u, c, f, y, p, m = o && o.__k || _p, g = m.length;
  for (n.__k = [], s = 0; s < t.length; s++)
    if ((c = n.__k[s] = (c = t[s]) == null || typeof c == "boolean" ? null : typeof c == "string" || typeof c == "number" || typeof c == "bigint" ? rl(null, c, null, null, c) : Array.isArray(c) ? rl(fc, { children: c }, null, null, null) : c.__b > 0 ? rl(c.type, c.props, c.key, c.ref ? c.ref : null, c.__v) : c) != null) {
      if (c.__ = n, c.__b = n.__b + 1, (u = m[s]) === null || u && c.key == u.key && c.type === u.type)
        m[s] = void 0;
      else
        for (d = 0; d < g; d++) {
          if ((u = m[d]) && c.key == u.key && c.type === u.type) {
            m[d] = void 0;
            break;
          }
          u = null;
        }
      pp(e, c, u = u || cp, i, r, l, _, a, h), f = c.__e, (d = c.ref) && u.ref != d && (p || (p = []), u.ref && p.push(u.ref, null, c), p.push(d, c.__c || f, c)), f != null ? (y == null && (y = f), typeof c.type == "function" && c.__k === u.__k ? c.__d = a = hp(c, a, e) : a = dp(e, c, u, m, f, a), typeof n.type == "function" && (n.__d = a)) : a && u.__e == a && a.parentNode != e && (a = jo(u));
    }
  for (n.__e = y, s = g; s--; )
    m[s] != null && gp(m[s], m[s]);
  if (p)
    for (s = 0; s < p.length; s++)
      mp(p[s], p[++s], p[++s]);
}
function hp(e, t, n) {
  for (var o, i = e.__k, r = 0; i && r < i.length; r++)
    (o = i[r]) && (o.__ = e, t = typeof o.type == "function" ? hp(o, t, n) : dp(n, o, o, i, o.__e, t));
  return t;
}
function dp(e, t, n, o, i, r) {
  var l, _, a;
  if (t.__d !== void 0)
    l = t.__d, t.__d = void 0;
  else if (n == null || i != r || i.parentNode == null)
    e:
      if (r == null || r.parentNode !== e)
        e.appendChild(i), l = null;
      else {
        for (_ = r, a = 0; (_ = _.nextSibling) && a < o.length; a += 2)
          if (_ == i)
            break e;
        e.insertBefore(i, r), l = r;
      }
  return l !== void 0 ? l : i.nextSibling;
}
function _b(e, t, n, o, i) {
  var r;
  for (r in n)
    r === "children" || r === "key" || r in t || Ps(e, r, null, n[r], o);
  for (r in t)
    i && typeof t[r] != "function" || r === "children" || r === "key" || r === "value" || r === "checked" || n[r] === t[r] || Ps(e, r, t[r], n[r], o);
}
function Ca(e, t, n) {
  t[0] === "-" ? e.setProperty(t, n) : e[t] = n == null ? "" : typeof n != "number" || cb.test(t) ? n : n + "px";
}
function Ps(e, t, n, o, i) {
  var r;
  e:
    if (t === "style")
      if (typeof n == "string")
        e.style.cssText = n;
      else {
        if (typeof o == "string" && (e.style.cssText = o = ""), o)
          for (t in o)
            n && t in n || Ca(e.style, t, "");
        if (n)
          for (t in n)
            o && n[t] === o[t] || Ca(e.style, t, n[t]);
      }
    else if (t[0] === "o" && t[1] === "n")
      r = t !== (t = t.replace(/Capture$/, "")), t = t.toLowerCase() in e ? t.toLowerCase().slice(2) : t.slice(2), e.l || (e.l = {}), e.l[t + r] = n, n ? o || e.addEventListener(t, r ? Ta : Ea, r) : e.removeEventListener(t, r ? Ta : Ea, r);
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
function Ea(e) {
  this.l[e.type + !1](te.event ? te.event(e) : e);
}
function Ta(e) {
  this.l[e.type + !0](te.event ? te.event(e) : e);
}
function pp(e, t, n, o, i, r, l, _, a) {
  var h, s, d, u, c, f, y, p, m, g, w, k, T, C, S, v = t.type;
  if (t.constructor !== void 0)
    return null;
  n.__h != null && (a = n.__h, _ = t.__e = n.__e, t.__h = null, r = [_]), (h = te.__b) && h(t);
  try {
    e:
      if (typeof v == "function") {
        if (p = t.props, m = (h = v.contextType) && o[h.__c], g = h ? m ? m.props.value : h.__ : o, n.__c ? y = (s = t.__c = n.__c).__ = s.__E : ("prototype" in v && v.prototype.render ? t.__c = s = new v(p, g) : (t.__c = s = new ko(p, g), s.constructor = v, s.render = fb), m && m.sub(s), s.props = p, s.state || (s.state = {}), s.context = g, s.__n = o, d = s.__d = !0, s.__h = [], s._sb = []), s.__s == null && (s.__s = s.state), v.getDerivedStateFromProps != null && (s.__s == s.state && (s.__s = St({}, s.__s)), St(s.__s, v.getDerivedStateFromProps(p, s.__s))), u = s.props, c = s.state, d)
          v.getDerivedStateFromProps == null && s.componentWillMount != null && s.componentWillMount(), s.componentDidMount != null && s.__h.push(s.componentDidMount);
        else {
          if (v.getDerivedStateFromProps == null && p !== u && s.componentWillReceiveProps != null && s.componentWillReceiveProps(p, g), !s.__e && s.shouldComponentUpdate != null && s.shouldComponentUpdate(p, s.__s, g) === !1 || t.__v === n.__v) {
            for (s.props = p, s.state = s.__s, t.__v !== n.__v && (s.__d = !1), s.__v = t, t.__e = n.__e, t.__k = n.__k, t.__k.forEach(function($) {
              $ && ($.__ = t);
            }), w = 0; w < s._sb.length; w++)
              s.__h.push(s._sb[w]);
            s._sb = [], s.__h.length && l.push(s);
            break e;
          }
          s.componentWillUpdate != null && s.componentWillUpdate(p, s.__s, g), s.componentDidUpdate != null && s.__h.push(function() {
            s.componentDidUpdate(u, c, f);
          });
        }
        if (s.context = g, s.props = p, s.__v = t, s.__P = e, k = te.__r, T = 0, "prototype" in v && v.prototype.render) {
          for (s.state = s.__s, s.__d = !1, k && k(t), h = s.render(s.props, s.state, s.context), C = 0; C < s._sb.length; C++)
            s.__h.push(s._sb[C]);
          s._sb = [];
        } else
          do
            s.__d = !1, k && k(t), h = s.render(s.props, s.state, s.context), s.state = s.__s;
          while (s.__d && ++T < 25);
        s.state = s.__s, s.getChildContext != null && (o = St(St({}, o), s.getChildContext())), d || s.getSnapshotBeforeUpdate == null || (f = s.getSnapshotBeforeUpdate(u, c)), S = h != null && h.type === fc && h.key == null ? h.props.children : h, fp(e, Array.isArray(S) ? S : [S], t, n, o, i, r, l, _, a), s.base = t.__e, t.__h = null, s.__h.length && l.push(s), y && (s.__E = s.__ = null), s.__e = !1;
      } else
        r == null && t.__v === n.__v ? (t.__k = n.__k, t.__e = n.__e) : t.__e = ub(n.__e, t, n, o, i, r, l, a);
    (h = te.diffed) && h(t);
  } catch ($) {
    t.__v = null, (a || r != null) && (t.__e = _, t.__h = !!a, r[r.indexOf(_)] = null), te.__e($, t, n);
  }
}
function ab(e, t) {
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
function ub(e, t, n, o, i, r, l, _) {
  var a, h, s, d = n.props, u = t.props, c = t.type, f = 0;
  if (c === "svg" && (i = !0), r != null) {
    for (; f < r.length; f++)
      if ((a = r[f]) && "setAttribute" in a == !!c && (c ? a.localName === c : a.nodeType === 3)) {
        e = a, r[f] = null;
        break;
      }
  }
  if (e == null) {
    if (c === null)
      return document.createTextNode(u);
    e = i ? document.createElementNS("http://www.w3.org/2000/svg", c) : document.createElement(c, u.is && u), r = null, _ = !1;
  }
  if (c === null)
    d === u || _ && e.data === u || (e.data = u);
  else {
    if (r = r && ip.call(e.childNodes), h = (d = n.props || cp).dangerouslySetInnerHTML, s = u.dangerouslySetInnerHTML, !_) {
      if (r != null)
        for (d = {}, f = 0; f < e.attributes.length; f++)
          d[e.attributes[f].name] = e.attributes[f].value;
      (s || h) && (s && (h && s.__html == h.__html || s.__html === e.innerHTML) || (e.innerHTML = s && s.__html || ""));
    }
    if (_b(e, u, d, i, _), s)
      t.__k = [];
    else if (f = t.props.children, fp(e, Array.isArray(f) ? f : [f], t, n, o, i && c !== "foreignObject", r, l, r ? r[0] : n.__k && jo(n, 0), _), r != null)
      for (f = r.length; f--; )
        r[f] != null && ap(r[f]);
    _ || ("value" in u && (f = u.value) !== void 0 && (f !== e.value || c === "progress" && !f || c === "option" && f !== d.value) && Ps(e, "value", f, d.value, !1), "checked" in u && (f = u.checked) !== void 0 && f !== e.checked && Ps(e, "checked", f, d.checked, !1));
  }
  return e;
}
function mp(e, t, n) {
  try {
    typeof e == "function" ? e(t) : e.current = t;
  } catch (o) {
    te.__e(o, n);
  }
}
function gp(e, t, n) {
  var o, i;
  if (te.unmount && te.unmount(e), (o = e.ref) && (o.current && o.current !== e.__e || mp(o, null, t)), (o = e.__c) != null) {
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
      o[i] && gp(o[i], t, n || typeof e.type != "function");
  n || e.__e == null || ap(e.__e), e.__ = e.__e = e.__d = void 0;
}
function fb(e, t, n) {
  return this.constructor(e, n);
}
ip = _p.slice, te = { __e: function(e, t, n, o) {
  for (var i, r, l; t = t.__; )
    if ((i = t.__c) && !i.__)
      try {
        if ((r = i.constructor) && r.getDerivedStateFromError != null && (i.setState(r.getDerivedStateFromError(e)), l = i.__d), i.componentDidCatch != null && (i.componentDidCatch(e, o || {}), l = i.__d), l)
          return i.__E = i;
      } catch (_) {
        e = _;
      }
  throw e;
} }, lp = 0, ko.prototype.setState = function(e, t) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = St({}, this.state), typeof e == "function" && (e = e(St({}, n), this.props)), e && St(n, e), e != null && this.__v && (t && this._sb.push(t), Sa(this));
}, ko.prototype.forceUpdate = function(e) {
  this.__v && (this.__e = !0, e && this.__h.push(e), Sa(this));
}, ko.prototype.render = fc, wo = [], Ms.__r = 0;
var hb = 0;
function Aa(e, t, n, o, i) {
  var r, l, _ = {};
  for (l in t)
    l == "ref" ? r = t[l] : _[l] = t[l];
  var a = { type: e, props: _, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: --hb, __source: i, __self: o };
  if (typeof e == "function" && (r = e.defaultProps))
    for (l in r)
      _[l] === void 0 && (_[l] = r[l]);
  return te.vnode && te.vnode(a), a;
}
var Bt, zt;
class La extends ko {
  constructor(n) {
    super(n);
    x(this, Bt, 0);
    x(this, zt, null);
    E(this, "_handleWheel", (n) => {
      const { wheelContainer: o } = this.props, i = n.target;
      if (!(!i || !o) && (typeof o == "string" && i.closest(o) || typeof o == "object")) {
        const r = (this.props.type === "horz" ? n.deltaX : n.deltaY) * (this.props.wheelSpeed ?? 1);
        this.scrollOffset(r) && n.preventDefault();
      }
    });
    E(this, "_handleMouseMove", (n) => {
      const { dragStart: o } = this.state;
      o && (b(this, Bt) && cancelAnimationFrame(b(this, Bt)), L(this, Bt, requestAnimationFrame(() => {
        const i = this.props.type === "horz" ? n.clientX - o.x : n.clientY - o.y;
        this.scroll(o.offset + i * this.props.scrollSize / this.props.clientSize), L(this, Bt, 0);
      })), n.preventDefault());
    });
    E(this, "_handleMouseUp", () => {
      this.state.dragStart && this.setState({
        dragStart: !1
      });
    });
    E(this, "_handleMouseDown", (n) => {
      this.state.dragStart || this.setState({ dragStart: { x: n.clientX, y: n.clientY, offset: this.scrollPos } }), n.stopPropagation();
    });
    E(this, "_handleClick", (n) => {
      const o = n.currentTarget;
      if (!o)
        return;
      const i = o.getBoundingClientRect(), { type: r, clientSize: l, scrollSize: _ } = this.props, a = (r === "horz" ? n.clientX - i.left : n.clientY - i.top) - this.barSize / 2;
      this.scroll(a * _ / l), n.preventDefault();
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
    n && (L(this, zt, typeof n == "string" ? document : n.current), b(this, zt).addEventListener("wheel", this._handleWheel, { passive: !1 }));
  }
  componentWillUnmount() {
    document.removeEventListener("mousemove", this._handleMouseMove), document.removeEventListener("mouseup", this._handleMouseUp), b(this, zt) && b(this, zt).removeEventListener("wheel", this._handleWheel);
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
      left: _,
      top: a,
      bottom: h,
      right: s
    } = this.props, { maxScrollPos: d, scrollPos: u } = this, { dragStart: c } = this.state, f = {
      left: _,
      top: a,
      bottom: h,
      right: s,
      ...l
    }, y = {};
    return o === "horz" ? (f.height = i, f.width = n, y.width = this.barSize, y.left = Math.round(Math.min(d, u) * (n - y.width) / d)) : (f.width = i, f.height = n, y.height = this.barSize, y.top = Math.round(Math.min(d, u) * (n - y.height) / d)), /* @__PURE__ */ Aa(
      "div",
      {
        className: M("scrollbar", r, {
          "is-vert": o === "vert",
          "is-horz": o === "horz",
          "is-dragging": c
        }),
        style: f,
        onMouseDown: this._handleClick,
        children: /* @__PURE__ */ Aa(
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
Bt = new WeakMap(), zt = new WeakMap();
function Na(e, t, n) {
  return e && (t && (e = Math.max(t, e)), n && (e = Math.min(n, e))), e;
}
function yp({ col: e, className: t, height: n, row: o, onRenderCell: i, style: r, outerStyle: l, children: _, outerClass: a, ...h }) {
  var v;
  const s = {
    left: e.left,
    width: e.realWidth,
    height: n,
    ...l
  }, { align: d, border: u } = e.setting, c = {
    justifyContent: d ? d === "left" ? "start" : d === "right" ? "end" : d : void 0,
    ...e.setting.cellStyle,
    ...r
  }, f = ["dtable-cell", a, e.setting.className, {
    "has-border-left": u === !0 || u === "left",
    "has-border-right": u === !0 || u === "right"
  }], y = ["dtable-cell-content", t], p = [_ ?? ((v = o.data) == null ? void 0 : v[e.name]) ?? ""], m = i ? i(p, { row: o, col: e }, ac) : p, g = [], w = [], k = {}, T = {};
  let C = "div";
  m == null || m.forEach(($) => {
    if (typeof $ == "object" && $ && !Kd($) && ("html" in $ || "className" in $ || "style" in $ || "attrs" in $ || "children" in $ || "tagName" in $)) {
      const O = $.outer ? g : w;
      $.html ? O.push(/* @__PURE__ */ P("div", { className: M("dtable-cell-html", $.className), style: $.style, dangerouslySetInnerHTML: { __html: $.html }, ...$.attrs ?? {} })) : ($.style && Object.assign($.outer ? s : c, $.style), $.className && ($.outer ? f : y).push($.className), $.children && O.push($.children), $.attrs && Object.assign($.outer ? k : T, $.attrs)), $.tagName && !$.outer && (C = $.tagName);
    } else
      w.push($);
  });
  const S = C;
  return /* @__PURE__ */ P(
    "div",
    {
      className: M(f),
      style: s,
      "data-col": e.name,
      ...h,
      ...k,
      children: [
        w.length > 0 && /* @__PURE__ */ P(S, { className: M(y), style: c, ...T, children: w }),
        g
      ]
    }
  );
}
function sl({ row: e, className: t, top: n = 0, left: o = 0, width: i, height: r, cols: l, CellComponent: _ = yp, onRenderCell: a }) {
  return /* @__PURE__ */ P("div", { className: M("dtable-cells", t), style: { top: n, left: o, width: i, height: r }, children: l.map((h) => h.visible ? /* @__PURE__ */ P(
    _,
    {
      col: h,
      row: e,
      onRenderCell: a
    },
    h.name
  ) : null) });
}
function vp({
  row: e,
  className: t,
  top: n,
  height: o,
  fixedLeftCols: i,
  fixedRightCols: r,
  scrollCols: l,
  fixedLeftWidth: _,
  scrollWidth: a,
  scrollColsWidth: h,
  fixedRightWidth: s,
  scrollLeft: d,
  CellComponent: u = yp,
  onRenderCell: c,
  style: f,
  ...y
}) {
  let p = null;
  i != null && i.length && (p = /* @__PURE__ */ P(
    sl,
    {
      className: "dtable-fixed-left",
      cols: i,
      width: _,
      row: e,
      CellComponent: u,
      onRenderCell: c
    }
  ));
  let m = null;
  l != null && l.length && (m = /* @__PURE__ */ P(
    sl,
    {
      className: "dtable-flexable",
      cols: l,
      left: _ - d,
      width: Math.max(a, h),
      row: e,
      CellComponent: u,
      onRenderCell: c
    }
  ));
  let g = null;
  r != null && r.length && (g = /* @__PURE__ */ P(
    sl,
    {
      className: "dtable-fixed-right",
      cols: r,
      left: _ + a,
      width: s,
      row: e,
      CellComponent: u,
      onRenderCell: c
    }
  ));
  const w = { top: n, height: o, lineHeight: `${o - 2}px`, ...f };
  return /* @__PURE__ */ P(
    "div",
    {
      className: M("dtable-row", t),
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
function db({ height: e, onRenderRow: t, ...n }) {
  const o = {
    height: e,
    ...n,
    row: { id: "HEADER", index: -1, top: 0 },
    className: "dtable-in-header",
    top: 0
  };
  if (t) {
    const i = t({ props: o }, ac);
    i && Object.assign(o, i);
  }
  return /* @__PURE__ */ P("div", { className: "dtable-header", style: { height: e }, children: /* @__PURE__ */ P(vp, { ...o }) });
}
function pb({
  className: e,
  style: t,
  top: n,
  rows: o,
  height: i,
  rowHeight: r,
  scrollTop: l,
  onRenderRow: _,
  ...a
}) {
  return t = { ...t, top: n, height: i }, /* @__PURE__ */ P("div", { className: M("dtable-rows", e), style: t, children: o.map((h) => {
    const s = {
      className: `dtable-row-${h.index % 2 ? "odd" : "even"}`,
      row: h,
      top: h.top - l,
      height: r,
      ...a
    }, d = _ == null ? void 0 : _({ props: s, row: h }, ac);
    return d && Object.assign(s, d), /* @__PURE__ */ P(vp, { ...s });
  }) });
}
const Ds = /* @__PURE__ */ new Map(), Hs = [];
function bp(e, t) {
  const { name: n } = e;
  if (!(t != null && t.override) && Ds.has(n))
    throw new Error(`DTable: Plugin with name ${n} already exists`);
  Ds.set(n, e), t != null && t.buildIn && !Hs.includes(n) && Hs.push(n);
}
function Nn(e, t) {
  bp(e, t);
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
function wp(e) {
  return Ds.delete(e);
}
function mb(e) {
  if (typeof e == "string") {
    const t = Ds.get(e);
    return t || console.warn(`DTable: Cannot found plugin "${e}"`), t;
  }
  if (typeof e == "function" && "plugin" in e)
    return e.plugin;
  if (typeof e == "object")
    return e;
  console.warn("DTable: Invalid plugin", e);
}
function kp(e, t, n) {
  return t.forEach((o) => {
    var r;
    if (!o)
      return;
    const i = mb(o);
    i && (n.has(i.name) || ((r = i.plugins) != null && r.length && kp(e, i.plugins, n), e.push(i), n.add(i.name)));
  }), e;
}
function gb(e = [], t = !0) {
  return t && Hs.length && e.unshift(...Hs), e != null && e.length ? kp([], e, /* @__PURE__ */ new Set()) : [];
}
function Ra() {
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
var Cr, Vt, $n, at, Pe, ut, le, Ee, De, xn, _r, ar, Xe, Sn, Cn, di, $p, pi, xp, mi, Sp, gi, Cp, ur, Cl, yi, vi, fr, hr, bi, wi, ki, Ep, $i, Tp, xi, Ap;
let yb = (Cr = class extends bo {
  constructor(n) {
    super(n);
    x(this, di);
    x(this, pi);
    x(this, mi);
    x(this, gi);
    x(this, ur);
    x(this, ki);
    x(this, $i);
    x(this, xi);
    E(this, "ref", tb());
    x(this, Vt, 0);
    x(this, $n, void 0);
    x(this, at, !1);
    x(this, Pe, void 0);
    x(this, ut, void 0);
    x(this, le, []);
    x(this, Ee, void 0);
    x(this, De, /* @__PURE__ */ new Map());
    x(this, xn, {});
    x(this, _r, void 0);
    x(this, ar, []);
    E(this, "updateLayout", () => {
      b(this, Vt) && cancelAnimationFrame(b(this, Vt)), L(this, Vt, requestAnimationFrame(() => {
        L(this, Ee, void 0), this.forceUpdate(), L(this, Vt, 0);
      }));
    });
    x(this, Xe, (n, o) => {
      o = o || n.type;
      const i = b(this, De).get(o);
      if (i != null && i.length) {
        for (const r of i)
          if (r.call(this, n) === !1) {
            n.stopPropagation(), n.preventDefault();
            break;
          }
      }
    });
    x(this, Sn, (n) => {
      b(this, Xe).call(this, n, `window_${n.type}`);
    });
    x(this, Cn, (n) => {
      b(this, Xe).call(this, n, `document_${n.type}`);
    });
    x(this, yi, (n, o) => {
      if (this.options.onRenderRow) {
        const i = this.options.onRenderRow.call(this, n, o);
        i && Object.assign(n.props, i);
      }
      return b(this, le).forEach((i) => {
        if (i.onRenderRow) {
          const r = i.onRenderRow.call(this, n, o);
          r && Object.assign(n.props, r);
        }
      }), n.props;
    });
    x(this, vi, (n, o) => (this.options.onRenderHeaderRow && (n.props = this.options.onRenderHeaderRow.call(this, n, o)), b(this, le).forEach((i) => {
      i.onRenderHeaderRow && (n.props = i.onRenderHeaderRow.call(this, n, o));
    }), n.props));
    x(this, fr, (n, o, i) => {
      const { row: r, col: l } = o;
      n[0] = this.getCellValue(r, l);
      const _ = r.id === "HEADER" ? "onRenderHeaderCell" : "onRenderCell";
      return l.setting[_] && (n = l.setting[_].call(this, n, o, i)), this.options[_] && (n = this.options[_].call(this, n, o, i)), b(this, le).forEach((a) => {
        a[_] && (n = a[_].call(this, n, o, i));
      }), n;
    });
    x(this, hr, (n, o) => {
      o === "horz" ? this.scroll({ scrollLeft: n }) : this.scroll({ scrollTop: n });
    });
    x(this, bi, (n) => {
      var _, a, h, s, d;
      const o = this.getPointerInfo(n);
      if (!o)
        return;
      const { rowID: i, colName: r, cellElement: l } = o;
      if (i === "HEADER")
        l && ((_ = this.options.onHeaderCellClick) == null || _.call(this, n, { colName: r, element: l }), b(this, le).forEach((u) => {
          var c;
          (c = u.onHeaderCellClick) == null || c.call(this, n, { colName: r, element: l });
        }));
      else {
        const { rowElement: u } = o, c = this.layout.visibleRows.find((f) => f.id === i);
        if (l) {
          if (((a = this.options.onCellClick) == null ? void 0 : a.call(this, n, { colName: r, rowID: i, rowInfo: c, element: l, rowElement: u })) === !0)
            return;
          for (const f of b(this, le))
            if (((h = f.onCellClick) == null ? void 0 : h.call(this, n, { colName: r, rowID: i, rowInfo: c, element: l, rowElement: u })) === !0)
              return;
        }
        if (((s = this.options.onRowClick) == null ? void 0 : s.call(this, n, { rowID: i, rowInfo: c, element: u })) === !0)
          return;
        for (const f of b(this, le))
          if (((d = f.onRowClick) == null ? void 0 : d.call(this, n, { rowID: i, rowInfo: c, element: u })) === !0)
            return;
      }
    });
    x(this, wi, (n) => {
      const o = n.key.toLowerCase();
      if (["pageup", "pagedown", "home", "end"].includes(o))
        return !this.scroll({ to: o.replace("page", "") });
    });
    L(this, $n, n.id ?? `dtable-${lb(10)}`), this.state = { scrollTop: 0, scrollLeft: 0, renderCount: 0 }, L(this, ut, Object.freeze(gb(n.plugins))), b(this, ut).forEach((o) => {
      var _;
      const { methods: i, data: r, state: l } = o;
      i && Object.entries(i).forEach(([a, h]) => {
        typeof h == "function" && Object.assign(this, { [a]: h.bind(this) });
      }), r && Object.assign(b(this, xn), r.call(this)), l && Object.assign(this.state, l.call(this)), (_ = o.onCreate) == null || _.call(this, o);
    });
  }
  get options() {
    var n;
    return ((n = b(this, Ee)) == null ? void 0 : n.options) || b(this, Pe) || Ra();
  }
  get plugins() {
    return b(this, le);
  }
  get layout() {
    return b(this, Ee);
  }
  get id() {
    return b(this, $n);
  }
  get data() {
    return b(this, xn);
  }
  get parent() {
    var n;
    return this.props.parent ?? ((n = this.ref.current) == null ? void 0 : n.parentElement);
  }
  componentWillReceiveProps() {
    L(this, Pe, void 0);
  }
  componentDidMount() {
    if (b(this, at) ? this.forceUpdate() : N(this, ur, Cl).call(this), b(this, le).forEach((n) => {
      let { events: o } = n;
      o && (typeof o == "function" && (o = o.call(this)), Object.entries(o).forEach(([i, r]) => {
        r && this.on(i, r);
      }));
    }), this.on("click", b(this, bi)), this.on("keydown", b(this, wi)), this.options.responsive) {
      if (typeof ResizeObserver < "u") {
        const { parent: n } = this;
        if (n) {
          const o = new ResizeObserver(this.updateLayout);
          o.observe(n), L(this, _r, o);
        }
      }
      this.on("window_resize", this.updateLayout);
    }
    b(this, le).forEach((n) => {
      var o;
      (o = n.onMounted) == null || o.call(this);
    });
  }
  componentDidUpdate() {
    b(this, at) ? N(this, ur, Cl).call(this) : b(this, le).forEach((n) => {
      var o;
      (o = n.onUpdated) == null || o.call(this);
    });
  }
  componentWillUnmount() {
    var o;
    (o = b(this, _r)) == null || o.disconnect();
    const { current: n } = this.ref;
    if (n)
      for (const i of b(this, De).keys())
        i.startsWith("window_") ? window.removeEventListener(i.replace("window_", ""), b(this, Sn)) : i.startsWith("document_") ? document.removeEventListener(i.replace("document_", ""), b(this, Cn)) : n.removeEventListener(i, b(this, Xe));
    b(this, le).forEach((i) => {
      var r;
      (r = i.onUnmounted) == null || r.call(this);
    }), b(this, ut).forEach((i) => {
      var r;
      (r = i.onDestory) == null || r.call(this);
    }), L(this, xn, {}), b(this, De).clear();
  }
  on(n, o, i) {
    var l;
    i && (n = `${i}_${n}`);
    const r = b(this, De).get(n);
    r ? r.push(o) : (b(this, De).set(n, [o]), n.startsWith("window_") ? window.addEventListener(n.replace("window_", ""), b(this, Sn)) : n.startsWith("document_") ? document.addEventListener(n.replace("document_", ""), b(this, Cn)) : (l = this.ref.current) == null || l.addEventListener(n, b(this, Xe)));
  }
  off(n, o, i) {
    var _;
    i && (n = `${i}_${n}`);
    const r = b(this, De).get(n);
    if (!r)
      return;
    const l = r.indexOf(o);
    l >= 0 && r.splice(l, 1), r.length || (b(this, De).delete(n), n.startsWith("window_") ? window.removeEventListener(n.replace("window_", ""), b(this, Sn)) : n.startsWith("document_") ? document.removeEventListener(n.replace("document_", ""), b(this, Cn)) : (_ = this.ref.current) == null || _.removeEventListener(n, b(this, Xe)));
  }
  emitCustomEvent(n, o) {
    b(this, Xe).call(this, o instanceof Event ? o : new CustomEvent(n, { detail: o }), n);
  }
  scroll(n, o) {
    const { scrollLeft: i, scrollTop: r, rowsHeightTotal: l, rowsHeight: _, rowHeight: a, colsInfo: { scrollWidth: h, scrollColsWidth: s } } = this.layout, { to: d } = n;
    let { scrollLeft: u, scrollTop: c } = n;
    if (d === "up" || d === "down")
      c = r + (d === "down" ? 1 : -1) * Math.floor(_ / a) * a;
    else if (d === "left" || d === "right")
      u = i + (d === "right" ? 1 : -1) * h;
    else if (d === "home")
      c = 0;
    else if (d === "end")
      c = l - _;
    else if (d === "left-begin")
      u = 0;
    else if (d === "right-end")
      u = s - h;
    else {
      const { offsetLeft: y, offsetTop: p } = n;
      typeof y == "number" && (u = i + y), typeof p == "number" && (u = r + p);
    }
    const f = {};
    return typeof u == "number" && (u = Math.max(0, Math.min(u, s - h)), u !== i && (f.scrollLeft = u)), typeof c == "number" && (c = Math.max(0, Math.min(c, l - _)), c !== r && (f.scrollTop = c)), Object.keys(f).length ? (this.setState(f, () => {
      var y;
      (y = this.options.onScroll) == null || y.call(this, f), o == null || o.call(this, !0);
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
    var a;
    const i = typeof n == "object" ? n : this.getRowInfo(n);
    if (!i)
      return;
    const r = typeof o == "object" ? o : this.getColInfo(o);
    if (!r)
      return;
    let l = i.id === "HEADER" ? r.setting.title : (a = i.data) == null ? void 0 : a[r.name];
    const { cellValueGetter: _ } = this.options;
    return _ && (l = _.call(this, i, r, l)), l;
  }
  getRowInfoByIndex(n) {
    return this.layout.rows[n];
  }
  update(n = {}, o) {
    if (!b(this, Pe))
      return;
    typeof n == "function" && (o = n, n = {});
    const { dirtyType: i, state: r } = n;
    if (i === "layout")
      L(this, Ee, void 0);
    else if (i === "options") {
      if (L(this, Pe, void 0), !b(this, Ee))
        return;
      L(this, Ee, void 0);
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
    const l = i == null ? void 0 : i.getAttribute("data-col"), _ = r == null ? void 0 : r.getAttribute("data-id");
    if (!(typeof l != "string" || typeof _ != "string"))
      return {
        cellElement: i,
        rowElement: r,
        colName: l,
        rowID: _,
        target: o
      };
  }
  i18n(n, o, i) {
    return dr(b(this, ar), n, o, i, this.options.lang) ?? `{i18n:${n}}`;
  }
  render() {
    const n = N(this, xi, Ap).call(this), { className: o, rowHover: i, colHover: r, cellHover: l, bordered: _, striped: a, scrollbarHover: h } = this.options, s = { width: n == null ? void 0 : n.width, height: n == null ? void 0 : n.height }, d = ["dtable", o, {
      "dtable-hover-row": i,
      "dtable-hover-col": r,
      "dtable-hover-cell": l,
      "dtable-bordered": _,
      "dtable-striped": a,
      "dtable-scrolled-down": ((n == null ? void 0 : n.scrollTop) ?? 0) > 0,
      "scrollbar-hover": h
    }], u = [];
    return n && b(this, le).forEach((c) => {
      var y;
      const f = (y = c.onRender) == null ? void 0 : y.call(this, n);
      f && (f.style && Object.assign(s, f.style), f.className && d.push(f.className), f.children && u.push(f.children));
    }), /* @__PURE__ */ P(
      "div",
      {
        id: b(this, $n),
        className: M(d),
        style: s,
        ref: this.ref,
        tabIndex: -1,
        children: [
          n && N(this, di, $p).call(this, n),
          n && N(this, pi, xp).call(this, n),
          n && N(this, mi, Sp).call(this, n),
          n && N(this, gi, Cp).call(this, n)
        ]
      }
    );
  }
}, Vt = new WeakMap(), $n = new WeakMap(), at = new WeakMap(), Pe = new WeakMap(), ut = new WeakMap(), le = new WeakMap(), Ee = new WeakMap(), De = new WeakMap(), xn = new WeakMap(), _r = new WeakMap(), ar = new WeakMap(), Xe = new WeakMap(), Sn = new WeakMap(), Cn = new WeakMap(), di = new WeakSet(), $p = function(n) {
  const { header: o, colsInfo: i, headerHeight: r, scrollLeft: l } = n;
  if (!o)
    return null;
  if (o === !0)
    return /* @__PURE__ */ P(
      db,
      {
        scrollLeft: l,
        height: r,
        onRenderCell: b(this, fr),
        onRenderRow: b(this, vi),
        ...i
      }
    );
  const _ = Array.isArray(o) ? o : [o];
  return /* @__PURE__ */ P(
    fl,
    {
      className: "dtable-header",
      style: { height: r },
      renders: _,
      generateArgs: [n],
      generatorThis: this
    }
  );
}, pi = new WeakSet(), xp = function(n) {
  const { headerHeight: o, rowsHeight: i, visibleRows: r, rowHeight: l, colsInfo: _, scrollLeft: a, scrollTop: h } = n;
  return /* @__PURE__ */ P(
    pb,
    {
      top: o,
      height: i,
      rows: r,
      rowHeight: l,
      scrollLeft: a,
      scrollTop: h,
      onRenderCell: b(this, fr),
      onRenderRow: b(this, yi),
      ..._
    }
  );
}, mi = new WeakSet(), Sp = function(n) {
  const { footer: o } = n;
  if (!o)
    return null;
  const i = typeof o == "function" ? o.call(this, n) : Array.isArray(o) ? o : [o];
  return /* @__PURE__ */ P(
    fl,
    {
      className: "dtable-footer",
      style: { height: n.footerHeight, top: n.rowsHeight + n.headerHeight },
      renders: i,
      generateArgs: [n],
      generatorThis: this,
      generators: n.footerGenerators
    }
  );
}, gi = new WeakSet(), Cp = function(n) {
  const o = [], { scrollLeft: i, colsInfo: r, scrollTop: l, rowsHeight: _, rowsHeightTotal: a, footerHeight: h } = n, { scrollColsWidth: s, scrollWidth: d } = r, { scrollbarSize: u = 12, horzScrollbarPos: c } = this.options;
  return s > d && o.push(
    /* @__PURE__ */ P(
      La,
      {
        type: "horz",
        scrollPos: i,
        scrollSize: s,
        clientSize: d,
        onScroll: b(this, hr),
        left: r.fixedLeftWidth,
        bottom: (c === "inside" ? 0 : -u) + h,
        size: u,
        wheelContainer: this.ref
      },
      "horz"
    )
  ), a > _ && o.push(
    /* @__PURE__ */ P(
      La,
      {
        type: "vert",
        scrollPos: l,
        scrollSize: a,
        clientSize: _,
        onScroll: b(this, hr),
        right: 0,
        size: u,
        top: n.headerHeight,
        wheelContainer: this.ref
      },
      "vert"
    )
  ), o.length ? o : null;
}, ur = new WeakSet(), Cl = function() {
  var n;
  L(this, at, !1), (n = this.options.afterRender) == null || n.call(this), b(this, le).forEach((o) => {
    var i;
    return (i = o.afterRender) == null ? void 0 : i.call(this);
  });
}, yi = new WeakMap(), vi = new WeakMap(), fr = new WeakMap(), hr = new WeakMap(), bi = new WeakMap(), wi = new WeakMap(), ki = new WeakSet(), Ep = function() {
  if (b(this, Pe))
    return !1;
  const o = { ...Ra(), ...b(this, ut).reduce((i, r) => {
    const { defaultOptions: l } = r;
    return l && Object.assign(i, l), i;
  }, {}), ...this.props };
  return L(this, Pe, o), L(this, le, b(this, ut).reduce((i, r) => {
    const { when: l, options: _ } = r;
    return (!l || l(o)) && (i.push(r), _ && Object.assign(o, typeof _ == "function" ? _.call(this, o) : _)), i;
  }, [])), L(this, ar, [this.options.i18n, ...this.plugins.map((i) => i.i18n)].filter(Boolean)), !0;
}, $i = new WeakSet(), Tp = function() {
  var mc, gc;
  const { plugins: n } = this;
  let o = b(this, Pe);
  const i = {
    flex: /* @__PURE__ */ P("div", { style: "flex:auto" }),
    divider: /* @__PURE__ */ P("div", { style: "width:1px;margin:var(--space);background:var(--color-border);height:50%" })
  };
  n.forEach((D) => {
    var je;
    const re = (je = D.beforeLayout) == null ? void 0 : je.call(this, o);
    re && (o = { ...o, ...re }), Object.assign(i, D.footer);
  });
  const { defaultColWidth: r, minColWidth: l, maxColWidth: _ } = o, a = [], h = [], s = [], d = {}, u = [], c = [];
  let f = 0, y = 0, p = 0;
  o.cols.forEach((D) => {
    if (D.hidden)
      return;
    const {
      name: re,
      type: je = "",
      fixed: Be = !1,
      flex: Ot = !1,
      width: Rn = r,
      minWidth: Mn = l,
      maxWidth: Bi = _,
      ...Hp
    } = D, I = {
      name: re,
      type: je,
      setting: {
        name: re,
        type: je,
        fixed: Be,
        flex: Ot,
        width: Rn,
        minWidth: Mn,
        maxWidth: Bi,
        ...Hp
      },
      flex: Be ? 0 : Ot === !0 ? 1 : typeof Ot == "number" ? Ot : 0,
      left: 0,
      width: Na(Rn, Mn, Bi),
      realWidth: 0,
      visible: !0,
      index: u.length
    };
    n.forEach((yc) => {
      var vc, bc;
      const vr = (vc = yc.colTypes) == null ? void 0 : vc[je];
      if (vr) {
        const wc = typeof vr == "function" ? vr(I) : vr;
        wc && Object.assign(I.setting, wc);
      }
      (bc = yc.onAddCol) == null || bc.call(this, I);
    }), I.width = Na(I.setting.width ?? I.width, I.setting.minWidth ?? Mn, I.setting.maxWidth ?? Bi), I.realWidth = I.realWidth || I.width, Be === "left" ? (I.left = f, f += I.width, a.push(I)) : Be === "right" ? (I.left = y, y += I.width, h.push(I)) : (I.left = p, p += I.width, s.push(I)), I.flex && c.push(I), u.push(I), d[I.name] = I;
  });
  let m = o.width, g = 0;
  const w = f + p + y;
  if (typeof m == "function" && (m = m.call(this, w)), m === "auto")
    g = w;
  else if (m === "100%") {
    const { parent: D } = this;
    if (D)
      g = D.clientWidth;
    else {
      g = 0, L(this, at, !0);
      return;
    }
  } else
    g = m ?? 0;
  const { data: k, rowKey: T = "id", rowHeight: C } = o, S = [], v = (D, re, je) => {
    var Ot, Rn;
    const Be = { data: je ?? { [T]: D }, id: D, index: S.length, top: 0 };
    if (je || (Be.lazy = !0), S.push(Be), ((Ot = o.onAddRow) == null ? void 0 : Ot.call(this, Be, re)) !== !1) {
      for (const Mn of n)
        if (((Rn = Mn.onAddRow) == null ? void 0 : Rn.call(this, Be, re)) === !1)
          return;
    }
  };
  if (typeof k == "number")
    for (let D = 0; D < k; D++)
      v(`${D}`, D);
  else
    Array.isArray(k) && k.forEach((D, re) => {
      typeof D == "object" ? v(`${D[T] ?? ""}`, re, D) : v(`${D ?? ""}`, re);
    });
  let $ = S;
  const O = {};
  if (o.onAddRows) {
    const D = o.onAddRows.call(this, $);
    D && ($ = D);
  }
  for (const D of n) {
    const re = (mc = D.onAddRows) == null ? void 0 : mc.call(this, $);
    re && ($ = re);
  }
  $.forEach((D, re) => {
    O[D.id] = D, D.index = re, D.top = D.index * C;
  });
  const { header: z, footer: _e } = o, pe = z ? o.headerHeight || C : 0, ne = _e ? o.footerHeight || C : 0;
  let H = o.height, oe = 0;
  const Le = $.length * C, Pt = pe + ne + Le;
  if (typeof H == "function" && (H = H.call(this, Pt)), H === "auto")
    oe = Pt;
  else if (typeof H == "object")
    oe = Math.min(H.max, Math.max(H.min, Pt));
  else if (H === "100%") {
    const { parent: D } = this;
    if (D)
      oe = D.clientHeight;
    else {
      oe = 0, L(this, at, !0);
      return;
    }
  } else
    oe = H;
  const Dt = oe - pe - ne, Ht = g - f - y, Fe = {
    options: o,
    allRows: S,
    width: g,
    height: oe,
    rows: $,
    rowsMap: O,
    rowHeight: C,
    rowsHeight: Dt,
    rowsHeightTotal: Le,
    header: z,
    footer: _e,
    footerGenerators: i,
    headerHeight: pe,
    footerHeight: ne,
    colsMap: d,
    colsList: u,
    flexCols: c,
    colsInfo: {
      fixedLeftCols: a,
      fixedRightCols: h,
      scrollCols: s,
      fixedLeftWidth: f,
      scrollWidth: Ht,
      scrollColsWidth: p,
      fixedRightWidth: y
    }
  }, Xt = (gc = o.onLayout) == null ? void 0 : gc.call(this, Fe);
  Xt && Object.assign(Fe, Xt), n.forEach((D) => {
    if (D.onLayout) {
      const re = D.onLayout.call(this, Fe);
      re && Object.assign(Fe, re);
    }
  }), L(this, Ee, Fe);
}, xi = new WeakSet(), Ap = function() {
  (N(this, ki, Ep).call(this) || !b(this, Ee)) && N(this, $i, Tp).call(this);
  const { layout: n } = this;
  if (!n)
    return;
  let { scrollLeft: o } = this.state;
  const { flexCols: i, colsInfo: { scrollCols: r, scrollWidth: l, scrollColsWidth: _ } } = n;
  if (i.length) {
    const w = l - _;
    if (w > 0) {
      const k = i.reduce((C, S) => C + S.flex, 0);
      let T = 0;
      i.forEach((C) => {
        const S = Math.min(w - T, Math.ceil(w * (C.flex / k)));
        C.realWidth = S + C.width, T += C.realWidth;
      });
    } else
      i.forEach((k) => {
        k.realWidth = k.width;
      });
  }
  o = Math.min(Math.max(0, _ - l), o);
  let a = 0;
  r.forEach((w) => {
    w.left = a, a += w.realWidth, w.visible = w.left + w.realWidth >= o && w.left <= o + l;
  });
  const { rowsHeightTotal: h, rowsHeight: s, rows: d, rowHeight: u } = n, c = Math.min(Math.max(0, h - s), this.state.scrollTop), f = Math.floor(c / u), y = c + s, p = Math.min(d.length, Math.ceil(y / u)), m = [], { rowDataGetter: g } = this.options;
  for (let w = f; w < p; w++) {
    const k = d[w];
    k.lazy && g && (k.data = g([k.id])[0], k.lazy = !1), m.push(k);
  }
  return n.visibleRows = m, n.scrollTop = c, n.scrollLeft = o, n;
}, E(Cr, "addPlugin", bp), E(Cr, "removePlugin", wp), Cr);
function Ma(e, t) {
  t !== void 0 ? e.data.hoverCol = t : t = e.data.hoverCol;
  const { current: n } = e.ref;
  if (!n)
    return;
  const o = "dtable-col-hover";
  n.querySelectorAll(`.${o}`).forEach((i) => i.classList.remove(o)), typeof t == "string" && t.length && n.querySelectorAll(`.dtable-cell[data-col="${t}"]`).forEach((i) => i.classList.add(o));
}
const vb = {
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
      Ma(this, o);
    },
    mouseleave() {
      Ma(this, !1);
    }
  }
}, bb = Nn(vb, { buildIn: !0 });
function wb(e, t) {
  var l, _;
  typeof e == "boolean" && (t = e, e = void 0);
  const n = this.state.checkedRows, o = {}, { canRowCheckable: i } = this.options, r = (a, h) => {
    i && !i.call(this, a) || !!n[a] === h || (h ? n[a] = !0 : delete n[a], o[a] = h);
  };
  if (e === void 0 ? (t === void 0 && (t = !Lp.call(this)), (l = this.layout) == null || l.allRows.forEach(({ id: a }) => {
    r(a, !!t);
  })) : (Array.isArray(e) || (e = [e]), e.forEach((a) => {
    r(a, t ?? !n[a]);
  })), Object.keys(o).length) {
    const a = (_ = this.options.beforeCheckRows) == null ? void 0 : _.call(this, e, o, n);
    a && Object.keys(a).forEach((h) => {
      a[h] ? n[h] = !0 : delete n[h];
    }), this.setState({ checkedRows: { ...n } }, () => {
      var h;
      (h = this.options.onCheckChange) == null || h.call(this, o);
    });
  }
  return o;
}
function kb(e) {
  return this.state.checkedRows[e] ?? !1;
}
function Lp() {
  var n, o;
  const e = this.getChecks().length, { canRowCheckable: t } = this.options;
  return t ? e === ((n = this.layout) == null ? void 0 : n.allRows.reduce((i, r) => i + (t.call(this, r.id) ? 1 : 0), 0)) : e === ((o = this.layout) == null ? void 0 : o.allRows.length);
}
function $b() {
  return Object.keys(this.state.checkedRows);
}
const xb = {
  name: "checkable",
  defaultOptions: { checkable: !0 },
  when: (e) => !!e.checkable,
  state() {
    return { checkedRows: {} };
  },
  methods: {
    toggleCheckRows: wb,
    isRowChecked: kb,
    isAllRowChecked: Lp,
    getChecks: $b
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
        /* @__PURE__ */ P("div", { style: { padding: "0 calc(3 * var(--space))", display: "flex", alignItems: "center" }, onClick: () => this.toggleCheckRows(), children: /* @__PURE__ */ P("input", { type: "checkbox", checked: e }) })
      ];
    },
    checkedInfo(e, t) {
      const n = this.getChecks().length, o = [];
      return n && o.push(this.i18n("checkedCountInfo", { selected: n })), o.push(this.i18n("totalCountInfo", { total: t.allRows.length })), [
        /* @__PURE__ */ P("div", { children: o.join(", ") })
      ];
    }
  },
  onRenderCell(e, { row: t, col: n }) {
    var _;
    const { id: o } = t, { canRowCheckable: i } = this.options;
    if (i && !i.call(this, o))
      return e;
    const { checkbox: r } = n.setting;
    if (typeof r == "function" ? r.call(this, o) : r) {
      const a = this.isRowChecked(o), h = ((_ = this.options.checkboxRender) == null ? void 0 : _.call(this, a, o)) ?? /* @__PURE__ */ P("input", { type: "checkbox", checked: a });
      e.unshift(h), e.push({ className: "has-checkbox" });
    }
    return e;
  },
  onRenderHeaderCell(e, { row: t, col: n }) {
    var l;
    const { id: o } = t, { checkbox: i } = n.setting;
    if (typeof i == "function" ? i.call(this, o) : i) {
      const _ = this.isAllRowChecked(), a = ((l = this.options.checkboxRender) == null ? void 0 : l.call(this, _, o)) ?? /* @__PURE__ */ P("input", { type: "checkbox", checked: _ });
      e.unshift(a), e.push({ className: "has-checkbox" });
    }
    return e;
  },
  onRenderRow({ props: e, row: t }) {
    if (this.isRowChecked(t.id))
      return { className: M(e.className, "is-checked") };
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
}, Sb = Nn(xb);
var Np = /* @__PURE__ */ ((e) => (e.unknown = "", e.collapsed = "collapsed", e.expanded = "expanded", e.hidden = "hidden", e.normal = "normal", e))(Np || {});
function El(e) {
  const t = this.data.nestedMap.get(e);
  if (!t || t.state !== "")
    return t ?? { state: "normal", level: -1 };
  if (!t.parent && !t.children)
    return t.state = "normal", t;
  const n = this.state.collapsedRows, o = t.children && n && n[e];
  let i = !1, { parent: r } = t;
  for (; r; ) {
    const l = El.call(this, r);
    if (l.state !== "expanded") {
      i = !0;
      break;
    }
    r = l.parent;
  }
  return t.state = i ? "hidden" : o ? "collapsed" : t.children ? "expanded" : "normal", t.level = t.parent ? El.call(this, t.parent).level + 1 : 0, t;
}
function Cb(e, t) {
  let n = this.state.collapsedRows ?? {};
  const { nestedMap: o } = this.data;
  if (e === "HEADER")
    if (t === void 0 && (t = !Rp.call(this)), t) {
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
function Rp() {
  const e = this.data.nestedMap.values();
  for (const t of e)
    if (t.state === "expanded")
      return !1;
  return !0;
}
function Mp(e, t = 0, n, o = 0) {
  var i;
  n || (n = [...e.keys()]);
  for (const r of n) {
    const l = e.get(r);
    l && (l.level === o && (l.order = t++), (i = l.children) != null && i.length && (t = Mp(e, t, l.children, o + 1)));
  }
  return t;
}
function Pp(e, t, n, o) {
  const i = e.getNestedRowInfo(t);
  return !i || i.state === "" || !i.children || i.children.forEach((r) => {
    o[r] = n, Pp(e, r, n, o);
  }), i;
}
function Dp(e, t, n, o, i) {
  var _;
  const r = e.getNestedRowInfo(t);
  if (!r || r.state === "")
    return;
  ((_ = r.children) == null ? void 0 : _.every((a) => {
    const h = !!(o[a] !== void 0 ? o[a] : i[a]);
    return n === h;
  })) && (o[t] = n), r.parent && Dp(e, r.parent, n, o, i);
}
const Eb = {
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
        const l = Pp(this, i, r, o);
        l != null && l.parent && Dp(this, l.parent, r, o, n);
      }), o;
    }
  },
  when: (e) => !!e.nested,
  data() {
    return { nestedMap: /* @__PURE__ */ new Map() };
  },
  methods: {
    toggleRow: Cb,
    isAllCollapsed: Rp,
    getNestedRowInfo: El
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
    ), Mp(this.data.nestedMap), e.sort((t, n) => {
      const o = this.getNestedRowInfo(t.id), i = this.getNestedRowInfo(n.id), r = (o.order ?? 0) - (i.order ?? 0);
      return r === 0 ? t.index - n.index : r;
    }), e;
  },
  onRenderCell(e, { col: t, row: n }) {
    var _;
    const { id: o, data: i } = n, { nestedToggle: r } = t.setting, l = this.getNestedRowInfo(o);
    if (r && (l.children || l.parent) && e.unshift(((_ = this.options.onRenderNestedToggle) == null ? void 0 : _.call(this, l, o, t, i)) ?? /* @__PURE__ */ P("a", { role: "button", className: `dtable-nested-toggle state${l.children ? "" : " is-no-child"}`, children: /* @__PURE__ */ P("span", { className: "toggle-icon" }) })), l.level) {
      let { nestedIndent: a = r } = t.setting;
      a && (a === !0 && (a = this.options.nestedIndent ?? 12), e.unshift(/* @__PURE__ */ P("div", { className: "dtable-nested-indent", style: { width: a * l.level + "px" } })));
    }
    return e;
  },
  onRenderHeaderCell(e, { row: t, col: n }) {
    var i;
    const { id: o } = t;
    return n.setting.nestedToggle && e.unshift(((i = this.options.onRenderNestedToggle) == null ? void 0 : i.call(this, void 0, o, n, void 0)) ?? /* @__PURE__ */ P("a", { type: "button", className: "dtable-nested-toggle state", children: /* @__PURE__ */ P("span", { className: "toggle-icon" }) })), e;
  },
  onRenderRow({ props: e, row: t }) {
    const n = this.getNestedRowInfo(t.id);
    return {
      className: M(e.className, `is-${n.state}`),
      "data-parent": n.parent
    };
  },
  onRenderHeaderRow({ props: e }) {
    return e.className = M(e.className, `is-${this.isAllCollapsed() ? "collapsed" : "expanded"}`), e;
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
}, Tb = Nn(Eb);
const Ab = {
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
        const { linkTemplate: o = "", linkProps: i } = t.setting, r = ye(o, n.data);
        return e[0] = /* @__PURE__ */ P("a", { href: r, ...i, children: e[0] }), e;
      }
    },
    avatar: {
      onRenderCell(e, { col: t, row: n }) {
        const { data: o } = n, { avatarWithName: i, avatarClass: r = "size-xs circle", avatarKey: l = `${t.name}Avatar` } = t.setting, _ = /* @__PURE__ */ P("div", { className: `avatar ${r} flex-none`, children: /* @__PURE__ */ P("img", { src: o ? o[l] : "" }) });
        return i ? e.unshift(_) : e[0] = _, e;
      }
    },
    circleProgress: {
      align: "center",
      onRenderCell(e, { col: t }) {
        const { circleSize: n = 24, circleBorderSize: o = 1, circleBgColor: i = "var(--color-border)", circleColor: r = "var(--color-success-500)" } = t.setting, l = (n - o) / 2, _ = n / 2, a = e[0];
        return e[0] = /* @__PURE__ */ P("svg", { width: n, height: n, children: [
          /* @__PURE__ */ P("circle", { cx: _, cy: _, r: l, "stroke-width": o, stroke: i, fill: "transparent" }),
          /* @__PURE__ */ P("circle", { cx: _, cy: _, r: l, "stroke-width": o, stroke: r, fill: "transparent", "stroke-linecap": "round", "stroke-dasharray": Math.PI * l * 2, "stroke-dashoffset": Math.PI * l * 2 * (100 - a) / 100, style: { transformOrigin: "center", transform: "rotate(-90deg)" } }),
          /* @__PURE__ */ P("text", { x: _, y: _ + o, "dominant-baseline": "middle", "text-anchor": "middle", style: { fontSize: `${l}px` }, children: Math.round(a) })
        ] }), e;
      }
    },
    actionButtons: {
      onRenderCell(e, { col: t, row: n }) {
        var _;
        const o = (_ = n.data) == null ? void 0 : _[t.name];
        if (!o)
          return e;
        const { actionBtnTemplate: i = '<button type="button" data-action="{action}" title="{title}" class="{className}"><i class="icon icon-{icon}"></i></button>', actionBtnData: r = {}, actionBtnClass: l = "btn text-primary square size-sm ghost" } = t.setting;
        return [{
          html: o.map((a) => {
            typeof a == "string" && (a = { action: a });
            const h = r[a.action];
            return h && (a = { className: l, ...h, ...a }), ye(i, a);
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
        return typeof o == "function" ? e[0] = i === "html" ? { html: o(r) } : o(r) : i === "datetime" ? e[0] = kl(r, o) : i === "html" ? e[0] = { html: ye(o, r) } : e[0] = ye(o, r), e;
      }
    }
  }
}, Lb = Nn(Ab, { buildIn: !0 }), Nb = {
  name: "sort-type",
  onRenderHeaderCell(e, { col: t }) {
    const { sortType: n } = t.setting;
    if (n) {
      const { sortLink: o = this.options.sortLink, sortAttrs: i } = t.setting, r = n === !0 ? "none" : n;
      if (e.push(
        /* @__PURE__ */ P("div", { className: `dtable-sort dtable-sort-${r}` }),
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
}, Rb = Nn(Nb, { buildIn: !0 }), Mb = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  NestedRowState: Np,
  checkable: Sb,
  colHover: bb,
  nested: Tb,
  rich: Lb,
  sortType: Rb
}, Symbol.toStringTag, { value: "Module" }));
class Dn extends ae {
}
E(Dn, "NAME", "dtable"), E(Dn, "Component", yb), E(Dn, "definePlugin", Nn), E(Dn, "removePlugin", wp), E(Dn, "plugins", Mb);
var we;
class jn extends Qe {
  constructor() {
    super(...arguments);
    x(this, we, void 0);
  }
  init() {
    const { element: n } = this;
    n !== document.body && !n.hasAttribute("data-toggle") && n.setAttribute("data-toggle", "tab");
  }
  showTarget() {
    const n = this.element.getAttribute("href") || this.element.dataset.target || this.element.dataset.tab;
    n != null && n.startsWith("#") && L(this, we, document.querySelector(n)), this.addActive(this.element.closest(`.${this.constructor.NAV_CLASS}`), this.element.parentElement), b(this, we) && (this.addActive(b(this, we).parentElement, b(this, we)), b(this, we).dispatchEvent(new CustomEvent("show.zui3.tab")));
  }
  show() {
    const n = this.element.getAttribute("href") || this.element.dataset.target || this.element.dataset.tab;
    n != null && n.startsWith("#") && L(this, we, document.querySelector(n)), b(this, we) && (this.addActive(b(this, we).parentElement, b(this, we)), this.addActive(this.element.closest(`.${this.constructor.NAV_CLASS}`), this.element.parentElement));
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
we = new WeakMap(), E(jn, "NAME", "NavTabs"), E(jn, "NAV_CLASS", "nav-tabs"), E(jn, "EVENTS", !0), E(jn, "TOGGLE_SELECTOR", '[data-toggle="tab"]');
document.addEventListener("click", (e) => {
  e.target instanceof HTMLElement && (e.target.dataset.toggle === "tab" || e.target.getAttribute("data-tab")) && (e.preventDefault(), new jn(e.target).showTarget());
});
export {
  R as $,
  Pc as ActionMenu,
  Hc as ActionMenuNested,
  Y_ as Avatar,
  K_ as BtnGroup,
  jc as Button,
  ge as ContextMenu,
  Dn as DTable,
  he as Dropdown,
  Al as EventBus,
  Bc as Menu,
  In as Messager,
  fe as Modal,
  po as ModalTrigger,
  ta as Nav,
  jn as NavTabs,
  ra as Pager,
  ua as Picker,
  A_ as ProgressCircle,
  D_ as Switch,
  Ve as TIME_DAY,
  fa as Toolbar,
  ke as Tooltip,
  Jp as addI18nMap,
  Gb as browser,
  oa as calculateTimestamp,
  Ub as cash,
  Hb as convertBytes,
  be as createDate,
  Db as formatBytes,
  kl as formatDate,
  t0 as formatDateSpan,
  ye as formatString,
  Kp as getLangCode,
  n0 as getTimeBeforeDesc,
  dr as i18n,
  e0 as isDBY,
  Vi as isObject,
  gr as isSameDay,
  vv as isSameMonth,
  Xb as isSameWeek,
  na as isSameYear,
  Jb as isToday,
  Qb as isTomorrow,
  Zb as isYesterday,
  ul as mergeDeep,
  al as nativeEvents,
  Xp as setLangCode,
  jy as store
};
