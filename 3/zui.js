var jg = Object.defineProperty;
var zg = (t, e, n) => e in t ? jg(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : t[e] = n;
var M = (t, e, n) => (zg(t, typeof e != "symbol" ? e + "" : e, n), n), mc = (t, e, n) => {
  if (!e.has(t))
    throw TypeError("Cannot " + n);
};
var g = (t, e, n) => (mc(t, e, "read from private field"), n ? n.call(t) : e.get(t)), E = (t, e, n) => {
  if (e.has(t))
    throw TypeError("Cannot add the same private member more than once");
  e instanceof WeakSet ? e.add(t) : e.set(t, n);
}, H = (t, e, n, o) => (mc(t, e, "write to private field"), o ? o.call(t, n) : e.set(t, n), n), za = (t, e, n, o) => ({
  set _(i) {
    H(t, e, i, n);
  },
  get _() {
    return g(t, e, o);
  }
}), W = (t, e, n) => (mc(t, e, "access private method"), n);
var ql, et, du, pu, po, Va, Ps = {}, mu = [], Vg = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function Ae(t, e) {
  for (var n in e)
    t[n] = e[n];
  return t;
}
function gu(t) {
  var e = t.parentNode;
  e && e.removeChild(t);
}
function yu(t, e, n) {
  var o, i, r, l = {};
  for (r in e)
    r == "key" ? o = e[r] : r == "ref" ? i = e[r] : l[r] = e[r];
  if (arguments.length > 2 && (l.children = arguments.length > 3 ? ql.call(arguments, 2) : n), typeof t == "function" && t.defaultProps != null)
    for (r in t.defaultProps)
      l[r] === void 0 && (l[r] = t.defaultProps[r]);
  return ys(t, l, o, i, null);
}
function ys(t, e, n, o, i) {
  var r = { type: t, props: e, key: n, ref: o, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: i ?? ++du };
  return i == null && et.vnode != null && et.vnode(r), r;
}
function Yg() {
  return { current: null };
}
function Gl(t) {
  return t.children;
}
function vs(t, e) {
  this.props = t, this.context = e;
}
function Qo(t, e) {
  if (e == null)
    return t.__ ? Qo(t.__, t.__.__k.indexOf(t) + 1) : null;
  for (var n; e < t.__k.length; e++)
    if ((n = t.__k[e]) != null && n.__e != null)
      return n.__e;
  return typeof t.type == "function" ? Qo(t) : null;
}
function vu(t) {
  var e, n;
  if ((t = t.__) != null && t.__c != null) {
    for (t.__e = t.__c.base = null, e = 0; e < t.__k.length; e++)
      if ((n = t.__k[e]) != null && n.__e != null) {
        t.__e = t.__c.base = n.__e;
        break;
      }
    return vu(t);
  }
}
function Ya(t) {
  (!t.__d && (t.__d = !0) && po.push(t) && !Os.__r++ || Va !== et.debounceRendering) && ((Va = et.debounceRendering) || setTimeout)(Os);
}
function Os() {
  for (var t; Os.__r = po.length; )
    t = po.sort(function(e, n) {
      return e.__v.__b - n.__v.__b;
    }), po = [], t.some(function(e) {
      var n, o, i, r, l, c;
      e.__d && (l = (r = (n = e).__v).__e, (c = n.__P) && (o = [], (i = Ae({}, r)).__v = r.__v + 1, ta(c, r, i, n.__n, c.ownerSVGElement !== void 0, r.__h != null ? [l] : null, o, l ?? Qo(r), r.__h), ku(o, r), r.__e != l && vu(r)));
    });
}
function bu(t, e, n, o, i, r, l, c, _, h) {
  var s, d, f, a, u, b, p, m = o && o.__k || mu, y = m.length;
  for (n.__k = [], s = 0; s < e.length; s++)
    if ((a = n.__k[s] = (a = e[s]) == null || typeof a == "boolean" ? null : typeof a == "string" || typeof a == "number" || typeof a == "bigint" ? ys(null, a, null, null, a) : Array.isArray(a) ? ys(Gl, { children: a }, null, null, null) : a.__b > 0 ? ys(a.type, a.props, a.key, a.ref ? a.ref : null, a.__v) : a) != null) {
      if (a.__ = n, a.__b = n.__b + 1, (f = m[s]) === null || f && a.key == f.key && a.type === f.type)
        m[s] = void 0;
      else
        for (d = 0; d < y; d++) {
          if ((f = m[d]) && a.key == f.key && a.type === f.type) {
            m[d] = void 0;
            break;
          }
          f = null;
        }
      ta(t, a, f = f || Ps, i, r, l, c, _, h), u = a.__e, (d = a.ref) && f.ref != d && (p || (p = []), f.ref && p.push(f.ref, null, a), p.push(d, a.__c || u, a)), u != null ? (b == null && (b = u), typeof a.type == "function" && a.__k === f.__k ? a.__d = _ = wu(a, _, t) : _ = $u(t, a, f, m, u, _), typeof n.type == "function" && (n.__d = _)) : _ && f.__e == _ && _.parentNode != t && (_ = Qo(f));
    }
  for (n.__e = b, s = y; s--; )
    m[s] != null && Su(m[s], m[s]);
  if (p)
    for (s = 0; s < p.length; s++)
      xu(p[s], p[++s], p[++s]);
}
function wu(t, e, n) {
  for (var o, i = t.__k, r = 0; i && r < i.length; r++)
    (o = i[r]) && (o.__ = t, e = typeof o.type == "function" ? wu(o, e, n) : $u(n, o, o, i, o.__e, e));
  return e;
}
function $u(t, e, n, o, i, r) {
  var l, c, _;
  if (e.__d !== void 0)
    l = e.__d, e.__d = void 0;
  else if (n == null || i != r || i.parentNode == null)
    t:
      if (r == null || r.parentNode !== t)
        t.appendChild(i), l = null;
      else {
        for (c = r, _ = 0; (c = c.nextSibling) && _ < o.length; _ += 2)
          if (c == i)
            break t;
        t.insertBefore(i, r), l = r;
      }
  return l !== void 0 ? l : i.nextSibling;
}
function qg(t, e, n, o, i) {
  var r;
  for (r in n)
    r === "children" || r === "key" || r in e || Hs(t, r, null, n[r], o);
  for (r in e)
    i && typeof e[r] != "function" || r === "children" || r === "key" || r === "value" || r === "checked" || n[r] === e[r] || Hs(t, r, e[r], n[r], o);
}
function qa(t, e, n) {
  e[0] === "-" ? t.setProperty(e, n) : t[e] = n == null ? "" : typeof n != "number" || Vg.test(e) ? n : n + "px";
}
function Hs(t, e, n, o, i) {
  var r;
  t:
    if (e === "style")
      if (typeof n == "string")
        t.style.cssText = n;
      else {
        if (typeof o == "string" && (t.style.cssText = o = ""), o)
          for (e in o)
            n && e in n || qa(t.style, e, "");
        if (n)
          for (e in n)
            o && n[e] === o[e] || qa(t.style, e, n[e]);
      }
    else if (e[0] === "o" && e[1] === "n")
      r = e !== (e = e.replace(/Capture$/, "")), e = e.toLowerCase() in t ? e.toLowerCase().slice(2) : e.slice(2), t.l || (t.l = {}), t.l[e + r] = n, n ? o || t.addEventListener(e, r ? Xa : Ga, r) : t.removeEventListener(e, r ? Xa : Ga, r);
    else if (e !== "dangerouslySetInnerHTML") {
      if (i)
        e = e.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
      else if (e !== "href" && e !== "list" && e !== "form" && e !== "tabIndex" && e !== "download" && e in t)
        try {
          t[e] = n ?? "";
          break t;
        } catch {
        }
      typeof n == "function" || (n == null || n === !1 && e.indexOf("-") == -1 ? t.removeAttribute(e) : t.setAttribute(e, n));
    }
}
function Ga(t) {
  this.l[t.type + !1](et.event ? et.event(t) : t);
}
function Xa(t) {
  this.l[t.type + !0](et.event ? et.event(t) : t);
}
function ta(t, e, n, o, i, r, l, c, _) {
  var h, s, d, f, a, u, b, p, m, y, w, k, C, A, T, v = e.type;
  if (e.constructor !== void 0)
    return null;
  n.__h != null && (_ = n.__h, c = e.__e = n.__e, e.__h = null, r = [c]), (h = et.__b) && h(e);
  try {
    t:
      if (typeof v == "function") {
        if (p = e.props, m = (h = v.contextType) && o[h.__c], y = h ? m ? m.props.value : h.__ : o, n.__c ? b = (s = e.__c = n.__c).__ = s.__E : ("prototype" in v && v.prototype.render ? e.__c = s = new v(p, y) : (e.__c = s = new vs(p, y), s.constructor = v, s.render = Xg), m && m.sub(s), s.props = p, s.state || (s.state = {}), s.context = y, s.__n = o, d = s.__d = !0, s.__h = [], s._sb = []), s.__s == null && (s.__s = s.state), v.getDerivedStateFromProps != null && (s.__s == s.state && (s.__s = Ae({}, s.__s)), Ae(s.__s, v.getDerivedStateFromProps(p, s.__s))), f = s.props, a = s.state, d)
          v.getDerivedStateFromProps == null && s.componentWillMount != null && s.componentWillMount(), s.componentDidMount != null && s.__h.push(s.componentDidMount);
        else {
          if (v.getDerivedStateFromProps == null && p !== f && s.componentWillReceiveProps != null && s.componentWillReceiveProps(p, y), !s.__e && s.shouldComponentUpdate != null && s.shouldComponentUpdate(p, s.__s, y) === !1 || e.__v === n.__v) {
            for (s.props = p, s.state = s.__s, e.__v !== n.__v && (s.__d = !1), s.__v = e, e.__e = n.__e, e.__k = n.__k, e.__k.forEach(function(x) {
              x && (x.__ = e);
            }), w = 0; w < s._sb.length; w++)
              s.__h.push(s._sb[w]);
            s._sb = [], s.__h.length && l.push(s);
            break t;
          }
          s.componentWillUpdate != null && s.componentWillUpdate(p, s.__s, y), s.componentDidUpdate != null && s.__h.push(function() {
            s.componentDidUpdate(f, a, u);
          });
        }
        if (s.context = y, s.props = p, s.__v = e, s.__P = t, k = et.__r, C = 0, "prototype" in v && v.prototype.render) {
          for (s.state = s.__s, s.__d = !1, k && k(e), h = s.render(s.props, s.state, s.context), A = 0; A < s._sb.length; A++)
            s.__h.push(s._sb[A]);
          s._sb = [];
        } else
          do
            s.__d = !1, k && k(e), h = s.render(s.props, s.state, s.context), s.state = s.__s;
          while (s.__d && ++C < 25);
        s.state = s.__s, s.getChildContext != null && (o = Ae(Ae({}, o), s.getChildContext())), d || s.getSnapshotBeforeUpdate == null || (u = s.getSnapshotBeforeUpdate(f, a)), T = h != null && h.type === Gl && h.key == null ? h.props.children : h, bu(t, Array.isArray(T) ? T : [T], e, n, o, i, r, l, c, _), s.base = e.__e, e.__h = null, s.__h.length && l.push(s), b && (s.__E = s.__ = null), s.__e = !1;
      } else
        r == null && e.__v === n.__v ? (e.__k = n.__k, e.__e = n.__e) : e.__e = Gg(n.__e, e, n, o, i, r, l, _);
    (h = et.diffed) && h(e);
  } catch (x) {
    e.__v = null, (_ || r != null) && (e.__e = c, e.__h = !!_, r[r.indexOf(c)] = null), et.__e(x, e, n);
  }
}
function ku(t, e) {
  et.__c && et.__c(e, t), t.some(function(n) {
    try {
      t = n.__h, n.__h = [], t.some(function(o) {
        o.call(n);
      });
    } catch (o) {
      et.__e(o, n.__v);
    }
  });
}
function Gg(t, e, n, o, i, r, l, c) {
  var _, h, s, d = n.props, f = e.props, a = e.type, u = 0;
  if (a === "svg" && (i = !0), r != null) {
    for (; u < r.length; u++)
      if ((_ = r[u]) && "setAttribute" in _ == !!a && (a ? _.localName === a : _.nodeType === 3)) {
        t = _, r[u] = null;
        break;
      }
  }
  if (t == null) {
    if (a === null)
      return document.createTextNode(f);
    t = i ? document.createElementNS("http://www.w3.org/2000/svg", a) : document.createElement(a, f.is && f), r = null, c = !1;
  }
  if (a === null)
    d === f || c && t.data === f || (t.data = f);
  else {
    if (r = r && ql.call(t.childNodes), h = (d = n.props || Ps).dangerouslySetInnerHTML, s = f.dangerouslySetInnerHTML, !c) {
      if (r != null)
        for (d = {}, u = 0; u < t.attributes.length; u++)
          d[t.attributes[u].name] = t.attributes[u].value;
      (s || h) && (s && (h && s.__html == h.__html || s.__html === t.innerHTML) || (t.innerHTML = s && s.__html || ""));
    }
    if (qg(t, f, d, i, c), s)
      e.__k = [];
    else if (u = e.props.children, bu(t, Array.isArray(u) ? u : [u], e, n, o, i && a !== "foreignObject", r, l, r ? r[0] : n.__k && Qo(n, 0), c), r != null)
      for (u = r.length; u--; )
        r[u] != null && gu(r[u]);
    c || ("value" in f && (u = f.value) !== void 0 && (u !== t.value || a === "progress" && !u || a === "option" && u !== d.value) && Hs(t, "value", u, d.value, !1), "checked" in f && (u = f.checked) !== void 0 && u !== t.checked && Hs(t, "checked", u, d.checked, !1));
  }
  return t;
}
function xu(t, e, n) {
  try {
    typeof t == "function" ? t(e) : t.current = e;
  } catch (o) {
    et.__e(o, n);
  }
}
function Su(t, e, n) {
  var o, i;
  if (et.unmount && et.unmount(t), (o = t.ref) && (o.current && o.current !== t.__e || xu(o, null, e)), (o = t.__c) != null) {
    if (o.componentWillUnmount)
      try {
        o.componentWillUnmount();
      } catch (r) {
        et.__e(r, e);
      }
    o.base = o.__P = null, t.__c = void 0;
  }
  if (o = t.__k)
    for (i = 0; i < o.length; i++)
      o[i] && Su(o[i], e, n || typeof t.type != "function");
  n || t.__e == null || gu(t.__e), t.__ = t.__e = t.__d = void 0;
}
function Xg(t, e, n) {
  return this.constructor(t, n);
}
function Kg(t, e, n) {
  var o, i, r;
  et.__ && et.__(t, e), i = (o = typeof n == "function") ? null : n && n.__k || e.__k, r = [], ta(e, t = (!o && n || e).__k = yu(Gl, null, [t]), i || Ps, Ps, e.ownerSVGElement !== void 0, !o && n ? [n] : i ? null : e.firstChild ? ql.call(e.childNodes) : null, r, !o && n ? n : i ? i.__e : e.firstChild, o), ku(r, t);
}
ql = mu.slice, et = { __e: function(t, e, n, o) {
  for (var i, r, l; e = e.__; )
    if ((i = e.__c) && !i.__)
      try {
        if ((r = i.constructor) && r.getDerivedStateFromError != null && (i.setState(r.getDerivedStateFromError(t)), l = i.__d), i.componentDidCatch != null && (i.componentDidCatch(t, o || {}), l = i.__d), l)
          return i.__E = i;
      } catch (c) {
        t = c;
      }
  throw t;
} }, du = 0, pu = function(t) {
  return t != null && t.constructor === void 0;
}, vs.prototype.setState = function(t, e) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = Ae({}, this.state), typeof t == "function" && (t = t(Ae({}, n), this.props)), t && Ae(n, t), t != null && this.__v && (e && this._sb.push(e), Ya(this));
}, vs.prototype.forceUpdate = function(t) {
  this.__v && (this.__e = !0, t && this.__h.push(t), Ya(this));
}, vs.prototype.render = Gl, po = [], Os.__r = 0;
var Jg = 0;
function Cu(t, e, n, o, i) {
  var r, l, c = {};
  for (l in e)
    l == "ref" ? r = e[l] : c[l] = e[l];
  var _ = { type: t, props: c, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: --Jg, __source: i, __self: o };
  if (typeof t == "function" && (r = t.defaultProps))
    for (l in r)
      c[l] === void 0 && (c[l] = r[l]);
  return et.vnode && et.vnode(_), _;
}
var ue;
class Zg {
  constructor(e = "") {
    E(this, ue, void 0);
    typeof e == "object" ? H(this, ue, e) : H(this, ue, document.appendChild(document.createComment(e)));
  }
  on(e, n, o) {
    g(this, ue).addEventListener(e, n, o);
  }
  once(e, n, o) {
    g(this, ue).addEventListener(e, n, { once: !0, ...o });
  }
  off(e, n, o) {
    g(this, ue).removeEventListener(e, n, o);
  }
  emit(e) {
    return g(this, ue).dispatchEvent(e), e;
  }
}
ue = new WeakMap();
const Rc = /* @__PURE__ */ new Set([
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
class ea extends Zg {
  on(e, n, o) {
    super.on(e, n, o);
  }
  off(e, n, o) {
    super.off(e, n, o);
  }
  once(e, n, o) {
    super.once(e, n, o);
  }
  emit(e, n) {
    return typeof e == "string" && (Rc.has(e) ? (e = new Event(e), Object.assign(e, { detail: n })) : e = new CustomEvent(e, { detail: n })), super.emit(ea.createEvent(e, n));
  }
  static createEvent(e, n) {
    return typeof e == "string" && (Rc.has(e) ? (e = new Event(e), Object.assign(e, { detail: n })) : e = new CustomEvent(e, { detail: n })), e;
  }
}
var he, $r, rn, ao;
class Ka extends ea {
  constructor(n = "", o) {
    super(n);
    E(this, rn);
    E(this, he, /* @__PURE__ */ new Map());
    E(this, $r, void 0);
    H(this, $r, o == null ? void 0 : o.customEventSuffix);
  }
  on(n, o, i) {
    n = W(this, rn, ao).call(this, n), super.on(n, o, i), g(this, he).set(o, [n, i]);
  }
  off(n, o, i) {
    n = W(this, rn, ao).call(this, n), super.off(n, o, i), g(this, he).delete(o);
  }
  once(n, o, i) {
    n = W(this, rn, ao).call(this, n);
    const r = (l) => {
      o(l), g(this, he).delete(r);
    };
    super.once(n, r, i), g(this, he).set(r, [n, i]);
  }
  emit(n, o) {
    return typeof n == "string" && (n = W(this, rn, ao).call(this, n)), super.emit(n, o);
  }
  offAll() {
    Array.from(g(this, he).entries()).forEach(([n, [o, i]]) => {
      super.off(o, n, i);
    }), g(this, he).clear();
  }
}
he = new WeakMap(), $r = new WeakMap(), rn = new WeakSet(), ao = function(n) {
  const o = g(this, $r);
  return Rc.has(n) || typeof o != "string" || n.endsWith(o) ? n : `${n}${o}`;
};
function Qg(t, e) {
  if (t == null)
    return [t, void 0];
  typeof e == "string" && (e = e.split("."));
  const n = e.join(".");
  let o = t;
  const i = [o];
  for (; typeof o == "object" && o !== null && e.length; ) {
    let r = e.shift(), l;
    const c = r.indexOf("[");
    if (c > 0 && c < r.length - 1 && r.endsWith("]") && (l = r.substring(c + 1, r.length - 1), r = r.substring(0, c)), o = o[r], i.push(o), l !== void 0)
      if (typeof o == "object" && o !== null)
        o instanceof Map ? o = o.get(l) : o = o[l], i.push(o);
      else
        throw new Error(`Cannot access property "${r}[${l}]", the full path is "${n}".`);
  }
  if (e.length)
    throw new Error(`Cannot access property with rest path "${e.join(".")}", the full path is "${n}".`);
  return i;
}
function ty(t, e, n) {
  const o = Qg(t, e), i = o[o.length - 1];
  return i === void 0 ? n : i;
}
function gc(t) {
  return !!t && typeof t == "object" && !Array.isArray(t);
}
function Dc(t, ...e) {
  if (!e.length)
    return t;
  const n = e.shift();
  if (gc(t) && gc(n))
    for (const o in n)
      gc(n[o]) ? (t[o] || Object.assign(t, { [o]: {} }), Dc(t[o], n[o])) : Object.assign(t, { [o]: n[o] });
  return Dc(t, ...e);
}
function Dt(t, ...e) {
  if (e.length === 0)
    return t;
  if (e.length === 1 && typeof e[0] == "object" && e[0]) {
    const n = e[0];
    return Object.keys(n).forEach((o) => {
      const i = n[o] ?? 0;
      t = t.replace(new RegExp(`\\{${o}\\}`, "g"), `${i}`);
    }), t;
  }
  for (let n = 0; n < e.length; n++) {
    const o = e[n] ?? "";
    t = t.replace(new RegExp(`\\{${n}\\}`, "g"), `${o}`);
  }
  return t;
}
var na = /* @__PURE__ */ ((t) => (t[t.B = 1] = "B", t[t.KB = 1024] = "KB", t[t.MB = 1048576] = "MB", t[t.GB = 1073741824] = "GB", t[t.TB = 1099511627776] = "TB", t))(na || {});
function z$(t, e = 2, n = "") {
  return Number.isNaN(t) ? "?KB" : (n || (t < 1024 ? n = "B" : t < 1048576 ? n = "KB" : t < 1073741824 ? n = "MB" : t < 1099511627776 ? n = "GB" : n = "TB"), (t / na[n]).toFixed(e) + n);
}
const V$ = (t) => {
  const e = /^[0-9]*(B|KB|MB|GB|TB)$/;
  t = t.toUpperCase();
  const n = t.match(e);
  if (!n)
    return 0;
  const o = n[1];
  return t = t.replace(o, ""), Number.parseInt(t, 10) * na[o];
};
var hu;
let oa = ((hu = document.documentElement.getAttribute("lang")) == null ? void 0 : hu.toLowerCase()) ?? "zh_cn", $e;
function ey() {
  return oa;
}
function ny(t) {
  oa = t.toLowerCase();
}
function oy(t, e) {
  $e || ($e = {}), typeof t == "string" && (t = { [t]: e ?? {} }), Dc($e, t);
}
function os(t, e, n, o, i, r) {
  Array.isArray(t) ? $e && t.unshift($e) : t = $e ? [$e, t] : [t], typeof n == "string" && (r = i, i = o, o = n, n = void 0);
  const l = i || oa;
  let c;
  for (const _ of t) {
    if (!_)
      continue;
    const h = _[l];
    if (!h)
      continue;
    const s = r && _ === $e ? `${r}.${e}` : e;
    if (c = ty(h, s), c !== void 0)
      break;
  }
  return c === void 0 ? o : n ? Dt(c, ...Array.isArray(n) ? n : [n]) : c;
}
os.addLang = oy;
os.getCode = ey;
os.setCode = ny;
function ry(t) {
  return Object.fromEntries(Object.entries(t).map(([e, n]) => {
    if (typeof n == "string")
      try {
        n = JSON.parse(n);
      } catch {
      }
    return [e, n];
  }));
}
const yc = /* @__PURE__ */ new Map();
var de, Sn, zt;
class Jt {
  constructor(e, n) {
    E(this, de, void 0);
    E(this, Sn, void 0);
    E(this, zt, void 0);
    e = typeof e == "string" ? document.querySelector(e) : e, this.constructor.EVENTS && H(this, zt, new Ka(e, { customEventSuffix: `.${this.constructor.KEY}` })), H(this, de, { ...this.constructor.DEFAULT }), this.setOptions({ ...e instanceof HTMLElement ? ry(e.dataset) : null, ...n }), this.constructor.all.set(e, this), H(this, Sn, e), this.init(), requestAnimationFrame(() => {
      this.afterInit(), this.emit("inited", this);
    });
  }
  get options() {
    return g(this, de);
  }
  get element() {
    return g(this, Sn);
  }
  get events() {
    return g(this, zt);
  }
  init() {
  }
  afterInit() {
  }
  setOptions(e) {
    return e && Object.assign(g(this, de), e), g(this, de);
  }
  render(e) {
    this.setOptions(e);
  }
  destroy() {
    this.constructor.all.delete(g(this, Sn)), g(this, zt) && (this.emit("destroyed", this), g(this, zt).offAll());
  }
  on(e, n, o) {
    var i;
    (i = g(this, zt)) == null || i.on(e, n, o);
  }
  once(e, n, o) {
    var i;
    (i = g(this, zt)) == null || i.once(e, n, o);
  }
  off(e, n, o) {
    var i;
    (i = g(this, zt)) == null || i.off(e, n, o);
  }
  emit(e, n) {
    var l;
    let o = Ka.createEvent(e, n);
    const i = `on${e[0].toUpperCase()}${e.substring(1)}`, r = g(this, de)[i];
    return r && r(o) === !1 && (o.preventDefault(), o.stopPropagation()), o = (l = g(this, zt)) == null ? void 0 : l.emit(e, n), o;
  }
  i18n(e, n, o) {
    return os(g(this, de).i18n, e, n, o, this.options.lang, this.constructor.NAME) ?? `{i18n:${e}}`;
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
    const e = this.NAME;
    if (yc.has(e))
      return yc.get(e);
    const n = /* @__PURE__ */ new Map();
    return yc.set(e, n), n;
  }
  static getAll() {
    return this.all;
  }
  static get(e) {
    return this.all.get(e);
  }
  static ensure(e, n) {
    return this.get(e) || new this(e, n);
  }
}
de = new WeakMap(), Sn = new WeakMap(), zt = new WeakMap(), M(Jt, "EVENTS", !1), M(Jt, "DEFAULT", {});
class xt extends Jt {
  constructor() {
    super(...arguments);
    M(this, "ref", Yg());
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
    Kg(/* @__PURE__ */ Cu(o, { ref: this.ref, ...this.setOptions(n) }), this.element);
  }
}
M(xt, "Component");
var ra, ct, Eu, Tu, mo, Ja, Au = {}, Lu = [], sy = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function Le(t, e) {
  for (var n in e)
    t[n] = e[n];
  return t;
}
function Mu(t) {
  var e = t.parentNode;
  e && e.removeChild(t);
}
function oo(t, e, n) {
  var o, i, r, l = {};
  for (r in e)
    r == "key" ? o = e[r] : r == "ref" ? i = e[r] : l[r] = e[r];
  if (arguments.length > 2 && (l.children = arguments.length > 3 ? ra.call(arguments, 2) : n), typeof t == "function" && t.defaultProps != null)
    for (r in t.defaultProps)
      l[r] === void 0 && (l[r] = t.defaultProps[r]);
  return bs(t, l, o, i, null);
}
function bs(t, e, n, o, i) {
  var r = { type: t, props: e, key: n, ref: o, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: i ?? ++Eu };
  return i == null && ct.vnode != null && ct.vnode(r), r;
}
function iy() {
  return { current: null };
}
function sa(t) {
  return t.children;
}
function go(t, e) {
  this.props = t, this.context = e;
}
function tr(t, e) {
  if (e == null)
    return t.__ ? tr(t.__, t.__.__k.indexOf(t) + 1) : null;
  for (var n; e < t.__k.length; e++)
    if ((n = t.__k[e]) != null && n.__e != null)
      return n.__e;
  return typeof t.type == "function" ? tr(t) : null;
}
function Ru(t) {
  var e, n;
  if ((t = t.__) != null && t.__c != null) {
    for (t.__e = t.__c.base = null, e = 0; e < t.__k.length; e++)
      if ((n = t.__k[e]) != null && n.__e != null) {
        t.__e = t.__c.base = n.__e;
        break;
      }
    return Ru(t);
  }
}
function Za(t) {
  (!t.__d && (t.__d = !0) && mo.push(t) && !Ws.__r++ || Ja !== ct.debounceRendering) && ((Ja = ct.debounceRendering) || setTimeout)(Ws);
}
function Ws() {
  for (var t; Ws.__r = mo.length; )
    t = mo.sort(function(e, n) {
      return e.__v.__b - n.__v.__b;
    }), mo = [], t.some(function(e) {
      var n, o, i, r, l, c;
      e.__d && (l = (r = (n = e).__v).__e, (c = n.__P) && (o = [], (i = Le({}, r)).__v = r.__v + 1, Ou(c, r, i, n.__n, c.ownerSVGElement !== void 0, r.__h != null ? [l] : null, o, l ?? tr(r), r.__h), cy(o, r), r.__e != l && Ru(r)));
    });
}
function Du(t, e, n, o, i, r, l, c, _, h) {
  var s, d, f, a, u, b, p, m = o && o.__k || Lu, y = m.length;
  for (n.__k = [], s = 0; s < e.length; s++)
    if ((a = n.__k[s] = (a = e[s]) == null || typeof a == "boolean" ? null : typeof a == "string" || typeof a == "number" || typeof a == "bigint" ? bs(null, a, null, null, a) : Array.isArray(a) ? bs(sa, { children: a }, null, null, null) : a.__b > 0 ? bs(a.type, a.props, a.key, a.ref ? a.ref : null, a.__v) : a) != null) {
      if (a.__ = n, a.__b = n.__b + 1, (f = m[s]) === null || f && a.key == f.key && a.type === f.type)
        m[s] = void 0;
      else
        for (d = 0; d < y; d++) {
          if ((f = m[d]) && a.key == f.key && a.type === f.type) {
            m[d] = void 0;
            break;
          }
          f = null;
        }
      Ou(t, a, f = f || Au, i, r, l, c, _, h), u = a.__e, (d = a.ref) && f.ref != d && (p || (p = []), f.ref && p.push(f.ref, null, a), p.push(d, a.__c || u, a)), u != null ? (b == null && (b = u), typeof a.type == "function" && a.__k === f.__k ? a.__d = _ = Nu(a, _, t) : _ = Pu(t, a, f, m, u, _), typeof n.type == "function" && (n.__d = _)) : _ && f.__e == _ && _.parentNode != t && (_ = tr(f));
    }
  for (n.__e = b, s = y; s--; )
    m[s] != null && Wu(m[s], m[s]);
  if (p)
    for (s = 0; s < p.length; s++)
      Hu(p[s], p[++s], p[++s]);
}
function Nu(t, e, n) {
  for (var o, i = t.__k, r = 0; i && r < i.length; r++)
    (o = i[r]) && (o.__ = t, e = typeof o.type == "function" ? Nu(o, e, n) : Pu(n, o, o, i, o.__e, e));
  return e;
}
function Pu(t, e, n, o, i, r) {
  var l, c, _;
  if (e.__d !== void 0)
    l = e.__d, e.__d = void 0;
  else if (n == null || i != r || i.parentNode == null)
    t:
      if (r == null || r.parentNode !== t)
        t.appendChild(i), l = null;
      else {
        for (c = r, _ = 0; (c = c.nextSibling) && _ < o.length; _ += 2)
          if (c == i)
            break t;
        t.insertBefore(i, r), l = r;
      }
  return l !== void 0 ? l : i.nextSibling;
}
function ly(t, e, n, o, i) {
  var r;
  for (r in n)
    r === "children" || r === "key" || r in e || Is(t, r, null, n[r], o);
  for (r in e)
    i && typeof e[r] != "function" || r === "children" || r === "key" || r === "value" || r === "checked" || n[r] === e[r] || Is(t, r, e[r], n[r], o);
}
function Qa(t, e, n) {
  e[0] === "-" ? t.setProperty(e, n) : t[e] = n == null ? "" : typeof n != "number" || sy.test(e) ? n : n + "px";
}
function Is(t, e, n, o, i) {
  var r;
  t:
    if (e === "style")
      if (typeof n == "string")
        t.style.cssText = n;
      else {
        if (typeof o == "string" && (t.style.cssText = o = ""), o)
          for (e in o)
            n && e in n || Qa(t.style, e, "");
        if (n)
          for (e in n)
            o && n[e] === o[e] || Qa(t.style, e, n[e]);
      }
    else if (e[0] === "o" && e[1] === "n")
      r = e !== (e = e.replace(/Capture$/, "")), e = e.toLowerCase() in t ? e.toLowerCase().slice(2) : e.slice(2), t.l || (t.l = {}), t.l[e + r] = n, n ? o || t.addEventListener(e, r ? e_ : t_, r) : t.removeEventListener(e, r ? e_ : t_, r);
    else if (e !== "dangerouslySetInnerHTML") {
      if (i)
        e = e.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
      else if (e !== "href" && e !== "list" && e !== "form" && e !== "tabIndex" && e !== "download" && e in t)
        try {
          t[e] = n ?? "";
          break t;
        } catch {
        }
      typeof n == "function" || (n == null || n === !1 && e.indexOf("-") == -1 ? t.removeAttribute(e) : t.setAttribute(e, n));
    }
}
function t_(t) {
  this.l[t.type + !1](ct.event ? ct.event(t) : t);
}
function e_(t) {
  this.l[t.type + !0](ct.event ? ct.event(t) : t);
}
function Ou(t, e, n, o, i, r, l, c, _) {
  var h, s, d, f, a, u, b, p, m, y, w, k, C, A, T, v = e.type;
  if (e.constructor !== void 0)
    return null;
  n.__h != null && (_ = n.__h, c = e.__e = n.__e, e.__h = null, r = [c]), (h = ct.__b) && h(e);
  try {
    t:
      if (typeof v == "function") {
        if (p = e.props, m = (h = v.contextType) && o[h.__c], y = h ? m ? m.props.value : h.__ : o, n.__c ? b = (s = e.__c = n.__c).__ = s.__E : ("prototype" in v && v.prototype.render ? e.__c = s = new v(p, y) : (e.__c = s = new go(p, y), s.constructor = v, s.render = _y), m && m.sub(s), s.props = p, s.state || (s.state = {}), s.context = y, s.__n = o, d = s.__d = !0, s.__h = [], s._sb = []), s.__s == null && (s.__s = s.state), v.getDerivedStateFromProps != null && (s.__s == s.state && (s.__s = Le({}, s.__s)), Le(s.__s, v.getDerivedStateFromProps(p, s.__s))), f = s.props, a = s.state, d)
          v.getDerivedStateFromProps == null && s.componentWillMount != null && s.componentWillMount(), s.componentDidMount != null && s.__h.push(s.componentDidMount);
        else {
          if (v.getDerivedStateFromProps == null && p !== f && s.componentWillReceiveProps != null && s.componentWillReceiveProps(p, y), !s.__e && s.shouldComponentUpdate != null && s.shouldComponentUpdate(p, s.__s, y) === !1 || e.__v === n.__v) {
            for (s.props = p, s.state = s.__s, e.__v !== n.__v && (s.__d = !1), s.__v = e, e.__e = n.__e, e.__k = n.__k, e.__k.forEach(function(x) {
              x && (x.__ = e);
            }), w = 0; w < s._sb.length; w++)
              s.__h.push(s._sb[w]);
            s._sb = [], s.__h.length && l.push(s);
            break t;
          }
          s.componentWillUpdate != null && s.componentWillUpdate(p, s.__s, y), s.componentDidUpdate != null && s.__h.push(function() {
            s.componentDidUpdate(f, a, u);
          });
        }
        if (s.context = y, s.props = p, s.__v = e, s.__P = t, k = ct.__r, C = 0, "prototype" in v && v.prototype.render) {
          for (s.state = s.__s, s.__d = !1, k && k(e), h = s.render(s.props, s.state, s.context), A = 0; A < s._sb.length; A++)
            s.__h.push(s._sb[A]);
          s._sb = [];
        } else
          do
            s.__d = !1, k && k(e), h = s.render(s.props, s.state, s.context), s.state = s.__s;
          while (s.__d && ++C < 25);
        s.state = s.__s, s.getChildContext != null && (o = Le(Le({}, o), s.getChildContext())), d || s.getSnapshotBeforeUpdate == null || (u = s.getSnapshotBeforeUpdate(f, a)), T = h != null && h.type === sa && h.key == null ? h.props.children : h, Du(t, Array.isArray(T) ? T : [T], e, n, o, i, r, l, c, _), s.base = e.__e, e.__h = null, s.__h.length && l.push(s), b && (s.__E = s.__ = null), s.__e = !1;
      } else
        r == null && e.__v === n.__v ? (e.__k = n.__k, e.__e = n.__e) : e.__e = ay(n.__e, e, n, o, i, r, l, _);
    (h = ct.diffed) && h(e);
  } catch (x) {
    e.__v = null, (_ || r != null) && (e.__e = c, e.__h = !!_, r[r.indexOf(c)] = null), ct.__e(x, e, n);
  }
}
function cy(t, e) {
  ct.__c && ct.__c(e, t), t.some(function(n) {
    try {
      t = n.__h, n.__h = [], t.some(function(o) {
        o.call(n);
      });
    } catch (o) {
      ct.__e(o, n.__v);
    }
  });
}
function ay(t, e, n, o, i, r, l, c) {
  var _, h, s, d = n.props, f = e.props, a = e.type, u = 0;
  if (a === "svg" && (i = !0), r != null) {
    for (; u < r.length; u++)
      if ((_ = r[u]) && "setAttribute" in _ == !!a && (a ? _.localName === a : _.nodeType === 3)) {
        t = _, r[u] = null;
        break;
      }
  }
  if (t == null) {
    if (a === null)
      return document.createTextNode(f);
    t = i ? document.createElementNS("http://www.w3.org/2000/svg", a) : document.createElement(a, f.is && f), r = null, c = !1;
  }
  if (a === null)
    d === f || c && t.data === f || (t.data = f);
  else {
    if (r = r && ra.call(t.childNodes), h = (d = n.props || Au).dangerouslySetInnerHTML, s = f.dangerouslySetInnerHTML, !c) {
      if (r != null)
        for (d = {}, u = 0; u < t.attributes.length; u++)
          d[t.attributes[u].name] = t.attributes[u].value;
      (s || h) && (s && (h && s.__html == h.__html || s.__html === t.innerHTML) || (t.innerHTML = s && s.__html || ""));
    }
    if (ly(t, f, d, i, c), s)
      e.__k = [];
    else if (u = e.props.children, Du(t, Array.isArray(u) ? u : [u], e, n, o, i && a !== "foreignObject", r, l, r ? r[0] : n.__k && tr(n, 0), c), r != null)
      for (u = r.length; u--; )
        r[u] != null && Mu(r[u]);
    c || ("value" in f && (u = f.value) !== void 0 && (u !== t.value || a === "progress" && !u || a === "option" && u !== d.value) && Is(t, "value", u, d.value, !1), "checked" in f && (u = f.checked) !== void 0 && u !== t.checked && Is(t, "checked", u, d.checked, !1));
  }
  return t;
}
function Hu(t, e, n) {
  try {
    typeof t == "function" ? t(e) : t.current = e;
  } catch (o) {
    ct.__e(o, n);
  }
}
function Wu(t, e, n) {
  var o, i;
  if (ct.unmount && ct.unmount(t), (o = t.ref) && (o.current && o.current !== t.__e || Hu(o, null, e)), (o = t.__c) != null) {
    if (o.componentWillUnmount)
      try {
        o.componentWillUnmount();
      } catch (r) {
        ct.__e(r, e);
      }
    o.base = o.__P = null, t.__c = void 0;
  }
  if (o = t.__k)
    for (i = 0; i < o.length; i++)
      o[i] && Wu(o[i], e, n || typeof t.type != "function");
  n || t.__e == null || Mu(t.__e), t.__ = t.__e = t.__d = void 0;
}
function _y(t, e, n) {
  return this.constructor(t, n);
}
ra = Lu.slice, ct = { __e: function(t, e, n, o) {
  for (var i, r, l; e = e.__; )
    if ((i = e.__c) && !i.__)
      try {
        if ((r = i.constructor) && r.getDerivedStateFromError != null && (i.setState(r.getDerivedStateFromError(t)), l = i.__d), i.componentDidCatch != null && (i.componentDidCatch(t, o || {}), l = i.__d), l)
          return i.__E = i;
      } catch (c) {
        t = c;
      }
  throw t;
} }, Eu = 0, Tu = function(t) {
  return t != null && t.constructor === void 0;
}, go.prototype.setState = function(t, e) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = Le({}, this.state), typeof t == "function" && (t = t(Le({}, n), this.props)), t && Le(n, t), t != null && this.__v && (e && this._sb.push(e), Za(this));
}, go.prototype.forceUpdate = function(t) {
  this.__v && (this.__e = !0, t && this.__h.push(t), Za(this));
}, go.prototype.render = sa, mo = [], Ws.__r = 0;
var fy = 0;
function oe(t, e, n, o, i) {
  var r, l, c = {};
  for (l in e)
    l == "ref" ? r = e[l] : c[l] = e[l];
  var _ = { type: t, props: c, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: --fy, __source: i, __self: o };
  if (typeof t == "function" && (r = t.defaultProps))
    for (l in r)
      c[l] === void 0 && (c[l] = r[l]);
  return ct.vnode && ct.vnode(_), _;
}
function Xl(...t) {
  const e = [], n = /* @__PURE__ */ new Map(), o = (i, r) => {
    if (Array.isArray(i) && (r = i[1], i = i[0]), !i.length)
      return;
    const l = n.get(i);
    typeof l == "number" ? e[l][1] = !!r : (n.set(i, e.length), e.push([i, !!r]));
  };
  return t.forEach((i) => {
    typeof i == "function" && (i = i()), Array.isArray(i) ? Xl(...i).forEach(o) : i && typeof i == "object" ? Object.entries(i).forEach(o) : typeof i == "string" && i.split(" ").forEach((r) => o(r, !0));
  }), e.sort((i, r) => (n.get(i[0]) || 0) - (n.get(r[0]) || 0));
}
const F = (...t) => Xl(...t).reduce((e, [n, o]) => (o && e.push(n), e), []).join(" ");
function uy({
  component: t = "div",
  className: e,
  children: n,
  style: o,
  attrs: i
}) {
  return oo(t, {
    className: F(e),
    style: o,
    ...i
  }, n);
}
function Iu({
  component: t = "a",
  className: e,
  children: n,
  attrs: o,
  url: i,
  disabled: r,
  active: l,
  icon: c,
  text: _,
  target: h,
  trailingIcon: s,
  hint: d,
  style: f,
  onClick: a
}) {
  const u = [
    typeof c == "string" ? /* @__PURE__ */ oe("i", { class: `icon ${c}` }) : c,
    /* @__PURE__ */ oe("span", { className: "text", children: _ }),
    typeof n == "function" ? n() : n,
    typeof s == "string" ? /* @__PURE__ */ oe("i", { class: `icon ${s}` }) : s
  ];
  return oo(t, {
    className: F(e, { disabled: r, active: l }),
    title: d,
    [t === "a" ? "href" : "data-url"]: i,
    [t === "a" ? "target" : "data-target"]: h,
    style: f,
    onClick: a,
    ...o
  }, ...u);
}
function hy({
  component: t = "div",
  className: e,
  text: n,
  attrs: o,
  children: i,
  style: r,
  onClick: l
}) {
  return oo(t, {
    className: F(e),
    style: r,
    onClick: l,
    ...o
  }, n, typeof i == "function" ? i() : i);
}
function dy({
  component: t = "div",
  className: e,
  style: n,
  space: o,
  flex: i,
  attrs: r,
  onClick: l,
  children: c
}) {
  return oo(t, {
    className: F(e),
    style: { width: o, height: o, flex: i, ...n },
    onClick: l,
    ...r
  }, c);
}
function py(t) {
  const {
    tag: e,
    className: n,
    style: o,
    renders: i,
    generateArgs: r = [],
    generatorThis: l,
    generators: c,
    onGenerate: _,
    onRenderItem: h,
    ...s
  } = t, d = [n], f = { ...o }, a = [], u = [];
  return i.forEach((b) => {
    const p = [];
    typeof b == "string" && c && c[b] && (b = c[b]), typeof b == "function" ? _ ? p.push(..._.call(l, b, a, ...r)) : p.push(...b.call(l, a, ...r) ?? []) : p.push(b), p.forEach((m) => {
      m != null && (typeof m == "object" && !pu(m) && ("html" in m || "__html" in m || "className" in m || "style" in m || "attrs" in m || "children" in m) ? m.html ? a.push(
        /* @__PURE__ */ Cu("div", { className: F(m.className), style: m.style, dangerouslySetInnerHTML: { __html: m.html }, ...m.attrs ?? {} })
      ) : m.__html ? u.push(m.__html) : (m.style && Object.assign(f, m.style), m.className && d.push(m.className), m.children && a.push(m.children), m.attrs && Object.assign(s, m.attrs)) : a.push(m));
    });
  }), u.length && Object.assign(s, { dangerouslySetInnerHTML: { __html: u } }), [{
    className: F(d),
    style: f,
    ...s
  }, a];
}
function Nc({
  tag: t = "div",
  ...e
}) {
  const [n, o] = py(e);
  return yu(t, n, ...o);
}
function my(t) {
  return /* @__PURE__ */ oe(Nc, { ...t });
}
function Uu({
  component: t = "div",
  className: e,
  children: n,
  style: o,
  attrs: i
}) {
  return oo(t, {
    className: F(e),
    style: o,
    ...i
  }, n);
}
var lo;
let Zn = (lo = class extends go {
  constructor() {
    super(...arguments);
    M(this, "ref", iy());
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
    const { itemProps: r, onClickItem: l } = n, c = { key: i, ...o };
    return r && Object.assign(c, r[o.type || "item"]), (l || o.onClick) && (c.onClick = this.handleItemClick.bind(this, c, i, o.onClick)), c.className = F(c.className), c;
  }
  renderItem(n, o, i) {
    const r = this.getItemRenderProps(n, o, i), { itemRender: l } = n;
    if (l) {
      if (typeof l == "object") {
        const p = l[o.type || "item"];
        if (p)
          return /* @__PURE__ */ oe(p, { ...r });
      } else if (typeof l == "function") {
        const p = l.call(this, r, oo);
        if (Tu(p))
          return p;
        typeof p == "object" && Object.assign(r, p);
      }
    }
    const { type: c = "item", component: _, key: h = i, rootAttrs: s, rootClass: d, rootStyle: f, rootChildren: a, ...u } = r, b = !_ || typeof _ == "string" ? this.constructor.ItemComponents && this.constructor.ItemComponents[c] || Zn.ItemComponents[c] : _;
    return Object.assign(u, {
      type: c,
      component: typeof _ == "string" ? _ : void 0
    }), this.renderTypedItem(b, {
      className: F(d),
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
    return /* @__PURE__ */ oe(
      "li",
      {
        className: F(`${this.name}-${i.type}`, l),
        ..._,
        children: [
          /* @__PURE__ */ oe(n, { ...i }),
          typeof r == "function" ? r() : r
        ]
      },
      c
    );
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
      beforeRender: d,
      afterRender: f,
      beforeDestroy: a,
      ...u
    } = n, b = this.constructor.ROOT_TAG;
    return /* @__PURE__ */ oe(b, { class: F(this.name, l), ...u, ref: this.ref, children: [
      c && c.map(this.renderItem.bind(this, n)),
      _
    ] });
  }
}, M(lo, "ItemComponents", {
  divider: uy,
  item: Iu,
  heading: hy,
  space: dy,
  custom: my,
  basic: Uu
}), M(lo, "ROOT_TAG", "menu"), M(lo, "NAME", "action-menu"), lo);
class n_ extends xt {
}
M(n_, "NAME", "actionmenu"), M(n_, "Component", Zn);
function o_({
  ...t
}) {
  return /* @__PURE__ */ oe(Iu, { ...t });
}
var Tc, kr, Zt, Cn;
let Fu = (Tc = class extends Zn {
  constructor(n) {
    super(n);
    E(this, kr, /* @__PURE__ */ new Set());
    E(this, Zt, void 0);
    E(this, Cn, (n, o, i) => {
      this.toggleNestedMenu(n, o), i.preventDefault();
    });
    H(this, Zt, n.nestedShow === void 0), g(this, Zt) && (this.state = { nestedShow: n.defaultNestedShow ?? {} });
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
    return /* @__PURE__ */ oe(
      i,
      {
        items: o,
        name: this.props.name,
        nestedShow: g(this, Zt) ? this.state.nestedShow : this.props.nestedShow,
        nestedTrigger: this.nestedTrigger,
        controlledMenu: this.props.controlledMenu || this,
        itemProps: this.props.itemProps,
        onClickItem: this.props.onClickItem,
        afterRender: this.props.afterRender,
        beforeRender: this.props.beforeRender,
        beforeDestroy: this.props.beforeDestroy,
        itemRender: this.props.itemRender
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
    g(this, kr).add(l);
    const c = this.isNestedMenuShow(l);
    if (c && (r.rootChildren = [
      r.rootChildren,
      this.renderNestedMenu(o)
    ], r.component = o_), this.nestedTrigger === "hover")
      r.rootAttrs = {
        ...r.rootAttrs,
        onMouseEnter: g(this, Cn).bind(this, l, !0),
        onMouseLeave: g(this, Cn).bind(this, l, !1)
      };
    else if (this.nestedTrigger === "click") {
      const { onClick: h } = r;
      r.onClick = (s) => {
        g(this, Cn).call(this, l, void 0, s), h == null || h(s);
      };
    }
    const _ = this.renderToggleIcon(c, r);
    return _ && (r.children = [r.children, _]), r.rootClass = [r.rootClass, "has-nested-menu", c ? "show" : ""], r;
  }
  isNestedMenuShow(n) {
    const o = g(this, Zt) ? this.state.nestedShow : this.props.nestedShow;
    return o && typeof o == "object" ? o[n] : !!o;
  }
  toggleNestedMenu(n, o) {
    const { controlledMenu: i } = this.props;
    if (i)
      return i.toggleNestedMenu(n, o);
    if (!g(this, Zt))
      return !1;
    let { nestedShow: r = {} } = this.state;
    if (typeof r == "boolean" && (r === !0 ? r = [...g(this, kr).values()].reduce((l, c) => (l[c] = !0, l), {}) : r = {}), o === void 0)
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
    g(this, Zt) && this.setState({ nestedShow: !0 });
  }
  hideAllNestedMenu() {
    g(this, Zt) && this.setState({ nestedShow: !1 });
  }
}, kr = new WeakMap(), Zt = new WeakMap(), Cn = new WeakMap(), M(Tc, "ItemComponents", {
  item: o_
}), Tc);
class r_ extends xt {
}
M(r_, "NAME", "actionmenunested"), M(r_, "Component", Fu);
var ia, at, Bu, yo, s_, ju = {}, zu = [], gy = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function Me(t, e) {
  for (var n in e)
    t[n] = e[n];
  return t;
}
function Vu(t) {
  var e = t.parentNode;
  e && e.removeChild(t);
}
function yy(t, e, n) {
  var o, i, r, l = {};
  for (r in e)
    r == "key" ? o = e[r] : r == "ref" ? i = e[r] : l[r] = e[r];
  if (arguments.length > 2 && (l.children = arguments.length > 3 ? ia.call(arguments, 2) : n), typeof t == "function" && t.defaultProps != null)
    for (r in t.defaultProps)
      l[r] === void 0 && (l[r] = t.defaultProps[r]);
  return ws(t, l, o, i, null);
}
function ws(t, e, n, o, i) {
  var r = { type: t, props: e, key: n, ref: o, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: i ?? ++Bu };
  return i == null && at.vnode != null && at.vnode(r), r;
}
function la(t) {
  return t.children;
}
function vo(t, e) {
  this.props = t, this.context = e;
}
function er(t, e) {
  if (e == null)
    return t.__ ? er(t.__, t.__.__k.indexOf(t) + 1) : null;
  for (var n; e < t.__k.length; e++)
    if ((n = t.__k[e]) != null && n.__e != null)
      return n.__e;
  return typeof t.type == "function" ? er(t) : null;
}
function Yu(t) {
  var e, n;
  if ((t = t.__) != null && t.__c != null) {
    for (t.__e = t.__c.base = null, e = 0; e < t.__k.length; e++)
      if ((n = t.__k[e]) != null && n.__e != null) {
        t.__e = t.__c.base = n.__e;
        break;
      }
    return Yu(t);
  }
}
function i_(t) {
  (!t.__d && (t.__d = !0) && yo.push(t) && !Us.__r++ || s_ !== at.debounceRendering) && ((s_ = at.debounceRendering) || setTimeout)(Us);
}
function Us() {
  for (var t; Us.__r = yo.length; )
    t = yo.sort(function(e, n) {
      return e.__v.__b - n.__v.__b;
    }), yo = [], t.some(function(e) {
      var n, o, i, r, l, c;
      e.__d && (l = (r = (n = e).__v).__e, (c = n.__P) && (o = [], (i = Me({}, r)).__v = r.__v + 1, Ku(c, r, i, n.__n, c.ownerSVGElement !== void 0, r.__h != null ? [l] : null, o, l ?? er(r), r.__h), by(o, r), r.__e != l && Yu(r)));
    });
}
function qu(t, e, n, o, i, r, l, c, _, h) {
  var s, d, f, a, u, b, p, m = o && o.__k || zu, y = m.length;
  for (n.__k = [], s = 0; s < e.length; s++)
    if ((a = n.__k[s] = (a = e[s]) == null || typeof a == "boolean" ? null : typeof a == "string" || typeof a == "number" || typeof a == "bigint" ? ws(null, a, null, null, a) : Array.isArray(a) ? ws(la, { children: a }, null, null, null) : a.__b > 0 ? ws(a.type, a.props, a.key, a.ref ? a.ref : null, a.__v) : a) != null) {
      if (a.__ = n, a.__b = n.__b + 1, (f = m[s]) === null || f && a.key == f.key && a.type === f.type)
        m[s] = void 0;
      else
        for (d = 0; d < y; d++) {
          if ((f = m[d]) && a.key == f.key && a.type === f.type) {
            m[d] = void 0;
            break;
          }
          f = null;
        }
      Ku(t, a, f = f || ju, i, r, l, c, _, h), u = a.__e, (d = a.ref) && f.ref != d && (p || (p = []), f.ref && p.push(f.ref, null, a), p.push(d, a.__c || u, a)), u != null ? (b == null && (b = u), typeof a.type == "function" && a.__k === f.__k ? a.__d = _ = Gu(a, _, t) : _ = Xu(t, a, f, m, u, _), typeof n.type == "function" && (n.__d = _)) : _ && f.__e == _ && _.parentNode != t && (_ = er(f));
    }
  for (n.__e = b, s = y; s--; )
    m[s] != null && Zu(m[s], m[s]);
  if (p)
    for (s = 0; s < p.length; s++)
      Ju(p[s], p[++s], p[++s]);
}
function Gu(t, e, n) {
  for (var o, i = t.__k, r = 0; i && r < i.length; r++)
    (o = i[r]) && (o.__ = t, e = typeof o.type == "function" ? Gu(o, e, n) : Xu(n, o, o, i, o.__e, e));
  return e;
}
function Xu(t, e, n, o, i, r) {
  var l, c, _;
  if (e.__d !== void 0)
    l = e.__d, e.__d = void 0;
  else if (n == null || i != r || i.parentNode == null)
    t:
      if (r == null || r.parentNode !== t)
        t.appendChild(i), l = null;
      else {
        for (c = r, _ = 0; (c = c.nextSibling) && _ < o.length; _ += 2)
          if (c == i)
            break t;
        t.insertBefore(i, r), l = r;
      }
  return l !== void 0 ? l : i.nextSibling;
}
function vy(t, e, n, o, i) {
  var r;
  for (r in n)
    r === "children" || r === "key" || r in e || Fs(t, r, null, n[r], o);
  for (r in e)
    i && typeof e[r] != "function" || r === "children" || r === "key" || r === "value" || r === "checked" || n[r] === e[r] || Fs(t, r, e[r], n[r], o);
}
function l_(t, e, n) {
  e[0] === "-" ? t.setProperty(e, n) : t[e] = n == null ? "" : typeof n != "number" || gy.test(e) ? n : n + "px";
}
function Fs(t, e, n, o, i) {
  var r;
  t:
    if (e === "style")
      if (typeof n == "string")
        t.style.cssText = n;
      else {
        if (typeof o == "string" && (t.style.cssText = o = ""), o)
          for (e in o)
            n && e in n || l_(t.style, e, "");
        if (n)
          for (e in n)
            o && n[e] === o[e] || l_(t.style, e, n[e]);
      }
    else if (e[0] === "o" && e[1] === "n")
      r = e !== (e = e.replace(/Capture$/, "")), e = e.toLowerCase() in t ? e.toLowerCase().slice(2) : e.slice(2), t.l || (t.l = {}), t.l[e + r] = n, n ? o || t.addEventListener(e, r ? a_ : c_, r) : t.removeEventListener(e, r ? a_ : c_, r);
    else if (e !== "dangerouslySetInnerHTML") {
      if (i)
        e = e.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
      else if (e !== "href" && e !== "list" && e !== "form" && e !== "tabIndex" && e !== "download" && e in t)
        try {
          t[e] = n ?? "";
          break t;
        } catch {
        }
      typeof n == "function" || (n == null || n === !1 && e.indexOf("-") == -1 ? t.removeAttribute(e) : t.setAttribute(e, n));
    }
}
function c_(t) {
  this.l[t.type + !1](at.event ? at.event(t) : t);
}
function a_(t) {
  this.l[t.type + !0](at.event ? at.event(t) : t);
}
function Ku(t, e, n, o, i, r, l, c, _) {
  var h, s, d, f, a, u, b, p, m, y, w, k, C, A, T, v = e.type;
  if (e.constructor !== void 0)
    return null;
  n.__h != null && (_ = n.__h, c = e.__e = n.__e, e.__h = null, r = [c]), (h = at.__b) && h(e);
  try {
    t:
      if (typeof v == "function") {
        if (p = e.props, m = (h = v.contextType) && o[h.__c], y = h ? m ? m.props.value : h.__ : o, n.__c ? b = (s = e.__c = n.__c).__ = s.__E : ("prototype" in v && v.prototype.render ? e.__c = s = new v(p, y) : (e.__c = s = new vo(p, y), s.constructor = v, s.render = $y), m && m.sub(s), s.props = p, s.state || (s.state = {}), s.context = y, s.__n = o, d = s.__d = !0, s.__h = [], s._sb = []), s.__s == null && (s.__s = s.state), v.getDerivedStateFromProps != null && (s.__s == s.state && (s.__s = Me({}, s.__s)), Me(s.__s, v.getDerivedStateFromProps(p, s.__s))), f = s.props, a = s.state, d)
          v.getDerivedStateFromProps == null && s.componentWillMount != null && s.componentWillMount(), s.componentDidMount != null && s.__h.push(s.componentDidMount);
        else {
          if (v.getDerivedStateFromProps == null && p !== f && s.componentWillReceiveProps != null && s.componentWillReceiveProps(p, y), !s.__e && s.shouldComponentUpdate != null && s.shouldComponentUpdate(p, s.__s, y) === !1 || e.__v === n.__v) {
            for (s.props = p, s.state = s.__s, e.__v !== n.__v && (s.__d = !1), s.__v = e, e.__e = n.__e, e.__k = n.__k, e.__k.forEach(function(x) {
              x && (x.__ = e);
            }), w = 0; w < s._sb.length; w++)
              s.__h.push(s._sb[w]);
            s._sb = [], s.__h.length && l.push(s);
            break t;
          }
          s.componentWillUpdate != null && s.componentWillUpdate(p, s.__s, y), s.componentDidUpdate != null && s.__h.push(function() {
            s.componentDidUpdate(f, a, u);
          });
        }
        if (s.context = y, s.props = p, s.__v = e, s.__P = t, k = at.__r, C = 0, "prototype" in v && v.prototype.render) {
          for (s.state = s.__s, s.__d = !1, k && k(e), h = s.render(s.props, s.state, s.context), A = 0; A < s._sb.length; A++)
            s.__h.push(s._sb[A]);
          s._sb = [];
        } else
          do
            s.__d = !1, k && k(e), h = s.render(s.props, s.state, s.context), s.state = s.__s;
          while (s.__d && ++C < 25);
        s.state = s.__s, s.getChildContext != null && (o = Me(Me({}, o), s.getChildContext())), d || s.getSnapshotBeforeUpdate == null || (u = s.getSnapshotBeforeUpdate(f, a)), T = h != null && h.type === la && h.key == null ? h.props.children : h, qu(t, Array.isArray(T) ? T : [T], e, n, o, i, r, l, c, _), s.base = e.__e, e.__h = null, s.__h.length && l.push(s), b && (s.__E = s.__ = null), s.__e = !1;
      } else
        r == null && e.__v === n.__v ? (e.__k = n.__k, e.__e = n.__e) : e.__e = wy(n.__e, e, n, o, i, r, l, _);
    (h = at.diffed) && h(e);
  } catch (x) {
    e.__v = null, (_ || r != null) && (e.__e = c, e.__h = !!_, r[r.indexOf(c)] = null), at.__e(x, e, n);
  }
}
function by(t, e) {
  at.__c && at.__c(e, t), t.some(function(n) {
    try {
      t = n.__h, n.__h = [], t.some(function(o) {
        o.call(n);
      });
    } catch (o) {
      at.__e(o, n.__v);
    }
  });
}
function wy(t, e, n, o, i, r, l, c) {
  var _, h, s, d = n.props, f = e.props, a = e.type, u = 0;
  if (a === "svg" && (i = !0), r != null) {
    for (; u < r.length; u++)
      if ((_ = r[u]) && "setAttribute" in _ == !!a && (a ? _.localName === a : _.nodeType === 3)) {
        t = _, r[u] = null;
        break;
      }
  }
  if (t == null) {
    if (a === null)
      return document.createTextNode(f);
    t = i ? document.createElementNS("http://www.w3.org/2000/svg", a) : document.createElement(a, f.is && f), r = null, c = !1;
  }
  if (a === null)
    d === f || c && t.data === f || (t.data = f);
  else {
    if (r = r && ia.call(t.childNodes), h = (d = n.props || ju).dangerouslySetInnerHTML, s = f.dangerouslySetInnerHTML, !c) {
      if (r != null)
        for (d = {}, u = 0; u < t.attributes.length; u++)
          d[t.attributes[u].name] = t.attributes[u].value;
      (s || h) && (s && (h && s.__html == h.__html || s.__html === t.innerHTML) || (t.innerHTML = s && s.__html || ""));
    }
    if (vy(t, f, d, i, c), s)
      e.__k = [];
    else if (u = e.props.children, qu(t, Array.isArray(u) ? u : [u], e, n, o, i && a !== "foreignObject", r, l, r ? r[0] : n.__k && er(n, 0), c), r != null)
      for (u = r.length; u--; )
        r[u] != null && Vu(r[u]);
    c || ("value" in f && (u = f.value) !== void 0 && (u !== t.value || a === "progress" && !u || a === "option" && u !== d.value) && Fs(t, "value", u, d.value, !1), "checked" in f && (u = f.checked) !== void 0 && u !== t.checked && Fs(t, "checked", u, d.checked, !1));
  }
  return t;
}
function Ju(t, e, n) {
  try {
    typeof t == "function" ? t(e) : t.current = e;
  } catch (o) {
    at.__e(o, n);
  }
}
function Zu(t, e, n) {
  var o, i;
  if (at.unmount && at.unmount(t), (o = t.ref) && (o.current && o.current !== t.__e || Ju(o, null, e)), (o = t.__c) != null) {
    if (o.componentWillUnmount)
      try {
        o.componentWillUnmount();
      } catch (r) {
        at.__e(r, e);
      }
    o.base = o.__P = null, t.__c = void 0;
  }
  if (o = t.__k)
    for (i = 0; i < o.length; i++)
      o[i] && Zu(o[i], e, n || typeof t.type != "function");
  n || t.__e == null || Vu(t.__e), t.__ = t.__e = t.__d = void 0;
}
function $y(t, e, n) {
  return this.constructor(t, n);
}
ia = zu.slice, at = { __e: function(t, e, n, o) {
  for (var i, r, l; e = e.__; )
    if ((i = e.__c) && !i.__)
      try {
        if ((r = i.constructor) && r.getDerivedStateFromError != null && (i.setState(r.getDerivedStateFromError(t)), l = i.__d), i.componentDidCatch != null && (i.componentDidCatch(t, o || {}), l = i.__d), l)
          return i.__E = i;
      } catch (c) {
        t = c;
      }
  throw t;
} }, Bu = 0, vo.prototype.setState = function(t, e) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = Me({}, this.state), typeof t == "function" && (t = t(Me({}, n), this.props)), t && Me(n, t), t != null && this.__v && (e && this._sb.push(e), i_(this));
}, vo.prototype.forceUpdate = function(t) {
  this.__v && (this.__e = !0, t && this.__h.push(t), i_(this));
}, vo.prototype.render = la, yo = [], Us.__r = 0;
var ky = 0;
function so(t, e, n, o, i) {
  var r, l, c = {};
  for (l in e)
    l == "ref" ? r = e[l] : c[l] = e[l];
  var _ = { type: t, props: c, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: --ky, __source: i, __self: o };
  if (typeof t == "function" && (r = t.defaultProps))
    for (l in r)
      c[l] === void 0 && (c[l] = r[l]);
  return at.vnode && at.vnode(_), _;
}
let re = class extends vo {
  render() {
    const {
      component: e,
      type: n,
      size: o,
      className: i,
      children: r,
      url: l,
      target: c,
      disabled: _,
      active: h,
      loading: s,
      loadingIcon: d,
      loadingText: f,
      icon: a,
      text: u,
      trailingIcon: b,
      caret: p,
      square: m,
      hint: y,
      ...w
    } = this.props, k = e || (l ? "a" : "button"), C = u == null || typeof u == "string" && !u.length || s && !f, A = C && !a && !b && !r && !s;
    return yy(
      k,
      {
        className: F("btn", n, i, {
          "btn-caret": A,
          disabled: _ || s,
          active: h,
          loading: s,
          square: m === void 0 ? !A && !r && C : m
        }, o ? `size-${o}` : ""),
        title: y,
        [k === "a" ? "href" : "data-url"]: l,
        [k === "a" ? "target" : "data-target"]: c,
        type: k === "button" ? "button" : void 0,
        ...w
      },
      s ? /* @__PURE__ */ so("i", { class: `spin icon ${d || "icon-spinner-snake"}` }) : typeof a == "string" ? /* @__PURE__ */ so("i", { class: `icon ${a}` }) : a,
      C ? null : /* @__PURE__ */ so("span", { className: "text", children: s ? f : u }),
      s ? null : r,
      s ? null : typeof b == "string" ? /* @__PURE__ */ so("i", { class: `icon ${b}` }) : b,
      s ? null : p ? /* @__PURE__ */ so("span", { className: typeof p == "string" ? `caret-${p}` : "caret" }) : null
    );
  }
};
class __ extends xt {
}
M(__, "NAME", "button"), M(__, "Component", re);
var Pc;
Pc = { __e: function(t, e, n, o) {
  for (var i, r, l; e = e.__; )
    if ((i = e.__c) && !i.__)
      try {
        if ((r = i.constructor) && r.getDerivedStateFromError != null && (i.setState(r.getDerivedStateFromError(t)), l = i.__d), i.componentDidCatch != null && (i.componentDidCatch(t, o || {}), l = i.__d), l)
          return i.__E = i;
      } catch (c) {
        t = c;
      }
  throw t;
} };
var xy = 0;
function Sy(t, e, n, o, i) {
  var r, l, c = {};
  for (l in e)
    l == "ref" ? r = e[l] : c[l] = e[l];
  var _ = { type: t, props: c, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: --xy, __source: i, __self: o };
  if (typeof t == "function" && (r = t.defaultProps))
    for (l in r)
      c[l] === void 0 && (c[l] = r[l]);
  return Pc.vnode && Pc.vnode(_), _;
}
var Ac;
let ca = (Ac = class extends Fu {
  get nestedTrigger() {
    return this.props.nestedTrigger || "click";
  }
  get menuName() {
    return "menu-nested";
  }
  beforeRender() {
    const e = super.beforeRender();
    let { hasIcons: n } = e;
    return n === void 0 && (n = e.items.some((o) => o.icon)), e.className = F(e.className, this.menuName, {
      "has-icons": n,
      "has-nested-items": e.items.some((o) => this.isNestedItem(o))
    }), e;
  }
  renderToggleIcon(e) {
    return /* @__PURE__ */ Sy("span", { class: `${this.name}-toggle-icon caret-${e ? "down" : "right"}` });
  }
}, M(Ac, "NAME", "menu"), Ac);
class f_ extends xt {
}
M(f_, "NAME", "menu"), M(f_, "Component", ca);
let Cy = (t = 21) => crypto.getRandomValues(new Uint8Array(t)).reduce((e, n) => (n &= 63, n < 36 ? e += n.toString(36) : n < 62 ? e += (n - 26).toString(36).toUpperCase() : n > 62 ? e += "-" : e += "_", e), "");
var Qu, _t, th, bo, u_, eh = {}, nh = [], Ey = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function Re(t, e) {
  for (var n in e)
    t[n] = e[n];
  return t;
}
function oh(t) {
  var e = t.parentNode;
  e && e.removeChild(t);
}
function vc(t, e, n, o, i) {
  var r = { type: t, props: e, key: n, ref: o, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: i ?? ++th };
  return i == null && _t.vnode != null && _t.vnode(r), r;
}
function aa(t) {
  return t.children;
}
function wo(t, e) {
  this.props = t, this.context = e;
}
function nr(t, e) {
  if (e == null)
    return t.__ ? nr(t.__, t.__.__k.indexOf(t) + 1) : null;
  for (var n; e < t.__k.length; e++)
    if ((n = t.__k[e]) != null && n.__e != null)
      return n.__e;
  return typeof t.type == "function" ? nr(t) : null;
}
function rh(t) {
  var e, n;
  if ((t = t.__) != null && t.__c != null) {
    for (t.__e = t.__c.base = null, e = 0; e < t.__k.length; e++)
      if ((n = t.__k[e]) != null && n.__e != null) {
        t.__e = t.__c.base = n.__e;
        break;
      }
    return rh(t);
  }
}
function h_(t) {
  (!t.__d && (t.__d = !0) && bo.push(t) && !Bs.__r++ || u_ !== _t.debounceRendering) && ((u_ = _t.debounceRendering) || setTimeout)(Bs);
}
function Bs() {
  for (var t; Bs.__r = bo.length; )
    t = bo.sort(function(e, n) {
      return e.__v.__b - n.__v.__b;
    }), bo = [], t.some(function(e) {
      var n, o, i, r, l, c;
      e.__d && (l = (r = (n = e).__v).__e, (c = n.__P) && (o = [], (i = Re({}, r)).__v = r.__v + 1, ch(c, r, i, n.__n, c.ownerSVGElement !== void 0, r.__h != null ? [l] : null, o, l ?? nr(r), r.__h), Ay(o, r), r.__e != l && rh(r)));
    });
}
function sh(t, e, n, o, i, r, l, c, _, h) {
  var s, d, f, a, u, b, p, m = o && o.__k || nh, y = m.length;
  for (n.__k = [], s = 0; s < e.length; s++)
    if ((a = n.__k[s] = (a = e[s]) == null || typeof a == "boolean" ? null : typeof a == "string" || typeof a == "number" || typeof a == "bigint" ? vc(null, a, null, null, a) : Array.isArray(a) ? vc(aa, { children: a }, null, null, null) : a.__b > 0 ? vc(a.type, a.props, a.key, a.ref ? a.ref : null, a.__v) : a) != null) {
      if (a.__ = n, a.__b = n.__b + 1, (f = m[s]) === null || f && a.key == f.key && a.type === f.type)
        m[s] = void 0;
      else
        for (d = 0; d < y; d++) {
          if ((f = m[d]) && a.key == f.key && a.type === f.type) {
            m[d] = void 0;
            break;
          }
          f = null;
        }
      ch(t, a, f = f || eh, i, r, l, c, _, h), u = a.__e, (d = a.ref) && f.ref != d && (p || (p = []), f.ref && p.push(f.ref, null, a), p.push(d, a.__c || u, a)), u != null ? (b == null && (b = u), typeof a.type == "function" && a.__k === f.__k ? a.__d = _ = ih(a, _, t) : _ = lh(t, a, f, m, u, _), typeof n.type == "function" && (n.__d = _)) : _ && f.__e == _ && _.parentNode != t && (_ = nr(f));
    }
  for (n.__e = b, s = y; s--; )
    m[s] != null && _h(m[s], m[s]);
  if (p)
    for (s = 0; s < p.length; s++)
      ah(p[s], p[++s], p[++s]);
}
function ih(t, e, n) {
  for (var o, i = t.__k, r = 0; i && r < i.length; r++)
    (o = i[r]) && (o.__ = t, e = typeof o.type == "function" ? ih(o, e, n) : lh(n, o, o, i, o.__e, e));
  return e;
}
function lh(t, e, n, o, i, r) {
  var l, c, _;
  if (e.__d !== void 0)
    l = e.__d, e.__d = void 0;
  else if (n == null || i != r || i.parentNode == null)
    t:
      if (r == null || r.parentNode !== t)
        t.appendChild(i), l = null;
      else {
        for (c = r, _ = 0; (c = c.nextSibling) && _ < o.length; _ += 2)
          if (c == i)
            break t;
        t.insertBefore(i, r), l = r;
      }
  return l !== void 0 ? l : i.nextSibling;
}
function Ty(t, e, n, o, i) {
  var r;
  for (r in n)
    r === "children" || r === "key" || r in e || js(t, r, null, n[r], o);
  for (r in e)
    i && typeof e[r] != "function" || r === "children" || r === "key" || r === "value" || r === "checked" || n[r] === e[r] || js(t, r, e[r], n[r], o);
}
function d_(t, e, n) {
  e[0] === "-" ? t.setProperty(e, n) : t[e] = n == null ? "" : typeof n != "number" || Ey.test(e) ? n : n + "px";
}
function js(t, e, n, o, i) {
  var r;
  t:
    if (e === "style")
      if (typeof n == "string")
        t.style.cssText = n;
      else {
        if (typeof o == "string" && (t.style.cssText = o = ""), o)
          for (e in o)
            n && e in n || d_(t.style, e, "");
        if (n)
          for (e in n)
            o && n[e] === o[e] || d_(t.style, e, n[e]);
      }
    else if (e[0] === "o" && e[1] === "n")
      r = e !== (e = e.replace(/Capture$/, "")), e = e.toLowerCase() in t ? e.toLowerCase().slice(2) : e.slice(2), t.l || (t.l = {}), t.l[e + r] = n, n ? o || t.addEventListener(e, r ? m_ : p_, r) : t.removeEventListener(e, r ? m_ : p_, r);
    else if (e !== "dangerouslySetInnerHTML") {
      if (i)
        e = e.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
      else if (e !== "href" && e !== "list" && e !== "form" && e !== "tabIndex" && e !== "download" && e in t)
        try {
          t[e] = n ?? "";
          break t;
        } catch {
        }
      typeof n == "function" || (n == null || n === !1 && e.indexOf("-") == -1 ? t.removeAttribute(e) : t.setAttribute(e, n));
    }
}
function p_(t) {
  this.l[t.type + !1](_t.event ? _t.event(t) : t);
}
function m_(t) {
  this.l[t.type + !0](_t.event ? _t.event(t) : t);
}
function ch(t, e, n, o, i, r, l, c, _) {
  var h, s, d, f, a, u, b, p, m, y, w, k, C, A, T, v = e.type;
  if (e.constructor !== void 0)
    return null;
  n.__h != null && (_ = n.__h, c = e.__e = n.__e, e.__h = null, r = [c]), (h = _t.__b) && h(e);
  try {
    t:
      if (typeof v == "function") {
        if (p = e.props, m = (h = v.contextType) && o[h.__c], y = h ? m ? m.props.value : h.__ : o, n.__c ? b = (s = e.__c = n.__c).__ = s.__E : ("prototype" in v && v.prototype.render ? e.__c = s = new v(p, y) : (e.__c = s = new wo(p, y), s.constructor = v, s.render = My), m && m.sub(s), s.props = p, s.state || (s.state = {}), s.context = y, s.__n = o, d = s.__d = !0, s.__h = [], s._sb = []), s.__s == null && (s.__s = s.state), v.getDerivedStateFromProps != null && (s.__s == s.state && (s.__s = Re({}, s.__s)), Re(s.__s, v.getDerivedStateFromProps(p, s.__s))), f = s.props, a = s.state, d)
          v.getDerivedStateFromProps == null && s.componentWillMount != null && s.componentWillMount(), s.componentDidMount != null && s.__h.push(s.componentDidMount);
        else {
          if (v.getDerivedStateFromProps == null && p !== f && s.componentWillReceiveProps != null && s.componentWillReceiveProps(p, y), !s.__e && s.shouldComponentUpdate != null && s.shouldComponentUpdate(p, s.__s, y) === !1 || e.__v === n.__v) {
            for (s.props = p, s.state = s.__s, e.__v !== n.__v && (s.__d = !1), s.__v = e, e.__e = n.__e, e.__k = n.__k, e.__k.forEach(function(x) {
              x && (x.__ = e);
            }), w = 0; w < s._sb.length; w++)
              s.__h.push(s._sb[w]);
            s._sb = [], s.__h.length && l.push(s);
            break t;
          }
          s.componentWillUpdate != null && s.componentWillUpdate(p, s.__s, y), s.componentDidUpdate != null && s.__h.push(function() {
            s.componentDidUpdate(f, a, u);
          });
        }
        if (s.context = y, s.props = p, s.__v = e, s.__P = t, k = _t.__r, C = 0, "prototype" in v && v.prototype.render) {
          for (s.state = s.__s, s.__d = !1, k && k(e), h = s.render(s.props, s.state, s.context), A = 0; A < s._sb.length; A++)
            s.__h.push(s._sb[A]);
          s._sb = [];
        } else
          do
            s.__d = !1, k && k(e), h = s.render(s.props, s.state, s.context), s.state = s.__s;
          while (s.__d && ++C < 25);
        s.state = s.__s, s.getChildContext != null && (o = Re(Re({}, o), s.getChildContext())), d || s.getSnapshotBeforeUpdate == null || (u = s.getSnapshotBeforeUpdate(f, a)), T = h != null && h.type === aa && h.key == null ? h.props.children : h, sh(t, Array.isArray(T) ? T : [T], e, n, o, i, r, l, c, _), s.base = e.__e, e.__h = null, s.__h.length && l.push(s), b && (s.__E = s.__ = null), s.__e = !1;
      } else
        r == null && e.__v === n.__v ? (e.__k = n.__k, e.__e = n.__e) : e.__e = Ly(n.__e, e, n, o, i, r, l, _);
    (h = _t.diffed) && h(e);
  } catch (x) {
    e.__v = null, (_ || r != null) && (e.__e = c, e.__h = !!_, r[r.indexOf(c)] = null), _t.__e(x, e, n);
  }
}
function Ay(t, e) {
  _t.__c && _t.__c(e, t), t.some(function(n) {
    try {
      t = n.__h, n.__h = [], t.some(function(o) {
        o.call(n);
      });
    } catch (o) {
      _t.__e(o, n.__v);
    }
  });
}
function Ly(t, e, n, o, i, r, l, c) {
  var _, h, s, d = n.props, f = e.props, a = e.type, u = 0;
  if (a === "svg" && (i = !0), r != null) {
    for (; u < r.length; u++)
      if ((_ = r[u]) && "setAttribute" in _ == !!a && (a ? _.localName === a : _.nodeType === 3)) {
        t = _, r[u] = null;
        break;
      }
  }
  if (t == null) {
    if (a === null)
      return document.createTextNode(f);
    t = i ? document.createElementNS("http://www.w3.org/2000/svg", a) : document.createElement(a, f.is && f), r = null, c = !1;
  }
  if (a === null)
    d === f || c && t.data === f || (t.data = f);
  else {
    if (r = r && Qu.call(t.childNodes), h = (d = n.props || eh).dangerouslySetInnerHTML, s = f.dangerouslySetInnerHTML, !c) {
      if (r != null)
        for (d = {}, u = 0; u < t.attributes.length; u++)
          d[t.attributes[u].name] = t.attributes[u].value;
      (s || h) && (s && (h && s.__html == h.__html || s.__html === t.innerHTML) || (t.innerHTML = s && s.__html || ""));
    }
    if (Ty(t, f, d, i, c), s)
      e.__k = [];
    else if (u = e.props.children, sh(t, Array.isArray(u) ? u : [u], e, n, o, i && a !== "foreignObject", r, l, r ? r[0] : n.__k && nr(n, 0), c), r != null)
      for (u = r.length; u--; )
        r[u] != null && oh(r[u]);
    c || ("value" in f && (u = f.value) !== void 0 && (u !== t.value || a === "progress" && !u || a === "option" && u !== d.value) && js(t, "value", u, d.value, !1), "checked" in f && (u = f.checked) !== void 0 && u !== t.checked && js(t, "checked", u, d.checked, !1));
  }
  return t;
}
function ah(t, e, n) {
  try {
    typeof t == "function" ? t(e) : t.current = e;
  } catch (o) {
    _t.__e(o, n);
  }
}
function _h(t, e, n) {
  var o, i;
  if (_t.unmount && _t.unmount(t), (o = t.ref) && (o.current && o.current !== t.__e || ah(o, null, e)), (o = t.__c) != null) {
    if (o.componentWillUnmount)
      try {
        o.componentWillUnmount();
      } catch (r) {
        _t.__e(r, e);
      }
    o.base = o.__P = null, t.__c = void 0;
  }
  if (o = t.__k)
    for (i = 0; i < o.length; i++)
      o[i] && _h(o[i], e, n || typeof t.type != "function");
  n || t.__e == null || oh(t.__e), t.__ = t.__e = t.__d = void 0;
}
function My(t, e, n) {
  return this.constructor(t, n);
}
Qu = nh.slice, _t = { __e: function(t, e, n, o) {
  for (var i, r, l; e = e.__; )
    if ((i = e.__c) && !i.__)
      try {
        if ((r = i.constructor) && r.getDerivedStateFromError != null && (i.setState(r.getDerivedStateFromError(t)), l = i.__d), i.componentDidCatch != null && (i.componentDidCatch(t, o || {}), l = i.__d), l)
          return i.__E = i;
      } catch (c) {
        t = c;
      }
  throw t;
} }, th = 0, wo.prototype.setState = function(t, e) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = Re({}, this.state), typeof t == "function" && (t = t(Re({}, n), this.props)), t && Re(n, t), t != null && this.__v && (e && this._sb.push(e), h_(this));
}, wo.prototype.forceUpdate = function(t) {
  this.__v && (this.__e = !0, t && this.__h.push(t), h_(this));
}, wo.prototype.render = aa, bo = [], Bs.__r = 0;
var Ry = 0;
function Dy(t, e, n, o, i) {
  var r, l, c = {};
  for (l in e)
    l == "ref" ? r = e[l] : c[l] = e[l];
  var _ = { type: t, props: c, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: --Ry, __source: i, __self: o };
  if (typeof t == "function" && (r = t.defaultProps))
    for (l in r)
      c[l] === void 0 && (c[l] = r[l]);
  return _t.vnode && _t.vnode(_), _;
}
var Oc, vn;
Oc = { __e: function(t, e, n, o) {
  for (var i, r, l; e = e.__; )
    if ((i = e.__c) && !i.__)
      try {
        if ((r = i.constructor) && r.getDerivedStateFromError != null && (i.setState(r.getDerivedStateFromError(t)), l = i.__d), i.componentDidCatch != null && (i.componentDidCatch(t, o || {}), l = i.__d), l)
          return i.__E = i;
      } catch (c) {
        t = c;
      }
  throw t;
} }, vn = function(t) {
  return t != null && t.constructor === void 0;
};
var Ny = 0;
function ae(t, e, n, o, i) {
  var r, l, c = {};
  for (l in e)
    l == "ref" ? r = e[l] : c[l] = e[l];
  var _ = { type: t, props: c, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: --Ny, __source: i, __self: o };
  if (typeof t == "function" && (r = t.defaultProps))
    for (l in r)
      c[l] === void 0 && (c[l] = r[l]);
  return Oc.vnode && Oc.vnode(_), _;
}
var Hc;
Hc = { __e: function(t, e, n, o) {
  for (var i, r, l; e = e.__; )
    if ((i = e.__c) && !i.__)
      try {
        if ((r = i.constructor) && r.getDerivedStateFromError != null && (i.setState(r.getDerivedStateFromError(t)), l = i.__d), i.componentDidCatch != null && (i.componentDidCatch(t, o || {}), l = i.__d), l)
          return i.__E = i;
      } catch (c) {
        t = c;
      }
  throw t;
} };
var Py = 0;
function Kl(t, e, n, o, i) {
  var r, l, c = {};
  for (l in e)
    l == "ref" ? r = e[l] : c[l] = e[l];
  var _ = { type: t, props: c, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: --Py, __source: i, __self: o };
  if (typeof t == "function" && (r = t.defaultProps))
    for (l in r)
      c[l] === void 0 && (c[l] = r[l]);
  return Hc.vnode && Hc.vnode(_), _;
}
function Oy({
  key: t,
  type: e,
  btnType: n,
  ...o
}) {
  return /* @__PURE__ */ Kl(re, { type: n, ...o });
}
var fh, ft, uh, $o, g_, hh = {}, dh = [], Hy = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function De(t, e) {
  for (var n in e)
    t[n] = e[n];
  return t;
}
function ph(t) {
  var e = t.parentNode;
  e && e.removeChild(t);
}
function bc(t, e, n, o, i) {
  var r = { type: t, props: e, key: n, ref: o, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: i ?? ++uh };
  return i == null && ft.vnode != null && ft.vnode(r), r;
}
function Wy() {
  return { current: null };
}
function _a(t) {
  return t.children;
}
function ko(t, e) {
  this.props = t, this.context = e;
}
function or(t, e) {
  if (e == null)
    return t.__ ? or(t.__, t.__.__k.indexOf(t) + 1) : null;
  for (var n; e < t.__k.length; e++)
    if ((n = t.__k[e]) != null && n.__e != null)
      return n.__e;
  return typeof t.type == "function" ? or(t) : null;
}
function mh(t) {
  var e, n;
  if ((t = t.__) != null && t.__c != null) {
    for (t.__e = t.__c.base = null, e = 0; e < t.__k.length; e++)
      if ((n = t.__k[e]) != null && n.__e != null) {
        t.__e = t.__c.base = n.__e;
        break;
      }
    return mh(t);
  }
}
function y_(t) {
  (!t.__d && (t.__d = !0) && $o.push(t) && !zs.__r++ || g_ !== ft.debounceRendering) && ((g_ = ft.debounceRendering) || setTimeout)(zs);
}
function zs() {
  for (var t; zs.__r = $o.length; )
    t = $o.sort(function(e, n) {
      return e.__v.__b - n.__v.__b;
    }), $o = [], t.some(function(e) {
      var n, o, i, r, l, c;
      e.__d && (l = (r = (n = e).__v).__e, (c = n.__P) && (o = [], (i = De({}, r)).__v = r.__v + 1, bh(c, r, i, n.__n, c.ownerSVGElement !== void 0, r.__h != null ? [l] : null, o, l ?? or(r), r.__h), Uy(o, r), r.__e != l && mh(r)));
    });
}
function gh(t, e, n, o, i, r, l, c, _, h) {
  var s, d, f, a, u, b, p, m = o && o.__k || dh, y = m.length;
  for (n.__k = [], s = 0; s < e.length; s++)
    if ((a = n.__k[s] = (a = e[s]) == null || typeof a == "boolean" ? null : typeof a == "string" || typeof a == "number" || typeof a == "bigint" ? bc(null, a, null, null, a) : Array.isArray(a) ? bc(_a, { children: a }, null, null, null) : a.__b > 0 ? bc(a.type, a.props, a.key, a.ref ? a.ref : null, a.__v) : a) != null) {
      if (a.__ = n, a.__b = n.__b + 1, (f = m[s]) === null || f && a.key == f.key && a.type === f.type)
        m[s] = void 0;
      else
        for (d = 0; d < y; d++) {
          if ((f = m[d]) && a.key == f.key && a.type === f.type) {
            m[d] = void 0;
            break;
          }
          f = null;
        }
      bh(t, a, f = f || hh, i, r, l, c, _, h), u = a.__e, (d = a.ref) && f.ref != d && (p || (p = []), f.ref && p.push(f.ref, null, a), p.push(d, a.__c || u, a)), u != null ? (b == null && (b = u), typeof a.type == "function" && a.__k === f.__k ? a.__d = _ = yh(a, _, t) : _ = vh(t, a, f, m, u, _), typeof n.type == "function" && (n.__d = _)) : _ && f.__e == _ && _.parentNode != t && (_ = or(f));
    }
  for (n.__e = b, s = y; s--; )
    m[s] != null && $h(m[s], m[s]);
  if (p)
    for (s = 0; s < p.length; s++)
      wh(p[s], p[++s], p[++s]);
}
function yh(t, e, n) {
  for (var o, i = t.__k, r = 0; i && r < i.length; r++)
    (o = i[r]) && (o.__ = t, e = typeof o.type == "function" ? yh(o, e, n) : vh(n, o, o, i, o.__e, e));
  return e;
}
function vh(t, e, n, o, i, r) {
  var l, c, _;
  if (e.__d !== void 0)
    l = e.__d, e.__d = void 0;
  else if (n == null || i != r || i.parentNode == null)
    t:
      if (r == null || r.parentNode !== t)
        t.appendChild(i), l = null;
      else {
        for (c = r, _ = 0; (c = c.nextSibling) && _ < o.length; _ += 2)
          if (c == i)
            break t;
        t.insertBefore(i, r), l = r;
      }
  return l !== void 0 ? l : i.nextSibling;
}
function Iy(t, e, n, o, i) {
  var r;
  for (r in n)
    r === "children" || r === "key" || r in e || Vs(t, r, null, n[r], o);
  for (r in e)
    i && typeof e[r] != "function" || r === "children" || r === "key" || r === "value" || r === "checked" || n[r] === e[r] || Vs(t, r, e[r], n[r], o);
}
function v_(t, e, n) {
  e[0] === "-" ? t.setProperty(e, n) : t[e] = n == null ? "" : typeof n != "number" || Hy.test(e) ? n : n + "px";
}
function Vs(t, e, n, o, i) {
  var r;
  t:
    if (e === "style")
      if (typeof n == "string")
        t.style.cssText = n;
      else {
        if (typeof o == "string" && (t.style.cssText = o = ""), o)
          for (e in o)
            n && e in n || v_(t.style, e, "");
        if (n)
          for (e in n)
            o && n[e] === o[e] || v_(t.style, e, n[e]);
      }
    else if (e[0] === "o" && e[1] === "n")
      r = e !== (e = e.replace(/Capture$/, "")), e = e.toLowerCase() in t ? e.toLowerCase().slice(2) : e.slice(2), t.l || (t.l = {}), t.l[e + r] = n, n ? o || t.addEventListener(e, r ? w_ : b_, r) : t.removeEventListener(e, r ? w_ : b_, r);
    else if (e !== "dangerouslySetInnerHTML") {
      if (i)
        e = e.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
      else if (e !== "href" && e !== "list" && e !== "form" && e !== "tabIndex" && e !== "download" && e in t)
        try {
          t[e] = n ?? "";
          break t;
        } catch {
        }
      typeof n == "function" || (n == null || n === !1 && e.indexOf("-") == -1 ? t.removeAttribute(e) : t.setAttribute(e, n));
    }
}
function b_(t) {
  this.l[t.type + !1](ft.event ? ft.event(t) : t);
}
function w_(t) {
  this.l[t.type + !0](ft.event ? ft.event(t) : t);
}
function bh(t, e, n, o, i, r, l, c, _) {
  var h, s, d, f, a, u, b, p, m, y, w, k, C, A, T, v = e.type;
  if (e.constructor !== void 0)
    return null;
  n.__h != null && (_ = n.__h, c = e.__e = n.__e, e.__h = null, r = [c]), (h = ft.__b) && h(e);
  try {
    t:
      if (typeof v == "function") {
        if (p = e.props, m = (h = v.contextType) && o[h.__c], y = h ? m ? m.props.value : h.__ : o, n.__c ? b = (s = e.__c = n.__c).__ = s.__E : ("prototype" in v && v.prototype.render ? e.__c = s = new v(p, y) : (e.__c = s = new ko(p, y), s.constructor = v, s.render = By), m && m.sub(s), s.props = p, s.state || (s.state = {}), s.context = y, s.__n = o, d = s.__d = !0, s.__h = [], s._sb = []), s.__s == null && (s.__s = s.state), v.getDerivedStateFromProps != null && (s.__s == s.state && (s.__s = De({}, s.__s)), De(s.__s, v.getDerivedStateFromProps(p, s.__s))), f = s.props, a = s.state, d)
          v.getDerivedStateFromProps == null && s.componentWillMount != null && s.componentWillMount(), s.componentDidMount != null && s.__h.push(s.componentDidMount);
        else {
          if (v.getDerivedStateFromProps == null && p !== f && s.componentWillReceiveProps != null && s.componentWillReceiveProps(p, y), !s.__e && s.shouldComponentUpdate != null && s.shouldComponentUpdate(p, s.__s, y) === !1 || e.__v === n.__v) {
            for (s.props = p, s.state = s.__s, e.__v !== n.__v && (s.__d = !1), s.__v = e, e.__e = n.__e, e.__k = n.__k, e.__k.forEach(function(x) {
              x && (x.__ = e);
            }), w = 0; w < s._sb.length; w++)
              s.__h.push(s._sb[w]);
            s._sb = [], s.__h.length && l.push(s);
            break t;
          }
          s.componentWillUpdate != null && s.componentWillUpdate(p, s.__s, y), s.componentDidUpdate != null && s.__h.push(function() {
            s.componentDidUpdate(f, a, u);
          });
        }
        if (s.context = y, s.props = p, s.__v = e, s.__P = t, k = ft.__r, C = 0, "prototype" in v && v.prototype.render) {
          for (s.state = s.__s, s.__d = !1, k && k(e), h = s.render(s.props, s.state, s.context), A = 0; A < s._sb.length; A++)
            s.__h.push(s._sb[A]);
          s._sb = [];
        } else
          do
            s.__d = !1, k && k(e), h = s.render(s.props, s.state, s.context), s.state = s.__s;
          while (s.__d && ++C < 25);
        s.state = s.__s, s.getChildContext != null && (o = De(De({}, o), s.getChildContext())), d || s.getSnapshotBeforeUpdate == null || (u = s.getSnapshotBeforeUpdate(f, a)), T = h != null && h.type === _a && h.key == null ? h.props.children : h, gh(t, Array.isArray(T) ? T : [T], e, n, o, i, r, l, c, _), s.base = e.__e, e.__h = null, s.__h.length && l.push(s), b && (s.__E = s.__ = null), s.__e = !1;
      } else
        r == null && e.__v === n.__v ? (e.__k = n.__k, e.__e = n.__e) : e.__e = Fy(n.__e, e, n, o, i, r, l, _);
    (h = ft.diffed) && h(e);
  } catch (x) {
    e.__v = null, (_ || r != null) && (e.__e = c, e.__h = !!_, r[r.indexOf(c)] = null), ft.__e(x, e, n);
  }
}
function Uy(t, e) {
  ft.__c && ft.__c(e, t), t.some(function(n) {
    try {
      t = n.__h, n.__h = [], t.some(function(o) {
        o.call(n);
      });
    } catch (o) {
      ft.__e(o, n.__v);
    }
  });
}
function Fy(t, e, n, o, i, r, l, c) {
  var _, h, s, d = n.props, f = e.props, a = e.type, u = 0;
  if (a === "svg" && (i = !0), r != null) {
    for (; u < r.length; u++)
      if ((_ = r[u]) && "setAttribute" in _ == !!a && (a ? _.localName === a : _.nodeType === 3)) {
        t = _, r[u] = null;
        break;
      }
  }
  if (t == null) {
    if (a === null)
      return document.createTextNode(f);
    t = i ? document.createElementNS("http://www.w3.org/2000/svg", a) : document.createElement(a, f.is && f), r = null, c = !1;
  }
  if (a === null)
    d === f || c && t.data === f || (t.data = f);
  else {
    if (r = r && fh.call(t.childNodes), h = (d = n.props || hh).dangerouslySetInnerHTML, s = f.dangerouslySetInnerHTML, !c) {
      if (r != null)
        for (d = {}, u = 0; u < t.attributes.length; u++)
          d[t.attributes[u].name] = t.attributes[u].value;
      (s || h) && (s && (h && s.__html == h.__html || s.__html === t.innerHTML) || (t.innerHTML = s && s.__html || ""));
    }
    if (Iy(t, f, d, i, c), s)
      e.__k = [];
    else if (u = e.props.children, gh(t, Array.isArray(u) ? u : [u], e, n, o, i && a !== "foreignObject", r, l, r ? r[0] : n.__k && or(n, 0), c), r != null)
      for (u = r.length; u--; )
        r[u] != null && ph(r[u]);
    c || ("value" in f && (u = f.value) !== void 0 && (u !== t.value || a === "progress" && !u || a === "option" && u !== d.value) && Vs(t, "value", u, d.value, !1), "checked" in f && (u = f.checked) !== void 0 && u !== t.checked && Vs(t, "checked", u, d.checked, !1));
  }
  return t;
}
function wh(t, e, n) {
  try {
    typeof t == "function" ? t(e) : t.current = e;
  } catch (o) {
    ft.__e(o, n);
  }
}
function $h(t, e, n) {
  var o, i;
  if (ft.unmount && ft.unmount(t), (o = t.ref) && (o.current && o.current !== t.__e || wh(o, null, e)), (o = t.__c) != null) {
    if (o.componentWillUnmount)
      try {
        o.componentWillUnmount();
      } catch (r) {
        ft.__e(r, e);
      }
    o.base = o.__P = null, t.__c = void 0;
  }
  if (o = t.__k)
    for (i = 0; i < o.length; i++)
      o[i] && $h(o[i], e, n || typeof t.type != "function");
  n || t.__e == null || ph(t.__e), t.__ = t.__e = t.__d = void 0;
}
function By(t, e, n) {
  return this.constructor(t, n);
}
fh = dh.slice, ft = { __e: function(t, e, n, o) {
  for (var i, r, l; e = e.__; )
    if ((i = e.__c) && !i.__)
      try {
        if ((r = i.constructor) && r.getDerivedStateFromError != null && (i.setState(r.getDerivedStateFromError(t)), l = i.__d), i.componentDidCatch != null && (i.componentDidCatch(t, o || {}), l = i.__d), l)
          return i.__E = i;
      } catch (c) {
        t = c;
      }
  throw t;
} }, uh = 0, ko.prototype.setState = function(t, e) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = De({}, this.state), typeof t == "function" && (t = t(De({}, n), this.props)), t && De(n, t), t != null && this.__v && (e && this._sb.push(e), y_(this));
}, ko.prototype.forceUpdate = function(t) {
  this.__v && (this.__e = !0, t && this.__h.push(t), y_(this));
}, ko.prototype.render = _a, $o = [], zs.__r = 0;
var jy = 0;
function kh(t, e, n, o, i) {
  var r, l, c = {};
  for (l in e)
    l == "ref" ? r = e[l] : c[l] = e[l];
  var _ = { type: t, props: c, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: --jy, __source: i, __self: o };
  if (typeof t == "function" && (r = t.defaultProps))
    for (l in r)
      c[l] === void 0 && (c[l] = r[l]);
  return ft.vnode && ft.vnode(_), _;
}
var Jl, nt, xh, xo, $_, Ys = {}, Sh = [], zy = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function Ne(t, e) {
  for (var n in e)
    t[n] = e[n];
  return t;
}
function Ch(t) {
  var e = t.parentNode;
  e && e.removeChild(t);
}
function Eh(t, e, n) {
  var o, i, r, l = {};
  for (r in e)
    r == "key" ? o = e[r] : r == "ref" ? i = e[r] : l[r] = e[r];
  if (arguments.length > 2 && (l.children = arguments.length > 3 ? Jl.call(arguments, 2) : n), typeof t == "function" && t.defaultProps != null)
    for (r in t.defaultProps)
      l[r] === void 0 && (l[r] = t.defaultProps[r]);
  return $s(t, l, o, i, null);
}
function $s(t, e, n, o, i) {
  var r = { type: t, props: e, key: n, ref: o, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: i ?? ++xh };
  return i == null && nt.vnode != null && nt.vnode(r), r;
}
function Zl(t) {
  return t.children;
}
function ks(t, e) {
  this.props = t, this.context = e;
}
function rr(t, e) {
  if (e == null)
    return t.__ ? rr(t.__, t.__.__k.indexOf(t) + 1) : null;
  for (var n; e < t.__k.length; e++)
    if ((n = t.__k[e]) != null && n.__e != null)
      return n.__e;
  return typeof t.type == "function" ? rr(t) : null;
}
function Th(t) {
  var e, n;
  if ((t = t.__) != null && t.__c != null) {
    for (t.__e = t.__c.base = null, e = 0; e < t.__k.length; e++)
      if ((n = t.__k[e]) != null && n.__e != null) {
        t.__e = t.__c.base = n.__e;
        break;
      }
    return Th(t);
  }
}
function k_(t) {
  (!t.__d && (t.__d = !0) && xo.push(t) && !qs.__r++ || $_ !== nt.debounceRendering) && (($_ = nt.debounceRendering) || setTimeout)(qs);
}
function qs() {
  for (var t; qs.__r = xo.length; )
    t = xo.sort(function(e, n) {
      return e.__v.__b - n.__v.__b;
    }), xo = [], t.some(function(e) {
      var n, o, i, r, l, c;
      e.__d && (l = (r = (n = e).__v).__e, (c = n.__P) && (o = [], (i = Ne({}, r)).__v = r.__v + 1, fa(c, r, i, n.__n, c.ownerSVGElement !== void 0, r.__h != null ? [l] : null, o, l ?? rr(r), r.__h), Rh(o, r), r.__e != l && Th(r)));
    });
}
function Ah(t, e, n, o, i, r, l, c, _, h) {
  var s, d, f, a, u, b, p, m = o && o.__k || Sh, y = m.length;
  for (n.__k = [], s = 0; s < e.length; s++)
    if ((a = n.__k[s] = (a = e[s]) == null || typeof a == "boolean" ? null : typeof a == "string" || typeof a == "number" || typeof a == "bigint" ? $s(null, a, null, null, a) : Array.isArray(a) ? $s(Zl, { children: a }, null, null, null) : a.__b > 0 ? $s(a.type, a.props, a.key, a.ref ? a.ref : null, a.__v) : a) != null) {
      if (a.__ = n, a.__b = n.__b + 1, (f = m[s]) === null || f && a.key == f.key && a.type === f.type)
        m[s] = void 0;
      else
        for (d = 0; d < y; d++) {
          if ((f = m[d]) && a.key == f.key && a.type === f.type) {
            m[d] = void 0;
            break;
          }
          f = null;
        }
      fa(t, a, f = f || Ys, i, r, l, c, _, h), u = a.__e, (d = a.ref) && f.ref != d && (p || (p = []), f.ref && p.push(f.ref, null, a), p.push(d, a.__c || u, a)), u != null ? (b == null && (b = u), typeof a.type == "function" && a.__k === f.__k ? a.__d = _ = Lh(a, _, t) : _ = Mh(t, a, f, m, u, _), typeof n.type == "function" && (n.__d = _)) : _ && f.__e == _ && _.parentNode != t && (_ = rr(f));
    }
  for (n.__e = b, s = y; s--; )
    m[s] != null && Nh(m[s], m[s]);
  if (p)
    for (s = 0; s < p.length; s++)
      Dh(p[s], p[++s], p[++s]);
}
function Lh(t, e, n) {
  for (var o, i = t.__k, r = 0; i && r < i.length; r++)
    (o = i[r]) && (o.__ = t, e = typeof o.type == "function" ? Lh(o, e, n) : Mh(n, o, o, i, o.__e, e));
  return e;
}
function Mh(t, e, n, o, i, r) {
  var l, c, _;
  if (e.__d !== void 0)
    l = e.__d, e.__d = void 0;
  else if (n == null || i != r || i.parentNode == null)
    t:
      if (r == null || r.parentNode !== t)
        t.appendChild(i), l = null;
      else {
        for (c = r, _ = 0; (c = c.nextSibling) && _ < o.length; _ += 2)
          if (c == i)
            break t;
        t.insertBefore(i, r), l = r;
      }
  return l !== void 0 ? l : i.nextSibling;
}
function Vy(t, e, n, o, i) {
  var r;
  for (r in n)
    r === "children" || r === "key" || r in e || Gs(t, r, null, n[r], o);
  for (r in e)
    i && typeof e[r] != "function" || r === "children" || r === "key" || r === "value" || r === "checked" || n[r] === e[r] || Gs(t, r, e[r], n[r], o);
}
function x_(t, e, n) {
  e[0] === "-" ? t.setProperty(e, n) : t[e] = n == null ? "" : typeof n != "number" || zy.test(e) ? n : n + "px";
}
function Gs(t, e, n, o, i) {
  var r;
  t:
    if (e === "style")
      if (typeof n == "string")
        t.style.cssText = n;
      else {
        if (typeof o == "string" && (t.style.cssText = o = ""), o)
          for (e in o)
            n && e in n || x_(t.style, e, "");
        if (n)
          for (e in n)
            o && n[e] === o[e] || x_(t.style, e, n[e]);
      }
    else if (e[0] === "o" && e[1] === "n")
      r = e !== (e = e.replace(/Capture$/, "")), e = e.toLowerCase() in t ? e.toLowerCase().slice(2) : e.slice(2), t.l || (t.l = {}), t.l[e + r] = n, n ? o || t.addEventListener(e, r ? C_ : S_, r) : t.removeEventListener(e, r ? C_ : S_, r);
    else if (e !== "dangerouslySetInnerHTML") {
      if (i)
        e = e.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
      else if (e !== "href" && e !== "list" && e !== "form" && e !== "tabIndex" && e !== "download" && e in t)
        try {
          t[e] = n ?? "";
          break t;
        } catch {
        }
      typeof n == "function" || (n == null || n === !1 && e.indexOf("-") == -1 ? t.removeAttribute(e) : t.setAttribute(e, n));
    }
}
function S_(t) {
  this.l[t.type + !1](nt.event ? nt.event(t) : t);
}
function C_(t) {
  this.l[t.type + !0](nt.event ? nt.event(t) : t);
}
function fa(t, e, n, o, i, r, l, c, _) {
  var h, s, d, f, a, u, b, p, m, y, w, k, C, A, T, v = e.type;
  if (e.constructor !== void 0)
    return null;
  n.__h != null && (_ = n.__h, c = e.__e = n.__e, e.__h = null, r = [c]), (h = nt.__b) && h(e);
  try {
    t:
      if (typeof v == "function") {
        if (p = e.props, m = (h = v.contextType) && o[h.__c], y = h ? m ? m.props.value : h.__ : o, n.__c ? b = (s = e.__c = n.__c).__ = s.__E : ("prototype" in v && v.prototype.render ? e.__c = s = new v(p, y) : (e.__c = s = new ks(p, y), s.constructor = v, s.render = qy), m && m.sub(s), s.props = p, s.state || (s.state = {}), s.context = y, s.__n = o, d = s.__d = !0, s.__h = [], s._sb = []), s.__s == null && (s.__s = s.state), v.getDerivedStateFromProps != null && (s.__s == s.state && (s.__s = Ne({}, s.__s)), Ne(s.__s, v.getDerivedStateFromProps(p, s.__s))), f = s.props, a = s.state, d)
          v.getDerivedStateFromProps == null && s.componentWillMount != null && s.componentWillMount(), s.componentDidMount != null && s.__h.push(s.componentDidMount);
        else {
          if (v.getDerivedStateFromProps == null && p !== f && s.componentWillReceiveProps != null && s.componentWillReceiveProps(p, y), !s.__e && s.shouldComponentUpdate != null && s.shouldComponentUpdate(p, s.__s, y) === !1 || e.__v === n.__v) {
            for (s.props = p, s.state = s.__s, e.__v !== n.__v && (s.__d = !1), s.__v = e, e.__e = n.__e, e.__k = n.__k, e.__k.forEach(function(x) {
              x && (x.__ = e);
            }), w = 0; w < s._sb.length; w++)
              s.__h.push(s._sb[w]);
            s._sb = [], s.__h.length && l.push(s);
            break t;
          }
          s.componentWillUpdate != null && s.componentWillUpdate(p, s.__s, y), s.componentDidUpdate != null && s.__h.push(function() {
            s.componentDidUpdate(f, a, u);
          });
        }
        if (s.context = y, s.props = p, s.__v = e, s.__P = t, k = nt.__r, C = 0, "prototype" in v && v.prototype.render) {
          for (s.state = s.__s, s.__d = !1, k && k(e), h = s.render(s.props, s.state, s.context), A = 0; A < s._sb.length; A++)
            s.__h.push(s._sb[A]);
          s._sb = [];
        } else
          do
            s.__d = !1, k && k(e), h = s.render(s.props, s.state, s.context), s.state = s.__s;
          while (s.__d && ++C < 25);
        s.state = s.__s, s.getChildContext != null && (o = Ne(Ne({}, o), s.getChildContext())), d || s.getSnapshotBeforeUpdate == null || (u = s.getSnapshotBeforeUpdate(f, a)), T = h != null && h.type === Zl && h.key == null ? h.props.children : h, Ah(t, Array.isArray(T) ? T : [T], e, n, o, i, r, l, c, _), s.base = e.__e, e.__h = null, s.__h.length && l.push(s), b && (s.__E = s.__ = null), s.__e = !1;
      } else
        r == null && e.__v === n.__v ? (e.__k = n.__k, e.__e = n.__e) : e.__e = Yy(n.__e, e, n, o, i, r, l, _);
    (h = nt.diffed) && h(e);
  } catch (x) {
    e.__v = null, (_ || r != null) && (e.__e = c, e.__h = !!_, r[r.indexOf(c)] = null), nt.__e(x, e, n);
  }
}
function Rh(t, e) {
  nt.__c && nt.__c(e, t), t.some(function(n) {
    try {
      t = n.__h, n.__h = [], t.some(function(o) {
        o.call(n);
      });
    } catch (o) {
      nt.__e(o, n.__v);
    }
  });
}
function Yy(t, e, n, o, i, r, l, c) {
  var _, h, s, d = n.props, f = e.props, a = e.type, u = 0;
  if (a === "svg" && (i = !0), r != null) {
    for (; u < r.length; u++)
      if ((_ = r[u]) && "setAttribute" in _ == !!a && (a ? _.localName === a : _.nodeType === 3)) {
        t = _, r[u] = null;
        break;
      }
  }
  if (t == null) {
    if (a === null)
      return document.createTextNode(f);
    t = i ? document.createElementNS("http://www.w3.org/2000/svg", a) : document.createElement(a, f.is && f), r = null, c = !1;
  }
  if (a === null)
    d === f || c && t.data === f || (t.data = f);
  else {
    if (r = r && Jl.call(t.childNodes), h = (d = n.props || Ys).dangerouslySetInnerHTML, s = f.dangerouslySetInnerHTML, !c) {
      if (r != null)
        for (d = {}, u = 0; u < t.attributes.length; u++)
          d[t.attributes[u].name] = t.attributes[u].value;
      (s || h) && (s && (h && s.__html == h.__html || s.__html === t.innerHTML) || (t.innerHTML = s && s.__html || ""));
    }
    if (Vy(t, f, d, i, c), s)
      e.__k = [];
    else if (u = e.props.children, Ah(t, Array.isArray(u) ? u : [u], e, n, o, i && a !== "foreignObject", r, l, r ? r[0] : n.__k && rr(n, 0), c), r != null)
      for (u = r.length; u--; )
        r[u] != null && Ch(r[u]);
    c || ("value" in f && (u = f.value) !== void 0 && (u !== t.value || a === "progress" && !u || a === "option" && u !== d.value) && Gs(t, "value", u, d.value, !1), "checked" in f && (u = f.checked) !== void 0 && u !== t.checked && Gs(t, "checked", u, d.checked, !1));
  }
  return t;
}
function Dh(t, e, n) {
  try {
    typeof t == "function" ? t(e) : t.current = e;
  } catch (o) {
    nt.__e(o, n);
  }
}
function Nh(t, e, n) {
  var o, i;
  if (nt.unmount && nt.unmount(t), (o = t.ref) && (o.current && o.current !== t.__e || Dh(o, null, e)), (o = t.__c) != null) {
    if (o.componentWillUnmount)
      try {
        o.componentWillUnmount();
      } catch (r) {
        nt.__e(r, e);
      }
    o.base = o.__P = null, t.__c = void 0;
  }
  if (o = t.__k)
    for (i = 0; i < o.length; i++)
      o[i] && Nh(o[i], e, n || typeof t.type != "function");
  n || t.__e == null || Ch(t.__e), t.__ = t.__e = t.__d = void 0;
}
function qy(t, e, n) {
  return this.constructor(t, n);
}
function Gy(t, e, n) {
  var o, i, r;
  nt.__ && nt.__(t, e), i = (o = typeof n == "function") ? null : n && n.__k || e.__k, r = [], fa(e, t = (!o && n || e).__k = Eh(Zl, null, [t]), i || Ys, Ys, e.ownerSVGElement !== void 0, !o && n ? [n] : i ? null : e.firstChild ? Jl.call(e.childNodes) : null, r, !o && n ? n : i ? i.__e : e.firstChild, o), Rh(r, t);
}
Jl = Sh.slice, nt = { __e: function(t, e, n, o) {
  for (var i, r, l; e = e.__; )
    if ((i = e.__c) && !i.__)
      try {
        if ((r = i.constructor) && r.getDerivedStateFromError != null && (i.setState(r.getDerivedStateFromError(t)), l = i.__d), i.componentDidCatch != null && (i.componentDidCatch(t, o || {}), l = i.__d), l)
          return i.__E = i;
      } catch (c) {
        t = c;
      }
  throw t;
} }, xh = 0, ks.prototype.setState = function(t, e) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = Ne({}, this.state), typeof t == "function" && (t = t(Ne({}, n), this.props)), t && Ne(n, t), t != null && this.__v && (e && this._sb.push(e), k_(this));
}, ks.prototype.forceUpdate = function(t) {
  this.__v && (this.__e = !0, t && this.__h.push(t), k_(this));
}, ks.prototype.render = Zl, xo = [], qs.__r = 0;
function Xy(t) {
  return t.button === 2;
}
var Ky = 0;
function Jy(t, e, n, o, i) {
  var r, l, c = {};
  for (l in e)
    l == "ref" ? r = e[l] : c[l] = e[l];
  var _ = { type: t, props: c, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: --Ky, __source: i, __self: o };
  if (typeof t == "function" && (r = t.defaultProps))
    for (l in r)
      c[l] === void 0 && (c[l] = r[l]);
  return nt.vnode && nt.vnode(_), _;
}
function ua(t) {
  return t.split("-")[1];
}
function Ph(t) {
  return t === "y" ? "height" : "width";
}
function sr(t) {
  return t.split("-")[0];
}
function Oh(t) {
  return ["top", "bottom"].includes(sr(t)) ? "x" : "y";
}
function E_(t, e, n) {
  let {
    reference: o,
    floating: i
  } = t;
  const r = o.x + o.width / 2 - i.width / 2, l = o.y + o.height / 2 - i.height / 2, c = Oh(e), _ = Ph(c), h = o[_] / 2 - i[_] / 2, s = sr(e), d = c === "x";
  let f;
  switch (s) {
    case "top":
      f = {
        x: r,
        y: o.y - i.height
      };
      break;
    case "bottom":
      f = {
        x: r,
        y: o.y + o.height
      };
      break;
    case "right":
      f = {
        x: o.x + o.width,
        y: l
      };
      break;
    case "left":
      f = {
        x: o.x - i.width,
        y: l
      };
      break;
    default:
      f = {
        x: o.x,
        y: o.y
      };
  }
  switch (ua(e)) {
    case "start":
      f[c] -= h * (n && d ? -1 : 1);
      break;
    case "end":
      f[c] += h * (n && d ? -1 : 1);
      break;
  }
  return f;
}
const Zy = async (t, e, n) => {
  const {
    placement: o = "bottom",
    strategy: i = "absolute",
    middleware: r = [],
    platform: l
  } = n, c = r.filter(Boolean), _ = await (l.isRTL == null ? void 0 : l.isRTL(e));
  let h = await l.getElementRects({
    reference: t,
    floating: e,
    strategy: i
  }), {
    x: s,
    y: d
  } = E_(h, o, _), f = o, a = {}, u = 0;
  for (let b = 0; b < c.length; b++) {
    const {
      name: p,
      fn: m
    } = c[b], {
      x: y,
      y: w,
      data: k,
      reset: C
    } = await m({
      x: s,
      y: d,
      initialPlacement: o,
      placement: f,
      strategy: i,
      middlewareData: a,
      rects: h,
      platform: l,
      elements: {
        reference: t,
        floating: e
      }
    });
    if (s = y ?? s, d = w ?? d, a = {
      ...a,
      [p]: {
        ...a[p],
        ...k
      }
    }, C && u <= 50) {
      u++, typeof C == "object" && (C.placement && (f = C.placement), C.rects && (h = C.rects === !0 ? await l.getElementRects({
        reference: t,
        floating: e,
        strategy: i
      }) : C.rects), {
        x: s,
        y: d
      } = E_(h, f, _)), b = -1;
      continue;
    }
  }
  return {
    x: s,
    y: d,
    placement: f,
    strategy: i,
    middlewareData: a
  };
};
function Qy(t) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...t
  };
}
function tv(t) {
  return typeof t != "number" ? Qy(t) : {
    top: t,
    right: t,
    bottom: t,
    left: t
  };
}
function Xs(t) {
  return {
    ...t,
    top: t.y,
    left: t.x,
    right: t.x + t.width,
    bottom: t.y + t.height
  };
}
async function ev(t, e) {
  var n;
  e === void 0 && (e = {});
  const {
    x: o,
    y: i,
    platform: r,
    rects: l,
    elements: c,
    strategy: _
  } = t, {
    boundary: h = "clippingAncestors",
    rootBoundary: s = "viewport",
    elementContext: d = "floating",
    altBoundary: f = !1,
    padding: a = 0
  } = e, u = tv(a), p = c[f ? d === "floating" ? "reference" : "floating" : d], m = Xs(await r.getClippingRect({
    element: (n = await (r.isElement == null ? void 0 : r.isElement(p))) == null || n ? p : p.contextElement || await (r.getDocumentElement == null ? void 0 : r.getDocumentElement(c.floating)),
    boundary: h,
    rootBoundary: s,
    strategy: _
  })), y = d === "floating" ? {
    ...l.floating,
    x: o,
    y: i
  } : l.reference, w = await (r.getOffsetParent == null ? void 0 : r.getOffsetParent(c.floating)), k = await (r.isElement == null ? void 0 : r.isElement(w)) ? await (r.getScale == null ? void 0 : r.getScale(w)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, C = Xs(r.convertOffsetParentRelativeRectToViewportRelativeRect ? await r.convertOffsetParentRelativeRectToViewportRelativeRect({
    rect: y,
    offsetParent: w,
    strategy: _
  }) : y);
  return {
    top: (m.top - C.top + u.top) / k.y,
    bottom: (C.bottom - m.bottom + u.bottom) / k.y,
    left: (m.left - C.left + u.left) / k.x,
    right: (C.right - m.right + u.right) / k.x
  };
}
const nv = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function Ks(t) {
  return t.replace(/left|right|bottom|top/g, (e) => nv[e]);
}
function ov(t, e, n) {
  n === void 0 && (n = !1);
  const o = ua(t), i = Oh(t), r = Ph(i);
  let l = i === "x" ? o === (n ? "end" : "start") ? "right" : "left" : o === "start" ? "bottom" : "top";
  return e.reference[r] > e.floating[r] && (l = Ks(l)), {
    main: l,
    cross: Ks(l)
  };
}
const rv = {
  start: "end",
  end: "start"
};
function Wc(t) {
  return t.replace(/start|end/g, (e) => rv[e]);
}
function sv(t) {
  const e = Ks(t);
  return [Wc(t), e, Wc(e)];
}
function iv(t, e, n) {
  const o = ["left", "right"], i = ["right", "left"], r = ["top", "bottom"], l = ["bottom", "top"];
  switch (t) {
    case "top":
    case "bottom":
      return n ? e ? i : o : e ? o : i;
    case "left":
    case "right":
      return e ? r : l;
    default:
      return [];
  }
}
function lv(t, e, n, o) {
  const i = ua(t);
  let r = iv(sr(t), n === "start", o);
  return i && (r = r.map((l) => l + "-" + i), e && (r = r.concat(r.map(Wc)))), r;
}
const Hh = function(t) {
  return t === void 0 && (t = {}), {
    name: "flip",
    options: t,
    async fn(e) {
      var n;
      const {
        placement: o,
        middlewareData: i,
        rects: r,
        initialPlacement: l,
        platform: c,
        elements: _
      } = e, {
        mainAxis: h = !0,
        crossAxis: s = !0,
        fallbackPlacements: d,
        fallbackStrategy: f = "bestFit",
        fallbackAxisSideDirection: a = "none",
        flipAlignment: u = !0,
        ...b
      } = t, p = sr(o), m = sr(l) === l, y = await (c.isRTL == null ? void 0 : c.isRTL(_.floating)), w = d || (m || !u ? [Ks(l)] : sv(l));
      !d && a !== "none" && w.push(...lv(l, u, a, y));
      const k = [l, ...w], C = await ev(e, b), A = [];
      let T = ((n = i.flip) == null ? void 0 : n.overflows) || [];
      if (h && A.push(C[p]), s) {
        const {
          main: R,
          cross: V
        } = ov(o, r, y);
        A.push(C[R], C[V]);
      }
      if (T = [...T, {
        placement: o,
        overflows: A
      }], !A.every((R) => R <= 0)) {
        var v;
        const R = (((v = i.flip) == null ? void 0 : v.index) || 0) + 1, V = k[R];
        if (V)
          return {
            data: {
              index: R,
              overflows: T
            },
            reset: {
              placement: V
            }
          };
        let B = "bottom";
        switch (f) {
          case "bestFit": {
            var x;
            const D = (x = T.map((S) => [S, S.overflows.filter(($) => $ > 0).reduce(($, N) => $ + N, 0)]).sort((S, $) => S[1] - $[1])[0]) == null ? void 0 : x[0].placement;
            D && (B = D);
            break;
          }
          case "initialPlacement":
            B = l;
            break;
        }
        if (o !== B)
          return {
            reset: {
              placement: B
            }
          };
      }
      return {};
    }
  };
};
function Ut(t) {
  var e;
  return ((e = t.ownerDocument) == null ? void 0 : e.defaultView) || window;
}
function se(t) {
  return Ut(t).getComputedStyle(t);
}
function qe(t) {
  return Ih(t) ? (t.nodeName || "").toLowerCase() : "";
}
let as;
function Wh() {
  if (as)
    return as;
  const t = navigator.userAgentData;
  return t && Array.isArray(t.brands) ? (as = t.brands.map((e) => e.brand + "/" + e.version).join(" "), as) : navigator.userAgent;
}
function ye(t) {
  return t instanceof Ut(t).HTMLElement;
}
function qt(t) {
  return t instanceof Ut(t).Element;
}
function Ih(t) {
  return t instanceof Ut(t).Node;
}
function T_(t) {
  if (typeof ShadowRoot > "u")
    return !1;
  const e = Ut(t).ShadowRoot;
  return t instanceof e || t instanceof ShadowRoot;
}
function Ql(t) {
  const {
    overflow: e,
    overflowX: n,
    overflowY: o,
    display: i
  } = se(t);
  return /auto|scroll|overlay|hidden|clip/.test(e + o + n) && !["inline", "contents"].includes(i);
}
function cv(t) {
  return ["table", "td", "th"].includes(qe(t));
}
function ha(t) {
  const e = /firefox/i.test(Wh()), n = se(t), o = n.backdropFilter || n.WebkitBackdropFilter;
  return n.transform !== "none" || n.perspective !== "none" || (o ? o !== "none" : !1) || e && n.willChange === "filter" || e && (n.filter ? n.filter !== "none" : !1) || ["transform", "perspective"].some((i) => n.willChange.includes(i)) || ["paint", "layout", "strict", "content"].some(
    // TS 4.1 compat
    (i) => {
      const r = n.contain;
      return r != null ? r.includes(i) : !1;
    }
  );
}
function Uh() {
  return !/^((?!chrome|android).)*safari/i.test(Wh());
}
function da(t) {
  return ["html", "body", "#document"].includes(qe(t));
}
const A_ = Math.min, So = Math.max, Js = Math.round;
function Fh(t) {
  const e = se(t);
  let n = parseFloat(e.width), o = parseFloat(e.height);
  const i = t.offsetWidth, r = t.offsetHeight, l = Js(n) !== i || Js(o) !== r;
  return l && (n = i, o = r), {
    width: n,
    height: o,
    fallback: l
  };
}
function Bh(t) {
  return qt(t) ? t : t.contextElement;
}
const jh = {
  x: 1,
  y: 1
};
function bn(t) {
  const e = Bh(t);
  if (!ye(e))
    return jh;
  const n = e.getBoundingClientRect(), {
    width: o,
    height: i,
    fallback: r
  } = Fh(e);
  let l = (r ? Js(n.width) : n.width) / o, c = (r ? Js(n.height) : n.height) / i;
  return (!l || !Number.isFinite(l)) && (l = 1), (!c || !Number.isFinite(c)) && (c = 1), {
    x: l,
    y: c
  };
}
function dn(t, e, n, o) {
  var i, r;
  e === void 0 && (e = !1), n === void 0 && (n = !1);
  const l = t.getBoundingClientRect(), c = Bh(t);
  let _ = jh;
  e && (o ? qt(o) && (_ = bn(o)) : _ = bn(t));
  const h = c ? Ut(c) : window, s = !Uh() && n;
  let d = (l.left + (s && ((i = h.visualViewport) == null ? void 0 : i.offsetLeft) || 0)) / _.x, f = (l.top + (s && ((r = h.visualViewport) == null ? void 0 : r.offsetTop) || 0)) / _.y, a = l.width / _.x, u = l.height / _.y;
  if (c) {
    const b = Ut(c), p = o && qt(o) ? Ut(o) : o;
    let m = b.frameElement;
    for (; m && o && p !== b; ) {
      const y = bn(m), w = m.getBoundingClientRect(), k = getComputedStyle(m);
      w.x += (m.clientLeft + parseFloat(k.paddingLeft)) * y.x, w.y += (m.clientTop + parseFloat(k.paddingTop)) * y.y, d *= y.x, f *= y.y, a *= y.x, u *= y.y, d += w.x, f += w.y, m = Ut(m).frameElement;
    }
  }
  return {
    width: a,
    height: u,
    top: f,
    right: d + a,
    bottom: f + u,
    left: d,
    x: d,
    y: f
  };
}
function Je(t) {
  return ((Ih(t) ? t.ownerDocument : t.document) || window.document).documentElement;
}
function tc(t) {
  return qt(t) ? {
    scrollLeft: t.scrollLeft,
    scrollTop: t.scrollTop
  } : {
    scrollLeft: t.pageXOffset,
    scrollTop: t.pageYOffset
  };
}
function zh(t) {
  return dn(Je(t)).left + tc(t).scrollLeft;
}
function av(t, e, n) {
  const o = ye(e), i = Je(e), r = dn(t, !0, n === "fixed", e);
  let l = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const c = {
    x: 0,
    y: 0
  };
  if (o || !o && n !== "fixed")
    if ((qe(e) !== "body" || Ql(i)) && (l = tc(e)), ye(e)) {
      const _ = dn(e, !0);
      c.x = _.x + e.clientLeft, c.y = _.y + e.clientTop;
    } else
      i && (c.x = zh(i));
  return {
    x: r.left + l.scrollLeft - c.x,
    y: r.top + l.scrollTop - c.y,
    width: r.width,
    height: r.height
  };
}
function ir(t) {
  if (qe(t) === "html")
    return t;
  const e = (
    // Step into the shadow DOM of the parent of a slotted node
    t.assignedSlot || // DOM Element detected
    t.parentNode || // ShadowRoot detected
    (T_(t) ? t.host : null) || // Fallback
    Je(t)
  );
  return T_(e) ? e.host : e;
}
function L_(t) {
  return !ye(t) || se(t).position === "fixed" ? null : t.offsetParent;
}
function _v(t) {
  let e = ir(t);
  for (; ye(e) && !da(e); ) {
    if (ha(e))
      return e;
    e = ir(e);
  }
  return null;
}
function M_(t) {
  const e = Ut(t);
  let n = L_(t);
  for (; n && cv(n) && se(n).position === "static"; )
    n = L_(n);
  return n && (qe(n) === "html" || qe(n) === "body" && se(n).position === "static" && !ha(n)) ? e : n || _v(t) || e;
}
function fv(t) {
  return Fh(t);
}
function uv(t) {
  let {
    rect: e,
    offsetParent: n,
    strategy: o
  } = t;
  const i = ye(n), r = Je(n);
  if (n === r)
    return e;
  let l = {
    scrollLeft: 0,
    scrollTop: 0
  }, c = {
    x: 1,
    y: 1
  };
  const _ = {
    x: 0,
    y: 0
  };
  if ((i || !i && o !== "fixed") && ((qe(n) !== "body" || Ql(r)) && (l = tc(n)), ye(n))) {
    const h = dn(n);
    c = bn(n), _.x = h.x + n.clientLeft, _.y = h.y + n.clientTop;
  }
  return {
    width: e.width * c.x,
    height: e.height * c.y,
    x: e.x * c.x - l.scrollLeft * c.x + _.x,
    y: e.y * c.y - l.scrollTop * c.y + _.y
  };
}
function hv(t, e) {
  const n = Ut(t), o = Je(t), i = n.visualViewport;
  let r = o.clientWidth, l = o.clientHeight, c = 0, _ = 0;
  if (i) {
    r = i.width, l = i.height;
    const h = Uh();
    (h || !h && e === "fixed") && (c = i.offsetLeft, _ = i.offsetTop);
  }
  return {
    width: r,
    height: l,
    x: c,
    y: _
  };
}
function dv(t) {
  var e;
  const n = Je(t), o = tc(t), i = (e = t.ownerDocument) == null ? void 0 : e.body, r = So(n.scrollWidth, n.clientWidth, i ? i.scrollWidth : 0, i ? i.clientWidth : 0), l = So(n.scrollHeight, n.clientHeight, i ? i.scrollHeight : 0, i ? i.clientHeight : 0);
  let c = -o.scrollLeft + zh(t);
  const _ = -o.scrollTop;
  return se(i || n).direction === "rtl" && (c += So(n.clientWidth, i ? i.clientWidth : 0) - r), {
    width: r,
    height: l,
    x: c,
    y: _
  };
}
function Vh(t) {
  const e = ir(t);
  return da(e) ? t.ownerDocument.body : ye(e) && Ql(e) ? e : Vh(e);
}
function Co(t, e) {
  var n;
  e === void 0 && (e = []);
  const o = Vh(t), i = o === ((n = t.ownerDocument) == null ? void 0 : n.body), r = Ut(o);
  return i ? e.concat(r, r.visualViewport || [], Ql(o) ? o : []) : e.concat(o, Co(o));
}
function pv(t, e) {
  const n = dn(t, !0, e === "fixed"), o = n.top + t.clientTop, i = n.left + t.clientLeft, r = ye(t) ? bn(t) : {
    x: 1,
    y: 1
  }, l = t.clientWidth * r.x, c = t.clientHeight * r.y, _ = i * r.x, h = o * r.y;
  return {
    top: h,
    left: _,
    right: _ + l,
    bottom: h + c,
    x: _,
    y: h,
    width: l,
    height: c
  };
}
function R_(t, e, n) {
  return e === "viewport" ? Xs(hv(t, n)) : qt(e) ? pv(e, n) : Xs(dv(Je(t)));
}
function mv(t, e) {
  const n = e.get(t);
  if (n)
    return n;
  let o = Co(t).filter((c) => qt(c) && qe(c) !== "body"), i = null;
  const r = se(t).position === "fixed";
  let l = r ? ir(t) : t;
  for (; qt(l) && !da(l); ) {
    const c = se(l), _ = ha(l);
    (r ? !_ && !i : !_ && c.position === "static" && !!i && ["absolute", "fixed"].includes(i.position)) ? o = o.filter((s) => s !== l) : i = c, l = ir(l);
  }
  return e.set(t, o), o;
}
function gv(t) {
  let {
    element: e,
    boundary: n,
    rootBoundary: o,
    strategy: i
  } = t;
  const l = [...n === "clippingAncestors" ? mv(e, this._c) : [].concat(n), o], c = l[0], _ = l.reduce((h, s) => {
    const d = R_(e, s, i);
    return h.top = So(d.top, h.top), h.right = A_(d.right, h.right), h.bottom = A_(d.bottom, h.bottom), h.left = So(d.left, h.left), h;
  }, R_(e, c, i));
  return {
    width: _.right - _.left,
    height: _.bottom - _.top,
    x: _.left,
    y: _.top
  };
}
const yv = {
  getClippingRect: gv,
  convertOffsetParentRelativeRectToViewportRelativeRect: uv,
  isElement: qt,
  getDimensions: fv,
  getOffsetParent: M_,
  getDocumentElement: Je,
  getScale: bn,
  async getElementRects(t) {
    let {
      reference: e,
      floating: n,
      strategy: o
    } = t;
    const i = this.getOffsetParent || M_, r = this.getDimensions;
    return {
      reference: av(e, await i(n), o),
      floating: {
        x: 0,
        y: 0,
        ...await r(n)
      }
    };
  },
  getClientRects: (t) => Array.from(t.getClientRects()),
  isRTL: (t) => se(t).direction === "rtl"
};
function vv(t, e, n, o) {
  o === void 0 && (o = {});
  const {
    ancestorScroll: i = !0,
    ancestorResize: r = !0,
    elementResize: l = !0,
    animationFrame: c = !1
  } = o, _ = i && !c, h = _ || r ? [...qt(t) ? Co(t) : t.contextElement ? Co(t.contextElement) : [], ...Co(e)] : [];
  h.forEach((u) => {
    _ && u.addEventListener("scroll", n, {
      passive: !0
    }), r && u.addEventListener("resize", n);
  });
  let s = null;
  if (l) {
    let u = !0;
    s = new ResizeObserver(() => {
      u || n(), u = !1;
    }), qt(t) && !c && s.observe(t), !qt(t) && t.contextElement && !c && s.observe(t.contextElement), s.observe(e);
  }
  let d, f = c ? dn(t) : null;
  c && a();
  function a() {
    const u = dn(t);
    f && (u.x !== f.x || u.y !== f.y || u.width !== f.width || u.height !== f.height) && n(), f = u, d = requestAnimationFrame(a);
  }
  return n(), () => {
    var u;
    h.forEach((b) => {
      _ && b.removeEventListener("scroll", n), r && b.removeEventListener("resize", n);
    }), (u = s) == null || u.disconnect(), s = null, c && cancelAnimationFrame(d);
  };
}
const Yh = (t, e, n) => {
  const o = /* @__PURE__ */ new Map(), i = {
    platform: yv,
    ...n
  }, r = {
    ...i.platform,
    _c: o
  };
  return Zy(t, e, {
    ...i,
    platform: r
  });
};
let bv = class extends ca {
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
      middleware: [Hh()],
      placement: "right-start"
    };
  }
  _getPopperElement() {
    var e;
    return (e = this.ref.current) == null ? void 0 : e.parentElement;
  }
  _createPopper() {
    const e = this._getPopperOptions();
    this.ref.current && Yh(this._getPopperElement(), this.ref.current, e).then(({ x: n, y: o }) => {
      Object.assign(this.ref.current.style, {
        left: `${n}px`,
        top: `${o}px`
      });
    });
  }
  afterRender(e) {
    super.afterRender(e), this.props.controlledMenu && this._createPopper();
  }
  renderToggleIcon() {
    return /* @__PURE__ */ Jy("span", { class: "contextmenu-toggle-icon caret-right" });
  }
};
var ke, En, xr, Sr, Oi, qh, Hi, Gh;
class Rt extends Jt {
  constructor() {
    super(...arguments);
    E(this, Oi);
    E(this, Hi);
    E(this, ke, void 0);
    E(this, En, void 0);
    E(this, xr, void 0);
    M(this, "arrowEl");
    E(this, Sr, void 0);
  }
  get isShown() {
    var n;
    return (n = g(this, ke)) == null ? void 0 : n.classList.contains(this.constructor.CLASS_SHOW);
  }
  get menu() {
    return g(this, ke) || this._ensureMenu();
  }
  get trigger() {
    return g(this, xr) || this.element;
  }
  get isDynamic() {
    return this.options.items || this.options.menu;
  }
  init() {
    const { element: n } = this;
    n !== document.body && !n.hasAttribute("data-toggle") && n.setAttribute("data-toggle", "contextmenu");
  }
  show(n) {
    return H(this, xr, n), this.emit("show", { menu: this, trigger: this.trigger }).defaultPrevented || this.isDynamic && !this._renderMenu() ? !1 : (this.menu.classList.add(this.constructor.CLASS_SHOW), this._createPopper(), this.emit("shown", this), !0);
  }
  hide() {
    var o, i;
    return (o = g(this, Sr)) == null || o.call(this), this.emit("hide", this).defaultPrevented ? !1 : ((i = g(this, ke)) == null || i.classList.remove(this.constructor.CLASS_SHOW), this.emit("hidden", this), !0);
  }
  toggle(n) {
    return this.isShown ? this.hide() : this.show(n);
  }
  destroy() {
    var n;
    super.destroy(), (n = g(this, ke)) == null || n.remove();
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
        const c = n.nextElementSibling;
        c != null && c.classList.contains(o) ? i = c : i = (r = n.parentNode) == null ? void 0 : r.querySelector(`.${o}`);
      }
    }
    if (!i)
      throw new Error("ContextMenu: Cannot find menu element");
    return i.style.width = "max-content", i.style.position = this.options.strategy, i.style.top = "0", i.style.left = "0", H(this, ke, i), i;
  }
  _getPopperOptions() {
    var r;
    const { placement: n, strategy: o } = this.options, i = {
      middleware: [],
      placement: n,
      strategy: o
    };
    return this.options.flip && ((r = i.middleware) == null || r.push(Hh())), i;
  }
  _createPopper() {
    const n = this._getPopperOptions(), o = this._getPopperElement();
    H(this, Sr, vv(o, this.menu, () => {
      Yh(o, this.menu, n).then(({ x: i, y: r, middlewareData: l, placement: c }) => {
        Object.assign(this.menu.style, {
          left: `${i}px`,
          top: `${r}px`
        });
        const _ = c.split("-")[0], h = W(this, Oi, qh).call(this, _);
        if (l.arrow && this.arrowEl) {
          const { x: s, y: d } = l.arrow;
          Object.assign(this.arrowEl.style, {
            left: s != null ? `${s}px` : "",
            top: d != null ? `${d}px` : "",
            [h]: `${-this.arrowEl.offsetWidth / 2}px`,
            background: "inherit",
            border: "inherit",
            ...W(this, Hi, Gh).call(this, _)
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
    return !n || this.emit("updateMenu", { menu: n, trigger: this.trigger, contextmenu: this }).defaultPrevented ? !1 : (Gy(Eh(bv, n), this.menu), !0);
  }
  _getPopperElement() {
    return g(this, En) || H(this, En, {
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
    }), g(this, En);
  }
  static clear(n) {
    var _, h;
    n instanceof Event && (n = { event: n });
    const { event: o, exclude: i, ignoreSelector: r = ".not-hide-menu" } = n || {};
    if (o && r && ((h = (_ = o.target).closest) != null && h.call(_, r)) || o && Xy(o))
      return;
    const l = this.getAll().entries(), c = new Set(i || []);
    for (const [s, d] of l)
      c.has(s) || d.hide();
  }
  static show(n) {
    var l;
    const { event: o, ...i } = n, r = this.ensure(document.body);
    return Object.keys(i).length && r.setOptions(i), r.show(o), (l = o == null ? void 0 : o.stopPropagation) == null || l.call(o), r;
  }
  static hide() {
    const n = this.get(document.body);
    return n == null || n.hide(), n;
  }
}
ke = new WeakMap(), En = new WeakMap(), xr = new WeakMap(), Sr = new WeakMap(), Oi = new WeakSet(), qh = function(n) {
  return {
    top: "bottom",
    right: "left",
    bottom: "top",
    left: "right"
  }[n];
}, Hi = new WeakSet(), Gh = function(n) {
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
}, M(Rt, "NAME", "contextmenu"), M(Rt, "EVENTS", !0), M(Rt, "DEFAULT", {
  placement: "bottom-start",
  strategy: "fixed",
  flip: !0,
  preventOverflow: !0
}), M(Rt, "MENU_CLASS", "contextmenu"), M(Rt, "CLASS_SHOW", "show"), M(Rt, "MENU_SELECTOR", '[data-toggle="contextmenu"]:not(.disabled):not(:disabled)');
document.addEventListener("contextmenu", (t) => {
  const e = t.target;
  if (e.closest(`.${Rt.MENU_CLASS}`))
    return;
  const n = e.closest(Rt.MENU_SELECTOR);
  n && (Rt.ensure(n).show(t), t.preventDefault());
});
document.addEventListener("click", Rt.clear.bind(Rt));
function Xh(t) {
  return t.split("-")[1];
}
function wv(t) {
  return t === "y" ? "height" : "width";
}
function Kh(t) {
  return t.split("-")[0];
}
function Jh(t) {
  return ["top", "bottom"].includes(Kh(t)) ? "x" : "y";
}
function $v(t) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...t
  };
}
function kv(t) {
  return typeof t != "number" ? $v(t) : {
    top: t,
    right: t,
    bottom: t,
    left: t
  };
}
const xv = Math.min, Sv = Math.max;
function Cv(t, e, n) {
  return Sv(t, xv(e, n));
}
const Ev = (t) => ({
  name: "arrow",
  options: t,
  async fn(e) {
    const {
      element: n,
      padding: o = 0
    } = t || {}, {
      x: i,
      y: r,
      placement: l,
      rects: c,
      platform: _
    } = e;
    if (n == null)
      return {};
    const h = kv(o), s = {
      x: i,
      y: r
    }, d = Jh(l), f = wv(d), a = await _.getDimensions(n), u = d === "y" ? "top" : "left", b = d === "y" ? "bottom" : "right", p = c.reference[f] + c.reference[d] - s[d] - c.floating[f], m = s[d] - c.reference[d], y = await (_.getOffsetParent == null ? void 0 : _.getOffsetParent(n));
    let w = y ? d === "y" ? y.clientHeight || 0 : y.clientWidth || 0 : 0;
    w === 0 && (w = c.floating[f]);
    const k = p / 2 - m / 2, C = h[u], A = w - a[f] - h[b], T = w / 2 - a[f] / 2 + k, v = Cv(C, T, A), R = Xh(l) != null && T != v && c.reference[f] / 2 - (T < C ? h[u] : h[b]) - a[f] / 2 < 0 ? T < C ? C - T : A - T : 0;
    return {
      [d]: s[d] - R,
      data: {
        [d]: v,
        centerOffset: T - v
      }
    };
  }
});
async function Tv(t, e) {
  const {
    placement: n,
    platform: o,
    elements: i
  } = t, r = await (o.isRTL == null ? void 0 : o.isRTL(i.floating)), l = Kh(n), c = Xh(n), _ = Jh(n) === "x", h = ["left", "top"].includes(l) ? -1 : 1, s = r && _ ? -1 : 1, d = typeof e == "function" ? e(t) : e;
  let {
    mainAxis: f,
    crossAxis: a,
    alignmentAxis: u
  } = typeof d == "number" ? {
    mainAxis: d,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: 0,
    crossAxis: 0,
    alignmentAxis: null,
    ...d
  };
  return c && typeof u == "number" && (a = c === "end" ? u * -1 : u), _ ? {
    x: a * s,
    y: f * h
  } : {
    x: f * h,
    y: a * s
  };
}
const Av = function(t) {
  return t === void 0 && (t = 0), {
    name: "offset",
    options: t,
    async fn(e) {
      const {
        x: n,
        y: o
      } = e, i = await Tv(e, t);
      return {
        x: n + i.x,
        y: o + i.y,
        data: i
      };
    }
  };
};
var Tn, An, Ln, Wi, Zh;
const Ha = class extends Rt {
  constructor() {
    super(...arguments);
    E(this, Wi);
    E(this, Tn, !1);
    E(this, An, 0);
    M(this, "hideLater", () => {
      g(this, Ln).call(this), H(this, An, window.setTimeout(this.hide.bind(this), 100));
    });
    E(this, Ln, () => {
      clearTimeout(g(this, An)), H(this, An, 0);
    });
  }
  get isHover() {
    return this.options.trigger === "hover";
  }
  get elementShowClass() {
    return `with-${this.constructor.NAME}-show`;
  }
  show(n, o) {
    (o == null ? void 0 : o.clearOthers) !== !1 && Ha.clear({ event: o == null ? void 0 : o.event, exclude: [this.element] });
    const i = super.show(n);
    return i && (!g(this, Tn) && this.isHover && W(this, Wi, Zh).call(this), this.element.classList.add(this.elementShowClass)), i;
  }
  hide() {
    const n = super.hide();
    return n && this.element.classList.remove(this.elementShowClass), n;
  }
  toggle(n, o) {
    return this.isShown ? this.hide() : this.show(n, { event: n, ...o });
  }
  destroy() {
    g(this, Tn) && (this.element.removeEventListener("mouseleave", this.hideLater), this.menu.removeEventListener("mouseenter", g(this, Ln)), this.menu.removeEventListener("mouseleave", this.hideLater)), super.destroy();
  }
  _getArrowSize() {
    const { arrow: n } = this.options;
    return n ? typeof n == "number" ? n : 8 : 0;
  }
  _getPopperOptions() {
    var i, r;
    const n = super._getPopperOptions(), o = this._getArrowSize();
    return o && this.arrowEl && ((i = n.middleware) == null || i.push(Av(o)), (r = n.middleware) == null || r.push(Ev({ element: this.arrowEl }))), n;
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
let Tt = Ha;
Tn = new WeakMap(), An = new WeakMap(), Ln = new WeakMap(), Wi = new WeakSet(), Zh = function() {
  const { menu: n } = this;
  n.addEventListener("mouseenter", g(this, Ln)), n.addEventListener("mouseleave", this.hideLater), this.element.addEventListener("mouseleave", this.hideLater), H(this, Tn, !0);
}, M(Tt, "NAME", "dropdown"), M(Tt, "MENU_CLASS", "dropdown-menu"), M(Tt, "MENU_SELECTOR", '[data-toggle="dropdown"]:not(.disabled):not(:disabled)'), M(Tt, "DEFAULT", {
  ...Rt.DEFAULT,
  strategy: "absolute",
  trigger: "click"
});
document.addEventListener("click", function(t) {
  const n = t.target.closest(Tt.MENU_SELECTOR);
  if (n) {
    const o = Tt.ensure(n);
    o.options.trigger === "click" && o.toggle();
  } else
    Tt.clear({ event: t });
});
document.addEventListener("mouseover", function(t) {
  const e = t.target, n = typeof e.closest == "function" ? e.closest(Tt.MENU_SELECTOR) : null;
  if (!n)
    return;
  const o = Tt.ensure(n);
  o.isHover && o.show();
});
const Lv = (t) => {
  const e = document.getElementsByClassName("with-dropdown-show")[0];
  if (!e)
    return;
  const n = typeof e.closest == "function" ? e.closest(Tt.MENU_SELECTOR) : null;
  !n || !t.target.contains(n) || Tt.clear({ event: t });
};
window.addEventListener("scroll", Lv, !0);
var Cr, Mn;
class Mv extends ko {
  constructor(n) {
    var o;
    super(n);
    E(this, Cr, void 0);
    E(this, Mn, Wy());
    this.state = { placement: ((o = n.dropdown) == null ? void 0 : o.placement) || "", show: !1 };
  }
  get ref() {
    return g(this, Mn);
  }
  get triggerElement() {
    return g(this, Mn).current;
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
    }), H(this, Cr, Tt.ensure(this.triggerElement, {
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
    (n = g(this, Cr)) == null || n.destroy();
  }
  beforeRender() {
    const { className: n, children: o, dropdown: i, ...r } = this.props;
    return {
      className: F("dropdown", n),
      children: typeof o == "function" ? o(this.state) : o,
      ...r,
      "data-toggle": "dropdown",
      "data-dropdown-placement": this.state.placement,
      ref: g(this, Mn)
    };
  }
  render() {
    const { children: n, ...o } = this.beforeRender();
    return /* @__PURE__ */ kh("div", { ...o, children: n });
  }
}
Cr = new WeakMap(), Mn = new WeakMap();
class Rv extends Mv {
  get triggerElement() {
    return this.ref.current.base;
  }
  render() {
    var r;
    const { placement: e, show: n } = this.state, o = this.beforeRender();
    let { caret: i = !0 } = o;
    if (i !== !1 && (n || i === !0)) {
      const l = n ? e : (r = this.props.dropdown) == null ? void 0 : r.placement;
      i = (l === "top" ? "up" : l === "bottom" ? "down" : l) || (typeof i == "string" ? i : "") || "down";
    }
    return o.caret = i, /* @__PURE__ */ kh(re, { ...o });
  }
}
function Qh({
  key: t,
  type: e,
  btnType: n,
  ...o
}) {
  return /* @__PURE__ */ Kl(Rv, { type: n, ...o });
}
var pa, ut, td, ed, Eo, D_, nd = {}, od = [], Dv = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function Pe(t, e) {
  for (var n in e)
    t[n] = e[n];
  return t;
}
function rd(t) {
  var e = t.parentNode;
  e && e.removeChild(t);
}
function Nv(t, e, n) {
  var o, i, r, l = {};
  for (r in e)
    r == "key" ? o = e[r] : r == "ref" ? i = e[r] : l[r] = e[r];
  if (arguments.length > 2 && (l.children = arguments.length > 3 ? pa.call(arguments, 2) : n), typeof t == "function" && t.defaultProps != null)
    for (r in t.defaultProps)
      l[r] === void 0 && (l[r] = t.defaultProps[r]);
  return xs(t, l, o, i, null);
}
function xs(t, e, n, o, i) {
  var r = { type: t, props: e, key: n, ref: o, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: i ?? ++td };
  return i == null && ut.vnode != null && ut.vnode(r), r;
}
function ma(t) {
  return t.children;
}
function To(t, e) {
  this.props = t, this.context = e;
}
function lr(t, e) {
  if (e == null)
    return t.__ ? lr(t.__, t.__.__k.indexOf(t) + 1) : null;
  for (var n; e < t.__k.length; e++)
    if ((n = t.__k[e]) != null && n.__e != null)
      return n.__e;
  return typeof t.type == "function" ? lr(t) : null;
}
function sd(t) {
  var e, n;
  if ((t = t.__) != null && t.__c != null) {
    for (t.__e = t.__c.base = null, e = 0; e < t.__k.length; e++)
      if ((n = t.__k[e]) != null && n.__e != null) {
        t.__e = t.__c.base = n.__e;
        break;
      }
    return sd(t);
  }
}
function N_(t) {
  (!t.__d && (t.__d = !0) && Eo.push(t) && !Zs.__r++ || D_ !== ut.debounceRendering) && ((D_ = ut.debounceRendering) || setTimeout)(Zs);
}
function Zs() {
  for (var t; Zs.__r = Eo.length; )
    t = Eo.sort(function(e, n) {
      return e.__v.__b - n.__v.__b;
    }), Eo = [], t.some(function(e) {
      var n, o, i, r, l, c;
      e.__d && (l = (r = (n = e).__v).__e, (c = n.__P) && (o = [], (i = Pe({}, r)).__v = r.__v + 1, ad(c, r, i, n.__n, c.ownerSVGElement !== void 0, r.__h != null ? [l] : null, o, l ?? lr(r), r.__h), Ov(o, r), r.__e != l && sd(r)));
    });
}
function id(t, e, n, o, i, r, l, c, _, h) {
  var s, d, f, a, u, b, p, m = o && o.__k || od, y = m.length;
  for (n.__k = [], s = 0; s < e.length; s++)
    if ((a = n.__k[s] = (a = e[s]) == null || typeof a == "boolean" ? null : typeof a == "string" || typeof a == "number" || typeof a == "bigint" ? xs(null, a, null, null, a) : Array.isArray(a) ? xs(ma, { children: a }, null, null, null) : a.__b > 0 ? xs(a.type, a.props, a.key, a.ref ? a.ref : null, a.__v) : a) != null) {
      if (a.__ = n, a.__b = n.__b + 1, (f = m[s]) === null || f && a.key == f.key && a.type === f.type)
        m[s] = void 0;
      else
        for (d = 0; d < y; d++) {
          if ((f = m[d]) && a.key == f.key && a.type === f.type) {
            m[d] = void 0;
            break;
          }
          f = null;
        }
      ad(t, a, f = f || nd, i, r, l, c, _, h), u = a.__e, (d = a.ref) && f.ref != d && (p || (p = []), f.ref && p.push(f.ref, null, a), p.push(d, a.__c || u, a)), u != null ? (b == null && (b = u), typeof a.type == "function" && a.__k === f.__k ? a.__d = _ = ld(a, _, t) : _ = cd(t, a, f, m, u, _), typeof n.type == "function" && (n.__d = _)) : _ && f.__e == _ && _.parentNode != t && (_ = lr(f));
    }
  for (n.__e = b, s = y; s--; )
    m[s] != null && fd(m[s], m[s]);
  if (p)
    for (s = 0; s < p.length; s++)
      _d(p[s], p[++s], p[++s]);
}
function ld(t, e, n) {
  for (var o, i = t.__k, r = 0; i && r < i.length; r++)
    (o = i[r]) && (o.__ = t, e = typeof o.type == "function" ? ld(o, e, n) : cd(n, o, o, i, o.__e, e));
  return e;
}
function cd(t, e, n, o, i, r) {
  var l, c, _;
  if (e.__d !== void 0)
    l = e.__d, e.__d = void 0;
  else if (n == null || i != r || i.parentNode == null)
    t:
      if (r == null || r.parentNode !== t)
        t.appendChild(i), l = null;
      else {
        for (c = r, _ = 0; (c = c.nextSibling) && _ < o.length; _ += 2)
          if (c == i)
            break t;
        t.insertBefore(i, r), l = r;
      }
  return l !== void 0 ? l : i.nextSibling;
}
function Pv(t, e, n, o, i) {
  var r;
  for (r in n)
    r === "children" || r === "key" || r in e || Qs(t, r, null, n[r], o);
  for (r in e)
    i && typeof e[r] != "function" || r === "children" || r === "key" || r === "value" || r === "checked" || n[r] === e[r] || Qs(t, r, e[r], n[r], o);
}
function P_(t, e, n) {
  e[0] === "-" ? t.setProperty(e, n) : t[e] = n == null ? "" : typeof n != "number" || Dv.test(e) ? n : n + "px";
}
function Qs(t, e, n, o, i) {
  var r;
  t:
    if (e === "style")
      if (typeof n == "string")
        t.style.cssText = n;
      else {
        if (typeof o == "string" && (t.style.cssText = o = ""), o)
          for (e in o)
            n && e in n || P_(t.style, e, "");
        if (n)
          for (e in n)
            o && n[e] === o[e] || P_(t.style, e, n[e]);
      }
    else if (e[0] === "o" && e[1] === "n")
      r = e !== (e = e.replace(/Capture$/, "")), e = e.toLowerCase() in t ? e.toLowerCase().slice(2) : e.slice(2), t.l || (t.l = {}), t.l[e + r] = n, n ? o || t.addEventListener(e, r ? H_ : O_, r) : t.removeEventListener(e, r ? H_ : O_, r);
    else if (e !== "dangerouslySetInnerHTML") {
      if (i)
        e = e.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
      else if (e !== "href" && e !== "list" && e !== "form" && e !== "tabIndex" && e !== "download" && e in t)
        try {
          t[e] = n ?? "";
          break t;
        } catch {
        }
      typeof n == "function" || (n == null || n === !1 && e.indexOf("-") == -1 ? t.removeAttribute(e) : t.setAttribute(e, n));
    }
}
function O_(t) {
  this.l[t.type + !1](ut.event ? ut.event(t) : t);
}
function H_(t) {
  this.l[t.type + !0](ut.event ? ut.event(t) : t);
}
function ad(t, e, n, o, i, r, l, c, _) {
  var h, s, d, f, a, u, b, p, m, y, w, k, C, A, T, v = e.type;
  if (e.constructor !== void 0)
    return null;
  n.__h != null && (_ = n.__h, c = e.__e = n.__e, e.__h = null, r = [c]), (h = ut.__b) && h(e);
  try {
    t:
      if (typeof v == "function") {
        if (p = e.props, m = (h = v.contextType) && o[h.__c], y = h ? m ? m.props.value : h.__ : o, n.__c ? b = (s = e.__c = n.__c).__ = s.__E : ("prototype" in v && v.prototype.render ? e.__c = s = new v(p, y) : (e.__c = s = new To(p, y), s.constructor = v, s.render = Wv), m && m.sub(s), s.props = p, s.state || (s.state = {}), s.context = y, s.__n = o, d = s.__d = !0, s.__h = [], s._sb = []), s.__s == null && (s.__s = s.state), v.getDerivedStateFromProps != null && (s.__s == s.state && (s.__s = Pe({}, s.__s)), Pe(s.__s, v.getDerivedStateFromProps(p, s.__s))), f = s.props, a = s.state, d)
          v.getDerivedStateFromProps == null && s.componentWillMount != null && s.componentWillMount(), s.componentDidMount != null && s.__h.push(s.componentDidMount);
        else {
          if (v.getDerivedStateFromProps == null && p !== f && s.componentWillReceiveProps != null && s.componentWillReceiveProps(p, y), !s.__e && s.shouldComponentUpdate != null && s.shouldComponentUpdate(p, s.__s, y) === !1 || e.__v === n.__v) {
            for (s.props = p, s.state = s.__s, e.__v !== n.__v && (s.__d = !1), s.__v = e, e.__e = n.__e, e.__k = n.__k, e.__k.forEach(function(x) {
              x && (x.__ = e);
            }), w = 0; w < s._sb.length; w++)
              s.__h.push(s._sb[w]);
            s._sb = [], s.__h.length && l.push(s);
            break t;
          }
          s.componentWillUpdate != null && s.componentWillUpdate(p, s.__s, y), s.componentDidUpdate != null && s.__h.push(function() {
            s.componentDidUpdate(f, a, u);
          });
        }
        if (s.context = y, s.props = p, s.__v = e, s.__P = t, k = ut.__r, C = 0, "prototype" in v && v.prototype.render) {
          for (s.state = s.__s, s.__d = !1, k && k(e), h = s.render(s.props, s.state, s.context), A = 0; A < s._sb.length; A++)
            s.__h.push(s._sb[A]);
          s._sb = [];
        } else
          do
            s.__d = !1, k && k(e), h = s.render(s.props, s.state, s.context), s.state = s.__s;
          while (s.__d && ++C < 25);
        s.state = s.__s, s.getChildContext != null && (o = Pe(Pe({}, o), s.getChildContext())), d || s.getSnapshotBeforeUpdate == null || (u = s.getSnapshotBeforeUpdate(f, a)), T = h != null && h.type === ma && h.key == null ? h.props.children : h, id(t, Array.isArray(T) ? T : [T], e, n, o, i, r, l, c, _), s.base = e.__e, e.__h = null, s.__h.length && l.push(s), b && (s.__E = s.__ = null), s.__e = !1;
      } else
        r == null && e.__v === n.__v ? (e.__k = n.__k, e.__e = n.__e) : e.__e = Hv(n.__e, e, n, o, i, r, l, _);
    (h = ut.diffed) && h(e);
  } catch (x) {
    e.__v = null, (_ || r != null) && (e.__e = c, e.__h = !!_, r[r.indexOf(c)] = null), ut.__e(x, e, n);
  }
}
function Ov(t, e) {
  ut.__c && ut.__c(e, t), t.some(function(n) {
    try {
      t = n.__h, n.__h = [], t.some(function(o) {
        o.call(n);
      });
    } catch (o) {
      ut.__e(o, n.__v);
    }
  });
}
function Hv(t, e, n, o, i, r, l, c) {
  var _, h, s, d = n.props, f = e.props, a = e.type, u = 0;
  if (a === "svg" && (i = !0), r != null) {
    for (; u < r.length; u++)
      if ((_ = r[u]) && "setAttribute" in _ == !!a && (a ? _.localName === a : _.nodeType === 3)) {
        t = _, r[u] = null;
        break;
      }
  }
  if (t == null) {
    if (a === null)
      return document.createTextNode(f);
    t = i ? document.createElementNS("http://www.w3.org/2000/svg", a) : document.createElement(a, f.is && f), r = null, c = !1;
  }
  if (a === null)
    d === f || c && t.data === f || (t.data = f);
  else {
    if (r = r && pa.call(t.childNodes), h = (d = n.props || nd).dangerouslySetInnerHTML, s = f.dangerouslySetInnerHTML, !c) {
      if (r != null)
        for (d = {}, u = 0; u < t.attributes.length; u++)
          d[t.attributes[u].name] = t.attributes[u].value;
      (s || h) && (s && (h && s.__html == h.__html || s.__html === t.innerHTML) || (t.innerHTML = s && s.__html || ""));
    }
    if (Pv(t, f, d, i, c), s)
      e.__k = [];
    else if (u = e.props.children, id(t, Array.isArray(u) ? u : [u], e, n, o, i && a !== "foreignObject", r, l, r ? r[0] : n.__k && lr(n, 0), c), r != null)
      for (u = r.length; u--; )
        r[u] != null && rd(r[u]);
    c || ("value" in f && (u = f.value) !== void 0 && (u !== t.value || a === "progress" && !u || a === "option" && u !== d.value) && Qs(t, "value", u, d.value, !1), "checked" in f && (u = f.checked) !== void 0 && u !== t.checked && Qs(t, "checked", u, d.checked, !1));
  }
  return t;
}
function _d(t, e, n) {
  try {
    typeof t == "function" ? t(e) : t.current = e;
  } catch (o) {
    ut.__e(o, n);
  }
}
function fd(t, e, n) {
  var o, i;
  if (ut.unmount && ut.unmount(t), (o = t.ref) && (o.current && o.current !== t.__e || _d(o, null, e)), (o = t.__c) != null) {
    if (o.componentWillUnmount)
      try {
        o.componentWillUnmount();
      } catch (r) {
        ut.__e(r, e);
      }
    o.base = o.__P = null, t.__c = void 0;
  }
  if (o = t.__k)
    for (i = 0; i < o.length; i++)
      o[i] && fd(o[i], e, n || typeof t.type != "function");
  n || t.__e == null || rd(t.__e), t.__ = t.__e = t.__d = void 0;
}
function Wv(t, e, n) {
  return this.constructor(t, n);
}
pa = od.slice, ut = { __e: function(t, e, n, o) {
  for (var i, r, l; e = e.__; )
    if ((i = e.__c) && !i.__)
      try {
        if ((r = i.constructor) && r.getDerivedStateFromError != null && (i.setState(r.getDerivedStateFromError(t)), l = i.__d), i.componentDidCatch != null && (i.componentDidCatch(t, o || {}), l = i.__d), l)
          return i.__E = i;
      } catch (c) {
        t = c;
      }
  throw t;
} }, td = 0, ed = function(t) {
  return t != null && t.constructor === void 0;
}, To.prototype.setState = function(t, e) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = Pe({}, this.state), typeof t == "function" && (t = t(Pe({}, n), this.props)), t && Pe(n, t), t != null && this.__v && (e && this._sb.push(e), N_(this));
}, To.prototype.forceUpdate = function(t) {
  this.__v && (this.__e = !0, t && this.__h.push(t), N_(this));
}, To.prototype.render = ma, Eo = [], Zs.__r = 0;
var Iv = 0;
function W_(t, e, n, o, i) {
  var r, l, c = {};
  for (l in e)
    l == "ref" ? r = e[l] : c[l] = e[l];
  var _ = { type: t, props: c, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: --Iv, __source: i, __self: o };
  if (typeof t == "function" && (r = t.defaultProps))
    for (l in r)
      c[l] === void 0 && (c[l] = r[l]);
  return ut.vnode && ut.vnode(_), _;
}
let ud = class extends To {
  componentDidMount() {
    var e;
    (e = this.props.afterRender) == null || e.call(this, { firstRender: !0 });
  }
  componentDidUpdate() {
    var e;
    (e = this.props.afterRender) == null || e.call(this, { firstRender: !1 });
  }
  componentWillUnmount() {
    var e;
    (e = this.props.beforeDestroy) == null || e.call(this);
  }
  handleItemClick(e, n, o, i) {
    o && o.call(i.target, i);
    const { onClickItem: r } = this.props;
    r && r.call(this, { item: e, index: n, event: i });
  }
  beforeRender() {
    var o;
    const e = { ...this.props }, n = (o = e.beforeRender) == null ? void 0 : o.call(this, e);
    return n && Object.assign(e, n), typeof e.items == "function" && (e.items = e.items.call(this)), e;
  }
  onRenderItem(e, n) {
    const { key: o = n, ...i } = e;
    return /* @__PURE__ */ W_(re, { ...i }, o);
  }
  renderItem(e, n, o) {
    const { itemRender: i, defaultBtnProps: r, onClickItem: l } = e, c = { key: o, ...n };
    if (r && Object.assign(c, r), l && (c.onClick = this.handleItemClick.bind(this, c, o, n.onClick)), i) {
      const _ = i.call(this, c, Nv);
      if (ed(_))
        return _;
      typeof _ == "object" && Object.assign(c, _);
    }
    return this.onRenderItem(c, o);
  }
  render() {
    const e = this.beforeRender(), {
      className: n,
      items: o,
      size: i,
      type: r,
      defaultBtnProps: l,
      children: c,
      itemRender: _,
      onClickItem: h,
      beforeRender: s,
      afterRender: d,
      beforeDestroy: f,
      ...a
    } = e;
    return /* @__PURE__ */ W_(
      "div",
      {
        className: F("btn-group", i ? `size-${i}` : "", n),
        ...a,
        children: [
          o && o.map(this.renderItem.bind(this, e)),
          c
        ]
      }
    );
  }
};
function Uv({
  key: t,
  type: e,
  btnType: n,
  ...o
}) {
  return /* @__PURE__ */ Kl(ud, { type: n, ...o });
}
var yn;
let Qn = (yn = class extends Zn {
  beforeRender() {
    const { gap: e, btnProps: n, wrap: o, ...i } = super.beforeRender();
    return i.className = F(i.className, o ? "flex-wrap" : "", typeof e == "number" ? `gap-${e}` : ""), typeof e == "string" && (i.style ? i.style.gap = e : i.style = { gap: e }), i;
  }
  isBtnItem(e) {
    return e === "item" || e === "dropdown";
  }
  renderTypedItem(e, n, o) {
    const i = this.isBtnItem(o.type) ? { btnType: "ghost", ...this.props.btnProps } : {}, r = {
      ...n,
      ...i,
      ...o,
      className: F(`${this.name}-${o.type}`, n.className, i.className, o.className),
      style: Object.assign({}, n.style, i.style, o.style)
    };
    return /* @__PURE__ */ Kl(e, { ...r });
  }
}, M(yn, "ItemComponents", {
  item: Oy,
  dropdown: Qh,
  "btn-group": Uv
}), M(yn, "ROOT_TAG", "nav"), M(yn, "NAME", "toolbar"), M(yn, "defaultProps", {
  btnProps: {
    btnType: "ghost"
  }
}), yn);
function Fv({
  className: t,
  style: e,
  actions: n,
  heading: o,
  content: i,
  contentClass: r,
  children: l,
  close: c,
  onClose: _,
  icon: h,
  ...s
}) {
  let d;
  c === !0 ? d = /* @__PURE__ */ ae(re, { className: "alert-close btn ghost", square: !0, onClick: _, children: /* @__PURE__ */ ae("span", { class: "close" }) }) : vn(c) ? d = c : typeof c == "object" && (d = /* @__PURE__ */ ae(re, { ...c, onClick: _ }));
  const f = vn(n) ? n : n ? /* @__PURE__ */ ae(Qn, { ...n }) : null;
  return /* @__PURE__ */ ae("div", { className: F("alert", t), style: e, ...s, children: [
    vn(h) ? h : typeof h == "string" ? /* @__PURE__ */ ae("i", { className: `icon ${h}` }) : null,
    vn(i) ? i : /* @__PURE__ */ ae("div", { className: F("alert-content", r), children: [
      vn(o) ? o : o && /* @__PURE__ */ ae("div", { className: "alert-heading", children: o }),
      /* @__PURE__ */ ae("div", { className: "alert-text", children: i }),
      o ? f : null
    ] }),
    o ? null : f,
    d,
    l
  ] });
}
function Bv(t) {
  if (t === "center")
    return "fade-from-center";
  if (t) {
    if (t.includes("top"))
      return "fade-from-top";
    if (t.includes("bottom"))
      return "fade-from-bottom";
  }
  return "fade";
}
let jv = class extends wo {
  componentDidMount() {
    var e;
    (e = this.props.afterRender) == null || e.call(this, { firstRender: !0 });
  }
  componentDidUpdate() {
    var e;
    (e = this.props.afterRender) == null || e.call(this, { firstRender: !1 });
  }
  componentWillUnmount() {
    var e;
    (e = this.props.beforeDestroy) == null || e.call(this);
  }
  render() {
    const {
      afterRender: e,
      beforeDestroy: n,
      margin: o,
      type: i,
      placement: r,
      animation: l,
      show: c,
      className: _,
      time: h,
      ...s
    } = this.props;
    return /* @__PURE__ */ Dy(
      Fv,
      {
        className: F("messager", _, i, l === !0 ? Bv(r) : l, c ? "in" : ""),
        ...s
      }
    );
  }
};
var Rn, Cs;
class Ss extends xt {
  constructor() {
    super(...arguments);
    E(this, Rn);
    M(this, "_show", !1);
    M(this, "_showTimer", 0);
    M(this, "_afterRender", ({ firstRender: n }) => {
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
    this._show || (this.emit("show"), this.render(), this._show = !0, W(this, Rn, Cs).call(this, () => {
      this.emit("shown");
      const { time: n } = this.options;
      n && W(this, Rn, Cs).call(this, () => this.hide(), n);
    }));
  }
  hide() {
    this._show && (this._show = !1, this.emit("hide"), this.render(), W(this, Rn, Cs).call(this, () => {
      this.emit("hidden");
    }));
  }
}
Rn = new WeakSet(), Cs = function(n, o = 200) {
  this._showTimer && clearTimeout(this._showTimer), this._showTimer = window.setTimeout(() => {
    n(), this._showTimer = 0;
  }, o);
}, M(Ss, "NAME", "MessagerItem"), M(Ss, "EVENTS", !0), M(Ss, "Component", jv);
var sn, Dn, pe, Ii, hd, Ui, dd;
const Wa = class extends Jt {
  constructor() {
    super(...arguments);
    E(this, Ii);
    E(this, Ui);
    E(this, sn, void 0);
    E(this, Dn, Cy(6));
    E(this, pe, void 0);
  }
  get id() {
    return g(this, Dn);
  }
  get isShown() {
    var n;
    return !!((n = g(this, pe)) != null && n.isShown);
  }
  show(n) {
    this.setOptions(n), W(this, Ii, hd).call(this).show();
  }
  hide() {
    var n;
    (n = g(this, pe)) == null || n.hide();
  }
  static show(n) {
    typeof n == "string" && (n = { content: n });
    const { container: o, ...i } = n, r = new Wa(o || "body", i);
    return r.show(), r;
  }
};
let _s = Wa;
sn = new WeakMap(), Dn = new WeakMap(), pe = new WeakMap(), Ii = new WeakSet(), hd = function() {
  if (g(this, pe))
    g(this, pe).setOptions(this.options);
  else {
    const n = W(this, Ui, dd).call(this), o = new Ss(n, this.options);
    o.on("hidden", () => {
      o.destroy(), n.remove(), H(this, sn, void 0);
    }), H(this, pe, o);
  }
  return g(this, pe);
}, Ui = new WeakSet(), dd = function() {
  if (g(this, sn))
    return g(this, sn);
  const { placement: n = "top" } = this.options;
  let o = this.element.querySelector(`.messagers-${n}`);
  o || (o = document.createElement("div"), o.className = `messagers messagers-${n}`, this.element.appendChild(o));
  let i = o.querySelector(`#messager-${g(this, Dn)}`);
  return i || (i = document.createElement("div"), i.className = "messager-holder", i.id = `messager-${g(this, Dn)}`, o.appendChild(i), H(this, sn, i)), i;
}, M(_s, "NAME", "messager"), M(_s, "DEFAULT", {
  placement: "top",
  animation: !0,
  close: !0,
  margin: 6,
  time: 5e3
});
var pd, ht, md, Ao, I_, gd = {}, yd = [], zv = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function Oe(t, e) {
  for (var n in e)
    t[n] = e[n];
  return t;
}
function vd(t) {
  var e = t.parentNode;
  e && e.removeChild(t);
}
function wc(t, e, n, o, i) {
  var r = { type: t, props: e, key: n, ref: o, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: i ?? ++md };
  return i == null && ht.vnode != null && ht.vnode(r), r;
}
function ga(t) {
  return t.children;
}
function Lo(t, e) {
  this.props = t, this.context = e;
}
function cr(t, e) {
  if (e == null)
    return t.__ ? cr(t.__, t.__.__k.indexOf(t) + 1) : null;
  for (var n; e < t.__k.length; e++)
    if ((n = t.__k[e]) != null && n.__e != null)
      return n.__e;
  return typeof t.type == "function" ? cr(t) : null;
}
function bd(t) {
  var e, n;
  if ((t = t.__) != null && t.__c != null) {
    for (t.__e = t.__c.base = null, e = 0; e < t.__k.length; e++)
      if ((n = t.__k[e]) != null && n.__e != null) {
        t.__e = t.__c.base = n.__e;
        break;
      }
    return bd(t);
  }
}
function U_(t) {
  (!t.__d && (t.__d = !0) && Ao.push(t) && !ti.__r++ || I_ !== ht.debounceRendering) && ((I_ = ht.debounceRendering) || setTimeout)(ti);
}
function ti() {
  for (var t; ti.__r = Ao.length; )
    t = Ao.sort(function(e, n) {
      return e.__v.__b - n.__v.__b;
    }), Ao = [], t.some(function(e) {
      var n, o, i, r, l, c;
      e.__d && (l = (r = (n = e).__v).__e, (c = n.__P) && (o = [], (i = Oe({}, r)).__v = r.__v + 1, xd(c, r, i, n.__n, c.ownerSVGElement !== void 0, r.__h != null ? [l] : null, o, l ?? cr(r), r.__h), Yv(o, r), r.__e != l && bd(r)));
    });
}
function wd(t, e, n, o, i, r, l, c, _, h) {
  var s, d, f, a, u, b, p, m = o && o.__k || yd, y = m.length;
  for (n.__k = [], s = 0; s < e.length; s++)
    if ((a = n.__k[s] = (a = e[s]) == null || typeof a == "boolean" ? null : typeof a == "string" || typeof a == "number" || typeof a == "bigint" ? wc(null, a, null, null, a) : Array.isArray(a) ? wc(ga, { children: a }, null, null, null) : a.__b > 0 ? wc(a.type, a.props, a.key, a.ref ? a.ref : null, a.__v) : a) != null) {
      if (a.__ = n, a.__b = n.__b + 1, (f = m[s]) === null || f && a.key == f.key && a.type === f.type)
        m[s] = void 0;
      else
        for (d = 0; d < y; d++) {
          if ((f = m[d]) && a.key == f.key && a.type === f.type) {
            m[d] = void 0;
            break;
          }
          f = null;
        }
      xd(t, a, f = f || gd, i, r, l, c, _, h), u = a.__e, (d = a.ref) && f.ref != d && (p || (p = []), f.ref && p.push(f.ref, null, a), p.push(d, a.__c || u, a)), u != null ? (b == null && (b = u), typeof a.type == "function" && a.__k === f.__k ? a.__d = _ = $d(a, _, t) : _ = kd(t, a, f, m, u, _), typeof n.type == "function" && (n.__d = _)) : _ && f.__e == _ && _.parentNode != t && (_ = cr(f));
    }
  for (n.__e = b, s = y; s--; )
    m[s] != null && Cd(m[s], m[s]);
  if (p)
    for (s = 0; s < p.length; s++)
      Sd(p[s], p[++s], p[++s]);
}
function $d(t, e, n) {
  for (var o, i = t.__k, r = 0; i && r < i.length; r++)
    (o = i[r]) && (o.__ = t, e = typeof o.type == "function" ? $d(o, e, n) : kd(n, o, o, i, o.__e, e));
  return e;
}
function kd(t, e, n, o, i, r) {
  var l, c, _;
  if (e.__d !== void 0)
    l = e.__d, e.__d = void 0;
  else if (n == null || i != r || i.parentNode == null)
    t:
      if (r == null || r.parentNode !== t)
        t.appendChild(i), l = null;
      else {
        for (c = r, _ = 0; (c = c.nextSibling) && _ < o.length; _ += 2)
          if (c == i)
            break t;
        t.insertBefore(i, r), l = r;
      }
  return l !== void 0 ? l : i.nextSibling;
}
function Vv(t, e, n, o, i) {
  var r;
  for (r in n)
    r === "children" || r === "key" || r in e || ei(t, r, null, n[r], o);
  for (r in e)
    i && typeof e[r] != "function" || r === "children" || r === "key" || r === "value" || r === "checked" || n[r] === e[r] || ei(t, r, e[r], n[r], o);
}
function F_(t, e, n) {
  e[0] === "-" ? t.setProperty(e, n) : t[e] = n == null ? "" : typeof n != "number" || zv.test(e) ? n : n + "px";
}
function ei(t, e, n, o, i) {
  var r;
  t:
    if (e === "style")
      if (typeof n == "string")
        t.style.cssText = n;
      else {
        if (typeof o == "string" && (t.style.cssText = o = ""), o)
          for (e in o)
            n && e in n || F_(t.style, e, "");
        if (n)
          for (e in n)
            o && n[e] === o[e] || F_(t.style, e, n[e]);
      }
    else if (e[0] === "o" && e[1] === "n")
      r = e !== (e = e.replace(/Capture$/, "")), e = e.toLowerCase() in t ? e.toLowerCase().slice(2) : e.slice(2), t.l || (t.l = {}), t.l[e + r] = n, n ? o || t.addEventListener(e, r ? j_ : B_, r) : t.removeEventListener(e, r ? j_ : B_, r);
    else if (e !== "dangerouslySetInnerHTML") {
      if (i)
        e = e.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
      else if (e !== "href" && e !== "list" && e !== "form" && e !== "tabIndex" && e !== "download" && e in t)
        try {
          t[e] = n ?? "";
          break t;
        } catch {
        }
      typeof n == "function" || (n == null || n === !1 && e.indexOf("-") == -1 ? t.removeAttribute(e) : t.setAttribute(e, n));
    }
}
function B_(t) {
  this.l[t.type + !1](ht.event ? ht.event(t) : t);
}
function j_(t) {
  this.l[t.type + !0](ht.event ? ht.event(t) : t);
}
function xd(t, e, n, o, i, r, l, c, _) {
  var h, s, d, f, a, u, b, p, m, y, w, k, C, A, T, v = e.type;
  if (e.constructor !== void 0)
    return null;
  n.__h != null && (_ = n.__h, c = e.__e = n.__e, e.__h = null, r = [c]), (h = ht.__b) && h(e);
  try {
    t:
      if (typeof v == "function") {
        if (p = e.props, m = (h = v.contextType) && o[h.__c], y = h ? m ? m.props.value : h.__ : o, n.__c ? b = (s = e.__c = n.__c).__ = s.__E : ("prototype" in v && v.prototype.render ? e.__c = s = new v(p, y) : (e.__c = s = new Lo(p, y), s.constructor = v, s.render = Gv), m && m.sub(s), s.props = p, s.state || (s.state = {}), s.context = y, s.__n = o, d = s.__d = !0, s.__h = [], s._sb = []), s.__s == null && (s.__s = s.state), v.getDerivedStateFromProps != null && (s.__s == s.state && (s.__s = Oe({}, s.__s)), Oe(s.__s, v.getDerivedStateFromProps(p, s.__s))), f = s.props, a = s.state, d)
          v.getDerivedStateFromProps == null && s.componentWillMount != null && s.componentWillMount(), s.componentDidMount != null && s.__h.push(s.componentDidMount);
        else {
          if (v.getDerivedStateFromProps == null && p !== f && s.componentWillReceiveProps != null && s.componentWillReceiveProps(p, y), !s.__e && s.shouldComponentUpdate != null && s.shouldComponentUpdate(p, s.__s, y) === !1 || e.__v === n.__v) {
            for (s.props = p, s.state = s.__s, e.__v !== n.__v && (s.__d = !1), s.__v = e, e.__e = n.__e, e.__k = n.__k, e.__k.forEach(function(x) {
              x && (x.__ = e);
            }), w = 0; w < s._sb.length; w++)
              s.__h.push(s._sb[w]);
            s._sb = [], s.__h.length && l.push(s);
            break t;
          }
          s.componentWillUpdate != null && s.componentWillUpdate(p, s.__s, y), s.componentDidUpdate != null && s.__h.push(function() {
            s.componentDidUpdate(f, a, u);
          });
        }
        if (s.context = y, s.props = p, s.__v = e, s.__P = t, k = ht.__r, C = 0, "prototype" in v && v.prototype.render) {
          for (s.state = s.__s, s.__d = !1, k && k(e), h = s.render(s.props, s.state, s.context), A = 0; A < s._sb.length; A++)
            s.__h.push(s._sb[A]);
          s._sb = [];
        } else
          do
            s.__d = !1, k && k(e), h = s.render(s.props, s.state, s.context), s.state = s.__s;
          while (s.__d && ++C < 25);
        s.state = s.__s, s.getChildContext != null && (o = Oe(Oe({}, o), s.getChildContext())), d || s.getSnapshotBeforeUpdate == null || (u = s.getSnapshotBeforeUpdate(f, a)), T = h != null && h.type === ga && h.key == null ? h.props.children : h, wd(t, Array.isArray(T) ? T : [T], e, n, o, i, r, l, c, _), s.base = e.__e, e.__h = null, s.__h.length && l.push(s), b && (s.__E = s.__ = null), s.__e = !1;
      } else
        r == null && e.__v === n.__v ? (e.__k = n.__k, e.__e = n.__e) : e.__e = qv(n.__e, e, n, o, i, r, l, _);
    (h = ht.diffed) && h(e);
  } catch (x) {
    e.__v = null, (_ || r != null) && (e.__e = c, e.__h = !!_, r[r.indexOf(c)] = null), ht.__e(x, e, n);
  }
}
function Yv(t, e) {
  ht.__c && ht.__c(e, t), t.some(function(n) {
    try {
      t = n.__h, n.__h = [], t.some(function(o) {
        o.call(n);
      });
    } catch (o) {
      ht.__e(o, n.__v);
    }
  });
}
function qv(t, e, n, o, i, r, l, c) {
  var _, h, s, d = n.props, f = e.props, a = e.type, u = 0;
  if (a === "svg" && (i = !0), r != null) {
    for (; u < r.length; u++)
      if ((_ = r[u]) && "setAttribute" in _ == !!a && (a ? _.localName === a : _.nodeType === 3)) {
        t = _, r[u] = null;
        break;
      }
  }
  if (t == null) {
    if (a === null)
      return document.createTextNode(f);
    t = i ? document.createElementNS("http://www.w3.org/2000/svg", a) : document.createElement(a, f.is && f), r = null, c = !1;
  }
  if (a === null)
    d === f || c && t.data === f || (t.data = f);
  else {
    if (r = r && pd.call(t.childNodes), h = (d = n.props || gd).dangerouslySetInnerHTML, s = f.dangerouslySetInnerHTML, !c) {
      if (r != null)
        for (d = {}, u = 0; u < t.attributes.length; u++)
          d[t.attributes[u].name] = t.attributes[u].value;
      (s || h) && (s && (h && s.__html == h.__html || s.__html === t.innerHTML) || (t.innerHTML = s && s.__html || ""));
    }
    if (Vv(t, f, d, i, c), s)
      e.__k = [];
    else if (u = e.props.children, wd(t, Array.isArray(u) ? u : [u], e, n, o, i && a !== "foreignObject", r, l, r ? r[0] : n.__k && cr(n, 0), c), r != null)
      for (u = r.length; u--; )
        r[u] != null && vd(r[u]);
    c || ("value" in f && (u = f.value) !== void 0 && (u !== t.value || a === "progress" && !u || a === "option" && u !== d.value) && ei(t, "value", u, d.value, !1), "checked" in f && (u = f.checked) !== void 0 && u !== t.checked && ei(t, "checked", u, d.checked, !1));
  }
  return t;
}
function Sd(t, e, n) {
  try {
    typeof t == "function" ? t(e) : t.current = e;
  } catch (o) {
    ht.__e(o, n);
  }
}
function Cd(t, e, n) {
  var o, i;
  if (ht.unmount && ht.unmount(t), (o = t.ref) && (o.current && o.current !== t.__e || Sd(o, null, e)), (o = t.__c) != null) {
    if (o.componentWillUnmount)
      try {
        o.componentWillUnmount();
      } catch (r) {
        ht.__e(r, e);
      }
    o.base = o.__P = null, t.__c = void 0;
  }
  if (o = t.__k)
    for (i = 0; i < o.length; i++)
      o[i] && Cd(o[i], e, n || typeof t.type != "function");
  n || t.__e == null || vd(t.__e), t.__ = t.__e = t.__d = void 0;
}
function Gv(t, e, n) {
  return this.constructor(t, n);
}
pd = yd.slice, ht = { __e: function(t, e, n, o) {
  for (var i, r, l; e = e.__; )
    if ((i = e.__c) && !i.__)
      try {
        if ((r = i.constructor) && r.getDerivedStateFromError != null && (i.setState(r.getDerivedStateFromError(t)), l = i.__d), i.componentDidCatch != null && (i.componentDidCatch(t, o || {}), l = i.__d), l)
          return i.__E = i;
      } catch (c) {
        t = c;
      }
  throw t;
} }, md = 0, Lo.prototype.setState = function(t, e) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = Oe({}, this.state), typeof t == "function" && (t = t(Oe({}, n), this.props)), t && Oe(n, t), t != null && this.__v && (e && this._sb.push(e), U_(this));
}, Lo.prototype.forceUpdate = function(t) {
  this.__v && (this.__e = !0, t && this.__h.push(t), U_(this));
}, Lo.prototype.render = ga, Ao = [], ti.__r = 0;
var Xv = 0;
function fs(t, e, n, o, i) {
  var r, l, c = {};
  for (l in e)
    l == "ref" ? r = e[l] : c[l] = e[l];
  var _ = { type: t, props: c, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: --Xv, __source: i, __self: o };
  if (typeof t == "function" && (r = t.defaultProps))
    for (l in r)
      c[l] === void 0 && (c[l] = r[l]);
  return ht.vnode && ht.vnode(_), _;
}
var ms;
let Kv = (ms = class extends Lo {
  render() {
    const { percent: e, circleSize: n, circleBorderSize: o, circleBgColor: i, circleColor: r } = this.props, l = (n - o) / 2, c = n / 2;
    return /* @__PURE__ */ fs("svg", { width: n, height: n, class: "progress-circle", children: [
      /* @__PURE__ */ fs("circle", { cx: c, cy: c, r: l, stroke: i, "stroke-width": o }),
      /* @__PURE__ */ fs("circle", { cx: c, cy: c, r: l, stroke: r, "stroke-dasharray": Math.PI * l * 2, "stroke-dashoffset": Math.PI * l * 2 * (100 - e) / 100, "stroke-width": o }),
      /* @__PURE__ */ fs("text", { x: c, y: c + o / 4, "dominant-baseline": "middle", style: { fontSize: `${l}px` }, children: Math.round(e) })
    ] });
  }
}, M(ms, "NAME", "zui.progress-circle"), M(ms, "defaultProps", {
  circleSize: 24,
  circleBorderSize: 2,
  circleBgColor: "var(--progress-circle-bg)",
  circleColor: "var(--progress-circle-bar-color)"
}), ms);
class z_ extends xt {
}
M(z_, "NAME", "table-sorter"), M(z_, "Component", Kv);
function Jv(t) {
  const e = typeof t == "string" ? document.querySelector(t) : t;
  if (!e)
    return !1;
  if (e instanceof HTMLInputElement || e instanceof HTMLTextAreaElement)
    return e.select(), !0;
  if (window.getSelection) {
    const n = window.getSelection();
    if (n) {
      const o = document.createRange();
      return o.selectNodeContents(e), n.removeAllRanges(), n.addRange(o), !0;
    }
  }
  return !1;
}
function Zv(t) {
  document.readyState !== "loading" ? t() : document.addEventListener("DOMContentLoaded", t);
}
function Qv(t, e) {
  const n = typeof t == "string" ? document.querySelector(t) : t;
  if (!n)
    return !1;
  const o = n.getBoundingClientRect(), i = window.innerHeight || document.documentElement.clientHeight, r = window.innerWidth || document.documentElement.clientWidth;
  if (e != null && e.fullyCheck)
    return o.left >= 0 && o.top >= 0 && o.left + o.width <= r && o.top + o.height <= i;
  const l = o.top <= i && o.top + o.height >= 0, c = o.left <= r && o.left + o.width >= 0;
  return l && c;
}
const ek = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  classes: F,
  domReady: Zv,
  getClassList: Xl,
  isElementVisible: Qv,
  selectText: Jv
}, Symbol.toStringTag, { value: "Module" }));
let tb = (t = 21) => crypto.getRandomValues(new Uint8Array(t)).reduce((e, n) => (n &= 63, n < 36 ? e += n.toString(36) : n < 62 ? e += (n - 26).toString(36).toUpperCase() : n > 62 ? e += "-" : e += "_", e), "");
var Er, xe, Qt, Nn, Pn, Es;
const Ia = class {
  /**
   * Create new store instance
   * @param name Name of store
   * @param type Store type
   */
  constructor(e, n = "local") {
    E(this, Pn);
    E(this, Er, void 0);
    E(this, xe, void 0);
    E(this, Qt, void 0);
    E(this, Nn, void 0);
    H(this, Er, n), H(this, xe, `ZUI_STORE:${e ?? tb()}`), H(this, Qt, n === "local" ? localStorage : sessionStorage);
  }
  /**
   * Get store type
   */
  get type() {
    return g(this, Er);
  }
  /**
   * Get session type store instance
   */
  get session() {
    return this.type === "session" ? this : (g(this, Nn) || H(this, Nn, new Ia(g(this, xe), "session")), g(this, Nn));
  }
  /**
   * Get value from store
   * @param key Key to get
   * @param defaultValue default value to return if key is not found
   * @returns Value of key or defaultValue if key is not found
   */
  get(e, n) {
    const o = g(this, Qt).getItem(W(this, Pn, Es).call(this, e));
    return typeof o == "string" ? JSON.parse(o) : o ?? n;
  }
  /**
   * Set key-value pair in store
   * @param key Key to set
   * @param value Value to set
   */
  set(e, n) {
    if (n == null)
      return this.remove(e);
    g(this, Qt).setItem(W(this, Pn, Es).call(this, e), JSON.stringify(n));
  }
  /**
   * Remove key-value pair from store
   * @param key Key to remove
   */
  remove(e) {
    g(this, Qt).removeItem(W(this, Pn, Es).call(this, e));
  }
  /**
   * Iterate all key-value pairs in store
   * @param callback Callback function to call for each key-value pair in the store
   */
  each(e) {
    for (let n = 0; n < g(this, Qt).length; n++) {
      const o = g(this, Qt).key(n);
      if (o != null && o.startsWith(g(this, xe))) {
        const i = g(this, Qt).getItem(o);
        typeof i == "string" && e(o.substring(g(this, xe).length + 1), JSON.parse(i));
      }
    }
  }
  /**
   * Get all key values in store
   * @returns All key-value pairs in the store
   */
  getAll() {
    const e = {};
    return this.each((n, o) => {
      e[n] = o;
    }), e;
  }
};
let ni = Ia;
Er = new WeakMap(), xe = new WeakMap(), Qt = new WeakMap(), Nn = new WeakMap(), Pn = new WeakSet(), Es = function(e) {
  return `${g(this, xe)}:${e}`;
};
const eb = new ni("DEFAULT");
function nb(t, e = "local") {
  return new ni(t, e);
}
Object.assign(eb, { create: nb });
var Ed, dt, Td, Mo, V_, Ad = {}, Ld = [], ob = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function He(t, e) {
  for (var n in e)
    t[n] = e[n];
  return t;
}
function Md(t) {
  var e = t.parentNode;
  e && e.removeChild(t);
}
function $c(t, e, n, o, i) {
  var r = { type: t, props: e, key: n, ref: o, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: i ?? ++Td };
  return i == null && dt.vnode != null && dt.vnode(r), r;
}
function ya(t) {
  return t.children;
}
function Ro(t, e) {
  this.props = t, this.context = e;
}
function ar(t, e) {
  if (e == null)
    return t.__ ? ar(t.__, t.__.__k.indexOf(t) + 1) : null;
  for (var n; e < t.__k.length; e++)
    if ((n = t.__k[e]) != null && n.__e != null)
      return n.__e;
  return typeof t.type == "function" ? ar(t) : null;
}
function Rd(t) {
  var e, n;
  if ((t = t.__) != null && t.__c != null) {
    for (t.__e = t.__c.base = null, e = 0; e < t.__k.length; e++)
      if ((n = t.__k[e]) != null && n.__e != null) {
        t.__e = t.__c.base = n.__e;
        break;
      }
    return Rd(t);
  }
}
function Y_(t) {
  (!t.__d && (t.__d = !0) && Mo.push(t) && !oi.__r++ || V_ !== dt.debounceRendering) && ((V_ = dt.debounceRendering) || setTimeout)(oi);
}
function oi() {
  for (var t; oi.__r = Mo.length; )
    t = Mo.sort(function(e, n) {
      return e.__v.__b - n.__v.__b;
    }), Mo = [], t.some(function(e) {
      var n, o, i, r, l, c;
      e.__d && (l = (r = (n = e).__v).__e, (c = n.__P) && (o = [], (i = He({}, r)).__v = r.__v + 1, Od(c, r, i, n.__n, c.ownerSVGElement !== void 0, r.__h != null ? [l] : null, o, l ?? ar(r), r.__h), sb(o, r), r.__e != l && Rd(r)));
    });
}
function Dd(t, e, n, o, i, r, l, c, _, h) {
  var s, d, f, a, u, b, p, m = o && o.__k || Ld, y = m.length;
  for (n.__k = [], s = 0; s < e.length; s++)
    if ((a = n.__k[s] = (a = e[s]) == null || typeof a == "boolean" ? null : typeof a == "string" || typeof a == "number" || typeof a == "bigint" ? $c(null, a, null, null, a) : Array.isArray(a) ? $c(ya, { children: a }, null, null, null) : a.__b > 0 ? $c(a.type, a.props, a.key, a.ref ? a.ref : null, a.__v) : a) != null) {
      if (a.__ = n, a.__b = n.__b + 1, (f = m[s]) === null || f && a.key == f.key && a.type === f.type)
        m[s] = void 0;
      else
        for (d = 0; d < y; d++) {
          if ((f = m[d]) && a.key == f.key && a.type === f.type) {
            m[d] = void 0;
            break;
          }
          f = null;
        }
      Od(t, a, f = f || Ad, i, r, l, c, _, h), u = a.__e, (d = a.ref) && f.ref != d && (p || (p = []), f.ref && p.push(f.ref, null, a), p.push(d, a.__c || u, a)), u != null ? (b == null && (b = u), typeof a.type == "function" && a.__k === f.__k ? a.__d = _ = Nd(a, _, t) : _ = Pd(t, a, f, m, u, _), typeof n.type == "function" && (n.__d = _)) : _ && f.__e == _ && _.parentNode != t && (_ = ar(f));
    }
  for (n.__e = b, s = y; s--; )
    m[s] != null && Wd(m[s], m[s]);
  if (p)
    for (s = 0; s < p.length; s++)
      Hd(p[s], p[++s], p[++s]);
}
function Nd(t, e, n) {
  for (var o, i = t.__k, r = 0; i && r < i.length; r++)
    (o = i[r]) && (o.__ = t, e = typeof o.type == "function" ? Nd(o, e, n) : Pd(n, o, o, i, o.__e, e));
  return e;
}
function Pd(t, e, n, o, i, r) {
  var l, c, _;
  if (e.__d !== void 0)
    l = e.__d, e.__d = void 0;
  else if (n == null || i != r || i.parentNode == null)
    t:
      if (r == null || r.parentNode !== t)
        t.appendChild(i), l = null;
      else {
        for (c = r, _ = 0; (c = c.nextSibling) && _ < o.length; _ += 2)
          if (c == i)
            break t;
        t.insertBefore(i, r), l = r;
      }
  return l !== void 0 ? l : i.nextSibling;
}
function rb(t, e, n, o, i) {
  var r;
  for (r in n)
    r === "children" || r === "key" || r in e || ri(t, r, null, n[r], o);
  for (r in e)
    i && typeof e[r] != "function" || r === "children" || r === "key" || r === "value" || r === "checked" || n[r] === e[r] || ri(t, r, e[r], n[r], o);
}
function q_(t, e, n) {
  e[0] === "-" ? t.setProperty(e, n) : t[e] = n == null ? "" : typeof n != "number" || ob.test(e) ? n : n + "px";
}
function ri(t, e, n, o, i) {
  var r;
  t:
    if (e === "style")
      if (typeof n == "string")
        t.style.cssText = n;
      else {
        if (typeof o == "string" && (t.style.cssText = o = ""), o)
          for (e in o)
            n && e in n || q_(t.style, e, "");
        if (n)
          for (e in n)
            o && n[e] === o[e] || q_(t.style, e, n[e]);
      }
    else if (e[0] === "o" && e[1] === "n")
      r = e !== (e = e.replace(/Capture$/, "")), e = e.toLowerCase() in t ? e.toLowerCase().slice(2) : e.slice(2), t.l || (t.l = {}), t.l[e + r] = n, n ? o || t.addEventListener(e, r ? X_ : G_, r) : t.removeEventListener(e, r ? X_ : G_, r);
    else if (e !== "dangerouslySetInnerHTML") {
      if (i)
        e = e.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
      else if (e !== "href" && e !== "list" && e !== "form" && e !== "tabIndex" && e !== "download" && e in t)
        try {
          t[e] = n ?? "";
          break t;
        } catch {
        }
      typeof n == "function" || (n == null || n === !1 && e.indexOf("-") == -1 ? t.removeAttribute(e) : t.setAttribute(e, n));
    }
}
function G_(t) {
  this.l[t.type + !1](dt.event ? dt.event(t) : t);
}
function X_(t) {
  this.l[t.type + !0](dt.event ? dt.event(t) : t);
}
function Od(t, e, n, o, i, r, l, c, _) {
  var h, s, d, f, a, u, b, p, m, y, w, k, C, A, T, v = e.type;
  if (e.constructor !== void 0)
    return null;
  n.__h != null && (_ = n.__h, c = e.__e = n.__e, e.__h = null, r = [c]), (h = dt.__b) && h(e);
  try {
    t:
      if (typeof v == "function") {
        if (p = e.props, m = (h = v.contextType) && o[h.__c], y = h ? m ? m.props.value : h.__ : o, n.__c ? b = (s = e.__c = n.__c).__ = s.__E : ("prototype" in v && v.prototype.render ? e.__c = s = new v(p, y) : (e.__c = s = new Ro(p, y), s.constructor = v, s.render = lb), m && m.sub(s), s.props = p, s.state || (s.state = {}), s.context = y, s.__n = o, d = s.__d = !0, s.__h = [], s._sb = []), s.__s == null && (s.__s = s.state), v.getDerivedStateFromProps != null && (s.__s == s.state && (s.__s = He({}, s.__s)), He(s.__s, v.getDerivedStateFromProps(p, s.__s))), f = s.props, a = s.state, d)
          v.getDerivedStateFromProps == null && s.componentWillMount != null && s.componentWillMount(), s.componentDidMount != null && s.__h.push(s.componentDidMount);
        else {
          if (v.getDerivedStateFromProps == null && p !== f && s.componentWillReceiveProps != null && s.componentWillReceiveProps(p, y), !s.__e && s.shouldComponentUpdate != null && s.shouldComponentUpdate(p, s.__s, y) === !1 || e.__v === n.__v) {
            for (s.props = p, s.state = s.__s, e.__v !== n.__v && (s.__d = !1), s.__v = e, e.__e = n.__e, e.__k = n.__k, e.__k.forEach(function(x) {
              x && (x.__ = e);
            }), w = 0; w < s._sb.length; w++)
              s.__h.push(s._sb[w]);
            s._sb = [], s.__h.length && l.push(s);
            break t;
          }
          s.componentWillUpdate != null && s.componentWillUpdate(p, s.__s, y), s.componentDidUpdate != null && s.__h.push(function() {
            s.componentDidUpdate(f, a, u);
          });
        }
        if (s.context = y, s.props = p, s.__v = e, s.__P = t, k = dt.__r, C = 0, "prototype" in v && v.prototype.render) {
          for (s.state = s.__s, s.__d = !1, k && k(e), h = s.render(s.props, s.state, s.context), A = 0; A < s._sb.length; A++)
            s.__h.push(s._sb[A]);
          s._sb = [];
        } else
          do
            s.__d = !1, k && k(e), h = s.render(s.props, s.state, s.context), s.state = s.__s;
          while (s.__d && ++C < 25);
        s.state = s.__s, s.getChildContext != null && (o = He(He({}, o), s.getChildContext())), d || s.getSnapshotBeforeUpdate == null || (u = s.getSnapshotBeforeUpdate(f, a)), T = h != null && h.type === ya && h.key == null ? h.props.children : h, Dd(t, Array.isArray(T) ? T : [T], e, n, o, i, r, l, c, _), s.base = e.__e, e.__h = null, s.__h.length && l.push(s), b && (s.__E = s.__ = null), s.__e = !1;
      } else
        r == null && e.__v === n.__v ? (e.__k = n.__k, e.__e = n.__e) : e.__e = ib(n.__e, e, n, o, i, r, l, _);
    (h = dt.diffed) && h(e);
  } catch (x) {
    e.__v = null, (_ || r != null) && (e.__e = c, e.__h = !!_, r[r.indexOf(c)] = null), dt.__e(x, e, n);
  }
}
function sb(t, e) {
  dt.__c && dt.__c(e, t), t.some(function(n) {
    try {
      t = n.__h, n.__h = [], t.some(function(o) {
        o.call(n);
      });
    } catch (o) {
      dt.__e(o, n.__v);
    }
  });
}
function ib(t, e, n, o, i, r, l, c) {
  var _, h, s, d = n.props, f = e.props, a = e.type, u = 0;
  if (a === "svg" && (i = !0), r != null) {
    for (; u < r.length; u++)
      if ((_ = r[u]) && "setAttribute" in _ == !!a && (a ? _.localName === a : _.nodeType === 3)) {
        t = _, r[u] = null;
        break;
      }
  }
  if (t == null) {
    if (a === null)
      return document.createTextNode(f);
    t = i ? document.createElementNS("http://www.w3.org/2000/svg", a) : document.createElement(a, f.is && f), r = null, c = !1;
  }
  if (a === null)
    d === f || c && t.data === f || (t.data = f);
  else {
    if (r = r && Ed.call(t.childNodes), h = (d = n.props || Ad).dangerouslySetInnerHTML, s = f.dangerouslySetInnerHTML, !c) {
      if (r != null)
        for (d = {}, u = 0; u < t.attributes.length; u++)
          d[t.attributes[u].name] = t.attributes[u].value;
      (s || h) && (s && (h && s.__html == h.__html || s.__html === t.innerHTML) || (t.innerHTML = s && s.__html || ""));
    }
    if (rb(t, f, d, i, c), s)
      e.__k = [];
    else if (u = e.props.children, Dd(t, Array.isArray(u) ? u : [u], e, n, o, i && a !== "foreignObject", r, l, r ? r[0] : n.__k && ar(n, 0), c), r != null)
      for (u = r.length; u--; )
        r[u] != null && Md(r[u]);
    c || ("value" in f && (u = f.value) !== void 0 && (u !== t.value || a === "progress" && !u || a === "option" && u !== d.value) && ri(t, "value", u, d.value, !1), "checked" in f && (u = f.checked) !== void 0 && u !== t.checked && ri(t, "checked", u, d.checked, !1));
  }
  return t;
}
function Hd(t, e, n) {
  try {
    typeof t == "function" ? t(e) : t.current = e;
  } catch (o) {
    dt.__e(o, n);
  }
}
function Wd(t, e, n) {
  var o, i;
  if (dt.unmount && dt.unmount(t), (o = t.ref) && (o.current && o.current !== t.__e || Hd(o, null, e)), (o = t.__c) != null) {
    if (o.componentWillUnmount)
      try {
        o.componentWillUnmount();
      } catch (r) {
        dt.__e(r, e);
      }
    o.base = o.__P = null, t.__c = void 0;
  }
  if (o = t.__k)
    for (i = 0; i < o.length; i++)
      o[i] && Wd(o[i], e, n || typeof t.type != "function");
  n || t.__e == null || Md(t.__e), t.__ = t.__e = t.__d = void 0;
}
function lb(t, e, n) {
  return this.constructor(t, n);
}
Ed = Ld.slice, dt = { __e: function(t, e, n, o) {
  for (var i, r, l; e = e.__; )
    if ((i = e.__c) && !i.__)
      try {
        if ((r = i.constructor) && r.getDerivedStateFromError != null && (i.setState(r.getDerivedStateFromError(t)), l = i.__d), i.componentDidCatch != null && (i.componentDidCatch(t, o || {}), l = i.__d), l)
          return i.__E = i;
      } catch (c) {
        t = c;
      }
  throw t;
} }, Td = 0, Ro.prototype.setState = function(t, e) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = He({}, this.state), typeof t == "function" && (t = t(He({}, n), this.props)), t && He(n, t), t != null && this.__v && (e && this._sb.push(e), Y_(this));
}, Ro.prototype.forceUpdate = function(t) {
  this.__v && (this.__e = !0, t && this.__h.push(t), Y_(this));
}, Ro.prototype.render = ya, Mo = [], oi.__r = 0;
var cb = 0;
function kc(t, e, n, o, i) {
  var r, l, c = {};
  for (l in e)
    l == "ref" ? r = e[l] : c[l] = e[l];
  var _ = { type: t, props: c, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: --cb, __source: i, __self: o };
  if (typeof t == "function" && (r = t.defaultProps))
    for (l in r)
      c[l] === void 0 && (c[l] = r[l]);
  return dt.vnode && dt.vnode(_), _;
}
function ab(t) {
  if (t.indexOf("#") === 0 && (t = t.slice(1)), t.length === 3 && (t = t[0] + t[0] + t[1] + t[1] + t[2] + t[2]), t.length !== 6)
    throw new Error(`Invalid HEX color "${t}".`);
  return [
    parseInt(t.slice(0, 2), 16),
    // r
    parseInt(t.slice(2, 4), 16),
    // g
    parseInt(t.slice(4, 6), 16)
    // b
  ];
}
function _b(t) {
  const [e, n, o] = typeof t == "string" ? ab(t) : t;
  return e * 0.299 + n * 0.587 + o * 0.114 > 186;
}
function K_(t, e) {
  return _b(t) ? (e == null ? void 0 : e.dark) ?? "#333333" : (e == null ? void 0 : e.light) ?? "#ffffff";
}
function J_(t, e = 255) {
  return Math.min(Math.max(t, 0), e);
}
function fb(t, e, n) {
  t = t % 360 / 360, e = J_(e), n = J_(n);
  const o = n <= 0.5 ? n * (e + 1) : n + e - n * e, i = n * 2 - o, r = (l) => (l = l < 0 ? l + 1 : l > 1 ? l - 1 : l, l * 6 < 1 ? i + (o - i) * l * 6 : l * 2 < 1 ? o : l * 3 < 2 ? i + (o - i) * (2 / 3 - l) * 6 : i);
  return [
    r(t + 1 / 3) * 255,
    r(t) * 255,
    r(t - 1 / 3) * 255
  ];
}
function ub(t) {
  let e = 0;
  if (typeof t != "string" && (t = String(t)), t && t.length)
    for (let n = 0; n < t.length; ++n)
      e += (n + 1) * t.charCodeAt(n);
  return e;
}
function hb(t, e) {
  return /^[\u4e00-\u9fa5\s]+$/.test(t) ? t = t.length <= e ? t : t.substring(t.length - e) : /^[A-Za-z\d\s]+$/.test(t) ? t = t[0].toUpperCase() : t = t.length <= e ? t : t.substring(0, e), t;
}
let db = class extends Ro {
  render() {
    const {
      className: e,
      style: n,
      size: o = "",
      circle: i,
      rounded: r,
      background: l,
      foreColor: c,
      text: _,
      code: h,
      maxTextLength: s = 2,
      src: d,
      hueDistance: f = 43,
      saturation: a = 0.4,
      lightness: u = 0.6,
      children: b,
      ...p
    } = this.props, m = ["avatar", e], y = { ...n, background: l, color: c };
    let w = 32;
    o && (typeof o == "number" ? (y.width = `${o}px`, y.height = `${o}px`, y.fontSize = `${Math.max(12, Math.round(o / 2))}px`, w = o) : (m.push(`size-${o}`), w = { xs: 20, sm: 24, lg: 48, xl: 80 }[o])), i ? m.push("circle") : r && (typeof r == "number" ? y.borderRadius = `${r}px` : m.push(`rounded-${r}`));
    let k;
    if (d)
      m.push("has-img"), k = /* @__PURE__ */ kc("img", { className: "avatar-img", src: d, alt: _ });
    else if (_ != null && _.length) {
      const C = hb(_, s);
      if (m.push("has-text", `has-text-${C.length}`), l)
        !c && l && (y.color = K_(l));
      else {
        const T = h ?? _, v = (typeof T == "number" ? T : ub(T)) * f % 360;
        if (y.background = `hsl(${v},${a * 100}%,${u * 100}%)`, !c) {
          const x = fb(v, a, u);
          y.color = K_(x);
        }
      }
      let A;
      w && w < 14 * C.length && (A = { transform: `scale(${w / (14 * C.length)})`, whiteSpace: "nowrap" }), k = /* @__PURE__ */ kc("div", { "data-actualSize": w, className: "avatar-text", style: A, children: C });
    }
    return /* @__PURE__ */ kc(
      "div",
      {
        className: F(m),
        style: y,
        ...p,
        children: [
          k,
          b
        ]
      }
    );
  }
};
class Z_ extends xt {
}
M(Z_, "NAME", "avatar"), M(Z_, "Component", db);
class Q_ extends xt {
}
M(Q_, "NAME", "btngroup"), M(Q_, "Component", ud);
var ec, ot, Id, Do, tf, si = {}, Ud = [], pb = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function We(t, e) {
  for (var n in e)
    t[n] = e[n];
  return t;
}
function Fd(t) {
  var e = t.parentNode;
  e && e.removeChild(t);
}
function _r(t, e, n) {
  var o, i, r, l = {};
  for (r in e)
    r == "key" ? o = e[r] : r == "ref" ? i = e[r] : l[r] = e[r];
  if (arguments.length > 2 && (l.children = arguments.length > 3 ? ec.call(arguments, 2) : n), typeof t == "function" && t.defaultProps != null)
    for (r in t.defaultProps)
      l[r] === void 0 && (l[r] = t.defaultProps[r]);
  return Ts(t, l, o, i, null);
}
function Ts(t, e, n, o, i) {
  var r = { type: t, props: e, key: n, ref: o, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: i ?? ++Id };
  return i == null && ot.vnode != null && ot.vnode(r), r;
}
function mb() {
  return { current: null };
}
function nc(t) {
  return t.children;
}
function No(t, e) {
  this.props = t, this.context = e;
}
function fr(t, e) {
  if (e == null)
    return t.__ ? fr(t.__, t.__.__k.indexOf(t) + 1) : null;
  for (var n; e < t.__k.length; e++)
    if ((n = t.__k[e]) != null && n.__e != null)
      return n.__e;
  return typeof t.type == "function" ? fr(t) : null;
}
function Bd(t) {
  var e, n;
  if ((t = t.__) != null && t.__c != null) {
    for (t.__e = t.__c.base = null, e = 0; e < t.__k.length; e++)
      if ((n = t.__k[e]) != null && n.__e != null) {
        t.__e = t.__c.base = n.__e;
        break;
      }
    return Bd(t);
  }
}
function ef(t) {
  (!t.__d && (t.__d = !0) && Do.push(t) && !ii.__r++ || tf !== ot.debounceRendering) && ((tf = ot.debounceRendering) || setTimeout)(ii);
}
function ii() {
  for (var t; ii.__r = Do.length; )
    t = Do.sort(function(e, n) {
      return e.__v.__b - n.__v.__b;
    }), Do = [], t.some(function(e) {
      var n, o, i, r, l, c;
      e.__d && (l = (r = (n = e).__v).__e, (c = n.__P) && (o = [], (i = We({}, r)).__v = r.__v + 1, va(c, r, i, n.__n, c.ownerSVGElement !== void 0, r.__h != null ? [l] : null, o, l ?? fr(r), r.__h), Yd(o, r), r.__e != l && Bd(r)));
    });
}
function jd(t, e, n, o, i, r, l, c, _, h) {
  var s, d, f, a, u, b, p, m = o && o.__k || Ud, y = m.length;
  for (n.__k = [], s = 0; s < e.length; s++)
    if ((a = n.__k[s] = (a = e[s]) == null || typeof a == "boolean" ? null : typeof a == "string" || typeof a == "number" || typeof a == "bigint" ? Ts(null, a, null, null, a) : Array.isArray(a) ? Ts(nc, { children: a }, null, null, null) : a.__b > 0 ? Ts(a.type, a.props, a.key, a.ref ? a.ref : null, a.__v) : a) != null) {
      if (a.__ = n, a.__b = n.__b + 1, (f = m[s]) === null || f && a.key == f.key && a.type === f.type)
        m[s] = void 0;
      else
        for (d = 0; d < y; d++) {
          if ((f = m[d]) && a.key == f.key && a.type === f.type) {
            m[d] = void 0;
            break;
          }
          f = null;
        }
      va(t, a, f = f || si, i, r, l, c, _, h), u = a.__e, (d = a.ref) && f.ref != d && (p || (p = []), f.ref && p.push(f.ref, null, a), p.push(d, a.__c || u, a)), u != null ? (b == null && (b = u), typeof a.type == "function" && a.__k === f.__k ? a.__d = _ = zd(a, _, t) : _ = Vd(t, a, f, m, u, _), typeof n.type == "function" && (n.__d = _)) : _ && f.__e == _ && _.parentNode != t && (_ = fr(f));
    }
  for (n.__e = b, s = y; s--; )
    m[s] != null && Gd(m[s], m[s]);
  if (p)
    for (s = 0; s < p.length; s++)
      qd(p[s], p[++s], p[++s]);
}
function zd(t, e, n) {
  for (var o, i = t.__k, r = 0; i && r < i.length; r++)
    (o = i[r]) && (o.__ = t, e = typeof o.type == "function" ? zd(o, e, n) : Vd(n, o, o, i, o.__e, e));
  return e;
}
function Vd(t, e, n, o, i, r) {
  var l, c, _;
  if (e.__d !== void 0)
    l = e.__d, e.__d = void 0;
  else if (n == null || i != r || i.parentNode == null)
    t:
      if (r == null || r.parentNode !== t)
        t.appendChild(i), l = null;
      else {
        for (c = r, _ = 0; (c = c.nextSibling) && _ < o.length; _ += 2)
          if (c == i)
            break t;
        t.insertBefore(i, r), l = r;
      }
  return l !== void 0 ? l : i.nextSibling;
}
function gb(t, e, n, o, i) {
  var r;
  for (r in n)
    r === "children" || r === "key" || r in e || li(t, r, null, n[r], o);
  for (r in e)
    i && typeof e[r] != "function" || r === "children" || r === "key" || r === "value" || r === "checked" || n[r] === e[r] || li(t, r, e[r], n[r], o);
}
function nf(t, e, n) {
  e[0] === "-" ? t.setProperty(e, n) : t[e] = n == null ? "" : typeof n != "number" || pb.test(e) ? n : n + "px";
}
function li(t, e, n, o, i) {
  var r;
  t:
    if (e === "style")
      if (typeof n == "string")
        t.style.cssText = n;
      else {
        if (typeof o == "string" && (t.style.cssText = o = ""), o)
          for (e in o)
            n && e in n || nf(t.style, e, "");
        if (n)
          for (e in n)
            o && n[e] === o[e] || nf(t.style, e, n[e]);
      }
    else if (e[0] === "o" && e[1] === "n")
      r = e !== (e = e.replace(/Capture$/, "")), e = e.toLowerCase() in t ? e.toLowerCase().slice(2) : e.slice(2), t.l || (t.l = {}), t.l[e + r] = n, n ? o || t.addEventListener(e, r ? rf : of, r) : t.removeEventListener(e, r ? rf : of, r);
    else if (e !== "dangerouslySetInnerHTML") {
      if (i)
        e = e.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
      else if (e !== "href" && e !== "list" && e !== "form" && e !== "tabIndex" && e !== "download" && e in t)
        try {
          t[e] = n ?? "";
          break t;
        } catch {
        }
      typeof n == "function" || (n == null || n === !1 && e.indexOf("-") == -1 ? t.removeAttribute(e) : t.setAttribute(e, n));
    }
}
function of(t) {
  this.l[t.type + !1](ot.event ? ot.event(t) : t);
}
function rf(t) {
  this.l[t.type + !0](ot.event ? ot.event(t) : t);
}
function va(t, e, n, o, i, r, l, c, _) {
  var h, s, d, f, a, u, b, p, m, y, w, k, C, A, T, v = e.type;
  if (e.constructor !== void 0)
    return null;
  n.__h != null && (_ = n.__h, c = e.__e = n.__e, e.__h = null, r = [c]), (h = ot.__b) && h(e);
  try {
    t:
      if (typeof v == "function") {
        if (p = e.props, m = (h = v.contextType) && o[h.__c], y = h ? m ? m.props.value : h.__ : o, n.__c ? b = (s = e.__c = n.__c).__ = s.__E : ("prototype" in v && v.prototype.render ? e.__c = s = new v(p, y) : (e.__c = s = new No(p, y), s.constructor = v, s.render = vb), m && m.sub(s), s.props = p, s.state || (s.state = {}), s.context = y, s.__n = o, d = s.__d = !0, s.__h = [], s._sb = []), s.__s == null && (s.__s = s.state), v.getDerivedStateFromProps != null && (s.__s == s.state && (s.__s = We({}, s.__s)), We(s.__s, v.getDerivedStateFromProps(p, s.__s))), f = s.props, a = s.state, d)
          v.getDerivedStateFromProps == null && s.componentWillMount != null && s.componentWillMount(), s.componentDidMount != null && s.__h.push(s.componentDidMount);
        else {
          if (v.getDerivedStateFromProps == null && p !== f && s.componentWillReceiveProps != null && s.componentWillReceiveProps(p, y), !s.__e && s.shouldComponentUpdate != null && s.shouldComponentUpdate(p, s.__s, y) === !1 || e.__v === n.__v) {
            for (s.props = p, s.state = s.__s, e.__v !== n.__v && (s.__d = !1), s.__v = e, e.__e = n.__e, e.__k = n.__k, e.__k.forEach(function(x) {
              x && (x.__ = e);
            }), w = 0; w < s._sb.length; w++)
              s.__h.push(s._sb[w]);
            s._sb = [], s.__h.length && l.push(s);
            break t;
          }
          s.componentWillUpdate != null && s.componentWillUpdate(p, s.__s, y), s.componentDidUpdate != null && s.__h.push(function() {
            s.componentDidUpdate(f, a, u);
          });
        }
        if (s.context = y, s.props = p, s.__v = e, s.__P = t, k = ot.__r, C = 0, "prototype" in v && v.prototype.render) {
          for (s.state = s.__s, s.__d = !1, k && k(e), h = s.render(s.props, s.state, s.context), A = 0; A < s._sb.length; A++)
            s.__h.push(s._sb[A]);
          s._sb = [];
        } else
          do
            s.__d = !1, k && k(e), h = s.render(s.props, s.state, s.context), s.state = s.__s;
          while (s.__d && ++C < 25);
        s.state = s.__s, s.getChildContext != null && (o = We(We({}, o), s.getChildContext())), d || s.getSnapshotBeforeUpdate == null || (u = s.getSnapshotBeforeUpdate(f, a)), T = h != null && h.type === nc && h.key == null ? h.props.children : h, jd(t, Array.isArray(T) ? T : [T], e, n, o, i, r, l, c, _), s.base = e.__e, e.__h = null, s.__h.length && l.push(s), b && (s.__E = s.__ = null), s.__e = !1;
      } else
        r == null && e.__v === n.__v ? (e.__k = n.__k, e.__e = n.__e) : e.__e = yb(n.__e, e, n, o, i, r, l, _);
    (h = ot.diffed) && h(e);
  } catch (x) {
    e.__v = null, (_ || r != null) && (e.__e = c, e.__h = !!_, r[r.indexOf(c)] = null), ot.__e(x, e, n);
  }
}
function Yd(t, e) {
  ot.__c && ot.__c(e, t), t.some(function(n) {
    try {
      t = n.__h, n.__h = [], t.some(function(o) {
        o.call(n);
      });
    } catch (o) {
      ot.__e(o, n.__v);
    }
  });
}
function yb(t, e, n, o, i, r, l, c) {
  var _, h, s, d = n.props, f = e.props, a = e.type, u = 0;
  if (a === "svg" && (i = !0), r != null) {
    for (; u < r.length; u++)
      if ((_ = r[u]) && "setAttribute" in _ == !!a && (a ? _.localName === a : _.nodeType === 3)) {
        t = _, r[u] = null;
        break;
      }
  }
  if (t == null) {
    if (a === null)
      return document.createTextNode(f);
    t = i ? document.createElementNS("http://www.w3.org/2000/svg", a) : document.createElement(a, f.is && f), r = null, c = !1;
  }
  if (a === null)
    d === f || c && t.data === f || (t.data = f);
  else {
    if (r = r && ec.call(t.childNodes), h = (d = n.props || si).dangerouslySetInnerHTML, s = f.dangerouslySetInnerHTML, !c) {
      if (r != null)
        for (d = {}, u = 0; u < t.attributes.length; u++)
          d[t.attributes[u].name] = t.attributes[u].value;
      (s || h) && (s && (h && s.__html == h.__html || s.__html === t.innerHTML) || (t.innerHTML = s && s.__html || ""));
    }
    if (gb(t, f, d, i, c), s)
      e.__k = [];
    else if (u = e.props.children, jd(t, Array.isArray(u) ? u : [u], e, n, o, i && a !== "foreignObject", r, l, r ? r[0] : n.__k && fr(n, 0), c), r != null)
      for (u = r.length; u--; )
        r[u] != null && Fd(r[u]);
    c || ("value" in f && (u = f.value) !== void 0 && (u !== t.value || a === "progress" && !u || a === "option" && u !== d.value) && li(t, "value", u, d.value, !1), "checked" in f && (u = f.checked) !== void 0 && u !== t.checked && li(t, "checked", u, d.checked, !1));
  }
  return t;
}
function qd(t, e, n) {
  try {
    typeof t == "function" ? t(e) : t.current = e;
  } catch (o) {
    ot.__e(o, n);
  }
}
function Gd(t, e, n) {
  var o, i;
  if (ot.unmount && ot.unmount(t), (o = t.ref) && (o.current && o.current !== t.__e || qd(o, null, e)), (o = t.__c) != null) {
    if (o.componentWillUnmount)
      try {
        o.componentWillUnmount();
      } catch (r) {
        ot.__e(r, e);
      }
    o.base = o.__P = null, t.__c = void 0;
  }
  if (o = t.__k)
    for (i = 0; i < o.length; i++)
      o[i] && Gd(o[i], e, n || typeof t.type != "function");
  n || t.__e == null || Fd(t.__e), t.__ = t.__e = t.__d = void 0;
}
function vb(t, e, n) {
  return this.constructor(t, n);
}
function bb(t, e, n) {
  var o, i, r;
  ot.__ && ot.__(t, e), i = (o = typeof n == "function") ? null : n && n.__k || e.__k, r = [], va(e, t = (!o && n || e).__k = _r(nc, null, [t]), i || si, si, e.ownerSVGElement !== void 0, !o && n ? [n] : i ? null : e.firstChild ? ec.call(e.childNodes) : null, r, !o && n ? n : i ? i.__e : e.firstChild, o), Yd(r, t);
}
ec = Ud.slice, ot = { __e: function(t, e, n, o) {
  for (var i, r, l; e = e.__; )
    if ((i = e.__c) && !i.__)
      try {
        if ((r = i.constructor) && r.getDerivedStateFromError != null && (i.setState(r.getDerivedStateFromError(t)), l = i.__d), i.componentDidCatch != null && (i.componentDidCatch(t, o || {}), l = i.__d), l)
          return i.__E = i;
      } catch (c) {
        t = c;
      }
  throw t;
} }, Id = 0, No.prototype.setState = function(t, e) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = We({}, this.state), typeof t == "function" && (t = t(We({}, n), this.props)), t && We(n, t), t != null && this.__v && (e && this._sb.push(e), ef(this));
}, No.prototype.forceUpdate = function(t) {
  this.__v && (this.__e = !0, t && this.__h.push(t), ef(this));
}, No.prototype.render = nc, Do = [], ii.__r = 0;
var wb = 0;
function G(t, e, n, o, i) {
  var r, l, c = {};
  for (l in e)
    l == "ref" ? r = e[l] : c[l] = e[l];
  var _ = { type: t, props: c, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: --wb, __source: i, __self: o };
  if (typeof t == "function" && (r = t.defaultProps))
    for (l in r)
      c[l] === void 0 && (c[l] = r[l]);
  return ot.vnode && ot.vnode(_), _;
}
var Xd = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, J = {}, $b = {
  get exports() {
    return J;
  },
  set exports(t) {
    J = t;
  }
};
(function(t, e) {
  (function(n, o) {
    t.exports = o();
  })(Xd, function() {
    var n = 1e3, o = 6e4, i = 36e5, r = "millisecond", l = "second", c = "minute", _ = "hour", h = "day", s = "week", d = "month", f = "quarter", a = "year", u = "date", b = "Invalid Date", p = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, m = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, y = { name: "en", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), ordinal: function(D) {
      var S = ["th", "st", "nd", "rd"], $ = D % 100;
      return "[" + D + (S[($ - 20) % 10] || S[$] || S[0]) + "]";
    } }, w = function(D, S, $) {
      var N = String(D);
      return !N || N.length >= S ? D : "" + Array(S + 1 - N.length).join($) + D;
    }, k = { s: w, z: function(D) {
      var S = -D.utcOffset(), $ = Math.abs(S), N = Math.floor($ / 60), L = $ % 60;
      return (S <= 0 ? "+" : "-") + w(N, 2, "0") + ":" + w(L, 2, "0");
    }, m: function D(S, $) {
      if (S.date() < $.date())
        return -D($, S);
      var N = 12 * ($.year() - S.year()) + ($.month() - S.month()), L = S.clone().add(N, d), O = $ - L < 0, P = S.clone().add(N + (O ? -1 : 1), d);
      return +(-(N + ($ - L) / (O ? L - P : P - L)) || 0);
    }, a: function(D) {
      return D < 0 ? Math.ceil(D) || 0 : Math.floor(D);
    }, p: function(D) {
      return { M: d, y: a, w: s, d: h, D: u, h: _, m: c, s: l, ms: r, Q: f }[D] || String(D || "").toLowerCase().replace(/s$/, "");
    }, u: function(D) {
      return D === void 0;
    } }, C = "en", A = {};
    A[C] = y;
    var T = function(D) {
      return D instanceof V;
    }, v = function D(S, $, N) {
      var L;
      if (!S)
        return C;
      if (typeof S == "string") {
        var O = S.toLowerCase();
        A[O] && (L = O), $ && (A[O] = $, L = O);
        var P = S.split("-");
        if (!L && P.length > 1)
          return D(P[0]);
      } else {
        var I = S.name;
        A[I] = S, L = I;
      }
      return !N && L && (C = L), L || !N && C;
    }, x = function(D, S) {
      if (T(D))
        return D.clone();
      var $ = typeof S == "object" ? S : {};
      return $.date = D, $.args = arguments, new V($);
    }, R = k;
    R.l = v, R.i = T, R.w = function(D, S) {
      return x(D, { locale: S.$L, utc: S.$u, x: S.$x, $offset: S.$offset });
    };
    var V = function() {
      function D($) {
        this.$L = v($.locale, null, !0), this.parse($);
      }
      var S = D.prototype;
      return S.parse = function($) {
        this.$d = function(N) {
          var L = N.date, O = N.utc;
          if (L === null)
            return new Date(NaN);
          if (R.u(L))
            return new Date();
          if (L instanceof Date)
            return new Date(L);
          if (typeof L == "string" && !/Z$/i.test(L)) {
            var P = L.match(p);
            if (P) {
              var I = P[2] - 1 || 0, z = (P[7] || "0").substring(0, 3);
              return O ? new Date(Date.UTC(P[1], I, P[3] || 1, P[4] || 0, P[5] || 0, P[6] || 0, z)) : new Date(P[1], I, P[3] || 1, P[4] || 0, P[5] || 0, P[6] || 0, z);
            }
          }
          return new Date(L);
        }($), this.$x = $.x || {}, this.init();
      }, S.init = function() {
        var $ = this.$d;
        this.$y = $.getFullYear(), this.$M = $.getMonth(), this.$D = $.getDate(), this.$W = $.getDay(), this.$H = $.getHours(), this.$m = $.getMinutes(), this.$s = $.getSeconds(), this.$ms = $.getMilliseconds();
      }, S.$utils = function() {
        return R;
      }, S.isValid = function() {
        return this.$d.toString() !== b;
      }, S.isSame = function($, N) {
        var L = x($);
        return this.startOf(N) <= L && L <= this.endOf(N);
      }, S.isAfter = function($, N) {
        return x($) < this.startOf(N);
      }, S.isBefore = function($, N) {
        return this.endOf(N) < x($);
      }, S.$g = function($, N, L) {
        return R.u($) ? this[N] : this.set(L, $);
      }, S.unix = function() {
        return Math.floor(this.valueOf() / 1e3);
      }, S.valueOf = function() {
        return this.$d.getTime();
      }, S.startOf = function($, N) {
        var L = this, O = !!R.u(N) || N, P = R.p($), I = function(it, q) {
          var lt = R.w(L.$u ? Date.UTC(L.$y, q, it) : new Date(L.$y, q, it), L);
          return O ? lt : lt.endOf(h);
        }, z = function(it, q) {
          return R.w(L.toDate()[it].apply(L.toDate("s"), (O ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(q)), L);
        }, j = this.$W, X = this.$M, bt = this.$D, U = "set" + (this.$u ? "UTC" : "");
        switch (P) {
          case a:
            return O ? I(1, 0) : I(31, 11);
          case d:
            return O ? I(1, X) : I(0, X + 1);
          case s:
            var K = this.$locale().weekStart || 0, vt = (j < K ? j + 7 : j) - K;
            return I(O ? bt - vt : bt + (6 - vt), X);
          case h:
          case u:
            return z(U + "Hours", 0);
          case _:
            return z(U + "Minutes", 1);
          case c:
            return z(U + "Seconds", 2);
          case l:
            return z(U + "Milliseconds", 3);
          default:
            return this.clone();
        }
      }, S.endOf = function($) {
        return this.startOf($, !1);
      }, S.$set = function($, N) {
        var L, O = R.p($), P = "set" + (this.$u ? "UTC" : ""), I = (L = {}, L[h] = P + "Date", L[u] = P + "Date", L[d] = P + "Month", L[a] = P + "FullYear", L[_] = P + "Hours", L[c] = P + "Minutes", L[l] = P + "Seconds", L[r] = P + "Milliseconds", L)[O], z = O === h ? this.$D + (N - this.$W) : N;
        if (O === d || O === a) {
          var j = this.clone().set(u, 1);
          j.$d[I](z), j.init(), this.$d = j.set(u, Math.min(this.$D, j.daysInMonth())).$d;
        } else
          I && this.$d[I](z);
        return this.init(), this;
      }, S.set = function($, N) {
        return this.clone().$set($, N);
      }, S.get = function($) {
        return this[R.p($)]();
      }, S.add = function($, N) {
        var L, O = this;
        $ = Number($);
        var P = R.p(N), I = function(X) {
          var bt = x(O);
          return R.w(bt.date(bt.date() + Math.round(X * $)), O);
        };
        if (P === d)
          return this.set(d, this.$M + $);
        if (P === a)
          return this.set(a, this.$y + $);
        if (P === h)
          return I(1);
        if (P === s)
          return I(7);
        var z = (L = {}, L[c] = o, L[_] = i, L[l] = n, L)[P] || 1, j = this.$d.getTime() + $ * z;
        return R.w(j, this);
      }, S.subtract = function($, N) {
        return this.add(-1 * $, N);
      }, S.format = function($) {
        var N = this, L = this.$locale();
        if (!this.isValid())
          return L.invalidDate || b;
        var O = $ || "YYYY-MM-DDTHH:mm:ssZ", P = R.z(this), I = this.$H, z = this.$m, j = this.$M, X = L.weekdays, bt = L.months, U = function(q, lt, At, Lt) {
          return q && (q[lt] || q(N, O)) || At[lt].slice(0, Lt);
        }, K = function(q) {
          return R.s(I % 12 || 12, q, "0");
        }, vt = L.meridiem || function(q, lt, At) {
          var Lt = q < 12 ? "AM" : "PM";
          return At ? Lt.toLowerCase() : Lt;
        }, it = { YY: String(this.$y).slice(-2), YYYY: this.$y, M: j + 1, MM: R.s(j + 1, 2, "0"), MMM: U(L.monthsShort, j, bt, 3), MMMM: U(bt, j), D: this.$D, DD: R.s(this.$D, 2, "0"), d: String(this.$W), dd: U(L.weekdaysMin, this.$W, X, 2), ddd: U(L.weekdaysShort, this.$W, X, 3), dddd: X[this.$W], H: String(I), HH: R.s(I, 2, "0"), h: K(1), hh: K(2), a: vt(I, z, !0), A: vt(I, z, !1), m: String(z), mm: R.s(z, 2, "0"), s: String(this.$s), ss: R.s(this.$s, 2, "0"), SSS: R.s(this.$ms, 3, "0"), Z: P };
        return O.replace(m, function(q, lt) {
          return lt || it[q] || P.replace(":", "");
        });
      }, S.utcOffset = function() {
        return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
      }, S.diff = function($, N, L) {
        var O, P = R.p(N), I = x($), z = (I.utcOffset() - this.utcOffset()) * o, j = this - I, X = R.m(this, I);
        return X = (O = {}, O[a] = X / 12, O[d] = X, O[f] = X / 3, O[s] = (j - z) / 6048e5, O[h] = (j - z) / 864e5, O[_] = j / i, O[c] = j / o, O[l] = j / n, O)[P] || j, L ? X : R.a(X);
      }, S.daysInMonth = function() {
        return this.endOf(d).$D;
      }, S.$locale = function() {
        return A[this.$L];
      }, S.locale = function($, N) {
        if (!$)
          return this.$L;
        var L = this.clone(), O = v($, N, !0);
        return O && (L.$L = O), L;
      }, S.clone = function() {
        return R.w(this.$d, this);
      }, S.toDate = function() {
        return new Date(this.valueOf());
      }, S.toJSON = function() {
        return this.isValid() ? this.toISOString() : null;
      }, S.toISOString = function() {
        return this.$d.toISOString();
      }, S.toString = function() {
        return this.$d.toUTCString();
      }, D;
    }(), B = V.prototype;
    return x.prototype = B, [["$ms", r], ["$s", l], ["$m", c], ["$H", _], ["$W", h], ["$M", d], ["$y", a], ["$D", u]].forEach(function(D) {
      B[D[1]] = function(S) {
        return this.$g(S, D[0], D[1]);
      };
    }), x.extend = function(D, S) {
      return D.$i || (D(S, V, x), D.$i = !0), x;
    }, x.locale = v, x.isDayjs = T, x.unix = function(D) {
      return x(1e3 * D);
    }, x.en = A[C], x.Ls = A, x.p = {}, x;
  });
})($b);
const Ic = (t = 0, e = 0) => {
  const n = [];
  for (let o = t; o <= e; o++)
    n.push(o);
  return n;
}, Kd = (t, e) => {
  const n = Math.ceil(t.length / e);
  return new Array(e).fill({}).map((o, i) => t.slice(i * n, (i + 1) * n));
}, kb = (t) => {
  const { format: e, minDate: n, maxDate: o, tagDate: i, DATEROWCOUNT: r, showOtherMonth: l, clickDay: c, selectedDate: _, handleChangePanel: h, showToday: s, handleChange: d, clickToday: f } = t, a = (R) => J(R).isValid() ? J(R).add(1, "months").format(e) : "", u = (R) => J(R).isValid() ? J(R).subtract(1, "months").format(e) : "", b = () => {
    const R = u(_);
    d(R, !1);
  }, p = () => {
    const R = a(_);
    d(R, !1);
  }, m = () => {
    d("", !0);
  }, y = () => {
    d(_, !0);
  }, w = (R, V, B, D) => {
    const S = J(), $ = J(_), N = new Array(R);
    for (let L = 0; L < R; L++) {
      const O = V + L + 1, P = B.set("date", O), I = D && !l ? !0 : n && P.isBefore(n, "date") || o && P.isAfter(o, "date");
      N[L] = {
        isSelected: $.isSame(B.set("date", O), "date"),
        isToday: S.isSame(P, "date"),
        isDisable: !!I,
        isTag: !!(i != null && i.includes(P.format(e))),
        date: P,
        isOtherMonth: D,
        onClick: () => I ? {} : c(P)
      };
    }
    return N;
  }, k = () => {
    const R = J(_), V = J(), B = _ ? R : V, D = B.set("date", 1).day(), S = D === 0 ? 6 : D - 1, $ = B.subtract(1, "month"), L = Number($.endOf("month").get("date")) - S;
    return w(S, L, $, !0);
  }, C = () => {
    const R = J(_), V = J(), B = _ ? R : V, D = B.set("date", 1).day(), S = D === 0 ? 6 : D - 1, $ = B.endOf("month").get("date"), N = B.add(1, "month"), L = 7 * 6 % (S + $);
    return w(L, 0, N, !0);
  }, A = () => {
    const R = _, V = J(), B = _ ? J(R) : V, D = B.endOf("month").get("date"), S = w(D, 0, B, !1), $ = k(), N = C(), L = [...$, ...S, ...N];
    return Kd(L, r);
  }, T = ["一", "二", "三", "四", "五", "六", "日"], v = A(), x = _ || J().format(e);
  return /* @__PURE__ */ G("div", { className: F("datepicker-calendar-day"), children: [
    /* @__PURE__ */ G("div", { className: "datepicker-calendar-bar not-hide-datepicker", children: [
      /* @__PURE__ */ G("div", { class: "flex", children: /* @__PURE__ */ G("button", { type: "button", className: "btn ghost", onClick: () => h("year"), children: [
        /* @__PURE__ */ G("span", { children: J(x).format("YYYY 年 MM 月") }),
        /* @__PURE__ */ G("span", { class: "caret" })
      ] }) }),
      /* @__PURE__ */ G("div", { class: "flex", children: [
        s && /* @__PURE__ */ G("button", { type: "button", className: "btn ghost", onClick: () => {
          f();
        }, children: "今天" }),
        /* @__PURE__ */ G("button", { type: "button", className: "btn ghost", onClick: () => b(), children: /* @__PURE__ */ G("i", { className: "icon icon-angle-left" }) }),
        /* @__PURE__ */ G("button", { type: "button", className: "btn ghost", onClick: () => p(), children: /* @__PURE__ */ G("i", { className: "icon icon-angle-right" }) })
      ] })
    ] }),
    /* @__PURE__ */ G("table", { className: "datepicker-calendar-table not-hide-datepicker", children: [
      /* @__PURE__ */ G("thead", { className: "datepicker-calendar-thead", children: /* @__PURE__ */ G("tr", { children: T.map((R, V) => /* @__PURE__ */ G("th", { children: R }, V)) }) }),
      /* @__PURE__ */ G("tbody", { className: "datepicker-calendar-tbody", children: v.map((R, V) => /* @__PURE__ */ G("tr", { children: R.map((B, D) => {
        const S = ["text-center"];
        return B.isToday && S.push("datepicker-calendar-today"), B.isSelected && S.push("datepicker-calendar-selected-date"), B.isOtherMonth && S.push("datepicker-calendar-other-month"), B.isTag && S.push("datepicker-calendar-tag"), /* @__PURE__ */ G("td", { className: F(S), children: /* @__PURE__ */ G("div", { className: F("btn", "ghost", "datepicker-calendar-date", B.isDisable ? "disabled" : ""), onClick: B.onClick, children: !l && B.isOtherMonth ? "" : J(B.date).format("DD") }) }, D);
      }) }, V)) })
    ] }),
    /* @__PURE__ */ G("div", { class: "datepicker-calendar-footer text-right mt-1", children: [
      /* @__PURE__ */ G("button", { type: "button", className: "btn ghost text-primary", onClick: m, children: /* @__PURE__ */ G("span", { children: "清除" }) }),
      /* @__PURE__ */ G("button", { type: "button", className: "btn ghost text-primary", onClick: y, children: /* @__PURE__ */ G("span", { children: "确认" }) })
    ] })
  ] });
};
const xb = (t) => {
  const { format: e, selectedDate: n, minDate: o, maxDate: i, year: r, handleChangeMonth: l } = t, c = J(o).format("M"), _ = J(i).format("M"), h = Kd(Ic(1, 12), 3), s = (d, f) => {
    f || l(d);
  };
  return /* @__PURE__ */ G("div", { className: F("datepicker-calendar-month", "not-hide-datepicker"), children: /* @__PURE__ */ G("table", { className: "datepicker-calendar-month-table", children: /* @__PURE__ */ G("tbody", { className: "datepicker-calendar-month-table-body", children: h.map((d, f) => /* @__PURE__ */ G("tr", { children: d.map((a, u) => {
    const b = ["text-center"], p = J(`${r}-${a}-01`).format(e), m = !!(c && J(n).isBefore(c) || _ && J(n).isBefore(_));
    return /* @__PURE__ */ G("td", { className: F(b), children: /* @__PURE__ */ G("div", { className: F("btn", "size-sm", "ghost", "datepicker-calendar-month", m ? "disabled" : ""), onClick: () => {
      s(p, m);
    }, children: [
      J(p).format("MM"),
      " 月"
    ] }) }, u);
  }) }, f)) }) }) });
}, Sb = (t) => {
  const { selectedDate: e, handleChangeMonth: n } = t;
  setTimeout(() => {
    const l = document.getElementsByClassName("datepicker-accordion");
    l != null && l.length && (l[0].scrollTop = 2400);
  }, 800);
  const o = J(e).year(), i = [...Ic(o - 100, o), ...Ic(o + 1, o + 100)], r = (l, c) => {
    var s, d, f;
    if (!(l != null && l.target))
      return;
    const _ = document.querySelectorAll(".datepicker-accordion > ul > li > .datepicker-accordion-title");
    for (let a = 0; a < _.length; a++)
      (s = _[a].nextElementSibling) != null && s.classList.contains("hidden") || (d = _[a].nextElementSibling) == null || d.classList.add("hidden");
    (f = l.target.nextElementSibling) == null || f.classList.toggle("hidden");
    const h = document.querySelector(".datepicker-accordion");
    h && (h.scrollTop + h.clientHeight === h.scrollHeight ? h.scrollTop = 0 : c < o ? h.scrollTop = h.scrollTop - 30 : h.scrollTop = h.scrollTop + 30);
  };
  return /* @__PURE__ */ G("div", { class: "datepicker-accordion scroll-smooth not-hide-datepicker", children: /* @__PURE__ */ G("ul", { children: i.map((l, c) => /* @__PURE__ */ G("li", { id: o === l ? "selected" : "", children: [
    /* @__PURE__ */ G("div", { class: "datepicker-accordion-title", onClick: (_) => r(_, l), children: l }),
    /* @__PURE__ */ G("div", { className: F("datepicker-accordion-content", o === l ? "" : "hidden"), children: _r(xb, {
      ...t,
      year: l.toString(),
      handleChangeMonth: n
    }) }, c)
  ] })) }) });
};
class Cb extends No {
  constructor() {
    super(...arguments);
    M(this, "DATEROWCOUNT", 6);
    M(this, "ref", mb());
    M(this, "state", {
      selectedDate: this.props.date || J().format("YYYY-MM-DD"),
      type: "day"
    });
  }
  handleChange(n, o = !1) {
    var i, r;
    this.setState({ selectedDate: n }), o && ((r = (i = this.props).onChange) == null || r.call(i, n));
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
    const o = n === "subtract" ? J(this.state.selectedDate).subtract(1, "year").startOf("year").format(this.props.format) : J(this.state.selectedDate).add(1, "year").startOf("year").format(this.props.format);
    this.handleChange(o);
  }
  clickDay(n) {
    const o = J(n).format(this.props.format);
    this.handleChange(o);
  }
  clickToday() {
    this.handleChange(J().format(this.props.format));
  }
  renderPanel() {
    return this.state.type === "day" ? _r(kb, {
      ...this.props,
      handleChange: this.handleChange.bind(this),
      handleChangePanel: this.handleChangePanel.bind(this),
      clickToday: this.clickToday.bind(this),
      clickDay: this.clickDay.bind(this),
      selectedDate: this.state.selectedDate,
      DATEROWCOUNT: this.DATEROWCOUNT
    }) : _r(Sb, {
      ...this.props,
      selectedDate: this.state.selectedDate,
      handleChangeMonth: this.handleChangeMonth.bind(this)
    });
  }
  render() {
    const { className: n } = this.props;
    return /* @__PURE__ */ G("div", { className: F("datepicker-calendar", n), ref: this.ref, children: this.renderPanel() });
  }
}
function rs(t) {
  return t.split("-")[1];
}
function ba(t) {
  return t === "y" ? "height" : "width";
}
function to(t) {
  return t.split("-")[0];
}
function oc(t) {
  return ["top", "bottom"].includes(to(t)) ? "x" : "y";
}
function sf(t, e, n) {
  let {
    reference: o,
    floating: i
  } = t;
  const r = o.x + o.width / 2 - i.width / 2, l = o.y + o.height / 2 - i.height / 2, c = oc(e), _ = ba(c), h = o[_] / 2 - i[_] / 2, s = to(e), d = c === "x";
  let f;
  switch (s) {
    case "top":
      f = {
        x: r,
        y: o.y - i.height
      };
      break;
    case "bottom":
      f = {
        x: r,
        y: o.y + o.height
      };
      break;
    case "right":
      f = {
        x: o.x + o.width,
        y: l
      };
      break;
    case "left":
      f = {
        x: o.x - i.width,
        y: l
      };
      break;
    default:
      f = {
        x: o.x,
        y: o.y
      };
  }
  switch (rs(e)) {
    case "start":
      f[c] -= h * (n && d ? -1 : 1);
      break;
    case "end":
      f[c] += h * (n && d ? -1 : 1);
      break;
  }
  return f;
}
const Eb = async (t, e, n) => {
  const {
    placement: o = "bottom",
    strategy: i = "absolute",
    middleware: r = [],
    platform: l
  } = n, c = r.filter(Boolean), _ = await (l.isRTL == null ? void 0 : l.isRTL(e));
  let h = await l.getElementRects({
    reference: t,
    floating: e,
    strategy: i
  }), {
    x: s,
    y: d
  } = sf(h, o, _), f = o, a = {}, u = 0;
  for (let b = 0; b < c.length; b++) {
    const {
      name: p,
      fn: m
    } = c[b], {
      x: y,
      y: w,
      data: k,
      reset: C
    } = await m({
      x: s,
      y: d,
      initialPlacement: o,
      placement: f,
      strategy: i,
      middlewareData: a,
      rects: h,
      platform: l,
      elements: {
        reference: t,
        floating: e
      }
    });
    if (s = y ?? s, d = w ?? d, a = {
      ...a,
      [p]: {
        ...a[p],
        ...k
      }
    }, C && u <= 50) {
      u++, typeof C == "object" && (C.placement && (f = C.placement), C.rects && (h = C.rects === !0 ? await l.getElementRects({
        reference: t,
        floating: e,
        strategy: i
      }) : C.rects), {
        x: s,
        y: d
      } = sf(h, f, _)), b = -1;
      continue;
    }
  }
  return {
    x: s,
    y: d,
    placement: f,
    strategy: i,
    middlewareData: a
  };
};
function Tb(t) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...t
  };
}
function Jd(t) {
  return typeof t != "number" ? Tb(t) : {
    top: t,
    right: t,
    bottom: t,
    left: t
  };
}
function ci(t) {
  return {
    ...t,
    top: t.y,
    left: t.x,
    right: t.x + t.width,
    bottom: t.y + t.height
  };
}
async function Ab(t, e) {
  var n;
  e === void 0 && (e = {});
  const {
    x: o,
    y: i,
    platform: r,
    rects: l,
    elements: c,
    strategy: _
  } = t, {
    boundary: h = "clippingAncestors",
    rootBoundary: s = "viewport",
    elementContext: d = "floating",
    altBoundary: f = !1,
    padding: a = 0
  } = e, u = Jd(a), p = c[f ? d === "floating" ? "reference" : "floating" : d], m = ci(await r.getClippingRect({
    element: (n = await (r.isElement == null ? void 0 : r.isElement(p))) == null || n ? p : p.contextElement || await (r.getDocumentElement == null ? void 0 : r.getDocumentElement(c.floating)),
    boundary: h,
    rootBoundary: s,
    strategy: _
  })), y = d === "floating" ? {
    ...l.floating,
    x: o,
    y: i
  } : l.reference, w = await (r.getOffsetParent == null ? void 0 : r.getOffsetParent(c.floating)), k = await (r.isElement == null ? void 0 : r.isElement(w)) ? await (r.getScale == null ? void 0 : r.getScale(w)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, C = ci(r.convertOffsetParentRelativeRectToViewportRelativeRect ? await r.convertOffsetParentRelativeRectToViewportRelativeRect({
    rect: y,
    offsetParent: w,
    strategy: _
  }) : y);
  return {
    top: (m.top - C.top + u.top) / k.y,
    bottom: (C.bottom - m.bottom + u.bottom) / k.y,
    left: (m.left - C.left + u.left) / k.x,
    right: (C.right - m.right + u.right) / k.x
  };
}
const Lb = Math.min, Mb = Math.max;
function Rb(t, e, n) {
  return Mb(t, Lb(e, n));
}
const Db = (t) => ({
  name: "arrow",
  options: t,
  async fn(e) {
    const {
      element: n,
      padding: o = 0
    } = t || {}, {
      x: i,
      y: r,
      placement: l,
      rects: c,
      platform: _
    } = e;
    if (n == null)
      return {};
    const h = Jd(o), s = {
      x: i,
      y: r
    }, d = oc(l), f = ba(d), a = await _.getDimensions(n), u = d === "y" ? "top" : "left", b = d === "y" ? "bottom" : "right", p = c.reference[f] + c.reference[d] - s[d] - c.floating[f], m = s[d] - c.reference[d], y = await (_.getOffsetParent == null ? void 0 : _.getOffsetParent(n));
    let w = y ? d === "y" ? y.clientHeight || 0 : y.clientWidth || 0 : 0;
    w === 0 && (w = c.floating[f]);
    const k = p / 2 - m / 2, C = h[u], A = w - a[f] - h[b], T = w / 2 - a[f] / 2 + k, v = Rb(C, T, A), R = rs(l) != null && T != v && c.reference[f] / 2 - (T < C ? h[u] : h[b]) - a[f] / 2 < 0 ? T < C ? C - T : A - T : 0;
    return {
      [d]: s[d] - R,
      data: {
        [d]: v,
        centerOffset: T - v
      }
    };
  }
}), Nb = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function ai(t) {
  return t.replace(/left|right|bottom|top/g, (e) => Nb[e]);
}
function Pb(t, e, n) {
  n === void 0 && (n = !1);
  const o = rs(t), i = oc(t), r = ba(i);
  let l = i === "x" ? o === (n ? "end" : "start") ? "right" : "left" : o === "start" ? "bottom" : "top";
  return e.reference[r] > e.floating[r] && (l = ai(l)), {
    main: l,
    cross: ai(l)
  };
}
const Ob = {
  start: "end",
  end: "start"
};
function Uc(t) {
  return t.replace(/start|end/g, (e) => Ob[e]);
}
function Hb(t) {
  const e = ai(t);
  return [Uc(t), e, Uc(e)];
}
function Wb(t, e, n) {
  const o = ["left", "right"], i = ["right", "left"], r = ["top", "bottom"], l = ["bottom", "top"];
  switch (t) {
    case "top":
    case "bottom":
      return n ? e ? i : o : e ? o : i;
    case "left":
    case "right":
      return e ? r : l;
    default:
      return [];
  }
}
function Ib(t, e, n, o) {
  const i = rs(t);
  let r = Wb(to(t), n === "start", o);
  return i && (r = r.map((l) => l + "-" + i), e && (r = r.concat(r.map(Uc)))), r;
}
const Ub = function(t) {
  return t === void 0 && (t = {}), {
    name: "flip",
    options: t,
    async fn(e) {
      var n;
      const {
        placement: o,
        middlewareData: i,
        rects: r,
        initialPlacement: l,
        platform: c,
        elements: _
      } = e, {
        mainAxis: h = !0,
        crossAxis: s = !0,
        fallbackPlacements: d,
        fallbackStrategy: f = "bestFit",
        fallbackAxisSideDirection: a = "none",
        flipAlignment: u = !0,
        ...b
      } = t, p = to(o), m = to(l) === l, y = await (c.isRTL == null ? void 0 : c.isRTL(_.floating)), w = d || (m || !u ? [ai(l)] : Hb(l));
      !d && a !== "none" && w.push(...Ib(l, u, a, y));
      const k = [l, ...w], C = await Ab(e, b), A = [];
      let T = ((n = i.flip) == null ? void 0 : n.overflows) || [];
      if (h && A.push(C[p]), s) {
        const {
          main: R,
          cross: V
        } = Pb(o, r, y);
        A.push(C[R], C[V]);
      }
      if (T = [...T, {
        placement: o,
        overflows: A
      }], !A.every((R) => R <= 0)) {
        var v;
        const R = (((v = i.flip) == null ? void 0 : v.index) || 0) + 1, V = k[R];
        if (V)
          return {
            data: {
              index: R,
              overflows: T
            },
            reset: {
              placement: V
            }
          };
        let B = "bottom";
        switch (f) {
          case "bestFit": {
            var x;
            const D = (x = T.map((S) => [S, S.overflows.filter(($) => $ > 0).reduce(($, N) => $ + N, 0)]).sort((S, $) => S[1] - $[1])[0]) == null ? void 0 : x[0].placement;
            D && (B = D);
            break;
          }
          case "initialPlacement":
            B = l;
            break;
        }
        if (o !== B)
          return {
            reset: {
              placement: B
            }
          };
      }
      return {};
    }
  };
};
async function Fb(t, e) {
  const {
    placement: n,
    platform: o,
    elements: i
  } = t, r = await (o.isRTL == null ? void 0 : o.isRTL(i.floating)), l = to(n), c = rs(n), _ = oc(n) === "x", h = ["left", "top"].includes(l) ? -1 : 1, s = r && _ ? -1 : 1, d = typeof e == "function" ? e(t) : e;
  let {
    mainAxis: f,
    crossAxis: a,
    alignmentAxis: u
  } = typeof d == "number" ? {
    mainAxis: d,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: 0,
    crossAxis: 0,
    alignmentAxis: null,
    ...d
  };
  return c && typeof u == "number" && (a = c === "end" ? u * -1 : u), _ ? {
    x: a * s,
    y: f * h
  } : {
    x: f * h,
    y: a * s
  };
}
const Bb = function(t) {
  return t === void 0 && (t = 0), {
    name: "offset",
    options: t,
    async fn(e) {
      const {
        x: n,
        y: o
      } = e, i = await Fb(e, t);
      return {
        x: n + i.x,
        y: o + i.y,
        data: i
      };
    }
  };
};
function Ft(t) {
  var e;
  return ((e = t.ownerDocument) == null ? void 0 : e.defaultView) || window;
}
function ie(t) {
  return Ft(t).getComputedStyle(t);
}
function Ge(t) {
  return Qd(t) ? (t.nodeName || "").toLowerCase() : "";
}
let us;
function Zd() {
  if (us)
    return us;
  const t = navigator.userAgentData;
  return t && Array.isArray(t.brands) ? (us = t.brands.map((e) => e.brand + "/" + e.version).join(" "), us) : navigator.userAgent;
}
function ve(t) {
  return t instanceof Ft(t).HTMLElement;
}
function Gt(t) {
  return t instanceof Ft(t).Element;
}
function Qd(t) {
  return t instanceof Ft(t).Node;
}
function lf(t) {
  if (typeof ShadowRoot > "u")
    return !1;
  const e = Ft(t).ShadowRoot;
  return t instanceof e || t instanceof ShadowRoot;
}
function rc(t) {
  const {
    overflow: e,
    overflowX: n,
    overflowY: o,
    display: i
  } = ie(t);
  return /auto|scroll|overlay|hidden|clip/.test(e + o + n) && !["inline", "contents"].includes(i);
}
function jb(t) {
  return ["table", "td", "th"].includes(Ge(t));
}
function wa(t) {
  const e = /firefox/i.test(Zd()), n = ie(t), o = n.backdropFilter || n.WebkitBackdropFilter;
  return n.transform !== "none" || n.perspective !== "none" || (o ? o !== "none" : !1) || e && n.willChange === "filter" || e && (n.filter ? n.filter !== "none" : !1) || ["transform", "perspective"].some((i) => n.willChange.includes(i)) || ["paint", "layout", "strict", "content"].some(
    // TS 4.1 compat
    (i) => {
      const r = n.contain;
      return r != null ? r.includes(i) : !1;
    }
  );
}
function tp() {
  return !/^((?!chrome|android).)*safari/i.test(Zd());
}
function $a(t) {
  return ["html", "body", "#document"].includes(Ge(t));
}
const cf = Math.min, Po = Math.max, _i = Math.round;
function ep(t) {
  const e = ie(t);
  let n = parseFloat(e.width), o = parseFloat(e.height);
  const i = t.offsetWidth, r = t.offsetHeight, l = _i(n) !== i || _i(o) !== r;
  return l && (n = i, o = r), {
    width: n,
    height: o,
    fallback: l
  };
}
function np(t) {
  return Gt(t) ? t : t.contextElement;
}
const op = {
  x: 1,
  y: 1
};
function wn(t) {
  const e = np(t);
  if (!ve(e))
    return op;
  const n = e.getBoundingClientRect(), {
    width: o,
    height: i,
    fallback: r
  } = ep(e);
  let l = (r ? _i(n.width) : n.width) / o, c = (r ? _i(n.height) : n.height) / i;
  return (!l || !Number.isFinite(l)) && (l = 1), (!c || !Number.isFinite(c)) && (c = 1), {
    x: l,
    y: c
  };
}
function pn(t, e, n, o) {
  var i, r;
  e === void 0 && (e = !1), n === void 0 && (n = !1);
  const l = t.getBoundingClientRect(), c = np(t);
  let _ = op;
  e && (o ? Gt(o) && (_ = wn(o)) : _ = wn(t));
  const h = c ? Ft(c) : window, s = !tp() && n;
  let d = (l.left + (s && ((i = h.visualViewport) == null ? void 0 : i.offsetLeft) || 0)) / _.x, f = (l.top + (s && ((r = h.visualViewport) == null ? void 0 : r.offsetTop) || 0)) / _.y, a = l.width / _.x, u = l.height / _.y;
  if (c) {
    const b = Ft(c), p = o && Gt(o) ? Ft(o) : o;
    let m = b.frameElement;
    for (; m && o && p !== b; ) {
      const y = wn(m), w = m.getBoundingClientRect(), k = getComputedStyle(m);
      w.x += (m.clientLeft + parseFloat(k.paddingLeft)) * y.x, w.y += (m.clientTop + parseFloat(k.paddingTop)) * y.y, d *= y.x, f *= y.y, a *= y.x, u *= y.y, d += w.x, f += w.y, m = Ft(m).frameElement;
    }
  }
  return {
    width: a,
    height: u,
    top: f,
    right: d + a,
    bottom: f + u,
    left: d,
    x: d,
    y: f
  };
}
function Ze(t) {
  return ((Qd(t) ? t.ownerDocument : t.document) || window.document).documentElement;
}
function sc(t) {
  return Gt(t) ? {
    scrollLeft: t.scrollLeft,
    scrollTop: t.scrollTop
  } : {
    scrollLeft: t.pageXOffset,
    scrollTop: t.pageYOffset
  };
}
function rp(t) {
  return pn(Ze(t)).left + sc(t).scrollLeft;
}
function zb(t, e, n) {
  const o = ve(e), i = Ze(e), r = pn(t, !0, n === "fixed", e);
  let l = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const c = {
    x: 0,
    y: 0
  };
  if (o || !o && n !== "fixed")
    if ((Ge(e) !== "body" || rc(i)) && (l = sc(e)), ve(e)) {
      const _ = pn(e, !0);
      c.x = _.x + e.clientLeft, c.y = _.y + e.clientTop;
    } else
      i && (c.x = rp(i));
  return {
    x: r.left + l.scrollLeft - c.x,
    y: r.top + l.scrollTop - c.y,
    width: r.width,
    height: r.height
  };
}
function ur(t) {
  if (Ge(t) === "html")
    return t;
  const e = (
    // Step into the shadow DOM of the parent of a slotted node
    t.assignedSlot || // DOM Element detected
    t.parentNode || // ShadowRoot detected
    (lf(t) ? t.host : null) || // Fallback
    Ze(t)
  );
  return lf(e) ? e.host : e;
}
function af(t) {
  return !ve(t) || ie(t).position === "fixed" ? null : t.offsetParent;
}
function Vb(t) {
  let e = ur(t);
  for (; ve(e) && !$a(e); ) {
    if (wa(e))
      return e;
    e = ur(e);
  }
  return null;
}
function _f(t) {
  const e = Ft(t);
  let n = af(t);
  for (; n && jb(n) && ie(n).position === "static"; )
    n = af(n);
  return n && (Ge(n) === "html" || Ge(n) === "body" && ie(n).position === "static" && !wa(n)) ? e : n || Vb(t) || e;
}
function Yb(t) {
  return ep(t);
}
function qb(t) {
  let {
    rect: e,
    offsetParent: n,
    strategy: o
  } = t;
  const i = ve(n), r = Ze(n);
  if (n === r)
    return e;
  let l = {
    scrollLeft: 0,
    scrollTop: 0
  }, c = {
    x: 1,
    y: 1
  };
  const _ = {
    x: 0,
    y: 0
  };
  if ((i || !i && o !== "fixed") && ((Ge(n) !== "body" || rc(r)) && (l = sc(n)), ve(n))) {
    const h = pn(n);
    c = wn(n), _.x = h.x + n.clientLeft, _.y = h.y + n.clientTop;
  }
  return {
    width: e.width * c.x,
    height: e.height * c.y,
    x: e.x * c.x - l.scrollLeft * c.x + _.x,
    y: e.y * c.y - l.scrollTop * c.y + _.y
  };
}
function Gb(t, e) {
  const n = Ft(t), o = Ze(t), i = n.visualViewport;
  let r = o.clientWidth, l = o.clientHeight, c = 0, _ = 0;
  if (i) {
    r = i.width, l = i.height;
    const h = tp();
    (h || !h && e === "fixed") && (c = i.offsetLeft, _ = i.offsetTop);
  }
  return {
    width: r,
    height: l,
    x: c,
    y: _
  };
}
function Xb(t) {
  var e;
  const n = Ze(t), o = sc(t), i = (e = t.ownerDocument) == null ? void 0 : e.body, r = Po(n.scrollWidth, n.clientWidth, i ? i.scrollWidth : 0, i ? i.clientWidth : 0), l = Po(n.scrollHeight, n.clientHeight, i ? i.scrollHeight : 0, i ? i.clientHeight : 0);
  let c = -o.scrollLeft + rp(t);
  const _ = -o.scrollTop;
  return ie(i || n).direction === "rtl" && (c += Po(n.clientWidth, i ? i.clientWidth : 0) - r), {
    width: r,
    height: l,
    x: c,
    y: _
  };
}
function sp(t) {
  const e = ur(t);
  return $a(e) ? t.ownerDocument.body : ve(e) && rc(e) ? e : sp(e);
}
function Oo(t, e) {
  var n;
  e === void 0 && (e = []);
  const o = sp(t), i = o === ((n = t.ownerDocument) == null ? void 0 : n.body), r = Ft(o);
  return i ? e.concat(r, r.visualViewport || [], rc(o) ? o : []) : e.concat(o, Oo(o));
}
function Kb(t, e) {
  const n = pn(t, !0, e === "fixed"), o = n.top + t.clientTop, i = n.left + t.clientLeft, r = ve(t) ? wn(t) : {
    x: 1,
    y: 1
  }, l = t.clientWidth * r.x, c = t.clientHeight * r.y, _ = i * r.x, h = o * r.y;
  return {
    top: h,
    left: _,
    right: _ + l,
    bottom: h + c,
    x: _,
    y: h,
    width: l,
    height: c
  };
}
function ff(t, e, n) {
  return e === "viewport" ? ci(Gb(t, n)) : Gt(e) ? Kb(e, n) : ci(Xb(Ze(t)));
}
function Jb(t, e) {
  const n = e.get(t);
  if (n)
    return n;
  let o = Oo(t).filter((c) => Gt(c) && Ge(c) !== "body"), i = null;
  const r = ie(t).position === "fixed";
  let l = r ? ur(t) : t;
  for (; Gt(l) && !$a(l); ) {
    const c = ie(l), _ = wa(l);
    (r ? !_ && !i : !_ && c.position === "static" && !!i && ["absolute", "fixed"].includes(i.position)) ? o = o.filter((s) => s !== l) : i = c, l = ur(l);
  }
  return e.set(t, o), o;
}
function Zb(t) {
  let {
    element: e,
    boundary: n,
    rootBoundary: o,
    strategy: i
  } = t;
  const l = [...n === "clippingAncestors" ? Jb(e, this._c) : [].concat(n), o], c = l[0], _ = l.reduce((h, s) => {
    const d = ff(e, s, i);
    return h.top = Po(d.top, h.top), h.right = cf(d.right, h.right), h.bottom = cf(d.bottom, h.bottom), h.left = Po(d.left, h.left), h;
  }, ff(e, c, i));
  return {
    width: _.right - _.left,
    height: _.bottom - _.top,
    x: _.left,
    y: _.top
  };
}
const Qb = {
  getClippingRect: Zb,
  convertOffsetParentRelativeRectToViewportRelativeRect: qb,
  isElement: Gt,
  getDimensions: Yb,
  getOffsetParent: _f,
  getDocumentElement: Ze,
  getScale: wn,
  async getElementRects(t) {
    let {
      reference: e,
      floating: n,
      strategy: o
    } = t;
    const i = this.getOffsetParent || _f, r = this.getDimensions;
    return {
      reference: zb(e, await i(n), o),
      floating: {
        x: 0,
        y: 0,
        ...await r(n)
      }
    };
  },
  getClientRects: (t) => Array.from(t.getClientRects()),
  isRTL: (t) => ie(t).direction === "rtl"
};
function t0(t, e, n, o) {
  o === void 0 && (o = {});
  const {
    ancestorScroll: i = !0,
    ancestorResize: r = !0,
    elementResize: l = !0,
    animationFrame: c = !1
  } = o, _ = i && !c, h = _ || r ? [...Gt(t) ? Oo(t) : t.contextElement ? Oo(t.contextElement) : [], ...Oo(e)] : [];
  h.forEach((u) => {
    _ && u.addEventListener("scroll", n, {
      passive: !0
    }), r && u.addEventListener("resize", n);
  });
  let s = null;
  if (l) {
    let u = !0;
    s = new ResizeObserver(() => {
      u || n(), u = !1;
    }), Gt(t) && !c && s.observe(t), !Gt(t) && t.contextElement && !c && s.observe(t.contextElement), s.observe(e);
  }
  let d, f = c ? pn(t) : null;
  c && a();
  function a() {
    const u = pn(t);
    f && (u.x !== f.x || u.y !== f.y || u.width !== f.width || u.height !== f.height) && n(), f = u, d = requestAnimationFrame(a);
  }
  return n(), () => {
    var u;
    h.forEach((b) => {
      _ && b.removeEventListener("scroll", n), r && b.removeEventListener("resize", n);
    }), (u = s) == null || u.disconnect(), s = null, c && cancelAnimationFrame(d);
  };
}
const e0 = (t, e, n) => {
  const o = /* @__PURE__ */ new Map(), i = {
    platform: Qb,
    ...n
  }, r = {
    ...i.platform,
    _c: o
  };
  return Eb(t, e, {
    ...i,
    platform: r
  });
};
var On, Hn, St, ln, Tr, Ar, Lr, Fc, Fi, ip, Bi, lp, ji, cp, zi, ap, Vi, _p, Yi, fp, qi, up, Gi;
const en = class extends Jt {
  constructor() {
    super(...arguments);
    E(this, Lr);
    E(this, Fi);
    E(this, Bi);
    E(this, ji);
    E(this, zi);
    E(this, Vi);
    E(this, Yi);
    E(this, qi);
    E(this, On, void 0);
    E(this, Hn, 0);
    E(this, St, void 0);
    E(this, ln, void 0);
    E(this, Tr, void 0);
    E(this, Ar, void 0);
    M(this, "hideLater", () => {
      g(this, Gi).call(this), H(this, Hn, window.setTimeout(this.hide.bind(this), 100));
    });
    E(this, Gi, () => {
      clearTimeout(g(this, Hn)), H(this, Hn, 0);
    });
  }
  get isShown() {
    var n;
    return (n = g(this, ln)) == null ? void 0 : n.classList.contains(en.CLASS_SHOW);
  }
  get datepicker() {
    return g(this, ln) || W(this, Bi, lp).call(this);
  }
  get trigger() {
    return g(this, Tr) || this.element;
  }
  get elementShowClass() {
    return `with-${en.NAME}-show`;
  }
  show(n) {
    return H(this, Tr, n), !this.datepicker || !this.element ? !1 : (this.element.classList.add(this.elementShowClass), this.datepicker.classList.add(en.CLASS_SHOW), this.datepicker.classList.add("fade"), W(this, Yi, fp).call(this), !0);
  }
  hide() {
    var n, o;
    return (n = g(this, Ar)) == null || n.call(this), this.element.classList.remove(this.elementShowClass), (o = g(this, ln)) == null || o.classList.remove(en.CLASS_SHOW), this.datepicker.classList.remove("fade"), !0;
  }
  toggle(n) {
    return this.isShown ? this.hide() : this.show(n);
  }
  static clear(n) {
    var _, h;
    n instanceof Event && (n = { event: n });
    const { event: o, exclude: i, ignoreSelector: r = ".not-hide-datepicker" } = n || {};
    if (o && r && ((h = (_ = o.target).closest) != null && h.call(_, r)))
      return;
    const l = this.getAll().entries(), c = new Set(i || []);
    for (const [s, d] of l)
      c.has(s) || d.hide();
  }
};
let Ht = en;
On = new WeakMap(), Hn = new WeakMap(), St = new WeakMap(), ln = new WeakMap(), Tr = new WeakMap(), Ar = new WeakMap(), Lr = new WeakSet(), Fc = function() {
  const { arrow: n } = this.options;
  return typeof n == "number" ? n : 8;
}, Fi = new WeakSet(), ip = function() {
  const n = W(this, Lr, Fc).call(this);
  return H(this, St, document.createElement("div")), g(this, St).style.position = "absolute", g(this, St).style.width = `${n}px`, g(this, St).style.height = `${n}px`, g(this, St).style.transform = "rotate(45deg)", g(this, St);
}, Bi = new WeakSet(), lp = function() {
  const n = en.CLASSNAME, o = document.createElement("div");
  return o.classList.add(n), bb(_r(Cb, { ...this.options }), o), this.options.arrow && o.append(W(this, Fi, ip).call(this)), o.style.width = "max-content", o.style.position = this.options.strategy, o.style.top = "0", o.style.left = "0", document.body.appendChild(o), H(this, ln, o), o;
}, ji = new WeakSet(), cp = function() {
  var l;
  const n = W(this, Lr, Fc).call(this), { strategy: o, placement: i } = this.options, r = {
    middleware: [Bb(n), Ub()],
    strategy: o,
    placement: i
  };
  return this.options.arrow && g(this, St) && ((l = r.middleware) == null || l.push(Db({ element: g(this, St) }))), r;
}, zi = new WeakSet(), ap = function(n) {
  return {
    top: "bottom",
    right: "left",
    bottom: "top",
    left: "right"
  }[n];
}, Vi = new WeakSet(), _p = function(n) {
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
}, Yi = new WeakSet(), fp = function() {
  const n = W(this, ji, cp).call(this), o = W(this, qi, up).call(this);
  H(this, Ar, t0(o, this.datepicker, () => {
    e0(o, this.datepicker, n).then(({ x: i, y: r, middlewareData: l, placement: c }) => {
      Object.assign(this.datepicker.style, {
        left: `${i}px`,
        top: `${r}px`
      });
      const _ = c.split("-")[0], h = W(this, zi, ap).call(this, _);
      if (l.arrow && g(this, St)) {
        const { x: s, y: d } = l.arrow;
        Object.assign(g(this, St).style, {
          left: s != null ? `${s}px` : "",
          top: d != null ? `${d}px` : "",
          [h]: `${-g(this, St).offsetWidth / 2}px`,
          background: "inherit",
          border: "inherit",
          ...W(this, Vi, _p).call(this, _)
        });
      }
    });
  }));
}, qi = new WeakSet(), up = function() {
  return g(this, On) || H(this, On, {
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
  }), g(this, On);
}, Gi = new WeakMap(), M(Ht, "NAME", "datepicker"), M(Ht, "CLASSNAME", "datepicker"), M(Ht, "CLASS_SHOW", "show"), M(Ht, "MENU_SELECTOR", ".form-datetime:not(.disabled):not(:disabled)"), M(Ht, "DEFAULT", {
  date: J().format("YYYY-MM-DD"),
  format: "YYYY-MM-DD",
  showOtherMonth: !0,
  placement: "bottom-start",
  strategy: "absolute",
  trigger: "click",
  showToday: !0,
  arrow: !0
});
document.addEventListener("click", function(t) {
  const e = t.target, n = e.closest(Ht.MENU_SELECTOR), o = e.closest(".datepicker-calendar-bar, .datepicker-calendar-thead, .datepicker-calendar-month-table");
  n ? Ht.ensure(n).toggle() : o || Ht.clear({ event: t });
});
const n0 = (t) => {
  const e = document.getElementsByClassName("with-datepicker-show")[0];
  if (!e)
    return;
  const n = typeof e.closest == "function" ? e.closest(Ht.MENU_SELECTOR) : null;
  !n || !t.target.contains(n) || Ht.clear({ event: t });
};
window.addEventListener("scroll", n0, !0);
function hp(t, e, n) {
  if (n) {
    t.setAttribute("class", F(e));
    return;
  }
  Xl(t.getAttribute("class"), e).forEach(([o, i]) => {
    t.classList.toggle(o, i);
  });
}
function _o(t, e, n) {
  if (typeof e == "object")
    return Object.entries(e).forEach(([o, i]) => {
      _o(t, o, i);
    });
  n !== void 0 && (t.style[e] = typeof n == "number" ? `${n}px` : n);
}
function fi(t, e, n) {
  if (typeof e == "object")
    return Object.entries(e).forEach(([o, i]) => {
      fi(t, o, i);
    });
  n !== void 0 && (n === null ? t.removeAttribute(e) : t.setAttribute(e, n));
}
var cn, Mr, Se, Xi, Wn, As;
const _e = class extends Jt {
  constructor() {
    super(...arguments);
    E(this, Wn);
    E(this, cn, 0);
    E(this, Mr, void 0);
    E(this, Se, void 0);
    E(this, Xi, (n) => {
      const o = n.target;
      (o.closest(_e.DISMISS_SELECTOR) || this.options.backdrop === !0 && !o.closest(".modal-dialog") && o.closest(".modal")) && this.hide();
    });
  }
  get modalElement() {
    return this.element;
  }
  get isShown() {
    return this.modalElement.classList.contains(_e.CLASS_SHOW);
  }
  get dialog() {
    return this.modalElement.querySelector(".modal-dialog");
  }
  afterInit() {
    if (this.on("click", g(this, Xi)), this.options.responsive && typeof ResizeObserver < "u") {
      const { dialog: n } = this;
      if (n) {
        const o = new ResizeObserver(() => {
          if (!this.isShown)
            return;
          const i = n.clientWidth, r = n.clientHeight;
          (!g(this, Se) || g(this, Se)[0] !== i || g(this, Se)[1] !== r) && (H(this, Se, [i, r]), this.layout());
        });
        o.observe(n), H(this, Mr, o);
      }
    }
    this.options.show && this.show();
  }
  destroy() {
    var n;
    super.destroy(), (n = g(this, Mr)) == null || n.disconnect();
  }
  show(n) {
    if (this.isShown)
      return !1;
    this.setOptions(n);
    const { modalElement: o } = this, { animation: i, backdrop: r, className: l, style: c } = this.options;
    return hp(o, [{
      "modal-trans": i,
      "modal-no-backdrop": !r
    }, _e.CLASS_SHOW, l]), _o(o, {
      zIndex: `${_e.zIndex++}`,
      ...c
    }), this.layout(), this.emit("show", this), W(this, Wn, As).call(this, () => {
      o.classList.add(_e.CLASS_SHOWN), W(this, Wn, As).call(this, () => {
        this.emit("shown", this);
      });
    }, 50), !0;
  }
  hide() {
    return this.isShown ? (this.modalElement.classList.remove(_e.CLASS_SHOWN), this.emit("hide", this), W(this, Wn, As).call(this, () => {
      this.modalElement.classList.remove(_e.CLASS_SHOW), this.emit("hidden", this);
    }), !0) : !1;
  }
  layout(n, o) {
    if (!this.isShown)
      return;
    const { dialog: i } = this;
    if (!i)
      return;
    o = o ?? this.options.size, fi(i, "data-size", null);
    const r = { width: null, height: null };
    typeof o == "object" ? (r.width = o.width, r.height = o.height) : typeof o == "string" && ["md", "sm", "lg", "full"].includes(o) ? fi(i, "data-size", o) : o && (r.width = o), _o(i, r), n = n ?? this.options.position ?? "fit";
    const l = i.clientWidth, c = i.clientHeight;
    H(this, Se, [l, c]), typeof n == "function" && (n = n({ width: l, height: c }));
    const _ = {
      top: null,
      left: null,
      bottom: null,
      right: null,
      alignSelf: "center"
    };
    typeof n == "number" ? (_.alignSelf = "flex-start", _.top = n) : typeof n == "object" && n ? (_.alignSelf = "flex-start", Object.assign(_, n)) : n === "fit" ? (_.alignSelf = "flex-start", _.top = `${Math.max(0, Math.floor((window.innerHeight - c) / 3))}px`) : n === "bottom" ? _.alignSelf = "flex-end" : n === "top" ? _.alignSelf = "flex-start" : n !== "center" && typeof n == "string" && (_.alignSelf = "flex-start", _.top = n), _o(i, _), _o(this.modalElement, "justifyContent", _.left ? "flex-start" : "center");
  }
};
let Mt = _e;
cn = new WeakMap(), Mr = new WeakMap(), Se = new WeakMap(), Xi = new WeakMap(), Wn = new WeakSet(), As = function(n, o) {
  g(this, cn) && (clearTimeout(g(this, cn)), H(this, cn, 0)), n && (this.options.animation ? H(this, cn, window.setTimeout(n, o ?? this.options.transTime)) : n());
}, M(Mt, "NAME", "Modal"), M(Mt, "EVENTS", !0), M(Mt, "DEFAULT", {
  position: "fit",
  show: !0,
  keyboard: !0,
  animation: !0,
  backdrop: !0,
  responsive: !0,
  transTime: 300
}), M(Mt, "CLASS_SHOW", "show"), M(Mt, "CLASS_SHOWN", "in"), M(Mt, "DISMISS_SELECTOR", '[data-dismiss="modal"]'), M(Mt, "zIndex", 2e3);
window.addEventListener("resize", () => {
  Mt.all.forEach((t) => {
    const e = t;
    e.isShown && e.options.responsive && e.layout();
  });
});
var ic, rt, dp, fo, Ho, uf, ui = {}, pp = [], o0 = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function Ie(t, e) {
  for (var n in e)
    t[n] = e[n];
  return t;
}
function mp(t) {
  var e = t.parentNode;
  e && e.removeChild(t);
}
function r0(t, e, n) {
  var o, i, r, l = {};
  for (r in e)
    r == "key" ? o = e[r] : r == "ref" ? i = e[r] : l[r] = e[r];
  if (arguments.length > 2 && (l.children = arguments.length > 3 ? ic.call(arguments, 2) : n), typeof t == "function" && t.defaultProps != null)
    for (r in t.defaultProps)
      l[r] === void 0 && (l[r] = t.defaultProps[r]);
  return Ls(t, l, o, i, null);
}
function Ls(t, e, n, o, i) {
  var r = { type: t, props: e, key: n, ref: o, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: i ?? ++dp };
  return i == null && rt.vnode != null && rt.vnode(r), r;
}
function s0() {
  return { current: null };
}
function lc(t) {
  return t.children;
}
function $n(t, e) {
  this.props = t, this.context = e;
}
function hr(t, e) {
  if (e == null)
    return t.__ ? hr(t.__, t.__.__k.indexOf(t) + 1) : null;
  for (var n; e < t.__k.length; e++)
    if ((n = t.__k[e]) != null && n.__e != null)
      return n.__e;
  return typeof t.type == "function" ? hr(t) : null;
}
function gp(t) {
  var e, n;
  if ((t = t.__) != null && t.__c != null) {
    for (t.__e = t.__c.base = null, e = 0; e < t.__k.length; e++)
      if ((n = t.__k[e]) != null && n.__e != null) {
        t.__e = t.__c.base = n.__e;
        break;
      }
    return gp(t);
  }
}
function hf(t) {
  (!t.__d && (t.__d = !0) && Ho.push(t) && !hi.__r++ || uf !== rt.debounceRendering) && ((uf = rt.debounceRendering) || setTimeout)(hi);
}
function hi() {
  for (var t; hi.__r = Ho.length; )
    t = Ho.sort(function(e, n) {
      return e.__v.__b - n.__v.__b;
    }), Ho = [], t.some(function(e) {
      var n, o, i, r, l, c;
      e.__d && (l = (r = (n = e).__v).__e, (c = n.__P) && (o = [], (i = Ie({}, r)).__v = r.__v + 1, ka(c, r, i, n.__n, c.ownerSVGElement !== void 0, r.__h != null ? [l] : null, o, l ?? hr(r), r.__h), wp(o, r), r.__e != l && gp(r)));
    });
}
function yp(t, e, n, o, i, r, l, c, _, h) {
  var s, d, f, a, u, b, p, m = o && o.__k || pp, y = m.length;
  for (n.__k = [], s = 0; s < e.length; s++)
    if ((a = n.__k[s] = (a = e[s]) == null || typeof a == "boolean" ? null : typeof a == "string" || typeof a == "number" || typeof a == "bigint" ? Ls(null, a, null, null, a) : Array.isArray(a) ? Ls(lc, { children: a }, null, null, null) : a.__b > 0 ? Ls(a.type, a.props, a.key, a.ref ? a.ref : null, a.__v) : a) != null) {
      if (a.__ = n, a.__b = n.__b + 1, (f = m[s]) === null || f && a.key == f.key && a.type === f.type)
        m[s] = void 0;
      else
        for (d = 0; d < y; d++) {
          if ((f = m[d]) && a.key == f.key && a.type === f.type) {
            m[d] = void 0;
            break;
          }
          f = null;
        }
      ka(t, a, f = f || ui, i, r, l, c, _, h), u = a.__e, (d = a.ref) && f.ref != d && (p || (p = []), f.ref && p.push(f.ref, null, a), p.push(d, a.__c || u, a)), u != null ? (b == null && (b = u), typeof a.type == "function" && a.__k === f.__k ? a.__d = _ = vp(a, _, t) : _ = bp(t, a, f, m, u, _), typeof n.type == "function" && (n.__d = _)) : _ && f.__e == _ && _.parentNode != t && (_ = hr(f));
    }
  for (n.__e = b, s = y; s--; )
    m[s] != null && kp(m[s], m[s]);
  if (p)
    for (s = 0; s < p.length; s++)
      $p(p[s], p[++s], p[++s]);
}
function vp(t, e, n) {
  for (var o, i = t.__k, r = 0; i && r < i.length; r++)
    (o = i[r]) && (o.__ = t, e = typeof o.type == "function" ? vp(o, e, n) : bp(n, o, o, i, o.__e, e));
  return e;
}
function bp(t, e, n, o, i, r) {
  var l, c, _;
  if (e.__d !== void 0)
    l = e.__d, e.__d = void 0;
  else if (n == null || i != r || i.parentNode == null)
    t:
      if (r == null || r.parentNode !== t)
        t.appendChild(i), l = null;
      else {
        for (c = r, _ = 0; (c = c.nextSibling) && _ < o.length; _ += 2)
          if (c == i)
            break t;
        t.insertBefore(i, r), l = r;
      }
  return l !== void 0 ? l : i.nextSibling;
}
function i0(t, e, n, o, i) {
  var r;
  for (r in n)
    r === "children" || r === "key" || r in e || di(t, r, null, n[r], o);
  for (r in e)
    i && typeof e[r] != "function" || r === "children" || r === "key" || r === "value" || r === "checked" || n[r] === e[r] || di(t, r, e[r], n[r], o);
}
function df(t, e, n) {
  e[0] === "-" ? t.setProperty(e, n) : t[e] = n == null ? "" : typeof n != "number" || o0.test(e) ? n : n + "px";
}
function di(t, e, n, o, i) {
  var r;
  t:
    if (e === "style")
      if (typeof n == "string")
        t.style.cssText = n;
      else {
        if (typeof o == "string" && (t.style.cssText = o = ""), o)
          for (e in o)
            n && e in n || df(t.style, e, "");
        if (n)
          for (e in n)
            o && n[e] === o[e] || df(t.style, e, n[e]);
      }
    else if (e[0] === "o" && e[1] === "n")
      r = e !== (e = e.replace(/Capture$/, "")), e = e.toLowerCase() in t ? e.toLowerCase().slice(2) : e.slice(2), t.l || (t.l = {}), t.l[e + r] = n, n ? o || t.addEventListener(e, r ? mf : pf, r) : t.removeEventListener(e, r ? mf : pf, r);
    else if (e !== "dangerouslySetInnerHTML") {
      if (i)
        e = e.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
      else if (e !== "href" && e !== "list" && e !== "form" && e !== "tabIndex" && e !== "download" && e in t)
        try {
          t[e] = n ?? "";
          break t;
        } catch {
        }
      typeof n == "function" || (n == null || n === !1 && e.indexOf("-") == -1 ? t.removeAttribute(e) : t.setAttribute(e, n));
    }
}
function pf(t) {
  this.l[t.type + !1](rt.event ? rt.event(t) : t);
}
function mf(t) {
  this.l[t.type + !0](rt.event ? rt.event(t) : t);
}
function ka(t, e, n, o, i, r, l, c, _) {
  var h, s, d, f, a, u, b, p, m, y, w, k, C, A, T, v = e.type;
  if (e.constructor !== void 0)
    return null;
  n.__h != null && (_ = n.__h, c = e.__e = n.__e, e.__h = null, r = [c]), (h = rt.__b) && h(e);
  try {
    t:
      if (typeof v == "function") {
        if (p = e.props, m = (h = v.contextType) && o[h.__c], y = h ? m ? m.props.value : h.__ : o, n.__c ? b = (s = e.__c = n.__c).__ = s.__E : ("prototype" in v && v.prototype.render ? e.__c = s = new v(p, y) : (e.__c = s = new $n(p, y), s.constructor = v, s.render = c0), m && m.sub(s), s.props = p, s.state || (s.state = {}), s.context = y, s.__n = o, d = s.__d = !0, s.__h = [], s._sb = []), s.__s == null && (s.__s = s.state), v.getDerivedStateFromProps != null && (s.__s == s.state && (s.__s = Ie({}, s.__s)), Ie(s.__s, v.getDerivedStateFromProps(p, s.__s))), f = s.props, a = s.state, d)
          v.getDerivedStateFromProps == null && s.componentWillMount != null && s.componentWillMount(), s.componentDidMount != null && s.__h.push(s.componentDidMount);
        else {
          if (v.getDerivedStateFromProps == null && p !== f && s.componentWillReceiveProps != null && s.componentWillReceiveProps(p, y), !s.__e && s.shouldComponentUpdate != null && s.shouldComponentUpdate(p, s.__s, y) === !1 || e.__v === n.__v) {
            for (s.props = p, s.state = s.__s, e.__v !== n.__v && (s.__d = !1), s.__v = e, e.__e = n.__e, e.__k = n.__k, e.__k.forEach(function(x) {
              x && (x.__ = e);
            }), w = 0; w < s._sb.length; w++)
              s.__h.push(s._sb[w]);
            s._sb = [], s.__h.length && l.push(s);
            break t;
          }
          s.componentWillUpdate != null && s.componentWillUpdate(p, s.__s, y), s.componentDidUpdate != null && s.__h.push(function() {
            s.componentDidUpdate(f, a, u);
          });
        }
        if (s.context = y, s.props = p, s.__v = e, s.__P = t, k = rt.__r, C = 0, "prototype" in v && v.prototype.render) {
          for (s.state = s.__s, s.__d = !1, k && k(e), h = s.render(s.props, s.state, s.context), A = 0; A < s._sb.length; A++)
            s.__h.push(s._sb[A]);
          s._sb = [];
        } else
          do
            s.__d = !1, k && k(e), h = s.render(s.props, s.state, s.context), s.state = s.__s;
          while (s.__d && ++C < 25);
        s.state = s.__s, s.getChildContext != null && (o = Ie(Ie({}, o), s.getChildContext())), d || s.getSnapshotBeforeUpdate == null || (u = s.getSnapshotBeforeUpdate(f, a)), T = h != null && h.type === lc && h.key == null ? h.props.children : h, yp(t, Array.isArray(T) ? T : [T], e, n, o, i, r, l, c, _), s.base = e.__e, e.__h = null, s.__h.length && l.push(s), b && (s.__E = s.__ = null), s.__e = !1;
      } else
        r == null && e.__v === n.__v ? (e.__k = n.__k, e.__e = n.__e) : e.__e = l0(n.__e, e, n, o, i, r, l, _);
    (h = rt.diffed) && h(e);
  } catch (x) {
    e.__v = null, (_ || r != null) && (e.__e = c, e.__h = !!_, r[r.indexOf(c)] = null), rt.__e(x, e, n);
  }
}
function wp(t, e) {
  rt.__c && rt.__c(e, t), t.some(function(n) {
    try {
      t = n.__h, n.__h = [], t.some(function(o) {
        o.call(n);
      });
    } catch (o) {
      rt.__e(o, n.__v);
    }
  });
}
function l0(t, e, n, o, i, r, l, c) {
  var _, h, s, d = n.props, f = e.props, a = e.type, u = 0;
  if (a === "svg" && (i = !0), r != null) {
    for (; u < r.length; u++)
      if ((_ = r[u]) && "setAttribute" in _ == !!a && (a ? _.localName === a : _.nodeType === 3)) {
        t = _, r[u] = null;
        break;
      }
  }
  if (t == null) {
    if (a === null)
      return document.createTextNode(f);
    t = i ? document.createElementNS("http://www.w3.org/2000/svg", a) : document.createElement(a, f.is && f), r = null, c = !1;
  }
  if (a === null)
    d === f || c && t.data === f || (t.data = f);
  else {
    if (r = r && ic.call(t.childNodes), h = (d = n.props || ui).dangerouslySetInnerHTML, s = f.dangerouslySetInnerHTML, !c) {
      if (r != null)
        for (d = {}, u = 0; u < t.attributes.length; u++)
          d[t.attributes[u].name] = t.attributes[u].value;
      (s || h) && (s && (h && s.__html == h.__html || s.__html === t.innerHTML) || (t.innerHTML = s && s.__html || ""));
    }
    if (i0(t, f, d, i, c), s)
      e.__k = [];
    else if (u = e.props.children, yp(t, Array.isArray(u) ? u : [u], e, n, o, i && a !== "foreignObject", r, l, r ? r[0] : n.__k && hr(n, 0), c), r != null)
      for (u = r.length; u--; )
        r[u] != null && mp(r[u]);
    c || ("value" in f && (u = f.value) !== void 0 && (u !== t.value || a === "progress" && !u || a === "option" && u !== d.value) && di(t, "value", u, d.value, !1), "checked" in f && (u = f.checked) !== void 0 && u !== t.checked && di(t, "checked", u, d.checked, !1));
  }
  return t;
}
function $p(t, e, n) {
  try {
    typeof t == "function" ? t(e) : t.current = e;
  } catch (o) {
    rt.__e(o, n);
  }
}
function kp(t, e, n) {
  var o, i;
  if (rt.unmount && rt.unmount(t), (o = t.ref) && (o.current && o.current !== t.__e || $p(o, null, e)), (o = t.__c) != null) {
    if (o.componentWillUnmount)
      try {
        o.componentWillUnmount();
      } catch (r) {
        rt.__e(r, e);
      }
    o.base = o.__P = null, t.__c = void 0;
  }
  if (o = t.__k)
    for (i = 0; i < o.length; i++)
      o[i] && kp(o[i], e, n || typeof t.type != "function");
  n || t.__e == null || mp(t.__e), t.__ = t.__e = t.__d = void 0;
}
function c0(t, e, n) {
  return this.constructor(t, n);
}
function a0(t, e, n) {
  var o, i, r;
  rt.__ && rt.__(t, e), i = (o = typeof n == "function") ? null : n && n.__k || e.__k, r = [], ka(e, t = (!o && n || e).__k = r0(lc, null, [t]), i || ui, ui, e.ownerSVGElement !== void 0, !o && n ? [n] : i ? null : e.firstChild ? ic.call(e.childNodes) : null, r, !o && n ? n : i ? i.__e : e.firstChild, o), wp(r, t);
}
ic = pp.slice, rt = { __e: function(t, e, n, o) {
  for (var i, r, l; e = e.__; )
    if ((i = e.__c) && !i.__)
      try {
        if ((r = i.constructor) && r.getDerivedStateFromError != null && (i.setState(r.getDerivedStateFromError(t)), l = i.__d), i.componentDidCatch != null && (i.componentDidCatch(t, o || {}), l = i.__d), l)
          return i.__E = i;
      } catch (c) {
        t = c;
      }
  throw t;
} }, dp = 0, fo = function(t) {
  return t != null && t.constructor === void 0;
}, $n.prototype.setState = function(t, e) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = Ie({}, this.state), typeof t == "function" && (t = t(Ie({}, n), this.props)), t && Ie(n, t), t != null && this.__v && (e && this._sb.push(e), hf(this));
}, $n.prototype.forceUpdate = function(t) {
  this.__v && (this.__e = !0, t && this.__h.push(t), hf(this));
}, $n.prototype.render = lc, Ho = [], hi.__r = 0;
var _0 = 0;
function wt(t, e, n, o, i) {
  var r, l, c = {};
  for (l in e)
    l == "ref" ? r = e[l] : c[l] = e[l];
  var _ = { type: t, props: c, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: --_0, __source: i, __self: o };
  if (typeof t == "function" && (r = t.defaultProps))
    for (l in r)
      c[l] === void 0 && (c[l] = r[l]);
  return rt.vnode && rt.vnode(_), _;
}
let f0 = (t = 21) => crypto.getRandomValues(new Uint8Array(t)).reduce((e, n) => (n &= 63, n < 36 ? e += n.toString(36) : n < 62 ? e += (n - 26).toString(36).toUpperCase() : n > 62 ? e += "-" : e += "_", e), "");
class xp extends $n {
  componentDidMount() {
    var e;
    (e = this.props.afterRender) == null || e.call(this, { firstRender: !0 });
  }
  componentDidUpdate() {
    var e;
    (e = this.props.afterRender) == null || e.call(this, { firstRender: !1 });
  }
  componentWillUnmount() {
    var e;
    (e = this.props.beforeDestroy) == null || e.call(this);
  }
  renderHeader() {
    const {
      header: e,
      title: n
    } = this.props;
    return fo(e) ? e : e === !1 || !n ? null : /* @__PURE__ */ wt("div", { className: "modal-header", children: /* @__PURE__ */ wt("div", { className: "modal-title", children: n }) });
  }
  renderActions() {
    const {
      actions: e,
      closeBtn: n
    } = this.props;
    return !n && !e ? null : fo(e) ? e : /* @__PURE__ */ wt("div", { className: "modal-actions", children: [
      e ? /* @__PURE__ */ wt(Qn, { ...e }) : null,
      n ? /* @__PURE__ */ wt("button", { type: "button", class: "btn square ghost", "data-dismiss": "modal", children: /* @__PURE__ */ wt("span", { class: "close" }) }) : null
    ] });
  }
  renderBody() {
    const {
      body: e
    } = this.props;
    return e ? fo(e) ? e : /* @__PURE__ */ wt("div", { className: "modal-body", children: e }) : null;
  }
  renderFooter() {
    const {
      footer: e,
      footerActions: n
    } = this.props;
    return fo(e) ? e : e === !1 || !n ? null : /* @__PURE__ */ wt("div", { className: "modal-footer", children: n ? /* @__PURE__ */ wt(Qn, { ...n }) : null });
  }
  render() {
    const {
      className: e,
      style: n,
      children: o
    } = this.props;
    return /* @__PURE__ */ wt("div", { className: F("modal-dialog", e), style: n, children: /* @__PURE__ */ wt("div", { className: "modal-content", children: [
      this.renderHeader(),
      this.renderActions(),
      this.renderBody(),
      o,
      this.renderFooter()
    ] }) });
  }
}
M(xp, "defaultProps", { closeBtn: !0 });
var Rr, In, Dr;
class u0 extends $n {
  constructor() {
    super(...arguments);
    E(this, Rr, s0());
    E(this, In, void 0);
    M(this, "state", {});
    E(this, Dr, () => {
      var i, r;
      const n = (r = (i = g(this, Rr).current) == null ? void 0 : i.contentWindow) == null ? void 0 : r.document;
      if (!n)
        return;
      let o = g(this, In);
      o == null || o.disconnect(), o = new ResizeObserver(() => {
        const l = n.body, c = n.documentElement, _ = Math.ceil(Math.max(l.scrollHeight, l.offsetHeight, c.offsetHeight));
        this.setState({ height: _ });
      }), o.observe(n.body), o.observe(n.documentElement), H(this, In, o);
    });
  }
  componentDidMount() {
    g(this, Dr).call(this);
  }
  componentWillUnmount() {
    var n;
    (n = g(this, In)) == null || n.disconnect();
  }
  render() {
    const { url: n } = this.props;
    return /* @__PURE__ */ wt(
      "iframe",
      {
        className: "modal-iframe",
        style: this.state,
        src: n,
        ref: g(this, Rr),
        onLoad: g(this, Dr)
      }
    );
  }
}
Rr = new WeakMap(), In = new WeakMap(), Dr = new WeakMap();
function h0(t, e) {
  const { custom: n, title: o, content: i } = e;
  return {
    body: i,
    title: o,
    ...typeof n == "function" ? n() : n
  };
}
async function d0(t, e) {
  const { dataType: n, url: o, request: i, custom: r, title: l } = e, _ = await (await fetch(o, i)).text();
  if (n !== "html")
    try {
      const h = JSON.parse(_);
      return {
        title: l,
        ...r,
        ...h
      };
    } catch {
    }
  return {
    title: l,
    ...r,
    body: n === "html" ? /* @__PURE__ */ wt("div", { className: "modal-body", dangerouslySetInnerHTML: { __html: _ } }) : _
  };
}
async function p0(t, e) {
  const { url: n, custom: o, title: i } = e;
  return {
    title: i,
    ...o,
    body: /* @__PURE__ */ wt(u0, { url: n })
  };
}
const m0 = {
  custom: h0,
  ajax: d0,
  iframe: p0
};
var Nr, Pr, te, Un, Ms, Ki, Sp, Or, Bc;
const Zo = class extends Mt {
  constructor() {
    super(...arguments);
    E(this, Un);
    E(this, Ki);
    E(this, Or);
    E(this, Nr, void 0);
    E(this, Pr, void 0);
    E(this, te, void 0);
  }
  get id() {
    return g(this, Pr);
  }
  get loading() {
    return this.modalElement.classList.contains(Zo.LOADING_CLASS);
  }
  get modalElement() {
    let n = g(this, Nr);
    if (!n) {
      const { id: o } = this;
      n = this.element.querySelector(`#${o}`), n || (n = document.createElement("div"), fi(n, {
        id: o,
        style: this.options.style
      }), hp(n, ["modal modal-async", this.options.className]), this.element.appendChild(n)), H(this, Nr, n);
    }
    return n;
  }
  afterInit() {
    super.afterInit(), H(this, Pr, this.options.id || `modal-${f0()}`);
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
    g(this, te) && clearTimeout(g(this, te));
    const { modalElement: n, options: o } = this, { type: i, loadTimeout: r } = o, l = m0[i];
    if (!l)
      return console.warn(`Modal: Cannot build modal with type "${i}"`), !1;
    n.classList.add(Zo.LOADING_CLASS), await W(this, Ki, Sp).call(this), r && H(this, te, window.setTimeout(() => {
      H(this, te, 0), W(this, Or, Bc).call(this, this.options.timeoutTip);
    }, r));
    const c = await l(n, o);
    return c === !1 ? await W(this, Or, Bc).call(this, this.options.failedTip) : c && typeof c == "object" && await W(this, Un, Ms).call(this, c), g(this, te) && (clearTimeout(g(this, te)), H(this, te, 0)), n.classList.remove(Zo.LOADING_CLASS), !0;
  }
};
let uo = Zo;
Nr = new WeakMap(), Pr = new WeakMap(), te = new WeakMap(), Un = new WeakSet(), Ms = function(n) {
  return new Promise((o) => {
    const { afterRender: i, ...r } = n;
    n = {
      afterRender: (l) => {
        this.layout(), i == null || i(l), o();
      },
      ...r
    }, a0(
      /* @__PURE__ */ wt(xp, { ...n }),
      this.modalElement
    );
  });
}, Ki = new WeakSet(), Sp = function() {
  const { loadingText: n } = this.options;
  return W(this, Un, Ms).call(this, {
    body: /* @__PURE__ */ wt("div", { className: "modal-loading-indicator", children: [
      /* @__PURE__ */ wt("span", { className: "spinner" }),
      n ? /* @__PURE__ */ wt("span", { className: "modal-loading-text", children: n }) : null
    ] })
  });
}, Or = new WeakSet(), Bc = function(n) {
  if (n)
    return W(this, Un, Ms).call(this, {
      body: /* @__PURE__ */ wt("div", { className: "modal-load-failed", children: n })
    });
}, M(uo, "LOADING_CLASS", "loading"), M(uo, "DEFAULT", {
  ...Mt.DEFAULT,
  loadTimeout: 1e4
});
var Ce, Ji, Cp, Zi, Ep, Qi, Tp;
class Wo extends Jt {
  constructor() {
    super(...arguments);
    E(this, Ji);
    E(this, Zi);
    E(this, Qi);
    E(this, Ce, void 0);
  }
  get modal() {
    return g(this, Ce);
  }
  get container() {
    const { container: n } = this.options;
    return typeof n == "string" ? document.querySelector(n) : n instanceof HTMLElement ? n : document.body;
  }
  show() {
    return W(this, Zi, Ep).call(this).show();
  }
  hide() {
    var n;
    (n = g(this, Ce)) == null || n.hide();
  }
}
Ce = new WeakMap(), Ji = new WeakSet(), Cp = function() {
  const {
    container: n,
    ...o
  } = this.options, i = o, r = this.element.getAttribute("href") || "";
  return i.type || (i.target || r[0] === "#" ? i.type = "static" : i.type = i.type || (i.url ? "iframe" : "custom")), !i.url && (i.type === "iframe" || i.type === "ajax") && r[0] !== "#" && (i.url = r), i;
}, Zi = new WeakSet(), Ep = function() {
  const n = W(this, Ji, Cp).call(this);
  let o = g(this, Ce);
  return o ? o.setOptions(n) : n.type === "static" ? (o = new Mt(W(this, Qi, Tp).call(this), n), H(this, Ce, o)) : (o = new uo(this.container, n), H(this, Ce, o)), o;
}, Qi = new WeakSet(), Tp = function() {
  let n = this.options.target;
  if (!n) {
    const { element: o } = this;
    if (o.tagName === "A") {
      const i = o.getAttribute("href");
      i != null && i.startsWith("#") && (n = i);
    }
  }
  return this.container.querySelector(n || ".modal");
}, M(Wo, "NAME", "ModalTrigger"), M(Wo, "EVENTS", !0), M(Wo, "TOGGLE_SELECTOR", '[data-toggle="modal"]');
window.addEventListener("click", (t) => {
  const n = t.target.closest(Wo.TOGGLE_SELECTOR);
  if (n) {
    const o = Wo.ensure(n);
    o && o.show(), console.log("> modalTrigger", o);
  }
});
var Lc;
let g0 = (Lc = class extends Zn {
  beforeRender() {
    const e = super.beforeRender();
    return e.className = F(e.className, e.type ? `nav-${e.type}` : "", {
      "nav-stacked": e.stacked
    }), e;
  }
}, M(Lc, "NAME", "nav"), Lc);
class gf extends xt {
}
M(gf, "NAME", "nav"), M(gf, "Component", g0);
var jc;
jc = { __e: function(t, e, n, o) {
  for (var i, r, l; e = e.__; )
    if ((i = e.__c) && !i.__)
      try {
        if ((r = i.constructor) && r.getDerivedStateFromError != null && (i.setState(r.getDerivedStateFromError(t)), l = i.__d), i.componentDidCatch != null && (i.componentDidCatch(t, o || {}), l = i.__d), l)
          return i.__E = i;
      } catch (c) {
        t = c;
      }
  throw t;
} };
var y0 = 0;
function Ve(t, e, n, o, i) {
  var r, l, c = {};
  for (l in e)
    l == "ref" ? r = e[l] : c[l] = e[l];
  var _ = { type: t, props: c, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: --y0, __source: i, __self: o };
  if (typeof t == "function" && (r = t.defaultProps))
    for (l in r)
      c[l] === void 0 && (c[l] = r[l]);
  return jc.vnode && jc.vnode(_), _;
}
function dr(t, e) {
  const n = t.pageTotal || Math.ceil(t.recTotal / t.recPerPage);
  return typeof e == "string" && (e === "first" ? e = 1 : e === "last" ? e = n : e === "prev" ? e = t.page - 1 : e === "next" ? e = t.page + 1 : e === "current" ? e = t.page : e = Number.parseInt(e, 10)), e = e !== void 0 ? Math.max(1, Math.min(e < 0 ? n + e : e, n)) : t.page, {
    ...t,
    pageTotal: n,
    page: e
  };
}
function v0({
  key: t,
  type: e,
  btnType: n,
  page: o,
  format: i,
  pagerInfo: r,
  linkCreator: l,
  ...c
}) {
  const _ = dr(r, o);
  return c.text === void 0 && !c.icon && i && (c.text = typeof i == "function" ? i(_) : Dt(i, _)), c.url === void 0 && l && (c.url = typeof l == "function" ? l(_) : Dt(l, _)), c.disabled === void 0 && (c.disabled = o !== void 0 && _.page === r.page), /* @__PURE__ */ Ve(re, { type: n, ...c });
}
const fe = 24 * 60 * 60 * 1e3, Nt = (t) => t ? (t instanceof Date || (typeof t == "string" && (t = t.trim(), /^\d+$/.test(t) && (t = Number.parseInt(t, 10))), typeof t == "number" && t < 1e10 && (t *= 1e3), t = new Date(t)), t) : new Date(), ss = (t, e = new Date()) => (t = Nt(t), e = Nt(e), t.getFullYear() === e.getFullYear() && t.getMonth() === e.getMonth() && t.getDate() === e.getDate()), yf = (t, e = new Date()) => Nt(t).getFullYear() === Nt(e).getFullYear(), b0 = (t, e = new Date()) => (t = Nt(t), e = Nt(e), t.getFullYear() === e.getFullYear() && t.getMonth() === e.getMonth()), rk = (t, e = new Date()) => {
  t = Nt(t), e = Nt(e);
  const n = 1e3 * 60 * 60 * 24, o = Math.floor(t.getTime() / n), i = Math.floor(e.getTime() / n);
  return Math.floor((o + 4) / 7) === Math.floor((i + 4) / 7);
}, sk = (t, e) => ss(Nt(e), t), ik = (t, e) => ss(Nt(e).getTime() - fe, t), lk = (t, e) => ss(Nt(e).getTime() + fe, t), ck = (t, e) => ss(Nt(e).getTime() - 2 * fe, t), zc = (t, e = "yyyy-MM-dd hh:mm") => {
  t = Nt(t);
  const n = {
    "M+": t.getMonth() + 1,
    "d+": t.getDate(),
    "h+": t.getHours(),
    "H+": t.getHours() % 12,
    "m+": t.getMinutes(),
    "s+": t.getSeconds(),
    "S+": t.getMilliseconds()
  };
  return /(y+)/i.test(e) && (e = e.replace(RegExp.$1, `${t.getFullYear()}`.substring(4 - RegExp.$1.length))), Object.keys(n).forEach((o) => {
    if (new RegExp(`(${o})`).test(e)) {
      const i = `${n[o]}`;
      e = e.replace(RegExp.$1, RegExp.$1.length === 1 ? i : `00${i}`.substring(i.length));
    }
  }), e;
}, ak = (t, e, n) => {
  const o = {
    full: "yyyy-M-d",
    month: "M-d",
    day: "d",
    str: "{0} ~ {1}",
    ...n
  }, i = zc(t, yf(t) ? o.month : o.full);
  if (ss(t, e))
    return i;
  const r = zc(e, yf(t, e) ? b0(t, e) ? o.day : o.month : o.full);
  return o.str.replace("{0}", i).replace("{1}", r);
}, _k = (t) => {
  const e = new Date().getTime();
  switch (t) {
    case "oneWeek":
      return e - fe * 7;
    case "oneMonth":
      return e - fe * 31;
    case "threeMonth":
      return e - fe * 31 * 3;
    case "halfYear":
      return e - fe * 183;
    case "oneYear":
      return e - fe * 365;
    case "twoYear":
      return e - 2 * (fe * 365);
    default:
      return 0;
  }
}, vf = (t, e, n = !0, o = Date.now()) => {
  switch (e) {
    case "year":
      return t *= 365, vf(t, "day", n, o);
    case "quarter":
      t *= 3;
    case "month":
      return t *= 30, vf(t, "day", n, o);
    case "week":
      t *= 7;
    case "day":
      t *= 24;
    case "hour":
      t *= 60;
    case "minute":
      t *= 6e4;
      break;
    default:
      t = 0;
  }
  return n ? o + t : o - t;
};
function w0({
  key: t,
  type: e,
  page: n,
  text: o = "",
  pagerInfo: i,
  children: r,
  ...l
}) {
  const c = dr(i, n);
  return o = typeof o == "function" ? o(c) : Dt(o, c), /* @__PURE__ */ Ve(Uu, { ...l, children: [
    r,
    o
  ] });
}
function $0({
  key: t,
  type: e,
  btnType: n,
  count: o = 12,
  pagerInfo: i,
  onClick: r,
  linkCreator: l,
  ...c
}) {
  if (!i.pageTotal)
    return;
  const _ = { ...c, square: !0 }, h = () => (_.text = "", _.icon = "icon-ellipsis-h", _.disabled = !0, /* @__PURE__ */ Ve(re, { type: n, ..._ })), s = (f, a) => {
    const u = [];
    for (let b = f; b <= a; b++) {
      _.text = b, delete _.icon, _.disabled = !1;
      const p = dr(i, b);
      l && (_.url = typeof l == "function" ? l(p) : Dt(l, p)), u.push(/* @__PURE__ */ Ve(re, { type: n, ..._, onClick: r }));
    }
    return u;
  };
  let d = [];
  return d = [...s(1, 1)], i.pageTotal <= 1 || (i.pageTotal <= o ? d = [...d, ...s(2, i.pageTotal)] : i.page < o - 2 ? d = [...d, ...s(2, o - 2), h(), ...s(i.pageTotal, i.pageTotal)] : i.page > i.pageTotal - o + 3 ? d = [...d, h(), ...s(i.pageTotal - o + 3, i.pageTotal)] : d = [...d, h(), ...s(i.page - Math.ceil((o - 4) / 2), i.page + Math.floor((o - 4) / 2)), h(), ...s(i.pageTotal, i.pageTotal)]), d;
}
function k0({
  type: t,
  pagerInfo: e,
  linkCreator: n,
  items: o = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 100, 200, 500, 1e3, 2e3],
  dropdown: i = {},
  ...r
}) {
  var c;
  i.items = i.items ?? o.map((_) => {
    const h = { ...e, recPerPage: _ };
    return {
      text: `${_}`,
      url: typeof n == "function" ? n(h) : Dt(n, h)
    };
  });
  const { text: l = "" } = r;
  return r.text = typeof l == "function" ? l(e) : Dt(l, e), i.menu = { ...i.menu, className: F((c = i.menu) == null ? void 0 : c.className, "pager-size-menu") }, /* @__PURE__ */ Ve(Qh, { type: "dropdown", dropdown: i, ...r });
}
function x0({
  key: t,
  page: e,
  type: n,
  btnType: o,
  pagerInfo: i,
  size: r,
  onClick: l,
  onChange: c,
  linkCreator: _,
  ...h
}) {
  const s = { ...h };
  let d;
  const f = (b) => {
    var p;
    d = Number((p = b.target) == null ? void 0 : p.value) || 1, d = d > i.pageTotal ? i.pageTotal : d;
  }, a = (b) => {
    if (!(b != null && b.target))
      return;
    d = d <= i.pageTotal ? d : i.pageTotal;
    const p = dr(i, d);
    c && !c({ info: p, event: b }) || (b.target.href = s.url = typeof _ == "function" ? _(p) : Dt(_, p));
  }, u = dr(i, e || 0);
  return s.url = typeof _ == "function" ? _(u) : Dt(_, u), s.className = F("input-group-addon", s.className), /* @__PURE__ */ Ve("div", { className: F("input-group", "pager-goto-group", r ? `size-${r}` : ""), children: [
    /* @__PURE__ */ Ve("input", { type: "number", class: "form-control", max: i.pageTotal, min: "1", onInput: f }),
    /* @__PURE__ */ Ve(re, { type: o, ...s, onClick: a })
  ] });
}
var co;
let S0 = (co = class extends Qn {
  get pagerInfo() {
    const { page: e = 1, recTotal: n = 0, recPerPage: o = 10 } = this.props;
    return { page: e, recTotal: n, recPerPage: o, pageTotal: o ? Math.ceil(n / o) : 0 };
  }
  isBtnItem(e) {
    return e === "link" || e === "nav" || e === "size-menu" || e === "goto" || super.isBtnItem(e);
  }
  getItemRenderProps(e, n, o) {
    const i = super.getItemRenderProps(e, n, o), r = n.type || "item";
    return r === "info" ? Object.assign(i, { pagerInfo: this.pagerInfo }) : (r === "link" || r === "size-menu" || r === "nav" || r === "goto") && Object.assign(i, { pagerInfo: this.pagerInfo, linkCreator: e.linkCreator }), i;
  }
}, M(co, "NAME", "pager"), M(co, "defaultProps", {
  gap: 1,
  btnProps: {
    btnType: "ghost",
    size: "sm"
  }
}), M(co, "ItemComponents", {
  ...Qn.ItemComponents,
  link: v0,
  info: w0,
  nav: $0,
  "size-menu": k0,
  goto: x0
}), co);
class bf extends xt {
}
M(bf, "NAME", "pager"), M(bf, "Component", S0);
var Ap, pt, Lp, Io, wf, Mp = {}, Rp = [], C0 = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function Ue(t, e) {
  for (var n in e)
    t[n] = e[n];
  return t;
}
function Dp(t) {
  var e = t.parentNode;
  e && e.removeChild(t);
}
function xc(t, e, n, o, i) {
  var r = { type: t, props: e, key: n, ref: o, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: i ?? ++Lp };
  return i == null && pt.vnode != null && pt.vnode(r), r;
}
function E0() {
  return { current: null };
}
function xa(t) {
  return t.children;
}
function Ye(t, e) {
  this.props = t, this.context = e;
}
function pr(t, e) {
  if (e == null)
    return t.__ ? pr(t.__, t.__.__k.indexOf(t) + 1) : null;
  for (var n; e < t.__k.length; e++)
    if ((n = t.__k[e]) != null && n.__e != null)
      return n.__e;
  return typeof t.type == "function" ? pr(t) : null;
}
function Np(t) {
  var e, n;
  if ((t = t.__) != null && t.__c != null) {
    for (t.__e = t.__c.base = null, e = 0; e < t.__k.length; e++)
      if ((n = t.__k[e]) != null && n.__e != null) {
        t.__e = t.__c.base = n.__e;
        break;
      }
    return Np(t);
  }
}
function $f(t) {
  (!t.__d && (t.__d = !0) && Io.push(t) && !pi.__r++ || wf !== pt.debounceRendering) && ((wf = pt.debounceRendering) || setTimeout)(pi);
}
function pi() {
  for (var t; pi.__r = Io.length; )
    t = Io.sort(function(e, n) {
      return e.__v.__b - n.__v.__b;
    }), Io = [], t.some(function(e) {
      var n, o, i, r, l, c;
      e.__d && (l = (r = (n = e).__v).__e, (c = n.__P) && (o = [], (i = Ue({}, r)).__v = r.__v + 1, Wp(c, r, i, n.__n, c.ownerSVGElement !== void 0, r.__h != null ? [l] : null, o, l ?? pr(r), r.__h), A0(o, r), r.__e != l && Np(r)));
    });
}
function Pp(t, e, n, o, i, r, l, c, _, h) {
  var s, d, f, a, u, b, p, m = o && o.__k || Rp, y = m.length;
  for (n.__k = [], s = 0; s < e.length; s++)
    if ((a = n.__k[s] = (a = e[s]) == null || typeof a == "boolean" ? null : typeof a == "string" || typeof a == "number" || typeof a == "bigint" ? xc(null, a, null, null, a) : Array.isArray(a) ? xc(xa, { children: a }, null, null, null) : a.__b > 0 ? xc(a.type, a.props, a.key, a.ref ? a.ref : null, a.__v) : a) != null) {
      if (a.__ = n, a.__b = n.__b + 1, (f = m[s]) === null || f && a.key == f.key && a.type === f.type)
        m[s] = void 0;
      else
        for (d = 0; d < y; d++) {
          if ((f = m[d]) && a.key == f.key && a.type === f.type) {
            m[d] = void 0;
            break;
          }
          f = null;
        }
      Wp(t, a, f = f || Mp, i, r, l, c, _, h), u = a.__e, (d = a.ref) && f.ref != d && (p || (p = []), f.ref && p.push(f.ref, null, a), p.push(d, a.__c || u, a)), u != null ? (b == null && (b = u), typeof a.type == "function" && a.__k === f.__k ? a.__d = _ = Op(a, _, t) : _ = Hp(t, a, f, m, u, _), typeof n.type == "function" && (n.__d = _)) : _ && f.__e == _ && _.parentNode != t && (_ = pr(f));
    }
  for (n.__e = b, s = y; s--; )
    m[s] != null && Up(m[s], m[s]);
  if (p)
    for (s = 0; s < p.length; s++)
      Ip(p[s], p[++s], p[++s]);
}
function Op(t, e, n) {
  for (var o, i = t.__k, r = 0; i && r < i.length; r++)
    (o = i[r]) && (o.__ = t, e = typeof o.type == "function" ? Op(o, e, n) : Hp(n, o, o, i, o.__e, e));
  return e;
}
function Hp(t, e, n, o, i, r) {
  var l, c, _;
  if (e.__d !== void 0)
    l = e.__d, e.__d = void 0;
  else if (n == null || i != r || i.parentNode == null)
    t:
      if (r == null || r.parentNode !== t)
        t.appendChild(i), l = null;
      else {
        for (c = r, _ = 0; (c = c.nextSibling) && _ < o.length; _ += 2)
          if (c == i)
            break t;
        t.insertBefore(i, r), l = r;
      }
  return l !== void 0 ? l : i.nextSibling;
}
function T0(t, e, n, o, i) {
  var r;
  for (r in n)
    r === "children" || r === "key" || r in e || mi(t, r, null, n[r], o);
  for (r in e)
    i && typeof e[r] != "function" || r === "children" || r === "key" || r === "value" || r === "checked" || n[r] === e[r] || mi(t, r, e[r], n[r], o);
}
function kf(t, e, n) {
  e[0] === "-" ? t.setProperty(e, n) : t[e] = n == null ? "" : typeof n != "number" || C0.test(e) ? n : n + "px";
}
function mi(t, e, n, o, i) {
  var r;
  t:
    if (e === "style")
      if (typeof n == "string")
        t.style.cssText = n;
      else {
        if (typeof o == "string" && (t.style.cssText = o = ""), o)
          for (e in o)
            n && e in n || kf(t.style, e, "");
        if (n)
          for (e in n)
            o && n[e] === o[e] || kf(t.style, e, n[e]);
      }
    else if (e[0] === "o" && e[1] === "n")
      r = e !== (e = e.replace(/Capture$/, "")), e = e.toLowerCase() in t ? e.toLowerCase().slice(2) : e.slice(2), t.l || (t.l = {}), t.l[e + r] = n, n ? o || t.addEventListener(e, r ? Sf : xf, r) : t.removeEventListener(e, r ? Sf : xf, r);
    else if (e !== "dangerouslySetInnerHTML") {
      if (i)
        e = e.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
      else if (e !== "href" && e !== "list" && e !== "form" && e !== "tabIndex" && e !== "download" && e in t)
        try {
          t[e] = n ?? "";
          break t;
        } catch {
        }
      typeof n == "function" || (n == null || n === !1 && e.indexOf("-") == -1 ? t.removeAttribute(e) : t.setAttribute(e, n));
    }
}
function xf(t) {
  this.l[t.type + !1](pt.event ? pt.event(t) : t);
}
function Sf(t) {
  this.l[t.type + !0](pt.event ? pt.event(t) : t);
}
function Wp(t, e, n, o, i, r, l, c, _) {
  var h, s, d, f, a, u, b, p, m, y, w, k, C, A, T, v = e.type;
  if (e.constructor !== void 0)
    return null;
  n.__h != null && (_ = n.__h, c = e.__e = n.__e, e.__h = null, r = [c]), (h = pt.__b) && h(e);
  try {
    t:
      if (typeof v == "function") {
        if (p = e.props, m = (h = v.contextType) && o[h.__c], y = h ? m ? m.props.value : h.__ : o, n.__c ? b = (s = e.__c = n.__c).__ = s.__E : ("prototype" in v && v.prototype.render ? e.__c = s = new v(p, y) : (e.__c = s = new Ye(p, y), s.constructor = v, s.render = M0), m && m.sub(s), s.props = p, s.state || (s.state = {}), s.context = y, s.__n = o, d = s.__d = !0, s.__h = [], s._sb = []), s.__s == null && (s.__s = s.state), v.getDerivedStateFromProps != null && (s.__s == s.state && (s.__s = Ue({}, s.__s)), Ue(s.__s, v.getDerivedStateFromProps(p, s.__s))), f = s.props, a = s.state, d)
          v.getDerivedStateFromProps == null && s.componentWillMount != null && s.componentWillMount(), s.componentDidMount != null && s.__h.push(s.componentDidMount);
        else {
          if (v.getDerivedStateFromProps == null && p !== f && s.componentWillReceiveProps != null && s.componentWillReceiveProps(p, y), !s.__e && s.shouldComponentUpdate != null && s.shouldComponentUpdate(p, s.__s, y) === !1 || e.__v === n.__v) {
            for (s.props = p, s.state = s.__s, e.__v !== n.__v && (s.__d = !1), s.__v = e, e.__e = n.__e, e.__k = n.__k, e.__k.forEach(function(x) {
              x && (x.__ = e);
            }), w = 0; w < s._sb.length; w++)
              s.__h.push(s._sb[w]);
            s._sb = [], s.__h.length && l.push(s);
            break t;
          }
          s.componentWillUpdate != null && s.componentWillUpdate(p, s.__s, y), s.componentDidUpdate != null && s.__h.push(function() {
            s.componentDidUpdate(f, a, u);
          });
        }
        if (s.context = y, s.props = p, s.__v = e, s.__P = t, k = pt.__r, C = 0, "prototype" in v && v.prototype.render) {
          for (s.state = s.__s, s.__d = !1, k && k(e), h = s.render(s.props, s.state, s.context), A = 0; A < s._sb.length; A++)
            s.__h.push(s._sb[A]);
          s._sb = [];
        } else
          do
            s.__d = !1, k && k(e), h = s.render(s.props, s.state, s.context), s.state = s.__s;
          while (s.__d && ++C < 25);
        s.state = s.__s, s.getChildContext != null && (o = Ue(Ue({}, o), s.getChildContext())), d || s.getSnapshotBeforeUpdate == null || (u = s.getSnapshotBeforeUpdate(f, a)), T = h != null && h.type === xa && h.key == null ? h.props.children : h, Pp(t, Array.isArray(T) ? T : [T], e, n, o, i, r, l, c, _), s.base = e.__e, e.__h = null, s.__h.length && l.push(s), b && (s.__E = s.__ = null), s.__e = !1;
      } else
        r == null && e.__v === n.__v ? (e.__k = n.__k, e.__e = n.__e) : e.__e = L0(n.__e, e, n, o, i, r, l, _);
    (h = pt.diffed) && h(e);
  } catch (x) {
    e.__v = null, (_ || r != null) && (e.__e = c, e.__h = !!_, r[r.indexOf(c)] = null), pt.__e(x, e, n);
  }
}
function A0(t, e) {
  pt.__c && pt.__c(e, t), t.some(function(n) {
    try {
      t = n.__h, n.__h = [], t.some(function(o) {
        o.call(n);
      });
    } catch (o) {
      pt.__e(o, n.__v);
    }
  });
}
function L0(t, e, n, o, i, r, l, c) {
  var _, h, s, d = n.props, f = e.props, a = e.type, u = 0;
  if (a === "svg" && (i = !0), r != null) {
    for (; u < r.length; u++)
      if ((_ = r[u]) && "setAttribute" in _ == !!a && (a ? _.localName === a : _.nodeType === 3)) {
        t = _, r[u] = null;
        break;
      }
  }
  if (t == null) {
    if (a === null)
      return document.createTextNode(f);
    t = i ? document.createElementNS("http://www.w3.org/2000/svg", a) : document.createElement(a, f.is && f), r = null, c = !1;
  }
  if (a === null)
    d === f || c && t.data === f || (t.data = f);
  else {
    if (r = r && Ap.call(t.childNodes), h = (d = n.props || Mp).dangerouslySetInnerHTML, s = f.dangerouslySetInnerHTML, !c) {
      if (r != null)
        for (d = {}, u = 0; u < t.attributes.length; u++)
          d[t.attributes[u].name] = t.attributes[u].value;
      (s || h) && (s && (h && s.__html == h.__html || s.__html === t.innerHTML) || (t.innerHTML = s && s.__html || ""));
    }
    if (T0(t, f, d, i, c), s)
      e.__k = [];
    else if (u = e.props.children, Pp(t, Array.isArray(u) ? u : [u], e, n, o, i && a !== "foreignObject", r, l, r ? r[0] : n.__k && pr(n, 0), c), r != null)
      for (u = r.length; u--; )
        r[u] != null && Dp(r[u]);
    c || ("value" in f && (u = f.value) !== void 0 && (u !== t.value || a === "progress" && !u || a === "option" && u !== d.value) && mi(t, "value", u, d.value, !1), "checked" in f && (u = f.checked) !== void 0 && u !== t.checked && mi(t, "checked", u, d.checked, !1));
  }
  return t;
}
function Ip(t, e, n) {
  try {
    typeof t == "function" ? t(e) : t.current = e;
  } catch (o) {
    pt.__e(o, n);
  }
}
function Up(t, e, n) {
  var o, i;
  if (pt.unmount && pt.unmount(t), (o = t.ref) && (o.current && o.current !== t.__e || Ip(o, null, e)), (o = t.__c) != null) {
    if (o.componentWillUnmount)
      try {
        o.componentWillUnmount();
      } catch (r) {
        pt.__e(r, e);
      }
    o.base = o.__P = null, t.__c = void 0;
  }
  if (o = t.__k)
    for (i = 0; i < o.length; i++)
      o[i] && Up(o[i], e, n || typeof t.type != "function");
  n || t.__e == null || Dp(t.__e), t.__ = t.__e = t.__d = void 0;
}
function M0(t, e, n) {
  return this.constructor(t, n);
}
Ap = Rp.slice, pt = { __e: function(t, e, n, o) {
  for (var i, r, l; e = e.__; )
    if ((i = e.__c) && !i.__)
      try {
        if ((r = i.constructor) && r.getDerivedStateFromError != null && (i.setState(r.getDerivedStateFromError(t)), l = i.__d), i.componentDidCatch != null && (i.componentDidCatch(t, o || {}), l = i.__d), l)
          return i.__E = i;
      } catch (c) {
        t = c;
      }
  throw t;
} }, Lp = 0, Ye.prototype.setState = function(t, e) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = Ue({}, this.state), typeof t == "function" && (t = t(Ue({}, n), this.props)), t && Ue(n, t), t != null && this.__v && (e && this._sb.push(e), $f(this));
}, Ye.prototype.forceUpdate = function(t) {
  this.__v && (this.__e = !0, t && this.__h.push(t), $f(this));
}, Ye.prototype.render = xa, Io = [], pi.__r = 0;
var R0 = 0;
function tt(t, e, n, o, i) {
  var r, l, c = {};
  for (l in e)
    l == "ref" ? r = e[l] : c[l] = e[l];
  var _ = { type: t, props: c, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: --R0, __source: i, __self: o };
  if (typeof t == "function" && (r = t.defaultProps))
    for (l in r)
      c[l] === void 0 && (c[l] = r[l]);
  return pt.vnode && pt.vnode(_), _;
}
let D0 = (t = 21) => crypto.getRandomValues(new Uint8Array(t)).reduce((e, n) => (n &= 63, n < 36 ? e += n.toString(36) : n < 62 ? e += (n - 26).toString(36).toUpperCase() : n > 62 ? e += "-" : e += "_", e), "");
var tl;
class N0 extends Ye {
  constructor() {
    super(...arguments);
    E(this, tl, (n) => {
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
      selections: c = [],
      onClick: _,
      children: h
    } = this.props;
    let s;
    return c.length ? s = /* @__PURE__ */ tt("div", { className: "picker-multi-selections", children: c.map((d, f) => /* @__PURE__ */ tt("div", { className: "picker-multi-selection", children: [
      d.text ?? d.value,
      /* @__PURE__ */ tt("div", { className: "picker-deselect-btn btn", onClick: g(this, tl), "data-idx": f, children: /* @__PURE__ */ tt("span", { className: "close" }) })
    ] })) }) : s = /* @__PURE__ */ tt("span", { className: "picker-select-placeholder", children: r }), /* @__PURE__ */ tt(
      "div",
      {
        className: F("picker-select picker-select-multi form-control", n, { disabled: i, focused: l }),
        style: o,
        onClick: _,
        children: [
          s,
          h,
          /* @__PURE__ */ tt("span", { class: "caret" })
        ]
      }
    );
  }
}
tl = new WeakMap();
var el;
class P0 extends Ye {
  constructor() {
    super(...arguments);
    E(this, el, (n) => {
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
      selections: c = [],
      onDeselect: _,
      onClick: h,
      children: s
    } = this.props, [d] = c, f = d ? /* @__PURE__ */ tt("span", { className: "picker-single-selection", children: d.text ?? d.value }) : /* @__PURE__ */ tt("span", { className: "picker-select-placeholder", children: r }), a = d && _ ? /* @__PURE__ */ tt("button", { type: "button", className: "btn picker-deselect-btn", onClick: g(this, el), children: /* @__PURE__ */ tt("span", { className: "close" }) }) : null;
    return /* @__PURE__ */ tt(
      "div",
      {
        className: F("picker-select picker-select-single form-control", n, { disabled: i, focused: l }),
        style: o,
        onClick: h,
        children: [
          f,
          s,
          a,
          /* @__PURE__ */ tt("span", { class: "caret" })
        ]
      }
    );
  }
}
el = new WeakMap();
var nl, Fp, Hr, ol, Wr, rl;
class O0 extends Ye {
  constructor() {
    super(...arguments);
    E(this, nl);
    M(this, "state", { keys: "", shown: !1 });
    E(this, Hr, (n) => {
      var o;
      (o = n.target) != null && o.closest(`#picker-menu-${this.props.id}`) || this.hide();
    });
    E(this, ol, ({ item: n }) => {
      const o = this.props.items.find((i) => i.value === n.key);
      o && this.props.onSelectItem(o);
    });
    E(this, Wr, (n) => {
      this.setState({ keys: n.target.value });
    });
    E(this, rl, () => {
      this.setState({ keys: "" });
    });
  }
  componentDidMount() {
    document.addEventListener("click", g(this, Hr)), this.show();
  }
  componentWillUnmount() {
    document.removeEventListener("click", g(this, Hr));
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
      maxWidth: c,
      width: _,
      menu: h,
      searchHint: s
    } = this.props, { shown: d, keys: f } = this.state, a = f.trim().length;
    return /* @__PURE__ */ tt("div", { className: F("picker-menu", i, { shown: d, "has-search": a }), id: `picker-menu-${n}`, style: { maxHeight: l, maxWidth: c, width: _, ...r }, children: [
      o ? /* @__PURE__ */ tt("div", { className: "picker-menu-search", children: [
        /* @__PURE__ */ tt("input", { className: "form-control picker-menu-search-input", type: "text", placeholder: s, value: f, onChange: g(this, Wr), onInput: g(this, Wr) }),
        a ? /* @__PURE__ */ tt("button", { type: "button", className: "btn picker-menu-search-clear", onClick: g(this, rl), children: /* @__PURE__ */ tt("span", { className: "close" }) }) : /* @__PURE__ */ tt("span", { className: "magnifier" })
      ] }) : null,
      /* @__PURE__ */ tt(ca, { className: "picker-menu-list", items: W(this, nl, Fp).call(this), onClickItem: g(this, ol), ...h })
    ] });
  }
}
nl = new WeakSet(), Fp = function() {
  const { selections: n, items: o } = this.props, i = new Set(n), r = this.state.keys.toLowerCase().split(" ").filter((l) => l.length);
  return o.reduce((l, c) => {
    const {
      value: _,
      keys: h,
      text: s,
      ...d
    } = c;
    if (!r.length || r.every((f) => _.toLowerCase().includes(f) || (h == null ? void 0 : h.toLowerCase().includes(f)) || typeof s == "string" && s.toLowerCase().includes(f))) {
      let f = s ?? _;
      typeof f == "string" && r.length && (f = /* @__PURE__ */ tt("span", { dangerouslySetInnerHTML: { __html: r.reduce((a, u) => a.replace(u, `<span class="picker-menu-item-match">${u}</span>`), f) } })), l.push({
        key: _,
        active: i.has(_),
        text: f,
        ...d
      });
    }
    return l;
  }, []);
}, Hr = new WeakMap(), ol = new WeakMap(), Wr = new WeakMap(), rl = new WeakMap();
function Cf(t) {
  const e = /* @__PURE__ */ new Set();
  return t.reduce((n, o) => (e.has(o) || (e.add(o), n.push(o)), n), []);
}
var Mc, Ir, Ur, Fr, Fn, Rs, Br, Vc, sl, Bp, il, jp, ll, cl, al, _l, fl, zp;
let H0 = (Mc = class extends Ye {
  constructor(n) {
    super(n);
    E(this, Fn);
    E(this, Br);
    E(this, sl);
    E(this, il);
    E(this, fl);
    E(this, Ir, 0);
    E(this, Ur, D0());
    E(this, Fr, E0());
    E(this, ll, (n, o) => {
      const { valueList: i } = this, r = new Set(n.map((c) => c.value)), l = i.filter((c) => !r.has(c));
      this.setState({ value: l.length ? l.join(this.props.valueSplitter ?? ",") : void 0 });
    });
    E(this, cl, (n) => {
      console.log("#handleSelectClick", n), this.setState({ open: !0 });
    });
    E(this, al, () => {
      this.close();
    });
    E(this, _l, (n) => {
      this.props.multi ? this.toggleValue(n.value) : this.setState({ value: n.value }, () => {
        var o;
        (o = g(this, Fr).current) == null || o.hide();
      });
    });
    this.state = {
      value: W(this, sl, Bp).call(this, n.defaultValue) ?? "",
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
    return W(this, Br, Vc).call(this, this.state.value);
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
      const i = ++za(this, Ir)._;
      if (await W(this, Fn, Rs).call(this, { loading: !0, items: [] }), n = await n(), g(this, Ir) !== i)
        return [];
    }
    const o = {};
    return Array.isArray(n) && this.state.items !== n && (o.items = n), this.state.loading && (o.loading = !1), Object.keys(o).length && await W(this, Fn, Rs).call(this, o), n;
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
    await W(this, Fn, Rs).call(this, { open: n }), n && this.loadItemList();
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
    } = this.props, l = r ? N0 : P0;
    return /* @__PURE__ */ tt("div", { className: F("picker", n), style: o, id: `picker-${g(this, Ur)}`, children: [
      /* @__PURE__ */ tt(l, { ...W(this, il, jp).call(this) }),
      i,
      this.state.open ? /* @__PURE__ */ tt(O0, { ...W(this, fl, zp).call(this), ref: g(this, Fr) }) : null
    ] });
  }
}, Ir = new WeakMap(), Ur = new WeakMap(), Fr = new WeakMap(), Fn = new WeakSet(), Rs = function(n) {
  return new Promise((o) => {
    this.setState(n, o);
  });
}, Br = new WeakSet(), Vc = function(n) {
  return typeof n == "string" ? Cf(n.split(this.props.valueSplitter ?? ",")) : Array.isArray(n) ? Cf(n) : [];
}, sl = new WeakSet(), Bp = function(n) {
  const o = W(this, Br, Vc).call(this, n);
  return o.length ? o.join(this.props.valueSplitter ?? ",") : void 0;
}, il = new WeakSet(), jp = function() {
  const { placeholder: n, disabled: o } = this.props, { open: i } = this.state;
  return {
    focused: i,
    placeholder: n,
    disabled: o,
    selections: this.getSelections(),
    onClick: g(this, cl),
    onDeselect: g(this, ll)
  };
}, ll = new WeakMap(), cl = new WeakMap(), al = new WeakMap(), _l = new WeakMap(), fl = new WeakSet(), zp = function() {
  const { search: n, menuClass: o, menuWidth: i, menuStyle: r, menuMaxHeight: l, menuMaxWidth: c } = this.props, { items: _ } = this.state;
  return {
    id: g(this, Ur),
    items: _,
    selections: this.valueList,
    search: n === !0 || typeof n == "number" && n <= _.length,
    style: r,
    className: o,
    width: i,
    maxHeight: l,
    maxWidth: c,
    onRequestHide: g(this, al),
    onSelectItem: g(this, _l)
  };
}, M(Mc, "defaultProps", {
  container: "body",
  valueSplitter: ",",
  search: !0,
  menuWidth: "auto",
  menuMaxHeight: 400
}), Mc);
class Ef extends xt {
}
M(Ef, "NAME", "picker"), M(Ef, "Component", H0);
var cc, st, Vp, Uo, Tf, gi = {}, Yp = [], W0 = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function Fe(t, e) {
  for (var n in e)
    t[n] = e[n];
  return t;
}
function qp(t) {
  var e = t.parentNode;
  e && e.removeChild(t);
}
function Gp(t, e, n) {
  var o, i, r, l = {};
  for (r in e)
    r == "key" ? o = e[r] : r == "ref" ? i = e[r] : l[r] = e[r];
  if (arguments.length > 2 && (l.children = arguments.length > 3 ? cc.call(arguments, 2) : n), typeof t == "function" && t.defaultProps != null)
    for (r in t.defaultProps)
      l[r] === void 0 && (l[r] = t.defaultProps[r]);
  return Ds(t, l, o, i, null);
}
function Ds(t, e, n, o, i) {
  var r = { type: t, props: e, key: n, ref: o, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: i ?? ++Vp };
  return i == null && st.vnode != null && st.vnode(r), r;
}
function hs() {
  return { current: null };
}
function ac(t) {
  return t.children;
}
function Fo(t, e) {
  this.props = t, this.context = e;
}
function mr(t, e) {
  if (e == null)
    return t.__ ? mr(t.__, t.__.__k.indexOf(t) + 1) : null;
  for (var n; e < t.__k.length; e++)
    if ((n = t.__k[e]) != null && n.__e != null)
      return n.__e;
  return typeof t.type == "function" ? mr(t) : null;
}
function Xp(t) {
  var e, n;
  if ((t = t.__) != null && t.__c != null) {
    for (t.__e = t.__c.base = null, e = 0; e < t.__k.length; e++)
      if ((n = t.__k[e]) != null && n.__e != null) {
        t.__e = t.__c.base = n.__e;
        break;
      }
    return Xp(t);
  }
}
function Af(t) {
  (!t.__d && (t.__d = !0) && Uo.push(t) && !yi.__r++ || Tf !== st.debounceRendering) && ((Tf = st.debounceRendering) || setTimeout)(yi);
}
function yi() {
  for (var t; yi.__r = Uo.length; )
    t = Uo.sort(function(e, n) {
      return e.__v.__b - n.__v.__b;
    }), Uo = [], t.some(function(e) {
      var n, o, i, r, l, c;
      e.__d && (l = (r = (n = e).__v).__e, (c = n.__P) && (o = [], (i = Fe({}, r)).__v = r.__v + 1, Sa(c, r, i, n.__n, c.ownerSVGElement !== void 0, r.__h != null ? [l] : null, o, l ?? mr(r), r.__h), Qp(o, r), r.__e != l && Xp(r)));
    });
}
function Kp(t, e, n, o, i, r, l, c, _, h) {
  var s, d, f, a, u, b, p, m = o && o.__k || Yp, y = m.length;
  for (n.__k = [], s = 0; s < e.length; s++)
    if ((a = n.__k[s] = (a = e[s]) == null || typeof a == "boolean" ? null : typeof a == "string" || typeof a == "number" || typeof a == "bigint" ? Ds(null, a, null, null, a) : Array.isArray(a) ? Ds(ac, { children: a }, null, null, null) : a.__b > 0 ? Ds(a.type, a.props, a.key, a.ref ? a.ref : null, a.__v) : a) != null) {
      if (a.__ = n, a.__b = n.__b + 1, (f = m[s]) === null || f && a.key == f.key && a.type === f.type)
        m[s] = void 0;
      else
        for (d = 0; d < y; d++) {
          if ((f = m[d]) && a.key == f.key && a.type === f.type) {
            m[d] = void 0;
            break;
          }
          f = null;
        }
      Sa(t, a, f = f || gi, i, r, l, c, _, h), u = a.__e, (d = a.ref) && f.ref != d && (p || (p = []), f.ref && p.push(f.ref, null, a), p.push(d, a.__c || u, a)), u != null ? (b == null && (b = u), typeof a.type == "function" && a.__k === f.__k ? a.__d = _ = Jp(a, _, t) : _ = Zp(t, a, f, m, u, _), typeof n.type == "function" && (n.__d = _)) : _ && f.__e == _ && _.parentNode != t && (_ = mr(f));
    }
  for (n.__e = b, s = y; s--; )
    m[s] != null && em(m[s], m[s]);
  if (p)
    for (s = 0; s < p.length; s++)
      tm(p[s], p[++s], p[++s]);
}
function Jp(t, e, n) {
  for (var o, i = t.__k, r = 0; i && r < i.length; r++)
    (o = i[r]) && (o.__ = t, e = typeof o.type == "function" ? Jp(o, e, n) : Zp(n, o, o, i, o.__e, e));
  return e;
}
function Zp(t, e, n, o, i, r) {
  var l, c, _;
  if (e.__d !== void 0)
    l = e.__d, e.__d = void 0;
  else if (n == null || i != r || i.parentNode == null)
    t:
      if (r == null || r.parentNode !== t)
        t.appendChild(i), l = null;
      else {
        for (c = r, _ = 0; (c = c.nextSibling) && _ < o.length; _ += 2)
          if (c == i)
            break t;
        t.insertBefore(i, r), l = r;
      }
  return l !== void 0 ? l : i.nextSibling;
}
function I0(t, e, n, o, i) {
  var r;
  for (r in n)
    r === "children" || r === "key" || r in e || vi(t, r, null, n[r], o);
  for (r in e)
    i && typeof e[r] != "function" || r === "children" || r === "key" || r === "value" || r === "checked" || n[r] === e[r] || vi(t, r, e[r], n[r], o);
}
function Lf(t, e, n) {
  e[0] === "-" ? t.setProperty(e, n) : t[e] = n == null ? "" : typeof n != "number" || W0.test(e) ? n : n + "px";
}
function vi(t, e, n, o, i) {
  var r;
  t:
    if (e === "style")
      if (typeof n == "string")
        t.style.cssText = n;
      else {
        if (typeof o == "string" && (t.style.cssText = o = ""), o)
          for (e in o)
            n && e in n || Lf(t.style, e, "");
        if (n)
          for (e in n)
            o && n[e] === o[e] || Lf(t.style, e, n[e]);
      }
    else if (e[0] === "o" && e[1] === "n")
      r = e !== (e = e.replace(/Capture$/, "")), e = e.toLowerCase() in t ? e.toLowerCase().slice(2) : e.slice(2), t.l || (t.l = {}), t.l[e + r] = n, n ? o || t.addEventListener(e, r ? Rf : Mf, r) : t.removeEventListener(e, r ? Rf : Mf, r);
    else if (e !== "dangerouslySetInnerHTML") {
      if (i)
        e = e.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
      else if (e !== "href" && e !== "list" && e !== "form" && e !== "tabIndex" && e !== "download" && e in t)
        try {
          t[e] = n ?? "";
          break t;
        } catch {
        }
      typeof n == "function" || (n == null || n === !1 && e.indexOf("-") == -1 ? t.removeAttribute(e) : t.setAttribute(e, n));
    }
}
function Mf(t) {
  this.l[t.type + !1](st.event ? st.event(t) : t);
}
function Rf(t) {
  this.l[t.type + !0](st.event ? st.event(t) : t);
}
function Sa(t, e, n, o, i, r, l, c, _) {
  var h, s, d, f, a, u, b, p, m, y, w, k, C, A, T, v = e.type;
  if (e.constructor !== void 0)
    return null;
  n.__h != null && (_ = n.__h, c = e.__e = n.__e, e.__h = null, r = [c]), (h = st.__b) && h(e);
  try {
    t:
      if (typeof v == "function") {
        if (p = e.props, m = (h = v.contextType) && o[h.__c], y = h ? m ? m.props.value : h.__ : o, n.__c ? b = (s = e.__c = n.__c).__ = s.__E : ("prototype" in v && v.prototype.render ? e.__c = s = new v(p, y) : (e.__c = s = new Fo(p, y), s.constructor = v, s.render = F0), m && m.sub(s), s.props = p, s.state || (s.state = {}), s.context = y, s.__n = o, d = s.__d = !0, s.__h = [], s._sb = []), s.__s == null && (s.__s = s.state), v.getDerivedStateFromProps != null && (s.__s == s.state && (s.__s = Fe({}, s.__s)), Fe(s.__s, v.getDerivedStateFromProps(p, s.__s))), f = s.props, a = s.state, d)
          v.getDerivedStateFromProps == null && s.componentWillMount != null && s.componentWillMount(), s.componentDidMount != null && s.__h.push(s.componentDidMount);
        else {
          if (v.getDerivedStateFromProps == null && p !== f && s.componentWillReceiveProps != null && s.componentWillReceiveProps(p, y), !s.__e && s.shouldComponentUpdate != null && s.shouldComponentUpdate(p, s.__s, y) === !1 || e.__v === n.__v) {
            for (s.props = p, s.state = s.__s, e.__v !== n.__v && (s.__d = !1), s.__v = e, e.__e = n.__e, e.__k = n.__k, e.__k.forEach(function(x) {
              x && (x.__ = e);
            }), w = 0; w < s._sb.length; w++)
              s.__h.push(s._sb[w]);
            s._sb = [], s.__h.length && l.push(s);
            break t;
          }
          s.componentWillUpdate != null && s.componentWillUpdate(p, s.__s, y), s.componentDidUpdate != null && s.__h.push(function() {
            s.componentDidUpdate(f, a, u);
          });
        }
        if (s.context = y, s.props = p, s.__v = e, s.__P = t, k = st.__r, C = 0, "prototype" in v && v.prototype.render) {
          for (s.state = s.__s, s.__d = !1, k && k(e), h = s.render(s.props, s.state, s.context), A = 0; A < s._sb.length; A++)
            s.__h.push(s._sb[A]);
          s._sb = [];
        } else
          do
            s.__d = !1, k && k(e), h = s.render(s.props, s.state, s.context), s.state = s.__s;
          while (s.__d && ++C < 25);
        s.state = s.__s, s.getChildContext != null && (o = Fe(Fe({}, o), s.getChildContext())), d || s.getSnapshotBeforeUpdate == null || (u = s.getSnapshotBeforeUpdate(f, a)), T = h != null && h.type === ac && h.key == null ? h.props.children : h, Kp(t, Array.isArray(T) ? T : [T], e, n, o, i, r, l, c, _), s.base = e.__e, e.__h = null, s.__h.length && l.push(s), b && (s.__E = s.__ = null), s.__e = !1;
      } else
        r == null && e.__v === n.__v ? (e.__k = n.__k, e.__e = n.__e) : e.__e = U0(n.__e, e, n, o, i, r, l, _);
    (h = st.diffed) && h(e);
  } catch (x) {
    e.__v = null, (_ || r != null) && (e.__e = c, e.__h = !!_, r[r.indexOf(c)] = null), st.__e(x, e, n);
  }
}
function Qp(t, e) {
  st.__c && st.__c(e, t), t.some(function(n) {
    try {
      t = n.__h, n.__h = [], t.some(function(o) {
        o.call(n);
      });
    } catch (o) {
      st.__e(o, n.__v);
    }
  });
}
function U0(t, e, n, o, i, r, l, c) {
  var _, h, s, d = n.props, f = e.props, a = e.type, u = 0;
  if (a === "svg" && (i = !0), r != null) {
    for (; u < r.length; u++)
      if ((_ = r[u]) && "setAttribute" in _ == !!a && (a ? _.localName === a : _.nodeType === 3)) {
        t = _, r[u] = null;
        break;
      }
  }
  if (t == null) {
    if (a === null)
      return document.createTextNode(f);
    t = i ? document.createElementNS("http://www.w3.org/2000/svg", a) : document.createElement(a, f.is && f), r = null, c = !1;
  }
  if (a === null)
    d === f || c && t.data === f || (t.data = f);
  else {
    if (r = r && cc.call(t.childNodes), h = (d = n.props || gi).dangerouslySetInnerHTML, s = f.dangerouslySetInnerHTML, !c) {
      if (r != null)
        for (d = {}, u = 0; u < t.attributes.length; u++)
          d[t.attributes[u].name] = t.attributes[u].value;
      (s || h) && (s && (h && s.__html == h.__html || s.__html === t.innerHTML) || (t.innerHTML = s && s.__html || ""));
    }
    if (I0(t, f, d, i, c), s)
      e.__k = [];
    else if (u = e.props.children, Kp(t, Array.isArray(u) ? u : [u], e, n, o, i && a !== "foreignObject", r, l, r ? r[0] : n.__k && mr(n, 0), c), r != null)
      for (u = r.length; u--; )
        r[u] != null && qp(r[u]);
    c || ("value" in f && (u = f.value) !== void 0 && (u !== t.value || a === "progress" && !u || a === "option" && u !== d.value) && vi(t, "value", u, d.value, !1), "checked" in f && (u = f.checked) !== void 0 && u !== t.checked && vi(t, "checked", u, d.checked, !1));
  }
  return t;
}
function tm(t, e, n) {
  try {
    typeof t == "function" ? t(e) : t.current = e;
  } catch (o) {
    st.__e(o, n);
  }
}
function em(t, e, n) {
  var o, i;
  if (st.unmount && st.unmount(t), (o = t.ref) && (o.current && o.current !== t.__e || tm(o, null, e)), (o = t.__c) != null) {
    if (o.componentWillUnmount)
      try {
        o.componentWillUnmount();
      } catch (r) {
        st.__e(r, e);
      }
    o.base = o.__P = null, t.__c = void 0;
  }
  if (o = t.__k)
    for (i = 0; i < o.length; i++)
      o[i] && em(o[i], e, n || typeof t.type != "function");
  n || t.__e == null || qp(t.__e), t.__ = t.__e = t.__d = void 0;
}
function F0(t, e, n) {
  return this.constructor(t, n);
}
function B0(t, e, n) {
  var o, i, r;
  st.__ && st.__(t, e), i = (o = typeof n == "function") ? null : n && n.__k || e.__k, r = [], Sa(e, t = (!o && n || e).__k = Gp(ac, null, [t]), i || gi, gi, e.ownerSVGElement !== void 0, !o && n ? [n] : i ? null : e.firstChild ? cc.call(e.childNodes) : null, r, !o && n ? n : i ? i.__e : e.firstChild, o), Qp(r, t);
}
cc = Yp.slice, st = { __e: function(t, e, n, o) {
  for (var i, r, l; e = e.__; )
    if ((i = e.__c) && !i.__)
      try {
        if ((r = i.constructor) && r.getDerivedStateFromError != null && (i.setState(r.getDerivedStateFromError(t)), l = i.__d), i.componentDidCatch != null && (i.componentDidCatch(t, o || {}), l = i.__d), l)
          return i.__E = i;
      } catch (c) {
        t = c;
      }
  throw t;
} }, Vp = 0, Fo.prototype.setState = function(t, e) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = Fe({}, this.state), typeof t == "function" && (t = t(Fe({}, n), this.props)), t && Fe(n, t), t != null && this.__v && (e && this._sb.push(e), Af(this));
}, Fo.prototype.forceUpdate = function(t) {
  this.__v && (this.__e = !0, t && this.__h.push(t), Af(this));
}, Fo.prototype.render = ac, Uo = [], yi.__r = 0;
var j0 = 0;
function Pt(t, e, n, o, i) {
  var r, l, c = {};
  for (l in e)
    l == "ref" ? r = e[l] : c[l] = e[l];
  var _ = { type: t, props: c, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: --j0, __source: i, __self: o };
  if (typeof t == "function" && (r = t.defaultProps))
    for (l in r)
      c[l] === void 0 && (c[l] = r[l]);
  return st.vnode && st.vnode(_), _;
}
var bi = {}, z0 = {
  get exports() {
    return bi;
  },
  set exports(t) {
    bi = t;
  }
};
(function(t, e) {
  (function(n, o) {
    t.exports = o();
  })(Xd, function() {
    var n = 1e3, o = 6e4, i = 36e5, r = "millisecond", l = "second", c = "minute", _ = "hour", h = "day", s = "week", d = "month", f = "quarter", a = "year", u = "date", b = "Invalid Date", p = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, m = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, y = { name: "en", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), ordinal: function(D) {
      var S = ["th", "st", "nd", "rd"], $ = D % 100;
      return "[" + D + (S[($ - 20) % 10] || S[$] || S[0]) + "]";
    } }, w = function(D, S, $) {
      var N = String(D);
      return !N || N.length >= S ? D : "" + Array(S + 1 - N.length).join($) + D;
    }, k = { s: w, z: function(D) {
      var S = -D.utcOffset(), $ = Math.abs(S), N = Math.floor($ / 60), L = $ % 60;
      return (S <= 0 ? "+" : "-") + w(N, 2, "0") + ":" + w(L, 2, "0");
    }, m: function D(S, $) {
      if (S.date() < $.date())
        return -D($, S);
      var N = 12 * ($.year() - S.year()) + ($.month() - S.month()), L = S.clone().add(N, d), O = $ - L < 0, P = S.clone().add(N + (O ? -1 : 1), d);
      return +(-(N + ($ - L) / (O ? L - P : P - L)) || 0);
    }, a: function(D) {
      return D < 0 ? Math.ceil(D) || 0 : Math.floor(D);
    }, p: function(D) {
      return { M: d, y: a, w: s, d: h, D: u, h: _, m: c, s: l, ms: r, Q: f }[D] || String(D || "").toLowerCase().replace(/s$/, "");
    }, u: function(D) {
      return D === void 0;
    } }, C = "en", A = {};
    A[C] = y;
    var T = function(D) {
      return D instanceof V;
    }, v = function D(S, $, N) {
      var L;
      if (!S)
        return C;
      if (typeof S == "string") {
        var O = S.toLowerCase();
        A[O] && (L = O), $ && (A[O] = $, L = O);
        var P = S.split("-");
        if (!L && P.length > 1)
          return D(P[0]);
      } else {
        var I = S.name;
        A[I] = S, L = I;
      }
      return !N && L && (C = L), L || !N && C;
    }, x = function(D, S) {
      if (T(D))
        return D.clone();
      var $ = typeof S == "object" ? S : {};
      return $.date = D, $.args = arguments, new V($);
    }, R = k;
    R.l = v, R.i = T, R.w = function(D, S) {
      return x(D, { locale: S.$L, utc: S.$u, x: S.$x, $offset: S.$offset });
    };
    var V = function() {
      function D($) {
        this.$L = v($.locale, null, !0), this.parse($);
      }
      var S = D.prototype;
      return S.parse = function($) {
        this.$d = function(N) {
          var L = N.date, O = N.utc;
          if (L === null)
            return new Date(NaN);
          if (R.u(L))
            return new Date();
          if (L instanceof Date)
            return new Date(L);
          if (typeof L == "string" && !/Z$/i.test(L)) {
            var P = L.match(p);
            if (P) {
              var I = P[2] - 1 || 0, z = (P[7] || "0").substring(0, 3);
              return O ? new Date(Date.UTC(P[1], I, P[3] || 1, P[4] || 0, P[5] || 0, P[6] || 0, z)) : new Date(P[1], I, P[3] || 1, P[4] || 0, P[5] || 0, P[6] || 0, z);
            }
          }
          return new Date(L);
        }($), this.$x = $.x || {}, this.init();
      }, S.init = function() {
        var $ = this.$d;
        this.$y = $.getFullYear(), this.$M = $.getMonth(), this.$D = $.getDate(), this.$W = $.getDay(), this.$H = $.getHours(), this.$m = $.getMinutes(), this.$s = $.getSeconds(), this.$ms = $.getMilliseconds();
      }, S.$utils = function() {
        return R;
      }, S.isValid = function() {
        return this.$d.toString() !== b;
      }, S.isSame = function($, N) {
        var L = x($);
        return this.startOf(N) <= L && L <= this.endOf(N);
      }, S.isAfter = function($, N) {
        return x($) < this.startOf(N);
      }, S.isBefore = function($, N) {
        return this.endOf(N) < x($);
      }, S.$g = function($, N, L) {
        return R.u($) ? this[N] : this.set(L, $);
      }, S.unix = function() {
        return Math.floor(this.valueOf() / 1e3);
      }, S.valueOf = function() {
        return this.$d.getTime();
      }, S.startOf = function($, N) {
        var L = this, O = !!R.u(N) || N, P = R.p($), I = function(it, q) {
          var lt = R.w(L.$u ? Date.UTC(L.$y, q, it) : new Date(L.$y, q, it), L);
          return O ? lt : lt.endOf(h);
        }, z = function(it, q) {
          return R.w(L.toDate()[it].apply(L.toDate("s"), (O ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(q)), L);
        }, j = this.$W, X = this.$M, bt = this.$D, U = "set" + (this.$u ? "UTC" : "");
        switch (P) {
          case a:
            return O ? I(1, 0) : I(31, 11);
          case d:
            return O ? I(1, X) : I(0, X + 1);
          case s:
            var K = this.$locale().weekStart || 0, vt = (j < K ? j + 7 : j) - K;
            return I(O ? bt - vt : bt + (6 - vt), X);
          case h:
          case u:
            return z(U + "Hours", 0);
          case _:
            return z(U + "Minutes", 1);
          case c:
            return z(U + "Seconds", 2);
          case l:
            return z(U + "Milliseconds", 3);
          default:
            return this.clone();
        }
      }, S.endOf = function($) {
        return this.startOf($, !1);
      }, S.$set = function($, N) {
        var L, O = R.p($), P = "set" + (this.$u ? "UTC" : ""), I = (L = {}, L[h] = P + "Date", L[u] = P + "Date", L[d] = P + "Month", L[a] = P + "FullYear", L[_] = P + "Hours", L[c] = P + "Minutes", L[l] = P + "Seconds", L[r] = P + "Milliseconds", L)[O], z = O === h ? this.$D + (N - this.$W) : N;
        if (O === d || O === a) {
          var j = this.clone().set(u, 1);
          j.$d[I](z), j.init(), this.$d = j.set(u, Math.min(this.$D, j.daysInMonth())).$d;
        } else
          I && this.$d[I](z);
        return this.init(), this;
      }, S.set = function($, N) {
        return this.clone().$set($, N);
      }, S.get = function($) {
        return this[R.p($)]();
      }, S.add = function($, N) {
        var L, O = this;
        $ = Number($);
        var P = R.p(N), I = function(X) {
          var bt = x(O);
          return R.w(bt.date(bt.date() + Math.round(X * $)), O);
        };
        if (P === d)
          return this.set(d, this.$M + $);
        if (P === a)
          return this.set(a, this.$y + $);
        if (P === h)
          return I(1);
        if (P === s)
          return I(7);
        var z = (L = {}, L[c] = o, L[_] = i, L[l] = n, L)[P] || 1, j = this.$d.getTime() + $ * z;
        return R.w(j, this);
      }, S.subtract = function($, N) {
        return this.add(-1 * $, N);
      }, S.format = function($) {
        var N = this, L = this.$locale();
        if (!this.isValid())
          return L.invalidDate || b;
        var O = $ || "YYYY-MM-DDTHH:mm:ssZ", P = R.z(this), I = this.$H, z = this.$m, j = this.$M, X = L.weekdays, bt = L.months, U = function(q, lt, At, Lt) {
          return q && (q[lt] || q(N, O)) || At[lt].slice(0, Lt);
        }, K = function(q) {
          return R.s(I % 12 || 12, q, "0");
        }, vt = L.meridiem || function(q, lt, At) {
          var Lt = q < 12 ? "AM" : "PM";
          return At ? Lt.toLowerCase() : Lt;
        }, it = { YY: String(this.$y).slice(-2), YYYY: this.$y, M: j + 1, MM: R.s(j + 1, 2, "0"), MMM: U(L.monthsShort, j, bt, 3), MMMM: U(bt, j), D: this.$D, DD: R.s(this.$D, 2, "0"), d: String(this.$W), dd: U(L.weekdaysMin, this.$W, X, 2), ddd: U(L.weekdaysShort, this.$W, X, 3), dddd: X[this.$W], H: String(I), HH: R.s(I, 2, "0"), h: K(1), hh: K(2), a: vt(I, z, !0), A: vt(I, z, !1), m: String(z), mm: R.s(z, 2, "0"), s: String(this.$s), ss: R.s(this.$s, 2, "0"), SSS: R.s(this.$ms, 3, "0"), Z: P };
        return O.replace(m, function(q, lt) {
          return lt || it[q] || P.replace(":", "");
        });
      }, S.utcOffset = function() {
        return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
      }, S.diff = function($, N, L) {
        var O, P = R.p(N), I = x($), z = (I.utcOffset() - this.utcOffset()) * o, j = this - I, X = R.m(this, I);
        return X = (O = {}, O[a] = X / 12, O[d] = X, O[f] = X / 3, O[s] = (j - z) / 6048e5, O[h] = (j - z) / 864e5, O[_] = j / i, O[c] = j / o, O[l] = j / n, O)[P] || j, L ? X : R.a(X);
      }, S.daysInMonth = function() {
        return this.endOf(d).$D;
      }, S.$locale = function() {
        return A[this.$L];
      }, S.locale = function($, N) {
        if (!$)
          return this.$L;
        var L = this.clone(), O = v($, N, !0);
        return O && (L.$L = O), L;
      }, S.clone = function() {
        return R.w(this.$d, this);
      }, S.toDate = function() {
        return new Date(this.valueOf());
      }, S.toJSON = function() {
        return this.isValid() ? this.toISOString() : null;
      }, S.toISOString = function() {
        return this.$d.toISOString();
      }, S.toString = function() {
        return this.$d.toUTCString();
      }, D;
    }(), B = V.prototype;
    return x.prototype = B, [["$ms", r], ["$s", l], ["$m", c], ["$H", _], ["$W", h], ["$M", d], ["$y", a], ["$D", u]].forEach(function(D) {
      B[D[1]] = function(S) {
        return this.$g(S, D[0], D[1]);
      };
    }), x.extend = function(D, S) {
      return D.$i || (D(S, V, x), D.$i = !0), x;
    }, x.locale = v, x.isDayjs = T, x.unix = function(D) {
      return x(1e3 * D);
    }, x.en = A[C], x.Ls = A, x.p = {}, x;
  });
})(z0);
const V0 = (t = "00:00:00") => {
  const e = bi(`1989-01-01 ${t}`);
  return {
    hour: e.hour(),
    minute: e.minute(),
    second: e.second()
  };
};
function Y0() {
  let t = new Array(24).fill(0), e = new Array(60).fill(0), n = new Array(60).fill(0);
  return t = t.map((o, i) => o + i), e = e.map((o, i) => o + i), n = n.map((o, i) => o + i), { hourList: t, minuteList: e, secondList: n };
}
class q0 extends Fo {
  constructor() {
    super(...arguments);
    M(this, "cellHeight", 24);
    M(this, "ref", hs());
    M(this, "hourRef", hs());
    M(this, "minuteRef", hs());
    M(this, "secondRef", hs());
    M(this, "state", {
      selectTime: this.props.value || "00:00:00"
    });
  }
  handleMoveTime(n) {
    var i, r, l;
    const o = "smooth";
    n.hour && this.hourRef.current && ((i = this.hourRef.current) == null || i.scrollTo({ behavior: o, top: n.hour * this.cellHeight })), n.minute && this.minuteRef.current && ((r = this.minuteRef.current) == null || r.scrollTo({ behavior: o, top: n.minute * this.cellHeight })), n.second && this.secondRef.current && ((l = this.secondRef.current) == null || l.scrollTo({ behavior: o, top: n.second * this.cellHeight }));
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
  renderColumn(n, o) {
    const i = V0(this.state.selectTime);
    return o.map((r) => {
      const l = i[n] === r, c = { ...i, [n]: r };
      return /* @__PURE__ */ Pt(
        "button",
        {
          className: F("btn", "size-sm", "ghost", "flex", { active: l }),
          type: "button",
          onClick: () => this.handleChange(c),
          children: this.addZero(r)
        },
        `unit-${n}-${r}`
      );
    });
  }
  onSubmit() {
    console.log(this.state.selectTime), this.props.onChange && this.props.onChange(this.state.selectTime);
  }
  onClear() {
    this.setState({ selectTime: "" }), this.props.onChange && this.props.onChange("");
  }
  render() {
    const { showSeconds: n, style: o } = this.props, { hourList: i, minuteList: r, secondList: l } = Y0();
    return /* @__PURE__ */ Pt("div", { className: F("timepicker-timepanel", "pt-px"), style: o, ref: this.ref, children: [
      /* @__PURE__ */ Pt("div", { className: F("flex", " justify-around", "p-px", "not-hide-timepicker"), children: [
        /* @__PURE__ */ Pt("div", { className: "overflow-hidden", children: /* @__PURE__ */ Pt("div", { className: "timepicker-timepanel-select-col", ref: this.hourRef, children: this.renderColumn("hour", i) }) }),
        /* @__PURE__ */ Pt("div", { className: "overflow-hidden", children: /* @__PURE__ */ Pt("div", { className: "timepicker-timepanel-select-col", ref: this.minuteRef, children: this.renderColumn("minute", r) }) }),
        n && /* @__PURE__ */ Pt("div", { className: "overflow-hidden", children: /* @__PURE__ */ Pt("div", { className: "timepicker-timepanel-select-col", ref: this.secondRef, children: this.renderColumn("second", l) }) })
      ] }),
      /* @__PURE__ */ Pt("div", { className: F("timepicker-timepanel-actions", "flex", "p-px", "justify-between", "align-center"), children: [
        /* @__PURE__ */ Pt("button", { className: F("btn", "size-sm", "ghost", "text-primary"), type: "button", onClick: this.onClear.bind(this), children: "清除" }),
        /* @__PURE__ */ Pt("button", { className: F("btn", "size-sm", "ghost", "text-primary"), type: "button", onClick: this.onSubmit.bind(this), children: "确认" })
      ] })
    ] });
  }
}
function is(t) {
  return t.split("-")[1];
}
function Ca(t) {
  return t === "y" ? "height" : "width";
}
function eo(t) {
  return t.split("-")[0];
}
function _c(t) {
  return ["top", "bottom"].includes(eo(t)) ? "x" : "y";
}
function Df(t, e, n) {
  let {
    reference: o,
    floating: i
  } = t;
  const r = o.x + o.width / 2 - i.width / 2, l = o.y + o.height / 2 - i.height / 2, c = _c(e), _ = Ca(c), h = o[_] / 2 - i[_] / 2, s = eo(e), d = c === "x";
  let f;
  switch (s) {
    case "top":
      f = {
        x: r,
        y: o.y - i.height
      };
      break;
    case "bottom":
      f = {
        x: r,
        y: o.y + o.height
      };
      break;
    case "right":
      f = {
        x: o.x + o.width,
        y: l
      };
      break;
    case "left":
      f = {
        x: o.x - i.width,
        y: l
      };
      break;
    default:
      f = {
        x: o.x,
        y: o.y
      };
  }
  switch (is(e)) {
    case "start":
      f[c] -= h * (n && d ? -1 : 1);
      break;
    case "end":
      f[c] += h * (n && d ? -1 : 1);
      break;
  }
  return f;
}
const G0 = async (t, e, n) => {
  const {
    placement: o = "bottom",
    strategy: i = "absolute",
    middleware: r = [],
    platform: l
  } = n, c = r.filter(Boolean), _ = await (l.isRTL == null ? void 0 : l.isRTL(e));
  let h = await l.getElementRects({
    reference: t,
    floating: e,
    strategy: i
  }), {
    x: s,
    y: d
  } = Df(h, o, _), f = o, a = {}, u = 0;
  for (let b = 0; b < c.length; b++) {
    const {
      name: p,
      fn: m
    } = c[b], {
      x: y,
      y: w,
      data: k,
      reset: C
    } = await m({
      x: s,
      y: d,
      initialPlacement: o,
      placement: f,
      strategy: i,
      middlewareData: a,
      rects: h,
      platform: l,
      elements: {
        reference: t,
        floating: e
      }
    });
    if (s = y ?? s, d = w ?? d, a = {
      ...a,
      [p]: {
        ...a[p],
        ...k
      }
    }, C && u <= 50) {
      u++, typeof C == "object" && (C.placement && (f = C.placement), C.rects && (h = C.rects === !0 ? await l.getElementRects({
        reference: t,
        floating: e,
        strategy: i
      }) : C.rects), {
        x: s,
        y: d
      } = Df(h, f, _)), b = -1;
      continue;
    }
  }
  return {
    x: s,
    y: d,
    placement: f,
    strategy: i,
    middlewareData: a
  };
};
function X0(t) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...t
  };
}
function nm(t) {
  return typeof t != "number" ? X0(t) : {
    top: t,
    right: t,
    bottom: t,
    left: t
  };
}
function wi(t) {
  return {
    ...t,
    top: t.y,
    left: t.x,
    right: t.x + t.width,
    bottom: t.y + t.height
  };
}
async function K0(t, e) {
  var n;
  e === void 0 && (e = {});
  const {
    x: o,
    y: i,
    platform: r,
    rects: l,
    elements: c,
    strategy: _
  } = t, {
    boundary: h = "clippingAncestors",
    rootBoundary: s = "viewport",
    elementContext: d = "floating",
    altBoundary: f = !1,
    padding: a = 0
  } = e, u = nm(a), p = c[f ? d === "floating" ? "reference" : "floating" : d], m = wi(await r.getClippingRect({
    element: (n = await (r.isElement == null ? void 0 : r.isElement(p))) == null || n ? p : p.contextElement || await (r.getDocumentElement == null ? void 0 : r.getDocumentElement(c.floating)),
    boundary: h,
    rootBoundary: s,
    strategy: _
  })), y = d === "floating" ? {
    ...l.floating,
    x: o,
    y: i
  } : l.reference, w = await (r.getOffsetParent == null ? void 0 : r.getOffsetParent(c.floating)), k = await (r.isElement == null ? void 0 : r.isElement(w)) ? await (r.getScale == null ? void 0 : r.getScale(w)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, C = wi(r.convertOffsetParentRelativeRectToViewportRelativeRect ? await r.convertOffsetParentRelativeRectToViewportRelativeRect({
    rect: y,
    offsetParent: w,
    strategy: _
  }) : y);
  return {
    top: (m.top - C.top + u.top) / k.y,
    bottom: (C.bottom - m.bottom + u.bottom) / k.y,
    left: (m.left - C.left + u.left) / k.x,
    right: (C.right - m.right + u.right) / k.x
  };
}
const J0 = Math.min, Z0 = Math.max;
function Q0(t, e, n) {
  return Z0(t, J0(e, n));
}
const tw = (t) => ({
  name: "arrow",
  options: t,
  async fn(e) {
    const {
      element: n,
      padding: o = 0
    } = t || {}, {
      x: i,
      y: r,
      placement: l,
      rects: c,
      platform: _
    } = e;
    if (n == null)
      return {};
    const h = nm(o), s = {
      x: i,
      y: r
    }, d = _c(l), f = Ca(d), a = await _.getDimensions(n), u = d === "y" ? "top" : "left", b = d === "y" ? "bottom" : "right", p = c.reference[f] + c.reference[d] - s[d] - c.floating[f], m = s[d] - c.reference[d], y = await (_.getOffsetParent == null ? void 0 : _.getOffsetParent(n));
    let w = y ? d === "y" ? y.clientHeight || 0 : y.clientWidth || 0 : 0;
    w === 0 && (w = c.floating[f]);
    const k = p / 2 - m / 2, C = h[u], A = w - a[f] - h[b], T = w / 2 - a[f] / 2 + k, v = Q0(C, T, A), R = is(l) != null && T != v && c.reference[f] / 2 - (T < C ? h[u] : h[b]) - a[f] / 2 < 0 ? T < C ? C - T : A - T : 0;
    return {
      [d]: s[d] - R,
      data: {
        [d]: v,
        centerOffset: T - v
      }
    };
  }
}), ew = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function $i(t) {
  return t.replace(/left|right|bottom|top/g, (e) => ew[e]);
}
function nw(t, e, n) {
  n === void 0 && (n = !1);
  const o = is(t), i = _c(t), r = Ca(i);
  let l = i === "x" ? o === (n ? "end" : "start") ? "right" : "left" : o === "start" ? "bottom" : "top";
  return e.reference[r] > e.floating[r] && (l = $i(l)), {
    main: l,
    cross: $i(l)
  };
}
const ow = {
  start: "end",
  end: "start"
};
function Yc(t) {
  return t.replace(/start|end/g, (e) => ow[e]);
}
function rw(t) {
  const e = $i(t);
  return [Yc(t), e, Yc(e)];
}
function sw(t, e, n) {
  const o = ["left", "right"], i = ["right", "left"], r = ["top", "bottom"], l = ["bottom", "top"];
  switch (t) {
    case "top":
    case "bottom":
      return n ? e ? i : o : e ? o : i;
    case "left":
    case "right":
      return e ? r : l;
    default:
      return [];
  }
}
function iw(t, e, n, o) {
  const i = is(t);
  let r = sw(eo(t), n === "start", o);
  return i && (r = r.map((l) => l + "-" + i), e && (r = r.concat(r.map(Yc)))), r;
}
const lw = function(t) {
  return t === void 0 && (t = {}), {
    name: "flip",
    options: t,
    async fn(e) {
      var n;
      const {
        placement: o,
        middlewareData: i,
        rects: r,
        initialPlacement: l,
        platform: c,
        elements: _
      } = e, {
        mainAxis: h = !0,
        crossAxis: s = !0,
        fallbackPlacements: d,
        fallbackStrategy: f = "bestFit",
        fallbackAxisSideDirection: a = "none",
        flipAlignment: u = !0,
        ...b
      } = t, p = eo(o), m = eo(l) === l, y = await (c.isRTL == null ? void 0 : c.isRTL(_.floating)), w = d || (m || !u ? [$i(l)] : rw(l));
      !d && a !== "none" && w.push(...iw(l, u, a, y));
      const k = [l, ...w], C = await K0(e, b), A = [];
      let T = ((n = i.flip) == null ? void 0 : n.overflows) || [];
      if (h && A.push(C[p]), s) {
        const {
          main: R,
          cross: V
        } = nw(o, r, y);
        A.push(C[R], C[V]);
      }
      if (T = [...T, {
        placement: o,
        overflows: A
      }], !A.every((R) => R <= 0)) {
        var v;
        const R = (((v = i.flip) == null ? void 0 : v.index) || 0) + 1, V = k[R];
        if (V)
          return {
            data: {
              index: R,
              overflows: T
            },
            reset: {
              placement: V
            }
          };
        let B = "bottom";
        switch (f) {
          case "bestFit": {
            var x;
            const D = (x = T.map((S) => [S, S.overflows.filter(($) => $ > 0).reduce(($, N) => $ + N, 0)]).sort((S, $) => S[1] - $[1])[0]) == null ? void 0 : x[0].placement;
            D && (B = D);
            break;
          }
          case "initialPlacement":
            B = l;
            break;
        }
        if (o !== B)
          return {
            reset: {
              placement: B
            }
          };
      }
      return {};
    }
  };
};
async function cw(t, e) {
  const {
    placement: n,
    platform: o,
    elements: i
  } = t, r = await (o.isRTL == null ? void 0 : o.isRTL(i.floating)), l = eo(n), c = is(n), _ = _c(n) === "x", h = ["left", "top"].includes(l) ? -1 : 1, s = r && _ ? -1 : 1, d = typeof e == "function" ? e(t) : e;
  let {
    mainAxis: f,
    crossAxis: a,
    alignmentAxis: u
  } = typeof d == "number" ? {
    mainAxis: d,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: 0,
    crossAxis: 0,
    alignmentAxis: null,
    ...d
  };
  return c && typeof u == "number" && (a = c === "end" ? u * -1 : u), _ ? {
    x: a * s,
    y: f * h
  } : {
    x: f * h,
    y: a * s
  };
}
const aw = function(t) {
  return t === void 0 && (t = 0), {
    name: "offset",
    options: t,
    async fn(e) {
      const {
        x: n,
        y: o
      } = e, i = await cw(e, t);
      return {
        x: n + i.x,
        y: o + i.y,
        data: i
      };
    }
  };
};
function Bt(t) {
  var e;
  return ((e = t.ownerDocument) == null ? void 0 : e.defaultView) || window;
}
function le(t) {
  return Bt(t).getComputedStyle(t);
}
function Xe(t) {
  return rm(t) ? (t.nodeName || "").toLowerCase() : "";
}
let ds;
function om() {
  if (ds)
    return ds;
  const t = navigator.userAgentData;
  return t && Array.isArray(t.brands) ? (ds = t.brands.map((e) => e.brand + "/" + e.version).join(" "), ds) : navigator.userAgent;
}
function be(t) {
  return t instanceof Bt(t).HTMLElement;
}
function Xt(t) {
  return t instanceof Bt(t).Element;
}
function rm(t) {
  return t instanceof Bt(t).Node;
}
function Nf(t) {
  if (typeof ShadowRoot > "u")
    return !1;
  const e = Bt(t).ShadowRoot;
  return t instanceof e || t instanceof ShadowRoot;
}
function fc(t) {
  const {
    overflow: e,
    overflowX: n,
    overflowY: o,
    display: i
  } = le(t);
  return /auto|scroll|overlay|hidden|clip/.test(e + o + n) && !["inline", "contents"].includes(i);
}
function _w(t) {
  return ["table", "td", "th"].includes(Xe(t));
}
function Ea(t) {
  const e = /firefox/i.test(om()), n = le(t), o = n.backdropFilter || n.WebkitBackdropFilter;
  return n.transform !== "none" || n.perspective !== "none" || (o ? o !== "none" : !1) || e && n.willChange === "filter" || e && (n.filter ? n.filter !== "none" : !1) || ["transform", "perspective"].some((i) => n.willChange.includes(i)) || ["paint", "layout", "strict", "content"].some(
    // TS 4.1 compat
    (i) => {
      const r = n.contain;
      return r != null ? r.includes(i) : !1;
    }
  );
}
function sm() {
  return !/^((?!chrome|android).)*safari/i.test(om());
}
function Ta(t) {
  return ["html", "body", "#document"].includes(Xe(t));
}
const Pf = Math.min, Bo = Math.max, ki = Math.round;
function im(t) {
  const e = le(t);
  let n = parseFloat(e.width), o = parseFloat(e.height);
  const i = t.offsetWidth, r = t.offsetHeight, l = ki(n) !== i || ki(o) !== r;
  return l && (n = i, o = r), {
    width: n,
    height: o,
    fallback: l
  };
}
function lm(t) {
  return Xt(t) ? t : t.contextElement;
}
const cm = {
  x: 1,
  y: 1
};
function kn(t) {
  const e = lm(t);
  if (!be(e))
    return cm;
  const n = e.getBoundingClientRect(), {
    width: o,
    height: i,
    fallback: r
  } = im(e);
  let l = (r ? ki(n.width) : n.width) / o, c = (r ? ki(n.height) : n.height) / i;
  return (!l || !Number.isFinite(l)) && (l = 1), (!c || !Number.isFinite(c)) && (c = 1), {
    x: l,
    y: c
  };
}
function mn(t, e, n, o) {
  var i, r;
  e === void 0 && (e = !1), n === void 0 && (n = !1);
  const l = t.getBoundingClientRect(), c = lm(t);
  let _ = cm;
  e && (o ? Xt(o) && (_ = kn(o)) : _ = kn(t));
  const h = c ? Bt(c) : window, s = !sm() && n;
  let d = (l.left + (s && ((i = h.visualViewport) == null ? void 0 : i.offsetLeft) || 0)) / _.x, f = (l.top + (s && ((r = h.visualViewport) == null ? void 0 : r.offsetTop) || 0)) / _.y, a = l.width / _.x, u = l.height / _.y;
  if (c) {
    const b = Bt(c), p = o && Xt(o) ? Bt(o) : o;
    let m = b.frameElement;
    for (; m && o && p !== b; ) {
      const y = kn(m), w = m.getBoundingClientRect(), k = getComputedStyle(m);
      w.x += (m.clientLeft + parseFloat(k.paddingLeft)) * y.x, w.y += (m.clientTop + parseFloat(k.paddingTop)) * y.y, d *= y.x, f *= y.y, a *= y.x, u *= y.y, d += w.x, f += w.y, m = Bt(m).frameElement;
    }
  }
  return {
    width: a,
    height: u,
    top: f,
    right: d + a,
    bottom: f + u,
    left: d,
    x: d,
    y: f
  };
}
function Qe(t) {
  return ((rm(t) ? t.ownerDocument : t.document) || window.document).documentElement;
}
function uc(t) {
  return Xt(t) ? {
    scrollLeft: t.scrollLeft,
    scrollTop: t.scrollTop
  } : {
    scrollLeft: t.pageXOffset,
    scrollTop: t.pageYOffset
  };
}
function am(t) {
  return mn(Qe(t)).left + uc(t).scrollLeft;
}
function fw(t, e, n) {
  const o = be(e), i = Qe(e), r = mn(t, !0, n === "fixed", e);
  let l = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const c = {
    x: 0,
    y: 0
  };
  if (o || !o && n !== "fixed")
    if ((Xe(e) !== "body" || fc(i)) && (l = uc(e)), be(e)) {
      const _ = mn(e, !0);
      c.x = _.x + e.clientLeft, c.y = _.y + e.clientTop;
    } else
      i && (c.x = am(i));
  return {
    x: r.left + l.scrollLeft - c.x,
    y: r.top + l.scrollTop - c.y,
    width: r.width,
    height: r.height
  };
}
function gr(t) {
  if (Xe(t) === "html")
    return t;
  const e = (
    // Step into the shadow DOM of the parent of a slotted node
    t.assignedSlot || // DOM Element detected
    t.parentNode || // ShadowRoot detected
    (Nf(t) ? t.host : null) || // Fallback
    Qe(t)
  );
  return Nf(e) ? e.host : e;
}
function Of(t) {
  return !be(t) || le(t).position === "fixed" ? null : t.offsetParent;
}
function uw(t) {
  let e = gr(t);
  for (; be(e) && !Ta(e); ) {
    if (Ea(e))
      return e;
    e = gr(e);
  }
  return null;
}
function Hf(t) {
  const e = Bt(t);
  let n = Of(t);
  for (; n && _w(n) && le(n).position === "static"; )
    n = Of(n);
  return n && (Xe(n) === "html" || Xe(n) === "body" && le(n).position === "static" && !Ea(n)) ? e : n || uw(t) || e;
}
function hw(t) {
  return im(t);
}
function dw(t) {
  let {
    rect: e,
    offsetParent: n,
    strategy: o
  } = t;
  const i = be(n), r = Qe(n);
  if (n === r)
    return e;
  let l = {
    scrollLeft: 0,
    scrollTop: 0
  }, c = {
    x: 1,
    y: 1
  };
  const _ = {
    x: 0,
    y: 0
  };
  if ((i || !i && o !== "fixed") && ((Xe(n) !== "body" || fc(r)) && (l = uc(n)), be(n))) {
    const h = mn(n);
    c = kn(n), _.x = h.x + n.clientLeft, _.y = h.y + n.clientTop;
  }
  return {
    width: e.width * c.x,
    height: e.height * c.y,
    x: e.x * c.x - l.scrollLeft * c.x + _.x,
    y: e.y * c.y - l.scrollTop * c.y + _.y
  };
}
function pw(t, e) {
  const n = Bt(t), o = Qe(t), i = n.visualViewport;
  let r = o.clientWidth, l = o.clientHeight, c = 0, _ = 0;
  if (i) {
    r = i.width, l = i.height;
    const h = sm();
    (h || !h && e === "fixed") && (c = i.offsetLeft, _ = i.offsetTop);
  }
  return {
    width: r,
    height: l,
    x: c,
    y: _
  };
}
function mw(t) {
  var e;
  const n = Qe(t), o = uc(t), i = (e = t.ownerDocument) == null ? void 0 : e.body, r = Bo(n.scrollWidth, n.clientWidth, i ? i.scrollWidth : 0, i ? i.clientWidth : 0), l = Bo(n.scrollHeight, n.clientHeight, i ? i.scrollHeight : 0, i ? i.clientHeight : 0);
  let c = -o.scrollLeft + am(t);
  const _ = -o.scrollTop;
  return le(i || n).direction === "rtl" && (c += Bo(n.clientWidth, i ? i.clientWidth : 0) - r), {
    width: r,
    height: l,
    x: c,
    y: _
  };
}
function _m(t) {
  const e = gr(t);
  return Ta(e) ? t.ownerDocument.body : be(e) && fc(e) ? e : _m(e);
}
function jo(t, e) {
  var n;
  e === void 0 && (e = []);
  const o = _m(t), i = o === ((n = t.ownerDocument) == null ? void 0 : n.body), r = Bt(o);
  return i ? e.concat(r, r.visualViewport || [], fc(o) ? o : []) : e.concat(o, jo(o));
}
function gw(t, e) {
  const n = mn(t, !0, e === "fixed"), o = n.top + t.clientTop, i = n.left + t.clientLeft, r = be(t) ? kn(t) : {
    x: 1,
    y: 1
  }, l = t.clientWidth * r.x, c = t.clientHeight * r.y, _ = i * r.x, h = o * r.y;
  return {
    top: h,
    left: _,
    right: _ + l,
    bottom: h + c,
    x: _,
    y: h,
    width: l,
    height: c
  };
}
function Wf(t, e, n) {
  return e === "viewport" ? wi(pw(t, n)) : Xt(e) ? gw(e, n) : wi(mw(Qe(t)));
}
function yw(t, e) {
  const n = e.get(t);
  if (n)
    return n;
  let o = jo(t).filter((c) => Xt(c) && Xe(c) !== "body"), i = null;
  const r = le(t).position === "fixed";
  let l = r ? gr(t) : t;
  for (; Xt(l) && !Ta(l); ) {
    const c = le(l), _ = Ea(l);
    (r ? !_ && !i : !_ && c.position === "static" && !!i && ["absolute", "fixed"].includes(i.position)) ? o = o.filter((s) => s !== l) : i = c, l = gr(l);
  }
  return e.set(t, o), o;
}
function vw(t) {
  let {
    element: e,
    boundary: n,
    rootBoundary: o,
    strategy: i
  } = t;
  const l = [...n === "clippingAncestors" ? yw(e, this._c) : [].concat(n), o], c = l[0], _ = l.reduce((h, s) => {
    const d = Wf(e, s, i);
    return h.top = Bo(d.top, h.top), h.right = Pf(d.right, h.right), h.bottom = Pf(d.bottom, h.bottom), h.left = Bo(d.left, h.left), h;
  }, Wf(e, c, i));
  return {
    width: _.right - _.left,
    height: _.bottom - _.top,
    x: _.left,
    y: _.top
  };
}
const bw = {
  getClippingRect: vw,
  convertOffsetParentRelativeRectToViewportRelativeRect: dw,
  isElement: Xt,
  getDimensions: hw,
  getOffsetParent: Hf,
  getDocumentElement: Qe,
  getScale: kn,
  async getElementRects(t) {
    let {
      reference: e,
      floating: n,
      strategy: o
    } = t;
    const i = this.getOffsetParent || Hf, r = this.getDimensions;
    return {
      reference: fw(e, await i(n), o),
      floating: {
        x: 0,
        y: 0,
        ...await r(n)
      }
    };
  },
  getClientRects: (t) => Array.from(t.getClientRects()),
  isRTL: (t) => le(t).direction === "rtl"
};
function ww(t, e, n, o) {
  o === void 0 && (o = {});
  const {
    ancestorScroll: i = !0,
    ancestorResize: r = !0,
    elementResize: l = !0,
    animationFrame: c = !1
  } = o, _ = i && !c, h = _ || r ? [...Xt(t) ? jo(t) : t.contextElement ? jo(t.contextElement) : [], ...jo(e)] : [];
  h.forEach((u) => {
    _ && u.addEventListener("scroll", n, {
      passive: !0
    }), r && u.addEventListener("resize", n);
  });
  let s = null;
  if (l) {
    let u = !0;
    s = new ResizeObserver(() => {
      u || n(), u = !1;
    }), Xt(t) && !c && s.observe(t), !Xt(t) && t.contextElement && !c && s.observe(t.contextElement), s.observe(e);
  }
  let d, f = c ? mn(t) : null;
  c && a();
  function a() {
    const u = mn(t);
    f && (u.x !== f.x || u.y !== f.y || u.width !== f.width || u.height !== f.height) && n(), f = u, d = requestAnimationFrame(a);
  }
  return n(), () => {
    var u;
    h.forEach((b) => {
      _ && b.removeEventListener("scroll", n), r && b.removeEventListener("resize", n);
    }), (u = s) == null || u.disconnect(), s = null, c && cancelAnimationFrame(d);
  };
}
const $w = (t, e, n) => {
  const o = /* @__PURE__ */ new Map(), i = {
    platform: bw,
    ...n
  }, r = {
    ...i.platform,
    _c: o
  };
  return G0(t, e, {
    ...i,
    platform: r
  });
};
var Bn, jn, an, jr, Ct, zr, Vr, qc, ul, fm, hl, um, dl, hm, pl, dm, ml, pm, gl, mm, yl, gm, vl;
const nn = class extends Jt {
  constructor() {
    super(...arguments);
    E(this, Vr);
    E(this, ul);
    E(this, hl);
    E(this, dl);
    E(this, pl);
    E(this, ml);
    E(this, gl);
    E(this, yl);
    E(this, Bn, void 0);
    E(this, jn, 0);
    E(this, an, void 0);
    E(this, jr, void 0);
    E(this, Ct, void 0);
    E(this, zr, void 0);
    M(this, "hideLater", () => {
      g(this, vl).call(this), H(this, jn, window.setTimeout(this.hide.bind(this), 100));
    });
    E(this, vl, () => {
      clearTimeout(g(this, jn)), H(this, jn, 0);
    });
  }
  get isShown() {
    var n;
    return (n = g(this, an)) == null ? void 0 : n.classList.contains(nn.CLASS_SHOW);
  }
  get timepicker() {
    return g(this, an) || W(this, hl, um).call(this);
  }
  get trigger() {
    return g(this, jr) || this.element;
  }
  get elementShowClass() {
    return `with-${nn.NAME}-show`;
  }
  show(n) {
    return H(this, jr, n), !this.timepicker || !this.element ? !1 : (this.element.classList.add(this.elementShowClass), this.timepicker.classList.add(nn.CLASS_SHOW), W(this, gl, mm).call(this), !0);
  }
  hide() {
    var n, o;
    return (n = g(this, zr)) == null || n.call(this), this.element.classList.remove(this.elementShowClass), (o = g(this, an)) == null || o.classList.remove(nn.CLASS_SHOW), !0;
  }
  toggle(n) {
    return this.isShown ? this.hide() : this.show(n);
  }
  static show(n) {
    var l;
    const { event: o, ...i } = n, r = this.ensure(document.body);
    return Object.keys(i).length && r.setOptions(i), r.show(o), (l = o == null ? void 0 : o.stopPropagation) == null || l.call(o), r;
  }
  static hide() {
    const n = this.get(document.body);
    return n == null || n.hide(), n;
  }
  static clear(n) {
    var _, h;
    n instanceof Event && (n = { event: n });
    const { event: o, exclude: i, ignoreSelector: r = ".not-hide-timepicker" } = n || {};
    if (o && r && ((h = (_ = o.target).closest) != null && h.call(_, r)))
      return;
    const l = this.getAll().entries(), c = new Set(i || []);
    for (const [s, d] of l)
      c.has(s) || d.hide();
  }
};
let Wt = nn;
Bn = new WeakMap(), jn = new WeakMap(), an = new WeakMap(), jr = new WeakMap(), Ct = new WeakMap(), zr = new WeakMap(), Vr = new WeakSet(), qc = function() {
  const { arrow: n } = this.options;
  return typeof n == "number" ? n : 8;
}, ul = new WeakSet(), fm = function() {
  const n = W(this, Vr, qc).call(this);
  return H(this, Ct, document.createElement("div")), g(this, Ct).style.position = "absolute", g(this, Ct).style.width = `${n}px`, g(this, Ct).style.height = `${n}px`, g(this, Ct).style.transform = "rotate(45deg)", g(this, Ct);
}, hl = new WeakSet(), um = function() {
  const n = nn.CLASSNAME, o = document.createElement("div");
  return o.classList.add(n), B0(Gp(q0, { ...this.options }), o), this.options.arrow && o.append(W(this, ul, fm).call(this)), o.style.width = "max-content", o.style.position = this.options.strategy, o.style.top = "0", o.style.left = "0", document.body.appendChild(o), H(this, an, o), o;
}, dl = new WeakSet(), hm = function() {
  var l;
  const n = W(this, Vr, qc).call(this), { strategy: o, placement: i } = this.options, r = {
    middleware: [aw(n), lw()],
    strategy: o,
    placement: i
  };
  return this.options.arrow && g(this, Ct) && ((l = r.middleware) == null || l.push(tw({ element: g(this, Ct) }))), r;
}, pl = new WeakSet(), dm = function(n) {
  return {
    top: "bottom",
    right: "left",
    bottom: "top",
    left: "right"
  }[n];
}, ml = new WeakSet(), pm = function(n) {
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
}, gl = new WeakSet(), mm = function() {
  const n = W(this, dl, hm).call(this), o = W(this, yl, gm).call(this);
  H(this, zr, ww(o, this.timepicker, () => {
    $w(o, this.timepicker, n).then(({ x: i, y: r, middlewareData: l, placement: c }) => {
      Object.assign(this.timepicker.style, {
        left: `${i}px`,
        top: `${r}px`
      });
      const _ = c.split("-")[0], h = W(this, pl, dm).call(this, _);
      if (l.arrow && g(this, Ct)) {
        const { x: s, y: d } = l.arrow;
        Object.assign(g(this, Ct).style, {
          left: s != null ? `${s}px` : "",
          top: d != null ? `${d}px` : "",
          [h]: `${-g(this, Ct).offsetWidth / 2}px`,
          background: "inherit",
          border: "inherit",
          ...W(this, ml, pm).call(this, _)
        });
      }
    });
  }));
}, yl = new WeakSet(), gm = function() {
  return g(this, Bn) || H(this, Bn, {
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
  }), g(this, Bn);
}, vl = new WeakMap(), M(Wt, "NAME", "timepicker"), M(Wt, "CLASSNAME", "timepicker"), M(Wt, "CLASS_SHOW", "show"), M(Wt, "MENU_SELECTOR", ".form-time input:not(.disabled):not(:disabled)"), M(Wt, "DEFAULT", {
  value: bi().format("HH:mm:ss"),
  showSeconds: !1,
  placement: "bottom-start",
  strategy: "absolute",
  arrow: !0
});
document.addEventListener("click", function(t) {
  const n = t.target.closest(Wt.MENU_SELECTOR);
  n ? Wt.ensure(n).toggle() : Wt.clear({ event: t });
});
const kw = (t) => {
  const e = document.getElementsByClassName("with-timepicker-show")[0];
  if (!e)
    return;
  const n = typeof e.closest == "function" ? e.closest(Wt.MENU_SELECTOR) : null;
  !n || !t.target.contains(n) || Wt.clear({ event: t });
};
window.addEventListener("scroll", kw, !0);
class If extends xt {
}
M(If, "NAME", "toolbar"), M(If, "Component", Qn);
function ls(t) {
  return t.split("-")[1];
}
function Aa(t) {
  return t === "y" ? "height" : "width";
}
function no(t) {
  return t.split("-")[0];
}
function hc(t) {
  return ["top", "bottom"].includes(no(t)) ? "x" : "y";
}
function Uf(t, e, n) {
  let {
    reference: o,
    floating: i
  } = t;
  const r = o.x + o.width / 2 - i.width / 2, l = o.y + o.height / 2 - i.height / 2, c = hc(e), _ = Aa(c), h = o[_] / 2 - i[_] / 2, s = no(e), d = c === "x";
  let f;
  switch (s) {
    case "top":
      f = {
        x: r,
        y: o.y - i.height
      };
      break;
    case "bottom":
      f = {
        x: r,
        y: o.y + o.height
      };
      break;
    case "right":
      f = {
        x: o.x + o.width,
        y: l
      };
      break;
    case "left":
      f = {
        x: o.x - i.width,
        y: l
      };
      break;
    default:
      f = {
        x: o.x,
        y: o.y
      };
  }
  switch (ls(e)) {
    case "start":
      f[c] -= h * (n && d ? -1 : 1);
      break;
    case "end":
      f[c] += h * (n && d ? -1 : 1);
      break;
  }
  return f;
}
const xw = async (t, e, n) => {
  const {
    placement: o = "bottom",
    strategy: i = "absolute",
    middleware: r = [],
    platform: l
  } = n, c = r.filter(Boolean), _ = await (l.isRTL == null ? void 0 : l.isRTL(e));
  let h = await l.getElementRects({
    reference: t,
    floating: e,
    strategy: i
  }), {
    x: s,
    y: d
  } = Uf(h, o, _), f = o, a = {}, u = 0;
  for (let b = 0; b < c.length; b++) {
    const {
      name: p,
      fn: m
    } = c[b], {
      x: y,
      y: w,
      data: k,
      reset: C
    } = await m({
      x: s,
      y: d,
      initialPlacement: o,
      placement: f,
      strategy: i,
      middlewareData: a,
      rects: h,
      platform: l,
      elements: {
        reference: t,
        floating: e
      }
    });
    if (s = y ?? s, d = w ?? d, a = {
      ...a,
      [p]: {
        ...a[p],
        ...k
      }
    }, C && u <= 50) {
      u++, typeof C == "object" && (C.placement && (f = C.placement), C.rects && (h = C.rects === !0 ? await l.getElementRects({
        reference: t,
        floating: e,
        strategy: i
      }) : C.rects), {
        x: s,
        y: d
      } = Uf(h, f, _)), b = -1;
      continue;
    }
  }
  return {
    x: s,
    y: d,
    placement: f,
    strategy: i,
    middlewareData: a
  };
};
function Sw(t) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...t
  };
}
function ym(t) {
  return typeof t != "number" ? Sw(t) : {
    top: t,
    right: t,
    bottom: t,
    left: t
  };
}
function xi(t) {
  return {
    ...t,
    top: t.y,
    left: t.x,
    right: t.x + t.width,
    bottom: t.y + t.height
  };
}
async function Cw(t, e) {
  var n;
  e === void 0 && (e = {});
  const {
    x: o,
    y: i,
    platform: r,
    rects: l,
    elements: c,
    strategy: _
  } = t, {
    boundary: h = "clippingAncestors",
    rootBoundary: s = "viewport",
    elementContext: d = "floating",
    altBoundary: f = !1,
    padding: a = 0
  } = e, u = ym(a), p = c[f ? d === "floating" ? "reference" : "floating" : d], m = xi(await r.getClippingRect({
    element: (n = await (r.isElement == null ? void 0 : r.isElement(p))) == null || n ? p : p.contextElement || await (r.getDocumentElement == null ? void 0 : r.getDocumentElement(c.floating)),
    boundary: h,
    rootBoundary: s,
    strategy: _
  })), y = d === "floating" ? {
    ...l.floating,
    x: o,
    y: i
  } : l.reference, w = await (r.getOffsetParent == null ? void 0 : r.getOffsetParent(c.floating)), k = await (r.isElement == null ? void 0 : r.isElement(w)) ? await (r.getScale == null ? void 0 : r.getScale(w)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, C = xi(r.convertOffsetParentRelativeRectToViewportRelativeRect ? await r.convertOffsetParentRelativeRectToViewportRelativeRect({
    rect: y,
    offsetParent: w,
    strategy: _
  }) : y);
  return {
    top: (m.top - C.top + u.top) / k.y,
    bottom: (C.bottom - m.bottom + u.bottom) / k.y,
    left: (m.left - C.left + u.left) / k.x,
    right: (C.right - m.right + u.right) / k.x
  };
}
const Ew = Math.min, Tw = Math.max;
function Aw(t, e, n) {
  return Tw(t, Ew(e, n));
}
const Lw = (t) => ({
  name: "arrow",
  options: t,
  async fn(e) {
    const {
      element: n,
      padding: o = 0
    } = t || {}, {
      x: i,
      y: r,
      placement: l,
      rects: c,
      platform: _
    } = e;
    if (n == null)
      return {};
    const h = ym(o), s = {
      x: i,
      y: r
    }, d = hc(l), f = Aa(d), a = await _.getDimensions(n), u = d === "y" ? "top" : "left", b = d === "y" ? "bottom" : "right", p = c.reference[f] + c.reference[d] - s[d] - c.floating[f], m = s[d] - c.reference[d], y = await (_.getOffsetParent == null ? void 0 : _.getOffsetParent(n));
    let w = y ? d === "y" ? y.clientHeight || 0 : y.clientWidth || 0 : 0;
    w === 0 && (w = c.floating[f]);
    const k = p / 2 - m / 2, C = h[u], A = w - a[f] - h[b], T = w / 2 - a[f] / 2 + k, v = Aw(C, T, A), R = ls(l) != null && T != v && c.reference[f] / 2 - (T < C ? h[u] : h[b]) - a[f] / 2 < 0 ? T < C ? C - T : A - T : 0;
    return {
      [d]: s[d] - R,
      data: {
        [d]: v,
        centerOffset: T - v
      }
    };
  }
}), Mw = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function Si(t) {
  return t.replace(/left|right|bottom|top/g, (e) => Mw[e]);
}
function Rw(t, e, n) {
  n === void 0 && (n = !1);
  const o = ls(t), i = hc(t), r = Aa(i);
  let l = i === "x" ? o === (n ? "end" : "start") ? "right" : "left" : o === "start" ? "bottom" : "top";
  return e.reference[r] > e.floating[r] && (l = Si(l)), {
    main: l,
    cross: Si(l)
  };
}
const Dw = {
  start: "end",
  end: "start"
};
function Gc(t) {
  return t.replace(/start|end/g, (e) => Dw[e]);
}
function Nw(t) {
  const e = Si(t);
  return [Gc(t), e, Gc(e)];
}
function Pw(t, e, n) {
  const o = ["left", "right"], i = ["right", "left"], r = ["top", "bottom"], l = ["bottom", "top"];
  switch (t) {
    case "top":
    case "bottom":
      return n ? e ? i : o : e ? o : i;
    case "left":
    case "right":
      return e ? r : l;
    default:
      return [];
  }
}
function Ow(t, e, n, o) {
  const i = ls(t);
  let r = Pw(no(t), n === "start", o);
  return i && (r = r.map((l) => l + "-" + i), e && (r = r.concat(r.map(Gc)))), r;
}
const Hw = function(t) {
  return t === void 0 && (t = {}), {
    name: "flip",
    options: t,
    async fn(e) {
      var n;
      const {
        placement: o,
        middlewareData: i,
        rects: r,
        initialPlacement: l,
        platform: c,
        elements: _
      } = e, {
        mainAxis: h = !0,
        crossAxis: s = !0,
        fallbackPlacements: d,
        fallbackStrategy: f = "bestFit",
        fallbackAxisSideDirection: a = "none",
        flipAlignment: u = !0,
        ...b
      } = t, p = no(o), m = no(l) === l, y = await (c.isRTL == null ? void 0 : c.isRTL(_.floating)), w = d || (m || !u ? [Si(l)] : Nw(l));
      !d && a !== "none" && w.push(...Ow(l, u, a, y));
      const k = [l, ...w], C = await Cw(e, b), A = [];
      let T = ((n = i.flip) == null ? void 0 : n.overflows) || [];
      if (h && A.push(C[p]), s) {
        const {
          main: R,
          cross: V
        } = Rw(o, r, y);
        A.push(C[R], C[V]);
      }
      if (T = [...T, {
        placement: o,
        overflows: A
      }], !A.every((R) => R <= 0)) {
        var v;
        const R = (((v = i.flip) == null ? void 0 : v.index) || 0) + 1, V = k[R];
        if (V)
          return {
            data: {
              index: R,
              overflows: T
            },
            reset: {
              placement: V
            }
          };
        let B = "bottom";
        switch (f) {
          case "bestFit": {
            var x;
            const D = (x = T.map((S) => [S, S.overflows.filter(($) => $ > 0).reduce(($, N) => $ + N, 0)]).sort((S, $) => S[1] - $[1])[0]) == null ? void 0 : x[0].placement;
            D && (B = D);
            break;
          }
          case "initialPlacement":
            B = l;
            break;
        }
        if (o !== B)
          return {
            reset: {
              placement: B
            }
          };
      }
      return {};
    }
  };
};
async function Ww(t, e) {
  const {
    placement: n,
    platform: o,
    elements: i
  } = t, r = await (o.isRTL == null ? void 0 : o.isRTL(i.floating)), l = no(n), c = ls(n), _ = hc(n) === "x", h = ["left", "top"].includes(l) ? -1 : 1, s = r && _ ? -1 : 1, d = typeof e == "function" ? e(t) : e;
  let {
    mainAxis: f,
    crossAxis: a,
    alignmentAxis: u
  } = typeof d == "number" ? {
    mainAxis: d,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: 0,
    crossAxis: 0,
    alignmentAxis: null,
    ...d
  };
  return c && typeof u == "number" && (a = c === "end" ? u * -1 : u), _ ? {
    x: a * s,
    y: f * h
  } : {
    x: f * h,
    y: a * s
  };
}
const Iw = function(t) {
  return t === void 0 && (t = 0), {
    name: "offset",
    options: t,
    async fn(e) {
      const {
        x: n,
        y: o
      } = e, i = await Ww(e, t);
      return {
        x: n + i.x,
        y: o + i.y,
        data: i
      };
    }
  };
};
function jt(t) {
  var e;
  return ((e = t.ownerDocument) == null ? void 0 : e.defaultView) || window;
}
function ce(t) {
  return jt(t).getComputedStyle(t);
}
function Ke(t) {
  return bm(t) ? (t.nodeName || "").toLowerCase() : "";
}
let ps;
function vm() {
  if (ps)
    return ps;
  const t = navigator.userAgentData;
  return t && Array.isArray(t.brands) ? (ps = t.brands.map((e) => e.brand + "/" + e.version).join(" "), ps) : navigator.userAgent;
}
function we(t) {
  return t instanceof jt(t).HTMLElement;
}
function Kt(t) {
  return t instanceof jt(t).Element;
}
function bm(t) {
  return t instanceof jt(t).Node;
}
function Ff(t) {
  if (typeof ShadowRoot > "u")
    return !1;
  const e = jt(t).ShadowRoot;
  return t instanceof e || t instanceof ShadowRoot;
}
function dc(t) {
  const {
    overflow: e,
    overflowX: n,
    overflowY: o,
    display: i
  } = ce(t);
  return /auto|scroll|overlay|hidden|clip/.test(e + o + n) && !["inline", "contents"].includes(i);
}
function Uw(t) {
  return ["table", "td", "th"].includes(Ke(t));
}
function La(t) {
  const e = /firefox/i.test(vm()), n = ce(t), o = n.backdropFilter || n.WebkitBackdropFilter;
  return n.transform !== "none" || n.perspective !== "none" || (o ? o !== "none" : !1) || e && n.willChange === "filter" || e && (n.filter ? n.filter !== "none" : !1) || ["transform", "perspective"].some((i) => n.willChange.includes(i)) || ["paint", "layout", "strict", "content"].some(
    // TS 4.1 compat
    (i) => {
      const r = n.contain;
      return r != null ? r.includes(i) : !1;
    }
  );
}
function wm() {
  return !/^((?!chrome|android).)*safari/i.test(vm());
}
function Ma(t) {
  return ["html", "body", "#document"].includes(Ke(t));
}
const Bf = Math.min, zo = Math.max, Ci = Math.round;
function $m(t) {
  const e = ce(t);
  let n = parseFloat(e.width), o = parseFloat(e.height);
  const i = t.offsetWidth, r = t.offsetHeight, l = Ci(n) !== i || Ci(o) !== r;
  return l && (n = i, o = r), {
    width: n,
    height: o,
    fallback: l
  };
}
function km(t) {
  return Kt(t) ? t : t.contextElement;
}
const xm = {
  x: 1,
  y: 1
};
function xn(t) {
  const e = km(t);
  if (!we(e))
    return xm;
  const n = e.getBoundingClientRect(), {
    width: o,
    height: i,
    fallback: r
  } = $m(e);
  let l = (r ? Ci(n.width) : n.width) / o, c = (r ? Ci(n.height) : n.height) / i;
  return (!l || !Number.isFinite(l)) && (l = 1), (!c || !Number.isFinite(c)) && (c = 1), {
    x: l,
    y: c
  };
}
function gn(t, e, n, o) {
  var i, r;
  e === void 0 && (e = !1), n === void 0 && (n = !1);
  const l = t.getBoundingClientRect(), c = km(t);
  let _ = xm;
  e && (o ? Kt(o) && (_ = xn(o)) : _ = xn(t));
  const h = c ? jt(c) : window, s = !wm() && n;
  let d = (l.left + (s && ((i = h.visualViewport) == null ? void 0 : i.offsetLeft) || 0)) / _.x, f = (l.top + (s && ((r = h.visualViewport) == null ? void 0 : r.offsetTop) || 0)) / _.y, a = l.width / _.x, u = l.height / _.y;
  if (c) {
    const b = jt(c), p = o && Kt(o) ? jt(o) : o;
    let m = b.frameElement;
    for (; m && o && p !== b; ) {
      const y = xn(m), w = m.getBoundingClientRect(), k = getComputedStyle(m);
      w.x += (m.clientLeft + parseFloat(k.paddingLeft)) * y.x, w.y += (m.clientTop + parseFloat(k.paddingTop)) * y.y, d *= y.x, f *= y.y, a *= y.x, u *= y.y, d += w.x, f += w.y, m = jt(m).frameElement;
    }
  }
  return {
    width: a,
    height: u,
    top: f,
    right: d + a,
    bottom: f + u,
    left: d,
    x: d,
    y: f
  };
}
function tn(t) {
  return ((bm(t) ? t.ownerDocument : t.document) || window.document).documentElement;
}
function pc(t) {
  return Kt(t) ? {
    scrollLeft: t.scrollLeft,
    scrollTop: t.scrollTop
  } : {
    scrollLeft: t.pageXOffset,
    scrollTop: t.pageYOffset
  };
}
function Sm(t) {
  return gn(tn(t)).left + pc(t).scrollLeft;
}
function Fw(t, e, n) {
  const o = we(e), i = tn(e), r = gn(t, !0, n === "fixed", e);
  let l = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const c = {
    x: 0,
    y: 0
  };
  if (o || !o && n !== "fixed")
    if ((Ke(e) !== "body" || dc(i)) && (l = pc(e)), we(e)) {
      const _ = gn(e, !0);
      c.x = _.x + e.clientLeft, c.y = _.y + e.clientTop;
    } else
      i && (c.x = Sm(i));
  return {
    x: r.left + l.scrollLeft - c.x,
    y: r.top + l.scrollTop - c.y,
    width: r.width,
    height: r.height
  };
}
function yr(t) {
  if (Ke(t) === "html")
    return t;
  const e = (
    // Step into the shadow DOM of the parent of a slotted node
    t.assignedSlot || // DOM Element detected
    t.parentNode || // ShadowRoot detected
    (Ff(t) ? t.host : null) || // Fallback
    tn(t)
  );
  return Ff(e) ? e.host : e;
}
function jf(t) {
  return !we(t) || ce(t).position === "fixed" ? null : t.offsetParent;
}
function Bw(t) {
  let e = yr(t);
  for (; we(e) && !Ma(e); ) {
    if (La(e))
      return e;
    e = yr(e);
  }
  return null;
}
function zf(t) {
  const e = jt(t);
  let n = jf(t);
  for (; n && Uw(n) && ce(n).position === "static"; )
    n = jf(n);
  return n && (Ke(n) === "html" || Ke(n) === "body" && ce(n).position === "static" && !La(n)) ? e : n || Bw(t) || e;
}
function jw(t) {
  return $m(t);
}
function zw(t) {
  let {
    rect: e,
    offsetParent: n,
    strategy: o
  } = t;
  const i = we(n), r = tn(n);
  if (n === r)
    return e;
  let l = {
    scrollLeft: 0,
    scrollTop: 0
  }, c = {
    x: 1,
    y: 1
  };
  const _ = {
    x: 0,
    y: 0
  };
  if ((i || !i && o !== "fixed") && ((Ke(n) !== "body" || dc(r)) && (l = pc(n)), we(n))) {
    const h = gn(n);
    c = xn(n), _.x = h.x + n.clientLeft, _.y = h.y + n.clientTop;
  }
  return {
    width: e.width * c.x,
    height: e.height * c.y,
    x: e.x * c.x - l.scrollLeft * c.x + _.x,
    y: e.y * c.y - l.scrollTop * c.y + _.y
  };
}
function Vw(t, e) {
  const n = jt(t), o = tn(t), i = n.visualViewport;
  let r = o.clientWidth, l = o.clientHeight, c = 0, _ = 0;
  if (i) {
    r = i.width, l = i.height;
    const h = wm();
    (h || !h && e === "fixed") && (c = i.offsetLeft, _ = i.offsetTop);
  }
  return {
    width: r,
    height: l,
    x: c,
    y: _
  };
}
function Yw(t) {
  var e;
  const n = tn(t), o = pc(t), i = (e = t.ownerDocument) == null ? void 0 : e.body, r = zo(n.scrollWidth, n.clientWidth, i ? i.scrollWidth : 0, i ? i.clientWidth : 0), l = zo(n.scrollHeight, n.clientHeight, i ? i.scrollHeight : 0, i ? i.clientHeight : 0);
  let c = -o.scrollLeft + Sm(t);
  const _ = -o.scrollTop;
  return ce(i || n).direction === "rtl" && (c += zo(n.clientWidth, i ? i.clientWidth : 0) - r), {
    width: r,
    height: l,
    x: c,
    y: _
  };
}
function Cm(t) {
  const e = yr(t);
  return Ma(e) ? t.ownerDocument.body : we(e) && dc(e) ? e : Cm(e);
}
function Vo(t, e) {
  var n;
  e === void 0 && (e = []);
  const o = Cm(t), i = o === ((n = t.ownerDocument) == null ? void 0 : n.body), r = jt(o);
  return i ? e.concat(r, r.visualViewport || [], dc(o) ? o : []) : e.concat(o, Vo(o));
}
function qw(t, e) {
  const n = gn(t, !0, e === "fixed"), o = n.top + t.clientTop, i = n.left + t.clientLeft, r = we(t) ? xn(t) : {
    x: 1,
    y: 1
  }, l = t.clientWidth * r.x, c = t.clientHeight * r.y, _ = i * r.x, h = o * r.y;
  return {
    top: h,
    left: _,
    right: _ + l,
    bottom: h + c,
    x: _,
    y: h,
    width: l,
    height: c
  };
}
function Vf(t, e, n) {
  return e === "viewport" ? xi(Vw(t, n)) : Kt(e) ? qw(e, n) : xi(Yw(tn(t)));
}
function Gw(t, e) {
  const n = e.get(t);
  if (n)
    return n;
  let o = Vo(t).filter((c) => Kt(c) && Ke(c) !== "body"), i = null;
  const r = ce(t).position === "fixed";
  let l = r ? yr(t) : t;
  for (; Kt(l) && !Ma(l); ) {
    const c = ce(l), _ = La(l);
    (r ? !_ && !i : !_ && c.position === "static" && !!i && ["absolute", "fixed"].includes(i.position)) ? o = o.filter((s) => s !== l) : i = c, l = yr(l);
  }
  return e.set(t, o), o;
}
function Xw(t) {
  let {
    element: e,
    boundary: n,
    rootBoundary: o,
    strategy: i
  } = t;
  const l = [...n === "clippingAncestors" ? Gw(e, this._c) : [].concat(n), o], c = l[0], _ = l.reduce((h, s) => {
    const d = Vf(e, s, i);
    return h.top = zo(d.top, h.top), h.right = Bf(d.right, h.right), h.bottom = Bf(d.bottom, h.bottom), h.left = zo(d.left, h.left), h;
  }, Vf(e, c, i));
  return {
    width: _.right - _.left,
    height: _.bottom - _.top,
    x: _.left,
    y: _.top
  };
}
const Kw = {
  getClippingRect: Xw,
  convertOffsetParentRelativeRectToViewportRelativeRect: zw,
  isElement: Kt,
  getDimensions: jw,
  getOffsetParent: zf,
  getDocumentElement: tn,
  getScale: xn,
  async getElementRects(t) {
    let {
      reference: e,
      floating: n,
      strategy: o
    } = t;
    const i = this.getOffsetParent || zf, r = this.getDimensions;
    return {
      reference: Fw(e, await i(n), o),
      floating: {
        x: 0,
        y: 0,
        ...await r(n)
      }
    };
  },
  getClientRects: (t) => Array.from(t.getClientRects()),
  isRTL: (t) => ce(t).direction === "rtl"
};
function Jw(t, e, n, o) {
  o === void 0 && (o = {});
  const {
    ancestorScroll: i = !0,
    ancestorResize: r = !0,
    elementResize: l = !0,
    animationFrame: c = !1
  } = o, _ = i && !c, h = _ || r ? [...Kt(t) ? Vo(t) : t.contextElement ? Vo(t.contextElement) : [], ...Vo(e)] : [];
  h.forEach((u) => {
    _ && u.addEventListener("scroll", n, {
      passive: !0
    }), r && u.addEventListener("resize", n);
  });
  let s = null;
  if (l) {
    let u = !0;
    s = new ResizeObserver(() => {
      u || n(), u = !1;
    }), Kt(t) && !c && s.observe(t), !Kt(t) && t.contextElement && !c && s.observe(t.contextElement), s.observe(e);
  }
  let d, f = c ? gn(t) : null;
  c && a();
  function a() {
    const u = gn(t);
    f && (u.x !== f.x || u.y !== f.y || u.width !== f.width || u.height !== f.height) && n(), f = u, d = requestAnimationFrame(a);
  }
  return n(), () => {
    var u;
    h.forEach((b) => {
      _ && b.removeEventListener("scroll", n), r && b.removeEventListener("resize", n);
    }), (u = s) == null || u.disconnect(), s = null, c && cancelAnimationFrame(d);
  };
}
const Zw = (t, e, n) => {
  const o = /* @__PURE__ */ new Map(), i = {
    platform: Kw,
    ...n
  }, r = {
    ...i.platform,
    _c: o
  };
  return xw(t, e, {
    ...i,
    platform: r
  });
};
var zn, Vn, Yn, _n, Et, bl, Yr, qr, Xc, wl, Em, $l, Tm, kl, Am, xl, Lm, Sl, Mm, Cl, Rm, El, Dm, qn, Tl, Nm;
const on = class extends Jt {
  constructor() {
    super(...arguments);
    E(this, qr);
    E(this, wl);
    E(this, $l);
    E(this, kl);
    E(this, xl);
    E(this, Sl);
    E(this, Cl);
    E(this, El);
    E(this, Tl);
    E(this, zn, !1);
    E(this, Vn, void 0);
    E(this, Yn, 0);
    E(this, _n, void 0);
    E(this, Et, void 0);
    E(this, bl, void 0);
    E(this, Yr, void 0);
    M(this, "hideLater", () => {
      g(this, qn).call(this), H(this, Yn, window.setTimeout(this.hide.bind(this), 100));
    });
    E(this, qn, () => {
      clearTimeout(g(this, Yn)), H(this, Yn, 0);
    });
  }
  get isShown() {
    var n;
    return (n = g(this, _n)) == null ? void 0 : n.classList.contains(on.CLASS_SHOW);
  }
  get tooltip() {
    return g(this, _n) || W(this, $l, Tm).call(this);
  }
  get trigger() {
    return g(this, bl) || this.element;
  }
  get isHover() {
    return this.options.trigger === "hover";
  }
  get elementShowClass() {
    return `with-${on.NAME}-show`;
  }
  get isDynamic() {
    return this.options.title;
  }
  init() {
    const { element: n } = this;
    n !== document.body && !n.hasAttribute("data-toggle") && n.setAttribute("data-toggle", "tooltip");
  }
  show(n) {
    return this.setOptions(n), !g(this, zn) && this.isHover && W(this, Tl, Nm).call(this), this.options.animation && this.tooltip.classList.add("fade"), this.element.classList.add(this.elementShowClass), this.tooltip.classList.add(on.CLASS_SHOW), W(this, Cl, Rm).call(this), !0;
  }
  hide() {
    var n, o;
    return (n = g(this, Yr)) == null || n.call(this), this.element.classList.remove(this.elementShowClass), (o = g(this, _n)) == null || o.classList.remove(on.CLASS_SHOW), !0;
  }
  toggle(n) {
    return this.isShown ? this.hide() : this.show(n);
  }
  destroy() {
    g(this, zn) && (this.element.removeEventListener("mouseleave", this.hideLater), this.tooltip.removeEventListener("mouseenter", g(this, qn)), this.tooltip.removeEventListener("mouseleave", this.hideLater)), super.destroy();
  }
  static clear(n) {
    n instanceof Event && (n = { event: n });
    const { exclude: o } = n || {}, i = this.getAll().entries(), r = new Set(o || []);
    for (const [l, c] of i)
      r.has(l) || c.hide();
  }
};
let It = on;
zn = new WeakMap(), Vn = new WeakMap(), Yn = new WeakMap(), _n = new WeakMap(), Et = new WeakMap(), bl = new WeakMap(), Yr = new WeakMap(), qr = new WeakSet(), Xc = function() {
  const { arrow: n } = this.options;
  return typeof n == "number" ? n : 8;
}, wl = new WeakSet(), Em = function() {
  const n = W(this, qr, Xc).call(this);
  return H(this, Et, document.createElement("div")), g(this, Et).style.position = this.options.strategy, g(this, Et).style.width = `${n}px`, g(this, Et).style.height = `${n}px`, g(this, Et).style.transform = "rotate(45deg)", g(this, Et);
}, $l = new WeakSet(), Tm = function() {
  var i;
  const n = on.TOOLTIP_CLASS;
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
  if (this.options.arrow && (o == null || o.append(W(this, wl, Em).call(this))), !o)
    throw new Error("Tooltip: Cannot find tooltip element");
  return o.style.width = "max-content", o.style.position = "absolute", o.style.top = "0", o.style.left = "0", document.body.appendChild(o), H(this, _n, o), o;
}, kl = new WeakSet(), Am = function() {
  var l;
  const n = W(this, qr, Xc).call(this), { strategy: o, placement: i } = this.options, r = {
    middleware: [Iw(n), Hw()],
    strategy: o,
    placement: i
  };
  return this.options.arrow && g(this, Et) && ((l = r.middleware) == null || l.push(Lw({ element: g(this, Et) }))), r;
}, xl = new WeakSet(), Lm = function(n) {
  return {
    top: "bottom",
    right: "left",
    bottom: "top",
    left: "right"
  }[n];
}, Sl = new WeakSet(), Mm = function(n) {
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
}, Cl = new WeakSet(), Rm = function() {
  const n = W(this, kl, Am).call(this), o = W(this, El, Dm).call(this);
  H(this, Yr, Jw(o, this.tooltip, () => {
    Zw(o, this.tooltip, n).then(({ x: i, y: r, middlewareData: l, placement: c }) => {
      Object.assign(this.tooltip.style, {
        left: `${i}px`,
        top: `${r}px`
      });
      const _ = c.split("-")[0], h = W(this, xl, Lm).call(this, _);
      if (l.arrow && g(this, Et)) {
        const { x: s, y: d } = l.arrow;
        Object.assign(g(this, Et).style, {
          left: s != null ? `${s}px` : "",
          top: d != null ? `${d}px` : "",
          [h]: `${-g(this, Et).offsetWidth / 2}px`,
          background: "inherit",
          border: "inherit",
          ...W(this, Sl, Mm).call(this, _)
        });
      }
    });
  }));
}, El = new WeakSet(), Dm = function() {
  return g(this, Vn) || H(this, Vn, {
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
  }), g(this, Vn);
}, qn = new WeakMap(), Tl = new WeakSet(), Nm = function() {
  const { tooltip: n } = this;
  n.addEventListener("mouseenter", g(this, qn)), n.addEventListener("mouseleave", this.hideLater), this.element.addEventListener("mouseleave", this.hideLater), H(this, zn, !0);
}, M(It, "NAME", "tooltip"), M(It, "TOOLTIP_CLASS", "tooltip"), M(It, "CLASS_SHOW", "show"), M(It, "MENU_SELECTOR", '[data-toggle="tooltip"]:not(.disabled):not(:disabled)'), M(It, "DEFAULT", {
  animation: !0,
  placement: "top",
  strategy: "absolute",
  trigger: "hover",
  type: "darker",
  arrow: !0
});
document.addEventListener("click", function(t) {
  const n = t.target.closest(It.MENU_SELECTOR);
  if (n) {
    const o = It.ensure(n);
    o.options.trigger === "click" && o.toggle();
  } else
    It.clear({ event: t });
});
document.addEventListener("mouseover", function(t) {
  const e = t.target, n = typeof e.closest == "function" ? e.closest(It.MENU_SELECTOR) : null;
  if (!n)
    return;
  const o = It.ensure(n);
  o.isHover && o.show();
});
var Pm, mt, Om, Yo, Yf, Hm = {}, Wm = [], Qw = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function Be(t, e) {
  for (var n in e)
    t[n] = e[n];
  return t;
}
function Im(t) {
  var e = t.parentNode;
  e && e.removeChild(t);
}
function Sc(t, e, n, o, i) {
  var r = { type: t, props: e, key: n, ref: o, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: i ?? ++Om };
  return i == null && mt.vnode != null && mt.vnode(r), r;
}
function Ra(t) {
  return t.children;
}
function qo(t, e) {
  this.props = t, this.context = e;
}
function vr(t, e) {
  if (e == null)
    return t.__ ? vr(t.__, t.__.__k.indexOf(t) + 1) : null;
  for (var n; e < t.__k.length; e++)
    if ((n = t.__k[e]) != null && n.__e != null)
      return n.__e;
  return typeof t.type == "function" ? vr(t) : null;
}
function Um(t) {
  var e, n;
  if ((t = t.__) != null && t.__c != null) {
    for (t.__e = t.__c.base = null, e = 0; e < t.__k.length; e++)
      if ((n = t.__k[e]) != null && n.__e != null) {
        t.__e = t.__c.base = n.__e;
        break;
      }
    return Um(t);
  }
}
function qf(t) {
  (!t.__d && (t.__d = !0) && Yo.push(t) && !Ei.__r++ || Yf !== mt.debounceRendering) && ((Yf = mt.debounceRendering) || setTimeout)(Ei);
}
function Ei() {
  for (var t; Ei.__r = Yo.length; )
    t = Yo.sort(function(e, n) {
      return e.__v.__b - n.__v.__b;
    }), Yo = [], t.some(function(e) {
      var n, o, i, r, l, c;
      e.__d && (l = (r = (n = e).__v).__e, (c = n.__P) && (o = [], (i = Be({}, r)).__v = r.__v + 1, zm(c, r, i, n.__n, c.ownerSVGElement !== void 0, r.__h != null ? [l] : null, o, l ?? vr(r), r.__h), e$(o, r), r.__e != l && Um(r)));
    });
}
function Fm(t, e, n, o, i, r, l, c, _, h) {
  var s, d, f, a, u, b, p, m = o && o.__k || Wm, y = m.length;
  for (n.__k = [], s = 0; s < e.length; s++)
    if ((a = n.__k[s] = (a = e[s]) == null || typeof a == "boolean" ? null : typeof a == "string" || typeof a == "number" || typeof a == "bigint" ? Sc(null, a, null, null, a) : Array.isArray(a) ? Sc(Ra, { children: a }, null, null, null) : a.__b > 0 ? Sc(a.type, a.props, a.key, a.ref ? a.ref : null, a.__v) : a) != null) {
      if (a.__ = n, a.__b = n.__b + 1, (f = m[s]) === null || f && a.key == f.key && a.type === f.type)
        m[s] = void 0;
      else
        for (d = 0; d < y; d++) {
          if ((f = m[d]) && a.key == f.key && a.type === f.type) {
            m[d] = void 0;
            break;
          }
          f = null;
        }
      zm(t, a, f = f || Hm, i, r, l, c, _, h), u = a.__e, (d = a.ref) && f.ref != d && (p || (p = []), f.ref && p.push(f.ref, null, a), p.push(d, a.__c || u, a)), u != null ? (b == null && (b = u), typeof a.type == "function" && a.__k === f.__k ? a.__d = _ = Bm(a, _, t) : _ = jm(t, a, f, m, u, _), typeof n.type == "function" && (n.__d = _)) : _ && f.__e == _ && _.parentNode != t && (_ = vr(f));
    }
  for (n.__e = b, s = y; s--; )
    m[s] != null && Ym(m[s], m[s]);
  if (p)
    for (s = 0; s < p.length; s++)
      Vm(p[s], p[++s], p[++s]);
}
function Bm(t, e, n) {
  for (var o, i = t.__k, r = 0; i && r < i.length; r++)
    (o = i[r]) && (o.__ = t, e = typeof o.type == "function" ? Bm(o, e, n) : jm(n, o, o, i, o.__e, e));
  return e;
}
function jm(t, e, n, o, i, r) {
  var l, c, _;
  if (e.__d !== void 0)
    l = e.__d, e.__d = void 0;
  else if (n == null || i != r || i.parentNode == null)
    t:
      if (r == null || r.parentNode !== t)
        t.appendChild(i), l = null;
      else {
        for (c = r, _ = 0; (c = c.nextSibling) && _ < o.length; _ += 2)
          if (c == i)
            break t;
        t.insertBefore(i, r), l = r;
      }
  return l !== void 0 ? l : i.nextSibling;
}
function t$(t, e, n, o, i) {
  var r;
  for (r in n)
    r === "children" || r === "key" || r in e || Ti(t, r, null, n[r], o);
  for (r in e)
    i && typeof e[r] != "function" || r === "children" || r === "key" || r === "value" || r === "checked" || n[r] === e[r] || Ti(t, r, e[r], n[r], o);
}
function Gf(t, e, n) {
  e[0] === "-" ? t.setProperty(e, n) : t[e] = n == null ? "" : typeof n != "number" || Qw.test(e) ? n : n + "px";
}
function Ti(t, e, n, o, i) {
  var r;
  t:
    if (e === "style")
      if (typeof n == "string")
        t.style.cssText = n;
      else {
        if (typeof o == "string" && (t.style.cssText = o = ""), o)
          for (e in o)
            n && e in n || Gf(t.style, e, "");
        if (n)
          for (e in n)
            o && n[e] === o[e] || Gf(t.style, e, n[e]);
      }
    else if (e[0] === "o" && e[1] === "n")
      r = e !== (e = e.replace(/Capture$/, "")), e = e.toLowerCase() in t ? e.toLowerCase().slice(2) : e.slice(2), t.l || (t.l = {}), t.l[e + r] = n, n ? o || t.addEventListener(e, r ? Kf : Xf, r) : t.removeEventListener(e, r ? Kf : Xf, r);
    else if (e !== "dangerouslySetInnerHTML") {
      if (i)
        e = e.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
      else if (e !== "href" && e !== "list" && e !== "form" && e !== "tabIndex" && e !== "download" && e in t)
        try {
          t[e] = n ?? "";
          break t;
        } catch {
        }
      typeof n == "function" || (n == null || n === !1 && e.indexOf("-") == -1 ? t.removeAttribute(e) : t.setAttribute(e, n));
    }
}
function Xf(t) {
  this.l[t.type + !1](mt.event ? mt.event(t) : t);
}
function Kf(t) {
  this.l[t.type + !0](mt.event ? mt.event(t) : t);
}
function zm(t, e, n, o, i, r, l, c, _) {
  var h, s, d, f, a, u, b, p, m, y, w, k, C, A, T, v = e.type;
  if (e.constructor !== void 0)
    return null;
  n.__h != null && (_ = n.__h, c = e.__e = n.__e, e.__h = null, r = [c]), (h = mt.__b) && h(e);
  try {
    t:
      if (typeof v == "function") {
        if (p = e.props, m = (h = v.contextType) && o[h.__c], y = h ? m ? m.props.value : h.__ : o, n.__c ? b = (s = e.__c = n.__c).__ = s.__E : ("prototype" in v && v.prototype.render ? e.__c = s = new v(p, y) : (e.__c = s = new qo(p, y), s.constructor = v, s.render = o$), m && m.sub(s), s.props = p, s.state || (s.state = {}), s.context = y, s.__n = o, d = s.__d = !0, s.__h = [], s._sb = []), s.__s == null && (s.__s = s.state), v.getDerivedStateFromProps != null && (s.__s == s.state && (s.__s = Be({}, s.__s)), Be(s.__s, v.getDerivedStateFromProps(p, s.__s))), f = s.props, a = s.state, d)
          v.getDerivedStateFromProps == null && s.componentWillMount != null && s.componentWillMount(), s.componentDidMount != null && s.__h.push(s.componentDidMount);
        else {
          if (v.getDerivedStateFromProps == null && p !== f && s.componentWillReceiveProps != null && s.componentWillReceiveProps(p, y), !s.__e && s.shouldComponentUpdate != null && s.shouldComponentUpdate(p, s.__s, y) === !1 || e.__v === n.__v) {
            for (s.props = p, s.state = s.__s, e.__v !== n.__v && (s.__d = !1), s.__v = e, e.__e = n.__e, e.__k = n.__k, e.__k.forEach(function(x) {
              x && (x.__ = e);
            }), w = 0; w < s._sb.length; w++)
              s.__h.push(s._sb[w]);
            s._sb = [], s.__h.length && l.push(s);
            break t;
          }
          s.componentWillUpdate != null && s.componentWillUpdate(p, s.__s, y), s.componentDidUpdate != null && s.__h.push(function() {
            s.componentDidUpdate(f, a, u);
          });
        }
        if (s.context = y, s.props = p, s.__v = e, s.__P = t, k = mt.__r, C = 0, "prototype" in v && v.prototype.render) {
          for (s.state = s.__s, s.__d = !1, k && k(e), h = s.render(s.props, s.state, s.context), A = 0; A < s._sb.length; A++)
            s.__h.push(s._sb[A]);
          s._sb = [];
        } else
          do
            s.__d = !1, k && k(e), h = s.render(s.props, s.state, s.context), s.state = s.__s;
          while (s.__d && ++C < 25);
        s.state = s.__s, s.getChildContext != null && (o = Be(Be({}, o), s.getChildContext())), d || s.getSnapshotBeforeUpdate == null || (u = s.getSnapshotBeforeUpdate(f, a)), T = h != null && h.type === Ra && h.key == null ? h.props.children : h, Fm(t, Array.isArray(T) ? T : [T], e, n, o, i, r, l, c, _), s.base = e.__e, e.__h = null, s.__h.length && l.push(s), b && (s.__E = s.__ = null), s.__e = !1;
      } else
        r == null && e.__v === n.__v ? (e.__k = n.__k, e.__e = n.__e) : e.__e = n$(n.__e, e, n, o, i, r, l, _);
    (h = mt.diffed) && h(e);
  } catch (x) {
    e.__v = null, (_ || r != null) && (e.__e = c, e.__h = !!_, r[r.indexOf(c)] = null), mt.__e(x, e, n);
  }
}
function e$(t, e) {
  mt.__c && mt.__c(e, t), t.some(function(n) {
    try {
      t = n.__h, n.__h = [], t.some(function(o) {
        o.call(n);
      });
    } catch (o) {
      mt.__e(o, n.__v);
    }
  });
}
function n$(t, e, n, o, i, r, l, c) {
  var _, h, s, d = n.props, f = e.props, a = e.type, u = 0;
  if (a === "svg" && (i = !0), r != null) {
    for (; u < r.length; u++)
      if ((_ = r[u]) && "setAttribute" in _ == !!a && (a ? _.localName === a : _.nodeType === 3)) {
        t = _, r[u] = null;
        break;
      }
  }
  if (t == null) {
    if (a === null)
      return document.createTextNode(f);
    t = i ? document.createElementNS("http://www.w3.org/2000/svg", a) : document.createElement(a, f.is && f), r = null, c = !1;
  }
  if (a === null)
    d === f || c && t.data === f || (t.data = f);
  else {
    if (r = r && Pm.call(t.childNodes), h = (d = n.props || Hm).dangerouslySetInnerHTML, s = f.dangerouslySetInnerHTML, !c) {
      if (r != null)
        for (d = {}, u = 0; u < t.attributes.length; u++)
          d[t.attributes[u].name] = t.attributes[u].value;
      (s || h) && (s && (h && s.__html == h.__html || s.__html === t.innerHTML) || (t.innerHTML = s && s.__html || ""));
    }
    if (t$(t, f, d, i, c), s)
      e.__k = [];
    else if (u = e.props.children, Fm(t, Array.isArray(u) ? u : [u], e, n, o, i && a !== "foreignObject", r, l, r ? r[0] : n.__k && vr(n, 0), c), r != null)
      for (u = r.length; u--; )
        r[u] != null && Im(r[u]);
    c || ("value" in f && (u = f.value) !== void 0 && (u !== t.value || a === "progress" && !u || a === "option" && u !== d.value) && Ti(t, "value", u, d.value, !1), "checked" in f && (u = f.checked) !== void 0 && u !== t.checked && Ti(t, "checked", u, d.checked, !1));
  }
  return t;
}
function Vm(t, e, n) {
  try {
    typeof t == "function" ? t(e) : t.current = e;
  } catch (o) {
    mt.__e(o, n);
  }
}
function Ym(t, e, n) {
  var o, i;
  if (mt.unmount && mt.unmount(t), (o = t.ref) && (o.current && o.current !== t.__e || Vm(o, null, e)), (o = t.__c) != null) {
    if (o.componentWillUnmount)
      try {
        o.componentWillUnmount();
      } catch (r) {
        mt.__e(r, e);
      }
    o.base = o.__P = null, t.__c = void 0;
  }
  if (o = t.__k)
    for (i = 0; i < o.length; i++)
      o[i] && Ym(o[i], e, n || typeof t.type != "function");
  n || t.__e == null || Im(t.__e), t.__ = t.__e = t.__d = void 0;
}
function o$(t, e, n) {
  return this.constructor(t, n);
}
Pm = Wm.slice, mt = { __e: function(t, e, n, o) {
  for (var i, r, l; e = e.__; )
    if ((i = e.__c) && !i.__)
      try {
        if ((r = i.constructor) && r.getDerivedStateFromError != null && (i.setState(r.getDerivedStateFromError(t)), l = i.__d), i.componentDidCatch != null && (i.componentDidCatch(t, o || {}), l = i.__d), l)
          return i.__E = i;
      } catch (c) {
        t = c;
      }
  throw t;
} }, Om = 0, qo.prototype.setState = function(t, e) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = Be({}, this.state), typeof t == "function" && (t = t(Be({}, n), this.props)), t && Be(n, t), t != null && this.__v && (e && this._sb.push(e), qf(this));
}, qo.prototype.forceUpdate = function(t) {
  this.__v && (this.__e = !0, t && this.__h.push(t), qf(this));
}, qo.prototype.render = Ra, Yo = [], Ei.__r = 0;
var r$ = 0;
function Ai(t, e, n, o, i) {
  var r, l, c = {};
  for (l in e)
    l == "ref" ? r = e[l] : c[l] = e[l];
  var _ = { type: t, props: c, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: --r$, __source: i, __self: o };
  if (typeof t == "function" && (r = t.defaultProps))
    for (l in r)
      c[l] === void 0 && (c[l] = r[l]);
  return mt.vnode && mt.vnode(_), _;
}
function s$({
  type: t,
  key: e,
  style: n,
  bounding: o,
  offsetX: i = 0,
  offsetY: r = 0,
  component: l,
  data: c,
  hidden: _,
  props: h,
  children: s,
  onRender: d,
  ...f
}) {
  if (_)
    return null;
  let a;
  d ? a = d(t, c) : l ? a = /* @__PURE__ */ Ai(l, { ...h }) : a = c;
  const { left: u, top: b, width: p, height: m } = o;
  return /* @__PURE__ */ Ai("div", { style: { width: p, height: m, left: u + i, top: b + r, ...n }, ...f, children: [
    a,
    s
  ] });
}
function i$(t, e, n = 0, o = 0) {
  const i = t.left + n, r = t.top + o;
  return !(i > e.left + e.width || r > e.top + e.height || i + t.width < e.left || r + t.height < e.top);
}
let l$ = class extends qo {
  render() {
    const { width: e, height: n, cells: o, left: i, top: r, visibleBounding: l, onRenderCell: c, style: _, children: h, offsetX: s = 0, offsetY: d = 0, ...f } = this.props, a = l ? o.filter((u) => i$(u.bounding, l, s, d)) : o;
    return /* @__PURE__ */ Ai("div", { style: { width: e, height: n, left: i, top: r, ..._ }, ...f, children: [
      a.map((u) => /* @__PURE__ */ Ai(s$, { offsetX: s, offsetY: d, ...u })),
      h
    ] });
  }
};
class Jf extends xt {
}
M(Jf, "NAME", "virtualgrid"), M(Jf, "Component", l$);
var Vt, Gr, Xr, me, $t, Z, Al, qm, Ll, Gm, Kr, Kc, Ml, Xm, Rl, Km, Jr, Jc, Dl, Jm, Nl, Zm, Pl, Qm;
class c$ {
  constructor(e, n = {}) {
    E(this, Al);
    E(this, Ll);
    E(this, Kr);
    E(this, Ml);
    E(this, Rl);
    E(this, Jr);
    E(this, Dl);
    E(this, Nl);
    E(this, Pl);
    E(this, Vt, void 0);
    E(this, Gr, void 0);
    E(this, Xr, void 0);
    E(this, me, void 0);
    E(this, $t, void 0);
    E(this, Z, new XMLHttpRequest());
    var o, i;
    if (H(this, $t, n), H(this, Vt, e instanceof HTMLFormElement ? e : document.querySelector(e)), !(g(this, Vt) instanceof HTMLFormElement))
      throw new Error("Param form must be a HTMLFormElement.");
    if (H(this, Xr, (this.formEl.method ?? n.method ?? "POST").toUpperCase()), !["GET", "POST"].includes(this.method))
      throw new Error('Method must be "GET" or "POST"!');
    if (this.method === "GET" && (g(this, $t).formType = "AJAX"), H(this, Gr, g(this, Vt).action ?? n.url ?? ""), !this.url)
      throw new Error("Form action is required!");
    (o = this.formEl.querySelector("[data-type=submit]")) == null || o.addEventListener("click", () => {
      this.submit();
    }), (i = this.formEl.querySelector("[data-type=reset]")) == null || i.addEventListener("click", () => {
      this.reset();
    });
  }
  get responseType() {
    return g(this, $t).responseType ?? "json";
  }
  get formType() {
    return g(this, $t).formType ?? "AJAX";
  }
  get url() {
    return g(this, Gr);
  }
  get method() {
    return g(this, Xr);
  }
  get formEl() {
    return g(this, Vt);
  }
  get onLoad() {
    return g(this, $t).onLoad;
  }
  get onError() {
    return g(this, $t).onError;
  }
  get onLoadend() {
    return g(this, $t).onLoadend;
  }
  get onLoadstart() {
    return g(this, $t).onLoadstart;
  }
  get onProgress() {
    return g(this, $t).onProgress;
  }
  get onAbort() {
    return g(this, $t).onAbort;
  }
  get onTimeout() {
    return g(this, $t).onTimeout;
  }
  get beforeSubmit() {
    return g(this, $t).beforeSubmit;
  }
  get formData() {
    return g(this, me);
  }
  get headers() {
    return g(this, $t).headers;
  }
  get rules() {
    return g(this, $t).rules;
  }
  get timeout() {
    return g(this, $t).timeout;
  }
  get status() {
    return g(this, Z).status;
  }
  get statusText() {
    return g(this, Z).statusText;
  }
  get readyState() {
    return g(this, Z).readyState;
  }
  get response() {
    return g(this, Z).response;
  }
  get responseXML() {
    return g(this, Z).responseXML;
  }
  get responseText() {
    return g(this, Z).responseText;
  }
  get responseURL() {
    return g(this, Z).responseURL;
  }
  get withCredentials() {
    return g(this, Z).withCredentials;
  }
  get upload() {
    return g(this, Z).upload;
  }
  submit() {
    W(this, Rl, Km).call(this), W(this, Ml, Xm).call(this) && (this.beforeSubmit && !this.beforeSubmit(this.formData) || (this.method === "POST" ? W(this, Pl, Qm).call(this) : W(this, Nl, Zm).call(this)));
  }
  abort() {
    g(this, Z).abort();
  }
  getAllResponseHeaders() {
    return g(this, Z).getAllResponseHeaders();
  }
  getResponseHeader(e) {
    return g(this, Z).getResponseHeader(e);
  }
  overrideMimeType(e) {
    return g(this, Z).overrideMimeType(e);
  }
  reset() {
    g(this, Vt).reset(), W(this, Kr, Kc).call(this);
  }
}
Vt = new WeakMap(), Gr = new WeakMap(), Xr = new WeakMap(), me = new WeakMap(), $t = new WeakMap(), Z = new WeakMap(), Al = new WeakSet(), qm = function(e, n) {
  const o = e.closest(".form-group");
  if (!o)
    throw new Error(".form-control must be in .form-group!");
  o.querySelectorAll(".form-tip").forEach((r) => r.remove());
  const i = document.createElement("div");
  i.innerText = n, i.classList.add("form-tip"), o.classList.add("has-error"), o.append(i);
}, Ll = new WeakSet(), Gm = function(e) {
  const n = e.closest(".form-group");
  if (!n)
    throw new Error(".form-control must be in .form-group!");
  n.classList.remove("has-error"), n.querySelectorAll(".form-tip").forEach((o) => o.remove());
}, Kr = new WeakSet(), Kc = function() {
  g(this, Vt).querySelectorAll(".form-control").forEach((n) => {
    W(this, Ll, Gm).call(this, n);
  });
}, Ml = new WeakSet(), Xm = function() {
  if (!this.rules || !Object.keys(this.rules).length)
    return !0;
  W(this, Kr, Kc).call(this);
  let e = !0;
  return g(this, Vt).querySelectorAll(".form-control:not(.disabled)").forEach((n) => {
    const { id: o, value: i } = n, r = this.rules[o];
    if (!r)
      return;
    const l = (c) => "required" in c && c.required && !i || "regexp" in c && c.regexp && !c.regexp.test(i) || "validate" in c && c.validate && !c.validate(i) ? (W(this, Al, qm).call(this, n, c.errMsg), e = !1) : !0;
    if (Array.isArray(r)) {
      for (const c of r)
        if (!l(c))
          break;
      return;
    }
    l(r);
  }), e;
}, Rl = new WeakSet(), Km = function() {
  const e = g(this, Vt).querySelectorAll(".form-control:not(.disabled)");
  if (this.formType === "AJAX") {
    H(this, me, {}), e.forEach(({ id: n, value: o }) => {
      g(this, me)[n] = o;
    });
    return;
  }
  H(this, me, new FormData()), e.forEach(({ id: n, value: o }) => {
    g(this, me).append(n, o);
  });
}, Jr = new WeakSet(), Jc = function() {
  this.headers && Object.entries(this.headers).forEach(([e, n]) => {
    g(this, Z).setRequestHeader(e, n);
  }), g(this, Z).responseType = this.responseType, this.onLoadstart && g(this, Z).addEventListener("loadstart", this.onLoadstart), this.onLoad && g(this, Z).addEventListener("load", this.onLoad), this.onLoadend && g(this, Z).addEventListener("loadend", this.onLoadend), this.onProgress && g(this, Z).addEventListener("progress", this.onProgress), this.onError && g(this, Z).addEventListener("error", this.onError), this.onAbort && g(this, Z).addEventListener("abort", this.onAbort), this.onTimeout && g(this, Z).addEventListener("timeout", this.onTimeout);
}, Dl = new WeakSet(), Jm = function(e) {
  return Object.entries(e).map(([n, o]) => `${encodeURIComponent(n)}=${encodeURIComponent(o)}`).join("&");
}, Nl = new WeakSet(), Zm = function() {
  g(this, Z).open("GET", `${this.url}?${W(this, Dl, Jm).call(this, g(this, me))}`), W(this, Jr, Jc).call(this), g(this, Z).send();
}, Pl = new WeakSet(), Qm = function() {
  g(this, Z).open("POST", this.url), W(this, Jr, Jc).call(this);
  const e = this.formType === "AJAX" ? JSON.stringify(this.formData) : this.formData;
  g(this, Z).send(e);
}, M(c$, "NAME", "zui.ajaxForm");
var Da, gt, tg, eg, Go, Zf, ng = {}, og = [], a$ = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function je(t, e) {
  for (var n in e)
    t[n] = e[n];
  return t;
}
function rg(t) {
  var e = t.parentNode;
  e && e.removeChild(t);
}
function Na(t, e, n) {
  var o, i, r, l = {};
  for (r in e)
    r == "key" ? o = e[r] : r == "ref" ? i = e[r] : l[r] = e[r];
  if (arguments.length > 2 && (l.children = arguments.length > 3 ? Da.call(arguments, 2) : n), typeof t == "function" && t.defaultProps != null)
    for (r in t.defaultProps)
      l[r] === void 0 && (l[r] = t.defaultProps[r]);
  return Ns(t, l, o, i, null);
}
function Ns(t, e, n, o, i) {
  var r = { type: t, props: e, key: n, ref: o, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: i ?? ++tg };
  return i == null && gt.vnode != null && gt.vnode(r), r;
}
function _$() {
  return { current: null };
}
function Pa(t) {
  return t.children;
}
function Xo(t, e) {
  this.props = t, this.context = e;
}
function br(t, e) {
  if (e == null)
    return t.__ ? br(t.__, t.__.__k.indexOf(t) + 1) : null;
  for (var n; e < t.__k.length; e++)
    if ((n = t.__k[e]) != null && n.__e != null)
      return n.__e;
  return typeof t.type == "function" ? br(t) : null;
}
function sg(t) {
  var e, n;
  if ((t = t.__) != null && t.__c != null) {
    for (t.__e = t.__c.base = null, e = 0; e < t.__k.length; e++)
      if ((n = t.__k[e]) != null && n.__e != null) {
        t.__e = t.__c.base = n.__e;
        break;
      }
    return sg(t);
  }
}
function Qf(t) {
  (!t.__d && (t.__d = !0) && Go.push(t) && !Li.__r++ || Zf !== gt.debounceRendering) && ((Zf = gt.debounceRendering) || setTimeout)(Li);
}
function Li() {
  for (var t; Li.__r = Go.length; )
    t = Go.sort(function(e, n) {
      return e.__v.__b - n.__v.__b;
    }), Go = [], t.some(function(e) {
      var n, o, i, r, l, c;
      e.__d && (l = (r = (n = e).__v).__e, (c = n.__P) && (o = [], (i = je({}, r)).__v = r.__v + 1, ag(c, r, i, n.__n, c.ownerSVGElement !== void 0, r.__h != null ? [l] : null, o, l ?? br(r), r.__h), u$(o, r), r.__e != l && sg(r)));
    });
}
function ig(t, e, n, o, i, r, l, c, _, h) {
  var s, d, f, a, u, b, p, m = o && o.__k || og, y = m.length;
  for (n.__k = [], s = 0; s < e.length; s++)
    if ((a = n.__k[s] = (a = e[s]) == null || typeof a == "boolean" ? null : typeof a == "string" || typeof a == "number" || typeof a == "bigint" ? Ns(null, a, null, null, a) : Array.isArray(a) ? Ns(Pa, { children: a }, null, null, null) : a.__b > 0 ? Ns(a.type, a.props, a.key, a.ref ? a.ref : null, a.__v) : a) != null) {
      if (a.__ = n, a.__b = n.__b + 1, (f = m[s]) === null || f && a.key == f.key && a.type === f.type)
        m[s] = void 0;
      else
        for (d = 0; d < y; d++) {
          if ((f = m[d]) && a.key == f.key && a.type === f.type) {
            m[d] = void 0;
            break;
          }
          f = null;
        }
      ag(t, a, f = f || ng, i, r, l, c, _, h), u = a.__e, (d = a.ref) && f.ref != d && (p || (p = []), f.ref && p.push(f.ref, null, a), p.push(d, a.__c || u, a)), u != null ? (b == null && (b = u), typeof a.type == "function" && a.__k === f.__k ? a.__d = _ = lg(a, _, t) : _ = cg(t, a, f, m, u, _), typeof n.type == "function" && (n.__d = _)) : _ && f.__e == _ && _.parentNode != t && (_ = br(f));
    }
  for (n.__e = b, s = y; s--; )
    m[s] != null && fg(m[s], m[s]);
  if (p)
    for (s = 0; s < p.length; s++)
      _g(p[s], p[++s], p[++s]);
}
function lg(t, e, n) {
  for (var o, i = t.__k, r = 0; i && r < i.length; r++)
    (o = i[r]) && (o.__ = t, e = typeof o.type == "function" ? lg(o, e, n) : cg(n, o, o, i, o.__e, e));
  return e;
}
function cg(t, e, n, o, i, r) {
  var l, c, _;
  if (e.__d !== void 0)
    l = e.__d, e.__d = void 0;
  else if (n == null || i != r || i.parentNode == null)
    t:
      if (r == null || r.parentNode !== t)
        t.appendChild(i), l = null;
      else {
        for (c = r, _ = 0; (c = c.nextSibling) && _ < o.length; _ += 2)
          if (c == i)
            break t;
        t.insertBefore(i, r), l = r;
      }
  return l !== void 0 ? l : i.nextSibling;
}
function f$(t, e, n, o, i) {
  var r;
  for (r in n)
    r === "children" || r === "key" || r in e || Mi(t, r, null, n[r], o);
  for (r in e)
    i && typeof e[r] != "function" || r === "children" || r === "key" || r === "value" || r === "checked" || n[r] === e[r] || Mi(t, r, e[r], n[r], o);
}
function tu(t, e, n) {
  e[0] === "-" ? t.setProperty(e, n) : t[e] = n == null ? "" : typeof n != "number" || a$.test(e) ? n : n + "px";
}
function Mi(t, e, n, o, i) {
  var r;
  t:
    if (e === "style")
      if (typeof n == "string")
        t.style.cssText = n;
      else {
        if (typeof o == "string" && (t.style.cssText = o = ""), o)
          for (e in o)
            n && e in n || tu(t.style, e, "");
        if (n)
          for (e in n)
            o && n[e] === o[e] || tu(t.style, e, n[e]);
      }
    else if (e[0] === "o" && e[1] === "n")
      r = e !== (e = e.replace(/Capture$/, "")), e = e.toLowerCase() in t ? e.toLowerCase().slice(2) : e.slice(2), t.l || (t.l = {}), t.l[e + r] = n, n ? o || t.addEventListener(e, r ? nu : eu, r) : t.removeEventListener(e, r ? nu : eu, r);
    else if (e !== "dangerouslySetInnerHTML") {
      if (i)
        e = e.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
      else if (e !== "href" && e !== "list" && e !== "form" && e !== "tabIndex" && e !== "download" && e in t)
        try {
          t[e] = n ?? "";
          break t;
        } catch {
        }
      typeof n == "function" || (n == null || n === !1 && e.indexOf("-") == -1 ? t.removeAttribute(e) : t.setAttribute(e, n));
    }
}
function eu(t) {
  this.l[t.type + !1](gt.event ? gt.event(t) : t);
}
function nu(t) {
  this.l[t.type + !0](gt.event ? gt.event(t) : t);
}
function ag(t, e, n, o, i, r, l, c, _) {
  var h, s, d, f, a, u, b, p, m, y, w, k, C, A, T, v = e.type;
  if (e.constructor !== void 0)
    return null;
  n.__h != null && (_ = n.__h, c = e.__e = n.__e, e.__h = null, r = [c]), (h = gt.__b) && h(e);
  try {
    t:
      if (typeof v == "function") {
        if (p = e.props, m = (h = v.contextType) && o[h.__c], y = h ? m ? m.props.value : h.__ : o, n.__c ? b = (s = e.__c = n.__c).__ = s.__E : ("prototype" in v && v.prototype.render ? e.__c = s = new v(p, y) : (e.__c = s = new Xo(p, y), s.constructor = v, s.render = d$), m && m.sub(s), s.props = p, s.state || (s.state = {}), s.context = y, s.__n = o, d = s.__d = !0, s.__h = [], s._sb = []), s.__s == null && (s.__s = s.state), v.getDerivedStateFromProps != null && (s.__s == s.state && (s.__s = je({}, s.__s)), je(s.__s, v.getDerivedStateFromProps(p, s.__s))), f = s.props, a = s.state, d)
          v.getDerivedStateFromProps == null && s.componentWillMount != null && s.componentWillMount(), s.componentDidMount != null && s.__h.push(s.componentDidMount);
        else {
          if (v.getDerivedStateFromProps == null && p !== f && s.componentWillReceiveProps != null && s.componentWillReceiveProps(p, y), !s.__e && s.shouldComponentUpdate != null && s.shouldComponentUpdate(p, s.__s, y) === !1 || e.__v === n.__v) {
            for (s.props = p, s.state = s.__s, e.__v !== n.__v && (s.__d = !1), s.__v = e, e.__e = n.__e, e.__k = n.__k, e.__k.forEach(function(x) {
              x && (x.__ = e);
            }), w = 0; w < s._sb.length; w++)
              s.__h.push(s._sb[w]);
            s._sb = [], s.__h.length && l.push(s);
            break t;
          }
          s.componentWillUpdate != null && s.componentWillUpdate(p, s.__s, y), s.componentDidUpdate != null && s.__h.push(function() {
            s.componentDidUpdate(f, a, u);
          });
        }
        if (s.context = y, s.props = p, s.__v = e, s.__P = t, k = gt.__r, C = 0, "prototype" in v && v.prototype.render) {
          for (s.state = s.__s, s.__d = !1, k && k(e), h = s.render(s.props, s.state, s.context), A = 0; A < s._sb.length; A++)
            s.__h.push(s._sb[A]);
          s._sb = [];
        } else
          do
            s.__d = !1, k && k(e), h = s.render(s.props, s.state, s.context), s.state = s.__s;
          while (s.__d && ++C < 25);
        s.state = s.__s, s.getChildContext != null && (o = je(je({}, o), s.getChildContext())), d || s.getSnapshotBeforeUpdate == null || (u = s.getSnapshotBeforeUpdate(f, a)), T = h != null && h.type === Pa && h.key == null ? h.props.children : h, ig(t, Array.isArray(T) ? T : [T], e, n, o, i, r, l, c, _), s.base = e.__e, e.__h = null, s.__h.length && l.push(s), b && (s.__E = s.__ = null), s.__e = !1;
      } else
        r == null && e.__v === n.__v ? (e.__k = n.__k, e.__e = n.__e) : e.__e = h$(n.__e, e, n, o, i, r, l, _);
    (h = gt.diffed) && h(e);
  } catch (x) {
    e.__v = null, (_ || r != null) && (e.__e = c, e.__h = !!_, r[r.indexOf(c)] = null), gt.__e(x, e, n);
  }
}
function u$(t, e) {
  gt.__c && gt.__c(e, t), t.some(function(n) {
    try {
      t = n.__h, n.__h = [], t.some(function(o) {
        o.call(n);
      });
    } catch (o) {
      gt.__e(o, n.__v);
    }
  });
}
function h$(t, e, n, o, i, r, l, c) {
  var _, h, s, d = n.props, f = e.props, a = e.type, u = 0;
  if (a === "svg" && (i = !0), r != null) {
    for (; u < r.length; u++)
      if ((_ = r[u]) && "setAttribute" in _ == !!a && (a ? _.localName === a : _.nodeType === 3)) {
        t = _, r[u] = null;
        break;
      }
  }
  if (t == null) {
    if (a === null)
      return document.createTextNode(f);
    t = i ? document.createElementNS("http://www.w3.org/2000/svg", a) : document.createElement(a, f.is && f), r = null, c = !1;
  }
  if (a === null)
    d === f || c && t.data === f || (t.data = f);
  else {
    if (r = r && Da.call(t.childNodes), h = (d = n.props || ng).dangerouslySetInnerHTML, s = f.dangerouslySetInnerHTML, !c) {
      if (r != null)
        for (d = {}, u = 0; u < t.attributes.length; u++)
          d[t.attributes[u].name] = t.attributes[u].value;
      (s || h) && (s && (h && s.__html == h.__html || s.__html === t.innerHTML) || (t.innerHTML = s && s.__html || ""));
    }
    if (f$(t, f, d, i, c), s)
      e.__k = [];
    else if (u = e.props.children, ig(t, Array.isArray(u) ? u : [u], e, n, o, i && a !== "foreignObject", r, l, r ? r[0] : n.__k && br(n, 0), c), r != null)
      for (u = r.length; u--; )
        r[u] != null && rg(r[u]);
    c || ("value" in f && (u = f.value) !== void 0 && (u !== t.value || a === "progress" && !u || a === "option" && u !== d.value) && Mi(t, "value", u, d.value, !1), "checked" in f && (u = f.checked) !== void 0 && u !== t.checked && Mi(t, "checked", u, d.checked, !1));
  }
  return t;
}
function _g(t, e, n) {
  try {
    typeof t == "function" ? t(e) : t.current = e;
  } catch (o) {
    gt.__e(o, n);
  }
}
function fg(t, e, n) {
  var o, i;
  if (gt.unmount && gt.unmount(t), (o = t.ref) && (o.current && o.current !== t.__e || _g(o, null, e)), (o = t.__c) != null) {
    if (o.componentWillUnmount)
      try {
        o.componentWillUnmount();
      } catch (r) {
        gt.__e(r, e);
      }
    o.base = o.__P = null, t.__c = void 0;
  }
  if (o = t.__k)
    for (i = 0; i < o.length; i++)
      o[i] && fg(o[i], e, n || typeof t.type != "function");
  n || t.__e == null || rg(t.__e), t.__ = t.__e = t.__d = void 0;
}
function d$(t, e, n) {
  return this.constructor(t, n);
}
Da = og.slice, gt = { __e: function(t, e, n, o) {
  for (var i, r, l; e = e.__; )
    if ((i = e.__c) && !i.__)
      try {
        if ((r = i.constructor) && r.getDerivedStateFromError != null && (i.setState(r.getDerivedStateFromError(t)), l = i.__d), i.componentDidCatch != null && (i.componentDidCatch(t, o || {}), l = i.__d), l)
          return i.__E = i;
      } catch (c) {
        t = c;
      }
  throw t;
} }, tg = 0, eg = function(t) {
  return t != null && t.constructor === void 0;
}, Xo.prototype.setState = function(t, e) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = je({}, this.state), typeof t == "function" && (t = t(je({}, n), this.props)), t && je(n, t), t != null && this.__v && (e && this._sb.push(e), Qf(this));
}, Xo.prototype.forceUpdate = function(t) {
  this.__v && (this.__e = !0, t && this.__h.push(t), Qf(this));
}, Xo.prototype.render = Pa, Go = [], Li.__r = 0;
var p$ = 0;
function Y(t, e, n, o, i) {
  var r, l, c = {};
  for (l in e)
    l == "ref" ? r = e[l] : c[l] = e[l];
  var _ = { type: t, props: c, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: --p$, __source: i, __self: o };
  if (typeof t == "function" && (r = t.defaultProps))
    for (l in r)
      c[l] === void 0 && (c[l] = r[l]);
  return gt.vnode && gt.vnode(_), _;
}
let m$ = (t = 21) => crypto.getRandomValues(new Uint8Array(t)).reduce((e, n) => (n &= 63, n < 36 ? e += n.toString(36) : n < 62 ? e += (n - 26).toString(36).toUpperCase() : n > 62 ? e += "-" : e += "_", e), "");
var ug, yt, hg, Ko, ou, dg = {}, pg = [], g$ = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function ze(t, e) {
  for (var n in e)
    t[n] = e[n];
  return t;
}
function mg(t) {
  var e = t.parentNode;
  e && e.removeChild(t);
}
function Cc(t, e, n, o, i) {
  var r = { type: t, props: e, key: n, ref: o, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: i ?? ++hg };
  return i == null && yt.vnode != null && yt.vnode(r), r;
}
function Oa(t) {
  return t.children;
}
function Jo(t, e) {
  this.props = t, this.context = e;
}
function wr(t, e) {
  if (e == null)
    return t.__ ? wr(t.__, t.__.__k.indexOf(t) + 1) : null;
  for (var n; e < t.__k.length; e++)
    if ((n = t.__k[e]) != null && n.__e != null)
      return n.__e;
  return typeof t.type == "function" ? wr(t) : null;
}
function gg(t) {
  var e, n;
  if ((t = t.__) != null && t.__c != null) {
    for (t.__e = t.__c.base = null, e = 0; e < t.__k.length; e++)
      if ((n = t.__k[e]) != null && n.__e != null) {
        t.__e = t.__c.base = n.__e;
        break;
      }
    return gg(t);
  }
}
function ru(t) {
  (!t.__d && (t.__d = !0) && Ko.push(t) && !Ri.__r++ || ou !== yt.debounceRendering) && ((ou = yt.debounceRendering) || setTimeout)(Ri);
}
function Ri() {
  for (var t; Ri.__r = Ko.length; )
    t = Ko.sort(function(e, n) {
      return e.__v.__b - n.__v.__b;
    }), Ko = [], t.some(function(e) {
      var n, o, i, r, l, c;
      e.__d && (l = (r = (n = e).__v).__e, (c = n.__P) && (o = [], (i = ze({}, r)).__v = r.__v + 1, wg(c, r, i, n.__n, c.ownerSVGElement !== void 0, r.__h != null ? [l] : null, o, l ?? wr(r), r.__h), v$(o, r), r.__e != l && gg(r)));
    });
}
function yg(t, e, n, o, i, r, l, c, _, h) {
  var s, d, f, a, u, b, p, m = o && o.__k || pg, y = m.length;
  for (n.__k = [], s = 0; s < e.length; s++)
    if ((a = n.__k[s] = (a = e[s]) == null || typeof a == "boolean" ? null : typeof a == "string" || typeof a == "number" || typeof a == "bigint" ? Cc(null, a, null, null, a) : Array.isArray(a) ? Cc(Oa, { children: a }, null, null, null) : a.__b > 0 ? Cc(a.type, a.props, a.key, a.ref ? a.ref : null, a.__v) : a) != null) {
      if (a.__ = n, a.__b = n.__b + 1, (f = m[s]) === null || f && a.key == f.key && a.type === f.type)
        m[s] = void 0;
      else
        for (d = 0; d < y; d++) {
          if ((f = m[d]) && a.key == f.key && a.type === f.type) {
            m[d] = void 0;
            break;
          }
          f = null;
        }
      wg(t, a, f = f || dg, i, r, l, c, _, h), u = a.__e, (d = a.ref) && f.ref != d && (p || (p = []), f.ref && p.push(f.ref, null, a), p.push(d, a.__c || u, a)), u != null ? (b == null && (b = u), typeof a.type == "function" && a.__k === f.__k ? a.__d = _ = vg(a, _, t) : _ = bg(t, a, f, m, u, _), typeof n.type == "function" && (n.__d = _)) : _ && f.__e == _ && _.parentNode != t && (_ = wr(f));
    }
  for (n.__e = b, s = y; s--; )
    m[s] != null && kg(m[s], m[s]);
  if (p)
    for (s = 0; s < p.length; s++)
      $g(p[s], p[++s], p[++s]);
}
function vg(t, e, n) {
  for (var o, i = t.__k, r = 0; i && r < i.length; r++)
    (o = i[r]) && (o.__ = t, e = typeof o.type == "function" ? vg(o, e, n) : bg(n, o, o, i, o.__e, e));
  return e;
}
function bg(t, e, n, o, i, r) {
  var l, c, _;
  if (e.__d !== void 0)
    l = e.__d, e.__d = void 0;
  else if (n == null || i != r || i.parentNode == null)
    t:
      if (r == null || r.parentNode !== t)
        t.appendChild(i), l = null;
      else {
        for (c = r, _ = 0; (c = c.nextSibling) && _ < o.length; _ += 2)
          if (c == i)
            break t;
        t.insertBefore(i, r), l = r;
      }
  return l !== void 0 ? l : i.nextSibling;
}
function y$(t, e, n, o, i) {
  var r;
  for (r in n)
    r === "children" || r === "key" || r in e || Di(t, r, null, n[r], o);
  for (r in e)
    i && typeof e[r] != "function" || r === "children" || r === "key" || r === "value" || r === "checked" || n[r] === e[r] || Di(t, r, e[r], n[r], o);
}
function su(t, e, n) {
  e[0] === "-" ? t.setProperty(e, n) : t[e] = n == null ? "" : typeof n != "number" || g$.test(e) ? n : n + "px";
}
function Di(t, e, n, o, i) {
  var r;
  t:
    if (e === "style")
      if (typeof n == "string")
        t.style.cssText = n;
      else {
        if (typeof o == "string" && (t.style.cssText = o = ""), o)
          for (e in o)
            n && e in n || su(t.style, e, "");
        if (n)
          for (e in n)
            o && n[e] === o[e] || su(t.style, e, n[e]);
      }
    else if (e[0] === "o" && e[1] === "n")
      r = e !== (e = e.replace(/Capture$/, "")), e = e.toLowerCase() in t ? e.toLowerCase().slice(2) : e.slice(2), t.l || (t.l = {}), t.l[e + r] = n, n ? o || t.addEventListener(e, r ? lu : iu, r) : t.removeEventListener(e, r ? lu : iu, r);
    else if (e !== "dangerouslySetInnerHTML") {
      if (i)
        e = e.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
      else if (e !== "href" && e !== "list" && e !== "form" && e !== "tabIndex" && e !== "download" && e in t)
        try {
          t[e] = n ?? "";
          break t;
        } catch {
        }
      typeof n == "function" || (n == null || n === !1 && e.indexOf("-") == -1 ? t.removeAttribute(e) : t.setAttribute(e, n));
    }
}
function iu(t) {
  this.l[t.type + !1](yt.event ? yt.event(t) : t);
}
function lu(t) {
  this.l[t.type + !0](yt.event ? yt.event(t) : t);
}
function wg(t, e, n, o, i, r, l, c, _) {
  var h, s, d, f, a, u, b, p, m, y, w, k, C, A, T, v = e.type;
  if (e.constructor !== void 0)
    return null;
  n.__h != null && (_ = n.__h, c = e.__e = n.__e, e.__h = null, r = [c]), (h = yt.__b) && h(e);
  try {
    t:
      if (typeof v == "function") {
        if (p = e.props, m = (h = v.contextType) && o[h.__c], y = h ? m ? m.props.value : h.__ : o, n.__c ? b = (s = e.__c = n.__c).__ = s.__E : ("prototype" in v && v.prototype.render ? e.__c = s = new v(p, y) : (e.__c = s = new Jo(p, y), s.constructor = v, s.render = w$), m && m.sub(s), s.props = p, s.state || (s.state = {}), s.context = y, s.__n = o, d = s.__d = !0, s.__h = [], s._sb = []), s.__s == null && (s.__s = s.state), v.getDerivedStateFromProps != null && (s.__s == s.state && (s.__s = ze({}, s.__s)), ze(s.__s, v.getDerivedStateFromProps(p, s.__s))), f = s.props, a = s.state, d)
          v.getDerivedStateFromProps == null && s.componentWillMount != null && s.componentWillMount(), s.componentDidMount != null && s.__h.push(s.componentDidMount);
        else {
          if (v.getDerivedStateFromProps == null && p !== f && s.componentWillReceiveProps != null && s.componentWillReceiveProps(p, y), !s.__e && s.shouldComponentUpdate != null && s.shouldComponentUpdate(p, s.__s, y) === !1 || e.__v === n.__v) {
            for (s.props = p, s.state = s.__s, e.__v !== n.__v && (s.__d = !1), s.__v = e, e.__e = n.__e, e.__k = n.__k, e.__k.forEach(function(x) {
              x && (x.__ = e);
            }), w = 0; w < s._sb.length; w++)
              s.__h.push(s._sb[w]);
            s._sb = [], s.__h.length && l.push(s);
            break t;
          }
          s.componentWillUpdate != null && s.componentWillUpdate(p, s.__s, y), s.componentDidUpdate != null && s.__h.push(function() {
            s.componentDidUpdate(f, a, u);
          });
        }
        if (s.context = y, s.props = p, s.__v = e, s.__P = t, k = yt.__r, C = 0, "prototype" in v && v.prototype.render) {
          for (s.state = s.__s, s.__d = !1, k && k(e), h = s.render(s.props, s.state, s.context), A = 0; A < s._sb.length; A++)
            s.__h.push(s._sb[A]);
          s._sb = [];
        } else
          do
            s.__d = !1, k && k(e), h = s.render(s.props, s.state, s.context), s.state = s.__s;
          while (s.__d && ++C < 25);
        s.state = s.__s, s.getChildContext != null && (o = ze(ze({}, o), s.getChildContext())), d || s.getSnapshotBeforeUpdate == null || (u = s.getSnapshotBeforeUpdate(f, a)), T = h != null && h.type === Oa && h.key == null ? h.props.children : h, yg(t, Array.isArray(T) ? T : [T], e, n, o, i, r, l, c, _), s.base = e.__e, e.__h = null, s.__h.length && l.push(s), b && (s.__E = s.__ = null), s.__e = !1;
      } else
        r == null && e.__v === n.__v ? (e.__k = n.__k, e.__e = n.__e) : e.__e = b$(n.__e, e, n, o, i, r, l, _);
    (h = yt.diffed) && h(e);
  } catch (x) {
    e.__v = null, (_ || r != null) && (e.__e = c, e.__h = !!_, r[r.indexOf(c)] = null), yt.__e(x, e, n);
  }
}
function v$(t, e) {
  yt.__c && yt.__c(e, t), t.some(function(n) {
    try {
      t = n.__h, n.__h = [], t.some(function(o) {
        o.call(n);
      });
    } catch (o) {
      yt.__e(o, n.__v);
    }
  });
}
function b$(t, e, n, o, i, r, l, c) {
  var _, h, s, d = n.props, f = e.props, a = e.type, u = 0;
  if (a === "svg" && (i = !0), r != null) {
    for (; u < r.length; u++)
      if ((_ = r[u]) && "setAttribute" in _ == !!a && (a ? _.localName === a : _.nodeType === 3)) {
        t = _, r[u] = null;
        break;
      }
  }
  if (t == null) {
    if (a === null)
      return document.createTextNode(f);
    t = i ? document.createElementNS("http://www.w3.org/2000/svg", a) : document.createElement(a, f.is && f), r = null, c = !1;
  }
  if (a === null)
    d === f || c && t.data === f || (t.data = f);
  else {
    if (r = r && ug.call(t.childNodes), h = (d = n.props || dg).dangerouslySetInnerHTML, s = f.dangerouslySetInnerHTML, !c) {
      if (r != null)
        for (d = {}, u = 0; u < t.attributes.length; u++)
          d[t.attributes[u].name] = t.attributes[u].value;
      (s || h) && (s && (h && s.__html == h.__html || s.__html === t.innerHTML) || (t.innerHTML = s && s.__html || ""));
    }
    if (y$(t, f, d, i, c), s)
      e.__k = [];
    else if (u = e.props.children, yg(t, Array.isArray(u) ? u : [u], e, n, o, i && a !== "foreignObject", r, l, r ? r[0] : n.__k && wr(n, 0), c), r != null)
      for (u = r.length; u--; )
        r[u] != null && mg(r[u]);
    c || ("value" in f && (u = f.value) !== void 0 && (u !== t.value || a === "progress" && !u || a === "option" && u !== d.value) && Di(t, "value", u, d.value, !1), "checked" in f && (u = f.checked) !== void 0 && u !== t.checked && Di(t, "checked", u, d.checked, !1));
  }
  return t;
}
function $g(t, e, n) {
  try {
    typeof t == "function" ? t(e) : t.current = e;
  } catch (o) {
    yt.__e(o, n);
  }
}
function kg(t, e, n) {
  var o, i;
  if (yt.unmount && yt.unmount(t), (o = t.ref) && (o.current && o.current !== t.__e || $g(o, null, e)), (o = t.__c) != null) {
    if (o.componentWillUnmount)
      try {
        o.componentWillUnmount();
      } catch (r) {
        yt.__e(r, e);
      }
    o.base = o.__P = null, t.__c = void 0;
  }
  if (o = t.__k)
    for (i = 0; i < o.length; i++)
      o[i] && kg(o[i], e, n || typeof t.type != "function");
  n || t.__e == null || mg(t.__e), t.__ = t.__e = t.__d = void 0;
}
function w$(t, e, n) {
  return this.constructor(t, n);
}
ug = pg.slice, yt = { __e: function(t, e, n, o) {
  for (var i, r, l; e = e.__; )
    if ((i = e.__c) && !i.__)
      try {
        if ((r = i.constructor) && r.getDerivedStateFromError != null && (i.setState(r.getDerivedStateFromError(t)), l = i.__d), i.componentDidCatch != null && (i.componentDidCatch(t, o || {}), l = i.__d), l)
          return i.__E = i;
      } catch (c) {
        t = c;
      }
  throw t;
} }, hg = 0, Jo.prototype.setState = function(t, e) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = ze({}, this.state), typeof t == "function" && (t = t(ze({}, n), this.props)), t && ze(n, t), t != null && this.__v && (e && this._sb.push(e), ru(this));
}, Jo.prototype.forceUpdate = function(t) {
  this.__v && (this.__e = !0, t && this.__h.push(t), ru(this));
}, Jo.prototype.render = Oa, Ko = [], Ri.__r = 0;
var $$ = 0;
function cu(t, e, n, o, i) {
  var r, l, c = {};
  for (l in e)
    l == "ref" ? r = e[l] : c[l] = e[l];
  var _ = { type: t, props: c, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: --$$, __source: i, __self: o };
  if (typeof t == "function" && (r = t.defaultProps))
    for (l in r)
      c[l] === void 0 && (c[l] = r[l]);
  return yt.vnode && yt.vnode(_), _;
}
var fn, un;
class au extends Jo {
  constructor(n) {
    super(n);
    E(this, fn, 0);
    E(this, un, null);
    M(this, "_handleWheel", (n) => {
      const { wheelContainer: o } = this.props, i = n.target;
      if (!(!i || !o) && (typeof o == "string" && i.closest(o) || typeof o == "object")) {
        const r = (this.props.type === "horz" ? n.deltaX : n.deltaY) * (this.props.wheelSpeed ?? 1);
        this.scrollOffset(r) && n.preventDefault();
      }
    });
    M(this, "_handleMouseMove", (n) => {
      const { dragStart: o } = this.state;
      o && (g(this, fn) && cancelAnimationFrame(g(this, fn)), H(this, fn, requestAnimationFrame(() => {
        const i = this.props.type === "horz" ? n.clientX - o.x : n.clientY - o.y;
        this.scroll(o.offset + i * this.props.scrollSize / this.props.clientSize), H(this, fn, 0);
      })), n.preventDefault());
    });
    M(this, "_handleMouseUp", () => {
      this.state.dragStart && this.setState({
        dragStart: !1
      });
    });
    M(this, "_handleMouseDown", (n) => {
      this.state.dragStart || this.setState({ dragStart: { x: n.clientX, y: n.clientY, offset: this.scrollPos } }), n.stopPropagation();
    });
    M(this, "_handleClick", (n) => {
      const o = n.currentTarget;
      if (!o)
        return;
      const i = o.getBoundingClientRect(), { type: r, clientSize: l, scrollSize: c } = this.props, _ = (r === "horz" ? n.clientX - i.left : n.clientY - i.top) - this.barSize / 2;
      this.scroll(_ * c / l), n.preventDefault();
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
    n && (H(this, un, typeof n == "string" ? document : n.current), g(this, un).addEventListener("wheel", this._handleWheel, { passive: !1 }));
  }
  componentWillUnmount() {
    document.removeEventListener("mousemove", this._handleMouseMove), document.removeEventListener("mouseup", this._handleMouseUp), g(this, un) && g(this, un).removeEventListener("wheel", this._handleWheel);
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
      left: c,
      top: _,
      bottom: h,
      right: s
    } = this.props, { maxScrollPos: d, scrollPos: f } = this, { dragStart: a } = this.state, u = {
      left: c,
      top: _,
      bottom: h,
      right: s,
      ...l
    }, b = {};
    return o === "horz" ? (u.height = i, u.width = n, b.width = this.barSize, b.left = Math.round(Math.min(d, f) * (n - b.width) / d)) : (u.width = i, u.height = n, b.height = this.barSize, b.top = Math.round(Math.min(d, f) * (n - b.height) / d)), /* @__PURE__ */ cu(
      "div",
      {
        className: F("scrollbar", r, {
          "is-vert": o === "vert",
          "is-horz": o === "horz",
          "is-dragging": a
        }),
        style: u,
        onMouseDown: this._handleClick,
        children: /* @__PURE__ */ cu(
          "div",
          {
            className: "scrollbar-bar",
            style: b,
            onMouseDown: this._handleMouseDown
          }
        )
      }
    );
  }
}
fn = new WeakMap(), un = new WeakMap();
function _u(t, e, n) {
  return t && (e && (t = Math.max(e, t)), n && (t = Math.min(n, t))), t;
}
function xg({ col: t, className: e, height: n, row: o, onRenderCell: i, style: r, outerStyle: l, children: c, outerClass: _, ...h }) {
  var v;
  const s = {
    left: t.left,
    width: t.realWidth,
    height: n,
    ...l
  }, { align: d, border: f } = t.setting, a = {
    justifyContent: d ? d === "left" ? "start" : d === "right" ? "end" : d : void 0,
    ...t.setting.cellStyle,
    ...r
  }, u = ["dtable-cell", _, t.setting.className, {
    "has-border-left": f === !0 || f === "left",
    "has-border-right": f === !0 || f === "right"
  }], b = ["dtable-cell-content", e], p = [c ?? ((v = o.data) == null ? void 0 : v[t.name]) ?? ""], m = i ? i(p, { row: o, col: t }, Na) : p, y = [], w = [], k = {}, C = {};
  let A = "div";
  m == null || m.forEach((x) => {
    if (typeof x == "object" && x && !eg(x) && ("html" in x || "className" in x || "style" in x || "attrs" in x || "children" in x || "tagName" in x)) {
      const R = x.outer ? y : w;
      x.html ? R.push(/* @__PURE__ */ Y("div", { className: F("dtable-cell-html", x.className), style: x.style, dangerouslySetInnerHTML: { __html: x.html }, ...x.attrs ?? {} })) : (x.style && Object.assign(x.outer ? s : a, x.style), x.className && (x.outer ? u : b).push(x.className), x.children && R.push(x.children), x.attrs && Object.assign(x.outer ? k : C, x.attrs)), x.tagName && !x.outer && (A = x.tagName);
    } else
      w.push(x);
  });
  const T = A;
  return /* @__PURE__ */ Y(
    "div",
    {
      className: F(u),
      style: s,
      "data-col": t.name,
      ...h,
      ...k,
      children: [
        w.length > 0 && /* @__PURE__ */ Y(T, { className: F(b), style: a, ...C, children: w }),
        y
      ]
    }
  );
}
function Ec({ row: t, className: e, top: n = 0, left: o = 0, width: i, height: r, cols: l, CellComponent: c = xg, onRenderCell: _ }) {
  return /* @__PURE__ */ Y("div", { className: F("dtable-cells", e), style: { top: n, left: o, width: i, height: r }, children: l.map((h) => h.visible ? /* @__PURE__ */ Y(
    c,
    {
      col: h,
      row: t,
      onRenderCell: _
    },
    h.name
  ) : null) });
}
function Sg({
  row: t,
  className: e,
  top: n,
  height: o,
  fixedLeftCols: i,
  fixedRightCols: r,
  scrollCols: l,
  fixedLeftWidth: c,
  scrollWidth: _,
  scrollColsWidth: h,
  fixedRightWidth: s,
  scrollLeft: d,
  CellComponent: f = xg,
  onRenderCell: a,
  style: u,
  ...b
}) {
  let p = null;
  i != null && i.length && (p = /* @__PURE__ */ Y(
    Ec,
    {
      className: "dtable-fixed-left",
      cols: i,
      width: c,
      row: t,
      CellComponent: f,
      onRenderCell: a
    }
  ));
  let m = null;
  l != null && l.length && (m = /* @__PURE__ */ Y(
    Ec,
    {
      className: "dtable-flexable",
      cols: l,
      left: c - d,
      width: Math.max(_, h),
      row: t,
      CellComponent: f,
      onRenderCell: a
    }
  ));
  let y = null;
  r != null && r.length && (y = /* @__PURE__ */ Y(
    Ec,
    {
      className: "dtable-fixed-right",
      cols: r,
      left: c + _,
      width: s,
      row: t,
      CellComponent: f,
      onRenderCell: a
    }
  ));
  const w = { top: n, height: o, lineHeight: `${o - 2}px`, ...u };
  return /* @__PURE__ */ Y(
    "div",
    {
      className: F("dtable-row", e),
      style: w,
      "data-id": t.id,
      ...b,
      children: [
        p,
        m,
        y
      ]
    }
  );
}
function k$({ height: t, onRenderRow: e, ...n }) {
  const o = {
    height: t,
    ...n,
    row: { id: "HEADER", index: -1, top: 0 },
    className: "dtable-in-header",
    top: 0
  };
  if (e) {
    const i = e({ props: o }, Na);
    i && Object.assign(o, i);
  }
  return /* @__PURE__ */ Y("div", { className: "dtable-header", style: { height: t }, children: /* @__PURE__ */ Y(Sg, { ...o }) });
}
function x$({
  className: t,
  style: e,
  top: n,
  rows: o,
  height: i,
  rowHeight: r,
  scrollTop: l,
  onRenderRow: c,
  ..._
}) {
  return e = { ...e, top: n, height: i }, /* @__PURE__ */ Y("div", { className: F("dtable-rows", t), style: e, children: o.map((h) => {
    const s = {
      className: `dtable-row-${h.index % 2 ? "odd" : "even"}`,
      row: h,
      top: h.top - l,
      height: r,
      ..._
    }, d = c == null ? void 0 : c({ props: s, row: h }, Na);
    return d && Object.assign(s, d), /* @__PURE__ */ Y(Sg, { ...s });
  }) });
}
const Ni = /* @__PURE__ */ new Map(), Pi = [];
function Cg(t, e) {
  const { name: n } = t;
  if (!(e != null && e.override) && Ni.has(n))
    throw new Error(`DTable: Plugin with name ${n} already exists`);
  Ni.set(n, t), e != null && e.buildIn && !Pi.includes(n) && Pi.push(n);
}
function ro(t, e) {
  Cg(t, e);
  const n = (o) => {
    if (!o)
      return t;
    const { defaultOptions: i, ...r } = t;
    return {
      ...r,
      defaultOptions: { ...i, ...o }
    };
  };
  return n.plugin = t, n;
}
function Eg(t) {
  return Ni.delete(t);
}
function S$(t) {
  if (typeof t == "string") {
    const e = Ni.get(t);
    return e || console.warn(`DTable: Cannot found plugin "${t}"`), e;
  }
  if (typeof t == "function" && "plugin" in t)
    return t.plugin;
  if (typeof t == "object")
    return t;
  console.warn("DTable: Invalid plugin", t);
}
function Tg(t, e, n) {
  return e.forEach((o) => {
    var r;
    if (!o)
      return;
    const i = S$(o);
    i && (n.has(i.name) || ((r = i.plugins) != null && r.length && Tg(t, i.plugins, n), t.push(i), n.add(i.name)));
  }), t;
}
function C$(t = [], e = !0) {
  return e && Pi.length && t.unshift(...Pi), t != null && t.length ? Tg([], t, /* @__PURE__ */ new Set()) : [];
}
function fu() {
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
var gs, hn, Gn, Ee, ee, Te, kt, Yt, ne, Xn, Zr, Qr, ge, Kn, Jn, Ol, Ag, Hl, Lg, Wl, Mg, Il, Rg, ts, Zc, Ul, Fl, es, ns, Bl, jl, zl, Dg, Vl, Ng, Yl, Pg;
let E$ = (gs = class extends Xo {
  constructor(n) {
    super(n);
    E(this, Ol);
    E(this, Hl);
    E(this, Wl);
    E(this, Il);
    E(this, ts);
    E(this, zl);
    E(this, Vl);
    E(this, Yl);
    M(this, "ref", _$());
    E(this, hn, 0);
    E(this, Gn, void 0);
    E(this, Ee, !1);
    E(this, ee, void 0);
    E(this, Te, void 0);
    E(this, kt, []);
    E(this, Yt, void 0);
    E(this, ne, /* @__PURE__ */ new Map());
    E(this, Xn, {});
    E(this, Zr, void 0);
    E(this, Qr, []);
    M(this, "updateLayout", () => {
      g(this, hn) && cancelAnimationFrame(g(this, hn)), H(this, hn, requestAnimationFrame(() => {
        H(this, Yt, void 0), this.forceUpdate(), H(this, hn, 0);
      }));
    });
    E(this, ge, (n, o) => {
      o = o || n.type;
      const i = g(this, ne).get(o);
      if (i != null && i.length) {
        for (const r of i)
          if (r.call(this, n) === !1) {
            n.stopPropagation(), n.preventDefault();
            break;
          }
      }
    });
    E(this, Kn, (n) => {
      g(this, ge).call(this, n, `window_${n.type}`);
    });
    E(this, Jn, (n) => {
      g(this, ge).call(this, n, `document_${n.type}`);
    });
    E(this, Ul, (n, o) => {
      if (this.options.onRenderRow) {
        const i = this.options.onRenderRow.call(this, n, o);
        i && Object.assign(n.props, i);
      }
      return g(this, kt).forEach((i) => {
        if (i.onRenderRow) {
          const r = i.onRenderRow.call(this, n, o);
          r && Object.assign(n.props, r);
        }
      }), n.props;
    });
    E(this, Fl, (n, o) => (this.options.onRenderHeaderRow && (n.props = this.options.onRenderHeaderRow.call(this, n, o)), g(this, kt).forEach((i) => {
      i.onRenderHeaderRow && (n.props = i.onRenderHeaderRow.call(this, n, o));
    }), n.props));
    E(this, es, (n, o, i) => {
      const { row: r, col: l } = o;
      n[0] = this.getCellValue(r, l);
      const c = r.id === "HEADER" ? "onRenderHeaderCell" : "onRenderCell";
      return l.setting[c] && (n = l.setting[c].call(this, n, o, i)), this.options[c] && (n = this.options[c].call(this, n, o, i)), g(this, kt).forEach((_) => {
        _[c] && (n = _[c].call(this, n, o, i));
      }), n;
    });
    E(this, ns, (n, o) => {
      o === "horz" ? this.scroll({ scrollLeft: n }) : this.scroll({ scrollTop: n });
    });
    E(this, Bl, (n) => {
      var c, _, h, s, d;
      const o = this.getPointerInfo(n);
      if (!o)
        return;
      const { rowID: i, colName: r, cellElement: l } = o;
      if (i === "HEADER")
        l && ((c = this.options.onHeaderCellClick) == null || c.call(this, n, { colName: r, element: l }), g(this, kt).forEach((f) => {
          var a;
          (a = f.onHeaderCellClick) == null || a.call(this, n, { colName: r, element: l });
        }));
      else {
        const { rowElement: f } = o, a = this.layout.visibleRows.find((u) => u.id === i);
        if (l) {
          if (((_ = this.options.onCellClick) == null ? void 0 : _.call(this, n, { colName: r, rowID: i, rowInfo: a, element: l, rowElement: f })) === !0)
            return;
          for (const u of g(this, kt))
            if (((h = u.onCellClick) == null ? void 0 : h.call(this, n, { colName: r, rowID: i, rowInfo: a, element: l, rowElement: f })) === !0)
              return;
        }
        if (((s = this.options.onRowClick) == null ? void 0 : s.call(this, n, { rowID: i, rowInfo: a, element: f })) === !0)
          return;
        for (const u of g(this, kt))
          if (((d = u.onRowClick) == null ? void 0 : d.call(this, n, { rowID: i, rowInfo: a, element: f })) === !0)
            return;
      }
    });
    E(this, jl, (n) => {
      const o = n.key.toLowerCase();
      if (["pageup", "pagedown", "home", "end"].includes(o))
        return !this.scroll({ to: o.replace("page", "") });
    });
    H(this, Gn, n.id ?? `dtable-${m$(10)}`), this.state = { scrollTop: 0, scrollLeft: 0, renderCount: 0 }, H(this, Te, Object.freeze(C$(n.plugins))), g(this, Te).forEach((o) => {
      var c;
      const { methods: i, data: r, state: l } = o;
      i && Object.entries(i).forEach(([_, h]) => {
        typeof h == "function" && Object.assign(this, { [_]: h.bind(this) });
      }), r && Object.assign(g(this, Xn), r.call(this)), l && Object.assign(this.state, l.call(this)), (c = o.onCreate) == null || c.call(this, o);
    });
  }
  get options() {
    var n;
    return ((n = g(this, Yt)) == null ? void 0 : n.options) || g(this, ee) || fu();
  }
  get plugins() {
    return g(this, kt);
  }
  get layout() {
    return g(this, Yt);
  }
  get id() {
    return g(this, Gn);
  }
  get data() {
    return g(this, Xn);
  }
  get parent() {
    var n;
    return this.props.parent ?? ((n = this.ref.current) == null ? void 0 : n.parentElement);
  }
  componentWillReceiveProps() {
    H(this, ee, void 0);
  }
  componentDidMount() {
    if (g(this, Ee) ? this.forceUpdate() : W(this, ts, Zc).call(this), g(this, kt).forEach((n) => {
      let { events: o } = n;
      o && (typeof o == "function" && (o = o.call(this)), Object.entries(o).forEach(([i, r]) => {
        r && this.on(i, r);
      }));
    }), this.on("click", g(this, Bl)), this.on("keydown", g(this, jl)), this.options.responsive) {
      if (typeof ResizeObserver < "u") {
        const { parent: n } = this;
        if (n) {
          const o = new ResizeObserver(this.updateLayout);
          o.observe(n), H(this, Zr, o);
        }
      }
      this.on("window_resize", this.updateLayout);
    }
    g(this, kt).forEach((n) => {
      var o;
      (o = n.onMounted) == null || o.call(this);
    });
  }
  componentDidUpdate() {
    g(this, Ee) ? W(this, ts, Zc).call(this) : g(this, kt).forEach((n) => {
      var o;
      (o = n.onUpdated) == null || o.call(this);
    });
  }
  componentWillUnmount() {
    var o;
    (o = g(this, Zr)) == null || o.disconnect();
    const { current: n } = this.ref;
    if (n)
      for (const i of g(this, ne).keys())
        i.startsWith("window_") ? window.removeEventListener(i.replace("window_", ""), g(this, Kn)) : i.startsWith("document_") ? document.removeEventListener(i.replace("document_", ""), g(this, Jn)) : n.removeEventListener(i, g(this, ge));
    g(this, kt).forEach((i) => {
      var r;
      (r = i.onUnmounted) == null || r.call(this);
    }), g(this, Te).forEach((i) => {
      var r;
      (r = i.onDestory) == null || r.call(this);
    }), H(this, Xn, {}), g(this, ne).clear();
  }
  on(n, o, i) {
    var l;
    i && (n = `${i}_${n}`);
    const r = g(this, ne).get(n);
    r ? r.push(o) : (g(this, ne).set(n, [o]), n.startsWith("window_") ? window.addEventListener(n.replace("window_", ""), g(this, Kn)) : n.startsWith("document_") ? document.addEventListener(n.replace("document_", ""), g(this, Jn)) : (l = this.ref.current) == null || l.addEventListener(n, g(this, ge)));
  }
  off(n, o, i) {
    var c;
    i && (n = `${i}_${n}`);
    const r = g(this, ne).get(n);
    if (!r)
      return;
    const l = r.indexOf(o);
    l >= 0 && r.splice(l, 1), r.length || (g(this, ne).delete(n), n.startsWith("window_") ? window.removeEventListener(n.replace("window_", ""), g(this, Kn)) : n.startsWith("document_") ? document.removeEventListener(n.replace("document_", ""), g(this, Jn)) : (c = this.ref.current) == null || c.removeEventListener(n, g(this, ge)));
  }
  emitCustomEvent(n, o) {
    g(this, ge).call(this, o instanceof Event ? o : new CustomEvent(n, { detail: o }), n);
  }
  scroll(n, o) {
    const { scrollLeft: i, scrollTop: r, rowsHeightTotal: l, rowsHeight: c, rowHeight: _, colsInfo: { scrollWidth: h, scrollColsWidth: s } } = this.layout, { to: d } = n;
    let { scrollLeft: f, scrollTop: a } = n;
    if (d === "up" || d === "down")
      a = r + (d === "down" ? 1 : -1) * Math.floor(c / _) * _;
    else if (d === "left" || d === "right")
      f = i + (d === "right" ? 1 : -1) * h;
    else if (d === "home")
      a = 0;
    else if (d === "end")
      a = l - c;
    else if (d === "left-begin")
      f = 0;
    else if (d === "right-end")
      f = s - h;
    else {
      const { offsetLeft: b, offsetTop: p } = n;
      typeof b == "number" && (f = i + b), typeof p == "number" && (f = r + p);
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
    var _;
    const i = typeof n == "object" ? n : this.getRowInfo(n);
    if (!i)
      return;
    const r = typeof o == "object" ? o : this.getColInfo(o);
    if (!r)
      return;
    let l = i.id === "HEADER" ? r.setting.title ?? r.setting.name : (_ = i.data) == null ? void 0 : _[r.name];
    const { cellValueGetter: c } = this.options;
    return c && (l = c.call(this, i, r, l)), l;
  }
  getRowInfoByIndex(n) {
    return this.layout.rows[n];
  }
  update(n = {}, o) {
    if (!g(this, ee))
      return;
    typeof n == "function" && (o = n, n = {});
    const { dirtyType: i, state: r } = n;
    if (i === "layout")
      H(this, Yt, void 0);
    else if (i === "options") {
      if (H(this, ee, void 0), !g(this, Yt))
        return;
      H(this, Yt, void 0);
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
    return os(g(this, Qr), n, o, i, this.options.lang) ?? `{i18n:${n}}`;
  }
  render() {
    const n = W(this, Yl, Pg).call(this), { className: o, rowHover: i, colHover: r, cellHover: l, bordered: c, striped: _, scrollbarHover: h } = this.options, s = { width: n == null ? void 0 : n.width, height: n == null ? void 0 : n.height }, d = ["dtable", o, {
      "dtable-hover-row": i,
      "dtable-hover-col": r,
      "dtable-hover-cell": l,
      "dtable-bordered": c,
      "dtable-striped": _,
      "dtable-scrolled-down": ((n == null ? void 0 : n.scrollTop) ?? 0) > 0,
      "scrollbar-hover": h
    }], f = [];
    return n && g(this, kt).forEach((a) => {
      var b;
      const u = (b = a.onRender) == null ? void 0 : b.call(this, n);
      u && (u.style && Object.assign(s, u.style), u.className && d.push(u.className), u.children && f.push(u.children));
    }), /* @__PURE__ */ Y(
      "div",
      {
        id: g(this, Gn),
        className: F(d),
        style: s,
        ref: this.ref,
        tabIndex: -1,
        children: [
          n && W(this, Ol, Ag).call(this, n),
          n && W(this, Hl, Lg).call(this, n),
          n && W(this, Wl, Mg).call(this, n),
          n && W(this, Il, Rg).call(this, n)
        ]
      }
    );
  }
}, hn = new WeakMap(), Gn = new WeakMap(), Ee = new WeakMap(), ee = new WeakMap(), Te = new WeakMap(), kt = new WeakMap(), Yt = new WeakMap(), ne = new WeakMap(), Xn = new WeakMap(), Zr = new WeakMap(), Qr = new WeakMap(), ge = new WeakMap(), Kn = new WeakMap(), Jn = new WeakMap(), Ol = new WeakSet(), Ag = function(n) {
  const { header: o, colsInfo: i, headerHeight: r, scrollLeft: l } = n;
  if (!o)
    return null;
  if (o === !0)
    return /* @__PURE__ */ Y(
      k$,
      {
        scrollLeft: l,
        height: r,
        onRenderCell: g(this, es),
        onRenderRow: g(this, Fl),
        ...i
      }
    );
  const c = Array.isArray(o) ? o : [o];
  return /* @__PURE__ */ Y(
    Nc,
    {
      className: "dtable-header",
      style: { height: r },
      renders: c,
      generateArgs: [n],
      generatorThis: this
    }
  );
}, Hl = new WeakSet(), Lg = function(n) {
  const { headerHeight: o, rowsHeight: i, visibleRows: r, rowHeight: l, colsInfo: c, scrollLeft: _, scrollTop: h } = n;
  return /* @__PURE__ */ Y(
    x$,
    {
      top: o,
      height: i,
      rows: r,
      rowHeight: l,
      scrollLeft: _,
      scrollTop: h,
      onRenderCell: g(this, es),
      onRenderRow: g(this, Ul),
      ...c
    }
  );
}, Wl = new WeakSet(), Mg = function(n) {
  const { footer: o } = n;
  if (!o)
    return null;
  const i = typeof o == "function" ? o.call(this, n) : Array.isArray(o) ? o : [o];
  return /* @__PURE__ */ Y(
    Nc,
    {
      className: "dtable-footer",
      style: { height: n.footerHeight, top: n.rowsHeight + n.headerHeight },
      renders: i,
      generateArgs: [n],
      generatorThis: this,
      generators: n.footerGenerators
    }
  );
}, Il = new WeakSet(), Rg = function(n) {
  const o = [], { scrollLeft: i, colsInfo: r, scrollTop: l, rowsHeight: c, rowsHeightTotal: _, footerHeight: h } = n, { scrollColsWidth: s, scrollWidth: d } = r, { scrollbarSize: f = 12, horzScrollbarPos: a } = this.options;
  return s > d && o.push(
    /* @__PURE__ */ Y(
      au,
      {
        type: "horz",
        scrollPos: i,
        scrollSize: s,
        clientSize: d,
        onScroll: g(this, ns),
        left: r.fixedLeftWidth,
        bottom: (a === "inside" ? 0 : -f) + h,
        size: f,
        wheelContainer: this.ref
      },
      "horz"
    )
  ), _ > c && o.push(
    /* @__PURE__ */ Y(
      au,
      {
        type: "vert",
        scrollPos: l,
        scrollSize: _,
        clientSize: c,
        onScroll: g(this, ns),
        right: 0,
        size: f,
        top: n.headerHeight,
        wheelContainer: this.ref
      },
      "vert"
    )
  ), o.length ? o : null;
}, ts = new WeakSet(), Zc = function() {
  var n;
  H(this, Ee, !1), (n = this.options.afterRender) == null || n.call(this), g(this, kt).forEach((o) => {
    var i;
    return (i = o.afterRender) == null ? void 0 : i.call(this);
  });
}, Ul = new WeakMap(), Fl = new WeakMap(), es = new WeakMap(), ns = new WeakMap(), Bl = new WeakMap(), jl = new WeakMap(), zl = new WeakSet(), Dg = function() {
  if (g(this, ee))
    return !1;
  const o = { ...fu(), ...g(this, Te).reduce((i, r) => {
    const { defaultOptions: l } = r;
    return l && Object.assign(i, l), i;
  }, {}), ...this.props };
  return H(this, ee, o), H(this, kt, g(this, Te).reduce((i, r) => {
    const { when: l, options: c } = r;
    return (!l || l(o)) && (i.push(r), c && Object.assign(o, typeof c == "function" ? c.call(this, o) : c)), i;
  }, [])), H(this, Qr, [this.options.i18n, ...this.plugins.map((i) => i.i18n)].filter(Boolean)), !0;
}, Vl = new WeakSet(), Ng = function() {
  var X, bt;
  const { plugins: n } = this;
  let o = g(this, ee);
  const i = {
    flex: /* @__PURE__ */ Y("div", { style: "flex:auto" }),
    divider: /* @__PURE__ */ Y("div", { style: "width:1px;margin:var(--space);background:var(--color-border);height:50%" })
  };
  n.forEach((U) => {
    var vt;
    const K = (vt = U.beforeLayout) == null ? void 0 : vt.call(this, o);
    K && (o = { ...o, ...K }), Object.assign(i, U.footer);
  });
  const { defaultColWidth: r, minColWidth: l, maxColWidth: c } = o, _ = [], h = [], s = [], d = {}, f = [], a = [];
  let u = 0, b = 0, p = 0;
  o.cols.forEach((U) => {
    if (U.hidden)
      return;
    const {
      name: K,
      type: vt = "",
      fixed: it = !1,
      flex: q = !1,
      width: lt = r,
      minWidth: At = l,
      maxWidth: Lt = c,
      ...Bg
    } = U, Q = {
      name: K,
      type: vt,
      setting: {
        name: K,
        type: vt,
        fixed: it,
        flex: q,
        width: lt,
        minWidth: At,
        maxWidth: Lt,
        ...Bg
      },
      flex: it ? 0 : q === !0 ? 1 : typeof q == "number" ? q : 0,
      left: 0,
      width: _u(lt, At, Lt),
      realWidth: 0,
      visible: !0,
      index: f.length
    };
    n.forEach((Ua) => {
      var Fa, Ba;
      const cs = (Fa = Ua.colTypes) == null ? void 0 : Fa[vt];
      if (cs) {
        const ja = typeof cs == "function" ? cs(Q) : cs;
        ja && Object.assign(Q.setting, ja);
      }
      (Ba = Ua.onAddCol) == null || Ba.call(this, Q);
    }), Q.width = _u(Q.setting.width ?? Q.width, Q.setting.minWidth ?? At, Q.setting.maxWidth ?? Lt), Q.realWidth = Q.realWidth || Q.width, it === "left" ? (Q.left = u, u += Q.width, _.push(Q)) : it === "right" ? (Q.left = b, b += Q.width, h.push(Q)) : (Q.left = p, p += Q.width, s.push(Q)), Q.flex && a.push(Q), f.push(Q), d[Q.name] = Q;
  });
  let m = o.width, y = 0;
  const w = u + p + b;
  if (typeof m == "function" && (m = m.call(this, w)), m === "auto")
    y = w;
  else if (m === "100%") {
    const { parent: U } = this;
    if (U)
      y = U.clientWidth;
    else {
      y = 0, H(this, Ee, !0);
      return;
    }
  } else
    y = m ?? 0;
  const { data: k, rowKey: C = "id", rowHeight: A } = o, T = [], v = (U, K, vt) => {
    var q, lt;
    const it = { data: vt ?? { [C]: U }, id: U, index: T.length, top: 0 };
    if (vt || (it.lazy = !0), T.push(it), ((q = o.onAddRow) == null ? void 0 : q.call(this, it, K)) !== !1) {
      for (const At of n)
        if (((lt = At.onAddRow) == null ? void 0 : lt.call(this, it, K)) === !1)
          return;
    }
  };
  if (typeof k == "number")
    for (let U = 0; U < k; U++)
      v(`${U}`, U);
  else
    Array.isArray(k) && k.forEach((U, K) => {
      typeof U == "object" ? v(`${U[C] ?? ""}`, K, U) : v(`${U ?? ""}`, K);
    });
  let x = T;
  const R = {};
  if (o.onAddRows) {
    const U = o.onAddRows.call(this, x);
    U && (x = U);
  }
  for (const U of n) {
    const K = (X = U.onAddRows) == null ? void 0 : X.call(this, x);
    K && (x = K);
  }
  x.forEach((U, K) => {
    R[U.id] = U, U.index = K, U.top = U.index * A;
  });
  const { header: V, footer: B } = o, D = V ? o.headerHeight || A : 0, S = B ? o.footerHeight || A : 0;
  let $ = o.height, N = 0;
  const L = x.length * A, O = D + S + L;
  if (typeof $ == "function" && ($ = $.call(this, O)), $ === "auto")
    N = O;
  else if (typeof $ == "object")
    N = Math.min($.max, Math.max($.min, O));
  else if ($ === "100%") {
    const { parent: U } = this;
    if (U)
      N = U.clientHeight;
    else {
      N = 0, H(this, Ee, !0);
      return;
    }
  } else
    N = $;
  const P = N - D - S, I = y - u - b, z = {
    options: o,
    allRows: T,
    width: y,
    height: N,
    rows: x,
    rowsMap: R,
    rowHeight: A,
    rowsHeight: P,
    rowsHeightTotal: L,
    header: V,
    footer: B,
    footerGenerators: i,
    headerHeight: D,
    footerHeight: S,
    colsMap: d,
    colsList: f,
    flexCols: a,
    colsInfo: {
      fixedLeftCols: _,
      fixedRightCols: h,
      scrollCols: s,
      fixedLeftWidth: u,
      scrollWidth: I,
      scrollColsWidth: p,
      fixedRightWidth: b
    }
  }, j = (bt = o.onLayout) == null ? void 0 : bt.call(this, z);
  j && Object.assign(z, j), n.forEach((U) => {
    if (U.onLayout) {
      const K = U.onLayout.call(this, z);
      K && Object.assign(z, K);
    }
  }), H(this, Yt, z);
}, Yl = new WeakSet(), Pg = function() {
  (W(this, zl, Dg).call(this) || !g(this, Yt)) && W(this, Vl, Ng).call(this);
  const { layout: n } = this;
  if (!n)
    return;
  let { scrollLeft: o } = this.state;
  const { flexCols: i, colsInfo: { scrollCols: r, scrollWidth: l, scrollColsWidth: c } } = n;
  if (i.length) {
    const w = l - c;
    if (w > 0) {
      const k = i.reduce((A, T) => A + T.flex, 0);
      let C = 0;
      i.forEach((A) => {
        const T = Math.min(w - C, Math.ceil(w * (A.flex / k)));
        A.realWidth = T + A.width, C += A.realWidth;
      });
    } else
      i.forEach((k) => {
        k.realWidth = k.width;
      });
  }
  o = Math.min(Math.max(0, c - l), o);
  let _ = 0;
  r.forEach((w) => {
    w.left = _, _ += w.realWidth, w.visible = w.left + w.realWidth >= o && w.left <= o + l;
  });
  const { rowsHeightTotal: h, rowsHeight: s, rows: d, rowHeight: f } = n, a = Math.min(Math.max(0, h - s), this.state.scrollTop), u = Math.floor(a / f), b = a + s, p = Math.min(d.length, Math.ceil(b / f)), m = [], { rowDataGetter: y } = this.options;
  for (let w = u; w < p; w++) {
    const k = d[w];
    k.lazy && y && (k.data = y([k.id])[0], k.lazy = !1), m.push(k);
  }
  return n.visibleRows = m, n.scrollTop = a, n.scrollLeft = o, n;
}, M(gs, "addPlugin", Cg), M(gs, "removePlugin", Eg), gs);
function uu(t, e) {
  e !== void 0 ? t.data.hoverCol = e : e = t.data.hoverCol;
  const { current: n } = t.ref;
  if (!n)
    return;
  const o = "dtable-col-hover";
  n.querySelectorAll(`.${o}`).forEach((i) => i.classList.remove(o)), typeof e == "string" && e.length && n.querySelectorAll(`.dtable-cell[data-col="${e}"]`).forEach((i) => i.classList.add(o));
}
const T$ = {
  name: "col-hover",
  defaultOptions: {
    colHover: !1
  },
  when: (t) => !!t.colHover,
  events: {
    mouseover(t) {
      var i;
      const { colHover: e } = this.options;
      if (!e)
        return;
      const n = (i = t.target) == null ? void 0 : i.closest(".dtable-cell");
      if (!n || e === "header" && !n.closest(".dtable-header"))
        return;
      const o = (n == null ? void 0 : n.getAttribute("data-col")) ?? !1;
      uu(this, o);
    },
    mouseleave() {
      uu(this, !1);
    }
  }
}, A$ = ro(T$, { buildIn: !0 });
function L$(t, e) {
  var l, c;
  typeof t == "boolean" && (e = t, t = void 0);
  const n = this.state.checkedRows, o = {}, { canRowCheckable: i } = this.options, r = (_, h) => {
    i && !i.call(this, _) || !!n[_] === h || (h ? n[_] = !0 : delete n[_], o[_] = h);
  };
  if (t === void 0 ? (e === void 0 && (e = !Og.call(this)), (l = this.layout) == null || l.allRows.forEach(({ id: _ }) => {
    r(_, !!e);
  })) : (Array.isArray(t) || (t = [t]), t.forEach((_) => {
    r(_, e ?? !n[_]);
  })), Object.keys(o).length) {
    const _ = (c = this.options.beforeCheckRows) == null ? void 0 : c.call(this, t, o, n);
    _ && Object.keys(_).forEach((h) => {
      _[h] ? n[h] = !0 : delete n[h];
    }), this.setState({ checkedRows: { ...n } }, () => {
      var h;
      (h = this.options.onCheckChange) == null || h.call(this, o);
    });
  }
  return o;
}
function M$(t) {
  return this.state.checkedRows[t] ?? !1;
}
function Og() {
  var n, o;
  const t = this.getChecks().length, { canRowCheckable: e } = this.options;
  return e ? t === ((n = this.layout) == null ? void 0 : n.allRows.reduce((i, r) => i + (e.call(this, r.id) ? 1 : 0), 0)) : t === ((o = this.layout) == null ? void 0 : o.allRows.length);
}
function R$() {
  return Object.keys(this.state.checkedRows);
}
const D$ = {
  name: "checkable",
  defaultOptions: { checkable: !0 },
  when: (t) => !!t.checkable,
  state() {
    return { checkedRows: {} };
  },
  methods: {
    toggleCheckRows: L$,
    isRowChecked: M$,
    isAllRowChecked: Og,
    getChecks: R$
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
      const t = this.isAllRowChecked();
      return [
        /* @__PURE__ */ Y("div", { style: { padding: "0 calc(3 * var(--space))", display: "flex", alignItems: "center" }, onClick: () => this.toggleCheckRows(), children: /* @__PURE__ */ Y("input", { type: "checkbox", checked: t }) })
      ];
    },
    checkedInfo(t, e) {
      const n = this.getChecks().length, o = [];
      return n && o.push(this.i18n("checkedCountInfo", { selected: n })), o.push(this.i18n("totalCountInfo", { total: e.allRows.length })), [
        /* @__PURE__ */ Y("div", { children: o.join(", ") })
      ];
    }
  },
  onRenderCell(t, { row: e, col: n }) {
    var c;
    const { id: o } = e, { canRowCheckable: i } = this.options;
    if (i && !i.call(this, o))
      return t;
    const { checkbox: r } = n.setting;
    if (typeof r == "function" ? r.call(this, o) : r) {
      const _ = this.isRowChecked(o), h = ((c = this.options.checkboxRender) == null ? void 0 : c.call(this, _, o)) ?? /* @__PURE__ */ Y("input", { type: "checkbox", checked: _ });
      t.unshift(h), t.push({ className: "has-checkbox" });
    }
    return t;
  },
  onRenderHeaderCell(t, { row: e, col: n }) {
    var l;
    const { id: o } = e, { checkbox: i } = n.setting;
    if (typeof i == "function" ? i.call(this, o) : i) {
      const c = this.isAllRowChecked(), _ = ((l = this.options.checkboxRender) == null ? void 0 : l.call(this, c, o)) ?? /* @__PURE__ */ Y("input", { type: "checkbox", checked: c });
      t.unshift(_), t.push({ className: "has-checkbox" });
    }
    return t;
  },
  onRenderRow({ props: t, row: e }) {
    if (this.isRowChecked(e.id))
      return { className: F(t.className, "is-checked") };
  },
  onHeaderCellClick(t) {
    const e = t.target;
    if (!e)
      return;
    const n = e.closest('input[type="checkbox"],.dtable-checkbox');
    n && this.toggleCheckRows(n.checked);
  },
  onRowClick(t, { rowID: e }) {
    const n = t.target;
    if (!n)
      return;
    (n.closest('input[type="checkbox"],.dtable-checkbox') || this.options.checkOnClickRow) && this.toggleCheckRows(e);
  }
}, N$ = ro(D$);
var Hg = /* @__PURE__ */ ((t) => (t.unknown = "", t.collapsed = "collapsed", t.expanded = "expanded", t.hidden = "hidden", t.normal = "normal", t))(Hg || {});
function Qc(t) {
  const e = this.data.nestedMap.get(t);
  if (!e || e.state !== "")
    return e ?? { state: "normal", level: -1 };
  if (!e.parent && !e.children)
    return e.state = "normal", e;
  const n = this.state.collapsedRows, o = e.children && n && n[t];
  let i = !1, { parent: r } = e;
  for (; r; ) {
    const l = Qc.call(this, r);
    if (l.state !== "expanded") {
      i = !0;
      break;
    }
    r = l.parent;
  }
  return e.state = i ? "hidden" : o ? "collapsed" : e.children ? "expanded" : "normal", e.level = e.parent ? Qc.call(this, e.parent).level + 1 : 0, e;
}
function P$(t, e) {
  let n = this.state.collapsedRows ?? {};
  const { nestedMap: o } = this.data;
  if (t === "HEADER")
    if (e === void 0 && (e = !Wg.call(this)), e) {
      const i = o.entries();
      for (const [r, l] of i)
        l.state === "expanded" && (n[r] = !0);
    } else
      n = {};
  else {
    const i = Array.isArray(t) ? t : [t];
    e === void 0 && (e = !n[i[0]]), i.forEach((r) => {
      const l = o.get(r);
      e && (l != null && l.children) ? n[r] = !0 : delete n[r];
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
function Wg() {
  const t = this.data.nestedMap.values();
  for (const e of t)
    if (e.state === "expanded")
      return !1;
  return !0;
}
function Ig(t, e = 0, n, o = 0) {
  var i;
  n || (n = [...t.keys()]);
  for (const r of n) {
    const l = t.get(r);
    l && (l.level === o && (l.order = e++), (i = l.children) != null && i.length && (e = Ig(t, e, l.children, o + 1)));
  }
  return e;
}
function Ug(t, e, n, o) {
  const i = t.getNestedRowInfo(e);
  return !i || i.state === "" || !i.children || i.children.forEach((r) => {
    o[r] = n, Ug(t, r, n, o);
  }), i;
}
function Fg(t, e, n, o, i) {
  var c;
  const r = t.getNestedRowInfo(e);
  if (!r || r.state === "")
    return;
  ((c = r.children) == null ? void 0 : c.every((_) => {
    const h = !!(o[_] !== void 0 ? o[_] : i[_]);
    return n === h;
  })) && (o[e] = n), r.parent && Fg(t, r.parent, n, o, i);
}
const O$ = {
  name: "nested",
  defaultOptions: {
    nested: !0,
    nestedParentKey: "parent",
    asParentKey: "asParent",
    nestedIndent: 20,
    canSortTo(t, e) {
      const { nestedMap: n } = this.data, o = n.get(t.id), i = n.get(e.id);
      return (o == null ? void 0 : o.parent) === (i == null ? void 0 : i.parent);
    },
    beforeCheckRows(t, e, n) {
      if (!this.options.checkable || !(t != null && t.length))
        return;
      const o = {};
      return Object.entries(e).forEach(([i, r]) => {
        const l = Ug(this, i, r, o);
        l != null && l.parent && Fg(this, l.parent, r, o, n);
      }), o;
    }
  },
  when: (t) => !!t.nested,
  data() {
    return { nestedMap: /* @__PURE__ */ new Map() };
  },
  methods: {
    toggleRow: P$,
    isAllCollapsed: Wg,
    getNestedRowInfo: Qc
  },
  beforeLayout() {
    this.data.nestedMap.clear();
  },
  onAddRow(t) {
    var i, r;
    const { nestedMap: e } = this.data, n = (i = t.data) == null ? void 0 : i[this.options.nestedParentKey ?? "parent"], o = e.get(t.id) ?? {
      state: "",
      level: 0
    };
    if (o.parent = n, (r = t.data) != null && r[this.options.asParentKey ?? "asParent"] && (o.children = []), e.set(t.id, o), n) {
      let l = e.get(n);
      l || (l = {
        state: "",
        level: 0
      }, e.set(n, l)), l.children || (l.children = []), l.children.push(t.id);
    }
  },
  onAddRows(t) {
    return t = t.filter(
      (e) => this.getNestedRowInfo(e.id).state !== "hidden"
      /* hidden */
    ), Ig(this.data.nestedMap), t.sort((e, n) => {
      const o = this.getNestedRowInfo(e.id), i = this.getNestedRowInfo(n.id), r = (o.order ?? 0) - (i.order ?? 0);
      return r === 0 ? e.index - n.index : r;
    }), t;
  },
  onRenderCell(t, { col: e, row: n }) {
    var c;
    const { id: o, data: i } = n, { nestedToggle: r } = e.setting, l = this.getNestedRowInfo(o);
    if (r && (l.children || l.parent) && t.unshift(((c = this.options.onRenderNestedToggle) == null ? void 0 : c.call(this, l, o, e, i)) ?? /* @__PURE__ */ Y("a", { role: "button", className: `dtable-nested-toggle state${l.children ? "" : " is-no-child"}`, children: /* @__PURE__ */ Y("span", { className: "toggle-icon" }) })), l.level) {
      let { nestedIndent: _ = r } = e.setting;
      _ && (_ === !0 && (_ = this.options.nestedIndent ?? 12), t.unshift(/* @__PURE__ */ Y("div", { className: "dtable-nested-indent", style: { width: _ * l.level + "px" } })));
    }
    return t;
  },
  onRenderHeaderCell(t, { row: e, col: n }) {
    var i;
    const { id: o } = e;
    return n.setting.nestedToggle && t.unshift(((i = this.options.onRenderNestedToggle) == null ? void 0 : i.call(this, void 0, o, n, void 0)) ?? /* @__PURE__ */ Y("a", { type: "button", className: "dtable-nested-toggle state", children: /* @__PURE__ */ Y("span", { className: "toggle-icon" }) })), t;
  },
  onRenderRow({ props: t, row: e }) {
    const n = this.getNestedRowInfo(e.id);
    return {
      className: F(t.className, `is-${n.state}`),
      "data-parent": n.parent
    };
  },
  onRenderHeaderRow({ props: t }) {
    return t.className = F(t.className, `is-${this.isAllCollapsed() ? "collapsed" : "expanded"}`), t;
  },
  onHeaderCellClick(t) {
    const e = t.target;
    if (!(!e || !e.closest(".dtable-nested-toggle")))
      return this.toggleRow("HEADER"), !0;
  },
  onCellClick(t, { rowID: e }) {
    const n = t.target;
    if (!(!n || !this.getNestedRowInfo(e).children || !n.closest(".dtable-nested-toggle")))
      return this.toggleRow(e), !0;
  }
}, H$ = ro(O$);
const W$ = {
  name: "rich",
  colTypes: {
    html: {
      onRenderCell(t) {
        return t[0] = {
          html: t[0]
        }, t;
      }
    },
    link: {
      onRenderCell(t, { col: e, row: n }) {
        const { linkTemplate: o = "", linkProps: i } = e.setting, r = Dt(o, n.data);
        return t[0] = /* @__PURE__ */ Y("a", { href: r, ...i, children: t[0] }), t;
      }
    },
    avatar: {
      onRenderCell(t, { col: e, row: n }) {
        const { data: o } = n, { avatarWithName: i, avatarClass: r = "size-xs circle", avatarKey: l = `${e.name}Avatar` } = e.setting, c = /* @__PURE__ */ Y("div", { className: `avatar ${r} flex-none`, children: /* @__PURE__ */ Y("img", { src: o ? o[l] : "" }) });
        return i ? t.unshift(c) : t[0] = c, t;
      }
    },
    circleProgress: {
      align: "center",
      onRenderCell(t, { col: e }) {
        const { circleSize: n = 24, circleBorderSize: o = 1, circleBgColor: i = "var(--color-border)", circleColor: r = "var(--color-success-500)" } = e.setting, l = (n - o) / 2, c = n / 2, _ = t[0];
        return t[0] = /* @__PURE__ */ Y("svg", { width: n, height: n, children: [
          /* @__PURE__ */ Y("circle", { cx: c, cy: c, r: l, "stroke-width": o, stroke: i, fill: "transparent" }),
          /* @__PURE__ */ Y("circle", { cx: c, cy: c, r: l, "stroke-width": o, stroke: r, fill: "transparent", "stroke-linecap": "round", "stroke-dasharray": Math.PI * l * 2, "stroke-dashoffset": Math.PI * l * 2 * (100 - _) / 100, style: { transformOrigin: "center", transform: "rotate(-90deg)" } }),
          /* @__PURE__ */ Y("text", { x: c, y: c + o, "dominant-baseline": "middle", "text-anchor": "middle", style: { fontSize: `${l}px` }, children: Math.round(_) })
        ] }), t;
      }
    },
    actionButtons: {
      onRenderCell(t, { col: e, row: n }) {
        var c;
        const o = (c = n.data) == null ? void 0 : c[e.name];
        if (!o)
          return t;
        const { actionBtnTemplate: i = '<button type="button" data-action="{action}" title="{title}" class="{className}"><i class="icon icon-{icon}"></i></button>', actionBtnData: r = {}, actionBtnClass: l = "btn text-primary square size-sm ghost" } = e.setting;
        return [{
          html: o.map((_) => {
            typeof _ == "string" && (_ = { action: _ });
            const h = r[_.action];
            return h && (_ = { className: l, ...h, ..._ }), Dt(i, _);
          }).join(" ")
        }];
      }
    },
    format: {
      onRenderCell(t, { col: e }) {
        let { format: n } = e.setting;
        if (!n)
          return t;
        typeof n == "string" && (n = { type: "text", format: n });
        const { format: o, type: i } = n, r = t[0];
        return typeof o == "function" ? t[0] = i === "html" ? { html: o(r) } : o(r) : i === "datetime" ? t[0] = zc(r, o) : i === "html" ? t[0] = { html: Dt(o, r) } : t[0] = Dt(o, r), t;
      }
    }
  }
}, I$ = ro(W$, { buildIn: !0 }), U$ = {
  name: "sort-type",
  onRenderHeaderCell(t, { col: e }) {
    const { sortType: n } = e.setting;
    if (n) {
      const { sortLink: o = this.options.sortLink, sortAttrs: i } = e.setting, r = n === !0 ? "none" : n;
      if (t.push(
        /* @__PURE__ */ Y("div", { className: `dtable-sort dtable-sort-${r}` }),
        { outer: !0, attrs: { "data-sort": r } }
      ), o) {
        const l = typeof o == "function" ? o.call(this, e, r) : o;
        t.push(
          { tagName: "a", attrs: { href: l, ...i } }
        );
      }
    }
    return t;
  }
}, F$ = ro(U$, { buildIn: !0 }), B$ = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  NestedRowState: Hg,
  checkable: N$,
  colHover: A$,
  nested: H$,
  rich: I$,
  sortType: F$
}, Symbol.toStringTag, { value: "Module" }));
class io extends xt {
}
M(io, "NAME", "dtable"), M(io, "Component", E$), M(io, "definePlugin", ro), M(io, "removePlugin", Eg), M(io, "plugins", B$);
var Ot;
class ho extends Jt {
  constructor() {
    super(...arguments);
    E(this, Ot, void 0);
  }
  init() {
    const { element: n } = this;
    n !== document.body && !n.hasAttribute("data-toggle") && n.setAttribute("data-toggle", "tab");
  }
  showTarget() {
    const n = this.element.getAttribute("href") || this.element.dataset.target || this.element.dataset.tab;
    n != null && n.startsWith("#") && H(this, Ot, document.querySelector(n)), this.addActive(this.element.closest(`.${this.constructor.NAV_CLASS}`), this.element.parentElement), g(this, Ot) && (this.addActive(g(this, Ot).parentElement, g(this, Ot)), g(this, Ot).dispatchEvent(new CustomEvent("show.zui3.tab")));
  }
  show() {
    const n = this.element.getAttribute("href") || this.element.dataset.target || this.element.dataset.tab;
    n != null && n.startsWith("#") && H(this, Ot, document.querySelector(n)), g(this, Ot) && (this.addActive(g(this, Ot).parentElement, g(this, Ot)), this.addActive(this.element.closest(`.${this.constructor.NAV_CLASS}`), this.element.parentElement));
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
Ot = new WeakMap(), M(ho, "NAME", "NavTabs"), M(ho, "NAV_CLASS", "nav-tabs"), M(ho, "EVENTS", !0), M(ho, "TOGGLE_SELECTOR", '[data-toggle="tab"]');
document.addEventListener("click", (t) => {
  t.target instanceof HTMLElement && (t.target.dataset.toggle === "tab" || t.target.getAttribute("data-tab")) && (t.preventDefault(), new ho(t.target).showTarget());
});
export {
  n_ as ActionMenu,
  r_ as ActionMenuNested,
  c$ as AjaxForm,
  Z_ as Avatar,
  Q_ as BtnGroup,
  __ as Button,
  Rt as ContextMenu,
  io as DTable,
  Ht as Datepicker,
  Tt as Dropdown,
  ea as EventBus,
  f_ as Menu,
  _s as Messager,
  Mt as Modal,
  Wo as ModalTrigger,
  gf as Nav,
  ho as NavTabs,
  bf as Pager,
  Ef as Picker,
  z_ as ProgressCircle,
  fe as TIME_DAY,
  Wt as Timepicker,
  If as Toolbar,
  It as Tooltip,
  Jf as VirtualGrid,
  oy as addI18nMap,
  ek as browser,
  vf as calculateTimestamp,
  V$ as convertBytes,
  Nt as createDate,
  z$ as formatBytes,
  zc as formatDate,
  ak as formatDateSpan,
  Dt as formatString,
  ey as getLangCode,
  _k as getTimeBeforeDesc,
  os as i18n,
  ck as isDBY,
  gc as isObject,
  ss as isSameDay,
  b0 as isSameMonth,
  rk as isSameWeek,
  yf as isSameYear,
  sk as isToday,
  lk as isTomorrow,
  ik as isYesterday,
  Dc as mergeDeep,
  Rc as nativeEvents,
  ny as setLangCode,
  eb as store
};
