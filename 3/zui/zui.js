var Nc = Object.defineProperty;
var Pc = (e, t, n) => t in e ? Nc(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var S = (e, t, n) => (Pc(e, typeof t != "symbol" ? t + "" : t, n), n), or = (e, t, n) => {
  if (!t.has(e))
    throw TypeError("Cannot " + n);
};
var m = (e, t, n) => (or(e, t, "read from private field"), n ? n.call(e) : t.get(e)), M = (e, t, n) => {
  if (t.has(e))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(e) : t.set(e, n);
}, R = (e, t, n, o) => (or(e, t, "write to private field"), o ? o.call(e, n) : t.set(e, n), n);
var X = (e, t, n) => (or(e, t, "access private method"), n);
var Go, H, Hi, Wi, Ft, cs, so = {}, Ii = [], Lc = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function Ve(e, t) {
  for (var n in t)
    e[n] = t[n];
  return e;
}
function Ui(e) {
  var t = e.parentNode;
  t && t.removeChild(e);
}
function Yo(e, t, n) {
  var o, i, r, l = {};
  for (r in t)
    r == "key" ? o = t[r] : r == "ref" ? i = t[r] : l[r] = t[r];
  if (arguments.length > 2 && (l.children = arguments.length > 3 ? Go.call(arguments, 2) : n), typeof e == "function" && e.defaultProps != null)
    for (r in e.defaultProps)
      l[r] === void 0 && (l[r] = e.defaultProps[r]);
  return zn(e, l, o, i, null);
}
function zn(e, t, n, o, i) {
  var r = { type: e, props: t, key: n, ref: o, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: i == null ? ++Hi : i };
  return i == null && H.vnode != null && H.vnode(r), r;
}
function Oc() {
  return { current: null };
}
function Ko(e) {
  return e.children;
}
function Fn(e, t) {
  this.props = e, this.context = t;
}
function fn(e, t) {
  if (t == null)
    return e.__ ? fn(e.__, e.__.__k.indexOf(e) + 1) : null;
  for (var n; t < e.__k.length; t++)
    if ((n = e.__k[t]) != null && n.__e != null)
      return n.__e;
  return typeof e.type == "function" ? fn(e) : null;
}
function ji(e) {
  var t, n;
  if ((e = e.__) != null && e.__c != null) {
    for (e.__e = e.__c.base = null, t = 0; t < e.__k.length; t++)
      if ((n = e.__k[t]) != null && n.__e != null) {
        e.__e = e.__c.base = n.__e;
        break;
      }
    return ji(e);
  }
}
function _s(e) {
  (!e.__d && (e.__d = !0) && Ft.push(e) && !io.__r++ || cs !== H.debounceRendering) && ((cs = H.debounceRendering) || setTimeout)(io);
}
function io() {
  for (var e; io.__r = Ft.length; )
    e = Ft.sort(function(t, n) {
      return t.__v.__b - n.__v.__b;
    }), Ft = [], e.some(function(t) {
      var n, o, i, r, l, c;
      t.__d && (l = (r = (n = t).__v).__e, (c = n.__P) && (o = [], (i = Ve({}, r)).__v = r.__v + 1, $r(c, r, i, n.__n, c.ownerSVGElement !== void 0, r.__h != null ? [l] : null, o, l == null ? fn(r) : l, r.__h), Vi(o, r), r.__e != l && ji(r)));
    });
}
function Bi(e, t, n, o, i, r, l, c, _, h) {
  var s, p, f, a, u, b, d, v = o && o.__k || Ii, g = v.length;
  for (n.__k = [], s = 0; s < t.length; s++)
    if ((a = n.__k[s] = (a = t[s]) == null || typeof a == "boolean" ? null : typeof a == "string" || typeof a == "number" || typeof a == "bigint" ? zn(null, a, null, null, a) : Array.isArray(a) ? zn(Ko, { children: a }, null, null, null) : a.__b > 0 ? zn(a.type, a.props, a.key, a.ref ? a.ref : null, a.__v) : a) != null) {
      if (a.__ = n, a.__b = n.__b + 1, (f = v[s]) === null || f && a.key == f.key && a.type === f.type)
        v[s] = void 0;
      else
        for (p = 0; p < g; p++) {
          if ((f = v[p]) && a.key == f.key && a.type === f.type) {
            v[p] = void 0;
            break;
          }
          f = null;
        }
      $r(e, a, f = f || so, i, r, l, c, _, h), u = a.__e, (p = a.ref) && f.ref != p && (d || (d = []), f.ref && d.push(f.ref, null, a), d.push(p, a.__c || u, a)), u != null ? (b == null && (b = u), typeof a.type == "function" && a.__k === f.__k ? a.__d = _ = zi(a, _, e) : _ = Fi(e, a, f, v, u, _), typeof n.type == "function" && (n.__d = _)) : _ && f.__e == _ && _.parentNode != e && (_ = fn(f));
    }
  for (n.__e = b, s = g; s--; )
    v[s] != null && Gi(v[s], v[s]);
  if (d)
    for (s = 0; s < d.length; s++)
      qi(d[s], d[++s], d[++s]);
}
function zi(e, t, n) {
  for (var o, i = e.__k, r = 0; i && r < i.length; r++)
    (o = i[r]) && (o.__ = e, t = typeof o.type == "function" ? zi(o, t, n) : Fi(n, o, o, i, o.__e, t));
  return t;
}
function Fi(e, t, n, o, i, r) {
  var l, c, _;
  if (t.__d !== void 0)
    l = t.__d, t.__d = void 0;
  else if (n == null || i != r || i.parentNode == null)
    e:
      if (r == null || r.parentNode !== e)
        e.appendChild(i), l = null;
      else {
        for (c = r, _ = 0; (c = c.nextSibling) && _ < o.length; _ += 2)
          if (c == i)
            break e;
        e.insertBefore(i, r), l = r;
      }
  return l !== void 0 ? l : i.nextSibling;
}
function Dc(e, t, n, o, i) {
  var r;
  for (r in n)
    r === "children" || r === "key" || r in t || lo(e, r, null, n[r], o);
  for (r in t)
    i && typeof t[r] != "function" || r === "children" || r === "key" || r === "value" || r === "checked" || n[r] === t[r] || lo(e, r, t[r], n[r], o);
}
function fs(e, t, n) {
  t[0] === "-" ? e.setProperty(t, n) : e[t] = n == null ? "" : typeof n != "number" || Lc.test(t) ? n : n + "px";
}
function lo(e, t, n, o, i) {
  var r;
  e:
    if (t === "style")
      if (typeof n == "string")
        e.style.cssText = n;
      else {
        if (typeof o == "string" && (e.style.cssText = o = ""), o)
          for (t in o)
            n && t in n || fs(e.style, t, "");
        if (n)
          for (t in n)
            o && n[t] === o[t] || fs(e.style, t, n[t]);
      }
    else if (t[0] === "o" && t[1] === "n")
      r = t !== (t = t.replace(/Capture$/, "")), t = t.toLowerCase() in e ? t.toLowerCase().slice(2) : t.slice(2), e.l || (e.l = {}), e.l[t + r] = n, n ? o || e.addEventListener(t, r ? hs : us, r) : e.removeEventListener(t, r ? hs : us, r);
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
function us(e) {
  this.l[e.type + !1](H.event ? H.event(e) : e);
}
function hs(e) {
  this.l[e.type + !0](H.event ? H.event(e) : e);
}
function $r(e, t, n, o, i, r, l, c, _) {
  var h, s, p, f, a, u, b, d, v, g, k, w, E, $, x, y = t.type;
  if (t.constructor !== void 0)
    return null;
  n.__h != null && (_ = n.__h, c = t.__e = n.__e, t.__h = null, r = [c]), (h = H.__b) && h(t);
  try {
    e:
      if (typeof y == "function") {
        if (d = t.props, v = (h = y.contextType) && o[h.__c], g = h ? v ? v.props.value : h.__ : o, n.__c ? b = (s = t.__c = n.__c).__ = s.__E : ("prototype" in y && y.prototype.render ? t.__c = s = new y(d, g) : (t.__c = s = new Fn(d, g), s.constructor = y, s.render = Wc), v && v.sub(s), s.props = d, s.state || (s.state = {}), s.context = g, s.__n = o, p = s.__d = !0, s.__h = [], s._sb = []), s.__s == null && (s.__s = s.state), y.getDerivedStateFromProps != null && (s.__s == s.state && (s.__s = Ve({}, s.__s)), Ve(s.__s, y.getDerivedStateFromProps(d, s.__s))), f = s.props, a = s.state, p)
          y.getDerivedStateFromProps == null && s.componentWillMount != null && s.componentWillMount(), s.componentDidMount != null && s.__h.push(s.componentDidMount);
        else {
          if (y.getDerivedStateFromProps == null && d !== f && s.componentWillReceiveProps != null && s.componentWillReceiveProps(d, g), !s.__e && s.shouldComponentUpdate != null && s.shouldComponentUpdate(d, s.__s, g) === !1 || t.__v === n.__v) {
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
        if (s.context = g, s.props = d, s.__v = t, s.__P = e, w = H.__r, E = 0, "prototype" in y && y.prototype.render) {
          for (s.state = s.__s, s.__d = !1, w && w(t), h = s.render(s.props, s.state, s.context), $ = 0; $ < s._sb.length; $++)
            s.__h.push(s._sb[$]);
          s._sb = [];
        } else
          do
            s.__d = !1, w && w(t), h = s.render(s.props, s.state, s.context), s.state = s.__s;
          while (s.__d && ++E < 25);
        s.state = s.__s, s.getChildContext != null && (o = Ve(Ve({}, o), s.getChildContext())), p || s.getSnapshotBeforeUpdate == null || (u = s.getSnapshotBeforeUpdate(f, a)), x = h != null && h.type === Ko && h.key == null ? h.props.children : h, Bi(e, Array.isArray(x) ? x : [x], t, n, o, i, r, l, c, _), s.base = t.__e, t.__h = null, s.__h.length && l.push(s), b && (s.__E = s.__ = null), s.__e = !1;
      } else
        r == null && t.__v === n.__v ? (t.__k = n.__k, t.__e = n.__e) : t.__e = Hc(n.__e, t, n, o, i, r, l, _);
    (h = H.diffed) && h(t);
  } catch (C) {
    t.__v = null, (_ || r != null) && (t.__e = c, t.__h = !!_, r[r.indexOf(c)] = null), H.__e(C, t, n);
  }
}
function Vi(e, t) {
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
function Hc(e, t, n, o, i, r, l, c) {
  var _, h, s, p = n.props, f = t.props, a = t.type, u = 0;
  if (a === "svg" && (i = !0), r != null) {
    for (; u < r.length; u++)
      if ((_ = r[u]) && "setAttribute" in _ == !!a && (a ? _.localName === a : _.nodeType === 3)) {
        e = _, r[u] = null;
        break;
      }
  }
  if (e == null) {
    if (a === null)
      return document.createTextNode(f);
    e = i ? document.createElementNS("http://www.w3.org/2000/svg", a) : document.createElement(a, f.is && f), r = null, c = !1;
  }
  if (a === null)
    p === f || c && e.data === f || (e.data = f);
  else {
    if (r = r && Go.call(e.childNodes), h = (p = n.props || so).dangerouslySetInnerHTML, s = f.dangerouslySetInnerHTML, !c) {
      if (r != null)
        for (p = {}, u = 0; u < e.attributes.length; u++)
          p[e.attributes[u].name] = e.attributes[u].value;
      (s || h) && (s && (h && s.__html == h.__html || s.__html === e.innerHTML) || (e.innerHTML = s && s.__html || ""));
    }
    if (Dc(e, f, p, i, c), s)
      t.__k = [];
    else if (u = t.props.children, Bi(e, Array.isArray(u) ? u : [u], t, n, o, i && a !== "foreignObject", r, l, r ? r[0] : n.__k && fn(n, 0), c), r != null)
      for (u = r.length; u--; )
        r[u] != null && Ui(r[u]);
    c || ("value" in f && (u = f.value) !== void 0 && (u !== e.value || a === "progress" && !u || a === "option" && u !== p.value) && lo(e, "value", u, p.value, !1), "checked" in f && (u = f.checked) !== void 0 && u !== e.checked && lo(e, "checked", u, p.checked, !1));
  }
  return e;
}
function qi(e, t, n) {
  try {
    typeof e == "function" ? e(t) : e.current = t;
  } catch (o) {
    H.__e(o, n);
  }
}
function Gi(e, t, n) {
  var o, i;
  if (H.unmount && H.unmount(e), (o = e.ref) && (o.current && o.current !== e.__e || qi(o, null, t)), (o = e.__c) != null) {
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
      o[i] && Gi(o[i], t, n || typeof e.type != "function");
  n || e.__e == null || Ui(e.__e), e.__ = e.__e = e.__d = void 0;
}
function Wc(e, t, n) {
  return this.constructor(e, n);
}
function Ic(e, t, n) {
  var o, i, r;
  H.__ && H.__(e, t), i = (o = typeof n == "function") ? null : n && n.__k || t.__k, r = [], $r(t, e = (!o && n || t).__k = Yo(Ko, null, [e]), i || so, so, t.ownerSVGElement !== void 0, !o && n ? [n] : i ? null : t.firstChild ? Go.call(t.childNodes) : null, r, !o && n ? n : i ? i.__e : t.firstChild, o), Vi(r, e);
}
Go = Ii.slice, H = { __e: function(e, t, n, o) {
  for (var i, r, l; t = t.__; )
    if ((i = t.__c) && !i.__)
      try {
        if ((r = i.constructor) && r.getDerivedStateFromError != null && (i.setState(r.getDerivedStateFromError(e)), l = i.__d), i.componentDidCatch != null && (i.componentDidCatch(e, o || {}), l = i.__d), l)
          return i.__E = i;
      } catch (c) {
        e = c;
      }
  throw e;
} }, Hi = 0, Wi = function(e) {
  return e != null && e.constructor === void 0;
}, Fn.prototype.setState = function(e, t) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = Ve({}, this.state), typeof e == "function" && (e = e(Ve({}, n), this.props)), e && Ve(n, e), e != null && this.__v && (t && this._sb.push(t), _s(this));
}, Fn.prototype.forceUpdate = function(e) {
  this.__v && (this.__e = !0, e && this.__h.push(e), _s(this));
}, Fn.prototype.render = Ko, Ft = [], io.__r = 0;
var Te;
class Uc {
  constructor(t = "") {
    M(this, Te, void 0);
    typeof t == "object" ? R(this, Te, t) : R(this, Te, document.appendChild(document.createComment(t)));
  }
  on(t, n, o) {
    m(this, Te).addEventListener(t, n, o);
  }
  once(t, n, o) {
    m(this, Te).addEventListener(t, n, { once: !0, ...o });
  }
  off(t, n, o) {
    m(this, Te).removeEventListener(t, n, o);
  }
  emit(t) {
    return m(this, Te).dispatchEvent(t), t;
  }
}
Te = new WeakMap();
const ar = /* @__PURE__ */ new Set([
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
class xr extends Uc {
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
    return typeof t == "string" && (ar.has(t) ? (t = new Event(t), Object.assign(t, { detail: n })) : t = new CustomEvent(t, { detail: n })), super.emit(xr.createEvent(t, n));
  }
  static createEvent(t, n) {
    return typeof t == "string" && (ar.has(t) ? (t = new Event(t), Object.assign(t, { detail: n })) : t = new CustomEvent(t, { detail: n })), t;
  }
}
var Re, En, at, zt;
class ps extends xr {
  constructor(n = "", o) {
    super(n);
    M(this, at);
    M(this, Re, /* @__PURE__ */ new Map());
    M(this, En, void 0);
    R(this, En, o == null ? void 0 : o.customEventSuffix);
  }
  on(n, o, i) {
    n = X(this, at, zt).call(this, n), super.on(n, o, i), m(this, Re).set(o, [n, i]);
  }
  off(n, o, i) {
    n = X(this, at, zt).call(this, n), super.off(n, o, i), m(this, Re).delete(o);
  }
  once(n, o, i) {
    n = X(this, at, zt).call(this, n);
    const r = (l) => {
      o(l), m(this, Re).delete(r);
    };
    super.once(n, r, i), m(this, Re).set(r, [n, i]);
  }
  emit(n, o) {
    return typeof n == "string" && (n = X(this, at, zt).call(this, n)), super.emit(n, o);
  }
  offAll() {
    Array.from(m(this, Re).entries()).forEach(([n, [o, i]]) => {
      super.off(o, n, i);
    }), m(this, Re).clear();
  }
}
Re = new WeakMap(), En = new WeakMap(), at = new WeakSet(), zt = function(n) {
  const o = m(this, En);
  return ar.has(n) || typeof o != "string" || n.endsWith(o) ? n : `${n}${o}`;
};
function jc(e, t) {
  if (e == null)
    return [e, void 0];
  typeof t == "string" && (t = t.split("."));
  const n = t.join(".");
  let o = e;
  const i = [o];
  for (; typeof o == "object" && o !== null && t.length; ) {
    let r = t.shift(), l;
    const c = r.indexOf("[");
    if (c > 0 && c < r.length - 1 && r.endsWith("]") && (l = r.substring(c + 1, r.length - 1), r = r.substring(0, c)), o = o[r], i.push(o), l !== void 0)
      if (typeof o == "object" && o !== null)
        o instanceof Map ? o = o.get(l) : o = o[l], i.push(o);
      else
        throw new Error(`Cannot access property "${r}[${l}]", the full path is "${n}".`);
  }
  if (t.length)
    throw new Error(`Cannot access property with rest path "${t.join(".")}", the full path is "${n}".`);
  return i;
}
function Bc(e, t, n) {
  const o = jc(e, t), i = o[o.length - 1];
  return i === void 0 ? n : i;
}
function rr(e) {
  return !!e && typeof e == "object" && !Array.isArray(e);
}
function cr(e, ...t) {
  if (!t.length)
    return e;
  const n = t.shift();
  if (rr(e) && rr(n))
    for (const o in n)
      rr(n[o]) ? (e[o] || Object.assign(e, { [o]: {} }), cr(e[o], n[o])) : Object.assign(e, { [o]: n[o] });
  return cr(e, ...t);
}
function pe(e, ...t) {
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
var Cr = /* @__PURE__ */ ((e) => (e[e.B = 1] = "B", e[e.KB = 1024] = "KB", e[e.MB = 1048576] = "MB", e[e.GB = 1073741824] = "GB", e[e.TB = 1099511627776] = "TB", e))(Cr || {});
function wh(e, t = 2, n = "") {
  return Number.isNaN(e) ? "?KB" : (n || (e < 1024 ? n = "B" : e < 1048576 ? n = "KB" : e < 1073741824 ? n = "MB" : e < 1099511627776 ? n = "GB" : n = "TB"), (e / Cr[n]).toFixed(t) + n);
}
const kh = (e) => {
  const t = /^[0-9]*(B|KB|MB|GB|TB)$/;
  e = e.toUpperCase();
  const n = e.match(t);
  if (!n)
    return 0;
  const o = n[1];
  return e = e.replace(o, ""), Number.parseInt(e, 10) * Cr[o];
};
var Oi, Di;
let Er = (Di = (Oi = document.documentElement.getAttribute("lang")) == null ? void 0 : Oi.toLowerCase()) != null ? Di : "zh_cn", Ie;
function zc() {
  return Er;
}
function Fc(e) {
  Er = e.toLowerCase();
}
function Vc(e, t) {
  Ie || (Ie = {}), typeof e == "string" && (e = { [e]: t != null ? t : {} }), cr(Ie, e);
}
function Dn(e, t, n, o, i, r) {
  Array.isArray(e) ? Ie && e.unshift(Ie) : e = Ie ? [Ie, e] : [e], typeof n == "string" && (r = i, i = o, o = n, n = void 0);
  const l = i || Er;
  let c;
  for (const _ of e) {
    if (!_)
      continue;
    const h = _[l];
    if (!h)
      continue;
    const s = r && _ === Ie ? `${r}.${t}` : t;
    if (c = Bc(h, s), c !== void 0)
      break;
  }
  return c === void 0 ? o : n ? pe(c, ...Array.isArray(n) ? n : [n]) : c;
}
Dn.addLang = Vc;
Dn.getCode = zc;
Dn.setCode = Fc;
function qc(e) {
  return Object.fromEntries(Object.entries(e).map(([t, n]) => {
    if (typeof n == "string")
      try {
        n = JSON.parse(n);
      } catch {
      }
    return [t, n];
  }));
}
var Ne, vt, oe;
class Vt {
  constructor(t, n) {
    M(this, Ne, void 0);
    M(this, vt, void 0);
    M(this, oe, void 0);
    var o;
    t = typeof t == "string" ? document.querySelector(t) : t, this.constructor.EVENTS && R(this, oe, new ps(t, { customEventSuffix: `.${this.constructor.KEY}` })), R(this, Ne, { ...this.constructor.DEFAULT, ...t instanceof HTMLElement ? qc(t.dataset) : null, ...n }), this.constructor.all.set(t, this), R(this, vt, t), this.init(), (o = m(this, oe)) == null || o.emit("inited", this);
  }
  get options() {
    return m(this, Ne);
  }
  get element() {
    return m(this, vt);
  }
  get events() {
    return m(this, oe);
  }
  init() {
  }
  setOptions(t) {
    return t && Object.assign(m(this, Ne), t), m(this, Ne);
  }
  render(t) {
    this.setOptions(t);
  }
  destroy() {
    this.constructor.all.delete(m(this, vt)), m(this, oe) && (m(this, oe).emit("destroyed", this), m(this, oe).offAll());
  }
  on(t, n, o) {
    var i;
    (i = m(this, oe)) == null || i.on(t, n, o);
  }
  once(t, n, o) {
    var i;
    (i = m(this, oe)) == null || i.once(t, n, o);
  }
  off(t, n, o) {
    var i;
    (i = m(this, oe)) == null || i.off(t, n, o);
  }
  emit(t, n) {
    var l;
    let o = ps.createEvent(t, n);
    const i = `on${o.type.replace(`.${this.constructor.KEY}`, "")}`, r = m(this, Ne)[i];
    return r && r(o) === !1 && (o.preventDefault(), o.stopPropagation()), o = (l = m(this, oe)) == null ? void 0 : l.emit(o), o;
  }
  i18n(t, n, o) {
    var i;
    return (i = Dn(m(this, Ne).i18n, t, n, o, this.options.lang, this.constructor.NAME)) != null ? i : `{i18n:${t}}`;
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
Ne = new WeakMap(), vt = new WeakMap(), oe = new WeakMap(), S(Vt, "EVENTS", !1), S(Vt, "DEFAULT", {}), S(Vt, "allComponents", /* @__PURE__ */ new Map());
class xe extends Vt {
  constructor() {
    super(...arguments);
    S(this, "ref", Oc());
  }
  get $() {
    return this.ref.current;
  }
  init() {
    requestAnimationFrame(() => this.render());
  }
  render(n) {
    const o = this.constructor.Component;
    Ic(/* @__PURE__ */ Yo(o, {
      ref: this.ref,
      ...this.setOptions(n)
    }), this.element);
  }
}
var Sr, U, Yi, Ki, qt, ds, Xi = {}, Ji = [], Gc = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function qe(e, t) {
  for (var n in t)
    e[n] = t[n];
  return e;
}
function Zi(e) {
  var t = e.parentNode;
  t && t.removeChild(e);
}
function te(e, t, n) {
  var o, i, r, l = {};
  for (r in t)
    r == "key" ? o = t[r] : r == "ref" ? i = t[r] : l[r] = t[r];
  if (arguments.length > 2 && (l.children = arguments.length > 3 ? Sr.call(arguments, 2) : n), typeof e == "function" && e.defaultProps != null)
    for (r in e.defaultProps)
      l[r] === void 0 && (l[r] = e.defaultProps[r]);
  return Vn(e, l, o, i, null);
}
function Vn(e, t, n, o, i) {
  var r = { type: e, props: t, key: n, ref: o, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: i == null ? ++Yi : i };
  return i == null && U.vnode != null && U.vnode(r), r;
}
function Yc() {
  return { current: null };
}
function Mr(e) {
  return e.children;
}
function Gt(e, t) {
  this.props = e, this.context = t;
}
function un(e, t) {
  if (t == null)
    return e.__ ? un(e.__, e.__.__k.indexOf(e) + 1) : null;
  for (var n; t < e.__k.length; t++)
    if ((n = e.__k[t]) != null && n.__e != null)
      return n.__e;
  return typeof e.type == "function" ? un(e) : null;
}
function Qi(e) {
  var t, n;
  if ((e = e.__) != null && e.__c != null) {
    for (e.__e = e.__c.base = null, t = 0; t < e.__k.length; t++)
      if ((n = e.__k[t]) != null && n.__e != null) {
        e.__e = e.__c.base = n.__e;
        break;
      }
    return Qi(e);
  }
}
function vs(e) {
  (!e.__d && (e.__d = !0) && qt.push(e) && !ao.__r++ || ds !== U.debounceRendering) && ((ds = U.debounceRendering) || setTimeout)(ao);
}
function ao() {
  for (var e; ao.__r = qt.length; )
    e = qt.sort(function(t, n) {
      return t.__v.__b - n.__v.__b;
    }), qt = [], e.some(function(t) {
      var n, o, i, r, l, c;
      t.__d && (l = (r = (n = t).__v).__e, (c = n.__P) && (o = [], (i = qe({}, r)).__v = r.__v + 1, ol(c, r, i, n.__n, c.ownerSVGElement !== void 0, r.__h != null ? [l] : null, o, l == null ? un(r) : l, r.__h), Xc(o, r), r.__e != l && Qi(r)));
    });
}
function el(e, t, n, o, i, r, l, c, _, h) {
  var s, p, f, a, u, b, d, v = o && o.__k || Ji, g = v.length;
  for (n.__k = [], s = 0; s < t.length; s++)
    if ((a = n.__k[s] = (a = t[s]) == null || typeof a == "boolean" ? null : typeof a == "string" || typeof a == "number" || typeof a == "bigint" ? Vn(null, a, null, null, a) : Array.isArray(a) ? Vn(Mr, { children: a }, null, null, null) : a.__b > 0 ? Vn(a.type, a.props, a.key, a.ref ? a.ref : null, a.__v) : a) != null) {
      if (a.__ = n, a.__b = n.__b + 1, (f = v[s]) === null || f && a.key == f.key && a.type === f.type)
        v[s] = void 0;
      else
        for (p = 0; p < g; p++) {
          if ((f = v[p]) && a.key == f.key && a.type === f.type) {
            v[p] = void 0;
            break;
          }
          f = null;
        }
      ol(e, a, f = f || Xi, i, r, l, c, _, h), u = a.__e, (p = a.ref) && f.ref != p && (d || (d = []), f.ref && d.push(f.ref, null, a), d.push(p, a.__c || u, a)), u != null ? (b == null && (b = u), typeof a.type == "function" && a.__k === f.__k ? a.__d = _ = tl(a, _, e) : _ = nl(e, a, f, v, u, _), typeof n.type == "function" && (n.__d = _)) : _ && f.__e == _ && _.parentNode != e && (_ = un(f));
    }
  for (n.__e = b, s = g; s--; )
    v[s] != null && sl(v[s], v[s]);
  if (d)
    for (s = 0; s < d.length; s++)
      rl(d[s], d[++s], d[++s]);
}
function tl(e, t, n) {
  for (var o, i = e.__k, r = 0; i && r < i.length; r++)
    (o = i[r]) && (o.__ = e, t = typeof o.type == "function" ? tl(o, t, n) : nl(n, o, o, i, o.__e, t));
  return t;
}
function nl(e, t, n, o, i, r) {
  var l, c, _;
  if (t.__d !== void 0)
    l = t.__d, t.__d = void 0;
  else if (n == null || i != r || i.parentNode == null)
    e:
      if (r == null || r.parentNode !== e)
        e.appendChild(i), l = null;
      else {
        for (c = r, _ = 0; (c = c.nextSibling) && _ < o.length; _ += 2)
          if (c == i)
            break e;
        e.insertBefore(i, r), l = r;
      }
  return l !== void 0 ? l : i.nextSibling;
}
function Kc(e, t, n, o, i) {
  var r;
  for (r in n)
    r === "children" || r === "key" || r in t || co(e, r, null, n[r], o);
  for (r in t)
    i && typeof t[r] != "function" || r === "children" || r === "key" || r === "value" || r === "checked" || n[r] === t[r] || co(e, r, t[r], n[r], o);
}
function gs(e, t, n) {
  t[0] === "-" ? e.setProperty(t, n) : e[t] = n == null ? "" : typeof n != "number" || Gc.test(t) ? n : n + "px";
}
function co(e, t, n, o, i) {
  var r;
  e:
    if (t === "style")
      if (typeof n == "string")
        e.style.cssText = n;
      else {
        if (typeof o == "string" && (e.style.cssText = o = ""), o)
          for (t in o)
            n && t in n || gs(e.style, t, "");
        if (n)
          for (t in n)
            o && n[t] === o[t] || gs(e.style, t, n[t]);
      }
    else if (t[0] === "o" && t[1] === "n")
      r = t !== (t = t.replace(/Capture$/, "")), t = t.toLowerCase() in e ? t.toLowerCase().slice(2) : t.slice(2), e.l || (e.l = {}), e.l[t + r] = n, n ? o || e.addEventListener(t, r ? ys : ms, r) : e.removeEventListener(t, r ? ys : ms, r);
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
function ms(e) {
  this.l[e.type + !1](U.event ? U.event(e) : e);
}
function ys(e) {
  this.l[e.type + !0](U.event ? U.event(e) : e);
}
function ol(e, t, n, o, i, r, l, c, _) {
  var h, s, p, f, a, u, b, d, v, g, k, w, E, $, x, y = t.type;
  if (t.constructor !== void 0)
    return null;
  n.__h != null && (_ = n.__h, c = t.__e = n.__e, t.__h = null, r = [c]), (h = U.__b) && h(t);
  try {
    e:
      if (typeof y == "function") {
        if (d = t.props, v = (h = y.contextType) && o[h.__c], g = h ? v ? v.props.value : h.__ : o, n.__c ? b = (s = t.__c = n.__c).__ = s.__E : ("prototype" in y && y.prototype.render ? t.__c = s = new y(d, g) : (t.__c = s = new Gt(d, g), s.constructor = y, s.render = Zc), v && v.sub(s), s.props = d, s.state || (s.state = {}), s.context = g, s.__n = o, p = s.__d = !0, s.__h = [], s._sb = []), s.__s == null && (s.__s = s.state), y.getDerivedStateFromProps != null && (s.__s == s.state && (s.__s = qe({}, s.__s)), qe(s.__s, y.getDerivedStateFromProps(d, s.__s))), f = s.props, a = s.state, p)
          y.getDerivedStateFromProps == null && s.componentWillMount != null && s.componentWillMount(), s.componentDidMount != null && s.__h.push(s.componentDidMount);
        else {
          if (y.getDerivedStateFromProps == null && d !== f && s.componentWillReceiveProps != null && s.componentWillReceiveProps(d, g), !s.__e && s.shouldComponentUpdate != null && s.shouldComponentUpdate(d, s.__s, g) === !1 || t.__v === n.__v) {
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
        if (s.context = g, s.props = d, s.__v = t, s.__P = e, w = U.__r, E = 0, "prototype" in y && y.prototype.render) {
          for (s.state = s.__s, s.__d = !1, w && w(t), h = s.render(s.props, s.state, s.context), $ = 0; $ < s._sb.length; $++)
            s.__h.push(s._sb[$]);
          s._sb = [];
        } else
          do
            s.__d = !1, w && w(t), h = s.render(s.props, s.state, s.context), s.state = s.__s;
          while (s.__d && ++E < 25);
        s.state = s.__s, s.getChildContext != null && (o = qe(qe({}, o), s.getChildContext())), p || s.getSnapshotBeforeUpdate == null || (u = s.getSnapshotBeforeUpdate(f, a)), x = h != null && h.type === Mr && h.key == null ? h.props.children : h, el(e, Array.isArray(x) ? x : [x], t, n, o, i, r, l, c, _), s.base = t.__e, t.__h = null, s.__h.length && l.push(s), b && (s.__E = s.__ = null), s.__e = !1;
      } else
        r == null && t.__v === n.__v ? (t.__k = n.__k, t.__e = n.__e) : t.__e = Jc(n.__e, t, n, o, i, r, l, _);
    (h = U.diffed) && h(t);
  } catch (C) {
    t.__v = null, (_ || r != null) && (t.__e = c, t.__h = !!_, r[r.indexOf(c)] = null), U.__e(C, t, n);
  }
}
function Xc(e, t) {
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
function Jc(e, t, n, o, i, r, l, c) {
  var _, h, s, p = n.props, f = t.props, a = t.type, u = 0;
  if (a === "svg" && (i = !0), r != null) {
    for (; u < r.length; u++)
      if ((_ = r[u]) && "setAttribute" in _ == !!a && (a ? _.localName === a : _.nodeType === 3)) {
        e = _, r[u] = null;
        break;
      }
  }
  if (e == null) {
    if (a === null)
      return document.createTextNode(f);
    e = i ? document.createElementNS("http://www.w3.org/2000/svg", a) : document.createElement(a, f.is && f), r = null, c = !1;
  }
  if (a === null)
    p === f || c && e.data === f || (e.data = f);
  else {
    if (r = r && Sr.call(e.childNodes), h = (p = n.props || Xi).dangerouslySetInnerHTML, s = f.dangerouslySetInnerHTML, !c) {
      if (r != null)
        for (p = {}, u = 0; u < e.attributes.length; u++)
          p[e.attributes[u].name] = e.attributes[u].value;
      (s || h) && (s && (h && s.__html == h.__html || s.__html === e.innerHTML) || (e.innerHTML = s && s.__html || ""));
    }
    if (Kc(e, f, p, i, c), s)
      t.__k = [];
    else if (u = t.props.children, el(e, Array.isArray(u) ? u : [u], t, n, o, i && a !== "foreignObject", r, l, r ? r[0] : n.__k && un(n, 0), c), r != null)
      for (u = r.length; u--; )
        r[u] != null && Zi(r[u]);
    c || ("value" in f && (u = f.value) !== void 0 && (u !== e.value || a === "progress" && !u || a === "option" && u !== p.value) && co(e, "value", u, p.value, !1), "checked" in f && (u = f.checked) !== void 0 && u !== e.checked && co(e, "checked", u, p.checked, !1));
  }
  return e;
}
function rl(e, t, n) {
  try {
    typeof e == "function" ? e(t) : e.current = t;
  } catch (o) {
    U.__e(o, n);
  }
}
function sl(e, t, n) {
  var o, i;
  if (U.unmount && U.unmount(e), (o = e.ref) && (o.current && o.current !== e.__e || rl(o, null, t)), (o = e.__c) != null) {
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
      o[i] && sl(o[i], t, n || typeof e.type != "function");
  n || e.__e == null || Zi(e.__e), e.__ = e.__e = e.__d = void 0;
}
function Zc(e, t, n) {
  return this.constructor(e, n);
}
Sr = Ji.slice, U = { __e: function(e, t, n, o) {
  for (var i, r, l; t = t.__; )
    if ((i = t.__c) && !i.__)
      try {
        if ((r = i.constructor) && r.getDerivedStateFromError != null && (i.setState(r.getDerivedStateFromError(e)), l = i.__d), i.componentDidCatch != null && (i.componentDidCatch(e, o || {}), l = i.__d), l)
          return i.__E = i;
      } catch (c) {
        e = c;
      }
  throw e;
} }, Yi = 0, Ki = function(e) {
  return e != null && e.constructor === void 0;
}, Gt.prototype.setState = function(e, t) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = qe({}, this.state), typeof e == "function" && (e = e(qe({}, n), this.props)), e && qe(n, e), e != null && this.__v && (t && this._sb.push(t), vs(this));
}, Gt.prototype.forceUpdate = function(e) {
  this.__v && (this.__e = !0, e && this.__h.push(e), vs(this));
}, Gt.prototype.render = Mr, qt = [], ao.__r = 0;
const P = (...e) => {
  const t = e.map((n) => Array.isArray(n) ? P(...n) : typeof n == "function" ? P(n()) : n !== null && typeof n == "object" ? Object.keys(n).filter((o) => {
    const i = n[o];
    return typeof i == "function" ? !!i() : !!i;
  }).join(" ") : n).filter((n) => typeof n == "string" && n.length);
  return t.length ? t.join(" ") : void 0;
};
function Qc({
  component: e = "div",
  className: t,
  children: n,
  style: o,
  attrs: i
}) {
  return te(e, {
    className: P(t),
    style: o,
    ...i
  }, n);
}
function il({
  component: e = "a",
  className: t,
  children: n,
  attrs: o,
  url: i,
  disabled: r,
  active: l,
  icon: c,
  text: _,
  target: h,
  trailingIcon: s,
  hint: p,
  style: f,
  onClick: a
}) {
  const u = [
    typeof c == "string" ? /* @__PURE__ */ te("i", {
      class: `icon ${c}`
    }) : c,
    /* @__PURE__ */ te("span", {
      className: "text"
    }, _),
    typeof n == "function" ? n() : n,
    typeof s == "string" ? /* @__PURE__ */ te("i", {
      class: `icon ${s}`
    }) : s
  ];
  return te(e, {
    className: P(t, { disabled: r, active: l }),
    title: p,
    [e === "a" ? "href" : "data-url"]: i,
    [e === "a" ? "target" : "data-target"]: h,
    style: f,
    onClick: a,
    ...o
  }, ...u);
}
function e_({
  component: e = "div",
  className: t,
  text: n,
  attrs: o,
  children: i,
  style: r,
  onClick: l
}) {
  return te(e, {
    className: P(t),
    style: r,
    onClick: l,
    ...o
  }, n, typeof i == "function" ? i() : i);
}
function t_({
  component: e = "div",
  className: t,
  style: n,
  space: o,
  flex: i,
  attrs: r,
  onClick: l,
  children: c
}) {
  return te(e, {
    className: P(t),
    style: { width: o, height: o, flex: i, ...n },
    onClick: l,
    ...r
  }, c);
}
function n_(e) {
  const {
    tag: t,
    className: n,
    style: o,
    renders: i,
    generateArgs: r = [],
    generatorThis: l,
    generators: c,
    onGenerate: _,
    onRenderItem: h,
    ...s
  } = e, p = [n], f = { ...o }, a = [], u = [];
  return i.forEach((b) => {
    var v;
    const d = [];
    typeof b == "string" && c && c[b] && (b = c[b]), typeof b == "function" ? _ ? d.push(..._.call(l, b, a, ...r)) : d.push(...(v = b.call(l, a, ...r)) != null ? v : []) : d.push(b), d.forEach((g) => {
      var k;
      g != null && (typeof g == "object" && !Wi(g) && ("html" in g || "__html" in g || "className" in g || "style" in g || "attrs" in g || "children" in g) ? g.html ? a.push(
        /* @__PURE__ */ Yo("div", {
          className: P(g.className),
          style: g.style,
          dangerouslySetInnerHTML: { __html: g.html },
          ...(k = g.attrs) != null ? k : {}
        })
      ) : g.__html ? u.push(g.__html) : (g.style && Object.assign(f, g.style), g.className && p.push(g.className), g.children && a.push(g.children), g.attrs && Object.assign(s, g.attrs)) : a.push(g));
    });
  }), u.length && Object.assign(s, { dangerouslySetInnerHTML: { __html: u } }), [{
    className: P(p),
    style: f,
    ...s
  }, a];
}
function _r({
  tag: e = "div",
  ...t
}) {
  const [n, o] = n_(t);
  return Yo(e, n, ...o);
}
function o_(e) {
  return /* @__PURE__ */ te(_r, {
    ...e
  });
}
function ll({
  component: e = "div",
  className: t,
  children: n,
  style: o,
  attrs: i
}) {
  return te(e, {
    className: P(t),
    style: o,
    ...i
  }, n);
}
const Lo = class extends Gt {
  constructor() {
    super(...arguments);
    S(this, "ref", Yc());
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
    const { itemProps: r, onClickItem: l } = n, c = { key: i, ...o };
    return r && Object.assign(c, r[o.type || "item"]), (l || o.onClick) && (c.onClick = this.handleItemClick.bind(this, c, i, o.onClick)), c.className = P(c.className), c;
  }
  renderItem(n, o, i) {
    const r = this.getItemRenderProps(n, o, i), { itemRender: l } = n;
    if (l) {
      if (typeof l == "object") {
        const d = l[o.type || "item"];
        if (d)
          return /* @__PURE__ */ te(d, {
            ...r
          });
      } else if (typeof l == "function") {
        const d = l.call(this, r, te);
        if (Ki(d))
          return d;
        typeof d == "object" && Object.assign(r, d);
      }
    }
    const { type: c = "item", component: _, key: h = i, rootAttrs: s, rootClass: p, rootStyle: f, rootChildren: a, ...u } = r, b = !_ || typeof _ == "string" ? this.constructor.ItemComponents && this.constructor.ItemComponents[c] || Lo.ItemComponents[c] : _;
    return Object.assign(u, {
      type: c,
      component: typeof _ == "string" ? _ : void 0
    }), this.renderTypedItem(b, {
      className: P(p),
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
    return /* @__PURE__ */ te("li", {
      className: P(`${this.name}-${i.type}`, l),
      key: c,
      ..._
    }, /* @__PURE__ */ te(n, {
      ...i
    }), typeof r == "function" ? r() : r);
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
      beforeRender: p,
      afterRender: f,
      beforeDestroy: a,
      ...u
    } = n, b = this.constructor.ROOT_TAG;
    return /* @__PURE__ */ te(b, {
      class: P(this.name, l),
      ...u,
      ref: this.ref
    }, c && c.map(this.renderItem.bind(this, n)), _);
  }
};
let Le = Lo;
S(Le, "ItemComponents", {
  divider: Qc,
  item: il,
  heading: e_,
  space: t_,
  custom: o_,
  basic: ll
}), S(Le, "ROOT_TAG", "menu"), S(Le, "NAME", "action-menu");
class bs extends xe {
}
S(bs, "NAME", "actionmenu"), S(bs, "Component", Le);
function ws({
  ...e
}) {
  return /* @__PURE__ */ te(il, {
    ...e
  });
}
var Sn, ge, gt;
class Ar extends Le {
  constructor(n) {
    var o;
    super(n);
    M(this, Sn, /* @__PURE__ */ new Set());
    M(this, ge, void 0);
    M(this, gt, (n, o, i) => {
      this.toggleNestedMenu(n, o), i.preventDefault();
    });
    R(this, ge, n.nestedShow === void 0), m(this, ge) && (this.state = { nestedShow: (o = n.defaultNestedShow) != null ? o : {} });
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
    return /* @__PURE__ */ te(i, {
      items: o,
      name: this.props.name,
      nestedShow: m(this, ge) ? this.state.nestedShow : this.props.nestedShow,
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
    var h;
    const r = super.getItemRenderProps(n, o, i);
    if (!this.isNestedItem(r))
      return r;
    const l = (h = r.key) != null ? h : i;
    m(this, Sn).add(l);
    const c = this.isNestedMenuShow(l);
    if (c && (r.rootChildren = [
      r.rootChildren,
      this.renderNestedMenu(o)
    ], r.component = ws), this.nestedTrigger === "hover")
      r.rootAttrs = {
        ...r.rootAttrs,
        onMouseEnter: m(this, gt).bind(this, l, !0),
        onMouseLeave: m(this, gt).bind(this, l, !1)
      };
    else if (this.nestedTrigger === "click") {
      const { onClick: s } = r;
      r.onClick = (p) => {
        m(this, gt).call(this, l, void 0, p), s == null || s(p);
      };
    }
    const _ = this.renderToggleIcon(c, r);
    return _ && (r.children = [r.children, _]), r.rootClass = [r.rootClass, "has-nested-menu", c ? "show" : ""], r;
  }
  isNestedMenuShow(n) {
    const o = m(this, ge) ? this.state.nestedShow : this.props.nestedShow;
    return o && typeof o == "object" ? o[n] : !!o;
  }
  toggleNestedMenu(n, o) {
    const { controlledMenu: i } = this.props;
    if (i)
      return i.toggleNestedMenu(n, o);
    if (!m(this, ge))
      return !1;
    let { nestedShow: r = {} } = this.state;
    if (typeof r == "boolean" && (r === !0 ? r = [...m(this, Sn).values()].reduce((l, c) => (l[c] = !0, l), {}) : r = {}), o === void 0)
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
    !m(this, ge) || this.setState({ nestedShow: !0 });
  }
  hideAllNestedMenu() {
    !m(this, ge) || this.setState({ nestedShow: !1 });
  }
}
Sn = new WeakMap(), ge = new WeakMap(), gt = new WeakMap(), S(Ar, "ItemComponents", {
  item: ws
});
class ks extends xe {
}
S(ks, "NAME", "actionmenunested"), S(ks, "Component", Ar);
var al, fr, cl, r_ = [];
function s_(e, t, n) {
  var o, i, r, l = {};
  for (r in t)
    r == "key" ? o = t[r] : r == "ref" ? i = t[r] : l[r] = t[r];
  if (arguments.length > 2 && (l.children = arguments.length > 3 ? al.call(arguments, 2) : n), typeof e == "function" && e.defaultProps != null)
    for (r in e.defaultProps)
      l[r] === void 0 && (l[r] = e.defaultProps[r]);
  return i_(e, l, o, i, null);
}
function i_(e, t, n, o, i) {
  var r = { type: e, props: t, key: n, ref: o, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: i == null ? ++cl : i };
  return i == null && fr.vnode != null && fr.vnode(r), r;
}
al = r_.slice, fr = { __e: function(e, t, n, o) {
  for (var i, r, l; t = t.__; )
    if ((i = t.__c) && !i.__)
      try {
        if ((r = i.constructor) && r.getDerivedStateFromError != null && (i.setState(r.getDerivedStateFromError(e)), l = i.__d), i.componentDidCatch != null && (i.componentDidCatch(e, o || {}), l = i.__d), l)
          return i.__E = i;
      } catch (c) {
        e = c;
      }
  throw e;
} }, cl = 0;
class Tr extends Ar {
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
    return /* @__PURE__ */ s_("span", {
      class: `${this.name}-toggle-icon caret-${t ? "down" : "right"}`
    });
  }
}
S(Tr, "NAME", "menu");
class $s extends xe {
}
S($s, "NAME", "menu"), S($s, "Component", Tr);
var Rr, j, _l, Yt, xs, fl = {}, ul = [], l_ = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function Ge(e, t) {
  for (var n in t)
    e[n] = t[n];
  return e;
}
function hl(e) {
  var t = e.parentNode;
  t && t.removeChild(e);
}
function jn(e, t, n) {
  var o, i, r, l = {};
  for (r in t)
    r == "key" ? o = t[r] : r == "ref" ? i = t[r] : l[r] = t[r];
  if (arguments.length > 2 && (l.children = arguments.length > 3 ? Rr.call(arguments, 2) : n), typeof e == "function" && e.defaultProps != null)
    for (r in e.defaultProps)
      l[r] === void 0 && (l[r] = e.defaultProps[r]);
  return qn(e, l, o, i, null);
}
function qn(e, t, n, o, i) {
  var r = { type: e, props: t, key: n, ref: o, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: i == null ? ++_l : i };
  return i == null && j.vnode != null && j.vnode(r), r;
}
function Nr(e) {
  return e.children;
}
function Kt(e, t) {
  this.props = e, this.context = t;
}
function hn(e, t) {
  if (t == null)
    return e.__ ? hn(e.__, e.__.__k.indexOf(e) + 1) : null;
  for (var n; t < e.__k.length; t++)
    if ((n = e.__k[t]) != null && n.__e != null)
      return n.__e;
  return typeof e.type == "function" ? hn(e) : null;
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
  (!e.__d && (e.__d = !0) && Yt.push(e) && !_o.__r++ || xs !== j.debounceRendering) && ((xs = j.debounceRendering) || setTimeout)(_o);
}
function _o() {
  for (var e; _o.__r = Yt.length; )
    e = Yt.sort(function(t, n) {
      return t.__v.__b - n.__v.__b;
    }), Yt = [], e.some(function(t) {
      var n, o, i, r, l, c;
      t.__d && (l = (r = (n = t).__v).__e, (c = n.__P) && (o = [], (i = Ge({}, r)).__v = r.__v + 1, ml(c, r, i, n.__n, c.ownerSVGElement !== void 0, r.__h != null ? [l] : null, o, l == null ? hn(r) : l, r.__h), c_(o, r), r.__e != l && pl(r)));
    });
}
function dl(e, t, n, o, i, r, l, c, _, h) {
  var s, p, f, a, u, b, d, v = o && o.__k || ul, g = v.length;
  for (n.__k = [], s = 0; s < t.length; s++)
    if ((a = n.__k[s] = (a = t[s]) == null || typeof a == "boolean" ? null : typeof a == "string" || typeof a == "number" || typeof a == "bigint" ? qn(null, a, null, null, a) : Array.isArray(a) ? qn(Nr, { children: a }, null, null, null) : a.__b > 0 ? qn(a.type, a.props, a.key, a.ref ? a.ref : null, a.__v) : a) != null) {
      if (a.__ = n, a.__b = n.__b + 1, (f = v[s]) === null || f && a.key == f.key && a.type === f.type)
        v[s] = void 0;
      else
        for (p = 0; p < g; p++) {
          if ((f = v[p]) && a.key == f.key && a.type === f.type) {
            v[p] = void 0;
            break;
          }
          f = null;
        }
      ml(e, a, f = f || fl, i, r, l, c, _, h), u = a.__e, (p = a.ref) && f.ref != p && (d || (d = []), f.ref && d.push(f.ref, null, a), d.push(p, a.__c || u, a)), u != null ? (b == null && (b = u), typeof a.type == "function" && a.__k === f.__k ? a.__d = _ = vl(a, _, e) : _ = gl(e, a, f, v, u, _), typeof n.type == "function" && (n.__d = _)) : _ && f.__e == _ && _.parentNode != e && (_ = hn(f));
    }
  for (n.__e = b, s = g; s--; )
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
  var l, c, _;
  if (t.__d !== void 0)
    l = t.__d, t.__d = void 0;
  else if (n == null || i != r || i.parentNode == null)
    e:
      if (r == null || r.parentNode !== e)
        e.appendChild(i), l = null;
      else {
        for (c = r, _ = 0; (c = c.nextSibling) && _ < o.length; _ += 2)
          if (c == i)
            break e;
        e.insertBefore(i, r), l = r;
      }
  return l !== void 0 ? l : i.nextSibling;
}
function a_(e, t, n, o, i) {
  var r;
  for (r in n)
    r === "children" || r === "key" || r in t || fo(e, r, null, n[r], o);
  for (r in t)
    i && typeof t[r] != "function" || r === "children" || r === "key" || r === "value" || r === "checked" || n[r] === t[r] || fo(e, r, t[r], n[r], o);
}
function Es(e, t, n) {
  t[0] === "-" ? e.setProperty(t, n) : e[t] = n == null ? "" : typeof n != "number" || l_.test(t) ? n : n + "px";
}
function fo(e, t, n, o, i) {
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
  this.l[e.type + !1](j.event ? j.event(e) : e);
}
function Ms(e) {
  this.l[e.type + !0](j.event ? j.event(e) : e);
}
function ml(e, t, n, o, i, r, l, c, _) {
  var h, s, p, f, a, u, b, d, v, g, k, w, E, $, x, y = t.type;
  if (t.constructor !== void 0)
    return null;
  n.__h != null && (_ = n.__h, c = t.__e = n.__e, t.__h = null, r = [c]), (h = j.__b) && h(t);
  try {
    e:
      if (typeof y == "function") {
        if (d = t.props, v = (h = y.contextType) && o[h.__c], g = h ? v ? v.props.value : h.__ : o, n.__c ? b = (s = t.__c = n.__c).__ = s.__E : ("prototype" in y && y.prototype.render ? t.__c = s = new y(d, g) : (t.__c = s = new Kt(d, g), s.constructor = y, s.render = f_), v && v.sub(s), s.props = d, s.state || (s.state = {}), s.context = g, s.__n = o, p = s.__d = !0, s.__h = [], s._sb = []), s.__s == null && (s.__s = s.state), y.getDerivedStateFromProps != null && (s.__s == s.state && (s.__s = Ge({}, s.__s)), Ge(s.__s, y.getDerivedStateFromProps(d, s.__s))), f = s.props, a = s.state, p)
          y.getDerivedStateFromProps == null && s.componentWillMount != null && s.componentWillMount(), s.componentDidMount != null && s.__h.push(s.componentDidMount);
        else {
          if (y.getDerivedStateFromProps == null && d !== f && s.componentWillReceiveProps != null && s.componentWillReceiveProps(d, g), !s.__e && s.shouldComponentUpdate != null && s.shouldComponentUpdate(d, s.__s, g) === !1 || t.__v === n.__v) {
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
        if (s.context = g, s.props = d, s.__v = t, s.__P = e, w = j.__r, E = 0, "prototype" in y && y.prototype.render) {
          for (s.state = s.__s, s.__d = !1, w && w(t), h = s.render(s.props, s.state, s.context), $ = 0; $ < s._sb.length; $++)
            s.__h.push(s._sb[$]);
          s._sb = [];
        } else
          do
            s.__d = !1, w && w(t), h = s.render(s.props, s.state, s.context), s.state = s.__s;
          while (s.__d && ++E < 25);
        s.state = s.__s, s.getChildContext != null && (o = Ge(Ge({}, o), s.getChildContext())), p || s.getSnapshotBeforeUpdate == null || (u = s.getSnapshotBeforeUpdate(f, a)), x = h != null && h.type === Nr && h.key == null ? h.props.children : h, dl(e, Array.isArray(x) ? x : [x], t, n, o, i, r, l, c, _), s.base = t.__e, t.__h = null, s.__h.length && l.push(s), b && (s.__E = s.__ = null), s.__e = !1;
      } else
        r == null && t.__v === n.__v ? (t.__k = n.__k, t.__e = n.__e) : t.__e = __(n.__e, t, n, o, i, r, l, _);
    (h = j.diffed) && h(t);
  } catch (C) {
    t.__v = null, (_ || r != null) && (t.__e = c, t.__h = !!_, r[r.indexOf(c)] = null), j.__e(C, t, n);
  }
}
function c_(e, t) {
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
function __(e, t, n, o, i, r, l, c) {
  var _, h, s, p = n.props, f = t.props, a = t.type, u = 0;
  if (a === "svg" && (i = !0), r != null) {
    for (; u < r.length; u++)
      if ((_ = r[u]) && "setAttribute" in _ == !!a && (a ? _.localName === a : _.nodeType === 3)) {
        e = _, r[u] = null;
        break;
      }
  }
  if (e == null) {
    if (a === null)
      return document.createTextNode(f);
    e = i ? document.createElementNS("http://www.w3.org/2000/svg", a) : document.createElement(a, f.is && f), r = null, c = !1;
  }
  if (a === null)
    p === f || c && e.data === f || (e.data = f);
  else {
    if (r = r && Rr.call(e.childNodes), h = (p = n.props || fl).dangerouslySetInnerHTML, s = f.dangerouslySetInnerHTML, !c) {
      if (r != null)
        for (p = {}, u = 0; u < e.attributes.length; u++)
          p[e.attributes[u].name] = e.attributes[u].value;
      (s || h) && (s && (h && s.__html == h.__html || s.__html === e.innerHTML) || (e.innerHTML = s && s.__html || ""));
    }
    if (a_(e, f, p, i, c), s)
      t.__k = [];
    else if (u = t.props.children, dl(e, Array.isArray(u) ? u : [u], t, n, o, i && a !== "foreignObject", r, l, r ? r[0] : n.__k && hn(n, 0), c), r != null)
      for (u = r.length; u--; )
        r[u] != null && hl(r[u]);
    c || ("value" in f && (u = f.value) !== void 0 && (u !== e.value || a === "progress" && !u || a === "option" && u !== p.value) && fo(e, "value", u, p.value, !1), "checked" in f && (u = f.checked) !== void 0 && u !== e.checked && fo(e, "checked", u, p.checked, !1));
  }
  return e;
}
function yl(e, t, n) {
  try {
    typeof e == "function" ? e(t) : e.current = t;
  } catch (o) {
    j.__e(o, n);
  }
}
function bl(e, t, n) {
  var o, i;
  if (j.unmount && j.unmount(e), (o = e.ref) && (o.current && o.current !== e.__e || yl(o, null, t)), (o = e.__c) != null) {
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
      o[i] && bl(o[i], t, n || typeof e.type != "function");
  n || e.__e == null || hl(e.__e), e.__ = e.__e = e.__d = void 0;
}
function f_(e, t, n) {
  return this.constructor(e, n);
}
Rr = ul.slice, j = { __e: function(e, t, n, o) {
  for (var i, r, l; t = t.__; )
    if ((i = t.__c) && !i.__)
      try {
        if ((r = i.constructor) && r.getDerivedStateFromError != null && (i.setState(r.getDerivedStateFromError(e)), l = i.__d), i.componentDidCatch != null && (i.componentDidCatch(e, o || {}), l = i.__d), l)
          return i.__E = i;
      } catch (c) {
        e = c;
      }
  throw e;
} }, _l = 0, Kt.prototype.setState = function(e, t) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = Ge({}, this.state), typeof e == "function" && (e = e(Ge({}, n), this.props)), e && Ge(n, e), e != null && this.__v && (t && this._sb.push(t), Cs(this));
}, Kt.prototype.forceUpdate = function(e) {
  this.__v && (this.__e = !0, e && this.__h.push(e), Cs(this));
}, Kt.prototype.render = Nr, Yt = [], _o.__r = 0;
class ur extends Kt {
  render() {
    const { percent: t, circleSize: n, circleBorderSize: o, circleBgColor: i, circleColor: r } = this.props, l = (n - o) / 2, c = n / 2;
    return /* @__PURE__ */ jn("svg", {
      width: n,
      height: n,
      class: "progress-circle"
    }, /* @__PURE__ */ jn("circle", {
      cx: c,
      cy: c,
      r: l,
      stroke: i,
      "stroke-width": o
    }), /* @__PURE__ */ jn("circle", {
      cx: c,
      cy: c,
      r: l,
      stroke: r,
      "stroke-dasharray": Math.PI * l * 2,
      "stroke-dashoffset": Math.PI * l * 2 * (100 - t) / 100,
      "stroke-width": o
    }), /* @__PURE__ */ jn("text", {
      x: c,
      y: c + o / 4,
      "dominant-baseline": "middle",
      style: { fontSize: `${l}px` }
    }, Math.round(t)));
  }
}
S(ur, "NAME", "zui.progress-circle"), S(ur, "defaultProps", {
  circleSize: 24,
  circleBorderSize: 2,
  circleBgColor: "var(--progress-circle-bg)",
  circleColor: "var(--progress-circle-bar-color)"
});
class As extends xe {
}
S(As, "NAME", "table-sorter"), S(As, "Component", ur);
function u_(e) {
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
function h_(e) {
  document.readyState !== "loading" ? e() : document.addEventListener("DOMContentLoaded", e);
}
function p_(e, t) {
  const n = typeof e == "string" ? document.querySelector(e) : e;
  if (!n)
    return !1;
  const o = n.getBoundingClientRect(), i = window.innerHeight || document.documentElement.clientHeight, r = window.innerWidth || document.documentElement.clientWidth;
  if (t != null && t.fullyCheck)
    return o.left >= 0 && o.top >= 0 && o.left + o.width <= r && o.top + o.height <= i;
  const l = o.top <= i && o.top + o.height >= 0, c = o.left <= r && o.left + o.width >= 0;
  return l && c;
}
const $h = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  selectText: u_,
  domReady: h_,
  isElementVisible: p_,
  classes: P
}, Symbol.toStringTag, { value: "Module" }));
let d_ = (e = 21) => crypto.getRandomValues(new Uint8Array(e)).reduce((t, n) => (n &= 63, n < 36 ? t += n.toString(36) : n < 62 ? t += (n - 26).toString(36).toUpperCase() : n > 62 ? t += "-" : t += "_", t), "");
var Mn, Ue, me, mt, yt, Gn;
const ns = class {
  constructor(t, n = "local") {
    M(this, yt);
    M(this, Mn, void 0);
    M(this, Ue, void 0);
    M(this, me, void 0);
    M(this, mt, void 0);
    R(this, Mn, n), R(this, Ue, `ZUI_STORE:${t != null ? t : d_()}`), R(this, me, n === "local" ? localStorage : sessionStorage);
  }
  get type() {
    return m(this, Mn);
  }
  get session() {
    return this.type === "session" ? this : (m(this, mt) || R(this, mt, new ns(m(this, Ue), "session")), m(this, mt));
  }
  get(t, n) {
    const o = m(this, me).getItem(X(this, yt, Gn).call(this, t));
    return typeof o == "string" ? JSON.parse(o) : o != null ? o : n;
  }
  set(t, n) {
    if (n == null)
      return this.remove(t);
    m(this, me).setItem(X(this, yt, Gn).call(this, t), JSON.stringify(n));
  }
  remove(t) {
    m(this, me).removeItem(X(this, yt, Gn).call(this, t));
  }
  each(t) {
    for (let n = 0; n < m(this, me).length; n++) {
      const o = m(this, me).key(n);
      if (o != null && o.startsWith(m(this, Ue))) {
        const i = m(this, me).getItem(o);
        typeof i == "string" && t(o.substring(m(this, Ue).length + 1), JSON.parse(i));
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
let uo = ns;
Mn = new WeakMap(), Ue = new WeakMap(), me = new WeakMap(), mt = new WeakMap(), yt = new WeakSet(), Gn = function(t) {
  return `${m(this, Ue)}:${t}`;
};
const v_ = new uo("DEFAULT");
function g_(e, t = "local") {
  return new uo(e, t);
}
Object.assign(v_, { create: g_ });
var Pr, B, wl, Xt, Ts, kl = {}, $l = [], m_ = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function Ye(e, t) {
  for (var n in t)
    e[n] = t[n];
  return e;
}
function xl(e) {
  var t = e.parentNode;
  t && t.removeChild(e);
}
function sr(e, t, n) {
  var o, i, r, l = {};
  for (r in t)
    r == "key" ? o = t[r] : r == "ref" ? i = t[r] : l[r] = t[r];
  if (arguments.length > 2 && (l.children = arguments.length > 3 ? Pr.call(arguments, 2) : n), typeof e == "function" && e.defaultProps != null)
    for (r in e.defaultProps)
      l[r] === void 0 && (l[r] = e.defaultProps[r]);
  return Yn(e, l, o, i, null);
}
function Yn(e, t, n, o, i) {
  var r = { type: e, props: t, key: n, ref: o, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: i == null ? ++wl : i };
  return i == null && B.vnode != null && B.vnode(r), r;
}
function Lr(e) {
  return e.children;
}
function Jt(e, t) {
  this.props = e, this.context = t;
}
function pn(e, t) {
  if (t == null)
    return e.__ ? pn(e.__, e.__.__k.indexOf(e) + 1) : null;
  for (var n; t < e.__k.length; t++)
    if ((n = e.__k[t]) != null && n.__e != null)
      return n.__e;
  return typeof e.type == "function" ? pn(e) : null;
}
function Cl(e) {
  var t, n;
  if ((e = e.__) != null && e.__c != null) {
    for (e.__e = e.__c.base = null, t = 0; t < e.__k.length; t++)
      if ((n = e.__k[t]) != null && n.__e != null) {
        e.__e = e.__c.base = n.__e;
        break;
      }
    return Cl(e);
  }
}
function Rs(e) {
  (!e.__d && (e.__d = !0) && Xt.push(e) && !ho.__r++ || Ts !== B.debounceRendering) && ((Ts = B.debounceRendering) || setTimeout)(ho);
}
function ho() {
  for (var e; ho.__r = Xt.length; )
    e = Xt.sort(function(t, n) {
      return t.__v.__b - n.__v.__b;
    }), Xt = [], e.some(function(t) {
      var n, o, i, r, l, c;
      t.__d && (l = (r = (n = t).__v).__e, (c = n.__P) && (o = [], (i = Ye({}, r)).__v = r.__v + 1, Al(c, r, i, n.__n, c.ownerSVGElement !== void 0, r.__h != null ? [l] : null, o, l == null ? pn(r) : l, r.__h), b_(o, r), r.__e != l && Cl(r)));
    });
}
function El(e, t, n, o, i, r, l, c, _, h) {
  var s, p, f, a, u, b, d, v = o && o.__k || $l, g = v.length;
  for (n.__k = [], s = 0; s < t.length; s++)
    if ((a = n.__k[s] = (a = t[s]) == null || typeof a == "boolean" ? null : typeof a == "string" || typeof a == "number" || typeof a == "bigint" ? Yn(null, a, null, null, a) : Array.isArray(a) ? Yn(Lr, { children: a }, null, null, null) : a.__b > 0 ? Yn(a.type, a.props, a.key, a.ref ? a.ref : null, a.__v) : a) != null) {
      if (a.__ = n, a.__b = n.__b + 1, (f = v[s]) === null || f && a.key == f.key && a.type === f.type)
        v[s] = void 0;
      else
        for (p = 0; p < g; p++) {
          if ((f = v[p]) && a.key == f.key && a.type === f.type) {
            v[p] = void 0;
            break;
          }
          f = null;
        }
      Al(e, a, f = f || kl, i, r, l, c, _, h), u = a.__e, (p = a.ref) && f.ref != p && (d || (d = []), f.ref && d.push(f.ref, null, a), d.push(p, a.__c || u, a)), u != null ? (b == null && (b = u), typeof a.type == "function" && a.__k === f.__k ? a.__d = _ = Sl(a, _, e) : _ = Ml(e, a, f, v, u, _), typeof n.type == "function" && (n.__d = _)) : _ && f.__e == _ && _.parentNode != e && (_ = pn(f));
    }
  for (n.__e = b, s = g; s--; )
    v[s] != null && Rl(v[s], v[s]);
  if (d)
    for (s = 0; s < d.length; s++)
      Tl(d[s], d[++s], d[++s]);
}
function Sl(e, t, n) {
  for (var o, i = e.__k, r = 0; i && r < i.length; r++)
    (o = i[r]) && (o.__ = e, t = typeof o.type == "function" ? Sl(o, t, n) : Ml(n, o, o, i, o.__e, t));
  return t;
}
function Ml(e, t, n, o, i, r) {
  var l, c, _;
  if (t.__d !== void 0)
    l = t.__d, t.__d = void 0;
  else if (n == null || i != r || i.parentNode == null)
    e:
      if (r == null || r.parentNode !== e)
        e.appendChild(i), l = null;
      else {
        for (c = r, _ = 0; (c = c.nextSibling) && _ < o.length; _ += 2)
          if (c == i)
            break e;
        e.insertBefore(i, r), l = r;
      }
  return l !== void 0 ? l : i.nextSibling;
}
function y_(e, t, n, o, i) {
  var r;
  for (r in n)
    r === "children" || r === "key" || r in t || po(e, r, null, n[r], o);
  for (r in t)
    i && typeof t[r] != "function" || r === "children" || r === "key" || r === "value" || r === "checked" || n[r] === t[r] || po(e, r, t[r], n[r], o);
}
function Ns(e, t, n) {
  t[0] === "-" ? e.setProperty(t, n) : e[t] = n == null ? "" : typeof n != "number" || m_.test(t) ? n : n + "px";
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
            n && t in n || Ns(e.style, t, "");
        if (n)
          for (t in n)
            o && n[t] === o[t] || Ns(e.style, t, n[t]);
      }
    else if (t[0] === "o" && t[1] === "n")
      r = t !== (t = t.replace(/Capture$/, "")), t = t.toLowerCase() in e ? t.toLowerCase().slice(2) : t.slice(2), e.l || (e.l = {}), e.l[t + r] = n, n ? o || e.addEventListener(t, r ? Ls : Ps, r) : e.removeEventListener(t, r ? Ls : Ps, r);
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
function Ps(e) {
  this.l[e.type + !1](B.event ? B.event(e) : e);
}
function Ls(e) {
  this.l[e.type + !0](B.event ? B.event(e) : e);
}
function Al(e, t, n, o, i, r, l, c, _) {
  var h, s, p, f, a, u, b, d, v, g, k, w, E, $, x, y = t.type;
  if (t.constructor !== void 0)
    return null;
  n.__h != null && (_ = n.__h, c = t.__e = n.__e, t.__h = null, r = [c]), (h = B.__b) && h(t);
  try {
    e:
      if (typeof y == "function") {
        if (d = t.props, v = (h = y.contextType) && o[h.__c], g = h ? v ? v.props.value : h.__ : o, n.__c ? b = (s = t.__c = n.__c).__ = s.__E : ("prototype" in y && y.prototype.render ? t.__c = s = new y(d, g) : (t.__c = s = new Jt(d, g), s.constructor = y, s.render = k_), v && v.sub(s), s.props = d, s.state || (s.state = {}), s.context = g, s.__n = o, p = s.__d = !0, s.__h = [], s._sb = []), s.__s == null && (s.__s = s.state), y.getDerivedStateFromProps != null && (s.__s == s.state && (s.__s = Ye({}, s.__s)), Ye(s.__s, y.getDerivedStateFromProps(d, s.__s))), f = s.props, a = s.state, p)
          y.getDerivedStateFromProps == null && s.componentWillMount != null && s.componentWillMount(), s.componentDidMount != null && s.__h.push(s.componentDidMount);
        else {
          if (y.getDerivedStateFromProps == null && d !== f && s.componentWillReceiveProps != null && s.componentWillReceiveProps(d, g), !s.__e && s.shouldComponentUpdate != null && s.shouldComponentUpdate(d, s.__s, g) === !1 || t.__v === n.__v) {
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
        if (s.context = g, s.props = d, s.__v = t, s.__P = e, w = B.__r, E = 0, "prototype" in y && y.prototype.render) {
          for (s.state = s.__s, s.__d = !1, w && w(t), h = s.render(s.props, s.state, s.context), $ = 0; $ < s._sb.length; $++)
            s.__h.push(s._sb[$]);
          s._sb = [];
        } else
          do
            s.__d = !1, w && w(t), h = s.render(s.props, s.state, s.context), s.state = s.__s;
          while (s.__d && ++E < 25);
        s.state = s.__s, s.getChildContext != null && (o = Ye(Ye({}, o), s.getChildContext())), p || s.getSnapshotBeforeUpdate == null || (u = s.getSnapshotBeforeUpdate(f, a)), x = h != null && h.type === Lr && h.key == null ? h.props.children : h, El(e, Array.isArray(x) ? x : [x], t, n, o, i, r, l, c, _), s.base = t.__e, t.__h = null, s.__h.length && l.push(s), b && (s.__E = s.__ = null), s.__e = !1;
      } else
        r == null && t.__v === n.__v ? (t.__k = n.__k, t.__e = n.__e) : t.__e = w_(n.__e, t, n, o, i, r, l, _);
    (h = B.diffed) && h(t);
  } catch (C) {
    t.__v = null, (_ || r != null) && (t.__e = c, t.__h = !!_, r[r.indexOf(c)] = null), B.__e(C, t, n);
  }
}
function b_(e, t) {
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
function w_(e, t, n, o, i, r, l, c) {
  var _, h, s, p = n.props, f = t.props, a = t.type, u = 0;
  if (a === "svg" && (i = !0), r != null) {
    for (; u < r.length; u++)
      if ((_ = r[u]) && "setAttribute" in _ == !!a && (a ? _.localName === a : _.nodeType === 3)) {
        e = _, r[u] = null;
        break;
      }
  }
  if (e == null) {
    if (a === null)
      return document.createTextNode(f);
    e = i ? document.createElementNS("http://www.w3.org/2000/svg", a) : document.createElement(a, f.is && f), r = null, c = !1;
  }
  if (a === null)
    p === f || c && e.data === f || (e.data = f);
  else {
    if (r = r && Pr.call(e.childNodes), h = (p = n.props || kl).dangerouslySetInnerHTML, s = f.dangerouslySetInnerHTML, !c) {
      if (r != null)
        for (p = {}, u = 0; u < e.attributes.length; u++)
          p[e.attributes[u].name] = e.attributes[u].value;
      (s || h) && (s && (h && s.__html == h.__html || s.__html === e.innerHTML) || (e.innerHTML = s && s.__html || ""));
    }
    if (y_(e, f, p, i, c), s)
      t.__k = [];
    else if (u = t.props.children, El(e, Array.isArray(u) ? u : [u], t, n, o, i && a !== "foreignObject", r, l, r ? r[0] : n.__k && pn(n, 0), c), r != null)
      for (u = r.length; u--; )
        r[u] != null && xl(r[u]);
    c || ("value" in f && (u = f.value) !== void 0 && (u !== e.value || a === "progress" && !u || a === "option" && u !== p.value) && po(e, "value", u, p.value, !1), "checked" in f && (u = f.checked) !== void 0 && u !== e.checked && po(e, "checked", u, p.checked, !1));
  }
  return e;
}
function Tl(e, t, n) {
  try {
    typeof e == "function" ? e(t) : e.current = t;
  } catch (o) {
    B.__e(o, n);
  }
}
function Rl(e, t, n) {
  var o, i;
  if (B.unmount && B.unmount(e), (o = e.ref) && (o.current && o.current !== e.__e || Tl(o, null, t)), (o = e.__c) != null) {
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
      o[i] && Rl(o[i], t, n || typeof e.type != "function");
  n || e.__e == null || xl(e.__e), e.__ = e.__e = e.__d = void 0;
}
function k_(e, t, n) {
  return this.constructor(e, n);
}
Pr = $l.slice, B = { __e: function(e, t, n, o) {
  for (var i, r, l; t = t.__; )
    if ((i = t.__c) && !i.__)
      try {
        if ((r = i.constructor) && r.getDerivedStateFromError != null && (i.setState(r.getDerivedStateFromError(e)), l = i.__d), i.componentDidCatch != null && (i.componentDidCatch(e, o || {}), l = i.__d), l)
          return i.__E = i;
      } catch (c) {
        e = c;
      }
  throw e;
} }, wl = 0, Jt.prototype.setState = function(e, t) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = Ye({}, this.state), typeof e == "function" && (e = e(Ye({}, n), this.props)), e && Ye(n, e), e != null && this.__v && (t && this._sb.push(t), Rs(this));
}, Jt.prototype.forceUpdate = function(e) {
  this.__v && (this.__e = !0, e && this.__h.push(e), Rs(this));
}, Jt.prototype.render = Lr, Xt = [], ho.__r = 0;
function $_(e) {
  if (e.indexOf("#") === 0 && (e = e.slice(1)), e.length === 3 && (e = e[0] + e[0] + e[1] + e[1] + e[2] + e[2]), e.length !== 6)
    throw new Error(`Invalid HEX color "${e}".`);
  return [
    parseInt(e.slice(0, 2), 16),
    parseInt(e.slice(2, 4), 16),
    parseInt(e.slice(4, 6), 16)
  ];
}
function x_(e) {
  const [t, n, o] = typeof e == "string" ? $_(e) : e;
  return t * 0.299 + n * 0.587 + o * 0.114 > 186;
}
function Os(e, t) {
  var n, o;
  return x_(e) ? (n = t == null ? void 0 : t.dark) != null ? n : "#333333" : (o = t == null ? void 0 : t.light) != null ? o : "#ffffff";
}
function Ds(e, t = 255) {
  return Math.min(Math.max(e, 0), t);
}
function C_(e, t, n) {
  e = e % 360 / 360, t = Ds(t), n = Ds(n);
  const o = n <= 0.5 ? n * (t + 1) : n + t - n * t, i = n * 2 - o, r = (l) => (l = l < 0 ? l + 1 : l > 1 ? l - 1 : l, l * 6 < 1 ? i + (o - i) * l * 6 : l * 2 < 1 ? o : l * 3 < 2 ? i + (o - i) * (2 / 3 - l) * 6 : i);
  return [
    r(e + 1 / 3) * 255,
    r(e) * 255,
    r(e - 1 / 3) * 255
  ];
}
function E_(e) {
  let t = 0;
  if (typeof e != "string" && (e = String(e)), e && e.length)
    for (let n = 0; n < e.length; ++n)
      t += (n + 1) * e.charCodeAt(n);
  return t;
}
function S_(e, t) {
  return /^[\u4e00-\u9fa5\s]+$/.test(e) ? e = e.length <= t ? e : e.substring(e.length - t) : /^[A-Za-z\d\s]+$/.test(e) ? e = e[0].toUpperCase() : e = e.length <= t ? e : e.substring(0, t), e;
}
class M_ extends Jt {
  render() {
    const {
      className: t,
      style: n,
      size: o = "",
      circle: i,
      rounded: r,
      background: l,
      foreColor: c,
      text: _,
      code: h,
      maxTextLength: s = 2,
      src: p,
      hueDistance: f = 43,
      saturation: a = 0.4,
      lightness: u = 0.6,
      children: b,
      ...d
    } = this.props, v = ["avatar", t], g = { ...n, background: l, color: c };
    let k = 32;
    o && (typeof o == "number" ? (g.width = `${o}px`, g.height = `${o}px`, g.fontSize = `${Math.max(12, Math.round(o / 2))}px`, k = o) : (v.push(`size-${o}`), k = { xs: 20, sm: 24, lg: 48, xl: 80 }[o])), i ? v.push("circle") : r && (typeof r == "number" ? g.borderRadius = `${r}px` : v.push(`rounded-${r}`));
    let w;
    if (p)
      v.push("has-img"), w = /* @__PURE__ */ sr("img", {
        className: "avatar-img",
        src: p,
        alt: _
      });
    else if (_ != null && _.length) {
      const E = S_(_, s);
      if (v.push("has-text", `has-text-${E.length}`), l)
        !c && l && (g.color = Os(l));
      else {
        const x = h != null ? h : _, y = (typeof x == "number" ? x : E_(x)) * f % 360;
        if (g.background = `hsl(${y},${a * 100}%,${u * 100}%)`, !c) {
          const C = C_(y, a, u);
          g.color = Os(C);
        }
      }
      let $;
      k && k < 14 * E.length && ($ = { transform: `scale(${k / (14 * E.length)})`, whiteSpace: "nowrap" }), w = /* @__PURE__ */ sr("div", {
        "data-actualSize": k,
        className: "avatar-text",
        style: $
      }, E);
    }
    return /* @__PURE__ */ sr("div", {
      className: P(v),
      style: g,
      ...d
    }, w, b);
  }
}
class Hs extends xe {
}
S(Hs, "NAME", "avatar"), S(Hs, "Component", M_);
var Or, z, Nl, Pl, Zt, Ws, Ll = {}, Ol = [], A_ = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function Ke(e, t) {
  for (var n in t)
    e[n] = t[n];
  return e;
}
function Dl(e) {
  var t = e.parentNode;
  t && t.removeChild(e);
}
function ir(e, t, n) {
  var o, i, r, l = {};
  for (r in t)
    r == "key" ? o = t[r] : r == "ref" ? i = t[r] : l[r] = t[r];
  if (arguments.length > 2 && (l.children = arguments.length > 3 ? Or.call(arguments, 2) : n), typeof e == "function" && e.defaultProps != null)
    for (r in e.defaultProps)
      l[r] === void 0 && (l[r] = e.defaultProps[r]);
  return Kn(e, l, o, i, null);
}
function Kn(e, t, n, o, i) {
  var r = { type: e, props: t, key: n, ref: o, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: i == null ? ++Nl : i };
  return i == null && z.vnode != null && z.vnode(r), r;
}
function Dr(e) {
  return e.children;
}
function Qt(e, t) {
  this.props = e, this.context = t;
}
function dn(e, t) {
  if (t == null)
    return e.__ ? dn(e.__, e.__.__k.indexOf(e) + 1) : null;
  for (var n; t < e.__k.length; t++)
    if ((n = e.__k[t]) != null && n.__e != null)
      return n.__e;
  return typeof e.type == "function" ? dn(e) : null;
}
function Hl(e) {
  var t, n;
  if ((e = e.__) != null && e.__c != null) {
    for (e.__e = e.__c.base = null, t = 0; t < e.__k.length; t++)
      if ((n = e.__k[t]) != null && n.__e != null) {
        e.__e = e.__c.base = n.__e;
        break;
      }
    return Hl(e);
  }
}
function Is(e) {
  (!e.__d && (e.__d = !0) && Zt.push(e) && !vo.__r++ || Ws !== z.debounceRendering) && ((Ws = z.debounceRendering) || setTimeout)(vo);
}
function vo() {
  for (var e; vo.__r = Zt.length; )
    e = Zt.sort(function(t, n) {
      return t.__v.__b - n.__v.__b;
    }), Zt = [], e.some(function(t) {
      var n, o, i, r, l, c;
      t.__d && (l = (r = (n = t).__v).__e, (c = n.__P) && (o = [], (i = Ke({}, r)).__v = r.__v + 1, jl(c, r, i, n.__n, c.ownerSVGElement !== void 0, r.__h != null ? [l] : null, o, l == null ? dn(r) : l, r.__h), R_(o, r), r.__e != l && Hl(r)));
    });
}
function Wl(e, t, n, o, i, r, l, c, _, h) {
  var s, p, f, a, u, b, d, v = o && o.__k || Ol, g = v.length;
  for (n.__k = [], s = 0; s < t.length; s++)
    if ((a = n.__k[s] = (a = t[s]) == null || typeof a == "boolean" ? null : typeof a == "string" || typeof a == "number" || typeof a == "bigint" ? Kn(null, a, null, null, a) : Array.isArray(a) ? Kn(Dr, { children: a }, null, null, null) : a.__b > 0 ? Kn(a.type, a.props, a.key, a.ref ? a.ref : null, a.__v) : a) != null) {
      if (a.__ = n, a.__b = n.__b + 1, (f = v[s]) === null || f && a.key == f.key && a.type === f.type)
        v[s] = void 0;
      else
        for (p = 0; p < g; p++) {
          if ((f = v[p]) && a.key == f.key && a.type === f.type) {
            v[p] = void 0;
            break;
          }
          f = null;
        }
      jl(e, a, f = f || Ll, i, r, l, c, _, h), u = a.__e, (p = a.ref) && f.ref != p && (d || (d = []), f.ref && d.push(f.ref, null, a), d.push(p, a.__c || u, a)), u != null ? (b == null && (b = u), typeof a.type == "function" && a.__k === f.__k ? a.__d = _ = Il(a, _, e) : _ = Ul(e, a, f, v, u, _), typeof n.type == "function" && (n.__d = _)) : _ && f.__e == _ && _.parentNode != e && (_ = dn(f));
    }
  for (n.__e = b, s = g; s--; )
    v[s] != null && zl(v[s], v[s]);
  if (d)
    for (s = 0; s < d.length; s++)
      Bl(d[s], d[++s], d[++s]);
}
function Il(e, t, n) {
  for (var o, i = e.__k, r = 0; i && r < i.length; r++)
    (o = i[r]) && (o.__ = e, t = typeof o.type == "function" ? Il(o, t, n) : Ul(n, o, o, i, o.__e, t));
  return t;
}
function Ul(e, t, n, o, i, r) {
  var l, c, _;
  if (t.__d !== void 0)
    l = t.__d, t.__d = void 0;
  else if (n == null || i != r || i.parentNode == null)
    e:
      if (r == null || r.parentNode !== e)
        e.appendChild(i), l = null;
      else {
        for (c = r, _ = 0; (c = c.nextSibling) && _ < o.length; _ += 2)
          if (c == i)
            break e;
        e.insertBefore(i, r), l = r;
      }
  return l !== void 0 ? l : i.nextSibling;
}
function T_(e, t, n, o, i) {
  var r;
  for (r in n)
    r === "children" || r === "key" || r in t || go(e, r, null, n[r], o);
  for (r in t)
    i && typeof t[r] != "function" || r === "children" || r === "key" || r === "value" || r === "checked" || n[r] === t[r] || go(e, r, t[r], n[r], o);
}
function Us(e, t, n) {
  t[0] === "-" ? e.setProperty(t, n) : e[t] = n == null ? "" : typeof n != "number" || A_.test(t) ? n : n + "px";
}
function go(e, t, n, o, i) {
  var r;
  e:
    if (t === "style")
      if (typeof n == "string")
        e.style.cssText = n;
      else {
        if (typeof o == "string" && (e.style.cssText = o = ""), o)
          for (t in o)
            n && t in n || Us(e.style, t, "");
        if (n)
          for (t in n)
            o && n[t] === o[t] || Us(e.style, t, n[t]);
      }
    else if (t[0] === "o" && t[1] === "n")
      r = t !== (t = t.replace(/Capture$/, "")), t = t.toLowerCase() in e ? t.toLowerCase().slice(2) : t.slice(2), e.l || (e.l = {}), e.l[t + r] = n, n ? o || e.addEventListener(t, r ? Bs : js, r) : e.removeEventListener(t, r ? Bs : js, r);
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
function js(e) {
  this.l[e.type + !1](z.event ? z.event(e) : e);
}
function Bs(e) {
  this.l[e.type + !0](z.event ? z.event(e) : e);
}
function jl(e, t, n, o, i, r, l, c, _) {
  var h, s, p, f, a, u, b, d, v, g, k, w, E, $, x, y = t.type;
  if (t.constructor !== void 0)
    return null;
  n.__h != null && (_ = n.__h, c = t.__e = n.__e, t.__h = null, r = [c]), (h = z.__b) && h(t);
  try {
    e:
      if (typeof y == "function") {
        if (d = t.props, v = (h = y.contextType) && o[h.__c], g = h ? v ? v.props.value : h.__ : o, n.__c ? b = (s = t.__c = n.__c).__ = s.__E : ("prototype" in y && y.prototype.render ? t.__c = s = new y(d, g) : (t.__c = s = new Qt(d, g), s.constructor = y, s.render = P_), v && v.sub(s), s.props = d, s.state || (s.state = {}), s.context = g, s.__n = o, p = s.__d = !0, s.__h = [], s._sb = []), s.__s == null && (s.__s = s.state), y.getDerivedStateFromProps != null && (s.__s == s.state && (s.__s = Ke({}, s.__s)), Ke(s.__s, y.getDerivedStateFromProps(d, s.__s))), f = s.props, a = s.state, p)
          y.getDerivedStateFromProps == null && s.componentWillMount != null && s.componentWillMount(), s.componentDidMount != null && s.__h.push(s.componentDidMount);
        else {
          if (y.getDerivedStateFromProps == null && d !== f && s.componentWillReceiveProps != null && s.componentWillReceiveProps(d, g), !s.__e && s.shouldComponentUpdate != null && s.shouldComponentUpdate(d, s.__s, g) === !1 || t.__v === n.__v) {
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
        if (s.context = g, s.props = d, s.__v = t, s.__P = e, w = z.__r, E = 0, "prototype" in y && y.prototype.render) {
          for (s.state = s.__s, s.__d = !1, w && w(t), h = s.render(s.props, s.state, s.context), $ = 0; $ < s._sb.length; $++)
            s.__h.push(s._sb[$]);
          s._sb = [];
        } else
          do
            s.__d = !1, w && w(t), h = s.render(s.props, s.state, s.context), s.state = s.__s;
          while (s.__d && ++E < 25);
        s.state = s.__s, s.getChildContext != null && (o = Ke(Ke({}, o), s.getChildContext())), p || s.getSnapshotBeforeUpdate == null || (u = s.getSnapshotBeforeUpdate(f, a)), x = h != null && h.type === Dr && h.key == null ? h.props.children : h, Wl(e, Array.isArray(x) ? x : [x], t, n, o, i, r, l, c, _), s.base = t.__e, t.__h = null, s.__h.length && l.push(s), b && (s.__E = s.__ = null), s.__e = !1;
      } else
        r == null && t.__v === n.__v ? (t.__k = n.__k, t.__e = n.__e) : t.__e = N_(n.__e, t, n, o, i, r, l, _);
    (h = z.diffed) && h(t);
  } catch (C) {
    t.__v = null, (_ || r != null) && (t.__e = c, t.__h = !!_, r[r.indexOf(c)] = null), z.__e(C, t, n);
  }
}
function R_(e, t) {
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
function N_(e, t, n, o, i, r, l, c) {
  var _, h, s, p = n.props, f = t.props, a = t.type, u = 0;
  if (a === "svg" && (i = !0), r != null) {
    for (; u < r.length; u++)
      if ((_ = r[u]) && "setAttribute" in _ == !!a && (a ? _.localName === a : _.nodeType === 3)) {
        e = _, r[u] = null;
        break;
      }
  }
  if (e == null) {
    if (a === null)
      return document.createTextNode(f);
    e = i ? document.createElementNS("http://www.w3.org/2000/svg", a) : document.createElement(a, f.is && f), r = null, c = !1;
  }
  if (a === null)
    p === f || c && e.data === f || (e.data = f);
  else {
    if (r = r && Or.call(e.childNodes), h = (p = n.props || Ll).dangerouslySetInnerHTML, s = f.dangerouslySetInnerHTML, !c) {
      if (r != null)
        for (p = {}, u = 0; u < e.attributes.length; u++)
          p[e.attributes[u].name] = e.attributes[u].value;
      (s || h) && (s && (h && s.__html == h.__html || s.__html === e.innerHTML) || (e.innerHTML = s && s.__html || ""));
    }
    if (T_(e, f, p, i, c), s)
      t.__k = [];
    else if (u = t.props.children, Wl(e, Array.isArray(u) ? u : [u], t, n, o, i && a !== "foreignObject", r, l, r ? r[0] : n.__k && dn(n, 0), c), r != null)
      for (u = r.length; u--; )
        r[u] != null && Dl(r[u]);
    c || ("value" in f && (u = f.value) !== void 0 && (u !== e.value || a === "progress" && !u || a === "option" && u !== p.value) && go(e, "value", u, p.value, !1), "checked" in f && (u = f.checked) !== void 0 && u !== e.checked && go(e, "checked", u, p.checked, !1));
  }
  return e;
}
function Bl(e, t, n) {
  try {
    typeof e == "function" ? e(t) : e.current = t;
  } catch (o) {
    z.__e(o, n);
  }
}
function zl(e, t, n) {
  var o, i;
  if (z.unmount && z.unmount(e), (o = e.ref) && (o.current && o.current !== e.__e || Bl(o, null, t)), (o = e.__c) != null) {
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
      o[i] && zl(o[i], t, n || typeof e.type != "function");
  n || e.__e == null || Dl(e.__e), e.__ = e.__e = e.__d = void 0;
}
function P_(e, t, n) {
  return this.constructor(e, n);
}
Or = Ol.slice, z = { __e: function(e, t, n, o) {
  for (var i, r, l; t = t.__; )
    if ((i = t.__c) && !i.__)
      try {
        if ((r = i.constructor) && r.getDerivedStateFromError != null && (i.setState(r.getDerivedStateFromError(e)), l = i.__d), i.componentDidCatch != null && (i.componentDidCatch(e, o || {}), l = i.__d), l)
          return i.__E = i;
      } catch (c) {
        e = c;
      }
  throw e;
} }, Nl = 0, Pl = function(e) {
  return e != null && e.constructor === void 0;
}, Qt.prototype.setState = function(e, t) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = Ke({}, this.state), typeof e == "function" && (e = e(Ke({}, n), this.props)), e && Ke(n, e), e != null && this.__v && (t && this._sb.push(t), Is(this));
}, Qt.prototype.forceUpdate = function(e) {
  this.__v && (this.__e = !0, e && this.__h.push(e), Is(this));
}, Qt.prototype.render = Dr, Zt = [], vo.__r = 0;
var Hr, F, Fl, en, zs, Vl = {}, ql = [], L_ = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function Xe(e, t) {
  for (var n in t)
    e[n] = t[n];
  return e;
}
function Gl(e) {
  var t = e.parentNode;
  t && t.removeChild(e);
}
function Ut(e, t, n) {
  var o, i, r, l = {};
  for (r in t)
    r == "key" ? o = t[r] : r == "ref" ? i = t[r] : l[r] = t[r];
  if (arguments.length > 2 && (l.children = arguments.length > 3 ? Hr.call(arguments, 2) : n), typeof e == "function" && e.defaultProps != null)
    for (r in e.defaultProps)
      l[r] === void 0 && (l[r] = e.defaultProps[r]);
  return Xn(e, l, o, i, null);
}
function Xn(e, t, n, o, i) {
  var r = { type: e, props: t, key: n, ref: o, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: i == null ? ++Fl : i };
  return i == null && F.vnode != null && F.vnode(r), r;
}
function Wr(e) {
  return e.children;
}
function tn(e, t) {
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
function Yl(e) {
  var t, n;
  if ((e = e.__) != null && e.__c != null) {
    for (e.__e = e.__c.base = null, t = 0; t < e.__k.length; t++)
      if ((n = e.__k[t]) != null && n.__e != null) {
        e.__e = e.__c.base = n.__e;
        break;
      }
    return Yl(e);
  }
}
function Fs(e) {
  (!e.__d && (e.__d = !0) && en.push(e) && !mo.__r++ || zs !== F.debounceRendering) && ((zs = F.debounceRendering) || setTimeout)(mo);
}
function mo() {
  for (var e; mo.__r = en.length; )
    e = en.sort(function(t, n) {
      return t.__v.__b - n.__v.__b;
    }), en = [], e.some(function(t) {
      var n, o, i, r, l, c;
      t.__d && (l = (r = (n = t).__v).__e, (c = n.__P) && (o = [], (i = Xe({}, r)).__v = r.__v + 1, Zl(c, r, i, n.__n, c.ownerSVGElement !== void 0, r.__h != null ? [l] : null, o, l == null ? vn(r) : l, r.__h), D_(o, r), r.__e != l && Yl(r)));
    });
}
function Kl(e, t, n, o, i, r, l, c, _, h) {
  var s, p, f, a, u, b, d, v = o && o.__k || ql, g = v.length;
  for (n.__k = [], s = 0; s < t.length; s++)
    if ((a = n.__k[s] = (a = t[s]) == null || typeof a == "boolean" ? null : typeof a == "string" || typeof a == "number" || typeof a == "bigint" ? Xn(null, a, null, null, a) : Array.isArray(a) ? Xn(Wr, { children: a }, null, null, null) : a.__b > 0 ? Xn(a.type, a.props, a.key, a.ref ? a.ref : null, a.__v) : a) != null) {
      if (a.__ = n, a.__b = n.__b + 1, (f = v[s]) === null || f && a.key == f.key && a.type === f.type)
        v[s] = void 0;
      else
        for (p = 0; p < g; p++) {
          if ((f = v[p]) && a.key == f.key && a.type === f.type) {
            v[p] = void 0;
            break;
          }
          f = null;
        }
      Zl(e, a, f = f || Vl, i, r, l, c, _, h), u = a.__e, (p = a.ref) && f.ref != p && (d || (d = []), f.ref && d.push(f.ref, null, a), d.push(p, a.__c || u, a)), u != null ? (b == null && (b = u), typeof a.type == "function" && a.__k === f.__k ? a.__d = _ = Xl(a, _, e) : _ = Jl(e, a, f, v, u, _), typeof n.type == "function" && (n.__d = _)) : _ && f.__e == _ && _.parentNode != e && (_ = vn(f));
    }
  for (n.__e = b, s = g; s--; )
    v[s] != null && ea(v[s], v[s]);
  if (d)
    for (s = 0; s < d.length; s++)
      Ql(d[s], d[++s], d[++s]);
}
function Xl(e, t, n) {
  for (var o, i = e.__k, r = 0; i && r < i.length; r++)
    (o = i[r]) && (o.__ = e, t = typeof o.type == "function" ? Xl(o, t, n) : Jl(n, o, o, i, o.__e, t));
  return t;
}
function Jl(e, t, n, o, i, r) {
  var l, c, _;
  if (t.__d !== void 0)
    l = t.__d, t.__d = void 0;
  else if (n == null || i != r || i.parentNode == null)
    e:
      if (r == null || r.parentNode !== e)
        e.appendChild(i), l = null;
      else {
        for (c = r, _ = 0; (c = c.nextSibling) && _ < o.length; _ += 2)
          if (c == i)
            break e;
        e.insertBefore(i, r), l = r;
      }
  return l !== void 0 ? l : i.nextSibling;
}
function O_(e, t, n, o, i) {
  var r;
  for (r in n)
    r === "children" || r === "key" || r in t || yo(e, r, null, n[r], o);
  for (r in t)
    i && typeof t[r] != "function" || r === "children" || r === "key" || r === "value" || r === "checked" || n[r] === t[r] || yo(e, r, t[r], n[r], o);
}
function Vs(e, t, n) {
  t[0] === "-" ? e.setProperty(t, n) : e[t] = n == null ? "" : typeof n != "number" || L_.test(t) ? n : n + "px";
}
function yo(e, t, n, o, i) {
  var r;
  e:
    if (t === "style")
      if (typeof n == "string")
        e.style.cssText = n;
      else {
        if (typeof o == "string" && (e.style.cssText = o = ""), o)
          for (t in o)
            n && t in n || Vs(e.style, t, "");
        if (n)
          for (t in n)
            o && n[t] === o[t] || Vs(e.style, t, n[t]);
      }
    else if (t[0] === "o" && t[1] === "n")
      r = t !== (t = t.replace(/Capture$/, "")), t = t.toLowerCase() in e ? t.toLowerCase().slice(2) : t.slice(2), e.l || (e.l = {}), e.l[t + r] = n, n ? o || e.addEventListener(t, r ? Gs : qs, r) : e.removeEventListener(t, r ? Gs : qs, r);
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
function qs(e) {
  this.l[e.type + !1](F.event ? F.event(e) : e);
}
function Gs(e) {
  this.l[e.type + !0](F.event ? F.event(e) : e);
}
function Zl(e, t, n, o, i, r, l, c, _) {
  var h, s, p, f, a, u, b, d, v, g, k, w, E, $, x, y = t.type;
  if (t.constructor !== void 0)
    return null;
  n.__h != null && (_ = n.__h, c = t.__e = n.__e, t.__h = null, r = [c]), (h = F.__b) && h(t);
  try {
    e:
      if (typeof y == "function") {
        if (d = t.props, v = (h = y.contextType) && o[h.__c], g = h ? v ? v.props.value : h.__ : o, n.__c ? b = (s = t.__c = n.__c).__ = s.__E : ("prototype" in y && y.prototype.render ? t.__c = s = new y(d, g) : (t.__c = s = new tn(d, g), s.constructor = y, s.render = W_), v && v.sub(s), s.props = d, s.state || (s.state = {}), s.context = g, s.__n = o, p = s.__d = !0, s.__h = [], s._sb = []), s.__s == null && (s.__s = s.state), y.getDerivedStateFromProps != null && (s.__s == s.state && (s.__s = Xe({}, s.__s)), Xe(s.__s, y.getDerivedStateFromProps(d, s.__s))), f = s.props, a = s.state, p)
          y.getDerivedStateFromProps == null && s.componentWillMount != null && s.componentWillMount(), s.componentDidMount != null && s.__h.push(s.componentDidMount);
        else {
          if (y.getDerivedStateFromProps == null && d !== f && s.componentWillReceiveProps != null && s.componentWillReceiveProps(d, g), !s.__e && s.shouldComponentUpdate != null && s.shouldComponentUpdate(d, s.__s, g) === !1 || t.__v === n.__v) {
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
        if (s.context = g, s.props = d, s.__v = t, s.__P = e, w = F.__r, E = 0, "prototype" in y && y.prototype.render) {
          for (s.state = s.__s, s.__d = !1, w && w(t), h = s.render(s.props, s.state, s.context), $ = 0; $ < s._sb.length; $++)
            s.__h.push(s._sb[$]);
          s._sb = [];
        } else
          do
            s.__d = !1, w && w(t), h = s.render(s.props, s.state, s.context), s.state = s.__s;
          while (s.__d && ++E < 25);
        s.state = s.__s, s.getChildContext != null && (o = Xe(Xe({}, o), s.getChildContext())), p || s.getSnapshotBeforeUpdate == null || (u = s.getSnapshotBeforeUpdate(f, a)), x = h != null && h.type === Wr && h.key == null ? h.props.children : h, Kl(e, Array.isArray(x) ? x : [x], t, n, o, i, r, l, c, _), s.base = t.__e, t.__h = null, s.__h.length && l.push(s), b && (s.__E = s.__ = null), s.__e = !1;
      } else
        r == null && t.__v === n.__v ? (t.__k = n.__k, t.__e = n.__e) : t.__e = H_(n.__e, t, n, o, i, r, l, _);
    (h = F.diffed) && h(t);
  } catch (C) {
    t.__v = null, (_ || r != null) && (t.__e = c, t.__h = !!_, r[r.indexOf(c)] = null), F.__e(C, t, n);
  }
}
function D_(e, t) {
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
function H_(e, t, n, o, i, r, l, c) {
  var _, h, s, p = n.props, f = t.props, a = t.type, u = 0;
  if (a === "svg" && (i = !0), r != null) {
    for (; u < r.length; u++)
      if ((_ = r[u]) && "setAttribute" in _ == !!a && (a ? _.localName === a : _.nodeType === 3)) {
        e = _, r[u] = null;
        break;
      }
  }
  if (e == null) {
    if (a === null)
      return document.createTextNode(f);
    e = i ? document.createElementNS("http://www.w3.org/2000/svg", a) : document.createElement(a, f.is && f), r = null, c = !1;
  }
  if (a === null)
    p === f || c && e.data === f || (e.data = f);
  else {
    if (r = r && Hr.call(e.childNodes), h = (p = n.props || Vl).dangerouslySetInnerHTML, s = f.dangerouslySetInnerHTML, !c) {
      if (r != null)
        for (p = {}, u = 0; u < e.attributes.length; u++)
          p[e.attributes[u].name] = e.attributes[u].value;
      (s || h) && (s && (h && s.__html == h.__html || s.__html === e.innerHTML) || (e.innerHTML = s && s.__html || ""));
    }
    if (O_(e, f, p, i, c), s)
      t.__k = [];
    else if (u = t.props.children, Kl(e, Array.isArray(u) ? u : [u], t, n, o, i && a !== "foreignObject", r, l, r ? r[0] : n.__k && vn(n, 0), c), r != null)
      for (u = r.length; u--; )
        r[u] != null && Gl(r[u]);
    c || ("value" in f && (u = f.value) !== void 0 && (u !== e.value || a === "progress" && !u || a === "option" && u !== p.value) && yo(e, "value", u, p.value, !1), "checked" in f && (u = f.checked) !== void 0 && u !== e.checked && yo(e, "checked", u, p.checked, !1));
  }
  return e;
}
function Ql(e, t, n) {
  try {
    typeof e == "function" ? e(t) : e.current = t;
  } catch (o) {
    F.__e(o, n);
  }
}
function ea(e, t, n) {
  var o, i;
  if (F.unmount && F.unmount(e), (o = e.ref) && (o.current && o.current !== e.__e || Ql(o, null, t)), (o = e.__c) != null) {
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
      o[i] && ea(o[i], t, n || typeof e.type != "function");
  n || e.__e == null || Gl(e.__e), e.__ = e.__e = e.__d = void 0;
}
function W_(e, t, n) {
  return this.constructor(e, n);
}
Hr = ql.slice, F = { __e: function(e, t, n, o) {
  for (var i, r, l; t = t.__; )
    if ((i = t.__c) && !i.__)
      try {
        if ((r = i.constructor) && r.getDerivedStateFromError != null && (i.setState(r.getDerivedStateFromError(e)), l = i.__d), i.componentDidCatch != null && (i.componentDidCatch(e, o || {}), l = i.__d), l)
          return i.__E = i;
      } catch (c) {
        e = c;
      }
  throw e;
} }, Fl = 0, tn.prototype.setState = function(e, t) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = Xe({}, this.state), typeof e == "function" && (e = e(Xe({}, n), this.props)), e && Xe(n, e), e != null && this.__v && (t && this._sb.push(t), Fs(this));
}, tn.prototype.forceUpdate = function(e) {
  this.__v && (this.__e = !0, e && this.__h.push(e), Fs(this));
}, tn.prototype.render = Wr, en = [], mo.__r = 0;
class At extends tn {
  render() {
    const {
      component: t,
      type: n,
      size: o,
      className: i,
      children: r,
      url: l,
      target: c,
      disabled: _,
      active: h,
      loading: s,
      icon: p,
      text: f,
      trailingIcon: a,
      caret: u,
      square: b,
      hint: d,
      ...v
    } = this.props, g = t || (l ? "a" : "button"), k = f == null || typeof f == "string" && !f.length, w = k && !p && !a && !r;
    return Ut(
      g,
      {
        className: P("btn", n, i, {
          "btn-caret": w,
          disabled: _,
          active: h,
          loading: s,
          square: b === void 0 ? !w && !r && k : b
        }, o ? `size-${o}` : ""),
        title: d,
        [g === "a" ? "href" : "data-url"]: l,
        [g === "a" ? "target" : "data-target"]: c,
        type: g === "button" ? "button" : void 0,
        ...v
      },
      typeof p == "string" ? /* @__PURE__ */ Ut("i", {
        class: `icon ${p}`
      }) : p,
      k ? null : /* @__PURE__ */ Ut("span", {
        className: "text"
      }, f),
      r,
      typeof a == "string" ? /* @__PURE__ */ Ut("i", {
        class: `icon ${a}`
      }) : a,
      u ? /* @__PURE__ */ Ut("span", {
        className: typeof u == "string" ? `caret-${u}` : "caret"
      }) : null
    );
  }
}
class ta extends Qt {
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
    return /* @__PURE__ */ ir(At, {
      key: o,
      ...i
    });
  }
  renderItem(t, n, o) {
    const { itemRender: i, defaultBtnProps: r, onClickItem: l } = t, c = { key: o, ...n };
    if (r && Object.assign(c, r), l && (c.onClick = this.handleItemClick.bind(this, c, o, n.onClick)), i) {
      const _ = i.call(this, c, ir);
      if (Pl(_))
        return _;
      typeof _ == "object" && Object.assign(c, _);
    }
    return this.onRenderItem(c, o);
  }
  render() {
    const t = this.beforeRender(), {
      className: n,
      items: o,
      size: i,
      type: r,
      defaultBtnProps: l,
      children: c,
      itemRender: _,
      onClickItem: h,
      beforeRender: s,
      afterRender: p,
      beforeDestroy: f,
      ...a
    } = t;
    return /* @__PURE__ */ ir("div", {
      className: P("btn-group", i ? `size-${i}` : "", n),
      ...a
    }, o && o.map(this.renderItem.bind(this, t)), c);
  }
}
class Ys extends xe {
}
S(Ys, "NAME", "btngroup"), S(Ys, "Component", ta);
function I_() {
  const e = typeof window.innerWidth == "number" ? window.innerWidth - document.body.clientWidth : 17;
  document.body.style.paddingRight = `${e}px`, document.body.classList.add("modal-open");
}
function U_() {
  document.body.style.paddingRight = "", document.body.classList.remove("modal-open");
}
function j_(e, t) {
  I_(), e.classList.add("block"), Ks(e, t), e.onclick = (n) => B_(n, e), window.addEventListener("resize", () => {
    Ks(e, t);
  });
}
function na(e) {
  var t;
  U_(), (t = e.classList) == null || t.remove("block");
}
function Ks(e, t) {
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
function B_(e, t) {
  e.target.closest("[data-dismiss=modal]") && (e.stopPropagation(), na(t));
}
function z_(e) {
  var t, n;
  return e instanceof HTMLAnchorElement ? (n = (t = (e.href || "").match(/(?<selector>#\S+)$/)) == null ? void 0 : t.groups) == null ? void 0 : n.selector : e.dataset.target;
}
document.addEventListener("click", (e) => {
  const t = e.target, n = t.closest("[data-toggle=modal]");
  if (n) {
    const o = z_(n);
    if (!o)
      return;
    const i = document.querySelector(o);
    if (!i)
      return;
    j_(i, n.dataset.position || "fit");
  } else
    t.className.includes("modal") && na(t);
});
class oa extends Le {
  beforeRender() {
    const t = super.beforeRender();
    return t.className = P(t.className, t.type ? `nav-${t.type}` : "", {
      "nav-stacked": t.stacked
    }), t;
  }
}
S(oa, "NAME", "nav");
class Xs extends xe {
}
S(Xs, "NAME", "nav"), S(Xs, "Component", oa);
var ra, hr, sa, F_ = [];
function gn(e, t, n) {
  var o, i, r, l = {};
  for (r in t)
    r == "key" ? o = t[r] : r == "ref" ? i = t[r] : l[r] = t[r];
  if (arguments.length > 2 && (l.children = arguments.length > 3 ? ra.call(arguments, 2) : n), typeof e == "function" && e.defaultProps != null)
    for (r in e.defaultProps)
      l[r] === void 0 && (l[r] = e.defaultProps[r]);
  return V_(e, l, o, i, null);
}
function V_(e, t, n, o, i) {
  var r = { type: e, props: t, key: n, ref: o, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: i == null ? ++sa : i };
  return i == null && hr.vnode != null && hr.vnode(r), r;
}
ra = F_.slice, hr = { __e: function(e, t, n, o) {
  for (var i, r, l; t = t.__; )
    if ((i = t.__c) && !i.__)
      try {
        if ((r = i.constructor) && r.getDerivedStateFromError != null && (i.setState(r.getDerivedStateFromError(e)), l = i.__d), i.componentDidCatch != null && (i.componentDidCatch(e, o || {}), l = i.__d), l)
          return i.__E = i;
      } catch (c) {
        e = c;
      }
  throw e;
} }, sa = 0;
var ia, pr, la, q_ = [];
function Xo(e, t, n) {
  var o, i, r, l = {};
  for (r in t)
    r == "key" ? o = t[r] : r == "ref" ? i = t[r] : l[r] = t[r];
  if (arguments.length > 2 && (l.children = arguments.length > 3 ? ia.call(arguments, 2) : n), typeof e == "function" && e.defaultProps != null)
    for (r in e.defaultProps)
      l[r] === void 0 && (l[r] = e.defaultProps[r]);
  return G_(e, l, o, i, null);
}
function G_(e, t, n, o, i) {
  var r = { type: e, props: t, key: n, ref: o, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: i == null ? ++la : i };
  return i == null && pr.vnode != null && pr.vnode(r), r;
}
ia = q_.slice, pr = { __e: function(e, t, n, o) {
  for (var i, r, l; t = t.__; )
    if ((i = t.__c) && !i.__)
      try {
        if ((r = i.constructor) && r.getDerivedStateFromError != null && (i.setState(r.getDerivedStateFromError(e)), l = i.__d), i.componentDidCatch != null && (i.componentDidCatch(e, o || {}), l = i.__d), l)
          return i.__E = i;
      } catch (c) {
        e = c;
      }
  throw e;
} }, la = 0;
function Y_({
  key: e,
  type: t,
  btnType: n,
  ...o
}) {
  return /* @__PURE__ */ Xo(At, {
    type: n,
    ...o
  });
}
var Ir, V, aa, nn, Js, ca = {}, _a = [], K_ = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function Je(e, t) {
  for (var n in t)
    e[n] = t[n];
  return e;
}
function fa(e) {
  var t = e.parentNode;
  t && t.removeChild(e);
}
function ua(e, t, n) {
  var o, i, r, l = {};
  for (r in t)
    r == "key" ? o = t[r] : r == "ref" ? i = t[r] : l[r] = t[r];
  if (arguments.length > 2 && (l.children = arguments.length > 3 ? Ir.call(arguments, 2) : n), typeof e == "function" && e.defaultProps != null)
    for (r in e.defaultProps)
      l[r] === void 0 && (l[r] = e.defaultProps[r]);
  return Jn(e, l, o, i, null);
}
function Jn(e, t, n, o, i) {
  var r = { type: e, props: t, key: n, ref: o, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: i == null ? ++aa : i };
  return i == null && V.vnode != null && V.vnode(r), r;
}
function X_() {
  return { current: null };
}
function Ur(e) {
  return e.children;
}
function on(e, t) {
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
function ha(e) {
  var t, n;
  if ((e = e.__) != null && e.__c != null) {
    for (e.__e = e.__c.base = null, t = 0; t < e.__k.length; t++)
      if ((n = e.__k[t]) != null && n.__e != null) {
        e.__e = e.__c.base = n.__e;
        break;
      }
    return ha(e);
  }
}
function Zs(e) {
  (!e.__d && (e.__d = !0) && nn.push(e) && !bo.__r++ || Js !== V.debounceRendering) && ((Js = V.debounceRendering) || setTimeout)(bo);
}
function bo() {
  for (var e; bo.__r = nn.length; )
    e = nn.sort(function(t, n) {
      return t.__v.__b - n.__v.__b;
    }), nn = [], e.some(function(t) {
      var n, o, i, r, l, c;
      t.__d && (l = (r = (n = t).__v).__e, (c = n.__P) && (o = [], (i = Je({}, r)).__v = r.__v + 1, ga(c, r, i, n.__n, c.ownerSVGElement !== void 0, r.__h != null ? [l] : null, o, l == null ? mn(r) : l, r.__h), Z_(o, r), r.__e != l && ha(r)));
    });
}
function pa(e, t, n, o, i, r, l, c, _, h) {
  var s, p, f, a, u, b, d, v = o && o.__k || _a, g = v.length;
  for (n.__k = [], s = 0; s < t.length; s++)
    if ((a = n.__k[s] = (a = t[s]) == null || typeof a == "boolean" ? null : typeof a == "string" || typeof a == "number" || typeof a == "bigint" ? Jn(null, a, null, null, a) : Array.isArray(a) ? Jn(Ur, { children: a }, null, null, null) : a.__b > 0 ? Jn(a.type, a.props, a.key, a.ref ? a.ref : null, a.__v) : a) != null) {
      if (a.__ = n, a.__b = n.__b + 1, (f = v[s]) === null || f && a.key == f.key && a.type === f.type)
        v[s] = void 0;
      else
        for (p = 0; p < g; p++) {
          if ((f = v[p]) && a.key == f.key && a.type === f.type) {
            v[p] = void 0;
            break;
          }
          f = null;
        }
      ga(e, a, f = f || ca, i, r, l, c, _, h), u = a.__e, (p = a.ref) && f.ref != p && (d || (d = []), f.ref && d.push(f.ref, null, a), d.push(p, a.__c || u, a)), u != null ? (b == null && (b = u), typeof a.type == "function" && a.__k === f.__k ? a.__d = _ = da(a, _, e) : _ = va(e, a, f, v, u, _), typeof n.type == "function" && (n.__d = _)) : _ && f.__e == _ && _.parentNode != e && (_ = mn(f));
    }
  for (n.__e = b, s = g; s--; )
    v[s] != null && ya(v[s], v[s]);
  if (d)
    for (s = 0; s < d.length; s++)
      ma(d[s], d[++s], d[++s]);
}
function da(e, t, n) {
  for (var o, i = e.__k, r = 0; i && r < i.length; r++)
    (o = i[r]) && (o.__ = e, t = typeof o.type == "function" ? da(o, t, n) : va(n, o, o, i, o.__e, t));
  return t;
}
function va(e, t, n, o, i, r) {
  var l, c, _;
  if (t.__d !== void 0)
    l = t.__d, t.__d = void 0;
  else if (n == null || i != r || i.parentNode == null)
    e:
      if (r == null || r.parentNode !== e)
        e.appendChild(i), l = null;
      else {
        for (c = r, _ = 0; (c = c.nextSibling) && _ < o.length; _ += 2)
          if (c == i)
            break e;
        e.insertBefore(i, r), l = r;
      }
  return l !== void 0 ? l : i.nextSibling;
}
function J_(e, t, n, o, i) {
  var r;
  for (r in n)
    r === "children" || r === "key" || r in t || wo(e, r, null, n[r], o);
  for (r in t)
    i && typeof t[r] != "function" || r === "children" || r === "key" || r === "value" || r === "checked" || n[r] === t[r] || wo(e, r, t[r], n[r], o);
}
function Qs(e, t, n) {
  t[0] === "-" ? e.setProperty(t, n) : e[t] = n == null ? "" : typeof n != "number" || K_.test(t) ? n : n + "px";
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
            n && t in n || Qs(e.style, t, "");
        if (n)
          for (t in n)
            o && n[t] === o[t] || Qs(e.style, t, n[t]);
      }
    else if (t[0] === "o" && t[1] === "n")
      r = t !== (t = t.replace(/Capture$/, "")), t = t.toLowerCase() in e ? t.toLowerCase().slice(2) : t.slice(2), e.l || (e.l = {}), e.l[t + r] = n, n ? o || e.addEventListener(t, r ? ti : ei, r) : e.removeEventListener(t, r ? ti : ei, r);
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
function ei(e) {
  this.l[e.type + !1](V.event ? V.event(e) : e);
}
function ti(e) {
  this.l[e.type + !0](V.event ? V.event(e) : e);
}
function ga(e, t, n, o, i, r, l, c, _) {
  var h, s, p, f, a, u, b, d, v, g, k, w, E, $, x, y = t.type;
  if (t.constructor !== void 0)
    return null;
  n.__h != null && (_ = n.__h, c = t.__e = n.__e, t.__h = null, r = [c]), (h = V.__b) && h(t);
  try {
    e:
      if (typeof y == "function") {
        if (d = t.props, v = (h = y.contextType) && o[h.__c], g = h ? v ? v.props.value : h.__ : o, n.__c ? b = (s = t.__c = n.__c).__ = s.__E : ("prototype" in y && y.prototype.render ? t.__c = s = new y(d, g) : (t.__c = s = new on(d, g), s.constructor = y, s.render = ef), v && v.sub(s), s.props = d, s.state || (s.state = {}), s.context = g, s.__n = o, p = s.__d = !0, s.__h = [], s._sb = []), s.__s == null && (s.__s = s.state), y.getDerivedStateFromProps != null && (s.__s == s.state && (s.__s = Je({}, s.__s)), Je(s.__s, y.getDerivedStateFromProps(d, s.__s))), f = s.props, a = s.state, p)
          y.getDerivedStateFromProps == null && s.componentWillMount != null && s.componentWillMount(), s.componentDidMount != null && s.__h.push(s.componentDidMount);
        else {
          if (y.getDerivedStateFromProps == null && d !== f && s.componentWillReceiveProps != null && s.componentWillReceiveProps(d, g), !s.__e && s.shouldComponentUpdate != null && s.shouldComponentUpdate(d, s.__s, g) === !1 || t.__v === n.__v) {
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
        if (s.context = g, s.props = d, s.__v = t, s.__P = e, w = V.__r, E = 0, "prototype" in y && y.prototype.render) {
          for (s.state = s.__s, s.__d = !1, w && w(t), h = s.render(s.props, s.state, s.context), $ = 0; $ < s._sb.length; $++)
            s.__h.push(s._sb[$]);
          s._sb = [];
        } else
          do
            s.__d = !1, w && w(t), h = s.render(s.props, s.state, s.context), s.state = s.__s;
          while (s.__d && ++E < 25);
        s.state = s.__s, s.getChildContext != null && (o = Je(Je({}, o), s.getChildContext())), p || s.getSnapshotBeforeUpdate == null || (u = s.getSnapshotBeforeUpdate(f, a)), x = h != null && h.type === Ur && h.key == null ? h.props.children : h, pa(e, Array.isArray(x) ? x : [x], t, n, o, i, r, l, c, _), s.base = t.__e, t.__h = null, s.__h.length && l.push(s), b && (s.__E = s.__ = null), s.__e = !1;
      } else
        r == null && t.__v === n.__v ? (t.__k = n.__k, t.__e = n.__e) : t.__e = Q_(n.__e, t, n, o, i, r, l, _);
    (h = V.diffed) && h(t);
  } catch (C) {
    t.__v = null, (_ || r != null) && (t.__e = c, t.__h = !!_, r[r.indexOf(c)] = null), V.__e(C, t, n);
  }
}
function Z_(e, t) {
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
function Q_(e, t, n, o, i, r, l, c) {
  var _, h, s, p = n.props, f = t.props, a = t.type, u = 0;
  if (a === "svg" && (i = !0), r != null) {
    for (; u < r.length; u++)
      if ((_ = r[u]) && "setAttribute" in _ == !!a && (a ? _.localName === a : _.nodeType === 3)) {
        e = _, r[u] = null;
        break;
      }
  }
  if (e == null) {
    if (a === null)
      return document.createTextNode(f);
    e = i ? document.createElementNS("http://www.w3.org/2000/svg", a) : document.createElement(a, f.is && f), r = null, c = !1;
  }
  if (a === null)
    p === f || c && e.data === f || (e.data = f);
  else {
    if (r = r && Ir.call(e.childNodes), h = (p = n.props || ca).dangerouslySetInnerHTML, s = f.dangerouslySetInnerHTML, !c) {
      if (r != null)
        for (p = {}, u = 0; u < e.attributes.length; u++)
          p[e.attributes[u].name] = e.attributes[u].value;
      (s || h) && (s && (h && s.__html == h.__html || s.__html === e.innerHTML) || (e.innerHTML = s && s.__html || ""));
    }
    if (J_(e, f, p, i, c), s)
      t.__k = [];
    else if (u = t.props.children, pa(e, Array.isArray(u) ? u : [u], t, n, o, i && a !== "foreignObject", r, l, r ? r[0] : n.__k && mn(n, 0), c), r != null)
      for (u = r.length; u--; )
        r[u] != null && fa(r[u]);
    c || ("value" in f && (u = f.value) !== void 0 && (u !== e.value || a === "progress" && !u || a === "option" && u !== p.value) && wo(e, "value", u, p.value, !1), "checked" in f && (u = f.checked) !== void 0 && u !== e.checked && wo(e, "checked", u, p.checked, !1));
  }
  return e;
}
function ma(e, t, n) {
  try {
    typeof e == "function" ? e(t) : e.current = t;
  } catch (o) {
    V.__e(o, n);
  }
}
function ya(e, t, n) {
  var o, i;
  if (V.unmount && V.unmount(e), (o = e.ref) && (o.current && o.current !== e.__e || ma(o, null, t)), (o = e.__c) != null) {
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
      o[i] && ya(o[i], t, n || typeof e.type != "function");
  n || e.__e == null || fa(e.__e), e.__ = e.__e = e.__d = void 0;
}
function ef(e, t, n) {
  return this.constructor(e, n);
}
Ir = _a.slice, V = { __e: function(e, t, n, o) {
  for (var i, r, l; t = t.__; )
    if ((i = t.__c) && !i.__)
      try {
        if ((r = i.constructor) && r.getDerivedStateFromError != null && (i.setState(r.getDerivedStateFromError(e)), l = i.__d), i.componentDidCatch != null && (i.componentDidCatch(e, o || {}), l = i.__d), l)
          return i.__E = i;
      } catch (c) {
        e = c;
      }
  throw e;
} }, aa = 0, on.prototype.setState = function(e, t) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = Je({}, this.state), typeof e == "function" && (e = e(Je({}, n), this.props)), e && Je(n, e), e != null && this.__v && (t && this._sb.push(t), Zs(this));
}, on.prototype.forceUpdate = function(e) {
  this.__v && (this.__e = !0, e && this.__h.push(e), Zs(this));
}, on.prototype.render = Ur, nn = [], bo.__r = 0;
var jr = "top", ba = "bottom", ko = "right", yn = "left", tf = "auto", wa = [jr, ba, ko, yn], nf = "start", of = "end", rf = /* @__PURE__ */ [].concat(wa, [tf]).reduce(function(e, t) {
  return e.concat([t, t + "-" + nf, t + "-" + of]);
}, []);
function ka(e) {
  return e.split("-")[0];
}
function Lt(e) {
  if (e == null)
    return window;
  if (e.toString() !== "[object Window]") {
    var t = e.ownerDocument;
    return t && t.defaultView || window;
  }
  return e;
}
function $a(e) {
  var t = Lt(e).Element;
  return e instanceof t || e instanceof Element;
}
function $o(e) {
  var t = Lt(e).HTMLElement;
  return e instanceof t || e instanceof HTMLElement;
}
function Br(e) {
  if (typeof ShadowRoot > "u")
    return !1;
  var t = Lt(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot;
}
var sf = Math.max, lf = Math.min, ni = Math.round;
function dr() {
  var e = navigator.userAgentData;
  return e != null && e.brands ? e.brands.map(function(t) {
    return t.brand + "/" + t.version;
  }).join(" ") : navigator.userAgent;
}
function af() {
  return !/^((?!chrome|android).)*safari/i.test(dr());
}
function cf(e, t, n) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  var o = e.getBoundingClientRect(), i = 1, r = 1;
  t && $o(e) && (i = e.offsetWidth > 0 && ni(o.width) / e.offsetWidth || 1, r = e.offsetHeight > 0 && ni(o.height) / e.offsetHeight || 1);
  var l = $a(e) ? Lt(e) : window, c = l.visualViewport, _ = !af() && n, h = (o.left + (_ && c ? c.offsetLeft : 0)) / i, s = (o.top + (_ && c ? c.offsetTop : 0)) / r, p = o.width / i, f = o.height / r;
  return {
    width: p,
    height: f,
    top: s,
    right: h + p,
    bottom: s + f,
    left: h,
    x: h,
    y: s
  };
}
function _f(e) {
  var t = cf(e), n = e.offsetWidth, o = e.offsetHeight;
  return Math.abs(t.width - n) <= 1 && (n = t.width), Math.abs(t.height - o) <= 1 && (o = t.height), {
    x: e.offsetLeft,
    y: e.offsetTop,
    width: n,
    height: o
  };
}
function ff(e, t) {
  var n = t.getRootNode && t.getRootNode();
  if (e.contains(t))
    return !0;
  if (n && Br(n)) {
    var o = t;
    do {
      if (o && e.isSameNode(o))
        return !0;
      o = o.parentNode || o.host;
    } while (o);
  }
  return !1;
}
function bn(e) {
  return e ? (e.nodeName || "").toLowerCase() : null;
}
function wn(e) {
  return Lt(e).getComputedStyle(e);
}
function uf(e) {
  return ["table", "td", "th"].indexOf(bn(e)) >= 0;
}
function hf(e) {
  return (($a(e) ? e.ownerDocument : e.document) || window.document).documentElement;
}
function pf(e) {
  return bn(e) === "html" ? e : e.assignedSlot || e.parentNode || (Br(e) ? e.host : null) || hf(e);
}
function oi(e) {
  return !$o(e) || wn(e).position === "fixed" ? null : e.offsetParent;
}
function df(e) {
  var t = /firefox/i.test(dr()), n = /Trident/i.test(dr());
  if (n && $o(e)) {
    var o = wn(e);
    if (o.position === "fixed")
      return null;
  }
  var i = pf(e);
  for (Br(i) && (i = i.host); $o(i) && ["html", "body"].indexOf(bn(i)) < 0; ) {
    var r = wn(i);
    if (r.transform !== "none" || r.perspective !== "none" || r.contain === "paint" || ["transform", "perspective"].indexOf(r.willChange) !== -1 || t && r.willChange === "filter" || t && r.filter && r.filter !== "none")
      return i;
    i = i.parentNode;
  }
  return null;
}
function vf(e) {
  for (var t = Lt(e), n = oi(e); n && uf(n) && wn(n).position === "static"; )
    n = oi(n);
  return n && (bn(n) === "html" || bn(n) === "body" && wn(n).position === "static") ? t : n || df(e) || t;
}
function gf(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function mf(e, t, n) {
  return sf(e, lf(t, n));
}
function yf() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
function bf(e) {
  return Object.assign({}, yf(), e);
}
function wf(e, t) {
  return t.reduce(function(n, o) {
    return n[o] = e, n;
  }, {});
}
var kf = function(t, n) {
  return t = typeof t == "function" ? t(Object.assign({}, n.rects, {
    placement: n.placement
  })) : t, bf(typeof t != "number" ? t : wf(t, wa));
};
function $f(e) {
  var t, n = e.state, o = e.name, i = e.options, r = n.elements.arrow, l = n.modifiersData.popperOffsets, c = ka(n.placement), _ = gf(c), h = [yn, ko].indexOf(c) >= 0, s = h ? "height" : "width";
  if (!(!r || !l)) {
    var p = kf(i.padding, n), f = _f(r), a = _ === "y" ? jr : yn, u = _ === "y" ? ba : ko, b = n.rects.reference[s] + n.rects.reference[_] - l[_] - n.rects.popper[s], d = l[_] - n.rects.reference[_], v = vf(r), g = v ? _ === "y" ? v.clientHeight || 0 : v.clientWidth || 0 : 0, k = b / 2 - d / 2, w = p[a], E = g - f[s] - p[u], $ = g / 2 - f[s] / 2 + k, x = mf(w, $, E), y = _;
    n.modifiersData[o] = (t = {}, t[y] = x, t.centerOffset = x - $, t);
  }
}
function xf(e) {
  var t = e.state, n = e.options, o = n.element, i = o === void 0 ? "[data-popper-arrow]" : o;
  i != null && (typeof i == "string" && (i = t.elements.popper.querySelector(i), !i) || !ff(t.elements.popper, i) || (t.elements.arrow = i));
}
const Cf = {
  name: "arrow",
  enabled: !0,
  phase: "main",
  fn: $f,
  effect: xf,
  requires: ["popperOffsets"],
  requiresIfExists: ["preventOverflow"]
};
function Ef(e, t, n) {
  var o = ka(e), i = [yn, jr].indexOf(o) >= 0 ? -1 : 1, r = typeof n == "function" ? n(Object.assign({}, t, {
    placement: e
  })) : n, l = r[0], c = r[1];
  return l = l || 0, c = (c || 0) * i, [yn, ko].indexOf(o) >= 0 ? {
    x: c,
    y: l
  } : {
    x: l,
    y: c
  };
}
function Sf(e) {
  var t = e.state, n = e.options, o = e.name, i = n.offset, r = i === void 0 ? [0, 0] : i, l = rf.reduce(function(s, p) {
    return s[p] = Ef(p, t.rects, r), s;
  }, {}), c = l[t.placement], _ = c.x, h = c.y;
  t.modifiersData.popperOffsets != null && (t.modifiersData.popperOffsets.x += _, t.modifiersData.popperOffsets.y += h), t.modifiersData[o] = l;
}
const Mf = {
  name: "offset",
  enabled: !0,
  phase: "main",
  requires: ["popperOffsets"],
  fn: Sf
};
var Jo, W, xa, rn, ri, xo = {}, Ca = [], Af = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function Ze(e, t) {
  for (var n in t)
    e[n] = t[n];
  return e;
}
function Ea(e) {
  var t = e.parentNode;
  t && t.removeChild(e);
}
function zr(e, t, n) {
  var o, i, r, l = {};
  for (r in t)
    r == "key" ? o = t[r] : r == "ref" ? i = t[r] : l[r] = t[r];
  if (arguments.length > 2 && (l.children = arguments.length > 3 ? Jo.call(arguments, 2) : n), typeof e == "function" && e.defaultProps != null)
    for (r in e.defaultProps)
      l[r] === void 0 && (l[r] = e.defaultProps[r]);
  return Zn(e, l, o, i, null);
}
function Zn(e, t, n, o, i) {
  var r = { type: e, props: t, key: n, ref: o, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: i == null ? ++xa : i };
  return i == null && W.vnode != null && W.vnode(r), r;
}
function Zo(e) {
  return e.children;
}
function Qn(e, t) {
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
function Sa(e) {
  var t, n;
  if ((e = e.__) != null && e.__c != null) {
    for (e.__e = e.__c.base = null, t = 0; t < e.__k.length; t++)
      if ((n = e.__k[t]) != null && n.__e != null) {
        e.__e = e.__c.base = n.__e;
        break;
      }
    return Sa(e);
  }
}
function si(e) {
  (!e.__d && (e.__d = !0) && rn.push(e) && !Co.__r++ || ri !== W.debounceRendering) && ((ri = W.debounceRendering) || setTimeout)(Co);
}
function Co() {
  for (var e; Co.__r = rn.length; )
    e = rn.sort(function(t, n) {
      return t.__v.__b - n.__v.__b;
    }), rn = [], e.some(function(t) {
      var n, o, i, r, l, c;
      t.__d && (l = (r = (n = t).__v).__e, (c = n.__P) && (o = [], (i = Ze({}, r)).__v = r.__v + 1, Fr(c, r, i, n.__n, c.ownerSVGElement !== void 0, r.__h != null ? [l] : null, o, l == null ? kn(r) : l, r.__h), Ra(o, r), r.__e != l && Sa(r)));
    });
}
function Ma(e, t, n, o, i, r, l, c, _, h) {
  var s, p, f, a, u, b, d, v = o && o.__k || Ca, g = v.length;
  for (n.__k = [], s = 0; s < t.length; s++)
    if ((a = n.__k[s] = (a = t[s]) == null || typeof a == "boolean" ? null : typeof a == "string" || typeof a == "number" || typeof a == "bigint" ? Zn(null, a, null, null, a) : Array.isArray(a) ? Zn(Zo, { children: a }, null, null, null) : a.__b > 0 ? Zn(a.type, a.props, a.key, a.ref ? a.ref : null, a.__v) : a) != null) {
      if (a.__ = n, a.__b = n.__b + 1, (f = v[s]) === null || f && a.key == f.key && a.type === f.type)
        v[s] = void 0;
      else
        for (p = 0; p < g; p++) {
          if ((f = v[p]) && a.key == f.key && a.type === f.type) {
            v[p] = void 0;
            break;
          }
          f = null;
        }
      Fr(e, a, f = f || xo, i, r, l, c, _, h), u = a.__e, (p = a.ref) && f.ref != p && (d || (d = []), f.ref && d.push(f.ref, null, a), d.push(p, a.__c || u, a)), u != null ? (b == null && (b = u), typeof a.type == "function" && a.__k === f.__k ? a.__d = _ = Aa(a, _, e) : _ = Ta(e, a, f, v, u, _), typeof n.type == "function" && (n.__d = _)) : _ && f.__e == _ && _.parentNode != e && (_ = kn(f));
    }
  for (n.__e = b, s = g; s--; )
    v[s] != null && Pa(v[s], v[s]);
  if (d)
    for (s = 0; s < d.length; s++)
      Na(d[s], d[++s], d[++s]);
}
function Aa(e, t, n) {
  for (var o, i = e.__k, r = 0; i && r < i.length; r++)
    (o = i[r]) && (o.__ = e, t = typeof o.type == "function" ? Aa(o, t, n) : Ta(n, o, o, i, o.__e, t));
  return t;
}
function Ta(e, t, n, o, i, r) {
  var l, c, _;
  if (t.__d !== void 0)
    l = t.__d, t.__d = void 0;
  else if (n == null || i != r || i.parentNode == null)
    e:
      if (r == null || r.parentNode !== e)
        e.appendChild(i), l = null;
      else {
        for (c = r, _ = 0; (c = c.nextSibling) && _ < o.length; _ += 2)
          if (c == i)
            break e;
        e.insertBefore(i, r), l = r;
      }
  return l !== void 0 ? l : i.nextSibling;
}
function Tf(e, t, n, o, i) {
  var r;
  for (r in n)
    r === "children" || r === "key" || r in t || Eo(e, r, null, n[r], o);
  for (r in t)
    i && typeof t[r] != "function" || r === "children" || r === "key" || r === "value" || r === "checked" || n[r] === t[r] || Eo(e, r, t[r], n[r], o);
}
function ii(e, t, n) {
  t[0] === "-" ? e.setProperty(t, n) : e[t] = n == null ? "" : typeof n != "number" || Af.test(t) ? n : n + "px";
}
function Eo(e, t, n, o, i) {
  var r;
  e:
    if (t === "style")
      if (typeof n == "string")
        e.style.cssText = n;
      else {
        if (typeof o == "string" && (e.style.cssText = o = ""), o)
          for (t in o)
            n && t in n || ii(e.style, t, "");
        if (n)
          for (t in n)
            o && n[t] === o[t] || ii(e.style, t, n[t]);
      }
    else if (t[0] === "o" && t[1] === "n")
      r = t !== (t = t.replace(/Capture$/, "")), t = t.toLowerCase() in e ? t.toLowerCase().slice(2) : t.slice(2), e.l || (e.l = {}), e.l[t + r] = n, n ? o || e.addEventListener(t, r ? ai : li, r) : e.removeEventListener(t, r ? ai : li, r);
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
function li(e) {
  this.l[e.type + !1](W.event ? W.event(e) : e);
}
function ai(e) {
  this.l[e.type + !0](W.event ? W.event(e) : e);
}
function Fr(e, t, n, o, i, r, l, c, _) {
  var h, s, p, f, a, u, b, d, v, g, k, w, E, $, x, y = t.type;
  if (t.constructor !== void 0)
    return null;
  n.__h != null && (_ = n.__h, c = t.__e = n.__e, t.__h = null, r = [c]), (h = W.__b) && h(t);
  try {
    e:
      if (typeof y == "function") {
        if (d = t.props, v = (h = y.contextType) && o[h.__c], g = h ? v ? v.props.value : h.__ : o, n.__c ? b = (s = t.__c = n.__c).__ = s.__E : ("prototype" in y && y.prototype.render ? t.__c = s = new y(d, g) : (t.__c = s = new Qn(d, g), s.constructor = y, s.render = Nf), v && v.sub(s), s.props = d, s.state || (s.state = {}), s.context = g, s.__n = o, p = s.__d = !0, s.__h = [], s._sb = []), s.__s == null && (s.__s = s.state), y.getDerivedStateFromProps != null && (s.__s == s.state && (s.__s = Ze({}, s.__s)), Ze(s.__s, y.getDerivedStateFromProps(d, s.__s))), f = s.props, a = s.state, p)
          y.getDerivedStateFromProps == null && s.componentWillMount != null && s.componentWillMount(), s.componentDidMount != null && s.__h.push(s.componentDidMount);
        else {
          if (y.getDerivedStateFromProps == null && d !== f && s.componentWillReceiveProps != null && s.componentWillReceiveProps(d, g), !s.__e && s.shouldComponentUpdate != null && s.shouldComponentUpdate(d, s.__s, g) === !1 || t.__v === n.__v) {
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
        if (s.context = g, s.props = d, s.__v = t, s.__P = e, w = W.__r, E = 0, "prototype" in y && y.prototype.render) {
          for (s.state = s.__s, s.__d = !1, w && w(t), h = s.render(s.props, s.state, s.context), $ = 0; $ < s._sb.length; $++)
            s.__h.push(s._sb[$]);
          s._sb = [];
        } else
          do
            s.__d = !1, w && w(t), h = s.render(s.props, s.state, s.context), s.state = s.__s;
          while (s.__d && ++E < 25);
        s.state = s.__s, s.getChildContext != null && (o = Ze(Ze({}, o), s.getChildContext())), p || s.getSnapshotBeforeUpdate == null || (u = s.getSnapshotBeforeUpdate(f, a)), x = h != null && h.type === Zo && h.key == null ? h.props.children : h, Ma(e, Array.isArray(x) ? x : [x], t, n, o, i, r, l, c, _), s.base = t.__e, t.__h = null, s.__h.length && l.push(s), b && (s.__E = s.__ = null), s.__e = !1;
      } else
        r == null && t.__v === n.__v ? (t.__k = n.__k, t.__e = n.__e) : t.__e = Rf(n.__e, t, n, o, i, r, l, _);
    (h = W.diffed) && h(t);
  } catch (C) {
    t.__v = null, (_ || r != null) && (t.__e = c, t.__h = !!_, r[r.indexOf(c)] = null), W.__e(C, t, n);
  }
}
function Ra(e, t) {
  W.__c && W.__c(t, e), e.some(function(n) {
    try {
      e = n.__h, n.__h = [], e.some(function(o) {
        o.call(n);
      });
    } catch (o) {
      W.__e(o, n.__v);
    }
  });
}
function Rf(e, t, n, o, i, r, l, c) {
  var _, h, s, p = n.props, f = t.props, a = t.type, u = 0;
  if (a === "svg" && (i = !0), r != null) {
    for (; u < r.length; u++)
      if ((_ = r[u]) && "setAttribute" in _ == !!a && (a ? _.localName === a : _.nodeType === 3)) {
        e = _, r[u] = null;
        break;
      }
  }
  if (e == null) {
    if (a === null)
      return document.createTextNode(f);
    e = i ? document.createElementNS("http://www.w3.org/2000/svg", a) : document.createElement(a, f.is && f), r = null, c = !1;
  }
  if (a === null)
    p === f || c && e.data === f || (e.data = f);
  else {
    if (r = r && Jo.call(e.childNodes), h = (p = n.props || xo).dangerouslySetInnerHTML, s = f.dangerouslySetInnerHTML, !c) {
      if (r != null)
        for (p = {}, u = 0; u < e.attributes.length; u++)
          p[e.attributes[u].name] = e.attributes[u].value;
      (s || h) && (s && (h && s.__html == h.__html || s.__html === e.innerHTML) || (e.innerHTML = s && s.__html || ""));
    }
    if (Tf(e, f, p, i, c), s)
      t.__k = [];
    else if (u = t.props.children, Ma(e, Array.isArray(u) ? u : [u], t, n, o, i && a !== "foreignObject", r, l, r ? r[0] : n.__k && kn(n, 0), c), r != null)
      for (u = r.length; u--; )
        r[u] != null && Ea(r[u]);
    c || ("value" in f && (u = f.value) !== void 0 && (u !== e.value || a === "progress" && !u || a === "option" && u !== p.value) && Eo(e, "value", u, p.value, !1), "checked" in f && (u = f.checked) !== void 0 && u !== e.checked && Eo(e, "checked", u, p.checked, !1));
  }
  return e;
}
function Na(e, t, n) {
  try {
    typeof e == "function" ? e(t) : e.current = t;
  } catch (o) {
    W.__e(o, n);
  }
}
function Pa(e, t, n) {
  var o, i;
  if (W.unmount && W.unmount(e), (o = e.ref) && (o.current && o.current !== e.__e || Na(o, null, t)), (o = e.__c) != null) {
    if (o.componentWillUnmount)
      try {
        o.componentWillUnmount();
      } catch (r) {
        W.__e(r, t);
      }
    o.base = o.__P = null, e.__c = void 0;
  }
  if (o = e.__k)
    for (i = 0; i < o.length; i++)
      o[i] && Pa(o[i], t, n || typeof e.type != "function");
  n || e.__e == null || Ea(e.__e), e.__ = e.__e = e.__d = void 0;
}
function Nf(e, t, n) {
  return this.constructor(e, n);
}
function Pf(e, t, n) {
  var o, i, r;
  W.__ && W.__(e, t), i = (o = typeof n == "function") ? null : n && n.__k || t.__k, r = [], Fr(t, e = (!o && n || t).__k = zr(Zo, null, [e]), i || xo, xo, t.ownerSVGElement !== void 0, !o && n ? [n] : i ? null : t.firstChild ? Jo.call(t.childNodes) : null, r, !o && n ? n : i ? i.__e : t.firstChild, o), Ra(r, e);
}
Jo = Ca.slice, W = { __e: function(e, t, n, o) {
  for (var i, r, l; t = t.__; )
    if ((i = t.__c) && !i.__)
      try {
        if ((r = i.constructor) && r.getDerivedStateFromError != null && (i.setState(r.getDerivedStateFromError(e)), l = i.__d), i.componentDidCatch != null && (i.componentDidCatch(e, o || {}), l = i.__d), l)
          return i.__E = i;
      } catch (c) {
        e = c;
      }
  throw e;
} }, xa = 0, Qn.prototype.setState = function(e, t) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = Ze({}, this.state), typeof e == "function" && (e = e(Ze({}, n), this.props)), e && Ze(n, e), e != null && this.__v && (t && this._sb.push(t), si(this));
}, Qn.prototype.forceUpdate = function(e) {
  this.__v && (this.__e = !0, e && this.__h.push(e), si(this));
}, Qn.prototype.render = Zo, rn = [], Co.__r = 0;
function _e(e) {
  if (e == null)
    return window;
  if (e.toString() !== "[object Window]") {
    var t = e.ownerDocument;
    return t && t.defaultView || window;
  }
  return e;
}
function ht(e) {
  var t = _e(e).Element;
  return e instanceof t || e instanceof Element;
}
function ce(e) {
  var t = _e(e).HTMLElement;
  return e instanceof t || e instanceof HTMLElement;
}
function Vr(e) {
  if (typeof ShadowRoot > "u")
    return !1;
  var t = _e(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot;
}
var ut = Math.max, So = Math.min, Tt = Math.round;
function vr() {
  var e = navigator.userAgentData;
  return e != null && e.brands ? e.brands.map(function(t) {
    return t.brand + "/" + t.version;
  }).join(" ") : navigator.userAgent;
}
function La() {
  return !/^((?!chrome|android).)*safari/i.test(vr());
}
function Rt(e, t, n) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  var o = e.getBoundingClientRect(), i = 1, r = 1;
  t && ce(e) && (i = e.offsetWidth > 0 && Tt(o.width) / e.offsetWidth || 1, r = e.offsetHeight > 0 && Tt(o.height) / e.offsetHeight || 1);
  var l = ht(e) ? _e(e) : window, c = l.visualViewport, _ = !La() && n, h = (o.left + (_ && c ? c.offsetLeft : 0)) / i, s = (o.top + (_ && c ? c.offsetTop : 0)) / r, p = o.width / i, f = o.height / r;
  return {
    width: p,
    height: f,
    top: s,
    right: h + p,
    bottom: s + f,
    left: h,
    x: h,
    y: s
  };
}
function qr(e) {
  var t = _e(e), n = t.pageXOffset, o = t.pageYOffset;
  return {
    scrollLeft: n,
    scrollTop: o
  };
}
function Lf(e) {
  return {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  };
}
function Of(e) {
  return e === _e(e) || !ce(e) ? qr(e) : Lf(e);
}
function ke(e) {
  return e ? (e.nodeName || "").toLowerCase() : null;
}
function ot(e) {
  return ((ht(e) ? e.ownerDocument : e.document) || window.document).documentElement;
}
function Gr(e) {
  return Rt(ot(e)).left + qr(e).scrollLeft;
}
function De(e) {
  return _e(e).getComputedStyle(e);
}
function Yr(e) {
  var t = De(e), n = t.overflow, o = t.overflowX, i = t.overflowY;
  return /auto|scroll|overlay|hidden/.test(n + i + o);
}
function Df(e) {
  var t = e.getBoundingClientRect(), n = Tt(t.width) / e.offsetWidth || 1, o = Tt(t.height) / e.offsetHeight || 1;
  return n !== 1 || o !== 1;
}
function Hf(e, t, n) {
  n === void 0 && (n = !1);
  var o = ce(t), i = ce(t) && Df(t), r = ot(t), l = Rt(e, i, n), c = {
    scrollLeft: 0,
    scrollTop: 0
  }, _ = {
    x: 0,
    y: 0
  };
  return (o || !o && !n) && ((ke(t) !== "body" || Yr(r)) && (c = Of(t)), ce(t) ? (_ = Rt(t, !0), _.x += t.clientLeft, _.y += t.clientTop) : r && (_.x = Gr(r))), {
    x: l.left + c.scrollLeft - _.x,
    y: l.top + c.scrollTop - _.y,
    width: l.width,
    height: l.height
  };
}
function Oa(e) {
  var t = Rt(e), n = e.offsetWidth, o = e.offsetHeight;
  return Math.abs(t.width - n) <= 1 && (n = t.width), Math.abs(t.height - o) <= 1 && (o = t.height), {
    x: e.offsetLeft,
    y: e.offsetTop,
    width: n,
    height: o
  };
}
function Qo(e) {
  return ke(e) === "html" ? e : e.assignedSlot || e.parentNode || (Vr(e) ? e.host : null) || ot(e);
}
function Da(e) {
  return ["html", "body", "#document"].indexOf(ke(e)) >= 0 ? e.ownerDocument.body : ce(e) && Yr(e) ? e : Da(Qo(e));
}
function sn(e, t) {
  var n;
  t === void 0 && (t = []);
  var o = Da(e), i = o === ((n = e.ownerDocument) == null ? void 0 : n.body), r = _e(o), l = i ? [r].concat(r.visualViewport || [], Yr(o) ? o : []) : o, c = t.concat(l);
  return i ? c : c.concat(sn(Qo(l)));
}
function Wf(e) {
  return ["table", "td", "th"].indexOf(ke(e)) >= 0;
}
function ci(e) {
  return !ce(e) || De(e).position === "fixed" ? null : e.offsetParent;
}
function If(e) {
  var t = /firefox/i.test(vr()), n = /Trident/i.test(vr());
  if (n && ce(e)) {
    var o = De(e);
    if (o.position === "fixed")
      return null;
  }
  var i = Qo(e);
  for (Vr(i) && (i = i.host); ce(i) && ["html", "body"].indexOf(ke(i)) < 0; ) {
    var r = De(i);
    if (r.transform !== "none" || r.perspective !== "none" || r.contain === "paint" || ["transform", "perspective"].indexOf(r.willChange) !== -1 || t && r.willChange === "filter" || t && r.filter && r.filter !== "none")
      return i;
    i = i.parentNode;
  }
  return null;
}
function er(e) {
  for (var t = _e(e), n = ci(e); n && Wf(n) && De(n).position === "static"; )
    n = ci(n);
  return n && (ke(n) === "html" || ke(n) === "body" && De(n).position === "static") ? t : n || If(e) || t;
}
var de = "top", $e = "bottom", nt = "right", Oe = "left", Kr = "auto", tr = [de, $e, nt, Oe], Nt = "start", $n = "end", Uf = "clippingParents", Ha = "viewport", jt = "popper", jf = "reference", _i = /* @__PURE__ */ tr.reduce(function(e, t) {
  return e.concat([t + "-" + Nt, t + "-" + $n]);
}, []), Bf = /* @__PURE__ */ [].concat(tr, [Kr]).reduce(function(e, t) {
  return e.concat([t, t + "-" + Nt, t + "-" + $n]);
}, []), zf = "beforeRead", Ff = "read", Vf = "afterRead", qf = "beforeMain", Gf = "main", Yf = "afterMain", Kf = "beforeWrite", Xf = "write", Jf = "afterWrite", Zf = [zf, Ff, Vf, qf, Gf, Yf, Kf, Xf, Jf];
function Qf(e) {
  var t = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Set(), o = [];
  e.forEach(function(r) {
    t.set(r.name, r);
  });
  function i(r) {
    n.add(r.name);
    var l = [].concat(r.requires || [], r.requiresIfExists || []);
    l.forEach(function(c) {
      if (!n.has(c)) {
        var _ = t.get(c);
        _ && i(_);
      }
    }), o.push(r);
  }
  return e.forEach(function(r) {
    n.has(r.name) || i(r);
  }), o;
}
function eu(e) {
  var t = Qf(e);
  return Zf.reduce(function(n, o) {
    return n.concat(t.filter(function(i) {
      return i.phase === o;
    }));
  }, []);
}
function tu(e) {
  var t;
  return function() {
    return t || (t = new Promise(function(n) {
      Promise.resolve().then(function() {
        t = void 0, n(e());
      });
    })), t;
  };
}
function tt(e) {
  return e.split("-")[0];
}
function nu(e) {
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
function ou(e, t) {
  var n = _e(e), o = ot(e), i = n.visualViewport, r = o.clientWidth, l = o.clientHeight, c = 0, _ = 0;
  if (i) {
    r = i.width, l = i.height;
    var h = La();
    (h || !h && t === "fixed") && (c = i.offsetLeft, _ = i.offsetTop);
  }
  return {
    width: r,
    height: l,
    x: c + Gr(e),
    y: _
  };
}
function ru(e) {
  var t, n = ot(e), o = qr(e), i = (t = e.ownerDocument) == null ? void 0 : t.body, r = ut(n.scrollWidth, n.clientWidth, i ? i.scrollWidth : 0, i ? i.clientWidth : 0), l = ut(n.scrollHeight, n.clientHeight, i ? i.scrollHeight : 0, i ? i.clientHeight : 0), c = -o.scrollLeft + Gr(e), _ = -o.scrollTop;
  return De(i || n).direction === "rtl" && (c += ut(n.clientWidth, i ? i.clientWidth : 0) - r), {
    width: r,
    height: l,
    x: c,
    y: _
  };
}
function su(e, t) {
  var n = t.getRootNode && t.getRootNode();
  if (e.contains(t))
    return !0;
  if (n && Vr(n)) {
    var o = t;
    do {
      if (o && e.isSameNode(o))
        return !0;
      o = o.parentNode || o.host;
    } while (o);
  }
  return !1;
}
function gr(e) {
  return Object.assign({}, e, {
    left: e.x,
    top: e.y,
    right: e.x + e.width,
    bottom: e.y + e.height
  });
}
function iu(e, t) {
  var n = Rt(e, !1, t === "fixed");
  return n.top = n.top + e.clientTop, n.left = n.left + e.clientLeft, n.bottom = n.top + e.clientHeight, n.right = n.left + e.clientWidth, n.width = e.clientWidth, n.height = e.clientHeight, n.x = n.left, n.y = n.top, n;
}
function fi(e, t, n) {
  return t === Ha ? gr(ou(e, n)) : ht(t) ? iu(t, n) : gr(ru(ot(e)));
}
function lu(e) {
  var t = sn(Qo(e)), n = ["absolute", "fixed"].indexOf(De(e).position) >= 0, o = n && ce(e) ? er(e) : e;
  return ht(o) ? t.filter(function(i) {
    return ht(i) && su(i, o) && ke(i) !== "body";
  }) : [];
}
function au(e, t, n, o) {
  var i = t === "clippingParents" ? lu(e) : [].concat(t), r = [].concat(i, [n]), l = r[0], c = r.reduce(function(_, h) {
    var s = fi(e, h, o);
    return _.top = ut(s.top, _.top), _.right = So(s.right, _.right), _.bottom = So(s.bottom, _.bottom), _.left = ut(s.left, _.left), _;
  }, fi(e, l, o));
  return c.width = c.right - c.left, c.height = c.bottom - c.top, c.x = c.left, c.y = c.top, c;
}
function Pt(e) {
  return e.split("-")[1];
}
function Wa(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function Ia(e) {
  var t = e.reference, n = e.element, o = e.placement, i = o ? tt(o) : null, r = o ? Pt(o) : null, l = t.x + t.width / 2 - n.width / 2, c = t.y + t.height / 2 - n.height / 2, _;
  switch (i) {
    case de:
      _ = {
        x: l,
        y: t.y - n.height
      };
      break;
    case $e:
      _ = {
        x: l,
        y: t.y + t.height
      };
      break;
    case nt:
      _ = {
        x: t.x + t.width,
        y: c
      };
      break;
    case Oe:
      _ = {
        x: t.x - n.width,
        y: c
      };
      break;
    default:
      _ = {
        x: t.x,
        y: t.y
      };
  }
  var h = i ? Wa(i) : null;
  if (h != null) {
    var s = h === "y" ? "height" : "width";
    switch (r) {
      case Nt:
        _[h] = _[h] - (t[s] / 2 - n[s] / 2);
        break;
      case $n:
        _[h] = _[h] + (t[s] / 2 - n[s] / 2);
        break;
    }
  }
  return _;
}
function Ua() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
function cu(e) {
  return Object.assign({}, Ua(), e);
}
function _u(e, t) {
  return t.reduce(function(n, o) {
    return n[o] = e, n;
  }, {});
}
function Xr(e, t) {
  t === void 0 && (t = {});
  var n = t, o = n.placement, i = o === void 0 ? e.placement : o, r = n.strategy, l = r === void 0 ? e.strategy : r, c = n.boundary, _ = c === void 0 ? Uf : c, h = n.rootBoundary, s = h === void 0 ? Ha : h, p = n.elementContext, f = p === void 0 ? jt : p, a = n.altBoundary, u = a === void 0 ? !1 : a, b = n.padding, d = b === void 0 ? 0 : b, v = cu(typeof d != "number" ? d : _u(d, tr)), g = f === jt ? jf : jt, k = e.rects.popper, w = e.elements[u ? g : f], E = au(ht(w) ? w : w.contextElement || ot(e.elements.popper), _, s, l), $ = Rt(e.elements.reference), x = Ia({
    reference: $,
    element: k,
    strategy: "absolute",
    placement: i
  }), y = gr(Object.assign({}, k, x)), C = f === jt ? y : $, A = {
    top: E.top - C.top + v.top,
    bottom: C.bottom - E.bottom + v.bottom,
    left: E.left - C.left + v.left,
    right: C.right - E.right + v.right
  }, D = e.modifiersData.offset;
  if (f === jt && D) {
    var J = D[i];
    Object.keys(A).forEach(function(Y) {
      var fe = [nt, $e].indexOf(Y) >= 0 ? 1 : -1, Z = [de, $e].indexOf(Y) >= 0 ? "y" : "x";
      A[Y] += J[Z] * fe;
    });
  }
  return A;
}
var ui = {
  placement: "bottom",
  modifiers: [],
  strategy: "absolute"
};
function hi() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return !t.some(function(o) {
    return !(o && typeof o.getBoundingClientRect == "function");
  });
}
function fu(e) {
  e === void 0 && (e = {});
  var t = e, n = t.defaultModifiers, o = n === void 0 ? [] : n, i = t.defaultOptions, r = i === void 0 ? ui : i;
  return function(c, _, h) {
    h === void 0 && (h = r);
    var s = {
      placement: "bottom",
      orderedModifiers: [],
      options: Object.assign({}, ui, r),
      modifiersData: {},
      elements: {
        reference: c,
        popper: _
      },
      attributes: {},
      styles: {}
    }, p = [], f = !1, a = {
      state: s,
      setOptions: function(v) {
        var g = typeof v == "function" ? v(s.options) : v;
        b(), s.options = Object.assign({}, r, s.options, g), s.scrollParents = {
          reference: ht(c) ? sn(c) : c.contextElement ? sn(c.contextElement) : [],
          popper: sn(_)
        };
        var k = eu(nu([].concat(o, s.options.modifiers)));
        return s.orderedModifiers = k.filter(function(w) {
          return w.enabled;
        }), u(), a.update();
      },
      forceUpdate: function() {
        if (!f) {
          var v = s.elements, g = v.reference, k = v.popper;
          if (!!hi(g, k)) {
            s.rects = {
              reference: Hf(g, er(k), s.options.strategy === "fixed"),
              popper: Oa(k)
            }, s.reset = !1, s.placement = s.options.placement, s.orderedModifiers.forEach(function(A) {
              return s.modifiersData[A.name] = Object.assign({}, A.data);
            });
            for (var w = 0; w < s.orderedModifiers.length; w++) {
              if (s.reset === !0) {
                s.reset = !1, w = -1;
                continue;
              }
              var E = s.orderedModifiers[w], $ = E.fn, x = E.options, y = x === void 0 ? {} : x, C = E.name;
              typeof $ == "function" && (s = $({
                state: s,
                options: y,
                name: C,
                instance: a
              }) || s);
            }
          }
        }
      },
      update: tu(function() {
        return new Promise(function(d) {
          a.forceUpdate(), d(s);
        });
      }),
      destroy: function() {
        b(), f = !0;
      }
    };
    if (!hi(c, _))
      return a;
    a.setOptions(h).then(function(d) {
      !f && h.onFirstUpdate && h.onFirstUpdate(d);
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
          p.push(E || $);
        }
      });
    }
    function b() {
      p.forEach(function(d) {
        return d();
      }), p = [];
    }
    return a;
  };
}
var Bn = {
  passive: !0
};
function uu(e) {
  var t = e.state, n = e.instance, o = e.options, i = o.scroll, r = i === void 0 ? !0 : i, l = o.resize, c = l === void 0 ? !0 : l, _ = _e(t.elements.popper), h = [].concat(t.scrollParents.reference, t.scrollParents.popper);
  return r && h.forEach(function(s) {
    s.addEventListener("scroll", n.update, Bn);
  }), c && _.addEventListener("resize", n.update, Bn), function() {
    r && h.forEach(function(s) {
      s.removeEventListener("scroll", n.update, Bn);
    }), c && _.removeEventListener("resize", n.update, Bn);
  };
}
const hu = {
  name: "eventListeners",
  enabled: !0,
  phase: "write",
  fn: function() {
  },
  effect: uu,
  data: {}
};
function pu(e) {
  var t = e.state, n = e.name;
  t.modifiersData[n] = Ia({
    reference: t.rects.reference,
    element: t.rects.popper,
    strategy: "absolute",
    placement: t.placement
  });
}
const du = {
  name: "popperOffsets",
  enabled: !0,
  phase: "read",
  fn: pu,
  data: {}
};
var vu = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function gu(e) {
  var t = e.x, n = e.y, o = window, i = o.devicePixelRatio || 1;
  return {
    x: Tt(t * i) / i || 0,
    y: Tt(n * i) / i || 0
  };
}
function pi(e) {
  var t, n = e.popper, o = e.popperRect, i = e.placement, r = e.variation, l = e.offsets, c = e.position, _ = e.gpuAcceleration, h = e.adaptive, s = e.roundOffsets, p = e.isFixed, f = l.x, a = f === void 0 ? 0 : f, u = l.y, b = u === void 0 ? 0 : u, d = typeof s == "function" ? s({
    x: a,
    y: b
  }) : {
    x: a,
    y: b
  };
  a = d.x, b = d.y;
  var v = l.hasOwnProperty("x"), g = l.hasOwnProperty("y"), k = Oe, w = de, E = window;
  if (h) {
    var $ = er(n), x = "clientHeight", y = "clientWidth";
    if ($ === _e(n) && ($ = ot(n), De($).position !== "static" && c === "absolute" && (x = "scrollHeight", y = "scrollWidth")), $ = $, i === de || (i === Oe || i === nt) && r === $n) {
      w = $e;
      var C = p && $ === E && E.visualViewport ? E.visualViewport.height : $[x];
      b -= C - o.height, b *= _ ? 1 : -1;
    }
    if (i === Oe || (i === de || i === $e) && r === $n) {
      k = nt;
      var A = p && $ === E && E.visualViewport ? E.visualViewport.width : $[y];
      a -= A - o.width, a *= _ ? 1 : -1;
    }
  }
  var D = Object.assign({
    position: c
  }, h && vu), J = s === !0 ? gu({
    x: a,
    y: b
  }) : {
    x: a,
    y: b
  };
  if (a = J.x, b = J.y, _) {
    var Y;
    return Object.assign({}, D, (Y = {}, Y[w] = g ? "0" : "", Y[k] = v ? "0" : "", Y.transform = (E.devicePixelRatio || 1) <= 1 ? "translate(" + a + "px, " + b + "px)" : "translate3d(" + a + "px, " + b + "px, 0)", Y));
  }
  return Object.assign({}, D, (t = {}, t[w] = g ? b + "px" : "", t[k] = v ? a + "px" : "", t.transform = "", t));
}
function mu(e) {
  var t = e.state, n = e.options, o = n.gpuAcceleration, i = o === void 0 ? !0 : o, r = n.adaptive, l = r === void 0 ? !0 : r, c = n.roundOffsets, _ = c === void 0 ? !0 : c, h = {
    placement: tt(t.placement),
    variation: Pt(t.placement),
    popper: t.elements.popper,
    popperRect: t.rects.popper,
    gpuAcceleration: i,
    isFixed: t.options.strategy === "fixed"
  };
  t.modifiersData.popperOffsets != null && (t.styles.popper = Object.assign({}, t.styles.popper, pi(Object.assign({}, h, {
    offsets: t.modifiersData.popperOffsets,
    position: t.options.strategy,
    adaptive: l,
    roundOffsets: _
  })))), t.modifiersData.arrow != null && (t.styles.arrow = Object.assign({}, t.styles.arrow, pi(Object.assign({}, h, {
    offsets: t.modifiersData.arrow,
    position: "absolute",
    adaptive: !1,
    roundOffsets: _
  })))), t.attributes.popper = Object.assign({}, t.attributes.popper, {
    "data-popper-placement": t.placement
  });
}
const yu = {
  name: "computeStyles",
  enabled: !0,
  phase: "beforeWrite",
  fn: mu,
  data: {}
};
function bu(e) {
  var t = e.state;
  Object.keys(t.elements).forEach(function(n) {
    var o = t.styles[n] || {}, i = t.attributes[n] || {}, r = t.elements[n];
    !ce(r) || !ke(r) || (Object.assign(r.style, o), Object.keys(i).forEach(function(l) {
      var c = i[l];
      c === !1 ? r.removeAttribute(l) : r.setAttribute(l, c === !0 ? "" : c);
    }));
  });
}
function wu(e) {
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
      var i = t.elements[o], r = t.attributes[o] || {}, l = Object.keys(t.styles.hasOwnProperty(o) ? t.styles[o] : n[o]), c = l.reduce(function(_, h) {
        return _[h] = "", _;
      }, {});
      !ce(i) || !ke(i) || (Object.assign(i.style, c), Object.keys(r).forEach(function(_) {
        i.removeAttribute(_);
      }));
    });
  };
}
const ku = {
  name: "applyStyles",
  enabled: !0,
  phase: "write",
  fn: bu,
  effect: wu,
  requires: ["computeStyles"]
};
var $u = [hu, du, yu, ku], ja = /* @__PURE__ */ fu({
  defaultModifiers: $u
});
function xu(e) {
  return e === "x" ? "y" : "x";
}
function eo(e, t, n) {
  return ut(e, So(t, n));
}
function Cu(e, t, n) {
  var o = eo(e, t, n);
  return o > n ? n : o;
}
function Eu(e) {
  var t = e.state, n = e.options, o = e.name, i = n.mainAxis, r = i === void 0 ? !0 : i, l = n.altAxis, c = l === void 0 ? !1 : l, _ = n.boundary, h = n.rootBoundary, s = n.altBoundary, p = n.padding, f = n.tether, a = f === void 0 ? !0 : f, u = n.tetherOffset, b = u === void 0 ? 0 : u, d = Xr(t, {
    boundary: _,
    rootBoundary: h,
    padding: p,
    altBoundary: s
  }), v = tt(t.placement), g = Pt(t.placement), k = !g, w = Wa(v), E = xu(w), $ = t.modifiersData.popperOffsets, x = t.rects.reference, y = t.rects.popper, C = typeof b == "function" ? b(Object.assign({}, t.rects, {
    placement: t.placement
  })) : b, A = typeof C == "number" ? {
    mainAxis: C,
    altAxis: C
  } : Object.assign({
    mainAxis: 0,
    altAxis: 0
  }, C), D = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null, J = {
    x: 0,
    y: 0
  };
  if (!!$) {
    if (r) {
      var Y, fe = w === "y" ? de : Oe, Z = w === "y" ? $e : nt, I = w === "y" ? "height" : "width", ne = $[w], He = ne + d[fe], Ce = ne - d[Z], pt = a ? -y[I] / 2 : 0, Ee = g === Nt ? x[I] : y[I], We = g === Nt ? -y[I] : -x[I], rt = t.elements.arrow, Se = a && rt ? Oa(rt) : {
        width: 0,
        height: 0
      }, T = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : Ua(), O = T[fe], K = T[Z], Q = eo(0, x[I], Se[I]), ue = k ? x[I] / 2 - pt - Q - O - A.mainAxis : Ee - Q - O - A.mainAxis, st = k ? -x[I] / 2 + pt + Q + K + A.mainAxis : We + Q + K + A.mainAxis, Me = t.elements.arrow && er(t.elements.arrow), Dt = Me ? w === "y" ? Me.clientTop || 0 : Me.clientLeft || 0 : 0, Wn = (Y = D == null ? void 0 : D[w]) != null ? Y : 0, L = ne + ue - Wn - Dt, In = ne + st - Wn, Ht = eo(a ? So(He, L) : He, ne, a ? ut(Ce, In) : Ce);
      $[w] = Ht, J[w] = Ht - ne;
    }
    if (c) {
      var Wt, Un = w === "x" ? de : Oe, dt = w === "x" ? $e : nt, ve = $[E], it = E === "y" ? "height" : "width", It = ve + d[Un], rs = ve - d[dt], nr = [de, Oe].indexOf(v) !== -1, ss = (Wt = D == null ? void 0 : D[E]) != null ? Wt : 0, is = nr ? It : ve - x[it] - y[it] - ss + A.altAxis, ls = nr ? ve + x[it] + y[it] - ss - A.altAxis : rs, as = a && nr ? Cu(is, ve, ls) : eo(a ? is : It, ve, a ? ls : rs);
      $[E] = as, J[E] = as - ve;
    }
    t.modifiersData[o] = J;
  }
}
const mr = {
  name: "preventOverflow",
  enabled: !0,
  phase: "main",
  fn: Eu,
  requiresIfExists: ["offset"]
};
var Su = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function to(e) {
  return e.replace(/left|right|bottom|top/g, function(t) {
    return Su[t];
  });
}
var Mu = {
  start: "end",
  end: "start"
};
function di(e) {
  return e.replace(/start|end/g, function(t) {
    return Mu[t];
  });
}
function Au(e, t) {
  t === void 0 && (t = {});
  var n = t, o = n.placement, i = n.boundary, r = n.rootBoundary, l = n.padding, c = n.flipVariations, _ = n.allowedAutoPlacements, h = _ === void 0 ? Bf : _, s = Pt(o), p = s ? c ? _i : _i.filter(function(u) {
    return Pt(u) === s;
  }) : tr, f = p.filter(function(u) {
    return h.indexOf(u) >= 0;
  });
  f.length === 0 && (f = p);
  var a = f.reduce(function(u, b) {
    return u[b] = Xr(e, {
      placement: b,
      boundary: i,
      rootBoundary: r,
      padding: l
    })[tt(b)], u;
  }, {});
  return Object.keys(a).sort(function(u, b) {
    return a[u] - a[b];
  });
}
function Tu(e) {
  if (tt(e) === Kr)
    return [];
  var t = to(e);
  return [di(e), t, di(t)];
}
function Ru(e) {
  var t = e.state, n = e.options, o = e.name;
  if (!t.modifiersData[o]._skip) {
    for (var i = n.mainAxis, r = i === void 0 ? !0 : i, l = n.altAxis, c = l === void 0 ? !0 : l, _ = n.fallbackPlacements, h = n.padding, s = n.boundary, p = n.rootBoundary, f = n.altBoundary, a = n.flipVariations, u = a === void 0 ? !0 : a, b = n.allowedAutoPlacements, d = t.options.placement, v = tt(d), g = v === d, k = _ || (g || !u ? [to(d)] : Tu(d)), w = [d].concat(k).reduce(function(Se, T) {
      return Se.concat(tt(T) === Kr ? Au(t, {
        placement: T,
        boundary: s,
        rootBoundary: p,
        padding: h,
        flipVariations: u,
        allowedAutoPlacements: b
      }) : T);
    }, []), E = t.rects.reference, $ = t.rects.popper, x = /* @__PURE__ */ new Map(), y = !0, C = w[0], A = 0; A < w.length; A++) {
      var D = w[A], J = tt(D), Y = Pt(D) === Nt, fe = [de, $e].indexOf(J) >= 0, Z = fe ? "width" : "height", I = Xr(t, {
        placement: D,
        boundary: s,
        rootBoundary: p,
        altBoundary: f,
        padding: h
      }), ne = fe ? Y ? nt : Oe : Y ? $e : de;
      E[Z] > $[Z] && (ne = to(ne));
      var He = to(ne), Ce = [];
      if (r && Ce.push(I[J] <= 0), c && Ce.push(I[ne] <= 0, I[He] <= 0), Ce.every(function(Se) {
        return Se;
      })) {
        C = D, y = !1;
        break;
      }
      x.set(D, Ce);
    }
    if (y)
      for (var pt = u ? 3 : 1, Ee = function(T) {
        var O = w.find(function(K) {
          var Q = x.get(K);
          if (Q)
            return Q.slice(0, T).every(function(ue) {
              return ue;
            });
        });
        if (O)
          return C = O, "break";
      }, We = pt; We > 0; We--) {
        var rt = Ee(We);
        if (rt === "break")
          break;
      }
    t.placement !== C && (t.modifiersData[o]._skip = !0, t.placement = C, t.reset = !0);
  }
}
const Ba = {
  name: "flip",
  enabled: !0,
  phase: "main",
  fn: Ru,
  requiresIfExists: ["offset"],
  data: {
    _skip: !1
  }
};
function Nu(e) {
  return e.button === 2;
}
var je;
class Pu extends Tr {
  constructor() {
    super(...arguments);
    M(this, je, void 0);
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
    super.componentWillUnmount(), (n = m(this, je)) == null || n.destroy();
  }
  _getPopperOptions() {
    return {
      modifiers: [mr, Ba],
      placement: "right-start"
    };
  }
  _getPopperElement() {
    var n;
    return (n = this.ref.current) == null ? void 0 : n.parentElement;
  }
  _createPopper() {
    const n = this._getPopperOptions();
    return m(this, je) ? m(this, je).setOptions(n) : this.ref.current && R(this, je, ja(this._getPopperElement(), this.ref.current, n)), m(this, je);
  }
  afterRender(n) {
    super.afterRender(n), this.props.controlledMenu && this._createPopper();
  }
  renderToggleIcon() {
    return /* @__PURE__ */ zr("span", {
      class: "contextmenu-toggle-icon caret-right"
    });
  }
}
je = new WeakMap();
var Be, le, bt, An;
class se extends Vt {
  constructor() {
    super(...arguments);
    M(this, Be, void 0);
    M(this, le, void 0);
    M(this, bt, void 0);
    M(this, An, void 0);
  }
  get isShown() {
    var n;
    return (n = m(this, Be)) == null ? void 0 : n.classList.contains(this.constructor.CLASS_SHOW);
  }
  get menu() {
    return m(this, Be) || this._ensureMenu();
  }
  get popper() {
    return m(this, le) ? m(this, le) : this._createPopper();
  }
  get trigger() {
    return m(this, An) || this.element;
  }
  get isDynamic() {
    return this.options.items || this.options.menu;
  }
  init() {
    const { element: n } = this;
    n !== document.body && !n.hasAttribute("data-toggle") && n.setAttribute("data-toggle", "contextmenu");
  }
  show(n) {
    return R(this, An, n), this.emit("show", { menu: this, trigger: this.trigger }).defaultPrevented || this.isDynamic && !this._renderMenu() ? !1 : (this.menu.classList.add(this.constructor.CLASS_SHOW), this._createPopper().update(), this.emit("shown", this), !0);
  }
  hide() {
    var o, i;
    return this.emit("hide", this).defaultPrevented ? !1 : ((o = m(this, le)) == null || o.destroy(), R(this, le, void 0), (i = m(this, Be)) == null || i.classList.remove(this.constructor.CLASS_SHOW), this.emit("hidden", this), !0);
  }
  toggle(n) {
    return this.isShown ? this.hide() : this.show(n);
  }
  destroy() {
    var n, o;
    (n = m(this, le)) == null || n.destroy(), super.destroy(), (o = m(this, Be)) == null || o.remove();
  }
  _ensureMenu() {
    var r, l;
    const { element: n } = this, o = this.constructor.MENU_CLASS;
    let i;
    if (this.isDynamic)
      i = document.createElement("div"), i.classList.add(o), document.body.appendChild(i);
    else if (n) {
      const c = (r = n.getAttribute("href")) != null ? r : n.dataset.target;
      if ((c == null ? void 0 : c[0]) === "#" && (i = document.querySelector(c)), !i) {
        const _ = n.nextElementSibling;
        _ != null && _.classList.contains(o) ? i = _ : i = (l = n.parentNode) == null ? void 0 : l.querySelector(`.${o}`);
      }
    }
    if (!i)
      throw new Error("ContextMenu: Cannot find menu element");
    return R(this, Be, i), i;
  }
  _getPopperOptions() {
    const { flip: n, preventOverflow: o, modifiers: i = [] } = this.options;
    return {
      modifiers: [
        o ? typeof o == "object" ? { ...mr, options: o } : mr : null,
        n ? Ba : null,
        ...i
      ].filter(Boolean),
      placement: this.options.placement,
      strategy: this.options.strategy
    };
  }
  _createPopper() {
    const n = this._getPopperOptions();
    return m(this, le) ? m(this, le).setOptions(n) : R(this, le, ja(this._getPopperElement(), this.menu, n)), m(this, le);
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
    return !n || this.emit("updateMenu", { menu: n, trigger: this.trigger, contextmenu: this }).defaultPrevented ? !1 : (Pf(zr(Pu, n), this.menu), !0);
  }
  _getPopperElement() {
    return m(this, bt) || R(this, bt, {
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
    }), m(this, bt);
  }
  static clear(n) {
    var _, h;
    n instanceof Event && (n = { event: n });
    const { event: o, exclude: i, ignoreSelector: r = ".not-hide-menu" } = n || {};
    if (o && r && ((h = (_ = o.target).closest) == null ? void 0 : h.call(_, r)) || o && Nu(o))
      return;
    const l = this.getAll().entries(), c = new Set(i || []);
    for (const [s, p] of l)
      c.has(s) || p.hide();
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
Be = new WeakMap(), le = new WeakMap(), bt = new WeakMap(), An = new WeakMap(), S(se, "NAME", "contextmenu"), S(se, "EVENTS", !0), S(se, "DEFAULT", {
  placement: "bottom-start",
  strategy: "fixed",
  flip: !0,
  preventOverflow: !0
}), S(se, "MENU_CLASS", "contextmenu"), S(se, "CLASS_SHOW", "show"), S(se, "MENU_SELECTOR", '[data-toggle="contextmenu"]:not(.disabled):not(:disabled)');
document.addEventListener("contextmenu", (e) => {
  const t = e.target;
  if (t.closest(`.${se.MENU_CLASS}`))
    return;
  const n = t.closest(se.MENU_SELECTOR);
  n && (se.ensure(n).show(e), e.preventDefault());
});
document.addEventListener("click", se.clear.bind(se));
var wt, kt, $t, Oo, za;
const os = class extends se {
  constructor() {
    super(...arguments);
    M(this, Oo);
    M(this, wt, !1);
    M(this, kt, 0);
    S(this, "hideLater", () => {
      m(this, $t).call(this), R(this, kt, window.setTimeout(this.hide.bind(this), 100));
    });
    M(this, $t, () => {
      clearTimeout(m(this, kt)), R(this, kt, 0);
    });
  }
  get isHover() {
    return this.options.trigger === "hover";
  }
  get elementShowClass() {
    return `with-${this.constructor.NAME}-show`;
  }
  show(n, o) {
    (o == null ? void 0 : o.clearOthers) !== !1 && os.clear({ event: o == null ? void 0 : o.event, exclude: [this.element] });
    const i = super.show(n);
    return i && (!m(this, wt) && this.isHover && X(this, Oo, za).call(this), this.element.classList.add(this.elementShowClass)), i;
  }
  hide() {
    const n = super.hide();
    return n && this.element.classList.remove(this.elementShowClass), n;
  }
  toggle(n, o) {
    return this.isShown ? this.hide() : this.show(n, { event: n, ...o });
  }
  destroy() {
    m(this, wt) && (this.element.removeEventListener("mouseleave", this.hideLater), this.menu.removeEventListener("mouseenter", m(this, $t)), this.menu.removeEventListener("mouseleave", this.hideLater)), super.destroy();
  }
  _getArrowSize() {
    const { arrow: n } = this.options;
    return n ? typeof n == "number" ? n : 5 : 0;
  }
  _getPopperOptions() {
    var i;
    const n = super._getPopperOptions(), o = this._getArrowSize();
    return o && n.modifiers.push({ ...Cf, options: {
      padding: o,
      element: ".arrow"
    } }, {
      ...Mf,
      options: {
        offset: [0, o + ((i = this.options.offset) != null ? i : 0)]
      }
    }, {
      name: "dropdown",
      enabled: !0,
      phase: "beforeWrite",
      fn: ({ state: r }) => {
        var c, _;
        const l = ((c = r.placement) == null ? void 0 : c.split("-").shift()) || "";
        (_ = this.menu.querySelector(".arrow")) == null || _.setAttribute("class", `arrow arrow-${l}`), this.element.setAttribute("data-dropdown-placement", l);
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
let ae = os;
wt = new WeakMap(), kt = new WeakMap(), $t = new WeakMap(), Oo = new WeakSet(), za = function() {
  const { menu: n } = this;
  n.addEventListener("mouseenter", m(this, $t)), n.addEventListener("mouseleave", this.hideLater), this.element.addEventListener("mouseleave", this.hideLater), R(this, wt, !0);
}, S(ae, "NAME", "dropdown"), S(ae, "MENU_CLASS", "dropdown-menu"), S(ae, "MENU_SELECTOR", '[data-toggle="dropdown"]:not(.disabled):not(:disabled)'), S(ae, "DEFAULT", {
  ...se.DEFAULT,
  strategy: "absolute",
  trigger: "click"
});
document.addEventListener("click", function(e) {
  const n = e.target.closest(ae.MENU_SELECTOR);
  if (n) {
    const o = ae.ensure(n);
    o.options.trigger === "click" && o.toggle();
  } else
    ae.clear({ event: e });
});
document.addEventListener("mouseover", function(e) {
  const t = e.target, n = typeof t.closest == "function" ? t.closest(ae.MENU_SELECTOR) : null;
  if (!n)
    return;
  const o = ae.ensure(n);
  o.isHover && o.show();
});
var Tn, xt;
class Lu extends on {
  constructor(n) {
    var o;
    super(n);
    M(this, Tn, void 0);
    M(this, xt, X_());
    this.state = { placement: ((o = n.dropdown) == null ? void 0 : o.placement) || "", show: !1 };
  }
  get ref() {
    return m(this, xt);
  }
  get triggerElement() {
    return m(this, xt).current;
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
    }), R(this, Tn, ae.ensure(this.triggerElement, {
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
    (n = m(this, Tn)) == null || n.destroy();
  }
  beforeRender() {
    const { className: n, children: o, dropdown: i, ...r } = this.props;
    return {
      className: P("dropdown", n),
      children: typeof o == "function" ? o(this.state) : o,
      ...r,
      "data-toggle": "dropdown",
      "data-dropdown-placement": this.state.placement,
      ref: m(this, xt)
    };
  }
  render() {
    const { children: n, ...o } = this.beforeRender();
    return /* @__PURE__ */ ua("div", {
      ...o
    }, n);
  }
}
Tn = new WeakMap(), xt = new WeakMap();
class Ou extends Lu {
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
    return o.caret = i, /* @__PURE__ */ ua(At, {
      ...o
    });
  }
}
function Fa({
  key: e,
  type: t,
  btnType: n,
  ...o
}) {
  return /* @__PURE__ */ Xo(Ou, {
    type: n,
    ...o
  });
}
function Du({
  key: e,
  type: t,
  btnType: n,
  ...o
}) {
  return /* @__PURE__ */ Xo(ta, {
    type: n,
    ...o
  });
}
class lt extends Le {
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
    return /* @__PURE__ */ Xo(t, {
      ...r
    });
  }
}
S(lt, "ItemComponents", {
  item: Y_,
  dropdown: Fa,
  "btn-group": Du
}), S(lt, "ROOT_TAG", "nav"), S(lt, "NAME", "toolbar"), S(lt, "defaultProps", {
  btnProps: {
    btnType: "ghost"
  }
});
function Jr(e, t) {
  const n = e.pageTotal || Math.ceil(e.recTotal / e.recPerPage);
  return typeof t == "string" && (t === "first" ? t = 1 : t === "last" ? t = n : t === "prev" ? t = e.page - 1 : t === "next" ? t = e.page + 1 : t === "current" ? t = e.page : t = Number.parseInt(t, 10)), t = t !== void 0 ? Math.max(1, Math.min(t < 0 ? n + t : t, n)) : e.page, {
    ...e,
    pageTotal: n,
    page: t
  };
}
function Hu({
  key: e,
  type: t,
  btnType: n,
  page: o,
  format: i,
  pagerInfo: r,
  linkCreator: l,
  ...c
}) {
  const _ = Jr(r, o);
  return c.text === void 0 && !c.icon && i && (c.text = typeof i == "function" ? i(_) : pe(i, _)), c.url === void 0 && l && (c.url = typeof l == "function" ? l(_) : pe(l, _)), c.disabled === void 0 && (c.disabled = o !== void 0 && _.page === r.page), /* @__PURE__ */ gn(At, {
    type: n,
    ...c
  });
}
const Ae = 24 * 60 * 60 * 1e3, ie = (e) => e ? (e instanceof Date || (typeof e == "string" && (e = e.trim(), /^\d+$/.test(e) && (e = Number.parseInt(e, 10))), typeof e == "number" && e < 1e10 && (e *= 1e3), e = new Date(e)), e) : new Date(), Hn = (e, t = new Date()) => (e = ie(e), t = ie(t), e.getFullYear() === t.getFullYear() && e.getMonth() === t.getMonth() && e.getDate() === t.getDate()), vi = (e, t = new Date()) => ie(e).getFullYear() === ie(t).getFullYear(), Wu = (e, t = new Date()) => (e = ie(e), t = ie(t), e.getFullYear() === t.getFullYear() && e.getMonth() === t.getMonth()), xh = (e, t = new Date()) => {
  e = ie(e), t = ie(t);
  const n = 1e3 * 60 * 60 * 24, o = Math.floor(e.getTime() / n), i = Math.floor(t.getTime() / n);
  return Math.floor((o + 4) / 7) === Math.floor((i + 4) / 7);
}, Ch = (e, t) => Hn(ie(t), e), Eh = (e, t) => Hn(ie(t).getTime() - Ae, e), Sh = (e, t) => Hn(ie(t).getTime() + Ae, e), Mh = (e, t) => Hn(ie(t).getTime() - 2 * Ae, e), yr = (e, t = "yyyy-MM-dd hh:mm") => {
  e = ie(e);
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
}, Ah = (e, t, n) => {
  const o = {
    full: "yyyy-M-d",
    month: "M-d",
    day: "d",
    str: "{0} ~ {1}",
    ...n
  }, i = yr(e, vi(e) ? o.month : o.full);
  if (Hn(e, t))
    return i;
  const r = yr(t, vi(e, t) ? Wu(e, t) ? o.day : o.month : o.full);
  return o.str.replace("{0}", i).replace("{1}", r);
}, Th = (e) => {
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
}, gi = (e, t, n = !0, o = Date.now()) => {
  switch (t) {
    case "year":
      return e *= 365, gi(e, "day", n, o);
    case "quarter":
      e *= 3;
    case "month":
      return e *= 30, gi(e, "day", n, o);
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
function Iu({
  key: e,
  type: t,
  page: n,
  text: o = "",
  pagerInfo: i,
  children: r,
  ...l
}) {
  const c = Jr(i, n);
  return o = typeof o == "function" ? o(c) : pe(o, c), /* @__PURE__ */ gn(ll, {
    ...l
  }, r, o);
}
function Uu({
  key: e,
  type: t,
  btnType: n,
  count: o = 6,
  pagerInfo: i,
  linkCreator: r,
  ...l
}) {
  if (i.pageTotal) {
    const c = (h, s) => {
      if (h) {
        const p = [];
        for (let f = h; f <= s; f++) {
          if (l.text = f, l.icon = "", l.disabled = !1, r) {
            const a = Jr(i, f);
            l.url = typeof r == "function" ? r(a) : pe(r, a);
          }
          p.push(/* @__PURE__ */ gn(At, {
            type: n,
            ...l
          }));
        }
        return p;
      } else
        return l.text = "", l.icon = "icon-ellipsis-h", l.disabled = !0, /* @__PURE__ */ gn(At, {
          type: n,
          ...l
        });
    };
    return (() => {
      if (i.pageTotal > 1) {
        const h = [];
        return i.pageTotal <= o ? h.push(c(2, i.pageTotal)) : i.page < o - 2 ? (h.push(c(1, o - 2)), h.push(c(0, 0)), h.push(c(i.pageTotal, i.pageTotal))) : i.page > i.pageTotal - o + 2 ? (console.log(22), h.push(c(0, 0)), h.push(c(i.pageTotal - o + 2, i.pageTotal))) : (h.push(c(0, 0)), h.push(c(i.page - Math.ceil((o - 4) / 2), i.page + Math.floor((o - 4) / 2))), h.push(c(0, 0)), h.push(c(i.pageTotal, i.pageTotal))), h;
      }
    })();
  }
}
function ju({
  type: e,
  pagerInfo: t,
  linkCreator: n,
  items: o = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 100, 200, 500, 1e3, 2e3],
  dropdown: i = {},
  ...r
}) {
  var c, _;
  i.items = (c = i.items) != null ? c : o.map((h) => {
    const s = { ...t, recPerPage: h };
    return {
      text: `${h}`,
      url: typeof n == "function" ? n(s) : pe(n, s)
    };
  });
  const { text: l = "" } = r;
  return r.text = typeof l == "function" ? l(t) : pe(l, t), i.menu = { ...i.menu, className: P((_ = i.menu) == null ? void 0 : _.className, "pager-size-menu") }, /* @__PURE__ */ gn(Fa, {
    type: "dropdown",
    dropdown: i,
    ...r
  });
}
class no extends lt {
  get pagerInfo() {
    const { page: t = 1, recTotal: n = 0, recPerPage: o = 10 } = this.props;
    return { page: t, recTotal: n, recPerPage: o, pageTotal: o ? Math.ceil(n / o) : 0 };
  }
  isBtnItem(t) {
    return t === "link" || t === "nav" || t === "size-menu" || super.isBtnItem(t);
  }
  getItemRenderProps(t, n, o) {
    const i = super.getItemRenderProps(t, n, o), r = n.type || "item";
    return r === "info" ? Object.assign(i, { pagerInfo: this.pagerInfo }) : (r === "link" || r === "size-menu" || r === "nav") && Object.assign(i, { pagerInfo: this.pagerInfo, linkCreator: t.linkCreator }), i;
  }
}
S(no, "NAME", "pager"), S(no, "defaultProps", {
  gap: 1,
  btnProps: {
    btnType: "ghost",
    size: "sm"
  }
}), S(no, "ItemComponents", {
  ...lt.ItemComponents,
  link: Hu,
  info: Iu,
  nav: Uu,
  "size-menu": ju
});
class mi extends xe {
}
S(mi, "NAME", "pager"), S(mi, "Component", no);
class yi extends xe {
}
S(yi, "NAME", "toolbar"), S(yi, "Component", lt);
var Zr, q, Va, qa, ln, bi, Ga = {}, Ya = [], Bu = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function Qe(e, t) {
  for (var n in t)
    e[n] = t[n];
  return e;
}
function Ka(e) {
  var t = e.parentNode;
  t && t.removeChild(e);
}
function N(e, t, n) {
  var o, i, r, l = {};
  for (r in t)
    r == "key" ? o = t[r] : r == "ref" ? i = t[r] : l[r] = t[r];
  if (arguments.length > 2 && (l.children = arguments.length > 3 ? Zr.call(arguments, 2) : n), typeof e == "function" && e.defaultProps != null)
    for (r in e.defaultProps)
      l[r] === void 0 && (l[r] = e.defaultProps[r]);
  return oo(e, l, o, i, null);
}
function oo(e, t, n, o, i) {
  var r = { type: e, props: t, key: n, ref: o, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: i == null ? ++Va : i };
  return i == null && q.vnode != null && q.vnode(r), r;
}
function zu() {
  return { current: null };
}
function Qr(e) {
  return e.children;
}
function an(e, t) {
  this.props = e, this.context = t;
}
function xn(e, t) {
  if (t == null)
    return e.__ ? xn(e.__, e.__.__k.indexOf(e) + 1) : null;
  for (var n; t < e.__k.length; t++)
    if ((n = e.__k[t]) != null && n.__e != null)
      return n.__e;
  return typeof e.type == "function" ? xn(e) : null;
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
function wi(e) {
  (!e.__d && (e.__d = !0) && ln.push(e) && !Mo.__r++ || bi !== q.debounceRendering) && ((bi = q.debounceRendering) || setTimeout)(Mo);
}
function Mo() {
  for (var e; Mo.__r = ln.length; )
    e = ln.sort(function(t, n) {
      return t.__v.__b - n.__v.__b;
    }), ln = [], e.some(function(t) {
      var n, o, i, r, l, c;
      t.__d && (l = (r = (n = t).__v).__e, (c = n.__P) && (o = [], (i = Qe({}, r)).__v = r.__v + 1, ec(c, r, i, n.__n, c.ownerSVGElement !== void 0, r.__h != null ? [l] : null, o, l == null ? xn(r) : l, r.__h), Vu(o, r), r.__e != l && Xa(r)));
    });
}
function Ja(e, t, n, o, i, r, l, c, _, h) {
  var s, p, f, a, u, b, d, v = o && o.__k || Ya, g = v.length;
  for (n.__k = [], s = 0; s < t.length; s++)
    if ((a = n.__k[s] = (a = t[s]) == null || typeof a == "boolean" ? null : typeof a == "string" || typeof a == "number" || typeof a == "bigint" ? oo(null, a, null, null, a) : Array.isArray(a) ? oo(Qr, { children: a }, null, null, null) : a.__b > 0 ? oo(a.type, a.props, a.key, a.ref ? a.ref : null, a.__v) : a) != null) {
      if (a.__ = n, a.__b = n.__b + 1, (f = v[s]) === null || f && a.key == f.key && a.type === f.type)
        v[s] = void 0;
      else
        for (p = 0; p < g; p++) {
          if ((f = v[p]) && a.key == f.key && a.type === f.type) {
            v[p] = void 0;
            break;
          }
          f = null;
        }
      ec(e, a, f = f || Ga, i, r, l, c, _, h), u = a.__e, (p = a.ref) && f.ref != p && (d || (d = []), f.ref && d.push(f.ref, null, a), d.push(p, a.__c || u, a)), u != null ? (b == null && (b = u), typeof a.type == "function" && a.__k === f.__k ? a.__d = _ = Za(a, _, e) : _ = Qa(e, a, f, v, u, _), typeof n.type == "function" && (n.__d = _)) : _ && f.__e == _ && _.parentNode != e && (_ = xn(f));
    }
  for (n.__e = b, s = g; s--; )
    v[s] != null && nc(v[s], v[s]);
  if (d)
    for (s = 0; s < d.length; s++)
      tc(d[s], d[++s], d[++s]);
}
function Za(e, t, n) {
  for (var o, i = e.__k, r = 0; i && r < i.length; r++)
    (o = i[r]) && (o.__ = e, t = typeof o.type == "function" ? Za(o, t, n) : Qa(n, o, o, i, o.__e, t));
  return t;
}
function Qa(e, t, n, o, i, r) {
  var l, c, _;
  if (t.__d !== void 0)
    l = t.__d, t.__d = void 0;
  else if (n == null || i != r || i.parentNode == null)
    e:
      if (r == null || r.parentNode !== e)
        e.appendChild(i), l = null;
      else {
        for (c = r, _ = 0; (c = c.nextSibling) && _ < o.length; _ += 2)
          if (c == i)
            break e;
        e.insertBefore(i, r), l = r;
      }
  return l !== void 0 ? l : i.nextSibling;
}
function Fu(e, t, n, o, i) {
  var r;
  for (r in n)
    r === "children" || r === "key" || r in t || Ao(e, r, null, n[r], o);
  for (r in t)
    i && typeof t[r] != "function" || r === "children" || r === "key" || r === "value" || r === "checked" || n[r] === t[r] || Ao(e, r, t[r], n[r], o);
}
function ki(e, t, n) {
  t[0] === "-" ? e.setProperty(t, n) : e[t] = n == null ? "" : typeof n != "number" || Bu.test(t) ? n : n + "px";
}
function Ao(e, t, n, o, i) {
  var r;
  e:
    if (t === "style")
      if (typeof n == "string")
        e.style.cssText = n;
      else {
        if (typeof o == "string" && (e.style.cssText = o = ""), o)
          for (t in o)
            n && t in n || ki(e.style, t, "");
        if (n)
          for (t in n)
            o && n[t] === o[t] || ki(e.style, t, n[t]);
      }
    else if (t[0] === "o" && t[1] === "n")
      r = t !== (t = t.replace(/Capture$/, "")), t = t.toLowerCase() in e ? t.toLowerCase().slice(2) : t.slice(2), e.l || (e.l = {}), e.l[t + r] = n, n ? o || e.addEventListener(t, r ? xi : $i, r) : e.removeEventListener(t, r ? xi : $i, r);
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
function $i(e) {
  this.l[e.type + !1](q.event ? q.event(e) : e);
}
function xi(e) {
  this.l[e.type + !0](q.event ? q.event(e) : e);
}
function ec(e, t, n, o, i, r, l, c, _) {
  var h, s, p, f, a, u, b, d, v, g, k, w, E, $, x, y = t.type;
  if (t.constructor !== void 0)
    return null;
  n.__h != null && (_ = n.__h, c = t.__e = n.__e, t.__h = null, r = [c]), (h = q.__b) && h(t);
  try {
    e:
      if (typeof y == "function") {
        if (d = t.props, v = (h = y.contextType) && o[h.__c], g = h ? v ? v.props.value : h.__ : o, n.__c ? b = (s = t.__c = n.__c).__ = s.__E : ("prototype" in y && y.prototype.render ? t.__c = s = new y(d, g) : (t.__c = s = new an(d, g), s.constructor = y, s.render = Gu), v && v.sub(s), s.props = d, s.state || (s.state = {}), s.context = g, s.__n = o, p = s.__d = !0, s.__h = [], s._sb = []), s.__s == null && (s.__s = s.state), y.getDerivedStateFromProps != null && (s.__s == s.state && (s.__s = Qe({}, s.__s)), Qe(s.__s, y.getDerivedStateFromProps(d, s.__s))), f = s.props, a = s.state, p)
          y.getDerivedStateFromProps == null && s.componentWillMount != null && s.componentWillMount(), s.componentDidMount != null && s.__h.push(s.componentDidMount);
        else {
          if (y.getDerivedStateFromProps == null && d !== f && s.componentWillReceiveProps != null && s.componentWillReceiveProps(d, g), !s.__e && s.shouldComponentUpdate != null && s.shouldComponentUpdate(d, s.__s, g) === !1 || t.__v === n.__v) {
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
        if (s.context = g, s.props = d, s.__v = t, s.__P = e, w = q.__r, E = 0, "prototype" in y && y.prototype.render) {
          for (s.state = s.__s, s.__d = !1, w && w(t), h = s.render(s.props, s.state, s.context), $ = 0; $ < s._sb.length; $++)
            s.__h.push(s._sb[$]);
          s._sb = [];
        } else
          do
            s.__d = !1, w && w(t), h = s.render(s.props, s.state, s.context), s.state = s.__s;
          while (s.__d && ++E < 25);
        s.state = s.__s, s.getChildContext != null && (o = Qe(Qe({}, o), s.getChildContext())), p || s.getSnapshotBeforeUpdate == null || (u = s.getSnapshotBeforeUpdate(f, a)), x = h != null && h.type === Qr && h.key == null ? h.props.children : h, Ja(e, Array.isArray(x) ? x : [x], t, n, o, i, r, l, c, _), s.base = t.__e, t.__h = null, s.__h.length && l.push(s), b && (s.__E = s.__ = null), s.__e = !1;
      } else
        r == null && t.__v === n.__v ? (t.__k = n.__k, t.__e = n.__e) : t.__e = qu(n.__e, t, n, o, i, r, l, _);
    (h = q.diffed) && h(t);
  } catch (C) {
    t.__v = null, (_ || r != null) && (t.__e = c, t.__h = !!_, r[r.indexOf(c)] = null), q.__e(C, t, n);
  }
}
function Vu(e, t) {
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
function qu(e, t, n, o, i, r, l, c) {
  var _, h, s, p = n.props, f = t.props, a = t.type, u = 0;
  if (a === "svg" && (i = !0), r != null) {
    for (; u < r.length; u++)
      if ((_ = r[u]) && "setAttribute" in _ == !!a && (a ? _.localName === a : _.nodeType === 3)) {
        e = _, r[u] = null;
        break;
      }
  }
  if (e == null) {
    if (a === null)
      return document.createTextNode(f);
    e = i ? document.createElementNS("http://www.w3.org/2000/svg", a) : document.createElement(a, f.is && f), r = null, c = !1;
  }
  if (a === null)
    p === f || c && e.data === f || (e.data = f);
  else {
    if (r = r && Zr.call(e.childNodes), h = (p = n.props || Ga).dangerouslySetInnerHTML, s = f.dangerouslySetInnerHTML, !c) {
      if (r != null)
        for (p = {}, u = 0; u < e.attributes.length; u++)
          p[e.attributes[u].name] = e.attributes[u].value;
      (s || h) && (s && (h && s.__html == h.__html || s.__html === e.innerHTML) || (e.innerHTML = s && s.__html || ""));
    }
    if (Fu(e, f, p, i, c), s)
      t.__k = [];
    else if (u = t.props.children, Ja(e, Array.isArray(u) ? u : [u], t, n, o, i && a !== "foreignObject", r, l, r ? r[0] : n.__k && xn(n, 0), c), r != null)
      for (u = r.length; u--; )
        r[u] != null && Ka(r[u]);
    c || ("value" in f && (u = f.value) !== void 0 && (u !== e.value || a === "progress" && !u || a === "option" && u !== p.value) && Ao(e, "value", u, p.value, !1), "checked" in f && (u = f.checked) !== void 0 && u !== e.checked && Ao(e, "checked", u, p.checked, !1));
  }
  return e;
}
function tc(e, t, n) {
  try {
    typeof e == "function" ? e(t) : e.current = t;
  } catch (o) {
    q.__e(o, n);
  }
}
function nc(e, t, n) {
  var o, i;
  if (q.unmount && q.unmount(e), (o = e.ref) && (o.current && o.current !== e.__e || tc(o, null, t)), (o = e.__c) != null) {
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
      o[i] && nc(o[i], t, n || typeof e.type != "function");
  n || e.__e == null || Ka(e.__e), e.__ = e.__e = e.__d = void 0;
}
function Gu(e, t, n) {
  return this.constructor(e, n);
}
Zr = Ya.slice, q = { __e: function(e, t, n, o) {
  for (var i, r, l; t = t.__; )
    if ((i = t.__c) && !i.__)
      try {
        if ((r = i.constructor) && r.getDerivedStateFromError != null && (i.setState(r.getDerivedStateFromError(e)), l = i.__d), i.componentDidCatch != null && (i.componentDidCatch(e, o || {}), l = i.__d), l)
          return i.__E = i;
      } catch (c) {
        e = c;
      }
  throw e;
} }, Va = 0, qa = function(e) {
  return e != null && e.constructor === void 0;
}, an.prototype.setState = function(e, t) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = Qe({}, this.state), typeof e == "function" && (e = e(Qe({}, n), this.props)), e && Qe(n, e), e != null && this.__v && (t && this._sb.push(t), wi(this));
}, an.prototype.forceUpdate = function(e) {
  this.__v && (this.__e = !0, e && this.__h.push(e), wi(this));
}, an.prototype.render = Qr, ln = [], Mo.__r = 0;
let Yu = (e = 21) => crypto.getRandomValues(new Uint8Array(e)).reduce((t, n) => (n &= 63, n < 36 ? t += n.toString(36) : n < 62 ? t += (n - 26).toString(36).toUpperCase() : n > 62 ? t += "-" : t += "_", t), "");
var es, G, oc, cn, Ci, rc = {}, sc = [], Ku = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function et(e, t) {
  for (var n in t)
    e[n] = t[n];
  return e;
}
function ic(e) {
  var t = e.parentNode;
  t && t.removeChild(e);
}
function Ei(e, t, n) {
  var o, i, r, l = {};
  for (r in t)
    r == "key" ? o = t[r] : r == "ref" ? i = t[r] : l[r] = t[r];
  if (arguments.length > 2 && (l.children = arguments.length > 3 ? es.call(arguments, 2) : n), typeof e == "function" && e.defaultProps != null)
    for (r in e.defaultProps)
      l[r] === void 0 && (l[r] = e.defaultProps[r]);
  return ro(e, l, o, i, null);
}
function ro(e, t, n, o, i) {
  var r = { type: e, props: t, key: n, ref: o, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: i == null ? ++oc : i };
  return i == null && G.vnode != null && G.vnode(r), r;
}
function ts(e) {
  return e.children;
}
function _n(e, t) {
  this.props = e, this.context = t;
}
function Cn(e, t) {
  if (t == null)
    return e.__ ? Cn(e.__, e.__.__k.indexOf(e) + 1) : null;
  for (var n; t < e.__k.length; t++)
    if ((n = e.__k[t]) != null && n.__e != null)
      return n.__e;
  return typeof e.type == "function" ? Cn(e) : null;
}
function lc(e) {
  var t, n;
  if ((e = e.__) != null && e.__c != null) {
    for (e.__e = e.__c.base = null, t = 0; t < e.__k.length; t++)
      if ((n = e.__k[t]) != null && n.__e != null) {
        e.__e = e.__c.base = n.__e;
        break;
      }
    return lc(e);
  }
}
function Si(e) {
  (!e.__d && (e.__d = !0) && cn.push(e) && !To.__r++ || Ci !== G.debounceRendering) && ((Ci = G.debounceRendering) || setTimeout)(To);
}
function To() {
  for (var e; To.__r = cn.length; )
    e = cn.sort(function(t, n) {
      return t.__v.__b - n.__v.__b;
    }), cn = [], e.some(function(t) {
      var n, o, i, r, l, c;
      t.__d && (l = (r = (n = t).__v).__e, (c = n.__P) && (o = [], (i = et({}, r)).__v = r.__v + 1, fc(c, r, i, n.__n, c.ownerSVGElement !== void 0, r.__h != null ? [l] : null, o, l == null ? Cn(r) : l, r.__h), Ju(o, r), r.__e != l && lc(r)));
    });
}
function ac(e, t, n, o, i, r, l, c, _, h) {
  var s, p, f, a, u, b, d, v = o && o.__k || sc, g = v.length;
  for (n.__k = [], s = 0; s < t.length; s++)
    if ((a = n.__k[s] = (a = t[s]) == null || typeof a == "boolean" ? null : typeof a == "string" || typeof a == "number" || typeof a == "bigint" ? ro(null, a, null, null, a) : Array.isArray(a) ? ro(ts, { children: a }, null, null, null) : a.__b > 0 ? ro(a.type, a.props, a.key, a.ref ? a.ref : null, a.__v) : a) != null) {
      if (a.__ = n, a.__b = n.__b + 1, (f = v[s]) === null || f && a.key == f.key && a.type === f.type)
        v[s] = void 0;
      else
        for (p = 0; p < g; p++) {
          if ((f = v[p]) && a.key == f.key && a.type === f.type) {
            v[p] = void 0;
            break;
          }
          f = null;
        }
      fc(e, a, f = f || rc, i, r, l, c, _, h), u = a.__e, (p = a.ref) && f.ref != p && (d || (d = []), f.ref && d.push(f.ref, null, a), d.push(p, a.__c || u, a)), u != null ? (b == null && (b = u), typeof a.type == "function" && a.__k === f.__k ? a.__d = _ = cc(a, _, e) : _ = _c(e, a, f, v, u, _), typeof n.type == "function" && (n.__d = _)) : _ && f.__e == _ && _.parentNode != e && (_ = Cn(f));
    }
  for (n.__e = b, s = g; s--; )
    v[s] != null && hc(v[s], v[s]);
  if (d)
    for (s = 0; s < d.length; s++)
      uc(d[s], d[++s], d[++s]);
}
function cc(e, t, n) {
  for (var o, i = e.__k, r = 0; i && r < i.length; r++)
    (o = i[r]) && (o.__ = e, t = typeof o.type == "function" ? cc(o, t, n) : _c(n, o, o, i, o.__e, t));
  return t;
}
function _c(e, t, n, o, i, r) {
  var l, c, _;
  if (t.__d !== void 0)
    l = t.__d, t.__d = void 0;
  else if (n == null || i != r || i.parentNode == null)
    e:
      if (r == null || r.parentNode !== e)
        e.appendChild(i), l = null;
      else {
        for (c = r, _ = 0; (c = c.nextSibling) && _ < o.length; _ += 2)
          if (c == i)
            break e;
        e.insertBefore(i, r), l = r;
      }
  return l !== void 0 ? l : i.nextSibling;
}
function Xu(e, t, n, o, i) {
  var r;
  for (r in n)
    r === "children" || r === "key" || r in t || Ro(e, r, null, n[r], o);
  for (r in t)
    i && typeof t[r] != "function" || r === "children" || r === "key" || r === "value" || r === "checked" || n[r] === t[r] || Ro(e, r, t[r], n[r], o);
}
function Mi(e, t, n) {
  t[0] === "-" ? e.setProperty(t, n) : e[t] = n == null ? "" : typeof n != "number" || Ku.test(t) ? n : n + "px";
}
function Ro(e, t, n, o, i) {
  var r;
  e:
    if (t === "style")
      if (typeof n == "string")
        e.style.cssText = n;
      else {
        if (typeof o == "string" && (e.style.cssText = o = ""), o)
          for (t in o)
            n && t in n || Mi(e.style, t, "");
        if (n)
          for (t in n)
            o && n[t] === o[t] || Mi(e.style, t, n[t]);
      }
    else if (t[0] === "o" && t[1] === "n")
      r = t !== (t = t.replace(/Capture$/, "")), t = t.toLowerCase() in e ? t.toLowerCase().slice(2) : t.slice(2), e.l || (e.l = {}), e.l[t + r] = n, n ? o || e.addEventListener(t, r ? Ti : Ai, r) : e.removeEventListener(t, r ? Ti : Ai, r);
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
function Ai(e) {
  this.l[e.type + !1](G.event ? G.event(e) : e);
}
function Ti(e) {
  this.l[e.type + !0](G.event ? G.event(e) : e);
}
function fc(e, t, n, o, i, r, l, c, _) {
  var h, s, p, f, a, u, b, d, v, g, k, w, E, $, x, y = t.type;
  if (t.constructor !== void 0)
    return null;
  n.__h != null && (_ = n.__h, c = t.__e = n.__e, t.__h = null, r = [c]), (h = G.__b) && h(t);
  try {
    e:
      if (typeof y == "function") {
        if (d = t.props, v = (h = y.contextType) && o[h.__c], g = h ? v ? v.props.value : h.__ : o, n.__c ? b = (s = t.__c = n.__c).__ = s.__E : ("prototype" in y && y.prototype.render ? t.__c = s = new y(d, g) : (t.__c = s = new _n(d, g), s.constructor = y, s.render = Qu), v && v.sub(s), s.props = d, s.state || (s.state = {}), s.context = g, s.__n = o, p = s.__d = !0, s.__h = [], s._sb = []), s.__s == null && (s.__s = s.state), y.getDerivedStateFromProps != null && (s.__s == s.state && (s.__s = et({}, s.__s)), et(s.__s, y.getDerivedStateFromProps(d, s.__s))), f = s.props, a = s.state, p)
          y.getDerivedStateFromProps == null && s.componentWillMount != null && s.componentWillMount(), s.componentDidMount != null && s.__h.push(s.componentDidMount);
        else {
          if (y.getDerivedStateFromProps == null && d !== f && s.componentWillReceiveProps != null && s.componentWillReceiveProps(d, g), !s.__e && s.shouldComponentUpdate != null && s.shouldComponentUpdate(d, s.__s, g) === !1 || t.__v === n.__v) {
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
        if (s.context = g, s.props = d, s.__v = t, s.__P = e, w = G.__r, E = 0, "prototype" in y && y.prototype.render) {
          for (s.state = s.__s, s.__d = !1, w && w(t), h = s.render(s.props, s.state, s.context), $ = 0; $ < s._sb.length; $++)
            s.__h.push(s._sb[$]);
          s._sb = [];
        } else
          do
            s.__d = !1, w && w(t), h = s.render(s.props, s.state, s.context), s.state = s.__s;
          while (s.__d && ++E < 25);
        s.state = s.__s, s.getChildContext != null && (o = et(et({}, o), s.getChildContext())), p || s.getSnapshotBeforeUpdate == null || (u = s.getSnapshotBeforeUpdate(f, a)), x = h != null && h.type === ts && h.key == null ? h.props.children : h, ac(e, Array.isArray(x) ? x : [x], t, n, o, i, r, l, c, _), s.base = t.__e, t.__h = null, s.__h.length && l.push(s), b && (s.__E = s.__ = null), s.__e = !1;
      } else
        r == null && t.__v === n.__v ? (t.__k = n.__k, t.__e = n.__e) : t.__e = Zu(n.__e, t, n, o, i, r, l, _);
    (h = G.diffed) && h(t);
  } catch (C) {
    t.__v = null, (_ || r != null) && (t.__e = c, t.__h = !!_, r[r.indexOf(c)] = null), G.__e(C, t, n);
  }
}
function Ju(e, t) {
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
function Zu(e, t, n, o, i, r, l, c) {
  var _, h, s, p = n.props, f = t.props, a = t.type, u = 0;
  if (a === "svg" && (i = !0), r != null) {
    for (; u < r.length; u++)
      if ((_ = r[u]) && "setAttribute" in _ == !!a && (a ? _.localName === a : _.nodeType === 3)) {
        e = _, r[u] = null;
        break;
      }
  }
  if (e == null) {
    if (a === null)
      return document.createTextNode(f);
    e = i ? document.createElementNS("http://www.w3.org/2000/svg", a) : document.createElement(a, f.is && f), r = null, c = !1;
  }
  if (a === null)
    p === f || c && e.data === f || (e.data = f);
  else {
    if (r = r && es.call(e.childNodes), h = (p = n.props || rc).dangerouslySetInnerHTML, s = f.dangerouslySetInnerHTML, !c) {
      if (r != null)
        for (p = {}, u = 0; u < e.attributes.length; u++)
          p[e.attributes[u].name] = e.attributes[u].value;
      (s || h) && (s && (h && s.__html == h.__html || s.__html === e.innerHTML) || (e.innerHTML = s && s.__html || ""));
    }
    if (Xu(e, f, p, i, c), s)
      t.__k = [];
    else if (u = t.props.children, ac(e, Array.isArray(u) ? u : [u], t, n, o, i && a !== "foreignObject", r, l, r ? r[0] : n.__k && Cn(n, 0), c), r != null)
      for (u = r.length; u--; )
        r[u] != null && ic(r[u]);
    c || ("value" in f && (u = f.value) !== void 0 && (u !== e.value || a === "progress" && !u || a === "option" && u !== p.value) && Ro(e, "value", u, p.value, !1), "checked" in f && (u = f.checked) !== void 0 && u !== e.checked && Ro(e, "checked", u, p.checked, !1));
  }
  return e;
}
function uc(e, t, n) {
  try {
    typeof e == "function" ? e(t) : e.current = t;
  } catch (o) {
    G.__e(o, n);
  }
}
function hc(e, t, n) {
  var o, i;
  if (G.unmount && G.unmount(e), (o = e.ref) && (o.current && o.current !== e.__e || uc(o, null, t)), (o = e.__c) != null) {
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
      o[i] && hc(o[i], t, n || typeof e.type != "function");
  n || e.__e == null || ic(e.__e), e.__ = e.__e = e.__d = void 0;
}
function Qu(e, t, n) {
  return this.constructor(e, n);
}
es = sc.slice, G = { __e: function(e, t, n, o) {
  for (var i, r, l; t = t.__; )
    if ((i = t.__c) && !i.__)
      try {
        if ((r = i.constructor) && r.getDerivedStateFromError != null && (i.setState(r.getDerivedStateFromError(e)), l = i.__d), i.componentDidCatch != null && (i.componentDidCatch(e, o || {}), l = i.__d), l)
          return i.__E = i;
      } catch (c) {
        e = c;
      }
  throw e;
} }, oc = 0, _n.prototype.setState = function(e, t) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = et({}, this.state), typeof e == "function" && (e = e(et({}, n), this.props)), e && et(n, e), e != null && this.__v && (t && this._sb.push(t), Si(this));
}, _n.prototype.forceUpdate = function(e) {
  this.__v && (this.__e = !0, e && this.__h.push(e), Si(this));
}, _n.prototype.render = ts, cn = [], To.__r = 0;
var ct, _t;
class Ri extends _n {
  constructor(n) {
    var o;
    super(n);
    M(this, ct, 0);
    M(this, _t, null);
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
      o && (m(this, ct) && cancelAnimationFrame(m(this, ct)), R(this, ct, requestAnimationFrame(() => {
        const i = this.props.type === "horz" ? n.clientX - o.x : n.clientY - o.y;
        this.scroll(o.offset + i * this.props.scrollSize / this.props.clientSize), R(this, ct, 0);
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
      const i = o.getBoundingClientRect(), { type: r, clientSize: l, scrollSize: c } = this.props, _ = (r === "horz" ? n.clientX - i.left : n.clientY - i.top) - this.barSize / 2;
      this.scroll(_ * c / l), n.preventDefault();
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
    n && (R(this, _t, typeof n == "string" ? document : n.current), m(this, _t).addEventListener("wheel", this._handleWheel, { passive: !1 }));
  }
  componentWillUnmount() {
    document.removeEventListener("mousemove", this._handleMouseMove), document.removeEventListener("mouseup", this._handleMouseUp), m(this, _t) && m(this, _t).removeEventListener("wheel", this._handleWheel);
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
      left: c,
      top: _,
      bottom: h,
      right: s
    } = this.props, { maxScrollPos: p, scrollPos: f } = this, { dragStart: a } = this.state, u = {
      left: c,
      top: _,
      bottom: h,
      right: s,
      ...l
    }, b = {};
    return o === "horz" ? (u.height = i, u.width = n, b.width = this.barSize, b.left = Math.round(Math.min(p, f) * (n - b.width) / p)) : (u.width = i, u.height = n, b.height = this.barSize, b.top = Math.round(Math.min(p, f) * (n - b.height) / p)), /* @__PURE__ */ Ei("div", {
      className: P("scrollbar", r, {
        "is-vert": o === "vert",
        "is-horz": o === "horz",
        "is-dragging": a
      }),
      style: u,
      onMouseDown: this._handleClick
    }, /* @__PURE__ */ Ei("div", {
      className: "scrollbar-bar",
      style: b,
      onMouseDown: this._handleMouseDown
    }));
  }
}
ct = new WeakMap(), _t = new WeakMap();
function Ni(e, t, n) {
  return e && (t && (e = Math.max(t, e)), n && (e = Math.min(n, e))), e;
}
function pc({ col: e, className: t, height: n, row: o, onRenderCell: i, style: r, outerStyle: l, children: c, outerClass: _, ...h }) {
  var y, C;
  const s = {
    left: e.left,
    width: e.realWidth,
    height: n,
    ...l
  }, { align: p, border: f } = e.setting, a = {
    justifyContent: p ? p === "left" ? "start" : p === "right" ? "end" : p : void 0,
    ...e.setting.cellStyle,
    ...r
  }, u = ["dtable-cell", _, e.setting.className, {
    "has-border-left": f === !0 || f === "left",
    "has-border-right": f === !0 || f === "right"
  }], b = ["dtable-cell-content", t], d = [(C = c != null ? c : (y = o.data) == null ? void 0 : y[e.name]) != null ? C : ""], v = i ? i(d, { row: o, col: e }, N) : d, g = [], k = [], w = {}, E = {};
  let $ = "div";
  v == null || v.forEach((A) => {
    var D;
    if (typeof A == "object" && A && !qa(A) && ("html" in A || "className" in A || "style" in A || "attrs" in A || "children" in A || "tagName" in A)) {
      const J = A.outer ? g : k;
      A.html ? J.push(/* @__PURE__ */ N("div", {
        className: P("dtable-cell-html", A.className),
        style: A.style,
        dangerouslySetInnerHTML: { __html: A.html },
        ...(D = A.attrs) != null ? D : {}
      })) : (A.style && Object.assign(A.outer ? s : a, A.style), A.className && (A.outer ? u : b).push(A.className), A.children && J.push(A.children), A.attrs && Object.assign(A.outer ? w : E, A.attrs)), A.tagName && !A.outer && ($ = A.tagName);
    } else
      k.push(A);
  });
  const x = $;
  return /* @__PURE__ */ N("div", {
    className: P(u),
    style: s,
    "data-col": e.name,
    ...h,
    ...w
  }, k.length > 0 && /* @__PURE__ */ N(x, {
    className: P(b),
    style: a,
    ...E
  }, k), g);
}
function lr({ row: e, className: t, top: n = 0, left: o = 0, width: i, height: r, cols: l, CellComponent: c = pc, onRenderCell: _ }) {
  return /* @__PURE__ */ N("div", {
    className: P("dtable-cells", t),
    style: { top: n, left: o, width: i, height: r }
  }, l.map((h) => h.visible ? /* @__PURE__ */ N(c, {
    key: h.name,
    col: h,
    row: e,
    onRenderCell: _
  }) : null));
}
function dc({
  row: e,
  className: t,
  top: n,
  height: o,
  fixedLeftCols: i,
  fixedRightCols: r,
  scrollCols: l,
  fixedLeftWidth: c,
  scrollWidth: _,
  scrollColsWidth: h,
  fixedRightWidth: s,
  scrollLeft: p,
  CellComponent: f = pc,
  onRenderCell: a,
  style: u,
  ...b
}) {
  let d = null;
  i != null && i.length && (d = /* @__PURE__ */ N(lr, {
    className: "dtable-fixed-left",
    cols: i,
    width: c,
    row: e,
    CellComponent: f,
    onRenderCell: a
  }));
  let v = null;
  l != null && l.length && (v = /* @__PURE__ */ N(lr, {
    className: "dtable-flexable",
    cols: l,
    left: c - p,
    width: Math.max(_, h),
    row: e,
    CellComponent: f,
    onRenderCell: a
  }));
  let g = null;
  r != null && r.length && (g = /* @__PURE__ */ N(lr, {
    className: "dtable-fixed-right",
    cols: r,
    left: c + _,
    width: s,
    row: e,
    CellComponent: f,
    onRenderCell: a
  }));
  const k = { top: n, height: o, lineHeight: `${o - 2}px`, ...u };
  return /* @__PURE__ */ N("div", {
    className: P("dtable-row", t),
    style: k,
    "data-id": e.id,
    ...b
  }, d, v, g);
}
function eh({ height: e, onRenderRow: t, ...n }) {
  const o = {
    height: e,
    ...n,
    row: { id: "HEADER", index: -1, top: 0 },
    className: "dtable-in-header",
    top: 0
  };
  if (t) {
    const i = t({ props: o }, N);
    i && Object.assign(o, i);
  }
  return /* @__PURE__ */ N("div", {
    className: "dtable-header",
    style: { height: e }
  }, /* @__PURE__ */ N(dc, {
    ...o
  }));
}
function th({
  className: e,
  style: t,
  top: n,
  rows: o,
  height: i,
  rowHeight: r,
  scrollTop: l,
  onRenderRow: c,
  ..._
}) {
  return t = { ...t, top: n, height: i }, /* @__PURE__ */ N("div", {
    className: P("dtable-rows", e),
    style: t
  }, o.map((h) => {
    const s = {
      className: `dtable-row-${h.index % 2 ? "odd" : "even"}`,
      row: h,
      top: h.top - l,
      height: r,
      ..._
    }, p = c == null ? void 0 : c({ props: s, row: h }, N);
    return p && Object.assign(s, p), /* @__PURE__ */ N(dc, {
      ...s
    });
  }));
}
const No = /* @__PURE__ */ new Map(), Po = [];
function vc(e, t) {
  const { name: n } = e;
  if (!(t != null && t.override) && No.has(n))
    throw new Error(`DTable: Plugin with name ${n} already exists`);
  No.set(n, e), (t == null ? void 0 : t.buildIn) && !Po.includes(n) && Po.push(n);
}
function Ot(e, t) {
  vc(e, t);
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
function gc(e) {
  return No.delete(e);
}
function nh(e) {
  if (typeof e == "string") {
    const t = No.get(e);
    return t || console.warn(`DTable: Cannot found plugin "${e}"`), t;
  }
  if (typeof e == "function" && "plugin" in e)
    return e.plugin;
  if (typeof e == "object")
    return e;
  console.warn("DTable: Invalid plugin", e);
}
function mc(e, t, n) {
  return t.forEach((o) => {
    var r;
    if (!o)
      return;
    const i = nh(o);
    !i || n.has(i.name) || ((r = i.plugins) != null && r.length && mc(e, i.plugins, n), e.push(i), n.add(i.name));
  }), e;
}
function oh(e = [], t = !0) {
  return t && Po.length && e.unshift(...Po), e != null && e.length ? mc([], e, /* @__PURE__ */ new Set()) : [];
}
function Pi() {
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
var ft, Ct, ze, ye, Fe, ee, he, be, Et, Rn, Nn, Pe, St, Mt, Do, yc, Ho, bc, Wo, wc, Io, kc, Pn, wr, Uo, jo, Ln, On, Bo, zo, Fo, $c, Vo, xc, qo, Cc;
class br extends an {
  constructor(n) {
    var o;
    super(n);
    M(this, Do);
    M(this, Ho);
    M(this, Wo);
    M(this, Io);
    M(this, Pn);
    M(this, Fo);
    M(this, Vo);
    M(this, qo);
    S(this, "ref", zu());
    M(this, ft, 0);
    M(this, Ct, void 0);
    M(this, ze, !1);
    M(this, ye, void 0);
    M(this, Fe, void 0);
    M(this, ee, []);
    M(this, he, void 0);
    M(this, be, /* @__PURE__ */ new Map());
    M(this, Et, {});
    M(this, Rn, void 0);
    M(this, Nn, []);
    S(this, "updateLayout", () => {
      m(this, ft) && cancelAnimationFrame(m(this, ft)), R(this, ft, requestAnimationFrame(() => {
        R(this, he, void 0), this.forceUpdate(), R(this, ft, 0);
      }));
    });
    M(this, Pe, (n, o) => {
      o = o || n.type;
      const i = m(this, be).get(o);
      if (!!(i != null && i.length)) {
        for (const r of i)
          if (r.call(this, n) === !1) {
            n.stopPropagation(), n.preventDefault();
            break;
          }
      }
    });
    M(this, St, (n) => {
      m(this, Pe).call(this, n, `window_${n.type}`);
    });
    M(this, Mt, (n) => {
      m(this, Pe).call(this, n, `document_${n.type}`);
    });
    M(this, Uo, (n, o) => {
      if (this.options.onRenderRow) {
        const i = this.options.onRenderRow.call(this, n, o);
        i && Object.assign(n.props, i);
      }
      return m(this, ee).forEach((i) => {
        if (i.onRenderRow) {
          const r = i.onRenderRow.call(this, n, o);
          r && Object.assign(n.props, r);
        }
      }), n.props;
    });
    M(this, jo, (n, o) => (this.options.onRenderHeaderRow && (n.props = this.options.onRenderHeaderRow.call(this, n, o)), m(this, ee).forEach((i) => {
      i.onRenderHeaderRow && (n.props = i.onRenderHeaderRow.call(this, n, o));
    }), n.props));
    M(this, Ln, (n, o, i) => {
      const { row: r, col: l } = o;
      n[0] = this.getCellValue(r, l);
      const c = r.id === "HEADER" ? "onRenderHeaderCell" : "onRenderCell";
      return l.setting[c] && (n = l.setting[c].call(this, n, o, i)), this.options[c] && (n = this.options[c].call(this, n, o, i)), m(this, ee).forEach((_) => {
        _[c] && (n = _[c].call(this, n, o, i));
      }), n;
    });
    M(this, On, (n, o) => {
      o === "horz" ? this.scroll({ scrollLeft: n }) : this.scroll({ scrollTop: n });
    });
    M(this, Bo, (n) => {
      var c, _, h, s, p;
      const o = this.getPointerInfo(n);
      if (!o)
        return;
      const { rowID: i, colName: r, cellElement: l } = o;
      if (i === "HEADER")
        l && ((c = this.options.onHeaderCellClick) == null || c.call(this, n, { colName: r, element: l }), m(this, ee).forEach((f) => {
          var a;
          (a = f.onHeaderCellClick) == null || a.call(this, n, { colName: r, element: l });
        }));
      else {
        const { rowElement: f } = o, a = this.layout.visibleRows.find((u) => u.id === i);
        if (l) {
          if (((_ = this.options.onCellClick) == null ? void 0 : _.call(this, n, { colName: r, rowID: i, rowInfo: a, element: l, rowElement: f })) === !0)
            return;
          for (const u of m(this, ee))
            if (((h = u.onCellClick) == null ? void 0 : h.call(this, n, { colName: r, rowID: i, rowInfo: a, element: l, rowElement: f })) === !0)
              return;
        }
        if (((s = this.options.onRowClick) == null ? void 0 : s.call(this, n, { rowID: i, rowInfo: a, element: f })) === !0)
          return;
        for (const u of m(this, ee))
          if (((p = u.onRowClick) == null ? void 0 : p.call(this, n, { rowID: i, rowInfo: a, element: f })) === !0)
            return;
      }
    });
    M(this, zo, (n) => {
      const o = n.key.toLowerCase();
      if (["pageup", "pagedown", "home", "end"].includes(o))
        return !this.scroll({ to: o.replace("page", "") });
    });
    R(this, Ct, (o = n.id) != null ? o : `dtable-${Yu(10)}`), this.state = { scrollTop: 0, scrollLeft: 0, renderCount: 0 }, R(this, Fe, Object.freeze(oh(n.plugins))), m(this, Fe).forEach((i) => {
      var _;
      const { methods: r, data: l, state: c } = i;
      r && Object.entries(r).forEach(([h, s]) => {
        typeof s == "function" && Object.assign(this, { [h]: s.bind(this) });
      }), l && Object.assign(m(this, Et), l.call(this)), c && Object.assign(this.state, c.call(this)), (_ = i.onCreate) == null || _.call(this, i);
    });
  }
  get options() {
    var n;
    return ((n = m(this, he)) == null ? void 0 : n.options) || m(this, ye) || Pi();
  }
  get plugins() {
    return m(this, ee);
  }
  get layout() {
    return m(this, he);
  }
  get id() {
    return m(this, Ct);
  }
  get data() {
    return m(this, Et);
  }
  get parent() {
    var n, o;
    return (o = this.props.parent) != null ? o : (n = this.ref.current) == null ? void 0 : n.parentElement;
  }
  componentWillReceiveProps() {
    R(this, ye, void 0);
  }
  componentDidMount() {
    if (m(this, ze) ? this.forceUpdate() : X(this, Pn, wr).call(this), m(this, ee).forEach((n) => {
      let { events: o } = n;
      !o || (typeof o == "function" && (o = o.call(this)), Object.entries(o).forEach(([i, r]) => {
        r && this.on(i, r);
      }));
    }), this.on("click", m(this, Bo)), this.on("keydown", m(this, zo)), this.options.responsive) {
      if (typeof ResizeObserver < "u") {
        const { parent: n } = this;
        if (n) {
          const o = new ResizeObserver(this.updateLayout);
          o.observe(n), R(this, Rn, o);
        }
      }
      this.on("window_resize", this.updateLayout);
    }
    m(this, ee).forEach((n) => {
      var o;
      (o = n.onMounted) == null || o.call(this);
    });
  }
  componentDidUpdate() {
    m(this, ze) ? X(this, Pn, wr).call(this) : m(this, ee).forEach((n) => {
      var o;
      (o = n.onUpdated) == null || o.call(this);
    });
  }
  componentWillUnmount() {
    var o;
    (o = m(this, Rn)) == null || o.disconnect();
    const { current: n } = this.ref;
    if (n)
      for (const i of m(this, be).keys())
        i.startsWith("window_") ? window.removeEventListener(i.replace("window_", ""), m(this, St)) : i.startsWith("document_") ? document.removeEventListener(i.replace("document_", ""), m(this, Mt)) : n.removeEventListener(i, m(this, Pe));
    m(this, ee).forEach((i) => {
      var r;
      (r = i.onUnmounted) == null || r.call(this);
    }), m(this, Fe).forEach((i) => {
      var r;
      (r = i.onDestory) == null || r.call(this);
    }), R(this, Et, {}), m(this, be).clear();
  }
  on(n, o, i) {
    var l;
    i && (n = `${i}_${n}`);
    const r = m(this, be).get(n);
    r ? r.push(o) : (m(this, be).set(n, [o]), n.startsWith("window_") ? window.addEventListener(n.replace("window_", ""), m(this, St)) : n.startsWith("document_") ? document.addEventListener(n.replace("document_", ""), m(this, Mt)) : (l = this.ref.current) == null || l.addEventListener(n, m(this, Pe)));
  }
  off(n, o, i) {
    var c;
    i && (n = `${i}_${n}`);
    const r = m(this, be).get(n);
    if (!r)
      return;
    const l = r.indexOf(o);
    l >= 0 && r.splice(l, 1), r.length || (m(this, be).delete(n), n.startsWith("window_") ? window.removeEventListener(n.replace("window_", ""), m(this, St)) : n.startsWith("document_") ? document.removeEventListener(n.replace("document_", ""), m(this, Mt)) : (c = this.ref.current) == null || c.removeEventListener(n, m(this, Pe)));
  }
  emitCustomEvent(n, o) {
    m(this, Pe).call(this, o instanceof Event ? o : new CustomEvent(n, { detail: o }), n);
  }
  scroll(n, o) {
    const { scrollLeft: i, scrollTop: r, rowsHeightTotal: l, rowsHeight: c, rowHeight: _, colsInfo: { scrollWidth: h, scrollColsWidth: s } } = this.layout, { to: p } = n;
    let { scrollLeft: f, scrollTop: a } = n;
    if (p === "up" || p === "down")
      a = r + (p === "down" ? 1 : -1) * Math.floor(c / _) * _;
    else if (p === "left" || p === "right")
      f = i + (p === "right" ? 1 : -1) * h;
    else if (p === "home")
      a = 0;
    else if (p === "end")
      a = l - c;
    else if (p === "left-begin")
      f = 0;
    else if (p === "right-end")
      f = s - h;
    else {
      const { offsetLeft: b, offsetTop: d } = n;
      typeof b == "number" && (f = i + b), typeof d == "number" && (f = r + d);
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
    var _, h;
    const i = typeof n == "object" ? n : this.getRowInfo(n);
    if (!i)
      return;
    const r = typeof o == "object" ? o : this.getColInfo(o);
    if (!r)
      return;
    let l = i.id === "HEADER" ? (_ = r.setting.title) != null ? _ : r.setting.name : (h = i.data) == null ? void 0 : h[r.name];
    const { cellValueGetter: c } = this.options;
    return c && (l = c.call(this, i, r, l)), l;
  }
  getRowInfoByIndex(n) {
    return this.layout.rows[n];
  }
  update(n = {}, o) {
    if (!m(this, ye))
      return;
    typeof n == "function" && (o = n, n = {});
    const { dirtyType: i, state: r } = n;
    if (i === "layout")
      R(this, he, void 0);
    else if (i === "options") {
      if (R(this, ye, void 0), !m(this, he))
        return;
      R(this, he, void 0);
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
    var r;
    return (r = Dn(m(this, Nn), n, o, i, this.options.lang)) != null ? r : `{i18n:${n}}`;
  }
  render() {
    var a;
    const n = X(this, qo, Cc).call(this), { className: o, rowHover: i, colHover: r, cellHover: l, bordered: c, striped: _, scrollbarHover: h } = this.options, s = { width: n == null ? void 0 : n.width, height: n == null ? void 0 : n.height }, p = ["dtable", o, {
      "dtable-hover-row": i,
      "dtable-hover-col": r,
      "dtable-hover-cell": l,
      "dtable-bordered": c,
      "dtable-striped": _,
      "dtable-scrolled-down": ((a = n == null ? void 0 : n.scrollTop) != null ? a : 0) > 0,
      "scrollbar-hover": h
    }], f = [];
    return n && m(this, ee).forEach((u) => {
      var d;
      const b = (d = u.onRender) == null ? void 0 : d.call(this, n);
      !b || (b.style && Object.assign(s, b.style), b.className && p.push(b.className), b.children && f.push(b.children));
    }), /* @__PURE__ */ N("div", {
      id: m(this, Ct),
      className: P(p),
      style: s,
      ref: this.ref,
      tabIndex: -1
    }, n && X(this, Do, yc).call(this, n), n && X(this, Ho, bc).call(this, n), n && X(this, Wo, wc).call(this, n), n && X(this, Io, kc).call(this, n));
  }
}
ft = new WeakMap(), Ct = new WeakMap(), ze = new WeakMap(), ye = new WeakMap(), Fe = new WeakMap(), ee = new WeakMap(), he = new WeakMap(), be = new WeakMap(), Et = new WeakMap(), Rn = new WeakMap(), Nn = new WeakMap(), Pe = new WeakMap(), St = new WeakMap(), Mt = new WeakMap(), Do = new WeakSet(), yc = function(n) {
  const { header: o, colsInfo: i, headerHeight: r, scrollLeft: l } = n;
  if (!o)
    return null;
  if (o === !0)
    return /* @__PURE__ */ N(eh, {
      scrollLeft: l,
      height: r,
      onRenderCell: m(this, Ln),
      onRenderRow: m(this, jo),
      ...i
    });
  const c = Array.isArray(o) ? o : [o];
  return /* @__PURE__ */ N(_r, {
    className: "dtable-header",
    style: { height: r },
    renders: c,
    generateArgs: [n],
    generatorThis: this
  });
}, Ho = new WeakSet(), bc = function(n) {
  const { headerHeight: o, rowsHeight: i, visibleRows: r, rowHeight: l, colsInfo: c, scrollLeft: _, scrollTop: h } = n;
  return /* @__PURE__ */ N(th, {
    top: o,
    height: i,
    rows: r,
    rowHeight: l,
    scrollLeft: _,
    scrollTop: h,
    onRenderCell: m(this, Ln),
    onRenderRow: m(this, Uo),
    ...c
  });
}, Wo = new WeakSet(), wc = function(n) {
  const { footer: o } = n;
  if (!o)
    return null;
  const i = typeof o == "function" ? o.call(this, n) : Array.isArray(o) ? o : [o];
  return /* @__PURE__ */ N(_r, {
    className: "dtable-footer",
    style: { height: n.footerHeight, top: n.rowsHeight + n.headerHeight },
    renders: i,
    generateArgs: [n],
    generatorThis: this,
    generators: n.footerGenerators
  });
}, Io = new WeakSet(), kc = function(n) {
  const o = [], { scrollLeft: i, colsInfo: r, scrollTop: l, rowsHeight: c, rowsHeightTotal: _, footerHeight: h } = n, { scrollColsWidth: s, scrollWidth: p } = r, { scrollbarSize: f = 12, horzScrollbarPos: a } = this.options;
  return s > p && o.push(
    /* @__PURE__ */ N(Ri, {
      key: "horz",
      type: "horz",
      scrollPos: i,
      scrollSize: s,
      clientSize: p,
      onScroll: m(this, On),
      left: r.fixedLeftWidth,
      bottom: (a === "inside" ? 0 : -f) + h,
      size: f,
      wheelContainer: this.ref
    })
  ), _ > c && o.push(
    /* @__PURE__ */ N(Ri, {
      key: "vert",
      type: "vert",
      scrollPos: l,
      scrollSize: _,
      clientSize: c,
      onScroll: m(this, On),
      right: 0,
      size: f,
      top: n.headerHeight,
      wheelContainer: this.ref
    })
  ), o.length ? o : null;
}, Pn = new WeakSet(), wr = function() {
  var n;
  R(this, ze, !1), (n = this.options.afterRender) == null || n.call(this), m(this, ee).forEach((o) => {
    var i;
    return (i = o.afterRender) == null ? void 0 : i.call(this);
  });
}, Uo = new WeakMap(), jo = new WeakMap(), Ln = new WeakMap(), On = new WeakMap(), Bo = new WeakMap(), zo = new WeakMap(), Fo = new WeakSet(), $c = function() {
  if (m(this, ye))
    return !1;
  const o = { ...Pi(), ...m(this, Fe).reduce((i, r) => {
    const { defaultOptions: l } = r;
    return l && Object.assign(i, l), i;
  }, {}), ...this.props };
  return R(this, ye, o), R(this, ee, m(this, Fe).reduce((i, r) => {
    const { when: l, options: c } = r;
    return (!l || l(o)) && (i.push(r), c && Object.assign(o, typeof c == "function" ? c.call(this, o) : c)), i;
  }, [])), R(this, Nn, [this.options.i18n, ...this.plugins.map((i) => i.i18n)].filter(Boolean)), !0;
}, Vo = new WeakSet(), xc = function() {
  var rt, Se;
  const { plugins: n } = this;
  let o = m(this, ye);
  const i = {
    flex: /* @__PURE__ */ N("div", {
      style: "flex:auto"
    }),
    divider: /* @__PURE__ */ N("div", {
      style: "width:1px;margin:var(--space);background:var(--color-border);height:50%"
    })
  };
  n.forEach((T) => {
    var K;
    const O = (K = T.beforeLayout) == null ? void 0 : K.call(this, o);
    O && (o = { ...o, ...O }), Object.assign(i, T.footer);
  });
  const { defaultColWidth: r, minColWidth: l, maxColWidth: c } = o, _ = [], h = [], s = [], p = {}, f = [], a = [];
  let u = 0, b = 0, d = 0;
  o.cols.forEach((T) => {
    var In, Ht, Wt;
    if (T.hidden)
      return;
    const {
      name: O,
      type: K = "",
      fixed: Q = !1,
      flex: ue = !1,
      width: st = r,
      minWidth: Me = l,
      maxWidth: Dt = c,
      ...Wn
    } = T, L = {
      name: O,
      type: K,
      setting: {
        name: O,
        type: K,
        fixed: Q,
        flex: ue,
        width: st,
        minWidth: Me,
        maxWidth: Dt,
        ...Wn
      },
      flex: Q ? 0 : ue === !0 ? 1 : typeof ue == "number" ? ue : 0,
      left: 0,
      width: Ni(st, Me, Dt),
      realWidth: 0,
      visible: !0,
      index: f.length
    };
    n.forEach((Un) => {
      var ve, it;
      const dt = (ve = Un.colTypes) == null ? void 0 : ve[K];
      if (dt) {
        const It = typeof dt == "function" ? dt(L) : dt;
        It && Object.assign(L.setting, It);
      }
      (it = Un.onAddCol) == null || it.call(this, L);
    }), L.width = Ni((In = L.setting.width) != null ? In : L.width, (Ht = L.setting.minWidth) != null ? Ht : Me, (Wt = L.setting.maxWidth) != null ? Wt : Dt), L.realWidth = L.realWidth || L.width, Q === "left" ? (L.left = u, u += L.width, _.push(L)) : Q === "right" ? (L.left = b, b += L.width, h.push(L)) : (L.left = d, d += L.width, s.push(L)), L.flex && a.push(L), f.push(L), p[L.name] = L;
  });
  let v = o.width, g = 0;
  const k = u + d + b;
  if (typeof v == "function" && (v = v.call(this, k)), v === "auto")
    g = k;
  else if (v === "100%") {
    const { parent: T } = this;
    if (T)
      g = T.clientWidth;
    else {
      g = 0, R(this, ze, !0);
      return;
    }
  } else
    g = v != null ? v : 0;
  const { data: w, rowKey: E = "id", rowHeight: $ } = o, x = [], y = (T, O, K) => {
    var ue, st;
    const Q = { data: K != null ? K : { [E]: T }, id: T, index: x.length, top: 0 };
    if (K || (Q.lazy = !0), x.push(Q), ((ue = o.onAddRow) == null ? void 0 : ue.call(this, Q, O)) !== !1) {
      for (const Me of n)
        if (((st = Me.onAddRow) == null ? void 0 : st.call(this, Q, O)) === !1)
          return;
    }
  };
  if (typeof w == "number")
    for (let T = 0; T < w; T++)
      y(`${T}`, T);
  else
    Array.isArray(w) && w.forEach((T, O) => {
      var K;
      typeof T == "object" ? y(`${(K = T[E]) != null ? K : ""}`, O, T) : y(`${T != null ? T : ""}`, O);
    });
  let C = x;
  const A = {};
  if (o.onAddRows) {
    const T = o.onAddRows.call(this, C);
    T && (C = T);
  }
  for (const T of n) {
    const O = (rt = T.onAddRows) == null ? void 0 : rt.call(this, C);
    O && (C = O);
  }
  C.forEach((T, O) => {
    A[T.id] = T, T.index = O, T.top = T.index * $;
  });
  const { header: D, footer: J } = o, Y = D ? o.headerHeight || $ : 0, fe = J ? o.footerHeight || $ : 0;
  let Z = o.height, I = 0;
  const ne = C.length * $, He = Y + fe + ne;
  if (typeof Z == "function" && (Z = Z.call(this, He)), Z === "auto")
    I = He;
  else if (typeof Z == "object")
    I = Math.min(Z.max, Math.max(Z.min, He));
  else if (Z === "100%") {
    const { parent: T } = this;
    if (T)
      I = T.clientHeight;
    else {
      I = 0, R(this, ze, !0);
      return;
    }
  } else
    I = Z;
  const Ce = I - Y - fe, pt = g - u - b, Ee = {
    options: o,
    allRows: x,
    width: g,
    height: I,
    rows: C,
    rowsMap: A,
    rowHeight: $,
    rowsHeight: Ce,
    rowsHeightTotal: ne,
    header: D,
    footer: J,
    footerGenerators: i,
    headerHeight: Y,
    footerHeight: fe,
    colsMap: p,
    colsList: f,
    flexCols: a,
    colsInfo: {
      fixedLeftCols: _,
      fixedRightCols: h,
      scrollCols: s,
      fixedLeftWidth: u,
      scrollWidth: pt,
      scrollColsWidth: d,
      fixedRightWidth: b
    }
  }, We = (Se = o.onLayout) == null ? void 0 : Se.call(this, Ee);
  We && Object.assign(Ee, We), n.forEach((T) => {
    if (T.onLayout) {
      const O = T.onLayout.call(this, Ee);
      O && Object.assign(Ee, O);
    }
  }), R(this, he, Ee);
}, qo = new WeakSet(), Cc = function() {
  (X(this, Fo, $c).call(this) || !m(this, he)) && X(this, Vo, xc).call(this);
  const { layout: n } = this;
  if (!n)
    return;
  let { scrollLeft: o } = this.state;
  const { flexCols: i, colsInfo: { scrollCols: r, scrollWidth: l, scrollColsWidth: c } } = n;
  if (i.length) {
    const k = l - c;
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
  o = Math.min(Math.max(0, c - l), o);
  let _ = 0;
  r.forEach((k) => {
    k.left = _, _ += k.realWidth, k.visible = k.left + k.realWidth >= o && k.left <= o + l;
  });
  const { rowsHeightTotal: h, rowsHeight: s, rows: p, rowHeight: f } = n, a = Math.min(Math.max(0, h - s), this.state.scrollTop), u = Math.floor(a / f), b = a + s, d = Math.min(p.length, Math.ceil(b / f)), v = [], { rowDataGetter: g } = this.options;
  for (let k = u; k < d; k++) {
    const w = p[k];
    w.lazy && g && (w.data = g([w.id])[0], w.lazy = !1), v.push(w);
  }
  return n.visibleRows = v, n.scrollTop = a, n.scrollLeft = o, n;
}, S(br, "addPlugin", vc), S(br, "removePlugin", gc);
function Li(e, t) {
  t !== void 0 ? e.data.hoverCol = t : t = e.data.hoverCol;
  const { current: n } = e.ref;
  if (!n)
    return;
  const o = "dtable-col-hover";
  n.querySelectorAll(`.${o}`).forEach((i) => i.classList.remove(o)), typeof t == "string" && t.length && n.querySelectorAll(`.dtable-cell[data-col="${t}"]`).forEach((i) => i.classList.add(o));
}
const rh = {
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
      Li(this, o);
    },
    mouseleave() {
      Li(this, !1);
    }
  }
}, sh = Ot(rh, { buildIn: !0 });
function ih(e, t) {
  var l, c;
  typeof e == "boolean" && (t = e, e = void 0);
  const n = this.state.checkedRows, o = {}, { canRowCheckable: i } = this.options, r = (_, h) => {
    i && !i.call(this, _) || !!n[_] === h || (h ? n[_] = !0 : delete n[_], o[_] = h);
  };
  if (e === void 0 ? (t === void 0 && (t = !Ec.call(this)), (l = this.layout) == null || l.allRows.forEach(({ id: _ }) => {
    r(_, !!t);
  })) : (Array.isArray(e) || (e = [e]), e.forEach((_) => {
    r(_, t != null ? t : !n[_]);
  })), Object.keys(o).length) {
    const _ = (c = this.options.beforeCheckRows) == null ? void 0 : c.call(this, e, o, n);
    _ && Object.keys(_).forEach((h) => {
      _[h] ? n[h] = !0 : delete n[h];
    }), this.setState({ checkedRows: { ...n } }, () => {
      var h;
      (h = this.options.onCheckChange) == null || h.call(this, o);
    });
  }
  return o;
}
function lh(e) {
  var t;
  return (t = this.state.checkedRows[e]) != null ? t : !1;
}
function Ec() {
  var n, o;
  const e = this.getChecks().length, { canRowCheckable: t } = this.options;
  return t ? e === ((n = this.layout) == null ? void 0 : n.allRows.reduce((i, r) => i + (t.call(this, r.id) ? 1 : 0), 0)) : e === ((o = this.layout) == null ? void 0 : o.allRows.length);
}
function ah() {
  return Object.keys(this.state.checkedRows);
}
const ch = {
  name: "checkable",
  defaultOptions: { checkable: !0 },
  when: (e) => !!e.checkable,
  state() {
    return { checkedRows: {} };
  },
  methods: {
    toggleCheckRows: ih,
    isRowChecked: lh,
    isAllRowChecked: Ec,
    getChecks: ah
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
        /* @__PURE__ */ N("div", {
          style: { padding: "0 calc(3 * var(--space))", display: "flex", alignItems: "center" },
          onClick: () => this.toggleCheckRows()
        }, /* @__PURE__ */ N("input", {
          type: "checkbox",
          checked: e
        }))
      ];
    },
    checkedInfo(e, t) {
      const n = this.getChecks().length, o = [];
      return n && o.push(this.i18n("checkedCountInfo", { selected: n })), o.push(this.i18n("totalCountInfo", { total: t.allRows.length })), [
        /* @__PURE__ */ N("div", null, o.join(", "))
      ];
    }
  },
  onRenderCell(e, { row: t, col: n }) {
    var c, _;
    const { id: o } = t, { canRowCheckable: i } = this.options;
    if (i && !i.call(this, o))
      return e;
    const { checkbox: r } = n.setting;
    if (typeof r == "function" ? r.call(this, o) : r) {
      const h = this.isRowChecked(o), s = (_ = (c = this.options.checkboxRender) == null ? void 0 : c.call(this, h, o)) != null ? _ : /* @__PURE__ */ N("input", {
        type: "checkbox",
        checked: h
      });
      e.unshift(s), e.push({ className: "has-checkbox" });
    }
    return e;
  },
  onRenderHeaderCell(e, { row: t, col: n }) {
    var l, c;
    const { id: o } = t, { checkbox: i } = n.setting;
    if (typeof i == "function" ? i.call(this, o) : i) {
      const _ = this.isAllRowChecked(), h = (c = (l = this.options.checkboxRender) == null ? void 0 : l.call(this, _, o)) != null ? c : /* @__PURE__ */ N("input", {
        type: "checkbox",
        checked: _
      });
      e.unshift(h), e.push({ className: "has-checkbox" });
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
}, _h = Ot(ch);
var Sc = /* @__PURE__ */ ((e) => (e.unknown = "", e.collapsed = "collapsed", e.expanded = "expanded", e.hidden = "hidden", e.normal = "normal", e))(Sc || {});
function kr(e) {
  const t = this.data.nestedMap.get(e);
  if (!t || t.state !== "")
    return t != null ? t : { state: "normal", level: -1 };
  if (!t.parent && !t.children)
    return t.state = "normal", t;
  const n = this.state.collapsedRows, o = t.children && n && n[e];
  let i = !1, { parent: r } = t;
  for (; r; ) {
    const l = kr.call(this, r);
    if (l.state !== "expanded") {
      i = !0;
      break;
    }
    r = l.parent;
  }
  return t.state = i ? "hidden" : o ? "collapsed" : t.children ? "expanded" : "normal", t.level = t.parent ? kr.call(this, t.parent).level + 1 : 0, t;
}
function fh(e, t) {
  var i;
  let n = (i = this.state.collapsedRows) != null ? i : {};
  const { nestedMap: o } = this.data;
  if (e === "HEADER")
    if (t === void 0 && (t = !Mc.call(this)), t) {
      const r = o.entries();
      for (const [l, c] of r)
        c.state === "expanded" && (n[l] = !0);
    } else
      n = {};
  else {
    const r = Array.isArray(e) ? e : [e];
    t === void 0 && (t = !n[r[0]]), r.forEach((l) => {
      const c = o.get(l);
      t && (c == null ? void 0 : c.children) ? n[l] = !0 : delete n[l];
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
function Mc() {
  const e = this.data.nestedMap.values();
  for (const t of e)
    if (t.state === "expanded")
      return !1;
  return !0;
}
function Ac(e, t = 0, n, o = 0) {
  var i;
  n || (n = [...e.keys()]);
  for (const r of n) {
    const l = e.get(r);
    !l || (l.level === o && (l.order = t++), (i = l.children) != null && i.length && (t = Ac(e, t, l.children, o + 1)));
  }
  return t;
}
function Tc(e, t, n, o) {
  const i = e.getNestedRowInfo(t);
  return !i || i.state === "" || !i.children || i.children.forEach((r) => {
    o[r] = n, Tc(e, r, n, o);
  }), i;
}
function Rc(e, t, n, o, i) {
  var c;
  const r = e.getNestedRowInfo(t);
  if (!r || r.state === "")
    return;
  ((c = r.children) == null ? void 0 : c.every((_) => {
    const h = !!(o[_] !== void 0 ? o[_] : i[_]);
    return n === h;
  })) && (o[t] = n), r.parent && Rc(e, r.parent, n, o, i);
}
const uh = {
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
        const l = Tc(this, i, r, o);
        l != null && l.parent && Rc(this, l.parent, r, o, n);
      }), o;
    }
  },
  when: (e) => !!e.nested,
  data() {
    return { nestedMap: /* @__PURE__ */ new Map() };
  },
  methods: {
    toggleRow: fh,
    isAllCollapsed: Mc,
    getNestedRowInfo: kr
  },
  beforeLayout() {
    this.data.nestedMap.clear();
  },
  onAddRow(e) {
    var i, r, l, c, _;
    const { nestedMap: t } = this.data, n = (r = e.data) == null ? void 0 : r[(i = this.options.nestedParentKey) != null ? i : "parent"], o = (l = t.get(e.id)) != null ? l : {
      state: "",
      level: 0
    };
    if (o.parent = n, (_ = e.data) != null && _[(c = this.options.asParentKey) != null ? c : "asParent"] && (o.children = []), t.set(e.id, o), n) {
      let h = t.get(n);
      h || (h = {
        state: "",
        level: 0
      }, t.set(n, h)), h.children || (h.children = []), h.children.push(e.id);
    }
  },
  onAddRows(e) {
    return e = e.filter((t) => this.getNestedRowInfo(t.id).state !== "hidden"), Ac(this.data.nestedMap), e.sort((t, n) => {
      var l, c;
      const o = this.getNestedRowInfo(t.id), i = this.getNestedRowInfo(n.id), r = ((l = o.order) != null ? l : 0) - ((c = i.order) != null ? c : 0);
      return r === 0 ? t.index - n.index : r;
    }), e;
  },
  onRenderCell(e, { col: t, row: n }) {
    var c, _, h;
    const { id: o, data: i } = n, { nestedToggle: r } = t.setting, l = this.getNestedRowInfo(o);
    if (r && (l.children || l.parent) && e.unshift((_ = (c = this.options.onRenderNestedToggle) == null ? void 0 : c.call(this, l, o, t, i)) != null ? _ : /* @__PURE__ */ N("a", {
      role: "button",
      className: `dtable-nested-toggle state${l.children ? "" : " is-no-child"}`
    }, /* @__PURE__ */ N("span", {
      className: "toggle-icon"
    }))), l.level) {
      let { nestedIndent: s = r } = t.setting;
      s && (s === !0 && (s = (h = this.options.nestedIndent) != null ? h : 12), e.unshift(/* @__PURE__ */ N("div", {
        className: "dtable-nested-indent",
        style: { width: s * l.level + "px" }
      })));
    }
    return e;
  },
  onRenderHeaderCell(e, { row: t, col: n }) {
    var i, r;
    const { id: o } = t;
    return n.setting.nestedToggle && e.unshift((r = (i = this.options.onRenderNestedToggle) == null ? void 0 : i.call(this, void 0, o, n, void 0)) != null ? r : /* @__PURE__ */ N("a", {
      type: "button",
      className: "dtable-nested-toggle state"
    }, /* @__PURE__ */ N("span", {
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
}, hh = Ot(uh);
const ph = {
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
        const { linkTemplate: o = "", linkProps: i } = t.setting, r = pe(o, n.data);
        return e[0] = /* @__PURE__ */ N("a", {
          href: r,
          ...i
        }, e[0]), e;
      }
    },
    avatar: {
      onRenderCell(e, { col: t, row: n }) {
        const { data: o } = n, { avatarWithName: i, avatarClass: r = "size-xs circle", avatarKey: l = `${t.name}Avatar` } = t.setting, c = /* @__PURE__ */ N("div", {
          className: `avatar ${r} flex-none`
        }, /* @__PURE__ */ N("img", {
          src: o ? o[l] : ""
        }));
        return i ? e.unshift(c) : e[0] = c, e;
      }
    },
    circleProgress: {
      align: "center",
      onRenderCell(e, { col: t }) {
        const { circleSize: n = 24, circleBorderSize: o = 1, circleBgColor: i = "var(--color-border)", circleColor: r = "var(--color-success-500)" } = t.setting, l = (n - o) / 2, c = n / 2, _ = e[0];
        return e[0] = /* @__PURE__ */ N("svg", {
          width: n,
          height: n
        }, /* @__PURE__ */ N("circle", {
          cx: c,
          cy: c,
          r: l,
          "stroke-width": o,
          stroke: i,
          fill: "transparent"
        }), /* @__PURE__ */ N("circle", {
          cx: c,
          cy: c,
          r: l,
          "stroke-width": o,
          stroke: r,
          fill: "transparent",
          "stroke-linecap": "round",
          "stroke-dasharray": Math.PI * l * 2,
          "stroke-dashoffset": Math.PI * l * 2 * (100 - _) / 100,
          style: { transformOrigin: "center", transform: "rotate(-90deg)" }
        }), /* @__PURE__ */ N("text", {
          x: c,
          y: c + o,
          "dominant-baseline": "middle",
          "text-anchor": "middle",
          style: { fontSize: `${l}px` }
        }, Math.round(_))), e;
      }
    },
    actionButtons: {
      onRenderCell(e, { col: t, row: n }) {
        var c;
        const o = (c = n.data) == null ? void 0 : c[t.name];
        if (!o)
          return e;
        const { actionBtnTemplate: i = '<button type="button" data-action="{action}" title="{title}" class="{className}"><i class="icon icon-{icon}"></i></button>', actionBtnData: r = {}, actionBtnClass: l = "btn text-primary square size-sm ghost" } = t.setting;
        return [{
          html: o.map((_) => {
            typeof _ == "string" && (_ = { action: _ });
            const h = r[_.action];
            return h && (_ = { className: l, ...h, ..._ }), pe(i, _);
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
        return typeof o == "function" ? e[0] = i === "html" ? { html: o(r) } : o(r) : i === "datetime" ? e[0] = yr(r, o) : i === "html" ? e[0] = { html: pe(o, r) } : e[0] = pe(o, r), e;
      }
    }
  }
}, dh = Ot(ph, { buildIn: !0 }), vh = {
  name: "sort-type",
  onRenderHeaderCell(e, { col: t }) {
    const { sortType: n } = t.setting;
    if (n) {
      const { sortLink: o = this.options.sortLink, sortAttrs: i } = t.setting, r = n === !0 ? "none" : n;
      if (e.push(
        /* @__PURE__ */ N("div", {
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
}, gh = Ot(vh, { buildIn: !0 }), mh = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  colHover: sh,
  checkable: _h,
  NestedRowState: Sc,
  nested: hh,
  rich: dh,
  sortType: gh
}, Symbol.toStringTag, { value: "Module" }));
class Bt extends xe {
}
S(Bt, "NAME", "dtable"), S(Bt, "Component", br), S(Bt, "definePlugin", Ot), S(Bt, "removePlugin", gc), S(Bt, "plugins", mh);
var we, re;
class yh {
  constructor(t) {
    M(this, we, void 0);
    M(this, re, void 0);
    R(this, we, t), R(this, re, document.querySelector(t.getAttribute("data-target")) || document.querySelector(t.getAttribute("data-tab")) || document.querySelector(t.getAttribute("href")));
  }
  showTarget() {
    this.addActive(m(this, we).parentElement.parentElement, m(this, we).parentElement), this.addActive(m(this, re).parentElement, m(this, re)), m(this, re).dispatchEvent(new CustomEvent("show.zui3.tab"));
  }
  show() {
    R(this, re, m(this, we)), this.addActive(m(this, re).parentElement, m(this, re)), R(this, we, document.querySelector(`[href='#${m(this, re).getAttribute("id")}']`) || document.querySelector(`[data-tab='#${m(this, re).getAttribute("id")}']`) || document.querySelector(`[data-target='#${m(this, re).getAttribute("id")}']`)), this.addActive(m(this, we).parentElement.parentElement, m(this, we).parentElement);
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
we = new WeakMap(), re = new WeakMap();
document.addEventListener("click", function(e) {
  e.target instanceof HTMLElement && (e.target.dataset.toggle === "tab" || e.target.getAttribute("data-tab")) && (e.preventDefault(), new yh(e.target).showTarget());
});
export {
  bs as ActionMenu,
  ks as ActionMenuNested,
  Hs as Avatar,
  Ys as BtnGroup,
  se as ContextMenu,
  Bt as DTable,
  ae as Dropdown,
  xr as EventBus,
  $s as Menu,
  Xs as Nav,
  yh as NavTabs,
  mi as Pager,
  As as ProgressCircle,
  Ae as TIME_DAY,
  yi as Toolbar,
  Vc as addI18nMap,
  $h as browser,
  gi as calculateTimestamp,
  kh as convertBytes,
  ie as createDate,
  wh as formatBytes,
  yr as formatDate,
  Ah as formatDateSpan,
  pe as formatString,
  zc as getLangCode,
  Th as getTimeBeforeDesc,
  Dn as i18n,
  Mh as isDBY,
  rr as isObject,
  Hn as isSameDay,
  Wu as isSameMonth,
  xh as isSameWeek,
  vi as isSameYear,
  Ch as isToday,
  Sh as isTomorrow,
  Eh as isYesterday,
  cr as mergeDeep,
  ar as nativeEvents,
  Fc as setLangCode,
  v_ as store
};
