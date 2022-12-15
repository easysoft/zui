var K_ = Object.defineProperty;
var J_ = (e, t, n) => t in e ? K_(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var N = (e, t, n) => (J_(e, typeof t != "symbol" ? t + "" : t, n), n), Gi = (e, t, n) => {
  if (!t.has(e))
    throw TypeError("Cannot " + n);
};
var w = (e, t, n) => (Gi(e, t, "read from private field"), n ? n.call(e) : t.get(e)), L = (e, t, n) => {
  if (t.has(e))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(e) : t.set(e, n);
}, H = (e, t, n, r) => (Gi(e, t, "write to private field"), r ? r.call(e, n) : t.set(e, n), n);
var ve = (e, t, n) => (Gi(e, t, "access private method"), n);
var Ni, ne, vc, mc, nr, ma, Ro = {}, gc = [], Z_ = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function Lt(e, t) {
  for (var n in t)
    e[n] = t[n];
  return e;
}
function yc(e) {
  var t = e.parentNode;
  t && t.removeChild(e);
}
function Pi(e, t, n) {
  var r, s, o, a = {};
  for (o in t)
    o == "key" ? r = t[o] : o == "ref" ? s = t[o] : a[o] = t[o];
  if (arguments.length > 2 && (a.children = arguments.length > 3 ? Ni.call(arguments, 2) : n), typeof e == "function" && e.defaultProps != null)
    for (o in e.defaultProps)
      a[o] === void 0 && (a[o] = e.defaultProps[o]);
  return vo(e, a, r, s, null);
}
function vo(e, t, n, r, s) {
  var o = { type: e, props: t, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: s == null ? ++vc : s };
  return s == null && ne.vnode != null && ne.vnode(o), o;
}
function Q_() {
  return { current: null };
}
function Li(e) {
  return e.children;
}
function mo(e, t) {
  this.props = e, this.context = t;
}
function Or(e, t) {
  if (t == null)
    return e.__ ? Or(e.__, e.__.__k.indexOf(e) + 1) : null;
  for (var n; t < e.__k.length; t++)
    if ((n = e.__k[t]) != null && n.__e != null)
      return n.__e;
  return typeof e.type == "function" ? Or(e) : null;
}
function bc(e) {
  var t, n;
  if ((e = e.__) != null && e.__c != null) {
    for (e.__e = e.__c.base = null, t = 0; t < e.__k.length; t++)
      if ((n = e.__k[t]) != null && n.__e != null) {
        e.__e = e.__c.base = n.__e;
        break;
      }
    return bc(e);
  }
}
function ga(e) {
  (!e.__d && (e.__d = !0) && nr.push(e) && !Ho.__r++ || ma !== ne.debounceRendering) && ((ma = ne.debounceRendering) || setTimeout)(Ho);
}
function Ho() {
  for (var e; Ho.__r = nr.length; )
    e = nr.sort(function(t, n) {
      return t.__v.__b - n.__v.__b;
    }), nr = [], e.some(function(t) {
      var n, r, s, o, a, c;
      t.__d && (a = (o = (n = t).__v).__e, (c = n.__P) && (r = [], (s = Lt({}, o)).__v = o.__v + 1, gs(c, o, s, n.__n, c.ownerSVGElement !== void 0, o.__h != null ? [a] : null, r, a == null ? Or(o) : a, o.__h), xc(r, o), o.__e != a && bc(o)));
    });
}
function wc(e, t, n, r, s, o, a, c, f, p) {
  var i, d, u, l, _, g, h, v = r && r.__k || gc, m = v.length;
  for (n.__k = [], i = 0; i < t.length; i++)
    if ((l = n.__k[i] = (l = t[i]) == null || typeof l == "boolean" ? null : typeof l == "string" || typeof l == "number" || typeof l == "bigint" ? vo(null, l, null, null, l) : Array.isArray(l) ? vo(Li, { children: l }, null, null, null) : l.__b > 0 ? vo(l.type, l.props, l.key, l.ref ? l.ref : null, l.__v) : l) != null) {
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
      gs(e, l, u = u || Ro, s, o, a, c, f, p), _ = l.__e, (d = l.ref) && u.ref != d && (h || (h = []), u.ref && h.push(u.ref, null, l), h.push(d, l.__c || _, l)), _ != null ? (g == null && (g = _), typeof l.type == "function" && l.__k === u.__k ? l.__d = f = $c(l, f, e) : f = kc(e, l, u, v, _, f), typeof n.type == "function" && (n.__d = f)) : f && u.__e == f && f.parentNode != e && (f = Or(u));
    }
  for (n.__e = g, i = m; i--; )
    v[i] != null && Sc(v[i], v[i]);
  if (h)
    for (i = 0; i < h.length; i++)
      Ec(h[i], h[++i], h[++i]);
}
function $c(e, t, n) {
  for (var r, s = e.__k, o = 0; s && o < s.length; o++)
    (r = s[o]) && (r.__ = e, t = typeof r.type == "function" ? $c(r, t, n) : kc(n, r, r, s, r.__e, t));
  return t;
}
function kc(e, t, n, r, s, o) {
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
function ep(e, t, n, r, s) {
  var o;
  for (o in n)
    o === "children" || o === "key" || o in t || Wo(e, o, null, n[o], r);
  for (o in t)
    s && typeof t[o] != "function" || o === "children" || o === "key" || o === "value" || o === "checked" || n[o] === t[o] || Wo(e, o, t[o], n[o], r);
}
function ya(e, t, n) {
  t[0] === "-" ? e.setProperty(t, n) : e[t] = n == null ? "" : typeof n != "number" || Z_.test(t) ? n : n + "px";
}
function Wo(e, t, n, r, s) {
  var o;
  e:
    if (t === "style")
      if (typeof n == "string")
        e.style.cssText = n;
      else {
        if (typeof r == "string" && (e.style.cssText = r = ""), r)
          for (t in r)
            n && t in n || ya(e.style, t, "");
        if (n)
          for (t in n)
            r && n[t] === r[t] || ya(e.style, t, n[t]);
      }
    else if (t[0] === "o" && t[1] === "n")
      o = t !== (t = t.replace(/Capture$/, "")), t = t.toLowerCase() in e ? t.toLowerCase().slice(2) : t.slice(2), e.l || (e.l = {}), e.l[t + o] = n, n ? r || e.addEventListener(t, o ? wa : ba, o) : e.removeEventListener(t, o ? wa : ba, o);
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
function ba(e) {
  this.l[e.type + !1](ne.event ? ne.event(e) : e);
}
function wa(e) {
  this.l[e.type + !0](ne.event ? ne.event(e) : e);
}
function gs(e, t, n, r, s, o, a, c, f) {
  var p, i, d, u, l, _, g, h, v, m, k, b, S, $, E, y = t.type;
  if (t.constructor !== void 0)
    return null;
  n.__h != null && (f = n.__h, c = t.__e = n.__e, t.__h = null, o = [c]), (p = ne.__b) && p(t);
  try {
    e:
      if (typeof y == "function") {
        if (h = t.props, v = (p = y.contextType) && r[p.__c], m = p ? v ? v.props.value : p.__ : r, n.__c ? g = (i = t.__c = n.__c).__ = i.__E : ("prototype" in y && y.prototype.render ? t.__c = i = new y(h, m) : (t.__c = i = new mo(h, m), i.constructor = y, i.render = np), v && v.sub(i), i.props = h, i.state || (i.state = {}), i.context = m, i.__n = r, d = i.__d = !0, i.__h = [], i._sb = []), i.__s == null && (i.__s = i.state), y.getDerivedStateFromProps != null && (i.__s == i.state && (i.__s = Lt({}, i.__s)), Lt(i.__s, y.getDerivedStateFromProps(h, i.__s))), u = i.props, l = i.state, d)
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
        if (i.context = m, i.props = h, i.__v = t, i.__P = e, b = ne.__r, S = 0, "prototype" in y && y.prototype.render) {
          for (i.state = i.__s, i.__d = !1, b && b(t), p = i.render(i.props, i.state, i.context), $ = 0; $ < i._sb.length; $++)
            i.__h.push(i._sb[$]);
          i._sb = [];
        } else
          do
            i.__d = !1, b && b(t), p = i.render(i.props, i.state, i.context), i.state = i.__s;
          while (i.__d && ++S < 25);
        i.state = i.__s, i.getChildContext != null && (r = Lt(Lt({}, r), i.getChildContext())), d || i.getSnapshotBeforeUpdate == null || (_ = i.getSnapshotBeforeUpdate(u, l)), E = p != null && p.type === Li && p.key == null ? p.props.children : p, wc(e, Array.isArray(E) ? E : [E], t, n, r, s, o, a, c, f), i.base = t.__e, t.__h = null, i.__h.length && a.push(i), g && (i.__E = i.__ = null), i.__e = !1;
      } else
        o == null && t.__v === n.__v ? (t.__k = n.__k, t.__e = n.__e) : t.__e = tp(n.__e, t, n, r, s, o, a, f);
    (p = ne.diffed) && p(t);
  } catch (x) {
    t.__v = null, (f || o != null) && (t.__e = c, t.__h = !!f, o[o.indexOf(c)] = null), ne.__e(x, t, n);
  }
}
function xc(e, t) {
  ne.__c && ne.__c(t, e), e.some(function(n) {
    try {
      e = n.__h, n.__h = [], e.some(function(r) {
        r.call(n);
      });
    } catch (r) {
      ne.__e(r, n.__v);
    }
  });
}
function tp(e, t, n, r, s, o, a, c) {
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
    if (o = o && Ni.call(e.childNodes), p = (d = n.props || Ro).dangerouslySetInnerHTML, i = u.dangerouslySetInnerHTML, !c) {
      if (o != null)
        for (d = {}, _ = 0; _ < e.attributes.length; _++)
          d[e.attributes[_].name] = e.attributes[_].value;
      (i || p) && (i && (p && i.__html == p.__html || i.__html === e.innerHTML) || (e.innerHTML = i && i.__html || ""));
    }
    if (ep(e, u, d, s, c), i)
      t.__k = [];
    else if (_ = t.props.children, wc(e, Array.isArray(_) ? _ : [_], t, n, r, s && l !== "foreignObject", o, a, o ? o[0] : n.__k && Or(n, 0), c), o != null)
      for (_ = o.length; _--; )
        o[_] != null && yc(o[_]);
    c || ("value" in u && (_ = u.value) !== void 0 && (_ !== e.value || l === "progress" && !_ || l === "option" && _ !== d.value) && Wo(e, "value", _, d.value, !1), "checked" in u && (_ = u.checked) !== void 0 && _ !== e.checked && Wo(e, "checked", _, d.checked, !1));
  }
  return e;
}
function Ec(e, t, n) {
  try {
    typeof e == "function" ? e(t) : e.current = t;
  } catch (r) {
    ne.__e(r, n);
  }
}
function Sc(e, t, n) {
  var r, s;
  if (ne.unmount && ne.unmount(e), (r = e.ref) && (r.current && r.current !== e.__e || Ec(r, null, t)), (r = e.__c) != null) {
    if (r.componentWillUnmount)
      try {
        r.componentWillUnmount();
      } catch (o) {
        ne.__e(o, t);
      }
    r.base = r.__P = null, e.__c = void 0;
  }
  if (r = e.__k)
    for (s = 0; s < r.length; s++)
      r[s] && Sc(r[s], t, n || typeof e.type != "function");
  n || e.__e == null || yc(e.__e), e.__ = e.__e = e.__d = void 0;
}
function np(e, t, n) {
  return this.constructor(e, n);
}
function rp(e, t, n) {
  var r, s, o;
  ne.__ && ne.__(e, t), s = (r = typeof n == "function") ? null : n && n.__k || t.__k, o = [], gs(t, e = (!r && n || t).__k = Pi(Li, null, [e]), s || Ro, Ro, t.ownerSVGElement !== void 0, !r && n ? [n] : s ? null : t.firstChild ? Ni.call(t.childNodes) : null, o, !r && n ? n : s ? s.__e : t.firstChild, r), xc(o, e);
}
Ni = gc.slice, ne = { __e: function(e, t, n, r) {
  for (var s, o, a; t = t.__; )
    if ((s = t.__c) && !s.__)
      try {
        if ((o = s.constructor) && o.getDerivedStateFromError != null && (s.setState(o.getDerivedStateFromError(e)), a = s.__d), s.componentDidCatch != null && (s.componentDidCatch(e, r || {}), a = s.__d), a)
          return s.__E = s;
      } catch (c) {
        e = c;
      }
  throw e;
} }, vc = 0, mc = function(e) {
  return e != null && e.constructor === void 0;
}, mo.prototype.setState = function(e, t) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = Lt({}, this.state), typeof e == "function" && (e = e(Lt({}, n), this.props)), e && Lt(n, e), e != null && this.__v && (t && this._sb.push(t), ga(this));
}, mo.prototype.forceUpdate = function(e) {
  this.__v && (this.__e = !0, e && this.__h.push(e), ga(this));
}, mo.prototype.render = Li, nr = [], Ho.__r = 0;
var pt;
class op {
  constructor(t = "") {
    L(this, pt, void 0);
    typeof t == "object" ? H(this, pt, t) : H(this, pt, document.appendChild(document.createComment(t)));
  }
  on(t, n, r) {
    w(this, pt).addEventListener(t, n, r);
  }
  once(t, n, r) {
    w(this, pt).addEventListener(t, n, { once: !0, ...r });
  }
  off(t, n, r) {
    w(this, pt).removeEventListener(t, n, r);
  }
  emit(t) {
    return w(this, pt).dispatchEvent(t), t;
  }
}
pt = new WeakMap();
const Qi = /* @__PURE__ */ new Set([
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
class ys extends op {
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
    return typeof t == "string" && (Qi.has(t) ? (t = new Event(t), Object.assign(t, { detail: n })) : t = new CustomEvent(t, { detail: n })), super.emit(ys.createEvent(t, n));
  }
  static createEvent(t, n) {
    return typeof t == "string" && (Qi.has(t) ? (t = new Event(t), Object.assign(t, { detail: n })) : t = new CustomEvent(t, { detail: n })), t;
  }
}
var dt, qr, nn, tr;
class $a extends ys {
  constructor(n = "", r) {
    super(n);
    L(this, nn);
    L(this, dt, /* @__PURE__ */ new Map());
    L(this, qr, void 0);
    H(this, qr, r == null ? void 0 : r.customEventSuffix);
  }
  on(n, r, s) {
    n = ve(this, nn, tr).call(this, n), super.on(n, r, s), w(this, dt).set(r, [n, s]);
  }
  off(n, r, s) {
    n = ve(this, nn, tr).call(this, n), super.off(n, r, s), w(this, dt).delete(r);
  }
  once(n, r, s) {
    n = ve(this, nn, tr).call(this, n);
    const o = (a) => {
      r(a), w(this, dt).delete(o);
    };
    super.once(n, o, s), w(this, dt).set(o, [n, s]);
  }
  emit(n, r) {
    return typeof n == "string" && (n = ve(this, nn, tr).call(this, n)), super.emit(n, r);
  }
  offAll() {
    Array.from(w(this, dt).entries()).forEach(([n, [r, s]]) => {
      super.off(r, n, s);
    }), w(this, dt).clear();
  }
}
dt = new WeakMap(), qr = new WeakMap(), nn = new WeakSet(), tr = function(n) {
  const r = w(this, qr);
  return Qi.has(n) || typeof r != "string" || n.endsWith(r) ? n : `${n}${r}`;
};
function ip(e, t) {
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
function sp(e, t, n) {
  const r = ip(e, t), s = r[r.length - 1];
  return s === void 0 ? n : s;
}
function Xi(e) {
  return !!e && typeof e == "object" && !Array.isArray(e);
}
function es(e, ...t) {
  if (!t.length)
    return e;
  const n = t.shift();
  if (Xi(e) && Xi(n))
    for (const r in n)
      Xi(n[r]) ? (e[r] || Object.assign(e, { [r]: {} }), es(e[r], n[r])) : Object.assign(e, { [r]: n[r] });
  return es(e, ...t);
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
var bs = /* @__PURE__ */ ((e) => (e[e.B = 1] = "B", e[e.KB = 1024] = "KB", e[e.MB = 1048576] = "MB", e[e.GB = 1073741824] = "GB", e[e.TB = 1099511627776] = "TB", e))(bs || {});
function sy(e, t = 2, n = "") {
  return Number.isNaN(e) ? "?KB" : (n || (e < 1024 ? n = "B" : e < 1048576 ? n = "KB" : e < 1073741824 ? n = "MB" : e < 1099511627776 ? n = "GB" : n = "TB"), (e / bs[n]).toFixed(t) + n);
}
const ay = (e) => {
  const t = /^[0-9]*(B|KB|MB|GB|TB)$/;
  e = e.toUpperCase();
  const n = e.match(t);
  if (!n)
    return 0;
  const r = n[1];
  return e = e.replace(r, ""), Number.parseInt(e, 10) * bs[r];
};
var dc, hc;
let ws = (hc = (dc = document.documentElement.getAttribute("lang")) == null ? void 0 : dc.toLowerCase()) != null ? hc : "zh_cn", Mt;
function ap() {
  return ws;
}
function lp(e) {
  ws = e.toLowerCase();
}
function cp(e, t) {
  Mt || (Mt = {}), typeof e == "string" && (e = { [e]: t != null ? t : {} }), es(Mt, e);
}
function io(e, t, n, r, s, o) {
  Array.isArray(e) ? Mt && e.unshift(Mt) : e = Mt ? [Mt, e] : [e], typeof n == "string" && (o = s, s = r, r = n, n = void 0);
  const a = s || ws;
  let c;
  for (const f of e) {
    if (!f)
      continue;
    const p = f[a];
    if (!p)
      continue;
    const i = o && f === Mt ? `${o}.${t}` : t;
    if (c = sp(p, i), c !== void 0)
      break;
  }
  return c === void 0 ? r : n ? Ee(c, ...Array.isArray(n) ? n : [n]) : c;
}
io.addLang = cp;
io.getCode = ap;
io.setCode = lp;
function fp(e) {
  return Object.fromEntries(Object.entries(e).map(([t, n]) => {
    if (typeof n == "string")
      try {
        n = JSON.parse(n);
      } catch {
      }
    return [t, n];
  }));
}
var ht, gn, $e;
class cn {
  constructor(t, n) {
    L(this, ht, void 0);
    L(this, gn, void 0);
    L(this, $e, void 0);
    var r;
    t = typeof t == "string" ? document.querySelector(t) : t, this.constructor.EVENTS && H(this, $e, new $a(t, { customEventSuffix: `.${this.constructor.KEY}` })), H(this, ht, { ...this.constructor.DEFAULT, ...t instanceof HTMLElement ? fp(t.dataset) : null, ...n }), this.constructor.all.set(t, this), H(this, gn, t), this.init(), (r = w(this, $e)) == null || r.emit("inited", this);
  }
  get options() {
    return w(this, ht);
  }
  get element() {
    return w(this, gn);
  }
  get events() {
    return w(this, $e);
  }
  init() {
  }
  setOptions(t) {
    return t && Object.assign(w(this, ht), t), w(this, ht);
  }
  render(t) {
    this.setOptions(t);
  }
  destroy() {
    this.constructor.all.delete(w(this, gn)), w(this, $e) && (w(this, $e).emit("destroyed", this), w(this, $e).offAll());
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
    let r = $a.createEvent(t, n);
    const s = `on${r.type.replace(`.${this.constructor.KEY}`, "")}`, o = w(this, ht)[s];
    return o && o(r) === !1 && (r.preventDefault(), r.stopPropagation()), r = (a = w(this, $e)) == null ? void 0 : a.emit(r), r;
  }
  i18n(t, n, r) {
    var s;
    return (s = io(w(this, ht).i18n, t, n, r, this.options.lang, this.constructor.NAME)) != null ? s : `{i18n:${t}}`;
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
ht = new WeakMap(), gn = new WeakMap(), $e = new WeakMap(), N(cn, "EVENTS", !1), N(cn, "DEFAULT", {}), N(cn, "allComponents", /* @__PURE__ */ new Map());
class Ke extends cn {
  constructor() {
    super(...arguments);
    N(this, "ref", Q_());
  }
  get $() {
    return this.ref.current;
  }
  init() {
    requestAnimationFrame(() => this.render());
  }
  render(n) {
    const r = this.constructor.Component;
    rp(/* @__PURE__ */ Pi(r, {
      ref: this.ref,
      ...this.setOptions(n)
    }), this.element);
  }
}
var $s, le, Cc, Oc, rr, ka, Mc = {}, Ac = [], up = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function Rt(e, t) {
  for (var n in t)
    e[n] = t[n];
  return e;
}
function Dc(e) {
  var t = e.parentNode;
  t && t.removeChild(e);
}
function ye(e, t, n) {
  var r, s, o, a = {};
  for (o in t)
    o == "key" ? r = t[o] : o == "ref" ? s = t[o] : a[o] = t[o];
  if (arguments.length > 2 && (a.children = arguments.length > 3 ? $s.call(arguments, 2) : n), typeof e == "function" && e.defaultProps != null)
    for (o in e.defaultProps)
      a[o] === void 0 && (a[o] = e.defaultProps[o]);
  return go(e, a, r, s, null);
}
function go(e, t, n, r, s) {
  var o = { type: e, props: t, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: s == null ? ++Cc : s };
  return s == null && le.vnode != null && le.vnode(o), o;
}
function _p() {
  return { current: null };
}
function ks(e) {
  return e.children;
}
function or(e, t) {
  this.props = e, this.context = t;
}
function Mr(e, t) {
  if (t == null)
    return e.__ ? Mr(e.__, e.__.__k.indexOf(e) + 1) : null;
  for (var n; t < e.__k.length; t++)
    if ((n = e.__k[t]) != null && n.__e != null)
      return n.__e;
  return typeof e.type == "function" ? Mr(e) : null;
}
function Tc(e) {
  var t, n;
  if ((e = e.__) != null && e.__c != null) {
    for (e.__e = e.__c.base = null, t = 0; t < e.__k.length; t++)
      if ((n = e.__k[t]) != null && n.__e != null) {
        e.__e = e.__c.base = n.__e;
        break;
      }
    return Tc(e);
  }
}
function xa(e) {
  (!e.__d && (e.__d = !0) && rr.push(e) && !jo.__r++ || ka !== le.debounceRendering) && ((ka = le.debounceRendering) || setTimeout)(jo);
}
function jo() {
  for (var e; jo.__r = rr.length; )
    e = rr.sort(function(t, n) {
      return t.__v.__b - n.__v.__b;
    }), rr = [], e.some(function(t) {
      var n, r, s, o, a, c;
      t.__d && (a = (o = (n = t).__v).__e, (c = n.__P) && (r = [], (s = Rt({}, o)).__v = o.__v + 1, Rc(c, o, s, n.__n, c.ownerSVGElement !== void 0, o.__h != null ? [a] : null, r, a == null ? Mr(o) : a, o.__h), dp(r, o), o.__e != a && Tc(o)));
    });
}
function Nc(e, t, n, r, s, o, a, c, f, p) {
  var i, d, u, l, _, g, h, v = r && r.__k || Ac, m = v.length;
  for (n.__k = [], i = 0; i < t.length; i++)
    if ((l = n.__k[i] = (l = t[i]) == null || typeof l == "boolean" ? null : typeof l == "string" || typeof l == "number" || typeof l == "bigint" ? go(null, l, null, null, l) : Array.isArray(l) ? go(ks, { children: l }, null, null, null) : l.__b > 0 ? go(l.type, l.props, l.key, l.ref ? l.ref : null, l.__v) : l) != null) {
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
      Rc(e, l, u = u || Mc, s, o, a, c, f, p), _ = l.__e, (d = l.ref) && u.ref != d && (h || (h = []), u.ref && h.push(u.ref, null, l), h.push(d, l.__c || _, l)), _ != null ? (g == null && (g = _), typeof l.type == "function" && l.__k === u.__k ? l.__d = f = Pc(l, f, e) : f = Lc(e, l, u, v, _, f), typeof n.type == "function" && (n.__d = f)) : f && u.__e == f && f.parentNode != e && (f = Mr(u));
    }
  for (n.__e = g, i = m; i--; )
    v[i] != null && Wc(v[i], v[i]);
  if (h)
    for (i = 0; i < h.length; i++)
      Hc(h[i], h[++i], h[++i]);
}
function Pc(e, t, n) {
  for (var r, s = e.__k, o = 0; s && o < s.length; o++)
    (r = s[o]) && (r.__ = e, t = typeof r.type == "function" ? Pc(r, t, n) : Lc(n, r, r, s, r.__e, t));
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
    o === "children" || o === "key" || o in t || Bo(e, o, null, n[o], r);
  for (o in t)
    s && typeof t[o] != "function" || o === "children" || o === "key" || o === "value" || o === "checked" || n[o] === t[o] || Bo(e, o, t[o], n[o], r);
}
function Ea(e, t, n) {
  t[0] === "-" ? e.setProperty(t, n) : e[t] = n == null ? "" : typeof n != "number" || up.test(t) ? n : n + "px";
}
function Bo(e, t, n, r, s) {
  var o;
  e:
    if (t === "style")
      if (typeof n == "string")
        e.style.cssText = n;
      else {
        if (typeof r == "string" && (e.style.cssText = r = ""), r)
          for (t in r)
            n && t in n || Ea(e.style, t, "");
        if (n)
          for (t in n)
            r && n[t] === r[t] || Ea(e.style, t, n[t]);
      }
    else if (t[0] === "o" && t[1] === "n")
      o = t !== (t = t.replace(/Capture$/, "")), t = t.toLowerCase() in e ? t.toLowerCase().slice(2) : t.slice(2), e.l || (e.l = {}), e.l[t + o] = n, n ? r || e.addEventListener(t, o ? Ca : Sa, o) : e.removeEventListener(t, o ? Ca : Sa, o);
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
function Sa(e) {
  this.l[e.type + !1](le.event ? le.event(e) : e);
}
function Ca(e) {
  this.l[e.type + !0](le.event ? le.event(e) : e);
}
function Rc(e, t, n, r, s, o, a, c, f) {
  var p, i, d, u, l, _, g, h, v, m, k, b, S, $, E, y = t.type;
  if (t.constructor !== void 0)
    return null;
  n.__h != null && (f = n.__h, c = t.__e = n.__e, t.__h = null, o = [c]), (p = le.__b) && p(t);
  try {
    e:
      if (typeof y == "function") {
        if (h = t.props, v = (p = y.contextType) && r[p.__c], m = p ? v ? v.props.value : p.__ : r, n.__c ? g = (i = t.__c = n.__c).__ = i.__E : ("prototype" in y && y.prototype.render ? t.__c = i = new y(h, m) : (t.__c = i = new or(h, m), i.constructor = y, i.render = vp), v && v.sub(i), i.props = h, i.state || (i.state = {}), i.context = m, i.__n = r, d = i.__d = !0, i.__h = [], i._sb = []), i.__s == null && (i.__s = i.state), y.getDerivedStateFromProps != null && (i.__s == i.state && (i.__s = Rt({}, i.__s)), Rt(i.__s, y.getDerivedStateFromProps(h, i.__s))), u = i.props, l = i.state, d)
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
        if (i.context = m, i.props = h, i.__v = t, i.__P = e, b = le.__r, S = 0, "prototype" in y && y.prototype.render) {
          for (i.state = i.__s, i.__d = !1, b && b(t), p = i.render(i.props, i.state, i.context), $ = 0; $ < i._sb.length; $++)
            i.__h.push(i._sb[$]);
          i._sb = [];
        } else
          do
            i.__d = !1, b && b(t), p = i.render(i.props, i.state, i.context), i.state = i.__s;
          while (i.__d && ++S < 25);
        i.state = i.__s, i.getChildContext != null && (r = Rt(Rt({}, r), i.getChildContext())), d || i.getSnapshotBeforeUpdate == null || (_ = i.getSnapshotBeforeUpdate(u, l)), E = p != null && p.type === ks && p.key == null ? p.props.children : p, Nc(e, Array.isArray(E) ? E : [E], t, n, r, s, o, a, c, f), i.base = t.__e, t.__h = null, i.__h.length && a.push(i), g && (i.__E = i.__ = null), i.__e = !1;
      } else
        o == null && t.__v === n.__v ? (t.__k = n.__k, t.__e = n.__e) : t.__e = hp(n.__e, t, n, r, s, o, a, f);
    (p = le.diffed) && p(t);
  } catch (x) {
    t.__v = null, (f || o != null) && (t.__e = c, t.__h = !!f, o[o.indexOf(c)] = null), le.__e(x, t, n);
  }
}
function dp(e, t) {
  le.__c && le.__c(t, e), e.some(function(n) {
    try {
      e = n.__h, n.__h = [], e.some(function(r) {
        r.call(n);
      });
    } catch (r) {
      le.__e(r, n.__v);
    }
  });
}
function hp(e, t, n, r, s, o, a, c) {
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
    if (o = o && $s.call(e.childNodes), p = (d = n.props || Mc).dangerouslySetInnerHTML, i = u.dangerouslySetInnerHTML, !c) {
      if (o != null)
        for (d = {}, _ = 0; _ < e.attributes.length; _++)
          d[e.attributes[_].name] = e.attributes[_].value;
      (i || p) && (i && (p && i.__html == p.__html || i.__html === e.innerHTML) || (e.innerHTML = i && i.__html || ""));
    }
    if (pp(e, u, d, s, c), i)
      t.__k = [];
    else if (_ = t.props.children, Nc(e, Array.isArray(_) ? _ : [_], t, n, r, s && l !== "foreignObject", o, a, o ? o[0] : n.__k && Mr(n, 0), c), o != null)
      for (_ = o.length; _--; )
        o[_] != null && Dc(o[_]);
    c || ("value" in u && (_ = u.value) !== void 0 && (_ !== e.value || l === "progress" && !_ || l === "option" && _ !== d.value) && Bo(e, "value", _, d.value, !1), "checked" in u && (_ = u.checked) !== void 0 && _ !== e.checked && Bo(e, "checked", _, d.checked, !1));
  }
  return e;
}
function Hc(e, t, n) {
  try {
    typeof e == "function" ? e(t) : e.current = t;
  } catch (r) {
    le.__e(r, n);
  }
}
function Wc(e, t, n) {
  var r, s;
  if (le.unmount && le.unmount(e), (r = e.ref) && (r.current && r.current !== e.__e || Hc(r, null, t)), (r = e.__c) != null) {
    if (r.componentWillUnmount)
      try {
        r.componentWillUnmount();
      } catch (o) {
        le.__e(o, t);
      }
    r.base = r.__P = null, e.__c = void 0;
  }
  if (r = e.__k)
    for (s = 0; s < r.length; s++)
      r[s] && Wc(r[s], t, n || typeof e.type != "function");
  n || e.__e == null || Dc(e.__e), e.__ = e.__e = e.__d = void 0;
}
function vp(e, t, n) {
  return this.constructor(e, n);
}
$s = Ac.slice, le = { __e: function(e, t, n, r) {
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
}, or.prototype.setState = function(e, t) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = Rt({}, this.state), typeof e == "function" && (e = e(Rt({}, n), this.props)), e && Rt(n, e), e != null && this.__v && (t && this._sb.push(t), xa(this));
}, or.prototype.forceUpdate = function(e) {
  this.__v && (this.__e = !0, e && this.__h.push(e), xa(this));
}, or.prototype.render = ks, rr = [], jo.__r = 0;
const I = (...e) => {
  const t = e.map((n) => Array.isArray(n) ? I(...n) : typeof n == "function" ? I(n()) : n !== null && typeof n == "object" ? Object.keys(n).filter((r) => {
    const s = n[r];
    return typeof s == "function" ? !!s() : !!s;
  }).join(" ") : n).filter((n) => typeof n == "string" && n.length);
  return t.length ? t.join(" ") : void 0;
};
function mp({
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
function jc({
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
function gp({
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
function yp({
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
function bp(e) {
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
      m != null && (typeof m == "object" && !mc(m) && ("html" in m || "__html" in m || "className" in m || "style" in m || "attrs" in m || "children" in m) ? m.html ? l.push(
        /* @__PURE__ */ Pi("div", {
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
function ts({
  tag: e = "div",
  ...t
}) {
  const [n, r] = bp(t);
  return Pi(e, n, ...r);
}
function wp(e) {
  return /* @__PURE__ */ ye(ts, {
    ...e
  });
}
function Bc({
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
const gi = class extends or {
  constructor() {
    super(...arguments);
    N(this, "ref", _p());
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
        if (Oc(h))
          return h;
        typeof h == "object" && Object.assign(o, h);
      }
    }
    const { type: c = "item", component: f, key: p = s, rootAttrs: i, rootClass: d, rootStyle: u, rootChildren: l, ..._ } = o, g = !f || typeof f == "string" ? this.constructor.ItemComponents && this.constructor.ItemComponents[c] || gi.ItemComponents[c] : f;
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
let mt = gi;
N(mt, "ItemComponents", {
  divider: mp,
  item: jc,
  heading: gp,
  space: yp,
  custom: wp,
  basic: Bc
}), N(mt, "ROOT_TAG", "menu"), N(mt, "NAME", "action-menu");
class Oa extends Ke {
}
N(Oa, "NAME", "actionmenu"), N(Oa, "Component", mt);
function Ma({
  ...e
}) {
  return /* @__PURE__ */ ye(jc, {
    ...e
  });
}
var Gr, Qe, yn;
class xs extends mt {
  constructor(n) {
    var r;
    super(n);
    L(this, Gr, /* @__PURE__ */ new Set());
    L(this, Qe, void 0);
    L(this, yn, (n, r, s) => {
      this.toggleNestedMenu(n, r), s.preventDefault();
    });
    H(this, Qe, n.nestedShow === void 0), w(this, Qe) && (this.state = { nestedShow: (r = n.defaultNestedShow) != null ? r : {} });
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
      nestedShow: w(this, Qe) ? this.state.nestedShow : this.props.nestedShow,
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
    w(this, Gr).add(a);
    const c = this.isNestedMenuShow(a);
    if (c && (o.rootChildren = [
      o.rootChildren,
      this.renderNestedMenu(r)
    ], o.component = Ma), this.nestedTrigger === "hover")
      o.rootAttrs = {
        ...o.rootAttrs,
        onMouseEnter: w(this, yn).bind(this, a, !0),
        onMouseLeave: w(this, yn).bind(this, a, !1)
      };
    else if (this.nestedTrigger === "click") {
      const { onClick: i } = o;
      o.onClick = (d) => {
        w(this, yn).call(this, a, void 0, d), i == null || i(d);
      };
    }
    const f = this.renderToggleIcon(c, o);
    return f && (o.children = [o.children, f]), o.rootClass = [o.rootClass, "has-nested-menu", c ? "show" : ""], o;
  }
  isNestedMenuShow(n) {
    const r = w(this, Qe) ? this.state.nestedShow : this.props.nestedShow;
    return r && typeof r == "object" ? r[n] : !!r;
  }
  toggleNestedMenu(n, r) {
    const { controlledMenu: s } = this.props;
    if (s)
      return s.toggleNestedMenu(n, r);
    if (!w(this, Qe))
      return !1;
    let { nestedShow: o = {} } = this.state;
    if (typeof o == "boolean" && (o === !0 ? o = [...w(this, Gr).values()].reduce((a, c) => (a[c] = !0, a), {}) : o = {}), r === void 0)
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
    !w(this, Qe) || this.setState({ nestedShow: !0 });
  }
  hideAllNestedMenu() {
    !w(this, Qe) || this.setState({ nestedShow: !1 });
  }
}
Gr = new WeakMap(), Qe = new WeakMap(), yn = new WeakMap(), N(xs, "ItemComponents", {
  item: Ma
});
class Aa extends Ke {
}
N(Aa, "NAME", "actionmenunested"), N(Aa, "Component", xs);
var Es, ce, Ic, ir, Da, Uc = {}, Fc = [], $p = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function Ht(e, t) {
  for (var n in t)
    e[n] = t[n];
  return e;
}
function zc(e) {
  var t = e.parentNode;
  t && t.removeChild(e);
}
function vn(e, t, n) {
  var r, s, o, a = {};
  for (o in t)
    o == "key" ? r = t[o] : o == "ref" ? s = t[o] : a[o] = t[o];
  if (arguments.length > 2 && (a.children = arguments.length > 3 ? Es.call(arguments, 2) : n), typeof e == "function" && e.defaultProps != null)
    for (o in e.defaultProps)
      a[o] === void 0 && (a[o] = e.defaultProps[o]);
  return yo(e, a, r, s, null);
}
function yo(e, t, n, r, s) {
  var o = { type: e, props: t, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: s == null ? ++Ic : s };
  return s == null && ce.vnode != null && ce.vnode(o), o;
}
function Ss(e) {
  return e.children;
}
function sr(e, t) {
  this.props = e, this.context = t;
}
function Ar(e, t) {
  if (t == null)
    return e.__ ? Ar(e.__, e.__.__k.indexOf(e) + 1) : null;
  for (var n; t < e.__k.length; t++)
    if ((n = e.__k[t]) != null && n.__e != null)
      return n.__e;
  return typeof e.type == "function" ? Ar(e) : null;
}
function Yc(e) {
  var t, n;
  if ((e = e.__) != null && e.__c != null) {
    for (e.__e = e.__c.base = null, t = 0; t < e.__k.length; t++)
      if ((n = e.__k[t]) != null && n.__e != null) {
        e.__e = e.__c.base = n.__e;
        break;
      }
    return Yc(e);
  }
}
function Ta(e) {
  (!e.__d && (e.__d = !0) && ir.push(e) && !Io.__r++ || Da !== ce.debounceRendering) && ((Da = ce.debounceRendering) || setTimeout)(Io);
}
function Io() {
  for (var e; Io.__r = ir.length; )
    e = ir.sort(function(t, n) {
      return t.__v.__b - n.__v.__b;
    }), ir = [], e.some(function(t) {
      var n, r, s, o, a, c;
      t.__d && (a = (o = (n = t).__v).__e, (c = n.__P) && (r = [], (s = Ht({}, o)).__v = o.__v + 1, Xc(c, o, s, n.__n, c.ownerSVGElement !== void 0, o.__h != null ? [a] : null, r, a == null ? Ar(o) : a, o.__h), xp(r, o), o.__e != a && Yc(o)));
    });
}
function Vc(e, t, n, r, s, o, a, c, f, p) {
  var i, d, u, l, _, g, h, v = r && r.__k || Fc, m = v.length;
  for (n.__k = [], i = 0; i < t.length; i++)
    if ((l = n.__k[i] = (l = t[i]) == null || typeof l == "boolean" ? null : typeof l == "string" || typeof l == "number" || typeof l == "bigint" ? yo(null, l, null, null, l) : Array.isArray(l) ? yo(Ss, { children: l }, null, null, null) : l.__b > 0 ? yo(l.type, l.props, l.key, l.ref ? l.ref : null, l.__v) : l) != null) {
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
      Xc(e, l, u = u || Uc, s, o, a, c, f, p), _ = l.__e, (d = l.ref) && u.ref != d && (h || (h = []), u.ref && h.push(u.ref, null, l), h.push(d, l.__c || _, l)), _ != null ? (g == null && (g = _), typeof l.type == "function" && l.__k === u.__k ? l.__d = f = qc(l, f, e) : f = Gc(e, l, u, v, _, f), typeof n.type == "function" && (n.__d = f)) : f && u.__e == f && f.parentNode != e && (f = Ar(u));
    }
  for (n.__e = g, i = m; i--; )
    v[i] != null && Jc(v[i], v[i]);
  if (h)
    for (i = 0; i < h.length; i++)
      Kc(h[i], h[++i], h[++i]);
}
function qc(e, t, n) {
  for (var r, s = e.__k, o = 0; s && o < s.length; o++)
    (r = s[o]) && (r.__ = e, t = typeof r.type == "function" ? qc(r, t, n) : Gc(n, r, r, s, r.__e, t));
  return t;
}
function Gc(e, t, n, r, s, o) {
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
function kp(e, t, n, r, s) {
  var o;
  for (o in n)
    o === "children" || o === "key" || o in t || Uo(e, o, null, n[o], r);
  for (o in t)
    s && typeof t[o] != "function" || o === "children" || o === "key" || o === "value" || o === "checked" || n[o] === t[o] || Uo(e, o, t[o], n[o], r);
}
function Na(e, t, n) {
  t[0] === "-" ? e.setProperty(t, n) : e[t] = n == null ? "" : typeof n != "number" || $p.test(t) ? n : n + "px";
}
function Uo(e, t, n, r, s) {
  var o;
  e:
    if (t === "style")
      if (typeof n == "string")
        e.style.cssText = n;
      else {
        if (typeof r == "string" && (e.style.cssText = r = ""), r)
          for (t in r)
            n && t in n || Na(e.style, t, "");
        if (n)
          for (t in n)
            r && n[t] === r[t] || Na(e.style, t, n[t]);
      }
    else if (t[0] === "o" && t[1] === "n")
      o = t !== (t = t.replace(/Capture$/, "")), t = t.toLowerCase() in e ? t.toLowerCase().slice(2) : t.slice(2), e.l || (e.l = {}), e.l[t + o] = n, n ? r || e.addEventListener(t, o ? La : Pa, o) : e.removeEventListener(t, o ? La : Pa, o);
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
function Pa(e) {
  this.l[e.type + !1](ce.event ? ce.event(e) : e);
}
function La(e) {
  this.l[e.type + !0](ce.event ? ce.event(e) : e);
}
function Xc(e, t, n, r, s, o, a, c, f) {
  var p, i, d, u, l, _, g, h, v, m, k, b, S, $, E, y = t.type;
  if (t.constructor !== void 0)
    return null;
  n.__h != null && (f = n.__h, c = t.__e = n.__e, t.__h = null, o = [c]), (p = ce.__b) && p(t);
  try {
    e:
      if (typeof y == "function") {
        if (h = t.props, v = (p = y.contextType) && r[p.__c], m = p ? v ? v.props.value : p.__ : r, n.__c ? g = (i = t.__c = n.__c).__ = i.__E : ("prototype" in y && y.prototype.render ? t.__c = i = new y(h, m) : (t.__c = i = new sr(h, m), i.constructor = y, i.render = Sp), v && v.sub(i), i.props = h, i.state || (i.state = {}), i.context = m, i.__n = r, d = i.__d = !0, i.__h = [], i._sb = []), i.__s == null && (i.__s = i.state), y.getDerivedStateFromProps != null && (i.__s == i.state && (i.__s = Ht({}, i.__s)), Ht(i.__s, y.getDerivedStateFromProps(h, i.__s))), u = i.props, l = i.state, d)
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
        if (i.context = m, i.props = h, i.__v = t, i.__P = e, b = ce.__r, S = 0, "prototype" in y && y.prototype.render) {
          for (i.state = i.__s, i.__d = !1, b && b(t), p = i.render(i.props, i.state, i.context), $ = 0; $ < i._sb.length; $++)
            i.__h.push(i._sb[$]);
          i._sb = [];
        } else
          do
            i.__d = !1, b && b(t), p = i.render(i.props, i.state, i.context), i.state = i.__s;
          while (i.__d && ++S < 25);
        i.state = i.__s, i.getChildContext != null && (r = Ht(Ht({}, r), i.getChildContext())), d || i.getSnapshotBeforeUpdate == null || (_ = i.getSnapshotBeforeUpdate(u, l)), E = p != null && p.type === Ss && p.key == null ? p.props.children : p, Vc(e, Array.isArray(E) ? E : [E], t, n, r, s, o, a, c, f), i.base = t.__e, t.__h = null, i.__h.length && a.push(i), g && (i.__E = i.__ = null), i.__e = !1;
      } else
        o == null && t.__v === n.__v ? (t.__k = n.__k, t.__e = n.__e) : t.__e = Ep(n.__e, t, n, r, s, o, a, f);
    (p = ce.diffed) && p(t);
  } catch (x) {
    t.__v = null, (f || o != null) && (t.__e = c, t.__h = !!f, o[o.indexOf(c)] = null), ce.__e(x, t, n);
  }
}
function xp(e, t) {
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
function Ep(e, t, n, r, s, o, a, c) {
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
    if (o = o && Es.call(e.childNodes), p = (d = n.props || Uc).dangerouslySetInnerHTML, i = u.dangerouslySetInnerHTML, !c) {
      if (o != null)
        for (d = {}, _ = 0; _ < e.attributes.length; _++)
          d[e.attributes[_].name] = e.attributes[_].value;
      (i || p) && (i && (p && i.__html == p.__html || i.__html === e.innerHTML) || (e.innerHTML = i && i.__html || ""));
    }
    if (kp(e, u, d, s, c), i)
      t.__k = [];
    else if (_ = t.props.children, Vc(e, Array.isArray(_) ? _ : [_], t, n, r, s && l !== "foreignObject", o, a, o ? o[0] : n.__k && Ar(n, 0), c), o != null)
      for (_ = o.length; _--; )
        o[_] != null && zc(o[_]);
    c || ("value" in u && (_ = u.value) !== void 0 && (_ !== e.value || l === "progress" && !_ || l === "option" && _ !== d.value) && Uo(e, "value", _, d.value, !1), "checked" in u && (_ = u.checked) !== void 0 && _ !== e.checked && Uo(e, "checked", _, d.checked, !1));
  }
  return e;
}
function Kc(e, t, n) {
  try {
    typeof e == "function" ? e(t) : e.current = t;
  } catch (r) {
    ce.__e(r, n);
  }
}
function Jc(e, t, n) {
  var r, s;
  if (ce.unmount && ce.unmount(e), (r = e.ref) && (r.current && r.current !== e.__e || Kc(r, null, t)), (r = e.__c) != null) {
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
      r[s] && Jc(r[s], t, n || typeof e.type != "function");
  n || e.__e == null || zc(e.__e), e.__ = e.__e = e.__d = void 0;
}
function Sp(e, t, n) {
  return this.constructor(e, n);
}
Es = Fc.slice, ce = { __e: function(e, t, n, r) {
  for (var s, o, a; t = t.__; )
    if ((s = t.__c) && !s.__)
      try {
        if ((o = s.constructor) && o.getDerivedStateFromError != null && (s.setState(o.getDerivedStateFromError(e)), a = s.__d), s.componentDidCatch != null && (s.componentDidCatch(e, r || {}), a = s.__d), a)
          return s.__E = s;
      } catch (c) {
        e = c;
      }
  throw e;
} }, Ic = 0, sr.prototype.setState = function(e, t) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = Ht({}, this.state), typeof e == "function" && (e = e(Ht({}, n), this.props)), e && Ht(n, e), e != null && this.__v && (t && this._sb.push(t), Ta(this));
}, sr.prototype.forceUpdate = function(e) {
  this.__v && (this.__e = !0, e && this.__h.push(e), Ta(this));
}, sr.prototype.render = Ss, ir = [], Io.__r = 0;
class Kt extends sr {
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
    } = this.props, b = t || (a ? "a" : "button"), S = _ == null || typeof _ == "string" && !_.length || i && !u, $ = S && !l && !g && !o && !i;
    return vn(
      b,
      {
        className: I("btn", n, s, {
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
        ...k
      },
      i ? /* @__PURE__ */ vn("i", {
        class: `spin icon ${d || "icon-spinner-snake"}`
      }) : typeof l == "string" ? /* @__PURE__ */ vn("i", {
        class: `icon ${l}`
      }) : l,
      S ? null : /* @__PURE__ */ vn("span", {
        className: "text"
      }, i ? u : _),
      i ? null : o,
      i ? null : typeof g == "string" ? /* @__PURE__ */ vn("i", {
        class: `icon ${g}`
      }) : g,
      i ? null : h ? /* @__PURE__ */ vn("span", {
        className: typeof h == "string" ? `caret-${h}` : "caret"
      }) : null
    );
  }
}
class Ra extends Ke {
}
N(Ra, "NAME", "button"), N(Ra, "Component", Kt);
var Zc, ns, Qc, Cp = [];
function Op(e, t, n) {
  var r, s, o, a = {};
  for (o in t)
    o == "key" ? r = t[o] : o == "ref" ? s = t[o] : a[o] = t[o];
  if (arguments.length > 2 && (a.children = arguments.length > 3 ? Zc.call(arguments, 2) : n), typeof e == "function" && e.defaultProps != null)
    for (o in e.defaultProps)
      a[o] === void 0 && (a[o] = e.defaultProps[o]);
  return Mp(e, a, r, s, null);
}
function Mp(e, t, n, r, s) {
  var o = { type: e, props: t, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: s == null ? ++Qc : s };
  return s == null && ns.vnode != null && ns.vnode(o), o;
}
Zc = Cp.slice, ns = { __e: function(e, t, n, r) {
  for (var s, o, a; t = t.__; )
    if ((s = t.__c) && !s.__)
      try {
        if ((o = s.constructor) && o.getDerivedStateFromError != null && (s.setState(o.getDerivedStateFromError(e)), a = s.__d), s.componentDidCatch != null && (s.componentDidCatch(e, r || {}), a = s.__d), a)
          return s.__E = s;
      } catch (c) {
        e = c;
      }
  throw e;
} }, Qc = 0;
class Cs extends xs {
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
    return /* @__PURE__ */ Op("span", {
      class: `${this.name}-toggle-icon caret-${t ? "down" : "right"}`
    });
  }
}
N(Cs, "NAME", "menu");
class Ha extends Ke {
}
N(Ha, "NAME", "menu"), N(Ha, "Component", Cs);
var Ri, re, ef, ar, Wa, Fo = {}, tf = [], Ap = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function Wt(e, t) {
  for (var n in t)
    e[n] = t[n];
  return e;
}
function nf(e) {
  var t = e.parentNode;
  t && t.removeChild(e);
}
function qt(e, t, n) {
  var r, s, o, a = {};
  for (o in t)
    o == "key" ? r = t[o] : o == "ref" ? s = t[o] : a[o] = t[o];
  if (arguments.length > 2 && (a.children = arguments.length > 3 ? Ri.call(arguments, 2) : n), typeof e == "function" && e.defaultProps != null)
    for (o in e.defaultProps)
      a[o] === void 0 && (a[o] = e.defaultProps[o]);
  return bo(e, a, r, s, null);
}
function bo(e, t, n, r, s) {
  var o = { type: e, props: t, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: s == null ? ++ef : s };
  return s == null && re.vnode != null && re.vnode(o), o;
}
function Hi(e) {
  return e.children;
}
function mn(e, t) {
  this.props = e, this.context = t;
}
function Dr(e, t) {
  if (t == null)
    return e.__ ? Dr(e.__, e.__.__k.indexOf(e) + 1) : null;
  for (var n; t < e.__k.length; t++)
    if ((n = e.__k[t]) != null && n.__e != null)
      return n.__e;
  return typeof e.type == "function" ? Dr(e) : null;
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
function ja(e) {
  (!e.__d && (e.__d = !0) && ar.push(e) && !zo.__r++ || Wa !== re.debounceRendering) && ((Wa = re.debounceRendering) || setTimeout)(zo);
}
function zo() {
  for (var e; zo.__r = ar.length; )
    e = ar.sort(function(t, n) {
      return t.__v.__b - n.__v.__b;
    }), ar = [], e.some(function(t) {
      var n, r, s, o, a, c;
      t.__d && (a = (o = (n = t).__v).__e, (c = n.__P) && (r = [], (s = Wt({}, o)).__v = o.__v + 1, Os(c, o, s, n.__n, c.ownerSVGElement !== void 0, o.__h != null ? [a] : null, r, a == null ? Dr(o) : a, o.__h), lf(r, o), o.__e != a && rf(o)));
    });
}
function of(e, t, n, r, s, o, a, c, f, p) {
  var i, d, u, l, _, g, h, v = r && r.__k || tf, m = v.length;
  for (n.__k = [], i = 0; i < t.length; i++)
    if ((l = n.__k[i] = (l = t[i]) == null || typeof l == "boolean" ? null : typeof l == "string" || typeof l == "number" || typeof l == "bigint" ? bo(null, l, null, null, l) : Array.isArray(l) ? bo(Hi, { children: l }, null, null, null) : l.__b > 0 ? bo(l.type, l.props, l.key, l.ref ? l.ref : null, l.__v) : l) != null) {
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
      Os(e, l, u = u || Fo, s, o, a, c, f, p), _ = l.__e, (d = l.ref) && u.ref != d && (h || (h = []), u.ref && h.push(u.ref, null, l), h.push(d, l.__c || _, l)), _ != null ? (g == null && (g = _), typeof l.type == "function" && l.__k === u.__k ? l.__d = f = sf(l, f, e) : f = af(e, l, u, v, _, f), typeof n.type == "function" && (n.__d = f)) : f && u.__e == f && f.parentNode != e && (f = Dr(u));
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
function Dp(e, t, n, r, s) {
  var o;
  for (o in n)
    o === "children" || o === "key" || o in t || Yo(e, o, null, n[o], r);
  for (o in t)
    s && typeof t[o] != "function" || o === "children" || o === "key" || o === "value" || o === "checked" || n[o] === t[o] || Yo(e, o, t[o], n[o], r);
}
function Ba(e, t, n) {
  t[0] === "-" ? e.setProperty(t, n) : e[t] = n == null ? "" : typeof n != "number" || Ap.test(t) ? n : n + "px";
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
            n && t in n || Ba(e.style, t, "");
        if (n)
          for (t in n)
            r && n[t] === r[t] || Ba(e.style, t, n[t]);
      }
    else if (t[0] === "o" && t[1] === "n")
      o = t !== (t = t.replace(/Capture$/, "")), t = t.toLowerCase() in e ? t.toLowerCase().slice(2) : t.slice(2), e.l || (e.l = {}), e.l[t + o] = n, n ? r || e.addEventListener(t, o ? Ua : Ia, o) : e.removeEventListener(t, o ? Ua : Ia, o);
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
function Ia(e) {
  this.l[e.type + !1](re.event ? re.event(e) : e);
}
function Ua(e) {
  this.l[e.type + !0](re.event ? re.event(e) : e);
}
function Os(e, t, n, r, s, o, a, c, f) {
  var p, i, d, u, l, _, g, h, v, m, k, b, S, $, E, y = t.type;
  if (t.constructor !== void 0)
    return null;
  n.__h != null && (f = n.__h, c = t.__e = n.__e, t.__h = null, o = [c]), (p = re.__b) && p(t);
  try {
    e:
      if (typeof y == "function") {
        if (h = t.props, v = (p = y.contextType) && r[p.__c], m = p ? v ? v.props.value : p.__ : r, n.__c ? g = (i = t.__c = n.__c).__ = i.__E : ("prototype" in y && y.prototype.render ? t.__c = i = new y(h, m) : (t.__c = i = new mn(h, m), i.constructor = y, i.render = Np), v && v.sub(i), i.props = h, i.state || (i.state = {}), i.context = m, i.__n = r, d = i.__d = !0, i.__h = [], i._sb = []), i.__s == null && (i.__s = i.state), y.getDerivedStateFromProps != null && (i.__s == i.state && (i.__s = Wt({}, i.__s)), Wt(i.__s, y.getDerivedStateFromProps(h, i.__s))), u = i.props, l = i.state, d)
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
        if (i.context = m, i.props = h, i.__v = t, i.__P = e, b = re.__r, S = 0, "prototype" in y && y.prototype.render) {
          for (i.state = i.__s, i.__d = !1, b && b(t), p = i.render(i.props, i.state, i.context), $ = 0; $ < i._sb.length; $++)
            i.__h.push(i._sb[$]);
          i._sb = [];
        } else
          do
            i.__d = !1, b && b(t), p = i.render(i.props, i.state, i.context), i.state = i.__s;
          while (i.__d && ++S < 25);
        i.state = i.__s, i.getChildContext != null && (r = Wt(Wt({}, r), i.getChildContext())), d || i.getSnapshotBeforeUpdate == null || (_ = i.getSnapshotBeforeUpdate(u, l)), E = p != null && p.type === Hi && p.key == null ? p.props.children : p, of(e, Array.isArray(E) ? E : [E], t, n, r, s, o, a, c, f), i.base = t.__e, t.__h = null, i.__h.length && a.push(i), g && (i.__E = i.__ = null), i.__e = !1;
      } else
        o == null && t.__v === n.__v ? (t.__k = n.__k, t.__e = n.__e) : t.__e = Tp(n.__e, t, n, r, s, o, a, f);
    (p = re.diffed) && p(t);
  } catch (x) {
    t.__v = null, (f || o != null) && (t.__e = c, t.__h = !!f, o[o.indexOf(c)] = null), re.__e(x, t, n);
  }
}
function lf(e, t) {
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
function Tp(e, t, n, r, s, o, a, c) {
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
    if (o = o && Ri.call(e.childNodes), p = (d = n.props || Fo).dangerouslySetInnerHTML, i = u.dangerouslySetInnerHTML, !c) {
      if (o != null)
        for (d = {}, _ = 0; _ < e.attributes.length; _++)
          d[e.attributes[_].name] = e.attributes[_].value;
      (i || p) && (i && (p && i.__html == p.__html || i.__html === e.innerHTML) || (e.innerHTML = i && i.__html || ""));
    }
    if (Dp(e, u, d, s, c), i)
      t.__k = [];
    else if (_ = t.props.children, of(e, Array.isArray(_) ? _ : [_], t, n, r, s && l !== "foreignObject", o, a, o ? o[0] : n.__k && Dr(n, 0), c), o != null)
      for (_ = o.length; _--; )
        o[_] != null && nf(o[_]);
    c || ("value" in u && (_ = u.value) !== void 0 && (_ !== e.value || l === "progress" && !_ || l === "option" && _ !== d.value) && Yo(e, "value", _, d.value, !1), "checked" in u && (_ = u.checked) !== void 0 && _ !== e.checked && Yo(e, "checked", _, d.checked, !1));
  }
  return e;
}
function cf(e, t, n) {
  try {
    typeof e == "function" ? e(t) : e.current = t;
  } catch (r) {
    re.__e(r, n);
  }
}
function ff(e, t, n) {
  var r, s;
  if (re.unmount && re.unmount(e), (r = e.ref) && (r.current && r.current !== e.__e || cf(r, null, t)), (r = e.__c) != null) {
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
      r[s] && ff(r[s], t, n || typeof e.type != "function");
  n || e.__e == null || nf(e.__e), e.__ = e.__e = e.__d = void 0;
}
function Np(e, t, n) {
  return this.constructor(e, n);
}
function Fa(e, t, n) {
  var r, s, o;
  re.__ && re.__(e, t), s = (r = typeof n == "function") ? null : n && n.__k || t.__k, o = [], Os(t, e = (!r && n || t).__k = qt(Hi, null, [e]), s || Fo, Fo, t.ownerSVGElement !== void 0, !r && n ? [n] : s ? null : t.firstChild ? Ri.call(t.childNodes) : null, o, !r && n ? n : s ? s.__e : t.firstChild, r), lf(o, e);
}
Ri = tf.slice, re = { __e: function(e, t, n, r) {
  for (var s, o, a; t = t.__; )
    if ((s = t.__c) && !s.__)
      try {
        if ((o = s.constructor) && o.getDerivedStateFromError != null && (s.setState(o.getDerivedStateFromError(e)), a = s.__d), s.componentDidCatch != null && (s.componentDidCatch(e, r || {}), a = s.__d), a)
          return s.__E = s;
      } catch (c) {
        e = c;
      }
  throw e;
} }, ef = 0, mn.prototype.setState = function(e, t) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = Wt({}, this.state), typeof e == "function" && (e = e(Wt({}, n), this.props)), e && Wt(n, e), e != null && this.__v && (t && this._sb.push(t), ja(this));
}, mn.prototype.forceUpdate = function(e) {
  this.__v && (this.__e = !0, e && this.__h.push(e), ja(this));
}, mn.prototype.render = Hi, ar = [], zo.__r = 0;
var Ms, fe, uf, _f, lr, za, pf = {}, df = [], Pp = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function jt(e, t) {
  for (var n in t)
    e[n] = t[n];
  return e;
}
function hf(e) {
  var t = e.parentNode;
  t && t.removeChild(e);
}
function Ki(e, t, n) {
  var r, s, o, a = {};
  for (o in t)
    o == "key" ? r = t[o] : o == "ref" ? s = t[o] : a[o] = t[o];
  if (arguments.length > 2 && (a.children = arguments.length > 3 ? Ms.call(arguments, 2) : n), typeof e == "function" && e.defaultProps != null)
    for (o in e.defaultProps)
      a[o] === void 0 && (a[o] = e.defaultProps[o]);
  return wo(e, a, r, s, null);
}
function wo(e, t, n, r, s) {
  var o = { type: e, props: t, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: s == null ? ++uf : s };
  return s == null && fe.vnode != null && fe.vnode(o), o;
}
function As(e) {
  return e.children;
}
function cr(e, t) {
  this.props = e, this.context = t;
}
function Tr(e, t) {
  if (t == null)
    return e.__ ? Tr(e.__, e.__.__k.indexOf(e) + 1) : null;
  for (var n; t < e.__k.length; t++)
    if ((n = e.__k[t]) != null && n.__e != null)
      return n.__e;
  return typeof e.type == "function" ? Tr(e) : null;
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
function Ya(e) {
  (!e.__d && (e.__d = !0) && lr.push(e) && !Vo.__r++ || za !== fe.debounceRendering) && ((za = fe.debounceRendering) || setTimeout)(Vo);
}
function Vo() {
  for (var e; Vo.__r = lr.length; )
    e = lr.sort(function(t, n) {
      return t.__v.__b - n.__v.__b;
    }), lr = [], e.some(function(t) {
      var n, r, s, o, a, c;
      t.__d && (a = (o = (n = t).__v).__e, (c = n.__P) && (r = [], (s = jt({}, o)).__v = o.__v + 1, bf(c, o, s, n.__n, c.ownerSVGElement !== void 0, o.__h != null ? [a] : null, r, a == null ? Tr(o) : a, o.__h), Rp(r, o), o.__e != a && vf(o)));
    });
}
function mf(e, t, n, r, s, o, a, c, f, p) {
  var i, d, u, l, _, g, h, v = r && r.__k || df, m = v.length;
  for (n.__k = [], i = 0; i < t.length; i++)
    if ((l = n.__k[i] = (l = t[i]) == null || typeof l == "boolean" ? null : typeof l == "string" || typeof l == "number" || typeof l == "bigint" ? wo(null, l, null, null, l) : Array.isArray(l) ? wo(As, { children: l }, null, null, null) : l.__b > 0 ? wo(l.type, l.props, l.key, l.ref ? l.ref : null, l.__v) : l) != null) {
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
      bf(e, l, u = u || pf, s, o, a, c, f, p), _ = l.__e, (d = l.ref) && u.ref != d && (h || (h = []), u.ref && h.push(u.ref, null, l), h.push(d, l.__c || _, l)), _ != null ? (g == null && (g = _), typeof l.type == "function" && l.__k === u.__k ? l.__d = f = gf(l, f, e) : f = yf(e, l, u, v, _, f), typeof n.type == "function" && (n.__d = f)) : f && u.__e == f && f.parentNode != e && (f = Tr(u));
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
function Lp(e, t, n, r, s) {
  var o;
  for (o in n)
    o === "children" || o === "key" || o in t || qo(e, o, null, n[o], r);
  for (o in t)
    s && typeof t[o] != "function" || o === "children" || o === "key" || o === "value" || o === "checked" || n[o] === t[o] || qo(e, o, t[o], n[o], r);
}
function Va(e, t, n) {
  t[0] === "-" ? e.setProperty(t, n) : e[t] = n == null ? "" : typeof n != "number" || Pp.test(t) ? n : n + "px";
}
function qo(e, t, n, r, s) {
  var o;
  e:
    if (t === "style")
      if (typeof n == "string")
        e.style.cssText = n;
      else {
        if (typeof r == "string" && (e.style.cssText = r = ""), r)
          for (t in r)
            n && t in n || Va(e.style, t, "");
        if (n)
          for (t in n)
            r && n[t] === r[t] || Va(e.style, t, n[t]);
      }
    else if (t[0] === "o" && t[1] === "n")
      o = t !== (t = t.replace(/Capture$/, "")), t = t.toLowerCase() in e ? t.toLowerCase().slice(2) : t.slice(2), e.l || (e.l = {}), e.l[t + o] = n, n ? r || e.addEventListener(t, o ? Ga : qa, o) : e.removeEventListener(t, o ? Ga : qa, o);
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
function qa(e) {
  this.l[e.type + !1](fe.event ? fe.event(e) : e);
}
function Ga(e) {
  this.l[e.type + !0](fe.event ? fe.event(e) : e);
}
function bf(e, t, n, r, s, o, a, c, f) {
  var p, i, d, u, l, _, g, h, v, m, k, b, S, $, E, y = t.type;
  if (t.constructor !== void 0)
    return null;
  n.__h != null && (f = n.__h, c = t.__e = n.__e, t.__h = null, o = [c]), (p = fe.__b) && p(t);
  try {
    e:
      if (typeof y == "function") {
        if (h = t.props, v = (p = y.contextType) && r[p.__c], m = p ? v ? v.props.value : p.__ : r, n.__c ? g = (i = t.__c = n.__c).__ = i.__E : ("prototype" in y && y.prototype.render ? t.__c = i = new y(h, m) : (t.__c = i = new cr(h, m), i.constructor = y, i.render = Wp), v && v.sub(i), i.props = h, i.state || (i.state = {}), i.context = m, i.__n = r, d = i.__d = !0, i.__h = [], i._sb = []), i.__s == null && (i.__s = i.state), y.getDerivedStateFromProps != null && (i.__s == i.state && (i.__s = jt({}, i.__s)), jt(i.__s, y.getDerivedStateFromProps(h, i.__s))), u = i.props, l = i.state, d)
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
        if (i.context = m, i.props = h, i.__v = t, i.__P = e, b = fe.__r, S = 0, "prototype" in y && y.prototype.render) {
          for (i.state = i.__s, i.__d = !1, b && b(t), p = i.render(i.props, i.state, i.context), $ = 0; $ < i._sb.length; $++)
            i.__h.push(i._sb[$]);
          i._sb = [];
        } else
          do
            i.__d = !1, b && b(t), p = i.render(i.props, i.state, i.context), i.state = i.__s;
          while (i.__d && ++S < 25);
        i.state = i.__s, i.getChildContext != null && (r = jt(jt({}, r), i.getChildContext())), d || i.getSnapshotBeforeUpdate == null || (_ = i.getSnapshotBeforeUpdate(u, l)), E = p != null && p.type === As && p.key == null ? p.props.children : p, mf(e, Array.isArray(E) ? E : [E], t, n, r, s, o, a, c, f), i.base = t.__e, t.__h = null, i.__h.length && a.push(i), g && (i.__E = i.__ = null), i.__e = !1;
      } else
        o == null && t.__v === n.__v ? (t.__k = n.__k, t.__e = n.__e) : t.__e = Hp(n.__e, t, n, r, s, o, a, f);
    (p = fe.diffed) && p(t);
  } catch (x) {
    t.__v = null, (f || o != null) && (t.__e = c, t.__h = !!f, o[o.indexOf(c)] = null), fe.__e(x, t, n);
  }
}
function Rp(e, t) {
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
function Hp(e, t, n, r, s, o, a, c) {
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
    if (o = o && Ms.call(e.childNodes), p = (d = n.props || pf).dangerouslySetInnerHTML, i = u.dangerouslySetInnerHTML, !c) {
      if (o != null)
        for (d = {}, _ = 0; _ < e.attributes.length; _++)
          d[e.attributes[_].name] = e.attributes[_].value;
      (i || p) && (i && (p && i.__html == p.__html || i.__html === e.innerHTML) || (e.innerHTML = i && i.__html || ""));
    }
    if (Lp(e, u, d, s, c), i)
      t.__k = [];
    else if (_ = t.props.children, mf(e, Array.isArray(_) ? _ : [_], t, n, r, s && l !== "foreignObject", o, a, o ? o[0] : n.__k && Tr(n, 0), c), o != null)
      for (_ = o.length; _--; )
        o[_] != null && hf(o[_]);
    c || ("value" in u && (_ = u.value) !== void 0 && (_ !== e.value || l === "progress" && !_ || l === "option" && _ !== d.value) && qo(e, "value", _, d.value, !1), "checked" in u && (_ = u.checked) !== void 0 && _ !== e.checked && qo(e, "checked", _, d.checked, !1));
  }
  return e;
}
function wf(e, t, n) {
  try {
    typeof e == "function" ? e(t) : e.current = t;
  } catch (r) {
    fe.__e(r, n);
  }
}
function $f(e, t, n) {
  var r, s;
  if (fe.unmount && fe.unmount(e), (r = e.ref) && (r.current && r.current !== e.__e || wf(r, null, t)), (r = e.__c) != null) {
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
      r[s] && $f(r[s], t, n || typeof e.type != "function");
  n || e.__e == null || hf(e.__e), e.__ = e.__e = e.__d = void 0;
}
function Wp(e, t, n) {
  return this.constructor(e, n);
}
Ms = df.slice, fe = { __e: function(e, t, n, r) {
  for (var s, o, a; t = t.__; )
    if ((s = t.__c) && !s.__)
      try {
        if ((o = s.constructor) && o.getDerivedStateFromError != null && (s.setState(o.getDerivedStateFromError(e)), a = s.__d), s.componentDidCatch != null && (s.componentDidCatch(e, r || {}), a = s.__d), a)
          return s.__E = s;
      } catch (c) {
        e = c;
      }
  throw e;
} }, uf = 0, _f = function(e) {
  return e != null && e.constructor === void 0;
}, cr.prototype.setState = function(e, t) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = jt({}, this.state), typeof e == "function" && (e = e(jt({}, n), this.props)), e && jt(n, e), e != null && this.__v && (t && this._sb.push(t), Ya(this));
}, cr.prototype.forceUpdate = function(e) {
  this.__v && (this.__e = !0, e && this.__h.push(e), Ya(this));
}, cr.prototype.render = As, lr = [], Vo.__r = 0;
class Ds extends cr {
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
    return /* @__PURE__ */ Ki(Kt, {
      key: r,
      ...s
    });
  }
  renderItem(t, n, r) {
    const { itemRender: s, defaultBtnProps: o, onClickItem: a } = t, c = { key: r, ...n };
    if (o && Object.assign(c, o), a && (c.onClick = this.handleItemClick.bind(this, c, r, n.onClick)), s) {
      const f = s.call(this, c, Ki);
      if (_f(f))
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
    return /* @__PURE__ */ Ki("div", {
      className: I("btn-group", s ? `size-${s}` : "", n),
      ...l
    }, r && r.map(this.renderItem.bind(this, t)), c);
  }
}
function jp({
  ...e
}) {
  return /* @__PURE__ */ qt(Ds, {
    ...e
  });
}
class Bp extends mn {
  render() {
    const { message: t, actions: n, className: r } = this.props;
    return /* @__PURE__ */ qt("div", {
      class: I([r, "messagers"])
    }, /* @__PURE__ */ qt("div", {
      class: "messager-content"
    }, t), /* @__PURE__ */ qt(jp, {
      ...n
    }));
  }
}
class Ip extends mn {
  render() {
    const { className: t, placement: n } = this.props;
    return /* @__PURE__ */ qt("div", {
      class: I([t || "", "messagers-holder", "col"]),
      "data-placement": n
    });
  }
}
class Up {
  constructor(t, n) {
    N(this, "message");
    N(this, "options");
    this.message = t, this.options = n, this.render();
  }
  render() {
    const { message: t, options: n } = this, r = n != null && n.placement ? n.placement : "top";
    let s = document.querySelector(".messagers-holder[data-placement=" + r + "]");
    if (!s) {
      const c = document.createElement("div");
      document.body.appendChild(c);
      const f = {
        ...n,
        placement: r
      };
      Fa(qt(Ip, f), document.body, c);
    }
    s = document.querySelector(".messagers-holder[data-placement=" + r + "]");
    const o = document.createElement("div");
    s.appendChild(o);
    const a = {
      ...n,
      message: t,
      placement: r
    };
    Fa(qt(Bp, a), s, o);
  }
}
N(Up, "NAME", "messager");
var Ts, ue, kf, fr, Xa, xf = {}, Ef = [], Fp = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function Bt(e, t) {
  for (var n in t)
    e[n] = t[n];
  return e;
}
function Sf(e) {
  var t = e.parentNode;
  t && t.removeChild(e);
}
function uo(e, t, n) {
  var r, s, o, a = {};
  for (o in t)
    o == "key" ? r = t[o] : o == "ref" ? s = t[o] : a[o] = t[o];
  if (arguments.length > 2 && (a.children = arguments.length > 3 ? Ts.call(arguments, 2) : n), typeof e == "function" && e.defaultProps != null)
    for (o in e.defaultProps)
      a[o] === void 0 && (a[o] = e.defaultProps[o]);
  return $o(e, a, r, s, null);
}
function $o(e, t, n, r, s) {
  var o = { type: e, props: t, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: s == null ? ++kf : s };
  return s == null && ue.vnode != null && ue.vnode(o), o;
}
function Ns(e) {
  return e.children;
}
function ur(e, t) {
  this.props = e, this.context = t;
}
function Nr(e, t) {
  if (t == null)
    return e.__ ? Nr(e.__, e.__.__k.indexOf(e) + 1) : null;
  for (var n; t < e.__k.length; t++)
    if ((n = e.__k[t]) != null && n.__e != null)
      return n.__e;
  return typeof e.type == "function" ? Nr(e) : null;
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
function Ka(e) {
  (!e.__d && (e.__d = !0) && fr.push(e) && !Go.__r++ || Xa !== ue.debounceRendering) && ((Xa = ue.debounceRendering) || setTimeout)(Go);
}
function Go() {
  for (var e; Go.__r = fr.length; )
    e = fr.sort(function(t, n) {
      return t.__v.__b - n.__v.__b;
    }), fr = [], e.some(function(t) {
      var n, r, s, o, a, c;
      t.__d && (a = (o = (n = t).__v).__e, (c = n.__P) && (r = [], (s = Bt({}, o)).__v = o.__v + 1, Df(c, o, s, n.__n, c.ownerSVGElement !== void 0, o.__h != null ? [a] : null, r, a == null ? Nr(o) : a, o.__h), Yp(r, o), o.__e != a && Cf(o)));
    });
}
function Of(e, t, n, r, s, o, a, c, f, p) {
  var i, d, u, l, _, g, h, v = r && r.__k || Ef, m = v.length;
  for (n.__k = [], i = 0; i < t.length; i++)
    if ((l = n.__k[i] = (l = t[i]) == null || typeof l == "boolean" ? null : typeof l == "string" || typeof l == "number" || typeof l == "bigint" ? $o(null, l, null, null, l) : Array.isArray(l) ? $o(Ns, { children: l }, null, null, null) : l.__b > 0 ? $o(l.type, l.props, l.key, l.ref ? l.ref : null, l.__v) : l) != null) {
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
      Df(e, l, u = u || xf, s, o, a, c, f, p), _ = l.__e, (d = l.ref) && u.ref != d && (h || (h = []), u.ref && h.push(u.ref, null, l), h.push(d, l.__c || _, l)), _ != null ? (g == null && (g = _), typeof l.type == "function" && l.__k === u.__k ? l.__d = f = Mf(l, f, e) : f = Af(e, l, u, v, _, f), typeof n.type == "function" && (n.__d = f)) : f && u.__e == f && f.parentNode != e && (f = Nr(u));
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
function zp(e, t, n, r, s) {
  var o;
  for (o in n)
    o === "children" || o === "key" || o in t || Xo(e, o, null, n[o], r);
  for (o in t)
    s && typeof t[o] != "function" || o === "children" || o === "key" || o === "value" || o === "checked" || n[o] === t[o] || Xo(e, o, t[o], n[o], r);
}
function Ja(e, t, n) {
  t[0] === "-" ? e.setProperty(t, n) : e[t] = n == null ? "" : typeof n != "number" || Fp.test(t) ? n : n + "px";
}
function Xo(e, t, n, r, s) {
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
  this.l[e.type + !1](ue.event ? ue.event(e) : e);
}
function Qa(e) {
  this.l[e.type + !0](ue.event ? ue.event(e) : e);
}
function Df(e, t, n, r, s, o, a, c, f) {
  var p, i, d, u, l, _, g, h, v, m, k, b, S, $, E, y = t.type;
  if (t.constructor !== void 0)
    return null;
  n.__h != null && (f = n.__h, c = t.__e = n.__e, t.__h = null, o = [c]), (p = ue.__b) && p(t);
  try {
    e:
      if (typeof y == "function") {
        if (h = t.props, v = (p = y.contextType) && r[p.__c], m = p ? v ? v.props.value : p.__ : r, n.__c ? g = (i = t.__c = n.__c).__ = i.__E : ("prototype" in y && y.prototype.render ? t.__c = i = new y(h, m) : (t.__c = i = new ur(h, m), i.constructor = y, i.render = qp), v && v.sub(i), i.props = h, i.state || (i.state = {}), i.context = m, i.__n = r, d = i.__d = !0, i.__h = [], i._sb = []), i.__s == null && (i.__s = i.state), y.getDerivedStateFromProps != null && (i.__s == i.state && (i.__s = Bt({}, i.__s)), Bt(i.__s, y.getDerivedStateFromProps(h, i.__s))), u = i.props, l = i.state, d)
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
        if (i.context = m, i.props = h, i.__v = t, i.__P = e, b = ue.__r, S = 0, "prototype" in y && y.prototype.render) {
          for (i.state = i.__s, i.__d = !1, b && b(t), p = i.render(i.props, i.state, i.context), $ = 0; $ < i._sb.length; $++)
            i.__h.push(i._sb[$]);
          i._sb = [];
        } else
          do
            i.__d = !1, b && b(t), p = i.render(i.props, i.state, i.context), i.state = i.__s;
          while (i.__d && ++S < 25);
        i.state = i.__s, i.getChildContext != null && (r = Bt(Bt({}, r), i.getChildContext())), d || i.getSnapshotBeforeUpdate == null || (_ = i.getSnapshotBeforeUpdate(u, l)), E = p != null && p.type === Ns && p.key == null ? p.props.children : p, Of(e, Array.isArray(E) ? E : [E], t, n, r, s, o, a, c, f), i.base = t.__e, t.__h = null, i.__h.length && a.push(i), g && (i.__E = i.__ = null), i.__e = !1;
      } else
        o == null && t.__v === n.__v ? (t.__k = n.__k, t.__e = n.__e) : t.__e = Vp(n.__e, t, n, r, s, o, a, f);
    (p = ue.diffed) && p(t);
  } catch (x) {
    t.__v = null, (f || o != null) && (t.__e = c, t.__h = !!f, o[o.indexOf(c)] = null), ue.__e(x, t, n);
  }
}
function Yp(e, t) {
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
function Vp(e, t, n, r, s, o, a, c) {
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
    if (o = o && Ts.call(e.childNodes), p = (d = n.props || xf).dangerouslySetInnerHTML, i = u.dangerouslySetInnerHTML, !c) {
      if (o != null)
        for (d = {}, _ = 0; _ < e.attributes.length; _++)
          d[e.attributes[_].name] = e.attributes[_].value;
      (i || p) && (i && (p && i.__html == p.__html || i.__html === e.innerHTML) || (e.innerHTML = i && i.__html || ""));
    }
    if (zp(e, u, d, s, c), i)
      t.__k = [];
    else if (_ = t.props.children, Of(e, Array.isArray(_) ? _ : [_], t, n, r, s && l !== "foreignObject", o, a, o ? o[0] : n.__k && Nr(n, 0), c), o != null)
      for (_ = o.length; _--; )
        o[_] != null && Sf(o[_]);
    c || ("value" in u && (_ = u.value) !== void 0 && (_ !== e.value || l === "progress" && !_ || l === "option" && _ !== d.value) && Xo(e, "value", _, d.value, !1), "checked" in u && (_ = u.checked) !== void 0 && _ !== e.checked && Xo(e, "checked", _, d.checked, !1));
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
  n || e.__e == null || Sf(e.__e), e.__ = e.__e = e.__d = void 0;
}
function qp(e, t, n) {
  return this.constructor(e, n);
}
Ts = Ef.slice, ue = { __e: function(e, t, n, r) {
  for (var s, o, a; t = t.__; )
    if ((s = t.__c) && !s.__)
      try {
        if ((o = s.constructor) && o.getDerivedStateFromError != null && (s.setState(o.getDerivedStateFromError(e)), a = s.__d), s.componentDidCatch != null && (s.componentDidCatch(e, r || {}), a = s.__d), a)
          return s.__E = s;
      } catch (c) {
        e = c;
      }
  throw e;
} }, kf = 0, ur.prototype.setState = function(e, t) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = Bt({}, this.state), typeof e == "function" && (e = e(Bt({}, n), this.props)), e && Bt(n, e), e != null && this.__v && (t && this._sb.push(t), Ka(this));
}, ur.prototype.forceUpdate = function(e) {
  this.__v && (this.__e = !0, e && this.__h.push(e), Ka(this));
}, ur.prototype.render = Ns, fr = [], Go.__r = 0;
class rs extends ur {
  render() {
    const { percent: t, circleSize: n, circleBorderSize: r, circleBgColor: s, circleColor: o } = this.props, a = (n - r) / 2, c = n / 2;
    return /* @__PURE__ */ uo("svg", {
      width: n,
      height: n,
      class: "progress-circle"
    }, /* @__PURE__ */ uo("circle", {
      cx: c,
      cy: c,
      r: a,
      stroke: s,
      "stroke-width": r
    }), /* @__PURE__ */ uo("circle", {
      cx: c,
      cy: c,
      r: a,
      stroke: o,
      "stroke-dasharray": Math.PI * a * 2,
      "stroke-dashoffset": Math.PI * a * 2 * (100 - t) / 100,
      "stroke-width": r
    }), /* @__PURE__ */ uo("text", {
      x: c,
      y: c + r / 4,
      "dominant-baseline": "middle",
      style: { fontSize: `${a}px` }
    }, Math.round(t)));
  }
}
N(rs, "NAME", "zui.progress-circle"), N(rs, "defaultProps", {
  circleSize: 24,
  circleBorderSize: 2,
  circleBgColor: "var(--progress-circle-bg)",
  circleColor: "var(--progress-circle-bar-color)"
});
class el extends Ke {
}
N(el, "NAME", "table-sorter"), N(el, "Component", rs);
function Gp(e) {
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
function Xp(e) {
  document.readyState !== "loading" ? e() : document.addEventListener("DOMContentLoaded", e);
}
function Kp(e, t) {
  const n = typeof e == "string" ? document.querySelector(e) : e;
  if (!n)
    return !1;
  const r = n.getBoundingClientRect(), s = window.innerHeight || document.documentElement.clientHeight, o = window.innerWidth || document.documentElement.clientWidth;
  if (t != null && t.fullyCheck)
    return r.left >= 0 && r.top >= 0 && r.left + r.width <= o && r.top + r.height <= s;
  const a = r.top <= s && r.top + r.height >= 0, c = r.left <= o && r.left + r.width >= 0;
  return a && c;
}
const ly = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  selectText: Gp,
  domReady: Xp,
  isElementVisible: Kp,
  classes: I
}, Symbol.toStringTag, { value: "Module" }));
let Jp = (e = 21) => crypto.getRandomValues(new Uint8Array(e)).reduce((t, n) => (n &= 63, n < 36 ? t += n.toString(36) : n < 62 ? t += (n - 26).toString(36).toUpperCase() : n > 62 ? t += "-" : t += "_", t), "");
var Xr, At, et, bn, wn, ko;
const ha = class {
  constructor(t, n = "local") {
    L(this, wn);
    L(this, Xr, void 0);
    L(this, At, void 0);
    L(this, et, void 0);
    L(this, bn, void 0);
    H(this, Xr, n), H(this, At, `ZUI_STORE:${t != null ? t : Jp()}`), H(this, et, n === "local" ? localStorage : sessionStorage);
  }
  get type() {
    return w(this, Xr);
  }
  get session() {
    return this.type === "session" ? this : (w(this, bn) || H(this, bn, new ha(w(this, At), "session")), w(this, bn));
  }
  get(t, n) {
    const r = w(this, et).getItem(ve(this, wn, ko).call(this, t));
    return typeof r == "string" ? JSON.parse(r) : r != null ? r : n;
  }
  set(t, n) {
    if (n == null)
      return this.remove(t);
    w(this, et).setItem(ve(this, wn, ko).call(this, t), JSON.stringify(n));
  }
  remove(t) {
    w(this, et).removeItem(ve(this, wn, ko).call(this, t));
  }
  each(t) {
    for (let n = 0; n < w(this, et).length; n++) {
      const r = w(this, et).key(n);
      if (r != null && r.startsWith(w(this, At))) {
        const s = w(this, et).getItem(r);
        typeof s == "string" && t(r.substring(w(this, At).length + 1), JSON.parse(s));
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
let Ko = ha;
Xr = new WeakMap(), At = new WeakMap(), et = new WeakMap(), bn = new WeakMap(), wn = new WeakSet(), ko = function(t) {
  return `${w(this, At)}:${t}`;
};
const Zp = new Ko("DEFAULT");
function Qp(e, t = "local") {
  return new Ko(e, t);
}
Object.assign(Zp, { create: Qp });
var Ps, _e, Pf, _r, tl, Lf = {}, Rf = [], ed = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function It(e, t) {
  for (var n in t)
    e[n] = t[n];
  return e;
}
function Hf(e) {
  var t = e.parentNode;
  t && t.removeChild(e);
}
function Ji(e, t, n) {
  var r, s, o, a = {};
  for (o in t)
    o == "key" ? r = t[o] : o == "ref" ? s = t[o] : a[o] = t[o];
  if (arguments.length > 2 && (a.children = arguments.length > 3 ? Ps.call(arguments, 2) : n), typeof e == "function" && e.defaultProps != null)
    for (o in e.defaultProps)
      a[o] === void 0 && (a[o] = e.defaultProps[o]);
  return xo(e, a, r, s, null);
}
function xo(e, t, n, r, s) {
  var o = { type: e, props: t, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: s == null ? ++Pf : s };
  return s == null && _e.vnode != null && _e.vnode(o), o;
}
function Ls(e) {
  return e.children;
}
function pr(e, t) {
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
function Wf(e) {
  var t, n;
  if ((e = e.__) != null && e.__c != null) {
    for (e.__e = e.__c.base = null, t = 0; t < e.__k.length; t++)
      if ((n = e.__k[t]) != null && n.__e != null) {
        e.__e = e.__c.base = n.__e;
        break;
      }
    return Wf(e);
  }
}
function nl(e) {
  (!e.__d && (e.__d = !0) && _r.push(e) && !Jo.__r++ || tl !== _e.debounceRendering) && ((tl = _e.debounceRendering) || setTimeout)(Jo);
}
function Jo() {
  for (var e; Jo.__r = _r.length; )
    e = _r.sort(function(t, n) {
      return t.__v.__b - n.__v.__b;
    }), _r = [], e.some(function(t) {
      var n, r, s, o, a, c;
      t.__d && (a = (o = (n = t).__v).__e, (c = n.__P) && (r = [], (s = It({}, o)).__v = o.__v + 1, Uf(c, o, s, n.__n, c.ownerSVGElement !== void 0, o.__h != null ? [a] : null, r, a == null ? Pr(o) : a, o.__h), nd(r, o), o.__e != a && Wf(o)));
    });
}
function jf(e, t, n, r, s, o, a, c, f, p) {
  var i, d, u, l, _, g, h, v = r && r.__k || Rf, m = v.length;
  for (n.__k = [], i = 0; i < t.length; i++)
    if ((l = n.__k[i] = (l = t[i]) == null || typeof l == "boolean" ? null : typeof l == "string" || typeof l == "number" || typeof l == "bigint" ? xo(null, l, null, null, l) : Array.isArray(l) ? xo(Ls, { children: l }, null, null, null) : l.__b > 0 ? xo(l.type, l.props, l.key, l.ref ? l.ref : null, l.__v) : l) != null) {
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
      Uf(e, l, u = u || Lf, s, o, a, c, f, p), _ = l.__e, (d = l.ref) && u.ref != d && (h || (h = []), u.ref && h.push(u.ref, null, l), h.push(d, l.__c || _, l)), _ != null ? (g == null && (g = _), typeof l.type == "function" && l.__k === u.__k ? l.__d = f = Bf(l, f, e) : f = If(e, l, u, v, _, f), typeof n.type == "function" && (n.__d = f)) : f && u.__e == f && f.parentNode != e && (f = Pr(u));
    }
  for (n.__e = g, i = m; i--; )
    v[i] != null && zf(v[i], v[i]);
  if (h)
    for (i = 0; i < h.length; i++)
      Ff(h[i], h[++i], h[++i]);
}
function Bf(e, t, n) {
  for (var r, s = e.__k, o = 0; s && o < s.length; o++)
    (r = s[o]) && (r.__ = e, t = typeof r.type == "function" ? Bf(r, t, n) : If(n, r, r, s, r.__e, t));
  return t;
}
function If(e, t, n, r, s, o) {
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
function td(e, t, n, r, s) {
  var o;
  for (o in n)
    o === "children" || o === "key" || o in t || Zo(e, o, null, n[o], r);
  for (o in t)
    s && typeof t[o] != "function" || o === "children" || o === "key" || o === "value" || o === "checked" || n[o] === t[o] || Zo(e, o, t[o], n[o], r);
}
function rl(e, t, n) {
  t[0] === "-" ? e.setProperty(t, n) : e[t] = n == null ? "" : typeof n != "number" || ed.test(t) ? n : n + "px";
}
function Zo(e, t, n, r, s) {
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
  this.l[e.type + !1](_e.event ? _e.event(e) : e);
}
function il(e) {
  this.l[e.type + !0](_e.event ? _e.event(e) : e);
}
function Uf(e, t, n, r, s, o, a, c, f) {
  var p, i, d, u, l, _, g, h, v, m, k, b, S, $, E, y = t.type;
  if (t.constructor !== void 0)
    return null;
  n.__h != null && (f = n.__h, c = t.__e = n.__e, t.__h = null, o = [c]), (p = _e.__b) && p(t);
  try {
    e:
      if (typeof y == "function") {
        if (h = t.props, v = (p = y.contextType) && r[p.__c], m = p ? v ? v.props.value : p.__ : r, n.__c ? g = (i = t.__c = n.__c).__ = i.__E : ("prototype" in y && y.prototype.render ? t.__c = i = new y(h, m) : (t.__c = i = new pr(h, m), i.constructor = y, i.render = od), v && v.sub(i), i.props = h, i.state || (i.state = {}), i.context = m, i.__n = r, d = i.__d = !0, i.__h = [], i._sb = []), i.__s == null && (i.__s = i.state), y.getDerivedStateFromProps != null && (i.__s == i.state && (i.__s = It({}, i.__s)), It(i.__s, y.getDerivedStateFromProps(h, i.__s))), u = i.props, l = i.state, d)
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
        if (i.context = m, i.props = h, i.__v = t, i.__P = e, b = _e.__r, S = 0, "prototype" in y && y.prototype.render) {
          for (i.state = i.__s, i.__d = !1, b && b(t), p = i.render(i.props, i.state, i.context), $ = 0; $ < i._sb.length; $++)
            i.__h.push(i._sb[$]);
          i._sb = [];
        } else
          do
            i.__d = !1, b && b(t), p = i.render(i.props, i.state, i.context), i.state = i.__s;
          while (i.__d && ++S < 25);
        i.state = i.__s, i.getChildContext != null && (r = It(It({}, r), i.getChildContext())), d || i.getSnapshotBeforeUpdate == null || (_ = i.getSnapshotBeforeUpdate(u, l)), E = p != null && p.type === Ls && p.key == null ? p.props.children : p, jf(e, Array.isArray(E) ? E : [E], t, n, r, s, o, a, c, f), i.base = t.__e, t.__h = null, i.__h.length && a.push(i), g && (i.__E = i.__ = null), i.__e = !1;
      } else
        o == null && t.__v === n.__v ? (t.__k = n.__k, t.__e = n.__e) : t.__e = rd(n.__e, t, n, r, s, o, a, f);
    (p = _e.diffed) && p(t);
  } catch (x) {
    t.__v = null, (f || o != null) && (t.__e = c, t.__h = !!f, o[o.indexOf(c)] = null), _e.__e(x, t, n);
  }
}
function nd(e, t) {
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
function rd(e, t, n, r, s, o, a, c) {
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
    if (o = o && Ps.call(e.childNodes), p = (d = n.props || Lf).dangerouslySetInnerHTML, i = u.dangerouslySetInnerHTML, !c) {
      if (o != null)
        for (d = {}, _ = 0; _ < e.attributes.length; _++)
          d[e.attributes[_].name] = e.attributes[_].value;
      (i || p) && (i && (p && i.__html == p.__html || i.__html === e.innerHTML) || (e.innerHTML = i && i.__html || ""));
    }
    if (td(e, u, d, s, c), i)
      t.__k = [];
    else if (_ = t.props.children, jf(e, Array.isArray(_) ? _ : [_], t, n, r, s && l !== "foreignObject", o, a, o ? o[0] : n.__k && Pr(n, 0), c), o != null)
      for (_ = o.length; _--; )
        o[_] != null && Hf(o[_]);
    c || ("value" in u && (_ = u.value) !== void 0 && (_ !== e.value || l === "progress" && !_ || l === "option" && _ !== d.value) && Zo(e, "value", _, d.value, !1), "checked" in u && (_ = u.checked) !== void 0 && _ !== e.checked && Zo(e, "checked", _, d.checked, !1));
  }
  return e;
}
function Ff(e, t, n) {
  try {
    typeof e == "function" ? e(t) : e.current = t;
  } catch (r) {
    _e.__e(r, n);
  }
}
function zf(e, t, n) {
  var r, s;
  if (_e.unmount && _e.unmount(e), (r = e.ref) && (r.current && r.current !== e.__e || Ff(r, null, t)), (r = e.__c) != null) {
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
      r[s] && zf(r[s], t, n || typeof e.type != "function");
  n || e.__e == null || Hf(e.__e), e.__ = e.__e = e.__d = void 0;
}
function od(e, t, n) {
  return this.constructor(e, n);
}
Ps = Rf.slice, _e = { __e: function(e, t, n, r) {
  for (var s, o, a; t = t.__; )
    if ((s = t.__c) && !s.__)
      try {
        if ((o = s.constructor) && o.getDerivedStateFromError != null && (s.setState(o.getDerivedStateFromError(e)), a = s.__d), s.componentDidCatch != null && (s.componentDidCatch(e, r || {}), a = s.__d), a)
          return s.__E = s;
      } catch (c) {
        e = c;
      }
  throw e;
} }, Pf = 0, pr.prototype.setState = function(e, t) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = It({}, this.state), typeof e == "function" && (e = e(It({}, n), this.props)), e && It(n, e), e != null && this.__v && (t && this._sb.push(t), nl(this));
}, pr.prototype.forceUpdate = function(e) {
  this.__v && (this.__e = !0, e && this.__h.push(e), nl(this));
}, pr.prototype.render = Ls, _r = [], Jo.__r = 0;
function id(e) {
  if (e.indexOf("#") === 0 && (e = e.slice(1)), e.length === 3 && (e = e[0] + e[0] + e[1] + e[1] + e[2] + e[2]), e.length !== 6)
    throw new Error(`Invalid HEX color "${e}".`);
  return [
    parseInt(e.slice(0, 2), 16),
    parseInt(e.slice(2, 4), 16),
    parseInt(e.slice(4, 6), 16)
  ];
}
function sd(e) {
  const [t, n, r] = typeof e == "string" ? id(e) : e;
  return t * 0.299 + n * 0.587 + r * 0.114 > 186;
}
function sl(e, t) {
  var n, r;
  return sd(e) ? (n = t == null ? void 0 : t.dark) != null ? n : "#333333" : (r = t == null ? void 0 : t.light) != null ? r : "#ffffff";
}
function al(e, t = 255) {
  return Math.min(Math.max(e, 0), t);
}
function ad(e, t, n) {
  e = e % 360 / 360, t = al(t), n = al(n);
  const r = n <= 0.5 ? n * (t + 1) : n + t - n * t, s = n * 2 - r, o = (a) => (a = a < 0 ? a + 1 : a > 1 ? a - 1 : a, a * 6 < 1 ? s + (r - s) * a * 6 : a * 2 < 1 ? r : a * 3 < 2 ? s + (r - s) * (2 / 3 - a) * 6 : s);
  return [
    o(e + 1 / 3) * 255,
    o(e) * 255,
    o(e - 1 / 3) * 255
  ];
}
function ld(e) {
  let t = 0;
  if (typeof e != "string" && (e = String(e)), e && e.length)
    for (let n = 0; n < e.length; ++n)
      t += (n + 1) * e.charCodeAt(n);
  return t;
}
function cd(e, t) {
  return /^[\u4e00-\u9fa5\s]+$/.test(e) ? e = e.length <= t ? e : e.substring(e.length - t) : /^[A-Za-z\d\s]+$/.test(e) ? e = e[0].toUpperCase() : e = e.length <= t ? e : e.substring(0, t), e;
}
class fd extends pr {
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
      v.push("has-img"), b = /* @__PURE__ */ Ji("img", {
        className: "avatar-img",
        src: d,
        alt: f
      });
    else if (f != null && f.length) {
      const S = cd(f, i);
      if (v.push("has-text", `has-text-${S.length}`), a)
        !c && a && (m.color = sl(a));
      else {
        const E = p != null ? p : f, y = (typeof E == "number" ? E : ld(E)) * u % 360;
        if (m.background = `hsl(${y},${l * 100}%,${_ * 100}%)`, !c) {
          const x = ad(y, l, _);
          m.color = sl(x);
        }
      }
      let $;
      k && k < 14 * S.length && ($ = { transform: `scale(${k / (14 * S.length)})`, whiteSpace: "nowrap" }), b = /* @__PURE__ */ Ji("div", {
        "data-actualSize": k,
        className: "avatar-text",
        style: $
      }, S);
    }
    return /* @__PURE__ */ Ji("div", {
      className: I(v),
      style: m,
      ...h
    }, b, g);
  }
}
class ll extends Ke {
}
N(ll, "NAME", "avatar"), N(ll, "Component", fd);
class cl extends Ke {
}
N(cl, "NAME", "btngroup"), N(cl, "Component", Ds);
var Wi, oe, Yf, dr, fl, Qo = {}, Vf = [], ud = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function Ut(e, t) {
  for (var n in t)
    e[n] = t[n];
  return e;
}
function qf(e) {
  var t = e.parentNode;
  t && t.removeChild(e);
}
function B(e, t, n) {
  var r, s, o, a = {};
  for (o in t)
    o == "key" ? r = t[o] : o == "ref" ? s = t[o] : a[o] = t[o];
  if (arguments.length > 2 && (a.children = arguments.length > 3 ? Wi.call(arguments, 2) : n), typeof e == "function" && e.defaultProps != null)
    for (o in e.defaultProps)
      a[o] === void 0 && (a[o] = e.defaultProps[o]);
  return Eo(e, a, r, s, null);
}
function Eo(e, t, n, r, s) {
  var o = { type: e, props: t, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: s == null ? ++Yf : s };
  return s == null && oe.vnode != null && oe.vnode(o), o;
}
function _d() {
  return { current: null };
}
function ji(e) {
  return e.children;
}
function hr(e, t) {
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
function Gf(e) {
  var t, n;
  if ((e = e.__) != null && e.__c != null) {
    for (e.__e = e.__c.base = null, t = 0; t < e.__k.length; t++)
      if ((n = e.__k[t]) != null && n.__e != null) {
        e.__e = e.__c.base = n.__e;
        break;
      }
    return Gf(e);
  }
}
function ul(e) {
  (!e.__d && (e.__d = !0) && dr.push(e) && !ei.__r++ || fl !== oe.debounceRendering) && ((fl = oe.debounceRendering) || setTimeout)(ei);
}
function ei() {
  for (var e; ei.__r = dr.length; )
    e = dr.sort(function(t, n) {
      return t.__v.__b - n.__v.__b;
    }), dr = [], e.some(function(t) {
      var n, r, s, o, a, c;
      t.__d && (a = (o = (n = t).__v).__e, (c = n.__P) && (r = [], (s = Ut({}, o)).__v = o.__v + 1, Rs(c, o, s, n.__n, c.ownerSVGElement !== void 0, o.__h != null ? [a] : null, r, a == null ? Lr(o) : a, o.__h), Zf(r, o), o.__e != a && Gf(o)));
    });
}
function Xf(e, t, n, r, s, o, a, c, f, p) {
  var i, d, u, l, _, g, h, v = r && r.__k || Vf, m = v.length;
  for (n.__k = [], i = 0; i < t.length; i++)
    if ((l = n.__k[i] = (l = t[i]) == null || typeof l == "boolean" ? null : typeof l == "string" || typeof l == "number" || typeof l == "bigint" ? Eo(null, l, null, null, l) : Array.isArray(l) ? Eo(ji, { children: l }, null, null, null) : l.__b > 0 ? Eo(l.type, l.props, l.key, l.ref ? l.ref : null, l.__v) : l) != null) {
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
      Rs(e, l, u = u || Qo, s, o, a, c, f, p), _ = l.__e, (d = l.ref) && u.ref != d && (h || (h = []), u.ref && h.push(u.ref, null, l), h.push(d, l.__c || _, l)), _ != null ? (g == null && (g = _), typeof l.type == "function" && l.__k === u.__k ? l.__d = f = Kf(l, f, e) : f = Jf(e, l, u, v, _, f), typeof n.type == "function" && (n.__d = f)) : f && u.__e == f && f.parentNode != e && (f = Lr(u));
    }
  for (n.__e = g, i = m; i--; )
    v[i] != null && eu(v[i], v[i]);
  if (h)
    for (i = 0; i < h.length; i++)
      Qf(h[i], h[++i], h[++i]);
}
function Kf(e, t, n) {
  for (var r, s = e.__k, o = 0; s && o < s.length; o++)
    (r = s[o]) && (r.__ = e, t = typeof r.type == "function" ? Kf(r, t, n) : Jf(n, r, r, s, r.__e, t));
  return t;
}
function Jf(e, t, n, r, s, o) {
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
    o === "children" || o === "key" || o in t || ti(e, o, null, n[o], r);
  for (o in t)
    s && typeof t[o] != "function" || o === "children" || o === "key" || o === "value" || o === "checked" || n[o] === t[o] || ti(e, o, t[o], n[o], r);
}
function _l(e, t, n) {
  t[0] === "-" ? e.setProperty(t, n) : e[t] = n == null ? "" : typeof n != "number" || ud.test(t) ? n : n + "px";
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
            n && t in n || _l(e.style, t, "");
        if (n)
          for (t in n)
            r && n[t] === r[t] || _l(e.style, t, n[t]);
      }
    else if (t[0] === "o" && t[1] === "n")
      o = t !== (t = t.replace(/Capture$/, "")), t = t.toLowerCase() in e ? t.toLowerCase().slice(2) : t.slice(2), e.l || (e.l = {}), e.l[t + o] = n, n ? r || e.addEventListener(t, o ? dl : pl, o) : e.removeEventListener(t, o ? dl : pl, o);
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
function pl(e) {
  this.l[e.type + !1](oe.event ? oe.event(e) : e);
}
function dl(e) {
  this.l[e.type + !0](oe.event ? oe.event(e) : e);
}
function Rs(e, t, n, r, s, o, a, c, f) {
  var p, i, d, u, l, _, g, h, v, m, k, b, S, $, E, y = t.type;
  if (t.constructor !== void 0)
    return null;
  n.__h != null && (f = n.__h, c = t.__e = n.__e, t.__h = null, o = [c]), (p = oe.__b) && p(t);
  try {
    e:
      if (typeof y == "function") {
        if (h = t.props, v = (p = y.contextType) && r[p.__c], m = p ? v ? v.props.value : p.__ : r, n.__c ? g = (i = t.__c = n.__c).__ = i.__E : ("prototype" in y && y.prototype.render ? t.__c = i = new y(h, m) : (t.__c = i = new hr(h, m), i.constructor = y, i.render = hd), v && v.sub(i), i.props = h, i.state || (i.state = {}), i.context = m, i.__n = r, d = i.__d = !0, i.__h = [], i._sb = []), i.__s == null && (i.__s = i.state), y.getDerivedStateFromProps != null && (i.__s == i.state && (i.__s = Ut({}, i.__s)), Ut(i.__s, y.getDerivedStateFromProps(h, i.__s))), u = i.props, l = i.state, d)
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
        if (i.context = m, i.props = h, i.__v = t, i.__P = e, b = oe.__r, S = 0, "prototype" in y && y.prototype.render) {
          for (i.state = i.__s, i.__d = !1, b && b(t), p = i.render(i.props, i.state, i.context), $ = 0; $ < i._sb.length; $++)
            i.__h.push(i._sb[$]);
          i._sb = [];
        } else
          do
            i.__d = !1, b && b(t), p = i.render(i.props, i.state, i.context), i.state = i.__s;
          while (i.__d && ++S < 25);
        i.state = i.__s, i.getChildContext != null && (r = Ut(Ut({}, r), i.getChildContext())), d || i.getSnapshotBeforeUpdate == null || (_ = i.getSnapshotBeforeUpdate(u, l)), E = p != null && p.type === ji && p.key == null ? p.props.children : p, Xf(e, Array.isArray(E) ? E : [E], t, n, r, s, o, a, c, f), i.base = t.__e, t.__h = null, i.__h.length && a.push(i), g && (i.__E = i.__ = null), i.__e = !1;
      } else
        o == null && t.__v === n.__v ? (t.__k = n.__k, t.__e = n.__e) : t.__e = dd(n.__e, t, n, r, s, o, a, f);
    (p = oe.diffed) && p(t);
  } catch (x) {
    t.__v = null, (f || o != null) && (t.__e = c, t.__h = !!f, o[o.indexOf(c)] = null), oe.__e(x, t, n);
  }
}
function Zf(e, t) {
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
function dd(e, t, n, r, s, o, a, c) {
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
    if (o = o && Wi.call(e.childNodes), p = (d = n.props || Qo).dangerouslySetInnerHTML, i = u.dangerouslySetInnerHTML, !c) {
      if (o != null)
        for (d = {}, _ = 0; _ < e.attributes.length; _++)
          d[e.attributes[_].name] = e.attributes[_].value;
      (i || p) && (i && (p && i.__html == p.__html || i.__html === e.innerHTML) || (e.innerHTML = i && i.__html || ""));
    }
    if (pd(e, u, d, s, c), i)
      t.__k = [];
    else if (_ = t.props.children, Xf(e, Array.isArray(_) ? _ : [_], t, n, r, s && l !== "foreignObject", o, a, o ? o[0] : n.__k && Lr(n, 0), c), o != null)
      for (_ = o.length; _--; )
        o[_] != null && qf(o[_]);
    c || ("value" in u && (_ = u.value) !== void 0 && (_ !== e.value || l === "progress" && !_ || l === "option" && _ !== d.value) && ti(e, "value", _, d.value, !1), "checked" in u && (_ = u.checked) !== void 0 && _ !== e.checked && ti(e, "checked", _, d.checked, !1));
  }
  return e;
}
function Qf(e, t, n) {
  try {
    typeof e == "function" ? e(t) : e.current = t;
  } catch (r) {
    oe.__e(r, n);
  }
}
function eu(e, t, n) {
  var r, s;
  if (oe.unmount && oe.unmount(e), (r = e.ref) && (r.current && r.current !== e.__e || Qf(r, null, t)), (r = e.__c) != null) {
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
      r[s] && eu(r[s], t, n || typeof e.type != "function");
  n || e.__e == null || qf(e.__e), e.__ = e.__e = e.__d = void 0;
}
function hd(e, t, n) {
  return this.constructor(e, n);
}
function vd(e, t, n) {
  var r, s, o;
  oe.__ && oe.__(e, t), s = (r = typeof n == "function") ? null : n && n.__k || t.__k, o = [], Rs(t, e = (!r && n || t).__k = B(ji, null, [e]), s || Qo, Qo, t.ownerSVGElement !== void 0, !r && n ? [n] : s ? null : t.firstChild ? Wi.call(t.childNodes) : null, o, !r && n ? n : s ? s.__e : t.firstChild, r), Zf(o, e);
}
Wi = Vf.slice, oe = { __e: function(e, t, n, r) {
  for (var s, o, a; t = t.__; )
    if ((s = t.__c) && !s.__)
      try {
        if ((o = s.constructor) && o.getDerivedStateFromError != null && (s.setState(o.getDerivedStateFromError(e)), a = s.__d), s.componentDidCatch != null && (s.componentDidCatch(e, r || {}), a = s.__d), a)
          return s.__E = s;
      } catch (c) {
        e = c;
      }
  throw e;
} }, Yf = 0, hr.prototype.setState = function(e, t) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = Ut({}, this.state), typeof e == "function" && (e = e(Ut({}, n), this.props)), e && Ut(n, e), e != null && this.__v && (t && this._sb.push(t), ul(this));
}, hr.prototype.forceUpdate = function(e) {
  this.__v && (this.__e = !0, e && this.__h.push(e), ul(this));
}, hr.prototype.render = ji, dr = [], ei.__r = 0;
var md = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, tu = { exports: {} };
(function(e, t) {
  (function(n, r) {
    e.exports = r();
  })(md, function() {
    var n = 1e3, r = 6e4, s = 36e5, o = "millisecond", a = "second", c = "minute", f = "hour", p = "day", i = "week", d = "month", u = "quarter", l = "year", _ = "date", g = "Invalid Date", h = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, v = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, m = { name: "en", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), ordinal: function(A) {
      var D = ["th", "st", "nd", "rd"], O = A % 100;
      return "[" + A + (D[(O - 20) % 10] || D[O] || D[0]) + "]";
    } }, k = function(A, D, O) {
      var T = String(A);
      return !T || T.length >= D ? A : "" + Array(D + 1 - T.length).join(O) + A;
    }, b = { s: k, z: function(A) {
      var D = -A.utcOffset(), O = Math.abs(D), T = Math.floor(O / 60), M = O % 60;
      return (D <= 0 ? "+" : "-") + k(T, 2, "0") + ":" + k(M, 2, "0");
    }, m: function A(D, O) {
      if (D.date() < O.date())
        return -A(O, D);
      var T = 12 * (O.year() - D.year()) + (O.month() - D.month()), M = D.clone().add(T, d), j = O - M < 0, R = D.clone().add(T + (j ? -1 : 1), d);
      return +(-(T + (O - M) / (j ? M - R : R - M)) || 0);
    }, a: function(A) {
      return A < 0 ? Math.ceil(A) || 0 : Math.floor(A);
    }, p: function(A) {
      return { M: d, y: l, w: i, d: p, D: _, h: f, m: c, s: a, ms: o, Q: u }[A] || String(A || "").toLowerCase().replace(/s$/, "");
    }, u: function(A) {
      return A === void 0;
    } }, S = "en", $ = {};
    $[S] = m;
    var E = function(A) {
      return A instanceof W;
    }, y = function A(D, O, T) {
      var M;
      if (!D)
        return S;
      if (typeof D == "string") {
        var j = D.toLowerCase();
        $[j] && (M = j), O && ($[j] = O, M = j);
        var R = D.split("-");
        if (!M && R.length > 1)
          return A(R[0]);
      } else {
        var U = D.name;
        $[U] = D, M = U;
      }
      return !T && M && (S = M), M || !T && S;
    }, x = function(A, D) {
      if (E(A))
        return A.clone();
      var O = typeof D == "object" ? D : {};
      return O.date = A, O.args = arguments, new W(O);
    }, C = b;
    C.l = y, C.i = E, C.w = function(A, D) {
      return x(A, { locale: D.$L, utc: D.$u, x: D.$x, $offset: D.$offset });
    };
    var W = function() {
      function A(O) {
        this.$L = y(O.locale, null, !0), this.parse(O);
      }
      var D = A.prototype;
      return D.parse = function(O) {
        this.$d = function(T) {
          var M = T.date, j = T.utc;
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
      }, D.init = function() {
        var O = this.$d;
        this.$y = O.getFullYear(), this.$M = O.getMonth(), this.$D = O.getDate(), this.$W = O.getDay(), this.$H = O.getHours(), this.$m = O.getMinutes(), this.$s = O.getSeconds(), this.$ms = O.getMilliseconds();
      }, D.$utils = function() {
        return C;
      }, D.isValid = function() {
        return this.$d.toString() !== g;
      }, D.isSame = function(O, T) {
        var M = x(O);
        return this.startOf(T) <= M && M <= this.endOf(T);
      }, D.isAfter = function(O, T) {
        return x(O) < this.startOf(T);
      }, D.isBefore = function(O, T) {
        return this.endOf(T) < x(O);
      }, D.$g = function(O, T, M) {
        return C.u(O) ? this[T] : this.set(M, O);
      }, D.unix = function() {
        return Math.floor(this.valueOf() / 1e3);
      }, D.valueOf = function() {
        return this.$d.getTime();
      }, D.startOf = function(O, T) {
        var M = this, j = !!C.u(T) || T, R = C.p(O), U = function(q, Z) {
          var ae = C.w(M.$u ? Date.UTC(M.$y, Z, q) : new Date(M.$y, Z, q), M);
          return j ? ae : ae.endOf(p);
        }, G = function(q, Z) {
          return C.w(M.toDate()[q].apply(M.toDate("s"), (j ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(Z)), M);
        }, z = this.$W, J = this.$M, Q = this.$D, P = "set" + (this.$u ? "UTC" : "");
        switch (R) {
          case l:
            return j ? U(1, 0) : U(31, 11);
          case d:
            return j ? U(1, J) : U(0, J + 1);
          case i:
            var Y = this.$locale().weekStart || 0, X = (z < Y ? z + 7 : z) - Y;
            return U(j ? Q - X : Q + (6 - X), J);
          case p:
          case _:
            return G(P + "Hours", 0);
          case f:
            return G(P + "Minutes", 1);
          case c:
            return G(P + "Seconds", 2);
          case a:
            return G(P + "Milliseconds", 3);
          default:
            return this.clone();
        }
      }, D.endOf = function(O) {
        return this.startOf(O, !1);
      }, D.$set = function(O, T) {
        var M, j = C.p(O), R = "set" + (this.$u ? "UTC" : ""), U = (M = {}, M[p] = R + "Date", M[_] = R + "Date", M[d] = R + "Month", M[l] = R + "FullYear", M[f] = R + "Hours", M[c] = R + "Minutes", M[a] = R + "Seconds", M[o] = R + "Milliseconds", M)[j], G = j === p ? this.$D + (T - this.$W) : T;
        if (j === d || j === l) {
          var z = this.clone().set(_, 1);
          z.$d[U](G), z.init(), this.$d = z.set(_, Math.min(this.$D, z.daysInMonth())).$d;
        } else
          U && this.$d[U](G);
        return this.init(), this;
      }, D.set = function(O, T) {
        return this.clone().$set(O, T);
      }, D.get = function(O) {
        return this[C.p(O)]();
      }, D.add = function(O, T) {
        var M, j = this;
        O = Number(O);
        var R = C.p(T), U = function(J) {
          var Q = x(j);
          return C.w(Q.date(Q.date() + Math.round(J * O)), j);
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
      }, D.subtract = function(O, T) {
        return this.add(-1 * O, T);
      }, D.format = function(O) {
        var T = this, M = this.$locale();
        if (!this.isValid())
          return M.invalidDate || g;
        var j = O || "YYYY-MM-DDTHH:mm:ssZ", R = C.z(this), U = this.$H, G = this.$m, z = this.$M, J = M.weekdays, Q = M.months, P = function(Z, ae, se, be) {
          return Z && (Z[ae] || Z(T, j)) || se[ae].slice(0, be);
        }, Y = function(Z) {
          return C.s(U % 12 || 12, Z, "0");
        }, X = M.meridiem || function(Z, ae, se) {
          var be = Z < 12 ? "AM" : "PM";
          return se ? be.toLowerCase() : be;
        }, q = { YY: String(this.$y).slice(-2), YYYY: this.$y, M: z + 1, MM: C.s(z + 1, 2, "0"), MMM: P(M.monthsShort, z, Q, 3), MMMM: P(Q, z), D: this.$D, DD: C.s(this.$D, 2, "0"), d: String(this.$W), dd: P(M.weekdaysMin, this.$W, J, 2), ddd: P(M.weekdaysShort, this.$W, J, 3), dddd: J[this.$W], H: String(U), HH: C.s(U, 2, "0"), h: Y(1), hh: Y(2), a: X(U, G, !0), A: X(U, G, !1), m: String(G), mm: C.s(G, 2, "0"), s: String(this.$s), ss: C.s(this.$s, 2, "0"), SSS: C.s(this.$ms, 3, "0"), Z: R };
        return j.replace(v, function(Z, ae) {
          return ae || q[Z] || R.replace(":", "");
        });
      }, D.utcOffset = function() {
        return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
      }, D.diff = function(O, T, M) {
        var j, R = C.p(T), U = x(O), G = (U.utcOffset() - this.utcOffset()) * r, z = this - U, J = C.m(this, U);
        return J = (j = {}, j[l] = J / 12, j[d] = J, j[u] = J / 3, j[i] = (z - G) / 6048e5, j[p] = (z - G) / 864e5, j[f] = z / s, j[c] = z / r, j[a] = z / n, j)[R] || z, M ? J : C.a(J);
      }, D.daysInMonth = function() {
        return this.endOf(d).$D;
      }, D.$locale = function() {
        return $[this.$L];
      }, D.locale = function(O, T) {
        if (!O)
          return this.$L;
        var M = this.clone(), j = y(O, T, !0);
        return j && (M.$L = j), M;
      }, D.clone = function() {
        return C.w(this.$d, this);
      }, D.toDate = function() {
        return new Date(this.valueOf());
      }, D.toJSON = function() {
        return this.isValid() ? this.toISOString() : null;
      }, D.toISOString = function() {
        return this.$d.toISOString();
      }, D.toString = function() {
        return this.$d.toUTCString();
      }, A;
    }(), F = W.prototype;
    return x.prototype = F, [["$ms", o], ["$s", a], ["$m", c], ["$H", f], ["$W", p], ["$M", d], ["$y", l], ["$D", _]].forEach(function(A) {
      F[A[1]] = function(D) {
        return this.$g(D, A[0], A[1]);
      };
    }), x.extend = function(A, D) {
      return A.$i || (A(D, W, x), A.$i = !0), x;
    }, x.locale = y, x.isDayjs = E, x.unix = function(A) {
      return x(1e3 * A);
    }, x.en = $[S], x.Ls = $, x.p = {}, x;
  });
})(tu);
const K = tu.exports;
class gd extends hr {
  constructor() {
    super(...arguments);
    N(this, "DATEROWCOUNT", 6);
    N(this, "ref", _d());
    N(this, "state", {
      selectedDate: this.props.date || null
    });
  }
  addMonth(n) {
    return K(n).isValid() ? K(n).add(1, "months").format(this.props.format) : "";
  }
  subtractMonth(n) {
    return K(n).isValid() ? K(n).subtract(1, "months").format(this.props.format) : "";
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
    const a = K(), c = K(this.state.selectedDate), f = new Array(n);
    for (let i = 0; i < n; i++) {
      const d = r + i + 1, u = s.set("date", d), l = o && !this.props.showOtherMonth ? !0 : this.props.minDate && u.isBefore(this.props.minDate, "date") || this.props.maxDate && u.isAfter(this.props.maxDate, "date") || this.props.minYear && u.isBefore(K(`${this.props.minYear}-01-01`), "year") || this.props.maxYear && u.isAfter(K(`${this.props.maxYear}-12-31`), "year");
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
    const n = K(this.state.selectedDate), r = K(), s = this.state.selectedDate ? n : r, o = s.set("date", 1).day(), a = o === 0 ? 6 : o - 1, c = s.subtract(1, "month"), p = Number(c.endOf("month").get("date")) - a;
    return this.renderMonthDay(a, p, c, !0);
  }
  renderNextMonthDay() {
    const n = K(this.state.selectedDate), r = K(), s = this.state.selectedDate ? n : r, o = s.set("date", 1).day(), a = o === 0 ? 6 : o - 1, c = s.endOf("month").get("date"), f = s.add(1, "month"), p = 7 * 6 % (a + c);
    return this.renderMonthDay(p, 0, f, !0);
  }
  renderCurrentMonthDays() {
    const n = this.state.selectedDate, r = K(), s = this.state.selectedDate ? K(n) : r, o = s.endOf("month").get("date"), a = this.renderMonthDay(o, 0, s, !1), c = this.renderPreMonthDay(), f = this.renderNextMonthDay(), p = [...c, ...a, ...f];
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
    const { className: n } = this.props, r = ["\u4E00", "\u4E8C", "\u4E09", "\u56DB", "\u4E94", "\u516D", "\u65E5"], s = this.renderCurrentMonthDays();
    return /* @__PURE__ */ B("div", {
      className: I("calendar-day", n)
    }, /* @__PURE__ */ B("div", {
      className: "calendar-bar"
    }, /* @__PURE__ */ B("div", {
      class: "flex"
    }, /* @__PURE__ */ B("button", {
      type: "button",
      className: "btn ghost",
      onClick: () => {
        const o = K(this.state.selectedDate).subtract(1, "year").startOf("year").format(this.props.format);
        this.handleChange(o);
      }
    }, /* @__PURE__ */ B("i", {
      className: "icon icon-double-angle-left"
    })), /* @__PURE__ */ B("button", {
      type: "button",
      className: "btn ghost",
      onClick: () => {
        const o = this.subtractMonth(this.state.selectedDate || K().format(this.props.format));
        this.handleChange(o);
      }
    }, /* @__PURE__ */ B("i", {
      className: "icon icon-angle-left"
    }))), /* @__PURE__ */ B("div", {
      class: "flex"
    }, /* @__PURE__ */ B("button", {
      type: "button",
      className: "btn ghost",
      onClick: () => this.handleChangePanel("year")
    }, K(this.state.selectedDate).format("YYYY \u5E74")), /* @__PURE__ */ B("button", {
      type: "button",
      className: "btn ghost",
      onClick: () => this.handleChangePanel("month")
    }, K(this.state.selectedDate).format("MM \u6708"))), /* @__PURE__ */ B("div", {
      class: "flex"
    }, /* @__PURE__ */ B("button", {
      type: "button",
      className: "btn ghost",
      onClick: () => {
        const o = this.addMonth(this.state.selectedDate || K().format(this.props.format));
        this.handleChange(o);
      }
    }, /* @__PURE__ */ B("i", {
      className: "icon icon-angle-right"
    })), /* @__PURE__ */ B("button", {
      type: "button",
      className: "btn ghost",
      onClick: () => {
        const o = K(this.state.selectedDate).add(1, "year").startOf("year").format(this.props.format);
        this.handleChange(o);
      }
    }, /* @__PURE__ */ B("i", {
      className: "icon icon-double-angle-right"
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
          const i = K(c.date).format(this.props.format);
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
        const r = K(this.state.selectedDate).subtract(1, "year").startOf("year").format(this.props.format);
        this.handleChange(r);
      }
    }, /* @__PURE__ */ B("i", {
      className: "icon icon-angle-left"
    })), /* @__PURE__ */ B("button", {
      type: "button",
      className: "btn ghost",
      onClick: () => this.handleChangePanel("year")
    }, K(this.state.selectedDate).format("YYYY \u5E74")), /* @__PURE__ */ B("button", {
      type: "button",
      className: "btn ghost",
      onClick: () => {
        const r = K(this.state.selectedDate).add(1, "year").startOf("year").format(this.props.format);
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
      const c = ["text-center"], f = K(this.state.selectedDate).year(), p = K(`${f}-${o}-01`).format(this.props.format);
      return /* @__PURE__ */ B("td", {
        key: a,
        className: I(c)
      }, /* @__PURE__ */ B("div", {
        className: I("btn", "ghost", "calendar-month"),
        onClick: () => {
          this.handleChangeMonth(p);
        }
      }, K(p).format("MM"), " \u6708"));
    }))))));
  }
  renderYearPanel() {
    const n = K(this.state.selectedDate).year(), r = this.createGroups(this.generateArrayNumber(n, n + 11), 3);
    return /* @__PURE__ */ B("div", {
      className: I("calendar-year", "hidden")
    }, /* @__PURE__ */ B("div", {
      className: "calendar-bar"
    }, /* @__PURE__ */ B("button", {
      type: "button",
      className: "btn ghost",
      onClick: () => {
        const s = K(this.state.selectedDate).subtract(12, "year").startOf("year").format(this.props.format);
        this.handleChange(s);
      }
    }, /* @__PURE__ */ B("i", {
      className: "icon icon-angle-left"
    })), /* @__PURE__ */ B("div", null, K(this.state.selectedDate).year(), " - ", n + 11), /* @__PURE__ */ B("button", {
      type: "button",
      className: "btn ghost",
      onClick: () => {
        const s = K(this.state.selectedDate).add(12, "year").startOf("year").format(this.props.format);
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
      const f = ["text-center"], p = K(this.state.selectedDate).month(), i = K(`${a}-${p}-01`).format(this.props.format), d = this.props.minYear && a <= this.props.minYear || this.props.maxYear && a > this.props.maxYear;
      return /* @__PURE__ */ B("td", {
        key: c,
        className: I(f)
      }, /* @__PURE__ */ B("div", {
        className: I("btn", "ghost", "calendar-month", d ? "disabled" : ""),
        onClick: () => {
          d || this.handleChangeYear(i);
        }
      }, K(i).format("YYYY")));
    }))))));
  }
  render() {
    return /* @__PURE__ */ B("div", {
      className: I("datetimepicker-calendar"),
      ref: this.ref
    }, this.renderDayPanel(), this.renderMonthPanel(), this.renderYearPanel());
  }
}
function Le(e) {
  if (e == null)
    return window;
  if (e.toString() !== "[object Window]") {
    var t = e.ownerDocument;
    return t && t.defaultView || window;
  }
  return e;
}
function pn(e) {
  var t = Le(e).Element;
  return e instanceof t || e instanceof Element;
}
function Te(e) {
  var t = Le(e).HTMLElement;
  return e instanceof t || e instanceof HTMLElement;
}
function Hs(e) {
  if (typeof ShadowRoot > "u")
    return !1;
  var t = Le(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot;
}
var fn = Math.max, ni = Math.min, Hn = Math.round;
function os() {
  var e = navigator.userAgentData;
  return e != null && e.brands ? e.brands.map(function(t) {
    return t.brand + "/" + t.version;
  }).join(" ") : navigator.userAgent;
}
function nu() {
  return !/^((?!chrome|android).)*safari/i.test(os());
}
function Wn(e, t, n) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  var r = e.getBoundingClientRect(), s = 1, o = 1;
  t && Te(e) && (s = e.offsetWidth > 0 && Hn(r.width) / e.offsetWidth || 1, o = e.offsetHeight > 0 && Hn(r.height) / e.offsetHeight || 1);
  var a = pn(e) ? Le(e) : window, c = a.visualViewport, f = !nu() && n, p = (r.left + (f && c ? c.offsetLeft : 0)) / s, i = (r.top + (f && c ? c.offsetTop : 0)) / o, d = r.width / s, u = r.height / o;
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
function Ws(e) {
  var t = Le(e), n = t.pageXOffset, r = t.pageYOffset;
  return {
    scrollLeft: n,
    scrollTop: r
  };
}
function yd(e) {
  return {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  };
}
function bd(e) {
  return e === Le(e) || !Te(e) ? Ws(e) : yd(e);
}
function lt(e) {
  return e ? (e.nodeName || "").toLowerCase() : null;
}
function Zt(e) {
  return ((pn(e) ? e.ownerDocument : e.document) || window.document).documentElement;
}
function js(e) {
  return Wn(Zt(e)).left + Ws(e).scrollLeft;
}
function yt(e) {
  return Le(e).getComputedStyle(e);
}
function Bs(e) {
  var t = yt(e), n = t.overflow, r = t.overflowX, s = t.overflowY;
  return /auto|scroll|overlay|hidden/.test(n + s + r);
}
function wd(e) {
  var t = e.getBoundingClientRect(), n = Hn(t.width) / e.offsetWidth || 1, r = Hn(t.height) / e.offsetHeight || 1;
  return n !== 1 || r !== 1;
}
function $d(e, t, n) {
  n === void 0 && (n = !1);
  var r = Te(t), s = Te(t) && wd(t), o = Zt(t), a = Wn(e, s, n), c = {
    scrollLeft: 0,
    scrollTop: 0
  }, f = {
    x: 0,
    y: 0
  };
  return (r || !r && !n) && ((lt(t) !== "body" || Bs(o)) && (c = bd(t)), Te(t) ? (f = Wn(t, !0), f.x += t.clientLeft, f.y += t.clientTop) : o && (f.x = js(o))), {
    x: a.left + c.scrollLeft - f.x,
    y: a.top + c.scrollTop - f.y,
    width: a.width,
    height: a.height
  };
}
function Is(e) {
  var t = Wn(e), n = e.offsetWidth, r = e.offsetHeight;
  return Math.abs(t.width - n) <= 1 && (n = t.width), Math.abs(t.height - r) <= 1 && (r = t.height), {
    x: e.offsetLeft,
    y: e.offsetTop,
    width: n,
    height: r
  };
}
function Bi(e) {
  return lt(e) === "html" ? e : e.assignedSlot || e.parentNode || (Hs(e) ? e.host : null) || Zt(e);
}
function ru(e) {
  return ["html", "body", "#document"].indexOf(lt(e)) >= 0 ? e.ownerDocument.body : Te(e) && Bs(e) ? e : ru(Bi(e));
}
function vr(e, t) {
  var n;
  t === void 0 && (t = []);
  var r = ru(e), s = r === ((n = e.ownerDocument) == null ? void 0 : n.body), o = Le(r), a = s ? [o].concat(o.visualViewport || [], Bs(r) ? r : []) : r, c = t.concat(a);
  return s ? c : c.concat(vr(Bi(a)));
}
function kd(e) {
  return ["table", "td", "th"].indexOf(lt(e)) >= 0;
}
function hl(e) {
  return !Te(e) || yt(e).position === "fixed" ? null : e.offsetParent;
}
function xd(e) {
  var t = /firefox/i.test(os()), n = /Trident/i.test(os());
  if (n && Te(e)) {
    var r = yt(e);
    if (r.position === "fixed")
      return null;
  }
  var s = Bi(e);
  for (Hs(s) && (s = s.host); Te(s) && ["html", "body"].indexOf(lt(s)) < 0; ) {
    var o = yt(s);
    if (o.transform !== "none" || o.perspective !== "none" || o.contain === "paint" || ["transform", "perspective"].indexOf(o.willChange) !== -1 || t && o.willChange === "filter" || t && o.filter && o.filter !== "none")
      return s;
    s = s.parentNode;
  }
  return null;
}
function so(e) {
  for (var t = Le(e), n = hl(e); n && kd(n) && yt(n).position === "static"; )
    n = hl(n);
  return n && (lt(n) === "html" || lt(n) === "body" && yt(n).position === "static") ? t : n || xd(e) || t;
}
var Se = "top", Ve = "bottom", qe = "right", Ce = "left", Us = "auto", ao = [Se, Ve, qe, Ce], jn = "start", Rr = "end", Ed = "clippingParents", ou = "viewport", Jn = "popper", Sd = "reference", vl = /* @__PURE__ */ ao.reduce(function(e, t) {
  return e.concat([t + "-" + jn, t + "-" + Rr]);
}, []), iu = /* @__PURE__ */ [].concat(ao, [Us]).reduce(function(e, t) {
  return e.concat([t, t + "-" + jn, t + "-" + Rr]);
}, []), Cd = "beforeRead", Od = "read", Md = "afterRead", Ad = "beforeMain", Dd = "main", Td = "afterMain", Nd = "beforeWrite", Pd = "write", Ld = "afterWrite", Rd = [Cd, Od, Md, Ad, Dd, Td, Nd, Pd, Ld];
function Hd(e) {
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
function Wd(e) {
  var t = Hd(e);
  return Rd.reduce(function(n, r) {
    return n.concat(t.filter(function(s) {
      return s.phase === r;
    }));
  }, []);
}
function jd(e) {
  var t;
  return function() {
    return t || (t = new Promise(function(n) {
      Promise.resolve().then(function() {
        t = void 0, n(e());
      });
    })), t;
  };
}
function st(e) {
  return e.split("-")[0];
}
function Bd(e) {
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
function Id(e, t) {
  var n = Le(e), r = Zt(e), s = n.visualViewport, o = r.clientWidth, a = r.clientHeight, c = 0, f = 0;
  if (s) {
    o = s.width, a = s.height;
    var p = nu();
    (p || !p && t === "fixed") && (c = s.offsetLeft, f = s.offsetTop);
  }
  return {
    width: o,
    height: a,
    x: c + js(e),
    y: f
  };
}
function Ud(e) {
  var t, n = Zt(e), r = Ws(e), s = (t = e.ownerDocument) == null ? void 0 : t.body, o = fn(n.scrollWidth, n.clientWidth, s ? s.scrollWidth : 0, s ? s.clientWidth : 0), a = fn(n.scrollHeight, n.clientHeight, s ? s.scrollHeight : 0, s ? s.clientHeight : 0), c = -r.scrollLeft + js(e), f = -r.scrollTop;
  return yt(s || n).direction === "rtl" && (c += fn(n.clientWidth, s ? s.clientWidth : 0) - o), {
    width: o,
    height: a,
    x: c,
    y: f
  };
}
function su(e, t) {
  var n = t.getRootNode && t.getRootNode();
  if (e.contains(t))
    return !0;
  if (n && Hs(n)) {
    var r = t;
    do {
      if (r && e.isSameNode(r))
        return !0;
      r = r.parentNode || r.host;
    } while (r);
  }
  return !1;
}
function is(e) {
  return Object.assign({}, e, {
    left: e.x,
    top: e.y,
    right: e.x + e.width,
    bottom: e.y + e.height
  });
}
function Fd(e, t) {
  var n = Wn(e, !1, t === "fixed");
  return n.top = n.top + e.clientTop, n.left = n.left + e.clientLeft, n.bottom = n.top + e.clientHeight, n.right = n.left + e.clientWidth, n.width = e.clientWidth, n.height = e.clientHeight, n.x = n.left, n.y = n.top, n;
}
function ml(e, t, n) {
  return t === ou ? is(Id(e, n)) : pn(t) ? Fd(t, n) : is(Ud(Zt(e)));
}
function zd(e) {
  var t = vr(Bi(e)), n = ["absolute", "fixed"].indexOf(yt(e).position) >= 0, r = n && Te(e) ? so(e) : e;
  return pn(r) ? t.filter(function(s) {
    return pn(s) && su(s, r) && lt(s) !== "body";
  }) : [];
}
function Yd(e, t, n, r) {
  var s = t === "clippingParents" ? zd(e) : [].concat(t), o = [].concat(s, [n]), a = o[0], c = o.reduce(function(f, p) {
    var i = ml(e, p, r);
    return f.top = fn(i.top, f.top), f.right = ni(i.right, f.right), f.bottom = ni(i.bottom, f.bottom), f.left = fn(i.left, f.left), f;
  }, ml(e, a, r));
  return c.width = c.right - c.left, c.height = c.bottom - c.top, c.x = c.left, c.y = c.top, c;
}
function Bn(e) {
  return e.split("-")[1];
}
function Fs(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function au(e) {
  var t = e.reference, n = e.element, r = e.placement, s = r ? st(r) : null, o = r ? Bn(r) : null, a = t.x + t.width / 2 - n.width / 2, c = t.y + t.height / 2 - n.height / 2, f;
  switch (s) {
    case Se:
      f = {
        x: a,
        y: t.y - n.height
      };
      break;
    case Ve:
      f = {
        x: a,
        y: t.y + t.height
      };
      break;
    case qe:
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
  var p = s ? Fs(s) : null;
  if (p != null) {
    var i = p === "y" ? "height" : "width";
    switch (o) {
      case jn:
        f[p] = f[p] - (t[i] / 2 - n[i] / 2);
        break;
      case Rr:
        f[p] = f[p] + (t[i] / 2 - n[i] / 2);
        break;
    }
  }
  return f;
}
function lu() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
function cu(e) {
  return Object.assign({}, lu(), e);
}
function fu(e, t) {
  return t.reduce(function(n, r) {
    return n[r] = e, n;
  }, {});
}
function zs(e, t) {
  t === void 0 && (t = {});
  var n = t, r = n.placement, s = r === void 0 ? e.placement : r, o = n.strategy, a = o === void 0 ? e.strategy : o, c = n.boundary, f = c === void 0 ? Ed : c, p = n.rootBoundary, i = p === void 0 ? ou : p, d = n.elementContext, u = d === void 0 ? Jn : d, l = n.altBoundary, _ = l === void 0 ? !1 : l, g = n.padding, h = g === void 0 ? 0 : g, v = cu(typeof h != "number" ? h : fu(h, ao)), m = u === Jn ? Sd : Jn, k = e.rects.popper, b = e.elements[_ ? m : u], S = Yd(pn(b) ? b : b.contextElement || Zt(e.elements.popper), f, i, a), $ = Wn(e.elements.reference), E = au({
    reference: $,
    element: k,
    strategy: "absolute",
    placement: s
  }), y = is(Object.assign({}, k, E)), x = u === Jn ? y : $, C = {
    top: S.top - x.top + v.top,
    bottom: x.bottom - S.bottom + v.bottom,
    left: S.left - x.left + v.left,
    right: x.right - S.right + v.right
  }, W = e.modifiersData.offset;
  if (u === Jn && W) {
    var F = W[s];
    Object.keys(C).forEach(function(A) {
      var D = [qe, Ve].indexOf(A) >= 0 ? 1 : -1, O = [Se, Ve].indexOf(A) >= 0 ? "y" : "x";
      C[A] += F[O] * D;
    });
  }
  return C;
}
var gl = {
  placement: "bottom",
  modifiers: [],
  strategy: "absolute"
};
function yl() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return !t.some(function(r) {
    return !(r && typeof r.getBoundingClientRect == "function");
  });
}
function Vd(e) {
  e === void 0 && (e = {});
  var t = e, n = t.defaultModifiers, r = n === void 0 ? [] : n, s = t.defaultOptions, o = s === void 0 ? gl : s;
  return function(c, f, p) {
    p === void 0 && (p = o);
    var i = {
      placement: "bottom",
      orderedModifiers: [],
      options: Object.assign({}, gl, o),
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
          reference: pn(c) ? vr(c) : c.contextElement ? vr(c.contextElement) : [],
          popper: vr(f)
        };
        var k = Wd(Bd([].concat(r, i.options.modifiers)));
        return i.orderedModifiers = k.filter(function(b) {
          return b.enabled;
        }), _(), l.update();
      },
      forceUpdate: function() {
        if (!u) {
          var v = i.elements, m = v.reference, k = v.popper;
          if (!!yl(m, k)) {
            i.rects = {
              reference: $d(m, so(k), i.options.strategy === "fixed"),
              popper: Is(k)
            }, i.reset = !1, i.placement = i.options.placement, i.orderedModifiers.forEach(function(C) {
              return i.modifiersData[C.name] = Object.assign({}, C.data);
            });
            for (var b = 0; b < i.orderedModifiers.length; b++) {
              if (i.reset === !0) {
                i.reset = !1, b = -1;
                continue;
              }
              var S = i.orderedModifiers[b], $ = S.fn, E = S.options, y = E === void 0 ? {} : E, x = S.name;
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
      update: jd(function() {
        return new Promise(function(h) {
          l.forceUpdate(), h(i);
        });
      }),
      destroy: function() {
        g(), u = !0;
      }
    };
    if (!yl(c, f))
      return l;
    l.setOptions(p).then(function(h) {
      !u && p.onFirstUpdate && p.onFirstUpdate(h);
    });
    function _() {
      i.orderedModifiers.forEach(function(h) {
        var v = h.name, m = h.options, k = m === void 0 ? {} : m, b = h.effect;
        if (typeof b == "function") {
          var S = b({
            state: i,
            name: v,
            instance: l,
            options: k
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
var _o = {
  passive: !0
};
function qd(e) {
  var t = e.state, n = e.instance, r = e.options, s = r.scroll, o = s === void 0 ? !0 : s, a = r.resize, c = a === void 0 ? !0 : a, f = Le(t.elements.popper), p = [].concat(t.scrollParents.reference, t.scrollParents.popper);
  return o && p.forEach(function(i) {
    i.addEventListener("scroll", n.update, _o);
  }), c && f.addEventListener("resize", n.update, _o), function() {
    o && p.forEach(function(i) {
      i.removeEventListener("scroll", n.update, _o);
    }), c && f.removeEventListener("resize", n.update, _o);
  };
}
const Gd = {
  name: "eventListeners",
  enabled: !0,
  phase: "write",
  fn: function() {
  },
  effect: qd,
  data: {}
};
function Xd(e) {
  var t = e.state, n = e.name;
  t.modifiersData[n] = au({
    reference: t.rects.reference,
    element: t.rects.popper,
    strategy: "absolute",
    placement: t.placement
  });
}
const Kd = {
  name: "popperOffsets",
  enabled: !0,
  phase: "read",
  fn: Xd,
  data: {}
};
var Jd = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function Zd(e) {
  var t = e.x, n = e.y, r = window, s = r.devicePixelRatio || 1;
  return {
    x: Hn(t * s) / s || 0,
    y: Hn(n * s) / s || 0
  };
}
function bl(e) {
  var t, n = e.popper, r = e.popperRect, s = e.placement, o = e.variation, a = e.offsets, c = e.position, f = e.gpuAcceleration, p = e.adaptive, i = e.roundOffsets, d = e.isFixed, u = a.x, l = u === void 0 ? 0 : u, _ = a.y, g = _ === void 0 ? 0 : _, h = typeof i == "function" ? i({
    x: l,
    y: g
  }) : {
    x: l,
    y: g
  };
  l = h.x, g = h.y;
  var v = a.hasOwnProperty("x"), m = a.hasOwnProperty("y"), k = Ce, b = Se, S = window;
  if (p) {
    var $ = so(n), E = "clientHeight", y = "clientWidth";
    if ($ === Le(n) && ($ = Zt(n), yt($).position !== "static" && c === "absolute" && (E = "scrollHeight", y = "scrollWidth")), $ = $, s === Se || (s === Ce || s === qe) && o === Rr) {
      b = Ve;
      var x = d && $ === S && S.visualViewport ? S.visualViewport.height : $[E];
      g -= x - r.height, g *= f ? 1 : -1;
    }
    if (s === Ce || (s === Se || s === Ve) && o === Rr) {
      k = qe;
      var C = d && $ === S && S.visualViewport ? S.visualViewport.width : $[y];
      l -= C - r.width, l *= f ? 1 : -1;
    }
  }
  var W = Object.assign({
    position: c
  }, p && Jd), F = i === !0 ? Zd({
    x: l,
    y: g
  }) : {
    x: l,
    y: g
  };
  if (l = F.x, g = F.y, f) {
    var A;
    return Object.assign({}, W, (A = {}, A[b] = m ? "0" : "", A[k] = v ? "0" : "", A.transform = (S.devicePixelRatio || 1) <= 1 ? "translate(" + l + "px, " + g + "px)" : "translate3d(" + l + "px, " + g + "px, 0)", A));
  }
  return Object.assign({}, W, (t = {}, t[b] = m ? g + "px" : "", t[k] = v ? l + "px" : "", t.transform = "", t));
}
function Qd(e) {
  var t = e.state, n = e.options, r = n.gpuAcceleration, s = r === void 0 ? !0 : r, o = n.adaptive, a = o === void 0 ? !0 : o, c = n.roundOffsets, f = c === void 0 ? !0 : c, p = {
    placement: st(t.placement),
    variation: Bn(t.placement),
    popper: t.elements.popper,
    popperRect: t.rects.popper,
    gpuAcceleration: s,
    isFixed: t.options.strategy === "fixed"
  };
  t.modifiersData.popperOffsets != null && (t.styles.popper = Object.assign({}, t.styles.popper, bl(Object.assign({}, p, {
    offsets: t.modifiersData.popperOffsets,
    position: t.options.strategy,
    adaptive: a,
    roundOffsets: f
  })))), t.modifiersData.arrow != null && (t.styles.arrow = Object.assign({}, t.styles.arrow, bl(Object.assign({}, p, {
    offsets: t.modifiersData.arrow,
    position: "absolute",
    adaptive: !1,
    roundOffsets: f
  })))), t.attributes.popper = Object.assign({}, t.attributes.popper, {
    "data-popper-placement": t.placement
  });
}
const eh = {
  name: "computeStyles",
  enabled: !0,
  phase: "beforeWrite",
  fn: Qd,
  data: {}
};
function th(e) {
  var t = e.state;
  Object.keys(t.elements).forEach(function(n) {
    var r = t.styles[n] || {}, s = t.attributes[n] || {}, o = t.elements[n];
    !Te(o) || !lt(o) || (Object.assign(o.style, r), Object.keys(s).forEach(function(a) {
      var c = s[a];
      c === !1 ? o.removeAttribute(a) : o.setAttribute(a, c === !0 ? "" : c);
    }));
  });
}
function nh(e) {
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
      !Te(s) || !lt(s) || (Object.assign(s.style, c), Object.keys(o).forEach(function(f) {
        s.removeAttribute(f);
      }));
    });
  };
}
const rh = {
  name: "applyStyles",
  enabled: !0,
  phase: "write",
  fn: th,
  effect: nh,
  requires: ["computeStyles"]
};
var oh = [Gd, Kd, eh, rh], ih = /* @__PURE__ */ Vd({
  defaultModifiers: oh
});
function mr(e, t, n) {
  return fn(e, ni(t, n));
}
function sh(e, t, n) {
  var r = mr(e, t, n);
  return r > n ? n : r;
}
var ah = function(t, n) {
  return t = typeof t == "function" ? t(Object.assign({}, n.rects, {
    placement: n.placement
  })) : t, cu(typeof t != "number" ? t : fu(t, ao));
};
function lh(e) {
  var t, n = e.state, r = e.name, s = e.options, o = n.elements.arrow, a = n.modifiersData.popperOffsets, c = st(n.placement), f = Fs(c), p = [Ce, qe].indexOf(c) >= 0, i = p ? "height" : "width";
  if (!(!o || !a)) {
    var d = ah(s.padding, n), u = Is(o), l = f === "y" ? Se : Ce, _ = f === "y" ? Ve : qe, g = n.rects.reference[i] + n.rects.reference[f] - a[f] - n.rects.popper[i], h = a[f] - n.rects.reference[f], v = so(o), m = v ? f === "y" ? v.clientHeight || 0 : v.clientWidth || 0 : 0, k = g / 2 - h / 2, b = d[l], S = m - u[i] - d[_], $ = m / 2 - u[i] / 2 + k, E = mr(b, $, S), y = f;
    n.modifiersData[r] = (t = {}, t[y] = E, t.centerOffset = E - $, t);
  }
}
function ch(e) {
  var t = e.state, n = e.options, r = n.element, s = r === void 0 ? "[data-popper-arrow]" : r;
  s != null && (typeof s == "string" && (s = t.elements.popper.querySelector(s), !s) || !su(t.elements.popper, s) || (t.elements.arrow = s));
}
const fh = {
  name: "arrow",
  enabled: !0,
  phase: "main",
  fn: lh,
  effect: ch,
  requires: ["popperOffsets"],
  requiresIfExists: ["preventOverflow"]
};
function uh(e, t, n) {
  var r = st(e), s = [Ce, Se].indexOf(r) >= 0 ? -1 : 1, o = typeof n == "function" ? n(Object.assign({}, t, {
    placement: e
  })) : n, a = o[0], c = o[1];
  return a = a || 0, c = (c || 0) * s, [Ce, qe].indexOf(r) >= 0 ? {
    x: c,
    y: a
  } : {
    x: a,
    y: c
  };
}
function _h(e) {
  var t = e.state, n = e.options, r = e.name, s = n.offset, o = s === void 0 ? [0, 0] : s, a = iu.reduce(function(i, d) {
    return i[d] = uh(d, t.rects, o), i;
  }, {}), c = a[t.placement], f = c.x, p = c.y;
  t.modifiersData.popperOffsets != null && (t.modifiersData.popperOffsets.x += f, t.modifiersData.popperOffsets.y += p), t.modifiersData[r] = a;
}
const ph = {
  name: "offset",
  enabled: !0,
  phase: "main",
  requires: ["popperOffsets"],
  fn: _h
};
function dh(e) {
  return e === "x" ? "y" : "x";
}
function hh(e) {
  var t = e.state, n = e.options, r = e.name, s = n.mainAxis, o = s === void 0 ? !0 : s, a = n.altAxis, c = a === void 0 ? !1 : a, f = n.boundary, p = n.rootBoundary, i = n.altBoundary, d = n.padding, u = n.tether, l = u === void 0 ? !0 : u, _ = n.tetherOffset, g = _ === void 0 ? 0 : _, h = zs(t, {
    boundary: f,
    rootBoundary: p,
    padding: d,
    altBoundary: i
  }), v = st(t.placement), m = Bn(t.placement), k = !m, b = Fs(v), S = dh(b), $ = t.modifiersData.popperOffsets, E = t.rects.reference, y = t.rects.popper, x = typeof g == "function" ? g(Object.assign({}, t.rects, {
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
      var A, D = b === "y" ? Se : Ce, O = b === "y" ? Ve : qe, T = b === "y" ? "height" : "width", M = $[b], j = M + h[D], R = M - h[O], U = l ? -y[T] / 2 : 0, G = m === jn ? E[T] : y[T], z = m === jn ? -y[T] : -E[T], J = t.elements.arrow, Q = l && J ? Is(J) : {
        width: 0,
        height: 0
      }, P = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : lu(), Y = P[D], X = P[O], q = mr(0, E[T], Q[T]), Z = k ? E[T] / 2 - U - q - Y - C.mainAxis : G - q - Y - C.mainAxis, ae = k ? -E[T] / 2 + U + q + X + C.mainAxis : z + q + X + C.mainAxis, se = t.elements.arrow && so(t.elements.arrow), be = se ? b === "y" ? se.clientTop || 0 : se.clientLeft || 0 : 0, Je = (A = W == null ? void 0 : W[b]) != null ? A : 0, ee = M + Z - Je - be, $t = M + ae - Je, We = mr(l ? ni(j, ee) : j, M, l ? fn(R, $t) : R);
      $[b] = We, F[b] = We - M;
    }
    if (c) {
      var je, kt = b === "x" ? Se : Ce, Ze = b === "x" ? Ve : qe, te = $[S], me = S === "y" ? "height" : "width", Be = te + h[kt], xt = te - h[Ze], Ie = [Se, Ce].indexOf(v) !== -1, Et = (je = W == null ? void 0 : W[S]) != null ? je : 0, St = Ie ? Be : te - E[me] - y[me] - Et + C.altAxis, Ct = Ie ? te + E[me] + y[me] - Et - C.altAxis : xt, Ot = l && Ie ? sh(St, te, Ct) : mr(l ? St : Be, te, l ? Ct : xt);
      $[S] = Ot, F[S] = Ot - te;
    }
    t.modifiersData[r] = F;
  }
}
const vh = {
  name: "preventOverflow",
  enabled: !0,
  phase: "main",
  fn: hh,
  requiresIfExists: ["offset"]
};
var mh = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function So(e) {
  return e.replace(/left|right|bottom|top/g, function(t) {
    return mh[t];
  });
}
var gh = {
  start: "end",
  end: "start"
};
function wl(e) {
  return e.replace(/start|end/g, function(t) {
    return gh[t];
  });
}
function yh(e, t) {
  t === void 0 && (t = {});
  var n = t, r = n.placement, s = n.boundary, o = n.rootBoundary, a = n.padding, c = n.flipVariations, f = n.allowedAutoPlacements, p = f === void 0 ? iu : f, i = Bn(r), d = i ? c ? vl : vl.filter(function(_) {
    return Bn(_) === i;
  }) : ao, u = d.filter(function(_) {
    return p.indexOf(_) >= 0;
  });
  u.length === 0 && (u = d);
  var l = u.reduce(function(_, g) {
    return _[g] = zs(e, {
      placement: g,
      boundary: s,
      rootBoundary: o,
      padding: a
    })[st(g)], _;
  }, {});
  return Object.keys(l).sort(function(_, g) {
    return l[_] - l[g];
  });
}
function bh(e) {
  if (st(e) === Us)
    return [];
  var t = So(e);
  return [wl(e), t, wl(t)];
}
function wh(e) {
  var t = e.state, n = e.options, r = e.name;
  if (!t.modifiersData[r]._skip) {
    for (var s = n.mainAxis, o = s === void 0 ? !0 : s, a = n.altAxis, c = a === void 0 ? !0 : a, f = n.fallbackPlacements, p = n.padding, i = n.boundary, d = n.rootBoundary, u = n.altBoundary, l = n.flipVariations, _ = l === void 0 ? !0 : l, g = n.allowedAutoPlacements, h = t.options.placement, v = st(h), m = v === h, k = f || (m || !_ ? [So(h)] : bh(h)), b = [h].concat(k).reduce(function(Q, P) {
      return Q.concat(st(P) === Us ? yh(t, {
        placement: P,
        boundary: i,
        rootBoundary: d,
        padding: p,
        flipVariations: _,
        allowedAutoPlacements: g
      }) : P);
    }, []), S = t.rects.reference, $ = t.rects.popper, E = /* @__PURE__ */ new Map(), y = !0, x = b[0], C = 0; C < b.length; C++) {
      var W = b[C], F = st(W), A = Bn(W) === jn, D = [Se, Ve].indexOf(F) >= 0, O = D ? "width" : "height", T = zs(t, {
        placement: W,
        boundary: i,
        rootBoundary: d,
        altBoundary: u,
        padding: p
      }), M = D ? A ? qe : Ce : A ? Ve : Se;
      S[O] > $[O] && (M = So(M));
      var j = So(M), R = [];
      if (o && R.push(T[F] <= 0), c && R.push(T[M] <= 0, T[j] <= 0), R.every(function(Q) {
        return Q;
      })) {
        x = W, y = !1;
        break;
      }
      E.set(W, R);
    }
    if (y)
      for (var U = _ ? 3 : 1, G = function(P) {
        var Y = b.find(function(X) {
          var q = E.get(X);
          if (q)
            return q.slice(0, P).every(function(Z) {
              return Z;
            });
        });
        if (Y)
          return x = Y, "break";
      }, z = U; z > 0; z--) {
        var J = G(z);
        if (J === "break")
          break;
      }
    t.placement !== x && (t.modifiersData[r]._skip = !0, t.placement = x, t.reset = !0);
  }
}
const $h = {
  name: "flip",
  enabled: !0,
  phase: "main",
  fn: wh,
  requiresIfExists: ["offset"],
  data: {
    _skip: !1
  }
};
var $n, kn, rn, Ue, Kr, yi;
class ot extends cn {
  constructor() {
    super(...arguments);
    L(this, $n, void 0);
    L(this, kn, 0);
    L(this, rn, void 0);
    L(this, Ue, void 0);
    L(this, Kr, void 0);
    N(this, "hideLater", () => {
      w(this, yi).call(this), H(this, kn, window.setTimeout(this.hide.bind(this), 100));
    });
    L(this, yi, () => {
      clearTimeout(w(this, kn)), H(this, kn, 0);
    });
  }
  get isShown() {
    var n;
    return (n = w(this, rn)) == null ? void 0 : n.classList.contains(this.constructor.CLASS_SHOW);
  }
  get datetimepicker() {
    return w(this, rn) || this._ensureDatetimepicker();
  }
  get popper() {
    return w(this, Ue) ? w(this, Ue) : this._createPopper();
  }
  get trigger() {
    return w(this, Kr) || this.element;
  }
  get elementShowClass() {
    return `with-${this.constructor.NAME}-show`;
  }
  show(n) {
    var r;
    return H(this, Kr, n), this.element.classList.add(this.elementShowClass), (r = this.datetimepicker) == null || r.classList.add(this.constructor.CLASS_SHOW), this.datetimepicker.classList.add("fade"), this._createPopper().update(), !0;
  }
  hide() {
    var n, r;
    return (n = w(this, Ue)) == null || n.destroy(), H(this, Ue, void 0), this.element.classList.remove(this.elementShowClass), (r = w(this, rn)) == null || r.classList.remove(this.constructor.CLASS_SHOW), this.datetimepicker.classList.remove("fade"), !0;
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
    return r.classList.add(n), vd(B(gd, { ...this.options }), r), this.options.arrow && r.prepend(this._createArrow()), document.body.appendChild(r), H(this, rn, r), r;
  }
  _getPopperOptions() {
    const n = this._getArrowSize();
    return {
      modifiers: [
        vh,
        $h,
        { ...fh, options: {
          padding: n,
          element: ".arrow"
        } },
        {
          ...ph,
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
      placement: "bottom-start",
      strategy: "absolute"
    };
  }
  _createPopper() {
    const n = this._getPopperOptions();
    return w(this, Ue) ? w(this, Ue).setOptions(n) : H(this, Ue, ih(this._getPopperElement(), this.datetimepicker, n)), w(this, Ue);
  }
  _getPopperElement() {
    return w(this, $n) || H(this, $n, {
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
    }), w(this, $n);
  }
  static clear(n) {
    n instanceof Event && (n = { event: n });
    const { exclude: r } = n || {}, s = this.getAll().entries(), o = new Set(r || []);
    for (const [a, c] of s)
      o.has(a) || c.hide();
  }
}
$n = new WeakMap(), kn = new WeakMap(), rn = new WeakMap(), Ue = new WeakMap(), Kr = new WeakMap(), yi = new WeakMap(), N(ot, "NAME", "datetimepicker"), N(ot, "CLASSNAME", "datetimepicker"), N(ot, "CLASS_SHOW", "show"), N(ot, "MENU_SELECTOR", ".form-datetime:not(.disabled):not(:disabled)"), N(ot, "DEFAULT", {
  date: K().format("YYYY-MM-DD"),
  format: "YYYY-MM-DD",
  showOtherMonth: !0,
  minYear: 1911,
  placement: "bottom-start",
  strategy: "absolute",
  trigger: "click",
  arrow: !0
});
document.addEventListener("click", function(e) {
  const t = e.target, n = t.closest(ot.MENU_SELECTOR), r = t.closest(".calendar-bar, .calendar-table-head, .calendar-month-table");
  n ? ot.ensure(n).toggle() : r || ot.clear({ event: e });
});
const kh = (e) => {
  const t = document.getElementsByClassName("with-datetimepicker-show")[0];
  if (!t)
    return;
  const n = typeof t.closest == "function" ? t.closest(ot.MENU_SELECTOR) : null;
  !n || !e.target.contains(n) || ot.clear({ event: e });
};
window.addEventListener("scroll", kh, !0);
class uu extends mt {
  beforeRender() {
    const t = super.beforeRender();
    return t.className = I(t.className, t.type ? `nav-${t.type}` : "", {
      "nav-stacked": t.stacked
    }), t;
  }
}
N(uu, "NAME", "nav");
class $l extends Ke {
}
N($l, "NAME", "nav"), N($l, "Component", uu);
var _u, ss, pu, xh = [];
function Gt(e, t, n) {
  var r, s, o, a = {};
  for (o in t)
    o == "key" ? r = t[o] : o == "ref" ? s = t[o] : a[o] = t[o];
  if (arguments.length > 2 && (a.children = arguments.length > 3 ? _u.call(arguments, 2) : n), typeof e == "function" && e.defaultProps != null)
    for (o in e.defaultProps)
      a[o] === void 0 && (a[o] = e.defaultProps[o]);
  return Eh(e, a, r, s, null);
}
function Eh(e, t, n, r, s) {
  var o = { type: e, props: t, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: s == null ? ++pu : s };
  return s == null && ss.vnode != null && ss.vnode(o), o;
}
_u = xh.slice, ss = { __e: function(e, t, n, r) {
  for (var s, o, a; t = t.__; )
    if ((s = t.__c) && !s.__)
      try {
        if ((o = s.constructor) && o.getDerivedStateFromError != null && (s.setState(o.getDerivedStateFromError(e)), a = s.__d), s.componentDidCatch != null && (s.componentDidCatch(e, r || {}), a = s.__d), a)
          return s.__E = s;
      } catch (c) {
        e = c;
      }
  throw e;
} }, pu = 0;
var du, as, hu, Sh = [];
function Ii(e, t, n) {
  var r, s, o, a = {};
  for (o in t)
    o == "key" ? r = t[o] : o == "ref" ? s = t[o] : a[o] = t[o];
  if (arguments.length > 2 && (a.children = arguments.length > 3 ? du.call(arguments, 2) : n), typeof e == "function" && e.defaultProps != null)
    for (o in e.defaultProps)
      a[o] === void 0 && (a[o] = e.defaultProps[o]);
  return Ch(e, a, r, s, null);
}
function Ch(e, t, n, r, s) {
  var o = { type: e, props: t, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: s == null ? ++hu : s };
  return s == null && as.vnode != null && as.vnode(o), o;
}
du = Sh.slice, as = { __e: function(e, t, n, r) {
  for (var s, o, a; t = t.__; )
    if ((s = t.__c) && !s.__)
      try {
        if ((o = s.constructor) && o.getDerivedStateFromError != null && (s.setState(o.getDerivedStateFromError(e)), a = s.__d), s.componentDidCatch != null && (s.componentDidCatch(e, r || {}), a = s.__d), a)
          return s.__E = s;
      } catch (c) {
        e = c;
      }
  throw e;
} }, hu = 0;
function Oh({
  key: e,
  type: t,
  btnType: n,
  ...r
}) {
  return /* @__PURE__ */ Ii(Kt, {
    type: n,
    ...r
  });
}
var Ys, pe, vu, gr, kl, mu = {}, gu = [], Mh = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function Ft(e, t) {
  for (var n in t)
    e[n] = t[n];
  return e;
}
function yu(e) {
  var t = e.parentNode;
  t && t.removeChild(e);
}
function bu(e, t, n) {
  var r, s, o, a = {};
  for (o in t)
    o == "key" ? r = t[o] : o == "ref" ? s = t[o] : a[o] = t[o];
  if (arguments.length > 2 && (a.children = arguments.length > 3 ? Ys.call(arguments, 2) : n), typeof e == "function" && e.defaultProps != null)
    for (o in e.defaultProps)
      a[o] === void 0 && (a[o] = e.defaultProps[o]);
  return Co(e, a, r, s, null);
}
function Co(e, t, n, r, s) {
  var o = { type: e, props: t, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: s == null ? ++vu : s };
  return s == null && pe.vnode != null && pe.vnode(o), o;
}
function Ah() {
  return { current: null };
}
function Vs(e) {
  return e.children;
}
function yr(e, t) {
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
function wu(e) {
  var t, n;
  if ((e = e.__) != null && e.__c != null) {
    for (e.__e = e.__c.base = null, t = 0; t < e.__k.length; t++)
      if ((n = e.__k[t]) != null && n.__e != null) {
        e.__e = e.__c.base = n.__e;
        break;
      }
    return wu(e);
  }
}
function xl(e) {
  (!e.__d && (e.__d = !0) && gr.push(e) && !ri.__r++ || kl !== pe.debounceRendering) && ((kl = pe.debounceRendering) || setTimeout)(ri);
}
function ri() {
  for (var e; ri.__r = gr.length; )
    e = gr.sort(function(t, n) {
      return t.__v.__b - n.__v.__b;
    }), gr = [], e.some(function(t) {
      var n, r, s, o, a, c;
      t.__d && (a = (o = (n = t).__v).__e, (c = n.__P) && (r = [], (s = Ft({}, o)).__v = o.__v + 1, Eu(c, o, s, n.__n, c.ownerSVGElement !== void 0, o.__h != null ? [a] : null, r, a == null ? Hr(o) : a, o.__h), Th(r, o), o.__e != a && wu(o)));
    });
}
function $u(e, t, n, r, s, o, a, c, f, p) {
  var i, d, u, l, _, g, h, v = r && r.__k || gu, m = v.length;
  for (n.__k = [], i = 0; i < t.length; i++)
    if ((l = n.__k[i] = (l = t[i]) == null || typeof l == "boolean" ? null : typeof l == "string" || typeof l == "number" || typeof l == "bigint" ? Co(null, l, null, null, l) : Array.isArray(l) ? Co(Vs, { children: l }, null, null, null) : l.__b > 0 ? Co(l.type, l.props, l.key, l.ref ? l.ref : null, l.__v) : l) != null) {
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
      Eu(e, l, u = u || mu, s, o, a, c, f, p), _ = l.__e, (d = l.ref) && u.ref != d && (h || (h = []), u.ref && h.push(u.ref, null, l), h.push(d, l.__c || _, l)), _ != null ? (g == null && (g = _), typeof l.type == "function" && l.__k === u.__k ? l.__d = f = ku(l, f, e) : f = xu(e, l, u, v, _, f), typeof n.type == "function" && (n.__d = f)) : f && u.__e == f && f.parentNode != e && (f = Hr(u));
    }
  for (n.__e = g, i = m; i--; )
    v[i] != null && Cu(v[i], v[i]);
  if (h)
    for (i = 0; i < h.length; i++)
      Su(h[i], h[++i], h[++i]);
}
function ku(e, t, n) {
  for (var r, s = e.__k, o = 0; s && o < s.length; o++)
    (r = s[o]) && (r.__ = e, t = typeof r.type == "function" ? ku(r, t, n) : xu(n, r, r, s, r.__e, t));
  return t;
}
function xu(e, t, n, r, s, o) {
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
function Dh(e, t, n, r, s) {
  var o;
  for (o in n)
    o === "children" || o === "key" || o in t || oi(e, o, null, n[o], r);
  for (o in t)
    s && typeof t[o] != "function" || o === "children" || o === "key" || o === "value" || o === "checked" || n[o] === t[o] || oi(e, o, t[o], n[o], r);
}
function El(e, t, n) {
  t[0] === "-" ? e.setProperty(t, n) : e[t] = n == null ? "" : typeof n != "number" || Mh.test(t) ? n : n + "px";
}
function oi(e, t, n, r, s) {
  var o;
  e:
    if (t === "style")
      if (typeof n == "string")
        e.style.cssText = n;
      else {
        if (typeof r == "string" && (e.style.cssText = r = ""), r)
          for (t in r)
            n && t in n || El(e.style, t, "");
        if (n)
          for (t in n)
            r && n[t] === r[t] || El(e.style, t, n[t]);
      }
    else if (t[0] === "o" && t[1] === "n")
      o = t !== (t = t.replace(/Capture$/, "")), t = t.toLowerCase() in e ? t.toLowerCase().slice(2) : t.slice(2), e.l || (e.l = {}), e.l[t + o] = n, n ? r || e.addEventListener(t, o ? Cl : Sl, o) : e.removeEventListener(t, o ? Cl : Sl, o);
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
function Sl(e) {
  this.l[e.type + !1](pe.event ? pe.event(e) : e);
}
function Cl(e) {
  this.l[e.type + !0](pe.event ? pe.event(e) : e);
}
function Eu(e, t, n, r, s, o, a, c, f) {
  var p, i, d, u, l, _, g, h, v, m, k, b, S, $, E, y = t.type;
  if (t.constructor !== void 0)
    return null;
  n.__h != null && (f = n.__h, c = t.__e = n.__e, t.__h = null, o = [c]), (p = pe.__b) && p(t);
  try {
    e:
      if (typeof y == "function") {
        if (h = t.props, v = (p = y.contextType) && r[p.__c], m = p ? v ? v.props.value : p.__ : r, n.__c ? g = (i = t.__c = n.__c).__ = i.__E : ("prototype" in y && y.prototype.render ? t.__c = i = new y(h, m) : (t.__c = i = new yr(h, m), i.constructor = y, i.render = Ph), v && v.sub(i), i.props = h, i.state || (i.state = {}), i.context = m, i.__n = r, d = i.__d = !0, i.__h = [], i._sb = []), i.__s == null && (i.__s = i.state), y.getDerivedStateFromProps != null && (i.__s == i.state && (i.__s = Ft({}, i.__s)), Ft(i.__s, y.getDerivedStateFromProps(h, i.__s))), u = i.props, l = i.state, d)
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
        if (i.context = m, i.props = h, i.__v = t, i.__P = e, b = pe.__r, S = 0, "prototype" in y && y.prototype.render) {
          for (i.state = i.__s, i.__d = !1, b && b(t), p = i.render(i.props, i.state, i.context), $ = 0; $ < i._sb.length; $++)
            i.__h.push(i._sb[$]);
          i._sb = [];
        } else
          do
            i.__d = !1, b && b(t), p = i.render(i.props, i.state, i.context), i.state = i.__s;
          while (i.__d && ++S < 25);
        i.state = i.__s, i.getChildContext != null && (r = Ft(Ft({}, r), i.getChildContext())), d || i.getSnapshotBeforeUpdate == null || (_ = i.getSnapshotBeforeUpdate(u, l)), E = p != null && p.type === Vs && p.key == null ? p.props.children : p, $u(e, Array.isArray(E) ? E : [E], t, n, r, s, o, a, c, f), i.base = t.__e, t.__h = null, i.__h.length && a.push(i), g && (i.__E = i.__ = null), i.__e = !1;
      } else
        o == null && t.__v === n.__v ? (t.__k = n.__k, t.__e = n.__e) : t.__e = Nh(n.__e, t, n, r, s, o, a, f);
    (p = pe.diffed) && p(t);
  } catch (x) {
    t.__v = null, (f || o != null) && (t.__e = c, t.__h = !!f, o[o.indexOf(c)] = null), pe.__e(x, t, n);
  }
}
function Th(e, t) {
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
function Nh(e, t, n, r, s, o, a, c) {
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
    if (o = o && Ys.call(e.childNodes), p = (d = n.props || mu).dangerouslySetInnerHTML, i = u.dangerouslySetInnerHTML, !c) {
      if (o != null)
        for (d = {}, _ = 0; _ < e.attributes.length; _++)
          d[e.attributes[_].name] = e.attributes[_].value;
      (i || p) && (i && (p && i.__html == p.__html || i.__html === e.innerHTML) || (e.innerHTML = i && i.__html || ""));
    }
    if (Dh(e, u, d, s, c), i)
      t.__k = [];
    else if (_ = t.props.children, $u(e, Array.isArray(_) ? _ : [_], t, n, r, s && l !== "foreignObject", o, a, o ? o[0] : n.__k && Hr(n, 0), c), o != null)
      for (_ = o.length; _--; )
        o[_] != null && yu(o[_]);
    c || ("value" in u && (_ = u.value) !== void 0 && (_ !== e.value || l === "progress" && !_ || l === "option" && _ !== d.value) && oi(e, "value", _, d.value, !1), "checked" in u && (_ = u.checked) !== void 0 && _ !== e.checked && oi(e, "checked", _, d.checked, !1));
  }
  return e;
}
function Su(e, t, n) {
  try {
    typeof e == "function" ? e(t) : e.current = t;
  } catch (r) {
    pe.__e(r, n);
  }
}
function Cu(e, t, n) {
  var r, s;
  if (pe.unmount && pe.unmount(e), (r = e.ref) && (r.current && r.current !== e.__e || Su(r, null, t)), (r = e.__c) != null) {
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
      r[s] && Cu(r[s], t, n || typeof e.type != "function");
  n || e.__e == null || yu(e.__e), e.__ = e.__e = e.__d = void 0;
}
function Ph(e, t, n) {
  return this.constructor(e, n);
}
Ys = gu.slice, pe = { __e: function(e, t, n, r) {
  for (var s, o, a; t = t.__; )
    if ((s = t.__c) && !s.__)
      try {
        if ((o = s.constructor) && o.getDerivedStateFromError != null && (s.setState(o.getDerivedStateFromError(e)), a = s.__d), s.componentDidCatch != null && (s.componentDidCatch(e, r || {}), a = s.__d), a)
          return s.__E = s;
      } catch (c) {
        e = c;
      }
  throw e;
} }, vu = 0, yr.prototype.setState = function(e, t) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = Ft({}, this.state), typeof e == "function" && (e = e(Ft({}, n), this.props)), e && Ft(n, e), e != null && this.__v && (t && this._sb.push(t), xl(this));
}, yr.prototype.forceUpdate = function(e) {
  this.__v && (this.__e = !0, e && this.__h.push(e), xl(this));
}, yr.prototype.render = Vs, gr = [], ri.__r = 0;
var qs = "top", Ou = "bottom", ii = "right", Wr = "left", Lh = "auto", Mu = [qs, Ou, ii, Wr], Rh = "start", Hh = "end", Wh = /* @__PURE__ */ [].concat(Mu, [Lh]).reduce(function(e, t) {
  return e.concat([t, t + "-" + Rh, t + "-" + Hh]);
}, []);
function Au(e) {
  return e.split("-")[0];
}
function Xn(e) {
  if (e == null)
    return window;
  if (e.toString() !== "[object Window]") {
    var t = e.ownerDocument;
    return t && t.defaultView || window;
  }
  return e;
}
function Du(e) {
  var t = Xn(e).Element;
  return e instanceof t || e instanceof Element;
}
function si(e) {
  var t = Xn(e).HTMLElement;
  return e instanceof t || e instanceof HTMLElement;
}
function Gs(e) {
  if (typeof ShadowRoot > "u")
    return !1;
  var t = Xn(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot;
}
var jh = Math.max, Bh = Math.min, Ol = Math.round;
function ls() {
  var e = navigator.userAgentData;
  return e != null && e.brands ? e.brands.map(function(t) {
    return t.brand + "/" + t.version;
  }).join(" ") : navigator.userAgent;
}
function Ih() {
  return !/^((?!chrome|android).)*safari/i.test(ls());
}
function Uh(e, t, n) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  var r = e.getBoundingClientRect(), s = 1, o = 1;
  t && si(e) && (s = e.offsetWidth > 0 && Ol(r.width) / e.offsetWidth || 1, o = e.offsetHeight > 0 && Ol(r.height) / e.offsetHeight || 1);
  var a = Du(e) ? Xn(e) : window, c = a.visualViewport, f = !Ih() && n, p = (r.left + (f && c ? c.offsetLeft : 0)) / s, i = (r.top + (f && c ? c.offsetTop : 0)) / o, d = r.width / s, u = r.height / o;
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
function Fh(e) {
  var t = Uh(e), n = e.offsetWidth, r = e.offsetHeight;
  return Math.abs(t.width - n) <= 1 && (n = t.width), Math.abs(t.height - r) <= 1 && (r = t.height), {
    x: e.offsetLeft,
    y: e.offsetTop,
    width: n,
    height: r
  };
}
function zh(e, t) {
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
function jr(e) {
  return e ? (e.nodeName || "").toLowerCase() : null;
}
function Br(e) {
  return Xn(e).getComputedStyle(e);
}
function Yh(e) {
  return ["table", "td", "th"].indexOf(jr(e)) >= 0;
}
function Vh(e) {
  return ((Du(e) ? e.ownerDocument : e.document) || window.document).documentElement;
}
function qh(e) {
  return jr(e) === "html" ? e : e.assignedSlot || e.parentNode || (Gs(e) ? e.host : null) || Vh(e);
}
function Ml(e) {
  return !si(e) || Br(e).position === "fixed" ? null : e.offsetParent;
}
function Gh(e) {
  var t = /firefox/i.test(ls()), n = /Trident/i.test(ls());
  if (n && si(e)) {
    var r = Br(e);
    if (r.position === "fixed")
      return null;
  }
  var s = qh(e);
  for (Gs(s) && (s = s.host); si(s) && ["html", "body"].indexOf(jr(s)) < 0; ) {
    var o = Br(s);
    if (o.transform !== "none" || o.perspective !== "none" || o.contain === "paint" || ["transform", "perspective"].indexOf(o.willChange) !== -1 || t && o.willChange === "filter" || t && o.filter && o.filter !== "none")
      return s;
    s = s.parentNode;
  }
  return null;
}
function Xh(e) {
  for (var t = Xn(e), n = Ml(e); n && Yh(n) && Br(n).position === "static"; )
    n = Ml(n);
  return n && (jr(n) === "html" || jr(n) === "body" && Br(n).position === "static") ? t : n || Gh(e) || t;
}
function Kh(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function Jh(e, t, n) {
  return jh(e, Bh(t, n));
}
function Zh() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
function Qh(e) {
  return Object.assign({}, Zh(), e);
}
function ev(e, t) {
  return t.reduce(function(n, r) {
    return n[r] = e, n;
  }, {});
}
var tv = function(t, n) {
  return t = typeof t == "function" ? t(Object.assign({}, n.rects, {
    placement: n.placement
  })) : t, Qh(typeof t != "number" ? t : ev(t, Mu));
};
function nv(e) {
  var t, n = e.state, r = e.name, s = e.options, o = n.elements.arrow, a = n.modifiersData.popperOffsets, c = Au(n.placement), f = Kh(c), p = [Wr, ii].indexOf(c) >= 0, i = p ? "height" : "width";
  if (!(!o || !a)) {
    var d = tv(s.padding, n), u = Fh(o), l = f === "y" ? qs : Wr, _ = f === "y" ? Ou : ii, g = n.rects.reference[i] + n.rects.reference[f] - a[f] - n.rects.popper[i], h = a[f] - n.rects.reference[f], v = Xh(o), m = v ? f === "y" ? v.clientHeight || 0 : v.clientWidth || 0 : 0, k = g / 2 - h / 2, b = d[l], S = m - u[i] - d[_], $ = m / 2 - u[i] / 2 + k, E = Jh(b, $, S), y = f;
    n.modifiersData[r] = (t = {}, t[y] = E, t.centerOffset = E - $, t);
  }
}
function rv(e) {
  var t = e.state, n = e.options, r = n.element, s = r === void 0 ? "[data-popper-arrow]" : r;
  s != null && (typeof s == "string" && (s = t.elements.popper.querySelector(s), !s) || !zh(t.elements.popper, s) || (t.elements.arrow = s));
}
const ov = {
  name: "arrow",
  enabled: !0,
  phase: "main",
  fn: nv,
  effect: rv,
  requires: ["popperOffsets"],
  requiresIfExists: ["preventOverflow"]
};
function iv(e, t, n) {
  var r = Au(e), s = [Wr, qs].indexOf(r) >= 0 ? -1 : 1, o = typeof n == "function" ? n(Object.assign({}, t, {
    placement: e
  })) : n, a = o[0], c = o[1];
  return a = a || 0, c = (c || 0) * s, [Wr, ii].indexOf(r) >= 0 ? {
    x: c,
    y: a
  } : {
    x: a,
    y: c
  };
}
function sv(e) {
  var t = e.state, n = e.options, r = e.name, s = n.offset, o = s === void 0 ? [0, 0] : s, a = Wh.reduce(function(i, d) {
    return i[d] = iv(d, t.rects, o), i;
  }, {}), c = a[t.placement], f = c.x, p = c.y;
  t.modifiersData.popperOffsets != null && (t.modifiersData.popperOffsets.x += f, t.modifiersData.popperOffsets.y += p), t.modifiersData[r] = a;
}
const av = {
  name: "offset",
  enabled: !0,
  phase: "main",
  requires: ["popperOffsets"],
  fn: sv
};
var Ui, ie, Tu, br, Al, ai = {}, Nu = [], lv = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function zt(e, t) {
  for (var n in t)
    e[n] = t[n];
  return e;
}
function Pu(e) {
  var t = e.parentNode;
  t && t.removeChild(e);
}
function Xs(e, t, n) {
  var r, s, o, a = {};
  for (o in t)
    o == "key" ? r = t[o] : o == "ref" ? s = t[o] : a[o] = t[o];
  if (arguments.length > 2 && (a.children = arguments.length > 3 ? Ui.call(arguments, 2) : n), typeof e == "function" && e.defaultProps != null)
    for (o in e.defaultProps)
      a[o] === void 0 && (a[o] = e.defaultProps[o]);
  return Oo(e, a, r, s, null);
}
function Oo(e, t, n, r, s) {
  var o = { type: e, props: t, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: s == null ? ++Tu : s };
  return s == null && ie.vnode != null && ie.vnode(o), o;
}
function Fi(e) {
  return e.children;
}
function Mo(e, t) {
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
function Dl(e) {
  (!e.__d && (e.__d = !0) && br.push(e) && !li.__r++ || Al !== ie.debounceRendering) && ((Al = ie.debounceRendering) || setTimeout)(li);
}
function li() {
  for (var e; li.__r = br.length; )
    e = br.sort(function(t, n) {
      return t.__v.__b - n.__v.__b;
    }), br = [], e.some(function(t) {
      var n, r, s, o, a, c;
      t.__d && (a = (o = (n = t).__v).__e, (c = n.__P) && (r = [], (s = zt({}, o)).__v = o.__v + 1, Ks(c, o, s, n.__n, c.ownerSVGElement !== void 0, o.__h != null ? [a] : null, r, a == null ? Ir(o) : a, o.__h), ju(r, o), o.__e != a && Lu(o)));
    });
}
function Ru(e, t, n, r, s, o, a, c, f, p) {
  var i, d, u, l, _, g, h, v = r && r.__k || Nu, m = v.length;
  for (n.__k = [], i = 0; i < t.length; i++)
    if ((l = n.__k[i] = (l = t[i]) == null || typeof l == "boolean" ? null : typeof l == "string" || typeof l == "number" || typeof l == "bigint" ? Oo(null, l, null, null, l) : Array.isArray(l) ? Oo(Fi, { children: l }, null, null, null) : l.__b > 0 ? Oo(l.type, l.props, l.key, l.ref ? l.ref : null, l.__v) : l) != null) {
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
      Ks(e, l, u = u || ai, s, o, a, c, f, p), _ = l.__e, (d = l.ref) && u.ref != d && (h || (h = []), u.ref && h.push(u.ref, null, l), h.push(d, l.__c || _, l)), _ != null ? (g == null && (g = _), typeof l.type == "function" && l.__k === u.__k ? l.__d = f = Hu(l, f, e) : f = Wu(e, l, u, v, _, f), typeof n.type == "function" && (n.__d = f)) : f && u.__e == f && f.parentNode != e && (f = Ir(u));
    }
  for (n.__e = g, i = m; i--; )
    v[i] != null && Iu(v[i], v[i]);
  if (h)
    for (i = 0; i < h.length; i++)
      Bu(h[i], h[++i], h[++i]);
}
function Hu(e, t, n) {
  for (var r, s = e.__k, o = 0; s && o < s.length; o++)
    (r = s[o]) && (r.__ = e, t = typeof r.type == "function" ? Hu(r, t, n) : Wu(n, r, r, s, r.__e, t));
  return t;
}
function Wu(e, t, n, r, s, o) {
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
function cv(e, t, n, r, s) {
  var o;
  for (o in n)
    o === "children" || o === "key" || o in t || ci(e, o, null, n[o], r);
  for (o in t)
    s && typeof t[o] != "function" || o === "children" || o === "key" || o === "value" || o === "checked" || n[o] === t[o] || ci(e, o, t[o], n[o], r);
}
function Tl(e, t, n) {
  t[0] === "-" ? e.setProperty(t, n) : e[t] = n == null ? "" : typeof n != "number" || lv.test(t) ? n : n + "px";
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
            n && t in n || Tl(e.style, t, "");
        if (n)
          for (t in n)
            r && n[t] === r[t] || Tl(e.style, t, n[t]);
      }
    else if (t[0] === "o" && t[1] === "n")
      o = t !== (t = t.replace(/Capture$/, "")), t = t.toLowerCase() in e ? t.toLowerCase().slice(2) : t.slice(2), e.l || (e.l = {}), e.l[t + o] = n, n ? r || e.addEventListener(t, o ? Pl : Nl, o) : e.removeEventListener(t, o ? Pl : Nl, o);
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
function Nl(e) {
  this.l[e.type + !1](ie.event ? ie.event(e) : e);
}
function Pl(e) {
  this.l[e.type + !0](ie.event ? ie.event(e) : e);
}
function Ks(e, t, n, r, s, o, a, c, f) {
  var p, i, d, u, l, _, g, h, v, m, k, b, S, $, E, y = t.type;
  if (t.constructor !== void 0)
    return null;
  n.__h != null && (f = n.__h, c = t.__e = n.__e, t.__h = null, o = [c]), (p = ie.__b) && p(t);
  try {
    e:
      if (typeof y == "function") {
        if (h = t.props, v = (p = y.contextType) && r[p.__c], m = p ? v ? v.props.value : p.__ : r, n.__c ? g = (i = t.__c = n.__c).__ = i.__E : ("prototype" in y && y.prototype.render ? t.__c = i = new y(h, m) : (t.__c = i = new Mo(h, m), i.constructor = y, i.render = uv), v && v.sub(i), i.props = h, i.state || (i.state = {}), i.context = m, i.__n = r, d = i.__d = !0, i.__h = [], i._sb = []), i.__s == null && (i.__s = i.state), y.getDerivedStateFromProps != null && (i.__s == i.state && (i.__s = zt({}, i.__s)), zt(i.__s, y.getDerivedStateFromProps(h, i.__s))), u = i.props, l = i.state, d)
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
        if (i.context = m, i.props = h, i.__v = t, i.__P = e, b = ie.__r, S = 0, "prototype" in y && y.prototype.render) {
          for (i.state = i.__s, i.__d = !1, b && b(t), p = i.render(i.props, i.state, i.context), $ = 0; $ < i._sb.length; $++)
            i.__h.push(i._sb[$]);
          i._sb = [];
        } else
          do
            i.__d = !1, b && b(t), p = i.render(i.props, i.state, i.context), i.state = i.__s;
          while (i.__d && ++S < 25);
        i.state = i.__s, i.getChildContext != null && (r = zt(zt({}, r), i.getChildContext())), d || i.getSnapshotBeforeUpdate == null || (_ = i.getSnapshotBeforeUpdate(u, l)), E = p != null && p.type === Fi && p.key == null ? p.props.children : p, Ru(e, Array.isArray(E) ? E : [E], t, n, r, s, o, a, c, f), i.base = t.__e, t.__h = null, i.__h.length && a.push(i), g && (i.__E = i.__ = null), i.__e = !1;
      } else
        o == null && t.__v === n.__v ? (t.__k = n.__k, t.__e = n.__e) : t.__e = fv(n.__e, t, n, r, s, o, a, f);
    (p = ie.diffed) && p(t);
  } catch (x) {
    t.__v = null, (f || o != null) && (t.__e = c, t.__h = !!f, o[o.indexOf(c)] = null), ie.__e(x, t, n);
  }
}
function ju(e, t) {
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
function fv(e, t, n, r, s, o, a, c) {
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
    if (o = o && Ui.call(e.childNodes), p = (d = n.props || ai).dangerouslySetInnerHTML, i = u.dangerouslySetInnerHTML, !c) {
      if (o != null)
        for (d = {}, _ = 0; _ < e.attributes.length; _++)
          d[e.attributes[_].name] = e.attributes[_].value;
      (i || p) && (i && (p && i.__html == p.__html || i.__html === e.innerHTML) || (e.innerHTML = i && i.__html || ""));
    }
    if (cv(e, u, d, s, c), i)
      t.__k = [];
    else if (_ = t.props.children, Ru(e, Array.isArray(_) ? _ : [_], t, n, r, s && l !== "foreignObject", o, a, o ? o[0] : n.__k && Ir(n, 0), c), o != null)
      for (_ = o.length; _--; )
        o[_] != null && Pu(o[_]);
    c || ("value" in u && (_ = u.value) !== void 0 && (_ !== e.value || l === "progress" && !_ || l === "option" && _ !== d.value) && ci(e, "value", _, d.value, !1), "checked" in u && (_ = u.checked) !== void 0 && _ !== e.checked && ci(e, "checked", _, d.checked, !1));
  }
  return e;
}
function Bu(e, t, n) {
  try {
    typeof e == "function" ? e(t) : e.current = t;
  } catch (r) {
    ie.__e(r, n);
  }
}
function Iu(e, t, n) {
  var r, s;
  if (ie.unmount && ie.unmount(e), (r = e.ref) && (r.current && r.current !== e.__e || Bu(r, null, t)), (r = e.__c) != null) {
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
      r[s] && Iu(r[s], t, n || typeof e.type != "function");
  n || e.__e == null || Pu(e.__e), e.__ = e.__e = e.__d = void 0;
}
function uv(e, t, n) {
  return this.constructor(e, n);
}
function _v(e, t, n) {
  var r, s, o;
  ie.__ && ie.__(e, t), s = (r = typeof n == "function") ? null : n && n.__k || t.__k, o = [], Ks(t, e = (!r && n || t).__k = Xs(Fi, null, [e]), s || ai, ai, t.ownerSVGElement !== void 0, !r && n ? [n] : s ? null : t.firstChild ? Ui.call(t.childNodes) : null, o, !r && n ? n : s ? s.__e : t.firstChild, r), ju(o, e);
}
Ui = Nu.slice, ie = { __e: function(e, t, n, r) {
  for (var s, o, a; t = t.__; )
    if ((s = t.__c) && !s.__)
      try {
        if ((o = s.constructor) && o.getDerivedStateFromError != null && (s.setState(o.getDerivedStateFromError(e)), a = s.__d), s.componentDidCatch != null && (s.componentDidCatch(e, r || {}), a = s.__d), a)
          return s.__E = s;
      } catch (c) {
        e = c;
      }
  throw e;
} }, Tu = 0, Mo.prototype.setState = function(e, t) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = zt({}, this.state), typeof e == "function" && (e = e(zt({}, n), this.props)), e && zt(n, e), e != null && this.__v && (t && this._sb.push(t), Dl(this));
}, Mo.prototype.forceUpdate = function(e) {
  this.__v && (this.__e = !0, e && this.__h.push(e), Dl(this));
}, Mo.prototype.render = Fi, br = [], li.__r = 0;
function Re(e) {
  if (e == null)
    return window;
  if (e.toString() !== "[object Window]") {
    var t = e.ownerDocument;
    return t && t.defaultView || window;
  }
  return e;
}
function dn(e) {
  var t = Re(e).Element;
  return e instanceof t || e instanceof Element;
}
function Ne(e) {
  var t = Re(e).HTMLElement;
  return e instanceof t || e instanceof HTMLElement;
}
function Js(e) {
  if (typeof ShadowRoot > "u")
    return !1;
  var t = Re(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot;
}
var un = Math.max, fi = Math.min, In = Math.round;
function cs() {
  var e = navigator.userAgentData;
  return e != null && e.brands ? e.brands.map(function(t) {
    return t.brand + "/" + t.version;
  }).join(" ") : navigator.userAgent;
}
function Uu() {
  return !/^((?!chrome|android).)*safari/i.test(cs());
}
function Un(e, t, n) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  var r = e.getBoundingClientRect(), s = 1, o = 1;
  t && Ne(e) && (s = e.offsetWidth > 0 && In(r.width) / e.offsetWidth || 1, o = e.offsetHeight > 0 && In(r.height) / e.offsetHeight || 1);
  var a = dn(e) ? Re(e) : window, c = a.visualViewport, f = !Uu() && n, p = (r.left + (f && c ? c.offsetLeft : 0)) / s, i = (r.top + (f && c ? c.offsetTop : 0)) / o, d = r.width / s, u = r.height / o;
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
function Zs(e) {
  var t = Re(e), n = t.pageXOffset, r = t.pageYOffset;
  return {
    scrollLeft: n,
    scrollTop: r
  };
}
function pv(e) {
  return {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  };
}
function dv(e) {
  return e === Re(e) || !Ne(e) ? Zs(e) : pv(e);
}
function ct(e) {
  return e ? (e.nodeName || "").toLowerCase() : null;
}
function Qt(e) {
  return ((dn(e) ? e.ownerDocument : e.document) || window.document).documentElement;
}
function Qs(e) {
  return Un(Qt(e)).left + Zs(e).scrollLeft;
}
function bt(e) {
  return Re(e).getComputedStyle(e);
}
function ea(e) {
  var t = bt(e), n = t.overflow, r = t.overflowX, s = t.overflowY;
  return /auto|scroll|overlay|hidden/.test(n + s + r);
}
function hv(e) {
  var t = e.getBoundingClientRect(), n = In(t.width) / e.offsetWidth || 1, r = In(t.height) / e.offsetHeight || 1;
  return n !== 1 || r !== 1;
}
function vv(e, t, n) {
  n === void 0 && (n = !1);
  var r = Ne(t), s = Ne(t) && hv(t), o = Qt(t), a = Un(e, s, n), c = {
    scrollLeft: 0,
    scrollTop: 0
  }, f = {
    x: 0,
    y: 0
  };
  return (r || !r && !n) && ((ct(t) !== "body" || ea(o)) && (c = dv(t)), Ne(t) ? (f = Un(t, !0), f.x += t.clientLeft, f.y += t.clientTop) : o && (f.x = Qs(o))), {
    x: a.left + c.scrollLeft - f.x,
    y: a.top + c.scrollTop - f.y,
    width: a.width,
    height: a.height
  };
}
function Fu(e) {
  var t = Un(e), n = e.offsetWidth, r = e.offsetHeight;
  return Math.abs(t.width - n) <= 1 && (n = t.width), Math.abs(t.height - r) <= 1 && (r = t.height), {
    x: e.offsetLeft,
    y: e.offsetTop,
    width: n,
    height: r
  };
}
function zi(e) {
  return ct(e) === "html" ? e : e.assignedSlot || e.parentNode || (Js(e) ? e.host : null) || Qt(e);
}
function zu(e) {
  return ["html", "body", "#document"].indexOf(ct(e)) >= 0 ? e.ownerDocument.body : Ne(e) && ea(e) ? e : zu(zi(e));
}
function wr(e, t) {
  var n;
  t === void 0 && (t = []);
  var r = zu(e), s = r === ((n = e.ownerDocument) == null ? void 0 : n.body), o = Re(r), a = s ? [o].concat(o.visualViewport || [], ea(r) ? r : []) : r, c = t.concat(a);
  return s ? c : c.concat(wr(zi(a)));
}
function mv(e) {
  return ["table", "td", "th"].indexOf(ct(e)) >= 0;
}
function Ll(e) {
  return !Ne(e) || bt(e).position === "fixed" ? null : e.offsetParent;
}
function gv(e) {
  var t = /firefox/i.test(cs()), n = /Trident/i.test(cs());
  if (n && Ne(e)) {
    var r = bt(e);
    if (r.position === "fixed")
      return null;
  }
  var s = zi(e);
  for (Js(s) && (s = s.host); Ne(s) && ["html", "body"].indexOf(ct(s)) < 0; ) {
    var o = bt(s);
    if (o.transform !== "none" || o.perspective !== "none" || o.contain === "paint" || ["transform", "perspective"].indexOf(o.willChange) !== -1 || t && o.willChange === "filter" || t && o.filter && o.filter !== "none")
      return s;
    s = s.parentNode;
  }
  return null;
}
function Yi(e) {
  for (var t = Re(e), n = Ll(e); n && mv(n) && bt(n).position === "static"; )
    n = Ll(n);
  return n && (ct(n) === "html" || ct(n) === "body" && bt(n).position === "static") ? t : n || gv(e) || t;
}
var Ye = "top", ft = "bottom", Jt = "right", gt = "left", ta = "auto", Vi = [Ye, ft, Jt, gt], Fn = "start", Ur = "end", yv = "clippingParents", Yu = "viewport", Zn = "popper", bv = "reference", Rl = /* @__PURE__ */ Vi.reduce(function(e, t) {
  return e.concat([t + "-" + Fn, t + "-" + Ur]);
}, []), wv = /* @__PURE__ */ [].concat(Vi, [ta]).reduce(function(e, t) {
  return e.concat([t, t + "-" + Fn, t + "-" + Ur]);
}, []), $v = "beforeRead", kv = "read", xv = "afterRead", Ev = "beforeMain", Sv = "main", Cv = "afterMain", Ov = "beforeWrite", Mv = "write", Av = "afterWrite", Dv = [$v, kv, xv, Ev, Sv, Cv, Ov, Mv, Av];
function Tv(e) {
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
function Nv(e) {
  var t = Tv(e);
  return Dv.reduce(function(n, r) {
    return n.concat(t.filter(function(s) {
      return s.phase === r;
    }));
  }, []);
}
function Pv(e) {
  var t;
  return function() {
    return t || (t = new Promise(function(n) {
      Promise.resolve().then(function() {
        t = void 0, n(e());
      });
    })), t;
  };
}
function Xt(e) {
  return e.split("-")[0];
}
function Lv(e) {
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
function Rv(e, t) {
  var n = Re(e), r = Qt(e), s = n.visualViewport, o = r.clientWidth, a = r.clientHeight, c = 0, f = 0;
  if (s) {
    o = s.width, a = s.height;
    var p = Uu();
    (p || !p && t === "fixed") && (c = s.offsetLeft, f = s.offsetTop);
  }
  return {
    width: o,
    height: a,
    x: c + Qs(e),
    y: f
  };
}
function Hv(e) {
  var t, n = Qt(e), r = Zs(e), s = (t = e.ownerDocument) == null ? void 0 : t.body, o = un(n.scrollWidth, n.clientWidth, s ? s.scrollWidth : 0, s ? s.clientWidth : 0), a = un(n.scrollHeight, n.clientHeight, s ? s.scrollHeight : 0, s ? s.clientHeight : 0), c = -r.scrollLeft + Qs(e), f = -r.scrollTop;
  return bt(s || n).direction === "rtl" && (c += un(n.clientWidth, s ? s.clientWidth : 0) - o), {
    width: o,
    height: a,
    x: c,
    y: f
  };
}
function Wv(e, t) {
  var n = t.getRootNode && t.getRootNode();
  if (e.contains(t))
    return !0;
  if (n && Js(n)) {
    var r = t;
    do {
      if (r && e.isSameNode(r))
        return !0;
      r = r.parentNode || r.host;
    } while (r);
  }
  return !1;
}
function fs(e) {
  return Object.assign({}, e, {
    left: e.x,
    top: e.y,
    right: e.x + e.width,
    bottom: e.y + e.height
  });
}
function jv(e, t) {
  var n = Un(e, !1, t === "fixed");
  return n.top = n.top + e.clientTop, n.left = n.left + e.clientLeft, n.bottom = n.top + e.clientHeight, n.right = n.left + e.clientWidth, n.width = e.clientWidth, n.height = e.clientHeight, n.x = n.left, n.y = n.top, n;
}
function Hl(e, t, n) {
  return t === Yu ? fs(Rv(e, n)) : dn(t) ? jv(t, n) : fs(Hv(Qt(e)));
}
function Bv(e) {
  var t = wr(zi(e)), n = ["absolute", "fixed"].indexOf(bt(e).position) >= 0, r = n && Ne(e) ? Yi(e) : e;
  return dn(r) ? t.filter(function(s) {
    return dn(s) && Wv(s, r) && ct(s) !== "body";
  }) : [];
}
function Iv(e, t, n, r) {
  var s = t === "clippingParents" ? Bv(e) : [].concat(t), o = [].concat(s, [n]), a = o[0], c = o.reduce(function(f, p) {
    var i = Hl(e, p, r);
    return f.top = un(i.top, f.top), f.right = fi(i.right, f.right), f.bottom = fi(i.bottom, f.bottom), f.left = un(i.left, f.left), f;
  }, Hl(e, a, r));
  return c.width = c.right - c.left, c.height = c.bottom - c.top, c.x = c.left, c.y = c.top, c;
}
function zn(e) {
  return e.split("-")[1];
}
function Vu(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function qu(e) {
  var t = e.reference, n = e.element, r = e.placement, s = r ? Xt(r) : null, o = r ? zn(r) : null, a = t.x + t.width / 2 - n.width / 2, c = t.y + t.height / 2 - n.height / 2, f;
  switch (s) {
    case Ye:
      f = {
        x: a,
        y: t.y - n.height
      };
      break;
    case ft:
      f = {
        x: a,
        y: t.y + t.height
      };
      break;
    case Jt:
      f = {
        x: t.x + t.width,
        y: c
      };
      break;
    case gt:
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
  var p = s ? Vu(s) : null;
  if (p != null) {
    var i = p === "y" ? "height" : "width";
    switch (o) {
      case Fn:
        f[p] = f[p] - (t[i] / 2 - n[i] / 2);
        break;
      case Ur:
        f[p] = f[p] + (t[i] / 2 - n[i] / 2);
        break;
    }
  }
  return f;
}
function Gu() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
function Uv(e) {
  return Object.assign({}, Gu(), e);
}
function Fv(e, t) {
  return t.reduce(function(n, r) {
    return n[r] = e, n;
  }, {});
}
function na(e, t) {
  t === void 0 && (t = {});
  var n = t, r = n.placement, s = r === void 0 ? e.placement : r, o = n.strategy, a = o === void 0 ? e.strategy : o, c = n.boundary, f = c === void 0 ? yv : c, p = n.rootBoundary, i = p === void 0 ? Yu : p, d = n.elementContext, u = d === void 0 ? Zn : d, l = n.altBoundary, _ = l === void 0 ? !1 : l, g = n.padding, h = g === void 0 ? 0 : g, v = Uv(typeof h != "number" ? h : Fv(h, Vi)), m = u === Zn ? bv : Zn, k = e.rects.popper, b = e.elements[_ ? m : u], S = Iv(dn(b) ? b : b.contextElement || Qt(e.elements.popper), f, i, a), $ = Un(e.elements.reference), E = qu({
    reference: $,
    element: k,
    strategy: "absolute",
    placement: s
  }), y = fs(Object.assign({}, k, E)), x = u === Zn ? y : $, C = {
    top: S.top - x.top + v.top,
    bottom: x.bottom - S.bottom + v.bottom,
    left: S.left - x.left + v.left,
    right: x.right - S.right + v.right
  }, W = e.modifiersData.offset;
  if (u === Zn && W) {
    var F = W[s];
    Object.keys(C).forEach(function(A) {
      var D = [Jt, ft].indexOf(A) >= 0 ? 1 : -1, O = [Ye, ft].indexOf(A) >= 0 ? "y" : "x";
      C[A] += F[O] * D;
    });
  }
  return C;
}
var Wl = {
  placement: "bottom",
  modifiers: [],
  strategy: "absolute"
};
function jl() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return !t.some(function(r) {
    return !(r && typeof r.getBoundingClientRect == "function");
  });
}
function zv(e) {
  e === void 0 && (e = {});
  var t = e, n = t.defaultModifiers, r = n === void 0 ? [] : n, s = t.defaultOptions, o = s === void 0 ? Wl : s;
  return function(c, f, p) {
    p === void 0 && (p = o);
    var i = {
      placement: "bottom",
      orderedModifiers: [],
      options: Object.assign({}, Wl, o),
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
          reference: dn(c) ? wr(c) : c.contextElement ? wr(c.contextElement) : [],
          popper: wr(f)
        };
        var k = Nv(Lv([].concat(r, i.options.modifiers)));
        return i.orderedModifiers = k.filter(function(b) {
          return b.enabled;
        }), _(), l.update();
      },
      forceUpdate: function() {
        if (!u) {
          var v = i.elements, m = v.reference, k = v.popper;
          if (!!jl(m, k)) {
            i.rects = {
              reference: vv(m, Yi(k), i.options.strategy === "fixed"),
              popper: Fu(k)
            }, i.reset = !1, i.placement = i.options.placement, i.orderedModifiers.forEach(function(C) {
              return i.modifiersData[C.name] = Object.assign({}, C.data);
            });
            for (var b = 0; b < i.orderedModifiers.length; b++) {
              if (i.reset === !0) {
                i.reset = !1, b = -1;
                continue;
              }
              var S = i.orderedModifiers[b], $ = S.fn, E = S.options, y = E === void 0 ? {} : E, x = S.name;
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
      update: Pv(function() {
        return new Promise(function(h) {
          l.forceUpdate(), h(i);
        });
      }),
      destroy: function() {
        g(), u = !0;
      }
    };
    if (!jl(c, f))
      return l;
    l.setOptions(p).then(function(h) {
      !u && p.onFirstUpdate && p.onFirstUpdate(h);
    });
    function _() {
      i.orderedModifiers.forEach(function(h) {
        var v = h.name, m = h.options, k = m === void 0 ? {} : m, b = h.effect;
        if (typeof b == "function") {
          var S = b({
            state: i,
            name: v,
            instance: l,
            options: k
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
var po = {
  passive: !0
};
function Yv(e) {
  var t = e.state, n = e.instance, r = e.options, s = r.scroll, o = s === void 0 ? !0 : s, a = r.resize, c = a === void 0 ? !0 : a, f = Re(t.elements.popper), p = [].concat(t.scrollParents.reference, t.scrollParents.popper);
  return o && p.forEach(function(i) {
    i.addEventListener("scroll", n.update, po);
  }), c && f.addEventListener("resize", n.update, po), function() {
    o && p.forEach(function(i) {
      i.removeEventListener("scroll", n.update, po);
    }), c && f.removeEventListener("resize", n.update, po);
  };
}
const Vv = {
  name: "eventListeners",
  enabled: !0,
  phase: "write",
  fn: function() {
  },
  effect: Yv,
  data: {}
};
function qv(e) {
  var t = e.state, n = e.name;
  t.modifiersData[n] = qu({
    reference: t.rects.reference,
    element: t.rects.popper,
    strategy: "absolute",
    placement: t.placement
  });
}
const Gv = {
  name: "popperOffsets",
  enabled: !0,
  phase: "read",
  fn: qv,
  data: {}
};
var Xv = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function Kv(e) {
  var t = e.x, n = e.y, r = window, s = r.devicePixelRatio || 1;
  return {
    x: In(t * s) / s || 0,
    y: In(n * s) / s || 0
  };
}
function Bl(e) {
  var t, n = e.popper, r = e.popperRect, s = e.placement, o = e.variation, a = e.offsets, c = e.position, f = e.gpuAcceleration, p = e.adaptive, i = e.roundOffsets, d = e.isFixed, u = a.x, l = u === void 0 ? 0 : u, _ = a.y, g = _ === void 0 ? 0 : _, h = typeof i == "function" ? i({
    x: l,
    y: g
  }) : {
    x: l,
    y: g
  };
  l = h.x, g = h.y;
  var v = a.hasOwnProperty("x"), m = a.hasOwnProperty("y"), k = gt, b = Ye, S = window;
  if (p) {
    var $ = Yi(n), E = "clientHeight", y = "clientWidth";
    if ($ === Re(n) && ($ = Qt(n), bt($).position !== "static" && c === "absolute" && (E = "scrollHeight", y = "scrollWidth")), $ = $, s === Ye || (s === gt || s === Jt) && o === Ur) {
      b = ft;
      var x = d && $ === S && S.visualViewport ? S.visualViewport.height : $[E];
      g -= x - r.height, g *= f ? 1 : -1;
    }
    if (s === gt || (s === Ye || s === ft) && o === Ur) {
      k = Jt;
      var C = d && $ === S && S.visualViewport ? S.visualViewport.width : $[y];
      l -= C - r.width, l *= f ? 1 : -1;
    }
  }
  var W = Object.assign({
    position: c
  }, p && Xv), F = i === !0 ? Kv({
    x: l,
    y: g
  }) : {
    x: l,
    y: g
  };
  if (l = F.x, g = F.y, f) {
    var A;
    return Object.assign({}, W, (A = {}, A[b] = m ? "0" : "", A[k] = v ? "0" : "", A.transform = (S.devicePixelRatio || 1) <= 1 ? "translate(" + l + "px, " + g + "px)" : "translate3d(" + l + "px, " + g + "px, 0)", A));
  }
  return Object.assign({}, W, (t = {}, t[b] = m ? g + "px" : "", t[k] = v ? l + "px" : "", t.transform = "", t));
}
function Jv(e) {
  var t = e.state, n = e.options, r = n.gpuAcceleration, s = r === void 0 ? !0 : r, o = n.adaptive, a = o === void 0 ? !0 : o, c = n.roundOffsets, f = c === void 0 ? !0 : c, p = {
    placement: Xt(t.placement),
    variation: zn(t.placement),
    popper: t.elements.popper,
    popperRect: t.rects.popper,
    gpuAcceleration: s,
    isFixed: t.options.strategy === "fixed"
  };
  t.modifiersData.popperOffsets != null && (t.styles.popper = Object.assign({}, t.styles.popper, Bl(Object.assign({}, p, {
    offsets: t.modifiersData.popperOffsets,
    position: t.options.strategy,
    adaptive: a,
    roundOffsets: f
  })))), t.modifiersData.arrow != null && (t.styles.arrow = Object.assign({}, t.styles.arrow, Bl(Object.assign({}, p, {
    offsets: t.modifiersData.arrow,
    position: "absolute",
    adaptive: !1,
    roundOffsets: f
  })))), t.attributes.popper = Object.assign({}, t.attributes.popper, {
    "data-popper-placement": t.placement
  });
}
const Zv = {
  name: "computeStyles",
  enabled: !0,
  phase: "beforeWrite",
  fn: Jv,
  data: {}
};
function Qv(e) {
  var t = e.state;
  Object.keys(t.elements).forEach(function(n) {
    var r = t.styles[n] || {}, s = t.attributes[n] || {}, o = t.elements[n];
    !Ne(o) || !ct(o) || (Object.assign(o.style, r), Object.keys(s).forEach(function(a) {
      var c = s[a];
      c === !1 ? o.removeAttribute(a) : o.setAttribute(a, c === !0 ? "" : c);
    }));
  });
}
function em(e) {
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
      !Ne(s) || !ct(s) || (Object.assign(s.style, c), Object.keys(o).forEach(function(f) {
        s.removeAttribute(f);
      }));
    });
  };
}
const tm = {
  name: "applyStyles",
  enabled: !0,
  phase: "write",
  fn: Qv,
  effect: em,
  requires: ["computeStyles"]
};
var nm = [Vv, Gv, Zv, tm], Xu = /* @__PURE__ */ zv({
  defaultModifiers: nm
});
function rm(e) {
  return e === "x" ? "y" : "x";
}
function Ao(e, t, n) {
  return un(e, fi(t, n));
}
function om(e, t, n) {
  var r = Ao(e, t, n);
  return r > n ? n : r;
}
function im(e) {
  var t = e.state, n = e.options, r = e.name, s = n.mainAxis, o = s === void 0 ? !0 : s, a = n.altAxis, c = a === void 0 ? !1 : a, f = n.boundary, p = n.rootBoundary, i = n.altBoundary, d = n.padding, u = n.tether, l = u === void 0 ? !0 : u, _ = n.tetherOffset, g = _ === void 0 ? 0 : _, h = na(t, {
    boundary: f,
    rootBoundary: p,
    padding: d,
    altBoundary: i
  }), v = Xt(t.placement), m = zn(t.placement), k = !m, b = Vu(v), S = rm(b), $ = t.modifiersData.popperOffsets, E = t.rects.reference, y = t.rects.popper, x = typeof g == "function" ? g(Object.assign({}, t.rects, {
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
      var A, D = b === "y" ? Ye : gt, O = b === "y" ? ft : Jt, T = b === "y" ? "height" : "width", M = $[b], j = M + h[D], R = M - h[O], U = l ? -y[T] / 2 : 0, G = m === Fn ? E[T] : y[T], z = m === Fn ? -y[T] : -E[T], J = t.elements.arrow, Q = l && J ? Fu(J) : {
        width: 0,
        height: 0
      }, P = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : Gu(), Y = P[D], X = P[O], q = Ao(0, E[T], Q[T]), Z = k ? E[T] / 2 - U - q - Y - C.mainAxis : G - q - Y - C.mainAxis, ae = k ? -E[T] / 2 + U + q + X + C.mainAxis : z + q + X + C.mainAxis, se = t.elements.arrow && Yi(t.elements.arrow), be = se ? b === "y" ? se.clientTop || 0 : se.clientLeft || 0 : 0, Je = (A = W == null ? void 0 : W[b]) != null ? A : 0, ee = M + Z - Je - be, $t = M + ae - Je, We = Ao(l ? fi(j, ee) : j, M, l ? un(R, $t) : R);
      $[b] = We, F[b] = We - M;
    }
    if (c) {
      var je, kt = b === "x" ? Ye : gt, Ze = b === "x" ? ft : Jt, te = $[S], me = S === "y" ? "height" : "width", Be = te + h[kt], xt = te - h[Ze], Ie = [Ye, gt].indexOf(v) !== -1, Et = (je = W == null ? void 0 : W[S]) != null ? je : 0, St = Ie ? Be : te - E[me] - y[me] - Et + C.altAxis, Ct = Ie ? te + E[me] + y[me] - Et - C.altAxis : xt, Ot = l && Ie ? om(St, te, Ct) : Ao(l ? St : Be, te, l ? Ct : xt);
      $[S] = Ot, F[S] = Ot - te;
    }
    t.modifiersData[r] = F;
  }
}
const us = {
  name: "preventOverflow",
  enabled: !0,
  phase: "main",
  fn: im,
  requiresIfExists: ["offset"]
};
var sm = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function Do(e) {
  return e.replace(/left|right|bottom|top/g, function(t) {
    return sm[t];
  });
}
var am = {
  start: "end",
  end: "start"
};
function Il(e) {
  return e.replace(/start|end/g, function(t) {
    return am[t];
  });
}
function lm(e, t) {
  t === void 0 && (t = {});
  var n = t, r = n.placement, s = n.boundary, o = n.rootBoundary, a = n.padding, c = n.flipVariations, f = n.allowedAutoPlacements, p = f === void 0 ? wv : f, i = zn(r), d = i ? c ? Rl : Rl.filter(function(_) {
    return zn(_) === i;
  }) : Vi, u = d.filter(function(_) {
    return p.indexOf(_) >= 0;
  });
  u.length === 0 && (u = d);
  var l = u.reduce(function(_, g) {
    return _[g] = na(e, {
      placement: g,
      boundary: s,
      rootBoundary: o,
      padding: a
    })[Xt(g)], _;
  }, {});
  return Object.keys(l).sort(function(_, g) {
    return l[_] - l[g];
  });
}
function cm(e) {
  if (Xt(e) === ta)
    return [];
  var t = Do(e);
  return [Il(e), t, Il(t)];
}
function fm(e) {
  var t = e.state, n = e.options, r = e.name;
  if (!t.modifiersData[r]._skip) {
    for (var s = n.mainAxis, o = s === void 0 ? !0 : s, a = n.altAxis, c = a === void 0 ? !0 : a, f = n.fallbackPlacements, p = n.padding, i = n.boundary, d = n.rootBoundary, u = n.altBoundary, l = n.flipVariations, _ = l === void 0 ? !0 : l, g = n.allowedAutoPlacements, h = t.options.placement, v = Xt(h), m = v === h, k = f || (m || !_ ? [Do(h)] : cm(h)), b = [h].concat(k).reduce(function(Q, P) {
      return Q.concat(Xt(P) === ta ? lm(t, {
        placement: P,
        boundary: i,
        rootBoundary: d,
        padding: p,
        flipVariations: _,
        allowedAutoPlacements: g
      }) : P);
    }, []), S = t.rects.reference, $ = t.rects.popper, E = /* @__PURE__ */ new Map(), y = !0, x = b[0], C = 0; C < b.length; C++) {
      var W = b[C], F = Xt(W), A = zn(W) === Fn, D = [Ye, ft].indexOf(F) >= 0, O = D ? "width" : "height", T = na(t, {
        placement: W,
        boundary: i,
        rootBoundary: d,
        altBoundary: u,
        padding: p
      }), M = D ? A ? Jt : gt : A ? ft : Ye;
      S[O] > $[O] && (M = Do(M));
      var j = Do(M), R = [];
      if (o && R.push(T[F] <= 0), c && R.push(T[M] <= 0, T[j] <= 0), R.every(function(Q) {
        return Q;
      })) {
        x = W, y = !1;
        break;
      }
      E.set(W, R);
    }
    if (y)
      for (var U = _ ? 3 : 1, G = function(P) {
        var Y = b.find(function(X) {
          var q = E.get(X);
          if (q)
            return q.slice(0, P).every(function(Z) {
              return Z;
            });
        });
        if (Y)
          return x = Y, "break";
      }, z = U; z > 0; z--) {
        var J = G(z);
        if (J === "break")
          break;
      }
    t.placement !== x && (t.modifiersData[r]._skip = !0, t.placement = x, t.reset = !0);
  }
}
const Ku = {
  name: "flip",
  enabled: !0,
  phase: "main",
  fn: fm,
  requiresIfExists: ["offset"],
  data: {
    _skip: !1
  }
};
function um(e) {
  return e.button === 2;
}
var Dt;
class _m extends Cs {
  constructor() {
    super(...arguments);
    L(this, Dt, void 0);
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
    super.componentWillUnmount(), (n = w(this, Dt)) == null || n.destroy();
  }
  _getPopperOptions() {
    return {
      modifiers: [us, Ku],
      placement: "right-start"
    };
  }
  _getPopperElement() {
    var n;
    return (n = this.ref.current) == null ? void 0 : n.parentElement;
  }
  _createPopper() {
    const n = this._getPopperOptions();
    return w(this, Dt) ? w(this, Dt).setOptions(n) : this.ref.current && H(this, Dt, Xu(this._getPopperElement(), this.ref.current, n)), w(this, Dt);
  }
  afterRender(n) {
    super.afterRender(n), this.props.controlledMenu && this._createPopper();
  }
  renderToggleIcon() {
    return /* @__PURE__ */ Xs("span", {
      class: "contextmenu-toggle-icon caret-right"
    });
  }
}
Dt = new WeakMap();
var Tt, De, xn, Jr;
class xe extends cn {
  constructor() {
    super(...arguments);
    L(this, Tt, void 0);
    L(this, De, void 0);
    L(this, xn, void 0);
    L(this, Jr, void 0);
  }
  get isShown() {
    var n;
    return (n = w(this, Tt)) == null ? void 0 : n.classList.contains(this.constructor.CLASS_SHOW);
  }
  get menu() {
    return w(this, Tt) || this._ensureMenu();
  }
  get popper() {
    return w(this, De) ? w(this, De) : this._createPopper();
  }
  get trigger() {
    return w(this, Jr) || this.element;
  }
  get isDynamic() {
    return this.options.items || this.options.menu;
  }
  init() {
    const { element: n } = this;
    n !== document.body && !n.hasAttribute("data-toggle") && n.setAttribute("data-toggle", "contextmenu");
  }
  show(n) {
    return H(this, Jr, n), this.emit("show", { menu: this, trigger: this.trigger }).defaultPrevented || this.isDynamic && !this._renderMenu() ? !1 : (this.menu.classList.add(this.constructor.CLASS_SHOW), this._createPopper().update(), this.emit("shown", this), !0);
  }
  hide() {
    var r, s;
    return this.emit("hide", this).defaultPrevented ? !1 : ((r = w(this, De)) == null || r.destroy(), H(this, De, void 0), (s = w(this, Tt)) == null || s.classList.remove(this.constructor.CLASS_SHOW), this.emit("hidden", this), !0);
  }
  toggle(n) {
    return this.isShown ? this.hide() : this.show(n);
  }
  destroy() {
    var n, r;
    (n = w(this, De)) == null || n.destroy(), super.destroy(), (r = w(this, Tt)) == null || r.remove();
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
    return H(this, Tt, s), s;
  }
  _getPopperOptions() {
    const { flip: n, preventOverflow: r, modifiers: s = [] } = this.options;
    return {
      modifiers: [
        r ? typeof r == "object" ? { ...us, options: r } : us : null,
        n ? Ku : null,
        ...s
      ].filter(Boolean),
      placement: this.options.placement,
      strategy: this.options.strategy
    };
  }
  _createPopper() {
    const n = this._getPopperOptions();
    return w(this, De) ? w(this, De).setOptions(n) : H(this, De, Xu(this._getPopperElement(), this.menu, n)), w(this, De);
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
    return !n || this.emit("updateMenu", { menu: n, trigger: this.trigger, contextmenu: this }).defaultPrevented ? !1 : (_v(Xs(_m, n), this.menu), !0);
  }
  _getPopperElement() {
    return w(this, xn) || H(this, xn, {
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
    }), w(this, xn);
  }
  static clear(n) {
    var f, p;
    n instanceof Event && (n = { event: n });
    const { event: r, exclude: s, ignoreSelector: o = ".not-hide-menu" } = n || {};
    if (r && o && ((p = (f = r.target).closest) == null ? void 0 : p.call(f, o)) || r && um(r))
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
Tt = new WeakMap(), De = new WeakMap(), xn = new WeakMap(), Jr = new WeakMap(), N(xe, "NAME", "contextmenu"), N(xe, "EVENTS", !0), N(xe, "DEFAULT", {
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
var En, Sn, Cn, bi, Ju;
const va = class extends xe {
  constructor() {
    super(...arguments);
    L(this, bi);
    L(this, En, !1);
    L(this, Sn, 0);
    N(this, "hideLater", () => {
      w(this, Cn).call(this), H(this, Sn, window.setTimeout(this.hide.bind(this), 100));
    });
    L(this, Cn, () => {
      clearTimeout(w(this, Sn)), H(this, Sn, 0);
    });
  }
  get isHover() {
    return this.options.trigger === "hover";
  }
  get elementShowClass() {
    return `with-${this.constructor.NAME}-show`;
  }
  show(n, r) {
    (r == null ? void 0 : r.clearOthers) !== !1 && va.clear({ event: r == null ? void 0 : r.event, exclude: [this.element] });
    const s = super.show(n);
    return s && (!w(this, En) && this.isHover && ve(this, bi, Ju).call(this), this.element.classList.add(this.elementShowClass)), s;
  }
  hide() {
    const n = super.hide();
    return n && this.element.classList.remove(this.elementShowClass), n;
  }
  toggle(n, r) {
    return this.isShown ? this.hide() : this.show(n, { event: n, ...r });
  }
  destroy() {
    w(this, En) && (this.element.removeEventListener("mouseleave", this.hideLater), this.menu.removeEventListener("mouseenter", w(this, Cn)), this.menu.removeEventListener("mouseleave", this.hideLater)), super.destroy();
  }
  _getArrowSize() {
    const { arrow: n } = this.options;
    return n ? typeof n == "number" ? n : 5 : 0;
  }
  _getPopperOptions() {
    var s;
    const n = super._getPopperOptions(), r = this._getArrowSize();
    return r && n.modifiers.push({ ...ov, options: {
      padding: r,
      element: ".arrow"
    } }, {
      ...av,
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
let we = va;
En = new WeakMap(), Sn = new WeakMap(), Cn = new WeakMap(), bi = new WeakSet(), Ju = function() {
  const { menu: n } = this;
  n.addEventListener("mouseenter", w(this, Cn)), n.addEventListener("mouseleave", this.hideLater), this.element.addEventListener("mouseleave", this.hideLater), H(this, En, !0);
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
const pm = (e) => {
  const t = document.getElementsByClassName("with-dropdown-show")[0];
  if (!t)
    return;
  const n = typeof t.closest == "function" ? t.closest(we.MENU_SELECTOR) : null;
  !n || !e.target.contains(n) || we.clear({ event: e });
};
window.addEventListener("scroll", pm, !0);
var Zr, On;
class dm extends yr {
  constructor(n) {
    var r;
    super(n);
    L(this, Zr, void 0);
    L(this, On, Ah());
    this.state = { placement: ((r = n.dropdown) == null ? void 0 : r.placement) || "", show: !1 };
  }
  get ref() {
    return w(this, On);
  }
  get triggerElement() {
    return w(this, On).current;
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
    }), H(this, Zr, we.ensure(this.triggerElement, {
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
    (n = w(this, Zr)) == null || n.destroy();
  }
  beforeRender() {
    const { className: n, children: r, dropdown: s, ...o } = this.props;
    return {
      className: I("dropdown", n),
      children: typeof r == "function" ? r(this.state) : r,
      ...o,
      "data-toggle": "dropdown",
      "data-dropdown-placement": this.state.placement,
      ref: w(this, On)
    };
  }
  render() {
    const { children: n, ...r } = this.beforeRender();
    return /* @__PURE__ */ bu("div", {
      ...r
    }, n);
  }
}
Zr = new WeakMap(), On = new WeakMap();
class hm extends dm {
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
    return r.caret = s, /* @__PURE__ */ bu(Kt, {
      ...r
    });
  }
}
function Zu({
  key: e,
  type: t,
  btnType: n,
  ...r
}) {
  return /* @__PURE__ */ Ii(hm, {
    type: n,
    ...r
  });
}
function vm({
  key: e,
  type: t,
  btnType: n,
  ...r
}) {
  return /* @__PURE__ */ Ii(Ds, {
    type: n,
    ...r
  });
}
class tn extends mt {
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
    return /* @__PURE__ */ Ii(t, {
      ...o
    });
  }
}
N(tn, "ItemComponents", {
  item: Oh,
  dropdown: Zu,
  "btn-group": vm
}), N(tn, "ROOT_TAG", "nav"), N(tn, "NAME", "toolbar"), N(tn, "defaultProps", {
  btnProps: {
    btnType: "ghost"
  }
});
function Fr(e, t) {
  const n = e.pageTotal || Math.ceil(e.recTotal / e.recPerPage);
  return typeof t == "string" && (t === "first" ? t = 1 : t === "last" ? t = n : t === "prev" ? t = e.page - 1 : t === "next" ? t = e.page + 1 : t === "current" ? t = e.page : t = Number.parseInt(t, 10)), t = t !== void 0 ? Math.max(1, Math.min(t < 0 ? n + t : t, n)) : e.page, {
    ...e,
    pageTotal: n,
    page: t
  };
}
function mm({
  key: e,
  type: t,
  btnType: n,
  page: r,
  format: s,
  pagerInfo: o,
  linkCreator: a,
  ...c
}) {
  const f = Fr(o, r);
  return c.text === void 0 && !c.icon && s && (c.text = typeof s == "function" ? s(f) : Ee(s, f)), c.url === void 0 && a && (c.url = typeof a == "function" ? a(f) : Ee(a, f)), c.disabled === void 0 && (c.disabled = r !== void 0 && f.page === o.page), /* @__PURE__ */ Gt(Kt, {
    type: n,
    ...c
  });
}
const _t = 24 * 60 * 60 * 1e3, Ae = (e) => e ? (e instanceof Date || (typeof e == "string" && (e = e.trim(), /^\d+$/.test(e) && (e = Number.parseInt(e, 10))), typeof e == "number" && e < 1e10 && (e *= 1e3), e = new Date(e)), e) : new Date(), lo = (e, t = new Date()) => (e = Ae(e), t = Ae(t), e.getFullYear() === t.getFullYear() && e.getMonth() === t.getMonth() && e.getDate() === t.getDate()), Ul = (e, t = new Date()) => Ae(e).getFullYear() === Ae(t).getFullYear(), gm = (e, t = new Date()) => (e = Ae(e), t = Ae(t), e.getFullYear() === t.getFullYear() && e.getMonth() === t.getMonth()), cy = (e, t = new Date()) => {
  e = Ae(e), t = Ae(t);
  const n = 1e3 * 60 * 60 * 24, r = Math.floor(e.getTime() / n), s = Math.floor(t.getTime() / n);
  return Math.floor((r + 4) / 7) === Math.floor((s + 4) / 7);
}, fy = (e, t) => lo(Ae(t), e), uy = (e, t) => lo(Ae(t).getTime() - _t, e), _y = (e, t) => lo(Ae(t).getTime() + _t, e), py = (e, t) => lo(Ae(t).getTime() - 2 * _t, e), _s = (e, t = "yyyy-MM-dd hh:mm") => {
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
}, dy = (e, t, n) => {
  const r = {
    full: "yyyy-M-d",
    month: "M-d",
    day: "d",
    str: "{0} ~ {1}",
    ...n
  }, s = _s(e, Ul(e) ? r.month : r.full);
  if (lo(e, t))
    return s;
  const o = _s(t, Ul(e, t) ? gm(e, t) ? r.day : r.month : r.full);
  return r.str.replace("{0}", s).replace("{1}", o);
}, hy = (e) => {
  const t = new Date().getTime();
  switch (e) {
    case "oneWeek":
      return t - _t * 7;
    case "oneMonth":
      return t - _t * 31;
    case "threeMonth":
      return t - _t * 31 * 3;
    case "halfYear":
      return t - _t * 183;
    case "oneYear":
      return t - _t * 365;
    case "twoYear":
      return t - 2 * (_t * 365);
    default:
      return 0;
  }
}, Fl = (e, t, n = !0, r = Date.now()) => {
  switch (t) {
    case "year":
      return e *= 365, Fl(e, "day", n, r);
    case "quarter":
      e *= 3;
    case "month":
      return e *= 30, Fl(e, "day", n, r);
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
function ym({
  key: e,
  type: t,
  page: n,
  text: r = "",
  pagerInfo: s,
  children: o,
  ...a
}) {
  const c = Fr(s, n);
  return r = typeof r == "function" ? r(c) : Ee(r, c), /* @__PURE__ */ Gt(Bc, {
    ...a
  }, o, r);
}
function bm({
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
  const f = { ...c }, p = (l) => {
    if (!(l != null && l.target))
      return;
    l.target.closest(".pager").querySelectorAll(".pager-nav").forEach((g) => {
      g.classList.remove("active");
    }), l.target.classList.add("active"), o == null || o.call(l.target, l);
  }, i = () => (f.text = "", f.icon = "icon-ellipsis-h", f.disabled = !0, /* @__PURE__ */ Gt(Kt, {
    type: n,
    ...f
  })), d = (l, _) => {
    const g = [];
    for (let h = l; h <= _; h++) {
      f.text = h, delete f.icon, f.disabled = !1;
      const v = Fr(s, h);
      a && (f.url = typeof a == "function" ? a(v) : Ee(a, v)), g.push(/* @__PURE__ */ Gt(Kt, {
        type: n,
        ...f,
        onClick: p
      }));
    }
    return g;
  };
  let u = [];
  return u = [...d(1, 1)], s.pageTotal <= 1 || (s.pageTotal <= r ? u = [...u, ...d(2, s.pageTotal)] : s.page < r - 2 ? u = [...u, ...d(2, r - 2), i(), ...d(s.pageTotal, s.pageTotal)] : s.page > s.pageTotal - r + 3 ? u = [...u, i(), ...d(s.pageTotal - r + 3, s.pageTotal)] : u = [...u, i(), ...d(s.page - Math.ceil((r - 4) / 2), s.page + Math.floor((r - 4) / 2)), i(), ...d(s.pageTotal, s.pageTotal)]), u;
}
function wm({
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
  return o.text = typeof a == "function" ? a(t) : Ee(a, t), s.menu = { ...s.menu, className: I((f = s.menu) == null ? void 0 : f.className, "pager-size-menu") }, /* @__PURE__ */ Gt(Zu, {
    type: "dropdown",
    dropdown: s,
    ...o
  });
}
function $m({
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
    const h = Fr(s, d);
    c && !c({ info: h, event: g }) || (g.target.href = i.url = typeof f == "function" ? f(h) : Ee(f, h));
  }, _ = Fr(s, t || 0);
  return i.url = typeof f == "function" ? f(_) : Ee(f, _), i.className = I("input-group-addon", i.className), /* @__PURE__ */ Gt("div", {
    className: I("input-group", "pager-goto-group", o ? `size-${o}` : "")
  }, /* @__PURE__ */ Gt("input", {
    type: "number",
    class: "form-control",
    max: s.pageTotal,
    min: "1",
    onInput: u
  }), /* @__PURE__ */ Gt(Kt, {
    type: r,
    ...i,
    onClick: l
  }));
}
class To extends tn {
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
N(To, "NAME", "pager"), N(To, "defaultProps", {
  gap: 1,
  btnProps: {
    btnType: "ghost",
    size: "sm"
  }
}), N(To, "ItemComponents", {
  ...tn.ItemComponents,
  link: mm,
  info: ym,
  nav: bm,
  "size-menu": wm,
  goto: $m
});
class zl extends Ke {
}
N(zl, "NAME", "pager"), N(zl, "Component", To);
class Yl extends Ke {
}
N(Yl, "NAME", "toolbar"), N(Yl, "Component", tn);
function He(e) {
  if (e == null)
    return window;
  if (e.toString() !== "[object Window]") {
    var t = e.ownerDocument;
    return t && t.defaultView || window;
  }
  return e;
}
function hn(e) {
  var t = He(e).Element;
  return e instanceof t || e instanceof Element;
}
function Pe(e) {
  var t = He(e).HTMLElement;
  return e instanceof t || e instanceof HTMLElement;
}
function ra(e) {
  if (typeof ShadowRoot > "u")
    return !1;
  var t = He(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot;
}
var _n = Math.max, ui = Math.min, Yn = Math.round;
function ps() {
  var e = navigator.userAgentData;
  return e != null && e.brands ? e.brands.map(function(t) {
    return t.brand + "/" + t.version;
  }).join(" ") : navigator.userAgent;
}
function Qu() {
  return !/^((?!chrome|android).)*safari/i.test(ps());
}
function Vn(e, t, n) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  var r = e.getBoundingClientRect(), s = 1, o = 1;
  t && Pe(e) && (s = e.offsetWidth > 0 && Yn(r.width) / e.offsetWidth || 1, o = e.offsetHeight > 0 && Yn(r.height) / e.offsetHeight || 1);
  var a = hn(e) ? He(e) : window, c = a.visualViewport, f = !Qu() && n, p = (r.left + (f && c ? c.offsetLeft : 0)) / s, i = (r.top + (f && c ? c.offsetTop : 0)) / o, d = r.width / s, u = r.height / o;
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
function oa(e) {
  var t = He(e), n = t.pageXOffset, r = t.pageYOffset;
  return {
    scrollLeft: n,
    scrollTop: r
  };
}
function km(e) {
  return {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  };
}
function xm(e) {
  return e === He(e) || !Pe(e) ? oa(e) : km(e);
}
function ut(e) {
  return e ? (e.nodeName || "").toLowerCase() : null;
}
function en(e) {
  return ((hn(e) ? e.ownerDocument : e.document) || window.document).documentElement;
}
function ia(e) {
  return Vn(en(e)).left + oa(e).scrollLeft;
}
function wt(e) {
  return He(e).getComputedStyle(e);
}
function sa(e) {
  var t = wt(e), n = t.overflow, r = t.overflowX, s = t.overflowY;
  return /auto|scroll|overlay|hidden/.test(n + s + r);
}
function Em(e) {
  var t = e.getBoundingClientRect(), n = Yn(t.width) / e.offsetWidth || 1, r = Yn(t.height) / e.offsetHeight || 1;
  return n !== 1 || r !== 1;
}
function Sm(e, t, n) {
  n === void 0 && (n = !1);
  var r = Pe(t), s = Pe(t) && Em(t), o = en(t), a = Vn(e, s, n), c = {
    scrollLeft: 0,
    scrollTop: 0
  }, f = {
    x: 0,
    y: 0
  };
  return (r || !r && !n) && ((ut(t) !== "body" || sa(o)) && (c = xm(t)), Pe(t) ? (f = Vn(t, !0), f.x += t.clientLeft, f.y += t.clientTop) : o && (f.x = ia(o))), {
    x: a.left + c.scrollLeft - f.x,
    y: a.top + c.scrollTop - f.y,
    width: a.width,
    height: a.height
  };
}
function aa(e) {
  var t = Vn(e), n = e.offsetWidth, r = e.offsetHeight;
  return Math.abs(t.width - n) <= 1 && (n = t.width), Math.abs(t.height - r) <= 1 && (r = t.height), {
    x: e.offsetLeft,
    y: e.offsetTop,
    width: n,
    height: r
  };
}
function qi(e) {
  return ut(e) === "html" ? e : e.assignedSlot || e.parentNode || (ra(e) ? e.host : null) || en(e);
}
function e_(e) {
  return ["html", "body", "#document"].indexOf(ut(e)) >= 0 ? e.ownerDocument.body : Pe(e) && sa(e) ? e : e_(qi(e));
}
function $r(e, t) {
  var n;
  t === void 0 && (t = []);
  var r = e_(e), s = r === ((n = e.ownerDocument) == null ? void 0 : n.body), o = He(r), a = s ? [o].concat(o.visualViewport || [], sa(r) ? r : []) : r, c = t.concat(a);
  return s ? c : c.concat($r(qi(a)));
}
function Cm(e) {
  return ["table", "td", "th"].indexOf(ut(e)) >= 0;
}
function Vl(e) {
  return !Pe(e) || wt(e).position === "fixed" ? null : e.offsetParent;
}
function Om(e) {
  var t = /firefox/i.test(ps()), n = /Trident/i.test(ps());
  if (n && Pe(e)) {
    var r = wt(e);
    if (r.position === "fixed")
      return null;
  }
  var s = qi(e);
  for (ra(s) && (s = s.host); Pe(s) && ["html", "body"].indexOf(ut(s)) < 0; ) {
    var o = wt(s);
    if (o.transform !== "none" || o.perspective !== "none" || o.contain === "paint" || ["transform", "perspective"].indexOf(o.willChange) !== -1 || t && o.willChange === "filter" || t && o.filter && o.filter !== "none")
      return s;
    s = s.parentNode;
  }
  return null;
}
function co(e) {
  for (var t = He(e), n = Vl(e); n && Cm(n) && wt(n).position === "static"; )
    n = Vl(n);
  return n && (ut(n) === "html" || ut(n) === "body" && wt(n).position === "static") ? t : n || Om(e) || t;
}
var Oe = "top", Ge = "bottom", Xe = "right", Me = "left", la = "auto", fo = [Oe, Ge, Xe, Me], qn = "start", zr = "end", Mm = "clippingParents", t_ = "viewport", Qn = "popper", Am = "reference", ql = /* @__PURE__ */ fo.reduce(function(e, t) {
  return e.concat([t + "-" + qn, t + "-" + zr]);
}, []), n_ = /* @__PURE__ */ [].concat(fo, [la]).reduce(function(e, t) {
  return e.concat([t, t + "-" + qn, t + "-" + zr]);
}, []), Dm = "beforeRead", Tm = "read", Nm = "afterRead", Pm = "beforeMain", Lm = "main", Rm = "afterMain", Hm = "beforeWrite", Wm = "write", jm = "afterWrite", Bm = [Dm, Tm, Nm, Pm, Lm, Rm, Hm, Wm, jm];
function Im(e) {
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
function Um(e) {
  var t = Im(e);
  return Bm.reduce(function(n, r) {
    return n.concat(t.filter(function(s) {
      return s.phase === r;
    }));
  }, []);
}
function Fm(e) {
  var t;
  return function() {
    return t || (t = new Promise(function(n) {
      Promise.resolve().then(function() {
        t = void 0, n(e());
      });
    })), t;
  };
}
function at(e) {
  return e.split("-")[0];
}
function zm(e) {
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
function Ym(e, t) {
  var n = He(e), r = en(e), s = n.visualViewport, o = r.clientWidth, a = r.clientHeight, c = 0, f = 0;
  if (s) {
    o = s.width, a = s.height;
    var p = Qu();
    (p || !p && t === "fixed") && (c = s.offsetLeft, f = s.offsetTop);
  }
  return {
    width: o,
    height: a,
    x: c + ia(e),
    y: f
  };
}
function Vm(e) {
  var t, n = en(e), r = oa(e), s = (t = e.ownerDocument) == null ? void 0 : t.body, o = _n(n.scrollWidth, n.clientWidth, s ? s.scrollWidth : 0, s ? s.clientWidth : 0), a = _n(n.scrollHeight, n.clientHeight, s ? s.scrollHeight : 0, s ? s.clientHeight : 0), c = -r.scrollLeft + ia(e), f = -r.scrollTop;
  return wt(s || n).direction === "rtl" && (c += _n(n.clientWidth, s ? s.clientWidth : 0) - o), {
    width: o,
    height: a,
    x: c,
    y: f
  };
}
function r_(e, t) {
  var n = t.getRootNode && t.getRootNode();
  if (e.contains(t))
    return !0;
  if (n && ra(n)) {
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
function qm(e, t) {
  var n = Vn(e, !1, t === "fixed");
  return n.top = n.top + e.clientTop, n.left = n.left + e.clientLeft, n.bottom = n.top + e.clientHeight, n.right = n.left + e.clientWidth, n.width = e.clientWidth, n.height = e.clientHeight, n.x = n.left, n.y = n.top, n;
}
function Gl(e, t, n) {
  return t === t_ ? ds(Ym(e, n)) : hn(t) ? qm(t, n) : ds(Vm(en(e)));
}
function Gm(e) {
  var t = $r(qi(e)), n = ["absolute", "fixed"].indexOf(wt(e).position) >= 0, r = n && Pe(e) ? co(e) : e;
  return hn(r) ? t.filter(function(s) {
    return hn(s) && r_(s, r) && ut(s) !== "body";
  }) : [];
}
function Xm(e, t, n, r) {
  var s = t === "clippingParents" ? Gm(e) : [].concat(t), o = [].concat(s, [n]), a = o[0], c = o.reduce(function(f, p) {
    var i = Gl(e, p, r);
    return f.top = _n(i.top, f.top), f.right = ui(i.right, f.right), f.bottom = ui(i.bottom, f.bottom), f.left = _n(i.left, f.left), f;
  }, Gl(e, a, r));
  return c.width = c.right - c.left, c.height = c.bottom - c.top, c.x = c.left, c.y = c.top, c;
}
function Gn(e) {
  return e.split("-")[1];
}
function ca(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function o_(e) {
  var t = e.reference, n = e.element, r = e.placement, s = r ? at(r) : null, o = r ? Gn(r) : null, a = t.x + t.width / 2 - n.width / 2, c = t.y + t.height / 2 - n.height / 2, f;
  switch (s) {
    case Oe:
      f = {
        x: a,
        y: t.y - n.height
      };
      break;
    case Ge:
      f = {
        x: a,
        y: t.y + t.height
      };
      break;
    case Xe:
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
  var p = s ? ca(s) : null;
  if (p != null) {
    var i = p === "y" ? "height" : "width";
    switch (o) {
      case qn:
        f[p] = f[p] - (t[i] / 2 - n[i] / 2);
        break;
      case zr:
        f[p] = f[p] + (t[i] / 2 - n[i] / 2);
        break;
    }
  }
  return f;
}
function i_() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
function s_(e) {
  return Object.assign({}, i_(), e);
}
function a_(e, t) {
  return t.reduce(function(n, r) {
    return n[r] = e, n;
  }, {});
}
function fa(e, t) {
  t === void 0 && (t = {});
  var n = t, r = n.placement, s = r === void 0 ? e.placement : r, o = n.strategy, a = o === void 0 ? e.strategy : o, c = n.boundary, f = c === void 0 ? Mm : c, p = n.rootBoundary, i = p === void 0 ? t_ : p, d = n.elementContext, u = d === void 0 ? Qn : d, l = n.altBoundary, _ = l === void 0 ? !1 : l, g = n.padding, h = g === void 0 ? 0 : g, v = s_(typeof h != "number" ? h : a_(h, fo)), m = u === Qn ? Am : Qn, k = e.rects.popper, b = e.elements[_ ? m : u], S = Xm(hn(b) ? b : b.contextElement || en(e.elements.popper), f, i, a), $ = Vn(e.elements.reference), E = o_({
    reference: $,
    element: k,
    strategy: "absolute",
    placement: s
  }), y = ds(Object.assign({}, k, E)), x = u === Qn ? y : $, C = {
    top: S.top - x.top + v.top,
    bottom: x.bottom - S.bottom + v.bottom,
    left: S.left - x.left + v.left,
    right: x.right - S.right + v.right
  }, W = e.modifiersData.offset;
  if (u === Qn && W) {
    var F = W[s];
    Object.keys(C).forEach(function(A) {
      var D = [Xe, Ge].indexOf(A) >= 0 ? 1 : -1, O = [Oe, Ge].indexOf(A) >= 0 ? "y" : "x";
      C[A] += F[O] * D;
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
function Km(e) {
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
          reference: hn(c) ? $r(c) : c.contextElement ? $r(c.contextElement) : [],
          popper: $r(f)
        };
        var k = Um(zm([].concat(r, i.options.modifiers)));
        return i.orderedModifiers = k.filter(function(b) {
          return b.enabled;
        }), _(), l.update();
      },
      forceUpdate: function() {
        if (!u) {
          var v = i.elements, m = v.reference, k = v.popper;
          if (!!Kl(m, k)) {
            i.rects = {
              reference: Sm(m, co(k), i.options.strategy === "fixed"),
              popper: aa(k)
            }, i.reset = !1, i.placement = i.options.placement, i.orderedModifiers.forEach(function(C) {
              return i.modifiersData[C.name] = Object.assign({}, C.data);
            });
            for (var b = 0; b < i.orderedModifiers.length; b++) {
              if (i.reset === !0) {
                i.reset = !1, b = -1;
                continue;
              }
              var S = i.orderedModifiers[b], $ = S.fn, E = S.options, y = E === void 0 ? {} : E, x = S.name;
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
      update: Fm(function() {
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
          var S = b({
            state: i,
            name: v,
            instance: l,
            options: k
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
var ho = {
  passive: !0
};
function Jm(e) {
  var t = e.state, n = e.instance, r = e.options, s = r.scroll, o = s === void 0 ? !0 : s, a = r.resize, c = a === void 0 ? !0 : a, f = He(t.elements.popper), p = [].concat(t.scrollParents.reference, t.scrollParents.popper);
  return o && p.forEach(function(i) {
    i.addEventListener("scroll", n.update, ho);
  }), c && f.addEventListener("resize", n.update, ho), function() {
    o && p.forEach(function(i) {
      i.removeEventListener("scroll", n.update, ho);
    }), c && f.removeEventListener("resize", n.update, ho);
  };
}
const Zm = {
  name: "eventListeners",
  enabled: !0,
  phase: "write",
  fn: function() {
  },
  effect: Jm,
  data: {}
};
function Qm(e) {
  var t = e.state, n = e.name;
  t.modifiersData[n] = o_({
    reference: t.rects.reference,
    element: t.rects.popper,
    strategy: "absolute",
    placement: t.placement
  });
}
const eg = {
  name: "popperOffsets",
  enabled: !0,
  phase: "read",
  fn: Qm,
  data: {}
};
var tg = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function ng(e) {
  var t = e.x, n = e.y, r = window, s = r.devicePixelRatio || 1;
  return {
    x: Yn(t * s) / s || 0,
    y: Yn(n * s) / s || 0
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
  var v = a.hasOwnProperty("x"), m = a.hasOwnProperty("y"), k = Me, b = Oe, S = window;
  if (p) {
    var $ = co(n), E = "clientHeight", y = "clientWidth";
    if ($ === He(n) && ($ = en(n), wt($).position !== "static" && c === "absolute" && (E = "scrollHeight", y = "scrollWidth")), $ = $, s === Oe || (s === Me || s === Xe) && o === zr) {
      b = Ge;
      var x = d && $ === S && S.visualViewport ? S.visualViewport.height : $[E];
      g -= x - r.height, g *= f ? 1 : -1;
    }
    if (s === Me || (s === Oe || s === Ge) && o === zr) {
      k = Xe;
      var C = d && $ === S && S.visualViewport ? S.visualViewport.width : $[y];
      l -= C - r.width, l *= f ? 1 : -1;
    }
  }
  var W = Object.assign({
    position: c
  }, p && tg), F = i === !0 ? ng({
    x: l,
    y: g
  }) : {
    x: l,
    y: g
  };
  if (l = F.x, g = F.y, f) {
    var A;
    return Object.assign({}, W, (A = {}, A[b] = m ? "0" : "", A[k] = v ? "0" : "", A.transform = (S.devicePixelRatio || 1) <= 1 ? "translate(" + l + "px, " + g + "px)" : "translate3d(" + l + "px, " + g + "px, 0)", A));
  }
  return Object.assign({}, W, (t = {}, t[b] = m ? g + "px" : "", t[k] = v ? l + "px" : "", t.transform = "", t));
}
function rg(e) {
  var t = e.state, n = e.options, r = n.gpuAcceleration, s = r === void 0 ? !0 : r, o = n.adaptive, a = o === void 0 ? !0 : o, c = n.roundOffsets, f = c === void 0 ? !0 : c, p = {
    placement: at(t.placement),
    variation: Gn(t.placement),
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
const og = {
  name: "computeStyles",
  enabled: !0,
  phase: "beforeWrite",
  fn: rg,
  data: {}
};
function ig(e) {
  var t = e.state;
  Object.keys(t.elements).forEach(function(n) {
    var r = t.styles[n] || {}, s = t.attributes[n] || {}, o = t.elements[n];
    !Pe(o) || !ut(o) || (Object.assign(o.style, r), Object.keys(s).forEach(function(a) {
      var c = s[a];
      c === !1 ? o.removeAttribute(a) : o.setAttribute(a, c === !0 ? "" : c);
    }));
  });
}
function sg(e) {
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
      !Pe(s) || !ut(s) || (Object.assign(s.style, c), Object.keys(o).forEach(function(f) {
        s.removeAttribute(f);
      }));
    });
  };
}
const ag = {
  name: "applyStyles",
  enabled: !0,
  phase: "write",
  fn: ig,
  effect: sg,
  requires: ["computeStyles"]
};
var lg = [Zm, eg, og, ag], cg = /* @__PURE__ */ Km({
  defaultModifiers: lg
});
function kr(e, t, n) {
  return _n(e, ui(t, n));
}
function fg(e, t, n) {
  var r = kr(e, t, n);
  return r > n ? n : r;
}
var ug = function(t, n) {
  return t = typeof t == "function" ? t(Object.assign({}, n.rects, {
    placement: n.placement
  })) : t, s_(typeof t != "number" ? t : a_(t, fo));
};
function _g(e) {
  var t, n = e.state, r = e.name, s = e.options, o = n.elements.arrow, a = n.modifiersData.popperOffsets, c = at(n.placement), f = ca(c), p = [Me, Xe].indexOf(c) >= 0, i = p ? "height" : "width";
  if (!(!o || !a)) {
    var d = ug(s.padding, n), u = aa(o), l = f === "y" ? Oe : Me, _ = f === "y" ? Ge : Xe, g = n.rects.reference[i] + n.rects.reference[f] - a[f] - n.rects.popper[i], h = a[f] - n.rects.reference[f], v = co(o), m = v ? f === "y" ? v.clientHeight || 0 : v.clientWidth || 0 : 0, k = g / 2 - h / 2, b = d[l], S = m - u[i] - d[_], $ = m / 2 - u[i] / 2 + k, E = kr(b, $, S), y = f;
    n.modifiersData[r] = (t = {}, t[y] = E, t.centerOffset = E - $, t);
  }
}
function pg(e) {
  var t = e.state, n = e.options, r = n.element, s = r === void 0 ? "[data-popper-arrow]" : r;
  s != null && (typeof s == "string" && (s = t.elements.popper.querySelector(s), !s) || !r_(t.elements.popper, s) || (t.elements.arrow = s));
}
const dg = {
  name: "arrow",
  enabled: !0,
  phase: "main",
  fn: _g,
  effect: pg,
  requires: ["popperOffsets"],
  requiresIfExists: ["preventOverflow"]
};
function hg(e, t, n) {
  var r = at(e), s = [Me, Oe].indexOf(r) >= 0 ? -1 : 1, o = typeof n == "function" ? n(Object.assign({}, t, {
    placement: e
  })) : n, a = o[0], c = o[1];
  return a = a || 0, c = (c || 0) * s, [Me, Xe].indexOf(r) >= 0 ? {
    x: c,
    y: a
  } : {
    x: a,
    y: c
  };
}
function vg(e) {
  var t = e.state, n = e.options, r = e.name, s = n.offset, o = s === void 0 ? [0, 0] : s, a = n_.reduce(function(i, d) {
    return i[d] = hg(d, t.rects, o), i;
  }, {}), c = a[t.placement], f = c.x, p = c.y;
  t.modifiersData.popperOffsets != null && (t.modifiersData.popperOffsets.x += f, t.modifiersData.popperOffsets.y += p), t.modifiersData[r] = a;
}
const mg = {
  name: "offset",
  enabled: !0,
  phase: "main",
  requires: ["popperOffsets"],
  fn: vg
};
function gg(e) {
  return e === "x" ? "y" : "x";
}
function yg(e) {
  var t = e.state, n = e.options, r = e.name, s = n.mainAxis, o = s === void 0 ? !0 : s, a = n.altAxis, c = a === void 0 ? !1 : a, f = n.boundary, p = n.rootBoundary, i = n.altBoundary, d = n.padding, u = n.tether, l = u === void 0 ? !0 : u, _ = n.tetherOffset, g = _ === void 0 ? 0 : _, h = fa(t, {
    boundary: f,
    rootBoundary: p,
    padding: d,
    altBoundary: i
  }), v = at(t.placement), m = Gn(t.placement), k = !m, b = ca(v), S = gg(b), $ = t.modifiersData.popperOffsets, E = t.rects.reference, y = t.rects.popper, x = typeof g == "function" ? g(Object.assign({}, t.rects, {
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
      var A, D = b === "y" ? Oe : Me, O = b === "y" ? Ge : Xe, T = b === "y" ? "height" : "width", M = $[b], j = M + h[D], R = M - h[O], U = l ? -y[T] / 2 : 0, G = m === qn ? E[T] : y[T], z = m === qn ? -y[T] : -E[T], J = t.elements.arrow, Q = l && J ? aa(J) : {
        width: 0,
        height: 0
      }, P = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : i_(), Y = P[D], X = P[O], q = kr(0, E[T], Q[T]), Z = k ? E[T] / 2 - U - q - Y - C.mainAxis : G - q - Y - C.mainAxis, ae = k ? -E[T] / 2 + U + q + X + C.mainAxis : z + q + X + C.mainAxis, se = t.elements.arrow && co(t.elements.arrow), be = se ? b === "y" ? se.clientTop || 0 : se.clientLeft || 0 : 0, Je = (A = W == null ? void 0 : W[b]) != null ? A : 0, ee = M + Z - Je - be, $t = M + ae - Je, We = kr(l ? ui(j, ee) : j, M, l ? _n(R, $t) : R);
      $[b] = We, F[b] = We - M;
    }
    if (c) {
      var je, kt = b === "x" ? Oe : Me, Ze = b === "x" ? Ge : Xe, te = $[S], me = S === "y" ? "height" : "width", Be = te + h[kt], xt = te - h[Ze], Ie = [Oe, Me].indexOf(v) !== -1, Et = (je = W == null ? void 0 : W[S]) != null ? je : 0, St = Ie ? Be : te - E[me] - y[me] - Et + C.altAxis, Ct = Ie ? te + E[me] + y[me] - Et - C.altAxis : xt, Ot = l && Ie ? fg(St, te, Ct) : kr(l ? St : Be, te, l ? Ct : xt);
      $[S] = Ot, F[S] = Ot - te;
    }
    t.modifiersData[r] = F;
  }
}
const bg = {
  name: "preventOverflow",
  enabled: !0,
  phase: "main",
  fn: yg,
  requiresIfExists: ["offset"]
};
var wg = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function No(e) {
  return e.replace(/left|right|bottom|top/g, function(t) {
    return wg[t];
  });
}
var $g = {
  start: "end",
  end: "start"
};
function Zl(e) {
  return e.replace(/start|end/g, function(t) {
    return $g[t];
  });
}
function kg(e, t) {
  t === void 0 && (t = {});
  var n = t, r = n.placement, s = n.boundary, o = n.rootBoundary, a = n.padding, c = n.flipVariations, f = n.allowedAutoPlacements, p = f === void 0 ? n_ : f, i = Gn(r), d = i ? c ? ql : ql.filter(function(_) {
    return Gn(_) === i;
  }) : fo, u = d.filter(function(_) {
    return p.indexOf(_) >= 0;
  });
  u.length === 0 && (u = d);
  var l = u.reduce(function(_, g) {
    return _[g] = fa(e, {
      placement: g,
      boundary: s,
      rootBoundary: o,
      padding: a
    })[at(g)], _;
  }, {});
  return Object.keys(l).sort(function(_, g) {
    return l[_] - l[g];
  });
}
function xg(e) {
  if (at(e) === la)
    return [];
  var t = No(e);
  return [Zl(e), t, Zl(t)];
}
function Eg(e) {
  var t = e.state, n = e.options, r = e.name;
  if (!t.modifiersData[r]._skip) {
    for (var s = n.mainAxis, o = s === void 0 ? !0 : s, a = n.altAxis, c = a === void 0 ? !0 : a, f = n.fallbackPlacements, p = n.padding, i = n.boundary, d = n.rootBoundary, u = n.altBoundary, l = n.flipVariations, _ = l === void 0 ? !0 : l, g = n.allowedAutoPlacements, h = t.options.placement, v = at(h), m = v === h, k = f || (m || !_ ? [No(h)] : xg(h)), b = [h].concat(k).reduce(function(Q, P) {
      return Q.concat(at(P) === la ? kg(t, {
        placement: P,
        boundary: i,
        rootBoundary: d,
        padding: p,
        flipVariations: _,
        allowedAutoPlacements: g
      }) : P);
    }, []), S = t.rects.reference, $ = t.rects.popper, E = /* @__PURE__ */ new Map(), y = !0, x = b[0], C = 0; C < b.length; C++) {
      var W = b[C], F = at(W), A = Gn(W) === qn, D = [Oe, Ge].indexOf(F) >= 0, O = D ? "width" : "height", T = fa(t, {
        placement: W,
        boundary: i,
        rootBoundary: d,
        altBoundary: u,
        padding: p
      }), M = D ? A ? Xe : Me : A ? Ge : Oe;
      S[O] > $[O] && (M = No(M));
      var j = No(M), R = [];
      if (o && R.push(T[F] <= 0), c && R.push(T[M] <= 0, T[j] <= 0), R.every(function(Q) {
        return Q;
      })) {
        x = W, y = !1;
        break;
      }
      E.set(W, R);
    }
    if (y)
      for (var U = _ ? 3 : 1, G = function(P) {
        var Y = b.find(function(X) {
          var q = E.get(X);
          if (q)
            return q.slice(0, P).every(function(Z) {
              return Z;
            });
        });
        if (Y)
          return x = Y, "break";
      }, z = U; z > 0; z--) {
        var J = G(z);
        if (J === "break")
          break;
      }
    t.placement !== x && (t.modifiersData[r]._skip = !0, t.placement = x, t.reset = !0);
  }
}
const Sg = {
  name: "flip",
  enabled: !0,
  phase: "main",
  fn: Eg,
  requiresIfExists: ["offset"],
  data: {
    _skip: !1
  }
};
var Mn, An, Dn, on, Fe, Qr, Tn, wi, l_;
class it extends cn {
  constructor() {
    super(...arguments);
    L(this, wi);
    L(this, Mn, !1);
    L(this, An, void 0);
    L(this, Dn, 0);
    L(this, on, void 0);
    L(this, Fe, void 0);
    L(this, Qr, void 0);
    N(this, "hideLater", () => {
      w(this, Tn).call(this), H(this, Dn, window.setTimeout(this.hide.bind(this), 100));
    });
    L(this, Tn, () => {
      clearTimeout(w(this, Dn)), H(this, Dn, 0);
    });
  }
  get isShown() {
    var n;
    return (n = w(this, on)) == null ? void 0 : n.classList.contains(this.constructor.CLASS_SHOW);
  }
  get tooltip() {
    return w(this, on) || this._ensureTooltip();
  }
  get popper() {
    return w(this, Fe) ? w(this, Fe) : this._createPopper();
  }
  get trigger() {
    return w(this, Qr) || this.element;
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
    return H(this, Qr, n), !w(this, Mn) && this.isHover && ve(this, wi, l_).call(this), this.options.animation && this.tooltip.classList.add("fade"), this.element.classList.add(this.elementShowClass), this.tooltip.classList.add(this.constructor.CLASS_SHOW), this._createPopper().update(), !0;
  }
  hide() {
    var n, r;
    return (n = w(this, Fe)) == null || n.destroy(), H(this, Fe, void 0), this.element.classList.remove(this.elementShowClass), (r = w(this, on)) == null || r.classList.remove(this.constructor.CLASS_SHOW), !0;
  }
  toggle(n) {
    return this.isShown ? this.hide() : this.show(n);
  }
  destroy() {
    w(this, Mn) && (this.element.removeEventListener("mouseleave", this.hideLater), this.tooltip.removeEventListener("mouseenter", w(this, Tn)), this.tooltip.removeEventListener("mouseleave", this.hideLater)), super.destroy();
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
    return o = o.concat(s), r.classList.add(...o), r[this.options.html ? "innerHTML" : "innerText"] = this.options.title || "", this.options.arrow && r.prepend(this._createArrow()), document.body.appendChild(r), H(this, on, r), r;
  }
  _getPopperOptions() {
    const n = this._getArrowSize();
    return {
      modifiers: [
        bg,
        Sg,
        { ...dg, options: {
          padding: n,
          element: ".arrow"
        } },
        {
          ...mg,
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
    return w(this, Fe) ? w(this, Fe).setOptions(n) : H(this, Fe, cg(this._getPopperElement(), this.tooltip, n)), w(this, Fe);
  }
  _getPopperElement() {
    return w(this, An) || H(this, An, {
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
    }), w(this, An);
  }
  static clear(n) {
    n instanceof Event && (n = { event: n });
    const { exclude: r } = n || {}, s = this.getAll().entries(), o = new Set(r || []);
    for (const [a, c] of s)
      o.has(a) || c.hide();
  }
}
Mn = new WeakMap(), An = new WeakMap(), Dn = new WeakMap(), on = new WeakMap(), Fe = new WeakMap(), Qr = new WeakMap(), Tn = new WeakMap(), wi = new WeakSet(), l_ = function() {
  const { tooltip: n } = this;
  n.addEventListener("mouseenter", w(this, Tn)), n.addEventListener("mouseleave", this.hideLater), this.element.addEventListener("mouseleave", this.hideLater), H(this, Mn, !0);
}, N(it, "NAME", "tooltip"), N(it, "TOOLTIP_CLASS", "tooltip"), N(it, "CLASS_SHOW", "show"), N(it, "MENU_SELECTOR", '[data-toggle="tooltip"]:not(.disabled):not(:disabled)'), N(it, "DEFAULT", {
  animation: !0,
  placement: "top",
  strategy: "absolute",
  trigger: "hover",
  type: "darker",
  arrow: !0
});
document.addEventListener("click", function(e) {
  const n = e.target.closest(it.MENU_SELECTOR);
  if (n) {
    const r = it.ensure(n);
    r.options.trigger === "click" && r.toggle();
  } else
    it.clear({ event: e });
});
document.addEventListener("mouseover", function(e) {
  const t = e.target, n = typeof t.closest == "function" ? t.closest(it.MENU_SELECTOR) : null;
  if (!n)
    return;
  const r = it.ensure(n);
  r.isHover && r.show();
});
var ua, de, c_, f_, xr, Ql, u_ = {}, __ = [], Cg = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function Yt(e, t) {
  for (var n in t)
    e[n] = t[n];
  return e;
}
function p_(e) {
  var t = e.parentNode;
  t && t.removeChild(e);
}
function V(e, t, n) {
  var r, s, o, a = {};
  for (o in t)
    o == "key" ? r = t[o] : o == "ref" ? s = t[o] : a[o] = t[o];
  if (arguments.length > 2 && (a.children = arguments.length > 3 ? ua.call(arguments, 2) : n), typeof e == "function" && e.defaultProps != null)
    for (o in e.defaultProps)
      a[o] === void 0 && (a[o] = e.defaultProps[o]);
  return Po(e, a, r, s, null);
}
function Po(e, t, n, r, s) {
  var o = { type: e, props: t, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: s == null ? ++c_ : s };
  return s == null && de.vnode != null && de.vnode(o), o;
}
function Og() {
  return { current: null };
}
function _a(e) {
  return e.children;
}
function Er(e, t) {
  this.props = e, this.context = t;
}
function Yr(e, t) {
  if (t == null)
    return e.__ ? Yr(e.__, e.__.__k.indexOf(e) + 1) : null;
  for (var n; t < e.__k.length; t++)
    if ((n = e.__k[t]) != null && n.__e != null)
      return n.__e;
  return typeof e.type == "function" ? Yr(e) : null;
}
function d_(e) {
  var t, n;
  if ((e = e.__) != null && e.__c != null) {
    for (e.__e = e.__c.base = null, t = 0; t < e.__k.length; t++)
      if ((n = e.__k[t]) != null && n.__e != null) {
        e.__e = e.__c.base = n.__e;
        break;
      }
    return d_(e);
  }
}
function ec(e) {
  (!e.__d && (e.__d = !0) && xr.push(e) && !_i.__r++ || Ql !== de.debounceRendering) && ((Ql = de.debounceRendering) || setTimeout)(_i);
}
function _i() {
  for (var e; _i.__r = xr.length; )
    e = xr.sort(function(t, n) {
      return t.__v.__b - n.__v.__b;
    }), xr = [], e.some(function(t) {
      var n, r, s, o, a, c;
      t.__d && (a = (o = (n = t).__v).__e, (c = n.__P) && (r = [], (s = Yt({}, o)).__v = o.__v + 1, g_(c, o, s, n.__n, c.ownerSVGElement !== void 0, o.__h != null ? [a] : null, r, a == null ? Yr(o) : a, o.__h), Ag(r, o), o.__e != a && d_(o)));
    });
}
function h_(e, t, n, r, s, o, a, c, f, p) {
  var i, d, u, l, _, g, h, v = r && r.__k || __, m = v.length;
  for (n.__k = [], i = 0; i < t.length; i++)
    if ((l = n.__k[i] = (l = t[i]) == null || typeof l == "boolean" ? null : typeof l == "string" || typeof l == "number" || typeof l == "bigint" ? Po(null, l, null, null, l) : Array.isArray(l) ? Po(_a, { children: l }, null, null, null) : l.__b > 0 ? Po(l.type, l.props, l.key, l.ref ? l.ref : null, l.__v) : l) != null) {
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
      g_(e, l, u = u || u_, s, o, a, c, f, p), _ = l.__e, (d = l.ref) && u.ref != d && (h || (h = []), u.ref && h.push(u.ref, null, l), h.push(d, l.__c || _, l)), _ != null ? (g == null && (g = _), typeof l.type == "function" && l.__k === u.__k ? l.__d = f = v_(l, f, e) : f = m_(e, l, u, v, _, f), typeof n.type == "function" && (n.__d = f)) : f && u.__e == f && f.parentNode != e && (f = Yr(u));
    }
  for (n.__e = g, i = m; i--; )
    v[i] != null && b_(v[i], v[i]);
  if (h)
    for (i = 0; i < h.length; i++)
      y_(h[i], h[++i], h[++i]);
}
function v_(e, t, n) {
  for (var r, s = e.__k, o = 0; s && o < s.length; o++)
    (r = s[o]) && (r.__ = e, t = typeof r.type == "function" ? v_(r, t, n) : m_(n, r, r, s, r.__e, t));
  return t;
}
function m_(e, t, n, r, s, o) {
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
function Mg(e, t, n, r, s) {
  var o;
  for (o in n)
    o === "children" || o === "key" || o in t || pi(e, o, null, n[o], r);
  for (o in t)
    s && typeof t[o] != "function" || o === "children" || o === "key" || o === "value" || o === "checked" || n[o] === t[o] || pi(e, o, t[o], n[o], r);
}
function tc(e, t, n) {
  t[0] === "-" ? e.setProperty(t, n) : e[t] = n == null ? "" : typeof n != "number" || Cg.test(t) ? n : n + "px";
}
function pi(e, t, n, r, s) {
  var o;
  e:
    if (t === "style")
      if (typeof n == "string")
        e.style.cssText = n;
      else {
        if (typeof r == "string" && (e.style.cssText = r = ""), r)
          for (t in r)
            n && t in n || tc(e.style, t, "");
        if (n)
          for (t in n)
            r && n[t] === r[t] || tc(e.style, t, n[t]);
      }
    else if (t[0] === "o" && t[1] === "n")
      o = t !== (t = t.replace(/Capture$/, "")), t = t.toLowerCase() in e ? t.toLowerCase().slice(2) : t.slice(2), e.l || (e.l = {}), e.l[t + o] = n, n ? r || e.addEventListener(t, o ? rc : nc, o) : e.removeEventListener(t, o ? rc : nc, o);
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
function nc(e) {
  this.l[e.type + !1](de.event ? de.event(e) : e);
}
function rc(e) {
  this.l[e.type + !0](de.event ? de.event(e) : e);
}
function g_(e, t, n, r, s, o, a, c, f) {
  var p, i, d, u, l, _, g, h, v, m, k, b, S, $, E, y = t.type;
  if (t.constructor !== void 0)
    return null;
  n.__h != null && (f = n.__h, c = t.__e = n.__e, t.__h = null, o = [c]), (p = de.__b) && p(t);
  try {
    e:
      if (typeof y == "function") {
        if (h = t.props, v = (p = y.contextType) && r[p.__c], m = p ? v ? v.props.value : p.__ : r, n.__c ? g = (i = t.__c = n.__c).__ = i.__E : ("prototype" in y && y.prototype.render ? t.__c = i = new y(h, m) : (t.__c = i = new Er(h, m), i.constructor = y, i.render = Tg), v && v.sub(i), i.props = h, i.state || (i.state = {}), i.context = m, i.__n = r, d = i.__d = !0, i.__h = [], i._sb = []), i.__s == null && (i.__s = i.state), y.getDerivedStateFromProps != null && (i.__s == i.state && (i.__s = Yt({}, i.__s)), Yt(i.__s, y.getDerivedStateFromProps(h, i.__s))), u = i.props, l = i.state, d)
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
        if (i.context = m, i.props = h, i.__v = t, i.__P = e, b = de.__r, S = 0, "prototype" in y && y.prototype.render) {
          for (i.state = i.__s, i.__d = !1, b && b(t), p = i.render(i.props, i.state, i.context), $ = 0; $ < i._sb.length; $++)
            i.__h.push(i._sb[$]);
          i._sb = [];
        } else
          do
            i.__d = !1, b && b(t), p = i.render(i.props, i.state, i.context), i.state = i.__s;
          while (i.__d && ++S < 25);
        i.state = i.__s, i.getChildContext != null && (r = Yt(Yt({}, r), i.getChildContext())), d || i.getSnapshotBeforeUpdate == null || (_ = i.getSnapshotBeforeUpdate(u, l)), E = p != null && p.type === _a && p.key == null ? p.props.children : p, h_(e, Array.isArray(E) ? E : [E], t, n, r, s, o, a, c, f), i.base = t.__e, t.__h = null, i.__h.length && a.push(i), g && (i.__E = i.__ = null), i.__e = !1;
      } else
        o == null && t.__v === n.__v ? (t.__k = n.__k, t.__e = n.__e) : t.__e = Dg(n.__e, t, n, r, s, o, a, f);
    (p = de.diffed) && p(t);
  } catch (x) {
    t.__v = null, (f || o != null) && (t.__e = c, t.__h = !!f, o[o.indexOf(c)] = null), de.__e(x, t, n);
  }
}
function Ag(e, t) {
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
function Dg(e, t, n, r, s, o, a, c) {
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
    if (o = o && ua.call(e.childNodes), p = (d = n.props || u_).dangerouslySetInnerHTML, i = u.dangerouslySetInnerHTML, !c) {
      if (o != null)
        for (d = {}, _ = 0; _ < e.attributes.length; _++)
          d[e.attributes[_].name] = e.attributes[_].value;
      (i || p) && (i && (p && i.__html == p.__html || i.__html === e.innerHTML) || (e.innerHTML = i && i.__html || ""));
    }
    if (Mg(e, u, d, s, c), i)
      t.__k = [];
    else if (_ = t.props.children, h_(e, Array.isArray(_) ? _ : [_], t, n, r, s && l !== "foreignObject", o, a, o ? o[0] : n.__k && Yr(n, 0), c), o != null)
      for (_ = o.length; _--; )
        o[_] != null && p_(o[_]);
    c || ("value" in u && (_ = u.value) !== void 0 && (_ !== e.value || l === "progress" && !_ || l === "option" && _ !== d.value) && pi(e, "value", _, d.value, !1), "checked" in u && (_ = u.checked) !== void 0 && _ !== e.checked && pi(e, "checked", _, d.checked, !1));
  }
  return e;
}
function y_(e, t, n) {
  try {
    typeof e == "function" ? e(t) : e.current = t;
  } catch (r) {
    de.__e(r, n);
  }
}
function b_(e, t, n) {
  var r, s;
  if (de.unmount && de.unmount(e), (r = e.ref) && (r.current && r.current !== e.__e || y_(r, null, t)), (r = e.__c) != null) {
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
      r[s] && b_(r[s], t, n || typeof e.type != "function");
  n || e.__e == null || p_(e.__e), e.__ = e.__e = e.__d = void 0;
}
function Tg(e, t, n) {
  return this.constructor(e, n);
}
ua = __.slice, de = { __e: function(e, t, n, r) {
  for (var s, o, a; t = t.__; )
    if ((s = t.__c) && !s.__)
      try {
        if ((o = s.constructor) && o.getDerivedStateFromError != null && (s.setState(o.getDerivedStateFromError(e)), a = s.__d), s.componentDidCatch != null && (s.componentDidCatch(e, r || {}), a = s.__d), a)
          return s.__E = s;
      } catch (c) {
        e = c;
      }
  throw e;
} }, c_ = 0, f_ = function(e) {
  return e != null && e.constructor === void 0;
}, Er.prototype.setState = function(e, t) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = Yt({}, this.state), typeof e == "function" && (e = e(Yt({}, n), this.props)), e && Yt(n, e), e != null && this.__v && (t && this._sb.push(t), ec(this));
}, Er.prototype.forceUpdate = function(e) {
  this.__v && (this.__e = !0, e && this.__h.push(e), ec(this));
}, Er.prototype.render = _a, xr = [], _i.__r = 0;
let Ng = (e = 21) => crypto.getRandomValues(new Uint8Array(e)).reduce((t, n) => (n &= 63, n < 36 ? t += n.toString(36) : n < 62 ? t += (n - 26).toString(36).toUpperCase() : n > 62 ? t += "-" : t += "_", t), "");
var pa, he, w_, Sr, oc, $_ = {}, k_ = [], Pg = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function Vt(e, t) {
  for (var n in t)
    e[n] = t[n];
  return e;
}
function x_(e) {
  var t = e.parentNode;
  t && t.removeChild(e);
}
function ic(e, t, n) {
  var r, s, o, a = {};
  for (o in t)
    o == "key" ? r = t[o] : o == "ref" ? s = t[o] : a[o] = t[o];
  if (arguments.length > 2 && (a.children = arguments.length > 3 ? pa.call(arguments, 2) : n), typeof e == "function" && e.defaultProps != null)
    for (o in e.defaultProps)
      a[o] === void 0 && (a[o] = e.defaultProps[o]);
  return Lo(e, a, r, s, null);
}
function Lo(e, t, n, r, s) {
  var o = { type: e, props: t, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: s == null ? ++w_ : s };
  return s == null && he.vnode != null && he.vnode(o), o;
}
function da(e) {
  return e.children;
}
function Cr(e, t) {
  this.props = e, this.context = t;
}
function Vr(e, t) {
  if (t == null)
    return e.__ ? Vr(e.__, e.__.__k.indexOf(e) + 1) : null;
  for (var n; t < e.__k.length; t++)
    if ((n = e.__k[t]) != null && n.__e != null)
      return n.__e;
  return typeof e.type == "function" ? Vr(e) : null;
}
function E_(e) {
  var t, n;
  if ((e = e.__) != null && e.__c != null) {
    for (e.__e = e.__c.base = null, t = 0; t < e.__k.length; t++)
      if ((n = e.__k[t]) != null && n.__e != null) {
        e.__e = e.__c.base = n.__e;
        break;
      }
    return E_(e);
  }
}
function sc(e) {
  (!e.__d && (e.__d = !0) && Sr.push(e) && !di.__r++ || oc !== he.debounceRendering) && ((oc = he.debounceRendering) || setTimeout)(di);
}
function di() {
  for (var e; di.__r = Sr.length; )
    e = Sr.sort(function(t, n) {
      return t.__v.__b - n.__v.__b;
    }), Sr = [], e.some(function(t) {
      var n, r, s, o, a, c;
      t.__d && (a = (o = (n = t).__v).__e, (c = n.__P) && (r = [], (s = Vt({}, o)).__v = o.__v + 1, M_(c, o, s, n.__n, c.ownerSVGElement !== void 0, o.__h != null ? [a] : null, r, a == null ? Vr(o) : a, o.__h), Rg(r, o), o.__e != a && E_(o)));
    });
}
function S_(e, t, n, r, s, o, a, c, f, p) {
  var i, d, u, l, _, g, h, v = r && r.__k || k_, m = v.length;
  for (n.__k = [], i = 0; i < t.length; i++)
    if ((l = n.__k[i] = (l = t[i]) == null || typeof l == "boolean" ? null : typeof l == "string" || typeof l == "number" || typeof l == "bigint" ? Lo(null, l, null, null, l) : Array.isArray(l) ? Lo(da, { children: l }, null, null, null) : l.__b > 0 ? Lo(l.type, l.props, l.key, l.ref ? l.ref : null, l.__v) : l) != null) {
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
      M_(e, l, u = u || $_, s, o, a, c, f, p), _ = l.__e, (d = l.ref) && u.ref != d && (h || (h = []), u.ref && h.push(u.ref, null, l), h.push(d, l.__c || _, l)), _ != null ? (g == null && (g = _), typeof l.type == "function" && l.__k === u.__k ? l.__d = f = C_(l, f, e) : f = O_(e, l, u, v, _, f), typeof n.type == "function" && (n.__d = f)) : f && u.__e == f && f.parentNode != e && (f = Vr(u));
    }
  for (n.__e = g, i = m; i--; )
    v[i] != null && D_(v[i], v[i]);
  if (h)
    for (i = 0; i < h.length; i++)
      A_(h[i], h[++i], h[++i]);
}
function C_(e, t, n) {
  for (var r, s = e.__k, o = 0; s && o < s.length; o++)
    (r = s[o]) && (r.__ = e, t = typeof r.type == "function" ? C_(r, t, n) : O_(n, r, r, s, r.__e, t));
  return t;
}
function O_(e, t, n, r, s, o) {
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
function Lg(e, t, n, r, s) {
  var o;
  for (o in n)
    o === "children" || o === "key" || o in t || hi(e, o, null, n[o], r);
  for (o in t)
    s && typeof t[o] != "function" || o === "children" || o === "key" || o === "value" || o === "checked" || n[o] === t[o] || hi(e, o, t[o], n[o], r);
}
function ac(e, t, n) {
  t[0] === "-" ? e.setProperty(t, n) : e[t] = n == null ? "" : typeof n != "number" || Pg.test(t) ? n : n + "px";
}
function hi(e, t, n, r, s) {
  var o;
  e:
    if (t === "style")
      if (typeof n == "string")
        e.style.cssText = n;
      else {
        if (typeof r == "string" && (e.style.cssText = r = ""), r)
          for (t in r)
            n && t in n || ac(e.style, t, "");
        if (n)
          for (t in n)
            r && n[t] === r[t] || ac(e.style, t, n[t]);
      }
    else if (t[0] === "o" && t[1] === "n")
      o = t !== (t = t.replace(/Capture$/, "")), t = t.toLowerCase() in e ? t.toLowerCase().slice(2) : t.slice(2), e.l || (e.l = {}), e.l[t + o] = n, n ? r || e.addEventListener(t, o ? cc : lc, o) : e.removeEventListener(t, o ? cc : lc, o);
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
function lc(e) {
  this.l[e.type + !1](he.event ? he.event(e) : e);
}
function cc(e) {
  this.l[e.type + !0](he.event ? he.event(e) : e);
}
function M_(e, t, n, r, s, o, a, c, f) {
  var p, i, d, u, l, _, g, h, v, m, k, b, S, $, E, y = t.type;
  if (t.constructor !== void 0)
    return null;
  n.__h != null && (f = n.__h, c = t.__e = n.__e, t.__h = null, o = [c]), (p = he.__b) && p(t);
  try {
    e:
      if (typeof y == "function") {
        if (h = t.props, v = (p = y.contextType) && r[p.__c], m = p ? v ? v.props.value : p.__ : r, n.__c ? g = (i = t.__c = n.__c).__ = i.__E : ("prototype" in y && y.prototype.render ? t.__c = i = new y(h, m) : (t.__c = i = new Cr(h, m), i.constructor = y, i.render = Wg), v && v.sub(i), i.props = h, i.state || (i.state = {}), i.context = m, i.__n = r, d = i.__d = !0, i.__h = [], i._sb = []), i.__s == null && (i.__s = i.state), y.getDerivedStateFromProps != null && (i.__s == i.state && (i.__s = Vt({}, i.__s)), Vt(i.__s, y.getDerivedStateFromProps(h, i.__s))), u = i.props, l = i.state, d)
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
        if (i.context = m, i.props = h, i.__v = t, i.__P = e, b = he.__r, S = 0, "prototype" in y && y.prototype.render) {
          for (i.state = i.__s, i.__d = !1, b && b(t), p = i.render(i.props, i.state, i.context), $ = 0; $ < i._sb.length; $++)
            i.__h.push(i._sb[$]);
          i._sb = [];
        } else
          do
            i.__d = !1, b && b(t), p = i.render(i.props, i.state, i.context), i.state = i.__s;
          while (i.__d && ++S < 25);
        i.state = i.__s, i.getChildContext != null && (r = Vt(Vt({}, r), i.getChildContext())), d || i.getSnapshotBeforeUpdate == null || (_ = i.getSnapshotBeforeUpdate(u, l)), E = p != null && p.type === da && p.key == null ? p.props.children : p, S_(e, Array.isArray(E) ? E : [E], t, n, r, s, o, a, c, f), i.base = t.__e, t.__h = null, i.__h.length && a.push(i), g && (i.__E = i.__ = null), i.__e = !1;
      } else
        o == null && t.__v === n.__v ? (t.__k = n.__k, t.__e = n.__e) : t.__e = Hg(n.__e, t, n, r, s, o, a, f);
    (p = he.diffed) && p(t);
  } catch (x) {
    t.__v = null, (f || o != null) && (t.__e = c, t.__h = !!f, o[o.indexOf(c)] = null), he.__e(x, t, n);
  }
}
function Rg(e, t) {
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
function Hg(e, t, n, r, s, o, a, c) {
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
    if (o = o && pa.call(e.childNodes), p = (d = n.props || $_).dangerouslySetInnerHTML, i = u.dangerouslySetInnerHTML, !c) {
      if (o != null)
        for (d = {}, _ = 0; _ < e.attributes.length; _++)
          d[e.attributes[_].name] = e.attributes[_].value;
      (i || p) && (i && (p && i.__html == p.__html || i.__html === e.innerHTML) || (e.innerHTML = i && i.__html || ""));
    }
    if (Lg(e, u, d, s, c), i)
      t.__k = [];
    else if (_ = t.props.children, S_(e, Array.isArray(_) ? _ : [_], t, n, r, s && l !== "foreignObject", o, a, o ? o[0] : n.__k && Vr(n, 0), c), o != null)
      for (_ = o.length; _--; )
        o[_] != null && x_(o[_]);
    c || ("value" in u && (_ = u.value) !== void 0 && (_ !== e.value || l === "progress" && !_ || l === "option" && _ !== d.value) && hi(e, "value", _, d.value, !1), "checked" in u && (_ = u.checked) !== void 0 && _ !== e.checked && hi(e, "checked", _, d.checked, !1));
  }
  return e;
}
function A_(e, t, n) {
  try {
    typeof e == "function" ? e(t) : e.current = t;
  } catch (r) {
    he.__e(r, n);
  }
}
function D_(e, t, n) {
  var r, s;
  if (he.unmount && he.unmount(e), (r = e.ref) && (r.current && r.current !== e.__e || A_(r, null, t)), (r = e.__c) != null) {
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
      r[s] && D_(r[s], t, n || typeof e.type != "function");
  n || e.__e == null || x_(e.__e), e.__ = e.__e = e.__d = void 0;
}
function Wg(e, t, n) {
  return this.constructor(e, n);
}
pa = k_.slice, he = { __e: function(e, t, n, r) {
  for (var s, o, a; t = t.__; )
    if ((s = t.__c) && !s.__)
      try {
        if ((o = s.constructor) && o.getDerivedStateFromError != null && (s.setState(o.getDerivedStateFromError(e)), a = s.__d), s.componentDidCatch != null && (s.componentDidCatch(e, r || {}), a = s.__d), a)
          return s.__E = s;
      } catch (c) {
        e = c;
      }
  throw e;
} }, w_ = 0, Cr.prototype.setState = function(e, t) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = Vt({}, this.state), typeof e == "function" && (e = e(Vt({}, n), this.props)), e && Vt(n, e), e != null && this.__v && (t && this._sb.push(t), sc(this));
}, Cr.prototype.forceUpdate = function(e) {
  this.__v && (this.__e = !0, e && this.__h.push(e), sc(this));
}, Cr.prototype.render = da, Sr = [], di.__r = 0;
var sn, an;
class fc extends Cr {
  constructor(n) {
    var r;
    super(n);
    L(this, sn, 0);
    L(this, an, null);
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
      r && (w(this, sn) && cancelAnimationFrame(w(this, sn)), H(this, sn, requestAnimationFrame(() => {
        const s = this.props.type === "horz" ? n.clientX - r.x : n.clientY - r.y;
        this.scroll(r.offset + s * this.props.scrollSize / this.props.clientSize), H(this, sn, 0);
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
    n && (H(this, an, typeof n == "string" ? document : n.current), w(this, an).addEventListener("wheel", this._handleWheel, { passive: !1 }));
  }
  componentWillUnmount() {
    document.removeEventListener("mousemove", this._handleMouseMove), document.removeEventListener("mouseup", this._handleMouseUp), w(this, an) && w(this, an).removeEventListener("wheel", this._handleWheel);
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
    return r === "horz" ? (_.height = s, _.width = n, g.width = this.barSize, g.left = Math.round(Math.min(d, u) * (n - g.width) / d)) : (_.width = s, _.height = n, g.height = this.barSize, g.top = Math.round(Math.min(d, u) * (n - g.height) / d)), /* @__PURE__ */ ic("div", {
      className: I("scrollbar", o, {
        "is-vert": r === "vert",
        "is-horz": r === "horz",
        "is-dragging": l
      }),
      style: _,
      onMouseDown: this._handleClick
    }, /* @__PURE__ */ ic("div", {
      className: "scrollbar-bar",
      style: g,
      onMouseDown: this._handleMouseDown
    }));
  }
}
sn = new WeakMap(), an = new WeakMap();
function uc(e, t, n) {
  return e && (t && (e = Math.max(t, e)), n && (e = Math.min(n, e))), e;
}
function T_({ col: e, className: t, height: n, row: r, onRenderCell: s, style: o, outerStyle: a, children: c, outerClass: f, ...p }) {
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
  }], g = ["dtable-cell-content", t], h = [(x = c != null ? c : (y = r.data) == null ? void 0 : y[e.name]) != null ? x : ""], v = s ? s(h, { row: r, col: e }, V) : h, m = [], k = [], b = {}, S = {};
  let $ = "div";
  v == null || v.forEach((C) => {
    var W;
    if (typeof C == "object" && C && !f_(C) && ("html" in C || "className" in C || "style" in C || "attrs" in C || "children" in C || "tagName" in C)) {
      const F = C.outer ? m : k;
      C.html ? F.push(/* @__PURE__ */ V("div", {
        className: I("dtable-cell-html", C.className),
        style: C.style,
        dangerouslySetInnerHTML: { __html: C.html },
        ...(W = C.attrs) != null ? W : {}
      })) : (C.style && Object.assign(C.outer ? i : l, C.style), C.className && (C.outer ? _ : g).push(C.className), C.children && F.push(C.children), C.attrs && Object.assign(C.outer ? b : S, C.attrs)), C.tagName && !C.outer && ($ = C.tagName);
    } else
      k.push(C);
  });
  const E = $;
  return /* @__PURE__ */ V("div", {
    className: I(_),
    style: i,
    "data-col": e.name,
    ...p,
    ...b
  }, k.length > 0 && /* @__PURE__ */ V(E, {
    className: I(g),
    style: l,
    ...S
  }, k), m);
}
function Zi({ row: e, className: t, top: n = 0, left: r = 0, width: s, height: o, cols: a, CellComponent: c = T_, onRenderCell: f }) {
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
function N_({
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
  CellComponent: u = T_,
  onRenderCell: l,
  style: _,
  ...g
}) {
  let h = null;
  s != null && s.length && (h = /* @__PURE__ */ V(Zi, {
    className: "dtable-fixed-left",
    cols: s,
    width: c,
    row: e,
    CellComponent: u,
    onRenderCell: l
  }));
  let v = null;
  a != null && a.length && (v = /* @__PURE__ */ V(Zi, {
    className: "dtable-flexable",
    cols: a,
    left: c - d,
    width: Math.max(f, p),
    row: e,
    CellComponent: u,
    onRenderCell: l
  }));
  let m = null;
  o != null && o.length && (m = /* @__PURE__ */ V(Zi, {
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
function jg({ height: e, onRenderRow: t, ...n }) {
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
  }, /* @__PURE__ */ V(N_, {
    ...r
  }));
}
function Bg({
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
    return d && Object.assign(i, d), /* @__PURE__ */ V(N_, {
      ...i
    });
  }));
}
const vi = /* @__PURE__ */ new Map(), mi = [];
function P_(e, t) {
  const { name: n } = e;
  if (!(t != null && t.override) && vi.has(n))
    throw new Error(`DTable: Plugin with name ${n} already exists`);
  vi.set(n, e), (t == null ? void 0 : t.buildIn) && !mi.includes(n) && mi.push(n);
}
function Kn(e, t) {
  P_(e, t);
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
function L_(e) {
  return vi.delete(e);
}
function Ig(e) {
  if (typeof e == "string") {
    const t = vi.get(e);
    return t || console.warn(`DTable: Cannot found plugin "${e}"`), t;
  }
  if (typeof e == "function" && "plugin" in e)
    return e.plugin;
  if (typeof e == "object")
    return e;
  console.warn("DTable: Invalid plugin", e);
}
function R_(e, t, n) {
  return t.forEach((r) => {
    var o;
    if (!r)
      return;
    const s = Ig(r);
    !s || n.has(s.name) || ((o = s.plugins) != null && o.length && R_(e, s.plugins, n), e.push(s), n.add(s.name));
  }), e;
}
function Ug(e = [], t = !0) {
  return t && mi.length && e.unshift(...mi), e != null && e.length ? R_([], e, /* @__PURE__ */ new Set()) : [];
}
function _c() {
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
var ln, Nn, Nt, tt, Pt, ge, ze, nt, Pn, eo, to, vt, Ln, Rn, $i, H_, ki, W_, xi, j_, Ei, B_, no, vs, Si, Ci, ro, oo, Oi, Mi, Ai, I_, Di, U_, Ti, F_;
class hs extends Er {
  constructor(n) {
    var r;
    super(n);
    L(this, $i);
    L(this, ki);
    L(this, xi);
    L(this, Ei);
    L(this, no);
    L(this, Ai);
    L(this, Di);
    L(this, Ti);
    N(this, "ref", Og());
    L(this, ln, 0);
    L(this, Nn, void 0);
    L(this, Nt, !1);
    L(this, tt, void 0);
    L(this, Pt, void 0);
    L(this, ge, []);
    L(this, ze, void 0);
    L(this, nt, /* @__PURE__ */ new Map());
    L(this, Pn, {});
    L(this, eo, void 0);
    L(this, to, []);
    N(this, "updateLayout", () => {
      w(this, ln) && cancelAnimationFrame(w(this, ln)), H(this, ln, requestAnimationFrame(() => {
        H(this, ze, void 0), this.forceUpdate(), H(this, ln, 0);
      }));
    });
    L(this, vt, (n, r) => {
      r = r || n.type;
      const s = w(this, nt).get(r);
      if (!!(s != null && s.length)) {
        for (const o of s)
          if (o.call(this, n) === !1) {
            n.stopPropagation(), n.preventDefault();
            break;
          }
      }
    });
    L(this, Ln, (n) => {
      w(this, vt).call(this, n, `window_${n.type}`);
    });
    L(this, Rn, (n) => {
      w(this, vt).call(this, n, `document_${n.type}`);
    });
    L(this, Si, (n, r) => {
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
    L(this, Ci, (n, r) => (this.options.onRenderHeaderRow && (n.props = this.options.onRenderHeaderRow.call(this, n, r)), w(this, ge).forEach((s) => {
      s.onRenderHeaderRow && (n.props = s.onRenderHeaderRow.call(this, n, r));
    }), n.props));
    L(this, ro, (n, r, s) => {
      const { row: o, col: a } = r;
      n[0] = this.getCellValue(o, a);
      const c = o.id === "HEADER" ? "onRenderHeaderCell" : "onRenderCell";
      return a.setting[c] && (n = a.setting[c].call(this, n, r, s)), this.options[c] && (n = this.options[c].call(this, n, r, s)), w(this, ge).forEach((f) => {
        f[c] && (n = f[c].call(this, n, r, s));
      }), n;
    });
    L(this, oo, (n, r) => {
      r === "horz" ? this.scroll({ scrollLeft: n }) : this.scroll({ scrollTop: n });
    });
    L(this, Oi, (n) => {
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
    L(this, Mi, (n) => {
      const r = n.key.toLowerCase();
      if (["pageup", "pagedown", "home", "end"].includes(r))
        return !this.scroll({ to: r.replace("page", "") });
    });
    H(this, Nn, (r = n.id) != null ? r : `dtable-${Ng(10)}`), this.state = { scrollTop: 0, scrollLeft: 0, renderCount: 0 }, H(this, Pt, Object.freeze(Ug(n.plugins))), w(this, Pt).forEach((s) => {
      var f;
      const { methods: o, data: a, state: c } = s;
      o && Object.entries(o).forEach(([p, i]) => {
        typeof i == "function" && Object.assign(this, { [p]: i.bind(this) });
      }), a && Object.assign(w(this, Pn), a.call(this)), c && Object.assign(this.state, c.call(this)), (f = s.onCreate) == null || f.call(this, s);
    });
  }
  get options() {
    var n;
    return ((n = w(this, ze)) == null ? void 0 : n.options) || w(this, tt) || _c();
  }
  get plugins() {
    return w(this, ge);
  }
  get layout() {
    return w(this, ze);
  }
  get id() {
    return w(this, Nn);
  }
  get data() {
    return w(this, Pn);
  }
  get parent() {
    var n, r;
    return (r = this.props.parent) != null ? r : (n = this.ref.current) == null ? void 0 : n.parentElement;
  }
  componentWillReceiveProps() {
    H(this, tt, void 0);
  }
  componentDidMount() {
    if (w(this, Nt) ? this.forceUpdate() : ve(this, no, vs).call(this), w(this, ge).forEach((n) => {
      let { events: r } = n;
      !r || (typeof r == "function" && (r = r.call(this)), Object.entries(r).forEach(([s, o]) => {
        o && this.on(s, o);
      }));
    }), this.on("click", w(this, Oi)), this.on("keydown", w(this, Mi)), this.options.responsive) {
      if (typeof ResizeObserver < "u") {
        const { parent: n } = this;
        if (n) {
          const r = new ResizeObserver(this.updateLayout);
          r.observe(n), H(this, eo, r);
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
    w(this, Nt) ? ve(this, no, vs).call(this) : w(this, ge).forEach((n) => {
      var r;
      (r = n.onUpdated) == null || r.call(this);
    });
  }
  componentWillUnmount() {
    var r;
    (r = w(this, eo)) == null || r.disconnect();
    const { current: n } = this.ref;
    if (n)
      for (const s of w(this, nt).keys())
        s.startsWith("window_") ? window.removeEventListener(s.replace("window_", ""), w(this, Ln)) : s.startsWith("document_") ? document.removeEventListener(s.replace("document_", ""), w(this, Rn)) : n.removeEventListener(s, w(this, vt));
    w(this, ge).forEach((s) => {
      var o;
      (o = s.onUnmounted) == null || o.call(this);
    }), w(this, Pt).forEach((s) => {
      var o;
      (o = s.onDestory) == null || o.call(this);
    }), H(this, Pn, {}), w(this, nt).clear();
  }
  on(n, r, s) {
    var a;
    s && (n = `${s}_${n}`);
    const o = w(this, nt).get(n);
    o ? o.push(r) : (w(this, nt).set(n, [r]), n.startsWith("window_") ? window.addEventListener(n.replace("window_", ""), w(this, Ln)) : n.startsWith("document_") ? document.addEventListener(n.replace("document_", ""), w(this, Rn)) : (a = this.ref.current) == null || a.addEventListener(n, w(this, vt)));
  }
  off(n, r, s) {
    var c;
    s && (n = `${s}_${n}`);
    const o = w(this, nt).get(n);
    if (!o)
      return;
    const a = o.indexOf(r);
    a >= 0 && o.splice(a, 1), o.length || (w(this, nt).delete(n), n.startsWith("window_") ? window.removeEventListener(n.replace("window_", ""), w(this, Ln)) : n.startsWith("document_") ? document.removeEventListener(n.replace("document_", ""), w(this, Rn)) : (c = this.ref.current) == null || c.removeEventListener(n, w(this, vt)));
  }
  emitCustomEvent(n, r) {
    w(this, vt).call(this, r instanceof Event ? r : new CustomEvent(n, { detail: r }), n);
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
    if (!w(this, tt))
      return;
    typeof n == "function" && (r = n, n = {});
    const { dirtyType: s, state: o } = n;
    if (s === "layout")
      H(this, ze, void 0);
    else if (s === "options") {
      if (H(this, tt, void 0), !w(this, ze))
        return;
      H(this, ze, void 0);
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
    return (o = io(w(this, to), n, r, s, this.options.lang)) != null ? o : `{i18n:${n}}`;
  }
  render() {
    var l;
    const n = ve(this, Ti, F_).call(this), { className: r, rowHover: s, colHover: o, cellHover: a, bordered: c, striped: f, scrollbarHover: p } = this.options, i = { width: n == null ? void 0 : n.width, height: n == null ? void 0 : n.height }, d = ["dtable", r, {
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
      id: w(this, Nn),
      className: I(d),
      style: i,
      ref: this.ref,
      tabIndex: -1
    }, n && ve(this, $i, H_).call(this, n), n && ve(this, ki, W_).call(this, n), n && ve(this, xi, j_).call(this, n), n && ve(this, Ei, B_).call(this, n));
  }
}
ln = new WeakMap(), Nn = new WeakMap(), Nt = new WeakMap(), tt = new WeakMap(), Pt = new WeakMap(), ge = new WeakMap(), ze = new WeakMap(), nt = new WeakMap(), Pn = new WeakMap(), eo = new WeakMap(), to = new WeakMap(), vt = new WeakMap(), Ln = new WeakMap(), Rn = new WeakMap(), $i = new WeakSet(), H_ = function(n) {
  const { header: r, colsInfo: s, headerHeight: o, scrollLeft: a } = n;
  if (!r)
    return null;
  if (r === !0)
    return /* @__PURE__ */ V(jg, {
      scrollLeft: a,
      height: o,
      onRenderCell: w(this, ro),
      onRenderRow: w(this, Ci),
      ...s
    });
  const c = Array.isArray(r) ? r : [r];
  return /* @__PURE__ */ V(ts, {
    className: "dtable-header",
    style: { height: o },
    renders: c,
    generateArgs: [n],
    generatorThis: this
  });
}, ki = new WeakSet(), W_ = function(n) {
  const { headerHeight: r, rowsHeight: s, visibleRows: o, rowHeight: a, colsInfo: c, scrollLeft: f, scrollTop: p } = n;
  return /* @__PURE__ */ V(Bg, {
    top: r,
    height: s,
    rows: o,
    rowHeight: a,
    scrollLeft: f,
    scrollTop: p,
    onRenderCell: w(this, ro),
    onRenderRow: w(this, Si),
    ...c
  });
}, xi = new WeakSet(), j_ = function(n) {
  const { footer: r } = n;
  if (!r)
    return null;
  const s = typeof r == "function" ? r.call(this, n) : Array.isArray(r) ? r : [r];
  return /* @__PURE__ */ V(ts, {
    className: "dtable-footer",
    style: { height: n.footerHeight, top: n.rowsHeight + n.headerHeight },
    renders: s,
    generateArgs: [n],
    generatorThis: this,
    generators: n.footerGenerators
  });
}, Ei = new WeakSet(), B_ = function(n) {
  const r = [], { scrollLeft: s, colsInfo: o, scrollTop: a, rowsHeight: c, rowsHeightTotal: f, footerHeight: p } = n, { scrollColsWidth: i, scrollWidth: d } = o, { scrollbarSize: u = 12, horzScrollbarPos: l } = this.options;
  return i > d && r.push(
    /* @__PURE__ */ V(fc, {
      key: "horz",
      type: "horz",
      scrollPos: s,
      scrollSize: i,
      clientSize: d,
      onScroll: w(this, oo),
      left: o.fixedLeftWidth,
      bottom: (l === "inside" ? 0 : -u) + p,
      size: u,
      wheelContainer: this.ref
    })
  ), f > c && r.push(
    /* @__PURE__ */ V(fc, {
      key: "vert",
      type: "vert",
      scrollPos: a,
      scrollSize: f,
      clientSize: c,
      onScroll: w(this, oo),
      right: 0,
      size: u,
      top: n.headerHeight,
      wheelContainer: this.ref
    })
  ), r.length ? r : null;
}, no = new WeakSet(), vs = function() {
  var n;
  H(this, Nt, !1), (n = this.options.afterRender) == null || n.call(this), w(this, ge).forEach((r) => {
    var s;
    return (s = r.afterRender) == null ? void 0 : s.call(this);
  });
}, Si = new WeakMap(), Ci = new WeakMap(), ro = new WeakMap(), oo = new WeakMap(), Oi = new WeakMap(), Mi = new WeakMap(), Ai = new WeakSet(), I_ = function() {
  if (w(this, tt))
    return !1;
  const r = { ..._c(), ...w(this, Pt).reduce((s, o) => {
    const { defaultOptions: a } = o;
    return a && Object.assign(s, a), s;
  }, {}), ...this.props };
  return H(this, tt, r), H(this, ge, w(this, Pt).reduce((s, o) => {
    const { when: a, options: c } = o;
    return (!a || a(r)) && (s.push(o), c && Object.assign(r, typeof c == "function" ? c.call(this, r) : c)), s;
  }, [])), H(this, to, [this.options.i18n, ...this.plugins.map((s) => s.i18n)].filter(Boolean)), !0;
}, Di = new WeakSet(), U_ = function() {
  var J, Q;
  const { plugins: n } = this;
  let r = w(this, tt);
  const s = {
    flex: /* @__PURE__ */ V("div", {
      style: "flex:auto"
    }),
    divider: /* @__PURE__ */ V("div", {
      style: "width:1px;margin:var(--space);background:var(--color-border);height:50%"
    })
  };
  n.forEach((P) => {
    var X;
    const Y = (X = P.beforeLayout) == null ? void 0 : X.call(this, r);
    Y && (r = { ...r, ...Y }), Object.assign(s, P.footer);
  });
  const { defaultColWidth: o, minColWidth: a, maxColWidth: c } = r, f = [], p = [], i = [], d = {}, u = [], l = [];
  let _ = 0, g = 0, h = 0;
  r.cols.forEach((P) => {
    var $t, We, je;
    if (P.hidden)
      return;
    const {
      name: Y,
      type: X = "",
      fixed: q = !1,
      flex: Z = !1,
      width: ae = o,
      minWidth: se = a,
      maxWidth: be = c,
      ...Je
    } = P, ee = {
      name: Y,
      type: X,
      setting: {
        name: Y,
        type: X,
        fixed: q,
        flex: Z,
        width: ae,
        minWidth: se,
        maxWidth: be,
        ...Je
      },
      flex: q ? 0 : Z === !0 ? 1 : typeof Z == "number" ? Z : 0,
      left: 0,
      width: uc(ae, se, be),
      realWidth: 0,
      visible: !0,
      index: u.length
    };
    n.forEach((kt) => {
      var te, me;
      const Ze = (te = kt.colTypes) == null ? void 0 : te[X];
      if (Ze) {
        const Be = typeof Ze == "function" ? Ze(ee) : Ze;
        Be && Object.assign(ee.setting, Be);
      }
      (me = kt.onAddCol) == null || me.call(this, ee);
    }), ee.width = uc(($t = ee.setting.width) != null ? $t : ee.width, (We = ee.setting.minWidth) != null ? We : se, (je = ee.setting.maxWidth) != null ? je : be), ee.realWidth = ee.realWidth || ee.width, q === "left" ? (ee.left = _, _ += ee.width, f.push(ee)) : q === "right" ? (ee.left = g, g += ee.width, p.push(ee)) : (ee.left = h, h += ee.width, i.push(ee)), ee.flex && l.push(ee), u.push(ee), d[ee.name] = ee;
  });
  let v = r.width, m = 0;
  const k = _ + h + g;
  if (typeof v == "function" && (v = v.call(this, k)), v === "auto")
    m = k;
  else if (v === "100%") {
    const { parent: P } = this;
    if (P)
      m = P.clientWidth;
    else {
      m = 0, H(this, Nt, !0);
      return;
    }
  } else
    m = v != null ? v : 0;
  const { data: b, rowKey: S = "id", rowHeight: $ } = r, E = [], y = (P, Y, X) => {
    var Z, ae;
    const q = { data: X != null ? X : { [S]: P }, id: P, index: E.length, top: 0 };
    if (X || (q.lazy = !0), E.push(q), ((Z = r.onAddRow) == null ? void 0 : Z.call(this, q, Y)) !== !1) {
      for (const se of n)
        if (((ae = se.onAddRow) == null ? void 0 : ae.call(this, q, Y)) === !1)
          return;
    }
  };
  if (typeof b == "number")
    for (let P = 0; P < b; P++)
      y(`${P}`, P);
  else
    Array.isArray(b) && b.forEach((P, Y) => {
      var X;
      typeof P == "object" ? y(`${(X = P[S]) != null ? X : ""}`, Y, P) : y(`${P != null ? P : ""}`, Y);
    });
  let x = E;
  const C = {};
  if (r.onAddRows) {
    const P = r.onAddRows.call(this, x);
    P && (x = P);
  }
  for (const P of n) {
    const Y = (J = P.onAddRows) == null ? void 0 : J.call(this, x);
    Y && (x = Y);
  }
  x.forEach((P, Y) => {
    C[P.id] = P, P.index = Y, P.top = P.index * $;
  });
  const { header: W, footer: F } = r, A = W ? r.headerHeight || $ : 0, D = F ? r.footerHeight || $ : 0;
  let O = r.height, T = 0;
  const M = x.length * $, j = A + D + M;
  if (typeof O == "function" && (O = O.call(this, j)), O === "auto")
    T = j;
  else if (typeof O == "object")
    T = Math.min(O.max, Math.max(O.min, j));
  else if (O === "100%") {
    const { parent: P } = this;
    if (P)
      T = P.clientHeight;
    else {
      T = 0, H(this, Nt, !0);
      return;
    }
  } else
    T = O;
  const R = T - A - D, U = m - _ - g, G = {
    options: r,
    allRows: E,
    width: m,
    height: T,
    rows: x,
    rowsMap: C,
    rowHeight: $,
    rowsHeight: R,
    rowsHeightTotal: M,
    header: W,
    footer: F,
    footerGenerators: s,
    headerHeight: A,
    footerHeight: D,
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
  z && Object.assign(G, z), n.forEach((P) => {
    if (P.onLayout) {
      const Y = P.onLayout.call(this, G);
      Y && Object.assign(G, Y);
    }
  }), H(this, ze, G);
}, Ti = new WeakSet(), F_ = function() {
  (ve(this, Ai, I_).call(this) || !w(this, ze)) && ve(this, Di, U_).call(this);
  const { layout: n } = this;
  if (!n)
    return;
  let { scrollLeft: r } = this.state;
  const { flexCols: s, colsInfo: { scrollCols: o, scrollWidth: a, scrollColsWidth: c } } = n;
  if (s.length) {
    const k = a - c;
    if (k > 0) {
      const b = s.reduce(($, E) => $ + E.flex, 0);
      let S = 0;
      s.forEach(($) => {
        const E = Math.min(k - S, Math.ceil(k * ($.flex / b)));
        $.realWidth = E + $.width, S += $.realWidth;
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
}, N(hs, "addPlugin", P_), N(hs, "removePlugin", L_);
function pc(e, t) {
  t !== void 0 ? e.data.hoverCol = t : t = e.data.hoverCol;
  const { current: n } = e.ref;
  if (!n)
    return;
  const r = "dtable-col-hover";
  n.querySelectorAll(`.${r}`).forEach((s) => s.classList.remove(r)), typeof t == "string" && t.length && n.querySelectorAll(`.dtable-cell[data-col="${t}"]`).forEach((s) => s.classList.add(r));
}
const Fg = {
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
      pc(this, r);
    },
    mouseleave() {
      pc(this, !1);
    }
  }
}, zg = Kn(Fg, { buildIn: !0 });
function Yg(e, t) {
  var a, c;
  typeof e == "boolean" && (t = e, e = void 0);
  const n = this.state.checkedRows, r = {}, { canRowCheckable: s } = this.options, o = (f, p) => {
    s && !s.call(this, f) || !!n[f] === p || (p ? n[f] = !0 : delete n[f], r[f] = p);
  };
  if (e === void 0 ? (t === void 0 && (t = !z_.call(this)), (a = this.layout) == null || a.allRows.forEach(({ id: f }) => {
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
function Vg(e) {
  var t;
  return (t = this.state.checkedRows[e]) != null ? t : !1;
}
function z_() {
  var n, r;
  const e = this.getChecks().length, { canRowCheckable: t } = this.options;
  return t ? e === ((n = this.layout) == null ? void 0 : n.allRows.reduce((s, o) => s + (t.call(this, o.id) ? 1 : 0), 0)) : e === ((r = this.layout) == null ? void 0 : r.allRows.length);
}
function qg() {
  return Object.keys(this.state.checkedRows);
}
const Gg = {
  name: "checkable",
  defaultOptions: { checkable: !0 },
  when: (e) => !!e.checkable,
  state() {
    return { checkedRows: {} };
  },
  methods: {
    toggleCheckRows: Yg,
    isRowChecked: Vg,
    isAllRowChecked: z_,
    getChecks: qg
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
}, Xg = Kn(Gg);
var Y_ = /* @__PURE__ */ ((e) => (e.unknown = "", e.collapsed = "collapsed", e.expanded = "expanded", e.hidden = "hidden", e.normal = "normal", e))(Y_ || {});
function ms(e) {
  const t = this.data.nestedMap.get(e);
  if (!t || t.state !== "")
    return t != null ? t : { state: "normal", level: -1 };
  if (!t.parent && !t.children)
    return t.state = "normal", t;
  const n = this.state.collapsedRows, r = t.children && n && n[e];
  let s = !1, { parent: o } = t;
  for (; o; ) {
    const a = ms.call(this, o);
    if (a.state !== "expanded") {
      s = !0;
      break;
    }
    o = a.parent;
  }
  return t.state = s ? "hidden" : r ? "collapsed" : t.children ? "expanded" : "normal", t.level = t.parent ? ms.call(this, t.parent).level + 1 : 0, t;
}
function Kg(e, t) {
  var s;
  let n = (s = this.state.collapsedRows) != null ? s : {};
  const { nestedMap: r } = this.data;
  if (e === "HEADER")
    if (t === void 0 && (t = !V_.call(this)), t) {
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
function V_() {
  const e = this.data.nestedMap.values();
  for (const t of e)
    if (t.state === "expanded")
      return !1;
  return !0;
}
function q_(e, t = 0, n, r = 0) {
  var s;
  n || (n = [...e.keys()]);
  for (const o of n) {
    const a = e.get(o);
    !a || (a.level === r && (a.order = t++), (s = a.children) != null && s.length && (t = q_(e, t, a.children, r + 1)));
  }
  return t;
}
function G_(e, t, n, r) {
  const s = e.getNestedRowInfo(t);
  return !s || s.state === "" || !s.children || s.children.forEach((o) => {
    r[o] = n, G_(e, o, n, r);
  }), s;
}
function X_(e, t, n, r, s) {
  var c;
  const o = e.getNestedRowInfo(t);
  if (!o || o.state === "")
    return;
  ((c = o.children) == null ? void 0 : c.every((f) => {
    const p = !!(r[f] !== void 0 ? r[f] : s[f]);
    return n === p;
  })) && (r[t] = n), o.parent && X_(e, o.parent, n, r, s);
}
const Jg = {
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
        const a = G_(this, s, o, r);
        a != null && a.parent && X_(this, a.parent, o, r, n);
      }), r;
    }
  },
  when: (e) => !!e.nested,
  data() {
    return { nestedMap: /* @__PURE__ */ new Map() };
  },
  methods: {
    toggleRow: Kg,
    isAllCollapsed: V_,
    getNestedRowInfo: ms
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
    return e = e.filter((t) => this.getNestedRowInfo(t.id).state !== "hidden"), q_(this.data.nestedMap), e.sort((t, n) => {
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
}, Zg = Kn(Jg);
const Qg = {
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
        return typeof r == "function" ? e[0] = s === "html" ? { html: r(o) } : r(o) : s === "datetime" ? e[0] = _s(o, r) : s === "html" ? e[0] = { html: Ee(r, o) } : e[0] = Ee(r, o), e;
      }
    }
  }
}, ey = Kn(Qg, { buildIn: !0 }), ty = {
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
}, ny = Kn(ty, { buildIn: !0 }), ry = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  colHover: zg,
  checkable: Xg,
  NestedRowState: Y_,
  nested: Zg,
  rich: ey,
  sortType: ny
}, Symbol.toStringTag, { value: "Module" }));
class er extends Ke {
}
N(er, "NAME", "dtable"), N(er, "Component", hs), N(er, "definePlugin", Kn), N(er, "removePlugin", L_), N(er, "plugins", ry);
var rt, ke;
class oy {
  constructor(t) {
    L(this, rt, void 0);
    L(this, ke, void 0);
    H(this, rt, t), H(this, ke, document.querySelector(t.getAttribute("data-target")) || document.querySelector(t.getAttribute("data-tab")) || document.querySelector(t.getAttribute("href")));
  }
  showTarget() {
    this.addActive(w(this, rt).parentElement.parentElement, w(this, rt).parentElement), this.addActive(w(this, ke).parentElement, w(this, ke)), w(this, ke).dispatchEvent(new CustomEvent("show.zui3.tab"));
  }
  show() {
    H(this, ke, w(this, rt)), this.addActive(w(this, ke).parentElement, w(this, ke)), H(this, rt, document.querySelector(`[href='#${w(this, ke).getAttribute("id")}']`) || document.querySelector(`[data-tab='#${w(this, ke).getAttribute("id")}']`) || document.querySelector(`[data-target='#${w(this, ke).getAttribute("id")}']`)), this.addActive(w(this, rt).parentElement.parentElement, w(this, rt).parentElement);
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
rt = new WeakMap(), ke = new WeakMap();
document.addEventListener("click", function(e) {
  e.target instanceof HTMLElement && (e.target.dataset.toggle === "tab" || e.target.getAttribute("data-tab")) && (e.preventDefault(), new oy(e.target).showTarget());
});
export {
  Oa as ActionMenu,
  Aa as ActionMenuNested,
  ll as Avatar,
  cl as BtnGroup,
  Ra as Button,
  xe as ContextMenu,
  er as DTable,
  ot as Datetimepicker,
  we as Dropdown,
  ys as EventBus,
  Ha as Menu,
  Up as Messager,
  $l as Nav,
  oy as NavTabs,
  zl as Pager,
  el as ProgressCircle,
  _t as TIME_DAY,
  Yl as Toolbar,
  it as Tooltip,
  cp as addI18nMap,
  ly as browser,
  Fl as calculateTimestamp,
  ay as convertBytes,
  Ae as createDate,
  sy as formatBytes,
  _s as formatDate,
  dy as formatDateSpan,
  Ee as formatString,
  ap as getLangCode,
  hy as getTimeBeforeDesc,
  io as i18n,
  py as isDBY,
  Xi as isObject,
  lo as isSameDay,
  gm as isSameMonth,
  cy as isSameWeek,
  Ul as isSameYear,
  fy as isToday,
  _y as isTomorrow,
  uy as isYesterday,
  es as mergeDeep,
  Qi as nativeEvents,
  lp as setLangCode,
  Zp as store
};
