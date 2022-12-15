var w_ = Object.defineProperty;
var $_ = (e, t, n) => t in e ? w_(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var N = (e, t, n) => ($_(e, typeof t != "symbol" ? t + "" : t, n), n), Ri = (e, t, n) => {
  if (!t.has(e))
    throw TypeError("Cannot " + n);
};
var w = (e, t, n) => (Ri(e, t, "read from private field"), n ? n.call(e) : t.get(e)), L = (e, t, n) => {
  if (t.has(e))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(e) : t.set(e, n);
}, H = (e, t, n, r) => (Ri(e, t, "write to private field"), r ? r.call(e, n) : t.set(e, n), n);
var he = (e, t, n) => (Ri(e, t, "access private method"), n);
var ki, ne, Kl, Jl, Zn, ra, Mo = {}, Zl = [], k_ = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function Pt(e, t) {
  for (var n in t)
    e[n] = t[n];
  return e;
}
function Ql(e) {
  var t = e.parentNode;
  t && t.removeChild(e);
}
function xi(e, t, n) {
  var r, s, o, a = {};
  for (o in t)
    o == "key" ? r = t[o] : o == "ref" ? s = t[o] : a[o] = t[o];
  if (arguments.length > 2 && (a.children = arguments.length > 3 ? ki.call(arguments, 2) : n), typeof e == "function" && e.defaultProps != null)
    for (o in e.defaultProps)
      a[o] === void 0 && (a[o] = e.defaultProps[o]);
  return co(e, a, r, s, null);
}
function co(e, t, n, r, s) {
  var o = { type: e, props: t, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: s == null ? ++Kl : s };
  return s == null && ne.vnode != null && ne.vnode(o), o;
}
function x_() {
  return { current: null };
}
function Ei(e) {
  return e.children;
}
function fo(e, t) {
  this.props = e, this.context = t;
}
function kr(e, t) {
  if (t == null)
    return e.__ ? kr(e.__, e.__.__k.indexOf(e) + 1) : null;
  for (var n; t < e.__k.length; t++)
    if ((n = e.__k[t]) != null && n.__e != null)
      return n.__e;
  return typeof e.type == "function" ? kr(e) : null;
}
function ec(e) {
  var t, n;
  if ((e = e.__) != null && e.__c != null) {
    for (e.__e = e.__c.base = null, t = 0; t < e.__k.length; t++)
      if ((n = e.__k[t]) != null && n.__e != null) {
        e.__e = e.__c.base = n.__e;
        break;
      }
    return ec(e);
  }
}
function oa(e) {
  (!e.__d && (e.__d = !0) && Zn.push(e) && !Ao.__r++ || ra !== ne.debounceRendering) && ((ra = ne.debounceRendering) || setTimeout)(Ao);
}
function Ao() {
  for (var e; Ao.__r = Zn.length; )
    e = Zn.sort(function(t, n) {
      return t.__v.__b - n.__v.__b;
    }), Zn = [], e.some(function(t) {
      var n, r, s, o, a, c;
      t.__d && (a = (o = (n = t).__v).__e, (c = n.__P) && (r = [], (s = Pt({}, o)).__v = o.__v + 1, ss(c, o, s, n.__n, c.ownerSVGElement !== void 0, o.__h != null ? [a] : null, r, a == null ? kr(o) : a, o.__h), oc(r, o), o.__e != a && ec(o)));
    });
}
function tc(e, t, n, r, s, o, a, c, f, _) {
  var i, d, u, l, p, g, h, v = r && r.__k || Zl, m = v.length;
  for (n.__k = [], i = 0; i < t.length; i++)
    if ((l = n.__k[i] = (l = t[i]) == null || typeof l == "boolean" ? null : typeof l == "string" || typeof l == "number" || typeof l == "bigint" ? co(null, l, null, null, l) : Array.isArray(l) ? co(Ei, { children: l }, null, null, null) : l.__b > 0 ? co(l.type, l.props, l.key, l.ref ? l.ref : null, l.__v) : l) != null) {
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
      ss(e, l, u = u || Mo, s, o, a, c, f, _), p = l.__e, (d = l.ref) && u.ref != d && (h || (h = []), u.ref && h.push(u.ref, null, l), h.push(d, l.__c || p, l)), p != null ? (g == null && (g = p), typeof l.type == "function" && l.__k === u.__k ? l.__d = f = nc(l, f, e) : f = rc(e, l, u, v, p, f), typeof n.type == "function" && (n.__d = f)) : f && u.__e == f && f.parentNode != e && (f = kr(u));
    }
  for (n.__e = g, i = m; i--; )
    v[i] != null && sc(v[i], v[i]);
  if (h)
    for (i = 0; i < h.length; i++)
      ic(h[i], h[++i], h[++i]);
}
function nc(e, t, n) {
  for (var r, s = e.__k, o = 0; s && o < s.length; o++)
    (r = s[o]) && (r.__ = e, t = typeof r.type == "function" ? nc(r, t, n) : rc(n, r, r, s, r.__e, t));
  return t;
}
function rc(e, t, n, r, s, o) {
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
function E_(e, t, n, r, s) {
  var o;
  for (o in n)
    o === "children" || o === "key" || o in t || Do(e, o, null, n[o], r);
  for (o in t)
    s && typeof t[o] != "function" || o === "children" || o === "key" || o === "value" || o === "checked" || n[o] === t[o] || Do(e, o, t[o], n[o], r);
}
function ia(e, t, n) {
  t[0] === "-" ? e.setProperty(t, n) : e[t] = n == null ? "" : typeof n != "number" || k_.test(t) ? n : n + "px";
}
function Do(e, t, n, r, s) {
  var o;
  e:
    if (t === "style")
      if (typeof n == "string")
        e.style.cssText = n;
      else {
        if (typeof r == "string" && (e.style.cssText = r = ""), r)
          for (t in r)
            n && t in n || ia(e.style, t, "");
        if (n)
          for (t in n)
            r && n[t] === r[t] || ia(e.style, t, n[t]);
      }
    else if (t[0] === "o" && t[1] === "n")
      o = t !== (t = t.replace(/Capture$/, "")), t = t.toLowerCase() in e ? t.toLowerCase().slice(2) : t.slice(2), e.l || (e.l = {}), e.l[t + o] = n, n ? r || e.addEventListener(t, o ? aa : sa, o) : e.removeEventListener(t, o ? aa : sa, o);
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
function sa(e) {
  this.l[e.type + !1](ne.event ? ne.event(e) : e);
}
function aa(e) {
  this.l[e.type + !0](ne.event ? ne.event(e) : e);
}
function ss(e, t, n, r, s, o, a, c, f) {
  var _, i, d, u, l, p, g, h, v, m, k, b, x, $, S, y = t.type;
  if (t.constructor !== void 0)
    return null;
  n.__h != null && (f = n.__h, c = t.__e = n.__e, t.__h = null, o = [c]), (_ = ne.__b) && _(t);
  try {
    e:
      if (typeof y == "function") {
        if (h = t.props, v = (_ = y.contextType) && r[_.__c], m = _ ? v ? v.props.value : _.__ : r, n.__c ? g = (i = t.__c = n.__c).__ = i.__E : ("prototype" in y && y.prototype.render ? t.__c = i = new y(h, m) : (t.__c = i = new fo(h, m), i.constructor = y, i.render = C_), v && v.sub(i), i.props = h, i.state || (i.state = {}), i.context = m, i.__n = r, d = i.__d = !0, i.__h = [], i._sb = []), i.__s == null && (i.__s = i.state), y.getDerivedStateFromProps != null && (i.__s == i.state && (i.__s = Pt({}, i.__s)), Pt(i.__s, y.getDerivedStateFromProps(h, i.__s))), u = i.props, l = i.state, d)
          y.getDerivedStateFromProps == null && i.componentWillMount != null && i.componentWillMount(), i.componentDidMount != null && i.__h.push(i.componentDidMount);
        else {
          if (y.getDerivedStateFromProps == null && h !== u && i.componentWillReceiveProps != null && i.componentWillReceiveProps(h, m), !i.__e && i.shouldComponentUpdate != null && i.shouldComponentUpdate(h, i.__s, m) === !1 || t.__v === n.__v) {
            for (i.props = h, i.state = i.__s, t.__v !== n.__v && (i.__d = !1), i.__v = t, t.__e = n.__e, t.__k = n.__k, t.__k.forEach(function(E) {
              E && (E.__ = t);
            }), k = 0; k < i._sb.length; k++)
              i.__h.push(i._sb[k]);
            i._sb = [], i.__h.length && a.push(i);
            break e;
          }
          i.componentWillUpdate != null && i.componentWillUpdate(h, i.__s, m), i.componentDidUpdate != null && i.__h.push(function() {
            i.componentDidUpdate(u, l, p);
          });
        }
        if (i.context = m, i.props = h, i.__v = t, i.__P = e, b = ne.__r, x = 0, "prototype" in y && y.prototype.render) {
          for (i.state = i.__s, i.__d = !1, b && b(t), _ = i.render(i.props, i.state, i.context), $ = 0; $ < i._sb.length; $++)
            i.__h.push(i._sb[$]);
          i._sb = [];
        } else
          do
            i.__d = !1, b && b(t), _ = i.render(i.props, i.state, i.context), i.state = i.__s;
          while (i.__d && ++x < 25);
        i.state = i.__s, i.getChildContext != null && (r = Pt(Pt({}, r), i.getChildContext())), d || i.getSnapshotBeforeUpdate == null || (p = i.getSnapshotBeforeUpdate(u, l)), S = _ != null && _.type === Ei && _.key == null ? _.props.children : _, tc(e, Array.isArray(S) ? S : [S], t, n, r, s, o, a, c, f), i.base = t.__e, t.__h = null, i.__h.length && a.push(i), g && (i.__E = i.__ = null), i.__e = !1;
      } else
        o == null && t.__v === n.__v ? (t.__k = n.__k, t.__e = n.__e) : t.__e = S_(n.__e, t, n, r, s, o, a, f);
    (_ = ne.diffed) && _(t);
  } catch (E) {
    t.__v = null, (f || o != null) && (t.__e = c, t.__h = !!f, o[o.indexOf(c)] = null), ne.__e(E, t, n);
  }
}
function oc(e, t) {
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
function S_(e, t, n, r, s, o, a, c) {
  var f, _, i, d = n.props, u = t.props, l = t.type, p = 0;
  if (l === "svg" && (s = !0), o != null) {
    for (; p < o.length; p++)
      if ((f = o[p]) && "setAttribute" in f == !!l && (l ? f.localName === l : f.nodeType === 3)) {
        e = f, o[p] = null;
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
    if (o = o && ki.call(e.childNodes), _ = (d = n.props || Mo).dangerouslySetInnerHTML, i = u.dangerouslySetInnerHTML, !c) {
      if (o != null)
        for (d = {}, p = 0; p < e.attributes.length; p++)
          d[e.attributes[p].name] = e.attributes[p].value;
      (i || _) && (i && (_ && i.__html == _.__html || i.__html === e.innerHTML) || (e.innerHTML = i && i.__html || ""));
    }
    if (E_(e, u, d, s, c), i)
      t.__k = [];
    else if (p = t.props.children, tc(e, Array.isArray(p) ? p : [p], t, n, r, s && l !== "foreignObject", o, a, o ? o[0] : n.__k && kr(n, 0), c), o != null)
      for (p = o.length; p--; )
        o[p] != null && Ql(o[p]);
    c || ("value" in u && (p = u.value) !== void 0 && (p !== e.value || l === "progress" && !p || l === "option" && p !== d.value) && Do(e, "value", p, d.value, !1), "checked" in u && (p = u.checked) !== void 0 && p !== e.checked && Do(e, "checked", p, d.checked, !1));
  }
  return e;
}
function ic(e, t, n) {
  try {
    typeof e == "function" ? e(t) : e.current = t;
  } catch (r) {
    ne.__e(r, n);
  }
}
function sc(e, t, n) {
  var r, s;
  if (ne.unmount && ne.unmount(e), (r = e.ref) && (r.current && r.current !== e.__e || ic(r, null, t)), (r = e.__c) != null) {
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
      r[s] && sc(r[s], t, n || typeof e.type != "function");
  n || e.__e == null || Ql(e.__e), e.__ = e.__e = e.__d = void 0;
}
function C_(e, t, n) {
  return this.constructor(e, n);
}
function O_(e, t, n) {
  var r, s, o;
  ne.__ && ne.__(e, t), s = (r = typeof n == "function") ? null : n && n.__k || t.__k, o = [], ss(t, e = (!r && n || t).__k = xi(Ei, null, [e]), s || Mo, Mo, t.ownerSVGElement !== void 0, !r && n ? [n] : s ? null : t.firstChild ? ki.call(t.childNodes) : null, o, !r && n ? n : s ? s.__e : t.firstChild, r), oc(o, e);
}
ki = Zl.slice, ne = { __e: function(e, t, n, r) {
  for (var s, o, a; t = t.__; )
    if ((s = t.__c) && !s.__)
      try {
        if ((o = s.constructor) && o.getDerivedStateFromError != null && (s.setState(o.getDerivedStateFromError(e)), a = s.__d), s.componentDidCatch != null && (s.componentDidCatch(e, r || {}), a = s.__d), a)
          return s.__E = s;
      } catch (c) {
        e = c;
      }
  throw e;
} }, Kl = 0, Jl = function(e) {
  return e != null && e.constructor === void 0;
}, fo.prototype.setState = function(e, t) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = Pt({}, this.state), typeof e == "function" && (e = e(Pt({}, n), this.props)), e && Pt(n, e), e != null && this.__v && (t && this._sb.push(t), oa(this));
}, fo.prototype.forceUpdate = function(e) {
  this.__v && (this.__e = !0, e && this.__h.push(e), oa(this));
}, fo.prototype.render = Ei, Zn = [], Ao.__r = 0;
var _t;
class M_ {
  constructor(t = "") {
    L(this, _t, void 0);
    typeof t == "object" ? H(this, _t, t) : H(this, _t, document.appendChild(document.createComment(t)));
  }
  on(t, n, r) {
    w(this, _t).addEventListener(t, n, r);
  }
  once(t, n, r) {
    w(this, _t).addEventListener(t, n, { once: !0, ...r });
  }
  off(t, n, r) {
    w(this, _t).removeEventListener(t, n, r);
  }
  emit(t) {
    return w(this, _t).dispatchEvent(t), t;
  }
}
_t = new WeakMap();
const Ii = /* @__PURE__ */ new Set([
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
class as extends M_ {
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
    return typeof t == "string" && (Ii.has(t) ? (t = new Event(t), Object.assign(t, { detail: n })) : t = new CustomEvent(t, { detail: n })), super.emit(as.createEvent(t, n));
  }
  static createEvent(t, n) {
    return typeof t == "string" && (Ii.has(t) ? (t = new Event(t), Object.assign(t, { detail: n })) : t = new CustomEvent(t, { detail: n })), t;
  }
}
var pt, Ir, Qt, Jn;
class la extends as {
  constructor(n = "", r) {
    super(n);
    L(this, Qt);
    L(this, pt, /* @__PURE__ */ new Map());
    L(this, Ir, void 0);
    H(this, Ir, r == null ? void 0 : r.customEventSuffix);
  }
  on(n, r, s) {
    n = he(this, Qt, Jn).call(this, n), super.on(n, r, s), w(this, pt).set(r, [n, s]);
  }
  off(n, r, s) {
    n = he(this, Qt, Jn).call(this, n), super.off(n, r, s), w(this, pt).delete(r);
  }
  once(n, r, s) {
    n = he(this, Qt, Jn).call(this, n);
    const o = (a) => {
      r(a), w(this, pt).delete(o);
    };
    super.once(n, o, s), w(this, pt).set(o, [n, s]);
  }
  emit(n, r) {
    return typeof n == "string" && (n = he(this, Qt, Jn).call(this, n)), super.emit(n, r);
  }
  offAll() {
    Array.from(w(this, pt).entries()).forEach(([n, [r, s]]) => {
      super.off(r, n, s);
    }), w(this, pt).clear();
  }
}
pt = new WeakMap(), Ir = new WeakMap(), Qt = new WeakSet(), Jn = function(n) {
  const r = w(this, Ir);
  return Ii.has(n) || typeof r != "string" || n.endsWith(r) ? n : `${n}${r}`;
};
function A_(e, t) {
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
function D_(e, t, n) {
  const r = A_(e, t), s = r[r.length - 1];
  return s === void 0 ? n : s;
}
function Hi(e) {
  return !!e && typeof e == "object" && !Array.isArray(e);
}
function Ui(e, ...t) {
  if (!t.length)
    return e;
  const n = t.shift();
  if (Hi(e) && Hi(n))
    for (const r in n)
      Hi(n[r]) ? (e[r] || Object.assign(e, { [r]: {} }), Ui(e[r], n[r])) : Object.assign(e, { [r]: n[r] });
  return Ui(e, ...t);
}
function xe(e, ...t) {
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
var ls = /* @__PURE__ */ ((e) => (e[e.B = 1] = "B", e[e.KB = 1024] = "KB", e[e.MB = 1048576] = "MB", e[e.GB = 1073741824] = "GB", e[e.TB = 1099511627776] = "TB", e))(ls || {});
function kg(e, t = 2, n = "") {
  return Number.isNaN(e) ? "?KB" : (n || (e < 1024 ? n = "B" : e < 1048576 ? n = "KB" : e < 1073741824 ? n = "MB" : e < 1099511627776 ? n = "GB" : n = "TB"), (e / ls[n]).toFixed(t) + n);
}
const xg = (e) => {
  const t = /^[0-9]*(B|KB|MB|GB|TB)$/;
  e = e.toUpperCase();
  const n = e.match(t);
  if (!n)
    return 0;
  const r = n[1];
  return e = e.replace(r, ""), Number.parseInt(e, 10) * ls[r];
};
var Gl, Xl;
let cs = (Xl = (Gl = document.documentElement.getAttribute("lang")) == null ? void 0 : Gl.toLowerCase()) != null ? Xl : "zh_cn", Ot;
function T_() {
  return cs;
}
function N_(e) {
  cs = e.toLowerCase();
}
function P_(e, t) {
  Ot || (Ot = {}), typeof e == "string" && (e = { [e]: t != null ? t : {} }), Ui(Ot, e);
}
function Qr(e, t, n, r, s, o) {
  Array.isArray(e) ? Ot && e.unshift(Ot) : e = Ot ? [Ot, e] : [e], typeof n == "string" && (o = s, s = r, r = n, n = void 0);
  const a = s || cs;
  let c;
  for (const f of e) {
    if (!f)
      continue;
    const _ = f[a];
    if (!_)
      continue;
    const i = o && f === Ot ? `${o}.${t}` : t;
    if (c = D_(_, i), c !== void 0)
      break;
  }
  return c === void 0 ? r : n ? xe(c, ...Array.isArray(n) ? n : [n]) : c;
}
Qr.addLang = P_;
Qr.getCode = T_;
Qr.setCode = N_;
function L_(e) {
  return Object.fromEntries(Object.entries(e).map(([t, n]) => {
    if (typeof n == "string")
      try {
        n = JSON.parse(n);
      } catch {
      }
    return [t, n];
  }));
}
var dt, dn, we;
class sn {
  constructor(t, n) {
    L(this, dt, void 0);
    L(this, dn, void 0);
    L(this, we, void 0);
    var r;
    t = typeof t == "string" ? document.querySelector(t) : t, this.constructor.EVENTS && H(this, we, new la(t, { customEventSuffix: `.${this.constructor.KEY}` })), H(this, dt, { ...this.constructor.DEFAULT, ...t instanceof HTMLElement ? L_(t.dataset) : null, ...n }), this.constructor.all.set(t, this), H(this, dn, t), this.init(), (r = w(this, we)) == null || r.emit("inited", this);
  }
  get options() {
    return w(this, dt);
  }
  get element() {
    return w(this, dn);
  }
  get events() {
    return w(this, we);
  }
  init() {
  }
  setOptions(t) {
    return t && Object.assign(w(this, dt), t), w(this, dt);
  }
  render(t) {
    this.setOptions(t);
  }
  destroy() {
    this.constructor.all.delete(w(this, dn)), w(this, we) && (w(this, we).emit("destroyed", this), w(this, we).offAll());
  }
  on(t, n, r) {
    var s;
    (s = w(this, we)) == null || s.on(t, n, r);
  }
  once(t, n, r) {
    var s;
    (s = w(this, we)) == null || s.once(t, n, r);
  }
  off(t, n, r) {
    var s;
    (s = w(this, we)) == null || s.off(t, n, r);
  }
  emit(t, n) {
    var a;
    let r = la.createEvent(t, n);
    const s = `on${r.type.replace(`.${this.constructor.KEY}`, "")}`, o = w(this, dt)[s];
    return o && o(r) === !1 && (r.preventDefault(), r.stopPropagation()), r = (a = w(this, we)) == null ? void 0 : a.emit(r), r;
  }
  i18n(t, n, r) {
    var s;
    return (s = Qr(w(this, dt).i18n, t, n, r, this.options.lang, this.constructor.NAME)) != null ? s : `{i18n:${t}}`;
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
dt = new WeakMap(), dn = new WeakMap(), we = new WeakMap(), N(sn, "EVENTS", !1), N(sn, "DEFAULT", {}), N(sn, "allComponents", /* @__PURE__ */ new Map());
class Xe extends sn {
  constructor() {
    super(...arguments);
    N(this, "ref", x_());
  }
  get $() {
    return this.ref.current;
  }
  init() {
    requestAnimationFrame(() => this.render());
  }
  render(n) {
    const r = this.constructor.Component;
    O_(/* @__PURE__ */ xi(r, {
      ref: this.ref,
      ...this.setOptions(n)
    }), this.element);
  }
}
var fs, ae, ac, lc, Qn, ca, cc = {}, fc = [], R_ = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function Lt(e, t) {
  for (var n in t)
    e[n] = t[n];
  return e;
}
function uc(e) {
  var t = e.parentNode;
  t && t.removeChild(e);
}
function ge(e, t, n) {
  var r, s, o, a = {};
  for (o in t)
    o == "key" ? r = t[o] : o == "ref" ? s = t[o] : a[o] = t[o];
  if (arguments.length > 2 && (a.children = arguments.length > 3 ? fs.call(arguments, 2) : n), typeof e == "function" && e.defaultProps != null)
    for (o in e.defaultProps)
      a[o] === void 0 && (a[o] = e.defaultProps[o]);
  return uo(e, a, r, s, null);
}
function uo(e, t, n, r, s) {
  var o = { type: e, props: t, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: s == null ? ++ac : s };
  return s == null && ae.vnode != null && ae.vnode(o), o;
}
function H_() {
  return { current: null };
}
function us(e) {
  return e.children;
}
function er(e, t) {
  this.props = e, this.context = t;
}
function xr(e, t) {
  if (t == null)
    return e.__ ? xr(e.__, e.__.__k.indexOf(e) + 1) : null;
  for (var n; t < e.__k.length; t++)
    if ((n = e.__k[t]) != null && n.__e != null)
      return n.__e;
  return typeof e.type == "function" ? xr(e) : null;
}
function _c(e) {
  var t, n;
  if ((e = e.__) != null && e.__c != null) {
    for (e.__e = e.__c.base = null, t = 0; t < e.__k.length; t++)
      if ((n = e.__k[t]) != null && n.__e != null) {
        e.__e = e.__c.base = n.__e;
        break;
      }
    return _c(e);
  }
}
function fa(e) {
  (!e.__d && (e.__d = !0) && Qn.push(e) && !To.__r++ || ca !== ae.debounceRendering) && ((ca = ae.debounceRendering) || setTimeout)(To);
}
function To() {
  for (var e; To.__r = Qn.length; )
    e = Qn.sort(function(t, n) {
      return t.__v.__b - n.__v.__b;
    }), Qn = [], e.some(function(t) {
      var n, r, s, o, a, c;
      t.__d && (a = (o = (n = t).__v).__e, (c = n.__P) && (r = [], (s = Lt({}, o)).__v = o.__v + 1, vc(c, o, s, n.__n, c.ownerSVGElement !== void 0, o.__h != null ? [a] : null, r, a == null ? xr(o) : a, o.__h), j_(r, o), o.__e != a && _c(o)));
    });
}
function pc(e, t, n, r, s, o, a, c, f, _) {
  var i, d, u, l, p, g, h, v = r && r.__k || fc, m = v.length;
  for (n.__k = [], i = 0; i < t.length; i++)
    if ((l = n.__k[i] = (l = t[i]) == null || typeof l == "boolean" ? null : typeof l == "string" || typeof l == "number" || typeof l == "bigint" ? uo(null, l, null, null, l) : Array.isArray(l) ? uo(us, { children: l }, null, null, null) : l.__b > 0 ? uo(l.type, l.props, l.key, l.ref ? l.ref : null, l.__v) : l) != null) {
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
      vc(e, l, u = u || cc, s, o, a, c, f, _), p = l.__e, (d = l.ref) && u.ref != d && (h || (h = []), u.ref && h.push(u.ref, null, l), h.push(d, l.__c || p, l)), p != null ? (g == null && (g = p), typeof l.type == "function" && l.__k === u.__k ? l.__d = f = dc(l, f, e) : f = hc(e, l, u, v, p, f), typeof n.type == "function" && (n.__d = f)) : f && u.__e == f && f.parentNode != e && (f = xr(u));
    }
  for (n.__e = g, i = m; i--; )
    v[i] != null && gc(v[i], v[i]);
  if (h)
    for (i = 0; i < h.length; i++)
      mc(h[i], h[++i], h[++i]);
}
function dc(e, t, n) {
  for (var r, s = e.__k, o = 0; s && o < s.length; o++)
    (r = s[o]) && (r.__ = e, t = typeof r.type == "function" ? dc(r, t, n) : hc(n, r, r, s, r.__e, t));
  return t;
}
function hc(e, t, n, r, s, o) {
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
function W_(e, t, n, r, s) {
  var o;
  for (o in n)
    o === "children" || o === "key" || o in t || No(e, o, null, n[o], r);
  for (o in t)
    s && typeof t[o] != "function" || o === "children" || o === "key" || o === "value" || o === "checked" || n[o] === t[o] || No(e, o, t[o], n[o], r);
}
function ua(e, t, n) {
  t[0] === "-" ? e.setProperty(t, n) : e[t] = n == null ? "" : typeof n != "number" || R_.test(t) ? n : n + "px";
}
function No(e, t, n, r, s) {
  var o;
  e:
    if (t === "style")
      if (typeof n == "string")
        e.style.cssText = n;
      else {
        if (typeof r == "string" && (e.style.cssText = r = ""), r)
          for (t in r)
            n && t in n || ua(e.style, t, "");
        if (n)
          for (t in n)
            r && n[t] === r[t] || ua(e.style, t, n[t]);
      }
    else if (t[0] === "o" && t[1] === "n")
      o = t !== (t = t.replace(/Capture$/, "")), t = t.toLowerCase() in e ? t.toLowerCase().slice(2) : t.slice(2), e.l || (e.l = {}), e.l[t + o] = n, n ? r || e.addEventListener(t, o ? pa : _a, o) : e.removeEventListener(t, o ? pa : _a, o);
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
function _a(e) {
  this.l[e.type + !1](ae.event ? ae.event(e) : e);
}
function pa(e) {
  this.l[e.type + !0](ae.event ? ae.event(e) : e);
}
function vc(e, t, n, r, s, o, a, c, f) {
  var _, i, d, u, l, p, g, h, v, m, k, b, x, $, S, y = t.type;
  if (t.constructor !== void 0)
    return null;
  n.__h != null && (f = n.__h, c = t.__e = n.__e, t.__h = null, o = [c]), (_ = ae.__b) && _(t);
  try {
    e:
      if (typeof y == "function") {
        if (h = t.props, v = (_ = y.contextType) && r[_.__c], m = _ ? v ? v.props.value : _.__ : r, n.__c ? g = (i = t.__c = n.__c).__ = i.__E : ("prototype" in y && y.prototype.render ? t.__c = i = new y(h, m) : (t.__c = i = new er(h, m), i.constructor = y, i.render = I_), v && v.sub(i), i.props = h, i.state || (i.state = {}), i.context = m, i.__n = r, d = i.__d = !0, i.__h = [], i._sb = []), i.__s == null && (i.__s = i.state), y.getDerivedStateFromProps != null && (i.__s == i.state && (i.__s = Lt({}, i.__s)), Lt(i.__s, y.getDerivedStateFromProps(h, i.__s))), u = i.props, l = i.state, d)
          y.getDerivedStateFromProps == null && i.componentWillMount != null && i.componentWillMount(), i.componentDidMount != null && i.__h.push(i.componentDidMount);
        else {
          if (y.getDerivedStateFromProps == null && h !== u && i.componentWillReceiveProps != null && i.componentWillReceiveProps(h, m), !i.__e && i.shouldComponentUpdate != null && i.shouldComponentUpdate(h, i.__s, m) === !1 || t.__v === n.__v) {
            for (i.props = h, i.state = i.__s, t.__v !== n.__v && (i.__d = !1), i.__v = t, t.__e = n.__e, t.__k = n.__k, t.__k.forEach(function(E) {
              E && (E.__ = t);
            }), k = 0; k < i._sb.length; k++)
              i.__h.push(i._sb[k]);
            i._sb = [], i.__h.length && a.push(i);
            break e;
          }
          i.componentWillUpdate != null && i.componentWillUpdate(h, i.__s, m), i.componentDidUpdate != null && i.__h.push(function() {
            i.componentDidUpdate(u, l, p);
          });
        }
        if (i.context = m, i.props = h, i.__v = t, i.__P = e, b = ae.__r, x = 0, "prototype" in y && y.prototype.render) {
          for (i.state = i.__s, i.__d = !1, b && b(t), _ = i.render(i.props, i.state, i.context), $ = 0; $ < i._sb.length; $++)
            i.__h.push(i._sb[$]);
          i._sb = [];
        } else
          do
            i.__d = !1, b && b(t), _ = i.render(i.props, i.state, i.context), i.state = i.__s;
          while (i.__d && ++x < 25);
        i.state = i.__s, i.getChildContext != null && (r = Lt(Lt({}, r), i.getChildContext())), d || i.getSnapshotBeforeUpdate == null || (p = i.getSnapshotBeforeUpdate(u, l)), S = _ != null && _.type === us && _.key == null ? _.props.children : _, pc(e, Array.isArray(S) ? S : [S], t, n, r, s, o, a, c, f), i.base = t.__e, t.__h = null, i.__h.length && a.push(i), g && (i.__E = i.__ = null), i.__e = !1;
      } else
        o == null && t.__v === n.__v ? (t.__k = n.__k, t.__e = n.__e) : t.__e = B_(n.__e, t, n, r, s, o, a, f);
    (_ = ae.diffed) && _(t);
  } catch (E) {
    t.__v = null, (f || o != null) && (t.__e = c, t.__h = !!f, o[o.indexOf(c)] = null), ae.__e(E, t, n);
  }
}
function j_(e, t) {
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
function B_(e, t, n, r, s, o, a, c) {
  var f, _, i, d = n.props, u = t.props, l = t.type, p = 0;
  if (l === "svg" && (s = !0), o != null) {
    for (; p < o.length; p++)
      if ((f = o[p]) && "setAttribute" in f == !!l && (l ? f.localName === l : f.nodeType === 3)) {
        e = f, o[p] = null;
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
    if (o = o && fs.call(e.childNodes), _ = (d = n.props || cc).dangerouslySetInnerHTML, i = u.dangerouslySetInnerHTML, !c) {
      if (o != null)
        for (d = {}, p = 0; p < e.attributes.length; p++)
          d[e.attributes[p].name] = e.attributes[p].value;
      (i || _) && (i && (_ && i.__html == _.__html || i.__html === e.innerHTML) || (e.innerHTML = i && i.__html || ""));
    }
    if (W_(e, u, d, s, c), i)
      t.__k = [];
    else if (p = t.props.children, pc(e, Array.isArray(p) ? p : [p], t, n, r, s && l !== "foreignObject", o, a, o ? o[0] : n.__k && xr(n, 0), c), o != null)
      for (p = o.length; p--; )
        o[p] != null && uc(o[p]);
    c || ("value" in u && (p = u.value) !== void 0 && (p !== e.value || l === "progress" && !p || l === "option" && p !== d.value) && No(e, "value", p, d.value, !1), "checked" in u && (p = u.checked) !== void 0 && p !== e.checked && No(e, "checked", p, d.checked, !1));
  }
  return e;
}
function mc(e, t, n) {
  try {
    typeof e == "function" ? e(t) : e.current = t;
  } catch (r) {
    ae.__e(r, n);
  }
}
function gc(e, t, n) {
  var r, s;
  if (ae.unmount && ae.unmount(e), (r = e.ref) && (r.current && r.current !== e.__e || mc(r, null, t)), (r = e.__c) != null) {
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
      r[s] && gc(r[s], t, n || typeof e.type != "function");
  n || e.__e == null || uc(e.__e), e.__ = e.__e = e.__d = void 0;
}
function I_(e, t, n) {
  return this.constructor(e, n);
}
fs = fc.slice, ae = { __e: function(e, t, n, r) {
  for (var s, o, a; t = t.__; )
    if ((s = t.__c) && !s.__)
      try {
        if ((o = s.constructor) && o.getDerivedStateFromError != null && (s.setState(o.getDerivedStateFromError(e)), a = s.__d), s.componentDidCatch != null && (s.componentDidCatch(e, r || {}), a = s.__d), a)
          return s.__E = s;
      } catch (c) {
        e = c;
      }
  throw e;
} }, ac = 0, lc = function(e) {
  return e != null && e.constructor === void 0;
}, er.prototype.setState = function(e, t) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = Lt({}, this.state), typeof e == "function" && (e = e(Lt({}, n), this.props)), e && Lt(n, e), e != null && this.__v && (t && this._sb.push(t), fa(this));
}, er.prototype.forceUpdate = function(e) {
  this.__v && (this.__e = !0, e && this.__h.push(e), fa(this));
}, er.prototype.render = us, Qn = [], To.__r = 0;
const I = (...e) => {
  const t = e.map((n) => Array.isArray(n) ? I(...n) : typeof n == "function" ? I(n()) : n !== null && typeof n == "object" ? Object.keys(n).filter((r) => {
    const s = n[r];
    return typeof s == "function" ? !!s() : !!s;
  }).join(" ") : n).filter((n) => typeof n == "string" && n.length);
  return t.length ? t.join(" ") : void 0;
};
function U_({
  component: e = "div",
  className: t,
  children: n,
  style: r,
  attrs: s
}) {
  return ge(e, {
    className: I(t),
    style: r,
    ...s
  }, n);
}
function yc({
  component: e = "a",
  className: t,
  children: n,
  attrs: r,
  url: s,
  disabled: o,
  active: a,
  icon: c,
  text: f,
  target: _,
  trailingIcon: i,
  hint: d,
  style: u,
  onClick: l
}) {
  const p = [
    typeof c == "string" ? /* @__PURE__ */ ge("i", {
      class: `icon ${c}`
    }) : c,
    /* @__PURE__ */ ge("span", {
      className: "text"
    }, f),
    typeof n == "function" ? n() : n,
    typeof i == "string" ? /* @__PURE__ */ ge("i", {
      class: `icon ${i}`
    }) : i
  ];
  return ge(e, {
    className: I(t, { disabled: o, active: a }),
    title: d,
    [e === "a" ? "href" : "data-url"]: s,
    [e === "a" ? "target" : "data-target"]: _,
    style: u,
    onClick: l,
    ...r
  }, ...p);
}
function F_({
  component: e = "div",
  className: t,
  text: n,
  attrs: r,
  children: s,
  style: o,
  onClick: a
}) {
  return ge(e, {
    className: I(t),
    style: o,
    onClick: a,
    ...r
  }, n, typeof s == "function" ? s() : s);
}
function z_({
  component: e = "div",
  className: t,
  style: n,
  space: r,
  flex: s,
  attrs: o,
  onClick: a,
  children: c
}) {
  return ge(e, {
    className: I(t),
    style: { width: r, height: r, flex: s, ...n },
    onClick: a,
    ...o
  }, c);
}
function Y_(e) {
  const {
    tag: t,
    className: n,
    style: r,
    renders: s,
    generateArgs: o = [],
    generatorThis: a,
    generators: c,
    onGenerate: f,
    onRenderItem: _,
    ...i
  } = e, d = [n], u = { ...r }, l = [], p = [];
  return s.forEach((g) => {
    var v;
    const h = [];
    typeof g == "string" && c && c[g] && (g = c[g]), typeof g == "function" ? f ? h.push(...f.call(a, g, l, ...o)) : h.push(...(v = g.call(a, l, ...o)) != null ? v : []) : h.push(g), h.forEach((m) => {
      var k;
      m != null && (typeof m == "object" && !Jl(m) && ("html" in m || "__html" in m || "className" in m || "style" in m || "attrs" in m || "children" in m) ? m.html ? l.push(
        /* @__PURE__ */ xi("div", {
          className: I(m.className),
          style: m.style,
          dangerouslySetInnerHTML: { __html: m.html },
          ...(k = m.attrs) != null ? k : {}
        })
      ) : m.__html ? p.push(m.__html) : (m.style && Object.assign(u, m.style), m.className && d.push(m.className), m.children && l.push(m.children), m.attrs && Object.assign(i, m.attrs)) : l.push(m));
    });
  }), p.length && Object.assign(i, { dangerouslySetInnerHTML: { __html: p } }), [{
    className: I(d),
    style: u,
    ...i
  }, l];
}
function Fi({
  tag: e = "div",
  ...t
}) {
  const [n, r] = Y_(t);
  return xi(e, n, ...r);
}
function V_(e) {
  return /* @__PURE__ */ ge(Fi, {
    ...e
  });
}
function bc({
  component: e = "div",
  className: t,
  children: n,
  style: r,
  attrs: s
}) {
  return ge(e, {
    className: I(t),
    style: r,
    ...s
  }, n);
}
const li = class extends er {
  constructor() {
    super(...arguments);
    N(this, "ref", H_());
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
          return /* @__PURE__ */ ge(h, {
            ...o
          });
      } else if (typeof a == "function") {
        const h = a.call(this, o, ge);
        if (lc(h))
          return h;
        typeof h == "object" && Object.assign(o, h);
      }
    }
    const { type: c = "item", component: f, key: _ = s, rootAttrs: i, rootClass: d, rootStyle: u, rootChildren: l, ...p } = o, g = !f || typeof f == "string" ? this.constructor.ItemComponents && this.constructor.ItemComponents[c] || li.ItemComponents[c] : f;
    return Object.assign(p, {
      type: c,
      component: typeof f == "string" ? f : void 0
    }), this.renderTypedItem(g, {
      className: I(d),
      children: l,
      style: u,
      key: _,
      ...i
    }, {
      ...p,
      type: c,
      component: typeof f == "string" ? f : void 0
    });
  }
  renderTypedItem(n, r, s) {
    const { children: o, className: a, key: c, ...f } = r;
    return /* @__PURE__ */ ge("li", {
      className: I(`${this.name}-${s.type}`, a),
      key: c,
      ...f
    }, /* @__PURE__ */ ge(n, {
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
      itemRender: _,
      onClickItem: i,
      beforeRender: d,
      afterRender: u,
      beforeDestroy: l,
      ...p
    } = n, g = this.constructor.ROOT_TAG;
    return /* @__PURE__ */ ge(g, {
      class: I(this.name, a),
      ...p,
      ref: this.ref
    }, c && c.map(this.renderItem.bind(this, n)), f);
  }
};
let vt = li;
N(vt, "ItemComponents", {
  divider: U_,
  item: yc,
  heading: F_,
  space: z_,
  custom: V_,
  basic: bc
}), N(vt, "ROOT_TAG", "menu"), N(vt, "NAME", "action-menu");
class da extends Xe {
}
N(da, "NAME", "actionmenu"), N(da, "Component", vt);
function ha({
  ...e
}) {
  return /* @__PURE__ */ ge(yc, {
    ...e
  });
}
var Ur, Ze, hn;
class _s extends vt {
  constructor(n) {
    var r;
    super(n);
    L(this, Ur, /* @__PURE__ */ new Set());
    L(this, Ze, void 0);
    L(this, hn, (n, r, s) => {
      this.toggleNestedMenu(n, r), s.preventDefault();
    });
    H(this, Ze, n.nestedShow === void 0), w(this, Ze) && (this.state = { nestedShow: (r = n.defaultNestedShow) != null ? r : {} });
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
    return /* @__PURE__ */ ge(s, {
      items: r,
      name: this.props.name,
      nestedShow: w(this, Ze) ? this.state.nestedShow : this.props.nestedShow,
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
    var _;
    const o = super.getItemRenderProps(n, r, s);
    if (!this.isNestedItem(o))
      return o;
    const a = (_ = o.key) != null ? _ : s;
    w(this, Ur).add(a);
    const c = this.isNestedMenuShow(a);
    if (c && (o.rootChildren = [
      o.rootChildren,
      this.renderNestedMenu(r)
    ], o.component = ha), this.nestedTrigger === "hover")
      o.rootAttrs = {
        ...o.rootAttrs,
        onMouseEnter: w(this, hn).bind(this, a, !0),
        onMouseLeave: w(this, hn).bind(this, a, !1)
      };
    else if (this.nestedTrigger === "click") {
      const { onClick: i } = o;
      o.onClick = (d) => {
        w(this, hn).call(this, a, void 0, d), i == null || i(d);
      };
    }
    const f = this.renderToggleIcon(c, o);
    return f && (o.children = [o.children, f]), o.rootClass = [o.rootClass, "has-nested-menu", c ? "show" : ""], o;
  }
  isNestedMenuShow(n) {
    const r = w(this, Ze) ? this.state.nestedShow : this.props.nestedShow;
    return r && typeof r == "object" ? r[n] : !!r;
  }
  toggleNestedMenu(n, r) {
    const { controlledMenu: s } = this.props;
    if (s)
      return s.toggleNestedMenu(n, r);
    if (!w(this, Ze))
      return !1;
    let { nestedShow: o = {} } = this.state;
    if (typeof o == "boolean" && (o === !0 ? o = [...w(this, Ur).values()].reduce((a, c) => (a[c] = !0, a), {}) : o = {}), r === void 0)
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
    !w(this, Ze) || this.setState({ nestedShow: !0 });
  }
  hideAllNestedMenu() {
    !w(this, Ze) || this.setState({ nestedShow: !1 });
  }
}
Ur = new WeakMap(), Ze = new WeakMap(), hn = new WeakMap(), N(_s, "ItemComponents", {
  item: ha
});
class va extends Xe {
}
N(va, "NAME", "actionmenunested"), N(va, "Component", _s);
var ps, le, wc, tr, ma, $c = {}, kc = [], q_ = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function Rt(e, t) {
  for (var n in t)
    e[n] = t[n];
  return e;
}
function xc(e) {
  var t = e.parentNode;
  t && t.removeChild(e);
}
function pn(e, t, n) {
  var r, s, o, a = {};
  for (o in t)
    o == "key" ? r = t[o] : o == "ref" ? s = t[o] : a[o] = t[o];
  if (arguments.length > 2 && (a.children = arguments.length > 3 ? ps.call(arguments, 2) : n), typeof e == "function" && e.defaultProps != null)
    for (o in e.defaultProps)
      a[o] === void 0 && (a[o] = e.defaultProps[o]);
  return _o(e, a, r, s, null);
}
function _o(e, t, n, r, s) {
  var o = { type: e, props: t, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: s == null ? ++wc : s };
  return s == null && le.vnode != null && le.vnode(o), o;
}
function ds(e) {
  return e.children;
}
function nr(e, t) {
  this.props = e, this.context = t;
}
function Er(e, t) {
  if (t == null)
    return e.__ ? Er(e.__, e.__.__k.indexOf(e) + 1) : null;
  for (var n; t < e.__k.length; t++)
    if ((n = e.__k[t]) != null && n.__e != null)
      return n.__e;
  return typeof e.type == "function" ? Er(e) : null;
}
function Ec(e) {
  var t, n;
  if ((e = e.__) != null && e.__c != null) {
    for (e.__e = e.__c.base = null, t = 0; t < e.__k.length; t++)
      if ((n = e.__k[t]) != null && n.__e != null) {
        e.__e = e.__c.base = n.__e;
        break;
      }
    return Ec(e);
  }
}
function ga(e) {
  (!e.__d && (e.__d = !0) && tr.push(e) && !Po.__r++ || ma !== le.debounceRendering) && ((ma = le.debounceRendering) || setTimeout)(Po);
}
function Po() {
  for (var e; Po.__r = tr.length; )
    e = tr.sort(function(t, n) {
      return t.__v.__b - n.__v.__b;
    }), tr = [], e.some(function(t) {
      var n, r, s, o, a, c;
      t.__d && (a = (o = (n = t).__v).__e, (c = n.__P) && (r = [], (s = Rt({}, o)).__v = o.__v + 1, Mc(c, o, s, n.__n, c.ownerSVGElement !== void 0, o.__h != null ? [a] : null, r, a == null ? Er(o) : a, o.__h), X_(r, o), o.__e != a && Ec(o)));
    });
}
function Sc(e, t, n, r, s, o, a, c, f, _) {
  var i, d, u, l, p, g, h, v = r && r.__k || kc, m = v.length;
  for (n.__k = [], i = 0; i < t.length; i++)
    if ((l = n.__k[i] = (l = t[i]) == null || typeof l == "boolean" ? null : typeof l == "string" || typeof l == "number" || typeof l == "bigint" ? _o(null, l, null, null, l) : Array.isArray(l) ? _o(ds, { children: l }, null, null, null) : l.__b > 0 ? _o(l.type, l.props, l.key, l.ref ? l.ref : null, l.__v) : l) != null) {
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
      Mc(e, l, u = u || $c, s, o, a, c, f, _), p = l.__e, (d = l.ref) && u.ref != d && (h || (h = []), u.ref && h.push(u.ref, null, l), h.push(d, l.__c || p, l)), p != null ? (g == null && (g = p), typeof l.type == "function" && l.__k === u.__k ? l.__d = f = Cc(l, f, e) : f = Oc(e, l, u, v, p, f), typeof n.type == "function" && (n.__d = f)) : f && u.__e == f && f.parentNode != e && (f = Er(u));
    }
  for (n.__e = g, i = m; i--; )
    v[i] != null && Dc(v[i], v[i]);
  if (h)
    for (i = 0; i < h.length; i++)
      Ac(h[i], h[++i], h[++i]);
}
function Cc(e, t, n) {
  for (var r, s = e.__k, o = 0; s && o < s.length; o++)
    (r = s[o]) && (r.__ = e, t = typeof r.type == "function" ? Cc(r, t, n) : Oc(n, r, r, s, r.__e, t));
  return t;
}
function Oc(e, t, n, r, s, o) {
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
function G_(e, t, n, r, s) {
  var o;
  for (o in n)
    o === "children" || o === "key" || o in t || Lo(e, o, null, n[o], r);
  for (o in t)
    s && typeof t[o] != "function" || o === "children" || o === "key" || o === "value" || o === "checked" || n[o] === t[o] || Lo(e, o, t[o], n[o], r);
}
function ya(e, t, n) {
  t[0] === "-" ? e.setProperty(t, n) : e[t] = n == null ? "" : typeof n != "number" || q_.test(t) ? n : n + "px";
}
function Lo(e, t, n, r, s) {
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
  this.l[e.type + !1](le.event ? le.event(e) : e);
}
function wa(e) {
  this.l[e.type + !0](le.event ? le.event(e) : e);
}
function Mc(e, t, n, r, s, o, a, c, f) {
  var _, i, d, u, l, p, g, h, v, m, k, b, x, $, S, y = t.type;
  if (t.constructor !== void 0)
    return null;
  n.__h != null && (f = n.__h, c = t.__e = n.__e, t.__h = null, o = [c]), (_ = le.__b) && _(t);
  try {
    e:
      if (typeof y == "function") {
        if (h = t.props, v = (_ = y.contextType) && r[_.__c], m = _ ? v ? v.props.value : _.__ : r, n.__c ? g = (i = t.__c = n.__c).__ = i.__E : ("prototype" in y && y.prototype.render ? t.__c = i = new y(h, m) : (t.__c = i = new nr(h, m), i.constructor = y, i.render = J_), v && v.sub(i), i.props = h, i.state || (i.state = {}), i.context = m, i.__n = r, d = i.__d = !0, i.__h = [], i._sb = []), i.__s == null && (i.__s = i.state), y.getDerivedStateFromProps != null && (i.__s == i.state && (i.__s = Rt({}, i.__s)), Rt(i.__s, y.getDerivedStateFromProps(h, i.__s))), u = i.props, l = i.state, d)
          y.getDerivedStateFromProps == null && i.componentWillMount != null && i.componentWillMount(), i.componentDidMount != null && i.__h.push(i.componentDidMount);
        else {
          if (y.getDerivedStateFromProps == null && h !== u && i.componentWillReceiveProps != null && i.componentWillReceiveProps(h, m), !i.__e && i.shouldComponentUpdate != null && i.shouldComponentUpdate(h, i.__s, m) === !1 || t.__v === n.__v) {
            for (i.props = h, i.state = i.__s, t.__v !== n.__v && (i.__d = !1), i.__v = t, t.__e = n.__e, t.__k = n.__k, t.__k.forEach(function(E) {
              E && (E.__ = t);
            }), k = 0; k < i._sb.length; k++)
              i.__h.push(i._sb[k]);
            i._sb = [], i.__h.length && a.push(i);
            break e;
          }
          i.componentWillUpdate != null && i.componentWillUpdate(h, i.__s, m), i.componentDidUpdate != null && i.__h.push(function() {
            i.componentDidUpdate(u, l, p);
          });
        }
        if (i.context = m, i.props = h, i.__v = t, i.__P = e, b = le.__r, x = 0, "prototype" in y && y.prototype.render) {
          for (i.state = i.__s, i.__d = !1, b && b(t), _ = i.render(i.props, i.state, i.context), $ = 0; $ < i._sb.length; $++)
            i.__h.push(i._sb[$]);
          i._sb = [];
        } else
          do
            i.__d = !1, b && b(t), _ = i.render(i.props, i.state, i.context), i.state = i.__s;
          while (i.__d && ++x < 25);
        i.state = i.__s, i.getChildContext != null && (r = Rt(Rt({}, r), i.getChildContext())), d || i.getSnapshotBeforeUpdate == null || (p = i.getSnapshotBeforeUpdate(u, l)), S = _ != null && _.type === ds && _.key == null ? _.props.children : _, Sc(e, Array.isArray(S) ? S : [S], t, n, r, s, o, a, c, f), i.base = t.__e, t.__h = null, i.__h.length && a.push(i), g && (i.__E = i.__ = null), i.__e = !1;
      } else
        o == null && t.__v === n.__v ? (t.__k = n.__k, t.__e = n.__e) : t.__e = K_(n.__e, t, n, r, s, o, a, f);
    (_ = le.diffed) && _(t);
  } catch (E) {
    t.__v = null, (f || o != null) && (t.__e = c, t.__h = !!f, o[o.indexOf(c)] = null), le.__e(E, t, n);
  }
}
function X_(e, t) {
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
function K_(e, t, n, r, s, o, a, c) {
  var f, _, i, d = n.props, u = t.props, l = t.type, p = 0;
  if (l === "svg" && (s = !0), o != null) {
    for (; p < o.length; p++)
      if ((f = o[p]) && "setAttribute" in f == !!l && (l ? f.localName === l : f.nodeType === 3)) {
        e = f, o[p] = null;
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
    if (o = o && ps.call(e.childNodes), _ = (d = n.props || $c).dangerouslySetInnerHTML, i = u.dangerouslySetInnerHTML, !c) {
      if (o != null)
        for (d = {}, p = 0; p < e.attributes.length; p++)
          d[e.attributes[p].name] = e.attributes[p].value;
      (i || _) && (i && (_ && i.__html == _.__html || i.__html === e.innerHTML) || (e.innerHTML = i && i.__html || ""));
    }
    if (G_(e, u, d, s, c), i)
      t.__k = [];
    else if (p = t.props.children, Sc(e, Array.isArray(p) ? p : [p], t, n, r, s && l !== "foreignObject", o, a, o ? o[0] : n.__k && Er(n, 0), c), o != null)
      for (p = o.length; p--; )
        o[p] != null && xc(o[p]);
    c || ("value" in u && (p = u.value) !== void 0 && (p !== e.value || l === "progress" && !p || l === "option" && p !== d.value) && Lo(e, "value", p, d.value, !1), "checked" in u && (p = u.checked) !== void 0 && p !== e.checked && Lo(e, "checked", p, d.checked, !1));
  }
  return e;
}
function Ac(e, t, n) {
  try {
    typeof e == "function" ? e(t) : e.current = t;
  } catch (r) {
    le.__e(r, n);
  }
}
function Dc(e, t, n) {
  var r, s;
  if (le.unmount && le.unmount(e), (r = e.ref) && (r.current && r.current !== e.__e || Ac(r, null, t)), (r = e.__c) != null) {
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
      r[s] && Dc(r[s], t, n || typeof e.type != "function");
  n || e.__e == null || xc(e.__e), e.__ = e.__e = e.__d = void 0;
}
function J_(e, t, n) {
  return this.constructor(e, n);
}
ps = kc.slice, le = { __e: function(e, t, n, r) {
  for (var s, o, a; t = t.__; )
    if ((s = t.__c) && !s.__)
      try {
        if ((o = s.constructor) && o.getDerivedStateFromError != null && (s.setState(o.getDerivedStateFromError(e)), a = s.__d), s.componentDidCatch != null && (s.componentDidCatch(e, r || {}), a = s.__d), a)
          return s.__E = s;
      } catch (c) {
        e = c;
      }
  throw e;
} }, wc = 0, nr.prototype.setState = function(e, t) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = Rt({}, this.state), typeof e == "function" && (e = e(Rt({}, n), this.props)), e && Rt(n, e), e != null && this.__v && (t && this._sb.push(t), ga(this));
}, nr.prototype.forceUpdate = function(e) {
  this.__v && (this.__e = !0, e && this.__h.push(e), ga(this));
}, nr.prototype.render = ds, tr = [], Po.__r = 0;
class qt extends nr {
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
      active: _,
      loading: i,
      loadingIcon: d,
      loadingText: u,
      icon: l,
      text: p,
      trailingIcon: g,
      caret: h,
      square: v,
      hint: m,
      ...k
    } = this.props, b = t || (a ? "a" : "button"), x = p == null || typeof p == "string" && !p.length || i && !u, $ = x && !l && !g && !o && !i;
    return pn(
      b,
      {
        className: I("btn", n, s, {
          "btn-caret": $,
          disabled: f || i,
          active: _,
          loading: i,
          square: v === void 0 ? !$ && !o && x : v
        }, r ? `size-${r}` : ""),
        title: m,
        [b === "a" ? "href" : "data-url"]: a,
        [b === "a" ? "target" : "data-target"]: c,
        type: b === "button" ? "button" : void 0,
        ...k
      },
      i ? /* @__PURE__ */ pn("i", {
        class: `spin icon ${d || "icon-spinner-snake"}`
      }) : typeof l == "string" ? /* @__PURE__ */ pn("i", {
        class: `icon ${l}`
      }) : l,
      x ? null : /* @__PURE__ */ pn("span", {
        className: "text"
      }, i ? u : p),
      i ? null : o,
      i ? null : typeof g == "string" ? /* @__PURE__ */ pn("i", {
        class: `icon ${g}`
      }) : g,
      i ? null : h ? /* @__PURE__ */ pn("span", {
        className: typeof h == "string" ? `caret-${h}` : "caret"
      }) : null
    );
  }
}
class $a extends Xe {
}
N($a, "NAME", "button"), N($a, "Component", qt);
var Tc, zi, Nc, Z_ = [];
function Q_(e, t, n) {
  var r, s, o, a = {};
  for (o in t)
    o == "key" ? r = t[o] : o == "ref" ? s = t[o] : a[o] = t[o];
  if (arguments.length > 2 && (a.children = arguments.length > 3 ? Tc.call(arguments, 2) : n), typeof e == "function" && e.defaultProps != null)
    for (o in e.defaultProps)
      a[o] === void 0 && (a[o] = e.defaultProps[o]);
  return ep(e, a, r, s, null);
}
function ep(e, t, n, r, s) {
  var o = { type: e, props: t, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: s == null ? ++Nc : s };
  return s == null && zi.vnode != null && zi.vnode(o), o;
}
Tc = Z_.slice, zi = { __e: function(e, t, n, r) {
  for (var s, o, a; t = t.__; )
    if ((s = t.__c) && !s.__)
      try {
        if ((o = s.constructor) && o.getDerivedStateFromError != null && (s.setState(o.getDerivedStateFromError(e)), a = s.__d), s.componentDidCatch != null && (s.componentDidCatch(e, r || {}), a = s.__d), a)
          return s.__E = s;
      } catch (c) {
        e = c;
      }
  throw e;
} }, Nc = 0;
class hs extends _s {
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
    return /* @__PURE__ */ Q_("span", {
      class: `${this.name}-toggle-icon caret-${t ? "down" : "right"}`
    });
  }
}
N(hs, "NAME", "menu");
class ka extends Xe {
}
N(ka, "NAME", "menu"), N(ka, "Component", hs);
var vs, ce, Pc, rr, xa, Lc = {}, Rc = [], tp = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function Ht(e, t) {
  for (var n in t)
    e[n] = t[n];
  return e;
}
function Hc(e) {
  var t = e.parentNode;
  t && t.removeChild(e);
}
function io(e, t, n) {
  var r, s, o, a = {};
  for (o in t)
    o == "key" ? r = t[o] : o == "ref" ? s = t[o] : a[o] = t[o];
  if (arguments.length > 2 && (a.children = arguments.length > 3 ? vs.call(arguments, 2) : n), typeof e == "function" && e.defaultProps != null)
    for (o in e.defaultProps)
      a[o] === void 0 && (a[o] = e.defaultProps[o]);
  return po(e, a, r, s, null);
}
function po(e, t, n, r, s) {
  var o = { type: e, props: t, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: s == null ? ++Pc : s };
  return s == null && ce.vnode != null && ce.vnode(o), o;
}
function ms(e) {
  return e.children;
}
function or(e, t) {
  this.props = e, this.context = t;
}
function Sr(e, t) {
  if (t == null)
    return e.__ ? Sr(e.__, e.__.__k.indexOf(e) + 1) : null;
  for (var n; t < e.__k.length; t++)
    if ((n = e.__k[t]) != null && n.__e != null)
      return n.__e;
  return typeof e.type == "function" ? Sr(e) : null;
}
function Wc(e) {
  var t, n;
  if ((e = e.__) != null && e.__c != null) {
    for (e.__e = e.__c.base = null, t = 0; t < e.__k.length; t++)
      if ((n = e.__k[t]) != null && n.__e != null) {
        e.__e = e.__c.base = n.__e;
        break;
      }
    return Wc(e);
  }
}
function Ea(e) {
  (!e.__d && (e.__d = !0) && rr.push(e) && !Ro.__r++ || xa !== ce.debounceRendering) && ((xa = ce.debounceRendering) || setTimeout)(Ro);
}
function Ro() {
  for (var e; Ro.__r = rr.length; )
    e = rr.sort(function(t, n) {
      return t.__v.__b - n.__v.__b;
    }), rr = [], e.some(function(t) {
      var n, r, s, o, a, c;
      t.__d && (a = (o = (n = t).__v).__e, (c = n.__P) && (r = [], (s = Ht({}, o)).__v = o.__v + 1, Uc(c, o, s, n.__n, c.ownerSVGElement !== void 0, o.__h != null ? [a] : null, r, a == null ? Sr(o) : a, o.__h), rp(r, o), o.__e != a && Wc(o)));
    });
}
function jc(e, t, n, r, s, o, a, c, f, _) {
  var i, d, u, l, p, g, h, v = r && r.__k || Rc, m = v.length;
  for (n.__k = [], i = 0; i < t.length; i++)
    if ((l = n.__k[i] = (l = t[i]) == null || typeof l == "boolean" ? null : typeof l == "string" || typeof l == "number" || typeof l == "bigint" ? po(null, l, null, null, l) : Array.isArray(l) ? po(ms, { children: l }, null, null, null) : l.__b > 0 ? po(l.type, l.props, l.key, l.ref ? l.ref : null, l.__v) : l) != null) {
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
      Uc(e, l, u = u || Lc, s, o, a, c, f, _), p = l.__e, (d = l.ref) && u.ref != d && (h || (h = []), u.ref && h.push(u.ref, null, l), h.push(d, l.__c || p, l)), p != null ? (g == null && (g = p), typeof l.type == "function" && l.__k === u.__k ? l.__d = f = Bc(l, f, e) : f = Ic(e, l, u, v, p, f), typeof n.type == "function" && (n.__d = f)) : f && u.__e == f && f.parentNode != e && (f = Sr(u));
    }
  for (n.__e = g, i = m; i--; )
    v[i] != null && zc(v[i], v[i]);
  if (h)
    for (i = 0; i < h.length; i++)
      Fc(h[i], h[++i], h[++i]);
}
function Bc(e, t, n) {
  for (var r, s = e.__k, o = 0; s && o < s.length; o++)
    (r = s[o]) && (r.__ = e, t = typeof r.type == "function" ? Bc(r, t, n) : Ic(n, r, r, s, r.__e, t));
  return t;
}
function Ic(e, t, n, r, s, o) {
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
function np(e, t, n, r, s) {
  var o;
  for (o in n)
    o === "children" || o === "key" || o in t || Ho(e, o, null, n[o], r);
  for (o in t)
    s && typeof t[o] != "function" || o === "children" || o === "key" || o === "value" || o === "checked" || n[o] === t[o] || Ho(e, o, t[o], n[o], r);
}
function Sa(e, t, n) {
  t[0] === "-" ? e.setProperty(t, n) : e[t] = n == null ? "" : typeof n != "number" || tp.test(t) ? n : n + "px";
}
function Ho(e, t, n, r, s) {
  var o;
  e:
    if (t === "style")
      if (typeof n == "string")
        e.style.cssText = n;
      else {
        if (typeof r == "string" && (e.style.cssText = r = ""), r)
          for (t in r)
            n && t in n || Sa(e.style, t, "");
        if (n)
          for (t in n)
            r && n[t] === r[t] || Sa(e.style, t, n[t]);
      }
    else if (t[0] === "o" && t[1] === "n")
      o = t !== (t = t.replace(/Capture$/, "")), t = t.toLowerCase() in e ? t.toLowerCase().slice(2) : t.slice(2), e.l || (e.l = {}), e.l[t + o] = n, n ? r || e.addEventListener(t, o ? Oa : Ca, o) : e.removeEventListener(t, o ? Oa : Ca, o);
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
function Ca(e) {
  this.l[e.type + !1](ce.event ? ce.event(e) : e);
}
function Oa(e) {
  this.l[e.type + !0](ce.event ? ce.event(e) : e);
}
function Uc(e, t, n, r, s, o, a, c, f) {
  var _, i, d, u, l, p, g, h, v, m, k, b, x, $, S, y = t.type;
  if (t.constructor !== void 0)
    return null;
  n.__h != null && (f = n.__h, c = t.__e = n.__e, t.__h = null, o = [c]), (_ = ce.__b) && _(t);
  try {
    e:
      if (typeof y == "function") {
        if (h = t.props, v = (_ = y.contextType) && r[_.__c], m = _ ? v ? v.props.value : _.__ : r, n.__c ? g = (i = t.__c = n.__c).__ = i.__E : ("prototype" in y && y.prototype.render ? t.__c = i = new y(h, m) : (t.__c = i = new or(h, m), i.constructor = y, i.render = ip), v && v.sub(i), i.props = h, i.state || (i.state = {}), i.context = m, i.__n = r, d = i.__d = !0, i.__h = [], i._sb = []), i.__s == null && (i.__s = i.state), y.getDerivedStateFromProps != null && (i.__s == i.state && (i.__s = Ht({}, i.__s)), Ht(i.__s, y.getDerivedStateFromProps(h, i.__s))), u = i.props, l = i.state, d)
          y.getDerivedStateFromProps == null && i.componentWillMount != null && i.componentWillMount(), i.componentDidMount != null && i.__h.push(i.componentDidMount);
        else {
          if (y.getDerivedStateFromProps == null && h !== u && i.componentWillReceiveProps != null && i.componentWillReceiveProps(h, m), !i.__e && i.shouldComponentUpdate != null && i.shouldComponentUpdate(h, i.__s, m) === !1 || t.__v === n.__v) {
            for (i.props = h, i.state = i.__s, t.__v !== n.__v && (i.__d = !1), i.__v = t, t.__e = n.__e, t.__k = n.__k, t.__k.forEach(function(E) {
              E && (E.__ = t);
            }), k = 0; k < i._sb.length; k++)
              i.__h.push(i._sb[k]);
            i._sb = [], i.__h.length && a.push(i);
            break e;
          }
          i.componentWillUpdate != null && i.componentWillUpdate(h, i.__s, m), i.componentDidUpdate != null && i.__h.push(function() {
            i.componentDidUpdate(u, l, p);
          });
        }
        if (i.context = m, i.props = h, i.__v = t, i.__P = e, b = ce.__r, x = 0, "prototype" in y && y.prototype.render) {
          for (i.state = i.__s, i.__d = !1, b && b(t), _ = i.render(i.props, i.state, i.context), $ = 0; $ < i._sb.length; $++)
            i.__h.push(i._sb[$]);
          i._sb = [];
        } else
          do
            i.__d = !1, b && b(t), _ = i.render(i.props, i.state, i.context), i.state = i.__s;
          while (i.__d && ++x < 25);
        i.state = i.__s, i.getChildContext != null && (r = Ht(Ht({}, r), i.getChildContext())), d || i.getSnapshotBeforeUpdate == null || (p = i.getSnapshotBeforeUpdate(u, l)), S = _ != null && _.type === ms && _.key == null ? _.props.children : _, jc(e, Array.isArray(S) ? S : [S], t, n, r, s, o, a, c, f), i.base = t.__e, t.__h = null, i.__h.length && a.push(i), g && (i.__E = i.__ = null), i.__e = !1;
      } else
        o == null && t.__v === n.__v ? (t.__k = n.__k, t.__e = n.__e) : t.__e = op(n.__e, t, n, r, s, o, a, f);
    (_ = ce.diffed) && _(t);
  } catch (E) {
    t.__v = null, (f || o != null) && (t.__e = c, t.__h = !!f, o[o.indexOf(c)] = null), ce.__e(E, t, n);
  }
}
function rp(e, t) {
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
function op(e, t, n, r, s, o, a, c) {
  var f, _, i, d = n.props, u = t.props, l = t.type, p = 0;
  if (l === "svg" && (s = !0), o != null) {
    for (; p < o.length; p++)
      if ((f = o[p]) && "setAttribute" in f == !!l && (l ? f.localName === l : f.nodeType === 3)) {
        e = f, o[p] = null;
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
    if (o = o && vs.call(e.childNodes), _ = (d = n.props || Lc).dangerouslySetInnerHTML, i = u.dangerouslySetInnerHTML, !c) {
      if (o != null)
        for (d = {}, p = 0; p < e.attributes.length; p++)
          d[e.attributes[p].name] = e.attributes[p].value;
      (i || _) && (i && (_ && i.__html == _.__html || i.__html === e.innerHTML) || (e.innerHTML = i && i.__html || ""));
    }
    if (np(e, u, d, s, c), i)
      t.__k = [];
    else if (p = t.props.children, jc(e, Array.isArray(p) ? p : [p], t, n, r, s && l !== "foreignObject", o, a, o ? o[0] : n.__k && Sr(n, 0), c), o != null)
      for (p = o.length; p--; )
        o[p] != null && Hc(o[p]);
    c || ("value" in u && (p = u.value) !== void 0 && (p !== e.value || l === "progress" && !p || l === "option" && p !== d.value) && Ho(e, "value", p, d.value, !1), "checked" in u && (p = u.checked) !== void 0 && p !== e.checked && Ho(e, "checked", p, d.checked, !1));
  }
  return e;
}
function Fc(e, t, n) {
  try {
    typeof e == "function" ? e(t) : e.current = t;
  } catch (r) {
    ce.__e(r, n);
  }
}
function zc(e, t, n) {
  var r, s;
  if (ce.unmount && ce.unmount(e), (r = e.ref) && (r.current && r.current !== e.__e || Fc(r, null, t)), (r = e.__c) != null) {
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
      r[s] && zc(r[s], t, n || typeof e.type != "function");
  n || e.__e == null || Hc(e.__e), e.__ = e.__e = e.__d = void 0;
}
function ip(e, t, n) {
  return this.constructor(e, n);
}
vs = Rc.slice, ce = { __e: function(e, t, n, r) {
  for (var s, o, a; t = t.__; )
    if ((s = t.__c) && !s.__)
      try {
        if ((o = s.constructor) && o.getDerivedStateFromError != null && (s.setState(o.getDerivedStateFromError(e)), a = s.__d), s.componentDidCatch != null && (s.componentDidCatch(e, r || {}), a = s.__d), a)
          return s.__E = s;
      } catch (c) {
        e = c;
      }
  throw e;
} }, Pc = 0, or.prototype.setState = function(e, t) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = Ht({}, this.state), typeof e == "function" && (e = e(Ht({}, n), this.props)), e && Ht(n, e), e != null && this.__v && (t && this._sb.push(t), Ea(this));
}, or.prototype.forceUpdate = function(e) {
  this.__v && (this.__e = !0, e && this.__h.push(e), Ea(this));
}, or.prototype.render = ms, rr = [], Ro.__r = 0;
class Yi extends or {
  render() {
    const { percent: t, circleSize: n, circleBorderSize: r, circleBgColor: s, circleColor: o } = this.props, a = (n - r) / 2, c = n / 2;
    return /* @__PURE__ */ io("svg", {
      width: n,
      height: n,
      class: "progress-circle"
    }, /* @__PURE__ */ io("circle", {
      cx: c,
      cy: c,
      r: a,
      stroke: s,
      "stroke-width": r
    }), /* @__PURE__ */ io("circle", {
      cx: c,
      cy: c,
      r: a,
      stroke: o,
      "stroke-dasharray": Math.PI * a * 2,
      "stroke-dashoffset": Math.PI * a * 2 * (100 - t) / 100,
      "stroke-width": r
    }), /* @__PURE__ */ io("text", {
      x: c,
      y: c + r / 4,
      "dominant-baseline": "middle",
      style: { fontSize: `${a}px` }
    }, Math.round(t)));
  }
}
N(Yi, "NAME", "zui.progress-circle"), N(Yi, "defaultProps", {
  circleSize: 24,
  circleBorderSize: 2,
  circleBgColor: "var(--progress-circle-bg)",
  circleColor: "var(--progress-circle-bar-color)"
});
class Ma extends Xe {
}
N(Ma, "NAME", "table-sorter"), N(Ma, "Component", Yi);
function sp(e) {
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
function ap(e) {
  document.readyState !== "loading" ? e() : document.addEventListener("DOMContentLoaded", e);
}
function lp(e, t) {
  const n = typeof e == "string" ? document.querySelector(e) : e;
  if (!n)
    return !1;
  const r = n.getBoundingClientRect(), s = window.innerHeight || document.documentElement.clientHeight, o = window.innerWidth || document.documentElement.clientWidth;
  if (t != null && t.fullyCheck)
    return r.left >= 0 && r.top >= 0 && r.left + r.width <= o && r.top + r.height <= s;
  const a = r.top <= s && r.top + r.height >= 0, c = r.left <= o && r.left + r.width >= 0;
  return a && c;
}
const Eg = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  selectText: sp,
  domReady: ap,
  isElementVisible: lp,
  classes: I
}, Symbol.toStringTag, { value: "Module" }));
let cp = (e = 21) => crypto.getRandomValues(new Uint8Array(e)).reduce((t, n) => (n &= 63, n < 36 ? t += n.toString(36) : n < 62 ? t += (n - 26).toString(36).toUpperCase() : n > 62 ? t += "-" : t += "_", t), "");
var Fr, Mt, Qe, vn, mn, ho;
const ta = class {
  constructor(t, n = "local") {
    L(this, mn);
    L(this, Fr, void 0);
    L(this, Mt, void 0);
    L(this, Qe, void 0);
    L(this, vn, void 0);
    H(this, Fr, n), H(this, Mt, `ZUI_STORE:${t != null ? t : cp()}`), H(this, Qe, n === "local" ? localStorage : sessionStorage);
  }
  get type() {
    return w(this, Fr);
  }
  get session() {
    return this.type === "session" ? this : (w(this, vn) || H(this, vn, new ta(w(this, Mt), "session")), w(this, vn));
  }
  get(t, n) {
    const r = w(this, Qe).getItem(he(this, mn, ho).call(this, t));
    return typeof r == "string" ? JSON.parse(r) : r != null ? r : n;
  }
  set(t, n) {
    if (n == null)
      return this.remove(t);
    w(this, Qe).setItem(he(this, mn, ho).call(this, t), JSON.stringify(n));
  }
  remove(t) {
    w(this, Qe).removeItem(he(this, mn, ho).call(this, t));
  }
  each(t) {
    for (let n = 0; n < w(this, Qe).length; n++) {
      const r = w(this, Qe).key(n);
      if (r != null && r.startsWith(w(this, Mt))) {
        const s = w(this, Qe).getItem(r);
        typeof s == "string" && t(r.substring(w(this, Mt).length + 1), JSON.parse(s));
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
let Wo = ta;
Fr = new WeakMap(), Mt = new WeakMap(), Qe = new WeakMap(), vn = new WeakMap(), mn = new WeakSet(), ho = function(t) {
  return `${w(this, Mt)}:${t}`;
};
const fp = new Wo("DEFAULT");
function up(e, t = "local") {
  return new Wo(e, t);
}
Object.assign(fp, { create: up });
var gs, fe, Yc, ir, Aa, Vc = {}, qc = [], _p = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function Wt(e, t) {
  for (var n in t)
    e[n] = t[n];
  return e;
}
function Gc(e) {
  var t = e.parentNode;
  t && t.removeChild(e);
}
function Wi(e, t, n) {
  var r, s, o, a = {};
  for (o in t)
    o == "key" ? r = t[o] : o == "ref" ? s = t[o] : a[o] = t[o];
  if (arguments.length > 2 && (a.children = arguments.length > 3 ? gs.call(arguments, 2) : n), typeof e == "function" && e.defaultProps != null)
    for (o in e.defaultProps)
      a[o] === void 0 && (a[o] = e.defaultProps[o]);
  return vo(e, a, r, s, null);
}
function vo(e, t, n, r, s) {
  var o = { type: e, props: t, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: s == null ? ++Yc : s };
  return s == null && fe.vnode != null && fe.vnode(o), o;
}
function ys(e) {
  return e.children;
}
function sr(e, t) {
  this.props = e, this.context = t;
}
function Cr(e, t) {
  if (t == null)
    return e.__ ? Cr(e.__, e.__.__k.indexOf(e) + 1) : null;
  for (var n; t < e.__k.length; t++)
    if ((n = e.__k[t]) != null && n.__e != null)
      return n.__e;
  return typeof e.type == "function" ? Cr(e) : null;
}
function Xc(e) {
  var t, n;
  if ((e = e.__) != null && e.__c != null) {
    for (e.__e = e.__c.base = null, t = 0; t < e.__k.length; t++)
      if ((n = e.__k[t]) != null && n.__e != null) {
        e.__e = e.__c.base = n.__e;
        break;
      }
    return Xc(e);
  }
}
function Da(e) {
  (!e.__d && (e.__d = !0) && ir.push(e) && !jo.__r++ || Aa !== fe.debounceRendering) && ((Aa = fe.debounceRendering) || setTimeout)(jo);
}
function jo() {
  for (var e; jo.__r = ir.length; )
    e = ir.sort(function(t, n) {
      return t.__v.__b - n.__v.__b;
    }), ir = [], e.some(function(t) {
      var n, r, s, o, a, c;
      t.__d && (a = (o = (n = t).__v).__e, (c = n.__P) && (r = [], (s = Wt({}, o)).__v = o.__v + 1, Qc(c, o, s, n.__n, c.ownerSVGElement !== void 0, o.__h != null ? [a] : null, r, a == null ? Cr(o) : a, o.__h), dp(r, o), o.__e != a && Xc(o)));
    });
}
function Kc(e, t, n, r, s, o, a, c, f, _) {
  var i, d, u, l, p, g, h, v = r && r.__k || qc, m = v.length;
  for (n.__k = [], i = 0; i < t.length; i++)
    if ((l = n.__k[i] = (l = t[i]) == null || typeof l == "boolean" ? null : typeof l == "string" || typeof l == "number" || typeof l == "bigint" ? vo(null, l, null, null, l) : Array.isArray(l) ? vo(ys, { children: l }, null, null, null) : l.__b > 0 ? vo(l.type, l.props, l.key, l.ref ? l.ref : null, l.__v) : l) != null) {
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
      Qc(e, l, u = u || Vc, s, o, a, c, f, _), p = l.__e, (d = l.ref) && u.ref != d && (h || (h = []), u.ref && h.push(u.ref, null, l), h.push(d, l.__c || p, l)), p != null ? (g == null && (g = p), typeof l.type == "function" && l.__k === u.__k ? l.__d = f = Jc(l, f, e) : f = Zc(e, l, u, v, p, f), typeof n.type == "function" && (n.__d = f)) : f && u.__e == f && f.parentNode != e && (f = Cr(u));
    }
  for (n.__e = g, i = m; i--; )
    v[i] != null && tf(v[i], v[i]);
  if (h)
    for (i = 0; i < h.length; i++)
      ef(h[i], h[++i], h[++i]);
}
function Jc(e, t, n) {
  for (var r, s = e.__k, o = 0; s && o < s.length; o++)
    (r = s[o]) && (r.__ = e, t = typeof r.type == "function" ? Jc(r, t, n) : Zc(n, r, r, s, r.__e, t));
  return t;
}
function Zc(e, t, n, r, s, o) {
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
function Ta(e, t, n) {
  t[0] === "-" ? e.setProperty(t, n) : e[t] = n == null ? "" : typeof n != "number" || _p.test(t) ? n : n + "px";
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
            n && t in n || Ta(e.style, t, "");
        if (n)
          for (t in n)
            r && n[t] === r[t] || Ta(e.style, t, n[t]);
      }
    else if (t[0] === "o" && t[1] === "n")
      o = t !== (t = t.replace(/Capture$/, "")), t = t.toLowerCase() in e ? t.toLowerCase().slice(2) : t.slice(2), e.l || (e.l = {}), e.l[t + o] = n, n ? r || e.addEventListener(t, o ? Pa : Na, o) : e.removeEventListener(t, o ? Pa : Na, o);
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
function Na(e) {
  this.l[e.type + !1](fe.event ? fe.event(e) : e);
}
function Pa(e) {
  this.l[e.type + !0](fe.event ? fe.event(e) : e);
}
function Qc(e, t, n, r, s, o, a, c, f) {
  var _, i, d, u, l, p, g, h, v, m, k, b, x, $, S, y = t.type;
  if (t.constructor !== void 0)
    return null;
  n.__h != null && (f = n.__h, c = t.__e = n.__e, t.__h = null, o = [c]), (_ = fe.__b) && _(t);
  try {
    e:
      if (typeof y == "function") {
        if (h = t.props, v = (_ = y.contextType) && r[_.__c], m = _ ? v ? v.props.value : _.__ : r, n.__c ? g = (i = t.__c = n.__c).__ = i.__E : ("prototype" in y && y.prototype.render ? t.__c = i = new y(h, m) : (t.__c = i = new sr(h, m), i.constructor = y, i.render = vp), v && v.sub(i), i.props = h, i.state || (i.state = {}), i.context = m, i.__n = r, d = i.__d = !0, i.__h = [], i._sb = []), i.__s == null && (i.__s = i.state), y.getDerivedStateFromProps != null && (i.__s == i.state && (i.__s = Wt({}, i.__s)), Wt(i.__s, y.getDerivedStateFromProps(h, i.__s))), u = i.props, l = i.state, d)
          y.getDerivedStateFromProps == null && i.componentWillMount != null && i.componentWillMount(), i.componentDidMount != null && i.__h.push(i.componentDidMount);
        else {
          if (y.getDerivedStateFromProps == null && h !== u && i.componentWillReceiveProps != null && i.componentWillReceiveProps(h, m), !i.__e && i.shouldComponentUpdate != null && i.shouldComponentUpdate(h, i.__s, m) === !1 || t.__v === n.__v) {
            for (i.props = h, i.state = i.__s, t.__v !== n.__v && (i.__d = !1), i.__v = t, t.__e = n.__e, t.__k = n.__k, t.__k.forEach(function(E) {
              E && (E.__ = t);
            }), k = 0; k < i._sb.length; k++)
              i.__h.push(i._sb[k]);
            i._sb = [], i.__h.length && a.push(i);
            break e;
          }
          i.componentWillUpdate != null && i.componentWillUpdate(h, i.__s, m), i.componentDidUpdate != null && i.__h.push(function() {
            i.componentDidUpdate(u, l, p);
          });
        }
        if (i.context = m, i.props = h, i.__v = t, i.__P = e, b = fe.__r, x = 0, "prototype" in y && y.prototype.render) {
          for (i.state = i.__s, i.__d = !1, b && b(t), _ = i.render(i.props, i.state, i.context), $ = 0; $ < i._sb.length; $++)
            i.__h.push(i._sb[$]);
          i._sb = [];
        } else
          do
            i.__d = !1, b && b(t), _ = i.render(i.props, i.state, i.context), i.state = i.__s;
          while (i.__d && ++x < 25);
        i.state = i.__s, i.getChildContext != null && (r = Wt(Wt({}, r), i.getChildContext())), d || i.getSnapshotBeforeUpdate == null || (p = i.getSnapshotBeforeUpdate(u, l)), S = _ != null && _.type === ys && _.key == null ? _.props.children : _, Kc(e, Array.isArray(S) ? S : [S], t, n, r, s, o, a, c, f), i.base = t.__e, t.__h = null, i.__h.length && a.push(i), g && (i.__E = i.__ = null), i.__e = !1;
      } else
        o == null && t.__v === n.__v ? (t.__k = n.__k, t.__e = n.__e) : t.__e = hp(n.__e, t, n, r, s, o, a, f);
    (_ = fe.diffed) && _(t);
  } catch (E) {
    t.__v = null, (f || o != null) && (t.__e = c, t.__h = !!f, o[o.indexOf(c)] = null), fe.__e(E, t, n);
  }
}
function dp(e, t) {
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
function hp(e, t, n, r, s, o, a, c) {
  var f, _, i, d = n.props, u = t.props, l = t.type, p = 0;
  if (l === "svg" && (s = !0), o != null) {
    for (; p < o.length; p++)
      if ((f = o[p]) && "setAttribute" in f == !!l && (l ? f.localName === l : f.nodeType === 3)) {
        e = f, o[p] = null;
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
    if (o = o && gs.call(e.childNodes), _ = (d = n.props || Vc).dangerouslySetInnerHTML, i = u.dangerouslySetInnerHTML, !c) {
      if (o != null)
        for (d = {}, p = 0; p < e.attributes.length; p++)
          d[e.attributes[p].name] = e.attributes[p].value;
      (i || _) && (i && (_ && i.__html == _.__html || i.__html === e.innerHTML) || (e.innerHTML = i && i.__html || ""));
    }
    if (pp(e, u, d, s, c), i)
      t.__k = [];
    else if (p = t.props.children, Kc(e, Array.isArray(p) ? p : [p], t, n, r, s && l !== "foreignObject", o, a, o ? o[0] : n.__k && Cr(n, 0), c), o != null)
      for (p = o.length; p--; )
        o[p] != null && Gc(o[p]);
    c || ("value" in u && (p = u.value) !== void 0 && (p !== e.value || l === "progress" && !p || l === "option" && p !== d.value) && Bo(e, "value", p, d.value, !1), "checked" in u && (p = u.checked) !== void 0 && p !== e.checked && Bo(e, "checked", p, d.checked, !1));
  }
  return e;
}
function ef(e, t, n) {
  try {
    typeof e == "function" ? e(t) : e.current = t;
  } catch (r) {
    fe.__e(r, n);
  }
}
function tf(e, t, n) {
  var r, s;
  if (fe.unmount && fe.unmount(e), (r = e.ref) && (r.current && r.current !== e.__e || ef(r, null, t)), (r = e.__c) != null) {
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
      r[s] && tf(r[s], t, n || typeof e.type != "function");
  n || e.__e == null || Gc(e.__e), e.__ = e.__e = e.__d = void 0;
}
function vp(e, t, n) {
  return this.constructor(e, n);
}
gs = qc.slice, fe = { __e: function(e, t, n, r) {
  for (var s, o, a; t = t.__; )
    if ((s = t.__c) && !s.__)
      try {
        if ((o = s.constructor) && o.getDerivedStateFromError != null && (s.setState(o.getDerivedStateFromError(e)), a = s.__d), s.componentDidCatch != null && (s.componentDidCatch(e, r || {}), a = s.__d), a)
          return s.__E = s;
      } catch (c) {
        e = c;
      }
  throw e;
} }, Yc = 0, sr.prototype.setState = function(e, t) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = Wt({}, this.state), typeof e == "function" && (e = e(Wt({}, n), this.props)), e && Wt(n, e), e != null && this.__v && (t && this._sb.push(t), Da(this));
}, sr.prototype.forceUpdate = function(e) {
  this.__v && (this.__e = !0, e && this.__h.push(e), Da(this));
}, sr.prototype.render = ys, ir = [], jo.__r = 0;
function mp(e) {
  if (e.indexOf("#") === 0 && (e = e.slice(1)), e.length === 3 && (e = e[0] + e[0] + e[1] + e[1] + e[2] + e[2]), e.length !== 6)
    throw new Error(`Invalid HEX color "${e}".`);
  return [
    parseInt(e.slice(0, 2), 16),
    parseInt(e.slice(2, 4), 16),
    parseInt(e.slice(4, 6), 16)
  ];
}
function gp(e) {
  const [t, n, r] = typeof e == "string" ? mp(e) : e;
  return t * 0.299 + n * 0.587 + r * 0.114 > 186;
}
function La(e, t) {
  var n, r;
  return gp(e) ? (n = t == null ? void 0 : t.dark) != null ? n : "#333333" : (r = t == null ? void 0 : t.light) != null ? r : "#ffffff";
}
function Ra(e, t = 255) {
  return Math.min(Math.max(e, 0), t);
}
function yp(e, t, n) {
  e = e % 360 / 360, t = Ra(t), n = Ra(n);
  const r = n <= 0.5 ? n * (t + 1) : n + t - n * t, s = n * 2 - r, o = (a) => (a = a < 0 ? a + 1 : a > 1 ? a - 1 : a, a * 6 < 1 ? s + (r - s) * a * 6 : a * 2 < 1 ? r : a * 3 < 2 ? s + (r - s) * (2 / 3 - a) * 6 : s);
  return [
    o(e + 1 / 3) * 255,
    o(e) * 255,
    o(e - 1 / 3) * 255
  ];
}
function bp(e) {
  let t = 0;
  if (typeof e != "string" && (e = String(e)), e && e.length)
    for (let n = 0; n < e.length; ++n)
      t += (n + 1) * e.charCodeAt(n);
  return t;
}
function wp(e, t) {
  return /^[\u4e00-\u9fa5\s]+$/.test(e) ? e = e.length <= t ? e : e.substring(e.length - t) : /^[A-Za-z\d\s]+$/.test(e) ? e = e[0].toUpperCase() : e = e.length <= t ? e : e.substring(0, t), e;
}
class $p extends sr {
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
      code: _,
      maxTextLength: i = 2,
      src: d,
      hueDistance: u = 43,
      saturation: l = 0.4,
      lightness: p = 0.6,
      children: g,
      ...h
    } = this.props, v = ["avatar", t], m = { ...n, background: a, color: c };
    let k = 32;
    r && (typeof r == "number" ? (m.width = `${r}px`, m.height = `${r}px`, m.fontSize = `${Math.max(12, Math.round(r / 2))}px`, k = r) : (v.push(`size-${r}`), k = { xs: 20, sm: 24, lg: 48, xl: 80 }[r])), s ? v.push("circle") : o && (typeof o == "number" ? m.borderRadius = `${o}px` : v.push(`rounded-${o}`));
    let b;
    if (d)
      v.push("has-img"), b = /* @__PURE__ */ Wi("img", {
        className: "avatar-img",
        src: d,
        alt: f
      });
    else if (f != null && f.length) {
      const x = wp(f, i);
      if (v.push("has-text", `has-text-${x.length}`), a)
        !c && a && (m.color = La(a));
      else {
        const S = _ != null ? _ : f, y = (typeof S == "number" ? S : bp(S)) * u % 360;
        if (m.background = `hsl(${y},${l * 100}%,${p * 100}%)`, !c) {
          const E = yp(y, l, p);
          m.color = La(E);
        }
      }
      let $;
      k && k < 14 * x.length && ($ = { transform: `scale(${k / (14 * x.length)})`, whiteSpace: "nowrap" }), b = /* @__PURE__ */ Wi("div", {
        "data-actualSize": k,
        className: "avatar-text",
        style: $
      }, x);
    }
    return /* @__PURE__ */ Wi("div", {
      className: I(v),
      style: m,
      ...h
    }, b, g);
  }
}
class Ha extends Xe {
}
N(Ha, "NAME", "avatar"), N(Ha, "Component", $p);
var bs, ue, nf, rf, ar, Wa, of = {}, sf = [], kp = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function jt(e, t) {
  for (var n in t)
    e[n] = t[n];
  return e;
}
function af(e) {
  var t = e.parentNode;
  t && t.removeChild(e);
}
function ji(e, t, n) {
  var r, s, o, a = {};
  for (o in t)
    o == "key" ? r = t[o] : o == "ref" ? s = t[o] : a[o] = t[o];
  if (arguments.length > 2 && (a.children = arguments.length > 3 ? bs.call(arguments, 2) : n), typeof e == "function" && e.defaultProps != null)
    for (o in e.defaultProps)
      a[o] === void 0 && (a[o] = e.defaultProps[o]);
  return mo(e, a, r, s, null);
}
function mo(e, t, n, r, s) {
  var o = { type: e, props: t, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: s == null ? ++nf : s };
  return s == null && ue.vnode != null && ue.vnode(o), o;
}
function ws(e) {
  return e.children;
}
function lr(e, t) {
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
function lf(e) {
  var t, n;
  if ((e = e.__) != null && e.__c != null) {
    for (e.__e = e.__c.base = null, t = 0; t < e.__k.length; t++)
      if ((n = e.__k[t]) != null && n.__e != null) {
        e.__e = e.__c.base = n.__e;
        break;
      }
    return lf(e);
  }
}
function ja(e) {
  (!e.__d && (e.__d = !0) && ar.push(e) && !Io.__r++ || Wa !== ue.debounceRendering) && ((Wa = ue.debounceRendering) || setTimeout)(Io);
}
function Io() {
  for (var e; Io.__r = ar.length; )
    e = ar.sort(function(t, n) {
      return t.__v.__b - n.__v.__b;
    }), ar = [], e.some(function(t) {
      var n, r, s, o, a, c;
      t.__d && (a = (o = (n = t).__v).__e, (c = n.__P) && (r = [], (s = jt({}, o)).__v = o.__v + 1, _f(c, o, s, n.__n, c.ownerSVGElement !== void 0, o.__h != null ? [a] : null, r, a == null ? Or(o) : a, o.__h), Ep(r, o), o.__e != a && lf(o)));
    });
}
function cf(e, t, n, r, s, o, a, c, f, _) {
  var i, d, u, l, p, g, h, v = r && r.__k || sf, m = v.length;
  for (n.__k = [], i = 0; i < t.length; i++)
    if ((l = n.__k[i] = (l = t[i]) == null || typeof l == "boolean" ? null : typeof l == "string" || typeof l == "number" || typeof l == "bigint" ? mo(null, l, null, null, l) : Array.isArray(l) ? mo(ws, { children: l }, null, null, null) : l.__b > 0 ? mo(l.type, l.props, l.key, l.ref ? l.ref : null, l.__v) : l) != null) {
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
      _f(e, l, u = u || of, s, o, a, c, f, _), p = l.__e, (d = l.ref) && u.ref != d && (h || (h = []), u.ref && h.push(u.ref, null, l), h.push(d, l.__c || p, l)), p != null ? (g == null && (g = p), typeof l.type == "function" && l.__k === u.__k ? l.__d = f = ff(l, f, e) : f = uf(e, l, u, v, p, f), typeof n.type == "function" && (n.__d = f)) : f && u.__e == f && f.parentNode != e && (f = Or(u));
    }
  for (n.__e = g, i = m; i--; )
    v[i] != null && df(v[i], v[i]);
  if (h)
    for (i = 0; i < h.length; i++)
      pf(h[i], h[++i], h[++i]);
}
function ff(e, t, n) {
  for (var r, s = e.__k, o = 0; s && o < s.length; o++)
    (r = s[o]) && (r.__ = e, t = typeof r.type == "function" ? ff(r, t, n) : uf(n, r, r, s, r.__e, t));
  return t;
}
function uf(e, t, n, r, s, o) {
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
function xp(e, t, n, r, s) {
  var o;
  for (o in n)
    o === "children" || o === "key" || o in t || Uo(e, o, null, n[o], r);
  for (o in t)
    s && typeof t[o] != "function" || o === "children" || o === "key" || o === "value" || o === "checked" || n[o] === t[o] || Uo(e, o, t[o], n[o], r);
}
function Ba(e, t, n) {
  t[0] === "-" ? e.setProperty(t, n) : e[t] = n == null ? "" : typeof n != "number" || kp.test(t) ? n : n + "px";
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
  this.l[e.type + !1](ue.event ? ue.event(e) : e);
}
function Ua(e) {
  this.l[e.type + !0](ue.event ? ue.event(e) : e);
}
function _f(e, t, n, r, s, o, a, c, f) {
  var _, i, d, u, l, p, g, h, v, m, k, b, x, $, S, y = t.type;
  if (t.constructor !== void 0)
    return null;
  n.__h != null && (f = n.__h, c = t.__e = n.__e, t.__h = null, o = [c]), (_ = ue.__b) && _(t);
  try {
    e:
      if (typeof y == "function") {
        if (h = t.props, v = (_ = y.contextType) && r[_.__c], m = _ ? v ? v.props.value : _.__ : r, n.__c ? g = (i = t.__c = n.__c).__ = i.__E : ("prototype" in y && y.prototype.render ? t.__c = i = new y(h, m) : (t.__c = i = new lr(h, m), i.constructor = y, i.render = Cp), v && v.sub(i), i.props = h, i.state || (i.state = {}), i.context = m, i.__n = r, d = i.__d = !0, i.__h = [], i._sb = []), i.__s == null && (i.__s = i.state), y.getDerivedStateFromProps != null && (i.__s == i.state && (i.__s = jt({}, i.__s)), jt(i.__s, y.getDerivedStateFromProps(h, i.__s))), u = i.props, l = i.state, d)
          y.getDerivedStateFromProps == null && i.componentWillMount != null && i.componentWillMount(), i.componentDidMount != null && i.__h.push(i.componentDidMount);
        else {
          if (y.getDerivedStateFromProps == null && h !== u && i.componentWillReceiveProps != null && i.componentWillReceiveProps(h, m), !i.__e && i.shouldComponentUpdate != null && i.shouldComponentUpdate(h, i.__s, m) === !1 || t.__v === n.__v) {
            for (i.props = h, i.state = i.__s, t.__v !== n.__v && (i.__d = !1), i.__v = t, t.__e = n.__e, t.__k = n.__k, t.__k.forEach(function(E) {
              E && (E.__ = t);
            }), k = 0; k < i._sb.length; k++)
              i.__h.push(i._sb[k]);
            i._sb = [], i.__h.length && a.push(i);
            break e;
          }
          i.componentWillUpdate != null && i.componentWillUpdate(h, i.__s, m), i.componentDidUpdate != null && i.__h.push(function() {
            i.componentDidUpdate(u, l, p);
          });
        }
        if (i.context = m, i.props = h, i.__v = t, i.__P = e, b = ue.__r, x = 0, "prototype" in y && y.prototype.render) {
          for (i.state = i.__s, i.__d = !1, b && b(t), _ = i.render(i.props, i.state, i.context), $ = 0; $ < i._sb.length; $++)
            i.__h.push(i._sb[$]);
          i._sb = [];
        } else
          do
            i.__d = !1, b && b(t), _ = i.render(i.props, i.state, i.context), i.state = i.__s;
          while (i.__d && ++x < 25);
        i.state = i.__s, i.getChildContext != null && (r = jt(jt({}, r), i.getChildContext())), d || i.getSnapshotBeforeUpdate == null || (p = i.getSnapshotBeforeUpdate(u, l)), S = _ != null && _.type === ws && _.key == null ? _.props.children : _, cf(e, Array.isArray(S) ? S : [S], t, n, r, s, o, a, c, f), i.base = t.__e, t.__h = null, i.__h.length && a.push(i), g && (i.__E = i.__ = null), i.__e = !1;
      } else
        o == null && t.__v === n.__v ? (t.__k = n.__k, t.__e = n.__e) : t.__e = Sp(n.__e, t, n, r, s, o, a, f);
    (_ = ue.diffed) && _(t);
  } catch (E) {
    t.__v = null, (f || o != null) && (t.__e = c, t.__h = !!f, o[o.indexOf(c)] = null), ue.__e(E, t, n);
  }
}
function Ep(e, t) {
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
function Sp(e, t, n, r, s, o, a, c) {
  var f, _, i, d = n.props, u = t.props, l = t.type, p = 0;
  if (l === "svg" && (s = !0), o != null) {
    for (; p < o.length; p++)
      if ((f = o[p]) && "setAttribute" in f == !!l && (l ? f.localName === l : f.nodeType === 3)) {
        e = f, o[p] = null;
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
    if (o = o && bs.call(e.childNodes), _ = (d = n.props || of).dangerouslySetInnerHTML, i = u.dangerouslySetInnerHTML, !c) {
      if (o != null)
        for (d = {}, p = 0; p < e.attributes.length; p++)
          d[e.attributes[p].name] = e.attributes[p].value;
      (i || _) && (i && (_ && i.__html == _.__html || i.__html === e.innerHTML) || (e.innerHTML = i && i.__html || ""));
    }
    if (xp(e, u, d, s, c), i)
      t.__k = [];
    else if (p = t.props.children, cf(e, Array.isArray(p) ? p : [p], t, n, r, s && l !== "foreignObject", o, a, o ? o[0] : n.__k && Or(n, 0), c), o != null)
      for (p = o.length; p--; )
        o[p] != null && af(o[p]);
    c || ("value" in u && (p = u.value) !== void 0 && (p !== e.value || l === "progress" && !p || l === "option" && p !== d.value) && Uo(e, "value", p, d.value, !1), "checked" in u && (p = u.checked) !== void 0 && p !== e.checked && Uo(e, "checked", p, d.checked, !1));
  }
  return e;
}
function pf(e, t, n) {
  try {
    typeof e == "function" ? e(t) : e.current = t;
  } catch (r) {
    ue.__e(r, n);
  }
}
function df(e, t, n) {
  var r, s;
  if (ue.unmount && ue.unmount(e), (r = e.ref) && (r.current && r.current !== e.__e || pf(r, null, t)), (r = e.__c) != null) {
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
      r[s] && df(r[s], t, n || typeof e.type != "function");
  n || e.__e == null || af(e.__e), e.__ = e.__e = e.__d = void 0;
}
function Cp(e, t, n) {
  return this.constructor(e, n);
}
bs = sf.slice, ue = { __e: function(e, t, n, r) {
  for (var s, o, a; t = t.__; )
    if ((s = t.__c) && !s.__)
      try {
        if ((o = s.constructor) && o.getDerivedStateFromError != null && (s.setState(o.getDerivedStateFromError(e)), a = s.__d), s.componentDidCatch != null && (s.componentDidCatch(e, r || {}), a = s.__d), a)
          return s.__E = s;
      } catch (c) {
        e = c;
      }
  throw e;
} }, nf = 0, rf = function(e) {
  return e != null && e.constructor === void 0;
}, lr.prototype.setState = function(e, t) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = jt({}, this.state), typeof e == "function" && (e = e(jt({}, n), this.props)), e && jt(n, e), e != null && this.__v && (t && this._sb.push(t), ja(this));
}, lr.prototype.forceUpdate = function(e) {
  this.__v && (this.__e = !0, e && this.__h.push(e), ja(this));
}, lr.prototype.render = ws, ar = [], Io.__r = 0;
class hf extends lr {
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
    return /* @__PURE__ */ ji(qt, {
      key: r,
      ...s
    });
  }
  renderItem(t, n, r) {
    const { itemRender: s, defaultBtnProps: o, onClickItem: a } = t, c = { key: r, ...n };
    if (o && Object.assign(c, o), a && (c.onClick = this.handleItemClick.bind(this, c, r, n.onClick)), s) {
      const f = s.call(this, c, ji);
      if (rf(f))
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
      onClickItem: _,
      beforeRender: i,
      afterRender: d,
      beforeDestroy: u,
      ...l
    } = t;
    return /* @__PURE__ */ ji("div", {
      className: I("btn-group", s ? `size-${s}` : "", n),
      ...l
    }, r && r.map(this.renderItem.bind(this, t)), c);
  }
}
class Fa extends Xe {
}
N(Fa, "NAME", "btngroup"), N(Fa, "Component", hf);
var Si, re, vf, cr, za, Fo = {}, mf = [], Op = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function Bt(e, t) {
  for (var n in t)
    e[n] = t[n];
  return e;
}
function gf(e) {
  var t = e.parentNode;
  t && t.removeChild(e);
}
function B(e, t, n) {
  var r, s, o, a = {};
  for (o in t)
    o == "key" ? r = t[o] : o == "ref" ? s = t[o] : a[o] = t[o];
  if (arguments.length > 2 && (a.children = arguments.length > 3 ? Si.call(arguments, 2) : n), typeof e == "function" && e.defaultProps != null)
    for (o in e.defaultProps)
      a[o] === void 0 && (a[o] = e.defaultProps[o]);
  return go(e, a, r, s, null);
}
function go(e, t, n, r, s) {
  var o = { type: e, props: t, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: s == null ? ++vf : s };
  return s == null && re.vnode != null && re.vnode(o), o;
}
function Mp() {
  return { current: null };
}
function Ci(e) {
  return e.children;
}
function fr(e, t) {
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
function yf(e) {
  var t, n;
  if ((e = e.__) != null && e.__c != null) {
    for (e.__e = e.__c.base = null, t = 0; t < e.__k.length; t++)
      if ((n = e.__k[t]) != null && n.__e != null) {
        e.__e = e.__c.base = n.__e;
        break;
      }
    return yf(e);
  }
}
function Ya(e) {
  (!e.__d && (e.__d = !0) && cr.push(e) && !zo.__r++ || za !== re.debounceRendering) && ((za = re.debounceRendering) || setTimeout)(zo);
}
function zo() {
  for (var e; zo.__r = cr.length; )
    e = cr.sort(function(t, n) {
      return t.__v.__b - n.__v.__b;
    }), cr = [], e.some(function(t) {
      var n, r, s, o, a, c;
      t.__d && (a = (o = (n = t).__v).__e, (c = n.__P) && (r = [], (s = Bt({}, o)).__v = o.__v + 1, $s(c, o, s, n.__n, c.ownerSVGElement !== void 0, o.__h != null ? [a] : null, r, a == null ? Mr(o) : a, o.__h), kf(r, o), o.__e != a && yf(o)));
    });
}
function bf(e, t, n, r, s, o, a, c, f, _) {
  var i, d, u, l, p, g, h, v = r && r.__k || mf, m = v.length;
  for (n.__k = [], i = 0; i < t.length; i++)
    if ((l = n.__k[i] = (l = t[i]) == null || typeof l == "boolean" ? null : typeof l == "string" || typeof l == "number" || typeof l == "bigint" ? go(null, l, null, null, l) : Array.isArray(l) ? go(Ci, { children: l }, null, null, null) : l.__b > 0 ? go(l.type, l.props, l.key, l.ref ? l.ref : null, l.__v) : l) != null) {
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
      $s(e, l, u = u || Fo, s, o, a, c, f, _), p = l.__e, (d = l.ref) && u.ref != d && (h || (h = []), u.ref && h.push(u.ref, null, l), h.push(d, l.__c || p, l)), p != null ? (g == null && (g = p), typeof l.type == "function" && l.__k === u.__k ? l.__d = f = wf(l, f, e) : f = $f(e, l, u, v, p, f), typeof n.type == "function" && (n.__d = f)) : f && u.__e == f && f.parentNode != e && (f = Mr(u));
    }
  for (n.__e = g, i = m; i--; )
    v[i] != null && Ef(v[i], v[i]);
  if (h)
    for (i = 0; i < h.length; i++)
      xf(h[i], h[++i], h[++i]);
}
function wf(e, t, n) {
  for (var r, s = e.__k, o = 0; s && o < s.length; o++)
    (r = s[o]) && (r.__ = e, t = typeof r.type == "function" ? wf(r, t, n) : $f(n, r, r, s, r.__e, t));
  return t;
}
function $f(e, t, n, r, s, o) {
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
function Ap(e, t, n, r, s) {
  var o;
  for (o in n)
    o === "children" || o === "key" || o in t || Yo(e, o, null, n[o], r);
  for (o in t)
    s && typeof t[o] != "function" || o === "children" || o === "key" || o === "value" || o === "checked" || n[o] === t[o] || Yo(e, o, t[o], n[o], r);
}
function Va(e, t, n) {
  t[0] === "-" ? e.setProperty(t, n) : e[t] = n == null ? "" : typeof n != "number" || Op.test(t) ? n : n + "px";
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
  this.l[e.type + !1](re.event ? re.event(e) : e);
}
function Ga(e) {
  this.l[e.type + !0](re.event ? re.event(e) : e);
}
function $s(e, t, n, r, s, o, a, c, f) {
  var _, i, d, u, l, p, g, h, v, m, k, b, x, $, S, y = t.type;
  if (t.constructor !== void 0)
    return null;
  n.__h != null && (f = n.__h, c = t.__e = n.__e, t.__h = null, o = [c]), (_ = re.__b) && _(t);
  try {
    e:
      if (typeof y == "function") {
        if (h = t.props, v = (_ = y.contextType) && r[_.__c], m = _ ? v ? v.props.value : _.__ : r, n.__c ? g = (i = t.__c = n.__c).__ = i.__E : ("prototype" in y && y.prototype.render ? t.__c = i = new y(h, m) : (t.__c = i = new fr(h, m), i.constructor = y, i.render = Tp), v && v.sub(i), i.props = h, i.state || (i.state = {}), i.context = m, i.__n = r, d = i.__d = !0, i.__h = [], i._sb = []), i.__s == null && (i.__s = i.state), y.getDerivedStateFromProps != null && (i.__s == i.state && (i.__s = Bt({}, i.__s)), Bt(i.__s, y.getDerivedStateFromProps(h, i.__s))), u = i.props, l = i.state, d)
          y.getDerivedStateFromProps == null && i.componentWillMount != null && i.componentWillMount(), i.componentDidMount != null && i.__h.push(i.componentDidMount);
        else {
          if (y.getDerivedStateFromProps == null && h !== u && i.componentWillReceiveProps != null && i.componentWillReceiveProps(h, m), !i.__e && i.shouldComponentUpdate != null && i.shouldComponentUpdate(h, i.__s, m) === !1 || t.__v === n.__v) {
            for (i.props = h, i.state = i.__s, t.__v !== n.__v && (i.__d = !1), i.__v = t, t.__e = n.__e, t.__k = n.__k, t.__k.forEach(function(E) {
              E && (E.__ = t);
            }), k = 0; k < i._sb.length; k++)
              i.__h.push(i._sb[k]);
            i._sb = [], i.__h.length && a.push(i);
            break e;
          }
          i.componentWillUpdate != null && i.componentWillUpdate(h, i.__s, m), i.componentDidUpdate != null && i.__h.push(function() {
            i.componentDidUpdate(u, l, p);
          });
        }
        if (i.context = m, i.props = h, i.__v = t, i.__P = e, b = re.__r, x = 0, "prototype" in y && y.prototype.render) {
          for (i.state = i.__s, i.__d = !1, b && b(t), _ = i.render(i.props, i.state, i.context), $ = 0; $ < i._sb.length; $++)
            i.__h.push(i._sb[$]);
          i._sb = [];
        } else
          do
            i.__d = !1, b && b(t), _ = i.render(i.props, i.state, i.context), i.state = i.__s;
          while (i.__d && ++x < 25);
        i.state = i.__s, i.getChildContext != null && (r = Bt(Bt({}, r), i.getChildContext())), d || i.getSnapshotBeforeUpdate == null || (p = i.getSnapshotBeforeUpdate(u, l)), S = _ != null && _.type === Ci && _.key == null ? _.props.children : _, bf(e, Array.isArray(S) ? S : [S], t, n, r, s, o, a, c, f), i.base = t.__e, t.__h = null, i.__h.length && a.push(i), g && (i.__E = i.__ = null), i.__e = !1;
      } else
        o == null && t.__v === n.__v ? (t.__k = n.__k, t.__e = n.__e) : t.__e = Dp(n.__e, t, n, r, s, o, a, f);
    (_ = re.diffed) && _(t);
  } catch (E) {
    t.__v = null, (f || o != null) && (t.__e = c, t.__h = !!f, o[o.indexOf(c)] = null), re.__e(E, t, n);
  }
}
function kf(e, t) {
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
function Dp(e, t, n, r, s, o, a, c) {
  var f, _, i, d = n.props, u = t.props, l = t.type, p = 0;
  if (l === "svg" && (s = !0), o != null) {
    for (; p < o.length; p++)
      if ((f = o[p]) && "setAttribute" in f == !!l && (l ? f.localName === l : f.nodeType === 3)) {
        e = f, o[p] = null;
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
    if (o = o && Si.call(e.childNodes), _ = (d = n.props || Fo).dangerouslySetInnerHTML, i = u.dangerouslySetInnerHTML, !c) {
      if (o != null)
        for (d = {}, p = 0; p < e.attributes.length; p++)
          d[e.attributes[p].name] = e.attributes[p].value;
      (i || _) && (i && (_ && i.__html == _.__html || i.__html === e.innerHTML) || (e.innerHTML = i && i.__html || ""));
    }
    if (Ap(e, u, d, s, c), i)
      t.__k = [];
    else if (p = t.props.children, bf(e, Array.isArray(p) ? p : [p], t, n, r, s && l !== "foreignObject", o, a, o ? o[0] : n.__k && Mr(n, 0), c), o != null)
      for (p = o.length; p--; )
        o[p] != null && gf(o[p]);
    c || ("value" in u && (p = u.value) !== void 0 && (p !== e.value || l === "progress" && !p || l === "option" && p !== d.value) && Yo(e, "value", p, d.value, !1), "checked" in u && (p = u.checked) !== void 0 && p !== e.checked && Yo(e, "checked", p, d.checked, !1));
  }
  return e;
}
function xf(e, t, n) {
  try {
    typeof e == "function" ? e(t) : e.current = t;
  } catch (r) {
    re.__e(r, n);
  }
}
function Ef(e, t, n) {
  var r, s;
  if (re.unmount && re.unmount(e), (r = e.ref) && (r.current && r.current !== e.__e || xf(r, null, t)), (r = e.__c) != null) {
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
      r[s] && Ef(r[s], t, n || typeof e.type != "function");
  n || e.__e == null || gf(e.__e), e.__ = e.__e = e.__d = void 0;
}
function Tp(e, t, n) {
  return this.constructor(e, n);
}
function Np(e, t, n) {
  var r, s, o;
  re.__ && re.__(e, t), s = (r = typeof n == "function") ? null : n && n.__k || t.__k, o = [], $s(t, e = (!r && n || t).__k = B(Ci, null, [e]), s || Fo, Fo, t.ownerSVGElement !== void 0, !r && n ? [n] : s ? null : t.firstChild ? Si.call(t.childNodes) : null, o, !r && n ? n : s ? s.__e : t.firstChild, r), kf(o, e);
}
Si = mf.slice, re = { __e: function(e, t, n, r) {
  for (var s, o, a; t = t.__; )
    if ((s = t.__c) && !s.__)
      try {
        if ((o = s.constructor) && o.getDerivedStateFromError != null && (s.setState(o.getDerivedStateFromError(e)), a = s.__d), s.componentDidCatch != null && (s.componentDidCatch(e, r || {}), a = s.__d), a)
          return s.__E = s;
      } catch (c) {
        e = c;
      }
  throw e;
} }, vf = 0, fr.prototype.setState = function(e, t) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = Bt({}, this.state), typeof e == "function" && (e = e(Bt({}, n), this.props)), e && Bt(n, e), e != null && this.__v && (t && this._sb.push(t), Ya(this));
}, fr.prototype.forceUpdate = function(e) {
  this.__v && (this.__e = !0, e && this.__h.push(e), Ya(this));
}, fr.prototype.render = Ci, cr = [], zo.__r = 0;
var Pp = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, Sf = { exports: {} };
(function(e, t) {
  (function(n, r) {
    e.exports = r();
  })(Pp, function() {
    var n = 1e3, r = 6e4, s = 36e5, o = "millisecond", a = "second", c = "minute", f = "hour", _ = "day", i = "week", d = "month", u = "quarter", l = "year", p = "date", g = "Invalid Date", h = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, v = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, m = { name: "en", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), ordinal: function(A) {
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
      return { M: d, y: l, w: i, d: _, D: p, h: f, m: c, s: a, ms: o, Q: u }[A] || String(A || "").toLowerCase().replace(/s$/, "");
    }, u: function(A) {
      return A === void 0;
    } }, x = "en", $ = {};
    $[x] = m;
    var S = function(A) {
      return A instanceof W;
    }, y = function A(D, O, T) {
      var M;
      if (!D)
        return x;
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
      return !T && M && (x = M), M || !T && x;
    }, E = function(A, D) {
      if (S(A))
        return A.clone();
      var O = typeof D == "object" ? D : {};
      return O.date = A, O.args = arguments, new W(O);
    }, C = b;
    C.l = y, C.i = S, C.w = function(A, D) {
      return E(A, { locale: D.$L, utc: D.$u, x: D.$x, $offset: D.$offset });
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
        var M = E(O);
        return this.startOf(T) <= M && M <= this.endOf(T);
      }, D.isAfter = function(O, T) {
        return E(O) < this.startOf(T);
      }, D.isBefore = function(O, T) {
        return this.endOf(T) < E(O);
      }, D.$g = function(O, T, M) {
        return C.u(O) ? this[T] : this.set(M, O);
      }, D.unix = function() {
        return Math.floor(this.valueOf() / 1e3);
      }, D.valueOf = function() {
        return this.$d.getTime();
      }, D.startOf = function(O, T) {
        var M = this, j = !!C.u(T) || T, R = C.p(O), U = function(q, Z) {
          var se = C.w(M.$u ? Date.UTC(M.$y, Z, q) : new Date(M.$y, Z, q), M);
          return j ? se : se.endOf(_);
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
          case _:
          case p:
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
        var M, j = C.p(O), R = "set" + (this.$u ? "UTC" : ""), U = (M = {}, M[_] = R + "Date", M[p] = R + "Date", M[d] = R + "Month", M[l] = R + "FullYear", M[f] = R + "Hours", M[c] = R + "Minutes", M[a] = R + "Seconds", M[o] = R + "Milliseconds", M)[j], G = j === _ ? this.$D + (T - this.$W) : T;
        if (j === d || j === l) {
          var z = this.clone().set(p, 1);
          z.$d[U](G), z.init(), this.$d = z.set(p, Math.min(this.$D, z.daysInMonth())).$d;
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
          var Q = E(j);
          return C.w(Q.date(Q.date() + Math.round(J * O)), j);
        };
        if (R === d)
          return this.set(d, this.$M + O);
        if (R === l)
          return this.set(l, this.$y + O);
        if (R === _)
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
        var j = O || "YYYY-MM-DDTHH:mm:ssZ", R = C.z(this), U = this.$H, G = this.$m, z = this.$M, J = M.weekdays, Q = M.months, P = function(Z, se, ie, ye) {
          return Z && (Z[se] || Z(T, j)) || ie[se].slice(0, ye);
        }, Y = function(Z) {
          return C.s(U % 12 || 12, Z, "0");
        }, X = M.meridiem || function(Z, se, ie) {
          var ye = Z < 12 ? "AM" : "PM";
          return ie ? ye.toLowerCase() : ye;
        }, q = { YY: String(this.$y).slice(-2), YYYY: this.$y, M: z + 1, MM: C.s(z + 1, 2, "0"), MMM: P(M.monthsShort, z, Q, 3), MMMM: P(Q, z), D: this.$D, DD: C.s(this.$D, 2, "0"), d: String(this.$W), dd: P(M.weekdaysMin, this.$W, J, 2), ddd: P(M.weekdaysShort, this.$W, J, 3), dddd: J[this.$W], H: String(U), HH: C.s(U, 2, "0"), h: Y(1), hh: Y(2), a: X(U, G, !0), A: X(U, G, !1), m: String(G), mm: C.s(G, 2, "0"), s: String(this.$s), ss: C.s(this.$s, 2, "0"), SSS: C.s(this.$ms, 3, "0"), Z: R };
        return j.replace(v, function(Z, se) {
          return se || q[Z] || R.replace(":", "");
        });
      }, D.utcOffset = function() {
        return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
      }, D.diff = function(O, T, M) {
        var j, R = C.p(T), U = E(O), G = (U.utcOffset() - this.utcOffset()) * r, z = this - U, J = C.m(this, U);
        return J = (j = {}, j[l] = J / 12, j[d] = J, j[u] = J / 3, j[i] = (z - G) / 6048e5, j[_] = (z - G) / 864e5, j[f] = z / s, j[c] = z / r, j[a] = z / n, j)[R] || z, M ? J : C.a(J);
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
    return E.prototype = F, [["$ms", o], ["$s", a], ["$m", c], ["$H", f], ["$W", _], ["$M", d], ["$y", l], ["$D", p]].forEach(function(A) {
      F[A[1]] = function(D) {
        return this.$g(D, A[0], A[1]);
      };
    }), E.extend = function(A, D) {
      return A.$i || (A(D, W, E), A.$i = !0), E;
    }, E.locale = y, E.isDayjs = S, E.unix = function(A) {
      return E(1e3 * A);
    }, E.en = $[x], E.Ls = $, E.p = {}, E;
  });
})(Sf);
const K = Sf.exports;
class Lp extends fr {
  constructor() {
    super(...arguments);
    N(this, "DATEROWCOUNT", 6);
    N(this, "ref", Mp());
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
    var r, s, o, a, c, f, _, i;
    n === "month" ? ((s = (r = this.ref.current) == null ? void 0 : r.querySelector(".calendar-day")) == null || s.classList.add("hidden"), (a = (o = this.ref.current) == null ? void 0 : o.querySelector(".calendar-month")) == null || a.classList.toggle("hidden")) : ((f = (c = this.ref.current) == null ? void 0 : c.querySelector(".calendar-day")) == null || f.classList.add("hidden"), (i = (_ = this.ref.current) == null ? void 0 : _.querySelector(".calendar-year")) == null || i.classList.toggle("hidden"));
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
    var _;
    const a = K(), c = K(this.state.selectedDate), f = new Array(n);
    for (let i = 0; i < n; i++) {
      const d = r + i + 1, u = s.set("date", d), l = o && !this.props.showOtherMonth ? !0 : this.props.minDate && u.isBefore(this.props.minDate, "date") || this.props.maxDate && u.isAfter(this.props.maxDate, "date") || this.props.minYear && u.isBefore(K(`${this.props.minYear}-01-01`), "year") || this.props.maxYear && u.isAfter(K(`${this.props.maxYear}-12-31`), "year");
      f[i] = {
        isSelectedDate: c.isSame(s.set("date", d), "date"),
        isToday: a.isSame(u, "date"),
        isDisable: !!l,
        isTag: !!((_ = this.props.tagDate) != null && _.includes(u.format(this.props.format))),
        date: u,
        dayNumber: o && !this.props.showOtherMonth ? 0 : d,
        isOtherMonth: o
      };
    }
    return f;
  }
  renderPreMonthDay() {
    const n = K(this.state.selectedDate), r = K(), s = this.state.selectedDate ? n : r, o = s.set("date", 1).day(), a = o === 0 ? 6 : o - 1, c = s.subtract(1, "month"), _ = Number(c.endOf("month").get("date")) - a;
    return this.renderMonthDay(a, _, c, !0);
  }
  renderNextMonthDay() {
    const n = K(this.state.selectedDate), r = K(), s = this.state.selectedDate ? n : r, o = s.set("date", 1).day(), a = o === 0 ? 6 : o - 1, c = s.endOf("month").get("date"), f = s.add(1, "month"), _ = 7 * 6 % (a + c);
    return this.renderMonthDay(_, 0, f, !0);
  }
  renderCurrentMonthDays() {
    const n = this.state.selectedDate, r = K(), s = this.state.selectedDate ? K(n) : r, o = s.endOf("month").get("date"), a = this.renderMonthDay(o, 0, s, !1), c = this.renderPreMonthDay(), f = this.renderNextMonthDay(), _ = [...c, ...a, ...f];
    return this.createGroups(_, this.DATEROWCOUNT);
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
      const _ = ["text-center"];
      return c.isToday && _.push("calendar-today"), c.isSelectedDate && _.push("calendar-selected-date"), c.isOtherMonth && _.push("calendar-other-month"), c.isTag && _.push("calendar-tag"), /* @__PURE__ */ B("td", {
        key: f,
        className: I(_)
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
      const c = ["text-center"], f = K(this.state.selectedDate).year(), _ = K(`${f}-${o}-01`).format(this.props.format);
      return /* @__PURE__ */ B("td", {
        key: a,
        className: I(c)
      }, /* @__PURE__ */ B("div", {
        className: I("btn", "ghost", "calendar-month"),
        onClick: () => {
          this.handleChangeMonth(_);
        }
      }, K(_).format("MM"), " \u6708"));
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
      const f = ["text-center"], _ = K(this.state.selectedDate).month(), i = K(`${a}-${_}-01`).format(this.props.format), d = this.props.minYear && a <= this.props.minYear || this.props.maxYear && a > this.props.maxYear;
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
function Pe(e) {
  if (e == null)
    return window;
  if (e.toString() !== "[object Window]") {
    var t = e.ownerDocument;
    return t && t.defaultView || window;
  }
  return e;
}
function fn(e) {
  var t = Pe(e).Element;
  return e instanceof t || e instanceof Element;
}
function De(e) {
  var t = Pe(e).HTMLElement;
  return e instanceof t || e instanceof HTMLElement;
}
function ks(e) {
  if (typeof ShadowRoot > "u")
    return !1;
  var t = Pe(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot;
}
var an = Math.max, Vo = Math.min, Nn = Math.round;
function Vi() {
  var e = navigator.userAgentData;
  return e != null && e.brands ? e.brands.map(function(t) {
    return t.brand + "/" + t.version;
  }).join(" ") : navigator.userAgent;
}
function Cf() {
  return !/^((?!chrome|android).)*safari/i.test(Vi());
}
function Pn(e, t, n) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  var r = e.getBoundingClientRect(), s = 1, o = 1;
  t && De(e) && (s = e.offsetWidth > 0 && Nn(r.width) / e.offsetWidth || 1, o = e.offsetHeight > 0 && Nn(r.height) / e.offsetHeight || 1);
  var a = fn(e) ? Pe(e) : window, c = a.visualViewport, f = !Cf() && n, _ = (r.left + (f && c ? c.offsetLeft : 0)) / s, i = (r.top + (f && c ? c.offsetTop : 0)) / o, d = r.width / s, u = r.height / o;
  return {
    width: d,
    height: u,
    top: i,
    right: _ + d,
    bottom: i + u,
    left: _,
    x: _,
    y: i
  };
}
function xs(e) {
  var t = Pe(e), n = t.pageXOffset, r = t.pageYOffset;
  return {
    scrollLeft: n,
    scrollTop: r
  };
}
function Rp(e) {
  return {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  };
}
function Hp(e) {
  return e === Pe(e) || !De(e) ? xs(e) : Rp(e);
}
function at(e) {
  return e ? (e.nodeName || "").toLowerCase() : null;
}
function Xt(e) {
  return ((fn(e) ? e.ownerDocument : e.document) || window.document).documentElement;
}
function Es(e) {
  return Pn(Xt(e)).left + xs(e).scrollLeft;
}
function gt(e) {
  return Pe(e).getComputedStyle(e);
}
function Ss(e) {
  var t = gt(e), n = t.overflow, r = t.overflowX, s = t.overflowY;
  return /auto|scroll|overlay|hidden/.test(n + s + r);
}
function Wp(e) {
  var t = e.getBoundingClientRect(), n = Nn(t.width) / e.offsetWidth || 1, r = Nn(t.height) / e.offsetHeight || 1;
  return n !== 1 || r !== 1;
}
function jp(e, t, n) {
  n === void 0 && (n = !1);
  var r = De(t), s = De(t) && Wp(t), o = Xt(t), a = Pn(e, s, n), c = {
    scrollLeft: 0,
    scrollTop: 0
  }, f = {
    x: 0,
    y: 0
  };
  return (r || !r && !n) && ((at(t) !== "body" || Ss(o)) && (c = Hp(t)), De(t) ? (f = Pn(t, !0), f.x += t.clientLeft, f.y += t.clientTop) : o && (f.x = Es(o))), {
    x: a.left + c.scrollLeft - f.x,
    y: a.top + c.scrollTop - f.y,
    width: a.width,
    height: a.height
  };
}
function Cs(e) {
  var t = Pn(e), n = e.offsetWidth, r = e.offsetHeight;
  return Math.abs(t.width - n) <= 1 && (n = t.width), Math.abs(t.height - r) <= 1 && (r = t.height), {
    x: e.offsetLeft,
    y: e.offsetTop,
    width: n,
    height: r
  };
}
function Oi(e) {
  return at(e) === "html" ? e : e.assignedSlot || e.parentNode || (ks(e) ? e.host : null) || Xt(e);
}
function Of(e) {
  return ["html", "body", "#document"].indexOf(at(e)) >= 0 ? e.ownerDocument.body : De(e) && Ss(e) ? e : Of(Oi(e));
}
function ur(e, t) {
  var n;
  t === void 0 && (t = []);
  var r = Of(e), s = r === ((n = e.ownerDocument) == null ? void 0 : n.body), o = Pe(r), a = s ? [o].concat(o.visualViewport || [], Ss(r) ? r : []) : r, c = t.concat(a);
  return s ? c : c.concat(ur(Oi(a)));
}
function Bp(e) {
  return ["table", "td", "th"].indexOf(at(e)) >= 0;
}
function Xa(e) {
  return !De(e) || gt(e).position === "fixed" ? null : e.offsetParent;
}
function Ip(e) {
  var t = /firefox/i.test(Vi()), n = /Trident/i.test(Vi());
  if (n && De(e)) {
    var r = gt(e);
    if (r.position === "fixed")
      return null;
  }
  var s = Oi(e);
  for (ks(s) && (s = s.host); De(s) && ["html", "body"].indexOf(at(s)) < 0; ) {
    var o = gt(s);
    if (o.transform !== "none" || o.perspective !== "none" || o.contain === "paint" || ["transform", "perspective"].indexOf(o.willChange) !== -1 || t && o.willChange === "filter" || t && o.filter && o.filter !== "none")
      return s;
    s = s.parentNode;
  }
  return null;
}
function eo(e) {
  for (var t = Pe(e), n = Xa(e); n && Bp(n) && gt(n).position === "static"; )
    n = Xa(n);
  return n && (at(n) === "html" || at(n) === "body" && gt(n).position === "static") ? t : n || Ip(e) || t;
}
var Ee = "top", Ye = "bottom", Ve = "right", Se = "left", Os = "auto", to = [Ee, Ye, Ve, Se], Ln = "start", Ar = "end", Up = "clippingParents", Mf = "viewport", qn = "popper", Fp = "reference", Ka = /* @__PURE__ */ to.reduce(function(e, t) {
  return e.concat([t + "-" + Ln, t + "-" + Ar]);
}, []), Af = /* @__PURE__ */ [].concat(to, [Os]).reduce(function(e, t) {
  return e.concat([t, t + "-" + Ln, t + "-" + Ar]);
}, []), zp = "beforeRead", Yp = "read", Vp = "afterRead", qp = "beforeMain", Gp = "main", Xp = "afterMain", Kp = "beforeWrite", Jp = "write", Zp = "afterWrite", Qp = [zp, Yp, Vp, qp, Gp, Xp, Kp, Jp, Zp];
function ed(e) {
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
function td(e) {
  var t = ed(e);
  return Qp.reduce(function(n, r) {
    return n.concat(t.filter(function(s) {
      return s.phase === r;
    }));
  }, []);
}
function nd(e) {
  var t;
  return function() {
    return t || (t = new Promise(function(n) {
      Promise.resolve().then(function() {
        t = void 0, n(e());
      });
    })), t;
  };
}
function it(e) {
  return e.split("-")[0];
}
function rd(e) {
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
function od(e, t) {
  var n = Pe(e), r = Xt(e), s = n.visualViewport, o = r.clientWidth, a = r.clientHeight, c = 0, f = 0;
  if (s) {
    o = s.width, a = s.height;
    var _ = Cf();
    (_ || !_ && t === "fixed") && (c = s.offsetLeft, f = s.offsetTop);
  }
  return {
    width: o,
    height: a,
    x: c + Es(e),
    y: f
  };
}
function id(e) {
  var t, n = Xt(e), r = xs(e), s = (t = e.ownerDocument) == null ? void 0 : t.body, o = an(n.scrollWidth, n.clientWidth, s ? s.scrollWidth : 0, s ? s.clientWidth : 0), a = an(n.scrollHeight, n.clientHeight, s ? s.scrollHeight : 0, s ? s.clientHeight : 0), c = -r.scrollLeft + Es(e), f = -r.scrollTop;
  return gt(s || n).direction === "rtl" && (c += an(n.clientWidth, s ? s.clientWidth : 0) - o), {
    width: o,
    height: a,
    x: c,
    y: f
  };
}
function Df(e, t) {
  var n = t.getRootNode && t.getRootNode();
  if (e.contains(t))
    return !0;
  if (n && ks(n)) {
    var r = t;
    do {
      if (r && e.isSameNode(r))
        return !0;
      r = r.parentNode || r.host;
    } while (r);
  }
  return !1;
}
function qi(e) {
  return Object.assign({}, e, {
    left: e.x,
    top: e.y,
    right: e.x + e.width,
    bottom: e.y + e.height
  });
}
function sd(e, t) {
  var n = Pn(e, !1, t === "fixed");
  return n.top = n.top + e.clientTop, n.left = n.left + e.clientLeft, n.bottom = n.top + e.clientHeight, n.right = n.left + e.clientWidth, n.width = e.clientWidth, n.height = e.clientHeight, n.x = n.left, n.y = n.top, n;
}
function Ja(e, t, n) {
  return t === Mf ? qi(od(e, n)) : fn(t) ? sd(t, n) : qi(id(Xt(e)));
}
function ad(e) {
  var t = ur(Oi(e)), n = ["absolute", "fixed"].indexOf(gt(e).position) >= 0, r = n && De(e) ? eo(e) : e;
  return fn(r) ? t.filter(function(s) {
    return fn(s) && Df(s, r) && at(s) !== "body";
  }) : [];
}
function ld(e, t, n, r) {
  var s = t === "clippingParents" ? ad(e) : [].concat(t), o = [].concat(s, [n]), a = o[0], c = o.reduce(function(f, _) {
    var i = Ja(e, _, r);
    return f.top = an(i.top, f.top), f.right = Vo(i.right, f.right), f.bottom = Vo(i.bottom, f.bottom), f.left = an(i.left, f.left), f;
  }, Ja(e, a, r));
  return c.width = c.right - c.left, c.height = c.bottom - c.top, c.x = c.left, c.y = c.top, c;
}
function Rn(e) {
  return e.split("-")[1];
}
function Ms(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function Tf(e) {
  var t = e.reference, n = e.element, r = e.placement, s = r ? it(r) : null, o = r ? Rn(r) : null, a = t.x + t.width / 2 - n.width / 2, c = t.y + t.height / 2 - n.height / 2, f;
  switch (s) {
    case Ee:
      f = {
        x: a,
        y: t.y - n.height
      };
      break;
    case Ye:
      f = {
        x: a,
        y: t.y + t.height
      };
      break;
    case Ve:
      f = {
        x: t.x + t.width,
        y: c
      };
      break;
    case Se:
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
  var _ = s ? Ms(s) : null;
  if (_ != null) {
    var i = _ === "y" ? "height" : "width";
    switch (o) {
      case Ln:
        f[_] = f[_] - (t[i] / 2 - n[i] / 2);
        break;
      case Ar:
        f[_] = f[_] + (t[i] / 2 - n[i] / 2);
        break;
    }
  }
  return f;
}
function Nf() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
function Pf(e) {
  return Object.assign({}, Nf(), e);
}
function Lf(e, t) {
  return t.reduce(function(n, r) {
    return n[r] = e, n;
  }, {});
}
function As(e, t) {
  t === void 0 && (t = {});
  var n = t, r = n.placement, s = r === void 0 ? e.placement : r, o = n.strategy, a = o === void 0 ? e.strategy : o, c = n.boundary, f = c === void 0 ? Up : c, _ = n.rootBoundary, i = _ === void 0 ? Mf : _, d = n.elementContext, u = d === void 0 ? qn : d, l = n.altBoundary, p = l === void 0 ? !1 : l, g = n.padding, h = g === void 0 ? 0 : g, v = Pf(typeof h != "number" ? h : Lf(h, to)), m = u === qn ? Fp : qn, k = e.rects.popper, b = e.elements[p ? m : u], x = ld(fn(b) ? b : b.contextElement || Xt(e.elements.popper), f, i, a), $ = Pn(e.elements.reference), S = Tf({
    reference: $,
    element: k,
    strategy: "absolute",
    placement: s
  }), y = qi(Object.assign({}, k, S)), E = u === qn ? y : $, C = {
    top: x.top - E.top + v.top,
    bottom: E.bottom - x.bottom + v.bottom,
    left: x.left - E.left + v.left,
    right: E.right - x.right + v.right
  }, W = e.modifiersData.offset;
  if (u === qn && W) {
    var F = W[s];
    Object.keys(C).forEach(function(A) {
      var D = [Ve, Ye].indexOf(A) >= 0 ? 1 : -1, O = [Ee, Ye].indexOf(A) >= 0 ? "y" : "x";
      C[A] += F[O] * D;
    });
  }
  return C;
}
var Za = {
  placement: "bottom",
  modifiers: [],
  strategy: "absolute"
};
function Qa() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return !t.some(function(r) {
    return !(r && typeof r.getBoundingClientRect == "function");
  });
}
function cd(e) {
  e === void 0 && (e = {});
  var t = e, n = t.defaultModifiers, r = n === void 0 ? [] : n, s = t.defaultOptions, o = s === void 0 ? Za : s;
  return function(c, f, _) {
    _ === void 0 && (_ = o);
    var i = {
      placement: "bottom",
      orderedModifiers: [],
      options: Object.assign({}, Za, o),
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
          reference: fn(c) ? ur(c) : c.contextElement ? ur(c.contextElement) : [],
          popper: ur(f)
        };
        var k = td(rd([].concat(r, i.options.modifiers)));
        return i.orderedModifiers = k.filter(function(b) {
          return b.enabled;
        }), p(), l.update();
      },
      forceUpdate: function() {
        if (!u) {
          var v = i.elements, m = v.reference, k = v.popper;
          if (!!Qa(m, k)) {
            i.rects = {
              reference: jp(m, eo(k), i.options.strategy === "fixed"),
              popper: Cs(k)
            }, i.reset = !1, i.placement = i.options.placement, i.orderedModifiers.forEach(function(C) {
              return i.modifiersData[C.name] = Object.assign({}, C.data);
            });
            for (var b = 0; b < i.orderedModifiers.length; b++) {
              if (i.reset === !0) {
                i.reset = !1, b = -1;
                continue;
              }
              var x = i.orderedModifiers[b], $ = x.fn, S = x.options, y = S === void 0 ? {} : S, E = x.name;
              typeof $ == "function" && (i = $({
                state: i,
                options: y,
                name: E,
                instance: l
              }) || i);
            }
          }
        }
      },
      update: nd(function() {
        return new Promise(function(h) {
          l.forceUpdate(), h(i);
        });
      }),
      destroy: function() {
        g(), u = !0;
      }
    };
    if (!Qa(c, f))
      return l;
    l.setOptions(_).then(function(h) {
      !u && _.onFirstUpdate && _.onFirstUpdate(h);
    });
    function p() {
      i.orderedModifiers.forEach(function(h) {
        var v = h.name, m = h.options, k = m === void 0 ? {} : m, b = h.effect;
        if (typeof b == "function") {
          var x = b({
            state: i,
            name: v,
            instance: l,
            options: k
          }), $ = function() {
          };
          d.push(x || $);
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
var so = {
  passive: !0
};
function fd(e) {
  var t = e.state, n = e.instance, r = e.options, s = r.scroll, o = s === void 0 ? !0 : s, a = r.resize, c = a === void 0 ? !0 : a, f = Pe(t.elements.popper), _ = [].concat(t.scrollParents.reference, t.scrollParents.popper);
  return o && _.forEach(function(i) {
    i.addEventListener("scroll", n.update, so);
  }), c && f.addEventListener("resize", n.update, so), function() {
    o && _.forEach(function(i) {
      i.removeEventListener("scroll", n.update, so);
    }), c && f.removeEventListener("resize", n.update, so);
  };
}
const ud = {
  name: "eventListeners",
  enabled: !0,
  phase: "write",
  fn: function() {
  },
  effect: fd,
  data: {}
};
function _d(e) {
  var t = e.state, n = e.name;
  t.modifiersData[n] = Tf({
    reference: t.rects.reference,
    element: t.rects.popper,
    strategy: "absolute",
    placement: t.placement
  });
}
const pd = {
  name: "popperOffsets",
  enabled: !0,
  phase: "read",
  fn: _d,
  data: {}
};
var dd = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function hd(e) {
  var t = e.x, n = e.y, r = window, s = r.devicePixelRatio || 1;
  return {
    x: Nn(t * s) / s || 0,
    y: Nn(n * s) / s || 0
  };
}
function el(e) {
  var t, n = e.popper, r = e.popperRect, s = e.placement, o = e.variation, a = e.offsets, c = e.position, f = e.gpuAcceleration, _ = e.adaptive, i = e.roundOffsets, d = e.isFixed, u = a.x, l = u === void 0 ? 0 : u, p = a.y, g = p === void 0 ? 0 : p, h = typeof i == "function" ? i({
    x: l,
    y: g
  }) : {
    x: l,
    y: g
  };
  l = h.x, g = h.y;
  var v = a.hasOwnProperty("x"), m = a.hasOwnProperty("y"), k = Se, b = Ee, x = window;
  if (_) {
    var $ = eo(n), S = "clientHeight", y = "clientWidth";
    if ($ === Pe(n) && ($ = Xt(n), gt($).position !== "static" && c === "absolute" && (S = "scrollHeight", y = "scrollWidth")), $ = $, s === Ee || (s === Se || s === Ve) && o === Ar) {
      b = Ye;
      var E = d && $ === x && x.visualViewport ? x.visualViewport.height : $[S];
      g -= E - r.height, g *= f ? 1 : -1;
    }
    if (s === Se || (s === Ee || s === Ye) && o === Ar) {
      k = Ve;
      var C = d && $ === x && x.visualViewport ? x.visualViewport.width : $[y];
      l -= C - r.width, l *= f ? 1 : -1;
    }
  }
  var W = Object.assign({
    position: c
  }, _ && dd), F = i === !0 ? hd({
    x: l,
    y: g
  }) : {
    x: l,
    y: g
  };
  if (l = F.x, g = F.y, f) {
    var A;
    return Object.assign({}, W, (A = {}, A[b] = m ? "0" : "", A[k] = v ? "0" : "", A.transform = (x.devicePixelRatio || 1) <= 1 ? "translate(" + l + "px, " + g + "px)" : "translate3d(" + l + "px, " + g + "px, 0)", A));
  }
  return Object.assign({}, W, (t = {}, t[b] = m ? g + "px" : "", t[k] = v ? l + "px" : "", t.transform = "", t));
}
function vd(e) {
  var t = e.state, n = e.options, r = n.gpuAcceleration, s = r === void 0 ? !0 : r, o = n.adaptive, a = o === void 0 ? !0 : o, c = n.roundOffsets, f = c === void 0 ? !0 : c, _ = {
    placement: it(t.placement),
    variation: Rn(t.placement),
    popper: t.elements.popper,
    popperRect: t.rects.popper,
    gpuAcceleration: s,
    isFixed: t.options.strategy === "fixed"
  };
  t.modifiersData.popperOffsets != null && (t.styles.popper = Object.assign({}, t.styles.popper, el(Object.assign({}, _, {
    offsets: t.modifiersData.popperOffsets,
    position: t.options.strategy,
    adaptive: a,
    roundOffsets: f
  })))), t.modifiersData.arrow != null && (t.styles.arrow = Object.assign({}, t.styles.arrow, el(Object.assign({}, _, {
    offsets: t.modifiersData.arrow,
    position: "absolute",
    adaptive: !1,
    roundOffsets: f
  })))), t.attributes.popper = Object.assign({}, t.attributes.popper, {
    "data-popper-placement": t.placement
  });
}
const md = {
  name: "computeStyles",
  enabled: !0,
  phase: "beforeWrite",
  fn: vd,
  data: {}
};
function gd(e) {
  var t = e.state;
  Object.keys(t.elements).forEach(function(n) {
    var r = t.styles[n] || {}, s = t.attributes[n] || {}, o = t.elements[n];
    !De(o) || !at(o) || (Object.assign(o.style, r), Object.keys(s).forEach(function(a) {
      var c = s[a];
      c === !1 ? o.removeAttribute(a) : o.setAttribute(a, c === !0 ? "" : c);
    }));
  });
}
function yd(e) {
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
      var s = t.elements[r], o = t.attributes[r] || {}, a = Object.keys(t.styles.hasOwnProperty(r) ? t.styles[r] : n[r]), c = a.reduce(function(f, _) {
        return f[_] = "", f;
      }, {});
      !De(s) || !at(s) || (Object.assign(s.style, c), Object.keys(o).forEach(function(f) {
        s.removeAttribute(f);
      }));
    });
  };
}
const bd = {
  name: "applyStyles",
  enabled: !0,
  phase: "write",
  fn: gd,
  effect: yd,
  requires: ["computeStyles"]
};
var wd = [ud, pd, md, bd], $d = /* @__PURE__ */ cd({
  defaultModifiers: wd
});
function _r(e, t, n) {
  return an(e, Vo(t, n));
}
function kd(e, t, n) {
  var r = _r(e, t, n);
  return r > n ? n : r;
}
var xd = function(t, n) {
  return t = typeof t == "function" ? t(Object.assign({}, n.rects, {
    placement: n.placement
  })) : t, Pf(typeof t != "number" ? t : Lf(t, to));
};
function Ed(e) {
  var t, n = e.state, r = e.name, s = e.options, o = n.elements.arrow, a = n.modifiersData.popperOffsets, c = it(n.placement), f = Ms(c), _ = [Se, Ve].indexOf(c) >= 0, i = _ ? "height" : "width";
  if (!(!o || !a)) {
    var d = xd(s.padding, n), u = Cs(o), l = f === "y" ? Ee : Se, p = f === "y" ? Ye : Ve, g = n.rects.reference[i] + n.rects.reference[f] - a[f] - n.rects.popper[i], h = a[f] - n.rects.reference[f], v = eo(o), m = v ? f === "y" ? v.clientHeight || 0 : v.clientWidth || 0 : 0, k = g / 2 - h / 2, b = d[l], x = m - u[i] - d[p], $ = m / 2 - u[i] / 2 + k, S = _r(b, $, x), y = f;
    n.modifiersData[r] = (t = {}, t[y] = S, t.centerOffset = S - $, t);
  }
}
function Sd(e) {
  var t = e.state, n = e.options, r = n.element, s = r === void 0 ? "[data-popper-arrow]" : r;
  s != null && (typeof s == "string" && (s = t.elements.popper.querySelector(s), !s) || !Df(t.elements.popper, s) || (t.elements.arrow = s));
}
const Cd = {
  name: "arrow",
  enabled: !0,
  phase: "main",
  fn: Ed,
  effect: Sd,
  requires: ["popperOffsets"],
  requiresIfExists: ["preventOverflow"]
};
function Od(e, t, n) {
  var r = it(e), s = [Se, Ee].indexOf(r) >= 0 ? -1 : 1, o = typeof n == "function" ? n(Object.assign({}, t, {
    placement: e
  })) : n, a = o[0], c = o[1];
  return a = a || 0, c = (c || 0) * s, [Se, Ve].indexOf(r) >= 0 ? {
    x: c,
    y: a
  } : {
    x: a,
    y: c
  };
}
function Md(e) {
  var t = e.state, n = e.options, r = e.name, s = n.offset, o = s === void 0 ? [0, 0] : s, a = Af.reduce(function(i, d) {
    return i[d] = Od(d, t.rects, o), i;
  }, {}), c = a[t.placement], f = c.x, _ = c.y;
  t.modifiersData.popperOffsets != null && (t.modifiersData.popperOffsets.x += f, t.modifiersData.popperOffsets.y += _), t.modifiersData[r] = a;
}
const Ad = {
  name: "offset",
  enabled: !0,
  phase: "main",
  requires: ["popperOffsets"],
  fn: Md
};
function Dd(e) {
  return e === "x" ? "y" : "x";
}
function Td(e) {
  var t = e.state, n = e.options, r = e.name, s = n.mainAxis, o = s === void 0 ? !0 : s, a = n.altAxis, c = a === void 0 ? !1 : a, f = n.boundary, _ = n.rootBoundary, i = n.altBoundary, d = n.padding, u = n.tether, l = u === void 0 ? !0 : u, p = n.tetherOffset, g = p === void 0 ? 0 : p, h = As(t, {
    boundary: f,
    rootBoundary: _,
    padding: d,
    altBoundary: i
  }), v = it(t.placement), m = Rn(t.placement), k = !m, b = Ms(v), x = Dd(b), $ = t.modifiersData.popperOffsets, S = t.rects.reference, y = t.rects.popper, E = typeof g == "function" ? g(Object.assign({}, t.rects, {
    placement: t.placement
  })) : g, C = typeof E == "number" ? {
    mainAxis: E,
    altAxis: E
  } : Object.assign({
    mainAxis: 0,
    altAxis: 0
  }, E), W = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null, F = {
    x: 0,
    y: 0
  };
  if (!!$) {
    if (o) {
      var A, D = b === "y" ? Ee : Se, O = b === "y" ? Ye : Ve, T = b === "y" ? "height" : "width", M = $[b], j = M + h[D], R = M - h[O], U = l ? -y[T] / 2 : 0, G = m === Ln ? S[T] : y[T], z = m === Ln ? -y[T] : -S[T], J = t.elements.arrow, Q = l && J ? Cs(J) : {
        width: 0,
        height: 0
      }, P = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : Nf(), Y = P[D], X = P[O], q = _r(0, S[T], Q[T]), Z = k ? S[T] / 2 - U - q - Y - C.mainAxis : G - q - Y - C.mainAxis, se = k ? -S[T] / 2 + U + q + X + C.mainAxis : z + q + X + C.mainAxis, ie = t.elements.arrow && eo(t.elements.arrow), ye = ie ? b === "y" ? ie.clientTop || 0 : ie.clientLeft || 0 : 0, Ke = (A = W == null ? void 0 : W[b]) != null ? A : 0, ee = M + Z - Ke - ye, wt = M + se - Ke, He = _r(l ? Vo(j, ee) : j, M, l ? an(R, wt) : R);
      $[b] = He, F[b] = He - M;
    }
    if (c) {
      var We, $t = b === "x" ? Ee : Se, Je = b === "x" ? Ye : Ve, te = $[x], ve = x === "y" ? "height" : "width", je = te + h[$t], kt = te - h[Je], Be = [Ee, Se].indexOf(v) !== -1, xt = (We = W == null ? void 0 : W[x]) != null ? We : 0, Et = Be ? je : te - S[ve] - y[ve] - xt + C.altAxis, St = Be ? te + S[ve] + y[ve] - xt - C.altAxis : kt, Ct = l && Be ? kd(Et, te, St) : _r(l ? Et : je, te, l ? St : kt);
      $[x] = Ct, F[x] = Ct - te;
    }
    t.modifiersData[r] = F;
  }
}
const Nd = {
  name: "preventOverflow",
  enabled: !0,
  phase: "main",
  fn: Td,
  requiresIfExists: ["offset"]
};
var Pd = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function yo(e) {
  return e.replace(/left|right|bottom|top/g, function(t) {
    return Pd[t];
  });
}
var Ld = {
  start: "end",
  end: "start"
};
function tl(e) {
  return e.replace(/start|end/g, function(t) {
    return Ld[t];
  });
}
function Rd(e, t) {
  t === void 0 && (t = {});
  var n = t, r = n.placement, s = n.boundary, o = n.rootBoundary, a = n.padding, c = n.flipVariations, f = n.allowedAutoPlacements, _ = f === void 0 ? Af : f, i = Rn(r), d = i ? c ? Ka : Ka.filter(function(p) {
    return Rn(p) === i;
  }) : to, u = d.filter(function(p) {
    return _.indexOf(p) >= 0;
  });
  u.length === 0 && (u = d);
  var l = u.reduce(function(p, g) {
    return p[g] = As(e, {
      placement: g,
      boundary: s,
      rootBoundary: o,
      padding: a
    })[it(g)], p;
  }, {});
  return Object.keys(l).sort(function(p, g) {
    return l[p] - l[g];
  });
}
function Hd(e) {
  if (it(e) === Os)
    return [];
  var t = yo(e);
  return [tl(e), t, tl(t)];
}
function Wd(e) {
  var t = e.state, n = e.options, r = e.name;
  if (!t.modifiersData[r]._skip) {
    for (var s = n.mainAxis, o = s === void 0 ? !0 : s, a = n.altAxis, c = a === void 0 ? !0 : a, f = n.fallbackPlacements, _ = n.padding, i = n.boundary, d = n.rootBoundary, u = n.altBoundary, l = n.flipVariations, p = l === void 0 ? !0 : l, g = n.allowedAutoPlacements, h = t.options.placement, v = it(h), m = v === h, k = f || (m || !p ? [yo(h)] : Hd(h)), b = [h].concat(k).reduce(function(Q, P) {
      return Q.concat(it(P) === Os ? Rd(t, {
        placement: P,
        boundary: i,
        rootBoundary: d,
        padding: _,
        flipVariations: p,
        allowedAutoPlacements: g
      }) : P);
    }, []), x = t.rects.reference, $ = t.rects.popper, S = /* @__PURE__ */ new Map(), y = !0, E = b[0], C = 0; C < b.length; C++) {
      var W = b[C], F = it(W), A = Rn(W) === Ln, D = [Ee, Ye].indexOf(F) >= 0, O = D ? "width" : "height", T = As(t, {
        placement: W,
        boundary: i,
        rootBoundary: d,
        altBoundary: u,
        padding: _
      }), M = D ? A ? Ve : Se : A ? Ye : Ee;
      x[O] > $[O] && (M = yo(M));
      var j = yo(M), R = [];
      if (o && R.push(T[F] <= 0), c && R.push(T[M] <= 0, T[j] <= 0), R.every(function(Q) {
        return Q;
      })) {
        E = W, y = !1;
        break;
      }
      S.set(W, R);
    }
    if (y)
      for (var U = p ? 3 : 1, G = function(P) {
        var Y = b.find(function(X) {
          var q = S.get(X);
          if (q)
            return q.slice(0, P).every(function(Z) {
              return Z;
            });
        });
        if (Y)
          return E = Y, "break";
      }, z = U; z > 0; z--) {
        var J = G(z);
        if (J === "break")
          break;
      }
    t.placement !== E && (t.modifiersData[r]._skip = !0, t.placement = E, t.reset = !0);
  }
}
const jd = {
  name: "flip",
  enabled: !0,
  phase: "main",
  fn: Wd,
  requiresIfExists: ["offset"],
  data: {
    _skip: !1
  }
};
var gn, yn, en, Ie, zr, ci;
class rt extends sn {
  constructor() {
    super(...arguments);
    L(this, gn, void 0);
    L(this, yn, 0);
    L(this, en, void 0);
    L(this, Ie, void 0);
    L(this, zr, void 0);
    N(this, "hideLater", () => {
      w(this, ci).call(this), H(this, yn, window.setTimeout(this.hide.bind(this), 100));
    });
    L(this, ci, () => {
      clearTimeout(w(this, yn)), H(this, yn, 0);
    });
  }
  get isShown() {
    var n;
    return (n = w(this, en)) == null ? void 0 : n.classList.contains(this.constructor.CLASS_SHOW);
  }
  get datetimepicker() {
    return w(this, en) || this._ensureDatetimepicker();
  }
  get popper() {
    return w(this, Ie) ? w(this, Ie) : this._createPopper();
  }
  get trigger() {
    return w(this, zr) || this.element;
  }
  get elementShowClass() {
    return `with-${this.constructor.NAME}-show`;
  }
  show(n) {
    var r;
    return H(this, zr, n), this.element.classList.add(this.elementShowClass), (r = this.datetimepicker) == null || r.classList.add(this.constructor.CLASS_SHOW), this.datetimepicker.classList.add("fade"), this._createPopper().update(), !0;
  }
  hide() {
    var n, r;
    return (n = w(this, Ie)) == null || n.destroy(), H(this, Ie, void 0), this.element.classList.remove(this.elementShowClass), (r = w(this, en)) == null || r.classList.remove(this.constructor.CLASS_SHOW), this.datetimepicker.classList.remove("fade"), !0;
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
    return r.classList.add(n), Np(B(Lp, { ...this.options }), r), this.options.arrow && r.prepend(this._createArrow()), document.body.appendChild(r), H(this, en, r), r;
  }
  _getPopperOptions() {
    const n = this._getArrowSize();
    return {
      modifiers: [
        Nd,
        jd,
        { ...Cd, options: {
          padding: n,
          element: ".arrow"
        } },
        {
          ...Ad,
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
    return w(this, Ie) ? w(this, Ie).setOptions(n) : H(this, Ie, $d(this._getPopperElement(), this.datetimepicker, n)), w(this, Ie);
  }
  _getPopperElement() {
    return w(this, gn) || H(this, gn, {
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
    }), w(this, gn);
  }
  static clear(n) {
    n instanceof Event && (n = { event: n });
    const { exclude: r } = n || {}, s = this.getAll().entries(), o = new Set(r || []);
    for (const [a, c] of s)
      o.has(a) || c.hide();
  }
}
gn = new WeakMap(), yn = new WeakMap(), en = new WeakMap(), Ie = new WeakMap(), zr = new WeakMap(), ci = new WeakMap(), N(rt, "NAME", "datetimepicker"), N(rt, "CLASSNAME", "datetimepicker"), N(rt, "CLASS_SHOW", "show"), N(rt, "MENU_SELECTOR", ".form-datetime:not(.disabled):not(:disabled)"), N(rt, "DEFAULT", {
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
  const t = e.target, n = t.closest(rt.MENU_SELECTOR), r = t.closest(".calendar-bar, .calendar-table-head, .calendar-month-table");
  n ? rt.ensure(n).toggle() : r || rt.clear({ event: e });
});
const Bd = (e) => {
  const t = document.getElementsByClassName("with-datetimepicker-show")[0];
  if (!t)
    return;
  const n = typeof t.closest == "function" ? t.closest(rt.MENU_SELECTOR) : null;
  !n || !e.target.contains(n) || rt.clear({ event: e });
};
window.addEventListener("scroll", Bd, !0);
class Rf extends vt {
  beforeRender() {
    const t = super.beforeRender();
    return t.className = I(t.className, t.type ? `nav-${t.type}` : "", {
      "nav-stacked": t.stacked
    }), t;
  }
}
N(Rf, "NAME", "nav");
class nl extends Xe {
}
N(nl, "NAME", "nav"), N(nl, "Component", Rf);
var Hf, Gi, Wf, Id = [];
function Yt(e, t, n) {
  var r, s, o, a = {};
  for (o in t)
    o == "key" ? r = t[o] : o == "ref" ? s = t[o] : a[o] = t[o];
  if (arguments.length > 2 && (a.children = arguments.length > 3 ? Hf.call(arguments, 2) : n), typeof e == "function" && e.defaultProps != null)
    for (o in e.defaultProps)
      a[o] === void 0 && (a[o] = e.defaultProps[o]);
  return Ud(e, a, r, s, null);
}
function Ud(e, t, n, r, s) {
  var o = { type: e, props: t, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: s == null ? ++Wf : s };
  return s == null && Gi.vnode != null && Gi.vnode(o), o;
}
Hf = Id.slice, Gi = { __e: function(e, t, n, r) {
  for (var s, o, a; t = t.__; )
    if ((s = t.__c) && !s.__)
      try {
        if ((o = s.constructor) && o.getDerivedStateFromError != null && (s.setState(o.getDerivedStateFromError(e)), a = s.__d), s.componentDidCatch != null && (s.componentDidCatch(e, r || {}), a = s.__d), a)
          return s.__E = s;
      } catch (c) {
        e = c;
      }
  throw e;
} }, Wf = 0;
var jf, Xi, Bf, Fd = [];
function Mi(e, t, n) {
  var r, s, o, a = {};
  for (o in t)
    o == "key" ? r = t[o] : o == "ref" ? s = t[o] : a[o] = t[o];
  if (arguments.length > 2 && (a.children = arguments.length > 3 ? jf.call(arguments, 2) : n), typeof e == "function" && e.defaultProps != null)
    for (o in e.defaultProps)
      a[o] === void 0 && (a[o] = e.defaultProps[o]);
  return zd(e, a, r, s, null);
}
function zd(e, t, n, r, s) {
  var o = { type: e, props: t, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: s == null ? ++Bf : s };
  return s == null && Xi.vnode != null && Xi.vnode(o), o;
}
jf = Fd.slice, Xi = { __e: function(e, t, n, r) {
  for (var s, o, a; t = t.__; )
    if ((s = t.__c) && !s.__)
      try {
        if ((o = s.constructor) && o.getDerivedStateFromError != null && (s.setState(o.getDerivedStateFromError(e)), a = s.__d), s.componentDidCatch != null && (s.componentDidCatch(e, r || {}), a = s.__d), a)
          return s.__E = s;
      } catch (c) {
        e = c;
      }
  throw e;
} }, Bf = 0;
function Yd({
  key: e,
  type: t,
  btnType: n,
  ...r
}) {
  return /* @__PURE__ */ Mi(qt, {
    type: n,
    ...r
  });
}
var Ds, _e, If, pr, rl, Uf = {}, Ff = [], Vd = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function It(e, t) {
  for (var n in t)
    e[n] = t[n];
  return e;
}
function zf(e) {
  var t = e.parentNode;
  t && t.removeChild(e);
}
function Yf(e, t, n) {
  var r, s, o, a = {};
  for (o in t)
    o == "key" ? r = t[o] : o == "ref" ? s = t[o] : a[o] = t[o];
  if (arguments.length > 2 && (a.children = arguments.length > 3 ? Ds.call(arguments, 2) : n), typeof e == "function" && e.defaultProps != null)
    for (o in e.defaultProps)
      a[o] === void 0 && (a[o] = e.defaultProps[o]);
  return bo(e, a, r, s, null);
}
function bo(e, t, n, r, s) {
  var o = { type: e, props: t, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: s == null ? ++If : s };
  return s == null && _e.vnode != null && _e.vnode(o), o;
}
function qd() {
  return { current: null };
}
function Ts(e) {
  return e.children;
}
function dr(e, t) {
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
function ol(e) {
  (!e.__d && (e.__d = !0) && pr.push(e) && !qo.__r++ || rl !== _e.debounceRendering) && ((rl = _e.debounceRendering) || setTimeout)(qo);
}
function qo() {
  for (var e; qo.__r = pr.length; )
    e = pr.sort(function(t, n) {
      return t.__v.__b - n.__v.__b;
    }), pr = [], e.some(function(t) {
      var n, r, s, o, a, c;
      t.__d && (a = (o = (n = t).__v).__e, (c = n.__P) && (r = [], (s = It({}, o)).__v = o.__v + 1, Kf(c, o, s, n.__n, c.ownerSVGElement !== void 0, o.__h != null ? [a] : null, r, a == null ? Dr(o) : a, o.__h), Xd(r, o), o.__e != a && Vf(o)));
    });
}
function qf(e, t, n, r, s, o, a, c, f, _) {
  var i, d, u, l, p, g, h, v = r && r.__k || Ff, m = v.length;
  for (n.__k = [], i = 0; i < t.length; i++)
    if ((l = n.__k[i] = (l = t[i]) == null || typeof l == "boolean" ? null : typeof l == "string" || typeof l == "number" || typeof l == "bigint" ? bo(null, l, null, null, l) : Array.isArray(l) ? bo(Ts, { children: l }, null, null, null) : l.__b > 0 ? bo(l.type, l.props, l.key, l.ref ? l.ref : null, l.__v) : l) != null) {
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
      Kf(e, l, u = u || Uf, s, o, a, c, f, _), p = l.__e, (d = l.ref) && u.ref != d && (h || (h = []), u.ref && h.push(u.ref, null, l), h.push(d, l.__c || p, l)), p != null ? (g == null && (g = p), typeof l.type == "function" && l.__k === u.__k ? l.__d = f = Gf(l, f, e) : f = Xf(e, l, u, v, p, f), typeof n.type == "function" && (n.__d = f)) : f && u.__e == f && f.parentNode != e && (f = Dr(u));
    }
  for (n.__e = g, i = m; i--; )
    v[i] != null && Zf(v[i], v[i]);
  if (h)
    for (i = 0; i < h.length; i++)
      Jf(h[i], h[++i], h[++i]);
}
function Gf(e, t, n) {
  for (var r, s = e.__k, o = 0; s && o < s.length; o++)
    (r = s[o]) && (r.__ = e, t = typeof r.type == "function" ? Gf(r, t, n) : Xf(n, r, r, s, r.__e, t));
  return t;
}
function Xf(e, t, n, r, s, o) {
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
function Gd(e, t, n, r, s) {
  var o;
  for (o in n)
    o === "children" || o === "key" || o in t || Go(e, o, null, n[o], r);
  for (o in t)
    s && typeof t[o] != "function" || o === "children" || o === "key" || o === "value" || o === "checked" || n[o] === t[o] || Go(e, o, t[o], n[o], r);
}
function il(e, t, n) {
  t[0] === "-" ? e.setProperty(t, n) : e[t] = n == null ? "" : typeof n != "number" || Vd.test(t) ? n : n + "px";
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
            n && t in n || il(e.style, t, "");
        if (n)
          for (t in n)
            r && n[t] === r[t] || il(e.style, t, n[t]);
      }
    else if (t[0] === "o" && t[1] === "n")
      o = t !== (t = t.replace(/Capture$/, "")), t = t.toLowerCase() in e ? t.toLowerCase().slice(2) : t.slice(2), e.l || (e.l = {}), e.l[t + o] = n, n ? r || e.addEventListener(t, o ? al : sl, o) : e.removeEventListener(t, o ? al : sl, o);
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
function sl(e) {
  this.l[e.type + !1](_e.event ? _e.event(e) : e);
}
function al(e) {
  this.l[e.type + !0](_e.event ? _e.event(e) : e);
}
function Kf(e, t, n, r, s, o, a, c, f) {
  var _, i, d, u, l, p, g, h, v, m, k, b, x, $, S, y = t.type;
  if (t.constructor !== void 0)
    return null;
  n.__h != null && (f = n.__h, c = t.__e = n.__e, t.__h = null, o = [c]), (_ = _e.__b) && _(t);
  try {
    e:
      if (typeof y == "function") {
        if (h = t.props, v = (_ = y.contextType) && r[_.__c], m = _ ? v ? v.props.value : _.__ : r, n.__c ? g = (i = t.__c = n.__c).__ = i.__E : ("prototype" in y && y.prototype.render ? t.__c = i = new y(h, m) : (t.__c = i = new dr(h, m), i.constructor = y, i.render = Jd), v && v.sub(i), i.props = h, i.state || (i.state = {}), i.context = m, i.__n = r, d = i.__d = !0, i.__h = [], i._sb = []), i.__s == null && (i.__s = i.state), y.getDerivedStateFromProps != null && (i.__s == i.state && (i.__s = It({}, i.__s)), It(i.__s, y.getDerivedStateFromProps(h, i.__s))), u = i.props, l = i.state, d)
          y.getDerivedStateFromProps == null && i.componentWillMount != null && i.componentWillMount(), i.componentDidMount != null && i.__h.push(i.componentDidMount);
        else {
          if (y.getDerivedStateFromProps == null && h !== u && i.componentWillReceiveProps != null && i.componentWillReceiveProps(h, m), !i.__e && i.shouldComponentUpdate != null && i.shouldComponentUpdate(h, i.__s, m) === !1 || t.__v === n.__v) {
            for (i.props = h, i.state = i.__s, t.__v !== n.__v && (i.__d = !1), i.__v = t, t.__e = n.__e, t.__k = n.__k, t.__k.forEach(function(E) {
              E && (E.__ = t);
            }), k = 0; k < i._sb.length; k++)
              i.__h.push(i._sb[k]);
            i._sb = [], i.__h.length && a.push(i);
            break e;
          }
          i.componentWillUpdate != null && i.componentWillUpdate(h, i.__s, m), i.componentDidUpdate != null && i.__h.push(function() {
            i.componentDidUpdate(u, l, p);
          });
        }
        if (i.context = m, i.props = h, i.__v = t, i.__P = e, b = _e.__r, x = 0, "prototype" in y && y.prototype.render) {
          for (i.state = i.__s, i.__d = !1, b && b(t), _ = i.render(i.props, i.state, i.context), $ = 0; $ < i._sb.length; $++)
            i.__h.push(i._sb[$]);
          i._sb = [];
        } else
          do
            i.__d = !1, b && b(t), _ = i.render(i.props, i.state, i.context), i.state = i.__s;
          while (i.__d && ++x < 25);
        i.state = i.__s, i.getChildContext != null && (r = It(It({}, r), i.getChildContext())), d || i.getSnapshotBeforeUpdate == null || (p = i.getSnapshotBeforeUpdate(u, l)), S = _ != null && _.type === Ts && _.key == null ? _.props.children : _, qf(e, Array.isArray(S) ? S : [S], t, n, r, s, o, a, c, f), i.base = t.__e, t.__h = null, i.__h.length && a.push(i), g && (i.__E = i.__ = null), i.__e = !1;
      } else
        o == null && t.__v === n.__v ? (t.__k = n.__k, t.__e = n.__e) : t.__e = Kd(n.__e, t, n, r, s, o, a, f);
    (_ = _e.diffed) && _(t);
  } catch (E) {
    t.__v = null, (f || o != null) && (t.__e = c, t.__h = !!f, o[o.indexOf(c)] = null), _e.__e(E, t, n);
  }
}
function Xd(e, t) {
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
function Kd(e, t, n, r, s, o, a, c) {
  var f, _, i, d = n.props, u = t.props, l = t.type, p = 0;
  if (l === "svg" && (s = !0), o != null) {
    for (; p < o.length; p++)
      if ((f = o[p]) && "setAttribute" in f == !!l && (l ? f.localName === l : f.nodeType === 3)) {
        e = f, o[p] = null;
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
    if (o = o && Ds.call(e.childNodes), _ = (d = n.props || Uf).dangerouslySetInnerHTML, i = u.dangerouslySetInnerHTML, !c) {
      if (o != null)
        for (d = {}, p = 0; p < e.attributes.length; p++)
          d[e.attributes[p].name] = e.attributes[p].value;
      (i || _) && (i && (_ && i.__html == _.__html || i.__html === e.innerHTML) || (e.innerHTML = i && i.__html || ""));
    }
    if (Gd(e, u, d, s, c), i)
      t.__k = [];
    else if (p = t.props.children, qf(e, Array.isArray(p) ? p : [p], t, n, r, s && l !== "foreignObject", o, a, o ? o[0] : n.__k && Dr(n, 0), c), o != null)
      for (p = o.length; p--; )
        o[p] != null && zf(o[p]);
    c || ("value" in u && (p = u.value) !== void 0 && (p !== e.value || l === "progress" && !p || l === "option" && p !== d.value) && Go(e, "value", p, d.value, !1), "checked" in u && (p = u.checked) !== void 0 && p !== e.checked && Go(e, "checked", p, d.checked, !1));
  }
  return e;
}
function Jf(e, t, n) {
  try {
    typeof e == "function" ? e(t) : e.current = t;
  } catch (r) {
    _e.__e(r, n);
  }
}
function Zf(e, t, n) {
  var r, s;
  if (_e.unmount && _e.unmount(e), (r = e.ref) && (r.current && r.current !== e.__e || Jf(r, null, t)), (r = e.__c) != null) {
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
      r[s] && Zf(r[s], t, n || typeof e.type != "function");
  n || e.__e == null || zf(e.__e), e.__ = e.__e = e.__d = void 0;
}
function Jd(e, t, n) {
  return this.constructor(e, n);
}
Ds = Ff.slice, _e = { __e: function(e, t, n, r) {
  for (var s, o, a; t = t.__; )
    if ((s = t.__c) && !s.__)
      try {
        if ((o = s.constructor) && o.getDerivedStateFromError != null && (s.setState(o.getDerivedStateFromError(e)), a = s.__d), s.componentDidCatch != null && (s.componentDidCatch(e, r || {}), a = s.__d), a)
          return s.__E = s;
      } catch (c) {
        e = c;
      }
  throw e;
} }, If = 0, dr.prototype.setState = function(e, t) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = It({}, this.state), typeof e == "function" && (e = e(It({}, n), this.props)), e && It(n, e), e != null && this.__v && (t && this._sb.push(t), ol(this));
}, dr.prototype.forceUpdate = function(e) {
  this.__v && (this.__e = !0, e && this.__h.push(e), ol(this));
}, dr.prototype.render = Ts, pr = [], qo.__r = 0;
var Ns = "top", Qf = "bottom", Xo = "right", Tr = "left", Zd = "auto", eu = [Ns, Qf, Xo, Tr], Qd = "start", eh = "end", th = /* @__PURE__ */ [].concat(eu, [Zd]).reduce(function(e, t) {
  return e.concat([t, t + "-" + Qd, t + "-" + eh]);
}, []);
function tu(e) {
  return e.split("-")[0];
}
function Yn(e) {
  if (e == null)
    return window;
  if (e.toString() !== "[object Window]") {
    var t = e.ownerDocument;
    return t && t.defaultView || window;
  }
  return e;
}
function nu(e) {
  var t = Yn(e).Element;
  return e instanceof t || e instanceof Element;
}
function Ko(e) {
  var t = Yn(e).HTMLElement;
  return e instanceof t || e instanceof HTMLElement;
}
function Ps(e) {
  if (typeof ShadowRoot > "u")
    return !1;
  var t = Yn(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot;
}
var nh = Math.max, rh = Math.min, ll = Math.round;
function Ki() {
  var e = navigator.userAgentData;
  return e != null && e.brands ? e.brands.map(function(t) {
    return t.brand + "/" + t.version;
  }).join(" ") : navigator.userAgent;
}
function oh() {
  return !/^((?!chrome|android).)*safari/i.test(Ki());
}
function ih(e, t, n) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  var r = e.getBoundingClientRect(), s = 1, o = 1;
  t && Ko(e) && (s = e.offsetWidth > 0 && ll(r.width) / e.offsetWidth || 1, o = e.offsetHeight > 0 && ll(r.height) / e.offsetHeight || 1);
  var a = nu(e) ? Yn(e) : window, c = a.visualViewport, f = !oh() && n, _ = (r.left + (f && c ? c.offsetLeft : 0)) / s, i = (r.top + (f && c ? c.offsetTop : 0)) / o, d = r.width / s, u = r.height / o;
  return {
    width: d,
    height: u,
    top: i,
    right: _ + d,
    bottom: i + u,
    left: _,
    x: _,
    y: i
  };
}
function sh(e) {
  var t = ih(e), n = e.offsetWidth, r = e.offsetHeight;
  return Math.abs(t.width - n) <= 1 && (n = t.width), Math.abs(t.height - r) <= 1 && (r = t.height), {
    x: e.offsetLeft,
    y: e.offsetTop,
    width: n,
    height: r
  };
}
function ah(e, t) {
  var n = t.getRootNode && t.getRootNode();
  if (e.contains(t))
    return !0;
  if (n && Ps(n)) {
    var r = t;
    do {
      if (r && e.isSameNode(r))
        return !0;
      r = r.parentNode || r.host;
    } while (r);
  }
  return !1;
}
function Nr(e) {
  return e ? (e.nodeName || "").toLowerCase() : null;
}
function Pr(e) {
  return Yn(e).getComputedStyle(e);
}
function lh(e) {
  return ["table", "td", "th"].indexOf(Nr(e)) >= 0;
}
function ch(e) {
  return ((nu(e) ? e.ownerDocument : e.document) || window.document).documentElement;
}
function fh(e) {
  return Nr(e) === "html" ? e : e.assignedSlot || e.parentNode || (Ps(e) ? e.host : null) || ch(e);
}
function cl(e) {
  return !Ko(e) || Pr(e).position === "fixed" ? null : e.offsetParent;
}
function uh(e) {
  var t = /firefox/i.test(Ki()), n = /Trident/i.test(Ki());
  if (n && Ko(e)) {
    var r = Pr(e);
    if (r.position === "fixed")
      return null;
  }
  var s = fh(e);
  for (Ps(s) && (s = s.host); Ko(s) && ["html", "body"].indexOf(Nr(s)) < 0; ) {
    var o = Pr(s);
    if (o.transform !== "none" || o.perspective !== "none" || o.contain === "paint" || ["transform", "perspective"].indexOf(o.willChange) !== -1 || t && o.willChange === "filter" || t && o.filter && o.filter !== "none")
      return s;
    s = s.parentNode;
  }
  return null;
}
function _h(e) {
  for (var t = Yn(e), n = cl(e); n && lh(n) && Pr(n).position === "static"; )
    n = cl(n);
  return n && (Nr(n) === "html" || Nr(n) === "body" && Pr(n).position === "static") ? t : n || uh(e) || t;
}
function ph(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function dh(e, t, n) {
  return nh(e, rh(t, n));
}
function hh() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
function vh(e) {
  return Object.assign({}, hh(), e);
}
function mh(e, t) {
  return t.reduce(function(n, r) {
    return n[r] = e, n;
  }, {});
}
var gh = function(t, n) {
  return t = typeof t == "function" ? t(Object.assign({}, n.rects, {
    placement: n.placement
  })) : t, vh(typeof t != "number" ? t : mh(t, eu));
};
function yh(e) {
  var t, n = e.state, r = e.name, s = e.options, o = n.elements.arrow, a = n.modifiersData.popperOffsets, c = tu(n.placement), f = ph(c), _ = [Tr, Xo].indexOf(c) >= 0, i = _ ? "height" : "width";
  if (!(!o || !a)) {
    var d = gh(s.padding, n), u = sh(o), l = f === "y" ? Ns : Tr, p = f === "y" ? Qf : Xo, g = n.rects.reference[i] + n.rects.reference[f] - a[f] - n.rects.popper[i], h = a[f] - n.rects.reference[f], v = _h(o), m = v ? f === "y" ? v.clientHeight || 0 : v.clientWidth || 0 : 0, k = g / 2 - h / 2, b = d[l], x = m - u[i] - d[p], $ = m / 2 - u[i] / 2 + k, S = dh(b, $, x), y = f;
    n.modifiersData[r] = (t = {}, t[y] = S, t.centerOffset = S - $, t);
  }
}
function bh(e) {
  var t = e.state, n = e.options, r = n.element, s = r === void 0 ? "[data-popper-arrow]" : r;
  s != null && (typeof s == "string" && (s = t.elements.popper.querySelector(s), !s) || !ah(t.elements.popper, s) || (t.elements.arrow = s));
}
const wh = {
  name: "arrow",
  enabled: !0,
  phase: "main",
  fn: yh,
  effect: bh,
  requires: ["popperOffsets"],
  requiresIfExists: ["preventOverflow"]
};
function $h(e, t, n) {
  var r = tu(e), s = [Tr, Ns].indexOf(r) >= 0 ? -1 : 1, o = typeof n == "function" ? n(Object.assign({}, t, {
    placement: e
  })) : n, a = o[0], c = o[1];
  return a = a || 0, c = (c || 0) * s, [Tr, Xo].indexOf(r) >= 0 ? {
    x: c,
    y: a
  } : {
    x: a,
    y: c
  };
}
function kh(e) {
  var t = e.state, n = e.options, r = e.name, s = n.offset, o = s === void 0 ? [0, 0] : s, a = th.reduce(function(i, d) {
    return i[d] = $h(d, t.rects, o), i;
  }, {}), c = a[t.placement], f = c.x, _ = c.y;
  t.modifiersData.popperOffsets != null && (t.modifiersData.popperOffsets.x += f, t.modifiersData.popperOffsets.y += _), t.modifiersData[r] = a;
}
const xh = {
  name: "offset",
  enabled: !0,
  phase: "main",
  requires: ["popperOffsets"],
  fn: kh
};
var Ai, oe, ru, hr, fl, Jo = {}, ou = [], Eh = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function Ut(e, t) {
  for (var n in t)
    e[n] = t[n];
  return e;
}
function iu(e) {
  var t = e.parentNode;
  t && t.removeChild(e);
}
function Ls(e, t, n) {
  var r, s, o, a = {};
  for (o in t)
    o == "key" ? r = t[o] : o == "ref" ? s = t[o] : a[o] = t[o];
  if (arguments.length > 2 && (a.children = arguments.length > 3 ? Ai.call(arguments, 2) : n), typeof e == "function" && e.defaultProps != null)
    for (o in e.defaultProps)
      a[o] === void 0 && (a[o] = e.defaultProps[o]);
  return wo(e, a, r, s, null);
}
function wo(e, t, n, r, s) {
  var o = { type: e, props: t, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: s == null ? ++ru : s };
  return s == null && oe.vnode != null && oe.vnode(o), o;
}
function Di(e) {
  return e.children;
}
function $o(e, t) {
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
function su(e) {
  var t, n;
  if ((e = e.__) != null && e.__c != null) {
    for (e.__e = e.__c.base = null, t = 0; t < e.__k.length; t++)
      if ((n = e.__k[t]) != null && n.__e != null) {
        e.__e = e.__c.base = n.__e;
        break;
      }
    return su(e);
  }
}
function ul(e) {
  (!e.__d && (e.__d = !0) && hr.push(e) && !Zo.__r++ || fl !== oe.debounceRendering) && ((fl = oe.debounceRendering) || setTimeout)(Zo);
}
function Zo() {
  for (var e; Zo.__r = hr.length; )
    e = hr.sort(function(t, n) {
      return t.__v.__b - n.__v.__b;
    }), hr = [], e.some(function(t) {
      var n, r, s, o, a, c;
      t.__d && (a = (o = (n = t).__v).__e, (c = n.__P) && (r = [], (s = Ut({}, o)).__v = o.__v + 1, Rs(c, o, s, n.__n, c.ownerSVGElement !== void 0, o.__h != null ? [a] : null, r, a == null ? Lr(o) : a, o.__h), fu(r, o), o.__e != a && su(o)));
    });
}
function au(e, t, n, r, s, o, a, c, f, _) {
  var i, d, u, l, p, g, h, v = r && r.__k || ou, m = v.length;
  for (n.__k = [], i = 0; i < t.length; i++)
    if ((l = n.__k[i] = (l = t[i]) == null || typeof l == "boolean" ? null : typeof l == "string" || typeof l == "number" || typeof l == "bigint" ? wo(null, l, null, null, l) : Array.isArray(l) ? wo(Di, { children: l }, null, null, null) : l.__b > 0 ? wo(l.type, l.props, l.key, l.ref ? l.ref : null, l.__v) : l) != null) {
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
      Rs(e, l, u = u || Jo, s, o, a, c, f, _), p = l.__e, (d = l.ref) && u.ref != d && (h || (h = []), u.ref && h.push(u.ref, null, l), h.push(d, l.__c || p, l)), p != null ? (g == null && (g = p), typeof l.type == "function" && l.__k === u.__k ? l.__d = f = lu(l, f, e) : f = cu(e, l, u, v, p, f), typeof n.type == "function" && (n.__d = f)) : f && u.__e == f && f.parentNode != e && (f = Lr(u));
    }
  for (n.__e = g, i = m; i--; )
    v[i] != null && _u(v[i], v[i]);
  if (h)
    for (i = 0; i < h.length; i++)
      uu(h[i], h[++i], h[++i]);
}
function lu(e, t, n) {
  for (var r, s = e.__k, o = 0; s && o < s.length; o++)
    (r = s[o]) && (r.__ = e, t = typeof r.type == "function" ? lu(r, t, n) : cu(n, r, r, s, r.__e, t));
  return t;
}
function cu(e, t, n, r, s, o) {
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
function Sh(e, t, n, r, s) {
  var o;
  for (o in n)
    o === "children" || o === "key" || o in t || Qo(e, o, null, n[o], r);
  for (o in t)
    s && typeof t[o] != "function" || o === "children" || o === "key" || o === "value" || o === "checked" || n[o] === t[o] || Qo(e, o, t[o], n[o], r);
}
function _l(e, t, n) {
  t[0] === "-" ? e.setProperty(t, n) : e[t] = n == null ? "" : typeof n != "number" || Eh.test(t) ? n : n + "px";
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
  var _, i, d, u, l, p, g, h, v, m, k, b, x, $, S, y = t.type;
  if (t.constructor !== void 0)
    return null;
  n.__h != null && (f = n.__h, c = t.__e = n.__e, t.__h = null, o = [c]), (_ = oe.__b) && _(t);
  try {
    e:
      if (typeof y == "function") {
        if (h = t.props, v = (_ = y.contextType) && r[_.__c], m = _ ? v ? v.props.value : _.__ : r, n.__c ? g = (i = t.__c = n.__c).__ = i.__E : ("prototype" in y && y.prototype.render ? t.__c = i = new y(h, m) : (t.__c = i = new $o(h, m), i.constructor = y, i.render = Oh), v && v.sub(i), i.props = h, i.state || (i.state = {}), i.context = m, i.__n = r, d = i.__d = !0, i.__h = [], i._sb = []), i.__s == null && (i.__s = i.state), y.getDerivedStateFromProps != null && (i.__s == i.state && (i.__s = Ut({}, i.__s)), Ut(i.__s, y.getDerivedStateFromProps(h, i.__s))), u = i.props, l = i.state, d)
          y.getDerivedStateFromProps == null && i.componentWillMount != null && i.componentWillMount(), i.componentDidMount != null && i.__h.push(i.componentDidMount);
        else {
          if (y.getDerivedStateFromProps == null && h !== u && i.componentWillReceiveProps != null && i.componentWillReceiveProps(h, m), !i.__e && i.shouldComponentUpdate != null && i.shouldComponentUpdate(h, i.__s, m) === !1 || t.__v === n.__v) {
            for (i.props = h, i.state = i.__s, t.__v !== n.__v && (i.__d = !1), i.__v = t, t.__e = n.__e, t.__k = n.__k, t.__k.forEach(function(E) {
              E && (E.__ = t);
            }), k = 0; k < i._sb.length; k++)
              i.__h.push(i._sb[k]);
            i._sb = [], i.__h.length && a.push(i);
            break e;
          }
          i.componentWillUpdate != null && i.componentWillUpdate(h, i.__s, m), i.componentDidUpdate != null && i.__h.push(function() {
            i.componentDidUpdate(u, l, p);
          });
        }
        if (i.context = m, i.props = h, i.__v = t, i.__P = e, b = oe.__r, x = 0, "prototype" in y && y.prototype.render) {
          for (i.state = i.__s, i.__d = !1, b && b(t), _ = i.render(i.props, i.state, i.context), $ = 0; $ < i._sb.length; $++)
            i.__h.push(i._sb[$]);
          i._sb = [];
        } else
          do
            i.__d = !1, b && b(t), _ = i.render(i.props, i.state, i.context), i.state = i.__s;
          while (i.__d && ++x < 25);
        i.state = i.__s, i.getChildContext != null && (r = Ut(Ut({}, r), i.getChildContext())), d || i.getSnapshotBeforeUpdate == null || (p = i.getSnapshotBeforeUpdate(u, l)), S = _ != null && _.type === Di && _.key == null ? _.props.children : _, au(e, Array.isArray(S) ? S : [S], t, n, r, s, o, a, c, f), i.base = t.__e, t.__h = null, i.__h.length && a.push(i), g && (i.__E = i.__ = null), i.__e = !1;
      } else
        o == null && t.__v === n.__v ? (t.__k = n.__k, t.__e = n.__e) : t.__e = Ch(n.__e, t, n, r, s, o, a, f);
    (_ = oe.diffed) && _(t);
  } catch (E) {
    t.__v = null, (f || o != null) && (t.__e = c, t.__h = !!f, o[o.indexOf(c)] = null), oe.__e(E, t, n);
  }
}
function fu(e, t) {
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
function Ch(e, t, n, r, s, o, a, c) {
  var f, _, i, d = n.props, u = t.props, l = t.type, p = 0;
  if (l === "svg" && (s = !0), o != null) {
    for (; p < o.length; p++)
      if ((f = o[p]) && "setAttribute" in f == !!l && (l ? f.localName === l : f.nodeType === 3)) {
        e = f, o[p] = null;
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
    if (o = o && Ai.call(e.childNodes), _ = (d = n.props || Jo).dangerouslySetInnerHTML, i = u.dangerouslySetInnerHTML, !c) {
      if (o != null)
        for (d = {}, p = 0; p < e.attributes.length; p++)
          d[e.attributes[p].name] = e.attributes[p].value;
      (i || _) && (i && (_ && i.__html == _.__html || i.__html === e.innerHTML) || (e.innerHTML = i && i.__html || ""));
    }
    if (Sh(e, u, d, s, c), i)
      t.__k = [];
    else if (p = t.props.children, au(e, Array.isArray(p) ? p : [p], t, n, r, s && l !== "foreignObject", o, a, o ? o[0] : n.__k && Lr(n, 0), c), o != null)
      for (p = o.length; p--; )
        o[p] != null && iu(o[p]);
    c || ("value" in u && (p = u.value) !== void 0 && (p !== e.value || l === "progress" && !p || l === "option" && p !== d.value) && Qo(e, "value", p, d.value, !1), "checked" in u && (p = u.checked) !== void 0 && p !== e.checked && Qo(e, "checked", p, d.checked, !1));
  }
  return e;
}
function uu(e, t, n) {
  try {
    typeof e == "function" ? e(t) : e.current = t;
  } catch (r) {
    oe.__e(r, n);
  }
}
function _u(e, t, n) {
  var r, s;
  if (oe.unmount && oe.unmount(e), (r = e.ref) && (r.current && r.current !== e.__e || uu(r, null, t)), (r = e.__c) != null) {
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
      r[s] && _u(r[s], t, n || typeof e.type != "function");
  n || e.__e == null || iu(e.__e), e.__ = e.__e = e.__d = void 0;
}
function Oh(e, t, n) {
  return this.constructor(e, n);
}
function Mh(e, t, n) {
  var r, s, o;
  oe.__ && oe.__(e, t), s = (r = typeof n == "function") ? null : n && n.__k || t.__k, o = [], Rs(t, e = (!r && n || t).__k = Ls(Di, null, [e]), s || Jo, Jo, t.ownerSVGElement !== void 0, !r && n ? [n] : s ? null : t.firstChild ? Ai.call(t.childNodes) : null, o, !r && n ? n : s ? s.__e : t.firstChild, r), fu(o, e);
}
Ai = ou.slice, oe = { __e: function(e, t, n, r) {
  for (var s, o, a; t = t.__; )
    if ((s = t.__c) && !s.__)
      try {
        if ((o = s.constructor) && o.getDerivedStateFromError != null && (s.setState(o.getDerivedStateFromError(e)), a = s.__d), s.componentDidCatch != null && (s.componentDidCatch(e, r || {}), a = s.__d), a)
          return s.__E = s;
      } catch (c) {
        e = c;
      }
  throw e;
} }, ru = 0, $o.prototype.setState = function(e, t) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = Ut({}, this.state), typeof e == "function" && (e = e(Ut({}, n), this.props)), e && Ut(n, e), e != null && this.__v && (t && this._sb.push(t), ul(this));
}, $o.prototype.forceUpdate = function(e) {
  this.__v && (this.__e = !0, e && this.__h.push(e), ul(this));
}, $o.prototype.render = Di, hr = [], Zo.__r = 0;
function Le(e) {
  if (e == null)
    return window;
  if (e.toString() !== "[object Window]") {
    var t = e.ownerDocument;
    return t && t.defaultView || window;
  }
  return e;
}
function un(e) {
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
var ln = Math.max, ei = Math.min, Hn = Math.round;
function Ji() {
  var e = navigator.userAgentData;
  return e != null && e.brands ? e.brands.map(function(t) {
    return t.brand + "/" + t.version;
  }).join(" ") : navigator.userAgent;
}
function pu() {
  return !/^((?!chrome|android).)*safari/i.test(Ji());
}
function Wn(e, t, n) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  var r = e.getBoundingClientRect(), s = 1, o = 1;
  t && Te(e) && (s = e.offsetWidth > 0 && Hn(r.width) / e.offsetWidth || 1, o = e.offsetHeight > 0 && Hn(r.height) / e.offsetHeight || 1);
  var a = un(e) ? Le(e) : window, c = a.visualViewport, f = !pu() && n, _ = (r.left + (f && c ? c.offsetLeft : 0)) / s, i = (r.top + (f && c ? c.offsetTop : 0)) / o, d = r.width / s, u = r.height / o;
  return {
    width: d,
    height: u,
    top: i,
    right: _ + d,
    bottom: i + u,
    left: _,
    x: _,
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
function Ah(e) {
  return {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  };
}
function Dh(e) {
  return e === Le(e) || !Te(e) ? Ws(e) : Ah(e);
}
function lt(e) {
  return e ? (e.nodeName || "").toLowerCase() : null;
}
function Kt(e) {
  return ((un(e) ? e.ownerDocument : e.document) || window.document).documentElement;
}
function js(e) {
  return Wn(Kt(e)).left + Ws(e).scrollLeft;
}
function yt(e) {
  return Le(e).getComputedStyle(e);
}
function Bs(e) {
  var t = yt(e), n = t.overflow, r = t.overflowX, s = t.overflowY;
  return /auto|scroll|overlay|hidden/.test(n + s + r);
}
function Th(e) {
  var t = e.getBoundingClientRect(), n = Hn(t.width) / e.offsetWidth || 1, r = Hn(t.height) / e.offsetHeight || 1;
  return n !== 1 || r !== 1;
}
function Nh(e, t, n) {
  n === void 0 && (n = !1);
  var r = Te(t), s = Te(t) && Th(t), o = Kt(t), a = Wn(e, s, n), c = {
    scrollLeft: 0,
    scrollTop: 0
  }, f = {
    x: 0,
    y: 0
  };
  return (r || !r && !n) && ((lt(t) !== "body" || Bs(o)) && (c = Dh(t)), Te(t) ? (f = Wn(t, !0), f.x += t.clientLeft, f.y += t.clientTop) : o && (f.x = js(o))), {
    x: a.left + c.scrollLeft - f.x,
    y: a.top + c.scrollTop - f.y,
    width: a.width,
    height: a.height
  };
}
function du(e) {
  var t = Wn(e), n = e.offsetWidth, r = e.offsetHeight;
  return Math.abs(t.width - n) <= 1 && (n = t.width), Math.abs(t.height - r) <= 1 && (r = t.height), {
    x: e.offsetLeft,
    y: e.offsetTop,
    width: n,
    height: r
  };
}
function Ti(e) {
  return lt(e) === "html" ? e : e.assignedSlot || e.parentNode || (Hs(e) ? e.host : null) || Kt(e);
}
function hu(e) {
  return ["html", "body", "#document"].indexOf(lt(e)) >= 0 ? e.ownerDocument.body : Te(e) && Bs(e) ? e : hu(Ti(e));
}
function vr(e, t) {
  var n;
  t === void 0 && (t = []);
  var r = hu(e), s = r === ((n = e.ownerDocument) == null ? void 0 : n.body), o = Le(r), a = s ? [o].concat(o.visualViewport || [], Bs(r) ? r : []) : r, c = t.concat(a);
  return s ? c : c.concat(vr(Ti(a)));
}
function Ph(e) {
  return ["table", "td", "th"].indexOf(lt(e)) >= 0;
}
function hl(e) {
  return !Te(e) || yt(e).position === "fixed" ? null : e.offsetParent;
}
function Lh(e) {
  var t = /firefox/i.test(Ji()), n = /Trident/i.test(Ji());
  if (n && Te(e)) {
    var r = yt(e);
    if (r.position === "fixed")
      return null;
  }
  var s = Ti(e);
  for (Hs(s) && (s = s.host); Te(s) && ["html", "body"].indexOf(lt(s)) < 0; ) {
    var o = yt(s);
    if (o.transform !== "none" || o.perspective !== "none" || o.contain === "paint" || ["transform", "perspective"].indexOf(o.willChange) !== -1 || t && o.willChange === "filter" || t && o.filter && o.filter !== "none")
      return s;
    s = s.parentNode;
  }
  return null;
}
function Ni(e) {
  for (var t = Le(e), n = hl(e); n && Ph(n) && yt(n).position === "static"; )
    n = hl(n);
  return n && (lt(n) === "html" || lt(n) === "body" && yt(n).position === "static") ? t : n || Lh(e) || t;
}
var ze = "top", ct = "bottom", Gt = "right", mt = "left", Is = "auto", Pi = [ze, ct, Gt, mt], jn = "start", Rr = "end", Rh = "clippingParents", vu = "viewport", Gn = "popper", Hh = "reference", vl = /* @__PURE__ */ Pi.reduce(function(e, t) {
  return e.concat([t + "-" + jn, t + "-" + Rr]);
}, []), Wh = /* @__PURE__ */ [].concat(Pi, [Is]).reduce(function(e, t) {
  return e.concat([t, t + "-" + jn, t + "-" + Rr]);
}, []), jh = "beforeRead", Bh = "read", Ih = "afterRead", Uh = "beforeMain", Fh = "main", zh = "afterMain", Yh = "beforeWrite", Vh = "write", qh = "afterWrite", Gh = [jh, Bh, Ih, Uh, Fh, zh, Yh, Vh, qh];
function Xh(e) {
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
function Kh(e) {
  var t = Xh(e);
  return Gh.reduce(function(n, r) {
    return n.concat(t.filter(function(s) {
      return s.phase === r;
    }));
  }, []);
}
function Jh(e) {
  var t;
  return function() {
    return t || (t = new Promise(function(n) {
      Promise.resolve().then(function() {
        t = void 0, n(e());
      });
    })), t;
  };
}
function Vt(e) {
  return e.split("-")[0];
}
function Zh(e) {
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
function Qh(e, t) {
  var n = Le(e), r = Kt(e), s = n.visualViewport, o = r.clientWidth, a = r.clientHeight, c = 0, f = 0;
  if (s) {
    o = s.width, a = s.height;
    var _ = pu();
    (_ || !_ && t === "fixed") && (c = s.offsetLeft, f = s.offsetTop);
  }
  return {
    width: o,
    height: a,
    x: c + js(e),
    y: f
  };
}
function ev(e) {
  var t, n = Kt(e), r = Ws(e), s = (t = e.ownerDocument) == null ? void 0 : t.body, o = ln(n.scrollWidth, n.clientWidth, s ? s.scrollWidth : 0, s ? s.clientWidth : 0), a = ln(n.scrollHeight, n.clientHeight, s ? s.scrollHeight : 0, s ? s.clientHeight : 0), c = -r.scrollLeft + js(e), f = -r.scrollTop;
  return yt(s || n).direction === "rtl" && (c += ln(n.clientWidth, s ? s.clientWidth : 0) - o), {
    width: o,
    height: a,
    x: c,
    y: f
  };
}
function tv(e, t) {
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
function Zi(e) {
  return Object.assign({}, e, {
    left: e.x,
    top: e.y,
    right: e.x + e.width,
    bottom: e.y + e.height
  });
}
function nv(e, t) {
  var n = Wn(e, !1, t === "fixed");
  return n.top = n.top + e.clientTop, n.left = n.left + e.clientLeft, n.bottom = n.top + e.clientHeight, n.right = n.left + e.clientWidth, n.width = e.clientWidth, n.height = e.clientHeight, n.x = n.left, n.y = n.top, n;
}
function ml(e, t, n) {
  return t === vu ? Zi(Qh(e, n)) : un(t) ? nv(t, n) : Zi(ev(Kt(e)));
}
function rv(e) {
  var t = vr(Ti(e)), n = ["absolute", "fixed"].indexOf(yt(e).position) >= 0, r = n && Te(e) ? Ni(e) : e;
  return un(r) ? t.filter(function(s) {
    return un(s) && tv(s, r) && lt(s) !== "body";
  }) : [];
}
function ov(e, t, n, r) {
  var s = t === "clippingParents" ? rv(e) : [].concat(t), o = [].concat(s, [n]), a = o[0], c = o.reduce(function(f, _) {
    var i = ml(e, _, r);
    return f.top = ln(i.top, f.top), f.right = ei(i.right, f.right), f.bottom = ei(i.bottom, f.bottom), f.left = ln(i.left, f.left), f;
  }, ml(e, a, r));
  return c.width = c.right - c.left, c.height = c.bottom - c.top, c.x = c.left, c.y = c.top, c;
}
function Bn(e) {
  return e.split("-")[1];
}
function mu(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function gu(e) {
  var t = e.reference, n = e.element, r = e.placement, s = r ? Vt(r) : null, o = r ? Bn(r) : null, a = t.x + t.width / 2 - n.width / 2, c = t.y + t.height / 2 - n.height / 2, f;
  switch (s) {
    case ze:
      f = {
        x: a,
        y: t.y - n.height
      };
      break;
    case ct:
      f = {
        x: a,
        y: t.y + t.height
      };
      break;
    case Gt:
      f = {
        x: t.x + t.width,
        y: c
      };
      break;
    case mt:
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
  var _ = s ? mu(s) : null;
  if (_ != null) {
    var i = _ === "y" ? "height" : "width";
    switch (o) {
      case jn:
        f[_] = f[_] - (t[i] / 2 - n[i] / 2);
        break;
      case Rr:
        f[_] = f[_] + (t[i] / 2 - n[i] / 2);
        break;
    }
  }
  return f;
}
function yu() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
function iv(e) {
  return Object.assign({}, yu(), e);
}
function sv(e, t) {
  return t.reduce(function(n, r) {
    return n[r] = e, n;
  }, {});
}
function Us(e, t) {
  t === void 0 && (t = {});
  var n = t, r = n.placement, s = r === void 0 ? e.placement : r, o = n.strategy, a = o === void 0 ? e.strategy : o, c = n.boundary, f = c === void 0 ? Rh : c, _ = n.rootBoundary, i = _ === void 0 ? vu : _, d = n.elementContext, u = d === void 0 ? Gn : d, l = n.altBoundary, p = l === void 0 ? !1 : l, g = n.padding, h = g === void 0 ? 0 : g, v = iv(typeof h != "number" ? h : sv(h, Pi)), m = u === Gn ? Hh : Gn, k = e.rects.popper, b = e.elements[p ? m : u], x = ov(un(b) ? b : b.contextElement || Kt(e.elements.popper), f, i, a), $ = Wn(e.elements.reference), S = gu({
    reference: $,
    element: k,
    strategy: "absolute",
    placement: s
  }), y = Zi(Object.assign({}, k, S)), E = u === Gn ? y : $, C = {
    top: x.top - E.top + v.top,
    bottom: E.bottom - x.bottom + v.bottom,
    left: x.left - E.left + v.left,
    right: E.right - x.right + v.right
  }, W = e.modifiersData.offset;
  if (u === Gn && W) {
    var F = W[s];
    Object.keys(C).forEach(function(A) {
      var D = [Gt, ct].indexOf(A) >= 0 ? 1 : -1, O = [ze, ct].indexOf(A) >= 0 ? "y" : "x";
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
function av(e) {
  e === void 0 && (e = {});
  var t = e, n = t.defaultModifiers, r = n === void 0 ? [] : n, s = t.defaultOptions, o = s === void 0 ? gl : s;
  return function(c, f, _) {
    _ === void 0 && (_ = o);
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
          reference: un(c) ? vr(c) : c.contextElement ? vr(c.contextElement) : [],
          popper: vr(f)
        };
        var k = Kh(Zh([].concat(r, i.options.modifiers)));
        return i.orderedModifiers = k.filter(function(b) {
          return b.enabled;
        }), p(), l.update();
      },
      forceUpdate: function() {
        if (!u) {
          var v = i.elements, m = v.reference, k = v.popper;
          if (!!yl(m, k)) {
            i.rects = {
              reference: Nh(m, Ni(k), i.options.strategy === "fixed"),
              popper: du(k)
            }, i.reset = !1, i.placement = i.options.placement, i.orderedModifiers.forEach(function(C) {
              return i.modifiersData[C.name] = Object.assign({}, C.data);
            });
            for (var b = 0; b < i.orderedModifiers.length; b++) {
              if (i.reset === !0) {
                i.reset = !1, b = -1;
                continue;
              }
              var x = i.orderedModifiers[b], $ = x.fn, S = x.options, y = S === void 0 ? {} : S, E = x.name;
              typeof $ == "function" && (i = $({
                state: i,
                options: y,
                name: E,
                instance: l
              }) || i);
            }
          }
        }
      },
      update: Jh(function() {
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
    l.setOptions(_).then(function(h) {
      !u && _.onFirstUpdate && _.onFirstUpdate(h);
    });
    function p() {
      i.orderedModifiers.forEach(function(h) {
        var v = h.name, m = h.options, k = m === void 0 ? {} : m, b = h.effect;
        if (typeof b == "function") {
          var x = b({
            state: i,
            name: v,
            instance: l,
            options: k
          }), $ = function() {
          };
          d.push(x || $);
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
var ao = {
  passive: !0
};
function lv(e) {
  var t = e.state, n = e.instance, r = e.options, s = r.scroll, o = s === void 0 ? !0 : s, a = r.resize, c = a === void 0 ? !0 : a, f = Le(t.elements.popper), _ = [].concat(t.scrollParents.reference, t.scrollParents.popper);
  return o && _.forEach(function(i) {
    i.addEventListener("scroll", n.update, ao);
  }), c && f.addEventListener("resize", n.update, ao), function() {
    o && _.forEach(function(i) {
      i.removeEventListener("scroll", n.update, ao);
    }), c && f.removeEventListener("resize", n.update, ao);
  };
}
const cv = {
  name: "eventListeners",
  enabled: !0,
  phase: "write",
  fn: function() {
  },
  effect: lv,
  data: {}
};
function fv(e) {
  var t = e.state, n = e.name;
  t.modifiersData[n] = gu({
    reference: t.rects.reference,
    element: t.rects.popper,
    strategy: "absolute",
    placement: t.placement
  });
}
const uv = {
  name: "popperOffsets",
  enabled: !0,
  phase: "read",
  fn: fv,
  data: {}
};
var _v = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function pv(e) {
  var t = e.x, n = e.y, r = window, s = r.devicePixelRatio || 1;
  return {
    x: Hn(t * s) / s || 0,
    y: Hn(n * s) / s || 0
  };
}
function bl(e) {
  var t, n = e.popper, r = e.popperRect, s = e.placement, o = e.variation, a = e.offsets, c = e.position, f = e.gpuAcceleration, _ = e.adaptive, i = e.roundOffsets, d = e.isFixed, u = a.x, l = u === void 0 ? 0 : u, p = a.y, g = p === void 0 ? 0 : p, h = typeof i == "function" ? i({
    x: l,
    y: g
  }) : {
    x: l,
    y: g
  };
  l = h.x, g = h.y;
  var v = a.hasOwnProperty("x"), m = a.hasOwnProperty("y"), k = mt, b = ze, x = window;
  if (_) {
    var $ = Ni(n), S = "clientHeight", y = "clientWidth";
    if ($ === Le(n) && ($ = Kt(n), yt($).position !== "static" && c === "absolute" && (S = "scrollHeight", y = "scrollWidth")), $ = $, s === ze || (s === mt || s === Gt) && o === Rr) {
      b = ct;
      var E = d && $ === x && x.visualViewport ? x.visualViewport.height : $[S];
      g -= E - r.height, g *= f ? 1 : -1;
    }
    if (s === mt || (s === ze || s === ct) && o === Rr) {
      k = Gt;
      var C = d && $ === x && x.visualViewport ? x.visualViewport.width : $[y];
      l -= C - r.width, l *= f ? 1 : -1;
    }
  }
  var W = Object.assign({
    position: c
  }, _ && _v), F = i === !0 ? pv({
    x: l,
    y: g
  }) : {
    x: l,
    y: g
  };
  if (l = F.x, g = F.y, f) {
    var A;
    return Object.assign({}, W, (A = {}, A[b] = m ? "0" : "", A[k] = v ? "0" : "", A.transform = (x.devicePixelRatio || 1) <= 1 ? "translate(" + l + "px, " + g + "px)" : "translate3d(" + l + "px, " + g + "px, 0)", A));
  }
  return Object.assign({}, W, (t = {}, t[b] = m ? g + "px" : "", t[k] = v ? l + "px" : "", t.transform = "", t));
}
function dv(e) {
  var t = e.state, n = e.options, r = n.gpuAcceleration, s = r === void 0 ? !0 : r, o = n.adaptive, a = o === void 0 ? !0 : o, c = n.roundOffsets, f = c === void 0 ? !0 : c, _ = {
    placement: Vt(t.placement),
    variation: Bn(t.placement),
    popper: t.elements.popper,
    popperRect: t.rects.popper,
    gpuAcceleration: s,
    isFixed: t.options.strategy === "fixed"
  };
  t.modifiersData.popperOffsets != null && (t.styles.popper = Object.assign({}, t.styles.popper, bl(Object.assign({}, _, {
    offsets: t.modifiersData.popperOffsets,
    position: t.options.strategy,
    adaptive: a,
    roundOffsets: f
  })))), t.modifiersData.arrow != null && (t.styles.arrow = Object.assign({}, t.styles.arrow, bl(Object.assign({}, _, {
    offsets: t.modifiersData.arrow,
    position: "absolute",
    adaptive: !1,
    roundOffsets: f
  })))), t.attributes.popper = Object.assign({}, t.attributes.popper, {
    "data-popper-placement": t.placement
  });
}
const hv = {
  name: "computeStyles",
  enabled: !0,
  phase: "beforeWrite",
  fn: dv,
  data: {}
};
function vv(e) {
  var t = e.state;
  Object.keys(t.elements).forEach(function(n) {
    var r = t.styles[n] || {}, s = t.attributes[n] || {}, o = t.elements[n];
    !Te(o) || !lt(o) || (Object.assign(o.style, r), Object.keys(s).forEach(function(a) {
      var c = s[a];
      c === !1 ? o.removeAttribute(a) : o.setAttribute(a, c === !0 ? "" : c);
    }));
  });
}
function mv(e) {
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
      var s = t.elements[r], o = t.attributes[r] || {}, a = Object.keys(t.styles.hasOwnProperty(r) ? t.styles[r] : n[r]), c = a.reduce(function(f, _) {
        return f[_] = "", f;
      }, {});
      !Te(s) || !lt(s) || (Object.assign(s.style, c), Object.keys(o).forEach(function(f) {
        s.removeAttribute(f);
      }));
    });
  };
}
const gv = {
  name: "applyStyles",
  enabled: !0,
  phase: "write",
  fn: vv,
  effect: mv,
  requires: ["computeStyles"]
};
var yv = [cv, uv, hv, gv], bu = /* @__PURE__ */ av({
  defaultModifiers: yv
});
function bv(e) {
  return e === "x" ? "y" : "x";
}
function ko(e, t, n) {
  return ln(e, ei(t, n));
}
function wv(e, t, n) {
  var r = ko(e, t, n);
  return r > n ? n : r;
}
function $v(e) {
  var t = e.state, n = e.options, r = e.name, s = n.mainAxis, o = s === void 0 ? !0 : s, a = n.altAxis, c = a === void 0 ? !1 : a, f = n.boundary, _ = n.rootBoundary, i = n.altBoundary, d = n.padding, u = n.tether, l = u === void 0 ? !0 : u, p = n.tetherOffset, g = p === void 0 ? 0 : p, h = Us(t, {
    boundary: f,
    rootBoundary: _,
    padding: d,
    altBoundary: i
  }), v = Vt(t.placement), m = Bn(t.placement), k = !m, b = mu(v), x = bv(b), $ = t.modifiersData.popperOffsets, S = t.rects.reference, y = t.rects.popper, E = typeof g == "function" ? g(Object.assign({}, t.rects, {
    placement: t.placement
  })) : g, C = typeof E == "number" ? {
    mainAxis: E,
    altAxis: E
  } : Object.assign({
    mainAxis: 0,
    altAxis: 0
  }, E), W = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null, F = {
    x: 0,
    y: 0
  };
  if (!!$) {
    if (o) {
      var A, D = b === "y" ? ze : mt, O = b === "y" ? ct : Gt, T = b === "y" ? "height" : "width", M = $[b], j = M + h[D], R = M - h[O], U = l ? -y[T] / 2 : 0, G = m === jn ? S[T] : y[T], z = m === jn ? -y[T] : -S[T], J = t.elements.arrow, Q = l && J ? du(J) : {
        width: 0,
        height: 0
      }, P = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : yu(), Y = P[D], X = P[O], q = ko(0, S[T], Q[T]), Z = k ? S[T] / 2 - U - q - Y - C.mainAxis : G - q - Y - C.mainAxis, se = k ? -S[T] / 2 + U + q + X + C.mainAxis : z + q + X + C.mainAxis, ie = t.elements.arrow && Ni(t.elements.arrow), ye = ie ? b === "y" ? ie.clientTop || 0 : ie.clientLeft || 0 : 0, Ke = (A = W == null ? void 0 : W[b]) != null ? A : 0, ee = M + Z - Ke - ye, wt = M + se - Ke, He = ko(l ? ei(j, ee) : j, M, l ? ln(R, wt) : R);
      $[b] = He, F[b] = He - M;
    }
    if (c) {
      var We, $t = b === "x" ? ze : mt, Je = b === "x" ? ct : Gt, te = $[x], ve = x === "y" ? "height" : "width", je = te + h[$t], kt = te - h[Je], Be = [ze, mt].indexOf(v) !== -1, xt = (We = W == null ? void 0 : W[x]) != null ? We : 0, Et = Be ? je : te - S[ve] - y[ve] - xt + C.altAxis, St = Be ? te + S[ve] + y[ve] - xt - C.altAxis : kt, Ct = l && Be ? wv(Et, te, St) : ko(l ? Et : je, te, l ? St : kt);
      $[x] = Ct, F[x] = Ct - te;
    }
    t.modifiersData[r] = F;
  }
}
const Qi = {
  name: "preventOverflow",
  enabled: !0,
  phase: "main",
  fn: $v,
  requiresIfExists: ["offset"]
};
var kv = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function xo(e) {
  return e.replace(/left|right|bottom|top/g, function(t) {
    return kv[t];
  });
}
var xv = {
  start: "end",
  end: "start"
};
function wl(e) {
  return e.replace(/start|end/g, function(t) {
    return xv[t];
  });
}
function Ev(e, t) {
  t === void 0 && (t = {});
  var n = t, r = n.placement, s = n.boundary, o = n.rootBoundary, a = n.padding, c = n.flipVariations, f = n.allowedAutoPlacements, _ = f === void 0 ? Wh : f, i = Bn(r), d = i ? c ? vl : vl.filter(function(p) {
    return Bn(p) === i;
  }) : Pi, u = d.filter(function(p) {
    return _.indexOf(p) >= 0;
  });
  u.length === 0 && (u = d);
  var l = u.reduce(function(p, g) {
    return p[g] = Us(e, {
      placement: g,
      boundary: s,
      rootBoundary: o,
      padding: a
    })[Vt(g)], p;
  }, {});
  return Object.keys(l).sort(function(p, g) {
    return l[p] - l[g];
  });
}
function Sv(e) {
  if (Vt(e) === Is)
    return [];
  var t = xo(e);
  return [wl(e), t, wl(t)];
}
function Cv(e) {
  var t = e.state, n = e.options, r = e.name;
  if (!t.modifiersData[r]._skip) {
    for (var s = n.mainAxis, o = s === void 0 ? !0 : s, a = n.altAxis, c = a === void 0 ? !0 : a, f = n.fallbackPlacements, _ = n.padding, i = n.boundary, d = n.rootBoundary, u = n.altBoundary, l = n.flipVariations, p = l === void 0 ? !0 : l, g = n.allowedAutoPlacements, h = t.options.placement, v = Vt(h), m = v === h, k = f || (m || !p ? [xo(h)] : Sv(h)), b = [h].concat(k).reduce(function(Q, P) {
      return Q.concat(Vt(P) === Is ? Ev(t, {
        placement: P,
        boundary: i,
        rootBoundary: d,
        padding: _,
        flipVariations: p,
        allowedAutoPlacements: g
      }) : P);
    }, []), x = t.rects.reference, $ = t.rects.popper, S = /* @__PURE__ */ new Map(), y = !0, E = b[0], C = 0; C < b.length; C++) {
      var W = b[C], F = Vt(W), A = Bn(W) === jn, D = [ze, ct].indexOf(F) >= 0, O = D ? "width" : "height", T = Us(t, {
        placement: W,
        boundary: i,
        rootBoundary: d,
        altBoundary: u,
        padding: _
      }), M = D ? A ? Gt : mt : A ? ct : ze;
      x[O] > $[O] && (M = xo(M));
      var j = xo(M), R = [];
      if (o && R.push(T[F] <= 0), c && R.push(T[M] <= 0, T[j] <= 0), R.every(function(Q) {
        return Q;
      })) {
        E = W, y = !1;
        break;
      }
      S.set(W, R);
    }
    if (y)
      for (var U = p ? 3 : 1, G = function(P) {
        var Y = b.find(function(X) {
          var q = S.get(X);
          if (q)
            return q.slice(0, P).every(function(Z) {
              return Z;
            });
        });
        if (Y)
          return E = Y, "break";
      }, z = U; z > 0; z--) {
        var J = G(z);
        if (J === "break")
          break;
      }
    t.placement !== E && (t.modifiersData[r]._skip = !0, t.placement = E, t.reset = !0);
  }
}
const wu = {
  name: "flip",
  enabled: !0,
  phase: "main",
  fn: Cv,
  requiresIfExists: ["offset"],
  data: {
    _skip: !1
  }
};
function Ov(e) {
  return e.button === 2;
}
var At;
class Mv extends hs {
  constructor() {
    super(...arguments);
    L(this, At, void 0);
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
    super.componentWillUnmount(), (n = w(this, At)) == null || n.destroy();
  }
  _getPopperOptions() {
    return {
      modifiers: [Qi, wu],
      placement: "right-start"
    };
  }
  _getPopperElement() {
    var n;
    return (n = this.ref.current) == null ? void 0 : n.parentElement;
  }
  _createPopper() {
    const n = this._getPopperOptions();
    return w(this, At) ? w(this, At).setOptions(n) : this.ref.current && H(this, At, bu(this._getPopperElement(), this.ref.current, n)), w(this, At);
  }
  afterRender(n) {
    super.afterRender(n), this.props.controlledMenu && this._createPopper();
  }
  renderToggleIcon() {
    return /* @__PURE__ */ Ls("span", {
      class: "contextmenu-toggle-icon caret-right"
    });
  }
}
At = new WeakMap();
var Dt, Ae, bn, Yr;
class ke extends sn {
  constructor() {
    super(...arguments);
    L(this, Dt, void 0);
    L(this, Ae, void 0);
    L(this, bn, void 0);
    L(this, Yr, void 0);
  }
  get isShown() {
    var n;
    return (n = w(this, Dt)) == null ? void 0 : n.classList.contains(this.constructor.CLASS_SHOW);
  }
  get menu() {
    return w(this, Dt) || this._ensureMenu();
  }
  get popper() {
    return w(this, Ae) ? w(this, Ae) : this._createPopper();
  }
  get trigger() {
    return w(this, Yr) || this.element;
  }
  get isDynamic() {
    return this.options.items || this.options.menu;
  }
  init() {
    const { element: n } = this;
    n !== document.body && !n.hasAttribute("data-toggle") && n.setAttribute("data-toggle", "contextmenu");
  }
  show(n) {
    return H(this, Yr, n), this.emit("show", { menu: this, trigger: this.trigger }).defaultPrevented || this.isDynamic && !this._renderMenu() ? !1 : (this.menu.classList.add(this.constructor.CLASS_SHOW), this._createPopper().update(), this.emit("shown", this), !0);
  }
  hide() {
    var r, s;
    return this.emit("hide", this).defaultPrevented ? !1 : ((r = w(this, Ae)) == null || r.destroy(), H(this, Ae, void 0), (s = w(this, Dt)) == null || s.classList.remove(this.constructor.CLASS_SHOW), this.emit("hidden", this), !0);
  }
  toggle(n) {
    return this.isShown ? this.hide() : this.show(n);
  }
  destroy() {
    var n, r;
    (n = w(this, Ae)) == null || n.destroy(), super.destroy(), (r = w(this, Dt)) == null || r.remove();
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
    return H(this, Dt, s), s;
  }
  _getPopperOptions() {
    const { flip: n, preventOverflow: r, modifiers: s = [] } = this.options;
    return {
      modifiers: [
        r ? typeof r == "object" ? { ...Qi, options: r } : Qi : null,
        n ? wu : null,
        ...s
      ].filter(Boolean),
      placement: this.options.placement,
      strategy: this.options.strategy
    };
  }
  _createPopper() {
    const n = this._getPopperOptions();
    return w(this, Ae) ? w(this, Ae).setOptions(n) : H(this, Ae, bu(this._getPopperElement(), this.menu, n)), w(this, Ae);
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
    return !n || this.emit("updateMenu", { menu: n, trigger: this.trigger, contextmenu: this }).defaultPrevented ? !1 : (Mh(Ls(Mv, n), this.menu), !0);
  }
  _getPopperElement() {
    return w(this, bn) || H(this, bn, {
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
    }), w(this, bn);
  }
  static clear(n) {
    var f, _;
    n instanceof Event && (n = { event: n });
    const { event: r, exclude: s, ignoreSelector: o = ".not-hide-menu" } = n || {};
    if (r && o && ((_ = (f = r.target).closest) == null ? void 0 : _.call(f, o)) || r && Ov(r))
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
Dt = new WeakMap(), Ae = new WeakMap(), bn = new WeakMap(), Yr = new WeakMap(), N(ke, "NAME", "contextmenu"), N(ke, "EVENTS", !0), N(ke, "DEFAULT", {
  placement: "bottom-start",
  strategy: "fixed",
  flip: !0,
  preventOverflow: !0
}), N(ke, "MENU_CLASS", "contextmenu"), N(ke, "CLASS_SHOW", "show"), N(ke, "MENU_SELECTOR", '[data-toggle="contextmenu"]:not(.disabled):not(:disabled)');
document.addEventListener("contextmenu", (e) => {
  const t = e.target;
  if (t.closest(`.${ke.MENU_CLASS}`))
    return;
  const n = t.closest(ke.MENU_SELECTOR);
  n && (ke.ensure(n).show(e), e.preventDefault());
});
document.addEventListener("click", ke.clear.bind(ke));
var wn, $n, kn, fi, $u;
const na = class extends ke {
  constructor() {
    super(...arguments);
    L(this, fi);
    L(this, wn, !1);
    L(this, $n, 0);
    N(this, "hideLater", () => {
      w(this, kn).call(this), H(this, $n, window.setTimeout(this.hide.bind(this), 100));
    });
    L(this, kn, () => {
      clearTimeout(w(this, $n)), H(this, $n, 0);
    });
  }
  get isHover() {
    return this.options.trigger === "hover";
  }
  get elementShowClass() {
    return `with-${this.constructor.NAME}-show`;
  }
  show(n, r) {
    (r == null ? void 0 : r.clearOthers) !== !1 && na.clear({ event: r == null ? void 0 : r.event, exclude: [this.element] });
    const s = super.show(n);
    return s && (!w(this, wn) && this.isHover && he(this, fi, $u).call(this), this.element.classList.add(this.elementShowClass)), s;
  }
  hide() {
    const n = super.hide();
    return n && this.element.classList.remove(this.elementShowClass), n;
  }
  toggle(n, r) {
    return this.isShown ? this.hide() : this.show(n, { event: n, ...r });
  }
  destroy() {
    w(this, wn) && (this.element.removeEventListener("mouseleave", this.hideLater), this.menu.removeEventListener("mouseenter", w(this, kn)), this.menu.removeEventListener("mouseleave", this.hideLater)), super.destroy();
  }
  _getArrowSize() {
    const { arrow: n } = this.options;
    return n ? typeof n == "number" ? n : 5 : 0;
  }
  _getPopperOptions() {
    var s;
    const n = super._getPopperOptions(), r = this._getArrowSize();
    return r && n.modifiers.push({ ...wh, options: {
      padding: r,
      element: ".arrow"
    } }, {
      ...xh,
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
let be = na;
wn = new WeakMap(), $n = new WeakMap(), kn = new WeakMap(), fi = new WeakSet(), $u = function() {
  const { menu: n } = this;
  n.addEventListener("mouseenter", w(this, kn)), n.addEventListener("mouseleave", this.hideLater), this.element.addEventListener("mouseleave", this.hideLater), H(this, wn, !0);
}, N(be, "NAME", "dropdown"), N(be, "MENU_CLASS", "dropdown-menu"), N(be, "MENU_SELECTOR", '[data-toggle="dropdown"]:not(.disabled):not(:disabled)'), N(be, "DEFAULT", {
  ...ke.DEFAULT,
  strategy: "absolute",
  trigger: "click"
});
document.addEventListener("click", function(e) {
  const n = e.target.closest(be.MENU_SELECTOR);
  if (n) {
    const r = be.ensure(n);
    r.options.trigger === "click" && r.toggle();
  } else
    be.clear({ event: e });
});
document.addEventListener("mouseover", function(e) {
  const t = e.target, n = typeof t.closest == "function" ? t.closest(be.MENU_SELECTOR) : null;
  if (!n)
    return;
  const r = be.ensure(n);
  r.isHover && r.show();
});
const Av = (e) => {
  const t = document.getElementsByClassName("with-dropdown-show")[0];
  if (!t)
    return;
  const n = typeof t.closest == "function" ? t.closest(be.MENU_SELECTOR) : null;
  !n || !e.target.contains(n) || be.clear({ event: e });
};
window.addEventListener("scroll", Av, !0);
var Vr, xn;
class Dv extends dr {
  constructor(n) {
    var r;
    super(n);
    L(this, Vr, void 0);
    L(this, xn, qd());
    this.state = { placement: ((r = n.dropdown) == null ? void 0 : r.placement) || "", show: !1 };
  }
  get ref() {
    return w(this, xn);
  }
  get triggerElement() {
    return w(this, xn).current;
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
    }), H(this, Vr, be.ensure(this.triggerElement, {
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
    (n = w(this, Vr)) == null || n.destroy();
  }
  beforeRender() {
    const { className: n, children: r, dropdown: s, ...o } = this.props;
    return {
      className: I("dropdown", n),
      children: typeof r == "function" ? r(this.state) : r,
      ...o,
      "data-toggle": "dropdown",
      "data-dropdown-placement": this.state.placement,
      ref: w(this, xn)
    };
  }
  render() {
    const { children: n, ...r } = this.beforeRender();
    return /* @__PURE__ */ Yf("div", {
      ...r
    }, n);
  }
}
Vr = new WeakMap(), xn = new WeakMap();
class Tv extends Dv {
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
    return r.caret = s, /* @__PURE__ */ Yf(qt, {
      ...r
    });
  }
}
function ku({
  key: e,
  type: t,
  btnType: n,
  ...r
}) {
  return /* @__PURE__ */ Mi(Tv, {
    type: n,
    ...r
  });
}
function Nv({
  key: e,
  type: t,
  btnType: n,
  ...r
}) {
  return /* @__PURE__ */ Mi(hf, {
    type: n,
    ...r
  });
}
class Zt extends vt {
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
    return /* @__PURE__ */ Mi(t, {
      ...o
    });
  }
}
N(Zt, "ItemComponents", {
  item: Yd,
  dropdown: ku,
  "btn-group": Nv
}), N(Zt, "ROOT_TAG", "nav"), N(Zt, "NAME", "toolbar"), N(Zt, "defaultProps", {
  btnProps: {
    btnType: "ghost"
  }
});
function Hr(e, t) {
  const n = e.pageTotal || Math.ceil(e.recTotal / e.recPerPage);
  return typeof t == "string" && (t === "first" ? t = 1 : t === "last" ? t = n : t === "prev" ? t = e.page - 1 : t === "next" ? t = e.page + 1 : t === "current" ? t = e.page : t = Number.parseInt(t, 10)), t = t !== void 0 ? Math.max(1, Math.min(t < 0 ? n + t : t, n)) : e.page, {
    ...e,
    pageTotal: n,
    page: t
  };
}
function Pv({
  key: e,
  type: t,
  btnType: n,
  page: r,
  format: s,
  pagerInfo: o,
  linkCreator: a,
  ...c
}) {
  const f = Hr(o, r);
  return c.text === void 0 && !c.icon && s && (c.text = typeof s == "function" ? s(f) : xe(s, f)), c.url === void 0 && a && (c.url = typeof a == "function" ? a(f) : xe(a, f)), c.disabled === void 0 && (c.disabled = r !== void 0 && f.page === o.page), /* @__PURE__ */ Yt(qt, {
    type: n,
    ...c
  });
}
const ut = 24 * 60 * 60 * 1e3, Me = (e) => e ? (e instanceof Date || (typeof e == "string" && (e = e.trim(), /^\d+$/.test(e) && (e = Number.parseInt(e, 10))), typeof e == "number" && e < 1e10 && (e *= 1e3), e = new Date(e)), e) : new Date(), no = (e, t = new Date()) => (e = Me(e), t = Me(t), e.getFullYear() === t.getFullYear() && e.getMonth() === t.getMonth() && e.getDate() === t.getDate()), $l = (e, t = new Date()) => Me(e).getFullYear() === Me(t).getFullYear(), Lv = (e, t = new Date()) => (e = Me(e), t = Me(t), e.getFullYear() === t.getFullYear() && e.getMonth() === t.getMonth()), Sg = (e, t = new Date()) => {
  e = Me(e), t = Me(t);
  const n = 1e3 * 60 * 60 * 24, r = Math.floor(e.getTime() / n), s = Math.floor(t.getTime() / n);
  return Math.floor((r + 4) / 7) === Math.floor((s + 4) / 7);
}, Cg = (e, t) => no(Me(t), e), Og = (e, t) => no(Me(t).getTime() - ut, e), Mg = (e, t) => no(Me(t).getTime() + ut, e), Ag = (e, t) => no(Me(t).getTime() - 2 * ut, e), es = (e, t = "yyyy-MM-dd hh:mm") => {
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
}, Dg = (e, t, n) => {
  const r = {
    full: "yyyy-M-d",
    month: "M-d",
    day: "d",
    str: "{0} ~ {1}",
    ...n
  }, s = es(e, $l(e) ? r.month : r.full);
  if (no(e, t))
    return s;
  const o = es(t, $l(e, t) ? Lv(e, t) ? r.day : r.month : r.full);
  return r.str.replace("{0}", s).replace("{1}", o);
}, Tg = (e) => {
  const t = new Date().getTime();
  switch (e) {
    case "oneWeek":
      return t - ut * 7;
    case "oneMonth":
      return t - ut * 31;
    case "threeMonth":
      return t - ut * 31 * 3;
    case "halfYear":
      return t - ut * 183;
    case "oneYear":
      return t - ut * 365;
    case "twoYear":
      return t - 2 * (ut * 365);
    default:
      return 0;
  }
}, kl = (e, t, n = !0, r = Date.now()) => {
  switch (t) {
    case "year":
      return e *= 365, kl(e, "day", n, r);
    case "quarter":
      e *= 3;
    case "month":
      return e *= 30, kl(e, "day", n, r);
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
function Rv({
  key: e,
  type: t,
  page: n,
  text: r = "",
  pagerInfo: s,
  children: o,
  ...a
}) {
  const c = Hr(s, n);
  return r = typeof r == "function" ? r(c) : xe(r, c), /* @__PURE__ */ Yt(bc, {
    ...a
  }, o, r);
}
function Hv({
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
  const f = { ...c }, _ = (l) => {
    if (!(l != null && l.target))
      return;
    l.target.closest(".pager").querySelectorAll(".pager-nav").forEach((g) => {
      g.classList.remove("active");
    }), l.target.classList.add("active"), o == null || o.call(l.target, l);
  }, i = () => (f.text = "", f.icon = "icon-ellipsis-h", f.disabled = !0, /* @__PURE__ */ Yt(qt, {
    type: n,
    ...f
  })), d = (l, p) => {
    const g = [];
    for (let h = l; h <= p; h++) {
      f.text = h, delete f.icon, f.disabled = !1;
      const v = Hr(s, h);
      a && (f.url = typeof a == "function" ? a(v) : xe(a, v)), g.push(/* @__PURE__ */ Yt(qt, {
        type: n,
        ...f,
        onClick: _
      }));
    }
    return g;
  };
  let u = [];
  return u = [...d(1, 1)], s.pageTotal <= 1 || (s.pageTotal <= r ? u = [...u, ...d(2, s.pageTotal)] : s.page < r - 2 ? u = [...u, ...d(2, r - 2), i(), ...d(s.pageTotal, s.pageTotal)] : s.page > s.pageTotal - r + 3 ? u = [...u, i(), ...d(s.pageTotal - r + 3, s.pageTotal)] : u = [...u, i(), ...d(s.page - Math.ceil((r - 4) / 2), s.page + Math.floor((r - 4) / 2)), i(), ...d(s.pageTotal, s.pageTotal)]), u;
}
function Wv({
  type: e,
  pagerInfo: t,
  linkCreator: n,
  items: r = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 100, 200, 500, 1e3, 2e3],
  dropdown: s = {},
  ...o
}) {
  var c, f;
  s.items = (c = s.items) != null ? c : r.map((_) => {
    const i = { ...t, recPerPage: _ };
    return {
      text: `${_}`,
      url: typeof n == "function" ? n(i) : xe(n, i)
    };
  });
  const { text: a = "" } = o;
  return o.text = typeof a == "function" ? a(t) : xe(a, t), s.menu = { ...s.menu, className: I((f = s.menu) == null ? void 0 : f.className, "pager-size-menu") }, /* @__PURE__ */ Yt(ku, {
    type: "dropdown",
    dropdown: s,
    ...o
  });
}
function jv({
  key: e,
  page: t,
  type: n,
  btnType: r,
  pagerInfo: s,
  size: o,
  onClick: a,
  onChange: c,
  linkCreator: f,
  ..._
}) {
  const i = { ..._ };
  let d;
  const u = (g) => {
    var h;
    d = Number((h = g.target) == null ? void 0 : h.value) || 1, d = d > s.pageTotal ? s.pageTotal : d;
  }, l = (g) => {
    if (!(g != null && g.target))
      return;
    d = d <= s.pageTotal ? d : s.pageTotal;
    const h = Hr(s, d);
    c && !c({ info: h, event: g }) || (g.target.href = i.url = typeof f == "function" ? f(h) : xe(f, h));
  }, p = Hr(s, t || 0);
  return i.url = typeof f == "function" ? f(p) : xe(f, p), i.className = I("input-group-addon", i.className), /* @__PURE__ */ Yt("div", {
    className: I("input-group", "pager-goto-group", o ? `size-${o}` : "")
  }, /* @__PURE__ */ Yt("input", {
    type: "number",
    class: "form-control",
    max: s.pageTotal,
    min: "1",
    onInput: u
  }), /* @__PURE__ */ Yt(qt, {
    type: r,
    ...i,
    onClick: l
  }));
}
class Eo extends Zt {
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
N(Eo, "NAME", "pager"), N(Eo, "defaultProps", {
  gap: 1,
  btnProps: {
    btnType: "ghost",
    size: "sm"
  }
}), N(Eo, "ItemComponents", {
  ...Zt.ItemComponents,
  link: Pv,
  info: Rv,
  nav: Hv,
  "size-menu": Wv,
  goto: jv
});
class xl extends Xe {
}
N(xl, "NAME", "pager"), N(xl, "Component", Eo);
class El extends Xe {
}
N(El, "NAME", "toolbar"), N(El, "Component", Zt);
function Re(e) {
  if (e == null)
    return window;
  if (e.toString() !== "[object Window]") {
    var t = e.ownerDocument;
    return t && t.defaultView || window;
  }
  return e;
}
function _n(e) {
  var t = Re(e).Element;
  return e instanceof t || e instanceof Element;
}
function Ne(e) {
  var t = Re(e).HTMLElement;
  return e instanceof t || e instanceof HTMLElement;
}
function Fs(e) {
  if (typeof ShadowRoot > "u")
    return !1;
  var t = Re(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot;
}
var cn = Math.max, ti = Math.min, In = Math.round;
function ts() {
  var e = navigator.userAgentData;
  return e != null && e.brands ? e.brands.map(function(t) {
    return t.brand + "/" + t.version;
  }).join(" ") : navigator.userAgent;
}
function xu() {
  return !/^((?!chrome|android).)*safari/i.test(ts());
}
function Un(e, t, n) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  var r = e.getBoundingClientRect(), s = 1, o = 1;
  t && Ne(e) && (s = e.offsetWidth > 0 && In(r.width) / e.offsetWidth || 1, o = e.offsetHeight > 0 && In(r.height) / e.offsetHeight || 1);
  var a = _n(e) ? Re(e) : window, c = a.visualViewport, f = !xu() && n, _ = (r.left + (f && c ? c.offsetLeft : 0)) / s, i = (r.top + (f && c ? c.offsetTop : 0)) / o, d = r.width / s, u = r.height / o;
  return {
    width: d,
    height: u,
    top: i,
    right: _ + d,
    bottom: i + u,
    left: _,
    x: _,
    y: i
  };
}
function zs(e) {
  var t = Re(e), n = t.pageXOffset, r = t.pageYOffset;
  return {
    scrollLeft: n,
    scrollTop: r
  };
}
function Bv(e) {
  return {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  };
}
function Iv(e) {
  return e === Re(e) || !Ne(e) ? zs(e) : Bv(e);
}
function ft(e) {
  return e ? (e.nodeName || "").toLowerCase() : null;
}
function Jt(e) {
  return ((_n(e) ? e.ownerDocument : e.document) || window.document).documentElement;
}
function Ys(e) {
  return Un(Jt(e)).left + zs(e).scrollLeft;
}
function bt(e) {
  return Re(e).getComputedStyle(e);
}
function Vs(e) {
  var t = bt(e), n = t.overflow, r = t.overflowX, s = t.overflowY;
  return /auto|scroll|overlay|hidden/.test(n + s + r);
}
function Uv(e) {
  var t = e.getBoundingClientRect(), n = In(t.width) / e.offsetWidth || 1, r = In(t.height) / e.offsetHeight || 1;
  return n !== 1 || r !== 1;
}
function Fv(e, t, n) {
  n === void 0 && (n = !1);
  var r = Ne(t), s = Ne(t) && Uv(t), o = Jt(t), a = Un(e, s, n), c = {
    scrollLeft: 0,
    scrollTop: 0
  }, f = {
    x: 0,
    y: 0
  };
  return (r || !r && !n) && ((ft(t) !== "body" || Vs(o)) && (c = Iv(t)), Ne(t) ? (f = Un(t, !0), f.x += t.clientLeft, f.y += t.clientTop) : o && (f.x = Ys(o))), {
    x: a.left + c.scrollLeft - f.x,
    y: a.top + c.scrollTop - f.y,
    width: a.width,
    height: a.height
  };
}
function qs(e) {
  var t = Un(e), n = e.offsetWidth, r = e.offsetHeight;
  return Math.abs(t.width - n) <= 1 && (n = t.width), Math.abs(t.height - r) <= 1 && (r = t.height), {
    x: e.offsetLeft,
    y: e.offsetTop,
    width: n,
    height: r
  };
}
function Li(e) {
  return ft(e) === "html" ? e : e.assignedSlot || e.parentNode || (Fs(e) ? e.host : null) || Jt(e);
}
function Eu(e) {
  return ["html", "body", "#document"].indexOf(ft(e)) >= 0 ? e.ownerDocument.body : Ne(e) && Vs(e) ? e : Eu(Li(e));
}
function mr(e, t) {
  var n;
  t === void 0 && (t = []);
  var r = Eu(e), s = r === ((n = e.ownerDocument) == null ? void 0 : n.body), o = Re(r), a = s ? [o].concat(o.visualViewport || [], Vs(r) ? r : []) : r, c = t.concat(a);
  return s ? c : c.concat(mr(Li(a)));
}
function zv(e) {
  return ["table", "td", "th"].indexOf(ft(e)) >= 0;
}
function Sl(e) {
  return !Ne(e) || bt(e).position === "fixed" ? null : e.offsetParent;
}
function Yv(e) {
  var t = /firefox/i.test(ts()), n = /Trident/i.test(ts());
  if (n && Ne(e)) {
    var r = bt(e);
    if (r.position === "fixed")
      return null;
  }
  var s = Li(e);
  for (Fs(s) && (s = s.host); Ne(s) && ["html", "body"].indexOf(ft(s)) < 0; ) {
    var o = bt(s);
    if (o.transform !== "none" || o.perspective !== "none" || o.contain === "paint" || ["transform", "perspective"].indexOf(o.willChange) !== -1 || t && o.willChange === "filter" || t && o.filter && o.filter !== "none")
      return s;
    s = s.parentNode;
  }
  return null;
}
function ro(e) {
  for (var t = Re(e), n = Sl(e); n && zv(n) && bt(n).position === "static"; )
    n = Sl(n);
  return n && (ft(n) === "html" || ft(n) === "body" && bt(n).position === "static") ? t : n || Yv(e) || t;
}
var Ce = "top", qe = "bottom", Ge = "right", Oe = "left", Gs = "auto", oo = [Ce, qe, Ge, Oe], Fn = "start", Wr = "end", Vv = "clippingParents", Su = "viewport", Xn = "popper", qv = "reference", Cl = /* @__PURE__ */ oo.reduce(function(e, t) {
  return e.concat([t + "-" + Fn, t + "-" + Wr]);
}, []), Cu = /* @__PURE__ */ [].concat(oo, [Gs]).reduce(function(e, t) {
  return e.concat([t, t + "-" + Fn, t + "-" + Wr]);
}, []), Gv = "beforeRead", Xv = "read", Kv = "afterRead", Jv = "beforeMain", Zv = "main", Qv = "afterMain", em = "beforeWrite", tm = "write", nm = "afterWrite", rm = [Gv, Xv, Kv, Jv, Zv, Qv, em, tm, nm];
function om(e) {
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
function im(e) {
  var t = om(e);
  return rm.reduce(function(n, r) {
    return n.concat(t.filter(function(s) {
      return s.phase === r;
    }));
  }, []);
}
function sm(e) {
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
function am(e) {
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
function lm(e, t) {
  var n = Re(e), r = Jt(e), s = n.visualViewport, o = r.clientWidth, a = r.clientHeight, c = 0, f = 0;
  if (s) {
    o = s.width, a = s.height;
    var _ = xu();
    (_ || !_ && t === "fixed") && (c = s.offsetLeft, f = s.offsetTop);
  }
  return {
    width: o,
    height: a,
    x: c + Ys(e),
    y: f
  };
}
function cm(e) {
  var t, n = Jt(e), r = zs(e), s = (t = e.ownerDocument) == null ? void 0 : t.body, o = cn(n.scrollWidth, n.clientWidth, s ? s.scrollWidth : 0, s ? s.clientWidth : 0), a = cn(n.scrollHeight, n.clientHeight, s ? s.scrollHeight : 0, s ? s.clientHeight : 0), c = -r.scrollLeft + Ys(e), f = -r.scrollTop;
  return bt(s || n).direction === "rtl" && (c += cn(n.clientWidth, s ? s.clientWidth : 0) - o), {
    width: o,
    height: a,
    x: c,
    y: f
  };
}
function Ou(e, t) {
  var n = t.getRootNode && t.getRootNode();
  if (e.contains(t))
    return !0;
  if (n && Fs(n)) {
    var r = t;
    do {
      if (r && e.isSameNode(r))
        return !0;
      r = r.parentNode || r.host;
    } while (r);
  }
  return !1;
}
function ns(e) {
  return Object.assign({}, e, {
    left: e.x,
    top: e.y,
    right: e.x + e.width,
    bottom: e.y + e.height
  });
}
function fm(e, t) {
  var n = Un(e, !1, t === "fixed");
  return n.top = n.top + e.clientTop, n.left = n.left + e.clientLeft, n.bottom = n.top + e.clientHeight, n.right = n.left + e.clientWidth, n.width = e.clientWidth, n.height = e.clientHeight, n.x = n.left, n.y = n.top, n;
}
function Ol(e, t, n) {
  return t === Su ? ns(lm(e, n)) : _n(t) ? fm(t, n) : ns(cm(Jt(e)));
}
function um(e) {
  var t = mr(Li(e)), n = ["absolute", "fixed"].indexOf(bt(e).position) >= 0, r = n && Ne(e) ? ro(e) : e;
  return _n(r) ? t.filter(function(s) {
    return _n(s) && Ou(s, r) && ft(s) !== "body";
  }) : [];
}
function _m(e, t, n, r) {
  var s = t === "clippingParents" ? um(e) : [].concat(t), o = [].concat(s, [n]), a = o[0], c = o.reduce(function(f, _) {
    var i = Ol(e, _, r);
    return f.top = cn(i.top, f.top), f.right = ti(i.right, f.right), f.bottom = ti(i.bottom, f.bottom), f.left = cn(i.left, f.left), f;
  }, Ol(e, a, r));
  return c.width = c.right - c.left, c.height = c.bottom - c.top, c.x = c.left, c.y = c.top, c;
}
function zn(e) {
  return e.split("-")[1];
}
function Xs(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function Mu(e) {
  var t = e.reference, n = e.element, r = e.placement, s = r ? st(r) : null, o = r ? zn(r) : null, a = t.x + t.width / 2 - n.width / 2, c = t.y + t.height / 2 - n.height / 2, f;
  switch (s) {
    case Ce:
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
    case Oe:
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
  var _ = s ? Xs(s) : null;
  if (_ != null) {
    var i = _ === "y" ? "height" : "width";
    switch (o) {
      case Fn:
        f[_] = f[_] - (t[i] / 2 - n[i] / 2);
        break;
      case Wr:
        f[_] = f[_] + (t[i] / 2 - n[i] / 2);
        break;
    }
  }
  return f;
}
function Au() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
function Du(e) {
  return Object.assign({}, Au(), e);
}
function Tu(e, t) {
  return t.reduce(function(n, r) {
    return n[r] = e, n;
  }, {});
}
function Ks(e, t) {
  t === void 0 && (t = {});
  var n = t, r = n.placement, s = r === void 0 ? e.placement : r, o = n.strategy, a = o === void 0 ? e.strategy : o, c = n.boundary, f = c === void 0 ? Vv : c, _ = n.rootBoundary, i = _ === void 0 ? Su : _, d = n.elementContext, u = d === void 0 ? Xn : d, l = n.altBoundary, p = l === void 0 ? !1 : l, g = n.padding, h = g === void 0 ? 0 : g, v = Du(typeof h != "number" ? h : Tu(h, oo)), m = u === Xn ? qv : Xn, k = e.rects.popper, b = e.elements[p ? m : u], x = _m(_n(b) ? b : b.contextElement || Jt(e.elements.popper), f, i, a), $ = Un(e.elements.reference), S = Mu({
    reference: $,
    element: k,
    strategy: "absolute",
    placement: s
  }), y = ns(Object.assign({}, k, S)), E = u === Xn ? y : $, C = {
    top: x.top - E.top + v.top,
    bottom: E.bottom - x.bottom + v.bottom,
    left: x.left - E.left + v.left,
    right: E.right - x.right + v.right
  }, W = e.modifiersData.offset;
  if (u === Xn && W) {
    var F = W[s];
    Object.keys(C).forEach(function(A) {
      var D = [Ge, qe].indexOf(A) >= 0 ? 1 : -1, O = [Ce, qe].indexOf(A) >= 0 ? "y" : "x";
      C[A] += F[O] * D;
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
function pm(e) {
  e === void 0 && (e = {});
  var t = e, n = t.defaultModifiers, r = n === void 0 ? [] : n, s = t.defaultOptions, o = s === void 0 ? Ml : s;
  return function(c, f, _) {
    _ === void 0 && (_ = o);
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
          reference: _n(c) ? mr(c) : c.contextElement ? mr(c.contextElement) : [],
          popper: mr(f)
        };
        var k = im(am([].concat(r, i.options.modifiers)));
        return i.orderedModifiers = k.filter(function(b) {
          return b.enabled;
        }), p(), l.update();
      },
      forceUpdate: function() {
        if (!u) {
          var v = i.elements, m = v.reference, k = v.popper;
          if (!!Al(m, k)) {
            i.rects = {
              reference: Fv(m, ro(k), i.options.strategy === "fixed"),
              popper: qs(k)
            }, i.reset = !1, i.placement = i.options.placement, i.orderedModifiers.forEach(function(C) {
              return i.modifiersData[C.name] = Object.assign({}, C.data);
            });
            for (var b = 0; b < i.orderedModifiers.length; b++) {
              if (i.reset === !0) {
                i.reset = !1, b = -1;
                continue;
              }
              var x = i.orderedModifiers[b], $ = x.fn, S = x.options, y = S === void 0 ? {} : S, E = x.name;
              typeof $ == "function" && (i = $({
                state: i,
                options: y,
                name: E,
                instance: l
              }) || i);
            }
          }
        }
      },
      update: sm(function() {
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
    l.setOptions(_).then(function(h) {
      !u && _.onFirstUpdate && _.onFirstUpdate(h);
    });
    function p() {
      i.orderedModifiers.forEach(function(h) {
        var v = h.name, m = h.options, k = m === void 0 ? {} : m, b = h.effect;
        if (typeof b == "function") {
          var x = b({
            state: i,
            name: v,
            instance: l,
            options: k
          }), $ = function() {
          };
          d.push(x || $);
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
var lo = {
  passive: !0
};
function dm(e) {
  var t = e.state, n = e.instance, r = e.options, s = r.scroll, o = s === void 0 ? !0 : s, a = r.resize, c = a === void 0 ? !0 : a, f = Re(t.elements.popper), _ = [].concat(t.scrollParents.reference, t.scrollParents.popper);
  return o && _.forEach(function(i) {
    i.addEventListener("scroll", n.update, lo);
  }), c && f.addEventListener("resize", n.update, lo), function() {
    o && _.forEach(function(i) {
      i.removeEventListener("scroll", n.update, lo);
    }), c && f.removeEventListener("resize", n.update, lo);
  };
}
const hm = {
  name: "eventListeners",
  enabled: !0,
  phase: "write",
  fn: function() {
  },
  effect: dm,
  data: {}
};
function vm(e) {
  var t = e.state, n = e.name;
  t.modifiersData[n] = Mu({
    reference: t.rects.reference,
    element: t.rects.popper,
    strategy: "absolute",
    placement: t.placement
  });
}
const mm = {
  name: "popperOffsets",
  enabled: !0,
  phase: "read",
  fn: vm,
  data: {}
};
var gm = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function ym(e) {
  var t = e.x, n = e.y, r = window, s = r.devicePixelRatio || 1;
  return {
    x: In(t * s) / s || 0,
    y: In(n * s) / s || 0
  };
}
function Dl(e) {
  var t, n = e.popper, r = e.popperRect, s = e.placement, o = e.variation, a = e.offsets, c = e.position, f = e.gpuAcceleration, _ = e.adaptive, i = e.roundOffsets, d = e.isFixed, u = a.x, l = u === void 0 ? 0 : u, p = a.y, g = p === void 0 ? 0 : p, h = typeof i == "function" ? i({
    x: l,
    y: g
  }) : {
    x: l,
    y: g
  };
  l = h.x, g = h.y;
  var v = a.hasOwnProperty("x"), m = a.hasOwnProperty("y"), k = Oe, b = Ce, x = window;
  if (_) {
    var $ = ro(n), S = "clientHeight", y = "clientWidth";
    if ($ === Re(n) && ($ = Jt(n), bt($).position !== "static" && c === "absolute" && (S = "scrollHeight", y = "scrollWidth")), $ = $, s === Ce || (s === Oe || s === Ge) && o === Wr) {
      b = qe;
      var E = d && $ === x && x.visualViewport ? x.visualViewport.height : $[S];
      g -= E - r.height, g *= f ? 1 : -1;
    }
    if (s === Oe || (s === Ce || s === qe) && o === Wr) {
      k = Ge;
      var C = d && $ === x && x.visualViewport ? x.visualViewport.width : $[y];
      l -= C - r.width, l *= f ? 1 : -1;
    }
  }
  var W = Object.assign({
    position: c
  }, _ && gm), F = i === !0 ? ym({
    x: l,
    y: g
  }) : {
    x: l,
    y: g
  };
  if (l = F.x, g = F.y, f) {
    var A;
    return Object.assign({}, W, (A = {}, A[b] = m ? "0" : "", A[k] = v ? "0" : "", A.transform = (x.devicePixelRatio || 1) <= 1 ? "translate(" + l + "px, " + g + "px)" : "translate3d(" + l + "px, " + g + "px, 0)", A));
  }
  return Object.assign({}, W, (t = {}, t[b] = m ? g + "px" : "", t[k] = v ? l + "px" : "", t.transform = "", t));
}
function bm(e) {
  var t = e.state, n = e.options, r = n.gpuAcceleration, s = r === void 0 ? !0 : r, o = n.adaptive, a = o === void 0 ? !0 : o, c = n.roundOffsets, f = c === void 0 ? !0 : c, _ = {
    placement: st(t.placement),
    variation: zn(t.placement),
    popper: t.elements.popper,
    popperRect: t.rects.popper,
    gpuAcceleration: s,
    isFixed: t.options.strategy === "fixed"
  };
  t.modifiersData.popperOffsets != null && (t.styles.popper = Object.assign({}, t.styles.popper, Dl(Object.assign({}, _, {
    offsets: t.modifiersData.popperOffsets,
    position: t.options.strategy,
    adaptive: a,
    roundOffsets: f
  })))), t.modifiersData.arrow != null && (t.styles.arrow = Object.assign({}, t.styles.arrow, Dl(Object.assign({}, _, {
    offsets: t.modifiersData.arrow,
    position: "absolute",
    adaptive: !1,
    roundOffsets: f
  })))), t.attributes.popper = Object.assign({}, t.attributes.popper, {
    "data-popper-placement": t.placement
  });
}
const wm = {
  name: "computeStyles",
  enabled: !0,
  phase: "beforeWrite",
  fn: bm,
  data: {}
};
function $m(e) {
  var t = e.state;
  Object.keys(t.elements).forEach(function(n) {
    var r = t.styles[n] || {}, s = t.attributes[n] || {}, o = t.elements[n];
    !Ne(o) || !ft(o) || (Object.assign(o.style, r), Object.keys(s).forEach(function(a) {
      var c = s[a];
      c === !1 ? o.removeAttribute(a) : o.setAttribute(a, c === !0 ? "" : c);
    }));
  });
}
function km(e) {
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
      var s = t.elements[r], o = t.attributes[r] || {}, a = Object.keys(t.styles.hasOwnProperty(r) ? t.styles[r] : n[r]), c = a.reduce(function(f, _) {
        return f[_] = "", f;
      }, {});
      !Ne(s) || !ft(s) || (Object.assign(s.style, c), Object.keys(o).forEach(function(f) {
        s.removeAttribute(f);
      }));
    });
  };
}
const xm = {
  name: "applyStyles",
  enabled: !0,
  phase: "write",
  fn: $m,
  effect: km,
  requires: ["computeStyles"]
};
var Em = [hm, mm, wm, xm], Sm = /* @__PURE__ */ pm({
  defaultModifiers: Em
});
function gr(e, t, n) {
  return cn(e, ti(t, n));
}
function Cm(e, t, n) {
  var r = gr(e, t, n);
  return r > n ? n : r;
}
var Om = function(t, n) {
  return t = typeof t == "function" ? t(Object.assign({}, n.rects, {
    placement: n.placement
  })) : t, Du(typeof t != "number" ? t : Tu(t, oo));
};
function Mm(e) {
  var t, n = e.state, r = e.name, s = e.options, o = n.elements.arrow, a = n.modifiersData.popperOffsets, c = st(n.placement), f = Xs(c), _ = [Oe, Ge].indexOf(c) >= 0, i = _ ? "height" : "width";
  if (!(!o || !a)) {
    var d = Om(s.padding, n), u = qs(o), l = f === "y" ? Ce : Oe, p = f === "y" ? qe : Ge, g = n.rects.reference[i] + n.rects.reference[f] - a[f] - n.rects.popper[i], h = a[f] - n.rects.reference[f], v = ro(o), m = v ? f === "y" ? v.clientHeight || 0 : v.clientWidth || 0 : 0, k = g / 2 - h / 2, b = d[l], x = m - u[i] - d[p], $ = m / 2 - u[i] / 2 + k, S = gr(b, $, x), y = f;
    n.modifiersData[r] = (t = {}, t[y] = S, t.centerOffset = S - $, t);
  }
}
function Am(e) {
  var t = e.state, n = e.options, r = n.element, s = r === void 0 ? "[data-popper-arrow]" : r;
  s != null && (typeof s == "string" && (s = t.elements.popper.querySelector(s), !s) || !Ou(t.elements.popper, s) || (t.elements.arrow = s));
}
const Dm = {
  name: "arrow",
  enabled: !0,
  phase: "main",
  fn: Mm,
  effect: Am,
  requires: ["popperOffsets"],
  requiresIfExists: ["preventOverflow"]
};
function Tm(e, t, n) {
  var r = st(e), s = [Oe, Ce].indexOf(r) >= 0 ? -1 : 1, o = typeof n == "function" ? n(Object.assign({}, t, {
    placement: e
  })) : n, a = o[0], c = o[1];
  return a = a || 0, c = (c || 0) * s, [Oe, Ge].indexOf(r) >= 0 ? {
    x: c,
    y: a
  } : {
    x: a,
    y: c
  };
}
function Nm(e) {
  var t = e.state, n = e.options, r = e.name, s = n.offset, o = s === void 0 ? [0, 0] : s, a = Cu.reduce(function(i, d) {
    return i[d] = Tm(d, t.rects, o), i;
  }, {}), c = a[t.placement], f = c.x, _ = c.y;
  t.modifiersData.popperOffsets != null && (t.modifiersData.popperOffsets.x += f, t.modifiersData.popperOffsets.y += _), t.modifiersData[r] = a;
}
const Pm = {
  name: "offset",
  enabled: !0,
  phase: "main",
  requires: ["popperOffsets"],
  fn: Nm
};
function Lm(e) {
  return e === "x" ? "y" : "x";
}
function Rm(e) {
  var t = e.state, n = e.options, r = e.name, s = n.mainAxis, o = s === void 0 ? !0 : s, a = n.altAxis, c = a === void 0 ? !1 : a, f = n.boundary, _ = n.rootBoundary, i = n.altBoundary, d = n.padding, u = n.tether, l = u === void 0 ? !0 : u, p = n.tetherOffset, g = p === void 0 ? 0 : p, h = Ks(t, {
    boundary: f,
    rootBoundary: _,
    padding: d,
    altBoundary: i
  }), v = st(t.placement), m = zn(t.placement), k = !m, b = Xs(v), x = Lm(b), $ = t.modifiersData.popperOffsets, S = t.rects.reference, y = t.rects.popper, E = typeof g == "function" ? g(Object.assign({}, t.rects, {
    placement: t.placement
  })) : g, C = typeof E == "number" ? {
    mainAxis: E,
    altAxis: E
  } : Object.assign({
    mainAxis: 0,
    altAxis: 0
  }, E), W = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null, F = {
    x: 0,
    y: 0
  };
  if (!!$) {
    if (o) {
      var A, D = b === "y" ? Ce : Oe, O = b === "y" ? qe : Ge, T = b === "y" ? "height" : "width", M = $[b], j = M + h[D], R = M - h[O], U = l ? -y[T] / 2 : 0, G = m === Fn ? S[T] : y[T], z = m === Fn ? -y[T] : -S[T], J = t.elements.arrow, Q = l && J ? qs(J) : {
        width: 0,
        height: 0
      }, P = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : Au(), Y = P[D], X = P[O], q = gr(0, S[T], Q[T]), Z = k ? S[T] / 2 - U - q - Y - C.mainAxis : G - q - Y - C.mainAxis, se = k ? -S[T] / 2 + U + q + X + C.mainAxis : z + q + X + C.mainAxis, ie = t.elements.arrow && ro(t.elements.arrow), ye = ie ? b === "y" ? ie.clientTop || 0 : ie.clientLeft || 0 : 0, Ke = (A = W == null ? void 0 : W[b]) != null ? A : 0, ee = M + Z - Ke - ye, wt = M + se - Ke, He = gr(l ? ti(j, ee) : j, M, l ? cn(R, wt) : R);
      $[b] = He, F[b] = He - M;
    }
    if (c) {
      var We, $t = b === "x" ? Ce : Oe, Je = b === "x" ? qe : Ge, te = $[x], ve = x === "y" ? "height" : "width", je = te + h[$t], kt = te - h[Je], Be = [Ce, Oe].indexOf(v) !== -1, xt = (We = W == null ? void 0 : W[x]) != null ? We : 0, Et = Be ? je : te - S[ve] - y[ve] - xt + C.altAxis, St = Be ? te + S[ve] + y[ve] - xt - C.altAxis : kt, Ct = l && Be ? Cm(Et, te, St) : gr(l ? Et : je, te, l ? St : kt);
      $[x] = Ct, F[x] = Ct - te;
    }
    t.modifiersData[r] = F;
  }
}
const Hm = {
  name: "preventOverflow",
  enabled: !0,
  phase: "main",
  fn: Rm,
  requiresIfExists: ["offset"]
};
var Wm = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function So(e) {
  return e.replace(/left|right|bottom|top/g, function(t) {
    return Wm[t];
  });
}
var jm = {
  start: "end",
  end: "start"
};
function Tl(e) {
  return e.replace(/start|end/g, function(t) {
    return jm[t];
  });
}
function Bm(e, t) {
  t === void 0 && (t = {});
  var n = t, r = n.placement, s = n.boundary, o = n.rootBoundary, a = n.padding, c = n.flipVariations, f = n.allowedAutoPlacements, _ = f === void 0 ? Cu : f, i = zn(r), d = i ? c ? Cl : Cl.filter(function(p) {
    return zn(p) === i;
  }) : oo, u = d.filter(function(p) {
    return _.indexOf(p) >= 0;
  });
  u.length === 0 && (u = d);
  var l = u.reduce(function(p, g) {
    return p[g] = Ks(e, {
      placement: g,
      boundary: s,
      rootBoundary: o,
      padding: a
    })[st(g)], p;
  }, {});
  return Object.keys(l).sort(function(p, g) {
    return l[p] - l[g];
  });
}
function Im(e) {
  if (st(e) === Gs)
    return [];
  var t = So(e);
  return [Tl(e), t, Tl(t)];
}
function Um(e) {
  var t = e.state, n = e.options, r = e.name;
  if (!t.modifiersData[r]._skip) {
    for (var s = n.mainAxis, o = s === void 0 ? !0 : s, a = n.altAxis, c = a === void 0 ? !0 : a, f = n.fallbackPlacements, _ = n.padding, i = n.boundary, d = n.rootBoundary, u = n.altBoundary, l = n.flipVariations, p = l === void 0 ? !0 : l, g = n.allowedAutoPlacements, h = t.options.placement, v = st(h), m = v === h, k = f || (m || !p ? [So(h)] : Im(h)), b = [h].concat(k).reduce(function(Q, P) {
      return Q.concat(st(P) === Gs ? Bm(t, {
        placement: P,
        boundary: i,
        rootBoundary: d,
        padding: _,
        flipVariations: p,
        allowedAutoPlacements: g
      }) : P);
    }, []), x = t.rects.reference, $ = t.rects.popper, S = /* @__PURE__ */ new Map(), y = !0, E = b[0], C = 0; C < b.length; C++) {
      var W = b[C], F = st(W), A = zn(W) === Fn, D = [Ce, qe].indexOf(F) >= 0, O = D ? "width" : "height", T = Ks(t, {
        placement: W,
        boundary: i,
        rootBoundary: d,
        altBoundary: u,
        padding: _
      }), M = D ? A ? Ge : Oe : A ? qe : Ce;
      x[O] > $[O] && (M = So(M));
      var j = So(M), R = [];
      if (o && R.push(T[F] <= 0), c && R.push(T[M] <= 0, T[j] <= 0), R.every(function(Q) {
        return Q;
      })) {
        E = W, y = !1;
        break;
      }
      S.set(W, R);
    }
    if (y)
      for (var U = p ? 3 : 1, G = function(P) {
        var Y = b.find(function(X) {
          var q = S.get(X);
          if (q)
            return q.slice(0, P).every(function(Z) {
              return Z;
            });
        });
        if (Y)
          return E = Y, "break";
      }, z = U; z > 0; z--) {
        var J = G(z);
        if (J === "break")
          break;
      }
    t.placement !== E && (t.modifiersData[r]._skip = !0, t.placement = E, t.reset = !0);
  }
}
const Fm = {
  name: "flip",
  enabled: !0,
  phase: "main",
  fn: Um,
  requiresIfExists: ["offset"],
  data: {
    _skip: !1
  }
};
var En, Sn, Cn, tn, Ue, qr, On, ui, Nu;
class ot extends sn {
  constructor() {
    super(...arguments);
    L(this, ui);
    L(this, En, !1);
    L(this, Sn, void 0);
    L(this, Cn, 0);
    L(this, tn, void 0);
    L(this, Ue, void 0);
    L(this, qr, void 0);
    N(this, "hideLater", () => {
      w(this, On).call(this), H(this, Cn, window.setTimeout(this.hide.bind(this), 100));
    });
    L(this, On, () => {
      clearTimeout(w(this, Cn)), H(this, Cn, 0);
    });
  }
  get isShown() {
    var n;
    return (n = w(this, tn)) == null ? void 0 : n.classList.contains(this.constructor.CLASS_SHOW);
  }
  get tooltip() {
    return w(this, tn) || this._ensureTooltip();
  }
  get popper() {
    return w(this, Ue) ? w(this, Ue) : this._createPopper();
  }
  get trigger() {
    return w(this, qr) || this.element;
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
    return H(this, qr, n), !w(this, En) && this.isHover && he(this, ui, Nu).call(this), this.options.animation && this.tooltip.classList.add("fade"), this.element.classList.add(this.elementShowClass), this.tooltip.classList.add(this.constructor.CLASS_SHOW), this._createPopper().update(), !0;
  }
  hide() {
    var n, r;
    return (n = w(this, Ue)) == null || n.destroy(), H(this, Ue, void 0), this.element.classList.remove(this.elementShowClass), (r = w(this, tn)) == null || r.classList.remove(this.constructor.CLASS_SHOW), !0;
  }
  toggle(n) {
    return this.isShown ? this.hide() : this.show(n);
  }
  destroy() {
    w(this, En) && (this.element.removeEventListener("mouseleave", this.hideLater), this.tooltip.removeEventListener("mouseenter", w(this, On)), this.tooltip.removeEventListener("mouseleave", this.hideLater)), super.destroy();
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
    return o = o.concat(s), r.classList.add(...o), r[this.options.html ? "innerHTML" : "innerText"] = this.options.title || "", this.options.arrow && r.prepend(this._createArrow()), document.body.appendChild(r), H(this, tn, r), r;
  }
  _getPopperOptions() {
    const n = this._getArrowSize();
    return {
      modifiers: [
        Hm,
        Fm,
        { ...Dm, options: {
          padding: n,
          element: ".arrow"
        } },
        {
          ...Pm,
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
    return w(this, Ue) ? w(this, Ue).setOptions(n) : H(this, Ue, Sm(this._getPopperElement(), this.tooltip, n)), w(this, Ue);
  }
  _getPopperElement() {
    return w(this, Sn) || H(this, Sn, {
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
    }), w(this, Sn);
  }
  static clear(n) {
    n instanceof Event && (n = { event: n });
    const { exclude: r } = n || {}, s = this.getAll().entries(), o = new Set(r || []);
    for (const [a, c] of s)
      o.has(a) || c.hide();
  }
}
En = new WeakMap(), Sn = new WeakMap(), Cn = new WeakMap(), tn = new WeakMap(), Ue = new WeakMap(), qr = new WeakMap(), On = new WeakMap(), ui = new WeakSet(), Nu = function() {
  const { tooltip: n } = this;
  n.addEventListener("mouseenter", w(this, On)), n.addEventListener("mouseleave", this.hideLater), this.element.addEventListener("mouseleave", this.hideLater), H(this, En, !0);
}, N(ot, "NAME", "tooltip"), N(ot, "TOOLTIP_CLASS", "tooltip"), N(ot, "CLASS_SHOW", "show"), N(ot, "MENU_SELECTOR", '[data-toggle="tooltip"]:not(.disabled):not(:disabled)'), N(ot, "DEFAULT", {
  animation: !0,
  placement: "top",
  strategy: "absolute",
  trigger: "hover",
  type: "darker",
  arrow: !0
});
document.addEventListener("click", function(e) {
  const n = e.target.closest(ot.MENU_SELECTOR);
  if (n) {
    const r = ot.ensure(n);
    r.options.trigger === "click" && r.toggle();
  } else
    ot.clear({ event: e });
});
document.addEventListener("mouseover", function(e) {
  const t = e.target, n = typeof t.closest == "function" ? t.closest(ot.MENU_SELECTOR) : null;
  if (!n)
    return;
  const r = ot.ensure(n);
  r.isHover && r.show();
});
var Js, pe, Pu, Lu, yr, Nl, Ru = {}, Hu = [], zm = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function Ft(e, t) {
  for (var n in t)
    e[n] = t[n];
  return e;
}
function Wu(e) {
  var t = e.parentNode;
  t && t.removeChild(e);
}
function V(e, t, n) {
  var r, s, o, a = {};
  for (o in t)
    o == "key" ? r = t[o] : o == "ref" ? s = t[o] : a[o] = t[o];
  if (arguments.length > 2 && (a.children = arguments.length > 3 ? Js.call(arguments, 2) : n), typeof e == "function" && e.defaultProps != null)
    for (o in e.defaultProps)
      a[o] === void 0 && (a[o] = e.defaultProps[o]);
  return Co(e, a, r, s, null);
}
function Co(e, t, n, r, s) {
  var o = { type: e, props: t, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: s == null ? ++Pu : s };
  return s == null && pe.vnode != null && pe.vnode(o), o;
}
function Ym() {
  return { current: null };
}
function Zs(e) {
  return e.children;
}
function br(e, t) {
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
function ju(e) {
  var t, n;
  if ((e = e.__) != null && e.__c != null) {
    for (e.__e = e.__c.base = null, t = 0; t < e.__k.length; t++)
      if ((n = e.__k[t]) != null && n.__e != null) {
        e.__e = e.__c.base = n.__e;
        break;
      }
    return ju(e);
  }
}
function Pl(e) {
  (!e.__d && (e.__d = !0) && yr.push(e) && !ni.__r++ || Nl !== pe.debounceRendering) && ((Nl = pe.debounceRendering) || setTimeout)(ni);
}
function ni() {
  for (var e; ni.__r = yr.length; )
    e = yr.sort(function(t, n) {
      return t.__v.__b - n.__v.__b;
    }), yr = [], e.some(function(t) {
      var n, r, s, o, a, c;
      t.__d && (a = (o = (n = t).__v).__e, (c = n.__P) && (r = [], (s = Ft({}, o)).__v = o.__v + 1, Fu(c, o, s, n.__n, c.ownerSVGElement !== void 0, o.__h != null ? [a] : null, r, a == null ? jr(o) : a, o.__h), qm(r, o), o.__e != a && ju(o)));
    });
}
function Bu(e, t, n, r, s, o, a, c, f, _) {
  var i, d, u, l, p, g, h, v = r && r.__k || Hu, m = v.length;
  for (n.__k = [], i = 0; i < t.length; i++)
    if ((l = n.__k[i] = (l = t[i]) == null || typeof l == "boolean" ? null : typeof l == "string" || typeof l == "number" || typeof l == "bigint" ? Co(null, l, null, null, l) : Array.isArray(l) ? Co(Zs, { children: l }, null, null, null) : l.__b > 0 ? Co(l.type, l.props, l.key, l.ref ? l.ref : null, l.__v) : l) != null) {
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
      Fu(e, l, u = u || Ru, s, o, a, c, f, _), p = l.__e, (d = l.ref) && u.ref != d && (h || (h = []), u.ref && h.push(u.ref, null, l), h.push(d, l.__c || p, l)), p != null ? (g == null && (g = p), typeof l.type == "function" && l.__k === u.__k ? l.__d = f = Iu(l, f, e) : f = Uu(e, l, u, v, p, f), typeof n.type == "function" && (n.__d = f)) : f && u.__e == f && f.parentNode != e && (f = jr(u));
    }
  for (n.__e = g, i = m; i--; )
    v[i] != null && Yu(v[i], v[i]);
  if (h)
    for (i = 0; i < h.length; i++)
      zu(h[i], h[++i], h[++i]);
}
function Iu(e, t, n) {
  for (var r, s = e.__k, o = 0; s && o < s.length; o++)
    (r = s[o]) && (r.__ = e, t = typeof r.type == "function" ? Iu(r, t, n) : Uu(n, r, r, s, r.__e, t));
  return t;
}
function Uu(e, t, n, r, s, o) {
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
function Vm(e, t, n, r, s) {
  var o;
  for (o in n)
    o === "children" || o === "key" || o in t || ri(e, o, null, n[o], r);
  for (o in t)
    s && typeof t[o] != "function" || o === "children" || o === "key" || o === "value" || o === "checked" || n[o] === t[o] || ri(e, o, t[o], n[o], r);
}
function Ll(e, t, n) {
  t[0] === "-" ? e.setProperty(t, n) : e[t] = n == null ? "" : typeof n != "number" || zm.test(t) ? n : n + "px";
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
            n && t in n || Ll(e.style, t, "");
        if (n)
          for (t in n)
            r && n[t] === r[t] || Ll(e.style, t, n[t]);
      }
    else if (t[0] === "o" && t[1] === "n")
      o = t !== (t = t.replace(/Capture$/, "")), t = t.toLowerCase() in e ? t.toLowerCase().slice(2) : t.slice(2), e.l || (e.l = {}), e.l[t + o] = n, n ? r || e.addEventListener(t, o ? Hl : Rl, o) : e.removeEventListener(t, o ? Hl : Rl, o);
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
function Rl(e) {
  this.l[e.type + !1](pe.event ? pe.event(e) : e);
}
function Hl(e) {
  this.l[e.type + !0](pe.event ? pe.event(e) : e);
}
function Fu(e, t, n, r, s, o, a, c, f) {
  var _, i, d, u, l, p, g, h, v, m, k, b, x, $, S, y = t.type;
  if (t.constructor !== void 0)
    return null;
  n.__h != null && (f = n.__h, c = t.__e = n.__e, t.__h = null, o = [c]), (_ = pe.__b) && _(t);
  try {
    e:
      if (typeof y == "function") {
        if (h = t.props, v = (_ = y.contextType) && r[_.__c], m = _ ? v ? v.props.value : _.__ : r, n.__c ? g = (i = t.__c = n.__c).__ = i.__E : ("prototype" in y && y.prototype.render ? t.__c = i = new y(h, m) : (t.__c = i = new br(h, m), i.constructor = y, i.render = Xm), v && v.sub(i), i.props = h, i.state || (i.state = {}), i.context = m, i.__n = r, d = i.__d = !0, i.__h = [], i._sb = []), i.__s == null && (i.__s = i.state), y.getDerivedStateFromProps != null && (i.__s == i.state && (i.__s = Ft({}, i.__s)), Ft(i.__s, y.getDerivedStateFromProps(h, i.__s))), u = i.props, l = i.state, d)
          y.getDerivedStateFromProps == null && i.componentWillMount != null && i.componentWillMount(), i.componentDidMount != null && i.__h.push(i.componentDidMount);
        else {
          if (y.getDerivedStateFromProps == null && h !== u && i.componentWillReceiveProps != null && i.componentWillReceiveProps(h, m), !i.__e && i.shouldComponentUpdate != null && i.shouldComponentUpdate(h, i.__s, m) === !1 || t.__v === n.__v) {
            for (i.props = h, i.state = i.__s, t.__v !== n.__v && (i.__d = !1), i.__v = t, t.__e = n.__e, t.__k = n.__k, t.__k.forEach(function(E) {
              E && (E.__ = t);
            }), k = 0; k < i._sb.length; k++)
              i.__h.push(i._sb[k]);
            i._sb = [], i.__h.length && a.push(i);
            break e;
          }
          i.componentWillUpdate != null && i.componentWillUpdate(h, i.__s, m), i.componentDidUpdate != null && i.__h.push(function() {
            i.componentDidUpdate(u, l, p);
          });
        }
        if (i.context = m, i.props = h, i.__v = t, i.__P = e, b = pe.__r, x = 0, "prototype" in y && y.prototype.render) {
          for (i.state = i.__s, i.__d = !1, b && b(t), _ = i.render(i.props, i.state, i.context), $ = 0; $ < i._sb.length; $++)
            i.__h.push(i._sb[$]);
          i._sb = [];
        } else
          do
            i.__d = !1, b && b(t), _ = i.render(i.props, i.state, i.context), i.state = i.__s;
          while (i.__d && ++x < 25);
        i.state = i.__s, i.getChildContext != null && (r = Ft(Ft({}, r), i.getChildContext())), d || i.getSnapshotBeforeUpdate == null || (p = i.getSnapshotBeforeUpdate(u, l)), S = _ != null && _.type === Zs && _.key == null ? _.props.children : _, Bu(e, Array.isArray(S) ? S : [S], t, n, r, s, o, a, c, f), i.base = t.__e, t.__h = null, i.__h.length && a.push(i), g && (i.__E = i.__ = null), i.__e = !1;
      } else
        o == null && t.__v === n.__v ? (t.__k = n.__k, t.__e = n.__e) : t.__e = Gm(n.__e, t, n, r, s, o, a, f);
    (_ = pe.diffed) && _(t);
  } catch (E) {
    t.__v = null, (f || o != null) && (t.__e = c, t.__h = !!f, o[o.indexOf(c)] = null), pe.__e(E, t, n);
  }
}
function qm(e, t) {
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
function Gm(e, t, n, r, s, o, a, c) {
  var f, _, i, d = n.props, u = t.props, l = t.type, p = 0;
  if (l === "svg" && (s = !0), o != null) {
    for (; p < o.length; p++)
      if ((f = o[p]) && "setAttribute" in f == !!l && (l ? f.localName === l : f.nodeType === 3)) {
        e = f, o[p] = null;
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
    if (o = o && Js.call(e.childNodes), _ = (d = n.props || Ru).dangerouslySetInnerHTML, i = u.dangerouslySetInnerHTML, !c) {
      if (o != null)
        for (d = {}, p = 0; p < e.attributes.length; p++)
          d[e.attributes[p].name] = e.attributes[p].value;
      (i || _) && (i && (_ && i.__html == _.__html || i.__html === e.innerHTML) || (e.innerHTML = i && i.__html || ""));
    }
    if (Vm(e, u, d, s, c), i)
      t.__k = [];
    else if (p = t.props.children, Bu(e, Array.isArray(p) ? p : [p], t, n, r, s && l !== "foreignObject", o, a, o ? o[0] : n.__k && jr(n, 0), c), o != null)
      for (p = o.length; p--; )
        o[p] != null && Wu(o[p]);
    c || ("value" in u && (p = u.value) !== void 0 && (p !== e.value || l === "progress" && !p || l === "option" && p !== d.value) && ri(e, "value", p, d.value, !1), "checked" in u && (p = u.checked) !== void 0 && p !== e.checked && ri(e, "checked", p, d.checked, !1));
  }
  return e;
}
function zu(e, t, n) {
  try {
    typeof e == "function" ? e(t) : e.current = t;
  } catch (r) {
    pe.__e(r, n);
  }
}
function Yu(e, t, n) {
  var r, s;
  if (pe.unmount && pe.unmount(e), (r = e.ref) && (r.current && r.current !== e.__e || zu(r, null, t)), (r = e.__c) != null) {
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
      r[s] && Yu(r[s], t, n || typeof e.type != "function");
  n || e.__e == null || Wu(e.__e), e.__ = e.__e = e.__d = void 0;
}
function Xm(e, t, n) {
  return this.constructor(e, n);
}
Js = Hu.slice, pe = { __e: function(e, t, n, r) {
  for (var s, o, a; t = t.__; )
    if ((s = t.__c) && !s.__)
      try {
        if ((o = s.constructor) && o.getDerivedStateFromError != null && (s.setState(o.getDerivedStateFromError(e)), a = s.__d), s.componentDidCatch != null && (s.componentDidCatch(e, r || {}), a = s.__d), a)
          return s.__E = s;
      } catch (c) {
        e = c;
      }
  throw e;
} }, Pu = 0, Lu = function(e) {
  return e != null && e.constructor === void 0;
}, br.prototype.setState = function(e, t) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = Ft({}, this.state), typeof e == "function" && (e = e(Ft({}, n), this.props)), e && Ft(n, e), e != null && this.__v && (t && this._sb.push(t), Pl(this));
}, br.prototype.forceUpdate = function(e) {
  this.__v && (this.__e = !0, e && this.__h.push(e), Pl(this));
}, br.prototype.render = Zs, yr = [], ni.__r = 0;
let Km = (e = 21) => crypto.getRandomValues(new Uint8Array(e)).reduce((t, n) => (n &= 63, n < 36 ? t += n.toString(36) : n < 62 ? t += (n - 26).toString(36).toUpperCase() : n > 62 ? t += "-" : t += "_", t), "");
var Qs, de, Vu, wr, Wl, qu = {}, Gu = [], Jm = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function zt(e, t) {
  for (var n in t)
    e[n] = t[n];
  return e;
}
function Xu(e) {
  var t = e.parentNode;
  t && t.removeChild(e);
}
function jl(e, t, n) {
  var r, s, o, a = {};
  for (o in t)
    o == "key" ? r = t[o] : o == "ref" ? s = t[o] : a[o] = t[o];
  if (arguments.length > 2 && (a.children = arguments.length > 3 ? Qs.call(arguments, 2) : n), typeof e == "function" && e.defaultProps != null)
    for (o in e.defaultProps)
      a[o] === void 0 && (a[o] = e.defaultProps[o]);
  return Oo(e, a, r, s, null);
}
function Oo(e, t, n, r, s) {
  var o = { type: e, props: t, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: s == null ? ++Vu : s };
  return s == null && de.vnode != null && de.vnode(o), o;
}
function ea(e) {
  return e.children;
}
function $r(e, t) {
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
function Bl(e) {
  (!e.__d && (e.__d = !0) && wr.push(e) && !oi.__r++ || Wl !== de.debounceRendering) && ((Wl = de.debounceRendering) || setTimeout)(oi);
}
function oi() {
  for (var e; oi.__r = wr.length; )
    e = wr.sort(function(t, n) {
      return t.__v.__b - n.__v.__b;
    }), wr = [], e.some(function(t) {
      var n, r, s, o, a, c;
      t.__d && (a = (o = (n = t).__v).__e, (c = n.__P) && (r = [], (s = zt({}, o)).__v = o.__v + 1, e_(c, o, s, n.__n, c.ownerSVGElement !== void 0, o.__h != null ? [a] : null, r, a == null ? Br(o) : a, o.__h), Qm(r, o), o.__e != a && Ku(o)));
    });
}
function Ju(e, t, n, r, s, o, a, c, f, _) {
  var i, d, u, l, p, g, h, v = r && r.__k || Gu, m = v.length;
  for (n.__k = [], i = 0; i < t.length; i++)
    if ((l = n.__k[i] = (l = t[i]) == null || typeof l == "boolean" ? null : typeof l == "string" || typeof l == "number" || typeof l == "bigint" ? Oo(null, l, null, null, l) : Array.isArray(l) ? Oo(ea, { children: l }, null, null, null) : l.__b > 0 ? Oo(l.type, l.props, l.key, l.ref ? l.ref : null, l.__v) : l) != null) {
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
      e_(e, l, u = u || qu, s, o, a, c, f, _), p = l.__e, (d = l.ref) && u.ref != d && (h || (h = []), u.ref && h.push(u.ref, null, l), h.push(d, l.__c || p, l)), p != null ? (g == null && (g = p), typeof l.type == "function" && l.__k === u.__k ? l.__d = f = Zu(l, f, e) : f = Qu(e, l, u, v, p, f), typeof n.type == "function" && (n.__d = f)) : f && u.__e == f && f.parentNode != e && (f = Br(u));
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
function Zm(e, t, n, r, s) {
  var o;
  for (o in n)
    o === "children" || o === "key" || o in t || ii(e, o, null, n[o], r);
  for (o in t)
    s && typeof t[o] != "function" || o === "children" || o === "key" || o === "value" || o === "checked" || n[o] === t[o] || ii(e, o, t[o], n[o], r);
}
function Il(e, t, n) {
  t[0] === "-" ? e.setProperty(t, n) : e[t] = n == null ? "" : typeof n != "number" || Jm.test(t) ? n : n + "px";
}
function ii(e, t, n, r, s) {
  var o;
  e:
    if (t === "style")
      if (typeof n == "string")
        e.style.cssText = n;
      else {
        if (typeof r == "string" && (e.style.cssText = r = ""), r)
          for (t in r)
            n && t in n || Il(e.style, t, "");
        if (n)
          for (t in n)
            r && n[t] === r[t] || Il(e.style, t, n[t]);
      }
    else if (t[0] === "o" && t[1] === "n")
      o = t !== (t = t.replace(/Capture$/, "")), t = t.toLowerCase() in e ? t.toLowerCase().slice(2) : t.slice(2), e.l || (e.l = {}), e.l[t + o] = n, n ? r || e.addEventListener(t, o ? Fl : Ul, o) : e.removeEventListener(t, o ? Fl : Ul, o);
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
function Ul(e) {
  this.l[e.type + !1](de.event ? de.event(e) : e);
}
function Fl(e) {
  this.l[e.type + !0](de.event ? de.event(e) : e);
}
function e_(e, t, n, r, s, o, a, c, f) {
  var _, i, d, u, l, p, g, h, v, m, k, b, x, $, S, y = t.type;
  if (t.constructor !== void 0)
    return null;
  n.__h != null && (f = n.__h, c = t.__e = n.__e, t.__h = null, o = [c]), (_ = de.__b) && _(t);
  try {
    e:
      if (typeof y == "function") {
        if (h = t.props, v = (_ = y.contextType) && r[_.__c], m = _ ? v ? v.props.value : _.__ : r, n.__c ? g = (i = t.__c = n.__c).__ = i.__E : ("prototype" in y && y.prototype.render ? t.__c = i = new y(h, m) : (t.__c = i = new $r(h, m), i.constructor = y, i.render = tg), v && v.sub(i), i.props = h, i.state || (i.state = {}), i.context = m, i.__n = r, d = i.__d = !0, i.__h = [], i._sb = []), i.__s == null && (i.__s = i.state), y.getDerivedStateFromProps != null && (i.__s == i.state && (i.__s = zt({}, i.__s)), zt(i.__s, y.getDerivedStateFromProps(h, i.__s))), u = i.props, l = i.state, d)
          y.getDerivedStateFromProps == null && i.componentWillMount != null && i.componentWillMount(), i.componentDidMount != null && i.__h.push(i.componentDidMount);
        else {
          if (y.getDerivedStateFromProps == null && h !== u && i.componentWillReceiveProps != null && i.componentWillReceiveProps(h, m), !i.__e && i.shouldComponentUpdate != null && i.shouldComponentUpdate(h, i.__s, m) === !1 || t.__v === n.__v) {
            for (i.props = h, i.state = i.__s, t.__v !== n.__v && (i.__d = !1), i.__v = t, t.__e = n.__e, t.__k = n.__k, t.__k.forEach(function(E) {
              E && (E.__ = t);
            }), k = 0; k < i._sb.length; k++)
              i.__h.push(i._sb[k]);
            i._sb = [], i.__h.length && a.push(i);
            break e;
          }
          i.componentWillUpdate != null && i.componentWillUpdate(h, i.__s, m), i.componentDidUpdate != null && i.__h.push(function() {
            i.componentDidUpdate(u, l, p);
          });
        }
        if (i.context = m, i.props = h, i.__v = t, i.__P = e, b = de.__r, x = 0, "prototype" in y && y.prototype.render) {
          for (i.state = i.__s, i.__d = !1, b && b(t), _ = i.render(i.props, i.state, i.context), $ = 0; $ < i._sb.length; $++)
            i.__h.push(i._sb[$]);
          i._sb = [];
        } else
          do
            i.__d = !1, b && b(t), _ = i.render(i.props, i.state, i.context), i.state = i.__s;
          while (i.__d && ++x < 25);
        i.state = i.__s, i.getChildContext != null && (r = zt(zt({}, r), i.getChildContext())), d || i.getSnapshotBeforeUpdate == null || (p = i.getSnapshotBeforeUpdate(u, l)), S = _ != null && _.type === ea && _.key == null ? _.props.children : _, Ju(e, Array.isArray(S) ? S : [S], t, n, r, s, o, a, c, f), i.base = t.__e, t.__h = null, i.__h.length && a.push(i), g && (i.__E = i.__ = null), i.__e = !1;
      } else
        o == null && t.__v === n.__v ? (t.__k = n.__k, t.__e = n.__e) : t.__e = eg(n.__e, t, n, r, s, o, a, f);
    (_ = de.diffed) && _(t);
  } catch (E) {
    t.__v = null, (f || o != null) && (t.__e = c, t.__h = !!f, o[o.indexOf(c)] = null), de.__e(E, t, n);
  }
}
function Qm(e, t) {
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
function eg(e, t, n, r, s, o, a, c) {
  var f, _, i, d = n.props, u = t.props, l = t.type, p = 0;
  if (l === "svg" && (s = !0), o != null) {
    for (; p < o.length; p++)
      if ((f = o[p]) && "setAttribute" in f == !!l && (l ? f.localName === l : f.nodeType === 3)) {
        e = f, o[p] = null;
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
    if (o = o && Qs.call(e.childNodes), _ = (d = n.props || qu).dangerouslySetInnerHTML, i = u.dangerouslySetInnerHTML, !c) {
      if (o != null)
        for (d = {}, p = 0; p < e.attributes.length; p++)
          d[e.attributes[p].name] = e.attributes[p].value;
      (i || _) && (i && (_ && i.__html == _.__html || i.__html === e.innerHTML) || (e.innerHTML = i && i.__html || ""));
    }
    if (Zm(e, u, d, s, c), i)
      t.__k = [];
    else if (p = t.props.children, Ju(e, Array.isArray(p) ? p : [p], t, n, r, s && l !== "foreignObject", o, a, o ? o[0] : n.__k && Br(n, 0), c), o != null)
      for (p = o.length; p--; )
        o[p] != null && Xu(o[p]);
    c || ("value" in u && (p = u.value) !== void 0 && (p !== e.value || l === "progress" && !p || l === "option" && p !== d.value) && ii(e, "value", p, d.value, !1), "checked" in u && (p = u.checked) !== void 0 && p !== e.checked && ii(e, "checked", p, d.checked, !1));
  }
  return e;
}
function t_(e, t, n) {
  try {
    typeof e == "function" ? e(t) : e.current = t;
  } catch (r) {
    de.__e(r, n);
  }
}
function n_(e, t, n) {
  var r, s;
  if (de.unmount && de.unmount(e), (r = e.ref) && (r.current && r.current !== e.__e || t_(r, null, t)), (r = e.__c) != null) {
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
      r[s] && n_(r[s], t, n || typeof e.type != "function");
  n || e.__e == null || Xu(e.__e), e.__ = e.__e = e.__d = void 0;
}
function tg(e, t, n) {
  return this.constructor(e, n);
}
Qs = Gu.slice, de = { __e: function(e, t, n, r) {
  for (var s, o, a; t = t.__; )
    if ((s = t.__c) && !s.__)
      try {
        if ((o = s.constructor) && o.getDerivedStateFromError != null && (s.setState(o.getDerivedStateFromError(e)), a = s.__d), s.componentDidCatch != null && (s.componentDidCatch(e, r || {}), a = s.__d), a)
          return s.__E = s;
      } catch (c) {
        e = c;
      }
  throw e;
} }, Vu = 0, $r.prototype.setState = function(e, t) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = zt({}, this.state), typeof e == "function" && (e = e(zt({}, n), this.props)), e && zt(n, e), e != null && this.__v && (t && this._sb.push(t), Bl(this));
}, $r.prototype.forceUpdate = function(e) {
  this.__v && (this.__e = !0, e && this.__h.push(e), Bl(this));
}, $r.prototype.render = ea, wr = [], oi.__r = 0;
var nn, rn;
class zl extends $r {
  constructor(n) {
    var r;
    super(n);
    L(this, nn, 0);
    L(this, rn, null);
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
      r && (w(this, nn) && cancelAnimationFrame(w(this, nn)), H(this, nn, requestAnimationFrame(() => {
        const s = this.props.type === "horz" ? n.clientX - r.x : n.clientY - r.y;
        this.scroll(r.offset + s * this.props.scrollSize / this.props.clientSize), H(this, nn, 0);
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
    n && (H(this, rn, typeof n == "string" ? document : n.current), w(this, rn).addEventListener("wheel", this._handleWheel, { passive: !1 }));
  }
  componentWillUnmount() {
    document.removeEventListener("mousemove", this._handleMouseMove), document.removeEventListener("mouseup", this._handleMouseUp), w(this, rn) && w(this, rn).removeEventListener("wheel", this._handleWheel);
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
      bottom: _,
      right: i
    } = this.props, { maxScrollPos: d, scrollPos: u } = this, { dragStart: l } = this.state, p = {
      left: c,
      top: f,
      bottom: _,
      right: i,
      ...a
    }, g = {};
    return r === "horz" ? (p.height = s, p.width = n, g.width = this.barSize, g.left = Math.round(Math.min(d, u) * (n - g.width) / d)) : (p.width = s, p.height = n, g.height = this.barSize, g.top = Math.round(Math.min(d, u) * (n - g.height) / d)), /* @__PURE__ */ jl("div", {
      className: I("scrollbar", o, {
        "is-vert": r === "vert",
        "is-horz": r === "horz",
        "is-dragging": l
      }),
      style: p,
      onMouseDown: this._handleClick
    }, /* @__PURE__ */ jl("div", {
      className: "scrollbar-bar",
      style: g,
      onMouseDown: this._handleMouseDown
    }));
  }
}
nn = new WeakMap(), rn = new WeakMap();
function Yl(e, t, n) {
  return e && (t && (e = Math.max(t, e)), n && (e = Math.min(n, e))), e;
}
function r_({ col: e, className: t, height: n, row: r, onRenderCell: s, style: o, outerStyle: a, children: c, outerClass: f, ..._ }) {
  var y, E;
  const i = {
    left: e.left,
    width: e.realWidth,
    height: n,
    ...a
  }, { align: d, border: u } = e.setting, l = {
    justifyContent: d ? d === "left" ? "start" : d === "right" ? "end" : d : void 0,
    ...e.setting.cellStyle,
    ...o
  }, p = ["dtable-cell", f, e.setting.className, {
    "has-border-left": u === !0 || u === "left",
    "has-border-right": u === !0 || u === "right"
  }], g = ["dtable-cell-content", t], h = [(E = c != null ? c : (y = r.data) == null ? void 0 : y[e.name]) != null ? E : ""], v = s ? s(h, { row: r, col: e }, V) : h, m = [], k = [], b = {}, x = {};
  let $ = "div";
  v == null || v.forEach((C) => {
    var W;
    if (typeof C == "object" && C && !Lu(C) && ("html" in C || "className" in C || "style" in C || "attrs" in C || "children" in C || "tagName" in C)) {
      const F = C.outer ? m : k;
      C.html ? F.push(/* @__PURE__ */ V("div", {
        className: I("dtable-cell-html", C.className),
        style: C.style,
        dangerouslySetInnerHTML: { __html: C.html },
        ...(W = C.attrs) != null ? W : {}
      })) : (C.style && Object.assign(C.outer ? i : l, C.style), C.className && (C.outer ? p : g).push(C.className), C.children && F.push(C.children), C.attrs && Object.assign(C.outer ? b : x, C.attrs)), C.tagName && !C.outer && ($ = C.tagName);
    } else
      k.push(C);
  });
  const S = $;
  return /* @__PURE__ */ V("div", {
    className: I(p),
    style: i,
    "data-col": e.name,
    ..._,
    ...b
  }, k.length > 0 && /* @__PURE__ */ V(S, {
    className: I(g),
    style: l,
    ...x
  }, k), m);
}
function Bi({ row: e, className: t, top: n = 0, left: r = 0, width: s, height: o, cols: a, CellComponent: c = r_, onRenderCell: f }) {
  return /* @__PURE__ */ V("div", {
    className: I("dtable-cells", t),
    style: { top: n, left: r, width: s, height: o }
  }, a.map((_) => _.visible ? /* @__PURE__ */ V(c, {
    key: _.name,
    col: _,
    row: e,
    onRenderCell: f
  }) : null));
}
function o_({
  row: e,
  className: t,
  top: n,
  height: r,
  fixedLeftCols: s,
  fixedRightCols: o,
  scrollCols: a,
  fixedLeftWidth: c,
  scrollWidth: f,
  scrollColsWidth: _,
  fixedRightWidth: i,
  scrollLeft: d,
  CellComponent: u = r_,
  onRenderCell: l,
  style: p,
  ...g
}) {
  let h = null;
  s != null && s.length && (h = /* @__PURE__ */ V(Bi, {
    className: "dtable-fixed-left",
    cols: s,
    width: c,
    row: e,
    CellComponent: u,
    onRenderCell: l
  }));
  let v = null;
  a != null && a.length && (v = /* @__PURE__ */ V(Bi, {
    className: "dtable-flexable",
    cols: a,
    left: c - d,
    width: Math.max(f, _),
    row: e,
    CellComponent: u,
    onRenderCell: l
  }));
  let m = null;
  o != null && o.length && (m = /* @__PURE__ */ V(Bi, {
    className: "dtable-fixed-right",
    cols: o,
    left: c + f,
    width: i,
    row: e,
    CellComponent: u,
    onRenderCell: l
  }));
  const k = { top: n, height: r, lineHeight: `${r - 2}px`, ...p };
  return /* @__PURE__ */ V("div", {
    className: I("dtable-row", t),
    style: k,
    "data-id": e.id,
    ...g
  }, h, v, m);
}
function ng({ height: e, onRenderRow: t, ...n }) {
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
  }, /* @__PURE__ */ V(o_, {
    ...r
  }));
}
function rg({
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
  }, r.map((_) => {
    const i = {
      className: `dtable-row-${_.index % 2 ? "odd" : "even"}`,
      row: _,
      top: _.top - a,
      height: o,
      ...f
    }, d = c == null ? void 0 : c({ props: i, row: _ }, V);
    return d && Object.assign(i, d), /* @__PURE__ */ V(o_, {
      ...i
    });
  }));
}
const si = /* @__PURE__ */ new Map(), ai = [];
function i_(e, t) {
  const { name: n } = e;
  if (!(t != null && t.override) && si.has(n))
    throw new Error(`DTable: Plugin with name ${n} already exists`);
  si.set(n, e), (t == null ? void 0 : t.buildIn) && !ai.includes(n) && ai.push(n);
}
function Vn(e, t) {
  i_(e, t);
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
function s_(e) {
  return si.delete(e);
}
function og(e) {
  if (typeof e == "string") {
    const t = si.get(e);
    return t || console.warn(`DTable: Cannot found plugin "${e}"`), t;
  }
  if (typeof e == "function" && "plugin" in e)
    return e.plugin;
  if (typeof e == "object")
    return e;
  console.warn("DTable: Invalid plugin", e);
}
function a_(e, t, n) {
  return t.forEach((r) => {
    var o;
    if (!r)
      return;
    const s = og(r);
    !s || n.has(s.name) || ((o = s.plugins) != null && o.length && a_(e, s.plugins, n), e.push(s), n.add(s.name));
  }), e;
}
function ig(e = [], t = !0) {
  return t && ai.length && e.unshift(...ai), e != null && e.length ? a_([], e, /* @__PURE__ */ new Set()) : [];
}
function Vl() {
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
var on, Mn, Tt, et, Nt, me, Fe, tt, An, Gr, Xr, ht, Dn, Tn, _i, l_, pi, c_, di, f_, hi, u_, Kr, os, vi, mi, Jr, Zr, gi, yi, bi, __, wi, p_, $i, d_;
class rs extends br {
  constructor(n) {
    var r;
    super(n);
    L(this, _i);
    L(this, pi);
    L(this, di);
    L(this, hi);
    L(this, Kr);
    L(this, bi);
    L(this, wi);
    L(this, $i);
    N(this, "ref", Ym());
    L(this, on, 0);
    L(this, Mn, void 0);
    L(this, Tt, !1);
    L(this, et, void 0);
    L(this, Nt, void 0);
    L(this, me, []);
    L(this, Fe, void 0);
    L(this, tt, /* @__PURE__ */ new Map());
    L(this, An, {});
    L(this, Gr, void 0);
    L(this, Xr, []);
    N(this, "updateLayout", () => {
      w(this, on) && cancelAnimationFrame(w(this, on)), H(this, on, requestAnimationFrame(() => {
        H(this, Fe, void 0), this.forceUpdate(), H(this, on, 0);
      }));
    });
    L(this, ht, (n, r) => {
      r = r || n.type;
      const s = w(this, tt).get(r);
      if (!!(s != null && s.length)) {
        for (const o of s)
          if (o.call(this, n) === !1) {
            n.stopPropagation(), n.preventDefault();
            break;
          }
      }
    });
    L(this, Dn, (n) => {
      w(this, ht).call(this, n, `window_${n.type}`);
    });
    L(this, Tn, (n) => {
      w(this, ht).call(this, n, `document_${n.type}`);
    });
    L(this, vi, (n, r) => {
      if (this.options.onRenderRow) {
        const s = this.options.onRenderRow.call(this, n, r);
        s && Object.assign(n.props, s);
      }
      return w(this, me).forEach((s) => {
        if (s.onRenderRow) {
          const o = s.onRenderRow.call(this, n, r);
          o && Object.assign(n.props, o);
        }
      }), n.props;
    });
    L(this, mi, (n, r) => (this.options.onRenderHeaderRow && (n.props = this.options.onRenderHeaderRow.call(this, n, r)), w(this, me).forEach((s) => {
      s.onRenderHeaderRow && (n.props = s.onRenderHeaderRow.call(this, n, r));
    }), n.props));
    L(this, Jr, (n, r, s) => {
      const { row: o, col: a } = r;
      n[0] = this.getCellValue(o, a);
      const c = o.id === "HEADER" ? "onRenderHeaderCell" : "onRenderCell";
      return a.setting[c] && (n = a.setting[c].call(this, n, r, s)), this.options[c] && (n = this.options[c].call(this, n, r, s)), w(this, me).forEach((f) => {
        f[c] && (n = f[c].call(this, n, r, s));
      }), n;
    });
    L(this, Zr, (n, r) => {
      r === "horz" ? this.scroll({ scrollLeft: n }) : this.scroll({ scrollTop: n });
    });
    L(this, gi, (n) => {
      var c, f, _, i, d;
      const r = this.getPointerInfo(n);
      if (!r)
        return;
      const { rowID: s, colName: o, cellElement: a } = r;
      if (s === "HEADER")
        a && ((c = this.options.onHeaderCellClick) == null || c.call(this, n, { colName: o, element: a }), w(this, me).forEach((u) => {
          var l;
          (l = u.onHeaderCellClick) == null || l.call(this, n, { colName: o, element: a });
        }));
      else {
        const { rowElement: u } = r, l = this.layout.visibleRows.find((p) => p.id === s);
        if (a) {
          if (((f = this.options.onCellClick) == null ? void 0 : f.call(this, n, { colName: o, rowID: s, rowInfo: l, element: a, rowElement: u })) === !0)
            return;
          for (const p of w(this, me))
            if (((_ = p.onCellClick) == null ? void 0 : _.call(this, n, { colName: o, rowID: s, rowInfo: l, element: a, rowElement: u })) === !0)
              return;
        }
        if (((i = this.options.onRowClick) == null ? void 0 : i.call(this, n, { rowID: s, rowInfo: l, element: u })) === !0)
          return;
        for (const p of w(this, me))
          if (((d = p.onRowClick) == null ? void 0 : d.call(this, n, { rowID: s, rowInfo: l, element: u })) === !0)
            return;
      }
    });
    L(this, yi, (n) => {
      const r = n.key.toLowerCase();
      if (["pageup", "pagedown", "home", "end"].includes(r))
        return !this.scroll({ to: r.replace("page", "") });
    });
    H(this, Mn, (r = n.id) != null ? r : `dtable-${Km(10)}`), this.state = { scrollTop: 0, scrollLeft: 0, renderCount: 0 }, H(this, Nt, Object.freeze(ig(n.plugins))), w(this, Nt).forEach((s) => {
      var f;
      const { methods: o, data: a, state: c } = s;
      o && Object.entries(o).forEach(([_, i]) => {
        typeof i == "function" && Object.assign(this, { [_]: i.bind(this) });
      }), a && Object.assign(w(this, An), a.call(this)), c && Object.assign(this.state, c.call(this)), (f = s.onCreate) == null || f.call(this, s);
    });
  }
  get options() {
    var n;
    return ((n = w(this, Fe)) == null ? void 0 : n.options) || w(this, et) || Vl();
  }
  get plugins() {
    return w(this, me);
  }
  get layout() {
    return w(this, Fe);
  }
  get id() {
    return w(this, Mn);
  }
  get data() {
    return w(this, An);
  }
  get parent() {
    var n, r;
    return (r = this.props.parent) != null ? r : (n = this.ref.current) == null ? void 0 : n.parentElement;
  }
  componentWillReceiveProps() {
    H(this, et, void 0);
  }
  componentDidMount() {
    if (w(this, Tt) ? this.forceUpdate() : he(this, Kr, os).call(this), w(this, me).forEach((n) => {
      let { events: r } = n;
      !r || (typeof r == "function" && (r = r.call(this)), Object.entries(r).forEach(([s, o]) => {
        o && this.on(s, o);
      }));
    }), this.on("click", w(this, gi)), this.on("keydown", w(this, yi)), this.options.responsive) {
      if (typeof ResizeObserver < "u") {
        const { parent: n } = this;
        if (n) {
          const r = new ResizeObserver(this.updateLayout);
          r.observe(n), H(this, Gr, r);
        }
      }
      this.on("window_resize", this.updateLayout);
    }
    w(this, me).forEach((n) => {
      var r;
      (r = n.onMounted) == null || r.call(this);
    });
  }
  componentDidUpdate() {
    w(this, Tt) ? he(this, Kr, os).call(this) : w(this, me).forEach((n) => {
      var r;
      (r = n.onUpdated) == null || r.call(this);
    });
  }
  componentWillUnmount() {
    var r;
    (r = w(this, Gr)) == null || r.disconnect();
    const { current: n } = this.ref;
    if (n)
      for (const s of w(this, tt).keys())
        s.startsWith("window_") ? window.removeEventListener(s.replace("window_", ""), w(this, Dn)) : s.startsWith("document_") ? document.removeEventListener(s.replace("document_", ""), w(this, Tn)) : n.removeEventListener(s, w(this, ht));
    w(this, me).forEach((s) => {
      var o;
      (o = s.onUnmounted) == null || o.call(this);
    }), w(this, Nt).forEach((s) => {
      var o;
      (o = s.onDestory) == null || o.call(this);
    }), H(this, An, {}), w(this, tt).clear();
  }
  on(n, r, s) {
    var a;
    s && (n = `${s}_${n}`);
    const o = w(this, tt).get(n);
    o ? o.push(r) : (w(this, tt).set(n, [r]), n.startsWith("window_") ? window.addEventListener(n.replace("window_", ""), w(this, Dn)) : n.startsWith("document_") ? document.addEventListener(n.replace("document_", ""), w(this, Tn)) : (a = this.ref.current) == null || a.addEventListener(n, w(this, ht)));
  }
  off(n, r, s) {
    var c;
    s && (n = `${s}_${n}`);
    const o = w(this, tt).get(n);
    if (!o)
      return;
    const a = o.indexOf(r);
    a >= 0 && o.splice(a, 1), o.length || (w(this, tt).delete(n), n.startsWith("window_") ? window.removeEventListener(n.replace("window_", ""), w(this, Dn)) : n.startsWith("document_") ? document.removeEventListener(n.replace("document_", ""), w(this, Tn)) : (c = this.ref.current) == null || c.removeEventListener(n, w(this, ht)));
  }
  emitCustomEvent(n, r) {
    w(this, ht).call(this, r instanceof Event ? r : new CustomEvent(n, { detail: r }), n);
  }
  scroll(n, r) {
    const { scrollLeft: s, scrollTop: o, rowsHeightTotal: a, rowsHeight: c, rowHeight: f, colsInfo: { scrollWidth: _, scrollColsWidth: i } } = this.layout, { to: d } = n;
    let { scrollLeft: u, scrollTop: l } = n;
    if (d === "up" || d === "down")
      l = o + (d === "down" ? 1 : -1) * Math.floor(c / f) * f;
    else if (d === "left" || d === "right")
      u = s + (d === "right" ? 1 : -1) * _;
    else if (d === "home")
      l = 0;
    else if (d === "end")
      l = a - c;
    else if (d === "left-begin")
      u = 0;
    else if (d === "right-end")
      u = i - _;
    else {
      const { offsetLeft: g, offsetTop: h } = n;
      typeof g == "number" && (u = s + g), typeof h == "number" && (u = o + h);
    }
    const p = {};
    return typeof u == "number" && (u = Math.max(0, Math.min(u, i - _)), u !== s && (p.scrollLeft = u)), typeof l == "number" && (l = Math.max(0, Math.min(l, a - c)), l !== o && (p.scrollTop = l)), Object.keys(p).length ? (this.setState(p, () => {
      var g;
      (g = this.options.onScroll) == null || g.call(this, p), r == null || r.call(this, !0);
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
    var f, _;
    const s = typeof n == "object" ? n : this.getRowInfo(n);
    if (!s)
      return;
    const o = typeof r == "object" ? r : this.getColInfo(r);
    if (!o)
      return;
    let a = s.id === "HEADER" ? (f = o.setting.title) != null ? f : o.setting.name : (_ = s.data) == null ? void 0 : _[o.name];
    const { cellValueGetter: c } = this.options;
    return c && (a = c.call(this, s, o, a)), a;
  }
  getRowInfoByIndex(n) {
    return this.layout.rows[n];
  }
  update(n = {}, r) {
    if (!w(this, et))
      return;
    typeof n == "function" && (r = n, n = {});
    const { dirtyType: s, state: o } = n;
    if (s === "layout")
      H(this, Fe, void 0);
    else if (s === "options") {
      if (H(this, et, void 0), !w(this, Fe))
        return;
      H(this, Fe, void 0);
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
    return (o = Qr(w(this, Xr), n, r, s, this.options.lang)) != null ? o : `{i18n:${n}}`;
  }
  render() {
    var l;
    const n = he(this, $i, d_).call(this), { className: r, rowHover: s, colHover: o, cellHover: a, bordered: c, striped: f, scrollbarHover: _ } = this.options, i = { width: n == null ? void 0 : n.width, height: n == null ? void 0 : n.height }, d = ["dtable", r, {
      "dtable-hover-row": s,
      "dtable-hover-col": o,
      "dtable-hover-cell": a,
      "dtable-bordered": c,
      "dtable-striped": f,
      "dtable-scrolled-down": ((l = n == null ? void 0 : n.scrollTop) != null ? l : 0) > 0,
      "scrollbar-hover": _
    }], u = [];
    return n && w(this, me).forEach((p) => {
      var h;
      const g = (h = p.onRender) == null ? void 0 : h.call(this, n);
      !g || (g.style && Object.assign(i, g.style), g.className && d.push(g.className), g.children && u.push(g.children));
    }), /* @__PURE__ */ V("div", {
      id: w(this, Mn),
      className: I(d),
      style: i,
      ref: this.ref,
      tabIndex: -1
    }, n && he(this, _i, l_).call(this, n), n && he(this, pi, c_).call(this, n), n && he(this, di, f_).call(this, n), n && he(this, hi, u_).call(this, n));
  }
}
on = new WeakMap(), Mn = new WeakMap(), Tt = new WeakMap(), et = new WeakMap(), Nt = new WeakMap(), me = new WeakMap(), Fe = new WeakMap(), tt = new WeakMap(), An = new WeakMap(), Gr = new WeakMap(), Xr = new WeakMap(), ht = new WeakMap(), Dn = new WeakMap(), Tn = new WeakMap(), _i = new WeakSet(), l_ = function(n) {
  const { header: r, colsInfo: s, headerHeight: o, scrollLeft: a } = n;
  if (!r)
    return null;
  if (r === !0)
    return /* @__PURE__ */ V(ng, {
      scrollLeft: a,
      height: o,
      onRenderCell: w(this, Jr),
      onRenderRow: w(this, mi),
      ...s
    });
  const c = Array.isArray(r) ? r : [r];
  return /* @__PURE__ */ V(Fi, {
    className: "dtable-header",
    style: { height: o },
    renders: c,
    generateArgs: [n],
    generatorThis: this
  });
}, pi = new WeakSet(), c_ = function(n) {
  const { headerHeight: r, rowsHeight: s, visibleRows: o, rowHeight: a, colsInfo: c, scrollLeft: f, scrollTop: _ } = n;
  return /* @__PURE__ */ V(rg, {
    top: r,
    height: s,
    rows: o,
    rowHeight: a,
    scrollLeft: f,
    scrollTop: _,
    onRenderCell: w(this, Jr),
    onRenderRow: w(this, vi),
    ...c
  });
}, di = new WeakSet(), f_ = function(n) {
  const { footer: r } = n;
  if (!r)
    return null;
  const s = typeof r == "function" ? r.call(this, n) : Array.isArray(r) ? r : [r];
  return /* @__PURE__ */ V(Fi, {
    className: "dtable-footer",
    style: { height: n.footerHeight, top: n.rowsHeight + n.headerHeight },
    renders: s,
    generateArgs: [n],
    generatorThis: this,
    generators: n.footerGenerators
  });
}, hi = new WeakSet(), u_ = function(n) {
  const r = [], { scrollLeft: s, colsInfo: o, scrollTop: a, rowsHeight: c, rowsHeightTotal: f, footerHeight: _ } = n, { scrollColsWidth: i, scrollWidth: d } = o, { scrollbarSize: u = 12, horzScrollbarPos: l } = this.options;
  return i > d && r.push(
    /* @__PURE__ */ V(zl, {
      key: "horz",
      type: "horz",
      scrollPos: s,
      scrollSize: i,
      clientSize: d,
      onScroll: w(this, Zr),
      left: o.fixedLeftWidth,
      bottom: (l === "inside" ? 0 : -u) + _,
      size: u,
      wheelContainer: this.ref
    })
  ), f > c && r.push(
    /* @__PURE__ */ V(zl, {
      key: "vert",
      type: "vert",
      scrollPos: a,
      scrollSize: f,
      clientSize: c,
      onScroll: w(this, Zr),
      right: 0,
      size: u,
      top: n.headerHeight,
      wheelContainer: this.ref
    })
  ), r.length ? r : null;
}, Kr = new WeakSet(), os = function() {
  var n;
  H(this, Tt, !1), (n = this.options.afterRender) == null || n.call(this), w(this, me).forEach((r) => {
    var s;
    return (s = r.afterRender) == null ? void 0 : s.call(this);
  });
}, vi = new WeakMap(), mi = new WeakMap(), Jr = new WeakMap(), Zr = new WeakMap(), gi = new WeakMap(), yi = new WeakMap(), bi = new WeakSet(), __ = function() {
  if (w(this, et))
    return !1;
  const r = { ...Vl(), ...w(this, Nt).reduce((s, o) => {
    const { defaultOptions: a } = o;
    return a && Object.assign(s, a), s;
  }, {}), ...this.props };
  return H(this, et, r), H(this, me, w(this, Nt).reduce((s, o) => {
    const { when: a, options: c } = o;
    return (!a || a(r)) && (s.push(o), c && Object.assign(r, typeof c == "function" ? c.call(this, r) : c)), s;
  }, [])), H(this, Xr, [this.options.i18n, ...this.plugins.map((s) => s.i18n)].filter(Boolean)), !0;
}, wi = new WeakSet(), p_ = function() {
  var J, Q;
  const { plugins: n } = this;
  let r = w(this, et);
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
  const { defaultColWidth: o, minColWidth: a, maxColWidth: c } = r, f = [], _ = [], i = [], d = {}, u = [], l = [];
  let p = 0, g = 0, h = 0;
  r.cols.forEach((P) => {
    var wt, He, We;
    if (P.hidden)
      return;
    const {
      name: Y,
      type: X = "",
      fixed: q = !1,
      flex: Z = !1,
      width: se = o,
      minWidth: ie = a,
      maxWidth: ye = c,
      ...Ke
    } = P, ee = {
      name: Y,
      type: X,
      setting: {
        name: Y,
        type: X,
        fixed: q,
        flex: Z,
        width: se,
        minWidth: ie,
        maxWidth: ye,
        ...Ke
      },
      flex: q ? 0 : Z === !0 ? 1 : typeof Z == "number" ? Z : 0,
      left: 0,
      width: Yl(se, ie, ye),
      realWidth: 0,
      visible: !0,
      index: u.length
    };
    n.forEach(($t) => {
      var te, ve;
      const Je = (te = $t.colTypes) == null ? void 0 : te[X];
      if (Je) {
        const je = typeof Je == "function" ? Je(ee) : Je;
        je && Object.assign(ee.setting, je);
      }
      (ve = $t.onAddCol) == null || ve.call(this, ee);
    }), ee.width = Yl((wt = ee.setting.width) != null ? wt : ee.width, (He = ee.setting.minWidth) != null ? He : ie, (We = ee.setting.maxWidth) != null ? We : ye), ee.realWidth = ee.realWidth || ee.width, q === "left" ? (ee.left = p, p += ee.width, f.push(ee)) : q === "right" ? (ee.left = g, g += ee.width, _.push(ee)) : (ee.left = h, h += ee.width, i.push(ee)), ee.flex && l.push(ee), u.push(ee), d[ee.name] = ee;
  });
  let v = r.width, m = 0;
  const k = p + h + g;
  if (typeof v == "function" && (v = v.call(this, k)), v === "auto")
    m = k;
  else if (v === "100%") {
    const { parent: P } = this;
    if (P)
      m = P.clientWidth;
    else {
      m = 0, H(this, Tt, !0);
      return;
    }
  } else
    m = v != null ? v : 0;
  const { data: b, rowKey: x = "id", rowHeight: $ } = r, S = [], y = (P, Y, X) => {
    var Z, se;
    const q = { data: X != null ? X : { [x]: P }, id: P, index: S.length, top: 0 };
    if (X || (q.lazy = !0), S.push(q), ((Z = r.onAddRow) == null ? void 0 : Z.call(this, q, Y)) !== !1) {
      for (const ie of n)
        if (((se = ie.onAddRow) == null ? void 0 : se.call(this, q, Y)) === !1)
          return;
    }
  };
  if (typeof b == "number")
    for (let P = 0; P < b; P++)
      y(`${P}`, P);
  else
    Array.isArray(b) && b.forEach((P, Y) => {
      var X;
      typeof P == "object" ? y(`${(X = P[x]) != null ? X : ""}`, Y, P) : y(`${P != null ? P : ""}`, Y);
    });
  let E = S;
  const C = {};
  if (r.onAddRows) {
    const P = r.onAddRows.call(this, E);
    P && (E = P);
  }
  for (const P of n) {
    const Y = (J = P.onAddRows) == null ? void 0 : J.call(this, E);
    Y && (E = Y);
  }
  E.forEach((P, Y) => {
    C[P.id] = P, P.index = Y, P.top = P.index * $;
  });
  const { header: W, footer: F } = r, A = W ? r.headerHeight || $ : 0, D = F ? r.footerHeight || $ : 0;
  let O = r.height, T = 0;
  const M = E.length * $, j = A + D + M;
  if (typeof O == "function" && (O = O.call(this, j)), O === "auto")
    T = j;
  else if (typeof O == "object")
    T = Math.min(O.max, Math.max(O.min, j));
  else if (O === "100%") {
    const { parent: P } = this;
    if (P)
      T = P.clientHeight;
    else {
      T = 0, H(this, Tt, !0);
      return;
    }
  } else
    T = O;
  const R = T - A - D, U = m - p - g, G = {
    options: r,
    allRows: S,
    width: m,
    height: T,
    rows: E,
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
      fixedRightCols: _,
      scrollCols: i,
      fixedLeftWidth: p,
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
  }), H(this, Fe, G);
}, $i = new WeakSet(), d_ = function() {
  (he(this, bi, __).call(this) || !w(this, Fe)) && he(this, wi, p_).call(this);
  const { layout: n } = this;
  if (!n)
    return;
  let { scrollLeft: r } = this.state;
  const { flexCols: s, colsInfo: { scrollCols: o, scrollWidth: a, scrollColsWidth: c } } = n;
  if (s.length) {
    const k = a - c;
    if (k > 0) {
      const b = s.reduce(($, S) => $ + S.flex, 0);
      let x = 0;
      s.forEach(($) => {
        const S = Math.min(k - x, Math.ceil(k * ($.flex / b)));
        $.realWidth = S + $.width, x += $.realWidth;
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
  const { rowsHeightTotal: _, rowsHeight: i, rows: d, rowHeight: u } = n, l = Math.min(Math.max(0, _ - i), this.state.scrollTop), p = Math.floor(l / u), g = l + i, h = Math.min(d.length, Math.ceil(g / u)), v = [], { rowDataGetter: m } = this.options;
  for (let k = p; k < h; k++) {
    const b = d[k];
    b.lazy && m && (b.data = m([b.id])[0], b.lazy = !1), v.push(b);
  }
  return n.visibleRows = v, n.scrollTop = l, n.scrollLeft = r, n;
}, N(rs, "addPlugin", i_), N(rs, "removePlugin", s_);
function ql(e, t) {
  t !== void 0 ? e.data.hoverCol = t : t = e.data.hoverCol;
  const { current: n } = e.ref;
  if (!n)
    return;
  const r = "dtable-col-hover";
  n.querySelectorAll(`.${r}`).forEach((s) => s.classList.remove(r)), typeof t == "string" && t.length && n.querySelectorAll(`.dtable-cell[data-col="${t}"]`).forEach((s) => s.classList.add(r));
}
const sg = {
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
      ql(this, r);
    },
    mouseleave() {
      ql(this, !1);
    }
  }
}, ag = Vn(sg, { buildIn: !0 });
function lg(e, t) {
  var a, c;
  typeof e == "boolean" && (t = e, e = void 0);
  const n = this.state.checkedRows, r = {}, { canRowCheckable: s } = this.options, o = (f, _) => {
    s && !s.call(this, f) || !!n[f] === _ || (_ ? n[f] = !0 : delete n[f], r[f] = _);
  };
  if (e === void 0 ? (t === void 0 && (t = !h_.call(this)), (a = this.layout) == null || a.allRows.forEach(({ id: f }) => {
    o(f, !!t);
  })) : (Array.isArray(e) || (e = [e]), e.forEach((f) => {
    o(f, t != null ? t : !n[f]);
  })), Object.keys(r).length) {
    const f = (c = this.options.beforeCheckRows) == null ? void 0 : c.call(this, e, r, n);
    f && Object.keys(f).forEach((_) => {
      f[_] ? n[_] = !0 : delete n[_];
    }), this.setState({ checkedRows: { ...n } }, () => {
      var _;
      (_ = this.options.onCheckChange) == null || _.call(this, r);
    });
  }
  return r;
}
function cg(e) {
  var t;
  return (t = this.state.checkedRows[e]) != null ? t : !1;
}
function h_() {
  var n, r;
  const e = this.getChecks().length, { canRowCheckable: t } = this.options;
  return t ? e === ((n = this.layout) == null ? void 0 : n.allRows.reduce((s, o) => s + (t.call(this, o.id) ? 1 : 0), 0)) : e === ((r = this.layout) == null ? void 0 : r.allRows.length);
}
function fg() {
  return Object.keys(this.state.checkedRows);
}
const ug = {
  name: "checkable",
  defaultOptions: { checkable: !0 },
  when: (e) => !!e.checkable,
  state() {
    return { checkedRows: {} };
  },
  methods: {
    toggleCheckRows: lg,
    isRowChecked: cg,
    isAllRowChecked: h_,
    getChecks: fg
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
      const _ = this.isRowChecked(r), i = (f = (c = this.options.checkboxRender) == null ? void 0 : c.call(this, _, r)) != null ? f : /* @__PURE__ */ V("input", {
        type: "checkbox",
        checked: _
      });
      e.unshift(i), e.push({ className: "has-checkbox" });
    }
    return e;
  },
  onRenderHeaderCell(e, { row: t, col: n }) {
    var a, c;
    const { id: r } = t, { checkbox: s } = n.setting;
    if (typeof s == "function" ? s.call(this, r) : s) {
      const f = this.isAllRowChecked(), _ = (c = (a = this.options.checkboxRender) == null ? void 0 : a.call(this, f, r)) != null ? c : /* @__PURE__ */ V("input", {
        type: "checkbox",
        checked: f
      });
      e.unshift(_), e.push({ className: "has-checkbox" });
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
}, _g = Vn(ug);
var v_ = /* @__PURE__ */ ((e) => (e.unknown = "", e.collapsed = "collapsed", e.expanded = "expanded", e.hidden = "hidden", e.normal = "normal", e))(v_ || {});
function is(e) {
  const t = this.data.nestedMap.get(e);
  if (!t || t.state !== "")
    return t != null ? t : { state: "normal", level: -1 };
  if (!t.parent && !t.children)
    return t.state = "normal", t;
  const n = this.state.collapsedRows, r = t.children && n && n[e];
  let s = !1, { parent: o } = t;
  for (; o; ) {
    const a = is.call(this, o);
    if (a.state !== "expanded") {
      s = !0;
      break;
    }
    o = a.parent;
  }
  return t.state = s ? "hidden" : r ? "collapsed" : t.children ? "expanded" : "normal", t.level = t.parent ? is.call(this, t.parent).level + 1 : 0, t;
}
function pg(e, t) {
  var s;
  let n = (s = this.state.collapsedRows) != null ? s : {};
  const { nestedMap: r } = this.data;
  if (e === "HEADER")
    if (t === void 0 && (t = !m_.call(this)), t) {
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
function m_() {
  const e = this.data.nestedMap.values();
  for (const t of e)
    if (t.state === "expanded")
      return !1;
  return !0;
}
function g_(e, t = 0, n, r = 0) {
  var s;
  n || (n = [...e.keys()]);
  for (const o of n) {
    const a = e.get(o);
    !a || (a.level === r && (a.order = t++), (s = a.children) != null && s.length && (t = g_(e, t, a.children, r + 1)));
  }
  return t;
}
function y_(e, t, n, r) {
  const s = e.getNestedRowInfo(t);
  return !s || s.state === "" || !s.children || s.children.forEach((o) => {
    r[o] = n, y_(e, o, n, r);
  }), s;
}
function b_(e, t, n, r, s) {
  var c;
  const o = e.getNestedRowInfo(t);
  if (!o || o.state === "")
    return;
  ((c = o.children) == null ? void 0 : c.every((f) => {
    const _ = !!(r[f] !== void 0 ? r[f] : s[f]);
    return n === _;
  })) && (r[t] = n), o.parent && b_(e, o.parent, n, r, s);
}
const dg = {
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
        const a = y_(this, s, o, r);
        a != null && a.parent && b_(this, a.parent, o, r, n);
      }), r;
    }
  },
  when: (e) => !!e.nested,
  data() {
    return { nestedMap: /* @__PURE__ */ new Map() };
  },
  methods: {
    toggleRow: pg,
    isAllCollapsed: m_,
    getNestedRowInfo: is
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
      let _ = t.get(n);
      _ || (_ = {
        state: "",
        level: 0
      }, t.set(n, _)), _.children || (_.children = []), _.children.push(e.id);
    }
  },
  onAddRows(e) {
    return e = e.filter((t) => this.getNestedRowInfo(t.id).state !== "hidden"), g_(this.data.nestedMap), e.sort((t, n) => {
      var a, c;
      const r = this.getNestedRowInfo(t.id), s = this.getNestedRowInfo(n.id), o = ((a = r.order) != null ? a : 0) - ((c = s.order) != null ? c : 0);
      return o === 0 ? t.index - n.index : o;
    }), e;
  },
  onRenderCell(e, { col: t, row: n }) {
    var c, f, _;
    const { id: r, data: s } = n, { nestedToggle: o } = t.setting, a = this.getNestedRowInfo(r);
    if (o && (a.children || a.parent) && e.unshift((f = (c = this.options.onRenderNestedToggle) == null ? void 0 : c.call(this, a, r, t, s)) != null ? f : /* @__PURE__ */ V("a", {
      role: "button",
      className: `dtable-nested-toggle state${a.children ? "" : " is-no-child"}`
    }, /* @__PURE__ */ V("span", {
      className: "toggle-icon"
    }))), a.level) {
      let { nestedIndent: i = o } = t.setting;
      i && (i === !0 && (i = (_ = this.options.nestedIndent) != null ? _ : 12), e.unshift(/* @__PURE__ */ V("div", {
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
}, hg = Vn(dg);
const vg = {
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
        const { linkTemplate: r = "", linkProps: s } = t.setting, o = xe(r, n.data);
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
            const _ = o[f.action];
            return _ && (f = { className: a, ..._, ...f }), xe(s, f);
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
        return typeof r == "function" ? e[0] = s === "html" ? { html: r(o) } : r(o) : s === "datetime" ? e[0] = es(o, r) : s === "html" ? e[0] = { html: xe(r, o) } : e[0] = xe(r, o), e;
      }
    }
  }
}, mg = Vn(vg, { buildIn: !0 }), gg = {
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
}, yg = Vn(gg, { buildIn: !0 }), bg = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  colHover: ag,
  checkable: _g,
  NestedRowState: v_,
  nested: hg,
  rich: mg,
  sortType: yg
}, Symbol.toStringTag, { value: "Module" }));
class Kn extends Xe {
}
N(Kn, "NAME", "dtable"), N(Kn, "Component", rs), N(Kn, "definePlugin", Vn), N(Kn, "removePlugin", s_), N(Kn, "plugins", bg);
var nt, $e;
class wg {
  constructor(t) {
    L(this, nt, void 0);
    L(this, $e, void 0);
    H(this, nt, t), H(this, $e, document.querySelector(t.getAttribute("data-target")) || document.querySelector(t.getAttribute("data-tab")) || document.querySelector(t.getAttribute("href")));
  }
  showTarget() {
    this.addActive(w(this, nt).parentElement.parentElement, w(this, nt).parentElement), this.addActive(w(this, $e).parentElement, w(this, $e)), w(this, $e).dispatchEvent(new CustomEvent("show.zui3.tab"));
  }
  show() {
    H(this, $e, w(this, nt)), this.addActive(w(this, $e).parentElement, w(this, $e)), H(this, nt, document.querySelector(`[href='#${w(this, $e).getAttribute("id")}']`) || document.querySelector(`[data-tab='#${w(this, $e).getAttribute("id")}']`) || document.querySelector(`[data-target='#${w(this, $e).getAttribute("id")}']`)), this.addActive(w(this, nt).parentElement.parentElement, w(this, nt).parentElement);
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
nt = new WeakMap(), $e = new WeakMap();
document.addEventListener("click", function(e) {
  e.target instanceof HTMLElement && (e.target.dataset.toggle === "tab" || e.target.getAttribute("data-tab")) && (e.preventDefault(), new wg(e.target).showTarget());
});
export {
  da as ActionMenu,
  va as ActionMenuNested,
  Ha as Avatar,
  Fa as BtnGroup,
  $a as Button,
  ke as ContextMenu,
  Kn as DTable,
  rt as Datetimepicker,
  be as Dropdown,
  as as EventBus,
  ka as Menu,
  nl as Nav,
  wg as NavTabs,
  xl as Pager,
  Ma as ProgressCircle,
  ut as TIME_DAY,
  El as Toolbar,
  ot as Tooltip,
  P_ as addI18nMap,
  Eg as browser,
  kl as calculateTimestamp,
  xg as convertBytes,
  Me as createDate,
  kg as formatBytes,
  es as formatDate,
  Dg as formatDateSpan,
  xe as formatString,
  T_ as getLangCode,
  Tg as getTimeBeforeDesc,
  Qr as i18n,
  Ag as isDBY,
  Hi as isObject,
  no as isSameDay,
  Lv as isSameMonth,
  Sg as isSameWeek,
  $l as isSameYear,
  Cg as isToday,
  Mg as isTomorrow,
  Og as isYesterday,
  Ui as mergeDeep,
  Ii as nativeEvents,
  N_ as setLangCode,
  fp as store
};
