var xm = Object.defineProperty;
var Sm = (e, t, n) => t in e ? xm(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var N = (e, t, n) => (Sm(e, typeof t != "symbol" ? t + "" : t, n), n), _l = (e, t, n) => {
  if (!t.has(e))
    throw TypeError("Cannot " + n);
};
var w = (e, t, n) => (_l(e, t, "read from private field"), n ? n.call(e) : t.get(e)), P = (e, t, n) => {
  if (t.has(e))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(e) : t.set(e, n);
}, B = (e, t, n, r) => (_l(e, t, "write to private field"), r ? r.call(e, n) : t.set(e, n), n), Qc = (e, t, n, r) => ({
  set _(s) {
    B(e, t, s, n);
  },
  get _() {
    return w(e, t, r);
  }
}), Q = (e, t, n) => (_l(e, t, "access private method"), n);
var za, ae, T_, D_, Kr, ef, hs = {}, L_ = [], Cm = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function sn(e, t) {
  for (var n in t)
    e[n] = t[n];
  return e;
}
function N_(e) {
  var t = e.parentNode;
  t && t.removeChild(e);
}
function Va(e, t, n) {
  var r, s, o, a = {};
  for (o in t)
    o == "key" ? r = t[o] : o == "ref" ? s = t[o] : a[o] = t[o];
  if (arguments.length > 2 && (a.children = arguments.length > 3 ? za.call(arguments, 2) : n), typeof e == "function" && e.defaultProps != null)
    for (o in e.defaultProps)
      a[o] === void 0 && (a[o] = e.defaultProps[o]);
  return Bi(e, a, r, s, null);
}
function Bi(e, t, n, r, s) {
  var o = { type: e, props: t, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: s == null ? ++T_ : s };
  return s == null && ae.vnode != null && ae.vnode(o), o;
}
function Em() {
  return { current: null };
}
function Ya(e) {
  return e.children;
}
function ji(e, t) {
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
function P_(e) {
  var t, n;
  if ((e = e.__) != null && e.__c != null) {
    for (e.__e = e.__c.base = null, t = 0; t < e.__k.length; t++)
      if ((n = e.__k[t]) != null && n.__e != null) {
        e.__e = e.__c.base = n.__e;
        break;
      }
    return P_(e);
  }
}
function tf(e) {
  (!e.__d && (e.__d = !0) && Kr.push(e) && !vs.__r++ || ef !== ae.debounceRendering) && ((ef = ae.debounceRendering) || setTimeout)(vs);
}
function vs() {
  for (var e; vs.__r = Kr.length; )
    e = Kr.sort(function(t, n) {
      return t.__v.__b - n.__v.__b;
    }), Kr = [], e.some(function(t) {
      var n, r, s, o, a, c;
      t.__d && (a = (o = (n = t).__v).__e, (c = n.__P) && (r = [], (s = sn({}, o)).__v = o.__v + 1, Bl(c, o, s, n.__n, c.ownerSVGElement !== void 0, o.__h != null ? [a] : null, r, a == null ? Lo(o) : a, o.__h), I_(r, o), o.__e != a && P_(o)));
    });
}
function R_(e, t, n, r, s, o, a, c, f, p) {
  var i, d, u, l, _, g, h, v = r && r.__k || L_, m = v.length;
  for (n.__k = [], i = 0; i < t.length; i++)
    if ((l = n.__k[i] = (l = t[i]) == null || typeof l == "boolean" ? null : typeof l == "string" || typeof l == "number" || typeof l == "bigint" ? Bi(null, l, null, null, l) : Array.isArray(l) ? Bi(Ya, { children: l }, null, null, null) : l.__b > 0 ? Bi(l.type, l.props, l.key, l.ref ? l.ref : null, l.__v) : l) != null) {
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
      Bl(e, l, u = u || hs, s, o, a, c, f, p), _ = l.__e, (d = l.ref) && u.ref != d && (h || (h = []), u.ref && h.push(u.ref, null, l), h.push(d, l.__c || _, l)), _ != null ? (g == null && (g = _), typeof l.type == "function" && l.__k === u.__k ? l.__d = f = H_(l, f, e) : f = W_(e, l, u, v, _, f), typeof n.type == "function" && (n.__d = f)) : f && u.__e == f && f.parentNode != e && (f = Lo(u));
    }
  for (n.__e = g, i = m; i--; )
    v[i] != null && B_(v[i], v[i]);
  if (h)
    for (i = 0; i < h.length; i++)
      U_(h[i], h[++i], h[++i]);
}
function H_(e, t, n) {
  for (var r, s = e.__k, o = 0; s && o < s.length; o++)
    (r = s[o]) && (r.__ = e, t = typeof r.type == "function" ? H_(r, t, n) : W_(n, r, r, s, r.__e, t));
  return t;
}
function W_(e, t, n, r, s, o) {
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
function Om(e, t, n, r, s) {
  var o;
  for (o in n)
    o === "children" || o === "key" || o in t || ms(e, o, null, n[o], r);
  for (o in t)
    s && typeof t[o] != "function" || o === "children" || o === "key" || o === "value" || o === "checked" || n[o] === t[o] || ms(e, o, t[o], n[o], r);
}
function nf(e, t, n) {
  t[0] === "-" ? e.setProperty(t, n) : e[t] = n == null ? "" : typeof n != "number" || Cm.test(t) ? n : n + "px";
}
function ms(e, t, n, r, s) {
  var o;
  e:
    if (t === "style")
      if (typeof n == "string")
        e.style.cssText = n;
      else {
        if (typeof r == "string" && (e.style.cssText = r = ""), r)
          for (t in r)
            n && t in n || nf(e.style, t, "");
        if (n)
          for (t in n)
            r && n[t] === r[t] || nf(e.style, t, n[t]);
      }
    else if (t[0] === "o" && t[1] === "n")
      o = t !== (t = t.replace(/Capture$/, "")), t = t.toLowerCase() in e ? t.toLowerCase().slice(2) : t.slice(2), e.l || (e.l = {}), e.l[t + o] = n, n ? r || e.addEventListener(t, o ? of : rf, o) : e.removeEventListener(t, o ? of : rf, o);
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
function rf(e) {
  this.l[e.type + !1](ae.event ? ae.event(e) : e);
}
function of(e) {
  this.l[e.type + !0](ae.event ? ae.event(e) : e);
}
function Bl(e, t, n, r, s, o, a, c, f) {
  var p, i, d, u, l, _, g, h, v, m, k, b, C, $, S, y = t.type;
  if (t.constructor !== void 0)
    return null;
  n.__h != null && (f = n.__h, c = t.__e = n.__e, t.__h = null, o = [c]), (p = ae.__b) && p(t);
  try {
    e:
      if (typeof y == "function") {
        if (h = t.props, v = (p = y.contextType) && r[p.__c], m = p ? v ? v.props.value : p.__ : r, n.__c ? g = (i = t.__c = n.__c).__ = i.__E : ("prototype" in y && y.prototype.render ? t.__c = i = new y(h, m) : (t.__c = i = new ji(h, m), i.constructor = y, i.render = Mm), v && v.sub(i), i.props = h, i.state || (i.state = {}), i.context = m, i.__n = r, d = i.__d = !0, i.__h = [], i._sb = []), i.__s == null && (i.__s = i.state), y.getDerivedStateFromProps != null && (i.__s == i.state && (i.__s = sn({}, i.__s)), sn(i.__s, y.getDerivedStateFromProps(h, i.__s))), u = i.props, l = i.state, d)
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
        if (i.context = m, i.props = h, i.__v = t, i.__P = e, b = ae.__r, C = 0, "prototype" in y && y.prototype.render) {
          for (i.state = i.__s, i.__d = !1, b && b(t), p = i.render(i.props, i.state, i.context), $ = 0; $ < i._sb.length; $++)
            i.__h.push(i._sb[$]);
          i._sb = [];
        } else
          do
            i.__d = !1, b && b(t), p = i.render(i.props, i.state, i.context), i.state = i.__s;
          while (i.__d && ++C < 25);
        i.state = i.__s, i.getChildContext != null && (r = sn(sn({}, r), i.getChildContext())), d || i.getSnapshotBeforeUpdate == null || (_ = i.getSnapshotBeforeUpdate(u, l)), S = p != null && p.type === Ya && p.key == null ? p.props.children : p, R_(e, Array.isArray(S) ? S : [S], t, n, r, s, o, a, c, f), i.base = t.__e, t.__h = null, i.__h.length && a.push(i), g && (i.__E = i.__ = null), i.__e = !1;
      } else
        o == null && t.__v === n.__v ? (t.__k = n.__k, t.__e = n.__e) : t.__e = Am(n.__e, t, n, r, s, o, a, f);
    (p = ae.diffed) && p(t);
  } catch (x) {
    t.__v = null, (f || o != null) && (t.__e = c, t.__h = !!f, o[o.indexOf(c)] = null), ae.__e(x, t, n);
  }
}
function I_(e, t) {
  ae.__c && ae.__c(t, e), e.some(function(n) {
    try {
      e = n.__h, n.__h = [], e.some(function(r) {
        r.call(n);
      });
    } catch (r) {
      ae.__e(r, n.__v);
    }
  });
}
function Am(e, t, n, r, s, o, a, c) {
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
    if (o = o && za.call(e.childNodes), p = (d = n.props || hs).dangerouslySetInnerHTML, i = u.dangerouslySetInnerHTML, !c) {
      if (o != null)
        for (d = {}, _ = 0; _ < e.attributes.length; _++)
          d[e.attributes[_].name] = e.attributes[_].value;
      (i || p) && (i && (p && i.__html == p.__html || i.__html === e.innerHTML) || (e.innerHTML = i && i.__html || ""));
    }
    if (Om(e, u, d, s, c), i)
      t.__k = [];
    else if (_ = t.props.children, R_(e, Array.isArray(_) ? _ : [_], t, n, r, s && l !== "foreignObject", o, a, o ? o[0] : n.__k && Lo(n, 0), c), o != null)
      for (_ = o.length; _--; )
        o[_] != null && N_(o[_]);
    c || ("value" in u && (_ = u.value) !== void 0 && (_ !== e.value || l === "progress" && !_ || l === "option" && _ !== d.value) && ms(e, "value", _, d.value, !1), "checked" in u && (_ = u.checked) !== void 0 && _ !== e.checked && ms(e, "checked", _, d.checked, !1));
  }
  return e;
}
function U_(e, t, n) {
  try {
    typeof e == "function" ? e(t) : e.current = t;
  } catch (r) {
    ae.__e(r, n);
  }
}
function B_(e, t, n) {
  var r, s;
  if (ae.unmount && ae.unmount(e), (r = e.ref) && (r.current && r.current !== e.__e || U_(r, null, t)), (r = e.__c) != null) {
    if (r.componentWillUnmount)
      try {
        r.componentWillUnmount();
      } catch (o) {
        ae.__e(o, t);
      }
    r.base = r.__P = null, e.__c = void 0;
  }
  if (r = e.__k)
    for (s = 0; s < r.length; s++)
      r[s] && B_(r[s], t, n || typeof e.type != "function");
  n || e.__e == null || N_(e.__e), e.__ = e.__e = e.__d = void 0;
}
function Mm(e, t, n) {
  return this.constructor(e, n);
}
function Tm(e, t, n) {
  var r, s, o;
  ae.__ && ae.__(e, t), s = (r = typeof n == "function") ? null : n && n.__k || t.__k, o = [], Bl(t, e = (!r && n || t).__k = Va(Ya, null, [e]), s || hs, hs, t.ownerSVGElement !== void 0, !r && n ? [n] : s ? null : t.firstChild ? za.call(t.childNodes) : null, o, !r && n ? n : s ? s.__e : t.firstChild, r), I_(o, e);
}
za = L_.slice, ae = { __e: function(e, t, n, r) {
  for (var s, o, a; t = t.__; )
    if ((s = t.__c) && !s.__)
      try {
        if ((o = s.constructor) && o.getDerivedStateFromError != null && (s.setState(o.getDerivedStateFromError(e)), a = s.__d), s.componentDidCatch != null && (s.componentDidCatch(e, r || {}), a = s.__d), a)
          return s.__E = s;
      } catch (c) {
        e = c;
      }
  throw e;
} }, T_ = 0, D_ = function(e) {
  return e != null && e.constructor === void 0;
}, ji.prototype.setState = function(e, t) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = sn({}, this.state), typeof e == "function" && (e = e(sn({}, n), this.props)), e && sn(n, e), e != null && this.__v && (t && this._sb.push(t), tf(this));
}, ji.prototype.forceUpdate = function(e) {
  this.__v && (this.__e = !0, e && this.__h.push(e), tf(this));
}, ji.prototype.render = Ya, Kr = [], vs.__r = 0;
var Ut;
class Dm {
  constructor(t = "") {
    P(this, Ut, void 0);
    typeof t == "object" ? B(this, Ut, t) : B(this, Ut, document.appendChild(document.createComment(t)));
  }
  on(t, n, r) {
    w(this, Ut).addEventListener(t, n, r);
  }
  once(t, n, r) {
    w(this, Ut).addEventListener(t, n, { once: !0, ...r });
  }
  off(t, n, r) {
    w(this, Ut).removeEventListener(t, n, r);
  }
  emit(t) {
    return w(this, Ut).dispatchEvent(t), t;
  }
}
Ut = new WeakMap();
const ml = /* @__PURE__ */ new Set([
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
class jl extends Dm {
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
    return typeof t == "string" && (ml.has(t) ? (t = new Event(t), Object.assign(t, { detail: n })) : t = new CustomEvent(t, { detail: n })), super.emit(jl.createEvent(t, n));
  }
  static createEvent(t, n) {
    return typeof t == "string" && (ml.has(t) ? (t = new Event(t), Object.assign(t, { detail: n })) : t = new CustomEvent(t, { detail: n })), t;
  }
}
var Bt, ri, Dn, Vr;
class sf extends jl {
  constructor(n = "", r) {
    super(n);
    P(this, Dn);
    P(this, Bt, /* @__PURE__ */ new Map());
    P(this, ri, void 0);
    B(this, ri, r == null ? void 0 : r.customEventSuffix);
  }
  on(n, r, s) {
    n = Q(this, Dn, Vr).call(this, n), super.on(n, r, s), w(this, Bt).set(r, [n, s]);
  }
  off(n, r, s) {
    n = Q(this, Dn, Vr).call(this, n), super.off(n, r, s), w(this, Bt).delete(r);
  }
  once(n, r, s) {
    n = Q(this, Dn, Vr).call(this, n);
    const o = (a) => {
      r(a), w(this, Bt).delete(o);
    };
    super.once(n, o, s), w(this, Bt).set(o, [n, s]);
  }
  emit(n, r) {
    return typeof n == "string" && (n = Q(this, Dn, Vr).call(this, n)), super.emit(n, r);
  }
  offAll() {
    Array.from(w(this, Bt).entries()).forEach(([n, [r, s]]) => {
      super.off(r, n, s);
    }), w(this, Bt).clear();
  }
}
Bt = new WeakMap(), ri = new WeakMap(), Dn = new WeakSet(), Vr = function(n) {
  const r = w(this, ri);
  return ml.has(n) || typeof r != "string" || n.endsWith(r) ? n : `${n}${r}`;
};
function Lm(e, t) {
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
function Nm(e, t, n) {
  const r = Lm(e, t), s = r[r.length - 1];
  return s === void 0 ? n : s;
}
function pl(e) {
  return !!e && typeof e == "object" && !Array.isArray(e);
}
function gl(e, ...t) {
  if (!t.length)
    return e;
  const n = t.shift();
  if (pl(e) && pl(n))
    for (const r in n)
      pl(n[r]) ? (e[r] || Object.assign(e, { [r]: {} }), gl(e[r], n[r])) : Object.assign(e, { [r]: n[r] });
  return gl(e, ...t);
}
function He(e, ...t) {
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
var Fl = /* @__PURE__ */ ((e) => (e[e.B = 1] = "B", e[e.KB = 1024] = "KB", e[e.MB = 1048576] = "MB", e[e.GB = 1073741824] = "GB", e[e.TB = 1099511627776] = "TB", e))(Fl || {});
function wx(e, t = 2, n = "") {
  return Number.isNaN(e) ? "?KB" : (n || (e < 1024 ? n = "B" : e < 1048576 ? n = "KB" : e < 1073741824 ? n = "MB" : e < 1099511627776 ? n = "GB" : n = "TB"), (e / Fl[n]).toFixed(t) + n);
}
const $x = (e) => {
  const t = /^[0-9]*(B|KB|MB|GB|TB)$/;
  e = e.toUpperCase();
  const n = e.match(t);
  if (!n)
    return 0;
  const r = n[1];
  return e = e.replace(r, ""), Number.parseInt(e, 10) * Fl[r];
};
var A_, M_;
let zl = (M_ = (A_ = document.documentElement.getAttribute("lang")) == null ? void 0 : A_.toLowerCase()) != null ? M_ : "zh_cn", Zt;
function Pm() {
  return zl;
}
function Rm(e) {
  zl = e.toLowerCase();
}
function Hm(e, t) {
  Zt || (Zt = {}), typeof e == "string" && (e = { [e]: t != null ? t : {} }), gl(Zt, e);
}
function Ei(e, t, n, r, s, o) {
  Array.isArray(e) ? Zt && e.unshift(Zt) : e = Zt ? [Zt, e] : [e], typeof n == "string" && (o = s, s = r, r = n, n = void 0);
  const a = s || zl;
  let c;
  for (const f of e) {
    if (!f)
      continue;
    const p = f[a];
    if (!p)
      continue;
    const i = o && f === Zt ? `${o}.${t}` : t;
    if (c = Nm(p, i), c !== void 0)
      break;
  }
  return c === void 0 ? r : n ? He(c, ...Array.isArray(n) ? n : [n]) : c;
}
Ei.addLang = Hm;
Ei.getCode = Pm;
Ei.setCode = Rm;
function Wm(e) {
  return Object.fromEntries(Object.entries(e).map(([t, n]) => {
    if (typeof n == "string")
      try {
        n = JSON.parse(n);
      } catch {
      }
    return [t, n];
  }));
}
var jt, Zn, Ne;
class Xe {
  constructor(t, n) {
    P(this, jt, void 0);
    P(this, Zn, void 0);
    P(this, Ne, void 0);
    t = typeof t == "string" ? document.querySelector(t) : t, this.constructor.EVENTS && B(this, Ne, new sf(t, { customEventSuffix: `.${this.constructor.KEY}` })), B(this, jt, { ...this.constructor.DEFAULT }), this.setOptions({ ...t instanceof HTMLElement ? Wm(t.dataset) : null, ...n }), this.constructor.all.set(t, this), B(this, Zn, t), this.init(), requestAnimationFrame(() => {
      var r;
      this.afterInit(), (r = w(this, Ne)) == null || r.emit("inited", this);
    });
  }
  get options() {
    return w(this, jt);
  }
  get element() {
    return w(this, Zn);
  }
  get events() {
    return w(this, Ne);
  }
  init() {
  }
  afterInit() {
  }
  setOptions(t) {
    return t && Object.assign(w(this, jt), t), w(this, jt);
  }
  render(t) {
    this.setOptions(t);
  }
  destroy() {
    this.constructor.all.delete(w(this, Zn)), w(this, Ne) && (w(this, Ne).emit("destroyed", this), w(this, Ne).offAll());
  }
  on(t, n, r) {
    var s;
    (s = w(this, Ne)) == null || s.on(t, n, r);
  }
  once(t, n, r) {
    var s;
    (s = w(this, Ne)) == null || s.once(t, n, r);
  }
  off(t, n, r) {
    var s;
    (s = w(this, Ne)) == null || s.off(t, n, r);
  }
  emit(t, n) {
    var a;
    let r = sf.createEvent(t, n);
    const s = `on${r.type.replace(`.${this.constructor.KEY}`, "")}`, o = w(this, jt)[s];
    return o && o(r) === !1 && (r.preventDefault(), r.stopPropagation()), r = (a = w(this, Ne)) == null ? void 0 : a.emit(r), r;
  }
  i18n(t, n, r) {
    var s;
    return (s = Ei(w(this, jt).i18n, t, n, r, this.options.lang, this.constructor.NAME)) != null ? s : `{i18n:${t}}`;
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
jt = new WeakMap(), Zn = new WeakMap(), Ne = new WeakMap(), N(Xe, "EVENTS", !1), N(Xe, "DEFAULT", {}), N(Xe, "allComponents", /* @__PURE__ */ new Map());
class Ve extends Xe {
  constructor() {
    super(...arguments);
    N(this, "ref", Em());
  }
  get $() {
    return this.ref.current;
  }
  init() {
    requestAnimationFrame(() => this.render());
  }
  render(n) {
    const r = this.constructor.Component;
    Tm(/* @__PURE__ */ Va(r, {
      ref: this.ref,
      ...this.setOptions(n)
    }), this.element);
  }
}
var Vl, he, j_, F_, Zr, af, z_ = {}, V_ = [], Im = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function an(e, t) {
  for (var n in t)
    e[n] = t[n];
  return e;
}
function Y_(e) {
  var t = e.parentNode;
  t && t.removeChild(e);
}
function Ce(e, t, n) {
  var r, s, o, a = {};
  for (o in t)
    o == "key" ? r = t[o] : o == "ref" ? s = t[o] : a[o] = t[o];
  if (arguments.length > 2 && (a.children = arguments.length > 3 ? Vl.call(arguments, 2) : n), typeof e == "function" && e.defaultProps != null)
    for (o in e.defaultProps)
      a[o] === void 0 && (a[o] = e.defaultProps[o]);
  return Fi(e, a, r, s, null);
}
function Fi(e, t, n, r, s) {
  var o = { type: e, props: t, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: s == null ? ++j_ : s };
  return s == null && he.vnode != null && he.vnode(o), o;
}
function Um() {
  return { current: null };
}
function Yl(e) {
  return e.children;
}
function Jr(e, t) {
  this.props = e, this.context = t;
}
function No(e, t) {
  if (t == null)
    return e.__ ? No(e.__, e.__.__k.indexOf(e) + 1) : null;
  for (var n; t < e.__k.length; t++)
    if ((n = e.__k[t]) != null && n.__e != null)
      return n.__e;
  return typeof e.type == "function" ? No(e) : null;
}
function q_(e) {
  var t, n;
  if ((e = e.__) != null && e.__c != null) {
    for (e.__e = e.__c.base = null, t = 0; t < e.__k.length; t++)
      if ((n = e.__k[t]) != null && n.__e != null) {
        e.__e = e.__c.base = n.__e;
        break;
      }
    return q_(e);
  }
}
function lf(e) {
  (!e.__d && (e.__d = !0) && Zr.push(e) && !gs.__r++ || af !== he.debounceRendering) && ((af = he.debounceRendering) || setTimeout)(gs);
}
function gs() {
  for (var e; gs.__r = Zr.length; )
    e = Zr.sort(function(t, n) {
      return t.__v.__b - n.__v.__b;
    }), Zr = [], e.some(function(t) {
      var n, r, s, o, a, c;
      t.__d && (a = (o = (n = t).__v).__e, (c = n.__P) && (r = [], (s = an({}, o)).__v = o.__v + 1, Z_(c, o, s, n.__n, c.ownerSVGElement !== void 0, o.__h != null ? [a] : null, r, a == null ? No(o) : a, o.__h), jm(r, o), o.__e != a && q_(o)));
    });
}
function G_(e, t, n, r, s, o, a, c, f, p) {
  var i, d, u, l, _, g, h, v = r && r.__k || V_, m = v.length;
  for (n.__k = [], i = 0; i < t.length; i++)
    if ((l = n.__k[i] = (l = t[i]) == null || typeof l == "boolean" ? null : typeof l == "string" || typeof l == "number" || typeof l == "bigint" ? Fi(null, l, null, null, l) : Array.isArray(l) ? Fi(Yl, { children: l }, null, null, null) : l.__b > 0 ? Fi(l.type, l.props, l.key, l.ref ? l.ref : null, l.__v) : l) != null) {
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
      Z_(e, l, u = u || z_, s, o, a, c, f, p), _ = l.__e, (d = l.ref) && u.ref != d && (h || (h = []), u.ref && h.push(u.ref, null, l), h.push(d, l.__c || _, l)), _ != null ? (g == null && (g = _), typeof l.type == "function" && l.__k === u.__k ? l.__d = f = X_(l, f, e) : f = K_(e, l, u, v, _, f), typeof n.type == "function" && (n.__d = f)) : f && u.__e == f && f.parentNode != e && (f = No(u));
    }
  for (n.__e = g, i = m; i--; )
    v[i] != null && Q_(v[i], v[i]);
  if (h)
    for (i = 0; i < h.length; i++)
      J_(h[i], h[++i], h[++i]);
}
function X_(e, t, n) {
  for (var r, s = e.__k, o = 0; s && o < s.length; o++)
    (r = s[o]) && (r.__ = e, t = typeof r.type == "function" ? X_(r, t, n) : K_(n, r, r, s, r.__e, t));
  return t;
}
function K_(e, t, n, r, s, o) {
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
function Bm(e, t, n, r, s) {
  var o;
  for (o in n)
    o === "children" || o === "key" || o in t || ys(e, o, null, n[o], r);
  for (o in t)
    s && typeof t[o] != "function" || o === "children" || o === "key" || o === "value" || o === "checked" || n[o] === t[o] || ys(e, o, t[o], n[o], r);
}
function cf(e, t, n) {
  t[0] === "-" ? e.setProperty(t, n) : e[t] = n == null ? "" : typeof n != "number" || Im.test(t) ? n : n + "px";
}
function ys(e, t, n, r, s) {
  var o;
  e:
    if (t === "style")
      if (typeof n == "string")
        e.style.cssText = n;
      else {
        if (typeof r == "string" && (e.style.cssText = r = ""), r)
          for (t in r)
            n && t in n || cf(e.style, t, "");
        if (n)
          for (t in n)
            r && n[t] === r[t] || cf(e.style, t, n[t]);
      }
    else if (t[0] === "o" && t[1] === "n")
      o = t !== (t = t.replace(/Capture$/, "")), t = t.toLowerCase() in e ? t.toLowerCase().slice(2) : t.slice(2), e.l || (e.l = {}), e.l[t + o] = n, n ? r || e.addEventListener(t, o ? uf : ff, o) : e.removeEventListener(t, o ? uf : ff, o);
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
function ff(e) {
  this.l[e.type + !1](he.event ? he.event(e) : e);
}
function uf(e) {
  this.l[e.type + !0](he.event ? he.event(e) : e);
}
function Z_(e, t, n, r, s, o, a, c, f) {
  var p, i, d, u, l, _, g, h, v, m, k, b, C, $, S, y = t.type;
  if (t.constructor !== void 0)
    return null;
  n.__h != null && (f = n.__h, c = t.__e = n.__e, t.__h = null, o = [c]), (p = he.__b) && p(t);
  try {
    e:
      if (typeof y == "function") {
        if (h = t.props, v = (p = y.contextType) && r[p.__c], m = p ? v ? v.props.value : p.__ : r, n.__c ? g = (i = t.__c = n.__c).__ = i.__E : ("prototype" in y && y.prototype.render ? t.__c = i = new y(h, m) : (t.__c = i = new Jr(h, m), i.constructor = y, i.render = zm), v && v.sub(i), i.props = h, i.state || (i.state = {}), i.context = m, i.__n = r, d = i.__d = !0, i.__h = [], i._sb = []), i.__s == null && (i.__s = i.state), y.getDerivedStateFromProps != null && (i.__s == i.state && (i.__s = an({}, i.__s)), an(i.__s, y.getDerivedStateFromProps(h, i.__s))), u = i.props, l = i.state, d)
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
        if (i.context = m, i.props = h, i.__v = t, i.__P = e, b = he.__r, C = 0, "prototype" in y && y.prototype.render) {
          for (i.state = i.__s, i.__d = !1, b && b(t), p = i.render(i.props, i.state, i.context), $ = 0; $ < i._sb.length; $++)
            i.__h.push(i._sb[$]);
          i._sb = [];
        } else
          do
            i.__d = !1, b && b(t), p = i.render(i.props, i.state, i.context), i.state = i.__s;
          while (i.__d && ++C < 25);
        i.state = i.__s, i.getChildContext != null && (r = an(an({}, r), i.getChildContext())), d || i.getSnapshotBeforeUpdate == null || (_ = i.getSnapshotBeforeUpdate(u, l)), S = p != null && p.type === Yl && p.key == null ? p.props.children : p, G_(e, Array.isArray(S) ? S : [S], t, n, r, s, o, a, c, f), i.base = t.__e, t.__h = null, i.__h.length && a.push(i), g && (i.__E = i.__ = null), i.__e = !1;
      } else
        o == null && t.__v === n.__v ? (t.__k = n.__k, t.__e = n.__e) : t.__e = Fm(n.__e, t, n, r, s, o, a, f);
    (p = he.diffed) && p(t);
  } catch (x) {
    t.__v = null, (f || o != null) && (t.__e = c, t.__h = !!f, o[o.indexOf(c)] = null), he.__e(x, t, n);
  }
}
function jm(e, t) {
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
function Fm(e, t, n, r, s, o, a, c) {
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
    if (o = o && Vl.call(e.childNodes), p = (d = n.props || z_).dangerouslySetInnerHTML, i = u.dangerouslySetInnerHTML, !c) {
      if (o != null)
        for (d = {}, _ = 0; _ < e.attributes.length; _++)
          d[e.attributes[_].name] = e.attributes[_].value;
      (i || p) && (i && (p && i.__html == p.__html || i.__html === e.innerHTML) || (e.innerHTML = i && i.__html || ""));
    }
    if (Bm(e, u, d, s, c), i)
      t.__k = [];
    else if (_ = t.props.children, G_(e, Array.isArray(_) ? _ : [_], t, n, r, s && l !== "foreignObject", o, a, o ? o[0] : n.__k && No(n, 0), c), o != null)
      for (_ = o.length; _--; )
        o[_] != null && Y_(o[_]);
    c || ("value" in u && (_ = u.value) !== void 0 && (_ !== e.value || l === "progress" && !_ || l === "option" && _ !== d.value) && ys(e, "value", _, d.value, !1), "checked" in u && (_ = u.checked) !== void 0 && _ !== e.checked && ys(e, "checked", _, d.checked, !1));
  }
  return e;
}
function J_(e, t, n) {
  try {
    typeof e == "function" ? e(t) : e.current = t;
  } catch (r) {
    he.__e(r, n);
  }
}
function Q_(e, t, n) {
  var r, s;
  if (he.unmount && he.unmount(e), (r = e.ref) && (r.current && r.current !== e.__e || J_(r, null, t)), (r = e.__c) != null) {
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
      r[s] && Q_(r[s], t, n || typeof e.type != "function");
  n || e.__e == null || Y_(e.__e), e.__ = e.__e = e.__d = void 0;
}
function zm(e, t, n) {
  return this.constructor(e, n);
}
Vl = V_.slice, he = { __e: function(e, t, n, r) {
  for (var s, o, a; t = t.__; )
    if ((s = t.__c) && !s.__)
      try {
        if ((o = s.constructor) && o.getDerivedStateFromError != null && (s.setState(o.getDerivedStateFromError(e)), a = s.__d), s.componentDidCatch != null && (s.componentDidCatch(e, r || {}), a = s.__d), a)
          return s.__E = s;
      } catch (c) {
        e = c;
      }
  throw e;
} }, j_ = 0, F_ = function(e) {
  return e != null && e.constructor === void 0;
}, Jr.prototype.setState = function(e, t) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = an({}, this.state), typeof e == "function" && (e = e(an({}, n), this.props)), e && an(n, e), e != null && this.__v && (t && this._sb.push(t), lf(this));
}, Jr.prototype.forceUpdate = function(e) {
  this.__v && (this.__e = !0, e && this.__h.push(e), lf(this));
}, Jr.prototype.render = Yl, Zr = [], gs.__r = 0;
function qa(...e) {
  const t = [], n = /* @__PURE__ */ new Map(), r = (s, o) => {
    if (Array.isArray(s) && (o = s[1], s = s[0]), !s.length)
      return;
    const a = n.get(s);
    typeof a == "number" ? t[a][1] = !!o : (n.set(s, t.length), t.push([s, !!o]));
  };
  return e.forEach((s) => {
    typeof s == "function" && (s = s()), Array.isArray(s) ? qa(...s).forEach(r) : s && typeof s == "object" ? Object.entries(s).forEach(r) : typeof s == "string" && s.split(" ").forEach((o) => r(o, !0));
  }), t.sort((s, o) => (n.get(s[0]) || 0) - (n.get(o[0]) || 0));
}
const z = (...e) => qa(...e).reduce((t, [n, r]) => (r && t.push(n), t), []).join(" ");
function Vm({
  component: e = "div",
  className: t,
  children: n,
  style: r,
  attrs: s
}) {
  return Ce(e, {
    className: z(t),
    style: r,
    ...s
  }, n);
}
function ep({
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
    typeof c == "string" ? /* @__PURE__ */ Ce("i", {
      class: `icon ${c}`
    }) : c,
    /* @__PURE__ */ Ce("span", {
      className: "text"
    }, f),
    typeof n == "function" ? n() : n,
    typeof i == "string" ? /* @__PURE__ */ Ce("i", {
      class: `icon ${i}`
    }) : i
  ];
  return Ce(e, {
    className: z(t, { disabled: o, active: a }),
    title: d,
    [e === "a" ? "href" : "data-url"]: s,
    [e === "a" ? "target" : "data-target"]: p,
    style: u,
    onClick: l,
    ...r
  }, ..._);
}
function Ym({
  component: e = "div",
  className: t,
  text: n,
  attrs: r,
  children: s,
  style: o,
  onClick: a
}) {
  return Ce(e, {
    className: z(t),
    style: o,
    onClick: a,
    ...r
  }, n, typeof s == "function" ? s() : s);
}
function qm({
  component: e = "div",
  className: t,
  style: n,
  space: r,
  flex: s,
  attrs: o,
  onClick: a,
  children: c
}) {
  return Ce(e, {
    className: z(t),
    style: { width: r, height: r, flex: s, ...n },
    onClick: a,
    ...o
  }, c);
}
function Gm(e) {
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
      m != null && (typeof m == "object" && !D_(m) && ("html" in m || "__html" in m || "className" in m || "style" in m || "attrs" in m || "children" in m) ? m.html ? l.push(
        /* @__PURE__ */ Va("div", {
          className: z(m.className),
          style: m.style,
          dangerouslySetInnerHTML: { __html: m.html },
          ...(k = m.attrs) != null ? k : {}
        })
      ) : m.__html ? _.push(m.__html) : (m.style && Object.assign(u, m.style), m.className && d.push(m.className), m.children && l.push(m.children), m.attrs && Object.assign(i, m.attrs)) : l.push(m));
    });
  }), _.length && Object.assign(i, { dangerouslySetInnerHTML: { __html: _ } }), [{
    className: z(d),
    style: u,
    ...i
  }, l];
}
function yl({
  tag: e = "div",
  ...t
}) {
  const [n, r] = Gm(t);
  return Va(e, n, ...r);
}
function Xm(e) {
  return /* @__PURE__ */ Ce(yl, {
    ...e
  });
}
function tp({
  component: e = "div",
  className: t,
  children: n,
  style: r,
  attrs: s
}) {
  return Ce(e, {
    className: z(t),
    style: r,
    ...s
  }, n);
}
const fa = class extends Jr {
  constructor() {
    super(...arguments);
    N(this, "ref", Um());
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
    return o && Object.assign(c, o[r.type || "item"]), (a || r.onClick) && (c.onClick = this.handleItemClick.bind(this, c, s, r.onClick)), c.className = z(c.className), c;
  }
  renderItem(n, r, s) {
    const o = this.getItemRenderProps(n, r, s), { itemRender: a } = n;
    if (a) {
      if (typeof a == "object") {
        const h = a[r.type || "item"];
        if (h)
          return /* @__PURE__ */ Ce(h, {
            ...o
          });
      } else if (typeof a == "function") {
        const h = a.call(this, o, Ce);
        if (F_(h))
          return h;
        typeof h == "object" && Object.assign(o, h);
      }
    }
    const { type: c = "item", component: f, key: p = s, rootAttrs: i, rootClass: d, rootStyle: u, rootChildren: l, ..._ } = o, g = !f || typeof f == "string" ? this.constructor.ItemComponents && this.constructor.ItemComponents[c] || fa.ItemComponents[c] : f;
    return Object.assign(_, {
      type: c,
      component: typeof f == "string" ? f : void 0
    }), this.renderTypedItem(g, {
      className: z(d),
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
    return /* @__PURE__ */ Ce("li", {
      className: z(`${this.name}-${s.type}`, a),
      key: c,
      ...f
    }, /* @__PURE__ */ Ce(n, {
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
    return /* @__PURE__ */ Ce(g, {
      class: z(this.name, a),
      ..._,
      ref: this.ref
    }, c && c.map(this.renderItem.bind(this, n)), f);
  }
};
let zt = fa;
N(zt, "ItemComponents", {
  divider: Vm,
  item: ep,
  heading: Ym,
  space: qm,
  custom: Xm,
  basic: tp
}), N(zt, "ROOT_TAG", "menu"), N(zt, "NAME", "action-menu");
class _f extends Ve {
}
N(_f, "NAME", "actionmenu"), N(_f, "Component", zt);
function pf({
  ...e
}) {
  return /* @__PURE__ */ Ce(ep, {
    ...e
  });
}
var oi, $t, Jn;
class ql extends zt {
  constructor(n) {
    var r;
    super(n);
    P(this, oi, /* @__PURE__ */ new Set());
    P(this, $t, void 0);
    P(this, Jn, (n, r, s) => {
      this.toggleNestedMenu(n, r), s.preventDefault();
    });
    B(this, $t, n.nestedShow === void 0), w(this, $t) && (this.state = { nestedShow: (r = n.defaultNestedShow) != null ? r : {} });
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
    return /* @__PURE__ */ Ce(s, {
      items: r,
      name: this.props.name,
      nestedShow: w(this, $t) ? this.state.nestedShow : this.props.nestedShow,
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
    w(this, oi).add(a);
    const c = this.isNestedMenuShow(a);
    if (c && (o.rootChildren = [
      o.rootChildren,
      this.renderNestedMenu(r)
    ], o.component = pf), this.nestedTrigger === "hover")
      o.rootAttrs = {
        ...o.rootAttrs,
        onMouseEnter: w(this, Jn).bind(this, a, !0),
        onMouseLeave: w(this, Jn).bind(this, a, !1)
      };
    else if (this.nestedTrigger === "click") {
      const { onClick: i } = o;
      o.onClick = (d) => {
        w(this, Jn).call(this, a, void 0, d), i == null || i(d);
      };
    }
    const f = this.renderToggleIcon(c, o);
    return f && (o.children = [o.children, f]), o.rootClass = [o.rootClass, "has-nested-menu", c ? "show" : ""], o;
  }
  isNestedMenuShow(n) {
    const r = w(this, $t) ? this.state.nestedShow : this.props.nestedShow;
    return r && typeof r == "object" ? r[n] : !!r;
  }
  toggleNestedMenu(n, r) {
    const { controlledMenu: s } = this.props;
    if (s)
      return s.toggleNestedMenu(n, r);
    if (!w(this, $t))
      return !1;
    let { nestedShow: o = {} } = this.state;
    if (typeof o == "boolean" && (o === !0 ? o = [...w(this, oi).values()].reduce((a, c) => (a[c] = !0, a), {}) : o = {}), r === void 0)
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
    !w(this, $t) || this.setState({ nestedShow: !0 });
  }
  hideAllNestedMenu() {
    !w(this, $t) || this.setState({ nestedShow: !1 });
  }
}
oi = new WeakMap(), $t = new WeakMap(), Jn = new WeakMap(), N(ql, "ItemComponents", {
  item: pf
});
class df extends Ve {
}
N(df, "NAME", "actionmenunested"), N(df, "Component", ql);
var Gl, ve, np, Qr, hf, rp = {}, op = [], Km = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function ln(e, t) {
  for (var n in t)
    e[n] = t[n];
  return e;
}
function ip(e) {
  var t = e.parentNode;
  t && t.removeChild(e);
}
function Gn(e, t, n) {
  var r, s, o, a = {};
  for (o in t)
    o == "key" ? r = t[o] : o == "ref" ? s = t[o] : a[o] = t[o];
  if (arguments.length > 2 && (a.children = arguments.length > 3 ? Gl.call(arguments, 2) : n), typeof e == "function" && e.defaultProps != null)
    for (o in e.defaultProps)
      a[o] === void 0 && (a[o] = e.defaultProps[o]);
  return zi(e, a, r, s, null);
}
function zi(e, t, n, r, s) {
  var o = { type: e, props: t, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: s == null ? ++np : s };
  return s == null && ve.vnode != null && ve.vnode(o), o;
}
function Xl(e) {
  return e.children;
}
function eo(e, t) {
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
function sp(e) {
  var t, n;
  if ((e = e.__) != null && e.__c != null) {
    for (e.__e = e.__c.base = null, t = 0; t < e.__k.length; t++)
      if ((n = e.__k[t]) != null && n.__e != null) {
        e.__e = e.__c.base = n.__e;
        break;
      }
    return sp(e);
  }
}
function vf(e) {
  (!e.__d && (e.__d = !0) && Qr.push(e) && !bs.__r++ || hf !== ve.debounceRendering) && ((hf = ve.debounceRendering) || setTimeout)(bs);
}
function bs() {
  for (var e; bs.__r = Qr.length; )
    e = Qr.sort(function(t, n) {
      return t.__v.__b - n.__v.__b;
    }), Qr = [], e.some(function(t) {
      var n, r, s, o, a, c;
      t.__d && (a = (o = (n = t).__v).__e, (c = n.__P) && (r = [], (s = ln({}, o)).__v = o.__v + 1, fp(c, o, s, n.__n, c.ownerSVGElement !== void 0, o.__h != null ? [a] : null, r, a == null ? Po(o) : a, o.__h), Jm(r, o), o.__e != a && sp(o)));
    });
}
function ap(e, t, n, r, s, o, a, c, f, p) {
  var i, d, u, l, _, g, h, v = r && r.__k || op, m = v.length;
  for (n.__k = [], i = 0; i < t.length; i++)
    if ((l = n.__k[i] = (l = t[i]) == null || typeof l == "boolean" ? null : typeof l == "string" || typeof l == "number" || typeof l == "bigint" ? zi(null, l, null, null, l) : Array.isArray(l) ? zi(Xl, { children: l }, null, null, null) : l.__b > 0 ? zi(l.type, l.props, l.key, l.ref ? l.ref : null, l.__v) : l) != null) {
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
      fp(e, l, u = u || rp, s, o, a, c, f, p), _ = l.__e, (d = l.ref) && u.ref != d && (h || (h = []), u.ref && h.push(u.ref, null, l), h.push(d, l.__c || _, l)), _ != null ? (g == null && (g = _), typeof l.type == "function" && l.__k === u.__k ? l.__d = f = lp(l, f, e) : f = cp(e, l, u, v, _, f), typeof n.type == "function" && (n.__d = f)) : f && u.__e == f && f.parentNode != e && (f = Po(u));
    }
  for (n.__e = g, i = m; i--; )
    v[i] != null && _p(v[i], v[i]);
  if (h)
    for (i = 0; i < h.length; i++)
      up(h[i], h[++i], h[++i]);
}
function lp(e, t, n) {
  for (var r, s = e.__k, o = 0; s && o < s.length; o++)
    (r = s[o]) && (r.__ = e, t = typeof r.type == "function" ? lp(r, t, n) : cp(n, r, r, s, r.__e, t));
  return t;
}
function cp(e, t, n, r, s, o) {
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
function Zm(e, t, n, r, s) {
  var o;
  for (o in n)
    o === "children" || o === "key" || o in t || ws(e, o, null, n[o], r);
  for (o in t)
    s && typeof t[o] != "function" || o === "children" || o === "key" || o === "value" || o === "checked" || n[o] === t[o] || ws(e, o, t[o], n[o], r);
}
function mf(e, t, n) {
  t[0] === "-" ? e.setProperty(t, n) : e[t] = n == null ? "" : typeof n != "number" || Km.test(t) ? n : n + "px";
}
function ws(e, t, n, r, s) {
  var o;
  e:
    if (t === "style")
      if (typeof n == "string")
        e.style.cssText = n;
      else {
        if (typeof r == "string" && (e.style.cssText = r = ""), r)
          for (t in r)
            n && t in n || mf(e.style, t, "");
        if (n)
          for (t in n)
            r && n[t] === r[t] || mf(e.style, t, n[t]);
      }
    else if (t[0] === "o" && t[1] === "n")
      o = t !== (t = t.replace(/Capture$/, "")), t = t.toLowerCase() in e ? t.toLowerCase().slice(2) : t.slice(2), e.l || (e.l = {}), e.l[t + o] = n, n ? r || e.addEventListener(t, o ? yf : gf, o) : e.removeEventListener(t, o ? yf : gf, o);
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
function gf(e) {
  this.l[e.type + !1](ve.event ? ve.event(e) : e);
}
function yf(e) {
  this.l[e.type + !0](ve.event ? ve.event(e) : e);
}
function fp(e, t, n, r, s, o, a, c, f) {
  var p, i, d, u, l, _, g, h, v, m, k, b, C, $, S, y = t.type;
  if (t.constructor !== void 0)
    return null;
  n.__h != null && (f = n.__h, c = t.__e = n.__e, t.__h = null, o = [c]), (p = ve.__b) && p(t);
  try {
    e:
      if (typeof y == "function") {
        if (h = t.props, v = (p = y.contextType) && r[p.__c], m = p ? v ? v.props.value : p.__ : r, n.__c ? g = (i = t.__c = n.__c).__ = i.__E : ("prototype" in y && y.prototype.render ? t.__c = i = new y(h, m) : (t.__c = i = new eo(h, m), i.constructor = y, i.render = eg), v && v.sub(i), i.props = h, i.state || (i.state = {}), i.context = m, i.__n = r, d = i.__d = !0, i.__h = [], i._sb = []), i.__s == null && (i.__s = i.state), y.getDerivedStateFromProps != null && (i.__s == i.state && (i.__s = ln({}, i.__s)), ln(i.__s, y.getDerivedStateFromProps(h, i.__s))), u = i.props, l = i.state, d)
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
        if (i.context = m, i.props = h, i.__v = t, i.__P = e, b = ve.__r, C = 0, "prototype" in y && y.prototype.render) {
          for (i.state = i.__s, i.__d = !1, b && b(t), p = i.render(i.props, i.state, i.context), $ = 0; $ < i._sb.length; $++)
            i.__h.push(i._sb[$]);
          i._sb = [];
        } else
          do
            i.__d = !1, b && b(t), p = i.render(i.props, i.state, i.context), i.state = i.__s;
          while (i.__d && ++C < 25);
        i.state = i.__s, i.getChildContext != null && (r = ln(ln({}, r), i.getChildContext())), d || i.getSnapshotBeforeUpdate == null || (_ = i.getSnapshotBeforeUpdate(u, l)), S = p != null && p.type === Xl && p.key == null ? p.props.children : p, ap(e, Array.isArray(S) ? S : [S], t, n, r, s, o, a, c, f), i.base = t.__e, t.__h = null, i.__h.length && a.push(i), g && (i.__E = i.__ = null), i.__e = !1;
      } else
        o == null && t.__v === n.__v ? (t.__k = n.__k, t.__e = n.__e) : t.__e = Qm(n.__e, t, n, r, s, o, a, f);
    (p = ve.diffed) && p(t);
  } catch (x) {
    t.__v = null, (f || o != null) && (t.__e = c, t.__h = !!f, o[o.indexOf(c)] = null), ve.__e(x, t, n);
  }
}
function Jm(e, t) {
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
function Qm(e, t, n, r, s, o, a, c) {
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
    if (o = o && Gl.call(e.childNodes), p = (d = n.props || rp).dangerouslySetInnerHTML, i = u.dangerouslySetInnerHTML, !c) {
      if (o != null)
        for (d = {}, _ = 0; _ < e.attributes.length; _++)
          d[e.attributes[_].name] = e.attributes[_].value;
      (i || p) && (i && (p && i.__html == p.__html || i.__html === e.innerHTML) || (e.innerHTML = i && i.__html || ""));
    }
    if (Zm(e, u, d, s, c), i)
      t.__k = [];
    else if (_ = t.props.children, ap(e, Array.isArray(_) ? _ : [_], t, n, r, s && l !== "foreignObject", o, a, o ? o[0] : n.__k && Po(n, 0), c), o != null)
      for (_ = o.length; _--; )
        o[_] != null && ip(o[_]);
    c || ("value" in u && (_ = u.value) !== void 0 && (_ !== e.value || l === "progress" && !_ || l === "option" && _ !== d.value) && ws(e, "value", _, d.value, !1), "checked" in u && (_ = u.checked) !== void 0 && _ !== e.checked && ws(e, "checked", _, d.checked, !1));
  }
  return e;
}
function up(e, t, n) {
  try {
    typeof e == "function" ? e(t) : e.current = t;
  } catch (r) {
    ve.__e(r, n);
  }
}
function _p(e, t, n) {
  var r, s;
  if (ve.unmount && ve.unmount(e), (r = e.ref) && (r.current && r.current !== e.__e || up(r, null, t)), (r = e.__c) != null) {
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
      r[s] && _p(r[s], t, n || typeof e.type != "function");
  n || e.__e == null || ip(e.__e), e.__ = e.__e = e.__d = void 0;
}
function eg(e, t, n) {
  return this.constructor(e, n);
}
Gl = op.slice, ve = { __e: function(e, t, n, r) {
  for (var s, o, a; t = t.__; )
    if ((s = t.__c) && !s.__)
      try {
        if ((o = s.constructor) && o.getDerivedStateFromError != null && (s.setState(o.getDerivedStateFromError(e)), a = s.__d), s.componentDidCatch != null && (s.componentDidCatch(e, r || {}), a = s.__d), a)
          return s.__E = s;
      } catch (c) {
        e = c;
      }
  throw e;
} }, np = 0, eo.prototype.setState = function(e, t) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = ln({}, this.state), typeof e == "function" && (e = e(ln({}, n), this.props)), e && ln(n, e), e != null && this.__v && (t && this._sb.push(t), vf(this));
}, eo.prototype.forceUpdate = function(e) {
  this.__v && (this.__e = !0, e && this.__h.push(e), vf(this));
}, eo.prototype.render = Xl, Qr = [], bs.__r = 0;
class Cn extends eo {
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
    } = this.props, b = t || (a ? "a" : "button"), C = _ == null || typeof _ == "string" && !_.length || i && !u, $ = C && !l && !g && !o && !i;
    return Gn(
      b,
      {
        className: z("btn", n, s, {
          "btn-caret": $,
          disabled: f || i,
          active: p,
          loading: i,
          square: v === void 0 ? !$ && !o && C : v
        }, r ? `size-${r}` : ""),
        title: m,
        [b === "a" ? "href" : "data-url"]: a,
        [b === "a" ? "target" : "data-target"]: c,
        type: b === "button" ? "button" : void 0,
        ...k
      },
      i ? /* @__PURE__ */ Gn("i", {
        class: `spin icon ${d || "icon-spinner-snake"}`
      }) : typeof l == "string" ? /* @__PURE__ */ Gn("i", {
        class: `icon ${l}`
      }) : l,
      C ? null : /* @__PURE__ */ Gn("span", {
        className: "text"
      }, i ? u : _),
      i ? null : o,
      i ? null : typeof g == "string" ? /* @__PURE__ */ Gn("i", {
        class: `icon ${g}`
      }) : g,
      i ? null : h ? /* @__PURE__ */ Gn("span", {
        className: typeof h == "string" ? `caret-${h}` : "caret"
      }) : null
    );
  }
}
class bf extends Ve {
}
N(bf, "NAME", "button"), N(bf, "Component", Cn);
var pp, bl, dp, tg = [];
function ng(e, t, n) {
  var r, s, o, a = {};
  for (o in t)
    o == "key" ? r = t[o] : o == "ref" ? s = t[o] : a[o] = t[o];
  if (arguments.length > 2 && (a.children = arguments.length > 3 ? pp.call(arguments, 2) : n), typeof e == "function" && e.defaultProps != null)
    for (o in e.defaultProps)
      a[o] === void 0 && (a[o] = e.defaultProps[o]);
  return rg(e, a, r, s, null);
}
function rg(e, t, n, r, s) {
  var o = { type: e, props: t, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: s == null ? ++dp : s };
  return s == null && bl.vnode != null && bl.vnode(o), o;
}
pp = tg.slice, bl = { __e: function(e, t, n, r) {
  for (var s, o, a; t = t.__; )
    if ((s = t.__c) && !s.__)
      try {
        if ((o = s.constructor) && o.getDerivedStateFromError != null && (s.setState(o.getDerivedStateFromError(e)), a = s.__d), s.componentDidCatch != null && (s.componentDidCatch(e, r || {}), a = s.__d), a)
          return s.__E = s;
      } catch (c) {
        e = c;
      }
  throw e;
} }, dp = 0;
class Ga extends ql {
  get nestedTrigger() {
    return this.props.nestedTrigger || "click";
  }
  get menuName() {
    return "menu-nested";
  }
  beforeRender() {
    const t = super.beforeRender();
    let { hasIcons: n } = t;
    return n === void 0 && (n = t.items.some((r) => r.icon)), t.className = z(t.className, this.menuName, {
      "has-icons": n,
      "has-nested-items": t.items.some((r) => this.isNestedItem(r))
    }), t;
  }
  renderToggleIcon(t) {
    return /* @__PURE__ */ ng("span", {
      class: `${this.name}-toggle-icon caret-${t ? "down" : "right"}`
    });
  }
}
N(Ga, "NAME", "menu");
class wf extends Ve {
}
N(wf, "NAME", "menu"), N(wf, "Component", Ga);
var Xa, le, hp, to, $f, $s = {}, vp = [], og = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function cn(e, t) {
  for (var n in t)
    e[n] = t[n];
  return e;
}
function mp(e) {
  var t = e.parentNode;
  t && t.removeChild(e);
}
function $n(e, t, n) {
  var r, s, o, a = {};
  for (o in t)
    o == "key" ? r = t[o] : o == "ref" ? s = t[o] : a[o] = t[o];
  if (arguments.length > 2 && (a.children = arguments.length > 3 ? Xa.call(arguments, 2) : n), typeof e == "function" && e.defaultProps != null)
    for (o in e.defaultProps)
      a[o] === void 0 && (a[o] = e.defaultProps[o]);
  return Vi(e, a, r, s, null);
}
function Vi(e, t, n, r, s) {
  var o = { type: e, props: t, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: s == null ? ++hp : s };
  return s == null && le.vnode != null && le.vnode(o), o;
}
function Ka(e) {
  return e.children;
}
function Xn(e, t) {
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
function gp(e) {
  var t, n;
  if ((e = e.__) != null && e.__c != null) {
    for (e.__e = e.__c.base = null, t = 0; t < e.__k.length; t++)
      if ((n = e.__k[t]) != null && n.__e != null) {
        e.__e = e.__c.base = n.__e;
        break;
      }
    return gp(e);
  }
}
function kf(e) {
  (!e.__d && (e.__d = !0) && to.push(e) && !ks.__r++ || $f !== le.debounceRendering) && (($f = le.debounceRendering) || setTimeout)(ks);
}
function ks() {
  for (var e; ks.__r = to.length; )
    e = to.sort(function(t, n) {
      return t.__v.__b - n.__v.__b;
    }), to = [], e.some(function(t) {
      var n, r, s, o, a, c;
      t.__d && (a = (o = (n = t).__v).__e, (c = n.__P) && (r = [], (s = cn({}, o)).__v = o.__v + 1, Kl(c, o, s, n.__n, c.ownerSVGElement !== void 0, o.__h != null ? [a] : null, r, a == null ? Ro(o) : a, o.__h), $p(r, o), o.__e != a && gp(o)));
    });
}
function yp(e, t, n, r, s, o, a, c, f, p) {
  var i, d, u, l, _, g, h, v = r && r.__k || vp, m = v.length;
  for (n.__k = [], i = 0; i < t.length; i++)
    if ((l = n.__k[i] = (l = t[i]) == null || typeof l == "boolean" ? null : typeof l == "string" || typeof l == "number" || typeof l == "bigint" ? Vi(null, l, null, null, l) : Array.isArray(l) ? Vi(Ka, { children: l }, null, null, null) : l.__b > 0 ? Vi(l.type, l.props, l.key, l.ref ? l.ref : null, l.__v) : l) != null) {
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
      Kl(e, l, u = u || $s, s, o, a, c, f, p), _ = l.__e, (d = l.ref) && u.ref != d && (h || (h = []), u.ref && h.push(u.ref, null, l), h.push(d, l.__c || _, l)), _ != null ? (g == null && (g = _), typeof l.type == "function" && l.__k === u.__k ? l.__d = f = bp(l, f, e) : f = wp(e, l, u, v, _, f), typeof n.type == "function" && (n.__d = f)) : f && u.__e == f && f.parentNode != e && (f = Ro(u));
    }
  for (n.__e = g, i = m; i--; )
    v[i] != null && xp(v[i], v[i]);
  if (h)
    for (i = 0; i < h.length; i++)
      kp(h[i], h[++i], h[++i]);
}
function bp(e, t, n) {
  for (var r, s = e.__k, o = 0; s && o < s.length; o++)
    (r = s[o]) && (r.__ = e, t = typeof r.type == "function" ? bp(r, t, n) : wp(n, r, r, s, r.__e, t));
  return t;
}
function wp(e, t, n, r, s, o) {
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
function ig(e, t, n, r, s) {
  var o;
  for (o in n)
    o === "children" || o === "key" || o in t || xs(e, o, null, n[o], r);
  for (o in t)
    s && typeof t[o] != "function" || o === "children" || o === "key" || o === "value" || o === "checked" || n[o] === t[o] || xs(e, o, t[o], n[o], r);
}
function xf(e, t, n) {
  t[0] === "-" ? e.setProperty(t, n) : e[t] = n == null ? "" : typeof n != "number" || og.test(t) ? n : n + "px";
}
function xs(e, t, n, r, s) {
  var o;
  e:
    if (t === "style")
      if (typeof n == "string")
        e.style.cssText = n;
      else {
        if (typeof r == "string" && (e.style.cssText = r = ""), r)
          for (t in r)
            n && t in n || xf(e.style, t, "");
        if (n)
          for (t in n)
            r && n[t] === r[t] || xf(e.style, t, n[t]);
      }
    else if (t[0] === "o" && t[1] === "n")
      o = t !== (t = t.replace(/Capture$/, "")), t = t.toLowerCase() in e ? t.toLowerCase().slice(2) : t.slice(2), e.l || (e.l = {}), e.l[t + o] = n, n ? r || e.addEventListener(t, o ? Cf : Sf, o) : e.removeEventListener(t, o ? Cf : Sf, o);
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
function Sf(e) {
  this.l[e.type + !1](le.event ? le.event(e) : e);
}
function Cf(e) {
  this.l[e.type + !0](le.event ? le.event(e) : e);
}
function Kl(e, t, n, r, s, o, a, c, f) {
  var p, i, d, u, l, _, g, h, v, m, k, b, C, $, S, y = t.type;
  if (t.constructor !== void 0)
    return null;
  n.__h != null && (f = n.__h, c = t.__e = n.__e, t.__h = null, o = [c]), (p = le.__b) && p(t);
  try {
    e:
      if (typeof y == "function") {
        if (h = t.props, v = (p = y.contextType) && r[p.__c], m = p ? v ? v.props.value : p.__ : r, n.__c ? g = (i = t.__c = n.__c).__ = i.__E : ("prototype" in y && y.prototype.render ? t.__c = i = new y(h, m) : (t.__c = i = new Xn(h, m), i.constructor = y, i.render = ag), v && v.sub(i), i.props = h, i.state || (i.state = {}), i.context = m, i.__n = r, d = i.__d = !0, i.__h = [], i._sb = []), i.__s == null && (i.__s = i.state), y.getDerivedStateFromProps != null && (i.__s == i.state && (i.__s = cn({}, i.__s)), cn(i.__s, y.getDerivedStateFromProps(h, i.__s))), u = i.props, l = i.state, d)
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
        if (i.context = m, i.props = h, i.__v = t, i.__P = e, b = le.__r, C = 0, "prototype" in y && y.prototype.render) {
          for (i.state = i.__s, i.__d = !1, b && b(t), p = i.render(i.props, i.state, i.context), $ = 0; $ < i._sb.length; $++)
            i.__h.push(i._sb[$]);
          i._sb = [];
        } else
          do
            i.__d = !1, b && b(t), p = i.render(i.props, i.state, i.context), i.state = i.__s;
          while (i.__d && ++C < 25);
        i.state = i.__s, i.getChildContext != null && (r = cn(cn({}, r), i.getChildContext())), d || i.getSnapshotBeforeUpdate == null || (_ = i.getSnapshotBeforeUpdate(u, l)), S = p != null && p.type === Ka && p.key == null ? p.props.children : p, yp(e, Array.isArray(S) ? S : [S], t, n, r, s, o, a, c, f), i.base = t.__e, t.__h = null, i.__h.length && a.push(i), g && (i.__E = i.__ = null), i.__e = !1;
      } else
        o == null && t.__v === n.__v ? (t.__k = n.__k, t.__e = n.__e) : t.__e = sg(n.__e, t, n, r, s, o, a, f);
    (p = le.diffed) && p(t);
  } catch (x) {
    t.__v = null, (f || o != null) && (t.__e = c, t.__h = !!f, o[o.indexOf(c)] = null), le.__e(x, t, n);
  }
}
function $p(e, t) {
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
function sg(e, t, n, r, s, o, a, c) {
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
    if (o = o && Xa.call(e.childNodes), p = (d = n.props || $s).dangerouslySetInnerHTML, i = u.dangerouslySetInnerHTML, !c) {
      if (o != null)
        for (d = {}, _ = 0; _ < e.attributes.length; _++)
          d[e.attributes[_].name] = e.attributes[_].value;
      (i || p) && (i && (p && i.__html == p.__html || i.__html === e.innerHTML) || (e.innerHTML = i && i.__html || ""));
    }
    if (ig(e, u, d, s, c), i)
      t.__k = [];
    else if (_ = t.props.children, yp(e, Array.isArray(_) ? _ : [_], t, n, r, s && l !== "foreignObject", o, a, o ? o[0] : n.__k && Ro(n, 0), c), o != null)
      for (_ = o.length; _--; )
        o[_] != null && mp(o[_]);
    c || ("value" in u && (_ = u.value) !== void 0 && (_ !== e.value || l === "progress" && !_ || l === "option" && _ !== d.value) && xs(e, "value", _, d.value, !1), "checked" in u && (_ = u.checked) !== void 0 && _ !== e.checked && xs(e, "checked", _, d.checked, !1));
  }
  return e;
}
function kp(e, t, n) {
  try {
    typeof e == "function" ? e(t) : e.current = t;
  } catch (r) {
    le.__e(r, n);
  }
}
function xp(e, t, n) {
  var r, s;
  if (le.unmount && le.unmount(e), (r = e.ref) && (r.current && r.current !== e.__e || kp(r, null, t)), (r = e.__c) != null) {
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
      r[s] && xp(r[s], t, n || typeof e.type != "function");
  n || e.__e == null || mp(e.__e), e.__ = e.__e = e.__d = void 0;
}
function ag(e, t, n) {
  return this.constructor(e, n);
}
function Ef(e, t, n) {
  var r, s, o;
  le.__ && le.__(e, t), s = (r = typeof n == "function") ? null : n && n.__k || t.__k, o = [], Kl(t, e = (!r && n || t).__k = $n(Ka, null, [e]), s || $s, $s, t.ownerSVGElement !== void 0, !r && n ? [n] : s ? null : t.firstChild ? Xa.call(t.childNodes) : null, o, !r && n ? n : s ? s.__e : t.firstChild, r), $p(o, e);
}
Xa = vp.slice, le = { __e: function(e, t, n, r) {
  for (var s, o, a; t = t.__; )
    if ((s = t.__c) && !s.__)
      try {
        if ((o = s.constructor) && o.getDerivedStateFromError != null && (s.setState(o.getDerivedStateFromError(e)), a = s.__d), s.componentDidCatch != null && (s.componentDidCatch(e, r || {}), a = s.__d), a)
          return s.__E = s;
      } catch (c) {
        e = c;
      }
  throw e;
} }, hp = 0, Xn.prototype.setState = function(e, t) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = cn({}, this.state), typeof e == "function" && (e = e(cn({}, n), this.props)), e && cn(n, e), e != null && this.__v && (t && this._sb.push(t), kf(this));
}, Xn.prototype.forceUpdate = function(e) {
  this.__v && (this.__e = !0, e && this.__h.push(e), kf(this));
}, Xn.prototype.render = Ka, to = [], ks.__r = 0;
var Zl, me, Sp, Cp, no, Of, Ep = {}, Op = [], lg = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function fn(e, t) {
  for (var n in t)
    e[n] = t[n];
  return e;
}
function Ap(e) {
  var t = e.parentNode;
  t && t.removeChild(e);
}
function dl(e, t, n) {
  var r, s, o, a = {};
  for (o in t)
    o == "key" ? r = t[o] : o == "ref" ? s = t[o] : a[o] = t[o];
  if (arguments.length > 2 && (a.children = arguments.length > 3 ? Zl.call(arguments, 2) : n), typeof e == "function" && e.defaultProps != null)
    for (o in e.defaultProps)
      a[o] === void 0 && (a[o] = e.defaultProps[o]);
  return Yi(e, a, r, s, null);
}
function Yi(e, t, n, r, s) {
  var o = { type: e, props: t, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: s == null ? ++Sp : s };
  return s == null && me.vnode != null && me.vnode(o), o;
}
function Jl(e) {
  return e.children;
}
function ro(e, t) {
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
function Mp(e) {
  var t, n;
  if ((e = e.__) != null && e.__c != null) {
    for (e.__e = e.__c.base = null, t = 0; t < e.__k.length; t++)
      if ((n = e.__k[t]) != null && n.__e != null) {
        e.__e = e.__c.base = n.__e;
        break;
      }
    return Mp(e);
  }
}
function Af(e) {
  (!e.__d && (e.__d = !0) && no.push(e) && !Ss.__r++ || Of !== me.debounceRendering) && ((Of = me.debounceRendering) || setTimeout)(Ss);
}
function Ss() {
  for (var e; Ss.__r = no.length; )
    e = no.sort(function(t, n) {
      return t.__v.__b - n.__v.__b;
    }), no = [], e.some(function(t) {
      var n, r, s, o, a, c;
      t.__d && (a = (o = (n = t).__v).__e, (c = n.__P) && (r = [], (s = fn({}, o)).__v = o.__v + 1, Np(c, o, s, n.__n, c.ownerSVGElement !== void 0, o.__h != null ? [a] : null, r, a == null ? Ho(o) : a, o.__h), fg(r, o), o.__e != a && Mp(o)));
    });
}
function Tp(e, t, n, r, s, o, a, c, f, p) {
  var i, d, u, l, _, g, h, v = r && r.__k || Op, m = v.length;
  for (n.__k = [], i = 0; i < t.length; i++)
    if ((l = n.__k[i] = (l = t[i]) == null || typeof l == "boolean" ? null : typeof l == "string" || typeof l == "number" || typeof l == "bigint" ? Yi(null, l, null, null, l) : Array.isArray(l) ? Yi(Jl, { children: l }, null, null, null) : l.__b > 0 ? Yi(l.type, l.props, l.key, l.ref ? l.ref : null, l.__v) : l) != null) {
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
      Np(e, l, u = u || Ep, s, o, a, c, f, p), _ = l.__e, (d = l.ref) && u.ref != d && (h || (h = []), u.ref && h.push(u.ref, null, l), h.push(d, l.__c || _, l)), _ != null ? (g == null && (g = _), typeof l.type == "function" && l.__k === u.__k ? l.__d = f = Dp(l, f, e) : f = Lp(e, l, u, v, _, f), typeof n.type == "function" && (n.__d = f)) : f && u.__e == f && f.parentNode != e && (f = Ho(u));
    }
  for (n.__e = g, i = m; i--; )
    v[i] != null && Rp(v[i], v[i]);
  if (h)
    for (i = 0; i < h.length; i++)
      Pp(h[i], h[++i], h[++i]);
}
function Dp(e, t, n) {
  for (var r, s = e.__k, o = 0; s && o < s.length; o++)
    (r = s[o]) && (r.__ = e, t = typeof r.type == "function" ? Dp(r, t, n) : Lp(n, r, r, s, r.__e, t));
  return t;
}
function Lp(e, t, n, r, s, o) {
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
function cg(e, t, n, r, s) {
  var o;
  for (o in n)
    o === "children" || o === "key" || o in t || Cs(e, o, null, n[o], r);
  for (o in t)
    s && typeof t[o] != "function" || o === "children" || o === "key" || o === "value" || o === "checked" || n[o] === t[o] || Cs(e, o, t[o], n[o], r);
}
function Mf(e, t, n) {
  t[0] === "-" ? e.setProperty(t, n) : e[t] = n == null ? "" : typeof n != "number" || lg.test(t) ? n : n + "px";
}
function Cs(e, t, n, r, s) {
  var o;
  e:
    if (t === "style")
      if (typeof n == "string")
        e.style.cssText = n;
      else {
        if (typeof r == "string" && (e.style.cssText = r = ""), r)
          for (t in r)
            n && t in n || Mf(e.style, t, "");
        if (n)
          for (t in n)
            r && n[t] === r[t] || Mf(e.style, t, n[t]);
      }
    else if (t[0] === "o" && t[1] === "n")
      o = t !== (t = t.replace(/Capture$/, "")), t = t.toLowerCase() in e ? t.toLowerCase().slice(2) : t.slice(2), e.l || (e.l = {}), e.l[t + o] = n, n ? r || e.addEventListener(t, o ? Df : Tf, o) : e.removeEventListener(t, o ? Df : Tf, o);
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
function Tf(e) {
  this.l[e.type + !1](me.event ? me.event(e) : e);
}
function Df(e) {
  this.l[e.type + !0](me.event ? me.event(e) : e);
}
function Np(e, t, n, r, s, o, a, c, f) {
  var p, i, d, u, l, _, g, h, v, m, k, b, C, $, S, y = t.type;
  if (t.constructor !== void 0)
    return null;
  n.__h != null && (f = n.__h, c = t.__e = n.__e, t.__h = null, o = [c]), (p = me.__b) && p(t);
  try {
    e:
      if (typeof y == "function") {
        if (h = t.props, v = (p = y.contextType) && r[p.__c], m = p ? v ? v.props.value : p.__ : r, n.__c ? g = (i = t.__c = n.__c).__ = i.__E : ("prototype" in y && y.prototype.render ? t.__c = i = new y(h, m) : (t.__c = i = new ro(h, m), i.constructor = y, i.render = _g), v && v.sub(i), i.props = h, i.state || (i.state = {}), i.context = m, i.__n = r, d = i.__d = !0, i.__h = [], i._sb = []), i.__s == null && (i.__s = i.state), y.getDerivedStateFromProps != null && (i.__s == i.state && (i.__s = fn({}, i.__s)), fn(i.__s, y.getDerivedStateFromProps(h, i.__s))), u = i.props, l = i.state, d)
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
        if (i.context = m, i.props = h, i.__v = t, i.__P = e, b = me.__r, C = 0, "prototype" in y && y.prototype.render) {
          for (i.state = i.__s, i.__d = !1, b && b(t), p = i.render(i.props, i.state, i.context), $ = 0; $ < i._sb.length; $++)
            i.__h.push(i._sb[$]);
          i._sb = [];
        } else
          do
            i.__d = !1, b && b(t), p = i.render(i.props, i.state, i.context), i.state = i.__s;
          while (i.__d && ++C < 25);
        i.state = i.__s, i.getChildContext != null && (r = fn(fn({}, r), i.getChildContext())), d || i.getSnapshotBeforeUpdate == null || (_ = i.getSnapshotBeforeUpdate(u, l)), S = p != null && p.type === Jl && p.key == null ? p.props.children : p, Tp(e, Array.isArray(S) ? S : [S], t, n, r, s, o, a, c, f), i.base = t.__e, t.__h = null, i.__h.length && a.push(i), g && (i.__E = i.__ = null), i.__e = !1;
      } else
        o == null && t.__v === n.__v ? (t.__k = n.__k, t.__e = n.__e) : t.__e = ug(n.__e, t, n, r, s, o, a, f);
    (p = me.diffed) && p(t);
  } catch (x) {
    t.__v = null, (f || o != null) && (t.__e = c, t.__h = !!f, o[o.indexOf(c)] = null), me.__e(x, t, n);
  }
}
function fg(e, t) {
  me.__c && me.__c(t, e), e.some(function(n) {
    try {
      e = n.__h, n.__h = [], e.some(function(r) {
        r.call(n);
      });
    } catch (r) {
      me.__e(r, n.__v);
    }
  });
}
function ug(e, t, n, r, s, o, a, c) {
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
    if (o = o && Zl.call(e.childNodes), p = (d = n.props || Ep).dangerouslySetInnerHTML, i = u.dangerouslySetInnerHTML, !c) {
      if (o != null)
        for (d = {}, _ = 0; _ < e.attributes.length; _++)
          d[e.attributes[_].name] = e.attributes[_].value;
      (i || p) && (i && (p && i.__html == p.__html || i.__html === e.innerHTML) || (e.innerHTML = i && i.__html || ""));
    }
    if (cg(e, u, d, s, c), i)
      t.__k = [];
    else if (_ = t.props.children, Tp(e, Array.isArray(_) ? _ : [_], t, n, r, s && l !== "foreignObject", o, a, o ? o[0] : n.__k && Ho(n, 0), c), o != null)
      for (_ = o.length; _--; )
        o[_] != null && Ap(o[_]);
    c || ("value" in u && (_ = u.value) !== void 0 && (_ !== e.value || l === "progress" && !_ || l === "option" && _ !== d.value) && Cs(e, "value", _, d.value, !1), "checked" in u && (_ = u.checked) !== void 0 && _ !== e.checked && Cs(e, "checked", _, d.checked, !1));
  }
  return e;
}
function Pp(e, t, n) {
  try {
    typeof e == "function" ? e(t) : e.current = t;
  } catch (r) {
    me.__e(r, n);
  }
}
function Rp(e, t, n) {
  var r, s;
  if (me.unmount && me.unmount(e), (r = e.ref) && (r.current && r.current !== e.__e || Pp(r, null, t)), (r = e.__c) != null) {
    if (r.componentWillUnmount)
      try {
        r.componentWillUnmount();
      } catch (o) {
        me.__e(o, t);
      }
    r.base = r.__P = null, e.__c = void 0;
  }
  if (r = e.__k)
    for (s = 0; s < r.length; s++)
      r[s] && Rp(r[s], t, n || typeof e.type != "function");
  n || e.__e == null || Ap(e.__e), e.__ = e.__e = e.__d = void 0;
}
function _g(e, t, n) {
  return this.constructor(e, n);
}
Zl = Op.slice, me = { __e: function(e, t, n, r) {
  for (var s, o, a; t = t.__; )
    if ((s = t.__c) && !s.__)
      try {
        if ((o = s.constructor) && o.getDerivedStateFromError != null && (s.setState(o.getDerivedStateFromError(e)), a = s.__d), s.componentDidCatch != null && (s.componentDidCatch(e, r || {}), a = s.__d), a)
          return s.__E = s;
      } catch (c) {
        e = c;
      }
  throw e;
} }, Sp = 0, Cp = function(e) {
  return e != null && e.constructor === void 0;
}, ro.prototype.setState = function(e, t) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = fn({}, this.state), typeof e == "function" && (e = e(fn({}, n), this.props)), e && fn(n, e), e != null && this.__v && (t && this._sb.push(t), Af(this));
}, ro.prototype.forceUpdate = function(e) {
  this.__v && (this.__e = !0, e && this.__h.push(e), Af(this));
}, ro.prototype.render = Jl, no = [], Ss.__r = 0;
class Ql extends ro {
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
    return /* @__PURE__ */ dl(Cn, {
      key: r,
      ...s
    });
  }
  renderItem(t, n, r) {
    const { itemRender: s, defaultBtnProps: o, onClickItem: a } = t, c = { key: r, ...n };
    if (o && Object.assign(c, o), a && (c.onClick = this.handleItemClick.bind(this, c, r, n.onClick)), s) {
      const f = s.call(this, c, dl);
      if (Cp(f))
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
    return /* @__PURE__ */ dl("div", {
      className: z("btn-group", s ? `size-${s}` : "", n),
      ...l
    }, r && r.map(this.renderItem.bind(this, t)), c);
  }
}
function pg({
  ...e
}) {
  return /* @__PURE__ */ $n(Ql, {
    ...e
  });
}
class Hp extends Xn {
  render() {
    const { message: t, className: n, type: r, actions: s, close: o } = this.props, a = z([r, "border-none"]), c = s != null && s.length ? s.map((f) => ({ ...f, className: a })) : [];
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
    return /* @__PURE__ */ $n("div", {
      class: z([n, r || "default", "messager"])
    }, /* @__PURE__ */ $n("div", {
      class: "messager-content"
    }, t), /* @__PURE__ */ $n(pg, {
      items: c
    }));
  }
}
N(Hp, "defaultProps");
class Wp extends Xn {
  render() {
    const { className: t, placement: n } = this.props;
    return /* @__PURE__ */ $n("div", {
      class: z([t || "", "messagers-holder", "col"]),
      "data-placement": n
    });
  }
}
N(Wp, "defaultProps");
class Lf extends Xe {
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
      Ef($n(Wp, p), f);
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
    Ef($n(Hp, c), o, a);
  }
}
N(Lf, "NAME", "messager"), N(Lf, "DEFAULT", {
  placement: "top",
  type: "default",
  close: !0
});
var ec, ge, Ip, oo, Nf, Up = {}, Bp = [], dg = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function un(e, t) {
  for (var n in t)
    e[n] = t[n];
  return e;
}
function jp(e) {
  var t = e.parentNode;
  t && t.removeChild(e);
}
function Pi(e, t, n) {
  var r, s, o, a = {};
  for (o in t)
    o == "key" ? r = t[o] : o == "ref" ? s = t[o] : a[o] = t[o];
  if (arguments.length > 2 && (a.children = arguments.length > 3 ? ec.call(arguments, 2) : n), typeof e == "function" && e.defaultProps != null)
    for (o in e.defaultProps)
      a[o] === void 0 && (a[o] = e.defaultProps[o]);
  return qi(e, a, r, s, null);
}
function qi(e, t, n, r, s) {
  var o = { type: e, props: t, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: s == null ? ++Ip : s };
  return s == null && ge.vnode != null && ge.vnode(o), o;
}
function tc(e) {
  return e.children;
}
function io(e, t) {
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
function Fp(e) {
  var t, n;
  if ((e = e.__) != null && e.__c != null) {
    for (e.__e = e.__c.base = null, t = 0; t < e.__k.length; t++)
      if ((n = e.__k[t]) != null && n.__e != null) {
        e.__e = e.__c.base = n.__e;
        break;
      }
    return Fp(e);
  }
}
function Pf(e) {
  (!e.__d && (e.__d = !0) && oo.push(e) && !Es.__r++ || Nf !== ge.debounceRendering) && ((Nf = ge.debounceRendering) || setTimeout)(Es);
}
function Es() {
  for (var e; Es.__r = oo.length; )
    e = oo.sort(function(t, n) {
      return t.__v.__b - n.__v.__b;
    }), oo = [], e.some(function(t) {
      var n, r, s, o, a, c;
      t.__d && (a = (o = (n = t).__v).__e, (c = n.__P) && (r = [], (s = un({}, o)).__v = o.__v + 1, qp(c, o, s, n.__n, c.ownerSVGElement !== void 0, o.__h != null ? [a] : null, r, a == null ? Wo(o) : a, o.__h), vg(r, o), o.__e != a && Fp(o)));
    });
}
function zp(e, t, n, r, s, o, a, c, f, p) {
  var i, d, u, l, _, g, h, v = r && r.__k || Bp, m = v.length;
  for (n.__k = [], i = 0; i < t.length; i++)
    if ((l = n.__k[i] = (l = t[i]) == null || typeof l == "boolean" ? null : typeof l == "string" || typeof l == "number" || typeof l == "bigint" ? qi(null, l, null, null, l) : Array.isArray(l) ? qi(tc, { children: l }, null, null, null) : l.__b > 0 ? qi(l.type, l.props, l.key, l.ref ? l.ref : null, l.__v) : l) != null) {
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
      qp(e, l, u = u || Up, s, o, a, c, f, p), _ = l.__e, (d = l.ref) && u.ref != d && (h || (h = []), u.ref && h.push(u.ref, null, l), h.push(d, l.__c || _, l)), _ != null ? (g == null && (g = _), typeof l.type == "function" && l.__k === u.__k ? l.__d = f = Vp(l, f, e) : f = Yp(e, l, u, v, _, f), typeof n.type == "function" && (n.__d = f)) : f && u.__e == f && f.parentNode != e && (f = Wo(u));
    }
  for (n.__e = g, i = m; i--; )
    v[i] != null && Xp(v[i], v[i]);
  if (h)
    for (i = 0; i < h.length; i++)
      Gp(h[i], h[++i], h[++i]);
}
function Vp(e, t, n) {
  for (var r, s = e.__k, o = 0; s && o < s.length; o++)
    (r = s[o]) && (r.__ = e, t = typeof r.type == "function" ? Vp(r, t, n) : Yp(n, r, r, s, r.__e, t));
  return t;
}
function Yp(e, t, n, r, s, o) {
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
function hg(e, t, n, r, s) {
  var o;
  for (o in n)
    o === "children" || o === "key" || o in t || Os(e, o, null, n[o], r);
  for (o in t)
    s && typeof t[o] != "function" || o === "children" || o === "key" || o === "value" || o === "checked" || n[o] === t[o] || Os(e, o, t[o], n[o], r);
}
function Rf(e, t, n) {
  t[0] === "-" ? e.setProperty(t, n) : e[t] = n == null ? "" : typeof n != "number" || dg.test(t) ? n : n + "px";
}
function Os(e, t, n, r, s) {
  var o;
  e:
    if (t === "style")
      if (typeof n == "string")
        e.style.cssText = n;
      else {
        if (typeof r == "string" && (e.style.cssText = r = ""), r)
          for (t in r)
            n && t in n || Rf(e.style, t, "");
        if (n)
          for (t in n)
            r && n[t] === r[t] || Rf(e.style, t, n[t]);
      }
    else if (t[0] === "o" && t[1] === "n")
      o = t !== (t = t.replace(/Capture$/, "")), t = t.toLowerCase() in e ? t.toLowerCase().slice(2) : t.slice(2), e.l || (e.l = {}), e.l[t + o] = n, n ? r || e.addEventListener(t, o ? Wf : Hf, o) : e.removeEventListener(t, o ? Wf : Hf, o);
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
function Hf(e) {
  this.l[e.type + !1](ge.event ? ge.event(e) : e);
}
function Wf(e) {
  this.l[e.type + !0](ge.event ? ge.event(e) : e);
}
function qp(e, t, n, r, s, o, a, c, f) {
  var p, i, d, u, l, _, g, h, v, m, k, b, C, $, S, y = t.type;
  if (t.constructor !== void 0)
    return null;
  n.__h != null && (f = n.__h, c = t.__e = n.__e, t.__h = null, o = [c]), (p = ge.__b) && p(t);
  try {
    e:
      if (typeof y == "function") {
        if (h = t.props, v = (p = y.contextType) && r[p.__c], m = p ? v ? v.props.value : p.__ : r, n.__c ? g = (i = t.__c = n.__c).__ = i.__E : ("prototype" in y && y.prototype.render ? t.__c = i = new y(h, m) : (t.__c = i = new io(h, m), i.constructor = y, i.render = gg), v && v.sub(i), i.props = h, i.state || (i.state = {}), i.context = m, i.__n = r, d = i.__d = !0, i.__h = [], i._sb = []), i.__s == null && (i.__s = i.state), y.getDerivedStateFromProps != null && (i.__s == i.state && (i.__s = un({}, i.__s)), un(i.__s, y.getDerivedStateFromProps(h, i.__s))), u = i.props, l = i.state, d)
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
        if (i.context = m, i.props = h, i.__v = t, i.__P = e, b = ge.__r, C = 0, "prototype" in y && y.prototype.render) {
          for (i.state = i.__s, i.__d = !1, b && b(t), p = i.render(i.props, i.state, i.context), $ = 0; $ < i._sb.length; $++)
            i.__h.push(i._sb[$]);
          i._sb = [];
        } else
          do
            i.__d = !1, b && b(t), p = i.render(i.props, i.state, i.context), i.state = i.__s;
          while (i.__d && ++C < 25);
        i.state = i.__s, i.getChildContext != null && (r = un(un({}, r), i.getChildContext())), d || i.getSnapshotBeforeUpdate == null || (_ = i.getSnapshotBeforeUpdate(u, l)), S = p != null && p.type === tc && p.key == null ? p.props.children : p, zp(e, Array.isArray(S) ? S : [S], t, n, r, s, o, a, c, f), i.base = t.__e, t.__h = null, i.__h.length && a.push(i), g && (i.__E = i.__ = null), i.__e = !1;
      } else
        o == null && t.__v === n.__v ? (t.__k = n.__k, t.__e = n.__e) : t.__e = mg(n.__e, t, n, r, s, o, a, f);
    (p = ge.diffed) && p(t);
  } catch (x) {
    t.__v = null, (f || o != null) && (t.__e = c, t.__h = !!f, o[o.indexOf(c)] = null), ge.__e(x, t, n);
  }
}
function vg(e, t) {
  ge.__c && ge.__c(t, e), e.some(function(n) {
    try {
      e = n.__h, n.__h = [], e.some(function(r) {
        r.call(n);
      });
    } catch (r) {
      ge.__e(r, n.__v);
    }
  });
}
function mg(e, t, n, r, s, o, a, c) {
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
    if (o = o && ec.call(e.childNodes), p = (d = n.props || Up).dangerouslySetInnerHTML, i = u.dangerouslySetInnerHTML, !c) {
      if (o != null)
        for (d = {}, _ = 0; _ < e.attributes.length; _++)
          d[e.attributes[_].name] = e.attributes[_].value;
      (i || p) && (i && (p && i.__html == p.__html || i.__html === e.innerHTML) || (e.innerHTML = i && i.__html || ""));
    }
    if (hg(e, u, d, s, c), i)
      t.__k = [];
    else if (_ = t.props.children, zp(e, Array.isArray(_) ? _ : [_], t, n, r, s && l !== "foreignObject", o, a, o ? o[0] : n.__k && Wo(n, 0), c), o != null)
      for (_ = o.length; _--; )
        o[_] != null && jp(o[_]);
    c || ("value" in u && (_ = u.value) !== void 0 && (_ !== e.value || l === "progress" && !_ || l === "option" && _ !== d.value) && Os(e, "value", _, d.value, !1), "checked" in u && (_ = u.checked) !== void 0 && _ !== e.checked && Os(e, "checked", _, d.checked, !1));
  }
  return e;
}
function Gp(e, t, n) {
  try {
    typeof e == "function" ? e(t) : e.current = t;
  } catch (r) {
    ge.__e(r, n);
  }
}
function Xp(e, t, n) {
  var r, s;
  if (ge.unmount && ge.unmount(e), (r = e.ref) && (r.current && r.current !== e.__e || Gp(r, null, t)), (r = e.__c) != null) {
    if (r.componentWillUnmount)
      try {
        r.componentWillUnmount();
      } catch (o) {
        ge.__e(o, t);
      }
    r.base = r.__P = null, e.__c = void 0;
  }
  if (r = e.__k)
    for (s = 0; s < r.length; s++)
      r[s] && Xp(r[s], t, n || typeof e.type != "function");
  n || e.__e == null || jp(e.__e), e.__ = e.__e = e.__d = void 0;
}
function gg(e, t, n) {
  return this.constructor(e, n);
}
ec = Bp.slice, ge = { __e: function(e, t, n, r) {
  for (var s, o, a; t = t.__; )
    if ((s = t.__c) && !s.__)
      try {
        if ((o = s.constructor) && o.getDerivedStateFromError != null && (s.setState(o.getDerivedStateFromError(e)), a = s.__d), s.componentDidCatch != null && (s.componentDidCatch(e, r || {}), a = s.__d), a)
          return s.__E = s;
      } catch (c) {
        e = c;
      }
  throw e;
} }, Ip = 0, io.prototype.setState = function(e, t) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = un({}, this.state), typeof e == "function" && (e = e(un({}, n), this.props)), e && un(n, e), e != null && this.__v && (t && this._sb.push(t), Pf(this));
}, io.prototype.forceUpdate = function(e) {
  this.__v && (this.__e = !0, e && this.__h.push(e), Pf(this));
}, io.prototype.render = tc, oo = [], Es.__r = 0;
class wl extends io {
  render() {
    const { percent: t, circleSize: n, circleBorderSize: r, circleBgColor: s, circleColor: o } = this.props, a = (n - r) / 2, c = n / 2;
    return /* @__PURE__ */ Pi("svg", {
      width: n,
      height: n,
      class: "progress-circle"
    }, /* @__PURE__ */ Pi("circle", {
      cx: c,
      cy: c,
      r: a,
      stroke: s,
      "stroke-width": r
    }), /* @__PURE__ */ Pi("circle", {
      cx: c,
      cy: c,
      r: a,
      stroke: o,
      "stroke-dasharray": Math.PI * a * 2,
      "stroke-dashoffset": Math.PI * a * 2 * (100 - t) / 100,
      "stroke-width": r
    }), /* @__PURE__ */ Pi("text", {
      x: c,
      y: c + r / 4,
      "dominant-baseline": "middle",
      style: { fontSize: `${a}px` }
    }, Math.round(t)));
  }
}
N(wl, "NAME", "zui.progress-circle"), N(wl, "defaultProps", {
  circleSize: 24,
  circleBorderSize: 2,
  circleBgColor: "var(--progress-circle-bg)",
  circleColor: "var(--progress-circle-bar-color)"
});
class If extends Ve {
}
N(If, "NAME", "table-sorter"), N(If, "Component", wl);
function yg(e) {
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
function bg(e) {
  document.readyState !== "loading" ? e() : document.addEventListener("DOMContentLoaded", e);
}
function wg(e, t) {
  const n = typeof e == "string" ? document.querySelector(e) : e;
  if (!n)
    return !1;
  const r = n.getBoundingClientRect(), s = window.innerHeight || document.documentElement.clientHeight, o = window.innerWidth || document.documentElement.clientWidth;
  if (t != null && t.fullyCheck)
    return r.left >= 0 && r.top >= 0 && r.left + r.width <= o && r.top + r.height <= s;
  const a = r.top <= s && r.top + r.height >= 0, c = r.left <= o && r.left + r.width >= 0;
  return a && c;
}
const kx = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  selectText: yg,
  domReady: bg,
  isElementVisible: wg,
  getClassList: qa,
  classes: z
}, Symbol.toStringTag, { value: "Module" }));
let $g = (e = 21) => crypto.getRandomValues(new Uint8Array(e)).reduce((t, n) => (n &= 63, n < 36 ? t += n.toString(36) : n < 62 ? t += (n - 26).toString(36).toUpperCase() : n > 62 ? t += "-" : t += "_", t), "");
var ii, Jt, kt, Qn, er, Gi;
const Zc = class {
  constructor(t, n = "local") {
    P(this, er);
    P(this, ii, void 0);
    P(this, Jt, void 0);
    P(this, kt, void 0);
    P(this, Qn, void 0);
    B(this, ii, n), B(this, Jt, `ZUI_STORE:${t != null ? t : $g()}`), B(this, kt, n === "local" ? localStorage : sessionStorage);
  }
  get type() {
    return w(this, ii);
  }
  get session() {
    return this.type === "session" ? this : (w(this, Qn) || B(this, Qn, new Zc(w(this, Jt), "session")), w(this, Qn));
  }
  get(t, n) {
    const r = w(this, kt).getItem(Q(this, er, Gi).call(this, t));
    return typeof r == "string" ? JSON.parse(r) : r != null ? r : n;
  }
  set(t, n) {
    if (n == null)
      return this.remove(t);
    w(this, kt).setItem(Q(this, er, Gi).call(this, t), JSON.stringify(n));
  }
  remove(t) {
    w(this, kt).removeItem(Q(this, er, Gi).call(this, t));
  }
  each(t) {
    for (let n = 0; n < w(this, kt).length; n++) {
      const r = w(this, kt).key(n);
      if (r != null && r.startsWith(w(this, Jt))) {
        const s = w(this, kt).getItem(r);
        typeof s == "string" && t(r.substring(w(this, Jt).length + 1), JSON.parse(s));
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
let As = Zc;
ii = new WeakMap(), Jt = new WeakMap(), kt = new WeakMap(), Qn = new WeakMap(), er = new WeakSet(), Gi = function(t) {
  return `${w(this, Jt)}:${t}`;
};
const kg = new As("DEFAULT");
function xg(e, t = "local") {
  return new As(e, t);
}
Object.assign(kg, { create: xg });
var nc, ye, Kp, so, Uf, Zp = {}, Jp = [], Sg = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function _n(e, t) {
  for (var n in t)
    e[n] = t[n];
  return e;
}
function Qp(e) {
  var t = e.parentNode;
  t && t.removeChild(e);
}
function hl(e, t, n) {
  var r, s, o, a = {};
  for (o in t)
    o == "key" ? r = t[o] : o == "ref" ? s = t[o] : a[o] = t[o];
  if (arguments.length > 2 && (a.children = arguments.length > 3 ? nc.call(arguments, 2) : n), typeof e == "function" && e.defaultProps != null)
    for (o in e.defaultProps)
      a[o] === void 0 && (a[o] = e.defaultProps[o]);
  return Xi(e, a, r, s, null);
}
function Xi(e, t, n, r, s) {
  var o = { type: e, props: t, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: s == null ? ++Kp : s };
  return s == null && ye.vnode != null && ye.vnode(o), o;
}
function rc(e) {
  return e.children;
}
function ao(e, t) {
  this.props = e, this.context = t;
}
function Io(e, t) {
  if (t == null)
    return e.__ ? Io(e.__, e.__.__k.indexOf(e) + 1) : null;
  for (var n; t < e.__k.length; t++)
    if ((n = e.__k[t]) != null && n.__e != null)
      return n.__e;
  return typeof e.type == "function" ? Io(e) : null;
}
function ed(e) {
  var t, n;
  if ((e = e.__) != null && e.__c != null) {
    for (e.__e = e.__c.base = null, t = 0; t < e.__k.length; t++)
      if ((n = e.__k[t]) != null && n.__e != null) {
        e.__e = e.__c.base = n.__e;
        break;
      }
    return ed(e);
  }
}
function Bf(e) {
  (!e.__d && (e.__d = !0) && so.push(e) && !Ms.__r++ || Uf !== ye.debounceRendering) && ((Uf = ye.debounceRendering) || setTimeout)(Ms);
}
function Ms() {
  for (var e; Ms.__r = so.length; )
    e = so.sort(function(t, n) {
      return t.__v.__b - n.__v.__b;
    }), so = [], e.some(function(t) {
      var n, r, s, o, a, c;
      t.__d && (a = (o = (n = t).__v).__e, (c = n.__P) && (r = [], (s = _n({}, o)).__v = o.__v + 1, od(c, o, s, n.__n, c.ownerSVGElement !== void 0, o.__h != null ? [a] : null, r, a == null ? Io(o) : a, o.__h), Eg(r, o), o.__e != a && ed(o)));
    });
}
function td(e, t, n, r, s, o, a, c, f, p) {
  var i, d, u, l, _, g, h, v = r && r.__k || Jp, m = v.length;
  for (n.__k = [], i = 0; i < t.length; i++)
    if ((l = n.__k[i] = (l = t[i]) == null || typeof l == "boolean" ? null : typeof l == "string" || typeof l == "number" || typeof l == "bigint" ? Xi(null, l, null, null, l) : Array.isArray(l) ? Xi(rc, { children: l }, null, null, null) : l.__b > 0 ? Xi(l.type, l.props, l.key, l.ref ? l.ref : null, l.__v) : l) != null) {
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
      od(e, l, u = u || Zp, s, o, a, c, f, p), _ = l.__e, (d = l.ref) && u.ref != d && (h || (h = []), u.ref && h.push(u.ref, null, l), h.push(d, l.__c || _, l)), _ != null ? (g == null && (g = _), typeof l.type == "function" && l.__k === u.__k ? l.__d = f = nd(l, f, e) : f = rd(e, l, u, v, _, f), typeof n.type == "function" && (n.__d = f)) : f && u.__e == f && f.parentNode != e && (f = Io(u));
    }
  for (n.__e = g, i = m; i--; )
    v[i] != null && sd(v[i], v[i]);
  if (h)
    for (i = 0; i < h.length; i++)
      id(h[i], h[++i], h[++i]);
}
function nd(e, t, n) {
  for (var r, s = e.__k, o = 0; s && o < s.length; o++)
    (r = s[o]) && (r.__ = e, t = typeof r.type == "function" ? nd(r, t, n) : rd(n, r, r, s, r.__e, t));
  return t;
}
function rd(e, t, n, r, s, o) {
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
function Cg(e, t, n, r, s) {
  var o;
  for (o in n)
    o === "children" || o === "key" || o in t || Ts(e, o, null, n[o], r);
  for (o in t)
    s && typeof t[o] != "function" || o === "children" || o === "key" || o === "value" || o === "checked" || n[o] === t[o] || Ts(e, o, t[o], n[o], r);
}
function jf(e, t, n) {
  t[0] === "-" ? e.setProperty(t, n) : e[t] = n == null ? "" : typeof n != "number" || Sg.test(t) ? n : n + "px";
}
function Ts(e, t, n, r, s) {
  var o;
  e:
    if (t === "style")
      if (typeof n == "string")
        e.style.cssText = n;
      else {
        if (typeof r == "string" && (e.style.cssText = r = ""), r)
          for (t in r)
            n && t in n || jf(e.style, t, "");
        if (n)
          for (t in n)
            r && n[t] === r[t] || jf(e.style, t, n[t]);
      }
    else if (t[0] === "o" && t[1] === "n")
      o = t !== (t = t.replace(/Capture$/, "")), t = t.toLowerCase() in e ? t.toLowerCase().slice(2) : t.slice(2), e.l || (e.l = {}), e.l[t + o] = n, n ? r || e.addEventListener(t, o ? zf : Ff, o) : e.removeEventListener(t, o ? zf : Ff, o);
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
function Ff(e) {
  this.l[e.type + !1](ye.event ? ye.event(e) : e);
}
function zf(e) {
  this.l[e.type + !0](ye.event ? ye.event(e) : e);
}
function od(e, t, n, r, s, o, a, c, f) {
  var p, i, d, u, l, _, g, h, v, m, k, b, C, $, S, y = t.type;
  if (t.constructor !== void 0)
    return null;
  n.__h != null && (f = n.__h, c = t.__e = n.__e, t.__h = null, o = [c]), (p = ye.__b) && p(t);
  try {
    e:
      if (typeof y == "function") {
        if (h = t.props, v = (p = y.contextType) && r[p.__c], m = p ? v ? v.props.value : p.__ : r, n.__c ? g = (i = t.__c = n.__c).__ = i.__E : ("prototype" in y && y.prototype.render ? t.__c = i = new y(h, m) : (t.__c = i = new ao(h, m), i.constructor = y, i.render = Ag), v && v.sub(i), i.props = h, i.state || (i.state = {}), i.context = m, i.__n = r, d = i.__d = !0, i.__h = [], i._sb = []), i.__s == null && (i.__s = i.state), y.getDerivedStateFromProps != null && (i.__s == i.state && (i.__s = _n({}, i.__s)), _n(i.__s, y.getDerivedStateFromProps(h, i.__s))), u = i.props, l = i.state, d)
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
        if (i.context = m, i.props = h, i.__v = t, i.__P = e, b = ye.__r, C = 0, "prototype" in y && y.prototype.render) {
          for (i.state = i.__s, i.__d = !1, b && b(t), p = i.render(i.props, i.state, i.context), $ = 0; $ < i._sb.length; $++)
            i.__h.push(i._sb[$]);
          i._sb = [];
        } else
          do
            i.__d = !1, b && b(t), p = i.render(i.props, i.state, i.context), i.state = i.__s;
          while (i.__d && ++C < 25);
        i.state = i.__s, i.getChildContext != null && (r = _n(_n({}, r), i.getChildContext())), d || i.getSnapshotBeforeUpdate == null || (_ = i.getSnapshotBeforeUpdate(u, l)), S = p != null && p.type === rc && p.key == null ? p.props.children : p, td(e, Array.isArray(S) ? S : [S], t, n, r, s, o, a, c, f), i.base = t.__e, t.__h = null, i.__h.length && a.push(i), g && (i.__E = i.__ = null), i.__e = !1;
      } else
        o == null && t.__v === n.__v ? (t.__k = n.__k, t.__e = n.__e) : t.__e = Og(n.__e, t, n, r, s, o, a, f);
    (p = ye.diffed) && p(t);
  } catch (x) {
    t.__v = null, (f || o != null) && (t.__e = c, t.__h = !!f, o[o.indexOf(c)] = null), ye.__e(x, t, n);
  }
}
function Eg(e, t) {
  ye.__c && ye.__c(t, e), e.some(function(n) {
    try {
      e = n.__h, n.__h = [], e.some(function(r) {
        r.call(n);
      });
    } catch (r) {
      ye.__e(r, n.__v);
    }
  });
}
function Og(e, t, n, r, s, o, a, c) {
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
    if (o = o && nc.call(e.childNodes), p = (d = n.props || Zp).dangerouslySetInnerHTML, i = u.dangerouslySetInnerHTML, !c) {
      if (o != null)
        for (d = {}, _ = 0; _ < e.attributes.length; _++)
          d[e.attributes[_].name] = e.attributes[_].value;
      (i || p) && (i && (p && i.__html == p.__html || i.__html === e.innerHTML) || (e.innerHTML = i && i.__html || ""));
    }
    if (Cg(e, u, d, s, c), i)
      t.__k = [];
    else if (_ = t.props.children, td(e, Array.isArray(_) ? _ : [_], t, n, r, s && l !== "foreignObject", o, a, o ? o[0] : n.__k && Io(n, 0), c), o != null)
      for (_ = o.length; _--; )
        o[_] != null && Qp(o[_]);
    c || ("value" in u && (_ = u.value) !== void 0 && (_ !== e.value || l === "progress" && !_ || l === "option" && _ !== d.value) && Ts(e, "value", _, d.value, !1), "checked" in u && (_ = u.checked) !== void 0 && _ !== e.checked && Ts(e, "checked", _, d.checked, !1));
  }
  return e;
}
function id(e, t, n) {
  try {
    typeof e == "function" ? e(t) : e.current = t;
  } catch (r) {
    ye.__e(r, n);
  }
}
function sd(e, t, n) {
  var r, s;
  if (ye.unmount && ye.unmount(e), (r = e.ref) && (r.current && r.current !== e.__e || id(r, null, t)), (r = e.__c) != null) {
    if (r.componentWillUnmount)
      try {
        r.componentWillUnmount();
      } catch (o) {
        ye.__e(o, t);
      }
    r.base = r.__P = null, e.__c = void 0;
  }
  if (r = e.__k)
    for (s = 0; s < r.length; s++)
      r[s] && sd(r[s], t, n || typeof e.type != "function");
  n || e.__e == null || Qp(e.__e), e.__ = e.__e = e.__d = void 0;
}
function Ag(e, t, n) {
  return this.constructor(e, n);
}
nc = Jp.slice, ye = { __e: function(e, t, n, r) {
  for (var s, o, a; t = t.__; )
    if ((s = t.__c) && !s.__)
      try {
        if ((o = s.constructor) && o.getDerivedStateFromError != null && (s.setState(o.getDerivedStateFromError(e)), a = s.__d), s.componentDidCatch != null && (s.componentDidCatch(e, r || {}), a = s.__d), a)
          return s.__E = s;
      } catch (c) {
        e = c;
      }
  throw e;
} }, Kp = 0, ao.prototype.setState = function(e, t) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = _n({}, this.state), typeof e == "function" && (e = e(_n({}, n), this.props)), e && _n(n, e), e != null && this.__v && (t && this._sb.push(t), Bf(this));
}, ao.prototype.forceUpdate = function(e) {
  this.__v && (this.__e = !0, e && this.__h.push(e), Bf(this));
}, ao.prototype.render = rc, so = [], Ms.__r = 0;
function Mg(e) {
  if (e.indexOf("#") === 0 && (e = e.slice(1)), e.length === 3 && (e = e[0] + e[0] + e[1] + e[1] + e[2] + e[2]), e.length !== 6)
    throw new Error(`Invalid HEX color "${e}".`);
  return [
    parseInt(e.slice(0, 2), 16),
    parseInt(e.slice(2, 4), 16),
    parseInt(e.slice(4, 6), 16)
  ];
}
function Tg(e) {
  const [t, n, r] = typeof e == "string" ? Mg(e) : e;
  return t * 0.299 + n * 0.587 + r * 0.114 > 186;
}
function Vf(e, t) {
  var n, r;
  return Tg(e) ? (n = t == null ? void 0 : t.dark) != null ? n : "#333333" : (r = t == null ? void 0 : t.light) != null ? r : "#ffffff";
}
function Yf(e, t = 255) {
  return Math.min(Math.max(e, 0), t);
}
function Dg(e, t, n) {
  e = e % 360 / 360, t = Yf(t), n = Yf(n);
  const r = n <= 0.5 ? n * (t + 1) : n + t - n * t, s = n * 2 - r, o = (a) => (a = a < 0 ? a + 1 : a > 1 ? a - 1 : a, a * 6 < 1 ? s + (r - s) * a * 6 : a * 2 < 1 ? r : a * 3 < 2 ? s + (r - s) * (2 / 3 - a) * 6 : s);
  return [
    o(e + 1 / 3) * 255,
    o(e) * 255,
    o(e - 1 / 3) * 255
  ];
}
function Lg(e) {
  let t = 0;
  if (typeof e != "string" && (e = String(e)), e && e.length)
    for (let n = 0; n < e.length; ++n)
      t += (n + 1) * e.charCodeAt(n);
  return t;
}
function Ng(e, t) {
  return /^[\u4e00-\u9fa5\s]+$/.test(e) ? e = e.length <= t ? e : e.substring(e.length - t) : /^[A-Za-z\d\s]+$/.test(e) ? e = e[0].toUpperCase() : e = e.length <= t ? e : e.substring(0, t), e;
}
class Pg extends ao {
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
      v.push("has-img"), b = /* @__PURE__ */ hl("img", {
        className: "avatar-img",
        src: d,
        alt: f
      });
    else if (f != null && f.length) {
      const C = Ng(f, i);
      if (v.push("has-text", `has-text-${C.length}`), a)
        !c && a && (m.color = Vf(a));
      else {
        const S = p != null ? p : f, y = (typeof S == "number" ? S : Lg(S)) * u % 360;
        if (m.background = `hsl(${y},${l * 100}%,${_ * 100}%)`, !c) {
          const x = Dg(y, l, _);
          m.color = Vf(x);
        }
      }
      let $;
      k && k < 14 * C.length && ($ = { transform: `scale(${k / (14 * C.length)})`, whiteSpace: "nowrap" }), b = /* @__PURE__ */ hl("div", {
        "data-actualSize": k,
        className: "avatar-text",
        style: $
      }, C);
    }
    return /* @__PURE__ */ hl("div", {
      className: z(v),
      style: m,
      ...h
    }, b, g);
  }
}
class qf extends Ve {
}
N(qf, "NAME", "avatar"), N(qf, "Component", Pg);
class Gf extends Ve {
}
N(Gf, "NAME", "btngroup"), N(Gf, "Component", Ql);
var Za, ce, ad, lo, Xf, Ds = {}, ld = [], Rg = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function pn(e, t) {
  for (var n in t)
    e[n] = t[n];
  return e;
}
function cd(e) {
  var t = e.parentNode;
  t && t.removeChild(e);
}
function J(e, t, n) {
  var r, s, o, a = {};
  for (o in t)
    o == "key" ? r = t[o] : o == "ref" ? s = t[o] : a[o] = t[o];
  if (arguments.length > 2 && (a.children = arguments.length > 3 ? Za.call(arguments, 2) : n), typeof e == "function" && e.defaultProps != null)
    for (o in e.defaultProps)
      a[o] === void 0 && (a[o] = e.defaultProps[o]);
  return Ki(e, a, r, s, null);
}
function Ki(e, t, n, r, s) {
  var o = { type: e, props: t, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: s == null ? ++ad : s };
  return s == null && ce.vnode != null && ce.vnode(o), o;
}
function Hg() {
  return { current: null };
}
function Ja(e) {
  return e.children;
}
function co(e, t) {
  this.props = e, this.context = t;
}
function Uo(e, t) {
  if (t == null)
    return e.__ ? Uo(e.__, e.__.__k.indexOf(e) + 1) : null;
  for (var n; t < e.__k.length; t++)
    if ((n = e.__k[t]) != null && n.__e != null)
      return n.__e;
  return typeof e.type == "function" ? Uo(e) : null;
}
function fd(e) {
  var t, n;
  if ((e = e.__) != null && e.__c != null) {
    for (e.__e = e.__c.base = null, t = 0; t < e.__k.length; t++)
      if ((n = e.__k[t]) != null && n.__e != null) {
        e.__e = e.__c.base = n.__e;
        break;
      }
    return fd(e);
  }
}
function Kf(e) {
  (!e.__d && (e.__d = !0) && lo.push(e) && !Ls.__r++ || Xf !== ce.debounceRendering) && ((Xf = ce.debounceRendering) || setTimeout)(Ls);
}
function Ls() {
  for (var e; Ls.__r = lo.length; )
    e = lo.sort(function(t, n) {
      return t.__v.__b - n.__v.__b;
    }), lo = [], e.some(function(t) {
      var n, r, s, o, a, c;
      t.__d && (a = (o = (n = t).__v).__e, (c = n.__P) && (r = [], (s = pn({}, o)).__v = o.__v + 1, oc(c, o, s, n.__n, c.ownerSVGElement !== void 0, o.__h != null ? [a] : null, r, a == null ? Uo(o) : a, o.__h), dd(r, o), o.__e != a && fd(o)));
    });
}
function ud(e, t, n, r, s, o, a, c, f, p) {
  var i, d, u, l, _, g, h, v = r && r.__k || ld, m = v.length;
  for (n.__k = [], i = 0; i < t.length; i++)
    if ((l = n.__k[i] = (l = t[i]) == null || typeof l == "boolean" ? null : typeof l == "string" || typeof l == "number" || typeof l == "bigint" ? Ki(null, l, null, null, l) : Array.isArray(l) ? Ki(Ja, { children: l }, null, null, null) : l.__b > 0 ? Ki(l.type, l.props, l.key, l.ref ? l.ref : null, l.__v) : l) != null) {
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
      oc(e, l, u = u || Ds, s, o, a, c, f, p), _ = l.__e, (d = l.ref) && u.ref != d && (h || (h = []), u.ref && h.push(u.ref, null, l), h.push(d, l.__c || _, l)), _ != null ? (g == null && (g = _), typeof l.type == "function" && l.__k === u.__k ? l.__d = f = _d(l, f, e) : f = pd(e, l, u, v, _, f), typeof n.type == "function" && (n.__d = f)) : f && u.__e == f && f.parentNode != e && (f = Uo(u));
    }
  for (n.__e = g, i = m; i--; )
    v[i] != null && vd(v[i], v[i]);
  if (h)
    for (i = 0; i < h.length; i++)
      hd(h[i], h[++i], h[++i]);
}
function _d(e, t, n) {
  for (var r, s = e.__k, o = 0; s && o < s.length; o++)
    (r = s[o]) && (r.__ = e, t = typeof r.type == "function" ? _d(r, t, n) : pd(n, r, r, s, r.__e, t));
  return t;
}
function pd(e, t, n, r, s, o) {
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
function Wg(e, t, n, r, s) {
  var o;
  for (o in n)
    o === "children" || o === "key" || o in t || Ns(e, o, null, n[o], r);
  for (o in t)
    s && typeof t[o] != "function" || o === "children" || o === "key" || o === "value" || o === "checked" || n[o] === t[o] || Ns(e, o, t[o], n[o], r);
}
function Zf(e, t, n) {
  t[0] === "-" ? e.setProperty(t, n) : e[t] = n == null ? "" : typeof n != "number" || Rg.test(t) ? n : n + "px";
}
function Ns(e, t, n, r, s) {
  var o;
  e:
    if (t === "style")
      if (typeof n == "string")
        e.style.cssText = n;
      else {
        if (typeof r == "string" && (e.style.cssText = r = ""), r)
          for (t in r)
            n && t in n || Zf(e.style, t, "");
        if (n)
          for (t in n)
            r && n[t] === r[t] || Zf(e.style, t, n[t]);
      }
    else if (t[0] === "o" && t[1] === "n")
      o = t !== (t = t.replace(/Capture$/, "")), t = t.toLowerCase() in e ? t.toLowerCase().slice(2) : t.slice(2), e.l || (e.l = {}), e.l[t + o] = n, n ? r || e.addEventListener(t, o ? Qf : Jf, o) : e.removeEventListener(t, o ? Qf : Jf, o);
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
function Jf(e) {
  this.l[e.type + !1](ce.event ? ce.event(e) : e);
}
function Qf(e) {
  this.l[e.type + !0](ce.event ? ce.event(e) : e);
}
function oc(e, t, n, r, s, o, a, c, f) {
  var p, i, d, u, l, _, g, h, v, m, k, b, C, $, S, y = t.type;
  if (t.constructor !== void 0)
    return null;
  n.__h != null && (f = n.__h, c = t.__e = n.__e, t.__h = null, o = [c]), (p = ce.__b) && p(t);
  try {
    e:
      if (typeof y == "function") {
        if (h = t.props, v = (p = y.contextType) && r[p.__c], m = p ? v ? v.props.value : p.__ : r, n.__c ? g = (i = t.__c = n.__c).__ = i.__E : ("prototype" in y && y.prototype.render ? t.__c = i = new y(h, m) : (t.__c = i = new co(h, m), i.constructor = y, i.render = Ug), v && v.sub(i), i.props = h, i.state || (i.state = {}), i.context = m, i.__n = r, d = i.__d = !0, i.__h = [], i._sb = []), i.__s == null && (i.__s = i.state), y.getDerivedStateFromProps != null && (i.__s == i.state && (i.__s = pn({}, i.__s)), pn(i.__s, y.getDerivedStateFromProps(h, i.__s))), u = i.props, l = i.state, d)
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
        if (i.context = m, i.props = h, i.__v = t, i.__P = e, b = ce.__r, C = 0, "prototype" in y && y.prototype.render) {
          for (i.state = i.__s, i.__d = !1, b && b(t), p = i.render(i.props, i.state, i.context), $ = 0; $ < i._sb.length; $++)
            i.__h.push(i._sb[$]);
          i._sb = [];
        } else
          do
            i.__d = !1, b && b(t), p = i.render(i.props, i.state, i.context), i.state = i.__s;
          while (i.__d && ++C < 25);
        i.state = i.__s, i.getChildContext != null && (r = pn(pn({}, r), i.getChildContext())), d || i.getSnapshotBeforeUpdate == null || (_ = i.getSnapshotBeforeUpdate(u, l)), S = p != null && p.type === Ja && p.key == null ? p.props.children : p, ud(e, Array.isArray(S) ? S : [S], t, n, r, s, o, a, c, f), i.base = t.__e, t.__h = null, i.__h.length && a.push(i), g && (i.__E = i.__ = null), i.__e = !1;
      } else
        o == null && t.__v === n.__v ? (t.__k = n.__k, t.__e = n.__e) : t.__e = Ig(n.__e, t, n, r, s, o, a, f);
    (p = ce.diffed) && p(t);
  } catch (x) {
    t.__v = null, (f || o != null) && (t.__e = c, t.__h = !!f, o[o.indexOf(c)] = null), ce.__e(x, t, n);
  }
}
function dd(e, t) {
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
function Ig(e, t, n, r, s, o, a, c) {
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
    if (o = o && Za.call(e.childNodes), p = (d = n.props || Ds).dangerouslySetInnerHTML, i = u.dangerouslySetInnerHTML, !c) {
      if (o != null)
        for (d = {}, _ = 0; _ < e.attributes.length; _++)
          d[e.attributes[_].name] = e.attributes[_].value;
      (i || p) && (i && (p && i.__html == p.__html || i.__html === e.innerHTML) || (e.innerHTML = i && i.__html || ""));
    }
    if (Wg(e, u, d, s, c), i)
      t.__k = [];
    else if (_ = t.props.children, ud(e, Array.isArray(_) ? _ : [_], t, n, r, s && l !== "foreignObject", o, a, o ? o[0] : n.__k && Uo(n, 0), c), o != null)
      for (_ = o.length; _--; )
        o[_] != null && cd(o[_]);
    c || ("value" in u && (_ = u.value) !== void 0 && (_ !== e.value || l === "progress" && !_ || l === "option" && _ !== d.value) && Ns(e, "value", _, d.value, !1), "checked" in u && (_ = u.checked) !== void 0 && _ !== e.checked && Ns(e, "checked", _, d.checked, !1));
  }
  return e;
}
function hd(e, t, n) {
  try {
    typeof e == "function" ? e(t) : e.current = t;
  } catch (r) {
    ce.__e(r, n);
  }
}
function vd(e, t, n) {
  var r, s;
  if (ce.unmount && ce.unmount(e), (r = e.ref) && (r.current && r.current !== e.__e || hd(r, null, t)), (r = e.__c) != null) {
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
      r[s] && vd(r[s], t, n || typeof e.type != "function");
  n || e.__e == null || cd(e.__e), e.__ = e.__e = e.__d = void 0;
}
function Ug(e, t, n) {
  return this.constructor(e, n);
}
function Bg(e, t, n) {
  var r, s, o;
  ce.__ && ce.__(e, t), s = (r = typeof n == "function") ? null : n && n.__k || t.__k, o = [], oc(t, e = (!r && n || t).__k = J(Ja, null, [e]), s || Ds, Ds, t.ownerSVGElement !== void 0, !r && n ? [n] : s ? null : t.firstChild ? Za.call(t.childNodes) : null, o, !r && n ? n : s ? s.__e : t.firstChild, r), dd(o, e);
}
Za = ld.slice, ce = { __e: function(e, t, n, r) {
  for (var s, o, a; t = t.__; )
    if ((s = t.__c) && !s.__)
      try {
        if ((o = s.constructor) && o.getDerivedStateFromError != null && (s.setState(o.getDerivedStateFromError(e)), a = s.__d), s.componentDidCatch != null && (s.componentDidCatch(e, r || {}), a = s.__d), a)
          return s.__E = s;
      } catch (c) {
        e = c;
      }
  throw e;
} }, ad = 0, co.prototype.setState = function(e, t) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = pn({}, this.state), typeof e == "function" && (e = e(pn({}, n), this.props)), e && pn(n, e), e != null && this.__v && (t && this._sb.push(t), Kf(this));
}, co.prototype.forceUpdate = function(e) {
  this.__v && (this.__e = !0, e && this.__h.push(e), Kf(this));
}, co.prototype.render = Ja, lo = [], Ls.__r = 0;
var md = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, gd = { exports: {} };
(function(e, t) {
  (function(n, r) {
    e.exports = r();
  })(md, function() {
    var n = 1e3, r = 6e4, s = 36e5, o = "millisecond", a = "second", c = "minute", f = "hour", p = "day", i = "week", d = "month", u = "quarter", l = "year", _ = "date", g = "Invalid Date", h = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, v = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, m = { name: "en", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), ordinal: function(T) {
      var M = ["th", "st", "nd", "rd"], O = T % 100;
      return "[" + T + (M[(O - 20) % 10] || M[O] || M[0]) + "]";
    } }, k = function(T, M, O) {
      var D = String(T);
      return !D || D.length >= M ? T : "" + Array(M + 1 - D.length).join(O) + T;
    }, b = { s: k, z: function(T) {
      var M = -T.utcOffset(), O = Math.abs(M), D = Math.floor(O / 60), E = O % 60;
      return (M <= 0 ? "+" : "-") + k(D, 2, "0") + ":" + k(E, 2, "0");
    }, m: function T(M, O) {
      if (M.date() < O.date())
        return -T(O, M);
      var D = 12 * (O.year() - M.year()) + (O.month() - M.month()), E = M.clone().add(D, d), R = O - E < 0, L = M.clone().add(D + (R ? -1 : 1), d);
      return +(-(D + (O - E) / (R ? E - L : L - E)) || 0);
    }, a: function(T) {
      return T < 0 ? Math.ceil(T) || 0 : Math.floor(T);
    }, p: function(T) {
      return { M: d, y: l, w: i, d: p, D: _, h: f, m: c, s: a, ms: o, Q: u }[T] || String(T || "").toLowerCase().replace(/s$/, "");
    }, u: function(T) {
      return T === void 0;
    } }, C = "en", $ = {};
    $[C] = m;
    var S = function(T) {
      return T instanceof W;
    }, y = function T(M, O, D) {
      var E;
      if (!M)
        return C;
      if (typeof M == "string") {
        var R = M.toLowerCase();
        $[R] && (E = R), O && ($[R] = O, E = R);
        var L = M.split("-");
        if (!E && L.length > 1)
          return T(L[0]);
      } else {
        var I = M.name;
        $[I] = M, E = I;
      }
      return !D && E && (C = E), E || !D && C;
    }, x = function(T, M) {
      if (S(T))
        return T.clone();
      var O = typeof M == "object" ? M : {};
      return O.date = T, O.args = arguments, new W(O);
    }, A = b;
    A.l = y, A.i = S, A.w = function(T, M) {
      return x(T, { locale: M.$L, utc: M.$u, x: M.$x, $offset: M.$offset });
    };
    var W = function() {
      function T(O) {
        this.$L = y(O.locale, null, !0), this.parse(O);
      }
      var M = T.prototype;
      return M.parse = function(O) {
        this.$d = function(D) {
          var E = D.date, R = D.utc;
          if (E === null)
            return new Date(NaN);
          if (A.u(E))
            return new Date();
          if (E instanceof Date)
            return new Date(E);
          if (typeof E == "string" && !/Z$/i.test(E)) {
            var L = E.match(h);
            if (L) {
              var I = L[2] - 1 || 0, F = (L[7] || "0").substring(0, 3);
              return R ? new Date(Date.UTC(L[1], I, L[3] || 1, L[4] || 0, L[5] || 0, L[6] || 0, F)) : new Date(L[1], I, L[3] || 1, L[4] || 0, L[5] || 0, L[6] || 0, F);
            }
          }
          return new Date(E);
        }(O), this.$x = O.x || {}, this.init();
      }, M.init = function() {
        var O = this.$d;
        this.$y = O.getFullYear(), this.$M = O.getMonth(), this.$D = O.getDate(), this.$W = O.getDay(), this.$H = O.getHours(), this.$m = O.getMinutes(), this.$s = O.getSeconds(), this.$ms = O.getMilliseconds();
      }, M.$utils = function() {
        return A;
      }, M.isValid = function() {
        return this.$d.toString() !== g;
      }, M.isSame = function(O, D) {
        var E = x(O);
        return this.startOf(D) <= E && E <= this.endOf(D);
      }, M.isAfter = function(O, D) {
        return x(O) < this.startOf(D);
      }, M.isBefore = function(O, D) {
        return this.endOf(D) < x(O);
      }, M.$g = function(O, D, E) {
        return A.u(O) ? this[D] : this.set(E, O);
      }, M.unix = function() {
        return Math.floor(this.valueOf() / 1e3);
      }, M.valueOf = function() {
        return this.$d.getTime();
      }, M.startOf = function(O, D) {
        var E = this, R = !!A.u(D) || D, L = A.p(O), I = function(q, G) {
          var ne = A.w(E.$u ? Date.UTC(E.$y, G, q) : new Date(E.$y, G, q), E);
          return R ? ne : ne.endOf(p);
        }, F = function(q, G) {
          return A.w(E.toDate()[q].apply(E.toDate("s"), (R ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(G)), E);
        }, j = this.$W, V = this.$M, X = this.$D, H = "set" + (this.$u ? "UTC" : "");
        switch (L) {
          case l:
            return R ? I(1, 0) : I(31, 11);
          case d:
            return R ? I(1, V) : I(0, V + 1);
          case i:
            var Y = this.$locale().weekStart || 0, K = (j < Y ? j + 7 : j) - Y;
            return I(R ? X - K : X + (6 - K), V);
          case p:
          case _:
            return F(H + "Hours", 0);
          case f:
            return F(H + "Minutes", 1);
          case c:
            return F(H + "Seconds", 2);
          case a:
            return F(H + "Milliseconds", 3);
          default:
            return this.clone();
        }
      }, M.endOf = function(O) {
        return this.startOf(O, !1);
      }, M.$set = function(O, D) {
        var E, R = A.p(O), L = "set" + (this.$u ? "UTC" : ""), I = (E = {}, E[p] = L + "Date", E[_] = L + "Date", E[d] = L + "Month", E[l] = L + "FullYear", E[f] = L + "Hours", E[c] = L + "Minutes", E[a] = L + "Seconds", E[o] = L + "Milliseconds", E)[R], F = R === p ? this.$D + (D - this.$W) : D;
        if (R === d || R === l) {
          var j = this.clone().set(_, 1);
          j.$d[I](F), j.init(), this.$d = j.set(_, Math.min(this.$D, j.daysInMonth())).$d;
        } else
          I && this.$d[I](F);
        return this.init(), this;
      }, M.set = function(O, D) {
        return this.clone().$set(O, D);
      }, M.get = function(O) {
        return this[A.p(O)]();
      }, M.add = function(O, D) {
        var E, R = this;
        O = Number(O);
        var L = A.p(D), I = function(V) {
          var X = x(R);
          return A.w(X.date(X.date() + Math.round(V * O)), R);
        };
        if (L === d)
          return this.set(d, this.$M + O);
        if (L === l)
          return this.set(l, this.$y + O);
        if (L === p)
          return I(1);
        if (L === i)
          return I(7);
        var F = (E = {}, E[c] = r, E[f] = s, E[a] = n, E)[L] || 1, j = this.$d.getTime() + O * F;
        return A.w(j, this);
      }, M.subtract = function(O, D) {
        return this.add(-1 * O, D);
      }, M.format = function(O) {
        var D = this, E = this.$locale();
        if (!this.isValid())
          return E.invalidDate || g;
        var R = O || "YYYY-MM-DDTHH:mm:ssZ", L = A.z(this), I = this.$H, F = this.$m, j = this.$M, V = E.weekdays, X = E.months, H = function(G, ne, re, pe) {
          return G && (G[ne] || G(D, R)) || re[ne].slice(0, pe);
        }, Y = function(G) {
          return A.s(I % 12 || 12, G, "0");
        }, K = E.meridiem || function(G, ne, re) {
          var pe = G < 12 ? "AM" : "PM";
          return re ? pe.toLowerCase() : pe;
        }, q = { YY: String(this.$y).slice(-2), YYYY: this.$y, M: j + 1, MM: A.s(j + 1, 2, "0"), MMM: H(E.monthsShort, j, X, 3), MMMM: H(X, j), D: this.$D, DD: A.s(this.$D, 2, "0"), d: String(this.$W), dd: H(E.weekdaysMin, this.$W, V, 2), ddd: H(E.weekdaysShort, this.$W, V, 3), dddd: V[this.$W], H: String(I), HH: A.s(I, 2, "0"), h: Y(1), hh: Y(2), a: K(I, F, !0), A: K(I, F, !1), m: String(F), mm: A.s(F, 2, "0"), s: String(this.$s), ss: A.s(this.$s, 2, "0"), SSS: A.s(this.$ms, 3, "0"), Z: L };
        return R.replace(v, function(G, ne) {
          return ne || q[G] || L.replace(":", "");
        });
      }, M.utcOffset = function() {
        return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
      }, M.diff = function(O, D, E) {
        var R, L = A.p(D), I = x(O), F = (I.utcOffset() - this.utcOffset()) * r, j = this - I, V = A.m(this, I);
        return V = (R = {}, R[l] = V / 12, R[d] = V, R[u] = V / 3, R[i] = (j - F) / 6048e5, R[p] = (j - F) / 864e5, R[f] = j / s, R[c] = j / r, R[a] = j / n, R)[L] || j, E ? V : A.a(V);
      }, M.daysInMonth = function() {
        return this.endOf(d).$D;
      }, M.$locale = function() {
        return $[this.$L];
      }, M.locale = function(O, D) {
        if (!O)
          return this.$L;
        var E = this.clone(), R = y(O, D, !0);
        return R && (E.$L = R), E;
      }, M.clone = function() {
        return A.w(this.$d, this);
      }, M.toDate = function() {
        return new Date(this.valueOf());
      }, M.toJSON = function() {
        return this.isValid() ? this.toISOString() : null;
      }, M.toISOString = function() {
        return this.$d.toISOString();
      }, M.toString = function() {
        return this.$d.toUTCString();
      }, T;
    }(), U = W.prototype;
    return x.prototype = U, [["$ms", o], ["$s", a], ["$m", c], ["$H", f], ["$W", p], ["$M", d], ["$y", l], ["$D", _]].forEach(function(T) {
      U[T[1]] = function(M) {
        return this.$g(M, T[0], T[1]);
      };
    }), x.extend = function(T, M) {
      return T.$i || (T(M, W, x), T.$i = !0), x;
    }, x.locale = y, x.isDayjs = S, x.unix = function(T) {
      return x(1e3 * T);
    }, x.en = $[C], x.Ls = $, x.p = {}, x;
  });
})(gd);
const oe = gd.exports, $l = (e = 0, t = 0) => {
  const n = [];
  for (let r = e; r <= t; r++)
    n.push(r);
  return n;
}, yd = (e, t) => {
  const n = Math.ceil(e.length / t);
  return new Array(t).fill({}).map((r, s) => e.slice(s * n, (s + 1) * n));
}, jg = (e) => {
  const { format: t, minDate: n, maxDate: r, tagDate: s, DATEROWCOUNT: o, showOtherMonth: a, clickDay: c, selectedDate: f, handleChangePanel: p, showToday: i, handleChange: d, clickToday: u } = e, l = (A) => oe(A).isValid() ? oe(A).add(1, "months").format(t) : "", _ = (A) => oe(A).isValid() ? oe(A).subtract(1, "months").format(t) : "", g = () => {
    const A = _(f || oe().format(t));
    d(A);
  }, h = () => {
    const A = l(f || oe().format(t));
    d(A);
  }, v = () => {
    d("", !0);
  }, m = () => {
    d(f, !0);
  }, k = (A, W, U, T) => {
    const M = oe(), O = oe(f), D = new Array(A);
    for (let E = 0; E < A; E++) {
      const R = W + E + 1, L = U.set("date", R), I = T && !a ? !0 : n && L.isBefore(n, "date") || r && L.isAfter(r, "date");
      D[E] = {
        isSelected: O.isSame(U.set("date", R), "date"),
        isToday: M.isSame(L, "date"),
        isDisable: !!I,
        isTag: !!(s != null && s.includes(L.format(t))),
        date: L,
        isOtherMonth: T,
        onClick: () => I ? {} : c(L)
      };
    }
    return D;
  }, b = () => {
    const A = oe(f), W = oe(), U = f ? A : W, T = U.set("date", 1).day(), M = T === 0 ? 6 : T - 1, O = U.subtract(1, "month"), E = Number(O.endOf("month").get("date")) - M;
    return k(M, E, O, !0);
  }, C = () => {
    const A = oe(f), W = oe(), U = f ? A : W, T = U.set("date", 1).day(), M = T === 0 ? 6 : T - 1, O = U.endOf("month").get("date"), D = U.add(1, "month"), E = 7 * 6 % (M + O);
    return k(E, 0, D, !0);
  }, $ = () => {
    const A = f, W = oe(), U = f ? oe(A) : W, T = U.endOf("month").get("date"), M = k(T, 0, U, !1), O = b(), D = C(), E = [...O, ...M, ...D];
    return yd(E, o);
  }, S = ["\u4E00", "\u4E8C", "\u4E09", "\u56DB", "\u4E94", "\u516D", "\u65E5"], y = $(), x = f || oe().format(t);
  return /* @__PURE__ */ J("div", {
    className: z("datepicker-calendar-day")
  }, /* @__PURE__ */ J("div", {
    className: "datepicker-calendar-bar not-hide-datepicker"
  }, /* @__PURE__ */ J("div", {
    class: "flex"
  }, /* @__PURE__ */ J("button", {
    type: "button",
    className: "btn ghost",
    onClick: () => p("year")
  }, /* @__PURE__ */ J("span", null, oe(x).format("YYYY \u5E74 MM \u6708")), /* @__PURE__ */ J("span", {
    class: "caret"
  }))), /* @__PURE__ */ J("div", {
    class: "flex"
  }, i && /* @__PURE__ */ J("button", {
    type: "button",
    className: "btn ghost",
    onClick: () => {
      u();
    }
  }, "\u4ECA\u5929"), /* @__PURE__ */ J("button", {
    type: "button",
    className: "btn ghost",
    onClick: () => g()
  }, /* @__PURE__ */ J("i", {
    className: "icon icon-angle-left"
  })), /* @__PURE__ */ J("button", {
    type: "button",
    className: "btn ghost",
    onClick: () => h()
  }, /* @__PURE__ */ J("i", {
    className: "icon icon-angle-right"
  })))), /* @__PURE__ */ J("table", {
    className: "datepicker-calendar-table not-hide-datepicker"
  }, /* @__PURE__ */ J("thead", {
    className: "datepicker-calendar-thead"
  }, /* @__PURE__ */ J("tr", null, S.map((A, W) => /* @__PURE__ */ J("th", {
    key: W
  }, A)))), /* @__PURE__ */ J("tbody", {
    className: "datepicker-calendar-tbody"
  }, y.map((A, W) => /* @__PURE__ */ J("tr", {
    key: W
  }, A.map((U, T) => {
    const M = ["text-center"];
    return U.isToday && M.push("datepicker-calendar-today"), U.isSelected && M.push("datepicker-calendar-selected-date"), U.isOtherMonth && M.push("datepicker-calendar-other-month"), U.isTag && M.push("datepicker-calendar-tag"), /* @__PURE__ */ J("td", {
      key: T,
      className: z(M)
    }, /* @__PURE__ */ J("div", {
      className: z("btn", "ghost", "datepicker-calendar-date", U.isDisable ? "disabled" : ""),
      onClick: U.onClick
    }, !a && U.isOtherMonth ? "" : oe(U.date).format("DD")));
  }))))), /* @__PURE__ */ J("div", {
    class: "datepicker-calendar-footer text-right mt-1"
  }, /* @__PURE__ */ J("button", {
    type: "button",
    className: "btn ghost text-primary",
    onClick: v
  }, /* @__PURE__ */ J("span", null, "\u6E05\u9664")), /* @__PURE__ */ J("button", {
    type: "button",
    className: "btn ghost text-primary",
    onClick: m
  }, /* @__PURE__ */ J("span", null, "\u786E\u8BA4"))));
};
const Fg = (e) => {
  const { format: t, selectedDate: n, minDate: r, maxDate: s, year: o, handleChangeMonth: a } = e, c = oe(r).format("M"), f = oe(s).format("M"), p = yd($l(1, 12), 3), i = (d, u) => {
    u || a(d);
  };
  return /* @__PURE__ */ J("div", {
    className: z("datepicker-calendar-month", "not-hide-datepicker")
  }, /* @__PURE__ */ J("table", {
    className: "datepicker-calendar-month-table"
  }, /* @__PURE__ */ J("tbody", {
    className: "datepicker-calendar-month-table-body"
  }, p.map((d, u) => /* @__PURE__ */ J("tr", {
    key: u
  }, d.map((l, _) => {
    const g = ["text-center"], h = oe(`${o}-${l}-01`).format(t), v = !!(c && oe(n).isBefore(c) || f && oe(n).isBefore(f));
    return /* @__PURE__ */ J("td", {
      key: _,
      className: z(g)
    }, /* @__PURE__ */ J("div", {
      className: z("btn", "size-sm", "ghost", "datepicker-calendar-month", v ? "disabled" : ""),
      onClick: () => {
        i(h, v);
      }
    }, oe(h).format("MM"), " \u6708"));
  }))))));
}, zg = (e) => {
  const { selectedDate: t, handleChangeMonth: n } = e;
  setTimeout(() => {
    const a = document.getElementsByClassName("datepicker-accordion");
    a != null && a.length && (a[0].scrollTop = 2400);
  }, 800);
  const r = oe(t).year(), s = [...$l(r - 100, r), ...$l(r + 1, r + 100)], o = (a, c) => {
    var i, d, u;
    if (!(a != null && a.target))
      return;
    const f = document.querySelectorAll(".datepicker-accordion > ul > li > .datepicker-accordion-title");
    for (let l = 0; l < f.length; l++)
      (i = f[l].nextElementSibling) != null && i.classList.contains("hidden") || (d = f[l].nextElementSibling) == null || d.classList.add("hidden");
    (u = a.target.nextElementSibling) == null || u.classList.toggle("hidden");
    const p = document.querySelector(".datepicker-accordion");
    !p || (p.scrollTop + p.clientHeight === p.scrollHeight ? p.scrollTop = 0 : c < r ? p.scrollTop = p.scrollTop - 30 : p.scrollTop = p.scrollTop + 30);
  };
  return /* @__PURE__ */ J("div", {
    class: "datepicker-accordion scroll-smooth not-hide-datepicker"
  }, /* @__PURE__ */ J("ul", null, s.map((a, c) => /* @__PURE__ */ J("li", {
    id: r === a ? "selected" : ""
  }, /* @__PURE__ */ J("div", {
    class: "datepicker-accordion-title",
    onClick: (f) => o(f, a)
  }, a), /* @__PURE__ */ J("div", {
    key: c,
    className: z("datepicker-accordion-content", r === a ? "" : "hidden")
  }, J(Fg, {
    ...e,
    year: a,
    handleChangeMonth: n
  }))))));
};
class Vg extends co {
  constructor() {
    super(...arguments);
    N(this, "DATEROWCOUNT", 6);
    N(this, "ref", Hg());
    N(this, "state", {
      selectedDate: this.props.date || null,
      type: "day"
    });
  }
  handleChange(n, r = !1) {
    var s;
    this.setState({ selectedDate: n }), r && ((s = this.props) == null || s.onChange(n));
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
    const r = n === "subtract" ? oe(this.state.selectedDate).subtract(1, "year").startOf("year").format(this.props.format) : oe(this.state.selectedDate).add(1, "year").startOf("year").format(this.props.format);
    this.handleChange(r);
  }
  clickDay(n) {
    const r = oe(n).format(this.props.format);
    this.handleChange(r);
  }
  clickToday() {
    this.handleChange(oe().format(this.props.format));
  }
  renderPanel() {
    return this.state.type === "day" ? J(jg, {
      ...this.props,
      handleChange: this.handleChange.bind(this),
      handleChangePanel: this.handleChangePanel.bind(this),
      clickToday: this.clickToday.bind(this),
      clickDay: this.clickDay.bind(this),
      selectedDate: this.state.selectedDate,
      DATEROWCOUNT: this.DATEROWCOUNT
    }) : J(zg, {
      ...this.props,
      selectedDate: this.state.selectedDate,
      handleChangeMonth: this.handleChangeMonth.bind(this)
    });
  }
  render() {
    const { className: n } = this.props;
    return /* @__PURE__ */ J("div", {
      className: z("datepicker-calendar", n),
      ref: this.ref
    }, this.renderPanel());
  }
}
function et(e) {
  if (e == null)
    return window;
  if (e.toString() !== "[object Window]") {
    var t = e.ownerDocument;
    return t && t.defaultView || window;
  }
  return e;
}
function zn(e) {
  var t = et(e).Element;
  return e instanceof t || e instanceof Element;
}
function Ke(e) {
  var t = et(e).HTMLElement;
  return e instanceof t || e instanceof HTMLElement;
}
function ic(e) {
  if (typeof ShadowRoot > "u")
    return !1;
  var t = et(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot;
}
var Un = Math.max, Ps = Math.min, $r = Math.round;
function kl() {
  var e = navigator.userAgentData;
  return e != null && e.brands ? e.brands.map(function(t) {
    return t.brand + "/" + t.version;
  }).join(" ") : navigator.userAgent;
}
function bd() {
  return !/^((?!chrome|android).)*safari/i.test(kl());
}
function kr(e, t, n) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  var r = e.getBoundingClientRect(), s = 1, o = 1;
  t && Ke(e) && (s = e.offsetWidth > 0 && $r(r.width) / e.offsetWidth || 1, o = e.offsetHeight > 0 && $r(r.height) / e.offsetHeight || 1);
  var a = zn(e) ? et(e) : window, c = a.visualViewport, f = !bd() && n, p = (r.left + (f && c ? c.offsetLeft : 0)) / s, i = (r.top + (f && c ? c.offsetTop : 0)) / o, d = r.width / s, u = r.height / o;
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
function sc(e) {
  var t = et(e), n = t.pageXOffset, r = t.pageYOffset;
  return {
    scrollLeft: n,
    scrollTop: r
  };
}
function Yg(e) {
  return {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  };
}
function qg(e) {
  return e === et(e) || !Ke(e) ? sc(e) : Yg(e);
}
function Lt(e) {
  return e ? (e.nodeName || "").toLowerCase() : null;
}
function On(e) {
  return ((zn(e) ? e.ownerDocument : e.document) || window.document).documentElement;
}
function ac(e) {
  return kr(On(e)).left + sc(e).scrollLeft;
}
function qt(e) {
  return et(e).getComputedStyle(e);
}
function lc(e) {
  var t = qt(e), n = t.overflow, r = t.overflowX, s = t.overflowY;
  return /auto|scroll|overlay|hidden/.test(n + s + r);
}
function Gg(e) {
  var t = e.getBoundingClientRect(), n = $r(t.width) / e.offsetWidth || 1, r = $r(t.height) / e.offsetHeight || 1;
  return n !== 1 || r !== 1;
}
function Xg(e, t, n) {
  n === void 0 && (n = !1);
  var r = Ke(t), s = Ke(t) && Gg(t), o = On(t), a = kr(e, s, n), c = {
    scrollLeft: 0,
    scrollTop: 0
  }, f = {
    x: 0,
    y: 0
  };
  return (r || !r && !n) && ((Lt(t) !== "body" || lc(o)) && (c = qg(t)), Ke(t) ? (f = kr(t, !0), f.x += t.clientLeft, f.y += t.clientTop) : o && (f.x = ac(o))), {
    x: a.left + c.scrollLeft - f.x,
    y: a.top + c.scrollTop - f.y,
    width: a.width,
    height: a.height
  };
}
function cc(e) {
  var t = kr(e), n = e.offsetWidth, r = e.offsetHeight;
  return Math.abs(t.width - n) <= 1 && (n = t.width), Math.abs(t.height - r) <= 1 && (r = t.height), {
    x: e.offsetLeft,
    y: e.offsetTop,
    width: n,
    height: r
  };
}
function Qa(e) {
  return Lt(e) === "html" ? e : e.assignedSlot || e.parentNode || (ic(e) ? e.host : null) || On(e);
}
function wd(e) {
  return ["html", "body", "#document"].indexOf(Lt(e)) >= 0 ? e.ownerDocument.body : Ke(e) && lc(e) ? e : wd(Qa(e));
}
function fo(e, t) {
  var n;
  t === void 0 && (t = []);
  var r = wd(e), s = r === ((n = e.ownerDocument) == null ? void 0 : n.body), o = et(r), a = s ? [o].concat(o.visualViewport || [], lc(r) ? r : []) : r, c = t.concat(a);
  return s ? c : c.concat(fo(Qa(a)));
}
function Kg(e) {
  return ["table", "td", "th"].indexOf(Lt(e)) >= 0;
}
function eu(e) {
  return !Ke(e) || qt(e).position === "fixed" ? null : e.offsetParent;
}
function Zg(e) {
  var t = /firefox/i.test(kl()), n = /Trident/i.test(kl());
  if (n && Ke(e)) {
    var r = qt(e);
    if (r.position === "fixed")
      return null;
  }
  var s = Qa(e);
  for (ic(s) && (s = s.host); Ke(s) && ["html", "body"].indexOf(Lt(s)) < 0; ) {
    var o = qt(s);
    if (o.transform !== "none" || o.perspective !== "none" || o.contain === "paint" || ["transform", "perspective"].indexOf(o.willChange) !== -1 || t && o.willChange === "filter" || t && o.filter && o.filter !== "none")
      return s;
    s = s.parentNode;
  }
  return null;
}
function Oi(e) {
  for (var t = et(e), n = eu(e); n && Kg(n) && qt(n).position === "static"; )
    n = eu(n);
  return n && (Lt(n) === "html" || Lt(n) === "body" && qt(n).position === "static") ? t : n || Zg(e) || t;
}
var We = "top", dt = "bottom", ht = "right", Ie = "left", fc = "auto", Ai = [We, dt, ht, Ie], xr = "start", Bo = "end", Jg = "clippingParents", $d = "viewport", Ur = "popper", Qg = "reference", tu = /* @__PURE__ */ Ai.reduce(function(e, t) {
  return e.concat([t + "-" + xr, t + "-" + Bo]);
}, []), kd = /* @__PURE__ */ [].concat(Ai, [fc]).reduce(function(e, t) {
  return e.concat([t, t + "-" + xr, t + "-" + Bo]);
}, []), ey = "beforeRead", ty = "read", ny = "afterRead", ry = "beforeMain", oy = "main", iy = "afterMain", sy = "beforeWrite", ay = "write", ly = "afterWrite", cy = [ey, ty, ny, ry, oy, iy, sy, ay, ly];
function fy(e) {
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
function uy(e) {
  var t = fy(e);
  return cy.reduce(function(n, r) {
    return n.concat(t.filter(function(s) {
      return s.phase === r;
    }));
  }, []);
}
function _y(e) {
  var t;
  return function() {
    return t || (t = new Promise(function(n) {
      Promise.resolve().then(function() {
        t = void 0, n(e());
      });
    })), t;
  };
}
function Mt(e) {
  return e.split("-")[0];
}
function py(e) {
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
function dy(e, t) {
  var n = et(e), r = On(e), s = n.visualViewport, o = r.clientWidth, a = r.clientHeight, c = 0, f = 0;
  if (s) {
    o = s.width, a = s.height;
    var p = bd();
    (p || !p && t === "fixed") && (c = s.offsetLeft, f = s.offsetTop);
  }
  return {
    width: o,
    height: a,
    x: c + ac(e),
    y: f
  };
}
function hy(e) {
  var t, n = On(e), r = sc(e), s = (t = e.ownerDocument) == null ? void 0 : t.body, o = Un(n.scrollWidth, n.clientWidth, s ? s.scrollWidth : 0, s ? s.clientWidth : 0), a = Un(n.scrollHeight, n.clientHeight, s ? s.scrollHeight : 0, s ? s.clientHeight : 0), c = -r.scrollLeft + ac(e), f = -r.scrollTop;
  return qt(s || n).direction === "rtl" && (c += Un(n.clientWidth, s ? s.clientWidth : 0) - o), {
    width: o,
    height: a,
    x: c,
    y: f
  };
}
function xd(e, t) {
  var n = t.getRootNode && t.getRootNode();
  if (e.contains(t))
    return !0;
  if (n && ic(n)) {
    var r = t;
    do {
      if (r && e.isSameNode(r))
        return !0;
      r = r.parentNode || r.host;
    } while (r);
  }
  return !1;
}
function xl(e) {
  return Object.assign({}, e, {
    left: e.x,
    top: e.y,
    right: e.x + e.width,
    bottom: e.y + e.height
  });
}
function vy(e, t) {
  var n = kr(e, !1, t === "fixed");
  return n.top = n.top + e.clientTop, n.left = n.left + e.clientLeft, n.bottom = n.top + e.clientHeight, n.right = n.left + e.clientWidth, n.width = e.clientWidth, n.height = e.clientHeight, n.x = n.left, n.y = n.top, n;
}
function nu(e, t, n) {
  return t === $d ? xl(dy(e, n)) : zn(t) ? vy(t, n) : xl(hy(On(e)));
}
function my(e) {
  var t = fo(Qa(e)), n = ["absolute", "fixed"].indexOf(qt(e).position) >= 0, r = n && Ke(e) ? Oi(e) : e;
  return zn(r) ? t.filter(function(s) {
    return zn(s) && xd(s, r) && Lt(s) !== "body";
  }) : [];
}
function gy(e, t, n, r) {
  var s = t === "clippingParents" ? my(e) : [].concat(t), o = [].concat(s, [n]), a = o[0], c = o.reduce(function(f, p) {
    var i = nu(e, p, r);
    return f.top = Un(i.top, f.top), f.right = Ps(i.right, f.right), f.bottom = Ps(i.bottom, f.bottom), f.left = Un(i.left, f.left), f;
  }, nu(e, a, r));
  return c.width = c.right - c.left, c.height = c.bottom - c.top, c.x = c.left, c.y = c.top, c;
}
function Sr(e) {
  return e.split("-")[1];
}
function uc(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function Sd(e) {
  var t = e.reference, n = e.element, r = e.placement, s = r ? Mt(r) : null, o = r ? Sr(r) : null, a = t.x + t.width / 2 - n.width / 2, c = t.y + t.height / 2 - n.height / 2, f;
  switch (s) {
    case We:
      f = {
        x: a,
        y: t.y - n.height
      };
      break;
    case dt:
      f = {
        x: a,
        y: t.y + t.height
      };
      break;
    case ht:
      f = {
        x: t.x + t.width,
        y: c
      };
      break;
    case Ie:
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
  var p = s ? uc(s) : null;
  if (p != null) {
    var i = p === "y" ? "height" : "width";
    switch (o) {
      case xr:
        f[p] = f[p] - (t[i] / 2 - n[i] / 2);
        break;
      case Bo:
        f[p] = f[p] + (t[i] / 2 - n[i] / 2);
        break;
    }
  }
  return f;
}
function Cd() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
function Ed(e) {
  return Object.assign({}, Cd(), e);
}
function Od(e, t) {
  return t.reduce(function(n, r) {
    return n[r] = e, n;
  }, {});
}
function _c(e, t) {
  t === void 0 && (t = {});
  var n = t, r = n.placement, s = r === void 0 ? e.placement : r, o = n.strategy, a = o === void 0 ? e.strategy : o, c = n.boundary, f = c === void 0 ? Jg : c, p = n.rootBoundary, i = p === void 0 ? $d : p, d = n.elementContext, u = d === void 0 ? Ur : d, l = n.altBoundary, _ = l === void 0 ? !1 : l, g = n.padding, h = g === void 0 ? 0 : g, v = Ed(typeof h != "number" ? h : Od(h, Ai)), m = u === Ur ? Qg : Ur, k = e.rects.popper, b = e.elements[_ ? m : u], C = gy(zn(b) ? b : b.contextElement || On(e.elements.popper), f, i, a), $ = kr(e.elements.reference), S = Sd({
    reference: $,
    element: k,
    strategy: "absolute",
    placement: s
  }), y = xl(Object.assign({}, k, S)), x = u === Ur ? y : $, A = {
    top: C.top - x.top + v.top,
    bottom: x.bottom - C.bottom + v.bottom,
    left: C.left - x.left + v.left,
    right: x.right - C.right + v.right
  }, W = e.modifiersData.offset;
  if (u === Ur && W) {
    var U = W[s];
    Object.keys(A).forEach(function(T) {
      var M = [ht, dt].indexOf(T) >= 0 ? 1 : -1, O = [We, dt].indexOf(T) >= 0 ? "y" : "x";
      A[T] += U[O] * M;
    });
  }
  return A;
}
var ru = {
  placement: "bottom",
  modifiers: [],
  strategy: "absolute"
};
function ou() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return !t.some(function(r) {
    return !(r && typeof r.getBoundingClientRect == "function");
  });
}
function yy(e) {
  e === void 0 && (e = {});
  var t = e, n = t.defaultModifiers, r = n === void 0 ? [] : n, s = t.defaultOptions, o = s === void 0 ? ru : s;
  return function(c, f, p) {
    p === void 0 && (p = o);
    var i = {
      placement: "bottom",
      orderedModifiers: [],
      options: Object.assign({}, ru, o),
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
          reference: zn(c) ? fo(c) : c.contextElement ? fo(c.contextElement) : [],
          popper: fo(f)
        };
        var k = uy(py([].concat(r, i.options.modifiers)));
        return i.orderedModifiers = k.filter(function(b) {
          return b.enabled;
        }), _(), l.update();
      },
      forceUpdate: function() {
        if (!u) {
          var v = i.elements, m = v.reference, k = v.popper;
          if (!!ou(m, k)) {
            i.rects = {
              reference: Xg(m, Oi(k), i.options.strategy === "fixed"),
              popper: cc(k)
            }, i.reset = !1, i.placement = i.options.placement, i.orderedModifiers.forEach(function(A) {
              return i.modifiersData[A.name] = Object.assign({}, A.data);
            });
            for (var b = 0; b < i.orderedModifiers.length; b++) {
              if (i.reset === !0) {
                i.reset = !1, b = -1;
                continue;
              }
              var C = i.orderedModifiers[b], $ = C.fn, S = C.options, y = S === void 0 ? {} : S, x = C.name;
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
      update: _y(function() {
        return new Promise(function(h) {
          l.forceUpdate(), h(i);
        });
      }),
      destroy: function() {
        g(), u = !0;
      }
    };
    if (!ou(c, f))
      return l;
    l.setOptions(p).then(function(h) {
      !u && p.onFirstUpdate && p.onFirstUpdate(h);
    });
    function _() {
      i.orderedModifiers.forEach(function(h) {
        var v = h.name, m = h.options, k = m === void 0 ? {} : m, b = h.effect;
        if (typeof b == "function") {
          var C = b({
            state: i,
            name: v,
            instance: l,
            options: k
          }), $ = function() {
          };
          d.push(C || $);
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
var Ri = {
  passive: !0
};
function by(e) {
  var t = e.state, n = e.instance, r = e.options, s = r.scroll, o = s === void 0 ? !0 : s, a = r.resize, c = a === void 0 ? !0 : a, f = et(t.elements.popper), p = [].concat(t.scrollParents.reference, t.scrollParents.popper);
  return o && p.forEach(function(i) {
    i.addEventListener("scroll", n.update, Ri);
  }), c && f.addEventListener("resize", n.update, Ri), function() {
    o && p.forEach(function(i) {
      i.removeEventListener("scroll", n.update, Ri);
    }), c && f.removeEventListener("resize", n.update, Ri);
  };
}
const wy = {
  name: "eventListeners",
  enabled: !0,
  phase: "write",
  fn: function() {
  },
  effect: by,
  data: {}
};
function $y(e) {
  var t = e.state, n = e.name;
  t.modifiersData[n] = Sd({
    reference: t.rects.reference,
    element: t.rects.popper,
    strategy: "absolute",
    placement: t.placement
  });
}
const ky = {
  name: "popperOffsets",
  enabled: !0,
  phase: "read",
  fn: $y,
  data: {}
};
var xy = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function Sy(e) {
  var t = e.x, n = e.y, r = window, s = r.devicePixelRatio || 1;
  return {
    x: $r(t * s) / s || 0,
    y: $r(n * s) / s || 0
  };
}
function iu(e) {
  var t, n = e.popper, r = e.popperRect, s = e.placement, o = e.variation, a = e.offsets, c = e.position, f = e.gpuAcceleration, p = e.adaptive, i = e.roundOffsets, d = e.isFixed, u = a.x, l = u === void 0 ? 0 : u, _ = a.y, g = _ === void 0 ? 0 : _, h = typeof i == "function" ? i({
    x: l,
    y: g
  }) : {
    x: l,
    y: g
  };
  l = h.x, g = h.y;
  var v = a.hasOwnProperty("x"), m = a.hasOwnProperty("y"), k = Ie, b = We, C = window;
  if (p) {
    var $ = Oi(n), S = "clientHeight", y = "clientWidth";
    if ($ === et(n) && ($ = On(n), qt($).position !== "static" && c === "absolute" && (S = "scrollHeight", y = "scrollWidth")), $ = $, s === We || (s === Ie || s === ht) && o === Bo) {
      b = dt;
      var x = d && $ === C && C.visualViewport ? C.visualViewport.height : $[S];
      g -= x - r.height, g *= f ? 1 : -1;
    }
    if (s === Ie || (s === We || s === dt) && o === Bo) {
      k = ht;
      var A = d && $ === C && C.visualViewport ? C.visualViewport.width : $[y];
      l -= A - r.width, l *= f ? 1 : -1;
    }
  }
  var W = Object.assign({
    position: c
  }, p && xy), U = i === !0 ? Sy({
    x: l,
    y: g
  }) : {
    x: l,
    y: g
  };
  if (l = U.x, g = U.y, f) {
    var T;
    return Object.assign({}, W, (T = {}, T[b] = m ? "0" : "", T[k] = v ? "0" : "", T.transform = (C.devicePixelRatio || 1) <= 1 ? "translate(" + l + "px, " + g + "px)" : "translate3d(" + l + "px, " + g + "px, 0)", T));
  }
  return Object.assign({}, W, (t = {}, t[b] = m ? g + "px" : "", t[k] = v ? l + "px" : "", t.transform = "", t));
}
function Cy(e) {
  var t = e.state, n = e.options, r = n.gpuAcceleration, s = r === void 0 ? !0 : r, o = n.adaptive, a = o === void 0 ? !0 : o, c = n.roundOffsets, f = c === void 0 ? !0 : c, p = {
    placement: Mt(t.placement),
    variation: Sr(t.placement),
    popper: t.elements.popper,
    popperRect: t.rects.popper,
    gpuAcceleration: s,
    isFixed: t.options.strategy === "fixed"
  };
  t.modifiersData.popperOffsets != null && (t.styles.popper = Object.assign({}, t.styles.popper, iu(Object.assign({}, p, {
    offsets: t.modifiersData.popperOffsets,
    position: t.options.strategy,
    adaptive: a,
    roundOffsets: f
  })))), t.modifiersData.arrow != null && (t.styles.arrow = Object.assign({}, t.styles.arrow, iu(Object.assign({}, p, {
    offsets: t.modifiersData.arrow,
    position: "absolute",
    adaptive: !1,
    roundOffsets: f
  })))), t.attributes.popper = Object.assign({}, t.attributes.popper, {
    "data-popper-placement": t.placement
  });
}
const Ey = {
  name: "computeStyles",
  enabled: !0,
  phase: "beforeWrite",
  fn: Cy,
  data: {}
};
function Oy(e) {
  var t = e.state;
  Object.keys(t.elements).forEach(function(n) {
    var r = t.styles[n] || {}, s = t.attributes[n] || {}, o = t.elements[n];
    !Ke(o) || !Lt(o) || (Object.assign(o.style, r), Object.keys(s).forEach(function(a) {
      var c = s[a];
      c === !1 ? o.removeAttribute(a) : o.setAttribute(a, c === !0 ? "" : c);
    }));
  });
}
function Ay(e) {
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
      !Ke(s) || !Lt(s) || (Object.assign(s.style, c), Object.keys(o).forEach(function(f) {
        s.removeAttribute(f);
      }));
    });
  };
}
const My = {
  name: "applyStyles",
  enabled: !0,
  phase: "write",
  fn: Oy,
  effect: Ay,
  requires: ["computeStyles"]
};
var Ty = [wy, ky, Ey, My], Dy = /* @__PURE__ */ yy({
  defaultModifiers: Ty
});
function uo(e, t, n) {
  return Un(e, Ps(t, n));
}
function Ly(e, t, n) {
  var r = uo(e, t, n);
  return r > n ? n : r;
}
var Ny = function(t, n) {
  return t = typeof t == "function" ? t(Object.assign({}, n.rects, {
    placement: n.placement
  })) : t, Ed(typeof t != "number" ? t : Od(t, Ai));
};
function Py(e) {
  var t, n = e.state, r = e.name, s = e.options, o = n.elements.arrow, a = n.modifiersData.popperOffsets, c = Mt(n.placement), f = uc(c), p = [Ie, ht].indexOf(c) >= 0, i = p ? "height" : "width";
  if (!(!o || !a)) {
    var d = Ny(s.padding, n), u = cc(o), l = f === "y" ? We : Ie, _ = f === "y" ? dt : ht, g = n.rects.reference[i] + n.rects.reference[f] - a[f] - n.rects.popper[i], h = a[f] - n.rects.reference[f], v = Oi(o), m = v ? f === "y" ? v.clientHeight || 0 : v.clientWidth || 0 : 0, k = g / 2 - h / 2, b = d[l], C = m - u[i] - d[_], $ = m / 2 - u[i] / 2 + k, S = uo(b, $, C), y = f;
    n.modifiersData[r] = (t = {}, t[y] = S, t.centerOffset = S - $, t);
  }
}
function Ry(e) {
  var t = e.state, n = e.options, r = n.element, s = r === void 0 ? "[data-popper-arrow]" : r;
  s != null && (typeof s == "string" && (s = t.elements.popper.querySelector(s), !s) || !xd(t.elements.popper, s) || (t.elements.arrow = s));
}
const Hy = {
  name: "arrow",
  enabled: !0,
  phase: "main",
  fn: Py,
  effect: Ry,
  requires: ["popperOffsets"],
  requiresIfExists: ["preventOverflow"]
};
function Wy(e, t, n) {
  var r = Mt(e), s = [Ie, We].indexOf(r) >= 0 ? -1 : 1, o = typeof n == "function" ? n(Object.assign({}, t, {
    placement: e
  })) : n, a = o[0], c = o[1];
  return a = a || 0, c = (c || 0) * s, [Ie, ht].indexOf(r) >= 0 ? {
    x: c,
    y: a
  } : {
    x: a,
    y: c
  };
}
function Iy(e) {
  var t = e.state, n = e.options, r = e.name, s = n.offset, o = s === void 0 ? [0, 0] : s, a = kd.reduce(function(i, d) {
    return i[d] = Wy(d, t.rects, o), i;
  }, {}), c = a[t.placement], f = c.x, p = c.y;
  t.modifiersData.popperOffsets != null && (t.modifiersData.popperOffsets.x += f, t.modifiersData.popperOffsets.y += p), t.modifiersData[r] = a;
}
const Uy = {
  name: "offset",
  enabled: !0,
  phase: "main",
  requires: ["popperOffsets"],
  fn: Iy
};
function By(e) {
  return e === "x" ? "y" : "x";
}
function jy(e) {
  var t = e.state, n = e.options, r = e.name, s = n.mainAxis, o = s === void 0 ? !0 : s, a = n.altAxis, c = a === void 0 ? !1 : a, f = n.boundary, p = n.rootBoundary, i = n.altBoundary, d = n.padding, u = n.tether, l = u === void 0 ? !0 : u, _ = n.tetherOffset, g = _ === void 0 ? 0 : _, h = _c(t, {
    boundary: f,
    rootBoundary: p,
    padding: d,
    altBoundary: i
  }), v = Mt(t.placement), m = Sr(t.placement), k = !m, b = uc(v), C = By(b), $ = t.modifiersData.popperOffsets, S = t.rects.reference, y = t.rects.popper, x = typeof g == "function" ? g(Object.assign({}, t.rects, {
    placement: t.placement
  })) : g, A = typeof x == "number" ? {
    mainAxis: x,
    altAxis: x
  } : Object.assign({
    mainAxis: 0,
    altAxis: 0
  }, x), W = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null, U = {
    x: 0,
    y: 0
  };
  if (!!$) {
    if (o) {
      var T, M = b === "y" ? We : Ie, O = b === "y" ? dt : ht, D = b === "y" ? "height" : "width", E = $[b], R = E + h[M], L = E - h[O], I = l ? -y[D] / 2 : 0, F = m === xr ? S[D] : y[D], j = m === xr ? -y[D] : -S[D], V = t.elements.arrow, X = l && V ? cc(V) : {
        width: 0,
        height: 0
      }, H = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : Cd(), Y = H[M], K = H[O], q = uo(0, S[D], X[D]), G = k ? S[D] / 2 - I - q - Y - A.mainAxis : F - q - Y - A.mainAxis, ne = k ? -S[D] / 2 + I + q + K + A.mainAxis : j + q + K + A.mainAxis, re = t.elements.arrow && Oi(t.elements.arrow), pe = re ? b === "y" ? re.clientTop || 0 : re.clientLeft || 0 : 0, Le = (T = W == null ? void 0 : W[b]) != null ? T : 0, te = E + G - Le - pe, bt = E + ne - Le, Oe = uo(l ? Ps(R, te) : R, E, l ? Un(L, bt) : L);
      $[b] = Oe, U[b] = Oe - E;
    }
    if (c) {
      var Ae, wt = b === "x" ? We : Ie, Ye = b === "x" ? dt : ht, ee = $[C], se = C === "y" ? "height" : "width", Me = ee + h[wt], ot = ee - h[Ye], Ee = [We, Ie].indexOf(v) !== -1, it = (Ae = W == null ? void 0 : W[C]) != null ? Ae : 0, st = Ee ? Me : ee - S[se] - y[se] - it + A.altAxis, at = Ee ? ee + S[se] + y[se] - it - A.altAxis : ot, lt = l && Ee ? Ly(st, ee, at) : uo(l ? st : Me, ee, l ? at : ot);
      $[C] = lt, U[C] = lt - ee;
    }
    t.modifiersData[r] = U;
  }
}
const Fy = {
  name: "preventOverflow",
  enabled: !0,
  phase: "main",
  fn: jy,
  requiresIfExists: ["offset"]
};
var zy = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function Zi(e) {
  return e.replace(/left|right|bottom|top/g, function(t) {
    return zy[t];
  });
}
var Vy = {
  start: "end",
  end: "start"
};
function su(e) {
  return e.replace(/start|end/g, function(t) {
    return Vy[t];
  });
}
function Yy(e, t) {
  t === void 0 && (t = {});
  var n = t, r = n.placement, s = n.boundary, o = n.rootBoundary, a = n.padding, c = n.flipVariations, f = n.allowedAutoPlacements, p = f === void 0 ? kd : f, i = Sr(r), d = i ? c ? tu : tu.filter(function(_) {
    return Sr(_) === i;
  }) : Ai, u = d.filter(function(_) {
    return p.indexOf(_) >= 0;
  });
  u.length === 0 && (u = d);
  var l = u.reduce(function(_, g) {
    return _[g] = _c(e, {
      placement: g,
      boundary: s,
      rootBoundary: o,
      padding: a
    })[Mt(g)], _;
  }, {});
  return Object.keys(l).sort(function(_, g) {
    return l[_] - l[g];
  });
}
function qy(e) {
  if (Mt(e) === fc)
    return [];
  var t = Zi(e);
  return [su(e), t, su(t)];
}
function Gy(e) {
  var t = e.state, n = e.options, r = e.name;
  if (!t.modifiersData[r]._skip) {
    for (var s = n.mainAxis, o = s === void 0 ? !0 : s, a = n.altAxis, c = a === void 0 ? !0 : a, f = n.fallbackPlacements, p = n.padding, i = n.boundary, d = n.rootBoundary, u = n.altBoundary, l = n.flipVariations, _ = l === void 0 ? !0 : l, g = n.allowedAutoPlacements, h = t.options.placement, v = Mt(h), m = v === h, k = f || (m || !_ ? [Zi(h)] : qy(h)), b = [h].concat(k).reduce(function(X, H) {
      return X.concat(Mt(H) === fc ? Yy(t, {
        placement: H,
        boundary: i,
        rootBoundary: d,
        padding: p,
        flipVariations: _,
        allowedAutoPlacements: g
      }) : H);
    }, []), C = t.rects.reference, $ = t.rects.popper, S = /* @__PURE__ */ new Map(), y = !0, x = b[0], A = 0; A < b.length; A++) {
      var W = b[A], U = Mt(W), T = Sr(W) === xr, M = [We, dt].indexOf(U) >= 0, O = M ? "width" : "height", D = _c(t, {
        placement: W,
        boundary: i,
        rootBoundary: d,
        altBoundary: u,
        padding: p
      }), E = M ? T ? ht : Ie : T ? dt : We;
      C[O] > $[O] && (E = Zi(E));
      var R = Zi(E), L = [];
      if (o && L.push(D[U] <= 0), c && L.push(D[E] <= 0, D[R] <= 0), L.every(function(X) {
        return X;
      })) {
        x = W, y = !1;
        break;
      }
      S.set(W, L);
    }
    if (y)
      for (var I = _ ? 3 : 1, F = function(H) {
        var Y = b.find(function(K) {
          var q = S.get(K);
          if (q)
            return q.slice(0, H).every(function(G) {
              return G;
            });
        });
        if (Y)
          return x = Y, "break";
      }, j = I; j > 0; j--) {
        var V = F(j);
        if (V === "break")
          break;
      }
    t.placement !== x && (t.modifiersData[r]._skip = !0, t.placement = x, t.reset = !0);
  }
}
const Xy = {
  name: "flip",
  enabled: !0,
  phase: "main",
  fn: Gy,
  requiresIfExists: ["offset"],
  data: {
    _skip: !1
  }
};
var tr, nr, Ln, ct, si, ua;
class Et extends Xe {
  constructor() {
    super(...arguments);
    P(this, tr, void 0);
    P(this, nr, 0);
    P(this, Ln, void 0);
    P(this, ct, void 0);
    P(this, si, void 0);
    N(this, "hideLater", () => {
      w(this, ua).call(this), B(this, nr, window.setTimeout(this.hide.bind(this), 100));
    });
    P(this, ua, () => {
      clearTimeout(w(this, nr)), B(this, nr, 0);
    });
  }
  get isShown() {
    var n;
    return (n = w(this, Ln)) == null ? void 0 : n.classList.contains(this.constructor.CLASS_SHOW);
  }
  get datepicker() {
    return w(this, Ln) || this._ensureDatepicker();
  }
  get popper() {
    return w(this, ct) ? w(this, ct) : this._createPopper();
  }
  get trigger() {
    return w(this, si) || this.element;
  }
  get elementShowClass() {
    return `with-${this.constructor.NAME}-show`;
  }
  show(n) {
    return B(this, si, n), !this.datepicker || !this.element ? !1 : (this.element.classList.add(this.elementShowClass), this.datepicker.classList.add(this.constructor.CLASS_SHOW), this.datepicker.classList.add("fade"), this._createPopper().update(), !0);
  }
  hide() {
    var n, r;
    return (n = w(this, ct)) == null || n.destroy(), B(this, ct, void 0), this.element.classList.remove(this.elementShowClass), (r = w(this, Ln)) == null || r.classList.remove(this.constructor.CLASS_SHOW), this.datepicker.classList.remove("fade"), !0;
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
    return r.classList.add(n), Bg(J(Vg, { ...this.options }), r), this.options.arrow && r.prepend(this._createArrow()), document.body.appendChild(r), B(this, Ln, r), r;
  }
  _getPopperOptions() {
    const n = this._getArrowSize();
    return {
      modifiers: [
        Fy,
        Xy,
        { ...Hy, options: {
          padding: n,
          element: ".arrow"
        } },
        {
          ...Uy,
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
    return w(this, ct) ? w(this, ct).setOptions(n) : B(this, ct, Dy(this._getPopperElement(), this.datepicker, n)), w(this, ct);
  }
  _getPopperElement() {
    return w(this, tr) || B(this, tr, {
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
    }), w(this, tr);
  }
  static clear(n) {
    var f, p;
    n instanceof Event && (n = { event: n });
    const { event: r, exclude: s, ignoreSelector: o = ".not-hide-datepicker" } = n || {};
    if (r && o && ((p = (f = r.target).closest) == null ? void 0 : p.call(f, o)))
      return;
    const a = this.getAll().entries(), c = new Set(s || []);
    for (const [i, d] of a)
      c.has(i) || d.hide();
  }
}
tr = new WeakMap(), nr = new WeakMap(), Ln = new WeakMap(), ct = new WeakMap(), si = new WeakMap(), ua = new WeakMap(), N(Et, "NAME", "datepicker"), N(Et, "CLASSNAME", "datepicker"), N(Et, "CLASS_SHOW", "show"), N(Et, "MENU_SELECTOR", ".form-datetime:not(.disabled):not(:disabled)"), N(Et, "DEFAULT", {
  date: oe().format("YYYY-MM-DD"),
  format: "YYYY-MM-DD",
  showOtherMonth: !0,
  placement: "bottom-start",
  strategy: "absolute",
  trigger: "click",
  showToday: !0,
  arrow: !0
});
document.addEventListener("click", function(e) {
  const t = e.target, n = t.closest(Et.MENU_SELECTOR), r = t.closest(".datepicker-calendar-bar, .datepicker-calendar-thead, .datepicker-calendar-month-table");
  n ? Et.ensure(n).toggle() : r || Et.clear({ event: e });
});
const Ky = (e) => {
  const t = document.getElementsByClassName("with-datepicker-show")[0];
  if (!t)
    return;
  const n = typeof t.closest == "function" ? t.closest(Et.MENU_SELECTOR) : null;
  !n || !e.target.contains(n) || Et.clear({ event: e });
};
window.addEventListener("scroll", Ky, !0);
function Ad(e, t, n) {
  if (n) {
    e.setAttribute("class", z(t));
    return;
  }
  qa(e.getAttribute("class"), t).forEach(([r, s]) => {
    e.classList.toggle(r, s);
  });
}
function Yr(e, t, n) {
  if (typeof t == "object")
    return Object.entries(t).forEach(([r, s]) => {
      Yr(e, r, s);
    });
  n !== void 0 && (e.style[t] = typeof n == "number" ? `${n}px` : n);
}
function Rs(e, t, n) {
  if (typeof t == "object")
    return Object.entries(t).forEach(([r, s]) => {
      Rs(e, r, s);
    });
  n !== void 0 && (n === null ? e.removeAttribute(t) : e.setAttribute(t, n));
}
var Nn, ai, Qt, _a, rr, Ji;
const Wt = class extends Xe {
  constructor() {
    super(...arguments);
    P(this, rr);
    P(this, Nn, 0);
    P(this, ai, void 0);
    P(this, Qt, void 0);
    P(this, _a, (n) => {
      const r = n.target;
      (r.closest(Wt.DISMISS_SELECTOR) || this.options.backdrop === !0 && !r.closest(".modal-dialog") && r.closest(".modal")) && this.hide();
    });
  }
  get modalElement() {
    return this.element;
  }
  get isShown() {
    return this.modalElement.classList.contains(Wt.CLASS_SHOW);
  }
  get dialog() {
    return this.modalElement.querySelector(".modal-dialog");
  }
  afterInit() {
    if (this.on("click", w(this, _a)), this.options.responsive && typeof ResizeObserver < "u") {
      const { dialog: n } = this;
      if (n) {
        const r = new ResizeObserver(() => {
          if (!this.isShown)
            return;
          const s = n.clientWidth, o = n.clientHeight;
          (!w(this, Qt) || w(this, Qt)[0] !== s || w(this, Qt)[1] !== o) && (B(this, Qt, [s, o]), this.layout());
        });
        r.observe(n), B(this, ai, r);
      }
    }
    this.options.show && this.show();
  }
  destroy() {
    var n;
    super.destroy(), (n = w(this, ai)) == null || n.disconnect();
  }
  show(n) {
    if (this.isShown)
      return !1;
    this.setOptions(n);
    const { modalElement: r } = this, { animation: s, backdrop: o, className: a, style: c } = this.options;
    return Ad(r, [{
      "modal-trans": s,
      "modal-no-backdrop": !o
    }, Wt.CLASS_SHOW, a]), Yr(r, {
      zIndex: `${Wt.zIndex++}`,
      ...c
    }), this.layout(), this.emit("show", this), Q(this, rr, Ji).call(this, () => {
      r.classList.add(Wt.CLASS_SHOWN), Q(this, rr, Ji).call(this, () => {
        this.emit("shown", this);
      });
    }, 50), !0;
  }
  hide() {
    return this.isShown ? (this.modalElement.classList.remove(Wt.CLASS_SHOWN), this.emit("hide", this), Q(this, rr, Ji).call(this, () => {
      this.modalElement.classList.remove(Wt.CLASS_SHOW), this.emit("hidden", this);
    }), !0) : !1;
  }
  layout(n, r) {
    var p;
    if (!this.isShown)
      return;
    const { dialog: s } = this;
    if (!s)
      return;
    r = r != null ? r : this.options.size, Rs(s, "data-size", null);
    const o = { width: null, height: null };
    typeof r == "object" ? (o.width = r.width, o.height = r.height) : typeof r == "string" && ["md", "sm", "lg", "full"].includes(r) ? Rs(s, "data-size", r) : r && (o.width = r), Yr(s, o), n = (p = n != null ? n : this.options.position) != null ? p : "fit";
    const a = s.clientWidth, c = s.clientHeight;
    B(this, Qt, [a, c]), typeof n == "function" && (n = n({ width: a, height: c }));
    const f = {
      top: null,
      left: null,
      bottom: null,
      right: null,
      alignSelf: "center"
    };
    typeof n == "number" ? (f.alignSelf = "flex-start", f.top = n) : typeof n == "object" && n ? (f.alignSelf = "flex-start", Object.assign(f, n)) : n === "fit" ? (f.alignSelf = "flex-start", f.top = `${Math.max(0, Math.floor((window.innerHeight - c) / 3))}px`) : n === "bottom" ? f.alignSelf = "flex-end" : n === "top" ? f.alignSelf = "flex-start" : n !== "center" && typeof n == "string" && (f.alignSelf = "flex-start", f.top = n), Yr(s, f), Yr(this.modalElement, "justifyContent", f.left ? "flex-start" : "center");
  }
};
let Pe = Wt;
Nn = new WeakMap(), ai = new WeakMap(), Qt = new WeakMap(), _a = new WeakMap(), rr = new WeakSet(), Ji = function(n, r) {
  w(this, Nn) && (clearTimeout(w(this, Nn)), B(this, Nn, 0)), n && (this.options.animation ? B(this, Nn, window.setTimeout(n, r != null ? r : this.options.transTime)) : n());
}, N(Pe, "NAME", "Modal"), N(Pe, "EVENTS", !0), N(Pe, "DEFAULT", {
  position: "fit",
  show: !0,
  keyboard: !0,
  animation: !0,
  backdrop: !0,
  responsive: !0,
  transTime: 300
}), N(Pe, "CLASS_SHOW", "show"), N(Pe, "CLASS_SHOWN", "in"), N(Pe, "DISMISS_SELECTOR", '[data-dismiss="modal"]'), N(Pe, "zIndex", 2e3);
window.addEventListener("resize", () => {
  Pe.all.forEach((e) => {
    const t = e;
    t.isShown && t.options.responsive && t.layout();
  });
});
var el, fe, Md, qr, _o, au, Hs = {}, Td = [], Zy = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function dn(e, t) {
  for (var n in t)
    e[n] = t[n];
  return e;
}
function Dd(e) {
  var t = e.parentNode;
  t && t.removeChild(e);
}
function de(e, t, n) {
  var r, s, o, a = {};
  for (o in t)
    o == "key" ? r = t[o] : o == "ref" ? s = t[o] : a[o] = t[o];
  if (arguments.length > 2 && (a.children = arguments.length > 3 ? el.call(arguments, 2) : n), typeof e == "function" && e.defaultProps != null)
    for (o in e.defaultProps)
      a[o] === void 0 && (a[o] = e.defaultProps[o]);
  return Qi(e, a, r, s, null);
}
function Qi(e, t, n, r, s) {
  var o = { type: e, props: t, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: s == null ? ++Md : s };
  return s == null && fe.vnode != null && fe.vnode(o), o;
}
function Jy() {
  return { current: null };
}
function tl(e) {
  return e.children;
}
function Kn(e, t) {
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
function Ld(e) {
  var t, n;
  if ((e = e.__) != null && e.__c != null) {
    for (e.__e = e.__c.base = null, t = 0; t < e.__k.length; t++)
      if ((n = e.__k[t]) != null && n.__e != null) {
        e.__e = e.__c.base = n.__e;
        break;
      }
    return Ld(e);
  }
}
function lu(e) {
  (!e.__d && (e.__d = !0) && _o.push(e) && !Ws.__r++ || au !== fe.debounceRendering) && ((au = fe.debounceRendering) || setTimeout)(Ws);
}
function Ws() {
  for (var e; Ws.__r = _o.length; )
    e = _o.sort(function(t, n) {
      return t.__v.__b - n.__v.__b;
    }), _o = [], e.some(function(t) {
      var n, r, s, o, a, c;
      t.__d && (a = (o = (n = t).__v).__e, (c = n.__P) && (r = [], (s = dn({}, o)).__v = o.__v + 1, pc(c, o, s, n.__n, c.ownerSVGElement !== void 0, o.__h != null ? [a] : null, r, a == null ? jo(o) : a, o.__h), Hd(r, o), o.__e != a && Ld(o)));
    });
}
function Nd(e, t, n, r, s, o, a, c, f, p) {
  var i, d, u, l, _, g, h, v = r && r.__k || Td, m = v.length;
  for (n.__k = [], i = 0; i < t.length; i++)
    if ((l = n.__k[i] = (l = t[i]) == null || typeof l == "boolean" ? null : typeof l == "string" || typeof l == "number" || typeof l == "bigint" ? Qi(null, l, null, null, l) : Array.isArray(l) ? Qi(tl, { children: l }, null, null, null) : l.__b > 0 ? Qi(l.type, l.props, l.key, l.ref ? l.ref : null, l.__v) : l) != null) {
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
      pc(e, l, u = u || Hs, s, o, a, c, f, p), _ = l.__e, (d = l.ref) && u.ref != d && (h || (h = []), u.ref && h.push(u.ref, null, l), h.push(d, l.__c || _, l)), _ != null ? (g == null && (g = _), typeof l.type == "function" && l.__k === u.__k ? l.__d = f = Pd(l, f, e) : f = Rd(e, l, u, v, _, f), typeof n.type == "function" && (n.__d = f)) : f && u.__e == f && f.parentNode != e && (f = jo(u));
    }
  for (n.__e = g, i = m; i--; )
    v[i] != null && Id(v[i], v[i]);
  if (h)
    for (i = 0; i < h.length; i++)
      Wd(h[i], h[++i], h[++i]);
}
function Pd(e, t, n) {
  for (var r, s = e.__k, o = 0; s && o < s.length; o++)
    (r = s[o]) && (r.__ = e, t = typeof r.type == "function" ? Pd(r, t, n) : Rd(n, r, r, s, r.__e, t));
  return t;
}
function Rd(e, t, n, r, s, o) {
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
function Qy(e, t, n, r, s) {
  var o;
  for (o in n)
    o === "children" || o === "key" || o in t || Is(e, o, null, n[o], r);
  for (o in t)
    s && typeof t[o] != "function" || o === "children" || o === "key" || o === "value" || o === "checked" || n[o] === t[o] || Is(e, o, t[o], n[o], r);
}
function cu(e, t, n) {
  t[0] === "-" ? e.setProperty(t, n) : e[t] = n == null ? "" : typeof n != "number" || Zy.test(t) ? n : n + "px";
}
function Is(e, t, n, r, s) {
  var o;
  e:
    if (t === "style")
      if (typeof n == "string")
        e.style.cssText = n;
      else {
        if (typeof r == "string" && (e.style.cssText = r = ""), r)
          for (t in r)
            n && t in n || cu(e.style, t, "");
        if (n)
          for (t in n)
            r && n[t] === r[t] || cu(e.style, t, n[t]);
      }
    else if (t[0] === "o" && t[1] === "n")
      o = t !== (t = t.replace(/Capture$/, "")), t = t.toLowerCase() in e ? t.toLowerCase().slice(2) : t.slice(2), e.l || (e.l = {}), e.l[t + o] = n, n ? r || e.addEventListener(t, o ? uu : fu, o) : e.removeEventListener(t, o ? uu : fu, o);
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
function fu(e) {
  this.l[e.type + !1](fe.event ? fe.event(e) : e);
}
function uu(e) {
  this.l[e.type + !0](fe.event ? fe.event(e) : e);
}
function pc(e, t, n, r, s, o, a, c, f) {
  var p, i, d, u, l, _, g, h, v, m, k, b, C, $, S, y = t.type;
  if (t.constructor !== void 0)
    return null;
  n.__h != null && (f = n.__h, c = t.__e = n.__e, t.__h = null, o = [c]), (p = fe.__b) && p(t);
  try {
    e:
      if (typeof y == "function") {
        if (h = t.props, v = (p = y.contextType) && r[p.__c], m = p ? v ? v.props.value : p.__ : r, n.__c ? g = (i = t.__c = n.__c).__ = i.__E : ("prototype" in y && y.prototype.render ? t.__c = i = new y(h, m) : (t.__c = i = new Kn(h, m), i.constructor = y, i.render = tb), v && v.sub(i), i.props = h, i.state || (i.state = {}), i.context = m, i.__n = r, d = i.__d = !0, i.__h = [], i._sb = []), i.__s == null && (i.__s = i.state), y.getDerivedStateFromProps != null && (i.__s == i.state && (i.__s = dn({}, i.__s)), dn(i.__s, y.getDerivedStateFromProps(h, i.__s))), u = i.props, l = i.state, d)
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
        if (i.context = m, i.props = h, i.__v = t, i.__P = e, b = fe.__r, C = 0, "prototype" in y && y.prototype.render) {
          for (i.state = i.__s, i.__d = !1, b && b(t), p = i.render(i.props, i.state, i.context), $ = 0; $ < i._sb.length; $++)
            i.__h.push(i._sb[$]);
          i._sb = [];
        } else
          do
            i.__d = !1, b && b(t), p = i.render(i.props, i.state, i.context), i.state = i.__s;
          while (i.__d && ++C < 25);
        i.state = i.__s, i.getChildContext != null && (r = dn(dn({}, r), i.getChildContext())), d || i.getSnapshotBeforeUpdate == null || (_ = i.getSnapshotBeforeUpdate(u, l)), S = p != null && p.type === tl && p.key == null ? p.props.children : p, Nd(e, Array.isArray(S) ? S : [S], t, n, r, s, o, a, c, f), i.base = t.__e, t.__h = null, i.__h.length && a.push(i), g && (i.__E = i.__ = null), i.__e = !1;
      } else
        o == null && t.__v === n.__v ? (t.__k = n.__k, t.__e = n.__e) : t.__e = eb(n.__e, t, n, r, s, o, a, f);
    (p = fe.diffed) && p(t);
  } catch (x) {
    t.__v = null, (f || o != null) && (t.__e = c, t.__h = !!f, o[o.indexOf(c)] = null), fe.__e(x, t, n);
  }
}
function Hd(e, t) {
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
function eb(e, t, n, r, s, o, a, c) {
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
    if (o = o && el.call(e.childNodes), p = (d = n.props || Hs).dangerouslySetInnerHTML, i = u.dangerouslySetInnerHTML, !c) {
      if (o != null)
        for (d = {}, _ = 0; _ < e.attributes.length; _++)
          d[e.attributes[_].name] = e.attributes[_].value;
      (i || p) && (i && (p && i.__html == p.__html || i.__html === e.innerHTML) || (e.innerHTML = i && i.__html || ""));
    }
    if (Qy(e, u, d, s, c), i)
      t.__k = [];
    else if (_ = t.props.children, Nd(e, Array.isArray(_) ? _ : [_], t, n, r, s && l !== "foreignObject", o, a, o ? o[0] : n.__k && jo(n, 0), c), o != null)
      for (_ = o.length; _--; )
        o[_] != null && Dd(o[_]);
    c || ("value" in u && (_ = u.value) !== void 0 && (_ !== e.value || l === "progress" && !_ || l === "option" && _ !== d.value) && Is(e, "value", _, d.value, !1), "checked" in u && (_ = u.checked) !== void 0 && _ !== e.checked && Is(e, "checked", _, d.checked, !1));
  }
  return e;
}
function Wd(e, t, n) {
  try {
    typeof e == "function" ? e(t) : e.current = t;
  } catch (r) {
    fe.__e(r, n);
  }
}
function Id(e, t, n) {
  var r, s;
  if (fe.unmount && fe.unmount(e), (r = e.ref) && (r.current && r.current !== e.__e || Wd(r, null, t)), (r = e.__c) != null) {
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
      r[s] && Id(r[s], t, n || typeof e.type != "function");
  n || e.__e == null || Dd(e.__e), e.__ = e.__e = e.__d = void 0;
}
function tb(e, t, n) {
  return this.constructor(e, n);
}
function nb(e, t, n) {
  var r, s, o;
  fe.__ && fe.__(e, t), s = (r = typeof n == "function") ? null : n && n.__k || t.__k, o = [], pc(t, e = (!r && n || t).__k = de(tl, null, [e]), s || Hs, Hs, t.ownerSVGElement !== void 0, !r && n ? [n] : s ? null : t.firstChild ? el.call(t.childNodes) : null, o, !r && n ? n : s ? s.__e : t.firstChild, r), Hd(o, e);
}
el = Td.slice, fe = { __e: function(e, t, n, r) {
  for (var s, o, a; t = t.__; )
    if ((s = t.__c) && !s.__)
      try {
        if ((o = s.constructor) && o.getDerivedStateFromError != null && (s.setState(o.getDerivedStateFromError(e)), a = s.__d), s.componentDidCatch != null && (s.componentDidCatch(e, r || {}), a = s.__d), a)
          return s.__E = s;
      } catch (c) {
        e = c;
      }
  throw e;
} }, Md = 0, qr = function(e) {
  return e != null && e.constructor === void 0;
}, Kn.prototype.setState = function(e, t) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = dn({}, this.state), typeof e == "function" && (e = e(dn({}, n), this.props)), e && dn(n, e), e != null && this.__v && (t && this._sb.push(t), lu(this));
}, Kn.prototype.forceUpdate = function(e) {
  this.__v && (this.__e = !0, e && this.__h.push(e), lu(this));
}, Kn.prototype.render = tl, _o = [], Ws.__r = 0;
let rb = (e = 21) => crypto.getRandomValues(new Uint8Array(e)).reduce((t, n) => (n &= 63, n < 36 ? t += n.toString(36) : n < 62 ? t += (n - 26).toString(36).toUpperCase() : n > 62 ? t += "-" : t += "_", t), "");
var Ud, Sl, Bd, ob = [];
function nl(e, t, n) {
  var r, s, o, a = {};
  for (o in t)
    o == "key" ? r = t[o] : o == "ref" ? s = t[o] : a[o] = t[o];
  if (arguments.length > 2 && (a.children = arguments.length > 3 ? Ud.call(arguments, 2) : n), typeof e == "function" && e.defaultProps != null)
    for (o in e.defaultProps)
      a[o] === void 0 && (a[o] = e.defaultProps[o]);
  return ib(e, a, r, s, null);
}
function ib(e, t, n, r, s) {
  var o = { type: e, props: t, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: s == null ? ++Bd : s };
  return s == null && Sl.vnode != null && Sl.vnode(o), o;
}
Ud = ob.slice, Sl = { __e: function(e, t, n, r) {
  for (var s, o, a; t = t.__; )
    if ((s = t.__c) && !s.__)
      try {
        if ((o = s.constructor) && o.getDerivedStateFromError != null && (s.setState(o.getDerivedStateFromError(e)), a = s.__d), s.componentDidCatch != null && (s.componentDidCatch(e, r || {}), a = s.__d), a)
          return s.__E = s;
      } catch (c) {
        e = c;
      }
  throw e;
} }, Bd = 0;
function sb({
  key: e,
  type: t,
  btnType: n,
  ...r
}) {
  return /* @__PURE__ */ nl(Cn, {
    type: n,
    ...r
  });
}
var dc, be, jd, po, _u, Fd = {}, zd = [], ab = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function hn(e, t) {
  for (var n in t)
    e[n] = t[n];
  return e;
}
function Vd(e) {
  var t = e.parentNode;
  t && t.removeChild(e);
}
function Yd(e, t, n) {
  var r, s, o, a = {};
  for (o in t)
    o == "key" ? r = t[o] : o == "ref" ? s = t[o] : a[o] = t[o];
  if (arguments.length > 2 && (a.children = arguments.length > 3 ? dc.call(arguments, 2) : n), typeof e == "function" && e.defaultProps != null)
    for (o in e.defaultProps)
      a[o] === void 0 && (a[o] = e.defaultProps[o]);
  return es(e, a, r, s, null);
}
function es(e, t, n, r, s) {
  var o = { type: e, props: t, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: s == null ? ++jd : s };
  return s == null && be.vnode != null && be.vnode(o), o;
}
function lb() {
  return { current: null };
}
function hc(e) {
  return e.children;
}
function ho(e, t) {
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
function qd(e) {
  var t, n;
  if ((e = e.__) != null && e.__c != null) {
    for (e.__e = e.__c.base = null, t = 0; t < e.__k.length; t++)
      if ((n = e.__k[t]) != null && n.__e != null) {
        e.__e = e.__c.base = n.__e;
        break;
      }
    return qd(e);
  }
}
function pu(e) {
  (!e.__d && (e.__d = !0) && po.push(e) && !Us.__r++ || _u !== be.debounceRendering) && ((_u = be.debounceRendering) || setTimeout)(Us);
}
function Us() {
  for (var e; Us.__r = po.length; )
    e = po.sort(function(t, n) {
      return t.__v.__b - n.__v.__b;
    }), po = [], e.some(function(t) {
      var n, r, s, o, a, c;
      t.__d && (a = (o = (n = t).__v).__e, (c = n.__P) && (r = [], (s = hn({}, o)).__v = o.__v + 1, Zd(c, o, s, n.__n, c.ownerSVGElement !== void 0, o.__h != null ? [a] : null, r, a == null ? Fo(o) : a, o.__h), fb(r, o), o.__e != a && qd(o)));
    });
}
function Gd(e, t, n, r, s, o, a, c, f, p) {
  var i, d, u, l, _, g, h, v = r && r.__k || zd, m = v.length;
  for (n.__k = [], i = 0; i < t.length; i++)
    if ((l = n.__k[i] = (l = t[i]) == null || typeof l == "boolean" ? null : typeof l == "string" || typeof l == "number" || typeof l == "bigint" ? es(null, l, null, null, l) : Array.isArray(l) ? es(hc, { children: l }, null, null, null) : l.__b > 0 ? es(l.type, l.props, l.key, l.ref ? l.ref : null, l.__v) : l) != null) {
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
      Zd(e, l, u = u || Fd, s, o, a, c, f, p), _ = l.__e, (d = l.ref) && u.ref != d && (h || (h = []), u.ref && h.push(u.ref, null, l), h.push(d, l.__c || _, l)), _ != null ? (g == null && (g = _), typeof l.type == "function" && l.__k === u.__k ? l.__d = f = Xd(l, f, e) : f = Kd(e, l, u, v, _, f), typeof n.type == "function" && (n.__d = f)) : f && u.__e == f && f.parentNode != e && (f = Fo(u));
    }
  for (n.__e = g, i = m; i--; )
    v[i] != null && Qd(v[i], v[i]);
  if (h)
    for (i = 0; i < h.length; i++)
      Jd(h[i], h[++i], h[++i]);
}
function Xd(e, t, n) {
  for (var r, s = e.__k, o = 0; s && o < s.length; o++)
    (r = s[o]) && (r.__ = e, t = typeof r.type == "function" ? Xd(r, t, n) : Kd(n, r, r, s, r.__e, t));
  return t;
}
function Kd(e, t, n, r, s, o) {
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
function cb(e, t, n, r, s) {
  var o;
  for (o in n)
    o === "children" || o === "key" || o in t || Bs(e, o, null, n[o], r);
  for (o in t)
    s && typeof t[o] != "function" || o === "children" || o === "key" || o === "value" || o === "checked" || n[o] === t[o] || Bs(e, o, t[o], n[o], r);
}
function du(e, t, n) {
  t[0] === "-" ? e.setProperty(t, n) : e[t] = n == null ? "" : typeof n != "number" || ab.test(t) ? n : n + "px";
}
function Bs(e, t, n, r, s) {
  var o;
  e:
    if (t === "style")
      if (typeof n == "string")
        e.style.cssText = n;
      else {
        if (typeof r == "string" && (e.style.cssText = r = ""), r)
          for (t in r)
            n && t in n || du(e.style, t, "");
        if (n)
          for (t in n)
            r && n[t] === r[t] || du(e.style, t, n[t]);
      }
    else if (t[0] === "o" && t[1] === "n")
      o = t !== (t = t.replace(/Capture$/, "")), t = t.toLowerCase() in e ? t.toLowerCase().slice(2) : t.slice(2), e.l || (e.l = {}), e.l[t + o] = n, n ? r || e.addEventListener(t, o ? vu : hu, o) : e.removeEventListener(t, o ? vu : hu, o);
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
function hu(e) {
  this.l[e.type + !1](be.event ? be.event(e) : e);
}
function vu(e) {
  this.l[e.type + !0](be.event ? be.event(e) : e);
}
function Zd(e, t, n, r, s, o, a, c, f) {
  var p, i, d, u, l, _, g, h, v, m, k, b, C, $, S, y = t.type;
  if (t.constructor !== void 0)
    return null;
  n.__h != null && (f = n.__h, c = t.__e = n.__e, t.__h = null, o = [c]), (p = be.__b) && p(t);
  try {
    e:
      if (typeof y == "function") {
        if (h = t.props, v = (p = y.contextType) && r[p.__c], m = p ? v ? v.props.value : p.__ : r, n.__c ? g = (i = t.__c = n.__c).__ = i.__E : ("prototype" in y && y.prototype.render ? t.__c = i = new y(h, m) : (t.__c = i = new ho(h, m), i.constructor = y, i.render = _b), v && v.sub(i), i.props = h, i.state || (i.state = {}), i.context = m, i.__n = r, d = i.__d = !0, i.__h = [], i._sb = []), i.__s == null && (i.__s = i.state), y.getDerivedStateFromProps != null && (i.__s == i.state && (i.__s = hn({}, i.__s)), hn(i.__s, y.getDerivedStateFromProps(h, i.__s))), u = i.props, l = i.state, d)
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
        if (i.context = m, i.props = h, i.__v = t, i.__P = e, b = be.__r, C = 0, "prototype" in y && y.prototype.render) {
          for (i.state = i.__s, i.__d = !1, b && b(t), p = i.render(i.props, i.state, i.context), $ = 0; $ < i._sb.length; $++)
            i.__h.push(i._sb[$]);
          i._sb = [];
        } else
          do
            i.__d = !1, b && b(t), p = i.render(i.props, i.state, i.context), i.state = i.__s;
          while (i.__d && ++C < 25);
        i.state = i.__s, i.getChildContext != null && (r = hn(hn({}, r), i.getChildContext())), d || i.getSnapshotBeforeUpdate == null || (_ = i.getSnapshotBeforeUpdate(u, l)), S = p != null && p.type === hc && p.key == null ? p.props.children : p, Gd(e, Array.isArray(S) ? S : [S], t, n, r, s, o, a, c, f), i.base = t.__e, t.__h = null, i.__h.length && a.push(i), g && (i.__E = i.__ = null), i.__e = !1;
      } else
        o == null && t.__v === n.__v ? (t.__k = n.__k, t.__e = n.__e) : t.__e = ub(n.__e, t, n, r, s, o, a, f);
    (p = be.diffed) && p(t);
  } catch (x) {
    t.__v = null, (f || o != null) && (t.__e = c, t.__h = !!f, o[o.indexOf(c)] = null), be.__e(x, t, n);
  }
}
function fb(e, t) {
  be.__c && be.__c(t, e), e.some(function(n) {
    try {
      e = n.__h, n.__h = [], e.some(function(r) {
        r.call(n);
      });
    } catch (r) {
      be.__e(r, n.__v);
    }
  });
}
function ub(e, t, n, r, s, o, a, c) {
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
    if (o = o && dc.call(e.childNodes), p = (d = n.props || Fd).dangerouslySetInnerHTML, i = u.dangerouslySetInnerHTML, !c) {
      if (o != null)
        for (d = {}, _ = 0; _ < e.attributes.length; _++)
          d[e.attributes[_].name] = e.attributes[_].value;
      (i || p) && (i && (p && i.__html == p.__html || i.__html === e.innerHTML) || (e.innerHTML = i && i.__html || ""));
    }
    if (cb(e, u, d, s, c), i)
      t.__k = [];
    else if (_ = t.props.children, Gd(e, Array.isArray(_) ? _ : [_], t, n, r, s && l !== "foreignObject", o, a, o ? o[0] : n.__k && Fo(n, 0), c), o != null)
      for (_ = o.length; _--; )
        o[_] != null && Vd(o[_]);
    c || ("value" in u && (_ = u.value) !== void 0 && (_ !== e.value || l === "progress" && !_ || l === "option" && _ !== d.value) && Bs(e, "value", _, d.value, !1), "checked" in u && (_ = u.checked) !== void 0 && _ !== e.checked && Bs(e, "checked", _, d.checked, !1));
  }
  return e;
}
function Jd(e, t, n) {
  try {
    typeof e == "function" ? e(t) : e.current = t;
  } catch (r) {
    be.__e(r, n);
  }
}
function Qd(e, t, n) {
  var r, s;
  if (be.unmount && be.unmount(e), (r = e.ref) && (r.current && r.current !== e.__e || Jd(r, null, t)), (r = e.__c) != null) {
    if (r.componentWillUnmount)
      try {
        r.componentWillUnmount();
      } catch (o) {
        be.__e(o, t);
      }
    r.base = r.__P = null, e.__c = void 0;
  }
  if (r = e.__k)
    for (s = 0; s < r.length; s++)
      r[s] && Qd(r[s], t, n || typeof e.type != "function");
  n || e.__e == null || Vd(e.__e), e.__ = e.__e = e.__d = void 0;
}
function _b(e, t, n) {
  return this.constructor(e, n);
}
dc = zd.slice, be = { __e: function(e, t, n, r) {
  for (var s, o, a; t = t.__; )
    if ((s = t.__c) && !s.__)
      try {
        if ((o = s.constructor) && o.getDerivedStateFromError != null && (s.setState(o.getDerivedStateFromError(e)), a = s.__d), s.componentDidCatch != null && (s.componentDidCatch(e, r || {}), a = s.__d), a)
          return s.__E = s;
      } catch (c) {
        e = c;
      }
  throw e;
} }, jd = 0, ho.prototype.setState = function(e, t) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = hn({}, this.state), typeof e == "function" && (e = e(hn({}, n), this.props)), e && hn(n, e), e != null && this.__v && (t && this._sb.push(t), pu(this));
}, ho.prototype.forceUpdate = function(e) {
  this.__v && (this.__e = !0, e && this.__h.push(e), pu(this));
}, ho.prototype.render = hc, po = [], Us.__r = 0;
var vc = "top", eh = "bottom", js = "right", zo = "left", pb = "auto", th = [vc, eh, js, zo], db = "start", hb = "end", vb = /* @__PURE__ */ [].concat(th, [pb]).reduce(function(e, t) {
  return e.concat([t, t + "-" + db, t + "-" + hb]);
}, []);
function nh(e) {
  return e.split("-")[0];
}
function Wr(e) {
  if (e == null)
    return window;
  if (e.toString() !== "[object Window]") {
    var t = e.ownerDocument;
    return t && t.defaultView || window;
  }
  return e;
}
function rh(e) {
  var t = Wr(e).Element;
  return e instanceof t || e instanceof Element;
}
function Fs(e) {
  var t = Wr(e).HTMLElement;
  return e instanceof t || e instanceof HTMLElement;
}
function mc(e) {
  if (typeof ShadowRoot > "u")
    return !1;
  var t = Wr(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot;
}
var mb = Math.max, gb = Math.min, mu = Math.round;
function Cl() {
  var e = navigator.userAgentData;
  return e != null && e.brands ? e.brands.map(function(t) {
    return t.brand + "/" + t.version;
  }).join(" ") : navigator.userAgent;
}
function yb() {
  return !/^((?!chrome|android).)*safari/i.test(Cl());
}
function bb(e, t, n) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  var r = e.getBoundingClientRect(), s = 1, o = 1;
  t && Fs(e) && (s = e.offsetWidth > 0 && mu(r.width) / e.offsetWidth || 1, o = e.offsetHeight > 0 && mu(r.height) / e.offsetHeight || 1);
  var a = rh(e) ? Wr(e) : window, c = a.visualViewport, f = !yb() && n, p = (r.left + (f && c ? c.offsetLeft : 0)) / s, i = (r.top + (f && c ? c.offsetTop : 0)) / o, d = r.width / s, u = r.height / o;
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
function wb(e) {
  var t = bb(e), n = e.offsetWidth, r = e.offsetHeight;
  return Math.abs(t.width - n) <= 1 && (n = t.width), Math.abs(t.height - r) <= 1 && (r = t.height), {
    x: e.offsetLeft,
    y: e.offsetTop,
    width: n,
    height: r
  };
}
function $b(e, t) {
  var n = t.getRootNode && t.getRootNode();
  if (e.contains(t))
    return !0;
  if (n && mc(n)) {
    var r = t;
    do {
      if (r && e.isSameNode(r))
        return !0;
      r = r.parentNode || r.host;
    } while (r);
  }
  return !1;
}
function Vo(e) {
  return e ? (e.nodeName || "").toLowerCase() : null;
}
function Yo(e) {
  return Wr(e).getComputedStyle(e);
}
function kb(e) {
  return ["table", "td", "th"].indexOf(Vo(e)) >= 0;
}
function xb(e) {
  return ((rh(e) ? e.ownerDocument : e.document) || window.document).documentElement;
}
function Sb(e) {
  return Vo(e) === "html" ? e : e.assignedSlot || e.parentNode || (mc(e) ? e.host : null) || xb(e);
}
function gu(e) {
  return !Fs(e) || Yo(e).position === "fixed" ? null : e.offsetParent;
}
function Cb(e) {
  var t = /firefox/i.test(Cl()), n = /Trident/i.test(Cl());
  if (n && Fs(e)) {
    var r = Yo(e);
    if (r.position === "fixed")
      return null;
  }
  var s = Sb(e);
  for (mc(s) && (s = s.host); Fs(s) && ["html", "body"].indexOf(Vo(s)) < 0; ) {
    var o = Yo(s);
    if (o.transform !== "none" || o.perspective !== "none" || o.contain === "paint" || ["transform", "perspective"].indexOf(o.willChange) !== -1 || t && o.willChange === "filter" || t && o.filter && o.filter !== "none")
      return s;
    s = s.parentNode;
  }
  return null;
}
function Eb(e) {
  for (var t = Wr(e), n = gu(e); n && kb(n) && Yo(n).position === "static"; )
    n = gu(n);
  return n && (Vo(n) === "html" || Vo(n) === "body" && Yo(n).position === "static") ? t : n || Cb(e) || t;
}
function Ob(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function Ab(e, t, n) {
  return mb(e, gb(t, n));
}
function Mb() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
function Tb(e) {
  return Object.assign({}, Mb(), e);
}
function Db(e, t) {
  return t.reduce(function(n, r) {
    return n[r] = e, n;
  }, {});
}
var Lb = function(t, n) {
  return t = typeof t == "function" ? t(Object.assign({}, n.rects, {
    placement: n.placement
  })) : t, Tb(typeof t != "number" ? t : Db(t, th));
};
function Nb(e) {
  var t, n = e.state, r = e.name, s = e.options, o = n.elements.arrow, a = n.modifiersData.popperOffsets, c = nh(n.placement), f = Ob(c), p = [zo, js].indexOf(c) >= 0, i = p ? "height" : "width";
  if (!(!o || !a)) {
    var d = Lb(s.padding, n), u = wb(o), l = f === "y" ? vc : zo, _ = f === "y" ? eh : js, g = n.rects.reference[i] + n.rects.reference[f] - a[f] - n.rects.popper[i], h = a[f] - n.rects.reference[f], v = Eb(o), m = v ? f === "y" ? v.clientHeight || 0 : v.clientWidth || 0 : 0, k = g / 2 - h / 2, b = d[l], C = m - u[i] - d[_], $ = m / 2 - u[i] / 2 + k, S = Ab(b, $, C), y = f;
    n.modifiersData[r] = (t = {}, t[y] = S, t.centerOffset = S - $, t);
  }
}
function Pb(e) {
  var t = e.state, n = e.options, r = n.element, s = r === void 0 ? "[data-popper-arrow]" : r;
  s != null && (typeof s == "string" && (s = t.elements.popper.querySelector(s), !s) || !$b(t.elements.popper, s) || (t.elements.arrow = s));
}
const Rb = {
  name: "arrow",
  enabled: !0,
  phase: "main",
  fn: Nb,
  effect: Pb,
  requires: ["popperOffsets"],
  requiresIfExists: ["preventOverflow"]
};
function Hb(e, t, n) {
  var r = nh(e), s = [zo, vc].indexOf(r) >= 0 ? -1 : 1, o = typeof n == "function" ? n(Object.assign({}, t, {
    placement: e
  })) : n, a = o[0], c = o[1];
  return a = a || 0, c = (c || 0) * s, [zo, js].indexOf(r) >= 0 ? {
    x: c,
    y: a
  } : {
    x: a,
    y: c
  };
}
function Wb(e) {
  var t = e.state, n = e.options, r = e.name, s = n.offset, o = s === void 0 ? [0, 0] : s, a = vb.reduce(function(i, d) {
    return i[d] = Hb(d, t.rects, o), i;
  }, {}), c = a[t.placement], f = c.x, p = c.y;
  t.modifiersData.popperOffsets != null && (t.modifiersData.popperOffsets.x += f, t.modifiersData.popperOffsets.y += p), t.modifiersData[r] = a;
}
const Ib = {
  name: "offset",
  enabled: !0,
  phase: "main",
  requires: ["popperOffsets"],
  fn: Wb
};
var rl, ue, oh, vo, yu, zs = {}, ih = [], Ub = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function vn(e, t) {
  for (var n in t)
    e[n] = t[n];
  return e;
}
function sh(e) {
  var t = e.parentNode;
  t && t.removeChild(e);
}
function gc(e, t, n) {
  var r, s, o, a = {};
  for (o in t)
    o == "key" ? r = t[o] : o == "ref" ? s = t[o] : a[o] = t[o];
  if (arguments.length > 2 && (a.children = arguments.length > 3 ? rl.call(arguments, 2) : n), typeof e == "function" && e.defaultProps != null)
    for (o in e.defaultProps)
      a[o] === void 0 && (a[o] = e.defaultProps[o]);
  return ts(e, a, r, s, null);
}
function ts(e, t, n, r, s) {
  var o = { type: e, props: t, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: s == null ? ++oh : s };
  return s == null && ue.vnode != null && ue.vnode(o), o;
}
function ol(e) {
  return e.children;
}
function ns(e, t) {
  this.props = e, this.context = t;
}
function qo(e, t) {
  if (t == null)
    return e.__ ? qo(e.__, e.__.__k.indexOf(e) + 1) : null;
  for (var n; t < e.__k.length; t++)
    if ((n = e.__k[t]) != null && n.__e != null)
      return n.__e;
  return typeof e.type == "function" ? qo(e) : null;
}
function ah(e) {
  var t, n;
  if ((e = e.__) != null && e.__c != null) {
    for (e.__e = e.__c.base = null, t = 0; t < e.__k.length; t++)
      if ((n = e.__k[t]) != null && n.__e != null) {
        e.__e = e.__c.base = n.__e;
        break;
      }
    return ah(e);
  }
}
function bu(e) {
  (!e.__d && (e.__d = !0) && vo.push(e) && !Vs.__r++ || yu !== ue.debounceRendering) && ((yu = ue.debounceRendering) || setTimeout)(Vs);
}
function Vs() {
  for (var e; Vs.__r = vo.length; )
    e = vo.sort(function(t, n) {
      return t.__v.__b - n.__v.__b;
    }), vo = [], e.some(function(t) {
      var n, r, s, o, a, c;
      t.__d && (a = (o = (n = t).__v).__e, (c = n.__P) && (r = [], (s = vn({}, o)).__v = o.__v + 1, yc(c, o, s, n.__n, c.ownerSVGElement !== void 0, o.__h != null ? [a] : null, r, a == null ? qo(o) : a, o.__h), uh(r, o), o.__e != a && ah(o)));
    });
}
function lh(e, t, n, r, s, o, a, c, f, p) {
  var i, d, u, l, _, g, h, v = r && r.__k || ih, m = v.length;
  for (n.__k = [], i = 0; i < t.length; i++)
    if ((l = n.__k[i] = (l = t[i]) == null || typeof l == "boolean" ? null : typeof l == "string" || typeof l == "number" || typeof l == "bigint" ? ts(null, l, null, null, l) : Array.isArray(l) ? ts(ol, { children: l }, null, null, null) : l.__b > 0 ? ts(l.type, l.props, l.key, l.ref ? l.ref : null, l.__v) : l) != null) {
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
      yc(e, l, u = u || zs, s, o, a, c, f, p), _ = l.__e, (d = l.ref) && u.ref != d && (h || (h = []), u.ref && h.push(u.ref, null, l), h.push(d, l.__c || _, l)), _ != null ? (g == null && (g = _), typeof l.type == "function" && l.__k === u.__k ? l.__d = f = ch(l, f, e) : f = fh(e, l, u, v, _, f), typeof n.type == "function" && (n.__d = f)) : f && u.__e == f && f.parentNode != e && (f = qo(u));
    }
  for (n.__e = g, i = m; i--; )
    v[i] != null && ph(v[i], v[i]);
  if (h)
    for (i = 0; i < h.length; i++)
      _h(h[i], h[++i], h[++i]);
}
function ch(e, t, n) {
  for (var r, s = e.__k, o = 0; s && o < s.length; o++)
    (r = s[o]) && (r.__ = e, t = typeof r.type == "function" ? ch(r, t, n) : fh(n, r, r, s, r.__e, t));
  return t;
}
function fh(e, t, n, r, s, o) {
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
function Bb(e, t, n, r, s) {
  var o;
  for (o in n)
    o === "children" || o === "key" || o in t || Ys(e, o, null, n[o], r);
  for (o in t)
    s && typeof t[o] != "function" || o === "children" || o === "key" || o === "value" || o === "checked" || n[o] === t[o] || Ys(e, o, t[o], n[o], r);
}
function wu(e, t, n) {
  t[0] === "-" ? e.setProperty(t, n) : e[t] = n == null ? "" : typeof n != "number" || Ub.test(t) ? n : n + "px";
}
function Ys(e, t, n, r, s) {
  var o;
  e:
    if (t === "style")
      if (typeof n == "string")
        e.style.cssText = n;
      else {
        if (typeof r == "string" && (e.style.cssText = r = ""), r)
          for (t in r)
            n && t in n || wu(e.style, t, "");
        if (n)
          for (t in n)
            r && n[t] === r[t] || wu(e.style, t, n[t]);
      }
    else if (t[0] === "o" && t[1] === "n")
      o = t !== (t = t.replace(/Capture$/, "")), t = t.toLowerCase() in e ? t.toLowerCase().slice(2) : t.slice(2), e.l || (e.l = {}), e.l[t + o] = n, n ? r || e.addEventListener(t, o ? ku : $u, o) : e.removeEventListener(t, o ? ku : $u, o);
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
function $u(e) {
  this.l[e.type + !1](ue.event ? ue.event(e) : e);
}
function ku(e) {
  this.l[e.type + !0](ue.event ? ue.event(e) : e);
}
function yc(e, t, n, r, s, o, a, c, f) {
  var p, i, d, u, l, _, g, h, v, m, k, b, C, $, S, y = t.type;
  if (t.constructor !== void 0)
    return null;
  n.__h != null && (f = n.__h, c = t.__e = n.__e, t.__h = null, o = [c]), (p = ue.__b) && p(t);
  try {
    e:
      if (typeof y == "function") {
        if (h = t.props, v = (p = y.contextType) && r[p.__c], m = p ? v ? v.props.value : p.__ : r, n.__c ? g = (i = t.__c = n.__c).__ = i.__E : ("prototype" in y && y.prototype.render ? t.__c = i = new y(h, m) : (t.__c = i = new ns(h, m), i.constructor = y, i.render = Fb), v && v.sub(i), i.props = h, i.state || (i.state = {}), i.context = m, i.__n = r, d = i.__d = !0, i.__h = [], i._sb = []), i.__s == null && (i.__s = i.state), y.getDerivedStateFromProps != null && (i.__s == i.state && (i.__s = vn({}, i.__s)), vn(i.__s, y.getDerivedStateFromProps(h, i.__s))), u = i.props, l = i.state, d)
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
        if (i.context = m, i.props = h, i.__v = t, i.__P = e, b = ue.__r, C = 0, "prototype" in y && y.prototype.render) {
          for (i.state = i.__s, i.__d = !1, b && b(t), p = i.render(i.props, i.state, i.context), $ = 0; $ < i._sb.length; $++)
            i.__h.push(i._sb[$]);
          i._sb = [];
        } else
          do
            i.__d = !1, b && b(t), p = i.render(i.props, i.state, i.context), i.state = i.__s;
          while (i.__d && ++C < 25);
        i.state = i.__s, i.getChildContext != null && (r = vn(vn({}, r), i.getChildContext())), d || i.getSnapshotBeforeUpdate == null || (_ = i.getSnapshotBeforeUpdate(u, l)), S = p != null && p.type === ol && p.key == null ? p.props.children : p, lh(e, Array.isArray(S) ? S : [S], t, n, r, s, o, a, c, f), i.base = t.__e, t.__h = null, i.__h.length && a.push(i), g && (i.__E = i.__ = null), i.__e = !1;
      } else
        o == null && t.__v === n.__v ? (t.__k = n.__k, t.__e = n.__e) : t.__e = jb(n.__e, t, n, r, s, o, a, f);
    (p = ue.diffed) && p(t);
  } catch (x) {
    t.__v = null, (f || o != null) && (t.__e = c, t.__h = !!f, o[o.indexOf(c)] = null), ue.__e(x, t, n);
  }
}
function uh(e, t) {
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
function jb(e, t, n, r, s, o, a, c) {
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
    if (o = o && rl.call(e.childNodes), p = (d = n.props || zs).dangerouslySetInnerHTML, i = u.dangerouslySetInnerHTML, !c) {
      if (o != null)
        for (d = {}, _ = 0; _ < e.attributes.length; _++)
          d[e.attributes[_].name] = e.attributes[_].value;
      (i || p) && (i && (p && i.__html == p.__html || i.__html === e.innerHTML) || (e.innerHTML = i && i.__html || ""));
    }
    if (Bb(e, u, d, s, c), i)
      t.__k = [];
    else if (_ = t.props.children, lh(e, Array.isArray(_) ? _ : [_], t, n, r, s && l !== "foreignObject", o, a, o ? o[0] : n.__k && qo(n, 0), c), o != null)
      for (_ = o.length; _--; )
        o[_] != null && sh(o[_]);
    c || ("value" in u && (_ = u.value) !== void 0 && (_ !== e.value || l === "progress" && !_ || l === "option" && _ !== d.value) && Ys(e, "value", _, d.value, !1), "checked" in u && (_ = u.checked) !== void 0 && _ !== e.checked && Ys(e, "checked", _, d.checked, !1));
  }
  return e;
}
function _h(e, t, n) {
  try {
    typeof e == "function" ? e(t) : e.current = t;
  } catch (r) {
    ue.__e(r, n);
  }
}
function ph(e, t, n) {
  var r, s;
  if (ue.unmount && ue.unmount(e), (r = e.ref) && (r.current && r.current !== e.__e || _h(r, null, t)), (r = e.__c) != null) {
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
      r[s] && ph(r[s], t, n || typeof e.type != "function");
  n || e.__e == null || sh(e.__e), e.__ = e.__e = e.__d = void 0;
}
function Fb(e, t, n) {
  return this.constructor(e, n);
}
function zb(e, t, n) {
  var r, s, o;
  ue.__ && ue.__(e, t), s = (r = typeof n == "function") ? null : n && n.__k || t.__k, o = [], yc(t, e = (!r && n || t).__k = gc(ol, null, [e]), s || zs, zs, t.ownerSVGElement !== void 0, !r && n ? [n] : s ? null : t.firstChild ? rl.call(t.childNodes) : null, o, !r && n ? n : s ? s.__e : t.firstChild, r), uh(o, e);
}
rl = ih.slice, ue = { __e: function(e, t, n, r) {
  for (var s, o, a; t = t.__; )
    if ((s = t.__c) && !s.__)
      try {
        if ((o = s.constructor) && o.getDerivedStateFromError != null && (s.setState(o.getDerivedStateFromError(e)), a = s.__d), s.componentDidCatch != null && (s.componentDidCatch(e, r || {}), a = s.__d), a)
          return s.__E = s;
      } catch (c) {
        e = c;
      }
  throw e;
} }, oh = 0, ns.prototype.setState = function(e, t) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = vn({}, this.state), typeof e == "function" && (e = e(vn({}, n), this.props)), e && vn(n, e), e != null && this.__v && (t && this._sb.push(t), bu(this));
}, ns.prototype.forceUpdate = function(e) {
  this.__v && (this.__e = !0, e && this.__h.push(e), bu(this));
}, ns.prototype.render = ol, vo = [], Vs.__r = 0;
function tt(e) {
  if (e == null)
    return window;
  if (e.toString() !== "[object Window]") {
    var t = e.ownerDocument;
    return t && t.defaultView || window;
  }
  return e;
}
function Vn(e) {
  var t = tt(e).Element;
  return e instanceof t || e instanceof Element;
}
function Ze(e) {
  var t = tt(e).HTMLElement;
  return e instanceof t || e instanceof HTMLElement;
}
function bc(e) {
  if (typeof ShadowRoot > "u")
    return !1;
  var t = tt(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot;
}
var Bn = Math.max, qs = Math.min, Cr = Math.round;
function El() {
  var e = navigator.userAgentData;
  return e != null && e.brands ? e.brands.map(function(t) {
    return t.brand + "/" + t.version;
  }).join(" ") : navigator.userAgent;
}
function dh() {
  return !/^((?!chrome|android).)*safari/i.test(El());
}
function Er(e, t, n) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  var r = e.getBoundingClientRect(), s = 1, o = 1;
  t && Ze(e) && (s = e.offsetWidth > 0 && Cr(r.width) / e.offsetWidth || 1, o = e.offsetHeight > 0 && Cr(r.height) / e.offsetHeight || 1);
  var a = Vn(e) ? tt(e) : window, c = a.visualViewport, f = !dh() && n, p = (r.left + (f && c ? c.offsetLeft : 0)) / s, i = (r.top + (f && c ? c.offsetTop : 0)) / o, d = r.width / s, u = r.height / o;
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
function wc(e) {
  var t = tt(e), n = t.pageXOffset, r = t.pageYOffset;
  return {
    scrollLeft: n,
    scrollTop: r
  };
}
function Vb(e) {
  return {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  };
}
function Yb(e) {
  return e === tt(e) || !Ze(e) ? wc(e) : Vb(e);
}
function Nt(e) {
  return e ? (e.nodeName || "").toLowerCase() : null;
}
function An(e) {
  return ((Vn(e) ? e.ownerDocument : e.document) || window.document).documentElement;
}
function $c(e) {
  return Er(An(e)).left + wc(e).scrollLeft;
}
function Gt(e) {
  return tt(e).getComputedStyle(e);
}
function kc(e) {
  var t = Gt(e), n = t.overflow, r = t.overflowX, s = t.overflowY;
  return /auto|scroll|overlay|hidden/.test(n + s + r);
}
function qb(e) {
  var t = e.getBoundingClientRect(), n = Cr(t.width) / e.offsetWidth || 1, r = Cr(t.height) / e.offsetHeight || 1;
  return n !== 1 || r !== 1;
}
function Gb(e, t, n) {
  n === void 0 && (n = !1);
  var r = Ze(t), s = Ze(t) && qb(t), o = An(t), a = Er(e, s, n), c = {
    scrollLeft: 0,
    scrollTop: 0
  }, f = {
    x: 0,
    y: 0
  };
  return (r || !r && !n) && ((Nt(t) !== "body" || kc(o)) && (c = Yb(t)), Ze(t) ? (f = Er(t, !0), f.x += t.clientLeft, f.y += t.clientTop) : o && (f.x = $c(o))), {
    x: a.left + c.scrollLeft - f.x,
    y: a.top + c.scrollTop - f.y,
    width: a.width,
    height: a.height
  };
}
function hh(e) {
  var t = Er(e), n = e.offsetWidth, r = e.offsetHeight;
  return Math.abs(t.width - n) <= 1 && (n = t.width), Math.abs(t.height - r) <= 1 && (r = t.height), {
    x: e.offsetLeft,
    y: e.offsetTop,
    width: n,
    height: r
  };
}
function il(e) {
  return Nt(e) === "html" ? e : e.assignedSlot || e.parentNode || (bc(e) ? e.host : null) || An(e);
}
function vh(e) {
  return ["html", "body", "#document"].indexOf(Nt(e)) >= 0 ? e.ownerDocument.body : Ze(e) && kc(e) ? e : vh(il(e));
}
function mo(e, t) {
  var n;
  t === void 0 && (t = []);
  var r = vh(e), s = r === ((n = e.ownerDocument) == null ? void 0 : n.body), o = tt(r), a = s ? [o].concat(o.visualViewport || [], kc(r) ? r : []) : r, c = t.concat(a);
  return s ? c : c.concat(mo(il(a)));
}
function Xb(e) {
  return ["table", "td", "th"].indexOf(Nt(e)) >= 0;
}
function xu(e) {
  return !Ze(e) || Gt(e).position === "fixed" ? null : e.offsetParent;
}
function Kb(e) {
  var t = /firefox/i.test(El()), n = /Trident/i.test(El());
  if (n && Ze(e)) {
    var r = Gt(e);
    if (r.position === "fixed")
      return null;
  }
  var s = il(e);
  for (bc(s) && (s = s.host); Ze(s) && ["html", "body"].indexOf(Nt(s)) < 0; ) {
    var o = Gt(s);
    if (o.transform !== "none" || o.perspective !== "none" || o.contain === "paint" || ["transform", "perspective"].indexOf(o.willChange) !== -1 || t && o.willChange === "filter" || t && o.filter && o.filter !== "none")
      return s;
    s = s.parentNode;
  }
  return null;
}
function sl(e) {
  for (var t = tt(e), n = xu(e); n && Xb(n) && Gt(n).position === "static"; )
    n = xu(n);
  return n && (Nt(n) === "html" || Nt(n) === "body" && Gt(n).position === "static") ? t : n || Kb(e) || t;
}
var pt = "top", Pt = "bottom", En = "right", Yt = "left", xc = "auto", al = [pt, Pt, En, Yt], Or = "start", Go = "end", Zb = "clippingParents", mh = "viewport", Br = "popper", Jb = "reference", Su = /* @__PURE__ */ al.reduce(function(e, t) {
  return e.concat([t + "-" + Or, t + "-" + Go]);
}, []), Qb = /* @__PURE__ */ [].concat(al, [xc]).reduce(function(e, t) {
  return e.concat([t, t + "-" + Or, t + "-" + Go]);
}, []), e0 = "beforeRead", t0 = "read", n0 = "afterRead", r0 = "beforeMain", o0 = "main", i0 = "afterMain", s0 = "beforeWrite", a0 = "write", l0 = "afterWrite", c0 = [e0, t0, n0, r0, o0, i0, s0, a0, l0];
function f0(e) {
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
function u0(e) {
  var t = f0(e);
  return c0.reduce(function(n, r) {
    return n.concat(t.filter(function(s) {
      return s.phase === r;
    }));
  }, []);
}
function _0(e) {
  var t;
  return function() {
    return t || (t = new Promise(function(n) {
      Promise.resolve().then(function() {
        t = void 0, n(e());
      });
    })), t;
  };
}
function kn(e) {
  return e.split("-")[0];
}
function p0(e) {
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
function d0(e, t) {
  var n = tt(e), r = An(e), s = n.visualViewport, o = r.clientWidth, a = r.clientHeight, c = 0, f = 0;
  if (s) {
    o = s.width, a = s.height;
    var p = dh();
    (p || !p && t === "fixed") && (c = s.offsetLeft, f = s.offsetTop);
  }
  return {
    width: o,
    height: a,
    x: c + $c(e),
    y: f
  };
}
function h0(e) {
  var t, n = An(e), r = wc(e), s = (t = e.ownerDocument) == null ? void 0 : t.body, o = Bn(n.scrollWidth, n.clientWidth, s ? s.scrollWidth : 0, s ? s.clientWidth : 0), a = Bn(n.scrollHeight, n.clientHeight, s ? s.scrollHeight : 0, s ? s.clientHeight : 0), c = -r.scrollLeft + $c(e), f = -r.scrollTop;
  return Gt(s || n).direction === "rtl" && (c += Bn(n.clientWidth, s ? s.clientWidth : 0) - o), {
    width: o,
    height: a,
    x: c,
    y: f
  };
}
function v0(e, t) {
  var n = t.getRootNode && t.getRootNode();
  if (e.contains(t))
    return !0;
  if (n && bc(n)) {
    var r = t;
    do {
      if (r && e.isSameNode(r))
        return !0;
      r = r.parentNode || r.host;
    } while (r);
  }
  return !1;
}
function Ol(e) {
  return Object.assign({}, e, {
    left: e.x,
    top: e.y,
    right: e.x + e.width,
    bottom: e.y + e.height
  });
}
function m0(e, t) {
  var n = Er(e, !1, t === "fixed");
  return n.top = n.top + e.clientTop, n.left = n.left + e.clientLeft, n.bottom = n.top + e.clientHeight, n.right = n.left + e.clientWidth, n.width = e.clientWidth, n.height = e.clientHeight, n.x = n.left, n.y = n.top, n;
}
function Cu(e, t, n) {
  return t === mh ? Ol(d0(e, n)) : Vn(t) ? m0(t, n) : Ol(h0(An(e)));
}
function g0(e) {
  var t = mo(il(e)), n = ["absolute", "fixed"].indexOf(Gt(e).position) >= 0, r = n && Ze(e) ? sl(e) : e;
  return Vn(r) ? t.filter(function(s) {
    return Vn(s) && v0(s, r) && Nt(s) !== "body";
  }) : [];
}
function y0(e, t, n, r) {
  var s = t === "clippingParents" ? g0(e) : [].concat(t), o = [].concat(s, [n]), a = o[0], c = o.reduce(function(f, p) {
    var i = Cu(e, p, r);
    return f.top = Bn(i.top, f.top), f.right = qs(i.right, f.right), f.bottom = qs(i.bottom, f.bottom), f.left = Bn(i.left, f.left), f;
  }, Cu(e, a, r));
  return c.width = c.right - c.left, c.height = c.bottom - c.top, c.x = c.left, c.y = c.top, c;
}
function Ar(e) {
  return e.split("-")[1];
}
function gh(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function yh(e) {
  var t = e.reference, n = e.element, r = e.placement, s = r ? kn(r) : null, o = r ? Ar(r) : null, a = t.x + t.width / 2 - n.width / 2, c = t.y + t.height / 2 - n.height / 2, f;
  switch (s) {
    case pt:
      f = {
        x: a,
        y: t.y - n.height
      };
      break;
    case Pt:
      f = {
        x: a,
        y: t.y + t.height
      };
      break;
    case En:
      f = {
        x: t.x + t.width,
        y: c
      };
      break;
    case Yt:
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
  var p = s ? gh(s) : null;
  if (p != null) {
    var i = p === "y" ? "height" : "width";
    switch (o) {
      case Or:
        f[p] = f[p] - (t[i] / 2 - n[i] / 2);
        break;
      case Go:
        f[p] = f[p] + (t[i] / 2 - n[i] / 2);
        break;
    }
  }
  return f;
}
function bh() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
function b0(e) {
  return Object.assign({}, bh(), e);
}
function w0(e, t) {
  return t.reduce(function(n, r) {
    return n[r] = e, n;
  }, {});
}
function Sc(e, t) {
  t === void 0 && (t = {});
  var n = t, r = n.placement, s = r === void 0 ? e.placement : r, o = n.strategy, a = o === void 0 ? e.strategy : o, c = n.boundary, f = c === void 0 ? Zb : c, p = n.rootBoundary, i = p === void 0 ? mh : p, d = n.elementContext, u = d === void 0 ? Br : d, l = n.altBoundary, _ = l === void 0 ? !1 : l, g = n.padding, h = g === void 0 ? 0 : g, v = b0(typeof h != "number" ? h : w0(h, al)), m = u === Br ? Jb : Br, k = e.rects.popper, b = e.elements[_ ? m : u], C = y0(Vn(b) ? b : b.contextElement || An(e.elements.popper), f, i, a), $ = Er(e.elements.reference), S = yh({
    reference: $,
    element: k,
    strategy: "absolute",
    placement: s
  }), y = Ol(Object.assign({}, k, S)), x = u === Br ? y : $, A = {
    top: C.top - x.top + v.top,
    bottom: x.bottom - C.bottom + v.bottom,
    left: C.left - x.left + v.left,
    right: x.right - C.right + v.right
  }, W = e.modifiersData.offset;
  if (u === Br && W) {
    var U = W[s];
    Object.keys(A).forEach(function(T) {
      var M = [En, Pt].indexOf(T) >= 0 ? 1 : -1, O = [pt, Pt].indexOf(T) >= 0 ? "y" : "x";
      A[T] += U[O] * M;
    });
  }
  return A;
}
var Eu = {
  placement: "bottom",
  modifiers: [],
  strategy: "absolute"
};
function Ou() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return !t.some(function(r) {
    return !(r && typeof r.getBoundingClientRect == "function");
  });
}
function $0(e) {
  e === void 0 && (e = {});
  var t = e, n = t.defaultModifiers, r = n === void 0 ? [] : n, s = t.defaultOptions, o = s === void 0 ? Eu : s;
  return function(c, f, p) {
    p === void 0 && (p = o);
    var i = {
      placement: "bottom",
      orderedModifiers: [],
      options: Object.assign({}, Eu, o),
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
          reference: Vn(c) ? mo(c) : c.contextElement ? mo(c.contextElement) : [],
          popper: mo(f)
        };
        var k = u0(p0([].concat(r, i.options.modifiers)));
        return i.orderedModifiers = k.filter(function(b) {
          return b.enabled;
        }), _(), l.update();
      },
      forceUpdate: function() {
        if (!u) {
          var v = i.elements, m = v.reference, k = v.popper;
          if (!!Ou(m, k)) {
            i.rects = {
              reference: Gb(m, sl(k), i.options.strategy === "fixed"),
              popper: hh(k)
            }, i.reset = !1, i.placement = i.options.placement, i.orderedModifiers.forEach(function(A) {
              return i.modifiersData[A.name] = Object.assign({}, A.data);
            });
            for (var b = 0; b < i.orderedModifiers.length; b++) {
              if (i.reset === !0) {
                i.reset = !1, b = -1;
                continue;
              }
              var C = i.orderedModifiers[b], $ = C.fn, S = C.options, y = S === void 0 ? {} : S, x = C.name;
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
      update: _0(function() {
        return new Promise(function(h) {
          l.forceUpdate(), h(i);
        });
      }),
      destroy: function() {
        g(), u = !0;
      }
    };
    if (!Ou(c, f))
      return l;
    l.setOptions(p).then(function(h) {
      !u && p.onFirstUpdate && p.onFirstUpdate(h);
    });
    function _() {
      i.orderedModifiers.forEach(function(h) {
        var v = h.name, m = h.options, k = m === void 0 ? {} : m, b = h.effect;
        if (typeof b == "function") {
          var C = b({
            state: i,
            name: v,
            instance: l,
            options: k
          }), $ = function() {
          };
          d.push(C || $);
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
var Hi = {
  passive: !0
};
function k0(e) {
  var t = e.state, n = e.instance, r = e.options, s = r.scroll, o = s === void 0 ? !0 : s, a = r.resize, c = a === void 0 ? !0 : a, f = tt(t.elements.popper), p = [].concat(t.scrollParents.reference, t.scrollParents.popper);
  return o && p.forEach(function(i) {
    i.addEventListener("scroll", n.update, Hi);
  }), c && f.addEventListener("resize", n.update, Hi), function() {
    o && p.forEach(function(i) {
      i.removeEventListener("scroll", n.update, Hi);
    }), c && f.removeEventListener("resize", n.update, Hi);
  };
}
const x0 = {
  name: "eventListeners",
  enabled: !0,
  phase: "write",
  fn: function() {
  },
  effect: k0,
  data: {}
};
function S0(e) {
  var t = e.state, n = e.name;
  t.modifiersData[n] = yh({
    reference: t.rects.reference,
    element: t.rects.popper,
    strategy: "absolute",
    placement: t.placement
  });
}
const C0 = {
  name: "popperOffsets",
  enabled: !0,
  phase: "read",
  fn: S0,
  data: {}
};
var E0 = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function O0(e) {
  var t = e.x, n = e.y, r = window, s = r.devicePixelRatio || 1;
  return {
    x: Cr(t * s) / s || 0,
    y: Cr(n * s) / s || 0
  };
}
function Au(e) {
  var t, n = e.popper, r = e.popperRect, s = e.placement, o = e.variation, a = e.offsets, c = e.position, f = e.gpuAcceleration, p = e.adaptive, i = e.roundOffsets, d = e.isFixed, u = a.x, l = u === void 0 ? 0 : u, _ = a.y, g = _ === void 0 ? 0 : _, h = typeof i == "function" ? i({
    x: l,
    y: g
  }) : {
    x: l,
    y: g
  };
  l = h.x, g = h.y;
  var v = a.hasOwnProperty("x"), m = a.hasOwnProperty("y"), k = Yt, b = pt, C = window;
  if (p) {
    var $ = sl(n), S = "clientHeight", y = "clientWidth";
    if ($ === tt(n) && ($ = An(n), Gt($).position !== "static" && c === "absolute" && (S = "scrollHeight", y = "scrollWidth")), $ = $, s === pt || (s === Yt || s === En) && o === Go) {
      b = Pt;
      var x = d && $ === C && C.visualViewport ? C.visualViewport.height : $[S];
      g -= x - r.height, g *= f ? 1 : -1;
    }
    if (s === Yt || (s === pt || s === Pt) && o === Go) {
      k = En;
      var A = d && $ === C && C.visualViewport ? C.visualViewport.width : $[y];
      l -= A - r.width, l *= f ? 1 : -1;
    }
  }
  var W = Object.assign({
    position: c
  }, p && E0), U = i === !0 ? O0({
    x: l,
    y: g
  }) : {
    x: l,
    y: g
  };
  if (l = U.x, g = U.y, f) {
    var T;
    return Object.assign({}, W, (T = {}, T[b] = m ? "0" : "", T[k] = v ? "0" : "", T.transform = (C.devicePixelRatio || 1) <= 1 ? "translate(" + l + "px, " + g + "px)" : "translate3d(" + l + "px, " + g + "px, 0)", T));
  }
  return Object.assign({}, W, (t = {}, t[b] = m ? g + "px" : "", t[k] = v ? l + "px" : "", t.transform = "", t));
}
function A0(e) {
  var t = e.state, n = e.options, r = n.gpuAcceleration, s = r === void 0 ? !0 : r, o = n.adaptive, a = o === void 0 ? !0 : o, c = n.roundOffsets, f = c === void 0 ? !0 : c, p = {
    placement: kn(t.placement),
    variation: Ar(t.placement),
    popper: t.elements.popper,
    popperRect: t.rects.popper,
    gpuAcceleration: s,
    isFixed: t.options.strategy === "fixed"
  };
  t.modifiersData.popperOffsets != null && (t.styles.popper = Object.assign({}, t.styles.popper, Au(Object.assign({}, p, {
    offsets: t.modifiersData.popperOffsets,
    position: t.options.strategy,
    adaptive: a,
    roundOffsets: f
  })))), t.modifiersData.arrow != null && (t.styles.arrow = Object.assign({}, t.styles.arrow, Au(Object.assign({}, p, {
    offsets: t.modifiersData.arrow,
    position: "absolute",
    adaptive: !1,
    roundOffsets: f
  })))), t.attributes.popper = Object.assign({}, t.attributes.popper, {
    "data-popper-placement": t.placement
  });
}
const M0 = {
  name: "computeStyles",
  enabled: !0,
  phase: "beforeWrite",
  fn: A0,
  data: {}
};
function T0(e) {
  var t = e.state;
  Object.keys(t.elements).forEach(function(n) {
    var r = t.styles[n] || {}, s = t.attributes[n] || {}, o = t.elements[n];
    !Ze(o) || !Nt(o) || (Object.assign(o.style, r), Object.keys(s).forEach(function(a) {
      var c = s[a];
      c === !1 ? o.removeAttribute(a) : o.setAttribute(a, c === !0 ? "" : c);
    }));
  });
}
function D0(e) {
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
      !Ze(s) || !Nt(s) || (Object.assign(s.style, c), Object.keys(o).forEach(function(f) {
        s.removeAttribute(f);
      }));
    });
  };
}
const L0 = {
  name: "applyStyles",
  enabled: !0,
  phase: "write",
  fn: T0,
  effect: D0,
  requires: ["computeStyles"]
};
var N0 = [x0, C0, M0, L0], wh = /* @__PURE__ */ $0({
  defaultModifiers: N0
});
function P0(e) {
  return e === "x" ? "y" : "x";
}
function rs(e, t, n) {
  return Bn(e, qs(t, n));
}
function R0(e, t, n) {
  var r = rs(e, t, n);
  return r > n ? n : r;
}
function H0(e) {
  var t = e.state, n = e.options, r = e.name, s = n.mainAxis, o = s === void 0 ? !0 : s, a = n.altAxis, c = a === void 0 ? !1 : a, f = n.boundary, p = n.rootBoundary, i = n.altBoundary, d = n.padding, u = n.tether, l = u === void 0 ? !0 : u, _ = n.tetherOffset, g = _ === void 0 ? 0 : _, h = Sc(t, {
    boundary: f,
    rootBoundary: p,
    padding: d,
    altBoundary: i
  }), v = kn(t.placement), m = Ar(t.placement), k = !m, b = gh(v), C = P0(b), $ = t.modifiersData.popperOffsets, S = t.rects.reference, y = t.rects.popper, x = typeof g == "function" ? g(Object.assign({}, t.rects, {
    placement: t.placement
  })) : g, A = typeof x == "number" ? {
    mainAxis: x,
    altAxis: x
  } : Object.assign({
    mainAxis: 0,
    altAxis: 0
  }, x), W = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null, U = {
    x: 0,
    y: 0
  };
  if (!!$) {
    if (o) {
      var T, M = b === "y" ? pt : Yt, O = b === "y" ? Pt : En, D = b === "y" ? "height" : "width", E = $[b], R = E + h[M], L = E - h[O], I = l ? -y[D] / 2 : 0, F = m === Or ? S[D] : y[D], j = m === Or ? -y[D] : -S[D], V = t.elements.arrow, X = l && V ? hh(V) : {
        width: 0,
        height: 0
      }, H = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : bh(), Y = H[M], K = H[O], q = rs(0, S[D], X[D]), G = k ? S[D] / 2 - I - q - Y - A.mainAxis : F - q - Y - A.mainAxis, ne = k ? -S[D] / 2 + I + q + K + A.mainAxis : j + q + K + A.mainAxis, re = t.elements.arrow && sl(t.elements.arrow), pe = re ? b === "y" ? re.clientTop || 0 : re.clientLeft || 0 : 0, Le = (T = W == null ? void 0 : W[b]) != null ? T : 0, te = E + G - Le - pe, bt = E + ne - Le, Oe = rs(l ? qs(R, te) : R, E, l ? Bn(L, bt) : L);
      $[b] = Oe, U[b] = Oe - E;
    }
    if (c) {
      var Ae, wt = b === "x" ? pt : Yt, Ye = b === "x" ? Pt : En, ee = $[C], se = C === "y" ? "height" : "width", Me = ee + h[wt], ot = ee - h[Ye], Ee = [pt, Yt].indexOf(v) !== -1, it = (Ae = W == null ? void 0 : W[C]) != null ? Ae : 0, st = Ee ? Me : ee - S[se] - y[se] - it + A.altAxis, at = Ee ? ee + S[se] + y[se] - it - A.altAxis : ot, lt = l && Ee ? R0(st, ee, at) : rs(l ? st : Me, ee, l ? at : ot);
      $[C] = lt, U[C] = lt - ee;
    }
    t.modifiersData[r] = U;
  }
}
const Al = {
  name: "preventOverflow",
  enabled: !0,
  phase: "main",
  fn: H0,
  requiresIfExists: ["offset"]
};
var W0 = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function os(e) {
  return e.replace(/left|right|bottom|top/g, function(t) {
    return W0[t];
  });
}
var I0 = {
  start: "end",
  end: "start"
};
function Mu(e) {
  return e.replace(/start|end/g, function(t) {
    return I0[t];
  });
}
function U0(e, t) {
  t === void 0 && (t = {});
  var n = t, r = n.placement, s = n.boundary, o = n.rootBoundary, a = n.padding, c = n.flipVariations, f = n.allowedAutoPlacements, p = f === void 0 ? Qb : f, i = Ar(r), d = i ? c ? Su : Su.filter(function(_) {
    return Ar(_) === i;
  }) : al, u = d.filter(function(_) {
    return p.indexOf(_) >= 0;
  });
  u.length === 0 && (u = d);
  var l = u.reduce(function(_, g) {
    return _[g] = Sc(e, {
      placement: g,
      boundary: s,
      rootBoundary: o,
      padding: a
    })[kn(g)], _;
  }, {});
  return Object.keys(l).sort(function(_, g) {
    return l[_] - l[g];
  });
}
function B0(e) {
  if (kn(e) === xc)
    return [];
  var t = os(e);
  return [Mu(e), t, Mu(t)];
}
function j0(e) {
  var t = e.state, n = e.options, r = e.name;
  if (!t.modifiersData[r]._skip) {
    for (var s = n.mainAxis, o = s === void 0 ? !0 : s, a = n.altAxis, c = a === void 0 ? !0 : a, f = n.fallbackPlacements, p = n.padding, i = n.boundary, d = n.rootBoundary, u = n.altBoundary, l = n.flipVariations, _ = l === void 0 ? !0 : l, g = n.allowedAutoPlacements, h = t.options.placement, v = kn(h), m = v === h, k = f || (m || !_ ? [os(h)] : B0(h)), b = [h].concat(k).reduce(function(X, H) {
      return X.concat(kn(H) === xc ? U0(t, {
        placement: H,
        boundary: i,
        rootBoundary: d,
        padding: p,
        flipVariations: _,
        allowedAutoPlacements: g
      }) : H);
    }, []), C = t.rects.reference, $ = t.rects.popper, S = /* @__PURE__ */ new Map(), y = !0, x = b[0], A = 0; A < b.length; A++) {
      var W = b[A], U = kn(W), T = Ar(W) === Or, M = [pt, Pt].indexOf(U) >= 0, O = M ? "width" : "height", D = Sc(t, {
        placement: W,
        boundary: i,
        rootBoundary: d,
        altBoundary: u,
        padding: p
      }), E = M ? T ? En : Yt : T ? Pt : pt;
      C[O] > $[O] && (E = os(E));
      var R = os(E), L = [];
      if (o && L.push(D[U] <= 0), c && L.push(D[E] <= 0, D[R] <= 0), L.every(function(X) {
        return X;
      })) {
        x = W, y = !1;
        break;
      }
      S.set(W, L);
    }
    if (y)
      for (var I = _ ? 3 : 1, F = function(H) {
        var Y = b.find(function(K) {
          var q = S.get(K);
          if (q)
            return q.slice(0, H).every(function(G) {
              return G;
            });
        });
        if (Y)
          return x = Y, "break";
      }, j = I; j > 0; j--) {
        var V = F(j);
        if (V === "break")
          break;
      }
    t.placement !== x && (t.modifiersData[r]._skip = !0, t.placement = x, t.reset = !0);
  }
}
const $h = {
  name: "flip",
  enabled: !0,
  phase: "main",
  fn: j0,
  requiresIfExists: ["offset"],
  data: {
    _skip: !1
  }
};
function F0(e) {
  return e.button === 2;
}
var en;
class z0 extends Ga {
  constructor() {
    super(...arguments);
    P(this, en, void 0);
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
    super.componentWillUnmount(), (n = w(this, en)) == null || n.destroy();
  }
  _getPopperOptions() {
    return {
      modifiers: [Al, $h],
      placement: "right-start"
    };
  }
  _getPopperElement() {
    var n;
    return (n = this.ref.current) == null ? void 0 : n.parentElement;
  }
  _createPopper() {
    const n = this._getPopperOptions();
    return w(this, en) ? w(this, en).setOptions(n) : this.ref.current && B(this, en, wh(this._getPopperElement(), this.ref.current, n)), w(this, en);
  }
  afterRender(n) {
    super.afterRender(n), this.props.controlledMenu && this._createPopper();
  }
  renderToggleIcon() {
    return /* @__PURE__ */ gc("span", {
      class: "contextmenu-toggle-icon caret-right"
    });
  }
}
en = new WeakMap();
var tn, qe, or, li;
class Re extends Xe {
  constructor() {
    super(...arguments);
    P(this, tn, void 0);
    P(this, qe, void 0);
    P(this, or, void 0);
    P(this, li, void 0);
  }
  get isShown() {
    var n;
    return (n = w(this, tn)) == null ? void 0 : n.classList.contains(this.constructor.CLASS_SHOW);
  }
  get menu() {
    return w(this, tn) || this._ensureMenu();
  }
  get popper() {
    return w(this, qe) ? w(this, qe) : this._createPopper();
  }
  get trigger() {
    return w(this, li) || this.element;
  }
  get isDynamic() {
    return this.options.items || this.options.menu;
  }
  init() {
    const { element: n } = this;
    n !== document.body && !n.hasAttribute("data-toggle") && n.setAttribute("data-toggle", "contextmenu");
  }
  show(n) {
    return B(this, li, n), this.emit("show", { menu: this, trigger: this.trigger }).defaultPrevented || this.isDynamic && !this._renderMenu() ? !1 : (this.menu.classList.add(this.constructor.CLASS_SHOW), this._createPopper().update(), this.emit("shown", this), !0);
  }
  hide() {
    var r, s;
    return this.emit("hide", this).defaultPrevented ? !1 : ((r = w(this, qe)) == null || r.destroy(), B(this, qe, void 0), (s = w(this, tn)) == null || s.classList.remove(this.constructor.CLASS_SHOW), this.emit("hidden", this), !0);
  }
  toggle(n) {
    return this.isShown ? this.hide() : this.show(n);
  }
  destroy() {
    var n, r;
    (n = w(this, qe)) == null || n.destroy(), super.destroy(), (r = w(this, tn)) == null || r.remove();
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
    return B(this, tn, s), s;
  }
  _getPopperOptions() {
    const { flip: n, preventOverflow: r, modifiers: s = [] } = this.options;
    return {
      modifiers: [
        r ? typeof r == "object" ? { ...Al, options: r } : Al : null,
        n ? $h : null,
        ...s
      ].filter(Boolean),
      placement: this.options.placement,
      strategy: this.options.strategy
    };
  }
  _createPopper() {
    const n = this._getPopperOptions();
    return w(this, qe) ? w(this, qe).setOptions(n) : B(this, qe, wh(this._getPopperElement(), this.menu, n)), w(this, qe);
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
    return !n || this.emit("updateMenu", { menu: n, trigger: this.trigger, contextmenu: this }).defaultPrevented ? !1 : (zb(gc(z0, n), this.menu), !0);
  }
  _getPopperElement() {
    return w(this, or) || B(this, or, {
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
    }), w(this, or);
  }
  static clear(n) {
    var f, p;
    n instanceof Event && (n = { event: n });
    const { event: r, exclude: s, ignoreSelector: o = ".not-hide-menu" } = n || {};
    if (r && o && ((p = (f = r.target).closest) == null ? void 0 : p.call(f, o)) || r && F0(r))
      return;
    const a = this.getAll().entries(), c = new Set(s || []);
    for (const [i, d] of a)
      c.has(i) || d.hide();
  }
  static show(n) {
    var a;
    const { event: r, ...s } = n, o = this.ensure(document.body);
    return Object.keys(s).length && o.setOptions(s), o.show(r), (a = r == null ? void 0 : r.stopPropagation) == null || a.call(r), o;
  }
  static hide() {
    const n = this.get(document.body);
    return n == null || n.hide(), n;
  }
}
tn = new WeakMap(), qe = new WeakMap(), or = new WeakMap(), li = new WeakMap(), N(Re, "NAME", "contextmenu"), N(Re, "EVENTS", !0), N(Re, "DEFAULT", {
  placement: "bottom-start",
  strategy: "fixed",
  flip: !0,
  preventOverflow: !0
}), N(Re, "MENU_CLASS", "contextmenu"), N(Re, "CLASS_SHOW", "show"), N(Re, "MENU_SELECTOR", '[data-toggle="contextmenu"]:not(.disabled):not(:disabled)');
document.addEventListener("contextmenu", (e) => {
  const t = e.target;
  if (t.closest(`.${Re.MENU_CLASS}`))
    return;
  const n = t.closest(Re.MENU_SELECTOR);
  n && (Re.ensure(n).show(e), e.preventDefault());
});
document.addEventListener("click", Re.clear.bind(Re));
var ir, sr, ar, pa, kh;
const Jc = class extends Re {
  constructor() {
    super(...arguments);
    P(this, pa);
    P(this, ir, !1);
    P(this, sr, 0);
    N(this, "hideLater", () => {
      w(this, ar).call(this), B(this, sr, window.setTimeout(this.hide.bind(this), 100));
    });
    P(this, ar, () => {
      clearTimeout(w(this, sr)), B(this, sr, 0);
    });
  }
  get isHover() {
    return this.options.trigger === "hover";
  }
  get elementShowClass() {
    return `with-${this.constructor.NAME}-show`;
  }
  show(n, r) {
    (r == null ? void 0 : r.clearOthers) !== !1 && Jc.clear({ event: r == null ? void 0 : r.event, exclude: [this.element] });
    const s = super.show(n);
    return s && (!w(this, ir) && this.isHover && Q(this, pa, kh).call(this), this.element.classList.add(this.elementShowClass)), s;
  }
  hide() {
    const n = super.hide();
    return n && this.element.classList.remove(this.elementShowClass), n;
  }
  toggle(n, r) {
    return this.isShown ? this.hide() : this.show(n, { event: n, ...r });
  }
  destroy() {
    w(this, ir) && (this.element.removeEventListener("mouseleave", this.hideLater), this.menu.removeEventListener("mouseenter", w(this, ar)), this.menu.removeEventListener("mouseleave", this.hideLater)), super.destroy();
  }
  _getArrowSize() {
    const { arrow: n } = this.options;
    return n ? typeof n == "number" ? n : 5 : 0;
  }
  _getPopperOptions() {
    var s;
    const n = super._getPopperOptions(), r = this._getArrowSize();
    return r && n.modifiers.push({ ...Rb, options: {
      padding: r,
      element: ".arrow"
    } }, {
      ...Ib,
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
let De = Jc;
ir = new WeakMap(), sr = new WeakMap(), ar = new WeakMap(), pa = new WeakSet(), kh = function() {
  const { menu: n } = this;
  n.addEventListener("mouseenter", w(this, ar)), n.addEventListener("mouseleave", this.hideLater), this.element.addEventListener("mouseleave", this.hideLater), B(this, ir, !0);
}, N(De, "NAME", "dropdown"), N(De, "MENU_CLASS", "dropdown-menu"), N(De, "MENU_SELECTOR", '[data-toggle="dropdown"]:not(.disabled):not(:disabled)'), N(De, "DEFAULT", {
  ...Re.DEFAULT,
  strategy: "absolute",
  trigger: "click"
});
document.addEventListener("click", function(e) {
  const n = e.target.closest(De.MENU_SELECTOR);
  if (n) {
    const r = De.ensure(n);
    r.options.trigger === "click" && r.toggle();
  } else
    De.clear({ event: e });
});
document.addEventListener("mouseover", function(e) {
  const t = e.target, n = typeof t.closest == "function" ? t.closest(De.MENU_SELECTOR) : null;
  if (!n)
    return;
  const r = De.ensure(n);
  r.isHover && r.show();
});
const V0 = (e) => {
  const t = document.getElementsByClassName("with-dropdown-show")[0];
  if (!t)
    return;
  const n = typeof t.closest == "function" ? t.closest(De.MENU_SELECTOR) : null;
  !n || !e.target.contains(n) || De.clear({ event: e });
};
window.addEventListener("scroll", V0, !0);
var ci, lr;
class Y0 extends ho {
  constructor(n) {
    var r;
    super(n);
    P(this, ci, void 0);
    P(this, lr, lb());
    this.state = { placement: ((r = n.dropdown) == null ? void 0 : r.placement) || "", show: !1 };
  }
  get ref() {
    return w(this, lr);
  }
  get triggerElement() {
    return w(this, lr).current;
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
    }), B(this, ci, De.ensure(this.triggerElement, {
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
    (n = w(this, ci)) == null || n.destroy();
  }
  beforeRender() {
    const { className: n, children: r, dropdown: s, ...o } = this.props;
    return {
      className: z("dropdown", n),
      children: typeof r == "function" ? r(this.state) : r,
      ...o,
      "data-toggle": "dropdown",
      "data-dropdown-placement": this.state.placement,
      ref: w(this, lr)
    };
  }
  render() {
    const { children: n, ...r } = this.beforeRender();
    return /* @__PURE__ */ Yd("div", {
      ...r
    }, n);
  }
}
ci = new WeakMap(), lr = new WeakMap();
class q0 extends Y0 {
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
    return r.caret = s, /* @__PURE__ */ Yd(Cn, {
      ...r
    });
  }
}
function xh({
  key: e,
  type: t,
  btnType: n,
  ...r
}) {
  return /* @__PURE__ */ nl(q0, {
    type: n,
    ...r
  });
}
function G0({
  key: e,
  type: t,
  btnType: n,
  ...r
}) {
  return /* @__PURE__ */ nl(Ql, {
    type: n,
    ...r
  });
}
class Vt extends zt {
  beforeRender() {
    const { gap: t, btnProps: n, wrap: r, ...s } = super.beforeRender();
    return s.className = z(s.className, r ? "flex-wrap" : "", typeof t == "number" ? `gap-${t}` : ""), typeof t == "string" && (s.style ? s.style.gap = t : s.style = { gap: t }), s;
  }
  isBtnItem(t) {
    return t === "item" || t === "dropdown";
  }
  renderTypedItem(t, n, r) {
    const s = this.isBtnItem(r.type) ? { btnType: "ghost", ...this.props.btnProps } : {}, o = {
      ...n,
      ...s,
      ...r,
      className: z(`${this.name}-${r.type}`, n.className, s.className, r.className),
      style: Object.assign({}, n.style, s.style, r.style)
    };
    return /* @__PURE__ */ nl(t, {
      ...o
    });
  }
}
N(Vt, "ItemComponents", {
  item: sb,
  dropdown: xh,
  "btn-group": G0
}), N(Vt, "ROOT_TAG", "nav"), N(Vt, "NAME", "toolbar"), N(Vt, "defaultProps", {
  btnProps: {
    btnType: "ghost"
  }
});
class Sh extends Kn {
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
    return qr(t) ? t : t === !1 || !n ? null : /* @__PURE__ */ de("div", {
      className: "modal-header"
    }, /* @__PURE__ */ de("div", {
      className: "modal-title"
    }, n));
  }
  renderActions() {
    const {
      actions: t,
      closeBtn: n
    } = this.props;
    return !n && !t ? null : qr(t) ? t : /* @__PURE__ */ de("div", {
      className: "modal-actions"
    }, t ? /* @__PURE__ */ de(Vt, {
      ...t
    }) : null, n ? /* @__PURE__ */ de("button", {
      type: "button",
      class: "btn square ghost",
      "data-dismiss": "modal"
    }, /* @__PURE__ */ de("span", {
      class: "close"
    })) : null);
  }
  renderBody() {
    const {
      body: t
    } = this.props;
    return t ? qr(t) ? t : /* @__PURE__ */ de("div", {
      className: "modal-body"
    }, t) : null;
  }
  renderFooter() {
    const {
      footer: t,
      footerActions: n
    } = this.props;
    return qr(t) ? t : t === !1 || !n ? null : /* @__PURE__ */ de("div", {
      className: "modal-footer"
    }, n ? /* @__PURE__ */ de(Vt, {
      ...n
    }) : null);
  }
  render() {
    const {
      className: t,
      style: n,
      children: r
    } = this.props;
    return /* @__PURE__ */ de("div", {
      className: z("modal-dialog", t),
      style: n
    }, /* @__PURE__ */ de("div", {
      className: "modal-content"
    }, this.renderHeader(), this.renderActions(), this.renderBody(), r, this.renderFooter()));
  }
}
N(Sh, "defaultProps", { closeBtn: !0 });
var fi, cr, ui;
class X0 extends Kn {
  constructor() {
    super(...arguments);
    P(this, fi, Jy());
    P(this, cr, void 0);
    N(this, "state", {});
    P(this, ui, () => {
      var s, o;
      const n = (o = (s = w(this, fi).current) == null ? void 0 : s.contentWindow) == null ? void 0 : o.document;
      if (!n)
        return;
      let r = w(this, cr);
      r == null || r.disconnect(), r = new ResizeObserver(() => {
        const a = n.body, c = n.documentElement, f = Math.ceil(Math.max(a.scrollHeight, a.offsetHeight, c.offsetHeight));
        this.setState({ height: f });
      }), r.observe(n.body), r.observe(n.documentElement), B(this, cr, r);
    });
  }
  componentDidMount() {
    w(this, ui).call(this);
  }
  componentWillUnmount() {
    var n;
    (n = w(this, cr)) == null || n.disconnect();
  }
  render() {
    const { url: n } = this.props;
    return /* @__PURE__ */ de("iframe", {
      className: "modal-iframe",
      style: this.state,
      src: n,
      ref: w(this, fi),
      onLoad: w(this, ui)
    });
  }
}
fi = new WeakMap(), cr = new WeakMap(), ui = new WeakMap();
function K0(e, t) {
  const { custom: n, title: r, content: s } = t;
  return {
    body: s,
    title: r,
    ...typeof n == "function" ? n() : n
  };
}
async function Z0(e, t) {
  const { dataType: n, url: r, request: s, custom: o, title: a } = t, f = await (await fetch(r, s)).text();
  if (n !== "html")
    try {
      const p = JSON.parse(f);
      return {
        title: a,
        ...o,
        ...p
      };
    } catch {
    }
  return {
    title: a,
    ...o,
    body: n === "html" ? /* @__PURE__ */ de("div", {
      className: "modal-body",
      dangerouslySetInnerHTML: { __html: f }
    }) : f
  };
}
async function J0(e, t) {
  const { url: n, custom: r, title: s } = t;
  return {
    title: s,
    ...r,
    body: /* @__PURE__ */ de(X0, {
      url: n
    })
  };
}
const Q0 = {
  custom: K0,
  ajax: Z0,
  iframe: J0
};
var _i, pi, xt, fr, is, da, Ch, di, Ml;
const Do = class extends Pe {
  constructor() {
    super(...arguments);
    P(this, fr);
    P(this, da);
    P(this, di);
    P(this, _i, void 0);
    P(this, pi, void 0);
    P(this, xt, void 0);
  }
  get id() {
    return w(this, pi);
  }
  get loading() {
    return this.modalElement.classList.contains(Do.LOADING_CLASS);
  }
  get modalElement() {
    let n = w(this, _i);
    if (!n) {
      const { id: r } = this;
      n = this.element.querySelector(`#${r}`), n || (n = document.createElement("div"), Rs(n, {
        id: r,
        style: this.options.style
      }), Ad(n, ["modal modal-async", this.options.className]), this.element.appendChild(n)), B(this, _i, n);
    }
    return n;
  }
  afterInit() {
    super.afterInit(), B(this, pi, this.options.id || `modal-${rb()}`);
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
    w(this, xt) && clearTimeout(w(this, xt));
    const { modalElement: n, options: r } = this, { type: s, loadTimeout: o } = r, a = Q0[s];
    if (!a)
      return console.warn(`Modal: Cannot build modal with type "${s}"`), !1;
    n.classList.add(Do.LOADING_CLASS), await Q(this, da, Ch).call(this), o && B(this, xt, window.setTimeout(() => {
      B(this, xt, 0), Q(this, di, Ml).call(this, this.options.timeoutTip);
    }, o));
    const c = await a(n, r);
    return c === !1 ? await Q(this, di, Ml).call(this, this.options.failedTip) : c && typeof c == "object" && await Q(this, fr, is).call(this, c), w(this, xt) && (clearTimeout(w(this, xt)), B(this, xt, 0)), n.classList.remove(Do.LOADING_CLASS), !0;
  }
};
let Gr = Do;
_i = new WeakMap(), pi = new WeakMap(), xt = new WeakMap(), fr = new WeakSet(), is = function(n) {
  return new Promise((r) => {
    const { afterRender: s, ...o } = n;
    n = {
      afterRender: (a) => {
        this.layout(), s == null || s(a), r();
      },
      ...o
    }, nb(
      /* @__PURE__ */ de(Sh, {
        ...n
      }),
      this.modalElement
    );
  });
}, da = new WeakSet(), Ch = function() {
  const { loadingText: n } = this.options;
  return Q(this, fr, is).call(this, {
    body: /* @__PURE__ */ de("div", {
      className: "modal-loading-indicator"
    }, /* @__PURE__ */ de("span", {
      className: "spinner"
    }), n ? /* @__PURE__ */ de("span", {
      className: "modal-loading-text"
    }, n) : null)
  });
}, di = new WeakSet(), Ml = function(n) {
  if (!!n)
    return Q(this, fr, is).call(this, {
      body: /* @__PURE__ */ de("div", {
        className: "modal-load-failed"
      }, n)
    });
}, N(Gr, "LOADING_CLASS", "loading"), N(Gr, "DEFAULT", {
  ...Pe.DEFAULT,
  loadTimeout: 1e4
});
var nn, ha, Eh, va, Oh, ma, Ah;
class go extends Xe {
  constructor() {
    super(...arguments);
    P(this, ha);
    P(this, va);
    P(this, ma);
    P(this, nn, void 0);
  }
  get modal() {
    return w(this, nn);
  }
  get container() {
    const { container: n } = this.options;
    return typeof n == "string" ? document.querySelector(n) : n instanceof HTMLElement ? n : document.body;
  }
  show() {
    return Q(this, va, Oh).call(this).show();
  }
  hide() {
    var n;
    (n = w(this, nn)) == null || n.hide();
  }
}
nn = new WeakMap(), ha = new WeakSet(), Eh = function() {
  const {
    container: n,
    ...r
  } = this.options, s = r, o = this.element.getAttribute("href") || "";
  return s.type || (s.target || o[0] === "#" ? s.type = "static" : s.type = s.type || (s.url ? "iframe" : "custom")), !s.url && (s.type === "iframe" || s.type === "ajax") && o[0] !== "#" && (s.url = o), s;
}, va = new WeakSet(), Oh = function() {
  const n = Q(this, ha, Eh).call(this);
  let r = w(this, nn);
  return r ? r.setOptions(n) : n.type === "static" ? (r = new Pe(Q(this, ma, Ah).call(this), n), B(this, nn, r)) : (r = new Gr(this.container, n), B(this, nn, r)), r;
}, ma = new WeakSet(), Ah = function() {
  let n = this.options.target;
  if (!n) {
    const { element: r } = this;
    if (r.tagName === "A") {
      const s = r.getAttribute("href");
      s != null && s.startsWith("#") && (n = s);
    }
  }
  return this.container.querySelector(n || ".modal");
}, N(go, "NAME", "ModalTrigger"), N(go, "EVENTS", !0), N(go, "TOGGLE_SELECTOR", '[data-toggle="modal"]');
window.addEventListener("click", (e) => {
  const n = e.target.closest(go.TOGGLE_SELECTOR);
  if (n) {
    const r = go.ensure(n);
    r && r.show(), console.log("> modalTrigger", r);
  }
});
class Mh extends zt {
  beforeRender() {
    const t = super.beforeRender();
    return t.className = z(t.className, t.type ? `nav-${t.type}` : "", {
      "nav-stacked": t.stacked
    }), t;
  }
}
N(Mh, "NAME", "nav");
class Tu extends Ve {
}
N(Tu, "NAME", "nav"), N(Tu, "Component", Mh);
var Th, Tl, Dh, ew = [];
function xn(e, t, n) {
  var r, s, o, a = {};
  for (o in t)
    o == "key" ? r = t[o] : o == "ref" ? s = t[o] : a[o] = t[o];
  if (arguments.length > 2 && (a.children = arguments.length > 3 ? Th.call(arguments, 2) : n), typeof e == "function" && e.defaultProps != null)
    for (o in e.defaultProps)
      a[o] === void 0 && (a[o] = e.defaultProps[o]);
  return tw(e, a, r, s, null);
}
function tw(e, t, n, r, s) {
  var o = { type: e, props: t, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: s == null ? ++Dh : s };
  return s == null && Tl.vnode != null && Tl.vnode(o), o;
}
Th = ew.slice, Tl = { __e: function(e, t, n, r) {
  for (var s, o, a; t = t.__; )
    if ((s = t.__c) && !s.__)
      try {
        if ((o = s.constructor) && o.getDerivedStateFromError != null && (s.setState(o.getDerivedStateFromError(e)), a = s.__d), s.componentDidCatch != null && (s.componentDidCatch(e, r || {}), a = s.__d), a)
          return s.__E = s;
      } catch (c) {
        e = c;
      }
  throw e;
} }, Dh = 0;
function Xo(e, t) {
  const n = e.pageTotal || Math.ceil(e.recTotal / e.recPerPage);
  return typeof t == "string" && (t === "first" ? t = 1 : t === "last" ? t = n : t === "prev" ? t = e.page - 1 : t === "next" ? t = e.page + 1 : t === "current" ? t = e.page : t = Number.parseInt(t, 10)), t = t !== void 0 ? Math.max(1, Math.min(t < 0 ? n + t : t, n)) : e.page, {
    ...e,
    pageTotal: n,
    page: t
  };
}
function nw({
  key: e,
  type: t,
  btnType: n,
  page: r,
  format: s,
  pagerInfo: o,
  linkCreator: a,
  ...c
}) {
  const f = Xo(o, r);
  return c.text === void 0 && !c.icon && s && (c.text = typeof s == "function" ? s(f) : He(s, f)), c.url === void 0 && a && (c.url = typeof a == "function" ? a(f) : He(a, f)), c.disabled === void 0 && (c.disabled = r !== void 0 && f.page === o.page), /* @__PURE__ */ xn(Cn, {
    type: n,
    ...c
  });
}
const It = 24 * 60 * 60 * 1e3, ze = (e) => e ? (e instanceof Date || (typeof e == "string" && (e = e.trim(), /^\d+$/.test(e) && (e = Number.parseInt(e, 10))), typeof e == "number" && e < 1e10 && (e *= 1e3), e = new Date(e)), e) : new Date(), Mi = (e, t = new Date()) => (e = ze(e), t = ze(t), e.getFullYear() === t.getFullYear() && e.getMonth() === t.getMonth() && e.getDate() === t.getDate()), Du = (e, t = new Date()) => ze(e).getFullYear() === ze(t).getFullYear(), rw = (e, t = new Date()) => (e = ze(e), t = ze(t), e.getFullYear() === t.getFullYear() && e.getMonth() === t.getMonth()), xx = (e, t = new Date()) => {
  e = ze(e), t = ze(t);
  const n = 1e3 * 60 * 60 * 24, r = Math.floor(e.getTime() / n), s = Math.floor(t.getTime() / n);
  return Math.floor((r + 4) / 7) === Math.floor((s + 4) / 7);
}, Sx = (e, t) => Mi(ze(t), e), Cx = (e, t) => Mi(ze(t).getTime() - It, e), Ex = (e, t) => Mi(ze(t).getTime() + It, e), Ox = (e, t) => Mi(ze(t).getTime() - 2 * It, e), Dl = (e, t = "yyyy-MM-dd hh:mm") => {
  e = ze(e);
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
}, Ax = (e, t, n) => {
  const r = {
    full: "yyyy-M-d",
    month: "M-d",
    day: "d",
    str: "{0} ~ {1}",
    ...n
  }, s = Dl(e, Du(e) ? r.month : r.full);
  if (Mi(e, t))
    return s;
  const o = Dl(t, Du(e, t) ? rw(e, t) ? r.day : r.month : r.full);
  return r.str.replace("{0}", s).replace("{1}", o);
}, Mx = (e) => {
  const t = new Date().getTime();
  switch (e) {
    case "oneWeek":
      return t - It * 7;
    case "oneMonth":
      return t - It * 31;
    case "threeMonth":
      return t - It * 31 * 3;
    case "halfYear":
      return t - It * 183;
    case "oneYear":
      return t - It * 365;
    case "twoYear":
      return t - 2 * (It * 365);
    default:
      return 0;
  }
}, Lu = (e, t, n = !0, r = Date.now()) => {
  switch (t) {
    case "year":
      return e *= 365, Lu(e, "day", n, r);
    case "quarter":
      e *= 3;
    case "month":
      return e *= 30, Lu(e, "day", n, r);
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
function ow({
  key: e,
  type: t,
  page: n,
  text: r = "",
  pagerInfo: s,
  children: o,
  ...a
}) {
  const c = Xo(s, n);
  return r = typeof r == "function" ? r(c) : He(r, c), /* @__PURE__ */ xn(tp, {
    ...a
  }, o, r);
}
function iw({
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
  const f = { ...c, square: !0 }, p = () => (f.text = "", f.icon = "icon-ellipsis-h", f.disabled = !0, /* @__PURE__ */ xn(Cn, {
    type: n,
    ...f
  })), i = (u, l) => {
    const _ = [];
    for (let g = u; g <= l; g++) {
      f.text = g, delete f.icon, f.disabled = !1;
      const h = Xo(s, g);
      a && (f.url = typeof a == "function" ? a(h) : He(a, h)), _.push(/* @__PURE__ */ xn(Cn, {
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
function sw({
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
      url: typeof n == "function" ? n(i) : He(n, i)
    };
  });
  const { text: a = "" } = o;
  return o.text = typeof a == "function" ? a(t) : He(a, t), s.menu = { ...s.menu, className: z((f = s.menu) == null ? void 0 : f.className, "pager-size-menu") }, /* @__PURE__ */ xn(xh, {
    type: "dropdown",
    dropdown: s,
    ...o
  });
}
function aw({
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
    const h = Xo(s, d);
    c && !c({ info: h, event: g }) || (g.target.href = i.url = typeof f == "function" ? f(h) : He(f, h));
  }, _ = Xo(s, t || 0);
  return i.url = typeof f == "function" ? f(_) : He(f, _), i.className = z("input-group-addon", i.className), /* @__PURE__ */ xn("div", {
    className: z("input-group", "pager-goto-group", o ? `size-${o}` : "")
  }, /* @__PURE__ */ xn("input", {
    type: "number",
    class: "form-control",
    max: s.pageTotal,
    min: "1",
    onInput: u
  }), /* @__PURE__ */ xn(Cn, {
    type: r,
    ...i,
    onClick: l
  }));
}
class ss extends Vt {
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
N(ss, "NAME", "pager"), N(ss, "defaultProps", {
  gap: 1,
  btnProps: {
    btnType: "ghost",
    size: "sm"
  }
}), N(ss, "ItemComponents", {
  ...Vt.ItemComponents,
  link: nw,
  info: ow,
  nav: iw,
  "size-menu": sw,
  goto: aw
});
class Nu extends Ve {
}
N(Nu, "NAME", "pager"), N(Nu, "Component", ss);
var Cc, we, Lh, yo, Pu, Nh = {}, Ph = [], lw = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function mn(e, t) {
  for (var n in t)
    e[n] = t[n];
  return e;
}
function Rh(e) {
  var t = e.parentNode;
  t && t.removeChild(e);
}
function ie(e, t, n) {
  var r, s, o, a = {};
  for (o in t)
    o == "key" ? r = t[o] : o == "ref" ? s = t[o] : a[o] = t[o];
  if (arguments.length > 2 && (a.children = arguments.length > 3 ? Cc.call(arguments, 2) : n), typeof e == "function" && e.defaultProps != null)
    for (o in e.defaultProps)
      a[o] === void 0 && (a[o] = e.defaultProps[o]);
  return as(e, a, r, s, null);
}
function as(e, t, n, r, s) {
  var o = { type: e, props: t, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: s == null ? ++Lh : s };
  return s == null && we.vnode != null && we.vnode(o), o;
}
function cw() {
  return { current: null };
}
function Ec(e) {
  return e.children;
}
function Sn(e, t) {
  this.props = e, this.context = t;
}
function Ko(e, t) {
  if (t == null)
    return e.__ ? Ko(e.__, e.__.__k.indexOf(e) + 1) : null;
  for (var n; t < e.__k.length; t++)
    if ((n = e.__k[t]) != null && n.__e != null)
      return n.__e;
  return typeof e.type == "function" ? Ko(e) : null;
}
function Hh(e) {
  var t, n;
  if ((e = e.__) != null && e.__c != null) {
    for (e.__e = e.__c.base = null, t = 0; t < e.__k.length; t++)
      if ((n = e.__k[t]) != null && n.__e != null) {
        e.__e = e.__c.base = n.__e;
        break;
      }
    return Hh(e);
  }
}
function Ru(e) {
  (!e.__d && (e.__d = !0) && yo.push(e) && !Gs.__r++ || Pu !== we.debounceRendering) && ((Pu = we.debounceRendering) || setTimeout)(Gs);
}
function Gs() {
  for (var e; Gs.__r = yo.length; )
    e = yo.sort(function(t, n) {
      return t.__v.__b - n.__v.__b;
    }), yo = [], e.some(function(t) {
      var n, r, s, o, a, c;
      t.__d && (a = (o = (n = t).__v).__e, (c = n.__P) && (r = [], (s = mn({}, o)).__v = o.__v + 1, Bh(c, o, s, n.__n, c.ownerSVGElement !== void 0, o.__h != null ? [a] : null, r, a == null ? Ko(o) : a, o.__h), uw(r, o), o.__e != a && Hh(o)));
    });
}
function Wh(e, t, n, r, s, o, a, c, f, p) {
  var i, d, u, l, _, g, h, v = r && r.__k || Ph, m = v.length;
  for (n.__k = [], i = 0; i < t.length; i++)
    if ((l = n.__k[i] = (l = t[i]) == null || typeof l == "boolean" ? null : typeof l == "string" || typeof l == "number" || typeof l == "bigint" ? as(null, l, null, null, l) : Array.isArray(l) ? as(Ec, { children: l }, null, null, null) : l.__b > 0 ? as(l.type, l.props, l.key, l.ref ? l.ref : null, l.__v) : l) != null) {
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
      Bh(e, l, u = u || Nh, s, o, a, c, f, p), _ = l.__e, (d = l.ref) && u.ref != d && (h || (h = []), u.ref && h.push(u.ref, null, l), h.push(d, l.__c || _, l)), _ != null ? (g == null && (g = _), typeof l.type == "function" && l.__k === u.__k ? l.__d = f = Ih(l, f, e) : f = Uh(e, l, u, v, _, f), typeof n.type == "function" && (n.__d = f)) : f && u.__e == f && f.parentNode != e && (f = Ko(u));
    }
  for (n.__e = g, i = m; i--; )
    v[i] != null && Fh(v[i], v[i]);
  if (h)
    for (i = 0; i < h.length; i++)
      jh(h[i], h[++i], h[++i]);
}
function Ih(e, t, n) {
  for (var r, s = e.__k, o = 0; s && o < s.length; o++)
    (r = s[o]) && (r.__ = e, t = typeof r.type == "function" ? Ih(r, t, n) : Uh(n, r, r, s, r.__e, t));
  return t;
}
function Uh(e, t, n, r, s, o) {
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
function fw(e, t, n, r, s) {
  var o;
  for (o in n)
    o === "children" || o === "key" || o in t || Xs(e, o, null, n[o], r);
  for (o in t)
    s && typeof t[o] != "function" || o === "children" || o === "key" || o === "value" || o === "checked" || n[o] === t[o] || Xs(e, o, t[o], n[o], r);
}
function Hu(e, t, n) {
  t[0] === "-" ? e.setProperty(t, n) : e[t] = n == null ? "" : typeof n != "number" || lw.test(t) ? n : n + "px";
}
function Xs(e, t, n, r, s) {
  var o;
  e:
    if (t === "style")
      if (typeof n == "string")
        e.style.cssText = n;
      else {
        if (typeof r == "string" && (e.style.cssText = r = ""), r)
          for (t in r)
            n && t in n || Hu(e.style, t, "");
        if (n)
          for (t in n)
            r && n[t] === r[t] || Hu(e.style, t, n[t]);
      }
    else if (t[0] === "o" && t[1] === "n")
      o = t !== (t = t.replace(/Capture$/, "")), t = t.toLowerCase() in e ? t.toLowerCase().slice(2) : t.slice(2), e.l || (e.l = {}), e.l[t + o] = n, n ? r || e.addEventListener(t, o ? Iu : Wu, o) : e.removeEventListener(t, o ? Iu : Wu, o);
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
function Wu(e) {
  this.l[e.type + !1](we.event ? we.event(e) : e);
}
function Iu(e) {
  this.l[e.type + !0](we.event ? we.event(e) : e);
}
function Bh(e, t, n, r, s, o, a, c, f) {
  var p, i, d, u, l, _, g, h, v, m, k, b, C, $, S, y = t.type;
  if (t.constructor !== void 0)
    return null;
  n.__h != null && (f = n.__h, c = t.__e = n.__e, t.__h = null, o = [c]), (p = we.__b) && p(t);
  try {
    e:
      if (typeof y == "function") {
        if (h = t.props, v = (p = y.contextType) && r[p.__c], m = p ? v ? v.props.value : p.__ : r, n.__c ? g = (i = t.__c = n.__c).__ = i.__E : ("prototype" in y && y.prototype.render ? t.__c = i = new y(h, m) : (t.__c = i = new Sn(h, m), i.constructor = y, i.render = pw), v && v.sub(i), i.props = h, i.state || (i.state = {}), i.context = m, i.__n = r, d = i.__d = !0, i.__h = [], i._sb = []), i.__s == null && (i.__s = i.state), y.getDerivedStateFromProps != null && (i.__s == i.state && (i.__s = mn({}, i.__s)), mn(i.__s, y.getDerivedStateFromProps(h, i.__s))), u = i.props, l = i.state, d)
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
        if (i.context = m, i.props = h, i.__v = t, i.__P = e, b = we.__r, C = 0, "prototype" in y && y.prototype.render) {
          for (i.state = i.__s, i.__d = !1, b && b(t), p = i.render(i.props, i.state, i.context), $ = 0; $ < i._sb.length; $++)
            i.__h.push(i._sb[$]);
          i._sb = [];
        } else
          do
            i.__d = !1, b && b(t), p = i.render(i.props, i.state, i.context), i.state = i.__s;
          while (i.__d && ++C < 25);
        i.state = i.__s, i.getChildContext != null && (r = mn(mn({}, r), i.getChildContext())), d || i.getSnapshotBeforeUpdate == null || (_ = i.getSnapshotBeforeUpdate(u, l)), S = p != null && p.type === Ec && p.key == null ? p.props.children : p, Wh(e, Array.isArray(S) ? S : [S], t, n, r, s, o, a, c, f), i.base = t.__e, t.__h = null, i.__h.length && a.push(i), g && (i.__E = i.__ = null), i.__e = !1;
      } else
        o == null && t.__v === n.__v ? (t.__k = n.__k, t.__e = n.__e) : t.__e = _w(n.__e, t, n, r, s, o, a, f);
    (p = we.diffed) && p(t);
  } catch (x) {
    t.__v = null, (f || o != null) && (t.__e = c, t.__h = !!f, o[o.indexOf(c)] = null), we.__e(x, t, n);
  }
}
function uw(e, t) {
  we.__c && we.__c(t, e), e.some(function(n) {
    try {
      e = n.__h, n.__h = [], e.some(function(r) {
        r.call(n);
      });
    } catch (r) {
      we.__e(r, n.__v);
    }
  });
}
function _w(e, t, n, r, s, o, a, c) {
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
    if (o = o && Cc.call(e.childNodes), p = (d = n.props || Nh).dangerouslySetInnerHTML, i = u.dangerouslySetInnerHTML, !c) {
      if (o != null)
        for (d = {}, _ = 0; _ < e.attributes.length; _++)
          d[e.attributes[_].name] = e.attributes[_].value;
      (i || p) && (i && (p && i.__html == p.__html || i.__html === e.innerHTML) || (e.innerHTML = i && i.__html || ""));
    }
    if (fw(e, u, d, s, c), i)
      t.__k = [];
    else if (_ = t.props.children, Wh(e, Array.isArray(_) ? _ : [_], t, n, r, s && l !== "foreignObject", o, a, o ? o[0] : n.__k && Ko(n, 0), c), o != null)
      for (_ = o.length; _--; )
        o[_] != null && Rh(o[_]);
    c || ("value" in u && (_ = u.value) !== void 0 && (_ !== e.value || l === "progress" && !_ || l === "option" && _ !== d.value) && Xs(e, "value", _, d.value, !1), "checked" in u && (_ = u.checked) !== void 0 && _ !== e.checked && Xs(e, "checked", _, d.checked, !1));
  }
  return e;
}
function jh(e, t, n) {
  try {
    typeof e == "function" ? e(t) : e.current = t;
  } catch (r) {
    we.__e(r, n);
  }
}
function Fh(e, t, n) {
  var r, s;
  if (we.unmount && we.unmount(e), (r = e.ref) && (r.current && r.current !== e.__e || jh(r, null, t)), (r = e.__c) != null) {
    if (r.componentWillUnmount)
      try {
        r.componentWillUnmount();
      } catch (o) {
        we.__e(o, t);
      }
    r.base = r.__P = null, e.__c = void 0;
  }
  if (r = e.__k)
    for (s = 0; s < r.length; s++)
      r[s] && Fh(r[s], t, n || typeof e.type != "function");
  n || e.__e == null || Rh(e.__e), e.__ = e.__e = e.__d = void 0;
}
function pw(e, t, n) {
  return this.constructor(e, n);
}
Cc = Ph.slice, we = { __e: function(e, t, n, r) {
  for (var s, o, a; t = t.__; )
    if ((s = t.__c) && !s.__)
      try {
        if ((o = s.constructor) && o.getDerivedStateFromError != null && (s.setState(o.getDerivedStateFromError(e)), a = s.__d), s.componentDidCatch != null && (s.componentDidCatch(e, r || {}), a = s.__d), a)
          return s.__E = s;
      } catch (c) {
        e = c;
      }
  throw e;
} }, Lh = 0, Sn.prototype.setState = function(e, t) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = mn({}, this.state), typeof e == "function" && (e = e(mn({}, n), this.props)), e && mn(n, e), e != null && this.__v && (t && this._sb.push(t), Ru(this));
}, Sn.prototype.forceUpdate = function(e) {
  this.__v && (this.__e = !0, e && this.__h.push(e), Ru(this));
}, Sn.prototype.render = Ec, yo = [], Gs.__r = 0;
let dw = (e = 21) => crypto.getRandomValues(new Uint8Array(e)).reduce((t, n) => (n &= 63, n < 36 ? t += n.toString(36) : n < 62 ? t += (n - 26).toString(36).toUpperCase() : n > 62 ? t += "-" : t += "_", t), "");
var ga;
class hw extends Sn {
  constructor() {
    super(...arguments);
    P(this, ga, (n) => {
      var a;
      const { onDeselect: r, selections: s } = this.props, o = (a = n.target.closest(".picker-deselect-btn")) == null ? void 0 : a.dataset.idx;
      o && r && (s == null ? void 0 : s.length) && (n.stopPropagation(), r([s[+o]], n));
    });
  }
  render() {
    const {
      className: n,
      style: r,
      disabled: s,
      placeholder: o,
      focused: a,
      selections: c = [],
      onClick: f,
      children: p
    } = this.props;
    let i;
    return c.length ? i = /* @__PURE__ */ ie("div", {
      className: "picker-multi-selections"
    }, c.map((d, u) => {
      var l;
      return /* @__PURE__ */ ie("div", {
        className: "picker-multi-selection"
      }, (l = d.text) != null ? l : d.value, /* @__PURE__ */ ie("div", {
        className: "picker-deselect-btn btn",
        onClick: w(this, ga),
        "data-idx": u
      }, /* @__PURE__ */ ie("span", {
        className: "close"
      })));
    })) : i = /* @__PURE__ */ ie("span", {
      className: "picker-select-placeholder"
    }, o), /* @__PURE__ */ ie("div", {
      className: z("picker-select picker-select-multi form-control", n, { disabled: s, focused: a }),
      style: r,
      onClick: f
    }, i, p, /* @__PURE__ */ ie("span", {
      class: "caret"
    }));
  }
}
ga = new WeakMap();
var ya;
class vw extends Sn {
  constructor() {
    super(...arguments);
    P(this, ya, (n) => {
      const { onDeselect: r, selections: s } = this.props;
      r && (s == null ? void 0 : s.length) && (n.stopPropagation(), r(s, n));
    });
  }
  render() {
    var _;
    const {
      className: n,
      style: r,
      disabled: s,
      placeholder: o,
      focused: a,
      selections: c = [],
      onDeselect: f,
      onClick: p,
      children: i
    } = this.props, [d] = c, u = d ? /* @__PURE__ */ ie("span", {
      className: "picker-single-selection"
    }, (_ = d.text) != null ? _ : d.value) : /* @__PURE__ */ ie("span", {
      className: "picker-select-placeholder"
    }, o), l = d && f ? /* @__PURE__ */ ie("button", {
      type: "button",
      className: "btn picker-deselect-btn",
      onClick: w(this, ya)
    }, /* @__PURE__ */ ie("span", {
      className: "close"
    })) : null;
    return /* @__PURE__ */ ie("div", {
      className: z("picker-select picker-select-single form-control", n, { disabled: s, focused: a }),
      style: r,
      onClick: p
    }, u, i, l, /* @__PURE__ */ ie("span", {
      class: "caret"
    }));
  }
}
ya = new WeakMap();
var ba, zh, hi, wa, vi, $a;
class mw extends Sn {
  constructor() {
    super(...arguments);
    P(this, ba);
    N(this, "state", { keys: "", shown: !1 });
    P(this, hi, (n) => {
      var r;
      (r = n.target) != null && r.closest(`#picker-menu-${this.props.id}`) || this.hide();
    });
    P(this, wa, ({ item: n }) => {
      const r = this.props.items.find((s) => s.value === n.key);
      r && this.props.onSelectItem(r);
    });
    P(this, vi, (n) => {
      this.setState({ keys: n.target.value });
    });
    P(this, $a, () => {
      this.setState({ keys: "" });
    });
  }
  componentDidMount() {
    document.addEventListener("click", w(this, hi)), this.show();
  }
  componentWillUnmount() {
    document.removeEventListener("click", w(this, hi));
  }
  show() {
    this.state.shown || this.setState({ shown: !0 });
  }
  hide() {
    !this.state.shown || this.setState({ shown: !1 }, () => {
      window.setTimeout(() => {
        var n, r;
        (r = (n = this.props).onRequestHide) == null || r.call(n);
      }, 200);
    });
  }
  render() {
    const {
      id: n,
      search: r,
      className: s,
      style: o = {},
      maxHeight: a,
      maxWidth: c,
      width: f,
      menu: p,
      searchHint: i
    } = this.props, { shown: d, keys: u } = this.state, l = u.trim().length;
    return /* @__PURE__ */ ie("div", {
      className: z("picker-menu", s, { shown: d, "has-search": l }),
      id: `picker-menu-${n}`,
      style: { maxHeight: a, maxWidth: c, width: f, ...o }
    }, r ? /* @__PURE__ */ ie("div", {
      className: "picker-menu-search"
    }, /* @__PURE__ */ ie("input", {
      className: "form-control picker-menu-search-input",
      type: "text",
      placeholder: i,
      value: u,
      onChange: w(this, vi),
      onInput: w(this, vi)
    }), l ? /* @__PURE__ */ ie("button", {
      type: "button",
      className: "btn picker-menu-search-clear",
      onClick: w(this, $a)
    }, /* @__PURE__ */ ie("span", {
      className: "close"
    })) : /* @__PURE__ */ ie("span", {
      className: "search-icon"
    })) : null, /* @__PURE__ */ ie(Ga, {
      className: "picker-menu-list",
      items: Q(this, ba, zh).call(this),
      onClickItem: w(this, wa),
      ...p
    }));
  }
}
ba = new WeakSet(), zh = function() {
  const { selections: n, items: r } = this.props, s = new Set(n), o = this.state.keys.toLowerCase().split(" ").filter((a) => a.length);
  return r.reduce((a, c) => {
    const {
      value: f,
      keys: p,
      text: i,
      ...d
    } = c;
    if (!o.length || o.every((u) => f.toLowerCase().includes(u) || (p == null ? void 0 : p.toLowerCase().includes(u)) || typeof i == "string" && i.toLowerCase().includes(u))) {
      let u = i != null ? i : f;
      typeof u == "string" && o.length && (u = /* @__PURE__ */ ie("span", {
        dangerouslySetInnerHTML: { __html: o.reduce((l, _) => l.replace(_, `<span class="picker-menu-item-match">${_}</span>`), u) }
      })), a.push({
        key: f,
        active: s.has(f),
        text: u,
        ...d
      });
    }
    return a;
  }, []);
}, hi = new WeakMap(), wa = new WeakMap(), vi = new WeakMap(), $a = new WeakMap();
function Uu(e) {
  const t = /* @__PURE__ */ new Set();
  return e.reduce((n, r) => (t.has(r) || (t.add(r), n.push(r)), n), []);
}
var mi, gi, yi, ur, ls, bi, Ll, ka, Yh, xa, qh, Sa, Ca, Ea, Oa, Aa, Gh;
class Vh extends Sn {
  constructor(n) {
    var r;
    super(n);
    P(this, ur);
    P(this, bi);
    P(this, ka);
    P(this, xa);
    P(this, Aa);
    P(this, mi, 0);
    P(this, gi, dw());
    P(this, yi, cw());
    P(this, Sa, (n, r) => {
      var c;
      const { valueList: s } = this, o = new Set(n.map((f) => f.value)), a = s.filter((f) => !o.has(f));
      this.setState({ value: a.length ? a.join((c = this.props.valueSplitter) != null ? c : ",") : void 0 });
    });
    P(this, Ca, (n) => {
      console.log("#handleSelectClick", n), this.setState({ open: !0 });
    });
    P(this, Ea, () => {
      this.close();
    });
    P(this, Oa, (n) => {
      this.props.multi ? this.toggleValue(n.value) : this.setState({ value: n.value }, () => {
        var r;
        (r = w(this, yi).current) == null || r.hide();
      });
    });
    this.state = {
      value: (r = Q(this, ka, Yh).call(this, n.defaultValue)) != null ? r : "",
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
    return Q(this, bi, Ll).call(this, this.state.value);
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
      const s = ++Qc(this, mi)._;
      if (await Q(this, ur, ls).call(this, { loading: !0, items: [] }), n = await n(), w(this, mi) !== s)
        return [];
    }
    const r = {};
    return Array.isArray(n) && this.state.items !== n && (r.items = n), this.state.loading && (r.loading = !1), Object.keys(r).length && await Q(this, ur, ls).call(this, r), n;
  }
  getItemList() {
    return this.state.items;
  }
  getItemMap() {
    return this.getItemList().reduce((n, r) => (n[r.value] = r, n), {});
  }
  getItemByValue(n) {
    return this.getItemList().find((r) => r.value === n);
  }
  getSelections() {
    const n = this.getItemMap();
    return this.valueList.map((r) => n[r] || { value: r });
  }
  async toggle(n) {
    if (n === void 0)
      n = !this.state.open;
    else if (n === this.state.open)
      return;
    await Q(this, ur, ls).call(this, { open: n }), n && this.loadItemList();
  }
  open() {
    return this.toggle(!0);
  }
  close() {
    return this.toggle(!1);
  }
  toggleValue(n, r) {
    var a;
    const { valueList: s } = this, o = s.indexOf(n);
    r !== !!o && (o > -1 ? s.splice(o, 1) : s.push(n), this.setState({ value: s.join((a = this.props.valueSplitter) != null ? a : ",") }));
  }
  render() {
    const {
      className: n,
      style: r,
      children: s,
      multi: o
    } = this.props, a = o ? hw : vw;
    return /* @__PURE__ */ ie("div", {
      className: z("picker", n),
      style: r,
      id: `picker-${w(this, gi)}`
    }, /* @__PURE__ */ ie(a, {
      ...Q(this, xa, qh).call(this)
    }), s, this.state.open ? /* @__PURE__ */ ie(mw, {
      ...Q(this, Aa, Gh).call(this),
      ref: w(this, yi)
    }) : null);
  }
}
mi = new WeakMap(), gi = new WeakMap(), yi = new WeakMap(), ur = new WeakSet(), ls = function(n) {
  return new Promise((r) => {
    this.setState(n, r);
  });
}, bi = new WeakSet(), Ll = function(n) {
  var r;
  return typeof n == "string" ? Uu(n.split((r = this.props.valueSplitter) != null ? r : ",")) : Array.isArray(n) ? Uu(n) : [];
}, ka = new WeakSet(), Yh = function(n) {
  var s;
  const r = Q(this, bi, Ll).call(this, n);
  return r.length ? r.join((s = this.props.valueSplitter) != null ? s : ",") : void 0;
}, xa = new WeakSet(), qh = function() {
  const { placeholder: n, disabled: r } = this.props, { open: s } = this.state;
  return {
    focused: s,
    placeholder: n,
    disabled: r,
    selections: this.getSelections(),
    onClick: w(this, Ca),
    onDeselect: w(this, Sa)
  };
}, Sa = new WeakMap(), Ca = new WeakMap(), Ea = new WeakMap(), Oa = new WeakMap(), Aa = new WeakSet(), Gh = function() {
  const { search: n, menuClass: r, menuWidth: s, menuStyle: o, menuMaxHeight: a, menuMaxWidth: c } = this.props, { items: f } = this.state;
  return {
    id: w(this, gi),
    items: f,
    selections: this.valueList,
    search: n === !0 || typeof n == "number" && n <= f.length,
    style: o,
    className: r,
    width: s,
    maxHeight: a,
    maxWidth: c,
    onRequestHide: w(this, Ea),
    onSelectItem: w(this, Oa)
  };
}, N(Vh, "defaultProps", {
  container: "body",
  valueSplitter: ",",
  search: !0,
  menuWidth: "auto",
  menuMaxHeight: 400
});
class Bu extends Ve {
}
N(Bu, "NAME", "picker"), N(Bu, "Component", Vh);
var ll, _e, Xh, bo, ju, Ks = {}, Kh = [], gw = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function gn(e, t) {
  for (var n in t)
    e[n] = t[n];
  return e;
}
function Zh(e) {
  var t = e.parentNode;
  t && t.removeChild(e);
}
function Te(e, t, n) {
  var r, s, o, a = {};
  for (o in t)
    o == "key" ? r = t[o] : o == "ref" ? s = t[o] : a[o] = t[o];
  if (arguments.length > 2 && (a.children = arguments.length > 3 ? ll.call(arguments, 2) : n), typeof e == "function" && e.defaultProps != null)
    for (o in e.defaultProps)
      a[o] === void 0 && (a[o] = e.defaultProps[o]);
  return cs(e, a, r, s, null);
}
function cs(e, t, n, r, s) {
  var o = { type: e, props: t, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: s == null ? ++Xh : s };
  return s == null && _e.vnode != null && _e.vnode(o), o;
}
function Wi() {
  return { current: null };
}
function cl(e) {
  return e.children;
}
function wo(e, t) {
  this.props = e, this.context = t;
}
function Zo(e, t) {
  if (t == null)
    return e.__ ? Zo(e.__, e.__.__k.indexOf(e) + 1) : null;
  for (var n; t < e.__k.length; t++)
    if ((n = e.__k[t]) != null && n.__e != null)
      return n.__e;
  return typeof e.type == "function" ? Zo(e) : null;
}
function Jh(e) {
  var t, n;
  if ((e = e.__) != null && e.__c != null) {
    for (e.__e = e.__c.base = null, t = 0; t < e.__k.length; t++)
      if ((n = e.__k[t]) != null && n.__e != null) {
        e.__e = e.__c.base = n.__e;
        break;
      }
    return Jh(e);
  }
}
function Fu(e) {
  (!e.__d && (e.__d = !0) && bo.push(e) && !Zs.__r++ || ju !== _e.debounceRendering) && ((ju = _e.debounceRendering) || setTimeout)(Zs);
}
function Zs() {
  for (var e; Zs.__r = bo.length; )
    e = bo.sort(function(t, n) {
      return t.__v.__b - n.__v.__b;
    }), bo = [], e.some(function(t) {
      var n, r, s, o, a, c;
      t.__d && (a = (o = (n = t).__v).__e, (c = n.__P) && (r = [], (s = gn({}, o)).__v = o.__v + 1, Oc(c, o, s, n.__n, c.ownerSVGElement !== void 0, o.__h != null ? [a] : null, r, a == null ? Zo(o) : a, o.__h), nv(r, o), o.__e != a && Jh(o)));
    });
}
function Qh(e, t, n, r, s, o, a, c, f, p) {
  var i, d, u, l, _, g, h, v = r && r.__k || Kh, m = v.length;
  for (n.__k = [], i = 0; i < t.length; i++)
    if ((l = n.__k[i] = (l = t[i]) == null || typeof l == "boolean" ? null : typeof l == "string" || typeof l == "number" || typeof l == "bigint" ? cs(null, l, null, null, l) : Array.isArray(l) ? cs(cl, { children: l }, null, null, null) : l.__b > 0 ? cs(l.type, l.props, l.key, l.ref ? l.ref : null, l.__v) : l) != null) {
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
      Oc(e, l, u = u || Ks, s, o, a, c, f, p), _ = l.__e, (d = l.ref) && u.ref != d && (h || (h = []), u.ref && h.push(u.ref, null, l), h.push(d, l.__c || _, l)), _ != null ? (g == null && (g = _), typeof l.type == "function" && l.__k === u.__k ? l.__d = f = ev(l, f, e) : f = tv(e, l, u, v, _, f), typeof n.type == "function" && (n.__d = f)) : f && u.__e == f && f.parentNode != e && (f = Zo(u));
    }
  for (n.__e = g, i = m; i--; )
    v[i] != null && ov(v[i], v[i]);
  if (h)
    for (i = 0; i < h.length; i++)
      rv(h[i], h[++i], h[++i]);
}
function ev(e, t, n) {
  for (var r, s = e.__k, o = 0; s && o < s.length; o++)
    (r = s[o]) && (r.__ = e, t = typeof r.type == "function" ? ev(r, t, n) : tv(n, r, r, s, r.__e, t));
  return t;
}
function tv(e, t, n, r, s, o) {
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
function yw(e, t, n, r, s) {
  var o;
  for (o in n)
    o === "children" || o === "key" || o in t || Js(e, o, null, n[o], r);
  for (o in t)
    s && typeof t[o] != "function" || o === "children" || o === "key" || o === "value" || o === "checked" || n[o] === t[o] || Js(e, o, t[o], n[o], r);
}
function zu(e, t, n) {
  t[0] === "-" ? e.setProperty(t, n) : e[t] = n == null ? "" : typeof n != "number" || gw.test(t) ? n : n + "px";
}
function Js(e, t, n, r, s) {
  var o;
  e:
    if (t === "style")
      if (typeof n == "string")
        e.style.cssText = n;
      else {
        if (typeof r == "string" && (e.style.cssText = r = ""), r)
          for (t in r)
            n && t in n || zu(e.style, t, "");
        if (n)
          for (t in n)
            r && n[t] === r[t] || zu(e.style, t, n[t]);
      }
    else if (t[0] === "o" && t[1] === "n")
      o = t !== (t = t.replace(/Capture$/, "")), t = t.toLowerCase() in e ? t.toLowerCase().slice(2) : t.slice(2), e.l || (e.l = {}), e.l[t + o] = n, n ? r || e.addEventListener(t, o ? Yu : Vu, o) : e.removeEventListener(t, o ? Yu : Vu, o);
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
function Vu(e) {
  this.l[e.type + !1](_e.event ? _e.event(e) : e);
}
function Yu(e) {
  this.l[e.type + !0](_e.event ? _e.event(e) : e);
}
function Oc(e, t, n, r, s, o, a, c, f) {
  var p, i, d, u, l, _, g, h, v, m, k, b, C, $, S, y = t.type;
  if (t.constructor !== void 0)
    return null;
  n.__h != null && (f = n.__h, c = t.__e = n.__e, t.__h = null, o = [c]), (p = _e.__b) && p(t);
  try {
    e:
      if (typeof y == "function") {
        if (h = t.props, v = (p = y.contextType) && r[p.__c], m = p ? v ? v.props.value : p.__ : r, n.__c ? g = (i = t.__c = n.__c).__ = i.__E : ("prototype" in y && y.prototype.render ? t.__c = i = new y(h, m) : (t.__c = i = new wo(h, m), i.constructor = y, i.render = ww), v && v.sub(i), i.props = h, i.state || (i.state = {}), i.context = m, i.__n = r, d = i.__d = !0, i.__h = [], i._sb = []), i.__s == null && (i.__s = i.state), y.getDerivedStateFromProps != null && (i.__s == i.state && (i.__s = gn({}, i.__s)), gn(i.__s, y.getDerivedStateFromProps(h, i.__s))), u = i.props, l = i.state, d)
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
        if (i.context = m, i.props = h, i.__v = t, i.__P = e, b = _e.__r, C = 0, "prototype" in y && y.prototype.render) {
          for (i.state = i.__s, i.__d = !1, b && b(t), p = i.render(i.props, i.state, i.context), $ = 0; $ < i._sb.length; $++)
            i.__h.push(i._sb[$]);
          i._sb = [];
        } else
          do
            i.__d = !1, b && b(t), p = i.render(i.props, i.state, i.context), i.state = i.__s;
          while (i.__d && ++C < 25);
        i.state = i.__s, i.getChildContext != null && (r = gn(gn({}, r), i.getChildContext())), d || i.getSnapshotBeforeUpdate == null || (_ = i.getSnapshotBeforeUpdate(u, l)), S = p != null && p.type === cl && p.key == null ? p.props.children : p, Qh(e, Array.isArray(S) ? S : [S], t, n, r, s, o, a, c, f), i.base = t.__e, t.__h = null, i.__h.length && a.push(i), g && (i.__E = i.__ = null), i.__e = !1;
      } else
        o == null && t.__v === n.__v ? (t.__k = n.__k, t.__e = n.__e) : t.__e = bw(n.__e, t, n, r, s, o, a, f);
    (p = _e.diffed) && p(t);
  } catch (x) {
    t.__v = null, (f || o != null) && (t.__e = c, t.__h = !!f, o[o.indexOf(c)] = null), _e.__e(x, t, n);
  }
}
function nv(e, t) {
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
function bw(e, t, n, r, s, o, a, c) {
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
    if (o = o && ll.call(e.childNodes), p = (d = n.props || Ks).dangerouslySetInnerHTML, i = u.dangerouslySetInnerHTML, !c) {
      if (o != null)
        for (d = {}, _ = 0; _ < e.attributes.length; _++)
          d[e.attributes[_].name] = e.attributes[_].value;
      (i || p) && (i && (p && i.__html == p.__html || i.__html === e.innerHTML) || (e.innerHTML = i && i.__html || ""));
    }
    if (yw(e, u, d, s, c), i)
      t.__k = [];
    else if (_ = t.props.children, Qh(e, Array.isArray(_) ? _ : [_], t, n, r, s && l !== "foreignObject", o, a, o ? o[0] : n.__k && Zo(n, 0), c), o != null)
      for (_ = o.length; _--; )
        o[_] != null && Zh(o[_]);
    c || ("value" in u && (_ = u.value) !== void 0 && (_ !== e.value || l === "progress" && !_ || l === "option" && _ !== d.value) && Js(e, "value", _, d.value, !1), "checked" in u && (_ = u.checked) !== void 0 && _ !== e.checked && Js(e, "checked", _, d.checked, !1));
  }
  return e;
}
function rv(e, t, n) {
  try {
    typeof e == "function" ? e(t) : e.current = t;
  } catch (r) {
    _e.__e(r, n);
  }
}
function ov(e, t, n) {
  var r, s;
  if (_e.unmount && _e.unmount(e), (r = e.ref) && (r.current && r.current !== e.__e || rv(r, null, t)), (r = e.__c) != null) {
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
      r[s] && ov(r[s], t, n || typeof e.type != "function");
  n || e.__e == null || Zh(e.__e), e.__ = e.__e = e.__d = void 0;
}
function ww(e, t, n) {
  return this.constructor(e, n);
}
function $w(e, t, n) {
  var r, s, o;
  _e.__ && _e.__(e, t), s = (r = typeof n == "function") ? null : n && n.__k || t.__k, o = [], Oc(t, e = (!r && n || t).__k = Te(cl, null, [e]), s || Ks, Ks, t.ownerSVGElement !== void 0, !r && n ? [n] : s ? null : t.firstChild ? ll.call(t.childNodes) : null, o, !r && n ? n : s ? s.__e : t.firstChild, r), nv(o, e);
}
ll = Kh.slice, _e = { __e: function(e, t, n, r) {
  for (var s, o, a; t = t.__; )
    if ((s = t.__c) && !s.__)
      try {
        if ((o = s.constructor) && o.getDerivedStateFromError != null && (s.setState(o.getDerivedStateFromError(e)), a = s.__d), s.componentDidCatch != null && (s.componentDidCatch(e, r || {}), a = s.__d), a)
          return s.__E = s;
      } catch (c) {
        e = c;
      }
  throw e;
} }, Xh = 0, wo.prototype.setState = function(e, t) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = gn({}, this.state), typeof e == "function" && (e = e(gn({}, n), this.props)), e && gn(n, e), e != null && this.__v && (t && this._sb.push(t), Fu(this));
}, wo.prototype.forceUpdate = function(e) {
  this.__v && (this.__e = !0, e && this.__h.push(e), Fu(this));
}, wo.prototype.render = cl, bo = [], Zs.__r = 0;
var iv = { exports: {} };
(function(e, t) {
  (function(n, r) {
    e.exports = r();
  })(md, function() {
    var n = 1e3, r = 6e4, s = 36e5, o = "millisecond", a = "second", c = "minute", f = "hour", p = "day", i = "week", d = "month", u = "quarter", l = "year", _ = "date", g = "Invalid Date", h = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, v = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, m = { name: "en", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), ordinal: function(T) {
      var M = ["th", "st", "nd", "rd"], O = T % 100;
      return "[" + T + (M[(O - 20) % 10] || M[O] || M[0]) + "]";
    } }, k = function(T, M, O) {
      var D = String(T);
      return !D || D.length >= M ? T : "" + Array(M + 1 - D.length).join(O) + T;
    }, b = { s: k, z: function(T) {
      var M = -T.utcOffset(), O = Math.abs(M), D = Math.floor(O / 60), E = O % 60;
      return (M <= 0 ? "+" : "-") + k(D, 2, "0") + ":" + k(E, 2, "0");
    }, m: function T(M, O) {
      if (M.date() < O.date())
        return -T(O, M);
      var D = 12 * (O.year() - M.year()) + (O.month() - M.month()), E = M.clone().add(D, d), R = O - E < 0, L = M.clone().add(D + (R ? -1 : 1), d);
      return +(-(D + (O - E) / (R ? E - L : L - E)) || 0);
    }, a: function(T) {
      return T < 0 ? Math.ceil(T) || 0 : Math.floor(T);
    }, p: function(T) {
      return { M: d, y: l, w: i, d: p, D: _, h: f, m: c, s: a, ms: o, Q: u }[T] || String(T || "").toLowerCase().replace(/s$/, "");
    }, u: function(T) {
      return T === void 0;
    } }, C = "en", $ = {};
    $[C] = m;
    var S = function(T) {
      return T instanceof W;
    }, y = function T(M, O, D) {
      var E;
      if (!M)
        return C;
      if (typeof M == "string") {
        var R = M.toLowerCase();
        $[R] && (E = R), O && ($[R] = O, E = R);
        var L = M.split("-");
        if (!E && L.length > 1)
          return T(L[0]);
      } else {
        var I = M.name;
        $[I] = M, E = I;
      }
      return !D && E && (C = E), E || !D && C;
    }, x = function(T, M) {
      if (S(T))
        return T.clone();
      var O = typeof M == "object" ? M : {};
      return O.date = T, O.args = arguments, new W(O);
    }, A = b;
    A.l = y, A.i = S, A.w = function(T, M) {
      return x(T, { locale: M.$L, utc: M.$u, x: M.$x, $offset: M.$offset });
    };
    var W = function() {
      function T(O) {
        this.$L = y(O.locale, null, !0), this.parse(O);
      }
      var M = T.prototype;
      return M.parse = function(O) {
        this.$d = function(D) {
          var E = D.date, R = D.utc;
          if (E === null)
            return new Date(NaN);
          if (A.u(E))
            return new Date();
          if (E instanceof Date)
            return new Date(E);
          if (typeof E == "string" && !/Z$/i.test(E)) {
            var L = E.match(h);
            if (L) {
              var I = L[2] - 1 || 0, F = (L[7] || "0").substring(0, 3);
              return R ? new Date(Date.UTC(L[1], I, L[3] || 1, L[4] || 0, L[5] || 0, L[6] || 0, F)) : new Date(L[1], I, L[3] || 1, L[4] || 0, L[5] || 0, L[6] || 0, F);
            }
          }
          return new Date(E);
        }(O), this.$x = O.x || {}, this.init();
      }, M.init = function() {
        var O = this.$d;
        this.$y = O.getFullYear(), this.$M = O.getMonth(), this.$D = O.getDate(), this.$W = O.getDay(), this.$H = O.getHours(), this.$m = O.getMinutes(), this.$s = O.getSeconds(), this.$ms = O.getMilliseconds();
      }, M.$utils = function() {
        return A;
      }, M.isValid = function() {
        return this.$d.toString() !== g;
      }, M.isSame = function(O, D) {
        var E = x(O);
        return this.startOf(D) <= E && E <= this.endOf(D);
      }, M.isAfter = function(O, D) {
        return x(O) < this.startOf(D);
      }, M.isBefore = function(O, D) {
        return this.endOf(D) < x(O);
      }, M.$g = function(O, D, E) {
        return A.u(O) ? this[D] : this.set(E, O);
      }, M.unix = function() {
        return Math.floor(this.valueOf() / 1e3);
      }, M.valueOf = function() {
        return this.$d.getTime();
      }, M.startOf = function(O, D) {
        var E = this, R = !!A.u(D) || D, L = A.p(O), I = function(q, G) {
          var ne = A.w(E.$u ? Date.UTC(E.$y, G, q) : new Date(E.$y, G, q), E);
          return R ? ne : ne.endOf(p);
        }, F = function(q, G) {
          return A.w(E.toDate()[q].apply(E.toDate("s"), (R ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(G)), E);
        }, j = this.$W, V = this.$M, X = this.$D, H = "set" + (this.$u ? "UTC" : "");
        switch (L) {
          case l:
            return R ? I(1, 0) : I(31, 11);
          case d:
            return R ? I(1, V) : I(0, V + 1);
          case i:
            var Y = this.$locale().weekStart || 0, K = (j < Y ? j + 7 : j) - Y;
            return I(R ? X - K : X + (6 - K), V);
          case p:
          case _:
            return F(H + "Hours", 0);
          case f:
            return F(H + "Minutes", 1);
          case c:
            return F(H + "Seconds", 2);
          case a:
            return F(H + "Milliseconds", 3);
          default:
            return this.clone();
        }
      }, M.endOf = function(O) {
        return this.startOf(O, !1);
      }, M.$set = function(O, D) {
        var E, R = A.p(O), L = "set" + (this.$u ? "UTC" : ""), I = (E = {}, E[p] = L + "Date", E[_] = L + "Date", E[d] = L + "Month", E[l] = L + "FullYear", E[f] = L + "Hours", E[c] = L + "Minutes", E[a] = L + "Seconds", E[o] = L + "Milliseconds", E)[R], F = R === p ? this.$D + (D - this.$W) : D;
        if (R === d || R === l) {
          var j = this.clone().set(_, 1);
          j.$d[I](F), j.init(), this.$d = j.set(_, Math.min(this.$D, j.daysInMonth())).$d;
        } else
          I && this.$d[I](F);
        return this.init(), this;
      }, M.set = function(O, D) {
        return this.clone().$set(O, D);
      }, M.get = function(O) {
        return this[A.p(O)]();
      }, M.add = function(O, D) {
        var E, R = this;
        O = Number(O);
        var L = A.p(D), I = function(V) {
          var X = x(R);
          return A.w(X.date(X.date() + Math.round(V * O)), R);
        };
        if (L === d)
          return this.set(d, this.$M + O);
        if (L === l)
          return this.set(l, this.$y + O);
        if (L === p)
          return I(1);
        if (L === i)
          return I(7);
        var F = (E = {}, E[c] = r, E[f] = s, E[a] = n, E)[L] || 1, j = this.$d.getTime() + O * F;
        return A.w(j, this);
      }, M.subtract = function(O, D) {
        return this.add(-1 * O, D);
      }, M.format = function(O) {
        var D = this, E = this.$locale();
        if (!this.isValid())
          return E.invalidDate || g;
        var R = O || "YYYY-MM-DDTHH:mm:ssZ", L = A.z(this), I = this.$H, F = this.$m, j = this.$M, V = E.weekdays, X = E.months, H = function(G, ne, re, pe) {
          return G && (G[ne] || G(D, R)) || re[ne].slice(0, pe);
        }, Y = function(G) {
          return A.s(I % 12 || 12, G, "0");
        }, K = E.meridiem || function(G, ne, re) {
          var pe = G < 12 ? "AM" : "PM";
          return re ? pe.toLowerCase() : pe;
        }, q = { YY: String(this.$y).slice(-2), YYYY: this.$y, M: j + 1, MM: A.s(j + 1, 2, "0"), MMM: H(E.monthsShort, j, X, 3), MMMM: H(X, j), D: this.$D, DD: A.s(this.$D, 2, "0"), d: String(this.$W), dd: H(E.weekdaysMin, this.$W, V, 2), ddd: H(E.weekdaysShort, this.$W, V, 3), dddd: V[this.$W], H: String(I), HH: A.s(I, 2, "0"), h: Y(1), hh: Y(2), a: K(I, F, !0), A: K(I, F, !1), m: String(F), mm: A.s(F, 2, "0"), s: String(this.$s), ss: A.s(this.$s, 2, "0"), SSS: A.s(this.$ms, 3, "0"), Z: L };
        return R.replace(v, function(G, ne) {
          return ne || q[G] || L.replace(":", "");
        });
      }, M.utcOffset = function() {
        return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
      }, M.diff = function(O, D, E) {
        var R, L = A.p(D), I = x(O), F = (I.utcOffset() - this.utcOffset()) * r, j = this - I, V = A.m(this, I);
        return V = (R = {}, R[l] = V / 12, R[d] = V, R[u] = V / 3, R[i] = (j - F) / 6048e5, R[p] = (j - F) / 864e5, R[f] = j / s, R[c] = j / r, R[a] = j / n, R)[L] || j, E ? V : A.a(V);
      }, M.daysInMonth = function() {
        return this.endOf(d).$D;
      }, M.$locale = function() {
        return $[this.$L];
      }, M.locale = function(O, D) {
        if (!O)
          return this.$L;
        var E = this.clone(), R = y(O, D, !0);
        return R && (E.$L = R), E;
      }, M.clone = function() {
        return A.w(this.$d, this);
      }, M.toDate = function() {
        return new Date(this.valueOf());
      }, M.toJSON = function() {
        return this.isValid() ? this.toISOString() : null;
      }, M.toISOString = function() {
        return this.$d.toISOString();
      }, M.toString = function() {
        return this.$d.toUTCString();
      }, T;
    }(), U = W.prototype;
    return x.prototype = U, [["$ms", o], ["$s", a], ["$m", c], ["$H", f], ["$W", p], ["$M", d], ["$y", l], ["$D", _]].forEach(function(T) {
      U[T[1]] = function(M) {
        return this.$g(M, T[0], T[1]);
      };
    }), x.extend = function(T, M) {
      return T.$i || (T(M, W, x), T.$i = !0), x;
    }, x.locale = y, x.isDayjs = S, x.unix = function(T) {
      return x(1e3 * T);
    }, x.en = $[C], x.Ls = $, x.p = {}, x;
  });
})(iv);
const sv = iv.exports, kw = (e) => {
  const t = sv(`1989-01-01 ${e || "00:00:00"}`);
  return {
    hour: t.hour(),
    minute: t.minute(),
    second: t.second()
  };
};
function xw() {
  let e = new Array(24).fill(0), t = new Array(60).fill(0), n = new Array(60).fill(0);
  return e = e.map((r, s) => r + s), t = t.map((r, s) => r + s), n = n.map((r, s) => r + s), { hourList: e, minuteList: t, secondList: n };
}
class Sw extends wo {
  constructor() {
    super(...arguments);
    N(this, "cellHeight", 24);
    N(this, "ref", Wi());
    N(this, "hourRef", Wi());
    N(this, "minuteRef", Wi());
    N(this, "secondRef", Wi());
    N(this, "state", {
      selectTime: this.props.value || "00:00:00"
    });
  }
  handleMoveTime(n) {
    var s, o, a;
    const r = "smooth";
    n.hour && this.hourRef.current && ((s = this.hourRef.current) == null || s.scrollTo({ behavior: r, top: n.hour * this.cellHeight })), n.minute && this.minuteRef.current && ((o = this.minuteRef.current) == null || o.scrollTo({ behavior: r, top: n.minute * this.cellHeight })), n.second && this.secondRef.current && ((a = this.secondRef.current) == null || a.scrollTo({ behavior: r, top: n.second * this.cellHeight }));
  }
  handleChange(n) {
    this.handleMoveTime(n), this.setState({ selectTime: this.getTimeString(n) });
  }
  getTimeString(n) {
    return this.props.showSeconds ? `${(n == null ? void 0 : n.hour) && this.addZero(n.hour) || "00"}:${(n == null ? void 0 : n.minute) && this.addZero(n.minute) || "00"}:${(n == null ? void 0 : n.second) && this.addZero(n.second) || "00"}` : `${(n == null ? void 0 : n.hour) && this.addZero(n.hour) || "00"}:${(n == null ? void 0 : n.minute) && this.addZero(n.minute) || "00"}`;
  }
  addZero(n) {
    return n < 10 ? `0${n}` : n;
  }
  renderColumn(n, r) {
    const s = kw(this.state.selectTime);
    return r.map((o) => {
      const a = s[n] === o, c = { ...s, [n]: o };
      return /* @__PURE__ */ Te("button", {
        className: z("btn", "size-sm", "ghost", "flex", { active: a }),
        type: "button",
        key: `unit-${n}-${o}`,
        onClick: () => this.handleChange(c)
      }, this.addZero(o));
    });
  }
  onSubmit() {
    console.log(this.state.selectTime), this.props.onChange && this.props.onChange(this.state.selectTime);
  }
  onClear() {
    this.setState({ selectTime: "" }), this.props.onChange && this.props.onChange("");
  }
  render() {
    const { showSeconds: n, style: r } = this.props, { hourList: s, minuteList: o, secondList: a } = xw();
    return /* @__PURE__ */ Te("div", {
      className: z("timepicker-timepanel", "pt-px"),
      style: r,
      ref: this.ref
    }, /* @__PURE__ */ Te("div", {
      className: z("flex", " justify-around", "p-px", "not-hide-timepicker")
    }, /* @__PURE__ */ Te("div", {
      className: "overflow-hidden"
    }, /* @__PURE__ */ Te("div", {
      className: "timepicker-timepanel-select-col",
      ref: this.hourRef
    }, this.renderColumn("hour", s))), /* @__PURE__ */ Te("div", {
      className: "overflow-hidden"
    }, /* @__PURE__ */ Te("div", {
      className: "timepicker-timepanel-select-col",
      ref: this.minuteRef
    }, this.renderColumn("minute", o))), n && /* @__PURE__ */ Te("div", {
      className: "overflow-hidden"
    }, /* @__PURE__ */ Te("div", {
      className: "timepicker-timepanel-select-col",
      ref: this.secondRef
    }, this.renderColumn("second", a)))), /* @__PURE__ */ Te("div", {
      className: z("timepicker-timepanel-actions", "flex", "p-px", "justify-between", "align-center")
    }, /* @__PURE__ */ Te("button", {
      className: z("btn", "size-sm", "ghost", "text-primary"),
      type: "button",
      onClick: this.onClear.bind(this)
    }, "\u6E05\u9664"), /* @__PURE__ */ Te("button", {
      className: z("btn", "size-sm", "ghost", "text-primary"),
      type: "button",
      onClick: this.onSubmit.bind(this)
    }, "\u786E\u8BA4")));
  }
}
function nt(e) {
  if (e == null)
    return window;
  if (e.toString() !== "[object Window]") {
    var t = e.ownerDocument;
    return t && t.defaultView || window;
  }
  return e;
}
function Yn(e) {
  var t = nt(e).Element;
  return e instanceof t || e instanceof Element;
}
function Je(e) {
  var t = nt(e).HTMLElement;
  return e instanceof t || e instanceof HTMLElement;
}
function Ac(e) {
  if (typeof ShadowRoot > "u")
    return !1;
  var t = nt(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot;
}
var jn = Math.max, Qs = Math.min, Mr = Math.round;
function Nl() {
  var e = navigator.userAgentData;
  return e != null && e.brands ? e.brands.map(function(t) {
    return t.brand + "/" + t.version;
  }).join(" ") : navigator.userAgent;
}
function av() {
  return !/^((?!chrome|android).)*safari/i.test(Nl());
}
function Tr(e, t, n) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  var r = e.getBoundingClientRect(), s = 1, o = 1;
  t && Je(e) && (s = e.offsetWidth > 0 && Mr(r.width) / e.offsetWidth || 1, o = e.offsetHeight > 0 && Mr(r.height) / e.offsetHeight || 1);
  var a = Yn(e) ? nt(e) : window, c = a.visualViewport, f = !av() && n, p = (r.left + (f && c ? c.offsetLeft : 0)) / s, i = (r.top + (f && c ? c.offsetTop : 0)) / o, d = r.width / s, u = r.height / o;
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
function Mc(e) {
  var t = nt(e), n = t.pageXOffset, r = t.pageYOffset;
  return {
    scrollLeft: n,
    scrollTop: r
  };
}
function Cw(e) {
  return {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  };
}
function Ew(e) {
  return e === nt(e) || !Je(e) ? Mc(e) : Cw(e);
}
function Rt(e) {
  return e ? (e.nodeName || "").toLowerCase() : null;
}
function Mn(e) {
  return ((Yn(e) ? e.ownerDocument : e.document) || window.document).documentElement;
}
function Tc(e) {
  return Tr(Mn(e)).left + Mc(e).scrollLeft;
}
function Xt(e) {
  return nt(e).getComputedStyle(e);
}
function Dc(e) {
  var t = Xt(e), n = t.overflow, r = t.overflowX, s = t.overflowY;
  return /auto|scroll|overlay|hidden/.test(n + s + r);
}
function Ow(e) {
  var t = e.getBoundingClientRect(), n = Mr(t.width) / e.offsetWidth || 1, r = Mr(t.height) / e.offsetHeight || 1;
  return n !== 1 || r !== 1;
}
function Aw(e, t, n) {
  n === void 0 && (n = !1);
  var r = Je(t), s = Je(t) && Ow(t), o = Mn(t), a = Tr(e, s, n), c = {
    scrollLeft: 0,
    scrollTop: 0
  }, f = {
    x: 0,
    y: 0
  };
  return (r || !r && !n) && ((Rt(t) !== "body" || Dc(o)) && (c = Ew(t)), Je(t) ? (f = Tr(t, !0), f.x += t.clientLeft, f.y += t.clientTop) : o && (f.x = Tc(o))), {
    x: a.left + c.scrollLeft - f.x,
    y: a.top + c.scrollTop - f.y,
    width: a.width,
    height: a.height
  };
}
function Lc(e) {
  var t = Tr(e), n = e.offsetWidth, r = e.offsetHeight;
  return Math.abs(t.width - n) <= 1 && (n = t.width), Math.abs(t.height - r) <= 1 && (r = t.height), {
    x: e.offsetLeft,
    y: e.offsetTop,
    width: n,
    height: r
  };
}
function fl(e) {
  return Rt(e) === "html" ? e : e.assignedSlot || e.parentNode || (Ac(e) ? e.host : null) || Mn(e);
}
function lv(e) {
  return ["html", "body", "#document"].indexOf(Rt(e)) >= 0 ? e.ownerDocument.body : Je(e) && Dc(e) ? e : lv(fl(e));
}
function $o(e, t) {
  var n;
  t === void 0 && (t = []);
  var r = lv(e), s = r === ((n = e.ownerDocument) == null ? void 0 : n.body), o = nt(r), a = s ? [o].concat(o.visualViewport || [], Dc(r) ? r : []) : r, c = t.concat(a);
  return s ? c : c.concat($o(fl(a)));
}
function Mw(e) {
  return ["table", "td", "th"].indexOf(Rt(e)) >= 0;
}
function qu(e) {
  return !Je(e) || Xt(e).position === "fixed" ? null : e.offsetParent;
}
function Tw(e) {
  var t = /firefox/i.test(Nl()), n = /Trident/i.test(Nl());
  if (n && Je(e)) {
    var r = Xt(e);
    if (r.position === "fixed")
      return null;
  }
  var s = fl(e);
  for (Ac(s) && (s = s.host); Je(s) && ["html", "body"].indexOf(Rt(s)) < 0; ) {
    var o = Xt(s);
    if (o.transform !== "none" || o.perspective !== "none" || o.contain === "paint" || ["transform", "perspective"].indexOf(o.willChange) !== -1 || t && o.willChange === "filter" || t && o.filter && o.filter !== "none")
      return s;
    s = s.parentNode;
  }
  return null;
}
function Ti(e) {
  for (var t = nt(e), n = qu(e); n && Mw(n) && Xt(n).position === "static"; )
    n = qu(n);
  return n && (Rt(n) === "html" || Rt(n) === "body" && Xt(n).position === "static") ? t : n || Tw(e) || t;
}
var Ue = "top", vt = "bottom", mt = "right", Be = "left", Nc = "auto", Di = [Ue, vt, mt, Be], Dr = "start", Jo = "end", Dw = "clippingParents", cv = "viewport", jr = "popper", Lw = "reference", Gu = /* @__PURE__ */ Di.reduce(function(e, t) {
  return e.concat([t + "-" + Dr, t + "-" + Jo]);
}, []), fv = /* @__PURE__ */ [].concat(Di, [Nc]).reduce(function(e, t) {
  return e.concat([t, t + "-" + Dr, t + "-" + Jo]);
}, []), Nw = "beforeRead", Pw = "read", Rw = "afterRead", Hw = "beforeMain", Ww = "main", Iw = "afterMain", Uw = "beforeWrite", Bw = "write", jw = "afterWrite", Fw = [Nw, Pw, Rw, Hw, Ww, Iw, Uw, Bw, jw];
function zw(e) {
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
function Vw(e) {
  var t = zw(e);
  return Fw.reduce(function(n, r) {
    return n.concat(t.filter(function(s) {
      return s.phase === r;
    }));
  }, []);
}
function Yw(e) {
  var t;
  return function() {
    return t || (t = new Promise(function(n) {
      Promise.resolve().then(function() {
        t = void 0, n(e());
      });
    })), t;
  };
}
function Tt(e) {
  return e.split("-")[0];
}
function qw(e) {
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
function Gw(e, t) {
  var n = nt(e), r = Mn(e), s = n.visualViewport, o = r.clientWidth, a = r.clientHeight, c = 0, f = 0;
  if (s) {
    o = s.width, a = s.height;
    var p = av();
    (p || !p && t === "fixed") && (c = s.offsetLeft, f = s.offsetTop);
  }
  return {
    width: o,
    height: a,
    x: c + Tc(e),
    y: f
  };
}
function Xw(e) {
  var t, n = Mn(e), r = Mc(e), s = (t = e.ownerDocument) == null ? void 0 : t.body, o = jn(n.scrollWidth, n.clientWidth, s ? s.scrollWidth : 0, s ? s.clientWidth : 0), a = jn(n.scrollHeight, n.clientHeight, s ? s.scrollHeight : 0, s ? s.clientHeight : 0), c = -r.scrollLeft + Tc(e), f = -r.scrollTop;
  return Xt(s || n).direction === "rtl" && (c += jn(n.clientWidth, s ? s.clientWidth : 0) - o), {
    width: o,
    height: a,
    x: c,
    y: f
  };
}
function uv(e, t) {
  var n = t.getRootNode && t.getRootNode();
  if (e.contains(t))
    return !0;
  if (n && Ac(n)) {
    var r = t;
    do {
      if (r && e.isSameNode(r))
        return !0;
      r = r.parentNode || r.host;
    } while (r);
  }
  return !1;
}
function Pl(e) {
  return Object.assign({}, e, {
    left: e.x,
    top: e.y,
    right: e.x + e.width,
    bottom: e.y + e.height
  });
}
function Kw(e, t) {
  var n = Tr(e, !1, t === "fixed");
  return n.top = n.top + e.clientTop, n.left = n.left + e.clientLeft, n.bottom = n.top + e.clientHeight, n.right = n.left + e.clientWidth, n.width = e.clientWidth, n.height = e.clientHeight, n.x = n.left, n.y = n.top, n;
}
function Xu(e, t, n) {
  return t === cv ? Pl(Gw(e, n)) : Yn(t) ? Kw(t, n) : Pl(Xw(Mn(e)));
}
function Zw(e) {
  var t = $o(fl(e)), n = ["absolute", "fixed"].indexOf(Xt(e).position) >= 0, r = n && Je(e) ? Ti(e) : e;
  return Yn(r) ? t.filter(function(s) {
    return Yn(s) && uv(s, r) && Rt(s) !== "body";
  }) : [];
}
function Jw(e, t, n, r) {
  var s = t === "clippingParents" ? Zw(e) : [].concat(t), o = [].concat(s, [n]), a = o[0], c = o.reduce(function(f, p) {
    var i = Xu(e, p, r);
    return f.top = jn(i.top, f.top), f.right = Qs(i.right, f.right), f.bottom = Qs(i.bottom, f.bottom), f.left = jn(i.left, f.left), f;
  }, Xu(e, a, r));
  return c.width = c.right - c.left, c.height = c.bottom - c.top, c.x = c.left, c.y = c.top, c;
}
function Lr(e) {
  return e.split("-")[1];
}
function Pc(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function _v(e) {
  var t = e.reference, n = e.element, r = e.placement, s = r ? Tt(r) : null, o = r ? Lr(r) : null, a = t.x + t.width / 2 - n.width / 2, c = t.y + t.height / 2 - n.height / 2, f;
  switch (s) {
    case Ue:
      f = {
        x: a,
        y: t.y - n.height
      };
      break;
    case vt:
      f = {
        x: a,
        y: t.y + t.height
      };
      break;
    case mt:
      f = {
        x: t.x + t.width,
        y: c
      };
      break;
    case Be:
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
  var p = s ? Pc(s) : null;
  if (p != null) {
    var i = p === "y" ? "height" : "width";
    switch (o) {
      case Dr:
        f[p] = f[p] - (t[i] / 2 - n[i] / 2);
        break;
      case Jo:
        f[p] = f[p] + (t[i] / 2 - n[i] / 2);
        break;
    }
  }
  return f;
}
function pv() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
function dv(e) {
  return Object.assign({}, pv(), e);
}
function hv(e, t) {
  return t.reduce(function(n, r) {
    return n[r] = e, n;
  }, {});
}
function Rc(e, t) {
  t === void 0 && (t = {});
  var n = t, r = n.placement, s = r === void 0 ? e.placement : r, o = n.strategy, a = o === void 0 ? e.strategy : o, c = n.boundary, f = c === void 0 ? Dw : c, p = n.rootBoundary, i = p === void 0 ? cv : p, d = n.elementContext, u = d === void 0 ? jr : d, l = n.altBoundary, _ = l === void 0 ? !1 : l, g = n.padding, h = g === void 0 ? 0 : g, v = dv(typeof h != "number" ? h : hv(h, Di)), m = u === jr ? Lw : jr, k = e.rects.popper, b = e.elements[_ ? m : u], C = Jw(Yn(b) ? b : b.contextElement || Mn(e.elements.popper), f, i, a), $ = Tr(e.elements.reference), S = _v({
    reference: $,
    element: k,
    strategy: "absolute",
    placement: s
  }), y = Pl(Object.assign({}, k, S)), x = u === jr ? y : $, A = {
    top: C.top - x.top + v.top,
    bottom: x.bottom - C.bottom + v.bottom,
    left: C.left - x.left + v.left,
    right: x.right - C.right + v.right
  }, W = e.modifiersData.offset;
  if (u === jr && W) {
    var U = W[s];
    Object.keys(A).forEach(function(T) {
      var M = [mt, vt].indexOf(T) >= 0 ? 1 : -1, O = [Ue, vt].indexOf(T) >= 0 ? "y" : "x";
      A[T] += U[O] * M;
    });
  }
  return A;
}
var Ku = {
  placement: "bottom",
  modifiers: [],
  strategy: "absolute"
};
function Zu() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return !t.some(function(r) {
    return !(r && typeof r.getBoundingClientRect == "function");
  });
}
function Qw(e) {
  e === void 0 && (e = {});
  var t = e, n = t.defaultModifiers, r = n === void 0 ? [] : n, s = t.defaultOptions, o = s === void 0 ? Ku : s;
  return function(c, f, p) {
    p === void 0 && (p = o);
    var i = {
      placement: "bottom",
      orderedModifiers: [],
      options: Object.assign({}, Ku, o),
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
          reference: Yn(c) ? $o(c) : c.contextElement ? $o(c.contextElement) : [],
          popper: $o(f)
        };
        var k = Vw(qw([].concat(r, i.options.modifiers)));
        return i.orderedModifiers = k.filter(function(b) {
          return b.enabled;
        }), _(), l.update();
      },
      forceUpdate: function() {
        if (!u) {
          var v = i.elements, m = v.reference, k = v.popper;
          if (!!Zu(m, k)) {
            i.rects = {
              reference: Aw(m, Ti(k), i.options.strategy === "fixed"),
              popper: Lc(k)
            }, i.reset = !1, i.placement = i.options.placement, i.orderedModifiers.forEach(function(A) {
              return i.modifiersData[A.name] = Object.assign({}, A.data);
            });
            for (var b = 0; b < i.orderedModifiers.length; b++) {
              if (i.reset === !0) {
                i.reset = !1, b = -1;
                continue;
              }
              var C = i.orderedModifiers[b], $ = C.fn, S = C.options, y = S === void 0 ? {} : S, x = C.name;
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
      update: Yw(function() {
        return new Promise(function(h) {
          l.forceUpdate(), h(i);
        });
      }),
      destroy: function() {
        g(), u = !0;
      }
    };
    if (!Zu(c, f))
      return l;
    l.setOptions(p).then(function(h) {
      !u && p.onFirstUpdate && p.onFirstUpdate(h);
    });
    function _() {
      i.orderedModifiers.forEach(function(h) {
        var v = h.name, m = h.options, k = m === void 0 ? {} : m, b = h.effect;
        if (typeof b == "function") {
          var C = b({
            state: i,
            name: v,
            instance: l,
            options: k
          }), $ = function() {
          };
          d.push(C || $);
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
var Ii = {
  passive: !0
};
function e$(e) {
  var t = e.state, n = e.instance, r = e.options, s = r.scroll, o = s === void 0 ? !0 : s, a = r.resize, c = a === void 0 ? !0 : a, f = nt(t.elements.popper), p = [].concat(t.scrollParents.reference, t.scrollParents.popper);
  return o && p.forEach(function(i) {
    i.addEventListener("scroll", n.update, Ii);
  }), c && f.addEventListener("resize", n.update, Ii), function() {
    o && p.forEach(function(i) {
      i.removeEventListener("scroll", n.update, Ii);
    }), c && f.removeEventListener("resize", n.update, Ii);
  };
}
const t$ = {
  name: "eventListeners",
  enabled: !0,
  phase: "write",
  fn: function() {
  },
  effect: e$,
  data: {}
};
function n$(e) {
  var t = e.state, n = e.name;
  t.modifiersData[n] = _v({
    reference: t.rects.reference,
    element: t.rects.popper,
    strategy: "absolute",
    placement: t.placement
  });
}
const r$ = {
  name: "popperOffsets",
  enabled: !0,
  phase: "read",
  fn: n$,
  data: {}
};
var o$ = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function i$(e) {
  var t = e.x, n = e.y, r = window, s = r.devicePixelRatio || 1;
  return {
    x: Mr(t * s) / s || 0,
    y: Mr(n * s) / s || 0
  };
}
function Ju(e) {
  var t, n = e.popper, r = e.popperRect, s = e.placement, o = e.variation, a = e.offsets, c = e.position, f = e.gpuAcceleration, p = e.adaptive, i = e.roundOffsets, d = e.isFixed, u = a.x, l = u === void 0 ? 0 : u, _ = a.y, g = _ === void 0 ? 0 : _, h = typeof i == "function" ? i({
    x: l,
    y: g
  }) : {
    x: l,
    y: g
  };
  l = h.x, g = h.y;
  var v = a.hasOwnProperty("x"), m = a.hasOwnProperty("y"), k = Be, b = Ue, C = window;
  if (p) {
    var $ = Ti(n), S = "clientHeight", y = "clientWidth";
    if ($ === nt(n) && ($ = Mn(n), Xt($).position !== "static" && c === "absolute" && (S = "scrollHeight", y = "scrollWidth")), $ = $, s === Ue || (s === Be || s === mt) && o === Jo) {
      b = vt;
      var x = d && $ === C && C.visualViewport ? C.visualViewport.height : $[S];
      g -= x - r.height, g *= f ? 1 : -1;
    }
    if (s === Be || (s === Ue || s === vt) && o === Jo) {
      k = mt;
      var A = d && $ === C && C.visualViewport ? C.visualViewport.width : $[y];
      l -= A - r.width, l *= f ? 1 : -1;
    }
  }
  var W = Object.assign({
    position: c
  }, p && o$), U = i === !0 ? i$({
    x: l,
    y: g
  }) : {
    x: l,
    y: g
  };
  if (l = U.x, g = U.y, f) {
    var T;
    return Object.assign({}, W, (T = {}, T[b] = m ? "0" : "", T[k] = v ? "0" : "", T.transform = (C.devicePixelRatio || 1) <= 1 ? "translate(" + l + "px, " + g + "px)" : "translate3d(" + l + "px, " + g + "px, 0)", T));
  }
  return Object.assign({}, W, (t = {}, t[b] = m ? g + "px" : "", t[k] = v ? l + "px" : "", t.transform = "", t));
}
function s$(e) {
  var t = e.state, n = e.options, r = n.gpuAcceleration, s = r === void 0 ? !0 : r, o = n.adaptive, a = o === void 0 ? !0 : o, c = n.roundOffsets, f = c === void 0 ? !0 : c, p = {
    placement: Tt(t.placement),
    variation: Lr(t.placement),
    popper: t.elements.popper,
    popperRect: t.rects.popper,
    gpuAcceleration: s,
    isFixed: t.options.strategy === "fixed"
  };
  t.modifiersData.popperOffsets != null && (t.styles.popper = Object.assign({}, t.styles.popper, Ju(Object.assign({}, p, {
    offsets: t.modifiersData.popperOffsets,
    position: t.options.strategy,
    adaptive: a,
    roundOffsets: f
  })))), t.modifiersData.arrow != null && (t.styles.arrow = Object.assign({}, t.styles.arrow, Ju(Object.assign({}, p, {
    offsets: t.modifiersData.arrow,
    position: "absolute",
    adaptive: !1,
    roundOffsets: f
  })))), t.attributes.popper = Object.assign({}, t.attributes.popper, {
    "data-popper-placement": t.placement
  });
}
const a$ = {
  name: "computeStyles",
  enabled: !0,
  phase: "beforeWrite",
  fn: s$,
  data: {}
};
function l$(e) {
  var t = e.state;
  Object.keys(t.elements).forEach(function(n) {
    var r = t.styles[n] || {}, s = t.attributes[n] || {}, o = t.elements[n];
    !Je(o) || !Rt(o) || (Object.assign(o.style, r), Object.keys(s).forEach(function(a) {
      var c = s[a];
      c === !1 ? o.removeAttribute(a) : o.setAttribute(a, c === !0 ? "" : c);
    }));
  });
}
function c$(e) {
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
      !Je(s) || !Rt(s) || (Object.assign(s.style, c), Object.keys(o).forEach(function(f) {
        s.removeAttribute(f);
      }));
    });
  };
}
const f$ = {
  name: "applyStyles",
  enabled: !0,
  phase: "write",
  fn: l$,
  effect: c$,
  requires: ["computeStyles"]
};
var u$ = [t$, r$, a$, f$], _$ = /* @__PURE__ */ Qw({
  defaultModifiers: u$
});
function ko(e, t, n) {
  return jn(e, Qs(t, n));
}
function p$(e, t, n) {
  var r = ko(e, t, n);
  return r > n ? n : r;
}
var d$ = function(t, n) {
  return t = typeof t == "function" ? t(Object.assign({}, n.rects, {
    placement: n.placement
  })) : t, dv(typeof t != "number" ? t : hv(t, Di));
};
function h$(e) {
  var t, n = e.state, r = e.name, s = e.options, o = n.elements.arrow, a = n.modifiersData.popperOffsets, c = Tt(n.placement), f = Pc(c), p = [Be, mt].indexOf(c) >= 0, i = p ? "height" : "width";
  if (!(!o || !a)) {
    var d = d$(s.padding, n), u = Lc(o), l = f === "y" ? Ue : Be, _ = f === "y" ? vt : mt, g = n.rects.reference[i] + n.rects.reference[f] - a[f] - n.rects.popper[i], h = a[f] - n.rects.reference[f], v = Ti(o), m = v ? f === "y" ? v.clientHeight || 0 : v.clientWidth || 0 : 0, k = g / 2 - h / 2, b = d[l], C = m - u[i] - d[_], $ = m / 2 - u[i] / 2 + k, S = ko(b, $, C), y = f;
    n.modifiersData[r] = (t = {}, t[y] = S, t.centerOffset = S - $, t);
  }
}
function v$(e) {
  var t = e.state, n = e.options, r = n.element, s = r === void 0 ? "[data-popper-arrow]" : r;
  s != null && (typeof s == "string" && (s = t.elements.popper.querySelector(s), !s) || !uv(t.elements.popper, s) || (t.elements.arrow = s));
}
const m$ = {
  name: "arrow",
  enabled: !0,
  phase: "main",
  fn: h$,
  effect: v$,
  requires: ["popperOffsets"],
  requiresIfExists: ["preventOverflow"]
};
function g$(e, t, n) {
  var r = Tt(e), s = [Be, Ue].indexOf(r) >= 0 ? -1 : 1, o = typeof n == "function" ? n(Object.assign({}, t, {
    placement: e
  })) : n, a = o[0], c = o[1];
  return a = a || 0, c = (c || 0) * s, [Be, mt].indexOf(r) >= 0 ? {
    x: c,
    y: a
  } : {
    x: a,
    y: c
  };
}
function y$(e) {
  var t = e.state, n = e.options, r = e.name, s = n.offset, o = s === void 0 ? [0, 0] : s, a = fv.reduce(function(i, d) {
    return i[d] = g$(d, t.rects, o), i;
  }, {}), c = a[t.placement], f = c.x, p = c.y;
  t.modifiersData.popperOffsets != null && (t.modifiersData.popperOffsets.x += f, t.modifiersData.popperOffsets.y += p), t.modifiersData[r] = a;
}
const b$ = {
  name: "offset",
  enabled: !0,
  phase: "main",
  requires: ["popperOffsets"],
  fn: y$
};
function w$(e) {
  return e === "x" ? "y" : "x";
}
function $$(e) {
  var t = e.state, n = e.options, r = e.name, s = n.mainAxis, o = s === void 0 ? !0 : s, a = n.altAxis, c = a === void 0 ? !1 : a, f = n.boundary, p = n.rootBoundary, i = n.altBoundary, d = n.padding, u = n.tether, l = u === void 0 ? !0 : u, _ = n.tetherOffset, g = _ === void 0 ? 0 : _, h = Rc(t, {
    boundary: f,
    rootBoundary: p,
    padding: d,
    altBoundary: i
  }), v = Tt(t.placement), m = Lr(t.placement), k = !m, b = Pc(v), C = w$(b), $ = t.modifiersData.popperOffsets, S = t.rects.reference, y = t.rects.popper, x = typeof g == "function" ? g(Object.assign({}, t.rects, {
    placement: t.placement
  })) : g, A = typeof x == "number" ? {
    mainAxis: x,
    altAxis: x
  } : Object.assign({
    mainAxis: 0,
    altAxis: 0
  }, x), W = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null, U = {
    x: 0,
    y: 0
  };
  if (!!$) {
    if (o) {
      var T, M = b === "y" ? Ue : Be, O = b === "y" ? vt : mt, D = b === "y" ? "height" : "width", E = $[b], R = E + h[M], L = E - h[O], I = l ? -y[D] / 2 : 0, F = m === Dr ? S[D] : y[D], j = m === Dr ? -y[D] : -S[D], V = t.elements.arrow, X = l && V ? Lc(V) : {
        width: 0,
        height: 0
      }, H = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : pv(), Y = H[M], K = H[O], q = ko(0, S[D], X[D]), G = k ? S[D] / 2 - I - q - Y - A.mainAxis : F - q - Y - A.mainAxis, ne = k ? -S[D] / 2 + I + q + K + A.mainAxis : j + q + K + A.mainAxis, re = t.elements.arrow && Ti(t.elements.arrow), pe = re ? b === "y" ? re.clientTop || 0 : re.clientLeft || 0 : 0, Le = (T = W == null ? void 0 : W[b]) != null ? T : 0, te = E + G - Le - pe, bt = E + ne - Le, Oe = ko(l ? Qs(R, te) : R, E, l ? jn(L, bt) : L);
      $[b] = Oe, U[b] = Oe - E;
    }
    if (c) {
      var Ae, wt = b === "x" ? Ue : Be, Ye = b === "x" ? vt : mt, ee = $[C], se = C === "y" ? "height" : "width", Me = ee + h[wt], ot = ee - h[Ye], Ee = [Ue, Be].indexOf(v) !== -1, it = (Ae = W == null ? void 0 : W[C]) != null ? Ae : 0, st = Ee ? Me : ee - S[se] - y[se] - it + A.altAxis, at = Ee ? ee + S[se] + y[se] - it - A.altAxis : ot, lt = l && Ee ? p$(st, ee, at) : ko(l ? st : Me, ee, l ? at : ot);
      $[C] = lt, U[C] = lt - ee;
    }
    t.modifiersData[r] = U;
  }
}
const k$ = {
  name: "preventOverflow",
  enabled: !0,
  phase: "main",
  fn: $$,
  requiresIfExists: ["offset"]
};
var x$ = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function fs(e) {
  return e.replace(/left|right|bottom|top/g, function(t) {
    return x$[t];
  });
}
var S$ = {
  start: "end",
  end: "start"
};
function Qu(e) {
  return e.replace(/start|end/g, function(t) {
    return S$[t];
  });
}
function C$(e, t) {
  t === void 0 && (t = {});
  var n = t, r = n.placement, s = n.boundary, o = n.rootBoundary, a = n.padding, c = n.flipVariations, f = n.allowedAutoPlacements, p = f === void 0 ? fv : f, i = Lr(r), d = i ? c ? Gu : Gu.filter(function(_) {
    return Lr(_) === i;
  }) : Di, u = d.filter(function(_) {
    return p.indexOf(_) >= 0;
  });
  u.length === 0 && (u = d);
  var l = u.reduce(function(_, g) {
    return _[g] = Rc(e, {
      placement: g,
      boundary: s,
      rootBoundary: o,
      padding: a
    })[Tt(g)], _;
  }, {});
  return Object.keys(l).sort(function(_, g) {
    return l[_] - l[g];
  });
}
function E$(e) {
  if (Tt(e) === Nc)
    return [];
  var t = fs(e);
  return [Qu(e), t, Qu(t)];
}
function O$(e) {
  var t = e.state, n = e.options, r = e.name;
  if (!t.modifiersData[r]._skip) {
    for (var s = n.mainAxis, o = s === void 0 ? !0 : s, a = n.altAxis, c = a === void 0 ? !0 : a, f = n.fallbackPlacements, p = n.padding, i = n.boundary, d = n.rootBoundary, u = n.altBoundary, l = n.flipVariations, _ = l === void 0 ? !0 : l, g = n.allowedAutoPlacements, h = t.options.placement, v = Tt(h), m = v === h, k = f || (m || !_ ? [fs(h)] : E$(h)), b = [h].concat(k).reduce(function(X, H) {
      return X.concat(Tt(H) === Nc ? C$(t, {
        placement: H,
        boundary: i,
        rootBoundary: d,
        padding: p,
        flipVariations: _,
        allowedAutoPlacements: g
      }) : H);
    }, []), C = t.rects.reference, $ = t.rects.popper, S = /* @__PURE__ */ new Map(), y = !0, x = b[0], A = 0; A < b.length; A++) {
      var W = b[A], U = Tt(W), T = Lr(W) === Dr, M = [Ue, vt].indexOf(U) >= 0, O = M ? "width" : "height", D = Rc(t, {
        placement: W,
        boundary: i,
        rootBoundary: d,
        altBoundary: u,
        padding: p
      }), E = M ? T ? mt : Be : T ? vt : Ue;
      C[O] > $[O] && (E = fs(E));
      var R = fs(E), L = [];
      if (o && L.push(D[U] <= 0), c && L.push(D[E] <= 0, D[R] <= 0), L.every(function(X) {
        return X;
      })) {
        x = W, y = !1;
        break;
      }
      S.set(W, L);
    }
    if (y)
      for (var I = _ ? 3 : 1, F = function(H) {
        var Y = b.find(function(K) {
          var q = S.get(K);
          if (q)
            return q.slice(0, H).every(function(G) {
              return G;
            });
        });
        if (Y)
          return x = Y, "break";
      }, j = I; j > 0; j--) {
        var V = F(j);
        if (V === "break")
          break;
      }
    t.placement !== x && (t.modifiersData[r]._skip = !0, t.placement = x, t.reset = !0);
  }
}
const A$ = {
  name: "flip",
  enabled: !0,
  phase: "main",
  fn: O$,
  requiresIfExists: ["offset"],
  data: {
    _skip: !1
  }
};
var _r, pr, Pn, ft, wi, Ma;
class Ot extends Xe {
  constructor() {
    super(...arguments);
    P(this, _r, void 0);
    P(this, pr, 0);
    P(this, Pn, void 0);
    P(this, ft, void 0);
    P(this, wi, void 0);
    N(this, "hideLater", () => {
      w(this, Ma).call(this), B(this, pr, window.setTimeout(this.hide.bind(this), 100));
    });
    P(this, Ma, () => {
      clearTimeout(w(this, pr)), B(this, pr, 0);
    });
  }
  get isShown() {
    var n;
    return (n = w(this, Pn)) == null ? void 0 : n.classList.contains(this.constructor.CLASS_SHOW);
  }
  get timepicker() {
    return w(this, Pn) || this._ensureTimepicker();
  }
  get popper() {
    return w(this, ft) ? w(this, ft) : this._createPopper();
  }
  get trigger() {
    return w(this, wi) || this.element;
  }
  get elementShowClass() {
    return `with-${this.constructor.NAME}-show`;
  }
  show(n) {
    return B(this, wi, n), !this.timepicker || !this.element ? !1 : (this.element.classList.add(this.elementShowClass), this.timepicker.classList.add(this.constructor.CLASS_SHOW), this._createPopper().update(), !0);
  }
  hide() {
    var n, r;
    return (n = w(this, ft)) == null || n.destroy(), B(this, ft, void 0), this.element.classList.remove(this.elementShowClass), (r = w(this, Pn)) == null || r.classList.remove(this.constructor.CLASS_SHOW), !0;
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
    return n.classList.add("arrow", "timepicker-arrow"), n.style.setProperty("--arrow-size", `${this._getArrowSize()}px`), n;
  }
  _ensureTimepicker() {
    const n = this.constructor.CLASSNAME, r = document.createElement("div");
    return r.classList.add(n), $w(Te(Sw, { ...this.options }), r), this.options.arrow && r.prepend(this._createArrow()), document.body.appendChild(r), B(this, Pn, r), r;
  }
  _getPopperOptions() {
    const n = this._getArrowSize();
    return {
      modifiers: [
        k$,
        A$,
        { ...m$, options: {
          padding: n,
          element: ".arrow"
        } },
        {
          ...b$,
          options: {
            offset: [0, n + 3]
          }
        },
        {
          name: "timepicker",
          enabled: !0,
          phase: "beforeWrite",
          fn: ({ state: r }) => {
            var o, a;
            const s = ((o = r.placement) == null ? void 0 : o.split("-").shift()) || "";
            (a = this.timepicker.querySelector(".arrow")) == null || a.setAttribute("class", `arrow arrow-${s}`), this.element.setAttribute("data-timepicker-placement", s);
          }
        }
      ].filter(Boolean),
      placement: this.options.placement,
      strategy: "absolute"
    };
  }
  _createPopper() {
    const n = this._getPopperOptions();
    return w(this, ft) ? w(this, ft).setOptions(n) : B(this, ft, _$(this._getPopperElement(), this.timepicker, n)), w(this, ft);
  }
  _getPopperElement() {
    return w(this, _r) || B(this, _r, {
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
    }), w(this, _r);
  }
  static show(n) {
    var a;
    const { event: r, ...s } = n, o = this.ensure(document.body);
    return Object.keys(s).length && o.setOptions(s), o.show(r), (a = r == null ? void 0 : r.stopPropagation) == null || a.call(r), o;
  }
  static hide() {
    const n = this.get(document.body);
    return n == null || n.hide(), n;
  }
  static clear(n) {
    var f, p;
    n instanceof Event && (n = { event: n });
    const { event: r, exclude: s, ignoreSelector: o = ".not-hide-timepicker" } = n || {};
    if (r && o && ((p = (f = r.target).closest) == null ? void 0 : p.call(f, o)))
      return;
    const a = this.getAll().entries(), c = new Set(s || []);
    for (const [i, d] of a)
      c.has(i) || d.hide();
  }
}
_r = new WeakMap(), pr = new WeakMap(), Pn = new WeakMap(), ft = new WeakMap(), wi = new WeakMap(), Ma = new WeakMap(), N(Ot, "NAME", "timepicker"), N(Ot, "CLASSNAME", "timepicker"), N(Ot, "CLASS_SHOW", "show"), N(Ot, "MENU_SELECTOR", ".form-time input:not(.disabled):not(:disabled)"), N(Ot, "DEFAULT", {
  value: sv().format("HH:mm:ss"),
  showSeconds: !1,
  placement: "bottom-start",
  strategy: "absolute",
  arrow: !0
});
document.addEventListener("click", function(e) {
  const n = e.target.closest(Ot.MENU_SELECTOR);
  n ? Ot.ensure(n).toggle() : Ot.clear({ event: e });
});
const M$ = (e) => {
  const t = document.getElementsByClassName("with-timepicker-show")[0];
  if (!t)
    return;
  const n = typeof t.closest == "function" ? t.closest(Ot.MENU_SELECTOR) : null;
  !n || !e.target.contains(n) || Ot.clear({ event: e });
};
window.addEventListener("scroll", M$, !0);
class e_ extends Ve {
}
N(e_, "NAME", "toolbar"), N(e_, "Component", Vt);
function rt(e) {
  if (e == null)
    return window;
  if (e.toString() !== "[object Window]") {
    var t = e.ownerDocument;
    return t && t.defaultView || window;
  }
  return e;
}
function qn(e) {
  var t = rt(e).Element;
  return e instanceof t || e instanceof Element;
}
function Qe(e) {
  var t = rt(e).HTMLElement;
  return e instanceof t || e instanceof HTMLElement;
}
function Hc(e) {
  if (typeof ShadowRoot > "u")
    return !1;
  var t = rt(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot;
}
var Fn = Math.max, ea = Math.min, Nr = Math.round;
function Rl() {
  var e = navigator.userAgentData;
  return e != null && e.brands ? e.brands.map(function(t) {
    return t.brand + "/" + t.version;
  }).join(" ") : navigator.userAgent;
}
function vv() {
  return !/^((?!chrome|android).)*safari/i.test(Rl());
}
function Pr(e, t, n) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  var r = e.getBoundingClientRect(), s = 1, o = 1;
  t && Qe(e) && (s = e.offsetWidth > 0 && Nr(r.width) / e.offsetWidth || 1, o = e.offsetHeight > 0 && Nr(r.height) / e.offsetHeight || 1);
  var a = qn(e) ? rt(e) : window, c = a.visualViewport, f = !vv() && n, p = (r.left + (f && c ? c.offsetLeft : 0)) / s, i = (r.top + (f && c ? c.offsetTop : 0)) / o, d = r.width / s, u = r.height / o;
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
function Wc(e) {
  var t = rt(e), n = t.pageXOffset, r = t.pageYOffset;
  return {
    scrollLeft: n,
    scrollTop: r
  };
}
function T$(e) {
  return {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  };
}
function D$(e) {
  return e === rt(e) || !Qe(e) ? Wc(e) : T$(e);
}
function Ht(e) {
  return e ? (e.nodeName || "").toLowerCase() : null;
}
function Tn(e) {
  return ((qn(e) ? e.ownerDocument : e.document) || window.document).documentElement;
}
function Ic(e) {
  return Pr(Tn(e)).left + Wc(e).scrollLeft;
}
function Kt(e) {
  return rt(e).getComputedStyle(e);
}
function Uc(e) {
  var t = Kt(e), n = t.overflow, r = t.overflowX, s = t.overflowY;
  return /auto|scroll|overlay|hidden/.test(n + s + r);
}
function L$(e) {
  var t = e.getBoundingClientRect(), n = Nr(t.width) / e.offsetWidth || 1, r = Nr(t.height) / e.offsetHeight || 1;
  return n !== 1 || r !== 1;
}
function N$(e, t, n) {
  n === void 0 && (n = !1);
  var r = Qe(t), s = Qe(t) && L$(t), o = Tn(t), a = Pr(e, s, n), c = {
    scrollLeft: 0,
    scrollTop: 0
  }, f = {
    x: 0,
    y: 0
  };
  return (r || !r && !n) && ((Ht(t) !== "body" || Uc(o)) && (c = D$(t)), Qe(t) ? (f = Pr(t, !0), f.x += t.clientLeft, f.y += t.clientTop) : o && (f.x = Ic(o))), {
    x: a.left + c.scrollLeft - f.x,
    y: a.top + c.scrollTop - f.y,
    width: a.width,
    height: a.height
  };
}
function Bc(e) {
  var t = Pr(e), n = e.offsetWidth, r = e.offsetHeight;
  return Math.abs(t.width - n) <= 1 && (n = t.width), Math.abs(t.height - r) <= 1 && (r = t.height), {
    x: e.offsetLeft,
    y: e.offsetTop,
    width: n,
    height: r
  };
}
function ul(e) {
  return Ht(e) === "html" ? e : e.assignedSlot || e.parentNode || (Hc(e) ? e.host : null) || Tn(e);
}
function mv(e) {
  return ["html", "body", "#document"].indexOf(Ht(e)) >= 0 ? e.ownerDocument.body : Qe(e) && Uc(e) ? e : mv(ul(e));
}
function xo(e, t) {
  var n;
  t === void 0 && (t = []);
  var r = mv(e), s = r === ((n = e.ownerDocument) == null ? void 0 : n.body), o = rt(r), a = s ? [o].concat(o.visualViewport || [], Uc(r) ? r : []) : r, c = t.concat(a);
  return s ? c : c.concat(xo(ul(a)));
}
function P$(e) {
  return ["table", "td", "th"].indexOf(Ht(e)) >= 0;
}
function t_(e) {
  return !Qe(e) || Kt(e).position === "fixed" ? null : e.offsetParent;
}
function R$(e) {
  var t = /firefox/i.test(Rl()), n = /Trident/i.test(Rl());
  if (n && Qe(e)) {
    var r = Kt(e);
    if (r.position === "fixed")
      return null;
  }
  var s = ul(e);
  for (Hc(s) && (s = s.host); Qe(s) && ["html", "body"].indexOf(Ht(s)) < 0; ) {
    var o = Kt(s);
    if (o.transform !== "none" || o.perspective !== "none" || o.contain === "paint" || ["transform", "perspective"].indexOf(o.willChange) !== -1 || t && o.willChange === "filter" || t && o.filter && o.filter !== "none")
      return s;
    s = s.parentNode;
  }
  return null;
}
function Li(e) {
  for (var t = rt(e), n = t_(e); n && P$(n) && Kt(n).position === "static"; )
    n = t_(n);
  return n && (Ht(n) === "html" || Ht(n) === "body" && Kt(n).position === "static") ? t : n || R$(e) || t;
}
var je = "top", gt = "bottom", yt = "right", Fe = "left", jc = "auto", Ni = [je, gt, yt, Fe], Rr = "start", Qo = "end", H$ = "clippingParents", gv = "viewport", Fr = "popper", W$ = "reference", n_ = /* @__PURE__ */ Ni.reduce(function(e, t) {
  return e.concat([t + "-" + Rr, t + "-" + Qo]);
}, []), yv = /* @__PURE__ */ [].concat(Ni, [jc]).reduce(function(e, t) {
  return e.concat([t, t + "-" + Rr, t + "-" + Qo]);
}, []), I$ = "beforeRead", U$ = "read", B$ = "afterRead", j$ = "beforeMain", F$ = "main", z$ = "afterMain", V$ = "beforeWrite", Y$ = "write", q$ = "afterWrite", G$ = [I$, U$, B$, j$, F$, z$, V$, Y$, q$];
function X$(e) {
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
function K$(e) {
  var t = X$(e);
  return G$.reduce(function(n, r) {
    return n.concat(t.filter(function(s) {
      return s.phase === r;
    }));
  }, []);
}
function Z$(e) {
  var t;
  return function() {
    return t || (t = new Promise(function(n) {
      Promise.resolve().then(function() {
        t = void 0, n(e());
      });
    })), t;
  };
}
function Dt(e) {
  return e.split("-")[0];
}
function J$(e) {
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
function Q$(e, t) {
  var n = rt(e), r = Tn(e), s = n.visualViewport, o = r.clientWidth, a = r.clientHeight, c = 0, f = 0;
  if (s) {
    o = s.width, a = s.height;
    var p = vv();
    (p || !p && t === "fixed") && (c = s.offsetLeft, f = s.offsetTop);
  }
  return {
    width: o,
    height: a,
    x: c + Ic(e),
    y: f
  };
}
function ek(e) {
  var t, n = Tn(e), r = Wc(e), s = (t = e.ownerDocument) == null ? void 0 : t.body, o = Fn(n.scrollWidth, n.clientWidth, s ? s.scrollWidth : 0, s ? s.clientWidth : 0), a = Fn(n.scrollHeight, n.clientHeight, s ? s.scrollHeight : 0, s ? s.clientHeight : 0), c = -r.scrollLeft + Ic(e), f = -r.scrollTop;
  return Kt(s || n).direction === "rtl" && (c += Fn(n.clientWidth, s ? s.clientWidth : 0) - o), {
    width: o,
    height: a,
    x: c,
    y: f
  };
}
function bv(e, t) {
  var n = t.getRootNode && t.getRootNode();
  if (e.contains(t))
    return !0;
  if (n && Hc(n)) {
    var r = t;
    do {
      if (r && e.isSameNode(r))
        return !0;
      r = r.parentNode || r.host;
    } while (r);
  }
  return !1;
}
function Hl(e) {
  return Object.assign({}, e, {
    left: e.x,
    top: e.y,
    right: e.x + e.width,
    bottom: e.y + e.height
  });
}
function tk(e, t) {
  var n = Pr(e, !1, t === "fixed");
  return n.top = n.top + e.clientTop, n.left = n.left + e.clientLeft, n.bottom = n.top + e.clientHeight, n.right = n.left + e.clientWidth, n.width = e.clientWidth, n.height = e.clientHeight, n.x = n.left, n.y = n.top, n;
}
function r_(e, t, n) {
  return t === gv ? Hl(Q$(e, n)) : qn(t) ? tk(t, n) : Hl(ek(Tn(e)));
}
function nk(e) {
  var t = xo(ul(e)), n = ["absolute", "fixed"].indexOf(Kt(e).position) >= 0, r = n && Qe(e) ? Li(e) : e;
  return qn(r) ? t.filter(function(s) {
    return qn(s) && bv(s, r) && Ht(s) !== "body";
  }) : [];
}
function rk(e, t, n, r) {
  var s = t === "clippingParents" ? nk(e) : [].concat(t), o = [].concat(s, [n]), a = o[0], c = o.reduce(function(f, p) {
    var i = r_(e, p, r);
    return f.top = Fn(i.top, f.top), f.right = ea(i.right, f.right), f.bottom = ea(i.bottom, f.bottom), f.left = Fn(i.left, f.left), f;
  }, r_(e, a, r));
  return c.width = c.right - c.left, c.height = c.bottom - c.top, c.x = c.left, c.y = c.top, c;
}
function Hr(e) {
  return e.split("-")[1];
}
function Fc(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function wv(e) {
  var t = e.reference, n = e.element, r = e.placement, s = r ? Dt(r) : null, o = r ? Hr(r) : null, a = t.x + t.width / 2 - n.width / 2, c = t.y + t.height / 2 - n.height / 2, f;
  switch (s) {
    case je:
      f = {
        x: a,
        y: t.y - n.height
      };
      break;
    case gt:
      f = {
        x: a,
        y: t.y + t.height
      };
      break;
    case yt:
      f = {
        x: t.x + t.width,
        y: c
      };
      break;
    case Fe:
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
  var p = s ? Fc(s) : null;
  if (p != null) {
    var i = p === "y" ? "height" : "width";
    switch (o) {
      case Rr:
        f[p] = f[p] - (t[i] / 2 - n[i] / 2);
        break;
      case Qo:
        f[p] = f[p] + (t[i] / 2 - n[i] / 2);
        break;
    }
  }
  return f;
}
function $v() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
function kv(e) {
  return Object.assign({}, $v(), e);
}
function xv(e, t) {
  return t.reduce(function(n, r) {
    return n[r] = e, n;
  }, {});
}
function zc(e, t) {
  t === void 0 && (t = {});
  var n = t, r = n.placement, s = r === void 0 ? e.placement : r, o = n.strategy, a = o === void 0 ? e.strategy : o, c = n.boundary, f = c === void 0 ? H$ : c, p = n.rootBoundary, i = p === void 0 ? gv : p, d = n.elementContext, u = d === void 0 ? Fr : d, l = n.altBoundary, _ = l === void 0 ? !1 : l, g = n.padding, h = g === void 0 ? 0 : g, v = kv(typeof h != "number" ? h : xv(h, Ni)), m = u === Fr ? W$ : Fr, k = e.rects.popper, b = e.elements[_ ? m : u], C = rk(qn(b) ? b : b.contextElement || Tn(e.elements.popper), f, i, a), $ = Pr(e.elements.reference), S = wv({
    reference: $,
    element: k,
    strategy: "absolute",
    placement: s
  }), y = Hl(Object.assign({}, k, S)), x = u === Fr ? y : $, A = {
    top: C.top - x.top + v.top,
    bottom: x.bottom - C.bottom + v.bottom,
    left: C.left - x.left + v.left,
    right: x.right - C.right + v.right
  }, W = e.modifiersData.offset;
  if (u === Fr && W) {
    var U = W[s];
    Object.keys(A).forEach(function(T) {
      var M = [yt, gt].indexOf(T) >= 0 ? 1 : -1, O = [je, gt].indexOf(T) >= 0 ? "y" : "x";
      A[T] += U[O] * M;
    });
  }
  return A;
}
var o_ = {
  placement: "bottom",
  modifiers: [],
  strategy: "absolute"
};
function i_() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return !t.some(function(r) {
    return !(r && typeof r.getBoundingClientRect == "function");
  });
}
function ok(e) {
  e === void 0 && (e = {});
  var t = e, n = t.defaultModifiers, r = n === void 0 ? [] : n, s = t.defaultOptions, o = s === void 0 ? o_ : s;
  return function(c, f, p) {
    p === void 0 && (p = o);
    var i = {
      placement: "bottom",
      orderedModifiers: [],
      options: Object.assign({}, o_, o),
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
          reference: qn(c) ? xo(c) : c.contextElement ? xo(c.contextElement) : [],
          popper: xo(f)
        };
        var k = K$(J$([].concat(r, i.options.modifiers)));
        return i.orderedModifiers = k.filter(function(b) {
          return b.enabled;
        }), _(), l.update();
      },
      forceUpdate: function() {
        if (!u) {
          var v = i.elements, m = v.reference, k = v.popper;
          if (!!i_(m, k)) {
            i.rects = {
              reference: N$(m, Li(k), i.options.strategy === "fixed"),
              popper: Bc(k)
            }, i.reset = !1, i.placement = i.options.placement, i.orderedModifiers.forEach(function(A) {
              return i.modifiersData[A.name] = Object.assign({}, A.data);
            });
            for (var b = 0; b < i.orderedModifiers.length; b++) {
              if (i.reset === !0) {
                i.reset = !1, b = -1;
                continue;
              }
              var C = i.orderedModifiers[b], $ = C.fn, S = C.options, y = S === void 0 ? {} : S, x = C.name;
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
      update: Z$(function() {
        return new Promise(function(h) {
          l.forceUpdate(), h(i);
        });
      }),
      destroy: function() {
        g(), u = !0;
      }
    };
    if (!i_(c, f))
      return l;
    l.setOptions(p).then(function(h) {
      !u && p.onFirstUpdate && p.onFirstUpdate(h);
    });
    function _() {
      i.orderedModifiers.forEach(function(h) {
        var v = h.name, m = h.options, k = m === void 0 ? {} : m, b = h.effect;
        if (typeof b == "function") {
          var C = b({
            state: i,
            name: v,
            instance: l,
            options: k
          }), $ = function() {
          };
          d.push(C || $);
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
var Ui = {
  passive: !0
};
function ik(e) {
  var t = e.state, n = e.instance, r = e.options, s = r.scroll, o = s === void 0 ? !0 : s, a = r.resize, c = a === void 0 ? !0 : a, f = rt(t.elements.popper), p = [].concat(t.scrollParents.reference, t.scrollParents.popper);
  return o && p.forEach(function(i) {
    i.addEventListener("scroll", n.update, Ui);
  }), c && f.addEventListener("resize", n.update, Ui), function() {
    o && p.forEach(function(i) {
      i.removeEventListener("scroll", n.update, Ui);
    }), c && f.removeEventListener("resize", n.update, Ui);
  };
}
const sk = {
  name: "eventListeners",
  enabled: !0,
  phase: "write",
  fn: function() {
  },
  effect: ik,
  data: {}
};
function ak(e) {
  var t = e.state, n = e.name;
  t.modifiersData[n] = wv({
    reference: t.rects.reference,
    element: t.rects.popper,
    strategy: "absolute",
    placement: t.placement
  });
}
const lk = {
  name: "popperOffsets",
  enabled: !0,
  phase: "read",
  fn: ak,
  data: {}
};
var ck = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function fk(e) {
  var t = e.x, n = e.y, r = window, s = r.devicePixelRatio || 1;
  return {
    x: Nr(t * s) / s || 0,
    y: Nr(n * s) / s || 0
  };
}
function s_(e) {
  var t, n = e.popper, r = e.popperRect, s = e.placement, o = e.variation, a = e.offsets, c = e.position, f = e.gpuAcceleration, p = e.adaptive, i = e.roundOffsets, d = e.isFixed, u = a.x, l = u === void 0 ? 0 : u, _ = a.y, g = _ === void 0 ? 0 : _, h = typeof i == "function" ? i({
    x: l,
    y: g
  }) : {
    x: l,
    y: g
  };
  l = h.x, g = h.y;
  var v = a.hasOwnProperty("x"), m = a.hasOwnProperty("y"), k = Fe, b = je, C = window;
  if (p) {
    var $ = Li(n), S = "clientHeight", y = "clientWidth";
    if ($ === rt(n) && ($ = Tn(n), Kt($).position !== "static" && c === "absolute" && (S = "scrollHeight", y = "scrollWidth")), $ = $, s === je || (s === Fe || s === yt) && o === Qo) {
      b = gt;
      var x = d && $ === C && C.visualViewport ? C.visualViewport.height : $[S];
      g -= x - r.height, g *= f ? 1 : -1;
    }
    if (s === Fe || (s === je || s === gt) && o === Qo) {
      k = yt;
      var A = d && $ === C && C.visualViewport ? C.visualViewport.width : $[y];
      l -= A - r.width, l *= f ? 1 : -1;
    }
  }
  var W = Object.assign({
    position: c
  }, p && ck), U = i === !0 ? fk({
    x: l,
    y: g
  }) : {
    x: l,
    y: g
  };
  if (l = U.x, g = U.y, f) {
    var T;
    return Object.assign({}, W, (T = {}, T[b] = m ? "0" : "", T[k] = v ? "0" : "", T.transform = (C.devicePixelRatio || 1) <= 1 ? "translate(" + l + "px, " + g + "px)" : "translate3d(" + l + "px, " + g + "px, 0)", T));
  }
  return Object.assign({}, W, (t = {}, t[b] = m ? g + "px" : "", t[k] = v ? l + "px" : "", t.transform = "", t));
}
function uk(e) {
  var t = e.state, n = e.options, r = n.gpuAcceleration, s = r === void 0 ? !0 : r, o = n.adaptive, a = o === void 0 ? !0 : o, c = n.roundOffsets, f = c === void 0 ? !0 : c, p = {
    placement: Dt(t.placement),
    variation: Hr(t.placement),
    popper: t.elements.popper,
    popperRect: t.rects.popper,
    gpuAcceleration: s,
    isFixed: t.options.strategy === "fixed"
  };
  t.modifiersData.popperOffsets != null && (t.styles.popper = Object.assign({}, t.styles.popper, s_(Object.assign({}, p, {
    offsets: t.modifiersData.popperOffsets,
    position: t.options.strategy,
    adaptive: a,
    roundOffsets: f
  })))), t.modifiersData.arrow != null && (t.styles.arrow = Object.assign({}, t.styles.arrow, s_(Object.assign({}, p, {
    offsets: t.modifiersData.arrow,
    position: "absolute",
    adaptive: !1,
    roundOffsets: f
  })))), t.attributes.popper = Object.assign({}, t.attributes.popper, {
    "data-popper-placement": t.placement
  });
}
const _k = {
  name: "computeStyles",
  enabled: !0,
  phase: "beforeWrite",
  fn: uk,
  data: {}
};
function pk(e) {
  var t = e.state;
  Object.keys(t.elements).forEach(function(n) {
    var r = t.styles[n] || {}, s = t.attributes[n] || {}, o = t.elements[n];
    !Qe(o) || !Ht(o) || (Object.assign(o.style, r), Object.keys(s).forEach(function(a) {
      var c = s[a];
      c === !1 ? o.removeAttribute(a) : o.setAttribute(a, c === !0 ? "" : c);
    }));
  });
}
function dk(e) {
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
      !Qe(s) || !Ht(s) || (Object.assign(s.style, c), Object.keys(o).forEach(function(f) {
        s.removeAttribute(f);
      }));
    });
  };
}
const hk = {
  name: "applyStyles",
  enabled: !0,
  phase: "write",
  fn: pk,
  effect: dk,
  requires: ["computeStyles"]
};
var vk = [sk, lk, _k, hk], mk = /* @__PURE__ */ ok({
  defaultModifiers: vk
});
function So(e, t, n) {
  return Fn(e, ea(t, n));
}
function gk(e, t, n) {
  var r = So(e, t, n);
  return r > n ? n : r;
}
var yk = function(t, n) {
  return t = typeof t == "function" ? t(Object.assign({}, n.rects, {
    placement: n.placement
  })) : t, kv(typeof t != "number" ? t : xv(t, Ni));
};
function bk(e) {
  var t, n = e.state, r = e.name, s = e.options, o = n.elements.arrow, a = n.modifiersData.popperOffsets, c = Dt(n.placement), f = Fc(c), p = [Fe, yt].indexOf(c) >= 0, i = p ? "height" : "width";
  if (!(!o || !a)) {
    var d = yk(s.padding, n), u = Bc(o), l = f === "y" ? je : Fe, _ = f === "y" ? gt : yt, g = n.rects.reference[i] + n.rects.reference[f] - a[f] - n.rects.popper[i], h = a[f] - n.rects.reference[f], v = Li(o), m = v ? f === "y" ? v.clientHeight || 0 : v.clientWidth || 0 : 0, k = g / 2 - h / 2, b = d[l], C = m - u[i] - d[_], $ = m / 2 - u[i] / 2 + k, S = So(b, $, C), y = f;
    n.modifiersData[r] = (t = {}, t[y] = S, t.centerOffset = S - $, t);
  }
}
function wk(e) {
  var t = e.state, n = e.options, r = n.element, s = r === void 0 ? "[data-popper-arrow]" : r;
  s != null && (typeof s == "string" && (s = t.elements.popper.querySelector(s), !s) || !bv(t.elements.popper, s) || (t.elements.arrow = s));
}
const $k = {
  name: "arrow",
  enabled: !0,
  phase: "main",
  fn: bk,
  effect: wk,
  requires: ["popperOffsets"],
  requiresIfExists: ["preventOverflow"]
};
function kk(e, t, n) {
  var r = Dt(e), s = [Fe, je].indexOf(r) >= 0 ? -1 : 1, o = typeof n == "function" ? n(Object.assign({}, t, {
    placement: e
  })) : n, a = o[0], c = o[1];
  return a = a || 0, c = (c || 0) * s, [Fe, yt].indexOf(r) >= 0 ? {
    x: c,
    y: a
  } : {
    x: a,
    y: c
  };
}
function xk(e) {
  var t = e.state, n = e.options, r = e.name, s = n.offset, o = s === void 0 ? [0, 0] : s, a = yv.reduce(function(i, d) {
    return i[d] = kk(d, t.rects, o), i;
  }, {}), c = a[t.placement], f = c.x, p = c.y;
  t.modifiersData.popperOffsets != null && (t.modifiersData.popperOffsets.x += f, t.modifiersData.popperOffsets.y += p), t.modifiersData[r] = a;
}
const Sk = {
  name: "offset",
  enabled: !0,
  phase: "main",
  requires: ["popperOffsets"],
  fn: xk
};
function Ck(e) {
  return e === "x" ? "y" : "x";
}
function Ek(e) {
  var t = e.state, n = e.options, r = e.name, s = n.mainAxis, o = s === void 0 ? !0 : s, a = n.altAxis, c = a === void 0 ? !1 : a, f = n.boundary, p = n.rootBoundary, i = n.altBoundary, d = n.padding, u = n.tether, l = u === void 0 ? !0 : u, _ = n.tetherOffset, g = _ === void 0 ? 0 : _, h = zc(t, {
    boundary: f,
    rootBoundary: p,
    padding: d,
    altBoundary: i
  }), v = Dt(t.placement), m = Hr(t.placement), k = !m, b = Fc(v), C = Ck(b), $ = t.modifiersData.popperOffsets, S = t.rects.reference, y = t.rects.popper, x = typeof g == "function" ? g(Object.assign({}, t.rects, {
    placement: t.placement
  })) : g, A = typeof x == "number" ? {
    mainAxis: x,
    altAxis: x
  } : Object.assign({
    mainAxis: 0,
    altAxis: 0
  }, x), W = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null, U = {
    x: 0,
    y: 0
  };
  if (!!$) {
    if (o) {
      var T, M = b === "y" ? je : Fe, O = b === "y" ? gt : yt, D = b === "y" ? "height" : "width", E = $[b], R = E + h[M], L = E - h[O], I = l ? -y[D] / 2 : 0, F = m === Rr ? S[D] : y[D], j = m === Rr ? -y[D] : -S[D], V = t.elements.arrow, X = l && V ? Bc(V) : {
        width: 0,
        height: 0
      }, H = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : $v(), Y = H[M], K = H[O], q = So(0, S[D], X[D]), G = k ? S[D] / 2 - I - q - Y - A.mainAxis : F - q - Y - A.mainAxis, ne = k ? -S[D] / 2 + I + q + K + A.mainAxis : j + q + K + A.mainAxis, re = t.elements.arrow && Li(t.elements.arrow), pe = re ? b === "y" ? re.clientTop || 0 : re.clientLeft || 0 : 0, Le = (T = W == null ? void 0 : W[b]) != null ? T : 0, te = E + G - Le - pe, bt = E + ne - Le, Oe = So(l ? ea(R, te) : R, E, l ? Fn(L, bt) : L);
      $[b] = Oe, U[b] = Oe - E;
    }
    if (c) {
      var Ae, wt = b === "x" ? je : Fe, Ye = b === "x" ? gt : yt, ee = $[C], se = C === "y" ? "height" : "width", Me = ee + h[wt], ot = ee - h[Ye], Ee = [je, Fe].indexOf(v) !== -1, it = (Ae = W == null ? void 0 : W[C]) != null ? Ae : 0, st = Ee ? Me : ee - S[se] - y[se] - it + A.altAxis, at = Ee ? ee + S[se] + y[se] - it - A.altAxis : ot, lt = l && Ee ? gk(st, ee, at) : So(l ? st : Me, ee, l ? at : ot);
      $[C] = lt, U[C] = lt - ee;
    }
    t.modifiersData[r] = U;
  }
}
const Ok = {
  name: "preventOverflow",
  enabled: !0,
  phase: "main",
  fn: Ek,
  requiresIfExists: ["offset"]
};
var Ak = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function us(e) {
  return e.replace(/left|right|bottom|top/g, function(t) {
    return Ak[t];
  });
}
var Mk = {
  start: "end",
  end: "start"
};
function a_(e) {
  return e.replace(/start|end/g, function(t) {
    return Mk[t];
  });
}
function Tk(e, t) {
  t === void 0 && (t = {});
  var n = t, r = n.placement, s = n.boundary, o = n.rootBoundary, a = n.padding, c = n.flipVariations, f = n.allowedAutoPlacements, p = f === void 0 ? yv : f, i = Hr(r), d = i ? c ? n_ : n_.filter(function(_) {
    return Hr(_) === i;
  }) : Ni, u = d.filter(function(_) {
    return p.indexOf(_) >= 0;
  });
  u.length === 0 && (u = d);
  var l = u.reduce(function(_, g) {
    return _[g] = zc(e, {
      placement: g,
      boundary: s,
      rootBoundary: o,
      padding: a
    })[Dt(g)], _;
  }, {});
  return Object.keys(l).sort(function(_, g) {
    return l[_] - l[g];
  });
}
function Dk(e) {
  if (Dt(e) === jc)
    return [];
  var t = us(e);
  return [a_(e), t, a_(t)];
}
function Lk(e) {
  var t = e.state, n = e.options, r = e.name;
  if (!t.modifiersData[r]._skip) {
    for (var s = n.mainAxis, o = s === void 0 ? !0 : s, a = n.altAxis, c = a === void 0 ? !0 : a, f = n.fallbackPlacements, p = n.padding, i = n.boundary, d = n.rootBoundary, u = n.altBoundary, l = n.flipVariations, _ = l === void 0 ? !0 : l, g = n.allowedAutoPlacements, h = t.options.placement, v = Dt(h), m = v === h, k = f || (m || !_ ? [us(h)] : Dk(h)), b = [h].concat(k).reduce(function(X, H) {
      return X.concat(Dt(H) === jc ? Tk(t, {
        placement: H,
        boundary: i,
        rootBoundary: d,
        padding: p,
        flipVariations: _,
        allowedAutoPlacements: g
      }) : H);
    }, []), C = t.rects.reference, $ = t.rects.popper, S = /* @__PURE__ */ new Map(), y = !0, x = b[0], A = 0; A < b.length; A++) {
      var W = b[A], U = Dt(W), T = Hr(W) === Rr, M = [je, gt].indexOf(U) >= 0, O = M ? "width" : "height", D = zc(t, {
        placement: W,
        boundary: i,
        rootBoundary: d,
        altBoundary: u,
        padding: p
      }), E = M ? T ? yt : Fe : T ? gt : je;
      C[O] > $[O] && (E = us(E));
      var R = us(E), L = [];
      if (o && L.push(D[U] <= 0), c && L.push(D[E] <= 0, D[R] <= 0), L.every(function(X) {
        return X;
      })) {
        x = W, y = !1;
        break;
      }
      S.set(W, L);
    }
    if (y)
      for (var I = _ ? 3 : 1, F = function(H) {
        var Y = b.find(function(K) {
          var q = S.get(K);
          if (q)
            return q.slice(0, H).every(function(G) {
              return G;
            });
        });
        if (Y)
          return x = Y, "break";
      }, j = I; j > 0; j--) {
        var V = F(j);
        if (V === "break")
          break;
      }
    t.placement !== x && (t.modifiersData[r]._skip = !0, t.placement = x, t.reset = !0);
  }
}
const Nk = {
  name: "flip",
  enabled: !0,
  phase: "main",
  fn: Lk,
  requiresIfExists: ["offset"],
  data: {
    _skip: !1
  }
};
var dr, hr, vr, Rn, ut, Ta, mr, Da, Sv;
class At extends Xe {
  constructor() {
    super(...arguments);
    P(this, Da);
    P(this, dr, !1);
    P(this, hr, void 0);
    P(this, vr, 0);
    P(this, Rn, void 0);
    P(this, ut, void 0);
    P(this, Ta, void 0);
    N(this, "hideLater", () => {
      w(this, mr).call(this), B(this, vr, window.setTimeout(this.hide.bind(this), 100));
    });
    P(this, mr, () => {
      clearTimeout(w(this, vr)), B(this, vr, 0);
    });
  }
  get isShown() {
    var n;
    return (n = w(this, Rn)) == null ? void 0 : n.classList.contains(this.constructor.CLASS_SHOW);
  }
  get tooltip() {
    return w(this, Rn) || this._ensureTooltip();
  }
  get popper() {
    return w(this, ut) ? w(this, ut) : this._createPopper();
  }
  get trigger() {
    return w(this, Ta) || this.element;
  }
  get isHover() {
    return this.options.trigger === "hover";
  }
  get elementShowClass() {
    return `with-${this.constructor.NAME}-show`;
  }
  get isDynamic() {
    return this.options.title;
  }
  init() {
    const { element: n } = this;
    n !== document.body && !n.hasAttribute("data-toggle") && n.setAttribute("data-toggle", "tooltip");
  }
  show(n) {
    return this.setOptions(n), !w(this, dr) && this.isHover && Q(this, Da, Sv).call(this), this.options.animation && this.tooltip.classList.add("fade"), this.element.classList.add(this.elementShowClass), this.tooltip.classList.add(this.constructor.CLASS_SHOW), this._createPopper().update(), !0;
  }
  hide() {
    var n, r;
    return (n = w(this, ut)) == null || n.destroy(), B(this, ut, void 0), this.element.classList.remove(this.elementShowClass), (r = w(this, Rn)) == null || r.classList.remove(this.constructor.CLASS_SHOW), !0;
  }
  toggle(n) {
    return this.isShown ? this.hide() : this.show(n);
  }
  destroy() {
    w(this, dr) && (this.element.removeEventListener("mouseleave", this.hideLater), this.tooltip.removeEventListener("mouseenter", w(this, mr)), this.tooltip.removeEventListener("mouseleave", this.hideLater)), super.destroy();
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
    var s, o;
    const n = this.constructor.TOOLTIP_CLASS;
    let r;
    if (this.isDynamic) {
      r = document.createElement("div");
      const a = this.options.className ? this.options.className.split(" ") : [];
      let c = [n, this.options.type || ""];
      c = c.concat(a), r.classList.add(...c), r[this.options.html ? "innerHTML" : "innerText"] = this.options.title || "";
    } else if (this.element) {
      const a = (s = this.element.getAttribute("href")) != null ? s : this.element.dataset.target;
      if (a != null && a.startsWith("#") && (r = document.querySelector(a)), !r) {
        const c = this.element.nextElementSibling;
        c != null && c.classList.contains(n) ? r = c : r = (o = this.element.parentNode) == null ? void 0 : o.querySelector(`.${n}`);
      }
    }
    if (this.options.arrow && (r == null || r.prepend(this._createArrow())), !r)
      throw new Error("Tooltip: Cannot find tooltip element");
    return document.body.appendChild(r), B(this, Rn, r), r;
  }
  _getPopperOptions() {
    const n = this._getArrowSize();
    return {
      modifiers: [
        Ok,
        Nk,
        { ...$k, options: {
          padding: n,
          element: ".arrow"
        } },
        {
          ...Sk,
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
    return w(this, ut) ? w(this, ut).setOptions(n) : B(this, ut, mk(this._getPopperElement(), this.tooltip, n)), w(this, ut);
  }
  _getPopperElement() {
    return w(this, hr) || B(this, hr, {
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
    }), w(this, hr);
  }
  static clear(n) {
    n instanceof Event && (n = { event: n });
    const { exclude: r } = n || {}, s = this.getAll().entries(), o = new Set(r || []);
    for (const [a, c] of s)
      o.has(a) || c.hide();
  }
}
dr = new WeakMap(), hr = new WeakMap(), vr = new WeakMap(), Rn = new WeakMap(), ut = new WeakMap(), Ta = new WeakMap(), mr = new WeakMap(), Da = new WeakSet(), Sv = function() {
  const { tooltip: n } = this;
  n.addEventListener("mouseenter", w(this, mr)), n.addEventListener("mouseleave", this.hideLater), this.element.addEventListener("mouseleave", this.hideLater), B(this, dr, !0);
}, N(At, "NAME", "tooltip"), N(At, "TOOLTIP_CLASS", "tooltip"), N(At, "CLASS_SHOW", "show"), N(At, "MENU_SELECTOR", '[data-toggle="tooltip"]:not(.disabled):not(:disabled)'), N(At, "DEFAULT", {
  animation: !0,
  placement: "top",
  strategy: "absolute",
  trigger: "hover",
  type: "darker",
  arrow: !0
});
document.addEventListener("click", function(e) {
  const n = e.target.closest(At.MENU_SELECTOR);
  if (n) {
    const r = At.ensure(n);
    r.options.trigger === "click" && r.toggle();
  } else
    At.clear({ event: e });
});
document.addEventListener("mouseover", function(e) {
  const t = e.target, n = typeof t.closest == "function" ? t.closest(At.MENU_SELECTOR) : null;
  if (!n)
    return;
  const r = At.ensure(n);
  r.isHover && r.show();
});
var Vc, $e, Cv, Co, l_, Ev = {}, Ov = [], Pk = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function yn(e, t) {
  for (var n in t)
    e[n] = t[n];
  return e;
}
function Av(e) {
  var t = e.parentNode;
  t && t.removeChild(e);
}
function ta(e, t, n) {
  var r, s, o, a = {};
  for (o in t)
    o == "key" ? r = t[o] : o == "ref" ? s = t[o] : a[o] = t[o];
  if (arguments.length > 2 && (a.children = arguments.length > 3 ? Vc.call(arguments, 2) : n), typeof e == "function" && e.defaultProps != null)
    for (o in e.defaultProps)
      a[o] === void 0 && (a[o] = e.defaultProps[o]);
  return _s(e, a, r, s, null);
}
function _s(e, t, n, r, s) {
  var o = { type: e, props: t, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: s == null ? ++Cv : s };
  return s == null && $e.vnode != null && $e.vnode(o), o;
}
function Yc(e) {
  return e.children;
}
function Eo(e, t) {
  this.props = e, this.context = t;
}
function ei(e, t) {
  if (t == null)
    return e.__ ? ei(e.__, e.__.__k.indexOf(e) + 1) : null;
  for (var n; t < e.__k.length; t++)
    if ((n = e.__k[t]) != null && n.__e != null)
      return n.__e;
  return typeof e.type == "function" ? ei(e) : null;
}
function Mv(e) {
  var t, n;
  if ((e = e.__) != null && e.__c != null) {
    for (e.__e = e.__c.base = null, t = 0; t < e.__k.length; t++)
      if ((n = e.__k[t]) != null && n.__e != null) {
        e.__e = e.__c.base = n.__e;
        break;
      }
    return Mv(e);
  }
}
function c_(e) {
  (!e.__d && (e.__d = !0) && Co.push(e) && !na.__r++ || l_ !== $e.debounceRendering) && ((l_ = $e.debounceRendering) || setTimeout)(na);
}
function na() {
  for (var e; na.__r = Co.length; )
    e = Co.sort(function(t, n) {
      return t.__v.__b - n.__v.__b;
    }), Co = [], e.some(function(t) {
      var n, r, s, o, a, c;
      t.__d && (a = (o = (n = t).__v).__e, (c = n.__P) && (r = [], (s = yn({}, o)).__v = o.__v + 1, Nv(c, o, s, n.__n, c.ownerSVGElement !== void 0, o.__h != null ? [a] : null, r, a == null ? ei(o) : a, o.__h), Hk(r, o), o.__e != a && Mv(o)));
    });
}
function Tv(e, t, n, r, s, o, a, c, f, p) {
  var i, d, u, l, _, g, h, v = r && r.__k || Ov, m = v.length;
  for (n.__k = [], i = 0; i < t.length; i++)
    if ((l = n.__k[i] = (l = t[i]) == null || typeof l == "boolean" ? null : typeof l == "string" || typeof l == "number" || typeof l == "bigint" ? _s(null, l, null, null, l) : Array.isArray(l) ? _s(Yc, { children: l }, null, null, null) : l.__b > 0 ? _s(l.type, l.props, l.key, l.ref ? l.ref : null, l.__v) : l) != null) {
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
      Nv(e, l, u = u || Ev, s, o, a, c, f, p), _ = l.__e, (d = l.ref) && u.ref != d && (h || (h = []), u.ref && h.push(u.ref, null, l), h.push(d, l.__c || _, l)), _ != null ? (g == null && (g = _), typeof l.type == "function" && l.__k === u.__k ? l.__d = f = Dv(l, f, e) : f = Lv(e, l, u, v, _, f), typeof n.type == "function" && (n.__d = f)) : f && u.__e == f && f.parentNode != e && (f = ei(u));
    }
  for (n.__e = g, i = m; i--; )
    v[i] != null && Rv(v[i], v[i]);
  if (h)
    for (i = 0; i < h.length; i++)
      Pv(h[i], h[++i], h[++i]);
}
function Dv(e, t, n) {
  for (var r, s = e.__k, o = 0; s && o < s.length; o++)
    (r = s[o]) && (r.__ = e, t = typeof r.type == "function" ? Dv(r, t, n) : Lv(n, r, r, s, r.__e, t));
  return t;
}
function Lv(e, t, n, r, s, o) {
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
function Rk(e, t, n, r, s) {
  var o;
  for (o in n)
    o === "children" || o === "key" || o in t || ra(e, o, null, n[o], r);
  for (o in t)
    s && typeof t[o] != "function" || o === "children" || o === "key" || o === "value" || o === "checked" || n[o] === t[o] || ra(e, o, t[o], n[o], r);
}
function f_(e, t, n) {
  t[0] === "-" ? e.setProperty(t, n) : e[t] = n == null ? "" : typeof n != "number" || Pk.test(t) ? n : n + "px";
}
function ra(e, t, n, r, s) {
  var o;
  e:
    if (t === "style")
      if (typeof n == "string")
        e.style.cssText = n;
      else {
        if (typeof r == "string" && (e.style.cssText = r = ""), r)
          for (t in r)
            n && t in n || f_(e.style, t, "");
        if (n)
          for (t in n)
            r && n[t] === r[t] || f_(e.style, t, n[t]);
      }
    else if (t[0] === "o" && t[1] === "n")
      o = t !== (t = t.replace(/Capture$/, "")), t = t.toLowerCase() in e ? t.toLowerCase().slice(2) : t.slice(2), e.l || (e.l = {}), e.l[t + o] = n, n ? r || e.addEventListener(t, o ? __ : u_, o) : e.removeEventListener(t, o ? __ : u_, o);
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
function u_(e) {
  this.l[e.type + !1]($e.event ? $e.event(e) : e);
}
function __(e) {
  this.l[e.type + !0]($e.event ? $e.event(e) : e);
}
function Nv(e, t, n, r, s, o, a, c, f) {
  var p, i, d, u, l, _, g, h, v, m, k, b, C, $, S, y = t.type;
  if (t.constructor !== void 0)
    return null;
  n.__h != null && (f = n.__h, c = t.__e = n.__e, t.__h = null, o = [c]), (p = $e.__b) && p(t);
  try {
    e:
      if (typeof y == "function") {
        if (h = t.props, v = (p = y.contextType) && r[p.__c], m = p ? v ? v.props.value : p.__ : r, n.__c ? g = (i = t.__c = n.__c).__ = i.__E : ("prototype" in y && y.prototype.render ? t.__c = i = new y(h, m) : (t.__c = i = new Eo(h, m), i.constructor = y, i.render = Ik), v && v.sub(i), i.props = h, i.state || (i.state = {}), i.context = m, i.__n = r, d = i.__d = !0, i.__h = [], i._sb = []), i.__s == null && (i.__s = i.state), y.getDerivedStateFromProps != null && (i.__s == i.state && (i.__s = yn({}, i.__s)), yn(i.__s, y.getDerivedStateFromProps(h, i.__s))), u = i.props, l = i.state, d)
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
        if (i.context = m, i.props = h, i.__v = t, i.__P = e, b = $e.__r, C = 0, "prototype" in y && y.prototype.render) {
          for (i.state = i.__s, i.__d = !1, b && b(t), p = i.render(i.props, i.state, i.context), $ = 0; $ < i._sb.length; $++)
            i.__h.push(i._sb[$]);
          i._sb = [];
        } else
          do
            i.__d = !1, b && b(t), p = i.render(i.props, i.state, i.context), i.state = i.__s;
          while (i.__d && ++C < 25);
        i.state = i.__s, i.getChildContext != null && (r = yn(yn({}, r), i.getChildContext())), d || i.getSnapshotBeforeUpdate == null || (_ = i.getSnapshotBeforeUpdate(u, l)), S = p != null && p.type === Yc && p.key == null ? p.props.children : p, Tv(e, Array.isArray(S) ? S : [S], t, n, r, s, o, a, c, f), i.base = t.__e, t.__h = null, i.__h.length && a.push(i), g && (i.__E = i.__ = null), i.__e = !1;
      } else
        o == null && t.__v === n.__v ? (t.__k = n.__k, t.__e = n.__e) : t.__e = Wk(n.__e, t, n, r, s, o, a, f);
    (p = $e.diffed) && p(t);
  } catch (x) {
    t.__v = null, (f || o != null) && (t.__e = c, t.__h = !!f, o[o.indexOf(c)] = null), $e.__e(x, t, n);
  }
}
function Hk(e, t) {
  $e.__c && $e.__c(t, e), e.some(function(n) {
    try {
      e = n.__h, n.__h = [], e.some(function(r) {
        r.call(n);
      });
    } catch (r) {
      $e.__e(r, n.__v);
    }
  });
}
function Wk(e, t, n, r, s, o, a, c) {
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
    if (o = o && Vc.call(e.childNodes), p = (d = n.props || Ev).dangerouslySetInnerHTML, i = u.dangerouslySetInnerHTML, !c) {
      if (o != null)
        for (d = {}, _ = 0; _ < e.attributes.length; _++)
          d[e.attributes[_].name] = e.attributes[_].value;
      (i || p) && (i && (p && i.__html == p.__html || i.__html === e.innerHTML) || (e.innerHTML = i && i.__html || ""));
    }
    if (Rk(e, u, d, s, c), i)
      t.__k = [];
    else if (_ = t.props.children, Tv(e, Array.isArray(_) ? _ : [_], t, n, r, s && l !== "foreignObject", o, a, o ? o[0] : n.__k && ei(n, 0), c), o != null)
      for (_ = o.length; _--; )
        o[_] != null && Av(o[_]);
    c || ("value" in u && (_ = u.value) !== void 0 && (_ !== e.value || l === "progress" && !_ || l === "option" && _ !== d.value) && ra(e, "value", _, d.value, !1), "checked" in u && (_ = u.checked) !== void 0 && _ !== e.checked && ra(e, "checked", _, d.checked, !1));
  }
  return e;
}
function Pv(e, t, n) {
  try {
    typeof e == "function" ? e(t) : e.current = t;
  } catch (r) {
    $e.__e(r, n);
  }
}
function Rv(e, t, n) {
  var r, s;
  if ($e.unmount && $e.unmount(e), (r = e.ref) && (r.current && r.current !== e.__e || Pv(r, null, t)), (r = e.__c) != null) {
    if (r.componentWillUnmount)
      try {
        r.componentWillUnmount();
      } catch (o) {
        $e.__e(o, t);
      }
    r.base = r.__P = null, e.__c = void 0;
  }
  if (r = e.__k)
    for (s = 0; s < r.length; s++)
      r[s] && Rv(r[s], t, n || typeof e.type != "function");
  n || e.__e == null || Av(e.__e), e.__ = e.__e = e.__d = void 0;
}
function Ik(e, t, n) {
  return this.constructor(e, n);
}
Vc = Ov.slice, $e = { __e: function(e, t, n, r) {
  for (var s, o, a; t = t.__; )
    if ((s = t.__c) && !s.__)
      try {
        if ((o = s.constructor) && o.getDerivedStateFromError != null && (s.setState(o.getDerivedStateFromError(e)), a = s.__d), s.componentDidCatch != null && (s.componentDidCatch(e, r || {}), a = s.__d), a)
          return s.__E = s;
      } catch (c) {
        e = c;
      }
  throw e;
} }, Cv = 0, Eo.prototype.setState = function(e, t) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = yn({}, this.state), typeof e == "function" && (e = e(yn({}, n), this.props)), e && yn(n, e), e != null && this.__v && (t && this._sb.push(t), c_(this));
}, Eo.prototype.forceUpdate = function(e) {
  this.__v && (this.__e = !0, e && this.__h.push(e), c_(this));
}, Eo.prototype.render = Yc, Co = [], na.__r = 0;
function Uk({
  type: e,
  key: t,
  style: n,
  bounding: r,
  offsetX: s = 0,
  offsetY: o = 0,
  component: a,
  data: c,
  hidden: f,
  props: p,
  children: i,
  onRender: d,
  ...u
}) {
  if (f)
    return null;
  let l;
  d ? l = d(e, c) : a ? l = /* @__PURE__ */ ta(a, {
    ...p
  }) : l = c;
  const { left: _, top: g, width: h, height: v } = r;
  return /* @__PURE__ */ ta("div", {
    style: { width: h, height: v, left: _ + s, top: g + o, ...n },
    ...u
  }, l, i);
}
function Bk(e, t, n = 0, r = 0) {
  const s = e.left + n, o = e.top + r;
  return !(s > t.left + t.width || o > t.top + t.height || s + e.width < t.left || o + e.height < t.top);
}
class jk extends Eo {
  render() {
    const { width: t, height: n, cells: r, left: s, top: o, visibleBounding: a, onRenderCell: c, style: f, children: p, offsetX: i = 0, offsetY: d = 0, ...u } = this.props, l = a ? r.filter((_) => Bk(_.bounding, a, i, d)) : r;
    return /* @__PURE__ */ ta("div", {
      style: { width: t, height: n, left: s, top: o, ...f },
      ...u
    }, l.map((_) => /* @__PURE__ */ ta(Uk, {
      offsetX: i,
      offsetY: d,
      ..._
    })), p);
  }
}
class p_ extends Ve {
}
N(p_, "NAME", "virtualgrid"), N(p_, "Component", jk);
var qc, ke, Hv, Wv, Oo, d_, Iv = {}, Uv = [], Fk = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function bn(e, t) {
  for (var n in t)
    e[n] = t[n];
  return e;
}
function Bv(e) {
  var t = e.parentNode;
  t && t.removeChild(e);
}
function Z(e, t, n) {
  var r, s, o, a = {};
  for (o in t)
    o == "key" ? r = t[o] : o == "ref" ? s = t[o] : a[o] = t[o];
  if (arguments.length > 2 && (a.children = arguments.length > 3 ? qc.call(arguments, 2) : n), typeof e == "function" && e.defaultProps != null)
    for (o in e.defaultProps)
      a[o] === void 0 && (a[o] = e.defaultProps[o]);
  return ps(e, a, r, s, null);
}
function ps(e, t, n, r, s) {
  var o = { type: e, props: t, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: s == null ? ++Hv : s };
  return s == null && ke.vnode != null && ke.vnode(o), o;
}
function zk() {
  return { current: null };
}
function Gc(e) {
  return e.children;
}
function Ao(e, t) {
  this.props = e, this.context = t;
}
function ti(e, t) {
  if (t == null)
    return e.__ ? ti(e.__, e.__.__k.indexOf(e) + 1) : null;
  for (var n; t < e.__k.length; t++)
    if ((n = e.__k[t]) != null && n.__e != null)
      return n.__e;
  return typeof e.type == "function" ? ti(e) : null;
}
function jv(e) {
  var t, n;
  if ((e = e.__) != null && e.__c != null) {
    for (e.__e = e.__c.base = null, t = 0; t < e.__k.length; t++)
      if ((n = e.__k[t]) != null && n.__e != null) {
        e.__e = e.__c.base = n.__e;
        break;
      }
    return jv(e);
  }
}
function h_(e) {
  (!e.__d && (e.__d = !0) && Oo.push(e) && !oa.__r++ || d_ !== ke.debounceRendering) && ((d_ = ke.debounceRendering) || setTimeout)(oa);
}
function oa() {
  for (var e; oa.__r = Oo.length; )
    e = Oo.sort(function(t, n) {
      return t.__v.__b - n.__v.__b;
    }), Oo = [], e.some(function(t) {
      var n, r, s, o, a, c;
      t.__d && (a = (o = (n = t).__v).__e, (c = n.__P) && (r = [], (s = bn({}, o)).__v = o.__v + 1, Yv(c, o, s, n.__n, c.ownerSVGElement !== void 0, o.__h != null ? [a] : null, r, a == null ? ti(o) : a, o.__h), Yk(r, o), o.__e != a && jv(o)));
    });
}
function Fv(e, t, n, r, s, o, a, c, f, p) {
  var i, d, u, l, _, g, h, v = r && r.__k || Uv, m = v.length;
  for (n.__k = [], i = 0; i < t.length; i++)
    if ((l = n.__k[i] = (l = t[i]) == null || typeof l == "boolean" ? null : typeof l == "string" || typeof l == "number" || typeof l == "bigint" ? ps(null, l, null, null, l) : Array.isArray(l) ? ps(Gc, { children: l }, null, null, null) : l.__b > 0 ? ps(l.type, l.props, l.key, l.ref ? l.ref : null, l.__v) : l) != null) {
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
      Yv(e, l, u = u || Iv, s, o, a, c, f, p), _ = l.__e, (d = l.ref) && u.ref != d && (h || (h = []), u.ref && h.push(u.ref, null, l), h.push(d, l.__c || _, l)), _ != null ? (g == null && (g = _), typeof l.type == "function" && l.__k === u.__k ? l.__d = f = zv(l, f, e) : f = Vv(e, l, u, v, _, f), typeof n.type == "function" && (n.__d = f)) : f && u.__e == f && f.parentNode != e && (f = ti(u));
    }
  for (n.__e = g, i = m; i--; )
    v[i] != null && Gv(v[i], v[i]);
  if (h)
    for (i = 0; i < h.length; i++)
      qv(h[i], h[++i], h[++i]);
}
function zv(e, t, n) {
  for (var r, s = e.__k, o = 0; s && o < s.length; o++)
    (r = s[o]) && (r.__ = e, t = typeof r.type == "function" ? zv(r, t, n) : Vv(n, r, r, s, r.__e, t));
  return t;
}
function Vv(e, t, n, r, s, o) {
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
function Vk(e, t, n, r, s) {
  var o;
  for (o in n)
    o === "children" || o === "key" || o in t || ia(e, o, null, n[o], r);
  for (o in t)
    s && typeof t[o] != "function" || o === "children" || o === "key" || o === "value" || o === "checked" || n[o] === t[o] || ia(e, o, t[o], n[o], r);
}
function v_(e, t, n) {
  t[0] === "-" ? e.setProperty(t, n) : e[t] = n == null ? "" : typeof n != "number" || Fk.test(t) ? n : n + "px";
}
function ia(e, t, n, r, s) {
  var o;
  e:
    if (t === "style")
      if (typeof n == "string")
        e.style.cssText = n;
      else {
        if (typeof r == "string" && (e.style.cssText = r = ""), r)
          for (t in r)
            n && t in n || v_(e.style, t, "");
        if (n)
          for (t in n)
            r && n[t] === r[t] || v_(e.style, t, n[t]);
      }
    else if (t[0] === "o" && t[1] === "n")
      o = t !== (t = t.replace(/Capture$/, "")), t = t.toLowerCase() in e ? t.toLowerCase().slice(2) : t.slice(2), e.l || (e.l = {}), e.l[t + o] = n, n ? r || e.addEventListener(t, o ? g_ : m_, o) : e.removeEventListener(t, o ? g_ : m_, o);
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
function m_(e) {
  this.l[e.type + !1](ke.event ? ke.event(e) : e);
}
function g_(e) {
  this.l[e.type + !0](ke.event ? ke.event(e) : e);
}
function Yv(e, t, n, r, s, o, a, c, f) {
  var p, i, d, u, l, _, g, h, v, m, k, b, C, $, S, y = t.type;
  if (t.constructor !== void 0)
    return null;
  n.__h != null && (f = n.__h, c = t.__e = n.__e, t.__h = null, o = [c]), (p = ke.__b) && p(t);
  try {
    e:
      if (typeof y == "function") {
        if (h = t.props, v = (p = y.contextType) && r[p.__c], m = p ? v ? v.props.value : p.__ : r, n.__c ? g = (i = t.__c = n.__c).__ = i.__E : ("prototype" in y && y.prototype.render ? t.__c = i = new y(h, m) : (t.__c = i = new Ao(h, m), i.constructor = y, i.render = Gk), v && v.sub(i), i.props = h, i.state || (i.state = {}), i.context = m, i.__n = r, d = i.__d = !0, i.__h = [], i._sb = []), i.__s == null && (i.__s = i.state), y.getDerivedStateFromProps != null && (i.__s == i.state && (i.__s = bn({}, i.__s)), bn(i.__s, y.getDerivedStateFromProps(h, i.__s))), u = i.props, l = i.state, d)
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
        if (i.context = m, i.props = h, i.__v = t, i.__P = e, b = ke.__r, C = 0, "prototype" in y && y.prototype.render) {
          for (i.state = i.__s, i.__d = !1, b && b(t), p = i.render(i.props, i.state, i.context), $ = 0; $ < i._sb.length; $++)
            i.__h.push(i._sb[$]);
          i._sb = [];
        } else
          do
            i.__d = !1, b && b(t), p = i.render(i.props, i.state, i.context), i.state = i.__s;
          while (i.__d && ++C < 25);
        i.state = i.__s, i.getChildContext != null && (r = bn(bn({}, r), i.getChildContext())), d || i.getSnapshotBeforeUpdate == null || (_ = i.getSnapshotBeforeUpdate(u, l)), S = p != null && p.type === Gc && p.key == null ? p.props.children : p, Fv(e, Array.isArray(S) ? S : [S], t, n, r, s, o, a, c, f), i.base = t.__e, t.__h = null, i.__h.length && a.push(i), g && (i.__E = i.__ = null), i.__e = !1;
      } else
        o == null && t.__v === n.__v ? (t.__k = n.__k, t.__e = n.__e) : t.__e = qk(n.__e, t, n, r, s, o, a, f);
    (p = ke.diffed) && p(t);
  } catch (x) {
    t.__v = null, (f || o != null) && (t.__e = c, t.__h = !!f, o[o.indexOf(c)] = null), ke.__e(x, t, n);
  }
}
function Yk(e, t) {
  ke.__c && ke.__c(t, e), e.some(function(n) {
    try {
      e = n.__h, n.__h = [], e.some(function(r) {
        r.call(n);
      });
    } catch (r) {
      ke.__e(r, n.__v);
    }
  });
}
function qk(e, t, n, r, s, o, a, c) {
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
    if (o = o && qc.call(e.childNodes), p = (d = n.props || Iv).dangerouslySetInnerHTML, i = u.dangerouslySetInnerHTML, !c) {
      if (o != null)
        for (d = {}, _ = 0; _ < e.attributes.length; _++)
          d[e.attributes[_].name] = e.attributes[_].value;
      (i || p) && (i && (p && i.__html == p.__html || i.__html === e.innerHTML) || (e.innerHTML = i && i.__html || ""));
    }
    if (Vk(e, u, d, s, c), i)
      t.__k = [];
    else if (_ = t.props.children, Fv(e, Array.isArray(_) ? _ : [_], t, n, r, s && l !== "foreignObject", o, a, o ? o[0] : n.__k && ti(n, 0), c), o != null)
      for (_ = o.length; _--; )
        o[_] != null && Bv(o[_]);
    c || ("value" in u && (_ = u.value) !== void 0 && (_ !== e.value || l === "progress" && !_ || l === "option" && _ !== d.value) && ia(e, "value", _, d.value, !1), "checked" in u && (_ = u.checked) !== void 0 && _ !== e.checked && ia(e, "checked", _, d.checked, !1));
  }
  return e;
}
function qv(e, t, n) {
  try {
    typeof e == "function" ? e(t) : e.current = t;
  } catch (r) {
    ke.__e(r, n);
  }
}
function Gv(e, t, n) {
  var r, s;
  if (ke.unmount && ke.unmount(e), (r = e.ref) && (r.current && r.current !== e.__e || qv(r, null, t)), (r = e.__c) != null) {
    if (r.componentWillUnmount)
      try {
        r.componentWillUnmount();
      } catch (o) {
        ke.__e(o, t);
      }
    r.base = r.__P = null, e.__c = void 0;
  }
  if (r = e.__k)
    for (s = 0; s < r.length; s++)
      r[s] && Gv(r[s], t, n || typeof e.type != "function");
  n || e.__e == null || Bv(e.__e), e.__ = e.__e = e.__d = void 0;
}
function Gk(e, t, n) {
  return this.constructor(e, n);
}
qc = Uv.slice, ke = { __e: function(e, t, n, r) {
  for (var s, o, a; t = t.__; )
    if ((s = t.__c) && !s.__)
      try {
        if ((o = s.constructor) && o.getDerivedStateFromError != null && (s.setState(o.getDerivedStateFromError(e)), a = s.__d), s.componentDidCatch != null && (s.componentDidCatch(e, r || {}), a = s.__d), a)
          return s.__E = s;
      } catch (c) {
        e = c;
      }
  throw e;
} }, Hv = 0, Wv = function(e) {
  return e != null && e.constructor === void 0;
}, Ao.prototype.setState = function(e, t) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = bn({}, this.state), typeof e == "function" && (e = e(bn({}, n), this.props)), e && bn(n, e), e != null && this.__v && (t && this._sb.push(t), h_(this));
}, Ao.prototype.forceUpdate = function(e) {
  this.__v && (this.__e = !0, e && this.__h.push(e), h_(this));
}, Ao.prototype.render = Gc, Oo = [], oa.__r = 0;
let Xk = (e = 21) => crypto.getRandomValues(new Uint8Array(e)).reduce((t, n) => (n &= 63, n < 36 ? t += n.toString(36) : n < 62 ? t += (n - 26).toString(36).toUpperCase() : n > 62 ? t += "-" : t += "_", t), "");
var Xc, xe, Xv, Mo, y_, Kv = {}, Zv = [], Kk = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function wn(e, t) {
  for (var n in t)
    e[n] = t[n];
  return e;
}
function Jv(e) {
  var t = e.parentNode;
  t && t.removeChild(e);
}
function b_(e, t, n) {
  var r, s, o, a = {};
  for (o in t)
    o == "key" ? r = t[o] : o == "ref" ? s = t[o] : a[o] = t[o];
  if (arguments.length > 2 && (a.children = arguments.length > 3 ? Xc.call(arguments, 2) : n), typeof e == "function" && e.defaultProps != null)
    for (o in e.defaultProps)
      a[o] === void 0 && (a[o] = e.defaultProps[o]);
  return ds(e, a, r, s, null);
}
function ds(e, t, n, r, s) {
  var o = { type: e, props: t, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: s == null ? ++Xv : s };
  return s == null && xe.vnode != null && xe.vnode(o), o;
}
function Kc(e) {
  return e.children;
}
function To(e, t) {
  this.props = e, this.context = t;
}
function ni(e, t) {
  if (t == null)
    return e.__ ? ni(e.__, e.__.__k.indexOf(e) + 1) : null;
  for (var n; t < e.__k.length; t++)
    if ((n = e.__k[t]) != null && n.__e != null)
      return n.__e;
  return typeof e.type == "function" ? ni(e) : null;
}
function Qv(e) {
  var t, n;
  if ((e = e.__) != null && e.__c != null) {
    for (e.__e = e.__c.base = null, t = 0; t < e.__k.length; t++)
      if ((n = e.__k[t]) != null && n.__e != null) {
        e.__e = e.__c.base = n.__e;
        break;
      }
    return Qv(e);
  }
}
function w_(e) {
  (!e.__d && (e.__d = !0) && Mo.push(e) && !sa.__r++ || y_ !== xe.debounceRendering) && ((y_ = xe.debounceRendering) || setTimeout)(sa);
}
function sa() {
  for (var e; sa.__r = Mo.length; )
    e = Mo.sort(function(t, n) {
      return t.__v.__b - n.__v.__b;
    }), Mo = [], e.some(function(t) {
      var n, r, s, o, a, c;
      t.__d && (a = (o = (n = t).__v).__e, (c = n.__P) && (r = [], (s = wn({}, o)).__v = o.__v + 1, rm(c, o, s, n.__n, c.ownerSVGElement !== void 0, o.__h != null ? [a] : null, r, a == null ? ni(o) : a, o.__h), Jk(r, o), o.__e != a && Qv(o)));
    });
}
function em(e, t, n, r, s, o, a, c, f, p) {
  var i, d, u, l, _, g, h, v = r && r.__k || Zv, m = v.length;
  for (n.__k = [], i = 0; i < t.length; i++)
    if ((l = n.__k[i] = (l = t[i]) == null || typeof l == "boolean" ? null : typeof l == "string" || typeof l == "number" || typeof l == "bigint" ? ds(null, l, null, null, l) : Array.isArray(l) ? ds(Kc, { children: l }, null, null, null) : l.__b > 0 ? ds(l.type, l.props, l.key, l.ref ? l.ref : null, l.__v) : l) != null) {
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
      rm(e, l, u = u || Kv, s, o, a, c, f, p), _ = l.__e, (d = l.ref) && u.ref != d && (h || (h = []), u.ref && h.push(u.ref, null, l), h.push(d, l.__c || _, l)), _ != null ? (g == null && (g = _), typeof l.type == "function" && l.__k === u.__k ? l.__d = f = tm(l, f, e) : f = nm(e, l, u, v, _, f), typeof n.type == "function" && (n.__d = f)) : f && u.__e == f && f.parentNode != e && (f = ni(u));
    }
  for (n.__e = g, i = m; i--; )
    v[i] != null && im(v[i], v[i]);
  if (h)
    for (i = 0; i < h.length; i++)
      om(h[i], h[++i], h[++i]);
}
function tm(e, t, n) {
  for (var r, s = e.__k, o = 0; s && o < s.length; o++)
    (r = s[o]) && (r.__ = e, t = typeof r.type == "function" ? tm(r, t, n) : nm(n, r, r, s, r.__e, t));
  return t;
}
function nm(e, t, n, r, s, o) {
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
function Zk(e, t, n, r, s) {
  var o;
  for (o in n)
    o === "children" || o === "key" || o in t || aa(e, o, null, n[o], r);
  for (o in t)
    s && typeof t[o] != "function" || o === "children" || o === "key" || o === "value" || o === "checked" || n[o] === t[o] || aa(e, o, t[o], n[o], r);
}
function $_(e, t, n) {
  t[0] === "-" ? e.setProperty(t, n) : e[t] = n == null ? "" : typeof n != "number" || Kk.test(t) ? n : n + "px";
}
function aa(e, t, n, r, s) {
  var o;
  e:
    if (t === "style")
      if (typeof n == "string")
        e.style.cssText = n;
      else {
        if (typeof r == "string" && (e.style.cssText = r = ""), r)
          for (t in r)
            n && t in n || $_(e.style, t, "");
        if (n)
          for (t in n)
            r && n[t] === r[t] || $_(e.style, t, n[t]);
      }
    else if (t[0] === "o" && t[1] === "n")
      o = t !== (t = t.replace(/Capture$/, "")), t = t.toLowerCase() in e ? t.toLowerCase().slice(2) : t.slice(2), e.l || (e.l = {}), e.l[t + o] = n, n ? r || e.addEventListener(t, o ? x_ : k_, o) : e.removeEventListener(t, o ? x_ : k_, o);
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
function k_(e) {
  this.l[e.type + !1](xe.event ? xe.event(e) : e);
}
function x_(e) {
  this.l[e.type + !0](xe.event ? xe.event(e) : e);
}
function rm(e, t, n, r, s, o, a, c, f) {
  var p, i, d, u, l, _, g, h, v, m, k, b, C, $, S, y = t.type;
  if (t.constructor !== void 0)
    return null;
  n.__h != null && (f = n.__h, c = t.__e = n.__e, t.__h = null, o = [c]), (p = xe.__b) && p(t);
  try {
    e:
      if (typeof y == "function") {
        if (h = t.props, v = (p = y.contextType) && r[p.__c], m = p ? v ? v.props.value : p.__ : r, n.__c ? g = (i = t.__c = n.__c).__ = i.__E : ("prototype" in y && y.prototype.render ? t.__c = i = new y(h, m) : (t.__c = i = new To(h, m), i.constructor = y, i.render = ex), v && v.sub(i), i.props = h, i.state || (i.state = {}), i.context = m, i.__n = r, d = i.__d = !0, i.__h = [], i._sb = []), i.__s == null && (i.__s = i.state), y.getDerivedStateFromProps != null && (i.__s == i.state && (i.__s = wn({}, i.__s)), wn(i.__s, y.getDerivedStateFromProps(h, i.__s))), u = i.props, l = i.state, d)
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
        if (i.context = m, i.props = h, i.__v = t, i.__P = e, b = xe.__r, C = 0, "prototype" in y && y.prototype.render) {
          for (i.state = i.__s, i.__d = !1, b && b(t), p = i.render(i.props, i.state, i.context), $ = 0; $ < i._sb.length; $++)
            i.__h.push(i._sb[$]);
          i._sb = [];
        } else
          do
            i.__d = !1, b && b(t), p = i.render(i.props, i.state, i.context), i.state = i.__s;
          while (i.__d && ++C < 25);
        i.state = i.__s, i.getChildContext != null && (r = wn(wn({}, r), i.getChildContext())), d || i.getSnapshotBeforeUpdate == null || (_ = i.getSnapshotBeforeUpdate(u, l)), S = p != null && p.type === Kc && p.key == null ? p.props.children : p, em(e, Array.isArray(S) ? S : [S], t, n, r, s, o, a, c, f), i.base = t.__e, t.__h = null, i.__h.length && a.push(i), g && (i.__E = i.__ = null), i.__e = !1;
      } else
        o == null && t.__v === n.__v ? (t.__k = n.__k, t.__e = n.__e) : t.__e = Qk(n.__e, t, n, r, s, o, a, f);
    (p = xe.diffed) && p(t);
  } catch (x) {
    t.__v = null, (f || o != null) && (t.__e = c, t.__h = !!f, o[o.indexOf(c)] = null), xe.__e(x, t, n);
  }
}
function Jk(e, t) {
  xe.__c && xe.__c(t, e), e.some(function(n) {
    try {
      e = n.__h, n.__h = [], e.some(function(r) {
        r.call(n);
      });
    } catch (r) {
      xe.__e(r, n.__v);
    }
  });
}
function Qk(e, t, n, r, s, o, a, c) {
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
    if (o = o && Xc.call(e.childNodes), p = (d = n.props || Kv).dangerouslySetInnerHTML, i = u.dangerouslySetInnerHTML, !c) {
      if (o != null)
        for (d = {}, _ = 0; _ < e.attributes.length; _++)
          d[e.attributes[_].name] = e.attributes[_].value;
      (i || p) && (i && (p && i.__html == p.__html || i.__html === e.innerHTML) || (e.innerHTML = i && i.__html || ""));
    }
    if (Zk(e, u, d, s, c), i)
      t.__k = [];
    else if (_ = t.props.children, em(e, Array.isArray(_) ? _ : [_], t, n, r, s && l !== "foreignObject", o, a, o ? o[0] : n.__k && ni(n, 0), c), o != null)
      for (_ = o.length; _--; )
        o[_] != null && Jv(o[_]);
    c || ("value" in u && (_ = u.value) !== void 0 && (_ !== e.value || l === "progress" && !_ || l === "option" && _ !== d.value) && aa(e, "value", _, d.value, !1), "checked" in u && (_ = u.checked) !== void 0 && _ !== e.checked && aa(e, "checked", _, d.checked, !1));
  }
  return e;
}
function om(e, t, n) {
  try {
    typeof e == "function" ? e(t) : e.current = t;
  } catch (r) {
    xe.__e(r, n);
  }
}
function im(e, t, n) {
  var r, s;
  if (xe.unmount && xe.unmount(e), (r = e.ref) && (r.current && r.current !== e.__e || om(r, null, t)), (r = e.__c) != null) {
    if (r.componentWillUnmount)
      try {
        r.componentWillUnmount();
      } catch (o) {
        xe.__e(o, t);
      }
    r.base = r.__P = null, e.__c = void 0;
  }
  if (r = e.__k)
    for (s = 0; s < r.length; s++)
      r[s] && im(r[s], t, n || typeof e.type != "function");
  n || e.__e == null || Jv(e.__e), e.__ = e.__e = e.__d = void 0;
}
function ex(e, t, n) {
  return this.constructor(e, n);
}
Xc = Zv.slice, xe = { __e: function(e, t, n, r) {
  for (var s, o, a; t = t.__; )
    if ((s = t.__c) && !s.__)
      try {
        if ((o = s.constructor) && o.getDerivedStateFromError != null && (s.setState(o.getDerivedStateFromError(e)), a = s.__d), s.componentDidCatch != null && (s.componentDidCatch(e, r || {}), a = s.__d), a)
          return s.__E = s;
      } catch (c) {
        e = c;
      }
  throw e;
} }, Xv = 0, To.prototype.setState = function(e, t) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = wn({}, this.state), typeof e == "function" && (e = e(wn({}, n), this.props)), e && wn(n, e), e != null && this.__v && (t && this._sb.push(t), w_(this));
}, To.prototype.forceUpdate = function(e) {
  this.__v && (this.__e = !0, e && this.__h.push(e), w_(this));
}, To.prototype.render = Kc, Mo = [], sa.__r = 0;
var Hn, Wn;
class S_ extends To {
  constructor(n) {
    var r;
    super(n);
    P(this, Hn, 0);
    P(this, Wn, null);
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
      r && (w(this, Hn) && cancelAnimationFrame(w(this, Hn)), B(this, Hn, requestAnimationFrame(() => {
        const s = this.props.type === "horz" ? n.clientX - r.x : n.clientY - r.y;
        this.scroll(r.offset + s * this.props.scrollSize / this.props.clientSize), B(this, Hn, 0);
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
    n && (B(this, Wn, typeof n == "string" ? document : n.current), w(this, Wn).addEventListener("wheel", this._handleWheel, { passive: !1 }));
  }
  componentWillUnmount() {
    document.removeEventListener("mousemove", this._handleMouseMove), document.removeEventListener("mouseup", this._handleMouseUp), w(this, Wn) && w(this, Wn).removeEventListener("wheel", this._handleWheel);
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
    return r === "horz" ? (_.height = s, _.width = n, g.width = this.barSize, g.left = Math.round(Math.min(d, u) * (n - g.width) / d)) : (_.width = s, _.height = n, g.height = this.barSize, g.top = Math.round(Math.min(d, u) * (n - g.height) / d)), /* @__PURE__ */ b_("div", {
      className: z("scrollbar", o, {
        "is-vert": r === "vert",
        "is-horz": r === "horz",
        "is-dragging": l
      }),
      style: _,
      onMouseDown: this._handleClick
    }, /* @__PURE__ */ b_("div", {
      className: "scrollbar-bar",
      style: g,
      onMouseDown: this._handleMouseDown
    }));
  }
}
Hn = new WeakMap(), Wn = new WeakMap();
function C_(e, t, n) {
  return e && (t && (e = Math.max(t, e)), n && (e = Math.min(n, e))), e;
}
function sm({ col: e, className: t, height: n, row: r, onRenderCell: s, style: o, outerStyle: a, children: c, outerClass: f, ...p }) {
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
  }], g = ["dtable-cell-content", t], h = [(x = c != null ? c : (y = r.data) == null ? void 0 : y[e.name]) != null ? x : ""], v = s ? s(h, { row: r, col: e }, Z) : h, m = [], k = [], b = {}, C = {};
  let $ = "div";
  v == null || v.forEach((A) => {
    var W;
    if (typeof A == "object" && A && !Wv(A) && ("html" in A || "className" in A || "style" in A || "attrs" in A || "children" in A || "tagName" in A)) {
      const U = A.outer ? m : k;
      A.html ? U.push(/* @__PURE__ */ Z("div", {
        className: z("dtable-cell-html", A.className),
        style: A.style,
        dangerouslySetInnerHTML: { __html: A.html },
        ...(W = A.attrs) != null ? W : {}
      })) : (A.style && Object.assign(A.outer ? i : l, A.style), A.className && (A.outer ? _ : g).push(A.className), A.children && U.push(A.children), A.attrs && Object.assign(A.outer ? b : C, A.attrs)), A.tagName && !A.outer && ($ = A.tagName);
    } else
      k.push(A);
  });
  const S = $;
  return /* @__PURE__ */ Z("div", {
    className: z(_),
    style: i,
    "data-col": e.name,
    ...p,
    ...b
  }, k.length > 0 && /* @__PURE__ */ Z(S, {
    className: z(g),
    style: l,
    ...C
  }, k), m);
}
function vl({ row: e, className: t, top: n = 0, left: r = 0, width: s, height: o, cols: a, CellComponent: c = sm, onRenderCell: f }) {
  return /* @__PURE__ */ Z("div", {
    className: z("dtable-cells", t),
    style: { top: n, left: r, width: s, height: o }
  }, a.map((p) => p.visible ? /* @__PURE__ */ Z(c, {
    key: p.name,
    col: p,
    row: e,
    onRenderCell: f
  }) : null));
}
function am({
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
  CellComponent: u = sm,
  onRenderCell: l,
  style: _,
  ...g
}) {
  let h = null;
  s != null && s.length && (h = /* @__PURE__ */ Z(vl, {
    className: "dtable-fixed-left",
    cols: s,
    width: c,
    row: e,
    CellComponent: u,
    onRenderCell: l
  }));
  let v = null;
  a != null && a.length && (v = /* @__PURE__ */ Z(vl, {
    className: "dtable-flexable",
    cols: a,
    left: c - d,
    width: Math.max(f, p),
    row: e,
    CellComponent: u,
    onRenderCell: l
  }));
  let m = null;
  o != null && o.length && (m = /* @__PURE__ */ Z(vl, {
    className: "dtable-fixed-right",
    cols: o,
    left: c + f,
    width: i,
    row: e,
    CellComponent: u,
    onRenderCell: l
  }));
  const k = { top: n, height: r, lineHeight: `${r - 2}px`, ..._ };
  return /* @__PURE__ */ Z("div", {
    className: z("dtable-row", t),
    style: k,
    "data-id": e.id,
    ...g
  }, h, v, m);
}
function tx({ height: e, onRenderRow: t, ...n }) {
  const r = {
    height: e,
    ...n,
    row: { id: "HEADER", index: -1, top: 0 },
    className: "dtable-in-header",
    top: 0
  };
  if (t) {
    const s = t({ props: r }, Z);
    s && Object.assign(r, s);
  }
  return /* @__PURE__ */ Z("div", {
    className: "dtable-header",
    style: { height: e }
  }, /* @__PURE__ */ Z(am, {
    ...r
  }));
}
function nx({
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
  return t = { ...t, top: n, height: s }, /* @__PURE__ */ Z("div", {
    className: z("dtable-rows", e),
    style: t
  }, r.map((p) => {
    const i = {
      className: `dtable-row-${p.index % 2 ? "odd" : "even"}`,
      row: p,
      top: p.top - a,
      height: o,
      ...f
    }, d = c == null ? void 0 : c({ props: i, row: p }, Z);
    return d && Object.assign(i, d), /* @__PURE__ */ Z(am, {
      ...i
    });
  }));
}
const la = /* @__PURE__ */ new Map(), ca = [];
function lm(e, t) {
  const { name: n } = e;
  if (!(t != null && t.override) && la.has(n))
    throw new Error(`DTable: Plugin with name ${n} already exists`);
  la.set(n, e), (t == null ? void 0 : t.buildIn) && !ca.includes(n) && ca.push(n);
}
function Ir(e, t) {
  lm(e, t);
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
function cm(e) {
  return la.delete(e);
}
function rx(e) {
  if (typeof e == "string") {
    const t = la.get(e);
    return t || console.warn(`DTable: Cannot found plugin "${e}"`), t;
  }
  if (typeof e == "function" && "plugin" in e)
    return e.plugin;
  if (typeof e == "object")
    return e;
  console.warn("DTable: Invalid plugin", e);
}
function fm(e, t, n) {
  return t.forEach((r) => {
    var o;
    if (!r)
      return;
    const s = rx(r);
    !s || n.has(s.name) || ((o = s.plugins) != null && o.length && fm(e, s.plugins, n), e.push(s), n.add(s.name));
  }), e;
}
function ox(e = [], t = !0) {
  return t && ca.length && e.unshift(...ca), e != null && e.length ? fm([], e, /* @__PURE__ */ new Set()) : [];
}
function E_() {
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
var In, gr, rn, St, on, Se, _t, Ct, yr, $i, ki, Ft, br, wr, La, um, Na, _m, Pa, pm, Ra, dm, xi, Il, Ha, Wa, Si, Ci, Ia, Ua, Ba, hm, ja, vm, Fa, mm;
class Wl extends Ao {
  constructor(n) {
    var r;
    super(n);
    P(this, La);
    P(this, Na);
    P(this, Pa);
    P(this, Ra);
    P(this, xi);
    P(this, Ba);
    P(this, ja);
    P(this, Fa);
    N(this, "ref", zk());
    P(this, In, 0);
    P(this, gr, void 0);
    P(this, rn, !1);
    P(this, St, void 0);
    P(this, on, void 0);
    P(this, Se, []);
    P(this, _t, void 0);
    P(this, Ct, /* @__PURE__ */ new Map());
    P(this, yr, {});
    P(this, $i, void 0);
    P(this, ki, []);
    N(this, "updateLayout", () => {
      w(this, In) && cancelAnimationFrame(w(this, In)), B(this, In, requestAnimationFrame(() => {
        B(this, _t, void 0), this.forceUpdate(), B(this, In, 0);
      }));
    });
    P(this, Ft, (n, r) => {
      r = r || n.type;
      const s = w(this, Ct).get(r);
      if (!!(s != null && s.length)) {
        for (const o of s)
          if (o.call(this, n) === !1) {
            n.stopPropagation(), n.preventDefault();
            break;
          }
      }
    });
    P(this, br, (n) => {
      w(this, Ft).call(this, n, `window_${n.type}`);
    });
    P(this, wr, (n) => {
      w(this, Ft).call(this, n, `document_${n.type}`);
    });
    P(this, Ha, (n, r) => {
      if (this.options.onRenderRow) {
        const s = this.options.onRenderRow.call(this, n, r);
        s && Object.assign(n.props, s);
      }
      return w(this, Se).forEach((s) => {
        if (s.onRenderRow) {
          const o = s.onRenderRow.call(this, n, r);
          o && Object.assign(n.props, o);
        }
      }), n.props;
    });
    P(this, Wa, (n, r) => (this.options.onRenderHeaderRow && (n.props = this.options.onRenderHeaderRow.call(this, n, r)), w(this, Se).forEach((s) => {
      s.onRenderHeaderRow && (n.props = s.onRenderHeaderRow.call(this, n, r));
    }), n.props));
    P(this, Si, (n, r, s) => {
      const { row: o, col: a } = r;
      n[0] = this.getCellValue(o, a);
      const c = o.id === "HEADER" ? "onRenderHeaderCell" : "onRenderCell";
      return a.setting[c] && (n = a.setting[c].call(this, n, r, s)), this.options[c] && (n = this.options[c].call(this, n, r, s)), w(this, Se).forEach((f) => {
        f[c] && (n = f[c].call(this, n, r, s));
      }), n;
    });
    P(this, Ci, (n, r) => {
      r === "horz" ? this.scroll({ scrollLeft: n }) : this.scroll({ scrollTop: n });
    });
    P(this, Ia, (n) => {
      var c, f, p, i, d;
      const r = this.getPointerInfo(n);
      if (!r)
        return;
      const { rowID: s, colName: o, cellElement: a } = r;
      if (s === "HEADER")
        a && ((c = this.options.onHeaderCellClick) == null || c.call(this, n, { colName: o, element: a }), w(this, Se).forEach((u) => {
          var l;
          (l = u.onHeaderCellClick) == null || l.call(this, n, { colName: o, element: a });
        }));
      else {
        const { rowElement: u } = r, l = this.layout.visibleRows.find((_) => _.id === s);
        if (a) {
          if (((f = this.options.onCellClick) == null ? void 0 : f.call(this, n, { colName: o, rowID: s, rowInfo: l, element: a, rowElement: u })) === !0)
            return;
          for (const _ of w(this, Se))
            if (((p = _.onCellClick) == null ? void 0 : p.call(this, n, { colName: o, rowID: s, rowInfo: l, element: a, rowElement: u })) === !0)
              return;
        }
        if (((i = this.options.onRowClick) == null ? void 0 : i.call(this, n, { rowID: s, rowInfo: l, element: u })) === !0)
          return;
        for (const _ of w(this, Se))
          if (((d = _.onRowClick) == null ? void 0 : d.call(this, n, { rowID: s, rowInfo: l, element: u })) === !0)
            return;
      }
    });
    P(this, Ua, (n) => {
      const r = n.key.toLowerCase();
      if (["pageup", "pagedown", "home", "end"].includes(r))
        return !this.scroll({ to: r.replace("page", "") });
    });
    B(this, gr, (r = n.id) != null ? r : `dtable-${Xk(10)}`), this.state = { scrollTop: 0, scrollLeft: 0, renderCount: 0 }, B(this, on, Object.freeze(ox(n.plugins))), w(this, on).forEach((s) => {
      var f;
      const { methods: o, data: a, state: c } = s;
      o && Object.entries(o).forEach(([p, i]) => {
        typeof i == "function" && Object.assign(this, { [p]: i.bind(this) });
      }), a && Object.assign(w(this, yr), a.call(this)), c && Object.assign(this.state, c.call(this)), (f = s.onCreate) == null || f.call(this, s);
    });
  }
  get options() {
    var n;
    return ((n = w(this, _t)) == null ? void 0 : n.options) || w(this, St) || E_();
  }
  get plugins() {
    return w(this, Se);
  }
  get layout() {
    return w(this, _t);
  }
  get id() {
    return w(this, gr);
  }
  get data() {
    return w(this, yr);
  }
  get parent() {
    var n, r;
    return (r = this.props.parent) != null ? r : (n = this.ref.current) == null ? void 0 : n.parentElement;
  }
  componentWillReceiveProps() {
    B(this, St, void 0);
  }
  componentDidMount() {
    if (w(this, rn) ? this.forceUpdate() : Q(this, xi, Il).call(this), w(this, Se).forEach((n) => {
      let { events: r } = n;
      !r || (typeof r == "function" && (r = r.call(this)), Object.entries(r).forEach(([s, o]) => {
        o && this.on(s, o);
      }));
    }), this.on("click", w(this, Ia)), this.on("keydown", w(this, Ua)), this.options.responsive) {
      if (typeof ResizeObserver < "u") {
        const { parent: n } = this;
        if (n) {
          const r = new ResizeObserver(this.updateLayout);
          r.observe(n), B(this, $i, r);
        }
      }
      this.on("window_resize", this.updateLayout);
    }
    w(this, Se).forEach((n) => {
      var r;
      (r = n.onMounted) == null || r.call(this);
    });
  }
  componentDidUpdate() {
    w(this, rn) ? Q(this, xi, Il).call(this) : w(this, Se).forEach((n) => {
      var r;
      (r = n.onUpdated) == null || r.call(this);
    });
  }
  componentWillUnmount() {
    var r;
    (r = w(this, $i)) == null || r.disconnect();
    const { current: n } = this.ref;
    if (n)
      for (const s of w(this, Ct).keys())
        s.startsWith("window_") ? window.removeEventListener(s.replace("window_", ""), w(this, br)) : s.startsWith("document_") ? document.removeEventListener(s.replace("document_", ""), w(this, wr)) : n.removeEventListener(s, w(this, Ft));
    w(this, Se).forEach((s) => {
      var o;
      (o = s.onUnmounted) == null || o.call(this);
    }), w(this, on).forEach((s) => {
      var o;
      (o = s.onDestory) == null || o.call(this);
    }), B(this, yr, {}), w(this, Ct).clear();
  }
  on(n, r, s) {
    var a;
    s && (n = `${s}_${n}`);
    const o = w(this, Ct).get(n);
    o ? o.push(r) : (w(this, Ct).set(n, [r]), n.startsWith("window_") ? window.addEventListener(n.replace("window_", ""), w(this, br)) : n.startsWith("document_") ? document.addEventListener(n.replace("document_", ""), w(this, wr)) : (a = this.ref.current) == null || a.addEventListener(n, w(this, Ft)));
  }
  off(n, r, s) {
    var c;
    s && (n = `${s}_${n}`);
    const o = w(this, Ct).get(n);
    if (!o)
      return;
    const a = o.indexOf(r);
    a >= 0 && o.splice(a, 1), o.length || (w(this, Ct).delete(n), n.startsWith("window_") ? window.removeEventListener(n.replace("window_", ""), w(this, br)) : n.startsWith("document_") ? document.removeEventListener(n.replace("document_", ""), w(this, wr)) : (c = this.ref.current) == null || c.removeEventListener(n, w(this, Ft)));
  }
  emitCustomEvent(n, r) {
    w(this, Ft).call(this, r instanceof Event ? r : new CustomEvent(n, { detail: r }), n);
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
    if (!w(this, St))
      return;
    typeof n == "function" && (r = n, n = {});
    const { dirtyType: s, state: o } = n;
    if (s === "layout")
      B(this, _t, void 0);
    else if (s === "options") {
      if (B(this, St, void 0), !w(this, _t))
        return;
      B(this, _t, void 0);
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
    return (o = Ei(w(this, ki), n, r, s, this.options.lang)) != null ? o : `{i18n:${n}}`;
  }
  render() {
    var l;
    const n = Q(this, Fa, mm).call(this), { className: r, rowHover: s, colHover: o, cellHover: a, bordered: c, striped: f, scrollbarHover: p } = this.options, i = { width: n == null ? void 0 : n.width, height: n == null ? void 0 : n.height }, d = ["dtable", r, {
      "dtable-hover-row": s,
      "dtable-hover-col": o,
      "dtable-hover-cell": a,
      "dtable-bordered": c,
      "dtable-striped": f,
      "dtable-scrolled-down": ((l = n == null ? void 0 : n.scrollTop) != null ? l : 0) > 0,
      "scrollbar-hover": p
    }], u = [];
    return n && w(this, Se).forEach((_) => {
      var h;
      const g = (h = _.onRender) == null ? void 0 : h.call(this, n);
      !g || (g.style && Object.assign(i, g.style), g.className && d.push(g.className), g.children && u.push(g.children));
    }), /* @__PURE__ */ Z("div", {
      id: w(this, gr),
      className: z(d),
      style: i,
      ref: this.ref,
      tabIndex: -1
    }, n && Q(this, La, um).call(this, n), n && Q(this, Na, _m).call(this, n), n && Q(this, Pa, pm).call(this, n), n && Q(this, Ra, dm).call(this, n));
  }
}
In = new WeakMap(), gr = new WeakMap(), rn = new WeakMap(), St = new WeakMap(), on = new WeakMap(), Se = new WeakMap(), _t = new WeakMap(), Ct = new WeakMap(), yr = new WeakMap(), $i = new WeakMap(), ki = new WeakMap(), Ft = new WeakMap(), br = new WeakMap(), wr = new WeakMap(), La = new WeakSet(), um = function(n) {
  const { header: r, colsInfo: s, headerHeight: o, scrollLeft: a } = n;
  if (!r)
    return null;
  if (r === !0)
    return /* @__PURE__ */ Z(tx, {
      scrollLeft: a,
      height: o,
      onRenderCell: w(this, Si),
      onRenderRow: w(this, Wa),
      ...s
    });
  const c = Array.isArray(r) ? r : [r];
  return /* @__PURE__ */ Z(yl, {
    className: "dtable-header",
    style: { height: o },
    renders: c,
    generateArgs: [n],
    generatorThis: this
  });
}, Na = new WeakSet(), _m = function(n) {
  const { headerHeight: r, rowsHeight: s, visibleRows: o, rowHeight: a, colsInfo: c, scrollLeft: f, scrollTop: p } = n;
  return /* @__PURE__ */ Z(nx, {
    top: r,
    height: s,
    rows: o,
    rowHeight: a,
    scrollLeft: f,
    scrollTop: p,
    onRenderCell: w(this, Si),
    onRenderRow: w(this, Ha),
    ...c
  });
}, Pa = new WeakSet(), pm = function(n) {
  const { footer: r } = n;
  if (!r)
    return null;
  const s = typeof r == "function" ? r.call(this, n) : Array.isArray(r) ? r : [r];
  return /* @__PURE__ */ Z(yl, {
    className: "dtable-footer",
    style: { height: n.footerHeight, top: n.rowsHeight + n.headerHeight },
    renders: s,
    generateArgs: [n],
    generatorThis: this,
    generators: n.footerGenerators
  });
}, Ra = new WeakSet(), dm = function(n) {
  const r = [], { scrollLeft: s, colsInfo: o, scrollTop: a, rowsHeight: c, rowsHeightTotal: f, footerHeight: p } = n, { scrollColsWidth: i, scrollWidth: d } = o, { scrollbarSize: u = 12, horzScrollbarPos: l } = this.options;
  return i > d && r.push(
    /* @__PURE__ */ Z(S_, {
      key: "horz",
      type: "horz",
      scrollPos: s,
      scrollSize: i,
      clientSize: d,
      onScroll: w(this, Ci),
      left: o.fixedLeftWidth,
      bottom: (l === "inside" ? 0 : -u) + p,
      size: u,
      wheelContainer: this.ref
    })
  ), f > c && r.push(
    /* @__PURE__ */ Z(S_, {
      key: "vert",
      type: "vert",
      scrollPos: a,
      scrollSize: f,
      clientSize: c,
      onScroll: w(this, Ci),
      right: 0,
      size: u,
      top: n.headerHeight,
      wheelContainer: this.ref
    })
  ), r.length ? r : null;
}, xi = new WeakSet(), Il = function() {
  var n;
  B(this, rn, !1), (n = this.options.afterRender) == null || n.call(this), w(this, Se).forEach((r) => {
    var s;
    return (s = r.afterRender) == null ? void 0 : s.call(this);
  });
}, Ha = new WeakMap(), Wa = new WeakMap(), Si = new WeakMap(), Ci = new WeakMap(), Ia = new WeakMap(), Ua = new WeakMap(), Ba = new WeakSet(), hm = function() {
  if (w(this, St))
    return !1;
  const r = { ...E_(), ...w(this, on).reduce((s, o) => {
    const { defaultOptions: a } = o;
    return a && Object.assign(s, a), s;
  }, {}), ...this.props };
  return B(this, St, r), B(this, Se, w(this, on).reduce((s, o) => {
    const { when: a, options: c } = o;
    return (!a || a(r)) && (s.push(o), c && Object.assign(r, typeof c == "function" ? c.call(this, r) : c)), s;
  }, [])), B(this, ki, [this.options.i18n, ...this.plugins.map((s) => s.i18n)].filter(Boolean)), !0;
}, ja = new WeakSet(), vm = function() {
  var V, X;
  const { plugins: n } = this;
  let r = w(this, St);
  const s = {
    flex: /* @__PURE__ */ Z("div", {
      style: "flex:auto"
    }),
    divider: /* @__PURE__ */ Z("div", {
      style: "width:1px;margin:var(--space);background:var(--color-border);height:50%"
    })
  };
  n.forEach((H) => {
    var K;
    const Y = (K = H.beforeLayout) == null ? void 0 : K.call(this, r);
    Y && (r = { ...r, ...Y }), Object.assign(s, H.footer);
  });
  const { defaultColWidth: o, minColWidth: a, maxColWidth: c } = r, f = [], p = [], i = [], d = {}, u = [], l = [];
  let _ = 0, g = 0, h = 0;
  r.cols.forEach((H) => {
    var bt, Oe, Ae;
    if (H.hidden)
      return;
    const {
      name: Y,
      type: K = "",
      fixed: q = !1,
      flex: G = !1,
      width: ne = o,
      minWidth: re = a,
      maxWidth: pe = c,
      ...Le
    } = H, te = {
      name: Y,
      type: K,
      setting: {
        name: Y,
        type: K,
        fixed: q,
        flex: G,
        width: ne,
        minWidth: re,
        maxWidth: pe,
        ...Le
      },
      flex: q ? 0 : G === !0 ? 1 : typeof G == "number" ? G : 0,
      left: 0,
      width: C_(ne, re, pe),
      realWidth: 0,
      visible: !0,
      index: u.length
    };
    n.forEach((wt) => {
      var ee, se;
      const Ye = (ee = wt.colTypes) == null ? void 0 : ee[K];
      if (Ye) {
        const Me = typeof Ye == "function" ? Ye(te) : Ye;
        Me && Object.assign(te.setting, Me);
      }
      (se = wt.onAddCol) == null || se.call(this, te);
    }), te.width = C_((bt = te.setting.width) != null ? bt : te.width, (Oe = te.setting.minWidth) != null ? Oe : re, (Ae = te.setting.maxWidth) != null ? Ae : pe), te.realWidth = te.realWidth || te.width, q === "left" ? (te.left = _, _ += te.width, f.push(te)) : q === "right" ? (te.left = g, g += te.width, p.push(te)) : (te.left = h, h += te.width, i.push(te)), te.flex && l.push(te), u.push(te), d[te.name] = te;
  });
  let v = r.width, m = 0;
  const k = _ + h + g;
  if (typeof v == "function" && (v = v.call(this, k)), v === "auto")
    m = k;
  else if (v === "100%") {
    const { parent: H } = this;
    if (H)
      m = H.clientWidth;
    else {
      m = 0, B(this, rn, !0);
      return;
    }
  } else
    m = v != null ? v : 0;
  const { data: b, rowKey: C = "id", rowHeight: $ } = r, S = [], y = (H, Y, K) => {
    var G, ne;
    const q = { data: K != null ? K : { [C]: H }, id: H, index: S.length, top: 0 };
    if (K || (q.lazy = !0), S.push(q), ((G = r.onAddRow) == null ? void 0 : G.call(this, q, Y)) !== !1) {
      for (const re of n)
        if (((ne = re.onAddRow) == null ? void 0 : ne.call(this, q, Y)) === !1)
          return;
    }
  };
  if (typeof b == "number")
    for (let H = 0; H < b; H++)
      y(`${H}`, H);
  else
    Array.isArray(b) && b.forEach((H, Y) => {
      var K;
      typeof H == "object" ? y(`${(K = H[C]) != null ? K : ""}`, Y, H) : y(`${H != null ? H : ""}`, Y);
    });
  let x = S;
  const A = {};
  if (r.onAddRows) {
    const H = r.onAddRows.call(this, x);
    H && (x = H);
  }
  for (const H of n) {
    const Y = (V = H.onAddRows) == null ? void 0 : V.call(this, x);
    Y && (x = Y);
  }
  x.forEach((H, Y) => {
    A[H.id] = H, H.index = Y, H.top = H.index * $;
  });
  const { header: W, footer: U } = r, T = W ? r.headerHeight || $ : 0, M = U ? r.footerHeight || $ : 0;
  let O = r.height, D = 0;
  const E = x.length * $, R = T + M + E;
  if (typeof O == "function" && (O = O.call(this, R)), O === "auto")
    D = R;
  else if (typeof O == "object")
    D = Math.min(O.max, Math.max(O.min, R));
  else if (O === "100%") {
    const { parent: H } = this;
    if (H)
      D = H.clientHeight;
    else {
      D = 0, B(this, rn, !0);
      return;
    }
  } else
    D = O;
  const L = D - T - M, I = m - _ - g, F = {
    options: r,
    allRows: S,
    width: m,
    height: D,
    rows: x,
    rowsMap: A,
    rowHeight: $,
    rowsHeight: L,
    rowsHeightTotal: E,
    header: W,
    footer: U,
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
      scrollWidth: I,
      scrollColsWidth: h,
      fixedRightWidth: g
    }
  }, j = (X = r.onLayout) == null ? void 0 : X.call(this, F);
  j && Object.assign(F, j), n.forEach((H) => {
    if (H.onLayout) {
      const Y = H.onLayout.call(this, F);
      Y && Object.assign(F, Y);
    }
  }), B(this, _t, F);
}, Fa = new WeakSet(), mm = function() {
  (Q(this, Ba, hm).call(this) || !w(this, _t)) && Q(this, ja, vm).call(this);
  const { layout: n } = this;
  if (!n)
    return;
  let { scrollLeft: r } = this.state;
  const { flexCols: s, colsInfo: { scrollCols: o, scrollWidth: a, scrollColsWidth: c } } = n;
  if (s.length) {
    const k = a - c;
    if (k > 0) {
      const b = s.reduce(($, S) => $ + S.flex, 0);
      let C = 0;
      s.forEach(($) => {
        const S = Math.min(k - C, Math.ceil(k * ($.flex / b)));
        $.realWidth = S + $.width, C += $.realWidth;
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
}, N(Wl, "addPlugin", lm), N(Wl, "removePlugin", cm);
function O_(e, t) {
  t !== void 0 ? e.data.hoverCol = t : t = e.data.hoverCol;
  const { current: n } = e.ref;
  if (!n)
    return;
  const r = "dtable-col-hover";
  n.querySelectorAll(`.${r}`).forEach((s) => s.classList.remove(r)), typeof t == "string" && t.length && n.querySelectorAll(`.dtable-cell[data-col="${t}"]`).forEach((s) => s.classList.add(r));
}
const ix = {
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
      O_(this, r);
    },
    mouseleave() {
      O_(this, !1);
    }
  }
}, sx = Ir(ix, { buildIn: !0 });
function ax(e, t) {
  var a, c;
  typeof e == "boolean" && (t = e, e = void 0);
  const n = this.state.checkedRows, r = {}, { canRowCheckable: s } = this.options, o = (f, p) => {
    s && !s.call(this, f) || !!n[f] === p || (p ? n[f] = !0 : delete n[f], r[f] = p);
  };
  if (e === void 0 ? (t === void 0 && (t = !gm.call(this)), (a = this.layout) == null || a.allRows.forEach(({ id: f }) => {
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
function lx(e) {
  var t;
  return (t = this.state.checkedRows[e]) != null ? t : !1;
}
function gm() {
  var n, r;
  const e = this.getChecks().length, { canRowCheckable: t } = this.options;
  return t ? e === ((n = this.layout) == null ? void 0 : n.allRows.reduce((s, o) => s + (t.call(this, o.id) ? 1 : 0), 0)) : e === ((r = this.layout) == null ? void 0 : r.allRows.length);
}
function cx() {
  return Object.keys(this.state.checkedRows);
}
const fx = {
  name: "checkable",
  defaultOptions: { checkable: !0 },
  when: (e) => !!e.checkable,
  state() {
    return { checkedRows: {} };
  },
  methods: {
    toggleCheckRows: ax,
    isRowChecked: lx,
    isAllRowChecked: gm,
    getChecks: cx
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
        /* @__PURE__ */ Z("div", {
          style: { padding: "0 calc(3 * var(--space))", display: "flex", alignItems: "center" },
          onClick: () => this.toggleCheckRows()
        }, /* @__PURE__ */ Z("input", {
          type: "checkbox",
          checked: e
        }))
      ];
    },
    checkedInfo(e, t) {
      const n = this.getChecks().length, r = [];
      return n && r.push(this.i18n("checkedCountInfo", { selected: n })), r.push(this.i18n("totalCountInfo", { total: t.allRows.length })), [
        /* @__PURE__ */ Z("div", null, r.join(", "))
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
      const p = this.isRowChecked(r), i = (f = (c = this.options.checkboxRender) == null ? void 0 : c.call(this, p, r)) != null ? f : /* @__PURE__ */ Z("input", {
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
      const f = this.isAllRowChecked(), p = (c = (a = this.options.checkboxRender) == null ? void 0 : a.call(this, f, r)) != null ? c : /* @__PURE__ */ Z("input", {
        type: "checkbox",
        checked: f
      });
      e.unshift(p), e.push({ className: "has-checkbox" });
    }
    return e;
  },
  onRenderRow({ props: e, row: t }) {
    if (!!this.isRowChecked(t.id))
      return { className: z(e.className, "is-checked") };
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
}, ux = Ir(fx);
var ym = /* @__PURE__ */ ((e) => (e.unknown = "", e.collapsed = "collapsed", e.expanded = "expanded", e.hidden = "hidden", e.normal = "normal", e))(ym || {});
function Ul(e) {
  const t = this.data.nestedMap.get(e);
  if (!t || t.state !== "")
    return t != null ? t : { state: "normal", level: -1 };
  if (!t.parent && !t.children)
    return t.state = "normal", t;
  const n = this.state.collapsedRows, r = t.children && n && n[e];
  let s = !1, { parent: o } = t;
  for (; o; ) {
    const a = Ul.call(this, o);
    if (a.state !== "expanded") {
      s = !0;
      break;
    }
    o = a.parent;
  }
  return t.state = s ? "hidden" : r ? "collapsed" : t.children ? "expanded" : "normal", t.level = t.parent ? Ul.call(this, t.parent).level + 1 : 0, t;
}
function _x(e, t) {
  var s;
  let n = (s = this.state.collapsedRows) != null ? s : {};
  const { nestedMap: r } = this.data;
  if (e === "HEADER")
    if (t === void 0 && (t = !bm.call(this)), t) {
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
function bm() {
  const e = this.data.nestedMap.values();
  for (const t of e)
    if (t.state === "expanded")
      return !1;
  return !0;
}
function wm(e, t = 0, n, r = 0) {
  var s;
  n || (n = [...e.keys()]);
  for (const o of n) {
    const a = e.get(o);
    !a || (a.level === r && (a.order = t++), (s = a.children) != null && s.length && (t = wm(e, t, a.children, r + 1)));
  }
  return t;
}
function $m(e, t, n, r) {
  const s = e.getNestedRowInfo(t);
  return !s || s.state === "" || !s.children || s.children.forEach((o) => {
    r[o] = n, $m(e, o, n, r);
  }), s;
}
function km(e, t, n, r, s) {
  var c;
  const o = e.getNestedRowInfo(t);
  if (!o || o.state === "")
    return;
  ((c = o.children) == null ? void 0 : c.every((f) => {
    const p = !!(r[f] !== void 0 ? r[f] : s[f]);
    return n === p;
  })) && (r[t] = n), o.parent && km(e, o.parent, n, r, s);
}
const px = {
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
        const a = $m(this, s, o, r);
        a != null && a.parent && km(this, a.parent, o, r, n);
      }), r;
    }
  },
  when: (e) => !!e.nested,
  data() {
    return { nestedMap: /* @__PURE__ */ new Map() };
  },
  methods: {
    toggleRow: _x,
    isAllCollapsed: bm,
    getNestedRowInfo: Ul
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
    return e = e.filter((t) => this.getNestedRowInfo(t.id).state !== "hidden"), wm(this.data.nestedMap), e.sort((t, n) => {
      var a, c;
      const r = this.getNestedRowInfo(t.id), s = this.getNestedRowInfo(n.id), o = ((a = r.order) != null ? a : 0) - ((c = s.order) != null ? c : 0);
      return o === 0 ? t.index - n.index : o;
    }), e;
  },
  onRenderCell(e, { col: t, row: n }) {
    var c, f, p;
    const { id: r, data: s } = n, { nestedToggle: o } = t.setting, a = this.getNestedRowInfo(r);
    if (o && (a.children || a.parent) && e.unshift((f = (c = this.options.onRenderNestedToggle) == null ? void 0 : c.call(this, a, r, t, s)) != null ? f : /* @__PURE__ */ Z("a", {
      role: "button",
      className: `dtable-nested-toggle state${a.children ? "" : " is-no-child"}`
    }, /* @__PURE__ */ Z("span", {
      className: "toggle-icon"
    }))), a.level) {
      let { nestedIndent: i = o } = t.setting;
      i && (i === !0 && (i = (p = this.options.nestedIndent) != null ? p : 12), e.unshift(/* @__PURE__ */ Z("div", {
        className: "dtable-nested-indent",
        style: { width: i * a.level + "px" }
      })));
    }
    return e;
  },
  onRenderHeaderCell(e, { row: t, col: n }) {
    var s, o;
    const { id: r } = t;
    return n.setting.nestedToggle && e.unshift((o = (s = this.options.onRenderNestedToggle) == null ? void 0 : s.call(this, void 0, r, n, void 0)) != null ? o : /* @__PURE__ */ Z("a", {
      type: "button",
      className: "dtable-nested-toggle state"
    }, /* @__PURE__ */ Z("span", {
      className: "toggle-icon"
    }))), e;
  },
  onRenderRow({ props: e, row: t }) {
    const n = this.getNestedRowInfo(t.id);
    return {
      className: z(e.className, `is-${n.state}`),
      "data-parent": n.parent
    };
  },
  onRenderHeaderRow({ props: e }) {
    return e.className = z(e.className, `is-${this.isAllCollapsed() ? "collapsed" : "expanded"}`), e;
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
}, dx = Ir(px);
const hx = {
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
        const { linkTemplate: r = "", linkProps: s } = t.setting, o = He(r, n.data);
        return e[0] = /* @__PURE__ */ Z("a", {
          href: o,
          ...s
        }, e[0]), e;
      }
    },
    avatar: {
      onRenderCell(e, { col: t, row: n }) {
        const { data: r } = n, { avatarWithName: s, avatarClass: o = "size-xs circle", avatarKey: a = `${t.name}Avatar` } = t.setting, c = /* @__PURE__ */ Z("div", {
          className: `avatar ${o} flex-none`
        }, /* @__PURE__ */ Z("img", {
          src: r ? r[a] : ""
        }));
        return s ? e.unshift(c) : e[0] = c, e;
      }
    },
    circleProgress: {
      align: "center",
      onRenderCell(e, { col: t }) {
        const { circleSize: n = 24, circleBorderSize: r = 1, circleBgColor: s = "var(--color-border)", circleColor: o = "var(--color-success-500)" } = t.setting, a = (n - r) / 2, c = n / 2, f = e[0];
        return e[0] = /* @__PURE__ */ Z("svg", {
          width: n,
          height: n
        }, /* @__PURE__ */ Z("circle", {
          cx: c,
          cy: c,
          r: a,
          "stroke-width": r,
          stroke: s,
          fill: "transparent"
        }), /* @__PURE__ */ Z("circle", {
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
        }), /* @__PURE__ */ Z("text", {
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
            return p && (f = { className: a, ...p, ...f }), He(s, f);
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
        return typeof r == "function" ? e[0] = s === "html" ? { html: r(o) } : r(o) : s === "datetime" ? e[0] = Dl(o, r) : s === "html" ? e[0] = { html: He(r, o) } : e[0] = He(r, o), e;
      }
    }
  }
}, vx = Ir(hx, { buildIn: !0 }), mx = {
  name: "sort-type",
  onRenderHeaderCell(e, { col: t }) {
    const { sortType: n } = t.setting;
    if (n) {
      const { sortLink: r = this.options.sortLink, sortAttrs: s } = t.setting, o = n === !0 ? "none" : n;
      if (e.push(
        /* @__PURE__ */ Z("div", {
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
}, gx = Ir(mx, { buildIn: !0 }), yx = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  colHover: sx,
  checkable: ux,
  NestedRowState: ym,
  nested: dx,
  rich: vx,
  sortType: gx
}, Symbol.toStringTag, { value: "Module" }));
class zr extends Ve {
}
N(zr, "NAME", "dtable"), N(zr, "Component", Wl), N(zr, "definePlugin", Ir), N(zr, "removePlugin", cm), N(zr, "plugins", yx);
var Ge;
class Xr extends Xe {
  constructor() {
    super(...arguments);
    P(this, Ge, void 0);
  }
  init() {
    const { element: n } = this;
    n !== document.body && !n.hasAttribute("data-toggle") && n.setAttribute("data-toggle", "tab");
  }
  showTarget() {
    const n = this.element.getAttribute("href") || this.element.dataset.target || this.element.dataset.tab;
    n != null && n.startsWith("#") && B(this, Ge, document.querySelector(n)), this.addActive(this.element.closest(`.${this.constructor.NAV_CLASS}`), this.element.parentElement), w(this, Ge) && (this.addActive(w(this, Ge).parentElement, w(this, Ge)), w(this, Ge).dispatchEvent(new CustomEvent("show.zui3.tab")));
  }
  show() {
    const n = this.element.getAttribute("href") || this.element.dataset.target || this.element.dataset.tab;
    n != null && n.startsWith("#") && B(this, Ge, document.querySelector(n)), w(this, Ge) && (this.addActive(w(this, Ge).parentElement, w(this, Ge)), this.addActive(this.element.closest(`.${this.constructor.NAV_CLASS}`), this.element.parentElement));
  }
  addActive(n, r) {
    const s = n.children;
    Array.from(s).forEach((a) => {
      a.classList.remove("active"), a.classList.contains("fade") && a.classList.remove("in");
    }), r.classList.add("active"), r.classList.contains("fade") && this.transition(r).then(function() {
      r.dispatchEvent(new CustomEvent("shown.zui3.tab"));
    });
  }
  transition(n) {
    return new Promise(function(r) {
      setTimeout(() => {
        n.classList.add("in"), r();
      }, 100);
    });
  }
}
Ge = new WeakMap(), N(Xr, "NAME", "NavTabs"), N(Xr, "NAV_CLASS", "nav-tabs"), N(Xr, "EVENTS", !0), N(Xr, "TOGGLE_SELECTOR", '[data-toggle="tab"]');
document.addEventListener("click", (e) => {
  e.target instanceof HTMLElement && (e.target.dataset.toggle === "tab" || e.target.getAttribute("data-tab")) && (e.preventDefault(), new Xr(e.target).showTarget());
});
export {
  _f as ActionMenu,
  df as ActionMenuNested,
  qf as Avatar,
  Gf as BtnGroup,
  bf as Button,
  Re as ContextMenu,
  zr as DTable,
  Et as Datepicker,
  De as Dropdown,
  jl as EventBus,
  wf as Menu,
  Lf as Messager,
  Pe as Modal,
  go as ModalTrigger,
  Tu as Nav,
  Xr as NavTabs,
  Nu as Pager,
  Bu as Picker,
  If as ProgressCircle,
  It as TIME_DAY,
  Ot as Timepicker,
  e_ as Toolbar,
  At as Tooltip,
  p_ as VirtualGrid,
  Hm as addI18nMap,
  kx as browser,
  Lu as calculateTimestamp,
  $x as convertBytes,
  ze as createDate,
  wx as formatBytes,
  Dl as formatDate,
  Ax as formatDateSpan,
  He as formatString,
  Pm as getLangCode,
  Mx as getTimeBeforeDesc,
  Ei as i18n,
  Ox as isDBY,
  pl as isObject,
  Mi as isSameDay,
  rw as isSameMonth,
  xx as isSameWeek,
  Du as isSameYear,
  Sx as isToday,
  Ex as isTomorrow,
  Cx as isYesterday,
  gl as mergeDeep,
  ml as nativeEvents,
  Rm as setLangCode,
  kg as store
};
