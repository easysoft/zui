var cp = Object.defineProperty;
var fp = (e, t, n) => t in e ? cp(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var A = (e, t, n) => (fp(e, typeof t != "symbol" ? t + "" : t, n), n), rs = (e, t, n) => {
  if (!t.has(e))
    throw TypeError("Cannot " + n);
};
var w = (e, t, n) => (rs(e, t, "read from private field"), n ? n.call(e) : t.get(e)), P = (e, t, n) => {
  if (t.has(e))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(e) : t.set(e, n);
}, H = (e, t, n, r) => (rs(e, t, "write to private field"), r ? r.call(e, n) : t.set(e, n), n);
var ne = (e, t, n) => (rs(e, t, "access private method"), n);
var Ii, re, Cc, Oc, lr, Ca, zo = {}, Mc = [], up = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function jt(e, t) {
  for (var n in t)
    e[n] = t[n];
  return e;
}
function Ac(e) {
  var t = e.parentNode;
  t && t.removeChild(e);
}
function Ui(e, t, n) {
  var r, s, o, a = {};
  for (o in t)
    o == "key" ? r = t[o] : o == "ref" ? s = t[o] : a[o] = t[o];
  if (arguments.length > 2 && (a.children = arguments.length > 3 ? Ii.call(arguments, 2) : n), typeof e == "function" && e.defaultProps != null)
    for (o in e.defaultProps)
      a[o] === void 0 && (a[o] = e.defaultProps[o]);
  return ko(e, a, r, s, null);
}
function ko(e, t, n, r, s) {
  var o = { type: e, props: t, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: s == null ? ++Cc : s };
  return s == null && re.vnode != null && re.vnode(o), o;
}
function _p() {
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
function Oa(e) {
  (!e.__d && (e.__d = !0) && lr.push(e) && !Yo.__r++ || Ca !== re.debounceRendering) && ((Ca = re.debounceRendering) || setTimeout)(Yo);
}
function Yo() {
  for (var e; Yo.__r = lr.length; )
    e = lr.sort(function(t, n) {
      return t.__v.__b - n.__v.__b;
    }), lr = [], e.some(function(t) {
      var n, r, s, o, a, c;
      t.__d && (a = (o = (n = t).__v).__e, (c = n.__P) && (r = [], (s = jt({}, o)).__v = o.__v + 1, Os(c, o, s, n.__n, c.ownerSVGElement !== void 0, o.__h != null ? [a] : null, r, a == null ? Lr(o) : a, o.__h), Pc(r, o), o.__e != a && Dc(o)));
    });
}
function Tc(e, t, n, r, s, o, a, c, f, p) {
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
      Os(e, l, u = u || zo, s, o, a, c, f, p), _ = l.__e, (d = l.ref) && u.ref != d && (h || (h = []), u.ref && h.push(u.ref, null, l), h.push(d, l.__c || _, l)), _ != null ? (g == null && (g = _), typeof l.type == "function" && l.__k === u.__k ? l.__d = f = Nc(l, f, e) : f = Lc(e, l, u, v, _, f), typeof n.type == "function" && (n.__d = f)) : f && u.__e == f && f.parentNode != e && (f = Lr(u));
    }
  for (n.__e = g, i = m; i--; )
    v[i] != null && Hc(v[i], v[i]);
  if (h)
    for (i = 0; i < h.length; i++)
      Rc(h[i], h[++i], h[++i]);
}
function Nc(e, t, n) {
  for (var r, s = e.__k, o = 0; s && o < s.length; o++)
    (r = s[o]) && (r.__ = e, t = typeof r.type == "function" ? Nc(r, t, n) : Lc(n, r, r, s, r.__e, t));
  return t;
}
function Lc(e, t, n, r, s, o) {
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
function pp(e, t, n, r, s) {
  var o;
  for (o in n)
    o === "children" || o === "key" || o in t || Vo(e, o, null, n[o], r);
  for (o in t)
    s && typeof t[o] != "function" || o === "children" || o === "key" || o === "value" || o === "checked" || n[o] === t[o] || Vo(e, o, t[o], n[o], r);
}
function Ma(e, t, n) {
  t[0] === "-" ? e.setProperty(t, n) : e[t] = n == null ? "" : typeof n != "number" || up.test(t) ? n : n + "px";
}
function Vo(e, t, n, r, s) {
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
      o = t !== (t = t.replace(/Capture$/, "")), t = t.toLowerCase() in e ? t.toLowerCase().slice(2) : t.slice(2), e.l || (e.l = {}), e.l[t + o] = n, n ? r || e.addEventListener(t, o ? Da : Aa, o) : e.removeEventListener(t, o ? Da : Aa, o);
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
function Aa(e) {
  this.l[e.type + !1](re.event ? re.event(e) : e);
}
function Da(e) {
  this.l[e.type + !0](re.event ? re.event(e) : e);
}
function Os(e, t, n, r, s, o, a, c, f) {
  var p, i, d, u, l, _, g, h, v, m, k, b, E, $, S, y = t.type;
  if (t.constructor !== void 0)
    return null;
  n.__h != null && (f = n.__h, c = t.__e = n.__e, t.__h = null, o = [c]), (p = re.__b) && p(t);
  try {
    e:
      if (typeof y == "function") {
        if (h = t.props, v = (p = y.contextType) && r[p.__c], m = p ? v ? v.props.value : p.__ : r, n.__c ? g = (i = t.__c = n.__c).__ = i.__E : ("prototype" in y && y.prototype.render ? t.__c = i = new y(h, m) : (t.__c = i = new xo(h, m), i.constructor = y, i.render = hp), v && v.sub(i), i.props = h, i.state || (i.state = {}), i.context = m, i.__n = r, d = i.__d = !0, i.__h = [], i._sb = []), i.__s == null && (i.__s = i.state), y.getDerivedStateFromProps != null && (i.__s == i.state && (i.__s = jt({}, i.__s)), jt(i.__s, y.getDerivedStateFromProps(h, i.__s))), u = i.props, l = i.state, d)
          y.getDerivedStateFromProps == null && i.componentWillMount != null && i.componentWillMount(), i.componentDidMount != null && i.__h.push(i.componentDidMount);
        else {
          if (y.getDerivedStateFromProps == null && h !== u && i.componentWillReceiveProps != null && i.componentWillReceiveProps(h, m), !i.__e && i.shouldComponentUpdate != null && i.shouldComponentUpdate(h, i.__s, m) === !1 || t.__v === n.__v) {
            for (i.props = h, i.state = i.__s, t.__v !== n.__v && (i.__d = !1), i.__v = t, t.__e = n.__e, t.__k = n.__k, t.__k.forEach(function(x) {
              x && (x.__ = t);
            }), k = 0; k < i._sb.length; k++)
              i.__h.push(i._sb[k]);
            i._sb = [], i.__h.length && a.push(i);
            break e;
          }
          i.componentWillUpdate != null && i.componentWillUpdate(h, i.__s, m), i.componentDidUpdate != null && i.__h.push(function() {
            i.componentDidUpdate(u, l, _);
          });
        }
        if (i.context = m, i.props = h, i.__v = t, i.__P = e, b = re.__r, E = 0, "prototype" in y && y.prototype.render) {
          for (i.state = i.__s, i.__d = !1, b && b(t), p = i.render(i.props, i.state, i.context), $ = 0; $ < i._sb.length; $++)
            i.__h.push(i._sb[$]);
          i._sb = [];
        } else
          do
            i.__d = !1, b && b(t), p = i.render(i.props, i.state, i.context), i.state = i.__s;
          while (i.__d && ++E < 25);
        i.state = i.__s, i.getChildContext != null && (r = jt(jt({}, r), i.getChildContext())), d || i.getSnapshotBeforeUpdate == null || (_ = i.getSnapshotBeforeUpdate(u, l)), S = p != null && p.type === Fi && p.key == null ? p.props.children : p, Tc(e, Array.isArray(S) ? S : [S], t, n, r, s, o, a, c, f), i.base = t.__e, t.__h = null, i.__h.length && a.push(i), g && (i.__E = i.__ = null), i.__e = !1;
      } else
        o == null && t.__v === n.__v ? (t.__k = n.__k, t.__e = n.__e) : t.__e = dp(n.__e, t, n, r, s, o, a, f);
    (p = re.diffed) && p(t);
  } catch (x) {
    t.__v = null, (f || o != null) && (t.__e = c, t.__h = !!f, o[o.indexOf(c)] = null), re.__e(x, t, n);
  }
}
function Pc(e, t) {
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
function dp(e, t, n, r, s, o, a, c) {
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
    if (o = o && Ii.call(e.childNodes), p = (d = n.props || zo).dangerouslySetInnerHTML, i = u.dangerouslySetInnerHTML, !c) {
      if (o != null)
        for (d = {}, _ = 0; _ < e.attributes.length; _++)
          d[e.attributes[_].name] = e.attributes[_].value;
      (i || p) && (i && (p && i.__html == p.__html || i.__html === e.innerHTML) || (e.innerHTML = i && i.__html || ""));
    }
    if (pp(e, u, d, s, c), i)
      t.__k = [];
    else if (_ = t.props.children, Tc(e, Array.isArray(_) ? _ : [_], t, n, r, s && l !== "foreignObject", o, a, o ? o[0] : n.__k && Lr(n, 0), c), o != null)
      for (_ = o.length; _--; )
        o[_] != null && Ac(o[_]);
    c || ("value" in u && (_ = u.value) !== void 0 && (_ !== e.value || l === "progress" && !_ || l === "option" && _ !== d.value) && Vo(e, "value", _, d.value, !1), "checked" in u && (_ = u.checked) !== void 0 && _ !== e.checked && Vo(e, "checked", _, d.checked, !1));
  }
  return e;
}
function Rc(e, t, n) {
  try {
    typeof e == "function" ? e(t) : e.current = t;
  } catch (r) {
    re.__e(r, n);
  }
}
function Hc(e, t, n) {
  var r, s;
  if (re.unmount && re.unmount(e), (r = e.ref) && (r.current && r.current !== e.__e || Rc(r, null, t)), (r = e.__c) != null) {
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
      r[s] && Hc(r[s], t, n || typeof e.type != "function");
  n || e.__e == null || Ac(e.__e), e.__ = e.__e = e.__d = void 0;
}
function hp(e, t, n) {
  return this.constructor(e, n);
}
function vp(e, t, n) {
  var r, s, o;
  re.__ && re.__(e, t), s = (r = typeof n == "function") ? null : n && n.__k || t.__k, o = [], Os(t, e = (!r && n || t).__k = Ui(Fi, null, [e]), s || zo, zo, t.ownerSVGElement !== void 0, !r && n ? [n] : s ? null : t.firstChild ? Ii.call(t.childNodes) : null, o, !r && n ? n : s ? s.__e : t.firstChild, r), Pc(o, e);
}
Ii = Mc.slice, re = { __e: function(e, t, n, r) {
  for (var s, o, a; t = t.__; )
    if ((s = t.__c) && !s.__)
      try {
        if ((o = s.constructor) && o.getDerivedStateFromError != null && (s.setState(o.getDerivedStateFromError(e)), a = s.__d), s.componentDidCatch != null && (s.componentDidCatch(e, r || {}), a = s.__d), a)
          return s.__E = s;
      } catch (c) {
        e = c;
      }
  throw e;
} }, Cc = 0, Oc = function(e) {
  return e != null && e.constructor === void 0;
}, xo.prototype.setState = function(e, t) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = jt({}, this.state), typeof e == "function" && (e = e(jt({}, n), this.props)), e && jt(n, e), e != null && this.__v && (t && this._sb.push(t), Oa(this));
}, xo.prototype.forceUpdate = function(e) {
  this.__v && (this.__e = !0, e && this.__h.push(e), Oa(this));
}, xo.prototype.render = Fi, lr = [], Yo.__r = 0;
var vt;
class mp {
  constructor(t = "") {
    P(this, vt, void 0);
    typeof t == "object" ? H(this, vt, t) : H(this, vt, document.appendChild(document.createComment(t)));
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
class Ms extends mp {
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
    return typeof t == "string" && (ls.has(t) ? (t = new Event(t), Object.assign(t, { detail: n })) : t = new CustomEvent(t, { detail: n })), super.emit(Ms.createEvent(t, n));
  }
  static createEvent(t, n) {
    return typeof t == "string" && (ls.has(t) ? (t = new Event(t), Object.assign(t, { detail: n })) : t = new CustomEvent(t, { detail: n })), t;
  }
}
var mt, Qr, an, ar;
class Ta extends Ms {
  constructor(n = "", r) {
    super(n);
    P(this, an);
    P(this, mt, /* @__PURE__ */ new Map());
    P(this, Qr, void 0);
    H(this, Qr, r == null ? void 0 : r.customEventSuffix);
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
function gp(e, t) {
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
function yp(e, t, n) {
  const r = gp(e, t), s = r[r.length - 1];
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
function Se(e, ...t) {
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
var As = /* @__PURE__ */ ((e) => (e[e.B = 1] = "B", e[e.KB = 1024] = "KB", e[e.MB = 1048576] = "MB", e[e.GB = 1073741824] = "GB", e[e.TB = 1099511627776] = "TB", e))(As || {});
function my(e, t = 2, n = "") {
  return Number.isNaN(e) ? "?KB" : (n || (e < 1024 ? n = "B" : e < 1048576 ? n = "KB" : e < 1073741824 ? n = "MB" : e < 1099511627776 ? n = "GB" : n = "TB"), (e / As[n]).toFixed(t) + n);
}
const gy = (e) => {
  const t = /^[0-9]*(B|KB|MB|GB|TB)$/;
  e = e.toUpperCase();
  const n = e.match(t);
  if (!n)
    return 0;
  const r = n[1];
  return e = e.replace(r, ""), Number.parseInt(e, 10) * As[r];
};
var Sc, Ec;
let Ds = (Ec = (Sc = document.documentElement.getAttribute("lang")) == null ? void 0 : Sc.toLowerCase()) != null ? Ec : "zh_cn", Nt;
function bp() {
  return Ds;
}
function wp(e) {
  Ds = e.toLowerCase();
}
function $p(e, t) {
  Nt || (Nt = {}), typeof e == "string" && (e = { [e]: t != null ? t : {} }), cs(Nt, e);
}
function _o(e, t, n, r, s, o) {
  Array.isArray(e) ? Nt && e.unshift(Nt) : e = Nt ? [Nt, e] : [e], typeof n == "string" && (o = s, s = r, r = n, n = void 0);
  const a = s || Ds;
  let c;
  for (const f of e) {
    if (!f)
      continue;
    const p = f[a];
    if (!p)
      continue;
    const i = o && f === Nt ? `${o}.${t}` : t;
    if (c = yp(p, i), c !== void 0)
      break;
  }
  return c === void 0 ? r : n ? Se(c, ...Array.isArray(n) ? n : [n]) : c;
}
_o.addLang = $p;
_o.getCode = bp;
_o.setCode = wp;
function kp(e) {
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
    t = typeof t == "string" ? document.querySelector(t) : t, this.constructor.EVENTS && H(this, $e, new Ta(t, { customEventSuffix: `.${this.constructor.KEY}` })), H(this, gt, { ...this.constructor.DEFAULT, ...t instanceof HTMLElement ? kp(t.dataset) : null, ...n }), this.constructor.all.set(t, this), H(this, kn, t), this.init(), requestAnimationFrame(() => {
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
    let r = Ta.createEvent(t, n);
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
gt = new WeakMap(), kn = new WeakMap(), $e = new WeakMap(), A(at, "EVENTS", !1), A(at, "DEFAULT", {}), A(at, "allComponents", /* @__PURE__ */ new Map());
class Je extends at {
  constructor() {
    super(...arguments);
    A(this, "ref", _p());
  }
  get $() {
    return this.ref.current;
  }
  init() {
    requestAnimationFrame(() => this.render());
  }
  render(n) {
    const r = this.constructor.Component;
    vp(/* @__PURE__ */ Ui(r, {
      ref: this.ref,
      ...this.setOptions(n)
    }), this.element);
  }
}
var Ts, ce, Wc, jc, cr, Na, Bc = {}, Ic = [], xp = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function Bt(e, t) {
  for (var n in t)
    e[n] = t[n];
  return e;
}
function Uc(e) {
  var t = e.parentNode;
  t && t.removeChild(e);
}
function ye(e, t, n) {
  var r, s, o, a = {};
  for (o in t)
    o == "key" ? r = t[o] : o == "ref" ? s = t[o] : a[o] = t[o];
  if (arguments.length > 2 && (a.children = arguments.length > 3 ? Ts.call(arguments, 2) : n), typeof e == "function" && e.defaultProps != null)
    for (o in e.defaultProps)
      a[o] === void 0 && (a[o] = e.defaultProps[o]);
  return So(e, a, r, s, null);
}
function So(e, t, n, r, s) {
  var o = { type: e, props: t, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: s == null ? ++Wc : s };
  return s == null && ce.vnode != null && ce.vnode(o), o;
}
function Sp() {
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
function Fc(e) {
  var t, n;
  if ((e = e.__) != null && e.__c != null) {
    for (e.__e = e.__c.base = null, t = 0; t < e.__k.length; t++)
      if ((n = e.__k[t]) != null && n.__e != null) {
        e.__e = e.__c.base = n.__e;
        break;
      }
    return Fc(e);
  }
}
function La(e) {
  (!e.__d && (e.__d = !0) && cr.push(e) && !qo.__r++ || Na !== ce.debounceRendering) && ((Na = ce.debounceRendering) || setTimeout)(qo);
}
function qo() {
  for (var e; qo.__r = cr.length; )
    e = cr.sort(function(t, n) {
      return t.__v.__b - n.__v.__b;
    }), cr = [], e.some(function(t) {
      var n, r, s, o, a, c;
      t.__d && (a = (o = (n = t).__v).__e, (c = n.__P) && (r = [], (s = Bt({}, o)).__v = o.__v + 1, qc(c, o, s, n.__n, c.ownerSVGElement !== void 0, o.__h != null ? [a] : null, r, a == null ? Pr(o) : a, o.__h), Cp(r, o), o.__e != a && Fc(o)));
    });
}
function zc(e, t, n, r, s, o, a, c, f, p) {
  var i, d, u, l, _, g, h, v = r && r.__k || Ic, m = v.length;
  for (n.__k = [], i = 0; i < t.length; i++)
    if ((l = n.__k[i] = (l = t[i]) == null || typeof l == "boolean" ? null : typeof l == "string" || typeof l == "number" || typeof l == "bigint" ? So(null, l, null, null, l) : Array.isArray(l) ? So(Ns, { children: l }, null, null, null) : l.__b > 0 ? So(l.type, l.props, l.key, l.ref ? l.ref : null, l.__v) : l) != null) {
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
      qc(e, l, u = u || Bc, s, o, a, c, f, p), _ = l.__e, (d = l.ref) && u.ref != d && (h || (h = []), u.ref && h.push(u.ref, null, l), h.push(d, l.__c || _, l)), _ != null ? (g == null && (g = _), typeof l.type == "function" && l.__k === u.__k ? l.__d = f = Yc(l, f, e) : f = Vc(e, l, u, v, _, f), typeof n.type == "function" && (n.__d = f)) : f && u.__e == f && f.parentNode != e && (f = Pr(u));
    }
  for (n.__e = g, i = m; i--; )
    v[i] != null && Xc(v[i], v[i]);
  if (h)
    for (i = 0; i < h.length; i++)
      Gc(h[i], h[++i], h[++i]);
}
function Yc(e, t, n) {
  for (var r, s = e.__k, o = 0; s && o < s.length; o++)
    (r = s[o]) && (r.__ = e, t = typeof r.type == "function" ? Yc(r, t, n) : Vc(n, r, r, s, r.__e, t));
  return t;
}
function Vc(e, t, n, r, s, o) {
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
function Ep(e, t, n, r, s) {
  var o;
  for (o in n)
    o === "children" || o === "key" || o in t || Go(e, o, null, n[o], r);
  for (o in t)
    s && typeof t[o] != "function" || o === "children" || o === "key" || o === "value" || o === "checked" || n[o] === t[o] || Go(e, o, t[o], n[o], r);
}
function Pa(e, t, n) {
  t[0] === "-" ? e.setProperty(t, n) : e[t] = n == null ? "" : typeof n != "number" || xp.test(t) ? n : n + "px";
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
            n && t in n || Pa(e.style, t, "");
        if (n)
          for (t in n)
            r && n[t] === r[t] || Pa(e.style, t, n[t]);
      }
    else if (t[0] === "o" && t[1] === "n")
      o = t !== (t = t.replace(/Capture$/, "")), t = t.toLowerCase() in e ? t.toLowerCase().slice(2) : t.slice(2), e.l || (e.l = {}), e.l[t + o] = n, n ? r || e.addEventListener(t, o ? Ha : Ra, o) : e.removeEventListener(t, o ? Ha : Ra, o);
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
function Ra(e) {
  this.l[e.type + !1](ce.event ? ce.event(e) : e);
}
function Ha(e) {
  this.l[e.type + !0](ce.event ? ce.event(e) : e);
}
function qc(e, t, n, r, s, o, a, c, f) {
  var p, i, d, u, l, _, g, h, v, m, k, b, E, $, S, y = t.type;
  if (t.constructor !== void 0)
    return null;
  n.__h != null && (f = n.__h, c = t.__e = n.__e, t.__h = null, o = [c]), (p = ce.__b) && p(t);
  try {
    e:
      if (typeof y == "function") {
        if (h = t.props, v = (p = y.contextType) && r[p.__c], m = p ? v ? v.props.value : p.__ : r, n.__c ? g = (i = t.__c = n.__c).__ = i.__E : ("prototype" in y && y.prototype.render ? t.__c = i = new y(h, m) : (t.__c = i = new fr(h, m), i.constructor = y, i.render = Mp), v && v.sub(i), i.props = h, i.state || (i.state = {}), i.context = m, i.__n = r, d = i.__d = !0, i.__h = [], i._sb = []), i.__s == null && (i.__s = i.state), y.getDerivedStateFromProps != null && (i.__s == i.state && (i.__s = Bt({}, i.__s)), Bt(i.__s, y.getDerivedStateFromProps(h, i.__s))), u = i.props, l = i.state, d)
          y.getDerivedStateFromProps == null && i.componentWillMount != null && i.componentWillMount(), i.componentDidMount != null && i.__h.push(i.componentDidMount);
        else {
          if (y.getDerivedStateFromProps == null && h !== u && i.componentWillReceiveProps != null && i.componentWillReceiveProps(h, m), !i.__e && i.shouldComponentUpdate != null && i.shouldComponentUpdate(h, i.__s, m) === !1 || t.__v === n.__v) {
            for (i.props = h, i.state = i.__s, t.__v !== n.__v && (i.__d = !1), i.__v = t, t.__e = n.__e, t.__k = n.__k, t.__k.forEach(function(x) {
              x && (x.__ = t);
            }), k = 0; k < i._sb.length; k++)
              i.__h.push(i._sb[k]);
            i._sb = [], i.__h.length && a.push(i);
            break e;
          }
          i.componentWillUpdate != null && i.componentWillUpdate(h, i.__s, m), i.componentDidUpdate != null && i.__h.push(function() {
            i.componentDidUpdate(u, l, _);
          });
        }
        if (i.context = m, i.props = h, i.__v = t, i.__P = e, b = ce.__r, E = 0, "prototype" in y && y.prototype.render) {
          for (i.state = i.__s, i.__d = !1, b && b(t), p = i.render(i.props, i.state, i.context), $ = 0; $ < i._sb.length; $++)
            i.__h.push(i._sb[$]);
          i._sb = [];
        } else
          do
            i.__d = !1, b && b(t), p = i.render(i.props, i.state, i.context), i.state = i.__s;
          while (i.__d && ++E < 25);
        i.state = i.__s, i.getChildContext != null && (r = Bt(Bt({}, r), i.getChildContext())), d || i.getSnapshotBeforeUpdate == null || (_ = i.getSnapshotBeforeUpdate(u, l)), S = p != null && p.type === Ns && p.key == null ? p.props.children : p, zc(e, Array.isArray(S) ? S : [S], t, n, r, s, o, a, c, f), i.base = t.__e, t.__h = null, i.__h.length && a.push(i), g && (i.__E = i.__ = null), i.__e = !1;
      } else
        o == null && t.__v === n.__v ? (t.__k = n.__k, t.__e = n.__e) : t.__e = Op(n.__e, t, n, r, s, o, a, f);
    (p = ce.diffed) && p(t);
  } catch (x) {
    t.__v = null, (f || o != null) && (t.__e = c, t.__h = !!f, o[o.indexOf(c)] = null), ce.__e(x, t, n);
  }
}
function Cp(e, t) {
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
function Op(e, t, n, r, s, o, a, c) {
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
    if (o = o && Ts.call(e.childNodes), p = (d = n.props || Bc).dangerouslySetInnerHTML, i = u.dangerouslySetInnerHTML, !c) {
      if (o != null)
        for (d = {}, _ = 0; _ < e.attributes.length; _++)
          d[e.attributes[_].name] = e.attributes[_].value;
      (i || p) && (i && (p && i.__html == p.__html || i.__html === e.innerHTML) || (e.innerHTML = i && i.__html || ""));
    }
    if (Ep(e, u, d, s, c), i)
      t.__k = [];
    else if (_ = t.props.children, zc(e, Array.isArray(_) ? _ : [_], t, n, r, s && l !== "foreignObject", o, a, o ? o[0] : n.__k && Pr(n, 0), c), o != null)
      for (_ = o.length; _--; )
        o[_] != null && Uc(o[_]);
    c || ("value" in u && (_ = u.value) !== void 0 && (_ !== e.value || l === "progress" && !_ || l === "option" && _ !== d.value) && Go(e, "value", _, d.value, !1), "checked" in u && (_ = u.checked) !== void 0 && _ !== e.checked && Go(e, "checked", _, d.checked, !1));
  }
  return e;
}
function Gc(e, t, n) {
  try {
    typeof e == "function" ? e(t) : e.current = t;
  } catch (r) {
    ce.__e(r, n);
  }
}
function Xc(e, t, n) {
  var r, s;
  if (ce.unmount && ce.unmount(e), (r = e.ref) && (r.current && r.current !== e.__e || Gc(r, null, t)), (r = e.__c) != null) {
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
      r[s] && Xc(r[s], t, n || typeof e.type != "function");
  n || e.__e == null || Uc(e.__e), e.__ = e.__e = e.__d = void 0;
}
function Mp(e, t, n) {
  return this.constructor(e, n);
}
Ts = Ic.slice, ce = { __e: function(e, t, n, r) {
  for (var s, o, a; t = t.__; )
    if ((s = t.__c) && !s.__)
      try {
        if ((o = s.constructor) && o.getDerivedStateFromError != null && (s.setState(o.getDerivedStateFromError(e)), a = s.__d), s.componentDidCatch != null && (s.componentDidCatch(e, r || {}), a = s.__d), a)
          return s.__E = s;
      } catch (c) {
        e = c;
      }
  throw e;
} }, Wc = 0, jc = function(e) {
  return e != null && e.constructor === void 0;
}, fr.prototype.setState = function(e, t) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = Bt({}, this.state), typeof e == "function" && (e = e(Bt({}, n), this.props)), e && Bt(n, e), e != null && this.__v && (t && this._sb.push(t), La(this));
}, fr.prototype.forceUpdate = function(e) {
  this.__v && (this.__e = !0, e && this.__h.push(e), La(this));
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
const I = (...e) => zi(...e).reduce((t, [n, r]) => (r && t.push(n), t), []).join(" ");
function Ap({
  component: e = "div",
  className: t,
  children: n,
  style: r,
  attrs: s
}) {
  return ye(e, {
    className: I(t),
    style: r,
    ...s
  }, n);
}
function Kc({
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
    className: I(t, { disabled: o, active: a }),
    title: d,
    [e === "a" ? "href" : "data-url"]: s,
    [e === "a" ? "target" : "data-target"]: p,
    style: u,
    onClick: l,
    ...r
  }, ..._);
}
function Dp({
  component: e = "div",
  className: t,
  text: n,
  attrs: r,
  children: s,
  style: o,
  onClick: a
}) {
  return ye(e, {
    className: I(t),
    style: o,
    onClick: a,
    ...r
  }, n, typeof s == "function" ? s() : s);
}
function Tp({
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
    className: I(t),
    style: { width: r, height: r, flex: s, ...n },
    onClick: a,
    ...o
  }, c);
}
function Np(e) {
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
      var k;
      m != null && (typeof m == "object" && !Oc(m) && ("html" in m || "__html" in m || "className" in m || "style" in m || "attrs" in m || "children" in m) ? m.html ? l.push(
        /* @__PURE__ */ Ui("div", {
          className: I(m.className),
          style: m.style,
          dangerouslySetInnerHTML: { __html: m.html },
          ...(k = m.attrs) != null ? k : {}
        })
      ) : m.__html ? _.push(m.__html) : (m.style && Object.assign(u, m.style), m.className && d.push(m.className), m.children && l.push(m.children), m.attrs && Object.assign(i, m.attrs)) : l.push(m));
    });
  }), _.length && Object.assign(i, { dangerouslySetInnerHTML: { __html: _ } }), [{
    className: I(d),
    style: u,
    ...i
  }, l];
}
function fs({
  tag: e = "div",
  ...t
}) {
  const [n, r] = Np(t);
  return Ui(e, n, ...r);
}
function Lp(e) {
  return /* @__PURE__ */ ye(fs, {
    ...e
  });
}
function Jc({
  component: e = "div",
  className: t,
  children: n,
  style: r,
  attrs: s
}) {
  return ye(e, {
    className: I(t),
    style: r,
    ...s
  }, n);
}
const Ei = class extends fr {
  constructor() {
    super(...arguments);
    A(this, "ref", Sp());
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
    return o && Object.assign(c, o[r.type || "item"]), (a || r.onClick) && (c.onClick = this.handleItemClick.bind(this, c, s, r.onClick)), c.className = I(c.className), c;
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
        if (jc(h))
          return h;
        typeof h == "object" && Object.assign(o, h);
      }
    }
    const { type: c = "item", component: f, key: p = s, rootAttrs: i, rootClass: d, rootStyle: u, rootChildren: l, ..._ } = o, g = !f || typeof f == "string" ? this.constructor.ItemComponents && this.constructor.ItemComponents[c] || Ei.ItemComponents[c] : f;
    return Object.assign(_, {
      type: c,
      component: typeof f == "string" ? f : void 0
    }), this.renderTypedItem(g, {
      className: I(d),
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
      className: I(`${this.name}-${s.type}`, a),
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
      class: I(this.name, a),
      ..._,
      ref: this.ref
    }, c && c.map(this.renderItem.bind(this, n)), f);
  }
};
let wt = Ei;
A(wt, "ItemComponents", {
  divider: Ap,
  item: Kc,
  heading: Dp,
  space: Tp,
  custom: Lp,
  basic: Jc
}), A(wt, "ROOT_TAG", "menu"), A(wt, "NAME", "action-menu");
class Wa extends Je {
}
A(Wa, "NAME", "actionmenu"), A(Wa, "Component", wt);
function ja({
  ...e
}) {
  return /* @__PURE__ */ ye(Kc, {
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
    H(this, et, n.nestedShow === void 0), w(this, et) && (this.state = { nestedShow: (r = n.defaultNestedShow) != null ? r : {} });
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
    ], o.component = ja), this.nestedTrigger === "hover")
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
eo = new WeakMap(), et = new WeakMap(), xn = new WeakMap(), A(Ls, "ItemComponents", {
  item: ja
});
class Ba extends Je {
}
A(Ba, "NAME", "actionmenunested"), A(Ba, "Component", Ls);
var Ps, fe, Zc, ur, Ia, Qc = {}, ef = [], Pp = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function It(e, t) {
  for (var n in t)
    e[n] = t[n];
  return e;
}
function tf(e) {
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
  return Eo(e, a, r, s, null);
}
function Eo(e, t, n, r, s) {
  var o = { type: e, props: t, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: s == null ? ++Zc : s };
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
function nf(e) {
  var t, n;
  if ((e = e.__) != null && e.__c != null) {
    for (e.__e = e.__c.base = null, t = 0; t < e.__k.length; t++)
      if ((n = e.__k[t]) != null && n.__e != null) {
        e.__e = e.__c.base = n.__e;
        break;
      }
    return nf(e);
  }
}
function Ua(e) {
  (!e.__d && (e.__d = !0) && ur.push(e) && !Xo.__r++ || Ia !== fe.debounceRendering) && ((Ia = fe.debounceRendering) || setTimeout)(Xo);
}
function Xo() {
  for (var e; Xo.__r = ur.length; )
    e = ur.sort(function(t, n) {
      return t.__v.__b - n.__v.__b;
    }), ur = [], e.some(function(t) {
      var n, r, s, o, a, c;
      t.__d && (a = (o = (n = t).__v).__e, (c = n.__P) && (r = [], (s = It({}, o)).__v = o.__v + 1, af(c, o, s, n.__n, c.ownerSVGElement !== void 0, o.__h != null ? [a] : null, r, a == null ? Rr(o) : a, o.__h), Hp(r, o), o.__e != a && nf(o)));
    });
}
function rf(e, t, n, r, s, o, a, c, f, p) {
  var i, d, u, l, _, g, h, v = r && r.__k || ef, m = v.length;
  for (n.__k = [], i = 0; i < t.length; i++)
    if ((l = n.__k[i] = (l = t[i]) == null || typeof l == "boolean" ? null : typeof l == "string" || typeof l == "number" || typeof l == "bigint" ? Eo(null, l, null, null, l) : Array.isArray(l) ? Eo(Rs, { children: l }, null, null, null) : l.__b > 0 ? Eo(l.type, l.props, l.key, l.ref ? l.ref : null, l.__v) : l) != null) {
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
      af(e, l, u = u || Qc, s, o, a, c, f, p), _ = l.__e, (d = l.ref) && u.ref != d && (h || (h = []), u.ref && h.push(u.ref, null, l), h.push(d, l.__c || _, l)), _ != null ? (g == null && (g = _), typeof l.type == "function" && l.__k === u.__k ? l.__d = f = of(l, f, e) : f = sf(e, l, u, v, _, f), typeof n.type == "function" && (n.__d = f)) : f && u.__e == f && f.parentNode != e && (f = Rr(u));
    }
  for (n.__e = g, i = m; i--; )
    v[i] != null && cf(v[i], v[i]);
  if (h)
    for (i = 0; i < h.length; i++)
      lf(h[i], h[++i], h[++i]);
}
function of(e, t, n) {
  for (var r, s = e.__k, o = 0; s && o < s.length; o++)
    (r = s[o]) && (r.__ = e, t = typeof r.type == "function" ? of(r, t, n) : sf(n, r, r, s, r.__e, t));
  return t;
}
function sf(e, t, n, r, s, o) {
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
function Rp(e, t, n, r, s) {
  var o;
  for (o in n)
    o === "children" || o === "key" || o in t || Ko(e, o, null, n[o], r);
  for (o in t)
    s && typeof t[o] != "function" || o === "children" || o === "key" || o === "value" || o === "checked" || n[o] === t[o] || Ko(e, o, t[o], n[o], r);
}
function Fa(e, t, n) {
  t[0] === "-" ? e.setProperty(t, n) : e[t] = n == null ? "" : typeof n != "number" || Pp.test(t) ? n : n + "px";
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
            n && t in n || Fa(e.style, t, "");
        if (n)
          for (t in n)
            r && n[t] === r[t] || Fa(e.style, t, n[t]);
      }
    else if (t[0] === "o" && t[1] === "n")
      o = t !== (t = t.replace(/Capture$/, "")), t = t.toLowerCase() in e ? t.toLowerCase().slice(2) : t.slice(2), e.l || (e.l = {}), e.l[t + o] = n, n ? r || e.addEventListener(t, o ? Ya : za, o) : e.removeEventListener(t, o ? Ya : za, o);
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
function za(e) {
  this.l[e.type + !1](fe.event ? fe.event(e) : e);
}
function Ya(e) {
  this.l[e.type + !0](fe.event ? fe.event(e) : e);
}
function af(e, t, n, r, s, o, a, c, f) {
  var p, i, d, u, l, _, g, h, v, m, k, b, E, $, S, y = t.type;
  if (t.constructor !== void 0)
    return null;
  n.__h != null && (f = n.__h, c = t.__e = n.__e, t.__h = null, o = [c]), (p = fe.__b) && p(t);
  try {
    e:
      if (typeof y == "function") {
        if (h = t.props, v = (p = y.contextType) && r[p.__c], m = p ? v ? v.props.value : p.__ : r, n.__c ? g = (i = t.__c = n.__c).__ = i.__E : ("prototype" in y && y.prototype.render ? t.__c = i = new y(h, m) : (t.__c = i = new _r(h, m), i.constructor = y, i.render = jp), v && v.sub(i), i.props = h, i.state || (i.state = {}), i.context = m, i.__n = r, d = i.__d = !0, i.__h = [], i._sb = []), i.__s == null && (i.__s = i.state), y.getDerivedStateFromProps != null && (i.__s == i.state && (i.__s = It({}, i.__s)), It(i.__s, y.getDerivedStateFromProps(h, i.__s))), u = i.props, l = i.state, d)
          y.getDerivedStateFromProps == null && i.componentWillMount != null && i.componentWillMount(), i.componentDidMount != null && i.__h.push(i.componentDidMount);
        else {
          if (y.getDerivedStateFromProps == null && h !== u && i.componentWillReceiveProps != null && i.componentWillReceiveProps(h, m), !i.__e && i.shouldComponentUpdate != null && i.shouldComponentUpdate(h, i.__s, m) === !1 || t.__v === n.__v) {
            for (i.props = h, i.state = i.__s, t.__v !== n.__v && (i.__d = !1), i.__v = t, t.__e = n.__e, t.__k = n.__k, t.__k.forEach(function(x) {
              x && (x.__ = t);
            }), k = 0; k < i._sb.length; k++)
              i.__h.push(i._sb[k]);
            i._sb = [], i.__h.length && a.push(i);
            break e;
          }
          i.componentWillUpdate != null && i.componentWillUpdate(h, i.__s, m), i.componentDidUpdate != null && i.__h.push(function() {
            i.componentDidUpdate(u, l, _);
          });
        }
        if (i.context = m, i.props = h, i.__v = t, i.__P = e, b = fe.__r, E = 0, "prototype" in y && y.prototype.render) {
          for (i.state = i.__s, i.__d = !1, b && b(t), p = i.render(i.props, i.state, i.context), $ = 0; $ < i._sb.length; $++)
            i.__h.push(i._sb[$]);
          i._sb = [];
        } else
          do
            i.__d = !1, b && b(t), p = i.render(i.props, i.state, i.context), i.state = i.__s;
          while (i.__d && ++E < 25);
        i.state = i.__s, i.getChildContext != null && (r = It(It({}, r), i.getChildContext())), d || i.getSnapshotBeforeUpdate == null || (_ = i.getSnapshotBeforeUpdate(u, l)), S = p != null && p.type === Rs && p.key == null ? p.props.children : p, rf(e, Array.isArray(S) ? S : [S], t, n, r, s, o, a, c, f), i.base = t.__e, t.__h = null, i.__h.length && a.push(i), g && (i.__E = i.__ = null), i.__e = !1;
      } else
        o == null && t.__v === n.__v ? (t.__k = n.__k, t.__e = n.__e) : t.__e = Wp(n.__e, t, n, r, s, o, a, f);
    (p = fe.diffed) && p(t);
  } catch (x) {
    t.__v = null, (f || o != null) && (t.__e = c, t.__h = !!f, o[o.indexOf(c)] = null), fe.__e(x, t, n);
  }
}
function Hp(e, t) {
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
function Wp(e, t, n, r, s, o, a, c) {
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
    if (o = o && Ps.call(e.childNodes), p = (d = n.props || Qc).dangerouslySetInnerHTML, i = u.dangerouslySetInnerHTML, !c) {
      if (o != null)
        for (d = {}, _ = 0; _ < e.attributes.length; _++)
          d[e.attributes[_].name] = e.attributes[_].value;
      (i || p) && (i && (p && i.__html == p.__html || i.__html === e.innerHTML) || (e.innerHTML = i && i.__html || ""));
    }
    if (Rp(e, u, d, s, c), i)
      t.__k = [];
    else if (_ = t.props.children, rf(e, Array.isArray(_) ? _ : [_], t, n, r, s && l !== "foreignObject", o, a, o ? o[0] : n.__k && Rr(n, 0), c), o != null)
      for (_ = o.length; _--; )
        o[_] != null && tf(o[_]);
    c || ("value" in u && (_ = u.value) !== void 0 && (_ !== e.value || l === "progress" && !_ || l === "option" && _ !== d.value) && Ko(e, "value", _, d.value, !1), "checked" in u && (_ = u.checked) !== void 0 && _ !== e.checked && Ko(e, "checked", _, d.checked, !1));
  }
  return e;
}
function lf(e, t, n) {
  try {
    typeof e == "function" ? e(t) : e.current = t;
  } catch (r) {
    fe.__e(r, n);
  }
}
function cf(e, t, n) {
  var r, s;
  if (fe.unmount && fe.unmount(e), (r = e.ref) && (r.current && r.current !== e.__e || lf(r, null, t)), (r = e.__c) != null) {
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
      r[s] && cf(r[s], t, n || typeof e.type != "function");
  n || e.__e == null || tf(e.__e), e.__ = e.__e = e.__d = void 0;
}
function jp(e, t, n) {
  return this.constructor(e, n);
}
Ps = ef.slice, fe = { __e: function(e, t, n, r) {
  for (var s, o, a; t = t.__; )
    if ((s = t.__c) && !s.__)
      try {
        if ((o = s.constructor) && o.getDerivedStateFromError != null && (s.setState(o.getDerivedStateFromError(e)), a = s.__d), s.componentDidCatch != null && (s.componentDidCatch(e, r || {}), a = s.__d), a)
          return s.__E = s;
      } catch (c) {
        e = c;
      }
  throw e;
} }, Zc = 0, _r.prototype.setState = function(e, t) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = It({}, this.state), typeof e == "function" && (e = e(It({}, n), this.props)), e && It(n, e), e != null && this.__v && (t && this._sb.push(t), Ua(this));
}, _r.prototype.forceUpdate = function(e) {
  this.__v && (this.__e = !0, e && this.__h.push(e), Ua(this));
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
      ...k
    } = this.props, b = t || (a ? "a" : "button"), E = _ == null || typeof _ == "string" && !_.length || i && !u, $ = E && !l && !g && !o && !i;
    return bn(
      b,
      {
        className: I("btn", n, s, {
          "btn-caret": $,
          disabled: f || i,
          active: p,
          loading: i,
          square: v === void 0 ? !$ && !o && E : v
        }, r ? `size-${r}` : ""),
        title: m,
        [b === "a" ? "href" : "data-url"]: a,
        [b === "a" ? "target" : "data-target"]: c,
        type: b === "button" ? "button" : void 0,
        ...k
      },
      i ? /* @__PURE__ */ bn("i", {
        class: `spin icon ${d || "icon-spinner-snake"}`
      }) : typeof l == "string" ? /* @__PURE__ */ bn("i", {
        class: `icon ${l}`
      }) : l,
      E ? null : /* @__PURE__ */ bn("span", {
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
class Va extends Je {
}
A(Va, "NAME", "button"), A(Va, "Component", en);
var ff, us, uf, Bp = [];
function Ip(e, t, n) {
  var r, s, o, a = {};
  for (o in t)
    o == "key" ? r = t[o] : o == "ref" ? s = t[o] : a[o] = t[o];
  if (arguments.length > 2 && (a.children = arguments.length > 3 ? ff.call(arguments, 2) : n), typeof e == "function" && e.defaultProps != null)
    for (o in e.defaultProps)
      a[o] === void 0 && (a[o] = e.defaultProps[o]);
  return Up(e, a, r, s, null);
}
function Up(e, t, n, r, s) {
  var o = { type: e, props: t, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: s == null ? ++uf : s };
  return s == null && us.vnode != null && us.vnode(o), o;
}
ff = Bp.slice, us = { __e: function(e, t, n, r) {
  for (var s, o, a; t = t.__; )
    if ((s = t.__c) && !s.__)
      try {
        if ((o = s.constructor) && o.getDerivedStateFromError != null && (s.setState(o.getDerivedStateFromError(e)), a = s.__d), s.componentDidCatch != null && (s.componentDidCatch(e, r || {}), a = s.__d), a)
          return s.__E = s;
      } catch (c) {
        e = c;
      }
  throw e;
} }, uf = 0;
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
    return n === void 0 && (n = t.items.some((r) => r.icon)), t.className = I(t.className, this.menuName, {
      "has-icons": n,
      "has-nested-items": t.items.some((r) => this.isNestedItem(r))
    }), t;
  }
  renderToggleIcon(t) {
    return /* @__PURE__ */ Ip("span", {
      class: `${this.name}-toggle-icon caret-${t ? "down" : "right"}`
    });
  }
}
A(Hs, "NAME", "menu");
class qa extends Je {
}
A(qa, "NAME", "menu"), A(qa, "Component", Hs);
var Yi, oe, _f, pr, Ga, Jo = {}, pf = [], Fp = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function Ut(e, t) {
  for (var n in t)
    e[n] = t[n];
  return e;
}
function df(e) {
  var t = e.parentNode;
  t && t.removeChild(e);
}
function Jt(e, t, n) {
  var r, s, o, a = {};
  for (o in t)
    o == "key" ? r = t[o] : o == "ref" ? s = t[o] : a[o] = t[o];
  if (arguments.length > 2 && (a.children = arguments.length > 3 ? Yi.call(arguments, 2) : n), typeof e == "function" && e.defaultProps != null)
    for (o in e.defaultProps)
      a[o] === void 0 && (a[o] = e.defaultProps[o]);
  return Co(e, a, r, s, null);
}
function Co(e, t, n, r, s) {
  var o = { type: e, props: t, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: s == null ? ++_f : s };
  return s == null && oe.vnode != null && oe.vnode(o), o;
}
function Vi(e) {
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
function hf(e) {
  var t, n;
  if ((e = e.__) != null && e.__c != null) {
    for (e.__e = e.__c.base = null, t = 0; t < e.__k.length; t++)
      if ((n = e.__k[t]) != null && n.__e != null) {
        e.__e = e.__c.base = n.__e;
        break;
      }
    return hf(e);
  }
}
function Xa(e) {
  (!e.__d && (e.__d = !0) && pr.push(e) && !Zo.__r++ || Ga !== oe.debounceRendering) && ((Ga = oe.debounceRendering) || setTimeout)(Zo);
}
function Zo() {
  for (var e; Zo.__r = pr.length; )
    e = pr.sort(function(t, n) {
      return t.__v.__b - n.__v.__b;
    }), pr = [], e.some(function(t) {
      var n, r, s, o, a, c;
      t.__d && (a = (o = (n = t).__v).__e, (c = n.__P) && (r = [], (s = Ut({}, o)).__v = o.__v + 1, Ws(c, o, s, n.__n, c.ownerSVGElement !== void 0, o.__h != null ? [a] : null, r, a == null ? Hr(o) : a, o.__h), yf(r, o), o.__e != a && hf(o)));
    });
}
function vf(e, t, n, r, s, o, a, c, f, p) {
  var i, d, u, l, _, g, h, v = r && r.__k || pf, m = v.length;
  for (n.__k = [], i = 0; i < t.length; i++)
    if ((l = n.__k[i] = (l = t[i]) == null || typeof l == "boolean" ? null : typeof l == "string" || typeof l == "number" || typeof l == "bigint" ? Co(null, l, null, null, l) : Array.isArray(l) ? Co(Vi, { children: l }, null, null, null) : l.__b > 0 ? Co(l.type, l.props, l.key, l.ref ? l.ref : null, l.__v) : l) != null) {
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
      Ws(e, l, u = u || Jo, s, o, a, c, f, p), _ = l.__e, (d = l.ref) && u.ref != d && (h || (h = []), u.ref && h.push(u.ref, null, l), h.push(d, l.__c || _, l)), _ != null ? (g == null && (g = _), typeof l.type == "function" && l.__k === u.__k ? l.__d = f = mf(l, f, e) : f = gf(e, l, u, v, _, f), typeof n.type == "function" && (n.__d = f)) : f && u.__e == f && f.parentNode != e && (f = Hr(u));
    }
  for (n.__e = g, i = m; i--; )
    v[i] != null && wf(v[i], v[i]);
  if (h)
    for (i = 0; i < h.length; i++)
      bf(h[i], h[++i], h[++i]);
}
function mf(e, t, n) {
  for (var r, s = e.__k, o = 0; s && o < s.length; o++)
    (r = s[o]) && (r.__ = e, t = typeof r.type == "function" ? mf(r, t, n) : gf(n, r, r, s, r.__e, t));
  return t;
}
function gf(e, t, n, r, s, o) {
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
function zp(e, t, n, r, s) {
  var o;
  for (o in n)
    o === "children" || o === "key" || o in t || Qo(e, o, null, n[o], r);
  for (o in t)
    s && typeof t[o] != "function" || o === "children" || o === "key" || o === "value" || o === "checked" || n[o] === t[o] || Qo(e, o, t[o], n[o], r);
}
function Ka(e, t, n) {
  t[0] === "-" ? e.setProperty(t, n) : e[t] = n == null ? "" : typeof n != "number" || Fp.test(t) ? n : n + "px";
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
            n && t in n || Ka(e.style, t, "");
        if (n)
          for (t in n)
            r && n[t] === r[t] || Ka(e.style, t, n[t]);
      }
    else if (t[0] === "o" && t[1] === "n")
      o = t !== (t = t.replace(/Capture$/, "")), t = t.toLowerCase() in e ? t.toLowerCase().slice(2) : t.slice(2), e.l || (e.l = {}), e.l[t + o] = n, n ? r || e.addEventListener(t, o ? Za : Ja, o) : e.removeEventListener(t, o ? Za : Ja, o);
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
function Ja(e) {
  this.l[e.type + !1](oe.event ? oe.event(e) : e);
}
function Za(e) {
  this.l[e.type + !0](oe.event ? oe.event(e) : e);
}
function Ws(e, t, n, r, s, o, a, c, f) {
  var p, i, d, u, l, _, g, h, v, m, k, b, E, $, S, y = t.type;
  if (t.constructor !== void 0)
    return null;
  n.__h != null && (f = n.__h, c = t.__e = n.__e, t.__h = null, o = [c]), (p = oe.__b) && p(t);
  try {
    e:
      if (typeof y == "function") {
        if (h = t.props, v = (p = y.contextType) && r[p.__c], m = p ? v ? v.props.value : p.__ : r, n.__c ? g = (i = t.__c = n.__c).__ = i.__E : ("prototype" in y && y.prototype.render ? t.__c = i = new y(h, m) : (t.__c = i = new $n(h, m), i.constructor = y, i.render = Vp), v && v.sub(i), i.props = h, i.state || (i.state = {}), i.context = m, i.__n = r, d = i.__d = !0, i.__h = [], i._sb = []), i.__s == null && (i.__s = i.state), y.getDerivedStateFromProps != null && (i.__s == i.state && (i.__s = Ut({}, i.__s)), Ut(i.__s, y.getDerivedStateFromProps(h, i.__s))), u = i.props, l = i.state, d)
          y.getDerivedStateFromProps == null && i.componentWillMount != null && i.componentWillMount(), i.componentDidMount != null && i.__h.push(i.componentDidMount);
        else {
          if (y.getDerivedStateFromProps == null && h !== u && i.componentWillReceiveProps != null && i.componentWillReceiveProps(h, m), !i.__e && i.shouldComponentUpdate != null && i.shouldComponentUpdate(h, i.__s, m) === !1 || t.__v === n.__v) {
            for (i.props = h, i.state = i.__s, t.__v !== n.__v && (i.__d = !1), i.__v = t, t.__e = n.__e, t.__k = n.__k, t.__k.forEach(function(x) {
              x && (x.__ = t);
            }), k = 0; k < i._sb.length; k++)
              i.__h.push(i._sb[k]);
            i._sb = [], i.__h.length && a.push(i);
            break e;
          }
          i.componentWillUpdate != null && i.componentWillUpdate(h, i.__s, m), i.componentDidUpdate != null && i.__h.push(function() {
            i.componentDidUpdate(u, l, _);
          });
        }
        if (i.context = m, i.props = h, i.__v = t, i.__P = e, b = oe.__r, E = 0, "prototype" in y && y.prototype.render) {
          for (i.state = i.__s, i.__d = !1, b && b(t), p = i.render(i.props, i.state, i.context), $ = 0; $ < i._sb.length; $++)
            i.__h.push(i._sb[$]);
          i._sb = [];
        } else
          do
            i.__d = !1, b && b(t), p = i.render(i.props, i.state, i.context), i.state = i.__s;
          while (i.__d && ++E < 25);
        i.state = i.__s, i.getChildContext != null && (r = Ut(Ut({}, r), i.getChildContext())), d || i.getSnapshotBeforeUpdate == null || (_ = i.getSnapshotBeforeUpdate(u, l)), S = p != null && p.type === Vi && p.key == null ? p.props.children : p, vf(e, Array.isArray(S) ? S : [S], t, n, r, s, o, a, c, f), i.base = t.__e, t.__h = null, i.__h.length && a.push(i), g && (i.__E = i.__ = null), i.__e = !1;
      } else
        o == null && t.__v === n.__v ? (t.__k = n.__k, t.__e = n.__e) : t.__e = Yp(n.__e, t, n, r, s, o, a, f);
    (p = oe.diffed) && p(t);
  } catch (x) {
    t.__v = null, (f || o != null) && (t.__e = c, t.__h = !!f, o[o.indexOf(c)] = null), oe.__e(x, t, n);
  }
}
function yf(e, t) {
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
function Yp(e, t, n, r, s, o, a, c) {
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
    if (o = o && Yi.call(e.childNodes), p = (d = n.props || Jo).dangerouslySetInnerHTML, i = u.dangerouslySetInnerHTML, !c) {
      if (o != null)
        for (d = {}, _ = 0; _ < e.attributes.length; _++)
          d[e.attributes[_].name] = e.attributes[_].value;
      (i || p) && (i && (p && i.__html == p.__html || i.__html === e.innerHTML) || (e.innerHTML = i && i.__html || ""));
    }
    if (zp(e, u, d, s, c), i)
      t.__k = [];
    else if (_ = t.props.children, vf(e, Array.isArray(_) ? _ : [_], t, n, r, s && l !== "foreignObject", o, a, o ? o[0] : n.__k && Hr(n, 0), c), o != null)
      for (_ = o.length; _--; )
        o[_] != null && df(o[_]);
    c || ("value" in u && (_ = u.value) !== void 0 && (_ !== e.value || l === "progress" && !_ || l === "option" && _ !== d.value) && Qo(e, "value", _, d.value, !1), "checked" in u && (_ = u.checked) !== void 0 && _ !== e.checked && Qo(e, "checked", _, d.checked, !1));
  }
  return e;
}
function bf(e, t, n) {
  try {
    typeof e == "function" ? e(t) : e.current = t;
  } catch (r) {
    oe.__e(r, n);
  }
}
function wf(e, t, n) {
  var r, s;
  if (oe.unmount && oe.unmount(e), (r = e.ref) && (r.current && r.current !== e.__e || bf(r, null, t)), (r = e.__c) != null) {
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
      r[s] && wf(r[s], t, n || typeof e.type != "function");
  n || e.__e == null || df(e.__e), e.__ = e.__e = e.__d = void 0;
}
function Vp(e, t, n) {
  return this.constructor(e, n);
}
function Qa(e, t, n) {
  var r, s, o;
  oe.__ && oe.__(e, t), s = (r = typeof n == "function") ? null : n && n.__k || t.__k, o = [], Ws(t, e = (!r && n || t).__k = Jt(Vi, null, [e]), s || Jo, Jo, t.ownerSVGElement !== void 0, !r && n ? [n] : s ? null : t.firstChild ? Yi.call(t.childNodes) : null, o, !r && n ? n : s ? s.__e : t.firstChild, r), yf(o, e);
}
Yi = pf.slice, oe = { __e: function(e, t, n, r) {
  for (var s, o, a; t = t.__; )
    if ((s = t.__c) && !s.__)
      try {
        if ((o = s.constructor) && o.getDerivedStateFromError != null && (s.setState(o.getDerivedStateFromError(e)), a = s.__d), s.componentDidCatch != null && (s.componentDidCatch(e, r || {}), a = s.__d), a)
          return s.__E = s;
      } catch (c) {
        e = c;
      }
  throw e;
} }, _f = 0, $n.prototype.setState = function(e, t) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = Ut({}, this.state), typeof e == "function" && (e = e(Ut({}, n), this.props)), e && Ut(n, e), e != null && this.__v && (t && this._sb.push(t), Xa(this));
}, $n.prototype.forceUpdate = function(e) {
  this.__v && (this.__e = !0, e && this.__h.push(e), Xa(this));
}, $n.prototype.render = Vi, pr = [], Zo.__r = 0;
var js, ue, $f, kf, dr, el, xf = {}, Sf = [], qp = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function Ft(e, t) {
  for (var n in t)
    e[n] = t[n];
  return e;
}
function Ef(e) {
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
  var o = { type: e, props: t, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: s == null ? ++$f : s };
  return s == null && ue.vnode != null && ue.vnode(o), o;
}
function Bs(e) {
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
function Cf(e) {
  var t, n;
  if ((e = e.__) != null && e.__c != null) {
    for (e.__e = e.__c.base = null, t = 0; t < e.__k.length; t++)
      if ((n = e.__k[t]) != null && n.__e != null) {
        e.__e = e.__c.base = n.__e;
        break;
      }
    return Cf(e);
  }
}
function tl(e) {
  (!e.__d && (e.__d = !0) && dr.push(e) && !ei.__r++ || el !== ue.debounceRendering) && ((el = ue.debounceRendering) || setTimeout)(ei);
}
function ei() {
  for (var e; ei.__r = dr.length; )
    e = dr.sort(function(t, n) {
      return t.__v.__b - n.__v.__b;
    }), dr = [], e.some(function(t) {
      var n, r, s, o, a, c;
      t.__d && (a = (o = (n = t).__v).__e, (c = n.__P) && (r = [], (s = Ft({}, o)).__v = o.__v + 1, Df(c, o, s, n.__n, c.ownerSVGElement !== void 0, o.__h != null ? [a] : null, r, a == null ? Wr(o) : a, o.__h), Xp(r, o), o.__e != a && Cf(o)));
    });
}
function Of(e, t, n, r, s, o, a, c, f, p) {
  var i, d, u, l, _, g, h, v = r && r.__k || Sf, m = v.length;
  for (n.__k = [], i = 0; i < t.length; i++)
    if ((l = n.__k[i] = (l = t[i]) == null || typeof l == "boolean" ? null : typeof l == "string" || typeof l == "number" || typeof l == "bigint" ? Oo(null, l, null, null, l) : Array.isArray(l) ? Oo(Bs, { children: l }, null, null, null) : l.__b > 0 ? Oo(l.type, l.props, l.key, l.ref ? l.ref : null, l.__v) : l) != null) {
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
      Df(e, l, u = u || xf, s, o, a, c, f, p), _ = l.__e, (d = l.ref) && u.ref != d && (h || (h = []), u.ref && h.push(u.ref, null, l), h.push(d, l.__c || _, l)), _ != null ? (g == null && (g = _), typeof l.type == "function" && l.__k === u.__k ? l.__d = f = Mf(l, f, e) : f = Af(e, l, u, v, _, f), typeof n.type == "function" && (n.__d = f)) : f && u.__e == f && f.parentNode != e && (f = Wr(u));
    }
  for (n.__e = g, i = m; i--; )
    v[i] != null && Nf(v[i], v[i]);
  if (h)
    for (i = 0; i < h.length; i++)
      Tf(h[i], h[++i], h[++i]);
}
function Mf(e, t, n) {
  for (var r, s = e.__k, o = 0; s && o < s.length; o++)
    (r = s[o]) && (r.__ = e, t = typeof r.type == "function" ? Mf(r, t, n) : Af(n, r, r, s, r.__e, t));
  return t;
}
function Af(e, t, n, r, s, o) {
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
function Gp(e, t, n, r, s) {
  var o;
  for (o in n)
    o === "children" || o === "key" || o in t || ti(e, o, null, n[o], r);
  for (o in t)
    s && typeof t[o] != "function" || o === "children" || o === "key" || o === "value" || o === "checked" || n[o] === t[o] || ti(e, o, t[o], n[o], r);
}
function nl(e, t, n) {
  t[0] === "-" ? e.setProperty(t, n) : e[t] = n == null ? "" : typeof n != "number" || qp.test(t) ? n : n + "px";
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
            n && t in n || nl(e.style, t, "");
        if (n)
          for (t in n)
            r && n[t] === r[t] || nl(e.style, t, n[t]);
      }
    else if (t[0] === "o" && t[1] === "n")
      o = t !== (t = t.replace(/Capture$/, "")), t = t.toLowerCase() in e ? t.toLowerCase().slice(2) : t.slice(2), e.l || (e.l = {}), e.l[t + o] = n, n ? r || e.addEventListener(t, o ? ol : rl, o) : e.removeEventListener(t, o ? ol : rl, o);
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
function rl(e) {
  this.l[e.type + !1](ue.event ? ue.event(e) : e);
}
function ol(e) {
  this.l[e.type + !0](ue.event ? ue.event(e) : e);
}
function Df(e, t, n, r, s, o, a, c, f) {
  var p, i, d, u, l, _, g, h, v, m, k, b, E, $, S, y = t.type;
  if (t.constructor !== void 0)
    return null;
  n.__h != null && (f = n.__h, c = t.__e = n.__e, t.__h = null, o = [c]), (p = ue.__b) && p(t);
  try {
    e:
      if (typeof y == "function") {
        if (h = t.props, v = (p = y.contextType) && r[p.__c], m = p ? v ? v.props.value : p.__ : r, n.__c ? g = (i = t.__c = n.__c).__ = i.__E : ("prototype" in y && y.prototype.render ? t.__c = i = new y(h, m) : (t.__c = i = new hr(h, m), i.constructor = y, i.render = Jp), v && v.sub(i), i.props = h, i.state || (i.state = {}), i.context = m, i.__n = r, d = i.__d = !0, i.__h = [], i._sb = []), i.__s == null && (i.__s = i.state), y.getDerivedStateFromProps != null && (i.__s == i.state && (i.__s = Ft({}, i.__s)), Ft(i.__s, y.getDerivedStateFromProps(h, i.__s))), u = i.props, l = i.state, d)
          y.getDerivedStateFromProps == null && i.componentWillMount != null && i.componentWillMount(), i.componentDidMount != null && i.__h.push(i.componentDidMount);
        else {
          if (y.getDerivedStateFromProps == null && h !== u && i.componentWillReceiveProps != null && i.componentWillReceiveProps(h, m), !i.__e && i.shouldComponentUpdate != null && i.shouldComponentUpdate(h, i.__s, m) === !1 || t.__v === n.__v) {
            for (i.props = h, i.state = i.__s, t.__v !== n.__v && (i.__d = !1), i.__v = t, t.__e = n.__e, t.__k = n.__k, t.__k.forEach(function(x) {
              x && (x.__ = t);
            }), k = 0; k < i._sb.length; k++)
              i.__h.push(i._sb[k]);
            i._sb = [], i.__h.length && a.push(i);
            break e;
          }
          i.componentWillUpdate != null && i.componentWillUpdate(h, i.__s, m), i.componentDidUpdate != null && i.__h.push(function() {
            i.componentDidUpdate(u, l, _);
          });
        }
        if (i.context = m, i.props = h, i.__v = t, i.__P = e, b = ue.__r, E = 0, "prototype" in y && y.prototype.render) {
          for (i.state = i.__s, i.__d = !1, b && b(t), p = i.render(i.props, i.state, i.context), $ = 0; $ < i._sb.length; $++)
            i.__h.push(i._sb[$]);
          i._sb = [];
        } else
          do
            i.__d = !1, b && b(t), p = i.render(i.props, i.state, i.context), i.state = i.__s;
          while (i.__d && ++E < 25);
        i.state = i.__s, i.getChildContext != null && (r = Ft(Ft({}, r), i.getChildContext())), d || i.getSnapshotBeforeUpdate == null || (_ = i.getSnapshotBeforeUpdate(u, l)), S = p != null && p.type === Bs && p.key == null ? p.props.children : p, Of(e, Array.isArray(S) ? S : [S], t, n, r, s, o, a, c, f), i.base = t.__e, t.__h = null, i.__h.length && a.push(i), g && (i.__E = i.__ = null), i.__e = !1;
      } else
        o == null && t.__v === n.__v ? (t.__k = n.__k, t.__e = n.__e) : t.__e = Kp(n.__e, t, n, r, s, o, a, f);
    (p = ue.diffed) && p(t);
  } catch (x) {
    t.__v = null, (f || o != null) && (t.__e = c, t.__h = !!f, o[o.indexOf(c)] = null), ue.__e(x, t, n);
  }
}
function Xp(e, t) {
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
function Kp(e, t, n, r, s, o, a, c) {
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
    if (o = o && js.call(e.childNodes), p = (d = n.props || xf).dangerouslySetInnerHTML, i = u.dangerouslySetInnerHTML, !c) {
      if (o != null)
        for (d = {}, _ = 0; _ < e.attributes.length; _++)
          d[e.attributes[_].name] = e.attributes[_].value;
      (i || p) && (i && (p && i.__html == p.__html || i.__html === e.innerHTML) || (e.innerHTML = i && i.__html || ""));
    }
    if (Gp(e, u, d, s, c), i)
      t.__k = [];
    else if (_ = t.props.children, Of(e, Array.isArray(_) ? _ : [_], t, n, r, s && l !== "foreignObject", o, a, o ? o[0] : n.__k && Wr(n, 0), c), o != null)
      for (_ = o.length; _--; )
        o[_] != null && Ef(o[_]);
    c || ("value" in u && (_ = u.value) !== void 0 && (_ !== e.value || l === "progress" && !_ || l === "option" && _ !== d.value) && ti(e, "value", _, d.value, !1), "checked" in u && (_ = u.checked) !== void 0 && _ !== e.checked && ti(e, "checked", _, d.checked, !1));
  }
  return e;
}
function Tf(e, t, n) {
  try {
    typeof e == "function" ? e(t) : e.current = t;
  } catch (r) {
    ue.__e(r, n);
  }
}
function Nf(e, t, n) {
  var r, s;
  if (ue.unmount && ue.unmount(e), (r = e.ref) && (r.current && r.current !== e.__e || Tf(r, null, t)), (r = e.__c) != null) {
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
      r[s] && Nf(r[s], t, n || typeof e.type != "function");
  n || e.__e == null || Ef(e.__e), e.__ = e.__e = e.__d = void 0;
}
function Jp(e, t, n) {
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
} }, $f = 0, kf = function(e) {
  return e != null && e.constructor === void 0;
}, hr.prototype.setState = function(e, t) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = Ft({}, this.state), typeof e == "function" && (e = e(Ft({}, n), this.props)), e && Ft(n, e), e != null && this.__v && (t && this._sb.push(t), tl(this));
}, hr.prototype.forceUpdate = function(e) {
  this.__v && (this.__e = !0, e && this.__h.push(e), tl(this));
}, hr.prototype.render = Bs, dr = [], ei.__r = 0;
class Is extends hr {
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
      if (kf(f))
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
      className: I("btn-group", s ? `size-${s}` : "", n),
      ...l
    }, r && r.map(this.renderItem.bind(this, t)), c);
  }
}
function Zp({
  ...e
}) {
  return /* @__PURE__ */ Jt(Is, {
    ...e
  });
}
class Lf extends $n {
  render() {
    const { message: t, className: n, type: r, actions: s, close: o } = this.props, a = I([r, "border-none"]), c = s != null && s.length ? s.map((f) => ({ ...f, className: a })) : [];
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
      class: I([n, r || "default", "messager"])
    }, /* @__PURE__ */ Jt("div", {
      class: "messager-content"
    }, t), /* @__PURE__ */ Jt(Zp, {
      items: c
    }));
  }
}
A(Lf, "defaultProps");
class Pf extends $n {
  render() {
    const { className: t, placement: n } = this.props;
    return /* @__PURE__ */ Jt("div", {
      class: I([t || "", "messagers-holder", "col"]),
      "data-placement": n
    });
  }
}
A(Pf, "defaultProps");
class il extends at {
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
      Qa(Jt(Pf, p), f);
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
    Qa(Jt(Lf, c), o, a);
  }
}
A(il, "NAME", "messager"), A(il, "DEFAULT", {
  placement: "top",
  type: "default",
  close: !0
});
var Us, _e, Rf, vr, sl, Hf = {}, Wf = [], Qp = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function zt(e, t) {
  for (var n in t)
    e[n] = t[n];
  return e;
}
function jf(e) {
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
  return Mo(e, a, r, s, null);
}
function Mo(e, t, n, r, s) {
  var o = { type: e, props: t, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: s == null ? ++Rf : s };
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
function al(e) {
  (!e.__d && (e.__d = !0) && vr.push(e) && !ni.__r++ || sl !== _e.debounceRendering) && ((sl = _e.debounceRendering) || setTimeout)(ni);
}
function ni() {
  for (var e; ni.__r = vr.length; )
    e = vr.sort(function(t, n) {
      return t.__v.__b - n.__v.__b;
    }), vr = [], e.some(function(t) {
      var n, r, s, o, a, c;
      t.__d && (a = (o = (n = t).__v).__e, (c = n.__P) && (r = [], (s = zt({}, o)).__v = o.__v + 1, zf(c, o, s, n.__n, c.ownerSVGElement !== void 0, o.__h != null ? [a] : null, r, a == null ? jr(o) : a, o.__h), td(r, o), o.__e != a && Bf(o)));
    });
}
function If(e, t, n, r, s, o, a, c, f, p) {
  var i, d, u, l, _, g, h, v = r && r.__k || Wf, m = v.length;
  for (n.__k = [], i = 0; i < t.length; i++)
    if ((l = n.__k[i] = (l = t[i]) == null || typeof l == "boolean" ? null : typeof l == "string" || typeof l == "number" || typeof l == "bigint" ? Mo(null, l, null, null, l) : Array.isArray(l) ? Mo(Fs, { children: l }, null, null, null) : l.__b > 0 ? Mo(l.type, l.props, l.key, l.ref ? l.ref : null, l.__v) : l) != null) {
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
      zf(e, l, u = u || Hf, s, o, a, c, f, p), _ = l.__e, (d = l.ref) && u.ref != d && (h || (h = []), u.ref && h.push(u.ref, null, l), h.push(d, l.__c || _, l)), _ != null ? (g == null && (g = _), typeof l.type == "function" && l.__k === u.__k ? l.__d = f = Uf(l, f, e) : f = Ff(e, l, u, v, _, f), typeof n.type == "function" && (n.__d = f)) : f && u.__e == f && f.parentNode != e && (f = jr(u));
    }
  for (n.__e = g, i = m; i--; )
    v[i] != null && Vf(v[i], v[i]);
  if (h)
    for (i = 0; i < h.length; i++)
      Yf(h[i], h[++i], h[++i]);
}
function Uf(e, t, n) {
  for (var r, s = e.__k, o = 0; s && o < s.length; o++)
    (r = s[o]) && (r.__ = e, t = typeof r.type == "function" ? Uf(r, t, n) : Ff(n, r, r, s, r.__e, t));
  return t;
}
function Ff(e, t, n, r, s, o) {
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
function ed(e, t, n, r, s) {
  var o;
  for (o in n)
    o === "children" || o === "key" || o in t || ri(e, o, null, n[o], r);
  for (o in t)
    s && typeof t[o] != "function" || o === "children" || o === "key" || o === "value" || o === "checked" || n[o] === t[o] || ri(e, o, t[o], n[o], r);
}
function ll(e, t, n) {
  t[0] === "-" ? e.setProperty(t, n) : e[t] = n == null ? "" : typeof n != "number" || Qp.test(t) ? n : n + "px";
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
            n && t in n || ll(e.style, t, "");
        if (n)
          for (t in n)
            r && n[t] === r[t] || ll(e.style, t, n[t]);
      }
    else if (t[0] === "o" && t[1] === "n")
      o = t !== (t = t.replace(/Capture$/, "")), t = t.toLowerCase() in e ? t.toLowerCase().slice(2) : t.slice(2), e.l || (e.l = {}), e.l[t + o] = n, n ? r || e.addEventListener(t, o ? fl : cl, o) : e.removeEventListener(t, o ? fl : cl, o);
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
function cl(e) {
  this.l[e.type + !1](_e.event ? _e.event(e) : e);
}
function fl(e) {
  this.l[e.type + !0](_e.event ? _e.event(e) : e);
}
function zf(e, t, n, r, s, o, a, c, f) {
  var p, i, d, u, l, _, g, h, v, m, k, b, E, $, S, y = t.type;
  if (t.constructor !== void 0)
    return null;
  n.__h != null && (f = n.__h, c = t.__e = n.__e, t.__h = null, o = [c]), (p = _e.__b) && p(t);
  try {
    e:
      if (typeof y == "function") {
        if (h = t.props, v = (p = y.contextType) && r[p.__c], m = p ? v ? v.props.value : p.__ : r, n.__c ? g = (i = t.__c = n.__c).__ = i.__E : ("prototype" in y && y.prototype.render ? t.__c = i = new y(h, m) : (t.__c = i = new mr(h, m), i.constructor = y, i.render = rd), v && v.sub(i), i.props = h, i.state || (i.state = {}), i.context = m, i.__n = r, d = i.__d = !0, i.__h = [], i._sb = []), i.__s == null && (i.__s = i.state), y.getDerivedStateFromProps != null && (i.__s == i.state && (i.__s = zt({}, i.__s)), zt(i.__s, y.getDerivedStateFromProps(h, i.__s))), u = i.props, l = i.state, d)
          y.getDerivedStateFromProps == null && i.componentWillMount != null && i.componentWillMount(), i.componentDidMount != null && i.__h.push(i.componentDidMount);
        else {
          if (y.getDerivedStateFromProps == null && h !== u && i.componentWillReceiveProps != null && i.componentWillReceiveProps(h, m), !i.__e && i.shouldComponentUpdate != null && i.shouldComponentUpdate(h, i.__s, m) === !1 || t.__v === n.__v) {
            for (i.props = h, i.state = i.__s, t.__v !== n.__v && (i.__d = !1), i.__v = t, t.__e = n.__e, t.__k = n.__k, t.__k.forEach(function(x) {
              x && (x.__ = t);
            }), k = 0; k < i._sb.length; k++)
              i.__h.push(i._sb[k]);
            i._sb = [], i.__h.length && a.push(i);
            break e;
          }
          i.componentWillUpdate != null && i.componentWillUpdate(h, i.__s, m), i.componentDidUpdate != null && i.__h.push(function() {
            i.componentDidUpdate(u, l, _);
          });
        }
        if (i.context = m, i.props = h, i.__v = t, i.__P = e, b = _e.__r, E = 0, "prototype" in y && y.prototype.render) {
          for (i.state = i.__s, i.__d = !1, b && b(t), p = i.render(i.props, i.state, i.context), $ = 0; $ < i._sb.length; $++)
            i.__h.push(i._sb[$]);
          i._sb = [];
        } else
          do
            i.__d = !1, b && b(t), p = i.render(i.props, i.state, i.context), i.state = i.__s;
          while (i.__d && ++E < 25);
        i.state = i.__s, i.getChildContext != null && (r = zt(zt({}, r), i.getChildContext())), d || i.getSnapshotBeforeUpdate == null || (_ = i.getSnapshotBeforeUpdate(u, l)), S = p != null && p.type === Fs && p.key == null ? p.props.children : p, If(e, Array.isArray(S) ? S : [S], t, n, r, s, o, a, c, f), i.base = t.__e, t.__h = null, i.__h.length && a.push(i), g && (i.__E = i.__ = null), i.__e = !1;
      } else
        o == null && t.__v === n.__v ? (t.__k = n.__k, t.__e = n.__e) : t.__e = nd(n.__e, t, n, r, s, o, a, f);
    (p = _e.diffed) && p(t);
  } catch (x) {
    t.__v = null, (f || o != null) && (t.__e = c, t.__h = !!f, o[o.indexOf(c)] = null), _e.__e(x, t, n);
  }
}
function td(e, t) {
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
function nd(e, t, n, r, s, o, a, c) {
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
    if (o = o && Us.call(e.childNodes), p = (d = n.props || Hf).dangerouslySetInnerHTML, i = u.dangerouslySetInnerHTML, !c) {
      if (o != null)
        for (d = {}, _ = 0; _ < e.attributes.length; _++)
          d[e.attributes[_].name] = e.attributes[_].value;
      (i || p) && (i && (p && i.__html == p.__html || i.__html === e.innerHTML) || (e.innerHTML = i && i.__html || ""));
    }
    if (ed(e, u, d, s, c), i)
      t.__k = [];
    else if (_ = t.props.children, If(e, Array.isArray(_) ? _ : [_], t, n, r, s && l !== "foreignObject", o, a, o ? o[0] : n.__k && jr(n, 0), c), o != null)
      for (_ = o.length; _--; )
        o[_] != null && jf(o[_]);
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
function Vf(e, t, n) {
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
      r[s] && Vf(r[s], t, n || typeof e.type != "function");
  n || e.__e == null || jf(e.__e), e.__ = e.__e = e.__d = void 0;
}
function rd(e, t, n) {
  return this.constructor(e, n);
}
Us = Wf.slice, _e = { __e: function(e, t, n, r) {
  for (var s, o, a; t = t.__; )
    if ((s = t.__c) && !s.__)
      try {
        if ((o = s.constructor) && o.getDerivedStateFromError != null && (s.setState(o.getDerivedStateFromError(e)), a = s.__d), s.componentDidCatch != null && (s.componentDidCatch(e, r || {}), a = s.__d), a)
          return s.__E = s;
      } catch (c) {
        e = c;
      }
  throw e;
} }, Rf = 0, mr.prototype.setState = function(e, t) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = zt({}, this.state), typeof e == "function" && (e = e(zt({}, n), this.props)), e && zt(n, e), e != null && this.__v && (t && this._sb.push(t), al(this));
}, mr.prototype.forceUpdate = function(e) {
  this.__v && (this.__e = !0, e && this.__h.push(e), al(this));
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
A(_s, "NAME", "zui.progress-circle"), A(_s, "defaultProps", {
  circleSize: 24,
  circleBorderSize: 2,
  circleBgColor: "var(--progress-circle-bg)",
  circleColor: "var(--progress-circle-bar-color)"
});
class ul extends Je {
}
A(ul, "NAME", "table-sorter"), A(ul, "Component", _s);
function od(e) {
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
function id(e) {
  document.readyState !== "loading" ? e() : document.addEventListener("DOMContentLoaded", e);
}
function sd(e, t) {
  const n = typeof e == "string" ? document.querySelector(e) : e;
  if (!n)
    return !1;
  const r = n.getBoundingClientRect(), s = window.innerHeight || document.documentElement.clientHeight, o = window.innerWidth || document.documentElement.clientWidth;
  if (t != null && t.fullyCheck)
    return r.left >= 0 && r.top >= 0 && r.left + r.width <= o && r.top + r.height <= s;
  const a = r.top <= s && r.top + r.height >= 0, c = r.left <= o && r.left + r.width >= 0;
  return a && c;
}
const yy = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  selectText: od,
  domReady: id,
  isElementVisible: sd,
  getClassList: zi,
  classes: I
}, Symbol.toStringTag, { value: "Module" }));
let ad = (e = 21) => crypto.getRandomValues(new Uint8Array(e)).reduce((t, n) => (n &= 63, n < 36 ? t += n.toString(36) : n < 62 ? t += (n - 26).toString(36).toUpperCase() : n > 62 ? t += "-" : t += "_", t), "");
var to, Lt, tt, Sn, En, Ao;
const Sa = class {
  constructor(t, n = "local") {
    P(this, En);
    P(this, to, void 0);
    P(this, Lt, void 0);
    P(this, tt, void 0);
    P(this, Sn, void 0);
    H(this, to, n), H(this, Lt, `ZUI_STORE:${t != null ? t : ad()}`), H(this, tt, n === "local" ? localStorage : sessionStorage);
  }
  get type() {
    return w(this, to);
  }
  get session() {
    return this.type === "session" ? this : (w(this, Sn) || H(this, Sn, new Sa(w(this, Lt), "session")), w(this, Sn));
  }
  get(t, n) {
    const r = w(this, tt).getItem(ne(this, En, Ao).call(this, t));
    return typeof r == "string" ? JSON.parse(r) : r != null ? r : n;
  }
  set(t, n) {
    if (n == null)
      return this.remove(t);
    w(this, tt).setItem(ne(this, En, Ao).call(this, t), JSON.stringify(n));
  }
  remove(t) {
    w(this, tt).removeItem(ne(this, En, Ao).call(this, t));
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
to = new WeakMap(), Lt = new WeakMap(), tt = new WeakMap(), Sn = new WeakMap(), En = new WeakSet(), Ao = function(t) {
  return `${w(this, Lt)}:${t}`;
};
const ld = new oi("DEFAULT");
function cd(e, t = "local") {
  return new oi(e, t);
}
Object.assign(ld, { create: cd });
var zs, pe, qf, gr, _l, Gf = {}, Xf = [], fd = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function Yt(e, t) {
  for (var n in t)
    e[n] = t[n];
  return e;
}
function Kf(e) {
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
  return Do(e, a, r, s, null);
}
function Do(e, t, n, r, s) {
  var o = { type: e, props: t, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: s == null ? ++qf : s };
  return s == null && pe.vnode != null && pe.vnode(o), o;
}
function Ys(e) {
  return e.children;
}
function yr(e, t) {
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
function Jf(e) {
  var t, n;
  if ((e = e.__) != null && e.__c != null) {
    for (e.__e = e.__c.base = null, t = 0; t < e.__k.length; t++)
      if ((n = e.__k[t]) != null && n.__e != null) {
        e.__e = e.__c.base = n.__e;
        break;
      }
    return Jf(e);
  }
}
function pl(e) {
  (!e.__d && (e.__d = !0) && gr.push(e) && !ii.__r++ || _l !== pe.debounceRendering) && ((_l = pe.debounceRendering) || setTimeout)(ii);
}
function ii() {
  for (var e; ii.__r = gr.length; )
    e = gr.sort(function(t, n) {
      return t.__v.__b - n.__v.__b;
    }), gr = [], e.some(function(t) {
      var n, r, s, o, a, c;
      t.__d && (a = (o = (n = t).__v).__e, (c = n.__P) && (r = [], (s = Yt({}, o)).__v = o.__v + 1, tu(c, o, s, n.__n, c.ownerSVGElement !== void 0, o.__h != null ? [a] : null, r, a == null ? Br(o) : a, o.__h), _d(r, o), o.__e != a && Jf(o)));
    });
}
function Zf(e, t, n, r, s, o, a, c, f, p) {
  var i, d, u, l, _, g, h, v = r && r.__k || Xf, m = v.length;
  for (n.__k = [], i = 0; i < t.length; i++)
    if ((l = n.__k[i] = (l = t[i]) == null || typeof l == "boolean" ? null : typeof l == "string" || typeof l == "number" || typeof l == "bigint" ? Do(null, l, null, null, l) : Array.isArray(l) ? Do(Ys, { children: l }, null, null, null) : l.__b > 0 ? Do(l.type, l.props, l.key, l.ref ? l.ref : null, l.__v) : l) != null) {
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
      tu(e, l, u = u || Gf, s, o, a, c, f, p), _ = l.__e, (d = l.ref) && u.ref != d && (h || (h = []), u.ref && h.push(u.ref, null, l), h.push(d, l.__c || _, l)), _ != null ? (g == null && (g = _), typeof l.type == "function" && l.__k === u.__k ? l.__d = f = Qf(l, f, e) : f = eu(e, l, u, v, _, f), typeof n.type == "function" && (n.__d = f)) : f && u.__e == f && f.parentNode != e && (f = Br(u));
    }
  for (n.__e = g, i = m; i--; )
    v[i] != null && ru(v[i], v[i]);
  if (h)
    for (i = 0; i < h.length; i++)
      nu(h[i], h[++i], h[++i]);
}
function Qf(e, t, n) {
  for (var r, s = e.__k, o = 0; s && o < s.length; o++)
    (r = s[o]) && (r.__ = e, t = typeof r.type == "function" ? Qf(r, t, n) : eu(n, r, r, s, r.__e, t));
  return t;
}
function eu(e, t, n, r, s, o) {
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
function ud(e, t, n, r, s) {
  var o;
  for (o in n)
    o === "children" || o === "key" || o in t || si(e, o, null, n[o], r);
  for (o in t)
    s && typeof t[o] != "function" || o === "children" || o === "key" || o === "value" || o === "checked" || n[o] === t[o] || si(e, o, t[o], n[o], r);
}
function dl(e, t, n) {
  t[0] === "-" ? e.setProperty(t, n) : e[t] = n == null ? "" : typeof n != "number" || fd.test(t) ? n : n + "px";
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
            n && t in n || dl(e.style, t, "");
        if (n)
          for (t in n)
            r && n[t] === r[t] || dl(e.style, t, n[t]);
      }
    else if (t[0] === "o" && t[1] === "n")
      o = t !== (t = t.replace(/Capture$/, "")), t = t.toLowerCase() in e ? t.toLowerCase().slice(2) : t.slice(2), e.l || (e.l = {}), e.l[t + o] = n, n ? r || e.addEventListener(t, o ? vl : hl, o) : e.removeEventListener(t, o ? vl : hl, o);
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
function hl(e) {
  this.l[e.type + !1](pe.event ? pe.event(e) : e);
}
function vl(e) {
  this.l[e.type + !0](pe.event ? pe.event(e) : e);
}
function tu(e, t, n, r, s, o, a, c, f) {
  var p, i, d, u, l, _, g, h, v, m, k, b, E, $, S, y = t.type;
  if (t.constructor !== void 0)
    return null;
  n.__h != null && (f = n.__h, c = t.__e = n.__e, t.__h = null, o = [c]), (p = pe.__b) && p(t);
  try {
    e:
      if (typeof y == "function") {
        if (h = t.props, v = (p = y.contextType) && r[p.__c], m = p ? v ? v.props.value : p.__ : r, n.__c ? g = (i = t.__c = n.__c).__ = i.__E : ("prototype" in y && y.prototype.render ? t.__c = i = new y(h, m) : (t.__c = i = new yr(h, m), i.constructor = y, i.render = dd), v && v.sub(i), i.props = h, i.state || (i.state = {}), i.context = m, i.__n = r, d = i.__d = !0, i.__h = [], i._sb = []), i.__s == null && (i.__s = i.state), y.getDerivedStateFromProps != null && (i.__s == i.state && (i.__s = Yt({}, i.__s)), Yt(i.__s, y.getDerivedStateFromProps(h, i.__s))), u = i.props, l = i.state, d)
          y.getDerivedStateFromProps == null && i.componentWillMount != null && i.componentWillMount(), i.componentDidMount != null && i.__h.push(i.componentDidMount);
        else {
          if (y.getDerivedStateFromProps == null && h !== u && i.componentWillReceiveProps != null && i.componentWillReceiveProps(h, m), !i.__e && i.shouldComponentUpdate != null && i.shouldComponentUpdate(h, i.__s, m) === !1 || t.__v === n.__v) {
            for (i.props = h, i.state = i.__s, t.__v !== n.__v && (i.__d = !1), i.__v = t, t.__e = n.__e, t.__k = n.__k, t.__k.forEach(function(x) {
              x && (x.__ = t);
            }), k = 0; k < i._sb.length; k++)
              i.__h.push(i._sb[k]);
            i._sb = [], i.__h.length && a.push(i);
            break e;
          }
          i.componentWillUpdate != null && i.componentWillUpdate(h, i.__s, m), i.componentDidUpdate != null && i.__h.push(function() {
            i.componentDidUpdate(u, l, _);
          });
        }
        if (i.context = m, i.props = h, i.__v = t, i.__P = e, b = pe.__r, E = 0, "prototype" in y && y.prototype.render) {
          for (i.state = i.__s, i.__d = !1, b && b(t), p = i.render(i.props, i.state, i.context), $ = 0; $ < i._sb.length; $++)
            i.__h.push(i._sb[$]);
          i._sb = [];
        } else
          do
            i.__d = !1, b && b(t), p = i.render(i.props, i.state, i.context), i.state = i.__s;
          while (i.__d && ++E < 25);
        i.state = i.__s, i.getChildContext != null && (r = Yt(Yt({}, r), i.getChildContext())), d || i.getSnapshotBeforeUpdate == null || (_ = i.getSnapshotBeforeUpdate(u, l)), S = p != null && p.type === Ys && p.key == null ? p.props.children : p, Zf(e, Array.isArray(S) ? S : [S], t, n, r, s, o, a, c, f), i.base = t.__e, t.__h = null, i.__h.length && a.push(i), g && (i.__E = i.__ = null), i.__e = !1;
      } else
        o == null && t.__v === n.__v ? (t.__k = n.__k, t.__e = n.__e) : t.__e = pd(n.__e, t, n, r, s, o, a, f);
    (p = pe.diffed) && p(t);
  } catch (x) {
    t.__v = null, (f || o != null) && (t.__e = c, t.__h = !!f, o[o.indexOf(c)] = null), pe.__e(x, t, n);
  }
}
function _d(e, t) {
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
function pd(e, t, n, r, s, o, a, c) {
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
    if (o = o && zs.call(e.childNodes), p = (d = n.props || Gf).dangerouslySetInnerHTML, i = u.dangerouslySetInnerHTML, !c) {
      if (o != null)
        for (d = {}, _ = 0; _ < e.attributes.length; _++)
          d[e.attributes[_].name] = e.attributes[_].value;
      (i || p) && (i && (p && i.__html == p.__html || i.__html === e.innerHTML) || (e.innerHTML = i && i.__html || ""));
    }
    if (ud(e, u, d, s, c), i)
      t.__k = [];
    else if (_ = t.props.children, Zf(e, Array.isArray(_) ? _ : [_], t, n, r, s && l !== "foreignObject", o, a, o ? o[0] : n.__k && Br(n, 0), c), o != null)
      for (_ = o.length; _--; )
        o[_] != null && Kf(o[_]);
    c || ("value" in u && (_ = u.value) !== void 0 && (_ !== e.value || l === "progress" && !_ || l === "option" && _ !== d.value) && si(e, "value", _, d.value, !1), "checked" in u && (_ = u.checked) !== void 0 && _ !== e.checked && si(e, "checked", _, d.checked, !1));
  }
  return e;
}
function nu(e, t, n) {
  try {
    typeof e == "function" ? e(t) : e.current = t;
  } catch (r) {
    pe.__e(r, n);
  }
}
function ru(e, t, n) {
  var r, s;
  if (pe.unmount && pe.unmount(e), (r = e.ref) && (r.current && r.current !== e.__e || nu(r, null, t)), (r = e.__c) != null) {
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
      r[s] && ru(r[s], t, n || typeof e.type != "function");
  n || e.__e == null || Kf(e.__e), e.__ = e.__e = e.__d = void 0;
}
function dd(e, t, n) {
  return this.constructor(e, n);
}
zs = Xf.slice, pe = { __e: function(e, t, n, r) {
  for (var s, o, a; t = t.__; )
    if ((s = t.__c) && !s.__)
      try {
        if ((o = s.constructor) && o.getDerivedStateFromError != null && (s.setState(o.getDerivedStateFromError(e)), a = s.__d), s.componentDidCatch != null && (s.componentDidCatch(e, r || {}), a = s.__d), a)
          return s.__E = s;
      } catch (c) {
        e = c;
      }
  throw e;
} }, qf = 0, yr.prototype.setState = function(e, t) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = Yt({}, this.state), typeof e == "function" && (e = e(Yt({}, n), this.props)), e && Yt(n, e), e != null && this.__v && (t && this._sb.push(t), pl(this));
}, yr.prototype.forceUpdate = function(e) {
  this.__v && (this.__e = !0, e && this.__h.push(e), pl(this));
}, yr.prototype.render = Ys, gr = [], ii.__r = 0;
function hd(e) {
  if (e.indexOf("#") === 0 && (e = e.slice(1)), e.length === 3 && (e = e[0] + e[0] + e[1] + e[1] + e[2] + e[2]), e.length !== 6)
    throw new Error(`Invalid HEX color "${e}".`);
  return [
    parseInt(e.slice(0, 2), 16),
    parseInt(e.slice(2, 4), 16),
    parseInt(e.slice(4, 6), 16)
  ];
}
function vd(e) {
  const [t, n, r] = typeof e == "string" ? hd(e) : e;
  return t * 0.299 + n * 0.587 + r * 0.114 > 186;
}
function ml(e, t) {
  var n, r;
  return vd(e) ? (n = t == null ? void 0 : t.dark) != null ? n : "#333333" : (r = t == null ? void 0 : t.light) != null ? r : "#ffffff";
}
function gl(e, t = 255) {
  return Math.min(Math.max(e, 0), t);
}
function md(e, t, n) {
  e = e % 360 / 360, t = gl(t), n = gl(n);
  const r = n <= 0.5 ? n * (t + 1) : n + t - n * t, s = n * 2 - r, o = (a) => (a = a < 0 ? a + 1 : a > 1 ? a - 1 : a, a * 6 < 1 ? s + (r - s) * a * 6 : a * 2 < 1 ? r : a * 3 < 2 ? s + (r - s) * (2 / 3 - a) * 6 : s);
  return [
    o(e + 1 / 3) * 255,
    o(e) * 255,
    o(e - 1 / 3) * 255
  ];
}
function gd(e) {
  let t = 0;
  if (typeof e != "string" && (e = String(e)), e && e.length)
    for (let n = 0; n < e.length; ++n)
      t += (n + 1) * e.charCodeAt(n);
  return t;
}
function yd(e, t) {
  return /^[\u4e00-\u9fa5\s]+$/.test(e) ? e = e.length <= t ? e : e.substring(e.length - t) : /^[A-Za-z\d\s]+$/.test(e) ? e = e[0].toUpperCase() : e = e.length <= t ? e : e.substring(0, t), e;
}
class bd extends yr {
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
    let k = 32;
    r && (typeof r == "number" ? (m.width = `${r}px`, m.height = `${r}px`, m.fontSize = `${Math.max(12, Math.round(r / 2))}px`, k = r) : (v.push(`size-${r}`), k = { xs: 20, sm: 24, lg: 48, xl: 80 }[r])), s ? v.push("circle") : o && (typeof o == "number" ? m.borderRadius = `${o}px` : v.push(`rounded-${o}`));
    let b;
    if (d)
      v.push("has-img"), b = /* @__PURE__ */ ss("img", {
        className: "avatar-img",
        src: d,
        alt: f
      });
    else if (f != null && f.length) {
      const E = yd(f, i);
      if (v.push("has-text", `has-text-${E.length}`), a)
        !c && a && (m.color = ml(a));
      else {
        const S = p != null ? p : f, y = (typeof S == "number" ? S : gd(S)) * u % 360;
        if (m.background = `hsl(${y},${l * 100}%,${_ * 100}%)`, !c) {
          const x = md(y, l, _);
          m.color = ml(x);
        }
      }
      let $;
      k && k < 14 * E.length && ($ = { transform: `scale(${k / (14 * E.length)})`, whiteSpace: "nowrap" }), b = /* @__PURE__ */ ss("div", {
        "data-actualSize": k,
        className: "avatar-text",
        style: $
      }, E);
    }
    return /* @__PURE__ */ ss("div", {
      className: I(v),
      style: m,
      ...h
    }, b, g);
  }
}
class yl extends Je {
}
A(yl, "NAME", "avatar"), A(yl, "Component", bd);
class bl extends Je {
}
A(bl, "NAME", "btngroup"), A(bl, "Component", Is);
var qi, ie, ou, br, wl, ai = {}, iu = [], wd = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function Vt(e, t) {
  for (var n in t)
    e[n] = t[n];
  return e;
}
function su(e) {
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
  return To(e, a, r, s, null);
}
function To(e, t, n, r, s) {
  var o = { type: e, props: t, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: s == null ? ++ou : s };
  return s == null && ie.vnode != null && ie.vnode(o), o;
}
function $d() {
  return { current: null };
}
function Gi(e) {
  return e.children;
}
function wr(e, t) {
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
function au(e) {
  var t, n;
  if ((e = e.__) != null && e.__c != null) {
    for (e.__e = e.__c.base = null, t = 0; t < e.__k.length; t++)
      if ((n = e.__k[t]) != null && n.__e != null) {
        e.__e = e.__c.base = n.__e;
        break;
      }
    return au(e);
  }
}
function $l(e) {
  (!e.__d && (e.__d = !0) && br.push(e) && !li.__r++ || wl !== ie.debounceRendering) && ((wl = ie.debounceRendering) || setTimeout)(li);
}
function li() {
  for (var e; li.__r = br.length; )
    e = br.sort(function(t, n) {
      return t.__v.__b - n.__v.__b;
    }), br = [], e.some(function(t) {
      var n, r, s, o, a, c;
      t.__d && (a = (o = (n = t).__v).__e, (c = n.__P) && (r = [], (s = Vt({}, o)).__v = o.__v + 1, Vs(c, o, s, n.__n, c.ownerSVGElement !== void 0, o.__h != null ? [a] : null, r, a == null ? Ir(o) : a, o.__h), uu(r, o), o.__e != a && au(o)));
    });
}
function lu(e, t, n, r, s, o, a, c, f, p) {
  var i, d, u, l, _, g, h, v = r && r.__k || iu, m = v.length;
  for (n.__k = [], i = 0; i < t.length; i++)
    if ((l = n.__k[i] = (l = t[i]) == null || typeof l == "boolean" ? null : typeof l == "string" || typeof l == "number" || typeof l == "bigint" ? To(null, l, null, null, l) : Array.isArray(l) ? To(Gi, { children: l }, null, null, null) : l.__b > 0 ? To(l.type, l.props, l.key, l.ref ? l.ref : null, l.__v) : l) != null) {
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
      Vs(e, l, u = u || ai, s, o, a, c, f, p), _ = l.__e, (d = l.ref) && u.ref != d && (h || (h = []), u.ref && h.push(u.ref, null, l), h.push(d, l.__c || _, l)), _ != null ? (g == null && (g = _), typeof l.type == "function" && l.__k === u.__k ? l.__d = f = cu(l, f, e) : f = fu(e, l, u, v, _, f), typeof n.type == "function" && (n.__d = f)) : f && u.__e == f && f.parentNode != e && (f = Ir(u));
    }
  for (n.__e = g, i = m; i--; )
    v[i] != null && pu(v[i], v[i]);
  if (h)
    for (i = 0; i < h.length; i++)
      _u(h[i], h[++i], h[++i]);
}
function cu(e, t, n) {
  for (var r, s = e.__k, o = 0; s && o < s.length; o++)
    (r = s[o]) && (r.__ = e, t = typeof r.type == "function" ? cu(r, t, n) : fu(n, r, r, s, r.__e, t));
  return t;
}
function fu(e, t, n, r, s, o) {
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
function kd(e, t, n, r, s) {
  var o;
  for (o in n)
    o === "children" || o === "key" || o in t || ci(e, o, null, n[o], r);
  for (o in t)
    s && typeof t[o] != "function" || o === "children" || o === "key" || o === "value" || o === "checked" || n[o] === t[o] || ci(e, o, t[o], n[o], r);
}
function kl(e, t, n) {
  t[0] === "-" ? e.setProperty(t, n) : e[t] = n == null ? "" : typeof n != "number" || wd.test(t) ? n : n + "px";
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
            n && t in n || kl(e.style, t, "");
        if (n)
          for (t in n)
            r && n[t] === r[t] || kl(e.style, t, n[t]);
      }
    else if (t[0] === "o" && t[1] === "n")
      o = t !== (t = t.replace(/Capture$/, "")), t = t.toLowerCase() in e ? t.toLowerCase().slice(2) : t.slice(2), e.l || (e.l = {}), e.l[t + o] = n, n ? r || e.addEventListener(t, o ? Sl : xl, o) : e.removeEventListener(t, o ? Sl : xl, o);
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
function xl(e) {
  this.l[e.type + !1](ie.event ? ie.event(e) : e);
}
function Sl(e) {
  this.l[e.type + !0](ie.event ? ie.event(e) : e);
}
function Vs(e, t, n, r, s, o, a, c, f) {
  var p, i, d, u, l, _, g, h, v, m, k, b, E, $, S, y = t.type;
  if (t.constructor !== void 0)
    return null;
  n.__h != null && (f = n.__h, c = t.__e = n.__e, t.__h = null, o = [c]), (p = ie.__b) && p(t);
  try {
    e:
      if (typeof y == "function") {
        if (h = t.props, v = (p = y.contextType) && r[p.__c], m = p ? v ? v.props.value : p.__ : r, n.__c ? g = (i = t.__c = n.__c).__ = i.__E : ("prototype" in y && y.prototype.render ? t.__c = i = new y(h, m) : (t.__c = i = new wr(h, m), i.constructor = y, i.render = Sd), v && v.sub(i), i.props = h, i.state || (i.state = {}), i.context = m, i.__n = r, d = i.__d = !0, i.__h = [], i._sb = []), i.__s == null && (i.__s = i.state), y.getDerivedStateFromProps != null && (i.__s == i.state && (i.__s = Vt({}, i.__s)), Vt(i.__s, y.getDerivedStateFromProps(h, i.__s))), u = i.props, l = i.state, d)
          y.getDerivedStateFromProps == null && i.componentWillMount != null && i.componentWillMount(), i.componentDidMount != null && i.__h.push(i.componentDidMount);
        else {
          if (y.getDerivedStateFromProps == null && h !== u && i.componentWillReceiveProps != null && i.componentWillReceiveProps(h, m), !i.__e && i.shouldComponentUpdate != null && i.shouldComponentUpdate(h, i.__s, m) === !1 || t.__v === n.__v) {
            for (i.props = h, i.state = i.__s, t.__v !== n.__v && (i.__d = !1), i.__v = t, t.__e = n.__e, t.__k = n.__k, t.__k.forEach(function(x) {
              x && (x.__ = t);
            }), k = 0; k < i._sb.length; k++)
              i.__h.push(i._sb[k]);
            i._sb = [], i.__h.length && a.push(i);
            break e;
          }
          i.componentWillUpdate != null && i.componentWillUpdate(h, i.__s, m), i.componentDidUpdate != null && i.__h.push(function() {
            i.componentDidUpdate(u, l, _);
          });
        }
        if (i.context = m, i.props = h, i.__v = t, i.__P = e, b = ie.__r, E = 0, "prototype" in y && y.prototype.render) {
          for (i.state = i.__s, i.__d = !1, b && b(t), p = i.render(i.props, i.state, i.context), $ = 0; $ < i._sb.length; $++)
            i.__h.push(i._sb[$]);
          i._sb = [];
        } else
          do
            i.__d = !1, b && b(t), p = i.render(i.props, i.state, i.context), i.state = i.__s;
          while (i.__d && ++E < 25);
        i.state = i.__s, i.getChildContext != null && (r = Vt(Vt({}, r), i.getChildContext())), d || i.getSnapshotBeforeUpdate == null || (_ = i.getSnapshotBeforeUpdate(u, l)), S = p != null && p.type === Gi && p.key == null ? p.props.children : p, lu(e, Array.isArray(S) ? S : [S], t, n, r, s, o, a, c, f), i.base = t.__e, t.__h = null, i.__h.length && a.push(i), g && (i.__E = i.__ = null), i.__e = !1;
      } else
        o == null && t.__v === n.__v ? (t.__k = n.__k, t.__e = n.__e) : t.__e = xd(n.__e, t, n, r, s, o, a, f);
    (p = ie.diffed) && p(t);
  } catch (x) {
    t.__v = null, (f || o != null) && (t.__e = c, t.__h = !!f, o[o.indexOf(c)] = null), ie.__e(x, t, n);
  }
}
function uu(e, t) {
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
function xd(e, t, n, r, s, o, a, c) {
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
    if (kd(e, u, d, s, c), i)
      t.__k = [];
    else if (_ = t.props.children, lu(e, Array.isArray(_) ? _ : [_], t, n, r, s && l !== "foreignObject", o, a, o ? o[0] : n.__k && Ir(n, 0), c), o != null)
      for (_ = o.length; _--; )
        o[_] != null && su(o[_]);
    c || ("value" in u && (_ = u.value) !== void 0 && (_ !== e.value || l === "progress" && !_ || l === "option" && _ !== d.value) && ci(e, "value", _, d.value, !1), "checked" in u && (_ = u.checked) !== void 0 && _ !== e.checked && ci(e, "checked", _, d.checked, !1));
  }
  return e;
}
function _u(e, t, n) {
  try {
    typeof e == "function" ? e(t) : e.current = t;
  } catch (r) {
    ie.__e(r, n);
  }
}
function pu(e, t, n) {
  var r, s;
  if (ie.unmount && ie.unmount(e), (r = e.ref) && (r.current && r.current !== e.__e || _u(r, null, t)), (r = e.__c) != null) {
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
      r[s] && pu(r[s], t, n || typeof e.type != "function");
  n || e.__e == null || su(e.__e), e.__ = e.__e = e.__d = void 0;
}
function Sd(e, t, n) {
  return this.constructor(e, n);
}
function Ed(e, t, n) {
  var r, s, o;
  ie.__ && ie.__(e, t), s = (r = typeof n == "function") ? null : n && n.__k || t.__k, o = [], Vs(t, e = (!r && n || t).__k = B(Gi, null, [e]), s || ai, ai, t.ownerSVGElement !== void 0, !r && n ? [n] : s ? null : t.firstChild ? qi.call(t.childNodes) : null, o, !r && n ? n : s ? s.__e : t.firstChild, r), uu(o, e);
}
qi = iu.slice, ie = { __e: function(e, t, n, r) {
  for (var s, o, a; t = t.__; )
    if ((s = t.__c) && !s.__)
      try {
        if ((o = s.constructor) && o.getDerivedStateFromError != null && (s.setState(o.getDerivedStateFromError(e)), a = s.__d), s.componentDidCatch != null && (s.componentDidCatch(e, r || {}), a = s.__d), a)
          return s.__E = s;
      } catch (c) {
        e = c;
      }
  throw e;
} }, ou = 0, wr.prototype.setState = function(e, t) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = Vt({}, this.state), typeof e == "function" && (e = e(Vt({}, n), this.props)), e && Vt(n, e), e != null && this.__v && (t && this._sb.push(t), $l(this));
}, wr.prototype.forceUpdate = function(e) {
  this.__v && (this.__e = !0, e && this.__h.push(e), $l(this));
}, wr.prototype.render = Gi, br = [], li.__r = 0;
var Cd = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, du = { exports: {} };
(function(e, t) {
  (function(n, r) {
    e.exports = r();
  })(Cd, function() {
    var n = 1e3, r = 6e4, s = 36e5, o = "millisecond", a = "second", c = "minute", f = "hour", p = "day", i = "week", d = "month", u = "quarter", l = "year", _ = "date", g = "Invalid Date", h = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, v = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, m = { name: "en", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), ordinal: function(D) {
      var T = ["th", "st", "nd", "rd"], O = D % 100;
      return "[" + D + (T[(O - 20) % 10] || T[O] || T[0]) + "]";
    } }, k = function(D, T, O) {
      var N = String(D);
      return !N || N.length >= T ? D : "" + Array(T + 1 - N.length).join(O) + D;
    }, b = { s: k, z: function(D) {
      var T = -D.utcOffset(), O = Math.abs(T), N = Math.floor(O / 60), M = O % 60;
      return (T <= 0 ? "+" : "-") + k(N, 2, "0") + ":" + k(M, 2, "0");
    }, m: function D(T, O) {
      if (T.date() < O.date())
        return -D(O, T);
      var N = 12 * (O.year() - T.year()) + (O.month() - T.month()), M = T.clone().add(N, d), j = O - M < 0, R = T.clone().add(N + (j ? -1 : 1), d);
      return +(-(N + (O - M) / (j ? M - R : R - M)) || 0);
    }, a: function(D) {
      return D < 0 ? Math.ceil(D) || 0 : Math.floor(D);
    }, p: function(D) {
      return { M: d, y: l, w: i, d: p, D: _, h: f, m: c, s: a, ms: o, Q: u }[D] || String(D || "").toLowerCase().replace(/s$/, "");
    }, u: function(D) {
      return D === void 0;
    } }, E = "en", $ = {};
    $[E] = m;
    var S = function(D) {
      return D instanceof W;
    }, y = function D(T, O, N) {
      var M;
      if (!T)
        return E;
      if (typeof T == "string") {
        var j = T.toLowerCase();
        $[j] && (M = j), O && ($[j] = O, M = j);
        var R = T.split("-");
        if (!M && R.length > 1)
          return D(R[0]);
      } else {
        var U = T.name;
        $[U] = T, M = U;
      }
      return !N && M && (E = M), M || !N && E;
    }, x = function(D, T) {
      if (S(D))
        return D.clone();
      var O = typeof T == "object" ? T : {};
      return O.date = D, O.args = arguments, new W(O);
    }, C = b;
    C.l = y, C.i = S, C.w = function(D, T) {
      return x(D, { locale: T.$L, utc: T.$u, x: T.$x, $offset: T.$offset });
    };
    var W = function() {
      function D(O) {
        this.$L = y(O.locale, null, !0), this.parse(O);
      }
      var T = D.prototype;
      return T.parse = function(O) {
        this.$d = function(N) {
          var M = N.date, j = N.utc;
          if (M === null)
            return new Date(NaN);
          if (C.u(M))
            return new Date();
          if (M instanceof Date)
            return new Date(M);
          if (typeof M == "string" && !/Z$/i.test(M)) {
            var R = M.match(h);
            if (R) {
              var U = R[2] - 1 || 0, G = (R[7] || "0").substring(0, 3);
              return j ? new Date(Date.UTC(R[1], U, R[3] || 1, R[4] || 0, R[5] || 0, R[6] || 0, G)) : new Date(R[1], U, R[3] || 1, R[4] || 0, R[5] || 0, R[6] || 0, G);
            }
          }
          return new Date(M);
        }(O), this.$x = O.x || {}, this.init();
      }, T.init = function() {
        var O = this.$d;
        this.$y = O.getFullYear(), this.$M = O.getMonth(), this.$D = O.getDate(), this.$W = O.getDay(), this.$H = O.getHours(), this.$m = O.getMinutes(), this.$s = O.getSeconds(), this.$ms = O.getMilliseconds();
      }, T.$utils = function() {
        return C;
      }, T.isValid = function() {
        return this.$d.toString() !== g;
      }, T.isSame = function(O, N) {
        var M = x(O);
        return this.startOf(N) <= M && M <= this.endOf(N);
      }, T.isAfter = function(O, N) {
        return x(O) < this.startOf(N);
      }, T.isBefore = function(O, N) {
        return this.endOf(N) < x(O);
      }, T.$g = function(O, N, M) {
        return C.u(O) ? this[N] : this.set(M, O);
      }, T.unix = function() {
        return Math.floor(this.valueOf() / 1e3);
      }, T.valueOf = function() {
        return this.$d.getTime();
      }, T.startOf = function(O, N) {
        var M = this, j = !!C.u(N) || N, R = C.p(O), U = function(q, J) {
          var le = C.w(M.$u ? Date.UTC(M.$y, J, q) : new Date(M.$y, J, q), M);
          return j ? le : le.endOf(p);
        }, G = function(q, J) {
          return C.w(M.toDate()[q].apply(M.toDate("s"), (j ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(J)), M);
        }, z = this.$W, K = this.$M, Q = this.$D, L = "set" + (this.$u ? "UTC" : "");
        switch (R) {
          case l:
            return j ? U(1, 0) : U(31, 11);
          case d:
            return j ? U(1, K) : U(0, K + 1);
          case i:
            var Y = this.$locale().weekStart || 0, X = (z < Y ? z + 7 : z) - Y;
            return U(j ? Q - X : Q + (6 - X), K);
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
      }, T.endOf = function(O) {
        return this.startOf(O, !1);
      }, T.$set = function(O, N) {
        var M, j = C.p(O), R = "set" + (this.$u ? "UTC" : ""), U = (M = {}, M[p] = R + "Date", M[_] = R + "Date", M[d] = R + "Month", M[l] = R + "FullYear", M[f] = R + "Hours", M[c] = R + "Minutes", M[a] = R + "Seconds", M[o] = R + "Milliseconds", M)[j], G = j === p ? this.$D + (N - this.$W) : N;
        if (j === d || j === l) {
          var z = this.clone().set(_, 1);
          z.$d[U](G), z.init(), this.$d = z.set(_, Math.min(this.$D, z.daysInMonth())).$d;
        } else
          U && this.$d[U](G);
        return this.init(), this;
      }, T.set = function(O, N) {
        return this.clone().$set(O, N);
      }, T.get = function(O) {
        return this[C.p(O)]();
      }, T.add = function(O, N) {
        var M, j = this;
        O = Number(O);
        var R = C.p(N), U = function(K) {
          var Q = x(j);
          return C.w(Q.date(Q.date() + Math.round(K * O)), j);
        };
        if (R === d)
          return this.set(d, this.$M + O);
        if (R === l)
          return this.set(l, this.$y + O);
        if (R === p)
          return U(1);
        if (R === i)
          return U(7);
        var G = (M = {}, M[c] = r, M[f] = s, M[a] = n, M)[R] || 1, z = this.$d.getTime() + O * G;
        return C.w(z, this);
      }, T.subtract = function(O, N) {
        return this.add(-1 * O, N);
      }, T.format = function(O) {
        var N = this, M = this.$locale();
        if (!this.isValid())
          return M.invalidDate || g;
        var j = O || "YYYY-MM-DDTHH:mm:ssZ", R = C.z(this), U = this.$H, G = this.$m, z = this.$M, K = M.weekdays, Q = M.months, L = function(J, le, ae, be) {
          return J && (J[le] || J(N, j)) || ae[le].slice(0, be);
        }, Y = function(J) {
          return C.s(U % 12 || 12, J, "0");
        }, X = M.meridiem || function(J, le, ae) {
          var be = J < 12 ? "AM" : "PM";
          return ae ? be.toLowerCase() : be;
        }, q = { YY: String(this.$y).slice(-2), YYYY: this.$y, M: z + 1, MM: C.s(z + 1, 2, "0"), MMM: L(M.monthsShort, z, Q, 3), MMMM: L(Q, z), D: this.$D, DD: C.s(this.$D, 2, "0"), d: String(this.$W), dd: L(M.weekdaysMin, this.$W, K, 2), ddd: L(M.weekdaysShort, this.$W, K, 3), dddd: K[this.$W], H: String(U), HH: C.s(U, 2, "0"), h: Y(1), hh: Y(2), a: X(U, G, !0), A: X(U, G, !1), m: String(G), mm: C.s(G, 2, "0"), s: String(this.$s), ss: C.s(this.$s, 2, "0"), SSS: C.s(this.$ms, 3, "0"), Z: R };
        return j.replace(v, function(J, le) {
          return le || q[J] || R.replace(":", "");
        });
      }, T.utcOffset = function() {
        return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
      }, T.diff = function(O, N, M) {
        var j, R = C.p(N), U = x(O), G = (U.utcOffset() - this.utcOffset()) * r, z = this - U, K = C.m(this, U);
        return K = (j = {}, j[l] = K / 12, j[d] = K, j[u] = K / 3, j[i] = (z - G) / 6048e5, j[p] = (z - G) / 864e5, j[f] = z / s, j[c] = z / r, j[a] = z / n, j)[R] || z, M ? K : C.a(K);
      }, T.daysInMonth = function() {
        return this.endOf(d).$D;
      }, T.$locale = function() {
        return $[this.$L];
      }, T.locale = function(O, N) {
        if (!O)
          return this.$L;
        var M = this.clone(), j = y(O, N, !0);
        return j && (M.$L = j), M;
      }, T.clone = function() {
        return C.w(this.$d, this);
      }, T.toDate = function() {
        return new Date(this.valueOf());
      }, T.toJSON = function() {
        return this.isValid() ? this.toISOString() : null;
      }, T.toISOString = function() {
        return this.$d.toISOString();
      }, T.toString = function() {
        return this.$d.toUTCString();
      }, D;
    }(), F = W.prototype;
    return x.prototype = F, [["$ms", o], ["$s", a], ["$m", c], ["$H", f], ["$W", p], ["$M", d], ["$y", l], ["$D", _]].forEach(function(D) {
      F[D[1]] = function(T) {
        return this.$g(T, D[0], D[1]);
      };
    }), x.extend = function(D, T) {
      return D.$i || (D(T, W, x), D.$i = !0), x;
    }, x.locale = y, x.isDayjs = S, x.unix = function(D) {
      return x(1e3 * D);
    }, x.en = $[E], x.Ls = $, x.p = {}, x;
  });
})(du);
const Z = du.exports;
class Od extends wr {
  constructor() {
    super(...arguments);
    A(this, "DATEROWCOUNT", 6);
    A(this, "ref", $d());
    A(this, "state", {
      selectedDate: this.props.date || null
    });
  }
  addMonth(n) {
    return Z(n).isValid() ? Z(n).add(1, "months").format(this.props.format) : "";
  }
  subtractMonth(n) {
    return Z(n).isValid() ? Z(n).subtract(1, "months").format(this.props.format) : "";
  }
  handleChange(n) {
    this.setState({ selectedDate: n }), this.props.onChange(n);
  }
  handleChangePanel(n) {
    var r, s, o, a, c, f, p, i;
    n === "month" ? ((s = (r = this.ref.current) == null ? void 0 : r.querySelector(".calendar-day")) == null || s.classList.add("hidden"), (a = (o = this.ref.current) == null ? void 0 : o.querySelector(".calendar-month")) == null || a.classList.toggle("hidden")) : ((f = (c = this.ref.current) == null ? void 0 : c.querySelector(".calendar-day")) == null || f.classList.add("hidden"), (i = (p = this.ref.current) == null ? void 0 : p.querySelector(".calendar-year")) == null || i.classList.toggle("hidden"));
  }
  generateArrayNumber(n = 0, r = 0) {
    const s = [];
    for (let o = n; o <= r; o++)
      s.push(o);
    return s;
  }
  createGroups(n, r) {
    const s = Math.ceil(n.length / r);
    return new Array(r).fill({}).map((o, a) => n.slice(a * s, (a + 1) * s));
  }
  renderMonthDay(n, r, s, o) {
    var p;
    const a = Z(), c = Z(this.state.selectedDate), f = new Array(n);
    for (let i = 0; i < n; i++) {
      const d = r + i + 1, u = s.set("date", d), l = o && !this.props.showOtherMonth ? !0 : this.props.minDate && u.isBefore(this.props.minDate, "date") || this.props.maxDate && u.isAfter(this.props.maxDate, "date") || this.props.minYear && u.isBefore(Z(`${this.props.minYear}-01-01`), "year") || this.props.maxYear && u.isAfter(Z(`${this.props.maxYear}-12-31`), "year");
      f[i] = {
        isSelectedDate: c.isSame(s.set("date", d), "date"),
        isToday: a.isSame(u, "date"),
        isDisable: !!l,
        isTag: !!((p = this.props.tagDate) != null && p.includes(u.format(this.props.format))),
        date: u,
        dayNumber: o && !this.props.showOtherMonth ? 0 : d,
        isOtherMonth: o
      };
    }
    return f;
  }
  renderPreMonthDay() {
    const n = Z(this.state.selectedDate), r = Z(), s = this.state.selectedDate ? n : r, o = s.set("date", 1).day(), a = o === 0 ? 6 : o - 1, c = s.subtract(1, "month"), p = Number(c.endOf("month").get("date")) - a;
    return this.renderMonthDay(a, p, c, !0);
  }
  renderNextMonthDay() {
    const n = Z(this.state.selectedDate), r = Z(), s = this.state.selectedDate ? n : r, o = s.set("date", 1).day(), a = o === 0 ? 6 : o - 1, c = s.endOf("month").get("date"), f = s.add(1, "month"), p = 7 * 6 % (a + c);
    return this.renderMonthDay(p, 0, f, !0);
  }
  renderCurrentMonthDays() {
    const n = this.state.selectedDate, r = Z(), s = this.state.selectedDate ? Z(n) : r, o = s.endOf("month").get("date"), a = this.renderMonthDay(o, 0, s, !1), c = this.renderPreMonthDay(), f = this.renderNextMonthDay(), p = [...c, ...a, ...f];
    return this.createGroups(p, this.DATEROWCOUNT);
  }
  handleChangeMonth(n) {
    var r, s, o, a;
    this.setState({ selectedDate: n }), (s = (r = this.ref.current) == null ? void 0 : r.querySelector(".calendar-month")) == null || s.classList.toggle("hidden"), (a = (o = this.ref.current) == null ? void 0 : o.querySelector(".calendar-day")) == null || a.classList.toggle("hidden");
  }
  handleChangeYear(n) {
    var r, s, o, a;
    this.setState({ selectedDate: n }), (s = (r = this.ref.current) == null ? void 0 : r.querySelector(".calendar-year")) == null || s.classList.toggle("hidden"), (a = (o = this.ref.current) == null ? void 0 : o.querySelector(".calendar-month")) == null || a.classList.toggle("hidden");
  }
  renderDayPanel() {
    const { showToday: n } = this.props, r = ["\u4E00", "\u4E8C", "\u4E09", "\u56DB", "\u4E94", "\u516D", "\u65E5"], s = this.renderCurrentMonthDays();
    return /* @__PURE__ */ B("div", {
      className: I("calendar-day")
    }, /* @__PURE__ */ B("div", {
      className: "calendar-bar"
    }, /* @__PURE__ */ B("div", {
      class: "flex"
    }, /* @__PURE__ */ B("button", {
      type: "button",
      className: "btn ghost",
      onClick: () => this.handleChangePanel("year")
    }, /* @__PURE__ */ B("span", null, Z(this.state.selectedDate).format("YYYY \u5E74")), /* @__PURE__ */ B("span", {
      class: "caret"
    })), /* @__PURE__ */ B("button", {
      type: "button",
      className: "btn ghost",
      onClick: () => this.handleChangePanel("month")
    }, /* @__PURE__ */ B("span", null, Z(this.state.selectedDate).format("MM \u6708")), /* @__PURE__ */ B("span", {
      class: "caret"
    }))), /* @__PURE__ */ B("div", {
      class: "flex"
    }, n && /* @__PURE__ */ B("button", {
      type: "button",
      className: "btn ghost",
      onClick: () => {
        this.handleChange(Z().format(this.props.format));
      }
    }, "\u4ECA\u5929"), /* @__PURE__ */ B("button", {
      type: "button",
      className: "btn ghost",
      onClick: () => {
        const o = this.subtractMonth(this.state.selectedDate || Z().format(this.props.format));
        this.handleChange(o);
      }
    }, /* @__PURE__ */ B("i", {
      className: "icon icon-angle-left"
    })), /* @__PURE__ */ B("button", {
      type: "button",
      className: "btn ghost",
      onClick: () => {
        const o = this.addMonth(this.state.selectedDate || Z().format(this.props.format));
        this.handleChange(o);
      }
    }, /* @__PURE__ */ B("i", {
      className: "icon icon-angle-right"
    })))), /* @__PURE__ */ B("table", {
      className: "calendar-table"
    }, /* @__PURE__ */ B("thead", {
      className: "calendar-table-head"
    }, /* @__PURE__ */ B("tr", null, r.map((o, a) => /* @__PURE__ */ B("th", {
      key: a
    }, o)))), /* @__PURE__ */ B("tbody", {
      className: "calendar-table-body"
    }, s.map((o, a) => /* @__PURE__ */ B("tr", {
      key: a
    }, o.map((c, f) => {
      const p = ["text-center"];
      return c.isToday && p.push("calendar-today"), c.isSelectedDate && p.push("calendar-selected-date"), c.isOtherMonth && p.push("calendar-other-month"), c.isTag && p.push("calendar-tag"), /* @__PURE__ */ B("td", {
        key: f,
        className: I(p)
      }, /* @__PURE__ */ B("div", {
        className: I("btn", "ghost", "calendar-date", c.isDisable ? "disabled" : ""),
        onClick: () => {
          if (c.isDisable)
            return;
          const i = Z(c.date).format(this.props.format);
          this.handleChange(i);
        }
      }, c && c.dayNumber || ""));
    }))))));
  }
  renderMonthPanel() {
    const n = this.createGroups(this.generateArrayNumber(1, 12), 4);
    return /* @__PURE__ */ B("div", {
      className: I("calendar-month", "hidden")
    }, /* @__PURE__ */ B("div", {
      className: "calendar-bar"
    }, /* @__PURE__ */ B("button", {
      type: "button",
      className: "btn ghost",
      onClick: () => {
        const r = Z(this.state.selectedDate).subtract(1, "year").startOf("year").format(this.props.format);
        this.handleChange(r);
      }
    }, /* @__PURE__ */ B("i", {
      className: "icon icon-angle-left"
    })), /* @__PURE__ */ B("button", {
      type: "button",
      className: "btn ghost",
      onClick: () => this.handleChangePanel("year")
    }, Z(this.state.selectedDate).format("YYYY \u5E74")), /* @__PURE__ */ B("button", {
      type: "button",
      className: "btn ghost",
      onClick: () => {
        const r = Z(this.state.selectedDate).add(1, "year").startOf("year").format(this.props.format);
        this.handleChange(r);
      }
    }, /* @__PURE__ */ B("i", {
      className: "icon icon-angle-right"
    }))), /* @__PURE__ */ B("table", {
      className: "calendar-month-table"
    }, /* @__PURE__ */ B("tbody", {
      className: "calendar-month-table-body"
    }, n.map((r, s) => /* @__PURE__ */ B("tr", {
      key: s
    }, r.map((o, a) => {
      const c = ["text-center"], f = Z(this.state.selectedDate).year(), p = Z(`${f}-${o}-01`).format(this.props.format);
      return /* @__PURE__ */ B("td", {
        key: a,
        className: I(c)
      }, /* @__PURE__ */ B("div", {
        className: I("btn", "ghost", "calendar-month"),
        onClick: () => {
          this.handleChangeMonth(p);
        }
      }, Z(p).format("MM"), " \u6708"));
    }))))));
  }
  renderYearPanel() {
    const n = Z(this.state.selectedDate).year(), r = this.createGroups(this.generateArrayNumber(n, n + 11), 4);
    return /* @__PURE__ */ B("div", {
      className: I("calendar-year", "hidden")
    }, /* @__PURE__ */ B("div", {
      className: "calendar-bar"
    }, /* @__PURE__ */ B("button", {
      type: "button",
      className: "btn ghost",
      onClick: () => {
        const s = Z(this.state.selectedDate).subtract(12, "year").startOf("year").format(this.props.format);
        this.handleChange(s);
      }
    }, /* @__PURE__ */ B("i", {
      className: "icon icon-angle-left"
    })), /* @__PURE__ */ B("div", null, Z(this.state.selectedDate).year(), " - ", n + 11), /* @__PURE__ */ B("button", {
      type: "button",
      className: "btn ghost",
      onClick: () => {
        const s = Z(this.state.selectedDate).add(12, "year").startOf("year").format(this.props.format);
        this.handleChange(s);
      }
    }, /* @__PURE__ */ B("i", {
      className: "icon icon-angle-right"
    }))), /* @__PURE__ */ B("table", {
      className: "calendar-month-table"
    }, /* @__PURE__ */ B("tbody", {
      className: "calendar-month-table-body"
    }, r.map((s, o) => /* @__PURE__ */ B("tr", {
      key: o
    }, s.map((a, c) => {
      const f = ["text-center"], p = Z(this.state.selectedDate).month(), i = Z(`${a}-${p}-01`).format(this.props.format), d = this.props.minYear && a <= this.props.minYear || this.props.maxYear && a > this.props.maxYear;
      return /* @__PURE__ */ B("td", {
        key: c,
        className: I(f)
      }, /* @__PURE__ */ B("div", {
        className: I("btn", "ghost", "calendar-month", d ? "disabled" : ""),
        onClick: () => {
          d || this.handleChangeYear(i);
        }
      }, Z(i).format("YYYY")));
    }))))));
  }
  render() {
    const { className: n } = this.props;
    return /* @__PURE__ */ B("div", {
      className: I("datetimepicker-calendar", n),
      ref: this.ref
    }, this.renderDayPanel(), this.renderMonthPanel(), this.renderYearPanel());
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
function qs(e) {
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
function hu() {
  return !/^((?!chrome|android).)*safari/i.test(ps());
}
function zn(e, t, n) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  var r = e.getBoundingClientRect(), s = 1, o = 1;
  t && Ne(e) && (s = e.offsetWidth > 0 && Fn(r.width) / e.offsetWidth || 1, o = e.offsetHeight > 0 && Fn(r.height) / e.offsetHeight || 1);
  var a = mn(e) ? Re(e) : window, c = a.visualViewport, f = !hu() && n, p = (r.left + (f && c ? c.offsetLeft : 0)) / s, i = (r.top + (f && c ? c.offsetTop : 0)) / o, d = r.width / s, u = r.height / o;
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
function Gs(e) {
  var t = Re(e), n = t.pageXOffset, r = t.pageYOffset;
  return {
    scrollLeft: n,
    scrollTop: r
  };
}
function Md(e) {
  return {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  };
}
function Ad(e) {
  return e === Re(e) || !Ne(e) ? Gs(e) : Md(e);
}
function ft(e) {
  return e ? (e.nodeName || "").toLowerCase() : null;
}
function nn(e) {
  return ((mn(e) ? e.ownerDocument : e.document) || window.document).documentElement;
}
function Xs(e) {
  return zn(nn(e)).left + Gs(e).scrollLeft;
}
function kt(e) {
  return Re(e).getComputedStyle(e);
}
function Ks(e) {
  var t = kt(e), n = t.overflow, r = t.overflowX, s = t.overflowY;
  return /auto|scroll|overlay|hidden/.test(n + s + r);
}
function Dd(e) {
  var t = e.getBoundingClientRect(), n = Fn(t.width) / e.offsetWidth || 1, r = Fn(t.height) / e.offsetHeight || 1;
  return n !== 1 || r !== 1;
}
function Td(e, t, n) {
  n === void 0 && (n = !1);
  var r = Ne(t), s = Ne(t) && Dd(t), o = nn(t), a = zn(e, s, n), c = {
    scrollLeft: 0,
    scrollTop: 0
  }, f = {
    x: 0,
    y: 0
  };
  return (r || !r && !n) && ((ft(t) !== "body" || Ks(o)) && (c = Ad(t)), Ne(t) ? (f = zn(t, !0), f.x += t.clientLeft, f.y += t.clientTop) : o && (f.x = Xs(o))), {
    x: a.left + c.scrollLeft - f.x,
    y: a.top + c.scrollTop - f.y,
    width: a.width,
    height: a.height
  };
}
function Js(e) {
  var t = zn(e), n = e.offsetWidth, r = e.offsetHeight;
  return Math.abs(t.width - n) <= 1 && (n = t.width), Math.abs(t.height - r) <= 1 && (r = t.height), {
    x: e.offsetLeft,
    y: e.offsetTop,
    width: n,
    height: r
  };
}
function Xi(e) {
  return ft(e) === "html" ? e : e.assignedSlot || e.parentNode || (qs(e) ? e.host : null) || nn(e);
}
function vu(e) {
  return ["html", "body", "#document"].indexOf(ft(e)) >= 0 ? e.ownerDocument.body : Ne(e) && Ks(e) ? e : vu(Xi(e));
}
function $r(e, t) {
  var n;
  t === void 0 && (t = []);
  var r = vu(e), s = r === ((n = e.ownerDocument) == null ? void 0 : n.body), o = Re(r), a = s ? [o].concat(o.visualViewport || [], Ks(r) ? r : []) : r, c = t.concat(a);
  return s ? c : c.concat($r(Xi(a)));
}
function Nd(e) {
  return ["table", "td", "th"].indexOf(ft(e)) >= 0;
}
function El(e) {
  return !Ne(e) || kt(e).position === "fixed" ? null : e.offsetParent;
}
function Ld(e) {
  var t = /firefox/i.test(ps()), n = /Trident/i.test(ps());
  if (n && Ne(e)) {
    var r = kt(e);
    if (r.position === "fixed")
      return null;
  }
  var s = Xi(e);
  for (qs(s) && (s = s.host); Ne(s) && ["html", "body"].indexOf(ft(s)) < 0; ) {
    var o = kt(s);
    if (o.transform !== "none" || o.perspective !== "none" || o.contain === "paint" || ["transform", "perspective"].indexOf(o.willChange) !== -1 || t && o.willChange === "filter" || t && o.filter && o.filter !== "none")
      return s;
    s = s.parentNode;
  }
  return null;
}
function po(e) {
  for (var t = Re(e), n = El(e); n && Nd(n) && kt(n).position === "static"; )
    n = El(n);
  return n && (ft(n) === "html" || ft(n) === "body" && kt(n).position === "static") ? t : n || Ld(e) || t;
}
var Ee = "top", qe = "bottom", Ge = "right", Ce = "left", Zs = "auto", ho = [Ee, qe, Ge, Ce], Yn = "start", Ur = "end", Pd = "clippingParents", mu = "viewport", rr = "popper", Rd = "reference", Cl = /* @__PURE__ */ ho.reduce(function(e, t) {
  return e.concat([t + "-" + Yn, t + "-" + Ur]);
}, []), gu = /* @__PURE__ */ [].concat(ho, [Zs]).reduce(function(e, t) {
  return e.concat([t, t + "-" + Yn, t + "-" + Ur]);
}, []), Hd = "beforeRead", Wd = "read", jd = "afterRead", Bd = "beforeMain", Id = "main", Ud = "afterMain", Fd = "beforeWrite", zd = "write", Yd = "afterWrite", Vd = [Hd, Wd, jd, Bd, Id, Ud, Fd, zd, Yd];
function qd(e) {
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
function Gd(e) {
  var t = qd(e);
  return Vd.reduce(function(n, r) {
    return n.concat(t.filter(function(s) {
      return s.phase === r;
    }));
  }, []);
}
function Xd(e) {
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
function Kd(e) {
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
function Jd(e, t) {
  var n = Re(e), r = nn(e), s = n.visualViewport, o = r.clientWidth, a = r.clientHeight, c = 0, f = 0;
  if (s) {
    o = s.width, a = s.height;
    var p = hu();
    (p || !p && t === "fixed") && (c = s.offsetLeft, f = s.offsetTop);
  }
  return {
    width: o,
    height: a,
    x: c + Xs(e),
    y: f
  };
}
function Zd(e) {
  var t, n = nn(e), r = Gs(e), s = (t = e.ownerDocument) == null ? void 0 : t.body, o = dn(n.scrollWidth, n.clientWidth, s ? s.scrollWidth : 0, s ? s.clientWidth : 0), a = dn(n.scrollHeight, n.clientHeight, s ? s.scrollHeight : 0, s ? s.clientHeight : 0), c = -r.scrollLeft + Xs(e), f = -r.scrollTop;
  return kt(s || n).direction === "rtl" && (c += dn(n.clientWidth, s ? s.clientWidth : 0) - o), {
    width: o,
    height: a,
    x: c,
    y: f
  };
}
function yu(e, t) {
  var n = t.getRootNode && t.getRootNode();
  if (e.contains(t))
    return !0;
  if (n && qs(n)) {
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
function Qd(e, t) {
  var n = zn(e, !1, t === "fixed");
  return n.top = n.top + e.clientTop, n.left = n.left + e.clientLeft, n.bottom = n.top + e.clientHeight, n.right = n.left + e.clientWidth, n.width = e.clientWidth, n.height = e.clientHeight, n.x = n.left, n.y = n.top, n;
}
function Ol(e, t, n) {
  return t === mu ? ds(Jd(e, n)) : mn(t) ? Qd(t, n) : ds(Zd(nn(e)));
}
function eh(e) {
  var t = $r(Xi(e)), n = ["absolute", "fixed"].indexOf(kt(e).position) >= 0, r = n && Ne(e) ? po(e) : e;
  return mn(r) ? t.filter(function(s) {
    return mn(s) && yu(s, r) && ft(s) !== "body";
  }) : [];
}
function th(e, t, n, r) {
  var s = t === "clippingParents" ? eh(e) : [].concat(t), o = [].concat(s, [n]), a = o[0], c = o.reduce(function(f, p) {
    var i = Ol(e, p, r);
    return f.top = dn(i.top, f.top), f.right = fi(i.right, f.right), f.bottom = fi(i.bottom, f.bottom), f.left = dn(i.left, f.left), f;
  }, Ol(e, a, r));
  return c.width = c.right - c.left, c.height = c.bottom - c.top, c.x = c.left, c.y = c.top, c;
}
function Vn(e) {
  return e.split("-")[1];
}
function Qs(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function bu(e) {
  var t = e.reference, n = e.element, r = e.placement, s = r ? lt(r) : null, o = r ? Vn(r) : null, a = t.x + t.width / 2 - n.width / 2, c = t.y + t.height / 2 - n.height / 2, f;
  switch (s) {
    case Ee:
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
  var p = s ? Qs(s) : null;
  if (p != null) {
    var i = p === "y" ? "height" : "width";
    switch (o) {
      case Yn:
        f[p] = f[p] - (t[i] / 2 - n[i] / 2);
        break;
      case Ur:
        f[p] = f[p] + (t[i] / 2 - n[i] / 2);
        break;
    }
  }
  return f;
}
function wu() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
function $u(e) {
  return Object.assign({}, wu(), e);
}
function ku(e, t) {
  return t.reduce(function(n, r) {
    return n[r] = e, n;
  }, {});
}
function ea(e, t) {
  t === void 0 && (t = {});
  var n = t, r = n.placement, s = r === void 0 ? e.placement : r, o = n.strategy, a = o === void 0 ? e.strategy : o, c = n.boundary, f = c === void 0 ? Pd : c, p = n.rootBoundary, i = p === void 0 ? mu : p, d = n.elementContext, u = d === void 0 ? rr : d, l = n.altBoundary, _ = l === void 0 ? !1 : l, g = n.padding, h = g === void 0 ? 0 : g, v = $u(typeof h != "number" ? h : ku(h, ho)), m = u === rr ? Rd : rr, k = e.rects.popper, b = e.elements[_ ? m : u], E = th(mn(b) ? b : b.contextElement || nn(e.elements.popper), f, i, a), $ = zn(e.elements.reference), S = bu({
    reference: $,
    element: k,
    strategy: "absolute",
    placement: s
  }), y = ds(Object.assign({}, k, S)), x = u === rr ? y : $, C = {
    top: E.top - x.top + v.top,
    bottom: x.bottom - E.bottom + v.bottom,
    left: E.left - x.left + v.left,
    right: x.right - E.right + v.right
  }, W = e.modifiersData.offset;
  if (u === rr && W) {
    var F = W[s];
    Object.keys(C).forEach(function(D) {
      var T = [Ge, qe].indexOf(D) >= 0 ? 1 : -1, O = [Ee, qe].indexOf(D) >= 0 ? "y" : "x";
      C[D] += F[O] * T;
    });
  }
  return C;
}
var Ml = {
  placement: "bottom",
  modifiers: [],
  strategy: "absolute"
};
function Al() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return !t.some(function(r) {
    return !(r && typeof r.getBoundingClientRect == "function");
  });
}
function nh(e) {
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
        var k = Gd(Kd([].concat(r, i.options.modifiers)));
        return i.orderedModifiers = k.filter(function(b) {
          return b.enabled;
        }), _(), l.update();
      },
      forceUpdate: function() {
        if (!u) {
          var v = i.elements, m = v.reference, k = v.popper;
          if (!!Al(m, k)) {
            i.rects = {
              reference: Td(m, po(k), i.options.strategy === "fixed"),
              popper: Js(k)
            }, i.reset = !1, i.placement = i.options.placement, i.orderedModifiers.forEach(function(C) {
              return i.modifiersData[C.name] = Object.assign({}, C.data);
            });
            for (var b = 0; b < i.orderedModifiers.length; b++) {
              if (i.reset === !0) {
                i.reset = !1, b = -1;
                continue;
              }
              var E = i.orderedModifiers[b], $ = E.fn, S = E.options, y = S === void 0 ? {} : S, x = E.name;
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
      update: Xd(function() {
        return new Promise(function(h) {
          l.forceUpdate(), h(i);
        });
      }),
      destroy: function() {
        g(), u = !0;
      }
    };
    if (!Al(c, f))
      return l;
    l.setOptions(p).then(function(h) {
      !u && p.onFirstUpdate && p.onFirstUpdate(h);
    });
    function _() {
      i.orderedModifiers.forEach(function(h) {
        var v = h.name, m = h.options, k = m === void 0 ? {} : m, b = h.effect;
        if (typeof b == "function") {
          var E = b({
            state: i,
            name: v,
            instance: l,
            options: k
          }), $ = function() {
          };
          d.push(E || $);
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
function rh(e) {
  var t = e.state, n = e.instance, r = e.options, s = r.scroll, o = s === void 0 ? !0 : s, a = r.resize, c = a === void 0 ? !0 : a, f = Re(t.elements.popper), p = [].concat(t.scrollParents.reference, t.scrollParents.popper);
  return o && p.forEach(function(i) {
    i.addEventListener("scroll", n.update, bo);
  }), c && f.addEventListener("resize", n.update, bo), function() {
    o && p.forEach(function(i) {
      i.removeEventListener("scroll", n.update, bo);
    }), c && f.removeEventListener("resize", n.update, bo);
  };
}
const oh = {
  name: "eventListeners",
  enabled: !0,
  phase: "write",
  fn: function() {
  },
  effect: rh,
  data: {}
};
function ih(e) {
  var t = e.state, n = e.name;
  t.modifiersData[n] = bu({
    reference: t.rects.reference,
    element: t.rects.popper,
    strategy: "absolute",
    placement: t.placement
  });
}
const sh = {
  name: "popperOffsets",
  enabled: !0,
  phase: "read",
  fn: ih,
  data: {}
};
var ah = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function lh(e) {
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
  var v = a.hasOwnProperty("x"), m = a.hasOwnProperty("y"), k = Ce, b = Ee, E = window;
  if (p) {
    var $ = po(n), S = "clientHeight", y = "clientWidth";
    if ($ === Re(n) && ($ = nn(n), kt($).position !== "static" && c === "absolute" && (S = "scrollHeight", y = "scrollWidth")), $ = $, s === Ee || (s === Ce || s === Ge) && o === Ur) {
      b = qe;
      var x = d && $ === E && E.visualViewport ? E.visualViewport.height : $[S];
      g -= x - r.height, g *= f ? 1 : -1;
    }
    if (s === Ce || (s === Ee || s === qe) && o === Ur) {
      k = Ge;
      var C = d && $ === E && E.visualViewport ? E.visualViewport.width : $[y];
      l -= C - r.width, l *= f ? 1 : -1;
    }
  }
  var W = Object.assign({
    position: c
  }, p && ah), F = i === !0 ? lh({
    x: l,
    y: g
  }) : {
    x: l,
    y: g
  };
  if (l = F.x, g = F.y, f) {
    var D;
    return Object.assign({}, W, (D = {}, D[b] = m ? "0" : "", D[k] = v ? "0" : "", D.transform = (E.devicePixelRatio || 1) <= 1 ? "translate(" + l + "px, " + g + "px)" : "translate3d(" + l + "px, " + g + "px, 0)", D));
  }
  return Object.assign({}, W, (t = {}, t[b] = m ? g + "px" : "", t[k] = v ? l + "px" : "", t.transform = "", t));
}
function ch(e) {
  var t = e.state, n = e.options, r = n.gpuAcceleration, s = r === void 0 ? !0 : r, o = n.adaptive, a = o === void 0 ? !0 : o, c = n.roundOffsets, f = c === void 0 ? !0 : c, p = {
    placement: lt(t.placement),
    variation: Vn(t.placement),
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
const fh = {
  name: "computeStyles",
  enabled: !0,
  phase: "beforeWrite",
  fn: ch,
  data: {}
};
function uh(e) {
  var t = e.state;
  Object.keys(t.elements).forEach(function(n) {
    var r = t.styles[n] || {}, s = t.attributes[n] || {}, o = t.elements[n];
    !Ne(o) || !ft(o) || (Object.assign(o.style, r), Object.keys(s).forEach(function(a) {
      var c = s[a];
      c === !1 ? o.removeAttribute(a) : o.setAttribute(a, c === !0 ? "" : c);
    }));
  });
}
function _h(e) {
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
const ph = {
  name: "applyStyles",
  enabled: !0,
  phase: "write",
  fn: uh,
  effect: _h,
  requires: ["computeStyles"]
};
var dh = [oh, sh, fh, ph], hh = /* @__PURE__ */ nh({
  defaultModifiers: dh
});
function kr(e, t, n) {
  return dn(e, fi(t, n));
}
function vh(e, t, n) {
  var r = kr(e, t, n);
  return r > n ? n : r;
}
var mh = function(t, n) {
  return t = typeof t == "function" ? t(Object.assign({}, n.rects, {
    placement: n.placement
  })) : t, $u(typeof t != "number" ? t : ku(t, ho));
};
function gh(e) {
  var t, n = e.state, r = e.name, s = e.options, o = n.elements.arrow, a = n.modifiersData.popperOffsets, c = lt(n.placement), f = Qs(c), p = [Ce, Ge].indexOf(c) >= 0, i = p ? "height" : "width";
  if (!(!o || !a)) {
    var d = mh(s.padding, n), u = Js(o), l = f === "y" ? Ee : Ce, _ = f === "y" ? qe : Ge, g = n.rects.reference[i] + n.rects.reference[f] - a[f] - n.rects.popper[i], h = a[f] - n.rects.reference[f], v = po(o), m = v ? f === "y" ? v.clientHeight || 0 : v.clientWidth || 0 : 0, k = g / 2 - h / 2, b = d[l], E = m - u[i] - d[_], $ = m / 2 - u[i] / 2 + k, S = kr(b, $, E), y = f;
    n.modifiersData[r] = (t = {}, t[y] = S, t.centerOffset = S - $, t);
  }
}
function yh(e) {
  var t = e.state, n = e.options, r = n.element, s = r === void 0 ? "[data-popper-arrow]" : r;
  s != null && (typeof s == "string" && (s = t.elements.popper.querySelector(s), !s) || !yu(t.elements.popper, s) || (t.elements.arrow = s));
}
const bh = {
  name: "arrow",
  enabled: !0,
  phase: "main",
  fn: gh,
  effect: yh,
  requires: ["popperOffsets"],
  requiresIfExists: ["preventOverflow"]
};
function wh(e, t, n) {
  var r = lt(e), s = [Ce, Ee].indexOf(r) >= 0 ? -1 : 1, o = typeof n == "function" ? n(Object.assign({}, t, {
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
function $h(e) {
  var t = e.state, n = e.options, r = e.name, s = n.offset, o = s === void 0 ? [0, 0] : s, a = gu.reduce(function(i, d) {
    return i[d] = wh(d, t.rects, o), i;
  }, {}), c = a[t.placement], f = c.x, p = c.y;
  t.modifiersData.popperOffsets != null && (t.modifiersData.popperOffsets.x += f, t.modifiersData.popperOffsets.y += p), t.modifiersData[r] = a;
}
const kh = {
  name: "offset",
  enabled: !0,
  phase: "main",
  requires: ["popperOffsets"],
  fn: $h
};
function xh(e) {
  return e === "x" ? "y" : "x";
}
function Sh(e) {
  var t = e.state, n = e.options, r = e.name, s = n.mainAxis, o = s === void 0 ? !0 : s, a = n.altAxis, c = a === void 0 ? !1 : a, f = n.boundary, p = n.rootBoundary, i = n.altBoundary, d = n.padding, u = n.tether, l = u === void 0 ? !0 : u, _ = n.tetherOffset, g = _ === void 0 ? 0 : _, h = ea(t, {
    boundary: f,
    rootBoundary: p,
    padding: d,
    altBoundary: i
  }), v = lt(t.placement), m = Vn(t.placement), k = !m, b = Qs(v), E = xh(b), $ = t.modifiersData.popperOffsets, S = t.rects.reference, y = t.rects.popper, x = typeof g == "function" ? g(Object.assign({}, t.rects, {
    placement: t.placement
  })) : g, C = typeof x == "number" ? {
    mainAxis: x,
    altAxis: x
  } : Object.assign({
    mainAxis: 0,
    altAxis: 0
  }, x), W = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null, F = {
    x: 0,
    y: 0
  };
  if (!!$) {
    if (o) {
      var D, T = b === "y" ? Ee : Ce, O = b === "y" ? qe : Ge, N = b === "y" ? "height" : "width", M = $[b], j = M + h[T], R = M - h[O], U = l ? -y[N] / 2 : 0, G = m === Yn ? S[N] : y[N], z = m === Yn ? -y[N] : -S[N], K = t.elements.arrow, Q = l && K ? Js(K) : {
        width: 0,
        height: 0
      }, L = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : wu(), Y = L[T], X = L[O], q = kr(0, S[N], Q[N]), J = k ? S[N] / 2 - U - q - Y - C.mainAxis : G - q - Y - C.mainAxis, le = k ? -S[N] / 2 + U + q + X + C.mainAxis : z + q + X + C.mainAxis, ae = t.elements.arrow && po(t.elements.arrow), be = ae ? b === "y" ? ae.clientTop || 0 : ae.clientLeft || 0 : 0, Ze = (D = W == null ? void 0 : W[b]) != null ? D : 0, ee = M + J - Ze - be, Et = M + le - Ze, je = kr(l ? fi(j, ee) : j, M, l ? dn(R, Et) : R);
      $[b] = je, F[b] = je - M;
    }
    if (c) {
      var Be, Ct = b === "x" ? Ee : Ce, Qe = b === "x" ? qe : Ge, te = $[E], me = E === "y" ? "height" : "width", Ie = te + h[Ct], Ot = te - h[Qe], Ue = [Ee, Ce].indexOf(v) !== -1, Mt = (Be = W == null ? void 0 : W[E]) != null ? Be : 0, At = Ue ? Ie : te - S[me] - y[me] - Mt + C.altAxis, Dt = Ue ? te + S[me] + y[me] - Mt - C.altAxis : Ot, Tt = l && Ue ? vh(At, te, Dt) : kr(l ? At : Ie, te, l ? Dt : Ot);
      $[E] = Tt, F[E] = Tt - te;
    }
    t.modifiersData[r] = F;
  }
}
const Eh = {
  name: "preventOverflow",
  enabled: !0,
  phase: "main",
  fn: Sh,
  requiresIfExists: ["offset"]
};
var Ch = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function No(e) {
  return e.replace(/left|right|bottom|top/g, function(t) {
    return Ch[t];
  });
}
var Oh = {
  start: "end",
  end: "start"
};
function Tl(e) {
  return e.replace(/start|end/g, function(t) {
    return Oh[t];
  });
}
function Mh(e, t) {
  t === void 0 && (t = {});
  var n = t, r = n.placement, s = n.boundary, o = n.rootBoundary, a = n.padding, c = n.flipVariations, f = n.allowedAutoPlacements, p = f === void 0 ? gu : f, i = Vn(r), d = i ? c ? Cl : Cl.filter(function(_) {
    return Vn(_) === i;
  }) : ho, u = d.filter(function(_) {
    return p.indexOf(_) >= 0;
  });
  u.length === 0 && (u = d);
  var l = u.reduce(function(_, g) {
    return _[g] = ea(e, {
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
function Ah(e) {
  if (lt(e) === Zs)
    return [];
  var t = No(e);
  return [Tl(e), t, Tl(t)];
}
function Dh(e) {
  var t = e.state, n = e.options, r = e.name;
  if (!t.modifiersData[r]._skip) {
    for (var s = n.mainAxis, o = s === void 0 ? !0 : s, a = n.altAxis, c = a === void 0 ? !0 : a, f = n.fallbackPlacements, p = n.padding, i = n.boundary, d = n.rootBoundary, u = n.altBoundary, l = n.flipVariations, _ = l === void 0 ? !0 : l, g = n.allowedAutoPlacements, h = t.options.placement, v = lt(h), m = v === h, k = f || (m || !_ ? [No(h)] : Ah(h)), b = [h].concat(k).reduce(function(Q, L) {
      return Q.concat(lt(L) === Zs ? Mh(t, {
        placement: L,
        boundary: i,
        rootBoundary: d,
        padding: p,
        flipVariations: _,
        allowedAutoPlacements: g
      }) : L);
    }, []), E = t.rects.reference, $ = t.rects.popper, S = /* @__PURE__ */ new Map(), y = !0, x = b[0], C = 0; C < b.length; C++) {
      var W = b[C], F = lt(W), D = Vn(W) === Yn, T = [Ee, qe].indexOf(F) >= 0, O = T ? "width" : "height", N = ea(t, {
        placement: W,
        boundary: i,
        rootBoundary: d,
        altBoundary: u,
        padding: p
      }), M = T ? D ? Ge : Ce : D ? qe : Ee;
      E[O] > $[O] && (M = No(M));
      var j = No(M), R = [];
      if (o && R.push(N[F] <= 0), c && R.push(N[M] <= 0, N[j] <= 0), R.every(function(Q) {
        return Q;
      })) {
        x = W, y = !1;
        break;
      }
      S.set(W, R);
    }
    if (y)
      for (var U = _ ? 3 : 1, G = function(L) {
        var Y = b.find(function(X) {
          var q = S.get(X);
          if (q)
            return q.slice(0, L).every(function(J) {
              return J;
            });
        });
        if (Y)
          return x = Y, "break";
      }, z = U; z > 0; z--) {
        var K = G(z);
        if (K === "break")
          break;
      }
    t.placement !== x && (t.modifiersData[r]._skip = !0, t.placement = x, t.reset = !0);
  }
}
const Th = {
  name: "flip",
  enabled: !0,
  phase: "main",
  fn: Dh,
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
    A(this, "hideLater", () => {
      w(this, Ci).call(this), H(this, On, window.setTimeout(this.hide.bind(this), 100));
    });
    P(this, Ci, () => {
      clearTimeout(w(this, On)), H(this, On, 0);
    });
  }
  get isShown() {
    var n;
    return (n = w(this, ln)) == null ? void 0 : n.classList.contains(this.constructor.CLASS_SHOW);
  }
  get datetimepicker() {
    return w(this, ln) || this._ensureDatetimepicker();
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
    var r;
    return H(this, no, n), this.element.classList.add(this.elementShowClass), (r = this.datetimepicker) == null || r.classList.add(this.constructor.CLASS_SHOW), this.datetimepicker.classList.add("fade"), this._createPopper().update(), !0;
  }
  hide() {
    var n, r;
    return (n = w(this, Fe)) == null || n.destroy(), H(this, Fe, void 0), this.element.classList.remove(this.elementShowClass), (r = w(this, ln)) == null || r.classList.remove(this.constructor.CLASS_SHOW), this.datetimepicker.classList.remove("fade"), !0;
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
    return n.classList.add("arrow", "datetimepicker-arrow"), n.style.setProperty("--arrow-size", `${this._getArrowSize()}px`), n;
  }
  _ensureDatetimepicker() {
    const n = this.constructor.CLASSNAME, r = document.createElement("div");
    return r.classList.add(n), Ed(B(Od, { ...this.options }), r), this.options.arrow && r.prepend(this._createArrow()), document.body.appendChild(r), H(this, ln, r), r;
  }
  _getPopperOptions() {
    const n = this._getArrowSize();
    return {
      modifiers: [
        Eh,
        Th,
        { ...bh, options: {
          padding: n,
          element: ".arrow"
        } },
        {
          ...kh,
          options: {
            offset: [0, n + 3]
          }
        },
        {
          name: "datetimepicker",
          enabled: !0,
          phase: "beforeWrite",
          fn: ({ state: r }) => {
            var o, a;
            const s = ((o = r.placement) == null ? void 0 : o.split("-").shift()) || "";
            (a = this.datetimepicker.querySelector(".arrow")) == null || a.setAttribute("class", `arrow arrow-${s}`), this.element.setAttribute("data-datetimepicker-placement", s);
          }
        }
      ].filter(Boolean),
      placement: this.options.placement,
      strategy: "absolute"
    };
  }
  _createPopper() {
    const n = this._getPopperOptions();
    return w(this, Fe) ? w(this, Fe).setOptions(n) : H(this, Fe, hh(this._getPopperElement(), this.datetimepicker, n)), w(this, Fe);
  }
  _getPopperElement() {
    return w(this, Cn) || H(this, Cn, {
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
Cn = new WeakMap(), On = new WeakMap(), ln = new WeakMap(), Fe = new WeakMap(), no = new WeakMap(), Ci = new WeakMap(), A(it, "NAME", "datetimepicker"), A(it, "CLASSNAME", "datetimepicker"), A(it, "CLASS_SHOW", "show"), A(it, "MENU_SELECTOR", ".form-datetime:not(.disabled):not(:disabled)"), A(it, "DEFAULT", {
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
  const t = e.target, n = t.closest(it.MENU_SELECTOR), r = t.closest(".calendar-bar, .calendar-table-head, .calendar-month-table");
  n ? it.ensure(n).toggle() : r || it.clear({ event: e });
});
const Nh = (e) => {
  const t = document.getElementsByClassName("with-datetimepicker-show")[0];
  if (!t)
    return;
  const n = typeof t.closest == "function" ? t.closest(it.MENU_SELECTOR) : null;
  !n || !e.target.contains(n) || it.clear({ event: e });
};
window.addEventListener("scroll", Nh, !0);
function Lh(e, t, n) {
  if (n) {
    e.setAttribute("class", I(t));
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
var cn, ro, Mn, Lo;
const dt = class extends at {
  constructor() {
    super(...arguments);
    P(this, Mn);
    P(this, cn, 0);
    P(this, ro, void 0);
    A(this, "_handleClick", (n) => {
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
        r.observe(n), H(this, ro, r);
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
    Lh(this.element, [{
      "modal-trans": r,
      "modal-no-backdrop": !s
    }, dt.CLASS_SHOW]), this.element.style.zIndex = `${dt.zIndex++}`, this.adjustPosition(), this.emit("show", this), ne(this, Mn, Lo).call(this, () => {
      this.element.classList.add(dt.CLASS_SHOWN), ne(this, Mn, Lo).call(this, () => {
        this.emit("shown", this);
      });
    }, 50);
  }
  hide() {
    !this.isShown || (this.element.classList.remove(dt.CLASS_SHOWN), this.emit("hide", this), ne(this, Mn, Lo).call(this, () => {
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
let De = dt;
cn = new WeakMap(), ro = new WeakMap(), Mn = new WeakSet(), Lo = function(n, r) {
  w(this, cn) && (clearTimeout(w(this, cn)), H(this, cn, 0)), n && (this.options.animation ? H(this, cn, window.setTimeout(n, r != null ? r : this.options.transTime)) : n());
}, A(De, "NAME", "modal"), A(De, "EVENTS", !0), A(De, "DEFAULT", {
  position: "fit",
  show: !0,
  keyboard: !0,
  animation: !0,
  backdrop: !0,
  responsive: !0,
  transTime: 300
}), A(De, "CLASS_SHOW", "show"), A(De, "CLASS_SHOWN", "in"), A(De, "DISMISS_SELECTOR", '[data-dismiss="modal"]'), A(De, "zIndex", 2e3);
window.addEventListener("resize", () => {
  De.all.forEach((e) => {
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
    return r ? r.setOptions(n) : (r = new De(this._getModalElement(), n), H(this, yt, r)), r;
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
yt = new WeakMap(), A(wn, "NAME", "modalTrigger"), A(wn, "EVENTS", !0), A(wn, "DEFAULT", {
  ...De.DEFAULT,
  type: "static"
}), A(wn, "TOGGLE_SELECTOR", '[data-toggle="modal"]');
window.addEventListener("click", (e) => {
  const n = e.target.closest(wn.TOGGLE_SELECTOR);
  if (n) {
    const r = wn.ensure(n);
    r && r.show();
  }
});
class xu extends wt {
  beforeRender() {
    const t = super.beforeRender();
    return t.className = I(t.className, t.type ? `nav-${t.type}` : "", {
      "nav-stacked": t.stacked
    }), t;
  }
}
A(xu, "NAME", "nav");
class Nl extends Je {
}
A(Nl, "NAME", "nav"), A(Nl, "Component", xu);
var Su, vs, Eu, Ph = [];
function Zt(e, t, n) {
  var r, s, o, a = {};
  for (o in t)
    o == "key" ? r = t[o] : o == "ref" ? s = t[o] : a[o] = t[o];
  if (arguments.length > 2 && (a.children = arguments.length > 3 ? Su.call(arguments, 2) : n), typeof e == "function" && e.defaultProps != null)
    for (o in e.defaultProps)
      a[o] === void 0 && (a[o] = e.defaultProps[o]);
  return Rh(e, a, r, s, null);
}
function Rh(e, t, n, r, s) {
  var o = { type: e, props: t, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: s == null ? ++Eu : s };
  return s == null && vs.vnode != null && vs.vnode(o), o;
}
Su = Ph.slice, vs = { __e: function(e, t, n, r) {
  for (var s, o, a; t = t.__; )
    if ((s = t.__c) && !s.__)
      try {
        if ((o = s.constructor) && o.getDerivedStateFromError != null && (s.setState(o.getDerivedStateFromError(e)), a = s.__d), s.componentDidCatch != null && (s.componentDidCatch(e, r || {}), a = s.__d), a)
          return s.__E = s;
      } catch (c) {
        e = c;
      }
  throw e;
} }, Eu = 0;
var Cu, ms, Ou, Hh = [];
function Ki(e, t, n) {
  var r, s, o, a = {};
  for (o in t)
    o == "key" ? r = t[o] : o == "ref" ? s = t[o] : a[o] = t[o];
  if (arguments.length > 2 && (a.children = arguments.length > 3 ? Cu.call(arguments, 2) : n), typeof e == "function" && e.defaultProps != null)
    for (o in e.defaultProps)
      a[o] === void 0 && (a[o] = e.defaultProps[o]);
  return Wh(e, a, r, s, null);
}
function Wh(e, t, n, r, s) {
  var o = { type: e, props: t, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: s == null ? ++Ou : s };
  return s == null && ms.vnode != null && ms.vnode(o), o;
}
Cu = Hh.slice, ms = { __e: function(e, t, n, r) {
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
function jh({
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
var ta, de, Mu, xr, Ll, Au = {}, Du = [], Bh = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function qt(e, t) {
  for (var n in t)
    e[n] = t[n];
  return e;
}
function Tu(e) {
  var t = e.parentNode;
  t && t.removeChild(e);
}
function Nu(e, t, n) {
  var r, s, o, a = {};
  for (o in t)
    o == "key" ? r = t[o] : o == "ref" ? s = t[o] : a[o] = t[o];
  if (arguments.length > 2 && (a.children = arguments.length > 3 ? ta.call(arguments, 2) : n), typeof e == "function" && e.defaultProps != null)
    for (o in e.defaultProps)
      a[o] === void 0 && (a[o] = e.defaultProps[o]);
  return Po(e, a, r, s, null);
}
function Po(e, t, n, r, s) {
  var o = { type: e, props: t, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: s == null ? ++Mu : s };
  return s == null && de.vnode != null && de.vnode(o), o;
}
function Ih() {
  return { current: null };
}
function na(e) {
  return e.children;
}
function Sr(e, t) {
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
function Lu(e) {
  var t, n;
  if ((e = e.__) != null && e.__c != null) {
    for (e.__e = e.__c.base = null, t = 0; t < e.__k.length; t++)
      if ((n = e.__k[t]) != null && n.__e != null) {
        e.__e = e.__c.base = n.__e;
        break;
      }
    return Lu(e);
  }
}
function Pl(e) {
  (!e.__d && (e.__d = !0) && xr.push(e) && !ui.__r++ || Ll !== de.debounceRendering) && ((Ll = de.debounceRendering) || setTimeout)(ui);
}
function ui() {
  for (var e; ui.__r = xr.length; )
    e = xr.sort(function(t, n) {
      return t.__v.__b - n.__v.__b;
    }), xr = [], e.some(function(t) {
      var n, r, s, o, a, c;
      t.__d && (a = (o = (n = t).__v).__e, (c = n.__P) && (r = [], (s = qt({}, o)).__v = o.__v + 1, Wu(c, o, s, n.__n, c.ownerSVGElement !== void 0, o.__h != null ? [a] : null, r, a == null ? Fr(o) : a, o.__h), Fh(r, o), o.__e != a && Lu(o)));
    });
}
function Pu(e, t, n, r, s, o, a, c, f, p) {
  var i, d, u, l, _, g, h, v = r && r.__k || Du, m = v.length;
  for (n.__k = [], i = 0; i < t.length; i++)
    if ((l = n.__k[i] = (l = t[i]) == null || typeof l == "boolean" ? null : typeof l == "string" || typeof l == "number" || typeof l == "bigint" ? Po(null, l, null, null, l) : Array.isArray(l) ? Po(na, { children: l }, null, null, null) : l.__b > 0 ? Po(l.type, l.props, l.key, l.ref ? l.ref : null, l.__v) : l) != null) {
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
      Wu(e, l, u = u || Au, s, o, a, c, f, p), _ = l.__e, (d = l.ref) && u.ref != d && (h || (h = []), u.ref && h.push(u.ref, null, l), h.push(d, l.__c || _, l)), _ != null ? (g == null && (g = _), typeof l.type == "function" && l.__k === u.__k ? l.__d = f = Ru(l, f, e) : f = Hu(e, l, u, v, _, f), typeof n.type == "function" && (n.__d = f)) : f && u.__e == f && f.parentNode != e && (f = Fr(u));
    }
  for (n.__e = g, i = m; i--; )
    v[i] != null && Bu(v[i], v[i]);
  if (h)
    for (i = 0; i < h.length; i++)
      ju(h[i], h[++i], h[++i]);
}
function Ru(e, t, n) {
  for (var r, s = e.__k, o = 0; s && o < s.length; o++)
    (r = s[o]) && (r.__ = e, t = typeof r.type == "function" ? Ru(r, t, n) : Hu(n, r, r, s, r.__e, t));
  return t;
}
function Hu(e, t, n, r, s, o) {
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
function Uh(e, t, n, r, s) {
  var o;
  for (o in n)
    o === "children" || o === "key" || o in t || _i(e, o, null, n[o], r);
  for (o in t)
    s && typeof t[o] != "function" || o === "children" || o === "key" || o === "value" || o === "checked" || n[o] === t[o] || _i(e, o, t[o], n[o], r);
}
function Rl(e, t, n) {
  t[0] === "-" ? e.setProperty(t, n) : e[t] = n == null ? "" : typeof n != "number" || Bh.test(t) ? n : n + "px";
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
            n && t in n || Rl(e.style, t, "");
        if (n)
          for (t in n)
            r && n[t] === r[t] || Rl(e.style, t, n[t]);
      }
    else if (t[0] === "o" && t[1] === "n")
      o = t !== (t = t.replace(/Capture$/, "")), t = t.toLowerCase() in e ? t.toLowerCase().slice(2) : t.slice(2), e.l || (e.l = {}), e.l[t + o] = n, n ? r || e.addEventListener(t, o ? Wl : Hl, o) : e.removeEventListener(t, o ? Wl : Hl, o);
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
function Hl(e) {
  this.l[e.type + !1](de.event ? de.event(e) : e);
}
function Wl(e) {
  this.l[e.type + !0](de.event ? de.event(e) : e);
}
function Wu(e, t, n, r, s, o, a, c, f) {
  var p, i, d, u, l, _, g, h, v, m, k, b, E, $, S, y = t.type;
  if (t.constructor !== void 0)
    return null;
  n.__h != null && (f = n.__h, c = t.__e = n.__e, t.__h = null, o = [c]), (p = de.__b) && p(t);
  try {
    e:
      if (typeof y == "function") {
        if (h = t.props, v = (p = y.contextType) && r[p.__c], m = p ? v ? v.props.value : p.__ : r, n.__c ? g = (i = t.__c = n.__c).__ = i.__E : ("prototype" in y && y.prototype.render ? t.__c = i = new y(h, m) : (t.__c = i = new Sr(h, m), i.constructor = y, i.render = Yh), v && v.sub(i), i.props = h, i.state || (i.state = {}), i.context = m, i.__n = r, d = i.__d = !0, i.__h = [], i._sb = []), i.__s == null && (i.__s = i.state), y.getDerivedStateFromProps != null && (i.__s == i.state && (i.__s = qt({}, i.__s)), qt(i.__s, y.getDerivedStateFromProps(h, i.__s))), u = i.props, l = i.state, d)
          y.getDerivedStateFromProps == null && i.componentWillMount != null && i.componentWillMount(), i.componentDidMount != null && i.__h.push(i.componentDidMount);
        else {
          if (y.getDerivedStateFromProps == null && h !== u && i.componentWillReceiveProps != null && i.componentWillReceiveProps(h, m), !i.__e && i.shouldComponentUpdate != null && i.shouldComponentUpdate(h, i.__s, m) === !1 || t.__v === n.__v) {
            for (i.props = h, i.state = i.__s, t.__v !== n.__v && (i.__d = !1), i.__v = t, t.__e = n.__e, t.__k = n.__k, t.__k.forEach(function(x) {
              x && (x.__ = t);
            }), k = 0; k < i._sb.length; k++)
              i.__h.push(i._sb[k]);
            i._sb = [], i.__h.length && a.push(i);
            break e;
          }
          i.componentWillUpdate != null && i.componentWillUpdate(h, i.__s, m), i.componentDidUpdate != null && i.__h.push(function() {
            i.componentDidUpdate(u, l, _);
          });
        }
        if (i.context = m, i.props = h, i.__v = t, i.__P = e, b = de.__r, E = 0, "prototype" in y && y.prototype.render) {
          for (i.state = i.__s, i.__d = !1, b && b(t), p = i.render(i.props, i.state, i.context), $ = 0; $ < i._sb.length; $++)
            i.__h.push(i._sb[$]);
          i._sb = [];
        } else
          do
            i.__d = !1, b && b(t), p = i.render(i.props, i.state, i.context), i.state = i.__s;
          while (i.__d && ++E < 25);
        i.state = i.__s, i.getChildContext != null && (r = qt(qt({}, r), i.getChildContext())), d || i.getSnapshotBeforeUpdate == null || (_ = i.getSnapshotBeforeUpdate(u, l)), S = p != null && p.type === na && p.key == null ? p.props.children : p, Pu(e, Array.isArray(S) ? S : [S], t, n, r, s, o, a, c, f), i.base = t.__e, t.__h = null, i.__h.length && a.push(i), g && (i.__E = i.__ = null), i.__e = !1;
      } else
        o == null && t.__v === n.__v ? (t.__k = n.__k, t.__e = n.__e) : t.__e = zh(n.__e, t, n, r, s, o, a, f);
    (p = de.diffed) && p(t);
  } catch (x) {
    t.__v = null, (f || o != null) && (t.__e = c, t.__h = !!f, o[o.indexOf(c)] = null), de.__e(x, t, n);
  }
}
function Fh(e, t) {
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
function zh(e, t, n, r, s, o, a, c) {
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
    if (o = o && ta.call(e.childNodes), p = (d = n.props || Au).dangerouslySetInnerHTML, i = u.dangerouslySetInnerHTML, !c) {
      if (o != null)
        for (d = {}, _ = 0; _ < e.attributes.length; _++)
          d[e.attributes[_].name] = e.attributes[_].value;
      (i || p) && (i && (p && i.__html == p.__html || i.__html === e.innerHTML) || (e.innerHTML = i && i.__html || ""));
    }
    if (Uh(e, u, d, s, c), i)
      t.__k = [];
    else if (_ = t.props.children, Pu(e, Array.isArray(_) ? _ : [_], t, n, r, s && l !== "foreignObject", o, a, o ? o[0] : n.__k && Fr(n, 0), c), o != null)
      for (_ = o.length; _--; )
        o[_] != null && Tu(o[_]);
    c || ("value" in u && (_ = u.value) !== void 0 && (_ !== e.value || l === "progress" && !_ || l === "option" && _ !== d.value) && _i(e, "value", _, d.value, !1), "checked" in u && (_ = u.checked) !== void 0 && _ !== e.checked && _i(e, "checked", _, d.checked, !1));
  }
  return e;
}
function ju(e, t, n) {
  try {
    typeof e == "function" ? e(t) : e.current = t;
  } catch (r) {
    de.__e(r, n);
  }
}
function Bu(e, t, n) {
  var r, s;
  if (de.unmount && de.unmount(e), (r = e.ref) && (r.current && r.current !== e.__e || ju(r, null, t)), (r = e.__c) != null) {
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
      r[s] && Bu(r[s], t, n || typeof e.type != "function");
  n || e.__e == null || Tu(e.__e), e.__ = e.__e = e.__d = void 0;
}
function Yh(e, t, n) {
  return this.constructor(e, n);
}
ta = Du.slice, de = { __e: function(e, t, n, r) {
  for (var s, o, a; t = t.__; )
    if ((s = t.__c) && !s.__)
      try {
        if ((o = s.constructor) && o.getDerivedStateFromError != null && (s.setState(o.getDerivedStateFromError(e)), a = s.__d), s.componentDidCatch != null && (s.componentDidCatch(e, r || {}), a = s.__d), a)
          return s.__E = s;
      } catch (c) {
        e = c;
      }
  throw e;
} }, Mu = 0, Sr.prototype.setState = function(e, t) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = qt({}, this.state), typeof e == "function" && (e = e(qt({}, n), this.props)), e && qt(n, e), e != null && this.__v && (t && this._sb.push(t), Pl(this));
}, Sr.prototype.forceUpdate = function(e) {
  this.__v && (this.__e = !0, e && this.__h.push(e), Pl(this));
}, Sr.prototype.render = na, xr = [], ui.__r = 0;
var ra = "top", Iu = "bottom", pi = "right", zr = "left", Vh = "auto", Uu = [ra, Iu, pi, zr], qh = "start", Gh = "end", Xh = /* @__PURE__ */ [].concat(Uu, [Vh]).reduce(function(e, t) {
  return e.concat([t, t + "-" + qh, t + "-" + Gh]);
}, []);
function Fu(e) {
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
function zu(e) {
  var t = tr(e).Element;
  return e instanceof t || e instanceof Element;
}
function di(e) {
  var t = tr(e).HTMLElement;
  return e instanceof t || e instanceof HTMLElement;
}
function oa(e) {
  if (typeof ShadowRoot > "u")
    return !1;
  var t = tr(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot;
}
var Kh = Math.max, Jh = Math.min, jl = Math.round;
function gs() {
  var e = navigator.userAgentData;
  return e != null && e.brands ? e.brands.map(function(t) {
    return t.brand + "/" + t.version;
  }).join(" ") : navigator.userAgent;
}
function Zh() {
  return !/^((?!chrome|android).)*safari/i.test(gs());
}
function Qh(e, t, n) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  var r = e.getBoundingClientRect(), s = 1, o = 1;
  t && di(e) && (s = e.offsetWidth > 0 && jl(r.width) / e.offsetWidth || 1, o = e.offsetHeight > 0 && jl(r.height) / e.offsetHeight || 1);
  var a = zu(e) ? tr(e) : window, c = a.visualViewport, f = !Zh() && n, p = (r.left + (f && c ? c.offsetLeft : 0)) / s, i = (r.top + (f && c ? c.offsetTop : 0)) / o, d = r.width / s, u = r.height / o;
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
function ev(e) {
  var t = Qh(e), n = e.offsetWidth, r = e.offsetHeight;
  return Math.abs(t.width - n) <= 1 && (n = t.width), Math.abs(t.height - r) <= 1 && (r = t.height), {
    x: e.offsetLeft,
    y: e.offsetTop,
    width: n,
    height: r
  };
}
function tv(e, t) {
  var n = t.getRootNode && t.getRootNode();
  if (e.contains(t))
    return !0;
  if (n && oa(n)) {
    var r = t;
    do {
      if (r && e.isSameNode(r))
        return !0;
      r = r.parentNode || r.host;
    } while (r);
  }
  return !1;
}
function Yr(e) {
  return e ? (e.nodeName || "").toLowerCase() : null;
}
function Vr(e) {
  return tr(e).getComputedStyle(e);
}
function nv(e) {
  return ["table", "td", "th"].indexOf(Yr(e)) >= 0;
}
function rv(e) {
  return ((zu(e) ? e.ownerDocument : e.document) || window.document).documentElement;
}
function ov(e) {
  return Yr(e) === "html" ? e : e.assignedSlot || e.parentNode || (oa(e) ? e.host : null) || rv(e);
}
function Bl(e) {
  return !di(e) || Vr(e).position === "fixed" ? null : e.offsetParent;
}
function iv(e) {
  var t = /firefox/i.test(gs()), n = /Trident/i.test(gs());
  if (n && di(e)) {
    var r = Vr(e);
    if (r.position === "fixed")
      return null;
  }
  var s = ov(e);
  for (oa(s) && (s = s.host); di(s) && ["html", "body"].indexOf(Yr(s)) < 0; ) {
    var o = Vr(s);
    if (o.transform !== "none" || o.perspective !== "none" || o.contain === "paint" || ["transform", "perspective"].indexOf(o.willChange) !== -1 || t && o.willChange === "filter" || t && o.filter && o.filter !== "none")
      return s;
    s = s.parentNode;
  }
  return null;
}
function sv(e) {
  for (var t = tr(e), n = Bl(e); n && nv(n) && Vr(n).position === "static"; )
    n = Bl(n);
  return n && (Yr(n) === "html" || Yr(n) === "body" && Vr(n).position === "static") ? t : n || iv(e) || t;
}
function av(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function lv(e, t, n) {
  return Kh(e, Jh(t, n));
}
function cv() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
function fv(e) {
  return Object.assign({}, cv(), e);
}
function uv(e, t) {
  return t.reduce(function(n, r) {
    return n[r] = e, n;
  }, {});
}
var _v = function(t, n) {
  return t = typeof t == "function" ? t(Object.assign({}, n.rects, {
    placement: n.placement
  })) : t, fv(typeof t != "number" ? t : uv(t, Uu));
};
function pv(e) {
  var t, n = e.state, r = e.name, s = e.options, o = n.elements.arrow, a = n.modifiersData.popperOffsets, c = Fu(n.placement), f = av(c), p = [zr, pi].indexOf(c) >= 0, i = p ? "height" : "width";
  if (!(!o || !a)) {
    var d = _v(s.padding, n), u = ev(o), l = f === "y" ? ra : zr, _ = f === "y" ? Iu : pi, g = n.rects.reference[i] + n.rects.reference[f] - a[f] - n.rects.popper[i], h = a[f] - n.rects.reference[f], v = sv(o), m = v ? f === "y" ? v.clientHeight || 0 : v.clientWidth || 0 : 0, k = g / 2 - h / 2, b = d[l], E = m - u[i] - d[_], $ = m / 2 - u[i] / 2 + k, S = lv(b, $, E), y = f;
    n.modifiersData[r] = (t = {}, t[y] = S, t.centerOffset = S - $, t);
  }
}
function dv(e) {
  var t = e.state, n = e.options, r = n.element, s = r === void 0 ? "[data-popper-arrow]" : r;
  s != null && (typeof s == "string" && (s = t.elements.popper.querySelector(s), !s) || !tv(t.elements.popper, s) || (t.elements.arrow = s));
}
const hv = {
  name: "arrow",
  enabled: !0,
  phase: "main",
  fn: pv,
  effect: dv,
  requires: ["popperOffsets"],
  requiresIfExists: ["preventOverflow"]
};
function vv(e, t, n) {
  var r = Fu(e), s = [zr, ra].indexOf(r) >= 0 ? -1 : 1, o = typeof n == "function" ? n(Object.assign({}, t, {
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
function mv(e) {
  var t = e.state, n = e.options, r = e.name, s = n.offset, o = s === void 0 ? [0, 0] : s, a = Xh.reduce(function(i, d) {
    return i[d] = vv(d, t.rects, o), i;
  }, {}), c = a[t.placement], f = c.x, p = c.y;
  t.modifiersData.popperOffsets != null && (t.modifiersData.popperOffsets.x += f, t.modifiersData.popperOffsets.y += p), t.modifiersData[r] = a;
}
const gv = {
  name: "offset",
  enabled: !0,
  phase: "main",
  requires: ["popperOffsets"],
  fn: mv
};
var Ji, se, Yu, Er, Il, hi = {}, Vu = [], yv = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function Gt(e, t) {
  for (var n in t)
    e[n] = t[n];
  return e;
}
function qu(e) {
  var t = e.parentNode;
  t && t.removeChild(e);
}
function ia(e, t, n) {
  var r, s, o, a = {};
  for (o in t)
    o == "key" ? r = t[o] : o == "ref" ? s = t[o] : a[o] = t[o];
  if (arguments.length > 2 && (a.children = arguments.length > 3 ? Ji.call(arguments, 2) : n), typeof e == "function" && e.defaultProps != null)
    for (o in e.defaultProps)
      a[o] === void 0 && (a[o] = e.defaultProps[o]);
  return Ro(e, a, r, s, null);
}
function Ro(e, t, n, r, s) {
  var o = { type: e, props: t, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: s == null ? ++Yu : s };
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
function Gu(e) {
  var t, n;
  if ((e = e.__) != null && e.__c != null) {
    for (e.__e = e.__c.base = null, t = 0; t < e.__k.length; t++)
      if ((n = e.__k[t]) != null && n.__e != null) {
        e.__e = e.__c.base = n.__e;
        break;
      }
    return Gu(e);
  }
}
function Ul(e) {
  (!e.__d && (e.__d = !0) && Er.push(e) && !vi.__r++ || Il !== se.debounceRendering) && ((Il = se.debounceRendering) || setTimeout)(vi);
}
function vi() {
  for (var e; vi.__r = Er.length; )
    e = Er.sort(function(t, n) {
      return t.__v.__b - n.__v.__b;
    }), Er = [], e.some(function(t) {
      var n, r, s, o, a, c;
      t.__d && (a = (o = (n = t).__v).__e, (c = n.__P) && (r = [], (s = Gt({}, o)).__v = o.__v + 1, sa(c, o, s, n.__n, c.ownerSVGElement !== void 0, o.__h != null ? [a] : null, r, a == null ? qr(o) : a, o.__h), Zu(r, o), o.__e != a && Gu(o)));
    });
}
function Xu(e, t, n, r, s, o, a, c, f, p) {
  var i, d, u, l, _, g, h, v = r && r.__k || Vu, m = v.length;
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
      sa(e, l, u = u || hi, s, o, a, c, f, p), _ = l.__e, (d = l.ref) && u.ref != d && (h || (h = []), u.ref && h.push(u.ref, null, l), h.push(d, l.__c || _, l)), _ != null ? (g == null && (g = _), typeof l.type == "function" && l.__k === u.__k ? l.__d = f = Ku(l, f, e) : f = Ju(e, l, u, v, _, f), typeof n.type == "function" && (n.__d = f)) : f && u.__e == f && f.parentNode != e && (f = qr(u));
    }
  for (n.__e = g, i = m; i--; )
    v[i] != null && e_(v[i], v[i]);
  if (h)
    for (i = 0; i < h.length; i++)
      Qu(h[i], h[++i], h[++i]);
}
function Ku(e, t, n) {
  for (var r, s = e.__k, o = 0; s && o < s.length; o++)
    (r = s[o]) && (r.__ = e, t = typeof r.type == "function" ? Ku(r, t, n) : Ju(n, r, r, s, r.__e, t));
  return t;
}
function Ju(e, t, n, r, s, o) {
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
function bv(e, t, n, r, s) {
  var o;
  for (o in n)
    o === "children" || o === "key" || o in t || mi(e, o, null, n[o], r);
  for (o in t)
    s && typeof t[o] != "function" || o === "children" || o === "key" || o === "value" || o === "checked" || n[o] === t[o] || mi(e, o, t[o], n[o], r);
}
function Fl(e, t, n) {
  t[0] === "-" ? e.setProperty(t, n) : e[t] = n == null ? "" : typeof n != "number" || yv.test(t) ? n : n + "px";
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
            n && t in n || Fl(e.style, t, "");
        if (n)
          for (t in n)
            r && n[t] === r[t] || Fl(e.style, t, n[t]);
      }
    else if (t[0] === "o" && t[1] === "n")
      o = t !== (t = t.replace(/Capture$/, "")), t = t.toLowerCase() in e ? t.toLowerCase().slice(2) : t.slice(2), e.l || (e.l = {}), e.l[t + o] = n, n ? r || e.addEventListener(t, o ? Yl : zl, o) : e.removeEventListener(t, o ? Yl : zl, o);
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
function zl(e) {
  this.l[e.type + !1](se.event ? se.event(e) : e);
}
function Yl(e) {
  this.l[e.type + !0](se.event ? se.event(e) : e);
}
function sa(e, t, n, r, s, o, a, c, f) {
  var p, i, d, u, l, _, g, h, v, m, k, b, E, $, S, y = t.type;
  if (t.constructor !== void 0)
    return null;
  n.__h != null && (f = n.__h, c = t.__e = n.__e, t.__h = null, o = [c]), (p = se.__b) && p(t);
  try {
    e:
      if (typeof y == "function") {
        if (h = t.props, v = (p = y.contextType) && r[p.__c], m = p ? v ? v.props.value : p.__ : r, n.__c ? g = (i = t.__c = n.__c).__ = i.__E : ("prototype" in y && y.prototype.render ? t.__c = i = new y(h, m) : (t.__c = i = new Ho(h, m), i.constructor = y, i.render = $v), v && v.sub(i), i.props = h, i.state || (i.state = {}), i.context = m, i.__n = r, d = i.__d = !0, i.__h = [], i._sb = []), i.__s == null && (i.__s = i.state), y.getDerivedStateFromProps != null && (i.__s == i.state && (i.__s = Gt({}, i.__s)), Gt(i.__s, y.getDerivedStateFromProps(h, i.__s))), u = i.props, l = i.state, d)
          y.getDerivedStateFromProps == null && i.componentWillMount != null && i.componentWillMount(), i.componentDidMount != null && i.__h.push(i.componentDidMount);
        else {
          if (y.getDerivedStateFromProps == null && h !== u && i.componentWillReceiveProps != null && i.componentWillReceiveProps(h, m), !i.__e && i.shouldComponentUpdate != null && i.shouldComponentUpdate(h, i.__s, m) === !1 || t.__v === n.__v) {
            for (i.props = h, i.state = i.__s, t.__v !== n.__v && (i.__d = !1), i.__v = t, t.__e = n.__e, t.__k = n.__k, t.__k.forEach(function(x) {
              x && (x.__ = t);
            }), k = 0; k < i._sb.length; k++)
              i.__h.push(i._sb[k]);
            i._sb = [], i.__h.length && a.push(i);
            break e;
          }
          i.componentWillUpdate != null && i.componentWillUpdate(h, i.__s, m), i.componentDidUpdate != null && i.__h.push(function() {
            i.componentDidUpdate(u, l, _);
          });
        }
        if (i.context = m, i.props = h, i.__v = t, i.__P = e, b = se.__r, E = 0, "prototype" in y && y.prototype.render) {
          for (i.state = i.__s, i.__d = !1, b && b(t), p = i.render(i.props, i.state, i.context), $ = 0; $ < i._sb.length; $++)
            i.__h.push(i._sb[$]);
          i._sb = [];
        } else
          do
            i.__d = !1, b && b(t), p = i.render(i.props, i.state, i.context), i.state = i.__s;
          while (i.__d && ++E < 25);
        i.state = i.__s, i.getChildContext != null && (r = Gt(Gt({}, r), i.getChildContext())), d || i.getSnapshotBeforeUpdate == null || (_ = i.getSnapshotBeforeUpdate(u, l)), S = p != null && p.type === Zi && p.key == null ? p.props.children : p, Xu(e, Array.isArray(S) ? S : [S], t, n, r, s, o, a, c, f), i.base = t.__e, t.__h = null, i.__h.length && a.push(i), g && (i.__E = i.__ = null), i.__e = !1;
      } else
        o == null && t.__v === n.__v ? (t.__k = n.__k, t.__e = n.__e) : t.__e = wv(n.__e, t, n, r, s, o, a, f);
    (p = se.diffed) && p(t);
  } catch (x) {
    t.__v = null, (f || o != null) && (t.__e = c, t.__h = !!f, o[o.indexOf(c)] = null), se.__e(x, t, n);
  }
}
function Zu(e, t) {
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
function wv(e, t, n, r, s, o, a, c) {
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
    if (bv(e, u, d, s, c), i)
      t.__k = [];
    else if (_ = t.props.children, Xu(e, Array.isArray(_) ? _ : [_], t, n, r, s && l !== "foreignObject", o, a, o ? o[0] : n.__k && qr(n, 0), c), o != null)
      for (_ = o.length; _--; )
        o[_] != null && qu(o[_]);
    c || ("value" in u && (_ = u.value) !== void 0 && (_ !== e.value || l === "progress" && !_ || l === "option" && _ !== d.value) && mi(e, "value", _, d.value, !1), "checked" in u && (_ = u.checked) !== void 0 && _ !== e.checked && mi(e, "checked", _, d.checked, !1));
  }
  return e;
}
function Qu(e, t, n) {
  try {
    typeof e == "function" ? e(t) : e.current = t;
  } catch (r) {
    se.__e(r, n);
  }
}
function e_(e, t, n) {
  var r, s;
  if (se.unmount && se.unmount(e), (r = e.ref) && (r.current && r.current !== e.__e || Qu(r, null, t)), (r = e.__c) != null) {
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
      r[s] && e_(r[s], t, n || typeof e.type != "function");
  n || e.__e == null || qu(e.__e), e.__ = e.__e = e.__d = void 0;
}
function $v(e, t, n) {
  return this.constructor(e, n);
}
function kv(e, t, n) {
  var r, s, o;
  se.__ && se.__(e, t), s = (r = typeof n == "function") ? null : n && n.__k || t.__k, o = [], sa(t, e = (!r && n || t).__k = ia(Zi, null, [e]), s || hi, hi, t.ownerSVGElement !== void 0, !r && n ? [n] : s ? null : t.firstChild ? Ji.call(t.childNodes) : null, o, !r && n ? n : s ? s.__e : t.firstChild, r), Zu(o, e);
}
Ji = Vu.slice, se = { __e: function(e, t, n, r) {
  for (var s, o, a; t = t.__; )
    if ((s = t.__c) && !s.__)
      try {
        if ((o = s.constructor) && o.getDerivedStateFromError != null && (s.setState(o.getDerivedStateFromError(e)), a = s.__d), s.componentDidCatch != null && (s.componentDidCatch(e, r || {}), a = s.__d), a)
          return s.__E = s;
      } catch (c) {
        e = c;
      }
  throw e;
} }, Yu = 0, Ho.prototype.setState = function(e, t) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = Gt({}, this.state), typeof e == "function" && (e = e(Gt({}, n), this.props)), e && Gt(n, e), e != null && this.__v && (t && this._sb.push(t), Ul(this));
}, Ho.prototype.forceUpdate = function(e) {
  this.__v && (this.__e = !0, e && this.__h.push(e), Ul(this));
}, Ho.prototype.render = Zi, Er = [], vi.__r = 0;
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
function aa(e) {
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
function t_() {
  return !/^((?!chrome|android).)*safari/i.test(ys());
}
function Gn(e, t, n) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  var r = e.getBoundingClientRect(), s = 1, o = 1;
  t && Le(e) && (s = e.offsetWidth > 0 && qn(r.width) / e.offsetWidth || 1, o = e.offsetHeight > 0 && qn(r.height) / e.offsetHeight || 1);
  var a = gn(e) ? He(e) : window, c = a.visualViewport, f = !t_() && n, p = (r.left + (f && c ? c.offsetLeft : 0)) / s, i = (r.top + (f && c ? c.offsetTop : 0)) / o, d = r.width / s, u = r.height / o;
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
function la(e) {
  var t = He(e), n = t.pageXOffset, r = t.pageYOffset;
  return {
    scrollLeft: n,
    scrollTop: r
  };
}
function xv(e) {
  return {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  };
}
function Sv(e) {
  return e === He(e) || !Le(e) ? la(e) : xv(e);
}
function ut(e) {
  return e ? (e.nodeName || "").toLowerCase() : null;
}
function rn(e) {
  return ((gn(e) ? e.ownerDocument : e.document) || window.document).documentElement;
}
function ca(e) {
  return Gn(rn(e)).left + la(e).scrollLeft;
}
function xt(e) {
  return He(e).getComputedStyle(e);
}
function fa(e) {
  var t = xt(e), n = t.overflow, r = t.overflowX, s = t.overflowY;
  return /auto|scroll|overlay|hidden/.test(n + s + r);
}
function Ev(e) {
  var t = e.getBoundingClientRect(), n = qn(t.width) / e.offsetWidth || 1, r = qn(t.height) / e.offsetHeight || 1;
  return n !== 1 || r !== 1;
}
function Cv(e, t, n) {
  n === void 0 && (n = !1);
  var r = Le(t), s = Le(t) && Ev(t), o = rn(t), a = Gn(e, s, n), c = {
    scrollLeft: 0,
    scrollTop: 0
  }, f = {
    x: 0,
    y: 0
  };
  return (r || !r && !n) && ((ut(t) !== "body" || fa(o)) && (c = Sv(t)), Le(t) ? (f = Gn(t, !0), f.x += t.clientLeft, f.y += t.clientTop) : o && (f.x = ca(o))), {
    x: a.left + c.scrollLeft - f.x,
    y: a.top + c.scrollTop - f.y,
    width: a.width,
    height: a.height
  };
}
function n_(e) {
  var t = Gn(e), n = e.offsetWidth, r = e.offsetHeight;
  return Math.abs(t.width - n) <= 1 && (n = t.width), Math.abs(t.height - r) <= 1 && (r = t.height), {
    x: e.offsetLeft,
    y: e.offsetTop,
    width: n,
    height: r
  };
}
function Qi(e) {
  return ut(e) === "html" ? e : e.assignedSlot || e.parentNode || (aa(e) ? e.host : null) || rn(e);
}
function r_(e) {
  return ["html", "body", "#document"].indexOf(ut(e)) >= 0 ? e.ownerDocument.body : Le(e) && fa(e) ? e : r_(Qi(e));
}
function Cr(e, t) {
  var n;
  t === void 0 && (t = []);
  var r = r_(e), s = r === ((n = e.ownerDocument) == null ? void 0 : n.body), o = He(r), a = s ? [o].concat(o.visualViewport || [], fa(r) ? r : []) : r, c = t.concat(a);
  return s ? c : c.concat(Cr(Qi(a)));
}
function Ov(e) {
  return ["table", "td", "th"].indexOf(ut(e)) >= 0;
}
function Vl(e) {
  return !Le(e) || xt(e).position === "fixed" ? null : e.offsetParent;
}
function Mv(e) {
  var t = /firefox/i.test(ys()), n = /Trident/i.test(ys());
  if (n && Le(e)) {
    var r = xt(e);
    if (r.position === "fixed")
      return null;
  }
  var s = Qi(e);
  for (aa(s) && (s = s.host); Le(s) && ["html", "body"].indexOf(ut(s)) < 0; ) {
    var o = xt(s);
    if (o.transform !== "none" || o.perspective !== "none" || o.contain === "paint" || ["transform", "perspective"].indexOf(o.willChange) !== -1 || t && o.willChange === "filter" || t && o.filter && o.filter !== "none")
      return s;
    s = s.parentNode;
  }
  return null;
}
function es(e) {
  for (var t = He(e), n = Vl(e); n && Ov(n) && xt(n).position === "static"; )
    n = Vl(n);
  return n && (ut(n) === "html" || ut(n) === "body" && xt(n).position === "static") ? t : n || Mv(e) || t;
}
var Ve = "top", _t = "bottom", tn = "right", $t = "left", ua = "auto", ts = [Ve, _t, tn, $t], Xn = "start", Gr = "end", Av = "clippingParents", o_ = "viewport", or = "popper", Dv = "reference", ql = /* @__PURE__ */ ts.reduce(function(e, t) {
  return e.concat([t + "-" + Xn, t + "-" + Gr]);
}, []), Tv = /* @__PURE__ */ [].concat(ts, [ua]).reduce(function(e, t) {
  return e.concat([t, t + "-" + Xn, t + "-" + Gr]);
}, []), Nv = "beforeRead", Lv = "read", Pv = "afterRead", Rv = "beforeMain", Hv = "main", Wv = "afterMain", jv = "beforeWrite", Bv = "write", Iv = "afterWrite", Uv = [Nv, Lv, Pv, Rv, Hv, Wv, jv, Bv, Iv];
function Fv(e) {
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
function zv(e) {
  var t = Fv(e);
  return Uv.reduce(function(n, r) {
    return n.concat(t.filter(function(s) {
      return s.phase === r;
    }));
  }, []);
}
function Yv(e) {
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
function Vv(e) {
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
function qv(e, t) {
  var n = He(e), r = rn(e), s = n.visualViewport, o = r.clientWidth, a = r.clientHeight, c = 0, f = 0;
  if (s) {
    o = s.width, a = s.height;
    var p = t_();
    (p || !p && t === "fixed") && (c = s.offsetLeft, f = s.offsetTop);
  }
  return {
    width: o,
    height: a,
    x: c + ca(e),
    y: f
  };
}
function Gv(e) {
  var t, n = rn(e), r = la(e), s = (t = e.ownerDocument) == null ? void 0 : t.body, o = hn(n.scrollWidth, n.clientWidth, s ? s.scrollWidth : 0, s ? s.clientWidth : 0), a = hn(n.scrollHeight, n.clientHeight, s ? s.scrollHeight : 0, s ? s.clientHeight : 0), c = -r.scrollLeft + ca(e), f = -r.scrollTop;
  return xt(s || n).direction === "rtl" && (c += hn(n.clientWidth, s ? s.clientWidth : 0) - o), {
    width: o,
    height: a,
    x: c,
    y: f
  };
}
function Xv(e, t) {
  var n = t.getRootNode && t.getRootNode();
  if (e.contains(t))
    return !0;
  if (n && aa(n)) {
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
function Kv(e, t) {
  var n = Gn(e, !1, t === "fixed");
  return n.top = n.top + e.clientTop, n.left = n.left + e.clientLeft, n.bottom = n.top + e.clientHeight, n.right = n.left + e.clientWidth, n.width = e.clientWidth, n.height = e.clientHeight, n.x = n.left, n.y = n.top, n;
}
function Gl(e, t, n) {
  return t === o_ ? bs(qv(e, n)) : gn(t) ? Kv(t, n) : bs(Gv(rn(e)));
}
function Jv(e) {
  var t = Cr(Qi(e)), n = ["absolute", "fixed"].indexOf(xt(e).position) >= 0, r = n && Le(e) ? es(e) : e;
  return gn(r) ? t.filter(function(s) {
    return gn(s) && Xv(s, r) && ut(s) !== "body";
  }) : [];
}
function Zv(e, t, n, r) {
  var s = t === "clippingParents" ? Jv(e) : [].concat(t), o = [].concat(s, [n]), a = o[0], c = o.reduce(function(f, p) {
    var i = Gl(e, p, r);
    return f.top = hn(i.top, f.top), f.right = gi(i.right, f.right), f.bottom = gi(i.bottom, f.bottom), f.left = hn(i.left, f.left), f;
  }, Gl(e, a, r));
  return c.width = c.right - c.left, c.height = c.bottom - c.top, c.x = c.left, c.y = c.top, c;
}
function Kn(e) {
  return e.split("-")[1];
}
function i_(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function s_(e) {
  var t = e.reference, n = e.element, r = e.placement, s = r ? Qt(r) : null, o = r ? Kn(r) : null, a = t.x + t.width / 2 - n.width / 2, c = t.y + t.height / 2 - n.height / 2, f;
  switch (s) {
    case Ve:
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
  var p = s ? i_(s) : null;
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
function a_() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
function Qv(e) {
  return Object.assign({}, a_(), e);
}
function em(e, t) {
  return t.reduce(function(n, r) {
    return n[r] = e, n;
  }, {});
}
function _a(e, t) {
  t === void 0 && (t = {});
  var n = t, r = n.placement, s = r === void 0 ? e.placement : r, o = n.strategy, a = o === void 0 ? e.strategy : o, c = n.boundary, f = c === void 0 ? Av : c, p = n.rootBoundary, i = p === void 0 ? o_ : p, d = n.elementContext, u = d === void 0 ? or : d, l = n.altBoundary, _ = l === void 0 ? !1 : l, g = n.padding, h = g === void 0 ? 0 : g, v = Qv(typeof h != "number" ? h : em(h, ts)), m = u === or ? Dv : or, k = e.rects.popper, b = e.elements[_ ? m : u], E = Zv(gn(b) ? b : b.contextElement || rn(e.elements.popper), f, i, a), $ = Gn(e.elements.reference), S = s_({
    reference: $,
    element: k,
    strategy: "absolute",
    placement: s
  }), y = bs(Object.assign({}, k, S)), x = u === or ? y : $, C = {
    top: E.top - x.top + v.top,
    bottom: x.bottom - E.bottom + v.bottom,
    left: E.left - x.left + v.left,
    right: x.right - E.right + v.right
  }, W = e.modifiersData.offset;
  if (u === or && W) {
    var F = W[s];
    Object.keys(C).forEach(function(D) {
      var T = [tn, _t].indexOf(D) >= 0 ? 1 : -1, O = [Ve, _t].indexOf(D) >= 0 ? "y" : "x";
      C[D] += F[O] * T;
    });
  }
  return C;
}
var Xl = {
  placement: "bottom",
  modifiers: [],
  strategy: "absolute"
};
function Kl() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return !t.some(function(r) {
    return !(r && typeof r.getBoundingClientRect == "function");
  });
}
function tm(e) {
  e === void 0 && (e = {});
  var t = e, n = t.defaultModifiers, r = n === void 0 ? [] : n, s = t.defaultOptions, o = s === void 0 ? Xl : s;
  return function(c, f, p) {
    p === void 0 && (p = o);
    var i = {
      placement: "bottom",
      orderedModifiers: [],
      options: Object.assign({}, Xl, o),
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
        var k = zv(Vv([].concat(r, i.options.modifiers)));
        return i.orderedModifiers = k.filter(function(b) {
          return b.enabled;
        }), _(), l.update();
      },
      forceUpdate: function() {
        if (!u) {
          var v = i.elements, m = v.reference, k = v.popper;
          if (!!Kl(m, k)) {
            i.rects = {
              reference: Cv(m, es(k), i.options.strategy === "fixed"),
              popper: n_(k)
            }, i.reset = !1, i.placement = i.options.placement, i.orderedModifiers.forEach(function(C) {
              return i.modifiersData[C.name] = Object.assign({}, C.data);
            });
            for (var b = 0; b < i.orderedModifiers.length; b++) {
              if (i.reset === !0) {
                i.reset = !1, b = -1;
                continue;
              }
              var E = i.orderedModifiers[b], $ = E.fn, S = E.options, y = S === void 0 ? {} : S, x = E.name;
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
      update: Yv(function() {
        return new Promise(function(h) {
          l.forceUpdate(), h(i);
        });
      }),
      destroy: function() {
        g(), u = !0;
      }
    };
    if (!Kl(c, f))
      return l;
    l.setOptions(p).then(function(h) {
      !u && p.onFirstUpdate && p.onFirstUpdate(h);
    });
    function _() {
      i.orderedModifiers.forEach(function(h) {
        var v = h.name, m = h.options, k = m === void 0 ? {} : m, b = h.effect;
        if (typeof b == "function") {
          var E = b({
            state: i,
            name: v,
            instance: l,
            options: k
          }), $ = function() {
          };
          d.push(E || $);
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
function nm(e) {
  var t = e.state, n = e.instance, r = e.options, s = r.scroll, o = s === void 0 ? !0 : s, a = r.resize, c = a === void 0 ? !0 : a, f = He(t.elements.popper), p = [].concat(t.scrollParents.reference, t.scrollParents.popper);
  return o && p.forEach(function(i) {
    i.addEventListener("scroll", n.update, wo);
  }), c && f.addEventListener("resize", n.update, wo), function() {
    o && p.forEach(function(i) {
      i.removeEventListener("scroll", n.update, wo);
    }), c && f.removeEventListener("resize", n.update, wo);
  };
}
const rm = {
  name: "eventListeners",
  enabled: !0,
  phase: "write",
  fn: function() {
  },
  effect: nm,
  data: {}
};
function om(e) {
  var t = e.state, n = e.name;
  t.modifiersData[n] = s_({
    reference: t.rects.reference,
    element: t.rects.popper,
    strategy: "absolute",
    placement: t.placement
  });
}
const im = {
  name: "popperOffsets",
  enabled: !0,
  phase: "read",
  fn: om,
  data: {}
};
var sm = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function am(e) {
  var t = e.x, n = e.y, r = window, s = r.devicePixelRatio || 1;
  return {
    x: qn(t * s) / s || 0,
    y: qn(n * s) / s || 0
  };
}
function Jl(e) {
  var t, n = e.popper, r = e.popperRect, s = e.placement, o = e.variation, a = e.offsets, c = e.position, f = e.gpuAcceleration, p = e.adaptive, i = e.roundOffsets, d = e.isFixed, u = a.x, l = u === void 0 ? 0 : u, _ = a.y, g = _ === void 0 ? 0 : _, h = typeof i == "function" ? i({
    x: l,
    y: g
  }) : {
    x: l,
    y: g
  };
  l = h.x, g = h.y;
  var v = a.hasOwnProperty("x"), m = a.hasOwnProperty("y"), k = $t, b = Ve, E = window;
  if (p) {
    var $ = es(n), S = "clientHeight", y = "clientWidth";
    if ($ === He(n) && ($ = rn(n), xt($).position !== "static" && c === "absolute" && (S = "scrollHeight", y = "scrollWidth")), $ = $, s === Ve || (s === $t || s === tn) && o === Gr) {
      b = _t;
      var x = d && $ === E && E.visualViewport ? E.visualViewport.height : $[S];
      g -= x - r.height, g *= f ? 1 : -1;
    }
    if (s === $t || (s === Ve || s === _t) && o === Gr) {
      k = tn;
      var C = d && $ === E && E.visualViewport ? E.visualViewport.width : $[y];
      l -= C - r.width, l *= f ? 1 : -1;
    }
  }
  var W = Object.assign({
    position: c
  }, p && sm), F = i === !0 ? am({
    x: l,
    y: g
  }) : {
    x: l,
    y: g
  };
  if (l = F.x, g = F.y, f) {
    var D;
    return Object.assign({}, W, (D = {}, D[b] = m ? "0" : "", D[k] = v ? "0" : "", D.transform = (E.devicePixelRatio || 1) <= 1 ? "translate(" + l + "px, " + g + "px)" : "translate3d(" + l + "px, " + g + "px, 0)", D));
  }
  return Object.assign({}, W, (t = {}, t[b] = m ? g + "px" : "", t[k] = v ? l + "px" : "", t.transform = "", t));
}
function lm(e) {
  var t = e.state, n = e.options, r = n.gpuAcceleration, s = r === void 0 ? !0 : r, o = n.adaptive, a = o === void 0 ? !0 : o, c = n.roundOffsets, f = c === void 0 ? !0 : c, p = {
    placement: Qt(t.placement),
    variation: Kn(t.placement),
    popper: t.elements.popper,
    popperRect: t.rects.popper,
    gpuAcceleration: s,
    isFixed: t.options.strategy === "fixed"
  };
  t.modifiersData.popperOffsets != null && (t.styles.popper = Object.assign({}, t.styles.popper, Jl(Object.assign({}, p, {
    offsets: t.modifiersData.popperOffsets,
    position: t.options.strategy,
    adaptive: a,
    roundOffsets: f
  })))), t.modifiersData.arrow != null && (t.styles.arrow = Object.assign({}, t.styles.arrow, Jl(Object.assign({}, p, {
    offsets: t.modifiersData.arrow,
    position: "absolute",
    adaptive: !1,
    roundOffsets: f
  })))), t.attributes.popper = Object.assign({}, t.attributes.popper, {
    "data-popper-placement": t.placement
  });
}
const cm = {
  name: "computeStyles",
  enabled: !0,
  phase: "beforeWrite",
  fn: lm,
  data: {}
};
function fm(e) {
  var t = e.state;
  Object.keys(t.elements).forEach(function(n) {
    var r = t.styles[n] || {}, s = t.attributes[n] || {}, o = t.elements[n];
    !Le(o) || !ut(o) || (Object.assign(o.style, r), Object.keys(s).forEach(function(a) {
      var c = s[a];
      c === !1 ? o.removeAttribute(a) : o.setAttribute(a, c === !0 ? "" : c);
    }));
  });
}
function um(e) {
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
const _m = {
  name: "applyStyles",
  enabled: !0,
  phase: "write",
  fn: fm,
  effect: um,
  requires: ["computeStyles"]
};
var pm = [rm, im, cm, _m], l_ = /* @__PURE__ */ tm({
  defaultModifiers: pm
});
function dm(e) {
  return e === "x" ? "y" : "x";
}
function Wo(e, t, n) {
  return hn(e, gi(t, n));
}
function hm(e, t, n) {
  var r = Wo(e, t, n);
  return r > n ? n : r;
}
function vm(e) {
  var t = e.state, n = e.options, r = e.name, s = n.mainAxis, o = s === void 0 ? !0 : s, a = n.altAxis, c = a === void 0 ? !1 : a, f = n.boundary, p = n.rootBoundary, i = n.altBoundary, d = n.padding, u = n.tether, l = u === void 0 ? !0 : u, _ = n.tetherOffset, g = _ === void 0 ? 0 : _, h = _a(t, {
    boundary: f,
    rootBoundary: p,
    padding: d,
    altBoundary: i
  }), v = Qt(t.placement), m = Kn(t.placement), k = !m, b = i_(v), E = dm(b), $ = t.modifiersData.popperOffsets, S = t.rects.reference, y = t.rects.popper, x = typeof g == "function" ? g(Object.assign({}, t.rects, {
    placement: t.placement
  })) : g, C = typeof x == "number" ? {
    mainAxis: x,
    altAxis: x
  } : Object.assign({
    mainAxis: 0,
    altAxis: 0
  }, x), W = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null, F = {
    x: 0,
    y: 0
  };
  if (!!$) {
    if (o) {
      var D, T = b === "y" ? Ve : $t, O = b === "y" ? _t : tn, N = b === "y" ? "height" : "width", M = $[b], j = M + h[T], R = M - h[O], U = l ? -y[N] / 2 : 0, G = m === Xn ? S[N] : y[N], z = m === Xn ? -y[N] : -S[N], K = t.elements.arrow, Q = l && K ? n_(K) : {
        width: 0,
        height: 0
      }, L = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : a_(), Y = L[T], X = L[O], q = Wo(0, S[N], Q[N]), J = k ? S[N] / 2 - U - q - Y - C.mainAxis : G - q - Y - C.mainAxis, le = k ? -S[N] / 2 + U + q + X + C.mainAxis : z + q + X + C.mainAxis, ae = t.elements.arrow && es(t.elements.arrow), be = ae ? b === "y" ? ae.clientTop || 0 : ae.clientLeft || 0 : 0, Ze = (D = W == null ? void 0 : W[b]) != null ? D : 0, ee = M + J - Ze - be, Et = M + le - Ze, je = Wo(l ? gi(j, ee) : j, M, l ? hn(R, Et) : R);
      $[b] = je, F[b] = je - M;
    }
    if (c) {
      var Be, Ct = b === "x" ? Ve : $t, Qe = b === "x" ? _t : tn, te = $[E], me = E === "y" ? "height" : "width", Ie = te + h[Ct], Ot = te - h[Qe], Ue = [Ve, $t].indexOf(v) !== -1, Mt = (Be = W == null ? void 0 : W[E]) != null ? Be : 0, At = Ue ? Ie : te - S[me] - y[me] - Mt + C.altAxis, Dt = Ue ? te + S[me] + y[me] - Mt - C.altAxis : Ot, Tt = l && Ue ? hm(At, te, Dt) : Wo(l ? At : Ie, te, l ? Dt : Ot);
      $[E] = Tt, F[E] = Tt - te;
    }
    t.modifiersData[r] = F;
  }
}
const ws = {
  name: "preventOverflow",
  enabled: !0,
  phase: "main",
  fn: vm,
  requiresIfExists: ["offset"]
};
var mm = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function jo(e) {
  return e.replace(/left|right|bottom|top/g, function(t) {
    return mm[t];
  });
}
var gm = {
  start: "end",
  end: "start"
};
function Zl(e) {
  return e.replace(/start|end/g, function(t) {
    return gm[t];
  });
}
function ym(e, t) {
  t === void 0 && (t = {});
  var n = t, r = n.placement, s = n.boundary, o = n.rootBoundary, a = n.padding, c = n.flipVariations, f = n.allowedAutoPlacements, p = f === void 0 ? Tv : f, i = Kn(r), d = i ? c ? ql : ql.filter(function(_) {
    return Kn(_) === i;
  }) : ts, u = d.filter(function(_) {
    return p.indexOf(_) >= 0;
  });
  u.length === 0 && (u = d);
  var l = u.reduce(function(_, g) {
    return _[g] = _a(e, {
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
function bm(e) {
  if (Qt(e) === ua)
    return [];
  var t = jo(e);
  return [Zl(e), t, Zl(t)];
}
function wm(e) {
  var t = e.state, n = e.options, r = e.name;
  if (!t.modifiersData[r]._skip) {
    for (var s = n.mainAxis, o = s === void 0 ? !0 : s, a = n.altAxis, c = a === void 0 ? !0 : a, f = n.fallbackPlacements, p = n.padding, i = n.boundary, d = n.rootBoundary, u = n.altBoundary, l = n.flipVariations, _ = l === void 0 ? !0 : l, g = n.allowedAutoPlacements, h = t.options.placement, v = Qt(h), m = v === h, k = f || (m || !_ ? [jo(h)] : bm(h)), b = [h].concat(k).reduce(function(Q, L) {
      return Q.concat(Qt(L) === ua ? ym(t, {
        placement: L,
        boundary: i,
        rootBoundary: d,
        padding: p,
        flipVariations: _,
        allowedAutoPlacements: g
      }) : L);
    }, []), E = t.rects.reference, $ = t.rects.popper, S = /* @__PURE__ */ new Map(), y = !0, x = b[0], C = 0; C < b.length; C++) {
      var W = b[C], F = Qt(W), D = Kn(W) === Xn, T = [Ve, _t].indexOf(F) >= 0, O = T ? "width" : "height", N = _a(t, {
        placement: W,
        boundary: i,
        rootBoundary: d,
        altBoundary: u,
        padding: p
      }), M = T ? D ? tn : $t : D ? _t : Ve;
      E[O] > $[O] && (M = jo(M));
      var j = jo(M), R = [];
      if (o && R.push(N[F] <= 0), c && R.push(N[M] <= 0, N[j] <= 0), R.every(function(Q) {
        return Q;
      })) {
        x = W, y = !1;
        break;
      }
      S.set(W, R);
    }
    if (y)
      for (var U = _ ? 3 : 1, G = function(L) {
        var Y = b.find(function(X) {
          var q = S.get(X);
          if (q)
            return q.slice(0, L).every(function(J) {
              return J;
            });
        });
        if (Y)
          return x = Y, "break";
      }, z = U; z > 0; z--) {
        var K = G(z);
        if (K === "break")
          break;
      }
    t.placement !== x && (t.modifiersData[r]._skip = !0, t.placement = x, t.reset = !0);
  }
}
const c_ = {
  name: "flip",
  enabled: !0,
  phase: "main",
  fn: wm,
  requiresIfExists: ["offset"],
  data: {
    _skip: !1
  }
};
function $m(e) {
  return e.button === 2;
}
var Pt;
class km extends Hs {
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
      modifiers: [ws, c_],
      placement: "right-start"
    };
  }
  _getPopperElement() {
    var n;
    return (n = this.ref.current) == null ? void 0 : n.parentElement;
  }
  _createPopper() {
    const n = this._getPopperOptions();
    return w(this, Pt) ? w(this, Pt).setOptions(n) : this.ref.current && H(this, Pt, l_(this._getPopperElement(), this.ref.current, n)), w(this, Pt);
  }
  afterRender(n) {
    super.afterRender(n), this.props.controlledMenu && this._createPopper();
  }
  renderToggleIcon() {
    return /* @__PURE__ */ ia("span", {
      class: "contextmenu-toggle-icon caret-right"
    });
  }
}
Pt = new WeakMap();
var Rt, Te, An, oo;
class xe extends at {
  constructor() {
    super(...arguments);
    P(this, Rt, void 0);
    P(this, Te, void 0);
    P(this, An, void 0);
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
    return w(this, Te) ? w(this, Te) : this._createPopper();
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
    return H(this, oo, n), this.emit("show", { menu: this, trigger: this.trigger }).defaultPrevented || this.isDynamic && !this._renderMenu() ? !1 : (this.menu.classList.add(this.constructor.CLASS_SHOW), this._createPopper().update(), this.emit("shown", this), !0);
  }
  hide() {
    var r, s;
    return this.emit("hide", this).defaultPrevented ? !1 : ((r = w(this, Te)) == null || r.destroy(), H(this, Te, void 0), (s = w(this, Rt)) == null || s.classList.remove(this.constructor.CLASS_SHOW), this.emit("hidden", this), !0);
  }
  toggle(n) {
    return this.isShown ? this.hide() : this.show(n);
  }
  destroy() {
    var n, r;
    (n = w(this, Te)) == null || n.destroy(), super.destroy(), (r = w(this, Rt)) == null || r.remove();
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
    return H(this, Rt, s), s;
  }
  _getPopperOptions() {
    const { flip: n, preventOverflow: r, modifiers: s = [] } = this.options;
    return {
      modifiers: [
        r ? typeof r == "object" ? { ...ws, options: r } : ws : null,
        n ? c_ : null,
        ...s
      ].filter(Boolean),
      placement: this.options.placement,
      strategy: this.options.strategy
    };
  }
  _createPopper() {
    const n = this._getPopperOptions();
    return w(this, Te) ? w(this, Te).setOptions(n) : H(this, Te, l_(this._getPopperElement(), this.menu, n)), w(this, Te);
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
    return !n || this.emit("updateMenu", { menu: n, trigger: this.trigger, contextmenu: this }).defaultPrevented ? !1 : (kv(ia(km, n), this.menu), !0);
  }
  _getPopperElement() {
    return w(this, An) || H(this, An, {
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
    }), w(this, An);
  }
  static clear(n) {
    var f, p;
    n instanceof Event && (n = { event: n });
    const { event: r, exclude: s, ignoreSelector: o = ".not-hide-menu" } = n || {};
    if (r && o && ((p = (f = r.target).closest) == null ? void 0 : p.call(f, o)) || r && $m(r))
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
Rt = new WeakMap(), Te = new WeakMap(), An = new WeakMap(), oo = new WeakMap(), A(xe, "NAME", "contextmenu"), A(xe, "EVENTS", !0), A(xe, "DEFAULT", {
  placement: "bottom-start",
  strategy: "fixed",
  flip: !0,
  preventOverflow: !0
}), A(xe, "MENU_CLASS", "contextmenu"), A(xe, "CLASS_SHOW", "show"), A(xe, "MENU_SELECTOR", '[data-toggle="contextmenu"]:not(.disabled):not(:disabled)');
document.addEventListener("contextmenu", (e) => {
  const t = e.target;
  if (t.closest(`.${xe.MENU_CLASS}`))
    return;
  const n = t.closest(xe.MENU_SELECTOR);
  n && (xe.ensure(n).show(e), e.preventDefault());
});
document.addEventListener("click", xe.clear.bind(xe));
var Dn, Tn, Nn, Oi, f_;
const Ea = class extends xe {
  constructor() {
    super(...arguments);
    P(this, Oi);
    P(this, Dn, !1);
    P(this, Tn, 0);
    A(this, "hideLater", () => {
      w(this, Nn).call(this), H(this, Tn, window.setTimeout(this.hide.bind(this), 100));
    });
    P(this, Nn, () => {
      clearTimeout(w(this, Tn)), H(this, Tn, 0);
    });
  }
  get isHover() {
    return this.options.trigger === "hover";
  }
  get elementShowClass() {
    return `with-${this.constructor.NAME}-show`;
  }
  show(n, r) {
    (r == null ? void 0 : r.clearOthers) !== !1 && Ea.clear({ event: r == null ? void 0 : r.event, exclude: [this.element] });
    const s = super.show(n);
    return s && (!w(this, Dn) && this.isHover && ne(this, Oi, f_).call(this), this.element.classList.add(this.elementShowClass)), s;
  }
  hide() {
    const n = super.hide();
    return n && this.element.classList.remove(this.elementShowClass), n;
  }
  toggle(n, r) {
    return this.isShown ? this.hide() : this.show(n, { event: n, ...r });
  }
  destroy() {
    w(this, Dn) && (this.element.removeEventListener("mouseleave", this.hideLater), this.menu.removeEventListener("mouseenter", w(this, Nn)), this.menu.removeEventListener("mouseleave", this.hideLater)), super.destroy();
  }
  _getArrowSize() {
    const { arrow: n } = this.options;
    return n ? typeof n == "number" ? n : 5 : 0;
  }
  _getPopperOptions() {
    var s;
    const n = super._getPopperOptions(), r = this._getArrowSize();
    return r && n.modifiers.push({ ...hv, options: {
      padding: r,
      element: ".arrow"
    } }, {
      ...gv,
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
let we = Ea;
Dn = new WeakMap(), Tn = new WeakMap(), Nn = new WeakMap(), Oi = new WeakSet(), f_ = function() {
  const { menu: n } = this;
  n.addEventListener("mouseenter", w(this, Nn)), n.addEventListener("mouseleave", this.hideLater), this.element.addEventListener("mouseleave", this.hideLater), H(this, Dn, !0);
}, A(we, "NAME", "dropdown"), A(we, "MENU_CLASS", "dropdown-menu"), A(we, "MENU_SELECTOR", '[data-toggle="dropdown"]:not(.disabled):not(:disabled)'), A(we, "DEFAULT", {
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
const xm = (e) => {
  const t = document.getElementsByClassName("with-dropdown-show")[0];
  if (!t)
    return;
  const n = typeof t.closest == "function" ? t.closest(we.MENU_SELECTOR) : null;
  !n || !e.target.contains(n) || we.clear({ event: e });
};
window.addEventListener("scroll", xm, !0);
var io, Ln;
class Sm extends Sr {
  constructor(n) {
    var r;
    super(n);
    P(this, io, void 0);
    P(this, Ln, Ih());
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
    }), H(this, io, we.ensure(this.triggerElement, {
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
      className: I("dropdown", n),
      children: typeof r == "function" ? r(this.state) : r,
      ...o,
      "data-toggle": "dropdown",
      "data-dropdown-placement": this.state.placement,
      ref: w(this, Ln)
    };
  }
  render() {
    const { children: n, ...r } = this.beforeRender();
    return /* @__PURE__ */ Nu("div", {
      ...r
    }, n);
  }
}
io = new WeakMap(), Ln = new WeakMap();
class Em extends Sm {
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
    return r.caret = s, /* @__PURE__ */ Nu(en, {
      ...r
    });
  }
}
function u_({
  key: e,
  type: t,
  btnType: n,
  ...r
}) {
  return /* @__PURE__ */ Ki(Em, {
    type: n,
    ...r
  });
}
function Cm({
  key: e,
  type: t,
  btnType: n,
  ...r
}) {
  return /* @__PURE__ */ Ki(Is, {
    type: n,
    ...r
  });
}
class sn extends wt {
  beforeRender() {
    const { gap: t, btnProps: n, wrap: r, ...s } = super.beforeRender();
    return s.className = I(s.className, r ? "flex-wrap" : "", typeof t == "number" ? `gap-${t}` : ""), typeof t == "string" && (s.style ? s.style.gap = t : s.style = { gap: t }), s;
  }
  isBtnItem(t) {
    return t === "item" || t === "dropdown";
  }
  renderTypedItem(t, n, r) {
    const s = this.isBtnItem(r.type) ? { btnType: "ghost", ...this.props.btnProps } : {}, o = {
      ...n,
      ...s,
      ...r,
      className: I(`${this.name}-${r.type}`, n.className, s.className, r.className),
      style: Object.assign({}, n.style, s.style, r.style)
    };
    return /* @__PURE__ */ Ki(t, {
      ...o
    });
  }
}
A(sn, "ItemComponents", {
  item: jh,
  dropdown: u_,
  "btn-group": Cm
}), A(sn, "ROOT_TAG", "nav"), A(sn, "NAME", "toolbar"), A(sn, "defaultProps", {
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
function Om({
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
  return c.text === void 0 && !c.icon && s && (c.text = typeof s == "function" ? s(f) : Se(s, f)), c.url === void 0 && a && (c.url = typeof a == "function" ? a(f) : Se(a, f)), c.disabled === void 0 && (c.disabled = r !== void 0 && f.page === o.page), /* @__PURE__ */ Zt(en, {
    type: n,
    ...c
  });
}
const ht = 24 * 60 * 60 * 1e3, Ae = (e) => e ? (e instanceof Date || (typeof e == "string" && (e = e.trim(), /^\d+$/.test(e) && (e = Number.parseInt(e, 10))), typeof e == "number" && e < 1e10 && (e *= 1e3), e = new Date(e)), e) : new Date(), vo = (e, t = new Date()) => (e = Ae(e), t = Ae(t), e.getFullYear() === t.getFullYear() && e.getMonth() === t.getMonth() && e.getDate() === t.getDate()), Ql = (e, t = new Date()) => Ae(e).getFullYear() === Ae(t).getFullYear(), Mm = (e, t = new Date()) => (e = Ae(e), t = Ae(t), e.getFullYear() === t.getFullYear() && e.getMonth() === t.getMonth()), by = (e, t = new Date()) => {
  e = Ae(e), t = Ae(t);
  const n = 1e3 * 60 * 60 * 24, r = Math.floor(e.getTime() / n), s = Math.floor(t.getTime() / n);
  return Math.floor((r + 4) / 7) === Math.floor((s + 4) / 7);
}, wy = (e, t) => vo(Ae(t), e), $y = (e, t) => vo(Ae(t).getTime() - ht, e), ky = (e, t) => vo(Ae(t).getTime() + ht, e), xy = (e, t) => vo(Ae(t).getTime() - 2 * ht, e), $s = (e, t = "yyyy-MM-dd hh:mm") => {
  e = Ae(e);
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
}, Sy = (e, t, n) => {
  const r = {
    full: "yyyy-M-d",
    month: "M-d",
    day: "d",
    str: "{0} ~ {1}",
    ...n
  }, s = $s(e, Ql(e) ? r.month : r.full);
  if (vo(e, t))
    return s;
  const o = $s(t, Ql(e, t) ? Mm(e, t) ? r.day : r.month : r.full);
  return r.str.replace("{0}", s).replace("{1}", o);
}, Ey = (e) => {
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
}, ec = (e, t, n = !0, r = Date.now()) => {
  switch (t) {
    case "year":
      return e *= 365, ec(e, "day", n, r);
    case "quarter":
      e *= 3;
    case "month":
      return e *= 30, ec(e, "day", n, r);
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
function Am({
  key: e,
  type: t,
  page: n,
  text: r = "",
  pagerInfo: s,
  children: o,
  ...a
}) {
  const c = Xr(s, n);
  return r = typeof r == "function" ? r(c) : Se(r, c), /* @__PURE__ */ Zt(Jc, {
    ...a
  }, o, r);
}
function Dm({
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
      a && (f.url = typeof a == "function" ? a(h) : Se(a, h)), _.push(/* @__PURE__ */ Zt(en, {
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
function Tm({
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
      url: typeof n == "function" ? n(i) : Se(n, i)
    };
  });
  const { text: a = "" } = o;
  return o.text = typeof a == "function" ? a(t) : Se(a, t), s.menu = { ...s.menu, className: I((f = s.menu) == null ? void 0 : f.className, "pager-size-menu") }, /* @__PURE__ */ Zt(u_, {
    type: "dropdown",
    dropdown: s,
    ...o
  });
}
function Nm({
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
    c && !c({ info: h, event: g }) || (g.target.href = i.url = typeof f == "function" ? f(h) : Se(f, h));
  }, _ = Xr(s, t || 0);
  return i.url = typeof f == "function" ? f(_) : Se(f, _), i.className = I("input-group-addon", i.className), /* @__PURE__ */ Zt("div", {
    className: I("input-group", "pager-goto-group", o ? `size-${o}` : "")
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
class Bo extends sn {
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
A(Bo, "NAME", "pager"), A(Bo, "defaultProps", {
  gap: 1,
  btnProps: {
    btnType: "ghost",
    size: "sm"
  }
}), A(Bo, "ItemComponents", {
  ...sn.ItemComponents,
  link: Om,
  info: Am,
  nav: Dm,
  "size-menu": Tm,
  goto: Nm
});
class tc extends Je {
}
A(tc, "NAME", "pager"), A(tc, "Component", Bo);
class nc extends Je {
}
A(nc, "NAME", "toolbar"), A(nc, "Component", sn);
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
function pa(e) {
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
function __() {
  return !/^((?!chrome|android).)*safari/i.test(ks());
}
function Zn(e, t, n) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  var r = e.getBoundingClientRect(), s = 1, o = 1;
  t && Pe(e) && (s = e.offsetWidth > 0 && Jn(r.width) / e.offsetWidth || 1, o = e.offsetHeight > 0 && Jn(r.height) / e.offsetHeight || 1);
  var a = yn(e) ? We(e) : window, c = a.visualViewport, f = !__() && n, p = (r.left + (f && c ? c.offsetLeft : 0)) / s, i = (r.top + (f && c ? c.offsetTop : 0)) / o, d = r.width / s, u = r.height / o;
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
function da(e) {
  var t = We(e), n = t.pageXOffset, r = t.pageYOffset;
  return {
    scrollLeft: n,
    scrollTop: r
  };
}
function Lm(e) {
  return {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  };
}
function Pm(e) {
  return e === We(e) || !Pe(e) ? da(e) : Lm(e);
}
function pt(e) {
  return e ? (e.nodeName || "").toLowerCase() : null;
}
function on(e) {
  return ((yn(e) ? e.ownerDocument : e.document) || window.document).documentElement;
}
function ha(e) {
  return Zn(on(e)).left + da(e).scrollLeft;
}
function St(e) {
  return We(e).getComputedStyle(e);
}
function va(e) {
  var t = St(e), n = t.overflow, r = t.overflowX, s = t.overflowY;
  return /auto|scroll|overlay|hidden/.test(n + s + r);
}
function Rm(e) {
  var t = e.getBoundingClientRect(), n = Jn(t.width) / e.offsetWidth || 1, r = Jn(t.height) / e.offsetHeight || 1;
  return n !== 1 || r !== 1;
}
function Hm(e, t, n) {
  n === void 0 && (n = !1);
  var r = Pe(t), s = Pe(t) && Rm(t), o = on(t), a = Zn(e, s, n), c = {
    scrollLeft: 0,
    scrollTop: 0
  }, f = {
    x: 0,
    y: 0
  };
  return (r || !r && !n) && ((pt(t) !== "body" || va(o)) && (c = Pm(t)), Pe(t) ? (f = Zn(t, !0), f.x += t.clientLeft, f.y += t.clientTop) : o && (f.x = ha(o))), {
    x: a.left + c.scrollLeft - f.x,
    y: a.top + c.scrollTop - f.y,
    width: a.width,
    height: a.height
  };
}
function ma(e) {
  var t = Zn(e), n = e.offsetWidth, r = e.offsetHeight;
  return Math.abs(t.width - n) <= 1 && (n = t.width), Math.abs(t.height - r) <= 1 && (r = t.height), {
    x: e.offsetLeft,
    y: e.offsetTop,
    width: n,
    height: r
  };
}
function ns(e) {
  return pt(e) === "html" ? e : e.assignedSlot || e.parentNode || (pa(e) ? e.host : null) || on(e);
}
function p_(e) {
  return ["html", "body", "#document"].indexOf(pt(e)) >= 0 ? e.ownerDocument.body : Pe(e) && va(e) ? e : p_(ns(e));
}
function Or(e, t) {
  var n;
  t === void 0 && (t = []);
  var r = p_(e), s = r === ((n = e.ownerDocument) == null ? void 0 : n.body), o = We(r), a = s ? [o].concat(o.visualViewport || [], va(r) ? r : []) : r, c = t.concat(a);
  return s ? c : c.concat(Or(ns(a)));
}
function Wm(e) {
  return ["table", "td", "th"].indexOf(pt(e)) >= 0;
}
function rc(e) {
  return !Pe(e) || St(e).position === "fixed" ? null : e.offsetParent;
}
function jm(e) {
  var t = /firefox/i.test(ks()), n = /Trident/i.test(ks());
  if (n && Pe(e)) {
    var r = St(e);
    if (r.position === "fixed")
      return null;
  }
  var s = ns(e);
  for (pa(s) && (s = s.host); Pe(s) && ["html", "body"].indexOf(pt(s)) < 0; ) {
    var o = St(s);
    if (o.transform !== "none" || o.perspective !== "none" || o.contain === "paint" || ["transform", "perspective"].indexOf(o.willChange) !== -1 || t && o.willChange === "filter" || t && o.filter && o.filter !== "none")
      return s;
    s = s.parentNode;
  }
  return null;
}
function mo(e) {
  for (var t = We(e), n = rc(e); n && Wm(n) && St(n).position === "static"; )
    n = rc(n);
  return n && (pt(n) === "html" || pt(n) === "body" && St(n).position === "static") ? t : n || jm(e) || t;
}
var Oe = "top", Xe = "bottom", Ke = "right", Me = "left", ga = "auto", go = [Oe, Xe, Ke, Me], Qn = "start", Kr = "end", Bm = "clippingParents", d_ = "viewport", ir = "popper", Im = "reference", oc = /* @__PURE__ */ go.reduce(function(e, t) {
  return e.concat([t + "-" + Qn, t + "-" + Kr]);
}, []), h_ = /* @__PURE__ */ [].concat(go, [ga]).reduce(function(e, t) {
  return e.concat([t, t + "-" + Qn, t + "-" + Kr]);
}, []), Um = "beforeRead", Fm = "read", zm = "afterRead", Ym = "beforeMain", Vm = "main", qm = "afterMain", Gm = "beforeWrite", Xm = "write", Km = "afterWrite", Jm = [Um, Fm, zm, Ym, Vm, qm, Gm, Xm, Km];
function Zm(e) {
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
function Qm(e) {
  var t = Zm(e);
  return Jm.reduce(function(n, r) {
    return n.concat(t.filter(function(s) {
      return s.phase === r;
    }));
  }, []);
}
function eg(e) {
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
function tg(e) {
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
function ng(e, t) {
  var n = We(e), r = on(e), s = n.visualViewport, o = r.clientWidth, a = r.clientHeight, c = 0, f = 0;
  if (s) {
    o = s.width, a = s.height;
    var p = __();
    (p || !p && t === "fixed") && (c = s.offsetLeft, f = s.offsetTop);
  }
  return {
    width: o,
    height: a,
    x: c + ha(e),
    y: f
  };
}
function rg(e) {
  var t, n = on(e), r = da(e), s = (t = e.ownerDocument) == null ? void 0 : t.body, o = vn(n.scrollWidth, n.clientWidth, s ? s.scrollWidth : 0, s ? s.clientWidth : 0), a = vn(n.scrollHeight, n.clientHeight, s ? s.scrollHeight : 0, s ? s.clientHeight : 0), c = -r.scrollLeft + ha(e), f = -r.scrollTop;
  return St(s || n).direction === "rtl" && (c += vn(n.clientWidth, s ? s.clientWidth : 0) - o), {
    width: o,
    height: a,
    x: c,
    y: f
  };
}
function v_(e, t) {
  var n = t.getRootNode && t.getRootNode();
  if (e.contains(t))
    return !0;
  if (n && pa(n)) {
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
function og(e, t) {
  var n = Zn(e, !1, t === "fixed");
  return n.top = n.top + e.clientTop, n.left = n.left + e.clientLeft, n.bottom = n.top + e.clientHeight, n.right = n.left + e.clientWidth, n.width = e.clientWidth, n.height = e.clientHeight, n.x = n.left, n.y = n.top, n;
}
function ic(e, t, n) {
  return t === d_ ? xs(ng(e, n)) : yn(t) ? og(t, n) : xs(rg(on(e)));
}
function ig(e) {
  var t = Or(ns(e)), n = ["absolute", "fixed"].indexOf(St(e).position) >= 0, r = n && Pe(e) ? mo(e) : e;
  return yn(r) ? t.filter(function(s) {
    return yn(s) && v_(s, r) && pt(s) !== "body";
  }) : [];
}
function sg(e, t, n, r) {
  var s = t === "clippingParents" ? ig(e) : [].concat(t), o = [].concat(s, [n]), a = o[0], c = o.reduce(function(f, p) {
    var i = ic(e, p, r);
    return f.top = vn(i.top, f.top), f.right = yi(i.right, f.right), f.bottom = yi(i.bottom, f.bottom), f.left = vn(i.left, f.left), f;
  }, ic(e, a, r));
  return c.width = c.right - c.left, c.height = c.bottom - c.top, c.x = c.left, c.y = c.top, c;
}
function er(e) {
  return e.split("-")[1];
}
function ya(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function m_(e) {
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
    case Me:
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
  var p = s ? ya(s) : null;
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
function g_() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
function y_(e) {
  return Object.assign({}, g_(), e);
}
function b_(e, t) {
  return t.reduce(function(n, r) {
    return n[r] = e, n;
  }, {});
}
function ba(e, t) {
  t === void 0 && (t = {});
  var n = t, r = n.placement, s = r === void 0 ? e.placement : r, o = n.strategy, a = o === void 0 ? e.strategy : o, c = n.boundary, f = c === void 0 ? Bm : c, p = n.rootBoundary, i = p === void 0 ? d_ : p, d = n.elementContext, u = d === void 0 ? ir : d, l = n.altBoundary, _ = l === void 0 ? !1 : l, g = n.padding, h = g === void 0 ? 0 : g, v = y_(typeof h != "number" ? h : b_(h, go)), m = u === ir ? Im : ir, k = e.rects.popper, b = e.elements[_ ? m : u], E = sg(yn(b) ? b : b.contextElement || on(e.elements.popper), f, i, a), $ = Zn(e.elements.reference), S = m_({
    reference: $,
    element: k,
    strategy: "absolute",
    placement: s
  }), y = xs(Object.assign({}, k, S)), x = u === ir ? y : $, C = {
    top: E.top - x.top + v.top,
    bottom: x.bottom - E.bottom + v.bottom,
    left: E.left - x.left + v.left,
    right: x.right - E.right + v.right
  }, W = e.modifiersData.offset;
  if (u === ir && W) {
    var F = W[s];
    Object.keys(C).forEach(function(D) {
      var T = [Ke, Xe].indexOf(D) >= 0 ? 1 : -1, O = [Oe, Xe].indexOf(D) >= 0 ? "y" : "x";
      C[D] += F[O] * T;
    });
  }
  return C;
}
var sc = {
  placement: "bottom",
  modifiers: [],
  strategy: "absolute"
};
function ac() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return !t.some(function(r) {
    return !(r && typeof r.getBoundingClientRect == "function");
  });
}
function ag(e) {
  e === void 0 && (e = {});
  var t = e, n = t.defaultModifiers, r = n === void 0 ? [] : n, s = t.defaultOptions, o = s === void 0 ? sc : s;
  return function(c, f, p) {
    p === void 0 && (p = o);
    var i = {
      placement: "bottom",
      orderedModifiers: [],
      options: Object.assign({}, sc, o),
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
        var k = Qm(tg([].concat(r, i.options.modifiers)));
        return i.orderedModifiers = k.filter(function(b) {
          return b.enabled;
        }), _(), l.update();
      },
      forceUpdate: function() {
        if (!u) {
          var v = i.elements, m = v.reference, k = v.popper;
          if (!!ac(m, k)) {
            i.rects = {
              reference: Hm(m, mo(k), i.options.strategy === "fixed"),
              popper: ma(k)
            }, i.reset = !1, i.placement = i.options.placement, i.orderedModifiers.forEach(function(C) {
              return i.modifiersData[C.name] = Object.assign({}, C.data);
            });
            for (var b = 0; b < i.orderedModifiers.length; b++) {
              if (i.reset === !0) {
                i.reset = !1, b = -1;
                continue;
              }
              var E = i.orderedModifiers[b], $ = E.fn, S = E.options, y = S === void 0 ? {} : S, x = E.name;
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
      update: eg(function() {
        return new Promise(function(h) {
          l.forceUpdate(), h(i);
        });
      }),
      destroy: function() {
        g(), u = !0;
      }
    };
    if (!ac(c, f))
      return l;
    l.setOptions(p).then(function(h) {
      !u && p.onFirstUpdate && p.onFirstUpdate(h);
    });
    function _() {
      i.orderedModifiers.forEach(function(h) {
        var v = h.name, m = h.options, k = m === void 0 ? {} : m, b = h.effect;
        if (typeof b == "function") {
          var E = b({
            state: i,
            name: v,
            instance: l,
            options: k
          }), $ = function() {
          };
          d.push(E || $);
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
function lg(e) {
  var t = e.state, n = e.instance, r = e.options, s = r.scroll, o = s === void 0 ? !0 : s, a = r.resize, c = a === void 0 ? !0 : a, f = We(t.elements.popper), p = [].concat(t.scrollParents.reference, t.scrollParents.popper);
  return o && p.forEach(function(i) {
    i.addEventListener("scroll", n.update, $o);
  }), c && f.addEventListener("resize", n.update, $o), function() {
    o && p.forEach(function(i) {
      i.removeEventListener("scroll", n.update, $o);
    }), c && f.removeEventListener("resize", n.update, $o);
  };
}
const cg = {
  name: "eventListeners",
  enabled: !0,
  phase: "write",
  fn: function() {
  },
  effect: lg,
  data: {}
};
function fg(e) {
  var t = e.state, n = e.name;
  t.modifiersData[n] = m_({
    reference: t.rects.reference,
    element: t.rects.popper,
    strategy: "absolute",
    placement: t.placement
  });
}
const ug = {
  name: "popperOffsets",
  enabled: !0,
  phase: "read",
  fn: fg,
  data: {}
};
var _g = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function pg(e) {
  var t = e.x, n = e.y, r = window, s = r.devicePixelRatio || 1;
  return {
    x: Jn(t * s) / s || 0,
    y: Jn(n * s) / s || 0
  };
}
function lc(e) {
  var t, n = e.popper, r = e.popperRect, s = e.placement, o = e.variation, a = e.offsets, c = e.position, f = e.gpuAcceleration, p = e.adaptive, i = e.roundOffsets, d = e.isFixed, u = a.x, l = u === void 0 ? 0 : u, _ = a.y, g = _ === void 0 ? 0 : _, h = typeof i == "function" ? i({
    x: l,
    y: g
  }) : {
    x: l,
    y: g
  };
  l = h.x, g = h.y;
  var v = a.hasOwnProperty("x"), m = a.hasOwnProperty("y"), k = Me, b = Oe, E = window;
  if (p) {
    var $ = mo(n), S = "clientHeight", y = "clientWidth";
    if ($ === We(n) && ($ = on(n), St($).position !== "static" && c === "absolute" && (S = "scrollHeight", y = "scrollWidth")), $ = $, s === Oe || (s === Me || s === Ke) && o === Kr) {
      b = Xe;
      var x = d && $ === E && E.visualViewport ? E.visualViewport.height : $[S];
      g -= x - r.height, g *= f ? 1 : -1;
    }
    if (s === Me || (s === Oe || s === Xe) && o === Kr) {
      k = Ke;
      var C = d && $ === E && E.visualViewport ? E.visualViewport.width : $[y];
      l -= C - r.width, l *= f ? 1 : -1;
    }
  }
  var W = Object.assign({
    position: c
  }, p && _g), F = i === !0 ? pg({
    x: l,
    y: g
  }) : {
    x: l,
    y: g
  };
  if (l = F.x, g = F.y, f) {
    var D;
    return Object.assign({}, W, (D = {}, D[b] = m ? "0" : "", D[k] = v ? "0" : "", D.transform = (E.devicePixelRatio || 1) <= 1 ? "translate(" + l + "px, " + g + "px)" : "translate3d(" + l + "px, " + g + "px, 0)", D));
  }
  return Object.assign({}, W, (t = {}, t[b] = m ? g + "px" : "", t[k] = v ? l + "px" : "", t.transform = "", t));
}
function dg(e) {
  var t = e.state, n = e.options, r = n.gpuAcceleration, s = r === void 0 ? !0 : r, o = n.adaptive, a = o === void 0 ? !0 : o, c = n.roundOffsets, f = c === void 0 ? !0 : c, p = {
    placement: ct(t.placement),
    variation: er(t.placement),
    popper: t.elements.popper,
    popperRect: t.rects.popper,
    gpuAcceleration: s,
    isFixed: t.options.strategy === "fixed"
  };
  t.modifiersData.popperOffsets != null && (t.styles.popper = Object.assign({}, t.styles.popper, lc(Object.assign({}, p, {
    offsets: t.modifiersData.popperOffsets,
    position: t.options.strategy,
    adaptive: a,
    roundOffsets: f
  })))), t.modifiersData.arrow != null && (t.styles.arrow = Object.assign({}, t.styles.arrow, lc(Object.assign({}, p, {
    offsets: t.modifiersData.arrow,
    position: "absolute",
    adaptive: !1,
    roundOffsets: f
  })))), t.attributes.popper = Object.assign({}, t.attributes.popper, {
    "data-popper-placement": t.placement
  });
}
const hg = {
  name: "computeStyles",
  enabled: !0,
  phase: "beforeWrite",
  fn: dg,
  data: {}
};
function vg(e) {
  var t = e.state;
  Object.keys(t.elements).forEach(function(n) {
    var r = t.styles[n] || {}, s = t.attributes[n] || {}, o = t.elements[n];
    !Pe(o) || !pt(o) || (Object.assign(o.style, r), Object.keys(s).forEach(function(a) {
      var c = s[a];
      c === !1 ? o.removeAttribute(a) : o.setAttribute(a, c === !0 ? "" : c);
    }));
  });
}
function mg(e) {
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
const gg = {
  name: "applyStyles",
  enabled: !0,
  phase: "write",
  fn: vg,
  effect: mg,
  requires: ["computeStyles"]
};
var yg = [cg, ug, hg, gg], bg = /* @__PURE__ */ ag({
  defaultModifiers: yg
});
function Mr(e, t, n) {
  return vn(e, yi(t, n));
}
function wg(e, t, n) {
  var r = Mr(e, t, n);
  return r > n ? n : r;
}
var $g = function(t, n) {
  return t = typeof t == "function" ? t(Object.assign({}, n.rects, {
    placement: n.placement
  })) : t, y_(typeof t != "number" ? t : b_(t, go));
};
function kg(e) {
  var t, n = e.state, r = e.name, s = e.options, o = n.elements.arrow, a = n.modifiersData.popperOffsets, c = ct(n.placement), f = ya(c), p = [Me, Ke].indexOf(c) >= 0, i = p ? "height" : "width";
  if (!(!o || !a)) {
    var d = $g(s.padding, n), u = ma(o), l = f === "y" ? Oe : Me, _ = f === "y" ? Xe : Ke, g = n.rects.reference[i] + n.rects.reference[f] - a[f] - n.rects.popper[i], h = a[f] - n.rects.reference[f], v = mo(o), m = v ? f === "y" ? v.clientHeight || 0 : v.clientWidth || 0 : 0, k = g / 2 - h / 2, b = d[l], E = m - u[i] - d[_], $ = m / 2 - u[i] / 2 + k, S = Mr(b, $, E), y = f;
    n.modifiersData[r] = (t = {}, t[y] = S, t.centerOffset = S - $, t);
  }
}
function xg(e) {
  var t = e.state, n = e.options, r = n.element, s = r === void 0 ? "[data-popper-arrow]" : r;
  s != null && (typeof s == "string" && (s = t.elements.popper.querySelector(s), !s) || !v_(t.elements.popper, s) || (t.elements.arrow = s));
}
const Sg = {
  name: "arrow",
  enabled: !0,
  phase: "main",
  fn: kg,
  effect: xg,
  requires: ["popperOffsets"],
  requiresIfExists: ["preventOverflow"]
};
function Eg(e, t, n) {
  var r = ct(e), s = [Me, Oe].indexOf(r) >= 0 ? -1 : 1, o = typeof n == "function" ? n(Object.assign({}, t, {
    placement: e
  })) : n, a = o[0], c = o[1];
  return a = a || 0, c = (c || 0) * s, [Me, Ke].indexOf(r) >= 0 ? {
    x: c,
    y: a
  } : {
    x: a,
    y: c
  };
}
function Cg(e) {
  var t = e.state, n = e.options, r = e.name, s = n.offset, o = s === void 0 ? [0, 0] : s, a = h_.reduce(function(i, d) {
    return i[d] = Eg(d, t.rects, o), i;
  }, {}), c = a[t.placement], f = c.x, p = c.y;
  t.modifiersData.popperOffsets != null && (t.modifiersData.popperOffsets.x += f, t.modifiersData.popperOffsets.y += p), t.modifiersData[r] = a;
}
const Og = {
  name: "offset",
  enabled: !0,
  phase: "main",
  requires: ["popperOffsets"],
  fn: Cg
};
function Mg(e) {
  return e === "x" ? "y" : "x";
}
function Ag(e) {
  var t = e.state, n = e.options, r = e.name, s = n.mainAxis, o = s === void 0 ? !0 : s, a = n.altAxis, c = a === void 0 ? !1 : a, f = n.boundary, p = n.rootBoundary, i = n.altBoundary, d = n.padding, u = n.tether, l = u === void 0 ? !0 : u, _ = n.tetherOffset, g = _ === void 0 ? 0 : _, h = ba(t, {
    boundary: f,
    rootBoundary: p,
    padding: d,
    altBoundary: i
  }), v = ct(t.placement), m = er(t.placement), k = !m, b = ya(v), E = Mg(b), $ = t.modifiersData.popperOffsets, S = t.rects.reference, y = t.rects.popper, x = typeof g == "function" ? g(Object.assign({}, t.rects, {
    placement: t.placement
  })) : g, C = typeof x == "number" ? {
    mainAxis: x,
    altAxis: x
  } : Object.assign({
    mainAxis: 0,
    altAxis: 0
  }, x), W = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null, F = {
    x: 0,
    y: 0
  };
  if (!!$) {
    if (o) {
      var D, T = b === "y" ? Oe : Me, O = b === "y" ? Xe : Ke, N = b === "y" ? "height" : "width", M = $[b], j = M + h[T], R = M - h[O], U = l ? -y[N] / 2 : 0, G = m === Qn ? S[N] : y[N], z = m === Qn ? -y[N] : -S[N], K = t.elements.arrow, Q = l && K ? ma(K) : {
        width: 0,
        height: 0
      }, L = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : g_(), Y = L[T], X = L[O], q = Mr(0, S[N], Q[N]), J = k ? S[N] / 2 - U - q - Y - C.mainAxis : G - q - Y - C.mainAxis, le = k ? -S[N] / 2 + U + q + X + C.mainAxis : z + q + X + C.mainAxis, ae = t.elements.arrow && mo(t.elements.arrow), be = ae ? b === "y" ? ae.clientTop || 0 : ae.clientLeft || 0 : 0, Ze = (D = W == null ? void 0 : W[b]) != null ? D : 0, ee = M + J - Ze - be, Et = M + le - Ze, je = Mr(l ? yi(j, ee) : j, M, l ? vn(R, Et) : R);
      $[b] = je, F[b] = je - M;
    }
    if (c) {
      var Be, Ct = b === "x" ? Oe : Me, Qe = b === "x" ? Xe : Ke, te = $[E], me = E === "y" ? "height" : "width", Ie = te + h[Ct], Ot = te - h[Qe], Ue = [Oe, Me].indexOf(v) !== -1, Mt = (Be = W == null ? void 0 : W[E]) != null ? Be : 0, At = Ue ? Ie : te - S[me] - y[me] - Mt + C.altAxis, Dt = Ue ? te + S[me] + y[me] - Mt - C.altAxis : Ot, Tt = l && Ue ? wg(At, te, Dt) : Mr(l ? At : Ie, te, l ? Dt : Ot);
      $[E] = Tt, F[E] = Tt - te;
    }
    t.modifiersData[r] = F;
  }
}
const Dg = {
  name: "preventOverflow",
  enabled: !0,
  phase: "main",
  fn: Ag,
  requiresIfExists: ["offset"]
};
var Tg = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function Io(e) {
  return e.replace(/left|right|bottom|top/g, function(t) {
    return Tg[t];
  });
}
var Ng = {
  start: "end",
  end: "start"
};
function cc(e) {
  return e.replace(/start|end/g, function(t) {
    return Ng[t];
  });
}
function Lg(e, t) {
  t === void 0 && (t = {});
  var n = t, r = n.placement, s = n.boundary, o = n.rootBoundary, a = n.padding, c = n.flipVariations, f = n.allowedAutoPlacements, p = f === void 0 ? h_ : f, i = er(r), d = i ? c ? oc : oc.filter(function(_) {
    return er(_) === i;
  }) : go, u = d.filter(function(_) {
    return p.indexOf(_) >= 0;
  });
  u.length === 0 && (u = d);
  var l = u.reduce(function(_, g) {
    return _[g] = ba(e, {
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
function Pg(e) {
  if (ct(e) === ga)
    return [];
  var t = Io(e);
  return [cc(e), t, cc(t)];
}
function Rg(e) {
  var t = e.state, n = e.options, r = e.name;
  if (!t.modifiersData[r]._skip) {
    for (var s = n.mainAxis, o = s === void 0 ? !0 : s, a = n.altAxis, c = a === void 0 ? !0 : a, f = n.fallbackPlacements, p = n.padding, i = n.boundary, d = n.rootBoundary, u = n.altBoundary, l = n.flipVariations, _ = l === void 0 ? !0 : l, g = n.allowedAutoPlacements, h = t.options.placement, v = ct(h), m = v === h, k = f || (m || !_ ? [Io(h)] : Pg(h)), b = [h].concat(k).reduce(function(Q, L) {
      return Q.concat(ct(L) === ga ? Lg(t, {
        placement: L,
        boundary: i,
        rootBoundary: d,
        padding: p,
        flipVariations: _,
        allowedAutoPlacements: g
      }) : L);
    }, []), E = t.rects.reference, $ = t.rects.popper, S = /* @__PURE__ */ new Map(), y = !0, x = b[0], C = 0; C < b.length; C++) {
      var W = b[C], F = ct(W), D = er(W) === Qn, T = [Oe, Xe].indexOf(F) >= 0, O = T ? "width" : "height", N = ba(t, {
        placement: W,
        boundary: i,
        rootBoundary: d,
        altBoundary: u,
        padding: p
      }), M = T ? D ? Ke : Me : D ? Xe : Oe;
      E[O] > $[O] && (M = Io(M));
      var j = Io(M), R = [];
      if (o && R.push(N[F] <= 0), c && R.push(N[M] <= 0, N[j] <= 0), R.every(function(Q) {
        return Q;
      })) {
        x = W, y = !1;
        break;
      }
      S.set(W, R);
    }
    if (y)
      for (var U = _ ? 3 : 1, G = function(L) {
        var Y = b.find(function(X) {
          var q = S.get(X);
          if (q)
            return q.slice(0, L).every(function(J) {
              return J;
            });
        });
        if (Y)
          return x = Y, "break";
      }, z = U; z > 0; z--) {
        var K = G(z);
        if (K === "break")
          break;
      }
    t.placement !== x && (t.modifiersData[r]._skip = !0, t.placement = x, t.reset = !0);
  }
}
const Hg = {
  name: "flip",
  enabled: !0,
  phase: "main",
  fn: Rg,
  requiresIfExists: ["offset"],
  data: {
    _skip: !1
  }
};
var Pn, Rn, Hn, fn, ze, so, Wn, Mi, w_;
class st extends at {
  constructor() {
    super(...arguments);
    P(this, Mi);
    P(this, Pn, !1);
    P(this, Rn, void 0);
    P(this, Hn, 0);
    P(this, fn, void 0);
    P(this, ze, void 0);
    P(this, so, void 0);
    A(this, "hideLater", () => {
      w(this, Wn).call(this), H(this, Hn, window.setTimeout(this.hide.bind(this), 100));
    });
    P(this, Wn, () => {
      clearTimeout(w(this, Hn)), H(this, Hn, 0);
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
    return H(this, so, n), !w(this, Pn) && this.isHover && ne(this, Mi, w_).call(this), this.options.animation && this.tooltip.classList.add("fade"), this.element.classList.add(this.elementShowClass), this.tooltip.classList.add(this.constructor.CLASS_SHOW), this._createPopper().update(), !0;
  }
  hide() {
    var n, r;
    return (n = w(this, ze)) == null || n.destroy(), H(this, ze, void 0), this.element.classList.remove(this.elementShowClass), (r = w(this, fn)) == null || r.classList.remove(this.constructor.CLASS_SHOW), !0;
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
    return o = o.concat(s), r.classList.add(...o), r[this.options.html ? "innerHTML" : "innerText"] = this.options.title || "", this.options.arrow && r.prepend(this._createArrow()), document.body.appendChild(r), H(this, fn, r), r;
  }
  _getPopperOptions() {
    const n = this._getArrowSize();
    return {
      modifiers: [
        Dg,
        Hg,
        { ...Sg, options: {
          padding: n,
          element: ".arrow"
        } },
        {
          ...Og,
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
    return w(this, ze) ? w(this, ze).setOptions(n) : H(this, ze, bg(this._getPopperElement(), this.tooltip, n)), w(this, ze);
  }
  _getPopperElement() {
    return w(this, Rn) || H(this, Rn, {
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
Pn = new WeakMap(), Rn = new WeakMap(), Hn = new WeakMap(), fn = new WeakMap(), ze = new WeakMap(), so = new WeakMap(), Wn = new WeakMap(), Mi = new WeakSet(), w_ = function() {
  const { tooltip: n } = this;
  n.addEventListener("mouseenter", w(this, Wn)), n.addEventListener("mouseleave", this.hideLater), this.element.addEventListener("mouseleave", this.hideLater), H(this, Pn, !0);
}, A(st, "NAME", "tooltip"), A(st, "TOOLTIP_CLASS", "tooltip"), A(st, "CLASS_SHOW", "show"), A(st, "MENU_SELECTOR", '[data-toggle="tooltip"]:not(.disabled):not(:disabled)'), A(st, "DEFAULT", {
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
var wa, he, $_, k_, Ar, fc, x_ = {}, S_ = [], Wg = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function Xt(e, t) {
  for (var n in t)
    e[n] = t[n];
  return e;
}
function E_(e) {
  var t = e.parentNode;
  t && t.removeChild(e);
}
function V(e, t, n) {
  var r, s, o, a = {};
  for (o in t)
    o == "key" ? r = t[o] : o == "ref" ? s = t[o] : a[o] = t[o];
  if (arguments.length > 2 && (a.children = arguments.length > 3 ? wa.call(arguments, 2) : n), typeof e == "function" && e.defaultProps != null)
    for (o in e.defaultProps)
      a[o] === void 0 && (a[o] = e.defaultProps[o]);
  return Uo(e, a, r, s, null);
}
function Uo(e, t, n, r, s) {
  var o = { type: e, props: t, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: s == null ? ++$_ : s };
  return s == null && he.vnode != null && he.vnode(o), o;
}
function jg() {
  return { current: null };
}
function $a(e) {
  return e.children;
}
function Dr(e, t) {
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
function C_(e) {
  var t, n;
  if ((e = e.__) != null && e.__c != null) {
    for (e.__e = e.__c.base = null, t = 0; t < e.__k.length; t++)
      if ((n = e.__k[t]) != null && n.__e != null) {
        e.__e = e.__c.base = n.__e;
        break;
      }
    return C_(e);
  }
}
function uc(e) {
  (!e.__d && (e.__d = !0) && Ar.push(e) && !bi.__r++ || fc !== he.debounceRendering) && ((fc = he.debounceRendering) || setTimeout)(bi);
}
function bi() {
  for (var e; bi.__r = Ar.length; )
    e = Ar.sort(function(t, n) {
      return t.__v.__b - n.__v.__b;
    }), Ar = [], e.some(function(t) {
      var n, r, s, o, a, c;
      t.__d && (a = (o = (n = t).__v).__e, (c = n.__P) && (r = [], (s = Xt({}, o)).__v = o.__v + 1, D_(c, o, s, n.__n, c.ownerSVGElement !== void 0, o.__h != null ? [a] : null, r, a == null ? Jr(o) : a, o.__h), Ig(r, o), o.__e != a && C_(o)));
    });
}
function O_(e, t, n, r, s, o, a, c, f, p) {
  var i, d, u, l, _, g, h, v = r && r.__k || S_, m = v.length;
  for (n.__k = [], i = 0; i < t.length; i++)
    if ((l = n.__k[i] = (l = t[i]) == null || typeof l == "boolean" ? null : typeof l == "string" || typeof l == "number" || typeof l == "bigint" ? Uo(null, l, null, null, l) : Array.isArray(l) ? Uo($a, { children: l }, null, null, null) : l.__b > 0 ? Uo(l.type, l.props, l.key, l.ref ? l.ref : null, l.__v) : l) != null) {
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
      D_(e, l, u = u || x_, s, o, a, c, f, p), _ = l.__e, (d = l.ref) && u.ref != d && (h || (h = []), u.ref && h.push(u.ref, null, l), h.push(d, l.__c || _, l)), _ != null ? (g == null && (g = _), typeof l.type == "function" && l.__k === u.__k ? l.__d = f = M_(l, f, e) : f = A_(e, l, u, v, _, f), typeof n.type == "function" && (n.__d = f)) : f && u.__e == f && f.parentNode != e && (f = Jr(u));
    }
  for (n.__e = g, i = m; i--; )
    v[i] != null && N_(v[i], v[i]);
  if (h)
    for (i = 0; i < h.length; i++)
      T_(h[i], h[++i], h[++i]);
}
function M_(e, t, n) {
  for (var r, s = e.__k, o = 0; s && o < s.length; o++)
    (r = s[o]) && (r.__ = e, t = typeof r.type == "function" ? M_(r, t, n) : A_(n, r, r, s, r.__e, t));
  return t;
}
function A_(e, t, n, r, s, o) {
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
function Bg(e, t, n, r, s) {
  var o;
  for (o in n)
    o === "children" || o === "key" || o in t || wi(e, o, null, n[o], r);
  for (o in t)
    s && typeof t[o] != "function" || o === "children" || o === "key" || o === "value" || o === "checked" || n[o] === t[o] || wi(e, o, t[o], n[o], r);
}
function _c(e, t, n) {
  t[0] === "-" ? e.setProperty(t, n) : e[t] = n == null ? "" : typeof n != "number" || Wg.test(t) ? n : n + "px";
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
            n && t in n || _c(e.style, t, "");
        if (n)
          for (t in n)
            r && n[t] === r[t] || _c(e.style, t, n[t]);
      }
    else if (t[0] === "o" && t[1] === "n")
      o = t !== (t = t.replace(/Capture$/, "")), t = t.toLowerCase() in e ? t.toLowerCase().slice(2) : t.slice(2), e.l || (e.l = {}), e.l[t + o] = n, n ? r || e.addEventListener(t, o ? dc : pc, o) : e.removeEventListener(t, o ? dc : pc, o);
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
function pc(e) {
  this.l[e.type + !1](he.event ? he.event(e) : e);
}
function dc(e) {
  this.l[e.type + !0](he.event ? he.event(e) : e);
}
function D_(e, t, n, r, s, o, a, c, f) {
  var p, i, d, u, l, _, g, h, v, m, k, b, E, $, S, y = t.type;
  if (t.constructor !== void 0)
    return null;
  n.__h != null && (f = n.__h, c = t.__e = n.__e, t.__h = null, o = [c]), (p = he.__b) && p(t);
  try {
    e:
      if (typeof y == "function") {
        if (h = t.props, v = (p = y.contextType) && r[p.__c], m = p ? v ? v.props.value : p.__ : r, n.__c ? g = (i = t.__c = n.__c).__ = i.__E : ("prototype" in y && y.prototype.render ? t.__c = i = new y(h, m) : (t.__c = i = new Dr(h, m), i.constructor = y, i.render = Fg), v && v.sub(i), i.props = h, i.state || (i.state = {}), i.context = m, i.__n = r, d = i.__d = !0, i.__h = [], i._sb = []), i.__s == null && (i.__s = i.state), y.getDerivedStateFromProps != null && (i.__s == i.state && (i.__s = Xt({}, i.__s)), Xt(i.__s, y.getDerivedStateFromProps(h, i.__s))), u = i.props, l = i.state, d)
          y.getDerivedStateFromProps == null && i.componentWillMount != null && i.componentWillMount(), i.componentDidMount != null && i.__h.push(i.componentDidMount);
        else {
          if (y.getDerivedStateFromProps == null && h !== u && i.componentWillReceiveProps != null && i.componentWillReceiveProps(h, m), !i.__e && i.shouldComponentUpdate != null && i.shouldComponentUpdate(h, i.__s, m) === !1 || t.__v === n.__v) {
            for (i.props = h, i.state = i.__s, t.__v !== n.__v && (i.__d = !1), i.__v = t, t.__e = n.__e, t.__k = n.__k, t.__k.forEach(function(x) {
              x && (x.__ = t);
            }), k = 0; k < i._sb.length; k++)
              i.__h.push(i._sb[k]);
            i._sb = [], i.__h.length && a.push(i);
            break e;
          }
          i.componentWillUpdate != null && i.componentWillUpdate(h, i.__s, m), i.componentDidUpdate != null && i.__h.push(function() {
            i.componentDidUpdate(u, l, _);
          });
        }
        if (i.context = m, i.props = h, i.__v = t, i.__P = e, b = he.__r, E = 0, "prototype" in y && y.prototype.render) {
          for (i.state = i.__s, i.__d = !1, b && b(t), p = i.render(i.props, i.state, i.context), $ = 0; $ < i._sb.length; $++)
            i.__h.push(i._sb[$]);
          i._sb = [];
        } else
          do
            i.__d = !1, b && b(t), p = i.render(i.props, i.state, i.context), i.state = i.__s;
          while (i.__d && ++E < 25);
        i.state = i.__s, i.getChildContext != null && (r = Xt(Xt({}, r), i.getChildContext())), d || i.getSnapshotBeforeUpdate == null || (_ = i.getSnapshotBeforeUpdate(u, l)), S = p != null && p.type === $a && p.key == null ? p.props.children : p, O_(e, Array.isArray(S) ? S : [S], t, n, r, s, o, a, c, f), i.base = t.__e, t.__h = null, i.__h.length && a.push(i), g && (i.__E = i.__ = null), i.__e = !1;
      } else
        o == null && t.__v === n.__v ? (t.__k = n.__k, t.__e = n.__e) : t.__e = Ug(n.__e, t, n, r, s, o, a, f);
    (p = he.diffed) && p(t);
  } catch (x) {
    t.__v = null, (f || o != null) && (t.__e = c, t.__h = !!f, o[o.indexOf(c)] = null), he.__e(x, t, n);
  }
}
function Ig(e, t) {
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
function Ug(e, t, n, r, s, o, a, c) {
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
    if (o = o && wa.call(e.childNodes), p = (d = n.props || x_).dangerouslySetInnerHTML, i = u.dangerouslySetInnerHTML, !c) {
      if (o != null)
        for (d = {}, _ = 0; _ < e.attributes.length; _++)
          d[e.attributes[_].name] = e.attributes[_].value;
      (i || p) && (i && (p && i.__html == p.__html || i.__html === e.innerHTML) || (e.innerHTML = i && i.__html || ""));
    }
    if (Bg(e, u, d, s, c), i)
      t.__k = [];
    else if (_ = t.props.children, O_(e, Array.isArray(_) ? _ : [_], t, n, r, s && l !== "foreignObject", o, a, o ? o[0] : n.__k && Jr(n, 0), c), o != null)
      for (_ = o.length; _--; )
        o[_] != null && E_(o[_]);
    c || ("value" in u && (_ = u.value) !== void 0 && (_ !== e.value || l === "progress" && !_ || l === "option" && _ !== d.value) && wi(e, "value", _, d.value, !1), "checked" in u && (_ = u.checked) !== void 0 && _ !== e.checked && wi(e, "checked", _, d.checked, !1));
  }
  return e;
}
function T_(e, t, n) {
  try {
    typeof e == "function" ? e(t) : e.current = t;
  } catch (r) {
    he.__e(r, n);
  }
}
function N_(e, t, n) {
  var r, s;
  if (he.unmount && he.unmount(e), (r = e.ref) && (r.current && r.current !== e.__e || T_(r, null, t)), (r = e.__c) != null) {
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
      r[s] && N_(r[s], t, n || typeof e.type != "function");
  n || e.__e == null || E_(e.__e), e.__ = e.__e = e.__d = void 0;
}
function Fg(e, t, n) {
  return this.constructor(e, n);
}
wa = S_.slice, he = { __e: function(e, t, n, r) {
  for (var s, o, a; t = t.__; )
    if ((s = t.__c) && !s.__)
      try {
        if ((o = s.constructor) && o.getDerivedStateFromError != null && (s.setState(o.getDerivedStateFromError(e)), a = s.__d), s.componentDidCatch != null && (s.componentDidCatch(e, r || {}), a = s.__d), a)
          return s.__E = s;
      } catch (c) {
        e = c;
      }
  throw e;
} }, $_ = 0, k_ = function(e) {
  return e != null && e.constructor === void 0;
}, Dr.prototype.setState = function(e, t) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = Xt({}, this.state), typeof e == "function" && (e = e(Xt({}, n), this.props)), e && Xt(n, e), e != null && this.__v && (t && this._sb.push(t), uc(this));
}, Dr.prototype.forceUpdate = function(e) {
  this.__v && (this.__e = !0, e && this.__h.push(e), uc(this));
}, Dr.prototype.render = $a, Ar = [], bi.__r = 0;
let zg = (e = 21) => crypto.getRandomValues(new Uint8Array(e)).reduce((t, n) => (n &= 63, n < 36 ? t += n.toString(36) : n < 62 ? t += (n - 26).toString(36).toUpperCase() : n > 62 ? t += "-" : t += "_", t), "");
var ka, ve, L_, Tr, hc, P_ = {}, R_ = [], Yg = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function Kt(e, t) {
  for (var n in t)
    e[n] = t[n];
  return e;
}
function H_(e) {
  var t = e.parentNode;
  t && t.removeChild(e);
}
function vc(e, t, n) {
  var r, s, o, a = {};
  for (o in t)
    o == "key" ? r = t[o] : o == "ref" ? s = t[o] : a[o] = t[o];
  if (arguments.length > 2 && (a.children = arguments.length > 3 ? ka.call(arguments, 2) : n), typeof e == "function" && e.defaultProps != null)
    for (o in e.defaultProps)
      a[o] === void 0 && (a[o] = e.defaultProps[o]);
  return Fo(e, a, r, s, null);
}
function Fo(e, t, n, r, s) {
  var o = { type: e, props: t, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: s == null ? ++L_ : s };
  return s == null && ve.vnode != null && ve.vnode(o), o;
}
function xa(e) {
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
function W_(e) {
  var t, n;
  if ((e = e.__) != null && e.__c != null) {
    for (e.__e = e.__c.base = null, t = 0; t < e.__k.length; t++)
      if ((n = e.__k[t]) != null && n.__e != null) {
        e.__e = e.__c.base = n.__e;
        break;
      }
    return W_(e);
  }
}
function mc(e) {
  (!e.__d && (e.__d = !0) && Tr.push(e) && !$i.__r++ || hc !== ve.debounceRendering) && ((hc = ve.debounceRendering) || setTimeout)($i);
}
function $i() {
  for (var e; $i.__r = Tr.length; )
    e = Tr.sort(function(t, n) {
      return t.__v.__b - n.__v.__b;
    }), Tr = [], e.some(function(t) {
      var n, r, s, o, a, c;
      t.__d && (a = (o = (n = t).__v).__e, (c = n.__P) && (r = [], (s = Kt({}, o)).__v = o.__v + 1, U_(c, o, s, n.__n, c.ownerSVGElement !== void 0, o.__h != null ? [a] : null, r, a == null ? Zr(o) : a, o.__h), qg(r, o), o.__e != a && W_(o)));
    });
}
function j_(e, t, n, r, s, o, a, c, f, p) {
  var i, d, u, l, _, g, h, v = r && r.__k || R_, m = v.length;
  for (n.__k = [], i = 0; i < t.length; i++)
    if ((l = n.__k[i] = (l = t[i]) == null || typeof l == "boolean" ? null : typeof l == "string" || typeof l == "number" || typeof l == "bigint" ? Fo(null, l, null, null, l) : Array.isArray(l) ? Fo(xa, { children: l }, null, null, null) : l.__b > 0 ? Fo(l.type, l.props, l.key, l.ref ? l.ref : null, l.__v) : l) != null) {
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
      U_(e, l, u = u || P_, s, o, a, c, f, p), _ = l.__e, (d = l.ref) && u.ref != d && (h || (h = []), u.ref && h.push(u.ref, null, l), h.push(d, l.__c || _, l)), _ != null ? (g == null && (g = _), typeof l.type == "function" && l.__k === u.__k ? l.__d = f = B_(l, f, e) : f = I_(e, l, u, v, _, f), typeof n.type == "function" && (n.__d = f)) : f && u.__e == f && f.parentNode != e && (f = Zr(u));
    }
  for (n.__e = g, i = m; i--; )
    v[i] != null && z_(v[i], v[i]);
  if (h)
    for (i = 0; i < h.length; i++)
      F_(h[i], h[++i], h[++i]);
}
function B_(e, t, n) {
  for (var r, s = e.__k, o = 0; s && o < s.length; o++)
    (r = s[o]) && (r.__ = e, t = typeof r.type == "function" ? B_(r, t, n) : I_(n, r, r, s, r.__e, t));
  return t;
}
function I_(e, t, n, r, s, o) {
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
    o === "children" || o === "key" || o in t || ki(e, o, null, n[o], r);
  for (o in t)
    s && typeof t[o] != "function" || o === "children" || o === "key" || o === "value" || o === "checked" || n[o] === t[o] || ki(e, o, t[o], n[o], r);
}
function gc(e, t, n) {
  t[0] === "-" ? e.setProperty(t, n) : e[t] = n == null ? "" : typeof n != "number" || Yg.test(t) ? n : n + "px";
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
            n && t in n || gc(e.style, t, "");
        if (n)
          for (t in n)
            r && n[t] === r[t] || gc(e.style, t, n[t]);
      }
    else if (t[0] === "o" && t[1] === "n")
      o = t !== (t = t.replace(/Capture$/, "")), t = t.toLowerCase() in e ? t.toLowerCase().slice(2) : t.slice(2), e.l || (e.l = {}), e.l[t + o] = n, n ? r || e.addEventListener(t, o ? bc : yc, o) : e.removeEventListener(t, o ? bc : yc, o);
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
function yc(e) {
  this.l[e.type + !1](ve.event ? ve.event(e) : e);
}
function bc(e) {
  this.l[e.type + !0](ve.event ? ve.event(e) : e);
}
function U_(e, t, n, r, s, o, a, c, f) {
  var p, i, d, u, l, _, g, h, v, m, k, b, E, $, S, y = t.type;
  if (t.constructor !== void 0)
    return null;
  n.__h != null && (f = n.__h, c = t.__e = n.__e, t.__h = null, o = [c]), (p = ve.__b) && p(t);
  try {
    e:
      if (typeof y == "function") {
        if (h = t.props, v = (p = y.contextType) && r[p.__c], m = p ? v ? v.props.value : p.__ : r, n.__c ? g = (i = t.__c = n.__c).__ = i.__E : ("prototype" in y && y.prototype.render ? t.__c = i = new y(h, m) : (t.__c = i = new Nr(h, m), i.constructor = y, i.render = Xg), v && v.sub(i), i.props = h, i.state || (i.state = {}), i.context = m, i.__n = r, d = i.__d = !0, i.__h = [], i._sb = []), i.__s == null && (i.__s = i.state), y.getDerivedStateFromProps != null && (i.__s == i.state && (i.__s = Kt({}, i.__s)), Kt(i.__s, y.getDerivedStateFromProps(h, i.__s))), u = i.props, l = i.state, d)
          y.getDerivedStateFromProps == null && i.componentWillMount != null && i.componentWillMount(), i.componentDidMount != null && i.__h.push(i.componentDidMount);
        else {
          if (y.getDerivedStateFromProps == null && h !== u && i.componentWillReceiveProps != null && i.componentWillReceiveProps(h, m), !i.__e && i.shouldComponentUpdate != null && i.shouldComponentUpdate(h, i.__s, m) === !1 || t.__v === n.__v) {
            for (i.props = h, i.state = i.__s, t.__v !== n.__v && (i.__d = !1), i.__v = t, t.__e = n.__e, t.__k = n.__k, t.__k.forEach(function(x) {
              x && (x.__ = t);
            }), k = 0; k < i._sb.length; k++)
              i.__h.push(i._sb[k]);
            i._sb = [], i.__h.length && a.push(i);
            break e;
          }
          i.componentWillUpdate != null && i.componentWillUpdate(h, i.__s, m), i.componentDidUpdate != null && i.__h.push(function() {
            i.componentDidUpdate(u, l, _);
          });
        }
        if (i.context = m, i.props = h, i.__v = t, i.__P = e, b = ve.__r, E = 0, "prototype" in y && y.prototype.render) {
          for (i.state = i.__s, i.__d = !1, b && b(t), p = i.render(i.props, i.state, i.context), $ = 0; $ < i._sb.length; $++)
            i.__h.push(i._sb[$]);
          i._sb = [];
        } else
          do
            i.__d = !1, b && b(t), p = i.render(i.props, i.state, i.context), i.state = i.__s;
          while (i.__d && ++E < 25);
        i.state = i.__s, i.getChildContext != null && (r = Kt(Kt({}, r), i.getChildContext())), d || i.getSnapshotBeforeUpdate == null || (_ = i.getSnapshotBeforeUpdate(u, l)), S = p != null && p.type === xa && p.key == null ? p.props.children : p, j_(e, Array.isArray(S) ? S : [S], t, n, r, s, o, a, c, f), i.base = t.__e, t.__h = null, i.__h.length && a.push(i), g && (i.__E = i.__ = null), i.__e = !1;
      } else
        o == null && t.__v === n.__v ? (t.__k = n.__k, t.__e = n.__e) : t.__e = Gg(n.__e, t, n, r, s, o, a, f);
    (p = ve.diffed) && p(t);
  } catch (x) {
    t.__v = null, (f || o != null) && (t.__e = c, t.__h = !!f, o[o.indexOf(c)] = null), ve.__e(x, t, n);
  }
}
function qg(e, t) {
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
function Gg(e, t, n, r, s, o, a, c) {
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
    if (o = o && ka.call(e.childNodes), p = (d = n.props || P_).dangerouslySetInnerHTML, i = u.dangerouslySetInnerHTML, !c) {
      if (o != null)
        for (d = {}, _ = 0; _ < e.attributes.length; _++)
          d[e.attributes[_].name] = e.attributes[_].value;
      (i || p) && (i && (p && i.__html == p.__html || i.__html === e.innerHTML) || (e.innerHTML = i && i.__html || ""));
    }
    if (Vg(e, u, d, s, c), i)
      t.__k = [];
    else if (_ = t.props.children, j_(e, Array.isArray(_) ? _ : [_], t, n, r, s && l !== "foreignObject", o, a, o ? o[0] : n.__k && Zr(n, 0), c), o != null)
      for (_ = o.length; _--; )
        o[_] != null && H_(o[_]);
    c || ("value" in u && (_ = u.value) !== void 0 && (_ !== e.value || l === "progress" && !_ || l === "option" && _ !== d.value) && ki(e, "value", _, d.value, !1), "checked" in u && (_ = u.checked) !== void 0 && _ !== e.checked && ki(e, "checked", _, d.checked, !1));
  }
  return e;
}
function F_(e, t, n) {
  try {
    typeof e == "function" ? e(t) : e.current = t;
  } catch (r) {
    ve.__e(r, n);
  }
}
function z_(e, t, n) {
  var r, s;
  if (ve.unmount && ve.unmount(e), (r = e.ref) && (r.current && r.current !== e.__e || F_(r, null, t)), (r = e.__c) != null) {
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
      r[s] && z_(r[s], t, n || typeof e.type != "function");
  n || e.__e == null || H_(e.__e), e.__ = e.__e = e.__d = void 0;
}
function Xg(e, t, n) {
  return this.constructor(e, n);
}
ka = R_.slice, ve = { __e: function(e, t, n, r) {
  for (var s, o, a; t = t.__; )
    if ((s = t.__c) && !s.__)
      try {
        if ((o = s.constructor) && o.getDerivedStateFromError != null && (s.setState(o.getDerivedStateFromError(e)), a = s.__d), s.componentDidCatch != null && (s.componentDidCatch(e, r || {}), a = s.__d), a)
          return s.__E = s;
      } catch (c) {
        e = c;
      }
  throw e;
} }, L_ = 0, Nr.prototype.setState = function(e, t) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = Kt({}, this.state), typeof e == "function" && (e = e(Kt({}, n), this.props)), e && Kt(n, e), e != null && this.__v && (t && this._sb.push(t), mc(this));
}, Nr.prototype.forceUpdate = function(e) {
  this.__v && (this.__e = !0, e && this.__h.push(e), mc(this));
}, Nr.prototype.render = xa, Tr = [], $i.__r = 0;
var un, _n;
class wc extends Nr {
  constructor(n) {
    var r;
    super(n);
    P(this, un, 0);
    P(this, _n, null);
    A(this, "_handleWheel", (n) => {
      var o;
      const { wheelContainer: r } = this.props, s = n.target;
      if (!(!s || !r) && (typeof r == "string" && s.closest(r) || typeof r == "object")) {
        const a = (this.props.type === "horz" ? n.deltaX : n.deltaY) * ((o = this.props.wheelSpeed) != null ? o : 1);
        this.scrollOffset(a) && n.preventDefault();
      }
    });
    A(this, "_handleMouseMove", (n) => {
      const { dragStart: r } = this.state;
      r && (w(this, un) && cancelAnimationFrame(w(this, un)), H(this, un, requestAnimationFrame(() => {
        const s = this.props.type === "horz" ? n.clientX - r.x : n.clientY - r.y;
        this.scroll(r.offset + s * this.props.scrollSize / this.props.clientSize), H(this, un, 0);
      })), n.preventDefault());
    });
    A(this, "_handleMouseUp", () => {
      this.state.dragStart && this.setState({
        dragStart: !1
      });
    });
    A(this, "_handleMouseDown", (n) => {
      this.state.dragStart || this.setState({ dragStart: { x: n.clientX, y: n.clientY, offset: this.scrollPos } }), n.stopPropagation();
    });
    A(this, "_handleClick", (n) => {
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
    n && (H(this, _n, typeof n == "string" ? document : n.current), w(this, _n).addEventListener("wheel", this._handleWheel, { passive: !1 }));
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
    return r === "horz" ? (_.height = s, _.width = n, g.width = this.barSize, g.left = Math.round(Math.min(d, u) * (n - g.width) / d)) : (_.width = s, _.height = n, g.height = this.barSize, g.top = Math.round(Math.min(d, u) * (n - g.height) / d)), /* @__PURE__ */ vc("div", {
      className: I("scrollbar", o, {
        "is-vert": r === "vert",
        "is-horz": r === "horz",
        "is-dragging": l
      }),
      style: _,
      onMouseDown: this._handleClick
    }, /* @__PURE__ */ vc("div", {
      className: "scrollbar-bar",
      style: g,
      onMouseDown: this._handleMouseDown
    }));
  }
}
un = new WeakMap(), _n = new WeakMap();
function $c(e, t, n) {
  return e && (t && (e = Math.max(t, e)), n && (e = Math.min(n, e))), e;
}
function Y_({ col: e, className: t, height: n, row: r, onRenderCell: s, style: o, outerStyle: a, children: c, outerClass: f, ...p }) {
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
  }], g = ["dtable-cell-content", t], h = [(x = c != null ? c : (y = r.data) == null ? void 0 : y[e.name]) != null ? x : ""], v = s ? s(h, { row: r, col: e }, V) : h, m = [], k = [], b = {}, E = {};
  let $ = "div";
  v == null || v.forEach((C) => {
    var W;
    if (typeof C == "object" && C && !k_(C) && ("html" in C || "className" in C || "style" in C || "attrs" in C || "children" in C || "tagName" in C)) {
      const F = C.outer ? m : k;
      C.html ? F.push(/* @__PURE__ */ V("div", {
        className: I("dtable-cell-html", C.className),
        style: C.style,
        dangerouslySetInnerHTML: { __html: C.html },
        ...(W = C.attrs) != null ? W : {}
      })) : (C.style && Object.assign(C.outer ? i : l, C.style), C.className && (C.outer ? _ : g).push(C.className), C.children && F.push(C.children), C.attrs && Object.assign(C.outer ? b : E, C.attrs)), C.tagName && !C.outer && ($ = C.tagName);
    } else
      k.push(C);
  });
  const S = $;
  return /* @__PURE__ */ V("div", {
    className: I(_),
    style: i,
    "data-col": e.name,
    ...p,
    ...b
  }, k.length > 0 && /* @__PURE__ */ V(S, {
    className: I(g),
    style: l,
    ...E
  }, k), m);
}
function as({ row: e, className: t, top: n = 0, left: r = 0, width: s, height: o, cols: a, CellComponent: c = Y_, onRenderCell: f }) {
  return /* @__PURE__ */ V("div", {
    className: I("dtable-cells", t),
    style: { top: n, left: r, width: s, height: o }
  }, a.map((p) => p.visible ? /* @__PURE__ */ V(c, {
    key: p.name,
    col: p,
    row: e,
    onRenderCell: f
  }) : null));
}
function V_({
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
  CellComponent: u = Y_,
  onRenderCell: l,
  style: _,
  ...g
}) {
  let h = null;
  s != null && s.length && (h = /* @__PURE__ */ V(as, {
    className: "dtable-fixed-left",
    cols: s,
    width: c,
    row: e,
    CellComponent: u,
    onRenderCell: l
  }));
  let v = null;
  a != null && a.length && (v = /* @__PURE__ */ V(as, {
    className: "dtable-flexable",
    cols: a,
    left: c - d,
    width: Math.max(f, p),
    row: e,
    CellComponent: u,
    onRenderCell: l
  }));
  let m = null;
  o != null && o.length && (m = /* @__PURE__ */ V(as, {
    className: "dtable-fixed-right",
    cols: o,
    left: c + f,
    width: i,
    row: e,
    CellComponent: u,
    onRenderCell: l
  }));
  const k = { top: n, height: r, lineHeight: `${r - 2}px`, ..._ };
  return /* @__PURE__ */ V("div", {
    className: I("dtable-row", t),
    style: k,
    "data-id": e.id,
    ...g
  }, h, v, m);
}
function Kg({ height: e, onRenderRow: t, ...n }) {
  const r = {
    height: e,
    ...n,
    row: { id: "HEADER", index: -1, top: 0 },
    className: "dtable-in-header",
    top: 0
  };
  if (t) {
    const s = t({ props: r }, V);
    s && Object.assign(r, s);
  }
  return /* @__PURE__ */ V("div", {
    className: "dtable-header",
    style: { height: e }
  }, /* @__PURE__ */ V(V_, {
    ...r
  }));
}
function Jg({
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
  return t = { ...t, top: n, height: s }, /* @__PURE__ */ V("div", {
    className: I("dtable-rows", e),
    style: t
  }, r.map((p) => {
    const i = {
      className: `dtable-row-${p.index % 2 ? "odd" : "even"}`,
      row: p,
      top: p.top - a,
      height: o,
      ...f
    }, d = c == null ? void 0 : c({ props: i, row: p }, V);
    return d && Object.assign(i, d), /* @__PURE__ */ V(V_, {
      ...i
    });
  }));
}
const xi = /* @__PURE__ */ new Map(), Si = [];
function q_(e, t) {
  const { name: n } = e;
  if (!(t != null && t.override) && xi.has(n))
    throw new Error(`DTable: Plugin with name ${n} already exists`);
  xi.set(n, e), (t == null ? void 0 : t.buildIn) && !Si.includes(n) && Si.push(n);
}
function nr(e, t) {
  q_(e, t);
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
function G_(e) {
  return xi.delete(e);
}
function Zg(e) {
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
function X_(e, t, n) {
  return t.forEach((r) => {
    var o;
    if (!r)
      return;
    const s = Zg(r);
    !s || n.has(s.name) || ((o = s.plugins) != null && o.length && X_(e, s.plugins, n), e.push(s), n.add(s.name));
  }), e;
}
function Qg(e = [], t = !0) {
  return t && Si.length && e.unshift(...Si), e != null && e.length ? X_([], e, /* @__PURE__ */ new Set()) : [];
}
function kc() {
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
var pn, jn, Ht, nt, Wt, ge, Ye, rt, Bn, ao, lo, bt, In, Un, Ai, K_, Di, J_, Ti, Z_, Ni, Q_, co, Es, Li, Pi, fo, uo, Ri, Hi, Wi, ep, ji, tp, Bi, np;
class Ss extends Dr {
  constructor(n) {
    var r;
    super(n);
    P(this, Ai);
    P(this, Di);
    P(this, Ti);
    P(this, Ni);
    P(this, co);
    P(this, Wi);
    P(this, ji);
    P(this, Bi);
    A(this, "ref", jg());
    P(this, pn, 0);
    P(this, jn, void 0);
    P(this, Ht, !1);
    P(this, nt, void 0);
    P(this, Wt, void 0);
    P(this, ge, []);
    P(this, Ye, void 0);
    P(this, rt, /* @__PURE__ */ new Map());
    P(this, Bn, {});
    P(this, ao, void 0);
    P(this, lo, []);
    A(this, "updateLayout", () => {
      w(this, pn) && cancelAnimationFrame(w(this, pn)), H(this, pn, requestAnimationFrame(() => {
        H(this, Ye, void 0), this.forceUpdate(), H(this, pn, 0);
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
    P(this, In, (n) => {
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
    H(this, jn, (r = n.id) != null ? r : `dtable-${zg(10)}`), this.state = { scrollTop: 0, scrollLeft: 0, renderCount: 0 }, H(this, Wt, Object.freeze(Qg(n.plugins))), w(this, Wt).forEach((s) => {
      var f;
      const { methods: o, data: a, state: c } = s;
      o && Object.entries(o).forEach(([p, i]) => {
        typeof i == "function" && Object.assign(this, { [p]: i.bind(this) });
      }), a && Object.assign(w(this, Bn), a.call(this)), c && Object.assign(this.state, c.call(this)), (f = s.onCreate) == null || f.call(this, s);
    });
  }
  get options() {
    var n;
    return ((n = w(this, Ye)) == null ? void 0 : n.options) || w(this, nt) || kc();
  }
  get plugins() {
    return w(this, ge);
  }
  get layout() {
    return w(this, Ye);
  }
  get id() {
    return w(this, jn);
  }
  get data() {
    return w(this, Bn);
  }
  get parent() {
    var n, r;
    return (r = this.props.parent) != null ? r : (n = this.ref.current) == null ? void 0 : n.parentElement;
  }
  componentWillReceiveProps() {
    H(this, nt, void 0);
  }
  componentDidMount() {
    if (w(this, Ht) ? this.forceUpdate() : ne(this, co, Es).call(this), w(this, ge).forEach((n) => {
      let { events: r } = n;
      !r || (typeof r == "function" && (r = r.call(this)), Object.entries(r).forEach(([s, o]) => {
        o && this.on(s, o);
      }));
    }), this.on("click", w(this, Ri)), this.on("keydown", w(this, Hi)), this.options.responsive) {
      if (typeof ResizeObserver < "u") {
        const { parent: n } = this;
        if (n) {
          const r = new ResizeObserver(this.updateLayout);
          r.observe(n), H(this, ao, r);
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
    w(this, Ht) ? ne(this, co, Es).call(this) : w(this, ge).forEach((n) => {
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
        s.startsWith("window_") ? window.removeEventListener(s.replace("window_", ""), w(this, In)) : s.startsWith("document_") ? document.removeEventListener(s.replace("document_", ""), w(this, Un)) : n.removeEventListener(s, w(this, bt));
    w(this, ge).forEach((s) => {
      var o;
      (o = s.onUnmounted) == null || o.call(this);
    }), w(this, Wt).forEach((s) => {
      var o;
      (o = s.onDestory) == null || o.call(this);
    }), H(this, Bn, {}), w(this, rt).clear();
  }
  on(n, r, s) {
    var a;
    s && (n = `${s}_${n}`);
    const o = w(this, rt).get(n);
    o ? o.push(r) : (w(this, rt).set(n, [r]), n.startsWith("window_") ? window.addEventListener(n.replace("window_", ""), w(this, In)) : n.startsWith("document_") ? document.addEventListener(n.replace("document_", ""), w(this, Un)) : (a = this.ref.current) == null || a.addEventListener(n, w(this, bt)));
  }
  off(n, r, s) {
    var c;
    s && (n = `${s}_${n}`);
    const o = w(this, rt).get(n);
    if (!o)
      return;
    const a = o.indexOf(r);
    a >= 0 && o.splice(a, 1), o.length || (w(this, rt).delete(n), n.startsWith("window_") ? window.removeEventListener(n.replace("window_", ""), w(this, In)) : n.startsWith("document_") ? document.removeEventListener(n.replace("document_", ""), w(this, Un)) : (c = this.ref.current) == null || c.removeEventListener(n, w(this, bt)));
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
      H(this, Ye, void 0);
    else if (s === "options") {
      if (H(this, nt, void 0), !w(this, Ye))
        return;
      H(this, Ye, void 0);
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
    const n = ne(this, Bi, np).call(this), { className: r, rowHover: s, colHover: o, cellHover: a, bordered: c, striped: f, scrollbarHover: p } = this.options, i = { width: n == null ? void 0 : n.width, height: n == null ? void 0 : n.height }, d = ["dtable", r, {
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
    }), /* @__PURE__ */ V("div", {
      id: w(this, jn),
      className: I(d),
      style: i,
      ref: this.ref,
      tabIndex: -1
    }, n && ne(this, Ai, K_).call(this, n), n && ne(this, Di, J_).call(this, n), n && ne(this, Ti, Z_).call(this, n), n && ne(this, Ni, Q_).call(this, n));
  }
}
pn = new WeakMap(), jn = new WeakMap(), Ht = new WeakMap(), nt = new WeakMap(), Wt = new WeakMap(), ge = new WeakMap(), Ye = new WeakMap(), rt = new WeakMap(), Bn = new WeakMap(), ao = new WeakMap(), lo = new WeakMap(), bt = new WeakMap(), In = new WeakMap(), Un = new WeakMap(), Ai = new WeakSet(), K_ = function(n) {
  const { header: r, colsInfo: s, headerHeight: o, scrollLeft: a } = n;
  if (!r)
    return null;
  if (r === !0)
    return /* @__PURE__ */ V(Kg, {
      scrollLeft: a,
      height: o,
      onRenderCell: w(this, fo),
      onRenderRow: w(this, Pi),
      ...s
    });
  const c = Array.isArray(r) ? r : [r];
  return /* @__PURE__ */ V(fs, {
    className: "dtable-header",
    style: { height: o },
    renders: c,
    generateArgs: [n],
    generatorThis: this
  });
}, Di = new WeakSet(), J_ = function(n) {
  const { headerHeight: r, rowsHeight: s, visibleRows: o, rowHeight: a, colsInfo: c, scrollLeft: f, scrollTop: p } = n;
  return /* @__PURE__ */ V(Jg, {
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
}, Ti = new WeakSet(), Z_ = function(n) {
  const { footer: r } = n;
  if (!r)
    return null;
  const s = typeof r == "function" ? r.call(this, n) : Array.isArray(r) ? r : [r];
  return /* @__PURE__ */ V(fs, {
    className: "dtable-footer",
    style: { height: n.footerHeight, top: n.rowsHeight + n.headerHeight },
    renders: s,
    generateArgs: [n],
    generatorThis: this,
    generators: n.footerGenerators
  });
}, Ni = new WeakSet(), Q_ = function(n) {
  const r = [], { scrollLeft: s, colsInfo: o, scrollTop: a, rowsHeight: c, rowsHeightTotal: f, footerHeight: p } = n, { scrollColsWidth: i, scrollWidth: d } = o, { scrollbarSize: u = 12, horzScrollbarPos: l } = this.options;
  return i > d && r.push(
    /* @__PURE__ */ V(wc, {
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
    /* @__PURE__ */ V(wc, {
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
}, co = new WeakSet(), Es = function() {
  var n;
  H(this, Ht, !1), (n = this.options.afterRender) == null || n.call(this), w(this, ge).forEach((r) => {
    var s;
    return (s = r.afterRender) == null ? void 0 : s.call(this);
  });
}, Li = new WeakMap(), Pi = new WeakMap(), fo = new WeakMap(), uo = new WeakMap(), Ri = new WeakMap(), Hi = new WeakMap(), Wi = new WeakSet(), ep = function() {
  if (w(this, nt))
    return !1;
  const r = { ...kc(), ...w(this, Wt).reduce((s, o) => {
    const { defaultOptions: a } = o;
    return a && Object.assign(s, a), s;
  }, {}), ...this.props };
  return H(this, nt, r), H(this, ge, w(this, Wt).reduce((s, o) => {
    const { when: a, options: c } = o;
    return (!a || a(r)) && (s.push(o), c && Object.assign(r, typeof c == "function" ? c.call(this, r) : c)), s;
  }, [])), H(this, lo, [this.options.i18n, ...this.plugins.map((s) => s.i18n)].filter(Boolean)), !0;
}, ji = new WeakSet(), tp = function() {
  var K, Q;
  const { plugins: n } = this;
  let r = w(this, nt);
  const s = {
    flex: /* @__PURE__ */ V("div", {
      style: "flex:auto"
    }),
    divider: /* @__PURE__ */ V("div", {
      style: "width:1px;margin:var(--space);background:var(--color-border);height:50%"
    })
  };
  n.forEach((L) => {
    var X;
    const Y = (X = L.beforeLayout) == null ? void 0 : X.call(this, r);
    Y && (r = { ...r, ...Y }), Object.assign(s, L.footer);
  });
  const { defaultColWidth: o, minColWidth: a, maxColWidth: c } = r, f = [], p = [], i = [], d = {}, u = [], l = [];
  let _ = 0, g = 0, h = 0;
  r.cols.forEach((L) => {
    var Et, je, Be;
    if (L.hidden)
      return;
    const {
      name: Y,
      type: X = "",
      fixed: q = !1,
      flex: J = !1,
      width: le = o,
      minWidth: ae = a,
      maxWidth: be = c,
      ...Ze
    } = L, ee = {
      name: Y,
      type: X,
      setting: {
        name: Y,
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
      width: $c(le, ae, be),
      realWidth: 0,
      visible: !0,
      index: u.length
    };
    n.forEach((Ct) => {
      var te, me;
      const Qe = (te = Ct.colTypes) == null ? void 0 : te[X];
      if (Qe) {
        const Ie = typeof Qe == "function" ? Qe(ee) : Qe;
        Ie && Object.assign(ee.setting, Ie);
      }
      (me = Ct.onAddCol) == null || me.call(this, ee);
    }), ee.width = $c((Et = ee.setting.width) != null ? Et : ee.width, (je = ee.setting.minWidth) != null ? je : ae, (Be = ee.setting.maxWidth) != null ? Be : be), ee.realWidth = ee.realWidth || ee.width, q === "left" ? (ee.left = _, _ += ee.width, f.push(ee)) : q === "right" ? (ee.left = g, g += ee.width, p.push(ee)) : (ee.left = h, h += ee.width, i.push(ee)), ee.flex && l.push(ee), u.push(ee), d[ee.name] = ee;
  });
  let v = r.width, m = 0;
  const k = _ + h + g;
  if (typeof v == "function" && (v = v.call(this, k)), v === "auto")
    m = k;
  else if (v === "100%") {
    const { parent: L } = this;
    if (L)
      m = L.clientWidth;
    else {
      m = 0, H(this, Ht, !0);
      return;
    }
  } else
    m = v != null ? v : 0;
  const { data: b, rowKey: E = "id", rowHeight: $ } = r, S = [], y = (L, Y, X) => {
    var J, le;
    const q = { data: X != null ? X : { [E]: L }, id: L, index: S.length, top: 0 };
    if (X || (q.lazy = !0), S.push(q), ((J = r.onAddRow) == null ? void 0 : J.call(this, q, Y)) !== !1) {
      for (const ae of n)
        if (((le = ae.onAddRow) == null ? void 0 : le.call(this, q, Y)) === !1)
          return;
    }
  };
  if (typeof b == "number")
    for (let L = 0; L < b; L++)
      y(`${L}`, L);
  else
    Array.isArray(b) && b.forEach((L, Y) => {
      var X;
      typeof L == "object" ? y(`${(X = L[E]) != null ? X : ""}`, Y, L) : y(`${L != null ? L : ""}`, Y);
    });
  let x = S;
  const C = {};
  if (r.onAddRows) {
    const L = r.onAddRows.call(this, x);
    L && (x = L);
  }
  for (const L of n) {
    const Y = (K = L.onAddRows) == null ? void 0 : K.call(this, x);
    Y && (x = Y);
  }
  x.forEach((L, Y) => {
    C[L.id] = L, L.index = Y, L.top = L.index * $;
  });
  const { header: W, footer: F } = r, D = W ? r.headerHeight || $ : 0, T = F ? r.footerHeight || $ : 0;
  let O = r.height, N = 0;
  const M = x.length * $, j = D + T + M;
  if (typeof O == "function" && (O = O.call(this, j)), O === "auto")
    N = j;
  else if (typeof O == "object")
    N = Math.min(O.max, Math.max(O.min, j));
  else if (O === "100%") {
    const { parent: L } = this;
    if (L)
      N = L.clientHeight;
    else {
      N = 0, H(this, Ht, !0);
      return;
    }
  } else
    N = O;
  const R = N - D - T, U = m - _ - g, G = {
    options: r,
    allRows: S,
    width: m,
    height: N,
    rows: x,
    rowsMap: C,
    rowHeight: $,
    rowsHeight: R,
    rowsHeightTotal: M,
    header: W,
    footer: F,
    footerGenerators: s,
    headerHeight: D,
    footerHeight: T,
    colsMap: d,
    colsList: u,
    flexCols: l,
    colsInfo: {
      fixedLeftCols: f,
      fixedRightCols: p,
      scrollCols: i,
      fixedLeftWidth: _,
      scrollWidth: U,
      scrollColsWidth: h,
      fixedRightWidth: g
    }
  }, z = (Q = r.onLayout) == null ? void 0 : Q.call(this, G);
  z && Object.assign(G, z), n.forEach((L) => {
    if (L.onLayout) {
      const Y = L.onLayout.call(this, G);
      Y && Object.assign(G, Y);
    }
  }), H(this, Ye, G);
}, Bi = new WeakSet(), np = function() {
  (ne(this, Wi, ep).call(this) || !w(this, Ye)) && ne(this, ji, tp).call(this);
  const { layout: n } = this;
  if (!n)
    return;
  let { scrollLeft: r } = this.state;
  const { flexCols: s, colsInfo: { scrollCols: o, scrollWidth: a, scrollColsWidth: c } } = n;
  if (s.length) {
    const k = a - c;
    if (k > 0) {
      const b = s.reduce(($, S) => $ + S.flex, 0);
      let E = 0;
      s.forEach(($) => {
        const S = Math.min(k - E, Math.ceil(k * ($.flex / b)));
        $.realWidth = S + $.width, E += $.realWidth;
      });
    } else
      s.forEach((b) => {
        b.realWidth = b.width;
      });
  }
  r = Math.min(Math.max(0, c - a), r);
  let f = 0;
  o.forEach((k) => {
    k.left = f, f += k.realWidth, k.visible = k.left + k.realWidth >= r && k.left <= r + a;
  });
  const { rowsHeightTotal: p, rowsHeight: i, rows: d, rowHeight: u } = n, l = Math.min(Math.max(0, p - i), this.state.scrollTop), _ = Math.floor(l / u), g = l + i, h = Math.min(d.length, Math.ceil(g / u)), v = [], { rowDataGetter: m } = this.options;
  for (let k = _; k < h; k++) {
    const b = d[k];
    b.lazy && m && (b.data = m([b.id])[0], b.lazy = !1), v.push(b);
  }
  return n.visibleRows = v, n.scrollTop = l, n.scrollLeft = r, n;
}, A(Ss, "addPlugin", q_), A(Ss, "removePlugin", G_);
function xc(e, t) {
  t !== void 0 ? e.data.hoverCol = t : t = e.data.hoverCol;
  const { current: n } = e.ref;
  if (!n)
    return;
  const r = "dtable-col-hover";
  n.querySelectorAll(`.${r}`).forEach((s) => s.classList.remove(r)), typeof t == "string" && t.length && n.querySelectorAll(`.dtable-cell[data-col="${t}"]`).forEach((s) => s.classList.add(r));
}
const ey = {
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
      xc(this, r);
    },
    mouseleave() {
      xc(this, !1);
    }
  }
}, ty = nr(ey, { buildIn: !0 });
function ny(e, t) {
  var a, c;
  typeof e == "boolean" && (t = e, e = void 0);
  const n = this.state.checkedRows, r = {}, { canRowCheckable: s } = this.options, o = (f, p) => {
    s && !s.call(this, f) || !!n[f] === p || (p ? n[f] = !0 : delete n[f], r[f] = p);
  };
  if (e === void 0 ? (t === void 0 && (t = !rp.call(this)), (a = this.layout) == null || a.allRows.forEach(({ id: f }) => {
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
function ry(e) {
  var t;
  return (t = this.state.checkedRows[e]) != null ? t : !1;
}
function rp() {
  var n, r;
  const e = this.getChecks().length, { canRowCheckable: t } = this.options;
  return t ? e === ((n = this.layout) == null ? void 0 : n.allRows.reduce((s, o) => s + (t.call(this, o.id) ? 1 : 0), 0)) : e === ((r = this.layout) == null ? void 0 : r.allRows.length);
}
function oy() {
  return Object.keys(this.state.checkedRows);
}
const iy = {
  name: "checkable",
  defaultOptions: { checkable: !0 },
  when: (e) => !!e.checkable,
  state() {
    return { checkedRows: {} };
  },
  methods: {
    toggleCheckRows: ny,
    isRowChecked: ry,
    isAllRowChecked: rp,
    getChecks: oy
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
        /* @__PURE__ */ V("div", {
          style: { padding: "0 calc(3 * var(--space))", display: "flex", alignItems: "center" },
          onClick: () => this.toggleCheckRows()
        }, /* @__PURE__ */ V("input", {
          type: "checkbox",
          checked: e
        }))
      ];
    },
    checkedInfo(e, t) {
      const n = this.getChecks().length, r = [];
      return n && r.push(this.i18n("checkedCountInfo", { selected: n })), r.push(this.i18n("totalCountInfo", { total: t.allRows.length })), [
        /* @__PURE__ */ V("div", null, r.join(", "))
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
      const p = this.isRowChecked(r), i = (f = (c = this.options.checkboxRender) == null ? void 0 : c.call(this, p, r)) != null ? f : /* @__PURE__ */ V("input", {
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
      const f = this.isAllRowChecked(), p = (c = (a = this.options.checkboxRender) == null ? void 0 : a.call(this, f, r)) != null ? c : /* @__PURE__ */ V("input", {
        type: "checkbox",
        checked: f
      });
      e.unshift(p), e.push({ className: "has-checkbox" });
    }
    return e;
  },
  onRenderRow({ props: e, row: t }) {
    if (!!this.isRowChecked(t.id))
      return { className: I(e.className, "is-checked") };
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
}, sy = nr(iy);
var op = /* @__PURE__ */ ((e) => (e.unknown = "", e.collapsed = "collapsed", e.expanded = "expanded", e.hidden = "hidden", e.normal = "normal", e))(op || {});
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
function ay(e, t) {
  var s;
  let n = (s = this.state.collapsedRows) != null ? s : {};
  const { nestedMap: r } = this.data;
  if (e === "HEADER")
    if (t === void 0 && (t = !ip.call(this)), t) {
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
function ip() {
  const e = this.data.nestedMap.values();
  for (const t of e)
    if (t.state === "expanded")
      return !1;
  return !0;
}
function sp(e, t = 0, n, r = 0) {
  var s;
  n || (n = [...e.keys()]);
  for (const o of n) {
    const a = e.get(o);
    !a || (a.level === r && (a.order = t++), (s = a.children) != null && s.length && (t = sp(e, t, a.children, r + 1)));
  }
  return t;
}
function ap(e, t, n, r) {
  const s = e.getNestedRowInfo(t);
  return !s || s.state === "" || !s.children || s.children.forEach((o) => {
    r[o] = n, ap(e, o, n, r);
  }), s;
}
function lp(e, t, n, r, s) {
  var c;
  const o = e.getNestedRowInfo(t);
  if (!o || o.state === "")
    return;
  ((c = o.children) == null ? void 0 : c.every((f) => {
    const p = !!(r[f] !== void 0 ? r[f] : s[f]);
    return n === p;
  })) && (r[t] = n), o.parent && lp(e, o.parent, n, r, s);
}
const ly = {
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
        const a = ap(this, s, o, r);
        a != null && a.parent && lp(this, a.parent, o, r, n);
      }), r;
    }
  },
  when: (e) => !!e.nested,
  data() {
    return { nestedMap: /* @__PURE__ */ new Map() };
  },
  methods: {
    toggleRow: ay,
    isAllCollapsed: ip,
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
    return e = e.filter((t) => this.getNestedRowInfo(t.id).state !== "hidden"), sp(this.data.nestedMap), e.sort((t, n) => {
      var a, c;
      const r = this.getNestedRowInfo(t.id), s = this.getNestedRowInfo(n.id), o = ((a = r.order) != null ? a : 0) - ((c = s.order) != null ? c : 0);
      return o === 0 ? t.index - n.index : o;
    }), e;
  },
  onRenderCell(e, { col: t, row: n }) {
    var c, f, p;
    const { id: r, data: s } = n, { nestedToggle: o } = t.setting, a = this.getNestedRowInfo(r);
    if (o && (a.children || a.parent) && e.unshift((f = (c = this.options.onRenderNestedToggle) == null ? void 0 : c.call(this, a, r, t, s)) != null ? f : /* @__PURE__ */ V("a", {
      role: "button",
      className: `dtable-nested-toggle state${a.children ? "" : " is-no-child"}`
    }, /* @__PURE__ */ V("span", {
      className: "toggle-icon"
    }))), a.level) {
      let { nestedIndent: i = o } = t.setting;
      i && (i === !0 && (i = (p = this.options.nestedIndent) != null ? p : 12), e.unshift(/* @__PURE__ */ V("div", {
        className: "dtable-nested-indent",
        style: { width: i * a.level + "px" }
      })));
    }
    return e;
  },
  onRenderHeaderCell(e, { row: t, col: n }) {
    var s, o;
    const { id: r } = t;
    return n.setting.nestedToggle && e.unshift((o = (s = this.options.onRenderNestedToggle) == null ? void 0 : s.call(this, void 0, r, n, void 0)) != null ? o : /* @__PURE__ */ V("a", {
      type: "button",
      className: "dtable-nested-toggle state"
    }, /* @__PURE__ */ V("span", {
      className: "toggle-icon"
    }))), e;
  },
  onRenderRow({ props: e, row: t }) {
    const n = this.getNestedRowInfo(t.id);
    return {
      className: I(e.className, `is-${n.state}`),
      "data-parent": n.parent
    };
  },
  onRenderHeaderRow({ props: e }) {
    return e.className = I(e.className, `is-${this.isAllCollapsed() ? "collapsed" : "expanded"}`), e;
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
}, cy = nr(ly);
const fy = {
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
        const { linkTemplate: r = "", linkProps: s } = t.setting, o = Se(r, n.data);
        return e[0] = /* @__PURE__ */ V("a", {
          href: o,
          ...s
        }, e[0]), e;
      }
    },
    avatar: {
      onRenderCell(e, { col: t, row: n }) {
        const { data: r } = n, { avatarWithName: s, avatarClass: o = "size-xs circle", avatarKey: a = `${t.name}Avatar` } = t.setting, c = /* @__PURE__ */ V("div", {
          className: `avatar ${o} flex-none`
        }, /* @__PURE__ */ V("img", {
          src: r ? r[a] : ""
        }));
        return s ? e.unshift(c) : e[0] = c, e;
      }
    },
    circleProgress: {
      align: "center",
      onRenderCell(e, { col: t }) {
        const { circleSize: n = 24, circleBorderSize: r = 1, circleBgColor: s = "var(--color-border)", circleColor: o = "var(--color-success-500)" } = t.setting, a = (n - r) / 2, c = n / 2, f = e[0];
        return e[0] = /* @__PURE__ */ V("svg", {
          width: n,
          height: n
        }, /* @__PURE__ */ V("circle", {
          cx: c,
          cy: c,
          r: a,
          "stroke-width": r,
          stroke: s,
          fill: "transparent"
        }), /* @__PURE__ */ V("circle", {
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
        }), /* @__PURE__ */ V("text", {
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
            return p && (f = { className: a, ...p, ...f }), Se(s, f);
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
        return typeof r == "function" ? e[0] = s === "html" ? { html: r(o) } : r(o) : s === "datetime" ? e[0] = $s(o, r) : s === "html" ? e[0] = { html: Se(r, o) } : e[0] = Se(r, o), e;
      }
    }
  }
}, uy = nr(fy, { buildIn: !0 }), _y = {
  name: "sort-type",
  onRenderHeaderCell(e, { col: t }) {
    const { sortType: n } = t.setting;
    if (n) {
      const { sortLink: r = this.options.sortLink, sortAttrs: s } = t.setting, o = n === !0 ? "none" : n;
      if (e.push(
        /* @__PURE__ */ V("div", {
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
}, py = nr(_y, { buildIn: !0 }), dy = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  colHover: ty,
  checkable: sy,
  NestedRowState: op,
  nested: cy,
  rich: uy,
  sortType: py
}, Symbol.toStringTag, { value: "Module" }));
class sr extends Je {
}
A(sr, "NAME", "dtable"), A(sr, "Component", Ss), A(sr, "definePlugin", nr), A(sr, "removePlugin", G_), A(sr, "plugins", dy);
var ot, ke;
class hy {
  constructor(t) {
    P(this, ot, void 0);
    P(this, ke, void 0);
    H(this, ot, t), H(this, ke, document.querySelector(t.getAttribute("data-target")) || document.querySelector(t.getAttribute("data-tab")) || document.querySelector(t.getAttribute("href")));
  }
  showTarget() {
    this.addActive(w(this, ot).parentElement.parentElement, w(this, ot).parentElement), this.addActive(w(this, ke).parentElement, w(this, ke)), w(this, ke).dispatchEvent(new CustomEvent("show.zui3.tab"));
  }
  show() {
    H(this, ke, w(this, ot)), this.addActive(w(this, ke).parentElement, w(this, ke)), H(this, ot, document.querySelector(`[href='#${w(this, ke).getAttribute("id")}']`) || document.querySelector(`[data-tab='#${w(this, ke).getAttribute("id")}']`) || document.querySelector(`[data-target='#${w(this, ke).getAttribute("id")}']`)), this.addActive(w(this, ot).parentElement.parentElement, w(this, ot).parentElement);
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
  e.target instanceof HTMLElement && (e.target.dataset.toggle === "tab" || e.target.getAttribute("data-tab")) && (e.preventDefault(), new hy(e.target).showTarget());
});
export {
  Wa as ActionMenu,
  Ba as ActionMenuNested,
  yl as Avatar,
  bl as BtnGroup,
  Va as Button,
  xe as ContextMenu,
  sr as DTable,
  it as Datetimepicker,
  we as Dropdown,
  Ms as EventBus,
  qa as Menu,
  il as Messager,
  De as Modal,
  wn as ModalTrigger,
  Nl as Nav,
  hy as NavTabs,
  tc as Pager,
  ul as ProgressCircle,
  ht as TIME_DAY,
  nc as Toolbar,
  st as Tooltip,
  $p as addI18nMap,
  yy as browser,
  ec as calculateTimestamp,
  gy as convertBytes,
  Ae as createDate,
  my as formatBytes,
  $s as formatDate,
  Sy as formatDateSpan,
  Se as formatString,
  bp as getLangCode,
  Ey as getTimeBeforeDesc,
  _o as i18n,
  xy as isDBY,
  os as isObject,
  vo as isSameDay,
  Mm as isSameMonth,
  by as isSameWeek,
  Ql as isSameYear,
  wy as isToday,
  ky as isTomorrow,
  $y as isYesterday,
  cs as mergeDeep,
  ls as nativeEvents,
  wp as setLangCode,
  ld as store
};
