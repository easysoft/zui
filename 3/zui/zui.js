var tc = Object.defineProperty;
var nc = (e, t, n) => t in e ? tc(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var S = (e, t, n) => (nc(e, typeof t != "symbol" ? t + "" : t, n), n), ur = (e, t, n) => {
  if (!t.has(e))
    throw TypeError("Cannot " + n);
};
var b = (e, t, n) => (ur(e, t, "read from private field"), n ? n.call(e) : t.get(e)), M = (e, t, n) => {
  if (t.has(e))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(e) : t.set(e, n);
}, N = (e, t, n, o) => (ur(e, t, "write to private field"), o ? o.call(e, n) : t.set(e, n), n);
var J = (e, t, n) => (ur(e, t, "access private method"), n);
var tr, H, Ji, Zi, Gt, ms, fo = {}, Qi = [], oc = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function qe(e, t) {
  for (var n in t)
    e[n] = t[n];
  return e;
}
function el(e) {
  var t = e.parentNode;
  t && t.removeChild(e);
}
function nr(e, t, n) {
  var o, i, r, l = {};
  for (r in t)
    r == "key" ? o = t[r] : r == "ref" ? i = t[r] : l[r] = t[r];
  if (arguments.length > 2 && (l.children = arguments.length > 3 ? tr.call(arguments, 2) : n), typeof e == "function" && e.defaultProps != null)
    for (r in e.defaultProps)
      l[r] === void 0 && (l[r] = e.defaultProps[r]);
  return Yn(e, l, o, i, null);
}
function Yn(e, t, n, o, i) {
  var r = { type: e, props: t, key: n, ref: o, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: i == null ? ++Ji : i };
  return i == null && H.vnode != null && H.vnode(r), r;
}
function rc() {
  return { current: null };
}
function or(e) {
  return e.children;
}
function Kn(e, t) {
  this.props = e, this.context = t;
}
function vn(e, t) {
  if (t == null)
    return e.__ ? vn(e.__, e.__.__k.indexOf(e) + 1) : null;
  for (var n; t < e.__k.length; t++)
    if ((n = e.__k[t]) != null && n.__e != null)
      return n.__e;
  return typeof e.type == "function" ? vn(e) : null;
}
function tl(e) {
  var t, n;
  if ((e = e.__) != null && e.__c != null) {
    for (e.__e = e.__c.base = null, t = 0; t < e.__k.length; t++)
      if ((n = e.__k[t]) != null && n.__e != null) {
        e.__e = e.__c.base = n.__e;
        break;
      }
    return tl(e);
  }
}
function ys(e) {
  (!e.__d && (e.__d = !0) && Gt.push(e) && !uo.__r++ || ms !== H.debounceRendering) && ((ms = H.debounceRendering) || setTimeout)(uo);
}
function uo() {
  for (var e; uo.__r = Gt.length; )
    e = Gt.sort(function(t, n) {
      return t.__v.__b - n.__v.__b;
    }), Gt = [], e.some(function(t) {
      var n, o, i, r, l, _;
      t.__d && (l = (r = (n = t).__v).__e, (_ = n.__P) && (o = [], (i = qe({}, r)).__v = r.__v + 1, Nr(_, r, i, n.__n, _.ownerSVGElement !== void 0, r.__h != null ? [l] : null, o, l == null ? vn(r) : l, r.__h), sl(o, r), r.__e != l && tl(r)));
    });
}
function nl(e, t, n, o, i, r, l, _, c, p) {
  var s, h, f, a, u, y, d, v = o && o.__k || Qi, g = v.length;
  for (n.__k = [], s = 0; s < t.length; s++)
    if ((a = n.__k[s] = (a = t[s]) == null || typeof a == "boolean" ? null : typeof a == "string" || typeof a == "number" || typeof a == "bigint" ? Yn(null, a, null, null, a) : Array.isArray(a) ? Yn(or, { children: a }, null, null, null) : a.__b > 0 ? Yn(a.type, a.props, a.key, a.ref ? a.ref : null, a.__v) : a) != null) {
      if (a.__ = n, a.__b = n.__b + 1, (f = v[s]) === null || f && a.key == f.key && a.type === f.type)
        v[s] = void 0;
      else
        for (h = 0; h < g; h++) {
          if ((f = v[h]) && a.key == f.key && a.type === f.type) {
            v[h] = void 0;
            break;
          }
          f = null;
        }
      Nr(e, a, f = f || fo, i, r, l, _, c, p), u = a.__e, (h = a.ref) && f.ref != h && (d || (d = []), f.ref && d.push(f.ref, null, a), d.push(h, a.__c || u, a)), u != null ? (y == null && (y = u), typeof a.type == "function" && a.__k === f.__k ? a.__d = c = ol(a, c, e) : c = rl(e, a, f, v, u, c), typeof n.type == "function" && (n.__d = c)) : c && f.__e == c && c.parentNode != e && (c = vn(f));
    }
  for (n.__e = y, s = g; s--; )
    v[s] != null && ll(v[s], v[s]);
  if (d)
    for (s = 0; s < d.length; s++)
      il(d[s], d[++s], d[++s]);
}
function ol(e, t, n) {
  for (var o, i = e.__k, r = 0; i && r < i.length; r++)
    (o = i[r]) && (o.__ = e, t = typeof o.type == "function" ? ol(o, t, n) : rl(n, o, o, i, o.__e, t));
  return t;
}
function rl(e, t, n, o, i, r) {
  var l, _, c;
  if (t.__d !== void 0)
    l = t.__d, t.__d = void 0;
  else if (n == null || i != r || i.parentNode == null)
    e:
      if (r == null || r.parentNode !== e)
        e.appendChild(i), l = null;
      else {
        for (_ = r, c = 0; (_ = _.nextSibling) && c < o.length; c += 2)
          if (_ == i)
            break e;
        e.insertBefore(i, r), l = r;
      }
  return l !== void 0 ? l : i.nextSibling;
}
function sc(e, t, n, o, i) {
  var r;
  for (r in n)
    r === "children" || r === "key" || r in t || po(e, r, null, n[r], o);
  for (r in t)
    i && typeof t[r] != "function" || r === "children" || r === "key" || r === "value" || r === "checked" || n[r] === t[r] || po(e, r, t[r], n[r], o);
}
function bs(e, t, n) {
  t[0] === "-" ? e.setProperty(t, n) : e[t] = n == null ? "" : typeof n != "number" || oc.test(t) ? n : n + "px";
}
function po(e, t, n, o, i) {
  var r;
  e:
    if (t === "style")
      if (typeof n == "string")
        e.style.cssText = n;
      else {
        if (typeof o == "string" && (e.style.cssText = o = ""), o)
          for (t in o)
            n && t in n || bs(e.style, t, "");
        if (n)
          for (t in n)
            o && n[t] === o[t] || bs(e.style, t, n[t]);
      }
    else if (t[0] === "o" && t[1] === "n")
      r = t !== (t = t.replace(/Capture$/, "")), t = t.toLowerCase() in e ? t.toLowerCase().slice(2) : t.slice(2), e.l || (e.l = {}), e.l[t + r] = n, n ? o || e.addEventListener(t, r ? ks : ws, r) : e.removeEventListener(t, r ? ks : ws, r);
    else if (t !== "dangerouslySetInnerHTML") {
      if (i)
        t = t.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
      else if (t !== "href" && t !== "list" && t !== "form" && t !== "tabIndex" && t !== "download" && t in e)
        try {
          e[t] = n == null ? "" : n;
          break e;
        } catch {
        }
      typeof n == "function" || (n == null || n === !1 && t.indexOf("-") == -1 ? e.removeAttribute(t) : e.setAttribute(t, n));
    }
}
function ws(e) {
  this.l[e.type + !1](H.event ? H.event(e) : e);
}
function ks(e) {
  this.l[e.type + !0](H.event ? H.event(e) : e);
}
function Nr(e, t, n, o, i, r, l, _, c) {
  var p, s, h, f, a, u, y, d, v, g, k, w, E, $, x, m = t.type;
  if (t.constructor !== void 0)
    return null;
  n.__h != null && (c = n.__h, _ = t.__e = n.__e, t.__h = null, r = [_]), (p = H.__b) && p(t);
  try {
    e:
      if (typeof m == "function") {
        if (d = t.props, v = (p = m.contextType) && o[p.__c], g = p ? v ? v.props.value : p.__ : o, n.__c ? y = (s = t.__c = n.__c).__ = s.__E : ("prototype" in m && m.prototype.render ? t.__c = s = new m(d, g) : (t.__c = s = new Kn(d, g), s.constructor = m, s.render = lc), v && v.sub(s), s.props = d, s.state || (s.state = {}), s.context = g, s.__n = o, h = s.__d = !0, s.__h = [], s._sb = []), s.__s == null && (s.__s = s.state), m.getDerivedStateFromProps != null && (s.__s == s.state && (s.__s = qe({}, s.__s)), qe(s.__s, m.getDerivedStateFromProps(d, s.__s))), f = s.props, a = s.state, h)
          m.getDerivedStateFromProps == null && s.componentWillMount != null && s.componentWillMount(), s.componentDidMount != null && s.__h.push(s.componentDidMount);
        else {
          if (m.getDerivedStateFromProps == null && d !== f && s.componentWillReceiveProps != null && s.componentWillReceiveProps(d, g), !s.__e && s.shouldComponentUpdate != null && s.shouldComponentUpdate(d, s.__s, g) === !1 || t.__v === n.__v) {
            for (s.props = d, s.state = s.__s, t.__v !== n.__v && (s.__d = !1), s.__v = t, t.__e = n.__e, t.__k = n.__k, t.__k.forEach(function(C) {
              C && (C.__ = t);
            }), k = 0; k < s._sb.length; k++)
              s.__h.push(s._sb[k]);
            s._sb = [], s.__h.length && l.push(s);
            break e;
          }
          s.componentWillUpdate != null && s.componentWillUpdate(d, s.__s, g), s.componentDidUpdate != null && s.__h.push(function() {
            s.componentDidUpdate(f, a, u);
          });
        }
        if (s.context = g, s.props = d, s.__v = t, s.__P = e, w = H.__r, E = 0, "prototype" in m && m.prototype.render) {
          for (s.state = s.__s, s.__d = !1, w && w(t), p = s.render(s.props, s.state, s.context), $ = 0; $ < s._sb.length; $++)
            s.__h.push(s._sb[$]);
          s._sb = [];
        } else
          do
            s.__d = !1, w && w(t), p = s.render(s.props, s.state, s.context), s.state = s.__s;
          while (s.__d && ++E < 25);
        s.state = s.__s, s.getChildContext != null && (o = qe(qe({}, o), s.getChildContext())), h || s.getSnapshotBeforeUpdate == null || (u = s.getSnapshotBeforeUpdate(f, a)), x = p != null && p.type === or && p.key == null ? p.props.children : p, nl(e, Array.isArray(x) ? x : [x], t, n, o, i, r, l, _, c), s.base = t.__e, t.__h = null, s.__h.length && l.push(s), y && (s.__E = s.__ = null), s.__e = !1;
      } else
        r == null && t.__v === n.__v ? (t.__k = n.__k, t.__e = n.__e) : t.__e = ic(n.__e, t, n, o, i, r, l, c);
    (p = H.diffed) && p(t);
  } catch (C) {
    t.__v = null, (c || r != null) && (t.__e = _, t.__h = !!c, r[r.indexOf(_)] = null), H.__e(C, t, n);
  }
}
function sl(e, t) {
  H.__c && H.__c(t, e), e.some(function(n) {
    try {
      e = n.__h, n.__h = [], e.some(function(o) {
        o.call(n);
      });
    } catch (o) {
      H.__e(o, n.__v);
    }
  });
}
function ic(e, t, n, o, i, r, l, _) {
  var c, p, s, h = n.props, f = t.props, a = t.type, u = 0;
  if (a === "svg" && (i = !0), r != null) {
    for (; u < r.length; u++)
      if ((c = r[u]) && "setAttribute" in c == !!a && (a ? c.localName === a : c.nodeType === 3)) {
        e = c, r[u] = null;
        break;
      }
  }
  if (e == null) {
    if (a === null)
      return document.createTextNode(f);
    e = i ? document.createElementNS("http://www.w3.org/2000/svg", a) : document.createElement(a, f.is && f), r = null, _ = !1;
  }
  if (a === null)
    h === f || _ && e.data === f || (e.data = f);
  else {
    if (r = r && tr.call(e.childNodes), p = (h = n.props || fo).dangerouslySetInnerHTML, s = f.dangerouslySetInnerHTML, !_) {
      if (r != null)
        for (h = {}, u = 0; u < e.attributes.length; u++)
          h[e.attributes[u].name] = e.attributes[u].value;
      (s || p) && (s && (p && s.__html == p.__html || s.__html === e.innerHTML) || (e.innerHTML = s && s.__html || ""));
    }
    if (sc(e, f, h, i, _), s)
      t.__k = [];
    else if (u = t.props.children, nl(e, Array.isArray(u) ? u : [u], t, n, o, i && a !== "foreignObject", r, l, r ? r[0] : n.__k && vn(n, 0), _), r != null)
      for (u = r.length; u--; )
        r[u] != null && el(r[u]);
    _ || ("value" in f && (u = f.value) !== void 0 && (u !== e.value || a === "progress" && !u || a === "option" && u !== h.value) && po(e, "value", u, h.value, !1), "checked" in f && (u = f.checked) !== void 0 && u !== e.checked && po(e, "checked", u, h.checked, !1));
  }
  return e;
}
function il(e, t, n) {
  try {
    typeof e == "function" ? e(t) : e.current = t;
  } catch (o) {
    H.__e(o, n);
  }
}
function ll(e, t, n) {
  var o, i;
  if (H.unmount && H.unmount(e), (o = e.ref) && (o.current && o.current !== e.__e || il(o, null, t)), (o = e.__c) != null) {
    if (o.componentWillUnmount)
      try {
        o.componentWillUnmount();
      } catch (r) {
        H.__e(r, t);
      }
    o.base = o.__P = null, e.__c = void 0;
  }
  if (o = e.__k)
    for (i = 0; i < o.length; i++)
      o[i] && ll(o[i], t, n || typeof e.type != "function");
  n || e.__e == null || el(e.__e), e.__ = e.__e = e.__d = void 0;
}
function lc(e, t, n) {
  return this.constructor(e, n);
}
function ac(e, t, n) {
  var o, i, r;
  H.__ && H.__(e, t), i = (o = typeof n == "function") ? null : n && n.__k || t.__k, r = [], Nr(t, e = (!o && n || t).__k = nr(or, null, [e]), i || fo, fo, t.ownerSVGElement !== void 0, !o && n ? [n] : i ? null : t.firstChild ? tr.call(t.childNodes) : null, r, !o && n ? n : i ? i.__e : t.firstChild, o), sl(r, e);
}
tr = Qi.slice, H = { __e: function(e, t, n, o) {
  for (var i, r, l; t = t.__; )
    if ((i = t.__c) && !i.__)
      try {
        if ((r = i.constructor) && r.getDerivedStateFromError != null && (i.setState(r.getDerivedStateFromError(e)), l = i.__d), i.componentDidCatch != null && (i.componentDidCatch(e, o || {}), l = i.__d), l)
          return i.__E = i;
      } catch (_) {
        e = _;
      }
  throw e;
} }, Ji = 0, Zi = function(e) {
  return e != null && e.constructor === void 0;
}, Kn.prototype.setState = function(e, t) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = qe({}, this.state), typeof e == "function" && (e = e(qe({}, n), this.props)), e && qe(n, e), e != null && this.__v && (t && this._sb.push(t), ys(this));
}, Kn.prototype.forceUpdate = function(e) {
  this.__v && (this.__e = !0, e && this.__h.push(e), ys(this));
}, Kn.prototype.render = or, Gt = [], uo.__r = 0;
var Ne;
class _c {
  constructor(t = "") {
    M(this, Ne, void 0);
    typeof t == "object" ? N(this, Ne, t) : N(this, Ne, document.appendChild(document.createComment(t)));
  }
  on(t, n, o) {
    b(this, Ne).addEventListener(t, n, o);
  }
  once(t, n, o) {
    b(this, Ne).addEventListener(t, n, { once: !0, ...o });
  }
  off(t, n, o) {
    b(this, Ne).removeEventListener(t, n, o);
  }
  emit(t) {
    return b(this, Ne).dispatchEvent(t), t;
  }
}
Ne = new WeakMap();
const gr = /* @__PURE__ */ new Set([
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
class Rr extends _c {
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
    return typeof t == "string" && (gr.has(t) ? (t = new Event(t), Object.assign(t, { detail: n })) : t = new CustomEvent(t, { detail: n })), super.emit(Rr.createEvent(t, n));
  }
  static createEvent(t, n) {
    return typeof t == "string" && (gr.has(t) ? (t = new Event(t), Object.assign(t, { detail: n })) : t = new CustomEvent(t, { detail: n })), t;
  }
}
var Re, Nn, ft, qt;
class $s extends Rr {
  constructor(n = "", o) {
    super(n);
    M(this, ft);
    M(this, Re, /* @__PURE__ */ new Map());
    M(this, Nn, void 0);
    N(this, Nn, o == null ? void 0 : o.customEventSuffix);
  }
  on(n, o, i) {
    n = J(this, ft, qt).call(this, n), super.on(n, o, i), b(this, Re).set(o, [n, i]);
  }
  off(n, o, i) {
    n = J(this, ft, qt).call(this, n), super.off(n, o, i), b(this, Re).delete(o);
  }
  once(n, o, i) {
    n = J(this, ft, qt).call(this, n);
    const r = (l) => {
      o(l), b(this, Re).delete(r);
    };
    super.once(n, r, i), b(this, Re).set(r, [n, i]);
  }
  emit(n, o) {
    return typeof n == "string" && (n = J(this, ft, qt).call(this, n)), super.emit(n, o);
  }
  offAll() {
    Array.from(b(this, Re).entries()).forEach(([n, [o, i]]) => {
      super.off(o, n, i);
    }), b(this, Re).clear();
  }
}
Re = new WeakMap(), Nn = new WeakMap(), ft = new WeakSet(), qt = function(n) {
  const o = b(this, Nn);
  return gr.has(n) || typeof o != "string" || n.endsWith(o) ? n : `${n}${o}`;
};
function cc(e, t) {
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
function fc(e, t, n) {
  const o = cc(e, t), i = o[o.length - 1];
  return i === void 0 ? n : i;
}
function pr(e) {
  return !!e && typeof e == "object" && !Array.isArray(e);
}
function mr(e, ...t) {
  if (!t.length)
    return e;
  const n = t.shift();
  if (pr(e) && pr(n))
    for (const o in n)
      pr(n[o]) ? (e[o] || Object.assign(e, { [o]: {} }), mr(e[o], n[o])) : Object.assign(e, { [o]: n[o] });
  return mr(e, ...t);
}
function ce(e, ...t) {
  var n;
  if (t.length === 0)
    return e;
  if (t.length === 1 && typeof t[0] == "object" && t[0]) {
    const o = t[0];
    return Object.keys(o).forEach((i) => {
      var l;
      const r = (l = o[i]) != null ? l : 0;
      e = e.replace(new RegExp(`\\{${i}\\}`, "g"), `${r}`);
    }), e;
  }
  for (let o = 0; o < t.length; o++) {
    const i = (n = t[o]) != null ? n : "";
    e = e.replace(new RegExp(`\\{${o}\\}`, "g"), `${i}`);
  }
  return e;
}
var Pr = /* @__PURE__ */ ((e) => (e[e.B = 1] = "B", e[e.KB = 1024] = "KB", e[e.MB = 1048576] = "MB", e[e.GB = 1073741824] = "GB", e[e.TB = 1099511627776] = "TB", e))(Pr || {});
function Yp(e, t = 2, n = "") {
  return Number.isNaN(e) ? "?KB" : (n || (e < 1024 ? n = "B" : e < 1048576 ? n = "KB" : e < 1073741824 ? n = "MB" : e < 1099511627776 ? n = "GB" : n = "TB"), (e / Pr[n]).toFixed(t) + n);
}
const Kp = (e) => {
  const t = /^[0-9]*(B|KB|MB|GB|TB)$/;
  e = e.toUpperCase();
  const n = e.match(t);
  if (!n)
    return 0;
  const o = n[1];
  return e = e.replace(o, ""), Number.parseInt(e, 10) * Pr[o];
};
var Ki, Xi;
let Lr = (Xi = (Ki = document.documentElement.getAttribute("lang")) == null ? void 0 : Ki.toLowerCase()) != null ? Xi : "zh_cn", Ue;
function uc() {
  return Lr;
}
function pc(e) {
  Lr = e.toLowerCase();
}
function hc(e, t) {
  Ue || (Ue = {}), typeof e == "string" && (e = { [e]: t != null ? t : {} }), mr(Ue, e);
}
function jn(e, t, n, o, i, r) {
  Array.isArray(e) ? Ue && e.unshift(Ue) : e = Ue ? [Ue, e] : [e], typeof n == "string" && (r = i, i = o, o = n, n = void 0);
  const l = i || Lr;
  let _;
  for (const c of e) {
    if (!c)
      continue;
    const p = c[l];
    if (!p)
      continue;
    const s = r && c === Ue ? `${r}.${t}` : t;
    if (_ = fc(p, s), _ !== void 0)
      break;
  }
  return _ === void 0 ? o : n ? ce(_, ...Array.isArray(n) ? n : [n]) : _;
}
jn.addLang = hc;
jn.getCode = uc;
jn.setCode = pc;
function dc(e) {
  return Object.fromEntries(Object.entries(e).map(([t, n]) => {
    if (typeof n == "string")
      try {
        n = JSON.parse(n);
      } catch {
      }
    return [t, n];
  }));
}
var Pe, bt, re;
class Yt {
  constructor(t, n) {
    M(this, Pe, void 0);
    M(this, bt, void 0);
    M(this, re, void 0);
    var o;
    t = typeof t == "string" ? document.querySelector(t) : t, this.constructor.EVENTS && N(this, re, new $s(t, { customEventSuffix: `.${this.constructor.KEY}` })), N(this, Pe, { ...this.constructor.DEFAULT, ...t instanceof HTMLElement ? dc(t.dataset) : null, ...n }), this.constructor.all.set(t, this), N(this, bt, t), this.init(), (o = b(this, re)) == null || o.emit("inited", this);
  }
  get options() {
    return b(this, Pe);
  }
  get element() {
    return b(this, bt);
  }
  get events() {
    return b(this, re);
  }
  init() {
  }
  setOptions(t) {
    return t && Object.assign(b(this, Pe), t), b(this, Pe);
  }
  render(t) {
    this.setOptions(t);
  }
  destroy() {
    this.constructor.all.delete(b(this, bt)), b(this, re) && (b(this, re).emit("destroyed", this), b(this, re).offAll());
  }
  on(t, n, o) {
    var i;
    (i = b(this, re)) == null || i.on(t, n, o);
  }
  once(t, n, o) {
    var i;
    (i = b(this, re)) == null || i.once(t, n, o);
  }
  off(t, n, o) {
    var i;
    (i = b(this, re)) == null || i.off(t, n, o);
  }
  emit(t, n) {
    var l;
    let o = $s.createEvent(t, n);
    const i = `on${o.type.replace(`.${this.constructor.KEY}`, "")}`, r = b(this, Pe)[i];
    return r && r(o) === !1 && (o.preventDefault(), o.stopPropagation()), o = (l = b(this, re)) == null ? void 0 : l.emit(o), o;
  }
  i18n(t, n, o) {
    var i;
    return (i = jn(b(this, Pe).i18n, t, n, o, this.options.lang, this.constructor.NAME)) != null ? i : `{i18n:${t}}`;
  }
  static get NAME() {
    throw new Error(`static NAME should be override in class ${this.name}`);
  }
  static get KEY() {
    return `zui.${this.NAME}`;
  }
  static get all() {
    const t = this.NAME;
    if (this.allComponents.has(t))
      return this.allComponents.get(t);
    const n = /* @__PURE__ */ new Map();
    return this.allComponents.set(t, n), n;
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
Pe = new WeakMap(), bt = new WeakMap(), re = new WeakMap(), S(Yt, "EVENTS", !1), S(Yt, "DEFAULT", {}), S(Yt, "allComponents", /* @__PURE__ */ new Map());
class Ce extends Yt {
  constructor() {
    super(...arguments);
    S(this, "ref", rc());
  }
  get $() {
    return this.ref.current;
  }
  init() {
    requestAnimationFrame(() => this.render());
  }
  render(n) {
    const o = this.constructor.Component;
    ac(/* @__PURE__ */ nr(o, {
      ref: this.ref,
      ...this.setOptions(n)
    }), this.element);
  }
}
var Or, U, al, _l, Kt, xs, cl = {}, fl = [], vc = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function Ge(e, t) {
  for (var n in t)
    e[n] = t[n];
  return e;
}
function ul(e) {
  var t = e.parentNode;
  t && t.removeChild(e);
}
function ne(e, t, n) {
  var o, i, r, l = {};
  for (r in t)
    r == "key" ? o = t[r] : r == "ref" ? i = t[r] : l[r] = t[r];
  if (arguments.length > 2 && (l.children = arguments.length > 3 ? Or.call(arguments, 2) : n), typeof e == "function" && e.defaultProps != null)
    for (r in e.defaultProps)
      l[r] === void 0 && (l[r] = e.defaultProps[r]);
  return Xn(e, l, o, i, null);
}
function Xn(e, t, n, o, i) {
  var r = { type: e, props: t, key: n, ref: o, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: i == null ? ++al : i };
  return i == null && U.vnode != null && U.vnode(r), r;
}
function gc() {
  return { current: null };
}
function Dr(e) {
  return e.children;
}
function Xt(e, t) {
  this.props = e, this.context = t;
}
function gn(e, t) {
  if (t == null)
    return e.__ ? gn(e.__, e.__.__k.indexOf(e) + 1) : null;
  for (var n; t < e.__k.length; t++)
    if ((n = e.__k[t]) != null && n.__e != null)
      return n.__e;
  return typeof e.type == "function" ? gn(e) : null;
}
function pl(e) {
  var t, n;
  if ((e = e.__) != null && e.__c != null) {
    for (e.__e = e.__c.base = null, t = 0; t < e.__k.length; t++)
      if ((n = e.__k[t]) != null && n.__e != null) {
        e.__e = e.__c.base = n.__e;
        break;
      }
    return pl(e);
  }
}
function Cs(e) {
  (!e.__d && (e.__d = !0) && Kt.push(e) && !ho.__r++ || xs !== U.debounceRendering) && ((xs = U.debounceRendering) || setTimeout)(ho);
}
function ho() {
  for (var e; ho.__r = Kt.length; )
    e = Kt.sort(function(t, n) {
      return t.__v.__b - n.__v.__b;
    }), Kt = [], e.some(function(t) {
      var n, o, i, r, l, _;
      t.__d && (l = (r = (n = t).__v).__e, (_ = n.__P) && (o = [], (i = Ge({}, r)).__v = r.__v + 1, gl(_, r, i, n.__n, _.ownerSVGElement !== void 0, r.__h != null ? [l] : null, o, l == null ? gn(r) : l, r.__h), yc(o, r), r.__e != l && pl(r)));
    });
}
function hl(e, t, n, o, i, r, l, _, c, p) {
  var s, h, f, a, u, y, d, v = o && o.__k || fl, g = v.length;
  for (n.__k = [], s = 0; s < t.length; s++)
    if ((a = n.__k[s] = (a = t[s]) == null || typeof a == "boolean" ? null : typeof a == "string" || typeof a == "number" || typeof a == "bigint" ? Xn(null, a, null, null, a) : Array.isArray(a) ? Xn(Dr, { children: a }, null, null, null) : a.__b > 0 ? Xn(a.type, a.props, a.key, a.ref ? a.ref : null, a.__v) : a) != null) {
      if (a.__ = n, a.__b = n.__b + 1, (f = v[s]) === null || f && a.key == f.key && a.type === f.type)
        v[s] = void 0;
      else
        for (h = 0; h < g; h++) {
          if ((f = v[h]) && a.key == f.key && a.type === f.type) {
            v[h] = void 0;
            break;
          }
          f = null;
        }
      gl(e, a, f = f || cl, i, r, l, _, c, p), u = a.__e, (h = a.ref) && f.ref != h && (d || (d = []), f.ref && d.push(f.ref, null, a), d.push(h, a.__c || u, a)), u != null ? (y == null && (y = u), typeof a.type == "function" && a.__k === f.__k ? a.__d = c = dl(a, c, e) : c = vl(e, a, f, v, u, c), typeof n.type == "function" && (n.__d = c)) : c && f.__e == c && c.parentNode != e && (c = gn(f));
    }
  for (n.__e = y, s = g; s--; )
    v[s] != null && yl(v[s], v[s]);
  if (d)
    for (s = 0; s < d.length; s++)
      ml(d[s], d[++s], d[++s]);
}
function dl(e, t, n) {
  for (var o, i = e.__k, r = 0; i && r < i.length; r++)
    (o = i[r]) && (o.__ = e, t = typeof o.type == "function" ? dl(o, t, n) : vl(n, o, o, i, o.__e, t));
  return t;
}
function vl(e, t, n, o, i, r) {
  var l, _, c;
  if (t.__d !== void 0)
    l = t.__d, t.__d = void 0;
  else if (n == null || i != r || i.parentNode == null)
    e:
      if (r == null || r.parentNode !== e)
        e.appendChild(i), l = null;
      else {
        for (_ = r, c = 0; (_ = _.nextSibling) && c < o.length; c += 2)
          if (_ == i)
            break e;
        e.insertBefore(i, r), l = r;
      }
  return l !== void 0 ? l : i.nextSibling;
}
function mc(e, t, n, o, i) {
  var r;
  for (r in n)
    r === "children" || r === "key" || r in t || vo(e, r, null, n[r], o);
  for (r in t)
    i && typeof t[r] != "function" || r === "children" || r === "key" || r === "value" || r === "checked" || n[r] === t[r] || vo(e, r, t[r], n[r], o);
}
function Es(e, t, n) {
  t[0] === "-" ? e.setProperty(t, n) : e[t] = n == null ? "" : typeof n != "number" || vc.test(t) ? n : n + "px";
}
function vo(e, t, n, o, i) {
  var r;
  e:
    if (t === "style")
      if (typeof n == "string")
        e.style.cssText = n;
      else {
        if (typeof o == "string" && (e.style.cssText = o = ""), o)
          for (t in o)
            n && t in n || Es(e.style, t, "");
        if (n)
          for (t in n)
            o && n[t] === o[t] || Es(e.style, t, n[t]);
      }
    else if (t[0] === "o" && t[1] === "n")
      r = t !== (t = t.replace(/Capture$/, "")), t = t.toLowerCase() in e ? t.toLowerCase().slice(2) : t.slice(2), e.l || (e.l = {}), e.l[t + r] = n, n ? o || e.addEventListener(t, r ? Ms : Ss, r) : e.removeEventListener(t, r ? Ms : Ss, r);
    else if (t !== "dangerouslySetInnerHTML") {
      if (i)
        t = t.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
      else if (t !== "href" && t !== "list" && t !== "form" && t !== "tabIndex" && t !== "download" && t in e)
        try {
          e[t] = n == null ? "" : n;
          break e;
        } catch {
        }
      typeof n == "function" || (n == null || n === !1 && t.indexOf("-") == -1 ? e.removeAttribute(t) : e.setAttribute(t, n));
    }
}
function Ss(e) {
  this.l[e.type + !1](U.event ? U.event(e) : e);
}
function Ms(e) {
  this.l[e.type + !0](U.event ? U.event(e) : e);
}
function gl(e, t, n, o, i, r, l, _, c) {
  var p, s, h, f, a, u, y, d, v, g, k, w, E, $, x, m = t.type;
  if (t.constructor !== void 0)
    return null;
  n.__h != null && (c = n.__h, _ = t.__e = n.__e, t.__h = null, r = [_]), (p = U.__b) && p(t);
  try {
    e:
      if (typeof m == "function") {
        if (d = t.props, v = (p = m.contextType) && o[p.__c], g = p ? v ? v.props.value : p.__ : o, n.__c ? y = (s = t.__c = n.__c).__ = s.__E : ("prototype" in m && m.prototype.render ? t.__c = s = new m(d, g) : (t.__c = s = new Xt(d, g), s.constructor = m, s.render = wc), v && v.sub(s), s.props = d, s.state || (s.state = {}), s.context = g, s.__n = o, h = s.__d = !0, s.__h = [], s._sb = []), s.__s == null && (s.__s = s.state), m.getDerivedStateFromProps != null && (s.__s == s.state && (s.__s = Ge({}, s.__s)), Ge(s.__s, m.getDerivedStateFromProps(d, s.__s))), f = s.props, a = s.state, h)
          m.getDerivedStateFromProps == null && s.componentWillMount != null && s.componentWillMount(), s.componentDidMount != null && s.__h.push(s.componentDidMount);
        else {
          if (m.getDerivedStateFromProps == null && d !== f && s.componentWillReceiveProps != null && s.componentWillReceiveProps(d, g), !s.__e && s.shouldComponentUpdate != null && s.shouldComponentUpdate(d, s.__s, g) === !1 || t.__v === n.__v) {
            for (s.props = d, s.state = s.__s, t.__v !== n.__v && (s.__d = !1), s.__v = t, t.__e = n.__e, t.__k = n.__k, t.__k.forEach(function(C) {
              C && (C.__ = t);
            }), k = 0; k < s._sb.length; k++)
              s.__h.push(s._sb[k]);
            s._sb = [], s.__h.length && l.push(s);
            break e;
          }
          s.componentWillUpdate != null && s.componentWillUpdate(d, s.__s, g), s.componentDidUpdate != null && s.__h.push(function() {
            s.componentDidUpdate(f, a, u);
          });
        }
        if (s.context = g, s.props = d, s.__v = t, s.__P = e, w = U.__r, E = 0, "prototype" in m && m.prototype.render) {
          for (s.state = s.__s, s.__d = !1, w && w(t), p = s.render(s.props, s.state, s.context), $ = 0; $ < s._sb.length; $++)
            s.__h.push(s._sb[$]);
          s._sb = [];
        } else
          do
            s.__d = !1, w && w(t), p = s.render(s.props, s.state, s.context), s.state = s.__s;
          while (s.__d && ++E < 25);
        s.state = s.__s, s.getChildContext != null && (o = Ge(Ge({}, o), s.getChildContext())), h || s.getSnapshotBeforeUpdate == null || (u = s.getSnapshotBeforeUpdate(f, a)), x = p != null && p.type === Dr && p.key == null ? p.props.children : p, hl(e, Array.isArray(x) ? x : [x], t, n, o, i, r, l, _, c), s.base = t.__e, t.__h = null, s.__h.length && l.push(s), y && (s.__E = s.__ = null), s.__e = !1;
      } else
        r == null && t.__v === n.__v ? (t.__k = n.__k, t.__e = n.__e) : t.__e = bc(n.__e, t, n, o, i, r, l, c);
    (p = U.diffed) && p(t);
  } catch (C) {
    t.__v = null, (c || r != null) && (t.__e = _, t.__h = !!c, r[r.indexOf(_)] = null), U.__e(C, t, n);
  }
}
function yc(e, t) {
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
function bc(e, t, n, o, i, r, l, _) {
  var c, p, s, h = n.props, f = t.props, a = t.type, u = 0;
  if (a === "svg" && (i = !0), r != null) {
    for (; u < r.length; u++)
      if ((c = r[u]) && "setAttribute" in c == !!a && (a ? c.localName === a : c.nodeType === 3)) {
        e = c, r[u] = null;
        break;
      }
  }
  if (e == null) {
    if (a === null)
      return document.createTextNode(f);
    e = i ? document.createElementNS("http://www.w3.org/2000/svg", a) : document.createElement(a, f.is && f), r = null, _ = !1;
  }
  if (a === null)
    h === f || _ && e.data === f || (e.data = f);
  else {
    if (r = r && Or.call(e.childNodes), p = (h = n.props || cl).dangerouslySetInnerHTML, s = f.dangerouslySetInnerHTML, !_) {
      if (r != null)
        for (h = {}, u = 0; u < e.attributes.length; u++)
          h[e.attributes[u].name] = e.attributes[u].value;
      (s || p) && (s && (p && s.__html == p.__html || s.__html === e.innerHTML) || (e.innerHTML = s && s.__html || ""));
    }
    if (mc(e, f, h, i, _), s)
      t.__k = [];
    else if (u = t.props.children, hl(e, Array.isArray(u) ? u : [u], t, n, o, i && a !== "foreignObject", r, l, r ? r[0] : n.__k && gn(n, 0), _), r != null)
      for (u = r.length; u--; )
        r[u] != null && ul(r[u]);
    _ || ("value" in f && (u = f.value) !== void 0 && (u !== e.value || a === "progress" && !u || a === "option" && u !== h.value) && vo(e, "value", u, h.value, !1), "checked" in f && (u = f.checked) !== void 0 && u !== e.checked && vo(e, "checked", u, h.checked, !1));
  }
  return e;
}
function ml(e, t, n) {
  try {
    typeof e == "function" ? e(t) : e.current = t;
  } catch (o) {
    U.__e(o, n);
  }
}
function yl(e, t, n) {
  var o, i;
  if (U.unmount && U.unmount(e), (o = e.ref) && (o.current && o.current !== e.__e || ml(o, null, t)), (o = e.__c) != null) {
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
      o[i] && yl(o[i], t, n || typeof e.type != "function");
  n || e.__e == null || ul(e.__e), e.__ = e.__e = e.__d = void 0;
}
function wc(e, t, n) {
  return this.constructor(e, n);
}
Or = fl.slice, U = { __e: function(e, t, n, o) {
  for (var i, r, l; t = t.__; )
    if ((i = t.__c) && !i.__)
      try {
        if ((r = i.constructor) && r.getDerivedStateFromError != null && (i.setState(r.getDerivedStateFromError(e)), l = i.__d), i.componentDidCatch != null && (i.componentDidCatch(e, o || {}), l = i.__d), l)
          return i.__E = i;
      } catch (_) {
        e = _;
      }
  throw e;
} }, al = 0, _l = function(e) {
  return e != null && e.constructor === void 0;
}, Xt.prototype.setState = function(e, t) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = Ge({}, this.state), typeof e == "function" && (e = e(Ge({}, n), this.props)), e && Ge(n, e), e != null && this.__v && (t && this._sb.push(t), Cs(this));
}, Xt.prototype.forceUpdate = function(e) {
  this.__v && (this.__e = !0, e && this.__h.push(e), Cs(this));
}, Xt.prototype.render = Dr, Kt = [], ho.__r = 0;
const P = (...e) => {
  const t = e.map((n) => Array.isArray(n) ? P(...n) : typeof n == "function" ? P(n()) : n !== null && typeof n == "object" ? Object.keys(n).filter((o) => {
    const i = n[o];
    return typeof i == "function" ? !!i() : !!i;
  }).join(" ") : n).filter((n) => typeof n == "string" && n.length);
  return t.length ? t.join(" ") : void 0;
};
function kc({
  component: e = "div",
  className: t,
  children: n,
  style: o,
  attrs: i
}) {
  return ne(e, {
    className: P(t),
    style: o,
    ...i
  }, n);
}
function bl({
  component: e = "a",
  className: t,
  children: n,
  attrs: o,
  url: i,
  disabled: r,
  active: l,
  icon: _,
  text: c,
  target: p,
  trailingIcon: s,
  hint: h,
  style: f,
  onClick: a
}) {
  const u = [
    typeof _ == "string" ? /* @__PURE__ */ ne("i", {
      class: `icon ${_}`
    }) : _,
    /* @__PURE__ */ ne("span", {
      className: "text"
    }, c),
    typeof n == "function" ? n() : n,
    typeof s == "string" ? /* @__PURE__ */ ne("i", {
      class: `icon ${s}`
    }) : s
  ];
  return ne(e, {
    className: P(t, { disabled: r, active: l }),
    title: h,
    [e === "a" ? "href" : "data-url"]: i,
    [e === "a" ? "target" : "data-target"]: p,
    style: f,
    onClick: a,
    ...o
  }, ...u);
}
function $c({
  component: e = "div",
  className: t,
  text: n,
  attrs: o,
  children: i,
  style: r,
  onClick: l
}) {
  return ne(e, {
    className: P(t),
    style: r,
    onClick: l,
    ...o
  }, n, typeof i == "function" ? i() : i);
}
function xc({
  component: e = "div",
  className: t,
  style: n,
  space: o,
  flex: i,
  attrs: r,
  onClick: l,
  children: _
}) {
  return ne(e, {
    className: P(t),
    style: { width: o, height: o, flex: i, ...n },
    onClick: l,
    ...r
  }, _);
}
function Cc(e) {
  const {
    tag: t,
    className: n,
    style: o,
    renders: i,
    generateArgs: r = [],
    generatorThis: l,
    generators: _,
    onGenerate: c,
    onRenderItem: p,
    ...s
  } = e, h = [n], f = { ...o }, a = [], u = [];
  return i.forEach((y) => {
    var v;
    const d = [];
    typeof y == "string" && _ && _[y] && (y = _[y]), typeof y == "function" ? c ? d.push(...c.call(l, y, a, ...r)) : d.push(...(v = y.call(l, a, ...r)) != null ? v : []) : d.push(y), d.forEach((g) => {
      var k;
      g != null && (typeof g == "object" && !Zi(g) && ("html" in g || "__html" in g || "className" in g || "style" in g || "attrs" in g || "children" in g) ? g.html ? a.push(
        /* @__PURE__ */ nr("div", {
          className: P(g.className),
          style: g.style,
          dangerouslySetInnerHTML: { __html: g.html },
          ...(k = g.attrs) != null ? k : {}
        })
      ) : g.__html ? u.push(g.__html) : (g.style && Object.assign(f, g.style), g.className && h.push(g.className), g.children && a.push(g.children), g.attrs && Object.assign(s, g.attrs)) : a.push(g));
    });
  }), u.length && Object.assign(s, { dangerouslySetInnerHTML: { __html: u } }), [{
    className: P(h),
    style: f,
    ...s
  }, a];
}
function yr({
  tag: e = "div",
  ...t
}) {
  const [n, o] = Cc(t);
  return nr(e, n, ...o);
}
function Ec(e) {
  return /* @__PURE__ */ ne(yr, {
    ...e
  });
}
function wl({
  component: e = "div",
  className: t,
  children: n,
  style: o,
  attrs: i
}) {
  return ne(e, {
    className: P(t),
    style: o,
    ...i
  }, n);
}
const Bo = class extends Xt {
  constructor() {
    super(...arguments);
    S(this, "ref", gc());
  }
  get name() {
    var n;
    return (n = this.props.name) != null ? n : this.constructor.NAME;
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
    const { itemProps: r, onClickItem: l } = n, _ = { key: i, ...o };
    return r && Object.assign(_, r[o.type || "item"]), (l || o.onClick) && (_.onClick = this.handleItemClick.bind(this, _, i, o.onClick)), _.className = P(_.className), _;
  }
  renderItem(n, o, i) {
    const r = this.getItemRenderProps(n, o, i), { itemRender: l } = n;
    if (l) {
      if (typeof l == "object") {
        const d = l[o.type || "item"];
        if (d)
          return /* @__PURE__ */ ne(d, {
            ...r
          });
      } else if (typeof l == "function") {
        const d = l.call(this, r, ne);
        if (_l(d))
          return d;
        typeof d == "object" && Object.assign(r, d);
      }
    }
    const { type: _ = "item", component: c, key: p = i, rootAttrs: s, rootClass: h, rootStyle: f, rootChildren: a, ...u } = r, y = !c || typeof c == "string" ? this.constructor.ItemComponents && this.constructor.ItemComponents[_] || Bo.ItemComponents[_] : c;
    return Object.assign(u, {
      type: _,
      component: typeof c == "string" ? c : void 0
    }), this.renderTypedItem(y, {
      className: P(h),
      children: a,
      style: f,
      key: p,
      ...s
    }, {
      ...u,
      type: _,
      component: typeof c == "string" ? c : void 0
    });
  }
  renderTypedItem(n, o, i) {
    const { children: r, className: l, key: _, ...c } = o;
    return /* @__PURE__ */ ne("li", {
      className: P(`${this.name}-${i.type}`, l),
      key: _,
      ...c
    }, /* @__PURE__ */ ne(n, {
      ...i
    }), typeof r == "function" ? r() : r);
  }
  render() {
    const n = this.beforeRender(), {
      name: o,
      style: i,
      itemProps: r,
      className: l,
      items: _,
      children: c,
      itemRender: p,
      onClickItem: s,
      beforeRender: h,
      afterRender: f,
      beforeDestroy: a,
      ...u
    } = n, y = this.constructor.ROOT_TAG;
    return /* @__PURE__ */ ne(y, {
      class: P(this.name, l),
      ...u,
      ref: this.ref
    }, _ && _.map(this.renderItem.bind(this, n)), c);
  }
};
let Oe = Bo;
S(Oe, "ItemComponents", {
  divider: kc,
  item: bl,
  heading: $c,
  space: xc,
  custom: Ec,
  basic: wl
}), S(Oe, "ROOT_TAG", "menu"), S(Oe, "NAME", "action-menu");
class Ts extends Ce {
}
S(Ts, "NAME", "actionmenu"), S(Ts, "Component", Oe);
function As({
  ...e
}) {
  return /* @__PURE__ */ ne(bl, {
    ...e
  });
}
var Rn, me, wt;
class Hr extends Oe {
  constructor(n) {
    var o;
    super(n);
    M(this, Rn, /* @__PURE__ */ new Set());
    M(this, me, void 0);
    M(this, wt, (n, o, i) => {
      this.toggleNestedMenu(n, o), i.preventDefault();
    });
    N(this, me, n.nestedShow === void 0), b(this, me) && (this.state = { nestedShow: (o = n.defaultNestedShow) != null ? o : {} });
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
    const i = this.constructor;
    return /* @__PURE__ */ ne(i, {
      items: o,
      name: this.props.name,
      nestedShow: b(this, me) ? this.state.nestedShow : this.props.nestedShow,
      nestedTrigger: this.nestedTrigger,
      controlledMenu: this.props.controlledMenu || this,
      itemProps: this.props.itemProps,
      onClickItem: this.props.onClickItem,
      afterRender: this.props.afterRender,
      beforeRender: this.props.beforeRender,
      beforeDestroy: this.props.beforeDestroy,
      itemRender: this.props.itemRender
    });
  }
  isNestedItem(n) {
    return (!n.type || n.type === "item") && !!n.items;
  }
  renderToggleIcon(n, o) {
  }
  getItemRenderProps(n, o, i) {
    var p;
    const r = super.getItemRenderProps(n, o, i);
    if (!this.isNestedItem(r))
      return r;
    const l = (p = r.key) != null ? p : i;
    b(this, Rn).add(l);
    const _ = this.isNestedMenuShow(l);
    if (_ && (r.rootChildren = [
      r.rootChildren,
      this.renderNestedMenu(o)
    ], r.component = As), this.nestedTrigger === "hover")
      r.rootAttrs = {
        ...r.rootAttrs,
        onMouseEnter: b(this, wt).bind(this, l, !0),
        onMouseLeave: b(this, wt).bind(this, l, !1)
      };
    else if (this.nestedTrigger === "click") {
      const { onClick: s } = r;
      r.onClick = (h) => {
        b(this, wt).call(this, l, void 0, h), s == null || s(h);
      };
    }
    const c = this.renderToggleIcon(_, r);
    return c && (r.children = [r.children, c]), r.rootClass = [r.rootClass, "has-nested-menu", _ ? "show" : ""], r;
  }
  isNestedMenuShow(n) {
    const o = b(this, me) ? this.state.nestedShow : this.props.nestedShow;
    return o && typeof o == "object" ? o[n] : !!o;
  }
  toggleNestedMenu(n, o) {
    const { controlledMenu: i } = this.props;
    if (i)
      return i.toggleNestedMenu(n, o);
    if (!b(this, me))
      return !1;
    let { nestedShow: r = {} } = this.state;
    if (typeof r == "boolean" && (r === !0 ? r = [...b(this, Rn).values()].reduce((l, _) => (l[_] = !0, l), {}) : r = {}), o === void 0)
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
    !b(this, me) || this.setState({ nestedShow: !0 });
  }
  hideAllNestedMenu() {
    !b(this, me) || this.setState({ nestedShow: !1 });
  }
}
Rn = new WeakMap(), me = new WeakMap(), wt = new WeakMap(), S(Hr, "ItemComponents", {
  item: As
});
class Ns extends Ce {
}
S(Ns, "NAME", "actionmenunested"), S(Ns, "Component", Hr);
var kl, br, $l, Sc = [];
function Mc(e, t, n) {
  var o, i, r, l = {};
  for (r in t)
    r == "key" ? o = t[r] : r == "ref" ? i = t[r] : l[r] = t[r];
  if (arguments.length > 2 && (l.children = arguments.length > 3 ? kl.call(arguments, 2) : n), typeof e == "function" && e.defaultProps != null)
    for (r in e.defaultProps)
      l[r] === void 0 && (l[r] = e.defaultProps[r]);
  return Tc(e, l, o, i, null);
}
function Tc(e, t, n, o, i) {
  var r = { type: e, props: t, key: n, ref: o, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: i == null ? ++$l : i };
  return i == null && br.vnode != null && br.vnode(r), r;
}
kl = Sc.slice, br = { __e: function(e, t, n, o) {
  for (var i, r, l; t = t.__; )
    if ((i = t.__c) && !i.__)
      try {
        if ((r = i.constructor) && r.getDerivedStateFromError != null && (i.setState(r.getDerivedStateFromError(e)), l = i.__d), i.componentDidCatch != null && (i.componentDidCatch(e, o || {}), l = i.__d), l)
          return i.__E = i;
      } catch (_) {
        e = _;
      }
  throw e;
} }, $l = 0;
class Ir extends Hr {
  get nestedTrigger() {
    return this.props.nestedTrigger || "click";
  }
  get menuName() {
    return "menu-nested";
  }
  beforeRender() {
    const t = super.beforeRender();
    let { hasIcons: n } = t;
    return n === void 0 && (n = t.items.some((o) => o.icon)), t.className = P(t.className, this.menuName, {
      "has-icons": n,
      "has-nested-items": t.items.some((o) => this.isNestedItem(o))
    }), t;
  }
  renderToggleIcon(t) {
    return /* @__PURE__ */ Mc("span", {
      class: `${this.name}-toggle-icon caret-${t ? "down" : "right"}`
    });
  }
}
S(Ir, "NAME", "menu");
class Rs extends Ce {
}
S(Rs, "NAME", "menu"), S(Rs, "Component", Ir);
var Wr, j, xl, Jt, Ps, Cl = {}, El = [], Ac = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function Ye(e, t) {
  for (var n in t)
    e[n] = t[n];
  return e;
}
function Sl(e) {
  var t = e.parentNode;
  t && t.removeChild(e);
}
function qn(e, t, n) {
  var o, i, r, l = {};
  for (r in t)
    r == "key" ? o = t[r] : r == "ref" ? i = t[r] : l[r] = t[r];
  if (arguments.length > 2 && (l.children = arguments.length > 3 ? Wr.call(arguments, 2) : n), typeof e == "function" && e.defaultProps != null)
    for (r in e.defaultProps)
      l[r] === void 0 && (l[r] = e.defaultProps[r]);
  return Jn(e, l, o, i, null);
}
function Jn(e, t, n, o, i) {
  var r = { type: e, props: t, key: n, ref: o, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: i == null ? ++xl : i };
  return i == null && j.vnode != null && j.vnode(r), r;
}
function Ur(e) {
  return e.children;
}
function Zt(e, t) {
  this.props = e, this.context = t;
}
function mn(e, t) {
  if (t == null)
    return e.__ ? mn(e.__, e.__.__k.indexOf(e) + 1) : null;
  for (var n; t < e.__k.length; t++)
    if ((n = e.__k[t]) != null && n.__e != null)
      return n.__e;
  return typeof e.type == "function" ? mn(e) : null;
}
function Ml(e) {
  var t, n;
  if ((e = e.__) != null && e.__c != null) {
    for (e.__e = e.__c.base = null, t = 0; t < e.__k.length; t++)
      if ((n = e.__k[t]) != null && n.__e != null) {
        e.__e = e.__c.base = n.__e;
        break;
      }
    return Ml(e);
  }
}
function Ls(e) {
  (!e.__d && (e.__d = !0) && Jt.push(e) && !go.__r++ || Ps !== j.debounceRendering) && ((Ps = j.debounceRendering) || setTimeout)(go);
}
function go() {
  for (var e; go.__r = Jt.length; )
    e = Jt.sort(function(t, n) {
      return t.__v.__b - n.__v.__b;
    }), Jt = [], e.some(function(t) {
      var n, o, i, r, l, _;
      t.__d && (l = (r = (n = t).__v).__e, (_ = n.__P) && (o = [], (i = Ye({}, r)).__v = r.__v + 1, Rl(_, r, i, n.__n, _.ownerSVGElement !== void 0, r.__h != null ? [l] : null, o, l == null ? mn(r) : l, r.__h), Rc(o, r), r.__e != l && Ml(r)));
    });
}
function Tl(e, t, n, o, i, r, l, _, c, p) {
  var s, h, f, a, u, y, d, v = o && o.__k || El, g = v.length;
  for (n.__k = [], s = 0; s < t.length; s++)
    if ((a = n.__k[s] = (a = t[s]) == null || typeof a == "boolean" ? null : typeof a == "string" || typeof a == "number" || typeof a == "bigint" ? Jn(null, a, null, null, a) : Array.isArray(a) ? Jn(Ur, { children: a }, null, null, null) : a.__b > 0 ? Jn(a.type, a.props, a.key, a.ref ? a.ref : null, a.__v) : a) != null) {
      if (a.__ = n, a.__b = n.__b + 1, (f = v[s]) === null || f && a.key == f.key && a.type === f.type)
        v[s] = void 0;
      else
        for (h = 0; h < g; h++) {
          if ((f = v[h]) && a.key == f.key && a.type === f.type) {
            v[h] = void 0;
            break;
          }
          f = null;
        }
      Rl(e, a, f = f || Cl, i, r, l, _, c, p), u = a.__e, (h = a.ref) && f.ref != h && (d || (d = []), f.ref && d.push(f.ref, null, a), d.push(h, a.__c || u, a)), u != null ? (y == null && (y = u), typeof a.type == "function" && a.__k === f.__k ? a.__d = c = Al(a, c, e) : c = Nl(e, a, f, v, u, c), typeof n.type == "function" && (n.__d = c)) : c && f.__e == c && c.parentNode != e && (c = mn(f));
    }
  for (n.__e = y, s = g; s--; )
    v[s] != null && Ll(v[s], v[s]);
  if (d)
    for (s = 0; s < d.length; s++)
      Pl(d[s], d[++s], d[++s]);
}
function Al(e, t, n) {
  for (var o, i = e.__k, r = 0; i && r < i.length; r++)
    (o = i[r]) && (o.__ = e, t = typeof o.type == "function" ? Al(o, t, n) : Nl(n, o, o, i, o.__e, t));
  return t;
}
function Nl(e, t, n, o, i, r) {
  var l, _, c;
  if (t.__d !== void 0)
    l = t.__d, t.__d = void 0;
  else if (n == null || i != r || i.parentNode == null)
    e:
      if (r == null || r.parentNode !== e)
        e.appendChild(i), l = null;
      else {
        for (_ = r, c = 0; (_ = _.nextSibling) && c < o.length; c += 2)
          if (_ == i)
            break e;
        e.insertBefore(i, r), l = r;
      }
  return l !== void 0 ? l : i.nextSibling;
}
function Nc(e, t, n, o, i) {
  var r;
  for (r in n)
    r === "children" || r === "key" || r in t || mo(e, r, null, n[r], o);
  for (r in t)
    i && typeof t[r] != "function" || r === "children" || r === "key" || r === "value" || r === "checked" || n[r] === t[r] || mo(e, r, t[r], n[r], o);
}
function Os(e, t, n) {
  t[0] === "-" ? e.setProperty(t, n) : e[t] = n == null ? "" : typeof n != "number" || Ac.test(t) ? n : n + "px";
}
function mo(e, t, n, o, i) {
  var r;
  e:
    if (t === "style")
      if (typeof n == "string")
        e.style.cssText = n;
      else {
        if (typeof o == "string" && (e.style.cssText = o = ""), o)
          for (t in o)
            n && t in n || Os(e.style, t, "");
        if (n)
          for (t in n)
            o && n[t] === o[t] || Os(e.style, t, n[t]);
      }
    else if (t[0] === "o" && t[1] === "n")
      r = t !== (t = t.replace(/Capture$/, "")), t = t.toLowerCase() in e ? t.toLowerCase().slice(2) : t.slice(2), e.l || (e.l = {}), e.l[t + r] = n, n ? o || e.addEventListener(t, r ? Hs : Ds, r) : e.removeEventListener(t, r ? Hs : Ds, r);
    else if (t !== "dangerouslySetInnerHTML") {
      if (i)
        t = t.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
      else if (t !== "href" && t !== "list" && t !== "form" && t !== "tabIndex" && t !== "download" && t in e)
        try {
          e[t] = n == null ? "" : n;
          break e;
        } catch {
        }
      typeof n == "function" || (n == null || n === !1 && t.indexOf("-") == -1 ? e.removeAttribute(t) : e.setAttribute(t, n));
    }
}
function Ds(e) {
  this.l[e.type + !1](j.event ? j.event(e) : e);
}
function Hs(e) {
  this.l[e.type + !0](j.event ? j.event(e) : e);
}
function Rl(e, t, n, o, i, r, l, _, c) {
  var p, s, h, f, a, u, y, d, v, g, k, w, E, $, x, m = t.type;
  if (t.constructor !== void 0)
    return null;
  n.__h != null && (c = n.__h, _ = t.__e = n.__e, t.__h = null, r = [_]), (p = j.__b) && p(t);
  try {
    e:
      if (typeof m == "function") {
        if (d = t.props, v = (p = m.contextType) && o[p.__c], g = p ? v ? v.props.value : p.__ : o, n.__c ? y = (s = t.__c = n.__c).__ = s.__E : ("prototype" in m && m.prototype.render ? t.__c = s = new m(d, g) : (t.__c = s = new Zt(d, g), s.constructor = m, s.render = Lc), v && v.sub(s), s.props = d, s.state || (s.state = {}), s.context = g, s.__n = o, h = s.__d = !0, s.__h = [], s._sb = []), s.__s == null && (s.__s = s.state), m.getDerivedStateFromProps != null && (s.__s == s.state && (s.__s = Ye({}, s.__s)), Ye(s.__s, m.getDerivedStateFromProps(d, s.__s))), f = s.props, a = s.state, h)
          m.getDerivedStateFromProps == null && s.componentWillMount != null && s.componentWillMount(), s.componentDidMount != null && s.__h.push(s.componentDidMount);
        else {
          if (m.getDerivedStateFromProps == null && d !== f && s.componentWillReceiveProps != null && s.componentWillReceiveProps(d, g), !s.__e && s.shouldComponentUpdate != null && s.shouldComponentUpdate(d, s.__s, g) === !1 || t.__v === n.__v) {
            for (s.props = d, s.state = s.__s, t.__v !== n.__v && (s.__d = !1), s.__v = t, t.__e = n.__e, t.__k = n.__k, t.__k.forEach(function(C) {
              C && (C.__ = t);
            }), k = 0; k < s._sb.length; k++)
              s.__h.push(s._sb[k]);
            s._sb = [], s.__h.length && l.push(s);
            break e;
          }
          s.componentWillUpdate != null && s.componentWillUpdate(d, s.__s, g), s.componentDidUpdate != null && s.__h.push(function() {
            s.componentDidUpdate(f, a, u);
          });
        }
        if (s.context = g, s.props = d, s.__v = t, s.__P = e, w = j.__r, E = 0, "prototype" in m && m.prototype.render) {
          for (s.state = s.__s, s.__d = !1, w && w(t), p = s.render(s.props, s.state, s.context), $ = 0; $ < s._sb.length; $++)
            s.__h.push(s._sb[$]);
          s._sb = [];
        } else
          do
            s.__d = !1, w && w(t), p = s.render(s.props, s.state, s.context), s.state = s.__s;
          while (s.__d && ++E < 25);
        s.state = s.__s, s.getChildContext != null && (o = Ye(Ye({}, o), s.getChildContext())), h || s.getSnapshotBeforeUpdate == null || (u = s.getSnapshotBeforeUpdate(f, a)), x = p != null && p.type === Ur && p.key == null ? p.props.children : p, Tl(e, Array.isArray(x) ? x : [x], t, n, o, i, r, l, _, c), s.base = t.__e, t.__h = null, s.__h.length && l.push(s), y && (s.__E = s.__ = null), s.__e = !1;
      } else
        r == null && t.__v === n.__v ? (t.__k = n.__k, t.__e = n.__e) : t.__e = Pc(n.__e, t, n, o, i, r, l, c);
    (p = j.diffed) && p(t);
  } catch (C) {
    t.__v = null, (c || r != null) && (t.__e = _, t.__h = !!c, r[r.indexOf(_)] = null), j.__e(C, t, n);
  }
}
function Rc(e, t) {
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
function Pc(e, t, n, o, i, r, l, _) {
  var c, p, s, h = n.props, f = t.props, a = t.type, u = 0;
  if (a === "svg" && (i = !0), r != null) {
    for (; u < r.length; u++)
      if ((c = r[u]) && "setAttribute" in c == !!a && (a ? c.localName === a : c.nodeType === 3)) {
        e = c, r[u] = null;
        break;
      }
  }
  if (e == null) {
    if (a === null)
      return document.createTextNode(f);
    e = i ? document.createElementNS("http://www.w3.org/2000/svg", a) : document.createElement(a, f.is && f), r = null, _ = !1;
  }
  if (a === null)
    h === f || _ && e.data === f || (e.data = f);
  else {
    if (r = r && Wr.call(e.childNodes), p = (h = n.props || Cl).dangerouslySetInnerHTML, s = f.dangerouslySetInnerHTML, !_) {
      if (r != null)
        for (h = {}, u = 0; u < e.attributes.length; u++)
          h[e.attributes[u].name] = e.attributes[u].value;
      (s || p) && (s && (p && s.__html == p.__html || s.__html === e.innerHTML) || (e.innerHTML = s && s.__html || ""));
    }
    if (Nc(e, f, h, i, _), s)
      t.__k = [];
    else if (u = t.props.children, Tl(e, Array.isArray(u) ? u : [u], t, n, o, i && a !== "foreignObject", r, l, r ? r[0] : n.__k && mn(n, 0), _), r != null)
      for (u = r.length; u--; )
        r[u] != null && Sl(r[u]);
    _ || ("value" in f && (u = f.value) !== void 0 && (u !== e.value || a === "progress" && !u || a === "option" && u !== h.value) && mo(e, "value", u, h.value, !1), "checked" in f && (u = f.checked) !== void 0 && u !== e.checked && mo(e, "checked", u, h.checked, !1));
  }
  return e;
}
function Pl(e, t, n) {
  try {
    typeof e == "function" ? e(t) : e.current = t;
  } catch (o) {
    j.__e(o, n);
  }
}
function Ll(e, t, n) {
  var o, i;
  if (j.unmount && j.unmount(e), (o = e.ref) && (o.current && o.current !== e.__e || Pl(o, null, t)), (o = e.__c) != null) {
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
      o[i] && Ll(o[i], t, n || typeof e.type != "function");
  n || e.__e == null || Sl(e.__e), e.__ = e.__e = e.__d = void 0;
}
function Lc(e, t, n) {
  return this.constructor(e, n);
}
Wr = El.slice, j = { __e: function(e, t, n, o) {
  for (var i, r, l; t = t.__; )
    if ((i = t.__c) && !i.__)
      try {
        if ((r = i.constructor) && r.getDerivedStateFromError != null && (i.setState(r.getDerivedStateFromError(e)), l = i.__d), i.componentDidCatch != null && (i.componentDidCatch(e, o || {}), l = i.__d), l)
          return i.__E = i;
      } catch (_) {
        e = _;
      }
  throw e;
} }, xl = 0, Zt.prototype.setState = function(e, t) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = Ye({}, this.state), typeof e == "function" && (e = e(Ye({}, n), this.props)), e && Ye(n, e), e != null && this.__v && (t && this._sb.push(t), Ls(this));
}, Zt.prototype.forceUpdate = function(e) {
  this.__v && (this.__e = !0, e && this.__h.push(e), Ls(this));
}, Zt.prototype.render = Ur, Jt = [], go.__r = 0;
class wr extends Zt {
  render() {
    const { percent: t, circleSize: n, circleBorderSize: o, circleBgColor: i, circleColor: r } = this.props, l = (n - o) / 2, _ = n / 2;
    return /* @__PURE__ */ qn("svg", {
      width: n,
      height: n,
      class: "progress-circle"
    }, /* @__PURE__ */ qn("circle", {
      cx: _,
      cy: _,
      r: l,
      stroke: i,
      "stroke-width": o
    }), /* @__PURE__ */ qn("circle", {
      cx: _,
      cy: _,
      r: l,
      stroke: r,
      "stroke-dasharray": Math.PI * l * 2,
      "stroke-dashoffset": Math.PI * l * 2 * (100 - t) / 100,
      "stroke-width": o
    }), /* @__PURE__ */ qn("text", {
      x: _,
      y: _ + o / 4,
      "dominant-baseline": "middle",
      style: { fontSize: `${l}px` }
    }, Math.round(t)));
  }
}
S(wr, "NAME", "zui.progress-circle"), S(wr, "defaultProps", {
  circleSize: 24,
  circleBorderSize: 2,
  circleBgColor: "var(--progress-circle-bg)",
  circleColor: "var(--progress-circle-bar-color)"
});
class Is extends Ce {
}
S(Is, "NAME", "table-sorter"), S(Is, "Component", wr);
function Oc(e) {
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
function Dc(e) {
  document.readyState !== "loading" ? e() : document.addEventListener("DOMContentLoaded", e);
}
function Hc(e, t) {
  const n = typeof e == "string" ? document.querySelector(e) : e;
  if (!n)
    return !1;
  const o = n.getBoundingClientRect(), i = window.innerHeight || document.documentElement.clientHeight, r = window.innerWidth || document.documentElement.clientWidth;
  if (t != null && t.fullyCheck)
    return o.left >= 0 && o.top >= 0 && o.left + o.width <= r && o.top + o.height <= i;
  const l = o.top <= i && o.top + o.height >= 0, _ = o.left <= r && o.left + o.width >= 0;
  return l && _;
}
const Xp = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  selectText: Oc,
  domReady: Dc,
  isElementVisible: Hc,
  classes: P
}, Symbol.toStringTag, { value: "Module" }));
let Ic = (e = 21) => crypto.getRandomValues(new Uint8Array(e)).reduce((t, n) => (n &= 63, n < 36 ? t += n.toString(36) : n < 62 ? t += (n - 26).toString(36).toUpperCase() : n > 62 ? t += "-" : t += "_", t), "");
var Pn, je, ye, kt, $t, Zn;
const fs = class {
  constructor(t, n = "local") {
    M(this, $t);
    M(this, Pn, void 0);
    M(this, je, void 0);
    M(this, ye, void 0);
    M(this, kt, void 0);
    N(this, Pn, n), N(this, je, `ZUI_STORE:${t != null ? t : Ic()}`), N(this, ye, n === "local" ? localStorage : sessionStorage);
  }
  get type() {
    return b(this, Pn);
  }
  get session() {
    return this.type === "session" ? this : (b(this, kt) || N(this, kt, new fs(b(this, je), "session")), b(this, kt));
  }
  get(t, n) {
    const o = b(this, ye).getItem(J(this, $t, Zn).call(this, t));
    return typeof o == "string" ? JSON.parse(o) : o != null ? o : n;
  }
  set(t, n) {
    if (n == null)
      return this.remove(t);
    b(this, ye).setItem(J(this, $t, Zn).call(this, t), JSON.stringify(n));
  }
  remove(t) {
    b(this, ye).removeItem(J(this, $t, Zn).call(this, t));
  }
  each(t) {
    for (let n = 0; n < b(this, ye).length; n++) {
      const o = b(this, ye).key(n);
      if (o != null && o.startsWith(b(this, je))) {
        const i = b(this, ye).getItem(o);
        typeof i == "string" && t(o.substring(b(this, je).length + 1), JSON.parse(i));
      }
    }
  }
  getAll() {
    const t = {};
    return this.each((n, o) => {
      t[n] = o;
    }), t;
  }
};
let yo = fs;
Pn = new WeakMap(), je = new WeakMap(), ye = new WeakMap(), kt = new WeakMap(), $t = new WeakSet(), Zn = function(t) {
  return `${b(this, je)}:${t}`;
};
const Wc = new yo("DEFAULT");
function Uc(e, t = "local") {
  return new yo(e, t);
}
Object.assign(Wc, { create: Uc });
var jr, B, Ol, Qt, Ws, Dl = {}, Hl = [], jc = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function Ke(e, t) {
  for (var n in t)
    e[n] = t[n];
  return e;
}
function Il(e) {
  var t = e.parentNode;
  t && t.removeChild(e);
}
function hr(e, t, n) {
  var o, i, r, l = {};
  for (r in t)
    r == "key" ? o = t[r] : r == "ref" ? i = t[r] : l[r] = t[r];
  if (arguments.length > 2 && (l.children = arguments.length > 3 ? jr.call(arguments, 2) : n), typeof e == "function" && e.defaultProps != null)
    for (r in e.defaultProps)
      l[r] === void 0 && (l[r] = e.defaultProps[r]);
  return Qn(e, l, o, i, null);
}
function Qn(e, t, n, o, i) {
  var r = { type: e, props: t, key: n, ref: o, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: i == null ? ++Ol : i };
  return i == null && B.vnode != null && B.vnode(r), r;
}
function Br(e) {
  return e.children;
}
function en(e, t) {
  this.props = e, this.context = t;
}
function yn(e, t) {
  if (t == null)
    return e.__ ? yn(e.__, e.__.__k.indexOf(e) + 1) : null;
  for (var n; t < e.__k.length; t++)
    if ((n = e.__k[t]) != null && n.__e != null)
      return n.__e;
  return typeof e.type == "function" ? yn(e) : null;
}
function Wl(e) {
  var t, n;
  if ((e = e.__) != null && e.__c != null) {
    for (e.__e = e.__c.base = null, t = 0; t < e.__k.length; t++)
      if ((n = e.__k[t]) != null && n.__e != null) {
        e.__e = e.__c.base = n.__e;
        break;
      }
    return Wl(e);
  }
}
function Us(e) {
  (!e.__d && (e.__d = !0) && Qt.push(e) && !bo.__r++ || Ws !== B.debounceRendering) && ((Ws = B.debounceRendering) || setTimeout)(bo);
}
function bo() {
  for (var e; bo.__r = Qt.length; )
    e = Qt.sort(function(t, n) {
      return t.__v.__b - n.__v.__b;
    }), Qt = [], e.some(function(t) {
      var n, o, i, r, l, _;
      t.__d && (l = (r = (n = t).__v).__e, (_ = n.__P) && (o = [], (i = Ke({}, r)).__v = r.__v + 1, zl(_, r, i, n.__n, _.ownerSVGElement !== void 0, r.__h != null ? [l] : null, o, l == null ? yn(r) : l, r.__h), zc(o, r), r.__e != l && Wl(r)));
    });
}
function Ul(e, t, n, o, i, r, l, _, c, p) {
  var s, h, f, a, u, y, d, v = o && o.__k || Hl, g = v.length;
  for (n.__k = [], s = 0; s < t.length; s++)
    if ((a = n.__k[s] = (a = t[s]) == null || typeof a == "boolean" ? null : typeof a == "string" || typeof a == "number" || typeof a == "bigint" ? Qn(null, a, null, null, a) : Array.isArray(a) ? Qn(Br, { children: a }, null, null, null) : a.__b > 0 ? Qn(a.type, a.props, a.key, a.ref ? a.ref : null, a.__v) : a) != null) {
      if (a.__ = n, a.__b = n.__b + 1, (f = v[s]) === null || f && a.key == f.key && a.type === f.type)
        v[s] = void 0;
      else
        for (h = 0; h < g; h++) {
          if ((f = v[h]) && a.key == f.key && a.type === f.type) {
            v[h] = void 0;
            break;
          }
          f = null;
        }
      zl(e, a, f = f || Dl, i, r, l, _, c, p), u = a.__e, (h = a.ref) && f.ref != h && (d || (d = []), f.ref && d.push(f.ref, null, a), d.push(h, a.__c || u, a)), u != null ? (y == null && (y = u), typeof a.type == "function" && a.__k === f.__k ? a.__d = c = jl(a, c, e) : c = Bl(e, a, f, v, u, c), typeof n.type == "function" && (n.__d = c)) : c && f.__e == c && c.parentNode != e && (c = yn(f));
    }
  for (n.__e = y, s = g; s--; )
    v[s] != null && Vl(v[s], v[s]);
  if (d)
    for (s = 0; s < d.length; s++)
      Fl(d[s], d[++s], d[++s]);
}
function jl(e, t, n) {
  for (var o, i = e.__k, r = 0; i && r < i.length; r++)
    (o = i[r]) && (o.__ = e, t = typeof o.type == "function" ? jl(o, t, n) : Bl(n, o, o, i, o.__e, t));
  return t;
}
function Bl(e, t, n, o, i, r) {
  var l, _, c;
  if (t.__d !== void 0)
    l = t.__d, t.__d = void 0;
  else if (n == null || i != r || i.parentNode == null)
    e:
      if (r == null || r.parentNode !== e)
        e.appendChild(i), l = null;
      else {
        for (_ = r, c = 0; (_ = _.nextSibling) && c < o.length; c += 2)
          if (_ == i)
            break e;
        e.insertBefore(i, r), l = r;
      }
  return l !== void 0 ? l : i.nextSibling;
}
function Bc(e, t, n, o, i) {
  var r;
  for (r in n)
    r === "children" || r === "key" || r in t || wo(e, r, null, n[r], o);
  for (r in t)
    i && typeof t[r] != "function" || r === "children" || r === "key" || r === "value" || r === "checked" || n[r] === t[r] || wo(e, r, t[r], n[r], o);
}
function js(e, t, n) {
  t[0] === "-" ? e.setProperty(t, n) : e[t] = n == null ? "" : typeof n != "number" || jc.test(t) ? n : n + "px";
}
function wo(e, t, n, o, i) {
  var r;
  e:
    if (t === "style")
      if (typeof n == "string")
        e.style.cssText = n;
      else {
        if (typeof o == "string" && (e.style.cssText = o = ""), o)
          for (t in o)
            n && t in n || js(e.style, t, "");
        if (n)
          for (t in n)
            o && n[t] === o[t] || js(e.style, t, n[t]);
      }
    else if (t[0] === "o" && t[1] === "n")
      r = t !== (t = t.replace(/Capture$/, "")), t = t.toLowerCase() in e ? t.toLowerCase().slice(2) : t.slice(2), e.l || (e.l = {}), e.l[t + r] = n, n ? o || e.addEventListener(t, r ? zs : Bs, r) : e.removeEventListener(t, r ? zs : Bs, r);
    else if (t !== "dangerouslySetInnerHTML") {
      if (i)
        t = t.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
      else if (t !== "href" && t !== "list" && t !== "form" && t !== "tabIndex" && t !== "download" && t in e)
        try {
          e[t] = n == null ? "" : n;
          break e;
        } catch {
        }
      typeof n == "function" || (n == null || n === !1 && t.indexOf("-") == -1 ? e.removeAttribute(t) : e.setAttribute(t, n));
    }
}
function Bs(e) {
  this.l[e.type + !1](B.event ? B.event(e) : e);
}
function zs(e) {
  this.l[e.type + !0](B.event ? B.event(e) : e);
}
function zl(e, t, n, o, i, r, l, _, c) {
  var p, s, h, f, a, u, y, d, v, g, k, w, E, $, x, m = t.type;
  if (t.constructor !== void 0)
    return null;
  n.__h != null && (c = n.__h, _ = t.__e = n.__e, t.__h = null, r = [_]), (p = B.__b) && p(t);
  try {
    e:
      if (typeof m == "function") {
        if (d = t.props, v = (p = m.contextType) && o[p.__c], g = p ? v ? v.props.value : p.__ : o, n.__c ? y = (s = t.__c = n.__c).__ = s.__E : ("prototype" in m && m.prototype.render ? t.__c = s = new m(d, g) : (t.__c = s = new en(d, g), s.constructor = m, s.render = Vc), v && v.sub(s), s.props = d, s.state || (s.state = {}), s.context = g, s.__n = o, h = s.__d = !0, s.__h = [], s._sb = []), s.__s == null && (s.__s = s.state), m.getDerivedStateFromProps != null && (s.__s == s.state && (s.__s = Ke({}, s.__s)), Ke(s.__s, m.getDerivedStateFromProps(d, s.__s))), f = s.props, a = s.state, h)
          m.getDerivedStateFromProps == null && s.componentWillMount != null && s.componentWillMount(), s.componentDidMount != null && s.__h.push(s.componentDidMount);
        else {
          if (m.getDerivedStateFromProps == null && d !== f && s.componentWillReceiveProps != null && s.componentWillReceiveProps(d, g), !s.__e && s.shouldComponentUpdate != null && s.shouldComponentUpdate(d, s.__s, g) === !1 || t.__v === n.__v) {
            for (s.props = d, s.state = s.__s, t.__v !== n.__v && (s.__d = !1), s.__v = t, t.__e = n.__e, t.__k = n.__k, t.__k.forEach(function(C) {
              C && (C.__ = t);
            }), k = 0; k < s._sb.length; k++)
              s.__h.push(s._sb[k]);
            s._sb = [], s.__h.length && l.push(s);
            break e;
          }
          s.componentWillUpdate != null && s.componentWillUpdate(d, s.__s, g), s.componentDidUpdate != null && s.__h.push(function() {
            s.componentDidUpdate(f, a, u);
          });
        }
        if (s.context = g, s.props = d, s.__v = t, s.__P = e, w = B.__r, E = 0, "prototype" in m && m.prototype.render) {
          for (s.state = s.__s, s.__d = !1, w && w(t), p = s.render(s.props, s.state, s.context), $ = 0; $ < s._sb.length; $++)
            s.__h.push(s._sb[$]);
          s._sb = [];
        } else
          do
            s.__d = !1, w && w(t), p = s.render(s.props, s.state, s.context), s.state = s.__s;
          while (s.__d && ++E < 25);
        s.state = s.__s, s.getChildContext != null && (o = Ke(Ke({}, o), s.getChildContext())), h || s.getSnapshotBeforeUpdate == null || (u = s.getSnapshotBeforeUpdate(f, a)), x = p != null && p.type === Br && p.key == null ? p.props.children : p, Ul(e, Array.isArray(x) ? x : [x], t, n, o, i, r, l, _, c), s.base = t.__e, t.__h = null, s.__h.length && l.push(s), y && (s.__E = s.__ = null), s.__e = !1;
      } else
        r == null && t.__v === n.__v ? (t.__k = n.__k, t.__e = n.__e) : t.__e = Fc(n.__e, t, n, o, i, r, l, c);
    (p = B.diffed) && p(t);
  } catch (C) {
    t.__v = null, (c || r != null) && (t.__e = _, t.__h = !!c, r[r.indexOf(_)] = null), B.__e(C, t, n);
  }
}
function zc(e, t) {
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
function Fc(e, t, n, o, i, r, l, _) {
  var c, p, s, h = n.props, f = t.props, a = t.type, u = 0;
  if (a === "svg" && (i = !0), r != null) {
    for (; u < r.length; u++)
      if ((c = r[u]) && "setAttribute" in c == !!a && (a ? c.localName === a : c.nodeType === 3)) {
        e = c, r[u] = null;
        break;
      }
  }
  if (e == null) {
    if (a === null)
      return document.createTextNode(f);
    e = i ? document.createElementNS("http://www.w3.org/2000/svg", a) : document.createElement(a, f.is && f), r = null, _ = !1;
  }
  if (a === null)
    h === f || _ && e.data === f || (e.data = f);
  else {
    if (r = r && jr.call(e.childNodes), p = (h = n.props || Dl).dangerouslySetInnerHTML, s = f.dangerouslySetInnerHTML, !_) {
      if (r != null)
        for (h = {}, u = 0; u < e.attributes.length; u++)
          h[e.attributes[u].name] = e.attributes[u].value;
      (s || p) && (s && (p && s.__html == p.__html || s.__html === e.innerHTML) || (e.innerHTML = s && s.__html || ""));
    }
    if (Bc(e, f, h, i, _), s)
      t.__k = [];
    else if (u = t.props.children, Ul(e, Array.isArray(u) ? u : [u], t, n, o, i && a !== "foreignObject", r, l, r ? r[0] : n.__k && yn(n, 0), _), r != null)
      for (u = r.length; u--; )
        r[u] != null && Il(r[u]);
    _ || ("value" in f && (u = f.value) !== void 0 && (u !== e.value || a === "progress" && !u || a === "option" && u !== h.value) && wo(e, "value", u, h.value, !1), "checked" in f && (u = f.checked) !== void 0 && u !== e.checked && wo(e, "checked", u, h.checked, !1));
  }
  return e;
}
function Fl(e, t, n) {
  try {
    typeof e == "function" ? e(t) : e.current = t;
  } catch (o) {
    B.__e(o, n);
  }
}
function Vl(e, t, n) {
  var o, i;
  if (B.unmount && B.unmount(e), (o = e.ref) && (o.current && o.current !== e.__e || Fl(o, null, t)), (o = e.__c) != null) {
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
      o[i] && Vl(o[i], t, n || typeof e.type != "function");
  n || e.__e == null || Il(e.__e), e.__ = e.__e = e.__d = void 0;
}
function Vc(e, t, n) {
  return this.constructor(e, n);
}
jr = Hl.slice, B = { __e: function(e, t, n, o) {
  for (var i, r, l; t = t.__; )
    if ((i = t.__c) && !i.__)
      try {
        if ((r = i.constructor) && r.getDerivedStateFromError != null && (i.setState(r.getDerivedStateFromError(e)), l = i.__d), i.componentDidCatch != null && (i.componentDidCatch(e, o || {}), l = i.__d), l)
          return i.__E = i;
      } catch (_) {
        e = _;
      }
  throw e;
} }, Ol = 0, en.prototype.setState = function(e, t) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = Ke({}, this.state), typeof e == "function" && (e = e(Ke({}, n), this.props)), e && Ke(n, e), e != null && this.__v && (t && this._sb.push(t), Us(this));
}, en.prototype.forceUpdate = function(e) {
  this.__v && (this.__e = !0, e && this.__h.push(e), Us(this));
}, en.prototype.render = Br, Qt = [], bo.__r = 0;
function qc(e) {
  if (e.indexOf("#") === 0 && (e = e.slice(1)), e.length === 3 && (e = e[0] + e[0] + e[1] + e[1] + e[2] + e[2]), e.length !== 6)
    throw new Error(`Invalid HEX color "${e}".`);
  return [
    parseInt(e.slice(0, 2), 16),
    parseInt(e.slice(2, 4), 16),
    parseInt(e.slice(4, 6), 16)
  ];
}
function Gc(e) {
  const [t, n, o] = typeof e == "string" ? qc(e) : e;
  return t * 0.299 + n * 0.587 + o * 0.114 > 186;
}
function Fs(e, t) {
  var n, o;
  return Gc(e) ? (n = t == null ? void 0 : t.dark) != null ? n : "#333333" : (o = t == null ? void 0 : t.light) != null ? o : "#ffffff";
}
function Vs(e, t = 255) {
  return Math.min(Math.max(e, 0), t);
}
function Yc(e, t, n) {
  e = e % 360 / 360, t = Vs(t), n = Vs(n);
  const o = n <= 0.5 ? n * (t + 1) : n + t - n * t, i = n * 2 - o, r = (l) => (l = l < 0 ? l + 1 : l > 1 ? l - 1 : l, l * 6 < 1 ? i + (o - i) * l * 6 : l * 2 < 1 ? o : l * 3 < 2 ? i + (o - i) * (2 / 3 - l) * 6 : i);
  return [
    r(e + 1 / 3) * 255,
    r(e) * 255,
    r(e - 1 / 3) * 255
  ];
}
function Kc(e) {
  let t = 0;
  if (typeof e != "string" && (e = String(e)), e && e.length)
    for (let n = 0; n < e.length; ++n)
      t += (n + 1) * e.charCodeAt(n);
  return t;
}
function Xc(e, t) {
  return /^[\u4e00-\u9fa5\s]+$/.test(e) ? e = e.length <= t ? e : e.substring(e.length - t) : /^[A-Za-z\d\s]+$/.test(e) ? e = e[0].toUpperCase() : e = e.length <= t ? e : e.substring(0, t), e;
}
class Jc extends en {
  render() {
    const {
      className: t,
      style: n,
      size: o = "",
      circle: i,
      rounded: r,
      background: l,
      foreColor: _,
      text: c,
      code: p,
      maxTextLength: s = 2,
      src: h,
      hueDistance: f = 43,
      saturation: a = 0.4,
      lightness: u = 0.6,
      children: y,
      ...d
    } = this.props, v = ["avatar", t], g = { ...n, background: l, color: _ };
    let k = 32;
    o && (typeof o == "number" ? (g.width = `${o}px`, g.height = `${o}px`, g.fontSize = `${Math.max(12, Math.round(o / 2))}px`, k = o) : (v.push(`size-${o}`), k = { xs: 20, sm: 24, lg: 48, xl: 80 }[o])), i ? v.push("circle") : r && (typeof r == "number" ? g.borderRadius = `${r}px` : v.push(`rounded-${r}`));
    let w;
    if (h)
      v.push("has-img"), w = /* @__PURE__ */ hr("img", {
        className: "avatar-img",
        src: h,
        alt: c
      });
    else if (c != null && c.length) {
      const E = Xc(c, s);
      if (v.push("has-text", `has-text-${E.length}`), l)
        !_ && l && (g.color = Fs(l));
      else {
        const x = p != null ? p : c, m = (typeof x == "number" ? x : Kc(x)) * f % 360;
        if (g.background = `hsl(${m},${a * 100}%,${u * 100}%)`, !_) {
          const C = Yc(m, a, u);
          g.color = Fs(C);
        }
      }
      let $;
      k && k < 14 * E.length && ($ = { transform: `scale(${k / (14 * E.length)})`, whiteSpace: "nowrap" }), w = /* @__PURE__ */ hr("div", {
        "data-actualSize": k,
        className: "avatar-text",
        style: $
      }, E);
    }
    return /* @__PURE__ */ hr("div", {
      className: P(v),
      style: g,
      ...d
    }, w, y);
  }
}
class qs extends Ce {
}
S(qs, "NAME", "avatar"), S(qs, "Component", Jc);
var zr, z, ql, Gl, tn, Gs, Yl = {}, Kl = [], Zc = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function Xe(e, t) {
  for (var n in t)
    e[n] = t[n];
  return e;
}
function Xl(e) {
  var t = e.parentNode;
  t && t.removeChild(e);
}
function dr(e, t, n) {
  var o, i, r, l = {};
  for (r in t)
    r == "key" ? o = t[r] : r == "ref" ? i = t[r] : l[r] = t[r];
  if (arguments.length > 2 && (l.children = arguments.length > 3 ? zr.call(arguments, 2) : n), typeof e == "function" && e.defaultProps != null)
    for (r in e.defaultProps)
      l[r] === void 0 && (l[r] = e.defaultProps[r]);
  return eo(e, l, o, i, null);
}
function eo(e, t, n, o, i) {
  var r = { type: e, props: t, key: n, ref: o, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: i == null ? ++ql : i };
  return i == null && z.vnode != null && z.vnode(r), r;
}
function Fr(e) {
  return e.children;
}
function nn(e, t) {
  this.props = e, this.context = t;
}
function bn(e, t) {
  if (t == null)
    return e.__ ? bn(e.__, e.__.__k.indexOf(e) + 1) : null;
  for (var n; t < e.__k.length; t++)
    if ((n = e.__k[t]) != null && n.__e != null)
      return n.__e;
  return typeof e.type == "function" ? bn(e) : null;
}
function Jl(e) {
  var t, n;
  if ((e = e.__) != null && e.__c != null) {
    for (e.__e = e.__c.base = null, t = 0; t < e.__k.length; t++)
      if ((n = e.__k[t]) != null && n.__e != null) {
        e.__e = e.__c.base = n.__e;
        break;
      }
    return Jl(e);
  }
}
function Ys(e) {
  (!e.__d && (e.__d = !0) && tn.push(e) && !ko.__r++ || Gs !== z.debounceRendering) && ((Gs = z.debounceRendering) || setTimeout)(ko);
}
function ko() {
  for (var e; ko.__r = tn.length; )
    e = tn.sort(function(t, n) {
      return t.__v.__b - n.__v.__b;
    }), tn = [], e.some(function(t) {
      var n, o, i, r, l, _;
      t.__d && (l = (r = (n = t).__v).__e, (_ = n.__P) && (o = [], (i = Xe({}, r)).__v = r.__v + 1, ta(_, r, i, n.__n, _.ownerSVGElement !== void 0, r.__h != null ? [l] : null, o, l == null ? bn(r) : l, r.__h), ef(o, r), r.__e != l && Jl(r)));
    });
}
function Zl(e, t, n, o, i, r, l, _, c, p) {
  var s, h, f, a, u, y, d, v = o && o.__k || Kl, g = v.length;
  for (n.__k = [], s = 0; s < t.length; s++)
    if ((a = n.__k[s] = (a = t[s]) == null || typeof a == "boolean" ? null : typeof a == "string" || typeof a == "number" || typeof a == "bigint" ? eo(null, a, null, null, a) : Array.isArray(a) ? eo(Fr, { children: a }, null, null, null) : a.__b > 0 ? eo(a.type, a.props, a.key, a.ref ? a.ref : null, a.__v) : a) != null) {
      if (a.__ = n, a.__b = n.__b + 1, (f = v[s]) === null || f && a.key == f.key && a.type === f.type)
        v[s] = void 0;
      else
        for (h = 0; h < g; h++) {
          if ((f = v[h]) && a.key == f.key && a.type === f.type) {
            v[h] = void 0;
            break;
          }
          f = null;
        }
      ta(e, a, f = f || Yl, i, r, l, _, c, p), u = a.__e, (h = a.ref) && f.ref != h && (d || (d = []), f.ref && d.push(f.ref, null, a), d.push(h, a.__c || u, a)), u != null ? (y == null && (y = u), typeof a.type == "function" && a.__k === f.__k ? a.__d = c = Ql(a, c, e) : c = ea(e, a, f, v, u, c), typeof n.type == "function" && (n.__d = c)) : c && f.__e == c && c.parentNode != e && (c = bn(f));
    }
  for (n.__e = y, s = g; s--; )
    v[s] != null && oa(v[s], v[s]);
  if (d)
    for (s = 0; s < d.length; s++)
      na(d[s], d[++s], d[++s]);
}
function Ql(e, t, n) {
  for (var o, i = e.__k, r = 0; i && r < i.length; r++)
    (o = i[r]) && (o.__ = e, t = typeof o.type == "function" ? Ql(o, t, n) : ea(n, o, o, i, o.__e, t));
  return t;
}
function ea(e, t, n, o, i, r) {
  var l, _, c;
  if (t.__d !== void 0)
    l = t.__d, t.__d = void 0;
  else if (n == null || i != r || i.parentNode == null)
    e:
      if (r == null || r.parentNode !== e)
        e.appendChild(i), l = null;
      else {
        for (_ = r, c = 0; (_ = _.nextSibling) && c < o.length; c += 2)
          if (_ == i)
            break e;
        e.insertBefore(i, r), l = r;
      }
  return l !== void 0 ? l : i.nextSibling;
}
function Qc(e, t, n, o, i) {
  var r;
  for (r in n)
    r === "children" || r === "key" || r in t || $o(e, r, null, n[r], o);
  for (r in t)
    i && typeof t[r] != "function" || r === "children" || r === "key" || r === "value" || r === "checked" || n[r] === t[r] || $o(e, r, t[r], n[r], o);
}
function Ks(e, t, n) {
  t[0] === "-" ? e.setProperty(t, n) : e[t] = n == null ? "" : typeof n != "number" || Zc.test(t) ? n : n + "px";
}
function $o(e, t, n, o, i) {
  var r;
  e:
    if (t === "style")
      if (typeof n == "string")
        e.style.cssText = n;
      else {
        if (typeof o == "string" && (e.style.cssText = o = ""), o)
          for (t in o)
            n && t in n || Ks(e.style, t, "");
        if (n)
          for (t in n)
            o && n[t] === o[t] || Ks(e.style, t, n[t]);
      }
    else if (t[0] === "o" && t[1] === "n")
      r = t !== (t = t.replace(/Capture$/, "")), t = t.toLowerCase() in e ? t.toLowerCase().slice(2) : t.slice(2), e.l || (e.l = {}), e.l[t + r] = n, n ? o || e.addEventListener(t, r ? Js : Xs, r) : e.removeEventListener(t, r ? Js : Xs, r);
    else if (t !== "dangerouslySetInnerHTML") {
      if (i)
        t = t.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
      else if (t !== "href" && t !== "list" && t !== "form" && t !== "tabIndex" && t !== "download" && t in e)
        try {
          e[t] = n == null ? "" : n;
          break e;
        } catch {
        }
      typeof n == "function" || (n == null || n === !1 && t.indexOf("-") == -1 ? e.removeAttribute(t) : e.setAttribute(t, n));
    }
}
function Xs(e) {
  this.l[e.type + !1](z.event ? z.event(e) : e);
}
function Js(e) {
  this.l[e.type + !0](z.event ? z.event(e) : e);
}
function ta(e, t, n, o, i, r, l, _, c) {
  var p, s, h, f, a, u, y, d, v, g, k, w, E, $, x, m = t.type;
  if (t.constructor !== void 0)
    return null;
  n.__h != null && (c = n.__h, _ = t.__e = n.__e, t.__h = null, r = [_]), (p = z.__b) && p(t);
  try {
    e:
      if (typeof m == "function") {
        if (d = t.props, v = (p = m.contextType) && o[p.__c], g = p ? v ? v.props.value : p.__ : o, n.__c ? y = (s = t.__c = n.__c).__ = s.__E : ("prototype" in m && m.prototype.render ? t.__c = s = new m(d, g) : (t.__c = s = new nn(d, g), s.constructor = m, s.render = nf), v && v.sub(s), s.props = d, s.state || (s.state = {}), s.context = g, s.__n = o, h = s.__d = !0, s.__h = [], s._sb = []), s.__s == null && (s.__s = s.state), m.getDerivedStateFromProps != null && (s.__s == s.state && (s.__s = Xe({}, s.__s)), Xe(s.__s, m.getDerivedStateFromProps(d, s.__s))), f = s.props, a = s.state, h)
          m.getDerivedStateFromProps == null && s.componentWillMount != null && s.componentWillMount(), s.componentDidMount != null && s.__h.push(s.componentDidMount);
        else {
          if (m.getDerivedStateFromProps == null && d !== f && s.componentWillReceiveProps != null && s.componentWillReceiveProps(d, g), !s.__e && s.shouldComponentUpdate != null && s.shouldComponentUpdate(d, s.__s, g) === !1 || t.__v === n.__v) {
            for (s.props = d, s.state = s.__s, t.__v !== n.__v && (s.__d = !1), s.__v = t, t.__e = n.__e, t.__k = n.__k, t.__k.forEach(function(C) {
              C && (C.__ = t);
            }), k = 0; k < s._sb.length; k++)
              s.__h.push(s._sb[k]);
            s._sb = [], s.__h.length && l.push(s);
            break e;
          }
          s.componentWillUpdate != null && s.componentWillUpdate(d, s.__s, g), s.componentDidUpdate != null && s.__h.push(function() {
            s.componentDidUpdate(f, a, u);
          });
        }
        if (s.context = g, s.props = d, s.__v = t, s.__P = e, w = z.__r, E = 0, "prototype" in m && m.prototype.render) {
          for (s.state = s.__s, s.__d = !1, w && w(t), p = s.render(s.props, s.state, s.context), $ = 0; $ < s._sb.length; $++)
            s.__h.push(s._sb[$]);
          s._sb = [];
        } else
          do
            s.__d = !1, w && w(t), p = s.render(s.props, s.state, s.context), s.state = s.__s;
          while (s.__d && ++E < 25);
        s.state = s.__s, s.getChildContext != null && (o = Xe(Xe({}, o), s.getChildContext())), h || s.getSnapshotBeforeUpdate == null || (u = s.getSnapshotBeforeUpdate(f, a)), x = p != null && p.type === Fr && p.key == null ? p.props.children : p, Zl(e, Array.isArray(x) ? x : [x], t, n, o, i, r, l, _, c), s.base = t.__e, t.__h = null, s.__h.length && l.push(s), y && (s.__E = s.__ = null), s.__e = !1;
      } else
        r == null && t.__v === n.__v ? (t.__k = n.__k, t.__e = n.__e) : t.__e = tf(n.__e, t, n, o, i, r, l, c);
    (p = z.diffed) && p(t);
  } catch (C) {
    t.__v = null, (c || r != null) && (t.__e = _, t.__h = !!c, r[r.indexOf(_)] = null), z.__e(C, t, n);
  }
}
function ef(e, t) {
  z.__c && z.__c(t, e), e.some(function(n) {
    try {
      e = n.__h, n.__h = [], e.some(function(o) {
        o.call(n);
      });
    } catch (o) {
      z.__e(o, n.__v);
    }
  });
}
function tf(e, t, n, o, i, r, l, _) {
  var c, p, s, h = n.props, f = t.props, a = t.type, u = 0;
  if (a === "svg" && (i = !0), r != null) {
    for (; u < r.length; u++)
      if ((c = r[u]) && "setAttribute" in c == !!a && (a ? c.localName === a : c.nodeType === 3)) {
        e = c, r[u] = null;
        break;
      }
  }
  if (e == null) {
    if (a === null)
      return document.createTextNode(f);
    e = i ? document.createElementNS("http://www.w3.org/2000/svg", a) : document.createElement(a, f.is && f), r = null, _ = !1;
  }
  if (a === null)
    h === f || _ && e.data === f || (e.data = f);
  else {
    if (r = r && zr.call(e.childNodes), p = (h = n.props || Yl).dangerouslySetInnerHTML, s = f.dangerouslySetInnerHTML, !_) {
      if (r != null)
        for (h = {}, u = 0; u < e.attributes.length; u++)
          h[e.attributes[u].name] = e.attributes[u].value;
      (s || p) && (s && (p && s.__html == p.__html || s.__html === e.innerHTML) || (e.innerHTML = s && s.__html || ""));
    }
    if (Qc(e, f, h, i, _), s)
      t.__k = [];
    else if (u = t.props.children, Zl(e, Array.isArray(u) ? u : [u], t, n, o, i && a !== "foreignObject", r, l, r ? r[0] : n.__k && bn(n, 0), _), r != null)
      for (u = r.length; u--; )
        r[u] != null && Xl(r[u]);
    _ || ("value" in f && (u = f.value) !== void 0 && (u !== e.value || a === "progress" && !u || a === "option" && u !== h.value) && $o(e, "value", u, h.value, !1), "checked" in f && (u = f.checked) !== void 0 && u !== e.checked && $o(e, "checked", u, h.checked, !1));
  }
  return e;
}
function na(e, t, n) {
  try {
    typeof e == "function" ? e(t) : e.current = t;
  } catch (o) {
    z.__e(o, n);
  }
}
function oa(e, t, n) {
  var o, i;
  if (z.unmount && z.unmount(e), (o = e.ref) && (o.current && o.current !== e.__e || na(o, null, t)), (o = e.__c) != null) {
    if (o.componentWillUnmount)
      try {
        o.componentWillUnmount();
      } catch (r) {
        z.__e(r, t);
      }
    o.base = o.__P = null, e.__c = void 0;
  }
  if (o = e.__k)
    for (i = 0; i < o.length; i++)
      o[i] && oa(o[i], t, n || typeof e.type != "function");
  n || e.__e == null || Xl(e.__e), e.__ = e.__e = e.__d = void 0;
}
function nf(e, t, n) {
  return this.constructor(e, n);
}
zr = Kl.slice, z = { __e: function(e, t, n, o) {
  for (var i, r, l; t = t.__; )
    if ((i = t.__c) && !i.__)
      try {
        if ((r = i.constructor) && r.getDerivedStateFromError != null && (i.setState(r.getDerivedStateFromError(e)), l = i.__d), i.componentDidCatch != null && (i.componentDidCatch(e, o || {}), l = i.__d), l)
          return i.__E = i;
      } catch (_) {
        e = _;
      }
  throw e;
} }, ql = 0, Gl = function(e) {
  return e != null && e.constructor === void 0;
}, nn.prototype.setState = function(e, t) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = Xe({}, this.state), typeof e == "function" && (e = e(Xe({}, n), this.props)), e && Xe(n, e), e != null && this.__v && (t && this._sb.push(t), Ys(this));
}, nn.prototype.forceUpdate = function(e) {
  this.__v && (this.__e = !0, e && this.__h.push(e), Ys(this));
}, nn.prototype.render = Fr, tn = [], ko.__r = 0;
var Vr, F, ra, on, Zs, sa = {}, ia = [], of = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function Je(e, t) {
  for (var n in t)
    e[n] = t[n];
  return e;
}
function la(e) {
  var t = e.parentNode;
  t && t.removeChild(e);
}
function zt(e, t, n) {
  var o, i, r, l = {};
  for (r in t)
    r == "key" ? o = t[r] : r == "ref" ? i = t[r] : l[r] = t[r];
  if (arguments.length > 2 && (l.children = arguments.length > 3 ? Vr.call(arguments, 2) : n), typeof e == "function" && e.defaultProps != null)
    for (r in e.defaultProps)
      l[r] === void 0 && (l[r] = e.defaultProps[r]);
  return to(e, l, o, i, null);
}
function to(e, t, n, o, i) {
  var r = { type: e, props: t, key: n, ref: o, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: i == null ? ++ra : i };
  return i == null && F.vnode != null && F.vnode(r), r;
}
function qr(e) {
  return e.children;
}
function rn(e, t) {
  this.props = e, this.context = t;
}
function wn(e, t) {
  if (t == null)
    return e.__ ? wn(e.__, e.__.__k.indexOf(e) + 1) : null;
  for (var n; t < e.__k.length; t++)
    if ((n = e.__k[t]) != null && n.__e != null)
      return n.__e;
  return typeof e.type == "function" ? wn(e) : null;
}
function aa(e) {
  var t, n;
  if ((e = e.__) != null && e.__c != null) {
    for (e.__e = e.__c.base = null, t = 0; t < e.__k.length; t++)
      if ((n = e.__k[t]) != null && n.__e != null) {
        e.__e = e.__c.base = n.__e;
        break;
      }
    return aa(e);
  }
}
function Qs(e) {
  (!e.__d && (e.__d = !0) && on.push(e) && !xo.__r++ || Zs !== F.debounceRendering) && ((Zs = F.debounceRendering) || setTimeout)(xo);
}
function xo() {
  for (var e; xo.__r = on.length; )
    e = on.sort(function(t, n) {
      return t.__v.__b - n.__v.__b;
    }), on = [], e.some(function(t) {
      var n, o, i, r, l, _;
      t.__d && (l = (r = (n = t).__v).__e, (_ = n.__P) && (o = [], (i = Je({}, r)).__v = r.__v + 1, ua(_, r, i, n.__n, _.ownerSVGElement !== void 0, r.__h != null ? [l] : null, o, l == null ? wn(r) : l, r.__h), sf(o, r), r.__e != l && aa(r)));
    });
}
function _a(e, t, n, o, i, r, l, _, c, p) {
  var s, h, f, a, u, y, d, v = o && o.__k || ia, g = v.length;
  for (n.__k = [], s = 0; s < t.length; s++)
    if ((a = n.__k[s] = (a = t[s]) == null || typeof a == "boolean" ? null : typeof a == "string" || typeof a == "number" || typeof a == "bigint" ? to(null, a, null, null, a) : Array.isArray(a) ? to(qr, { children: a }, null, null, null) : a.__b > 0 ? to(a.type, a.props, a.key, a.ref ? a.ref : null, a.__v) : a) != null) {
      if (a.__ = n, a.__b = n.__b + 1, (f = v[s]) === null || f && a.key == f.key && a.type === f.type)
        v[s] = void 0;
      else
        for (h = 0; h < g; h++) {
          if ((f = v[h]) && a.key == f.key && a.type === f.type) {
            v[h] = void 0;
            break;
          }
          f = null;
        }
      ua(e, a, f = f || sa, i, r, l, _, c, p), u = a.__e, (h = a.ref) && f.ref != h && (d || (d = []), f.ref && d.push(f.ref, null, a), d.push(h, a.__c || u, a)), u != null ? (y == null && (y = u), typeof a.type == "function" && a.__k === f.__k ? a.__d = c = ca(a, c, e) : c = fa(e, a, f, v, u, c), typeof n.type == "function" && (n.__d = c)) : c && f.__e == c && c.parentNode != e && (c = wn(f));
    }
  for (n.__e = y, s = g; s--; )
    v[s] != null && ha(v[s], v[s]);
  if (d)
    for (s = 0; s < d.length; s++)
      pa(d[s], d[++s], d[++s]);
}
function ca(e, t, n) {
  for (var o, i = e.__k, r = 0; i && r < i.length; r++)
    (o = i[r]) && (o.__ = e, t = typeof o.type == "function" ? ca(o, t, n) : fa(n, o, o, i, o.__e, t));
  return t;
}
function fa(e, t, n, o, i, r) {
  var l, _, c;
  if (t.__d !== void 0)
    l = t.__d, t.__d = void 0;
  else if (n == null || i != r || i.parentNode == null)
    e:
      if (r == null || r.parentNode !== e)
        e.appendChild(i), l = null;
      else {
        for (_ = r, c = 0; (_ = _.nextSibling) && c < o.length; c += 2)
          if (_ == i)
            break e;
        e.insertBefore(i, r), l = r;
      }
  return l !== void 0 ? l : i.nextSibling;
}
function rf(e, t, n, o, i) {
  var r;
  for (r in n)
    r === "children" || r === "key" || r in t || Co(e, r, null, n[r], o);
  for (r in t)
    i && typeof t[r] != "function" || r === "children" || r === "key" || r === "value" || r === "checked" || n[r] === t[r] || Co(e, r, t[r], n[r], o);
}
function ei(e, t, n) {
  t[0] === "-" ? e.setProperty(t, n) : e[t] = n == null ? "" : typeof n != "number" || of.test(t) ? n : n + "px";
}
function Co(e, t, n, o, i) {
  var r;
  e:
    if (t === "style")
      if (typeof n == "string")
        e.style.cssText = n;
      else {
        if (typeof o == "string" && (e.style.cssText = o = ""), o)
          for (t in o)
            n && t in n || ei(e.style, t, "");
        if (n)
          for (t in n)
            o && n[t] === o[t] || ei(e.style, t, n[t]);
      }
    else if (t[0] === "o" && t[1] === "n")
      r = t !== (t = t.replace(/Capture$/, "")), t = t.toLowerCase() in e ? t.toLowerCase().slice(2) : t.slice(2), e.l || (e.l = {}), e.l[t + r] = n, n ? o || e.addEventListener(t, r ? ni : ti, r) : e.removeEventListener(t, r ? ni : ti, r);
    else if (t !== "dangerouslySetInnerHTML") {
      if (i)
        t = t.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
      else if (t !== "href" && t !== "list" && t !== "form" && t !== "tabIndex" && t !== "download" && t in e)
        try {
          e[t] = n == null ? "" : n;
          break e;
        } catch {
        }
      typeof n == "function" || (n == null || n === !1 && t.indexOf("-") == -1 ? e.removeAttribute(t) : e.setAttribute(t, n));
    }
}
function ti(e) {
  this.l[e.type + !1](F.event ? F.event(e) : e);
}
function ni(e) {
  this.l[e.type + !0](F.event ? F.event(e) : e);
}
function ua(e, t, n, o, i, r, l, _, c) {
  var p, s, h, f, a, u, y, d, v, g, k, w, E, $, x, m = t.type;
  if (t.constructor !== void 0)
    return null;
  n.__h != null && (c = n.__h, _ = t.__e = n.__e, t.__h = null, r = [_]), (p = F.__b) && p(t);
  try {
    e:
      if (typeof m == "function") {
        if (d = t.props, v = (p = m.contextType) && o[p.__c], g = p ? v ? v.props.value : p.__ : o, n.__c ? y = (s = t.__c = n.__c).__ = s.__E : ("prototype" in m && m.prototype.render ? t.__c = s = new m(d, g) : (t.__c = s = new rn(d, g), s.constructor = m, s.render = af), v && v.sub(s), s.props = d, s.state || (s.state = {}), s.context = g, s.__n = o, h = s.__d = !0, s.__h = [], s._sb = []), s.__s == null && (s.__s = s.state), m.getDerivedStateFromProps != null && (s.__s == s.state && (s.__s = Je({}, s.__s)), Je(s.__s, m.getDerivedStateFromProps(d, s.__s))), f = s.props, a = s.state, h)
          m.getDerivedStateFromProps == null && s.componentWillMount != null && s.componentWillMount(), s.componentDidMount != null && s.__h.push(s.componentDidMount);
        else {
          if (m.getDerivedStateFromProps == null && d !== f && s.componentWillReceiveProps != null && s.componentWillReceiveProps(d, g), !s.__e && s.shouldComponentUpdate != null && s.shouldComponentUpdate(d, s.__s, g) === !1 || t.__v === n.__v) {
            for (s.props = d, s.state = s.__s, t.__v !== n.__v && (s.__d = !1), s.__v = t, t.__e = n.__e, t.__k = n.__k, t.__k.forEach(function(C) {
              C && (C.__ = t);
            }), k = 0; k < s._sb.length; k++)
              s.__h.push(s._sb[k]);
            s._sb = [], s.__h.length && l.push(s);
            break e;
          }
          s.componentWillUpdate != null && s.componentWillUpdate(d, s.__s, g), s.componentDidUpdate != null && s.__h.push(function() {
            s.componentDidUpdate(f, a, u);
          });
        }
        if (s.context = g, s.props = d, s.__v = t, s.__P = e, w = F.__r, E = 0, "prototype" in m && m.prototype.render) {
          for (s.state = s.__s, s.__d = !1, w && w(t), p = s.render(s.props, s.state, s.context), $ = 0; $ < s._sb.length; $++)
            s.__h.push(s._sb[$]);
          s._sb = [];
        } else
          do
            s.__d = !1, w && w(t), p = s.render(s.props, s.state, s.context), s.state = s.__s;
          while (s.__d && ++E < 25);
        s.state = s.__s, s.getChildContext != null && (o = Je(Je({}, o), s.getChildContext())), h || s.getSnapshotBeforeUpdate == null || (u = s.getSnapshotBeforeUpdate(f, a)), x = p != null && p.type === qr && p.key == null ? p.props.children : p, _a(e, Array.isArray(x) ? x : [x], t, n, o, i, r, l, _, c), s.base = t.__e, t.__h = null, s.__h.length && l.push(s), y && (s.__E = s.__ = null), s.__e = !1;
      } else
        r == null && t.__v === n.__v ? (t.__k = n.__k, t.__e = n.__e) : t.__e = lf(n.__e, t, n, o, i, r, l, c);
    (p = F.diffed) && p(t);
  } catch (C) {
    t.__v = null, (c || r != null) && (t.__e = _, t.__h = !!c, r[r.indexOf(_)] = null), F.__e(C, t, n);
  }
}
function sf(e, t) {
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
function lf(e, t, n, o, i, r, l, _) {
  var c, p, s, h = n.props, f = t.props, a = t.type, u = 0;
  if (a === "svg" && (i = !0), r != null) {
    for (; u < r.length; u++)
      if ((c = r[u]) && "setAttribute" in c == !!a && (a ? c.localName === a : c.nodeType === 3)) {
        e = c, r[u] = null;
        break;
      }
  }
  if (e == null) {
    if (a === null)
      return document.createTextNode(f);
    e = i ? document.createElementNS("http://www.w3.org/2000/svg", a) : document.createElement(a, f.is && f), r = null, _ = !1;
  }
  if (a === null)
    h === f || _ && e.data === f || (e.data = f);
  else {
    if (r = r && Vr.call(e.childNodes), p = (h = n.props || sa).dangerouslySetInnerHTML, s = f.dangerouslySetInnerHTML, !_) {
      if (r != null)
        for (h = {}, u = 0; u < e.attributes.length; u++)
          h[e.attributes[u].name] = e.attributes[u].value;
      (s || p) && (s && (p && s.__html == p.__html || s.__html === e.innerHTML) || (e.innerHTML = s && s.__html || ""));
    }
    if (rf(e, f, h, i, _), s)
      t.__k = [];
    else if (u = t.props.children, _a(e, Array.isArray(u) ? u : [u], t, n, o, i && a !== "foreignObject", r, l, r ? r[0] : n.__k && wn(n, 0), _), r != null)
      for (u = r.length; u--; )
        r[u] != null && la(r[u]);
    _ || ("value" in f && (u = f.value) !== void 0 && (u !== e.value || a === "progress" && !u || a === "option" && u !== h.value) && Co(e, "value", u, h.value, !1), "checked" in f && (u = f.checked) !== void 0 && u !== e.checked && Co(e, "checked", u, h.checked, !1));
  }
  return e;
}
function pa(e, t, n) {
  try {
    typeof e == "function" ? e(t) : e.current = t;
  } catch (o) {
    F.__e(o, n);
  }
}
function ha(e, t, n) {
  var o, i;
  if (F.unmount && F.unmount(e), (o = e.ref) && (o.current && o.current !== e.__e || pa(o, null, t)), (o = e.__c) != null) {
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
      o[i] && ha(o[i], t, n || typeof e.type != "function");
  n || e.__e == null || la(e.__e), e.__ = e.__e = e.__d = void 0;
}
function af(e, t, n) {
  return this.constructor(e, n);
}
Vr = ia.slice, F = { __e: function(e, t, n, o) {
  for (var i, r, l; t = t.__; )
    if ((i = t.__c) && !i.__)
      try {
        if ((r = i.constructor) && r.getDerivedStateFromError != null && (i.setState(r.getDerivedStateFromError(e)), l = i.__d), i.componentDidCatch != null && (i.componentDidCatch(e, o || {}), l = i.__d), l)
          return i.__E = i;
      } catch (_) {
        e = _;
      }
  throw e;
} }, ra = 0, rn.prototype.setState = function(e, t) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = Je({}, this.state), typeof e == "function" && (e = e(Je({}, n), this.props)), e && Je(n, e), e != null && this.__v && (t && this._sb.push(t), Qs(this));
}, rn.prototype.forceUpdate = function(e) {
  this.__v && (this.__e = !0, e && this.__h.push(e), Qs(this));
}, rn.prototype.render = qr, on = [], xo.__r = 0;
class vt extends rn {
  render() {
    const {
      component: t,
      type: n,
      size: o,
      className: i,
      children: r,
      url: l,
      target: _,
      disabled: c,
      active: p,
      loading: s,
      icon: h,
      text: f,
      trailingIcon: a,
      caret: u,
      square: y,
      hint: d,
      ...v
    } = this.props, g = t || (l ? "a" : "button"), k = f == null || typeof f == "string" && !f.length, w = k && !h && !a && !r;
    return zt(
      g,
      {
        className: P("btn", n, i, {
          "btn-caret": w,
          disabled: c,
          active: p,
          loading: s,
          square: y === void 0 ? !w && !r && k : y
        }, o ? `size-${o}` : ""),
        title: d,
        [g === "a" ? "href" : "data-url"]: l,
        [g === "a" ? "target" : "data-target"]: _,
        type: g === "button" ? "button" : void 0,
        ...v
      },
      typeof h == "string" ? /* @__PURE__ */ zt("i", {
        class: `icon ${h}`
      }) : h,
      k ? null : /* @__PURE__ */ zt("span", {
        className: "text"
      }, f),
      r,
      typeof a == "string" ? /* @__PURE__ */ zt("i", {
        class: `icon ${a}`
      }) : a,
      u ? /* @__PURE__ */ zt("span", {
        className: typeof u == "string" ? `caret-${u}` : "caret"
      }) : null
    );
  }
}
class da extends nn {
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
    return /* @__PURE__ */ dr(vt, {
      key: o,
      ...i
    });
  }
  renderItem(t, n, o) {
    const { itemRender: i, defaultBtnProps: r, onClickItem: l } = t, _ = { key: o, ...n };
    if (r && Object.assign(_, r), l && (_.onClick = this.handleItemClick.bind(this, _, o, n.onClick)), i) {
      const c = i.call(this, _, dr);
      if (Gl(c))
        return c;
      typeof c == "object" && Object.assign(_, c);
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
      itemRender: c,
      onClickItem: p,
      beforeRender: s,
      afterRender: h,
      beforeDestroy: f,
      ...a
    } = t;
    return /* @__PURE__ */ dr("div", {
      className: P("btn-group", i ? `size-${i}` : "", n),
      ...a
    }, o && o.map(this.renderItem.bind(this, t)), _);
  }
}
class oi extends Ce {
}
S(oi, "NAME", "btngroup"), S(oi, "Component", da);
function _f() {
  const e = typeof window.innerWidth == "number" ? window.innerWidth - document.body.clientWidth : 17;
  document.body.style.paddingRight = `${e}px`, document.body.classList.add("modal-open");
}
function cf() {
  document.body.style.paddingRight = "", document.body.classList.remove("modal-open");
}
function ff(e, t) {
  _f(), e.classList.add("block"), ri(e, t), e.onclick = (n) => uf(n, e), window.addEventListener("resize", () => {
    ri(e, t);
  });
}
function va(e) {
  var t;
  cf(), (t = e.classList) == null || t.remove("block");
}
function ri(e, t) {
  const n = e.querySelector(".modal-dialog");
  if (!n)
    return;
  const o = Math.max(0, (window.innerHeight - n.clientHeight) / 2);
  if (t === "fit") {
    n.style.top = `${o > 50 ? Math.floor(o * 2 / 3) : o}px`;
    return;
  }
  if (t === "center") {
    n.style.top = `${o}px`;
    return;
  }
  n.style.top = t;
}
function uf(e, t) {
  e.target.closest("[data-dismiss=modal]") && (e.stopPropagation(), va(t));
}
function pf(e) {
  var t, n;
  return e instanceof HTMLAnchorElement ? (n = (t = (e.href || "").match(/(?<selector>#\S+)$/)) == null ? void 0 : t.groups) == null ? void 0 : n.selector : e.dataset.target;
}
document.addEventListener("click", (e) => {
  const t = e.target, n = t.closest("[data-toggle=modal]");
  if (n) {
    const o = pf(n);
    if (!o)
      return;
    const i = document.querySelector(o);
    if (!i)
      return;
    ff(i, n.dataset.position || "fit");
  } else
    t.className.includes("modal") && va(t);
});
class ga extends Oe {
  beforeRender() {
    const t = super.beforeRender();
    return t.className = P(t.className, t.type ? `nav-${t.type}` : "", {
      "nav-stacked": t.stacked
    }), t;
  }
}
S(ga, "NAME", "nav");
class si extends Ce {
}
S(si, "NAME", "nav"), S(si, "Component", ga);
var Gr, V, ma, sn, ii, ya = {}, ba = [], hf = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function Ze(e, t) {
  for (var n in t)
    e[n] = t[n];
  return e;
}
function wa(e) {
  var t = e.parentNode;
  t && t.removeChild(e);
}
function ot(e, t, n) {
  var o, i, r, l = {};
  for (r in t)
    r == "key" ? o = t[r] : r == "ref" ? i = t[r] : l[r] = t[r];
  if (arguments.length > 2 && (l.children = arguments.length > 3 ? Gr.call(arguments, 2) : n), typeof e == "function" && e.defaultProps != null)
    for (r in e.defaultProps)
      l[r] === void 0 && (l[r] = e.defaultProps[r]);
  return no(e, l, o, i, null);
}
function no(e, t, n, o, i) {
  var r = { type: e, props: t, key: n, ref: o, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: i == null ? ++ma : i };
  return i == null && V.vnode != null && V.vnode(r), r;
}
function Yr(e) {
  return e.children;
}
function ln(e, t) {
  this.props = e, this.context = t;
}
function kn(e, t) {
  if (t == null)
    return e.__ ? kn(e.__, e.__.__k.indexOf(e) + 1) : null;
  for (var n; t < e.__k.length; t++)
    if ((n = e.__k[t]) != null && n.__e != null)
      return n.__e;
  return typeof e.type == "function" ? kn(e) : null;
}
function ka(e) {
  var t, n;
  if ((e = e.__) != null && e.__c != null) {
    for (e.__e = e.__c.base = null, t = 0; t < e.__k.length; t++)
      if ((n = e.__k[t]) != null && n.__e != null) {
        e.__e = e.__c.base = n.__e;
        break;
      }
    return ka(e);
  }
}
function li(e) {
  (!e.__d && (e.__d = !0) && sn.push(e) && !Eo.__r++ || ii !== V.debounceRendering) && ((ii = V.debounceRendering) || setTimeout)(Eo);
}
function Eo() {
  for (var e; Eo.__r = sn.length; )
    e = sn.sort(function(t, n) {
      return t.__v.__b - n.__v.__b;
    }), sn = [], e.some(function(t) {
      var n, o, i, r, l, _;
      t.__d && (l = (r = (n = t).__v).__e, (_ = n.__P) && (o = [], (i = Ze({}, r)).__v = r.__v + 1, Ea(_, r, i, n.__n, _.ownerSVGElement !== void 0, r.__h != null ? [l] : null, o, l == null ? kn(r) : l, r.__h), vf(o, r), r.__e != l && ka(r)));
    });
}
function $a(e, t, n, o, i, r, l, _, c, p) {
  var s, h, f, a, u, y, d, v = o && o.__k || ba, g = v.length;
  for (n.__k = [], s = 0; s < t.length; s++)
    if ((a = n.__k[s] = (a = t[s]) == null || typeof a == "boolean" ? null : typeof a == "string" || typeof a == "number" || typeof a == "bigint" ? no(null, a, null, null, a) : Array.isArray(a) ? no(Yr, { children: a }, null, null, null) : a.__b > 0 ? no(a.type, a.props, a.key, a.ref ? a.ref : null, a.__v) : a) != null) {
      if (a.__ = n, a.__b = n.__b + 1, (f = v[s]) === null || f && a.key == f.key && a.type === f.type)
        v[s] = void 0;
      else
        for (h = 0; h < g; h++) {
          if ((f = v[h]) && a.key == f.key && a.type === f.type) {
            v[h] = void 0;
            break;
          }
          f = null;
        }
      Ea(e, a, f = f || ya, i, r, l, _, c, p), u = a.__e, (h = a.ref) && f.ref != h && (d || (d = []), f.ref && d.push(f.ref, null, a), d.push(h, a.__c || u, a)), u != null ? (y == null && (y = u), typeof a.type == "function" && a.__k === f.__k ? a.__d = c = xa(a, c, e) : c = Ca(e, a, f, v, u, c), typeof n.type == "function" && (n.__d = c)) : c && f.__e == c && c.parentNode != e && (c = kn(f));
    }
  for (n.__e = y, s = g; s--; )
    v[s] != null && Ma(v[s], v[s]);
  if (d)
    for (s = 0; s < d.length; s++)
      Sa(d[s], d[++s], d[++s]);
}
function xa(e, t, n) {
  for (var o, i = e.__k, r = 0; i && r < i.length; r++)
    (o = i[r]) && (o.__ = e, t = typeof o.type == "function" ? xa(o, t, n) : Ca(n, o, o, i, o.__e, t));
  return t;
}
function Ca(e, t, n, o, i, r) {
  var l, _, c;
  if (t.__d !== void 0)
    l = t.__d, t.__d = void 0;
  else if (n == null || i != r || i.parentNode == null)
    e:
      if (r == null || r.parentNode !== e)
        e.appendChild(i), l = null;
      else {
        for (_ = r, c = 0; (_ = _.nextSibling) && c < o.length; c += 2)
          if (_ == i)
            break e;
        e.insertBefore(i, r), l = r;
      }
  return l !== void 0 ? l : i.nextSibling;
}
function df(e, t, n, o, i) {
  var r;
  for (r in n)
    r === "children" || r === "key" || r in t || So(e, r, null, n[r], o);
  for (r in t)
    i && typeof t[r] != "function" || r === "children" || r === "key" || r === "value" || r === "checked" || n[r] === t[r] || So(e, r, t[r], n[r], o);
}
function ai(e, t, n) {
  t[0] === "-" ? e.setProperty(t, n) : e[t] = n == null ? "" : typeof n != "number" || hf.test(t) ? n : n + "px";
}
function So(e, t, n, o, i) {
  var r;
  e:
    if (t === "style")
      if (typeof n == "string")
        e.style.cssText = n;
      else {
        if (typeof o == "string" && (e.style.cssText = o = ""), o)
          for (t in o)
            n && t in n || ai(e.style, t, "");
        if (n)
          for (t in n)
            o && n[t] === o[t] || ai(e.style, t, n[t]);
      }
    else if (t[0] === "o" && t[1] === "n")
      r = t !== (t = t.replace(/Capture$/, "")), t = t.toLowerCase() in e ? t.toLowerCase().slice(2) : t.slice(2), e.l || (e.l = {}), e.l[t + r] = n, n ? o || e.addEventListener(t, r ? ci : _i, r) : e.removeEventListener(t, r ? ci : _i, r);
    else if (t !== "dangerouslySetInnerHTML") {
      if (i)
        t = t.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
      else if (t !== "href" && t !== "list" && t !== "form" && t !== "tabIndex" && t !== "download" && t in e)
        try {
          e[t] = n == null ? "" : n;
          break e;
        } catch {
        }
      typeof n == "function" || (n == null || n === !1 && t.indexOf("-") == -1 ? e.removeAttribute(t) : e.setAttribute(t, n));
    }
}
function _i(e) {
  this.l[e.type + !1](V.event ? V.event(e) : e);
}
function ci(e) {
  this.l[e.type + !0](V.event ? V.event(e) : e);
}
function Ea(e, t, n, o, i, r, l, _, c) {
  var p, s, h, f, a, u, y, d, v, g, k, w, E, $, x, m = t.type;
  if (t.constructor !== void 0)
    return null;
  n.__h != null && (c = n.__h, _ = t.__e = n.__e, t.__h = null, r = [_]), (p = V.__b) && p(t);
  try {
    e:
      if (typeof m == "function") {
        if (d = t.props, v = (p = m.contextType) && o[p.__c], g = p ? v ? v.props.value : p.__ : o, n.__c ? y = (s = t.__c = n.__c).__ = s.__E : ("prototype" in m && m.prototype.render ? t.__c = s = new m(d, g) : (t.__c = s = new ln(d, g), s.constructor = m, s.render = mf), v && v.sub(s), s.props = d, s.state || (s.state = {}), s.context = g, s.__n = o, h = s.__d = !0, s.__h = [], s._sb = []), s.__s == null && (s.__s = s.state), m.getDerivedStateFromProps != null && (s.__s == s.state && (s.__s = Ze({}, s.__s)), Ze(s.__s, m.getDerivedStateFromProps(d, s.__s))), f = s.props, a = s.state, h)
          m.getDerivedStateFromProps == null && s.componentWillMount != null && s.componentWillMount(), s.componentDidMount != null && s.__h.push(s.componentDidMount);
        else {
          if (m.getDerivedStateFromProps == null && d !== f && s.componentWillReceiveProps != null && s.componentWillReceiveProps(d, g), !s.__e && s.shouldComponentUpdate != null && s.shouldComponentUpdate(d, s.__s, g) === !1 || t.__v === n.__v) {
            for (s.props = d, s.state = s.__s, t.__v !== n.__v && (s.__d = !1), s.__v = t, t.__e = n.__e, t.__k = n.__k, t.__k.forEach(function(C) {
              C && (C.__ = t);
            }), k = 0; k < s._sb.length; k++)
              s.__h.push(s._sb[k]);
            s._sb = [], s.__h.length && l.push(s);
            break e;
          }
          s.componentWillUpdate != null && s.componentWillUpdate(d, s.__s, g), s.componentDidUpdate != null && s.__h.push(function() {
            s.componentDidUpdate(f, a, u);
          });
        }
        if (s.context = g, s.props = d, s.__v = t, s.__P = e, w = V.__r, E = 0, "prototype" in m && m.prototype.render) {
          for (s.state = s.__s, s.__d = !1, w && w(t), p = s.render(s.props, s.state, s.context), $ = 0; $ < s._sb.length; $++)
            s.__h.push(s._sb[$]);
          s._sb = [];
        } else
          do
            s.__d = !1, w && w(t), p = s.render(s.props, s.state, s.context), s.state = s.__s;
          while (s.__d && ++E < 25);
        s.state = s.__s, s.getChildContext != null && (o = Ze(Ze({}, o), s.getChildContext())), h || s.getSnapshotBeforeUpdate == null || (u = s.getSnapshotBeforeUpdate(f, a)), x = p != null && p.type === Yr && p.key == null ? p.props.children : p, $a(e, Array.isArray(x) ? x : [x], t, n, o, i, r, l, _, c), s.base = t.__e, t.__h = null, s.__h.length && l.push(s), y && (s.__E = s.__ = null), s.__e = !1;
      } else
        r == null && t.__v === n.__v ? (t.__k = n.__k, t.__e = n.__e) : t.__e = gf(n.__e, t, n, o, i, r, l, c);
    (p = V.diffed) && p(t);
  } catch (C) {
    t.__v = null, (c || r != null) && (t.__e = _, t.__h = !!c, r[r.indexOf(_)] = null), V.__e(C, t, n);
  }
}
function vf(e, t) {
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
function gf(e, t, n, o, i, r, l, _) {
  var c, p, s, h = n.props, f = t.props, a = t.type, u = 0;
  if (a === "svg" && (i = !0), r != null) {
    for (; u < r.length; u++)
      if ((c = r[u]) && "setAttribute" in c == !!a && (a ? c.localName === a : c.nodeType === 3)) {
        e = c, r[u] = null;
        break;
      }
  }
  if (e == null) {
    if (a === null)
      return document.createTextNode(f);
    e = i ? document.createElementNS("http://www.w3.org/2000/svg", a) : document.createElement(a, f.is && f), r = null, _ = !1;
  }
  if (a === null)
    h === f || _ && e.data === f || (e.data = f);
  else {
    if (r = r && Gr.call(e.childNodes), p = (h = n.props || ya).dangerouslySetInnerHTML, s = f.dangerouslySetInnerHTML, !_) {
      if (r != null)
        for (h = {}, u = 0; u < e.attributes.length; u++)
          h[e.attributes[u].name] = e.attributes[u].value;
      (s || p) && (s && (p && s.__html == p.__html || s.__html === e.innerHTML) || (e.innerHTML = s && s.__html || ""));
    }
    if (df(e, f, h, i, _), s)
      t.__k = [];
    else if (u = t.props.children, $a(e, Array.isArray(u) ? u : [u], t, n, o, i && a !== "foreignObject", r, l, r ? r[0] : n.__k && kn(n, 0), _), r != null)
      for (u = r.length; u--; )
        r[u] != null && wa(r[u]);
    _ || ("value" in f && (u = f.value) !== void 0 && (u !== e.value || a === "progress" && !u || a === "option" && u !== h.value) && So(e, "value", u, h.value, !1), "checked" in f && (u = f.checked) !== void 0 && u !== e.checked && So(e, "checked", u, h.checked, !1));
  }
  return e;
}
function Sa(e, t, n) {
  try {
    typeof e == "function" ? e(t) : e.current = t;
  } catch (o) {
    V.__e(o, n);
  }
}
function Ma(e, t, n) {
  var o, i;
  if (V.unmount && V.unmount(e), (o = e.ref) && (o.current && o.current !== e.__e || Sa(o, null, t)), (o = e.__c) != null) {
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
      o[i] && Ma(o[i], t, n || typeof e.type != "function");
  n || e.__e == null || wa(e.__e), e.__ = e.__e = e.__d = void 0;
}
function mf(e, t, n) {
  return this.constructor(e, n);
}
Gr = ba.slice, V = { __e: function(e, t, n, o) {
  for (var i, r, l; t = t.__; )
    if ((i = t.__c) && !i.__)
      try {
        if ((r = i.constructor) && r.getDerivedStateFromError != null && (i.setState(r.getDerivedStateFromError(e)), l = i.__d), i.componentDidCatch != null && (i.componentDidCatch(e, o || {}), l = i.__d), l)
          return i.__E = i;
      } catch (_) {
        e = _;
      }
  throw e;
} }, ma = 0, ln.prototype.setState = function(e, t) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = Ze({}, this.state), typeof e == "function" && (e = e(Ze({}, n), this.props)), e && Ze(n, e), e != null && this.__v && (t && this._sb.push(t), li(this));
}, ln.prototype.forceUpdate = function(e) {
  this.__v && (this.__e = !0, e && this.__h.push(e), li(this));
}, ln.prototype.render = Yr, sn = [], Eo.__r = 0;
var Ta, kr, Aa, yf = [];
function rr(e, t, n) {
  var o, i, r, l = {};
  for (r in t)
    r == "key" ? o = t[r] : r == "ref" ? i = t[r] : l[r] = t[r];
  if (arguments.length > 2 && (l.children = arguments.length > 3 ? Ta.call(arguments, 2) : n), typeof e == "function" && e.defaultProps != null)
    for (r in e.defaultProps)
      l[r] === void 0 && (l[r] = e.defaultProps[r]);
  return bf(e, l, o, i, null);
}
function bf(e, t, n, o, i) {
  var r = { type: e, props: t, key: n, ref: o, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: i == null ? ++Aa : i };
  return i == null && kr.vnode != null && kr.vnode(r), r;
}
Ta = yf.slice, kr = { __e: function(e, t, n, o) {
  for (var i, r, l; t = t.__; )
    if ((i = t.__c) && !i.__)
      try {
        if ((r = i.constructor) && r.getDerivedStateFromError != null && (i.setState(r.getDerivedStateFromError(e)), l = i.__d), i.componentDidCatch != null && (i.componentDidCatch(e, o || {}), l = i.__d), l)
          return i.__E = i;
      } catch (_) {
        e = _;
      }
  throw e;
} }, Aa = 0;
function wf({
  key: e,
  type: t,
  btnType: n,
  ...o
}) {
  return /* @__PURE__ */ rr(vt, {
    type: n,
    ...o
  });
}
var Kr, q, Na, an, fi, Ra = {}, Pa = [], kf = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function Qe(e, t) {
  for (var n in t)
    e[n] = t[n];
  return e;
}
function La(e) {
  var t = e.parentNode;
  t && t.removeChild(e);
}
function Oa(e, t, n) {
  var o, i, r, l = {};
  for (r in t)
    r == "key" ? o = t[r] : r == "ref" ? i = t[r] : l[r] = t[r];
  if (arguments.length > 2 && (l.children = arguments.length > 3 ? Kr.call(arguments, 2) : n), typeof e == "function" && e.defaultProps != null)
    for (r in e.defaultProps)
      l[r] === void 0 && (l[r] = e.defaultProps[r]);
  return oo(e, l, o, i, null);
}
function oo(e, t, n, o, i) {
  var r = { type: e, props: t, key: n, ref: o, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: i == null ? ++Na : i };
  return i == null && q.vnode != null && q.vnode(r), r;
}
function $f() {
  return { current: null };
}
function Xr(e) {
  return e.children;
}
function _n(e, t) {
  this.props = e, this.context = t;
}
function $n(e, t) {
  if (t == null)
    return e.__ ? $n(e.__, e.__.__k.indexOf(e) + 1) : null;
  for (var n; t < e.__k.length; t++)
    if ((n = e.__k[t]) != null && n.__e != null)
      return n.__e;
  return typeof e.type == "function" ? $n(e) : null;
}
function Da(e) {
  var t, n;
  if ((e = e.__) != null && e.__c != null) {
    for (e.__e = e.__c.base = null, t = 0; t < e.__k.length; t++)
      if ((n = e.__k[t]) != null && n.__e != null) {
        e.__e = e.__c.base = n.__e;
        break;
      }
    return Da(e);
  }
}
function ui(e) {
  (!e.__d && (e.__d = !0) && an.push(e) && !Mo.__r++ || fi !== q.debounceRendering) && ((fi = q.debounceRendering) || setTimeout)(Mo);
}
function Mo() {
  for (var e; Mo.__r = an.length; )
    e = an.sort(function(t, n) {
      return t.__v.__b - n.__v.__b;
    }), an = [], e.some(function(t) {
      var n, o, i, r, l, _;
      t.__d && (l = (r = (n = t).__v).__e, (_ = n.__P) && (o = [], (i = Qe({}, r)).__v = r.__v + 1, Ua(_, r, i, n.__n, _.ownerSVGElement !== void 0, r.__h != null ? [l] : null, o, l == null ? $n(r) : l, r.__h), Cf(o, r), r.__e != l && Da(r)));
    });
}
function Ha(e, t, n, o, i, r, l, _, c, p) {
  var s, h, f, a, u, y, d, v = o && o.__k || Pa, g = v.length;
  for (n.__k = [], s = 0; s < t.length; s++)
    if ((a = n.__k[s] = (a = t[s]) == null || typeof a == "boolean" ? null : typeof a == "string" || typeof a == "number" || typeof a == "bigint" ? oo(null, a, null, null, a) : Array.isArray(a) ? oo(Xr, { children: a }, null, null, null) : a.__b > 0 ? oo(a.type, a.props, a.key, a.ref ? a.ref : null, a.__v) : a) != null) {
      if (a.__ = n, a.__b = n.__b + 1, (f = v[s]) === null || f && a.key == f.key && a.type === f.type)
        v[s] = void 0;
      else
        for (h = 0; h < g; h++) {
          if ((f = v[h]) && a.key == f.key && a.type === f.type) {
            v[h] = void 0;
            break;
          }
          f = null;
        }
      Ua(e, a, f = f || Ra, i, r, l, _, c, p), u = a.__e, (h = a.ref) && f.ref != h && (d || (d = []), f.ref && d.push(f.ref, null, a), d.push(h, a.__c || u, a)), u != null ? (y == null && (y = u), typeof a.type == "function" && a.__k === f.__k ? a.__d = c = Ia(a, c, e) : c = Wa(e, a, f, v, u, c), typeof n.type == "function" && (n.__d = c)) : c && f.__e == c && c.parentNode != e && (c = $n(f));
    }
  for (n.__e = y, s = g; s--; )
    v[s] != null && Ba(v[s], v[s]);
  if (d)
    for (s = 0; s < d.length; s++)
      ja(d[s], d[++s], d[++s]);
}
function Ia(e, t, n) {
  for (var o, i = e.__k, r = 0; i && r < i.length; r++)
    (o = i[r]) && (o.__ = e, t = typeof o.type == "function" ? Ia(o, t, n) : Wa(n, o, o, i, o.__e, t));
  return t;
}
function Wa(e, t, n, o, i, r) {
  var l, _, c;
  if (t.__d !== void 0)
    l = t.__d, t.__d = void 0;
  else if (n == null || i != r || i.parentNode == null)
    e:
      if (r == null || r.parentNode !== e)
        e.appendChild(i), l = null;
      else {
        for (_ = r, c = 0; (_ = _.nextSibling) && c < o.length; c += 2)
          if (_ == i)
            break e;
        e.insertBefore(i, r), l = r;
      }
  return l !== void 0 ? l : i.nextSibling;
}
function xf(e, t, n, o, i) {
  var r;
  for (r in n)
    r === "children" || r === "key" || r in t || To(e, r, null, n[r], o);
  for (r in t)
    i && typeof t[r] != "function" || r === "children" || r === "key" || r === "value" || r === "checked" || n[r] === t[r] || To(e, r, t[r], n[r], o);
}
function pi(e, t, n) {
  t[0] === "-" ? e.setProperty(t, n) : e[t] = n == null ? "" : typeof n != "number" || kf.test(t) ? n : n + "px";
}
function To(e, t, n, o, i) {
  var r;
  e:
    if (t === "style")
      if (typeof n == "string")
        e.style.cssText = n;
      else {
        if (typeof o == "string" && (e.style.cssText = o = ""), o)
          for (t in o)
            n && t in n || pi(e.style, t, "");
        if (n)
          for (t in n)
            o && n[t] === o[t] || pi(e.style, t, n[t]);
      }
    else if (t[0] === "o" && t[1] === "n")
      r = t !== (t = t.replace(/Capture$/, "")), t = t.toLowerCase() in e ? t.toLowerCase().slice(2) : t.slice(2), e.l || (e.l = {}), e.l[t + r] = n, n ? o || e.addEventListener(t, r ? di : hi, r) : e.removeEventListener(t, r ? di : hi, r);
    else if (t !== "dangerouslySetInnerHTML") {
      if (i)
        t = t.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
      else if (t !== "href" && t !== "list" && t !== "form" && t !== "tabIndex" && t !== "download" && t in e)
        try {
          e[t] = n == null ? "" : n;
          break e;
        } catch {
        }
      typeof n == "function" || (n == null || n === !1 && t.indexOf("-") == -1 ? e.removeAttribute(t) : e.setAttribute(t, n));
    }
}
function hi(e) {
  this.l[e.type + !1](q.event ? q.event(e) : e);
}
function di(e) {
  this.l[e.type + !0](q.event ? q.event(e) : e);
}
function Ua(e, t, n, o, i, r, l, _, c) {
  var p, s, h, f, a, u, y, d, v, g, k, w, E, $, x, m = t.type;
  if (t.constructor !== void 0)
    return null;
  n.__h != null && (c = n.__h, _ = t.__e = n.__e, t.__h = null, r = [_]), (p = q.__b) && p(t);
  try {
    e:
      if (typeof m == "function") {
        if (d = t.props, v = (p = m.contextType) && o[p.__c], g = p ? v ? v.props.value : p.__ : o, n.__c ? y = (s = t.__c = n.__c).__ = s.__E : ("prototype" in m && m.prototype.render ? t.__c = s = new m(d, g) : (t.__c = s = new _n(d, g), s.constructor = m, s.render = Sf), v && v.sub(s), s.props = d, s.state || (s.state = {}), s.context = g, s.__n = o, h = s.__d = !0, s.__h = [], s._sb = []), s.__s == null && (s.__s = s.state), m.getDerivedStateFromProps != null && (s.__s == s.state && (s.__s = Qe({}, s.__s)), Qe(s.__s, m.getDerivedStateFromProps(d, s.__s))), f = s.props, a = s.state, h)
          m.getDerivedStateFromProps == null && s.componentWillMount != null && s.componentWillMount(), s.componentDidMount != null && s.__h.push(s.componentDidMount);
        else {
          if (m.getDerivedStateFromProps == null && d !== f && s.componentWillReceiveProps != null && s.componentWillReceiveProps(d, g), !s.__e && s.shouldComponentUpdate != null && s.shouldComponentUpdate(d, s.__s, g) === !1 || t.__v === n.__v) {
            for (s.props = d, s.state = s.__s, t.__v !== n.__v && (s.__d = !1), s.__v = t, t.__e = n.__e, t.__k = n.__k, t.__k.forEach(function(C) {
              C && (C.__ = t);
            }), k = 0; k < s._sb.length; k++)
              s.__h.push(s._sb[k]);
            s._sb = [], s.__h.length && l.push(s);
            break e;
          }
          s.componentWillUpdate != null && s.componentWillUpdate(d, s.__s, g), s.componentDidUpdate != null && s.__h.push(function() {
            s.componentDidUpdate(f, a, u);
          });
        }
        if (s.context = g, s.props = d, s.__v = t, s.__P = e, w = q.__r, E = 0, "prototype" in m && m.prototype.render) {
          for (s.state = s.__s, s.__d = !1, w && w(t), p = s.render(s.props, s.state, s.context), $ = 0; $ < s._sb.length; $++)
            s.__h.push(s._sb[$]);
          s._sb = [];
        } else
          do
            s.__d = !1, w && w(t), p = s.render(s.props, s.state, s.context), s.state = s.__s;
          while (s.__d && ++E < 25);
        s.state = s.__s, s.getChildContext != null && (o = Qe(Qe({}, o), s.getChildContext())), h || s.getSnapshotBeforeUpdate == null || (u = s.getSnapshotBeforeUpdate(f, a)), x = p != null && p.type === Xr && p.key == null ? p.props.children : p, Ha(e, Array.isArray(x) ? x : [x], t, n, o, i, r, l, _, c), s.base = t.__e, t.__h = null, s.__h.length && l.push(s), y && (s.__E = s.__ = null), s.__e = !1;
      } else
        r == null && t.__v === n.__v ? (t.__k = n.__k, t.__e = n.__e) : t.__e = Ef(n.__e, t, n, o, i, r, l, c);
    (p = q.diffed) && p(t);
  } catch (C) {
    t.__v = null, (c || r != null) && (t.__e = _, t.__h = !!c, r[r.indexOf(_)] = null), q.__e(C, t, n);
  }
}
function Cf(e, t) {
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
function Ef(e, t, n, o, i, r, l, _) {
  var c, p, s, h = n.props, f = t.props, a = t.type, u = 0;
  if (a === "svg" && (i = !0), r != null) {
    for (; u < r.length; u++)
      if ((c = r[u]) && "setAttribute" in c == !!a && (a ? c.localName === a : c.nodeType === 3)) {
        e = c, r[u] = null;
        break;
      }
  }
  if (e == null) {
    if (a === null)
      return document.createTextNode(f);
    e = i ? document.createElementNS("http://www.w3.org/2000/svg", a) : document.createElement(a, f.is && f), r = null, _ = !1;
  }
  if (a === null)
    h === f || _ && e.data === f || (e.data = f);
  else {
    if (r = r && Kr.call(e.childNodes), p = (h = n.props || Ra).dangerouslySetInnerHTML, s = f.dangerouslySetInnerHTML, !_) {
      if (r != null)
        for (h = {}, u = 0; u < e.attributes.length; u++)
          h[e.attributes[u].name] = e.attributes[u].value;
      (s || p) && (s && (p && s.__html == p.__html || s.__html === e.innerHTML) || (e.innerHTML = s && s.__html || ""));
    }
    if (xf(e, f, h, i, _), s)
      t.__k = [];
    else if (u = t.props.children, Ha(e, Array.isArray(u) ? u : [u], t, n, o, i && a !== "foreignObject", r, l, r ? r[0] : n.__k && $n(n, 0), _), r != null)
      for (u = r.length; u--; )
        r[u] != null && La(r[u]);
    _ || ("value" in f && (u = f.value) !== void 0 && (u !== e.value || a === "progress" && !u || a === "option" && u !== h.value) && To(e, "value", u, h.value, !1), "checked" in f && (u = f.checked) !== void 0 && u !== e.checked && To(e, "checked", u, h.checked, !1));
  }
  return e;
}
function ja(e, t, n) {
  try {
    typeof e == "function" ? e(t) : e.current = t;
  } catch (o) {
    q.__e(o, n);
  }
}
function Ba(e, t, n) {
  var o, i;
  if (q.unmount && q.unmount(e), (o = e.ref) && (o.current && o.current !== e.__e || ja(o, null, t)), (o = e.__c) != null) {
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
      o[i] && Ba(o[i], t, n || typeof e.type != "function");
  n || e.__e == null || La(e.__e), e.__ = e.__e = e.__d = void 0;
}
function Sf(e, t, n) {
  return this.constructor(e, n);
}
Kr = Pa.slice, q = { __e: function(e, t, n, o) {
  for (var i, r, l; t = t.__; )
    if ((i = t.__c) && !i.__)
      try {
        if ((r = i.constructor) && r.getDerivedStateFromError != null && (i.setState(r.getDerivedStateFromError(e)), l = i.__d), i.componentDidCatch != null && (i.componentDidCatch(e, o || {}), l = i.__d), l)
          return i.__E = i;
      } catch (_) {
        e = _;
      }
  throw e;
} }, Na = 0, _n.prototype.setState = function(e, t) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = Qe({}, this.state), typeof e == "function" && (e = e(Qe({}, n), this.props)), e && Qe(n, e), e != null && this.__v && (t && this._sb.push(t), ui(this));
}, _n.prototype.forceUpdate = function(e) {
  this.__v && (this.__e = !0, e && this.__h.push(e), ui(this));
}, _n.prototype.render = Xr, an = [], Mo.__r = 0;
var Jr = "top", za = "bottom", Ao = "right", xn = "left", Mf = "auto", Fa = [Jr, za, Ao, xn], Tf = "start", Af = "end", Nf = /* @__PURE__ */ [].concat(Fa, [Mf]).reduce(function(e, t) {
  return e.concat([t, t + "-" + Tf, t + "-" + Af]);
}, []);
function Va(e) {
  return e.split("-")[0];
}
function Ht(e) {
  if (e == null)
    return window;
  if (e.toString() !== "[object Window]") {
    var t = e.ownerDocument;
    return t && t.defaultView || window;
  }
  return e;
}
function qa(e) {
  var t = Ht(e).Element;
  return e instanceof t || e instanceof Element;
}
function No(e) {
  var t = Ht(e).HTMLElement;
  return e instanceof t || e instanceof HTMLElement;
}
function Zr(e) {
  if (typeof ShadowRoot > "u")
    return !1;
  var t = Ht(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot;
}
var Rf = Math.max, Pf = Math.min, vi = Math.round;
function $r() {
  var e = navigator.userAgentData;
  return e != null && e.brands ? e.brands.map(function(t) {
    return t.brand + "/" + t.version;
  }).join(" ") : navigator.userAgent;
}
function Lf() {
  return !/^((?!chrome|android).)*safari/i.test($r());
}
function Of(e, t, n) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  var o = e.getBoundingClientRect(), i = 1, r = 1;
  t && No(e) && (i = e.offsetWidth > 0 && vi(o.width) / e.offsetWidth || 1, r = e.offsetHeight > 0 && vi(o.height) / e.offsetHeight || 1);
  var l = qa(e) ? Ht(e) : window, _ = l.visualViewport, c = !Lf() && n, p = (o.left + (c && _ ? _.offsetLeft : 0)) / i, s = (o.top + (c && _ ? _.offsetTop : 0)) / r, h = o.width / i, f = o.height / r;
  return {
    width: h,
    height: f,
    top: s,
    right: p + h,
    bottom: s + f,
    left: p,
    x: p,
    y: s
  };
}
function Df(e) {
  var t = Of(e), n = e.offsetWidth, o = e.offsetHeight;
  return Math.abs(t.width - n) <= 1 && (n = t.width), Math.abs(t.height - o) <= 1 && (o = t.height), {
    x: e.offsetLeft,
    y: e.offsetTop,
    width: n,
    height: o
  };
}
function Hf(e, t) {
  var n = t.getRootNode && t.getRootNode();
  if (e.contains(t))
    return !0;
  if (n && Zr(n)) {
    var o = t;
    do {
      if (o && e.isSameNode(o))
        return !0;
      o = o.parentNode || o.host;
    } while (o);
  }
  return !1;
}
function Cn(e) {
  return e ? (e.nodeName || "").toLowerCase() : null;
}
function En(e) {
  return Ht(e).getComputedStyle(e);
}
function If(e) {
  return ["table", "td", "th"].indexOf(Cn(e)) >= 0;
}
function Wf(e) {
  return ((qa(e) ? e.ownerDocument : e.document) || window.document).documentElement;
}
function Uf(e) {
  return Cn(e) === "html" ? e : e.assignedSlot || e.parentNode || (Zr(e) ? e.host : null) || Wf(e);
}
function gi(e) {
  return !No(e) || En(e).position === "fixed" ? null : e.offsetParent;
}
function jf(e) {
  var t = /firefox/i.test($r()), n = /Trident/i.test($r());
  if (n && No(e)) {
    var o = En(e);
    if (o.position === "fixed")
      return null;
  }
  var i = Uf(e);
  for (Zr(i) && (i = i.host); No(i) && ["html", "body"].indexOf(Cn(i)) < 0; ) {
    var r = En(i);
    if (r.transform !== "none" || r.perspective !== "none" || r.contain === "paint" || ["transform", "perspective"].indexOf(r.willChange) !== -1 || t && r.willChange === "filter" || t && r.filter && r.filter !== "none")
      return i;
    i = i.parentNode;
  }
  return null;
}
function Bf(e) {
  for (var t = Ht(e), n = gi(e); n && If(n) && En(n).position === "static"; )
    n = gi(n);
  return n && (Cn(n) === "html" || Cn(n) === "body" && En(n).position === "static") ? t : n || jf(e) || t;
}
function zf(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function Ff(e, t, n) {
  return Rf(e, Pf(t, n));
}
function Vf() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
function qf(e) {
  return Object.assign({}, Vf(), e);
}
function Gf(e, t) {
  return t.reduce(function(n, o) {
    return n[o] = e, n;
  }, {});
}
var Yf = function(t, n) {
  return t = typeof t == "function" ? t(Object.assign({}, n.rects, {
    placement: n.placement
  })) : t, qf(typeof t != "number" ? t : Gf(t, Fa));
};
function Kf(e) {
  var t, n = e.state, o = e.name, i = e.options, r = n.elements.arrow, l = n.modifiersData.popperOffsets, _ = Va(n.placement), c = zf(_), p = [xn, Ao].indexOf(_) >= 0, s = p ? "height" : "width";
  if (!(!r || !l)) {
    var h = Yf(i.padding, n), f = Df(r), a = c === "y" ? Jr : xn, u = c === "y" ? za : Ao, y = n.rects.reference[s] + n.rects.reference[c] - l[c] - n.rects.popper[s], d = l[c] - n.rects.reference[c], v = Bf(r), g = v ? c === "y" ? v.clientHeight || 0 : v.clientWidth || 0 : 0, k = y / 2 - d / 2, w = h[a], E = g - f[s] - h[u], $ = g / 2 - f[s] / 2 + k, x = Ff(w, $, E), m = c;
    n.modifiersData[o] = (t = {}, t[m] = x, t.centerOffset = x - $, t);
  }
}
function Xf(e) {
  var t = e.state, n = e.options, o = n.element, i = o === void 0 ? "[data-popper-arrow]" : o;
  i != null && (typeof i == "string" && (i = t.elements.popper.querySelector(i), !i) || !Hf(t.elements.popper, i) || (t.elements.arrow = i));
}
const Jf = {
  name: "arrow",
  enabled: !0,
  phase: "main",
  fn: Kf,
  effect: Xf,
  requires: ["popperOffsets"],
  requiresIfExists: ["preventOverflow"]
};
function Zf(e, t, n) {
  var o = Va(e), i = [xn, Jr].indexOf(o) >= 0 ? -1 : 1, r = typeof n == "function" ? n(Object.assign({}, t, {
    placement: e
  })) : n, l = r[0], _ = r[1];
  return l = l || 0, _ = (_ || 0) * i, [xn, Ao].indexOf(o) >= 0 ? {
    x: _,
    y: l
  } : {
    x: l,
    y: _
  };
}
function Qf(e) {
  var t = e.state, n = e.options, o = e.name, i = n.offset, r = i === void 0 ? [0, 0] : i, l = Nf.reduce(function(s, h) {
    return s[h] = Zf(h, t.rects, r), s;
  }, {}), _ = l[t.placement], c = _.x, p = _.y;
  t.modifiersData.popperOffsets != null && (t.modifiersData.popperOffsets.x += c, t.modifiersData.popperOffsets.y += p), t.modifiersData[o] = l;
}
const eu = {
  name: "offset",
  enabled: !0,
  phase: "main",
  requires: ["popperOffsets"],
  fn: Qf
};
var sr, I, Ga, cn, mi, Ro = {}, Ya = [], tu = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function et(e, t) {
  for (var n in t)
    e[n] = t[n];
  return e;
}
function Ka(e) {
  var t = e.parentNode;
  t && t.removeChild(e);
}
function Qr(e, t, n) {
  var o, i, r, l = {};
  for (r in t)
    r == "key" ? o = t[r] : r == "ref" ? i = t[r] : l[r] = t[r];
  if (arguments.length > 2 && (l.children = arguments.length > 3 ? sr.call(arguments, 2) : n), typeof e == "function" && e.defaultProps != null)
    for (r in e.defaultProps)
      l[r] === void 0 && (l[r] = e.defaultProps[r]);
  return ro(e, l, o, i, null);
}
function ro(e, t, n, o, i) {
  var r = { type: e, props: t, key: n, ref: o, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: i == null ? ++Ga : i };
  return i == null && I.vnode != null && I.vnode(r), r;
}
function ir(e) {
  return e.children;
}
function so(e, t) {
  this.props = e, this.context = t;
}
function Sn(e, t) {
  if (t == null)
    return e.__ ? Sn(e.__, e.__.__k.indexOf(e) + 1) : null;
  for (var n; t < e.__k.length; t++)
    if ((n = e.__k[t]) != null && n.__e != null)
      return n.__e;
  return typeof e.type == "function" ? Sn(e) : null;
}
function Xa(e) {
  var t, n;
  if ((e = e.__) != null && e.__c != null) {
    for (e.__e = e.__c.base = null, t = 0; t < e.__k.length; t++)
      if ((n = e.__k[t]) != null && n.__e != null) {
        e.__e = e.__c.base = n.__e;
        break;
      }
    return Xa(e);
  }
}
function yi(e) {
  (!e.__d && (e.__d = !0) && cn.push(e) && !Po.__r++ || mi !== I.debounceRendering) && ((mi = I.debounceRendering) || setTimeout)(Po);
}
function Po() {
  for (var e; Po.__r = cn.length; )
    e = cn.sort(function(t, n) {
      return t.__v.__b - n.__v.__b;
    }), cn = [], e.some(function(t) {
      var n, o, i, r, l, _;
      t.__d && (l = (r = (n = t).__v).__e, (_ = n.__P) && (o = [], (i = et({}, r)).__v = r.__v + 1, es(_, r, i, n.__n, _.ownerSVGElement !== void 0, r.__h != null ? [l] : null, o, l == null ? Sn(r) : l, r.__h), e_(o, r), r.__e != l && Xa(r)));
    });
}
function Ja(e, t, n, o, i, r, l, _, c, p) {
  var s, h, f, a, u, y, d, v = o && o.__k || Ya, g = v.length;
  for (n.__k = [], s = 0; s < t.length; s++)
    if ((a = n.__k[s] = (a = t[s]) == null || typeof a == "boolean" ? null : typeof a == "string" || typeof a == "number" || typeof a == "bigint" ? ro(null, a, null, null, a) : Array.isArray(a) ? ro(ir, { children: a }, null, null, null) : a.__b > 0 ? ro(a.type, a.props, a.key, a.ref ? a.ref : null, a.__v) : a) != null) {
      if (a.__ = n, a.__b = n.__b + 1, (f = v[s]) === null || f && a.key == f.key && a.type === f.type)
        v[s] = void 0;
      else
        for (h = 0; h < g; h++) {
          if ((f = v[h]) && a.key == f.key && a.type === f.type) {
            v[h] = void 0;
            break;
          }
          f = null;
        }
      es(e, a, f = f || Ro, i, r, l, _, c, p), u = a.__e, (h = a.ref) && f.ref != h && (d || (d = []), f.ref && d.push(f.ref, null, a), d.push(h, a.__c || u, a)), u != null ? (y == null && (y = u), typeof a.type == "function" && a.__k === f.__k ? a.__d = c = Za(a, c, e) : c = Qa(e, a, f, v, u, c), typeof n.type == "function" && (n.__d = c)) : c && f.__e == c && c.parentNode != e && (c = Sn(f));
    }
  for (n.__e = y, s = g; s--; )
    v[s] != null && n_(v[s], v[s]);
  if (d)
    for (s = 0; s < d.length; s++)
      t_(d[s], d[++s], d[++s]);
}
function Za(e, t, n) {
  for (var o, i = e.__k, r = 0; i && r < i.length; r++)
    (o = i[r]) && (o.__ = e, t = typeof o.type == "function" ? Za(o, t, n) : Qa(n, o, o, i, o.__e, t));
  return t;
}
function Qa(e, t, n, o, i, r) {
  var l, _, c;
  if (t.__d !== void 0)
    l = t.__d, t.__d = void 0;
  else if (n == null || i != r || i.parentNode == null)
    e:
      if (r == null || r.parentNode !== e)
        e.appendChild(i), l = null;
      else {
        for (_ = r, c = 0; (_ = _.nextSibling) && c < o.length; c += 2)
          if (_ == i)
            break e;
        e.insertBefore(i, r), l = r;
      }
  return l !== void 0 ? l : i.nextSibling;
}
function nu(e, t, n, o, i) {
  var r;
  for (r in n)
    r === "children" || r === "key" || r in t || Lo(e, r, null, n[r], o);
  for (r in t)
    i && typeof t[r] != "function" || r === "children" || r === "key" || r === "value" || r === "checked" || n[r] === t[r] || Lo(e, r, t[r], n[r], o);
}
function bi(e, t, n) {
  t[0] === "-" ? e.setProperty(t, n) : e[t] = n == null ? "" : typeof n != "number" || tu.test(t) ? n : n + "px";
}
function Lo(e, t, n, o, i) {
  var r;
  e:
    if (t === "style")
      if (typeof n == "string")
        e.style.cssText = n;
      else {
        if (typeof o == "string" && (e.style.cssText = o = ""), o)
          for (t in o)
            n && t in n || bi(e.style, t, "");
        if (n)
          for (t in n)
            o && n[t] === o[t] || bi(e.style, t, n[t]);
      }
    else if (t[0] === "o" && t[1] === "n")
      r = t !== (t = t.replace(/Capture$/, "")), t = t.toLowerCase() in e ? t.toLowerCase().slice(2) : t.slice(2), e.l || (e.l = {}), e.l[t + r] = n, n ? o || e.addEventListener(t, r ? ki : wi, r) : e.removeEventListener(t, r ? ki : wi, r);
    else if (t !== "dangerouslySetInnerHTML") {
      if (i)
        t = t.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
      else if (t !== "href" && t !== "list" && t !== "form" && t !== "tabIndex" && t !== "download" && t in e)
        try {
          e[t] = n == null ? "" : n;
          break e;
        } catch {
        }
      typeof n == "function" || (n == null || n === !1 && t.indexOf("-") == -1 ? e.removeAttribute(t) : e.setAttribute(t, n));
    }
}
function wi(e) {
  this.l[e.type + !1](I.event ? I.event(e) : e);
}
function ki(e) {
  this.l[e.type + !0](I.event ? I.event(e) : e);
}
function es(e, t, n, o, i, r, l, _, c) {
  var p, s, h, f, a, u, y, d, v, g, k, w, E, $, x, m = t.type;
  if (t.constructor !== void 0)
    return null;
  n.__h != null && (c = n.__h, _ = t.__e = n.__e, t.__h = null, r = [_]), (p = I.__b) && p(t);
  try {
    e:
      if (typeof m == "function") {
        if (d = t.props, v = (p = m.contextType) && o[p.__c], g = p ? v ? v.props.value : p.__ : o, n.__c ? y = (s = t.__c = n.__c).__ = s.__E : ("prototype" in m && m.prototype.render ? t.__c = s = new m(d, g) : (t.__c = s = new so(d, g), s.constructor = m, s.render = ru), v && v.sub(s), s.props = d, s.state || (s.state = {}), s.context = g, s.__n = o, h = s.__d = !0, s.__h = [], s._sb = []), s.__s == null && (s.__s = s.state), m.getDerivedStateFromProps != null && (s.__s == s.state && (s.__s = et({}, s.__s)), et(s.__s, m.getDerivedStateFromProps(d, s.__s))), f = s.props, a = s.state, h)
          m.getDerivedStateFromProps == null && s.componentWillMount != null && s.componentWillMount(), s.componentDidMount != null && s.__h.push(s.componentDidMount);
        else {
          if (m.getDerivedStateFromProps == null && d !== f && s.componentWillReceiveProps != null && s.componentWillReceiveProps(d, g), !s.__e && s.shouldComponentUpdate != null && s.shouldComponentUpdate(d, s.__s, g) === !1 || t.__v === n.__v) {
            for (s.props = d, s.state = s.__s, t.__v !== n.__v && (s.__d = !1), s.__v = t, t.__e = n.__e, t.__k = n.__k, t.__k.forEach(function(C) {
              C && (C.__ = t);
            }), k = 0; k < s._sb.length; k++)
              s.__h.push(s._sb[k]);
            s._sb = [], s.__h.length && l.push(s);
            break e;
          }
          s.componentWillUpdate != null && s.componentWillUpdate(d, s.__s, g), s.componentDidUpdate != null && s.__h.push(function() {
            s.componentDidUpdate(f, a, u);
          });
        }
        if (s.context = g, s.props = d, s.__v = t, s.__P = e, w = I.__r, E = 0, "prototype" in m && m.prototype.render) {
          for (s.state = s.__s, s.__d = !1, w && w(t), p = s.render(s.props, s.state, s.context), $ = 0; $ < s._sb.length; $++)
            s.__h.push(s._sb[$]);
          s._sb = [];
        } else
          do
            s.__d = !1, w && w(t), p = s.render(s.props, s.state, s.context), s.state = s.__s;
          while (s.__d && ++E < 25);
        s.state = s.__s, s.getChildContext != null && (o = et(et({}, o), s.getChildContext())), h || s.getSnapshotBeforeUpdate == null || (u = s.getSnapshotBeforeUpdate(f, a)), x = p != null && p.type === ir && p.key == null ? p.props.children : p, Ja(e, Array.isArray(x) ? x : [x], t, n, o, i, r, l, _, c), s.base = t.__e, t.__h = null, s.__h.length && l.push(s), y && (s.__E = s.__ = null), s.__e = !1;
      } else
        r == null && t.__v === n.__v ? (t.__k = n.__k, t.__e = n.__e) : t.__e = ou(n.__e, t, n, o, i, r, l, c);
    (p = I.diffed) && p(t);
  } catch (C) {
    t.__v = null, (c || r != null) && (t.__e = _, t.__h = !!c, r[r.indexOf(_)] = null), I.__e(C, t, n);
  }
}
function e_(e, t) {
  I.__c && I.__c(t, e), e.some(function(n) {
    try {
      e = n.__h, n.__h = [], e.some(function(o) {
        o.call(n);
      });
    } catch (o) {
      I.__e(o, n.__v);
    }
  });
}
function ou(e, t, n, o, i, r, l, _) {
  var c, p, s, h = n.props, f = t.props, a = t.type, u = 0;
  if (a === "svg" && (i = !0), r != null) {
    for (; u < r.length; u++)
      if ((c = r[u]) && "setAttribute" in c == !!a && (a ? c.localName === a : c.nodeType === 3)) {
        e = c, r[u] = null;
        break;
      }
  }
  if (e == null) {
    if (a === null)
      return document.createTextNode(f);
    e = i ? document.createElementNS("http://www.w3.org/2000/svg", a) : document.createElement(a, f.is && f), r = null, _ = !1;
  }
  if (a === null)
    h === f || _ && e.data === f || (e.data = f);
  else {
    if (r = r && sr.call(e.childNodes), p = (h = n.props || Ro).dangerouslySetInnerHTML, s = f.dangerouslySetInnerHTML, !_) {
      if (r != null)
        for (h = {}, u = 0; u < e.attributes.length; u++)
          h[e.attributes[u].name] = e.attributes[u].value;
      (s || p) && (s && (p && s.__html == p.__html || s.__html === e.innerHTML) || (e.innerHTML = s && s.__html || ""));
    }
    if (nu(e, f, h, i, _), s)
      t.__k = [];
    else if (u = t.props.children, Ja(e, Array.isArray(u) ? u : [u], t, n, o, i && a !== "foreignObject", r, l, r ? r[0] : n.__k && Sn(n, 0), _), r != null)
      for (u = r.length; u--; )
        r[u] != null && Ka(r[u]);
    _ || ("value" in f && (u = f.value) !== void 0 && (u !== e.value || a === "progress" && !u || a === "option" && u !== h.value) && Lo(e, "value", u, h.value, !1), "checked" in f && (u = f.checked) !== void 0 && u !== e.checked && Lo(e, "checked", u, h.checked, !1));
  }
  return e;
}
function t_(e, t, n) {
  try {
    typeof e == "function" ? e(t) : e.current = t;
  } catch (o) {
    I.__e(o, n);
  }
}
function n_(e, t, n) {
  var o, i;
  if (I.unmount && I.unmount(e), (o = e.ref) && (o.current && o.current !== e.__e || t_(o, null, t)), (o = e.__c) != null) {
    if (o.componentWillUnmount)
      try {
        o.componentWillUnmount();
      } catch (r) {
        I.__e(r, t);
      }
    o.base = o.__P = null, e.__c = void 0;
  }
  if (o = e.__k)
    for (i = 0; i < o.length; i++)
      o[i] && n_(o[i], t, n || typeof e.type != "function");
  n || e.__e == null || Ka(e.__e), e.__ = e.__e = e.__d = void 0;
}
function ru(e, t, n) {
  return this.constructor(e, n);
}
function su(e, t, n) {
  var o, i, r;
  I.__ && I.__(e, t), i = (o = typeof n == "function") ? null : n && n.__k || t.__k, r = [], es(t, e = (!o && n || t).__k = Qr(ir, null, [e]), i || Ro, Ro, t.ownerSVGElement !== void 0, !o && n ? [n] : i ? null : t.firstChild ? sr.call(t.childNodes) : null, r, !o && n ? n : i ? i.__e : t.firstChild, o), e_(r, e);
}
sr = Ya.slice, I = { __e: function(e, t, n, o) {
  for (var i, r, l; t = t.__; )
    if ((i = t.__c) && !i.__)
      try {
        if ((r = i.constructor) && r.getDerivedStateFromError != null && (i.setState(r.getDerivedStateFromError(e)), l = i.__d), i.componentDidCatch != null && (i.componentDidCatch(e, o || {}), l = i.__d), l)
          return i.__E = i;
      } catch (_) {
        e = _;
      }
  throw e;
} }, Ga = 0, so.prototype.setState = function(e, t) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = et({}, this.state), typeof e == "function" && (e = e(et({}, n), this.props)), e && et(n, e), e != null && this.__v && (t && this._sb.push(t), yi(this));
}, so.prototype.forceUpdate = function(e) {
  this.__v && (this.__e = !0, e && this.__h.push(e), yi(this));
}, so.prototype.render = ir, cn = [], Po.__r = 0;
function ue(e) {
  if (e == null)
    return window;
  if (e.toString() !== "[object Window]") {
    var t = e.ownerDocument;
    return t && t.defaultView || window;
  }
  return e;
}
function gt(e) {
  var t = ue(e).Element;
  return e instanceof t || e instanceof Element;
}
function fe(e) {
  var t = ue(e).HTMLElement;
  return e instanceof t || e instanceof HTMLElement;
}
function ts(e) {
  if (typeof ShadowRoot > "u")
    return !1;
  var t = ue(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot;
}
var dt = Math.max, Oo = Math.min, Pt = Math.round;
function xr() {
  var e = navigator.userAgentData;
  return e != null && e.brands ? e.brands.map(function(t) {
    return t.brand + "/" + t.version;
  }).join(" ") : navigator.userAgent;
}
function o_() {
  return !/^((?!chrome|android).)*safari/i.test(xr());
}
function Lt(e, t, n) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  var o = e.getBoundingClientRect(), i = 1, r = 1;
  t && fe(e) && (i = e.offsetWidth > 0 && Pt(o.width) / e.offsetWidth || 1, r = e.offsetHeight > 0 && Pt(o.height) / e.offsetHeight || 1);
  var l = gt(e) ? ue(e) : window, _ = l.visualViewport, c = !o_() && n, p = (o.left + (c && _ ? _.offsetLeft : 0)) / i, s = (o.top + (c && _ ? _.offsetTop : 0)) / r, h = o.width / i, f = o.height / r;
  return {
    width: h,
    height: f,
    top: s,
    right: p + h,
    bottom: s + f,
    left: p,
    x: p,
    y: s
  };
}
function ns(e) {
  var t = ue(e), n = t.pageXOffset, o = t.pageYOffset;
  return {
    scrollLeft: n,
    scrollTop: o
  };
}
function iu(e) {
  return {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  };
}
function lu(e) {
  return e === ue(e) || !fe(e) ? ns(e) : iu(e);
}
function $e(e) {
  return e ? (e.nodeName || "").toLowerCase() : null;
}
function it(e) {
  return ((gt(e) ? e.ownerDocument : e.document) || window.document).documentElement;
}
function os(e) {
  return Lt(it(e)).left + ns(e).scrollLeft;
}
function He(e) {
  return ue(e).getComputedStyle(e);
}
function rs(e) {
  var t = He(e), n = t.overflow, o = t.overflowX, i = t.overflowY;
  return /auto|scroll|overlay|hidden/.test(n + i + o);
}
function au(e) {
  var t = e.getBoundingClientRect(), n = Pt(t.width) / e.offsetWidth || 1, o = Pt(t.height) / e.offsetHeight || 1;
  return n !== 1 || o !== 1;
}
function _u(e, t, n) {
  n === void 0 && (n = !1);
  var o = fe(t), i = fe(t) && au(t), r = it(t), l = Lt(e, i, n), _ = {
    scrollLeft: 0,
    scrollTop: 0
  }, c = {
    x: 0,
    y: 0
  };
  return (o || !o && !n) && (($e(t) !== "body" || rs(r)) && (_ = lu(t)), fe(t) ? (c = Lt(t, !0), c.x += t.clientLeft, c.y += t.clientTop) : r && (c.x = os(r))), {
    x: l.left + _.scrollLeft - c.x,
    y: l.top + _.scrollTop - c.y,
    width: l.width,
    height: l.height
  };
}
function r_(e) {
  var t = Lt(e), n = e.offsetWidth, o = e.offsetHeight;
  return Math.abs(t.width - n) <= 1 && (n = t.width), Math.abs(t.height - o) <= 1 && (o = t.height), {
    x: e.offsetLeft,
    y: e.offsetTop,
    width: n,
    height: o
  };
}
function lr(e) {
  return $e(e) === "html" ? e : e.assignedSlot || e.parentNode || (ts(e) ? e.host : null) || it(e);
}
function s_(e) {
  return ["html", "body", "#document"].indexOf($e(e)) >= 0 ? e.ownerDocument.body : fe(e) && rs(e) ? e : s_(lr(e));
}
function fn(e, t) {
  var n;
  t === void 0 && (t = []);
  var o = s_(e), i = o === ((n = e.ownerDocument) == null ? void 0 : n.body), r = ue(o), l = i ? [r].concat(r.visualViewport || [], rs(o) ? o : []) : o, _ = t.concat(l);
  return i ? _ : _.concat(fn(lr(l)));
}
function cu(e) {
  return ["table", "td", "th"].indexOf($e(e)) >= 0;
}
function $i(e) {
  return !fe(e) || He(e).position === "fixed" ? null : e.offsetParent;
}
function fu(e) {
  var t = /firefox/i.test(xr()), n = /Trident/i.test(xr());
  if (n && fe(e)) {
    var o = He(e);
    if (o.position === "fixed")
      return null;
  }
  var i = lr(e);
  for (ts(i) && (i = i.host); fe(i) && ["html", "body"].indexOf($e(i)) < 0; ) {
    var r = He(i);
    if (r.transform !== "none" || r.perspective !== "none" || r.contain === "paint" || ["transform", "perspective"].indexOf(r.willChange) !== -1 || t && r.willChange === "filter" || t && r.filter && r.filter !== "none")
      return i;
    i = i.parentNode;
  }
  return null;
}
function ar(e) {
  for (var t = ue(e), n = $i(e); n && cu(n) && He(n).position === "static"; )
    n = $i(n);
  return n && ($e(n) === "html" || $e(n) === "body" && He(n).position === "static") ? t : n || fu(e) || t;
}
var ve = "top", xe = "bottom", st = "right", De = "left", ss = "auto", _r = [ve, xe, st, De], Ot = "start", Mn = "end", uu = "clippingParents", i_ = "viewport", Ft = "popper", pu = "reference", xi = /* @__PURE__ */ _r.reduce(function(e, t) {
  return e.concat([t + "-" + Ot, t + "-" + Mn]);
}, []), hu = /* @__PURE__ */ [].concat(_r, [ss]).reduce(function(e, t) {
  return e.concat([t, t + "-" + Ot, t + "-" + Mn]);
}, []), du = "beforeRead", vu = "read", gu = "afterRead", mu = "beforeMain", yu = "main", bu = "afterMain", wu = "beforeWrite", ku = "write", $u = "afterWrite", xu = [du, vu, gu, mu, yu, bu, wu, ku, $u];
function Cu(e) {
  var t = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Set(), o = [];
  e.forEach(function(r) {
    t.set(r.name, r);
  });
  function i(r) {
    n.add(r.name);
    var l = [].concat(r.requires || [], r.requiresIfExists || []);
    l.forEach(function(_) {
      if (!n.has(_)) {
        var c = t.get(_);
        c && i(c);
      }
    }), o.push(r);
  }
  return e.forEach(function(r) {
    n.has(r.name) || i(r);
  }), o;
}
function Eu(e) {
  var t = Cu(e);
  return xu.reduce(function(n, o) {
    return n.concat(t.filter(function(i) {
      return i.phase === o;
    }));
  }, []);
}
function Su(e) {
  var t;
  return function() {
    return t || (t = new Promise(function(n) {
      Promise.resolve().then(function() {
        t = void 0, n(e());
      });
    })), t;
  };
}
function rt(e) {
  return e.split("-")[0];
}
function Mu(e) {
  var t = e.reduce(function(n, o) {
    var i = n[o.name];
    return n[o.name] = i ? Object.assign({}, i, o, {
      options: Object.assign({}, i.options, o.options),
      data: Object.assign({}, i.data, o.data)
    }) : o, n;
  }, {});
  return Object.keys(t).map(function(n) {
    return t[n];
  });
}
function Tu(e, t) {
  var n = ue(e), o = it(e), i = n.visualViewport, r = o.clientWidth, l = o.clientHeight, _ = 0, c = 0;
  if (i) {
    r = i.width, l = i.height;
    var p = o_();
    (p || !p && t === "fixed") && (_ = i.offsetLeft, c = i.offsetTop);
  }
  return {
    width: r,
    height: l,
    x: _ + os(e),
    y: c
  };
}
function Au(e) {
  var t, n = it(e), o = ns(e), i = (t = e.ownerDocument) == null ? void 0 : t.body, r = dt(n.scrollWidth, n.clientWidth, i ? i.scrollWidth : 0, i ? i.clientWidth : 0), l = dt(n.scrollHeight, n.clientHeight, i ? i.scrollHeight : 0, i ? i.clientHeight : 0), _ = -o.scrollLeft + os(e), c = -o.scrollTop;
  return He(i || n).direction === "rtl" && (_ += dt(n.clientWidth, i ? i.clientWidth : 0) - r), {
    width: r,
    height: l,
    x: _,
    y: c
  };
}
function Nu(e, t) {
  var n = t.getRootNode && t.getRootNode();
  if (e.contains(t))
    return !0;
  if (n && ts(n)) {
    var o = t;
    do {
      if (o && e.isSameNode(o))
        return !0;
      o = o.parentNode || o.host;
    } while (o);
  }
  return !1;
}
function Cr(e) {
  return Object.assign({}, e, {
    left: e.x,
    top: e.y,
    right: e.x + e.width,
    bottom: e.y + e.height
  });
}
function Ru(e, t) {
  var n = Lt(e, !1, t === "fixed");
  return n.top = n.top + e.clientTop, n.left = n.left + e.clientLeft, n.bottom = n.top + e.clientHeight, n.right = n.left + e.clientWidth, n.width = e.clientWidth, n.height = e.clientHeight, n.x = n.left, n.y = n.top, n;
}
function Ci(e, t, n) {
  return t === i_ ? Cr(Tu(e, n)) : gt(t) ? Ru(t, n) : Cr(Au(it(e)));
}
function Pu(e) {
  var t = fn(lr(e)), n = ["absolute", "fixed"].indexOf(He(e).position) >= 0, o = n && fe(e) ? ar(e) : e;
  return gt(o) ? t.filter(function(i) {
    return gt(i) && Nu(i, o) && $e(i) !== "body";
  }) : [];
}
function Lu(e, t, n, o) {
  var i = t === "clippingParents" ? Pu(e) : [].concat(t), r = [].concat(i, [n]), l = r[0], _ = r.reduce(function(c, p) {
    var s = Ci(e, p, o);
    return c.top = dt(s.top, c.top), c.right = Oo(s.right, c.right), c.bottom = Oo(s.bottom, c.bottom), c.left = dt(s.left, c.left), c;
  }, Ci(e, l, o));
  return _.width = _.right - _.left, _.height = _.bottom - _.top, _.x = _.left, _.y = _.top, _;
}
function Dt(e) {
  return e.split("-")[1];
}
function l_(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function a_(e) {
  var t = e.reference, n = e.element, o = e.placement, i = o ? rt(o) : null, r = o ? Dt(o) : null, l = t.x + t.width / 2 - n.width / 2, _ = t.y + t.height / 2 - n.height / 2, c;
  switch (i) {
    case ve:
      c = {
        x: l,
        y: t.y - n.height
      };
      break;
    case xe:
      c = {
        x: l,
        y: t.y + t.height
      };
      break;
    case st:
      c = {
        x: t.x + t.width,
        y: _
      };
      break;
    case De:
      c = {
        x: t.x - n.width,
        y: _
      };
      break;
    default:
      c = {
        x: t.x,
        y: t.y
      };
  }
  var p = i ? l_(i) : null;
  if (p != null) {
    var s = p === "y" ? "height" : "width";
    switch (r) {
      case Ot:
        c[p] = c[p] - (t[s] / 2 - n[s] / 2);
        break;
      case Mn:
        c[p] = c[p] + (t[s] / 2 - n[s] / 2);
        break;
    }
  }
  return c;
}
function __() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
function Ou(e) {
  return Object.assign({}, __(), e);
}
function Du(e, t) {
  return t.reduce(function(n, o) {
    return n[o] = e, n;
  }, {});
}
function is(e, t) {
  t === void 0 && (t = {});
  var n = t, o = n.placement, i = o === void 0 ? e.placement : o, r = n.strategy, l = r === void 0 ? e.strategy : r, _ = n.boundary, c = _ === void 0 ? uu : _, p = n.rootBoundary, s = p === void 0 ? i_ : p, h = n.elementContext, f = h === void 0 ? Ft : h, a = n.altBoundary, u = a === void 0 ? !1 : a, y = n.padding, d = y === void 0 ? 0 : y, v = Ou(typeof d != "number" ? d : Du(d, _r)), g = f === Ft ? pu : Ft, k = e.rects.popper, w = e.elements[u ? g : f], E = Lu(gt(w) ? w : w.contextElement || it(e.elements.popper), c, s, l), $ = Lt(e.elements.reference), x = a_({
    reference: $,
    element: k,
    strategy: "absolute",
    placement: i
  }), m = Cr(Object.assign({}, k, x)), C = f === Ft ? m : $, T = {
    top: E.top - C.top + v.top,
    bottom: C.bottom - E.bottom + v.bottom,
    left: E.left - C.left + v.left,
    right: C.right - E.right + v.right
  }, D = e.modifiersData.offset;
  if (f === Ft && D) {
    var Z = D[i];
    Object.keys(T).forEach(function(K) {
      var pe = [st, xe].indexOf(K) >= 0 ? 1 : -1, Q = [ve, xe].indexOf(K) >= 0 ? "y" : "x";
      T[K] += Z[Q] * pe;
    });
  }
  return T;
}
var Ei = {
  placement: "bottom",
  modifiers: [],
  strategy: "absolute"
};
function Si() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return !t.some(function(o) {
    return !(o && typeof o.getBoundingClientRect == "function");
  });
}
function Hu(e) {
  e === void 0 && (e = {});
  var t = e, n = t.defaultModifiers, o = n === void 0 ? [] : n, i = t.defaultOptions, r = i === void 0 ? Ei : i;
  return function(_, c, p) {
    p === void 0 && (p = r);
    var s = {
      placement: "bottom",
      orderedModifiers: [],
      options: Object.assign({}, Ei, r),
      modifiersData: {},
      elements: {
        reference: _,
        popper: c
      },
      attributes: {},
      styles: {}
    }, h = [], f = !1, a = {
      state: s,
      setOptions: function(v) {
        var g = typeof v == "function" ? v(s.options) : v;
        y(), s.options = Object.assign({}, r, s.options, g), s.scrollParents = {
          reference: gt(_) ? fn(_) : _.contextElement ? fn(_.contextElement) : [],
          popper: fn(c)
        };
        var k = Eu(Mu([].concat(o, s.options.modifiers)));
        return s.orderedModifiers = k.filter(function(w) {
          return w.enabled;
        }), u(), a.update();
      },
      forceUpdate: function() {
        if (!f) {
          var v = s.elements, g = v.reference, k = v.popper;
          if (!!Si(g, k)) {
            s.rects = {
              reference: _u(g, ar(k), s.options.strategy === "fixed"),
              popper: r_(k)
            }, s.reset = !1, s.placement = s.options.placement, s.orderedModifiers.forEach(function(T) {
              return s.modifiersData[T.name] = Object.assign({}, T.data);
            });
            for (var w = 0; w < s.orderedModifiers.length; w++) {
              if (s.reset === !0) {
                s.reset = !1, w = -1;
                continue;
              }
              var E = s.orderedModifiers[w], $ = E.fn, x = E.options, m = x === void 0 ? {} : x, C = E.name;
              typeof $ == "function" && (s = $({
                state: s,
                options: m,
                name: C,
                instance: a
              }) || s);
            }
          }
        }
      },
      update: Su(function() {
        return new Promise(function(d) {
          a.forceUpdate(), d(s);
        });
      }),
      destroy: function() {
        y(), f = !0;
      }
    };
    if (!Si(_, c))
      return a;
    a.setOptions(p).then(function(d) {
      !f && p.onFirstUpdate && p.onFirstUpdate(d);
    });
    function u() {
      s.orderedModifiers.forEach(function(d) {
        var v = d.name, g = d.options, k = g === void 0 ? {} : g, w = d.effect;
        if (typeof w == "function") {
          var E = w({
            state: s,
            name: v,
            instance: a,
            options: k
          }), $ = function() {
          };
          h.push(E || $);
        }
      });
    }
    function y() {
      h.forEach(function(d) {
        return d();
      }), h = [];
    }
    return a;
  };
}
var Gn = {
  passive: !0
};
function Iu(e) {
  var t = e.state, n = e.instance, o = e.options, i = o.scroll, r = i === void 0 ? !0 : i, l = o.resize, _ = l === void 0 ? !0 : l, c = ue(t.elements.popper), p = [].concat(t.scrollParents.reference, t.scrollParents.popper);
  return r && p.forEach(function(s) {
    s.addEventListener("scroll", n.update, Gn);
  }), _ && c.addEventListener("resize", n.update, Gn), function() {
    r && p.forEach(function(s) {
      s.removeEventListener("scroll", n.update, Gn);
    }), _ && c.removeEventListener("resize", n.update, Gn);
  };
}
const Wu = {
  name: "eventListeners",
  enabled: !0,
  phase: "write",
  fn: function() {
  },
  effect: Iu,
  data: {}
};
function Uu(e) {
  var t = e.state, n = e.name;
  t.modifiersData[n] = a_({
    reference: t.rects.reference,
    element: t.rects.popper,
    strategy: "absolute",
    placement: t.placement
  });
}
const ju = {
  name: "popperOffsets",
  enabled: !0,
  phase: "read",
  fn: Uu,
  data: {}
};
var Bu = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function zu(e) {
  var t = e.x, n = e.y, o = window, i = o.devicePixelRatio || 1;
  return {
    x: Pt(t * i) / i || 0,
    y: Pt(n * i) / i || 0
  };
}
function Mi(e) {
  var t, n = e.popper, o = e.popperRect, i = e.placement, r = e.variation, l = e.offsets, _ = e.position, c = e.gpuAcceleration, p = e.adaptive, s = e.roundOffsets, h = e.isFixed, f = l.x, a = f === void 0 ? 0 : f, u = l.y, y = u === void 0 ? 0 : u, d = typeof s == "function" ? s({
    x: a,
    y
  }) : {
    x: a,
    y
  };
  a = d.x, y = d.y;
  var v = l.hasOwnProperty("x"), g = l.hasOwnProperty("y"), k = De, w = ve, E = window;
  if (p) {
    var $ = ar(n), x = "clientHeight", m = "clientWidth";
    if ($ === ue(n) && ($ = it(n), He($).position !== "static" && _ === "absolute" && (x = "scrollHeight", m = "scrollWidth")), $ = $, i === ve || (i === De || i === st) && r === Mn) {
      w = xe;
      var C = h && $ === E && E.visualViewport ? E.visualViewport.height : $[x];
      y -= C - o.height, y *= c ? 1 : -1;
    }
    if (i === De || (i === ve || i === xe) && r === Mn) {
      k = st;
      var T = h && $ === E && E.visualViewport ? E.visualViewport.width : $[m];
      a -= T - o.width, a *= c ? 1 : -1;
    }
  }
  var D = Object.assign({
    position: _
  }, p && Bu), Z = s === !0 ? zu({
    x: a,
    y
  }) : {
    x: a,
    y
  };
  if (a = Z.x, y = Z.y, c) {
    var K;
    return Object.assign({}, D, (K = {}, K[w] = g ? "0" : "", K[k] = v ? "0" : "", K.transform = (E.devicePixelRatio || 1) <= 1 ? "translate(" + a + "px, " + y + "px)" : "translate3d(" + a + "px, " + y + "px, 0)", K));
  }
  return Object.assign({}, D, (t = {}, t[w] = g ? y + "px" : "", t[k] = v ? a + "px" : "", t.transform = "", t));
}
function Fu(e) {
  var t = e.state, n = e.options, o = n.gpuAcceleration, i = o === void 0 ? !0 : o, r = n.adaptive, l = r === void 0 ? !0 : r, _ = n.roundOffsets, c = _ === void 0 ? !0 : _, p = {
    placement: rt(t.placement),
    variation: Dt(t.placement),
    popper: t.elements.popper,
    popperRect: t.rects.popper,
    gpuAcceleration: i,
    isFixed: t.options.strategy === "fixed"
  };
  t.modifiersData.popperOffsets != null && (t.styles.popper = Object.assign({}, t.styles.popper, Mi(Object.assign({}, p, {
    offsets: t.modifiersData.popperOffsets,
    position: t.options.strategy,
    adaptive: l,
    roundOffsets: c
  })))), t.modifiersData.arrow != null && (t.styles.arrow = Object.assign({}, t.styles.arrow, Mi(Object.assign({}, p, {
    offsets: t.modifiersData.arrow,
    position: "absolute",
    adaptive: !1,
    roundOffsets: c
  })))), t.attributes.popper = Object.assign({}, t.attributes.popper, {
    "data-popper-placement": t.placement
  });
}
const Vu = {
  name: "computeStyles",
  enabled: !0,
  phase: "beforeWrite",
  fn: Fu,
  data: {}
};
function qu(e) {
  var t = e.state;
  Object.keys(t.elements).forEach(function(n) {
    var o = t.styles[n] || {}, i = t.attributes[n] || {}, r = t.elements[n];
    !fe(r) || !$e(r) || (Object.assign(r.style, o), Object.keys(i).forEach(function(l) {
      var _ = i[l];
      _ === !1 ? r.removeAttribute(l) : r.setAttribute(l, _ === !0 ? "" : _);
    }));
  });
}
function Gu(e) {
  var t = e.state, n = {
    popper: {
      position: t.options.strategy,
      left: "0",
      top: "0",
      margin: "0"
    },
    arrow: {
      position: "absolute"
    },
    reference: {}
  };
  return Object.assign(t.elements.popper.style, n.popper), t.styles = n, t.elements.arrow && Object.assign(t.elements.arrow.style, n.arrow), function() {
    Object.keys(t.elements).forEach(function(o) {
      var i = t.elements[o], r = t.attributes[o] || {}, l = Object.keys(t.styles.hasOwnProperty(o) ? t.styles[o] : n[o]), _ = l.reduce(function(c, p) {
        return c[p] = "", c;
      }, {});
      !fe(i) || !$e(i) || (Object.assign(i.style, _), Object.keys(r).forEach(function(c) {
        i.removeAttribute(c);
      }));
    });
  };
}
const Yu = {
  name: "applyStyles",
  enabled: !0,
  phase: "write",
  fn: qu,
  effect: Gu,
  requires: ["computeStyles"]
};
var Ku = [Wu, ju, Vu, Yu], c_ = /* @__PURE__ */ Hu({
  defaultModifiers: Ku
});
function Xu(e) {
  return e === "x" ? "y" : "x";
}
function io(e, t, n) {
  return dt(e, Oo(t, n));
}
function Ju(e, t, n) {
  var o = io(e, t, n);
  return o > n ? n : o;
}
function Zu(e) {
  var t = e.state, n = e.options, o = e.name, i = n.mainAxis, r = i === void 0 ? !0 : i, l = n.altAxis, _ = l === void 0 ? !1 : l, c = n.boundary, p = n.rootBoundary, s = n.altBoundary, h = n.padding, f = n.tether, a = f === void 0 ? !0 : f, u = n.tetherOffset, y = u === void 0 ? 0 : u, d = is(t, {
    boundary: c,
    rootBoundary: p,
    padding: h,
    altBoundary: s
  }), v = rt(t.placement), g = Dt(t.placement), k = !g, w = l_(v), E = Xu(w), $ = t.modifiersData.popperOffsets, x = t.rects.reference, m = t.rects.popper, C = typeof y == "function" ? y(Object.assign({}, t.rects, {
    placement: t.placement
  })) : y, T = typeof C == "number" ? {
    mainAxis: C,
    altAxis: C
  } : Object.assign({
    mainAxis: 0,
    altAxis: 0
  }, C), D = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null, Z = {
    x: 0,
    y: 0
  };
  if (!!$) {
    if (r) {
      var K, pe = w === "y" ? ve : De, Q = w === "y" ? xe : st, W = w === "y" ? "height" : "width", oe = $[w], Ie = oe + d[pe], Ee = oe - d[Q], mt = a ? -m[W] / 2 : 0, Se = g === Ot ? x[W] : m[W], We = g === Ot ? -m[W] : -x[W], lt = t.elements.arrow, Me = a && lt ? r_(lt) : {
        width: 0,
        height: 0
      }, A = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : __(), O = A[pe], X = A[Q], ee = io(0, x[W], Me[W]), he = k ? x[W] / 2 - mt - ee - O - T.mainAxis : Se - ee - O - T.mainAxis, at = k ? -x[W] / 2 + mt + ee + X + T.mainAxis : We + ee + X + T.mainAxis, Te = t.elements.arrow && ar(t.elements.arrow), Wt = Te ? w === "y" ? Te.clientTop || 0 : Te.clientLeft || 0 : 0, zn = (K = D == null ? void 0 : D[w]) != null ? K : 0, L = oe + he - zn - Wt, Fn = oe + at - zn, Ut = io(a ? Oo(Ie, L) : Ie, oe, a ? dt(Ee, Fn) : Ee);
      $[w] = Ut, Z[w] = Ut - oe;
    }
    if (_) {
      var jt, Vn = w === "x" ? ve : De, yt = w === "x" ? xe : st, ge = $[E], _t = E === "y" ? "height" : "width", Bt = ge + d[Vn], ps = ge - d[yt], fr = [ve, De].indexOf(v) !== -1, hs = (jt = D == null ? void 0 : D[E]) != null ? jt : 0, ds = fr ? Bt : ge - x[_t] - m[_t] - hs + T.altAxis, vs = fr ? ge + x[_t] + m[_t] - hs - T.altAxis : ps, gs = a && fr ? Ju(ds, ge, vs) : io(a ? ds : Bt, ge, a ? vs : ps);
      $[E] = gs, Z[E] = gs - ge;
    }
    t.modifiersData[o] = Z;
  }
}
const Er = {
  name: "preventOverflow",
  enabled: !0,
  phase: "main",
  fn: Zu,
  requiresIfExists: ["offset"]
};
var Qu = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function lo(e) {
  return e.replace(/left|right|bottom|top/g, function(t) {
    return Qu[t];
  });
}
var ep = {
  start: "end",
  end: "start"
};
function Ti(e) {
  return e.replace(/start|end/g, function(t) {
    return ep[t];
  });
}
function tp(e, t) {
  t === void 0 && (t = {});
  var n = t, o = n.placement, i = n.boundary, r = n.rootBoundary, l = n.padding, _ = n.flipVariations, c = n.allowedAutoPlacements, p = c === void 0 ? hu : c, s = Dt(o), h = s ? _ ? xi : xi.filter(function(u) {
    return Dt(u) === s;
  }) : _r, f = h.filter(function(u) {
    return p.indexOf(u) >= 0;
  });
  f.length === 0 && (f = h);
  var a = f.reduce(function(u, y) {
    return u[y] = is(e, {
      placement: y,
      boundary: i,
      rootBoundary: r,
      padding: l
    })[rt(y)], u;
  }, {});
  return Object.keys(a).sort(function(u, y) {
    return a[u] - a[y];
  });
}
function np(e) {
  if (rt(e) === ss)
    return [];
  var t = lo(e);
  return [Ti(e), t, Ti(t)];
}
function op(e) {
  var t = e.state, n = e.options, o = e.name;
  if (!t.modifiersData[o]._skip) {
    for (var i = n.mainAxis, r = i === void 0 ? !0 : i, l = n.altAxis, _ = l === void 0 ? !0 : l, c = n.fallbackPlacements, p = n.padding, s = n.boundary, h = n.rootBoundary, f = n.altBoundary, a = n.flipVariations, u = a === void 0 ? !0 : a, y = n.allowedAutoPlacements, d = t.options.placement, v = rt(d), g = v === d, k = c || (g || !u ? [lo(d)] : np(d)), w = [d].concat(k).reduce(function(Me, A) {
      return Me.concat(rt(A) === ss ? tp(t, {
        placement: A,
        boundary: s,
        rootBoundary: h,
        padding: p,
        flipVariations: u,
        allowedAutoPlacements: y
      }) : A);
    }, []), E = t.rects.reference, $ = t.rects.popper, x = /* @__PURE__ */ new Map(), m = !0, C = w[0], T = 0; T < w.length; T++) {
      var D = w[T], Z = rt(D), K = Dt(D) === Ot, pe = [ve, xe].indexOf(Z) >= 0, Q = pe ? "width" : "height", W = is(t, {
        placement: D,
        boundary: s,
        rootBoundary: h,
        altBoundary: f,
        padding: p
      }), oe = pe ? K ? st : De : K ? xe : ve;
      E[Q] > $[Q] && (oe = lo(oe));
      var Ie = lo(oe), Ee = [];
      if (r && Ee.push(W[Z] <= 0), _ && Ee.push(W[oe] <= 0, W[Ie] <= 0), Ee.every(function(Me) {
        return Me;
      })) {
        C = D, m = !1;
        break;
      }
      x.set(D, Ee);
    }
    if (m)
      for (var mt = u ? 3 : 1, Se = function(A) {
        var O = w.find(function(X) {
          var ee = x.get(X);
          if (ee)
            return ee.slice(0, A).every(function(he) {
              return he;
            });
        });
        if (O)
          return C = O, "break";
      }, We = mt; We > 0; We--) {
        var lt = Se(We);
        if (lt === "break")
          break;
      }
    t.placement !== C && (t.modifiersData[o]._skip = !0, t.placement = C, t.reset = !0);
  }
}
const f_ = {
  name: "flip",
  enabled: !0,
  phase: "main",
  fn: op,
  requiresIfExists: ["offset"],
  data: {
    _skip: !1
  }
};
function rp(e) {
  return e.button === 2;
}
var Be;
class sp extends Ir {
  constructor() {
    super(...arguments);
    M(this, Be, void 0);
  }
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
    var n;
    super.componentWillUnmount(), (n = b(this, Be)) == null || n.destroy();
  }
  _getPopperOptions() {
    return {
      modifiers: [Er, f_],
      placement: "right-start"
    };
  }
  _getPopperElement() {
    var n;
    return (n = this.ref.current) == null ? void 0 : n.parentElement;
  }
  _createPopper() {
    const n = this._getPopperOptions();
    return b(this, Be) ? b(this, Be).setOptions(n) : this.ref.current && N(this, Be, c_(this._getPopperElement(), this.ref.current, n)), b(this, Be);
  }
  afterRender(n) {
    super.afterRender(n), this.props.controlledMenu && this._createPopper();
  }
  renderToggleIcon() {
    return /* @__PURE__ */ Qr("span", {
      class: "contextmenu-toggle-icon caret-right"
    });
  }
}
Be = new WeakMap();
var ze, ae, xt, Ln;
class ie extends Yt {
  constructor() {
    super(...arguments);
    M(this, ze, void 0);
    M(this, ae, void 0);
    M(this, xt, void 0);
    M(this, Ln, void 0);
  }
  get isShown() {
    var n;
    return (n = b(this, ze)) == null ? void 0 : n.classList.contains(this.constructor.CLASS_SHOW);
  }
  get menu() {
    return b(this, ze) || this._ensureMenu();
  }
  get popper() {
    return b(this, ae) ? b(this, ae) : this._createPopper();
  }
  get trigger() {
    return b(this, Ln) || this.element;
  }
  get isDynamic() {
    return this.options.items || this.options.menu;
  }
  init() {
    const { element: n } = this;
    n !== document.body && !n.hasAttribute("data-toggle") && n.setAttribute("data-toggle", "contextmenu");
  }
  show(n) {
    return N(this, Ln, n), this.emit("show", { menu: this, trigger: this.trigger }).defaultPrevented || this.isDynamic && !this._renderMenu() ? !1 : (this.menu.classList.add(this.constructor.CLASS_SHOW), this._createPopper().update(), this.emit("shown", this), !0);
  }
  hide() {
    var o, i;
    return this.emit("hide", this).defaultPrevented ? !1 : ((o = b(this, ae)) == null || o.destroy(), N(this, ae, void 0), (i = b(this, ze)) == null || i.classList.remove(this.constructor.CLASS_SHOW), this.emit("hidden", this), !0);
  }
  toggle(n) {
    return this.isShown ? this.hide() : this.show(n);
  }
  destroy() {
    var n, o;
    (n = b(this, ae)) == null || n.destroy(), super.destroy(), (o = b(this, ze)) == null || o.remove();
  }
  _ensureMenu() {
    var r, l;
    const { element: n } = this, o = this.constructor.MENU_CLASS;
    let i;
    if (this.isDynamic)
      i = document.createElement("div"), i.classList.add(o), document.body.appendChild(i);
    else if (n) {
      const _ = (r = n.getAttribute("href")) != null ? r : n.dataset.target;
      if ((_ == null ? void 0 : _[0]) === "#" && (i = document.querySelector(_)), !i) {
        const c = n.nextElementSibling;
        c != null && c.classList.contains(o) ? i = c : i = (l = n.parentNode) == null ? void 0 : l.querySelector(`.${o}`);
      }
    }
    if (!i)
      throw new Error("ContextMenu: Cannot find menu element");
    return N(this, ze, i), i;
  }
  _getPopperOptions() {
    const { flip: n, preventOverflow: o, modifiers: i = [] } = this.options;
    return {
      modifiers: [
        o ? typeof o == "object" ? { ...Er, options: o } : Er : null,
        n ? f_ : null,
        ...i
      ].filter(Boolean),
      placement: this.options.placement,
      strategy: this.options.strategy
    };
  }
  _createPopper() {
    const n = this._getPopperOptions();
    return b(this, ae) ? b(this, ae).setOptions(n) : N(this, ae, c_(this._getPopperElement(), this.menu, n)), b(this, ae);
  }
  _getMenuOptions() {
    const { menu: n, items: o } = this.options;
    let i = o || (n == null ? void 0 : n.items);
    if (!!i)
      return typeof i == "function" && (i = i(this)), {
        nestedTrigger: "hover",
        ...n,
        items: i
      };
  }
  _renderMenu() {
    const n = this._getMenuOptions();
    return !n || this.emit("updateMenu", { menu: n, trigger: this.trigger, contextmenu: this }).defaultPrevented ? !1 : (su(Qr(sp, n), this.menu), !0);
  }
  _getPopperElement() {
    return b(this, xt) || N(this, xt, {
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
    }), b(this, xt);
  }
  static clear(n) {
    var c, p;
    n instanceof Event && (n = { event: n });
    const { event: o, exclude: i, ignoreSelector: r = ".not-hide-menu" } = n || {};
    if (o && r && ((p = (c = o.target).closest) == null ? void 0 : p.call(c, r)) || o && rp(o))
      return;
    const l = this.getAll().entries(), _ = new Set(i || []);
    for (const [s, h] of l)
      _.has(s) || h.hide();
  }
  static show(n) {
    const { event: o, ...i } = n, r = this.ensure(document.body);
    return Object.keys(i).length && r.setOptions(i), r.show(o), o == null || o.stopPropagation(), r;
  }
  static hide() {
    const n = this.get(document.body);
    return n == null || n.hide(), n;
  }
}
ze = new WeakMap(), ae = new WeakMap(), xt = new WeakMap(), Ln = new WeakMap(), S(ie, "NAME", "contextmenu"), S(ie, "EVENTS", !0), S(ie, "DEFAULT", {
  placement: "bottom-start",
  strategy: "fixed",
  flip: !0,
  preventOverflow: !0
}), S(ie, "MENU_CLASS", "contextmenu"), S(ie, "CLASS_SHOW", "show"), S(ie, "MENU_SELECTOR", '[data-toggle="contextmenu"]:not(.disabled):not(:disabled)');
document.addEventListener("contextmenu", (e) => {
  const t = e.target;
  if (t.closest(`.${ie.MENU_CLASS}`))
    return;
  const n = t.closest(ie.MENU_SELECTOR);
  n && (ie.ensure(n).show(e), e.preventDefault());
});
document.addEventListener("click", ie.clear.bind(ie));
var Ct, Et, St, zo, u_;
const us = class extends ie {
  constructor() {
    super(...arguments);
    M(this, zo);
    M(this, Ct, !1);
    M(this, Et, 0);
    S(this, "hideLater", () => {
      b(this, St).call(this), N(this, Et, window.setTimeout(this.hide.bind(this), 100));
    });
    M(this, St, () => {
      clearTimeout(b(this, Et)), N(this, Et, 0);
    });
  }
  get isHover() {
    return this.options.trigger === "hover";
  }
  get elementShowClass() {
    return `with-${this.constructor.NAME}-show`;
  }
  show(n, o) {
    (o == null ? void 0 : o.clearOthers) !== !1 && us.clear({ event: o == null ? void 0 : o.event, exclude: [this.element] });
    const i = super.show(n);
    return i && (!b(this, Ct) && this.isHover && J(this, zo, u_).call(this), this.element.classList.add(this.elementShowClass)), i;
  }
  hide() {
    const n = super.hide();
    return n && this.element.classList.remove(this.elementShowClass), n;
  }
  toggle(n, o) {
    return this.isShown ? this.hide() : this.show(n, { event: n, ...o });
  }
  destroy() {
    b(this, Ct) && (this.element.removeEventListener("mouseleave", this.hideLater), this.menu.removeEventListener("mouseenter", b(this, St)), this.menu.removeEventListener("mouseleave", this.hideLater)), super.destroy();
  }
  _getArrowSize() {
    const { arrow: n } = this.options;
    return n ? typeof n == "number" ? n : 5 : 0;
  }
  _getPopperOptions() {
    var i;
    const n = super._getPopperOptions(), o = this._getArrowSize();
    return o && n.modifiers.push({ ...Jf, options: {
      padding: o,
      element: ".arrow"
    } }, {
      ...eu,
      options: {
        offset: [0, o + ((i = this.options.offset) != null ? i : 0)]
      }
    }, {
      name: "dropdown",
      enabled: !0,
      phase: "beforeWrite",
      fn: ({ state: r }) => {
        var _, c;
        const l = ((_ = r.placement) == null ? void 0 : _.split("-").shift()) || "";
        (c = this.menu.querySelector(".arrow")) == null || c.setAttribute("class", `arrow arrow-${l}`), this.element.setAttribute("data-dropdown-placement", l);
      }
    }), n;
  }
  _ensureMenu() {
    const n = super._ensureMenu();
    if (this.options.arrow) {
      const o = document.createElement("div");
      o.classList.add("arrow"), o.style.setProperty("--arrow-size", `${this._getArrowSize()}px`), n.prepend(o);
    }
    return n;
  }
  _getMenuOptions() {
    const n = super._getMenuOptions();
    if (n && this.options.arrow) {
      const { afterRender: o } = n;
      n.afterRender = (...i) => {
        var l;
        const r = this.menu.querySelector(".arrow");
        r && ((l = this.menu.querySelector(".menu")) == null || l.appendChild(r), this.popper.update()), o == null || o(...i);
      };
    }
    return n;
  }
};
let _e = us;
Ct = new WeakMap(), Et = new WeakMap(), St = new WeakMap(), zo = new WeakSet(), u_ = function() {
  const { menu: n } = this;
  n.addEventListener("mouseenter", b(this, St)), n.addEventListener("mouseleave", this.hideLater), this.element.addEventListener("mouseleave", this.hideLater), N(this, Ct, !0);
}, S(_e, "NAME", "dropdown"), S(_e, "MENU_CLASS", "dropdown-menu"), S(_e, "MENU_SELECTOR", '[data-toggle="dropdown"]:not(.disabled):not(:disabled)'), S(_e, "DEFAULT", {
  ...ie.DEFAULT,
  strategy: "absolute",
  trigger: "click"
});
document.addEventListener("click", function(e) {
  const n = e.target.closest(_e.MENU_SELECTOR);
  if (n) {
    const o = _e.ensure(n);
    o.options.trigger === "click" && o.toggle();
  } else
    _e.clear({ event: e });
});
document.addEventListener("mouseover", function(e) {
  const t = e.target, n = typeof t.closest == "function" ? t.closest(_e.MENU_SELECTOR) : null;
  if (!n)
    return;
  const o = _e.ensure(n);
  o.isHover && o.show();
});
var On, Mt;
class ip extends _n {
  constructor(n) {
    var o;
    super(n);
    M(this, On, void 0);
    M(this, Mt, $f());
    this.state = { placement: ((o = n.dropdown) == null ? void 0 : o.placement) || "", show: !1 };
  }
  get ref() {
    return b(this, Mt);
  }
  get triggerElement() {
    return b(this, Mt).current;
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
    }), N(this, On, _e.ensure(this.triggerElement, {
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
    (n = b(this, On)) == null || n.destroy();
  }
  beforeRender() {
    const { className: n, children: o, dropdown: i, ...r } = this.props;
    return {
      className: P("dropdown", n),
      children: typeof o == "function" ? o(this.state) : o,
      ...r,
      "data-toggle": "dropdown",
      "data-dropdown-placement": this.state.placement,
      ref: b(this, Mt)
    };
  }
  render() {
    const { children: n, ...o } = this.beforeRender();
    return /* @__PURE__ */ Oa("div", {
      ...o
    }, n);
  }
}
On = new WeakMap(), Mt = new WeakMap();
class lp extends ip {
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
    return o.caret = i, /* @__PURE__ */ Oa(vt, {
      ...o
    });
  }
}
function p_({
  key: e,
  type: t,
  btnType: n,
  ...o
}) {
  return /* @__PURE__ */ rr(lp, {
    type: n,
    ...o
  });
}
function ap({
  key: e,
  type: t,
  btnType: n,
  ...o
}) {
  return /* @__PURE__ */ rr(da, {
    type: n,
    ...o
  });
}
class ct extends Oe {
  beforeRender() {
    const { gap: t, btnProps: n, wrap: o, ...i } = super.beforeRender();
    return i.className = P(i.className, o ? "flex-wrap" : "", typeof t == "number" ? `gap-${t}` : ""), typeof t == "string" && (i.style ? i.style.gap = t : i.style = { gap: t }), i;
  }
  isBtnItem(t) {
    return t === "item" || t === "dropdown";
  }
  renderTypedItem(t, n, o) {
    const i = this.isBtnItem(o.type) ? { btnType: "ghost", ...this.props.btnProps } : {}, r = {
      ...n,
      ...i,
      ...o,
      className: P(`${this.name}-${o.type}`, n.className, i.className, o.className),
      style: Object.assign({}, n.style, i.style, o.style)
    };
    return /* @__PURE__ */ rr(t, {
      ...r
    });
  }
}
S(ct, "ItemComponents", {
  item: wf,
  dropdown: p_,
  "btn-group": ap
}), S(ct, "ROOT_TAG", "nav"), S(ct, "NAME", "toolbar"), S(ct, "defaultProps", {
  btnProps: {
    btnType: "ghost"
  }
});
function cr(e, t) {
  const n = e.pageTotal || Math.ceil(e.recTotal / e.recPerPage);
  return typeof t == "string" && (t === "first" ? t = 1 : t === "last" ? t = n : t === "prev" ? t = e.page - 1 : t === "next" ? t = e.page + 1 : t === "current" ? t = e.page : t = Number.parseInt(t, 10)), t = t !== void 0 ? Math.max(1, Math.min(t < 0 ? n + t : t, n)) : e.page, {
    ...e,
    pageTotal: n,
    page: t
  };
}
function _p({
  key: e,
  type: t,
  btnType: n,
  page: o,
  format: i,
  pagerInfo: r,
  linkCreator: l,
  ..._
}) {
  const c = cr(r, o);
  return _.text === void 0 && !_.icon && i && (_.text = typeof i == "function" ? i(c) : ce(i, c)), _.url === void 0 && l && (_.url = typeof l == "function" ? l(c) : ce(l, c)), _.disabled === void 0 && (_.disabled = o !== void 0 && c.page === r.page), /* @__PURE__ */ ot(vt, {
    type: n,
    ..._
  });
}
const Ae = 24 * 60 * 60 * 1e3, le = (e) => e ? (e instanceof Date || (typeof e == "string" && (e = e.trim(), /^\d+$/.test(e) && (e = Number.parseInt(e, 10))), typeof e == "number" && e < 1e10 && (e *= 1e3), e = new Date(e)), e) : new Date(), Bn = (e, t = new Date()) => (e = le(e), t = le(t), e.getFullYear() === t.getFullYear() && e.getMonth() === t.getMonth() && e.getDate() === t.getDate()), Ai = (e, t = new Date()) => le(e).getFullYear() === le(t).getFullYear(), cp = (e, t = new Date()) => (e = le(e), t = le(t), e.getFullYear() === t.getFullYear() && e.getMonth() === t.getMonth()), Jp = (e, t = new Date()) => {
  e = le(e), t = le(t);
  const n = 1e3 * 60 * 60 * 24, o = Math.floor(e.getTime() / n), i = Math.floor(t.getTime() / n);
  return Math.floor((o + 4) / 7) === Math.floor((i + 4) / 7);
}, Zp = (e, t) => Bn(le(t), e), Qp = (e, t) => Bn(le(t).getTime() - Ae, e), eh = (e, t) => Bn(le(t).getTime() + Ae, e), th = (e, t) => Bn(le(t).getTime() - 2 * Ae, e), Sr = (e, t = "yyyy-MM-dd hh:mm") => {
  e = le(e);
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
}, nh = (e, t, n) => {
  const o = {
    full: "yyyy-M-d",
    month: "M-d",
    day: "d",
    str: "{0} ~ {1}",
    ...n
  }, i = Sr(e, Ai(e) ? o.month : o.full);
  if (Bn(e, t))
    return i;
  const r = Sr(t, Ai(e, t) ? cp(e, t) ? o.day : o.month : o.full);
  return o.str.replace("{0}", i).replace("{1}", r);
}, oh = (e) => {
  const t = new Date().getTime();
  switch (e) {
    case "oneWeek":
      return t - Ae * 7;
    case "oneMonth":
      return t - Ae * 31;
    case "threeMonth":
      return t - Ae * 31 * 3;
    case "halfYear":
      return t - Ae * 183;
    case "oneYear":
      return t - Ae * 365;
    case "twoYear":
      return t - 2 * (Ae * 365);
    default:
      return 0;
  }
}, Ni = (e, t, n = !0, o = Date.now()) => {
  switch (t) {
    case "year":
      return e *= 365, Ni(e, "day", n, o);
    case "quarter":
      e *= 3;
    case "month":
      return e *= 30, Ni(e, "day", n, o);
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
function fp({
  key: e,
  type: t,
  page: n,
  text: o = "",
  pagerInfo: i,
  children: r,
  ...l
}) {
  const _ = cr(i, n);
  return o = typeof o == "function" ? o(_) : ce(o, _), /* @__PURE__ */ ot(wl, {
    ...l
  }, r, o);
}
function up({
  key: e,
  type: t,
  btnType: n,
  count: o = 12,
  pagerInfo: i,
  linkCreator: r,
  ...l
}) {
  if (i.pageTotal) {
    const _ = (p, s) => {
      if (p) {
        const h = [];
        for (let f = p; f <= s; f++) {
          l.text = f, delete l.icon, l.disabled = !1;
          const a = cr(i, f);
          r && (l.url = typeof r == "function" ? r(a) : ce(r, a)), h.push(/* @__PURE__ */ ot(vt, {
            type: n,
            ...l
          }));
        }
        return h;
      } else
        return l.text = "", l.icon = "icon-ellipsis-h", l.disabled = !0, /* @__PURE__ */ ot(vt, {
          type: n,
          ...l
        });
    };
    return (() => {
      const p = [];
      return p.push(_(1, 1)), i.pageTotal > 1 && (i.pageTotal <= o ? p.push(_(2, i.pageTotal)) : i.page < o - 2 ? (p.push(_(2, o - 2)), p.push(_(0, 0)), p.push(_(i.pageTotal, i.pageTotal))) : i.page > i.pageTotal - o + 3 ? (p.push(_(0, 0)), p.push(_(i.pageTotal - o + 3, i.pageTotal))) : (p.push(_(0, 0)), p.push(_(i.page - Math.ceil((o - 4) / 2), i.page + Math.floor((o - 4) / 2))), p.push(_(0, 0)), p.push(_(i.pageTotal, i.pageTotal)))), p;
    })();
  }
}
function pp({
  type: e,
  pagerInfo: t,
  linkCreator: n,
  items: o = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 100, 200, 500, 1e3, 2e3],
  dropdown: i = {},
  ...r
}) {
  var _, c;
  i.items = (_ = i.items) != null ? _ : o.map((p) => {
    const s = { ...t, recPerPage: p };
    return {
      text: `${p}`,
      url: typeof n == "function" ? n(s) : ce(n, s)
    };
  });
  const { text: l = "" } = r;
  return r.text = typeof l == "function" ? l(t) : ce(l, t), i.menu = { ...i.menu, className: P((c = i.menu) == null ? void 0 : c.className, "pager-size-menu") }, /* @__PURE__ */ ot(p_, {
    type: "dropdown",
    dropdown: i,
    ...r
  });
}
class hp extends ln {
  constructor() {
    super(...arguments);
    S(this, "state", {
      inputValue: 1
    });
  }
  getValue(n) {
    var i;
    let o = Number((i = n.target) == null ? void 0 : i.value);
    o = o > this.props.pagerInfo.pageTotal ? this.props.pagerInfo.pageTotal : o, this.setState(() => ({ inputValue: o }));
  }
  onUpdatePage() {
    this.props.pagerInfo.page = this.state.inputValue;
    const n = this.state.inputValue <= this.props.pagerInfo.pageTotal ? this.state.inputValue : this.props.pagerInfo.pageTotal, o = cr(this.props.pagerInfo, n);
    this.props.url = typeof this.props.linkCreator == "function" ? this.props.linkCreator(o) : ce(this.props.linkCreator, o);
  }
  render() {
    const {
      type: n,
      btnType: o,
      pagerInfo: i,
      size: r,
      ...l
    } = this.props, { className: _ } = l;
    return l.className = "input-group-addon", /* @__PURE__ */ ot("div", {
      className: P("input-group", r ? `size-${r}` : "", _)
    }, /* @__PURE__ */ ot("input", {
      type: "number",
      class: "form-control",
      max: i.pageTotal,
      min: "1",
      value: this.state.inputValue,
      onInput: this.getValue.bind(this)
    }), /* @__PURE__ */ ot(vt, {
      type: o,
      ...l,
      onClick: this.onUpdatePage.bind(this)
    }));
  }
}
class ao extends ct {
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
}
S(ao, "NAME", "pager"), S(ao, "defaultProps", {
  gap: 1,
  btnProps: {
    btnType: "ghost",
    size: "sm"
  }
}), S(ao, "ItemComponents", {
  ...ct.ItemComponents,
  link: _p,
  info: fp,
  nav: up,
  "size-menu": pp,
  goto: hp
});
class Ri extends Ce {
}
S(Ri, "NAME", "pager"), S(Ri, "Component", ao);
class Pi extends Ce {
}
S(Pi, "NAME", "toolbar"), S(Pi, "Component", ct);
var ls, G, h_, d_, un, Li, v_ = {}, g_ = [], dp = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function tt(e, t) {
  for (var n in t)
    e[n] = t[n];
  return e;
}
function m_(e) {
  var t = e.parentNode;
  t && t.removeChild(e);
}
function R(e, t, n) {
  var o, i, r, l = {};
  for (r in t)
    r == "key" ? o = t[r] : r == "ref" ? i = t[r] : l[r] = t[r];
  if (arguments.length > 2 && (l.children = arguments.length > 3 ? ls.call(arguments, 2) : n), typeof e == "function" && e.defaultProps != null)
    for (r in e.defaultProps)
      l[r] === void 0 && (l[r] = e.defaultProps[r]);
  return _o(e, l, o, i, null);
}
function _o(e, t, n, o, i) {
  var r = { type: e, props: t, key: n, ref: o, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: i == null ? ++h_ : i };
  return i == null && G.vnode != null && G.vnode(r), r;
}
function vp() {
  return { current: null };
}
function as(e) {
  return e.children;
}
function pn(e, t) {
  this.props = e, this.context = t;
}
function Tn(e, t) {
  if (t == null)
    return e.__ ? Tn(e.__, e.__.__k.indexOf(e) + 1) : null;
  for (var n; t < e.__k.length; t++)
    if ((n = e.__k[t]) != null && n.__e != null)
      return n.__e;
  return typeof e.type == "function" ? Tn(e) : null;
}
function y_(e) {
  var t, n;
  if ((e = e.__) != null && e.__c != null) {
    for (e.__e = e.__c.base = null, t = 0; t < e.__k.length; t++)
      if ((n = e.__k[t]) != null && n.__e != null) {
        e.__e = e.__c.base = n.__e;
        break;
      }
    return y_(e);
  }
}
function Oi(e) {
  (!e.__d && (e.__d = !0) && un.push(e) && !Do.__r++ || Li !== G.debounceRendering) && ((Li = G.debounceRendering) || setTimeout)(Do);
}
function Do() {
  for (var e; Do.__r = un.length; )
    e = un.sort(function(t, n) {
      return t.__v.__b - n.__v.__b;
    }), un = [], e.some(function(t) {
      var n, o, i, r, l, _;
      t.__d && (l = (r = (n = t).__v).__e, (_ = n.__P) && (o = [], (i = tt({}, r)).__v = r.__v + 1, $_(_, r, i, n.__n, _.ownerSVGElement !== void 0, r.__h != null ? [l] : null, o, l == null ? Tn(r) : l, r.__h), mp(o, r), r.__e != l && y_(r)));
    });
}
function b_(e, t, n, o, i, r, l, _, c, p) {
  var s, h, f, a, u, y, d, v = o && o.__k || g_, g = v.length;
  for (n.__k = [], s = 0; s < t.length; s++)
    if ((a = n.__k[s] = (a = t[s]) == null || typeof a == "boolean" ? null : typeof a == "string" || typeof a == "number" || typeof a == "bigint" ? _o(null, a, null, null, a) : Array.isArray(a) ? _o(as, { children: a }, null, null, null) : a.__b > 0 ? _o(a.type, a.props, a.key, a.ref ? a.ref : null, a.__v) : a) != null) {
      if (a.__ = n, a.__b = n.__b + 1, (f = v[s]) === null || f && a.key == f.key && a.type === f.type)
        v[s] = void 0;
      else
        for (h = 0; h < g; h++) {
          if ((f = v[h]) && a.key == f.key && a.type === f.type) {
            v[h] = void 0;
            break;
          }
          f = null;
        }
      $_(e, a, f = f || v_, i, r, l, _, c, p), u = a.__e, (h = a.ref) && f.ref != h && (d || (d = []), f.ref && d.push(f.ref, null, a), d.push(h, a.__c || u, a)), u != null ? (y == null && (y = u), typeof a.type == "function" && a.__k === f.__k ? a.__d = c = w_(a, c, e) : c = k_(e, a, f, v, u, c), typeof n.type == "function" && (n.__d = c)) : c && f.__e == c && c.parentNode != e && (c = Tn(f));
    }
  for (n.__e = y, s = g; s--; )
    v[s] != null && C_(v[s], v[s]);
  if (d)
    for (s = 0; s < d.length; s++)
      x_(d[s], d[++s], d[++s]);
}
function w_(e, t, n) {
  for (var o, i = e.__k, r = 0; i && r < i.length; r++)
    (o = i[r]) && (o.__ = e, t = typeof o.type == "function" ? w_(o, t, n) : k_(n, o, o, i, o.__e, t));
  return t;
}
function k_(e, t, n, o, i, r) {
  var l, _, c;
  if (t.__d !== void 0)
    l = t.__d, t.__d = void 0;
  else if (n == null || i != r || i.parentNode == null)
    e:
      if (r == null || r.parentNode !== e)
        e.appendChild(i), l = null;
      else {
        for (_ = r, c = 0; (_ = _.nextSibling) && c < o.length; c += 2)
          if (_ == i)
            break e;
        e.insertBefore(i, r), l = r;
      }
  return l !== void 0 ? l : i.nextSibling;
}
function gp(e, t, n, o, i) {
  var r;
  for (r in n)
    r === "children" || r === "key" || r in t || Ho(e, r, null, n[r], o);
  for (r in t)
    i && typeof t[r] != "function" || r === "children" || r === "key" || r === "value" || r === "checked" || n[r] === t[r] || Ho(e, r, t[r], n[r], o);
}
function Di(e, t, n) {
  t[0] === "-" ? e.setProperty(t, n) : e[t] = n == null ? "" : typeof n != "number" || dp.test(t) ? n : n + "px";
}
function Ho(e, t, n, o, i) {
  var r;
  e:
    if (t === "style")
      if (typeof n == "string")
        e.style.cssText = n;
      else {
        if (typeof o == "string" && (e.style.cssText = o = ""), o)
          for (t in o)
            n && t in n || Di(e.style, t, "");
        if (n)
          for (t in n)
            o && n[t] === o[t] || Di(e.style, t, n[t]);
      }
    else if (t[0] === "o" && t[1] === "n")
      r = t !== (t = t.replace(/Capture$/, "")), t = t.toLowerCase() in e ? t.toLowerCase().slice(2) : t.slice(2), e.l || (e.l = {}), e.l[t + r] = n, n ? o || e.addEventListener(t, r ? Ii : Hi, r) : e.removeEventListener(t, r ? Ii : Hi, r);
    else if (t !== "dangerouslySetInnerHTML") {
      if (i)
        t = t.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
      else if (t !== "href" && t !== "list" && t !== "form" && t !== "tabIndex" && t !== "download" && t in e)
        try {
          e[t] = n == null ? "" : n;
          break e;
        } catch {
        }
      typeof n == "function" || (n == null || n === !1 && t.indexOf("-") == -1 ? e.removeAttribute(t) : e.setAttribute(t, n));
    }
}
function Hi(e) {
  this.l[e.type + !1](G.event ? G.event(e) : e);
}
function Ii(e) {
  this.l[e.type + !0](G.event ? G.event(e) : e);
}
function $_(e, t, n, o, i, r, l, _, c) {
  var p, s, h, f, a, u, y, d, v, g, k, w, E, $, x, m = t.type;
  if (t.constructor !== void 0)
    return null;
  n.__h != null && (c = n.__h, _ = t.__e = n.__e, t.__h = null, r = [_]), (p = G.__b) && p(t);
  try {
    e:
      if (typeof m == "function") {
        if (d = t.props, v = (p = m.contextType) && o[p.__c], g = p ? v ? v.props.value : p.__ : o, n.__c ? y = (s = t.__c = n.__c).__ = s.__E : ("prototype" in m && m.prototype.render ? t.__c = s = new m(d, g) : (t.__c = s = new pn(d, g), s.constructor = m, s.render = bp), v && v.sub(s), s.props = d, s.state || (s.state = {}), s.context = g, s.__n = o, h = s.__d = !0, s.__h = [], s._sb = []), s.__s == null && (s.__s = s.state), m.getDerivedStateFromProps != null && (s.__s == s.state && (s.__s = tt({}, s.__s)), tt(s.__s, m.getDerivedStateFromProps(d, s.__s))), f = s.props, a = s.state, h)
          m.getDerivedStateFromProps == null && s.componentWillMount != null && s.componentWillMount(), s.componentDidMount != null && s.__h.push(s.componentDidMount);
        else {
          if (m.getDerivedStateFromProps == null && d !== f && s.componentWillReceiveProps != null && s.componentWillReceiveProps(d, g), !s.__e && s.shouldComponentUpdate != null && s.shouldComponentUpdate(d, s.__s, g) === !1 || t.__v === n.__v) {
            for (s.props = d, s.state = s.__s, t.__v !== n.__v && (s.__d = !1), s.__v = t, t.__e = n.__e, t.__k = n.__k, t.__k.forEach(function(C) {
              C && (C.__ = t);
            }), k = 0; k < s._sb.length; k++)
              s.__h.push(s._sb[k]);
            s._sb = [], s.__h.length && l.push(s);
            break e;
          }
          s.componentWillUpdate != null && s.componentWillUpdate(d, s.__s, g), s.componentDidUpdate != null && s.__h.push(function() {
            s.componentDidUpdate(f, a, u);
          });
        }
        if (s.context = g, s.props = d, s.__v = t, s.__P = e, w = G.__r, E = 0, "prototype" in m && m.prototype.render) {
          for (s.state = s.__s, s.__d = !1, w && w(t), p = s.render(s.props, s.state, s.context), $ = 0; $ < s._sb.length; $++)
            s.__h.push(s._sb[$]);
          s._sb = [];
        } else
          do
            s.__d = !1, w && w(t), p = s.render(s.props, s.state, s.context), s.state = s.__s;
          while (s.__d && ++E < 25);
        s.state = s.__s, s.getChildContext != null && (o = tt(tt({}, o), s.getChildContext())), h || s.getSnapshotBeforeUpdate == null || (u = s.getSnapshotBeforeUpdate(f, a)), x = p != null && p.type === as && p.key == null ? p.props.children : p, b_(e, Array.isArray(x) ? x : [x], t, n, o, i, r, l, _, c), s.base = t.__e, t.__h = null, s.__h.length && l.push(s), y && (s.__E = s.__ = null), s.__e = !1;
      } else
        r == null && t.__v === n.__v ? (t.__k = n.__k, t.__e = n.__e) : t.__e = yp(n.__e, t, n, o, i, r, l, c);
    (p = G.diffed) && p(t);
  } catch (C) {
    t.__v = null, (c || r != null) && (t.__e = _, t.__h = !!c, r[r.indexOf(_)] = null), G.__e(C, t, n);
  }
}
function mp(e, t) {
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
function yp(e, t, n, o, i, r, l, _) {
  var c, p, s, h = n.props, f = t.props, a = t.type, u = 0;
  if (a === "svg" && (i = !0), r != null) {
    for (; u < r.length; u++)
      if ((c = r[u]) && "setAttribute" in c == !!a && (a ? c.localName === a : c.nodeType === 3)) {
        e = c, r[u] = null;
        break;
      }
  }
  if (e == null) {
    if (a === null)
      return document.createTextNode(f);
    e = i ? document.createElementNS("http://www.w3.org/2000/svg", a) : document.createElement(a, f.is && f), r = null, _ = !1;
  }
  if (a === null)
    h === f || _ && e.data === f || (e.data = f);
  else {
    if (r = r && ls.call(e.childNodes), p = (h = n.props || v_).dangerouslySetInnerHTML, s = f.dangerouslySetInnerHTML, !_) {
      if (r != null)
        for (h = {}, u = 0; u < e.attributes.length; u++)
          h[e.attributes[u].name] = e.attributes[u].value;
      (s || p) && (s && (p && s.__html == p.__html || s.__html === e.innerHTML) || (e.innerHTML = s && s.__html || ""));
    }
    if (gp(e, f, h, i, _), s)
      t.__k = [];
    else if (u = t.props.children, b_(e, Array.isArray(u) ? u : [u], t, n, o, i && a !== "foreignObject", r, l, r ? r[0] : n.__k && Tn(n, 0), _), r != null)
      for (u = r.length; u--; )
        r[u] != null && m_(r[u]);
    _ || ("value" in f && (u = f.value) !== void 0 && (u !== e.value || a === "progress" && !u || a === "option" && u !== h.value) && Ho(e, "value", u, h.value, !1), "checked" in f && (u = f.checked) !== void 0 && u !== e.checked && Ho(e, "checked", u, h.checked, !1));
  }
  return e;
}
function x_(e, t, n) {
  try {
    typeof e == "function" ? e(t) : e.current = t;
  } catch (o) {
    G.__e(o, n);
  }
}
function C_(e, t, n) {
  var o, i;
  if (G.unmount && G.unmount(e), (o = e.ref) && (o.current && o.current !== e.__e || x_(o, null, t)), (o = e.__c) != null) {
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
      o[i] && C_(o[i], t, n || typeof e.type != "function");
  n || e.__e == null || m_(e.__e), e.__ = e.__e = e.__d = void 0;
}
function bp(e, t, n) {
  return this.constructor(e, n);
}
ls = g_.slice, G = { __e: function(e, t, n, o) {
  for (var i, r, l; t = t.__; )
    if ((i = t.__c) && !i.__)
      try {
        if ((r = i.constructor) && r.getDerivedStateFromError != null && (i.setState(r.getDerivedStateFromError(e)), l = i.__d), i.componentDidCatch != null && (i.componentDidCatch(e, o || {}), l = i.__d), l)
          return i.__E = i;
      } catch (_) {
        e = _;
      }
  throw e;
} }, h_ = 0, d_ = function(e) {
  return e != null && e.constructor === void 0;
}, pn.prototype.setState = function(e, t) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = tt({}, this.state), typeof e == "function" && (e = e(tt({}, n), this.props)), e && tt(n, e), e != null && this.__v && (t && this._sb.push(t), Oi(this));
}, pn.prototype.forceUpdate = function(e) {
  this.__v && (this.__e = !0, e && this.__h.push(e), Oi(this));
}, pn.prototype.render = as, un = [], Do.__r = 0;
let wp = (e = 21) => crypto.getRandomValues(new Uint8Array(e)).reduce((t, n) => (n &= 63, n < 36 ? t += n.toString(36) : n < 62 ? t += (n - 26).toString(36).toUpperCase() : n > 62 ? t += "-" : t += "_", t), "");
var _s, Y, E_, hn, Wi, S_ = {}, M_ = [], kp = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function nt(e, t) {
  for (var n in t)
    e[n] = t[n];
  return e;
}
function T_(e) {
  var t = e.parentNode;
  t && t.removeChild(e);
}
function Ui(e, t, n) {
  var o, i, r, l = {};
  for (r in t)
    r == "key" ? o = t[r] : r == "ref" ? i = t[r] : l[r] = t[r];
  if (arguments.length > 2 && (l.children = arguments.length > 3 ? _s.call(arguments, 2) : n), typeof e == "function" && e.defaultProps != null)
    for (r in e.defaultProps)
      l[r] === void 0 && (l[r] = e.defaultProps[r]);
  return co(e, l, o, i, null);
}
function co(e, t, n, o, i) {
  var r = { type: e, props: t, key: n, ref: o, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: i == null ? ++E_ : i };
  return i == null && Y.vnode != null && Y.vnode(r), r;
}
function cs(e) {
  return e.children;
}
function dn(e, t) {
  this.props = e, this.context = t;
}
function An(e, t) {
  if (t == null)
    return e.__ ? An(e.__, e.__.__k.indexOf(e) + 1) : null;
  for (var n; t < e.__k.length; t++)
    if ((n = e.__k[t]) != null && n.__e != null)
      return n.__e;
  return typeof e.type == "function" ? An(e) : null;
}
function A_(e) {
  var t, n;
  if ((e = e.__) != null && e.__c != null) {
    for (e.__e = e.__c.base = null, t = 0; t < e.__k.length; t++)
      if ((n = e.__k[t]) != null && n.__e != null) {
        e.__e = e.__c.base = n.__e;
        break;
      }
    return A_(e);
  }
}
function ji(e) {
  (!e.__d && (e.__d = !0) && hn.push(e) && !Io.__r++ || Wi !== Y.debounceRendering) && ((Wi = Y.debounceRendering) || setTimeout)(Io);
}
function Io() {
  for (var e; Io.__r = hn.length; )
    e = hn.sort(function(t, n) {
      return t.__v.__b - n.__v.__b;
    }), hn = [], e.some(function(t) {
      var n, o, i, r, l, _;
      t.__d && (l = (r = (n = t).__v).__e, (_ = n.__P) && (o = [], (i = nt({}, r)).__v = r.__v + 1, L_(_, r, i, n.__n, _.ownerSVGElement !== void 0, r.__h != null ? [l] : null, o, l == null ? An(r) : l, r.__h), xp(o, r), r.__e != l && A_(r)));
    });
}
function N_(e, t, n, o, i, r, l, _, c, p) {
  var s, h, f, a, u, y, d, v = o && o.__k || M_, g = v.length;
  for (n.__k = [], s = 0; s < t.length; s++)
    if ((a = n.__k[s] = (a = t[s]) == null || typeof a == "boolean" ? null : typeof a == "string" || typeof a == "number" || typeof a == "bigint" ? co(null, a, null, null, a) : Array.isArray(a) ? co(cs, { children: a }, null, null, null) : a.__b > 0 ? co(a.type, a.props, a.key, a.ref ? a.ref : null, a.__v) : a) != null) {
      if (a.__ = n, a.__b = n.__b + 1, (f = v[s]) === null || f && a.key == f.key && a.type === f.type)
        v[s] = void 0;
      else
        for (h = 0; h < g; h++) {
          if ((f = v[h]) && a.key == f.key && a.type === f.type) {
            v[h] = void 0;
            break;
          }
          f = null;
        }
      L_(e, a, f = f || S_, i, r, l, _, c, p), u = a.__e, (h = a.ref) && f.ref != h && (d || (d = []), f.ref && d.push(f.ref, null, a), d.push(h, a.__c || u, a)), u != null ? (y == null && (y = u), typeof a.type == "function" && a.__k === f.__k ? a.__d = c = R_(a, c, e) : c = P_(e, a, f, v, u, c), typeof n.type == "function" && (n.__d = c)) : c && f.__e == c && c.parentNode != e && (c = An(f));
    }
  for (n.__e = y, s = g; s--; )
    v[s] != null && D_(v[s], v[s]);
  if (d)
    for (s = 0; s < d.length; s++)
      O_(d[s], d[++s], d[++s]);
}
function R_(e, t, n) {
  for (var o, i = e.__k, r = 0; i && r < i.length; r++)
    (o = i[r]) && (o.__ = e, t = typeof o.type == "function" ? R_(o, t, n) : P_(n, o, o, i, o.__e, t));
  return t;
}
function P_(e, t, n, o, i, r) {
  var l, _, c;
  if (t.__d !== void 0)
    l = t.__d, t.__d = void 0;
  else if (n == null || i != r || i.parentNode == null)
    e:
      if (r == null || r.parentNode !== e)
        e.appendChild(i), l = null;
      else {
        for (_ = r, c = 0; (_ = _.nextSibling) && c < o.length; c += 2)
          if (_ == i)
            break e;
        e.insertBefore(i, r), l = r;
      }
  return l !== void 0 ? l : i.nextSibling;
}
function $p(e, t, n, o, i) {
  var r;
  for (r in n)
    r === "children" || r === "key" || r in t || Wo(e, r, null, n[r], o);
  for (r in t)
    i && typeof t[r] != "function" || r === "children" || r === "key" || r === "value" || r === "checked" || n[r] === t[r] || Wo(e, r, t[r], n[r], o);
}
function Bi(e, t, n) {
  t[0] === "-" ? e.setProperty(t, n) : e[t] = n == null ? "" : typeof n != "number" || kp.test(t) ? n : n + "px";
}
function Wo(e, t, n, o, i) {
  var r;
  e:
    if (t === "style")
      if (typeof n == "string")
        e.style.cssText = n;
      else {
        if (typeof o == "string" && (e.style.cssText = o = ""), o)
          for (t in o)
            n && t in n || Bi(e.style, t, "");
        if (n)
          for (t in n)
            o && n[t] === o[t] || Bi(e.style, t, n[t]);
      }
    else if (t[0] === "o" && t[1] === "n")
      r = t !== (t = t.replace(/Capture$/, "")), t = t.toLowerCase() in e ? t.toLowerCase().slice(2) : t.slice(2), e.l || (e.l = {}), e.l[t + r] = n, n ? o || e.addEventListener(t, r ? Fi : zi, r) : e.removeEventListener(t, r ? Fi : zi, r);
    else if (t !== "dangerouslySetInnerHTML") {
      if (i)
        t = t.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
      else if (t !== "href" && t !== "list" && t !== "form" && t !== "tabIndex" && t !== "download" && t in e)
        try {
          e[t] = n == null ? "" : n;
          break e;
        } catch {
        }
      typeof n == "function" || (n == null || n === !1 && t.indexOf("-") == -1 ? e.removeAttribute(t) : e.setAttribute(t, n));
    }
}
function zi(e) {
  this.l[e.type + !1](Y.event ? Y.event(e) : e);
}
function Fi(e) {
  this.l[e.type + !0](Y.event ? Y.event(e) : e);
}
function L_(e, t, n, o, i, r, l, _, c) {
  var p, s, h, f, a, u, y, d, v, g, k, w, E, $, x, m = t.type;
  if (t.constructor !== void 0)
    return null;
  n.__h != null && (c = n.__h, _ = t.__e = n.__e, t.__h = null, r = [_]), (p = Y.__b) && p(t);
  try {
    e:
      if (typeof m == "function") {
        if (d = t.props, v = (p = m.contextType) && o[p.__c], g = p ? v ? v.props.value : p.__ : o, n.__c ? y = (s = t.__c = n.__c).__ = s.__E : ("prototype" in m && m.prototype.render ? t.__c = s = new m(d, g) : (t.__c = s = new dn(d, g), s.constructor = m, s.render = Ep), v && v.sub(s), s.props = d, s.state || (s.state = {}), s.context = g, s.__n = o, h = s.__d = !0, s.__h = [], s._sb = []), s.__s == null && (s.__s = s.state), m.getDerivedStateFromProps != null && (s.__s == s.state && (s.__s = nt({}, s.__s)), nt(s.__s, m.getDerivedStateFromProps(d, s.__s))), f = s.props, a = s.state, h)
          m.getDerivedStateFromProps == null && s.componentWillMount != null && s.componentWillMount(), s.componentDidMount != null && s.__h.push(s.componentDidMount);
        else {
          if (m.getDerivedStateFromProps == null && d !== f && s.componentWillReceiveProps != null && s.componentWillReceiveProps(d, g), !s.__e && s.shouldComponentUpdate != null && s.shouldComponentUpdate(d, s.__s, g) === !1 || t.__v === n.__v) {
            for (s.props = d, s.state = s.__s, t.__v !== n.__v && (s.__d = !1), s.__v = t, t.__e = n.__e, t.__k = n.__k, t.__k.forEach(function(C) {
              C && (C.__ = t);
            }), k = 0; k < s._sb.length; k++)
              s.__h.push(s._sb[k]);
            s._sb = [], s.__h.length && l.push(s);
            break e;
          }
          s.componentWillUpdate != null && s.componentWillUpdate(d, s.__s, g), s.componentDidUpdate != null && s.__h.push(function() {
            s.componentDidUpdate(f, a, u);
          });
        }
        if (s.context = g, s.props = d, s.__v = t, s.__P = e, w = Y.__r, E = 0, "prototype" in m && m.prototype.render) {
          for (s.state = s.__s, s.__d = !1, w && w(t), p = s.render(s.props, s.state, s.context), $ = 0; $ < s._sb.length; $++)
            s.__h.push(s._sb[$]);
          s._sb = [];
        } else
          do
            s.__d = !1, w && w(t), p = s.render(s.props, s.state, s.context), s.state = s.__s;
          while (s.__d && ++E < 25);
        s.state = s.__s, s.getChildContext != null && (o = nt(nt({}, o), s.getChildContext())), h || s.getSnapshotBeforeUpdate == null || (u = s.getSnapshotBeforeUpdate(f, a)), x = p != null && p.type === cs && p.key == null ? p.props.children : p, N_(e, Array.isArray(x) ? x : [x], t, n, o, i, r, l, _, c), s.base = t.__e, t.__h = null, s.__h.length && l.push(s), y && (s.__E = s.__ = null), s.__e = !1;
      } else
        r == null && t.__v === n.__v ? (t.__k = n.__k, t.__e = n.__e) : t.__e = Cp(n.__e, t, n, o, i, r, l, c);
    (p = Y.diffed) && p(t);
  } catch (C) {
    t.__v = null, (c || r != null) && (t.__e = _, t.__h = !!c, r[r.indexOf(_)] = null), Y.__e(C, t, n);
  }
}
function xp(e, t) {
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
function Cp(e, t, n, o, i, r, l, _) {
  var c, p, s, h = n.props, f = t.props, a = t.type, u = 0;
  if (a === "svg" && (i = !0), r != null) {
    for (; u < r.length; u++)
      if ((c = r[u]) && "setAttribute" in c == !!a && (a ? c.localName === a : c.nodeType === 3)) {
        e = c, r[u] = null;
        break;
      }
  }
  if (e == null) {
    if (a === null)
      return document.createTextNode(f);
    e = i ? document.createElementNS("http://www.w3.org/2000/svg", a) : document.createElement(a, f.is && f), r = null, _ = !1;
  }
  if (a === null)
    h === f || _ && e.data === f || (e.data = f);
  else {
    if (r = r && _s.call(e.childNodes), p = (h = n.props || S_).dangerouslySetInnerHTML, s = f.dangerouslySetInnerHTML, !_) {
      if (r != null)
        for (h = {}, u = 0; u < e.attributes.length; u++)
          h[e.attributes[u].name] = e.attributes[u].value;
      (s || p) && (s && (p && s.__html == p.__html || s.__html === e.innerHTML) || (e.innerHTML = s && s.__html || ""));
    }
    if ($p(e, f, h, i, _), s)
      t.__k = [];
    else if (u = t.props.children, N_(e, Array.isArray(u) ? u : [u], t, n, o, i && a !== "foreignObject", r, l, r ? r[0] : n.__k && An(n, 0), _), r != null)
      for (u = r.length; u--; )
        r[u] != null && T_(r[u]);
    _ || ("value" in f && (u = f.value) !== void 0 && (u !== e.value || a === "progress" && !u || a === "option" && u !== h.value) && Wo(e, "value", u, h.value, !1), "checked" in f && (u = f.checked) !== void 0 && u !== e.checked && Wo(e, "checked", u, h.checked, !1));
  }
  return e;
}
function O_(e, t, n) {
  try {
    typeof e == "function" ? e(t) : e.current = t;
  } catch (o) {
    Y.__e(o, n);
  }
}
function D_(e, t, n) {
  var o, i;
  if (Y.unmount && Y.unmount(e), (o = e.ref) && (o.current && o.current !== e.__e || O_(o, null, t)), (o = e.__c) != null) {
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
      o[i] && D_(o[i], t, n || typeof e.type != "function");
  n || e.__e == null || T_(e.__e), e.__ = e.__e = e.__d = void 0;
}
function Ep(e, t, n) {
  return this.constructor(e, n);
}
_s = M_.slice, Y = { __e: function(e, t, n, o) {
  for (var i, r, l; t = t.__; )
    if ((i = t.__c) && !i.__)
      try {
        if ((r = i.constructor) && r.getDerivedStateFromError != null && (i.setState(r.getDerivedStateFromError(e)), l = i.__d), i.componentDidCatch != null && (i.componentDidCatch(e, o || {}), l = i.__d), l)
          return i.__E = i;
      } catch (_) {
        e = _;
      }
  throw e;
} }, E_ = 0, dn.prototype.setState = function(e, t) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = nt({}, this.state), typeof e == "function" && (e = e(nt({}, n), this.props)), e && nt(n, e), e != null && this.__v && (t && this._sb.push(t), ji(this));
}, dn.prototype.forceUpdate = function(e) {
  this.__v && (this.__e = !0, e && this.__h.push(e), ji(this));
}, dn.prototype.render = cs, hn = [], Io.__r = 0;
var ut, pt;
class Vi extends dn {
  constructor(n) {
    var o;
    super(n);
    M(this, ut, 0);
    M(this, pt, null);
    S(this, "_handleWheel", (n) => {
      var r;
      const { wheelContainer: o } = this.props, i = n.target;
      if (!(!i || !o) && (typeof o == "string" && i.closest(o) || typeof o == "object")) {
        const l = (this.props.type === "horz" ? n.deltaX : n.deltaY) * ((r = this.props.wheelSpeed) != null ? r : 1);
        this.scrollOffset(l) && n.preventDefault();
      }
    });
    S(this, "_handleMouseMove", (n) => {
      const { dragStart: o } = this.state;
      o && (b(this, ut) && cancelAnimationFrame(b(this, ut)), N(this, ut, requestAnimationFrame(() => {
        const i = this.props.type === "horz" ? n.clientX - o.x : n.clientY - o.y;
        this.scroll(o.offset + i * this.props.scrollSize / this.props.clientSize), N(this, ut, 0);
      })), n.preventDefault());
    });
    S(this, "_handleMouseUp", () => {
      this.state.dragStart && this.setState({
        dragStart: !1
      });
    });
    S(this, "_handleMouseDown", (n) => {
      this.state.dragStart || this.setState({ dragStart: { x: n.clientX, y: n.clientY, offset: this.scrollPos } }), n.stopPropagation();
    });
    S(this, "_handleClick", (n) => {
      const o = n.currentTarget;
      if (!o)
        return;
      const i = o.getBoundingClientRect(), { type: r, clientSize: l, scrollSize: _ } = this.props, c = (r === "horz" ? n.clientX - i.left : n.clientY - i.top) - this.barSize / 2;
      this.scroll(c * _ / l), n.preventDefault();
    });
    this.state = {
      scrollPos: (o = this.props.defaultScrollPos) != null ? o : 0,
      dragStart: !1
    };
  }
  get scrollPos() {
    var n;
    return (n = this.props.scrollPos) != null ? n : this.state.scrollPos;
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
    n && (N(this, pt, typeof n == "string" ? document : n.current), b(this, pt).addEventListener("wheel", this._handleWheel, { passive: !1 }));
  }
  componentWillUnmount() {
    document.removeEventListener("mousemove", this._handleMouseMove), document.removeEventListener("mouseup", this._handleMouseUp), b(this, pt) && b(this, pt).removeEventListener("wheel", this._handleWheel);
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
    var i;
    const { onScroll: o } = this.props;
    o && o(n, (i = this.props.type) != null ? i : "vert");
  }
  render() {
    const {
      clientSize: n,
      type: o,
      size: i = 12,
      className: r,
      style: l,
      left: _,
      top: c,
      bottom: p,
      right: s
    } = this.props, { maxScrollPos: h, scrollPos: f } = this, { dragStart: a } = this.state, u = {
      left: _,
      top: c,
      bottom: p,
      right: s,
      ...l
    }, y = {};
    return o === "horz" ? (u.height = i, u.width = n, y.width = this.barSize, y.left = Math.round(Math.min(h, f) * (n - y.width) / h)) : (u.width = i, u.height = n, y.height = this.barSize, y.top = Math.round(Math.min(h, f) * (n - y.height) / h)), /* @__PURE__ */ Ui("div", {
      className: P("scrollbar", r, {
        "is-vert": o === "vert",
        "is-horz": o === "horz",
        "is-dragging": a
      }),
      style: u,
      onMouseDown: this._handleClick
    }, /* @__PURE__ */ Ui("div", {
      className: "scrollbar-bar",
      style: y,
      onMouseDown: this._handleMouseDown
    }));
  }
}
ut = new WeakMap(), pt = new WeakMap();
function qi(e, t, n) {
  return e && (t && (e = Math.max(t, e)), n && (e = Math.min(n, e))), e;
}
function H_({ col: e, className: t, height: n, row: o, onRenderCell: i, style: r, outerStyle: l, children: _, outerClass: c, ...p }) {
  var m, C;
  const s = {
    left: e.left,
    width: e.realWidth,
    height: n,
    ...l
  }, { align: h, border: f } = e.setting, a = {
    justifyContent: h ? h === "left" ? "start" : h === "right" ? "end" : h : void 0,
    ...e.setting.cellStyle,
    ...r
  }, u = ["dtable-cell", c, e.setting.className, {
    "has-border-left": f === !0 || f === "left",
    "has-border-right": f === !0 || f === "right"
  }], y = ["dtable-cell-content", t], d = [(C = _ != null ? _ : (m = o.data) == null ? void 0 : m[e.name]) != null ? C : ""], v = i ? i(d, { row: o, col: e }, R) : d, g = [], k = [], w = {}, E = {};
  let $ = "div";
  v == null || v.forEach((T) => {
    var D;
    if (typeof T == "object" && T && !d_(T) && ("html" in T || "className" in T || "style" in T || "attrs" in T || "children" in T || "tagName" in T)) {
      const Z = T.outer ? g : k;
      T.html ? Z.push(/* @__PURE__ */ R("div", {
        className: P("dtable-cell-html", T.className),
        style: T.style,
        dangerouslySetInnerHTML: { __html: T.html },
        ...(D = T.attrs) != null ? D : {}
      })) : (T.style && Object.assign(T.outer ? s : a, T.style), T.className && (T.outer ? u : y).push(T.className), T.children && Z.push(T.children), T.attrs && Object.assign(T.outer ? w : E, T.attrs)), T.tagName && !T.outer && ($ = T.tagName);
    } else
      k.push(T);
  });
  const x = $;
  return /* @__PURE__ */ R("div", {
    className: P(u),
    style: s,
    "data-col": e.name,
    ...p,
    ...w
  }, k.length > 0 && /* @__PURE__ */ R(x, {
    className: P(y),
    style: a,
    ...E
  }, k), g);
}
function vr({ row: e, className: t, top: n = 0, left: o = 0, width: i, height: r, cols: l, CellComponent: _ = H_, onRenderCell: c }) {
  return /* @__PURE__ */ R("div", {
    className: P("dtable-cells", t),
    style: { top: n, left: o, width: i, height: r }
  }, l.map((p) => p.visible ? /* @__PURE__ */ R(_, {
    key: p.name,
    col: p,
    row: e,
    onRenderCell: c
  }) : null));
}
function I_({
  row: e,
  className: t,
  top: n,
  height: o,
  fixedLeftCols: i,
  fixedRightCols: r,
  scrollCols: l,
  fixedLeftWidth: _,
  scrollWidth: c,
  scrollColsWidth: p,
  fixedRightWidth: s,
  scrollLeft: h,
  CellComponent: f = H_,
  onRenderCell: a,
  style: u,
  ...y
}) {
  let d = null;
  i != null && i.length && (d = /* @__PURE__ */ R(vr, {
    className: "dtable-fixed-left",
    cols: i,
    width: _,
    row: e,
    CellComponent: f,
    onRenderCell: a
  }));
  let v = null;
  l != null && l.length && (v = /* @__PURE__ */ R(vr, {
    className: "dtable-flexable",
    cols: l,
    left: _ - h,
    width: Math.max(c, p),
    row: e,
    CellComponent: f,
    onRenderCell: a
  }));
  let g = null;
  r != null && r.length && (g = /* @__PURE__ */ R(vr, {
    className: "dtable-fixed-right",
    cols: r,
    left: _ + c,
    width: s,
    row: e,
    CellComponent: f,
    onRenderCell: a
  }));
  const k = { top: n, height: o, lineHeight: `${o - 2}px`, ...u };
  return /* @__PURE__ */ R("div", {
    className: P("dtable-row", t),
    style: k,
    "data-id": e.id,
    ...y
  }, d, v, g);
}
function Sp({ height: e, onRenderRow: t, ...n }) {
  const o = {
    height: e,
    ...n,
    row: { id: "HEADER", index: -1, top: 0 },
    className: "dtable-in-header",
    top: 0
  };
  if (t) {
    const i = t({ props: o }, R);
    i && Object.assign(o, i);
  }
  return /* @__PURE__ */ R("div", {
    className: "dtable-header",
    style: { height: e }
  }, /* @__PURE__ */ R(I_, {
    ...o
  }));
}
function Mp({
  className: e,
  style: t,
  top: n,
  rows: o,
  height: i,
  rowHeight: r,
  scrollTop: l,
  onRenderRow: _,
  ...c
}) {
  return t = { ...t, top: n, height: i }, /* @__PURE__ */ R("div", {
    className: P("dtable-rows", e),
    style: t
  }, o.map((p) => {
    const s = {
      className: `dtable-row-${p.index % 2 ? "odd" : "even"}`,
      row: p,
      top: p.top - l,
      height: r,
      ...c
    }, h = _ == null ? void 0 : _({ props: s, row: p }, R);
    return h && Object.assign(s, h), /* @__PURE__ */ R(I_, {
      ...s
    });
  }));
}
const Uo = /* @__PURE__ */ new Map(), jo = [];
function W_(e, t) {
  const { name: n } = e;
  if (!(t != null && t.override) && Uo.has(n))
    throw new Error(`DTable: Plugin with name ${n} already exists`);
  Uo.set(n, e), (t == null ? void 0 : t.buildIn) && !jo.includes(n) && jo.push(n);
}
function It(e, t) {
  W_(e, t);
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
function U_(e) {
  return Uo.delete(e);
}
function Tp(e) {
  if (typeof e == "string") {
    const t = Uo.get(e);
    return t || console.warn(`DTable: Cannot found plugin "${e}"`), t;
  }
  if (typeof e == "function" && "plugin" in e)
    return e.plugin;
  if (typeof e == "object")
    return e;
  console.warn("DTable: Invalid plugin", e);
}
function j_(e, t, n) {
  return t.forEach((o) => {
    var r;
    if (!o)
      return;
    const i = Tp(o);
    !i || n.has(i.name) || ((r = i.plugins) != null && r.length && j_(e, i.plugins, n), e.push(i), n.add(i.name));
  }), e;
}
function Ap(e = [], t = !0) {
  return t && jo.length && e.unshift(...jo), e != null && e.length ? j_([], e, /* @__PURE__ */ new Set()) : [];
}
function Gi() {
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
var ht, Tt, Fe, be, Ve, te, de, we, At, Dn, Hn, Le, Nt, Rt, Fo, B_, Vo, z_, qo, F_, Go, V_, In, Tr, Yo, Ko, Wn, Un, Xo, Jo, Zo, q_, Qo, G_, er, Y_;
class Mr extends pn {
  constructor(n) {
    var o;
    super(n);
    M(this, Fo);
    M(this, Vo);
    M(this, qo);
    M(this, Go);
    M(this, In);
    M(this, Zo);
    M(this, Qo);
    M(this, er);
    S(this, "ref", vp());
    M(this, ht, 0);
    M(this, Tt, void 0);
    M(this, Fe, !1);
    M(this, be, void 0);
    M(this, Ve, void 0);
    M(this, te, []);
    M(this, de, void 0);
    M(this, we, /* @__PURE__ */ new Map());
    M(this, At, {});
    M(this, Dn, void 0);
    M(this, Hn, []);
    S(this, "updateLayout", () => {
      b(this, ht) && cancelAnimationFrame(b(this, ht)), N(this, ht, requestAnimationFrame(() => {
        N(this, de, void 0), this.forceUpdate(), N(this, ht, 0);
      }));
    });
    M(this, Le, (n, o) => {
      o = o || n.type;
      const i = b(this, we).get(o);
      if (!!(i != null && i.length)) {
        for (const r of i)
          if (r.call(this, n) === !1) {
            n.stopPropagation(), n.preventDefault();
            break;
          }
      }
    });
    M(this, Nt, (n) => {
      b(this, Le).call(this, n, `window_${n.type}`);
    });
    M(this, Rt, (n) => {
      b(this, Le).call(this, n, `document_${n.type}`);
    });
    M(this, Yo, (n, o) => {
      if (this.options.onRenderRow) {
        const i = this.options.onRenderRow.call(this, n, o);
        i && Object.assign(n.props, i);
      }
      return b(this, te).forEach((i) => {
        if (i.onRenderRow) {
          const r = i.onRenderRow.call(this, n, o);
          r && Object.assign(n.props, r);
        }
      }), n.props;
    });
    M(this, Ko, (n, o) => (this.options.onRenderHeaderRow && (n.props = this.options.onRenderHeaderRow.call(this, n, o)), b(this, te).forEach((i) => {
      i.onRenderHeaderRow && (n.props = i.onRenderHeaderRow.call(this, n, o));
    }), n.props));
    M(this, Wn, (n, o, i) => {
      const { row: r, col: l } = o;
      n[0] = this.getCellValue(r, l);
      const _ = r.id === "HEADER" ? "onRenderHeaderCell" : "onRenderCell";
      return l.setting[_] && (n = l.setting[_].call(this, n, o, i)), this.options[_] && (n = this.options[_].call(this, n, o, i)), b(this, te).forEach((c) => {
        c[_] && (n = c[_].call(this, n, o, i));
      }), n;
    });
    M(this, Un, (n, o) => {
      o === "horz" ? this.scroll({ scrollLeft: n }) : this.scroll({ scrollTop: n });
    });
    M(this, Xo, (n) => {
      var _, c, p, s, h;
      const o = this.getPointerInfo(n);
      if (!o)
        return;
      const { rowID: i, colName: r, cellElement: l } = o;
      if (i === "HEADER")
        l && ((_ = this.options.onHeaderCellClick) == null || _.call(this, n, { colName: r, element: l }), b(this, te).forEach((f) => {
          var a;
          (a = f.onHeaderCellClick) == null || a.call(this, n, { colName: r, element: l });
        }));
      else {
        const { rowElement: f } = o, a = this.layout.visibleRows.find((u) => u.id === i);
        if (l) {
          if (((c = this.options.onCellClick) == null ? void 0 : c.call(this, n, { colName: r, rowID: i, rowInfo: a, element: l, rowElement: f })) === !0)
            return;
          for (const u of b(this, te))
            if (((p = u.onCellClick) == null ? void 0 : p.call(this, n, { colName: r, rowID: i, rowInfo: a, element: l, rowElement: f })) === !0)
              return;
        }
        if (((s = this.options.onRowClick) == null ? void 0 : s.call(this, n, { rowID: i, rowInfo: a, element: f })) === !0)
          return;
        for (const u of b(this, te))
          if (((h = u.onRowClick) == null ? void 0 : h.call(this, n, { rowID: i, rowInfo: a, element: f })) === !0)
            return;
      }
    });
    M(this, Jo, (n) => {
      const o = n.key.toLowerCase();
      if (["pageup", "pagedown", "home", "end"].includes(o))
        return !this.scroll({ to: o.replace("page", "") });
    });
    N(this, Tt, (o = n.id) != null ? o : `dtable-${wp(10)}`), this.state = { scrollTop: 0, scrollLeft: 0, renderCount: 0 }, N(this, Ve, Object.freeze(Ap(n.plugins))), b(this, Ve).forEach((i) => {
      var c;
      const { methods: r, data: l, state: _ } = i;
      r && Object.entries(r).forEach(([p, s]) => {
        typeof s == "function" && Object.assign(this, { [p]: s.bind(this) });
      }), l && Object.assign(b(this, At), l.call(this)), _ && Object.assign(this.state, _.call(this)), (c = i.onCreate) == null || c.call(this, i);
    });
  }
  get options() {
    var n;
    return ((n = b(this, de)) == null ? void 0 : n.options) || b(this, be) || Gi();
  }
  get plugins() {
    return b(this, te);
  }
  get layout() {
    return b(this, de);
  }
  get id() {
    return b(this, Tt);
  }
  get data() {
    return b(this, At);
  }
  get parent() {
    var n, o;
    return (o = this.props.parent) != null ? o : (n = this.ref.current) == null ? void 0 : n.parentElement;
  }
  componentWillReceiveProps() {
    N(this, be, void 0);
  }
  componentDidMount() {
    if (b(this, Fe) ? this.forceUpdate() : J(this, In, Tr).call(this), b(this, te).forEach((n) => {
      let { events: o } = n;
      !o || (typeof o == "function" && (o = o.call(this)), Object.entries(o).forEach(([i, r]) => {
        r && this.on(i, r);
      }));
    }), this.on("click", b(this, Xo)), this.on("keydown", b(this, Jo)), this.options.responsive) {
      if (typeof ResizeObserver < "u") {
        const { parent: n } = this;
        if (n) {
          const o = new ResizeObserver(this.updateLayout);
          o.observe(n), N(this, Dn, o);
        }
      }
      this.on("window_resize", this.updateLayout);
    }
    b(this, te).forEach((n) => {
      var o;
      (o = n.onMounted) == null || o.call(this);
    });
  }
  componentDidUpdate() {
    b(this, Fe) ? J(this, In, Tr).call(this) : b(this, te).forEach((n) => {
      var o;
      (o = n.onUpdated) == null || o.call(this);
    });
  }
  componentWillUnmount() {
    var o;
    (o = b(this, Dn)) == null || o.disconnect();
    const { current: n } = this.ref;
    if (n)
      for (const i of b(this, we).keys())
        i.startsWith("window_") ? window.removeEventListener(i.replace("window_", ""), b(this, Nt)) : i.startsWith("document_") ? document.removeEventListener(i.replace("document_", ""), b(this, Rt)) : n.removeEventListener(i, b(this, Le));
    b(this, te).forEach((i) => {
      var r;
      (r = i.onUnmounted) == null || r.call(this);
    }), b(this, Ve).forEach((i) => {
      var r;
      (r = i.onDestory) == null || r.call(this);
    }), N(this, At, {}), b(this, we).clear();
  }
  on(n, o, i) {
    var l;
    i && (n = `${i}_${n}`);
    const r = b(this, we).get(n);
    r ? r.push(o) : (b(this, we).set(n, [o]), n.startsWith("window_") ? window.addEventListener(n.replace("window_", ""), b(this, Nt)) : n.startsWith("document_") ? document.addEventListener(n.replace("document_", ""), b(this, Rt)) : (l = this.ref.current) == null || l.addEventListener(n, b(this, Le)));
  }
  off(n, o, i) {
    var _;
    i && (n = `${i}_${n}`);
    const r = b(this, we).get(n);
    if (!r)
      return;
    const l = r.indexOf(o);
    l >= 0 && r.splice(l, 1), r.length || (b(this, we).delete(n), n.startsWith("window_") ? window.removeEventListener(n.replace("window_", ""), b(this, Nt)) : n.startsWith("document_") ? document.removeEventListener(n.replace("document_", ""), b(this, Rt)) : (_ = this.ref.current) == null || _.removeEventListener(n, b(this, Le)));
  }
  emitCustomEvent(n, o) {
    b(this, Le).call(this, o instanceof Event ? o : new CustomEvent(n, { detail: o }), n);
  }
  scroll(n, o) {
    const { scrollLeft: i, scrollTop: r, rowsHeightTotal: l, rowsHeight: _, rowHeight: c, colsInfo: { scrollWidth: p, scrollColsWidth: s } } = this.layout, { to: h } = n;
    let { scrollLeft: f, scrollTop: a } = n;
    if (h === "up" || h === "down")
      a = r + (h === "down" ? 1 : -1) * Math.floor(_ / c) * c;
    else if (h === "left" || h === "right")
      f = i + (h === "right" ? 1 : -1) * p;
    else if (h === "home")
      a = 0;
    else if (h === "end")
      a = l - _;
    else if (h === "left-begin")
      f = 0;
    else if (h === "right-end")
      f = s - p;
    else {
      const { offsetLeft: y, offsetTop: d } = n;
      typeof y == "number" && (f = i + y), typeof d == "number" && (f = r + d);
    }
    const u = {};
    return typeof f == "number" && (f = Math.max(0, Math.min(f, s - p)), f !== i && (u.scrollLeft = f)), typeof a == "number" && (a = Math.max(0, Math.min(a, l - _)), a !== r && (u.scrollTop = a)), Object.keys(u).length ? (this.setState(u, () => {
      var y;
      (y = this.options.onScroll) == null || y.call(this, u), o == null || o.call(this, !0);
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
    var c, p;
    const i = typeof n == "object" ? n : this.getRowInfo(n);
    if (!i)
      return;
    const r = typeof o == "object" ? o : this.getColInfo(o);
    if (!r)
      return;
    let l = i.id === "HEADER" ? (c = r.setting.title) != null ? c : r.setting.name : (p = i.data) == null ? void 0 : p[r.name];
    const { cellValueGetter: _ } = this.options;
    return _ && (l = _.call(this, i, r, l)), l;
  }
  getRowInfoByIndex(n) {
    return this.layout.rows[n];
  }
  update(n = {}, o) {
    if (!b(this, be))
      return;
    typeof n == "function" && (o = n, n = {});
    const { dirtyType: i, state: r } = n;
    if (i === "layout")
      N(this, de, void 0);
    else if (i === "options") {
      if (N(this, be, void 0), !b(this, de))
        return;
      N(this, de, void 0);
    }
    this.setState(r != null ? r : (l) => ({ renderCount: l.renderCount + 1 }), o);
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
    var r;
    return (r = jn(b(this, Hn), n, o, i, this.options.lang)) != null ? r : `{i18n:${n}}`;
  }
  render() {
    var a;
    const n = J(this, er, Y_).call(this), { className: o, rowHover: i, colHover: r, cellHover: l, bordered: _, striped: c, scrollbarHover: p } = this.options, s = { width: n == null ? void 0 : n.width, height: n == null ? void 0 : n.height }, h = ["dtable", o, {
      "dtable-hover-row": i,
      "dtable-hover-col": r,
      "dtable-hover-cell": l,
      "dtable-bordered": _,
      "dtable-striped": c,
      "dtable-scrolled-down": ((a = n == null ? void 0 : n.scrollTop) != null ? a : 0) > 0,
      "scrollbar-hover": p
    }], f = [];
    return n && b(this, te).forEach((u) => {
      var d;
      const y = (d = u.onRender) == null ? void 0 : d.call(this, n);
      !y || (y.style && Object.assign(s, y.style), y.className && h.push(y.className), y.children && f.push(y.children));
    }), /* @__PURE__ */ R("div", {
      id: b(this, Tt),
      className: P(h),
      style: s,
      ref: this.ref,
      tabIndex: -1
    }, n && J(this, Fo, B_).call(this, n), n && J(this, Vo, z_).call(this, n), n && J(this, qo, F_).call(this, n), n && J(this, Go, V_).call(this, n));
  }
}
ht = new WeakMap(), Tt = new WeakMap(), Fe = new WeakMap(), be = new WeakMap(), Ve = new WeakMap(), te = new WeakMap(), de = new WeakMap(), we = new WeakMap(), At = new WeakMap(), Dn = new WeakMap(), Hn = new WeakMap(), Le = new WeakMap(), Nt = new WeakMap(), Rt = new WeakMap(), Fo = new WeakSet(), B_ = function(n) {
  const { header: o, colsInfo: i, headerHeight: r, scrollLeft: l } = n;
  if (!o)
    return null;
  if (o === !0)
    return /* @__PURE__ */ R(Sp, {
      scrollLeft: l,
      height: r,
      onRenderCell: b(this, Wn),
      onRenderRow: b(this, Ko),
      ...i
    });
  const _ = Array.isArray(o) ? o : [o];
  return /* @__PURE__ */ R(yr, {
    className: "dtable-header",
    style: { height: r },
    renders: _,
    generateArgs: [n],
    generatorThis: this
  });
}, Vo = new WeakSet(), z_ = function(n) {
  const { headerHeight: o, rowsHeight: i, visibleRows: r, rowHeight: l, colsInfo: _, scrollLeft: c, scrollTop: p } = n;
  return /* @__PURE__ */ R(Mp, {
    top: o,
    height: i,
    rows: r,
    rowHeight: l,
    scrollLeft: c,
    scrollTop: p,
    onRenderCell: b(this, Wn),
    onRenderRow: b(this, Yo),
    ..._
  });
}, qo = new WeakSet(), F_ = function(n) {
  const { footer: o } = n;
  if (!o)
    return null;
  const i = typeof o == "function" ? o.call(this, n) : Array.isArray(o) ? o : [o];
  return /* @__PURE__ */ R(yr, {
    className: "dtable-footer",
    style: { height: n.footerHeight, top: n.rowsHeight + n.headerHeight },
    renders: i,
    generateArgs: [n],
    generatorThis: this,
    generators: n.footerGenerators
  });
}, Go = new WeakSet(), V_ = function(n) {
  const o = [], { scrollLeft: i, colsInfo: r, scrollTop: l, rowsHeight: _, rowsHeightTotal: c, footerHeight: p } = n, { scrollColsWidth: s, scrollWidth: h } = r, { scrollbarSize: f = 12, horzScrollbarPos: a } = this.options;
  return s > h && o.push(
    /* @__PURE__ */ R(Vi, {
      key: "horz",
      type: "horz",
      scrollPos: i,
      scrollSize: s,
      clientSize: h,
      onScroll: b(this, Un),
      left: r.fixedLeftWidth,
      bottom: (a === "inside" ? 0 : -f) + p,
      size: f,
      wheelContainer: this.ref
    })
  ), c > _ && o.push(
    /* @__PURE__ */ R(Vi, {
      key: "vert",
      type: "vert",
      scrollPos: l,
      scrollSize: c,
      clientSize: _,
      onScroll: b(this, Un),
      right: 0,
      size: f,
      top: n.headerHeight,
      wheelContainer: this.ref
    })
  ), o.length ? o : null;
}, In = new WeakSet(), Tr = function() {
  var n;
  N(this, Fe, !1), (n = this.options.afterRender) == null || n.call(this), b(this, te).forEach((o) => {
    var i;
    return (i = o.afterRender) == null ? void 0 : i.call(this);
  });
}, Yo = new WeakMap(), Ko = new WeakMap(), Wn = new WeakMap(), Un = new WeakMap(), Xo = new WeakMap(), Jo = new WeakMap(), Zo = new WeakSet(), q_ = function() {
  if (b(this, be))
    return !1;
  const o = { ...Gi(), ...b(this, Ve).reduce((i, r) => {
    const { defaultOptions: l } = r;
    return l && Object.assign(i, l), i;
  }, {}), ...this.props };
  return N(this, be, o), N(this, te, b(this, Ve).reduce((i, r) => {
    const { when: l, options: _ } = r;
    return (!l || l(o)) && (i.push(r), _ && Object.assign(o, typeof _ == "function" ? _.call(this, o) : _)), i;
  }, [])), N(this, Hn, [this.options.i18n, ...this.plugins.map((i) => i.i18n)].filter(Boolean)), !0;
}, Qo = new WeakSet(), G_ = function() {
  var lt, Me;
  const { plugins: n } = this;
  let o = b(this, be);
  const i = {
    flex: /* @__PURE__ */ R("div", {
      style: "flex:auto"
    }),
    divider: /* @__PURE__ */ R("div", {
      style: "width:1px;margin:var(--space);background:var(--color-border);height:50%"
    })
  };
  n.forEach((A) => {
    var X;
    const O = (X = A.beforeLayout) == null ? void 0 : X.call(this, o);
    O && (o = { ...o, ...O }), Object.assign(i, A.footer);
  });
  const { defaultColWidth: r, minColWidth: l, maxColWidth: _ } = o, c = [], p = [], s = [], h = {}, f = [], a = [];
  let u = 0, y = 0, d = 0;
  o.cols.forEach((A) => {
    var Fn, Ut, jt;
    if (A.hidden)
      return;
    const {
      name: O,
      type: X = "",
      fixed: ee = !1,
      flex: he = !1,
      width: at = r,
      minWidth: Te = l,
      maxWidth: Wt = _,
      ...zn
    } = A, L = {
      name: O,
      type: X,
      setting: {
        name: O,
        type: X,
        fixed: ee,
        flex: he,
        width: at,
        minWidth: Te,
        maxWidth: Wt,
        ...zn
      },
      flex: ee ? 0 : he === !0 ? 1 : typeof he == "number" ? he : 0,
      left: 0,
      width: qi(at, Te, Wt),
      realWidth: 0,
      visible: !0,
      index: f.length
    };
    n.forEach((Vn) => {
      var ge, _t;
      const yt = (ge = Vn.colTypes) == null ? void 0 : ge[X];
      if (yt) {
        const Bt = typeof yt == "function" ? yt(L) : yt;
        Bt && Object.assign(L.setting, Bt);
      }
      (_t = Vn.onAddCol) == null || _t.call(this, L);
    }), L.width = qi((Fn = L.setting.width) != null ? Fn : L.width, (Ut = L.setting.minWidth) != null ? Ut : Te, (jt = L.setting.maxWidth) != null ? jt : Wt), L.realWidth = L.realWidth || L.width, ee === "left" ? (L.left = u, u += L.width, c.push(L)) : ee === "right" ? (L.left = y, y += L.width, p.push(L)) : (L.left = d, d += L.width, s.push(L)), L.flex && a.push(L), f.push(L), h[L.name] = L;
  });
  let v = o.width, g = 0;
  const k = u + d + y;
  if (typeof v == "function" && (v = v.call(this, k)), v === "auto")
    g = k;
  else if (v === "100%") {
    const { parent: A } = this;
    if (A)
      g = A.clientWidth;
    else {
      g = 0, N(this, Fe, !0);
      return;
    }
  } else
    g = v != null ? v : 0;
  const { data: w, rowKey: E = "id", rowHeight: $ } = o, x = [], m = (A, O, X) => {
    var he, at;
    const ee = { data: X != null ? X : { [E]: A }, id: A, index: x.length, top: 0 };
    if (X || (ee.lazy = !0), x.push(ee), ((he = o.onAddRow) == null ? void 0 : he.call(this, ee, O)) !== !1) {
      for (const Te of n)
        if (((at = Te.onAddRow) == null ? void 0 : at.call(this, ee, O)) === !1)
          return;
    }
  };
  if (typeof w == "number")
    for (let A = 0; A < w; A++)
      m(`${A}`, A);
  else
    Array.isArray(w) && w.forEach((A, O) => {
      var X;
      typeof A == "object" ? m(`${(X = A[E]) != null ? X : ""}`, O, A) : m(`${A != null ? A : ""}`, O);
    });
  let C = x;
  const T = {};
  if (o.onAddRows) {
    const A = o.onAddRows.call(this, C);
    A && (C = A);
  }
  for (const A of n) {
    const O = (lt = A.onAddRows) == null ? void 0 : lt.call(this, C);
    O && (C = O);
  }
  C.forEach((A, O) => {
    T[A.id] = A, A.index = O, A.top = A.index * $;
  });
  const { header: D, footer: Z } = o, K = D ? o.headerHeight || $ : 0, pe = Z ? o.footerHeight || $ : 0;
  let Q = o.height, W = 0;
  const oe = C.length * $, Ie = K + pe + oe;
  if (typeof Q == "function" && (Q = Q.call(this, Ie)), Q === "auto")
    W = Ie;
  else if (typeof Q == "object")
    W = Math.min(Q.max, Math.max(Q.min, Ie));
  else if (Q === "100%") {
    const { parent: A } = this;
    if (A)
      W = A.clientHeight;
    else {
      W = 0, N(this, Fe, !0);
      return;
    }
  } else
    W = Q;
  const Ee = W - K - pe, mt = g - u - y, Se = {
    options: o,
    allRows: x,
    width: g,
    height: W,
    rows: C,
    rowsMap: T,
    rowHeight: $,
    rowsHeight: Ee,
    rowsHeightTotal: oe,
    header: D,
    footer: Z,
    footerGenerators: i,
    headerHeight: K,
    footerHeight: pe,
    colsMap: h,
    colsList: f,
    flexCols: a,
    colsInfo: {
      fixedLeftCols: c,
      fixedRightCols: p,
      scrollCols: s,
      fixedLeftWidth: u,
      scrollWidth: mt,
      scrollColsWidth: d,
      fixedRightWidth: y
    }
  }, We = (Me = o.onLayout) == null ? void 0 : Me.call(this, Se);
  We && Object.assign(Se, We), n.forEach((A) => {
    if (A.onLayout) {
      const O = A.onLayout.call(this, Se);
      O && Object.assign(Se, O);
    }
  }), N(this, de, Se);
}, er = new WeakSet(), Y_ = function() {
  (J(this, Zo, q_).call(this) || !b(this, de)) && J(this, Qo, G_).call(this);
  const { layout: n } = this;
  if (!n)
    return;
  let { scrollLeft: o } = this.state;
  const { flexCols: i, colsInfo: { scrollCols: r, scrollWidth: l, scrollColsWidth: _ } } = n;
  if (i.length) {
    const k = l - _;
    if (k > 0) {
      const w = i.reduce(($, x) => $ + x.flex, 0);
      let E = 0;
      i.forEach(($) => {
        const x = Math.min(k - E, Math.ceil(k * ($.flex / w)));
        $.realWidth = x + $.width, E += $.realWidth;
      });
    } else
      i.forEach((w) => {
        w.realWidth = w.width;
      });
  }
  o = Math.min(Math.max(0, _ - l), o);
  let c = 0;
  r.forEach((k) => {
    k.left = c, c += k.realWidth, k.visible = k.left + k.realWidth >= o && k.left <= o + l;
  });
  const { rowsHeightTotal: p, rowsHeight: s, rows: h, rowHeight: f } = n, a = Math.min(Math.max(0, p - s), this.state.scrollTop), u = Math.floor(a / f), y = a + s, d = Math.min(h.length, Math.ceil(y / f)), v = [], { rowDataGetter: g } = this.options;
  for (let k = u; k < d; k++) {
    const w = h[k];
    w.lazy && g && (w.data = g([w.id])[0], w.lazy = !1), v.push(w);
  }
  return n.visibleRows = v, n.scrollTop = a, n.scrollLeft = o, n;
}, S(Mr, "addPlugin", W_), S(Mr, "removePlugin", U_);
function Yi(e, t) {
  t !== void 0 ? e.data.hoverCol = t : t = e.data.hoverCol;
  const { current: n } = e.ref;
  if (!n)
    return;
  const o = "dtable-col-hover";
  n.querySelectorAll(`.${o}`).forEach((i) => i.classList.remove(o)), typeof t == "string" && t.length && n.querySelectorAll(`.dtable-cell[data-col="${t}"]`).forEach((i) => i.classList.add(o));
}
const Np = {
  name: "col-hover",
  defaultOptions: {
    colHover: !1
  },
  when: (e) => !!e.colHover,
  events: {
    mouseover(e) {
      var i, r;
      const { colHover: t } = this.options;
      if (!t)
        return;
      const n = (i = e.target) == null ? void 0 : i.closest(".dtable-cell");
      if (!n || t === "header" && !n.closest(".dtable-header"))
        return;
      const o = (r = n == null ? void 0 : n.getAttribute("data-col")) != null ? r : !1;
      Yi(this, o);
    },
    mouseleave() {
      Yi(this, !1);
    }
  }
}, Rp = It(Np, { buildIn: !0 });
function Pp(e, t) {
  var l, _;
  typeof e == "boolean" && (t = e, e = void 0);
  const n = this.state.checkedRows, o = {}, { canRowCheckable: i } = this.options, r = (c, p) => {
    i && !i.call(this, c) || !!n[c] === p || (p ? n[c] = !0 : delete n[c], o[c] = p);
  };
  if (e === void 0 ? (t === void 0 && (t = !K_.call(this)), (l = this.layout) == null || l.allRows.forEach(({ id: c }) => {
    r(c, !!t);
  })) : (Array.isArray(e) || (e = [e]), e.forEach((c) => {
    r(c, t != null ? t : !n[c]);
  })), Object.keys(o).length) {
    const c = (_ = this.options.beforeCheckRows) == null ? void 0 : _.call(this, e, o, n);
    c && Object.keys(c).forEach((p) => {
      c[p] ? n[p] = !0 : delete n[p];
    }), this.setState({ checkedRows: { ...n } }, () => {
      var p;
      (p = this.options.onCheckChange) == null || p.call(this, o);
    });
  }
  return o;
}
function Lp(e) {
  var t;
  return (t = this.state.checkedRows[e]) != null ? t : !1;
}
function K_() {
  var n, o;
  const e = this.getChecks().length, { canRowCheckable: t } = this.options;
  return t ? e === ((n = this.layout) == null ? void 0 : n.allRows.reduce((i, r) => i + (t.call(this, r.id) ? 1 : 0), 0)) : e === ((o = this.layout) == null ? void 0 : o.allRows.length);
}
function Op() {
  return Object.keys(this.state.checkedRows);
}
const Dp = {
  name: "checkable",
  defaultOptions: { checkable: !0 },
  when: (e) => !!e.checkable,
  state() {
    return { checkedRows: {} };
  },
  methods: {
    toggleCheckRows: Pp,
    isRowChecked: Lp,
    isAllRowChecked: K_,
    getChecks: Op
  },
  i18n: {
    zh_cn: {
      checkedCountInfo: "\u5DF2\u9009\u62E9 {selected} \u9879",
      totalCountInfo: "\u5171 {total} \u9879"
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
        /* @__PURE__ */ R("div", {
          style: { padding: "0 calc(3 * var(--space))", display: "flex", alignItems: "center" },
          onClick: () => this.toggleCheckRows()
        }, /* @__PURE__ */ R("input", {
          type: "checkbox",
          checked: e
        }))
      ];
    },
    checkedInfo(e, t) {
      const n = this.getChecks().length, o = [];
      return n && o.push(this.i18n("checkedCountInfo", { selected: n })), o.push(this.i18n("totalCountInfo", { total: t.allRows.length })), [
        /* @__PURE__ */ R("div", null, o.join(", "))
      ];
    }
  },
  onRenderCell(e, { row: t, col: n }) {
    var _, c;
    const { id: o } = t, { canRowCheckable: i } = this.options;
    if (i && !i.call(this, o))
      return e;
    const { checkbox: r } = n.setting;
    if (typeof r == "function" ? r.call(this, o) : r) {
      const p = this.isRowChecked(o), s = (c = (_ = this.options.checkboxRender) == null ? void 0 : _.call(this, p, o)) != null ? c : /* @__PURE__ */ R("input", {
        type: "checkbox",
        checked: p
      });
      e.unshift(s), e.push({ className: "has-checkbox" });
    }
    return e;
  },
  onRenderHeaderCell(e, { row: t, col: n }) {
    var l, _;
    const { id: o } = t, { checkbox: i } = n.setting;
    if (typeof i == "function" ? i.call(this, o) : i) {
      const c = this.isAllRowChecked(), p = (_ = (l = this.options.checkboxRender) == null ? void 0 : l.call(this, c, o)) != null ? _ : /* @__PURE__ */ R("input", {
        type: "checkbox",
        checked: c
      });
      e.unshift(p), e.push({ className: "has-checkbox" });
    }
    return e;
  },
  onRenderRow({ props: e, row: t }) {
    if (!!this.isRowChecked(t.id))
      return { className: P(e.className, "is-checked") };
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
}, Hp = It(Dp);
var X_ = /* @__PURE__ */ ((e) => (e.unknown = "", e.collapsed = "collapsed", e.expanded = "expanded", e.hidden = "hidden", e.normal = "normal", e))(X_ || {});
function Ar(e) {
  const t = this.data.nestedMap.get(e);
  if (!t || t.state !== "")
    return t != null ? t : { state: "normal", level: -1 };
  if (!t.parent && !t.children)
    return t.state = "normal", t;
  const n = this.state.collapsedRows, o = t.children && n && n[e];
  let i = !1, { parent: r } = t;
  for (; r; ) {
    const l = Ar.call(this, r);
    if (l.state !== "expanded") {
      i = !0;
      break;
    }
    r = l.parent;
  }
  return t.state = i ? "hidden" : o ? "collapsed" : t.children ? "expanded" : "normal", t.level = t.parent ? Ar.call(this, t.parent).level + 1 : 0, t;
}
function Ip(e, t) {
  var i;
  let n = (i = this.state.collapsedRows) != null ? i : {};
  const { nestedMap: o } = this.data;
  if (e === "HEADER")
    if (t === void 0 && (t = !J_.call(this)), t) {
      const r = o.entries();
      for (const [l, _] of r)
        _.state === "expanded" && (n[l] = !0);
    } else
      n = {};
  else {
    const r = Array.isArray(e) ? e : [e];
    t === void 0 && (t = !n[r[0]]), r.forEach((l) => {
      const _ = o.get(l);
      t && (_ == null ? void 0 : _.children) ? n[l] = !0 : delete n[l];
    });
  }
  this.update({
    dirtyType: "layout",
    state: { collapsedRows: { ...n } }
  }, () => {
    var r;
    (r = this.options.onNestedChange) == null || r.call(this);
  });
}
function J_() {
  const e = this.data.nestedMap.values();
  for (const t of e)
    if (t.state === "expanded")
      return !1;
  return !0;
}
function Z_(e, t = 0, n, o = 0) {
  var i;
  n || (n = [...e.keys()]);
  for (const r of n) {
    const l = e.get(r);
    !l || (l.level === o && (l.order = t++), (i = l.children) != null && i.length && (t = Z_(e, t, l.children, o + 1)));
  }
  return t;
}
function Q_(e, t, n, o) {
  const i = e.getNestedRowInfo(t);
  return !i || i.state === "" || !i.children || i.children.forEach((r) => {
    o[r] = n, Q_(e, r, n, o);
  }), i;
}
function ec(e, t, n, o, i) {
  var _;
  const r = e.getNestedRowInfo(t);
  if (!r || r.state === "")
    return;
  ((_ = r.children) == null ? void 0 : _.every((c) => {
    const p = !!(o[c] !== void 0 ? o[c] : i[c]);
    return n === p;
  })) && (o[t] = n), r.parent && ec(e, r.parent, n, o, i);
}
const Wp = {
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
        const l = Q_(this, i, r, o);
        l != null && l.parent && ec(this, l.parent, r, o, n);
      }), o;
    }
  },
  when: (e) => !!e.nested,
  data() {
    return { nestedMap: /* @__PURE__ */ new Map() };
  },
  methods: {
    toggleRow: Ip,
    isAllCollapsed: J_,
    getNestedRowInfo: Ar
  },
  beforeLayout() {
    this.data.nestedMap.clear();
  },
  onAddRow(e) {
    var i, r, l, _, c;
    const { nestedMap: t } = this.data, n = (r = e.data) == null ? void 0 : r[(i = this.options.nestedParentKey) != null ? i : "parent"], o = (l = t.get(e.id)) != null ? l : {
      state: "",
      level: 0
    };
    if (o.parent = n, (c = e.data) != null && c[(_ = this.options.asParentKey) != null ? _ : "asParent"] && (o.children = []), t.set(e.id, o), n) {
      let p = t.get(n);
      p || (p = {
        state: "",
        level: 0
      }, t.set(n, p)), p.children || (p.children = []), p.children.push(e.id);
    }
  },
  onAddRows(e) {
    return e = e.filter((t) => this.getNestedRowInfo(t.id).state !== "hidden"), Z_(this.data.nestedMap), e.sort((t, n) => {
      var l, _;
      const o = this.getNestedRowInfo(t.id), i = this.getNestedRowInfo(n.id), r = ((l = o.order) != null ? l : 0) - ((_ = i.order) != null ? _ : 0);
      return r === 0 ? t.index - n.index : r;
    }), e;
  },
  onRenderCell(e, { col: t, row: n }) {
    var _, c, p;
    const { id: o, data: i } = n, { nestedToggle: r } = t.setting, l = this.getNestedRowInfo(o);
    if (r && (l.children || l.parent) && e.unshift((c = (_ = this.options.onRenderNestedToggle) == null ? void 0 : _.call(this, l, o, t, i)) != null ? c : /* @__PURE__ */ R("a", {
      role: "button",
      className: `dtable-nested-toggle state${l.children ? "" : " is-no-child"}`
    }, /* @__PURE__ */ R("span", {
      className: "toggle-icon"
    }))), l.level) {
      let { nestedIndent: s = r } = t.setting;
      s && (s === !0 && (s = (p = this.options.nestedIndent) != null ? p : 12), e.unshift(/* @__PURE__ */ R("div", {
        className: "dtable-nested-indent",
        style: { width: s * l.level + "px" }
      })));
    }
    return e;
  },
  onRenderHeaderCell(e, { row: t, col: n }) {
    var i, r;
    const { id: o } = t;
    return n.setting.nestedToggle && e.unshift((r = (i = this.options.onRenderNestedToggle) == null ? void 0 : i.call(this, void 0, o, n, void 0)) != null ? r : /* @__PURE__ */ R("a", {
      type: "button",
      className: "dtable-nested-toggle state"
    }, /* @__PURE__ */ R("span", {
      className: "toggle-icon"
    }))), e;
  },
  onRenderRow({ props: e, row: t }) {
    const n = this.getNestedRowInfo(t.id);
    return {
      className: P(e.className, `is-${n.state}`),
      "data-parent": n.parent
    };
  },
  onRenderHeaderRow({ props: e }) {
    return e.className = P(e.className, `is-${this.isAllCollapsed() ? "collapsed" : "expanded"}`), e;
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
}, Up = It(Wp);
const jp = {
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
        const { linkTemplate: o = "", linkProps: i } = t.setting, r = ce(o, n.data);
        return e[0] = /* @__PURE__ */ R("a", {
          href: r,
          ...i
        }, e[0]), e;
      }
    },
    avatar: {
      onRenderCell(e, { col: t, row: n }) {
        const { data: o } = n, { avatarWithName: i, avatarClass: r = "size-xs circle", avatarKey: l = `${t.name}Avatar` } = t.setting, _ = /* @__PURE__ */ R("div", {
          className: `avatar ${r} flex-none`
        }, /* @__PURE__ */ R("img", {
          src: o ? o[l] : ""
        }));
        return i ? e.unshift(_) : e[0] = _, e;
      }
    },
    circleProgress: {
      align: "center",
      onRenderCell(e, { col: t }) {
        const { circleSize: n = 24, circleBorderSize: o = 1, circleBgColor: i = "var(--color-border)", circleColor: r = "var(--color-success-500)" } = t.setting, l = (n - o) / 2, _ = n / 2, c = e[0];
        return e[0] = /* @__PURE__ */ R("svg", {
          width: n,
          height: n
        }, /* @__PURE__ */ R("circle", {
          cx: _,
          cy: _,
          r: l,
          "stroke-width": o,
          stroke: i,
          fill: "transparent"
        }), /* @__PURE__ */ R("circle", {
          cx: _,
          cy: _,
          r: l,
          "stroke-width": o,
          stroke: r,
          fill: "transparent",
          "stroke-linecap": "round",
          "stroke-dasharray": Math.PI * l * 2,
          "stroke-dashoffset": Math.PI * l * 2 * (100 - c) / 100,
          style: { transformOrigin: "center", transform: "rotate(-90deg)" }
        }), /* @__PURE__ */ R("text", {
          x: _,
          y: _ + o,
          "dominant-baseline": "middle",
          "text-anchor": "middle",
          style: { fontSize: `${l}px` }
        }, Math.round(c))), e;
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
          html: o.map((c) => {
            typeof c == "string" && (c = { action: c });
            const p = r[c.action];
            return p && (c = { className: l, ...p, ...c }), ce(i, c);
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
        return typeof o == "function" ? e[0] = i === "html" ? { html: o(r) } : o(r) : i === "datetime" ? e[0] = Sr(r, o) : i === "html" ? e[0] = { html: ce(o, r) } : e[0] = ce(o, r), e;
      }
    }
  }
}, Bp = It(jp, { buildIn: !0 }), zp = {
  name: "sort-type",
  onRenderHeaderCell(e, { col: t }) {
    const { sortType: n } = t.setting;
    if (n) {
      const { sortLink: o = this.options.sortLink, sortAttrs: i } = t.setting, r = n === !0 ? "none" : n;
      if (e.push(
        /* @__PURE__ */ R("div", {
          className: `dtable-sort dtable-sort-${r}`
        }),
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
}, Fp = It(zp, { buildIn: !0 }), Vp = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  colHover: Rp,
  checkable: Hp,
  NestedRowState: X_,
  nested: Up,
  rich: Bp,
  sortType: Fp
}, Symbol.toStringTag, { value: "Module" }));
class Vt extends Ce {
}
S(Vt, "NAME", "dtable"), S(Vt, "Component", Mr), S(Vt, "definePlugin", It), S(Vt, "removePlugin", U_), S(Vt, "plugins", Vp);
var ke, se;
class qp {
  constructor(t) {
    M(this, ke, void 0);
    M(this, se, void 0);
    N(this, ke, t), N(this, se, document.querySelector(t.getAttribute("data-target")) || document.querySelector(t.getAttribute("data-tab")) || document.querySelector(t.getAttribute("href")));
  }
  showTarget() {
    this.addActive(b(this, ke).parentElement.parentElement, b(this, ke).parentElement), this.addActive(b(this, se).parentElement, b(this, se)), b(this, se).dispatchEvent(new CustomEvent("show.zui3.tab"));
  }
  show() {
    N(this, se, b(this, ke)), this.addActive(b(this, se).parentElement, b(this, se)), N(this, ke, document.querySelector(`[href='#${b(this, se).getAttribute("id")}']`) || document.querySelector(`[data-tab='#${b(this, se).getAttribute("id")}']`) || document.querySelector(`[data-target='#${b(this, se).getAttribute("id")}']`)), this.addActive(b(this, ke).parentElement.parentElement, b(this, ke).parentElement);
  }
  addActive(t, n) {
    const o = t.children;
    Array.from(o).forEach((r) => {
      r.classList.remove("active"), r.classList.contains("fade") && r.classList.remove("in");
    }), n.classList.add("active"), n.classList.contains("fade") && this.transition(n).then(function() {
      n.dispatchEvent(new CustomEvent("shown.zui3.tab"));
    });
  }
  transition(t) {
    return new Promise(function(n) {
      setTimeout(() => {
        t.classList.add("in"), n();
      }, 100);
    });
  }
}
ke = new WeakMap(), se = new WeakMap();
document.addEventListener("click", function(e) {
  e.target instanceof HTMLElement && (e.target.dataset.toggle === "tab" || e.target.getAttribute("data-tab")) && (e.preventDefault(), new qp(e.target).showTarget());
});
export {
  Ts as ActionMenu,
  Ns as ActionMenuNested,
  qs as Avatar,
  oi as BtnGroup,
  ie as ContextMenu,
  Vt as DTable,
  _e as Dropdown,
  Rr as EventBus,
  Rs as Menu,
  si as Nav,
  qp as NavTabs,
  Ri as Pager,
  Is as ProgressCircle,
  Ae as TIME_DAY,
  Pi as Toolbar,
  hc as addI18nMap,
  Xp as browser,
  Ni as calculateTimestamp,
  Kp as convertBytes,
  le as createDate,
  Yp as formatBytes,
  Sr as formatDate,
  nh as formatDateSpan,
  ce as formatString,
  uc as getLangCode,
  oh as getTimeBeforeDesc,
  jn as i18n,
  th as isDBY,
  pr as isObject,
  Bn as isSameDay,
  cp as isSameMonth,
  Jp as isSameWeek,
  Ai as isSameYear,
  Zp as isToday,
  eh as isTomorrow,
  Qp as isYesterday,
  mr as mergeDeep,
  gr as nativeEvents,
  pc as setLangCode,
  Wc as store
};
