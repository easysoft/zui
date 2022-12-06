var nc = Object.defineProperty;
var oc = (e, t, n) => t in e ? nc(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var S = (e, t, n) => (oc(e, typeof t != "symbol" ? t + "" : t, n), n), ur = (e, t, n) => {
  if (!t.has(e))
    throw TypeError("Cannot " + n);
};
var b = (e, t, n) => (ur(e, t, "read from private field"), n ? n.call(e) : t.get(e)), M = (e, t, n) => {
  if (t.has(e))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(e) : t.set(e, n);
}, N = (e, t, n, o) => (ur(e, t, "write to private field"), o ? o.call(e, n) : t.set(e, n), n);
var J = (e, t, n) => (ur(e, t, "access private method"), n);
var tr, H, Zi, Qi, Gt, ms, fo = {}, el = [], rc = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function qe(e, t) {
  for (var n in t)
    e[n] = t[n];
  return e;
}
function tl(e) {
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
  var r = { type: e, props: t, key: n, ref: o, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: i == null ? ++Zi : i };
  return i == null && H.vnode != null && H.vnode(r), r;
}
function sc() {
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
function nl(e) {
  var t, n;
  if ((e = e.__) != null && e.__c != null) {
    for (e.__e = e.__c.base = null, t = 0; t < e.__k.length; t++)
      if ((n = e.__k[t]) != null && n.__e != null) {
        e.__e = e.__c.base = n.__e;
        break;
      }
    return nl(e);
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
      t.__d && (l = (r = (n = t).__v).__e, (_ = n.__P) && (o = [], (i = qe({}, r)).__v = r.__v + 1, Nr(_, r, i, n.__n, _.ownerSVGElement !== void 0, r.__h != null ? [l] : null, o, l == null ? vn(r) : l, r.__h), il(o, r), r.__e != l && nl(r)));
    });
}
function ol(e, t, n, o, i, r, l, _, c, p) {
  var s, h, f, a, u, y, d, v = o && o.__k || el, g = v.length;
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
      Nr(e, a, f = f || fo, i, r, l, _, c, p), u = a.__e, (h = a.ref) && f.ref != h && (d || (d = []), f.ref && d.push(f.ref, null, a), d.push(h, a.__c || u, a)), u != null ? (y == null && (y = u), typeof a.type == "function" && a.__k === f.__k ? a.__d = c = rl(a, c, e) : c = sl(e, a, f, v, u, c), typeof n.type == "function" && (n.__d = c)) : c && f.__e == c && c.parentNode != e && (c = vn(f));
    }
  for (n.__e = y, s = g; s--; )
    v[s] != null && al(v[s], v[s]);
  if (d)
    for (s = 0; s < d.length; s++)
      ll(d[s], d[++s], d[++s]);
}
function rl(e, t, n) {
  for (var o, i = e.__k, r = 0; i && r < i.length; r++)
    (o = i[r]) && (o.__ = e, t = typeof o.type == "function" ? rl(o, t, n) : sl(n, o, o, i, o.__e, t));
  return t;
}
function sl(e, t, n, o, i, r) {
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
function ic(e, t, n, o, i) {
  var r;
  for (r in n)
    r === "children" || r === "key" || r in t || po(e, r, null, n[r], o);
  for (r in t)
    i && typeof t[r] != "function" || r === "children" || r === "key" || r === "value" || r === "checked" || n[r] === t[r] || po(e, r, t[r], n[r], o);
}
function bs(e, t, n) {
  t[0] === "-" ? e.setProperty(t, n) : e[t] = n == null ? "" : typeof n != "number" || rc.test(t) ? n : n + "px";
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
        if (d = t.props, v = (p = m.contextType) && o[p.__c], g = p ? v ? v.props.value : p.__ : o, n.__c ? y = (s = t.__c = n.__c).__ = s.__E : ("prototype" in m && m.prototype.render ? t.__c = s = new m(d, g) : (t.__c = s = new Kn(d, g), s.constructor = m, s.render = ac), v && v.sub(s), s.props = d, s.state || (s.state = {}), s.context = g, s.__n = o, h = s.__d = !0, s.__h = [], s._sb = []), s.__s == null && (s.__s = s.state), m.getDerivedStateFromProps != null && (s.__s == s.state && (s.__s = qe({}, s.__s)), qe(s.__s, m.getDerivedStateFromProps(d, s.__s))), f = s.props, a = s.state, h)
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
        s.state = s.__s, s.getChildContext != null && (o = qe(qe({}, o), s.getChildContext())), h || s.getSnapshotBeforeUpdate == null || (u = s.getSnapshotBeforeUpdate(f, a)), x = p != null && p.type === or && p.key == null ? p.props.children : p, ol(e, Array.isArray(x) ? x : [x], t, n, o, i, r, l, _, c), s.base = t.__e, t.__h = null, s.__h.length && l.push(s), y && (s.__E = s.__ = null), s.__e = !1;
      } else
        r == null && t.__v === n.__v ? (t.__k = n.__k, t.__e = n.__e) : t.__e = lc(n.__e, t, n, o, i, r, l, c);
    (p = H.diffed) && p(t);
  } catch (C) {
    t.__v = null, (c || r != null) && (t.__e = _, t.__h = !!c, r[r.indexOf(_)] = null), H.__e(C, t, n);
  }
}
function il(e, t) {
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
function lc(e, t, n, o, i, r, l, _) {
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
    if (ic(e, f, h, i, _), s)
      t.__k = [];
    else if (u = t.props.children, ol(e, Array.isArray(u) ? u : [u], t, n, o, i && a !== "foreignObject", r, l, r ? r[0] : n.__k && vn(n, 0), _), r != null)
      for (u = r.length; u--; )
        r[u] != null && tl(r[u]);
    _ || ("value" in f && (u = f.value) !== void 0 && (u !== e.value || a === "progress" && !u || a === "option" && u !== h.value) && po(e, "value", u, h.value, !1), "checked" in f && (u = f.checked) !== void 0 && u !== e.checked && po(e, "checked", u, h.checked, !1));
  }
  return e;
}
function ll(e, t, n) {
  try {
    typeof e == "function" ? e(t) : e.current = t;
  } catch (o) {
    H.__e(o, n);
  }
}
function al(e, t, n) {
  var o, i;
  if (H.unmount && H.unmount(e), (o = e.ref) && (o.current && o.current !== e.__e || ll(o, null, t)), (o = e.__c) != null) {
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
      o[i] && al(o[i], t, n || typeof e.type != "function");
  n || e.__e == null || tl(e.__e), e.__ = e.__e = e.__d = void 0;
}
function ac(e, t, n) {
  return this.constructor(e, n);
}
function _c(e, t, n) {
  var o, i, r;
  H.__ && H.__(e, t), i = (o = typeof n == "function") ? null : n && n.__k || t.__k, r = [], Nr(t, e = (!o && n || t).__k = nr(or, null, [e]), i || fo, fo, t.ownerSVGElement !== void 0, !o && n ? [n] : i ? null : t.firstChild ? tr.call(t.childNodes) : null, r, !o && n ? n : i ? i.__e : t.firstChild, o), il(r, e);
}
tr = el.slice, H = { __e: function(e, t, n, o) {
  for (var i, r, l; t = t.__; )
    if ((i = t.__c) && !i.__)
      try {
        if ((r = i.constructor) && r.getDerivedStateFromError != null && (i.setState(r.getDerivedStateFromError(e)), l = i.__d), i.componentDidCatch != null && (i.componentDidCatch(e, o || {}), l = i.__d), l)
          return i.__E = i;
      } catch (_) {
        e = _;
      }
  throw e;
} }, Zi = 0, Qi = function(e) {
  return e != null && e.constructor === void 0;
}, Kn.prototype.setState = function(e, t) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = qe({}, this.state), typeof e == "function" && (e = e(qe({}, n), this.props)), e && qe(n, e), e != null && this.__v && (t && this._sb.push(t), ys(this));
}, Kn.prototype.forceUpdate = function(e) {
  this.__v && (this.__e = !0, e && this.__h.push(e), ys(this));
}, Kn.prototype.render = or, Gt = [], uo.__r = 0;
var Ne;
class cc {
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
class Rr extends cc {
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
var Re, Nn, ut, qt;
class $s extends Rr {
  constructor(n = "", o) {
    super(n);
    M(this, ut);
    M(this, Re, /* @__PURE__ */ new Map());
    M(this, Nn, void 0);
    N(this, Nn, o == null ? void 0 : o.customEventSuffix);
  }
  on(n, o, i) {
    n = J(this, ut, qt).call(this, n), super.on(n, o, i), b(this, Re).set(o, [n, i]);
  }
  off(n, o, i) {
    n = J(this, ut, qt).call(this, n), super.off(n, o, i), b(this, Re).delete(o);
  }
  once(n, o, i) {
    n = J(this, ut, qt).call(this, n);
    const r = (l) => {
      o(l), b(this, Re).delete(r);
    };
    super.once(n, r, i), b(this, Re).set(r, [n, i]);
  }
  emit(n, o) {
    return typeof n == "string" && (n = J(this, ut, qt).call(this, n)), super.emit(n, o);
  }
  offAll() {
    Array.from(b(this, Re).entries()).forEach(([n, [o, i]]) => {
      super.off(o, n, i);
    }), b(this, Re).clear();
  }
}
Re = new WeakMap(), Nn = new WeakMap(), ut = new WeakSet(), qt = function(n) {
  const o = b(this, Nn);
  return gr.has(n) || typeof o != "string" || n.endsWith(o) ? n : `${n}${o}`;
};
function fc(e, t) {
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
function uc(e, t, n) {
  const o = fc(e, t), i = o[o.length - 1];
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
function Kp(e, t = 2, n = "") {
  return Number.isNaN(e) ? "?KB" : (n || (e < 1024 ? n = "B" : e < 1048576 ? n = "KB" : e < 1073741824 ? n = "MB" : e < 1099511627776 ? n = "GB" : n = "TB"), (e / Pr[n]).toFixed(t) + n);
}
const Xp = (e) => {
  const t = /^[0-9]*(B|KB|MB|GB|TB)$/;
  e = e.toUpperCase();
  const n = e.match(t);
  if (!n)
    return 0;
  const o = n[1];
  return e = e.replace(o, ""), Number.parseInt(e, 10) * Pr[o];
};
var Xi, Ji;
let Lr = (Ji = (Xi = document.documentElement.getAttribute("lang")) == null ? void 0 : Xi.toLowerCase()) != null ? Ji : "zh_cn", Ue;
function pc() {
  return Lr;
}
function hc(e) {
  Lr = e.toLowerCase();
}
function dc(e, t) {
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
    if (_ = uc(p, s), _ !== void 0)
      break;
  }
  return _ === void 0 ? o : n ? ce(_, ...Array.isArray(n) ? n : [n]) : _;
}
jn.addLang = dc;
jn.getCode = pc;
jn.setCode = hc;
function vc(e) {
  return Object.fromEntries(Object.entries(e).map(([t, n]) => {
    if (typeof n == "string")
      try {
        n = JSON.parse(n);
      } catch {
      }
    return [t, n];
  }));
}
var Pe, wt, re;
class Yt {
  constructor(t, n) {
    M(this, Pe, void 0);
    M(this, wt, void 0);
    M(this, re, void 0);
    var o;
    t = typeof t == "string" ? document.querySelector(t) : t, this.constructor.EVENTS && N(this, re, new $s(t, { customEventSuffix: `.${this.constructor.KEY}` })), N(this, Pe, { ...this.constructor.DEFAULT, ...t instanceof HTMLElement ? vc(t.dataset) : null, ...n }), this.constructor.all.set(t, this), N(this, wt, t), this.init(), (o = b(this, re)) == null || o.emit("inited", this);
  }
  get options() {
    return b(this, Pe);
  }
  get element() {
    return b(this, wt);
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
    this.constructor.all.delete(b(this, wt)), b(this, re) && (b(this, re).emit("destroyed", this), b(this, re).offAll());
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
Pe = new WeakMap(), wt = new WeakMap(), re = new WeakMap(), S(Yt, "EVENTS", !1), S(Yt, "DEFAULT", {}), S(Yt, "allComponents", /* @__PURE__ */ new Map());
class ge extends Yt {
  constructor() {
    super(...arguments);
    S(this, "ref", sc());
  }
  get $() {
    return this.ref.current;
  }
  init() {
    requestAnimationFrame(() => this.render());
  }
  render(n) {
    const o = this.constructor.Component;
    _c(/* @__PURE__ */ nr(o, {
      ref: this.ref,
      ...this.setOptions(n)
    }), this.element);
  }
}
var Or, U, _l, cl, Kt, xs, fl = {}, ul = [], gc = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function Ge(e, t) {
  for (var n in t)
    e[n] = t[n];
  return e;
}
function pl(e) {
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
  var r = { type: e, props: t, key: n, ref: o, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: i == null ? ++_l : i };
  return i == null && U.vnode != null && U.vnode(r), r;
}
function mc() {
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
function hl(e) {
  var t, n;
  if ((e = e.__) != null && e.__c != null) {
    for (e.__e = e.__c.base = null, t = 0; t < e.__k.length; t++)
      if ((n = e.__k[t]) != null && n.__e != null) {
        e.__e = e.__c.base = n.__e;
        break;
      }
    return hl(e);
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
      t.__d && (l = (r = (n = t).__v).__e, (_ = n.__P) && (o = [], (i = Ge({}, r)).__v = r.__v + 1, ml(_, r, i, n.__n, _.ownerSVGElement !== void 0, r.__h != null ? [l] : null, o, l == null ? gn(r) : l, r.__h), bc(o, r), r.__e != l && hl(r)));
    });
}
function dl(e, t, n, o, i, r, l, _, c, p) {
  var s, h, f, a, u, y, d, v = o && o.__k || ul, g = v.length;
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
      ml(e, a, f = f || fl, i, r, l, _, c, p), u = a.__e, (h = a.ref) && f.ref != h && (d || (d = []), f.ref && d.push(f.ref, null, a), d.push(h, a.__c || u, a)), u != null ? (y == null && (y = u), typeof a.type == "function" && a.__k === f.__k ? a.__d = c = vl(a, c, e) : c = gl(e, a, f, v, u, c), typeof n.type == "function" && (n.__d = c)) : c && f.__e == c && c.parentNode != e && (c = gn(f));
    }
  for (n.__e = y, s = g; s--; )
    v[s] != null && bl(v[s], v[s]);
  if (d)
    for (s = 0; s < d.length; s++)
      yl(d[s], d[++s], d[++s]);
}
function vl(e, t, n) {
  for (var o, i = e.__k, r = 0; i && r < i.length; r++)
    (o = i[r]) && (o.__ = e, t = typeof o.type == "function" ? vl(o, t, n) : gl(n, o, o, i, o.__e, t));
  return t;
}
function gl(e, t, n, o, i, r) {
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
function yc(e, t, n, o, i) {
  var r;
  for (r in n)
    r === "children" || r === "key" || r in t || vo(e, r, null, n[r], o);
  for (r in t)
    i && typeof t[r] != "function" || r === "children" || r === "key" || r === "value" || r === "checked" || n[r] === t[r] || vo(e, r, t[r], n[r], o);
}
function Es(e, t, n) {
  t[0] === "-" ? e.setProperty(t, n) : e[t] = n == null ? "" : typeof n != "number" || gc.test(t) ? n : n + "px";
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
function ml(e, t, n, o, i, r, l, _, c) {
  var p, s, h, f, a, u, y, d, v, g, k, w, E, $, x, m = t.type;
  if (t.constructor !== void 0)
    return null;
  n.__h != null && (c = n.__h, _ = t.__e = n.__e, t.__h = null, r = [_]), (p = U.__b) && p(t);
  try {
    e:
      if (typeof m == "function") {
        if (d = t.props, v = (p = m.contextType) && o[p.__c], g = p ? v ? v.props.value : p.__ : o, n.__c ? y = (s = t.__c = n.__c).__ = s.__E : ("prototype" in m && m.prototype.render ? t.__c = s = new m(d, g) : (t.__c = s = new Xt(d, g), s.constructor = m, s.render = kc), v && v.sub(s), s.props = d, s.state || (s.state = {}), s.context = g, s.__n = o, h = s.__d = !0, s.__h = [], s._sb = []), s.__s == null && (s.__s = s.state), m.getDerivedStateFromProps != null && (s.__s == s.state && (s.__s = Ge({}, s.__s)), Ge(s.__s, m.getDerivedStateFromProps(d, s.__s))), f = s.props, a = s.state, h)
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
        s.state = s.__s, s.getChildContext != null && (o = Ge(Ge({}, o), s.getChildContext())), h || s.getSnapshotBeforeUpdate == null || (u = s.getSnapshotBeforeUpdate(f, a)), x = p != null && p.type === Dr && p.key == null ? p.props.children : p, dl(e, Array.isArray(x) ? x : [x], t, n, o, i, r, l, _, c), s.base = t.__e, t.__h = null, s.__h.length && l.push(s), y && (s.__E = s.__ = null), s.__e = !1;
      } else
        r == null && t.__v === n.__v ? (t.__k = n.__k, t.__e = n.__e) : t.__e = wc(n.__e, t, n, o, i, r, l, c);
    (p = U.diffed) && p(t);
  } catch (C) {
    t.__v = null, (c || r != null) && (t.__e = _, t.__h = !!c, r[r.indexOf(_)] = null), U.__e(C, t, n);
  }
}
function bc(e, t) {
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
function wc(e, t, n, o, i, r, l, _) {
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
    if (r = r && Or.call(e.childNodes), p = (h = n.props || fl).dangerouslySetInnerHTML, s = f.dangerouslySetInnerHTML, !_) {
      if (r != null)
        for (h = {}, u = 0; u < e.attributes.length; u++)
          h[e.attributes[u].name] = e.attributes[u].value;
      (s || p) && (s && (p && s.__html == p.__html || s.__html === e.innerHTML) || (e.innerHTML = s && s.__html || ""));
    }
    if (yc(e, f, h, i, _), s)
      t.__k = [];
    else if (u = t.props.children, dl(e, Array.isArray(u) ? u : [u], t, n, o, i && a !== "foreignObject", r, l, r ? r[0] : n.__k && gn(n, 0), _), r != null)
      for (u = r.length; u--; )
        r[u] != null && pl(r[u]);
    _ || ("value" in f && (u = f.value) !== void 0 && (u !== e.value || a === "progress" && !u || a === "option" && u !== h.value) && vo(e, "value", u, h.value, !1), "checked" in f && (u = f.checked) !== void 0 && u !== e.checked && vo(e, "checked", u, h.checked, !1));
  }
  return e;
}
function yl(e, t, n) {
  try {
    typeof e == "function" ? e(t) : e.current = t;
  } catch (o) {
    U.__e(o, n);
  }
}
function bl(e, t, n) {
  var o, i;
  if (U.unmount && U.unmount(e), (o = e.ref) && (o.current && o.current !== e.__e || yl(o, null, t)), (o = e.__c) != null) {
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
      o[i] && bl(o[i], t, n || typeof e.type != "function");
  n || e.__e == null || pl(e.__e), e.__ = e.__e = e.__d = void 0;
}
function kc(e, t, n) {
  return this.constructor(e, n);
}
Or = ul.slice, U = { __e: function(e, t, n, o) {
  for (var i, r, l; t = t.__; )
    if ((i = t.__c) && !i.__)
      try {
        if ((r = i.constructor) && r.getDerivedStateFromError != null && (i.setState(r.getDerivedStateFromError(e)), l = i.__d), i.componentDidCatch != null && (i.componentDidCatch(e, o || {}), l = i.__d), l)
          return i.__E = i;
      } catch (_) {
        e = _;
      }
  throw e;
} }, _l = 0, cl = function(e) {
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
function $c({
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
function wl({
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
function xc({
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
function Cc({
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
function Ec(e) {
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
      g != null && (typeof g == "object" && !Qi(g) && ("html" in g || "__html" in g || "className" in g || "style" in g || "attrs" in g || "children" in g) ? g.html ? a.push(
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
  const [n, o] = Ec(t);
  return nr(e, n, ...o);
}
function Sc(e) {
  return /* @__PURE__ */ ne(yr, {
    ...e
  });
}
function kl({
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
    S(this, "ref", mc());
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
        if (cl(d))
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
  divider: $c,
  item: wl,
  heading: xc,
  space: Cc,
  custom: Sc,
  basic: kl
}), S(Oe, "ROOT_TAG", "menu"), S(Oe, "NAME", "action-menu");
class Ts extends ge {
}
S(Ts, "NAME", "actionmenu"), S(Ts, "Component", Oe);
function As({
  ...e
}) {
  return /* @__PURE__ */ ne(wl, {
    ...e
  });
}
var Rn, ye, kt;
class Hr extends Oe {
  constructor(n) {
    var o;
    super(n);
    M(this, Rn, /* @__PURE__ */ new Set());
    M(this, ye, void 0);
    M(this, kt, (n, o, i) => {
      this.toggleNestedMenu(n, o), i.preventDefault();
    });
    N(this, ye, n.nestedShow === void 0), b(this, ye) && (this.state = { nestedShow: (o = n.defaultNestedShow) != null ? o : {} });
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
      nestedShow: b(this, ye) ? this.state.nestedShow : this.props.nestedShow,
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
        onMouseEnter: b(this, kt).bind(this, l, !0),
        onMouseLeave: b(this, kt).bind(this, l, !1)
      };
    else if (this.nestedTrigger === "click") {
      const { onClick: s } = r;
      r.onClick = (h) => {
        b(this, kt).call(this, l, void 0, h), s == null || s(h);
      };
    }
    const c = this.renderToggleIcon(_, r);
    return c && (r.children = [r.children, c]), r.rootClass = [r.rootClass, "has-nested-menu", _ ? "show" : ""], r;
  }
  isNestedMenuShow(n) {
    const o = b(this, ye) ? this.state.nestedShow : this.props.nestedShow;
    return o && typeof o == "object" ? o[n] : !!o;
  }
  toggleNestedMenu(n, o) {
    const { controlledMenu: i } = this.props;
    if (i)
      return i.toggleNestedMenu(n, o);
    if (!b(this, ye))
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
    !b(this, ye) || this.setState({ nestedShow: !0 });
  }
  hideAllNestedMenu() {
    !b(this, ye) || this.setState({ nestedShow: !1 });
  }
}
Rn = new WeakMap(), ye = new WeakMap(), kt = new WeakMap(), S(Hr, "ItemComponents", {
  item: As
});
class Ns extends ge {
}
S(Ns, "NAME", "actionmenunested"), S(Ns, "Component", Hr);
var Ir, j, $l, Jt, Rs, xl = {}, Cl = [], Mc = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function Ye(e, t) {
  for (var n in t)
    e[n] = t[n];
  return e;
}
function El(e) {
  var t = e.parentNode;
  t && t.removeChild(e);
}
function bt(e, t, n) {
  var o, i, r, l = {};
  for (r in t)
    r == "key" ? o = t[r] : r == "ref" ? i = t[r] : l[r] = t[r];
  if (arguments.length > 2 && (l.children = arguments.length > 3 ? Ir.call(arguments, 2) : n), typeof e == "function" && e.defaultProps != null)
    for (r in e.defaultProps)
      l[r] === void 0 && (l[r] = e.defaultProps[r]);
  return Jn(e, l, o, i, null);
}
function Jn(e, t, n, o, i) {
  var r = { type: e, props: t, key: n, ref: o, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: i == null ? ++$l : i };
  return i == null && j.vnode != null && j.vnode(r), r;
}
function Wr(e) {
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
function Sl(e) {
  var t, n;
  if ((e = e.__) != null && e.__c != null) {
    for (e.__e = e.__c.base = null, t = 0; t < e.__k.length; t++)
      if ((n = e.__k[t]) != null && n.__e != null) {
        e.__e = e.__c.base = n.__e;
        break;
      }
    return Sl(e);
  }
}
function Ps(e) {
  (!e.__d && (e.__d = !0) && Jt.push(e) && !go.__r++ || Rs !== j.debounceRendering) && ((Rs = j.debounceRendering) || setTimeout)(go);
}
function go() {
  for (var e; go.__r = Jt.length; )
    e = Jt.sort(function(t, n) {
      return t.__v.__b - n.__v.__b;
    }), Jt = [], e.some(function(t) {
      var n, o, i, r, l, _;
      t.__d && (l = (r = (n = t).__v).__e, (_ = n.__P) && (o = [], (i = Ye({}, r)).__v = r.__v + 1, Nl(_, r, i, n.__n, _.ownerSVGElement !== void 0, r.__h != null ? [l] : null, o, l == null ? mn(r) : l, r.__h), Ac(o, r), r.__e != l && Sl(r)));
    });
}
function Ml(e, t, n, o, i, r, l, _, c, p) {
  var s, h, f, a, u, y, d, v = o && o.__k || Cl, g = v.length;
  for (n.__k = [], s = 0; s < t.length; s++)
    if ((a = n.__k[s] = (a = t[s]) == null || typeof a == "boolean" ? null : typeof a == "string" || typeof a == "number" || typeof a == "bigint" ? Jn(null, a, null, null, a) : Array.isArray(a) ? Jn(Wr, { children: a }, null, null, null) : a.__b > 0 ? Jn(a.type, a.props, a.key, a.ref ? a.ref : null, a.__v) : a) != null) {
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
      Nl(e, a, f = f || xl, i, r, l, _, c, p), u = a.__e, (h = a.ref) && f.ref != h && (d || (d = []), f.ref && d.push(f.ref, null, a), d.push(h, a.__c || u, a)), u != null ? (y == null && (y = u), typeof a.type == "function" && a.__k === f.__k ? a.__d = c = Tl(a, c, e) : c = Al(e, a, f, v, u, c), typeof n.type == "function" && (n.__d = c)) : c && f.__e == c && c.parentNode != e && (c = mn(f));
    }
  for (n.__e = y, s = g; s--; )
    v[s] != null && Pl(v[s], v[s]);
  if (d)
    for (s = 0; s < d.length; s++)
      Rl(d[s], d[++s], d[++s]);
}
function Tl(e, t, n) {
  for (var o, i = e.__k, r = 0; i && r < i.length; r++)
    (o = i[r]) && (o.__ = e, t = typeof o.type == "function" ? Tl(o, t, n) : Al(n, o, o, i, o.__e, t));
  return t;
}
function Al(e, t, n, o, i, r) {
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
function Tc(e, t, n, o, i) {
  var r;
  for (r in n)
    r === "children" || r === "key" || r in t || mo(e, r, null, n[r], o);
  for (r in t)
    i && typeof t[r] != "function" || r === "children" || r === "key" || r === "value" || r === "checked" || n[r] === t[r] || mo(e, r, t[r], n[r], o);
}
function Ls(e, t, n) {
  t[0] === "-" ? e.setProperty(t, n) : e[t] = n == null ? "" : typeof n != "number" || Mc.test(t) ? n : n + "px";
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
            n && t in n || Ls(e.style, t, "");
        if (n)
          for (t in n)
            o && n[t] === o[t] || Ls(e.style, t, n[t]);
      }
    else if (t[0] === "o" && t[1] === "n")
      r = t !== (t = t.replace(/Capture$/, "")), t = t.toLowerCase() in e ? t.toLowerCase().slice(2) : t.slice(2), e.l || (e.l = {}), e.l[t + r] = n, n ? o || e.addEventListener(t, r ? Ds : Os, r) : e.removeEventListener(t, r ? Ds : Os, r);
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
function Os(e) {
  this.l[e.type + !1](j.event ? j.event(e) : e);
}
function Ds(e) {
  this.l[e.type + !0](j.event ? j.event(e) : e);
}
function Nl(e, t, n, o, i, r, l, _, c) {
  var p, s, h, f, a, u, y, d, v, g, k, w, E, $, x, m = t.type;
  if (t.constructor !== void 0)
    return null;
  n.__h != null && (c = n.__h, _ = t.__e = n.__e, t.__h = null, r = [_]), (p = j.__b) && p(t);
  try {
    e:
      if (typeof m == "function") {
        if (d = t.props, v = (p = m.contextType) && o[p.__c], g = p ? v ? v.props.value : p.__ : o, n.__c ? y = (s = t.__c = n.__c).__ = s.__E : ("prototype" in m && m.prototype.render ? t.__c = s = new m(d, g) : (t.__c = s = new Zt(d, g), s.constructor = m, s.render = Rc), v && v.sub(s), s.props = d, s.state || (s.state = {}), s.context = g, s.__n = o, h = s.__d = !0, s.__h = [], s._sb = []), s.__s == null && (s.__s = s.state), m.getDerivedStateFromProps != null && (s.__s == s.state && (s.__s = Ye({}, s.__s)), Ye(s.__s, m.getDerivedStateFromProps(d, s.__s))), f = s.props, a = s.state, h)
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
        s.state = s.__s, s.getChildContext != null && (o = Ye(Ye({}, o), s.getChildContext())), h || s.getSnapshotBeforeUpdate == null || (u = s.getSnapshotBeforeUpdate(f, a)), x = p != null && p.type === Wr && p.key == null ? p.props.children : p, Ml(e, Array.isArray(x) ? x : [x], t, n, o, i, r, l, _, c), s.base = t.__e, t.__h = null, s.__h.length && l.push(s), y && (s.__E = s.__ = null), s.__e = !1;
      } else
        r == null && t.__v === n.__v ? (t.__k = n.__k, t.__e = n.__e) : t.__e = Nc(n.__e, t, n, o, i, r, l, c);
    (p = j.diffed) && p(t);
  } catch (C) {
    t.__v = null, (c || r != null) && (t.__e = _, t.__h = !!c, r[r.indexOf(_)] = null), j.__e(C, t, n);
  }
}
function Ac(e, t) {
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
function Nc(e, t, n, o, i, r, l, _) {
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
    if (r = r && Ir.call(e.childNodes), p = (h = n.props || xl).dangerouslySetInnerHTML, s = f.dangerouslySetInnerHTML, !_) {
      if (r != null)
        for (h = {}, u = 0; u < e.attributes.length; u++)
          h[e.attributes[u].name] = e.attributes[u].value;
      (s || p) && (s && (p && s.__html == p.__html || s.__html === e.innerHTML) || (e.innerHTML = s && s.__html || ""));
    }
    if (Tc(e, f, h, i, _), s)
      t.__k = [];
    else if (u = t.props.children, Ml(e, Array.isArray(u) ? u : [u], t, n, o, i && a !== "foreignObject", r, l, r ? r[0] : n.__k && mn(n, 0), _), r != null)
      for (u = r.length; u--; )
        r[u] != null && El(r[u]);
    _ || ("value" in f && (u = f.value) !== void 0 && (u !== e.value || a === "progress" && !u || a === "option" && u !== h.value) && mo(e, "value", u, h.value, !1), "checked" in f && (u = f.checked) !== void 0 && u !== e.checked && mo(e, "checked", u, h.checked, !1));
  }
  return e;
}
function Rl(e, t, n) {
  try {
    typeof e == "function" ? e(t) : e.current = t;
  } catch (o) {
    j.__e(o, n);
  }
}
function Pl(e, t, n) {
  var o, i;
  if (j.unmount && j.unmount(e), (o = e.ref) && (o.current && o.current !== e.__e || Rl(o, null, t)), (o = e.__c) != null) {
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
      o[i] && Pl(o[i], t, n || typeof e.type != "function");
  n || e.__e == null || El(e.__e), e.__ = e.__e = e.__d = void 0;
}
function Rc(e, t, n) {
  return this.constructor(e, n);
}
Ir = Cl.slice, j = { __e: function(e, t, n, o) {
  for (var i, r, l; t = t.__; )
    if ((i = t.__c) && !i.__)
      try {
        if ((r = i.constructor) && r.getDerivedStateFromError != null && (i.setState(r.getDerivedStateFromError(e)), l = i.__d), i.componentDidCatch != null && (i.componentDidCatch(e, o || {}), l = i.__d), l)
          return i.__E = i;
      } catch (_) {
        e = _;
      }
  throw e;
} }, $l = 0, Zt.prototype.setState = function(e, t) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = Ye({}, this.state), typeof e == "function" && (e = e(Ye({}, n), this.props)), e && Ye(n, e), e != null && this.__v && (t && this._sb.push(t), Ps(this));
}, Zt.prototype.forceUpdate = function(e) {
  this.__v && (this.__e = !0, e && this.__h.push(e), Ps(this));
}, Zt.prototype.render = Wr, Jt = [], go.__r = 0;
class st extends Zt {
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
      loadingIcon: h,
      loadingText: f,
      icon: a,
      text: u,
      trailingIcon: y,
      caret: d,
      square: v,
      hint: g,
      ...k
    } = this.props, w = t || (l ? "a" : "button"), E = u == null || typeof u == "string" && !u.length || s && !f, $ = E && !a && !y && !r && !s;
    return bt(
      w,
      {
        className: P("btn", n, i, {
          "btn-caret": $,
          disabled: c || s,
          active: p,
          loading: s,
          square: v === void 0 ? !$ && !r && E : v
        }, o ? `size-${o}` : ""),
        title: g,
        [w === "a" ? "href" : "data-url"]: l,
        [w === "a" ? "target" : "data-target"]: _,
        type: w === "button" ? "button" : void 0,
        ...k
      },
      s ? /* @__PURE__ */ bt("i", {
        class: `spin icon ${h || "icon-spinner-snake"}`
      }) : typeof a == "string" ? /* @__PURE__ */ bt("i", {
        class: `icon ${a}`
      }) : a,
      E ? null : /* @__PURE__ */ bt("span", {
        className: "text"
      }, s ? f : u),
      s ? null : r,
      s ? null : typeof y == "string" ? /* @__PURE__ */ bt("i", {
        class: `icon ${y}`
      }) : y,
      s ? null : d ? /* @__PURE__ */ bt("span", {
        className: typeof d == "string" ? `caret-${d}` : "caret"
      }) : null
    );
  }
}
class Hs extends ge {
}
S(Hs, "NAME", "button"), S(Hs, "Component", st);
var Ll, br, Ol, Pc = [];
function Lc(e, t, n) {
  var o, i, r, l = {};
  for (r in t)
    r == "key" ? o = t[r] : r == "ref" ? i = t[r] : l[r] = t[r];
  if (arguments.length > 2 && (l.children = arguments.length > 3 ? Ll.call(arguments, 2) : n), typeof e == "function" && e.defaultProps != null)
    for (r in e.defaultProps)
      l[r] === void 0 && (l[r] = e.defaultProps[r]);
  return Oc(e, l, o, i, null);
}
function Oc(e, t, n, o, i) {
  var r = { type: e, props: t, key: n, ref: o, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: i == null ? ++Ol : i };
  return i == null && br.vnode != null && br.vnode(r), r;
}
Ll = Pc.slice, br = { __e: function(e, t, n, o) {
  for (var i, r, l; t = t.__; )
    if ((i = t.__c) && !i.__)
      try {
        if ((r = i.constructor) && r.getDerivedStateFromError != null && (i.setState(r.getDerivedStateFromError(e)), l = i.__d), i.componentDidCatch != null && (i.componentDidCatch(e, o || {}), l = i.__d), l)
          return i.__E = i;
      } catch (_) {
        e = _;
      }
  throw e;
} }, Ol = 0;
class Ur extends Hr {
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
    return /* @__PURE__ */ Lc("span", {
      class: `${this.name}-toggle-icon caret-${t ? "down" : "right"}`
    });
  }
}
S(Ur, "NAME", "menu");
class Is extends ge {
}
S(Is, "NAME", "menu"), S(Is, "Component", Ur);
var jr, B, Dl, Qt, Ws, Hl = {}, Il = [], Dc = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function Ke(e, t) {
  for (var n in t)
    e[n] = t[n];
  return e;
}
function Wl(e) {
  var t = e.parentNode;
  t && t.removeChild(e);
}
function qn(e, t, n) {
  var o, i, r, l = {};
  for (r in t)
    r == "key" ? o = t[r] : r == "ref" ? i = t[r] : l[r] = t[r];
  if (arguments.length > 2 && (l.children = arguments.length > 3 ? jr.call(arguments, 2) : n), typeof e == "function" && e.defaultProps != null)
    for (r in e.defaultProps)
      l[r] === void 0 && (l[r] = e.defaultProps[r]);
  return Zn(e, l, o, i, null);
}
function Zn(e, t, n, o, i) {
  var r = { type: e, props: t, key: n, ref: o, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: i == null ? ++Dl : i };
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
function Ul(e) {
  var t, n;
  if ((e = e.__) != null && e.__c != null) {
    for (e.__e = e.__c.base = null, t = 0; t < e.__k.length; t++)
      if ((n = e.__k[t]) != null && n.__e != null) {
        e.__e = e.__c.base = n.__e;
        break;
      }
    return Ul(e);
  }
}
function Us(e) {
  (!e.__d && (e.__d = !0) && Qt.push(e) && !yo.__r++ || Ws !== B.debounceRendering) && ((Ws = B.debounceRendering) || setTimeout)(yo);
}
function yo() {
  for (var e; yo.__r = Qt.length; )
    e = Qt.sort(function(t, n) {
      return t.__v.__b - n.__v.__b;
    }), Qt = [], e.some(function(t) {
      var n, o, i, r, l, _;
      t.__d && (l = (r = (n = t).__v).__e, (_ = n.__P) && (o = [], (i = Ke({}, r)).__v = r.__v + 1, Fl(_, r, i, n.__n, _.ownerSVGElement !== void 0, r.__h != null ? [l] : null, o, l == null ? yn(r) : l, r.__h), Ic(o, r), r.__e != l && Ul(r)));
    });
}
function jl(e, t, n, o, i, r, l, _, c, p) {
  var s, h, f, a, u, y, d, v = o && o.__k || Il, g = v.length;
  for (n.__k = [], s = 0; s < t.length; s++)
    if ((a = n.__k[s] = (a = t[s]) == null || typeof a == "boolean" ? null : typeof a == "string" || typeof a == "number" || typeof a == "bigint" ? Zn(null, a, null, null, a) : Array.isArray(a) ? Zn(Br, { children: a }, null, null, null) : a.__b > 0 ? Zn(a.type, a.props, a.key, a.ref ? a.ref : null, a.__v) : a) != null) {
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
      Fl(e, a, f = f || Hl, i, r, l, _, c, p), u = a.__e, (h = a.ref) && f.ref != h && (d || (d = []), f.ref && d.push(f.ref, null, a), d.push(h, a.__c || u, a)), u != null ? (y == null && (y = u), typeof a.type == "function" && a.__k === f.__k ? a.__d = c = Bl(a, c, e) : c = zl(e, a, f, v, u, c), typeof n.type == "function" && (n.__d = c)) : c && f.__e == c && c.parentNode != e && (c = yn(f));
    }
  for (n.__e = y, s = g; s--; )
    v[s] != null && ql(v[s], v[s]);
  if (d)
    for (s = 0; s < d.length; s++)
      Vl(d[s], d[++s], d[++s]);
}
function Bl(e, t, n) {
  for (var o, i = e.__k, r = 0; i && r < i.length; r++)
    (o = i[r]) && (o.__ = e, t = typeof o.type == "function" ? Bl(o, t, n) : zl(n, o, o, i, o.__e, t));
  return t;
}
function zl(e, t, n, o, i, r) {
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
function Hc(e, t, n, o, i) {
  var r;
  for (r in n)
    r === "children" || r === "key" || r in t || bo(e, r, null, n[r], o);
  for (r in t)
    i && typeof t[r] != "function" || r === "children" || r === "key" || r === "value" || r === "checked" || n[r] === t[r] || bo(e, r, t[r], n[r], o);
}
function js(e, t, n) {
  t[0] === "-" ? e.setProperty(t, n) : e[t] = n == null ? "" : typeof n != "number" || Dc.test(t) ? n : n + "px";
}
function bo(e, t, n, o, i) {
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
function Fl(e, t, n, o, i, r, l, _, c) {
  var p, s, h, f, a, u, y, d, v, g, k, w, E, $, x, m = t.type;
  if (t.constructor !== void 0)
    return null;
  n.__h != null && (c = n.__h, _ = t.__e = n.__e, t.__h = null, r = [_]), (p = B.__b) && p(t);
  try {
    e:
      if (typeof m == "function") {
        if (d = t.props, v = (p = m.contextType) && o[p.__c], g = p ? v ? v.props.value : p.__ : o, n.__c ? y = (s = t.__c = n.__c).__ = s.__E : ("prototype" in m && m.prototype.render ? t.__c = s = new m(d, g) : (t.__c = s = new en(d, g), s.constructor = m, s.render = Uc), v && v.sub(s), s.props = d, s.state || (s.state = {}), s.context = g, s.__n = o, h = s.__d = !0, s.__h = [], s._sb = []), s.__s == null && (s.__s = s.state), m.getDerivedStateFromProps != null && (s.__s == s.state && (s.__s = Ke({}, s.__s)), Ke(s.__s, m.getDerivedStateFromProps(d, s.__s))), f = s.props, a = s.state, h)
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
        s.state = s.__s, s.getChildContext != null && (o = Ke(Ke({}, o), s.getChildContext())), h || s.getSnapshotBeforeUpdate == null || (u = s.getSnapshotBeforeUpdate(f, a)), x = p != null && p.type === Br && p.key == null ? p.props.children : p, jl(e, Array.isArray(x) ? x : [x], t, n, o, i, r, l, _, c), s.base = t.__e, t.__h = null, s.__h.length && l.push(s), y && (s.__E = s.__ = null), s.__e = !1;
      } else
        r == null && t.__v === n.__v ? (t.__k = n.__k, t.__e = n.__e) : t.__e = Wc(n.__e, t, n, o, i, r, l, c);
    (p = B.diffed) && p(t);
  } catch (C) {
    t.__v = null, (c || r != null) && (t.__e = _, t.__h = !!c, r[r.indexOf(_)] = null), B.__e(C, t, n);
  }
}
function Ic(e, t) {
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
function Wc(e, t, n, o, i, r, l, _) {
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
    if (r = r && jr.call(e.childNodes), p = (h = n.props || Hl).dangerouslySetInnerHTML, s = f.dangerouslySetInnerHTML, !_) {
      if (r != null)
        for (h = {}, u = 0; u < e.attributes.length; u++)
          h[e.attributes[u].name] = e.attributes[u].value;
      (s || p) && (s && (p && s.__html == p.__html || s.__html === e.innerHTML) || (e.innerHTML = s && s.__html || ""));
    }
    if (Hc(e, f, h, i, _), s)
      t.__k = [];
    else if (u = t.props.children, jl(e, Array.isArray(u) ? u : [u], t, n, o, i && a !== "foreignObject", r, l, r ? r[0] : n.__k && yn(n, 0), _), r != null)
      for (u = r.length; u--; )
        r[u] != null && Wl(r[u]);
    _ || ("value" in f && (u = f.value) !== void 0 && (u !== e.value || a === "progress" && !u || a === "option" && u !== h.value) && bo(e, "value", u, h.value, !1), "checked" in f && (u = f.checked) !== void 0 && u !== e.checked && bo(e, "checked", u, h.checked, !1));
  }
  return e;
}
function Vl(e, t, n) {
  try {
    typeof e == "function" ? e(t) : e.current = t;
  } catch (o) {
    B.__e(o, n);
  }
}
function ql(e, t, n) {
  var o, i;
  if (B.unmount && B.unmount(e), (o = e.ref) && (o.current && o.current !== e.__e || Vl(o, null, t)), (o = e.__c) != null) {
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
      o[i] && ql(o[i], t, n || typeof e.type != "function");
  n || e.__e == null || Wl(e.__e), e.__ = e.__e = e.__d = void 0;
}
function Uc(e, t, n) {
  return this.constructor(e, n);
}
jr = Il.slice, B = { __e: function(e, t, n, o) {
  for (var i, r, l; t = t.__; )
    if ((i = t.__c) && !i.__)
      try {
        if ((r = i.constructor) && r.getDerivedStateFromError != null && (i.setState(r.getDerivedStateFromError(e)), l = i.__d), i.componentDidCatch != null && (i.componentDidCatch(e, o || {}), l = i.__d), l)
          return i.__E = i;
      } catch (_) {
        e = _;
      }
  throw e;
} }, Dl = 0, en.prototype.setState = function(e, t) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = Ke({}, this.state), typeof e == "function" && (e = e(Ke({}, n), this.props)), e && Ke(n, e), e != null && this.__v && (t && this._sb.push(t), Us(this));
}, en.prototype.forceUpdate = function(e) {
  this.__v && (this.__e = !0, e && this.__h.push(e), Us(this));
}, en.prototype.render = Br, Qt = [], yo.__r = 0;
class wr extends en {
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
class Fs extends ge {
}
S(Fs, "NAME", "table-sorter"), S(Fs, "Component", wr);
function jc(e) {
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
function Bc(e) {
  document.readyState !== "loading" ? e() : document.addEventListener("DOMContentLoaded", e);
}
function zc(e, t) {
  const n = typeof e == "string" ? document.querySelector(e) : e;
  if (!n)
    return !1;
  const o = n.getBoundingClientRect(), i = window.innerHeight || document.documentElement.clientHeight, r = window.innerWidth || document.documentElement.clientWidth;
  if (t != null && t.fullyCheck)
    return o.left >= 0 && o.top >= 0 && o.left + o.width <= r && o.top + o.height <= i;
  const l = o.top <= i && o.top + o.height >= 0, _ = o.left <= r && o.left + o.width >= 0;
  return l && _;
}
const Jp = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  selectText: jc,
  domReady: Bc,
  isElementVisible: zc,
  classes: P
}, Symbol.toStringTag, { value: "Module" }));
let Fc = (e = 21) => crypto.getRandomValues(new Uint8Array(e)).reduce((t, n) => (n &= 63, n < 36 ? t += n.toString(36) : n < 62 ? t += (n - 26).toString(36).toUpperCase() : n > 62 ? t += "-" : t += "_", t), "");
var Pn, je, be, $t, xt, Qn;
const fs = class {
  constructor(t, n = "local") {
    M(this, xt);
    M(this, Pn, void 0);
    M(this, je, void 0);
    M(this, be, void 0);
    M(this, $t, void 0);
    N(this, Pn, n), N(this, je, `ZUI_STORE:${t != null ? t : Fc()}`), N(this, be, n === "local" ? localStorage : sessionStorage);
  }
  get type() {
    return b(this, Pn);
  }
  get session() {
    return this.type === "session" ? this : (b(this, $t) || N(this, $t, new fs(b(this, je), "session")), b(this, $t));
  }
  get(t, n) {
    const o = b(this, be).getItem(J(this, xt, Qn).call(this, t));
    return typeof o == "string" ? JSON.parse(o) : o != null ? o : n;
  }
  set(t, n) {
    if (n == null)
      return this.remove(t);
    b(this, be).setItem(J(this, xt, Qn).call(this, t), JSON.stringify(n));
  }
  remove(t) {
    b(this, be).removeItem(J(this, xt, Qn).call(this, t));
  }
  each(t) {
    for (let n = 0; n < b(this, be).length; n++) {
      const o = b(this, be).key(n);
      if (o != null && o.startsWith(b(this, je))) {
        const i = b(this, be).getItem(o);
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
let wo = fs;
Pn = new WeakMap(), je = new WeakMap(), be = new WeakMap(), $t = new WeakMap(), xt = new WeakSet(), Qn = function(t) {
  return `${b(this, je)}:${t}`;
};
const Vc = new wo("DEFAULT");
function qc(e, t = "local") {
  return new wo(e, t);
}
Object.assign(Vc, { create: qc });
var zr, z, Gl, tn, Vs, Yl = {}, Kl = [], Gc = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function Xe(e, t) {
  for (var n in t)
    e[n] = t[n];
  return e;
}
function Xl(e) {
  var t = e.parentNode;
  t && t.removeChild(e);
}
function hr(e, t, n) {
  var o, i, r, l = {};
  for (r in t)
    r == "key" ? o = t[r] : r == "ref" ? i = t[r] : l[r] = t[r];
  if (arguments.length > 2 && (l.children = arguments.length > 3 ? zr.call(arguments, 2) : n), typeof e == "function" && e.defaultProps != null)
    for (r in e.defaultProps)
      l[r] === void 0 && (l[r] = e.defaultProps[r]);
  return eo(e, l, o, i, null);
}
function eo(e, t, n, o, i) {
  var r = { type: e, props: t, key: n, ref: o, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: i == null ? ++Gl : i };
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
function qs(e) {
  (!e.__d && (e.__d = !0) && tn.push(e) && !ko.__r++ || Vs !== z.debounceRendering) && ((Vs = z.debounceRendering) || setTimeout)(ko);
}
function ko() {
  for (var e; ko.__r = tn.length; )
    e = tn.sort(function(t, n) {
      return t.__v.__b - n.__v.__b;
    }), tn = [], e.some(function(t) {
      var n, o, i, r, l, _;
      t.__d && (l = (r = (n = t).__v).__e, (_ = n.__P) && (o = [], (i = Xe({}, r)).__v = r.__v + 1, ta(_, r, i, n.__n, _.ownerSVGElement !== void 0, r.__h != null ? [l] : null, o, l == null ? bn(r) : l, r.__h), Kc(o, r), r.__e != l && Jl(r)));
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
function Yc(e, t, n, o, i) {
  var r;
  for (r in n)
    r === "children" || r === "key" || r in t || $o(e, r, null, n[r], o);
  for (r in t)
    i && typeof t[r] != "function" || r === "children" || r === "key" || r === "value" || r === "checked" || n[r] === t[r] || $o(e, r, t[r], n[r], o);
}
function Gs(e, t, n) {
  t[0] === "-" ? e.setProperty(t, n) : e[t] = n == null ? "" : typeof n != "number" || Gc.test(t) ? n : n + "px";
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
            n && t in n || Gs(e.style, t, "");
        if (n)
          for (t in n)
            o && n[t] === o[t] || Gs(e.style, t, n[t]);
      }
    else if (t[0] === "o" && t[1] === "n")
      r = t !== (t = t.replace(/Capture$/, "")), t = t.toLowerCase() in e ? t.toLowerCase().slice(2) : t.slice(2), e.l || (e.l = {}), e.l[t + r] = n, n ? o || e.addEventListener(t, r ? Ks : Ys, r) : e.removeEventListener(t, r ? Ks : Ys, r);
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
function Ys(e) {
  this.l[e.type + !1](z.event ? z.event(e) : e);
}
function Ks(e) {
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
        if (d = t.props, v = (p = m.contextType) && o[p.__c], g = p ? v ? v.props.value : p.__ : o, n.__c ? y = (s = t.__c = n.__c).__ = s.__E : ("prototype" in m && m.prototype.render ? t.__c = s = new m(d, g) : (t.__c = s = new nn(d, g), s.constructor = m, s.render = Jc), v && v.sub(s), s.props = d, s.state || (s.state = {}), s.context = g, s.__n = o, h = s.__d = !0, s.__h = [], s._sb = []), s.__s == null && (s.__s = s.state), m.getDerivedStateFromProps != null && (s.__s == s.state && (s.__s = Xe({}, s.__s)), Xe(s.__s, m.getDerivedStateFromProps(d, s.__s))), f = s.props, a = s.state, h)
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
        r == null && t.__v === n.__v ? (t.__k = n.__k, t.__e = n.__e) : t.__e = Xc(n.__e, t, n, o, i, r, l, c);
    (p = z.diffed) && p(t);
  } catch (C) {
    t.__v = null, (c || r != null) && (t.__e = _, t.__h = !!c, r[r.indexOf(_)] = null), z.__e(C, t, n);
  }
}
function Kc(e, t) {
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
function Xc(e, t, n, o, i, r, l, _) {
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
    if (Yc(e, f, h, i, _), s)
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
function Jc(e, t, n) {
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
} }, Gl = 0, nn.prototype.setState = function(e, t) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = Xe({}, this.state), typeof e == "function" && (e = e(Xe({}, n), this.props)), e && Xe(n, e), e != null && this.__v && (t && this._sb.push(t), qs(this));
}, nn.prototype.forceUpdate = function(e) {
  this.__v && (this.__e = !0, e && this.__h.push(e), qs(this));
}, nn.prototype.render = Fr, tn = [], ko.__r = 0;
function Zc(e) {
  if (e.indexOf("#") === 0 && (e = e.slice(1)), e.length === 3 && (e = e[0] + e[0] + e[1] + e[1] + e[2] + e[2]), e.length !== 6)
    throw new Error(`Invalid HEX color "${e}".`);
  return [
    parseInt(e.slice(0, 2), 16),
    parseInt(e.slice(2, 4), 16),
    parseInt(e.slice(4, 6), 16)
  ];
}
function Qc(e) {
  const [t, n, o] = typeof e == "string" ? Zc(e) : e;
  return t * 0.299 + n * 0.587 + o * 0.114 > 186;
}
function Xs(e, t) {
  var n, o;
  return Qc(e) ? (n = t == null ? void 0 : t.dark) != null ? n : "#333333" : (o = t == null ? void 0 : t.light) != null ? o : "#ffffff";
}
function Js(e, t = 255) {
  return Math.min(Math.max(e, 0), t);
}
function ef(e, t, n) {
  e = e % 360 / 360, t = Js(t), n = Js(n);
  const o = n <= 0.5 ? n * (t + 1) : n + t - n * t, i = n * 2 - o, r = (l) => (l = l < 0 ? l + 1 : l > 1 ? l - 1 : l, l * 6 < 1 ? i + (o - i) * l * 6 : l * 2 < 1 ? o : l * 3 < 2 ? i + (o - i) * (2 / 3 - l) * 6 : i);
  return [
    r(e + 1 / 3) * 255,
    r(e) * 255,
    r(e - 1 / 3) * 255
  ];
}
function tf(e) {
  let t = 0;
  if (typeof e != "string" && (e = String(e)), e && e.length)
    for (let n = 0; n < e.length; ++n)
      t += (n + 1) * e.charCodeAt(n);
  return t;
}
function nf(e, t) {
  return /^[\u4e00-\u9fa5\s]+$/.test(e) ? e = e.length <= t ? e : e.substring(e.length - t) : /^[A-Za-z\d\s]+$/.test(e) ? e = e[0].toUpperCase() : e = e.length <= t ? e : e.substring(0, t), e;
}
class of extends nn {
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
      const E = nf(c, s);
      if (v.push("has-text", `has-text-${E.length}`), l)
        !_ && l && (g.color = Xs(l));
      else {
        const x = p != null ? p : c, m = (typeof x == "number" ? x : tf(x)) * f % 360;
        if (g.background = `hsl(${m},${a * 100}%,${u * 100}%)`, !_) {
          const C = ef(m, a, u);
          g.color = Xs(C);
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
class Zs extends ge {
}
S(Zs, "NAME", "avatar"), S(Zs, "Component", of);
var Vr, F, ra, sa, on, Qs, ia = {}, la = [], rf = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function Je(e, t) {
  for (var n in t)
    e[n] = t[n];
  return e;
}
function aa(e) {
  var t = e.parentNode;
  t && t.removeChild(e);
}
function dr(e, t, n) {
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
function _a(e) {
  var t, n;
  if ((e = e.__) != null && e.__c != null) {
    for (e.__e = e.__c.base = null, t = 0; t < e.__k.length; t++)
      if ((n = e.__k[t]) != null && n.__e != null) {
        e.__e = e.__c.base = n.__e;
        break;
      }
    return _a(e);
  }
}
function ei(e) {
  (!e.__d && (e.__d = !0) && on.push(e) && !xo.__r++ || Qs !== F.debounceRendering) && ((Qs = F.debounceRendering) || setTimeout)(xo);
}
function xo() {
  for (var e; xo.__r = on.length; )
    e = on.sort(function(t, n) {
      return t.__v.__b - n.__v.__b;
    }), on = [], e.some(function(t) {
      var n, o, i, r, l, _;
      t.__d && (l = (r = (n = t).__v).__e, (_ = n.__P) && (o = [], (i = Je({}, r)).__v = r.__v + 1, pa(_, r, i, n.__n, _.ownerSVGElement !== void 0, r.__h != null ? [l] : null, o, l == null ? wn(r) : l, r.__h), lf(o, r), r.__e != l && _a(r)));
    });
}
function ca(e, t, n, o, i, r, l, _, c, p) {
  var s, h, f, a, u, y, d, v = o && o.__k || la, g = v.length;
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
      pa(e, a, f = f || ia, i, r, l, _, c, p), u = a.__e, (h = a.ref) && f.ref != h && (d || (d = []), f.ref && d.push(f.ref, null, a), d.push(h, a.__c || u, a)), u != null ? (y == null && (y = u), typeof a.type == "function" && a.__k === f.__k ? a.__d = c = fa(a, c, e) : c = ua(e, a, f, v, u, c), typeof n.type == "function" && (n.__d = c)) : c && f.__e == c && c.parentNode != e && (c = wn(f));
    }
  for (n.__e = y, s = g; s--; )
    v[s] != null && da(v[s], v[s]);
  if (d)
    for (s = 0; s < d.length; s++)
      ha(d[s], d[++s], d[++s]);
}
function fa(e, t, n) {
  for (var o, i = e.__k, r = 0; i && r < i.length; r++)
    (o = i[r]) && (o.__ = e, t = typeof o.type == "function" ? fa(o, t, n) : ua(n, o, o, i, o.__e, t));
  return t;
}
function ua(e, t, n, o, i, r) {
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
function sf(e, t, n, o, i) {
  var r;
  for (r in n)
    r === "children" || r === "key" || r in t || Co(e, r, null, n[r], o);
  for (r in t)
    i && typeof t[r] != "function" || r === "children" || r === "key" || r === "value" || r === "checked" || n[r] === t[r] || Co(e, r, t[r], n[r], o);
}
function ti(e, t, n) {
  t[0] === "-" ? e.setProperty(t, n) : e[t] = n == null ? "" : typeof n != "number" || rf.test(t) ? n : n + "px";
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
            n && t in n || ti(e.style, t, "");
        if (n)
          for (t in n)
            o && n[t] === o[t] || ti(e.style, t, n[t]);
      }
    else if (t[0] === "o" && t[1] === "n")
      r = t !== (t = t.replace(/Capture$/, "")), t = t.toLowerCase() in e ? t.toLowerCase().slice(2) : t.slice(2), e.l || (e.l = {}), e.l[t + r] = n, n ? o || e.addEventListener(t, r ? oi : ni, r) : e.removeEventListener(t, r ? oi : ni, r);
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
function ni(e) {
  this.l[e.type + !1](F.event ? F.event(e) : e);
}
function oi(e) {
  this.l[e.type + !0](F.event ? F.event(e) : e);
}
function pa(e, t, n, o, i, r, l, _, c) {
  var p, s, h, f, a, u, y, d, v, g, k, w, E, $, x, m = t.type;
  if (t.constructor !== void 0)
    return null;
  n.__h != null && (c = n.__h, _ = t.__e = n.__e, t.__h = null, r = [_]), (p = F.__b) && p(t);
  try {
    e:
      if (typeof m == "function") {
        if (d = t.props, v = (p = m.contextType) && o[p.__c], g = p ? v ? v.props.value : p.__ : o, n.__c ? y = (s = t.__c = n.__c).__ = s.__E : ("prototype" in m && m.prototype.render ? t.__c = s = new m(d, g) : (t.__c = s = new rn(d, g), s.constructor = m, s.render = _f), v && v.sub(s), s.props = d, s.state || (s.state = {}), s.context = g, s.__n = o, h = s.__d = !0, s.__h = [], s._sb = []), s.__s == null && (s.__s = s.state), m.getDerivedStateFromProps != null && (s.__s == s.state && (s.__s = Je({}, s.__s)), Je(s.__s, m.getDerivedStateFromProps(d, s.__s))), f = s.props, a = s.state, h)
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
        s.state = s.__s, s.getChildContext != null && (o = Je(Je({}, o), s.getChildContext())), h || s.getSnapshotBeforeUpdate == null || (u = s.getSnapshotBeforeUpdate(f, a)), x = p != null && p.type === qr && p.key == null ? p.props.children : p, ca(e, Array.isArray(x) ? x : [x], t, n, o, i, r, l, _, c), s.base = t.__e, t.__h = null, s.__h.length && l.push(s), y && (s.__E = s.__ = null), s.__e = !1;
      } else
        r == null && t.__v === n.__v ? (t.__k = n.__k, t.__e = n.__e) : t.__e = af(n.__e, t, n, o, i, r, l, c);
    (p = F.diffed) && p(t);
  } catch (C) {
    t.__v = null, (c || r != null) && (t.__e = _, t.__h = !!c, r[r.indexOf(_)] = null), F.__e(C, t, n);
  }
}
function lf(e, t) {
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
function af(e, t, n, o, i, r, l, _) {
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
    if (r = r && Vr.call(e.childNodes), p = (h = n.props || ia).dangerouslySetInnerHTML, s = f.dangerouslySetInnerHTML, !_) {
      if (r != null)
        for (h = {}, u = 0; u < e.attributes.length; u++)
          h[e.attributes[u].name] = e.attributes[u].value;
      (s || p) && (s && (p && s.__html == p.__html || s.__html === e.innerHTML) || (e.innerHTML = s && s.__html || ""));
    }
    if (sf(e, f, h, i, _), s)
      t.__k = [];
    else if (u = t.props.children, ca(e, Array.isArray(u) ? u : [u], t, n, o, i && a !== "foreignObject", r, l, r ? r[0] : n.__k && wn(n, 0), _), r != null)
      for (u = r.length; u--; )
        r[u] != null && aa(r[u]);
    _ || ("value" in f && (u = f.value) !== void 0 && (u !== e.value || a === "progress" && !u || a === "option" && u !== h.value) && Co(e, "value", u, h.value, !1), "checked" in f && (u = f.checked) !== void 0 && u !== e.checked && Co(e, "checked", u, h.checked, !1));
  }
  return e;
}
function ha(e, t, n) {
  try {
    typeof e == "function" ? e(t) : e.current = t;
  } catch (o) {
    F.__e(o, n);
  }
}
function da(e, t, n) {
  var o, i;
  if (F.unmount && F.unmount(e), (o = e.ref) && (o.current && o.current !== e.__e || ha(o, null, t)), (o = e.__c) != null) {
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
      o[i] && da(o[i], t, n || typeof e.type != "function");
  n || e.__e == null || aa(e.__e), e.__ = e.__e = e.__d = void 0;
}
function _f(e, t, n) {
  return this.constructor(e, n);
}
Vr = la.slice, F = { __e: function(e, t, n, o) {
  for (var i, r, l; t = t.__; )
    if ((i = t.__c) && !i.__)
      try {
        if ((r = i.constructor) && r.getDerivedStateFromError != null && (i.setState(r.getDerivedStateFromError(e)), l = i.__d), i.componentDidCatch != null && (i.componentDidCatch(e, o || {}), l = i.__d), l)
          return i.__E = i;
      } catch (_) {
        e = _;
      }
  throw e;
} }, ra = 0, sa = function(e) {
  return e != null && e.constructor === void 0;
}, rn.prototype.setState = function(e, t) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = Je({}, this.state), typeof e == "function" && (e = e(Je({}, n), this.props)), e && Je(n, e), e != null && this.__v && (t && this._sb.push(t), ei(this));
}, rn.prototype.forceUpdate = function(e) {
  this.__v && (this.__e = !0, e && this.__h.push(e), ei(this));
}, rn.prototype.render = qr, on = [], xo.__r = 0;
class va extends rn {
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
    return /* @__PURE__ */ dr(st, {
      key: o,
      ...i
    });
  }
  renderItem(t, n, o) {
    const { itemRender: i, defaultBtnProps: r, onClickItem: l } = t, _ = { key: o, ...n };
    if (r && Object.assign(_, r), l && (_.onClick = this.handleItemClick.bind(this, _, o, n.onClick)), i) {
      const c = i.call(this, _, dr);
      if (sa(c))
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
class ri extends ge {
}
S(ri, "NAME", "btngroup"), S(ri, "Component", va);
function cf() {
  const e = typeof window.innerWidth == "number" ? window.innerWidth - document.body.clientWidth : 17;
  document.body.style.paddingRight = `${e}px`, document.body.classList.add("modal-open");
}
function ff() {
  document.body.style.paddingRight = "", document.body.classList.remove("modal-open");
}
function uf(e, t) {
  cf(), e.classList.add("block"), si(e, t), e.onclick = (n) => pf(n, e), window.addEventListener("resize", () => {
    si(e, t);
  });
}
function ga(e) {
  var t;
  ff(), (t = e.classList) == null || t.remove("block");
}
function si(e, t) {
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
function pf(e, t) {
  e.target.closest("[data-dismiss=modal]") && (e.stopPropagation(), ga(t));
}
function hf(e) {
  var t, n;
  return e instanceof HTMLAnchorElement ? (n = (t = (e.href || "").match(/(?<selector>#\S+)$/)) == null ? void 0 : t.groups) == null ? void 0 : n.selector : e.dataset.target;
}
document.addEventListener("click", (e) => {
  const t = e.target, n = t.closest("[data-toggle=modal]");
  if (n) {
    const o = hf(n);
    if (!o)
      return;
    const i = document.querySelector(o);
    if (!i)
      return;
    uf(i, n.dataset.position || "fit");
  } else
    t.className.includes("modal") && ga(t);
});
class ma extends Oe {
  beforeRender() {
    const t = super.beforeRender();
    return t.className = P(t.className, t.type ? `nav-${t.type}` : "", {
      "nav-stacked": t.stacked
    }), t;
  }
}
S(ma, "NAME", "nav");
class ii extends ge {
}
S(ii, "NAME", "nav"), S(ii, "Component", ma);
var Gr, V, ya, sn, li, ba = {}, wa = [], df = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function Ze(e, t) {
  for (var n in t)
    e[n] = t[n];
  return e;
}
function ka(e) {
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
  var r = { type: e, props: t, key: n, ref: o, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: i == null ? ++ya : i };
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
function $a(e) {
  var t, n;
  if ((e = e.__) != null && e.__c != null) {
    for (e.__e = e.__c.base = null, t = 0; t < e.__k.length; t++)
      if ((n = e.__k[t]) != null && n.__e != null) {
        e.__e = e.__c.base = n.__e;
        break;
      }
    return $a(e);
  }
}
function ai(e) {
  (!e.__d && (e.__d = !0) && sn.push(e) && !Eo.__r++ || li !== V.debounceRendering) && ((li = V.debounceRendering) || setTimeout)(Eo);
}
function Eo() {
  for (var e; Eo.__r = sn.length; )
    e = sn.sort(function(t, n) {
      return t.__v.__b - n.__v.__b;
    }), sn = [], e.some(function(t) {
      var n, o, i, r, l, _;
      t.__d && (l = (r = (n = t).__v).__e, (_ = n.__P) && (o = [], (i = Ze({}, r)).__v = r.__v + 1, Sa(_, r, i, n.__n, _.ownerSVGElement !== void 0, r.__h != null ? [l] : null, o, l == null ? kn(r) : l, r.__h), gf(o, r), r.__e != l && $a(r)));
    });
}
function xa(e, t, n, o, i, r, l, _, c, p) {
  var s, h, f, a, u, y, d, v = o && o.__k || wa, g = v.length;
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
      Sa(e, a, f = f || ba, i, r, l, _, c, p), u = a.__e, (h = a.ref) && f.ref != h && (d || (d = []), f.ref && d.push(f.ref, null, a), d.push(h, a.__c || u, a)), u != null ? (y == null && (y = u), typeof a.type == "function" && a.__k === f.__k ? a.__d = c = Ca(a, c, e) : c = Ea(e, a, f, v, u, c), typeof n.type == "function" && (n.__d = c)) : c && f.__e == c && c.parentNode != e && (c = kn(f));
    }
  for (n.__e = y, s = g; s--; )
    v[s] != null && Ta(v[s], v[s]);
  if (d)
    for (s = 0; s < d.length; s++)
      Ma(d[s], d[++s], d[++s]);
}
function Ca(e, t, n) {
  for (var o, i = e.__k, r = 0; i && r < i.length; r++)
    (o = i[r]) && (o.__ = e, t = typeof o.type == "function" ? Ca(o, t, n) : Ea(n, o, o, i, o.__e, t));
  return t;
}
function Ea(e, t, n, o, i, r) {
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
function vf(e, t, n, o, i) {
  var r;
  for (r in n)
    r === "children" || r === "key" || r in t || So(e, r, null, n[r], o);
  for (r in t)
    i && typeof t[r] != "function" || r === "children" || r === "key" || r === "value" || r === "checked" || n[r] === t[r] || So(e, r, t[r], n[r], o);
}
function _i(e, t, n) {
  t[0] === "-" ? e.setProperty(t, n) : e[t] = n == null ? "" : typeof n != "number" || df.test(t) ? n : n + "px";
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
            n && t in n || _i(e.style, t, "");
        if (n)
          for (t in n)
            o && n[t] === o[t] || _i(e.style, t, n[t]);
      }
    else if (t[0] === "o" && t[1] === "n")
      r = t !== (t = t.replace(/Capture$/, "")), t = t.toLowerCase() in e ? t.toLowerCase().slice(2) : t.slice(2), e.l || (e.l = {}), e.l[t + r] = n, n ? o || e.addEventListener(t, r ? fi : ci, r) : e.removeEventListener(t, r ? fi : ci, r);
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
function ci(e) {
  this.l[e.type + !1](V.event ? V.event(e) : e);
}
function fi(e) {
  this.l[e.type + !0](V.event ? V.event(e) : e);
}
function Sa(e, t, n, o, i, r, l, _, c) {
  var p, s, h, f, a, u, y, d, v, g, k, w, E, $, x, m = t.type;
  if (t.constructor !== void 0)
    return null;
  n.__h != null && (c = n.__h, _ = t.__e = n.__e, t.__h = null, r = [_]), (p = V.__b) && p(t);
  try {
    e:
      if (typeof m == "function") {
        if (d = t.props, v = (p = m.contextType) && o[p.__c], g = p ? v ? v.props.value : p.__ : o, n.__c ? y = (s = t.__c = n.__c).__ = s.__E : ("prototype" in m && m.prototype.render ? t.__c = s = new m(d, g) : (t.__c = s = new ln(d, g), s.constructor = m, s.render = yf), v && v.sub(s), s.props = d, s.state || (s.state = {}), s.context = g, s.__n = o, h = s.__d = !0, s.__h = [], s._sb = []), s.__s == null && (s.__s = s.state), m.getDerivedStateFromProps != null && (s.__s == s.state && (s.__s = Ze({}, s.__s)), Ze(s.__s, m.getDerivedStateFromProps(d, s.__s))), f = s.props, a = s.state, h)
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
        s.state = s.__s, s.getChildContext != null && (o = Ze(Ze({}, o), s.getChildContext())), h || s.getSnapshotBeforeUpdate == null || (u = s.getSnapshotBeforeUpdate(f, a)), x = p != null && p.type === Yr && p.key == null ? p.props.children : p, xa(e, Array.isArray(x) ? x : [x], t, n, o, i, r, l, _, c), s.base = t.__e, t.__h = null, s.__h.length && l.push(s), y && (s.__E = s.__ = null), s.__e = !1;
      } else
        r == null && t.__v === n.__v ? (t.__k = n.__k, t.__e = n.__e) : t.__e = mf(n.__e, t, n, o, i, r, l, c);
    (p = V.diffed) && p(t);
  } catch (C) {
    t.__v = null, (c || r != null) && (t.__e = _, t.__h = !!c, r[r.indexOf(_)] = null), V.__e(C, t, n);
  }
}
function gf(e, t) {
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
function mf(e, t, n, o, i, r, l, _) {
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
    if (r = r && Gr.call(e.childNodes), p = (h = n.props || ba).dangerouslySetInnerHTML, s = f.dangerouslySetInnerHTML, !_) {
      if (r != null)
        for (h = {}, u = 0; u < e.attributes.length; u++)
          h[e.attributes[u].name] = e.attributes[u].value;
      (s || p) && (s && (p && s.__html == p.__html || s.__html === e.innerHTML) || (e.innerHTML = s && s.__html || ""));
    }
    if (vf(e, f, h, i, _), s)
      t.__k = [];
    else if (u = t.props.children, xa(e, Array.isArray(u) ? u : [u], t, n, o, i && a !== "foreignObject", r, l, r ? r[0] : n.__k && kn(n, 0), _), r != null)
      for (u = r.length; u--; )
        r[u] != null && ka(r[u]);
    _ || ("value" in f && (u = f.value) !== void 0 && (u !== e.value || a === "progress" && !u || a === "option" && u !== h.value) && So(e, "value", u, h.value, !1), "checked" in f && (u = f.checked) !== void 0 && u !== e.checked && So(e, "checked", u, h.checked, !1));
  }
  return e;
}
function Ma(e, t, n) {
  try {
    typeof e == "function" ? e(t) : e.current = t;
  } catch (o) {
    V.__e(o, n);
  }
}
function Ta(e, t, n) {
  var o, i;
  if (V.unmount && V.unmount(e), (o = e.ref) && (o.current && o.current !== e.__e || Ma(o, null, t)), (o = e.__c) != null) {
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
      o[i] && Ta(o[i], t, n || typeof e.type != "function");
  n || e.__e == null || ka(e.__e), e.__ = e.__e = e.__d = void 0;
}
function yf(e, t, n) {
  return this.constructor(e, n);
}
Gr = wa.slice, V = { __e: function(e, t, n, o) {
  for (var i, r, l; t = t.__; )
    if ((i = t.__c) && !i.__)
      try {
        if ((r = i.constructor) && r.getDerivedStateFromError != null && (i.setState(r.getDerivedStateFromError(e)), l = i.__d), i.componentDidCatch != null && (i.componentDidCatch(e, o || {}), l = i.__d), l)
          return i.__E = i;
      } catch (_) {
        e = _;
      }
  throw e;
} }, ya = 0, ln.prototype.setState = function(e, t) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = Ze({}, this.state), typeof e == "function" && (e = e(Ze({}, n), this.props)), e && Ze(n, e), e != null && this.__v && (t && this._sb.push(t), ai(this));
}, ln.prototype.forceUpdate = function(e) {
  this.__v && (this.__e = !0, e && this.__h.push(e), ai(this));
}, ln.prototype.render = Yr, sn = [], Eo.__r = 0;
var Aa, kr, Na, bf = [];
function rr(e, t, n) {
  var o, i, r, l = {};
  for (r in t)
    r == "key" ? o = t[r] : r == "ref" ? i = t[r] : l[r] = t[r];
  if (arguments.length > 2 && (l.children = arguments.length > 3 ? Aa.call(arguments, 2) : n), typeof e == "function" && e.defaultProps != null)
    for (r in e.defaultProps)
      l[r] === void 0 && (l[r] = e.defaultProps[r]);
  return wf(e, l, o, i, null);
}
function wf(e, t, n, o, i) {
  var r = { type: e, props: t, key: n, ref: o, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: i == null ? ++Na : i };
  return i == null && kr.vnode != null && kr.vnode(r), r;
}
Aa = bf.slice, kr = { __e: function(e, t, n, o) {
  for (var i, r, l; t = t.__; )
    if ((i = t.__c) && !i.__)
      try {
        if ((r = i.constructor) && r.getDerivedStateFromError != null && (i.setState(r.getDerivedStateFromError(e)), l = i.__d), i.componentDidCatch != null && (i.componentDidCatch(e, o || {}), l = i.__d), l)
          return i.__E = i;
      } catch (_) {
        e = _;
      }
  throw e;
} }, Na = 0;
function kf({
  key: e,
  type: t,
  btnType: n,
  ...o
}) {
  return /* @__PURE__ */ rr(st, {
    type: n,
    ...o
  });
}
var Kr, q, Ra, an, ui, Pa = {}, La = [], $f = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function Qe(e, t) {
  for (var n in t)
    e[n] = t[n];
  return e;
}
function Oa(e) {
  var t = e.parentNode;
  t && t.removeChild(e);
}
function Da(e, t, n) {
  var o, i, r, l = {};
  for (r in t)
    r == "key" ? o = t[r] : r == "ref" ? i = t[r] : l[r] = t[r];
  if (arguments.length > 2 && (l.children = arguments.length > 3 ? Kr.call(arguments, 2) : n), typeof e == "function" && e.defaultProps != null)
    for (r in e.defaultProps)
      l[r] === void 0 && (l[r] = e.defaultProps[r]);
  return oo(e, l, o, i, null);
}
function oo(e, t, n, o, i) {
  var r = { type: e, props: t, key: n, ref: o, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: i == null ? ++Ra : i };
  return i == null && q.vnode != null && q.vnode(r), r;
}
function xf() {
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
function Ha(e) {
  var t, n;
  if ((e = e.__) != null && e.__c != null) {
    for (e.__e = e.__c.base = null, t = 0; t < e.__k.length; t++)
      if ((n = e.__k[t]) != null && n.__e != null) {
        e.__e = e.__c.base = n.__e;
        break;
      }
    return Ha(e);
  }
}
function pi(e) {
  (!e.__d && (e.__d = !0) && an.push(e) && !Mo.__r++ || ui !== q.debounceRendering) && ((ui = q.debounceRendering) || setTimeout)(Mo);
}
function Mo() {
  for (var e; Mo.__r = an.length; )
    e = an.sort(function(t, n) {
      return t.__v.__b - n.__v.__b;
    }), an = [], e.some(function(t) {
      var n, o, i, r, l, _;
      t.__d && (l = (r = (n = t).__v).__e, (_ = n.__P) && (o = [], (i = Qe({}, r)).__v = r.__v + 1, ja(_, r, i, n.__n, _.ownerSVGElement !== void 0, r.__h != null ? [l] : null, o, l == null ? $n(r) : l, r.__h), Ef(o, r), r.__e != l && Ha(r)));
    });
}
function Ia(e, t, n, o, i, r, l, _, c, p) {
  var s, h, f, a, u, y, d, v = o && o.__k || La, g = v.length;
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
      ja(e, a, f = f || Pa, i, r, l, _, c, p), u = a.__e, (h = a.ref) && f.ref != h && (d || (d = []), f.ref && d.push(f.ref, null, a), d.push(h, a.__c || u, a)), u != null ? (y == null && (y = u), typeof a.type == "function" && a.__k === f.__k ? a.__d = c = Wa(a, c, e) : c = Ua(e, a, f, v, u, c), typeof n.type == "function" && (n.__d = c)) : c && f.__e == c && c.parentNode != e && (c = $n(f));
    }
  for (n.__e = y, s = g; s--; )
    v[s] != null && za(v[s], v[s]);
  if (d)
    for (s = 0; s < d.length; s++)
      Ba(d[s], d[++s], d[++s]);
}
function Wa(e, t, n) {
  for (var o, i = e.__k, r = 0; i && r < i.length; r++)
    (o = i[r]) && (o.__ = e, t = typeof o.type == "function" ? Wa(o, t, n) : Ua(n, o, o, i, o.__e, t));
  return t;
}
function Ua(e, t, n, o, i, r) {
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
function Cf(e, t, n, o, i) {
  var r;
  for (r in n)
    r === "children" || r === "key" || r in t || To(e, r, null, n[r], o);
  for (r in t)
    i && typeof t[r] != "function" || r === "children" || r === "key" || r === "value" || r === "checked" || n[r] === t[r] || To(e, r, t[r], n[r], o);
}
function hi(e, t, n) {
  t[0] === "-" ? e.setProperty(t, n) : e[t] = n == null ? "" : typeof n != "number" || $f.test(t) ? n : n + "px";
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
            n && t in n || hi(e.style, t, "");
        if (n)
          for (t in n)
            o && n[t] === o[t] || hi(e.style, t, n[t]);
      }
    else if (t[0] === "o" && t[1] === "n")
      r = t !== (t = t.replace(/Capture$/, "")), t = t.toLowerCase() in e ? t.toLowerCase().slice(2) : t.slice(2), e.l || (e.l = {}), e.l[t + r] = n, n ? o || e.addEventListener(t, r ? vi : di, r) : e.removeEventListener(t, r ? vi : di, r);
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
function di(e) {
  this.l[e.type + !1](q.event ? q.event(e) : e);
}
function vi(e) {
  this.l[e.type + !0](q.event ? q.event(e) : e);
}
function ja(e, t, n, o, i, r, l, _, c) {
  var p, s, h, f, a, u, y, d, v, g, k, w, E, $, x, m = t.type;
  if (t.constructor !== void 0)
    return null;
  n.__h != null && (c = n.__h, _ = t.__e = n.__e, t.__h = null, r = [_]), (p = q.__b) && p(t);
  try {
    e:
      if (typeof m == "function") {
        if (d = t.props, v = (p = m.contextType) && o[p.__c], g = p ? v ? v.props.value : p.__ : o, n.__c ? y = (s = t.__c = n.__c).__ = s.__E : ("prototype" in m && m.prototype.render ? t.__c = s = new m(d, g) : (t.__c = s = new _n(d, g), s.constructor = m, s.render = Mf), v && v.sub(s), s.props = d, s.state || (s.state = {}), s.context = g, s.__n = o, h = s.__d = !0, s.__h = [], s._sb = []), s.__s == null && (s.__s = s.state), m.getDerivedStateFromProps != null && (s.__s == s.state && (s.__s = Qe({}, s.__s)), Qe(s.__s, m.getDerivedStateFromProps(d, s.__s))), f = s.props, a = s.state, h)
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
        s.state = s.__s, s.getChildContext != null && (o = Qe(Qe({}, o), s.getChildContext())), h || s.getSnapshotBeforeUpdate == null || (u = s.getSnapshotBeforeUpdate(f, a)), x = p != null && p.type === Xr && p.key == null ? p.props.children : p, Ia(e, Array.isArray(x) ? x : [x], t, n, o, i, r, l, _, c), s.base = t.__e, t.__h = null, s.__h.length && l.push(s), y && (s.__E = s.__ = null), s.__e = !1;
      } else
        r == null && t.__v === n.__v ? (t.__k = n.__k, t.__e = n.__e) : t.__e = Sf(n.__e, t, n, o, i, r, l, c);
    (p = q.diffed) && p(t);
  } catch (C) {
    t.__v = null, (c || r != null) && (t.__e = _, t.__h = !!c, r[r.indexOf(_)] = null), q.__e(C, t, n);
  }
}
function Ef(e, t) {
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
function Sf(e, t, n, o, i, r, l, _) {
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
    if (r = r && Kr.call(e.childNodes), p = (h = n.props || Pa).dangerouslySetInnerHTML, s = f.dangerouslySetInnerHTML, !_) {
      if (r != null)
        for (h = {}, u = 0; u < e.attributes.length; u++)
          h[e.attributes[u].name] = e.attributes[u].value;
      (s || p) && (s && (p && s.__html == p.__html || s.__html === e.innerHTML) || (e.innerHTML = s && s.__html || ""));
    }
    if (Cf(e, f, h, i, _), s)
      t.__k = [];
    else if (u = t.props.children, Ia(e, Array.isArray(u) ? u : [u], t, n, o, i && a !== "foreignObject", r, l, r ? r[0] : n.__k && $n(n, 0), _), r != null)
      for (u = r.length; u--; )
        r[u] != null && Oa(r[u]);
    _ || ("value" in f && (u = f.value) !== void 0 && (u !== e.value || a === "progress" && !u || a === "option" && u !== h.value) && To(e, "value", u, h.value, !1), "checked" in f && (u = f.checked) !== void 0 && u !== e.checked && To(e, "checked", u, h.checked, !1));
  }
  return e;
}
function Ba(e, t, n) {
  try {
    typeof e == "function" ? e(t) : e.current = t;
  } catch (o) {
    q.__e(o, n);
  }
}
function za(e, t, n) {
  var o, i;
  if (q.unmount && q.unmount(e), (o = e.ref) && (o.current && o.current !== e.__e || Ba(o, null, t)), (o = e.__c) != null) {
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
      o[i] && za(o[i], t, n || typeof e.type != "function");
  n || e.__e == null || Oa(e.__e), e.__ = e.__e = e.__d = void 0;
}
function Mf(e, t, n) {
  return this.constructor(e, n);
}
Kr = La.slice, q = { __e: function(e, t, n, o) {
  for (var i, r, l; t = t.__; )
    if ((i = t.__c) && !i.__)
      try {
        if ((r = i.constructor) && r.getDerivedStateFromError != null && (i.setState(r.getDerivedStateFromError(e)), l = i.__d), i.componentDidCatch != null && (i.componentDidCatch(e, o || {}), l = i.__d), l)
          return i.__E = i;
      } catch (_) {
        e = _;
      }
  throw e;
} }, Ra = 0, _n.prototype.setState = function(e, t) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = Qe({}, this.state), typeof e == "function" && (e = e(Qe({}, n), this.props)), e && Qe(n, e), e != null && this.__v && (t && this._sb.push(t), pi(this));
}, _n.prototype.forceUpdate = function(e) {
  this.__v && (this.__e = !0, e && this.__h.push(e), pi(this));
}, _n.prototype.render = Xr, an = [], Mo.__r = 0;
var Jr = "top", Fa = "bottom", Ao = "right", xn = "left", Tf = "auto", Va = [Jr, Fa, Ao, xn], Af = "start", Nf = "end", Rf = /* @__PURE__ */ [].concat(Va, [Tf]).reduce(function(e, t) {
  return e.concat([t, t + "-" + Af, t + "-" + Nf]);
}, []);
function qa(e) {
  return e.split("-")[0];
}
function It(e) {
  if (e == null)
    return window;
  if (e.toString() !== "[object Window]") {
    var t = e.ownerDocument;
    return t && t.defaultView || window;
  }
  return e;
}
function Ga(e) {
  var t = It(e).Element;
  return e instanceof t || e instanceof Element;
}
function No(e) {
  var t = It(e).HTMLElement;
  return e instanceof t || e instanceof HTMLElement;
}
function Zr(e) {
  if (typeof ShadowRoot > "u")
    return !1;
  var t = It(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot;
}
var Pf = Math.max, Lf = Math.min, gi = Math.round;
function $r() {
  var e = navigator.userAgentData;
  return e != null && e.brands ? e.brands.map(function(t) {
    return t.brand + "/" + t.version;
  }).join(" ") : navigator.userAgent;
}
function Of() {
  return !/^((?!chrome|android).)*safari/i.test($r());
}
function Df(e, t, n) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  var o = e.getBoundingClientRect(), i = 1, r = 1;
  t && No(e) && (i = e.offsetWidth > 0 && gi(o.width) / e.offsetWidth || 1, r = e.offsetHeight > 0 && gi(o.height) / e.offsetHeight || 1);
  var l = Ga(e) ? It(e) : window, _ = l.visualViewport, c = !Of() && n, p = (o.left + (c && _ ? _.offsetLeft : 0)) / i, s = (o.top + (c && _ ? _.offsetTop : 0)) / r, h = o.width / i, f = o.height / r;
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
function Hf(e) {
  var t = Df(e), n = e.offsetWidth, o = e.offsetHeight;
  return Math.abs(t.width - n) <= 1 && (n = t.width), Math.abs(t.height - o) <= 1 && (o = t.height), {
    x: e.offsetLeft,
    y: e.offsetTop,
    width: n,
    height: o
  };
}
function If(e, t) {
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
  return It(e).getComputedStyle(e);
}
function Wf(e) {
  return ["table", "td", "th"].indexOf(Cn(e)) >= 0;
}
function Uf(e) {
  return ((Ga(e) ? e.ownerDocument : e.document) || window.document).documentElement;
}
function jf(e) {
  return Cn(e) === "html" ? e : e.assignedSlot || e.parentNode || (Zr(e) ? e.host : null) || Uf(e);
}
function mi(e) {
  return !No(e) || En(e).position === "fixed" ? null : e.offsetParent;
}
function Bf(e) {
  var t = /firefox/i.test($r()), n = /Trident/i.test($r());
  if (n && No(e)) {
    var o = En(e);
    if (o.position === "fixed")
      return null;
  }
  var i = jf(e);
  for (Zr(i) && (i = i.host); No(i) && ["html", "body"].indexOf(Cn(i)) < 0; ) {
    var r = En(i);
    if (r.transform !== "none" || r.perspective !== "none" || r.contain === "paint" || ["transform", "perspective"].indexOf(r.willChange) !== -1 || t && r.willChange === "filter" || t && r.filter && r.filter !== "none")
      return i;
    i = i.parentNode;
  }
  return null;
}
function zf(e) {
  for (var t = It(e), n = mi(e); n && Wf(n) && En(n).position === "static"; )
    n = mi(n);
  return n && (Cn(n) === "html" || Cn(n) === "body" && En(n).position === "static") ? t : n || Bf(e) || t;
}
function Ff(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function Vf(e, t, n) {
  return Pf(e, Lf(t, n));
}
function qf() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
function Gf(e) {
  return Object.assign({}, qf(), e);
}
function Yf(e, t) {
  return t.reduce(function(n, o) {
    return n[o] = e, n;
  }, {});
}
var Kf = function(t, n) {
  return t = typeof t == "function" ? t(Object.assign({}, n.rects, {
    placement: n.placement
  })) : t, Gf(typeof t != "number" ? t : Yf(t, Va));
};
function Xf(e) {
  var t, n = e.state, o = e.name, i = e.options, r = n.elements.arrow, l = n.modifiersData.popperOffsets, _ = qa(n.placement), c = Ff(_), p = [xn, Ao].indexOf(_) >= 0, s = p ? "height" : "width";
  if (!(!r || !l)) {
    var h = Kf(i.padding, n), f = Hf(r), a = c === "y" ? Jr : xn, u = c === "y" ? Fa : Ao, y = n.rects.reference[s] + n.rects.reference[c] - l[c] - n.rects.popper[s], d = l[c] - n.rects.reference[c], v = zf(r), g = v ? c === "y" ? v.clientHeight || 0 : v.clientWidth || 0 : 0, k = y / 2 - d / 2, w = h[a], E = g - f[s] - h[u], $ = g / 2 - f[s] / 2 + k, x = Vf(w, $, E), m = c;
    n.modifiersData[o] = (t = {}, t[m] = x, t.centerOffset = x - $, t);
  }
}
function Jf(e) {
  var t = e.state, n = e.options, o = n.element, i = o === void 0 ? "[data-popper-arrow]" : o;
  i != null && (typeof i == "string" && (i = t.elements.popper.querySelector(i), !i) || !If(t.elements.popper, i) || (t.elements.arrow = i));
}
const Zf = {
  name: "arrow",
  enabled: !0,
  phase: "main",
  fn: Xf,
  effect: Jf,
  requires: ["popperOffsets"],
  requiresIfExists: ["preventOverflow"]
};
function Qf(e, t, n) {
  var o = qa(e), i = [xn, Jr].indexOf(o) >= 0 ? -1 : 1, r = typeof n == "function" ? n(Object.assign({}, t, {
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
function eu(e) {
  var t = e.state, n = e.options, o = e.name, i = n.offset, r = i === void 0 ? [0, 0] : i, l = Rf.reduce(function(s, h) {
    return s[h] = Qf(h, t.rects, r), s;
  }, {}), _ = l[t.placement], c = _.x, p = _.y;
  t.modifiersData.popperOffsets != null && (t.modifiersData.popperOffsets.x += c, t.modifiersData.popperOffsets.y += p), t.modifiersData[o] = l;
}
const tu = {
  name: "offset",
  enabled: !0,
  phase: "main",
  requires: ["popperOffsets"],
  fn: eu
};
var sr, I, Ya, cn, yi, Ro = {}, Ka = [], nu = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function et(e, t) {
  for (var n in t)
    e[n] = t[n];
  return e;
}
function Xa(e) {
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
  var r = { type: e, props: t, key: n, ref: o, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: i == null ? ++Ya : i };
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
function Ja(e) {
  var t, n;
  if ((e = e.__) != null && e.__c != null) {
    for (e.__e = e.__c.base = null, t = 0; t < e.__k.length; t++)
      if ((n = e.__k[t]) != null && n.__e != null) {
        e.__e = e.__c.base = n.__e;
        break;
      }
    return Ja(e);
  }
}
function bi(e) {
  (!e.__d && (e.__d = !0) && cn.push(e) && !Po.__r++ || yi !== I.debounceRendering) && ((yi = I.debounceRendering) || setTimeout)(Po);
}
function Po() {
  for (var e; Po.__r = cn.length; )
    e = cn.sort(function(t, n) {
      return t.__v.__b - n.__v.__b;
    }), cn = [], e.some(function(t) {
      var n, o, i, r, l, _;
      t.__d && (l = (r = (n = t).__v).__e, (_ = n.__P) && (o = [], (i = et({}, r)).__v = r.__v + 1, es(_, r, i, n.__n, _.ownerSVGElement !== void 0, r.__h != null ? [l] : null, o, l == null ? Sn(r) : l, r.__h), t_(o, r), r.__e != l && Ja(r)));
    });
}
function Za(e, t, n, o, i, r, l, _, c, p) {
  var s, h, f, a, u, y, d, v = o && o.__k || Ka, g = v.length;
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
      es(e, a, f = f || Ro, i, r, l, _, c, p), u = a.__e, (h = a.ref) && f.ref != h && (d || (d = []), f.ref && d.push(f.ref, null, a), d.push(h, a.__c || u, a)), u != null ? (y == null && (y = u), typeof a.type == "function" && a.__k === f.__k ? a.__d = c = Qa(a, c, e) : c = e_(e, a, f, v, u, c), typeof n.type == "function" && (n.__d = c)) : c && f.__e == c && c.parentNode != e && (c = Sn(f));
    }
  for (n.__e = y, s = g; s--; )
    v[s] != null && o_(v[s], v[s]);
  if (d)
    for (s = 0; s < d.length; s++)
      n_(d[s], d[++s], d[++s]);
}
function Qa(e, t, n) {
  for (var o, i = e.__k, r = 0; i && r < i.length; r++)
    (o = i[r]) && (o.__ = e, t = typeof o.type == "function" ? Qa(o, t, n) : e_(n, o, o, i, o.__e, t));
  return t;
}
function e_(e, t, n, o, i, r) {
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
function ou(e, t, n, o, i) {
  var r;
  for (r in n)
    r === "children" || r === "key" || r in t || Lo(e, r, null, n[r], o);
  for (r in t)
    i && typeof t[r] != "function" || r === "children" || r === "key" || r === "value" || r === "checked" || n[r] === t[r] || Lo(e, r, t[r], n[r], o);
}
function wi(e, t, n) {
  t[0] === "-" ? e.setProperty(t, n) : e[t] = n == null ? "" : typeof n != "number" || nu.test(t) ? n : n + "px";
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
            n && t in n || wi(e.style, t, "");
        if (n)
          for (t in n)
            o && n[t] === o[t] || wi(e.style, t, n[t]);
      }
    else if (t[0] === "o" && t[1] === "n")
      r = t !== (t = t.replace(/Capture$/, "")), t = t.toLowerCase() in e ? t.toLowerCase().slice(2) : t.slice(2), e.l || (e.l = {}), e.l[t + r] = n, n ? o || e.addEventListener(t, r ? $i : ki, r) : e.removeEventListener(t, r ? $i : ki, r);
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
function ki(e) {
  this.l[e.type + !1](I.event ? I.event(e) : e);
}
function $i(e) {
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
        if (d = t.props, v = (p = m.contextType) && o[p.__c], g = p ? v ? v.props.value : p.__ : o, n.__c ? y = (s = t.__c = n.__c).__ = s.__E : ("prototype" in m && m.prototype.render ? t.__c = s = new m(d, g) : (t.__c = s = new so(d, g), s.constructor = m, s.render = su), v && v.sub(s), s.props = d, s.state || (s.state = {}), s.context = g, s.__n = o, h = s.__d = !0, s.__h = [], s._sb = []), s.__s == null && (s.__s = s.state), m.getDerivedStateFromProps != null && (s.__s == s.state && (s.__s = et({}, s.__s)), et(s.__s, m.getDerivedStateFromProps(d, s.__s))), f = s.props, a = s.state, h)
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
        s.state = s.__s, s.getChildContext != null && (o = et(et({}, o), s.getChildContext())), h || s.getSnapshotBeforeUpdate == null || (u = s.getSnapshotBeforeUpdate(f, a)), x = p != null && p.type === ir && p.key == null ? p.props.children : p, Za(e, Array.isArray(x) ? x : [x], t, n, o, i, r, l, _, c), s.base = t.__e, t.__h = null, s.__h.length && l.push(s), y && (s.__E = s.__ = null), s.__e = !1;
      } else
        r == null && t.__v === n.__v ? (t.__k = n.__k, t.__e = n.__e) : t.__e = ru(n.__e, t, n, o, i, r, l, c);
    (p = I.diffed) && p(t);
  } catch (C) {
    t.__v = null, (c || r != null) && (t.__e = _, t.__h = !!c, r[r.indexOf(_)] = null), I.__e(C, t, n);
  }
}
function t_(e, t) {
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
function ru(e, t, n, o, i, r, l, _) {
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
    if (ou(e, f, h, i, _), s)
      t.__k = [];
    else if (u = t.props.children, Za(e, Array.isArray(u) ? u : [u], t, n, o, i && a !== "foreignObject", r, l, r ? r[0] : n.__k && Sn(n, 0), _), r != null)
      for (u = r.length; u--; )
        r[u] != null && Xa(r[u]);
    _ || ("value" in f && (u = f.value) !== void 0 && (u !== e.value || a === "progress" && !u || a === "option" && u !== h.value) && Lo(e, "value", u, h.value, !1), "checked" in f && (u = f.checked) !== void 0 && u !== e.checked && Lo(e, "checked", u, h.checked, !1));
  }
  return e;
}
function n_(e, t, n) {
  try {
    typeof e == "function" ? e(t) : e.current = t;
  } catch (o) {
    I.__e(o, n);
  }
}
function o_(e, t, n) {
  var o, i;
  if (I.unmount && I.unmount(e), (o = e.ref) && (o.current && o.current !== e.__e || n_(o, null, t)), (o = e.__c) != null) {
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
      o[i] && o_(o[i], t, n || typeof e.type != "function");
  n || e.__e == null || Xa(e.__e), e.__ = e.__e = e.__d = void 0;
}
function su(e, t, n) {
  return this.constructor(e, n);
}
function iu(e, t, n) {
  var o, i, r;
  I.__ && I.__(e, t), i = (o = typeof n == "function") ? null : n && n.__k || t.__k, r = [], es(t, e = (!o && n || t).__k = Qr(ir, null, [e]), i || Ro, Ro, t.ownerSVGElement !== void 0, !o && n ? [n] : i ? null : t.firstChild ? sr.call(t.childNodes) : null, r, !o && n ? n : i ? i.__e : t.firstChild, o), t_(r, e);
}
sr = Ka.slice, I = { __e: function(e, t, n, o) {
  for (var i, r, l; t = t.__; )
    if ((i = t.__c) && !i.__)
      try {
        if ((r = i.constructor) && r.getDerivedStateFromError != null && (i.setState(r.getDerivedStateFromError(e)), l = i.__d), i.componentDidCatch != null && (i.componentDidCatch(e, o || {}), l = i.__d), l)
          return i.__E = i;
      } catch (_) {
        e = _;
      }
  throw e;
} }, Ya = 0, so.prototype.setState = function(e, t) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = et({}, this.state), typeof e == "function" && (e = e(et({}, n), this.props)), e && et(n, e), e != null && this.__v && (t && this._sb.push(t), bi(this));
}, so.prototype.forceUpdate = function(e) {
  this.__v && (this.__e = !0, e && this.__h.push(e), bi(this));
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
var vt = Math.max, Oo = Math.min, Lt = Math.round;
function xr() {
  var e = navigator.userAgentData;
  return e != null && e.brands ? e.brands.map(function(t) {
    return t.brand + "/" + t.version;
  }).join(" ") : navigator.userAgent;
}
function r_() {
  return !/^((?!chrome|android).)*safari/i.test(xr());
}
function Ot(e, t, n) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  var o = e.getBoundingClientRect(), i = 1, r = 1;
  t && fe(e) && (i = e.offsetWidth > 0 && Lt(o.width) / e.offsetWidth || 1, r = e.offsetHeight > 0 && Lt(o.height) / e.offsetHeight || 1);
  var l = gt(e) ? ue(e) : window, _ = l.visualViewport, c = !r_() && n, p = (o.left + (c && _ ? _.offsetLeft : 0)) / i, s = (o.top + (c && _ ? _.offsetTop : 0)) / r, h = o.width / i, f = o.height / r;
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
function lu(e) {
  return {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  };
}
function au(e) {
  return e === ue(e) || !fe(e) ? ns(e) : lu(e);
}
function xe(e) {
  return e ? (e.nodeName || "").toLowerCase() : null;
}
function lt(e) {
  return ((gt(e) ? e.ownerDocument : e.document) || window.document).documentElement;
}
function os(e) {
  return Ot(lt(e)).left + ns(e).scrollLeft;
}
function He(e) {
  return ue(e).getComputedStyle(e);
}
function rs(e) {
  var t = He(e), n = t.overflow, o = t.overflowX, i = t.overflowY;
  return /auto|scroll|overlay|hidden/.test(n + i + o);
}
function _u(e) {
  var t = e.getBoundingClientRect(), n = Lt(t.width) / e.offsetWidth || 1, o = Lt(t.height) / e.offsetHeight || 1;
  return n !== 1 || o !== 1;
}
function cu(e, t, n) {
  n === void 0 && (n = !1);
  var o = fe(t), i = fe(t) && _u(t), r = lt(t), l = Ot(e, i, n), _ = {
    scrollLeft: 0,
    scrollTop: 0
  }, c = {
    x: 0,
    y: 0
  };
  return (o || !o && !n) && ((xe(t) !== "body" || rs(r)) && (_ = au(t)), fe(t) ? (c = Ot(t, !0), c.x += t.clientLeft, c.y += t.clientTop) : r && (c.x = os(r))), {
    x: l.left + _.scrollLeft - c.x,
    y: l.top + _.scrollTop - c.y,
    width: l.width,
    height: l.height
  };
}
function s_(e) {
  var t = Ot(e), n = e.offsetWidth, o = e.offsetHeight;
  return Math.abs(t.width - n) <= 1 && (n = t.width), Math.abs(t.height - o) <= 1 && (o = t.height), {
    x: e.offsetLeft,
    y: e.offsetTop,
    width: n,
    height: o
  };
}
function lr(e) {
  return xe(e) === "html" ? e : e.assignedSlot || e.parentNode || (ts(e) ? e.host : null) || lt(e);
}
function i_(e) {
  return ["html", "body", "#document"].indexOf(xe(e)) >= 0 ? e.ownerDocument.body : fe(e) && rs(e) ? e : i_(lr(e));
}
function fn(e, t) {
  var n;
  t === void 0 && (t = []);
  var o = i_(e), i = o === ((n = e.ownerDocument) == null ? void 0 : n.body), r = ue(o), l = i ? [r].concat(r.visualViewport || [], rs(o) ? o : []) : o, _ = t.concat(l);
  return i ? _ : _.concat(fn(lr(l)));
}
function fu(e) {
  return ["table", "td", "th"].indexOf(xe(e)) >= 0;
}
function xi(e) {
  return !fe(e) || He(e).position === "fixed" ? null : e.offsetParent;
}
function uu(e) {
  var t = /firefox/i.test(xr()), n = /Trident/i.test(xr());
  if (n && fe(e)) {
    var o = He(e);
    if (o.position === "fixed")
      return null;
  }
  var i = lr(e);
  for (ts(i) && (i = i.host); fe(i) && ["html", "body"].indexOf(xe(i)) < 0; ) {
    var r = He(i);
    if (r.transform !== "none" || r.perspective !== "none" || r.contain === "paint" || ["transform", "perspective"].indexOf(r.willChange) !== -1 || t && r.willChange === "filter" || t && r.filter && r.filter !== "none")
      return i;
    i = i.parentNode;
  }
  return null;
}
function ar(e) {
  for (var t = ue(e), n = xi(e); n && fu(n) && He(n).position === "static"; )
    n = xi(n);
  return n && (xe(n) === "html" || xe(n) === "body" && He(n).position === "static") ? t : n || uu(e) || t;
}
var ve = "top", Ce = "bottom", it = "right", De = "left", ss = "auto", _r = [ve, Ce, it, De], Dt = "start", Mn = "end", pu = "clippingParents", l_ = "viewport", Ft = "popper", hu = "reference", Ci = /* @__PURE__ */ _r.reduce(function(e, t) {
  return e.concat([t + "-" + Dt, t + "-" + Mn]);
}, []), du = /* @__PURE__ */ [].concat(_r, [ss]).reduce(function(e, t) {
  return e.concat([t, t + "-" + Dt, t + "-" + Mn]);
}, []), vu = "beforeRead", gu = "read", mu = "afterRead", yu = "beforeMain", bu = "main", wu = "afterMain", ku = "beforeWrite", $u = "write", xu = "afterWrite", Cu = [vu, gu, mu, yu, bu, wu, ku, $u, xu];
function Eu(e) {
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
function Su(e) {
  var t = Eu(e);
  return Cu.reduce(function(n, o) {
    return n.concat(t.filter(function(i) {
      return i.phase === o;
    }));
  }, []);
}
function Mu(e) {
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
function Tu(e) {
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
function Au(e, t) {
  var n = ue(e), o = lt(e), i = n.visualViewport, r = o.clientWidth, l = o.clientHeight, _ = 0, c = 0;
  if (i) {
    r = i.width, l = i.height;
    var p = r_();
    (p || !p && t === "fixed") && (_ = i.offsetLeft, c = i.offsetTop);
  }
  return {
    width: r,
    height: l,
    x: _ + os(e),
    y: c
  };
}
function Nu(e) {
  var t, n = lt(e), o = ns(e), i = (t = e.ownerDocument) == null ? void 0 : t.body, r = vt(n.scrollWidth, n.clientWidth, i ? i.scrollWidth : 0, i ? i.clientWidth : 0), l = vt(n.scrollHeight, n.clientHeight, i ? i.scrollHeight : 0, i ? i.clientHeight : 0), _ = -o.scrollLeft + os(e), c = -o.scrollTop;
  return He(i || n).direction === "rtl" && (_ += vt(n.clientWidth, i ? i.clientWidth : 0) - r), {
    width: r,
    height: l,
    x: _,
    y: c
  };
}
function Ru(e, t) {
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
function Pu(e, t) {
  var n = Ot(e, !1, t === "fixed");
  return n.top = n.top + e.clientTop, n.left = n.left + e.clientLeft, n.bottom = n.top + e.clientHeight, n.right = n.left + e.clientWidth, n.width = e.clientWidth, n.height = e.clientHeight, n.x = n.left, n.y = n.top, n;
}
function Ei(e, t, n) {
  return t === l_ ? Cr(Au(e, n)) : gt(t) ? Pu(t, n) : Cr(Nu(lt(e)));
}
function Lu(e) {
  var t = fn(lr(e)), n = ["absolute", "fixed"].indexOf(He(e).position) >= 0, o = n && fe(e) ? ar(e) : e;
  return gt(o) ? t.filter(function(i) {
    return gt(i) && Ru(i, o) && xe(i) !== "body";
  }) : [];
}
function Ou(e, t, n, o) {
  var i = t === "clippingParents" ? Lu(e) : [].concat(t), r = [].concat(i, [n]), l = r[0], _ = r.reduce(function(c, p) {
    var s = Ei(e, p, o);
    return c.top = vt(s.top, c.top), c.right = Oo(s.right, c.right), c.bottom = Oo(s.bottom, c.bottom), c.left = vt(s.left, c.left), c;
  }, Ei(e, l, o));
  return _.width = _.right - _.left, _.height = _.bottom - _.top, _.x = _.left, _.y = _.top, _;
}
function Ht(e) {
  return e.split("-")[1];
}
function a_(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function __(e) {
  var t = e.reference, n = e.element, o = e.placement, i = o ? rt(o) : null, r = o ? Ht(o) : null, l = t.x + t.width / 2 - n.width / 2, _ = t.y + t.height / 2 - n.height / 2, c;
  switch (i) {
    case ve:
      c = {
        x: l,
        y: t.y - n.height
      };
      break;
    case Ce:
      c = {
        x: l,
        y: t.y + t.height
      };
      break;
    case it:
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
  var p = i ? a_(i) : null;
  if (p != null) {
    var s = p === "y" ? "height" : "width";
    switch (r) {
      case Dt:
        c[p] = c[p] - (t[s] / 2 - n[s] / 2);
        break;
      case Mn:
        c[p] = c[p] + (t[s] / 2 - n[s] / 2);
        break;
    }
  }
  return c;
}
function c_() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
function Du(e) {
  return Object.assign({}, c_(), e);
}
function Hu(e, t) {
  return t.reduce(function(n, o) {
    return n[o] = e, n;
  }, {});
}
function is(e, t) {
  t === void 0 && (t = {});
  var n = t, o = n.placement, i = o === void 0 ? e.placement : o, r = n.strategy, l = r === void 0 ? e.strategy : r, _ = n.boundary, c = _ === void 0 ? pu : _, p = n.rootBoundary, s = p === void 0 ? l_ : p, h = n.elementContext, f = h === void 0 ? Ft : h, a = n.altBoundary, u = a === void 0 ? !1 : a, y = n.padding, d = y === void 0 ? 0 : y, v = Du(typeof d != "number" ? d : Hu(d, _r)), g = f === Ft ? hu : Ft, k = e.rects.popper, w = e.elements[u ? g : f], E = Ou(gt(w) ? w : w.contextElement || lt(e.elements.popper), c, s, l), $ = Ot(e.elements.reference), x = __({
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
      var pe = [it, Ce].indexOf(K) >= 0 ? 1 : -1, Q = [ve, Ce].indexOf(K) >= 0 ? "y" : "x";
      T[K] += Z[Q] * pe;
    });
  }
  return T;
}
var Si = {
  placement: "bottom",
  modifiers: [],
  strategy: "absolute"
};
function Mi() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return !t.some(function(o) {
    return !(o && typeof o.getBoundingClientRect == "function");
  });
}
function Iu(e) {
  e === void 0 && (e = {});
  var t = e, n = t.defaultModifiers, o = n === void 0 ? [] : n, i = t.defaultOptions, r = i === void 0 ? Si : i;
  return function(_, c, p) {
    p === void 0 && (p = r);
    var s = {
      placement: "bottom",
      orderedModifiers: [],
      options: Object.assign({}, Si, r),
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
        var k = Su(Tu([].concat(o, s.options.modifiers)));
        return s.orderedModifiers = k.filter(function(w) {
          return w.enabled;
        }), u(), a.update();
      },
      forceUpdate: function() {
        if (!f) {
          var v = s.elements, g = v.reference, k = v.popper;
          if (!!Mi(g, k)) {
            s.rects = {
              reference: cu(g, ar(k), s.options.strategy === "fixed"),
              popper: s_(k)
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
      update: Mu(function() {
        return new Promise(function(d) {
          a.forceUpdate(), d(s);
        });
      }),
      destroy: function() {
        y(), f = !0;
      }
    };
    if (!Mi(_, c))
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
function Wu(e) {
  var t = e.state, n = e.instance, o = e.options, i = o.scroll, r = i === void 0 ? !0 : i, l = o.resize, _ = l === void 0 ? !0 : l, c = ue(t.elements.popper), p = [].concat(t.scrollParents.reference, t.scrollParents.popper);
  return r && p.forEach(function(s) {
    s.addEventListener("scroll", n.update, Gn);
  }), _ && c.addEventListener("resize", n.update, Gn), function() {
    r && p.forEach(function(s) {
      s.removeEventListener("scroll", n.update, Gn);
    }), _ && c.removeEventListener("resize", n.update, Gn);
  };
}
const Uu = {
  name: "eventListeners",
  enabled: !0,
  phase: "write",
  fn: function() {
  },
  effect: Wu,
  data: {}
};
function ju(e) {
  var t = e.state, n = e.name;
  t.modifiersData[n] = __({
    reference: t.rects.reference,
    element: t.rects.popper,
    strategy: "absolute",
    placement: t.placement
  });
}
const Bu = {
  name: "popperOffsets",
  enabled: !0,
  phase: "read",
  fn: ju,
  data: {}
};
var zu = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function Fu(e) {
  var t = e.x, n = e.y, o = window, i = o.devicePixelRatio || 1;
  return {
    x: Lt(t * i) / i || 0,
    y: Lt(n * i) / i || 0
  };
}
function Ti(e) {
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
    if ($ === ue(n) && ($ = lt(n), He($).position !== "static" && _ === "absolute" && (x = "scrollHeight", m = "scrollWidth")), $ = $, i === ve || (i === De || i === it) && r === Mn) {
      w = Ce;
      var C = h && $ === E && E.visualViewport ? E.visualViewport.height : $[x];
      y -= C - o.height, y *= c ? 1 : -1;
    }
    if (i === De || (i === ve || i === Ce) && r === Mn) {
      k = it;
      var T = h && $ === E && E.visualViewport ? E.visualViewport.width : $[m];
      a -= T - o.width, a *= c ? 1 : -1;
    }
  }
  var D = Object.assign({
    position: _
  }, p && zu), Z = s === !0 ? Fu({
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
function Vu(e) {
  var t = e.state, n = e.options, o = n.gpuAcceleration, i = o === void 0 ? !0 : o, r = n.adaptive, l = r === void 0 ? !0 : r, _ = n.roundOffsets, c = _ === void 0 ? !0 : _, p = {
    placement: rt(t.placement),
    variation: Ht(t.placement),
    popper: t.elements.popper,
    popperRect: t.rects.popper,
    gpuAcceleration: i,
    isFixed: t.options.strategy === "fixed"
  };
  t.modifiersData.popperOffsets != null && (t.styles.popper = Object.assign({}, t.styles.popper, Ti(Object.assign({}, p, {
    offsets: t.modifiersData.popperOffsets,
    position: t.options.strategy,
    adaptive: l,
    roundOffsets: c
  })))), t.modifiersData.arrow != null && (t.styles.arrow = Object.assign({}, t.styles.arrow, Ti(Object.assign({}, p, {
    offsets: t.modifiersData.arrow,
    position: "absolute",
    adaptive: !1,
    roundOffsets: c
  })))), t.attributes.popper = Object.assign({}, t.attributes.popper, {
    "data-popper-placement": t.placement
  });
}
const qu = {
  name: "computeStyles",
  enabled: !0,
  phase: "beforeWrite",
  fn: Vu,
  data: {}
};
function Gu(e) {
  var t = e.state;
  Object.keys(t.elements).forEach(function(n) {
    var o = t.styles[n] || {}, i = t.attributes[n] || {}, r = t.elements[n];
    !fe(r) || !xe(r) || (Object.assign(r.style, o), Object.keys(i).forEach(function(l) {
      var _ = i[l];
      _ === !1 ? r.removeAttribute(l) : r.setAttribute(l, _ === !0 ? "" : _);
    }));
  });
}
function Yu(e) {
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
      !fe(i) || !xe(i) || (Object.assign(i.style, _), Object.keys(r).forEach(function(c) {
        i.removeAttribute(c);
      }));
    });
  };
}
const Ku = {
  name: "applyStyles",
  enabled: !0,
  phase: "write",
  fn: Gu,
  effect: Yu,
  requires: ["computeStyles"]
};
var Xu = [Uu, Bu, qu, Ku], f_ = /* @__PURE__ */ Iu({
  defaultModifiers: Xu
});
function Ju(e) {
  return e === "x" ? "y" : "x";
}
function io(e, t, n) {
  return vt(e, Oo(t, n));
}
function Zu(e, t, n) {
  var o = io(e, t, n);
  return o > n ? n : o;
}
function Qu(e) {
  var t = e.state, n = e.options, o = e.name, i = n.mainAxis, r = i === void 0 ? !0 : i, l = n.altAxis, _ = l === void 0 ? !1 : l, c = n.boundary, p = n.rootBoundary, s = n.altBoundary, h = n.padding, f = n.tether, a = f === void 0 ? !0 : f, u = n.tetherOffset, y = u === void 0 ? 0 : u, d = is(t, {
    boundary: c,
    rootBoundary: p,
    padding: h,
    altBoundary: s
  }), v = rt(t.placement), g = Ht(t.placement), k = !g, w = a_(v), E = Ju(w), $ = t.modifiersData.popperOffsets, x = t.rects.reference, m = t.rects.popper, C = typeof y == "function" ? y(Object.assign({}, t.rects, {
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
      var K, pe = w === "y" ? ve : De, Q = w === "y" ? Ce : it, W = w === "y" ? "height" : "width", oe = $[w], Ie = oe + d[pe], Ee = oe - d[Q], mt = a ? -m[W] / 2 : 0, Se = g === Dt ? x[W] : m[W], We = g === Dt ? -m[W] : -x[W], at = t.elements.arrow, Me = a && at ? s_(at) : {
        width: 0,
        height: 0
      }, A = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : c_(), O = A[pe], X = A[Q], ee = io(0, x[W], Me[W]), he = k ? x[W] / 2 - mt - ee - O - T.mainAxis : Se - ee - O - T.mainAxis, _t = k ? -x[W] / 2 + mt + ee + X + T.mainAxis : We + ee + X + T.mainAxis, Te = t.elements.arrow && ar(t.elements.arrow), Ut = Te ? w === "y" ? Te.clientTop || 0 : Te.clientLeft || 0 : 0, zn = (K = D == null ? void 0 : D[w]) != null ? K : 0, L = oe + he - zn - Ut, Fn = oe + _t - zn, jt = io(a ? Oo(Ie, L) : Ie, oe, a ? vt(Ee, Fn) : Ee);
      $[w] = jt, Z[w] = jt - oe;
    }
    if (_) {
      var Bt, Vn = w === "x" ? ve : De, yt = w === "x" ? Ce : it, me = $[E], ct = E === "y" ? "height" : "width", zt = me + d[Vn], ps = me - d[yt], fr = [ve, De].indexOf(v) !== -1, hs = (Bt = D == null ? void 0 : D[E]) != null ? Bt : 0, ds = fr ? zt : me - x[ct] - m[ct] - hs + T.altAxis, vs = fr ? me + x[ct] + m[ct] - hs - T.altAxis : ps, gs = a && fr ? Zu(ds, me, vs) : io(a ? ds : zt, me, a ? vs : ps);
      $[E] = gs, Z[E] = gs - me;
    }
    t.modifiersData[o] = Z;
  }
}
const Er = {
  name: "preventOverflow",
  enabled: !0,
  phase: "main",
  fn: Qu,
  requiresIfExists: ["offset"]
};
var ep = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function lo(e) {
  return e.replace(/left|right|bottom|top/g, function(t) {
    return ep[t];
  });
}
var tp = {
  start: "end",
  end: "start"
};
function Ai(e) {
  return e.replace(/start|end/g, function(t) {
    return tp[t];
  });
}
function np(e, t) {
  t === void 0 && (t = {});
  var n = t, o = n.placement, i = n.boundary, r = n.rootBoundary, l = n.padding, _ = n.flipVariations, c = n.allowedAutoPlacements, p = c === void 0 ? du : c, s = Ht(o), h = s ? _ ? Ci : Ci.filter(function(u) {
    return Ht(u) === s;
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
function op(e) {
  if (rt(e) === ss)
    return [];
  var t = lo(e);
  return [Ai(e), t, Ai(t)];
}
function rp(e) {
  var t = e.state, n = e.options, o = e.name;
  if (!t.modifiersData[o]._skip) {
    for (var i = n.mainAxis, r = i === void 0 ? !0 : i, l = n.altAxis, _ = l === void 0 ? !0 : l, c = n.fallbackPlacements, p = n.padding, s = n.boundary, h = n.rootBoundary, f = n.altBoundary, a = n.flipVariations, u = a === void 0 ? !0 : a, y = n.allowedAutoPlacements, d = t.options.placement, v = rt(d), g = v === d, k = c || (g || !u ? [lo(d)] : op(d)), w = [d].concat(k).reduce(function(Me, A) {
      return Me.concat(rt(A) === ss ? np(t, {
        placement: A,
        boundary: s,
        rootBoundary: h,
        padding: p,
        flipVariations: u,
        allowedAutoPlacements: y
      }) : A);
    }, []), E = t.rects.reference, $ = t.rects.popper, x = /* @__PURE__ */ new Map(), m = !0, C = w[0], T = 0; T < w.length; T++) {
      var D = w[T], Z = rt(D), K = Ht(D) === Dt, pe = [ve, Ce].indexOf(Z) >= 0, Q = pe ? "width" : "height", W = is(t, {
        placement: D,
        boundary: s,
        rootBoundary: h,
        altBoundary: f,
        padding: p
      }), oe = pe ? K ? it : De : K ? Ce : ve;
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
        var at = Se(We);
        if (at === "break")
          break;
      }
    t.placement !== C && (t.modifiersData[o]._skip = !0, t.placement = C, t.reset = !0);
  }
}
const u_ = {
  name: "flip",
  enabled: !0,
  phase: "main",
  fn: rp,
  requiresIfExists: ["offset"],
  data: {
    _skip: !1
  }
};
function sp(e) {
  return e.button === 2;
}
var Be;
class ip extends Ur {
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
      modifiers: [Er, u_],
      placement: "right-start"
    };
  }
  _getPopperElement() {
    var n;
    return (n = this.ref.current) == null ? void 0 : n.parentElement;
  }
  _createPopper() {
    const n = this._getPopperOptions();
    return b(this, Be) ? b(this, Be).setOptions(n) : this.ref.current && N(this, Be, f_(this._getPopperElement(), this.ref.current, n)), b(this, Be);
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
var ze, ae, Ct, Ln;
class ie extends Yt {
  constructor() {
    super(...arguments);
    M(this, ze, void 0);
    M(this, ae, void 0);
    M(this, Ct, void 0);
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
        n ? u_ : null,
        ...i
      ].filter(Boolean),
      placement: this.options.placement,
      strategy: this.options.strategy
    };
  }
  _createPopper() {
    const n = this._getPopperOptions();
    return b(this, ae) ? b(this, ae).setOptions(n) : N(this, ae, f_(this._getPopperElement(), this.menu, n)), b(this, ae);
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
    return !n || this.emit("updateMenu", { menu: n, trigger: this.trigger, contextmenu: this }).defaultPrevented ? !1 : (iu(Qr(ip, n), this.menu), !0);
  }
  _getPopperElement() {
    return b(this, Ct) || N(this, Ct, {
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
    }), b(this, Ct);
  }
  static clear(n) {
    var c, p;
    n instanceof Event && (n = { event: n });
    const { event: o, exclude: i, ignoreSelector: r = ".not-hide-menu" } = n || {};
    if (o && r && ((p = (c = o.target).closest) == null ? void 0 : p.call(c, r)) || o && sp(o))
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
ze = new WeakMap(), ae = new WeakMap(), Ct = new WeakMap(), Ln = new WeakMap(), S(ie, "NAME", "contextmenu"), S(ie, "EVENTS", !0), S(ie, "DEFAULT", {
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
var Et, St, Mt, zo, p_;
const us = class extends ie {
  constructor() {
    super(...arguments);
    M(this, zo);
    M(this, Et, !1);
    M(this, St, 0);
    S(this, "hideLater", () => {
      b(this, Mt).call(this), N(this, St, window.setTimeout(this.hide.bind(this), 100));
    });
    M(this, Mt, () => {
      clearTimeout(b(this, St)), N(this, St, 0);
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
    return i && (!b(this, Et) && this.isHover && J(this, zo, p_).call(this), this.element.classList.add(this.elementShowClass)), i;
  }
  hide() {
    const n = super.hide();
    return n && this.element.classList.remove(this.elementShowClass), n;
  }
  toggle(n, o) {
    return this.isShown ? this.hide() : this.show(n, { event: n, ...o });
  }
  destroy() {
    b(this, Et) && (this.element.removeEventListener("mouseleave", this.hideLater), this.menu.removeEventListener("mouseenter", b(this, Mt)), this.menu.removeEventListener("mouseleave", this.hideLater)), super.destroy();
  }
  _getArrowSize() {
    const { arrow: n } = this.options;
    return n ? typeof n == "number" ? n : 5 : 0;
  }
  _getPopperOptions() {
    var i;
    const n = super._getPopperOptions(), o = this._getArrowSize();
    return o && n.modifiers.push({ ...Zf, options: {
      padding: o,
      element: ".arrow"
    } }, {
      ...tu,
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
Et = new WeakMap(), St = new WeakMap(), Mt = new WeakMap(), zo = new WeakSet(), p_ = function() {
  const { menu: n } = this;
  n.addEventListener("mouseenter", b(this, Mt)), n.addEventListener("mouseleave", this.hideLater), this.element.addEventListener("mouseleave", this.hideLater), N(this, Et, !0);
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
var On, Tt;
class lp extends _n {
  constructor(n) {
    var o;
    super(n);
    M(this, On, void 0);
    M(this, Tt, xf());
    this.state = { placement: ((o = n.dropdown) == null ? void 0 : o.placement) || "", show: !1 };
  }
  get ref() {
    return b(this, Tt);
  }
  get triggerElement() {
    return b(this, Tt).current;
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
      ref: b(this, Tt)
    };
  }
  render() {
    const { children: n, ...o } = this.beforeRender();
    return /* @__PURE__ */ Da("div", {
      ...o
    }, n);
  }
}
On = new WeakMap(), Tt = new WeakMap();
class ap extends lp {
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
    return o.caret = i, /* @__PURE__ */ Da(st, {
      ...o
    });
  }
}
function h_({
  key: e,
  type: t,
  btnType: n,
  ...o
}) {
  return /* @__PURE__ */ rr(ap, {
    type: n,
    ...o
  });
}
function _p({
  key: e,
  type: t,
  btnType: n,
  ...o
}) {
  return /* @__PURE__ */ rr(va, {
    type: n,
    ...o
  });
}
class ft extends Oe {
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
S(ft, "ItemComponents", {
  item: kf,
  dropdown: h_,
  "btn-group": _p
}), S(ft, "ROOT_TAG", "nav"), S(ft, "NAME", "toolbar"), S(ft, "defaultProps", {
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
function cp({
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
  return _.text === void 0 && !_.icon && i && (_.text = typeof i == "function" ? i(c) : ce(i, c)), _.url === void 0 && l && (_.url = typeof l == "function" ? l(c) : ce(l, c)), _.disabled === void 0 && (_.disabled = o !== void 0 && c.page === r.page), /* @__PURE__ */ ot(st, {
    type: n,
    ..._
  });
}
const Ae = 24 * 60 * 60 * 1e3, le = (e) => e ? (e instanceof Date || (typeof e == "string" && (e = e.trim(), /^\d+$/.test(e) && (e = Number.parseInt(e, 10))), typeof e == "number" && e < 1e10 && (e *= 1e3), e = new Date(e)), e) : new Date(), Bn = (e, t = new Date()) => (e = le(e), t = le(t), e.getFullYear() === t.getFullYear() && e.getMonth() === t.getMonth() && e.getDate() === t.getDate()), Ni = (e, t = new Date()) => le(e).getFullYear() === le(t).getFullYear(), fp = (e, t = new Date()) => (e = le(e), t = le(t), e.getFullYear() === t.getFullYear() && e.getMonth() === t.getMonth()), Zp = (e, t = new Date()) => {
  e = le(e), t = le(t);
  const n = 1e3 * 60 * 60 * 24, o = Math.floor(e.getTime() / n), i = Math.floor(t.getTime() / n);
  return Math.floor((o + 4) / 7) === Math.floor((i + 4) / 7);
}, Qp = (e, t) => Bn(le(t), e), eh = (e, t) => Bn(le(t).getTime() - Ae, e), th = (e, t) => Bn(le(t).getTime() + Ae, e), nh = (e, t) => Bn(le(t).getTime() - 2 * Ae, e), Sr = (e, t = "yyyy-MM-dd hh:mm") => {
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
}, oh = (e, t, n) => {
  const o = {
    full: "yyyy-M-d",
    month: "M-d",
    day: "d",
    str: "{0} ~ {1}",
    ...n
  }, i = Sr(e, Ni(e) ? o.month : o.full);
  if (Bn(e, t))
    return i;
  const r = Sr(t, Ni(e, t) ? fp(e, t) ? o.day : o.month : o.full);
  return o.str.replace("{0}", i).replace("{1}", r);
}, rh = (e) => {
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
}, Ri = (e, t, n = !0, o = Date.now()) => {
  switch (t) {
    case "year":
      return e *= 365, Ri(e, "day", n, o);
    case "quarter":
      e *= 3;
    case "month":
      return e *= 30, Ri(e, "day", n, o);
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
function up({
  key: e,
  type: t,
  page: n,
  text: o = "",
  pagerInfo: i,
  children: r,
  ...l
}) {
  const _ = cr(i, n);
  return o = typeof o == "function" ? o(_) : ce(o, _), /* @__PURE__ */ ot(kl, {
    ...l
  }, r, o);
}
function pp({
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
          r && (l.url = typeof r == "function" ? r(a) : ce(r, a)), h.push(/* @__PURE__ */ ot(st, {
            type: n,
            ...l
          }));
        }
        return h;
      } else
        return l.text = "", l.icon = "icon-ellipsis-h", l.disabled = !0, /* @__PURE__ */ ot(st, {
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
function hp({
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
  return r.text = typeof l == "function" ? l(t) : ce(l, t), i.menu = { ...i.menu, className: P((c = i.menu) == null ? void 0 : c.className, "pager-size-menu") }, /* @__PURE__ */ ot(h_, {
    type: "dropdown",
    dropdown: i,
    ...r
  });
}
class dp extends ln {
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
    }), /* @__PURE__ */ ot(st, {
      type: o,
      ...l,
      onClick: this.onUpdatePage.bind(this)
    }));
  }
}
class ao extends ft {
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
  ...ft.ItemComponents,
  link: cp,
  info: up,
  nav: pp,
  "size-menu": hp,
  goto: dp
});
class Pi extends ge {
}
S(Pi, "NAME", "pager"), S(Pi, "Component", ao);
class Li extends ge {
}
S(Li, "NAME", "toolbar"), S(Li, "Component", ft);
var ls, G, d_, v_, un, Oi, g_ = {}, m_ = [], vp = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function tt(e, t) {
  for (var n in t)
    e[n] = t[n];
  return e;
}
function y_(e) {
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
  var r = { type: e, props: t, key: n, ref: o, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: i == null ? ++d_ : i };
  return i == null && G.vnode != null && G.vnode(r), r;
}
function gp() {
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
function b_(e) {
  var t, n;
  if ((e = e.__) != null && e.__c != null) {
    for (e.__e = e.__c.base = null, t = 0; t < e.__k.length; t++)
      if ((n = e.__k[t]) != null && n.__e != null) {
        e.__e = e.__c.base = n.__e;
        break;
      }
    return b_(e);
  }
}
function Di(e) {
  (!e.__d && (e.__d = !0) && un.push(e) && !Do.__r++ || Oi !== G.debounceRendering) && ((Oi = G.debounceRendering) || setTimeout)(Do);
}
function Do() {
  for (var e; Do.__r = un.length; )
    e = un.sort(function(t, n) {
      return t.__v.__b - n.__v.__b;
    }), un = [], e.some(function(t) {
      var n, o, i, r, l, _;
      t.__d && (l = (r = (n = t).__v).__e, (_ = n.__P) && (o = [], (i = tt({}, r)).__v = r.__v + 1, x_(_, r, i, n.__n, _.ownerSVGElement !== void 0, r.__h != null ? [l] : null, o, l == null ? Tn(r) : l, r.__h), yp(o, r), r.__e != l && b_(r)));
    });
}
function w_(e, t, n, o, i, r, l, _, c, p) {
  var s, h, f, a, u, y, d, v = o && o.__k || m_, g = v.length;
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
      x_(e, a, f = f || g_, i, r, l, _, c, p), u = a.__e, (h = a.ref) && f.ref != h && (d || (d = []), f.ref && d.push(f.ref, null, a), d.push(h, a.__c || u, a)), u != null ? (y == null && (y = u), typeof a.type == "function" && a.__k === f.__k ? a.__d = c = k_(a, c, e) : c = $_(e, a, f, v, u, c), typeof n.type == "function" && (n.__d = c)) : c && f.__e == c && c.parentNode != e && (c = Tn(f));
    }
  for (n.__e = y, s = g; s--; )
    v[s] != null && E_(v[s], v[s]);
  if (d)
    for (s = 0; s < d.length; s++)
      C_(d[s], d[++s], d[++s]);
}
function k_(e, t, n) {
  for (var o, i = e.__k, r = 0; i && r < i.length; r++)
    (o = i[r]) && (o.__ = e, t = typeof o.type == "function" ? k_(o, t, n) : $_(n, o, o, i, o.__e, t));
  return t;
}
function $_(e, t, n, o, i, r) {
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
function mp(e, t, n, o, i) {
  var r;
  for (r in n)
    r === "children" || r === "key" || r in t || Ho(e, r, null, n[r], o);
  for (r in t)
    i && typeof t[r] != "function" || r === "children" || r === "key" || r === "value" || r === "checked" || n[r] === t[r] || Ho(e, r, t[r], n[r], o);
}
function Hi(e, t, n) {
  t[0] === "-" ? e.setProperty(t, n) : e[t] = n == null ? "" : typeof n != "number" || vp.test(t) ? n : n + "px";
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
            n && t in n || Hi(e.style, t, "");
        if (n)
          for (t in n)
            o && n[t] === o[t] || Hi(e.style, t, n[t]);
      }
    else if (t[0] === "o" && t[1] === "n")
      r = t !== (t = t.replace(/Capture$/, "")), t = t.toLowerCase() in e ? t.toLowerCase().slice(2) : t.slice(2), e.l || (e.l = {}), e.l[t + r] = n, n ? o || e.addEventListener(t, r ? Wi : Ii, r) : e.removeEventListener(t, r ? Wi : Ii, r);
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
function Ii(e) {
  this.l[e.type + !1](G.event ? G.event(e) : e);
}
function Wi(e) {
  this.l[e.type + !0](G.event ? G.event(e) : e);
}
function x_(e, t, n, o, i, r, l, _, c) {
  var p, s, h, f, a, u, y, d, v, g, k, w, E, $, x, m = t.type;
  if (t.constructor !== void 0)
    return null;
  n.__h != null && (c = n.__h, _ = t.__e = n.__e, t.__h = null, r = [_]), (p = G.__b) && p(t);
  try {
    e:
      if (typeof m == "function") {
        if (d = t.props, v = (p = m.contextType) && o[p.__c], g = p ? v ? v.props.value : p.__ : o, n.__c ? y = (s = t.__c = n.__c).__ = s.__E : ("prototype" in m && m.prototype.render ? t.__c = s = new m(d, g) : (t.__c = s = new pn(d, g), s.constructor = m, s.render = wp), v && v.sub(s), s.props = d, s.state || (s.state = {}), s.context = g, s.__n = o, h = s.__d = !0, s.__h = [], s._sb = []), s.__s == null && (s.__s = s.state), m.getDerivedStateFromProps != null && (s.__s == s.state && (s.__s = tt({}, s.__s)), tt(s.__s, m.getDerivedStateFromProps(d, s.__s))), f = s.props, a = s.state, h)
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
        s.state = s.__s, s.getChildContext != null && (o = tt(tt({}, o), s.getChildContext())), h || s.getSnapshotBeforeUpdate == null || (u = s.getSnapshotBeforeUpdate(f, a)), x = p != null && p.type === as && p.key == null ? p.props.children : p, w_(e, Array.isArray(x) ? x : [x], t, n, o, i, r, l, _, c), s.base = t.__e, t.__h = null, s.__h.length && l.push(s), y && (s.__E = s.__ = null), s.__e = !1;
      } else
        r == null && t.__v === n.__v ? (t.__k = n.__k, t.__e = n.__e) : t.__e = bp(n.__e, t, n, o, i, r, l, c);
    (p = G.diffed) && p(t);
  } catch (C) {
    t.__v = null, (c || r != null) && (t.__e = _, t.__h = !!c, r[r.indexOf(_)] = null), G.__e(C, t, n);
  }
}
function yp(e, t) {
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
function bp(e, t, n, o, i, r, l, _) {
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
    if (r = r && ls.call(e.childNodes), p = (h = n.props || g_).dangerouslySetInnerHTML, s = f.dangerouslySetInnerHTML, !_) {
      if (r != null)
        for (h = {}, u = 0; u < e.attributes.length; u++)
          h[e.attributes[u].name] = e.attributes[u].value;
      (s || p) && (s && (p && s.__html == p.__html || s.__html === e.innerHTML) || (e.innerHTML = s && s.__html || ""));
    }
    if (mp(e, f, h, i, _), s)
      t.__k = [];
    else if (u = t.props.children, w_(e, Array.isArray(u) ? u : [u], t, n, o, i && a !== "foreignObject", r, l, r ? r[0] : n.__k && Tn(n, 0), _), r != null)
      for (u = r.length; u--; )
        r[u] != null && y_(r[u]);
    _ || ("value" in f && (u = f.value) !== void 0 && (u !== e.value || a === "progress" && !u || a === "option" && u !== h.value) && Ho(e, "value", u, h.value, !1), "checked" in f && (u = f.checked) !== void 0 && u !== e.checked && Ho(e, "checked", u, h.checked, !1));
  }
  return e;
}
function C_(e, t, n) {
  try {
    typeof e == "function" ? e(t) : e.current = t;
  } catch (o) {
    G.__e(o, n);
  }
}
function E_(e, t, n) {
  var o, i;
  if (G.unmount && G.unmount(e), (o = e.ref) && (o.current && o.current !== e.__e || C_(o, null, t)), (o = e.__c) != null) {
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
      o[i] && E_(o[i], t, n || typeof e.type != "function");
  n || e.__e == null || y_(e.__e), e.__ = e.__e = e.__d = void 0;
}
function wp(e, t, n) {
  return this.constructor(e, n);
}
ls = m_.slice, G = { __e: function(e, t, n, o) {
  for (var i, r, l; t = t.__; )
    if ((i = t.__c) && !i.__)
      try {
        if ((r = i.constructor) && r.getDerivedStateFromError != null && (i.setState(r.getDerivedStateFromError(e)), l = i.__d), i.componentDidCatch != null && (i.componentDidCatch(e, o || {}), l = i.__d), l)
          return i.__E = i;
      } catch (_) {
        e = _;
      }
  throw e;
} }, d_ = 0, v_ = function(e) {
  return e != null && e.constructor === void 0;
}, pn.prototype.setState = function(e, t) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = tt({}, this.state), typeof e == "function" && (e = e(tt({}, n), this.props)), e && tt(n, e), e != null && this.__v && (t && this._sb.push(t), Di(this));
}, pn.prototype.forceUpdate = function(e) {
  this.__v && (this.__e = !0, e && this.__h.push(e), Di(this));
}, pn.prototype.render = as, un = [], Do.__r = 0;
let kp = (e = 21) => crypto.getRandomValues(new Uint8Array(e)).reduce((t, n) => (n &= 63, n < 36 ? t += n.toString(36) : n < 62 ? t += (n - 26).toString(36).toUpperCase() : n > 62 ? t += "-" : t += "_", t), "");
var _s, Y, S_, hn, Ui, M_ = {}, T_ = [], $p = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function nt(e, t) {
  for (var n in t)
    e[n] = t[n];
  return e;
}
function A_(e) {
  var t = e.parentNode;
  t && t.removeChild(e);
}
function ji(e, t, n) {
  var o, i, r, l = {};
  for (r in t)
    r == "key" ? o = t[r] : r == "ref" ? i = t[r] : l[r] = t[r];
  if (arguments.length > 2 && (l.children = arguments.length > 3 ? _s.call(arguments, 2) : n), typeof e == "function" && e.defaultProps != null)
    for (r in e.defaultProps)
      l[r] === void 0 && (l[r] = e.defaultProps[r]);
  return co(e, l, o, i, null);
}
function co(e, t, n, o, i) {
  var r = { type: e, props: t, key: n, ref: o, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: i == null ? ++S_ : i };
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
function N_(e) {
  var t, n;
  if ((e = e.__) != null && e.__c != null) {
    for (e.__e = e.__c.base = null, t = 0; t < e.__k.length; t++)
      if ((n = e.__k[t]) != null && n.__e != null) {
        e.__e = e.__c.base = n.__e;
        break;
      }
    return N_(e);
  }
}
function Bi(e) {
  (!e.__d && (e.__d = !0) && hn.push(e) && !Io.__r++ || Ui !== Y.debounceRendering) && ((Ui = Y.debounceRendering) || setTimeout)(Io);
}
function Io() {
  for (var e; Io.__r = hn.length; )
    e = hn.sort(function(t, n) {
      return t.__v.__b - n.__v.__b;
    }), hn = [], e.some(function(t) {
      var n, o, i, r, l, _;
      t.__d && (l = (r = (n = t).__v).__e, (_ = n.__P) && (o = [], (i = nt({}, r)).__v = r.__v + 1, O_(_, r, i, n.__n, _.ownerSVGElement !== void 0, r.__h != null ? [l] : null, o, l == null ? An(r) : l, r.__h), Cp(o, r), r.__e != l && N_(r)));
    });
}
function R_(e, t, n, o, i, r, l, _, c, p) {
  var s, h, f, a, u, y, d, v = o && o.__k || T_, g = v.length;
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
      O_(e, a, f = f || M_, i, r, l, _, c, p), u = a.__e, (h = a.ref) && f.ref != h && (d || (d = []), f.ref && d.push(f.ref, null, a), d.push(h, a.__c || u, a)), u != null ? (y == null && (y = u), typeof a.type == "function" && a.__k === f.__k ? a.__d = c = P_(a, c, e) : c = L_(e, a, f, v, u, c), typeof n.type == "function" && (n.__d = c)) : c && f.__e == c && c.parentNode != e && (c = An(f));
    }
  for (n.__e = y, s = g; s--; )
    v[s] != null && H_(v[s], v[s]);
  if (d)
    for (s = 0; s < d.length; s++)
      D_(d[s], d[++s], d[++s]);
}
function P_(e, t, n) {
  for (var o, i = e.__k, r = 0; i && r < i.length; r++)
    (o = i[r]) && (o.__ = e, t = typeof o.type == "function" ? P_(o, t, n) : L_(n, o, o, i, o.__e, t));
  return t;
}
function L_(e, t, n, o, i, r) {
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
function xp(e, t, n, o, i) {
  var r;
  for (r in n)
    r === "children" || r === "key" || r in t || Wo(e, r, null, n[r], o);
  for (r in t)
    i && typeof t[r] != "function" || r === "children" || r === "key" || r === "value" || r === "checked" || n[r] === t[r] || Wo(e, r, t[r], n[r], o);
}
function zi(e, t, n) {
  t[0] === "-" ? e.setProperty(t, n) : e[t] = n == null ? "" : typeof n != "number" || $p.test(t) ? n : n + "px";
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
            n && t in n || zi(e.style, t, "");
        if (n)
          for (t in n)
            o && n[t] === o[t] || zi(e.style, t, n[t]);
      }
    else if (t[0] === "o" && t[1] === "n")
      r = t !== (t = t.replace(/Capture$/, "")), t = t.toLowerCase() in e ? t.toLowerCase().slice(2) : t.slice(2), e.l || (e.l = {}), e.l[t + r] = n, n ? o || e.addEventListener(t, r ? Vi : Fi, r) : e.removeEventListener(t, r ? Vi : Fi, r);
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
function Fi(e) {
  this.l[e.type + !1](Y.event ? Y.event(e) : e);
}
function Vi(e) {
  this.l[e.type + !0](Y.event ? Y.event(e) : e);
}
function O_(e, t, n, o, i, r, l, _, c) {
  var p, s, h, f, a, u, y, d, v, g, k, w, E, $, x, m = t.type;
  if (t.constructor !== void 0)
    return null;
  n.__h != null && (c = n.__h, _ = t.__e = n.__e, t.__h = null, r = [_]), (p = Y.__b) && p(t);
  try {
    e:
      if (typeof m == "function") {
        if (d = t.props, v = (p = m.contextType) && o[p.__c], g = p ? v ? v.props.value : p.__ : o, n.__c ? y = (s = t.__c = n.__c).__ = s.__E : ("prototype" in m && m.prototype.render ? t.__c = s = new m(d, g) : (t.__c = s = new dn(d, g), s.constructor = m, s.render = Sp), v && v.sub(s), s.props = d, s.state || (s.state = {}), s.context = g, s.__n = o, h = s.__d = !0, s.__h = [], s._sb = []), s.__s == null && (s.__s = s.state), m.getDerivedStateFromProps != null && (s.__s == s.state && (s.__s = nt({}, s.__s)), nt(s.__s, m.getDerivedStateFromProps(d, s.__s))), f = s.props, a = s.state, h)
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
        s.state = s.__s, s.getChildContext != null && (o = nt(nt({}, o), s.getChildContext())), h || s.getSnapshotBeforeUpdate == null || (u = s.getSnapshotBeforeUpdate(f, a)), x = p != null && p.type === cs && p.key == null ? p.props.children : p, R_(e, Array.isArray(x) ? x : [x], t, n, o, i, r, l, _, c), s.base = t.__e, t.__h = null, s.__h.length && l.push(s), y && (s.__E = s.__ = null), s.__e = !1;
      } else
        r == null && t.__v === n.__v ? (t.__k = n.__k, t.__e = n.__e) : t.__e = Ep(n.__e, t, n, o, i, r, l, c);
    (p = Y.diffed) && p(t);
  } catch (C) {
    t.__v = null, (c || r != null) && (t.__e = _, t.__h = !!c, r[r.indexOf(_)] = null), Y.__e(C, t, n);
  }
}
function Cp(e, t) {
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
function Ep(e, t, n, o, i, r, l, _) {
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
    if (r = r && _s.call(e.childNodes), p = (h = n.props || M_).dangerouslySetInnerHTML, s = f.dangerouslySetInnerHTML, !_) {
      if (r != null)
        for (h = {}, u = 0; u < e.attributes.length; u++)
          h[e.attributes[u].name] = e.attributes[u].value;
      (s || p) && (s && (p && s.__html == p.__html || s.__html === e.innerHTML) || (e.innerHTML = s && s.__html || ""));
    }
    if (xp(e, f, h, i, _), s)
      t.__k = [];
    else if (u = t.props.children, R_(e, Array.isArray(u) ? u : [u], t, n, o, i && a !== "foreignObject", r, l, r ? r[0] : n.__k && An(n, 0), _), r != null)
      for (u = r.length; u--; )
        r[u] != null && A_(r[u]);
    _ || ("value" in f && (u = f.value) !== void 0 && (u !== e.value || a === "progress" && !u || a === "option" && u !== h.value) && Wo(e, "value", u, h.value, !1), "checked" in f && (u = f.checked) !== void 0 && u !== e.checked && Wo(e, "checked", u, h.checked, !1));
  }
  return e;
}
function D_(e, t, n) {
  try {
    typeof e == "function" ? e(t) : e.current = t;
  } catch (o) {
    Y.__e(o, n);
  }
}
function H_(e, t, n) {
  var o, i;
  if (Y.unmount && Y.unmount(e), (o = e.ref) && (o.current && o.current !== e.__e || D_(o, null, t)), (o = e.__c) != null) {
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
      o[i] && H_(o[i], t, n || typeof e.type != "function");
  n || e.__e == null || A_(e.__e), e.__ = e.__e = e.__d = void 0;
}
function Sp(e, t, n) {
  return this.constructor(e, n);
}
_s = T_.slice, Y = { __e: function(e, t, n, o) {
  for (var i, r, l; t = t.__; )
    if ((i = t.__c) && !i.__)
      try {
        if ((r = i.constructor) && r.getDerivedStateFromError != null && (i.setState(r.getDerivedStateFromError(e)), l = i.__d), i.componentDidCatch != null && (i.componentDidCatch(e, o || {}), l = i.__d), l)
          return i.__E = i;
      } catch (_) {
        e = _;
      }
  throw e;
} }, S_ = 0, dn.prototype.setState = function(e, t) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = nt({}, this.state), typeof e == "function" && (e = e(nt({}, n), this.props)), e && nt(n, e), e != null && this.__v && (t && this._sb.push(t), Bi(this));
}, dn.prototype.forceUpdate = function(e) {
  this.__v && (this.__e = !0, e && this.__h.push(e), Bi(this));
}, dn.prototype.render = cs, hn = [], Io.__r = 0;
var pt, ht;
class qi extends dn {
  constructor(n) {
    var o;
    super(n);
    M(this, pt, 0);
    M(this, ht, null);
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
      o && (b(this, pt) && cancelAnimationFrame(b(this, pt)), N(this, pt, requestAnimationFrame(() => {
        const i = this.props.type === "horz" ? n.clientX - o.x : n.clientY - o.y;
        this.scroll(o.offset + i * this.props.scrollSize / this.props.clientSize), N(this, pt, 0);
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
    n && (N(this, ht, typeof n == "string" ? document : n.current), b(this, ht).addEventListener("wheel", this._handleWheel, { passive: !1 }));
  }
  componentWillUnmount() {
    document.removeEventListener("mousemove", this._handleMouseMove), document.removeEventListener("mouseup", this._handleMouseUp), b(this, ht) && b(this, ht).removeEventListener("wheel", this._handleWheel);
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
    return o === "horz" ? (u.height = i, u.width = n, y.width = this.barSize, y.left = Math.round(Math.min(h, f) * (n - y.width) / h)) : (u.width = i, u.height = n, y.height = this.barSize, y.top = Math.round(Math.min(h, f) * (n - y.height) / h)), /* @__PURE__ */ ji("div", {
      className: P("scrollbar", r, {
        "is-vert": o === "vert",
        "is-horz": o === "horz",
        "is-dragging": a
      }),
      style: u,
      onMouseDown: this._handleClick
    }, /* @__PURE__ */ ji("div", {
      className: "scrollbar-bar",
      style: y,
      onMouseDown: this._handleMouseDown
    }));
  }
}
pt = new WeakMap(), ht = new WeakMap();
function Gi(e, t, n) {
  return e && (t && (e = Math.max(t, e)), n && (e = Math.min(n, e))), e;
}
function I_({ col: e, className: t, height: n, row: o, onRenderCell: i, style: r, outerStyle: l, children: _, outerClass: c, ...p }) {
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
    if (typeof T == "object" && T && !v_(T) && ("html" in T || "className" in T || "style" in T || "attrs" in T || "children" in T || "tagName" in T)) {
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
function vr({ row: e, className: t, top: n = 0, left: o = 0, width: i, height: r, cols: l, CellComponent: _ = I_, onRenderCell: c }) {
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
function W_({
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
  CellComponent: f = I_,
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
function Mp({ height: e, onRenderRow: t, ...n }) {
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
  }, /* @__PURE__ */ R(W_, {
    ...o
  }));
}
function Tp({
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
    return h && Object.assign(s, h), /* @__PURE__ */ R(W_, {
      ...s
    });
  }));
}
const Uo = /* @__PURE__ */ new Map(), jo = [];
function U_(e, t) {
  const { name: n } = e;
  if (!(t != null && t.override) && Uo.has(n))
    throw new Error(`DTable: Plugin with name ${n} already exists`);
  Uo.set(n, e), (t == null ? void 0 : t.buildIn) && !jo.includes(n) && jo.push(n);
}
function Wt(e, t) {
  U_(e, t);
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
function j_(e) {
  return Uo.delete(e);
}
function Ap(e) {
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
function B_(e, t, n) {
  return t.forEach((o) => {
    var r;
    if (!o)
      return;
    const i = Ap(o);
    !i || n.has(i.name) || ((r = i.plugins) != null && r.length && B_(e, i.plugins, n), e.push(i), n.add(i.name));
  }), e;
}
function Np(e = [], t = !0) {
  return t && jo.length && e.unshift(...jo), e != null && e.length ? B_([], e, /* @__PURE__ */ new Set()) : [];
}
function Yi() {
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
var dt, At, Fe, we, Ve, te, de, ke, Nt, Dn, Hn, Le, Rt, Pt, Fo, z_, Vo, F_, qo, V_, Go, q_, In, Tr, Yo, Ko, Wn, Un, Xo, Jo, Zo, G_, Qo, Y_, er, K_;
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
    S(this, "ref", gp());
    M(this, dt, 0);
    M(this, At, void 0);
    M(this, Fe, !1);
    M(this, we, void 0);
    M(this, Ve, void 0);
    M(this, te, []);
    M(this, de, void 0);
    M(this, ke, /* @__PURE__ */ new Map());
    M(this, Nt, {});
    M(this, Dn, void 0);
    M(this, Hn, []);
    S(this, "updateLayout", () => {
      b(this, dt) && cancelAnimationFrame(b(this, dt)), N(this, dt, requestAnimationFrame(() => {
        N(this, de, void 0), this.forceUpdate(), N(this, dt, 0);
      }));
    });
    M(this, Le, (n, o) => {
      o = o || n.type;
      const i = b(this, ke).get(o);
      if (!!(i != null && i.length)) {
        for (const r of i)
          if (r.call(this, n) === !1) {
            n.stopPropagation(), n.preventDefault();
            break;
          }
      }
    });
    M(this, Rt, (n) => {
      b(this, Le).call(this, n, `window_${n.type}`);
    });
    M(this, Pt, (n) => {
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
    N(this, At, (o = n.id) != null ? o : `dtable-${kp(10)}`), this.state = { scrollTop: 0, scrollLeft: 0, renderCount: 0 }, N(this, Ve, Object.freeze(Np(n.plugins))), b(this, Ve).forEach((i) => {
      var c;
      const { methods: r, data: l, state: _ } = i;
      r && Object.entries(r).forEach(([p, s]) => {
        typeof s == "function" && Object.assign(this, { [p]: s.bind(this) });
      }), l && Object.assign(b(this, Nt), l.call(this)), _ && Object.assign(this.state, _.call(this)), (c = i.onCreate) == null || c.call(this, i);
    });
  }
  get options() {
    var n;
    return ((n = b(this, de)) == null ? void 0 : n.options) || b(this, we) || Yi();
  }
  get plugins() {
    return b(this, te);
  }
  get layout() {
    return b(this, de);
  }
  get id() {
    return b(this, At);
  }
  get data() {
    return b(this, Nt);
  }
  get parent() {
    var n, o;
    return (o = this.props.parent) != null ? o : (n = this.ref.current) == null ? void 0 : n.parentElement;
  }
  componentWillReceiveProps() {
    N(this, we, void 0);
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
      for (const i of b(this, ke).keys())
        i.startsWith("window_") ? window.removeEventListener(i.replace("window_", ""), b(this, Rt)) : i.startsWith("document_") ? document.removeEventListener(i.replace("document_", ""), b(this, Pt)) : n.removeEventListener(i, b(this, Le));
    b(this, te).forEach((i) => {
      var r;
      (r = i.onUnmounted) == null || r.call(this);
    }), b(this, Ve).forEach((i) => {
      var r;
      (r = i.onDestory) == null || r.call(this);
    }), N(this, Nt, {}), b(this, ke).clear();
  }
  on(n, o, i) {
    var l;
    i && (n = `${i}_${n}`);
    const r = b(this, ke).get(n);
    r ? r.push(o) : (b(this, ke).set(n, [o]), n.startsWith("window_") ? window.addEventListener(n.replace("window_", ""), b(this, Rt)) : n.startsWith("document_") ? document.addEventListener(n.replace("document_", ""), b(this, Pt)) : (l = this.ref.current) == null || l.addEventListener(n, b(this, Le)));
  }
  off(n, o, i) {
    var _;
    i && (n = `${i}_${n}`);
    const r = b(this, ke).get(n);
    if (!r)
      return;
    const l = r.indexOf(o);
    l >= 0 && r.splice(l, 1), r.length || (b(this, ke).delete(n), n.startsWith("window_") ? window.removeEventListener(n.replace("window_", ""), b(this, Rt)) : n.startsWith("document_") ? document.removeEventListener(n.replace("document_", ""), b(this, Pt)) : (_ = this.ref.current) == null || _.removeEventListener(n, b(this, Le)));
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
    if (!b(this, we))
      return;
    typeof n == "function" && (o = n, n = {});
    const { dirtyType: i, state: r } = n;
    if (i === "layout")
      N(this, de, void 0);
    else if (i === "options") {
      if (N(this, we, void 0), !b(this, de))
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
    const n = J(this, er, K_).call(this), { className: o, rowHover: i, colHover: r, cellHover: l, bordered: _, striped: c, scrollbarHover: p } = this.options, s = { width: n == null ? void 0 : n.width, height: n == null ? void 0 : n.height }, h = ["dtable", o, {
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
      id: b(this, At),
      className: P(h),
      style: s,
      ref: this.ref,
      tabIndex: -1
    }, n && J(this, Fo, z_).call(this, n), n && J(this, Vo, F_).call(this, n), n && J(this, qo, V_).call(this, n), n && J(this, Go, q_).call(this, n));
  }
}
dt = new WeakMap(), At = new WeakMap(), Fe = new WeakMap(), we = new WeakMap(), Ve = new WeakMap(), te = new WeakMap(), de = new WeakMap(), ke = new WeakMap(), Nt = new WeakMap(), Dn = new WeakMap(), Hn = new WeakMap(), Le = new WeakMap(), Rt = new WeakMap(), Pt = new WeakMap(), Fo = new WeakSet(), z_ = function(n) {
  const { header: o, colsInfo: i, headerHeight: r, scrollLeft: l } = n;
  if (!o)
    return null;
  if (o === !0)
    return /* @__PURE__ */ R(Mp, {
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
}, Vo = new WeakSet(), F_ = function(n) {
  const { headerHeight: o, rowsHeight: i, visibleRows: r, rowHeight: l, colsInfo: _, scrollLeft: c, scrollTop: p } = n;
  return /* @__PURE__ */ R(Tp, {
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
}, qo = new WeakSet(), V_ = function(n) {
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
}, Go = new WeakSet(), q_ = function(n) {
  const o = [], { scrollLeft: i, colsInfo: r, scrollTop: l, rowsHeight: _, rowsHeightTotal: c, footerHeight: p } = n, { scrollColsWidth: s, scrollWidth: h } = r, { scrollbarSize: f = 12, horzScrollbarPos: a } = this.options;
  return s > h && o.push(
    /* @__PURE__ */ R(qi, {
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
    /* @__PURE__ */ R(qi, {
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
}, Yo = new WeakMap(), Ko = new WeakMap(), Wn = new WeakMap(), Un = new WeakMap(), Xo = new WeakMap(), Jo = new WeakMap(), Zo = new WeakSet(), G_ = function() {
  if (b(this, we))
    return !1;
  const o = { ...Yi(), ...b(this, Ve).reduce((i, r) => {
    const { defaultOptions: l } = r;
    return l && Object.assign(i, l), i;
  }, {}), ...this.props };
  return N(this, we, o), N(this, te, b(this, Ve).reduce((i, r) => {
    const { when: l, options: _ } = r;
    return (!l || l(o)) && (i.push(r), _ && Object.assign(o, typeof _ == "function" ? _.call(this, o) : _)), i;
  }, [])), N(this, Hn, [this.options.i18n, ...this.plugins.map((i) => i.i18n)].filter(Boolean)), !0;
}, Qo = new WeakSet(), Y_ = function() {
  var at, Me;
  const { plugins: n } = this;
  let o = b(this, we);
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
    var Fn, jt, Bt;
    if (A.hidden)
      return;
    const {
      name: O,
      type: X = "",
      fixed: ee = !1,
      flex: he = !1,
      width: _t = r,
      minWidth: Te = l,
      maxWidth: Ut = _,
      ...zn
    } = A, L = {
      name: O,
      type: X,
      setting: {
        name: O,
        type: X,
        fixed: ee,
        flex: he,
        width: _t,
        minWidth: Te,
        maxWidth: Ut,
        ...zn
      },
      flex: ee ? 0 : he === !0 ? 1 : typeof he == "number" ? he : 0,
      left: 0,
      width: Gi(_t, Te, Ut),
      realWidth: 0,
      visible: !0,
      index: f.length
    };
    n.forEach((Vn) => {
      var me, ct;
      const yt = (me = Vn.colTypes) == null ? void 0 : me[X];
      if (yt) {
        const zt = typeof yt == "function" ? yt(L) : yt;
        zt && Object.assign(L.setting, zt);
      }
      (ct = Vn.onAddCol) == null || ct.call(this, L);
    }), L.width = Gi((Fn = L.setting.width) != null ? Fn : L.width, (jt = L.setting.minWidth) != null ? jt : Te, (Bt = L.setting.maxWidth) != null ? Bt : Ut), L.realWidth = L.realWidth || L.width, ee === "left" ? (L.left = u, u += L.width, c.push(L)) : ee === "right" ? (L.left = y, y += L.width, p.push(L)) : (L.left = d, d += L.width, s.push(L)), L.flex && a.push(L), f.push(L), h[L.name] = L;
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
    var he, _t;
    const ee = { data: X != null ? X : { [E]: A }, id: A, index: x.length, top: 0 };
    if (X || (ee.lazy = !0), x.push(ee), ((he = o.onAddRow) == null ? void 0 : he.call(this, ee, O)) !== !1) {
      for (const Te of n)
        if (((_t = Te.onAddRow) == null ? void 0 : _t.call(this, ee, O)) === !1)
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
    const O = (at = A.onAddRows) == null ? void 0 : at.call(this, C);
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
}, er = new WeakSet(), K_ = function() {
  (J(this, Zo, G_).call(this) || !b(this, de)) && J(this, Qo, Y_).call(this);
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
}, S(Mr, "addPlugin", U_), S(Mr, "removePlugin", j_);
function Ki(e, t) {
  t !== void 0 ? e.data.hoverCol = t : t = e.data.hoverCol;
  const { current: n } = e.ref;
  if (!n)
    return;
  const o = "dtable-col-hover";
  n.querySelectorAll(`.${o}`).forEach((i) => i.classList.remove(o)), typeof t == "string" && t.length && n.querySelectorAll(`.dtable-cell[data-col="${t}"]`).forEach((i) => i.classList.add(o));
}
const Rp = {
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
      Ki(this, o);
    },
    mouseleave() {
      Ki(this, !1);
    }
  }
}, Pp = Wt(Rp, { buildIn: !0 });
function Lp(e, t) {
  var l, _;
  typeof e == "boolean" && (t = e, e = void 0);
  const n = this.state.checkedRows, o = {}, { canRowCheckable: i } = this.options, r = (c, p) => {
    i && !i.call(this, c) || !!n[c] === p || (p ? n[c] = !0 : delete n[c], o[c] = p);
  };
  if (e === void 0 ? (t === void 0 && (t = !X_.call(this)), (l = this.layout) == null || l.allRows.forEach(({ id: c }) => {
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
function Op(e) {
  var t;
  return (t = this.state.checkedRows[e]) != null ? t : !1;
}
function X_() {
  var n, o;
  const e = this.getChecks().length, { canRowCheckable: t } = this.options;
  return t ? e === ((n = this.layout) == null ? void 0 : n.allRows.reduce((i, r) => i + (t.call(this, r.id) ? 1 : 0), 0)) : e === ((o = this.layout) == null ? void 0 : o.allRows.length);
}
function Dp() {
  return Object.keys(this.state.checkedRows);
}
const Hp = {
  name: "checkable",
  defaultOptions: { checkable: !0 },
  when: (e) => !!e.checkable,
  state() {
    return { checkedRows: {} };
  },
  methods: {
    toggleCheckRows: Lp,
    isRowChecked: Op,
    isAllRowChecked: X_,
    getChecks: Dp
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
}, Ip = Wt(Hp);
var J_ = /* @__PURE__ */ ((e) => (e.unknown = "", e.collapsed = "collapsed", e.expanded = "expanded", e.hidden = "hidden", e.normal = "normal", e))(J_ || {});
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
function Wp(e, t) {
  var i;
  let n = (i = this.state.collapsedRows) != null ? i : {};
  const { nestedMap: o } = this.data;
  if (e === "HEADER")
    if (t === void 0 && (t = !Z_.call(this)), t) {
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
function Z_() {
  const e = this.data.nestedMap.values();
  for (const t of e)
    if (t.state === "expanded")
      return !1;
  return !0;
}
function Q_(e, t = 0, n, o = 0) {
  var i;
  n || (n = [...e.keys()]);
  for (const r of n) {
    const l = e.get(r);
    !l || (l.level === o && (l.order = t++), (i = l.children) != null && i.length && (t = Q_(e, t, l.children, o + 1)));
  }
  return t;
}
function ec(e, t, n, o) {
  const i = e.getNestedRowInfo(t);
  return !i || i.state === "" || !i.children || i.children.forEach((r) => {
    o[r] = n, ec(e, r, n, o);
  }), i;
}
function tc(e, t, n, o, i) {
  var _;
  const r = e.getNestedRowInfo(t);
  if (!r || r.state === "")
    return;
  ((_ = r.children) == null ? void 0 : _.every((c) => {
    const p = !!(o[c] !== void 0 ? o[c] : i[c]);
    return n === p;
  })) && (o[t] = n), r.parent && tc(e, r.parent, n, o, i);
}
const Up = {
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
        const l = ec(this, i, r, o);
        l != null && l.parent && tc(this, l.parent, r, o, n);
      }), o;
    }
  },
  when: (e) => !!e.nested,
  data() {
    return { nestedMap: /* @__PURE__ */ new Map() };
  },
  methods: {
    toggleRow: Wp,
    isAllCollapsed: Z_,
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
    return e = e.filter((t) => this.getNestedRowInfo(t.id).state !== "hidden"), Q_(this.data.nestedMap), e.sort((t, n) => {
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
}, jp = Wt(Up);
const Bp = {
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
}, zp = Wt(Bp, { buildIn: !0 }), Fp = {
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
}, Vp = Wt(Fp, { buildIn: !0 }), qp = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  colHover: Pp,
  checkable: Ip,
  NestedRowState: J_,
  nested: jp,
  rich: zp,
  sortType: Vp
}, Symbol.toStringTag, { value: "Module" }));
class Vt extends ge {
}
S(Vt, "NAME", "dtable"), S(Vt, "Component", Mr), S(Vt, "definePlugin", Wt), S(Vt, "removePlugin", j_), S(Vt, "plugins", qp);
var $e, se;
class Gp {
  constructor(t) {
    M(this, $e, void 0);
    M(this, se, void 0);
    N(this, $e, t), N(this, se, document.querySelector(t.getAttribute("data-target")) || document.querySelector(t.getAttribute("data-tab")) || document.querySelector(t.getAttribute("href")));
  }
  showTarget() {
    this.addActive(b(this, $e).parentElement.parentElement, b(this, $e).parentElement), this.addActive(b(this, se).parentElement, b(this, se)), b(this, se).dispatchEvent(new CustomEvent("show.zui3.tab"));
  }
  show() {
    N(this, se, b(this, $e)), this.addActive(b(this, se).parentElement, b(this, se)), N(this, $e, document.querySelector(`[href='#${b(this, se).getAttribute("id")}']`) || document.querySelector(`[data-tab='#${b(this, se).getAttribute("id")}']`) || document.querySelector(`[data-target='#${b(this, se).getAttribute("id")}']`)), this.addActive(b(this, $e).parentElement.parentElement, b(this, $e).parentElement);
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
$e = new WeakMap(), se = new WeakMap();
document.addEventListener("click", function(e) {
  e.target instanceof HTMLElement && (e.target.dataset.toggle === "tab" || e.target.getAttribute("data-tab")) && (e.preventDefault(), new Gp(e.target).showTarget());
});
export {
  Ts as ActionMenu,
  Ns as ActionMenuNested,
  Zs as Avatar,
  ri as BtnGroup,
  Hs as Button,
  ie as ContextMenu,
  Vt as DTable,
  _e as Dropdown,
  Rr as EventBus,
  Is as Menu,
  ii as Nav,
  Gp as NavTabs,
  Pi as Pager,
  Fs as ProgressCircle,
  Ae as TIME_DAY,
  Li as Toolbar,
  dc as addI18nMap,
  Jp as browser,
  Ri as calculateTimestamp,
  Xp as convertBytes,
  le as createDate,
  Kp as formatBytes,
  Sr as formatDate,
  oh as formatDateSpan,
  ce as formatString,
  pc as getLangCode,
  rh as getTimeBeforeDesc,
  jn as i18n,
  nh as isDBY,
  pr as isObject,
  Bn as isSameDay,
  fp as isSameMonth,
  Zp as isSameWeek,
  Ni as isSameYear,
  Qp as isToday,
  th as isTomorrow,
  eh as isYesterday,
  mr as mergeDeep,
  gr as nativeEvents,
  hc as setLangCode,
  Vc as store
};
