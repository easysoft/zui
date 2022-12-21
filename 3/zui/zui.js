var up = Object.defineProperty;
var _p = (e, t, n) => t in e ? up(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var N = (e, t, n) => (_p(e, typeof t != "symbol" ? t + "" : t, n), n), rs = (e, t, n) => {
  if (!t.has(e))
    throw TypeError("Cannot " + n);
};
var w = (e, t, n) => (rs(e, t, "read from private field"), n ? n.call(e) : t.get(e)), P = (e, t, n) => {
  if (t.has(e))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(e) : t.set(e, n);
}, W = (e, t, n, r) => (rs(e, t, "write to private field"), r ? r.call(e, n) : t.set(e, n), n);
var ne = (e, t, n) => (rs(e, t, "access private method"), n);
var Bi, re, Oc, Ac, lr, Oa, zo = {}, Mc = [], pp = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function jt(e, t) {
  for (var n in t)
    e[n] = t[n];
  return e;
}
function Tc(e) {
  var t = e.parentNode;
  t && t.removeChild(e);
}
function Ui(e, t, n) {
  var r, s, o, a = {};
  for (o in t)
    o == "key" ? r = t[o] : o == "ref" ? s = t[o] : a[o] = t[o];
  if (arguments.length > 2 && (a.children = arguments.length > 3 ? Bi.call(arguments, 2) : n), typeof e == "function" && e.defaultProps != null)
    for (o in e.defaultProps)
      a[o] === void 0 && (a[o] = e.defaultProps[o]);
  return ko(e, a, r, s, null);
}
function ko(e, t, n, r, s) {
  var o = { type: e, props: t, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: s == null ? ++Oc : s };
  return s == null && re.vnode != null && re.vnode(o), o;
}
function dp() {
  return { current: null };
}
function Fi(e) {
  return e.children;
}
function xo(e, t) {
  this.props = e, this.context = t;
}
function Lr(e, t) {
  if (t == null)
    return e.__ ? Lr(e.__, e.__.__k.indexOf(e) + 1) : null;
  for (var n; t < e.__k.length; t++)
    if ((n = e.__k[t]) != null && n.__e != null)
      return n.__e;
  return typeof e.type == "function" ? Lr(e) : null;
}
function Dc(e) {
  var t, n;
  if ((e = e.__) != null && e.__c != null) {
    for (e.__e = e.__c.base = null, t = 0; t < e.__k.length; t++)
      if ((n = e.__k[t]) != null && n.__e != null) {
        e.__e = e.__c.base = n.__e;
        break;
      }
    return Dc(e);
  }
}
function Aa(e) {
  (!e.__d && (e.__d = !0) && lr.push(e) && !Vo.__r++ || Oa !== re.debounceRendering) && ((Oa = re.debounceRendering) || setTimeout)(Vo);
}
function Vo() {
  for (var e; Vo.__r = lr.length; )
    e = lr.sort(function(t, n) {
      return t.__v.__b - n.__v.__b;
    }), lr = [], e.some(function(t) {
      var n, r, s, o, a, c;
      t.__d && (a = (o = (n = t).__v).__e, (c = n.__P) && (r = [], (s = jt({}, o)).__v = o.__v + 1, Os(c, o, s, n.__n, c.ownerSVGElement !== void 0, o.__h != null ? [a] : null, r, a == null ? Lr(o) : a, o.__h), Rc(r, o), o.__e != a && Dc(o)));
    });
}
function Nc(e, t, n, r, s, o, a, c, f, p) {
  var i, d, u, l, _, g, h, v = r && r.__k || Mc, m = v.length;
  for (n.__k = [], i = 0; i < t.length; i++)
    if ((l = n.__k[i] = (l = t[i]) == null || typeof l == "boolean" ? null : typeof l == "string" || typeof l == "number" || typeof l == "bigint" ? ko(null, l, null, null, l) : Array.isArray(l) ? ko(Fi, { children: l }, null, null, null) : l.__b > 0 ? ko(l.type, l.props, l.key, l.ref ? l.ref : null, l.__v) : l) != null) {
      if (l.__ = n, l.__b = n.__b + 1, (u = v[i]) === null || u && l.key == u.key && l.type === u.type)
        v[i] = void 0;
      else
        for (d = 0; d < m; d++) {
          if ((u = v[d]) && l.key == u.key && l.type === u.type) {
            v[d] = void 0;
            break;
          }
          u = null;
        }
      Os(e, l, u = u || zo, s, o, a, c, f, p), _ = l.__e, (d = l.ref) && u.ref != d && (h || (h = []), u.ref && h.push(u.ref, null, l), h.push(d, l.__c || _, l)), _ != null ? (g == null && (g = _), typeof l.type == "function" && l.__k === u.__k ? l.__d = f = Lc(l, f, e) : f = Pc(e, l, u, v, _, f), typeof n.type == "function" && (n.__d = f)) : f && u.__e == f && f.parentNode != e && (f = Lr(u));
    }
  for (n.__e = g, i = m; i--; )
    v[i] != null && Wc(v[i], v[i]);
  if (h)
    for (i = 0; i < h.length; i++)
      Hc(h[i], h[++i], h[++i]);
}
function Lc(e, t, n) {
  for (var r, s = e.__k, o = 0; s && o < s.length; o++)
    (r = s[o]) && (r.__ = e, t = typeof r.type == "function" ? Lc(r, t, n) : Pc(n, r, r, s, r.__e, t));
  return t;
}
function Pc(e, t, n, r, s, o) {
  var a, c, f;
  if (t.__d !== void 0)
    a = t.__d, t.__d = void 0;
  else if (n == null || s != o || s.parentNode == null)
    e:
      if (o == null || o.parentNode !== e)
        e.appendChild(s), a = null;
      else {
        for (c = o, f = 0; (c = c.nextSibling) && f < r.length; f += 2)
          if (c == s)
            break e;
        e.insertBefore(s, o), a = o;
      }
  return a !== void 0 ? a : s.nextSibling;
}
function hp(e, t, n, r, s) {
  var o;
  for (o in n)
    o === "children" || o === "key" || o in t || Yo(e, o, null, n[o], r);
  for (o in t)
    s && typeof t[o] != "function" || o === "children" || o === "key" || o === "value" || o === "checked" || n[o] === t[o] || Yo(e, o, t[o], n[o], r);
}
function Ma(e, t, n) {
  t[0] === "-" ? e.setProperty(t, n) : e[t] = n == null ? "" : typeof n != "number" || pp.test(t) ? n : n + "px";
}
function Yo(e, t, n, r, s) {
  var o;
  e:
    if (t === "style")
      if (typeof n == "string")
        e.style.cssText = n;
      else {
        if (typeof r == "string" && (e.style.cssText = r = ""), r)
          for (t in r)
            n && t in n || Ma(e.style, t, "");
        if (n)
          for (t in n)
            r && n[t] === r[t] || Ma(e.style, t, n[t]);
      }
    else if (t[0] === "o" && t[1] === "n")
      o = t !== (t = t.replace(/Capture$/, "")), t = t.toLowerCase() in e ? t.toLowerCase().slice(2) : t.slice(2), e.l || (e.l = {}), e.l[t + o] = n, n ? r || e.addEventListener(t, o ? Da : Ta, o) : e.removeEventListener(t, o ? Da : Ta, o);
    else if (t !== "dangerouslySetInnerHTML") {
      if (s)
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
function Ta(e) {
  this.l[e.type + !1](re.event ? re.event(e) : e);
}
function Da(e) {
  this.l[e.type + !0](re.event ? re.event(e) : e);
}
function Os(e, t, n, r, s, o, a, c, f) {
  var p, i, d, u, l, _, g, h, v, m, E, b, S, $, k, y = t.type;
  if (t.constructor !== void 0)
    return null;
  n.__h != null && (f = n.__h, c = t.__e = n.__e, t.__h = null, o = [c]), (p = re.__b) && p(t);
  try {
    e:
      if (typeof y == "function") {
        if (h = t.props, v = (p = y.contextType) && r[p.__c], m = p ? v ? v.props.value : p.__ : r, n.__c ? g = (i = t.__c = n.__c).__ = i.__E : ("prototype" in y && y.prototype.render ? t.__c = i = new y(h, m) : (t.__c = i = new xo(h, m), i.constructor = y, i.render = mp), v && v.sub(i), i.props = h, i.state || (i.state = {}), i.context = m, i.__n = r, d = i.__d = !0, i.__h = [], i._sb = []), i.__s == null && (i.__s = i.state), y.getDerivedStateFromProps != null && (i.__s == i.state && (i.__s = jt({}, i.__s)), jt(i.__s, y.getDerivedStateFromProps(h, i.__s))), u = i.props, l = i.state, d)
          y.getDerivedStateFromProps == null && i.componentWillMount != null && i.componentWillMount(), i.componentDidMount != null && i.__h.push(i.componentDidMount);
        else {
          if (y.getDerivedStateFromProps == null && h !== u && i.componentWillReceiveProps != null && i.componentWillReceiveProps(h, m), !i.__e && i.shouldComponentUpdate != null && i.shouldComponentUpdate(h, i.__s, m) === !1 || t.__v === n.__v) {
            for (i.props = h, i.state = i.__s, t.__v !== n.__v && (i.__d = !1), i.__v = t, t.__e = n.__e, t.__k = n.__k, t.__k.forEach(function(x) {
              x && (x.__ = t);
            }), E = 0; E < i._sb.length; E++)
              i.__h.push(i._sb[E]);
            i._sb = [], i.__h.length && a.push(i);
            break e;
          }
          i.componentWillUpdate != null && i.componentWillUpdate(h, i.__s, m), i.componentDidUpdate != null && i.__h.push(function() {
            i.componentDidUpdate(u, l, _);
          });
        }
        if (i.context = m, i.props = h, i.__v = t, i.__P = e, b = re.__r, S = 0, "prototype" in y && y.prototype.render) {
          for (i.state = i.__s, i.__d = !1, b && b(t), p = i.render(i.props, i.state, i.context), $ = 0; $ < i._sb.length; $++)
            i.__h.push(i._sb[$]);
          i._sb = [];
        } else
          do
            i.__d = !1, b && b(t), p = i.render(i.props, i.state, i.context), i.state = i.__s;
          while (i.__d && ++S < 25);
        i.state = i.__s, i.getChildContext != null && (r = jt(jt({}, r), i.getChildContext())), d || i.getSnapshotBeforeUpdate == null || (_ = i.getSnapshotBeforeUpdate(u, l)), k = p != null && p.type === Fi && p.key == null ? p.props.children : p, Nc(e, Array.isArray(k) ? k : [k], t, n, r, s, o, a, c, f), i.base = t.__e, t.__h = null, i.__h.length && a.push(i), g && (i.__E = i.__ = null), i.__e = !1;
      } else
        o == null && t.__v === n.__v ? (t.__k = n.__k, t.__e = n.__e) : t.__e = vp(n.__e, t, n, r, s, o, a, f);
    (p = re.diffed) && p(t);
  } catch (x) {
    t.__v = null, (f || o != null) && (t.__e = c, t.__h = !!f, o[o.indexOf(c)] = null), re.__e(x, t, n);
  }
}
function Rc(e, t) {
  re.__c && re.__c(t, e), e.some(function(n) {
    try {
      e = n.__h, n.__h = [], e.some(function(r) {
        r.call(n);
      });
    } catch (r) {
      re.__e(r, n.__v);
    }
  });
}
function vp(e, t, n, r, s, o, a, c) {
  var f, p, i, d = n.props, u = t.props, l = t.type, _ = 0;
  if (l === "svg" && (s = !0), o != null) {
    for (; _ < o.length; _++)
      if ((f = o[_]) && "setAttribute" in f == !!l && (l ? f.localName === l : f.nodeType === 3)) {
        e = f, o[_] = null;
        break;
      }
  }
  if (e == null) {
    if (l === null)
      return document.createTextNode(u);
    e = s ? document.createElementNS("http://www.w3.org/2000/svg", l) : document.createElement(l, u.is && u), o = null, c = !1;
  }
  if (l === null)
    d === u || c && e.data === u || (e.data = u);
  else {
    if (o = o && Bi.call(e.childNodes), p = (d = n.props || zo).dangerouslySetInnerHTML, i = u.dangerouslySetInnerHTML, !c) {
      if (o != null)
        for (d = {}, _ = 0; _ < e.attributes.length; _++)
          d[e.attributes[_].name] = e.attributes[_].value;
      (i || p) && (i && (p && i.__html == p.__html || i.__html === e.innerHTML) || (e.innerHTML = i && i.__html || ""));
    }
    if (hp(e, u, d, s, c), i)
      t.__k = [];
    else if (_ = t.props.children, Nc(e, Array.isArray(_) ? _ : [_], t, n, r, s && l !== "foreignObject", o, a, o ? o[0] : n.__k && Lr(n, 0), c), o != null)
      for (_ = o.length; _--; )
        o[_] != null && Tc(o[_]);
    c || ("value" in u && (_ = u.value) !== void 0 && (_ !== e.value || l === "progress" && !_ || l === "option" && _ !== d.value) && Yo(e, "value", _, d.value, !1), "checked" in u && (_ = u.checked) !== void 0 && _ !== e.checked && Yo(e, "checked", _, d.checked, !1));
  }
  return e;
}
function Hc(e, t, n) {
  try {
    typeof e == "function" ? e(t) : e.current = t;
  } catch (r) {
    re.__e(r, n);
  }
}
function Wc(e, t, n) {
  var r, s;
  if (re.unmount && re.unmount(e), (r = e.ref) && (r.current && r.current !== e.__e || Hc(r, null, t)), (r = e.__c) != null) {
    if (r.componentWillUnmount)
      try {
        r.componentWillUnmount();
      } catch (o) {
        re.__e(o, t);
      }
    r.base = r.__P = null, e.__c = void 0;
  }
  if (r = e.__k)
    for (s = 0; s < r.length; s++)
      r[s] && Wc(r[s], t, n || typeof e.type != "function");
  n || e.__e == null || Tc(e.__e), e.__ = e.__e = e.__d = void 0;
}
function mp(e, t, n) {
  return this.constructor(e, n);
}
function gp(e, t, n) {
  var r, s, o;
  re.__ && re.__(e, t), s = (r = typeof n == "function") ? null : n && n.__k || t.__k, o = [], Os(t, e = (!r && n || t).__k = Ui(Fi, null, [e]), s || zo, zo, t.ownerSVGElement !== void 0, !r && n ? [n] : s ? null : t.firstChild ? Bi.call(t.childNodes) : null, o, !r && n ? n : s ? s.__e : t.firstChild, r), Rc(o, e);
}
Bi = Mc.slice, re = { __e: function(e, t, n, r) {
  for (var s, o, a; t = t.__; )
    if ((s = t.__c) && !s.__)
      try {
        if ((o = s.constructor) && o.getDerivedStateFromError != null && (s.setState(o.getDerivedStateFromError(e)), a = s.__d), s.componentDidCatch != null && (s.componentDidCatch(e, r || {}), a = s.__d), a)
          return s.__E = s;
      } catch (c) {
        e = c;
      }
  throw e;
} }, Oc = 0, Ac = function(e) {
  return e != null && e.constructor === void 0;
}, xo.prototype.setState = function(e, t) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = jt({}, this.state), typeof e == "function" && (e = e(jt({}, n), this.props)), e && jt(n, e), e != null && this.__v && (t && this._sb.push(t), Aa(this));
}, xo.prototype.forceUpdate = function(e) {
  this.__v && (this.__e = !0, e && this.__h.push(e), Aa(this));
}, xo.prototype.render = Fi, lr = [], Vo.__r = 0;
var vt;
class yp {
  constructor(t = "") {
    P(this, vt, void 0);
    typeof t == "object" ? W(this, vt, t) : W(this, vt, document.appendChild(document.createComment(t)));
  }
  on(t, n, r) {
    w(this, vt).addEventListener(t, n, r);
  }
  once(t, n, r) {
    w(this, vt).addEventListener(t, n, { once: !0, ...r });
  }
  off(t, n, r) {
    w(this, vt).removeEventListener(t, n, r);
  }
  emit(t) {
    return w(this, vt).dispatchEvent(t), t;
  }
}
vt = new WeakMap();
const ls = /* @__PURE__ */ new Set([
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
class As extends yp {
  on(t, n, r) {
    super.on(t, n, r);
  }
  off(t, n, r) {
    super.off(t, n, r);
  }
  once(t, n, r) {
    super.once(t, n, r);
  }
  emit(t, n) {
    return typeof t == "string" && (ls.has(t) ? (t = new Event(t), Object.assign(t, { detail: n })) : t = new CustomEvent(t, { detail: n })), super.emit(As.createEvent(t, n));
  }
  static createEvent(t, n) {
    return typeof t == "string" && (ls.has(t) ? (t = new Event(t), Object.assign(t, { detail: n })) : t = new CustomEvent(t, { detail: n })), t;
  }
}
var mt, Qr, an, ar;
class Na extends As {
  constructor(n = "", r) {
    super(n);
    P(this, an);
    P(this, mt, /* @__PURE__ */ new Map());
    P(this, Qr, void 0);
    W(this, Qr, r == null ? void 0 : r.customEventSuffix);
  }
  on(n, r, s) {
    n = ne(this, an, ar).call(this, n), super.on(n, r, s), w(this, mt).set(r, [n, s]);
  }
  off(n, r, s) {
    n = ne(this, an, ar).call(this, n), super.off(n, r, s), w(this, mt).delete(r);
  }
  once(n, r, s) {
    n = ne(this, an, ar).call(this, n);
    const o = (a) => {
      r(a), w(this, mt).delete(o);
    };
    super.once(n, o, s), w(this, mt).set(o, [n, s]);
  }
  emit(n, r) {
    return typeof n == "string" && (n = ne(this, an, ar).call(this, n)), super.emit(n, r);
  }
  offAll() {
    Array.from(w(this, mt).entries()).forEach(([n, [r, s]]) => {
      super.off(r, n, s);
    }), w(this, mt).clear();
  }
}
mt = new WeakMap(), Qr = new WeakMap(), an = new WeakSet(), ar = function(n) {
  const r = w(this, Qr);
  return ls.has(n) || typeof r != "string" || n.endsWith(r) ? n : `${n}${r}`;
};
function bp(e, t) {
  if (e == null)
    return [e, void 0];
  typeof t == "string" && (t = t.split("."));
  const n = t.join(".");
  let r = e;
  const s = [r];
  for (; typeof r == "object" && r !== null && t.length; ) {
    let o = t.shift(), a;
    const c = o.indexOf("[");
    if (c > 0 && c < o.length - 1 && o.endsWith("]") && (a = o.substring(c + 1, o.length - 1), o = o.substring(0, c)), r = r[o], s.push(r), a !== void 0)
      if (typeof r == "object" && r !== null)
        r instanceof Map ? r = r.get(a) : r = r[a], s.push(r);
      else
        throw new Error(`Cannot access property "${o}[${a}]", the full path is "${n}".`);
  }
  if (t.length)
    throw new Error(`Cannot access property with rest path "${t.join(".")}", the full path is "${n}".`);
  return s;
}
function wp(e, t, n) {
  const r = bp(e, t), s = r[r.length - 1];
  return s === void 0 ? n : s;
}
function os(e) {
  return !!e && typeof e == "object" && !Array.isArray(e);
}
function cs(e, ...t) {
  if (!t.length)
    return e;
  const n = t.shift();
  if (os(e) && os(n))
    for (const r in n)
      os(n[r]) ? (e[r] || Object.assign(e, { [r]: {} }), cs(e[r], n[r])) : Object.assign(e, { [r]: n[r] });
  return cs(e, ...t);
}
function Ee(e, ...t) {
  var n;
  if (t.length === 0)
    return e;
  if (t.length === 1 && typeof t[0] == "object" && t[0]) {
    const r = t[0];
    return Object.keys(r).forEach((s) => {
      var a;
      const o = (a = r[s]) != null ? a : 0;
      e = e.replace(new RegExp(`\\{${s}\\}`, "g"), `${o}`);
    }), e;
  }
  for (let r = 0; r < t.length; r++) {
    const s = (n = t[r]) != null ? n : "";
    e = e.replace(new RegExp(`\\{${r}\\}`, "g"), `${s}`);
  }
  return e;
}
var Ms = /* @__PURE__ */ ((e) => (e[e.B = 1] = "B", e[e.KB = 1024] = "KB", e[e.MB = 1048576] = "MB", e[e.GB = 1073741824] = "GB", e[e.TB = 1099511627776] = "TB", e))(Ms || {});
function $y(e, t = 2, n = "") {
  return Number.isNaN(e) ? "?KB" : (n || (e < 1024 ? n = "B" : e < 1048576 ? n = "KB" : e < 1073741824 ? n = "MB" : e < 1099511627776 ? n = "GB" : n = "TB"), (e / Ms[n]).toFixed(t) + n);
}
const ky = (e) => {
  const t = /^[0-9]*(B|KB|MB|GB|TB)$/;
  e = e.toUpperCase();
  const n = e.match(t);
  if (!n)
    return 0;
  const r = n[1];
  return e = e.replace(r, ""), Number.parseInt(e, 10) * Ms[r];
};
var Sc, Cc;
let Ts = (Cc = (Sc = document.documentElement.getAttribute("lang")) == null ? void 0 : Sc.toLowerCase()) != null ? Cc : "zh_cn", Nt;
function $p() {
  return Ts;
}
function kp(e) {
  Ts = e.toLowerCase();
}
function xp(e, t) {
  Nt || (Nt = {}), typeof e == "string" && (e = { [e]: t != null ? t : {} }), cs(Nt, e);
}
function _o(e, t, n, r, s, o) {
  Array.isArray(e) ? Nt && e.unshift(Nt) : e = Nt ? [Nt, e] : [e], typeof n == "string" && (o = s, s = r, r = n, n = void 0);
  const a = s || Ts;
  let c;
  for (const f of e) {
    if (!f)
      continue;
    const p = f[a];
    if (!p)
      continue;
    const i = o && f === Nt ? `${o}.${t}` : t;
    if (c = wp(p, i), c !== void 0)
      break;
  }
  return c === void 0 ? r : n ? Ee(c, ...Array.isArray(n) ? n : [n]) : c;
}
_o.addLang = xp;
_o.getCode = $p;
_o.setCode = kp;
function Ep(e) {
  return Object.fromEntries(Object.entries(e).map(([t, n]) => {
    if (typeof n == "string")
      try {
        n = JSON.parse(n);
      } catch {
      }
    return [t, n];
  }));
}
var gt, kn, $e;
class at {
  constructor(t, n) {
    P(this, gt, void 0);
    P(this, kn, void 0);
    P(this, $e, void 0);
    t = typeof t == "string" ? document.querySelector(t) : t, this.constructor.EVENTS && W(this, $e, new Na(t, { customEventSuffix: `.${this.constructor.KEY}` })), W(this, gt, { ...this.constructor.DEFAULT, ...t instanceof HTMLElement ? Ep(t.dataset) : null, ...n }), this.constructor.all.set(t, this), W(this, kn, t), this.init(), requestAnimationFrame(() => {
      var r;
      this.afterInit(), (r = w(this, $e)) == null || r.emit("inited", this);
    });
  }
  get options() {
    return w(this, gt);
  }
  get element() {
    return w(this, kn);
  }
  get events() {
    return w(this, $e);
  }
  init() {
  }
  afterInit() {
  }
  setOptions(t) {
    return t && Object.assign(w(this, gt), t), w(this, gt);
  }
  render(t) {
    this.setOptions(t);
  }
  destroy() {
    this.constructor.all.delete(w(this, kn)), w(this, $e) && (w(this, $e).emit("destroyed", this), w(this, $e).offAll());
  }
  on(t, n, r) {
    var s;
    (s = w(this, $e)) == null || s.on(t, n, r);
  }
  once(t, n, r) {
    var s;
    (s = w(this, $e)) == null || s.once(t, n, r);
  }
  off(t, n, r) {
    var s;
    (s = w(this, $e)) == null || s.off(t, n, r);
  }
  emit(t, n) {
    var a;
    let r = Na.createEvent(t, n);
    const s = `on${r.type.replace(`.${this.constructor.KEY}`, "")}`, o = w(this, gt)[s];
    return o && o(r) === !1 && (r.preventDefault(), r.stopPropagation()), r = (a = w(this, $e)) == null ? void 0 : a.emit(r), r;
  }
  i18n(t, n, r) {
    var s;
    return (s = _o(w(this, gt).i18n, t, n, r, this.options.lang, this.constructor.NAME)) != null ? s : `{i18n:${t}}`;
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
gt = new WeakMap(), kn = new WeakMap(), $e = new WeakMap(), N(at, "EVENTS", !1), N(at, "DEFAULT", {}), N(at, "allComponents", /* @__PURE__ */ new Map());
class Je extends at {
  constructor() {
    super(...arguments);
    N(this, "ref", dp());
  }
  get $() {
    return this.ref.current;
  }
  init() {
    requestAnimationFrame(() => this.render());
  }
  render(n) {
    const r = this.constructor.Component;
    gp(/* @__PURE__ */ Ui(r, {
      ref: this.ref,
      ...this.setOptions(n)
    }), this.element);
  }
}
var Ds, ce, jc, Ic, cr, La, Bc = {}, Uc = [], Sp = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function It(e, t) {
  for (var n in t)
    e[n] = t[n];
  return e;
}
function Fc(e) {
  var t = e.parentNode;
  t && t.removeChild(e);
}
function ye(e, t, n) {
  var r, s, o, a = {};
  for (o in t)
    o == "key" ? r = t[o] : o == "ref" ? s = t[o] : a[o] = t[o];
  if (arguments.length > 2 && (a.children = arguments.length > 3 ? Ds.call(arguments, 2) : n), typeof e == "function" && e.defaultProps != null)
    for (o in e.defaultProps)
      a[o] === void 0 && (a[o] = e.defaultProps[o]);
  return Eo(e, a, r, s, null);
}
function Eo(e, t, n, r, s) {
  var o = { type: e, props: t, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: s == null ? ++jc : s };
  return s == null && ce.vnode != null && ce.vnode(o), o;
}
function Cp() {
  return { current: null };
}
function Ns(e) {
  return e.children;
}
function fr(e, t) {
  this.props = e, this.context = t;
}
function Pr(e, t) {
  if (t == null)
    return e.__ ? Pr(e.__, e.__.__k.indexOf(e) + 1) : null;
  for (var n; t < e.__k.length; t++)
    if ((n = e.__k[t]) != null && n.__e != null)
      return n.__e;
  return typeof e.type == "function" ? Pr(e) : null;
}
function zc(e) {
  var t, n;
  if ((e = e.__) != null && e.__c != null) {
    for (e.__e = e.__c.base = null, t = 0; t < e.__k.length; t++)
      if ((n = e.__k[t]) != null && n.__e != null) {
        e.__e = e.__c.base = n.__e;
        break;
      }
    return zc(e);
  }
}
function Pa(e) {
  (!e.__d && (e.__d = !0) && cr.push(e) && !qo.__r++ || La !== ce.debounceRendering) && ((La = ce.debounceRendering) || setTimeout)(qo);
}
function qo() {
  for (var e; qo.__r = cr.length; )
    e = cr.sort(function(t, n) {
      return t.__v.__b - n.__v.__b;
    }), cr = [], e.some(function(t) {
      var n, r, s, o, a, c;
      t.__d && (a = (o = (n = t).__v).__e, (c = n.__P) && (r = [], (s = It({}, o)).__v = o.__v + 1, Gc(c, o, s, n.__n, c.ownerSVGElement !== void 0, o.__h != null ? [a] : null, r, a == null ? Pr(o) : a, o.__h), Ap(r, o), o.__e != a && zc(o)));
    });
}
function Vc(e, t, n, r, s, o, a, c, f, p) {
  var i, d, u, l, _, g, h, v = r && r.__k || Uc, m = v.length;
  for (n.__k = [], i = 0; i < t.length; i++)
    if ((l = n.__k[i] = (l = t[i]) == null || typeof l == "boolean" ? null : typeof l == "string" || typeof l == "number" || typeof l == "bigint" ? Eo(null, l, null, null, l) : Array.isArray(l) ? Eo(Ns, { children: l }, null, null, null) : l.__b > 0 ? Eo(l.type, l.props, l.key, l.ref ? l.ref : null, l.__v) : l) != null) {
      if (l.__ = n, l.__b = n.__b + 1, (u = v[i]) === null || u && l.key == u.key && l.type === u.type)
        v[i] = void 0;
      else
        for (d = 0; d < m; d++) {
          if ((u = v[d]) && l.key == u.key && l.type === u.type) {
            v[d] = void 0;
            break;
          }
          u = null;
        }
      Gc(e, l, u = u || Bc, s, o, a, c, f, p), _ = l.__e, (d = l.ref) && u.ref != d && (h || (h = []), u.ref && h.push(u.ref, null, l), h.push(d, l.__c || _, l)), _ != null ? (g == null && (g = _), typeof l.type == "function" && l.__k === u.__k ? l.__d = f = Yc(l, f, e) : f = qc(e, l, u, v, _, f), typeof n.type == "function" && (n.__d = f)) : f && u.__e == f && f.parentNode != e && (f = Pr(u));
    }
  for (n.__e = g, i = m; i--; )
    v[i] != null && Kc(v[i], v[i]);
  if (h)
    for (i = 0; i < h.length; i++)
      Xc(h[i], h[++i], h[++i]);
}
function Yc(e, t, n) {
  for (var r, s = e.__k, o = 0; s && o < s.length; o++)
    (r = s[o]) && (r.__ = e, t = typeof r.type == "function" ? Yc(r, t, n) : qc(n, r, r, s, r.__e, t));
  return t;
}
function qc(e, t, n, r, s, o) {
  var a, c, f;
  if (t.__d !== void 0)
    a = t.__d, t.__d = void 0;
  else if (n == null || s != o || s.parentNode == null)
    e:
      if (o == null || o.parentNode !== e)
        e.appendChild(s), a = null;
      else {
        for (c = o, f = 0; (c = c.nextSibling) && f < r.length; f += 2)
          if (c == s)
            break e;
        e.insertBefore(s, o), a = o;
      }
  return a !== void 0 ? a : s.nextSibling;
}
function Op(e, t, n, r, s) {
  var o;
  for (o in n)
    o === "children" || o === "key" || o in t || Go(e, o, null, n[o], r);
  for (o in t)
    s && typeof t[o] != "function" || o === "children" || o === "key" || o === "value" || o === "checked" || n[o] === t[o] || Go(e, o, t[o], n[o], r);
}
function Ra(e, t, n) {
  t[0] === "-" ? e.setProperty(t, n) : e[t] = n == null ? "" : typeof n != "number" || Sp.test(t) ? n : n + "px";
}
function Go(e, t, n, r, s) {
  var o;
  e:
    if (t === "style")
      if (typeof n == "string")
        e.style.cssText = n;
      else {
        if (typeof r == "string" && (e.style.cssText = r = ""), r)
          for (t in r)
            n && t in n || Ra(e.style, t, "");
        if (n)
          for (t in n)
            r && n[t] === r[t] || Ra(e.style, t, n[t]);
      }
    else if (t[0] === "o" && t[1] === "n")
      o = t !== (t = t.replace(/Capture$/, "")), t = t.toLowerCase() in e ? t.toLowerCase().slice(2) : t.slice(2), e.l || (e.l = {}), e.l[t + o] = n, n ? r || e.addEventListener(t, o ? Wa : Ha, o) : e.removeEventListener(t, o ? Wa : Ha, o);
    else if (t !== "dangerouslySetInnerHTML") {
      if (s)
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
function Ha(e) {
  this.l[e.type + !1](ce.event ? ce.event(e) : e);
}
function Wa(e) {
  this.l[e.type + !0](ce.event ? ce.event(e) : e);
}
function Gc(e, t, n, r, s, o, a, c, f) {
  var p, i, d, u, l, _, g, h, v, m, E, b, S, $, k, y = t.type;
  if (t.constructor !== void 0)
    return null;
  n.__h != null && (f = n.__h, c = t.__e = n.__e, t.__h = null, o = [c]), (p = ce.__b) && p(t);
  try {
    e:
      if (typeof y == "function") {
        if (h = t.props, v = (p = y.contextType) && r[p.__c], m = p ? v ? v.props.value : p.__ : r, n.__c ? g = (i = t.__c = n.__c).__ = i.__E : ("prototype" in y && y.prototype.render ? t.__c = i = new y(h, m) : (t.__c = i = new fr(h, m), i.constructor = y, i.render = Tp), v && v.sub(i), i.props = h, i.state || (i.state = {}), i.context = m, i.__n = r, d = i.__d = !0, i.__h = [], i._sb = []), i.__s == null && (i.__s = i.state), y.getDerivedStateFromProps != null && (i.__s == i.state && (i.__s = It({}, i.__s)), It(i.__s, y.getDerivedStateFromProps(h, i.__s))), u = i.props, l = i.state, d)
          y.getDerivedStateFromProps == null && i.componentWillMount != null && i.componentWillMount(), i.componentDidMount != null && i.__h.push(i.componentDidMount);
        else {
          if (y.getDerivedStateFromProps == null && h !== u && i.componentWillReceiveProps != null && i.componentWillReceiveProps(h, m), !i.__e && i.shouldComponentUpdate != null && i.shouldComponentUpdate(h, i.__s, m) === !1 || t.__v === n.__v) {
            for (i.props = h, i.state = i.__s, t.__v !== n.__v && (i.__d = !1), i.__v = t, t.__e = n.__e, t.__k = n.__k, t.__k.forEach(function(x) {
              x && (x.__ = t);
            }), E = 0; E < i._sb.length; E++)
              i.__h.push(i._sb[E]);
            i._sb = [], i.__h.length && a.push(i);
            break e;
          }
          i.componentWillUpdate != null && i.componentWillUpdate(h, i.__s, m), i.componentDidUpdate != null && i.__h.push(function() {
            i.componentDidUpdate(u, l, _);
          });
        }
        if (i.context = m, i.props = h, i.__v = t, i.__P = e, b = ce.__r, S = 0, "prototype" in y && y.prototype.render) {
          for (i.state = i.__s, i.__d = !1, b && b(t), p = i.render(i.props, i.state, i.context), $ = 0; $ < i._sb.length; $++)
            i.__h.push(i._sb[$]);
          i._sb = [];
        } else
          do
            i.__d = !1, b && b(t), p = i.render(i.props, i.state, i.context), i.state = i.__s;
          while (i.__d && ++S < 25);
        i.state = i.__s, i.getChildContext != null && (r = It(It({}, r), i.getChildContext())), d || i.getSnapshotBeforeUpdate == null || (_ = i.getSnapshotBeforeUpdate(u, l)), k = p != null && p.type === Ns && p.key == null ? p.props.children : p, Vc(e, Array.isArray(k) ? k : [k], t, n, r, s, o, a, c, f), i.base = t.__e, t.__h = null, i.__h.length && a.push(i), g && (i.__E = i.__ = null), i.__e = !1;
      } else
        o == null && t.__v === n.__v ? (t.__k = n.__k, t.__e = n.__e) : t.__e = Mp(n.__e, t, n, r, s, o, a, f);
    (p = ce.diffed) && p(t);
  } catch (x) {
    t.__v = null, (f || o != null) && (t.__e = c, t.__h = !!f, o[o.indexOf(c)] = null), ce.__e(x, t, n);
  }
}
function Ap(e, t) {
  ce.__c && ce.__c(t, e), e.some(function(n) {
    try {
      e = n.__h, n.__h = [], e.some(function(r) {
        r.call(n);
      });
    } catch (r) {
      ce.__e(r, n.__v);
    }
  });
}
function Mp(e, t, n, r, s, o, a, c) {
  var f, p, i, d = n.props, u = t.props, l = t.type, _ = 0;
  if (l === "svg" && (s = !0), o != null) {
    for (; _ < o.length; _++)
      if ((f = o[_]) && "setAttribute" in f == !!l && (l ? f.localName === l : f.nodeType === 3)) {
        e = f, o[_] = null;
        break;
      }
  }
  if (e == null) {
    if (l === null)
      return document.createTextNode(u);
    e = s ? document.createElementNS("http://www.w3.org/2000/svg", l) : document.createElement(l, u.is && u), o = null, c = !1;
  }
  if (l === null)
    d === u || c && e.data === u || (e.data = u);
  else {
    if (o = o && Ds.call(e.childNodes), p = (d = n.props || Bc).dangerouslySetInnerHTML, i = u.dangerouslySetInnerHTML, !c) {
      if (o != null)
        for (d = {}, _ = 0; _ < e.attributes.length; _++)
          d[e.attributes[_].name] = e.attributes[_].value;
      (i || p) && (i && (p && i.__html == p.__html || i.__html === e.innerHTML) || (e.innerHTML = i && i.__html || ""));
    }
    if (Op(e, u, d, s, c), i)
      t.__k = [];
    else if (_ = t.props.children, Vc(e, Array.isArray(_) ? _ : [_], t, n, r, s && l !== "foreignObject", o, a, o ? o[0] : n.__k && Pr(n, 0), c), o != null)
      for (_ = o.length; _--; )
        o[_] != null && Fc(o[_]);
    c || ("value" in u && (_ = u.value) !== void 0 && (_ !== e.value || l === "progress" && !_ || l === "option" && _ !== d.value) && Go(e, "value", _, d.value, !1), "checked" in u && (_ = u.checked) !== void 0 && _ !== e.checked && Go(e, "checked", _, d.checked, !1));
  }
  return e;
}
function Xc(e, t, n) {
  try {
    typeof e == "function" ? e(t) : e.current = t;
  } catch (r) {
    ce.__e(r, n);
  }
}
function Kc(e, t, n) {
  var r, s;
  if (ce.unmount && ce.unmount(e), (r = e.ref) && (r.current && r.current !== e.__e || Xc(r, null, t)), (r = e.__c) != null) {
    if (r.componentWillUnmount)
      try {
        r.componentWillUnmount();
      } catch (o) {
        ce.__e(o, t);
      }
    r.base = r.__P = null, e.__c = void 0;
  }
  if (r = e.__k)
    for (s = 0; s < r.length; s++)
      r[s] && Kc(r[s], t, n || typeof e.type != "function");
  n || e.__e == null || Fc(e.__e), e.__ = e.__e = e.__d = void 0;
}
function Tp(e, t, n) {
  return this.constructor(e, n);
}
Ds = Uc.slice, ce = { __e: function(e, t, n, r) {
  for (var s, o, a; t = t.__; )
    if ((s = t.__c) && !s.__)
      try {
        if ((o = s.constructor) && o.getDerivedStateFromError != null && (s.setState(o.getDerivedStateFromError(e)), a = s.__d), s.componentDidCatch != null && (s.componentDidCatch(e, r || {}), a = s.__d), a)
          return s.__E = s;
      } catch (c) {
        e = c;
      }
  throw e;
} }, jc = 0, Ic = function(e) {
  return e != null && e.constructor === void 0;
}, fr.prototype.setState = function(e, t) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = It({}, this.state), typeof e == "function" && (e = e(It({}, n), this.props)), e && It(n, e), e != null && this.__v && (t && this._sb.push(t), Pa(this));
}, fr.prototype.forceUpdate = function(e) {
  this.__v && (this.__e = !0, e && this.__h.push(e), Pa(this));
}, fr.prototype.render = Ns, cr = [], qo.__r = 0;
function zi(...e) {
  const t = [], n = /* @__PURE__ */ new Map(), r = (s, o) => {
    if (Array.isArray(s) && (o = s[1], s = s[0]), !s.length)
      return;
    const a = n.get(s);
    typeof a == "number" ? t[a][1] = !!o : (n.set(s, t.length), t.push([s, !!o]));
  };
  return e.forEach((s) => {
    typeof s == "function" && (s = s()), Array.isArray(s) ? zi(...s).forEach(r) : s && typeof s == "object" ? Object.entries(s).forEach(r) : typeof s == "string" && s.split(" ").forEach((o) => r(o, !0));
  }), t.sort((s, o) => (n.get(s[0]) || 0) - (n.get(o[0]) || 0));
}
const U = (...e) => zi(...e).reduce((t, [n, r]) => (r && t.push(n), t), []).join(" ");
function Dp({
  component: e = "div",
  className: t,
  children: n,
  style: r,
  attrs: s
}) {
  return ye(e, {
    className: U(t),
    style: r,
    ...s
  }, n);
}
function Jc({
  component: e = "a",
  className: t,
  children: n,
  attrs: r,
  url: s,
  disabled: o,
  active: a,
  icon: c,
  text: f,
  target: p,
  trailingIcon: i,
  hint: d,
  style: u,
  onClick: l
}) {
  const _ = [
    typeof c == "string" ? /* @__PURE__ */ ye("i", {
      class: `icon ${c}`
    }) : c,
    /* @__PURE__ */ ye("span", {
      className: "text"
    }, f),
    typeof n == "function" ? n() : n,
    typeof i == "string" ? /* @__PURE__ */ ye("i", {
      class: `icon ${i}`
    }) : i
  ];
  return ye(e, {
    className: U(t, { disabled: o, active: a }),
    title: d,
    [e === "a" ? "href" : "data-url"]: s,
    [e === "a" ? "target" : "data-target"]: p,
    style: u,
    onClick: l,
    ...r
  }, ..._);
}
function Np({
  component: e = "div",
  className: t,
  text: n,
  attrs: r,
  children: s,
  style: o,
  onClick: a
}) {
  return ye(e, {
    className: U(t),
    style: o,
    onClick: a,
    ...r
  }, n, typeof s == "function" ? s() : s);
}
function Lp({
  component: e = "div",
  className: t,
  style: n,
  space: r,
  flex: s,
  attrs: o,
  onClick: a,
  children: c
}) {
  return ye(e, {
    className: U(t),
    style: { width: r, height: r, flex: s, ...n },
    onClick: a,
    ...o
  }, c);
}
function Pp(e) {
  const {
    tag: t,
    className: n,
    style: r,
    renders: s,
    generateArgs: o = [],
    generatorThis: a,
    generators: c,
    onGenerate: f,
    onRenderItem: p,
    ...i
  } = e, d = [n], u = { ...r }, l = [], _ = [];
  return s.forEach((g) => {
    var v;
    const h = [];
    typeof g == "string" && c && c[g] && (g = c[g]), typeof g == "function" ? f ? h.push(...f.call(a, g, l, ...o)) : h.push(...(v = g.call(a, l, ...o)) != null ? v : []) : h.push(g), h.forEach((m) => {
      var E;
      m != null && (typeof m == "object" && !Ac(m) && ("html" in m || "__html" in m || "className" in m || "style" in m || "attrs" in m || "children" in m) ? m.html ? l.push(
        /* @__PURE__ */ Ui("div", {
          className: U(m.className),
          style: m.style,
          dangerouslySetInnerHTML: { __html: m.html },
          ...(E = m.attrs) != null ? E : {}
        })
      ) : m.__html ? _.push(m.__html) : (m.style && Object.assign(u, m.style), m.className && d.push(m.className), m.children && l.push(m.children), m.attrs && Object.assign(i, m.attrs)) : l.push(m));
    });
  }), _.length && Object.assign(i, { dangerouslySetInnerHTML: { __html: _ } }), [{
    className: U(d),
    style: u,
    ...i
  }, l];
}
function fs({
  tag: e = "div",
  ...t
}) {
  const [n, r] = Pp(t);
  return Ui(e, n, ...r);
}
function Rp(e) {
  return /* @__PURE__ */ ye(fs, {
    ...e
  });
}
function Zc({
  component: e = "div",
  className: t,
  children: n,
  style: r,
  attrs: s
}) {
  return ye(e, {
    className: U(t),
    style: r,
    ...s
  }, n);
}
const Si = class extends fr {
  constructor() {
    super(...arguments);
    N(this, "ref", Cp());
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
    var n, r;
    (r = (n = this.props).beforeDestroy) == null || r.call(n, { menu: this });
  }
  afterRender(n) {
    var r, s;
    (s = (r = this.props).afterRender) == null || s.call(r, { menu: this, firstRender: n });
  }
  handleItemClick(n, r, s, o) {
    s && s.call(o.target, o);
    const { onClickItem: a } = this.props;
    a && a({ menu: this, item: n, index: r, event: o });
  }
  beforeRender() {
    var s;
    const n = { ...this.props };
    typeof n.items == "function" && (n.items = n.items(this));
    const r = (s = n.beforeRender) == null ? void 0 : s.call(n, { menu: this, options: n });
    return r && Object.assign(n, r), n;
  }
  getItemRenderProps(n, r, s) {
    const { itemProps: o, onClickItem: a } = n, c = { key: s, ...r };
    return o && Object.assign(c, o[r.type || "item"]), (a || r.onClick) && (c.onClick = this.handleItemClick.bind(this, c, s, r.onClick)), c.className = U(c.className), c;
  }
  renderItem(n, r, s) {
    const o = this.getItemRenderProps(n, r, s), { itemRender: a } = n;
    if (a) {
      if (typeof a == "object") {
        const h = a[r.type || "item"];
        if (h)
          return /* @__PURE__ */ ye(h, {
            ...o
          });
      } else if (typeof a == "function") {
        const h = a.call(this, o, ye);
        if (Ic(h))
          return h;
        typeof h == "object" && Object.assign(o, h);
      }
    }
    const { type: c = "item", component: f, key: p = s, rootAttrs: i, rootClass: d, rootStyle: u, rootChildren: l, ..._ } = o, g = !f || typeof f == "string" ? this.constructor.ItemComponents && this.constructor.ItemComponents[c] || Si.ItemComponents[c] : f;
    return Object.assign(_, {
      type: c,
      component: typeof f == "string" ? f : void 0
    }), this.renderTypedItem(g, {
      className: U(d),
      children: l,
      style: u,
      key: p,
      ...i
    }, {
      ..._,
      type: c,
      component: typeof f == "string" ? f : void 0
    });
  }
  renderTypedItem(n, r, s) {
    const { children: o, className: a, key: c, ...f } = r;
    return /* @__PURE__ */ ye("li", {
      className: U(`${this.name}-${s.type}`, a),
      key: c,
      ...f
    }, /* @__PURE__ */ ye(n, {
      ...s
    }), typeof o == "function" ? o() : o);
  }
  render() {
    const n = this.beforeRender(), {
      name: r,
      style: s,
      itemProps: o,
      className: a,
      items: c,
      children: f,
      itemRender: p,
      onClickItem: i,
      beforeRender: d,
      afterRender: u,
      beforeDestroy: l,
      ..._
    } = n, g = this.constructor.ROOT_TAG;
    return /* @__PURE__ */ ye(g, {
      class: U(this.name, a),
      ..._,
      ref: this.ref
    }, c && c.map(this.renderItem.bind(this, n)), f);
  }
};
let wt = Si;
N(wt, "ItemComponents", {
  divider: Dp,
  item: Jc,
  heading: Np,
  space: Lp,
  custom: Rp,
  basic: Zc
}), N(wt, "ROOT_TAG", "menu"), N(wt, "NAME", "action-menu");
class ja extends Je {
}
N(ja, "NAME", "actionmenu"), N(ja, "Component", wt);
function Ia({
  ...e
}) {
  return /* @__PURE__ */ ye(Jc, {
    ...e
  });
}
var eo, et, xn;
class Ls extends wt {
  constructor(n) {
    var r;
    super(n);
    P(this, eo, /* @__PURE__ */ new Set());
    P(this, et, void 0);
    P(this, xn, (n, r, s) => {
      this.toggleNestedMenu(n, r), s.preventDefault();
    });
    W(this, et, n.nestedShow === void 0), w(this, et) && (this.state = { nestedShow: (r = n.defaultNestedShow) != null ? r : {} });
  }
  get nestedTrigger() {
    return this.props.nestedTrigger;
  }
  beforeRender() {
    const n = super.beforeRender(), { nestedShow: r, nestedTrigger: s, defaultNestedShow: o, controlledMenu: a, ...c } = n;
    return c;
  }
  renderNestedMenu(n) {
    let { items: r } = n;
    if (!r || (typeof r == "function" && (r = r(n, this)), !r.length))
      return;
    const s = this.constructor;
    return /* @__PURE__ */ ye(s, {
      items: r,
      name: this.props.name,
      nestedShow: w(this, et) ? this.state.nestedShow : this.props.nestedShow,
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
  renderToggleIcon(n, r) {
  }
  getItemRenderProps(n, r, s) {
    var p;
    const o = super.getItemRenderProps(n, r, s);
    if (!this.isNestedItem(o))
      return o;
    const a = (p = o.key) != null ? p : s;
    w(this, eo).add(a);
    const c = this.isNestedMenuShow(a);
    if (c && (o.rootChildren = [
      o.rootChildren,
      this.renderNestedMenu(r)
    ], o.component = Ia), this.nestedTrigger === "hover")
      o.rootAttrs = {
        ...o.rootAttrs,
        onMouseEnter: w(this, xn).bind(this, a, !0),
        onMouseLeave: w(this, xn).bind(this, a, !1)
      };
    else if (this.nestedTrigger === "click") {
      const { onClick: i } = o;
      o.onClick = (d) => {
        w(this, xn).call(this, a, void 0, d), i == null || i(d);
      };
    }
    const f = this.renderToggleIcon(c, o);
    return f && (o.children = [o.children, f]), o.rootClass = [o.rootClass, "has-nested-menu", c ? "show" : ""], o;
  }
  isNestedMenuShow(n) {
    const r = w(this, et) ? this.state.nestedShow : this.props.nestedShow;
    return r && typeof r == "object" ? r[n] : !!r;
  }
  toggleNestedMenu(n, r) {
    const { controlledMenu: s } = this.props;
    if (s)
      return s.toggleNestedMenu(n, r);
    if (!w(this, et))
      return !1;
    let { nestedShow: o = {} } = this.state;
    if (typeof o == "boolean" && (o === !0 ? o = [...w(this, eo).values()].reduce((a, c) => (a[c] = !0, a), {}) : o = {}), r === void 0)
      r = !o[n];
    else if (!!o[n] == !!r)
      return !1;
    return r ? o[n] = r : delete o[n], this.setState({ nestedShow: { ...o } }), !0;
  }
  showNestedMenu(n) {
    return this.toggleNestedMenu(n, !0);
  }
  hideNestedMenu(n) {
    return this.toggleNestedMenu(n, !1);
  }
  showAllNestedMenu() {
    !w(this, et) || this.setState({ nestedShow: !0 });
  }
  hideAllNestedMenu() {
    !w(this, et) || this.setState({ nestedShow: !1 });
  }
}
eo = new WeakMap(), et = new WeakMap(), xn = new WeakMap(), N(Ls, "ItemComponents", {
  item: Ia
});
class Ba extends Je {
}
N(Ba, "NAME", "actionmenunested"), N(Ba, "Component", Ls);
var Ps, fe, Qc, ur, Ua, ef = {}, tf = [], Hp = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function Bt(e, t) {
  for (var n in t)
    e[n] = t[n];
  return e;
}
function nf(e) {
  var t = e.parentNode;
  t && t.removeChild(e);
}
function bn(e, t, n) {
  var r, s, o, a = {};
  for (o in t)
    o == "key" ? r = t[o] : o == "ref" ? s = t[o] : a[o] = t[o];
  if (arguments.length > 2 && (a.children = arguments.length > 3 ? Ps.call(arguments, 2) : n), typeof e == "function" && e.defaultProps != null)
    for (o in e.defaultProps)
      a[o] === void 0 && (a[o] = e.defaultProps[o]);
  return So(e, a, r, s, null);
}
function So(e, t, n, r, s) {
  var o = { type: e, props: t, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: s == null ? ++Qc : s };
  return s == null && fe.vnode != null && fe.vnode(o), o;
}
function Rs(e) {
  return e.children;
}
function _r(e, t) {
  this.props = e, this.context = t;
}
function Rr(e, t) {
  if (t == null)
    return e.__ ? Rr(e.__, e.__.__k.indexOf(e) + 1) : null;
  for (var n; t < e.__k.length; t++)
    if ((n = e.__k[t]) != null && n.__e != null)
      return n.__e;
  return typeof e.type == "function" ? Rr(e) : null;
}
function rf(e) {
  var t, n;
  if ((e = e.__) != null && e.__c != null) {
    for (e.__e = e.__c.base = null, t = 0; t < e.__k.length; t++)
      if ((n = e.__k[t]) != null && n.__e != null) {
        e.__e = e.__c.base = n.__e;
        break;
      }
    return rf(e);
  }
}
function Fa(e) {
  (!e.__d && (e.__d = !0) && ur.push(e) && !Xo.__r++ || Ua !== fe.debounceRendering) && ((Ua = fe.debounceRendering) || setTimeout)(Xo);
}
function Xo() {
  for (var e; Xo.__r = ur.length; )
    e = ur.sort(function(t, n) {
      return t.__v.__b - n.__v.__b;
    }), ur = [], e.some(function(t) {
      var n, r, s, o, a, c;
      t.__d && (a = (o = (n = t).__v).__e, (c = n.__P) && (r = [], (s = Bt({}, o)).__v = o.__v + 1, lf(c, o, s, n.__n, c.ownerSVGElement !== void 0, o.__h != null ? [a] : null, r, a == null ? Rr(o) : a, o.__h), jp(r, o), o.__e != a && rf(o)));
    });
}
function of(e, t, n, r, s, o, a, c, f, p) {
  var i, d, u, l, _, g, h, v = r && r.__k || tf, m = v.length;
  for (n.__k = [], i = 0; i < t.length; i++)
    if ((l = n.__k[i] = (l = t[i]) == null || typeof l == "boolean" ? null : typeof l == "string" || typeof l == "number" || typeof l == "bigint" ? So(null, l, null, null, l) : Array.isArray(l) ? So(Rs, { children: l }, null, null, null) : l.__b > 0 ? So(l.type, l.props, l.key, l.ref ? l.ref : null, l.__v) : l) != null) {
      if (l.__ = n, l.__b = n.__b + 1, (u = v[i]) === null || u && l.key == u.key && l.type === u.type)
        v[i] = void 0;
      else
        for (d = 0; d < m; d++) {
          if ((u = v[d]) && l.key == u.key && l.type === u.type) {
            v[d] = void 0;
            break;
          }
          u = null;
        }
      lf(e, l, u = u || ef, s, o, a, c, f, p), _ = l.__e, (d = l.ref) && u.ref != d && (h || (h = []), u.ref && h.push(u.ref, null, l), h.push(d, l.__c || _, l)), _ != null ? (g == null && (g = _), typeof l.type == "function" && l.__k === u.__k ? l.__d = f = sf(l, f, e) : f = af(e, l, u, v, _, f), typeof n.type == "function" && (n.__d = f)) : f && u.__e == f && f.parentNode != e && (f = Rr(u));
    }
  for (n.__e = g, i = m; i--; )
    v[i] != null && ff(v[i], v[i]);
  if (h)
    for (i = 0; i < h.length; i++)
      cf(h[i], h[++i], h[++i]);
}
function sf(e, t, n) {
  for (var r, s = e.__k, o = 0; s && o < s.length; o++)
    (r = s[o]) && (r.__ = e, t = typeof r.type == "function" ? sf(r, t, n) : af(n, r, r, s, r.__e, t));
  return t;
}
function af(e, t, n, r, s, o) {
  var a, c, f;
  if (t.__d !== void 0)
    a = t.__d, t.__d = void 0;
  else if (n == null || s != o || s.parentNode == null)
    e:
      if (o == null || o.parentNode !== e)
        e.appendChild(s), a = null;
      else {
        for (c = o, f = 0; (c = c.nextSibling) && f < r.length; f += 2)
          if (c == s)
            break e;
        e.insertBefore(s, o), a = o;
      }
  return a !== void 0 ? a : s.nextSibling;
}
function Wp(e, t, n, r, s) {
  var o;
  for (o in n)
    o === "children" || o === "key" || o in t || Ko(e, o, null, n[o], r);
  for (o in t)
    s && typeof t[o] != "function" || o === "children" || o === "key" || o === "value" || o === "checked" || n[o] === t[o] || Ko(e, o, t[o], n[o], r);
}
function za(e, t, n) {
  t[0] === "-" ? e.setProperty(t, n) : e[t] = n == null ? "" : typeof n != "number" || Hp.test(t) ? n : n + "px";
}
function Ko(e, t, n, r, s) {
  var o;
  e:
    if (t === "style")
      if (typeof n == "string")
        e.style.cssText = n;
      else {
        if (typeof r == "string" && (e.style.cssText = r = ""), r)
          for (t in r)
            n && t in n || za(e.style, t, "");
        if (n)
          for (t in n)
            r && n[t] === r[t] || za(e.style, t, n[t]);
      }
    else if (t[0] === "o" && t[1] === "n")
      o = t !== (t = t.replace(/Capture$/, "")), t = t.toLowerCase() in e ? t.toLowerCase().slice(2) : t.slice(2), e.l || (e.l = {}), e.l[t + o] = n, n ? r || e.addEventListener(t, o ? Ya : Va, o) : e.removeEventListener(t, o ? Ya : Va, o);
    else if (t !== "dangerouslySetInnerHTML") {
      if (s)
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
function Va(e) {
  this.l[e.type + !1](fe.event ? fe.event(e) : e);
}
function Ya(e) {
  this.l[e.type + !0](fe.event ? fe.event(e) : e);
}
function lf(e, t, n, r, s, o, a, c, f) {
  var p, i, d, u, l, _, g, h, v, m, E, b, S, $, k, y = t.type;
  if (t.constructor !== void 0)
    return null;
  n.__h != null && (f = n.__h, c = t.__e = n.__e, t.__h = null, o = [c]), (p = fe.__b) && p(t);
  try {
    e:
      if (typeof y == "function") {
        if (h = t.props, v = (p = y.contextType) && r[p.__c], m = p ? v ? v.props.value : p.__ : r, n.__c ? g = (i = t.__c = n.__c).__ = i.__E : ("prototype" in y && y.prototype.render ? t.__c = i = new y(h, m) : (t.__c = i = new _r(h, m), i.constructor = y, i.render = Bp), v && v.sub(i), i.props = h, i.state || (i.state = {}), i.context = m, i.__n = r, d = i.__d = !0, i.__h = [], i._sb = []), i.__s == null && (i.__s = i.state), y.getDerivedStateFromProps != null && (i.__s == i.state && (i.__s = Bt({}, i.__s)), Bt(i.__s, y.getDerivedStateFromProps(h, i.__s))), u = i.props, l = i.state, d)
          y.getDerivedStateFromProps == null && i.componentWillMount != null && i.componentWillMount(), i.componentDidMount != null && i.__h.push(i.componentDidMount);
        else {
          if (y.getDerivedStateFromProps == null && h !== u && i.componentWillReceiveProps != null && i.componentWillReceiveProps(h, m), !i.__e && i.shouldComponentUpdate != null && i.shouldComponentUpdate(h, i.__s, m) === !1 || t.__v === n.__v) {
            for (i.props = h, i.state = i.__s, t.__v !== n.__v && (i.__d = !1), i.__v = t, t.__e = n.__e, t.__k = n.__k, t.__k.forEach(function(x) {
              x && (x.__ = t);
            }), E = 0; E < i._sb.length; E++)
              i.__h.push(i._sb[E]);
            i._sb = [], i.__h.length && a.push(i);
            break e;
          }
          i.componentWillUpdate != null && i.componentWillUpdate(h, i.__s, m), i.componentDidUpdate != null && i.__h.push(function() {
            i.componentDidUpdate(u, l, _);
          });
        }
        if (i.context = m, i.props = h, i.__v = t, i.__P = e, b = fe.__r, S = 0, "prototype" in y && y.prototype.render) {
          for (i.state = i.__s, i.__d = !1, b && b(t), p = i.render(i.props, i.state, i.context), $ = 0; $ < i._sb.length; $++)
            i.__h.push(i._sb[$]);
          i._sb = [];
        } else
          do
            i.__d = !1, b && b(t), p = i.render(i.props, i.state, i.context), i.state = i.__s;
          while (i.__d && ++S < 25);
        i.state = i.__s, i.getChildContext != null && (r = Bt(Bt({}, r), i.getChildContext())), d || i.getSnapshotBeforeUpdate == null || (_ = i.getSnapshotBeforeUpdate(u, l)), k = p != null && p.type === Rs && p.key == null ? p.props.children : p, of(e, Array.isArray(k) ? k : [k], t, n, r, s, o, a, c, f), i.base = t.__e, t.__h = null, i.__h.length && a.push(i), g && (i.__E = i.__ = null), i.__e = !1;
      } else
        o == null && t.__v === n.__v ? (t.__k = n.__k, t.__e = n.__e) : t.__e = Ip(n.__e, t, n, r, s, o, a, f);
    (p = fe.diffed) && p(t);
  } catch (x) {
    t.__v = null, (f || o != null) && (t.__e = c, t.__h = !!f, o[o.indexOf(c)] = null), fe.__e(x, t, n);
  }
}
function jp(e, t) {
  fe.__c && fe.__c(t, e), e.some(function(n) {
    try {
      e = n.__h, n.__h = [], e.some(function(r) {
        r.call(n);
      });
    } catch (r) {
      fe.__e(r, n.__v);
    }
  });
}
function Ip(e, t, n, r, s, o, a, c) {
  var f, p, i, d = n.props, u = t.props, l = t.type, _ = 0;
  if (l === "svg" && (s = !0), o != null) {
    for (; _ < o.length; _++)
      if ((f = o[_]) && "setAttribute" in f == !!l && (l ? f.localName === l : f.nodeType === 3)) {
        e = f, o[_] = null;
        break;
      }
  }
  if (e == null) {
    if (l === null)
      return document.createTextNode(u);
    e = s ? document.createElementNS("http://www.w3.org/2000/svg", l) : document.createElement(l, u.is && u), o = null, c = !1;
  }
  if (l === null)
    d === u || c && e.data === u || (e.data = u);
  else {
    if (o = o && Ps.call(e.childNodes), p = (d = n.props || ef).dangerouslySetInnerHTML, i = u.dangerouslySetInnerHTML, !c) {
      if (o != null)
        for (d = {}, _ = 0; _ < e.attributes.length; _++)
          d[e.attributes[_].name] = e.attributes[_].value;
      (i || p) && (i && (p && i.__html == p.__html || i.__html === e.innerHTML) || (e.innerHTML = i && i.__html || ""));
    }
    if (Wp(e, u, d, s, c), i)
      t.__k = [];
    else if (_ = t.props.children, of(e, Array.isArray(_) ? _ : [_], t, n, r, s && l !== "foreignObject", o, a, o ? o[0] : n.__k && Rr(n, 0), c), o != null)
      for (_ = o.length; _--; )
        o[_] != null && nf(o[_]);
    c || ("value" in u && (_ = u.value) !== void 0 && (_ !== e.value || l === "progress" && !_ || l === "option" && _ !== d.value) && Ko(e, "value", _, d.value, !1), "checked" in u && (_ = u.checked) !== void 0 && _ !== e.checked && Ko(e, "checked", _, d.checked, !1));
  }
  return e;
}
function cf(e, t, n) {
  try {
    typeof e == "function" ? e(t) : e.current = t;
  } catch (r) {
    fe.__e(r, n);
  }
}
function ff(e, t, n) {
  var r, s;
  if (fe.unmount && fe.unmount(e), (r = e.ref) && (r.current && r.current !== e.__e || cf(r, null, t)), (r = e.__c) != null) {
    if (r.componentWillUnmount)
      try {
        r.componentWillUnmount();
      } catch (o) {
        fe.__e(o, t);
      }
    r.base = r.__P = null, e.__c = void 0;
  }
  if (r = e.__k)
    for (s = 0; s < r.length; s++)
      r[s] && ff(r[s], t, n || typeof e.type != "function");
  n || e.__e == null || nf(e.__e), e.__ = e.__e = e.__d = void 0;
}
function Bp(e, t, n) {
  return this.constructor(e, n);
}
Ps = tf.slice, fe = { __e: function(e, t, n, r) {
  for (var s, o, a; t = t.__; )
    if ((s = t.__c) && !s.__)
      try {
        if ((o = s.constructor) && o.getDerivedStateFromError != null && (s.setState(o.getDerivedStateFromError(e)), a = s.__d), s.componentDidCatch != null && (s.componentDidCatch(e, r || {}), a = s.__d), a)
          return s.__E = s;
      } catch (c) {
        e = c;
      }
  throw e;
} }, Qc = 0, _r.prototype.setState = function(e, t) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = Bt({}, this.state), typeof e == "function" && (e = e(Bt({}, n), this.props)), e && Bt(n, e), e != null && this.__v && (t && this._sb.push(t), Fa(this));
}, _r.prototype.forceUpdate = function(e) {
  this.__v && (this.__e = !0, e && this.__h.push(e), Fa(this));
}, _r.prototype.render = Rs, ur = [], Xo.__r = 0;
class en extends _r {
  render() {
    const {
      component: t,
      type: n,
      size: r,
      className: s,
      children: o,
      url: a,
      target: c,
      disabled: f,
      active: p,
      loading: i,
      loadingIcon: d,
      loadingText: u,
      icon: l,
      text: _,
      trailingIcon: g,
      caret: h,
      square: v,
      hint: m,
      ...E
    } = this.props, b = t || (a ? "a" : "button"), S = _ == null || typeof _ == "string" && !_.length || i && !u, $ = S && !l && !g && !o && !i;
    return bn(
      b,
      {
        className: U("btn", n, s, {
          "btn-caret": $,
          disabled: f || i,
          active: p,
          loading: i,
          square: v === void 0 ? !$ && !o && S : v
        }, r ? `size-${r}` : ""),
        title: m,
        [b === "a" ? "href" : "data-url"]: a,
        [b === "a" ? "target" : "data-target"]: c,
        type: b === "button" ? "button" : void 0,
        ...E
      },
      i ? /* @__PURE__ */ bn("i", {
        class: `spin icon ${d || "icon-spinner-snake"}`
      }) : typeof l == "string" ? /* @__PURE__ */ bn("i", {
        class: `icon ${l}`
      }) : l,
      S ? null : /* @__PURE__ */ bn("span", {
        className: "text"
      }, i ? u : _),
      i ? null : o,
      i ? null : typeof g == "string" ? /* @__PURE__ */ bn("i", {
        class: `icon ${g}`
      }) : g,
      i ? null : h ? /* @__PURE__ */ bn("span", {
        className: typeof h == "string" ? `caret-${h}` : "caret"
      }) : null
    );
  }
}
class qa extends Je {
}
N(qa, "NAME", "button"), N(qa, "Component", en);
var uf, us, _f, Up = [];
function Fp(e, t, n) {
  var r, s, o, a = {};
  for (o in t)
    o == "key" ? r = t[o] : o == "ref" ? s = t[o] : a[o] = t[o];
  if (arguments.length > 2 && (a.children = arguments.length > 3 ? uf.call(arguments, 2) : n), typeof e == "function" && e.defaultProps != null)
    for (o in e.defaultProps)
      a[o] === void 0 && (a[o] = e.defaultProps[o]);
  return zp(e, a, r, s, null);
}
function zp(e, t, n, r, s) {
  var o = { type: e, props: t, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: s == null ? ++_f : s };
  return s == null && us.vnode != null && us.vnode(o), o;
}
uf = Up.slice, us = { __e: function(e, t, n, r) {
  for (var s, o, a; t = t.__; )
    if ((s = t.__c) && !s.__)
      try {
        if ((o = s.constructor) && o.getDerivedStateFromError != null && (s.setState(o.getDerivedStateFromError(e)), a = s.__d), s.componentDidCatch != null && (s.componentDidCatch(e, r || {}), a = s.__d), a)
          return s.__E = s;
      } catch (c) {
        e = c;
      }
  throw e;
} }, _f = 0;
class Hs extends Ls {
  get nestedTrigger() {
    return this.props.nestedTrigger || "click";
  }
  get menuName() {
    return "menu-nested";
  }
  beforeRender() {
    const t = super.beforeRender();
    let { hasIcons: n } = t;
    return n === void 0 && (n = t.items.some((r) => r.icon)), t.className = U(t.className, this.menuName, {
      "has-icons": n,
      "has-nested-items": t.items.some((r) => this.isNestedItem(r))
    }), t;
  }
  renderToggleIcon(t) {
    return /* @__PURE__ */ Fp("span", {
      class: `${this.name}-toggle-icon caret-${t ? "down" : "right"}`
    });
  }
}
N(Hs, "NAME", "menu");
class Ga extends Je {
}
N(Ga, "NAME", "menu"), N(Ga, "Component", Hs);
var Vi, oe, pf, pr, Xa, Jo = {}, df = [], Vp = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function Ut(e, t) {
  for (var n in t)
    e[n] = t[n];
  return e;
}
function hf(e) {
  var t = e.parentNode;
  t && t.removeChild(e);
}
function Jt(e, t, n) {
  var r, s, o, a = {};
  for (o in t)
    o == "key" ? r = t[o] : o == "ref" ? s = t[o] : a[o] = t[o];
  if (arguments.length > 2 && (a.children = arguments.length > 3 ? Vi.call(arguments, 2) : n), typeof e == "function" && e.defaultProps != null)
    for (o in e.defaultProps)
      a[o] === void 0 && (a[o] = e.defaultProps[o]);
  return Co(e, a, r, s, null);
}
function Co(e, t, n, r, s) {
  var o = { type: e, props: t, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: s == null ? ++pf : s };
  return s == null && oe.vnode != null && oe.vnode(o), o;
}
function Yi(e) {
  return e.children;
}
function $n(e, t) {
  this.props = e, this.context = t;
}
function Hr(e, t) {
  if (t == null)
    return e.__ ? Hr(e.__, e.__.__k.indexOf(e) + 1) : null;
  for (var n; t < e.__k.length; t++)
    if ((n = e.__k[t]) != null && n.__e != null)
      return n.__e;
  return typeof e.type == "function" ? Hr(e) : null;
}
function vf(e) {
  var t, n;
  if ((e = e.__) != null && e.__c != null) {
    for (e.__e = e.__c.base = null, t = 0; t < e.__k.length; t++)
      if ((n = e.__k[t]) != null && n.__e != null) {
        e.__e = e.__c.base = n.__e;
        break;
      }
    return vf(e);
  }
}
function Ka(e) {
  (!e.__d && (e.__d = !0) && pr.push(e) && !Zo.__r++ || Xa !== oe.debounceRendering) && ((Xa = oe.debounceRendering) || setTimeout)(Zo);
}
function Zo() {
  for (var e; Zo.__r = pr.length; )
    e = pr.sort(function(t, n) {
      return t.__v.__b - n.__v.__b;
    }), pr = [], e.some(function(t) {
      var n, r, s, o, a, c;
      t.__d && (a = (o = (n = t).__v).__e, (c = n.__P) && (r = [], (s = Ut({}, o)).__v = o.__v + 1, Ws(c, o, s, n.__n, c.ownerSVGElement !== void 0, o.__h != null ? [a] : null, r, a == null ? Hr(o) : a, o.__h), bf(r, o), o.__e != a && vf(o)));
    });
}
function mf(e, t, n, r, s, o, a, c, f, p) {
  var i, d, u, l, _, g, h, v = r && r.__k || df, m = v.length;
  for (n.__k = [], i = 0; i < t.length; i++)
    if ((l = n.__k[i] = (l = t[i]) == null || typeof l == "boolean" ? null : typeof l == "string" || typeof l == "number" || typeof l == "bigint" ? Co(null, l, null, null, l) : Array.isArray(l) ? Co(Yi, { children: l }, null, null, null) : l.__b > 0 ? Co(l.type, l.props, l.key, l.ref ? l.ref : null, l.__v) : l) != null) {
      if (l.__ = n, l.__b = n.__b + 1, (u = v[i]) === null || u && l.key == u.key && l.type === u.type)
        v[i] = void 0;
      else
        for (d = 0; d < m; d++) {
          if ((u = v[d]) && l.key == u.key && l.type === u.type) {
            v[d] = void 0;
            break;
          }
          u = null;
        }
      Ws(e, l, u = u || Jo, s, o, a, c, f, p), _ = l.__e, (d = l.ref) && u.ref != d && (h || (h = []), u.ref && h.push(u.ref, null, l), h.push(d, l.__c || _, l)), _ != null ? (g == null && (g = _), typeof l.type == "function" && l.__k === u.__k ? l.__d = f = gf(l, f, e) : f = yf(e, l, u, v, _, f), typeof n.type == "function" && (n.__d = f)) : f && u.__e == f && f.parentNode != e && (f = Hr(u));
    }
  for (n.__e = g, i = m; i--; )
    v[i] != null && $f(v[i], v[i]);
  if (h)
    for (i = 0; i < h.length; i++)
      wf(h[i], h[++i], h[++i]);
}
function gf(e, t, n) {
  for (var r, s = e.__k, o = 0; s && o < s.length; o++)
    (r = s[o]) && (r.__ = e, t = typeof r.type == "function" ? gf(r, t, n) : yf(n, r, r, s, r.__e, t));
  return t;
}
function yf(e, t, n, r, s, o) {
  var a, c, f;
  if (t.__d !== void 0)
    a = t.__d, t.__d = void 0;
  else if (n == null || s != o || s.parentNode == null)
    e:
      if (o == null || o.parentNode !== e)
        e.appendChild(s), a = null;
      else {
        for (c = o, f = 0; (c = c.nextSibling) && f < r.length; f += 2)
          if (c == s)
            break e;
        e.insertBefore(s, o), a = o;
      }
  return a !== void 0 ? a : s.nextSibling;
}
function Yp(e, t, n, r, s) {
  var o;
  for (o in n)
    o === "children" || o === "key" || o in t || Qo(e, o, null, n[o], r);
  for (o in t)
    s && typeof t[o] != "function" || o === "children" || o === "key" || o === "value" || o === "checked" || n[o] === t[o] || Qo(e, o, t[o], n[o], r);
}
function Ja(e, t, n) {
  t[0] === "-" ? e.setProperty(t, n) : e[t] = n == null ? "" : typeof n != "number" || Vp.test(t) ? n : n + "px";
}
function Qo(e, t, n, r, s) {
  var o;
  e:
    if (t === "style")
      if (typeof n == "string")
        e.style.cssText = n;
      else {
        if (typeof r == "string" && (e.style.cssText = r = ""), r)
          for (t in r)
            n && t in n || Ja(e.style, t, "");
        if (n)
          for (t in n)
            r && n[t] === r[t] || Ja(e.style, t, n[t]);
      }
    else if (t[0] === "o" && t[1] === "n")
      o = t !== (t = t.replace(/Capture$/, "")), t = t.toLowerCase() in e ? t.toLowerCase().slice(2) : t.slice(2), e.l || (e.l = {}), e.l[t + o] = n, n ? r || e.addEventListener(t, o ? Qa : Za, o) : e.removeEventListener(t, o ? Qa : Za, o);
    else if (t !== "dangerouslySetInnerHTML") {
      if (s)
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
function Za(e) {
  this.l[e.type + !1](oe.event ? oe.event(e) : e);
}
function Qa(e) {
  this.l[e.type + !0](oe.event ? oe.event(e) : e);
}
function Ws(e, t, n, r, s, o, a, c, f) {
  var p, i, d, u, l, _, g, h, v, m, E, b, S, $, k, y = t.type;
  if (t.constructor !== void 0)
    return null;
  n.__h != null && (f = n.__h, c = t.__e = n.__e, t.__h = null, o = [c]), (p = oe.__b) && p(t);
  try {
    e:
      if (typeof y == "function") {
        if (h = t.props, v = (p = y.contextType) && r[p.__c], m = p ? v ? v.props.value : p.__ : r, n.__c ? g = (i = t.__c = n.__c).__ = i.__E : ("prototype" in y && y.prototype.render ? t.__c = i = new y(h, m) : (t.__c = i = new $n(h, m), i.constructor = y, i.render = Gp), v && v.sub(i), i.props = h, i.state || (i.state = {}), i.context = m, i.__n = r, d = i.__d = !0, i.__h = [], i._sb = []), i.__s == null && (i.__s = i.state), y.getDerivedStateFromProps != null && (i.__s == i.state && (i.__s = Ut({}, i.__s)), Ut(i.__s, y.getDerivedStateFromProps(h, i.__s))), u = i.props, l = i.state, d)
          y.getDerivedStateFromProps == null && i.componentWillMount != null && i.componentWillMount(), i.componentDidMount != null && i.__h.push(i.componentDidMount);
        else {
          if (y.getDerivedStateFromProps == null && h !== u && i.componentWillReceiveProps != null && i.componentWillReceiveProps(h, m), !i.__e && i.shouldComponentUpdate != null && i.shouldComponentUpdate(h, i.__s, m) === !1 || t.__v === n.__v) {
            for (i.props = h, i.state = i.__s, t.__v !== n.__v && (i.__d = !1), i.__v = t, t.__e = n.__e, t.__k = n.__k, t.__k.forEach(function(x) {
              x && (x.__ = t);
            }), E = 0; E < i._sb.length; E++)
              i.__h.push(i._sb[E]);
            i._sb = [], i.__h.length && a.push(i);
            break e;
          }
          i.componentWillUpdate != null && i.componentWillUpdate(h, i.__s, m), i.componentDidUpdate != null && i.__h.push(function() {
            i.componentDidUpdate(u, l, _);
          });
        }
        if (i.context = m, i.props = h, i.__v = t, i.__P = e, b = oe.__r, S = 0, "prototype" in y && y.prototype.render) {
          for (i.state = i.__s, i.__d = !1, b && b(t), p = i.render(i.props, i.state, i.context), $ = 0; $ < i._sb.length; $++)
            i.__h.push(i._sb[$]);
          i._sb = [];
        } else
          do
            i.__d = !1, b && b(t), p = i.render(i.props, i.state, i.context), i.state = i.__s;
          while (i.__d && ++S < 25);
        i.state = i.__s, i.getChildContext != null && (r = Ut(Ut({}, r), i.getChildContext())), d || i.getSnapshotBeforeUpdate == null || (_ = i.getSnapshotBeforeUpdate(u, l)), k = p != null && p.type === Yi && p.key == null ? p.props.children : p, mf(e, Array.isArray(k) ? k : [k], t, n, r, s, o, a, c, f), i.base = t.__e, t.__h = null, i.__h.length && a.push(i), g && (i.__E = i.__ = null), i.__e = !1;
      } else
        o == null && t.__v === n.__v ? (t.__k = n.__k, t.__e = n.__e) : t.__e = qp(n.__e, t, n, r, s, o, a, f);
    (p = oe.diffed) && p(t);
  } catch (x) {
    t.__v = null, (f || o != null) && (t.__e = c, t.__h = !!f, o[o.indexOf(c)] = null), oe.__e(x, t, n);
  }
}
function bf(e, t) {
  oe.__c && oe.__c(t, e), e.some(function(n) {
    try {
      e = n.__h, n.__h = [], e.some(function(r) {
        r.call(n);
      });
    } catch (r) {
      oe.__e(r, n.__v);
    }
  });
}
function qp(e, t, n, r, s, o, a, c) {
  var f, p, i, d = n.props, u = t.props, l = t.type, _ = 0;
  if (l === "svg" && (s = !0), o != null) {
    for (; _ < o.length; _++)
      if ((f = o[_]) && "setAttribute" in f == !!l && (l ? f.localName === l : f.nodeType === 3)) {
        e = f, o[_] = null;
        break;
      }
  }
  if (e == null) {
    if (l === null)
      return document.createTextNode(u);
    e = s ? document.createElementNS("http://www.w3.org/2000/svg", l) : document.createElement(l, u.is && u), o = null, c = !1;
  }
  if (l === null)
    d === u || c && e.data === u || (e.data = u);
  else {
    if (o = o && Vi.call(e.childNodes), p = (d = n.props || Jo).dangerouslySetInnerHTML, i = u.dangerouslySetInnerHTML, !c) {
      if (o != null)
        for (d = {}, _ = 0; _ < e.attributes.length; _++)
          d[e.attributes[_].name] = e.attributes[_].value;
      (i || p) && (i && (p && i.__html == p.__html || i.__html === e.innerHTML) || (e.innerHTML = i && i.__html || ""));
    }
    if (Yp(e, u, d, s, c), i)
      t.__k = [];
    else if (_ = t.props.children, mf(e, Array.isArray(_) ? _ : [_], t, n, r, s && l !== "foreignObject", o, a, o ? o[0] : n.__k && Hr(n, 0), c), o != null)
      for (_ = o.length; _--; )
        o[_] != null && hf(o[_]);
    c || ("value" in u && (_ = u.value) !== void 0 && (_ !== e.value || l === "progress" && !_ || l === "option" && _ !== d.value) && Qo(e, "value", _, d.value, !1), "checked" in u && (_ = u.checked) !== void 0 && _ !== e.checked && Qo(e, "checked", _, d.checked, !1));
  }
  return e;
}
function wf(e, t, n) {
  try {
    typeof e == "function" ? e(t) : e.current = t;
  } catch (r) {
    oe.__e(r, n);
  }
}
function $f(e, t, n) {
  var r, s;
  if (oe.unmount && oe.unmount(e), (r = e.ref) && (r.current && r.current !== e.__e || wf(r, null, t)), (r = e.__c) != null) {
    if (r.componentWillUnmount)
      try {
        r.componentWillUnmount();
      } catch (o) {
        oe.__e(o, t);
      }
    r.base = r.__P = null, e.__c = void 0;
  }
  if (r = e.__k)
    for (s = 0; s < r.length; s++)
      r[s] && $f(r[s], t, n || typeof e.type != "function");
  n || e.__e == null || hf(e.__e), e.__ = e.__e = e.__d = void 0;
}
function Gp(e, t, n) {
  return this.constructor(e, n);
}
function el(e, t, n) {
  var r, s, o;
  oe.__ && oe.__(e, t), s = (r = typeof n == "function") ? null : n && n.__k || t.__k, o = [], Ws(t, e = (!r && n || t).__k = Jt(Yi, null, [e]), s || Jo, Jo, t.ownerSVGElement !== void 0, !r && n ? [n] : s ? null : t.firstChild ? Vi.call(t.childNodes) : null, o, !r && n ? n : s ? s.__e : t.firstChild, r), bf(o, e);
}
Vi = df.slice, oe = { __e: function(e, t, n, r) {
  for (var s, o, a; t = t.__; )
    if ((s = t.__c) && !s.__)
      try {
        if ((o = s.constructor) && o.getDerivedStateFromError != null && (s.setState(o.getDerivedStateFromError(e)), a = s.__d), s.componentDidCatch != null && (s.componentDidCatch(e, r || {}), a = s.__d), a)
          return s.__E = s;
      } catch (c) {
        e = c;
      }
  throw e;
} }, pf = 0, $n.prototype.setState = function(e, t) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = Ut({}, this.state), typeof e == "function" && (e = e(Ut({}, n), this.props)), e && Ut(n, e), e != null && this.__v && (t && this._sb.push(t), Ka(this));
}, $n.prototype.forceUpdate = function(e) {
  this.__v && (this.__e = !0, e && this.__h.push(e), Ka(this));
}, $n.prototype.render = Yi, pr = [], Zo.__r = 0;
var js, ue, kf, xf, dr, tl, Ef = {}, Sf = [], Xp = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function Ft(e, t) {
  for (var n in t)
    e[n] = t[n];
  return e;
}
function Cf(e) {
  var t = e.parentNode;
  t && t.removeChild(e);
}
function is(e, t, n) {
  var r, s, o, a = {};
  for (o in t)
    o == "key" ? r = t[o] : o == "ref" ? s = t[o] : a[o] = t[o];
  if (arguments.length > 2 && (a.children = arguments.length > 3 ? js.call(arguments, 2) : n), typeof e == "function" && e.defaultProps != null)
    for (o in e.defaultProps)
      a[o] === void 0 && (a[o] = e.defaultProps[o]);
  return Oo(e, a, r, s, null);
}
function Oo(e, t, n, r, s) {
  var o = { type: e, props: t, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: s == null ? ++kf : s };
  return s == null && ue.vnode != null && ue.vnode(o), o;
}
function Is(e) {
  return e.children;
}
function hr(e, t) {
  this.props = e, this.context = t;
}
function Wr(e, t) {
  if (t == null)
    return e.__ ? Wr(e.__, e.__.__k.indexOf(e) + 1) : null;
  for (var n; t < e.__k.length; t++)
    if ((n = e.__k[t]) != null && n.__e != null)
      return n.__e;
  return typeof e.type == "function" ? Wr(e) : null;
}
function Of(e) {
  var t, n;
  if ((e = e.__) != null && e.__c != null) {
    for (e.__e = e.__c.base = null, t = 0; t < e.__k.length; t++)
      if ((n = e.__k[t]) != null && n.__e != null) {
        e.__e = e.__c.base = n.__e;
        break;
      }
    return Of(e);
  }
}
function nl(e) {
  (!e.__d && (e.__d = !0) && dr.push(e) && !ei.__r++ || tl !== ue.debounceRendering) && ((tl = ue.debounceRendering) || setTimeout)(ei);
}
function ei() {
  for (var e; ei.__r = dr.length; )
    e = dr.sort(function(t, n) {
      return t.__v.__b - n.__v.__b;
    }), dr = [], e.some(function(t) {
      var n, r, s, o, a, c;
      t.__d && (a = (o = (n = t).__v).__e, (c = n.__P) && (r = [], (s = Ft({}, o)).__v = o.__v + 1, Df(c, o, s, n.__n, c.ownerSVGElement !== void 0, o.__h != null ? [a] : null, r, a == null ? Wr(o) : a, o.__h), Jp(r, o), o.__e != a && Of(o)));
    });
}
function Af(e, t, n, r, s, o, a, c, f, p) {
  var i, d, u, l, _, g, h, v = r && r.__k || Sf, m = v.length;
  for (n.__k = [], i = 0; i < t.length; i++)
    if ((l = n.__k[i] = (l = t[i]) == null || typeof l == "boolean" ? null : typeof l == "string" || typeof l == "number" || typeof l == "bigint" ? Oo(null, l, null, null, l) : Array.isArray(l) ? Oo(Is, { children: l }, null, null, null) : l.__b > 0 ? Oo(l.type, l.props, l.key, l.ref ? l.ref : null, l.__v) : l) != null) {
      if (l.__ = n, l.__b = n.__b + 1, (u = v[i]) === null || u && l.key == u.key && l.type === u.type)
        v[i] = void 0;
      else
        for (d = 0; d < m; d++) {
          if ((u = v[d]) && l.key == u.key && l.type === u.type) {
            v[d] = void 0;
            break;
          }
          u = null;
        }
      Df(e, l, u = u || Ef, s, o, a, c, f, p), _ = l.__e, (d = l.ref) && u.ref != d && (h || (h = []), u.ref && h.push(u.ref, null, l), h.push(d, l.__c || _, l)), _ != null ? (g == null && (g = _), typeof l.type == "function" && l.__k === u.__k ? l.__d = f = Mf(l, f, e) : f = Tf(e, l, u, v, _, f), typeof n.type == "function" && (n.__d = f)) : f && u.__e == f && f.parentNode != e && (f = Wr(u));
    }
  for (n.__e = g, i = m; i--; )
    v[i] != null && Lf(v[i], v[i]);
  if (h)
    for (i = 0; i < h.length; i++)
      Nf(h[i], h[++i], h[++i]);
}
function Mf(e, t, n) {
  for (var r, s = e.__k, o = 0; s && o < s.length; o++)
    (r = s[o]) && (r.__ = e, t = typeof r.type == "function" ? Mf(r, t, n) : Tf(n, r, r, s, r.__e, t));
  return t;
}
function Tf(e, t, n, r, s, o) {
  var a, c, f;
  if (t.__d !== void 0)
    a = t.__d, t.__d = void 0;
  else if (n == null || s != o || s.parentNode == null)
    e:
      if (o == null || o.parentNode !== e)
        e.appendChild(s), a = null;
      else {
        for (c = o, f = 0; (c = c.nextSibling) && f < r.length; f += 2)
          if (c == s)
            break e;
        e.insertBefore(s, o), a = o;
      }
  return a !== void 0 ? a : s.nextSibling;
}
function Kp(e, t, n, r, s) {
  var o;
  for (o in n)
    o === "children" || o === "key" || o in t || ti(e, o, null, n[o], r);
  for (o in t)
    s && typeof t[o] != "function" || o === "children" || o === "key" || o === "value" || o === "checked" || n[o] === t[o] || ti(e, o, t[o], n[o], r);
}
function rl(e, t, n) {
  t[0] === "-" ? e.setProperty(t, n) : e[t] = n == null ? "" : typeof n != "number" || Xp.test(t) ? n : n + "px";
}
function ti(e, t, n, r, s) {
  var o;
  e:
    if (t === "style")
      if (typeof n == "string")
        e.style.cssText = n;
      else {
        if (typeof r == "string" && (e.style.cssText = r = ""), r)
          for (t in r)
            n && t in n || rl(e.style, t, "");
        if (n)
          for (t in n)
            r && n[t] === r[t] || rl(e.style, t, n[t]);
      }
    else if (t[0] === "o" && t[1] === "n")
      o = t !== (t = t.replace(/Capture$/, "")), t = t.toLowerCase() in e ? t.toLowerCase().slice(2) : t.slice(2), e.l || (e.l = {}), e.l[t + o] = n, n ? r || e.addEventListener(t, o ? il : ol, o) : e.removeEventListener(t, o ? il : ol, o);
    else if (t !== "dangerouslySetInnerHTML") {
      if (s)
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
function ol(e) {
  this.l[e.type + !1](ue.event ? ue.event(e) : e);
}
function il(e) {
  this.l[e.type + !0](ue.event ? ue.event(e) : e);
}
function Df(e, t, n, r, s, o, a, c, f) {
  var p, i, d, u, l, _, g, h, v, m, E, b, S, $, k, y = t.type;
  if (t.constructor !== void 0)
    return null;
  n.__h != null && (f = n.__h, c = t.__e = n.__e, t.__h = null, o = [c]), (p = ue.__b) && p(t);
  try {
    e:
      if (typeof y == "function") {
        if (h = t.props, v = (p = y.contextType) && r[p.__c], m = p ? v ? v.props.value : p.__ : r, n.__c ? g = (i = t.__c = n.__c).__ = i.__E : ("prototype" in y && y.prototype.render ? t.__c = i = new y(h, m) : (t.__c = i = new hr(h, m), i.constructor = y, i.render = Qp), v && v.sub(i), i.props = h, i.state || (i.state = {}), i.context = m, i.__n = r, d = i.__d = !0, i.__h = [], i._sb = []), i.__s == null && (i.__s = i.state), y.getDerivedStateFromProps != null && (i.__s == i.state && (i.__s = Ft({}, i.__s)), Ft(i.__s, y.getDerivedStateFromProps(h, i.__s))), u = i.props, l = i.state, d)
          y.getDerivedStateFromProps == null && i.componentWillMount != null && i.componentWillMount(), i.componentDidMount != null && i.__h.push(i.componentDidMount);
        else {
          if (y.getDerivedStateFromProps == null && h !== u && i.componentWillReceiveProps != null && i.componentWillReceiveProps(h, m), !i.__e && i.shouldComponentUpdate != null && i.shouldComponentUpdate(h, i.__s, m) === !1 || t.__v === n.__v) {
            for (i.props = h, i.state = i.__s, t.__v !== n.__v && (i.__d = !1), i.__v = t, t.__e = n.__e, t.__k = n.__k, t.__k.forEach(function(x) {
              x && (x.__ = t);
            }), E = 0; E < i._sb.length; E++)
              i.__h.push(i._sb[E]);
            i._sb = [], i.__h.length && a.push(i);
            break e;
          }
          i.componentWillUpdate != null && i.componentWillUpdate(h, i.__s, m), i.componentDidUpdate != null && i.__h.push(function() {
            i.componentDidUpdate(u, l, _);
          });
        }
        if (i.context = m, i.props = h, i.__v = t, i.__P = e, b = ue.__r, S = 0, "prototype" in y && y.prototype.render) {
          for (i.state = i.__s, i.__d = !1, b && b(t), p = i.render(i.props, i.state, i.context), $ = 0; $ < i._sb.length; $++)
            i.__h.push(i._sb[$]);
          i._sb = [];
        } else
          do
            i.__d = !1, b && b(t), p = i.render(i.props, i.state, i.context), i.state = i.__s;
          while (i.__d && ++S < 25);
        i.state = i.__s, i.getChildContext != null && (r = Ft(Ft({}, r), i.getChildContext())), d || i.getSnapshotBeforeUpdate == null || (_ = i.getSnapshotBeforeUpdate(u, l)), k = p != null && p.type === Is && p.key == null ? p.props.children : p, Af(e, Array.isArray(k) ? k : [k], t, n, r, s, o, a, c, f), i.base = t.__e, t.__h = null, i.__h.length && a.push(i), g && (i.__E = i.__ = null), i.__e = !1;
      } else
        o == null && t.__v === n.__v ? (t.__k = n.__k, t.__e = n.__e) : t.__e = Zp(n.__e, t, n, r, s, o, a, f);
    (p = ue.diffed) && p(t);
  } catch (x) {
    t.__v = null, (f || o != null) && (t.__e = c, t.__h = !!f, o[o.indexOf(c)] = null), ue.__e(x, t, n);
  }
}
function Jp(e, t) {
  ue.__c && ue.__c(t, e), e.some(function(n) {
    try {
      e = n.__h, n.__h = [], e.some(function(r) {
        r.call(n);
      });
    } catch (r) {
      ue.__e(r, n.__v);
    }
  });
}
function Zp(e, t, n, r, s, o, a, c) {
  var f, p, i, d = n.props, u = t.props, l = t.type, _ = 0;
  if (l === "svg" && (s = !0), o != null) {
    for (; _ < o.length; _++)
      if ((f = o[_]) && "setAttribute" in f == !!l && (l ? f.localName === l : f.nodeType === 3)) {
        e = f, o[_] = null;
        break;
      }
  }
  if (e == null) {
    if (l === null)
      return document.createTextNode(u);
    e = s ? document.createElementNS("http://www.w3.org/2000/svg", l) : document.createElement(l, u.is && u), o = null, c = !1;
  }
  if (l === null)
    d === u || c && e.data === u || (e.data = u);
  else {
    if (o = o && js.call(e.childNodes), p = (d = n.props || Ef).dangerouslySetInnerHTML, i = u.dangerouslySetInnerHTML, !c) {
      if (o != null)
        for (d = {}, _ = 0; _ < e.attributes.length; _++)
          d[e.attributes[_].name] = e.attributes[_].value;
      (i || p) && (i && (p && i.__html == p.__html || i.__html === e.innerHTML) || (e.innerHTML = i && i.__html || ""));
    }
    if (Kp(e, u, d, s, c), i)
      t.__k = [];
    else if (_ = t.props.children, Af(e, Array.isArray(_) ? _ : [_], t, n, r, s && l !== "foreignObject", o, a, o ? o[0] : n.__k && Wr(n, 0), c), o != null)
      for (_ = o.length; _--; )
        o[_] != null && Cf(o[_]);
    c || ("value" in u && (_ = u.value) !== void 0 && (_ !== e.value || l === "progress" && !_ || l === "option" && _ !== d.value) && ti(e, "value", _, d.value, !1), "checked" in u && (_ = u.checked) !== void 0 && _ !== e.checked && ti(e, "checked", _, d.checked, !1));
  }
  return e;
}
function Nf(e, t, n) {
  try {
    typeof e == "function" ? e(t) : e.current = t;
  } catch (r) {
    ue.__e(r, n);
  }
}
function Lf(e, t, n) {
  var r, s;
  if (ue.unmount && ue.unmount(e), (r = e.ref) && (r.current && r.current !== e.__e || Nf(r, null, t)), (r = e.__c) != null) {
    if (r.componentWillUnmount)
      try {
        r.componentWillUnmount();
      } catch (o) {
        ue.__e(o, t);
      }
    r.base = r.__P = null, e.__c = void 0;
  }
  if (r = e.__k)
    for (s = 0; s < r.length; s++)
      r[s] && Lf(r[s], t, n || typeof e.type != "function");
  n || e.__e == null || Cf(e.__e), e.__ = e.__e = e.__d = void 0;
}
function Qp(e, t, n) {
  return this.constructor(e, n);
}
js = Sf.slice, ue = { __e: function(e, t, n, r) {
  for (var s, o, a; t = t.__; )
    if ((s = t.__c) && !s.__)
      try {
        if ((o = s.constructor) && o.getDerivedStateFromError != null && (s.setState(o.getDerivedStateFromError(e)), a = s.__d), s.componentDidCatch != null && (s.componentDidCatch(e, r || {}), a = s.__d), a)
          return s.__E = s;
      } catch (c) {
        e = c;
      }
  throw e;
} }, kf = 0, xf = function(e) {
  return e != null && e.constructor === void 0;
}, hr.prototype.setState = function(e, t) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = Ft({}, this.state), typeof e == "function" && (e = e(Ft({}, n), this.props)), e && Ft(n, e), e != null && this.__v && (t && this._sb.push(t), nl(this));
}, hr.prototype.forceUpdate = function(e) {
  this.__v && (this.__e = !0, e && this.__h.push(e), nl(this));
}, hr.prototype.render = Is, dr = [], ei.__r = 0;
class Bs extends hr {
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
  handleItemClick(t, n, r, s) {
    r && r.call(s.target, s);
    const { onClickItem: o } = this.props;
    o && o.call(this, { item: t, index: n, event: s });
  }
  beforeRender() {
    var r;
    const t = { ...this.props }, n = (r = t.beforeRender) == null ? void 0 : r.call(this, t);
    return n && Object.assign(t, n), typeof t.items == "function" && (t.items = t.items.call(this)), t;
  }
  onRenderItem(t, n) {
    const { key: r = n, ...s } = t;
    return /* @__PURE__ */ is(en, {
      key: r,
      ...s
    });
  }
  renderItem(t, n, r) {
    const { itemRender: s, defaultBtnProps: o, onClickItem: a } = t, c = { key: r, ...n };
    if (o && Object.assign(c, o), a && (c.onClick = this.handleItemClick.bind(this, c, r, n.onClick)), s) {
      const f = s.call(this, c, is);
      if (xf(f))
        return f;
      typeof f == "object" && Object.assign(c, f);
    }
    return this.onRenderItem(c, r);
  }
  render() {
    const t = this.beforeRender(), {
      className: n,
      items: r,
      size: s,
      type: o,
      defaultBtnProps: a,
      children: c,
      itemRender: f,
      onClickItem: p,
      beforeRender: i,
      afterRender: d,
      beforeDestroy: u,
      ...l
    } = t;
    return /* @__PURE__ */ is("div", {
      className: U("btn-group", s ? `size-${s}` : "", n),
      ...l
    }, r && r.map(this.renderItem.bind(this, t)), c);
  }
}
function ed({
  ...e
}) {
  return /* @__PURE__ */ Jt(Bs, {
    ...e
  });
}
class Pf extends $n {
  render() {
    const { message: t, className: n, type: r, actions: s, close: o } = this.props, a = U([r, "border-none"]), c = s != null && s.length ? s.map((f) => ({ ...f, className: a })) : [];
    if (o) {
      const f = {
        name: "times",
        icon: "icon-times",
        className: a,
        action: function() {
          console.log("\u4F60\u70B9\u51FB\u4E86\u5173\u95ED\u6309\u94AE\u3002");
        }
      };
      c.push(f);
    }
    return /* @__PURE__ */ Jt("div", {
      class: U([n, r || "default", "messager"])
    }, /* @__PURE__ */ Jt("div", {
      class: "messager-content"
    }, t), /* @__PURE__ */ Jt(ed, {
      items: c
    }));
  }
}
N(Pf, "defaultProps");
class Rf extends $n {
  render() {
    const { className: t, placement: n } = this.props;
    return /* @__PURE__ */ Jt("div", {
      class: U([t || "", "messagers-holder", "col"]),
      "data-placement": n
    });
  }
}
N(Rf, "defaultProps");
class sl extends at {
  show(t, n) {
    console.log(t, n, "showFunc");
    const r = n != null && n.placement ? n.placement : "top", s = (n == null ? void 0 : n.close) !== !1;
    let o = document.querySelector(".messagers-holder[data-placement=" + r + "]");
    if (!o) {
      const f = document.createElement("div");
      document.body.appendChild(f);
      const p = {
        ...n,
        placement: r
      };
      el(Jt(Rf, p), f);
    }
    o = document.querySelector(".messagers-holder[data-placement=" + r + "]");
    const a = document.createElement("div");
    o.appendChild(a);
    const c = {
      ...n,
      message: t,
      placement: r,
      close: s
    };
    el(Jt(Pf, c), o, a);
  }
}
N(sl, "NAME", "messager"), N(sl, "DEFAULT", {
  placement: "top",
  type: "default",
  close: !0
});
var Us, _e, Hf, vr, al, Wf = {}, jf = [], td = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function zt(e, t) {
  for (var n in t)
    e[n] = t[n];
  return e;
}
function If(e) {
  var t = e.parentNode;
  t && t.removeChild(e);
}
function yo(e, t, n) {
  var r, s, o, a = {};
  for (o in t)
    o == "key" ? r = t[o] : o == "ref" ? s = t[o] : a[o] = t[o];
  if (arguments.length > 2 && (a.children = arguments.length > 3 ? Us.call(arguments, 2) : n), typeof e == "function" && e.defaultProps != null)
    for (o in e.defaultProps)
      a[o] === void 0 && (a[o] = e.defaultProps[o]);
  return Ao(e, a, r, s, null);
}
function Ao(e, t, n, r, s) {
  var o = { type: e, props: t, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: s == null ? ++Hf : s };
  return s == null && _e.vnode != null && _e.vnode(o), o;
}
function Fs(e) {
  return e.children;
}
function mr(e, t) {
  this.props = e, this.context = t;
}
function jr(e, t) {
  if (t == null)
    return e.__ ? jr(e.__, e.__.__k.indexOf(e) + 1) : null;
  for (var n; t < e.__k.length; t++)
    if ((n = e.__k[t]) != null && n.__e != null)
      return n.__e;
  return typeof e.type == "function" ? jr(e) : null;
}
function Bf(e) {
  var t, n;
  if ((e = e.__) != null && e.__c != null) {
    for (e.__e = e.__c.base = null, t = 0; t < e.__k.length; t++)
      if ((n = e.__k[t]) != null && n.__e != null) {
        e.__e = e.__c.base = n.__e;
        break;
      }
    return Bf(e);
  }
}
function ll(e) {
  (!e.__d && (e.__d = !0) && vr.push(e) && !ni.__r++ || al !== _e.debounceRendering) && ((al = _e.debounceRendering) || setTimeout)(ni);
}
function ni() {
  for (var e; ni.__r = vr.length; )
    e = vr.sort(function(t, n) {
      return t.__v.__b - n.__v.__b;
    }), vr = [], e.some(function(t) {
      var n, r, s, o, a, c;
      t.__d && (a = (o = (n = t).__v).__e, (c = n.__P) && (r = [], (s = zt({}, o)).__v = o.__v + 1, Vf(c, o, s, n.__n, c.ownerSVGElement !== void 0, o.__h != null ? [a] : null, r, a == null ? jr(o) : a, o.__h), rd(r, o), o.__e != a && Bf(o)));
    });
}
function Uf(e, t, n, r, s, o, a, c, f, p) {
  var i, d, u, l, _, g, h, v = r && r.__k || jf, m = v.length;
  for (n.__k = [], i = 0; i < t.length; i++)
    if ((l = n.__k[i] = (l = t[i]) == null || typeof l == "boolean" ? null : typeof l == "string" || typeof l == "number" || typeof l == "bigint" ? Ao(null, l, null, null, l) : Array.isArray(l) ? Ao(Fs, { children: l }, null, null, null) : l.__b > 0 ? Ao(l.type, l.props, l.key, l.ref ? l.ref : null, l.__v) : l) != null) {
      if (l.__ = n, l.__b = n.__b + 1, (u = v[i]) === null || u && l.key == u.key && l.type === u.type)
        v[i] = void 0;
      else
        for (d = 0; d < m; d++) {
          if ((u = v[d]) && l.key == u.key && l.type === u.type) {
            v[d] = void 0;
            break;
          }
          u = null;
        }
      Vf(e, l, u = u || Wf, s, o, a, c, f, p), _ = l.__e, (d = l.ref) && u.ref != d && (h || (h = []), u.ref && h.push(u.ref, null, l), h.push(d, l.__c || _, l)), _ != null ? (g == null && (g = _), typeof l.type == "function" && l.__k === u.__k ? l.__d = f = Ff(l, f, e) : f = zf(e, l, u, v, _, f), typeof n.type == "function" && (n.__d = f)) : f && u.__e == f && f.parentNode != e && (f = jr(u));
    }
  for (n.__e = g, i = m; i--; )
    v[i] != null && qf(v[i], v[i]);
  if (h)
    for (i = 0; i < h.length; i++)
      Yf(h[i], h[++i], h[++i]);
}
function Ff(e, t, n) {
  for (var r, s = e.__k, o = 0; s && o < s.length; o++)
    (r = s[o]) && (r.__ = e, t = typeof r.type == "function" ? Ff(r, t, n) : zf(n, r, r, s, r.__e, t));
  return t;
}
function zf(e, t, n, r, s, o) {
  var a, c, f;
  if (t.__d !== void 0)
    a = t.__d, t.__d = void 0;
  else if (n == null || s != o || s.parentNode == null)
    e:
      if (o == null || o.parentNode !== e)
        e.appendChild(s), a = null;
      else {
        for (c = o, f = 0; (c = c.nextSibling) && f < r.length; f += 2)
          if (c == s)
            break e;
        e.insertBefore(s, o), a = o;
      }
  return a !== void 0 ? a : s.nextSibling;
}
function nd(e, t, n, r, s) {
  var o;
  for (o in n)
    o === "children" || o === "key" || o in t || ri(e, o, null, n[o], r);
  for (o in t)
    s && typeof t[o] != "function" || o === "children" || o === "key" || o === "value" || o === "checked" || n[o] === t[o] || ri(e, o, t[o], n[o], r);
}
function cl(e, t, n) {
  t[0] === "-" ? e.setProperty(t, n) : e[t] = n == null ? "" : typeof n != "number" || td.test(t) ? n : n + "px";
}
function ri(e, t, n, r, s) {
  var o;
  e:
    if (t === "style")
      if (typeof n == "string")
        e.style.cssText = n;
      else {
        if (typeof r == "string" && (e.style.cssText = r = ""), r)
          for (t in r)
            n && t in n || cl(e.style, t, "");
        if (n)
          for (t in n)
            r && n[t] === r[t] || cl(e.style, t, n[t]);
      }
    else if (t[0] === "o" && t[1] === "n")
      o = t !== (t = t.replace(/Capture$/, "")), t = t.toLowerCase() in e ? t.toLowerCase().slice(2) : t.slice(2), e.l || (e.l = {}), e.l[t + o] = n, n ? r || e.addEventListener(t, o ? ul : fl, o) : e.removeEventListener(t, o ? ul : fl, o);
    else if (t !== "dangerouslySetInnerHTML") {
      if (s)
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
function fl(e) {
  this.l[e.type + !1](_e.event ? _e.event(e) : e);
}
function ul(e) {
  this.l[e.type + !0](_e.event ? _e.event(e) : e);
}
function Vf(e, t, n, r, s, o, a, c, f) {
  var p, i, d, u, l, _, g, h, v, m, E, b, S, $, k, y = t.type;
  if (t.constructor !== void 0)
    return null;
  n.__h != null && (f = n.__h, c = t.__e = n.__e, t.__h = null, o = [c]), (p = _e.__b) && p(t);
  try {
    e:
      if (typeof y == "function") {
        if (h = t.props, v = (p = y.contextType) && r[p.__c], m = p ? v ? v.props.value : p.__ : r, n.__c ? g = (i = t.__c = n.__c).__ = i.__E : ("prototype" in y && y.prototype.render ? t.__c = i = new y(h, m) : (t.__c = i = new mr(h, m), i.constructor = y, i.render = id), v && v.sub(i), i.props = h, i.state || (i.state = {}), i.context = m, i.__n = r, d = i.__d = !0, i.__h = [], i._sb = []), i.__s == null && (i.__s = i.state), y.getDerivedStateFromProps != null && (i.__s == i.state && (i.__s = zt({}, i.__s)), zt(i.__s, y.getDerivedStateFromProps(h, i.__s))), u = i.props, l = i.state, d)
          y.getDerivedStateFromProps == null && i.componentWillMount != null && i.componentWillMount(), i.componentDidMount != null && i.__h.push(i.componentDidMount);
        else {
          if (y.getDerivedStateFromProps == null && h !== u && i.componentWillReceiveProps != null && i.componentWillReceiveProps(h, m), !i.__e && i.shouldComponentUpdate != null && i.shouldComponentUpdate(h, i.__s, m) === !1 || t.__v === n.__v) {
            for (i.props = h, i.state = i.__s, t.__v !== n.__v && (i.__d = !1), i.__v = t, t.__e = n.__e, t.__k = n.__k, t.__k.forEach(function(x) {
              x && (x.__ = t);
            }), E = 0; E < i._sb.length; E++)
              i.__h.push(i._sb[E]);
            i._sb = [], i.__h.length && a.push(i);
            break e;
          }
          i.componentWillUpdate != null && i.componentWillUpdate(h, i.__s, m), i.componentDidUpdate != null && i.__h.push(function() {
            i.componentDidUpdate(u, l, _);
          });
        }
        if (i.context = m, i.props = h, i.__v = t, i.__P = e, b = _e.__r, S = 0, "prototype" in y && y.prototype.render) {
          for (i.state = i.__s, i.__d = !1, b && b(t), p = i.render(i.props, i.state, i.context), $ = 0; $ < i._sb.length; $++)
            i.__h.push(i._sb[$]);
          i._sb = [];
        } else
          do
            i.__d = !1, b && b(t), p = i.render(i.props, i.state, i.context), i.state = i.__s;
          while (i.__d && ++S < 25);
        i.state = i.__s, i.getChildContext != null && (r = zt(zt({}, r), i.getChildContext())), d || i.getSnapshotBeforeUpdate == null || (_ = i.getSnapshotBeforeUpdate(u, l)), k = p != null && p.type === Fs && p.key == null ? p.props.children : p, Uf(e, Array.isArray(k) ? k : [k], t, n, r, s, o, a, c, f), i.base = t.__e, t.__h = null, i.__h.length && a.push(i), g && (i.__E = i.__ = null), i.__e = !1;
      } else
        o == null && t.__v === n.__v ? (t.__k = n.__k, t.__e = n.__e) : t.__e = od(n.__e, t, n, r, s, o, a, f);
    (p = _e.diffed) && p(t);
  } catch (x) {
    t.__v = null, (f || o != null) && (t.__e = c, t.__h = !!f, o[o.indexOf(c)] = null), _e.__e(x, t, n);
  }
}
function rd(e, t) {
  _e.__c && _e.__c(t, e), e.some(function(n) {
    try {
      e = n.__h, n.__h = [], e.some(function(r) {
        r.call(n);
      });
    } catch (r) {
      _e.__e(r, n.__v);
    }
  });
}
function od(e, t, n, r, s, o, a, c) {
  var f, p, i, d = n.props, u = t.props, l = t.type, _ = 0;
  if (l === "svg" && (s = !0), o != null) {
    for (; _ < o.length; _++)
      if ((f = o[_]) && "setAttribute" in f == !!l && (l ? f.localName === l : f.nodeType === 3)) {
        e = f, o[_] = null;
        break;
      }
  }
  if (e == null) {
    if (l === null)
      return document.createTextNode(u);
    e = s ? document.createElementNS("http://www.w3.org/2000/svg", l) : document.createElement(l, u.is && u), o = null, c = !1;
  }
  if (l === null)
    d === u || c && e.data === u || (e.data = u);
  else {
    if (o = o && Us.call(e.childNodes), p = (d = n.props || Wf).dangerouslySetInnerHTML, i = u.dangerouslySetInnerHTML, !c) {
      if (o != null)
        for (d = {}, _ = 0; _ < e.attributes.length; _++)
          d[e.attributes[_].name] = e.attributes[_].value;
      (i || p) && (i && (p && i.__html == p.__html || i.__html === e.innerHTML) || (e.innerHTML = i && i.__html || ""));
    }
    if (nd(e, u, d, s, c), i)
      t.__k = [];
    else if (_ = t.props.children, Uf(e, Array.isArray(_) ? _ : [_], t, n, r, s && l !== "foreignObject", o, a, o ? o[0] : n.__k && jr(n, 0), c), o != null)
      for (_ = o.length; _--; )
        o[_] != null && If(o[_]);
    c || ("value" in u && (_ = u.value) !== void 0 && (_ !== e.value || l === "progress" && !_ || l === "option" && _ !== d.value) && ri(e, "value", _, d.value, !1), "checked" in u && (_ = u.checked) !== void 0 && _ !== e.checked && ri(e, "checked", _, d.checked, !1));
  }
  return e;
}
function Yf(e, t, n) {
  try {
    typeof e == "function" ? e(t) : e.current = t;
  } catch (r) {
    _e.__e(r, n);
  }
}
function qf(e, t, n) {
  var r, s;
  if (_e.unmount && _e.unmount(e), (r = e.ref) && (r.current && r.current !== e.__e || Yf(r, null, t)), (r = e.__c) != null) {
    if (r.componentWillUnmount)
      try {
        r.componentWillUnmount();
      } catch (o) {
        _e.__e(o, t);
      }
    r.base = r.__P = null, e.__c = void 0;
  }
  if (r = e.__k)
    for (s = 0; s < r.length; s++)
      r[s] && qf(r[s], t, n || typeof e.type != "function");
  n || e.__e == null || If(e.__e), e.__ = e.__e = e.__d = void 0;
}
function id(e, t, n) {
  return this.constructor(e, n);
}
Us = jf.slice, _e = { __e: function(e, t, n, r) {
  for (var s, o, a; t = t.__; )
    if ((s = t.__c) && !s.__)
      try {
        if ((o = s.constructor) && o.getDerivedStateFromError != null && (s.setState(o.getDerivedStateFromError(e)), a = s.__d), s.componentDidCatch != null && (s.componentDidCatch(e, r || {}), a = s.__d), a)
          return s.__E = s;
      } catch (c) {
        e = c;
      }
  throw e;
} }, Hf = 0, mr.prototype.setState = function(e, t) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = zt({}, this.state), typeof e == "function" && (e = e(zt({}, n), this.props)), e && zt(n, e), e != null && this.__v && (t && this._sb.push(t), ll(this));
}, mr.prototype.forceUpdate = function(e) {
  this.__v && (this.__e = !0, e && this.__h.push(e), ll(this));
}, mr.prototype.render = Fs, vr = [], ni.__r = 0;
class _s extends mr {
  render() {
    const { percent: t, circleSize: n, circleBorderSize: r, circleBgColor: s, circleColor: o } = this.props, a = (n - r) / 2, c = n / 2;
    return /* @__PURE__ */ yo("svg", {
      width: n,
      height: n,
      class: "progress-circle"
    }, /* @__PURE__ */ yo("circle", {
      cx: c,
      cy: c,
      r: a,
      stroke: s,
      "stroke-width": r
    }), /* @__PURE__ */ yo("circle", {
      cx: c,
      cy: c,
      r: a,
      stroke: o,
      "stroke-dasharray": Math.PI * a * 2,
      "stroke-dashoffset": Math.PI * a * 2 * (100 - t) / 100,
      "stroke-width": r
    }), /* @__PURE__ */ yo("text", {
      x: c,
      y: c + r / 4,
      "dominant-baseline": "middle",
      style: { fontSize: `${a}px` }
    }, Math.round(t)));
  }
}
N(_s, "NAME", "zui.progress-circle"), N(_s, "defaultProps", {
  circleSize: 24,
  circleBorderSize: 2,
  circleBgColor: "var(--progress-circle-bg)",
  circleColor: "var(--progress-circle-bar-color)"
});
class _l extends Je {
}
N(_l, "NAME", "table-sorter"), N(_l, "Component", _s);
function sd(e) {
  const t = typeof e == "string" ? document.querySelector(e) : e;
  if (!t)
    return !1;
  if (t instanceof HTMLInputElement || t instanceof HTMLTextAreaElement)
    return t.select(), !0;
  if (window.getSelection) {
    const n = window.getSelection();
    if (n) {
      const r = document.createRange();
      return r.selectNodeContents(t), n.removeAllRanges(), n.addRange(r), !0;
    }
  }
  return !1;
}
function ad(e) {
  document.readyState !== "loading" ? e() : document.addEventListener("DOMContentLoaded", e);
}
function ld(e, t) {
  const n = typeof e == "string" ? document.querySelector(e) : e;
  if (!n)
    return !1;
  const r = n.getBoundingClientRect(), s = window.innerHeight || document.documentElement.clientHeight, o = window.innerWidth || document.documentElement.clientWidth;
  if (t != null && t.fullyCheck)
    return r.left >= 0 && r.top >= 0 && r.left + r.width <= o && r.top + r.height <= s;
  const a = r.top <= s && r.top + r.height >= 0, c = r.left <= o && r.left + r.width >= 0;
  return a && c;
}
const xy = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  selectText: sd,
  domReady: ad,
  isElementVisible: ld,
  getClassList: zi,
  classes: U
}, Symbol.toStringTag, { value: "Module" }));
let cd = (e = 21) => crypto.getRandomValues(new Uint8Array(e)).reduce((t, n) => (n &= 63, n < 36 ? t += n.toString(36) : n < 62 ? t += (n - 26).toString(36).toUpperCase() : n > 62 ? t += "-" : t += "_", t), "");
var to, Lt, tt, En, Sn, Mo;
const Sa = class {
  constructor(t, n = "local") {
    P(this, Sn);
    P(this, to, void 0);
    P(this, Lt, void 0);
    P(this, tt, void 0);
    P(this, En, void 0);
    W(this, to, n), W(this, Lt, `ZUI_STORE:${t != null ? t : cd()}`), W(this, tt, n === "local" ? localStorage : sessionStorage);
  }
  get type() {
    return w(this, to);
  }
  get session() {
    return this.type === "session" ? this : (w(this, En) || W(this, En, new Sa(w(this, Lt), "session")), w(this, En));
  }
  get(t, n) {
    const r = w(this, tt).getItem(ne(this, Sn, Mo).call(this, t));
    return typeof r == "string" ? JSON.parse(r) : r != null ? r : n;
  }
  set(t, n) {
    if (n == null)
      return this.remove(t);
    w(this, tt).setItem(ne(this, Sn, Mo).call(this, t), JSON.stringify(n));
  }
  remove(t) {
    w(this, tt).removeItem(ne(this, Sn, Mo).call(this, t));
  }
  each(t) {
    for (let n = 0; n < w(this, tt).length; n++) {
      const r = w(this, tt).key(n);
      if (r != null && r.startsWith(w(this, Lt))) {
        const s = w(this, tt).getItem(r);
        typeof s == "string" && t(r.substring(w(this, Lt).length + 1), JSON.parse(s));
      }
    }
  }
  getAll() {
    const t = {};
    return this.each((n, r) => {
      t[n] = r;
    }), t;
  }
};
let oi = Sa;
to = new WeakMap(), Lt = new WeakMap(), tt = new WeakMap(), En = new WeakMap(), Sn = new WeakSet(), Mo = function(t) {
  return `${w(this, Lt)}:${t}`;
};
const fd = new oi("DEFAULT");
function ud(e, t = "local") {
  return new oi(e, t);
}
Object.assign(fd, { create: ud });
var zs, pe, Gf, gr, pl, Xf = {}, Kf = [], _d = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function Vt(e, t) {
  for (var n in t)
    e[n] = t[n];
  return e;
}
function Jf(e) {
  var t = e.parentNode;
  t && t.removeChild(e);
}
function ss(e, t, n) {
  var r, s, o, a = {};
  for (o in t)
    o == "key" ? r = t[o] : o == "ref" ? s = t[o] : a[o] = t[o];
  if (arguments.length > 2 && (a.children = arguments.length > 3 ? zs.call(arguments, 2) : n), typeof e == "function" && e.defaultProps != null)
    for (o in e.defaultProps)
      a[o] === void 0 && (a[o] = e.defaultProps[o]);
  return To(e, a, r, s, null);
}
function To(e, t, n, r, s) {
  var o = { type: e, props: t, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: s == null ? ++Gf : s };
  return s == null && pe.vnode != null && pe.vnode(o), o;
}
function Vs(e) {
  return e.children;
}
function yr(e, t) {
  this.props = e, this.context = t;
}
function Ir(e, t) {
  if (t == null)
    return e.__ ? Ir(e.__, e.__.__k.indexOf(e) + 1) : null;
  for (var n; t < e.__k.length; t++)
    if ((n = e.__k[t]) != null && n.__e != null)
      return n.__e;
  return typeof e.type == "function" ? Ir(e) : null;
}
function Zf(e) {
  var t, n;
  if ((e = e.__) != null && e.__c != null) {
    for (e.__e = e.__c.base = null, t = 0; t < e.__k.length; t++)
      if ((n = e.__k[t]) != null && n.__e != null) {
        e.__e = e.__c.base = n.__e;
        break;
      }
    return Zf(e);
  }
}
function dl(e) {
  (!e.__d && (e.__d = !0) && gr.push(e) && !ii.__r++ || pl !== pe.debounceRendering) && ((pl = pe.debounceRendering) || setTimeout)(ii);
}
function ii() {
  for (var e; ii.__r = gr.length; )
    e = gr.sort(function(t, n) {
      return t.__v.__b - n.__v.__b;
    }), gr = [], e.some(function(t) {
      var n, r, s, o, a, c;
      t.__d && (a = (o = (n = t).__v).__e, (c = n.__P) && (r = [], (s = Vt({}, o)).__v = o.__v + 1, nu(c, o, s, n.__n, c.ownerSVGElement !== void 0, o.__h != null ? [a] : null, r, a == null ? Ir(o) : a, o.__h), dd(r, o), o.__e != a && Zf(o)));
    });
}
function Qf(e, t, n, r, s, o, a, c, f, p) {
  var i, d, u, l, _, g, h, v = r && r.__k || Kf, m = v.length;
  for (n.__k = [], i = 0; i < t.length; i++)
    if ((l = n.__k[i] = (l = t[i]) == null || typeof l == "boolean" ? null : typeof l == "string" || typeof l == "number" || typeof l == "bigint" ? To(null, l, null, null, l) : Array.isArray(l) ? To(Vs, { children: l }, null, null, null) : l.__b > 0 ? To(l.type, l.props, l.key, l.ref ? l.ref : null, l.__v) : l) != null) {
      if (l.__ = n, l.__b = n.__b + 1, (u = v[i]) === null || u && l.key == u.key && l.type === u.type)
        v[i] = void 0;
      else
        for (d = 0; d < m; d++) {
          if ((u = v[d]) && l.key == u.key && l.type === u.type) {
            v[d] = void 0;
            break;
          }
          u = null;
        }
      nu(e, l, u = u || Xf, s, o, a, c, f, p), _ = l.__e, (d = l.ref) && u.ref != d && (h || (h = []), u.ref && h.push(u.ref, null, l), h.push(d, l.__c || _, l)), _ != null ? (g == null && (g = _), typeof l.type == "function" && l.__k === u.__k ? l.__d = f = eu(l, f, e) : f = tu(e, l, u, v, _, f), typeof n.type == "function" && (n.__d = f)) : f && u.__e == f && f.parentNode != e && (f = Ir(u));
    }
  for (n.__e = g, i = m; i--; )
    v[i] != null && ou(v[i], v[i]);
  if (h)
    for (i = 0; i < h.length; i++)
      ru(h[i], h[++i], h[++i]);
}
function eu(e, t, n) {
  for (var r, s = e.__k, o = 0; s && o < s.length; o++)
    (r = s[o]) && (r.__ = e, t = typeof r.type == "function" ? eu(r, t, n) : tu(n, r, r, s, r.__e, t));
  return t;
}
function tu(e, t, n, r, s, o) {
  var a, c, f;
  if (t.__d !== void 0)
    a = t.__d, t.__d = void 0;
  else if (n == null || s != o || s.parentNode == null)
    e:
      if (o == null || o.parentNode !== e)
        e.appendChild(s), a = null;
      else {
        for (c = o, f = 0; (c = c.nextSibling) && f < r.length; f += 2)
          if (c == s)
            break e;
        e.insertBefore(s, o), a = o;
      }
  return a !== void 0 ? a : s.nextSibling;
}
function pd(e, t, n, r, s) {
  var o;
  for (o in n)
    o === "children" || o === "key" || o in t || si(e, o, null, n[o], r);
  for (o in t)
    s && typeof t[o] != "function" || o === "children" || o === "key" || o === "value" || o === "checked" || n[o] === t[o] || si(e, o, t[o], n[o], r);
}
function hl(e, t, n) {
  t[0] === "-" ? e.setProperty(t, n) : e[t] = n == null ? "" : typeof n != "number" || _d.test(t) ? n : n + "px";
}
function si(e, t, n, r, s) {
  var o;
  e:
    if (t === "style")
      if (typeof n == "string")
        e.style.cssText = n;
      else {
        if (typeof r == "string" && (e.style.cssText = r = ""), r)
          for (t in r)
            n && t in n || hl(e.style, t, "");
        if (n)
          for (t in n)
            r && n[t] === r[t] || hl(e.style, t, n[t]);
      }
    else if (t[0] === "o" && t[1] === "n")
      o = t !== (t = t.replace(/Capture$/, "")), t = t.toLowerCase() in e ? t.toLowerCase().slice(2) : t.slice(2), e.l || (e.l = {}), e.l[t + o] = n, n ? r || e.addEventListener(t, o ? ml : vl, o) : e.removeEventListener(t, o ? ml : vl, o);
    else if (t !== "dangerouslySetInnerHTML") {
      if (s)
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
function vl(e) {
  this.l[e.type + !1](pe.event ? pe.event(e) : e);
}
function ml(e) {
  this.l[e.type + !0](pe.event ? pe.event(e) : e);
}
function nu(e, t, n, r, s, o, a, c, f) {
  var p, i, d, u, l, _, g, h, v, m, E, b, S, $, k, y = t.type;
  if (t.constructor !== void 0)
    return null;
  n.__h != null && (f = n.__h, c = t.__e = n.__e, t.__h = null, o = [c]), (p = pe.__b) && p(t);
  try {
    e:
      if (typeof y == "function") {
        if (h = t.props, v = (p = y.contextType) && r[p.__c], m = p ? v ? v.props.value : p.__ : r, n.__c ? g = (i = t.__c = n.__c).__ = i.__E : ("prototype" in y && y.prototype.render ? t.__c = i = new y(h, m) : (t.__c = i = new yr(h, m), i.constructor = y, i.render = vd), v && v.sub(i), i.props = h, i.state || (i.state = {}), i.context = m, i.__n = r, d = i.__d = !0, i.__h = [], i._sb = []), i.__s == null && (i.__s = i.state), y.getDerivedStateFromProps != null && (i.__s == i.state && (i.__s = Vt({}, i.__s)), Vt(i.__s, y.getDerivedStateFromProps(h, i.__s))), u = i.props, l = i.state, d)
          y.getDerivedStateFromProps == null && i.componentWillMount != null && i.componentWillMount(), i.componentDidMount != null && i.__h.push(i.componentDidMount);
        else {
          if (y.getDerivedStateFromProps == null && h !== u && i.componentWillReceiveProps != null && i.componentWillReceiveProps(h, m), !i.__e && i.shouldComponentUpdate != null && i.shouldComponentUpdate(h, i.__s, m) === !1 || t.__v === n.__v) {
            for (i.props = h, i.state = i.__s, t.__v !== n.__v && (i.__d = !1), i.__v = t, t.__e = n.__e, t.__k = n.__k, t.__k.forEach(function(x) {
              x && (x.__ = t);
            }), E = 0; E < i._sb.length; E++)
              i.__h.push(i._sb[E]);
            i._sb = [], i.__h.length && a.push(i);
            break e;
          }
          i.componentWillUpdate != null && i.componentWillUpdate(h, i.__s, m), i.componentDidUpdate != null && i.__h.push(function() {
            i.componentDidUpdate(u, l, _);
          });
        }
        if (i.context = m, i.props = h, i.__v = t, i.__P = e, b = pe.__r, S = 0, "prototype" in y && y.prototype.render) {
          for (i.state = i.__s, i.__d = !1, b && b(t), p = i.render(i.props, i.state, i.context), $ = 0; $ < i._sb.length; $++)
            i.__h.push(i._sb[$]);
          i._sb = [];
        } else
          do
            i.__d = !1, b && b(t), p = i.render(i.props, i.state, i.context), i.state = i.__s;
          while (i.__d && ++S < 25);
        i.state = i.__s, i.getChildContext != null && (r = Vt(Vt({}, r), i.getChildContext())), d || i.getSnapshotBeforeUpdate == null || (_ = i.getSnapshotBeforeUpdate(u, l)), k = p != null && p.type === Vs && p.key == null ? p.props.children : p, Qf(e, Array.isArray(k) ? k : [k], t, n, r, s, o, a, c, f), i.base = t.__e, t.__h = null, i.__h.length && a.push(i), g && (i.__E = i.__ = null), i.__e = !1;
      } else
        o == null && t.__v === n.__v ? (t.__k = n.__k, t.__e = n.__e) : t.__e = hd(n.__e, t, n, r, s, o, a, f);
    (p = pe.diffed) && p(t);
  } catch (x) {
    t.__v = null, (f || o != null) && (t.__e = c, t.__h = !!f, o[o.indexOf(c)] = null), pe.__e(x, t, n);
  }
}
function dd(e, t) {
  pe.__c && pe.__c(t, e), e.some(function(n) {
    try {
      e = n.__h, n.__h = [], e.some(function(r) {
        r.call(n);
      });
    } catch (r) {
      pe.__e(r, n.__v);
    }
  });
}
function hd(e, t, n, r, s, o, a, c) {
  var f, p, i, d = n.props, u = t.props, l = t.type, _ = 0;
  if (l === "svg" && (s = !0), o != null) {
    for (; _ < o.length; _++)
      if ((f = o[_]) && "setAttribute" in f == !!l && (l ? f.localName === l : f.nodeType === 3)) {
        e = f, o[_] = null;
        break;
      }
  }
  if (e == null) {
    if (l === null)
      return document.createTextNode(u);
    e = s ? document.createElementNS("http://www.w3.org/2000/svg", l) : document.createElement(l, u.is && u), o = null, c = !1;
  }
  if (l === null)
    d === u || c && e.data === u || (e.data = u);
  else {
    if (o = o && zs.call(e.childNodes), p = (d = n.props || Xf).dangerouslySetInnerHTML, i = u.dangerouslySetInnerHTML, !c) {
      if (o != null)
        for (d = {}, _ = 0; _ < e.attributes.length; _++)
          d[e.attributes[_].name] = e.attributes[_].value;
      (i || p) && (i && (p && i.__html == p.__html || i.__html === e.innerHTML) || (e.innerHTML = i && i.__html || ""));
    }
    if (pd(e, u, d, s, c), i)
      t.__k = [];
    else if (_ = t.props.children, Qf(e, Array.isArray(_) ? _ : [_], t, n, r, s && l !== "foreignObject", o, a, o ? o[0] : n.__k && Ir(n, 0), c), o != null)
      for (_ = o.length; _--; )
        o[_] != null && Jf(o[_]);
    c || ("value" in u && (_ = u.value) !== void 0 && (_ !== e.value || l === "progress" && !_ || l === "option" && _ !== d.value) && si(e, "value", _, d.value, !1), "checked" in u && (_ = u.checked) !== void 0 && _ !== e.checked && si(e, "checked", _, d.checked, !1));
  }
  return e;
}
function ru(e, t, n) {
  try {
    typeof e == "function" ? e(t) : e.current = t;
  } catch (r) {
    pe.__e(r, n);
  }
}
function ou(e, t, n) {
  var r, s;
  if (pe.unmount && pe.unmount(e), (r = e.ref) && (r.current && r.current !== e.__e || ru(r, null, t)), (r = e.__c) != null) {
    if (r.componentWillUnmount)
      try {
        r.componentWillUnmount();
      } catch (o) {
        pe.__e(o, t);
      }
    r.base = r.__P = null, e.__c = void 0;
  }
  if (r = e.__k)
    for (s = 0; s < r.length; s++)
      r[s] && ou(r[s], t, n || typeof e.type != "function");
  n || e.__e == null || Jf(e.__e), e.__ = e.__e = e.__d = void 0;
}
function vd(e, t, n) {
  return this.constructor(e, n);
}
zs = Kf.slice, pe = { __e: function(e, t, n, r) {
  for (var s, o, a; t = t.__; )
    if ((s = t.__c) && !s.__)
      try {
        if ((o = s.constructor) && o.getDerivedStateFromError != null && (s.setState(o.getDerivedStateFromError(e)), a = s.__d), s.componentDidCatch != null && (s.componentDidCatch(e, r || {}), a = s.__d), a)
          return s.__E = s;
      } catch (c) {
        e = c;
      }
  throw e;
} }, Gf = 0, yr.prototype.setState = function(e, t) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = Vt({}, this.state), typeof e == "function" && (e = e(Vt({}, n), this.props)), e && Vt(n, e), e != null && this.__v && (t && this._sb.push(t), dl(this));
}, yr.prototype.forceUpdate = function(e) {
  this.__v && (this.__e = !0, e && this.__h.push(e), dl(this));
}, yr.prototype.render = Vs, gr = [], ii.__r = 0;
function md(e) {
  if (e.indexOf("#") === 0 && (e = e.slice(1)), e.length === 3 && (e = e[0] + e[0] + e[1] + e[1] + e[2] + e[2]), e.length !== 6)
    throw new Error(`Invalid HEX color "${e}".`);
  return [
    parseInt(e.slice(0, 2), 16),
    parseInt(e.slice(2, 4), 16),
    parseInt(e.slice(4, 6), 16)
  ];
}
function gd(e) {
  const [t, n, r] = typeof e == "string" ? md(e) : e;
  return t * 0.299 + n * 0.587 + r * 0.114 > 186;
}
function gl(e, t) {
  var n, r;
  return gd(e) ? (n = t == null ? void 0 : t.dark) != null ? n : "#333333" : (r = t == null ? void 0 : t.light) != null ? r : "#ffffff";
}
function yl(e, t = 255) {
  return Math.min(Math.max(e, 0), t);
}
function yd(e, t, n) {
  e = e % 360 / 360, t = yl(t), n = yl(n);
  const r = n <= 0.5 ? n * (t + 1) : n + t - n * t, s = n * 2 - r, o = (a) => (a = a < 0 ? a + 1 : a > 1 ? a - 1 : a, a * 6 < 1 ? s + (r - s) * a * 6 : a * 2 < 1 ? r : a * 3 < 2 ? s + (r - s) * (2 / 3 - a) * 6 : s);
  return [
    o(e + 1 / 3) * 255,
    o(e) * 255,
    o(e - 1 / 3) * 255
  ];
}
function bd(e) {
  let t = 0;
  if (typeof e != "string" && (e = String(e)), e && e.length)
    for (let n = 0; n < e.length; ++n)
      t += (n + 1) * e.charCodeAt(n);
  return t;
}
function wd(e, t) {
  return /^[\u4e00-\u9fa5\s]+$/.test(e) ? e = e.length <= t ? e : e.substring(e.length - t) : /^[A-Za-z\d\s]+$/.test(e) ? e = e[0].toUpperCase() : e = e.length <= t ? e : e.substring(0, t), e;
}
class $d extends yr {
  render() {
    const {
      className: t,
      style: n,
      size: r = "",
      circle: s,
      rounded: o,
      background: a,
      foreColor: c,
      text: f,
      code: p,
      maxTextLength: i = 2,
      src: d,
      hueDistance: u = 43,
      saturation: l = 0.4,
      lightness: _ = 0.6,
      children: g,
      ...h
    } = this.props, v = ["avatar", t], m = { ...n, background: a, color: c };
    let E = 32;
    r && (typeof r == "number" ? (m.width = `${r}px`, m.height = `${r}px`, m.fontSize = `${Math.max(12, Math.round(r / 2))}px`, E = r) : (v.push(`size-${r}`), E = { xs: 20, sm: 24, lg: 48, xl: 80 }[r])), s ? v.push("circle") : o && (typeof o == "number" ? m.borderRadius = `${o}px` : v.push(`rounded-${o}`));
    let b;
    if (d)
      v.push("has-img"), b = /* @__PURE__ */ ss("img", {
        className: "avatar-img",
        src: d,
        alt: f
      });
    else if (f != null && f.length) {
      const S = wd(f, i);
      if (v.push("has-text", `has-text-${S.length}`), a)
        !c && a && (m.color = gl(a));
      else {
        const k = p != null ? p : f, y = (typeof k == "number" ? k : bd(k)) * u % 360;
        if (m.background = `hsl(${y},${l * 100}%,${_ * 100}%)`, !c) {
          const x = yd(y, l, _);
          m.color = gl(x);
        }
      }
      let $;
      E && E < 14 * S.length && ($ = { transform: `scale(${E / (14 * S.length)})`, whiteSpace: "nowrap" }), b = /* @__PURE__ */ ss("div", {
        "data-actualSize": E,
        className: "avatar-text",
        style: $
      }, S);
    }
    return /* @__PURE__ */ ss("div", {
      className: U(v),
      style: m,
      ...h
    }, b, g);
  }
}
class bl extends Je {
}
N(bl, "NAME", "avatar"), N(bl, "Component", $d);
class wl extends Je {
}
N(wl, "NAME", "btngroup"), N(wl, "Component", Bs);
var qi, ie, iu, br, $l, ai = {}, su = [], kd = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function Yt(e, t) {
  for (var n in t)
    e[n] = t[n];
  return e;
}
function au(e) {
  var t = e.parentNode;
  t && t.removeChild(e);
}
function B(e, t, n) {
  var r, s, o, a = {};
  for (o in t)
    o == "key" ? r = t[o] : o == "ref" ? s = t[o] : a[o] = t[o];
  if (arguments.length > 2 && (a.children = arguments.length > 3 ? qi.call(arguments, 2) : n), typeof e == "function" && e.defaultProps != null)
    for (o in e.defaultProps)
      a[o] === void 0 && (a[o] = e.defaultProps[o]);
  return Do(e, a, r, s, null);
}
function Do(e, t, n, r, s) {
  var o = { type: e, props: t, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: s == null ? ++iu : s };
  return s == null && ie.vnode != null && ie.vnode(o), o;
}
function xd() {
  return { current: null };
}
function Gi(e) {
  return e.children;
}
function wr(e, t) {
  this.props = e, this.context = t;
}
function Br(e, t) {
  if (t == null)
    return e.__ ? Br(e.__, e.__.__k.indexOf(e) + 1) : null;
  for (var n; t < e.__k.length; t++)
    if ((n = e.__k[t]) != null && n.__e != null)
      return n.__e;
  return typeof e.type == "function" ? Br(e) : null;
}
function lu(e) {
  var t, n;
  if ((e = e.__) != null && e.__c != null) {
    for (e.__e = e.__c.base = null, t = 0; t < e.__k.length; t++)
      if ((n = e.__k[t]) != null && n.__e != null) {
        e.__e = e.__c.base = n.__e;
        break;
      }
    return lu(e);
  }
}
function kl(e) {
  (!e.__d && (e.__d = !0) && br.push(e) && !li.__r++ || $l !== ie.debounceRendering) && (($l = ie.debounceRendering) || setTimeout)(li);
}
function li() {
  for (var e; li.__r = br.length; )
    e = br.sort(function(t, n) {
      return t.__v.__b - n.__v.__b;
    }), br = [], e.some(function(t) {
      var n, r, s, o, a, c;
      t.__d && (a = (o = (n = t).__v).__e, (c = n.__P) && (r = [], (s = Yt({}, o)).__v = o.__v + 1, Ys(c, o, s, n.__n, c.ownerSVGElement !== void 0, o.__h != null ? [a] : null, r, a == null ? Br(o) : a, o.__h), _u(r, o), o.__e != a && lu(o)));
    });
}
function cu(e, t, n, r, s, o, a, c, f, p) {
  var i, d, u, l, _, g, h, v = r && r.__k || su, m = v.length;
  for (n.__k = [], i = 0; i < t.length; i++)
    if ((l = n.__k[i] = (l = t[i]) == null || typeof l == "boolean" ? null : typeof l == "string" || typeof l == "number" || typeof l == "bigint" ? Do(null, l, null, null, l) : Array.isArray(l) ? Do(Gi, { children: l }, null, null, null) : l.__b > 0 ? Do(l.type, l.props, l.key, l.ref ? l.ref : null, l.__v) : l) != null) {
      if (l.__ = n, l.__b = n.__b + 1, (u = v[i]) === null || u && l.key == u.key && l.type === u.type)
        v[i] = void 0;
      else
        for (d = 0; d < m; d++) {
          if ((u = v[d]) && l.key == u.key && l.type === u.type) {
            v[d] = void 0;
            break;
          }
          u = null;
        }
      Ys(e, l, u = u || ai, s, o, a, c, f, p), _ = l.__e, (d = l.ref) && u.ref != d && (h || (h = []), u.ref && h.push(u.ref, null, l), h.push(d, l.__c || _, l)), _ != null ? (g == null && (g = _), typeof l.type == "function" && l.__k === u.__k ? l.__d = f = fu(l, f, e) : f = uu(e, l, u, v, _, f), typeof n.type == "function" && (n.__d = f)) : f && u.__e == f && f.parentNode != e && (f = Br(u));
    }
  for (n.__e = g, i = m; i--; )
    v[i] != null && du(v[i], v[i]);
  if (h)
    for (i = 0; i < h.length; i++)
      pu(h[i], h[++i], h[++i]);
}
function fu(e, t, n) {
  for (var r, s = e.__k, o = 0; s && o < s.length; o++)
    (r = s[o]) && (r.__ = e, t = typeof r.type == "function" ? fu(r, t, n) : uu(n, r, r, s, r.__e, t));
  return t;
}
function uu(e, t, n, r, s, o) {
  var a, c, f;
  if (t.__d !== void 0)
    a = t.__d, t.__d = void 0;
  else if (n == null || s != o || s.parentNode == null)
    e:
      if (o == null || o.parentNode !== e)
        e.appendChild(s), a = null;
      else {
        for (c = o, f = 0; (c = c.nextSibling) && f < r.length; f += 2)
          if (c == s)
            break e;
        e.insertBefore(s, o), a = o;
      }
  return a !== void 0 ? a : s.nextSibling;
}
function Ed(e, t, n, r, s) {
  var o;
  for (o in n)
    o === "children" || o === "key" || o in t || ci(e, o, null, n[o], r);
  for (o in t)
    s && typeof t[o] != "function" || o === "children" || o === "key" || o === "value" || o === "checked" || n[o] === t[o] || ci(e, o, t[o], n[o], r);
}
function xl(e, t, n) {
  t[0] === "-" ? e.setProperty(t, n) : e[t] = n == null ? "" : typeof n != "number" || kd.test(t) ? n : n + "px";
}
function ci(e, t, n, r, s) {
  var o;
  e:
    if (t === "style")
      if (typeof n == "string")
        e.style.cssText = n;
      else {
        if (typeof r == "string" && (e.style.cssText = r = ""), r)
          for (t in r)
            n && t in n || xl(e.style, t, "");
        if (n)
          for (t in n)
            r && n[t] === r[t] || xl(e.style, t, n[t]);
      }
    else if (t[0] === "o" && t[1] === "n")
      o = t !== (t = t.replace(/Capture$/, "")), t = t.toLowerCase() in e ? t.toLowerCase().slice(2) : t.slice(2), e.l || (e.l = {}), e.l[t + o] = n, n ? r || e.addEventListener(t, o ? Sl : El, o) : e.removeEventListener(t, o ? Sl : El, o);
    else if (t !== "dangerouslySetInnerHTML") {
      if (s)
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
function El(e) {
  this.l[e.type + !1](ie.event ? ie.event(e) : e);
}
function Sl(e) {
  this.l[e.type + !0](ie.event ? ie.event(e) : e);
}
function Ys(e, t, n, r, s, o, a, c, f) {
  var p, i, d, u, l, _, g, h, v, m, E, b, S, $, k, y = t.type;
  if (t.constructor !== void 0)
    return null;
  n.__h != null && (f = n.__h, c = t.__e = n.__e, t.__h = null, o = [c]), (p = ie.__b) && p(t);
  try {
    e:
      if (typeof y == "function") {
        if (h = t.props, v = (p = y.contextType) && r[p.__c], m = p ? v ? v.props.value : p.__ : r, n.__c ? g = (i = t.__c = n.__c).__ = i.__E : ("prototype" in y && y.prototype.render ? t.__c = i = new y(h, m) : (t.__c = i = new wr(h, m), i.constructor = y, i.render = Cd), v && v.sub(i), i.props = h, i.state || (i.state = {}), i.context = m, i.__n = r, d = i.__d = !0, i.__h = [], i._sb = []), i.__s == null && (i.__s = i.state), y.getDerivedStateFromProps != null && (i.__s == i.state && (i.__s = Yt({}, i.__s)), Yt(i.__s, y.getDerivedStateFromProps(h, i.__s))), u = i.props, l = i.state, d)
          y.getDerivedStateFromProps == null && i.componentWillMount != null && i.componentWillMount(), i.componentDidMount != null && i.__h.push(i.componentDidMount);
        else {
          if (y.getDerivedStateFromProps == null && h !== u && i.componentWillReceiveProps != null && i.componentWillReceiveProps(h, m), !i.__e && i.shouldComponentUpdate != null && i.shouldComponentUpdate(h, i.__s, m) === !1 || t.__v === n.__v) {
            for (i.props = h, i.state = i.__s, t.__v !== n.__v && (i.__d = !1), i.__v = t, t.__e = n.__e, t.__k = n.__k, t.__k.forEach(function(x) {
              x && (x.__ = t);
            }), E = 0; E < i._sb.length; E++)
              i.__h.push(i._sb[E]);
            i._sb = [], i.__h.length && a.push(i);
            break e;
          }
          i.componentWillUpdate != null && i.componentWillUpdate(h, i.__s, m), i.componentDidUpdate != null && i.__h.push(function() {
            i.componentDidUpdate(u, l, _);
          });
        }
        if (i.context = m, i.props = h, i.__v = t, i.__P = e, b = ie.__r, S = 0, "prototype" in y && y.prototype.render) {
          for (i.state = i.__s, i.__d = !1, b && b(t), p = i.render(i.props, i.state, i.context), $ = 0; $ < i._sb.length; $++)
            i.__h.push(i._sb[$]);
          i._sb = [];
        } else
          do
            i.__d = !1, b && b(t), p = i.render(i.props, i.state, i.context), i.state = i.__s;
          while (i.__d && ++S < 25);
        i.state = i.__s, i.getChildContext != null && (r = Yt(Yt({}, r), i.getChildContext())), d || i.getSnapshotBeforeUpdate == null || (_ = i.getSnapshotBeforeUpdate(u, l)), k = p != null && p.type === Gi && p.key == null ? p.props.children : p, cu(e, Array.isArray(k) ? k : [k], t, n, r, s, o, a, c, f), i.base = t.__e, t.__h = null, i.__h.length && a.push(i), g && (i.__E = i.__ = null), i.__e = !1;
      } else
        o == null && t.__v === n.__v ? (t.__k = n.__k, t.__e = n.__e) : t.__e = Sd(n.__e, t, n, r, s, o, a, f);
    (p = ie.diffed) && p(t);
  } catch (x) {
    t.__v = null, (f || o != null) && (t.__e = c, t.__h = !!f, o[o.indexOf(c)] = null), ie.__e(x, t, n);
  }
}
function _u(e, t) {
  ie.__c && ie.__c(t, e), e.some(function(n) {
    try {
      e = n.__h, n.__h = [], e.some(function(r) {
        r.call(n);
      });
    } catch (r) {
      ie.__e(r, n.__v);
    }
  });
}
function Sd(e, t, n, r, s, o, a, c) {
  var f, p, i, d = n.props, u = t.props, l = t.type, _ = 0;
  if (l === "svg" && (s = !0), o != null) {
    for (; _ < o.length; _++)
      if ((f = o[_]) && "setAttribute" in f == !!l && (l ? f.localName === l : f.nodeType === 3)) {
        e = f, o[_] = null;
        break;
      }
  }
  if (e == null) {
    if (l === null)
      return document.createTextNode(u);
    e = s ? document.createElementNS("http://www.w3.org/2000/svg", l) : document.createElement(l, u.is && u), o = null, c = !1;
  }
  if (l === null)
    d === u || c && e.data === u || (e.data = u);
  else {
    if (o = o && qi.call(e.childNodes), p = (d = n.props || ai).dangerouslySetInnerHTML, i = u.dangerouslySetInnerHTML, !c) {
      if (o != null)
        for (d = {}, _ = 0; _ < e.attributes.length; _++)
          d[e.attributes[_].name] = e.attributes[_].value;
      (i || p) && (i && (p && i.__html == p.__html || i.__html === e.innerHTML) || (e.innerHTML = i && i.__html || ""));
    }
    if (Ed(e, u, d, s, c), i)
      t.__k = [];
    else if (_ = t.props.children, cu(e, Array.isArray(_) ? _ : [_], t, n, r, s && l !== "foreignObject", o, a, o ? o[0] : n.__k && Br(n, 0), c), o != null)
      for (_ = o.length; _--; )
        o[_] != null && au(o[_]);
    c || ("value" in u && (_ = u.value) !== void 0 && (_ !== e.value || l === "progress" && !_ || l === "option" && _ !== d.value) && ci(e, "value", _, d.value, !1), "checked" in u && (_ = u.checked) !== void 0 && _ !== e.checked && ci(e, "checked", _, d.checked, !1));
  }
  return e;
}
function pu(e, t, n) {
  try {
    typeof e == "function" ? e(t) : e.current = t;
  } catch (r) {
    ie.__e(r, n);
  }
}
function du(e, t, n) {
  var r, s;
  if (ie.unmount && ie.unmount(e), (r = e.ref) && (r.current && r.current !== e.__e || pu(r, null, t)), (r = e.__c) != null) {
    if (r.componentWillUnmount)
      try {
        r.componentWillUnmount();
      } catch (o) {
        ie.__e(o, t);
      }
    r.base = r.__P = null, e.__c = void 0;
  }
  if (r = e.__k)
    for (s = 0; s < r.length; s++)
      r[s] && du(r[s], t, n || typeof e.type != "function");
  n || e.__e == null || au(e.__e), e.__ = e.__e = e.__d = void 0;
}
function Cd(e, t, n) {
  return this.constructor(e, n);
}
function Od(e, t, n) {
  var r, s, o;
  ie.__ && ie.__(e, t), s = (r = typeof n == "function") ? null : n && n.__k || t.__k, o = [], Ys(t, e = (!r && n || t).__k = B(Gi, null, [e]), s || ai, ai, t.ownerSVGElement !== void 0, !r && n ? [n] : s ? null : t.firstChild ? qi.call(t.childNodes) : null, o, !r && n ? n : s ? s.__e : t.firstChild, r), _u(o, e);
}
qi = su.slice, ie = { __e: function(e, t, n, r) {
  for (var s, o, a; t = t.__; )
    if ((s = t.__c) && !s.__)
      try {
        if ((o = s.constructor) && o.getDerivedStateFromError != null && (s.setState(o.getDerivedStateFromError(e)), a = s.__d), s.componentDidCatch != null && (s.componentDidCatch(e, r || {}), a = s.__d), a)
          return s.__E = s;
      } catch (c) {
        e = c;
      }
  throw e;
} }, iu = 0, wr.prototype.setState = function(e, t) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = Yt({}, this.state), typeof e == "function" && (e = e(Yt({}, n), this.props)), e && Yt(n, e), e != null && this.__v && (t && this._sb.push(t), kl(this));
}, wr.prototype.forceUpdate = function(e) {
  this.__v && (this.__e = !0, e && this.__h.push(e), kl(this));
}, wr.prototype.render = Gi, br = [], li.__r = 0;
var Ad = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, hu = { exports: {} };
(function(e, t) {
  (function(n, r) {
    e.exports = r();
  })(Ad, function() {
    var n = 1e3, r = 6e4, s = 36e5, o = "millisecond", a = "second", c = "minute", f = "hour", p = "day", i = "week", d = "month", u = "quarter", l = "year", _ = "date", g = "Invalid Date", h = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, v = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, m = { name: "en", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), ordinal: function(T) {
      var M = ["th", "st", "nd", "rd"], O = T % 100;
      return "[" + T + (M[(O - 20) % 10] || M[O] || M[0]) + "]";
    } }, E = function(T, M, O) {
      var D = String(T);
      return !D || D.length >= M ? T : "" + Array(M + 1 - D.length).join(O) + T;
    }, b = { s: E, z: function(T) {
      var M = -T.utcOffset(), O = Math.abs(M), D = Math.floor(O / 60), A = O % 60;
      return (M <= 0 ? "+" : "-") + E(D, 2, "0") + ":" + E(A, 2, "0");
    }, m: function T(M, O) {
      if (M.date() < O.date())
        return -T(O, M);
      var D = 12 * (O.year() - M.year()) + (O.month() - M.month()), A = M.clone().add(D, d), j = O - A < 0, H = M.clone().add(D + (j ? -1 : 1), d);
      return +(-(D + (O - A) / (j ? A - H : H - A)) || 0);
    }, a: function(T) {
      return T < 0 ? Math.ceil(T) || 0 : Math.floor(T);
    }, p: function(T) {
      return { M: d, y: l, w: i, d: p, D: _, h: f, m: c, s: a, ms: o, Q: u }[T] || String(T || "").toLowerCase().replace(/s$/, "");
    }, u: function(T) {
      return T === void 0;
    } }, S = "en", $ = {};
    $[S] = m;
    var k = function(T) {
      return T instanceof R;
    }, y = function T(M, O, D) {
      var A;
      if (!M)
        return S;
      if (typeof M == "string") {
        var j = M.toLowerCase();
        $[j] && (A = j), O && ($[j] = O, A = j);
        var H = M.split("-");
        if (!A && H.length > 1)
          return T(H[0]);
      } else {
        var F = M.name;
        $[F] = M, A = F;
      }
      return !D && A && (S = A), A || !D && S;
    }, x = function(T, M) {
      if (k(T))
        return T.clone();
      var O = typeof M == "object" ? M : {};
      return O.date = T, O.args = arguments, new R(O);
    }, C = b;
    C.l = y, C.i = k, C.w = function(T, M) {
      return x(T, { locale: M.$L, utc: M.$u, x: M.$x, $offset: M.$offset });
    };
    var R = function() {
      function T(O) {
        this.$L = y(O.locale, null, !0), this.parse(O);
      }
      var M = T.prototype;
      return M.parse = function(O) {
        this.$d = function(D) {
          var A = D.date, j = D.utc;
          if (A === null)
            return new Date(NaN);
          if (C.u(A))
            return new Date();
          if (A instanceof Date)
            return new Date(A);
          if (typeof A == "string" && !/Z$/i.test(A)) {
            var H = A.match(h);
            if (H) {
              var F = H[2] - 1 || 0, G = (H[7] || "0").substring(0, 3);
              return j ? new Date(Date.UTC(H[1], F, H[3] || 1, H[4] || 0, H[5] || 0, H[6] || 0, G)) : new Date(H[1], F, H[3] || 1, H[4] || 0, H[5] || 0, H[6] || 0, G);
            }
          }
          return new Date(A);
        }(O), this.$x = O.x || {}, this.init();
      }, M.init = function() {
        var O = this.$d;
        this.$y = O.getFullYear(), this.$M = O.getMonth(), this.$D = O.getDate(), this.$W = O.getDay(), this.$H = O.getHours(), this.$m = O.getMinutes(), this.$s = O.getSeconds(), this.$ms = O.getMilliseconds();
      }, M.$utils = function() {
        return C;
      }, M.isValid = function() {
        return this.$d.toString() !== g;
      }, M.isSame = function(O, D) {
        var A = x(O);
        return this.startOf(D) <= A && A <= this.endOf(D);
      }, M.isAfter = function(O, D) {
        return x(O) < this.startOf(D);
      }, M.isBefore = function(O, D) {
        return this.endOf(D) < x(O);
      }, M.$g = function(O, D, A) {
        return C.u(O) ? this[D] : this.set(A, O);
      }, M.unix = function() {
        return Math.floor(this.valueOf() / 1e3);
      }, M.valueOf = function() {
        return this.$d.getTime();
      }, M.startOf = function(O, D) {
        var A = this, j = !!C.u(D) || D, H = C.p(O), F = function(q, J) {
          var le = C.w(A.$u ? Date.UTC(A.$y, J, q) : new Date(A.$y, J, q), A);
          return j ? le : le.endOf(p);
        }, G = function(q, J) {
          return C.w(A.toDate()[q].apply(A.toDate("s"), (j ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(J)), A);
        }, z = this.$W, K = this.$M, Q = this.$D, L = "set" + (this.$u ? "UTC" : "");
        switch (H) {
          case l:
            return j ? F(1, 0) : F(31, 11);
          case d:
            return j ? F(1, K) : F(0, K + 1);
          case i:
            var V = this.$locale().weekStart || 0, X = (z < V ? z + 7 : z) - V;
            return F(j ? Q - X : Q + (6 - X), K);
          case p:
          case _:
            return G(L + "Hours", 0);
          case f:
            return G(L + "Minutes", 1);
          case c:
            return G(L + "Seconds", 2);
          case a:
            return G(L + "Milliseconds", 3);
          default:
            return this.clone();
        }
      }, M.endOf = function(O) {
        return this.startOf(O, !1);
      }, M.$set = function(O, D) {
        var A, j = C.p(O), H = "set" + (this.$u ? "UTC" : ""), F = (A = {}, A[p] = H + "Date", A[_] = H + "Date", A[d] = H + "Month", A[l] = H + "FullYear", A[f] = H + "Hours", A[c] = H + "Minutes", A[a] = H + "Seconds", A[o] = H + "Milliseconds", A)[j], G = j === p ? this.$D + (D - this.$W) : D;
        if (j === d || j === l) {
          var z = this.clone().set(_, 1);
          z.$d[F](G), z.init(), this.$d = z.set(_, Math.min(this.$D, z.daysInMonth())).$d;
        } else
          F && this.$d[F](G);
        return this.init(), this;
      }, M.set = function(O, D) {
        return this.clone().$set(O, D);
      }, M.get = function(O) {
        return this[C.p(O)]();
      }, M.add = function(O, D) {
        var A, j = this;
        O = Number(O);
        var H = C.p(D), F = function(K) {
          var Q = x(j);
          return C.w(Q.date(Q.date() + Math.round(K * O)), j);
        };
        if (H === d)
          return this.set(d, this.$M + O);
        if (H === l)
          return this.set(l, this.$y + O);
        if (H === p)
          return F(1);
        if (H === i)
          return F(7);
        var G = (A = {}, A[c] = r, A[f] = s, A[a] = n, A)[H] || 1, z = this.$d.getTime() + O * G;
        return C.w(z, this);
      }, M.subtract = function(O, D) {
        return this.add(-1 * O, D);
      }, M.format = function(O) {
        var D = this, A = this.$locale();
        if (!this.isValid())
          return A.invalidDate || g;
        var j = O || "YYYY-MM-DDTHH:mm:ssZ", H = C.z(this), F = this.$H, G = this.$m, z = this.$M, K = A.weekdays, Q = A.months, L = function(J, le, ae, be) {
          return J && (J[le] || J(D, j)) || ae[le].slice(0, be);
        }, V = function(J) {
          return C.s(F % 12 || 12, J, "0");
        }, X = A.meridiem || function(J, le, ae) {
          var be = J < 12 ? "AM" : "PM";
          return ae ? be.toLowerCase() : be;
        }, q = { YY: String(this.$y).slice(-2), YYYY: this.$y, M: z + 1, MM: C.s(z + 1, 2, "0"), MMM: L(A.monthsShort, z, Q, 3), MMMM: L(Q, z), D: this.$D, DD: C.s(this.$D, 2, "0"), d: String(this.$W), dd: L(A.weekdaysMin, this.$W, K, 2), ddd: L(A.weekdaysShort, this.$W, K, 3), dddd: K[this.$W], H: String(F), HH: C.s(F, 2, "0"), h: V(1), hh: V(2), a: X(F, G, !0), A: X(F, G, !1), m: String(G), mm: C.s(G, 2, "0"), s: String(this.$s), ss: C.s(this.$s, 2, "0"), SSS: C.s(this.$ms, 3, "0"), Z: H };
        return j.replace(v, function(J, le) {
          return le || q[J] || H.replace(":", "");
        });
      }, M.utcOffset = function() {
        return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
      }, M.diff = function(O, D, A) {
        var j, H = C.p(D), F = x(O), G = (F.utcOffset() - this.utcOffset()) * r, z = this - F, K = C.m(this, F);
        return K = (j = {}, j[l] = K / 12, j[d] = K, j[u] = K / 3, j[i] = (z - G) / 6048e5, j[p] = (z - G) / 864e5, j[f] = z / s, j[c] = z / r, j[a] = z / n, j)[H] || z, A ? K : C.a(K);
      }, M.daysInMonth = function() {
        return this.endOf(d).$D;
      }, M.$locale = function() {
        return $[this.$L];
      }, M.locale = function(O, D) {
        if (!O)
          return this.$L;
        var A = this.clone(), j = y(O, D, !0);
        return j && (A.$L = j), A;
      }, M.clone = function() {
        return C.w(this.$d, this);
      }, M.toDate = function() {
        return new Date(this.valueOf());
      }, M.toJSON = function() {
        return this.isValid() ? this.toISOString() : null;
      }, M.toISOString = function() {
        return this.$d.toISOString();
      }, M.toString = function() {
        return this.$d.toUTCString();
      }, T;
    }(), I = R.prototype;
    return x.prototype = I, [["$ms", o], ["$s", a], ["$m", c], ["$H", f], ["$W", p], ["$M", d], ["$y", l], ["$D", _]].forEach(function(T) {
      I[T[1]] = function(M) {
        return this.$g(M, T[0], T[1]);
      };
    }), x.extend = function(T, M) {
      return T.$i || (T(M, R, x), T.$i = !0), x;
    }, x.locale = y, x.isDayjs = k, x.unix = function(T) {
      return x(1e3 * T);
    }, x.en = $[S], x.Ls = $, x.p = {}, x;
  });
})(hu);
const Z = hu.exports, vu = (e = 0, t = 0) => {
  const n = [];
  for (let r = e; r <= t; r++)
    n.push(r);
  return n;
}, qs = (e, t) => {
  const n = Math.ceil(e.length / t);
  return new Array(t).fill({}).map((r, s) => e.slice(s * n, (s + 1) * n));
}, Md = (e) => {
  const { format: t, minDate: n, maxDate: r, tagDate: s, DATEROWCOUNT: o, showOtherMonth: a, clickDay: c, selectedDate: f, handleChangePanel: p, showToday: i, handleChange: d, clickToday: u } = e, l = (k) => Z(k).isValid() ? Z(k).add(1, "months").format(t) : "", _ = (k) => Z(k).isValid() ? Z(k).subtract(1, "months").format(t) : "", g = () => {
    const k = _(f || Z().format(t));
    d(k);
  }, h = () => {
    const k = l(f || Z().format(t));
    d(k);
  }, v = (k, y, x, C) => {
    const R = Z(), I = Z(f), T = new Array(k);
    for (let M = 0; M < k; M++) {
      const O = y + M + 1, D = x.set("date", O), A = C && !a ? !0 : n && D.isBefore(n, "date") || r && D.isAfter(r, "date");
      T[M] = {
        isSelected: I.isSame(x.set("date", O), "date"),
        isToday: R.isSame(D, "date"),
        isDisable: !!A,
        isTag: !!(s != null && s.includes(D.format(t))),
        date: D,
        isOtherMonth: C,
        onClick: () => A ? {} : c(D)
      };
    }
    return T;
  }, m = () => {
    const k = Z(f), y = Z(), x = f ? k : y, C = x.set("date", 1).day(), R = C === 0 ? 6 : C - 1, I = x.subtract(1, "month"), M = Number(I.endOf("month").get("date")) - R;
    return v(R, M, I, !0);
  }, E = () => {
    const k = Z(f), y = Z(), x = f ? k : y, C = x.set("date", 1).day(), R = C === 0 ? 6 : C - 1, I = x.endOf("month").get("date"), T = x.add(1, "month"), M = 7 * 6 % (R + I);
    return v(M, 0, T, !0);
  }, b = () => {
    const k = f, y = Z(), x = f ? Z(k) : y, C = x.endOf("month").get("date"), R = v(C, 0, x, !1), I = m(), T = E(), M = [...I, ...R, ...T];
    return qs(M, o);
  }, S = ["\u4E00", "\u4E8C", "\u4E09", "\u56DB", "\u4E94", "\u516D", "\u65E5"], $ = b();
  return /* @__PURE__ */ B("div", {
    className: U("datepicker-calendar-day")
  }, /* @__PURE__ */ B("div", {
    className: "datepicker-calendar-bar"
  }, /* @__PURE__ */ B("div", {
    class: "flex"
  }, /* @__PURE__ */ B("button", {
    type: "button",
    className: "btn ghost",
    onClick: () => p("year")
  }, /* @__PURE__ */ B("span", null, Z(f).format("YYYY \u5E74")), /* @__PURE__ */ B("span", {
    class: "caret"
  })), /* @__PURE__ */ B("button", {
    type: "button",
    className: "btn ghost",
    onClick: () => p("month")
  }, /* @__PURE__ */ B("span", null, Z(f).format("MM \u6708")), /* @__PURE__ */ B("span", {
    class: "caret"
  }))), /* @__PURE__ */ B("div", {
    class: "flex"
  }, i && /* @__PURE__ */ B("button", {
    type: "button",
    className: "btn ghost",
    onClick: () => {
      u();
    }
  }, "\u4ECA\u5929"), /* @__PURE__ */ B("button", {
    type: "button",
    className: "btn ghost",
    onClick: () => g()
  }, /* @__PURE__ */ B("i", {
    className: "icon icon-angle-left"
  })), /* @__PURE__ */ B("button", {
    type: "button",
    className: "btn ghost",
    onClick: () => h()
  }, /* @__PURE__ */ B("i", {
    className: "icon icon-angle-right"
  })))), /* @__PURE__ */ B("table", {
    className: "datepicker-calendar-table"
  }, /* @__PURE__ */ B("thead", {
    className: "datepicker-calendar-thead"
  }, /* @__PURE__ */ B("tr", null, S.map((k, y) => /* @__PURE__ */ B("th", {
    key: y
  }, k)))), /* @__PURE__ */ B("tbody", {
    className: "datepicker-calendar-tbody"
  }, $.map((k, y) => /* @__PURE__ */ B("tr", {
    key: y
  }, k.map((x, C) => {
    const R = ["text-center"];
    return x.isToday && R.push("datepicker-calendar-today"), x.isSelected && R.push("datepicker-calendar-selected-date"), x.isOtherMonth && R.push("datepicker-calendar-other-month"), x.isTag && R.push("datepicker-calendar-tag"), /* @__PURE__ */ B("td", {
      key: C,
      className: U(R)
    }, /* @__PURE__ */ B("div", {
      className: U("btn", "ghost", "datepicker-calendar-date", x.isDisable ? "disabled" : ""),
      onClick: x.onClick
    }, !a && x.isOtherMonth ? "" : Z(x.date).format("DD")));
  }))))));
}, Td = (e) => {
  const { format: t, selectedDate: n, changeYear: r, handleChangeMonth: s } = e, o = qs(vu(1, 12), 4);
  return /* @__PURE__ */ B("div", {
    className: U("datepicker-calendar-month")
  }, /* @__PURE__ */ B("div", {
    className: "datepicker-calendar-bar"
  }, /* @__PURE__ */ B("button", {
    type: "button",
    className: "btn ghost",
    onClick: () => {
      r("subtract");
    }
  }, /* @__PURE__ */ B("i", {
    className: "icon icon-angle-left"
  })), /* @__PURE__ */ B("button", {
    type: "button",
    className: "btn ghost"
  }, Z(n).format("YYYY \u5E74")), /* @__PURE__ */ B("button", {
    type: "button",
    className: "btn ghost",
    onClick: () => {
      r("add");
    }
  }, /* @__PURE__ */ B("i", {
    className: "icon icon-angle-right"
  }))), /* @__PURE__ */ B("table", {
    className: "datepicker-calendar-month-table"
  }, /* @__PURE__ */ B("tbody", {
    className: "datepicker-calendar-month-table-body"
  }, o.map((a, c) => /* @__PURE__ */ B("tr", {
    key: c
  }, a.map((f, p) => {
    const i = ["text-center"], d = Z(n).year(), u = Z(`${d}-${f}-01`).format(t);
    return /* @__PURE__ */ B("td", {
      key: p,
      className: U(i)
    }, /* @__PURE__ */ B("div", {
      className: U("btn", "ghost", "datepicker-calendar-month"),
      onClick: () => {
        s(u);
      }
    }, Z(u).format("MM"), " \u6708"));
  }))))));
}, Dd = (e) => {
  const { format: t, selectedDate: n, handleChangeYear: r, handleChange: s } = e, o = Z(n).year(), a = qs(vu(o, o + 11), 4);
  return /* @__PURE__ */ B("div", {
    className: U("datepicker-calendar-year")
  }, /* @__PURE__ */ B("div", {
    className: "datepicker-calendar-bar"
  }, /* @__PURE__ */ B("button", {
    type: "button",
    className: "btn ghost",
    onClick: () => {
      const c = Z(n).subtract(12, "year").startOf("year").format(t);
      s(c);
    }
  }, /* @__PURE__ */ B("i", {
    className: "icon icon-angle-left"
  })), /* @__PURE__ */ B("div", null, Z(n).year(), " - ", o + 11), /* @__PURE__ */ B("button", {
    type: "button",
    className: "btn ghost",
    onClick: () => {
      const c = Z(n).add(12, "year").startOf("year").format(t);
      s(c);
    }
  }, /* @__PURE__ */ B("i", {
    className: "icon icon-angle-right"
  }))), /* @__PURE__ */ B("table", {
    className: "datepicker-calendar-month-table"
  }, /* @__PURE__ */ B("tbody", {
    className: "datepicker-calendar-month-table-body"
  }, a.map((c, f) => /* @__PURE__ */ B("tr", {
    key: f
  }, c.map((p, i) => {
    const d = ["text-center"], u = Z(n).month(), l = Z(`${p}-${u}-01`).format(t);
    return /* @__PURE__ */ B("td", {
      key: i,
      className: U(d)
    }, /* @__PURE__ */ B("div", {
      className: U("btn", "ghost", "datepicker-calendar-month"),
      onClick: () => {
        r(l);
      }
    }, Z(l).format("YYYY")));
  }))))));
};
class Nd extends wr {
  constructor() {
    super(...arguments);
    N(this, "DATEROWCOUNT", 6);
    N(this, "ref", xd());
    N(this, "state", {
      selectedDate: this.props.date || null,
      type: "day"
    });
  }
  handleChange(n) {
    var r;
    this.setState({ selectedDate: n }), (r = this.props) == null || r.onChange(n);
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
    const r = n === "subtract" ? Z(this.state.selectedDate).subtract(1, "year").startOf("year").format(this.props.format) : Z(this.state.selectedDate).add(1, "year").startOf("year").format(this.props.format);
    this.handleChange(r);
  }
  clickDay(n) {
    const r = Z(n).format(this.props.format);
    this.handleChange(r);
  }
  clickToday() {
    this.handleChange(Z().format(this.props.format));
  }
  renderPanel() {
    return this.state.type === "day" ? B(Md, {
      ...this.props,
      handleChange: this.handleChange.bind(this),
      handleChangePanel: this.handleChangePanel.bind(this),
      clickToday: this.clickToday.bind(this),
      clickDay: this.clickDay.bind(this),
      selectedDate: this.state.selectedDate,
      DATEROWCOUNT: this.DATEROWCOUNT
    }) : this.state.type === "month" ? B(Td, {
      ...this.props,
      handleChangeMonth: this.handleChangeMonth.bind(this),
      changeYear: this.changeYear.bind(this)
    }) : B(Dd, {
      ...this.props,
      handleChangeYear: this.handleChangeYear.bind(this),
      handleChange: this.handleChange.bind(this),
      selectedDate: this.state.selectedDate
    });
  }
  render() {
    const { className: n } = this.props;
    return /* @__PURE__ */ B("div", {
      className: U("datepicker-calendar", n),
      ref: this.ref
    }, this.renderPanel());
  }
}
function Re(e) {
  if (e == null)
    return window;
  if (e.toString() !== "[object Window]") {
    var t = e.ownerDocument;
    return t && t.defaultView || window;
  }
  return e;
}
function mn(e) {
  var t = Re(e).Element;
  return e instanceof t || e instanceof Element;
}
function Ne(e) {
  var t = Re(e).HTMLElement;
  return e instanceof t || e instanceof HTMLElement;
}
function Gs(e) {
  if (typeof ShadowRoot > "u")
    return !1;
  var t = Re(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot;
}
var dn = Math.max, fi = Math.min, Fn = Math.round;
function ps() {
  var e = navigator.userAgentData;
  return e != null && e.brands ? e.brands.map(function(t) {
    return t.brand + "/" + t.version;
  }).join(" ") : navigator.userAgent;
}
function mu() {
  return !/^((?!chrome|android).)*safari/i.test(ps());
}
function zn(e, t, n) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  var r = e.getBoundingClientRect(), s = 1, o = 1;
  t && Ne(e) && (s = e.offsetWidth > 0 && Fn(r.width) / e.offsetWidth || 1, o = e.offsetHeight > 0 && Fn(r.height) / e.offsetHeight || 1);
  var a = mn(e) ? Re(e) : window, c = a.visualViewport, f = !mu() && n, p = (r.left + (f && c ? c.offsetLeft : 0)) / s, i = (r.top + (f && c ? c.offsetTop : 0)) / o, d = r.width / s, u = r.height / o;
  return {
    width: d,
    height: u,
    top: i,
    right: p + d,
    bottom: i + u,
    left: p,
    x: p,
    y: i
  };
}
function Xs(e) {
  var t = Re(e), n = t.pageXOffset, r = t.pageYOffset;
  return {
    scrollLeft: n,
    scrollTop: r
  };
}
function Ld(e) {
  return {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  };
}
function Pd(e) {
  return e === Re(e) || !Ne(e) ? Xs(e) : Ld(e);
}
function ft(e) {
  return e ? (e.nodeName || "").toLowerCase() : null;
}
function nn(e) {
  return ((mn(e) ? e.ownerDocument : e.document) || window.document).documentElement;
}
function Ks(e) {
  return zn(nn(e)).left + Xs(e).scrollLeft;
}
function kt(e) {
  return Re(e).getComputedStyle(e);
}
function Js(e) {
  var t = kt(e), n = t.overflow, r = t.overflowX, s = t.overflowY;
  return /auto|scroll|overlay|hidden/.test(n + s + r);
}
function Rd(e) {
  var t = e.getBoundingClientRect(), n = Fn(t.width) / e.offsetWidth || 1, r = Fn(t.height) / e.offsetHeight || 1;
  return n !== 1 || r !== 1;
}
function Hd(e, t, n) {
  n === void 0 && (n = !1);
  var r = Ne(t), s = Ne(t) && Rd(t), o = nn(t), a = zn(e, s, n), c = {
    scrollLeft: 0,
    scrollTop: 0
  }, f = {
    x: 0,
    y: 0
  };
  return (r || !r && !n) && ((ft(t) !== "body" || Js(o)) && (c = Pd(t)), Ne(t) ? (f = zn(t, !0), f.x += t.clientLeft, f.y += t.clientTop) : o && (f.x = Ks(o))), {
    x: a.left + c.scrollLeft - f.x,
    y: a.top + c.scrollTop - f.y,
    width: a.width,
    height: a.height
  };
}
function Zs(e) {
  var t = zn(e), n = e.offsetWidth, r = e.offsetHeight;
  return Math.abs(t.width - n) <= 1 && (n = t.width), Math.abs(t.height - r) <= 1 && (r = t.height), {
    x: e.offsetLeft,
    y: e.offsetTop,
    width: n,
    height: r
  };
}
function Xi(e) {
  return ft(e) === "html" ? e : e.assignedSlot || e.parentNode || (Gs(e) ? e.host : null) || nn(e);
}
function gu(e) {
  return ["html", "body", "#document"].indexOf(ft(e)) >= 0 ? e.ownerDocument.body : Ne(e) && Js(e) ? e : gu(Xi(e));
}
function $r(e, t) {
  var n;
  t === void 0 && (t = []);
  var r = gu(e), s = r === ((n = e.ownerDocument) == null ? void 0 : n.body), o = Re(r), a = s ? [o].concat(o.visualViewport || [], Js(r) ? r : []) : r, c = t.concat(a);
  return s ? c : c.concat($r(Xi(a)));
}
function Wd(e) {
  return ["table", "td", "th"].indexOf(ft(e)) >= 0;
}
function Cl(e) {
  return !Ne(e) || kt(e).position === "fixed" ? null : e.offsetParent;
}
function jd(e) {
  var t = /firefox/i.test(ps()), n = /Trident/i.test(ps());
  if (n && Ne(e)) {
    var r = kt(e);
    if (r.position === "fixed")
      return null;
  }
  var s = Xi(e);
  for (Gs(s) && (s = s.host); Ne(s) && ["html", "body"].indexOf(ft(s)) < 0; ) {
    var o = kt(s);
    if (o.transform !== "none" || o.perspective !== "none" || o.contain === "paint" || ["transform", "perspective"].indexOf(o.willChange) !== -1 || t && o.willChange === "filter" || t && o.filter && o.filter !== "none")
      return s;
    s = s.parentNode;
  }
  return null;
}
function po(e) {
  for (var t = Re(e), n = Cl(e); n && Wd(n) && kt(n).position === "static"; )
    n = Cl(n);
  return n && (ft(n) === "html" || ft(n) === "body" && kt(n).position === "static") ? t : n || jd(e) || t;
}
var Se = "top", qe = "bottom", Ge = "right", Ce = "left", Qs = "auto", ho = [Se, qe, Ge, Ce], Vn = "start", Ur = "end", Id = "clippingParents", yu = "viewport", rr = "popper", Bd = "reference", Ol = /* @__PURE__ */ ho.reduce(function(e, t) {
  return e.concat([t + "-" + Vn, t + "-" + Ur]);
}, []), bu = /* @__PURE__ */ [].concat(ho, [Qs]).reduce(function(e, t) {
  return e.concat([t, t + "-" + Vn, t + "-" + Ur]);
}, []), Ud = "beforeRead", Fd = "read", zd = "afterRead", Vd = "beforeMain", Yd = "main", qd = "afterMain", Gd = "beforeWrite", Xd = "write", Kd = "afterWrite", Jd = [Ud, Fd, zd, Vd, Yd, qd, Gd, Xd, Kd];
function Zd(e) {
  var t = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Set(), r = [];
  e.forEach(function(o) {
    t.set(o.name, o);
  });
  function s(o) {
    n.add(o.name);
    var a = [].concat(o.requires || [], o.requiresIfExists || []);
    a.forEach(function(c) {
      if (!n.has(c)) {
        var f = t.get(c);
        f && s(f);
      }
    }), r.push(o);
  }
  return e.forEach(function(o) {
    n.has(o.name) || s(o);
  }), r;
}
function Qd(e) {
  var t = Zd(e);
  return Jd.reduce(function(n, r) {
    return n.concat(t.filter(function(s) {
      return s.phase === r;
    }));
  }, []);
}
function eh(e) {
  var t;
  return function() {
    return t || (t = new Promise(function(n) {
      Promise.resolve().then(function() {
        t = void 0, n(e());
      });
    })), t;
  };
}
function lt(e) {
  return e.split("-")[0];
}
function th(e) {
  var t = e.reduce(function(n, r) {
    var s = n[r.name];
    return n[r.name] = s ? Object.assign({}, s, r, {
      options: Object.assign({}, s.options, r.options),
      data: Object.assign({}, s.data, r.data)
    }) : r, n;
  }, {});
  return Object.keys(t).map(function(n) {
    return t[n];
  });
}
function nh(e, t) {
  var n = Re(e), r = nn(e), s = n.visualViewport, o = r.clientWidth, a = r.clientHeight, c = 0, f = 0;
  if (s) {
    o = s.width, a = s.height;
    var p = mu();
    (p || !p && t === "fixed") && (c = s.offsetLeft, f = s.offsetTop);
  }
  return {
    width: o,
    height: a,
    x: c + Ks(e),
    y: f
  };
}
function rh(e) {
  var t, n = nn(e), r = Xs(e), s = (t = e.ownerDocument) == null ? void 0 : t.body, o = dn(n.scrollWidth, n.clientWidth, s ? s.scrollWidth : 0, s ? s.clientWidth : 0), a = dn(n.scrollHeight, n.clientHeight, s ? s.scrollHeight : 0, s ? s.clientHeight : 0), c = -r.scrollLeft + Ks(e), f = -r.scrollTop;
  return kt(s || n).direction === "rtl" && (c += dn(n.clientWidth, s ? s.clientWidth : 0) - o), {
    width: o,
    height: a,
    x: c,
    y: f
  };
}
function wu(e, t) {
  var n = t.getRootNode && t.getRootNode();
  if (e.contains(t))
    return !0;
  if (n && Gs(n)) {
    var r = t;
    do {
      if (r && e.isSameNode(r))
        return !0;
      r = r.parentNode || r.host;
    } while (r);
  }
  return !1;
}
function ds(e) {
  return Object.assign({}, e, {
    left: e.x,
    top: e.y,
    right: e.x + e.width,
    bottom: e.y + e.height
  });
}
function oh(e, t) {
  var n = zn(e, !1, t === "fixed");
  return n.top = n.top + e.clientTop, n.left = n.left + e.clientLeft, n.bottom = n.top + e.clientHeight, n.right = n.left + e.clientWidth, n.width = e.clientWidth, n.height = e.clientHeight, n.x = n.left, n.y = n.top, n;
}
function Al(e, t, n) {
  return t === yu ? ds(nh(e, n)) : mn(t) ? oh(t, n) : ds(rh(nn(e)));
}
function ih(e) {
  var t = $r(Xi(e)), n = ["absolute", "fixed"].indexOf(kt(e).position) >= 0, r = n && Ne(e) ? po(e) : e;
  return mn(r) ? t.filter(function(s) {
    return mn(s) && wu(s, r) && ft(s) !== "body";
  }) : [];
}
function sh(e, t, n, r) {
  var s = t === "clippingParents" ? ih(e) : [].concat(t), o = [].concat(s, [n]), a = o[0], c = o.reduce(function(f, p) {
    var i = Al(e, p, r);
    return f.top = dn(i.top, f.top), f.right = fi(i.right, f.right), f.bottom = fi(i.bottom, f.bottom), f.left = dn(i.left, f.left), f;
  }, Al(e, a, r));
  return c.width = c.right - c.left, c.height = c.bottom - c.top, c.x = c.left, c.y = c.top, c;
}
function Yn(e) {
  return e.split("-")[1];
}
function ea(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function $u(e) {
  var t = e.reference, n = e.element, r = e.placement, s = r ? lt(r) : null, o = r ? Yn(r) : null, a = t.x + t.width / 2 - n.width / 2, c = t.y + t.height / 2 - n.height / 2, f;
  switch (s) {
    case Se:
      f = {
        x: a,
        y: t.y - n.height
      };
      break;
    case qe:
      f = {
        x: a,
        y: t.y + t.height
      };
      break;
    case Ge:
      f = {
        x: t.x + t.width,
        y: c
      };
      break;
    case Ce:
      f = {
        x: t.x - n.width,
        y: c
      };
      break;
    default:
      f = {
        x: t.x,
        y: t.y
      };
  }
  var p = s ? ea(s) : null;
  if (p != null) {
    var i = p === "y" ? "height" : "width";
    switch (o) {
      case Vn:
        f[p] = f[p] - (t[i] / 2 - n[i] / 2);
        break;
      case Ur:
        f[p] = f[p] + (t[i] / 2 - n[i] / 2);
        break;
    }
  }
  return f;
}
function ku() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
function xu(e) {
  return Object.assign({}, ku(), e);
}
function Eu(e, t) {
  return t.reduce(function(n, r) {
    return n[r] = e, n;
  }, {});
}
function ta(e, t) {
  t === void 0 && (t = {});
  var n = t, r = n.placement, s = r === void 0 ? e.placement : r, o = n.strategy, a = o === void 0 ? e.strategy : o, c = n.boundary, f = c === void 0 ? Id : c, p = n.rootBoundary, i = p === void 0 ? yu : p, d = n.elementContext, u = d === void 0 ? rr : d, l = n.altBoundary, _ = l === void 0 ? !1 : l, g = n.padding, h = g === void 0 ? 0 : g, v = xu(typeof h != "number" ? h : Eu(h, ho)), m = u === rr ? Bd : rr, E = e.rects.popper, b = e.elements[_ ? m : u], S = sh(mn(b) ? b : b.contextElement || nn(e.elements.popper), f, i, a), $ = zn(e.elements.reference), k = $u({
    reference: $,
    element: E,
    strategy: "absolute",
    placement: s
  }), y = ds(Object.assign({}, E, k)), x = u === rr ? y : $, C = {
    top: S.top - x.top + v.top,
    bottom: x.bottom - S.bottom + v.bottom,
    left: S.left - x.left + v.left,
    right: x.right - S.right + v.right
  }, R = e.modifiersData.offset;
  if (u === rr && R) {
    var I = R[s];
    Object.keys(C).forEach(function(T) {
      var M = [Ge, qe].indexOf(T) >= 0 ? 1 : -1, O = [Se, qe].indexOf(T) >= 0 ? "y" : "x";
      C[T] += I[O] * M;
    });
  }
  return C;
}
var Ml = {
  placement: "bottom",
  modifiers: [],
  strategy: "absolute"
};
function Tl() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return !t.some(function(r) {
    return !(r && typeof r.getBoundingClientRect == "function");
  });
}
function ah(e) {
  e === void 0 && (e = {});
  var t = e, n = t.defaultModifiers, r = n === void 0 ? [] : n, s = t.defaultOptions, o = s === void 0 ? Ml : s;
  return function(c, f, p) {
    p === void 0 && (p = o);
    var i = {
      placement: "bottom",
      orderedModifiers: [],
      options: Object.assign({}, Ml, o),
      modifiersData: {},
      elements: {
        reference: c,
        popper: f
      },
      attributes: {},
      styles: {}
    }, d = [], u = !1, l = {
      state: i,
      setOptions: function(v) {
        var m = typeof v == "function" ? v(i.options) : v;
        g(), i.options = Object.assign({}, o, i.options, m), i.scrollParents = {
          reference: mn(c) ? $r(c) : c.contextElement ? $r(c.contextElement) : [],
          popper: $r(f)
        };
        var E = Qd(th([].concat(r, i.options.modifiers)));
        return i.orderedModifiers = E.filter(function(b) {
          return b.enabled;
        }), _(), l.update();
      },
      forceUpdate: function() {
        if (!u) {
          var v = i.elements, m = v.reference, E = v.popper;
          if (!!Tl(m, E)) {
            i.rects = {
              reference: Hd(m, po(E), i.options.strategy === "fixed"),
              popper: Zs(E)
            }, i.reset = !1, i.placement = i.options.placement, i.orderedModifiers.forEach(function(C) {
              return i.modifiersData[C.name] = Object.assign({}, C.data);
            });
            for (var b = 0; b < i.orderedModifiers.length; b++) {
              if (i.reset === !0) {
                i.reset = !1, b = -1;
                continue;
              }
              var S = i.orderedModifiers[b], $ = S.fn, k = S.options, y = k === void 0 ? {} : k, x = S.name;
              typeof $ == "function" && (i = $({
                state: i,
                options: y,
                name: x,
                instance: l
              }) || i);
            }
          }
        }
      },
      update: eh(function() {
        return new Promise(function(h) {
          l.forceUpdate(), h(i);
        });
      }),
      destroy: function() {
        g(), u = !0;
      }
    };
    if (!Tl(c, f))
      return l;
    l.setOptions(p).then(function(h) {
      !u && p.onFirstUpdate && p.onFirstUpdate(h);
    });
    function _() {
      i.orderedModifiers.forEach(function(h) {
        var v = h.name, m = h.options, E = m === void 0 ? {} : m, b = h.effect;
        if (typeof b == "function") {
          var S = b({
            state: i,
            name: v,
            instance: l,
            options: E
          }), $ = function() {
          };
          d.push(S || $);
        }
      });
    }
    function g() {
      d.forEach(function(h) {
        return h();
      }), d = [];
    }
    return l;
  };
}
var bo = {
  passive: !0
};
function lh(e) {
  var t = e.state, n = e.instance, r = e.options, s = r.scroll, o = s === void 0 ? !0 : s, a = r.resize, c = a === void 0 ? !0 : a, f = Re(t.elements.popper), p = [].concat(t.scrollParents.reference, t.scrollParents.popper);
  return o && p.forEach(function(i) {
    i.addEventListener("scroll", n.update, bo);
  }), c && f.addEventListener("resize", n.update, bo), function() {
    o && p.forEach(function(i) {
      i.removeEventListener("scroll", n.update, bo);
    }), c && f.removeEventListener("resize", n.update, bo);
  };
}
const ch = {
  name: "eventListeners",
  enabled: !0,
  phase: "write",
  fn: function() {
  },
  effect: lh,
  data: {}
};
function fh(e) {
  var t = e.state, n = e.name;
  t.modifiersData[n] = $u({
    reference: t.rects.reference,
    element: t.rects.popper,
    strategy: "absolute",
    placement: t.placement
  });
}
const uh = {
  name: "popperOffsets",
  enabled: !0,
  phase: "read",
  fn: fh,
  data: {}
};
var _h = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function ph(e) {
  var t = e.x, n = e.y, r = window, s = r.devicePixelRatio || 1;
  return {
    x: Fn(t * s) / s || 0,
    y: Fn(n * s) / s || 0
  };
}
function Dl(e) {
  var t, n = e.popper, r = e.popperRect, s = e.placement, o = e.variation, a = e.offsets, c = e.position, f = e.gpuAcceleration, p = e.adaptive, i = e.roundOffsets, d = e.isFixed, u = a.x, l = u === void 0 ? 0 : u, _ = a.y, g = _ === void 0 ? 0 : _, h = typeof i == "function" ? i({
    x: l,
    y: g
  }) : {
    x: l,
    y: g
  };
  l = h.x, g = h.y;
  var v = a.hasOwnProperty("x"), m = a.hasOwnProperty("y"), E = Ce, b = Se, S = window;
  if (p) {
    var $ = po(n), k = "clientHeight", y = "clientWidth";
    if ($ === Re(n) && ($ = nn(n), kt($).position !== "static" && c === "absolute" && (k = "scrollHeight", y = "scrollWidth")), $ = $, s === Se || (s === Ce || s === Ge) && o === Ur) {
      b = qe;
      var x = d && $ === S && S.visualViewport ? S.visualViewport.height : $[k];
      g -= x - r.height, g *= f ? 1 : -1;
    }
    if (s === Ce || (s === Se || s === qe) && o === Ur) {
      E = Ge;
      var C = d && $ === S && S.visualViewport ? S.visualViewport.width : $[y];
      l -= C - r.width, l *= f ? 1 : -1;
    }
  }
  var R = Object.assign({
    position: c
  }, p && _h), I = i === !0 ? ph({
    x: l,
    y: g
  }) : {
    x: l,
    y: g
  };
  if (l = I.x, g = I.y, f) {
    var T;
    return Object.assign({}, R, (T = {}, T[b] = m ? "0" : "", T[E] = v ? "0" : "", T.transform = (S.devicePixelRatio || 1) <= 1 ? "translate(" + l + "px, " + g + "px)" : "translate3d(" + l + "px, " + g + "px, 0)", T));
  }
  return Object.assign({}, R, (t = {}, t[b] = m ? g + "px" : "", t[E] = v ? l + "px" : "", t.transform = "", t));
}
function dh(e) {
  var t = e.state, n = e.options, r = n.gpuAcceleration, s = r === void 0 ? !0 : r, o = n.adaptive, a = o === void 0 ? !0 : o, c = n.roundOffsets, f = c === void 0 ? !0 : c, p = {
    placement: lt(t.placement),
    variation: Yn(t.placement),
    popper: t.elements.popper,
    popperRect: t.rects.popper,
    gpuAcceleration: s,
    isFixed: t.options.strategy === "fixed"
  };
  t.modifiersData.popperOffsets != null && (t.styles.popper = Object.assign({}, t.styles.popper, Dl(Object.assign({}, p, {
    offsets: t.modifiersData.popperOffsets,
    position: t.options.strategy,
    adaptive: a,
    roundOffsets: f
  })))), t.modifiersData.arrow != null && (t.styles.arrow = Object.assign({}, t.styles.arrow, Dl(Object.assign({}, p, {
    offsets: t.modifiersData.arrow,
    position: "absolute",
    adaptive: !1,
    roundOffsets: f
  })))), t.attributes.popper = Object.assign({}, t.attributes.popper, {
    "data-popper-placement": t.placement
  });
}
const hh = {
  name: "computeStyles",
  enabled: !0,
  phase: "beforeWrite",
  fn: dh,
  data: {}
};
function vh(e) {
  var t = e.state;
  Object.keys(t.elements).forEach(function(n) {
    var r = t.styles[n] || {}, s = t.attributes[n] || {}, o = t.elements[n];
    !Ne(o) || !ft(o) || (Object.assign(o.style, r), Object.keys(s).forEach(function(a) {
      var c = s[a];
      c === !1 ? o.removeAttribute(a) : o.setAttribute(a, c === !0 ? "" : c);
    }));
  });
}
function mh(e) {
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
    Object.keys(t.elements).forEach(function(r) {
      var s = t.elements[r], o = t.attributes[r] || {}, a = Object.keys(t.styles.hasOwnProperty(r) ? t.styles[r] : n[r]), c = a.reduce(function(f, p) {
        return f[p] = "", f;
      }, {});
      !Ne(s) || !ft(s) || (Object.assign(s.style, c), Object.keys(o).forEach(function(f) {
        s.removeAttribute(f);
      }));
    });
  };
}
const gh = {
  name: "applyStyles",
  enabled: !0,
  phase: "write",
  fn: vh,
  effect: mh,
  requires: ["computeStyles"]
};
var yh = [ch, uh, hh, gh], bh = /* @__PURE__ */ ah({
  defaultModifiers: yh
});
function kr(e, t, n) {
  return dn(e, fi(t, n));
}
function wh(e, t, n) {
  var r = kr(e, t, n);
  return r > n ? n : r;
}
var $h = function(t, n) {
  return t = typeof t == "function" ? t(Object.assign({}, n.rects, {
    placement: n.placement
  })) : t, xu(typeof t != "number" ? t : Eu(t, ho));
};
function kh(e) {
  var t, n = e.state, r = e.name, s = e.options, o = n.elements.arrow, a = n.modifiersData.popperOffsets, c = lt(n.placement), f = ea(c), p = [Ce, Ge].indexOf(c) >= 0, i = p ? "height" : "width";
  if (!(!o || !a)) {
    var d = $h(s.padding, n), u = Zs(o), l = f === "y" ? Se : Ce, _ = f === "y" ? qe : Ge, g = n.rects.reference[i] + n.rects.reference[f] - a[f] - n.rects.popper[i], h = a[f] - n.rects.reference[f], v = po(o), m = v ? f === "y" ? v.clientHeight || 0 : v.clientWidth || 0 : 0, E = g / 2 - h / 2, b = d[l], S = m - u[i] - d[_], $ = m / 2 - u[i] / 2 + E, k = kr(b, $, S), y = f;
    n.modifiersData[r] = (t = {}, t[y] = k, t.centerOffset = k - $, t);
  }
}
function xh(e) {
  var t = e.state, n = e.options, r = n.element, s = r === void 0 ? "[data-popper-arrow]" : r;
  s != null && (typeof s == "string" && (s = t.elements.popper.querySelector(s), !s) || !wu(t.elements.popper, s) || (t.elements.arrow = s));
}
const Eh = {
  name: "arrow",
  enabled: !0,
  phase: "main",
  fn: kh,
  effect: xh,
  requires: ["popperOffsets"],
  requiresIfExists: ["preventOverflow"]
};
function Sh(e, t, n) {
  var r = lt(e), s = [Ce, Se].indexOf(r) >= 0 ? -1 : 1, o = typeof n == "function" ? n(Object.assign({}, t, {
    placement: e
  })) : n, a = o[0], c = o[1];
  return a = a || 0, c = (c || 0) * s, [Ce, Ge].indexOf(r) >= 0 ? {
    x: c,
    y: a
  } : {
    x: a,
    y: c
  };
}
function Ch(e) {
  var t = e.state, n = e.options, r = e.name, s = n.offset, o = s === void 0 ? [0, 0] : s, a = bu.reduce(function(i, d) {
    return i[d] = Sh(d, t.rects, o), i;
  }, {}), c = a[t.placement], f = c.x, p = c.y;
  t.modifiersData.popperOffsets != null && (t.modifiersData.popperOffsets.x += f, t.modifiersData.popperOffsets.y += p), t.modifiersData[r] = a;
}
const Oh = {
  name: "offset",
  enabled: !0,
  phase: "main",
  requires: ["popperOffsets"],
  fn: Ch
};
function Ah(e) {
  return e === "x" ? "y" : "x";
}
function Mh(e) {
  var t = e.state, n = e.options, r = e.name, s = n.mainAxis, o = s === void 0 ? !0 : s, a = n.altAxis, c = a === void 0 ? !1 : a, f = n.boundary, p = n.rootBoundary, i = n.altBoundary, d = n.padding, u = n.tether, l = u === void 0 ? !0 : u, _ = n.tetherOffset, g = _ === void 0 ? 0 : _, h = ta(t, {
    boundary: f,
    rootBoundary: p,
    padding: d,
    altBoundary: i
  }), v = lt(t.placement), m = Yn(t.placement), E = !m, b = ea(v), S = Ah(b), $ = t.modifiersData.popperOffsets, k = t.rects.reference, y = t.rects.popper, x = typeof g == "function" ? g(Object.assign({}, t.rects, {
    placement: t.placement
  })) : g, C = typeof x == "number" ? {
    mainAxis: x,
    altAxis: x
  } : Object.assign({
    mainAxis: 0,
    altAxis: 0
  }, x), R = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null, I = {
    x: 0,
    y: 0
  };
  if (!!$) {
    if (o) {
      var T, M = b === "y" ? Se : Ce, O = b === "y" ? qe : Ge, D = b === "y" ? "height" : "width", A = $[b], j = A + h[M], H = A - h[O], F = l ? -y[D] / 2 : 0, G = m === Vn ? k[D] : y[D], z = m === Vn ? -y[D] : -k[D], K = t.elements.arrow, Q = l && K ? Zs(K) : {
        width: 0,
        height: 0
      }, L = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : ku(), V = L[M], X = L[O], q = kr(0, k[D], Q[D]), J = E ? k[D] / 2 - F - q - V - C.mainAxis : G - q - V - C.mainAxis, le = E ? -k[D] / 2 + F + q + X + C.mainAxis : z + q + X + C.mainAxis, ae = t.elements.arrow && po(t.elements.arrow), be = ae ? b === "y" ? ae.clientTop || 0 : ae.clientLeft || 0 : 0, Ze = (T = R == null ? void 0 : R[b]) != null ? T : 0, ee = A + J - Ze - be, St = A + le - Ze, je = kr(l ? fi(j, ee) : j, A, l ? dn(H, St) : H);
      $[b] = je, I[b] = je - A;
    }
    if (c) {
      var Ie, Ct = b === "x" ? Se : Ce, Qe = b === "x" ? qe : Ge, te = $[S], me = S === "y" ? "height" : "width", Be = te + h[Ct], Ot = te - h[Qe], Ue = [Se, Ce].indexOf(v) !== -1, At = (Ie = R == null ? void 0 : R[S]) != null ? Ie : 0, Mt = Ue ? Be : te - k[me] - y[me] - At + C.altAxis, Tt = Ue ? te + k[me] + y[me] - At - C.altAxis : Ot, Dt = l && Ue ? wh(Mt, te, Tt) : kr(l ? Mt : Be, te, l ? Tt : Ot);
      $[S] = Dt, I[S] = Dt - te;
    }
    t.modifiersData[r] = I;
  }
}
const Th = {
  name: "preventOverflow",
  enabled: !0,
  phase: "main",
  fn: Mh,
  requiresIfExists: ["offset"]
};
var Dh = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function No(e) {
  return e.replace(/left|right|bottom|top/g, function(t) {
    return Dh[t];
  });
}
var Nh = {
  start: "end",
  end: "start"
};
function Nl(e) {
  return e.replace(/start|end/g, function(t) {
    return Nh[t];
  });
}
function Lh(e, t) {
  t === void 0 && (t = {});
  var n = t, r = n.placement, s = n.boundary, o = n.rootBoundary, a = n.padding, c = n.flipVariations, f = n.allowedAutoPlacements, p = f === void 0 ? bu : f, i = Yn(r), d = i ? c ? Ol : Ol.filter(function(_) {
    return Yn(_) === i;
  }) : ho, u = d.filter(function(_) {
    return p.indexOf(_) >= 0;
  });
  u.length === 0 && (u = d);
  var l = u.reduce(function(_, g) {
    return _[g] = ta(e, {
      placement: g,
      boundary: s,
      rootBoundary: o,
      padding: a
    })[lt(g)], _;
  }, {});
  return Object.keys(l).sort(function(_, g) {
    return l[_] - l[g];
  });
}
function Ph(e) {
  if (lt(e) === Qs)
    return [];
  var t = No(e);
  return [Nl(e), t, Nl(t)];
}
function Rh(e) {
  var t = e.state, n = e.options, r = e.name;
  if (!t.modifiersData[r]._skip) {
    for (var s = n.mainAxis, o = s === void 0 ? !0 : s, a = n.altAxis, c = a === void 0 ? !0 : a, f = n.fallbackPlacements, p = n.padding, i = n.boundary, d = n.rootBoundary, u = n.altBoundary, l = n.flipVariations, _ = l === void 0 ? !0 : l, g = n.allowedAutoPlacements, h = t.options.placement, v = lt(h), m = v === h, E = f || (m || !_ ? [No(h)] : Ph(h)), b = [h].concat(E).reduce(function(Q, L) {
      return Q.concat(lt(L) === Qs ? Lh(t, {
        placement: L,
        boundary: i,
        rootBoundary: d,
        padding: p,
        flipVariations: _,
        allowedAutoPlacements: g
      }) : L);
    }, []), S = t.rects.reference, $ = t.rects.popper, k = /* @__PURE__ */ new Map(), y = !0, x = b[0], C = 0; C < b.length; C++) {
      var R = b[C], I = lt(R), T = Yn(R) === Vn, M = [Se, qe].indexOf(I) >= 0, O = M ? "width" : "height", D = ta(t, {
        placement: R,
        boundary: i,
        rootBoundary: d,
        altBoundary: u,
        padding: p
      }), A = M ? T ? Ge : Ce : T ? qe : Se;
      S[O] > $[O] && (A = No(A));
      var j = No(A), H = [];
      if (o && H.push(D[I] <= 0), c && H.push(D[A] <= 0, D[j] <= 0), H.every(function(Q) {
        return Q;
      })) {
        x = R, y = !1;
        break;
      }
      k.set(R, H);
    }
    if (y)
      for (var F = _ ? 3 : 1, G = function(L) {
        var V = b.find(function(X) {
          var q = k.get(X);
          if (q)
            return q.slice(0, L).every(function(J) {
              return J;
            });
        });
        if (V)
          return x = V, "break";
      }, z = F; z > 0; z--) {
        var K = G(z);
        if (K === "break")
          break;
      }
    t.placement !== x && (t.modifiersData[r]._skip = !0, t.placement = x, t.reset = !0);
  }
}
const Hh = {
  name: "flip",
  enabled: !0,
  phase: "main",
  fn: Rh,
  requiresIfExists: ["offset"],
  data: {
    _skip: !1
  }
};
var Cn, On, ln, Fe, no, Ci;
class it extends at {
  constructor() {
    super(...arguments);
    P(this, Cn, void 0);
    P(this, On, 0);
    P(this, ln, void 0);
    P(this, Fe, void 0);
    P(this, no, void 0);
    N(this, "hideLater", () => {
      w(this, Ci).call(this), W(this, On, window.setTimeout(this.hide.bind(this), 100));
    });
    P(this, Ci, () => {
      clearTimeout(w(this, On)), W(this, On, 0);
    });
  }
  get isShown() {
    var n;
    return (n = w(this, ln)) == null ? void 0 : n.classList.contains(this.constructor.CLASS_SHOW);
  }
  get datepicker() {
    return w(this, ln) || this._ensureDatepicker();
  }
  get popper() {
    return w(this, Fe) ? w(this, Fe) : this._createPopper();
  }
  get trigger() {
    return w(this, no) || this.element;
  }
  get elementShowClass() {
    return `with-${this.constructor.NAME}-show`;
  }
  show(n) {
    var r, s, o;
    return W(this, no, n), !this.datepicker || !this.element ? !1 : (this.element.classList.add(this.elementShowClass), this.datepicker.classList.add(this.constructor.CLASS_SHOW), this.datepicker.classList.add("fade"), (r = this.datepicker.querySelector(".datepicker-calendar-day")) == null || r.classList.remove("hidden"), (s = this.datepicker.querySelector(".datepicker-calendar-month")) == null || s.classList.add("hidden"), (o = this.datepicker.querySelector(".datepicker-calendar-year")) == null || o.classList.add("hidden"), this._createPopper().update(), !0);
  }
  hide() {
    var n, r;
    return (n = w(this, Fe)) == null || n.destroy(), W(this, Fe, void 0), this.element.classList.remove(this.elementShowClass), (r = w(this, ln)) == null || r.classList.remove(this.constructor.CLASS_SHOW), this.datepicker.classList.remove("fade"), !0;
  }
  toggle(n) {
    return this.isShown ? this.hide() : this.show(n);
  }
  destroy() {
    super.destroy();
  }
  _getArrowSize() {
    const { arrow: n } = this.options;
    return typeof n == "number" ? n : 4;
  }
  _createArrow() {
    const n = document.createElement("div");
    return n.classList.add("arrow", "datepicker-arrow"), n.style.setProperty("--arrow-size", `${this._getArrowSize()}px`), n;
  }
  _ensureDatepicker() {
    const n = this.constructor.CLASSNAME, r = document.createElement("div");
    return r.classList.add(n), Od(B(Nd, { ...this.options }), r), this.options.arrow && r.prepend(this._createArrow()), document.body.appendChild(r), W(this, ln, r), r;
  }
  _getPopperOptions() {
    const n = this._getArrowSize();
    return {
      modifiers: [
        Th,
        Hh,
        { ...Eh, options: {
          padding: n,
          element: ".arrow"
        } },
        {
          ...Oh,
          options: {
            offset: [0, n + 3]
          }
        },
        {
          name: "datepicker",
          enabled: !0,
          phase: "beforeWrite",
          fn: ({ state: r }) => {
            var o, a;
            const s = ((o = r.placement) == null ? void 0 : o.split("-").shift()) || "";
            (a = this.datepicker.querySelector(".arrow")) == null || a.setAttribute("class", `arrow arrow-${s}`), this.element.setAttribute("data-datepicker-placement", s);
          }
        }
      ].filter(Boolean),
      placement: this.options.placement,
      strategy: "absolute"
    };
  }
  _createPopper() {
    const n = this._getPopperOptions();
    return w(this, Fe) ? w(this, Fe).setOptions(n) : W(this, Fe, bh(this._getPopperElement(), this.datepicker, n)), w(this, Fe);
  }
  _getPopperElement() {
    return w(this, Cn) || W(this, Cn, {
      getBoundingClientRect: () => {
        const { element: n } = this;
        if (n instanceof MouseEvent) {
          const { clientX: r, clientY: s } = n;
          return {
            width: 0,
            height: 0,
            top: s,
            right: r,
            bottom: s,
            left: r
          };
        }
        return n instanceof HTMLElement ? n.getBoundingClientRect() : n;
      },
      contextElement: this.element
    }), w(this, Cn);
  }
  static clear(n) {
    n instanceof Event && (n = { event: n });
    const { exclude: r } = n || {}, s = this.getAll().entries(), o = new Set(r || []);
    for (const [a, c] of s)
      o.has(a) || c.hide();
  }
}
Cn = new WeakMap(), On = new WeakMap(), ln = new WeakMap(), Fe = new WeakMap(), no = new WeakMap(), Ci = new WeakMap(), N(it, "NAME", "datepicker"), N(it, "CLASSNAME", "datepicker"), N(it, "CLASS_SHOW", "show"), N(it, "MENU_SELECTOR", ".form-datetime:not(.disabled):not(:disabled)"), N(it, "DEFAULT", {
  date: Z().format("YYYY-MM-DD"),
  format: "YYYY-MM-DD",
  showOtherMonth: !0,
  minYear: 1911,
  placement: "bottom-start",
  strategy: "absolute",
  trigger: "click",
  showToday: !0,
  arrow: !0
});
document.addEventListener("click", function(e) {
  const t = e.target, n = t.closest(it.MENU_SELECTOR), r = t.closest(".datepicker-calendar-bar, .datepicker-calendar-thead, .datepicker-calendar-month-table");
  n ? it.ensure(n).toggle() : r || it.clear({ event: e });
});
const Wh = (e) => {
  const t = document.getElementsByClassName("with-datepicker-show")[0];
  if (!t)
    return;
  const n = typeof t.closest == "function" ? t.closest(it.MENU_SELECTOR) : null;
  !n || !e.target.contains(n) || it.clear({ event: e });
};
window.addEventListener("scroll", Wh, !0);
function jh(e, t, n) {
  if (n) {
    e.setAttribute("class", U(t));
    return;
  }
  zi(e.getAttribute("class"), t).forEach(([r, s]) => {
    e.classList.toggle(r, s);
  });
}
function hs(e, t, n) {
  if (typeof t == "object")
    return Object.entries(t).forEach(([r, s]) => {
      hs(e, r, s);
    });
  n !== void 0 && (e.style[t] = typeof n == "number" ? `${n}` : n);
}
var cn, ro, An, Lo;
const dt = class extends at {
  constructor() {
    super(...arguments);
    P(this, An);
    P(this, cn, 0);
    P(this, ro, void 0);
    N(this, "_handleClick", (n) => {
      const r = n.target;
      if (r.closest(dt.DISMISS_SELECTOR) || this.options.backdrop === !0 && !r.closest(".modal-dialog") && r.closest(".modal")) {
        this.hide();
        return;
      }
    });
  }
  get isShown() {
    return this.element.classList.contains(dt.CLASS_SHOW);
  }
  get dialog() {
    return this.element.querySelector(".modal-dialog");
  }
  afterInit() {
    if (this.on("click", this._handleClick), this.options.responsive && typeof ResizeObserver < "u") {
      const { dialog: n } = this;
      if (n) {
        const r = new ResizeObserver(this.adjustPosition.bind(this, void 0));
        r.observe(n), W(this, ro, r);
      }
    }
    this.options.show && this.show();
  }
  destroy() {
    var n;
    super.destroy(), (n = w(this, ro)) == null || n.disconnect();
  }
  show(n) {
    if (this.isShown)
      return;
    this.setOptions(n);
    const { animation: r, backdrop: s } = this.options;
    jh(this.element, [{
      "modal-trans": r,
      "modal-no-backdrop": !s
    }, dt.CLASS_SHOW]), this.element.style.zIndex = `${dt.zIndex++}`, this.adjustPosition(), this.emit("show", this), ne(this, An, Lo).call(this, () => {
      this.element.classList.add(dt.CLASS_SHOWN), ne(this, An, Lo).call(this, () => {
        this.emit("shown", this);
      });
    }, 50);
  }
  hide() {
    !this.isShown || (this.element.classList.remove(dt.CLASS_SHOWN), this.emit("hide", this), ne(this, An, Lo).call(this, () => {
      this.element.classList.remove(dt.CLASS_SHOW), this.emit("hidden", this);
    }));
  }
  adjustPosition(n) {
    n = n || this.options.position || "fit";
    const { dialog: r } = this;
    if (!r)
      return;
    const { width: s, height: o } = r.getBoundingClientRect();
    typeof n == "function" && (n = n({ width: s, height: o }));
    const a = {
      top: null,
      left: null,
      bottom: null,
      right: null,
      width: null,
      height: null,
      alignSelf: "center"
    };
    typeof n == "number" ? (a.alignSelf = "flex-start", a.top = n) : typeof n == "object" && n ? (a.alignSelf = "flex-start", Object.assign(a, n)) : n === "fit" ? (a.alignSelf = "flex-start", a.top = `${Math.max(0, Math.floor((window.innerHeight - o) / 3))}px`) : n === "bottom" ? a.alignSelf = "flex-end" : n === "top" && (a.alignSelf = "flex-start"), hs(r, a), hs(this.element, "justifyContent", a.left ? "flex-start" : "center");
  }
};
let Te = dt;
cn = new WeakMap(), ro = new WeakMap(), An = new WeakSet(), Lo = function(n, r) {
  w(this, cn) && (clearTimeout(w(this, cn)), W(this, cn, 0)), n && (this.options.animation ? W(this, cn, window.setTimeout(n, r != null ? r : this.options.transTime)) : n());
}, N(Te, "NAME", "modal"), N(Te, "EVENTS", !0), N(Te, "DEFAULT", {
  position: "fit",
  show: !0,
  keyboard: !0,
  animation: !0,
  backdrop: !0,
  responsive: !0,
  transTime: 300
}), N(Te, "CLASS_SHOW", "show"), N(Te, "CLASS_SHOWN", "in"), N(Te, "DISMISS_SELECTOR", '[data-dismiss="modal"]'), N(Te, "zIndex", 2e3);
window.addEventListener("resize", () => {
  Te.all.forEach((e) => {
    const t = e;
    t.isShown && t.options.responsive && t.adjustPosition();
  });
});
var yt;
class wn extends at {
  constructor() {
    super(...arguments);
    P(this, yt, void 0);
  }
  get modal() {
    return w(this, yt);
  }
  get container() {
    const { container: n } = this.options;
    return typeof n == "string" ? document.querySelector(n) : n instanceof HTMLElement ? n : document.body;
  }
  show() {
    return this._initModal().show();
  }
  hide() {
    var n;
    (n = w(this, yt)) == null || n.hide();
  }
  _getModalOptions() {
    const {
      width: n,
      position: r,
      backdrop: s,
      show: o,
      keyboard: a,
      moveable: c,
      animation: f,
      transTime: p,
      responsive: i
    } = this.options;
    return {
      width: n,
      position: r,
      backdrop: s,
      show: o,
      keyboard: a,
      moveable: c,
      animation: f,
      transTime: p,
      responsive: i
    };
  }
  _initModal() {
    const n = this._getModalOptions();
    let r = w(this, yt);
    return r ? r.setOptions(n) : (r = new Te(this._getModalElement(), n), W(this, yt, r)), r;
  }
  _getModalElement() {
    if (w(this, yt))
      return w(this, yt).element;
    const { type: n, target: r } = this.options;
    if (n === "static") {
      let s = r;
      if (!s) {
        const { element: o } = this;
        if (o.tagName === "A") {
          const a = o.getAttribute("href");
          a != null && a.startsWith("#") && (s = a);
        }
      }
      return this.container.querySelector(s || ".modal");
    }
  }
}
yt = new WeakMap(), N(wn, "NAME", "modalTrigger"), N(wn, "EVENTS", !0), N(wn, "DEFAULT", {
  ...Te.DEFAULT,
  type: "static"
}), N(wn, "TOGGLE_SELECTOR", '[data-toggle="modal"]');
window.addEventListener("click", (e) => {
  const n = e.target.closest(wn.TOGGLE_SELECTOR);
  if (n) {
    const r = wn.ensure(n);
    r && r.show();
  }
});
class Su extends wt {
  beforeRender() {
    const t = super.beforeRender();
    return t.className = U(t.className, t.type ? `nav-${t.type}` : "", {
      "nav-stacked": t.stacked
    }), t;
  }
}
N(Su, "NAME", "nav");
class Ll extends Je {
}
N(Ll, "NAME", "nav"), N(Ll, "Component", Su);
var Cu, vs, Ou, Ih = [];
function Zt(e, t, n) {
  var r, s, o, a = {};
  for (o in t)
    o == "key" ? r = t[o] : o == "ref" ? s = t[o] : a[o] = t[o];
  if (arguments.length > 2 && (a.children = arguments.length > 3 ? Cu.call(arguments, 2) : n), typeof e == "function" && e.defaultProps != null)
    for (o in e.defaultProps)
      a[o] === void 0 && (a[o] = e.defaultProps[o]);
  return Bh(e, a, r, s, null);
}
function Bh(e, t, n, r, s) {
  var o = { type: e, props: t, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: s == null ? ++Ou : s };
  return s == null && vs.vnode != null && vs.vnode(o), o;
}
Cu = Ih.slice, vs = { __e: function(e, t, n, r) {
  for (var s, o, a; t = t.__; )
    if ((s = t.__c) && !s.__)
      try {
        if ((o = s.constructor) && o.getDerivedStateFromError != null && (s.setState(o.getDerivedStateFromError(e)), a = s.__d), s.componentDidCatch != null && (s.componentDidCatch(e, r || {}), a = s.__d), a)
          return s.__E = s;
      } catch (c) {
        e = c;
      }
  throw e;
} }, Ou = 0;
var Au, ms, Mu, Uh = [];
function Ki(e, t, n) {
  var r, s, o, a = {};
  for (o in t)
    o == "key" ? r = t[o] : o == "ref" ? s = t[o] : a[o] = t[o];
  if (arguments.length > 2 && (a.children = arguments.length > 3 ? Au.call(arguments, 2) : n), typeof e == "function" && e.defaultProps != null)
    for (o in e.defaultProps)
      a[o] === void 0 && (a[o] = e.defaultProps[o]);
  return Fh(e, a, r, s, null);
}
function Fh(e, t, n, r, s) {
  var o = { type: e, props: t, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: s == null ? ++Mu : s };
  return s == null && ms.vnode != null && ms.vnode(o), o;
}
Au = Uh.slice, ms = { __e: function(e, t, n, r) {
  for (var s, o, a; t = t.__; )
    if ((s = t.__c) && !s.__)
      try {
        if ((o = s.constructor) && o.getDerivedStateFromError != null && (s.setState(o.getDerivedStateFromError(e)), a = s.__d), s.componentDidCatch != null && (s.componentDidCatch(e, r || {}), a = s.__d), a)
          return s.__E = s;
      } catch (c) {
        e = c;
      }
  throw e;
} }, Mu = 0;
function zh({
  key: e,
  type: t,
  btnType: n,
  ...r
}) {
  return /* @__PURE__ */ Ki(en, {
    type: n,
    ...r
  });
}
var na, de, Tu, xr, Pl, Du = {}, Nu = [], Vh = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function qt(e, t) {
  for (var n in t)
    e[n] = t[n];
  return e;
}
function Lu(e) {
  var t = e.parentNode;
  t && t.removeChild(e);
}
function Pu(e, t, n) {
  var r, s, o, a = {};
  for (o in t)
    o == "key" ? r = t[o] : o == "ref" ? s = t[o] : a[o] = t[o];
  if (arguments.length > 2 && (a.children = arguments.length > 3 ? na.call(arguments, 2) : n), typeof e == "function" && e.defaultProps != null)
    for (o in e.defaultProps)
      a[o] === void 0 && (a[o] = e.defaultProps[o]);
  return Po(e, a, r, s, null);
}
function Po(e, t, n, r, s) {
  var o = { type: e, props: t, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: s == null ? ++Tu : s };
  return s == null && de.vnode != null && de.vnode(o), o;
}
function Yh() {
  return { current: null };
}
function ra(e) {
  return e.children;
}
function Er(e, t) {
  this.props = e, this.context = t;
}
function Fr(e, t) {
  if (t == null)
    return e.__ ? Fr(e.__, e.__.__k.indexOf(e) + 1) : null;
  for (var n; t < e.__k.length; t++)
    if ((n = e.__k[t]) != null && n.__e != null)
      return n.__e;
  return typeof e.type == "function" ? Fr(e) : null;
}
function Ru(e) {
  var t, n;
  if ((e = e.__) != null && e.__c != null) {
    for (e.__e = e.__c.base = null, t = 0; t < e.__k.length; t++)
      if ((n = e.__k[t]) != null && n.__e != null) {
        e.__e = e.__c.base = n.__e;
        break;
      }
    return Ru(e);
  }
}
function Rl(e) {
  (!e.__d && (e.__d = !0) && xr.push(e) && !ui.__r++ || Pl !== de.debounceRendering) && ((Pl = de.debounceRendering) || setTimeout)(ui);
}
function ui() {
  for (var e; ui.__r = xr.length; )
    e = xr.sort(function(t, n) {
      return t.__v.__b - n.__v.__b;
    }), xr = [], e.some(function(t) {
      var n, r, s, o, a, c;
      t.__d && (a = (o = (n = t).__v).__e, (c = n.__P) && (r = [], (s = qt({}, o)).__v = o.__v + 1, Iu(c, o, s, n.__n, c.ownerSVGElement !== void 0, o.__h != null ? [a] : null, r, a == null ? Fr(o) : a, o.__h), Gh(r, o), o.__e != a && Ru(o)));
    });
}
function Hu(e, t, n, r, s, o, a, c, f, p) {
  var i, d, u, l, _, g, h, v = r && r.__k || Nu, m = v.length;
  for (n.__k = [], i = 0; i < t.length; i++)
    if ((l = n.__k[i] = (l = t[i]) == null || typeof l == "boolean" ? null : typeof l == "string" || typeof l == "number" || typeof l == "bigint" ? Po(null, l, null, null, l) : Array.isArray(l) ? Po(ra, { children: l }, null, null, null) : l.__b > 0 ? Po(l.type, l.props, l.key, l.ref ? l.ref : null, l.__v) : l) != null) {
      if (l.__ = n, l.__b = n.__b + 1, (u = v[i]) === null || u && l.key == u.key && l.type === u.type)
        v[i] = void 0;
      else
        for (d = 0; d < m; d++) {
          if ((u = v[d]) && l.key == u.key && l.type === u.type) {
            v[d] = void 0;
            break;
          }
          u = null;
        }
      Iu(e, l, u = u || Du, s, o, a, c, f, p), _ = l.__e, (d = l.ref) && u.ref != d && (h || (h = []), u.ref && h.push(u.ref, null, l), h.push(d, l.__c || _, l)), _ != null ? (g == null && (g = _), typeof l.type == "function" && l.__k === u.__k ? l.__d = f = Wu(l, f, e) : f = ju(e, l, u, v, _, f), typeof n.type == "function" && (n.__d = f)) : f && u.__e == f && f.parentNode != e && (f = Fr(u));
    }
  for (n.__e = g, i = m; i--; )
    v[i] != null && Uu(v[i], v[i]);
  if (h)
    for (i = 0; i < h.length; i++)
      Bu(h[i], h[++i], h[++i]);
}
function Wu(e, t, n) {
  for (var r, s = e.__k, o = 0; s && o < s.length; o++)
    (r = s[o]) && (r.__ = e, t = typeof r.type == "function" ? Wu(r, t, n) : ju(n, r, r, s, r.__e, t));
  return t;
}
function ju(e, t, n, r, s, o) {
  var a, c, f;
  if (t.__d !== void 0)
    a = t.__d, t.__d = void 0;
  else if (n == null || s != o || s.parentNode == null)
    e:
      if (o == null || o.parentNode !== e)
        e.appendChild(s), a = null;
      else {
        for (c = o, f = 0; (c = c.nextSibling) && f < r.length; f += 2)
          if (c == s)
            break e;
        e.insertBefore(s, o), a = o;
      }
  return a !== void 0 ? a : s.nextSibling;
}
function qh(e, t, n, r, s) {
  var o;
  for (o in n)
    o === "children" || o === "key" || o in t || _i(e, o, null, n[o], r);
  for (o in t)
    s && typeof t[o] != "function" || o === "children" || o === "key" || o === "value" || o === "checked" || n[o] === t[o] || _i(e, o, t[o], n[o], r);
}
function Hl(e, t, n) {
  t[0] === "-" ? e.setProperty(t, n) : e[t] = n == null ? "" : typeof n != "number" || Vh.test(t) ? n : n + "px";
}
function _i(e, t, n, r, s) {
  var o;
  e:
    if (t === "style")
      if (typeof n == "string")
        e.style.cssText = n;
      else {
        if (typeof r == "string" && (e.style.cssText = r = ""), r)
          for (t in r)
            n && t in n || Hl(e.style, t, "");
        if (n)
          for (t in n)
            r && n[t] === r[t] || Hl(e.style, t, n[t]);
      }
    else if (t[0] === "o" && t[1] === "n")
      o = t !== (t = t.replace(/Capture$/, "")), t = t.toLowerCase() in e ? t.toLowerCase().slice(2) : t.slice(2), e.l || (e.l = {}), e.l[t + o] = n, n ? r || e.addEventListener(t, o ? jl : Wl, o) : e.removeEventListener(t, o ? jl : Wl, o);
    else if (t !== "dangerouslySetInnerHTML") {
      if (s)
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
function Wl(e) {
  this.l[e.type + !1](de.event ? de.event(e) : e);
}
function jl(e) {
  this.l[e.type + !0](de.event ? de.event(e) : e);
}
function Iu(e, t, n, r, s, o, a, c, f) {
  var p, i, d, u, l, _, g, h, v, m, E, b, S, $, k, y = t.type;
  if (t.constructor !== void 0)
    return null;
  n.__h != null && (f = n.__h, c = t.__e = n.__e, t.__h = null, o = [c]), (p = de.__b) && p(t);
  try {
    e:
      if (typeof y == "function") {
        if (h = t.props, v = (p = y.contextType) && r[p.__c], m = p ? v ? v.props.value : p.__ : r, n.__c ? g = (i = t.__c = n.__c).__ = i.__E : ("prototype" in y && y.prototype.render ? t.__c = i = new y(h, m) : (t.__c = i = new Er(h, m), i.constructor = y, i.render = Kh), v && v.sub(i), i.props = h, i.state || (i.state = {}), i.context = m, i.__n = r, d = i.__d = !0, i.__h = [], i._sb = []), i.__s == null && (i.__s = i.state), y.getDerivedStateFromProps != null && (i.__s == i.state && (i.__s = qt({}, i.__s)), qt(i.__s, y.getDerivedStateFromProps(h, i.__s))), u = i.props, l = i.state, d)
          y.getDerivedStateFromProps == null && i.componentWillMount != null && i.componentWillMount(), i.componentDidMount != null && i.__h.push(i.componentDidMount);
        else {
          if (y.getDerivedStateFromProps == null && h !== u && i.componentWillReceiveProps != null && i.componentWillReceiveProps(h, m), !i.__e && i.shouldComponentUpdate != null && i.shouldComponentUpdate(h, i.__s, m) === !1 || t.__v === n.__v) {
            for (i.props = h, i.state = i.__s, t.__v !== n.__v && (i.__d = !1), i.__v = t, t.__e = n.__e, t.__k = n.__k, t.__k.forEach(function(x) {
              x && (x.__ = t);
            }), E = 0; E < i._sb.length; E++)
              i.__h.push(i._sb[E]);
            i._sb = [], i.__h.length && a.push(i);
            break e;
          }
          i.componentWillUpdate != null && i.componentWillUpdate(h, i.__s, m), i.componentDidUpdate != null && i.__h.push(function() {
            i.componentDidUpdate(u, l, _);
          });
        }
        if (i.context = m, i.props = h, i.__v = t, i.__P = e, b = de.__r, S = 0, "prototype" in y && y.prototype.render) {
          for (i.state = i.__s, i.__d = !1, b && b(t), p = i.render(i.props, i.state, i.context), $ = 0; $ < i._sb.length; $++)
            i.__h.push(i._sb[$]);
          i._sb = [];
        } else
          do
            i.__d = !1, b && b(t), p = i.render(i.props, i.state, i.context), i.state = i.__s;
          while (i.__d && ++S < 25);
        i.state = i.__s, i.getChildContext != null && (r = qt(qt({}, r), i.getChildContext())), d || i.getSnapshotBeforeUpdate == null || (_ = i.getSnapshotBeforeUpdate(u, l)), k = p != null && p.type === ra && p.key == null ? p.props.children : p, Hu(e, Array.isArray(k) ? k : [k], t, n, r, s, o, a, c, f), i.base = t.__e, t.__h = null, i.__h.length && a.push(i), g && (i.__E = i.__ = null), i.__e = !1;
      } else
        o == null && t.__v === n.__v ? (t.__k = n.__k, t.__e = n.__e) : t.__e = Xh(n.__e, t, n, r, s, o, a, f);
    (p = de.diffed) && p(t);
  } catch (x) {
    t.__v = null, (f || o != null) && (t.__e = c, t.__h = !!f, o[o.indexOf(c)] = null), de.__e(x, t, n);
  }
}
function Gh(e, t) {
  de.__c && de.__c(t, e), e.some(function(n) {
    try {
      e = n.__h, n.__h = [], e.some(function(r) {
        r.call(n);
      });
    } catch (r) {
      de.__e(r, n.__v);
    }
  });
}
function Xh(e, t, n, r, s, o, a, c) {
  var f, p, i, d = n.props, u = t.props, l = t.type, _ = 0;
  if (l === "svg" && (s = !0), o != null) {
    for (; _ < o.length; _++)
      if ((f = o[_]) && "setAttribute" in f == !!l && (l ? f.localName === l : f.nodeType === 3)) {
        e = f, o[_] = null;
        break;
      }
  }
  if (e == null) {
    if (l === null)
      return document.createTextNode(u);
    e = s ? document.createElementNS("http://www.w3.org/2000/svg", l) : document.createElement(l, u.is && u), o = null, c = !1;
  }
  if (l === null)
    d === u || c && e.data === u || (e.data = u);
  else {
    if (o = o && na.call(e.childNodes), p = (d = n.props || Du).dangerouslySetInnerHTML, i = u.dangerouslySetInnerHTML, !c) {
      if (o != null)
        for (d = {}, _ = 0; _ < e.attributes.length; _++)
          d[e.attributes[_].name] = e.attributes[_].value;
      (i || p) && (i && (p && i.__html == p.__html || i.__html === e.innerHTML) || (e.innerHTML = i && i.__html || ""));
    }
    if (qh(e, u, d, s, c), i)
      t.__k = [];
    else if (_ = t.props.children, Hu(e, Array.isArray(_) ? _ : [_], t, n, r, s && l !== "foreignObject", o, a, o ? o[0] : n.__k && Fr(n, 0), c), o != null)
      for (_ = o.length; _--; )
        o[_] != null && Lu(o[_]);
    c || ("value" in u && (_ = u.value) !== void 0 && (_ !== e.value || l === "progress" && !_ || l === "option" && _ !== d.value) && _i(e, "value", _, d.value, !1), "checked" in u && (_ = u.checked) !== void 0 && _ !== e.checked && _i(e, "checked", _, d.checked, !1));
  }
  return e;
}
function Bu(e, t, n) {
  try {
    typeof e == "function" ? e(t) : e.current = t;
  } catch (r) {
    de.__e(r, n);
  }
}
function Uu(e, t, n) {
  var r, s;
  if (de.unmount && de.unmount(e), (r = e.ref) && (r.current && r.current !== e.__e || Bu(r, null, t)), (r = e.__c) != null) {
    if (r.componentWillUnmount)
      try {
        r.componentWillUnmount();
      } catch (o) {
        de.__e(o, t);
      }
    r.base = r.__P = null, e.__c = void 0;
  }
  if (r = e.__k)
    for (s = 0; s < r.length; s++)
      r[s] && Uu(r[s], t, n || typeof e.type != "function");
  n || e.__e == null || Lu(e.__e), e.__ = e.__e = e.__d = void 0;
}
function Kh(e, t, n) {
  return this.constructor(e, n);
}
na = Nu.slice, de = { __e: function(e, t, n, r) {
  for (var s, o, a; t = t.__; )
    if ((s = t.__c) && !s.__)
      try {
        if ((o = s.constructor) && o.getDerivedStateFromError != null && (s.setState(o.getDerivedStateFromError(e)), a = s.__d), s.componentDidCatch != null && (s.componentDidCatch(e, r || {}), a = s.__d), a)
          return s.__E = s;
      } catch (c) {
        e = c;
      }
  throw e;
} }, Tu = 0, Er.prototype.setState = function(e, t) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = qt({}, this.state), typeof e == "function" && (e = e(qt({}, n), this.props)), e && qt(n, e), e != null && this.__v && (t && this._sb.push(t), Rl(this));
}, Er.prototype.forceUpdate = function(e) {
  this.__v && (this.__e = !0, e && this.__h.push(e), Rl(this));
}, Er.prototype.render = ra, xr = [], ui.__r = 0;
var oa = "top", Fu = "bottom", pi = "right", zr = "left", Jh = "auto", zu = [oa, Fu, pi, zr], Zh = "start", Qh = "end", ev = /* @__PURE__ */ [].concat(zu, [Jh]).reduce(function(e, t) {
  return e.concat([t, t + "-" + Zh, t + "-" + Qh]);
}, []);
function Vu(e) {
  return e.split("-")[0];
}
function tr(e) {
  if (e == null)
    return window;
  if (e.toString() !== "[object Window]") {
    var t = e.ownerDocument;
    return t && t.defaultView || window;
  }
  return e;
}
function Yu(e) {
  var t = tr(e).Element;
  return e instanceof t || e instanceof Element;
}
function di(e) {
  var t = tr(e).HTMLElement;
  return e instanceof t || e instanceof HTMLElement;
}
function ia(e) {
  if (typeof ShadowRoot > "u")
    return !1;
  var t = tr(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot;
}
var tv = Math.max, nv = Math.min, Il = Math.round;
function gs() {
  var e = navigator.userAgentData;
  return e != null && e.brands ? e.brands.map(function(t) {
    return t.brand + "/" + t.version;
  }).join(" ") : navigator.userAgent;
}
function rv() {
  return !/^((?!chrome|android).)*safari/i.test(gs());
}
function ov(e, t, n) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  var r = e.getBoundingClientRect(), s = 1, o = 1;
  t && di(e) && (s = e.offsetWidth > 0 && Il(r.width) / e.offsetWidth || 1, o = e.offsetHeight > 0 && Il(r.height) / e.offsetHeight || 1);
  var a = Yu(e) ? tr(e) : window, c = a.visualViewport, f = !rv() && n, p = (r.left + (f && c ? c.offsetLeft : 0)) / s, i = (r.top + (f && c ? c.offsetTop : 0)) / o, d = r.width / s, u = r.height / o;
  return {
    width: d,
    height: u,
    top: i,
    right: p + d,
    bottom: i + u,
    left: p,
    x: p,
    y: i
  };
}
function iv(e) {
  var t = ov(e), n = e.offsetWidth, r = e.offsetHeight;
  return Math.abs(t.width - n) <= 1 && (n = t.width), Math.abs(t.height - r) <= 1 && (r = t.height), {
    x: e.offsetLeft,
    y: e.offsetTop,
    width: n,
    height: r
  };
}
function sv(e, t) {
  var n = t.getRootNode && t.getRootNode();
  if (e.contains(t))
    return !0;
  if (n && ia(n)) {
    var r = t;
    do {
      if (r && e.isSameNode(r))
        return !0;
      r = r.parentNode || r.host;
    } while (r);
  }
  return !1;
}
function Vr(e) {
  return e ? (e.nodeName || "").toLowerCase() : null;
}
function Yr(e) {
  return tr(e).getComputedStyle(e);
}
function av(e) {
  return ["table", "td", "th"].indexOf(Vr(e)) >= 0;
}
function lv(e) {
  return ((Yu(e) ? e.ownerDocument : e.document) || window.document).documentElement;
}
function cv(e) {
  return Vr(e) === "html" ? e : e.assignedSlot || e.parentNode || (ia(e) ? e.host : null) || lv(e);
}
function Bl(e) {
  return !di(e) || Yr(e).position === "fixed" ? null : e.offsetParent;
}
function fv(e) {
  var t = /firefox/i.test(gs()), n = /Trident/i.test(gs());
  if (n && di(e)) {
    var r = Yr(e);
    if (r.position === "fixed")
      return null;
  }
  var s = cv(e);
  for (ia(s) && (s = s.host); di(s) && ["html", "body"].indexOf(Vr(s)) < 0; ) {
    var o = Yr(s);
    if (o.transform !== "none" || o.perspective !== "none" || o.contain === "paint" || ["transform", "perspective"].indexOf(o.willChange) !== -1 || t && o.willChange === "filter" || t && o.filter && o.filter !== "none")
      return s;
    s = s.parentNode;
  }
  return null;
}
function uv(e) {
  for (var t = tr(e), n = Bl(e); n && av(n) && Yr(n).position === "static"; )
    n = Bl(n);
  return n && (Vr(n) === "html" || Vr(n) === "body" && Yr(n).position === "static") ? t : n || fv(e) || t;
}
function _v(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function pv(e, t, n) {
  return tv(e, nv(t, n));
}
function dv() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
function hv(e) {
  return Object.assign({}, dv(), e);
}
function vv(e, t) {
  return t.reduce(function(n, r) {
    return n[r] = e, n;
  }, {});
}
var mv = function(t, n) {
  return t = typeof t == "function" ? t(Object.assign({}, n.rects, {
    placement: n.placement
  })) : t, hv(typeof t != "number" ? t : vv(t, zu));
};
function gv(e) {
  var t, n = e.state, r = e.name, s = e.options, o = n.elements.arrow, a = n.modifiersData.popperOffsets, c = Vu(n.placement), f = _v(c), p = [zr, pi].indexOf(c) >= 0, i = p ? "height" : "width";
  if (!(!o || !a)) {
    var d = mv(s.padding, n), u = iv(o), l = f === "y" ? oa : zr, _ = f === "y" ? Fu : pi, g = n.rects.reference[i] + n.rects.reference[f] - a[f] - n.rects.popper[i], h = a[f] - n.rects.reference[f], v = uv(o), m = v ? f === "y" ? v.clientHeight || 0 : v.clientWidth || 0 : 0, E = g / 2 - h / 2, b = d[l], S = m - u[i] - d[_], $ = m / 2 - u[i] / 2 + E, k = pv(b, $, S), y = f;
    n.modifiersData[r] = (t = {}, t[y] = k, t.centerOffset = k - $, t);
  }
}
function yv(e) {
  var t = e.state, n = e.options, r = n.element, s = r === void 0 ? "[data-popper-arrow]" : r;
  s != null && (typeof s == "string" && (s = t.elements.popper.querySelector(s), !s) || !sv(t.elements.popper, s) || (t.elements.arrow = s));
}
const bv = {
  name: "arrow",
  enabled: !0,
  phase: "main",
  fn: gv,
  effect: yv,
  requires: ["popperOffsets"],
  requiresIfExists: ["preventOverflow"]
};
function wv(e, t, n) {
  var r = Vu(e), s = [zr, oa].indexOf(r) >= 0 ? -1 : 1, o = typeof n == "function" ? n(Object.assign({}, t, {
    placement: e
  })) : n, a = o[0], c = o[1];
  return a = a || 0, c = (c || 0) * s, [zr, pi].indexOf(r) >= 0 ? {
    x: c,
    y: a
  } : {
    x: a,
    y: c
  };
}
function $v(e) {
  var t = e.state, n = e.options, r = e.name, s = n.offset, o = s === void 0 ? [0, 0] : s, a = ev.reduce(function(i, d) {
    return i[d] = wv(d, t.rects, o), i;
  }, {}), c = a[t.placement], f = c.x, p = c.y;
  t.modifiersData.popperOffsets != null && (t.modifiersData.popperOffsets.x += f, t.modifiersData.popperOffsets.y += p), t.modifiersData[r] = a;
}
const kv = {
  name: "offset",
  enabled: !0,
  phase: "main",
  requires: ["popperOffsets"],
  fn: $v
};
var Ji, se, qu, Sr, Ul, hi = {}, Gu = [], xv = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function Gt(e, t) {
  for (var n in t)
    e[n] = t[n];
  return e;
}
function Xu(e) {
  var t = e.parentNode;
  t && t.removeChild(e);
}
function sa(e, t, n) {
  var r, s, o, a = {};
  for (o in t)
    o == "key" ? r = t[o] : o == "ref" ? s = t[o] : a[o] = t[o];
  if (arguments.length > 2 && (a.children = arguments.length > 3 ? Ji.call(arguments, 2) : n), typeof e == "function" && e.defaultProps != null)
    for (o in e.defaultProps)
      a[o] === void 0 && (a[o] = e.defaultProps[o]);
  return Ro(e, a, r, s, null);
}
function Ro(e, t, n, r, s) {
  var o = { type: e, props: t, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: s == null ? ++qu : s };
  return s == null && se.vnode != null && se.vnode(o), o;
}
function Zi(e) {
  return e.children;
}
function Ho(e, t) {
  this.props = e, this.context = t;
}
function qr(e, t) {
  if (t == null)
    return e.__ ? qr(e.__, e.__.__k.indexOf(e) + 1) : null;
  for (var n; t < e.__k.length; t++)
    if ((n = e.__k[t]) != null && n.__e != null)
      return n.__e;
  return typeof e.type == "function" ? qr(e) : null;
}
function Ku(e) {
  var t, n;
  if ((e = e.__) != null && e.__c != null) {
    for (e.__e = e.__c.base = null, t = 0; t < e.__k.length; t++)
      if ((n = e.__k[t]) != null && n.__e != null) {
        e.__e = e.__c.base = n.__e;
        break;
      }
    return Ku(e);
  }
}
function Fl(e) {
  (!e.__d && (e.__d = !0) && Sr.push(e) && !vi.__r++ || Ul !== se.debounceRendering) && ((Ul = se.debounceRendering) || setTimeout)(vi);
}
function vi() {
  for (var e; vi.__r = Sr.length; )
    e = Sr.sort(function(t, n) {
      return t.__v.__b - n.__v.__b;
    }), Sr = [], e.some(function(t) {
      var n, r, s, o, a, c;
      t.__d && (a = (o = (n = t).__v).__e, (c = n.__P) && (r = [], (s = Gt({}, o)).__v = o.__v + 1, aa(c, o, s, n.__n, c.ownerSVGElement !== void 0, o.__h != null ? [a] : null, r, a == null ? qr(o) : a, o.__h), e_(r, o), o.__e != a && Ku(o)));
    });
}
function Ju(e, t, n, r, s, o, a, c, f, p) {
  var i, d, u, l, _, g, h, v = r && r.__k || Gu, m = v.length;
  for (n.__k = [], i = 0; i < t.length; i++)
    if ((l = n.__k[i] = (l = t[i]) == null || typeof l == "boolean" ? null : typeof l == "string" || typeof l == "number" || typeof l == "bigint" ? Ro(null, l, null, null, l) : Array.isArray(l) ? Ro(Zi, { children: l }, null, null, null) : l.__b > 0 ? Ro(l.type, l.props, l.key, l.ref ? l.ref : null, l.__v) : l) != null) {
      if (l.__ = n, l.__b = n.__b + 1, (u = v[i]) === null || u && l.key == u.key && l.type === u.type)
        v[i] = void 0;
      else
        for (d = 0; d < m; d++) {
          if ((u = v[d]) && l.key == u.key && l.type === u.type) {
            v[d] = void 0;
            break;
          }
          u = null;
        }
      aa(e, l, u = u || hi, s, o, a, c, f, p), _ = l.__e, (d = l.ref) && u.ref != d && (h || (h = []), u.ref && h.push(u.ref, null, l), h.push(d, l.__c || _, l)), _ != null ? (g == null && (g = _), typeof l.type == "function" && l.__k === u.__k ? l.__d = f = Zu(l, f, e) : f = Qu(e, l, u, v, _, f), typeof n.type == "function" && (n.__d = f)) : f && u.__e == f && f.parentNode != e && (f = qr(u));
    }
  for (n.__e = g, i = m; i--; )
    v[i] != null && n_(v[i], v[i]);
  if (h)
    for (i = 0; i < h.length; i++)
      t_(h[i], h[++i], h[++i]);
}
function Zu(e, t, n) {
  for (var r, s = e.__k, o = 0; s && o < s.length; o++)
    (r = s[o]) && (r.__ = e, t = typeof r.type == "function" ? Zu(r, t, n) : Qu(n, r, r, s, r.__e, t));
  return t;
}
function Qu(e, t, n, r, s, o) {
  var a, c, f;
  if (t.__d !== void 0)
    a = t.__d, t.__d = void 0;
  else if (n == null || s != o || s.parentNode == null)
    e:
      if (o == null || o.parentNode !== e)
        e.appendChild(s), a = null;
      else {
        for (c = o, f = 0; (c = c.nextSibling) && f < r.length; f += 2)
          if (c == s)
            break e;
        e.insertBefore(s, o), a = o;
      }
  return a !== void 0 ? a : s.nextSibling;
}
function Ev(e, t, n, r, s) {
  var o;
  for (o in n)
    o === "children" || o === "key" || o in t || mi(e, o, null, n[o], r);
  for (o in t)
    s && typeof t[o] != "function" || o === "children" || o === "key" || o === "value" || o === "checked" || n[o] === t[o] || mi(e, o, t[o], n[o], r);
}
function zl(e, t, n) {
  t[0] === "-" ? e.setProperty(t, n) : e[t] = n == null ? "" : typeof n != "number" || xv.test(t) ? n : n + "px";
}
function mi(e, t, n, r, s) {
  var o;
  e:
    if (t === "style")
      if (typeof n == "string")
        e.style.cssText = n;
      else {
        if (typeof r == "string" && (e.style.cssText = r = ""), r)
          for (t in r)
            n && t in n || zl(e.style, t, "");
        if (n)
          for (t in n)
            r && n[t] === r[t] || zl(e.style, t, n[t]);
      }
    else if (t[0] === "o" && t[1] === "n")
      o = t !== (t = t.replace(/Capture$/, "")), t = t.toLowerCase() in e ? t.toLowerCase().slice(2) : t.slice(2), e.l || (e.l = {}), e.l[t + o] = n, n ? r || e.addEventListener(t, o ? Yl : Vl, o) : e.removeEventListener(t, o ? Yl : Vl, o);
    else if (t !== "dangerouslySetInnerHTML") {
      if (s)
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
function Vl(e) {
  this.l[e.type + !1](se.event ? se.event(e) : e);
}
function Yl(e) {
  this.l[e.type + !0](se.event ? se.event(e) : e);
}
function aa(e, t, n, r, s, o, a, c, f) {
  var p, i, d, u, l, _, g, h, v, m, E, b, S, $, k, y = t.type;
  if (t.constructor !== void 0)
    return null;
  n.__h != null && (f = n.__h, c = t.__e = n.__e, t.__h = null, o = [c]), (p = se.__b) && p(t);
  try {
    e:
      if (typeof y == "function") {
        if (h = t.props, v = (p = y.contextType) && r[p.__c], m = p ? v ? v.props.value : p.__ : r, n.__c ? g = (i = t.__c = n.__c).__ = i.__E : ("prototype" in y && y.prototype.render ? t.__c = i = new y(h, m) : (t.__c = i = new Ho(h, m), i.constructor = y, i.render = Cv), v && v.sub(i), i.props = h, i.state || (i.state = {}), i.context = m, i.__n = r, d = i.__d = !0, i.__h = [], i._sb = []), i.__s == null && (i.__s = i.state), y.getDerivedStateFromProps != null && (i.__s == i.state && (i.__s = Gt({}, i.__s)), Gt(i.__s, y.getDerivedStateFromProps(h, i.__s))), u = i.props, l = i.state, d)
          y.getDerivedStateFromProps == null && i.componentWillMount != null && i.componentWillMount(), i.componentDidMount != null && i.__h.push(i.componentDidMount);
        else {
          if (y.getDerivedStateFromProps == null && h !== u && i.componentWillReceiveProps != null && i.componentWillReceiveProps(h, m), !i.__e && i.shouldComponentUpdate != null && i.shouldComponentUpdate(h, i.__s, m) === !1 || t.__v === n.__v) {
            for (i.props = h, i.state = i.__s, t.__v !== n.__v && (i.__d = !1), i.__v = t, t.__e = n.__e, t.__k = n.__k, t.__k.forEach(function(x) {
              x && (x.__ = t);
            }), E = 0; E < i._sb.length; E++)
              i.__h.push(i._sb[E]);
            i._sb = [], i.__h.length && a.push(i);
            break e;
          }
          i.componentWillUpdate != null && i.componentWillUpdate(h, i.__s, m), i.componentDidUpdate != null && i.__h.push(function() {
            i.componentDidUpdate(u, l, _);
          });
        }
        if (i.context = m, i.props = h, i.__v = t, i.__P = e, b = se.__r, S = 0, "prototype" in y && y.prototype.render) {
          for (i.state = i.__s, i.__d = !1, b && b(t), p = i.render(i.props, i.state, i.context), $ = 0; $ < i._sb.length; $++)
            i.__h.push(i._sb[$]);
          i._sb = [];
        } else
          do
            i.__d = !1, b && b(t), p = i.render(i.props, i.state, i.context), i.state = i.__s;
          while (i.__d && ++S < 25);
        i.state = i.__s, i.getChildContext != null && (r = Gt(Gt({}, r), i.getChildContext())), d || i.getSnapshotBeforeUpdate == null || (_ = i.getSnapshotBeforeUpdate(u, l)), k = p != null && p.type === Zi && p.key == null ? p.props.children : p, Ju(e, Array.isArray(k) ? k : [k], t, n, r, s, o, a, c, f), i.base = t.__e, t.__h = null, i.__h.length && a.push(i), g && (i.__E = i.__ = null), i.__e = !1;
      } else
        o == null && t.__v === n.__v ? (t.__k = n.__k, t.__e = n.__e) : t.__e = Sv(n.__e, t, n, r, s, o, a, f);
    (p = se.diffed) && p(t);
  } catch (x) {
    t.__v = null, (f || o != null) && (t.__e = c, t.__h = !!f, o[o.indexOf(c)] = null), se.__e(x, t, n);
  }
}
function e_(e, t) {
  se.__c && se.__c(t, e), e.some(function(n) {
    try {
      e = n.__h, n.__h = [], e.some(function(r) {
        r.call(n);
      });
    } catch (r) {
      se.__e(r, n.__v);
    }
  });
}
function Sv(e, t, n, r, s, o, a, c) {
  var f, p, i, d = n.props, u = t.props, l = t.type, _ = 0;
  if (l === "svg" && (s = !0), o != null) {
    for (; _ < o.length; _++)
      if ((f = o[_]) && "setAttribute" in f == !!l && (l ? f.localName === l : f.nodeType === 3)) {
        e = f, o[_] = null;
        break;
      }
  }
  if (e == null) {
    if (l === null)
      return document.createTextNode(u);
    e = s ? document.createElementNS("http://www.w3.org/2000/svg", l) : document.createElement(l, u.is && u), o = null, c = !1;
  }
  if (l === null)
    d === u || c && e.data === u || (e.data = u);
  else {
    if (o = o && Ji.call(e.childNodes), p = (d = n.props || hi).dangerouslySetInnerHTML, i = u.dangerouslySetInnerHTML, !c) {
      if (o != null)
        for (d = {}, _ = 0; _ < e.attributes.length; _++)
          d[e.attributes[_].name] = e.attributes[_].value;
      (i || p) && (i && (p && i.__html == p.__html || i.__html === e.innerHTML) || (e.innerHTML = i && i.__html || ""));
    }
    if (Ev(e, u, d, s, c), i)
      t.__k = [];
    else if (_ = t.props.children, Ju(e, Array.isArray(_) ? _ : [_], t, n, r, s && l !== "foreignObject", o, a, o ? o[0] : n.__k && qr(n, 0), c), o != null)
      for (_ = o.length; _--; )
        o[_] != null && Xu(o[_]);
    c || ("value" in u && (_ = u.value) !== void 0 && (_ !== e.value || l === "progress" && !_ || l === "option" && _ !== d.value) && mi(e, "value", _, d.value, !1), "checked" in u && (_ = u.checked) !== void 0 && _ !== e.checked && mi(e, "checked", _, d.checked, !1));
  }
  return e;
}
function t_(e, t, n) {
  try {
    typeof e == "function" ? e(t) : e.current = t;
  } catch (r) {
    se.__e(r, n);
  }
}
function n_(e, t, n) {
  var r, s;
  if (se.unmount && se.unmount(e), (r = e.ref) && (r.current && r.current !== e.__e || t_(r, null, t)), (r = e.__c) != null) {
    if (r.componentWillUnmount)
      try {
        r.componentWillUnmount();
      } catch (o) {
        se.__e(o, t);
      }
    r.base = r.__P = null, e.__c = void 0;
  }
  if (r = e.__k)
    for (s = 0; s < r.length; s++)
      r[s] && n_(r[s], t, n || typeof e.type != "function");
  n || e.__e == null || Xu(e.__e), e.__ = e.__e = e.__d = void 0;
}
function Cv(e, t, n) {
  return this.constructor(e, n);
}
function Ov(e, t, n) {
  var r, s, o;
  se.__ && se.__(e, t), s = (r = typeof n == "function") ? null : n && n.__k || t.__k, o = [], aa(t, e = (!r && n || t).__k = sa(Zi, null, [e]), s || hi, hi, t.ownerSVGElement !== void 0, !r && n ? [n] : s ? null : t.firstChild ? Ji.call(t.childNodes) : null, o, !r && n ? n : s ? s.__e : t.firstChild, r), e_(o, e);
}
Ji = Gu.slice, se = { __e: function(e, t, n, r) {
  for (var s, o, a; t = t.__; )
    if ((s = t.__c) && !s.__)
      try {
        if ((o = s.constructor) && o.getDerivedStateFromError != null && (s.setState(o.getDerivedStateFromError(e)), a = s.__d), s.componentDidCatch != null && (s.componentDidCatch(e, r || {}), a = s.__d), a)
          return s.__E = s;
      } catch (c) {
        e = c;
      }
  throw e;
} }, qu = 0, Ho.prototype.setState = function(e, t) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = Gt({}, this.state), typeof e == "function" && (e = e(Gt({}, n), this.props)), e && Gt(n, e), e != null && this.__v && (t && this._sb.push(t), Fl(this));
}, Ho.prototype.forceUpdate = function(e) {
  this.__v && (this.__e = !0, e && this.__h.push(e), Fl(this));
}, Ho.prototype.render = Zi, Sr = [], vi.__r = 0;
function He(e) {
  if (e == null)
    return window;
  if (e.toString() !== "[object Window]") {
    var t = e.ownerDocument;
    return t && t.defaultView || window;
  }
  return e;
}
function gn(e) {
  var t = He(e).Element;
  return e instanceof t || e instanceof Element;
}
function Le(e) {
  var t = He(e).HTMLElement;
  return e instanceof t || e instanceof HTMLElement;
}
function la(e) {
  if (typeof ShadowRoot > "u")
    return !1;
  var t = He(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot;
}
var hn = Math.max, gi = Math.min, qn = Math.round;
function ys() {
  var e = navigator.userAgentData;
  return e != null && e.brands ? e.brands.map(function(t) {
    return t.brand + "/" + t.version;
  }).join(" ") : navigator.userAgent;
}
function r_() {
  return !/^((?!chrome|android).)*safari/i.test(ys());
}
function Gn(e, t, n) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  var r = e.getBoundingClientRect(), s = 1, o = 1;
  t && Le(e) && (s = e.offsetWidth > 0 && qn(r.width) / e.offsetWidth || 1, o = e.offsetHeight > 0 && qn(r.height) / e.offsetHeight || 1);
  var a = gn(e) ? He(e) : window, c = a.visualViewport, f = !r_() && n, p = (r.left + (f && c ? c.offsetLeft : 0)) / s, i = (r.top + (f && c ? c.offsetTop : 0)) / o, d = r.width / s, u = r.height / o;
  return {
    width: d,
    height: u,
    top: i,
    right: p + d,
    bottom: i + u,
    left: p,
    x: p,
    y: i
  };
}
function ca(e) {
  var t = He(e), n = t.pageXOffset, r = t.pageYOffset;
  return {
    scrollLeft: n,
    scrollTop: r
  };
}
function Av(e) {
  return {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  };
}
function Mv(e) {
  return e === He(e) || !Le(e) ? ca(e) : Av(e);
}
function ut(e) {
  return e ? (e.nodeName || "").toLowerCase() : null;
}
function rn(e) {
  return ((gn(e) ? e.ownerDocument : e.document) || window.document).documentElement;
}
function fa(e) {
  return Gn(rn(e)).left + ca(e).scrollLeft;
}
function xt(e) {
  return He(e).getComputedStyle(e);
}
function ua(e) {
  var t = xt(e), n = t.overflow, r = t.overflowX, s = t.overflowY;
  return /auto|scroll|overlay|hidden/.test(n + s + r);
}
function Tv(e) {
  var t = e.getBoundingClientRect(), n = qn(t.width) / e.offsetWidth || 1, r = qn(t.height) / e.offsetHeight || 1;
  return n !== 1 || r !== 1;
}
function Dv(e, t, n) {
  n === void 0 && (n = !1);
  var r = Le(t), s = Le(t) && Tv(t), o = rn(t), a = Gn(e, s, n), c = {
    scrollLeft: 0,
    scrollTop: 0
  }, f = {
    x: 0,
    y: 0
  };
  return (r || !r && !n) && ((ut(t) !== "body" || ua(o)) && (c = Mv(t)), Le(t) ? (f = Gn(t, !0), f.x += t.clientLeft, f.y += t.clientTop) : o && (f.x = fa(o))), {
    x: a.left + c.scrollLeft - f.x,
    y: a.top + c.scrollTop - f.y,
    width: a.width,
    height: a.height
  };
}
function o_(e) {
  var t = Gn(e), n = e.offsetWidth, r = e.offsetHeight;
  return Math.abs(t.width - n) <= 1 && (n = t.width), Math.abs(t.height - r) <= 1 && (r = t.height), {
    x: e.offsetLeft,
    y: e.offsetTop,
    width: n,
    height: r
  };
}
function Qi(e) {
  return ut(e) === "html" ? e : e.assignedSlot || e.parentNode || (la(e) ? e.host : null) || rn(e);
}
function i_(e) {
  return ["html", "body", "#document"].indexOf(ut(e)) >= 0 ? e.ownerDocument.body : Le(e) && ua(e) ? e : i_(Qi(e));
}
function Cr(e, t) {
  var n;
  t === void 0 && (t = []);
  var r = i_(e), s = r === ((n = e.ownerDocument) == null ? void 0 : n.body), o = He(r), a = s ? [o].concat(o.visualViewport || [], ua(r) ? r : []) : r, c = t.concat(a);
  return s ? c : c.concat(Cr(Qi(a)));
}
function Nv(e) {
  return ["table", "td", "th"].indexOf(ut(e)) >= 0;
}
function ql(e) {
  return !Le(e) || xt(e).position === "fixed" ? null : e.offsetParent;
}
function Lv(e) {
  var t = /firefox/i.test(ys()), n = /Trident/i.test(ys());
  if (n && Le(e)) {
    var r = xt(e);
    if (r.position === "fixed")
      return null;
  }
  var s = Qi(e);
  for (la(s) && (s = s.host); Le(s) && ["html", "body"].indexOf(ut(s)) < 0; ) {
    var o = xt(s);
    if (o.transform !== "none" || o.perspective !== "none" || o.contain === "paint" || ["transform", "perspective"].indexOf(o.willChange) !== -1 || t && o.willChange === "filter" || t && o.filter && o.filter !== "none")
      return s;
    s = s.parentNode;
  }
  return null;
}
function es(e) {
  for (var t = He(e), n = ql(e); n && Nv(n) && xt(n).position === "static"; )
    n = ql(n);
  return n && (ut(n) === "html" || ut(n) === "body" && xt(n).position === "static") ? t : n || Lv(e) || t;
}
var Ye = "top", _t = "bottom", tn = "right", $t = "left", _a = "auto", ts = [Ye, _t, tn, $t], Xn = "start", Gr = "end", Pv = "clippingParents", s_ = "viewport", or = "popper", Rv = "reference", Gl = /* @__PURE__ */ ts.reduce(function(e, t) {
  return e.concat([t + "-" + Xn, t + "-" + Gr]);
}, []), Hv = /* @__PURE__ */ [].concat(ts, [_a]).reduce(function(e, t) {
  return e.concat([t, t + "-" + Xn, t + "-" + Gr]);
}, []), Wv = "beforeRead", jv = "read", Iv = "afterRead", Bv = "beforeMain", Uv = "main", Fv = "afterMain", zv = "beforeWrite", Vv = "write", Yv = "afterWrite", qv = [Wv, jv, Iv, Bv, Uv, Fv, zv, Vv, Yv];
function Gv(e) {
  var t = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Set(), r = [];
  e.forEach(function(o) {
    t.set(o.name, o);
  });
  function s(o) {
    n.add(o.name);
    var a = [].concat(o.requires || [], o.requiresIfExists || []);
    a.forEach(function(c) {
      if (!n.has(c)) {
        var f = t.get(c);
        f && s(f);
      }
    }), r.push(o);
  }
  return e.forEach(function(o) {
    n.has(o.name) || s(o);
  }), r;
}
function Xv(e) {
  var t = Gv(e);
  return qv.reduce(function(n, r) {
    return n.concat(t.filter(function(s) {
      return s.phase === r;
    }));
  }, []);
}
function Kv(e) {
  var t;
  return function() {
    return t || (t = new Promise(function(n) {
      Promise.resolve().then(function() {
        t = void 0, n(e());
      });
    })), t;
  };
}
function Qt(e) {
  return e.split("-")[0];
}
function Jv(e) {
  var t = e.reduce(function(n, r) {
    var s = n[r.name];
    return n[r.name] = s ? Object.assign({}, s, r, {
      options: Object.assign({}, s.options, r.options),
      data: Object.assign({}, s.data, r.data)
    }) : r, n;
  }, {});
  return Object.keys(t).map(function(n) {
    return t[n];
  });
}
function Zv(e, t) {
  var n = He(e), r = rn(e), s = n.visualViewport, o = r.clientWidth, a = r.clientHeight, c = 0, f = 0;
  if (s) {
    o = s.width, a = s.height;
    var p = r_();
    (p || !p && t === "fixed") && (c = s.offsetLeft, f = s.offsetTop);
  }
  return {
    width: o,
    height: a,
    x: c + fa(e),
    y: f
  };
}
function Qv(e) {
  var t, n = rn(e), r = ca(e), s = (t = e.ownerDocument) == null ? void 0 : t.body, o = hn(n.scrollWidth, n.clientWidth, s ? s.scrollWidth : 0, s ? s.clientWidth : 0), a = hn(n.scrollHeight, n.clientHeight, s ? s.scrollHeight : 0, s ? s.clientHeight : 0), c = -r.scrollLeft + fa(e), f = -r.scrollTop;
  return xt(s || n).direction === "rtl" && (c += hn(n.clientWidth, s ? s.clientWidth : 0) - o), {
    width: o,
    height: a,
    x: c,
    y: f
  };
}
function em(e, t) {
  var n = t.getRootNode && t.getRootNode();
  if (e.contains(t))
    return !0;
  if (n && la(n)) {
    var r = t;
    do {
      if (r && e.isSameNode(r))
        return !0;
      r = r.parentNode || r.host;
    } while (r);
  }
  return !1;
}
function bs(e) {
  return Object.assign({}, e, {
    left: e.x,
    top: e.y,
    right: e.x + e.width,
    bottom: e.y + e.height
  });
}
function tm(e, t) {
  var n = Gn(e, !1, t === "fixed");
  return n.top = n.top + e.clientTop, n.left = n.left + e.clientLeft, n.bottom = n.top + e.clientHeight, n.right = n.left + e.clientWidth, n.width = e.clientWidth, n.height = e.clientHeight, n.x = n.left, n.y = n.top, n;
}
function Xl(e, t, n) {
  return t === s_ ? bs(Zv(e, n)) : gn(t) ? tm(t, n) : bs(Qv(rn(e)));
}
function nm(e) {
  var t = Cr(Qi(e)), n = ["absolute", "fixed"].indexOf(xt(e).position) >= 0, r = n && Le(e) ? es(e) : e;
  return gn(r) ? t.filter(function(s) {
    return gn(s) && em(s, r) && ut(s) !== "body";
  }) : [];
}
function rm(e, t, n, r) {
  var s = t === "clippingParents" ? nm(e) : [].concat(t), o = [].concat(s, [n]), a = o[0], c = o.reduce(function(f, p) {
    var i = Xl(e, p, r);
    return f.top = hn(i.top, f.top), f.right = gi(i.right, f.right), f.bottom = gi(i.bottom, f.bottom), f.left = hn(i.left, f.left), f;
  }, Xl(e, a, r));
  return c.width = c.right - c.left, c.height = c.bottom - c.top, c.x = c.left, c.y = c.top, c;
}
function Kn(e) {
  return e.split("-")[1];
}
function a_(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function l_(e) {
  var t = e.reference, n = e.element, r = e.placement, s = r ? Qt(r) : null, o = r ? Kn(r) : null, a = t.x + t.width / 2 - n.width / 2, c = t.y + t.height / 2 - n.height / 2, f;
  switch (s) {
    case Ye:
      f = {
        x: a,
        y: t.y - n.height
      };
      break;
    case _t:
      f = {
        x: a,
        y: t.y + t.height
      };
      break;
    case tn:
      f = {
        x: t.x + t.width,
        y: c
      };
      break;
    case $t:
      f = {
        x: t.x - n.width,
        y: c
      };
      break;
    default:
      f = {
        x: t.x,
        y: t.y
      };
  }
  var p = s ? a_(s) : null;
  if (p != null) {
    var i = p === "y" ? "height" : "width";
    switch (o) {
      case Xn:
        f[p] = f[p] - (t[i] / 2 - n[i] / 2);
        break;
      case Gr:
        f[p] = f[p] + (t[i] / 2 - n[i] / 2);
        break;
    }
  }
  return f;
}
function c_() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
function om(e) {
  return Object.assign({}, c_(), e);
}
function im(e, t) {
  return t.reduce(function(n, r) {
    return n[r] = e, n;
  }, {});
}
function pa(e, t) {
  t === void 0 && (t = {});
  var n = t, r = n.placement, s = r === void 0 ? e.placement : r, o = n.strategy, a = o === void 0 ? e.strategy : o, c = n.boundary, f = c === void 0 ? Pv : c, p = n.rootBoundary, i = p === void 0 ? s_ : p, d = n.elementContext, u = d === void 0 ? or : d, l = n.altBoundary, _ = l === void 0 ? !1 : l, g = n.padding, h = g === void 0 ? 0 : g, v = om(typeof h != "number" ? h : im(h, ts)), m = u === or ? Rv : or, E = e.rects.popper, b = e.elements[_ ? m : u], S = rm(gn(b) ? b : b.contextElement || rn(e.elements.popper), f, i, a), $ = Gn(e.elements.reference), k = l_({
    reference: $,
    element: E,
    strategy: "absolute",
    placement: s
  }), y = bs(Object.assign({}, E, k)), x = u === or ? y : $, C = {
    top: S.top - x.top + v.top,
    bottom: x.bottom - S.bottom + v.bottom,
    left: S.left - x.left + v.left,
    right: x.right - S.right + v.right
  }, R = e.modifiersData.offset;
  if (u === or && R) {
    var I = R[s];
    Object.keys(C).forEach(function(T) {
      var M = [tn, _t].indexOf(T) >= 0 ? 1 : -1, O = [Ye, _t].indexOf(T) >= 0 ? "y" : "x";
      C[T] += I[O] * M;
    });
  }
  return C;
}
var Kl = {
  placement: "bottom",
  modifiers: [],
  strategy: "absolute"
};
function Jl() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return !t.some(function(r) {
    return !(r && typeof r.getBoundingClientRect == "function");
  });
}
function sm(e) {
  e === void 0 && (e = {});
  var t = e, n = t.defaultModifiers, r = n === void 0 ? [] : n, s = t.defaultOptions, o = s === void 0 ? Kl : s;
  return function(c, f, p) {
    p === void 0 && (p = o);
    var i = {
      placement: "bottom",
      orderedModifiers: [],
      options: Object.assign({}, Kl, o),
      modifiersData: {},
      elements: {
        reference: c,
        popper: f
      },
      attributes: {},
      styles: {}
    }, d = [], u = !1, l = {
      state: i,
      setOptions: function(v) {
        var m = typeof v == "function" ? v(i.options) : v;
        g(), i.options = Object.assign({}, o, i.options, m), i.scrollParents = {
          reference: gn(c) ? Cr(c) : c.contextElement ? Cr(c.contextElement) : [],
          popper: Cr(f)
        };
        var E = Xv(Jv([].concat(r, i.options.modifiers)));
        return i.orderedModifiers = E.filter(function(b) {
          return b.enabled;
        }), _(), l.update();
      },
      forceUpdate: function() {
        if (!u) {
          var v = i.elements, m = v.reference, E = v.popper;
          if (!!Jl(m, E)) {
            i.rects = {
              reference: Dv(m, es(E), i.options.strategy === "fixed"),
              popper: o_(E)
            }, i.reset = !1, i.placement = i.options.placement, i.orderedModifiers.forEach(function(C) {
              return i.modifiersData[C.name] = Object.assign({}, C.data);
            });
            for (var b = 0; b < i.orderedModifiers.length; b++) {
              if (i.reset === !0) {
                i.reset = !1, b = -1;
                continue;
              }
              var S = i.orderedModifiers[b], $ = S.fn, k = S.options, y = k === void 0 ? {} : k, x = S.name;
              typeof $ == "function" && (i = $({
                state: i,
                options: y,
                name: x,
                instance: l
              }) || i);
            }
          }
        }
      },
      update: Kv(function() {
        return new Promise(function(h) {
          l.forceUpdate(), h(i);
        });
      }),
      destroy: function() {
        g(), u = !0;
      }
    };
    if (!Jl(c, f))
      return l;
    l.setOptions(p).then(function(h) {
      !u && p.onFirstUpdate && p.onFirstUpdate(h);
    });
    function _() {
      i.orderedModifiers.forEach(function(h) {
        var v = h.name, m = h.options, E = m === void 0 ? {} : m, b = h.effect;
        if (typeof b == "function") {
          var S = b({
            state: i,
            name: v,
            instance: l,
            options: E
          }), $ = function() {
          };
          d.push(S || $);
        }
      });
    }
    function g() {
      d.forEach(function(h) {
        return h();
      }), d = [];
    }
    return l;
  };
}
var wo = {
  passive: !0
};
function am(e) {
  var t = e.state, n = e.instance, r = e.options, s = r.scroll, o = s === void 0 ? !0 : s, a = r.resize, c = a === void 0 ? !0 : a, f = He(t.elements.popper), p = [].concat(t.scrollParents.reference, t.scrollParents.popper);
  return o && p.forEach(function(i) {
    i.addEventListener("scroll", n.update, wo);
  }), c && f.addEventListener("resize", n.update, wo), function() {
    o && p.forEach(function(i) {
      i.removeEventListener("scroll", n.update, wo);
    }), c && f.removeEventListener("resize", n.update, wo);
  };
}
const lm = {
  name: "eventListeners",
  enabled: !0,
  phase: "write",
  fn: function() {
  },
  effect: am,
  data: {}
};
function cm(e) {
  var t = e.state, n = e.name;
  t.modifiersData[n] = l_({
    reference: t.rects.reference,
    element: t.rects.popper,
    strategy: "absolute",
    placement: t.placement
  });
}
const fm = {
  name: "popperOffsets",
  enabled: !0,
  phase: "read",
  fn: cm,
  data: {}
};
var um = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function _m(e) {
  var t = e.x, n = e.y, r = window, s = r.devicePixelRatio || 1;
  return {
    x: qn(t * s) / s || 0,
    y: qn(n * s) / s || 0
  };
}
function Zl(e) {
  var t, n = e.popper, r = e.popperRect, s = e.placement, o = e.variation, a = e.offsets, c = e.position, f = e.gpuAcceleration, p = e.adaptive, i = e.roundOffsets, d = e.isFixed, u = a.x, l = u === void 0 ? 0 : u, _ = a.y, g = _ === void 0 ? 0 : _, h = typeof i == "function" ? i({
    x: l,
    y: g
  }) : {
    x: l,
    y: g
  };
  l = h.x, g = h.y;
  var v = a.hasOwnProperty("x"), m = a.hasOwnProperty("y"), E = $t, b = Ye, S = window;
  if (p) {
    var $ = es(n), k = "clientHeight", y = "clientWidth";
    if ($ === He(n) && ($ = rn(n), xt($).position !== "static" && c === "absolute" && (k = "scrollHeight", y = "scrollWidth")), $ = $, s === Ye || (s === $t || s === tn) && o === Gr) {
      b = _t;
      var x = d && $ === S && S.visualViewport ? S.visualViewport.height : $[k];
      g -= x - r.height, g *= f ? 1 : -1;
    }
    if (s === $t || (s === Ye || s === _t) && o === Gr) {
      E = tn;
      var C = d && $ === S && S.visualViewport ? S.visualViewport.width : $[y];
      l -= C - r.width, l *= f ? 1 : -1;
    }
  }
  var R = Object.assign({
    position: c
  }, p && um), I = i === !0 ? _m({
    x: l,
    y: g
  }) : {
    x: l,
    y: g
  };
  if (l = I.x, g = I.y, f) {
    var T;
    return Object.assign({}, R, (T = {}, T[b] = m ? "0" : "", T[E] = v ? "0" : "", T.transform = (S.devicePixelRatio || 1) <= 1 ? "translate(" + l + "px, " + g + "px)" : "translate3d(" + l + "px, " + g + "px, 0)", T));
  }
  return Object.assign({}, R, (t = {}, t[b] = m ? g + "px" : "", t[E] = v ? l + "px" : "", t.transform = "", t));
}
function pm(e) {
  var t = e.state, n = e.options, r = n.gpuAcceleration, s = r === void 0 ? !0 : r, o = n.adaptive, a = o === void 0 ? !0 : o, c = n.roundOffsets, f = c === void 0 ? !0 : c, p = {
    placement: Qt(t.placement),
    variation: Kn(t.placement),
    popper: t.elements.popper,
    popperRect: t.rects.popper,
    gpuAcceleration: s,
    isFixed: t.options.strategy === "fixed"
  };
  t.modifiersData.popperOffsets != null && (t.styles.popper = Object.assign({}, t.styles.popper, Zl(Object.assign({}, p, {
    offsets: t.modifiersData.popperOffsets,
    position: t.options.strategy,
    adaptive: a,
    roundOffsets: f
  })))), t.modifiersData.arrow != null && (t.styles.arrow = Object.assign({}, t.styles.arrow, Zl(Object.assign({}, p, {
    offsets: t.modifiersData.arrow,
    position: "absolute",
    adaptive: !1,
    roundOffsets: f
  })))), t.attributes.popper = Object.assign({}, t.attributes.popper, {
    "data-popper-placement": t.placement
  });
}
const dm = {
  name: "computeStyles",
  enabled: !0,
  phase: "beforeWrite",
  fn: pm,
  data: {}
};
function hm(e) {
  var t = e.state;
  Object.keys(t.elements).forEach(function(n) {
    var r = t.styles[n] || {}, s = t.attributes[n] || {}, o = t.elements[n];
    !Le(o) || !ut(o) || (Object.assign(o.style, r), Object.keys(s).forEach(function(a) {
      var c = s[a];
      c === !1 ? o.removeAttribute(a) : o.setAttribute(a, c === !0 ? "" : c);
    }));
  });
}
function vm(e) {
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
    Object.keys(t.elements).forEach(function(r) {
      var s = t.elements[r], o = t.attributes[r] || {}, a = Object.keys(t.styles.hasOwnProperty(r) ? t.styles[r] : n[r]), c = a.reduce(function(f, p) {
        return f[p] = "", f;
      }, {});
      !Le(s) || !ut(s) || (Object.assign(s.style, c), Object.keys(o).forEach(function(f) {
        s.removeAttribute(f);
      }));
    });
  };
}
const mm = {
  name: "applyStyles",
  enabled: !0,
  phase: "write",
  fn: hm,
  effect: vm,
  requires: ["computeStyles"]
};
var gm = [lm, fm, dm, mm], f_ = /* @__PURE__ */ sm({
  defaultModifiers: gm
});
function ym(e) {
  return e === "x" ? "y" : "x";
}
function Wo(e, t, n) {
  return hn(e, gi(t, n));
}
function bm(e, t, n) {
  var r = Wo(e, t, n);
  return r > n ? n : r;
}
function wm(e) {
  var t = e.state, n = e.options, r = e.name, s = n.mainAxis, o = s === void 0 ? !0 : s, a = n.altAxis, c = a === void 0 ? !1 : a, f = n.boundary, p = n.rootBoundary, i = n.altBoundary, d = n.padding, u = n.tether, l = u === void 0 ? !0 : u, _ = n.tetherOffset, g = _ === void 0 ? 0 : _, h = pa(t, {
    boundary: f,
    rootBoundary: p,
    padding: d,
    altBoundary: i
  }), v = Qt(t.placement), m = Kn(t.placement), E = !m, b = a_(v), S = ym(b), $ = t.modifiersData.popperOffsets, k = t.rects.reference, y = t.rects.popper, x = typeof g == "function" ? g(Object.assign({}, t.rects, {
    placement: t.placement
  })) : g, C = typeof x == "number" ? {
    mainAxis: x,
    altAxis: x
  } : Object.assign({
    mainAxis: 0,
    altAxis: 0
  }, x), R = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null, I = {
    x: 0,
    y: 0
  };
  if (!!$) {
    if (o) {
      var T, M = b === "y" ? Ye : $t, O = b === "y" ? _t : tn, D = b === "y" ? "height" : "width", A = $[b], j = A + h[M], H = A - h[O], F = l ? -y[D] / 2 : 0, G = m === Xn ? k[D] : y[D], z = m === Xn ? -y[D] : -k[D], K = t.elements.arrow, Q = l && K ? o_(K) : {
        width: 0,
        height: 0
      }, L = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : c_(), V = L[M], X = L[O], q = Wo(0, k[D], Q[D]), J = E ? k[D] / 2 - F - q - V - C.mainAxis : G - q - V - C.mainAxis, le = E ? -k[D] / 2 + F + q + X + C.mainAxis : z + q + X + C.mainAxis, ae = t.elements.arrow && es(t.elements.arrow), be = ae ? b === "y" ? ae.clientTop || 0 : ae.clientLeft || 0 : 0, Ze = (T = R == null ? void 0 : R[b]) != null ? T : 0, ee = A + J - Ze - be, St = A + le - Ze, je = Wo(l ? gi(j, ee) : j, A, l ? hn(H, St) : H);
      $[b] = je, I[b] = je - A;
    }
    if (c) {
      var Ie, Ct = b === "x" ? Ye : $t, Qe = b === "x" ? _t : tn, te = $[S], me = S === "y" ? "height" : "width", Be = te + h[Ct], Ot = te - h[Qe], Ue = [Ye, $t].indexOf(v) !== -1, At = (Ie = R == null ? void 0 : R[S]) != null ? Ie : 0, Mt = Ue ? Be : te - k[me] - y[me] - At + C.altAxis, Tt = Ue ? te + k[me] + y[me] - At - C.altAxis : Ot, Dt = l && Ue ? bm(Mt, te, Tt) : Wo(l ? Mt : Be, te, l ? Tt : Ot);
      $[S] = Dt, I[S] = Dt - te;
    }
    t.modifiersData[r] = I;
  }
}
const ws = {
  name: "preventOverflow",
  enabled: !0,
  phase: "main",
  fn: wm,
  requiresIfExists: ["offset"]
};
var $m = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function jo(e) {
  return e.replace(/left|right|bottom|top/g, function(t) {
    return $m[t];
  });
}
var km = {
  start: "end",
  end: "start"
};
function Ql(e) {
  return e.replace(/start|end/g, function(t) {
    return km[t];
  });
}
function xm(e, t) {
  t === void 0 && (t = {});
  var n = t, r = n.placement, s = n.boundary, o = n.rootBoundary, a = n.padding, c = n.flipVariations, f = n.allowedAutoPlacements, p = f === void 0 ? Hv : f, i = Kn(r), d = i ? c ? Gl : Gl.filter(function(_) {
    return Kn(_) === i;
  }) : ts, u = d.filter(function(_) {
    return p.indexOf(_) >= 0;
  });
  u.length === 0 && (u = d);
  var l = u.reduce(function(_, g) {
    return _[g] = pa(e, {
      placement: g,
      boundary: s,
      rootBoundary: o,
      padding: a
    })[Qt(g)], _;
  }, {});
  return Object.keys(l).sort(function(_, g) {
    return l[_] - l[g];
  });
}
function Em(e) {
  if (Qt(e) === _a)
    return [];
  var t = jo(e);
  return [Ql(e), t, Ql(t)];
}
function Sm(e) {
  var t = e.state, n = e.options, r = e.name;
  if (!t.modifiersData[r]._skip) {
    for (var s = n.mainAxis, o = s === void 0 ? !0 : s, a = n.altAxis, c = a === void 0 ? !0 : a, f = n.fallbackPlacements, p = n.padding, i = n.boundary, d = n.rootBoundary, u = n.altBoundary, l = n.flipVariations, _ = l === void 0 ? !0 : l, g = n.allowedAutoPlacements, h = t.options.placement, v = Qt(h), m = v === h, E = f || (m || !_ ? [jo(h)] : Em(h)), b = [h].concat(E).reduce(function(Q, L) {
      return Q.concat(Qt(L) === _a ? xm(t, {
        placement: L,
        boundary: i,
        rootBoundary: d,
        padding: p,
        flipVariations: _,
        allowedAutoPlacements: g
      }) : L);
    }, []), S = t.rects.reference, $ = t.rects.popper, k = /* @__PURE__ */ new Map(), y = !0, x = b[0], C = 0; C < b.length; C++) {
      var R = b[C], I = Qt(R), T = Kn(R) === Xn, M = [Ye, _t].indexOf(I) >= 0, O = M ? "width" : "height", D = pa(t, {
        placement: R,
        boundary: i,
        rootBoundary: d,
        altBoundary: u,
        padding: p
      }), A = M ? T ? tn : $t : T ? _t : Ye;
      S[O] > $[O] && (A = jo(A));
      var j = jo(A), H = [];
      if (o && H.push(D[I] <= 0), c && H.push(D[A] <= 0, D[j] <= 0), H.every(function(Q) {
        return Q;
      })) {
        x = R, y = !1;
        break;
      }
      k.set(R, H);
    }
    if (y)
      for (var F = _ ? 3 : 1, G = function(L) {
        var V = b.find(function(X) {
          var q = k.get(X);
          if (q)
            return q.slice(0, L).every(function(J) {
              return J;
            });
        });
        if (V)
          return x = V, "break";
      }, z = F; z > 0; z--) {
        var K = G(z);
        if (K === "break")
          break;
      }
    t.placement !== x && (t.modifiersData[r]._skip = !0, t.placement = x, t.reset = !0);
  }
}
const u_ = {
  name: "flip",
  enabled: !0,
  phase: "main",
  fn: Sm,
  requiresIfExists: ["offset"],
  data: {
    _skip: !1
  }
};
function Cm(e) {
  return e.button === 2;
}
var Pt;
class Om extends Hs {
  constructor() {
    super(...arguments);
    P(this, Pt, void 0);
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
    super.componentWillUnmount(), (n = w(this, Pt)) == null || n.destroy();
  }
  _getPopperOptions() {
    return {
      modifiers: [ws, u_],
      placement: "right-start"
    };
  }
  _getPopperElement() {
    var n;
    return (n = this.ref.current) == null ? void 0 : n.parentElement;
  }
  _createPopper() {
    const n = this._getPopperOptions();
    return w(this, Pt) ? w(this, Pt).setOptions(n) : this.ref.current && W(this, Pt, f_(this._getPopperElement(), this.ref.current, n)), w(this, Pt);
  }
  afterRender(n) {
    super.afterRender(n), this.props.controlledMenu && this._createPopper();
  }
  renderToggleIcon() {
    return /* @__PURE__ */ sa("span", {
      class: "contextmenu-toggle-icon caret-right"
    });
  }
}
Pt = new WeakMap();
var Rt, De, Mn, oo;
class xe extends at {
  constructor() {
    super(...arguments);
    P(this, Rt, void 0);
    P(this, De, void 0);
    P(this, Mn, void 0);
    P(this, oo, void 0);
  }
  get isShown() {
    var n;
    return (n = w(this, Rt)) == null ? void 0 : n.classList.contains(this.constructor.CLASS_SHOW);
  }
  get menu() {
    return w(this, Rt) || this._ensureMenu();
  }
  get popper() {
    return w(this, De) ? w(this, De) : this._createPopper();
  }
  get trigger() {
    return w(this, oo) || this.element;
  }
  get isDynamic() {
    return this.options.items || this.options.menu;
  }
  init() {
    const { element: n } = this;
    n !== document.body && !n.hasAttribute("data-toggle") && n.setAttribute("data-toggle", "contextmenu");
  }
  show(n) {
    return W(this, oo, n), this.emit("show", { menu: this, trigger: this.trigger }).defaultPrevented || this.isDynamic && !this._renderMenu() ? !1 : (this.menu.classList.add(this.constructor.CLASS_SHOW), this._createPopper().update(), this.emit("shown", this), !0);
  }
  hide() {
    var r, s;
    return this.emit("hide", this).defaultPrevented ? !1 : ((r = w(this, De)) == null || r.destroy(), W(this, De, void 0), (s = w(this, Rt)) == null || s.classList.remove(this.constructor.CLASS_SHOW), this.emit("hidden", this), !0);
  }
  toggle(n) {
    return this.isShown ? this.hide() : this.show(n);
  }
  destroy() {
    var n, r;
    (n = w(this, De)) == null || n.destroy(), super.destroy(), (r = w(this, Rt)) == null || r.remove();
  }
  _ensureMenu() {
    var o, a;
    const { element: n } = this, r = this.constructor.MENU_CLASS;
    let s;
    if (this.isDynamic)
      s = document.createElement("div"), s.classList.add(r), document.body.appendChild(s);
    else if (n) {
      const c = (o = n.getAttribute("href")) != null ? o : n.dataset.target;
      if ((c == null ? void 0 : c[0]) === "#" && (s = document.querySelector(c)), !s) {
        const f = n.nextElementSibling;
        f != null && f.classList.contains(r) ? s = f : s = (a = n.parentNode) == null ? void 0 : a.querySelector(`.${r}`);
      }
    }
    if (!s)
      throw new Error("ContextMenu: Cannot find menu element");
    return W(this, Rt, s), s;
  }
  _getPopperOptions() {
    const { flip: n, preventOverflow: r, modifiers: s = [] } = this.options;
    return {
      modifiers: [
        r ? typeof r == "object" ? { ...ws, options: r } : ws : null,
        n ? u_ : null,
        ...s
      ].filter(Boolean),
      placement: this.options.placement,
      strategy: this.options.strategy
    };
  }
  _createPopper() {
    const n = this._getPopperOptions();
    return w(this, De) ? w(this, De).setOptions(n) : W(this, De, f_(this._getPopperElement(), this.menu, n)), w(this, De);
  }
  _getMenuOptions() {
    const { menu: n, items: r } = this.options;
    let s = r || (n == null ? void 0 : n.items);
    if (!!s)
      return typeof s == "function" && (s = s(this)), {
        nestedTrigger: "hover",
        ...n,
        items: s
      };
  }
  _renderMenu() {
    const n = this._getMenuOptions();
    return !n || this.emit("updateMenu", { menu: n, trigger: this.trigger, contextmenu: this }).defaultPrevented ? !1 : (Ov(sa(Om, n), this.menu), !0);
  }
  _getPopperElement() {
    return w(this, Mn) || W(this, Mn, {
      getBoundingClientRect: () => {
        const { trigger: n } = this;
        if (n instanceof MouseEvent) {
          const { clientX: r, clientY: s } = n;
          return {
            width: 0,
            height: 0,
            top: s,
            right: r,
            bottom: s,
            left: r
          };
        }
        return n instanceof HTMLElement ? n.getBoundingClientRect() : n;
      },
      contextElement: this.element
    }), w(this, Mn);
  }
  static clear(n) {
    var f, p;
    n instanceof Event && (n = { event: n });
    const { event: r, exclude: s, ignoreSelector: o = ".not-hide-menu" } = n || {};
    if (r && o && ((p = (f = r.target).closest) == null ? void 0 : p.call(f, o)) || r && Cm(r))
      return;
    const a = this.getAll().entries(), c = new Set(s || []);
    for (const [i, d] of a)
      c.has(i) || d.hide();
  }
  static show(n) {
    const { event: r, ...s } = n, o = this.ensure(document.body);
    return Object.keys(s).length && o.setOptions(s), o.show(r), r == null || r.stopPropagation(), o;
  }
  static hide() {
    const n = this.get(document.body);
    return n == null || n.hide(), n;
  }
}
Rt = new WeakMap(), De = new WeakMap(), Mn = new WeakMap(), oo = new WeakMap(), N(xe, "NAME", "contextmenu"), N(xe, "EVENTS", !0), N(xe, "DEFAULT", {
  placement: "bottom-start",
  strategy: "fixed",
  flip: !0,
  preventOverflow: !0
}), N(xe, "MENU_CLASS", "contextmenu"), N(xe, "CLASS_SHOW", "show"), N(xe, "MENU_SELECTOR", '[data-toggle="contextmenu"]:not(.disabled):not(:disabled)');
document.addEventListener("contextmenu", (e) => {
  const t = e.target;
  if (t.closest(`.${xe.MENU_CLASS}`))
    return;
  const n = t.closest(xe.MENU_SELECTOR);
  n && (xe.ensure(n).show(e), e.preventDefault());
});
document.addEventListener("click", xe.clear.bind(xe));
var Tn, Dn, Nn, Oi, __;
const Ca = class extends xe {
  constructor() {
    super(...arguments);
    P(this, Oi);
    P(this, Tn, !1);
    P(this, Dn, 0);
    N(this, "hideLater", () => {
      w(this, Nn).call(this), W(this, Dn, window.setTimeout(this.hide.bind(this), 100));
    });
    P(this, Nn, () => {
      clearTimeout(w(this, Dn)), W(this, Dn, 0);
    });
  }
  get isHover() {
    return this.options.trigger === "hover";
  }
  get elementShowClass() {
    return `with-${this.constructor.NAME}-show`;
  }
  show(n, r) {
    (r == null ? void 0 : r.clearOthers) !== !1 && Ca.clear({ event: r == null ? void 0 : r.event, exclude: [this.element] });
    const s = super.show(n);
    return s && (!w(this, Tn) && this.isHover && ne(this, Oi, __).call(this), this.element.classList.add(this.elementShowClass)), s;
  }
  hide() {
    const n = super.hide();
    return n && this.element.classList.remove(this.elementShowClass), n;
  }
  toggle(n, r) {
    return this.isShown ? this.hide() : this.show(n, { event: n, ...r });
  }
  destroy() {
    w(this, Tn) && (this.element.removeEventListener("mouseleave", this.hideLater), this.menu.removeEventListener("mouseenter", w(this, Nn)), this.menu.removeEventListener("mouseleave", this.hideLater)), super.destroy();
  }
  _getArrowSize() {
    const { arrow: n } = this.options;
    return n ? typeof n == "number" ? n : 5 : 0;
  }
  _getPopperOptions() {
    var s;
    const n = super._getPopperOptions(), r = this._getArrowSize();
    return r && n.modifiers.push({ ...bv, options: {
      padding: r,
      element: ".arrow"
    } }, {
      ...kv,
      options: {
        offset: [0, r + ((s = this.options.offset) != null ? s : 0)]
      }
    }, {
      name: "dropdown",
      enabled: !0,
      phase: "beforeWrite",
      fn: ({ state: o }) => {
        var c, f;
        const a = ((c = o.placement) == null ? void 0 : c.split("-").shift()) || "";
        (f = this.menu.querySelector(".arrow")) == null || f.setAttribute("class", `arrow arrow-${a}`), this.element.setAttribute("data-dropdown-placement", a);
      }
    }), n;
  }
  _ensureMenu() {
    const n = super._ensureMenu();
    if (this.options.arrow) {
      const r = document.createElement("div");
      r.classList.add("arrow"), r.style.setProperty("--arrow-size", `${this._getArrowSize()}px`), n.prepend(r);
    }
    return n;
  }
  _getMenuOptions() {
    const n = super._getMenuOptions();
    if (n && this.options.arrow) {
      const { afterRender: r } = n;
      n.afterRender = (...s) => {
        var a;
        const o = this.menu.querySelector(".arrow");
        o && ((a = this.menu.querySelector(".menu")) == null || a.appendChild(o), this.popper.update()), r == null || r(...s);
      };
    }
    return n;
  }
};
let we = Ca;
Tn = new WeakMap(), Dn = new WeakMap(), Nn = new WeakMap(), Oi = new WeakSet(), __ = function() {
  const { menu: n } = this;
  n.addEventListener("mouseenter", w(this, Nn)), n.addEventListener("mouseleave", this.hideLater), this.element.addEventListener("mouseleave", this.hideLater), W(this, Tn, !0);
}, N(we, "NAME", "dropdown"), N(we, "MENU_CLASS", "dropdown-menu"), N(we, "MENU_SELECTOR", '[data-toggle="dropdown"]:not(.disabled):not(:disabled)'), N(we, "DEFAULT", {
  ...xe.DEFAULT,
  strategy: "absolute",
  trigger: "click"
});
document.addEventListener("click", function(e) {
  const n = e.target.closest(we.MENU_SELECTOR);
  if (n) {
    const r = we.ensure(n);
    r.options.trigger === "click" && r.toggle();
  } else
    we.clear({ event: e });
});
document.addEventListener("mouseover", function(e) {
  const t = e.target, n = typeof t.closest == "function" ? t.closest(we.MENU_SELECTOR) : null;
  if (!n)
    return;
  const r = we.ensure(n);
  r.isHover && r.show();
});
const Am = (e) => {
  const t = document.getElementsByClassName("with-dropdown-show")[0];
  if (!t)
    return;
  const n = typeof t.closest == "function" ? t.closest(we.MENU_SELECTOR) : null;
  !n || !e.target.contains(n) || we.clear({ event: e });
};
window.addEventListener("scroll", Am, !0);
var io, Ln;
class Mm extends Er {
  constructor(n) {
    var r;
    super(n);
    P(this, io, void 0);
    P(this, Ln, Yh());
    this.state = { placement: ((r = n.dropdown) == null ? void 0 : r.placement) || "", show: !1 };
  }
  get ref() {
    return w(this, Ln);
  }
  get triggerElement() {
    return w(this, Ln).current;
  }
  componentDidMount() {
    const { modifiers: n = [], ...r } = this.props.dropdown || {};
    n.push({
      name: "dropdown-trigger",
      enabled: !0,
      phase: "beforeMain",
      fn: ({ state: s }) => {
        var a;
        const o = ((a = s.placement) == null ? void 0 : a.split("-").shift()) || "";
        this.setState({ placement: o });
      }
    }), W(this, io, we.ensure(this.triggerElement, {
      ...r,
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
    (n = w(this, io)) == null || n.destroy();
  }
  beforeRender() {
    const { className: n, children: r, dropdown: s, ...o } = this.props;
    return {
      className: U("dropdown", n),
      children: typeof r == "function" ? r(this.state) : r,
      ...o,
      "data-toggle": "dropdown",
      "data-dropdown-placement": this.state.placement,
      ref: w(this, Ln)
    };
  }
  render() {
    const { children: n, ...r } = this.beforeRender();
    return /* @__PURE__ */ Pu("div", {
      ...r
    }, n);
  }
}
io = new WeakMap(), Ln = new WeakMap();
class Tm extends Mm {
  get triggerElement() {
    return this.ref.current.base;
  }
  render() {
    var o;
    const { placement: t, show: n } = this.state, r = this.beforeRender();
    let { caret: s = !0 } = r;
    if (s !== !1 && (n || s === !0)) {
      const a = n ? t : (o = this.props.dropdown) == null ? void 0 : o.placement;
      s = (a === "top" ? "up" : a === "bottom" ? "down" : a) || (typeof s == "string" ? s : "") || "down";
    }
    return r.caret = s, /* @__PURE__ */ Pu(en, {
      ...r
    });
  }
}
function p_({
  key: e,
  type: t,
  btnType: n,
  ...r
}) {
  return /* @__PURE__ */ Ki(Tm, {
    type: n,
    ...r
  });
}
function Dm({
  key: e,
  type: t,
  btnType: n,
  ...r
}) {
  return /* @__PURE__ */ Ki(Bs, {
    type: n,
    ...r
  });
}
class sn extends wt {
  beforeRender() {
    const { gap: t, btnProps: n, wrap: r, ...s } = super.beforeRender();
    return s.className = U(s.className, r ? "flex-wrap" : "", typeof t == "number" ? `gap-${t}` : ""), typeof t == "string" && (s.style ? s.style.gap = t : s.style = { gap: t }), s;
  }
  isBtnItem(t) {
    return t === "item" || t === "dropdown";
  }
  renderTypedItem(t, n, r) {
    const s = this.isBtnItem(r.type) ? { btnType: "ghost", ...this.props.btnProps } : {}, o = {
      ...n,
      ...s,
      ...r,
      className: U(`${this.name}-${r.type}`, n.className, s.className, r.className),
      style: Object.assign({}, n.style, s.style, r.style)
    };
    return /* @__PURE__ */ Ki(t, {
      ...o
    });
  }
}
N(sn, "ItemComponents", {
  item: zh,
  dropdown: p_,
  "btn-group": Dm
}), N(sn, "ROOT_TAG", "nav"), N(sn, "NAME", "toolbar"), N(sn, "defaultProps", {
  btnProps: {
    btnType: "ghost"
  }
});
function Xr(e, t) {
  const n = e.pageTotal || Math.ceil(e.recTotal / e.recPerPage);
  return typeof t == "string" && (t === "first" ? t = 1 : t === "last" ? t = n : t === "prev" ? t = e.page - 1 : t === "next" ? t = e.page + 1 : t === "current" ? t = e.page : t = Number.parseInt(t, 10)), t = t !== void 0 ? Math.max(1, Math.min(t < 0 ? n + t : t, n)) : e.page, {
    ...e,
    pageTotal: n,
    page: t
  };
}
function Nm({
  key: e,
  type: t,
  btnType: n,
  page: r,
  format: s,
  pagerInfo: o,
  linkCreator: a,
  ...c
}) {
  const f = Xr(o, r);
  return c.text === void 0 && !c.icon && s && (c.text = typeof s == "function" ? s(f) : Ee(s, f)), c.url === void 0 && a && (c.url = typeof a == "function" ? a(f) : Ee(a, f)), c.disabled === void 0 && (c.disabled = r !== void 0 && f.page === o.page), /* @__PURE__ */ Zt(en, {
    type: n,
    ...c
  });
}
const ht = 24 * 60 * 60 * 1e3, Me = (e) => e ? (e instanceof Date || (typeof e == "string" && (e = e.trim(), /^\d+$/.test(e) && (e = Number.parseInt(e, 10))), typeof e == "number" && e < 1e10 && (e *= 1e3), e = new Date(e)), e) : new Date(), vo = (e, t = new Date()) => (e = Me(e), t = Me(t), e.getFullYear() === t.getFullYear() && e.getMonth() === t.getMonth() && e.getDate() === t.getDate()), ec = (e, t = new Date()) => Me(e).getFullYear() === Me(t).getFullYear(), Lm = (e, t = new Date()) => (e = Me(e), t = Me(t), e.getFullYear() === t.getFullYear() && e.getMonth() === t.getMonth()), Ey = (e, t = new Date()) => {
  e = Me(e), t = Me(t);
  const n = 1e3 * 60 * 60 * 24, r = Math.floor(e.getTime() / n), s = Math.floor(t.getTime() / n);
  return Math.floor((r + 4) / 7) === Math.floor((s + 4) / 7);
}, Sy = (e, t) => vo(Me(t), e), Cy = (e, t) => vo(Me(t).getTime() - ht, e), Oy = (e, t) => vo(Me(t).getTime() + ht, e), Ay = (e, t) => vo(Me(t).getTime() - 2 * ht, e), $s = (e, t = "yyyy-MM-dd hh:mm") => {
  e = Me(e);
  const n = {
    "M+": e.getMonth() + 1,
    "d+": e.getDate(),
    "h+": e.getHours(),
    "H+": e.getHours() % 12,
    "m+": e.getMinutes(),
    "s+": e.getSeconds(),
    "S+": e.getMilliseconds()
  };
  return /(y+)/i.test(t) && (t = t.replace(RegExp.$1, `${e.getFullYear()}`.substring(4 - RegExp.$1.length))), Object.keys(n).forEach((r) => {
    if (new RegExp(`(${r})`).test(t)) {
      const s = `${n[r]}`;
      t = t.replace(RegExp.$1, RegExp.$1.length === 1 ? s : `00${s}`.substring(s.length));
    }
  }), t;
}, My = (e, t, n) => {
  const r = {
    full: "yyyy-M-d",
    month: "M-d",
    day: "d",
    str: "{0} ~ {1}",
    ...n
  }, s = $s(e, ec(e) ? r.month : r.full);
  if (vo(e, t))
    return s;
  const o = $s(t, ec(e, t) ? Lm(e, t) ? r.day : r.month : r.full);
  return r.str.replace("{0}", s).replace("{1}", o);
}, Ty = (e) => {
  const t = new Date().getTime();
  switch (e) {
    case "oneWeek":
      return t - ht * 7;
    case "oneMonth":
      return t - ht * 31;
    case "threeMonth":
      return t - ht * 31 * 3;
    case "halfYear":
      return t - ht * 183;
    case "oneYear":
      return t - ht * 365;
    case "twoYear":
      return t - 2 * (ht * 365);
    default:
      return 0;
  }
}, tc = (e, t, n = !0, r = Date.now()) => {
  switch (t) {
    case "year":
      return e *= 365, tc(e, "day", n, r);
    case "quarter":
      e *= 3;
    case "month":
      return e *= 30, tc(e, "day", n, r);
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
  return n ? r + e : r - e;
};
function Pm({
  key: e,
  type: t,
  page: n,
  text: r = "",
  pagerInfo: s,
  children: o,
  ...a
}) {
  const c = Xr(s, n);
  return r = typeof r == "function" ? r(c) : Ee(r, c), /* @__PURE__ */ Zt(Zc, {
    ...a
  }, o, r);
}
function Rm({
  key: e,
  type: t,
  btnType: n,
  count: r = 12,
  pagerInfo: s,
  onClick: o,
  linkCreator: a,
  ...c
}) {
  if (!s.pageTotal)
    return;
  const f = { ...c, square: !0 }, p = () => (f.text = "", f.icon = "icon-ellipsis-h", f.disabled = !0, /* @__PURE__ */ Zt(en, {
    type: n,
    ...f
  })), i = (u, l) => {
    const _ = [];
    for (let g = u; g <= l; g++) {
      f.text = g, delete f.icon, f.disabled = !1;
      const h = Xr(s, g);
      a && (f.url = typeof a == "function" ? a(h) : Ee(a, h)), _.push(/* @__PURE__ */ Zt(en, {
        type: n,
        ...f,
        onClick: o
      }));
    }
    return _;
  };
  let d = [];
  return d = [...i(1, 1)], s.pageTotal <= 1 || (s.pageTotal <= r ? d = [...d, ...i(2, s.pageTotal)] : s.page < r - 2 ? d = [...d, ...i(2, r - 2), p(), ...i(s.pageTotal, s.pageTotal)] : s.page > s.pageTotal - r + 3 ? d = [...d, p(), ...i(s.pageTotal - r + 3, s.pageTotal)] : d = [...d, p(), ...i(s.page - Math.ceil((r - 4) / 2), s.page + Math.floor((r - 4) / 2)), p(), ...i(s.pageTotal, s.pageTotal)]), d;
}
function Hm({
  type: e,
  pagerInfo: t,
  linkCreator: n,
  items: r = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 100, 200, 500, 1e3, 2e3],
  dropdown: s = {},
  ...o
}) {
  var c, f;
  s.items = (c = s.items) != null ? c : r.map((p) => {
    const i = { ...t, recPerPage: p };
    return {
      text: `${p}`,
      url: typeof n == "function" ? n(i) : Ee(n, i)
    };
  });
  const { text: a = "" } = o;
  return o.text = typeof a == "function" ? a(t) : Ee(a, t), s.menu = { ...s.menu, className: U((f = s.menu) == null ? void 0 : f.className, "pager-size-menu") }, /* @__PURE__ */ Zt(p_, {
    type: "dropdown",
    dropdown: s,
    ...o
  });
}
function Wm({
  key: e,
  page: t,
  type: n,
  btnType: r,
  pagerInfo: s,
  size: o,
  onClick: a,
  onChange: c,
  linkCreator: f,
  ...p
}) {
  const i = { ...p };
  let d;
  const u = (g) => {
    var h;
    d = Number((h = g.target) == null ? void 0 : h.value) || 1, d = d > s.pageTotal ? s.pageTotal : d;
  }, l = (g) => {
    if (!(g != null && g.target))
      return;
    d = d <= s.pageTotal ? d : s.pageTotal;
    const h = Xr(s, d);
    c && !c({ info: h, event: g }) || (g.target.href = i.url = typeof f == "function" ? f(h) : Ee(f, h));
  }, _ = Xr(s, t || 0);
  return i.url = typeof f == "function" ? f(_) : Ee(f, _), i.className = U("input-group-addon", i.className), /* @__PURE__ */ Zt("div", {
    className: U("input-group", "pager-goto-group", o ? `size-${o}` : "")
  }, /* @__PURE__ */ Zt("input", {
    type: "number",
    class: "form-control",
    max: s.pageTotal,
    min: "1",
    onInput: u
  }), /* @__PURE__ */ Zt(en, {
    type: r,
    ...i,
    onClick: l
  }));
}
class Io extends sn {
  get pagerInfo() {
    const { page: t = 1, recTotal: n = 0, recPerPage: r = 10 } = this.props;
    return { page: t, recTotal: n, recPerPage: r, pageTotal: r ? Math.ceil(n / r) : 0 };
  }
  isBtnItem(t) {
    return t === "link" || t === "nav" || t === "size-menu" || t === "goto" || super.isBtnItem(t);
  }
  getItemRenderProps(t, n, r) {
    const s = super.getItemRenderProps(t, n, r), o = n.type || "item";
    return o === "info" ? Object.assign(s, { pagerInfo: this.pagerInfo }) : (o === "link" || o === "size-menu" || o === "nav" || o === "goto") && Object.assign(s, { pagerInfo: this.pagerInfo, linkCreator: t.linkCreator }), s;
  }
}
N(Io, "NAME", "pager"), N(Io, "defaultProps", {
  gap: 1,
  btnProps: {
    btnType: "ghost",
    size: "sm"
  }
}), N(Io, "ItemComponents", {
  ...sn.ItemComponents,
  link: Nm,
  info: Pm,
  nav: Rm,
  "size-menu": Hm,
  goto: Wm
});
class nc extends Je {
}
N(nc, "NAME", "pager"), N(nc, "Component", Io);
class rc extends Je {
}
N(rc, "NAME", "toolbar"), N(rc, "Component", sn);
function We(e) {
  if (e == null)
    return window;
  if (e.toString() !== "[object Window]") {
    var t = e.ownerDocument;
    return t && t.defaultView || window;
  }
  return e;
}
function yn(e) {
  var t = We(e).Element;
  return e instanceof t || e instanceof Element;
}
function Pe(e) {
  var t = We(e).HTMLElement;
  return e instanceof t || e instanceof HTMLElement;
}
function da(e) {
  if (typeof ShadowRoot > "u")
    return !1;
  var t = We(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot;
}
var vn = Math.max, yi = Math.min, Jn = Math.round;
function ks() {
  var e = navigator.userAgentData;
  return e != null && e.brands ? e.brands.map(function(t) {
    return t.brand + "/" + t.version;
  }).join(" ") : navigator.userAgent;
}
function d_() {
  return !/^((?!chrome|android).)*safari/i.test(ks());
}
function Zn(e, t, n) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  var r = e.getBoundingClientRect(), s = 1, o = 1;
  t && Pe(e) && (s = e.offsetWidth > 0 && Jn(r.width) / e.offsetWidth || 1, o = e.offsetHeight > 0 && Jn(r.height) / e.offsetHeight || 1);
  var a = yn(e) ? We(e) : window, c = a.visualViewport, f = !d_() && n, p = (r.left + (f && c ? c.offsetLeft : 0)) / s, i = (r.top + (f && c ? c.offsetTop : 0)) / o, d = r.width / s, u = r.height / o;
  return {
    width: d,
    height: u,
    top: i,
    right: p + d,
    bottom: i + u,
    left: p,
    x: p,
    y: i
  };
}
function ha(e) {
  var t = We(e), n = t.pageXOffset, r = t.pageYOffset;
  return {
    scrollLeft: n,
    scrollTop: r
  };
}
function jm(e) {
  return {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  };
}
function Im(e) {
  return e === We(e) || !Pe(e) ? ha(e) : jm(e);
}
function pt(e) {
  return e ? (e.nodeName || "").toLowerCase() : null;
}
function on(e) {
  return ((yn(e) ? e.ownerDocument : e.document) || window.document).documentElement;
}
function va(e) {
  return Zn(on(e)).left + ha(e).scrollLeft;
}
function Et(e) {
  return We(e).getComputedStyle(e);
}
function ma(e) {
  var t = Et(e), n = t.overflow, r = t.overflowX, s = t.overflowY;
  return /auto|scroll|overlay|hidden/.test(n + s + r);
}
function Bm(e) {
  var t = e.getBoundingClientRect(), n = Jn(t.width) / e.offsetWidth || 1, r = Jn(t.height) / e.offsetHeight || 1;
  return n !== 1 || r !== 1;
}
function Um(e, t, n) {
  n === void 0 && (n = !1);
  var r = Pe(t), s = Pe(t) && Bm(t), o = on(t), a = Zn(e, s, n), c = {
    scrollLeft: 0,
    scrollTop: 0
  }, f = {
    x: 0,
    y: 0
  };
  return (r || !r && !n) && ((pt(t) !== "body" || ma(o)) && (c = Im(t)), Pe(t) ? (f = Zn(t, !0), f.x += t.clientLeft, f.y += t.clientTop) : o && (f.x = va(o))), {
    x: a.left + c.scrollLeft - f.x,
    y: a.top + c.scrollTop - f.y,
    width: a.width,
    height: a.height
  };
}
function ga(e) {
  var t = Zn(e), n = e.offsetWidth, r = e.offsetHeight;
  return Math.abs(t.width - n) <= 1 && (n = t.width), Math.abs(t.height - r) <= 1 && (r = t.height), {
    x: e.offsetLeft,
    y: e.offsetTop,
    width: n,
    height: r
  };
}
function ns(e) {
  return pt(e) === "html" ? e : e.assignedSlot || e.parentNode || (da(e) ? e.host : null) || on(e);
}
function h_(e) {
  return ["html", "body", "#document"].indexOf(pt(e)) >= 0 ? e.ownerDocument.body : Pe(e) && ma(e) ? e : h_(ns(e));
}
function Or(e, t) {
  var n;
  t === void 0 && (t = []);
  var r = h_(e), s = r === ((n = e.ownerDocument) == null ? void 0 : n.body), o = We(r), a = s ? [o].concat(o.visualViewport || [], ma(r) ? r : []) : r, c = t.concat(a);
  return s ? c : c.concat(Or(ns(a)));
}
function Fm(e) {
  return ["table", "td", "th"].indexOf(pt(e)) >= 0;
}
function oc(e) {
  return !Pe(e) || Et(e).position === "fixed" ? null : e.offsetParent;
}
function zm(e) {
  var t = /firefox/i.test(ks()), n = /Trident/i.test(ks());
  if (n && Pe(e)) {
    var r = Et(e);
    if (r.position === "fixed")
      return null;
  }
  var s = ns(e);
  for (da(s) && (s = s.host); Pe(s) && ["html", "body"].indexOf(pt(s)) < 0; ) {
    var o = Et(s);
    if (o.transform !== "none" || o.perspective !== "none" || o.contain === "paint" || ["transform", "perspective"].indexOf(o.willChange) !== -1 || t && o.willChange === "filter" || t && o.filter && o.filter !== "none")
      return s;
    s = s.parentNode;
  }
  return null;
}
function mo(e) {
  for (var t = We(e), n = oc(e); n && Fm(n) && Et(n).position === "static"; )
    n = oc(n);
  return n && (pt(n) === "html" || pt(n) === "body" && Et(n).position === "static") ? t : n || zm(e) || t;
}
var Oe = "top", Xe = "bottom", Ke = "right", Ae = "left", ya = "auto", go = [Oe, Xe, Ke, Ae], Qn = "start", Kr = "end", Vm = "clippingParents", v_ = "viewport", ir = "popper", Ym = "reference", ic = /* @__PURE__ */ go.reduce(function(e, t) {
  return e.concat([t + "-" + Qn, t + "-" + Kr]);
}, []), m_ = /* @__PURE__ */ [].concat(go, [ya]).reduce(function(e, t) {
  return e.concat([t, t + "-" + Qn, t + "-" + Kr]);
}, []), qm = "beforeRead", Gm = "read", Xm = "afterRead", Km = "beforeMain", Jm = "main", Zm = "afterMain", Qm = "beforeWrite", eg = "write", tg = "afterWrite", ng = [qm, Gm, Xm, Km, Jm, Zm, Qm, eg, tg];
function rg(e) {
  var t = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Set(), r = [];
  e.forEach(function(o) {
    t.set(o.name, o);
  });
  function s(o) {
    n.add(o.name);
    var a = [].concat(o.requires || [], o.requiresIfExists || []);
    a.forEach(function(c) {
      if (!n.has(c)) {
        var f = t.get(c);
        f && s(f);
      }
    }), r.push(o);
  }
  return e.forEach(function(o) {
    n.has(o.name) || s(o);
  }), r;
}
function og(e) {
  var t = rg(e);
  return ng.reduce(function(n, r) {
    return n.concat(t.filter(function(s) {
      return s.phase === r;
    }));
  }, []);
}
function ig(e) {
  var t;
  return function() {
    return t || (t = new Promise(function(n) {
      Promise.resolve().then(function() {
        t = void 0, n(e());
      });
    })), t;
  };
}
function ct(e) {
  return e.split("-")[0];
}
function sg(e) {
  var t = e.reduce(function(n, r) {
    var s = n[r.name];
    return n[r.name] = s ? Object.assign({}, s, r, {
      options: Object.assign({}, s.options, r.options),
      data: Object.assign({}, s.data, r.data)
    }) : r, n;
  }, {});
  return Object.keys(t).map(function(n) {
    return t[n];
  });
}
function ag(e, t) {
  var n = We(e), r = on(e), s = n.visualViewport, o = r.clientWidth, a = r.clientHeight, c = 0, f = 0;
  if (s) {
    o = s.width, a = s.height;
    var p = d_();
    (p || !p && t === "fixed") && (c = s.offsetLeft, f = s.offsetTop);
  }
  return {
    width: o,
    height: a,
    x: c + va(e),
    y: f
  };
}
function lg(e) {
  var t, n = on(e), r = ha(e), s = (t = e.ownerDocument) == null ? void 0 : t.body, o = vn(n.scrollWidth, n.clientWidth, s ? s.scrollWidth : 0, s ? s.clientWidth : 0), a = vn(n.scrollHeight, n.clientHeight, s ? s.scrollHeight : 0, s ? s.clientHeight : 0), c = -r.scrollLeft + va(e), f = -r.scrollTop;
  return Et(s || n).direction === "rtl" && (c += vn(n.clientWidth, s ? s.clientWidth : 0) - o), {
    width: o,
    height: a,
    x: c,
    y: f
  };
}
function g_(e, t) {
  var n = t.getRootNode && t.getRootNode();
  if (e.contains(t))
    return !0;
  if (n && da(n)) {
    var r = t;
    do {
      if (r && e.isSameNode(r))
        return !0;
      r = r.parentNode || r.host;
    } while (r);
  }
  return !1;
}
function xs(e) {
  return Object.assign({}, e, {
    left: e.x,
    top: e.y,
    right: e.x + e.width,
    bottom: e.y + e.height
  });
}
function cg(e, t) {
  var n = Zn(e, !1, t === "fixed");
  return n.top = n.top + e.clientTop, n.left = n.left + e.clientLeft, n.bottom = n.top + e.clientHeight, n.right = n.left + e.clientWidth, n.width = e.clientWidth, n.height = e.clientHeight, n.x = n.left, n.y = n.top, n;
}
function sc(e, t, n) {
  return t === v_ ? xs(ag(e, n)) : yn(t) ? cg(t, n) : xs(lg(on(e)));
}
function fg(e) {
  var t = Or(ns(e)), n = ["absolute", "fixed"].indexOf(Et(e).position) >= 0, r = n && Pe(e) ? mo(e) : e;
  return yn(r) ? t.filter(function(s) {
    return yn(s) && g_(s, r) && pt(s) !== "body";
  }) : [];
}
function ug(e, t, n, r) {
  var s = t === "clippingParents" ? fg(e) : [].concat(t), o = [].concat(s, [n]), a = o[0], c = o.reduce(function(f, p) {
    var i = sc(e, p, r);
    return f.top = vn(i.top, f.top), f.right = yi(i.right, f.right), f.bottom = yi(i.bottom, f.bottom), f.left = vn(i.left, f.left), f;
  }, sc(e, a, r));
  return c.width = c.right - c.left, c.height = c.bottom - c.top, c.x = c.left, c.y = c.top, c;
}
function er(e) {
  return e.split("-")[1];
}
function ba(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function y_(e) {
  var t = e.reference, n = e.element, r = e.placement, s = r ? ct(r) : null, o = r ? er(r) : null, a = t.x + t.width / 2 - n.width / 2, c = t.y + t.height / 2 - n.height / 2, f;
  switch (s) {
    case Oe:
      f = {
        x: a,
        y: t.y - n.height
      };
      break;
    case Xe:
      f = {
        x: a,
        y: t.y + t.height
      };
      break;
    case Ke:
      f = {
        x: t.x + t.width,
        y: c
      };
      break;
    case Ae:
      f = {
        x: t.x - n.width,
        y: c
      };
      break;
    default:
      f = {
        x: t.x,
        y: t.y
      };
  }
  var p = s ? ba(s) : null;
  if (p != null) {
    var i = p === "y" ? "height" : "width";
    switch (o) {
      case Qn:
        f[p] = f[p] - (t[i] / 2 - n[i] / 2);
        break;
      case Kr:
        f[p] = f[p] + (t[i] / 2 - n[i] / 2);
        break;
    }
  }
  return f;
}
function b_() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
function w_(e) {
  return Object.assign({}, b_(), e);
}
function $_(e, t) {
  return t.reduce(function(n, r) {
    return n[r] = e, n;
  }, {});
}
function wa(e, t) {
  t === void 0 && (t = {});
  var n = t, r = n.placement, s = r === void 0 ? e.placement : r, o = n.strategy, a = o === void 0 ? e.strategy : o, c = n.boundary, f = c === void 0 ? Vm : c, p = n.rootBoundary, i = p === void 0 ? v_ : p, d = n.elementContext, u = d === void 0 ? ir : d, l = n.altBoundary, _ = l === void 0 ? !1 : l, g = n.padding, h = g === void 0 ? 0 : g, v = w_(typeof h != "number" ? h : $_(h, go)), m = u === ir ? Ym : ir, E = e.rects.popper, b = e.elements[_ ? m : u], S = ug(yn(b) ? b : b.contextElement || on(e.elements.popper), f, i, a), $ = Zn(e.elements.reference), k = y_({
    reference: $,
    element: E,
    strategy: "absolute",
    placement: s
  }), y = xs(Object.assign({}, E, k)), x = u === ir ? y : $, C = {
    top: S.top - x.top + v.top,
    bottom: x.bottom - S.bottom + v.bottom,
    left: S.left - x.left + v.left,
    right: x.right - S.right + v.right
  }, R = e.modifiersData.offset;
  if (u === ir && R) {
    var I = R[s];
    Object.keys(C).forEach(function(T) {
      var M = [Ke, Xe].indexOf(T) >= 0 ? 1 : -1, O = [Oe, Xe].indexOf(T) >= 0 ? "y" : "x";
      C[T] += I[O] * M;
    });
  }
  return C;
}
var ac = {
  placement: "bottom",
  modifiers: [],
  strategy: "absolute"
};
function lc() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return !t.some(function(r) {
    return !(r && typeof r.getBoundingClientRect == "function");
  });
}
function _g(e) {
  e === void 0 && (e = {});
  var t = e, n = t.defaultModifiers, r = n === void 0 ? [] : n, s = t.defaultOptions, o = s === void 0 ? ac : s;
  return function(c, f, p) {
    p === void 0 && (p = o);
    var i = {
      placement: "bottom",
      orderedModifiers: [],
      options: Object.assign({}, ac, o),
      modifiersData: {},
      elements: {
        reference: c,
        popper: f
      },
      attributes: {},
      styles: {}
    }, d = [], u = !1, l = {
      state: i,
      setOptions: function(v) {
        var m = typeof v == "function" ? v(i.options) : v;
        g(), i.options = Object.assign({}, o, i.options, m), i.scrollParents = {
          reference: yn(c) ? Or(c) : c.contextElement ? Or(c.contextElement) : [],
          popper: Or(f)
        };
        var E = og(sg([].concat(r, i.options.modifiers)));
        return i.orderedModifiers = E.filter(function(b) {
          return b.enabled;
        }), _(), l.update();
      },
      forceUpdate: function() {
        if (!u) {
          var v = i.elements, m = v.reference, E = v.popper;
          if (!!lc(m, E)) {
            i.rects = {
              reference: Um(m, mo(E), i.options.strategy === "fixed"),
              popper: ga(E)
            }, i.reset = !1, i.placement = i.options.placement, i.orderedModifiers.forEach(function(C) {
              return i.modifiersData[C.name] = Object.assign({}, C.data);
            });
            for (var b = 0; b < i.orderedModifiers.length; b++) {
              if (i.reset === !0) {
                i.reset = !1, b = -1;
                continue;
              }
              var S = i.orderedModifiers[b], $ = S.fn, k = S.options, y = k === void 0 ? {} : k, x = S.name;
              typeof $ == "function" && (i = $({
                state: i,
                options: y,
                name: x,
                instance: l
              }) || i);
            }
          }
        }
      },
      update: ig(function() {
        return new Promise(function(h) {
          l.forceUpdate(), h(i);
        });
      }),
      destroy: function() {
        g(), u = !0;
      }
    };
    if (!lc(c, f))
      return l;
    l.setOptions(p).then(function(h) {
      !u && p.onFirstUpdate && p.onFirstUpdate(h);
    });
    function _() {
      i.orderedModifiers.forEach(function(h) {
        var v = h.name, m = h.options, E = m === void 0 ? {} : m, b = h.effect;
        if (typeof b == "function") {
          var S = b({
            state: i,
            name: v,
            instance: l,
            options: E
          }), $ = function() {
          };
          d.push(S || $);
        }
      });
    }
    function g() {
      d.forEach(function(h) {
        return h();
      }), d = [];
    }
    return l;
  };
}
var $o = {
  passive: !0
};
function pg(e) {
  var t = e.state, n = e.instance, r = e.options, s = r.scroll, o = s === void 0 ? !0 : s, a = r.resize, c = a === void 0 ? !0 : a, f = We(t.elements.popper), p = [].concat(t.scrollParents.reference, t.scrollParents.popper);
  return o && p.forEach(function(i) {
    i.addEventListener("scroll", n.update, $o);
  }), c && f.addEventListener("resize", n.update, $o), function() {
    o && p.forEach(function(i) {
      i.removeEventListener("scroll", n.update, $o);
    }), c && f.removeEventListener("resize", n.update, $o);
  };
}
const dg = {
  name: "eventListeners",
  enabled: !0,
  phase: "write",
  fn: function() {
  },
  effect: pg,
  data: {}
};
function hg(e) {
  var t = e.state, n = e.name;
  t.modifiersData[n] = y_({
    reference: t.rects.reference,
    element: t.rects.popper,
    strategy: "absolute",
    placement: t.placement
  });
}
const vg = {
  name: "popperOffsets",
  enabled: !0,
  phase: "read",
  fn: hg,
  data: {}
};
var mg = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function gg(e) {
  var t = e.x, n = e.y, r = window, s = r.devicePixelRatio || 1;
  return {
    x: Jn(t * s) / s || 0,
    y: Jn(n * s) / s || 0
  };
}
function cc(e) {
  var t, n = e.popper, r = e.popperRect, s = e.placement, o = e.variation, a = e.offsets, c = e.position, f = e.gpuAcceleration, p = e.adaptive, i = e.roundOffsets, d = e.isFixed, u = a.x, l = u === void 0 ? 0 : u, _ = a.y, g = _ === void 0 ? 0 : _, h = typeof i == "function" ? i({
    x: l,
    y: g
  }) : {
    x: l,
    y: g
  };
  l = h.x, g = h.y;
  var v = a.hasOwnProperty("x"), m = a.hasOwnProperty("y"), E = Ae, b = Oe, S = window;
  if (p) {
    var $ = mo(n), k = "clientHeight", y = "clientWidth";
    if ($ === We(n) && ($ = on(n), Et($).position !== "static" && c === "absolute" && (k = "scrollHeight", y = "scrollWidth")), $ = $, s === Oe || (s === Ae || s === Ke) && o === Kr) {
      b = Xe;
      var x = d && $ === S && S.visualViewport ? S.visualViewport.height : $[k];
      g -= x - r.height, g *= f ? 1 : -1;
    }
    if (s === Ae || (s === Oe || s === Xe) && o === Kr) {
      E = Ke;
      var C = d && $ === S && S.visualViewport ? S.visualViewport.width : $[y];
      l -= C - r.width, l *= f ? 1 : -1;
    }
  }
  var R = Object.assign({
    position: c
  }, p && mg), I = i === !0 ? gg({
    x: l,
    y: g
  }) : {
    x: l,
    y: g
  };
  if (l = I.x, g = I.y, f) {
    var T;
    return Object.assign({}, R, (T = {}, T[b] = m ? "0" : "", T[E] = v ? "0" : "", T.transform = (S.devicePixelRatio || 1) <= 1 ? "translate(" + l + "px, " + g + "px)" : "translate3d(" + l + "px, " + g + "px, 0)", T));
  }
  return Object.assign({}, R, (t = {}, t[b] = m ? g + "px" : "", t[E] = v ? l + "px" : "", t.transform = "", t));
}
function yg(e) {
  var t = e.state, n = e.options, r = n.gpuAcceleration, s = r === void 0 ? !0 : r, o = n.adaptive, a = o === void 0 ? !0 : o, c = n.roundOffsets, f = c === void 0 ? !0 : c, p = {
    placement: ct(t.placement),
    variation: er(t.placement),
    popper: t.elements.popper,
    popperRect: t.rects.popper,
    gpuAcceleration: s,
    isFixed: t.options.strategy === "fixed"
  };
  t.modifiersData.popperOffsets != null && (t.styles.popper = Object.assign({}, t.styles.popper, cc(Object.assign({}, p, {
    offsets: t.modifiersData.popperOffsets,
    position: t.options.strategy,
    adaptive: a,
    roundOffsets: f
  })))), t.modifiersData.arrow != null && (t.styles.arrow = Object.assign({}, t.styles.arrow, cc(Object.assign({}, p, {
    offsets: t.modifiersData.arrow,
    position: "absolute",
    adaptive: !1,
    roundOffsets: f
  })))), t.attributes.popper = Object.assign({}, t.attributes.popper, {
    "data-popper-placement": t.placement
  });
}
const bg = {
  name: "computeStyles",
  enabled: !0,
  phase: "beforeWrite",
  fn: yg,
  data: {}
};
function wg(e) {
  var t = e.state;
  Object.keys(t.elements).forEach(function(n) {
    var r = t.styles[n] || {}, s = t.attributes[n] || {}, o = t.elements[n];
    !Pe(o) || !pt(o) || (Object.assign(o.style, r), Object.keys(s).forEach(function(a) {
      var c = s[a];
      c === !1 ? o.removeAttribute(a) : o.setAttribute(a, c === !0 ? "" : c);
    }));
  });
}
function $g(e) {
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
    Object.keys(t.elements).forEach(function(r) {
      var s = t.elements[r], o = t.attributes[r] || {}, a = Object.keys(t.styles.hasOwnProperty(r) ? t.styles[r] : n[r]), c = a.reduce(function(f, p) {
        return f[p] = "", f;
      }, {});
      !Pe(s) || !pt(s) || (Object.assign(s.style, c), Object.keys(o).forEach(function(f) {
        s.removeAttribute(f);
      }));
    });
  };
}
const kg = {
  name: "applyStyles",
  enabled: !0,
  phase: "write",
  fn: wg,
  effect: $g,
  requires: ["computeStyles"]
};
var xg = [dg, vg, bg, kg], Eg = /* @__PURE__ */ _g({
  defaultModifiers: xg
});
function Ar(e, t, n) {
  return vn(e, yi(t, n));
}
function Sg(e, t, n) {
  var r = Ar(e, t, n);
  return r > n ? n : r;
}
var Cg = function(t, n) {
  return t = typeof t == "function" ? t(Object.assign({}, n.rects, {
    placement: n.placement
  })) : t, w_(typeof t != "number" ? t : $_(t, go));
};
function Og(e) {
  var t, n = e.state, r = e.name, s = e.options, o = n.elements.arrow, a = n.modifiersData.popperOffsets, c = ct(n.placement), f = ba(c), p = [Ae, Ke].indexOf(c) >= 0, i = p ? "height" : "width";
  if (!(!o || !a)) {
    var d = Cg(s.padding, n), u = ga(o), l = f === "y" ? Oe : Ae, _ = f === "y" ? Xe : Ke, g = n.rects.reference[i] + n.rects.reference[f] - a[f] - n.rects.popper[i], h = a[f] - n.rects.reference[f], v = mo(o), m = v ? f === "y" ? v.clientHeight || 0 : v.clientWidth || 0 : 0, E = g / 2 - h / 2, b = d[l], S = m - u[i] - d[_], $ = m / 2 - u[i] / 2 + E, k = Ar(b, $, S), y = f;
    n.modifiersData[r] = (t = {}, t[y] = k, t.centerOffset = k - $, t);
  }
}
function Ag(e) {
  var t = e.state, n = e.options, r = n.element, s = r === void 0 ? "[data-popper-arrow]" : r;
  s != null && (typeof s == "string" && (s = t.elements.popper.querySelector(s), !s) || !g_(t.elements.popper, s) || (t.elements.arrow = s));
}
const Mg = {
  name: "arrow",
  enabled: !0,
  phase: "main",
  fn: Og,
  effect: Ag,
  requires: ["popperOffsets"],
  requiresIfExists: ["preventOverflow"]
};
function Tg(e, t, n) {
  var r = ct(e), s = [Ae, Oe].indexOf(r) >= 0 ? -1 : 1, o = typeof n == "function" ? n(Object.assign({}, t, {
    placement: e
  })) : n, a = o[0], c = o[1];
  return a = a || 0, c = (c || 0) * s, [Ae, Ke].indexOf(r) >= 0 ? {
    x: c,
    y: a
  } : {
    x: a,
    y: c
  };
}
function Dg(e) {
  var t = e.state, n = e.options, r = e.name, s = n.offset, o = s === void 0 ? [0, 0] : s, a = m_.reduce(function(i, d) {
    return i[d] = Tg(d, t.rects, o), i;
  }, {}), c = a[t.placement], f = c.x, p = c.y;
  t.modifiersData.popperOffsets != null && (t.modifiersData.popperOffsets.x += f, t.modifiersData.popperOffsets.y += p), t.modifiersData[r] = a;
}
const Ng = {
  name: "offset",
  enabled: !0,
  phase: "main",
  requires: ["popperOffsets"],
  fn: Dg
};
function Lg(e) {
  return e === "x" ? "y" : "x";
}
function Pg(e) {
  var t = e.state, n = e.options, r = e.name, s = n.mainAxis, o = s === void 0 ? !0 : s, a = n.altAxis, c = a === void 0 ? !1 : a, f = n.boundary, p = n.rootBoundary, i = n.altBoundary, d = n.padding, u = n.tether, l = u === void 0 ? !0 : u, _ = n.tetherOffset, g = _ === void 0 ? 0 : _, h = wa(t, {
    boundary: f,
    rootBoundary: p,
    padding: d,
    altBoundary: i
  }), v = ct(t.placement), m = er(t.placement), E = !m, b = ba(v), S = Lg(b), $ = t.modifiersData.popperOffsets, k = t.rects.reference, y = t.rects.popper, x = typeof g == "function" ? g(Object.assign({}, t.rects, {
    placement: t.placement
  })) : g, C = typeof x == "number" ? {
    mainAxis: x,
    altAxis: x
  } : Object.assign({
    mainAxis: 0,
    altAxis: 0
  }, x), R = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null, I = {
    x: 0,
    y: 0
  };
  if (!!$) {
    if (o) {
      var T, M = b === "y" ? Oe : Ae, O = b === "y" ? Xe : Ke, D = b === "y" ? "height" : "width", A = $[b], j = A + h[M], H = A - h[O], F = l ? -y[D] / 2 : 0, G = m === Qn ? k[D] : y[D], z = m === Qn ? -y[D] : -k[D], K = t.elements.arrow, Q = l && K ? ga(K) : {
        width: 0,
        height: 0
      }, L = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : b_(), V = L[M], X = L[O], q = Ar(0, k[D], Q[D]), J = E ? k[D] / 2 - F - q - V - C.mainAxis : G - q - V - C.mainAxis, le = E ? -k[D] / 2 + F + q + X + C.mainAxis : z + q + X + C.mainAxis, ae = t.elements.arrow && mo(t.elements.arrow), be = ae ? b === "y" ? ae.clientTop || 0 : ae.clientLeft || 0 : 0, Ze = (T = R == null ? void 0 : R[b]) != null ? T : 0, ee = A + J - Ze - be, St = A + le - Ze, je = Ar(l ? yi(j, ee) : j, A, l ? vn(H, St) : H);
      $[b] = je, I[b] = je - A;
    }
    if (c) {
      var Ie, Ct = b === "x" ? Oe : Ae, Qe = b === "x" ? Xe : Ke, te = $[S], me = S === "y" ? "height" : "width", Be = te + h[Ct], Ot = te - h[Qe], Ue = [Oe, Ae].indexOf(v) !== -1, At = (Ie = R == null ? void 0 : R[S]) != null ? Ie : 0, Mt = Ue ? Be : te - k[me] - y[me] - At + C.altAxis, Tt = Ue ? te + k[me] + y[me] - At - C.altAxis : Ot, Dt = l && Ue ? Sg(Mt, te, Tt) : Ar(l ? Mt : Be, te, l ? Tt : Ot);
      $[S] = Dt, I[S] = Dt - te;
    }
    t.modifiersData[r] = I;
  }
}
const Rg = {
  name: "preventOverflow",
  enabled: !0,
  phase: "main",
  fn: Pg,
  requiresIfExists: ["offset"]
};
var Hg = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function Bo(e) {
  return e.replace(/left|right|bottom|top/g, function(t) {
    return Hg[t];
  });
}
var Wg = {
  start: "end",
  end: "start"
};
function fc(e) {
  return e.replace(/start|end/g, function(t) {
    return Wg[t];
  });
}
function jg(e, t) {
  t === void 0 && (t = {});
  var n = t, r = n.placement, s = n.boundary, o = n.rootBoundary, a = n.padding, c = n.flipVariations, f = n.allowedAutoPlacements, p = f === void 0 ? m_ : f, i = er(r), d = i ? c ? ic : ic.filter(function(_) {
    return er(_) === i;
  }) : go, u = d.filter(function(_) {
    return p.indexOf(_) >= 0;
  });
  u.length === 0 && (u = d);
  var l = u.reduce(function(_, g) {
    return _[g] = wa(e, {
      placement: g,
      boundary: s,
      rootBoundary: o,
      padding: a
    })[ct(g)], _;
  }, {});
  return Object.keys(l).sort(function(_, g) {
    return l[_] - l[g];
  });
}
function Ig(e) {
  if (ct(e) === ya)
    return [];
  var t = Bo(e);
  return [fc(e), t, fc(t)];
}
function Bg(e) {
  var t = e.state, n = e.options, r = e.name;
  if (!t.modifiersData[r]._skip) {
    for (var s = n.mainAxis, o = s === void 0 ? !0 : s, a = n.altAxis, c = a === void 0 ? !0 : a, f = n.fallbackPlacements, p = n.padding, i = n.boundary, d = n.rootBoundary, u = n.altBoundary, l = n.flipVariations, _ = l === void 0 ? !0 : l, g = n.allowedAutoPlacements, h = t.options.placement, v = ct(h), m = v === h, E = f || (m || !_ ? [Bo(h)] : Ig(h)), b = [h].concat(E).reduce(function(Q, L) {
      return Q.concat(ct(L) === ya ? jg(t, {
        placement: L,
        boundary: i,
        rootBoundary: d,
        padding: p,
        flipVariations: _,
        allowedAutoPlacements: g
      }) : L);
    }, []), S = t.rects.reference, $ = t.rects.popper, k = /* @__PURE__ */ new Map(), y = !0, x = b[0], C = 0; C < b.length; C++) {
      var R = b[C], I = ct(R), T = er(R) === Qn, M = [Oe, Xe].indexOf(I) >= 0, O = M ? "width" : "height", D = wa(t, {
        placement: R,
        boundary: i,
        rootBoundary: d,
        altBoundary: u,
        padding: p
      }), A = M ? T ? Ke : Ae : T ? Xe : Oe;
      S[O] > $[O] && (A = Bo(A));
      var j = Bo(A), H = [];
      if (o && H.push(D[I] <= 0), c && H.push(D[A] <= 0, D[j] <= 0), H.every(function(Q) {
        return Q;
      })) {
        x = R, y = !1;
        break;
      }
      k.set(R, H);
    }
    if (y)
      for (var F = _ ? 3 : 1, G = function(L) {
        var V = b.find(function(X) {
          var q = k.get(X);
          if (q)
            return q.slice(0, L).every(function(J) {
              return J;
            });
        });
        if (V)
          return x = V, "break";
      }, z = F; z > 0; z--) {
        var K = G(z);
        if (K === "break")
          break;
      }
    t.placement !== x && (t.modifiersData[r]._skip = !0, t.placement = x, t.reset = !0);
  }
}
const Ug = {
  name: "flip",
  enabled: !0,
  phase: "main",
  fn: Bg,
  requiresIfExists: ["offset"],
  data: {
    _skip: !1
  }
};
var Pn, Rn, Hn, fn, ze, so, Wn, Ai, k_;
class st extends at {
  constructor() {
    super(...arguments);
    P(this, Ai);
    P(this, Pn, !1);
    P(this, Rn, void 0);
    P(this, Hn, 0);
    P(this, fn, void 0);
    P(this, ze, void 0);
    P(this, so, void 0);
    N(this, "hideLater", () => {
      w(this, Wn).call(this), W(this, Hn, window.setTimeout(this.hide.bind(this), 100));
    });
    P(this, Wn, () => {
      clearTimeout(w(this, Hn)), W(this, Hn, 0);
    });
  }
  get isShown() {
    var n;
    return (n = w(this, fn)) == null ? void 0 : n.classList.contains(this.constructor.CLASS_SHOW);
  }
  get tooltip() {
    return w(this, fn) || this._ensureTooltip();
  }
  get popper() {
    return w(this, ze) ? w(this, ze) : this._createPopper();
  }
  get trigger() {
    return w(this, so) || this.element;
  }
  get isHover() {
    return this.options.trigger === "hover";
  }
  get elementShowClass() {
    return `with-${this.constructor.NAME}-show`;
  }
  init() {
    const { element: n } = this;
    n !== document.body && !n.hasAttribute("data-toggle") && n.setAttribute("data-toggle", "tooltip");
  }
  show(n) {
    return W(this, so, n), !w(this, Pn) && this.isHover && ne(this, Ai, k_).call(this), this.options.animation && this.tooltip.classList.add("fade"), this.element.classList.add(this.elementShowClass), this.tooltip.classList.add(this.constructor.CLASS_SHOW), this._createPopper().update(), !0;
  }
  hide() {
    var n, r;
    return (n = w(this, ze)) == null || n.destroy(), W(this, ze, void 0), this.element.classList.remove(this.elementShowClass), (r = w(this, fn)) == null || r.classList.remove(this.constructor.CLASS_SHOW), !0;
  }
  toggle(n) {
    return this.isShown ? this.hide() : this.show(n);
  }
  destroy() {
    w(this, Pn) && (this.element.removeEventListener("mouseleave", this.hideLater), this.tooltip.removeEventListener("mouseenter", w(this, Wn)), this.tooltip.removeEventListener("mouseleave", this.hideLater)), super.destroy();
  }
  _getArrowSize() {
    const { arrow: n } = this.options;
    return typeof n == "number" ? n : 4;
  }
  _createArrow() {
    const n = document.createElement("div");
    return n.classList.add("arrow", "tooltip-arrow"), n.style.setProperty("--arrow-size", `${this._getArrowSize()}px`), n;
  }
  _ensureTooltip() {
    const n = this.constructor.TOOLTIP_CLASS, r = document.createElement("div"), s = this.options.className ? this.options.className.split(" ") : [];
    let o = [n, this.options.type || ""];
    return o = o.concat(s), r.classList.add(...o), r[this.options.html ? "innerHTML" : "innerText"] = this.options.title || "", this.options.arrow && r.prepend(this._createArrow()), document.body.appendChild(r), W(this, fn, r), r;
  }
  _getPopperOptions() {
    const n = this._getArrowSize();
    return {
      modifiers: [
        Rg,
        Ug,
        { ...Mg, options: {
          padding: n,
          element: ".arrow"
        } },
        {
          ...Ng,
          options: {
            offset: [0, n + 3]
          }
        },
        {
          name: "tooltip",
          enabled: !0,
          phase: "beforeWrite",
          fn: ({ state: r }) => {
            var o, a;
            const s = ((o = r.placement) == null ? void 0 : o.split("-").shift()) || "";
            (a = this.tooltip.querySelector(".arrow")) == null || a.setAttribute("class", `arrow arrow-${s}`), this.element.setAttribute("data-tooltip-placement", s);
          }
        }
      ].filter(Boolean),
      placement: this.options.placement,
      strategy: this.options.strategy
    };
  }
  _createPopper() {
    const n = this._getPopperOptions();
    return w(this, ze) ? w(this, ze).setOptions(n) : W(this, ze, Eg(this._getPopperElement(), this.tooltip, n)), w(this, ze);
  }
  _getPopperElement() {
    return w(this, Rn) || W(this, Rn, {
      getBoundingClientRect: () => {
        const { element: n } = this;
        if (n instanceof MouseEvent) {
          const { clientX: r, clientY: s } = n;
          return {
            width: 0,
            height: 0,
            top: s,
            right: r,
            bottom: s,
            left: r
          };
        }
        return n instanceof HTMLElement ? n.getBoundingClientRect() : n;
      },
      contextElement: this.element
    }), w(this, Rn);
  }
  static clear(n) {
    n instanceof Event && (n = { event: n });
    const { exclude: r } = n || {}, s = this.getAll().entries(), o = new Set(r || []);
    for (const [a, c] of s)
      o.has(a) || c.hide();
  }
}
Pn = new WeakMap(), Rn = new WeakMap(), Hn = new WeakMap(), fn = new WeakMap(), ze = new WeakMap(), so = new WeakMap(), Wn = new WeakMap(), Ai = new WeakSet(), k_ = function() {
  const { tooltip: n } = this;
  n.addEventListener("mouseenter", w(this, Wn)), n.addEventListener("mouseleave", this.hideLater), this.element.addEventListener("mouseleave", this.hideLater), W(this, Pn, !0);
}, N(st, "NAME", "tooltip"), N(st, "TOOLTIP_CLASS", "tooltip"), N(st, "CLASS_SHOW", "show"), N(st, "MENU_SELECTOR", '[data-toggle="tooltip"]:not(.disabled):not(:disabled)'), N(st, "DEFAULT", {
  animation: !0,
  placement: "top",
  strategy: "absolute",
  trigger: "hover",
  type: "darker",
  arrow: !0
});
document.addEventListener("click", function(e) {
  const n = e.target.closest(st.MENU_SELECTOR);
  if (n) {
    const r = st.ensure(n);
    r.options.trigger === "click" && r.toggle();
  } else
    st.clear({ event: e });
});
document.addEventListener("mouseover", function(e) {
  const t = e.target, n = typeof t.closest == "function" ? t.closest(st.MENU_SELECTOR) : null;
  if (!n)
    return;
  const r = st.ensure(n);
  r.isHover && r.show();
});
var $a, he, x_, E_, Mr, uc, S_ = {}, C_ = [], Fg = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function Xt(e, t) {
  for (var n in t)
    e[n] = t[n];
  return e;
}
function O_(e) {
  var t = e.parentNode;
  t && t.removeChild(e);
}
function Y(e, t, n) {
  var r, s, o, a = {};
  for (o in t)
    o == "key" ? r = t[o] : o == "ref" ? s = t[o] : a[o] = t[o];
  if (arguments.length > 2 && (a.children = arguments.length > 3 ? $a.call(arguments, 2) : n), typeof e == "function" && e.defaultProps != null)
    for (o in e.defaultProps)
      a[o] === void 0 && (a[o] = e.defaultProps[o]);
  return Uo(e, a, r, s, null);
}
function Uo(e, t, n, r, s) {
  var o = { type: e, props: t, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: s == null ? ++x_ : s };
  return s == null && he.vnode != null && he.vnode(o), o;
}
function zg() {
  return { current: null };
}
function ka(e) {
  return e.children;
}
function Tr(e, t) {
  this.props = e, this.context = t;
}
function Jr(e, t) {
  if (t == null)
    return e.__ ? Jr(e.__, e.__.__k.indexOf(e) + 1) : null;
  for (var n; t < e.__k.length; t++)
    if ((n = e.__k[t]) != null && n.__e != null)
      return n.__e;
  return typeof e.type == "function" ? Jr(e) : null;
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
function _c(e) {
  (!e.__d && (e.__d = !0) && Mr.push(e) && !bi.__r++ || uc !== he.debounceRendering) && ((uc = he.debounceRendering) || setTimeout)(bi);
}
function bi() {
  for (var e; bi.__r = Mr.length; )
    e = Mr.sort(function(t, n) {
      return t.__v.__b - n.__v.__b;
    }), Mr = [], e.some(function(t) {
      var n, r, s, o, a, c;
      t.__d && (a = (o = (n = t).__v).__e, (c = n.__P) && (r = [], (s = Xt({}, o)).__v = o.__v + 1, N_(c, o, s, n.__n, c.ownerSVGElement !== void 0, o.__h != null ? [a] : null, r, a == null ? Jr(o) : a, o.__h), Yg(r, o), o.__e != a && A_(o)));
    });
}
function M_(e, t, n, r, s, o, a, c, f, p) {
  var i, d, u, l, _, g, h, v = r && r.__k || C_, m = v.length;
  for (n.__k = [], i = 0; i < t.length; i++)
    if ((l = n.__k[i] = (l = t[i]) == null || typeof l == "boolean" ? null : typeof l == "string" || typeof l == "number" || typeof l == "bigint" ? Uo(null, l, null, null, l) : Array.isArray(l) ? Uo(ka, { children: l }, null, null, null) : l.__b > 0 ? Uo(l.type, l.props, l.key, l.ref ? l.ref : null, l.__v) : l) != null) {
      if (l.__ = n, l.__b = n.__b + 1, (u = v[i]) === null || u && l.key == u.key && l.type === u.type)
        v[i] = void 0;
      else
        for (d = 0; d < m; d++) {
          if ((u = v[d]) && l.key == u.key && l.type === u.type) {
            v[d] = void 0;
            break;
          }
          u = null;
        }
      N_(e, l, u = u || S_, s, o, a, c, f, p), _ = l.__e, (d = l.ref) && u.ref != d && (h || (h = []), u.ref && h.push(u.ref, null, l), h.push(d, l.__c || _, l)), _ != null ? (g == null && (g = _), typeof l.type == "function" && l.__k === u.__k ? l.__d = f = T_(l, f, e) : f = D_(e, l, u, v, _, f), typeof n.type == "function" && (n.__d = f)) : f && u.__e == f && f.parentNode != e && (f = Jr(u));
    }
  for (n.__e = g, i = m; i--; )
    v[i] != null && P_(v[i], v[i]);
  if (h)
    for (i = 0; i < h.length; i++)
      L_(h[i], h[++i], h[++i]);
}
function T_(e, t, n) {
  for (var r, s = e.__k, o = 0; s && o < s.length; o++)
    (r = s[o]) && (r.__ = e, t = typeof r.type == "function" ? T_(r, t, n) : D_(n, r, r, s, r.__e, t));
  return t;
}
function D_(e, t, n, r, s, o) {
  var a, c, f;
  if (t.__d !== void 0)
    a = t.__d, t.__d = void 0;
  else if (n == null || s != o || s.parentNode == null)
    e:
      if (o == null || o.parentNode !== e)
        e.appendChild(s), a = null;
      else {
        for (c = o, f = 0; (c = c.nextSibling) && f < r.length; f += 2)
          if (c == s)
            break e;
        e.insertBefore(s, o), a = o;
      }
  return a !== void 0 ? a : s.nextSibling;
}
function Vg(e, t, n, r, s) {
  var o;
  for (o in n)
    o === "children" || o === "key" || o in t || wi(e, o, null, n[o], r);
  for (o in t)
    s && typeof t[o] != "function" || o === "children" || o === "key" || o === "value" || o === "checked" || n[o] === t[o] || wi(e, o, t[o], n[o], r);
}
function pc(e, t, n) {
  t[0] === "-" ? e.setProperty(t, n) : e[t] = n == null ? "" : typeof n != "number" || Fg.test(t) ? n : n + "px";
}
function wi(e, t, n, r, s) {
  var o;
  e:
    if (t === "style")
      if (typeof n == "string")
        e.style.cssText = n;
      else {
        if (typeof r == "string" && (e.style.cssText = r = ""), r)
          for (t in r)
            n && t in n || pc(e.style, t, "");
        if (n)
          for (t in n)
            r && n[t] === r[t] || pc(e.style, t, n[t]);
      }
    else if (t[0] === "o" && t[1] === "n")
      o = t !== (t = t.replace(/Capture$/, "")), t = t.toLowerCase() in e ? t.toLowerCase().slice(2) : t.slice(2), e.l || (e.l = {}), e.l[t + o] = n, n ? r || e.addEventListener(t, o ? hc : dc, o) : e.removeEventListener(t, o ? hc : dc, o);
    else if (t !== "dangerouslySetInnerHTML") {
      if (s)
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
function dc(e) {
  this.l[e.type + !1](he.event ? he.event(e) : e);
}
function hc(e) {
  this.l[e.type + !0](he.event ? he.event(e) : e);
}
function N_(e, t, n, r, s, o, a, c, f) {
  var p, i, d, u, l, _, g, h, v, m, E, b, S, $, k, y = t.type;
  if (t.constructor !== void 0)
    return null;
  n.__h != null && (f = n.__h, c = t.__e = n.__e, t.__h = null, o = [c]), (p = he.__b) && p(t);
  try {
    e:
      if (typeof y == "function") {
        if (h = t.props, v = (p = y.contextType) && r[p.__c], m = p ? v ? v.props.value : p.__ : r, n.__c ? g = (i = t.__c = n.__c).__ = i.__E : ("prototype" in y && y.prototype.render ? t.__c = i = new y(h, m) : (t.__c = i = new Tr(h, m), i.constructor = y, i.render = Gg), v && v.sub(i), i.props = h, i.state || (i.state = {}), i.context = m, i.__n = r, d = i.__d = !0, i.__h = [], i._sb = []), i.__s == null && (i.__s = i.state), y.getDerivedStateFromProps != null && (i.__s == i.state && (i.__s = Xt({}, i.__s)), Xt(i.__s, y.getDerivedStateFromProps(h, i.__s))), u = i.props, l = i.state, d)
          y.getDerivedStateFromProps == null && i.componentWillMount != null && i.componentWillMount(), i.componentDidMount != null && i.__h.push(i.componentDidMount);
        else {
          if (y.getDerivedStateFromProps == null && h !== u && i.componentWillReceiveProps != null && i.componentWillReceiveProps(h, m), !i.__e && i.shouldComponentUpdate != null && i.shouldComponentUpdate(h, i.__s, m) === !1 || t.__v === n.__v) {
            for (i.props = h, i.state = i.__s, t.__v !== n.__v && (i.__d = !1), i.__v = t, t.__e = n.__e, t.__k = n.__k, t.__k.forEach(function(x) {
              x && (x.__ = t);
            }), E = 0; E < i._sb.length; E++)
              i.__h.push(i._sb[E]);
            i._sb = [], i.__h.length && a.push(i);
            break e;
          }
          i.componentWillUpdate != null && i.componentWillUpdate(h, i.__s, m), i.componentDidUpdate != null && i.__h.push(function() {
            i.componentDidUpdate(u, l, _);
          });
        }
        if (i.context = m, i.props = h, i.__v = t, i.__P = e, b = he.__r, S = 0, "prototype" in y && y.prototype.render) {
          for (i.state = i.__s, i.__d = !1, b && b(t), p = i.render(i.props, i.state, i.context), $ = 0; $ < i._sb.length; $++)
            i.__h.push(i._sb[$]);
          i._sb = [];
        } else
          do
            i.__d = !1, b && b(t), p = i.render(i.props, i.state, i.context), i.state = i.__s;
          while (i.__d && ++S < 25);
        i.state = i.__s, i.getChildContext != null && (r = Xt(Xt({}, r), i.getChildContext())), d || i.getSnapshotBeforeUpdate == null || (_ = i.getSnapshotBeforeUpdate(u, l)), k = p != null && p.type === ka && p.key == null ? p.props.children : p, M_(e, Array.isArray(k) ? k : [k], t, n, r, s, o, a, c, f), i.base = t.__e, t.__h = null, i.__h.length && a.push(i), g && (i.__E = i.__ = null), i.__e = !1;
      } else
        o == null && t.__v === n.__v ? (t.__k = n.__k, t.__e = n.__e) : t.__e = qg(n.__e, t, n, r, s, o, a, f);
    (p = he.diffed) && p(t);
  } catch (x) {
    t.__v = null, (f || o != null) && (t.__e = c, t.__h = !!f, o[o.indexOf(c)] = null), he.__e(x, t, n);
  }
}
function Yg(e, t) {
  he.__c && he.__c(t, e), e.some(function(n) {
    try {
      e = n.__h, n.__h = [], e.some(function(r) {
        r.call(n);
      });
    } catch (r) {
      he.__e(r, n.__v);
    }
  });
}
function qg(e, t, n, r, s, o, a, c) {
  var f, p, i, d = n.props, u = t.props, l = t.type, _ = 0;
  if (l === "svg" && (s = !0), o != null) {
    for (; _ < o.length; _++)
      if ((f = o[_]) && "setAttribute" in f == !!l && (l ? f.localName === l : f.nodeType === 3)) {
        e = f, o[_] = null;
        break;
      }
  }
  if (e == null) {
    if (l === null)
      return document.createTextNode(u);
    e = s ? document.createElementNS("http://www.w3.org/2000/svg", l) : document.createElement(l, u.is && u), o = null, c = !1;
  }
  if (l === null)
    d === u || c && e.data === u || (e.data = u);
  else {
    if (o = o && $a.call(e.childNodes), p = (d = n.props || S_).dangerouslySetInnerHTML, i = u.dangerouslySetInnerHTML, !c) {
      if (o != null)
        for (d = {}, _ = 0; _ < e.attributes.length; _++)
          d[e.attributes[_].name] = e.attributes[_].value;
      (i || p) && (i && (p && i.__html == p.__html || i.__html === e.innerHTML) || (e.innerHTML = i && i.__html || ""));
    }
    if (Vg(e, u, d, s, c), i)
      t.__k = [];
    else if (_ = t.props.children, M_(e, Array.isArray(_) ? _ : [_], t, n, r, s && l !== "foreignObject", o, a, o ? o[0] : n.__k && Jr(n, 0), c), o != null)
      for (_ = o.length; _--; )
        o[_] != null && O_(o[_]);
    c || ("value" in u && (_ = u.value) !== void 0 && (_ !== e.value || l === "progress" && !_ || l === "option" && _ !== d.value) && wi(e, "value", _, d.value, !1), "checked" in u && (_ = u.checked) !== void 0 && _ !== e.checked && wi(e, "checked", _, d.checked, !1));
  }
  return e;
}
function L_(e, t, n) {
  try {
    typeof e == "function" ? e(t) : e.current = t;
  } catch (r) {
    he.__e(r, n);
  }
}
function P_(e, t, n) {
  var r, s;
  if (he.unmount && he.unmount(e), (r = e.ref) && (r.current && r.current !== e.__e || L_(r, null, t)), (r = e.__c) != null) {
    if (r.componentWillUnmount)
      try {
        r.componentWillUnmount();
      } catch (o) {
        he.__e(o, t);
      }
    r.base = r.__P = null, e.__c = void 0;
  }
  if (r = e.__k)
    for (s = 0; s < r.length; s++)
      r[s] && P_(r[s], t, n || typeof e.type != "function");
  n || e.__e == null || O_(e.__e), e.__ = e.__e = e.__d = void 0;
}
function Gg(e, t, n) {
  return this.constructor(e, n);
}
$a = C_.slice, he = { __e: function(e, t, n, r) {
  for (var s, o, a; t = t.__; )
    if ((s = t.__c) && !s.__)
      try {
        if ((o = s.constructor) && o.getDerivedStateFromError != null && (s.setState(o.getDerivedStateFromError(e)), a = s.__d), s.componentDidCatch != null && (s.componentDidCatch(e, r || {}), a = s.__d), a)
          return s.__E = s;
      } catch (c) {
        e = c;
      }
  throw e;
} }, x_ = 0, E_ = function(e) {
  return e != null && e.constructor === void 0;
}, Tr.prototype.setState = function(e, t) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = Xt({}, this.state), typeof e == "function" && (e = e(Xt({}, n), this.props)), e && Xt(n, e), e != null && this.__v && (t && this._sb.push(t), _c(this));
}, Tr.prototype.forceUpdate = function(e) {
  this.__v && (this.__e = !0, e && this.__h.push(e), _c(this));
}, Tr.prototype.render = ka, Mr = [], bi.__r = 0;
let Xg = (e = 21) => crypto.getRandomValues(new Uint8Array(e)).reduce((t, n) => (n &= 63, n < 36 ? t += n.toString(36) : n < 62 ? t += (n - 26).toString(36).toUpperCase() : n > 62 ? t += "-" : t += "_", t), "");
var xa, ve, R_, Dr, vc, H_ = {}, W_ = [], Kg = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function Kt(e, t) {
  for (var n in t)
    e[n] = t[n];
  return e;
}
function j_(e) {
  var t = e.parentNode;
  t && t.removeChild(e);
}
function mc(e, t, n) {
  var r, s, o, a = {};
  for (o in t)
    o == "key" ? r = t[o] : o == "ref" ? s = t[o] : a[o] = t[o];
  if (arguments.length > 2 && (a.children = arguments.length > 3 ? xa.call(arguments, 2) : n), typeof e == "function" && e.defaultProps != null)
    for (o in e.defaultProps)
      a[o] === void 0 && (a[o] = e.defaultProps[o]);
  return Fo(e, a, r, s, null);
}
function Fo(e, t, n, r, s) {
  var o = { type: e, props: t, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: s == null ? ++R_ : s };
  return s == null && ve.vnode != null && ve.vnode(o), o;
}
function Ea(e) {
  return e.children;
}
function Nr(e, t) {
  this.props = e, this.context = t;
}
function Zr(e, t) {
  if (t == null)
    return e.__ ? Zr(e.__, e.__.__k.indexOf(e) + 1) : null;
  for (var n; t < e.__k.length; t++)
    if ((n = e.__k[t]) != null && n.__e != null)
      return n.__e;
  return typeof e.type == "function" ? Zr(e) : null;
}
function I_(e) {
  var t, n;
  if ((e = e.__) != null && e.__c != null) {
    for (e.__e = e.__c.base = null, t = 0; t < e.__k.length; t++)
      if ((n = e.__k[t]) != null && n.__e != null) {
        e.__e = e.__c.base = n.__e;
        break;
      }
    return I_(e);
  }
}
function gc(e) {
  (!e.__d && (e.__d = !0) && Dr.push(e) && !$i.__r++ || vc !== ve.debounceRendering) && ((vc = ve.debounceRendering) || setTimeout)($i);
}
function $i() {
  for (var e; $i.__r = Dr.length; )
    e = Dr.sort(function(t, n) {
      return t.__v.__b - n.__v.__b;
    }), Dr = [], e.some(function(t) {
      var n, r, s, o, a, c;
      t.__d && (a = (o = (n = t).__v).__e, (c = n.__P) && (r = [], (s = Kt({}, o)).__v = o.__v + 1, z_(c, o, s, n.__n, c.ownerSVGElement !== void 0, o.__h != null ? [a] : null, r, a == null ? Zr(o) : a, o.__h), Zg(r, o), o.__e != a && I_(o)));
    });
}
function B_(e, t, n, r, s, o, a, c, f, p) {
  var i, d, u, l, _, g, h, v = r && r.__k || W_, m = v.length;
  for (n.__k = [], i = 0; i < t.length; i++)
    if ((l = n.__k[i] = (l = t[i]) == null || typeof l == "boolean" ? null : typeof l == "string" || typeof l == "number" || typeof l == "bigint" ? Fo(null, l, null, null, l) : Array.isArray(l) ? Fo(Ea, { children: l }, null, null, null) : l.__b > 0 ? Fo(l.type, l.props, l.key, l.ref ? l.ref : null, l.__v) : l) != null) {
      if (l.__ = n, l.__b = n.__b + 1, (u = v[i]) === null || u && l.key == u.key && l.type === u.type)
        v[i] = void 0;
      else
        for (d = 0; d < m; d++) {
          if ((u = v[d]) && l.key == u.key && l.type === u.type) {
            v[d] = void 0;
            break;
          }
          u = null;
        }
      z_(e, l, u = u || H_, s, o, a, c, f, p), _ = l.__e, (d = l.ref) && u.ref != d && (h || (h = []), u.ref && h.push(u.ref, null, l), h.push(d, l.__c || _, l)), _ != null ? (g == null && (g = _), typeof l.type == "function" && l.__k === u.__k ? l.__d = f = U_(l, f, e) : f = F_(e, l, u, v, _, f), typeof n.type == "function" && (n.__d = f)) : f && u.__e == f && f.parentNode != e && (f = Zr(u));
    }
  for (n.__e = g, i = m; i--; )
    v[i] != null && Y_(v[i], v[i]);
  if (h)
    for (i = 0; i < h.length; i++)
      V_(h[i], h[++i], h[++i]);
}
function U_(e, t, n) {
  for (var r, s = e.__k, o = 0; s && o < s.length; o++)
    (r = s[o]) && (r.__ = e, t = typeof r.type == "function" ? U_(r, t, n) : F_(n, r, r, s, r.__e, t));
  return t;
}
function F_(e, t, n, r, s, o) {
  var a, c, f;
  if (t.__d !== void 0)
    a = t.__d, t.__d = void 0;
  else if (n == null || s != o || s.parentNode == null)
    e:
      if (o == null || o.parentNode !== e)
        e.appendChild(s), a = null;
      else {
        for (c = o, f = 0; (c = c.nextSibling) && f < r.length; f += 2)
          if (c == s)
            break e;
        e.insertBefore(s, o), a = o;
      }
  return a !== void 0 ? a : s.nextSibling;
}
function Jg(e, t, n, r, s) {
  var o;
  for (o in n)
    o === "children" || o === "key" || o in t || ki(e, o, null, n[o], r);
  for (o in t)
    s && typeof t[o] != "function" || o === "children" || o === "key" || o === "value" || o === "checked" || n[o] === t[o] || ki(e, o, t[o], n[o], r);
}
function yc(e, t, n) {
  t[0] === "-" ? e.setProperty(t, n) : e[t] = n == null ? "" : typeof n != "number" || Kg.test(t) ? n : n + "px";
}
function ki(e, t, n, r, s) {
  var o;
  e:
    if (t === "style")
      if (typeof n == "string")
        e.style.cssText = n;
      else {
        if (typeof r == "string" && (e.style.cssText = r = ""), r)
          for (t in r)
            n && t in n || yc(e.style, t, "");
        if (n)
          for (t in n)
            r && n[t] === r[t] || yc(e.style, t, n[t]);
      }
    else if (t[0] === "o" && t[1] === "n")
      o = t !== (t = t.replace(/Capture$/, "")), t = t.toLowerCase() in e ? t.toLowerCase().slice(2) : t.slice(2), e.l || (e.l = {}), e.l[t + o] = n, n ? r || e.addEventListener(t, o ? wc : bc, o) : e.removeEventListener(t, o ? wc : bc, o);
    else if (t !== "dangerouslySetInnerHTML") {
      if (s)
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
function bc(e) {
  this.l[e.type + !1](ve.event ? ve.event(e) : e);
}
function wc(e) {
  this.l[e.type + !0](ve.event ? ve.event(e) : e);
}
function z_(e, t, n, r, s, o, a, c, f) {
  var p, i, d, u, l, _, g, h, v, m, E, b, S, $, k, y = t.type;
  if (t.constructor !== void 0)
    return null;
  n.__h != null && (f = n.__h, c = t.__e = n.__e, t.__h = null, o = [c]), (p = ve.__b) && p(t);
  try {
    e:
      if (typeof y == "function") {
        if (h = t.props, v = (p = y.contextType) && r[p.__c], m = p ? v ? v.props.value : p.__ : r, n.__c ? g = (i = t.__c = n.__c).__ = i.__E : ("prototype" in y && y.prototype.render ? t.__c = i = new y(h, m) : (t.__c = i = new Nr(h, m), i.constructor = y, i.render = ey), v && v.sub(i), i.props = h, i.state || (i.state = {}), i.context = m, i.__n = r, d = i.__d = !0, i.__h = [], i._sb = []), i.__s == null && (i.__s = i.state), y.getDerivedStateFromProps != null && (i.__s == i.state && (i.__s = Kt({}, i.__s)), Kt(i.__s, y.getDerivedStateFromProps(h, i.__s))), u = i.props, l = i.state, d)
          y.getDerivedStateFromProps == null && i.componentWillMount != null && i.componentWillMount(), i.componentDidMount != null && i.__h.push(i.componentDidMount);
        else {
          if (y.getDerivedStateFromProps == null && h !== u && i.componentWillReceiveProps != null && i.componentWillReceiveProps(h, m), !i.__e && i.shouldComponentUpdate != null && i.shouldComponentUpdate(h, i.__s, m) === !1 || t.__v === n.__v) {
            for (i.props = h, i.state = i.__s, t.__v !== n.__v && (i.__d = !1), i.__v = t, t.__e = n.__e, t.__k = n.__k, t.__k.forEach(function(x) {
              x && (x.__ = t);
            }), E = 0; E < i._sb.length; E++)
              i.__h.push(i._sb[E]);
            i._sb = [], i.__h.length && a.push(i);
            break e;
          }
          i.componentWillUpdate != null && i.componentWillUpdate(h, i.__s, m), i.componentDidUpdate != null && i.__h.push(function() {
            i.componentDidUpdate(u, l, _);
          });
        }
        if (i.context = m, i.props = h, i.__v = t, i.__P = e, b = ve.__r, S = 0, "prototype" in y && y.prototype.render) {
          for (i.state = i.__s, i.__d = !1, b && b(t), p = i.render(i.props, i.state, i.context), $ = 0; $ < i._sb.length; $++)
            i.__h.push(i._sb[$]);
          i._sb = [];
        } else
          do
            i.__d = !1, b && b(t), p = i.render(i.props, i.state, i.context), i.state = i.__s;
          while (i.__d && ++S < 25);
        i.state = i.__s, i.getChildContext != null && (r = Kt(Kt({}, r), i.getChildContext())), d || i.getSnapshotBeforeUpdate == null || (_ = i.getSnapshotBeforeUpdate(u, l)), k = p != null && p.type === Ea && p.key == null ? p.props.children : p, B_(e, Array.isArray(k) ? k : [k], t, n, r, s, o, a, c, f), i.base = t.__e, t.__h = null, i.__h.length && a.push(i), g && (i.__E = i.__ = null), i.__e = !1;
      } else
        o == null && t.__v === n.__v ? (t.__k = n.__k, t.__e = n.__e) : t.__e = Qg(n.__e, t, n, r, s, o, a, f);
    (p = ve.diffed) && p(t);
  } catch (x) {
    t.__v = null, (f || o != null) && (t.__e = c, t.__h = !!f, o[o.indexOf(c)] = null), ve.__e(x, t, n);
  }
}
function Zg(e, t) {
  ve.__c && ve.__c(t, e), e.some(function(n) {
    try {
      e = n.__h, n.__h = [], e.some(function(r) {
        r.call(n);
      });
    } catch (r) {
      ve.__e(r, n.__v);
    }
  });
}
function Qg(e, t, n, r, s, o, a, c) {
  var f, p, i, d = n.props, u = t.props, l = t.type, _ = 0;
  if (l === "svg" && (s = !0), o != null) {
    for (; _ < o.length; _++)
      if ((f = o[_]) && "setAttribute" in f == !!l && (l ? f.localName === l : f.nodeType === 3)) {
        e = f, o[_] = null;
        break;
      }
  }
  if (e == null) {
    if (l === null)
      return document.createTextNode(u);
    e = s ? document.createElementNS("http://www.w3.org/2000/svg", l) : document.createElement(l, u.is && u), o = null, c = !1;
  }
  if (l === null)
    d === u || c && e.data === u || (e.data = u);
  else {
    if (o = o && xa.call(e.childNodes), p = (d = n.props || H_).dangerouslySetInnerHTML, i = u.dangerouslySetInnerHTML, !c) {
      if (o != null)
        for (d = {}, _ = 0; _ < e.attributes.length; _++)
          d[e.attributes[_].name] = e.attributes[_].value;
      (i || p) && (i && (p && i.__html == p.__html || i.__html === e.innerHTML) || (e.innerHTML = i && i.__html || ""));
    }
    if (Jg(e, u, d, s, c), i)
      t.__k = [];
    else if (_ = t.props.children, B_(e, Array.isArray(_) ? _ : [_], t, n, r, s && l !== "foreignObject", o, a, o ? o[0] : n.__k && Zr(n, 0), c), o != null)
      for (_ = o.length; _--; )
        o[_] != null && j_(o[_]);
    c || ("value" in u && (_ = u.value) !== void 0 && (_ !== e.value || l === "progress" && !_ || l === "option" && _ !== d.value) && ki(e, "value", _, d.value, !1), "checked" in u && (_ = u.checked) !== void 0 && _ !== e.checked && ki(e, "checked", _, d.checked, !1));
  }
  return e;
}
function V_(e, t, n) {
  try {
    typeof e == "function" ? e(t) : e.current = t;
  } catch (r) {
    ve.__e(r, n);
  }
}
function Y_(e, t, n) {
  var r, s;
  if (ve.unmount && ve.unmount(e), (r = e.ref) && (r.current && r.current !== e.__e || V_(r, null, t)), (r = e.__c) != null) {
    if (r.componentWillUnmount)
      try {
        r.componentWillUnmount();
      } catch (o) {
        ve.__e(o, t);
      }
    r.base = r.__P = null, e.__c = void 0;
  }
  if (r = e.__k)
    for (s = 0; s < r.length; s++)
      r[s] && Y_(r[s], t, n || typeof e.type != "function");
  n || e.__e == null || j_(e.__e), e.__ = e.__e = e.__d = void 0;
}
function ey(e, t, n) {
  return this.constructor(e, n);
}
xa = W_.slice, ve = { __e: function(e, t, n, r) {
  for (var s, o, a; t = t.__; )
    if ((s = t.__c) && !s.__)
      try {
        if ((o = s.constructor) && o.getDerivedStateFromError != null && (s.setState(o.getDerivedStateFromError(e)), a = s.__d), s.componentDidCatch != null && (s.componentDidCatch(e, r || {}), a = s.__d), a)
          return s.__E = s;
      } catch (c) {
        e = c;
      }
  throw e;
} }, R_ = 0, Nr.prototype.setState = function(e, t) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = Kt({}, this.state), typeof e == "function" && (e = e(Kt({}, n), this.props)), e && Kt(n, e), e != null && this.__v && (t && this._sb.push(t), gc(this));
}, Nr.prototype.forceUpdate = function(e) {
  this.__v && (this.__e = !0, e && this.__h.push(e), gc(this));
}, Nr.prototype.render = Ea, Dr = [], $i.__r = 0;
var un, _n;
class $c extends Nr {
  constructor(n) {
    var r;
    super(n);
    P(this, un, 0);
    P(this, _n, null);
    N(this, "_handleWheel", (n) => {
      var o;
      const { wheelContainer: r } = this.props, s = n.target;
      if (!(!s || !r) && (typeof r == "string" && s.closest(r) || typeof r == "object")) {
        const a = (this.props.type === "horz" ? n.deltaX : n.deltaY) * ((o = this.props.wheelSpeed) != null ? o : 1);
        this.scrollOffset(a) && n.preventDefault();
      }
    });
    N(this, "_handleMouseMove", (n) => {
      const { dragStart: r } = this.state;
      r && (w(this, un) && cancelAnimationFrame(w(this, un)), W(this, un, requestAnimationFrame(() => {
        const s = this.props.type === "horz" ? n.clientX - r.x : n.clientY - r.y;
        this.scroll(r.offset + s * this.props.scrollSize / this.props.clientSize), W(this, un, 0);
      })), n.preventDefault());
    });
    N(this, "_handleMouseUp", () => {
      this.state.dragStart && this.setState({
        dragStart: !1
      });
    });
    N(this, "_handleMouseDown", (n) => {
      this.state.dragStart || this.setState({ dragStart: { x: n.clientX, y: n.clientY, offset: this.scrollPos } }), n.stopPropagation();
    });
    N(this, "_handleClick", (n) => {
      const r = n.currentTarget;
      if (!r)
        return;
      const s = r.getBoundingClientRect(), { type: o, clientSize: a, scrollSize: c } = this.props, f = (o === "horz" ? n.clientX - s.left : n.clientY - s.top) - this.barSize / 2;
      this.scroll(f * c / a), n.preventDefault();
    });
    this.state = {
      scrollPos: (r = this.props.defaultScrollPos) != null ? r : 0,
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
    const { scrollSize: n, clientSize: r } = this.props;
    return Math.max(0, n - r);
  }
  get barSize() {
    const { clientSize: n, scrollSize: r, size: s = 12, minBarSize: o = 3 * s } = this.props;
    return Math.max(Math.round(n * n / r), o);
  }
  componentDidMount() {
    document.addEventListener("mousemove", this._handleMouseMove), document.addEventListener("mouseup", this._handleMouseUp);
    const { wheelContainer: n } = this.props;
    n && (W(this, _n, typeof n == "string" ? document : n.current), w(this, _n).addEventListener("wheel", this._handleWheel, { passive: !1 }));
  }
  componentWillUnmount() {
    document.removeEventListener("mousemove", this._handleMouseMove), document.removeEventListener("mouseup", this._handleMouseUp), w(this, _n) && w(this, _n).removeEventListener("wheel", this._handleWheel);
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
    var s;
    const { onScroll: r } = this.props;
    r && r(n, (s = this.props.type) != null ? s : "vert");
  }
  render() {
    const {
      clientSize: n,
      type: r,
      size: s = 12,
      className: o,
      style: a,
      left: c,
      top: f,
      bottom: p,
      right: i
    } = this.props, { maxScrollPos: d, scrollPos: u } = this, { dragStart: l } = this.state, _ = {
      left: c,
      top: f,
      bottom: p,
      right: i,
      ...a
    }, g = {};
    return r === "horz" ? (_.height = s, _.width = n, g.width = this.barSize, g.left = Math.round(Math.min(d, u) * (n - g.width) / d)) : (_.width = s, _.height = n, g.height = this.barSize, g.top = Math.round(Math.min(d, u) * (n - g.height) / d)), /* @__PURE__ */ mc("div", {
      className: U("scrollbar", o, {
        "is-vert": r === "vert",
        "is-horz": r === "horz",
        "is-dragging": l
      }),
      style: _,
      onMouseDown: this._handleClick
    }, /* @__PURE__ */ mc("div", {
      className: "scrollbar-bar",
      style: g,
      onMouseDown: this._handleMouseDown
    }));
  }
}
un = new WeakMap(), _n = new WeakMap();
function kc(e, t, n) {
  return e && (t && (e = Math.max(t, e)), n && (e = Math.min(n, e))), e;
}
function q_({ col: e, className: t, height: n, row: r, onRenderCell: s, style: o, outerStyle: a, children: c, outerClass: f, ...p }) {
  var y, x;
  const i = {
    left: e.left,
    width: e.realWidth,
    height: n,
    ...a
  }, { align: d, border: u } = e.setting, l = {
    justifyContent: d ? d === "left" ? "start" : d === "right" ? "end" : d : void 0,
    ...e.setting.cellStyle,
    ...o
  }, _ = ["dtable-cell", f, e.setting.className, {
    "has-border-left": u === !0 || u === "left",
    "has-border-right": u === !0 || u === "right"
  }], g = ["dtable-cell-content", t], h = [(x = c != null ? c : (y = r.data) == null ? void 0 : y[e.name]) != null ? x : ""], v = s ? s(h, { row: r, col: e }, Y) : h, m = [], E = [], b = {}, S = {};
  let $ = "div";
  v == null || v.forEach((C) => {
    var R;
    if (typeof C == "object" && C && !E_(C) && ("html" in C || "className" in C || "style" in C || "attrs" in C || "children" in C || "tagName" in C)) {
      const I = C.outer ? m : E;
      C.html ? I.push(/* @__PURE__ */ Y("div", {
        className: U("dtable-cell-html", C.className),
        style: C.style,
        dangerouslySetInnerHTML: { __html: C.html },
        ...(R = C.attrs) != null ? R : {}
      })) : (C.style && Object.assign(C.outer ? i : l, C.style), C.className && (C.outer ? _ : g).push(C.className), C.children && I.push(C.children), C.attrs && Object.assign(C.outer ? b : S, C.attrs)), C.tagName && !C.outer && ($ = C.tagName);
    } else
      E.push(C);
  });
  const k = $;
  return /* @__PURE__ */ Y("div", {
    className: U(_),
    style: i,
    "data-col": e.name,
    ...p,
    ...b
  }, E.length > 0 && /* @__PURE__ */ Y(k, {
    className: U(g),
    style: l,
    ...S
  }, E), m);
}
function as({ row: e, className: t, top: n = 0, left: r = 0, width: s, height: o, cols: a, CellComponent: c = q_, onRenderCell: f }) {
  return /* @__PURE__ */ Y("div", {
    className: U("dtable-cells", t),
    style: { top: n, left: r, width: s, height: o }
  }, a.map((p) => p.visible ? /* @__PURE__ */ Y(c, {
    key: p.name,
    col: p,
    row: e,
    onRenderCell: f
  }) : null));
}
function G_({
  row: e,
  className: t,
  top: n,
  height: r,
  fixedLeftCols: s,
  fixedRightCols: o,
  scrollCols: a,
  fixedLeftWidth: c,
  scrollWidth: f,
  scrollColsWidth: p,
  fixedRightWidth: i,
  scrollLeft: d,
  CellComponent: u = q_,
  onRenderCell: l,
  style: _,
  ...g
}) {
  let h = null;
  s != null && s.length && (h = /* @__PURE__ */ Y(as, {
    className: "dtable-fixed-left",
    cols: s,
    width: c,
    row: e,
    CellComponent: u,
    onRenderCell: l
  }));
  let v = null;
  a != null && a.length && (v = /* @__PURE__ */ Y(as, {
    className: "dtable-flexable",
    cols: a,
    left: c - d,
    width: Math.max(f, p),
    row: e,
    CellComponent: u,
    onRenderCell: l
  }));
  let m = null;
  o != null && o.length && (m = /* @__PURE__ */ Y(as, {
    className: "dtable-fixed-right",
    cols: o,
    left: c + f,
    width: i,
    row: e,
    CellComponent: u,
    onRenderCell: l
  }));
  const E = { top: n, height: r, lineHeight: `${r - 2}px`, ..._ };
  return /* @__PURE__ */ Y("div", {
    className: U("dtable-row", t),
    style: E,
    "data-id": e.id,
    ...g
  }, h, v, m);
}
function ty({ height: e, onRenderRow: t, ...n }) {
  const r = {
    height: e,
    ...n,
    row: { id: "HEADER", index: -1, top: 0 },
    className: "dtable-in-header",
    top: 0
  };
  if (t) {
    const s = t({ props: r }, Y);
    s && Object.assign(r, s);
  }
  return /* @__PURE__ */ Y("div", {
    className: "dtable-header",
    style: { height: e }
  }, /* @__PURE__ */ Y(G_, {
    ...r
  }));
}
function ny({
  className: e,
  style: t,
  top: n,
  rows: r,
  height: s,
  rowHeight: o,
  scrollTop: a,
  onRenderRow: c,
  ...f
}) {
  return t = { ...t, top: n, height: s }, /* @__PURE__ */ Y("div", {
    className: U("dtable-rows", e),
    style: t
  }, r.map((p) => {
    const i = {
      className: `dtable-row-${p.index % 2 ? "odd" : "even"}`,
      row: p,
      top: p.top - a,
      height: o,
      ...f
    }, d = c == null ? void 0 : c({ props: i, row: p }, Y);
    return d && Object.assign(i, d), /* @__PURE__ */ Y(G_, {
      ...i
    });
  }));
}
const xi = /* @__PURE__ */ new Map(), Ei = [];
function X_(e, t) {
  const { name: n } = e;
  if (!(t != null && t.override) && xi.has(n))
    throw new Error(`DTable: Plugin with name ${n} already exists`);
  xi.set(n, e), (t == null ? void 0 : t.buildIn) && !Ei.includes(n) && Ei.push(n);
}
function nr(e, t) {
  X_(e, t);
  const n = (r) => {
    if (!r)
      return e;
    const { defaultOptions: s, ...o } = e;
    return {
      ...o,
      defaultOptions: { ...s, ...r }
    };
  };
  return n.plugin = e, n;
}
function K_(e) {
  return xi.delete(e);
}
function ry(e) {
  if (typeof e == "string") {
    const t = xi.get(e);
    return t || console.warn(`DTable: Cannot found plugin "${e}"`), t;
  }
  if (typeof e == "function" && "plugin" in e)
    return e.plugin;
  if (typeof e == "object")
    return e;
  console.warn("DTable: Invalid plugin", e);
}
function J_(e, t, n) {
  return t.forEach((r) => {
    var o;
    if (!r)
      return;
    const s = ry(r);
    !s || n.has(s.name) || ((o = s.plugins) != null && o.length && J_(e, s.plugins, n), e.push(s), n.add(s.name));
  }), e;
}
function oy(e = [], t = !0) {
  return t && Ei.length && e.unshift(...Ei), e != null && e.length ? J_([], e, /* @__PURE__ */ new Set()) : [];
}
function xc() {
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
var pn, jn, Ht, nt, Wt, ge, Ve, rt, In, ao, lo, bt, Bn, Un, Mi, Z_, Ti, Q_, Di, ep, Ni, tp, co, Ss, Li, Pi, fo, uo, Ri, Hi, Wi, np, ji, rp, Ii, op;
class Es extends Tr {
  constructor(n) {
    var r;
    super(n);
    P(this, Mi);
    P(this, Ti);
    P(this, Di);
    P(this, Ni);
    P(this, co);
    P(this, Wi);
    P(this, ji);
    P(this, Ii);
    N(this, "ref", zg());
    P(this, pn, 0);
    P(this, jn, void 0);
    P(this, Ht, !1);
    P(this, nt, void 0);
    P(this, Wt, void 0);
    P(this, ge, []);
    P(this, Ve, void 0);
    P(this, rt, /* @__PURE__ */ new Map());
    P(this, In, {});
    P(this, ao, void 0);
    P(this, lo, []);
    N(this, "updateLayout", () => {
      w(this, pn) && cancelAnimationFrame(w(this, pn)), W(this, pn, requestAnimationFrame(() => {
        W(this, Ve, void 0), this.forceUpdate(), W(this, pn, 0);
      }));
    });
    P(this, bt, (n, r) => {
      r = r || n.type;
      const s = w(this, rt).get(r);
      if (!!(s != null && s.length)) {
        for (const o of s)
          if (o.call(this, n) === !1) {
            n.stopPropagation(), n.preventDefault();
            break;
          }
      }
    });
    P(this, Bn, (n) => {
      w(this, bt).call(this, n, `window_${n.type}`);
    });
    P(this, Un, (n) => {
      w(this, bt).call(this, n, `document_${n.type}`);
    });
    P(this, Li, (n, r) => {
      if (this.options.onRenderRow) {
        const s = this.options.onRenderRow.call(this, n, r);
        s && Object.assign(n.props, s);
      }
      return w(this, ge).forEach((s) => {
        if (s.onRenderRow) {
          const o = s.onRenderRow.call(this, n, r);
          o && Object.assign(n.props, o);
        }
      }), n.props;
    });
    P(this, Pi, (n, r) => (this.options.onRenderHeaderRow && (n.props = this.options.onRenderHeaderRow.call(this, n, r)), w(this, ge).forEach((s) => {
      s.onRenderHeaderRow && (n.props = s.onRenderHeaderRow.call(this, n, r));
    }), n.props));
    P(this, fo, (n, r, s) => {
      const { row: o, col: a } = r;
      n[0] = this.getCellValue(o, a);
      const c = o.id === "HEADER" ? "onRenderHeaderCell" : "onRenderCell";
      return a.setting[c] && (n = a.setting[c].call(this, n, r, s)), this.options[c] && (n = this.options[c].call(this, n, r, s)), w(this, ge).forEach((f) => {
        f[c] && (n = f[c].call(this, n, r, s));
      }), n;
    });
    P(this, uo, (n, r) => {
      r === "horz" ? this.scroll({ scrollLeft: n }) : this.scroll({ scrollTop: n });
    });
    P(this, Ri, (n) => {
      var c, f, p, i, d;
      const r = this.getPointerInfo(n);
      if (!r)
        return;
      const { rowID: s, colName: o, cellElement: a } = r;
      if (s === "HEADER")
        a && ((c = this.options.onHeaderCellClick) == null || c.call(this, n, { colName: o, element: a }), w(this, ge).forEach((u) => {
          var l;
          (l = u.onHeaderCellClick) == null || l.call(this, n, { colName: o, element: a });
        }));
      else {
        const { rowElement: u } = r, l = this.layout.visibleRows.find((_) => _.id === s);
        if (a) {
          if (((f = this.options.onCellClick) == null ? void 0 : f.call(this, n, { colName: o, rowID: s, rowInfo: l, element: a, rowElement: u })) === !0)
            return;
          for (const _ of w(this, ge))
            if (((p = _.onCellClick) == null ? void 0 : p.call(this, n, { colName: o, rowID: s, rowInfo: l, element: a, rowElement: u })) === !0)
              return;
        }
        if (((i = this.options.onRowClick) == null ? void 0 : i.call(this, n, { rowID: s, rowInfo: l, element: u })) === !0)
          return;
        for (const _ of w(this, ge))
          if (((d = _.onRowClick) == null ? void 0 : d.call(this, n, { rowID: s, rowInfo: l, element: u })) === !0)
            return;
      }
    });
    P(this, Hi, (n) => {
      const r = n.key.toLowerCase();
      if (["pageup", "pagedown", "home", "end"].includes(r))
        return !this.scroll({ to: r.replace("page", "") });
    });
    W(this, jn, (r = n.id) != null ? r : `dtable-${Xg(10)}`), this.state = { scrollTop: 0, scrollLeft: 0, renderCount: 0 }, W(this, Wt, Object.freeze(oy(n.plugins))), w(this, Wt).forEach((s) => {
      var f;
      const { methods: o, data: a, state: c } = s;
      o && Object.entries(o).forEach(([p, i]) => {
        typeof i == "function" && Object.assign(this, { [p]: i.bind(this) });
      }), a && Object.assign(w(this, In), a.call(this)), c && Object.assign(this.state, c.call(this)), (f = s.onCreate) == null || f.call(this, s);
    });
  }
  get options() {
    var n;
    return ((n = w(this, Ve)) == null ? void 0 : n.options) || w(this, nt) || xc();
  }
  get plugins() {
    return w(this, ge);
  }
  get layout() {
    return w(this, Ve);
  }
  get id() {
    return w(this, jn);
  }
  get data() {
    return w(this, In);
  }
  get parent() {
    var n, r;
    return (r = this.props.parent) != null ? r : (n = this.ref.current) == null ? void 0 : n.parentElement;
  }
  componentWillReceiveProps() {
    W(this, nt, void 0);
  }
  componentDidMount() {
    if (w(this, Ht) ? this.forceUpdate() : ne(this, co, Ss).call(this), w(this, ge).forEach((n) => {
      let { events: r } = n;
      !r || (typeof r == "function" && (r = r.call(this)), Object.entries(r).forEach(([s, o]) => {
        o && this.on(s, o);
      }));
    }), this.on("click", w(this, Ri)), this.on("keydown", w(this, Hi)), this.options.responsive) {
      if (typeof ResizeObserver < "u") {
        const { parent: n } = this;
        if (n) {
          const r = new ResizeObserver(this.updateLayout);
          r.observe(n), W(this, ao, r);
        }
      }
      this.on("window_resize", this.updateLayout);
    }
    w(this, ge).forEach((n) => {
      var r;
      (r = n.onMounted) == null || r.call(this);
    });
  }
  componentDidUpdate() {
    w(this, Ht) ? ne(this, co, Ss).call(this) : w(this, ge).forEach((n) => {
      var r;
      (r = n.onUpdated) == null || r.call(this);
    });
  }
  componentWillUnmount() {
    var r;
    (r = w(this, ao)) == null || r.disconnect();
    const { current: n } = this.ref;
    if (n)
      for (const s of w(this, rt).keys())
        s.startsWith("window_") ? window.removeEventListener(s.replace("window_", ""), w(this, Bn)) : s.startsWith("document_") ? document.removeEventListener(s.replace("document_", ""), w(this, Un)) : n.removeEventListener(s, w(this, bt));
    w(this, ge).forEach((s) => {
      var o;
      (o = s.onUnmounted) == null || o.call(this);
    }), w(this, Wt).forEach((s) => {
      var o;
      (o = s.onDestory) == null || o.call(this);
    }), W(this, In, {}), w(this, rt).clear();
  }
  on(n, r, s) {
    var a;
    s && (n = `${s}_${n}`);
    const o = w(this, rt).get(n);
    o ? o.push(r) : (w(this, rt).set(n, [r]), n.startsWith("window_") ? window.addEventListener(n.replace("window_", ""), w(this, Bn)) : n.startsWith("document_") ? document.addEventListener(n.replace("document_", ""), w(this, Un)) : (a = this.ref.current) == null || a.addEventListener(n, w(this, bt)));
  }
  off(n, r, s) {
    var c;
    s && (n = `${s}_${n}`);
    const o = w(this, rt).get(n);
    if (!o)
      return;
    const a = o.indexOf(r);
    a >= 0 && o.splice(a, 1), o.length || (w(this, rt).delete(n), n.startsWith("window_") ? window.removeEventListener(n.replace("window_", ""), w(this, Bn)) : n.startsWith("document_") ? document.removeEventListener(n.replace("document_", ""), w(this, Un)) : (c = this.ref.current) == null || c.removeEventListener(n, w(this, bt)));
  }
  emitCustomEvent(n, r) {
    w(this, bt).call(this, r instanceof Event ? r : new CustomEvent(n, { detail: r }), n);
  }
  scroll(n, r) {
    const { scrollLeft: s, scrollTop: o, rowsHeightTotal: a, rowsHeight: c, rowHeight: f, colsInfo: { scrollWidth: p, scrollColsWidth: i } } = this.layout, { to: d } = n;
    let { scrollLeft: u, scrollTop: l } = n;
    if (d === "up" || d === "down")
      l = o + (d === "down" ? 1 : -1) * Math.floor(c / f) * f;
    else if (d === "left" || d === "right")
      u = s + (d === "right" ? 1 : -1) * p;
    else if (d === "home")
      l = 0;
    else if (d === "end")
      l = a - c;
    else if (d === "left-begin")
      u = 0;
    else if (d === "right-end")
      u = i - p;
    else {
      const { offsetLeft: g, offsetTop: h } = n;
      typeof g == "number" && (u = s + g), typeof h == "number" && (u = o + h);
    }
    const _ = {};
    return typeof u == "number" && (u = Math.max(0, Math.min(u, i - p)), u !== s && (_.scrollLeft = u)), typeof l == "number" && (l = Math.max(0, Math.min(l, a - c)), l !== o && (_.scrollTop = l)), Object.keys(_).length ? (this.setState(_, () => {
      var g;
      (g = this.options.onScroll) == null || g.call(this, _), r == null || r.call(this, !0);
    }), !0) : (r == null || r.call(this, !1), !1);
  }
  getColInfo(n) {
    if (n === void 0)
      return;
    if (typeof n == "object")
      return n;
    const { colsMap: r, colsList: s } = this.layout;
    return typeof n == "number" ? s[n] : r[n];
  }
  getRowInfo(n) {
    if (n === void 0)
      return;
    if (typeof n == "object")
      return n;
    if (n === -1 || n === "HEADER")
      return { id: "HEADER", index: -1, top: 0 };
    const { rows: r, rowsMap: s } = this.layout;
    return typeof n == "number" ? r[n] : s[n];
  }
  getCellValue(n, r) {
    var f, p;
    const s = typeof n == "object" ? n : this.getRowInfo(n);
    if (!s)
      return;
    const o = typeof r == "object" ? r : this.getColInfo(r);
    if (!o)
      return;
    let a = s.id === "HEADER" ? (f = o.setting.title) != null ? f : o.setting.name : (p = s.data) == null ? void 0 : p[o.name];
    const { cellValueGetter: c } = this.options;
    return c && (a = c.call(this, s, o, a)), a;
  }
  getRowInfoByIndex(n) {
    return this.layout.rows[n];
  }
  update(n = {}, r) {
    if (!w(this, nt))
      return;
    typeof n == "function" && (r = n, n = {});
    const { dirtyType: s, state: o } = n;
    if (s === "layout")
      W(this, Ve, void 0);
    else if (s === "options") {
      if (W(this, nt, void 0), !w(this, Ve))
        return;
      W(this, Ve, void 0);
    }
    this.setState(o != null ? o : (a) => ({ renderCount: a.renderCount + 1 }), r);
  }
  getPointerInfo(n) {
    const r = n.target;
    if (!r || r.closest(".no-cell-event"))
      return;
    const s = r.closest(".dtable-cell");
    if (!s)
      return;
    const o = s.closest(".dtable-row");
    if (!o)
      return;
    const a = s == null ? void 0 : s.getAttribute("data-col"), c = o == null ? void 0 : o.getAttribute("data-id");
    if (!(typeof a != "string" || typeof c != "string"))
      return {
        cellElement: s,
        rowElement: o,
        colName: a,
        rowID: c,
        target: r
      };
  }
  i18n(n, r, s) {
    var o;
    return (o = _o(w(this, lo), n, r, s, this.options.lang)) != null ? o : `{i18n:${n}}`;
  }
  render() {
    var l;
    const n = ne(this, Ii, op).call(this), { className: r, rowHover: s, colHover: o, cellHover: a, bordered: c, striped: f, scrollbarHover: p } = this.options, i = { width: n == null ? void 0 : n.width, height: n == null ? void 0 : n.height }, d = ["dtable", r, {
      "dtable-hover-row": s,
      "dtable-hover-col": o,
      "dtable-hover-cell": a,
      "dtable-bordered": c,
      "dtable-striped": f,
      "dtable-scrolled-down": ((l = n == null ? void 0 : n.scrollTop) != null ? l : 0) > 0,
      "scrollbar-hover": p
    }], u = [];
    return n && w(this, ge).forEach((_) => {
      var h;
      const g = (h = _.onRender) == null ? void 0 : h.call(this, n);
      !g || (g.style && Object.assign(i, g.style), g.className && d.push(g.className), g.children && u.push(g.children));
    }), /* @__PURE__ */ Y("div", {
      id: w(this, jn),
      className: U(d),
      style: i,
      ref: this.ref,
      tabIndex: -1
    }, n && ne(this, Mi, Z_).call(this, n), n && ne(this, Ti, Q_).call(this, n), n && ne(this, Di, ep).call(this, n), n && ne(this, Ni, tp).call(this, n));
  }
}
pn = new WeakMap(), jn = new WeakMap(), Ht = new WeakMap(), nt = new WeakMap(), Wt = new WeakMap(), ge = new WeakMap(), Ve = new WeakMap(), rt = new WeakMap(), In = new WeakMap(), ao = new WeakMap(), lo = new WeakMap(), bt = new WeakMap(), Bn = new WeakMap(), Un = new WeakMap(), Mi = new WeakSet(), Z_ = function(n) {
  const { header: r, colsInfo: s, headerHeight: o, scrollLeft: a } = n;
  if (!r)
    return null;
  if (r === !0)
    return /* @__PURE__ */ Y(ty, {
      scrollLeft: a,
      height: o,
      onRenderCell: w(this, fo),
      onRenderRow: w(this, Pi),
      ...s
    });
  const c = Array.isArray(r) ? r : [r];
  return /* @__PURE__ */ Y(fs, {
    className: "dtable-header",
    style: { height: o },
    renders: c,
    generateArgs: [n],
    generatorThis: this
  });
}, Ti = new WeakSet(), Q_ = function(n) {
  const { headerHeight: r, rowsHeight: s, visibleRows: o, rowHeight: a, colsInfo: c, scrollLeft: f, scrollTop: p } = n;
  return /* @__PURE__ */ Y(ny, {
    top: r,
    height: s,
    rows: o,
    rowHeight: a,
    scrollLeft: f,
    scrollTop: p,
    onRenderCell: w(this, fo),
    onRenderRow: w(this, Li),
    ...c
  });
}, Di = new WeakSet(), ep = function(n) {
  const { footer: r } = n;
  if (!r)
    return null;
  const s = typeof r == "function" ? r.call(this, n) : Array.isArray(r) ? r : [r];
  return /* @__PURE__ */ Y(fs, {
    className: "dtable-footer",
    style: { height: n.footerHeight, top: n.rowsHeight + n.headerHeight },
    renders: s,
    generateArgs: [n],
    generatorThis: this,
    generators: n.footerGenerators
  });
}, Ni = new WeakSet(), tp = function(n) {
  const r = [], { scrollLeft: s, colsInfo: o, scrollTop: a, rowsHeight: c, rowsHeightTotal: f, footerHeight: p } = n, { scrollColsWidth: i, scrollWidth: d } = o, { scrollbarSize: u = 12, horzScrollbarPos: l } = this.options;
  return i > d && r.push(
    /* @__PURE__ */ Y($c, {
      key: "horz",
      type: "horz",
      scrollPos: s,
      scrollSize: i,
      clientSize: d,
      onScroll: w(this, uo),
      left: o.fixedLeftWidth,
      bottom: (l === "inside" ? 0 : -u) + p,
      size: u,
      wheelContainer: this.ref
    })
  ), f > c && r.push(
    /* @__PURE__ */ Y($c, {
      key: "vert",
      type: "vert",
      scrollPos: a,
      scrollSize: f,
      clientSize: c,
      onScroll: w(this, uo),
      right: 0,
      size: u,
      top: n.headerHeight,
      wheelContainer: this.ref
    })
  ), r.length ? r : null;
}, co = new WeakSet(), Ss = function() {
  var n;
  W(this, Ht, !1), (n = this.options.afterRender) == null || n.call(this), w(this, ge).forEach((r) => {
    var s;
    return (s = r.afterRender) == null ? void 0 : s.call(this);
  });
}, Li = new WeakMap(), Pi = new WeakMap(), fo = new WeakMap(), uo = new WeakMap(), Ri = new WeakMap(), Hi = new WeakMap(), Wi = new WeakSet(), np = function() {
  if (w(this, nt))
    return !1;
  const r = { ...xc(), ...w(this, Wt).reduce((s, o) => {
    const { defaultOptions: a } = o;
    return a && Object.assign(s, a), s;
  }, {}), ...this.props };
  return W(this, nt, r), W(this, ge, w(this, Wt).reduce((s, o) => {
    const { when: a, options: c } = o;
    return (!a || a(r)) && (s.push(o), c && Object.assign(r, typeof c == "function" ? c.call(this, r) : c)), s;
  }, [])), W(this, lo, [this.options.i18n, ...this.plugins.map((s) => s.i18n)].filter(Boolean)), !0;
}, ji = new WeakSet(), rp = function() {
  var K, Q;
  const { plugins: n } = this;
  let r = w(this, nt);
  const s = {
    flex: /* @__PURE__ */ Y("div", {
      style: "flex:auto"
    }),
    divider: /* @__PURE__ */ Y("div", {
      style: "width:1px;margin:var(--space);background:var(--color-border);height:50%"
    })
  };
  n.forEach((L) => {
    var X;
    const V = (X = L.beforeLayout) == null ? void 0 : X.call(this, r);
    V && (r = { ...r, ...V }), Object.assign(s, L.footer);
  });
  const { defaultColWidth: o, minColWidth: a, maxColWidth: c } = r, f = [], p = [], i = [], d = {}, u = [], l = [];
  let _ = 0, g = 0, h = 0;
  r.cols.forEach((L) => {
    var St, je, Ie;
    if (L.hidden)
      return;
    const {
      name: V,
      type: X = "",
      fixed: q = !1,
      flex: J = !1,
      width: le = o,
      minWidth: ae = a,
      maxWidth: be = c,
      ...Ze
    } = L, ee = {
      name: V,
      type: X,
      setting: {
        name: V,
        type: X,
        fixed: q,
        flex: J,
        width: le,
        minWidth: ae,
        maxWidth: be,
        ...Ze
      },
      flex: q ? 0 : J === !0 ? 1 : typeof J == "number" ? J : 0,
      left: 0,
      width: kc(le, ae, be),
      realWidth: 0,
      visible: !0,
      index: u.length
    };
    n.forEach((Ct) => {
      var te, me;
      const Qe = (te = Ct.colTypes) == null ? void 0 : te[X];
      if (Qe) {
        const Be = typeof Qe == "function" ? Qe(ee) : Qe;
        Be && Object.assign(ee.setting, Be);
      }
      (me = Ct.onAddCol) == null || me.call(this, ee);
    }), ee.width = kc((St = ee.setting.width) != null ? St : ee.width, (je = ee.setting.minWidth) != null ? je : ae, (Ie = ee.setting.maxWidth) != null ? Ie : be), ee.realWidth = ee.realWidth || ee.width, q === "left" ? (ee.left = _, _ += ee.width, f.push(ee)) : q === "right" ? (ee.left = g, g += ee.width, p.push(ee)) : (ee.left = h, h += ee.width, i.push(ee)), ee.flex && l.push(ee), u.push(ee), d[ee.name] = ee;
  });
  let v = r.width, m = 0;
  const E = _ + h + g;
  if (typeof v == "function" && (v = v.call(this, E)), v === "auto")
    m = E;
  else if (v === "100%") {
    const { parent: L } = this;
    if (L)
      m = L.clientWidth;
    else {
      m = 0, W(this, Ht, !0);
      return;
    }
  } else
    m = v != null ? v : 0;
  const { data: b, rowKey: S = "id", rowHeight: $ } = r, k = [], y = (L, V, X) => {
    var J, le;
    const q = { data: X != null ? X : { [S]: L }, id: L, index: k.length, top: 0 };
    if (X || (q.lazy = !0), k.push(q), ((J = r.onAddRow) == null ? void 0 : J.call(this, q, V)) !== !1) {
      for (const ae of n)
        if (((le = ae.onAddRow) == null ? void 0 : le.call(this, q, V)) === !1)
          return;
    }
  };
  if (typeof b == "number")
    for (let L = 0; L < b; L++)
      y(`${L}`, L);
  else
    Array.isArray(b) && b.forEach((L, V) => {
      var X;
      typeof L == "object" ? y(`${(X = L[S]) != null ? X : ""}`, V, L) : y(`${L != null ? L : ""}`, V);
    });
  let x = k;
  const C = {};
  if (r.onAddRows) {
    const L = r.onAddRows.call(this, x);
    L && (x = L);
  }
  for (const L of n) {
    const V = (K = L.onAddRows) == null ? void 0 : K.call(this, x);
    V && (x = V);
  }
  x.forEach((L, V) => {
    C[L.id] = L, L.index = V, L.top = L.index * $;
  });
  const { header: R, footer: I } = r, T = R ? r.headerHeight || $ : 0, M = I ? r.footerHeight || $ : 0;
  let O = r.height, D = 0;
  const A = x.length * $, j = T + M + A;
  if (typeof O == "function" && (O = O.call(this, j)), O === "auto")
    D = j;
  else if (typeof O == "object")
    D = Math.min(O.max, Math.max(O.min, j));
  else if (O === "100%") {
    const { parent: L } = this;
    if (L)
      D = L.clientHeight;
    else {
      D = 0, W(this, Ht, !0);
      return;
    }
  } else
    D = O;
  const H = D - T - M, F = m - _ - g, G = {
    options: r,
    allRows: k,
    width: m,
    height: D,
    rows: x,
    rowsMap: C,
    rowHeight: $,
    rowsHeight: H,
    rowsHeightTotal: A,
    header: R,
    footer: I,
    footerGenerators: s,
    headerHeight: T,
    footerHeight: M,
    colsMap: d,
    colsList: u,
    flexCols: l,
    colsInfo: {
      fixedLeftCols: f,
      fixedRightCols: p,
      scrollCols: i,
      fixedLeftWidth: _,
      scrollWidth: F,
      scrollColsWidth: h,
      fixedRightWidth: g
    }
  }, z = (Q = r.onLayout) == null ? void 0 : Q.call(this, G);
  z && Object.assign(G, z), n.forEach((L) => {
    if (L.onLayout) {
      const V = L.onLayout.call(this, G);
      V && Object.assign(G, V);
    }
  }), W(this, Ve, G);
}, Ii = new WeakSet(), op = function() {
  (ne(this, Wi, np).call(this) || !w(this, Ve)) && ne(this, ji, rp).call(this);
  const { layout: n } = this;
  if (!n)
    return;
  let { scrollLeft: r } = this.state;
  const { flexCols: s, colsInfo: { scrollCols: o, scrollWidth: a, scrollColsWidth: c } } = n;
  if (s.length) {
    const E = a - c;
    if (E > 0) {
      const b = s.reduce(($, k) => $ + k.flex, 0);
      let S = 0;
      s.forEach(($) => {
        const k = Math.min(E - S, Math.ceil(E * ($.flex / b)));
        $.realWidth = k + $.width, S += $.realWidth;
      });
    } else
      s.forEach((b) => {
        b.realWidth = b.width;
      });
  }
  r = Math.min(Math.max(0, c - a), r);
  let f = 0;
  o.forEach((E) => {
    E.left = f, f += E.realWidth, E.visible = E.left + E.realWidth >= r && E.left <= r + a;
  });
  const { rowsHeightTotal: p, rowsHeight: i, rows: d, rowHeight: u } = n, l = Math.min(Math.max(0, p - i), this.state.scrollTop), _ = Math.floor(l / u), g = l + i, h = Math.min(d.length, Math.ceil(g / u)), v = [], { rowDataGetter: m } = this.options;
  for (let E = _; E < h; E++) {
    const b = d[E];
    b.lazy && m && (b.data = m([b.id])[0], b.lazy = !1), v.push(b);
  }
  return n.visibleRows = v, n.scrollTop = l, n.scrollLeft = r, n;
}, N(Es, "addPlugin", X_), N(Es, "removePlugin", K_);
function Ec(e, t) {
  t !== void 0 ? e.data.hoverCol = t : t = e.data.hoverCol;
  const { current: n } = e.ref;
  if (!n)
    return;
  const r = "dtable-col-hover";
  n.querySelectorAll(`.${r}`).forEach((s) => s.classList.remove(r)), typeof t == "string" && t.length && n.querySelectorAll(`.dtable-cell[data-col="${t}"]`).forEach((s) => s.classList.add(r));
}
const iy = {
  name: "col-hover",
  defaultOptions: {
    colHover: !1
  },
  when: (e) => !!e.colHover,
  events: {
    mouseover(e) {
      var s, o;
      const { colHover: t } = this.options;
      if (!t)
        return;
      const n = (s = e.target) == null ? void 0 : s.closest(".dtable-cell");
      if (!n || t === "header" && !n.closest(".dtable-header"))
        return;
      const r = (o = n == null ? void 0 : n.getAttribute("data-col")) != null ? o : !1;
      Ec(this, r);
    },
    mouseleave() {
      Ec(this, !1);
    }
  }
}, sy = nr(iy, { buildIn: !0 });
function ay(e, t) {
  var a, c;
  typeof e == "boolean" && (t = e, e = void 0);
  const n = this.state.checkedRows, r = {}, { canRowCheckable: s } = this.options, o = (f, p) => {
    s && !s.call(this, f) || !!n[f] === p || (p ? n[f] = !0 : delete n[f], r[f] = p);
  };
  if (e === void 0 ? (t === void 0 && (t = !ip.call(this)), (a = this.layout) == null || a.allRows.forEach(({ id: f }) => {
    o(f, !!t);
  })) : (Array.isArray(e) || (e = [e]), e.forEach((f) => {
    o(f, t != null ? t : !n[f]);
  })), Object.keys(r).length) {
    const f = (c = this.options.beforeCheckRows) == null ? void 0 : c.call(this, e, r, n);
    f && Object.keys(f).forEach((p) => {
      f[p] ? n[p] = !0 : delete n[p];
    }), this.setState({ checkedRows: { ...n } }, () => {
      var p;
      (p = this.options.onCheckChange) == null || p.call(this, r);
    });
  }
  return r;
}
function ly(e) {
  var t;
  return (t = this.state.checkedRows[e]) != null ? t : !1;
}
function ip() {
  var n, r;
  const e = this.getChecks().length, { canRowCheckable: t } = this.options;
  return t ? e === ((n = this.layout) == null ? void 0 : n.allRows.reduce((s, o) => s + (t.call(this, o.id) ? 1 : 0), 0)) : e === ((r = this.layout) == null ? void 0 : r.allRows.length);
}
function cy() {
  return Object.keys(this.state.checkedRows);
}
const fy = {
  name: "checkable",
  defaultOptions: { checkable: !0 },
  when: (e) => !!e.checkable,
  state() {
    return { checkedRows: {} };
  },
  methods: {
    toggleCheckRows: ay,
    isRowChecked: ly,
    isAllRowChecked: ip,
    getChecks: cy
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
        /* @__PURE__ */ Y("div", {
          style: { padding: "0 calc(3 * var(--space))", display: "flex", alignItems: "center" },
          onClick: () => this.toggleCheckRows()
        }, /* @__PURE__ */ Y("input", {
          type: "checkbox",
          checked: e
        }))
      ];
    },
    checkedInfo(e, t) {
      const n = this.getChecks().length, r = [];
      return n && r.push(this.i18n("checkedCountInfo", { selected: n })), r.push(this.i18n("totalCountInfo", { total: t.allRows.length })), [
        /* @__PURE__ */ Y("div", null, r.join(", "))
      ];
    }
  },
  onRenderCell(e, { row: t, col: n }) {
    var c, f;
    const { id: r } = t, { canRowCheckable: s } = this.options;
    if (s && !s.call(this, r))
      return e;
    const { checkbox: o } = n.setting;
    if (typeof o == "function" ? o.call(this, r) : o) {
      const p = this.isRowChecked(r), i = (f = (c = this.options.checkboxRender) == null ? void 0 : c.call(this, p, r)) != null ? f : /* @__PURE__ */ Y("input", {
        type: "checkbox",
        checked: p
      });
      e.unshift(i), e.push({ className: "has-checkbox" });
    }
    return e;
  },
  onRenderHeaderCell(e, { row: t, col: n }) {
    var a, c;
    const { id: r } = t, { checkbox: s } = n.setting;
    if (typeof s == "function" ? s.call(this, r) : s) {
      const f = this.isAllRowChecked(), p = (c = (a = this.options.checkboxRender) == null ? void 0 : a.call(this, f, r)) != null ? c : /* @__PURE__ */ Y("input", {
        type: "checkbox",
        checked: f
      });
      e.unshift(p), e.push({ className: "has-checkbox" });
    }
    return e;
  },
  onRenderRow({ props: e, row: t }) {
    if (!!this.isRowChecked(t.id))
      return { className: U(e.className, "is-checked") };
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
}, uy = nr(fy);
var sp = /* @__PURE__ */ ((e) => (e.unknown = "", e.collapsed = "collapsed", e.expanded = "expanded", e.hidden = "hidden", e.normal = "normal", e))(sp || {});
function Cs(e) {
  const t = this.data.nestedMap.get(e);
  if (!t || t.state !== "")
    return t != null ? t : { state: "normal", level: -1 };
  if (!t.parent && !t.children)
    return t.state = "normal", t;
  const n = this.state.collapsedRows, r = t.children && n && n[e];
  let s = !1, { parent: o } = t;
  for (; o; ) {
    const a = Cs.call(this, o);
    if (a.state !== "expanded") {
      s = !0;
      break;
    }
    o = a.parent;
  }
  return t.state = s ? "hidden" : r ? "collapsed" : t.children ? "expanded" : "normal", t.level = t.parent ? Cs.call(this, t.parent).level + 1 : 0, t;
}
function _y(e, t) {
  var s;
  let n = (s = this.state.collapsedRows) != null ? s : {};
  const { nestedMap: r } = this.data;
  if (e === "HEADER")
    if (t === void 0 && (t = !ap.call(this)), t) {
      const o = r.entries();
      for (const [a, c] of o)
        c.state === "expanded" && (n[a] = !0);
    } else
      n = {};
  else {
    const o = Array.isArray(e) ? e : [e];
    t === void 0 && (t = !n[o[0]]), o.forEach((a) => {
      const c = r.get(a);
      t && (c == null ? void 0 : c.children) ? n[a] = !0 : delete n[a];
    });
  }
  this.update({
    dirtyType: "layout",
    state: { collapsedRows: { ...n } }
  }, () => {
    var o;
    (o = this.options.onNestedChange) == null || o.call(this);
  });
}
function ap() {
  const e = this.data.nestedMap.values();
  for (const t of e)
    if (t.state === "expanded")
      return !1;
  return !0;
}
function lp(e, t = 0, n, r = 0) {
  var s;
  n || (n = [...e.keys()]);
  for (const o of n) {
    const a = e.get(o);
    !a || (a.level === r && (a.order = t++), (s = a.children) != null && s.length && (t = lp(e, t, a.children, r + 1)));
  }
  return t;
}
function cp(e, t, n, r) {
  const s = e.getNestedRowInfo(t);
  return !s || s.state === "" || !s.children || s.children.forEach((o) => {
    r[o] = n, cp(e, o, n, r);
  }), s;
}
function fp(e, t, n, r, s) {
  var c;
  const o = e.getNestedRowInfo(t);
  if (!o || o.state === "")
    return;
  ((c = o.children) == null ? void 0 : c.every((f) => {
    const p = !!(r[f] !== void 0 ? r[f] : s[f]);
    return n === p;
  })) && (r[t] = n), o.parent && fp(e, o.parent, n, r, s);
}
const py = {
  name: "nested",
  defaultOptions: {
    nested: !0,
    nestedParentKey: "parent",
    asParentKey: "asParent",
    nestedIndent: 20,
    canSortTo(e, t) {
      const { nestedMap: n } = this.data, r = n.get(e.id), s = n.get(t.id);
      return (r == null ? void 0 : r.parent) === (s == null ? void 0 : s.parent);
    },
    beforeCheckRows(e, t, n) {
      if (!this.options.checkable || !(e != null && e.length))
        return;
      const r = {};
      return Object.entries(t).forEach(([s, o]) => {
        const a = cp(this, s, o, r);
        a != null && a.parent && fp(this, a.parent, o, r, n);
      }), r;
    }
  },
  when: (e) => !!e.nested,
  data() {
    return { nestedMap: /* @__PURE__ */ new Map() };
  },
  methods: {
    toggleRow: _y,
    isAllCollapsed: ap,
    getNestedRowInfo: Cs
  },
  beforeLayout() {
    this.data.nestedMap.clear();
  },
  onAddRow(e) {
    var s, o, a, c, f;
    const { nestedMap: t } = this.data, n = (o = e.data) == null ? void 0 : o[(s = this.options.nestedParentKey) != null ? s : "parent"], r = (a = t.get(e.id)) != null ? a : {
      state: "",
      level: 0
    };
    if (r.parent = n, (f = e.data) != null && f[(c = this.options.asParentKey) != null ? c : "asParent"] && (r.children = []), t.set(e.id, r), n) {
      let p = t.get(n);
      p || (p = {
        state: "",
        level: 0
      }, t.set(n, p)), p.children || (p.children = []), p.children.push(e.id);
    }
  },
  onAddRows(e) {
    return e = e.filter((t) => this.getNestedRowInfo(t.id).state !== "hidden"), lp(this.data.nestedMap), e.sort((t, n) => {
      var a, c;
      const r = this.getNestedRowInfo(t.id), s = this.getNestedRowInfo(n.id), o = ((a = r.order) != null ? a : 0) - ((c = s.order) != null ? c : 0);
      return o === 0 ? t.index - n.index : o;
    }), e;
  },
  onRenderCell(e, { col: t, row: n }) {
    var c, f, p;
    const { id: r, data: s } = n, { nestedToggle: o } = t.setting, a = this.getNestedRowInfo(r);
    if (o && (a.children || a.parent) && e.unshift((f = (c = this.options.onRenderNestedToggle) == null ? void 0 : c.call(this, a, r, t, s)) != null ? f : /* @__PURE__ */ Y("a", {
      role: "button",
      className: `dtable-nested-toggle state${a.children ? "" : " is-no-child"}`
    }, /* @__PURE__ */ Y("span", {
      className: "toggle-icon"
    }))), a.level) {
      let { nestedIndent: i = o } = t.setting;
      i && (i === !0 && (i = (p = this.options.nestedIndent) != null ? p : 12), e.unshift(/* @__PURE__ */ Y("div", {
        className: "dtable-nested-indent",
        style: { width: i * a.level + "px" }
      })));
    }
    return e;
  },
  onRenderHeaderCell(e, { row: t, col: n }) {
    var s, o;
    const { id: r } = t;
    return n.setting.nestedToggle && e.unshift((o = (s = this.options.onRenderNestedToggle) == null ? void 0 : s.call(this, void 0, r, n, void 0)) != null ? o : /* @__PURE__ */ Y("a", {
      type: "button",
      className: "dtable-nested-toggle state"
    }, /* @__PURE__ */ Y("span", {
      className: "toggle-icon"
    }))), e;
  },
  onRenderRow({ props: e, row: t }) {
    const n = this.getNestedRowInfo(t.id);
    return {
      className: U(e.className, `is-${n.state}`),
      "data-parent": n.parent
    };
  },
  onRenderHeaderRow({ props: e }) {
    return e.className = U(e.className, `is-${this.isAllCollapsed() ? "collapsed" : "expanded"}`), e;
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
}, dy = nr(py);
const hy = {
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
        const { linkTemplate: r = "", linkProps: s } = t.setting, o = Ee(r, n.data);
        return e[0] = /* @__PURE__ */ Y("a", {
          href: o,
          ...s
        }, e[0]), e;
      }
    },
    avatar: {
      onRenderCell(e, { col: t, row: n }) {
        const { data: r } = n, { avatarWithName: s, avatarClass: o = "size-xs circle", avatarKey: a = `${t.name}Avatar` } = t.setting, c = /* @__PURE__ */ Y("div", {
          className: `avatar ${o} flex-none`
        }, /* @__PURE__ */ Y("img", {
          src: r ? r[a] : ""
        }));
        return s ? e.unshift(c) : e[0] = c, e;
      }
    },
    circleProgress: {
      align: "center",
      onRenderCell(e, { col: t }) {
        const { circleSize: n = 24, circleBorderSize: r = 1, circleBgColor: s = "var(--color-border)", circleColor: o = "var(--color-success-500)" } = t.setting, a = (n - r) / 2, c = n / 2, f = e[0];
        return e[0] = /* @__PURE__ */ Y("svg", {
          width: n,
          height: n
        }, /* @__PURE__ */ Y("circle", {
          cx: c,
          cy: c,
          r: a,
          "stroke-width": r,
          stroke: s,
          fill: "transparent"
        }), /* @__PURE__ */ Y("circle", {
          cx: c,
          cy: c,
          r: a,
          "stroke-width": r,
          stroke: o,
          fill: "transparent",
          "stroke-linecap": "round",
          "stroke-dasharray": Math.PI * a * 2,
          "stroke-dashoffset": Math.PI * a * 2 * (100 - f) / 100,
          style: { transformOrigin: "center", transform: "rotate(-90deg)" }
        }), /* @__PURE__ */ Y("text", {
          x: c,
          y: c + r,
          "dominant-baseline": "middle",
          "text-anchor": "middle",
          style: { fontSize: `${a}px` }
        }, Math.round(f))), e;
      }
    },
    actionButtons: {
      onRenderCell(e, { col: t, row: n }) {
        var c;
        const r = (c = n.data) == null ? void 0 : c[t.name];
        if (!r)
          return e;
        const { actionBtnTemplate: s = '<button type="button" data-action="{action}" title="{title}" class="{className}"><i class="icon icon-{icon}"></i></button>', actionBtnData: o = {}, actionBtnClass: a = "btn text-primary square size-sm ghost" } = t.setting;
        return [{
          html: r.map((f) => {
            typeof f == "string" && (f = { action: f });
            const p = o[f.action];
            return p && (f = { className: a, ...p, ...f }), Ee(s, f);
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
        const { format: r, type: s } = n, o = e[0];
        return typeof r == "function" ? e[0] = s === "html" ? { html: r(o) } : r(o) : s === "datetime" ? e[0] = $s(o, r) : s === "html" ? e[0] = { html: Ee(r, o) } : e[0] = Ee(r, o), e;
      }
    }
  }
}, vy = nr(hy, { buildIn: !0 }), my = {
  name: "sort-type",
  onRenderHeaderCell(e, { col: t }) {
    const { sortType: n } = t.setting;
    if (n) {
      const { sortLink: r = this.options.sortLink, sortAttrs: s } = t.setting, o = n === !0 ? "none" : n;
      if (e.push(
        /* @__PURE__ */ Y("div", {
          className: `dtable-sort dtable-sort-${o}`
        }),
        { outer: !0, attrs: { "data-sort": o } }
      ), r) {
        const a = typeof r == "function" ? r.call(this, t, o) : r;
        e.push(
          { tagName: "a", attrs: { href: a, ...s } }
        );
      }
    }
    return e;
  }
}, gy = nr(my, { buildIn: !0 }), yy = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  colHover: sy,
  checkable: uy,
  NestedRowState: sp,
  nested: dy,
  rich: vy,
  sortType: gy
}, Symbol.toStringTag, { value: "Module" }));
class sr extends Je {
}
N(sr, "NAME", "dtable"), N(sr, "Component", Es), N(sr, "definePlugin", nr), N(sr, "removePlugin", K_), N(sr, "plugins", yy);
var ot, ke;
class by {
  constructor(t) {
    P(this, ot, void 0);
    P(this, ke, void 0);
    W(this, ot, t), W(this, ke, document.querySelector(t.getAttribute("data-target")) || document.querySelector(t.getAttribute("data-tab")) || document.querySelector(t.getAttribute("href")));
  }
  showTarget() {
    this.addActive(w(this, ot).parentElement.parentElement, w(this, ot).parentElement), this.addActive(w(this, ke).parentElement, w(this, ke)), w(this, ke).dispatchEvent(new CustomEvent("show.zui3.tab"));
  }
  show() {
    W(this, ke, w(this, ot)), this.addActive(w(this, ke).parentElement, w(this, ke)), W(this, ot, document.querySelector(`[href='#${w(this, ke).getAttribute("id")}']`) || document.querySelector(`[data-tab='#${w(this, ke).getAttribute("id")}']`) || document.querySelector(`[data-target='#${w(this, ke).getAttribute("id")}']`)), this.addActive(w(this, ot).parentElement.parentElement, w(this, ot).parentElement);
  }
  addActive(t, n) {
    const r = t.children;
    Array.from(r).forEach((o) => {
      o.classList.remove("active"), o.classList.contains("fade") && o.classList.remove("in");
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
ot = new WeakMap(), ke = new WeakMap();
document.addEventListener("click", function(e) {
  e.target instanceof HTMLElement && (e.target.dataset.toggle === "tab" || e.target.getAttribute("data-tab")) && (e.preventDefault(), new by(e.target).showTarget());
});
export {
  ja as ActionMenu,
  Ba as ActionMenuNested,
  bl as Avatar,
  wl as BtnGroup,
  qa as Button,
  xe as ContextMenu,
  sr as DTable,
  it as Datepicker,
  we as Dropdown,
  As as EventBus,
  Ga as Menu,
  sl as Messager,
  Te as Modal,
  wn as ModalTrigger,
  Ll as Nav,
  by as NavTabs,
  nc as Pager,
  _l as ProgressCircle,
  ht as TIME_DAY,
  rc as Toolbar,
  st as Tooltip,
  xp as addI18nMap,
  xy as browser,
  tc as calculateTimestamp,
  ky as convertBytes,
  Me as createDate,
  $y as formatBytes,
  $s as formatDate,
  My as formatDateSpan,
  Ee as formatString,
  $p as getLangCode,
  Ty as getTimeBeforeDesc,
  _o as i18n,
  Ay as isDBY,
  os as isObject,
  vo as isSameDay,
  Lm as isSameMonth,
  Ey as isSameWeek,
  ec as isSameYear,
  Sy as isToday,
  Oy as isTomorrow,
  Cy as isYesterday,
  cs as mergeDeep,
  ls as nativeEvents,
  kp as setLangCode,
  fd as store
};
