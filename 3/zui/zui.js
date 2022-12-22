var fd = Object.defineProperty;
var ud = (e, t, n) => t in e ? fd(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var N = (e, t, n) => (ud(e, typeof t != "symbol" ? t + "" : t, n), n), Ps = (e, t, n) => {
  if (!t.has(e))
    throw TypeError("Cannot " + n);
};
var w = (e, t, n) => (Ps(e, t, "read from private field"), n ? n.call(e) : t.get(e)), L = (e, t, n) => {
  if (t.has(e))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(e) : t.set(e, n);
}, H = (e, t, n, r) => (Ps(e, t, "write to private field"), r ? r.call(e, n) : t.set(e, n), n);
var te = (e, t, n) => (Ps(e, t, "access private method"), n);
var ms, re, pf, df, mr, al, ui = {}, hf = [], _d = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function zt(e, t) {
  for (var n in t)
    e[n] = t[n];
  return e;
}
function vf(e) {
  var t = e.parentNode;
  t && t.removeChild(e);
}
function gs(e, t, n) {
  var r, s, o, a = {};
  for (o in t)
    o == "key" ? r = t[o] : o == "ref" ? s = t[o] : a[o] = t[o];
  if (arguments.length > 2 && (a.children = arguments.length > 3 ? ms.call(arguments, 2) : n), typeof e == "function" && e.defaultProps != null)
    for (o in e.defaultProps)
      a[o] === void 0 && (a[o] = e.defaultProps[o]);
  return Uo(e, a, r, s, null);
}
function Uo(e, t, n, r, s) {
  var o = { type: e, props: t, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: s == null ? ++pf : s };
  return s == null && re.vnode != null && re.vnode(o), o;
}
function pd() {
  return { current: null };
}
function ys(e) {
  return e.children;
}
function Bo(e, t) {
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
function mf(e) {
  var t, n;
  if ((e = e.__) != null && e.__c != null) {
    for (e.__e = e.__c.base = null, t = 0; t < e.__k.length; t++)
      if ((n = e.__k[t]) != null && n.__e != null) {
        e.__e = e.__c.base = n.__e;
        break;
      }
    return mf(e);
  }
}
function ll(e) {
  (!e.__d && (e.__d = !0) && mr.push(e) && !_i.__r++ || al !== re.debounceRendering) && ((al = re.debounceRendering) || setTimeout)(_i);
}
function _i() {
  for (var e; _i.__r = mr.length; )
    e = mr.sort(function(t, n) {
      return t.__v.__b - n.__v.__b;
    }), mr = [], e.some(function(t) {
      var n, r, s, o, a, c;
      t.__d && (a = (o = (n = t).__v).__e, (c = n.__P) && (r = [], (s = zt({}, o)).__v = o.__v + 1, sa(c, o, s, n.__n, c.ownerSVGElement !== void 0, o.__h != null ? [a] : null, r, a == null ? Yr(o) : a, o.__h), wf(r, o), o.__e != a && mf(o)));
    });
}
function gf(e, t, n, r, s, o, a, c, f, p) {
  var i, d, u, l, _, g, h, v = r && r.__k || hf, m = v.length;
  for (n.__k = [], i = 0; i < t.length; i++)
    if ((l = n.__k[i] = (l = t[i]) == null || typeof l == "boolean" ? null : typeof l == "string" || typeof l == "number" || typeof l == "bigint" ? Uo(null, l, null, null, l) : Array.isArray(l) ? Uo(ys, { children: l }, null, null, null) : l.__b > 0 ? Uo(l.type, l.props, l.key, l.ref ? l.ref : null, l.__v) : l) != null) {
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
      sa(e, l, u = u || ui, s, o, a, c, f, p), _ = l.__e, (d = l.ref) && u.ref != d && (h || (h = []), u.ref && h.push(u.ref, null, l), h.push(d, l.__c || _, l)), _ != null ? (g == null && (g = _), typeof l.type == "function" && l.__k === u.__k ? l.__d = f = yf(l, f, e) : f = bf(e, l, u, v, _, f), typeof n.type == "function" && (n.__d = f)) : f && u.__e == f && f.parentNode != e && (f = Yr(u));
    }
  for (n.__e = g, i = m; i--; )
    v[i] != null && kf(v[i], v[i]);
  if (h)
    for (i = 0; i < h.length; i++)
      $f(h[i], h[++i], h[++i]);
}
function yf(e, t, n) {
  for (var r, s = e.__k, o = 0; s && o < s.length; o++)
    (r = s[o]) && (r.__ = e, t = typeof r.type == "function" ? yf(r, t, n) : bf(n, r, r, s, r.__e, t));
  return t;
}
function bf(e, t, n, r, s, o) {
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
function dd(e, t, n, r, s) {
  var o;
  for (o in n)
    o === "children" || o === "key" || o in t || pi(e, o, null, n[o], r);
  for (o in t)
    s && typeof t[o] != "function" || o === "children" || o === "key" || o === "value" || o === "checked" || n[o] === t[o] || pi(e, o, t[o], n[o], r);
}
function cl(e, t, n) {
  t[0] === "-" ? e.setProperty(t, n) : e[t] = n == null ? "" : typeof n != "number" || _d.test(t) ? n : n + "px";
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
  this.l[e.type + !1](re.event ? re.event(e) : e);
}
function ul(e) {
  this.l[e.type + !0](re.event ? re.event(e) : e);
}
function sa(e, t, n, r, s, o, a, c, f) {
  var p, i, d, u, l, _, g, h, v, m, S, b, E, $, k, y = t.type;
  if (t.constructor !== void 0)
    return null;
  n.__h != null && (f = n.__h, c = t.__e = n.__e, t.__h = null, o = [c]), (p = re.__b) && p(t);
  try {
    e:
      if (typeof y == "function") {
        if (h = t.props, v = (p = y.contextType) && r[p.__c], m = p ? v ? v.props.value : p.__ : r, n.__c ? g = (i = t.__c = n.__c).__ = i.__E : ("prototype" in y && y.prototype.render ? t.__c = i = new y(h, m) : (t.__c = i = new Bo(h, m), i.constructor = y, i.render = vd), v && v.sub(i), i.props = h, i.state || (i.state = {}), i.context = m, i.__n = r, d = i.__d = !0, i.__h = [], i._sb = []), i.__s == null && (i.__s = i.state), y.getDerivedStateFromProps != null && (i.__s == i.state && (i.__s = zt({}, i.__s)), zt(i.__s, y.getDerivedStateFromProps(h, i.__s))), u = i.props, l = i.state, d)
          y.getDerivedStateFromProps == null && i.componentWillMount != null && i.componentWillMount(), i.componentDidMount != null && i.__h.push(i.componentDidMount);
        else {
          if (y.getDerivedStateFromProps == null && h !== u && i.componentWillReceiveProps != null && i.componentWillReceiveProps(h, m), !i.__e && i.shouldComponentUpdate != null && i.shouldComponentUpdate(h, i.__s, m) === !1 || t.__v === n.__v) {
            for (i.props = h, i.state = i.__s, t.__v !== n.__v && (i.__d = !1), i.__v = t, t.__e = n.__e, t.__k = n.__k, t.__k.forEach(function(x) {
              x && (x.__ = t);
            }), S = 0; S < i._sb.length; S++)
              i.__h.push(i._sb[S]);
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
        i.state = i.__s, i.getChildContext != null && (r = zt(zt({}, r), i.getChildContext())), d || i.getSnapshotBeforeUpdate == null || (_ = i.getSnapshotBeforeUpdate(u, l)), k = p != null && p.type === ys && p.key == null ? p.props.children : p, gf(e, Array.isArray(k) ? k : [k], t, n, r, s, o, a, c, f), i.base = t.__e, t.__h = null, i.__h.length && a.push(i), g && (i.__E = i.__ = null), i.__e = !1;
      } else
        o == null && t.__v === n.__v ? (t.__k = n.__k, t.__e = n.__e) : t.__e = hd(n.__e, t, n, r, s, o, a, f);
    (p = re.diffed) && p(t);
  } catch (x) {
    t.__v = null, (f || o != null) && (t.__e = c, t.__h = !!f, o[o.indexOf(c)] = null), re.__e(x, t, n);
  }
}
function wf(e, t) {
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
    if (o = o && ms.call(e.childNodes), p = (d = n.props || ui).dangerouslySetInnerHTML, i = u.dangerouslySetInnerHTML, !c) {
      if (o != null)
        for (d = {}, _ = 0; _ < e.attributes.length; _++)
          d[e.attributes[_].name] = e.attributes[_].value;
      (i || p) && (i && (p && i.__html == p.__html || i.__html === e.innerHTML) || (e.innerHTML = i && i.__html || ""));
    }
    if (dd(e, u, d, s, c), i)
      t.__k = [];
    else if (_ = t.props.children, gf(e, Array.isArray(_) ? _ : [_], t, n, r, s && l !== "foreignObject", o, a, o ? o[0] : n.__k && Yr(n, 0), c), o != null)
      for (_ = o.length; _--; )
        o[_] != null && vf(o[_]);
    c || ("value" in u && (_ = u.value) !== void 0 && (_ !== e.value || l === "progress" && !_ || l === "option" && _ !== d.value) && pi(e, "value", _, d.value, !1), "checked" in u && (_ = u.checked) !== void 0 && _ !== e.checked && pi(e, "checked", _, d.checked, !1));
  }
  return e;
}
function $f(e, t, n) {
  try {
    typeof e == "function" ? e(t) : e.current = t;
  } catch (r) {
    re.__e(r, n);
  }
}
function kf(e, t, n) {
  var r, s;
  if (re.unmount && re.unmount(e), (r = e.ref) && (r.current && r.current !== e.__e || $f(r, null, t)), (r = e.__c) != null) {
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
      r[s] && kf(r[s], t, n || typeof e.type != "function");
  n || e.__e == null || vf(e.__e), e.__ = e.__e = e.__d = void 0;
}
function vd(e, t, n) {
  return this.constructor(e, n);
}
function md(e, t, n) {
  var r, s, o;
  re.__ && re.__(e, t), s = (r = typeof n == "function") ? null : n && n.__k || t.__k, o = [], sa(t, e = (!r && n || t).__k = gs(ys, null, [e]), s || ui, ui, t.ownerSVGElement !== void 0, !r && n ? [n] : s ? null : t.firstChild ? ms.call(t.childNodes) : null, o, !r && n ? n : s ? s.__e : t.firstChild, r), wf(o, e);
}
ms = hf.slice, re = { __e: function(e, t, n, r) {
  for (var s, o, a; t = t.__; )
    if ((s = t.__c) && !s.__)
      try {
        if ((o = s.constructor) && o.getDerivedStateFromError != null && (s.setState(o.getDerivedStateFromError(e)), a = s.__d), s.componentDidCatch != null && (s.componentDidCatch(e, r || {}), a = s.__d), a)
          return s.__E = s;
      } catch (c) {
        e = c;
      }
  throw e;
} }, pf = 0, df = function(e) {
  return e != null && e.constructor === void 0;
}, Bo.prototype.setState = function(e, t) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = zt({}, this.state), typeof e == "function" && (e = e(zt({}, n), this.props)), e && zt(n, e), e != null && this.__v && (t && this._sb.push(t), ll(this));
}, Bo.prototype.forceUpdate = function(e) {
  this.__v && (this.__e = !0, e && this.__h.push(e), ll(this));
}, Bo.prototype.render = ys, mr = [], _i.__r = 0;
var yt;
class gd {
  constructor(t = "") {
    L(this, yt, void 0);
    typeof t == "object" ? H(this, yt, t) : H(this, yt, document.appendChild(document.createComment(t)));
  }
  on(t, n, r) {
    w(this, yt).addEventListener(t, n, r);
  }
  once(t, n, r) {
    w(this, yt).addEventListener(t, n, { once: !0, ...r });
  }
  off(t, n, r) {
    w(this, yt).removeEventListener(t, n, r);
  }
  emit(t) {
    return w(this, yt).dispatchEvent(t), t;
  }
}
yt = new WeakMap();
const Is = /* @__PURE__ */ new Set([
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
class aa extends gd {
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
    return typeof t == "string" && (Is.has(t) ? (t = new Event(t), Object.assign(t, { detail: n })) : t = new CustomEvent(t, { detail: n })), super.emit(aa.createEvent(t, n));
  }
  static createEvent(t, n) {
    return typeof t == "string" && (Is.has(t) ? (t = new Event(t), Object.assign(t, { detail: n })) : t = new CustomEvent(t, { detail: n })), t;
  }
}
var bt, _o, _n, dr;
class _l extends aa {
  constructor(n = "", r) {
    super(n);
    L(this, _n);
    L(this, bt, /* @__PURE__ */ new Map());
    L(this, _o, void 0);
    H(this, _o, r == null ? void 0 : r.customEventSuffix);
  }
  on(n, r, s) {
    n = te(this, _n, dr).call(this, n), super.on(n, r, s), w(this, bt).set(r, [n, s]);
  }
  off(n, r, s) {
    n = te(this, _n, dr).call(this, n), super.off(n, r, s), w(this, bt).delete(r);
  }
  once(n, r, s) {
    n = te(this, _n, dr).call(this, n);
    const o = (a) => {
      r(a), w(this, bt).delete(o);
    };
    super.once(n, o, s), w(this, bt).set(o, [n, s]);
  }
  emit(n, r) {
    return typeof n == "string" && (n = te(this, _n, dr).call(this, n)), super.emit(n, r);
  }
  offAll() {
    Array.from(w(this, bt).entries()).forEach(([n, [r, s]]) => {
      super.off(r, n, s);
    }), w(this, bt).clear();
  }
}
bt = new WeakMap(), _o = new WeakMap(), _n = new WeakSet(), dr = function(n) {
  const r = w(this, _o);
  return Is.has(n) || typeof r != "string" || n.endsWith(r) ? n : `${n}${r}`;
};
function yd(e, t) {
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
function bd(e, t, n) {
  const r = yd(e, t), s = r[r.length - 1];
  return s === void 0 ? n : s;
}
function Rs(e) {
  return !!e && typeof e == "object" && !Array.isArray(e);
}
function Us(e, ...t) {
  if (!t.length)
    return e;
  const n = t.shift();
  if (Rs(e) && Rs(n))
    for (const r in n)
      Rs(n[r]) ? (e[r] || Object.assign(e, { [r]: {} }), Us(e[r], n[r])) : Object.assign(e, { [r]: n[r] });
  return Us(e, ...t);
}
function Oe(e, ...t) {
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
var la = /* @__PURE__ */ ((e) => (e[e.B = 1] = "B", e[e.KB = 1024] = "KB", e[e.MB = 1048576] = "MB", e[e.GB = 1073741824] = "GB", e[e.TB = 1099511627776] = "TB", e))(la || {});
function Nb(e, t = 2, n = "") {
  return Number.isNaN(e) ? "?KB" : (n || (e < 1024 ? n = "B" : e < 1048576 ? n = "KB" : e < 1073741824 ? n = "MB" : e < 1099511627776 ? n = "GB" : n = "TB"), (e / la[n]).toFixed(t) + n);
}
const Lb = (e) => {
  const t = /^[0-9]*(B|KB|MB|GB|TB)$/;
  e = e.toUpperCase();
  const n = e.match(t);
  if (!n)
    return 0;
  const r = n[1];
  return e = e.replace(r, ""), Number.parseInt(e, 10) * la[r];
};
var uf, _f;
let ca = (_f = (uf = document.documentElement.getAttribute("lang")) == null ? void 0 : uf.toLowerCase()) != null ? _f : "zh_cn", Rt;
function wd() {
  return ca;
}
function $d(e) {
  ca = e.toLowerCase();
}
function kd(e, t) {
  Rt || (Rt = {}), typeof e == "string" && (e = { [e]: t != null ? t : {} }), Us(Rt, e);
}
function To(e, t, n, r, s, o) {
  Array.isArray(e) ? Rt && e.unshift(Rt) : e = Rt ? [Rt, e] : [e], typeof n == "string" && (o = s, s = r, r = n, n = void 0);
  const a = s || ca;
  let c;
  for (const f of e) {
    if (!f)
      continue;
    const p = f[a];
    if (!p)
      continue;
    const i = o && f === Rt ? `${o}.${t}` : t;
    if (c = bd(p, i), c !== void 0)
      break;
  }
  return c === void 0 ? r : n ? Oe(c, ...Array.isArray(n) ? n : [n]) : c;
}
To.addLang = kd;
To.getCode = wd;
To.setCode = $d;
function xd(e) {
  return Object.fromEntries(Object.entries(e).map(([t, n]) => {
    if (typeof n == "string")
      try {
        n = JSON.parse(n);
      } catch {
      }
    return [t, n];
  }));
}
var wt, On, xe;
class ft {
  constructor(t, n) {
    L(this, wt, void 0);
    L(this, On, void 0);
    L(this, xe, void 0);
    t = typeof t == "string" ? document.querySelector(t) : t, this.constructor.EVENTS && H(this, xe, new _l(t, { customEventSuffix: `.${this.constructor.KEY}` })), H(this, wt, { ...this.constructor.DEFAULT }), this.setOptions({ ...t instanceof HTMLElement ? xd(t.dataset) : null, ...n }), this.constructor.all.set(t, this), H(this, On, t), this.init(), requestAnimationFrame(() => {
      var r;
      this.afterInit(), (r = w(this, xe)) == null || r.emit("inited", this);
    });
  }
  get options() {
    return w(this, wt);
  }
  get element() {
    return w(this, On);
  }
  get events() {
    return w(this, xe);
  }
  init() {
  }
  afterInit() {
  }
  setOptions(t) {
    return t && Object.assign(w(this, wt), t), w(this, wt);
  }
  render(t) {
    this.setOptions(t);
  }
  destroy() {
    this.constructor.all.delete(w(this, On)), w(this, xe) && (w(this, xe).emit("destroyed", this), w(this, xe).offAll());
  }
  on(t, n, r) {
    var s;
    (s = w(this, xe)) == null || s.on(t, n, r);
  }
  once(t, n, r) {
    var s;
    (s = w(this, xe)) == null || s.once(t, n, r);
  }
  off(t, n, r) {
    var s;
    (s = w(this, xe)) == null || s.off(t, n, r);
  }
  emit(t, n) {
    var a;
    let r = _l.createEvent(t, n);
    const s = `on${r.type.replace(`.${this.constructor.KEY}`, "")}`, o = w(this, wt)[s];
    return o && o(r) === !1 && (r.preventDefault(), r.stopPropagation()), r = (a = w(this, xe)) == null ? void 0 : a.emit(r), r;
  }
  i18n(t, n, r) {
    var s;
    return (s = To(w(this, wt).i18n, t, n, r, this.options.lang, this.constructor.NAME)) != null ? s : `{i18n:${t}}`;
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
wt = new WeakMap(), On = new WeakMap(), xe = new WeakMap(), N(ft, "EVENTS", !1), N(ft, "DEFAULT", {}), N(ft, "allComponents", /* @__PURE__ */ new Map());
class Qe extends ft {
  constructor() {
    super(...arguments);
    N(this, "ref", pd());
  }
  get $() {
    return this.ref.current;
  }
  init() {
    requestAnimationFrame(() => this.render());
  }
  render(n) {
    const r = this.constructor.Component;
    md(/* @__PURE__ */ gs(r, {
      ref: this.ref,
      ...this.setOptions(n)
    }), this.element);
  }
}
var fa, fe, xf, Sf, gr, pl, Ef = {}, Cf = [], Sd = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function Vt(e, t) {
  for (var n in t)
    e[n] = t[n];
  return e;
}
function Of(e) {
  var t = e.parentNode;
  t && t.removeChild(e);
}
function we(e, t, n) {
  var r, s, o, a = {};
  for (o in t)
    o == "key" ? r = t[o] : o == "ref" ? s = t[o] : a[o] = t[o];
  if (arguments.length > 2 && (a.children = arguments.length > 3 ? fa.call(arguments, 2) : n), typeof e == "function" && e.defaultProps != null)
    for (o in e.defaultProps)
      a[o] === void 0 && (a[o] = e.defaultProps[o]);
  return Fo(e, a, r, s, null);
}
function Fo(e, t, n, r, s) {
  var o = { type: e, props: t, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: s == null ? ++xf : s };
  return s == null && fe.vnode != null && fe.vnode(o), o;
}
function Ed() {
  return { current: null };
}
function ua(e) {
  return e.children;
}
function yr(e, t) {
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
function Af(e) {
  var t, n;
  if ((e = e.__) != null && e.__c != null) {
    for (e.__e = e.__c.base = null, t = 0; t < e.__k.length; t++)
      if ((n = e.__k[t]) != null && n.__e != null) {
        e.__e = e.__c.base = n.__e;
        break;
      }
    return Af(e);
  }
}
function dl(e) {
  (!e.__d && (e.__d = !0) && gr.push(e) && !di.__r++ || pl !== fe.debounceRendering) && ((pl = fe.debounceRendering) || setTimeout)(di);
}
function di() {
  for (var e; di.__r = gr.length; )
    e = gr.sort(function(t, n) {
      return t.__v.__b - n.__v.__b;
    }), gr = [], e.some(function(t) {
      var n, r, s, o, a, c;
      t.__d && (a = (o = (n = t).__v).__e, (c = n.__P) && (r = [], (s = Vt({}, o)).__v = o.__v + 1, Nf(c, o, s, n.__n, c.ownerSVGElement !== void 0, o.__h != null ? [a] : null, r, a == null ? qr(o) : a, o.__h), Od(r, o), o.__e != a && Af(o)));
    });
}
function Mf(e, t, n, r, s, o, a, c, f, p) {
  var i, d, u, l, _, g, h, v = r && r.__k || Cf, m = v.length;
  for (n.__k = [], i = 0; i < t.length; i++)
    if ((l = n.__k[i] = (l = t[i]) == null || typeof l == "boolean" ? null : typeof l == "string" || typeof l == "number" || typeof l == "bigint" ? Fo(null, l, null, null, l) : Array.isArray(l) ? Fo(ua, { children: l }, null, null, null) : l.__b > 0 ? Fo(l.type, l.props, l.key, l.ref ? l.ref : null, l.__v) : l) != null) {
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
      Nf(e, l, u = u || Ef, s, o, a, c, f, p), _ = l.__e, (d = l.ref) && u.ref != d && (h || (h = []), u.ref && h.push(u.ref, null, l), h.push(d, l.__c || _, l)), _ != null ? (g == null && (g = _), typeof l.type == "function" && l.__k === u.__k ? l.__d = f = Tf(l, f, e) : f = Df(e, l, u, v, _, f), typeof n.type == "function" && (n.__d = f)) : f && u.__e == f && f.parentNode != e && (f = qr(u));
    }
  for (n.__e = g, i = m; i--; )
    v[i] != null && Pf(v[i], v[i]);
  if (h)
    for (i = 0; i < h.length; i++)
      Lf(h[i], h[++i], h[++i]);
}
function Tf(e, t, n) {
  for (var r, s = e.__k, o = 0; s && o < s.length; o++)
    (r = s[o]) && (r.__ = e, t = typeof r.type == "function" ? Tf(r, t, n) : Df(n, r, r, s, r.__e, t));
  return t;
}
function Df(e, t, n, r, s, o) {
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
function Cd(e, t, n, r, s) {
  var o;
  for (o in n)
    o === "children" || o === "key" || o in t || hi(e, o, null, n[o], r);
  for (o in t)
    s && typeof t[o] != "function" || o === "children" || o === "key" || o === "value" || o === "checked" || n[o] === t[o] || hi(e, o, t[o], n[o], r);
}
function hl(e, t, n) {
  t[0] === "-" ? e.setProperty(t, n) : e[t] = n == null ? "" : typeof n != "number" || Sd.test(t) ? n : n + "px";
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
  this.l[e.type + !1](fe.event ? fe.event(e) : e);
}
function ml(e) {
  this.l[e.type + !0](fe.event ? fe.event(e) : e);
}
function Nf(e, t, n, r, s, o, a, c, f) {
  var p, i, d, u, l, _, g, h, v, m, S, b, E, $, k, y = t.type;
  if (t.constructor !== void 0)
    return null;
  n.__h != null && (f = n.__h, c = t.__e = n.__e, t.__h = null, o = [c]), (p = fe.__b) && p(t);
  try {
    e:
      if (typeof y == "function") {
        if (h = t.props, v = (p = y.contextType) && r[p.__c], m = p ? v ? v.props.value : p.__ : r, n.__c ? g = (i = t.__c = n.__c).__ = i.__E : ("prototype" in y && y.prototype.render ? t.__c = i = new y(h, m) : (t.__c = i = new yr(h, m), i.constructor = y, i.render = Md), v && v.sub(i), i.props = h, i.state || (i.state = {}), i.context = m, i.__n = r, d = i.__d = !0, i.__h = [], i._sb = []), i.__s == null && (i.__s = i.state), y.getDerivedStateFromProps != null && (i.__s == i.state && (i.__s = Vt({}, i.__s)), Vt(i.__s, y.getDerivedStateFromProps(h, i.__s))), u = i.props, l = i.state, d)
          y.getDerivedStateFromProps == null && i.componentWillMount != null && i.componentWillMount(), i.componentDidMount != null && i.__h.push(i.componentDidMount);
        else {
          if (y.getDerivedStateFromProps == null && h !== u && i.componentWillReceiveProps != null && i.componentWillReceiveProps(h, m), !i.__e && i.shouldComponentUpdate != null && i.shouldComponentUpdate(h, i.__s, m) === !1 || t.__v === n.__v) {
            for (i.props = h, i.state = i.__s, t.__v !== n.__v && (i.__d = !1), i.__v = t, t.__e = n.__e, t.__k = n.__k, t.__k.forEach(function(x) {
              x && (x.__ = t);
            }), S = 0; S < i._sb.length; S++)
              i.__h.push(i._sb[S]);
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
        i.state = i.__s, i.getChildContext != null && (r = Vt(Vt({}, r), i.getChildContext())), d || i.getSnapshotBeforeUpdate == null || (_ = i.getSnapshotBeforeUpdate(u, l)), k = p != null && p.type === ua && p.key == null ? p.props.children : p, Mf(e, Array.isArray(k) ? k : [k], t, n, r, s, o, a, c, f), i.base = t.__e, t.__h = null, i.__h.length && a.push(i), g && (i.__E = i.__ = null), i.__e = !1;
      } else
        o == null && t.__v === n.__v ? (t.__k = n.__k, t.__e = n.__e) : t.__e = Ad(n.__e, t, n, r, s, o, a, f);
    (p = fe.diffed) && p(t);
  } catch (x) {
    t.__v = null, (f || o != null) && (t.__e = c, t.__h = !!f, o[o.indexOf(c)] = null), fe.__e(x, t, n);
  }
}
function Od(e, t) {
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
function Ad(e, t, n, r, s, o, a, c) {
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
    if (o = o && fa.call(e.childNodes), p = (d = n.props || Ef).dangerouslySetInnerHTML, i = u.dangerouslySetInnerHTML, !c) {
      if (o != null)
        for (d = {}, _ = 0; _ < e.attributes.length; _++)
          d[e.attributes[_].name] = e.attributes[_].value;
      (i || p) && (i && (p && i.__html == p.__html || i.__html === e.innerHTML) || (e.innerHTML = i && i.__html || ""));
    }
    if (Cd(e, u, d, s, c), i)
      t.__k = [];
    else if (_ = t.props.children, Mf(e, Array.isArray(_) ? _ : [_], t, n, r, s && l !== "foreignObject", o, a, o ? o[0] : n.__k && qr(n, 0), c), o != null)
      for (_ = o.length; _--; )
        o[_] != null && Of(o[_]);
    c || ("value" in u && (_ = u.value) !== void 0 && (_ !== e.value || l === "progress" && !_ || l === "option" && _ !== d.value) && hi(e, "value", _, d.value, !1), "checked" in u && (_ = u.checked) !== void 0 && _ !== e.checked && hi(e, "checked", _, d.checked, !1));
  }
  return e;
}
function Lf(e, t, n) {
  try {
    typeof e == "function" ? e(t) : e.current = t;
  } catch (r) {
    fe.__e(r, n);
  }
}
function Pf(e, t, n) {
  var r, s;
  if (fe.unmount && fe.unmount(e), (r = e.ref) && (r.current && r.current !== e.__e || Lf(r, null, t)), (r = e.__c) != null) {
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
      r[s] && Pf(r[s], t, n || typeof e.type != "function");
  n || e.__e == null || Of(e.__e), e.__ = e.__e = e.__d = void 0;
}
function Md(e, t, n) {
  return this.constructor(e, n);
}
fa = Cf.slice, fe = { __e: function(e, t, n, r) {
  for (var s, o, a; t = t.__; )
    if ((s = t.__c) && !s.__)
      try {
        if ((o = s.constructor) && o.getDerivedStateFromError != null && (s.setState(o.getDerivedStateFromError(e)), a = s.__d), s.componentDidCatch != null && (s.componentDidCatch(e, r || {}), a = s.__d), a)
          return s.__E = s;
      } catch (c) {
        e = c;
      }
  throw e;
} }, xf = 0, Sf = function(e) {
  return e != null && e.constructor === void 0;
}, yr.prototype.setState = function(e, t) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = Vt({}, this.state), typeof e == "function" && (e = e(Vt({}, n), this.props)), e && Vt(n, e), e != null && this.__v && (t && this._sb.push(t), dl(this));
}, yr.prototype.forceUpdate = function(e) {
  this.__v && (this.__e = !0, e && this.__h.push(e), dl(this));
}, yr.prototype.render = ua, gr = [], di.__r = 0;
function bs(...e) {
  const t = [], n = /* @__PURE__ */ new Map(), r = (s, o) => {
    if (Array.isArray(s) && (o = s[1], s = s[0]), !s.length)
      return;
    const a = n.get(s);
    typeof a == "number" ? t[a][1] = !!o : (n.set(s, t.length), t.push([s, !!o]));
  };
  return e.forEach((s) => {
    typeof s == "function" && (s = s()), Array.isArray(s) ? bs(...s).forEach(r) : s && typeof s == "object" ? Object.entries(s).forEach(r) : typeof s == "string" && s.split(" ").forEach((o) => r(o, !0));
  }), t.sort((s, o) => (n.get(s[0]) || 0) - (n.get(o[0]) || 0));
}
const B = (...e) => bs(...e).reduce((t, [n, r]) => (r && t.push(n), t), []).join(" ");
function Td({
  component: e = "div",
  className: t,
  children: n,
  style: r,
  attrs: s
}) {
  return we(e, {
    className: B(t),
    style: r,
    ...s
  }, n);
}
function Rf({
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
    typeof c == "string" ? /* @__PURE__ */ we("i", {
      class: `icon ${c}`
    }) : c,
    /* @__PURE__ */ we("span", {
      className: "text"
    }, f),
    typeof n == "function" ? n() : n,
    typeof i == "string" ? /* @__PURE__ */ we("i", {
      class: `icon ${i}`
    }) : i
  ];
  return we(e, {
    className: B(t, { disabled: o, active: a }),
    title: d,
    [e === "a" ? "href" : "data-url"]: s,
    [e === "a" ? "target" : "data-target"]: p,
    style: u,
    onClick: l,
    ...r
  }, ..._);
}
function Dd({
  component: e = "div",
  className: t,
  text: n,
  attrs: r,
  children: s,
  style: o,
  onClick: a
}) {
  return we(e, {
    className: B(t),
    style: o,
    onClick: a,
    ...r
  }, n, typeof s == "function" ? s() : s);
}
function Nd({
  component: e = "div",
  className: t,
  style: n,
  space: r,
  flex: s,
  attrs: o,
  onClick: a,
  children: c
}) {
  return we(e, {
    className: B(t),
    style: { width: r, height: r, flex: s, ...n },
    onClick: a,
    ...o
  }, c);
}
function Ld(e) {
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
      var S;
      m != null && (typeof m == "object" && !df(m) && ("html" in m || "__html" in m || "className" in m || "style" in m || "attrs" in m || "children" in m) ? m.html ? l.push(
        /* @__PURE__ */ gs("div", {
          className: B(m.className),
          style: m.style,
          dangerouslySetInnerHTML: { __html: m.html },
          ...(S = m.attrs) != null ? S : {}
        })
      ) : m.__html ? _.push(m.__html) : (m.style && Object.assign(u, m.style), m.className && d.push(m.className), m.children && l.push(m.children), m.attrs && Object.assign(i, m.attrs)) : l.push(m));
    });
  }), _.length && Object.assign(i, { dangerouslySetInnerHTML: { __html: _ } }), [{
    className: B(d),
    style: u,
    ...i
  }, l];
}
function Bs({
  tag: e = "div",
  ...t
}) {
  const [n, r] = Ld(t);
  return gs(e, n, ...r);
}
function Pd(e) {
  return /* @__PURE__ */ we(Bs, {
    ...e
  });
}
function Hf({
  component: e = "div",
  className: t,
  children: n,
  style: r,
  attrs: s
}) {
  return we(e, {
    className: B(t),
    style: r,
    ...s
  }, n);
}
const Ji = class extends yr {
  constructor() {
    super(...arguments);
    N(this, "ref", Ed());
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
    return o && Object.assign(c, o[r.type || "item"]), (a || r.onClick) && (c.onClick = this.handleItemClick.bind(this, c, s, r.onClick)), c.className = B(c.className), c;
  }
  renderItem(n, r, s) {
    const o = this.getItemRenderProps(n, r, s), { itemRender: a } = n;
    if (a) {
      if (typeof a == "object") {
        const h = a[r.type || "item"];
        if (h)
          return /* @__PURE__ */ we(h, {
            ...o
          });
      } else if (typeof a == "function") {
        const h = a.call(this, o, we);
        if (Sf(h))
          return h;
        typeof h == "object" && Object.assign(o, h);
      }
    }
    const { type: c = "item", component: f, key: p = s, rootAttrs: i, rootClass: d, rootStyle: u, rootChildren: l, ..._ } = o, g = !f || typeof f == "string" ? this.constructor.ItemComponents && this.constructor.ItemComponents[c] || Ji.ItemComponents[c] : f;
    return Object.assign(_, {
      type: c,
      component: typeof f == "string" ? f : void 0
    }), this.renderTypedItem(g, {
      className: B(d),
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
    return /* @__PURE__ */ we("li", {
      className: B(`${this.name}-${s.type}`, a),
      key: c,
      ...f
    }, /* @__PURE__ */ we(n, {
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
    return /* @__PURE__ */ we(g, {
      class: B(this.name, a),
      ..._,
      ref: this.ref
    }, c && c.map(this.renderItem.bind(this, n)), f);
  }
};
let kt = Ji;
N(kt, "ItemComponents", {
  divider: Td,
  item: Rf,
  heading: Dd,
  space: Nd,
  custom: Pd,
  basic: Hf
}), N(kt, "ROOT_TAG", "menu"), N(kt, "NAME", "action-menu");
class gl extends Qe {
}
N(gl, "NAME", "actionmenu"), N(gl, "Component", kt);
function yl({
  ...e
}) {
  return /* @__PURE__ */ we(Rf, {
    ...e
  });
}
var po, nt, An;
class _a extends kt {
  constructor(n) {
    var r;
    super(n);
    L(this, po, /* @__PURE__ */ new Set());
    L(this, nt, void 0);
    L(this, An, (n, r, s) => {
      this.toggleNestedMenu(n, r), s.preventDefault();
    });
    H(this, nt, n.nestedShow === void 0), w(this, nt) && (this.state = { nestedShow: (r = n.defaultNestedShow) != null ? r : {} });
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
    return /* @__PURE__ */ we(s, {
      items: r,
      name: this.props.name,
      nestedShow: w(this, nt) ? this.state.nestedShow : this.props.nestedShow,
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
    w(this, po).add(a);
    const c = this.isNestedMenuShow(a);
    if (c && (o.rootChildren = [
      o.rootChildren,
      this.renderNestedMenu(r)
    ], o.component = yl), this.nestedTrigger === "hover")
      o.rootAttrs = {
        ...o.rootAttrs,
        onMouseEnter: w(this, An).bind(this, a, !0),
        onMouseLeave: w(this, An).bind(this, a, !1)
      };
    else if (this.nestedTrigger === "click") {
      const { onClick: i } = o;
      o.onClick = (d) => {
        w(this, An).call(this, a, void 0, d), i == null || i(d);
      };
    }
    const f = this.renderToggleIcon(c, o);
    return f && (o.children = [o.children, f]), o.rootClass = [o.rootClass, "has-nested-menu", c ? "show" : ""], o;
  }
  isNestedMenuShow(n) {
    const r = w(this, nt) ? this.state.nestedShow : this.props.nestedShow;
    return r && typeof r == "object" ? r[n] : !!r;
  }
  toggleNestedMenu(n, r) {
    const { controlledMenu: s } = this.props;
    if (s)
      return s.toggleNestedMenu(n, r);
    if (!w(this, nt))
      return !1;
    let { nestedShow: o = {} } = this.state;
    if (typeof o == "boolean" && (o === !0 ? o = [...w(this, po).values()].reduce((a, c) => (a[c] = !0, a), {}) : o = {}), r === void 0)
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
    !w(this, nt) || this.setState({ nestedShow: !0 });
  }
  hideAllNestedMenu() {
    !w(this, nt) || this.setState({ nestedShow: !1 });
  }
}
po = new WeakMap(), nt = new WeakMap(), An = new WeakMap(), N(_a, "ItemComponents", {
  item: yl
});
class bl extends Qe {
}
N(bl, "NAME", "actionmenunested"), N(bl, "Component", _a);
var pa, ue, Wf, br, wl, jf = {}, If = [], Rd = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function Yt(e, t) {
  for (var n in t)
    e[n] = t[n];
  return e;
}
function Uf(e) {
  var t = e.parentNode;
  t && t.removeChild(e);
}
function Sn(e, t, n) {
  var r, s, o, a = {};
  for (o in t)
    o == "key" ? r = t[o] : o == "ref" ? s = t[o] : a[o] = t[o];
  if (arguments.length > 2 && (a.children = arguments.length > 3 ? pa.call(arguments, 2) : n), typeof e == "function" && e.defaultProps != null)
    for (o in e.defaultProps)
      a[o] === void 0 && (a[o] = e.defaultProps[o]);
  return zo(e, a, r, s, null);
}
function zo(e, t, n, r, s) {
  var o = { type: e, props: t, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: s == null ? ++Wf : s };
  return s == null && ue.vnode != null && ue.vnode(o), o;
}
function da(e) {
  return e.children;
}
function wr(e, t) {
  this.props = e, this.context = t;
}
function Gr(e, t) {
  if (t == null)
    return e.__ ? Gr(e.__, e.__.__k.indexOf(e) + 1) : null;
  for (var n; t < e.__k.length; t++)
    if ((n = e.__k[t]) != null && n.__e != null)
      return n.__e;
  return typeof e.type == "function" ? Gr(e) : null;
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
function $l(e) {
  (!e.__d && (e.__d = !0) && br.push(e) && !vi.__r++ || wl !== ue.debounceRendering) && ((wl = ue.debounceRendering) || setTimeout)(vi);
}
function vi() {
  for (var e; vi.__r = br.length; )
    e = br.sort(function(t, n) {
      return t.__v.__b - n.__v.__b;
    }), br = [], e.some(function(t) {
      var n, r, s, o, a, c;
      t.__d && (a = (o = (n = t).__v).__e, (c = n.__P) && (r = [], (s = Yt({}, o)).__v = o.__v + 1, Yf(c, o, s, n.__n, c.ownerSVGElement !== void 0, o.__h != null ? [a] : null, r, a == null ? Gr(o) : a, o.__h), Wd(r, o), o.__e != a && Bf(o)));
    });
}
function Ff(e, t, n, r, s, o, a, c, f, p) {
  var i, d, u, l, _, g, h, v = r && r.__k || If, m = v.length;
  for (n.__k = [], i = 0; i < t.length; i++)
    if ((l = n.__k[i] = (l = t[i]) == null || typeof l == "boolean" ? null : typeof l == "string" || typeof l == "number" || typeof l == "bigint" ? zo(null, l, null, null, l) : Array.isArray(l) ? zo(da, { children: l }, null, null, null) : l.__b > 0 ? zo(l.type, l.props, l.key, l.ref ? l.ref : null, l.__v) : l) != null) {
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
      Yf(e, l, u = u || jf, s, o, a, c, f, p), _ = l.__e, (d = l.ref) && u.ref != d && (h || (h = []), u.ref && h.push(u.ref, null, l), h.push(d, l.__c || _, l)), _ != null ? (g == null && (g = _), typeof l.type == "function" && l.__k === u.__k ? l.__d = f = zf(l, f, e) : f = Vf(e, l, u, v, _, f), typeof n.type == "function" && (n.__d = f)) : f && u.__e == f && f.parentNode != e && (f = Gr(u));
    }
  for (n.__e = g, i = m; i--; )
    v[i] != null && Gf(v[i], v[i]);
  if (h)
    for (i = 0; i < h.length; i++)
      qf(h[i], h[++i], h[++i]);
}
function zf(e, t, n) {
  for (var r, s = e.__k, o = 0; s && o < s.length; o++)
    (r = s[o]) && (r.__ = e, t = typeof r.type == "function" ? zf(r, t, n) : Vf(n, r, r, s, r.__e, t));
  return t;
}
function Vf(e, t, n, r, s, o) {
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
function Hd(e, t, n, r, s) {
  var o;
  for (o in n)
    o === "children" || o === "key" || o in t || mi(e, o, null, n[o], r);
  for (o in t)
    s && typeof t[o] != "function" || o === "children" || o === "key" || o === "value" || o === "checked" || n[o] === t[o] || mi(e, o, t[o], n[o], r);
}
function kl(e, t, n) {
  t[0] === "-" ? e.setProperty(t, n) : e[t] = n == null ? "" : typeof n != "number" || Rd.test(t) ? n : n + "px";
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
  this.l[e.type + !1](ue.event ? ue.event(e) : e);
}
function Sl(e) {
  this.l[e.type + !0](ue.event ? ue.event(e) : e);
}
function Yf(e, t, n, r, s, o, a, c, f) {
  var p, i, d, u, l, _, g, h, v, m, S, b, E, $, k, y = t.type;
  if (t.constructor !== void 0)
    return null;
  n.__h != null && (f = n.__h, c = t.__e = n.__e, t.__h = null, o = [c]), (p = ue.__b) && p(t);
  try {
    e:
      if (typeof y == "function") {
        if (h = t.props, v = (p = y.contextType) && r[p.__c], m = p ? v ? v.props.value : p.__ : r, n.__c ? g = (i = t.__c = n.__c).__ = i.__E : ("prototype" in y && y.prototype.render ? t.__c = i = new y(h, m) : (t.__c = i = new wr(h, m), i.constructor = y, i.render = Id), v && v.sub(i), i.props = h, i.state || (i.state = {}), i.context = m, i.__n = r, d = i.__d = !0, i.__h = [], i._sb = []), i.__s == null && (i.__s = i.state), y.getDerivedStateFromProps != null && (i.__s == i.state && (i.__s = Yt({}, i.__s)), Yt(i.__s, y.getDerivedStateFromProps(h, i.__s))), u = i.props, l = i.state, d)
          y.getDerivedStateFromProps == null && i.componentWillMount != null && i.componentWillMount(), i.componentDidMount != null && i.__h.push(i.componentDidMount);
        else {
          if (y.getDerivedStateFromProps == null && h !== u && i.componentWillReceiveProps != null && i.componentWillReceiveProps(h, m), !i.__e && i.shouldComponentUpdate != null && i.shouldComponentUpdate(h, i.__s, m) === !1 || t.__v === n.__v) {
            for (i.props = h, i.state = i.__s, t.__v !== n.__v && (i.__d = !1), i.__v = t, t.__e = n.__e, t.__k = n.__k, t.__k.forEach(function(x) {
              x && (x.__ = t);
            }), S = 0; S < i._sb.length; S++)
              i.__h.push(i._sb[S]);
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
        i.state = i.__s, i.getChildContext != null && (r = Yt(Yt({}, r), i.getChildContext())), d || i.getSnapshotBeforeUpdate == null || (_ = i.getSnapshotBeforeUpdate(u, l)), k = p != null && p.type === da && p.key == null ? p.props.children : p, Ff(e, Array.isArray(k) ? k : [k], t, n, r, s, o, a, c, f), i.base = t.__e, t.__h = null, i.__h.length && a.push(i), g && (i.__E = i.__ = null), i.__e = !1;
      } else
        o == null && t.__v === n.__v ? (t.__k = n.__k, t.__e = n.__e) : t.__e = jd(n.__e, t, n, r, s, o, a, f);
    (p = ue.diffed) && p(t);
  } catch (x) {
    t.__v = null, (f || o != null) && (t.__e = c, t.__h = !!f, o[o.indexOf(c)] = null), ue.__e(x, t, n);
  }
}
function Wd(e, t) {
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
function jd(e, t, n, r, s, o, a, c) {
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
    if (o = o && pa.call(e.childNodes), p = (d = n.props || jf).dangerouslySetInnerHTML, i = u.dangerouslySetInnerHTML, !c) {
      if (o != null)
        for (d = {}, _ = 0; _ < e.attributes.length; _++)
          d[e.attributes[_].name] = e.attributes[_].value;
      (i || p) && (i && (p && i.__html == p.__html || i.__html === e.innerHTML) || (e.innerHTML = i && i.__html || ""));
    }
    if (Hd(e, u, d, s, c), i)
      t.__k = [];
    else if (_ = t.props.children, Ff(e, Array.isArray(_) ? _ : [_], t, n, r, s && l !== "foreignObject", o, a, o ? o[0] : n.__k && Gr(n, 0), c), o != null)
      for (_ = o.length; _--; )
        o[_] != null && Uf(o[_]);
    c || ("value" in u && (_ = u.value) !== void 0 && (_ !== e.value || l === "progress" && !_ || l === "option" && _ !== d.value) && mi(e, "value", _, d.value, !1), "checked" in u && (_ = u.checked) !== void 0 && _ !== e.checked && mi(e, "checked", _, d.checked, !1));
  }
  return e;
}
function qf(e, t, n) {
  try {
    typeof e == "function" ? e(t) : e.current = t;
  } catch (r) {
    ue.__e(r, n);
  }
}
function Gf(e, t, n) {
  var r, s;
  if (ue.unmount && ue.unmount(e), (r = e.ref) && (r.current && r.current !== e.__e || qf(r, null, t)), (r = e.__c) != null) {
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
      r[s] && Gf(r[s], t, n || typeof e.type != "function");
  n || e.__e == null || Uf(e.__e), e.__ = e.__e = e.__d = void 0;
}
function Id(e, t, n) {
  return this.constructor(e, n);
}
pa = If.slice, ue = { __e: function(e, t, n, r) {
  for (var s, o, a; t = t.__; )
    if ((s = t.__c) && !s.__)
      try {
        if ((o = s.constructor) && o.getDerivedStateFromError != null && (s.setState(o.getDerivedStateFromError(e)), a = s.__d), s.componentDidCatch != null && (s.componentDidCatch(e, r || {}), a = s.__d), a)
          return s.__E = s;
      } catch (c) {
        e = c;
      }
  throw e;
} }, Wf = 0, wr.prototype.setState = function(e, t) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = Yt({}, this.state), typeof e == "function" && (e = e(Yt({}, n), this.props)), e && Yt(n, e), e != null && this.__v && (t && this._sb.push(t), $l(this));
}, wr.prototype.forceUpdate = function(e) {
  this.__v && (this.__e = !0, e && this.__h.push(e), $l(this));
}, wr.prototype.render = da, br = [], vi.__r = 0;
class an extends wr {
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
      ...S
    } = this.props, b = t || (a ? "a" : "button"), E = _ == null || typeof _ == "string" && !_.length || i && !u, $ = E && !l && !g && !o && !i;
    return Sn(
      b,
      {
        className: B("btn", n, s, {
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
        ...S
      },
      i ? /* @__PURE__ */ Sn("i", {
        class: `spin icon ${d || "icon-spinner-snake"}`
      }) : typeof l == "string" ? /* @__PURE__ */ Sn("i", {
        class: `icon ${l}`
      }) : l,
      E ? null : /* @__PURE__ */ Sn("span", {
        className: "text"
      }, i ? u : _),
      i ? null : o,
      i ? null : typeof g == "string" ? /* @__PURE__ */ Sn("i", {
        class: `icon ${g}`
      }) : g,
      i ? null : h ? /* @__PURE__ */ Sn("span", {
        className: typeof h == "string" ? `caret-${h}` : "caret"
      }) : null
    );
  }
}
class El extends Qe {
}
N(El, "NAME", "button"), N(El, "Component", an);
var Xf, Fs, Kf, Ud = [];
function Bd(e, t, n) {
  var r, s, o, a = {};
  for (o in t)
    o == "key" ? r = t[o] : o == "ref" ? s = t[o] : a[o] = t[o];
  if (arguments.length > 2 && (a.children = arguments.length > 3 ? Xf.call(arguments, 2) : n), typeof e == "function" && e.defaultProps != null)
    for (o in e.defaultProps)
      a[o] === void 0 && (a[o] = e.defaultProps[o]);
  return Fd(e, a, r, s, null);
}
function Fd(e, t, n, r, s) {
  var o = { type: e, props: t, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: s == null ? ++Kf : s };
  return s == null && Fs.vnode != null && Fs.vnode(o), o;
}
Xf = Ud.slice, Fs = { __e: function(e, t, n, r) {
  for (var s, o, a; t = t.__; )
    if ((s = t.__c) && !s.__)
      try {
        if ((o = s.constructor) && o.getDerivedStateFromError != null && (s.setState(o.getDerivedStateFromError(e)), a = s.__d), s.componentDidCatch != null && (s.componentDidCatch(e, r || {}), a = s.__d), a)
          return s.__E = s;
      } catch (c) {
        e = c;
      }
  throw e;
} }, Kf = 0;
class ha extends _a {
  get nestedTrigger() {
    return this.props.nestedTrigger || "click";
  }
  get menuName() {
    return "menu-nested";
  }
  beforeRender() {
    const t = super.beforeRender();
    let { hasIcons: n } = t;
    return n === void 0 && (n = t.items.some((r) => r.icon)), t.className = B(t.className, this.menuName, {
      "has-icons": n,
      "has-nested-items": t.items.some((r) => this.isNestedItem(r))
    }), t;
  }
  renderToggleIcon(t) {
    return /* @__PURE__ */ Bd("span", {
      class: `${this.name}-toggle-icon caret-${t ? "down" : "right"}`
    });
  }
}
N(ha, "NAME", "menu");
class Cl extends Qe {
}
N(Cl, "NAME", "menu"), N(Cl, "Component", ha);
var ws, oe, Jf, $r, Ol, gi = {}, Zf = [], zd = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function qt(e, t) {
  for (var n in t)
    e[n] = t[n];
  return e;
}
function Qf(e) {
  var t = e.parentNode;
  t && t.removeChild(e);
}
function rn(e, t, n) {
  var r, s, o, a = {};
  for (o in t)
    o == "key" ? r = t[o] : o == "ref" ? s = t[o] : a[o] = t[o];
  if (arguments.length > 2 && (a.children = arguments.length > 3 ? ws.call(arguments, 2) : n), typeof e == "function" && e.defaultProps != null)
    for (o in e.defaultProps)
      a[o] === void 0 && (a[o] = e.defaultProps[o]);
  return Vo(e, a, r, s, null);
}
function Vo(e, t, n, r, s) {
  var o = { type: e, props: t, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: s == null ? ++Jf : s };
  return s == null && oe.vnode != null && oe.vnode(o), o;
}
function $s(e) {
  return e.children;
}
function En(e, t) {
  this.props = e, this.context = t;
}
function Xr(e, t) {
  if (t == null)
    return e.__ ? Xr(e.__, e.__.__k.indexOf(e) + 1) : null;
  for (var n; t < e.__k.length; t++)
    if ((n = e.__k[t]) != null && n.__e != null)
      return n.__e;
  return typeof e.type == "function" ? Xr(e) : null;
}
function eu(e) {
  var t, n;
  if ((e = e.__) != null && e.__c != null) {
    for (e.__e = e.__c.base = null, t = 0; t < e.__k.length; t++)
      if ((n = e.__k[t]) != null && n.__e != null) {
        e.__e = e.__c.base = n.__e;
        break;
      }
    return eu(e);
  }
}
function Al(e) {
  (!e.__d && (e.__d = !0) && $r.push(e) && !yi.__r++ || Ol !== oe.debounceRendering) && ((Ol = oe.debounceRendering) || setTimeout)(yi);
}
function yi() {
  for (var e; yi.__r = $r.length; )
    e = $r.sort(function(t, n) {
      return t.__v.__b - n.__v.__b;
    }), $r = [], e.some(function(t) {
      var n, r, s, o, a, c;
      t.__d && (a = (o = (n = t).__v).__e, (c = n.__P) && (r = [], (s = qt({}, o)).__v = o.__v + 1, va(c, o, s, n.__n, c.ownerSVGElement !== void 0, o.__h != null ? [a] : null, r, a == null ? Xr(o) : a, o.__h), ou(r, o), o.__e != a && eu(o)));
    });
}
function tu(e, t, n, r, s, o, a, c, f, p) {
  var i, d, u, l, _, g, h, v = r && r.__k || Zf, m = v.length;
  for (n.__k = [], i = 0; i < t.length; i++)
    if ((l = n.__k[i] = (l = t[i]) == null || typeof l == "boolean" ? null : typeof l == "string" || typeof l == "number" || typeof l == "bigint" ? Vo(null, l, null, null, l) : Array.isArray(l) ? Vo($s, { children: l }, null, null, null) : l.__b > 0 ? Vo(l.type, l.props, l.key, l.ref ? l.ref : null, l.__v) : l) != null) {
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
      va(e, l, u = u || gi, s, o, a, c, f, p), _ = l.__e, (d = l.ref) && u.ref != d && (h || (h = []), u.ref && h.push(u.ref, null, l), h.push(d, l.__c || _, l)), _ != null ? (g == null && (g = _), typeof l.type == "function" && l.__k === u.__k ? l.__d = f = nu(l, f, e) : f = ru(e, l, u, v, _, f), typeof n.type == "function" && (n.__d = f)) : f && u.__e == f && f.parentNode != e && (f = Xr(u));
    }
  for (n.__e = g, i = m; i--; )
    v[i] != null && su(v[i], v[i]);
  if (h)
    for (i = 0; i < h.length; i++)
      iu(h[i], h[++i], h[++i]);
}
function nu(e, t, n) {
  for (var r, s = e.__k, o = 0; s && o < s.length; o++)
    (r = s[o]) && (r.__ = e, t = typeof r.type == "function" ? nu(r, t, n) : ru(n, r, r, s, r.__e, t));
  return t;
}
function ru(e, t, n, r, s, o) {
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
function Vd(e, t, n, r, s) {
  var o;
  for (o in n)
    o === "children" || o === "key" || o in t || bi(e, o, null, n[o], r);
  for (o in t)
    s && typeof t[o] != "function" || o === "children" || o === "key" || o === "value" || o === "checked" || n[o] === t[o] || bi(e, o, t[o], n[o], r);
}
function Ml(e, t, n) {
  t[0] === "-" ? e.setProperty(t, n) : e[t] = n == null ? "" : typeof n != "number" || zd.test(t) ? n : n + "px";
}
function bi(e, t, n, r, s) {
  var o;
  e:
    if (t === "style")
      if (typeof n == "string")
        e.style.cssText = n;
      else {
        if (typeof r == "string" && (e.style.cssText = r = ""), r)
          for (t in r)
            n && t in n || Ml(e.style, t, "");
        if (n)
          for (t in n)
            r && n[t] === r[t] || Ml(e.style, t, n[t]);
      }
    else if (t[0] === "o" && t[1] === "n")
      o = t !== (t = t.replace(/Capture$/, "")), t = t.toLowerCase() in e ? t.toLowerCase().slice(2) : t.slice(2), e.l || (e.l = {}), e.l[t + o] = n, n ? r || e.addEventListener(t, o ? Dl : Tl, o) : e.removeEventListener(t, o ? Dl : Tl, o);
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
function Tl(e) {
  this.l[e.type + !1](oe.event ? oe.event(e) : e);
}
function Dl(e) {
  this.l[e.type + !0](oe.event ? oe.event(e) : e);
}
function va(e, t, n, r, s, o, a, c, f) {
  var p, i, d, u, l, _, g, h, v, m, S, b, E, $, k, y = t.type;
  if (t.constructor !== void 0)
    return null;
  n.__h != null && (f = n.__h, c = t.__e = n.__e, t.__h = null, o = [c]), (p = oe.__b) && p(t);
  try {
    e:
      if (typeof y == "function") {
        if (h = t.props, v = (p = y.contextType) && r[p.__c], m = p ? v ? v.props.value : p.__ : r, n.__c ? g = (i = t.__c = n.__c).__ = i.__E : ("prototype" in y && y.prototype.render ? t.__c = i = new y(h, m) : (t.__c = i = new En(h, m), i.constructor = y, i.render = qd), v && v.sub(i), i.props = h, i.state || (i.state = {}), i.context = m, i.__n = r, d = i.__d = !0, i.__h = [], i._sb = []), i.__s == null && (i.__s = i.state), y.getDerivedStateFromProps != null && (i.__s == i.state && (i.__s = qt({}, i.__s)), qt(i.__s, y.getDerivedStateFromProps(h, i.__s))), u = i.props, l = i.state, d)
          y.getDerivedStateFromProps == null && i.componentWillMount != null && i.componentWillMount(), i.componentDidMount != null && i.__h.push(i.componentDidMount);
        else {
          if (y.getDerivedStateFromProps == null && h !== u && i.componentWillReceiveProps != null && i.componentWillReceiveProps(h, m), !i.__e && i.shouldComponentUpdate != null && i.shouldComponentUpdate(h, i.__s, m) === !1 || t.__v === n.__v) {
            for (i.props = h, i.state = i.__s, t.__v !== n.__v && (i.__d = !1), i.__v = t, t.__e = n.__e, t.__k = n.__k, t.__k.forEach(function(x) {
              x && (x.__ = t);
            }), S = 0; S < i._sb.length; S++)
              i.__h.push(i._sb[S]);
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
        i.state = i.__s, i.getChildContext != null && (r = qt(qt({}, r), i.getChildContext())), d || i.getSnapshotBeforeUpdate == null || (_ = i.getSnapshotBeforeUpdate(u, l)), k = p != null && p.type === $s && p.key == null ? p.props.children : p, tu(e, Array.isArray(k) ? k : [k], t, n, r, s, o, a, c, f), i.base = t.__e, t.__h = null, i.__h.length && a.push(i), g && (i.__E = i.__ = null), i.__e = !1;
      } else
        o == null && t.__v === n.__v ? (t.__k = n.__k, t.__e = n.__e) : t.__e = Yd(n.__e, t, n, r, s, o, a, f);
    (p = oe.diffed) && p(t);
  } catch (x) {
    t.__v = null, (f || o != null) && (t.__e = c, t.__h = !!f, o[o.indexOf(c)] = null), oe.__e(x, t, n);
  }
}
function ou(e, t) {
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
function Yd(e, t, n, r, s, o, a, c) {
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
    if (o = o && ws.call(e.childNodes), p = (d = n.props || gi).dangerouslySetInnerHTML, i = u.dangerouslySetInnerHTML, !c) {
      if (o != null)
        for (d = {}, _ = 0; _ < e.attributes.length; _++)
          d[e.attributes[_].name] = e.attributes[_].value;
      (i || p) && (i && (p && i.__html == p.__html || i.__html === e.innerHTML) || (e.innerHTML = i && i.__html || ""));
    }
    if (Vd(e, u, d, s, c), i)
      t.__k = [];
    else if (_ = t.props.children, tu(e, Array.isArray(_) ? _ : [_], t, n, r, s && l !== "foreignObject", o, a, o ? o[0] : n.__k && Xr(n, 0), c), o != null)
      for (_ = o.length; _--; )
        o[_] != null && Qf(o[_]);
    c || ("value" in u && (_ = u.value) !== void 0 && (_ !== e.value || l === "progress" && !_ || l === "option" && _ !== d.value) && bi(e, "value", _, d.value, !1), "checked" in u && (_ = u.checked) !== void 0 && _ !== e.checked && bi(e, "checked", _, d.checked, !1));
  }
  return e;
}
function iu(e, t, n) {
  try {
    typeof e == "function" ? e(t) : e.current = t;
  } catch (r) {
    oe.__e(r, n);
  }
}
function su(e, t, n) {
  var r, s;
  if (oe.unmount && oe.unmount(e), (r = e.ref) && (r.current && r.current !== e.__e || iu(r, null, t)), (r = e.__c) != null) {
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
      r[s] && su(r[s], t, n || typeof e.type != "function");
  n || e.__e == null || Qf(e.__e), e.__ = e.__e = e.__d = void 0;
}
function qd(e, t, n) {
  return this.constructor(e, n);
}
function Nl(e, t, n) {
  var r, s, o;
  oe.__ && oe.__(e, t), s = (r = typeof n == "function") ? null : n && n.__k || t.__k, o = [], va(t, e = (!r && n || t).__k = rn($s, null, [e]), s || gi, gi, t.ownerSVGElement !== void 0, !r && n ? [n] : s ? null : t.firstChild ? ws.call(t.childNodes) : null, o, !r && n ? n : s ? s.__e : t.firstChild, r), ou(o, e);
}
ws = Zf.slice, oe = { __e: function(e, t, n, r) {
  for (var s, o, a; t = t.__; )
    if ((s = t.__c) && !s.__)
      try {
        if ((o = s.constructor) && o.getDerivedStateFromError != null && (s.setState(o.getDerivedStateFromError(e)), a = s.__d), s.componentDidCatch != null && (s.componentDidCatch(e, r || {}), a = s.__d), a)
          return s.__E = s;
      } catch (c) {
        e = c;
      }
  throw e;
} }, Jf = 0, En.prototype.setState = function(e, t) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = qt({}, this.state), typeof e == "function" && (e = e(qt({}, n), this.props)), e && qt(n, e), e != null && this.__v && (t && this._sb.push(t), Al(this));
}, En.prototype.forceUpdate = function(e) {
  this.__v && (this.__e = !0, e && this.__h.push(e), Al(this));
}, En.prototype.render = $s, $r = [], yi.__r = 0;
var ma, _e, au, lu, kr, Ll, cu = {}, fu = [], Gd = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function Gt(e, t) {
  for (var n in t)
    e[n] = t[n];
  return e;
}
function uu(e) {
  var t = e.parentNode;
  t && t.removeChild(e);
}
function Hs(e, t, n) {
  var r, s, o, a = {};
  for (o in t)
    o == "key" ? r = t[o] : o == "ref" ? s = t[o] : a[o] = t[o];
  if (arguments.length > 2 && (a.children = arguments.length > 3 ? ma.call(arguments, 2) : n), typeof e == "function" && e.defaultProps != null)
    for (o in e.defaultProps)
      a[o] === void 0 && (a[o] = e.defaultProps[o]);
  return Yo(e, a, r, s, null);
}
function Yo(e, t, n, r, s) {
  var o = { type: e, props: t, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: s == null ? ++au : s };
  return s == null && _e.vnode != null && _e.vnode(o), o;
}
function ga(e) {
  return e.children;
}
function xr(e, t) {
  this.props = e, this.context = t;
}
function Kr(e, t) {
  if (t == null)
    return e.__ ? Kr(e.__, e.__.__k.indexOf(e) + 1) : null;
  for (var n; t < e.__k.length; t++)
    if ((n = e.__k[t]) != null && n.__e != null)
      return n.__e;
  return typeof e.type == "function" ? Kr(e) : null;
}
function _u(e) {
  var t, n;
  if ((e = e.__) != null && e.__c != null) {
    for (e.__e = e.__c.base = null, t = 0; t < e.__k.length; t++)
      if ((n = e.__k[t]) != null && n.__e != null) {
        e.__e = e.__c.base = n.__e;
        break;
      }
    return _u(e);
  }
}
function Pl(e) {
  (!e.__d && (e.__d = !0) && kr.push(e) && !wi.__r++ || Ll !== _e.debounceRendering) && ((Ll = _e.debounceRendering) || setTimeout)(wi);
}
function wi() {
  for (var e; wi.__r = kr.length; )
    e = kr.sort(function(t, n) {
      return t.__v.__b - n.__v.__b;
    }), kr = [], e.some(function(t) {
      var n, r, s, o, a, c;
      t.__d && (a = (o = (n = t).__v).__e, (c = n.__P) && (r = [], (s = Gt({}, o)).__v = o.__v + 1, vu(c, o, s, n.__n, c.ownerSVGElement !== void 0, o.__h != null ? [a] : null, r, a == null ? Kr(o) : a, o.__h), Kd(r, o), o.__e != a && _u(o)));
    });
}
function pu(e, t, n, r, s, o, a, c, f, p) {
  var i, d, u, l, _, g, h, v = r && r.__k || fu, m = v.length;
  for (n.__k = [], i = 0; i < t.length; i++)
    if ((l = n.__k[i] = (l = t[i]) == null || typeof l == "boolean" ? null : typeof l == "string" || typeof l == "number" || typeof l == "bigint" ? Yo(null, l, null, null, l) : Array.isArray(l) ? Yo(ga, { children: l }, null, null, null) : l.__b > 0 ? Yo(l.type, l.props, l.key, l.ref ? l.ref : null, l.__v) : l) != null) {
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
      vu(e, l, u = u || cu, s, o, a, c, f, p), _ = l.__e, (d = l.ref) && u.ref != d && (h || (h = []), u.ref && h.push(u.ref, null, l), h.push(d, l.__c || _, l)), _ != null ? (g == null && (g = _), typeof l.type == "function" && l.__k === u.__k ? l.__d = f = du(l, f, e) : f = hu(e, l, u, v, _, f), typeof n.type == "function" && (n.__d = f)) : f && u.__e == f && f.parentNode != e && (f = Kr(u));
    }
  for (n.__e = g, i = m; i--; )
    v[i] != null && gu(v[i], v[i]);
  if (h)
    for (i = 0; i < h.length; i++)
      mu(h[i], h[++i], h[++i]);
}
function du(e, t, n) {
  for (var r, s = e.__k, o = 0; s && o < s.length; o++)
    (r = s[o]) && (r.__ = e, t = typeof r.type == "function" ? du(r, t, n) : hu(n, r, r, s, r.__e, t));
  return t;
}
function hu(e, t, n, r, s, o) {
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
function Xd(e, t, n, r, s) {
  var o;
  for (o in n)
    o === "children" || o === "key" || o in t || $i(e, o, null, n[o], r);
  for (o in t)
    s && typeof t[o] != "function" || o === "children" || o === "key" || o === "value" || o === "checked" || n[o] === t[o] || $i(e, o, t[o], n[o], r);
}
function Rl(e, t, n) {
  t[0] === "-" ? e.setProperty(t, n) : e[t] = n == null ? "" : typeof n != "number" || Gd.test(t) ? n : n + "px";
}
function $i(e, t, n, r, s) {
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
  this.l[e.type + !1](_e.event ? _e.event(e) : e);
}
function Wl(e) {
  this.l[e.type + !0](_e.event ? _e.event(e) : e);
}
function vu(e, t, n, r, s, o, a, c, f) {
  var p, i, d, u, l, _, g, h, v, m, S, b, E, $, k, y = t.type;
  if (t.constructor !== void 0)
    return null;
  n.__h != null && (f = n.__h, c = t.__e = n.__e, t.__h = null, o = [c]), (p = _e.__b) && p(t);
  try {
    e:
      if (typeof y == "function") {
        if (h = t.props, v = (p = y.contextType) && r[p.__c], m = p ? v ? v.props.value : p.__ : r, n.__c ? g = (i = t.__c = n.__c).__ = i.__E : ("prototype" in y && y.prototype.render ? t.__c = i = new y(h, m) : (t.__c = i = new xr(h, m), i.constructor = y, i.render = Zd), v && v.sub(i), i.props = h, i.state || (i.state = {}), i.context = m, i.__n = r, d = i.__d = !0, i.__h = [], i._sb = []), i.__s == null && (i.__s = i.state), y.getDerivedStateFromProps != null && (i.__s == i.state && (i.__s = Gt({}, i.__s)), Gt(i.__s, y.getDerivedStateFromProps(h, i.__s))), u = i.props, l = i.state, d)
          y.getDerivedStateFromProps == null && i.componentWillMount != null && i.componentWillMount(), i.componentDidMount != null && i.__h.push(i.componentDidMount);
        else {
          if (y.getDerivedStateFromProps == null && h !== u && i.componentWillReceiveProps != null && i.componentWillReceiveProps(h, m), !i.__e && i.shouldComponentUpdate != null && i.shouldComponentUpdate(h, i.__s, m) === !1 || t.__v === n.__v) {
            for (i.props = h, i.state = i.__s, t.__v !== n.__v && (i.__d = !1), i.__v = t, t.__e = n.__e, t.__k = n.__k, t.__k.forEach(function(x) {
              x && (x.__ = t);
            }), S = 0; S < i._sb.length; S++)
              i.__h.push(i._sb[S]);
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
        i.state = i.__s, i.getChildContext != null && (r = Gt(Gt({}, r), i.getChildContext())), d || i.getSnapshotBeforeUpdate == null || (_ = i.getSnapshotBeforeUpdate(u, l)), k = p != null && p.type === ga && p.key == null ? p.props.children : p, pu(e, Array.isArray(k) ? k : [k], t, n, r, s, o, a, c, f), i.base = t.__e, t.__h = null, i.__h.length && a.push(i), g && (i.__E = i.__ = null), i.__e = !1;
      } else
        o == null && t.__v === n.__v ? (t.__k = n.__k, t.__e = n.__e) : t.__e = Jd(n.__e, t, n, r, s, o, a, f);
    (p = _e.diffed) && p(t);
  } catch (x) {
    t.__v = null, (f || o != null) && (t.__e = c, t.__h = !!f, o[o.indexOf(c)] = null), _e.__e(x, t, n);
  }
}
function Kd(e, t) {
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
function Jd(e, t, n, r, s, o, a, c) {
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
    if (o = o && ma.call(e.childNodes), p = (d = n.props || cu).dangerouslySetInnerHTML, i = u.dangerouslySetInnerHTML, !c) {
      if (o != null)
        for (d = {}, _ = 0; _ < e.attributes.length; _++)
          d[e.attributes[_].name] = e.attributes[_].value;
      (i || p) && (i && (p && i.__html == p.__html || i.__html === e.innerHTML) || (e.innerHTML = i && i.__html || ""));
    }
    if (Xd(e, u, d, s, c), i)
      t.__k = [];
    else if (_ = t.props.children, pu(e, Array.isArray(_) ? _ : [_], t, n, r, s && l !== "foreignObject", o, a, o ? o[0] : n.__k && Kr(n, 0), c), o != null)
      for (_ = o.length; _--; )
        o[_] != null && uu(o[_]);
    c || ("value" in u && (_ = u.value) !== void 0 && (_ !== e.value || l === "progress" && !_ || l === "option" && _ !== d.value) && $i(e, "value", _, d.value, !1), "checked" in u && (_ = u.checked) !== void 0 && _ !== e.checked && $i(e, "checked", _, d.checked, !1));
  }
  return e;
}
function mu(e, t, n) {
  try {
    typeof e == "function" ? e(t) : e.current = t;
  } catch (r) {
    _e.__e(r, n);
  }
}
function gu(e, t, n) {
  var r, s;
  if (_e.unmount && _e.unmount(e), (r = e.ref) && (r.current && r.current !== e.__e || mu(r, null, t)), (r = e.__c) != null) {
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
      r[s] && gu(r[s], t, n || typeof e.type != "function");
  n || e.__e == null || uu(e.__e), e.__ = e.__e = e.__d = void 0;
}
function Zd(e, t, n) {
  return this.constructor(e, n);
}
ma = fu.slice, _e = { __e: function(e, t, n, r) {
  for (var s, o, a; t = t.__; )
    if ((s = t.__c) && !s.__)
      try {
        if ((o = s.constructor) && o.getDerivedStateFromError != null && (s.setState(o.getDerivedStateFromError(e)), a = s.__d), s.componentDidCatch != null && (s.componentDidCatch(e, r || {}), a = s.__d), a)
          return s.__E = s;
      } catch (c) {
        e = c;
      }
  throw e;
} }, au = 0, lu = function(e) {
  return e != null && e.constructor === void 0;
}, xr.prototype.setState = function(e, t) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = Gt({}, this.state), typeof e == "function" && (e = e(Gt({}, n), this.props)), e && Gt(n, e), e != null && this.__v && (t && this._sb.push(t), Pl(this));
}, xr.prototype.forceUpdate = function(e) {
  this.__v && (this.__e = !0, e && this.__h.push(e), Pl(this));
}, xr.prototype.render = ga, kr = [], wi.__r = 0;
class ya extends xr {
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
    return /* @__PURE__ */ Hs(an, {
      key: r,
      ...s
    });
  }
  renderItem(t, n, r) {
    const { itemRender: s, defaultBtnProps: o, onClickItem: a } = t, c = { key: r, ...n };
    if (o && Object.assign(c, o), a && (c.onClick = this.handleItemClick.bind(this, c, r, n.onClick)), s) {
      const f = s.call(this, c, Hs);
      if (lu(f))
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
    return /* @__PURE__ */ Hs("div", {
      className: B("btn-group", s ? `size-${s}` : "", n),
      ...l
    }, r && r.map(this.renderItem.bind(this, t)), c);
  }
}
function Qd({
  ...e
}) {
  return /* @__PURE__ */ rn(ya, {
    ...e
  });
}
class yu extends En {
  render() {
    const { message: t, className: n, type: r, actions: s, close: o } = this.props, a = B([r, "border-none"]), c = s != null && s.length ? s.map((f) => ({ ...f, className: a })) : [];
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
    return /* @__PURE__ */ rn("div", {
      class: B([n, r || "default", "messager"])
    }, /* @__PURE__ */ rn("div", {
      class: "messager-content"
    }, t), /* @__PURE__ */ rn(Qd, {
      items: c
    }));
  }
}
N(yu, "defaultProps");
class bu extends En {
  render() {
    const { className: t, placement: n } = this.props;
    return /* @__PURE__ */ rn("div", {
      class: B([t || "", "messagers-holder", "col"]),
      "data-placement": n
    });
  }
}
N(bu, "defaultProps");
class jl extends ft {
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
      Nl(rn(bu, p), f);
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
    Nl(rn(yu, c), o, a);
  }
}
N(jl, "NAME", "messager"), N(jl, "DEFAULT", {
  placement: "top",
  type: "default",
  close: !0
});
var ba, pe, wu, Sr, Il, $u = {}, ku = [], eh = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function Xt(e, t) {
  for (var n in t)
    e[n] = t[n];
  return e;
}
function xu(e) {
  var t = e.parentNode;
  t && t.removeChild(e);
}
function Ho(e, t, n) {
  var r, s, o, a = {};
  for (o in t)
    o == "key" ? r = t[o] : o == "ref" ? s = t[o] : a[o] = t[o];
  if (arguments.length > 2 && (a.children = arguments.length > 3 ? ba.call(arguments, 2) : n), typeof e == "function" && e.defaultProps != null)
    for (o in e.defaultProps)
      a[o] === void 0 && (a[o] = e.defaultProps[o]);
  return qo(e, a, r, s, null);
}
function qo(e, t, n, r, s) {
  var o = { type: e, props: t, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: s == null ? ++wu : s };
  return s == null && pe.vnode != null && pe.vnode(o), o;
}
function wa(e) {
  return e.children;
}
function Er(e, t) {
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
function Su(e) {
  var t, n;
  if ((e = e.__) != null && e.__c != null) {
    for (e.__e = e.__c.base = null, t = 0; t < e.__k.length; t++)
      if ((n = e.__k[t]) != null && n.__e != null) {
        e.__e = e.__c.base = n.__e;
        break;
      }
    return Su(e);
  }
}
function Ul(e) {
  (!e.__d && (e.__d = !0) && Sr.push(e) && !ki.__r++ || Il !== pe.debounceRendering) && ((Il = pe.debounceRendering) || setTimeout)(ki);
}
function ki() {
  for (var e; ki.__r = Sr.length; )
    e = Sr.sort(function(t, n) {
      return t.__v.__b - n.__v.__b;
    }), Sr = [], e.some(function(t) {
      var n, r, s, o, a, c;
      t.__d && (a = (o = (n = t).__v).__e, (c = n.__P) && (r = [], (s = Xt({}, o)).__v = o.__v + 1, Au(c, o, s, n.__n, c.ownerSVGElement !== void 0, o.__h != null ? [a] : null, r, a == null ? Jr(o) : a, o.__h), nh(r, o), o.__e != a && Su(o)));
    });
}
function Eu(e, t, n, r, s, o, a, c, f, p) {
  var i, d, u, l, _, g, h, v = r && r.__k || ku, m = v.length;
  for (n.__k = [], i = 0; i < t.length; i++)
    if ((l = n.__k[i] = (l = t[i]) == null || typeof l == "boolean" ? null : typeof l == "string" || typeof l == "number" || typeof l == "bigint" ? qo(null, l, null, null, l) : Array.isArray(l) ? qo(wa, { children: l }, null, null, null) : l.__b > 0 ? qo(l.type, l.props, l.key, l.ref ? l.ref : null, l.__v) : l) != null) {
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
      Au(e, l, u = u || $u, s, o, a, c, f, p), _ = l.__e, (d = l.ref) && u.ref != d && (h || (h = []), u.ref && h.push(u.ref, null, l), h.push(d, l.__c || _, l)), _ != null ? (g == null && (g = _), typeof l.type == "function" && l.__k === u.__k ? l.__d = f = Cu(l, f, e) : f = Ou(e, l, u, v, _, f), typeof n.type == "function" && (n.__d = f)) : f && u.__e == f && f.parentNode != e && (f = Jr(u));
    }
  for (n.__e = g, i = m; i--; )
    v[i] != null && Tu(v[i], v[i]);
  if (h)
    for (i = 0; i < h.length; i++)
      Mu(h[i], h[++i], h[++i]);
}
function Cu(e, t, n) {
  for (var r, s = e.__k, o = 0; s && o < s.length; o++)
    (r = s[o]) && (r.__ = e, t = typeof r.type == "function" ? Cu(r, t, n) : Ou(n, r, r, s, r.__e, t));
  return t;
}
function Ou(e, t, n, r, s, o) {
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
function th(e, t, n, r, s) {
  var o;
  for (o in n)
    o === "children" || o === "key" || o in t || xi(e, o, null, n[o], r);
  for (o in t)
    s && typeof t[o] != "function" || o === "children" || o === "key" || o === "value" || o === "checked" || n[o] === t[o] || xi(e, o, t[o], n[o], r);
}
function Bl(e, t, n) {
  t[0] === "-" ? e.setProperty(t, n) : e[t] = n == null ? "" : typeof n != "number" || eh.test(t) ? n : n + "px";
}
function xi(e, t, n, r, s) {
  var o;
  e:
    if (t === "style")
      if (typeof n == "string")
        e.style.cssText = n;
      else {
        if (typeof r == "string" && (e.style.cssText = r = ""), r)
          for (t in r)
            n && t in n || Bl(e.style, t, "");
        if (n)
          for (t in n)
            r && n[t] === r[t] || Bl(e.style, t, n[t]);
      }
    else if (t[0] === "o" && t[1] === "n")
      o = t !== (t = t.replace(/Capture$/, "")), t = t.toLowerCase() in e ? t.toLowerCase().slice(2) : t.slice(2), e.l || (e.l = {}), e.l[t + o] = n, n ? r || e.addEventListener(t, o ? zl : Fl, o) : e.removeEventListener(t, o ? zl : Fl, o);
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
function Fl(e) {
  this.l[e.type + !1](pe.event ? pe.event(e) : e);
}
function zl(e) {
  this.l[e.type + !0](pe.event ? pe.event(e) : e);
}
function Au(e, t, n, r, s, o, a, c, f) {
  var p, i, d, u, l, _, g, h, v, m, S, b, E, $, k, y = t.type;
  if (t.constructor !== void 0)
    return null;
  n.__h != null && (f = n.__h, c = t.__e = n.__e, t.__h = null, o = [c]), (p = pe.__b) && p(t);
  try {
    e:
      if (typeof y == "function") {
        if (h = t.props, v = (p = y.contextType) && r[p.__c], m = p ? v ? v.props.value : p.__ : r, n.__c ? g = (i = t.__c = n.__c).__ = i.__E : ("prototype" in y && y.prototype.render ? t.__c = i = new y(h, m) : (t.__c = i = new Er(h, m), i.constructor = y, i.render = oh), v && v.sub(i), i.props = h, i.state || (i.state = {}), i.context = m, i.__n = r, d = i.__d = !0, i.__h = [], i._sb = []), i.__s == null && (i.__s = i.state), y.getDerivedStateFromProps != null && (i.__s == i.state && (i.__s = Xt({}, i.__s)), Xt(i.__s, y.getDerivedStateFromProps(h, i.__s))), u = i.props, l = i.state, d)
          y.getDerivedStateFromProps == null && i.componentWillMount != null && i.componentWillMount(), i.componentDidMount != null && i.__h.push(i.componentDidMount);
        else {
          if (y.getDerivedStateFromProps == null && h !== u && i.componentWillReceiveProps != null && i.componentWillReceiveProps(h, m), !i.__e && i.shouldComponentUpdate != null && i.shouldComponentUpdate(h, i.__s, m) === !1 || t.__v === n.__v) {
            for (i.props = h, i.state = i.__s, t.__v !== n.__v && (i.__d = !1), i.__v = t, t.__e = n.__e, t.__k = n.__k, t.__k.forEach(function(x) {
              x && (x.__ = t);
            }), S = 0; S < i._sb.length; S++)
              i.__h.push(i._sb[S]);
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
        i.state = i.__s, i.getChildContext != null && (r = Xt(Xt({}, r), i.getChildContext())), d || i.getSnapshotBeforeUpdate == null || (_ = i.getSnapshotBeforeUpdate(u, l)), k = p != null && p.type === wa && p.key == null ? p.props.children : p, Eu(e, Array.isArray(k) ? k : [k], t, n, r, s, o, a, c, f), i.base = t.__e, t.__h = null, i.__h.length && a.push(i), g && (i.__E = i.__ = null), i.__e = !1;
      } else
        o == null && t.__v === n.__v ? (t.__k = n.__k, t.__e = n.__e) : t.__e = rh(n.__e, t, n, r, s, o, a, f);
    (p = pe.diffed) && p(t);
  } catch (x) {
    t.__v = null, (f || o != null) && (t.__e = c, t.__h = !!f, o[o.indexOf(c)] = null), pe.__e(x, t, n);
  }
}
function nh(e, t) {
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
function rh(e, t, n, r, s, o, a, c) {
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
    if (o = o && ba.call(e.childNodes), p = (d = n.props || $u).dangerouslySetInnerHTML, i = u.dangerouslySetInnerHTML, !c) {
      if (o != null)
        for (d = {}, _ = 0; _ < e.attributes.length; _++)
          d[e.attributes[_].name] = e.attributes[_].value;
      (i || p) && (i && (p && i.__html == p.__html || i.__html === e.innerHTML) || (e.innerHTML = i && i.__html || ""));
    }
    if (th(e, u, d, s, c), i)
      t.__k = [];
    else if (_ = t.props.children, Eu(e, Array.isArray(_) ? _ : [_], t, n, r, s && l !== "foreignObject", o, a, o ? o[0] : n.__k && Jr(n, 0), c), o != null)
      for (_ = o.length; _--; )
        o[_] != null && xu(o[_]);
    c || ("value" in u && (_ = u.value) !== void 0 && (_ !== e.value || l === "progress" && !_ || l === "option" && _ !== d.value) && xi(e, "value", _, d.value, !1), "checked" in u && (_ = u.checked) !== void 0 && _ !== e.checked && xi(e, "checked", _, d.checked, !1));
  }
  return e;
}
function Mu(e, t, n) {
  try {
    typeof e == "function" ? e(t) : e.current = t;
  } catch (r) {
    pe.__e(r, n);
  }
}
function Tu(e, t, n) {
  var r, s;
  if (pe.unmount && pe.unmount(e), (r = e.ref) && (r.current && r.current !== e.__e || Mu(r, null, t)), (r = e.__c) != null) {
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
      r[s] && Tu(r[s], t, n || typeof e.type != "function");
  n || e.__e == null || xu(e.__e), e.__ = e.__e = e.__d = void 0;
}
function oh(e, t, n) {
  return this.constructor(e, n);
}
ba = ku.slice, pe = { __e: function(e, t, n, r) {
  for (var s, o, a; t = t.__; )
    if ((s = t.__c) && !s.__)
      try {
        if ((o = s.constructor) && o.getDerivedStateFromError != null && (s.setState(o.getDerivedStateFromError(e)), a = s.__d), s.componentDidCatch != null && (s.componentDidCatch(e, r || {}), a = s.__d), a)
          return s.__E = s;
      } catch (c) {
        e = c;
      }
  throw e;
} }, wu = 0, Er.prototype.setState = function(e, t) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = Xt({}, this.state), typeof e == "function" && (e = e(Xt({}, n), this.props)), e && Xt(n, e), e != null && this.__v && (t && this._sb.push(t), Ul(this));
}, Er.prototype.forceUpdate = function(e) {
  this.__v && (this.__e = !0, e && this.__h.push(e), Ul(this));
}, Er.prototype.render = wa, Sr = [], ki.__r = 0;
class zs extends Er {
  render() {
    const { percent: t, circleSize: n, circleBorderSize: r, circleBgColor: s, circleColor: o } = this.props, a = (n - r) / 2, c = n / 2;
    return /* @__PURE__ */ Ho("svg", {
      width: n,
      height: n,
      class: "progress-circle"
    }, /* @__PURE__ */ Ho("circle", {
      cx: c,
      cy: c,
      r: a,
      stroke: s,
      "stroke-width": r
    }), /* @__PURE__ */ Ho("circle", {
      cx: c,
      cy: c,
      r: a,
      stroke: o,
      "stroke-dasharray": Math.PI * a * 2,
      "stroke-dashoffset": Math.PI * a * 2 * (100 - t) / 100,
      "stroke-width": r
    }), /* @__PURE__ */ Ho("text", {
      x: c,
      y: c + r / 4,
      "dominant-baseline": "middle",
      style: { fontSize: `${a}px` }
    }, Math.round(t)));
  }
}
N(zs, "NAME", "zui.progress-circle"), N(zs, "defaultProps", {
  circleSize: 24,
  circleBorderSize: 2,
  circleBgColor: "var(--progress-circle-bg)",
  circleColor: "var(--progress-circle-bar-color)"
});
class Vl extends Qe {
}
N(Vl, "NAME", "table-sorter"), N(Vl, "Component", zs);
function ih(e) {
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
function sh(e) {
  document.readyState !== "loading" ? e() : document.addEventListener("DOMContentLoaded", e);
}
function ah(e, t) {
  const n = typeof e == "string" ? document.querySelector(e) : e;
  if (!n)
    return !1;
  const r = n.getBoundingClientRect(), s = window.innerHeight || document.documentElement.clientHeight, o = window.innerWidth || document.documentElement.clientWidth;
  if (t != null && t.fullyCheck)
    return r.left >= 0 && r.top >= 0 && r.left + r.width <= o && r.top + r.height <= s;
  const a = r.top <= s && r.top + r.height >= 0, c = r.left <= o && r.left + r.width >= 0;
  return a && c;
}
const Pb = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  selectText: ih,
  domReady: sh,
  isElementVisible: ah,
  getClassList: bs,
  classes: B
}, Symbol.toStringTag, { value: "Module" }));
let lh = (e = 21) => crypto.getRandomValues(new Uint8Array(e)).reduce((t, n) => (n &= 63, n < 36 ? t += n.toString(36) : n < 62 ? t += (n - 26).toString(36).toUpperCase() : n > 62 ? t += "-" : t += "_", t), "");
var ho, Ht, rt, Mn, Tn, Go;
const il = class {
  constructor(t, n = "local") {
    L(this, Tn);
    L(this, ho, void 0);
    L(this, Ht, void 0);
    L(this, rt, void 0);
    L(this, Mn, void 0);
    H(this, ho, n), H(this, Ht, `ZUI_STORE:${t != null ? t : lh()}`), H(this, rt, n === "local" ? localStorage : sessionStorage);
  }
  get type() {
    return w(this, ho);
  }
  get session() {
    return this.type === "session" ? this : (w(this, Mn) || H(this, Mn, new il(w(this, Ht), "session")), w(this, Mn));
  }
  get(t, n) {
    const r = w(this, rt).getItem(te(this, Tn, Go).call(this, t));
    return typeof r == "string" ? JSON.parse(r) : r != null ? r : n;
  }
  set(t, n) {
    if (n == null)
      return this.remove(t);
    w(this, rt).setItem(te(this, Tn, Go).call(this, t), JSON.stringify(n));
  }
  remove(t) {
    w(this, rt).removeItem(te(this, Tn, Go).call(this, t));
  }
  each(t) {
    for (let n = 0; n < w(this, rt).length; n++) {
      const r = w(this, rt).key(n);
      if (r != null && r.startsWith(w(this, Ht))) {
        const s = w(this, rt).getItem(r);
        typeof s == "string" && t(r.substring(w(this, Ht).length + 1), JSON.parse(s));
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
let Si = il;
ho = new WeakMap(), Ht = new WeakMap(), rt = new WeakMap(), Mn = new WeakMap(), Tn = new WeakSet(), Go = function(t) {
  return `${w(this, Ht)}:${t}`;
};
const ch = new Si("DEFAULT");
function fh(e, t = "local") {
  return new Si(e, t);
}
Object.assign(ch, { create: fh });
var $a, de, Du, Cr, Yl, Nu = {}, Lu = [], uh = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function Kt(e, t) {
  for (var n in t)
    e[n] = t[n];
  return e;
}
function Pu(e) {
  var t = e.parentNode;
  t && t.removeChild(e);
}
function Ws(e, t, n) {
  var r, s, o, a = {};
  for (o in t)
    o == "key" ? r = t[o] : o == "ref" ? s = t[o] : a[o] = t[o];
  if (arguments.length > 2 && (a.children = arguments.length > 3 ? $a.call(arguments, 2) : n), typeof e == "function" && e.defaultProps != null)
    for (o in e.defaultProps)
      a[o] === void 0 && (a[o] = e.defaultProps[o]);
  return Xo(e, a, r, s, null);
}
function Xo(e, t, n, r, s) {
  var o = { type: e, props: t, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: s == null ? ++Du : s };
  return s == null && de.vnode != null && de.vnode(o), o;
}
function ka(e) {
  return e.children;
}
function Or(e, t) {
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
function ql(e) {
  (!e.__d && (e.__d = !0) && Cr.push(e) && !Ei.__r++ || Yl !== de.debounceRendering) && ((Yl = de.debounceRendering) || setTimeout)(Ei);
}
function Ei() {
  for (var e; Ei.__r = Cr.length; )
    e = Cr.sort(function(t, n) {
      return t.__v.__b - n.__v.__b;
    }), Cr = [], e.some(function(t) {
      var n, r, s, o, a, c;
      t.__d && (a = (o = (n = t).__v).__e, (c = n.__P) && (r = [], (s = Kt({}, o)).__v = o.__v + 1, Iu(c, o, s, n.__n, c.ownerSVGElement !== void 0, o.__h != null ? [a] : null, r, a == null ? Zr(o) : a, o.__h), ph(r, o), o.__e != a && Ru(o)));
    });
}
function Hu(e, t, n, r, s, o, a, c, f, p) {
  var i, d, u, l, _, g, h, v = r && r.__k || Lu, m = v.length;
  for (n.__k = [], i = 0; i < t.length; i++)
    if ((l = n.__k[i] = (l = t[i]) == null || typeof l == "boolean" ? null : typeof l == "string" || typeof l == "number" || typeof l == "bigint" ? Xo(null, l, null, null, l) : Array.isArray(l) ? Xo(ka, { children: l }, null, null, null) : l.__b > 0 ? Xo(l.type, l.props, l.key, l.ref ? l.ref : null, l.__v) : l) != null) {
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
      Iu(e, l, u = u || Nu, s, o, a, c, f, p), _ = l.__e, (d = l.ref) && u.ref != d && (h || (h = []), u.ref && h.push(u.ref, null, l), h.push(d, l.__c || _, l)), _ != null ? (g == null && (g = _), typeof l.type == "function" && l.__k === u.__k ? l.__d = f = Wu(l, f, e) : f = ju(e, l, u, v, _, f), typeof n.type == "function" && (n.__d = f)) : f && u.__e == f && f.parentNode != e && (f = Zr(u));
    }
  for (n.__e = g, i = m; i--; )
    v[i] != null && Bu(v[i], v[i]);
  if (h)
    for (i = 0; i < h.length; i++)
      Uu(h[i], h[++i], h[++i]);
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
function _h(e, t, n, r, s) {
  var o;
  for (o in n)
    o === "children" || o === "key" || o in t || Ci(e, o, null, n[o], r);
  for (o in t)
    s && typeof t[o] != "function" || o === "children" || o === "key" || o === "value" || o === "checked" || n[o] === t[o] || Ci(e, o, t[o], n[o], r);
}
function Gl(e, t, n) {
  t[0] === "-" ? e.setProperty(t, n) : e[t] = n == null ? "" : typeof n != "number" || uh.test(t) ? n : n + "px";
}
function Ci(e, t, n, r, s) {
  var o;
  e:
    if (t === "style")
      if (typeof n == "string")
        e.style.cssText = n;
      else {
        if (typeof r == "string" && (e.style.cssText = r = ""), r)
          for (t in r)
            n && t in n || Gl(e.style, t, "");
        if (n)
          for (t in n)
            r && n[t] === r[t] || Gl(e.style, t, n[t]);
      }
    else if (t[0] === "o" && t[1] === "n")
      o = t !== (t = t.replace(/Capture$/, "")), t = t.toLowerCase() in e ? t.toLowerCase().slice(2) : t.slice(2), e.l || (e.l = {}), e.l[t + o] = n, n ? r || e.addEventListener(t, o ? Kl : Xl, o) : e.removeEventListener(t, o ? Kl : Xl, o);
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
function Xl(e) {
  this.l[e.type + !1](de.event ? de.event(e) : e);
}
function Kl(e) {
  this.l[e.type + !0](de.event ? de.event(e) : e);
}
function Iu(e, t, n, r, s, o, a, c, f) {
  var p, i, d, u, l, _, g, h, v, m, S, b, E, $, k, y = t.type;
  if (t.constructor !== void 0)
    return null;
  n.__h != null && (f = n.__h, c = t.__e = n.__e, t.__h = null, o = [c]), (p = de.__b) && p(t);
  try {
    e:
      if (typeof y == "function") {
        if (h = t.props, v = (p = y.contextType) && r[p.__c], m = p ? v ? v.props.value : p.__ : r, n.__c ? g = (i = t.__c = n.__c).__ = i.__E : ("prototype" in y && y.prototype.render ? t.__c = i = new y(h, m) : (t.__c = i = new Or(h, m), i.constructor = y, i.render = hh), v && v.sub(i), i.props = h, i.state || (i.state = {}), i.context = m, i.__n = r, d = i.__d = !0, i.__h = [], i._sb = []), i.__s == null && (i.__s = i.state), y.getDerivedStateFromProps != null && (i.__s == i.state && (i.__s = Kt({}, i.__s)), Kt(i.__s, y.getDerivedStateFromProps(h, i.__s))), u = i.props, l = i.state, d)
          y.getDerivedStateFromProps == null && i.componentWillMount != null && i.componentWillMount(), i.componentDidMount != null && i.__h.push(i.componentDidMount);
        else {
          if (y.getDerivedStateFromProps == null && h !== u && i.componentWillReceiveProps != null && i.componentWillReceiveProps(h, m), !i.__e && i.shouldComponentUpdate != null && i.shouldComponentUpdate(h, i.__s, m) === !1 || t.__v === n.__v) {
            for (i.props = h, i.state = i.__s, t.__v !== n.__v && (i.__d = !1), i.__v = t, t.__e = n.__e, t.__k = n.__k, t.__k.forEach(function(x) {
              x && (x.__ = t);
            }), S = 0; S < i._sb.length; S++)
              i.__h.push(i._sb[S]);
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
        i.state = i.__s, i.getChildContext != null && (r = Kt(Kt({}, r), i.getChildContext())), d || i.getSnapshotBeforeUpdate == null || (_ = i.getSnapshotBeforeUpdate(u, l)), k = p != null && p.type === ka && p.key == null ? p.props.children : p, Hu(e, Array.isArray(k) ? k : [k], t, n, r, s, o, a, c, f), i.base = t.__e, t.__h = null, i.__h.length && a.push(i), g && (i.__E = i.__ = null), i.__e = !1;
      } else
        o == null && t.__v === n.__v ? (t.__k = n.__k, t.__e = n.__e) : t.__e = dh(n.__e, t, n, r, s, o, a, f);
    (p = de.diffed) && p(t);
  } catch (x) {
    t.__v = null, (f || o != null) && (t.__e = c, t.__h = !!f, o[o.indexOf(c)] = null), de.__e(x, t, n);
  }
}
function ph(e, t) {
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
function dh(e, t, n, r, s, o, a, c) {
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
    if (o = o && $a.call(e.childNodes), p = (d = n.props || Nu).dangerouslySetInnerHTML, i = u.dangerouslySetInnerHTML, !c) {
      if (o != null)
        for (d = {}, _ = 0; _ < e.attributes.length; _++)
          d[e.attributes[_].name] = e.attributes[_].value;
      (i || p) && (i && (p && i.__html == p.__html || i.__html === e.innerHTML) || (e.innerHTML = i && i.__html || ""));
    }
    if (_h(e, u, d, s, c), i)
      t.__k = [];
    else if (_ = t.props.children, Hu(e, Array.isArray(_) ? _ : [_], t, n, r, s && l !== "foreignObject", o, a, o ? o[0] : n.__k && Zr(n, 0), c), o != null)
      for (_ = o.length; _--; )
        o[_] != null && Pu(o[_]);
    c || ("value" in u && (_ = u.value) !== void 0 && (_ !== e.value || l === "progress" && !_ || l === "option" && _ !== d.value) && Ci(e, "value", _, d.value, !1), "checked" in u && (_ = u.checked) !== void 0 && _ !== e.checked && Ci(e, "checked", _, d.checked, !1));
  }
  return e;
}
function Uu(e, t, n) {
  try {
    typeof e == "function" ? e(t) : e.current = t;
  } catch (r) {
    de.__e(r, n);
  }
}
function Bu(e, t, n) {
  var r, s;
  if (de.unmount && de.unmount(e), (r = e.ref) && (r.current && r.current !== e.__e || Uu(r, null, t)), (r = e.__c) != null) {
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
  n || e.__e == null || Pu(e.__e), e.__ = e.__e = e.__d = void 0;
}
function hh(e, t, n) {
  return this.constructor(e, n);
}
$a = Lu.slice, de = { __e: function(e, t, n, r) {
  for (var s, o, a; t = t.__; )
    if ((s = t.__c) && !s.__)
      try {
        if ((o = s.constructor) && o.getDerivedStateFromError != null && (s.setState(o.getDerivedStateFromError(e)), a = s.__d), s.componentDidCatch != null && (s.componentDidCatch(e, r || {}), a = s.__d), a)
          return s.__E = s;
      } catch (c) {
        e = c;
      }
  throw e;
} }, Du = 0, Or.prototype.setState = function(e, t) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = Kt({}, this.state), typeof e == "function" && (e = e(Kt({}, n), this.props)), e && Kt(n, e), e != null && this.__v && (t && this._sb.push(t), ql(this));
}, Or.prototype.forceUpdate = function(e) {
  this.__v && (this.__e = !0, e && this.__h.push(e), ql(this));
}, Or.prototype.render = ka, Cr = [], Ei.__r = 0;
function vh(e) {
  if (e.indexOf("#") === 0 && (e = e.slice(1)), e.length === 3 && (e = e[0] + e[0] + e[1] + e[1] + e[2] + e[2]), e.length !== 6)
    throw new Error(`Invalid HEX color "${e}".`);
  return [
    parseInt(e.slice(0, 2), 16),
    parseInt(e.slice(2, 4), 16),
    parseInt(e.slice(4, 6), 16)
  ];
}
function mh(e) {
  const [t, n, r] = typeof e == "string" ? vh(e) : e;
  return t * 0.299 + n * 0.587 + r * 0.114 > 186;
}
function Jl(e, t) {
  var n, r;
  return mh(e) ? (n = t == null ? void 0 : t.dark) != null ? n : "#333333" : (r = t == null ? void 0 : t.light) != null ? r : "#ffffff";
}
function Zl(e, t = 255) {
  return Math.min(Math.max(e, 0), t);
}
function gh(e, t, n) {
  e = e % 360 / 360, t = Zl(t), n = Zl(n);
  const r = n <= 0.5 ? n * (t + 1) : n + t - n * t, s = n * 2 - r, o = (a) => (a = a < 0 ? a + 1 : a > 1 ? a - 1 : a, a * 6 < 1 ? s + (r - s) * a * 6 : a * 2 < 1 ? r : a * 3 < 2 ? s + (r - s) * (2 / 3 - a) * 6 : s);
  return [
    o(e + 1 / 3) * 255,
    o(e) * 255,
    o(e - 1 / 3) * 255
  ];
}
function yh(e) {
  let t = 0;
  if (typeof e != "string" && (e = String(e)), e && e.length)
    for (let n = 0; n < e.length; ++n)
      t += (n + 1) * e.charCodeAt(n);
  return t;
}
function bh(e, t) {
  return /^[\u4e00-\u9fa5\s]+$/.test(e) ? e = e.length <= t ? e : e.substring(e.length - t) : /^[A-Za-z\d\s]+$/.test(e) ? e = e[0].toUpperCase() : e = e.length <= t ? e : e.substring(0, t), e;
}
class wh extends Or {
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
    let S = 32;
    r && (typeof r == "number" ? (m.width = `${r}px`, m.height = `${r}px`, m.fontSize = `${Math.max(12, Math.round(r / 2))}px`, S = r) : (v.push(`size-${r}`), S = { xs: 20, sm: 24, lg: 48, xl: 80 }[r])), s ? v.push("circle") : o && (typeof o == "number" ? m.borderRadius = `${o}px` : v.push(`rounded-${o}`));
    let b;
    if (d)
      v.push("has-img"), b = /* @__PURE__ */ Ws("img", {
        className: "avatar-img",
        src: d,
        alt: f
      });
    else if (f != null && f.length) {
      const E = bh(f, i);
      if (v.push("has-text", `has-text-${E.length}`), a)
        !c && a && (m.color = Jl(a));
      else {
        const k = p != null ? p : f, y = (typeof k == "number" ? k : yh(k)) * u % 360;
        if (m.background = `hsl(${y},${l * 100}%,${_ * 100}%)`, !c) {
          const x = gh(y, l, _);
          m.color = Jl(x);
        }
      }
      let $;
      S && S < 14 * E.length && ($ = { transform: `scale(${S / (14 * E.length)})`, whiteSpace: "nowrap" }), b = /* @__PURE__ */ Ws("div", {
        "data-actualSize": S,
        className: "avatar-text",
        style: $
      }, E);
    }
    return /* @__PURE__ */ Ws("div", {
      className: B(v),
      style: m,
      ...h
    }, b, g);
  }
}
class Ql extends Qe {
}
N(Ql, "NAME", "avatar"), N(Ql, "Component", wh);
class ec extends Qe {
}
N(ec, "NAME", "btngroup"), N(ec, "Component", ya);
var ks, ie, Fu, Ar, tc, Oi = {}, zu = [], $h = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function Jt(e, t) {
  for (var n in t)
    e[n] = t[n];
  return e;
}
function Vu(e) {
  var t = e.parentNode;
  t && t.removeChild(e);
}
function U(e, t, n) {
  var r, s, o, a = {};
  for (o in t)
    o == "key" ? r = t[o] : o == "ref" ? s = t[o] : a[o] = t[o];
  if (arguments.length > 2 && (a.children = arguments.length > 3 ? ks.call(arguments, 2) : n), typeof e == "function" && e.defaultProps != null)
    for (o in e.defaultProps)
      a[o] === void 0 && (a[o] = e.defaultProps[o]);
  return Ko(e, a, r, s, null);
}
function Ko(e, t, n, r, s) {
  var o = { type: e, props: t, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: s == null ? ++Fu : s };
  return s == null && ie.vnode != null && ie.vnode(o), o;
}
function kh() {
  return { current: null };
}
function xs(e) {
  return e.children;
}
function Mr(e, t) {
  this.props = e, this.context = t;
}
function Qr(e, t) {
  if (t == null)
    return e.__ ? Qr(e.__, e.__.__k.indexOf(e) + 1) : null;
  for (var n; t < e.__k.length; t++)
    if ((n = e.__k[t]) != null && n.__e != null)
      return n.__e;
  return typeof e.type == "function" ? Qr(e) : null;
}
function Yu(e) {
  var t, n;
  if ((e = e.__) != null && e.__c != null) {
    for (e.__e = e.__c.base = null, t = 0; t < e.__k.length; t++)
      if ((n = e.__k[t]) != null && n.__e != null) {
        e.__e = e.__c.base = n.__e;
        break;
      }
    return Yu(e);
  }
}
function nc(e) {
  (!e.__d && (e.__d = !0) && Ar.push(e) && !Ai.__r++ || tc !== ie.debounceRendering) && ((tc = ie.debounceRendering) || setTimeout)(Ai);
}
function Ai() {
  for (var e; Ai.__r = Ar.length; )
    e = Ar.sort(function(t, n) {
      return t.__v.__b - n.__v.__b;
    }), Ar = [], e.some(function(t) {
      var n, r, s, o, a, c;
      t.__d && (a = (o = (n = t).__v).__e, (c = n.__P) && (r = [], (s = Jt({}, o)).__v = o.__v + 1, xa(c, o, s, n.__n, c.ownerSVGElement !== void 0, o.__h != null ? [a] : null, r, a == null ? Qr(o) : a, o.__h), Ku(r, o), o.__e != a && Yu(o)));
    });
}
function qu(e, t, n, r, s, o, a, c, f, p) {
  var i, d, u, l, _, g, h, v = r && r.__k || zu, m = v.length;
  for (n.__k = [], i = 0; i < t.length; i++)
    if ((l = n.__k[i] = (l = t[i]) == null || typeof l == "boolean" ? null : typeof l == "string" || typeof l == "number" || typeof l == "bigint" ? Ko(null, l, null, null, l) : Array.isArray(l) ? Ko(xs, { children: l }, null, null, null) : l.__b > 0 ? Ko(l.type, l.props, l.key, l.ref ? l.ref : null, l.__v) : l) != null) {
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
      xa(e, l, u = u || Oi, s, o, a, c, f, p), _ = l.__e, (d = l.ref) && u.ref != d && (h || (h = []), u.ref && h.push(u.ref, null, l), h.push(d, l.__c || _, l)), _ != null ? (g == null && (g = _), typeof l.type == "function" && l.__k === u.__k ? l.__d = f = Gu(l, f, e) : f = Xu(e, l, u, v, _, f), typeof n.type == "function" && (n.__d = f)) : f && u.__e == f && f.parentNode != e && (f = Qr(u));
    }
  for (n.__e = g, i = m; i--; )
    v[i] != null && Zu(v[i], v[i]);
  if (h)
    for (i = 0; i < h.length; i++)
      Ju(h[i], h[++i], h[++i]);
}
function Gu(e, t, n) {
  for (var r, s = e.__k, o = 0; s && o < s.length; o++)
    (r = s[o]) && (r.__ = e, t = typeof r.type == "function" ? Gu(r, t, n) : Xu(n, r, r, s, r.__e, t));
  return t;
}
function Xu(e, t, n, r, s, o) {
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
function xh(e, t, n, r, s) {
  var o;
  for (o in n)
    o === "children" || o === "key" || o in t || Mi(e, o, null, n[o], r);
  for (o in t)
    s && typeof t[o] != "function" || o === "children" || o === "key" || o === "value" || o === "checked" || n[o] === t[o] || Mi(e, o, t[o], n[o], r);
}
function rc(e, t, n) {
  t[0] === "-" ? e.setProperty(t, n) : e[t] = n == null ? "" : typeof n != "number" || $h.test(t) ? n : n + "px";
}
function Mi(e, t, n, r, s) {
  var o;
  e:
    if (t === "style")
      if (typeof n == "string")
        e.style.cssText = n;
      else {
        if (typeof r == "string" && (e.style.cssText = r = ""), r)
          for (t in r)
            n && t in n || rc(e.style, t, "");
        if (n)
          for (t in n)
            r && n[t] === r[t] || rc(e.style, t, n[t]);
      }
    else if (t[0] === "o" && t[1] === "n")
      o = t !== (t = t.replace(/Capture$/, "")), t = t.toLowerCase() in e ? t.toLowerCase().slice(2) : t.slice(2), e.l || (e.l = {}), e.l[t + o] = n, n ? r || e.addEventListener(t, o ? ic : oc, o) : e.removeEventListener(t, o ? ic : oc, o);
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
function oc(e) {
  this.l[e.type + !1](ie.event ? ie.event(e) : e);
}
function ic(e) {
  this.l[e.type + !0](ie.event ? ie.event(e) : e);
}
function xa(e, t, n, r, s, o, a, c, f) {
  var p, i, d, u, l, _, g, h, v, m, S, b, E, $, k, y = t.type;
  if (t.constructor !== void 0)
    return null;
  n.__h != null && (f = n.__h, c = t.__e = n.__e, t.__h = null, o = [c]), (p = ie.__b) && p(t);
  try {
    e:
      if (typeof y == "function") {
        if (h = t.props, v = (p = y.contextType) && r[p.__c], m = p ? v ? v.props.value : p.__ : r, n.__c ? g = (i = t.__c = n.__c).__ = i.__E : ("prototype" in y && y.prototype.render ? t.__c = i = new y(h, m) : (t.__c = i = new Mr(h, m), i.constructor = y, i.render = Eh), v && v.sub(i), i.props = h, i.state || (i.state = {}), i.context = m, i.__n = r, d = i.__d = !0, i.__h = [], i._sb = []), i.__s == null && (i.__s = i.state), y.getDerivedStateFromProps != null && (i.__s == i.state && (i.__s = Jt({}, i.__s)), Jt(i.__s, y.getDerivedStateFromProps(h, i.__s))), u = i.props, l = i.state, d)
          y.getDerivedStateFromProps == null && i.componentWillMount != null && i.componentWillMount(), i.componentDidMount != null && i.__h.push(i.componentDidMount);
        else {
          if (y.getDerivedStateFromProps == null && h !== u && i.componentWillReceiveProps != null && i.componentWillReceiveProps(h, m), !i.__e && i.shouldComponentUpdate != null && i.shouldComponentUpdate(h, i.__s, m) === !1 || t.__v === n.__v) {
            for (i.props = h, i.state = i.__s, t.__v !== n.__v && (i.__d = !1), i.__v = t, t.__e = n.__e, t.__k = n.__k, t.__k.forEach(function(x) {
              x && (x.__ = t);
            }), S = 0; S < i._sb.length; S++)
              i.__h.push(i._sb[S]);
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
        i.state = i.__s, i.getChildContext != null && (r = Jt(Jt({}, r), i.getChildContext())), d || i.getSnapshotBeforeUpdate == null || (_ = i.getSnapshotBeforeUpdate(u, l)), k = p != null && p.type === xs && p.key == null ? p.props.children : p, qu(e, Array.isArray(k) ? k : [k], t, n, r, s, o, a, c, f), i.base = t.__e, t.__h = null, i.__h.length && a.push(i), g && (i.__E = i.__ = null), i.__e = !1;
      } else
        o == null && t.__v === n.__v ? (t.__k = n.__k, t.__e = n.__e) : t.__e = Sh(n.__e, t, n, r, s, o, a, f);
    (p = ie.diffed) && p(t);
  } catch (x) {
    t.__v = null, (f || o != null) && (t.__e = c, t.__h = !!f, o[o.indexOf(c)] = null), ie.__e(x, t, n);
  }
}
function Ku(e, t) {
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
function Sh(e, t, n, r, s, o, a, c) {
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
    if (o = o && ks.call(e.childNodes), p = (d = n.props || Oi).dangerouslySetInnerHTML, i = u.dangerouslySetInnerHTML, !c) {
      if (o != null)
        for (d = {}, _ = 0; _ < e.attributes.length; _++)
          d[e.attributes[_].name] = e.attributes[_].value;
      (i || p) && (i && (p && i.__html == p.__html || i.__html === e.innerHTML) || (e.innerHTML = i && i.__html || ""));
    }
    if (xh(e, u, d, s, c), i)
      t.__k = [];
    else if (_ = t.props.children, qu(e, Array.isArray(_) ? _ : [_], t, n, r, s && l !== "foreignObject", o, a, o ? o[0] : n.__k && Qr(n, 0), c), o != null)
      for (_ = o.length; _--; )
        o[_] != null && Vu(o[_]);
    c || ("value" in u && (_ = u.value) !== void 0 && (_ !== e.value || l === "progress" && !_ || l === "option" && _ !== d.value) && Mi(e, "value", _, d.value, !1), "checked" in u && (_ = u.checked) !== void 0 && _ !== e.checked && Mi(e, "checked", _, d.checked, !1));
  }
  return e;
}
function Ju(e, t, n) {
  try {
    typeof e == "function" ? e(t) : e.current = t;
  } catch (r) {
    ie.__e(r, n);
  }
}
function Zu(e, t, n) {
  var r, s;
  if (ie.unmount && ie.unmount(e), (r = e.ref) && (r.current && r.current !== e.__e || Ju(r, null, t)), (r = e.__c) != null) {
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
      r[s] && Zu(r[s], t, n || typeof e.type != "function");
  n || e.__e == null || Vu(e.__e), e.__ = e.__e = e.__d = void 0;
}
function Eh(e, t, n) {
  return this.constructor(e, n);
}
function Ch(e, t, n) {
  var r, s, o;
  ie.__ && ie.__(e, t), s = (r = typeof n == "function") ? null : n && n.__k || t.__k, o = [], xa(t, e = (!r && n || t).__k = U(xs, null, [e]), s || Oi, Oi, t.ownerSVGElement !== void 0, !r && n ? [n] : s ? null : t.firstChild ? ks.call(t.childNodes) : null, o, !r && n ? n : s ? s.__e : t.firstChild, r), Ku(o, e);
}
ks = zu.slice, ie = { __e: function(e, t, n, r) {
  for (var s, o, a; t = t.__; )
    if ((s = t.__c) && !s.__)
      try {
        if ((o = s.constructor) && o.getDerivedStateFromError != null && (s.setState(o.getDerivedStateFromError(e)), a = s.__d), s.componentDidCatch != null && (s.componentDidCatch(e, r || {}), a = s.__d), a)
          return s.__E = s;
      } catch (c) {
        e = c;
      }
  throw e;
} }, Fu = 0, Mr.prototype.setState = function(e, t) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = Jt({}, this.state), typeof e == "function" && (e = e(Jt({}, n), this.props)), e && Jt(n, e), e != null && this.__v && (t && this._sb.push(t), nc(this));
}, Mr.prototype.forceUpdate = function(e) {
  this.__v && (this.__e = !0, e && this.__h.push(e), nc(this));
}, Mr.prototype.render = xs, Ar = [], Ai.__r = 0;
var Oh = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, Qu = { exports: {} };
(function(e, t) {
  (function(n, r) {
    e.exports = r();
  })(Oh, function() {
    var n = 1e3, r = 6e4, s = 36e5, o = "millisecond", a = "second", c = "minute", f = "hour", p = "day", i = "week", d = "month", u = "quarter", l = "year", _ = "date", g = "Invalid Date", h = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, v = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, m = { name: "en", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), ordinal: function(T) {
      var M = ["th", "st", "nd", "rd"], O = T % 100;
      return "[" + T + (M[(O - 20) % 10] || M[O] || M[0]) + "]";
    } }, S = function(T, M, O) {
      var D = String(T);
      return !D || D.length >= M ? T : "" + Array(M + 1 - D.length).join(O) + T;
    }, b = { s: S, z: function(T) {
      var M = -T.utcOffset(), O = Math.abs(M), D = Math.floor(O / 60), A = O % 60;
      return (M <= 0 ? "+" : "-") + S(D, 2, "0") + ":" + S(A, 2, "0");
    }, m: function T(M, O) {
      if (M.date() < O.date())
        return -T(O, M);
      var D = 12 * (O.year() - M.year()) + (O.month() - M.month()), A = M.clone().add(D, d), j = O - A < 0, W = M.clone().add(D + (j ? -1 : 1), d);
      return +(-(D + (O - A) / (j ? A - W : W - A)) || 0);
    }, a: function(T) {
      return T < 0 ? Math.ceil(T) || 0 : Math.floor(T);
    }, p: function(T) {
      return { M: d, y: l, w: i, d: p, D: _, h: f, m: c, s: a, ms: o, Q: u }[T] || String(T || "").toLowerCase().replace(/s$/, "");
    }, u: function(T) {
      return T === void 0;
    } }, E = "en", $ = {};
    $[E] = m;
    var k = function(T) {
      return T instanceof R;
    }, y = function T(M, O, D) {
      var A;
      if (!M)
        return E;
      if (typeof M == "string") {
        var j = M.toLowerCase();
        $[j] && (A = j), O && ($[j] = O, A = j);
        var W = M.split("-");
        if (!A && W.length > 1)
          return T(W[0]);
      } else {
        var F = M.name;
        $[F] = M, A = F;
      }
      return !D && A && (E = A), A || !D && E;
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
            var W = A.match(h);
            if (W) {
              var F = W[2] - 1 || 0, G = (W[7] || "0").substring(0, 3);
              return j ? new Date(Date.UTC(W[1], F, W[3] || 1, W[4] || 0, W[5] || 0, W[6] || 0, G)) : new Date(W[1], F, W[3] || 1, W[4] || 0, W[5] || 0, W[6] || 0, G);
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
        var A = this, j = !!C.u(D) || D, W = C.p(O), F = function(q, J) {
          var ce = C.w(A.$u ? Date.UTC(A.$y, J, q) : new Date(A.$y, J, q), A);
          return j ? ce : ce.endOf(p);
        }, G = function(q, J) {
          return C.w(A.toDate()[q].apply(A.toDate("s"), (j ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(J)), A);
        }, z = this.$W, K = this.$M, Q = this.$D, P = "set" + (this.$u ? "UTC" : "");
        switch (W) {
          case l:
            return j ? F(1, 0) : F(31, 11);
          case d:
            return j ? F(1, K) : F(0, K + 1);
          case i:
            var V = this.$locale().weekStart || 0, X = (z < V ? z + 7 : z) - V;
            return F(j ? Q - X : Q + (6 - X), K);
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
      }, M.endOf = function(O) {
        return this.startOf(O, !1);
      }, M.$set = function(O, D) {
        var A, j = C.p(O), W = "set" + (this.$u ? "UTC" : ""), F = (A = {}, A[p] = W + "Date", A[_] = W + "Date", A[d] = W + "Month", A[l] = W + "FullYear", A[f] = W + "Hours", A[c] = W + "Minutes", A[a] = W + "Seconds", A[o] = W + "Milliseconds", A)[j], G = j === p ? this.$D + (D - this.$W) : D;
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
        var W = C.p(D), F = function(K) {
          var Q = x(j);
          return C.w(Q.date(Q.date() + Math.round(K * O)), j);
        };
        if (W === d)
          return this.set(d, this.$M + O);
        if (W === l)
          return this.set(l, this.$y + O);
        if (W === p)
          return F(1);
        if (W === i)
          return F(7);
        var G = (A = {}, A[c] = r, A[f] = s, A[a] = n, A)[W] || 1, z = this.$d.getTime() + O * G;
        return C.w(z, this);
      }, M.subtract = function(O, D) {
        return this.add(-1 * O, D);
      }, M.format = function(O) {
        var D = this, A = this.$locale();
        if (!this.isValid())
          return A.invalidDate || g;
        var j = O || "YYYY-MM-DDTHH:mm:ssZ", W = C.z(this), F = this.$H, G = this.$m, z = this.$M, K = A.weekdays, Q = A.months, P = function(J, ce, le, $e) {
          return J && (J[ce] || J(D, j)) || le[ce].slice(0, $e);
        }, V = function(J) {
          return C.s(F % 12 || 12, J, "0");
        }, X = A.meridiem || function(J, ce, le) {
          var $e = J < 12 ? "AM" : "PM";
          return le ? $e.toLowerCase() : $e;
        }, q = { YY: String(this.$y).slice(-2), YYYY: this.$y, M: z + 1, MM: C.s(z + 1, 2, "0"), MMM: P(A.monthsShort, z, Q, 3), MMMM: P(Q, z), D: this.$D, DD: C.s(this.$D, 2, "0"), d: String(this.$W), dd: P(A.weekdaysMin, this.$W, K, 2), ddd: P(A.weekdaysShort, this.$W, K, 3), dddd: K[this.$W], H: String(F), HH: C.s(F, 2, "0"), h: V(1), hh: V(2), a: X(F, G, !0), A: X(F, G, !1), m: String(G), mm: C.s(G, 2, "0"), s: String(this.$s), ss: C.s(this.$s, 2, "0"), SSS: C.s(this.$ms, 3, "0"), Z: W };
        return j.replace(v, function(J, ce) {
          return ce || q[J] || W.replace(":", "");
        });
      }, M.utcOffset = function() {
        return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
      }, M.diff = function(O, D, A) {
        var j, W = C.p(D), F = x(O), G = (F.utcOffset() - this.utcOffset()) * r, z = this - F, K = C.m(this, F);
        return K = (j = {}, j[l] = K / 12, j[d] = K, j[u] = K / 3, j[i] = (z - G) / 6048e5, j[p] = (z - G) / 864e5, j[f] = z / s, j[c] = z / r, j[a] = z / n, j)[W] || z, A ? K : C.a(K);
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
    }, x.en = $[E], x.Ls = $, x.p = {}, x;
  });
})(Qu);
const Z = Qu.exports, e_ = (e = 0, t = 0) => {
  const n = [];
  for (let r = e; r <= t; r++)
    n.push(r);
  return n;
}, Sa = (e, t) => {
  const n = Math.ceil(e.length / t);
  return new Array(t).fill({}).map((r, s) => e.slice(s * n, (s + 1) * n));
}, Ah = (e) => {
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
  }, S = () => {
    const k = Z(f), y = Z(), x = f ? k : y, C = x.set("date", 1).day(), R = C === 0 ? 6 : C - 1, I = x.endOf("month").get("date"), T = x.add(1, "month"), M = 7 * 6 % (R + I);
    return v(M, 0, T, !0);
  }, b = () => {
    const k = f, y = Z(), x = f ? Z(k) : y, C = x.endOf("month").get("date"), R = v(C, 0, x, !1), I = m(), T = S(), M = [...I, ...R, ...T];
    return Sa(M, o);
  }, E = ["\u4E00", "\u4E8C", "\u4E09", "\u56DB", "\u4E94", "\u516D", "\u65E5"], $ = b();
  return /* @__PURE__ */ U("div", {
    className: B("datepicker-calendar-day")
  }, /* @__PURE__ */ U("div", {
    className: "datepicker-calendar-bar"
  }, /* @__PURE__ */ U("div", {
    class: "flex"
  }, /* @__PURE__ */ U("button", {
    type: "button",
    className: "btn ghost",
    onClick: () => p("year")
  }, /* @__PURE__ */ U("span", null, Z(f).format("YYYY \u5E74")), /* @__PURE__ */ U("span", {
    class: "caret"
  })), /* @__PURE__ */ U("button", {
    type: "button",
    className: "btn ghost",
    onClick: () => p("month")
  }, /* @__PURE__ */ U("span", null, Z(f).format("MM \u6708")), /* @__PURE__ */ U("span", {
    class: "caret"
  }))), /* @__PURE__ */ U("div", {
    class: "flex"
  }, i && /* @__PURE__ */ U("button", {
    type: "button",
    className: "btn ghost",
    onClick: () => {
      u();
    }
  }, "\u4ECA\u5929"), /* @__PURE__ */ U("button", {
    type: "button",
    className: "btn ghost",
    onClick: () => g()
  }, /* @__PURE__ */ U("i", {
    className: "icon icon-angle-left"
  })), /* @__PURE__ */ U("button", {
    type: "button",
    className: "btn ghost",
    onClick: () => h()
  }, /* @__PURE__ */ U("i", {
    className: "icon icon-angle-right"
  })))), /* @__PURE__ */ U("table", {
    className: "datepicker-calendar-table"
  }, /* @__PURE__ */ U("thead", {
    className: "datepicker-calendar-thead"
  }, /* @__PURE__ */ U("tr", null, E.map((k, y) => /* @__PURE__ */ U("th", {
    key: y
  }, k)))), /* @__PURE__ */ U("tbody", {
    className: "datepicker-calendar-tbody"
  }, $.map((k, y) => /* @__PURE__ */ U("tr", {
    key: y
  }, k.map((x, C) => {
    const R = ["text-center"];
    return x.isToday && R.push("datepicker-calendar-today"), x.isSelected && R.push("datepicker-calendar-selected-date"), x.isOtherMonth && R.push("datepicker-calendar-other-month"), x.isTag && R.push("datepicker-calendar-tag"), /* @__PURE__ */ U("td", {
      key: C,
      className: B(R)
    }, /* @__PURE__ */ U("div", {
      className: B("btn", "ghost", "datepicker-calendar-date", x.isDisable ? "disabled" : ""),
      onClick: x.onClick
    }, !a && x.isOtherMonth ? "" : Z(x.date).format("DD")));
  }))))));
}, Mh = (e) => {
  const { format: t, selectedDate: n, changeYear: r, handleChangeMonth: s } = e, o = Sa(e_(1, 12), 4);
  return /* @__PURE__ */ U("div", {
    className: B("datepicker-calendar-month")
  }, /* @__PURE__ */ U("div", {
    className: "datepicker-calendar-bar"
  }, /* @__PURE__ */ U("button", {
    type: "button",
    className: "btn ghost",
    onClick: () => {
      r("subtract");
    }
  }, /* @__PURE__ */ U("i", {
    className: "icon icon-angle-left"
  })), /* @__PURE__ */ U("button", {
    type: "button",
    className: "btn ghost"
  }, Z(n).format("YYYY \u5E74")), /* @__PURE__ */ U("button", {
    type: "button",
    className: "btn ghost",
    onClick: () => {
      r("add");
    }
  }, /* @__PURE__ */ U("i", {
    className: "icon icon-angle-right"
  }))), /* @__PURE__ */ U("table", {
    className: "datepicker-calendar-month-table"
  }, /* @__PURE__ */ U("tbody", {
    className: "datepicker-calendar-month-table-body"
  }, o.map((a, c) => /* @__PURE__ */ U("tr", {
    key: c
  }, a.map((f, p) => {
    const i = ["text-center"], d = Z(n).year(), u = Z(`${d}-${f}-01`).format(t);
    return /* @__PURE__ */ U("td", {
      key: p,
      className: B(i)
    }, /* @__PURE__ */ U("div", {
      className: B("btn", "ghost", "datepicker-calendar-month"),
      onClick: () => {
        s(u);
      }
    }, Z(u).format("MM"), " \u6708"));
  }))))));
}, Th = (e) => {
  const { format: t, selectedDate: n, handleChangeYear: r, handleChange: s } = e, o = Z(n).year(), a = Sa(e_(o, o + 11), 4);
  return /* @__PURE__ */ U("div", {
    className: B("datepicker-calendar-year")
  }, /* @__PURE__ */ U("div", {
    className: "datepicker-calendar-bar"
  }, /* @__PURE__ */ U("button", {
    type: "button",
    className: "btn ghost",
    onClick: () => {
      const c = Z(n).subtract(12, "year").startOf("year").format(t);
      s(c);
    }
  }, /* @__PURE__ */ U("i", {
    className: "icon icon-angle-left"
  })), /* @__PURE__ */ U("div", null, Z(n).year(), " - ", o + 11), /* @__PURE__ */ U("button", {
    type: "button",
    className: "btn ghost",
    onClick: () => {
      const c = Z(n).add(12, "year").startOf("year").format(t);
      s(c);
    }
  }, /* @__PURE__ */ U("i", {
    className: "icon icon-angle-right"
  }))), /* @__PURE__ */ U("table", {
    className: "datepicker-calendar-month-table"
  }, /* @__PURE__ */ U("tbody", {
    className: "datepicker-calendar-month-table-body"
  }, a.map((c, f) => /* @__PURE__ */ U("tr", {
    key: f
  }, c.map((p, i) => {
    const d = ["text-center"], u = Z(n).month(), l = Z(`${p}-${u}-01`).format(t);
    return /* @__PURE__ */ U("td", {
      key: i,
      className: B(d)
    }, /* @__PURE__ */ U("div", {
      className: B("btn", "ghost", "datepicker-calendar-month"),
      onClick: () => {
        r(l);
      }
    }, Z(l).format("YYYY")));
  }))))));
};
class Dh extends Mr {
  constructor() {
    super(...arguments);
    N(this, "DATEROWCOUNT", 6);
    N(this, "ref", kh());
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
    return this.state.type === "day" ? U(Ah, {
      ...this.props,
      handleChange: this.handleChange.bind(this),
      handleChangePanel: this.handleChangePanel.bind(this),
      clickToday: this.clickToday.bind(this),
      clickDay: this.clickDay.bind(this),
      selectedDate: this.state.selectedDate,
      DATEROWCOUNT: this.DATEROWCOUNT
    }) : this.state.type === "month" ? U(Mh, {
      ...this.props,
      handleChangeMonth: this.handleChangeMonth.bind(this),
      changeYear: this.changeYear.bind(this)
    }) : U(Th, {
      ...this.props,
      handleChangeYear: this.handleChangeYear.bind(this),
      handleChange: this.handleChange.bind(this),
      selectedDate: this.state.selectedDate
    });
  }
  render() {
    const { className: n } = this.props;
    return /* @__PURE__ */ U("div", {
      className: B("datepicker-calendar", n),
      ref: this.ref
    }, this.renderPanel());
  }
}
function We(e) {
  if (e == null)
    return window;
  if (e.toString() !== "[object Window]") {
    var t = e.ownerDocument;
    return t && t.defaultView || window;
  }
  return e;
}
function $n(e) {
  var t = We(e).Element;
  return e instanceof t || e instanceof Element;
}
function Pe(e) {
  var t = We(e).HTMLElement;
  return e instanceof t || e instanceof HTMLElement;
}
function Ea(e) {
  if (typeof ShadowRoot > "u")
    return !1;
  var t = We(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot;
}
var yn = Math.max, Ti = Math.min, Kn = Math.round;
function Vs() {
  var e = navigator.userAgentData;
  return e != null && e.brands ? e.brands.map(function(t) {
    return t.brand + "/" + t.version;
  }).join(" ") : navigator.userAgent;
}
function t_() {
  return !/^((?!chrome|android).)*safari/i.test(Vs());
}
function Jn(e, t, n) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  var r = e.getBoundingClientRect(), s = 1, o = 1;
  t && Pe(e) && (s = e.offsetWidth > 0 && Kn(r.width) / e.offsetWidth || 1, o = e.offsetHeight > 0 && Kn(r.height) / e.offsetHeight || 1);
  var a = $n(e) ? We(e) : window, c = a.visualViewport, f = !t_() && n, p = (r.left + (f && c ? c.offsetLeft : 0)) / s, i = (r.top + (f && c ? c.offsetTop : 0)) / o, d = r.width / s, u = r.height / o;
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
function Ca(e) {
  var t = We(e), n = t.pageXOffset, r = t.pageYOffset;
  return {
    scrollLeft: n,
    scrollTop: r
  };
}
function Nh(e) {
  return {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  };
}
function Lh(e) {
  return e === We(e) || !Pe(e) ? Ca(e) : Nh(e);
}
function pt(e) {
  return e ? (e.nodeName || "").toLowerCase() : null;
}
function cn(e) {
  return (($n(e) ? e.ownerDocument : e.document) || window.document).documentElement;
}
function Oa(e) {
  return Jn(cn(e)).left + Ca(e).scrollLeft;
}
function Et(e) {
  return We(e).getComputedStyle(e);
}
function Aa(e) {
  var t = Et(e), n = t.overflow, r = t.overflowX, s = t.overflowY;
  return /auto|scroll|overlay|hidden/.test(n + s + r);
}
function Ph(e) {
  var t = e.getBoundingClientRect(), n = Kn(t.width) / e.offsetWidth || 1, r = Kn(t.height) / e.offsetHeight || 1;
  return n !== 1 || r !== 1;
}
function Rh(e, t, n) {
  n === void 0 && (n = !1);
  var r = Pe(t), s = Pe(t) && Ph(t), o = cn(t), a = Jn(e, s, n), c = {
    scrollLeft: 0,
    scrollTop: 0
  }, f = {
    x: 0,
    y: 0
  };
  return (r || !r && !n) && ((pt(t) !== "body" || Aa(o)) && (c = Lh(t)), Pe(t) ? (f = Jn(t, !0), f.x += t.clientLeft, f.y += t.clientTop) : o && (f.x = Oa(o))), {
    x: a.left + c.scrollLeft - f.x,
    y: a.top + c.scrollTop - f.y,
    width: a.width,
    height: a.height
  };
}
function Ma(e) {
  var t = Jn(e), n = e.offsetWidth, r = e.offsetHeight;
  return Math.abs(t.width - n) <= 1 && (n = t.width), Math.abs(t.height - r) <= 1 && (r = t.height), {
    x: e.offsetLeft,
    y: e.offsetTop,
    width: n,
    height: r
  };
}
function Ss(e) {
  return pt(e) === "html" ? e : e.assignedSlot || e.parentNode || (Ea(e) ? e.host : null) || cn(e);
}
function n_(e) {
  return ["html", "body", "#document"].indexOf(pt(e)) >= 0 ? e.ownerDocument.body : Pe(e) && Aa(e) ? e : n_(Ss(e));
}
function Tr(e, t) {
  var n;
  t === void 0 && (t = []);
  var r = n_(e), s = r === ((n = e.ownerDocument) == null ? void 0 : n.body), o = We(r), a = s ? [o].concat(o.visualViewport || [], Aa(r) ? r : []) : r, c = t.concat(a);
  return s ? c : c.concat(Tr(Ss(a)));
}
function Hh(e) {
  return ["table", "td", "th"].indexOf(pt(e)) >= 0;
}
function sc(e) {
  return !Pe(e) || Et(e).position === "fixed" ? null : e.offsetParent;
}
function Wh(e) {
  var t = /firefox/i.test(Vs()), n = /Trident/i.test(Vs());
  if (n && Pe(e)) {
    var r = Et(e);
    if (r.position === "fixed")
      return null;
  }
  var s = Ss(e);
  for (Ea(s) && (s = s.host); Pe(s) && ["html", "body"].indexOf(pt(s)) < 0; ) {
    var o = Et(s);
    if (o.transform !== "none" || o.perspective !== "none" || o.contain === "paint" || ["transform", "perspective"].indexOf(o.willChange) !== -1 || t && o.willChange === "filter" || t && o.filter && o.filter !== "none")
      return s;
    s = s.parentNode;
  }
  return null;
}
function Do(e) {
  for (var t = We(e), n = sc(e); n && Hh(n) && Et(n).position === "static"; )
    n = sc(n);
  return n && (pt(n) === "html" || pt(n) === "body" && Et(n).position === "static") ? t : n || Wh(e) || t;
}
var Ae = "top", Xe = "bottom", Ke = "right", Me = "left", Ta = "auto", No = [Ae, Xe, Ke, Me], Zn = "start", eo = "end", jh = "clippingParents", r_ = "viewport", fr = "popper", Ih = "reference", ac = /* @__PURE__ */ No.reduce(function(e, t) {
  return e.concat([t + "-" + Zn, t + "-" + eo]);
}, []), o_ = /* @__PURE__ */ [].concat(No, [Ta]).reduce(function(e, t) {
  return e.concat([t, t + "-" + Zn, t + "-" + eo]);
}, []), Uh = "beforeRead", Bh = "read", Fh = "afterRead", zh = "beforeMain", Vh = "main", Yh = "afterMain", qh = "beforeWrite", Gh = "write", Xh = "afterWrite", Kh = [Uh, Bh, Fh, zh, Vh, Yh, qh, Gh, Xh];
function Jh(e) {
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
function Zh(e) {
  var t = Jh(e);
  return Kh.reduce(function(n, r) {
    return n.concat(t.filter(function(s) {
      return s.phase === r;
    }));
  }, []);
}
function Qh(e) {
  var t;
  return function() {
    return t || (t = new Promise(function(n) {
      Promise.resolve().then(function() {
        t = void 0, n(e());
      });
    })), t;
  };
}
function ut(e) {
  return e.split("-")[0];
}
function ev(e) {
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
function tv(e, t) {
  var n = We(e), r = cn(e), s = n.visualViewport, o = r.clientWidth, a = r.clientHeight, c = 0, f = 0;
  if (s) {
    o = s.width, a = s.height;
    var p = t_();
    (p || !p && t === "fixed") && (c = s.offsetLeft, f = s.offsetTop);
  }
  return {
    width: o,
    height: a,
    x: c + Oa(e),
    y: f
  };
}
function nv(e) {
  var t, n = cn(e), r = Ca(e), s = (t = e.ownerDocument) == null ? void 0 : t.body, o = yn(n.scrollWidth, n.clientWidth, s ? s.scrollWidth : 0, s ? s.clientWidth : 0), a = yn(n.scrollHeight, n.clientHeight, s ? s.scrollHeight : 0, s ? s.clientHeight : 0), c = -r.scrollLeft + Oa(e), f = -r.scrollTop;
  return Et(s || n).direction === "rtl" && (c += yn(n.clientWidth, s ? s.clientWidth : 0) - o), {
    width: o,
    height: a,
    x: c,
    y: f
  };
}
function i_(e, t) {
  var n = t.getRootNode && t.getRootNode();
  if (e.contains(t))
    return !0;
  if (n && Ea(n)) {
    var r = t;
    do {
      if (r && e.isSameNode(r))
        return !0;
      r = r.parentNode || r.host;
    } while (r);
  }
  return !1;
}
function Ys(e) {
  return Object.assign({}, e, {
    left: e.x,
    top: e.y,
    right: e.x + e.width,
    bottom: e.y + e.height
  });
}
function rv(e, t) {
  var n = Jn(e, !1, t === "fixed");
  return n.top = n.top + e.clientTop, n.left = n.left + e.clientLeft, n.bottom = n.top + e.clientHeight, n.right = n.left + e.clientWidth, n.width = e.clientWidth, n.height = e.clientHeight, n.x = n.left, n.y = n.top, n;
}
function lc(e, t, n) {
  return t === r_ ? Ys(tv(e, n)) : $n(t) ? rv(t, n) : Ys(nv(cn(e)));
}
function ov(e) {
  var t = Tr(Ss(e)), n = ["absolute", "fixed"].indexOf(Et(e).position) >= 0, r = n && Pe(e) ? Do(e) : e;
  return $n(r) ? t.filter(function(s) {
    return $n(s) && i_(s, r) && pt(s) !== "body";
  }) : [];
}
function iv(e, t, n, r) {
  var s = t === "clippingParents" ? ov(e) : [].concat(t), o = [].concat(s, [n]), a = o[0], c = o.reduce(function(f, p) {
    var i = lc(e, p, r);
    return f.top = yn(i.top, f.top), f.right = Ti(i.right, f.right), f.bottom = Ti(i.bottom, f.bottom), f.left = yn(i.left, f.left), f;
  }, lc(e, a, r));
  return c.width = c.right - c.left, c.height = c.bottom - c.top, c.x = c.left, c.y = c.top, c;
}
function Qn(e) {
  return e.split("-")[1];
}
function Da(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function s_(e) {
  var t = e.reference, n = e.element, r = e.placement, s = r ? ut(r) : null, o = r ? Qn(r) : null, a = t.x + t.width / 2 - n.width / 2, c = t.y + t.height / 2 - n.height / 2, f;
  switch (s) {
    case Ae:
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
  var p = s ? Da(s) : null;
  if (p != null) {
    var i = p === "y" ? "height" : "width";
    switch (o) {
      case Zn:
        f[p] = f[p] - (t[i] / 2 - n[i] / 2);
        break;
      case eo:
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
function l_(e) {
  return Object.assign({}, a_(), e);
}
function c_(e, t) {
  return t.reduce(function(n, r) {
    return n[r] = e, n;
  }, {});
}
function Na(e, t) {
  t === void 0 && (t = {});
  var n = t, r = n.placement, s = r === void 0 ? e.placement : r, o = n.strategy, a = o === void 0 ? e.strategy : o, c = n.boundary, f = c === void 0 ? jh : c, p = n.rootBoundary, i = p === void 0 ? r_ : p, d = n.elementContext, u = d === void 0 ? fr : d, l = n.altBoundary, _ = l === void 0 ? !1 : l, g = n.padding, h = g === void 0 ? 0 : g, v = l_(typeof h != "number" ? h : c_(h, No)), m = u === fr ? Ih : fr, S = e.rects.popper, b = e.elements[_ ? m : u], E = iv($n(b) ? b : b.contextElement || cn(e.elements.popper), f, i, a), $ = Jn(e.elements.reference), k = s_({
    reference: $,
    element: S,
    strategy: "absolute",
    placement: s
  }), y = Ys(Object.assign({}, S, k)), x = u === fr ? y : $, C = {
    top: E.top - x.top + v.top,
    bottom: x.bottom - E.bottom + v.bottom,
    left: E.left - x.left + v.left,
    right: x.right - E.right + v.right
  }, R = e.modifiersData.offset;
  if (u === fr && R) {
    var I = R[s];
    Object.keys(C).forEach(function(T) {
      var M = [Ke, Xe].indexOf(T) >= 0 ? 1 : -1, O = [Ae, Xe].indexOf(T) >= 0 ? "y" : "x";
      C[T] += I[O] * M;
    });
  }
  return C;
}
var cc = {
  placement: "bottom",
  modifiers: [],
  strategy: "absolute"
};
function fc() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return !t.some(function(r) {
    return !(r && typeof r.getBoundingClientRect == "function");
  });
}
function sv(e) {
  e === void 0 && (e = {});
  var t = e, n = t.defaultModifiers, r = n === void 0 ? [] : n, s = t.defaultOptions, o = s === void 0 ? cc : s;
  return function(c, f, p) {
    p === void 0 && (p = o);
    var i = {
      placement: "bottom",
      orderedModifiers: [],
      options: Object.assign({}, cc, o),
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
          reference: $n(c) ? Tr(c) : c.contextElement ? Tr(c.contextElement) : [],
          popper: Tr(f)
        };
        var S = Zh(ev([].concat(r, i.options.modifiers)));
        return i.orderedModifiers = S.filter(function(b) {
          return b.enabled;
        }), _(), l.update();
      },
      forceUpdate: function() {
        if (!u) {
          var v = i.elements, m = v.reference, S = v.popper;
          if (!!fc(m, S)) {
            i.rects = {
              reference: Rh(m, Do(S), i.options.strategy === "fixed"),
              popper: Ma(S)
            }, i.reset = !1, i.placement = i.options.placement, i.orderedModifiers.forEach(function(C) {
              return i.modifiersData[C.name] = Object.assign({}, C.data);
            });
            for (var b = 0; b < i.orderedModifiers.length; b++) {
              if (i.reset === !0) {
                i.reset = !1, b = -1;
                continue;
              }
              var E = i.orderedModifiers[b], $ = E.fn, k = E.options, y = k === void 0 ? {} : k, x = E.name;
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
      update: Qh(function() {
        return new Promise(function(h) {
          l.forceUpdate(), h(i);
        });
      }),
      destroy: function() {
        g(), u = !0;
      }
    };
    if (!fc(c, f))
      return l;
    l.setOptions(p).then(function(h) {
      !u && p.onFirstUpdate && p.onFirstUpdate(h);
    });
    function _() {
      i.orderedModifiers.forEach(function(h) {
        var v = h.name, m = h.options, S = m === void 0 ? {} : m, b = h.effect;
        if (typeof b == "function") {
          var E = b({
            state: i,
            name: v,
            instance: l,
            options: S
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
var Wo = {
  passive: !0
};
function av(e) {
  var t = e.state, n = e.instance, r = e.options, s = r.scroll, o = s === void 0 ? !0 : s, a = r.resize, c = a === void 0 ? !0 : a, f = We(t.elements.popper), p = [].concat(t.scrollParents.reference, t.scrollParents.popper);
  return o && p.forEach(function(i) {
    i.addEventListener("scroll", n.update, Wo);
  }), c && f.addEventListener("resize", n.update, Wo), function() {
    o && p.forEach(function(i) {
      i.removeEventListener("scroll", n.update, Wo);
    }), c && f.removeEventListener("resize", n.update, Wo);
  };
}
const lv = {
  name: "eventListeners",
  enabled: !0,
  phase: "write",
  fn: function() {
  },
  effect: av,
  data: {}
};
function cv(e) {
  var t = e.state, n = e.name;
  t.modifiersData[n] = s_({
    reference: t.rects.reference,
    element: t.rects.popper,
    strategy: "absolute",
    placement: t.placement
  });
}
const fv = {
  name: "popperOffsets",
  enabled: !0,
  phase: "read",
  fn: cv,
  data: {}
};
var uv = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function _v(e) {
  var t = e.x, n = e.y, r = window, s = r.devicePixelRatio || 1;
  return {
    x: Kn(t * s) / s || 0,
    y: Kn(n * s) / s || 0
  };
}
function uc(e) {
  var t, n = e.popper, r = e.popperRect, s = e.placement, o = e.variation, a = e.offsets, c = e.position, f = e.gpuAcceleration, p = e.adaptive, i = e.roundOffsets, d = e.isFixed, u = a.x, l = u === void 0 ? 0 : u, _ = a.y, g = _ === void 0 ? 0 : _, h = typeof i == "function" ? i({
    x: l,
    y: g
  }) : {
    x: l,
    y: g
  };
  l = h.x, g = h.y;
  var v = a.hasOwnProperty("x"), m = a.hasOwnProperty("y"), S = Me, b = Ae, E = window;
  if (p) {
    var $ = Do(n), k = "clientHeight", y = "clientWidth";
    if ($ === We(n) && ($ = cn(n), Et($).position !== "static" && c === "absolute" && (k = "scrollHeight", y = "scrollWidth")), $ = $, s === Ae || (s === Me || s === Ke) && o === eo) {
      b = Xe;
      var x = d && $ === E && E.visualViewport ? E.visualViewport.height : $[k];
      g -= x - r.height, g *= f ? 1 : -1;
    }
    if (s === Me || (s === Ae || s === Xe) && o === eo) {
      S = Ke;
      var C = d && $ === E && E.visualViewport ? E.visualViewport.width : $[y];
      l -= C - r.width, l *= f ? 1 : -1;
    }
  }
  var R = Object.assign({
    position: c
  }, p && uv), I = i === !0 ? _v({
    x: l,
    y: g
  }) : {
    x: l,
    y: g
  };
  if (l = I.x, g = I.y, f) {
    var T;
    return Object.assign({}, R, (T = {}, T[b] = m ? "0" : "", T[S] = v ? "0" : "", T.transform = (E.devicePixelRatio || 1) <= 1 ? "translate(" + l + "px, " + g + "px)" : "translate3d(" + l + "px, " + g + "px, 0)", T));
  }
  return Object.assign({}, R, (t = {}, t[b] = m ? g + "px" : "", t[S] = v ? l + "px" : "", t.transform = "", t));
}
function pv(e) {
  var t = e.state, n = e.options, r = n.gpuAcceleration, s = r === void 0 ? !0 : r, o = n.adaptive, a = o === void 0 ? !0 : o, c = n.roundOffsets, f = c === void 0 ? !0 : c, p = {
    placement: ut(t.placement),
    variation: Qn(t.placement),
    popper: t.elements.popper,
    popperRect: t.rects.popper,
    gpuAcceleration: s,
    isFixed: t.options.strategy === "fixed"
  };
  t.modifiersData.popperOffsets != null && (t.styles.popper = Object.assign({}, t.styles.popper, uc(Object.assign({}, p, {
    offsets: t.modifiersData.popperOffsets,
    position: t.options.strategy,
    adaptive: a,
    roundOffsets: f
  })))), t.modifiersData.arrow != null && (t.styles.arrow = Object.assign({}, t.styles.arrow, uc(Object.assign({}, p, {
    offsets: t.modifiersData.arrow,
    position: "absolute",
    adaptive: !1,
    roundOffsets: f
  })))), t.attributes.popper = Object.assign({}, t.attributes.popper, {
    "data-popper-placement": t.placement
  });
}
const dv = {
  name: "computeStyles",
  enabled: !0,
  phase: "beforeWrite",
  fn: pv,
  data: {}
};
function hv(e) {
  var t = e.state;
  Object.keys(t.elements).forEach(function(n) {
    var r = t.styles[n] || {}, s = t.attributes[n] || {}, o = t.elements[n];
    !Pe(o) || !pt(o) || (Object.assign(o.style, r), Object.keys(s).forEach(function(a) {
      var c = s[a];
      c === !1 ? o.removeAttribute(a) : o.setAttribute(a, c === !0 ? "" : c);
    }));
  });
}
function vv(e) {
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
const mv = {
  name: "applyStyles",
  enabled: !0,
  phase: "write",
  fn: hv,
  effect: vv,
  requires: ["computeStyles"]
};
var gv = [lv, fv, dv, mv], yv = /* @__PURE__ */ sv({
  defaultModifiers: gv
});
function Dr(e, t, n) {
  return yn(e, Ti(t, n));
}
function bv(e, t, n) {
  var r = Dr(e, t, n);
  return r > n ? n : r;
}
var wv = function(t, n) {
  return t = typeof t == "function" ? t(Object.assign({}, n.rects, {
    placement: n.placement
  })) : t, l_(typeof t != "number" ? t : c_(t, No));
};
function $v(e) {
  var t, n = e.state, r = e.name, s = e.options, o = n.elements.arrow, a = n.modifiersData.popperOffsets, c = ut(n.placement), f = Da(c), p = [Me, Ke].indexOf(c) >= 0, i = p ? "height" : "width";
  if (!(!o || !a)) {
    var d = wv(s.padding, n), u = Ma(o), l = f === "y" ? Ae : Me, _ = f === "y" ? Xe : Ke, g = n.rects.reference[i] + n.rects.reference[f] - a[f] - n.rects.popper[i], h = a[f] - n.rects.reference[f], v = Do(o), m = v ? f === "y" ? v.clientHeight || 0 : v.clientWidth || 0 : 0, S = g / 2 - h / 2, b = d[l], E = m - u[i] - d[_], $ = m / 2 - u[i] / 2 + S, k = Dr(b, $, E), y = f;
    n.modifiersData[r] = (t = {}, t[y] = k, t.centerOffset = k - $, t);
  }
}
function kv(e) {
  var t = e.state, n = e.options, r = n.element, s = r === void 0 ? "[data-popper-arrow]" : r;
  s != null && (typeof s == "string" && (s = t.elements.popper.querySelector(s), !s) || !i_(t.elements.popper, s) || (t.elements.arrow = s));
}
const xv = {
  name: "arrow",
  enabled: !0,
  phase: "main",
  fn: $v,
  effect: kv,
  requires: ["popperOffsets"],
  requiresIfExists: ["preventOverflow"]
};
function Sv(e, t, n) {
  var r = ut(e), s = [Me, Ae].indexOf(r) >= 0 ? -1 : 1, o = typeof n == "function" ? n(Object.assign({}, t, {
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
function Ev(e) {
  var t = e.state, n = e.options, r = e.name, s = n.offset, o = s === void 0 ? [0, 0] : s, a = o_.reduce(function(i, d) {
    return i[d] = Sv(d, t.rects, o), i;
  }, {}), c = a[t.placement], f = c.x, p = c.y;
  t.modifiersData.popperOffsets != null && (t.modifiersData.popperOffsets.x += f, t.modifiersData.popperOffsets.y += p), t.modifiersData[r] = a;
}
const Cv = {
  name: "offset",
  enabled: !0,
  phase: "main",
  requires: ["popperOffsets"],
  fn: Ev
};
function Ov(e) {
  return e === "x" ? "y" : "x";
}
function Av(e) {
  var t = e.state, n = e.options, r = e.name, s = n.mainAxis, o = s === void 0 ? !0 : s, a = n.altAxis, c = a === void 0 ? !1 : a, f = n.boundary, p = n.rootBoundary, i = n.altBoundary, d = n.padding, u = n.tether, l = u === void 0 ? !0 : u, _ = n.tetherOffset, g = _ === void 0 ? 0 : _, h = Na(t, {
    boundary: f,
    rootBoundary: p,
    padding: d,
    altBoundary: i
  }), v = ut(t.placement), m = Qn(t.placement), S = !m, b = Da(v), E = Ov(b), $ = t.modifiersData.popperOffsets, k = t.rects.reference, y = t.rects.popper, x = typeof g == "function" ? g(Object.assign({}, t.rects, {
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
      var T, M = b === "y" ? Ae : Me, O = b === "y" ? Xe : Ke, D = b === "y" ? "height" : "width", A = $[b], j = A + h[M], W = A - h[O], F = l ? -y[D] / 2 : 0, G = m === Zn ? k[D] : y[D], z = m === Zn ? -y[D] : -k[D], K = t.elements.arrow, Q = l && K ? Ma(K) : {
        width: 0,
        height: 0
      }, P = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : a_(), V = P[M], X = P[O], q = Dr(0, k[D], Q[D]), J = S ? k[D] / 2 - F - q - V - C.mainAxis : G - q - V - C.mainAxis, ce = S ? -k[D] / 2 + F + q + X + C.mainAxis : z + q + X + C.mainAxis, le = t.elements.arrow && Do(t.elements.arrow), $e = le ? b === "y" ? le.clientTop || 0 : le.clientLeft || 0 : 0, et = (T = R == null ? void 0 : R[b]) != null ? T : 0, ee = A + J - et - $e, At = A + ce - et, Ue = Dr(l ? Ti(j, ee) : j, A, l ? yn(W, At) : W);
      $[b] = Ue, I[b] = Ue - A;
    }
    if (c) {
      var Be, Mt = b === "x" ? Ae : Me, tt = b === "x" ? Xe : Ke, ne = $[E], ye = E === "y" ? "height" : "width", Fe = ne + h[Mt], Tt = ne - h[tt], ze = [Ae, Me].indexOf(v) !== -1, Dt = (Be = R == null ? void 0 : R[E]) != null ? Be : 0, Nt = ze ? Fe : ne - k[ye] - y[ye] - Dt + C.altAxis, Lt = ze ? ne + k[ye] + y[ye] - Dt - C.altAxis : Tt, Pt = l && ze ? bv(Nt, ne, Lt) : Dr(l ? Nt : Fe, ne, l ? Lt : Tt);
      $[E] = Pt, I[E] = Pt - ne;
    }
    t.modifiersData[r] = I;
  }
}
const Mv = {
  name: "preventOverflow",
  enabled: !0,
  phase: "main",
  fn: Av,
  requiresIfExists: ["offset"]
};
var Tv = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function Jo(e) {
  return e.replace(/left|right|bottom|top/g, function(t) {
    return Tv[t];
  });
}
var Dv = {
  start: "end",
  end: "start"
};
function _c(e) {
  return e.replace(/start|end/g, function(t) {
    return Dv[t];
  });
}
function Nv(e, t) {
  t === void 0 && (t = {});
  var n = t, r = n.placement, s = n.boundary, o = n.rootBoundary, a = n.padding, c = n.flipVariations, f = n.allowedAutoPlacements, p = f === void 0 ? o_ : f, i = Qn(r), d = i ? c ? ac : ac.filter(function(_) {
    return Qn(_) === i;
  }) : No, u = d.filter(function(_) {
    return p.indexOf(_) >= 0;
  });
  u.length === 0 && (u = d);
  var l = u.reduce(function(_, g) {
    return _[g] = Na(e, {
      placement: g,
      boundary: s,
      rootBoundary: o,
      padding: a
    })[ut(g)], _;
  }, {});
  return Object.keys(l).sort(function(_, g) {
    return l[_] - l[g];
  });
}
function Lv(e) {
  if (ut(e) === Ta)
    return [];
  var t = Jo(e);
  return [_c(e), t, _c(t)];
}
function Pv(e) {
  var t = e.state, n = e.options, r = e.name;
  if (!t.modifiersData[r]._skip) {
    for (var s = n.mainAxis, o = s === void 0 ? !0 : s, a = n.altAxis, c = a === void 0 ? !0 : a, f = n.fallbackPlacements, p = n.padding, i = n.boundary, d = n.rootBoundary, u = n.altBoundary, l = n.flipVariations, _ = l === void 0 ? !0 : l, g = n.allowedAutoPlacements, h = t.options.placement, v = ut(h), m = v === h, S = f || (m || !_ ? [Jo(h)] : Lv(h)), b = [h].concat(S).reduce(function(Q, P) {
      return Q.concat(ut(P) === Ta ? Nv(t, {
        placement: P,
        boundary: i,
        rootBoundary: d,
        padding: p,
        flipVariations: _,
        allowedAutoPlacements: g
      }) : P);
    }, []), E = t.rects.reference, $ = t.rects.popper, k = /* @__PURE__ */ new Map(), y = !0, x = b[0], C = 0; C < b.length; C++) {
      var R = b[C], I = ut(R), T = Qn(R) === Zn, M = [Ae, Xe].indexOf(I) >= 0, O = M ? "width" : "height", D = Na(t, {
        placement: R,
        boundary: i,
        rootBoundary: d,
        altBoundary: u,
        padding: p
      }), A = M ? T ? Ke : Me : T ? Xe : Ae;
      E[O] > $[O] && (A = Jo(A));
      var j = Jo(A), W = [];
      if (o && W.push(D[I] <= 0), c && W.push(D[A] <= 0, D[j] <= 0), W.every(function(Q) {
        return Q;
      })) {
        x = R, y = !1;
        break;
      }
      k.set(R, W);
    }
    if (y)
      for (var F = _ ? 3 : 1, G = function(P) {
        var V = b.find(function(X) {
          var q = k.get(X);
          if (q)
            return q.slice(0, P).every(function(J) {
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
const Rv = {
  name: "flip",
  enabled: !0,
  phase: "main",
  fn: Pv,
  requiresIfExists: ["offset"],
  data: {
    _skip: !1
  }
};
var Dn, Nn, pn, Ve, vo, Zi;
class lt extends ft {
  constructor() {
    super(...arguments);
    L(this, Dn, void 0);
    L(this, Nn, 0);
    L(this, pn, void 0);
    L(this, Ve, void 0);
    L(this, vo, void 0);
    N(this, "hideLater", () => {
      w(this, Zi).call(this), H(this, Nn, window.setTimeout(this.hide.bind(this), 100));
    });
    L(this, Zi, () => {
      clearTimeout(w(this, Nn)), H(this, Nn, 0);
    });
  }
  get isShown() {
    var n;
    return (n = w(this, pn)) == null ? void 0 : n.classList.contains(this.constructor.CLASS_SHOW);
  }
  get datepicker() {
    return w(this, pn) || this._ensureDatepicker();
  }
  get popper() {
    return w(this, Ve) ? w(this, Ve) : this._createPopper();
  }
  get trigger() {
    return w(this, vo) || this.element;
  }
  get elementShowClass() {
    return `with-${this.constructor.NAME}-show`;
  }
  show(n) {
    var r, s, o;
    return H(this, vo, n), !this.datepicker || !this.element ? !1 : (this.element.classList.add(this.elementShowClass), this.datepicker.classList.add(this.constructor.CLASS_SHOW), this.datepicker.classList.add("fade"), (r = this.datepicker.querySelector(".datepicker-calendar-day")) == null || r.classList.remove("hidden"), (s = this.datepicker.querySelector(".datepicker-calendar-month")) == null || s.classList.add("hidden"), (o = this.datepicker.querySelector(".datepicker-calendar-year")) == null || o.classList.add("hidden"), this._createPopper().update(), !0);
  }
  hide() {
    var n, r;
    return (n = w(this, Ve)) == null || n.destroy(), H(this, Ve, void 0), this.element.classList.remove(this.elementShowClass), (r = w(this, pn)) == null || r.classList.remove(this.constructor.CLASS_SHOW), this.datepicker.classList.remove("fade"), !0;
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
    return r.classList.add(n), Ch(U(Dh, { ...this.options }), r), this.options.arrow && r.prepend(this._createArrow()), document.body.appendChild(r), H(this, pn, r), r;
  }
  _getPopperOptions() {
    const n = this._getArrowSize();
    return {
      modifiers: [
        Mv,
        Rv,
        { ...xv, options: {
          padding: n,
          element: ".arrow"
        } },
        {
          ...Cv,
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
    return w(this, Ve) ? w(this, Ve).setOptions(n) : H(this, Ve, yv(this._getPopperElement(), this.datepicker, n)), w(this, Ve);
  }
  _getPopperElement() {
    return w(this, Dn) || H(this, Dn, {
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
    }), w(this, Dn);
  }
  static clear(n) {
    n instanceof Event && (n = { event: n });
    const { exclude: r } = n || {}, s = this.getAll().entries(), o = new Set(r || []);
    for (const [a, c] of s)
      o.has(a) || c.hide();
  }
}
Dn = new WeakMap(), Nn = new WeakMap(), pn = new WeakMap(), Ve = new WeakMap(), vo = new WeakMap(), Zi = new WeakMap(), N(lt, "NAME", "datepicker"), N(lt, "CLASSNAME", "datepicker"), N(lt, "CLASS_SHOW", "show"), N(lt, "MENU_SELECTOR", ".form-datetime:not(.disabled):not(:disabled)"), N(lt, "DEFAULT", {
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
  const t = e.target, n = t.closest(lt.MENU_SELECTOR), r = t.closest(".datepicker-calendar-bar, .datepicker-calendar-thead, .datepicker-calendar-month-table");
  n ? lt.ensure(n).toggle() : r || lt.clear({ event: e });
});
const Hv = (e) => {
  const t = document.getElementsByClassName("with-datepicker-show")[0];
  if (!t)
    return;
  const n = typeof t.closest == "function" ? t.closest(lt.MENU_SELECTOR) : null;
  !n || !e.target.contains(n) || lt.clear({ event: e });
};
window.addEventListener("scroll", Hv, !0);
function f_(e, t, n) {
  if (n) {
    e.setAttribute("class", B(t));
    return;
  }
  bs(e.getAttribute("class"), t).forEach(([r, s]) => {
    e.classList.toggle(r, s);
  });
}
function hr(e, t, n) {
  if (typeof t == "object")
    return Object.entries(t).forEach(([r, s]) => {
      hr(e, r, s);
    });
  n !== void 0 && (e.style[t] = typeof n == "number" ? `${n}px` : n);
}
function Di(e, t, n) {
  if (typeof t == "object")
    return Object.entries(t).forEach(([r, s]) => {
      Di(e, r, s);
    });
  n !== void 0 && (n === null ? e.removeAttribute(t) : e.setAttribute(t, n));
}
var dn, mo, Wt, Qi, Ln, Zo;
const mt = class extends ft {
  constructor() {
    super(...arguments);
    L(this, Ln);
    L(this, dn, 0);
    L(this, mo, void 0);
    L(this, Wt, void 0);
    L(this, Qi, (n) => {
      const r = n.target;
      (r.closest(mt.DISMISS_SELECTOR) || this.options.backdrop === !0 && !r.closest(".modal-dialog") && r.closest(".modal")) && this.hide();
    });
  }
  get modalElement() {
    return this.element;
  }
  get isShown() {
    return this.modalElement.classList.contains(mt.CLASS_SHOW);
  }
  get dialog() {
    return this.modalElement.querySelector(".modal-dialog");
  }
  afterInit() {
    if (this.on("click", w(this, Qi)), this.options.responsive && typeof ResizeObserver < "u") {
      const { dialog: n } = this;
      if (n) {
        const r = new ResizeObserver(() => {
          if (!this.isShown)
            return;
          const s = n.clientWidth, o = n.clientHeight;
          (!w(this, Wt) || w(this, Wt)[0] !== s || w(this, Wt)[1] !== o) && (H(this, Wt, [s, o]), this.layout());
        });
        r.observe(n), H(this, mo, r);
      }
    }
    this.options.show && this.show();
  }
  destroy() {
    var n;
    super.destroy(), (n = w(this, mo)) == null || n.disconnect();
  }
  show(n) {
    if (this.isShown)
      return !1;
    this.setOptions(n);
    const { modalElement: r } = this, { animation: s, backdrop: o, className: a, style: c } = this.options;
    return f_(r, [{
      "modal-trans": s,
      "modal-no-backdrop": !o
    }, mt.CLASS_SHOW, a]), hr(r, {
      zIndex: `${mt.zIndex++}`,
      ...c
    }), this.layout(), this.emit("show", this), te(this, Ln, Zo).call(this, () => {
      r.classList.add(mt.CLASS_SHOWN), te(this, Ln, Zo).call(this, () => {
        this.emit("shown", this);
      });
    }, 50), !0;
  }
  hide() {
    return this.isShown ? (this.modalElement.classList.remove(mt.CLASS_SHOWN), this.emit("hide", this), te(this, Ln, Zo).call(this, () => {
      this.modalElement.classList.remove(mt.CLASS_SHOW), this.emit("hidden", this);
    }), !0) : !1;
  }
  layout(n, r) {
    var p;
    if (!this.isShown)
      return;
    const { dialog: s } = this;
    if (!s)
      return;
    r = r != null ? r : this.options.size, Di(s, "data-size", null);
    const o = { width: null, height: null };
    typeof r == "object" ? (o.width = r.width, o.height = r.height) : typeof r == "string" && ["md", "sm", "lg", "full"].includes(r) ? Di(s, "data-size", r) : r && (o.width = r), hr(s, o), n = (p = n != null ? n : this.options.position) != null ? p : "fit";
    const a = s.clientWidth, c = s.clientHeight;
    H(this, Wt, [a, c]), typeof n == "function" && (n = n({ width: a, height: c }));
    const f = {
      top: null,
      left: null,
      bottom: null,
      right: null,
      alignSelf: "center"
    };
    typeof n == "number" ? (f.alignSelf = "flex-start", f.top = n) : typeof n == "object" && n ? (f.alignSelf = "flex-start", Object.assign(f, n)) : n === "fit" ? (f.alignSelf = "flex-start", f.top = `${Math.max(0, Math.floor((window.innerHeight - c) / 3))}px`) : n === "bottom" ? f.alignSelf = "flex-end" : n === "top" ? f.alignSelf = "flex-start" : n !== "center" && typeof n == "string" && (f.alignSelf = "flex-start", f.top = n), hr(s, f), hr(this.modalElement, "justifyContent", f.left ? "flex-start" : "center");
  }
};
let Ee = mt;
dn = new WeakMap(), mo = new WeakMap(), Wt = new WeakMap(), Qi = new WeakMap(), Ln = new WeakSet(), Zo = function(n, r) {
  w(this, dn) && (clearTimeout(w(this, dn)), H(this, dn, 0)), n && (this.options.animation ? H(this, dn, window.setTimeout(n, r != null ? r : this.options.transTime)) : n());
}, N(Ee, "NAME", "Modal"), N(Ee, "EVENTS", !0), N(Ee, "DEFAULT", {
  position: "fit",
  show: !0,
  keyboard: !0,
  animation: !0,
  backdrop: !0,
  responsive: !0,
  transTime: 300
}), N(Ee, "CLASS_SHOW", "show"), N(Ee, "CLASS_SHOWN", "in"), N(Ee, "DISMISS_SELECTOR", '[data-dismiss="modal"]'), N(Ee, "zIndex", 2e3);
window.addEventListener("resize", () => {
  Ee.all.forEach((e) => {
    const t = e;
    t.isShown && t.options.responsive && t.layout();
  });
});
var Es, se, u_, Qo, Nr, pc, Ni = {}, __ = [], Wv = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function Zt(e, t) {
  for (var n in t)
    e[n] = t[n];
  return e;
}
function p_(e) {
  var t = e.parentNode;
  t && t.removeChild(e);
}
function ge(e, t, n) {
  var r, s, o, a = {};
  for (o in t)
    o == "key" ? r = t[o] : o == "ref" ? s = t[o] : a[o] = t[o];
  if (arguments.length > 2 && (a.children = arguments.length > 3 ? Es.call(arguments, 2) : n), typeof e == "function" && e.defaultProps != null)
    for (o in e.defaultProps)
      a[o] === void 0 && (a[o] = e.defaultProps[o]);
  return ei(e, a, r, s, null);
}
function ei(e, t, n, r, s) {
  var o = { type: e, props: t, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: s == null ? ++u_ : s };
  return s == null && se.vnode != null && se.vnode(o), o;
}
function jv() {
  return { current: null };
}
function Cs(e) {
  return e.children;
}
function Cn(e, t) {
  this.props = e, this.context = t;
}
function to(e, t) {
  if (t == null)
    return e.__ ? to(e.__, e.__.__k.indexOf(e) + 1) : null;
  for (var n; t < e.__k.length; t++)
    if ((n = e.__k[t]) != null && n.__e != null)
      return n.__e;
  return typeof e.type == "function" ? to(e) : null;
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
function dc(e) {
  (!e.__d && (e.__d = !0) && Nr.push(e) && !Li.__r++ || pc !== se.debounceRendering) && ((pc = se.debounceRendering) || setTimeout)(Li);
}
function Li() {
  for (var e; Li.__r = Nr.length; )
    e = Nr.sort(function(t, n) {
      return t.__v.__b - n.__v.__b;
    }), Nr = [], e.some(function(t) {
      var n, r, s, o, a, c;
      t.__d && (a = (o = (n = t).__v).__e, (c = n.__P) && (r = [], (s = Zt({}, o)).__v = o.__v + 1, La(c, o, s, n.__n, c.ownerSVGElement !== void 0, o.__h != null ? [a] : null, r, a == null ? to(o) : a, o.__h), g_(r, o), o.__e != a && d_(o)));
    });
}
function h_(e, t, n, r, s, o, a, c, f, p) {
  var i, d, u, l, _, g, h, v = r && r.__k || __, m = v.length;
  for (n.__k = [], i = 0; i < t.length; i++)
    if ((l = n.__k[i] = (l = t[i]) == null || typeof l == "boolean" ? null : typeof l == "string" || typeof l == "number" || typeof l == "bigint" ? ei(null, l, null, null, l) : Array.isArray(l) ? ei(Cs, { children: l }, null, null, null) : l.__b > 0 ? ei(l.type, l.props, l.key, l.ref ? l.ref : null, l.__v) : l) != null) {
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
      La(e, l, u = u || Ni, s, o, a, c, f, p), _ = l.__e, (d = l.ref) && u.ref != d && (h || (h = []), u.ref && h.push(u.ref, null, l), h.push(d, l.__c || _, l)), _ != null ? (g == null && (g = _), typeof l.type == "function" && l.__k === u.__k ? l.__d = f = v_(l, f, e) : f = m_(e, l, u, v, _, f), typeof n.type == "function" && (n.__d = f)) : f && u.__e == f && f.parentNode != e && (f = to(u));
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
function Iv(e, t, n, r, s) {
  var o;
  for (o in n)
    o === "children" || o === "key" || o in t || Pi(e, o, null, n[o], r);
  for (o in t)
    s && typeof t[o] != "function" || o === "children" || o === "key" || o === "value" || o === "checked" || n[o] === t[o] || Pi(e, o, t[o], n[o], r);
}
function hc(e, t, n) {
  t[0] === "-" ? e.setProperty(t, n) : e[t] = n == null ? "" : typeof n != "number" || Wv.test(t) ? n : n + "px";
}
function Pi(e, t, n, r, s) {
  var o;
  e:
    if (t === "style")
      if (typeof n == "string")
        e.style.cssText = n;
      else {
        if (typeof r == "string" && (e.style.cssText = r = ""), r)
          for (t in r)
            n && t in n || hc(e.style, t, "");
        if (n)
          for (t in n)
            r && n[t] === r[t] || hc(e.style, t, n[t]);
      }
    else if (t[0] === "o" && t[1] === "n")
      o = t !== (t = t.replace(/Capture$/, "")), t = t.toLowerCase() in e ? t.toLowerCase().slice(2) : t.slice(2), e.l || (e.l = {}), e.l[t + o] = n, n ? r || e.addEventListener(t, o ? mc : vc, o) : e.removeEventListener(t, o ? mc : vc, o);
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
function vc(e) {
  this.l[e.type + !1](se.event ? se.event(e) : e);
}
function mc(e) {
  this.l[e.type + !0](se.event ? se.event(e) : e);
}
function La(e, t, n, r, s, o, a, c, f) {
  var p, i, d, u, l, _, g, h, v, m, S, b, E, $, k, y = t.type;
  if (t.constructor !== void 0)
    return null;
  n.__h != null && (f = n.__h, c = t.__e = n.__e, t.__h = null, o = [c]), (p = se.__b) && p(t);
  try {
    e:
      if (typeof y == "function") {
        if (h = t.props, v = (p = y.contextType) && r[p.__c], m = p ? v ? v.props.value : p.__ : r, n.__c ? g = (i = t.__c = n.__c).__ = i.__E : ("prototype" in y && y.prototype.render ? t.__c = i = new y(h, m) : (t.__c = i = new Cn(h, m), i.constructor = y, i.render = Bv), v && v.sub(i), i.props = h, i.state || (i.state = {}), i.context = m, i.__n = r, d = i.__d = !0, i.__h = [], i._sb = []), i.__s == null && (i.__s = i.state), y.getDerivedStateFromProps != null && (i.__s == i.state && (i.__s = Zt({}, i.__s)), Zt(i.__s, y.getDerivedStateFromProps(h, i.__s))), u = i.props, l = i.state, d)
          y.getDerivedStateFromProps == null && i.componentWillMount != null && i.componentWillMount(), i.componentDidMount != null && i.__h.push(i.componentDidMount);
        else {
          if (y.getDerivedStateFromProps == null && h !== u && i.componentWillReceiveProps != null && i.componentWillReceiveProps(h, m), !i.__e && i.shouldComponentUpdate != null && i.shouldComponentUpdate(h, i.__s, m) === !1 || t.__v === n.__v) {
            for (i.props = h, i.state = i.__s, t.__v !== n.__v && (i.__d = !1), i.__v = t, t.__e = n.__e, t.__k = n.__k, t.__k.forEach(function(x) {
              x && (x.__ = t);
            }), S = 0; S < i._sb.length; S++)
              i.__h.push(i._sb[S]);
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
        i.state = i.__s, i.getChildContext != null && (r = Zt(Zt({}, r), i.getChildContext())), d || i.getSnapshotBeforeUpdate == null || (_ = i.getSnapshotBeforeUpdate(u, l)), k = p != null && p.type === Cs && p.key == null ? p.props.children : p, h_(e, Array.isArray(k) ? k : [k], t, n, r, s, o, a, c, f), i.base = t.__e, t.__h = null, i.__h.length && a.push(i), g && (i.__E = i.__ = null), i.__e = !1;
      } else
        o == null && t.__v === n.__v ? (t.__k = n.__k, t.__e = n.__e) : t.__e = Uv(n.__e, t, n, r, s, o, a, f);
    (p = se.diffed) && p(t);
  } catch (x) {
    t.__v = null, (f || o != null) && (t.__e = c, t.__h = !!f, o[o.indexOf(c)] = null), se.__e(x, t, n);
  }
}
function g_(e, t) {
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
function Uv(e, t, n, r, s, o, a, c) {
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
    if (o = o && Es.call(e.childNodes), p = (d = n.props || Ni).dangerouslySetInnerHTML, i = u.dangerouslySetInnerHTML, !c) {
      if (o != null)
        for (d = {}, _ = 0; _ < e.attributes.length; _++)
          d[e.attributes[_].name] = e.attributes[_].value;
      (i || p) && (i && (p && i.__html == p.__html || i.__html === e.innerHTML) || (e.innerHTML = i && i.__html || ""));
    }
    if (Iv(e, u, d, s, c), i)
      t.__k = [];
    else if (_ = t.props.children, h_(e, Array.isArray(_) ? _ : [_], t, n, r, s && l !== "foreignObject", o, a, o ? o[0] : n.__k && to(n, 0), c), o != null)
      for (_ = o.length; _--; )
        o[_] != null && p_(o[_]);
    c || ("value" in u && (_ = u.value) !== void 0 && (_ !== e.value || l === "progress" && !_ || l === "option" && _ !== d.value) && Pi(e, "value", _, d.value, !1), "checked" in u && (_ = u.checked) !== void 0 && _ !== e.checked && Pi(e, "checked", _, d.checked, !1));
  }
  return e;
}
function y_(e, t, n) {
  try {
    typeof e == "function" ? e(t) : e.current = t;
  } catch (r) {
    se.__e(r, n);
  }
}
function b_(e, t, n) {
  var r, s;
  if (se.unmount && se.unmount(e), (r = e.ref) && (r.current && r.current !== e.__e || y_(r, null, t)), (r = e.__c) != null) {
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
      r[s] && b_(r[s], t, n || typeof e.type != "function");
  n || e.__e == null || p_(e.__e), e.__ = e.__e = e.__d = void 0;
}
function Bv(e, t, n) {
  return this.constructor(e, n);
}
function Fv(e, t, n) {
  var r, s, o;
  se.__ && se.__(e, t), s = (r = typeof n == "function") ? null : n && n.__k || t.__k, o = [], La(t, e = (!r && n || t).__k = ge(Cs, null, [e]), s || Ni, Ni, t.ownerSVGElement !== void 0, !r && n ? [n] : s ? null : t.firstChild ? Es.call(t.childNodes) : null, o, !r && n ? n : s ? s.__e : t.firstChild, r), g_(o, e);
}
Es = __.slice, se = { __e: function(e, t, n, r) {
  for (var s, o, a; t = t.__; )
    if ((s = t.__c) && !s.__)
      try {
        if ((o = s.constructor) && o.getDerivedStateFromError != null && (s.setState(o.getDerivedStateFromError(e)), a = s.__d), s.componentDidCatch != null && (s.componentDidCatch(e, r || {}), a = s.__d), a)
          return s.__E = s;
      } catch (c) {
        e = c;
      }
  throw e;
} }, u_ = 0, Qo = function(e) {
  return e != null && e.constructor === void 0;
}, Cn.prototype.setState = function(e, t) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = Zt({}, this.state), typeof e == "function" && (e = e(Zt({}, n), this.props)), e && Zt(n, e), e != null && this.__v && (t && this._sb.push(t), dc(this));
}, Cn.prototype.forceUpdate = function(e) {
  this.__v && (this.__e = !0, e && this.__h.push(e), dc(this));
}, Cn.prototype.render = Cs, Nr = [], Li.__r = 0;
let zv = (e = 21) => crypto.getRandomValues(new Uint8Array(e)).reduce((t, n) => (n &= 63, n < 36 ? t += n.toString(36) : n < 62 ? t += (n - 26).toString(36).toUpperCase() : n > 62 ? t += "-" : t += "_", t), "");
var w_, qs, $_, Vv = [];
function Os(e, t, n) {
  var r, s, o, a = {};
  for (o in t)
    o == "key" ? r = t[o] : o == "ref" ? s = t[o] : a[o] = t[o];
  if (arguments.length > 2 && (a.children = arguments.length > 3 ? w_.call(arguments, 2) : n), typeof e == "function" && e.defaultProps != null)
    for (o in e.defaultProps)
      a[o] === void 0 && (a[o] = e.defaultProps[o]);
  return Yv(e, a, r, s, null);
}
function Yv(e, t, n, r, s) {
  var o = { type: e, props: t, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: s == null ? ++$_ : s };
  return s == null && qs.vnode != null && qs.vnode(o), o;
}
w_ = Vv.slice, qs = { __e: function(e, t, n, r) {
  for (var s, o, a; t = t.__; )
    if ((s = t.__c) && !s.__)
      try {
        if ((o = s.constructor) && o.getDerivedStateFromError != null && (s.setState(o.getDerivedStateFromError(e)), a = s.__d), s.componentDidCatch != null && (s.componentDidCatch(e, r || {}), a = s.__d), a)
          return s.__E = s;
      } catch (c) {
        e = c;
      }
  throw e;
} }, $_ = 0;
function qv({
  key: e,
  type: t,
  btnType: n,
  ...r
}) {
  return /* @__PURE__ */ Os(an, {
    type: n,
    ...r
  });
}
var Pa, he, k_, Lr, gc, x_ = {}, S_ = [], Gv = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function Qt(e, t) {
  for (var n in t)
    e[n] = t[n];
  return e;
}
function E_(e) {
  var t = e.parentNode;
  t && t.removeChild(e);
}
function C_(e, t, n) {
  var r, s, o, a = {};
  for (o in t)
    o == "key" ? r = t[o] : o == "ref" ? s = t[o] : a[o] = t[o];
  if (arguments.length > 2 && (a.children = arguments.length > 3 ? Pa.call(arguments, 2) : n), typeof e == "function" && e.defaultProps != null)
    for (o in e.defaultProps)
      a[o] === void 0 && (a[o] = e.defaultProps[o]);
  return ti(e, a, r, s, null);
}
function ti(e, t, n, r, s) {
  var o = { type: e, props: t, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: s == null ? ++k_ : s };
  return s == null && he.vnode != null && he.vnode(o), o;
}
function Xv() {
  return { current: null };
}
function Ra(e) {
  return e.children;
}
function Pr(e, t) {
  this.props = e, this.context = t;
}
function no(e, t) {
  if (t == null)
    return e.__ ? no(e.__, e.__.__k.indexOf(e) + 1) : null;
  for (var n; t < e.__k.length; t++)
    if ((n = e.__k[t]) != null && n.__e != null)
      return n.__e;
  return typeof e.type == "function" ? no(e) : null;
}
function O_(e) {
  var t, n;
  if ((e = e.__) != null && e.__c != null) {
    for (e.__e = e.__c.base = null, t = 0; t < e.__k.length; t++)
      if ((n = e.__k[t]) != null && n.__e != null) {
        e.__e = e.__c.base = n.__e;
        break;
      }
    return O_(e);
  }
}
function yc(e) {
  (!e.__d && (e.__d = !0) && Lr.push(e) && !Ri.__r++ || gc !== he.debounceRendering) && ((gc = he.debounceRendering) || setTimeout)(Ri);
}
function Ri() {
  for (var e; Ri.__r = Lr.length; )
    e = Lr.sort(function(t, n) {
      return t.__v.__b - n.__v.__b;
    }), Lr = [], e.some(function(t) {
      var n, r, s, o, a, c;
      t.__d && (a = (o = (n = t).__v).__e, (c = n.__P) && (r = [], (s = Qt({}, o)).__v = o.__v + 1, D_(c, o, s, n.__n, c.ownerSVGElement !== void 0, o.__h != null ? [a] : null, r, a == null ? no(o) : a, o.__h), Jv(r, o), o.__e != a && O_(o)));
    });
}
function A_(e, t, n, r, s, o, a, c, f, p) {
  var i, d, u, l, _, g, h, v = r && r.__k || S_, m = v.length;
  for (n.__k = [], i = 0; i < t.length; i++)
    if ((l = n.__k[i] = (l = t[i]) == null || typeof l == "boolean" ? null : typeof l == "string" || typeof l == "number" || typeof l == "bigint" ? ti(null, l, null, null, l) : Array.isArray(l) ? ti(Ra, { children: l }, null, null, null) : l.__b > 0 ? ti(l.type, l.props, l.key, l.ref ? l.ref : null, l.__v) : l) != null) {
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
      D_(e, l, u = u || x_, s, o, a, c, f, p), _ = l.__e, (d = l.ref) && u.ref != d && (h || (h = []), u.ref && h.push(u.ref, null, l), h.push(d, l.__c || _, l)), _ != null ? (g == null && (g = _), typeof l.type == "function" && l.__k === u.__k ? l.__d = f = M_(l, f, e) : f = T_(e, l, u, v, _, f), typeof n.type == "function" && (n.__d = f)) : f && u.__e == f && f.parentNode != e && (f = no(u));
    }
  for (n.__e = g, i = m; i--; )
    v[i] != null && L_(v[i], v[i]);
  if (h)
    for (i = 0; i < h.length; i++)
      N_(h[i], h[++i], h[++i]);
}
function M_(e, t, n) {
  for (var r, s = e.__k, o = 0; s && o < s.length; o++)
    (r = s[o]) && (r.__ = e, t = typeof r.type == "function" ? M_(r, t, n) : T_(n, r, r, s, r.__e, t));
  return t;
}
function T_(e, t, n, r, s, o) {
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
function Kv(e, t, n, r, s) {
  var o;
  for (o in n)
    o === "children" || o === "key" || o in t || Hi(e, o, null, n[o], r);
  for (o in t)
    s && typeof t[o] != "function" || o === "children" || o === "key" || o === "value" || o === "checked" || n[o] === t[o] || Hi(e, o, t[o], n[o], r);
}
function bc(e, t, n) {
  t[0] === "-" ? e.setProperty(t, n) : e[t] = n == null ? "" : typeof n != "number" || Gv.test(t) ? n : n + "px";
}
function Hi(e, t, n, r, s) {
  var o;
  e:
    if (t === "style")
      if (typeof n == "string")
        e.style.cssText = n;
      else {
        if (typeof r == "string" && (e.style.cssText = r = ""), r)
          for (t in r)
            n && t in n || bc(e.style, t, "");
        if (n)
          for (t in n)
            r && n[t] === r[t] || bc(e.style, t, n[t]);
      }
    else if (t[0] === "o" && t[1] === "n")
      o = t !== (t = t.replace(/Capture$/, "")), t = t.toLowerCase() in e ? t.toLowerCase().slice(2) : t.slice(2), e.l || (e.l = {}), e.l[t + o] = n, n ? r || e.addEventListener(t, o ? $c : wc, o) : e.removeEventListener(t, o ? $c : wc, o);
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
function wc(e) {
  this.l[e.type + !1](he.event ? he.event(e) : e);
}
function $c(e) {
  this.l[e.type + !0](he.event ? he.event(e) : e);
}
function D_(e, t, n, r, s, o, a, c, f) {
  var p, i, d, u, l, _, g, h, v, m, S, b, E, $, k, y = t.type;
  if (t.constructor !== void 0)
    return null;
  n.__h != null && (f = n.__h, c = t.__e = n.__e, t.__h = null, o = [c]), (p = he.__b) && p(t);
  try {
    e:
      if (typeof y == "function") {
        if (h = t.props, v = (p = y.contextType) && r[p.__c], m = p ? v ? v.props.value : p.__ : r, n.__c ? g = (i = t.__c = n.__c).__ = i.__E : ("prototype" in y && y.prototype.render ? t.__c = i = new y(h, m) : (t.__c = i = new Pr(h, m), i.constructor = y, i.render = Qv), v && v.sub(i), i.props = h, i.state || (i.state = {}), i.context = m, i.__n = r, d = i.__d = !0, i.__h = [], i._sb = []), i.__s == null && (i.__s = i.state), y.getDerivedStateFromProps != null && (i.__s == i.state && (i.__s = Qt({}, i.__s)), Qt(i.__s, y.getDerivedStateFromProps(h, i.__s))), u = i.props, l = i.state, d)
          y.getDerivedStateFromProps == null && i.componentWillMount != null && i.componentWillMount(), i.componentDidMount != null && i.__h.push(i.componentDidMount);
        else {
          if (y.getDerivedStateFromProps == null && h !== u && i.componentWillReceiveProps != null && i.componentWillReceiveProps(h, m), !i.__e && i.shouldComponentUpdate != null && i.shouldComponentUpdate(h, i.__s, m) === !1 || t.__v === n.__v) {
            for (i.props = h, i.state = i.__s, t.__v !== n.__v && (i.__d = !1), i.__v = t, t.__e = n.__e, t.__k = n.__k, t.__k.forEach(function(x) {
              x && (x.__ = t);
            }), S = 0; S < i._sb.length; S++)
              i.__h.push(i._sb[S]);
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
        i.state = i.__s, i.getChildContext != null && (r = Qt(Qt({}, r), i.getChildContext())), d || i.getSnapshotBeforeUpdate == null || (_ = i.getSnapshotBeforeUpdate(u, l)), k = p != null && p.type === Ra && p.key == null ? p.props.children : p, A_(e, Array.isArray(k) ? k : [k], t, n, r, s, o, a, c, f), i.base = t.__e, t.__h = null, i.__h.length && a.push(i), g && (i.__E = i.__ = null), i.__e = !1;
      } else
        o == null && t.__v === n.__v ? (t.__k = n.__k, t.__e = n.__e) : t.__e = Zv(n.__e, t, n, r, s, o, a, f);
    (p = he.diffed) && p(t);
  } catch (x) {
    t.__v = null, (f || o != null) && (t.__e = c, t.__h = !!f, o[o.indexOf(c)] = null), he.__e(x, t, n);
  }
}
function Jv(e, t) {
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
function Zv(e, t, n, r, s, o, a, c) {
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
    if (o = o && Pa.call(e.childNodes), p = (d = n.props || x_).dangerouslySetInnerHTML, i = u.dangerouslySetInnerHTML, !c) {
      if (o != null)
        for (d = {}, _ = 0; _ < e.attributes.length; _++)
          d[e.attributes[_].name] = e.attributes[_].value;
      (i || p) && (i && (p && i.__html == p.__html || i.__html === e.innerHTML) || (e.innerHTML = i && i.__html || ""));
    }
    if (Kv(e, u, d, s, c), i)
      t.__k = [];
    else if (_ = t.props.children, A_(e, Array.isArray(_) ? _ : [_], t, n, r, s && l !== "foreignObject", o, a, o ? o[0] : n.__k && no(n, 0), c), o != null)
      for (_ = o.length; _--; )
        o[_] != null && E_(o[_]);
    c || ("value" in u && (_ = u.value) !== void 0 && (_ !== e.value || l === "progress" && !_ || l === "option" && _ !== d.value) && Hi(e, "value", _, d.value, !1), "checked" in u && (_ = u.checked) !== void 0 && _ !== e.checked && Hi(e, "checked", _, d.checked, !1));
  }
  return e;
}
function N_(e, t, n) {
  try {
    typeof e == "function" ? e(t) : e.current = t;
  } catch (r) {
    he.__e(r, n);
  }
}
function L_(e, t, n) {
  var r, s;
  if (he.unmount && he.unmount(e), (r = e.ref) && (r.current && r.current !== e.__e || N_(r, null, t)), (r = e.__c) != null) {
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
      r[s] && L_(r[s], t, n || typeof e.type != "function");
  n || e.__e == null || E_(e.__e), e.__ = e.__e = e.__d = void 0;
}
function Qv(e, t, n) {
  return this.constructor(e, n);
}
Pa = S_.slice, he = { __e: function(e, t, n, r) {
  for (var s, o, a; t = t.__; )
    if ((s = t.__c) && !s.__)
      try {
        if ((o = s.constructor) && o.getDerivedStateFromError != null && (s.setState(o.getDerivedStateFromError(e)), a = s.__d), s.componentDidCatch != null && (s.componentDidCatch(e, r || {}), a = s.__d), a)
          return s.__E = s;
      } catch (c) {
        e = c;
      }
  throw e;
} }, k_ = 0, Pr.prototype.setState = function(e, t) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = Qt({}, this.state), typeof e == "function" && (e = e(Qt({}, n), this.props)), e && Qt(n, e), e != null && this.__v && (t && this._sb.push(t), yc(this));
}, Pr.prototype.forceUpdate = function(e) {
  this.__v && (this.__e = !0, e && this.__h.push(e), yc(this));
}, Pr.prototype.render = Ra, Lr = [], Ri.__r = 0;
var Ha = "top", P_ = "bottom", Wi = "right", ro = "left", em = "auto", R_ = [Ha, P_, Wi, ro], tm = "start", nm = "end", rm = /* @__PURE__ */ [].concat(R_, [em]).reduce(function(e, t) {
  return e.concat([t, t + "-" + tm, t + "-" + nm]);
}, []);
function H_(e) {
  return e.split("-")[0];
}
function lr(e) {
  if (e == null)
    return window;
  if (e.toString() !== "[object Window]") {
    var t = e.ownerDocument;
    return t && t.defaultView || window;
  }
  return e;
}
function W_(e) {
  var t = lr(e).Element;
  return e instanceof t || e instanceof Element;
}
function ji(e) {
  var t = lr(e).HTMLElement;
  return e instanceof t || e instanceof HTMLElement;
}
function Wa(e) {
  if (typeof ShadowRoot > "u")
    return !1;
  var t = lr(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot;
}
var om = Math.max, im = Math.min, kc = Math.round;
function Gs() {
  var e = navigator.userAgentData;
  return e != null && e.brands ? e.brands.map(function(t) {
    return t.brand + "/" + t.version;
  }).join(" ") : navigator.userAgent;
}
function sm() {
  return !/^((?!chrome|android).)*safari/i.test(Gs());
}
function am(e, t, n) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  var r = e.getBoundingClientRect(), s = 1, o = 1;
  t && ji(e) && (s = e.offsetWidth > 0 && kc(r.width) / e.offsetWidth || 1, o = e.offsetHeight > 0 && kc(r.height) / e.offsetHeight || 1);
  var a = W_(e) ? lr(e) : window, c = a.visualViewport, f = !sm() && n, p = (r.left + (f && c ? c.offsetLeft : 0)) / s, i = (r.top + (f && c ? c.offsetTop : 0)) / o, d = r.width / s, u = r.height / o;
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
function lm(e) {
  var t = am(e), n = e.offsetWidth, r = e.offsetHeight;
  return Math.abs(t.width - n) <= 1 && (n = t.width), Math.abs(t.height - r) <= 1 && (r = t.height), {
    x: e.offsetLeft,
    y: e.offsetTop,
    width: n,
    height: r
  };
}
function cm(e, t) {
  var n = t.getRootNode && t.getRootNode();
  if (e.contains(t))
    return !0;
  if (n && Wa(n)) {
    var r = t;
    do {
      if (r && e.isSameNode(r))
        return !0;
      r = r.parentNode || r.host;
    } while (r);
  }
  return !1;
}
function oo(e) {
  return e ? (e.nodeName || "").toLowerCase() : null;
}
function io(e) {
  return lr(e).getComputedStyle(e);
}
function fm(e) {
  return ["table", "td", "th"].indexOf(oo(e)) >= 0;
}
function um(e) {
  return ((W_(e) ? e.ownerDocument : e.document) || window.document).documentElement;
}
function _m(e) {
  return oo(e) === "html" ? e : e.assignedSlot || e.parentNode || (Wa(e) ? e.host : null) || um(e);
}
function xc(e) {
  return !ji(e) || io(e).position === "fixed" ? null : e.offsetParent;
}
function pm(e) {
  var t = /firefox/i.test(Gs()), n = /Trident/i.test(Gs());
  if (n && ji(e)) {
    var r = io(e);
    if (r.position === "fixed")
      return null;
  }
  var s = _m(e);
  for (Wa(s) && (s = s.host); ji(s) && ["html", "body"].indexOf(oo(s)) < 0; ) {
    var o = io(s);
    if (o.transform !== "none" || o.perspective !== "none" || o.contain === "paint" || ["transform", "perspective"].indexOf(o.willChange) !== -1 || t && o.willChange === "filter" || t && o.filter && o.filter !== "none")
      return s;
    s = s.parentNode;
  }
  return null;
}
function dm(e) {
  for (var t = lr(e), n = xc(e); n && fm(n) && io(n).position === "static"; )
    n = xc(n);
  return n && (oo(n) === "html" || oo(n) === "body" && io(n).position === "static") ? t : n || pm(e) || t;
}
function hm(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function vm(e, t, n) {
  return om(e, im(t, n));
}
function mm() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
function gm(e) {
  return Object.assign({}, mm(), e);
}
function ym(e, t) {
  return t.reduce(function(n, r) {
    return n[r] = e, n;
  }, {});
}
var bm = function(t, n) {
  return t = typeof t == "function" ? t(Object.assign({}, n.rects, {
    placement: n.placement
  })) : t, gm(typeof t != "number" ? t : ym(t, R_));
};
function wm(e) {
  var t, n = e.state, r = e.name, s = e.options, o = n.elements.arrow, a = n.modifiersData.popperOffsets, c = H_(n.placement), f = hm(c), p = [ro, Wi].indexOf(c) >= 0, i = p ? "height" : "width";
  if (!(!o || !a)) {
    var d = bm(s.padding, n), u = lm(o), l = f === "y" ? Ha : ro, _ = f === "y" ? P_ : Wi, g = n.rects.reference[i] + n.rects.reference[f] - a[f] - n.rects.popper[i], h = a[f] - n.rects.reference[f], v = dm(o), m = v ? f === "y" ? v.clientHeight || 0 : v.clientWidth || 0 : 0, S = g / 2 - h / 2, b = d[l], E = m - u[i] - d[_], $ = m / 2 - u[i] / 2 + S, k = vm(b, $, E), y = f;
    n.modifiersData[r] = (t = {}, t[y] = k, t.centerOffset = k - $, t);
  }
}
function $m(e) {
  var t = e.state, n = e.options, r = n.element, s = r === void 0 ? "[data-popper-arrow]" : r;
  s != null && (typeof s == "string" && (s = t.elements.popper.querySelector(s), !s) || !cm(t.elements.popper, s) || (t.elements.arrow = s));
}
const km = {
  name: "arrow",
  enabled: !0,
  phase: "main",
  fn: wm,
  effect: $m,
  requires: ["popperOffsets"],
  requiresIfExists: ["preventOverflow"]
};
function xm(e, t, n) {
  var r = H_(e), s = [ro, Ha].indexOf(r) >= 0 ? -1 : 1, o = typeof n == "function" ? n(Object.assign({}, t, {
    placement: e
  })) : n, a = o[0], c = o[1];
  return a = a || 0, c = (c || 0) * s, [ro, Wi].indexOf(r) >= 0 ? {
    x: c,
    y: a
  } : {
    x: a,
    y: c
  };
}
function Sm(e) {
  var t = e.state, n = e.options, r = e.name, s = n.offset, o = s === void 0 ? [0, 0] : s, a = rm.reduce(function(i, d) {
    return i[d] = xm(d, t.rects, o), i;
  }, {}), c = a[t.placement], f = c.x, p = c.y;
  t.modifiersData.popperOffsets != null && (t.modifiersData.popperOffsets.x += f, t.modifiersData.popperOffsets.y += p), t.modifiersData[r] = a;
}
const Em = {
  name: "offset",
  enabled: !0,
  phase: "main",
  requires: ["popperOffsets"],
  fn: Sm
};
var As, ae, j_, Rr, Sc, Ii = {}, I_ = [], Cm = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function en(e, t) {
  for (var n in t)
    e[n] = t[n];
  return e;
}
function U_(e) {
  var t = e.parentNode;
  t && t.removeChild(e);
}
function ja(e, t, n) {
  var r, s, o, a = {};
  for (o in t)
    o == "key" ? r = t[o] : o == "ref" ? s = t[o] : a[o] = t[o];
  if (arguments.length > 2 && (a.children = arguments.length > 3 ? As.call(arguments, 2) : n), typeof e == "function" && e.defaultProps != null)
    for (o in e.defaultProps)
      a[o] === void 0 && (a[o] = e.defaultProps[o]);
  return ni(e, a, r, s, null);
}
function ni(e, t, n, r, s) {
  var o = { type: e, props: t, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: s == null ? ++j_ : s };
  return s == null && ae.vnode != null && ae.vnode(o), o;
}
function Ms(e) {
  return e.children;
}
function ri(e, t) {
  this.props = e, this.context = t;
}
function so(e, t) {
  if (t == null)
    return e.__ ? so(e.__, e.__.__k.indexOf(e) + 1) : null;
  for (var n; t < e.__k.length; t++)
    if ((n = e.__k[t]) != null && n.__e != null)
      return n.__e;
  return typeof e.type == "function" ? so(e) : null;
}
function B_(e) {
  var t, n;
  if ((e = e.__) != null && e.__c != null) {
    for (e.__e = e.__c.base = null, t = 0; t < e.__k.length; t++)
      if ((n = e.__k[t]) != null && n.__e != null) {
        e.__e = e.__c.base = n.__e;
        break;
      }
    return B_(e);
  }
}
function Ec(e) {
  (!e.__d && (e.__d = !0) && Rr.push(e) && !Ui.__r++ || Sc !== ae.debounceRendering) && ((Sc = ae.debounceRendering) || setTimeout)(Ui);
}
function Ui() {
  for (var e; Ui.__r = Rr.length; )
    e = Rr.sort(function(t, n) {
      return t.__v.__b - n.__v.__b;
    }), Rr = [], e.some(function(t) {
      var n, r, s, o, a, c;
      t.__d && (a = (o = (n = t).__v).__e, (c = n.__P) && (r = [], (s = en({}, o)).__v = o.__v + 1, Ia(c, o, s, n.__n, c.ownerSVGElement !== void 0, o.__h != null ? [a] : null, r, a == null ? so(o) : a, o.__h), Y_(r, o), o.__e != a && B_(o)));
    });
}
function F_(e, t, n, r, s, o, a, c, f, p) {
  var i, d, u, l, _, g, h, v = r && r.__k || I_, m = v.length;
  for (n.__k = [], i = 0; i < t.length; i++)
    if ((l = n.__k[i] = (l = t[i]) == null || typeof l == "boolean" ? null : typeof l == "string" || typeof l == "number" || typeof l == "bigint" ? ni(null, l, null, null, l) : Array.isArray(l) ? ni(Ms, { children: l }, null, null, null) : l.__b > 0 ? ni(l.type, l.props, l.key, l.ref ? l.ref : null, l.__v) : l) != null) {
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
      Ia(e, l, u = u || Ii, s, o, a, c, f, p), _ = l.__e, (d = l.ref) && u.ref != d && (h || (h = []), u.ref && h.push(u.ref, null, l), h.push(d, l.__c || _, l)), _ != null ? (g == null && (g = _), typeof l.type == "function" && l.__k === u.__k ? l.__d = f = z_(l, f, e) : f = V_(e, l, u, v, _, f), typeof n.type == "function" && (n.__d = f)) : f && u.__e == f && f.parentNode != e && (f = so(u));
    }
  for (n.__e = g, i = m; i--; )
    v[i] != null && G_(v[i], v[i]);
  if (h)
    for (i = 0; i < h.length; i++)
      q_(h[i], h[++i], h[++i]);
}
function z_(e, t, n) {
  for (var r, s = e.__k, o = 0; s && o < s.length; o++)
    (r = s[o]) && (r.__ = e, t = typeof r.type == "function" ? z_(r, t, n) : V_(n, r, r, s, r.__e, t));
  return t;
}
function V_(e, t, n, r, s, o) {
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
    o === "children" || o === "key" || o in t || Bi(e, o, null, n[o], r);
  for (o in t)
    s && typeof t[o] != "function" || o === "children" || o === "key" || o === "value" || o === "checked" || n[o] === t[o] || Bi(e, o, t[o], n[o], r);
}
function Cc(e, t, n) {
  t[0] === "-" ? e.setProperty(t, n) : e[t] = n == null ? "" : typeof n != "number" || Cm.test(t) ? n : n + "px";
}
function Bi(e, t, n, r, s) {
  var o;
  e:
    if (t === "style")
      if (typeof n == "string")
        e.style.cssText = n;
      else {
        if (typeof r == "string" && (e.style.cssText = r = ""), r)
          for (t in r)
            n && t in n || Cc(e.style, t, "");
        if (n)
          for (t in n)
            r && n[t] === r[t] || Cc(e.style, t, n[t]);
      }
    else if (t[0] === "o" && t[1] === "n")
      o = t !== (t = t.replace(/Capture$/, "")), t = t.toLowerCase() in e ? t.toLowerCase().slice(2) : t.slice(2), e.l || (e.l = {}), e.l[t + o] = n, n ? r || e.addEventListener(t, o ? Ac : Oc, o) : e.removeEventListener(t, o ? Ac : Oc, o);
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
function Oc(e) {
  this.l[e.type + !1](ae.event ? ae.event(e) : e);
}
function Ac(e) {
  this.l[e.type + !0](ae.event ? ae.event(e) : e);
}
function Ia(e, t, n, r, s, o, a, c, f) {
  var p, i, d, u, l, _, g, h, v, m, S, b, E, $, k, y = t.type;
  if (t.constructor !== void 0)
    return null;
  n.__h != null && (f = n.__h, c = t.__e = n.__e, t.__h = null, o = [c]), (p = ae.__b) && p(t);
  try {
    e:
      if (typeof y == "function") {
        if (h = t.props, v = (p = y.contextType) && r[p.__c], m = p ? v ? v.props.value : p.__ : r, n.__c ? g = (i = t.__c = n.__c).__ = i.__E : ("prototype" in y && y.prototype.render ? t.__c = i = new y(h, m) : (t.__c = i = new ri(h, m), i.constructor = y, i.render = Mm), v && v.sub(i), i.props = h, i.state || (i.state = {}), i.context = m, i.__n = r, d = i.__d = !0, i.__h = [], i._sb = []), i.__s == null && (i.__s = i.state), y.getDerivedStateFromProps != null && (i.__s == i.state && (i.__s = en({}, i.__s)), en(i.__s, y.getDerivedStateFromProps(h, i.__s))), u = i.props, l = i.state, d)
          y.getDerivedStateFromProps == null && i.componentWillMount != null && i.componentWillMount(), i.componentDidMount != null && i.__h.push(i.componentDidMount);
        else {
          if (y.getDerivedStateFromProps == null && h !== u && i.componentWillReceiveProps != null && i.componentWillReceiveProps(h, m), !i.__e && i.shouldComponentUpdate != null && i.shouldComponentUpdate(h, i.__s, m) === !1 || t.__v === n.__v) {
            for (i.props = h, i.state = i.__s, t.__v !== n.__v && (i.__d = !1), i.__v = t, t.__e = n.__e, t.__k = n.__k, t.__k.forEach(function(x) {
              x && (x.__ = t);
            }), S = 0; S < i._sb.length; S++)
              i.__h.push(i._sb[S]);
            i._sb = [], i.__h.length && a.push(i);
            break e;
          }
          i.componentWillUpdate != null && i.componentWillUpdate(h, i.__s, m), i.componentDidUpdate != null && i.__h.push(function() {
            i.componentDidUpdate(u, l, _);
          });
        }
        if (i.context = m, i.props = h, i.__v = t, i.__P = e, b = ae.__r, E = 0, "prototype" in y && y.prototype.render) {
          for (i.state = i.__s, i.__d = !1, b && b(t), p = i.render(i.props, i.state, i.context), $ = 0; $ < i._sb.length; $++)
            i.__h.push(i._sb[$]);
          i._sb = [];
        } else
          do
            i.__d = !1, b && b(t), p = i.render(i.props, i.state, i.context), i.state = i.__s;
          while (i.__d && ++E < 25);
        i.state = i.__s, i.getChildContext != null && (r = en(en({}, r), i.getChildContext())), d || i.getSnapshotBeforeUpdate == null || (_ = i.getSnapshotBeforeUpdate(u, l)), k = p != null && p.type === Ms && p.key == null ? p.props.children : p, F_(e, Array.isArray(k) ? k : [k], t, n, r, s, o, a, c, f), i.base = t.__e, t.__h = null, i.__h.length && a.push(i), g && (i.__E = i.__ = null), i.__e = !1;
      } else
        o == null && t.__v === n.__v ? (t.__k = n.__k, t.__e = n.__e) : t.__e = Am(n.__e, t, n, r, s, o, a, f);
    (p = ae.diffed) && p(t);
  } catch (x) {
    t.__v = null, (f || o != null) && (t.__e = c, t.__h = !!f, o[o.indexOf(c)] = null), ae.__e(x, t, n);
  }
}
function Y_(e, t) {
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
    if (o = o && As.call(e.childNodes), p = (d = n.props || Ii).dangerouslySetInnerHTML, i = u.dangerouslySetInnerHTML, !c) {
      if (o != null)
        for (d = {}, _ = 0; _ < e.attributes.length; _++)
          d[e.attributes[_].name] = e.attributes[_].value;
      (i || p) && (i && (p && i.__html == p.__html || i.__html === e.innerHTML) || (e.innerHTML = i && i.__html || ""));
    }
    if (Om(e, u, d, s, c), i)
      t.__k = [];
    else if (_ = t.props.children, F_(e, Array.isArray(_) ? _ : [_], t, n, r, s && l !== "foreignObject", o, a, o ? o[0] : n.__k && so(n, 0), c), o != null)
      for (_ = o.length; _--; )
        o[_] != null && U_(o[_]);
    c || ("value" in u && (_ = u.value) !== void 0 && (_ !== e.value || l === "progress" && !_ || l === "option" && _ !== d.value) && Bi(e, "value", _, d.value, !1), "checked" in u && (_ = u.checked) !== void 0 && _ !== e.checked && Bi(e, "checked", _, d.checked, !1));
  }
  return e;
}
function q_(e, t, n) {
  try {
    typeof e == "function" ? e(t) : e.current = t;
  } catch (r) {
    ae.__e(r, n);
  }
}
function G_(e, t, n) {
  var r, s;
  if (ae.unmount && ae.unmount(e), (r = e.ref) && (r.current && r.current !== e.__e || q_(r, null, t)), (r = e.__c) != null) {
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
      r[s] && G_(r[s], t, n || typeof e.type != "function");
  n || e.__e == null || U_(e.__e), e.__ = e.__e = e.__d = void 0;
}
function Mm(e, t, n) {
  return this.constructor(e, n);
}
function Tm(e, t, n) {
  var r, s, o;
  ae.__ && ae.__(e, t), s = (r = typeof n == "function") ? null : n && n.__k || t.__k, o = [], Ia(t, e = (!r && n || t).__k = ja(Ms, null, [e]), s || Ii, Ii, t.ownerSVGElement !== void 0, !r && n ? [n] : s ? null : t.firstChild ? As.call(t.childNodes) : null, o, !r && n ? n : s ? s.__e : t.firstChild, r), Y_(o, e);
}
As = I_.slice, ae = { __e: function(e, t, n, r) {
  for (var s, o, a; t = t.__; )
    if ((s = t.__c) && !s.__)
      try {
        if ((o = s.constructor) && o.getDerivedStateFromError != null && (s.setState(o.getDerivedStateFromError(e)), a = s.__d), s.componentDidCatch != null && (s.componentDidCatch(e, r || {}), a = s.__d), a)
          return s.__E = s;
      } catch (c) {
        e = c;
      }
  throw e;
} }, j_ = 0, ri.prototype.setState = function(e, t) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = en({}, this.state), typeof e == "function" && (e = e(en({}, n), this.props)), e && en(n, e), e != null && this.__v && (t && this._sb.push(t), Ec(this));
}, ri.prototype.forceUpdate = function(e) {
  this.__v && (this.__e = !0, e && this.__h.push(e), Ec(this));
}, ri.prototype.render = Ms, Rr = [], Ui.__r = 0;
function je(e) {
  if (e == null)
    return window;
  if (e.toString() !== "[object Window]") {
    var t = e.ownerDocument;
    return t && t.defaultView || window;
  }
  return e;
}
function kn(e) {
  var t = je(e).Element;
  return e instanceof t || e instanceof Element;
}
function Re(e) {
  var t = je(e).HTMLElement;
  return e instanceof t || e instanceof HTMLElement;
}
function Ua(e) {
  if (typeof ShadowRoot > "u")
    return !1;
  var t = je(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot;
}
var bn = Math.max, Fi = Math.min, er = Math.round;
function Xs() {
  var e = navigator.userAgentData;
  return e != null && e.brands ? e.brands.map(function(t) {
    return t.brand + "/" + t.version;
  }).join(" ") : navigator.userAgent;
}
function X_() {
  return !/^((?!chrome|android).)*safari/i.test(Xs());
}
function tr(e, t, n) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  var r = e.getBoundingClientRect(), s = 1, o = 1;
  t && Re(e) && (s = e.offsetWidth > 0 && er(r.width) / e.offsetWidth || 1, o = e.offsetHeight > 0 && er(r.height) / e.offsetHeight || 1);
  var a = kn(e) ? je(e) : window, c = a.visualViewport, f = !X_() && n, p = (r.left + (f && c ? c.offsetLeft : 0)) / s, i = (r.top + (f && c ? c.offsetTop : 0)) / o, d = r.width / s, u = r.height / o;
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
function Ba(e) {
  var t = je(e), n = t.pageXOffset, r = t.pageYOffset;
  return {
    scrollLeft: n,
    scrollTop: r
  };
}
function Dm(e) {
  return {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  };
}
function Nm(e) {
  return e === je(e) || !Re(e) ? Ba(e) : Dm(e);
}
function dt(e) {
  return e ? (e.nodeName || "").toLowerCase() : null;
}
function fn(e) {
  return ((kn(e) ? e.ownerDocument : e.document) || window.document).documentElement;
}
function Fa(e) {
  return tr(fn(e)).left + Ba(e).scrollLeft;
}
function Ct(e) {
  return je(e).getComputedStyle(e);
}
function za(e) {
  var t = Ct(e), n = t.overflow, r = t.overflowX, s = t.overflowY;
  return /auto|scroll|overlay|hidden/.test(n + s + r);
}
function Lm(e) {
  var t = e.getBoundingClientRect(), n = er(t.width) / e.offsetWidth || 1, r = er(t.height) / e.offsetHeight || 1;
  return n !== 1 || r !== 1;
}
function Pm(e, t, n) {
  n === void 0 && (n = !1);
  var r = Re(t), s = Re(t) && Lm(t), o = fn(t), a = tr(e, s, n), c = {
    scrollLeft: 0,
    scrollTop: 0
  }, f = {
    x: 0,
    y: 0
  };
  return (r || !r && !n) && ((dt(t) !== "body" || za(o)) && (c = Nm(t)), Re(t) ? (f = tr(t, !0), f.x += t.clientLeft, f.y += t.clientTop) : o && (f.x = Fa(o))), {
    x: a.left + c.scrollLeft - f.x,
    y: a.top + c.scrollTop - f.y,
    width: a.width,
    height: a.height
  };
}
function K_(e) {
  var t = tr(e), n = e.offsetWidth, r = e.offsetHeight;
  return Math.abs(t.width - n) <= 1 && (n = t.width), Math.abs(t.height - r) <= 1 && (r = t.height), {
    x: e.offsetLeft,
    y: e.offsetTop,
    width: n,
    height: r
  };
}
function Ts(e) {
  return dt(e) === "html" ? e : e.assignedSlot || e.parentNode || (Ua(e) ? e.host : null) || fn(e);
}
function J_(e) {
  return ["html", "body", "#document"].indexOf(dt(e)) >= 0 ? e.ownerDocument.body : Re(e) && za(e) ? e : J_(Ts(e));
}
function Hr(e, t) {
  var n;
  t === void 0 && (t = []);
  var r = J_(e), s = r === ((n = e.ownerDocument) == null ? void 0 : n.body), o = je(r), a = s ? [o].concat(o.visualViewport || [], za(r) ? r : []) : r, c = t.concat(a);
  return s ? c : c.concat(Hr(Ts(a)));
}
function Rm(e) {
  return ["table", "td", "th"].indexOf(dt(e)) >= 0;
}
function Mc(e) {
  return !Re(e) || Ct(e).position === "fixed" ? null : e.offsetParent;
}
function Hm(e) {
  var t = /firefox/i.test(Xs()), n = /Trident/i.test(Xs());
  if (n && Re(e)) {
    var r = Ct(e);
    if (r.position === "fixed")
      return null;
  }
  var s = Ts(e);
  for (Ua(s) && (s = s.host); Re(s) && ["html", "body"].indexOf(dt(s)) < 0; ) {
    var o = Ct(s);
    if (o.transform !== "none" || o.perspective !== "none" || o.contain === "paint" || ["transform", "perspective"].indexOf(o.willChange) !== -1 || t && o.willChange === "filter" || t && o.filter && o.filter !== "none")
      return s;
    s = s.parentNode;
  }
  return null;
}
function Ds(e) {
  for (var t = je(e), n = Mc(e); n && Rm(n) && Ct(n).position === "static"; )
    n = Mc(n);
  return n && (dt(n) === "html" || dt(n) === "body" && Ct(n).position === "static") ? t : n || Hm(e) || t;
}
var Ge = "top", ht = "bottom", ln = "right", St = "left", Va = "auto", Ns = [Ge, ht, ln, St], nr = "start", ao = "end", Wm = "clippingParents", Z_ = "viewport", ur = "popper", jm = "reference", Tc = /* @__PURE__ */ Ns.reduce(function(e, t) {
  return e.concat([t + "-" + nr, t + "-" + ao]);
}, []), Im = /* @__PURE__ */ [].concat(Ns, [Va]).reduce(function(e, t) {
  return e.concat([t, t + "-" + nr, t + "-" + ao]);
}, []), Um = "beforeRead", Bm = "read", Fm = "afterRead", zm = "beforeMain", Vm = "main", Ym = "afterMain", qm = "beforeWrite", Gm = "write", Xm = "afterWrite", Km = [Um, Bm, Fm, zm, Vm, Ym, qm, Gm, Xm];
function Jm(e) {
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
function Zm(e) {
  var t = Jm(e);
  return Km.reduce(function(n, r) {
    return n.concat(t.filter(function(s) {
      return s.phase === r;
    }));
  }, []);
}
function Qm(e) {
  var t;
  return function() {
    return t || (t = new Promise(function(n) {
      Promise.resolve().then(function() {
        t = void 0, n(e());
      });
    })), t;
  };
}
function on(e) {
  return e.split("-")[0];
}
function eg(e) {
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
function tg(e, t) {
  var n = je(e), r = fn(e), s = n.visualViewport, o = r.clientWidth, a = r.clientHeight, c = 0, f = 0;
  if (s) {
    o = s.width, a = s.height;
    var p = X_();
    (p || !p && t === "fixed") && (c = s.offsetLeft, f = s.offsetTop);
  }
  return {
    width: o,
    height: a,
    x: c + Fa(e),
    y: f
  };
}
function ng(e) {
  var t, n = fn(e), r = Ba(e), s = (t = e.ownerDocument) == null ? void 0 : t.body, o = bn(n.scrollWidth, n.clientWidth, s ? s.scrollWidth : 0, s ? s.clientWidth : 0), a = bn(n.scrollHeight, n.clientHeight, s ? s.scrollHeight : 0, s ? s.clientHeight : 0), c = -r.scrollLeft + Fa(e), f = -r.scrollTop;
  return Ct(s || n).direction === "rtl" && (c += bn(n.clientWidth, s ? s.clientWidth : 0) - o), {
    width: o,
    height: a,
    x: c,
    y: f
  };
}
function rg(e, t) {
  var n = t.getRootNode && t.getRootNode();
  if (e.contains(t))
    return !0;
  if (n && Ua(n)) {
    var r = t;
    do {
      if (r && e.isSameNode(r))
        return !0;
      r = r.parentNode || r.host;
    } while (r);
  }
  return !1;
}
function Ks(e) {
  return Object.assign({}, e, {
    left: e.x,
    top: e.y,
    right: e.x + e.width,
    bottom: e.y + e.height
  });
}
function og(e, t) {
  var n = tr(e, !1, t === "fixed");
  return n.top = n.top + e.clientTop, n.left = n.left + e.clientLeft, n.bottom = n.top + e.clientHeight, n.right = n.left + e.clientWidth, n.width = e.clientWidth, n.height = e.clientHeight, n.x = n.left, n.y = n.top, n;
}
function Dc(e, t, n) {
  return t === Z_ ? Ks(tg(e, n)) : kn(t) ? og(t, n) : Ks(ng(fn(e)));
}
function ig(e) {
  var t = Hr(Ts(e)), n = ["absolute", "fixed"].indexOf(Ct(e).position) >= 0, r = n && Re(e) ? Ds(e) : e;
  return kn(r) ? t.filter(function(s) {
    return kn(s) && rg(s, r) && dt(s) !== "body";
  }) : [];
}
function sg(e, t, n, r) {
  var s = t === "clippingParents" ? ig(e) : [].concat(t), o = [].concat(s, [n]), a = o[0], c = o.reduce(function(f, p) {
    var i = Dc(e, p, r);
    return f.top = bn(i.top, f.top), f.right = Fi(i.right, f.right), f.bottom = Fi(i.bottom, f.bottom), f.left = bn(i.left, f.left), f;
  }, Dc(e, a, r));
  return c.width = c.right - c.left, c.height = c.bottom - c.top, c.x = c.left, c.y = c.top, c;
}
function rr(e) {
  return e.split("-")[1];
}
function Q_(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function ep(e) {
  var t = e.reference, n = e.element, r = e.placement, s = r ? on(r) : null, o = r ? rr(r) : null, a = t.x + t.width / 2 - n.width / 2, c = t.y + t.height / 2 - n.height / 2, f;
  switch (s) {
    case Ge:
      f = {
        x: a,
        y: t.y - n.height
      };
      break;
    case ht:
      f = {
        x: a,
        y: t.y + t.height
      };
      break;
    case ln:
      f = {
        x: t.x + t.width,
        y: c
      };
      break;
    case St:
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
  var p = s ? Q_(s) : null;
  if (p != null) {
    var i = p === "y" ? "height" : "width";
    switch (o) {
      case nr:
        f[p] = f[p] - (t[i] / 2 - n[i] / 2);
        break;
      case ao:
        f[p] = f[p] + (t[i] / 2 - n[i] / 2);
        break;
    }
  }
  return f;
}
function tp() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
function ag(e) {
  return Object.assign({}, tp(), e);
}
function lg(e, t) {
  return t.reduce(function(n, r) {
    return n[r] = e, n;
  }, {});
}
function Ya(e, t) {
  t === void 0 && (t = {});
  var n = t, r = n.placement, s = r === void 0 ? e.placement : r, o = n.strategy, a = o === void 0 ? e.strategy : o, c = n.boundary, f = c === void 0 ? Wm : c, p = n.rootBoundary, i = p === void 0 ? Z_ : p, d = n.elementContext, u = d === void 0 ? ur : d, l = n.altBoundary, _ = l === void 0 ? !1 : l, g = n.padding, h = g === void 0 ? 0 : g, v = ag(typeof h != "number" ? h : lg(h, Ns)), m = u === ur ? jm : ur, S = e.rects.popper, b = e.elements[_ ? m : u], E = sg(kn(b) ? b : b.contextElement || fn(e.elements.popper), f, i, a), $ = tr(e.elements.reference), k = ep({
    reference: $,
    element: S,
    strategy: "absolute",
    placement: s
  }), y = Ks(Object.assign({}, S, k)), x = u === ur ? y : $, C = {
    top: E.top - x.top + v.top,
    bottom: x.bottom - E.bottom + v.bottom,
    left: E.left - x.left + v.left,
    right: x.right - E.right + v.right
  }, R = e.modifiersData.offset;
  if (u === ur && R) {
    var I = R[s];
    Object.keys(C).forEach(function(T) {
      var M = [ln, ht].indexOf(T) >= 0 ? 1 : -1, O = [Ge, ht].indexOf(T) >= 0 ? "y" : "x";
      C[T] += I[O] * M;
    });
  }
  return C;
}
var Nc = {
  placement: "bottom",
  modifiers: [],
  strategy: "absolute"
};
function Lc() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return !t.some(function(r) {
    return !(r && typeof r.getBoundingClientRect == "function");
  });
}
function cg(e) {
  e === void 0 && (e = {});
  var t = e, n = t.defaultModifiers, r = n === void 0 ? [] : n, s = t.defaultOptions, o = s === void 0 ? Nc : s;
  return function(c, f, p) {
    p === void 0 && (p = o);
    var i = {
      placement: "bottom",
      orderedModifiers: [],
      options: Object.assign({}, Nc, o),
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
          reference: kn(c) ? Hr(c) : c.contextElement ? Hr(c.contextElement) : [],
          popper: Hr(f)
        };
        var S = Zm(eg([].concat(r, i.options.modifiers)));
        return i.orderedModifiers = S.filter(function(b) {
          return b.enabled;
        }), _(), l.update();
      },
      forceUpdate: function() {
        if (!u) {
          var v = i.elements, m = v.reference, S = v.popper;
          if (!!Lc(m, S)) {
            i.rects = {
              reference: Pm(m, Ds(S), i.options.strategy === "fixed"),
              popper: K_(S)
            }, i.reset = !1, i.placement = i.options.placement, i.orderedModifiers.forEach(function(C) {
              return i.modifiersData[C.name] = Object.assign({}, C.data);
            });
            for (var b = 0; b < i.orderedModifiers.length; b++) {
              if (i.reset === !0) {
                i.reset = !1, b = -1;
                continue;
              }
              var E = i.orderedModifiers[b], $ = E.fn, k = E.options, y = k === void 0 ? {} : k, x = E.name;
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
      update: Qm(function() {
        return new Promise(function(h) {
          l.forceUpdate(), h(i);
        });
      }),
      destroy: function() {
        g(), u = !0;
      }
    };
    if (!Lc(c, f))
      return l;
    l.setOptions(p).then(function(h) {
      !u && p.onFirstUpdate && p.onFirstUpdate(h);
    });
    function _() {
      i.orderedModifiers.forEach(function(h) {
        var v = h.name, m = h.options, S = m === void 0 ? {} : m, b = h.effect;
        if (typeof b == "function") {
          var E = b({
            state: i,
            name: v,
            instance: l,
            options: S
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
var jo = {
  passive: !0
};
function fg(e) {
  var t = e.state, n = e.instance, r = e.options, s = r.scroll, o = s === void 0 ? !0 : s, a = r.resize, c = a === void 0 ? !0 : a, f = je(t.elements.popper), p = [].concat(t.scrollParents.reference, t.scrollParents.popper);
  return o && p.forEach(function(i) {
    i.addEventListener("scroll", n.update, jo);
  }), c && f.addEventListener("resize", n.update, jo), function() {
    o && p.forEach(function(i) {
      i.removeEventListener("scroll", n.update, jo);
    }), c && f.removeEventListener("resize", n.update, jo);
  };
}
const ug = {
  name: "eventListeners",
  enabled: !0,
  phase: "write",
  fn: function() {
  },
  effect: fg,
  data: {}
};
function _g(e) {
  var t = e.state, n = e.name;
  t.modifiersData[n] = ep({
    reference: t.rects.reference,
    element: t.rects.popper,
    strategy: "absolute",
    placement: t.placement
  });
}
const pg = {
  name: "popperOffsets",
  enabled: !0,
  phase: "read",
  fn: _g,
  data: {}
};
var dg = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function hg(e) {
  var t = e.x, n = e.y, r = window, s = r.devicePixelRatio || 1;
  return {
    x: er(t * s) / s || 0,
    y: er(n * s) / s || 0
  };
}
function Pc(e) {
  var t, n = e.popper, r = e.popperRect, s = e.placement, o = e.variation, a = e.offsets, c = e.position, f = e.gpuAcceleration, p = e.adaptive, i = e.roundOffsets, d = e.isFixed, u = a.x, l = u === void 0 ? 0 : u, _ = a.y, g = _ === void 0 ? 0 : _, h = typeof i == "function" ? i({
    x: l,
    y: g
  }) : {
    x: l,
    y: g
  };
  l = h.x, g = h.y;
  var v = a.hasOwnProperty("x"), m = a.hasOwnProperty("y"), S = St, b = Ge, E = window;
  if (p) {
    var $ = Ds(n), k = "clientHeight", y = "clientWidth";
    if ($ === je(n) && ($ = fn(n), Ct($).position !== "static" && c === "absolute" && (k = "scrollHeight", y = "scrollWidth")), $ = $, s === Ge || (s === St || s === ln) && o === ao) {
      b = ht;
      var x = d && $ === E && E.visualViewport ? E.visualViewport.height : $[k];
      g -= x - r.height, g *= f ? 1 : -1;
    }
    if (s === St || (s === Ge || s === ht) && o === ao) {
      S = ln;
      var C = d && $ === E && E.visualViewport ? E.visualViewport.width : $[y];
      l -= C - r.width, l *= f ? 1 : -1;
    }
  }
  var R = Object.assign({
    position: c
  }, p && dg), I = i === !0 ? hg({
    x: l,
    y: g
  }) : {
    x: l,
    y: g
  };
  if (l = I.x, g = I.y, f) {
    var T;
    return Object.assign({}, R, (T = {}, T[b] = m ? "0" : "", T[S] = v ? "0" : "", T.transform = (E.devicePixelRatio || 1) <= 1 ? "translate(" + l + "px, " + g + "px)" : "translate3d(" + l + "px, " + g + "px, 0)", T));
  }
  return Object.assign({}, R, (t = {}, t[b] = m ? g + "px" : "", t[S] = v ? l + "px" : "", t.transform = "", t));
}
function vg(e) {
  var t = e.state, n = e.options, r = n.gpuAcceleration, s = r === void 0 ? !0 : r, o = n.adaptive, a = o === void 0 ? !0 : o, c = n.roundOffsets, f = c === void 0 ? !0 : c, p = {
    placement: on(t.placement),
    variation: rr(t.placement),
    popper: t.elements.popper,
    popperRect: t.rects.popper,
    gpuAcceleration: s,
    isFixed: t.options.strategy === "fixed"
  };
  t.modifiersData.popperOffsets != null && (t.styles.popper = Object.assign({}, t.styles.popper, Pc(Object.assign({}, p, {
    offsets: t.modifiersData.popperOffsets,
    position: t.options.strategy,
    adaptive: a,
    roundOffsets: f
  })))), t.modifiersData.arrow != null && (t.styles.arrow = Object.assign({}, t.styles.arrow, Pc(Object.assign({}, p, {
    offsets: t.modifiersData.arrow,
    position: "absolute",
    adaptive: !1,
    roundOffsets: f
  })))), t.attributes.popper = Object.assign({}, t.attributes.popper, {
    "data-popper-placement": t.placement
  });
}
const mg = {
  name: "computeStyles",
  enabled: !0,
  phase: "beforeWrite",
  fn: vg,
  data: {}
};
function gg(e) {
  var t = e.state;
  Object.keys(t.elements).forEach(function(n) {
    var r = t.styles[n] || {}, s = t.attributes[n] || {}, o = t.elements[n];
    !Re(o) || !dt(o) || (Object.assign(o.style, r), Object.keys(s).forEach(function(a) {
      var c = s[a];
      c === !1 ? o.removeAttribute(a) : o.setAttribute(a, c === !0 ? "" : c);
    }));
  });
}
function yg(e) {
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
      !Re(s) || !dt(s) || (Object.assign(s.style, c), Object.keys(o).forEach(function(f) {
        s.removeAttribute(f);
      }));
    });
  };
}
const bg = {
  name: "applyStyles",
  enabled: !0,
  phase: "write",
  fn: gg,
  effect: yg,
  requires: ["computeStyles"]
};
var wg = [ug, pg, mg, bg], np = /* @__PURE__ */ cg({
  defaultModifiers: wg
});
function $g(e) {
  return e === "x" ? "y" : "x";
}
function oi(e, t, n) {
  return bn(e, Fi(t, n));
}
function kg(e, t, n) {
  var r = oi(e, t, n);
  return r > n ? n : r;
}
function xg(e) {
  var t = e.state, n = e.options, r = e.name, s = n.mainAxis, o = s === void 0 ? !0 : s, a = n.altAxis, c = a === void 0 ? !1 : a, f = n.boundary, p = n.rootBoundary, i = n.altBoundary, d = n.padding, u = n.tether, l = u === void 0 ? !0 : u, _ = n.tetherOffset, g = _ === void 0 ? 0 : _, h = Ya(t, {
    boundary: f,
    rootBoundary: p,
    padding: d,
    altBoundary: i
  }), v = on(t.placement), m = rr(t.placement), S = !m, b = Q_(v), E = $g(b), $ = t.modifiersData.popperOffsets, k = t.rects.reference, y = t.rects.popper, x = typeof g == "function" ? g(Object.assign({}, t.rects, {
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
      var T, M = b === "y" ? Ge : St, O = b === "y" ? ht : ln, D = b === "y" ? "height" : "width", A = $[b], j = A + h[M], W = A - h[O], F = l ? -y[D] / 2 : 0, G = m === nr ? k[D] : y[D], z = m === nr ? -y[D] : -k[D], K = t.elements.arrow, Q = l && K ? K_(K) : {
        width: 0,
        height: 0
      }, P = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : tp(), V = P[M], X = P[O], q = oi(0, k[D], Q[D]), J = S ? k[D] / 2 - F - q - V - C.mainAxis : G - q - V - C.mainAxis, ce = S ? -k[D] / 2 + F + q + X + C.mainAxis : z + q + X + C.mainAxis, le = t.elements.arrow && Ds(t.elements.arrow), $e = le ? b === "y" ? le.clientTop || 0 : le.clientLeft || 0 : 0, et = (T = R == null ? void 0 : R[b]) != null ? T : 0, ee = A + J - et - $e, At = A + ce - et, Ue = oi(l ? Fi(j, ee) : j, A, l ? bn(W, At) : W);
      $[b] = Ue, I[b] = Ue - A;
    }
    if (c) {
      var Be, Mt = b === "x" ? Ge : St, tt = b === "x" ? ht : ln, ne = $[E], ye = E === "y" ? "height" : "width", Fe = ne + h[Mt], Tt = ne - h[tt], ze = [Ge, St].indexOf(v) !== -1, Dt = (Be = R == null ? void 0 : R[E]) != null ? Be : 0, Nt = ze ? Fe : ne - k[ye] - y[ye] - Dt + C.altAxis, Lt = ze ? ne + k[ye] + y[ye] - Dt - C.altAxis : Tt, Pt = l && ze ? kg(Nt, ne, Lt) : oi(l ? Nt : Fe, ne, l ? Lt : Tt);
      $[E] = Pt, I[E] = Pt - ne;
    }
    t.modifiersData[r] = I;
  }
}
const Js = {
  name: "preventOverflow",
  enabled: !0,
  phase: "main",
  fn: xg,
  requiresIfExists: ["offset"]
};
var Sg = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function ii(e) {
  return e.replace(/left|right|bottom|top/g, function(t) {
    return Sg[t];
  });
}
var Eg = {
  start: "end",
  end: "start"
};
function Rc(e) {
  return e.replace(/start|end/g, function(t) {
    return Eg[t];
  });
}
function Cg(e, t) {
  t === void 0 && (t = {});
  var n = t, r = n.placement, s = n.boundary, o = n.rootBoundary, a = n.padding, c = n.flipVariations, f = n.allowedAutoPlacements, p = f === void 0 ? Im : f, i = rr(r), d = i ? c ? Tc : Tc.filter(function(_) {
    return rr(_) === i;
  }) : Ns, u = d.filter(function(_) {
    return p.indexOf(_) >= 0;
  });
  u.length === 0 && (u = d);
  var l = u.reduce(function(_, g) {
    return _[g] = Ya(e, {
      placement: g,
      boundary: s,
      rootBoundary: o,
      padding: a
    })[on(g)], _;
  }, {});
  return Object.keys(l).sort(function(_, g) {
    return l[_] - l[g];
  });
}
function Og(e) {
  if (on(e) === Va)
    return [];
  var t = ii(e);
  return [Rc(e), t, Rc(t)];
}
function Ag(e) {
  var t = e.state, n = e.options, r = e.name;
  if (!t.modifiersData[r]._skip) {
    for (var s = n.mainAxis, o = s === void 0 ? !0 : s, a = n.altAxis, c = a === void 0 ? !0 : a, f = n.fallbackPlacements, p = n.padding, i = n.boundary, d = n.rootBoundary, u = n.altBoundary, l = n.flipVariations, _ = l === void 0 ? !0 : l, g = n.allowedAutoPlacements, h = t.options.placement, v = on(h), m = v === h, S = f || (m || !_ ? [ii(h)] : Og(h)), b = [h].concat(S).reduce(function(Q, P) {
      return Q.concat(on(P) === Va ? Cg(t, {
        placement: P,
        boundary: i,
        rootBoundary: d,
        padding: p,
        flipVariations: _,
        allowedAutoPlacements: g
      }) : P);
    }, []), E = t.rects.reference, $ = t.rects.popper, k = /* @__PURE__ */ new Map(), y = !0, x = b[0], C = 0; C < b.length; C++) {
      var R = b[C], I = on(R), T = rr(R) === nr, M = [Ge, ht].indexOf(I) >= 0, O = M ? "width" : "height", D = Ya(t, {
        placement: R,
        boundary: i,
        rootBoundary: d,
        altBoundary: u,
        padding: p
      }), A = M ? T ? ln : St : T ? ht : Ge;
      E[O] > $[O] && (A = ii(A));
      var j = ii(A), W = [];
      if (o && W.push(D[I] <= 0), c && W.push(D[A] <= 0, D[j] <= 0), W.every(function(Q) {
        return Q;
      })) {
        x = R, y = !1;
        break;
      }
      k.set(R, W);
    }
    if (y)
      for (var F = _ ? 3 : 1, G = function(P) {
        var V = b.find(function(X) {
          var q = k.get(X);
          if (q)
            return q.slice(0, P).every(function(J) {
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
const rp = {
  name: "flip",
  enabled: !0,
  phase: "main",
  fn: Ag,
  requiresIfExists: ["offset"],
  data: {
    _skip: !1
  }
};
function Mg(e) {
  return e.button === 2;
}
var jt;
class Tg extends ha {
  constructor() {
    super(...arguments);
    L(this, jt, void 0);
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
    super.componentWillUnmount(), (n = w(this, jt)) == null || n.destroy();
  }
  _getPopperOptions() {
    return {
      modifiers: [Js, rp],
      placement: "right-start"
    };
  }
  _getPopperElement() {
    var n;
    return (n = this.ref.current) == null ? void 0 : n.parentElement;
  }
  _createPopper() {
    const n = this._getPopperOptions();
    return w(this, jt) ? w(this, jt).setOptions(n) : this.ref.current && H(this, jt, np(this._getPopperElement(), this.ref.current, n)), w(this, jt);
  }
  afterRender(n) {
    super.afterRender(n), this.props.controlledMenu && this._createPopper();
  }
  renderToggleIcon() {
    return /* @__PURE__ */ ja("span", {
      class: "contextmenu-toggle-icon caret-right"
    });
  }
}
jt = new WeakMap();
var It, Le, Pn, go;
class Ce extends ft {
  constructor() {
    super(...arguments);
    L(this, It, void 0);
    L(this, Le, void 0);
    L(this, Pn, void 0);
    L(this, go, void 0);
  }
  get isShown() {
    var n;
    return (n = w(this, It)) == null ? void 0 : n.classList.contains(this.constructor.CLASS_SHOW);
  }
  get menu() {
    return w(this, It) || this._ensureMenu();
  }
  get popper() {
    return w(this, Le) ? w(this, Le) : this._createPopper();
  }
  get trigger() {
    return w(this, go) || this.element;
  }
  get isDynamic() {
    return this.options.items || this.options.menu;
  }
  init() {
    const { element: n } = this;
    n !== document.body && !n.hasAttribute("data-toggle") && n.setAttribute("data-toggle", "contextmenu");
  }
  show(n) {
    return H(this, go, n), this.emit("show", { menu: this, trigger: this.trigger }).defaultPrevented || this.isDynamic && !this._renderMenu() ? !1 : (this.menu.classList.add(this.constructor.CLASS_SHOW), this._createPopper().update(), this.emit("shown", this), !0);
  }
  hide() {
    var r, s;
    return this.emit("hide", this).defaultPrevented ? !1 : ((r = w(this, Le)) == null || r.destroy(), H(this, Le, void 0), (s = w(this, It)) == null || s.classList.remove(this.constructor.CLASS_SHOW), this.emit("hidden", this), !0);
  }
  toggle(n) {
    return this.isShown ? this.hide() : this.show(n);
  }
  destroy() {
    var n, r;
    (n = w(this, Le)) == null || n.destroy(), super.destroy(), (r = w(this, It)) == null || r.remove();
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
    return H(this, It, s), s;
  }
  _getPopperOptions() {
    const { flip: n, preventOverflow: r, modifiers: s = [] } = this.options;
    return {
      modifiers: [
        r ? typeof r == "object" ? { ...Js, options: r } : Js : null,
        n ? rp : null,
        ...s
      ].filter(Boolean),
      placement: this.options.placement,
      strategy: this.options.strategy
    };
  }
  _createPopper() {
    const n = this._getPopperOptions();
    return w(this, Le) ? w(this, Le).setOptions(n) : H(this, Le, np(this._getPopperElement(), this.menu, n)), w(this, Le);
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
    return !n || this.emit("updateMenu", { menu: n, trigger: this.trigger, contextmenu: this }).defaultPrevented ? !1 : (Tm(ja(Tg, n), this.menu), !0);
  }
  _getPopperElement() {
    return w(this, Pn) || H(this, Pn, {
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
    }), w(this, Pn);
  }
  static clear(n) {
    var f, p;
    n instanceof Event && (n = { event: n });
    const { event: r, exclude: s, ignoreSelector: o = ".not-hide-menu" } = n || {};
    if (r && o && ((p = (f = r.target).closest) == null ? void 0 : p.call(f, o)) || r && Mg(r))
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
It = new WeakMap(), Le = new WeakMap(), Pn = new WeakMap(), go = new WeakMap(), N(Ce, "NAME", "contextmenu"), N(Ce, "EVENTS", !0), N(Ce, "DEFAULT", {
  placement: "bottom-start",
  strategy: "fixed",
  flip: !0,
  preventOverflow: !0
}), N(Ce, "MENU_CLASS", "contextmenu"), N(Ce, "CLASS_SHOW", "show"), N(Ce, "MENU_SELECTOR", '[data-toggle="contextmenu"]:not(.disabled):not(:disabled)');
document.addEventListener("contextmenu", (e) => {
  const t = e.target;
  if (t.closest(`.${Ce.MENU_CLASS}`))
    return;
  const n = t.closest(Ce.MENU_SELECTOR);
  n && (Ce.ensure(n).show(e), e.preventDefault());
});
document.addEventListener("click", Ce.clear.bind(Ce));
var Rn, Hn, Wn, es, op;
const sl = class extends Ce {
  constructor() {
    super(...arguments);
    L(this, es);
    L(this, Rn, !1);
    L(this, Hn, 0);
    N(this, "hideLater", () => {
      w(this, Wn).call(this), H(this, Hn, window.setTimeout(this.hide.bind(this), 100));
    });
    L(this, Wn, () => {
      clearTimeout(w(this, Hn)), H(this, Hn, 0);
    });
  }
  get isHover() {
    return this.options.trigger === "hover";
  }
  get elementShowClass() {
    return `with-${this.constructor.NAME}-show`;
  }
  show(n, r) {
    (r == null ? void 0 : r.clearOthers) !== !1 && sl.clear({ event: r == null ? void 0 : r.event, exclude: [this.element] });
    const s = super.show(n);
    return s && (!w(this, Rn) && this.isHover && te(this, es, op).call(this), this.element.classList.add(this.elementShowClass)), s;
  }
  hide() {
    const n = super.hide();
    return n && this.element.classList.remove(this.elementShowClass), n;
  }
  toggle(n, r) {
    return this.isShown ? this.hide() : this.show(n, { event: n, ...r });
  }
  destroy() {
    w(this, Rn) && (this.element.removeEventListener("mouseleave", this.hideLater), this.menu.removeEventListener("mouseenter", w(this, Wn)), this.menu.removeEventListener("mouseleave", this.hideLater)), super.destroy();
  }
  _getArrowSize() {
    const { arrow: n } = this.options;
    return n ? typeof n == "number" ? n : 5 : 0;
  }
  _getPopperOptions() {
    var s;
    const n = super._getPopperOptions(), r = this._getArrowSize();
    return r && n.modifiers.push({ ...km, options: {
      padding: r,
      element: ".arrow"
    } }, {
      ...Em,
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
let ke = sl;
Rn = new WeakMap(), Hn = new WeakMap(), Wn = new WeakMap(), es = new WeakSet(), op = function() {
  const { menu: n } = this;
  n.addEventListener("mouseenter", w(this, Wn)), n.addEventListener("mouseleave", this.hideLater), this.element.addEventListener("mouseleave", this.hideLater), H(this, Rn, !0);
}, N(ke, "NAME", "dropdown"), N(ke, "MENU_CLASS", "dropdown-menu"), N(ke, "MENU_SELECTOR", '[data-toggle="dropdown"]:not(.disabled):not(:disabled)'), N(ke, "DEFAULT", {
  ...Ce.DEFAULT,
  strategy: "absolute",
  trigger: "click"
});
document.addEventListener("click", function(e) {
  const n = e.target.closest(ke.MENU_SELECTOR);
  if (n) {
    const r = ke.ensure(n);
    r.options.trigger === "click" && r.toggle();
  } else
    ke.clear({ event: e });
});
document.addEventListener("mouseover", function(e) {
  const t = e.target, n = typeof t.closest == "function" ? t.closest(ke.MENU_SELECTOR) : null;
  if (!n)
    return;
  const r = ke.ensure(n);
  r.isHover && r.show();
});
const Dg = (e) => {
  const t = document.getElementsByClassName("with-dropdown-show")[0];
  if (!t)
    return;
  const n = typeof t.closest == "function" ? t.closest(ke.MENU_SELECTOR) : null;
  !n || !e.target.contains(n) || ke.clear({ event: e });
};
window.addEventListener("scroll", Dg, !0);
var yo, jn;
class Ng extends Pr {
  constructor(n) {
    var r;
    super(n);
    L(this, yo, void 0);
    L(this, jn, Xv());
    this.state = { placement: ((r = n.dropdown) == null ? void 0 : r.placement) || "", show: !1 };
  }
  get ref() {
    return w(this, jn);
  }
  get triggerElement() {
    return w(this, jn).current;
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
    }), H(this, yo, ke.ensure(this.triggerElement, {
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
    (n = w(this, yo)) == null || n.destroy();
  }
  beforeRender() {
    const { className: n, children: r, dropdown: s, ...o } = this.props;
    return {
      className: B("dropdown", n),
      children: typeof r == "function" ? r(this.state) : r,
      ...o,
      "data-toggle": "dropdown",
      "data-dropdown-placement": this.state.placement,
      ref: w(this, jn)
    };
  }
  render() {
    const { children: n, ...r } = this.beforeRender();
    return /* @__PURE__ */ C_("div", {
      ...r
    }, n);
  }
}
yo = new WeakMap(), jn = new WeakMap();
class Lg extends Ng {
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
    return r.caret = s, /* @__PURE__ */ C_(an, {
      ...r
    });
  }
}
function ip({
  key: e,
  type: t,
  btnType: n,
  ...r
}) {
  return /* @__PURE__ */ Os(Lg, {
    type: n,
    ...r
  });
}
function Pg({
  key: e,
  type: t,
  btnType: n,
  ...r
}) {
  return /* @__PURE__ */ Os(ya, {
    type: n,
    ...r
  });
}
class xt extends kt {
  beforeRender() {
    const { gap: t, btnProps: n, wrap: r, ...s } = super.beforeRender();
    return s.className = B(s.className, r ? "flex-wrap" : "", typeof t == "number" ? `gap-${t}` : ""), typeof t == "string" && (s.style ? s.style.gap = t : s.style = { gap: t }), s;
  }
  isBtnItem(t) {
    return t === "item" || t === "dropdown";
  }
  renderTypedItem(t, n, r) {
    const s = this.isBtnItem(r.type) ? { btnType: "ghost", ...this.props.btnProps } : {}, o = {
      ...n,
      ...s,
      ...r,
      className: B(`${this.name}-${r.type}`, n.className, s.className, r.className),
      style: Object.assign({}, n.style, s.style, r.style)
    };
    return /* @__PURE__ */ Os(t, {
      ...o
    });
  }
}
N(xt, "ItemComponents", {
  item: qv,
  dropdown: ip,
  "btn-group": Pg
}), N(xt, "ROOT_TAG", "nav"), N(xt, "NAME", "toolbar"), N(xt, "defaultProps", {
  btnProps: {
    btnType: "ghost"
  }
});
class Rg extends Cn {
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
    return t === !1 ? null : Qo(t) ? t : /* @__PURE__ */ ge("div", {
      className: "modal-header"
    }, /* @__PURE__ */ ge("div", {
      className: "modal-title"
    }, n));
  }
  renderActions() {
    const {
      actions: t,
      closeBtn: n
    } = this.props;
    return !n && !t ? null : Qo(t) ? t : /* @__PURE__ */ ge("div", {
      className: "modal-actions"
    }, t ? /* @__PURE__ */ ge(xt, {
      ...t
    }) : null, n ? /* @__PURE__ */ ge("button", {
      type: "button",
      class: "btn square ghost",
      "data-dismiss": "modal"
    }, /* @__PURE__ */ ge("span", {
      class: "close"
    })) : null);
  }
  renderBody() {
    const {
      body: t
    } = this.props;
    return t ? /* @__PURE__ */ ge("div", {
      className: "modal-body"
    }, t) : null;
  }
  renderFooter() {
    const {
      footer: t,
      footerActions: n
    } = this.props;
    return t === !1 ? null : Qo(t) ? t : /* @__PURE__ */ ge("div", {
      className: "modal-footer"
    }, n ? /* @__PURE__ */ ge(xt, {
      ...n
    }) : null);
  }
  render() {
    const {
      className: t,
      style: n,
      children: r
    } = this.props;
    return /* @__PURE__ */ ge("div", {
      className: B("modal-dialog", t),
      style: n
    }, /* @__PURE__ */ ge("div", {
      className: "modal-content"
    }, this.renderHeader(), this.renderActions(), this.renderBody(), r, this.renderFooter()));
  }
}
var bo, In, wo;
class Hg extends Cn {
  constructor() {
    super(...arguments);
    L(this, bo, jv());
    L(this, In, void 0);
    N(this, "state", {});
    L(this, wo, () => {
      var s, o;
      const n = (o = (s = w(this, bo).current) == null ? void 0 : s.contentWindow) == null ? void 0 : o.document.body;
      if (!n)
        return;
      let r = w(this, In);
      r == null || r.disconnect(), r = new ResizeObserver(() => {
        this.setState({ height: n.clientHeight });
      }), r.observe(n), H(this, In, r);
    });
  }
  componentDidMount() {
    w(this, wo).call(this);
  }
  componentWillUnmount() {
    var n;
    (n = w(this, In)) == null || n.disconnect();
  }
  render() {
    const { url: n } = this.props;
    return /* @__PURE__ */ ge("iframe", {
      className: "modal-iframe",
      style: this.state,
      src: n,
      ref: w(this, bo),
      onLoad: w(this, wo)
    });
  }
}
bo = new WeakMap(), In = new WeakMap(), wo = new WeakMap();
function Wg(e, t) {
  const { custom: n } = t;
  return typeof n == "function" ? n() : n;
}
async function jg(e, t) {
  const { dataType: n = "html", url: r, request: s, custom: o } = t, c = await (await fetch(r, s)).text();
  if (n !== "html")
    try {
      const f = JSON.parse(c);
      return {
        ...o,
        ...f
      };
    } catch {
    }
  return e.innerHTML = c, !0;
}
async function Ig(e, t) {
  const { url: n, custom: r } = t;
  return {
    ...r,
    body: /* @__PURE__ */ ge(Hg, {
      url: n
    })
  };
}
const Ug = {
  custom: Wg,
  ajax: jg,
  iframe: Ig
};
var $o, ko, ot, Un, si, ts, sp, xo, Zs;
const Vr = class extends Ee {
  constructor() {
    super(...arguments);
    L(this, Un);
    L(this, ts);
    L(this, xo);
    L(this, $o, void 0);
    L(this, ko, void 0);
    L(this, ot, void 0);
  }
  get id() {
    return w(this, ko);
  }
  get loading() {
    return this.modalElement.classList.contains(Vr.LOADING_CLASS);
  }
  get modalElement() {
    let n = w(this, $o);
    if (!n) {
      const { id: r } = this;
      n = this.element.querySelector(`#${r}`), n || (n = document.createElement("div"), Di(n, {
        id: r,
        style: this.options.style
      }), f_(n, ["modal modal-async", this.options.className])), H(this, $o, n);
    }
    return n;
  }
  setOptions(n) {
    const r = super.setOptions(n);
    return r.type || r.target && (r.type = "static"), r;
  }
  init() {
    H(this, ko, this.options.id || `modal-${zv()}`), this.on("show", this.buildDialog.bind(this));
  }
  render(n) {
    super.render(n), this.buildDialog();
  }
  async buildDialog() {
    if (this.loading)
      return !1;
    console.log("> ModalBuilder.buildDialog", this), w(this, ot) && clearTimeout(w(this, ot));
    const { modalElement: n, options: r } = this, { type: s, loadTimeout: o } = r, a = Ug[s];
    if (!a)
      return console.warn(`Modal: Cannot build modal with type "${s}"`), !1;
    n.classList.add(Vr.LOADING_CLASS), await te(this, ts, sp).call(this), o && H(this, ot, window.setTimeout(() => {
      H(this, ot, 0), te(this, xo, Zs).call(this, this.options.timeoutTip);
    }, o));
    const c = await a(n, r);
    return c === !1 ? await te(this, xo, Zs).call(this, this.options.failedTip) : c && typeof c == "object" && await te(this, Un, si).call(this, c), w(this, ot) && (clearTimeout(w(this, ot)), H(this, ot, 0)), n.classList.remove(Vr.LOADING_CLASS), !0;
  }
};
let vr = Vr;
$o = new WeakMap(), ko = new WeakMap(), ot = new WeakMap(), Un = new WeakSet(), si = function(n) {
  return new Promise((r) => {
    const { afterRender: s, ...o } = n;
    n = {
      afterRender: (a) => {
        this.layout(), s == null || s(a), r();
      },
      ...o
    }, Fv(
      /* @__PURE__ */ ge(Rg, {
        ...n
      }),
      this.modalElement
    );
  });
}, ts = new WeakSet(), sp = function() {
  const { loadingText: n } = this.options;
  return te(this, Un, si).call(this, {
    body: /* @__PURE__ */ ge("div", {
      className: "modal-loading-indicator"
    }, /* @__PURE__ */ ge("span", {
      className: "spinner"
    }), n ? /* @__PURE__ */ ge("span", {
      className: "modal-loading-text"
    }, n) : null)
  });
}, xo = new WeakSet(), Zs = function(n) {
  if (!!n)
    return te(this, Un, si).call(this, {
      body: /* @__PURE__ */ ge("div", {
        className: "modal-load-failed"
      }, n)
    });
}, N(vr, "LOADING_CLASS", "loading"), N(vr, "DEFAULT", {
  ...Ee.DEFAULT,
  loadTimeout: 1e4
});
var Ut, ns, ap, rs, lp, os, cp;
class Wr extends ft {
  constructor() {
    super(...arguments);
    L(this, ns);
    L(this, rs);
    L(this, os);
    L(this, Ut, void 0);
  }
  get modal() {
    return w(this, Ut);
  }
  get container() {
    const { container: n } = this.options;
    return typeof n == "string" ? document.querySelector(n) : n instanceof HTMLElement ? n : document.body;
  }
  show() {
    return te(this, rs, lp).call(this).show();
  }
  hide() {
    var n;
    (n = w(this, Ut)) == null || n.hide();
  }
}
Ut = new WeakMap(), ns = new WeakSet(), ap = function() {
  var o;
  const {
    container: n,
    ...r
  } = this.options, s = r;
  return !s.type && (s.target || ((o = this.element.getAttribute("href")) == null ? void 0 : o.startsWith("#"))) && (s.type = "static"), s;
}, rs = new WeakSet(), lp = function() {
  const n = te(this, ns, ap).call(this);
  let r = w(this, Ut);
  return r ? r.setOptions(n) : n.type === "static" ? (r = new Ee(te(this, os, cp).call(this), n), H(this, Ut, r)) : (r = new vr(this.container, n), H(this, Ut, r)), r;
}, os = new WeakSet(), cp = function() {
  let n = this.options.target;
  if (!n) {
    const { element: r } = this;
    if (r.tagName === "A") {
      const s = r.getAttribute("href");
      s != null && s.startsWith("#") && (n = s);
    }
  }
  return this.container.querySelector(n || ".modal");
}, N(Wr, "NAME", "ModalTrigger"), N(Wr, "EVENTS", !0), N(Wr, "TOGGLE_SELECTOR", '[data-toggle="modal"]');
window.addEventListener("click", (e) => {
  const n = e.target.closest(Wr.TOGGLE_SELECTOR);
  if (n) {
    const r = Wr.ensure(n);
    r && r.show(), console.log("> modalTrigger", r);
  }
});
class fp extends kt {
  beforeRender() {
    const t = super.beforeRender();
    return t.className = B(t.className, t.type ? `nav-${t.type}` : "", {
      "nav-stacked": t.stacked
    }), t;
  }
}
N(fp, "NAME", "nav");
class Hc extends Qe {
}
N(Hc, "NAME", "nav"), N(Hc, "Component", fp);
var up, Qs, _p, Bg = [];
function sn(e, t, n) {
  var r, s, o, a = {};
  for (o in t)
    o == "key" ? r = t[o] : o == "ref" ? s = t[o] : a[o] = t[o];
  if (arguments.length > 2 && (a.children = arguments.length > 3 ? up.call(arguments, 2) : n), typeof e == "function" && e.defaultProps != null)
    for (o in e.defaultProps)
      a[o] === void 0 && (a[o] = e.defaultProps[o]);
  return Fg(e, a, r, s, null);
}
function Fg(e, t, n, r, s) {
  var o = { type: e, props: t, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: s == null ? ++_p : s };
  return s == null && Qs.vnode != null && Qs.vnode(o), o;
}
up = Bg.slice, Qs = { __e: function(e, t, n, r) {
  for (var s, o, a; t = t.__; )
    if ((s = t.__c) && !s.__)
      try {
        if ((o = s.constructor) && o.getDerivedStateFromError != null && (s.setState(o.getDerivedStateFromError(e)), a = s.__d), s.componentDidCatch != null && (s.componentDidCatch(e, r || {}), a = s.__d), a)
          return s.__E = s;
      } catch (c) {
        e = c;
      }
  throw e;
} }, _p = 0;
function lo(e, t) {
  const n = e.pageTotal || Math.ceil(e.recTotal / e.recPerPage);
  return typeof t == "string" && (t === "first" ? t = 1 : t === "last" ? t = n : t === "prev" ? t = e.page - 1 : t === "next" ? t = e.page + 1 : t === "current" ? t = e.page : t = Number.parseInt(t, 10)), t = t !== void 0 ? Math.max(1, Math.min(t < 0 ? n + t : t, n)) : e.page, {
    ...e,
    pageTotal: n,
    page: t
  };
}
function zg({
  key: e,
  type: t,
  btnType: n,
  page: r,
  format: s,
  pagerInfo: o,
  linkCreator: a,
  ...c
}) {
  const f = lo(o, r);
  return c.text === void 0 && !c.icon && s && (c.text = typeof s == "function" ? s(f) : Oe(s, f)), c.url === void 0 && a && (c.url = typeof a == "function" ? a(f) : Oe(a, f)), c.disabled === void 0 && (c.disabled = r !== void 0 && f.page === o.page), /* @__PURE__ */ sn(an, {
    type: n,
    ...c
  });
}
const gt = 24 * 60 * 60 * 1e3, Ne = (e) => e ? (e instanceof Date || (typeof e == "string" && (e = e.trim(), /^\d+$/.test(e) && (e = Number.parseInt(e, 10))), typeof e == "number" && e < 1e10 && (e *= 1e3), e = new Date(e)), e) : new Date(), Lo = (e, t = new Date()) => (e = Ne(e), t = Ne(t), e.getFullYear() === t.getFullYear() && e.getMonth() === t.getMonth() && e.getDate() === t.getDate()), Wc = (e, t = new Date()) => Ne(e).getFullYear() === Ne(t).getFullYear(), Vg = (e, t = new Date()) => (e = Ne(e), t = Ne(t), e.getFullYear() === t.getFullYear() && e.getMonth() === t.getMonth()), Rb = (e, t = new Date()) => {
  e = Ne(e), t = Ne(t);
  const n = 1e3 * 60 * 60 * 24, r = Math.floor(e.getTime() / n), s = Math.floor(t.getTime() / n);
  return Math.floor((r + 4) / 7) === Math.floor((s + 4) / 7);
}, Hb = (e, t) => Lo(Ne(t), e), Wb = (e, t) => Lo(Ne(t).getTime() - gt, e), jb = (e, t) => Lo(Ne(t).getTime() + gt, e), Ib = (e, t) => Lo(Ne(t).getTime() - 2 * gt, e), ea = (e, t = "yyyy-MM-dd hh:mm") => {
  e = Ne(e);
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
}, Ub = (e, t, n) => {
  const r = {
    full: "yyyy-M-d",
    month: "M-d",
    day: "d",
    str: "{0} ~ {1}",
    ...n
  }, s = ea(e, Wc(e) ? r.month : r.full);
  if (Lo(e, t))
    return s;
  const o = ea(t, Wc(e, t) ? Vg(e, t) ? r.day : r.month : r.full);
  return r.str.replace("{0}", s).replace("{1}", o);
}, Bb = (e) => {
  const t = new Date().getTime();
  switch (e) {
    case "oneWeek":
      return t - gt * 7;
    case "oneMonth":
      return t - gt * 31;
    case "threeMonth":
      return t - gt * 31 * 3;
    case "halfYear":
      return t - gt * 183;
    case "oneYear":
      return t - gt * 365;
    case "twoYear":
      return t - 2 * (gt * 365);
    default:
      return 0;
  }
}, jc = (e, t, n = !0, r = Date.now()) => {
  switch (t) {
    case "year":
      return e *= 365, jc(e, "day", n, r);
    case "quarter":
      e *= 3;
    case "month":
      return e *= 30, jc(e, "day", n, r);
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
function Yg({
  key: e,
  type: t,
  page: n,
  text: r = "",
  pagerInfo: s,
  children: o,
  ...a
}) {
  const c = lo(s, n);
  return r = typeof r == "function" ? r(c) : Oe(r, c), /* @__PURE__ */ sn(Hf, {
    ...a
  }, o, r);
}
function qg({
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
  const f = { ...c, square: !0 }, p = () => (f.text = "", f.icon = "icon-ellipsis-h", f.disabled = !0, /* @__PURE__ */ sn(an, {
    type: n,
    ...f
  })), i = (u, l) => {
    const _ = [];
    for (let g = u; g <= l; g++) {
      f.text = g, delete f.icon, f.disabled = !1;
      const h = lo(s, g);
      a && (f.url = typeof a == "function" ? a(h) : Oe(a, h)), _.push(/* @__PURE__ */ sn(an, {
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
function Gg({
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
      url: typeof n == "function" ? n(i) : Oe(n, i)
    };
  });
  const { text: a = "" } = o;
  return o.text = typeof a == "function" ? a(t) : Oe(a, t), s.menu = { ...s.menu, className: B((f = s.menu) == null ? void 0 : f.className, "pager-size-menu") }, /* @__PURE__ */ sn(ip, {
    type: "dropdown",
    dropdown: s,
    ...o
  });
}
function Xg({
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
    const h = lo(s, d);
    c && !c({ info: h, event: g }) || (g.target.href = i.url = typeof f == "function" ? f(h) : Oe(f, h));
  }, _ = lo(s, t || 0);
  return i.url = typeof f == "function" ? f(_) : Oe(f, _), i.className = B("input-group-addon", i.className), /* @__PURE__ */ sn("div", {
    className: B("input-group", "pager-goto-group", o ? `size-${o}` : "")
  }, /* @__PURE__ */ sn("input", {
    type: "number",
    class: "form-control",
    max: s.pageTotal,
    min: "1",
    onInput: u
  }), /* @__PURE__ */ sn(an, {
    type: r,
    ...i,
    onClick: l
  }));
}
class ai extends xt {
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
N(ai, "NAME", "pager"), N(ai, "defaultProps", {
  gap: 1,
  btnProps: {
    btnType: "ghost",
    size: "sm"
  }
}), N(ai, "ItemComponents", {
  ...xt.ItemComponents,
  link: zg,
  info: Yg,
  nav: qg,
  "size-menu": Gg,
  goto: Xg
});
class Ic extends Qe {
}
N(Ic, "NAME", "pager"), N(Ic, "Component", ai);
class Uc extends Qe {
}
N(Uc, "NAME", "toolbar"), N(Uc, "Component", xt);
function Ie(e) {
  if (e == null)
    return window;
  if (e.toString() !== "[object Window]") {
    var t = e.ownerDocument;
    return t && t.defaultView || window;
  }
  return e;
}
function xn(e) {
  var t = Ie(e).Element;
  return e instanceof t || e instanceof Element;
}
function He(e) {
  var t = Ie(e).HTMLElement;
  return e instanceof t || e instanceof HTMLElement;
}
function qa(e) {
  if (typeof ShadowRoot > "u")
    return !1;
  var t = Ie(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot;
}
var wn = Math.max, zi = Math.min, or = Math.round;
function ta() {
  var e = navigator.userAgentData;
  return e != null && e.brands ? e.brands.map(function(t) {
    return t.brand + "/" + t.version;
  }).join(" ") : navigator.userAgent;
}
function pp() {
  return !/^((?!chrome|android).)*safari/i.test(ta());
}
function ir(e, t, n) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  var r = e.getBoundingClientRect(), s = 1, o = 1;
  t && He(e) && (s = e.offsetWidth > 0 && or(r.width) / e.offsetWidth || 1, o = e.offsetHeight > 0 && or(r.height) / e.offsetHeight || 1);
  var a = xn(e) ? Ie(e) : window, c = a.visualViewport, f = !pp() && n, p = (r.left + (f && c ? c.offsetLeft : 0)) / s, i = (r.top + (f && c ? c.offsetTop : 0)) / o, d = r.width / s, u = r.height / o;
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
function Ga(e) {
  var t = Ie(e), n = t.pageXOffset, r = t.pageYOffset;
  return {
    scrollLeft: n,
    scrollTop: r
  };
}
function Kg(e) {
  return {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  };
}
function Jg(e) {
  return e === Ie(e) || !He(e) ? Ga(e) : Kg(e);
}
function vt(e) {
  return e ? (e.nodeName || "").toLowerCase() : null;
}
function un(e) {
  return ((xn(e) ? e.ownerDocument : e.document) || window.document).documentElement;
}
function Xa(e) {
  return ir(un(e)).left + Ga(e).scrollLeft;
}
function Ot(e) {
  return Ie(e).getComputedStyle(e);
}
function Ka(e) {
  var t = Ot(e), n = t.overflow, r = t.overflowX, s = t.overflowY;
  return /auto|scroll|overlay|hidden/.test(n + s + r);
}
function Zg(e) {
  var t = e.getBoundingClientRect(), n = or(t.width) / e.offsetWidth || 1, r = or(t.height) / e.offsetHeight || 1;
  return n !== 1 || r !== 1;
}
function Qg(e, t, n) {
  n === void 0 && (n = !1);
  var r = He(t), s = He(t) && Zg(t), o = un(t), a = ir(e, s, n), c = {
    scrollLeft: 0,
    scrollTop: 0
  }, f = {
    x: 0,
    y: 0
  };
  return (r || !r && !n) && ((vt(t) !== "body" || Ka(o)) && (c = Jg(t)), He(t) ? (f = ir(t, !0), f.x += t.clientLeft, f.y += t.clientTop) : o && (f.x = Xa(o))), {
    x: a.left + c.scrollLeft - f.x,
    y: a.top + c.scrollTop - f.y,
    width: a.width,
    height: a.height
  };
}
function Ja(e) {
  var t = ir(e), n = e.offsetWidth, r = e.offsetHeight;
  return Math.abs(t.width - n) <= 1 && (n = t.width), Math.abs(t.height - r) <= 1 && (r = t.height), {
    x: e.offsetLeft,
    y: e.offsetTop,
    width: n,
    height: r
  };
}
function Ls(e) {
  return vt(e) === "html" ? e : e.assignedSlot || e.parentNode || (qa(e) ? e.host : null) || un(e);
}
function dp(e) {
  return ["html", "body", "#document"].indexOf(vt(e)) >= 0 ? e.ownerDocument.body : He(e) && Ka(e) ? e : dp(Ls(e));
}
function jr(e, t) {
  var n;
  t === void 0 && (t = []);
  var r = dp(e), s = r === ((n = e.ownerDocument) == null ? void 0 : n.body), o = Ie(r), a = s ? [o].concat(o.visualViewport || [], Ka(r) ? r : []) : r, c = t.concat(a);
  return s ? c : c.concat(jr(Ls(a)));
}
function ey(e) {
  return ["table", "td", "th"].indexOf(vt(e)) >= 0;
}
function Bc(e) {
  return !He(e) || Ot(e).position === "fixed" ? null : e.offsetParent;
}
function ty(e) {
  var t = /firefox/i.test(ta()), n = /Trident/i.test(ta());
  if (n && He(e)) {
    var r = Ot(e);
    if (r.position === "fixed")
      return null;
  }
  var s = Ls(e);
  for (qa(s) && (s = s.host); He(s) && ["html", "body"].indexOf(vt(s)) < 0; ) {
    var o = Ot(s);
    if (o.transform !== "none" || o.perspective !== "none" || o.contain === "paint" || ["transform", "perspective"].indexOf(o.willChange) !== -1 || t && o.willChange === "filter" || t && o.filter && o.filter !== "none")
      return s;
    s = s.parentNode;
  }
  return null;
}
function Po(e) {
  for (var t = Ie(e), n = Bc(e); n && ey(n) && Ot(n).position === "static"; )
    n = Bc(n);
  return n && (vt(n) === "html" || vt(n) === "body" && Ot(n).position === "static") ? t : n || ty(e) || t;
}
var Te = "top", Je = "bottom", Ze = "right", De = "left", Za = "auto", Ro = [Te, Je, Ze, De], sr = "start", co = "end", ny = "clippingParents", hp = "viewport", _r = "popper", ry = "reference", Fc = /* @__PURE__ */ Ro.reduce(function(e, t) {
  return e.concat([t + "-" + sr, t + "-" + co]);
}, []), vp = /* @__PURE__ */ [].concat(Ro, [Za]).reduce(function(e, t) {
  return e.concat([t, t + "-" + sr, t + "-" + co]);
}, []), oy = "beforeRead", iy = "read", sy = "afterRead", ay = "beforeMain", ly = "main", cy = "afterMain", fy = "beforeWrite", uy = "write", _y = "afterWrite", py = [oy, iy, sy, ay, ly, cy, fy, uy, _y];
function dy(e) {
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
function hy(e) {
  var t = dy(e);
  return py.reduce(function(n, r) {
    return n.concat(t.filter(function(s) {
      return s.phase === r;
    }));
  }, []);
}
function vy(e) {
  var t;
  return function() {
    return t || (t = new Promise(function(n) {
      Promise.resolve().then(function() {
        t = void 0, n(e());
      });
    })), t;
  };
}
function _t(e) {
  return e.split("-")[0];
}
function my(e) {
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
function gy(e, t) {
  var n = Ie(e), r = un(e), s = n.visualViewport, o = r.clientWidth, a = r.clientHeight, c = 0, f = 0;
  if (s) {
    o = s.width, a = s.height;
    var p = pp();
    (p || !p && t === "fixed") && (c = s.offsetLeft, f = s.offsetTop);
  }
  return {
    width: o,
    height: a,
    x: c + Xa(e),
    y: f
  };
}
function yy(e) {
  var t, n = un(e), r = Ga(e), s = (t = e.ownerDocument) == null ? void 0 : t.body, o = wn(n.scrollWidth, n.clientWidth, s ? s.scrollWidth : 0, s ? s.clientWidth : 0), a = wn(n.scrollHeight, n.clientHeight, s ? s.scrollHeight : 0, s ? s.clientHeight : 0), c = -r.scrollLeft + Xa(e), f = -r.scrollTop;
  return Ot(s || n).direction === "rtl" && (c += wn(n.clientWidth, s ? s.clientWidth : 0) - o), {
    width: o,
    height: a,
    x: c,
    y: f
  };
}
function mp(e, t) {
  var n = t.getRootNode && t.getRootNode();
  if (e.contains(t))
    return !0;
  if (n && qa(n)) {
    var r = t;
    do {
      if (r && e.isSameNode(r))
        return !0;
      r = r.parentNode || r.host;
    } while (r);
  }
  return !1;
}
function na(e) {
  return Object.assign({}, e, {
    left: e.x,
    top: e.y,
    right: e.x + e.width,
    bottom: e.y + e.height
  });
}
function by(e, t) {
  var n = ir(e, !1, t === "fixed");
  return n.top = n.top + e.clientTop, n.left = n.left + e.clientLeft, n.bottom = n.top + e.clientHeight, n.right = n.left + e.clientWidth, n.width = e.clientWidth, n.height = e.clientHeight, n.x = n.left, n.y = n.top, n;
}
function zc(e, t, n) {
  return t === hp ? na(gy(e, n)) : xn(t) ? by(t, n) : na(yy(un(e)));
}
function wy(e) {
  var t = jr(Ls(e)), n = ["absolute", "fixed"].indexOf(Ot(e).position) >= 0, r = n && He(e) ? Po(e) : e;
  return xn(r) ? t.filter(function(s) {
    return xn(s) && mp(s, r) && vt(s) !== "body";
  }) : [];
}
function $y(e, t, n, r) {
  var s = t === "clippingParents" ? wy(e) : [].concat(t), o = [].concat(s, [n]), a = o[0], c = o.reduce(function(f, p) {
    var i = zc(e, p, r);
    return f.top = wn(i.top, f.top), f.right = zi(i.right, f.right), f.bottom = zi(i.bottom, f.bottom), f.left = wn(i.left, f.left), f;
  }, zc(e, a, r));
  return c.width = c.right - c.left, c.height = c.bottom - c.top, c.x = c.left, c.y = c.top, c;
}
function ar(e) {
  return e.split("-")[1];
}
function Qa(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function gp(e) {
  var t = e.reference, n = e.element, r = e.placement, s = r ? _t(r) : null, o = r ? ar(r) : null, a = t.x + t.width / 2 - n.width / 2, c = t.y + t.height / 2 - n.height / 2, f;
  switch (s) {
    case Te:
      f = {
        x: a,
        y: t.y - n.height
      };
      break;
    case Je:
      f = {
        x: a,
        y: t.y + t.height
      };
      break;
    case Ze:
      f = {
        x: t.x + t.width,
        y: c
      };
      break;
    case De:
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
  var p = s ? Qa(s) : null;
  if (p != null) {
    var i = p === "y" ? "height" : "width";
    switch (o) {
      case sr:
        f[p] = f[p] - (t[i] / 2 - n[i] / 2);
        break;
      case co:
        f[p] = f[p] + (t[i] / 2 - n[i] / 2);
        break;
    }
  }
  return f;
}
function yp() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
function bp(e) {
  return Object.assign({}, yp(), e);
}
function wp(e, t) {
  return t.reduce(function(n, r) {
    return n[r] = e, n;
  }, {});
}
function el(e, t) {
  t === void 0 && (t = {});
  var n = t, r = n.placement, s = r === void 0 ? e.placement : r, o = n.strategy, a = o === void 0 ? e.strategy : o, c = n.boundary, f = c === void 0 ? ny : c, p = n.rootBoundary, i = p === void 0 ? hp : p, d = n.elementContext, u = d === void 0 ? _r : d, l = n.altBoundary, _ = l === void 0 ? !1 : l, g = n.padding, h = g === void 0 ? 0 : g, v = bp(typeof h != "number" ? h : wp(h, Ro)), m = u === _r ? ry : _r, S = e.rects.popper, b = e.elements[_ ? m : u], E = $y(xn(b) ? b : b.contextElement || un(e.elements.popper), f, i, a), $ = ir(e.elements.reference), k = gp({
    reference: $,
    element: S,
    strategy: "absolute",
    placement: s
  }), y = na(Object.assign({}, S, k)), x = u === _r ? y : $, C = {
    top: E.top - x.top + v.top,
    bottom: x.bottom - E.bottom + v.bottom,
    left: E.left - x.left + v.left,
    right: x.right - E.right + v.right
  }, R = e.modifiersData.offset;
  if (u === _r && R) {
    var I = R[s];
    Object.keys(C).forEach(function(T) {
      var M = [Ze, Je].indexOf(T) >= 0 ? 1 : -1, O = [Te, Je].indexOf(T) >= 0 ? "y" : "x";
      C[T] += I[O] * M;
    });
  }
  return C;
}
var Vc = {
  placement: "bottom",
  modifiers: [],
  strategy: "absolute"
};
function Yc() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return !t.some(function(r) {
    return !(r && typeof r.getBoundingClientRect == "function");
  });
}
function ky(e) {
  e === void 0 && (e = {});
  var t = e, n = t.defaultModifiers, r = n === void 0 ? [] : n, s = t.defaultOptions, o = s === void 0 ? Vc : s;
  return function(c, f, p) {
    p === void 0 && (p = o);
    var i = {
      placement: "bottom",
      orderedModifiers: [],
      options: Object.assign({}, Vc, o),
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
          reference: xn(c) ? jr(c) : c.contextElement ? jr(c.contextElement) : [],
          popper: jr(f)
        };
        var S = hy(my([].concat(r, i.options.modifiers)));
        return i.orderedModifiers = S.filter(function(b) {
          return b.enabled;
        }), _(), l.update();
      },
      forceUpdate: function() {
        if (!u) {
          var v = i.elements, m = v.reference, S = v.popper;
          if (!!Yc(m, S)) {
            i.rects = {
              reference: Qg(m, Po(S), i.options.strategy === "fixed"),
              popper: Ja(S)
            }, i.reset = !1, i.placement = i.options.placement, i.orderedModifiers.forEach(function(C) {
              return i.modifiersData[C.name] = Object.assign({}, C.data);
            });
            for (var b = 0; b < i.orderedModifiers.length; b++) {
              if (i.reset === !0) {
                i.reset = !1, b = -1;
                continue;
              }
              var E = i.orderedModifiers[b], $ = E.fn, k = E.options, y = k === void 0 ? {} : k, x = E.name;
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
      update: vy(function() {
        return new Promise(function(h) {
          l.forceUpdate(), h(i);
        });
      }),
      destroy: function() {
        g(), u = !0;
      }
    };
    if (!Yc(c, f))
      return l;
    l.setOptions(p).then(function(h) {
      !u && p.onFirstUpdate && p.onFirstUpdate(h);
    });
    function _() {
      i.orderedModifiers.forEach(function(h) {
        var v = h.name, m = h.options, S = m === void 0 ? {} : m, b = h.effect;
        if (typeof b == "function") {
          var E = b({
            state: i,
            name: v,
            instance: l,
            options: S
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
var Io = {
  passive: !0
};
function xy(e) {
  var t = e.state, n = e.instance, r = e.options, s = r.scroll, o = s === void 0 ? !0 : s, a = r.resize, c = a === void 0 ? !0 : a, f = Ie(t.elements.popper), p = [].concat(t.scrollParents.reference, t.scrollParents.popper);
  return o && p.forEach(function(i) {
    i.addEventListener("scroll", n.update, Io);
  }), c && f.addEventListener("resize", n.update, Io), function() {
    o && p.forEach(function(i) {
      i.removeEventListener("scroll", n.update, Io);
    }), c && f.removeEventListener("resize", n.update, Io);
  };
}
const Sy = {
  name: "eventListeners",
  enabled: !0,
  phase: "write",
  fn: function() {
  },
  effect: xy,
  data: {}
};
function Ey(e) {
  var t = e.state, n = e.name;
  t.modifiersData[n] = gp({
    reference: t.rects.reference,
    element: t.rects.popper,
    strategy: "absolute",
    placement: t.placement
  });
}
const Cy = {
  name: "popperOffsets",
  enabled: !0,
  phase: "read",
  fn: Ey,
  data: {}
};
var Oy = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function Ay(e) {
  var t = e.x, n = e.y, r = window, s = r.devicePixelRatio || 1;
  return {
    x: or(t * s) / s || 0,
    y: or(n * s) / s || 0
  };
}
function qc(e) {
  var t, n = e.popper, r = e.popperRect, s = e.placement, o = e.variation, a = e.offsets, c = e.position, f = e.gpuAcceleration, p = e.adaptive, i = e.roundOffsets, d = e.isFixed, u = a.x, l = u === void 0 ? 0 : u, _ = a.y, g = _ === void 0 ? 0 : _, h = typeof i == "function" ? i({
    x: l,
    y: g
  }) : {
    x: l,
    y: g
  };
  l = h.x, g = h.y;
  var v = a.hasOwnProperty("x"), m = a.hasOwnProperty("y"), S = De, b = Te, E = window;
  if (p) {
    var $ = Po(n), k = "clientHeight", y = "clientWidth";
    if ($ === Ie(n) && ($ = un(n), Ot($).position !== "static" && c === "absolute" && (k = "scrollHeight", y = "scrollWidth")), $ = $, s === Te || (s === De || s === Ze) && o === co) {
      b = Je;
      var x = d && $ === E && E.visualViewport ? E.visualViewport.height : $[k];
      g -= x - r.height, g *= f ? 1 : -1;
    }
    if (s === De || (s === Te || s === Je) && o === co) {
      S = Ze;
      var C = d && $ === E && E.visualViewport ? E.visualViewport.width : $[y];
      l -= C - r.width, l *= f ? 1 : -1;
    }
  }
  var R = Object.assign({
    position: c
  }, p && Oy), I = i === !0 ? Ay({
    x: l,
    y: g
  }) : {
    x: l,
    y: g
  };
  if (l = I.x, g = I.y, f) {
    var T;
    return Object.assign({}, R, (T = {}, T[b] = m ? "0" : "", T[S] = v ? "0" : "", T.transform = (E.devicePixelRatio || 1) <= 1 ? "translate(" + l + "px, " + g + "px)" : "translate3d(" + l + "px, " + g + "px, 0)", T));
  }
  return Object.assign({}, R, (t = {}, t[b] = m ? g + "px" : "", t[S] = v ? l + "px" : "", t.transform = "", t));
}
function My(e) {
  var t = e.state, n = e.options, r = n.gpuAcceleration, s = r === void 0 ? !0 : r, o = n.adaptive, a = o === void 0 ? !0 : o, c = n.roundOffsets, f = c === void 0 ? !0 : c, p = {
    placement: _t(t.placement),
    variation: ar(t.placement),
    popper: t.elements.popper,
    popperRect: t.rects.popper,
    gpuAcceleration: s,
    isFixed: t.options.strategy === "fixed"
  };
  t.modifiersData.popperOffsets != null && (t.styles.popper = Object.assign({}, t.styles.popper, qc(Object.assign({}, p, {
    offsets: t.modifiersData.popperOffsets,
    position: t.options.strategy,
    adaptive: a,
    roundOffsets: f
  })))), t.modifiersData.arrow != null && (t.styles.arrow = Object.assign({}, t.styles.arrow, qc(Object.assign({}, p, {
    offsets: t.modifiersData.arrow,
    position: "absolute",
    adaptive: !1,
    roundOffsets: f
  })))), t.attributes.popper = Object.assign({}, t.attributes.popper, {
    "data-popper-placement": t.placement
  });
}
const Ty = {
  name: "computeStyles",
  enabled: !0,
  phase: "beforeWrite",
  fn: My,
  data: {}
};
function Dy(e) {
  var t = e.state;
  Object.keys(t.elements).forEach(function(n) {
    var r = t.styles[n] || {}, s = t.attributes[n] || {}, o = t.elements[n];
    !He(o) || !vt(o) || (Object.assign(o.style, r), Object.keys(s).forEach(function(a) {
      var c = s[a];
      c === !1 ? o.removeAttribute(a) : o.setAttribute(a, c === !0 ? "" : c);
    }));
  });
}
function Ny(e) {
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
      !He(s) || !vt(s) || (Object.assign(s.style, c), Object.keys(o).forEach(function(f) {
        s.removeAttribute(f);
      }));
    });
  };
}
const Ly = {
  name: "applyStyles",
  enabled: !0,
  phase: "write",
  fn: Dy,
  effect: Ny,
  requires: ["computeStyles"]
};
var Py = [Sy, Cy, Ty, Ly], Ry = /* @__PURE__ */ ky({
  defaultModifiers: Py
});
function Ir(e, t, n) {
  return wn(e, zi(t, n));
}
function Hy(e, t, n) {
  var r = Ir(e, t, n);
  return r > n ? n : r;
}
var Wy = function(t, n) {
  return t = typeof t == "function" ? t(Object.assign({}, n.rects, {
    placement: n.placement
  })) : t, bp(typeof t != "number" ? t : wp(t, Ro));
};
function jy(e) {
  var t, n = e.state, r = e.name, s = e.options, o = n.elements.arrow, a = n.modifiersData.popperOffsets, c = _t(n.placement), f = Qa(c), p = [De, Ze].indexOf(c) >= 0, i = p ? "height" : "width";
  if (!(!o || !a)) {
    var d = Wy(s.padding, n), u = Ja(o), l = f === "y" ? Te : De, _ = f === "y" ? Je : Ze, g = n.rects.reference[i] + n.rects.reference[f] - a[f] - n.rects.popper[i], h = a[f] - n.rects.reference[f], v = Po(o), m = v ? f === "y" ? v.clientHeight || 0 : v.clientWidth || 0 : 0, S = g / 2 - h / 2, b = d[l], E = m - u[i] - d[_], $ = m / 2 - u[i] / 2 + S, k = Ir(b, $, E), y = f;
    n.modifiersData[r] = (t = {}, t[y] = k, t.centerOffset = k - $, t);
  }
}
function Iy(e) {
  var t = e.state, n = e.options, r = n.element, s = r === void 0 ? "[data-popper-arrow]" : r;
  s != null && (typeof s == "string" && (s = t.elements.popper.querySelector(s), !s) || !mp(t.elements.popper, s) || (t.elements.arrow = s));
}
const Uy = {
  name: "arrow",
  enabled: !0,
  phase: "main",
  fn: jy,
  effect: Iy,
  requires: ["popperOffsets"],
  requiresIfExists: ["preventOverflow"]
};
function By(e, t, n) {
  var r = _t(e), s = [De, Te].indexOf(r) >= 0 ? -1 : 1, o = typeof n == "function" ? n(Object.assign({}, t, {
    placement: e
  })) : n, a = o[0], c = o[1];
  return a = a || 0, c = (c || 0) * s, [De, Ze].indexOf(r) >= 0 ? {
    x: c,
    y: a
  } : {
    x: a,
    y: c
  };
}
function Fy(e) {
  var t = e.state, n = e.options, r = e.name, s = n.offset, o = s === void 0 ? [0, 0] : s, a = vp.reduce(function(i, d) {
    return i[d] = By(d, t.rects, o), i;
  }, {}), c = a[t.placement], f = c.x, p = c.y;
  t.modifiersData.popperOffsets != null && (t.modifiersData.popperOffsets.x += f, t.modifiersData.popperOffsets.y += p), t.modifiersData[r] = a;
}
const zy = {
  name: "offset",
  enabled: !0,
  phase: "main",
  requires: ["popperOffsets"],
  fn: Fy
};
function Vy(e) {
  return e === "x" ? "y" : "x";
}
function Yy(e) {
  var t = e.state, n = e.options, r = e.name, s = n.mainAxis, o = s === void 0 ? !0 : s, a = n.altAxis, c = a === void 0 ? !1 : a, f = n.boundary, p = n.rootBoundary, i = n.altBoundary, d = n.padding, u = n.tether, l = u === void 0 ? !0 : u, _ = n.tetherOffset, g = _ === void 0 ? 0 : _, h = el(t, {
    boundary: f,
    rootBoundary: p,
    padding: d,
    altBoundary: i
  }), v = _t(t.placement), m = ar(t.placement), S = !m, b = Qa(v), E = Vy(b), $ = t.modifiersData.popperOffsets, k = t.rects.reference, y = t.rects.popper, x = typeof g == "function" ? g(Object.assign({}, t.rects, {
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
      var T, M = b === "y" ? Te : De, O = b === "y" ? Je : Ze, D = b === "y" ? "height" : "width", A = $[b], j = A + h[M], W = A - h[O], F = l ? -y[D] / 2 : 0, G = m === sr ? k[D] : y[D], z = m === sr ? -y[D] : -k[D], K = t.elements.arrow, Q = l && K ? Ja(K) : {
        width: 0,
        height: 0
      }, P = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : yp(), V = P[M], X = P[O], q = Ir(0, k[D], Q[D]), J = S ? k[D] / 2 - F - q - V - C.mainAxis : G - q - V - C.mainAxis, ce = S ? -k[D] / 2 + F + q + X + C.mainAxis : z + q + X + C.mainAxis, le = t.elements.arrow && Po(t.elements.arrow), $e = le ? b === "y" ? le.clientTop || 0 : le.clientLeft || 0 : 0, et = (T = R == null ? void 0 : R[b]) != null ? T : 0, ee = A + J - et - $e, At = A + ce - et, Ue = Ir(l ? zi(j, ee) : j, A, l ? wn(W, At) : W);
      $[b] = Ue, I[b] = Ue - A;
    }
    if (c) {
      var Be, Mt = b === "x" ? Te : De, tt = b === "x" ? Je : Ze, ne = $[E], ye = E === "y" ? "height" : "width", Fe = ne + h[Mt], Tt = ne - h[tt], ze = [Te, De].indexOf(v) !== -1, Dt = (Be = R == null ? void 0 : R[E]) != null ? Be : 0, Nt = ze ? Fe : ne - k[ye] - y[ye] - Dt + C.altAxis, Lt = ze ? ne + k[ye] + y[ye] - Dt - C.altAxis : Tt, Pt = l && ze ? Hy(Nt, ne, Lt) : Ir(l ? Nt : Fe, ne, l ? Lt : Tt);
      $[E] = Pt, I[E] = Pt - ne;
    }
    t.modifiersData[r] = I;
  }
}
const qy = {
  name: "preventOverflow",
  enabled: !0,
  phase: "main",
  fn: Yy,
  requiresIfExists: ["offset"]
};
var Gy = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function li(e) {
  return e.replace(/left|right|bottom|top/g, function(t) {
    return Gy[t];
  });
}
var Xy = {
  start: "end",
  end: "start"
};
function Gc(e) {
  return e.replace(/start|end/g, function(t) {
    return Xy[t];
  });
}
function Ky(e, t) {
  t === void 0 && (t = {});
  var n = t, r = n.placement, s = n.boundary, o = n.rootBoundary, a = n.padding, c = n.flipVariations, f = n.allowedAutoPlacements, p = f === void 0 ? vp : f, i = ar(r), d = i ? c ? Fc : Fc.filter(function(_) {
    return ar(_) === i;
  }) : Ro, u = d.filter(function(_) {
    return p.indexOf(_) >= 0;
  });
  u.length === 0 && (u = d);
  var l = u.reduce(function(_, g) {
    return _[g] = el(e, {
      placement: g,
      boundary: s,
      rootBoundary: o,
      padding: a
    })[_t(g)], _;
  }, {});
  return Object.keys(l).sort(function(_, g) {
    return l[_] - l[g];
  });
}
function Jy(e) {
  if (_t(e) === Za)
    return [];
  var t = li(e);
  return [Gc(e), t, Gc(t)];
}
function Zy(e) {
  var t = e.state, n = e.options, r = e.name;
  if (!t.modifiersData[r]._skip) {
    for (var s = n.mainAxis, o = s === void 0 ? !0 : s, a = n.altAxis, c = a === void 0 ? !0 : a, f = n.fallbackPlacements, p = n.padding, i = n.boundary, d = n.rootBoundary, u = n.altBoundary, l = n.flipVariations, _ = l === void 0 ? !0 : l, g = n.allowedAutoPlacements, h = t.options.placement, v = _t(h), m = v === h, S = f || (m || !_ ? [li(h)] : Jy(h)), b = [h].concat(S).reduce(function(Q, P) {
      return Q.concat(_t(P) === Za ? Ky(t, {
        placement: P,
        boundary: i,
        rootBoundary: d,
        padding: p,
        flipVariations: _,
        allowedAutoPlacements: g
      }) : P);
    }, []), E = t.rects.reference, $ = t.rects.popper, k = /* @__PURE__ */ new Map(), y = !0, x = b[0], C = 0; C < b.length; C++) {
      var R = b[C], I = _t(R), T = ar(R) === sr, M = [Te, Je].indexOf(I) >= 0, O = M ? "width" : "height", D = el(t, {
        placement: R,
        boundary: i,
        rootBoundary: d,
        altBoundary: u,
        padding: p
      }), A = M ? T ? Ze : De : T ? Je : Te;
      E[O] > $[O] && (A = li(A));
      var j = li(A), W = [];
      if (o && W.push(D[I] <= 0), c && W.push(D[A] <= 0, D[j] <= 0), W.every(function(Q) {
        return Q;
      })) {
        x = R, y = !1;
        break;
      }
      k.set(R, W);
    }
    if (y)
      for (var F = _ ? 3 : 1, G = function(P) {
        var V = b.find(function(X) {
          var q = k.get(X);
          if (q)
            return q.slice(0, P).every(function(J) {
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
const Qy = {
  name: "flip",
  enabled: !0,
  phase: "main",
  fn: Zy,
  requiresIfExists: ["offset"],
  data: {
    _skip: !1
  }
};
var Bn, Fn, zn, hn, Ye, So, Vn, is, $p;
class ct extends ft {
  constructor() {
    super(...arguments);
    L(this, is);
    L(this, Bn, !1);
    L(this, Fn, void 0);
    L(this, zn, 0);
    L(this, hn, void 0);
    L(this, Ye, void 0);
    L(this, So, void 0);
    N(this, "hideLater", () => {
      w(this, Vn).call(this), H(this, zn, window.setTimeout(this.hide.bind(this), 100));
    });
    L(this, Vn, () => {
      clearTimeout(w(this, zn)), H(this, zn, 0);
    });
  }
  get isShown() {
    var n;
    return (n = w(this, hn)) == null ? void 0 : n.classList.contains(this.constructor.CLASS_SHOW);
  }
  get tooltip() {
    return w(this, hn) || this._ensureTooltip();
  }
  get popper() {
    return w(this, Ye) ? w(this, Ye) : this._createPopper();
  }
  get trigger() {
    return w(this, So) || this.element;
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
    return H(this, So, n), !w(this, Bn) && this.isHover && te(this, is, $p).call(this), this.options.animation && this.tooltip.classList.add("fade"), this.element.classList.add(this.elementShowClass), this.tooltip.classList.add(this.constructor.CLASS_SHOW), this._createPopper().update(), !0;
  }
  hide() {
    var n, r;
    return (n = w(this, Ye)) == null || n.destroy(), H(this, Ye, void 0), this.element.classList.remove(this.elementShowClass), (r = w(this, hn)) == null || r.classList.remove(this.constructor.CLASS_SHOW), !0;
  }
  toggle(n) {
    return this.isShown ? this.hide() : this.show(n);
  }
  destroy() {
    w(this, Bn) && (this.element.removeEventListener("mouseleave", this.hideLater), this.tooltip.removeEventListener("mouseenter", w(this, Vn)), this.tooltip.removeEventListener("mouseleave", this.hideLater)), super.destroy();
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
    return o = o.concat(s), r.classList.add(...o), r[this.options.html ? "innerHTML" : "innerText"] = this.options.title || "", this.options.arrow && r.prepend(this._createArrow()), document.body.appendChild(r), H(this, hn, r), r;
  }
  _getPopperOptions() {
    const n = this._getArrowSize();
    return {
      modifiers: [
        qy,
        Qy,
        { ...Uy, options: {
          padding: n,
          element: ".arrow"
        } },
        {
          ...zy,
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
    return w(this, Ye) ? w(this, Ye).setOptions(n) : H(this, Ye, Ry(this._getPopperElement(), this.tooltip, n)), w(this, Ye);
  }
  _getPopperElement() {
    return w(this, Fn) || H(this, Fn, {
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
    }), w(this, Fn);
  }
  static clear(n) {
    n instanceof Event && (n = { event: n });
    const { exclude: r } = n || {}, s = this.getAll().entries(), o = new Set(r || []);
    for (const [a, c] of s)
      o.has(a) || c.hide();
  }
}
Bn = new WeakMap(), Fn = new WeakMap(), zn = new WeakMap(), hn = new WeakMap(), Ye = new WeakMap(), So = new WeakMap(), Vn = new WeakMap(), is = new WeakSet(), $p = function() {
  const { tooltip: n } = this;
  n.addEventListener("mouseenter", w(this, Vn)), n.addEventListener("mouseleave", this.hideLater), this.element.addEventListener("mouseleave", this.hideLater), H(this, Bn, !0);
}, N(ct, "NAME", "tooltip"), N(ct, "TOOLTIP_CLASS", "tooltip"), N(ct, "CLASS_SHOW", "show"), N(ct, "MENU_SELECTOR", '[data-toggle="tooltip"]:not(.disabled):not(:disabled)'), N(ct, "DEFAULT", {
  animation: !0,
  placement: "top",
  strategy: "absolute",
  trigger: "hover",
  type: "darker",
  arrow: !0
});
document.addEventListener("click", function(e) {
  const n = e.target.closest(ct.MENU_SELECTOR);
  if (n) {
    const r = ct.ensure(n);
    r.options.trigger === "click" && r.toggle();
  } else
    ct.clear({ event: e });
});
document.addEventListener("mouseover", function(e) {
  const t = e.target, n = typeof t.closest == "function" ? t.closest(ct.MENU_SELECTOR) : null;
  if (!n)
    return;
  const r = ct.ensure(n);
  r.isHover && r.show();
});
var tl, ve, kp, xp, Ur, Xc, Sp = {}, Ep = [], eb = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function tn(e, t) {
  for (var n in t)
    e[n] = t[n];
  return e;
}
function Cp(e) {
  var t = e.parentNode;
  t && t.removeChild(e);
}
function Y(e, t, n) {
  var r, s, o, a = {};
  for (o in t)
    o == "key" ? r = t[o] : o == "ref" ? s = t[o] : a[o] = t[o];
  if (arguments.length > 2 && (a.children = arguments.length > 3 ? tl.call(arguments, 2) : n), typeof e == "function" && e.defaultProps != null)
    for (o in e.defaultProps)
      a[o] === void 0 && (a[o] = e.defaultProps[o]);
  return ci(e, a, r, s, null);
}
function ci(e, t, n, r, s) {
  var o = { type: e, props: t, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: s == null ? ++kp : s };
  return s == null && ve.vnode != null && ve.vnode(o), o;
}
function tb() {
  return { current: null };
}
function nl(e) {
  return e.children;
}
function Br(e, t) {
  this.props = e, this.context = t;
}
function fo(e, t) {
  if (t == null)
    return e.__ ? fo(e.__, e.__.__k.indexOf(e) + 1) : null;
  for (var n; t < e.__k.length; t++)
    if ((n = e.__k[t]) != null && n.__e != null)
      return n.__e;
  return typeof e.type == "function" ? fo(e) : null;
}
function Op(e) {
  var t, n;
  if ((e = e.__) != null && e.__c != null) {
    for (e.__e = e.__c.base = null, t = 0; t < e.__k.length; t++)
      if ((n = e.__k[t]) != null && n.__e != null) {
        e.__e = e.__c.base = n.__e;
        break;
      }
    return Op(e);
  }
}
function Kc(e) {
  (!e.__d && (e.__d = !0) && Ur.push(e) && !Vi.__r++ || Xc !== ve.debounceRendering) && ((Xc = ve.debounceRendering) || setTimeout)(Vi);
}
function Vi() {
  for (var e; Vi.__r = Ur.length; )
    e = Ur.sort(function(t, n) {
      return t.__v.__b - n.__v.__b;
    }), Ur = [], e.some(function(t) {
      var n, r, s, o, a, c;
      t.__d && (a = (o = (n = t).__v).__e, (c = n.__P) && (r = [], (s = tn({}, o)).__v = o.__v + 1, Dp(c, o, s, n.__n, c.ownerSVGElement !== void 0, o.__h != null ? [a] : null, r, a == null ? fo(o) : a, o.__h), rb(r, o), o.__e != a && Op(o)));
    });
}
function Ap(e, t, n, r, s, o, a, c, f, p) {
  var i, d, u, l, _, g, h, v = r && r.__k || Ep, m = v.length;
  for (n.__k = [], i = 0; i < t.length; i++)
    if ((l = n.__k[i] = (l = t[i]) == null || typeof l == "boolean" ? null : typeof l == "string" || typeof l == "number" || typeof l == "bigint" ? ci(null, l, null, null, l) : Array.isArray(l) ? ci(nl, { children: l }, null, null, null) : l.__b > 0 ? ci(l.type, l.props, l.key, l.ref ? l.ref : null, l.__v) : l) != null) {
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
      Dp(e, l, u = u || Sp, s, o, a, c, f, p), _ = l.__e, (d = l.ref) && u.ref != d && (h || (h = []), u.ref && h.push(u.ref, null, l), h.push(d, l.__c || _, l)), _ != null ? (g == null && (g = _), typeof l.type == "function" && l.__k === u.__k ? l.__d = f = Mp(l, f, e) : f = Tp(e, l, u, v, _, f), typeof n.type == "function" && (n.__d = f)) : f && u.__e == f && f.parentNode != e && (f = fo(u));
    }
  for (n.__e = g, i = m; i--; )
    v[i] != null && Lp(v[i], v[i]);
  if (h)
    for (i = 0; i < h.length; i++)
      Np(h[i], h[++i], h[++i]);
}
function Mp(e, t, n) {
  for (var r, s = e.__k, o = 0; s && o < s.length; o++)
    (r = s[o]) && (r.__ = e, t = typeof r.type == "function" ? Mp(r, t, n) : Tp(n, r, r, s, r.__e, t));
  return t;
}
function Tp(e, t, n, r, s, o) {
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
function nb(e, t, n, r, s) {
  var o;
  for (o in n)
    o === "children" || o === "key" || o in t || Yi(e, o, null, n[o], r);
  for (o in t)
    s && typeof t[o] != "function" || o === "children" || o === "key" || o === "value" || o === "checked" || n[o] === t[o] || Yi(e, o, t[o], n[o], r);
}
function Jc(e, t, n) {
  t[0] === "-" ? e.setProperty(t, n) : e[t] = n == null ? "" : typeof n != "number" || eb.test(t) ? n : n + "px";
}
function Yi(e, t, n, r, s) {
  var o;
  e:
    if (t === "style")
      if (typeof n == "string")
        e.style.cssText = n;
      else {
        if (typeof r == "string" && (e.style.cssText = r = ""), r)
          for (t in r)
            n && t in n || Jc(e.style, t, "");
        if (n)
          for (t in n)
            r && n[t] === r[t] || Jc(e.style, t, n[t]);
      }
    else if (t[0] === "o" && t[1] === "n")
      o = t !== (t = t.replace(/Capture$/, "")), t = t.toLowerCase() in e ? t.toLowerCase().slice(2) : t.slice(2), e.l || (e.l = {}), e.l[t + o] = n, n ? r || e.addEventListener(t, o ? Qc : Zc, o) : e.removeEventListener(t, o ? Qc : Zc, o);
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
function Zc(e) {
  this.l[e.type + !1](ve.event ? ve.event(e) : e);
}
function Qc(e) {
  this.l[e.type + !0](ve.event ? ve.event(e) : e);
}
function Dp(e, t, n, r, s, o, a, c, f) {
  var p, i, d, u, l, _, g, h, v, m, S, b, E, $, k, y = t.type;
  if (t.constructor !== void 0)
    return null;
  n.__h != null && (f = n.__h, c = t.__e = n.__e, t.__h = null, o = [c]), (p = ve.__b) && p(t);
  try {
    e:
      if (typeof y == "function") {
        if (h = t.props, v = (p = y.contextType) && r[p.__c], m = p ? v ? v.props.value : p.__ : r, n.__c ? g = (i = t.__c = n.__c).__ = i.__E : ("prototype" in y && y.prototype.render ? t.__c = i = new y(h, m) : (t.__c = i = new Br(h, m), i.constructor = y, i.render = ib), v && v.sub(i), i.props = h, i.state || (i.state = {}), i.context = m, i.__n = r, d = i.__d = !0, i.__h = [], i._sb = []), i.__s == null && (i.__s = i.state), y.getDerivedStateFromProps != null && (i.__s == i.state && (i.__s = tn({}, i.__s)), tn(i.__s, y.getDerivedStateFromProps(h, i.__s))), u = i.props, l = i.state, d)
          y.getDerivedStateFromProps == null && i.componentWillMount != null && i.componentWillMount(), i.componentDidMount != null && i.__h.push(i.componentDidMount);
        else {
          if (y.getDerivedStateFromProps == null && h !== u && i.componentWillReceiveProps != null && i.componentWillReceiveProps(h, m), !i.__e && i.shouldComponentUpdate != null && i.shouldComponentUpdate(h, i.__s, m) === !1 || t.__v === n.__v) {
            for (i.props = h, i.state = i.__s, t.__v !== n.__v && (i.__d = !1), i.__v = t, t.__e = n.__e, t.__k = n.__k, t.__k.forEach(function(x) {
              x && (x.__ = t);
            }), S = 0; S < i._sb.length; S++)
              i.__h.push(i._sb[S]);
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
        i.state = i.__s, i.getChildContext != null && (r = tn(tn({}, r), i.getChildContext())), d || i.getSnapshotBeforeUpdate == null || (_ = i.getSnapshotBeforeUpdate(u, l)), k = p != null && p.type === nl && p.key == null ? p.props.children : p, Ap(e, Array.isArray(k) ? k : [k], t, n, r, s, o, a, c, f), i.base = t.__e, t.__h = null, i.__h.length && a.push(i), g && (i.__E = i.__ = null), i.__e = !1;
      } else
        o == null && t.__v === n.__v ? (t.__k = n.__k, t.__e = n.__e) : t.__e = ob(n.__e, t, n, r, s, o, a, f);
    (p = ve.diffed) && p(t);
  } catch (x) {
    t.__v = null, (f || o != null) && (t.__e = c, t.__h = !!f, o[o.indexOf(c)] = null), ve.__e(x, t, n);
  }
}
function rb(e, t) {
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
function ob(e, t, n, r, s, o, a, c) {
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
    if (o = o && tl.call(e.childNodes), p = (d = n.props || Sp).dangerouslySetInnerHTML, i = u.dangerouslySetInnerHTML, !c) {
      if (o != null)
        for (d = {}, _ = 0; _ < e.attributes.length; _++)
          d[e.attributes[_].name] = e.attributes[_].value;
      (i || p) && (i && (p && i.__html == p.__html || i.__html === e.innerHTML) || (e.innerHTML = i && i.__html || ""));
    }
    if (nb(e, u, d, s, c), i)
      t.__k = [];
    else if (_ = t.props.children, Ap(e, Array.isArray(_) ? _ : [_], t, n, r, s && l !== "foreignObject", o, a, o ? o[0] : n.__k && fo(n, 0), c), o != null)
      for (_ = o.length; _--; )
        o[_] != null && Cp(o[_]);
    c || ("value" in u && (_ = u.value) !== void 0 && (_ !== e.value || l === "progress" && !_ || l === "option" && _ !== d.value) && Yi(e, "value", _, d.value, !1), "checked" in u && (_ = u.checked) !== void 0 && _ !== e.checked && Yi(e, "checked", _, d.checked, !1));
  }
  return e;
}
function Np(e, t, n) {
  try {
    typeof e == "function" ? e(t) : e.current = t;
  } catch (r) {
    ve.__e(r, n);
  }
}
function Lp(e, t, n) {
  var r, s;
  if (ve.unmount && ve.unmount(e), (r = e.ref) && (r.current && r.current !== e.__e || Np(r, null, t)), (r = e.__c) != null) {
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
      r[s] && Lp(r[s], t, n || typeof e.type != "function");
  n || e.__e == null || Cp(e.__e), e.__ = e.__e = e.__d = void 0;
}
function ib(e, t, n) {
  return this.constructor(e, n);
}
tl = Ep.slice, ve = { __e: function(e, t, n, r) {
  for (var s, o, a; t = t.__; )
    if ((s = t.__c) && !s.__)
      try {
        if ((o = s.constructor) && o.getDerivedStateFromError != null && (s.setState(o.getDerivedStateFromError(e)), a = s.__d), s.componentDidCatch != null && (s.componentDidCatch(e, r || {}), a = s.__d), a)
          return s.__E = s;
      } catch (c) {
        e = c;
      }
  throw e;
} }, kp = 0, xp = function(e) {
  return e != null && e.constructor === void 0;
}, Br.prototype.setState = function(e, t) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = tn({}, this.state), typeof e == "function" && (e = e(tn({}, n), this.props)), e && tn(n, e), e != null && this.__v && (t && this._sb.push(t), Kc(this));
}, Br.prototype.forceUpdate = function(e) {
  this.__v && (this.__e = !0, e && this.__h.push(e), Kc(this));
}, Br.prototype.render = nl, Ur = [], Vi.__r = 0;
let sb = (e = 21) => crypto.getRandomValues(new Uint8Array(e)).reduce((t, n) => (n &= 63, n < 36 ? t += n.toString(36) : n < 62 ? t += (n - 26).toString(36).toUpperCase() : n > 62 ? t += "-" : t += "_", t), "");
var rl, me, Pp, Fr, ef, Rp = {}, Hp = [], ab = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function nn(e, t) {
  for (var n in t)
    e[n] = t[n];
  return e;
}
function Wp(e) {
  var t = e.parentNode;
  t && t.removeChild(e);
}
function tf(e, t, n) {
  var r, s, o, a = {};
  for (o in t)
    o == "key" ? r = t[o] : o == "ref" ? s = t[o] : a[o] = t[o];
  if (arguments.length > 2 && (a.children = arguments.length > 3 ? rl.call(arguments, 2) : n), typeof e == "function" && e.defaultProps != null)
    for (o in e.defaultProps)
      a[o] === void 0 && (a[o] = e.defaultProps[o]);
  return fi(e, a, r, s, null);
}
function fi(e, t, n, r, s) {
  var o = { type: e, props: t, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: s == null ? ++Pp : s };
  return s == null && me.vnode != null && me.vnode(o), o;
}
function ol(e) {
  return e.children;
}
function zr(e, t) {
  this.props = e, this.context = t;
}
function uo(e, t) {
  if (t == null)
    return e.__ ? uo(e.__, e.__.__k.indexOf(e) + 1) : null;
  for (var n; t < e.__k.length; t++)
    if ((n = e.__k[t]) != null && n.__e != null)
      return n.__e;
  return typeof e.type == "function" ? uo(e) : null;
}
function jp(e) {
  var t, n;
  if ((e = e.__) != null && e.__c != null) {
    for (e.__e = e.__c.base = null, t = 0; t < e.__k.length; t++)
      if ((n = e.__k[t]) != null && n.__e != null) {
        e.__e = e.__c.base = n.__e;
        break;
      }
    return jp(e);
  }
}
function nf(e) {
  (!e.__d && (e.__d = !0) && Fr.push(e) && !qi.__r++ || ef !== me.debounceRendering) && ((ef = me.debounceRendering) || setTimeout)(qi);
}
function qi() {
  for (var e; qi.__r = Fr.length; )
    e = Fr.sort(function(t, n) {
      return t.__v.__b - n.__v.__b;
    }), Fr = [], e.some(function(t) {
      var n, r, s, o, a, c;
      t.__d && (a = (o = (n = t).__v).__e, (c = n.__P) && (r = [], (s = nn({}, o)).__v = o.__v + 1, Fp(c, o, s, n.__n, c.ownerSVGElement !== void 0, o.__h != null ? [a] : null, r, a == null ? uo(o) : a, o.__h), cb(r, o), o.__e != a && jp(o)));
    });
}
function Ip(e, t, n, r, s, o, a, c, f, p) {
  var i, d, u, l, _, g, h, v = r && r.__k || Hp, m = v.length;
  for (n.__k = [], i = 0; i < t.length; i++)
    if ((l = n.__k[i] = (l = t[i]) == null || typeof l == "boolean" ? null : typeof l == "string" || typeof l == "number" || typeof l == "bigint" ? fi(null, l, null, null, l) : Array.isArray(l) ? fi(ol, { children: l }, null, null, null) : l.__b > 0 ? fi(l.type, l.props, l.key, l.ref ? l.ref : null, l.__v) : l) != null) {
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
      Fp(e, l, u = u || Rp, s, o, a, c, f, p), _ = l.__e, (d = l.ref) && u.ref != d && (h || (h = []), u.ref && h.push(u.ref, null, l), h.push(d, l.__c || _, l)), _ != null ? (g == null && (g = _), typeof l.type == "function" && l.__k === u.__k ? l.__d = f = Up(l, f, e) : f = Bp(e, l, u, v, _, f), typeof n.type == "function" && (n.__d = f)) : f && u.__e == f && f.parentNode != e && (f = uo(u));
    }
  for (n.__e = g, i = m; i--; )
    v[i] != null && Vp(v[i], v[i]);
  if (h)
    for (i = 0; i < h.length; i++)
      zp(h[i], h[++i], h[++i]);
}
function Up(e, t, n) {
  for (var r, s = e.__k, o = 0; s && o < s.length; o++)
    (r = s[o]) && (r.__ = e, t = typeof r.type == "function" ? Up(r, t, n) : Bp(n, r, r, s, r.__e, t));
  return t;
}
function Bp(e, t, n, r, s, o) {
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
function lb(e, t, n, r, s) {
  var o;
  for (o in n)
    o === "children" || o === "key" || o in t || Gi(e, o, null, n[o], r);
  for (o in t)
    s && typeof t[o] != "function" || o === "children" || o === "key" || o === "value" || o === "checked" || n[o] === t[o] || Gi(e, o, t[o], n[o], r);
}
function rf(e, t, n) {
  t[0] === "-" ? e.setProperty(t, n) : e[t] = n == null ? "" : typeof n != "number" || ab.test(t) ? n : n + "px";
}
function Gi(e, t, n, r, s) {
  var o;
  e:
    if (t === "style")
      if (typeof n == "string")
        e.style.cssText = n;
      else {
        if (typeof r == "string" && (e.style.cssText = r = ""), r)
          for (t in r)
            n && t in n || rf(e.style, t, "");
        if (n)
          for (t in n)
            r && n[t] === r[t] || rf(e.style, t, n[t]);
      }
    else if (t[0] === "o" && t[1] === "n")
      o = t !== (t = t.replace(/Capture$/, "")), t = t.toLowerCase() in e ? t.toLowerCase().slice(2) : t.slice(2), e.l || (e.l = {}), e.l[t + o] = n, n ? r || e.addEventListener(t, o ? sf : of, o) : e.removeEventListener(t, o ? sf : of, o);
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
function of(e) {
  this.l[e.type + !1](me.event ? me.event(e) : e);
}
function sf(e) {
  this.l[e.type + !0](me.event ? me.event(e) : e);
}
function Fp(e, t, n, r, s, o, a, c, f) {
  var p, i, d, u, l, _, g, h, v, m, S, b, E, $, k, y = t.type;
  if (t.constructor !== void 0)
    return null;
  n.__h != null && (f = n.__h, c = t.__e = n.__e, t.__h = null, o = [c]), (p = me.__b) && p(t);
  try {
    e:
      if (typeof y == "function") {
        if (h = t.props, v = (p = y.contextType) && r[p.__c], m = p ? v ? v.props.value : p.__ : r, n.__c ? g = (i = t.__c = n.__c).__ = i.__E : ("prototype" in y && y.prototype.render ? t.__c = i = new y(h, m) : (t.__c = i = new zr(h, m), i.constructor = y, i.render = ub), v && v.sub(i), i.props = h, i.state || (i.state = {}), i.context = m, i.__n = r, d = i.__d = !0, i.__h = [], i._sb = []), i.__s == null && (i.__s = i.state), y.getDerivedStateFromProps != null && (i.__s == i.state && (i.__s = nn({}, i.__s)), nn(i.__s, y.getDerivedStateFromProps(h, i.__s))), u = i.props, l = i.state, d)
          y.getDerivedStateFromProps == null && i.componentWillMount != null && i.componentWillMount(), i.componentDidMount != null && i.__h.push(i.componentDidMount);
        else {
          if (y.getDerivedStateFromProps == null && h !== u && i.componentWillReceiveProps != null && i.componentWillReceiveProps(h, m), !i.__e && i.shouldComponentUpdate != null && i.shouldComponentUpdate(h, i.__s, m) === !1 || t.__v === n.__v) {
            for (i.props = h, i.state = i.__s, t.__v !== n.__v && (i.__d = !1), i.__v = t, t.__e = n.__e, t.__k = n.__k, t.__k.forEach(function(x) {
              x && (x.__ = t);
            }), S = 0; S < i._sb.length; S++)
              i.__h.push(i._sb[S]);
            i._sb = [], i.__h.length && a.push(i);
            break e;
          }
          i.componentWillUpdate != null && i.componentWillUpdate(h, i.__s, m), i.componentDidUpdate != null && i.__h.push(function() {
            i.componentDidUpdate(u, l, _);
          });
        }
        if (i.context = m, i.props = h, i.__v = t, i.__P = e, b = me.__r, E = 0, "prototype" in y && y.prototype.render) {
          for (i.state = i.__s, i.__d = !1, b && b(t), p = i.render(i.props, i.state, i.context), $ = 0; $ < i._sb.length; $++)
            i.__h.push(i._sb[$]);
          i._sb = [];
        } else
          do
            i.__d = !1, b && b(t), p = i.render(i.props, i.state, i.context), i.state = i.__s;
          while (i.__d && ++E < 25);
        i.state = i.__s, i.getChildContext != null && (r = nn(nn({}, r), i.getChildContext())), d || i.getSnapshotBeforeUpdate == null || (_ = i.getSnapshotBeforeUpdate(u, l)), k = p != null && p.type === ol && p.key == null ? p.props.children : p, Ip(e, Array.isArray(k) ? k : [k], t, n, r, s, o, a, c, f), i.base = t.__e, t.__h = null, i.__h.length && a.push(i), g && (i.__E = i.__ = null), i.__e = !1;
      } else
        o == null && t.__v === n.__v ? (t.__k = n.__k, t.__e = n.__e) : t.__e = fb(n.__e, t, n, r, s, o, a, f);
    (p = me.diffed) && p(t);
  } catch (x) {
    t.__v = null, (f || o != null) && (t.__e = c, t.__h = !!f, o[o.indexOf(c)] = null), me.__e(x, t, n);
  }
}
function cb(e, t) {
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
function fb(e, t, n, r, s, o, a, c) {
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
    if (o = o && rl.call(e.childNodes), p = (d = n.props || Rp).dangerouslySetInnerHTML, i = u.dangerouslySetInnerHTML, !c) {
      if (o != null)
        for (d = {}, _ = 0; _ < e.attributes.length; _++)
          d[e.attributes[_].name] = e.attributes[_].value;
      (i || p) && (i && (p && i.__html == p.__html || i.__html === e.innerHTML) || (e.innerHTML = i && i.__html || ""));
    }
    if (lb(e, u, d, s, c), i)
      t.__k = [];
    else if (_ = t.props.children, Ip(e, Array.isArray(_) ? _ : [_], t, n, r, s && l !== "foreignObject", o, a, o ? o[0] : n.__k && uo(n, 0), c), o != null)
      for (_ = o.length; _--; )
        o[_] != null && Wp(o[_]);
    c || ("value" in u && (_ = u.value) !== void 0 && (_ !== e.value || l === "progress" && !_ || l === "option" && _ !== d.value) && Gi(e, "value", _, d.value, !1), "checked" in u && (_ = u.checked) !== void 0 && _ !== e.checked && Gi(e, "checked", _, d.checked, !1));
  }
  return e;
}
function zp(e, t, n) {
  try {
    typeof e == "function" ? e(t) : e.current = t;
  } catch (r) {
    me.__e(r, n);
  }
}
function Vp(e, t, n) {
  var r, s;
  if (me.unmount && me.unmount(e), (r = e.ref) && (r.current && r.current !== e.__e || zp(r, null, t)), (r = e.__c) != null) {
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
      r[s] && Vp(r[s], t, n || typeof e.type != "function");
  n || e.__e == null || Wp(e.__e), e.__ = e.__e = e.__d = void 0;
}
function ub(e, t, n) {
  return this.constructor(e, n);
}
rl = Hp.slice, me = { __e: function(e, t, n, r) {
  for (var s, o, a; t = t.__; )
    if ((s = t.__c) && !s.__)
      try {
        if ((o = s.constructor) && o.getDerivedStateFromError != null && (s.setState(o.getDerivedStateFromError(e)), a = s.__d), s.componentDidCatch != null && (s.componentDidCatch(e, r || {}), a = s.__d), a)
          return s.__E = s;
      } catch (c) {
        e = c;
      }
  throw e;
} }, Pp = 0, zr.prototype.setState = function(e, t) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = nn({}, this.state), typeof e == "function" && (e = e(nn({}, n), this.props)), e && nn(n, e), e != null && this.__v && (t && this._sb.push(t), nf(this));
}, zr.prototype.forceUpdate = function(e) {
  this.__v && (this.__e = !0, e && this.__h.push(e), nf(this));
}, zr.prototype.render = ol, Fr = [], qi.__r = 0;
var vn, mn;
class af extends zr {
  constructor(n) {
    var r;
    super(n);
    L(this, vn, 0);
    L(this, mn, null);
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
      r && (w(this, vn) && cancelAnimationFrame(w(this, vn)), H(this, vn, requestAnimationFrame(() => {
        const s = this.props.type === "horz" ? n.clientX - r.x : n.clientY - r.y;
        this.scroll(r.offset + s * this.props.scrollSize / this.props.clientSize), H(this, vn, 0);
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
    n && (H(this, mn, typeof n == "string" ? document : n.current), w(this, mn).addEventListener("wheel", this._handleWheel, { passive: !1 }));
  }
  componentWillUnmount() {
    document.removeEventListener("mousemove", this._handleMouseMove), document.removeEventListener("mouseup", this._handleMouseUp), w(this, mn) && w(this, mn).removeEventListener("wheel", this._handleWheel);
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
    return r === "horz" ? (_.height = s, _.width = n, g.width = this.barSize, g.left = Math.round(Math.min(d, u) * (n - g.width) / d)) : (_.width = s, _.height = n, g.height = this.barSize, g.top = Math.round(Math.min(d, u) * (n - g.height) / d)), /* @__PURE__ */ tf("div", {
      className: B("scrollbar", o, {
        "is-vert": r === "vert",
        "is-horz": r === "horz",
        "is-dragging": l
      }),
      style: _,
      onMouseDown: this._handleClick
    }, /* @__PURE__ */ tf("div", {
      className: "scrollbar-bar",
      style: g,
      onMouseDown: this._handleMouseDown
    }));
  }
}
vn = new WeakMap(), mn = new WeakMap();
function lf(e, t, n) {
  return e && (t && (e = Math.max(t, e)), n && (e = Math.min(n, e))), e;
}
function Yp({ col: e, className: t, height: n, row: r, onRenderCell: s, style: o, outerStyle: a, children: c, outerClass: f, ...p }) {
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
  }], g = ["dtable-cell-content", t], h = [(x = c != null ? c : (y = r.data) == null ? void 0 : y[e.name]) != null ? x : ""], v = s ? s(h, { row: r, col: e }, Y) : h, m = [], S = [], b = {}, E = {};
  let $ = "div";
  v == null || v.forEach((C) => {
    var R;
    if (typeof C == "object" && C && !xp(C) && ("html" in C || "className" in C || "style" in C || "attrs" in C || "children" in C || "tagName" in C)) {
      const I = C.outer ? m : S;
      C.html ? I.push(/* @__PURE__ */ Y("div", {
        className: B("dtable-cell-html", C.className),
        style: C.style,
        dangerouslySetInnerHTML: { __html: C.html },
        ...(R = C.attrs) != null ? R : {}
      })) : (C.style && Object.assign(C.outer ? i : l, C.style), C.className && (C.outer ? _ : g).push(C.className), C.children && I.push(C.children), C.attrs && Object.assign(C.outer ? b : E, C.attrs)), C.tagName && !C.outer && ($ = C.tagName);
    } else
      S.push(C);
  });
  const k = $;
  return /* @__PURE__ */ Y("div", {
    className: B(_),
    style: i,
    "data-col": e.name,
    ...p,
    ...b
  }, S.length > 0 && /* @__PURE__ */ Y(k, {
    className: B(g),
    style: l,
    ...E
  }, S), m);
}
function js({ row: e, className: t, top: n = 0, left: r = 0, width: s, height: o, cols: a, CellComponent: c = Yp, onRenderCell: f }) {
  return /* @__PURE__ */ Y("div", {
    className: B("dtable-cells", t),
    style: { top: n, left: r, width: s, height: o }
  }, a.map((p) => p.visible ? /* @__PURE__ */ Y(c, {
    key: p.name,
    col: p,
    row: e,
    onRenderCell: f
  }) : null));
}
function qp({
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
  CellComponent: u = Yp,
  onRenderCell: l,
  style: _,
  ...g
}) {
  let h = null;
  s != null && s.length && (h = /* @__PURE__ */ Y(js, {
    className: "dtable-fixed-left",
    cols: s,
    width: c,
    row: e,
    CellComponent: u,
    onRenderCell: l
  }));
  let v = null;
  a != null && a.length && (v = /* @__PURE__ */ Y(js, {
    className: "dtable-flexable",
    cols: a,
    left: c - d,
    width: Math.max(f, p),
    row: e,
    CellComponent: u,
    onRenderCell: l
  }));
  let m = null;
  o != null && o.length && (m = /* @__PURE__ */ Y(js, {
    className: "dtable-fixed-right",
    cols: o,
    left: c + f,
    width: i,
    row: e,
    CellComponent: u,
    onRenderCell: l
  }));
  const S = { top: n, height: r, lineHeight: `${r - 2}px`, ..._ };
  return /* @__PURE__ */ Y("div", {
    className: B("dtable-row", t),
    style: S,
    "data-id": e.id,
    ...g
  }, h, v, m);
}
function _b({ height: e, onRenderRow: t, ...n }) {
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
  }, /* @__PURE__ */ Y(qp, {
    ...r
  }));
}
function pb({
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
    className: B("dtable-rows", e),
    style: t
  }, r.map((p) => {
    const i = {
      className: `dtable-row-${p.index % 2 ? "odd" : "even"}`,
      row: p,
      top: p.top - a,
      height: o,
      ...f
    }, d = c == null ? void 0 : c({ props: i, row: p }, Y);
    return d && Object.assign(i, d), /* @__PURE__ */ Y(qp, {
      ...i
    });
  }));
}
const Xi = /* @__PURE__ */ new Map(), Ki = [];
function Gp(e, t) {
  const { name: n } = e;
  if (!(t != null && t.override) && Xi.has(n))
    throw new Error(`DTable: Plugin with name ${n} already exists`);
  Xi.set(n, e), (t == null ? void 0 : t.buildIn) && !Ki.includes(n) && Ki.push(n);
}
function cr(e, t) {
  Gp(e, t);
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
function Xp(e) {
  return Xi.delete(e);
}
function db(e) {
  if (typeof e == "string") {
    const t = Xi.get(e);
    return t || console.warn(`DTable: Cannot found plugin "${e}"`), t;
  }
  if (typeof e == "function" && "plugin" in e)
    return e.plugin;
  if (typeof e == "object")
    return e;
  console.warn("DTable: Invalid plugin", e);
}
function Kp(e, t, n) {
  return t.forEach((r) => {
    var o;
    if (!r)
      return;
    const s = db(r);
    !s || n.has(s.name) || ((o = s.plugins) != null && o.length && Kp(e, s.plugins, n), e.push(s), n.add(s.name));
  }), e;
}
function hb(e = [], t = !0) {
  return t && Ki.length && e.unshift(...Ki), e != null && e.length ? Kp([], e, /* @__PURE__ */ new Set()) : [];
}
function cf() {
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
var gn, Yn, Bt, it, Ft, be, qe, st, qn, Eo, Co, $t, Gn, Xn, ss, Jp, as, Zp, ls, Qp, cs, ed, Oo, oa, fs, us, Ao, Mo, _s, ps, ds, td, hs, nd, vs, rd;
class ra extends Br {
  constructor(n) {
    var r;
    super(n);
    L(this, ss);
    L(this, as);
    L(this, ls);
    L(this, cs);
    L(this, Oo);
    L(this, ds);
    L(this, hs);
    L(this, vs);
    N(this, "ref", tb());
    L(this, gn, 0);
    L(this, Yn, void 0);
    L(this, Bt, !1);
    L(this, it, void 0);
    L(this, Ft, void 0);
    L(this, be, []);
    L(this, qe, void 0);
    L(this, st, /* @__PURE__ */ new Map());
    L(this, qn, {});
    L(this, Eo, void 0);
    L(this, Co, []);
    N(this, "updateLayout", () => {
      w(this, gn) && cancelAnimationFrame(w(this, gn)), H(this, gn, requestAnimationFrame(() => {
        H(this, qe, void 0), this.forceUpdate(), H(this, gn, 0);
      }));
    });
    L(this, $t, (n, r) => {
      r = r || n.type;
      const s = w(this, st).get(r);
      if (!!(s != null && s.length)) {
        for (const o of s)
          if (o.call(this, n) === !1) {
            n.stopPropagation(), n.preventDefault();
            break;
          }
      }
    });
    L(this, Gn, (n) => {
      w(this, $t).call(this, n, `window_${n.type}`);
    });
    L(this, Xn, (n) => {
      w(this, $t).call(this, n, `document_${n.type}`);
    });
    L(this, fs, (n, r) => {
      if (this.options.onRenderRow) {
        const s = this.options.onRenderRow.call(this, n, r);
        s && Object.assign(n.props, s);
      }
      return w(this, be).forEach((s) => {
        if (s.onRenderRow) {
          const o = s.onRenderRow.call(this, n, r);
          o && Object.assign(n.props, o);
        }
      }), n.props;
    });
    L(this, us, (n, r) => (this.options.onRenderHeaderRow && (n.props = this.options.onRenderHeaderRow.call(this, n, r)), w(this, be).forEach((s) => {
      s.onRenderHeaderRow && (n.props = s.onRenderHeaderRow.call(this, n, r));
    }), n.props));
    L(this, Ao, (n, r, s) => {
      const { row: o, col: a } = r;
      n[0] = this.getCellValue(o, a);
      const c = o.id === "HEADER" ? "onRenderHeaderCell" : "onRenderCell";
      return a.setting[c] && (n = a.setting[c].call(this, n, r, s)), this.options[c] && (n = this.options[c].call(this, n, r, s)), w(this, be).forEach((f) => {
        f[c] && (n = f[c].call(this, n, r, s));
      }), n;
    });
    L(this, Mo, (n, r) => {
      r === "horz" ? this.scroll({ scrollLeft: n }) : this.scroll({ scrollTop: n });
    });
    L(this, _s, (n) => {
      var c, f, p, i, d;
      const r = this.getPointerInfo(n);
      if (!r)
        return;
      const { rowID: s, colName: o, cellElement: a } = r;
      if (s === "HEADER")
        a && ((c = this.options.onHeaderCellClick) == null || c.call(this, n, { colName: o, element: a }), w(this, be).forEach((u) => {
          var l;
          (l = u.onHeaderCellClick) == null || l.call(this, n, { colName: o, element: a });
        }));
      else {
        const { rowElement: u } = r, l = this.layout.visibleRows.find((_) => _.id === s);
        if (a) {
          if (((f = this.options.onCellClick) == null ? void 0 : f.call(this, n, { colName: o, rowID: s, rowInfo: l, element: a, rowElement: u })) === !0)
            return;
          for (const _ of w(this, be))
            if (((p = _.onCellClick) == null ? void 0 : p.call(this, n, { colName: o, rowID: s, rowInfo: l, element: a, rowElement: u })) === !0)
              return;
        }
        if (((i = this.options.onRowClick) == null ? void 0 : i.call(this, n, { rowID: s, rowInfo: l, element: u })) === !0)
          return;
        for (const _ of w(this, be))
          if (((d = _.onRowClick) == null ? void 0 : d.call(this, n, { rowID: s, rowInfo: l, element: u })) === !0)
            return;
      }
    });
    L(this, ps, (n) => {
      const r = n.key.toLowerCase();
      if (["pageup", "pagedown", "home", "end"].includes(r))
        return !this.scroll({ to: r.replace("page", "") });
    });
    H(this, Yn, (r = n.id) != null ? r : `dtable-${sb(10)}`), this.state = { scrollTop: 0, scrollLeft: 0, renderCount: 0 }, H(this, Ft, Object.freeze(hb(n.plugins))), w(this, Ft).forEach((s) => {
      var f;
      const { methods: o, data: a, state: c } = s;
      o && Object.entries(o).forEach(([p, i]) => {
        typeof i == "function" && Object.assign(this, { [p]: i.bind(this) });
      }), a && Object.assign(w(this, qn), a.call(this)), c && Object.assign(this.state, c.call(this)), (f = s.onCreate) == null || f.call(this, s);
    });
  }
  get options() {
    var n;
    return ((n = w(this, qe)) == null ? void 0 : n.options) || w(this, it) || cf();
  }
  get plugins() {
    return w(this, be);
  }
  get layout() {
    return w(this, qe);
  }
  get id() {
    return w(this, Yn);
  }
  get data() {
    return w(this, qn);
  }
  get parent() {
    var n, r;
    return (r = this.props.parent) != null ? r : (n = this.ref.current) == null ? void 0 : n.parentElement;
  }
  componentWillReceiveProps() {
    H(this, it, void 0);
  }
  componentDidMount() {
    if (w(this, Bt) ? this.forceUpdate() : te(this, Oo, oa).call(this), w(this, be).forEach((n) => {
      let { events: r } = n;
      !r || (typeof r == "function" && (r = r.call(this)), Object.entries(r).forEach(([s, o]) => {
        o && this.on(s, o);
      }));
    }), this.on("click", w(this, _s)), this.on("keydown", w(this, ps)), this.options.responsive) {
      if (typeof ResizeObserver < "u") {
        const { parent: n } = this;
        if (n) {
          const r = new ResizeObserver(this.updateLayout);
          r.observe(n), H(this, Eo, r);
        }
      }
      this.on("window_resize", this.updateLayout);
    }
    w(this, be).forEach((n) => {
      var r;
      (r = n.onMounted) == null || r.call(this);
    });
  }
  componentDidUpdate() {
    w(this, Bt) ? te(this, Oo, oa).call(this) : w(this, be).forEach((n) => {
      var r;
      (r = n.onUpdated) == null || r.call(this);
    });
  }
  componentWillUnmount() {
    var r;
    (r = w(this, Eo)) == null || r.disconnect();
    const { current: n } = this.ref;
    if (n)
      for (const s of w(this, st).keys())
        s.startsWith("window_") ? window.removeEventListener(s.replace("window_", ""), w(this, Gn)) : s.startsWith("document_") ? document.removeEventListener(s.replace("document_", ""), w(this, Xn)) : n.removeEventListener(s, w(this, $t));
    w(this, be).forEach((s) => {
      var o;
      (o = s.onUnmounted) == null || o.call(this);
    }), w(this, Ft).forEach((s) => {
      var o;
      (o = s.onDestory) == null || o.call(this);
    }), H(this, qn, {}), w(this, st).clear();
  }
  on(n, r, s) {
    var a;
    s && (n = `${s}_${n}`);
    const o = w(this, st).get(n);
    o ? o.push(r) : (w(this, st).set(n, [r]), n.startsWith("window_") ? window.addEventListener(n.replace("window_", ""), w(this, Gn)) : n.startsWith("document_") ? document.addEventListener(n.replace("document_", ""), w(this, Xn)) : (a = this.ref.current) == null || a.addEventListener(n, w(this, $t)));
  }
  off(n, r, s) {
    var c;
    s && (n = `${s}_${n}`);
    const o = w(this, st).get(n);
    if (!o)
      return;
    const a = o.indexOf(r);
    a >= 0 && o.splice(a, 1), o.length || (w(this, st).delete(n), n.startsWith("window_") ? window.removeEventListener(n.replace("window_", ""), w(this, Gn)) : n.startsWith("document_") ? document.removeEventListener(n.replace("document_", ""), w(this, Xn)) : (c = this.ref.current) == null || c.removeEventListener(n, w(this, $t)));
  }
  emitCustomEvent(n, r) {
    w(this, $t).call(this, r instanceof Event ? r : new CustomEvent(n, { detail: r }), n);
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
    if (!w(this, it))
      return;
    typeof n == "function" && (r = n, n = {});
    const { dirtyType: s, state: o } = n;
    if (s === "layout")
      H(this, qe, void 0);
    else if (s === "options") {
      if (H(this, it, void 0), !w(this, qe))
        return;
      H(this, qe, void 0);
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
    return (o = To(w(this, Co), n, r, s, this.options.lang)) != null ? o : `{i18n:${n}}`;
  }
  render() {
    var l;
    const n = te(this, vs, rd).call(this), { className: r, rowHover: s, colHover: o, cellHover: a, bordered: c, striped: f, scrollbarHover: p } = this.options, i = { width: n == null ? void 0 : n.width, height: n == null ? void 0 : n.height }, d = ["dtable", r, {
      "dtable-hover-row": s,
      "dtable-hover-col": o,
      "dtable-hover-cell": a,
      "dtable-bordered": c,
      "dtable-striped": f,
      "dtable-scrolled-down": ((l = n == null ? void 0 : n.scrollTop) != null ? l : 0) > 0,
      "scrollbar-hover": p
    }], u = [];
    return n && w(this, be).forEach((_) => {
      var h;
      const g = (h = _.onRender) == null ? void 0 : h.call(this, n);
      !g || (g.style && Object.assign(i, g.style), g.className && d.push(g.className), g.children && u.push(g.children));
    }), /* @__PURE__ */ Y("div", {
      id: w(this, Yn),
      className: B(d),
      style: i,
      ref: this.ref,
      tabIndex: -1
    }, n && te(this, ss, Jp).call(this, n), n && te(this, as, Zp).call(this, n), n && te(this, ls, Qp).call(this, n), n && te(this, cs, ed).call(this, n));
  }
}
gn = new WeakMap(), Yn = new WeakMap(), Bt = new WeakMap(), it = new WeakMap(), Ft = new WeakMap(), be = new WeakMap(), qe = new WeakMap(), st = new WeakMap(), qn = new WeakMap(), Eo = new WeakMap(), Co = new WeakMap(), $t = new WeakMap(), Gn = new WeakMap(), Xn = new WeakMap(), ss = new WeakSet(), Jp = function(n) {
  const { header: r, colsInfo: s, headerHeight: o, scrollLeft: a } = n;
  if (!r)
    return null;
  if (r === !0)
    return /* @__PURE__ */ Y(_b, {
      scrollLeft: a,
      height: o,
      onRenderCell: w(this, Ao),
      onRenderRow: w(this, us),
      ...s
    });
  const c = Array.isArray(r) ? r : [r];
  return /* @__PURE__ */ Y(Bs, {
    className: "dtable-header",
    style: { height: o },
    renders: c,
    generateArgs: [n],
    generatorThis: this
  });
}, as = new WeakSet(), Zp = function(n) {
  const { headerHeight: r, rowsHeight: s, visibleRows: o, rowHeight: a, colsInfo: c, scrollLeft: f, scrollTop: p } = n;
  return /* @__PURE__ */ Y(pb, {
    top: r,
    height: s,
    rows: o,
    rowHeight: a,
    scrollLeft: f,
    scrollTop: p,
    onRenderCell: w(this, Ao),
    onRenderRow: w(this, fs),
    ...c
  });
}, ls = new WeakSet(), Qp = function(n) {
  const { footer: r } = n;
  if (!r)
    return null;
  const s = typeof r == "function" ? r.call(this, n) : Array.isArray(r) ? r : [r];
  return /* @__PURE__ */ Y(Bs, {
    className: "dtable-footer",
    style: { height: n.footerHeight, top: n.rowsHeight + n.headerHeight },
    renders: s,
    generateArgs: [n],
    generatorThis: this,
    generators: n.footerGenerators
  });
}, cs = new WeakSet(), ed = function(n) {
  const r = [], { scrollLeft: s, colsInfo: o, scrollTop: a, rowsHeight: c, rowsHeightTotal: f, footerHeight: p } = n, { scrollColsWidth: i, scrollWidth: d } = o, { scrollbarSize: u = 12, horzScrollbarPos: l } = this.options;
  return i > d && r.push(
    /* @__PURE__ */ Y(af, {
      key: "horz",
      type: "horz",
      scrollPos: s,
      scrollSize: i,
      clientSize: d,
      onScroll: w(this, Mo),
      left: o.fixedLeftWidth,
      bottom: (l === "inside" ? 0 : -u) + p,
      size: u,
      wheelContainer: this.ref
    })
  ), f > c && r.push(
    /* @__PURE__ */ Y(af, {
      key: "vert",
      type: "vert",
      scrollPos: a,
      scrollSize: f,
      clientSize: c,
      onScroll: w(this, Mo),
      right: 0,
      size: u,
      top: n.headerHeight,
      wheelContainer: this.ref
    })
  ), r.length ? r : null;
}, Oo = new WeakSet(), oa = function() {
  var n;
  H(this, Bt, !1), (n = this.options.afterRender) == null || n.call(this), w(this, be).forEach((r) => {
    var s;
    return (s = r.afterRender) == null ? void 0 : s.call(this);
  });
}, fs = new WeakMap(), us = new WeakMap(), Ao = new WeakMap(), Mo = new WeakMap(), _s = new WeakMap(), ps = new WeakMap(), ds = new WeakSet(), td = function() {
  if (w(this, it))
    return !1;
  const r = { ...cf(), ...w(this, Ft).reduce((s, o) => {
    const { defaultOptions: a } = o;
    return a && Object.assign(s, a), s;
  }, {}), ...this.props };
  return H(this, it, r), H(this, be, w(this, Ft).reduce((s, o) => {
    const { when: a, options: c } = o;
    return (!a || a(r)) && (s.push(o), c && Object.assign(r, typeof c == "function" ? c.call(this, r) : c)), s;
  }, [])), H(this, Co, [this.options.i18n, ...this.plugins.map((s) => s.i18n)].filter(Boolean)), !0;
}, hs = new WeakSet(), nd = function() {
  var K, Q;
  const { plugins: n } = this;
  let r = w(this, it);
  const s = {
    flex: /* @__PURE__ */ Y("div", {
      style: "flex:auto"
    }),
    divider: /* @__PURE__ */ Y("div", {
      style: "width:1px;margin:var(--space);background:var(--color-border);height:50%"
    })
  };
  n.forEach((P) => {
    var X;
    const V = (X = P.beforeLayout) == null ? void 0 : X.call(this, r);
    V && (r = { ...r, ...V }), Object.assign(s, P.footer);
  });
  const { defaultColWidth: o, minColWidth: a, maxColWidth: c } = r, f = [], p = [], i = [], d = {}, u = [], l = [];
  let _ = 0, g = 0, h = 0;
  r.cols.forEach((P) => {
    var At, Ue, Be;
    if (P.hidden)
      return;
    const {
      name: V,
      type: X = "",
      fixed: q = !1,
      flex: J = !1,
      width: ce = o,
      minWidth: le = a,
      maxWidth: $e = c,
      ...et
    } = P, ee = {
      name: V,
      type: X,
      setting: {
        name: V,
        type: X,
        fixed: q,
        flex: J,
        width: ce,
        minWidth: le,
        maxWidth: $e,
        ...et
      },
      flex: q ? 0 : J === !0 ? 1 : typeof J == "number" ? J : 0,
      left: 0,
      width: lf(ce, le, $e),
      realWidth: 0,
      visible: !0,
      index: u.length
    };
    n.forEach((Mt) => {
      var ne, ye;
      const tt = (ne = Mt.colTypes) == null ? void 0 : ne[X];
      if (tt) {
        const Fe = typeof tt == "function" ? tt(ee) : tt;
        Fe && Object.assign(ee.setting, Fe);
      }
      (ye = Mt.onAddCol) == null || ye.call(this, ee);
    }), ee.width = lf((At = ee.setting.width) != null ? At : ee.width, (Ue = ee.setting.minWidth) != null ? Ue : le, (Be = ee.setting.maxWidth) != null ? Be : $e), ee.realWidth = ee.realWidth || ee.width, q === "left" ? (ee.left = _, _ += ee.width, f.push(ee)) : q === "right" ? (ee.left = g, g += ee.width, p.push(ee)) : (ee.left = h, h += ee.width, i.push(ee)), ee.flex && l.push(ee), u.push(ee), d[ee.name] = ee;
  });
  let v = r.width, m = 0;
  const S = _ + h + g;
  if (typeof v == "function" && (v = v.call(this, S)), v === "auto")
    m = S;
  else if (v === "100%") {
    const { parent: P } = this;
    if (P)
      m = P.clientWidth;
    else {
      m = 0, H(this, Bt, !0);
      return;
    }
  } else
    m = v != null ? v : 0;
  const { data: b, rowKey: E = "id", rowHeight: $ } = r, k = [], y = (P, V, X) => {
    var J, ce;
    const q = { data: X != null ? X : { [E]: P }, id: P, index: k.length, top: 0 };
    if (X || (q.lazy = !0), k.push(q), ((J = r.onAddRow) == null ? void 0 : J.call(this, q, V)) !== !1) {
      for (const le of n)
        if (((ce = le.onAddRow) == null ? void 0 : ce.call(this, q, V)) === !1)
          return;
    }
  };
  if (typeof b == "number")
    for (let P = 0; P < b; P++)
      y(`${P}`, P);
  else
    Array.isArray(b) && b.forEach((P, V) => {
      var X;
      typeof P == "object" ? y(`${(X = P[E]) != null ? X : ""}`, V, P) : y(`${P != null ? P : ""}`, V);
    });
  let x = k;
  const C = {};
  if (r.onAddRows) {
    const P = r.onAddRows.call(this, x);
    P && (x = P);
  }
  for (const P of n) {
    const V = (K = P.onAddRows) == null ? void 0 : K.call(this, x);
    V && (x = V);
  }
  x.forEach((P, V) => {
    C[P.id] = P, P.index = V, P.top = P.index * $;
  });
  const { header: R, footer: I } = r, T = R ? r.headerHeight || $ : 0, M = I ? r.footerHeight || $ : 0;
  let O = r.height, D = 0;
  const A = x.length * $, j = T + M + A;
  if (typeof O == "function" && (O = O.call(this, j)), O === "auto")
    D = j;
  else if (typeof O == "object")
    D = Math.min(O.max, Math.max(O.min, j));
  else if (O === "100%") {
    const { parent: P } = this;
    if (P)
      D = P.clientHeight;
    else {
      D = 0, H(this, Bt, !0);
      return;
    }
  } else
    D = O;
  const W = D - T - M, F = m - _ - g, G = {
    options: r,
    allRows: k,
    width: m,
    height: D,
    rows: x,
    rowsMap: C,
    rowHeight: $,
    rowsHeight: W,
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
  z && Object.assign(G, z), n.forEach((P) => {
    if (P.onLayout) {
      const V = P.onLayout.call(this, G);
      V && Object.assign(G, V);
    }
  }), H(this, qe, G);
}, vs = new WeakSet(), rd = function() {
  (te(this, ds, td).call(this) || !w(this, qe)) && te(this, hs, nd).call(this);
  const { layout: n } = this;
  if (!n)
    return;
  let { scrollLeft: r } = this.state;
  const { flexCols: s, colsInfo: { scrollCols: o, scrollWidth: a, scrollColsWidth: c } } = n;
  if (s.length) {
    const S = a - c;
    if (S > 0) {
      const b = s.reduce(($, k) => $ + k.flex, 0);
      let E = 0;
      s.forEach(($) => {
        const k = Math.min(S - E, Math.ceil(S * ($.flex / b)));
        $.realWidth = k + $.width, E += $.realWidth;
      });
    } else
      s.forEach((b) => {
        b.realWidth = b.width;
      });
  }
  r = Math.min(Math.max(0, c - a), r);
  let f = 0;
  o.forEach((S) => {
    S.left = f, f += S.realWidth, S.visible = S.left + S.realWidth >= r && S.left <= r + a;
  });
  const { rowsHeightTotal: p, rowsHeight: i, rows: d, rowHeight: u } = n, l = Math.min(Math.max(0, p - i), this.state.scrollTop), _ = Math.floor(l / u), g = l + i, h = Math.min(d.length, Math.ceil(g / u)), v = [], { rowDataGetter: m } = this.options;
  for (let S = _; S < h; S++) {
    const b = d[S];
    b.lazy && m && (b.data = m([b.id])[0], b.lazy = !1), v.push(b);
  }
  return n.visibleRows = v, n.scrollTop = l, n.scrollLeft = r, n;
}, N(ra, "addPlugin", Gp), N(ra, "removePlugin", Xp);
function ff(e, t) {
  t !== void 0 ? e.data.hoverCol = t : t = e.data.hoverCol;
  const { current: n } = e.ref;
  if (!n)
    return;
  const r = "dtable-col-hover";
  n.querySelectorAll(`.${r}`).forEach((s) => s.classList.remove(r)), typeof t == "string" && t.length && n.querySelectorAll(`.dtable-cell[data-col="${t}"]`).forEach((s) => s.classList.add(r));
}
const vb = {
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
      ff(this, r);
    },
    mouseleave() {
      ff(this, !1);
    }
  }
}, mb = cr(vb, { buildIn: !0 });
function gb(e, t) {
  var a, c;
  typeof e == "boolean" && (t = e, e = void 0);
  const n = this.state.checkedRows, r = {}, { canRowCheckable: s } = this.options, o = (f, p) => {
    s && !s.call(this, f) || !!n[f] === p || (p ? n[f] = !0 : delete n[f], r[f] = p);
  };
  if (e === void 0 ? (t === void 0 && (t = !od.call(this)), (a = this.layout) == null || a.allRows.forEach(({ id: f }) => {
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
function yb(e) {
  var t;
  return (t = this.state.checkedRows[e]) != null ? t : !1;
}
function od() {
  var n, r;
  const e = this.getChecks().length, { canRowCheckable: t } = this.options;
  return t ? e === ((n = this.layout) == null ? void 0 : n.allRows.reduce((s, o) => s + (t.call(this, o.id) ? 1 : 0), 0)) : e === ((r = this.layout) == null ? void 0 : r.allRows.length);
}
function bb() {
  return Object.keys(this.state.checkedRows);
}
const wb = {
  name: "checkable",
  defaultOptions: { checkable: !0 },
  when: (e) => !!e.checkable,
  state() {
    return { checkedRows: {} };
  },
  methods: {
    toggleCheckRows: gb,
    isRowChecked: yb,
    isAllRowChecked: od,
    getChecks: bb
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
      return { className: B(e.className, "is-checked") };
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
}, $b = cr(wb);
var id = /* @__PURE__ */ ((e) => (e.unknown = "", e.collapsed = "collapsed", e.expanded = "expanded", e.hidden = "hidden", e.normal = "normal", e))(id || {});
function ia(e) {
  const t = this.data.nestedMap.get(e);
  if (!t || t.state !== "")
    return t != null ? t : { state: "normal", level: -1 };
  if (!t.parent && !t.children)
    return t.state = "normal", t;
  const n = this.state.collapsedRows, r = t.children && n && n[e];
  let s = !1, { parent: o } = t;
  for (; o; ) {
    const a = ia.call(this, o);
    if (a.state !== "expanded") {
      s = !0;
      break;
    }
    o = a.parent;
  }
  return t.state = s ? "hidden" : r ? "collapsed" : t.children ? "expanded" : "normal", t.level = t.parent ? ia.call(this, t.parent).level + 1 : 0, t;
}
function kb(e, t) {
  var s;
  let n = (s = this.state.collapsedRows) != null ? s : {};
  const { nestedMap: r } = this.data;
  if (e === "HEADER")
    if (t === void 0 && (t = !sd.call(this)), t) {
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
function sd() {
  const e = this.data.nestedMap.values();
  for (const t of e)
    if (t.state === "expanded")
      return !1;
  return !0;
}
function ad(e, t = 0, n, r = 0) {
  var s;
  n || (n = [...e.keys()]);
  for (const o of n) {
    const a = e.get(o);
    !a || (a.level === r && (a.order = t++), (s = a.children) != null && s.length && (t = ad(e, t, a.children, r + 1)));
  }
  return t;
}
function ld(e, t, n, r) {
  const s = e.getNestedRowInfo(t);
  return !s || s.state === "" || !s.children || s.children.forEach((o) => {
    r[o] = n, ld(e, o, n, r);
  }), s;
}
function cd(e, t, n, r, s) {
  var c;
  const o = e.getNestedRowInfo(t);
  if (!o || o.state === "")
    return;
  ((c = o.children) == null ? void 0 : c.every((f) => {
    const p = !!(r[f] !== void 0 ? r[f] : s[f]);
    return n === p;
  })) && (r[t] = n), o.parent && cd(e, o.parent, n, r, s);
}
const xb = {
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
        const a = ld(this, s, o, r);
        a != null && a.parent && cd(this, a.parent, o, r, n);
      }), r;
    }
  },
  when: (e) => !!e.nested,
  data() {
    return { nestedMap: /* @__PURE__ */ new Map() };
  },
  methods: {
    toggleRow: kb,
    isAllCollapsed: sd,
    getNestedRowInfo: ia
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
    return e = e.filter((t) => this.getNestedRowInfo(t.id).state !== "hidden"), ad(this.data.nestedMap), e.sort((t, n) => {
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
      className: B(e.className, `is-${n.state}`),
      "data-parent": n.parent
    };
  },
  onRenderHeaderRow({ props: e }) {
    return e.className = B(e.className, `is-${this.isAllCollapsed() ? "collapsed" : "expanded"}`), e;
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
}, Sb = cr(xb);
const Eb = {
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
        const { linkTemplate: r = "", linkProps: s } = t.setting, o = Oe(r, n.data);
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
            return p && (f = { className: a, ...p, ...f }), Oe(s, f);
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
        return typeof r == "function" ? e[0] = s === "html" ? { html: r(o) } : r(o) : s === "datetime" ? e[0] = ea(o, r) : s === "html" ? e[0] = { html: Oe(r, o) } : e[0] = Oe(r, o), e;
      }
    }
  }
}, Cb = cr(Eb, { buildIn: !0 }), Ob = {
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
}, Ab = cr(Ob, { buildIn: !0 }), Mb = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  colHover: mb,
  checkable: $b,
  NestedRowState: id,
  nested: Sb,
  rich: Cb,
  sortType: Ab
}, Symbol.toStringTag, { value: "Module" }));
class pr extends Qe {
}
N(pr, "NAME", "dtable"), N(pr, "Component", ra), N(pr, "definePlugin", cr), N(pr, "removePlugin", Xp), N(pr, "plugins", Mb);
var at, Se;
class Tb {
  constructor(t) {
    L(this, at, void 0);
    L(this, Se, void 0);
    H(this, at, t), H(this, Se, document.querySelector(t.getAttribute("data-target")) || document.querySelector(t.getAttribute("data-tab")) || document.querySelector(t.getAttribute("href")));
  }
  showTarget() {
    this.addActive(w(this, at).parentElement.parentElement, w(this, at).parentElement), this.addActive(w(this, Se).parentElement, w(this, Se)), w(this, Se).dispatchEvent(new CustomEvent("show.zui3.tab"));
  }
  show() {
    H(this, Se, w(this, at)), this.addActive(w(this, Se).parentElement, w(this, Se)), H(this, at, document.querySelector(`[href='#${w(this, Se).getAttribute("id")}']`) || document.querySelector(`[data-tab='#${w(this, Se).getAttribute("id")}']`) || document.querySelector(`[data-target='#${w(this, Se).getAttribute("id")}']`)), this.addActive(w(this, at).parentElement.parentElement, w(this, at).parentElement);
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
at = new WeakMap(), Se = new WeakMap();
document.addEventListener("click", function(e) {
  e.target instanceof HTMLElement && (e.target.dataset.toggle === "tab" || e.target.getAttribute("data-tab")) && (e.preventDefault(), new Tb(e.target).showTarget());
});
export {
  gl as ActionMenu,
  bl as ActionMenuNested,
  Ql as Avatar,
  ec as BtnGroup,
  El as Button,
  Ce as ContextMenu,
  pr as DTable,
  lt as Datepicker,
  ke as Dropdown,
  aa as EventBus,
  Cl as Menu,
  jl as Messager,
  Ee as Modal,
  Wr as ModalTrigger,
  Hc as Nav,
  Tb as NavTabs,
  Ic as Pager,
  Vl as ProgressCircle,
  gt as TIME_DAY,
  Uc as Toolbar,
  ct as Tooltip,
  kd as addI18nMap,
  Pb as browser,
  jc as calculateTimestamp,
  Lb as convertBytes,
  Ne as createDate,
  Nb as formatBytes,
  ea as formatDate,
  Ub as formatDateSpan,
  Oe as formatString,
  wd as getLangCode,
  Bb as getTimeBeforeDesc,
  To as i18n,
  Ib as isDBY,
  Rs as isObject,
  Lo as isSameDay,
  Vg as isSameMonth,
  Rb as isSameWeek,
  Wc as isSameYear,
  Hb as isToday,
  jb as isTomorrow,
  Wb as isYesterday,
  Us as mergeDeep,
  Is as nativeEvents,
  $d as setLangCode,
  ch as store
};
