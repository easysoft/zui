var ng = Object.defineProperty;
var og = (t, e, n) => e in t ? ng(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : t[e] = n;
var L = (t, e, n) => (og(t, typeof e != "symbol" ? e + "" : e, n), n), Fl = (t, e, n) => {
  if (!e.has(t))
    throw TypeError("Cannot " + n);
};
var v = (t, e, n) => (Fl(t, e, "read from private field"), n ? n.call(t) : e.get(t)), M = (t, e, n) => {
  if (e.has(t))
    throw TypeError("Cannot add the same private member more than once");
  e instanceof WeakSet ? e.add(t) : e.set(t, n);
}, H = (t, e, n, o) => (Fl(t, e, "write to private field"), o ? o.call(t, n) : e.set(t, n), n), fa = (t, e, n, o) => ({
  set _(i) {
    H(t, e, i, n);
  },
  get _() {
    return v(t, e, o);
  }
}), W = (t, e, n) => (Fl(t, e, "access private method"), n);
var yl, tt, Pf, Of, so, ua, gs = {}, Hf = [], rg = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function $e(t, e) {
  for (var n in e)
    t[n] = e[n];
  return t;
}
function Wf(t) {
  var e = t.parentNode;
  e && e.removeChild(t);
}
function If(t, e, n) {
  var o, i, r, l = {};
  for (r in e)
    r == "key" ? o = e[r] : r == "ref" ? i = e[r] : l[r] = e[r];
  if (arguments.length > 2 && (l.children = arguments.length > 3 ? yl.call(arguments, 2) : n), typeof t == "function" && t.defaultProps != null)
    for (r in t.defaultProps)
      l[r] === void 0 && (l[r] = t.defaultProps[r]);
  return ts(t, l, o, i, null);
}
function ts(t, e, n, o, i) {
  var r = { type: t, props: e, key: n, ref: o, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: i ?? ++Pf };
  return i == null && tt.vnode != null && tt.vnode(r), r;
}
function sg() {
  return { current: null };
}
function vl(t) {
  return t.children;
}
function es(t, e) {
  this.props = t, this.context = e;
}
function Fo(t, e) {
  if (e == null)
    return t.__ ? Fo(t.__, t.__.__k.indexOf(t) + 1) : null;
  for (var n; e < t.__k.length; e++)
    if ((n = t.__k[e]) != null && n.__e != null)
      return n.__e;
  return typeof t.type == "function" ? Fo(t) : null;
}
function Uf(t) {
  var e, n;
  if ((t = t.__) != null && t.__c != null) {
    for (t.__e = t.__c.base = null, e = 0; e < t.__k.length; e++)
      if ((n = t.__k[e]) != null && n.__e != null) {
        t.__e = t.__c.base = n.__e;
        break;
      }
    return Uf(t);
  }
}
function ha(t) {
  (!t.__d && (t.__d = !0) && so.push(t) && !ys.__r++ || ua !== tt.debounceRendering) && ((ua = tt.debounceRendering) || setTimeout)(ys);
}
function ys() {
  for (var t; ys.__r = so.length; )
    t = so.sort(function(e, n) {
      return e.__v.__b - n.__v.__b;
    }), so = [], t.some(function(e) {
      var n, o, i, r, l, c;
      e.__d && (l = (r = (n = e).__v).__e, (c = n.__P) && (o = [], (i = $e({}, r)).__v = r.__v + 1, wc(c, r, i, n.__n, c.ownerSVGElement !== void 0, r.__h != null ? [l] : null, o, l ?? Fo(r), r.__h), Vf(o, r), r.__e != l && Uf(r)));
    });
}
function Ff(t, e, n, o, i, r, l, c, _, h) {
  var s, d, f, a, u, b, p, m = o && o.__k || Hf, g = m.length;
  for (n.__k = [], s = 0; s < e.length; s++)
    if ((a = n.__k[s] = (a = e[s]) == null || typeof a == "boolean" ? null : typeof a == "string" || typeof a == "number" || typeof a == "bigint" ? ts(null, a, null, null, a) : Array.isArray(a) ? ts(vl, { children: a }, null, null, null) : a.__b > 0 ? ts(a.type, a.props, a.key, a.ref ? a.ref : null, a.__v) : a) != null) {
      if (a.__ = n, a.__b = n.__b + 1, (f = m[s]) === null || f && a.key == f.key && a.type === f.type)
        m[s] = void 0;
      else
        for (d = 0; d < g; d++) {
          if ((f = m[d]) && a.key == f.key && a.type === f.type) {
            m[d] = void 0;
            break;
          }
          f = null;
        }
      wc(t, a, f = f || gs, i, r, l, c, _, h), u = a.__e, (d = a.ref) && f.ref != d && (p || (p = []), f.ref && p.push(f.ref, null, a), p.push(d, a.__c || u, a)), u != null ? (b == null && (b = u), typeof a.type == "function" && a.__k === f.__k ? a.__d = _ = Bf(a, _, t) : _ = jf(t, a, f, m, u, _), typeof n.type == "function" && (n.__d = _)) : _ && f.__e == _ && _.parentNode != t && (_ = Fo(f));
    }
  for (n.__e = b, s = g; s--; )
    m[s] != null && Yf(m[s], m[s]);
  if (p)
    for (s = 0; s < p.length; s++)
      zf(p[s], p[++s], p[++s]);
}
function Bf(t, e, n) {
  for (var o, i = t.__k, r = 0; i && r < i.length; r++)
    (o = i[r]) && (o.__ = t, e = typeof o.type == "function" ? Bf(o, e, n) : jf(n, o, o, i, o.__e, e));
  return e;
}
function jf(t, e, n, o, i, r) {
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
function ig(t, e, n, o, i) {
  var r;
  for (r in n)
    r === "children" || r === "key" || r in e || vs(t, r, null, n[r], o);
  for (r in e)
    i && typeof e[r] != "function" || r === "children" || r === "key" || r === "value" || r === "checked" || n[r] === e[r] || vs(t, r, e[r], n[r], o);
}
function da(t, e, n) {
  e[0] === "-" ? t.setProperty(e, n) : t[e] = n == null ? "" : typeof n != "number" || rg.test(e) ? n : n + "px";
}
function vs(t, e, n, o, i) {
  var r;
  t:
    if (e === "style")
      if (typeof n == "string")
        t.style.cssText = n;
      else {
        if (typeof o == "string" && (t.style.cssText = o = ""), o)
          for (e in o)
            n && e in n || da(t.style, e, "");
        if (n)
          for (e in n)
            o && n[e] === o[e] || da(t.style, e, n[e]);
      }
    else if (e[0] === "o" && e[1] === "n")
      r = e !== (e = e.replace(/Capture$/, "")), e = e.toLowerCase() in t ? e.toLowerCase().slice(2) : e.slice(2), t.l || (t.l = {}), t.l[e + r] = n, n ? o || t.addEventListener(e, r ? ma : pa, r) : t.removeEventListener(e, r ? ma : pa, r);
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
function pa(t) {
  this.l[t.type + !1](tt.event ? tt.event(t) : t);
}
function ma(t) {
  this.l[t.type + !0](tt.event ? tt.event(t) : t);
}
function wc(t, e, n, o, i, r, l, c, _) {
  var h, s, d, f, a, u, b, p, m, g, w, k, C, A, E, y = e.type;
  if (e.constructor !== void 0)
    return null;
  n.__h != null && (_ = n.__h, c = e.__e = n.__e, e.__h = null, r = [c]), (h = tt.__b) && h(e);
  try {
    t:
      if (typeof y == "function") {
        if (p = e.props, m = (h = y.contextType) && o[h.__c], g = h ? m ? m.props.value : h.__ : o, n.__c ? b = (s = e.__c = n.__c).__ = s.__E : ("prototype" in y && y.prototype.render ? e.__c = s = new y(p, g) : (e.__c = s = new es(p, g), s.constructor = y, s.render = cg), m && m.sub(s), s.props = p, s.state || (s.state = {}), s.context = g, s.__n = o, d = s.__d = !0, s.__h = [], s._sb = []), s.__s == null && (s.__s = s.state), y.getDerivedStateFromProps != null && (s.__s == s.state && (s.__s = $e({}, s.__s)), $e(s.__s, y.getDerivedStateFromProps(p, s.__s))), f = s.props, a = s.state, d)
          y.getDerivedStateFromProps == null && s.componentWillMount != null && s.componentWillMount(), s.componentDidMount != null && s.__h.push(s.componentDidMount);
        else {
          if (y.getDerivedStateFromProps == null && p !== f && s.componentWillReceiveProps != null && s.componentWillReceiveProps(p, g), !s.__e && s.shouldComponentUpdate != null && s.shouldComponentUpdate(p, s.__s, g) === !1 || e.__v === n.__v) {
            for (s.props = p, s.state = s.__s, e.__v !== n.__v && (s.__d = !1), s.__v = e, e.__e = n.__e, e.__k = n.__k, e.__k.forEach(function(x) {
              x && (x.__ = e);
            }), w = 0; w < s._sb.length; w++)
              s.__h.push(s._sb[w]);
            s._sb = [], s.__h.length && l.push(s);
            break t;
          }
          s.componentWillUpdate != null && s.componentWillUpdate(p, s.__s, g), s.componentDidUpdate != null && s.__h.push(function() {
            s.componentDidUpdate(f, a, u);
          });
        }
        if (s.context = g, s.props = p, s.__v = e, s.__P = t, k = tt.__r, C = 0, "prototype" in y && y.prototype.render) {
          for (s.state = s.__s, s.__d = !1, k && k(e), h = s.render(s.props, s.state, s.context), A = 0; A < s._sb.length; A++)
            s.__h.push(s._sb[A]);
          s._sb = [];
        } else
          do
            s.__d = !1, k && k(e), h = s.render(s.props, s.state, s.context), s.state = s.__s;
          while (s.__d && ++C < 25);
        s.state = s.__s, s.getChildContext != null && (o = $e($e({}, o), s.getChildContext())), d || s.getSnapshotBeforeUpdate == null || (u = s.getSnapshotBeforeUpdate(f, a)), E = h != null && h.type === vl && h.key == null ? h.props.children : h, Ff(t, Array.isArray(E) ? E : [E], e, n, o, i, r, l, c, _), s.base = e.__e, e.__h = null, s.__h.length && l.push(s), b && (s.__E = s.__ = null), s.__e = !1;
      } else
        r == null && e.__v === n.__v ? (e.__k = n.__k, e.__e = n.__e) : e.__e = lg(n.__e, e, n, o, i, r, l, _);
    (h = tt.diffed) && h(e);
  } catch (x) {
    e.__v = null, (_ || r != null) && (e.__e = c, e.__h = !!_, r[r.indexOf(c)] = null), tt.__e(x, e, n);
  }
}
function Vf(t, e) {
  tt.__c && tt.__c(e, t), t.some(function(n) {
    try {
      t = n.__h, n.__h = [], t.some(function(o) {
        o.call(n);
      });
    } catch (o) {
      tt.__e(o, n.__v);
    }
  });
}
function lg(t, e, n, o, i, r, l, c) {
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
    if (r = r && yl.call(t.childNodes), h = (d = n.props || gs).dangerouslySetInnerHTML, s = f.dangerouslySetInnerHTML, !c) {
      if (r != null)
        for (d = {}, u = 0; u < t.attributes.length; u++)
          d[t.attributes[u].name] = t.attributes[u].value;
      (s || h) && (s && (h && s.__html == h.__html || s.__html === t.innerHTML) || (t.innerHTML = s && s.__html || ""));
    }
    if (ig(t, f, d, i, c), s)
      e.__k = [];
    else if (u = e.props.children, Ff(t, Array.isArray(u) ? u : [u], e, n, o, i && a !== "foreignObject", r, l, r ? r[0] : n.__k && Fo(n, 0), c), r != null)
      for (u = r.length; u--; )
        r[u] != null && Wf(r[u]);
    c || ("value" in f && (u = f.value) !== void 0 && (u !== t.value || a === "progress" && !u || a === "option" && u !== d.value) && vs(t, "value", u, d.value, !1), "checked" in f && (u = f.checked) !== void 0 && u !== t.checked && vs(t, "checked", u, d.checked, !1));
  }
  return t;
}
function zf(t, e, n) {
  try {
    typeof t == "function" ? t(e) : t.current = e;
  } catch (o) {
    tt.__e(o, n);
  }
}
function Yf(t, e, n) {
  var o, i;
  if (tt.unmount && tt.unmount(t), (o = t.ref) && (o.current && o.current !== t.__e || zf(o, null, e)), (o = t.__c) != null) {
    if (o.componentWillUnmount)
      try {
        o.componentWillUnmount();
      } catch (r) {
        tt.__e(r, e);
      }
    o.base = o.__P = null, t.__c = void 0;
  }
  if (o = t.__k)
    for (i = 0; i < o.length; i++)
      o[i] && Yf(o[i], e, n || typeof t.type != "function");
  n || t.__e == null || Wf(t.__e), t.__ = t.__e = t.__d = void 0;
}
function cg(t, e, n) {
  return this.constructor(t, n);
}
function ag(t, e, n) {
  var o, i, r;
  tt.__ && tt.__(t, e), i = (o = typeof n == "function") ? null : n && n.__k || e.__k, r = [], wc(e, t = (!o && n || e).__k = If(vl, null, [t]), i || gs, gs, e.ownerSVGElement !== void 0, !o && n ? [n] : i ? null : e.firstChild ? yl.call(e.childNodes) : null, r, !o && n ? n : i ? i.__e : e.firstChild, o), Vf(r, t);
}
yl = Hf.slice, tt = { __e: function(t, e, n, o) {
  for (var i, r, l; e = e.__; )
    if ((i = e.__c) && !i.__)
      try {
        if ((r = i.constructor) && r.getDerivedStateFromError != null && (i.setState(r.getDerivedStateFromError(t)), l = i.__d), i.componentDidCatch != null && (i.componentDidCatch(t, o || {}), l = i.__d), l)
          return i.__E = i;
      } catch (c) {
        t = c;
      }
  throw t;
} }, Pf = 0, Of = function(t) {
  return t != null && t.constructor === void 0;
}, es.prototype.setState = function(t, e) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = $e({}, this.state), typeof t == "function" && (t = t($e({}, n), this.props)), t && $e(n, t), t != null && this.__v && (e && this._sb.push(e), ha(this));
}, es.prototype.forceUpdate = function(t) {
  this.__v && (this.__e = !0, t && this.__h.push(t), ha(this));
}, es.prototype.render = vl, so = [], ys.__r = 0;
var _g = 0;
function Gf(t, e, n, o, i) {
  var r, l, c = {};
  for (l in e)
    l == "ref" ? r = e[l] : c[l] = e[l];
  var _ = { type: t, props: c, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: --_g, __source: i, __self: o };
  if (typeof t == "function" && (r = t.defaultProps))
    for (l in r)
      c[l] === void 0 && (c[l] = r[l]);
  return tt.vnode && tt.vnode(_), _;
}
var ie;
class fg {
  constructor(e = "") {
    M(this, ie, void 0);
    typeof e == "object" ? H(this, ie, e) : H(this, ie, document.appendChild(document.createComment(e)));
  }
  on(e, n, o) {
    v(this, ie).addEventListener(e, n, o);
  }
  once(e, n, o) {
    v(this, ie).addEventListener(e, n, { once: !0, ...o });
  }
  off(e, n, o) {
    v(this, ie).removeEventListener(e, n, o);
  }
  emit(e) {
    return v(this, ie).dispatchEvent(e), e;
  }
}
ie = new WeakMap();
const oc = /* @__PURE__ */ new Set([
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
class $c extends fg {
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
    return typeof e == "string" && (oc.has(e) ? (e = new Event(e), Object.assign(e, { detail: n })) : e = new CustomEvent(e, { detail: n })), super.emit($c.createEvent(e, n));
  }
  static createEvent(e, n) {
    return typeof e == "string" && (oc.has(e) ? (e = new Event(e), Object.assign(e, { detail: n })) : e = new CustomEvent(e, { detail: n })), e;
  }
}
var le, hr, Je, to;
class ga extends $c {
  constructor(n = "", o) {
    super(n);
    M(this, Je);
    M(this, le, /* @__PURE__ */ new Map());
    M(this, hr, void 0);
    H(this, hr, o == null ? void 0 : o.customEventSuffix);
  }
  on(n, o, i) {
    n = W(this, Je, to).call(this, n), super.on(n, o, i), v(this, le).set(o, [n, i]);
  }
  off(n, o, i) {
    n = W(this, Je, to).call(this, n), super.off(n, o, i), v(this, le).delete(o);
  }
  once(n, o, i) {
    n = W(this, Je, to).call(this, n);
    const r = (l) => {
      o(l), v(this, le).delete(r);
    };
    super.once(n, r, i), v(this, le).set(r, [n, i]);
  }
  emit(n, o) {
    return typeof n == "string" && (n = W(this, Je, to).call(this, n)), super.emit(n, o);
  }
  offAll() {
    Array.from(v(this, le).entries()).forEach(([n, [o, i]]) => {
      super.off(o, n, i);
    }), v(this, le).clear();
  }
}
le = new WeakMap(), hr = new WeakMap(), Je = new WeakSet(), to = function(n) {
  const o = v(this, hr);
  return oc.has(n) || typeof o != "string" || n.endsWith(o) ? n : `${n}${o}`;
};
function ug(t, e) {
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
function hg(t, e, n) {
  const o = ug(t, e), i = o[o.length - 1];
  return i === void 0 ? n : i;
}
function Bl(t) {
  return !!t && typeof t == "object" && !Array.isArray(t);
}
function rc(t, ...e) {
  if (!e.length)
    return t;
  const n = e.shift();
  if (Bl(t) && Bl(n))
    for (const o in n)
      Bl(n[o]) ? (t[o] || Object.assign(t, { [o]: {} }), rc(t[o], n[o])) : Object.assign(t, { [o]: n[o] });
  return rc(t, ...e);
}
function Lt(t, ...e) {
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
var kc = /* @__PURE__ */ ((t) => (t[t.B = 1] = "B", t[t.KB = 1024] = "KB", t[t.MB = 1048576] = "MB", t[t.GB = 1073741824] = "GB", t[t.TB = 1099511627776] = "TB", t))(kc || {});
function Qw(t, e = 2, n = "") {
  return Number.isNaN(t) ? "?KB" : (n || (t < 1024 ? n = "B" : t < 1048576 ? n = "KB" : t < 1073741824 ? n = "MB" : t < 1099511627776 ? n = "GB" : n = "TB"), (t / kc[n]).toFixed(e) + n);
}
const t$ = (t) => {
  const e = /^[0-9]*(B|KB|MB|GB|TB)$/;
  t = t.toUpperCase();
  const n = t.match(e);
  if (!n)
    return 0;
  const o = n[1];
  return t = t.replace(o, ""), Number.parseInt(t, 10) * kc[o];
};
var Rf;
let xc = ((Rf = document.documentElement.getAttribute("lang")) == null ? void 0 : Rf.toLowerCase()) ?? "zh_cn", pe;
function dg() {
  return xc;
}
function pg(t) {
  xc = t.toLowerCase();
}
function mg(t, e) {
  pe || (pe = {}), typeof t == "string" && (t = { [t]: e ?? {} }), rc(pe, t);
}
function Ir(t, e, n, o, i, r) {
  Array.isArray(t) ? pe && t.unshift(pe) : t = pe ? [pe, t] : [t], typeof n == "string" && (r = i, i = o, o = n, n = void 0);
  const l = i || xc;
  let c;
  for (const _ of t) {
    if (!_)
      continue;
    const h = _[l];
    if (!h)
      continue;
    const s = r && _ === pe ? `${r}.${e}` : e;
    if (c = hg(h, s), c !== void 0)
      break;
  }
  return c === void 0 ? o : n ? Lt(c, ...Array.isArray(n) ? n : [n]) : c;
}
Ir.addLang = mg;
Ir.getCode = dg;
Ir.setCode = pg;
function gg(t) {
  return Object.fromEntries(Object.entries(t).map(([e, n]) => {
    if (typeof n == "string")
      try {
        n = JSON.parse(n);
      } catch {
      }
    return [e, n];
  }));
}
const jl = /* @__PURE__ */ new Map();
var ce, mn, Ut;
class jt {
  constructor(e, n) {
    M(this, ce, void 0);
    M(this, mn, void 0);
    M(this, Ut, void 0);
    e = typeof e == "string" ? document.querySelector(e) : e, this.constructor.EVENTS && H(this, Ut, new ga(e, { customEventSuffix: `.${this.constructor.KEY}` })), H(this, ce, { ...this.constructor.DEFAULT }), this.setOptions({ ...e instanceof HTMLElement ? gg(e.dataset) : null, ...n }), this.constructor.all.set(e, this), H(this, mn, e), this.init(), requestAnimationFrame(() => {
      this.afterInit(), this.emit("inited", this);
    });
  }
  get options() {
    return v(this, ce);
  }
  get element() {
    return v(this, mn);
  }
  get events() {
    return v(this, Ut);
  }
  init() {
  }
  afterInit() {
  }
  setOptions(e) {
    return e && Object.assign(v(this, ce), e), v(this, ce);
  }
  render(e) {
    this.setOptions(e);
  }
  destroy() {
    this.constructor.all.delete(v(this, mn)), v(this, Ut) && (this.emit("destroyed", this), v(this, Ut).offAll());
  }
  on(e, n, o) {
    var i;
    (i = v(this, Ut)) == null || i.on(e, n, o);
  }
  once(e, n, o) {
    var i;
    (i = v(this, Ut)) == null || i.once(e, n, o);
  }
  off(e, n, o) {
    var i;
    (i = v(this, Ut)) == null || i.off(e, n, o);
  }
  emit(e, n) {
    var l;
    let o = ga.createEvent(e, n);
    const i = `on${e[0].toUpperCase()}${e.substring(1)}`, r = v(this, ce)[i];
    return r && r(o) === !1 && (o.preventDefault(), o.stopPropagation()), o = (l = v(this, Ut)) == null ? void 0 : l.emit(e, n), o;
  }
  i18n(e, n, o) {
    return Ir(v(this, ce).i18n, e, n, o, this.options.lang, this.constructor.NAME) ?? `{i18n:${e}}`;
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
    if (jl.has(e))
      return jl.get(e);
    const n = /* @__PURE__ */ new Map();
    return jl.set(e, n), n;
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
ce = new WeakMap(), mn = new WeakMap(), Ut = new WeakMap(), L(jt, "EVENTS", !1), L(jt, "DEFAULT", {});
class xt extends jt {
  constructor() {
    super(...arguments);
    L(this, "ref", sg());
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
    ag(/* @__PURE__ */ Gf(o, { ref: this.ref, ...this.setOptions(n) }), this.element);
  }
}
L(xt, "Component");
var Sc, lt, qf, Xf, io, ya, Kf = {}, Zf = [], yg = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function ke(t, e) {
  for (var n in e)
    t[n] = e[n];
  return t;
}
function Jf(t) {
  var e = t.parentNode;
  e && e.removeChild(t);
}
function qn(t, e, n) {
  var o, i, r, l = {};
  for (r in e)
    r == "key" ? o = e[r] : r == "ref" ? i = e[r] : l[r] = e[r];
  if (arguments.length > 2 && (l.children = arguments.length > 3 ? Sc.call(arguments, 2) : n), typeof t == "function" && t.defaultProps != null)
    for (r in t.defaultProps)
      l[r] === void 0 && (l[r] = t.defaultProps[r]);
  return ns(t, l, o, i, null);
}
function ns(t, e, n, o, i) {
  var r = { type: t, props: e, key: n, ref: o, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: i ?? ++qf };
  return i == null && lt.vnode != null && lt.vnode(r), r;
}
function vg() {
  return { current: null };
}
function Cc(t) {
  return t.children;
}
function lo(t, e) {
  this.props = t, this.context = e;
}
function Bo(t, e) {
  if (e == null)
    return t.__ ? Bo(t.__, t.__.__k.indexOf(t) + 1) : null;
  for (var n; e < t.__k.length; e++)
    if ((n = t.__k[e]) != null && n.__e != null)
      return n.__e;
  return typeof t.type == "function" ? Bo(t) : null;
}
function Qf(t) {
  var e, n;
  if ((t = t.__) != null && t.__c != null) {
    for (t.__e = t.__c.base = null, e = 0; e < t.__k.length; e++)
      if ((n = t.__k[e]) != null && n.__e != null) {
        t.__e = t.__c.base = n.__e;
        break;
      }
    return Qf(t);
  }
}
function va(t) {
  (!t.__d && (t.__d = !0) && io.push(t) && !bs.__r++ || ya !== lt.debounceRendering) && ((ya = lt.debounceRendering) || setTimeout)(bs);
}
function bs() {
  for (var t; bs.__r = io.length; )
    t = io.sort(function(e, n) {
      return e.__v.__b - n.__v.__b;
    }), io = [], t.some(function(e) {
      var n, o, i, r, l, c;
      e.__d && (l = (r = (n = e).__v).__e, (c = n.__P) && (o = [], (i = ke({}, r)).__v = r.__v + 1, ou(c, r, i, n.__n, c.ownerSVGElement !== void 0, r.__h != null ? [l] : null, o, l ?? Bo(r), r.__h), wg(o, r), r.__e != l && Qf(r)));
    });
}
function tu(t, e, n, o, i, r, l, c, _, h) {
  var s, d, f, a, u, b, p, m = o && o.__k || Zf, g = m.length;
  for (n.__k = [], s = 0; s < e.length; s++)
    if ((a = n.__k[s] = (a = e[s]) == null || typeof a == "boolean" ? null : typeof a == "string" || typeof a == "number" || typeof a == "bigint" ? ns(null, a, null, null, a) : Array.isArray(a) ? ns(Cc, { children: a }, null, null, null) : a.__b > 0 ? ns(a.type, a.props, a.key, a.ref ? a.ref : null, a.__v) : a) != null) {
      if (a.__ = n, a.__b = n.__b + 1, (f = m[s]) === null || f && a.key == f.key && a.type === f.type)
        m[s] = void 0;
      else
        for (d = 0; d < g; d++) {
          if ((f = m[d]) && a.key == f.key && a.type === f.type) {
            m[d] = void 0;
            break;
          }
          f = null;
        }
      ou(t, a, f = f || Kf, i, r, l, c, _, h), u = a.__e, (d = a.ref) && f.ref != d && (p || (p = []), f.ref && p.push(f.ref, null, a), p.push(d, a.__c || u, a)), u != null ? (b == null && (b = u), typeof a.type == "function" && a.__k === f.__k ? a.__d = _ = eu(a, _, t) : _ = nu(t, a, f, m, u, _), typeof n.type == "function" && (n.__d = _)) : _ && f.__e == _ && _.parentNode != t && (_ = Bo(f));
    }
  for (n.__e = b, s = g; s--; )
    m[s] != null && su(m[s], m[s]);
  if (p)
    for (s = 0; s < p.length; s++)
      ru(p[s], p[++s], p[++s]);
}
function eu(t, e, n) {
  for (var o, i = t.__k, r = 0; i && r < i.length; r++)
    (o = i[r]) && (o.__ = t, e = typeof o.type == "function" ? eu(o, e, n) : nu(n, o, o, i, o.__e, e));
  return e;
}
function nu(t, e, n, o, i, r) {
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
function bg(t, e, n, o, i) {
  var r;
  for (r in n)
    r === "children" || r === "key" || r in e || ws(t, r, null, n[r], o);
  for (r in e)
    i && typeof e[r] != "function" || r === "children" || r === "key" || r === "value" || r === "checked" || n[r] === e[r] || ws(t, r, e[r], n[r], o);
}
function ba(t, e, n) {
  e[0] === "-" ? t.setProperty(e, n) : t[e] = n == null ? "" : typeof n != "number" || yg.test(e) ? n : n + "px";
}
function ws(t, e, n, o, i) {
  var r;
  t:
    if (e === "style")
      if (typeof n == "string")
        t.style.cssText = n;
      else {
        if (typeof o == "string" && (t.style.cssText = o = ""), o)
          for (e in o)
            n && e in n || ba(t.style, e, "");
        if (n)
          for (e in n)
            o && n[e] === o[e] || ba(t.style, e, n[e]);
      }
    else if (e[0] === "o" && e[1] === "n")
      r = e !== (e = e.replace(/Capture$/, "")), e = e.toLowerCase() in t ? e.toLowerCase().slice(2) : e.slice(2), t.l || (t.l = {}), t.l[e + r] = n, n ? o || t.addEventListener(e, r ? $a : wa, r) : t.removeEventListener(e, r ? $a : wa, r);
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
function wa(t) {
  this.l[t.type + !1](lt.event ? lt.event(t) : t);
}
function $a(t) {
  this.l[t.type + !0](lt.event ? lt.event(t) : t);
}
function ou(t, e, n, o, i, r, l, c, _) {
  var h, s, d, f, a, u, b, p, m, g, w, k, C, A, E, y = e.type;
  if (e.constructor !== void 0)
    return null;
  n.__h != null && (_ = n.__h, c = e.__e = n.__e, e.__h = null, r = [c]), (h = lt.__b) && h(e);
  try {
    t:
      if (typeof y == "function") {
        if (p = e.props, m = (h = y.contextType) && o[h.__c], g = h ? m ? m.props.value : h.__ : o, n.__c ? b = (s = e.__c = n.__c).__ = s.__E : ("prototype" in y && y.prototype.render ? e.__c = s = new y(p, g) : (e.__c = s = new lo(p, g), s.constructor = y, s.render = kg), m && m.sub(s), s.props = p, s.state || (s.state = {}), s.context = g, s.__n = o, d = s.__d = !0, s.__h = [], s._sb = []), s.__s == null && (s.__s = s.state), y.getDerivedStateFromProps != null && (s.__s == s.state && (s.__s = ke({}, s.__s)), ke(s.__s, y.getDerivedStateFromProps(p, s.__s))), f = s.props, a = s.state, d)
          y.getDerivedStateFromProps == null && s.componentWillMount != null && s.componentWillMount(), s.componentDidMount != null && s.__h.push(s.componentDidMount);
        else {
          if (y.getDerivedStateFromProps == null && p !== f && s.componentWillReceiveProps != null && s.componentWillReceiveProps(p, g), !s.__e && s.shouldComponentUpdate != null && s.shouldComponentUpdate(p, s.__s, g) === !1 || e.__v === n.__v) {
            for (s.props = p, s.state = s.__s, e.__v !== n.__v && (s.__d = !1), s.__v = e, e.__e = n.__e, e.__k = n.__k, e.__k.forEach(function(x) {
              x && (x.__ = e);
            }), w = 0; w < s._sb.length; w++)
              s.__h.push(s._sb[w]);
            s._sb = [], s.__h.length && l.push(s);
            break t;
          }
          s.componentWillUpdate != null && s.componentWillUpdate(p, s.__s, g), s.componentDidUpdate != null && s.__h.push(function() {
            s.componentDidUpdate(f, a, u);
          });
        }
        if (s.context = g, s.props = p, s.__v = e, s.__P = t, k = lt.__r, C = 0, "prototype" in y && y.prototype.render) {
          for (s.state = s.__s, s.__d = !1, k && k(e), h = s.render(s.props, s.state, s.context), A = 0; A < s._sb.length; A++)
            s.__h.push(s._sb[A]);
          s._sb = [];
        } else
          do
            s.__d = !1, k && k(e), h = s.render(s.props, s.state, s.context), s.state = s.__s;
          while (s.__d && ++C < 25);
        s.state = s.__s, s.getChildContext != null && (o = ke(ke({}, o), s.getChildContext())), d || s.getSnapshotBeforeUpdate == null || (u = s.getSnapshotBeforeUpdate(f, a)), E = h != null && h.type === Cc && h.key == null ? h.props.children : h, tu(t, Array.isArray(E) ? E : [E], e, n, o, i, r, l, c, _), s.base = e.__e, e.__h = null, s.__h.length && l.push(s), b && (s.__E = s.__ = null), s.__e = !1;
      } else
        r == null && e.__v === n.__v ? (e.__k = n.__k, e.__e = n.__e) : e.__e = $g(n.__e, e, n, o, i, r, l, _);
    (h = lt.diffed) && h(e);
  } catch (x) {
    e.__v = null, (_ || r != null) && (e.__e = c, e.__h = !!_, r[r.indexOf(c)] = null), lt.__e(x, e, n);
  }
}
function wg(t, e) {
  lt.__c && lt.__c(e, t), t.some(function(n) {
    try {
      t = n.__h, n.__h = [], t.some(function(o) {
        o.call(n);
      });
    } catch (o) {
      lt.__e(o, n.__v);
    }
  });
}
function $g(t, e, n, o, i, r, l, c) {
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
    if (r = r && Sc.call(t.childNodes), h = (d = n.props || Kf).dangerouslySetInnerHTML, s = f.dangerouslySetInnerHTML, !c) {
      if (r != null)
        for (d = {}, u = 0; u < t.attributes.length; u++)
          d[t.attributes[u].name] = t.attributes[u].value;
      (s || h) && (s && (h && s.__html == h.__html || s.__html === t.innerHTML) || (t.innerHTML = s && s.__html || ""));
    }
    if (bg(t, f, d, i, c), s)
      e.__k = [];
    else if (u = e.props.children, tu(t, Array.isArray(u) ? u : [u], e, n, o, i && a !== "foreignObject", r, l, r ? r[0] : n.__k && Bo(n, 0), c), r != null)
      for (u = r.length; u--; )
        r[u] != null && Jf(r[u]);
    c || ("value" in f && (u = f.value) !== void 0 && (u !== t.value || a === "progress" && !u || a === "option" && u !== d.value) && ws(t, "value", u, d.value, !1), "checked" in f && (u = f.checked) !== void 0 && u !== t.checked && ws(t, "checked", u, d.checked, !1));
  }
  return t;
}
function ru(t, e, n) {
  try {
    typeof t == "function" ? t(e) : t.current = e;
  } catch (o) {
    lt.__e(o, n);
  }
}
function su(t, e, n) {
  var o, i;
  if (lt.unmount && lt.unmount(t), (o = t.ref) && (o.current && o.current !== t.__e || ru(o, null, e)), (o = t.__c) != null) {
    if (o.componentWillUnmount)
      try {
        o.componentWillUnmount();
      } catch (r) {
        lt.__e(r, e);
      }
    o.base = o.__P = null, t.__c = void 0;
  }
  if (o = t.__k)
    for (i = 0; i < o.length; i++)
      o[i] && su(o[i], e, n || typeof t.type != "function");
  n || t.__e == null || Jf(t.__e), t.__ = t.__e = t.__d = void 0;
}
function kg(t, e, n) {
  return this.constructor(t, n);
}
Sc = Zf.slice, lt = { __e: function(t, e, n, o) {
  for (var i, r, l; e = e.__; )
    if ((i = e.__c) && !i.__)
      try {
        if ((r = i.constructor) && r.getDerivedStateFromError != null && (i.setState(r.getDerivedStateFromError(t)), l = i.__d), i.componentDidCatch != null && (i.componentDidCatch(t, o || {}), l = i.__d), l)
          return i.__E = i;
      } catch (c) {
        t = c;
      }
  throw t;
} }, qf = 0, Xf = function(t) {
  return t != null && t.constructor === void 0;
}, lo.prototype.setState = function(t, e) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = ke({}, this.state), typeof t == "function" && (t = t(ke({}, n), this.props)), t && ke(n, t), t != null && this.__v && (e && this._sb.push(e), va(this));
}, lo.prototype.forceUpdate = function(t) {
  this.__v && (this.__e = !0, t && this.__h.push(t), va(this));
}, lo.prototype.render = Cc, io = [], bs.__r = 0;
var xg = 0;
function Zt(t, e, n, o, i) {
  var r, l, c = {};
  for (l in e)
    l == "ref" ? r = e[l] : c[l] = e[l];
  var _ = { type: t, props: c, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: --xg, __source: i, __self: o };
  if (typeof t == "function" && (r = t.defaultProps))
    for (l in r)
      c[l] === void 0 && (c[l] = r[l]);
  return lt.vnode && lt.vnode(_), _;
}
function bl(...t) {
  const e = [], n = /* @__PURE__ */ new Map(), o = (i, r) => {
    if (Array.isArray(i) && (r = i[1], i = i[0]), !i.length)
      return;
    const l = n.get(i);
    typeof l == "number" ? e[l][1] = !!r : (n.set(i, e.length), e.push([i, !!r]));
  };
  return t.forEach((i) => {
    typeof i == "function" && (i = i()), Array.isArray(i) ? bl(...i).forEach(o) : i && typeof i == "object" ? Object.entries(i).forEach(o) : typeof i == "string" && i.split(" ").forEach((r) => o(r, !0));
  }), e.sort((i, r) => (n.get(i[0]) || 0) - (n.get(r[0]) || 0));
}
const F = (...t) => bl(...t).reduce((e, [n, o]) => (o && e.push(n), e), []).join(" ");
function Sg({
  component: t = "div",
  className: e,
  children: n,
  style: o,
  attrs: i
}) {
  return qn(t, {
    className: F(e),
    style: o,
    ...i
  }, n);
}
function iu({
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
    typeof c == "string" ? /* @__PURE__ */ Zt("i", { class: `icon ${c}` }) : c,
    /* @__PURE__ */ Zt("span", { className: "text", children: _ }),
    typeof n == "function" ? n() : n,
    typeof s == "string" ? /* @__PURE__ */ Zt("i", { class: `icon ${s}` }) : s
  ];
  return qn(t, {
    className: F(e, { disabled: r, active: l }),
    title: d,
    [t === "a" ? "href" : "data-url"]: i,
    [t === "a" ? "target" : "data-target"]: h,
    style: f,
    onClick: a,
    ...o
  }, ...u);
}
function Cg({
  component: t = "div",
  className: e,
  text: n,
  attrs: o,
  children: i,
  style: r,
  onClick: l
}) {
  return qn(t, {
    className: F(e),
    style: r,
    onClick: l,
    ...o
  }, n, typeof i == "function" ? i() : i);
}
function Eg({
  component: t = "div",
  className: e,
  style: n,
  space: o,
  flex: i,
  attrs: r,
  onClick: l,
  children: c
}) {
  return qn(t, {
    className: F(e),
    style: { width: o, height: o, flex: i, ...n },
    onClick: l,
    ...r
  }, c);
}
function Ag(t) {
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
      m != null && (typeof m == "object" && !Of(m) && ("html" in m || "__html" in m || "className" in m || "style" in m || "attrs" in m || "children" in m) ? m.html ? a.push(
        /* @__PURE__ */ Gf("div", { className: F(m.className), style: m.style, dangerouslySetInnerHTML: { __html: m.html }, ...m.attrs ?? {} })
      ) : m.__html ? u.push(m.__html) : (m.style && Object.assign(f, m.style), m.className && d.push(m.className), m.children && a.push(m.children), m.attrs && Object.assign(s, m.attrs)) : a.push(m));
    });
  }), u.length && Object.assign(s, { dangerouslySetInnerHTML: { __html: u } }), [{
    className: F(d),
    style: f,
    ...s
  }, a];
}
function sc({
  tag: t = "div",
  ...e
}) {
  const [n, o] = Ag(e);
  return If(t, n, ...o);
}
function Tg(t) {
  return /* @__PURE__ */ Zt(sc, { ...t });
}
function lu({
  component: t = "div",
  className: e,
  children: n,
  style: o,
  attrs: i
}) {
  return qn(t, {
    className: F(e),
    style: o,
    ...i
  }, n);
}
var Jn;
let jn = (Jn = class extends lo {
  constructor() {
    super(...arguments);
    L(this, "ref", vg());
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
          return /* @__PURE__ */ Zt(p, { ...r });
      } else if (typeof l == "function") {
        const p = l.call(this, r, qn);
        if (Xf(p))
          return p;
        typeof p == "object" && Object.assign(r, p);
      }
    }
    const { type: c = "item", component: _, key: h = i, rootAttrs: s, rootClass: d, rootStyle: f, rootChildren: a, ...u } = r, b = !_ || typeof _ == "string" ? this.constructor.ItemComponents && this.constructor.ItemComponents[c] || jn.ItemComponents[c] : _;
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
    return /* @__PURE__ */ Zt(
      "li",
      {
        className: F(`${this.name}-${i.type}`, l),
        ..._,
        children: [
          /* @__PURE__ */ Zt(n, { ...i }),
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
    return /* @__PURE__ */ Zt(b, { class: F(this.name, l), ...u, ref: this.ref, children: [
      c && c.map(this.renderItem.bind(this, n)),
      _
    ] });
  }
}, L(Jn, "ItemComponents", {
  divider: Sg,
  item: iu,
  heading: Cg,
  space: Eg,
  custom: Tg,
  basic: lu
}), L(Jn, "ROOT_TAG", "menu"), L(Jn, "NAME", "action-menu"), Jn);
class ka extends xt {
}
L(ka, "NAME", "actionmenu"), L(ka, "Component", jn);
function xa({
  ...t
}) {
  return /* @__PURE__ */ Zt(iu, { ...t });
}
var Ql, dr, Vt, gn;
let cu = (Ql = class extends jn {
  constructor(n) {
    super(n);
    M(this, dr, /* @__PURE__ */ new Set());
    M(this, Vt, void 0);
    M(this, gn, (n, o, i) => {
      this.toggleNestedMenu(n, o), i.preventDefault();
    });
    H(this, Vt, n.nestedShow === void 0), v(this, Vt) && (this.state = { nestedShow: n.defaultNestedShow ?? {} });
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
    return /* @__PURE__ */ Zt(
      i,
      {
        items: o,
        name: this.props.name,
        nestedShow: v(this, Vt) ? this.state.nestedShow : this.props.nestedShow,
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
    v(this, dr).add(l);
    const c = this.isNestedMenuShow(l);
    if (c && (r.rootChildren = [
      r.rootChildren,
      this.renderNestedMenu(o)
    ], r.component = xa), this.nestedTrigger === "hover")
      r.rootAttrs = {
        ...r.rootAttrs,
        onMouseEnter: v(this, gn).bind(this, l, !0),
        onMouseLeave: v(this, gn).bind(this, l, !1)
      };
    else if (this.nestedTrigger === "click") {
      const { onClick: h } = r;
      r.onClick = (s) => {
        v(this, gn).call(this, l, void 0, s), h == null || h(s);
      };
    }
    const _ = this.renderToggleIcon(c, r);
    return _ && (r.children = [r.children, _]), r.rootClass = [r.rootClass, "has-nested-menu", c ? "show" : ""], r;
  }
  isNestedMenuShow(n) {
    const o = v(this, Vt) ? this.state.nestedShow : this.props.nestedShow;
    return o && typeof o == "object" ? o[n] : !!o;
  }
  toggleNestedMenu(n, o) {
    const { controlledMenu: i } = this.props;
    if (i)
      return i.toggleNestedMenu(n, o);
    if (!v(this, Vt))
      return !1;
    let { nestedShow: r = {} } = this.state;
    if (typeof r == "boolean" && (r === !0 ? r = [...v(this, dr).values()].reduce((l, c) => (l[c] = !0, l), {}) : r = {}), o === void 0)
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
    v(this, Vt) && this.setState({ nestedShow: !0 });
  }
  hideAllNestedMenu() {
    v(this, Vt) && this.setState({ nestedShow: !1 });
  }
}, dr = new WeakMap(), Vt = new WeakMap(), gn = new WeakMap(), L(Ql, "ItemComponents", {
  item: xa
}), Ql);
class Sa extends xt {
}
L(Sa, "NAME", "actionmenunested"), L(Sa, "Component", cu);
var Ec, ct, au, co, Ca, _u = {}, fu = [], Mg = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function xe(t, e) {
  for (var n in e)
    t[n] = e[n];
  return t;
}
function uu(t) {
  var e = t.parentNode;
  e && e.removeChild(t);
}
function Lg(t, e, n) {
  var o, i, r, l = {};
  for (r in e)
    r == "key" ? o = e[r] : r == "ref" ? i = e[r] : l[r] = e[r];
  if (arguments.length > 2 && (l.children = arguments.length > 3 ? Ec.call(arguments, 2) : n), typeof t == "function" && t.defaultProps != null)
    for (r in t.defaultProps)
      l[r] === void 0 && (l[r] = t.defaultProps[r]);
  return os(t, l, o, i, null);
}
function os(t, e, n, o, i) {
  var r = { type: t, props: e, key: n, ref: o, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: i ?? ++au };
  return i == null && ct.vnode != null && ct.vnode(r), r;
}
function Ac(t) {
  return t.children;
}
function ao(t, e) {
  this.props = t, this.context = e;
}
function jo(t, e) {
  if (e == null)
    return t.__ ? jo(t.__, t.__.__k.indexOf(t) + 1) : null;
  for (var n; e < t.__k.length; e++)
    if ((n = t.__k[e]) != null && n.__e != null)
      return n.__e;
  return typeof t.type == "function" ? jo(t) : null;
}
function hu(t) {
  var e, n;
  if ((t = t.__) != null && t.__c != null) {
    for (t.__e = t.__c.base = null, e = 0; e < t.__k.length; e++)
      if ((n = t.__k[e]) != null && n.__e != null) {
        t.__e = t.__c.base = n.__e;
        break;
      }
    return hu(t);
  }
}
function Ea(t) {
  (!t.__d && (t.__d = !0) && co.push(t) && !$s.__r++ || Ca !== ct.debounceRendering) && ((Ca = ct.debounceRendering) || setTimeout)($s);
}
function $s() {
  for (var t; $s.__r = co.length; )
    t = co.sort(function(e, n) {
      return e.__v.__b - n.__v.__b;
    }), co = [], t.some(function(e) {
      var n, o, i, r, l, c;
      e.__d && (l = (r = (n = e).__v).__e, (c = n.__P) && (o = [], (i = xe({}, r)).__v = r.__v + 1, gu(c, r, i, n.__n, c.ownerSVGElement !== void 0, r.__h != null ? [l] : null, o, l ?? jo(r), r.__h), Ng(o, r), r.__e != l && hu(r)));
    });
}
function du(t, e, n, o, i, r, l, c, _, h) {
  var s, d, f, a, u, b, p, m = o && o.__k || fu, g = m.length;
  for (n.__k = [], s = 0; s < e.length; s++)
    if ((a = n.__k[s] = (a = e[s]) == null || typeof a == "boolean" ? null : typeof a == "string" || typeof a == "number" || typeof a == "bigint" ? os(null, a, null, null, a) : Array.isArray(a) ? os(Ac, { children: a }, null, null, null) : a.__b > 0 ? os(a.type, a.props, a.key, a.ref ? a.ref : null, a.__v) : a) != null) {
      if (a.__ = n, a.__b = n.__b + 1, (f = m[s]) === null || f && a.key == f.key && a.type === f.type)
        m[s] = void 0;
      else
        for (d = 0; d < g; d++) {
          if ((f = m[d]) && a.key == f.key && a.type === f.type) {
            m[d] = void 0;
            break;
          }
          f = null;
        }
      gu(t, a, f = f || _u, i, r, l, c, _, h), u = a.__e, (d = a.ref) && f.ref != d && (p || (p = []), f.ref && p.push(f.ref, null, a), p.push(d, a.__c || u, a)), u != null ? (b == null && (b = u), typeof a.type == "function" && a.__k === f.__k ? a.__d = _ = pu(a, _, t) : _ = mu(t, a, f, m, u, _), typeof n.type == "function" && (n.__d = _)) : _ && f.__e == _ && _.parentNode != t && (_ = jo(f));
    }
  for (n.__e = b, s = g; s--; )
    m[s] != null && vu(m[s], m[s]);
  if (p)
    for (s = 0; s < p.length; s++)
      yu(p[s], p[++s], p[++s]);
}
function pu(t, e, n) {
  for (var o, i = t.__k, r = 0; i && r < i.length; r++)
    (o = i[r]) && (o.__ = t, e = typeof o.type == "function" ? pu(o, e, n) : mu(n, o, o, i, o.__e, e));
  return e;
}
function mu(t, e, n, o, i, r) {
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
function Dg(t, e, n, o, i) {
  var r;
  for (r in n)
    r === "children" || r === "key" || r in e || ks(t, r, null, n[r], o);
  for (r in e)
    i && typeof e[r] != "function" || r === "children" || r === "key" || r === "value" || r === "checked" || n[r] === e[r] || ks(t, r, e[r], n[r], o);
}
function Aa(t, e, n) {
  e[0] === "-" ? t.setProperty(e, n) : t[e] = n == null ? "" : typeof n != "number" || Mg.test(e) ? n : n + "px";
}
function ks(t, e, n, o, i) {
  var r;
  t:
    if (e === "style")
      if (typeof n == "string")
        t.style.cssText = n;
      else {
        if (typeof o == "string" && (t.style.cssText = o = ""), o)
          for (e in o)
            n && e in n || Aa(t.style, e, "");
        if (n)
          for (e in n)
            o && n[e] === o[e] || Aa(t.style, e, n[e]);
      }
    else if (e[0] === "o" && e[1] === "n")
      r = e !== (e = e.replace(/Capture$/, "")), e = e.toLowerCase() in t ? e.toLowerCase().slice(2) : e.slice(2), t.l || (t.l = {}), t.l[e + r] = n, n ? o || t.addEventListener(e, r ? Ma : Ta, r) : t.removeEventListener(e, r ? Ma : Ta, r);
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
function Ta(t) {
  this.l[t.type + !1](ct.event ? ct.event(t) : t);
}
function Ma(t) {
  this.l[t.type + !0](ct.event ? ct.event(t) : t);
}
function gu(t, e, n, o, i, r, l, c, _) {
  var h, s, d, f, a, u, b, p, m, g, w, k, C, A, E, y = e.type;
  if (e.constructor !== void 0)
    return null;
  n.__h != null && (_ = n.__h, c = e.__e = n.__e, e.__h = null, r = [c]), (h = ct.__b) && h(e);
  try {
    t:
      if (typeof y == "function") {
        if (p = e.props, m = (h = y.contextType) && o[h.__c], g = h ? m ? m.props.value : h.__ : o, n.__c ? b = (s = e.__c = n.__c).__ = s.__E : ("prototype" in y && y.prototype.render ? e.__c = s = new y(p, g) : (e.__c = s = new ao(p, g), s.constructor = y, s.render = Pg), m && m.sub(s), s.props = p, s.state || (s.state = {}), s.context = g, s.__n = o, d = s.__d = !0, s.__h = [], s._sb = []), s.__s == null && (s.__s = s.state), y.getDerivedStateFromProps != null && (s.__s == s.state && (s.__s = xe({}, s.__s)), xe(s.__s, y.getDerivedStateFromProps(p, s.__s))), f = s.props, a = s.state, d)
          y.getDerivedStateFromProps == null && s.componentWillMount != null && s.componentWillMount(), s.componentDidMount != null && s.__h.push(s.componentDidMount);
        else {
          if (y.getDerivedStateFromProps == null && p !== f && s.componentWillReceiveProps != null && s.componentWillReceiveProps(p, g), !s.__e && s.shouldComponentUpdate != null && s.shouldComponentUpdate(p, s.__s, g) === !1 || e.__v === n.__v) {
            for (s.props = p, s.state = s.__s, e.__v !== n.__v && (s.__d = !1), s.__v = e, e.__e = n.__e, e.__k = n.__k, e.__k.forEach(function(x) {
              x && (x.__ = e);
            }), w = 0; w < s._sb.length; w++)
              s.__h.push(s._sb[w]);
            s._sb = [], s.__h.length && l.push(s);
            break t;
          }
          s.componentWillUpdate != null && s.componentWillUpdate(p, s.__s, g), s.componentDidUpdate != null && s.__h.push(function() {
            s.componentDidUpdate(f, a, u);
          });
        }
        if (s.context = g, s.props = p, s.__v = e, s.__P = t, k = ct.__r, C = 0, "prototype" in y && y.prototype.render) {
          for (s.state = s.__s, s.__d = !1, k && k(e), h = s.render(s.props, s.state, s.context), A = 0; A < s._sb.length; A++)
            s.__h.push(s._sb[A]);
          s._sb = [];
        } else
          do
            s.__d = !1, k && k(e), h = s.render(s.props, s.state, s.context), s.state = s.__s;
          while (s.__d && ++C < 25);
        s.state = s.__s, s.getChildContext != null && (o = xe(xe({}, o), s.getChildContext())), d || s.getSnapshotBeforeUpdate == null || (u = s.getSnapshotBeforeUpdate(f, a)), E = h != null && h.type === Ac && h.key == null ? h.props.children : h, du(t, Array.isArray(E) ? E : [E], e, n, o, i, r, l, c, _), s.base = e.__e, e.__h = null, s.__h.length && l.push(s), b && (s.__E = s.__ = null), s.__e = !1;
      } else
        r == null && e.__v === n.__v ? (e.__k = n.__k, e.__e = n.__e) : e.__e = Rg(n.__e, e, n, o, i, r, l, _);
    (h = ct.diffed) && h(e);
  } catch (x) {
    e.__v = null, (_ || r != null) && (e.__e = c, e.__h = !!_, r[r.indexOf(c)] = null), ct.__e(x, e, n);
  }
}
function Ng(t, e) {
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
function Rg(t, e, n, o, i, r, l, c) {
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
    if (r = r && Ec.call(t.childNodes), h = (d = n.props || _u).dangerouslySetInnerHTML, s = f.dangerouslySetInnerHTML, !c) {
      if (r != null)
        for (d = {}, u = 0; u < t.attributes.length; u++)
          d[t.attributes[u].name] = t.attributes[u].value;
      (s || h) && (s && (h && s.__html == h.__html || s.__html === t.innerHTML) || (t.innerHTML = s && s.__html || ""));
    }
    if (Dg(t, f, d, i, c), s)
      e.__k = [];
    else if (u = e.props.children, du(t, Array.isArray(u) ? u : [u], e, n, o, i && a !== "foreignObject", r, l, r ? r[0] : n.__k && jo(n, 0), c), r != null)
      for (u = r.length; u--; )
        r[u] != null && uu(r[u]);
    c || ("value" in f && (u = f.value) !== void 0 && (u !== t.value || a === "progress" && !u || a === "option" && u !== d.value) && ks(t, "value", u, d.value, !1), "checked" in f && (u = f.checked) !== void 0 && u !== t.checked && ks(t, "checked", u, d.checked, !1));
  }
  return t;
}
function yu(t, e, n) {
  try {
    typeof t == "function" ? t(e) : t.current = e;
  } catch (o) {
    ct.__e(o, n);
  }
}
function vu(t, e, n) {
  var o, i;
  if (ct.unmount && ct.unmount(t), (o = t.ref) && (o.current && o.current !== t.__e || yu(o, null, e)), (o = t.__c) != null) {
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
      o[i] && vu(o[i], e, n || typeof t.type != "function");
  n || t.__e == null || uu(t.__e), t.__ = t.__e = t.__d = void 0;
}
function Pg(t, e, n) {
  return this.constructor(t, n);
}
Ec = fu.slice, ct = { __e: function(t, e, n, o) {
  for (var i, r, l; e = e.__; )
    if ((i = e.__c) && !i.__)
      try {
        if ((r = i.constructor) && r.getDerivedStateFromError != null && (i.setState(r.getDerivedStateFromError(t)), l = i.__d), i.componentDidCatch != null && (i.componentDidCatch(t, o || {}), l = i.__d), l)
          return i.__E = i;
      } catch (c) {
        t = c;
      }
  throw t;
} }, au = 0, ao.prototype.setState = function(t, e) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = xe({}, this.state), typeof t == "function" && (t = t(xe({}, n), this.props)), t && xe(n, t), t != null && this.__v && (e && this._sb.push(e), Ea(this));
}, ao.prototype.forceUpdate = function(t) {
  this.__v && (this.__e = !0, t && this.__h.push(t), Ea(this));
}, ao.prototype.render = Ac, co = [], $s.__r = 0;
var Og = 0;
function Kn(t, e, n, o, i) {
  var r, l, c = {};
  for (l in e)
    l == "ref" ? r = e[l] : c[l] = e[l];
  var _ = { type: t, props: c, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: --Og, __source: i, __self: o };
  if (typeof t == "function" && (r = t.defaultProps))
    for (l in r)
      c[l] === void 0 && (c[l] = r[l]);
  return ct.vnode && ct.vnode(_), _;
}
let Jt = class extends ao {
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
      hint: g,
      ...w
    } = this.props, k = e || (l ? "a" : "button"), C = u == null || typeof u == "string" && !u.length || s && !f, A = C && !a && !b && !r && !s;
    return Lg(
      k,
      {
        className: F("btn", n, i, {
          "btn-caret": A,
          disabled: _ || s,
          active: h,
          loading: s,
          square: m === void 0 ? !A && !r && C : m
        }, o ? `size-${o}` : ""),
        title: g,
        [k === "a" ? "href" : "data-url"]: l,
        [k === "a" ? "target" : "data-target"]: c,
        type: k === "button" ? "button" : void 0,
        ...w
      },
      s ? /* @__PURE__ */ Kn("i", { class: `spin icon ${d || "icon-spinner-snake"}` }) : typeof a == "string" ? /* @__PURE__ */ Kn("i", { class: `icon ${a}` }) : a,
      C ? null : /* @__PURE__ */ Kn("span", { className: "text", children: s ? f : u }),
      s ? null : r,
      s ? null : typeof b == "string" ? /* @__PURE__ */ Kn("i", { class: `icon ${b}` }) : b,
      s ? null : p ? /* @__PURE__ */ Kn("span", { className: typeof p == "string" ? `caret-${p}` : "caret" }) : null
    );
  }
};
class La extends xt {
}
L(La, "NAME", "button"), L(La, "Component", Jt);
var ic;
ic = { __e: function(t, e, n, o) {
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
var Hg = 0;
function Wg(t, e, n, o, i) {
  var r, l, c = {};
  for (l in e)
    l == "ref" ? r = e[l] : c[l] = e[l];
  var _ = { type: t, props: c, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: --Hg, __source: i, __self: o };
  if (typeof t == "function" && (r = t.defaultProps))
    for (l in r)
      c[l] === void 0 && (c[l] = r[l]);
  return ic.vnode && ic.vnode(_), _;
}
var tc;
let Tc = (tc = class extends cu {
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
    return /* @__PURE__ */ Wg("span", { class: `${this.name}-toggle-icon caret-${e ? "down" : "right"}` });
  }
}, L(tc, "NAME", "menu"), tc);
class Da extends xt {
}
L(Da, "NAME", "menu"), L(Da, "Component", Tc);
let Ig = (t = 21) => crypto.getRandomValues(new Uint8Array(t)).reduce((e, n) => (n &= 63, n < 36 ? e += n.toString(36) : n < 62 ? e += (n - 26).toString(36).toUpperCase() : n > 62 ? e += "-" : e += "_", e), "");
var bu, at, wu, _o, Na, $u = {}, ku = [], Ug = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function Se(t, e) {
  for (var n in e)
    t[n] = e[n];
  return t;
}
function xu(t) {
  var e = t.parentNode;
  e && e.removeChild(t);
}
function Vl(t, e, n, o, i) {
  var r = { type: t, props: e, key: n, ref: o, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: i ?? ++wu };
  return i == null && at.vnode != null && at.vnode(r), r;
}
function Mc(t) {
  return t.children;
}
function fo(t, e) {
  this.props = t, this.context = e;
}
function Vo(t, e) {
  if (e == null)
    return t.__ ? Vo(t.__, t.__.__k.indexOf(t) + 1) : null;
  for (var n; e < t.__k.length; e++)
    if ((n = t.__k[e]) != null && n.__e != null)
      return n.__e;
  return typeof t.type == "function" ? Vo(t) : null;
}
function Su(t) {
  var e, n;
  if ((t = t.__) != null && t.__c != null) {
    for (t.__e = t.__c.base = null, e = 0; e < t.__k.length; e++)
      if ((n = t.__k[e]) != null && n.__e != null) {
        t.__e = t.__c.base = n.__e;
        break;
      }
    return Su(t);
  }
}
function Ra(t) {
  (!t.__d && (t.__d = !0) && _o.push(t) && !xs.__r++ || Na !== at.debounceRendering) && ((Na = at.debounceRendering) || setTimeout)(xs);
}
function xs() {
  for (var t; xs.__r = _o.length; )
    t = _o.sort(function(e, n) {
      return e.__v.__b - n.__v.__b;
    }), _o = [], t.some(function(e) {
      var n, o, i, r, l, c;
      e.__d && (l = (r = (n = e).__v).__e, (c = n.__P) && (o = [], (i = Se({}, r)).__v = r.__v + 1, Tu(c, r, i, n.__n, c.ownerSVGElement !== void 0, r.__h != null ? [l] : null, o, l ?? Vo(r), r.__h), Bg(o, r), r.__e != l && Su(r)));
    });
}
function Cu(t, e, n, o, i, r, l, c, _, h) {
  var s, d, f, a, u, b, p, m = o && o.__k || ku, g = m.length;
  for (n.__k = [], s = 0; s < e.length; s++)
    if ((a = n.__k[s] = (a = e[s]) == null || typeof a == "boolean" ? null : typeof a == "string" || typeof a == "number" || typeof a == "bigint" ? Vl(null, a, null, null, a) : Array.isArray(a) ? Vl(Mc, { children: a }, null, null, null) : a.__b > 0 ? Vl(a.type, a.props, a.key, a.ref ? a.ref : null, a.__v) : a) != null) {
      if (a.__ = n, a.__b = n.__b + 1, (f = m[s]) === null || f && a.key == f.key && a.type === f.type)
        m[s] = void 0;
      else
        for (d = 0; d < g; d++) {
          if ((f = m[d]) && a.key == f.key && a.type === f.type) {
            m[d] = void 0;
            break;
          }
          f = null;
        }
      Tu(t, a, f = f || $u, i, r, l, c, _, h), u = a.__e, (d = a.ref) && f.ref != d && (p || (p = []), f.ref && p.push(f.ref, null, a), p.push(d, a.__c || u, a)), u != null ? (b == null && (b = u), typeof a.type == "function" && a.__k === f.__k ? a.__d = _ = Eu(a, _, t) : _ = Au(t, a, f, m, u, _), typeof n.type == "function" && (n.__d = _)) : _ && f.__e == _ && _.parentNode != t && (_ = Vo(f));
    }
  for (n.__e = b, s = g; s--; )
    m[s] != null && Lu(m[s], m[s]);
  if (p)
    for (s = 0; s < p.length; s++)
      Mu(p[s], p[++s], p[++s]);
}
function Eu(t, e, n) {
  for (var o, i = t.__k, r = 0; i && r < i.length; r++)
    (o = i[r]) && (o.__ = t, e = typeof o.type == "function" ? Eu(o, e, n) : Au(n, o, o, i, o.__e, e));
  return e;
}
function Au(t, e, n, o, i, r) {
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
function Fg(t, e, n, o, i) {
  var r;
  for (r in n)
    r === "children" || r === "key" || r in e || Ss(t, r, null, n[r], o);
  for (r in e)
    i && typeof e[r] != "function" || r === "children" || r === "key" || r === "value" || r === "checked" || n[r] === e[r] || Ss(t, r, e[r], n[r], o);
}
function Pa(t, e, n) {
  e[0] === "-" ? t.setProperty(e, n) : t[e] = n == null ? "" : typeof n != "number" || Ug.test(e) ? n : n + "px";
}
function Ss(t, e, n, o, i) {
  var r;
  t:
    if (e === "style")
      if (typeof n == "string")
        t.style.cssText = n;
      else {
        if (typeof o == "string" && (t.style.cssText = o = ""), o)
          for (e in o)
            n && e in n || Pa(t.style, e, "");
        if (n)
          for (e in n)
            o && n[e] === o[e] || Pa(t.style, e, n[e]);
      }
    else if (e[0] === "o" && e[1] === "n")
      r = e !== (e = e.replace(/Capture$/, "")), e = e.toLowerCase() in t ? e.toLowerCase().slice(2) : e.slice(2), t.l || (t.l = {}), t.l[e + r] = n, n ? o || t.addEventListener(e, r ? Ha : Oa, r) : t.removeEventListener(e, r ? Ha : Oa, r);
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
function Oa(t) {
  this.l[t.type + !1](at.event ? at.event(t) : t);
}
function Ha(t) {
  this.l[t.type + !0](at.event ? at.event(t) : t);
}
function Tu(t, e, n, o, i, r, l, c, _) {
  var h, s, d, f, a, u, b, p, m, g, w, k, C, A, E, y = e.type;
  if (e.constructor !== void 0)
    return null;
  n.__h != null && (_ = n.__h, c = e.__e = n.__e, e.__h = null, r = [c]), (h = at.__b) && h(e);
  try {
    t:
      if (typeof y == "function") {
        if (p = e.props, m = (h = y.contextType) && o[h.__c], g = h ? m ? m.props.value : h.__ : o, n.__c ? b = (s = e.__c = n.__c).__ = s.__E : ("prototype" in y && y.prototype.render ? e.__c = s = new y(p, g) : (e.__c = s = new fo(p, g), s.constructor = y, s.render = Vg), m && m.sub(s), s.props = p, s.state || (s.state = {}), s.context = g, s.__n = o, d = s.__d = !0, s.__h = [], s._sb = []), s.__s == null && (s.__s = s.state), y.getDerivedStateFromProps != null && (s.__s == s.state && (s.__s = Se({}, s.__s)), Se(s.__s, y.getDerivedStateFromProps(p, s.__s))), f = s.props, a = s.state, d)
          y.getDerivedStateFromProps == null && s.componentWillMount != null && s.componentWillMount(), s.componentDidMount != null && s.__h.push(s.componentDidMount);
        else {
          if (y.getDerivedStateFromProps == null && p !== f && s.componentWillReceiveProps != null && s.componentWillReceiveProps(p, g), !s.__e && s.shouldComponentUpdate != null && s.shouldComponentUpdate(p, s.__s, g) === !1 || e.__v === n.__v) {
            for (s.props = p, s.state = s.__s, e.__v !== n.__v && (s.__d = !1), s.__v = e, e.__e = n.__e, e.__k = n.__k, e.__k.forEach(function(x) {
              x && (x.__ = e);
            }), w = 0; w < s._sb.length; w++)
              s.__h.push(s._sb[w]);
            s._sb = [], s.__h.length && l.push(s);
            break t;
          }
          s.componentWillUpdate != null && s.componentWillUpdate(p, s.__s, g), s.componentDidUpdate != null && s.__h.push(function() {
            s.componentDidUpdate(f, a, u);
          });
        }
        if (s.context = g, s.props = p, s.__v = e, s.__P = t, k = at.__r, C = 0, "prototype" in y && y.prototype.render) {
          for (s.state = s.__s, s.__d = !1, k && k(e), h = s.render(s.props, s.state, s.context), A = 0; A < s._sb.length; A++)
            s.__h.push(s._sb[A]);
          s._sb = [];
        } else
          do
            s.__d = !1, k && k(e), h = s.render(s.props, s.state, s.context), s.state = s.__s;
          while (s.__d && ++C < 25);
        s.state = s.__s, s.getChildContext != null && (o = Se(Se({}, o), s.getChildContext())), d || s.getSnapshotBeforeUpdate == null || (u = s.getSnapshotBeforeUpdate(f, a)), E = h != null && h.type === Mc && h.key == null ? h.props.children : h, Cu(t, Array.isArray(E) ? E : [E], e, n, o, i, r, l, c, _), s.base = e.__e, e.__h = null, s.__h.length && l.push(s), b && (s.__E = s.__ = null), s.__e = !1;
      } else
        r == null && e.__v === n.__v ? (e.__k = n.__k, e.__e = n.__e) : e.__e = jg(n.__e, e, n, o, i, r, l, _);
    (h = at.diffed) && h(e);
  } catch (x) {
    e.__v = null, (_ || r != null) && (e.__e = c, e.__h = !!_, r[r.indexOf(c)] = null), at.__e(x, e, n);
  }
}
function Bg(t, e) {
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
function jg(t, e, n, o, i, r, l, c) {
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
    if (r = r && bu.call(t.childNodes), h = (d = n.props || $u).dangerouslySetInnerHTML, s = f.dangerouslySetInnerHTML, !c) {
      if (r != null)
        for (d = {}, u = 0; u < t.attributes.length; u++)
          d[t.attributes[u].name] = t.attributes[u].value;
      (s || h) && (s && (h && s.__html == h.__html || s.__html === t.innerHTML) || (t.innerHTML = s && s.__html || ""));
    }
    if (Fg(t, f, d, i, c), s)
      e.__k = [];
    else if (u = e.props.children, Cu(t, Array.isArray(u) ? u : [u], e, n, o, i && a !== "foreignObject", r, l, r ? r[0] : n.__k && Vo(n, 0), c), r != null)
      for (u = r.length; u--; )
        r[u] != null && xu(r[u]);
    c || ("value" in f && (u = f.value) !== void 0 && (u !== t.value || a === "progress" && !u || a === "option" && u !== d.value) && Ss(t, "value", u, d.value, !1), "checked" in f && (u = f.checked) !== void 0 && u !== t.checked && Ss(t, "checked", u, d.checked, !1));
  }
  return t;
}
function Mu(t, e, n) {
  try {
    typeof t == "function" ? t(e) : t.current = e;
  } catch (o) {
    at.__e(o, n);
  }
}
function Lu(t, e, n) {
  var o, i;
  if (at.unmount && at.unmount(t), (o = t.ref) && (o.current && o.current !== t.__e || Mu(o, null, e)), (o = t.__c) != null) {
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
      o[i] && Lu(o[i], e, n || typeof t.type != "function");
  n || t.__e == null || xu(t.__e), t.__ = t.__e = t.__d = void 0;
}
function Vg(t, e, n) {
  return this.constructor(t, n);
}
bu = ku.slice, at = { __e: function(t, e, n, o) {
  for (var i, r, l; e = e.__; )
    if ((i = e.__c) && !i.__)
      try {
        if ((r = i.constructor) && r.getDerivedStateFromError != null && (i.setState(r.getDerivedStateFromError(t)), l = i.__d), i.componentDidCatch != null && (i.componentDidCatch(t, o || {}), l = i.__d), l)
          return i.__E = i;
      } catch (c) {
        t = c;
      }
  throw t;
} }, wu = 0, fo.prototype.setState = function(t, e) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = Se({}, this.state), typeof t == "function" && (t = t(Se({}, n), this.props)), t && Se(n, t), t != null && this.__v && (e && this._sb.push(e), Ra(this));
}, fo.prototype.forceUpdate = function(t) {
  this.__v && (this.__e = !0, t && this.__h.push(t), Ra(this));
}, fo.prototype.render = Mc, _o = [], xs.__r = 0;
var zg = 0;
function Yg(t, e, n, o, i) {
  var r, l, c = {};
  for (l in e)
    l == "ref" ? r = e[l] : c[l] = e[l];
  var _ = { type: t, props: c, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: --zg, __source: i, __self: o };
  if (typeof t == "function" && (r = t.defaultProps))
    for (l in r)
      c[l] === void 0 && (c[l] = r[l]);
  return at.vnode && at.vnode(_), _;
}
var lc, _n;
lc = { __e: function(t, e, n, o) {
  for (var i, r, l; e = e.__; )
    if ((i = e.__c) && !i.__)
      try {
        if ((r = i.constructor) && r.getDerivedStateFromError != null && (i.setState(r.getDerivedStateFromError(t)), l = i.__d), i.componentDidCatch != null && (i.componentDidCatch(t, o || {}), l = i.__d), l)
          return i.__E = i;
      } catch (c) {
        t = c;
      }
  throw t;
} }, _n = function(t) {
  return t != null && t.constructor === void 0;
};
var Gg = 0;
function oe(t, e, n, o, i) {
  var r, l, c = {};
  for (l in e)
    l == "ref" ? r = e[l] : c[l] = e[l];
  var _ = { type: t, props: c, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: --Gg, __source: i, __self: o };
  if (typeof t == "function" && (r = t.defaultProps))
    for (l in r)
      c[l] === void 0 && (c[l] = r[l]);
  return lc.vnode && lc.vnode(_), _;
}
var cc;
cc = { __e: function(t, e, n, o) {
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
var qg = 0;
function wl(t, e, n, o, i) {
  var r, l, c = {};
  for (l in e)
    l == "ref" ? r = e[l] : c[l] = e[l];
  var _ = { type: t, props: c, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: --qg, __source: i, __self: o };
  if (typeof t == "function" && (r = t.defaultProps))
    for (l in r)
      c[l] === void 0 && (c[l] = r[l]);
  return cc.vnode && cc.vnode(_), _;
}
function Xg({
  key: t,
  type: e,
  btnType: n,
  ...o
}) {
  return /* @__PURE__ */ wl(Jt, { type: n, ...o });
}
var Du, _t, Nu, uo, Wa, Ru = {}, Pu = [], Kg = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function Ce(t, e) {
  for (var n in e)
    t[n] = e[n];
  return t;
}
function Ou(t) {
  var e = t.parentNode;
  e && e.removeChild(t);
}
function zl(t, e, n, o, i) {
  var r = { type: t, props: e, key: n, ref: o, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: i ?? ++Nu };
  return i == null && _t.vnode != null && _t.vnode(r), r;
}
function Zg() {
  return { current: null };
}
function Lc(t) {
  return t.children;
}
function ho(t, e) {
  this.props = t, this.context = e;
}
function zo(t, e) {
  if (e == null)
    return t.__ ? zo(t.__, t.__.__k.indexOf(t) + 1) : null;
  for (var n; e < t.__k.length; e++)
    if ((n = t.__k[e]) != null && n.__e != null)
      return n.__e;
  return typeof t.type == "function" ? zo(t) : null;
}
function Hu(t) {
  var e, n;
  if ((t = t.__) != null && t.__c != null) {
    for (t.__e = t.__c.base = null, e = 0; e < t.__k.length; e++)
      if ((n = t.__k[e]) != null && n.__e != null) {
        t.__e = t.__c.base = n.__e;
        break;
      }
    return Hu(t);
  }
}
function Ia(t) {
  (!t.__d && (t.__d = !0) && uo.push(t) && !Cs.__r++ || Wa !== _t.debounceRendering) && ((Wa = _t.debounceRendering) || setTimeout)(Cs);
}
function Cs() {
  for (var t; Cs.__r = uo.length; )
    t = uo.sort(function(e, n) {
      return e.__v.__b - n.__v.__b;
    }), uo = [], t.some(function(e) {
      var n, o, i, r, l, c;
      e.__d && (l = (r = (n = e).__v).__e, (c = n.__P) && (o = [], (i = Ce({}, r)).__v = r.__v + 1, Fu(c, r, i, n.__n, c.ownerSVGElement !== void 0, r.__h != null ? [l] : null, o, l ?? zo(r), r.__h), Qg(o, r), r.__e != l && Hu(r)));
    });
}
function Wu(t, e, n, o, i, r, l, c, _, h) {
  var s, d, f, a, u, b, p, m = o && o.__k || Pu, g = m.length;
  for (n.__k = [], s = 0; s < e.length; s++)
    if ((a = n.__k[s] = (a = e[s]) == null || typeof a == "boolean" ? null : typeof a == "string" || typeof a == "number" || typeof a == "bigint" ? zl(null, a, null, null, a) : Array.isArray(a) ? zl(Lc, { children: a }, null, null, null) : a.__b > 0 ? zl(a.type, a.props, a.key, a.ref ? a.ref : null, a.__v) : a) != null) {
      if (a.__ = n, a.__b = n.__b + 1, (f = m[s]) === null || f && a.key == f.key && a.type === f.type)
        m[s] = void 0;
      else
        for (d = 0; d < g; d++) {
          if ((f = m[d]) && a.key == f.key && a.type === f.type) {
            m[d] = void 0;
            break;
          }
          f = null;
        }
      Fu(t, a, f = f || Ru, i, r, l, c, _, h), u = a.__e, (d = a.ref) && f.ref != d && (p || (p = []), f.ref && p.push(f.ref, null, a), p.push(d, a.__c || u, a)), u != null ? (b == null && (b = u), typeof a.type == "function" && a.__k === f.__k ? a.__d = _ = Iu(a, _, t) : _ = Uu(t, a, f, m, u, _), typeof n.type == "function" && (n.__d = _)) : _ && f.__e == _ && _.parentNode != t && (_ = zo(f));
    }
  for (n.__e = b, s = g; s--; )
    m[s] != null && ju(m[s], m[s]);
  if (p)
    for (s = 0; s < p.length; s++)
      Bu(p[s], p[++s], p[++s]);
}
function Iu(t, e, n) {
  for (var o, i = t.__k, r = 0; i && r < i.length; r++)
    (o = i[r]) && (o.__ = t, e = typeof o.type == "function" ? Iu(o, e, n) : Uu(n, o, o, i, o.__e, e));
  return e;
}
function Uu(t, e, n, o, i, r) {
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
function Jg(t, e, n, o, i) {
  var r;
  for (r in n)
    r === "children" || r === "key" || r in e || Es(t, r, null, n[r], o);
  for (r in e)
    i && typeof e[r] != "function" || r === "children" || r === "key" || r === "value" || r === "checked" || n[r] === e[r] || Es(t, r, e[r], n[r], o);
}
function Ua(t, e, n) {
  e[0] === "-" ? t.setProperty(e, n) : t[e] = n == null ? "" : typeof n != "number" || Kg.test(e) ? n : n + "px";
}
function Es(t, e, n, o, i) {
  var r;
  t:
    if (e === "style")
      if (typeof n == "string")
        t.style.cssText = n;
      else {
        if (typeof o == "string" && (t.style.cssText = o = ""), o)
          for (e in o)
            n && e in n || Ua(t.style, e, "");
        if (n)
          for (e in n)
            o && n[e] === o[e] || Ua(t.style, e, n[e]);
      }
    else if (e[0] === "o" && e[1] === "n")
      r = e !== (e = e.replace(/Capture$/, "")), e = e.toLowerCase() in t ? e.toLowerCase().slice(2) : e.slice(2), t.l || (t.l = {}), t.l[e + r] = n, n ? o || t.addEventListener(e, r ? Ba : Fa, r) : t.removeEventListener(e, r ? Ba : Fa, r);
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
function Fa(t) {
  this.l[t.type + !1](_t.event ? _t.event(t) : t);
}
function Ba(t) {
  this.l[t.type + !0](_t.event ? _t.event(t) : t);
}
function Fu(t, e, n, o, i, r, l, c, _) {
  var h, s, d, f, a, u, b, p, m, g, w, k, C, A, E, y = e.type;
  if (e.constructor !== void 0)
    return null;
  n.__h != null && (_ = n.__h, c = e.__e = n.__e, e.__h = null, r = [c]), (h = _t.__b) && h(e);
  try {
    t:
      if (typeof y == "function") {
        if (p = e.props, m = (h = y.contextType) && o[h.__c], g = h ? m ? m.props.value : h.__ : o, n.__c ? b = (s = e.__c = n.__c).__ = s.__E : ("prototype" in y && y.prototype.render ? e.__c = s = new y(p, g) : (e.__c = s = new ho(p, g), s.constructor = y, s.render = ey), m && m.sub(s), s.props = p, s.state || (s.state = {}), s.context = g, s.__n = o, d = s.__d = !0, s.__h = [], s._sb = []), s.__s == null && (s.__s = s.state), y.getDerivedStateFromProps != null && (s.__s == s.state && (s.__s = Ce({}, s.__s)), Ce(s.__s, y.getDerivedStateFromProps(p, s.__s))), f = s.props, a = s.state, d)
          y.getDerivedStateFromProps == null && s.componentWillMount != null && s.componentWillMount(), s.componentDidMount != null && s.__h.push(s.componentDidMount);
        else {
          if (y.getDerivedStateFromProps == null && p !== f && s.componentWillReceiveProps != null && s.componentWillReceiveProps(p, g), !s.__e && s.shouldComponentUpdate != null && s.shouldComponentUpdate(p, s.__s, g) === !1 || e.__v === n.__v) {
            for (s.props = p, s.state = s.__s, e.__v !== n.__v && (s.__d = !1), s.__v = e, e.__e = n.__e, e.__k = n.__k, e.__k.forEach(function(x) {
              x && (x.__ = e);
            }), w = 0; w < s._sb.length; w++)
              s.__h.push(s._sb[w]);
            s._sb = [], s.__h.length && l.push(s);
            break t;
          }
          s.componentWillUpdate != null && s.componentWillUpdate(p, s.__s, g), s.componentDidUpdate != null && s.__h.push(function() {
            s.componentDidUpdate(f, a, u);
          });
        }
        if (s.context = g, s.props = p, s.__v = e, s.__P = t, k = _t.__r, C = 0, "prototype" in y && y.prototype.render) {
          for (s.state = s.__s, s.__d = !1, k && k(e), h = s.render(s.props, s.state, s.context), A = 0; A < s._sb.length; A++)
            s.__h.push(s._sb[A]);
          s._sb = [];
        } else
          do
            s.__d = !1, k && k(e), h = s.render(s.props, s.state, s.context), s.state = s.__s;
          while (s.__d && ++C < 25);
        s.state = s.__s, s.getChildContext != null && (o = Ce(Ce({}, o), s.getChildContext())), d || s.getSnapshotBeforeUpdate == null || (u = s.getSnapshotBeforeUpdate(f, a)), E = h != null && h.type === Lc && h.key == null ? h.props.children : h, Wu(t, Array.isArray(E) ? E : [E], e, n, o, i, r, l, c, _), s.base = e.__e, e.__h = null, s.__h.length && l.push(s), b && (s.__E = s.__ = null), s.__e = !1;
      } else
        r == null && e.__v === n.__v ? (e.__k = n.__k, e.__e = n.__e) : e.__e = ty(n.__e, e, n, o, i, r, l, _);
    (h = _t.diffed) && h(e);
  } catch (x) {
    e.__v = null, (_ || r != null) && (e.__e = c, e.__h = !!_, r[r.indexOf(c)] = null), _t.__e(x, e, n);
  }
}
function Qg(t, e) {
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
function ty(t, e, n, o, i, r, l, c) {
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
    if (r = r && Du.call(t.childNodes), h = (d = n.props || Ru).dangerouslySetInnerHTML, s = f.dangerouslySetInnerHTML, !c) {
      if (r != null)
        for (d = {}, u = 0; u < t.attributes.length; u++)
          d[t.attributes[u].name] = t.attributes[u].value;
      (s || h) && (s && (h && s.__html == h.__html || s.__html === t.innerHTML) || (t.innerHTML = s && s.__html || ""));
    }
    if (Jg(t, f, d, i, c), s)
      e.__k = [];
    else if (u = e.props.children, Wu(t, Array.isArray(u) ? u : [u], e, n, o, i && a !== "foreignObject", r, l, r ? r[0] : n.__k && zo(n, 0), c), r != null)
      for (u = r.length; u--; )
        r[u] != null && Ou(r[u]);
    c || ("value" in f && (u = f.value) !== void 0 && (u !== t.value || a === "progress" && !u || a === "option" && u !== d.value) && Es(t, "value", u, d.value, !1), "checked" in f && (u = f.checked) !== void 0 && u !== t.checked && Es(t, "checked", u, d.checked, !1));
  }
  return t;
}
function Bu(t, e, n) {
  try {
    typeof t == "function" ? t(e) : t.current = e;
  } catch (o) {
    _t.__e(o, n);
  }
}
function ju(t, e, n) {
  var o, i;
  if (_t.unmount && _t.unmount(t), (o = t.ref) && (o.current && o.current !== t.__e || Bu(o, null, e)), (o = t.__c) != null) {
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
      o[i] && ju(o[i], e, n || typeof t.type != "function");
  n || t.__e == null || Ou(t.__e), t.__ = t.__e = t.__d = void 0;
}
function ey(t, e, n) {
  return this.constructor(t, n);
}
Du = Pu.slice, _t = { __e: function(t, e, n, o) {
  for (var i, r, l; e = e.__; )
    if ((i = e.__c) && !i.__)
      try {
        if ((r = i.constructor) && r.getDerivedStateFromError != null && (i.setState(r.getDerivedStateFromError(t)), l = i.__d), i.componentDidCatch != null && (i.componentDidCatch(t, o || {}), l = i.__d), l)
          return i.__E = i;
      } catch (c) {
        t = c;
      }
  throw t;
} }, Nu = 0, ho.prototype.setState = function(t, e) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = Ce({}, this.state), typeof t == "function" && (t = t(Ce({}, n), this.props)), t && Ce(n, t), t != null && this.__v && (e && this._sb.push(e), Ia(this));
}, ho.prototype.forceUpdate = function(t) {
  this.__v && (this.__e = !0, t && this.__h.push(t), Ia(this));
}, ho.prototype.render = Lc, uo = [], Cs.__r = 0;
var ny = 0;
function Vu(t, e, n, o, i) {
  var r, l, c = {};
  for (l in e)
    l == "ref" ? r = e[l] : c[l] = e[l];
  var _ = { type: t, props: c, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: --ny, __source: i, __self: o };
  if (typeof t == "function" && (r = t.defaultProps))
    for (l in r)
      c[l] === void 0 && (c[l] = r[l]);
  return _t.vnode && _t.vnode(_), _;
}
var $l, et, zu, po, ja, As = {}, Yu = [], oy = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function Ee(t, e) {
  for (var n in e)
    t[n] = e[n];
  return t;
}
function Gu(t) {
  var e = t.parentNode;
  e && e.removeChild(t);
}
function qu(t, e, n) {
  var o, i, r, l = {};
  for (r in e)
    r == "key" ? o = e[r] : r == "ref" ? i = e[r] : l[r] = e[r];
  if (arguments.length > 2 && (l.children = arguments.length > 3 ? $l.call(arguments, 2) : n), typeof t == "function" && t.defaultProps != null)
    for (r in t.defaultProps)
      l[r] === void 0 && (l[r] = t.defaultProps[r]);
  return rs(t, l, o, i, null);
}
function rs(t, e, n, o, i) {
  var r = { type: t, props: e, key: n, ref: o, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: i ?? ++zu };
  return i == null && et.vnode != null && et.vnode(r), r;
}
function kl(t) {
  return t.children;
}
function ss(t, e) {
  this.props = t, this.context = e;
}
function Yo(t, e) {
  if (e == null)
    return t.__ ? Yo(t.__, t.__.__k.indexOf(t) + 1) : null;
  for (var n; e < t.__k.length; e++)
    if ((n = t.__k[e]) != null && n.__e != null)
      return n.__e;
  return typeof t.type == "function" ? Yo(t) : null;
}
function Xu(t) {
  var e, n;
  if ((t = t.__) != null && t.__c != null) {
    for (t.__e = t.__c.base = null, e = 0; e < t.__k.length; e++)
      if ((n = t.__k[e]) != null && n.__e != null) {
        t.__e = t.__c.base = n.__e;
        break;
      }
    return Xu(t);
  }
}
function Va(t) {
  (!t.__d && (t.__d = !0) && po.push(t) && !Ts.__r++ || ja !== et.debounceRendering) && ((ja = et.debounceRendering) || setTimeout)(Ts);
}
function Ts() {
  for (var t; Ts.__r = po.length; )
    t = po.sort(function(e, n) {
      return e.__v.__b - n.__v.__b;
    }), po = [], t.some(function(e) {
      var n, o, i, r, l, c;
      e.__d && (l = (r = (n = e).__v).__e, (c = n.__P) && (o = [], (i = Ee({}, r)).__v = r.__v + 1, Dc(c, r, i, n.__n, c.ownerSVGElement !== void 0, r.__h != null ? [l] : null, o, l ?? Yo(r), r.__h), Qu(o, r), r.__e != l && Xu(r)));
    });
}
function Ku(t, e, n, o, i, r, l, c, _, h) {
  var s, d, f, a, u, b, p, m = o && o.__k || Yu, g = m.length;
  for (n.__k = [], s = 0; s < e.length; s++)
    if ((a = n.__k[s] = (a = e[s]) == null || typeof a == "boolean" ? null : typeof a == "string" || typeof a == "number" || typeof a == "bigint" ? rs(null, a, null, null, a) : Array.isArray(a) ? rs(kl, { children: a }, null, null, null) : a.__b > 0 ? rs(a.type, a.props, a.key, a.ref ? a.ref : null, a.__v) : a) != null) {
      if (a.__ = n, a.__b = n.__b + 1, (f = m[s]) === null || f && a.key == f.key && a.type === f.type)
        m[s] = void 0;
      else
        for (d = 0; d < g; d++) {
          if ((f = m[d]) && a.key == f.key && a.type === f.type) {
            m[d] = void 0;
            break;
          }
          f = null;
        }
      Dc(t, a, f = f || As, i, r, l, c, _, h), u = a.__e, (d = a.ref) && f.ref != d && (p || (p = []), f.ref && p.push(f.ref, null, a), p.push(d, a.__c || u, a)), u != null ? (b == null && (b = u), typeof a.type == "function" && a.__k === f.__k ? a.__d = _ = Zu(a, _, t) : _ = Ju(t, a, f, m, u, _), typeof n.type == "function" && (n.__d = _)) : _ && f.__e == _ && _.parentNode != t && (_ = Yo(f));
    }
  for (n.__e = b, s = g; s--; )
    m[s] != null && eh(m[s], m[s]);
  if (p)
    for (s = 0; s < p.length; s++)
      th(p[s], p[++s], p[++s]);
}
function Zu(t, e, n) {
  for (var o, i = t.__k, r = 0; i && r < i.length; r++)
    (o = i[r]) && (o.__ = t, e = typeof o.type == "function" ? Zu(o, e, n) : Ju(n, o, o, i, o.__e, e));
  return e;
}
function Ju(t, e, n, o, i, r) {
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
function ry(t, e, n, o, i) {
  var r;
  for (r in n)
    r === "children" || r === "key" || r in e || Ms(t, r, null, n[r], o);
  for (r in e)
    i && typeof e[r] != "function" || r === "children" || r === "key" || r === "value" || r === "checked" || n[r] === e[r] || Ms(t, r, e[r], n[r], o);
}
function za(t, e, n) {
  e[0] === "-" ? t.setProperty(e, n) : t[e] = n == null ? "" : typeof n != "number" || oy.test(e) ? n : n + "px";
}
function Ms(t, e, n, o, i) {
  var r;
  t:
    if (e === "style")
      if (typeof n == "string")
        t.style.cssText = n;
      else {
        if (typeof o == "string" && (t.style.cssText = o = ""), o)
          for (e in o)
            n && e in n || za(t.style, e, "");
        if (n)
          for (e in n)
            o && n[e] === o[e] || za(t.style, e, n[e]);
      }
    else if (e[0] === "o" && e[1] === "n")
      r = e !== (e = e.replace(/Capture$/, "")), e = e.toLowerCase() in t ? e.toLowerCase().slice(2) : e.slice(2), t.l || (t.l = {}), t.l[e + r] = n, n ? o || t.addEventListener(e, r ? Ga : Ya, r) : t.removeEventListener(e, r ? Ga : Ya, r);
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
function Ya(t) {
  this.l[t.type + !1](et.event ? et.event(t) : t);
}
function Ga(t) {
  this.l[t.type + !0](et.event ? et.event(t) : t);
}
function Dc(t, e, n, o, i, r, l, c, _) {
  var h, s, d, f, a, u, b, p, m, g, w, k, C, A, E, y = e.type;
  if (e.constructor !== void 0)
    return null;
  n.__h != null && (_ = n.__h, c = e.__e = n.__e, e.__h = null, r = [c]), (h = et.__b) && h(e);
  try {
    t:
      if (typeof y == "function") {
        if (p = e.props, m = (h = y.contextType) && o[h.__c], g = h ? m ? m.props.value : h.__ : o, n.__c ? b = (s = e.__c = n.__c).__ = s.__E : ("prototype" in y && y.prototype.render ? e.__c = s = new y(p, g) : (e.__c = s = new ss(p, g), s.constructor = y, s.render = iy), m && m.sub(s), s.props = p, s.state || (s.state = {}), s.context = g, s.__n = o, d = s.__d = !0, s.__h = [], s._sb = []), s.__s == null && (s.__s = s.state), y.getDerivedStateFromProps != null && (s.__s == s.state && (s.__s = Ee({}, s.__s)), Ee(s.__s, y.getDerivedStateFromProps(p, s.__s))), f = s.props, a = s.state, d)
          y.getDerivedStateFromProps == null && s.componentWillMount != null && s.componentWillMount(), s.componentDidMount != null && s.__h.push(s.componentDidMount);
        else {
          if (y.getDerivedStateFromProps == null && p !== f && s.componentWillReceiveProps != null && s.componentWillReceiveProps(p, g), !s.__e && s.shouldComponentUpdate != null && s.shouldComponentUpdate(p, s.__s, g) === !1 || e.__v === n.__v) {
            for (s.props = p, s.state = s.__s, e.__v !== n.__v && (s.__d = !1), s.__v = e, e.__e = n.__e, e.__k = n.__k, e.__k.forEach(function(x) {
              x && (x.__ = e);
            }), w = 0; w < s._sb.length; w++)
              s.__h.push(s._sb[w]);
            s._sb = [], s.__h.length && l.push(s);
            break t;
          }
          s.componentWillUpdate != null && s.componentWillUpdate(p, s.__s, g), s.componentDidUpdate != null && s.__h.push(function() {
            s.componentDidUpdate(f, a, u);
          });
        }
        if (s.context = g, s.props = p, s.__v = e, s.__P = t, k = et.__r, C = 0, "prototype" in y && y.prototype.render) {
          for (s.state = s.__s, s.__d = !1, k && k(e), h = s.render(s.props, s.state, s.context), A = 0; A < s._sb.length; A++)
            s.__h.push(s._sb[A]);
          s._sb = [];
        } else
          do
            s.__d = !1, k && k(e), h = s.render(s.props, s.state, s.context), s.state = s.__s;
          while (s.__d && ++C < 25);
        s.state = s.__s, s.getChildContext != null && (o = Ee(Ee({}, o), s.getChildContext())), d || s.getSnapshotBeforeUpdate == null || (u = s.getSnapshotBeforeUpdate(f, a)), E = h != null && h.type === kl && h.key == null ? h.props.children : h, Ku(t, Array.isArray(E) ? E : [E], e, n, o, i, r, l, c, _), s.base = e.__e, e.__h = null, s.__h.length && l.push(s), b && (s.__E = s.__ = null), s.__e = !1;
      } else
        r == null && e.__v === n.__v ? (e.__k = n.__k, e.__e = n.__e) : e.__e = sy(n.__e, e, n, o, i, r, l, _);
    (h = et.diffed) && h(e);
  } catch (x) {
    e.__v = null, (_ || r != null) && (e.__e = c, e.__h = !!_, r[r.indexOf(c)] = null), et.__e(x, e, n);
  }
}
function Qu(t, e) {
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
function sy(t, e, n, o, i, r, l, c) {
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
    if (r = r && $l.call(t.childNodes), h = (d = n.props || As).dangerouslySetInnerHTML, s = f.dangerouslySetInnerHTML, !c) {
      if (r != null)
        for (d = {}, u = 0; u < t.attributes.length; u++)
          d[t.attributes[u].name] = t.attributes[u].value;
      (s || h) && (s && (h && s.__html == h.__html || s.__html === t.innerHTML) || (t.innerHTML = s && s.__html || ""));
    }
    if (ry(t, f, d, i, c), s)
      e.__k = [];
    else if (u = e.props.children, Ku(t, Array.isArray(u) ? u : [u], e, n, o, i && a !== "foreignObject", r, l, r ? r[0] : n.__k && Yo(n, 0), c), r != null)
      for (u = r.length; u--; )
        r[u] != null && Gu(r[u]);
    c || ("value" in f && (u = f.value) !== void 0 && (u !== t.value || a === "progress" && !u || a === "option" && u !== d.value) && Ms(t, "value", u, d.value, !1), "checked" in f && (u = f.checked) !== void 0 && u !== t.checked && Ms(t, "checked", u, d.checked, !1));
  }
  return t;
}
function th(t, e, n) {
  try {
    typeof t == "function" ? t(e) : t.current = e;
  } catch (o) {
    et.__e(o, n);
  }
}
function eh(t, e, n) {
  var o, i;
  if (et.unmount && et.unmount(t), (o = t.ref) && (o.current && o.current !== t.__e || th(o, null, e)), (o = t.__c) != null) {
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
      o[i] && eh(o[i], e, n || typeof t.type != "function");
  n || t.__e == null || Gu(t.__e), t.__ = t.__e = t.__d = void 0;
}
function iy(t, e, n) {
  return this.constructor(t, n);
}
function ly(t, e, n) {
  var o, i, r;
  et.__ && et.__(t, e), i = (o = typeof n == "function") ? null : n && n.__k || e.__k, r = [], Dc(e, t = (!o && n || e).__k = qu(kl, null, [t]), i || As, As, e.ownerSVGElement !== void 0, !o && n ? [n] : i ? null : e.firstChild ? $l.call(e.childNodes) : null, r, !o && n ? n : i ? i.__e : e.firstChild, o), Qu(r, t);
}
$l = Yu.slice, et = { __e: function(t, e, n, o) {
  for (var i, r, l; e = e.__; )
    if ((i = e.__c) && !i.__)
      try {
        if ((r = i.constructor) && r.getDerivedStateFromError != null && (i.setState(r.getDerivedStateFromError(t)), l = i.__d), i.componentDidCatch != null && (i.componentDidCatch(t, o || {}), l = i.__d), l)
          return i.__E = i;
      } catch (c) {
        t = c;
      }
  throw t;
} }, zu = 0, ss.prototype.setState = function(t, e) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = Ee({}, this.state), typeof t == "function" && (t = t(Ee({}, n), this.props)), t && Ee(n, t), t != null && this.__v && (e && this._sb.push(e), Va(this));
}, ss.prototype.forceUpdate = function(t) {
  this.__v && (this.__e = !0, t && this.__h.push(t), Va(this));
}, ss.prototype.render = kl, po = [], Ts.__r = 0;
function cy(t) {
  return t.button === 2;
}
var ay = 0;
function _y(t, e, n, o, i) {
  var r, l, c = {};
  for (l in e)
    l == "ref" ? r = e[l] : c[l] = e[l];
  var _ = { type: t, props: c, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: --ay, __source: i, __self: o };
  if (typeof t == "function" && (r = t.defaultProps))
    for (l in r)
      c[l] === void 0 && (c[l] = r[l]);
  return et.vnode && et.vnode(_), _;
}
function Nc(t) {
  return t.split("-")[1];
}
function nh(t) {
  return t === "y" ? "height" : "width";
}
function Go(t) {
  return t.split("-")[0];
}
function oh(t) {
  return ["top", "bottom"].includes(Go(t)) ? "x" : "y";
}
function qa(t, e, n) {
  let {
    reference: o,
    floating: i
  } = t;
  const r = o.x + o.width / 2 - i.width / 2, l = o.y + o.height / 2 - i.height / 2, c = oh(e), _ = nh(c), h = o[_] / 2 - i[_] / 2, s = Go(e), d = c === "x";
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
  switch (Nc(e)) {
    case "start":
      f[c] -= h * (n && d ? -1 : 1);
      break;
    case "end":
      f[c] += h * (n && d ? -1 : 1);
      break;
  }
  return f;
}
const fy = async (t, e, n) => {
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
  } = qa(h, o, _), f = o, a = {}, u = 0;
  for (let b = 0; b < c.length; b++) {
    const {
      name: p,
      fn: m
    } = c[b], {
      x: g,
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
    if (s = g ?? s, d = w ?? d, a = {
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
      } = qa(h, f, _)), b = -1;
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
function uy(t) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...t
  };
}
function hy(t) {
  return typeof t != "number" ? uy(t) : {
    top: t,
    right: t,
    bottom: t,
    left: t
  };
}
function Ls(t) {
  return {
    ...t,
    top: t.y,
    left: t.x,
    right: t.x + t.width,
    bottom: t.y + t.height
  };
}
async function dy(t, e) {
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
  } = e, u = hy(a), p = c[f ? d === "floating" ? "reference" : "floating" : d], m = Ls(await r.getClippingRect({
    element: (n = await (r.isElement == null ? void 0 : r.isElement(p))) == null || n ? p : p.contextElement || await (r.getDocumentElement == null ? void 0 : r.getDocumentElement(c.floating)),
    boundary: h,
    rootBoundary: s,
    strategy: _
  })), g = d === "floating" ? {
    ...l.floating,
    x: o,
    y: i
  } : l.reference, w = await (r.getOffsetParent == null ? void 0 : r.getOffsetParent(c.floating)), k = await (r.isElement == null ? void 0 : r.isElement(w)) ? await (r.getScale == null ? void 0 : r.getScale(w)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, C = Ls(r.convertOffsetParentRelativeRectToViewportRelativeRect ? await r.convertOffsetParentRelativeRectToViewportRelativeRect({
    rect: g,
    offsetParent: w,
    strategy: _
  }) : g);
  return {
    top: (m.top - C.top + u.top) / k.y,
    bottom: (C.bottom - m.bottom + u.bottom) / k.y,
    left: (m.left - C.left + u.left) / k.x,
    right: (C.right - m.right + u.right) / k.x
  };
}
const py = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function Ds(t) {
  return t.replace(/left|right|bottom|top/g, (e) => py[e]);
}
function my(t, e, n) {
  n === void 0 && (n = !1);
  const o = Nc(t), i = oh(t), r = nh(i);
  let l = i === "x" ? o === (n ? "end" : "start") ? "right" : "left" : o === "start" ? "bottom" : "top";
  return e.reference[r] > e.floating[r] && (l = Ds(l)), {
    main: l,
    cross: Ds(l)
  };
}
const gy = {
  start: "end",
  end: "start"
};
function ac(t) {
  return t.replace(/start|end/g, (e) => gy[e]);
}
function yy(t) {
  const e = Ds(t);
  return [ac(t), e, ac(e)];
}
function vy(t, e, n) {
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
function by(t, e, n, o) {
  const i = Nc(t);
  let r = vy(Go(t), n === "start", o);
  return i && (r = r.map((l) => l + "-" + i), e && (r = r.concat(r.map(ac)))), r;
}
const rh = function(t) {
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
      } = t, p = Go(o), m = Go(l) === l, g = await (c.isRTL == null ? void 0 : c.isRTL(_.floating)), w = d || (m || !u ? [Ds(l)] : yy(l));
      !d && a !== "none" && w.push(...by(l, u, a, g));
      const k = [l, ...w], C = await dy(e, b), A = [];
      let E = ((n = i.flip) == null ? void 0 : n.overflows) || [];
      if (h && A.push(C[p]), s) {
        const {
          main: D,
          cross: z
        } = my(o, r, g);
        A.push(C[D], C[z]);
      }
      if (E = [...E, {
        placement: o,
        overflows: A
      }], !A.every((D) => D <= 0)) {
        var y;
        const D = (((y = i.flip) == null ? void 0 : y.index) || 0) + 1, z = k[D];
        if (z)
          return {
            data: {
              index: D,
              overflows: E
            },
            reset: {
              placement: z
            }
          };
        let B = "bottom";
        switch (f) {
          case "bestFit": {
            var x;
            const N = (x = E.map((S) => [S, S.overflows.filter(($) => $ > 0).reduce(($, R) => $ + R, 0)]).sort((S, $) => S[1] - $[1])[0]) == null ? void 0 : x[0].placement;
            N && (B = N);
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
function Ot(t) {
  var e;
  return ((e = t.ownerDocument) == null ? void 0 : e.defaultView) || window;
}
function Qt(t) {
  return Ot(t).getComputedStyle(t);
}
function Ue(t) {
  return ih(t) ? (t.nodeName || "").toLowerCase() : "";
}
let zr;
function sh() {
  if (zr)
    return zr;
  const t = navigator.userAgentData;
  return t && Array.isArray(t.brands) ? (zr = t.brands.map((e) => e.brand + "/" + e.version).join(" "), zr) : navigator.userAgent;
}
function fe(t) {
  return t instanceof Ot(t).HTMLElement;
}
function Fe(t) {
  return t instanceof Ot(t).Element;
}
function ih(t) {
  return t instanceof Ot(t).Node;
}
function Xa(t) {
  if (typeof ShadowRoot > "u")
    return !1;
  const e = Ot(t).ShadowRoot;
  return t instanceof e || t instanceof ShadowRoot;
}
function xl(t) {
  const {
    overflow: e,
    overflowX: n,
    overflowY: o,
    display: i
  } = Qt(t);
  return /auto|scroll|overlay|hidden|clip/.test(e + o + n) && !["inline", "contents"].includes(i);
}
function wy(t) {
  return ["table", "td", "th"].includes(Ue(t));
}
function Rc(t) {
  const e = /firefox/i.test(sh()), n = Qt(t), o = n.backdropFilter || n.WebkitBackdropFilter;
  return n.transform !== "none" || n.perspective !== "none" || (o ? o !== "none" : !1) || e && n.willChange === "filter" || e && (n.filter ? n.filter !== "none" : !1) || ["transform", "perspective"].some((i) => n.willChange.includes(i)) || ["paint", "layout", "strict", "content"].some(
    // TS 4.1 compat
    (i) => {
      const r = n.contain;
      return r != null ? r.includes(i) : !1;
    }
  );
}
function lh() {
  return !/^((?!chrome|android).)*safari/i.test(sh());
}
function Pc(t) {
  return ["html", "body", "#document"].includes(Ue(t));
}
const Ka = Math.min, mo = Math.max, Ns = Math.round;
function ch(t) {
  const e = Qt(t);
  let n = parseFloat(e.width), o = parseFloat(e.height);
  const i = t.offsetWidth, r = t.offsetHeight, l = Ns(n) !== i || Ns(o) !== r;
  return l && (n = i, o = r), {
    width: n,
    height: o,
    fallback: l
  };
}
function ah(t) {
  return Fe(t) ? t : t.contextElement;
}
const _h = {
  x: 1,
  y: 1
};
function fn(t) {
  const e = ah(t);
  if (!fe(e))
    return _h;
  const n = e.getBoundingClientRect(), {
    width: o,
    height: i,
    fallback: r
  } = ch(e);
  let l = (r ? Ns(n.width) : n.width) / o, c = (r ? Ns(n.height) : n.height) / i;
  return (!l || !Number.isFinite(l)) && (l = 1), (!c || !Number.isFinite(c)) && (c = 1), {
    x: l,
    y: c
  };
}
function qo(t, e, n, o) {
  var i, r;
  e === void 0 && (e = !1), n === void 0 && (n = !1);
  const l = t.getBoundingClientRect(), c = ah(t);
  let _ = _h;
  e && (o ? Fe(o) && (_ = fn(o)) : _ = fn(t));
  const h = c ? Ot(c) : window, s = !lh() && n;
  let d = (l.left + (s && ((i = h.visualViewport) == null ? void 0 : i.offsetLeft) || 0)) / _.x, f = (l.top + (s && ((r = h.visualViewport) == null ? void 0 : r.offsetTop) || 0)) / _.y, a = l.width / _.x, u = l.height / _.y;
  if (c) {
    const b = Ot(c), p = o && Fe(o) ? Ot(o) : o;
    let m = b.frameElement;
    for (; m && o && p !== b; ) {
      const g = fn(m), w = m.getBoundingClientRect(), k = getComputedStyle(m);
      w.x += (m.clientLeft + parseFloat(k.paddingLeft)) * g.x, w.y += (m.clientTop + parseFloat(k.paddingTop)) * g.y, d *= g.x, f *= g.y, a *= g.x, u *= g.y, d += w.x, f += w.y, m = Ot(m).frameElement;
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
function Ge(t) {
  return ((ih(t) ? t.ownerDocument : t.document) || window.document).documentElement;
}
function Sl(t) {
  return Fe(t) ? {
    scrollLeft: t.scrollLeft,
    scrollTop: t.scrollTop
  } : {
    scrollLeft: t.pageXOffset,
    scrollTop: t.pageYOffset
  };
}
function fh(t) {
  return qo(Ge(t)).left + Sl(t).scrollLeft;
}
function $y(t, e, n) {
  const o = fe(e), i = Ge(e), r = qo(t, !0, n === "fixed", e);
  let l = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const c = {
    x: 0,
    y: 0
  };
  if (o || !o && n !== "fixed")
    if ((Ue(e) !== "body" || xl(i)) && (l = Sl(e)), fe(e)) {
      const _ = qo(e, !0);
      c.x = _.x + e.clientLeft, c.y = _.y + e.clientTop;
    } else
      i && (c.x = fh(i));
  return {
    x: r.left + l.scrollLeft - c.x,
    y: r.top + l.scrollTop - c.y,
    width: r.width,
    height: r.height
  };
}
function Xo(t) {
  if (Ue(t) === "html")
    return t;
  const e = (
    // Step into the shadow DOM of the parent of a slotted node
    t.assignedSlot || // DOM Element detected
    t.parentNode || // ShadowRoot detected
    (Xa(t) ? t.host : null) || // Fallback
    Ge(t)
  );
  return Xa(e) ? e.host : e;
}
function Za(t) {
  return !fe(t) || Qt(t).position === "fixed" ? null : t.offsetParent;
}
function ky(t) {
  let e = Xo(t);
  for (; fe(e) && !Pc(e); ) {
    if (Rc(e))
      return e;
    e = Xo(e);
  }
  return null;
}
function Ja(t) {
  const e = Ot(t);
  let n = Za(t);
  for (; n && wy(n) && Qt(n).position === "static"; )
    n = Za(n);
  return n && (Ue(n) === "html" || Ue(n) === "body" && Qt(n).position === "static" && !Rc(n)) ? e : n || ky(t) || e;
}
function xy(t) {
  return ch(t);
}
function Sy(t) {
  let {
    rect: e,
    offsetParent: n,
    strategy: o
  } = t;
  const i = fe(n), r = Ge(n);
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
  if ((i || !i && o !== "fixed") && ((Ue(n) !== "body" || xl(r)) && (l = Sl(n)), fe(n))) {
    const h = qo(n);
    c = fn(n), _.x = h.x + n.clientLeft, _.y = h.y + n.clientTop;
  }
  return {
    width: e.width * c.x,
    height: e.height * c.y,
    x: e.x * c.x - l.scrollLeft * c.x + _.x,
    y: e.y * c.y - l.scrollTop * c.y + _.y
  };
}
function Cy(t, e) {
  const n = Ot(t), o = Ge(t), i = n.visualViewport;
  let r = o.clientWidth, l = o.clientHeight, c = 0, _ = 0;
  if (i) {
    r = i.width, l = i.height;
    const h = lh();
    (h || !h && e === "fixed") && (c = i.offsetLeft, _ = i.offsetTop);
  }
  return {
    width: r,
    height: l,
    x: c,
    y: _
  };
}
function Ey(t) {
  var e;
  const n = Ge(t), o = Sl(t), i = (e = t.ownerDocument) == null ? void 0 : e.body, r = mo(n.scrollWidth, n.clientWidth, i ? i.scrollWidth : 0, i ? i.clientWidth : 0), l = mo(n.scrollHeight, n.clientHeight, i ? i.scrollHeight : 0, i ? i.clientHeight : 0);
  let c = -o.scrollLeft + fh(t);
  const _ = -o.scrollTop;
  return Qt(i || n).direction === "rtl" && (c += mo(n.clientWidth, i ? i.clientWidth : 0) - r), {
    width: r,
    height: l,
    x: c,
    y: _
  };
}
function uh(t) {
  const e = Xo(t);
  return Pc(e) ? t.ownerDocument.body : fe(e) && xl(e) ? e : uh(e);
}
function hh(t, e) {
  var n;
  e === void 0 && (e = []);
  const o = uh(t), i = o === ((n = t.ownerDocument) == null ? void 0 : n.body), r = Ot(o);
  return i ? e.concat(r, r.visualViewport || [], xl(o) ? o : []) : e.concat(o, hh(o));
}
function Ay(t, e) {
  const n = qo(t, !0, e === "fixed"), o = n.top + t.clientTop, i = n.left + t.clientLeft, r = fe(t) ? fn(t) : {
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
function Qa(t, e, n) {
  return e === "viewport" ? Ls(Cy(t, n)) : Fe(e) ? Ay(e, n) : Ls(Ey(Ge(t)));
}
function Ty(t, e) {
  const n = e.get(t);
  if (n)
    return n;
  let o = hh(t).filter((c) => Fe(c) && Ue(c) !== "body"), i = null;
  const r = Qt(t).position === "fixed";
  let l = r ? Xo(t) : t;
  for (; Fe(l) && !Pc(l); ) {
    const c = Qt(l), _ = Rc(l);
    (r ? !_ && !i : !_ && c.position === "static" && !!i && ["absolute", "fixed"].includes(i.position)) ? o = o.filter((s) => s !== l) : i = c, l = Xo(l);
  }
  return e.set(t, o), o;
}
function My(t) {
  let {
    element: e,
    boundary: n,
    rootBoundary: o,
    strategy: i
  } = t;
  const l = [...n === "clippingAncestors" ? Ty(e, this._c) : [].concat(n), o], c = l[0], _ = l.reduce((h, s) => {
    const d = Qa(e, s, i);
    return h.top = mo(d.top, h.top), h.right = Ka(d.right, h.right), h.bottom = Ka(d.bottom, h.bottom), h.left = mo(d.left, h.left), h;
  }, Qa(e, c, i));
  return {
    width: _.right - _.left,
    height: _.bottom - _.top,
    x: _.left,
    y: _.top
  };
}
const Ly = {
  getClippingRect: My,
  convertOffsetParentRelativeRectToViewportRelativeRect: Sy,
  isElement: Fe,
  getDimensions: xy,
  getOffsetParent: Ja,
  getDocumentElement: Ge,
  getScale: fn,
  async getElementRects(t) {
    let {
      reference: e,
      floating: n,
      strategy: o
    } = t;
    const i = this.getOffsetParent || Ja, r = this.getDimensions;
    return {
      reference: $y(e, await i(n), o),
      floating: {
        x: 0,
        y: 0,
        ...await r(n)
      }
    };
  },
  getClientRects: (t) => Array.from(t.getClientRects()),
  isRTL: (t) => Qt(t).direction === "rtl"
}, dh = (t, e, n) => {
  const o = /* @__PURE__ */ new Map(), i = {
    platform: Ly,
    ...n
  }, r = {
    ...i.platform,
    _c: o
  };
  return fy(t, e, {
    ...i,
    platform: r
  });
};
let Dy = class extends Tc {
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
      middleware: [rh()],
      placement: "right-start"
    };
  }
  _getPopperElement() {
    var e;
    return (e = this.ref.current) == null ? void 0 : e.parentElement;
  }
  _createPopper() {
    const e = this._getPopperOptions();
    this.ref.current && dh(this._getPopperElement(), this.ref.current, e).then(({ x: n, y: o }) => {
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
    return /* @__PURE__ */ _y("span", { class: "contextmenu-toggle-icon caret-right" });
  }
};
var me, yn, pr;
class Mt extends jt {
  constructor() {
    super(...arguments);
    M(this, me, void 0);
    M(this, yn, void 0);
    M(this, pr, void 0);
    L(this, "arrowEl");
  }
  get isShown() {
    var n;
    return (n = v(this, me)) == null ? void 0 : n.classList.contains(this.constructor.CLASS_SHOW);
  }
  get menu() {
    return v(this, me) || this._ensureMenu();
  }
  get trigger() {
    return v(this, pr) || this.element;
  }
  get isDynamic() {
    return this.options.items || this.options.menu;
  }
  init() {
    const { element: n } = this;
    n !== document.body && !n.hasAttribute("data-toggle") && n.setAttribute("data-toggle", "contextmenu");
  }
  show(n) {
    return H(this, pr, n), this.emit("show", { menu: this, trigger: this.trigger }).defaultPrevented || this.isDynamic && !this._renderMenu() ? !1 : (this.menu.classList.add(this.constructor.CLASS_SHOW), this._createPopper(), this.emit("shown", this), !0);
  }
  hide() {
    var o;
    return this.emit("hide", this).defaultPrevented ? !1 : ((o = v(this, me)) == null || o.classList.remove(this.constructor.CLASS_SHOW), this.emit("hidden", this), !0);
  }
  toggle(n) {
    return this.isShown ? this.hide() : this.show(n);
  }
  destroy() {
    var n;
    super.destroy(), (n = v(this, me)) == null || n.remove();
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
    return i.style.width = "max-content", i.style.position = "absolute", i.style.top = "0", i.style.left = "0", H(this, me, i), i;
  }
  _getPopperOptions() {
    var o;
    const n = {
      middleware: []
    };
    return this.options.flip && ((o = n.middleware) == null || o.push(rh())), this.options.placement && (n.placement = this.options.placement), n;
  }
  _createPopper() {
    const n = this._getPopperOptions();
    dh(this._getPopperElement(), this.menu, n).then(({ x: o, y: i, middlewareData: r }) => {
      if (Object.assign(this.menu.style, {
        left: `${o}px`,
        top: `${i}px`
      }), this.options.placement) {
        const l = this.options.placement.split("-")[0], c = {
          top: "bottom",
          right: "left",
          bottom: "top",
          left: "right"
        }[l];
        if (r.arrow && this.arrowEl) {
          const { x: _, y: h } = r.arrow;
          Object.assign(this.arrowEl.style, {
            left: _ != null ? `${_}px` : "",
            top: h != null ? `${h}px` : "",
            [c]: `${-this.arrowEl.offsetWidth / 2}px`
          });
        }
      }
    });
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
    return !n || this.emit("updateMenu", { menu: n, trigger: this.trigger, contextmenu: this }).defaultPrevented ? !1 : (ly(qu(Dy, n), this.menu), !0);
  }
  _getPopperElement() {
    return v(this, yn) || H(this, yn, {
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
    }), v(this, yn);
  }
  static clear(n) {
    var _, h;
    n instanceof Event && (n = { event: n });
    const { event: o, exclude: i, ignoreSelector: r = ".not-hide-menu" } = n || {};
    if (o && r && ((h = (_ = o.target).closest) != null && h.call(_, r)) || o && cy(o))
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
me = new WeakMap(), yn = new WeakMap(), pr = new WeakMap(), L(Mt, "NAME", "contextmenu"), L(Mt, "EVENTS", !0), L(Mt, "DEFAULT", {
  placement: "bottom-start",
  strategy: "fixed",
  flip: !0,
  preventOverflow: !0
}), L(Mt, "MENU_CLASS", "contextmenu"), L(Mt, "CLASS_SHOW", "show"), L(Mt, "MENU_SELECTOR", '[data-toggle="contextmenu"]:not(.disabled):not(:disabled)');
document.addEventListener("contextmenu", (t) => {
  const e = t.target;
  if (e.closest(`.${Mt.MENU_CLASS}`))
    return;
  const n = e.closest(Mt.MENU_SELECTOR);
  n && (Mt.ensure(n).show(t), t.preventDefault());
});
document.addEventListener("click", Mt.clear.bind(Mt));
function ph(t) {
  return t.split("-")[1];
}
function Ny(t) {
  return t === "y" ? "height" : "width";
}
function mh(t) {
  return t.split("-")[0];
}
function gh(t) {
  return ["top", "bottom"].includes(mh(t)) ? "x" : "y";
}
function Ry(t) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...t
  };
}
function Py(t) {
  return typeof t != "number" ? Ry(t) : {
    top: t,
    right: t,
    bottom: t,
    left: t
  };
}
const Oy = Math.min, Hy = Math.max;
function Wy(t, e, n) {
  return Hy(t, Oy(e, n));
}
const Iy = (t) => ({
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
    const h = Py(o), s = {
      x: i,
      y: r
    }, d = gh(l), f = Ny(d), a = await _.getDimensions(n), u = d === "y" ? "top" : "left", b = d === "y" ? "bottom" : "right", p = c.reference[f] + c.reference[d] - s[d] - c.floating[f], m = s[d] - c.reference[d], g = await (_.getOffsetParent == null ? void 0 : _.getOffsetParent(n));
    let w = g ? d === "y" ? g.clientHeight || 0 : g.clientWidth || 0 : 0;
    w === 0 && (w = c.floating[f]);
    const k = p / 2 - m / 2, C = h[u], A = w - a[f] - h[b], E = w / 2 - a[f] / 2 + k, y = Wy(C, E, A), D = ph(l) != null && E != y && c.reference[f] / 2 - (E < C ? h[u] : h[b]) - a[f] / 2 < 0 ? E < C ? C - E : A - E : 0;
    return {
      [d]: s[d] - D,
      data: {
        [d]: y,
        centerOffset: E - y
      }
    };
  }
});
async function Uy(t, e) {
  const {
    placement: n,
    platform: o,
    elements: i
  } = t, r = await (o.isRTL == null ? void 0 : o.isRTL(i.floating)), l = mh(n), c = ph(n), _ = gh(n) === "x", h = ["left", "top"].includes(l) ? -1 : 1, s = r && _ ? -1 : 1, d = typeof e == "function" ? e(t) : e;
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
const Fy = function(t) {
  return t === void 0 && (t = 0), {
    name: "offset",
    options: t,
    async fn(e) {
      const {
        x: n,
        y: o
      } = e, i = await Uy(e, t);
      return {
        x: n + i.x,
        y: o + i.y,
        data: i
      };
    }
  };
};
var vn, bn, wn, yi, yh;
const ra = class extends Mt {
  constructor() {
    super(...arguments);
    M(this, yi);
    M(this, vn, !1);
    M(this, bn, 0);
    L(this, "hideLater", () => {
      v(this, wn).call(this), H(this, bn, window.setTimeout(this.hide.bind(this), 100));
    });
    M(this, wn, () => {
      clearTimeout(v(this, bn)), H(this, bn, 0);
    });
  }
  get isHover() {
    return this.options.trigger === "hover";
  }
  get elementShowClass() {
    return `with-${this.constructor.NAME}-show`;
  }
  show(n, o) {
    (o == null ? void 0 : o.clearOthers) !== !1 && ra.clear({ event: o == null ? void 0 : o.event, exclude: [this.element] });
    const i = super.show(n);
    return i && (!v(this, vn) && this.isHover && W(this, yi, yh).call(this), this.element.classList.add(this.elementShowClass)), i;
  }
  hide() {
    const n = super.hide();
    return n && this.element.classList.remove(this.elementShowClass), n;
  }
  toggle(n, o) {
    return this.isShown ? this.hide() : this.show(n, { event: n, ...o });
  }
  destroy() {
    v(this, vn) && (this.element.removeEventListener("mouseleave", this.hideLater), this.menu.removeEventListener("mouseenter", v(this, wn)), this.menu.removeEventListener("mouseleave", this.hideLater)), super.destroy();
  }
  _getArrowSize() {
    const { arrow: n } = this.options;
    return n ? typeof n == "number" ? n : 5 : 0;
  }
  _getPopperOptions() {
    var i, r;
    const n = super._getPopperOptions(), o = this._getArrowSize();
    return o && ((i = n.middleware) == null || i.push(Fy(o + (this.options.offset ?? 0))), (r = n.middleware) == null || r.push(Iy({ element: this.arrowEl }))), n;
  }
  _ensureMenu() {
    const n = super._ensureMenu();
    if (this.options.arrow) {
      const o = document.createElement("div");
      this.arrowEl = o, this.arrowEl.style.position = "absolute", this.arrowEl.style.width = "8px", this.arrowEl.style.height = "8px", this.arrowEl.style.transform = "rotate(45deg)", this.arrowEl.style.background = "inherit", this.arrowEl.style.border = "inherit", n.append(o);
    }
    return n;
  }
  _getMenuOptions() {
    const n = super._getMenuOptions();
    if (n && this.options.arrow) {
      const { afterRender: o } = n;
      n.afterRender = (...i) => {
        o == null || o(...i);
      };
    }
    return n;
  }
};
let Ct = ra;
vn = new WeakMap(), bn = new WeakMap(), wn = new WeakMap(), yi = new WeakSet(), yh = function() {
  const { menu: n } = this;
  n.addEventListener("mouseenter", v(this, wn)), n.addEventListener("mouseleave", this.hideLater), this.element.addEventListener("mouseleave", this.hideLater), H(this, vn, !0);
}, L(Ct, "NAME", "dropdown"), L(Ct, "MENU_CLASS", "dropdown-menu"), L(Ct, "MENU_SELECTOR", '[data-toggle="dropdown"]:not(.disabled):not(:disabled)'), L(Ct, "DEFAULT", {
  ...Mt.DEFAULT,
  strategy: "absolute",
  trigger: "click"
});
document.addEventListener("click", function(t) {
  const n = t.target.closest(Ct.MENU_SELECTOR);
  if (n) {
    const o = Ct.ensure(n);
    o.options.trigger === "click" && o.toggle();
  } else
    Ct.clear({ event: t });
});
document.addEventListener("mouseover", function(t) {
  const e = t.target, n = typeof e.closest == "function" ? e.closest(Ct.MENU_SELECTOR) : null;
  if (!n)
    return;
  const o = Ct.ensure(n);
  o.isHover && o.show();
});
const By = (t) => {
  const e = document.getElementsByClassName("with-dropdown-show")[0];
  if (!e)
    return;
  const n = typeof e.closest == "function" ? e.closest(Ct.MENU_SELECTOR) : null;
  !n || !t.target.contains(n) || Ct.clear({ event: t });
};
window.addEventListener("scroll", By, !0);
var mr, $n;
class jy extends ho {
  constructor(n) {
    var o;
    super(n);
    M(this, mr, void 0);
    M(this, $n, Zg());
    this.state = { placement: ((o = n.dropdown) == null ? void 0 : o.placement) || "", show: !1 };
  }
  get ref() {
    return v(this, $n);
  }
  get triggerElement() {
    return v(this, $n).current;
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
    }), H(this, mr, Ct.ensure(this.triggerElement, {
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
    (n = v(this, mr)) == null || n.destroy();
  }
  beforeRender() {
    const { className: n, children: o, dropdown: i, ...r } = this.props;
    return {
      className: F("dropdown", n),
      children: typeof o == "function" ? o(this.state) : o,
      ...r,
      "data-toggle": "dropdown",
      "data-dropdown-placement": this.state.placement,
      ref: v(this, $n)
    };
  }
  render() {
    const { children: n, ...o } = this.beforeRender();
    return /* @__PURE__ */ Vu("div", { ...o, children: n });
  }
}
mr = new WeakMap(), $n = new WeakMap();
class Vy extends jy {
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
    return o.caret = i, /* @__PURE__ */ Vu(Jt, { ...o });
  }
}
function vh({
  key: t,
  type: e,
  btnType: n,
  ...o
}) {
  return /* @__PURE__ */ wl(Vy, { type: n, ...o });
}
var Oc, ft, bh, wh, go, t_, $h = {}, kh = [], zy = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function Ae(t, e) {
  for (var n in e)
    t[n] = e[n];
  return t;
}
function xh(t) {
  var e = t.parentNode;
  e && e.removeChild(t);
}
function Yy(t, e, n) {
  var o, i, r, l = {};
  for (r in e)
    r == "key" ? o = e[r] : r == "ref" ? i = e[r] : l[r] = e[r];
  if (arguments.length > 2 && (l.children = arguments.length > 3 ? Oc.call(arguments, 2) : n), typeof t == "function" && t.defaultProps != null)
    for (r in t.defaultProps)
      l[r] === void 0 && (l[r] = t.defaultProps[r]);
  return is(t, l, o, i, null);
}
function is(t, e, n, o, i) {
  var r = { type: t, props: e, key: n, ref: o, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: i ?? ++bh };
  return i == null && ft.vnode != null && ft.vnode(r), r;
}
function Hc(t) {
  return t.children;
}
function yo(t, e) {
  this.props = t, this.context = e;
}
function Ko(t, e) {
  if (e == null)
    return t.__ ? Ko(t.__, t.__.__k.indexOf(t) + 1) : null;
  for (var n; e < t.__k.length; e++)
    if ((n = t.__k[e]) != null && n.__e != null)
      return n.__e;
  return typeof t.type == "function" ? Ko(t) : null;
}
function Sh(t) {
  var e, n;
  if ((t = t.__) != null && t.__c != null) {
    for (t.__e = t.__c.base = null, e = 0; e < t.__k.length; e++)
      if ((n = t.__k[e]) != null && n.__e != null) {
        t.__e = t.__c.base = n.__e;
        break;
      }
    return Sh(t);
  }
}
function e_(t) {
  (!t.__d && (t.__d = !0) && go.push(t) && !Rs.__r++ || t_ !== ft.debounceRendering) && ((t_ = ft.debounceRendering) || setTimeout)(Rs);
}
function Rs() {
  for (var t; Rs.__r = go.length; )
    t = go.sort(function(e, n) {
      return e.__v.__b - n.__v.__b;
    }), go = [], t.some(function(e) {
      var n, o, i, r, l, c;
      e.__d && (l = (r = (n = e).__v).__e, (c = n.__P) && (o = [], (i = Ae({}, r)).__v = r.__v + 1, Th(c, r, i, n.__n, c.ownerSVGElement !== void 0, r.__h != null ? [l] : null, o, l ?? Ko(r), r.__h), qy(o, r), r.__e != l && Sh(r)));
    });
}
function Ch(t, e, n, o, i, r, l, c, _, h) {
  var s, d, f, a, u, b, p, m = o && o.__k || kh, g = m.length;
  for (n.__k = [], s = 0; s < e.length; s++)
    if ((a = n.__k[s] = (a = e[s]) == null || typeof a == "boolean" ? null : typeof a == "string" || typeof a == "number" || typeof a == "bigint" ? is(null, a, null, null, a) : Array.isArray(a) ? is(Hc, { children: a }, null, null, null) : a.__b > 0 ? is(a.type, a.props, a.key, a.ref ? a.ref : null, a.__v) : a) != null) {
      if (a.__ = n, a.__b = n.__b + 1, (f = m[s]) === null || f && a.key == f.key && a.type === f.type)
        m[s] = void 0;
      else
        for (d = 0; d < g; d++) {
          if ((f = m[d]) && a.key == f.key && a.type === f.type) {
            m[d] = void 0;
            break;
          }
          f = null;
        }
      Th(t, a, f = f || $h, i, r, l, c, _, h), u = a.__e, (d = a.ref) && f.ref != d && (p || (p = []), f.ref && p.push(f.ref, null, a), p.push(d, a.__c || u, a)), u != null ? (b == null && (b = u), typeof a.type == "function" && a.__k === f.__k ? a.__d = _ = Eh(a, _, t) : _ = Ah(t, a, f, m, u, _), typeof n.type == "function" && (n.__d = _)) : _ && f.__e == _ && _.parentNode != t && (_ = Ko(f));
    }
  for (n.__e = b, s = g; s--; )
    m[s] != null && Lh(m[s], m[s]);
  if (p)
    for (s = 0; s < p.length; s++)
      Mh(p[s], p[++s], p[++s]);
}
function Eh(t, e, n) {
  for (var o, i = t.__k, r = 0; i && r < i.length; r++)
    (o = i[r]) && (o.__ = t, e = typeof o.type == "function" ? Eh(o, e, n) : Ah(n, o, o, i, o.__e, e));
  return e;
}
function Ah(t, e, n, o, i, r) {
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
function Gy(t, e, n, o, i) {
  var r;
  for (r in n)
    r === "children" || r === "key" || r in e || Ps(t, r, null, n[r], o);
  for (r in e)
    i && typeof e[r] != "function" || r === "children" || r === "key" || r === "value" || r === "checked" || n[r] === e[r] || Ps(t, r, e[r], n[r], o);
}
function n_(t, e, n) {
  e[0] === "-" ? t.setProperty(e, n) : t[e] = n == null ? "" : typeof n != "number" || zy.test(e) ? n : n + "px";
}
function Ps(t, e, n, o, i) {
  var r;
  t:
    if (e === "style")
      if (typeof n == "string")
        t.style.cssText = n;
      else {
        if (typeof o == "string" && (t.style.cssText = o = ""), o)
          for (e in o)
            n && e in n || n_(t.style, e, "");
        if (n)
          for (e in n)
            o && n[e] === o[e] || n_(t.style, e, n[e]);
      }
    else if (e[0] === "o" && e[1] === "n")
      r = e !== (e = e.replace(/Capture$/, "")), e = e.toLowerCase() in t ? e.toLowerCase().slice(2) : e.slice(2), t.l || (t.l = {}), t.l[e + r] = n, n ? o || t.addEventListener(e, r ? r_ : o_, r) : t.removeEventListener(e, r ? r_ : o_, r);
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
function o_(t) {
  this.l[t.type + !1](ft.event ? ft.event(t) : t);
}
function r_(t) {
  this.l[t.type + !0](ft.event ? ft.event(t) : t);
}
function Th(t, e, n, o, i, r, l, c, _) {
  var h, s, d, f, a, u, b, p, m, g, w, k, C, A, E, y = e.type;
  if (e.constructor !== void 0)
    return null;
  n.__h != null && (_ = n.__h, c = e.__e = n.__e, e.__h = null, r = [c]), (h = ft.__b) && h(e);
  try {
    t:
      if (typeof y == "function") {
        if (p = e.props, m = (h = y.contextType) && o[h.__c], g = h ? m ? m.props.value : h.__ : o, n.__c ? b = (s = e.__c = n.__c).__ = s.__E : ("prototype" in y && y.prototype.render ? e.__c = s = new y(p, g) : (e.__c = s = new yo(p, g), s.constructor = y, s.render = Ky), m && m.sub(s), s.props = p, s.state || (s.state = {}), s.context = g, s.__n = o, d = s.__d = !0, s.__h = [], s._sb = []), s.__s == null && (s.__s = s.state), y.getDerivedStateFromProps != null && (s.__s == s.state && (s.__s = Ae({}, s.__s)), Ae(s.__s, y.getDerivedStateFromProps(p, s.__s))), f = s.props, a = s.state, d)
          y.getDerivedStateFromProps == null && s.componentWillMount != null && s.componentWillMount(), s.componentDidMount != null && s.__h.push(s.componentDidMount);
        else {
          if (y.getDerivedStateFromProps == null && p !== f && s.componentWillReceiveProps != null && s.componentWillReceiveProps(p, g), !s.__e && s.shouldComponentUpdate != null && s.shouldComponentUpdate(p, s.__s, g) === !1 || e.__v === n.__v) {
            for (s.props = p, s.state = s.__s, e.__v !== n.__v && (s.__d = !1), s.__v = e, e.__e = n.__e, e.__k = n.__k, e.__k.forEach(function(x) {
              x && (x.__ = e);
            }), w = 0; w < s._sb.length; w++)
              s.__h.push(s._sb[w]);
            s._sb = [], s.__h.length && l.push(s);
            break t;
          }
          s.componentWillUpdate != null && s.componentWillUpdate(p, s.__s, g), s.componentDidUpdate != null && s.__h.push(function() {
            s.componentDidUpdate(f, a, u);
          });
        }
        if (s.context = g, s.props = p, s.__v = e, s.__P = t, k = ft.__r, C = 0, "prototype" in y && y.prototype.render) {
          for (s.state = s.__s, s.__d = !1, k && k(e), h = s.render(s.props, s.state, s.context), A = 0; A < s._sb.length; A++)
            s.__h.push(s._sb[A]);
          s._sb = [];
        } else
          do
            s.__d = !1, k && k(e), h = s.render(s.props, s.state, s.context), s.state = s.__s;
          while (s.__d && ++C < 25);
        s.state = s.__s, s.getChildContext != null && (o = Ae(Ae({}, o), s.getChildContext())), d || s.getSnapshotBeforeUpdate == null || (u = s.getSnapshotBeforeUpdate(f, a)), E = h != null && h.type === Hc && h.key == null ? h.props.children : h, Ch(t, Array.isArray(E) ? E : [E], e, n, o, i, r, l, c, _), s.base = e.__e, e.__h = null, s.__h.length && l.push(s), b && (s.__E = s.__ = null), s.__e = !1;
      } else
        r == null && e.__v === n.__v ? (e.__k = n.__k, e.__e = n.__e) : e.__e = Xy(n.__e, e, n, o, i, r, l, _);
    (h = ft.diffed) && h(e);
  } catch (x) {
    e.__v = null, (_ || r != null) && (e.__e = c, e.__h = !!_, r[r.indexOf(c)] = null), ft.__e(x, e, n);
  }
}
function qy(t, e) {
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
function Xy(t, e, n, o, i, r, l, c) {
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
    if (r = r && Oc.call(t.childNodes), h = (d = n.props || $h).dangerouslySetInnerHTML, s = f.dangerouslySetInnerHTML, !c) {
      if (r != null)
        for (d = {}, u = 0; u < t.attributes.length; u++)
          d[t.attributes[u].name] = t.attributes[u].value;
      (s || h) && (s && (h && s.__html == h.__html || s.__html === t.innerHTML) || (t.innerHTML = s && s.__html || ""));
    }
    if (Gy(t, f, d, i, c), s)
      e.__k = [];
    else if (u = e.props.children, Ch(t, Array.isArray(u) ? u : [u], e, n, o, i && a !== "foreignObject", r, l, r ? r[0] : n.__k && Ko(n, 0), c), r != null)
      for (u = r.length; u--; )
        r[u] != null && xh(r[u]);
    c || ("value" in f && (u = f.value) !== void 0 && (u !== t.value || a === "progress" && !u || a === "option" && u !== d.value) && Ps(t, "value", u, d.value, !1), "checked" in f && (u = f.checked) !== void 0 && u !== t.checked && Ps(t, "checked", u, d.checked, !1));
  }
  return t;
}
function Mh(t, e, n) {
  try {
    typeof t == "function" ? t(e) : t.current = e;
  } catch (o) {
    ft.__e(o, n);
  }
}
function Lh(t, e, n) {
  var o, i;
  if (ft.unmount && ft.unmount(t), (o = t.ref) && (o.current && o.current !== t.__e || Mh(o, null, e)), (o = t.__c) != null) {
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
      o[i] && Lh(o[i], e, n || typeof t.type != "function");
  n || t.__e == null || xh(t.__e), t.__ = t.__e = t.__d = void 0;
}
function Ky(t, e, n) {
  return this.constructor(t, n);
}
Oc = kh.slice, ft = { __e: function(t, e, n, o) {
  for (var i, r, l; e = e.__; )
    if ((i = e.__c) && !i.__)
      try {
        if ((r = i.constructor) && r.getDerivedStateFromError != null && (i.setState(r.getDerivedStateFromError(t)), l = i.__d), i.componentDidCatch != null && (i.componentDidCatch(t, o || {}), l = i.__d), l)
          return i.__E = i;
      } catch (c) {
        t = c;
      }
  throw t;
} }, bh = 0, wh = function(t) {
  return t != null && t.constructor === void 0;
}, yo.prototype.setState = function(t, e) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = Ae({}, this.state), typeof t == "function" && (t = t(Ae({}, n), this.props)), t && Ae(n, t), t != null && this.__v && (e && this._sb.push(e), e_(this));
}, yo.prototype.forceUpdate = function(t) {
  this.__v && (this.__e = !0, t && this.__h.push(t), e_(this));
}, yo.prototype.render = Hc, go = [], Rs.__r = 0;
var Zy = 0;
function s_(t, e, n, o, i) {
  var r, l, c = {};
  for (l in e)
    l == "ref" ? r = e[l] : c[l] = e[l];
  var _ = { type: t, props: c, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: --Zy, __source: i, __self: o };
  if (typeof t == "function" && (r = t.defaultProps))
    for (l in r)
      c[l] === void 0 && (c[l] = r[l]);
  return ft.vnode && ft.vnode(_), _;
}
let Dh = class extends yo {
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
    return /* @__PURE__ */ s_(Jt, { ...i }, o);
  }
  renderItem(e, n, o) {
    const { itemRender: i, defaultBtnProps: r, onClickItem: l } = e, c = { key: o, ...n };
    if (r && Object.assign(c, r), l && (c.onClick = this.handleItemClick.bind(this, c, o, n.onClick)), i) {
      const _ = i.call(this, c, Yy);
      if (wh(_))
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
    return /* @__PURE__ */ s_(
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
function Jy({
  key: t,
  type: e,
  btnType: n,
  ...o
}) {
  return /* @__PURE__ */ wl(Dh, { type: n, ...o });
}
var an;
let Vn = (an = class extends jn {
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
    return /* @__PURE__ */ wl(e, { ...r });
  }
}, L(an, "ItemComponents", {
  item: Xg,
  dropdown: vh,
  "btn-group": Jy
}), L(an, "ROOT_TAG", "nav"), L(an, "NAME", "toolbar"), L(an, "defaultProps", {
  btnProps: {
    btnType: "ghost"
  }
}), an);
function Qy({
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
  c === !0 ? d = /* @__PURE__ */ oe(Jt, { className: "alert-close btn ghost", square: !0, onClick: _, children: /* @__PURE__ */ oe("span", { class: "close" }) }) : _n(c) ? d = c : typeof c == "object" && (d = /* @__PURE__ */ oe(Jt, { ...c, onClick: _ }));
  const f = _n(n) ? n : n ? /* @__PURE__ */ oe(Vn, { ...n }) : null;
  return /* @__PURE__ */ oe("div", { className: F("alert", t), style: e, ...s, children: [
    _n(h) ? h : typeof h == "string" ? /* @__PURE__ */ oe("i", { className: `icon ${h}` }) : null,
    _n(i) ? i : /* @__PURE__ */ oe("div", { className: F("alert-content", r), children: [
      _n(o) ? o : o && /* @__PURE__ */ oe("div", { className: "alert-heading", children: o }),
      /* @__PURE__ */ oe("div", { className: "alert-text", children: i }),
      o ? f : null
    ] }),
    o ? null : f,
    d,
    l
  ] });
}
function tv(t) {
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
let ev = class extends fo {
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
    return /* @__PURE__ */ Yg(
      Qy,
      {
        className: F("messager", _, i, l === !0 ? tv(r) : l, c ? "in" : ""),
        ...s
      }
    );
  }
};
var kn, cs;
class ls extends xt {
  constructor() {
    super(...arguments);
    M(this, kn);
    L(this, "_show", !1);
    L(this, "_showTimer", 0);
    L(this, "_afterRender", ({ firstRender: n }) => {
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
    this._show || (this.emit("show"), this.render(), this._show = !0, W(this, kn, cs).call(this, () => {
      this.emit("shown");
      const { time: n } = this.options;
      n && W(this, kn, cs).call(this, () => this.hide(), n);
    }));
  }
  hide() {
    this._show && (this._show = !1, this.emit("hide"), this.render(), W(this, kn, cs).call(this, () => {
      this.emit("hidden");
    }));
  }
}
kn = new WeakSet(), cs = function(n, o = 200) {
  this._showTimer && clearTimeout(this._showTimer), this._showTimer = window.setTimeout(() => {
    n(), this._showTimer = 0;
  }, o);
}, L(ls, "NAME", "MessagerItem"), L(ls, "EVENTS", !0), L(ls, "Component", ev);
var Qe, xn, ae, vi, Nh, bi, Rh;
const sa = class extends jt {
  constructor() {
    super(...arguments);
    M(this, vi);
    M(this, bi);
    M(this, Qe, void 0);
    M(this, xn, Ig(6));
    M(this, ae, void 0);
  }
  get id() {
    return v(this, xn);
  }
  get isShown() {
    var n;
    return !!((n = v(this, ae)) != null && n.isShown);
  }
  show(n) {
    this.setOptions(n), W(this, vi, Nh).call(this).show();
  }
  hide() {
    var n;
    (n = v(this, ae)) == null || n.hide();
  }
  static show(n) {
    typeof n == "string" && (n = { content: n });
    const { container: o, ...i } = n, r = new sa(o || "body", i);
    return r.show(), r;
  }
};
let Yr = sa;
Qe = new WeakMap(), xn = new WeakMap(), ae = new WeakMap(), vi = new WeakSet(), Nh = function() {
  if (v(this, ae))
    v(this, ae).setOptions(this.options);
  else {
    const n = W(this, bi, Rh).call(this), o = new ls(n, this.options);
    o.on("hidden", () => {
      o.destroy(), n.remove(), H(this, Qe, void 0);
    }), H(this, ae, o);
  }
  return v(this, ae);
}, bi = new WeakSet(), Rh = function() {
  if (v(this, Qe))
    return v(this, Qe);
  const { placement: n = "top" } = this.options;
  let o = this.element.querySelector(`.messagers-${n}`);
  o || (o = document.createElement("div"), o.className = `messagers messagers-${n}`, this.element.appendChild(o));
  let i = o.querySelector(`#messager-${v(this, xn)}`);
  return i || (i = document.createElement("div"), i.className = "messager-holder", i.id = `messager-${v(this, xn)}`, o.appendChild(i), H(this, Qe, i)), i;
}, L(Yr, "NAME", "messager"), L(Yr, "DEFAULT", {
  placement: "top",
  animation: !0,
  close: !0,
  margin: 6,
  time: 5e3
});
var Ph, ut, Oh, vo, i_, Hh = {}, Wh = [], nv = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function Te(t, e) {
  for (var n in e)
    t[n] = e[n];
  return t;
}
function Ih(t) {
  var e = t.parentNode;
  e && e.removeChild(t);
}
function Yl(t, e, n, o, i) {
  var r = { type: t, props: e, key: n, ref: o, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: i ?? ++Oh };
  return i == null && ut.vnode != null && ut.vnode(r), r;
}
function Wc(t) {
  return t.children;
}
function bo(t, e) {
  this.props = t, this.context = e;
}
function Zo(t, e) {
  if (e == null)
    return t.__ ? Zo(t.__, t.__.__k.indexOf(t) + 1) : null;
  for (var n; e < t.__k.length; e++)
    if ((n = t.__k[e]) != null && n.__e != null)
      return n.__e;
  return typeof t.type == "function" ? Zo(t) : null;
}
function Uh(t) {
  var e, n;
  if ((t = t.__) != null && t.__c != null) {
    for (t.__e = t.__c.base = null, e = 0; e < t.__k.length; e++)
      if ((n = t.__k[e]) != null && n.__e != null) {
        t.__e = t.__c.base = n.__e;
        break;
      }
    return Uh(t);
  }
}
function l_(t) {
  (!t.__d && (t.__d = !0) && vo.push(t) && !Os.__r++ || i_ !== ut.debounceRendering) && ((i_ = ut.debounceRendering) || setTimeout)(Os);
}
function Os() {
  for (var t; Os.__r = vo.length; )
    t = vo.sort(function(e, n) {
      return e.__v.__b - n.__v.__b;
    }), vo = [], t.some(function(e) {
      var n, o, i, r, l, c;
      e.__d && (l = (r = (n = e).__v).__e, (c = n.__P) && (o = [], (i = Te({}, r)).__v = r.__v + 1, Vh(c, r, i, n.__n, c.ownerSVGElement !== void 0, r.__h != null ? [l] : null, o, l ?? Zo(r), r.__h), rv(o, r), r.__e != l && Uh(r)));
    });
}
function Fh(t, e, n, o, i, r, l, c, _, h) {
  var s, d, f, a, u, b, p, m = o && o.__k || Wh, g = m.length;
  for (n.__k = [], s = 0; s < e.length; s++)
    if ((a = n.__k[s] = (a = e[s]) == null || typeof a == "boolean" ? null : typeof a == "string" || typeof a == "number" || typeof a == "bigint" ? Yl(null, a, null, null, a) : Array.isArray(a) ? Yl(Wc, { children: a }, null, null, null) : a.__b > 0 ? Yl(a.type, a.props, a.key, a.ref ? a.ref : null, a.__v) : a) != null) {
      if (a.__ = n, a.__b = n.__b + 1, (f = m[s]) === null || f && a.key == f.key && a.type === f.type)
        m[s] = void 0;
      else
        for (d = 0; d < g; d++) {
          if ((f = m[d]) && a.key == f.key && a.type === f.type) {
            m[d] = void 0;
            break;
          }
          f = null;
        }
      Vh(t, a, f = f || Hh, i, r, l, c, _, h), u = a.__e, (d = a.ref) && f.ref != d && (p || (p = []), f.ref && p.push(f.ref, null, a), p.push(d, a.__c || u, a)), u != null ? (b == null && (b = u), typeof a.type == "function" && a.__k === f.__k ? a.__d = _ = Bh(a, _, t) : _ = jh(t, a, f, m, u, _), typeof n.type == "function" && (n.__d = _)) : _ && f.__e == _ && _.parentNode != t && (_ = Zo(f));
    }
  for (n.__e = b, s = g; s--; )
    m[s] != null && Yh(m[s], m[s]);
  if (p)
    for (s = 0; s < p.length; s++)
      zh(p[s], p[++s], p[++s]);
}
function Bh(t, e, n) {
  for (var o, i = t.__k, r = 0; i && r < i.length; r++)
    (o = i[r]) && (o.__ = t, e = typeof o.type == "function" ? Bh(o, e, n) : jh(n, o, o, i, o.__e, e));
  return e;
}
function jh(t, e, n, o, i, r) {
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
function ov(t, e, n, o, i) {
  var r;
  for (r in n)
    r === "children" || r === "key" || r in e || Hs(t, r, null, n[r], o);
  for (r in e)
    i && typeof e[r] != "function" || r === "children" || r === "key" || r === "value" || r === "checked" || n[r] === e[r] || Hs(t, r, e[r], n[r], o);
}
function c_(t, e, n) {
  e[0] === "-" ? t.setProperty(e, n) : t[e] = n == null ? "" : typeof n != "number" || nv.test(e) ? n : n + "px";
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
            n && e in n || c_(t.style, e, "");
        if (n)
          for (e in n)
            o && n[e] === o[e] || c_(t.style, e, n[e]);
      }
    else if (e[0] === "o" && e[1] === "n")
      r = e !== (e = e.replace(/Capture$/, "")), e = e.toLowerCase() in t ? e.toLowerCase().slice(2) : e.slice(2), t.l || (t.l = {}), t.l[e + r] = n, n ? o || t.addEventListener(e, r ? __ : a_, r) : t.removeEventListener(e, r ? __ : a_, r);
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
function a_(t) {
  this.l[t.type + !1](ut.event ? ut.event(t) : t);
}
function __(t) {
  this.l[t.type + !0](ut.event ? ut.event(t) : t);
}
function Vh(t, e, n, o, i, r, l, c, _) {
  var h, s, d, f, a, u, b, p, m, g, w, k, C, A, E, y = e.type;
  if (e.constructor !== void 0)
    return null;
  n.__h != null && (_ = n.__h, c = e.__e = n.__e, e.__h = null, r = [c]), (h = ut.__b) && h(e);
  try {
    t:
      if (typeof y == "function") {
        if (p = e.props, m = (h = y.contextType) && o[h.__c], g = h ? m ? m.props.value : h.__ : o, n.__c ? b = (s = e.__c = n.__c).__ = s.__E : ("prototype" in y && y.prototype.render ? e.__c = s = new y(p, g) : (e.__c = s = new bo(p, g), s.constructor = y, s.render = iv), m && m.sub(s), s.props = p, s.state || (s.state = {}), s.context = g, s.__n = o, d = s.__d = !0, s.__h = [], s._sb = []), s.__s == null && (s.__s = s.state), y.getDerivedStateFromProps != null && (s.__s == s.state && (s.__s = Te({}, s.__s)), Te(s.__s, y.getDerivedStateFromProps(p, s.__s))), f = s.props, a = s.state, d)
          y.getDerivedStateFromProps == null && s.componentWillMount != null && s.componentWillMount(), s.componentDidMount != null && s.__h.push(s.componentDidMount);
        else {
          if (y.getDerivedStateFromProps == null && p !== f && s.componentWillReceiveProps != null && s.componentWillReceiveProps(p, g), !s.__e && s.shouldComponentUpdate != null && s.shouldComponentUpdate(p, s.__s, g) === !1 || e.__v === n.__v) {
            for (s.props = p, s.state = s.__s, e.__v !== n.__v && (s.__d = !1), s.__v = e, e.__e = n.__e, e.__k = n.__k, e.__k.forEach(function(x) {
              x && (x.__ = e);
            }), w = 0; w < s._sb.length; w++)
              s.__h.push(s._sb[w]);
            s._sb = [], s.__h.length && l.push(s);
            break t;
          }
          s.componentWillUpdate != null && s.componentWillUpdate(p, s.__s, g), s.componentDidUpdate != null && s.__h.push(function() {
            s.componentDidUpdate(f, a, u);
          });
        }
        if (s.context = g, s.props = p, s.__v = e, s.__P = t, k = ut.__r, C = 0, "prototype" in y && y.prototype.render) {
          for (s.state = s.__s, s.__d = !1, k && k(e), h = s.render(s.props, s.state, s.context), A = 0; A < s._sb.length; A++)
            s.__h.push(s._sb[A]);
          s._sb = [];
        } else
          do
            s.__d = !1, k && k(e), h = s.render(s.props, s.state, s.context), s.state = s.__s;
          while (s.__d && ++C < 25);
        s.state = s.__s, s.getChildContext != null && (o = Te(Te({}, o), s.getChildContext())), d || s.getSnapshotBeforeUpdate == null || (u = s.getSnapshotBeforeUpdate(f, a)), E = h != null && h.type === Wc && h.key == null ? h.props.children : h, Fh(t, Array.isArray(E) ? E : [E], e, n, o, i, r, l, c, _), s.base = e.__e, e.__h = null, s.__h.length && l.push(s), b && (s.__E = s.__ = null), s.__e = !1;
      } else
        r == null && e.__v === n.__v ? (e.__k = n.__k, e.__e = n.__e) : e.__e = sv(n.__e, e, n, o, i, r, l, _);
    (h = ut.diffed) && h(e);
  } catch (x) {
    e.__v = null, (_ || r != null) && (e.__e = c, e.__h = !!_, r[r.indexOf(c)] = null), ut.__e(x, e, n);
  }
}
function rv(t, e) {
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
function sv(t, e, n, o, i, r, l, c) {
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
    if (r = r && Ph.call(t.childNodes), h = (d = n.props || Hh).dangerouslySetInnerHTML, s = f.dangerouslySetInnerHTML, !c) {
      if (r != null)
        for (d = {}, u = 0; u < t.attributes.length; u++)
          d[t.attributes[u].name] = t.attributes[u].value;
      (s || h) && (s && (h && s.__html == h.__html || s.__html === t.innerHTML) || (t.innerHTML = s && s.__html || ""));
    }
    if (ov(t, f, d, i, c), s)
      e.__k = [];
    else if (u = e.props.children, Fh(t, Array.isArray(u) ? u : [u], e, n, o, i && a !== "foreignObject", r, l, r ? r[0] : n.__k && Zo(n, 0), c), r != null)
      for (u = r.length; u--; )
        r[u] != null && Ih(r[u]);
    c || ("value" in f && (u = f.value) !== void 0 && (u !== t.value || a === "progress" && !u || a === "option" && u !== d.value) && Hs(t, "value", u, d.value, !1), "checked" in f && (u = f.checked) !== void 0 && u !== t.checked && Hs(t, "checked", u, d.checked, !1));
  }
  return t;
}
function zh(t, e, n) {
  try {
    typeof t == "function" ? t(e) : t.current = e;
  } catch (o) {
    ut.__e(o, n);
  }
}
function Yh(t, e, n) {
  var o, i;
  if (ut.unmount && ut.unmount(t), (o = t.ref) && (o.current && o.current !== t.__e || zh(o, null, e)), (o = t.__c) != null) {
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
      o[i] && Yh(o[i], e, n || typeof t.type != "function");
  n || t.__e == null || Ih(t.__e), t.__ = t.__e = t.__d = void 0;
}
function iv(t, e, n) {
  return this.constructor(t, n);
}
Ph = Wh.slice, ut = { __e: function(t, e, n, o) {
  for (var i, r, l; e = e.__; )
    if ((i = e.__c) && !i.__)
      try {
        if ((r = i.constructor) && r.getDerivedStateFromError != null && (i.setState(r.getDerivedStateFromError(t)), l = i.__d), i.componentDidCatch != null && (i.componentDidCatch(t, o || {}), l = i.__d), l)
          return i.__E = i;
      } catch (c) {
        t = c;
      }
  throw t;
} }, Oh = 0, bo.prototype.setState = function(t, e) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = Te({}, this.state), typeof t == "function" && (t = t(Te({}, n), this.props)), t && Te(n, t), t != null && this.__v && (e && this._sb.push(e), l_(this));
}, bo.prototype.forceUpdate = function(t) {
  this.__v && (this.__e = !0, t && this.__h.push(t), l_(this));
}, bo.prototype.render = Wc, vo = [], Os.__r = 0;
var lv = 0;
function Gr(t, e, n, o, i) {
  var r, l, c = {};
  for (l in e)
    l == "ref" ? r = e[l] : c[l] = e[l];
  var _ = { type: t, props: c, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: --lv, __source: i, __self: o };
  if (typeof t == "function" && (r = t.defaultProps))
    for (l in r)
      c[l] === void 0 && (c[l] = r[l]);
  return ut.vnode && ut.vnode(_), _;
}
var Jr;
let cv = (Jr = class extends bo {
  render() {
    const { percent: e, circleSize: n, circleBorderSize: o, circleBgColor: i, circleColor: r } = this.props, l = (n - o) / 2, c = n / 2;
    return /* @__PURE__ */ Gr("svg", { width: n, height: n, class: "progress-circle", children: [
      /* @__PURE__ */ Gr("circle", { cx: c, cy: c, r: l, stroke: i, "stroke-width": o }),
      /* @__PURE__ */ Gr("circle", { cx: c, cy: c, r: l, stroke: r, "stroke-dasharray": Math.PI * l * 2, "stroke-dashoffset": Math.PI * l * 2 * (100 - e) / 100, "stroke-width": o }),
      /* @__PURE__ */ Gr("text", { x: c, y: c + o / 4, "dominant-baseline": "middle", style: { fontSize: `${l}px` }, children: Math.round(e) })
    ] });
  }
}, L(Jr, "NAME", "zui.progress-circle"), L(Jr, "defaultProps", {
  circleSize: 24,
  circleBorderSize: 2,
  circleBgColor: "var(--progress-circle-bg)",
  circleColor: "var(--progress-circle-bar-color)"
}), Jr);
class f_ extends xt {
}
L(f_, "NAME", "table-sorter"), L(f_, "Component", cv);
function av(t) {
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
function _v(t) {
  document.readyState !== "loading" ? t() : document.addEventListener("DOMContentLoaded", t);
}
function fv(t, e) {
  const n = typeof t == "string" ? document.querySelector(t) : t;
  if (!n)
    return !1;
  const o = n.getBoundingClientRect(), i = window.innerHeight || document.documentElement.clientHeight, r = window.innerWidth || document.documentElement.clientWidth;
  if (e != null && e.fullyCheck)
    return o.left >= 0 && o.top >= 0 && o.left + o.width <= r && o.top + o.height <= i;
  const l = o.top <= i && o.top + o.height >= 0, c = o.left <= r && o.left + o.width >= 0;
  return l && c;
}
const _$ = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  classes: F,
  domReady: _v,
  getClassList: bl,
  isElementVisible: fv,
  selectText: av
}, Symbol.toStringTag, { value: "Module" }));
let uv = (t = 21) => crypto.getRandomValues(new Uint8Array(t)).reduce((e, n) => (n &= 63, n < 36 ? e += n.toString(36) : n < 62 ? e += (n - 26).toString(36).toUpperCase() : n > 62 ? e += "-" : e += "_", e), "");
var gr, ge, zt, Sn, Cn, as;
const ia = class {
  /**
   * Create new store instance
   * @param name Name of store
   * @param type Store type
   */
  constructor(e, n = "local") {
    M(this, Cn);
    M(this, gr, void 0);
    M(this, ge, void 0);
    M(this, zt, void 0);
    M(this, Sn, void 0);
    H(this, gr, n), H(this, ge, `ZUI_STORE:${e ?? uv()}`), H(this, zt, n === "local" ? localStorage : sessionStorage);
  }
  /**
   * Get store type
   */
  get type() {
    return v(this, gr);
  }
  /**
   * Get session type store instance
   */
  get session() {
    return this.type === "session" ? this : (v(this, Sn) || H(this, Sn, new ia(v(this, ge), "session")), v(this, Sn));
  }
  /**
   * Get value from store
   * @param key Key to get
   * @param defaultValue default value to return if key is not found
   * @returns Value of key or defaultValue if key is not found
   */
  get(e, n) {
    const o = v(this, zt).getItem(W(this, Cn, as).call(this, e));
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
    v(this, zt).setItem(W(this, Cn, as).call(this, e), JSON.stringify(n));
  }
  /**
   * Remove key-value pair from store
   * @param key Key to remove
   */
  remove(e) {
    v(this, zt).removeItem(W(this, Cn, as).call(this, e));
  }
  /**
   * Iterate all key-value pairs in store
   * @param callback Callback function to call for each key-value pair in the store
   */
  each(e) {
    for (let n = 0; n < v(this, zt).length; n++) {
      const o = v(this, zt).key(n);
      if (o != null && o.startsWith(v(this, ge))) {
        const i = v(this, zt).getItem(o);
        typeof i == "string" && e(o.substring(v(this, ge).length + 1), JSON.parse(i));
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
let Ws = ia;
gr = new WeakMap(), ge = new WeakMap(), zt = new WeakMap(), Sn = new WeakMap(), Cn = new WeakSet(), as = function(e) {
  return `${v(this, ge)}:${e}`;
};
const hv = new Ws("DEFAULT");
function dv(t, e = "local") {
  return new Ws(t, e);
}
Object.assign(hv, { create: dv });
var Gh, ht, qh, wo, u_, Xh = {}, Kh = [], pv = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function Me(t, e) {
  for (var n in e)
    t[n] = e[n];
  return t;
}
function Zh(t) {
  var e = t.parentNode;
  e && e.removeChild(t);
}
function Gl(t, e, n, o, i) {
  var r = { type: t, props: e, key: n, ref: o, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: i ?? ++qh };
  return i == null && ht.vnode != null && ht.vnode(r), r;
}
function Ic(t) {
  return t.children;
}
function $o(t, e) {
  this.props = t, this.context = e;
}
function Jo(t, e) {
  if (e == null)
    return t.__ ? Jo(t.__, t.__.__k.indexOf(t) + 1) : null;
  for (var n; e < t.__k.length; e++)
    if ((n = t.__k[e]) != null && n.__e != null)
      return n.__e;
  return typeof t.type == "function" ? Jo(t) : null;
}
function Jh(t) {
  var e, n;
  if ((t = t.__) != null && t.__c != null) {
    for (t.__e = t.__c.base = null, e = 0; e < t.__k.length; e++)
      if ((n = t.__k[e]) != null && n.__e != null) {
        t.__e = t.__c.base = n.__e;
        break;
      }
    return Jh(t);
  }
}
function h_(t) {
  (!t.__d && (t.__d = !0) && wo.push(t) && !Is.__r++ || u_ !== ht.debounceRendering) && ((u_ = ht.debounceRendering) || setTimeout)(Is);
}
function Is() {
  for (var t; Is.__r = wo.length; )
    t = wo.sort(function(e, n) {
      return e.__v.__b - n.__v.__b;
    }), wo = [], t.some(function(e) {
      var n, o, i, r, l, c;
      e.__d && (l = (r = (n = e).__v).__e, (c = n.__P) && (o = [], (i = Me({}, r)).__v = r.__v + 1, nd(c, r, i, n.__n, c.ownerSVGElement !== void 0, r.__h != null ? [l] : null, o, l ?? Jo(r), r.__h), gv(o, r), r.__e != l && Jh(r)));
    });
}
function Qh(t, e, n, o, i, r, l, c, _, h) {
  var s, d, f, a, u, b, p, m = o && o.__k || Kh, g = m.length;
  for (n.__k = [], s = 0; s < e.length; s++)
    if ((a = n.__k[s] = (a = e[s]) == null || typeof a == "boolean" ? null : typeof a == "string" || typeof a == "number" || typeof a == "bigint" ? Gl(null, a, null, null, a) : Array.isArray(a) ? Gl(Ic, { children: a }, null, null, null) : a.__b > 0 ? Gl(a.type, a.props, a.key, a.ref ? a.ref : null, a.__v) : a) != null) {
      if (a.__ = n, a.__b = n.__b + 1, (f = m[s]) === null || f && a.key == f.key && a.type === f.type)
        m[s] = void 0;
      else
        for (d = 0; d < g; d++) {
          if ((f = m[d]) && a.key == f.key && a.type === f.type) {
            m[d] = void 0;
            break;
          }
          f = null;
        }
      nd(t, a, f = f || Xh, i, r, l, c, _, h), u = a.__e, (d = a.ref) && f.ref != d && (p || (p = []), f.ref && p.push(f.ref, null, a), p.push(d, a.__c || u, a)), u != null ? (b == null && (b = u), typeof a.type == "function" && a.__k === f.__k ? a.__d = _ = td(a, _, t) : _ = ed(t, a, f, m, u, _), typeof n.type == "function" && (n.__d = _)) : _ && f.__e == _ && _.parentNode != t && (_ = Jo(f));
    }
  for (n.__e = b, s = g; s--; )
    m[s] != null && rd(m[s], m[s]);
  if (p)
    for (s = 0; s < p.length; s++)
      od(p[s], p[++s], p[++s]);
}
function td(t, e, n) {
  for (var o, i = t.__k, r = 0; i && r < i.length; r++)
    (o = i[r]) && (o.__ = t, e = typeof o.type == "function" ? td(o, e, n) : ed(n, o, o, i, o.__e, e));
  return e;
}
function ed(t, e, n, o, i, r) {
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
function mv(t, e, n, o, i) {
  var r;
  for (r in n)
    r === "children" || r === "key" || r in e || Us(t, r, null, n[r], o);
  for (r in e)
    i && typeof e[r] != "function" || r === "children" || r === "key" || r === "value" || r === "checked" || n[r] === e[r] || Us(t, r, e[r], n[r], o);
}
function d_(t, e, n) {
  e[0] === "-" ? t.setProperty(e, n) : t[e] = n == null ? "" : typeof n != "number" || pv.test(e) ? n : n + "px";
}
function Us(t, e, n, o, i) {
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
  this.l[t.type + !1](ht.event ? ht.event(t) : t);
}
function m_(t) {
  this.l[t.type + !0](ht.event ? ht.event(t) : t);
}
function nd(t, e, n, o, i, r, l, c, _) {
  var h, s, d, f, a, u, b, p, m, g, w, k, C, A, E, y = e.type;
  if (e.constructor !== void 0)
    return null;
  n.__h != null && (_ = n.__h, c = e.__e = n.__e, e.__h = null, r = [c]), (h = ht.__b) && h(e);
  try {
    t:
      if (typeof y == "function") {
        if (p = e.props, m = (h = y.contextType) && o[h.__c], g = h ? m ? m.props.value : h.__ : o, n.__c ? b = (s = e.__c = n.__c).__ = s.__E : ("prototype" in y && y.prototype.render ? e.__c = s = new y(p, g) : (e.__c = s = new $o(p, g), s.constructor = y, s.render = vv), m && m.sub(s), s.props = p, s.state || (s.state = {}), s.context = g, s.__n = o, d = s.__d = !0, s.__h = [], s._sb = []), s.__s == null && (s.__s = s.state), y.getDerivedStateFromProps != null && (s.__s == s.state && (s.__s = Me({}, s.__s)), Me(s.__s, y.getDerivedStateFromProps(p, s.__s))), f = s.props, a = s.state, d)
          y.getDerivedStateFromProps == null && s.componentWillMount != null && s.componentWillMount(), s.componentDidMount != null && s.__h.push(s.componentDidMount);
        else {
          if (y.getDerivedStateFromProps == null && p !== f && s.componentWillReceiveProps != null && s.componentWillReceiveProps(p, g), !s.__e && s.shouldComponentUpdate != null && s.shouldComponentUpdate(p, s.__s, g) === !1 || e.__v === n.__v) {
            for (s.props = p, s.state = s.__s, e.__v !== n.__v && (s.__d = !1), s.__v = e, e.__e = n.__e, e.__k = n.__k, e.__k.forEach(function(x) {
              x && (x.__ = e);
            }), w = 0; w < s._sb.length; w++)
              s.__h.push(s._sb[w]);
            s._sb = [], s.__h.length && l.push(s);
            break t;
          }
          s.componentWillUpdate != null && s.componentWillUpdate(p, s.__s, g), s.componentDidUpdate != null && s.__h.push(function() {
            s.componentDidUpdate(f, a, u);
          });
        }
        if (s.context = g, s.props = p, s.__v = e, s.__P = t, k = ht.__r, C = 0, "prototype" in y && y.prototype.render) {
          for (s.state = s.__s, s.__d = !1, k && k(e), h = s.render(s.props, s.state, s.context), A = 0; A < s._sb.length; A++)
            s.__h.push(s._sb[A]);
          s._sb = [];
        } else
          do
            s.__d = !1, k && k(e), h = s.render(s.props, s.state, s.context), s.state = s.__s;
          while (s.__d && ++C < 25);
        s.state = s.__s, s.getChildContext != null && (o = Me(Me({}, o), s.getChildContext())), d || s.getSnapshotBeforeUpdate == null || (u = s.getSnapshotBeforeUpdate(f, a)), E = h != null && h.type === Ic && h.key == null ? h.props.children : h, Qh(t, Array.isArray(E) ? E : [E], e, n, o, i, r, l, c, _), s.base = e.__e, e.__h = null, s.__h.length && l.push(s), b && (s.__E = s.__ = null), s.__e = !1;
      } else
        r == null && e.__v === n.__v ? (e.__k = n.__k, e.__e = n.__e) : e.__e = yv(n.__e, e, n, o, i, r, l, _);
    (h = ht.diffed) && h(e);
  } catch (x) {
    e.__v = null, (_ || r != null) && (e.__e = c, e.__h = !!_, r[r.indexOf(c)] = null), ht.__e(x, e, n);
  }
}
function gv(t, e) {
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
function yv(t, e, n, o, i, r, l, c) {
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
    if (r = r && Gh.call(t.childNodes), h = (d = n.props || Xh).dangerouslySetInnerHTML, s = f.dangerouslySetInnerHTML, !c) {
      if (r != null)
        for (d = {}, u = 0; u < t.attributes.length; u++)
          d[t.attributes[u].name] = t.attributes[u].value;
      (s || h) && (s && (h && s.__html == h.__html || s.__html === t.innerHTML) || (t.innerHTML = s && s.__html || ""));
    }
    if (mv(t, f, d, i, c), s)
      e.__k = [];
    else if (u = e.props.children, Qh(t, Array.isArray(u) ? u : [u], e, n, o, i && a !== "foreignObject", r, l, r ? r[0] : n.__k && Jo(n, 0), c), r != null)
      for (u = r.length; u--; )
        r[u] != null && Zh(r[u]);
    c || ("value" in f && (u = f.value) !== void 0 && (u !== t.value || a === "progress" && !u || a === "option" && u !== d.value) && Us(t, "value", u, d.value, !1), "checked" in f && (u = f.checked) !== void 0 && u !== t.checked && Us(t, "checked", u, d.checked, !1));
  }
  return t;
}
function od(t, e, n) {
  try {
    typeof t == "function" ? t(e) : t.current = e;
  } catch (o) {
    ht.__e(o, n);
  }
}
function rd(t, e, n) {
  var o, i;
  if (ht.unmount && ht.unmount(t), (o = t.ref) && (o.current && o.current !== t.__e || od(o, null, e)), (o = t.__c) != null) {
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
      o[i] && rd(o[i], e, n || typeof t.type != "function");
  n || t.__e == null || Zh(t.__e), t.__ = t.__e = t.__d = void 0;
}
function vv(t, e, n) {
  return this.constructor(t, n);
}
Gh = Kh.slice, ht = { __e: function(t, e, n, o) {
  for (var i, r, l; e = e.__; )
    if ((i = e.__c) && !i.__)
      try {
        if ((r = i.constructor) && r.getDerivedStateFromError != null && (i.setState(r.getDerivedStateFromError(t)), l = i.__d), i.componentDidCatch != null && (i.componentDidCatch(t, o || {}), l = i.__d), l)
          return i.__E = i;
      } catch (c) {
        t = c;
      }
  throw t;
} }, qh = 0, $o.prototype.setState = function(t, e) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = Me({}, this.state), typeof t == "function" && (t = t(Me({}, n), this.props)), t && Me(n, t), t != null && this.__v && (e && this._sb.push(e), h_(this));
}, $o.prototype.forceUpdate = function(t) {
  this.__v && (this.__e = !0, t && this.__h.push(t), h_(this));
}, $o.prototype.render = Ic, wo = [], Is.__r = 0;
var bv = 0;
function ql(t, e, n, o, i) {
  var r, l, c = {};
  for (l in e)
    l == "ref" ? r = e[l] : c[l] = e[l];
  var _ = { type: t, props: c, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: --bv, __source: i, __self: o };
  if (typeof t == "function" && (r = t.defaultProps))
    for (l in r)
      c[l] === void 0 && (c[l] = r[l]);
  return ht.vnode && ht.vnode(_), _;
}
function wv(t) {
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
function $v(t) {
  const [e, n, o] = typeof t == "string" ? wv(t) : t;
  return e * 0.299 + n * 0.587 + o * 0.114 > 186;
}
function g_(t, e) {
  return $v(t) ? (e == null ? void 0 : e.dark) ?? "#333333" : (e == null ? void 0 : e.light) ?? "#ffffff";
}
function y_(t, e = 255) {
  return Math.min(Math.max(t, 0), e);
}
function kv(t, e, n) {
  t = t % 360 / 360, e = y_(e), n = y_(n);
  const o = n <= 0.5 ? n * (e + 1) : n + e - n * e, i = n * 2 - o, r = (l) => (l = l < 0 ? l + 1 : l > 1 ? l - 1 : l, l * 6 < 1 ? i + (o - i) * l * 6 : l * 2 < 1 ? o : l * 3 < 2 ? i + (o - i) * (2 / 3 - l) * 6 : i);
  return [
    r(t + 1 / 3) * 255,
    r(t) * 255,
    r(t - 1 / 3) * 255
  ];
}
function xv(t) {
  let e = 0;
  if (typeof t != "string" && (t = String(t)), t && t.length)
    for (let n = 0; n < t.length; ++n)
      e += (n + 1) * t.charCodeAt(n);
  return e;
}
function Sv(t, e) {
  return /^[\u4e00-\u9fa5\s]+$/.test(t) ? t = t.length <= e ? t : t.substring(t.length - e) : /^[A-Za-z\d\s]+$/.test(t) ? t = t[0].toUpperCase() : t = t.length <= e ? t : t.substring(0, e), t;
}
let Cv = class extends $o {
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
    } = this.props, m = ["avatar", e], g = { ...n, background: l, color: c };
    let w = 32;
    o && (typeof o == "number" ? (g.width = `${o}px`, g.height = `${o}px`, g.fontSize = `${Math.max(12, Math.round(o / 2))}px`, w = o) : (m.push(`size-${o}`), w = { xs: 20, sm: 24, lg: 48, xl: 80 }[o])), i ? m.push("circle") : r && (typeof r == "number" ? g.borderRadius = `${r}px` : m.push(`rounded-${r}`));
    let k;
    if (d)
      m.push("has-img"), k = /* @__PURE__ */ ql("img", { className: "avatar-img", src: d, alt: _ });
    else if (_ != null && _.length) {
      const C = Sv(_, s);
      if (m.push("has-text", `has-text-${C.length}`), l)
        !c && l && (g.color = g_(l));
      else {
        const E = h ?? _, y = (typeof E == "number" ? E : xv(E)) * f % 360;
        if (g.background = `hsl(${y},${a * 100}%,${u * 100}%)`, !c) {
          const x = kv(y, a, u);
          g.color = g_(x);
        }
      }
      let A;
      w && w < 14 * C.length && (A = { transform: `scale(${w / (14 * C.length)})`, whiteSpace: "nowrap" }), k = /* @__PURE__ */ ql("div", { "data-actualSize": w, className: "avatar-text", style: A, children: C });
    }
    return /* @__PURE__ */ ql(
      "div",
      {
        className: F(m),
        style: g,
        ...p,
        children: [
          k,
          b
        ]
      }
    );
  }
};
class v_ extends xt {
}
L(v_, "NAME", "avatar"), L(v_, "Component", Cv);
class b_ extends xt {
}
L(b_, "NAME", "btngroup"), L(b_, "Component", Dh);
var Cl, nt, sd, ko, w_, Fs = {}, id = [], Ev = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function Le(t, e) {
  for (var n in e)
    t[n] = e[n];
  return t;
}
function ld(t) {
  var e = t.parentNode;
  e && e.removeChild(t);
}
function Qo(t, e, n) {
  var o, i, r, l = {};
  for (r in e)
    r == "key" ? o = e[r] : r == "ref" ? i = e[r] : l[r] = e[r];
  if (arguments.length > 2 && (l.children = arguments.length > 3 ? Cl.call(arguments, 2) : n), typeof t == "function" && t.defaultProps != null)
    for (r in t.defaultProps)
      l[r] === void 0 && (l[r] = t.defaultProps[r]);
  return _s(t, l, o, i, null);
}
function _s(t, e, n, o, i) {
  var r = { type: t, props: e, key: n, ref: o, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: i ?? ++sd };
  return i == null && nt.vnode != null && nt.vnode(r), r;
}
function Av() {
  return { current: null };
}
function El(t) {
  return t.children;
}
function xo(t, e) {
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
function cd(t) {
  var e, n;
  if ((t = t.__) != null && t.__c != null) {
    for (t.__e = t.__c.base = null, e = 0; e < t.__k.length; e++)
      if ((n = t.__k[e]) != null && n.__e != null) {
        t.__e = t.__c.base = n.__e;
        break;
      }
    return cd(t);
  }
}
function $_(t) {
  (!t.__d && (t.__d = !0) && ko.push(t) && !Bs.__r++ || w_ !== nt.debounceRendering) && ((w_ = nt.debounceRendering) || setTimeout)(Bs);
}
function Bs() {
  for (var t; Bs.__r = ko.length; )
    t = ko.sort(function(e, n) {
      return e.__v.__b - n.__v.__b;
    }), ko = [], t.some(function(e) {
      var n, o, i, r, l, c;
      e.__d && (l = (r = (n = e).__v).__e, (c = n.__P) && (o = [], (i = Le({}, r)).__v = r.__v + 1, Uc(c, r, i, n.__n, c.ownerSVGElement !== void 0, r.__h != null ? [l] : null, o, l ?? tr(r), r.__h), ud(o, r), r.__e != l && cd(r)));
    });
}
function ad(t, e, n, o, i, r, l, c, _, h) {
  var s, d, f, a, u, b, p, m = o && o.__k || id, g = m.length;
  for (n.__k = [], s = 0; s < e.length; s++)
    if ((a = n.__k[s] = (a = e[s]) == null || typeof a == "boolean" ? null : typeof a == "string" || typeof a == "number" || typeof a == "bigint" ? _s(null, a, null, null, a) : Array.isArray(a) ? _s(El, { children: a }, null, null, null) : a.__b > 0 ? _s(a.type, a.props, a.key, a.ref ? a.ref : null, a.__v) : a) != null) {
      if (a.__ = n, a.__b = n.__b + 1, (f = m[s]) === null || f && a.key == f.key && a.type === f.type)
        m[s] = void 0;
      else
        for (d = 0; d < g; d++) {
          if ((f = m[d]) && a.key == f.key && a.type === f.type) {
            m[d] = void 0;
            break;
          }
          f = null;
        }
      Uc(t, a, f = f || Fs, i, r, l, c, _, h), u = a.__e, (d = a.ref) && f.ref != d && (p || (p = []), f.ref && p.push(f.ref, null, a), p.push(d, a.__c || u, a)), u != null ? (b == null && (b = u), typeof a.type == "function" && a.__k === f.__k ? a.__d = _ = _d(a, _, t) : _ = fd(t, a, f, m, u, _), typeof n.type == "function" && (n.__d = _)) : _ && f.__e == _ && _.parentNode != t && (_ = tr(f));
    }
  for (n.__e = b, s = g; s--; )
    m[s] != null && dd(m[s], m[s]);
  if (p)
    for (s = 0; s < p.length; s++)
      hd(p[s], p[++s], p[++s]);
}
function _d(t, e, n) {
  for (var o, i = t.__k, r = 0; i && r < i.length; r++)
    (o = i[r]) && (o.__ = t, e = typeof o.type == "function" ? _d(o, e, n) : fd(n, o, o, i, o.__e, e));
  return e;
}
function fd(t, e, n, o, i, r) {
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
function Tv(t, e, n, o, i) {
  var r;
  for (r in n)
    r === "children" || r === "key" || r in e || js(t, r, null, n[r], o);
  for (r in e)
    i && typeof e[r] != "function" || r === "children" || r === "key" || r === "value" || r === "checked" || n[r] === e[r] || js(t, r, e[r], n[r], o);
}
function k_(t, e, n) {
  e[0] === "-" ? t.setProperty(e, n) : t[e] = n == null ? "" : typeof n != "number" || Ev.test(e) ? n : n + "px";
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
            n && e in n || k_(t.style, e, "");
        if (n)
          for (e in n)
            o && n[e] === o[e] || k_(t.style, e, n[e]);
      }
    else if (e[0] === "o" && e[1] === "n")
      r = e !== (e = e.replace(/Capture$/, "")), e = e.toLowerCase() in t ? e.toLowerCase().slice(2) : e.slice(2), t.l || (t.l = {}), t.l[e + r] = n, n ? o || t.addEventListener(e, r ? S_ : x_, r) : t.removeEventListener(e, r ? S_ : x_, r);
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
function x_(t) {
  this.l[t.type + !1](nt.event ? nt.event(t) : t);
}
function S_(t) {
  this.l[t.type + !0](nt.event ? nt.event(t) : t);
}
function Uc(t, e, n, o, i, r, l, c, _) {
  var h, s, d, f, a, u, b, p, m, g, w, k, C, A, E, y = e.type;
  if (e.constructor !== void 0)
    return null;
  n.__h != null && (_ = n.__h, c = e.__e = n.__e, e.__h = null, r = [c]), (h = nt.__b) && h(e);
  try {
    t:
      if (typeof y == "function") {
        if (p = e.props, m = (h = y.contextType) && o[h.__c], g = h ? m ? m.props.value : h.__ : o, n.__c ? b = (s = e.__c = n.__c).__ = s.__E : ("prototype" in y && y.prototype.render ? e.__c = s = new y(p, g) : (e.__c = s = new xo(p, g), s.constructor = y, s.render = Lv), m && m.sub(s), s.props = p, s.state || (s.state = {}), s.context = g, s.__n = o, d = s.__d = !0, s.__h = [], s._sb = []), s.__s == null && (s.__s = s.state), y.getDerivedStateFromProps != null && (s.__s == s.state && (s.__s = Le({}, s.__s)), Le(s.__s, y.getDerivedStateFromProps(p, s.__s))), f = s.props, a = s.state, d)
          y.getDerivedStateFromProps == null && s.componentWillMount != null && s.componentWillMount(), s.componentDidMount != null && s.__h.push(s.componentDidMount);
        else {
          if (y.getDerivedStateFromProps == null && p !== f && s.componentWillReceiveProps != null && s.componentWillReceiveProps(p, g), !s.__e && s.shouldComponentUpdate != null && s.shouldComponentUpdate(p, s.__s, g) === !1 || e.__v === n.__v) {
            for (s.props = p, s.state = s.__s, e.__v !== n.__v && (s.__d = !1), s.__v = e, e.__e = n.__e, e.__k = n.__k, e.__k.forEach(function(x) {
              x && (x.__ = e);
            }), w = 0; w < s._sb.length; w++)
              s.__h.push(s._sb[w]);
            s._sb = [], s.__h.length && l.push(s);
            break t;
          }
          s.componentWillUpdate != null && s.componentWillUpdate(p, s.__s, g), s.componentDidUpdate != null && s.__h.push(function() {
            s.componentDidUpdate(f, a, u);
          });
        }
        if (s.context = g, s.props = p, s.__v = e, s.__P = t, k = nt.__r, C = 0, "prototype" in y && y.prototype.render) {
          for (s.state = s.__s, s.__d = !1, k && k(e), h = s.render(s.props, s.state, s.context), A = 0; A < s._sb.length; A++)
            s.__h.push(s._sb[A]);
          s._sb = [];
        } else
          do
            s.__d = !1, k && k(e), h = s.render(s.props, s.state, s.context), s.state = s.__s;
          while (s.__d && ++C < 25);
        s.state = s.__s, s.getChildContext != null && (o = Le(Le({}, o), s.getChildContext())), d || s.getSnapshotBeforeUpdate == null || (u = s.getSnapshotBeforeUpdate(f, a)), E = h != null && h.type === El && h.key == null ? h.props.children : h, ad(t, Array.isArray(E) ? E : [E], e, n, o, i, r, l, c, _), s.base = e.__e, e.__h = null, s.__h.length && l.push(s), b && (s.__E = s.__ = null), s.__e = !1;
      } else
        r == null && e.__v === n.__v ? (e.__k = n.__k, e.__e = n.__e) : e.__e = Mv(n.__e, e, n, o, i, r, l, _);
    (h = nt.diffed) && h(e);
  } catch (x) {
    e.__v = null, (_ || r != null) && (e.__e = c, e.__h = !!_, r[r.indexOf(c)] = null), nt.__e(x, e, n);
  }
}
function ud(t, e) {
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
function Mv(t, e, n, o, i, r, l, c) {
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
    if (r = r && Cl.call(t.childNodes), h = (d = n.props || Fs).dangerouslySetInnerHTML, s = f.dangerouslySetInnerHTML, !c) {
      if (r != null)
        for (d = {}, u = 0; u < t.attributes.length; u++)
          d[t.attributes[u].name] = t.attributes[u].value;
      (s || h) && (s && (h && s.__html == h.__html || s.__html === t.innerHTML) || (t.innerHTML = s && s.__html || ""));
    }
    if (Tv(t, f, d, i, c), s)
      e.__k = [];
    else if (u = e.props.children, ad(t, Array.isArray(u) ? u : [u], e, n, o, i && a !== "foreignObject", r, l, r ? r[0] : n.__k && tr(n, 0), c), r != null)
      for (u = r.length; u--; )
        r[u] != null && ld(r[u]);
    c || ("value" in f && (u = f.value) !== void 0 && (u !== t.value || a === "progress" && !u || a === "option" && u !== d.value) && js(t, "value", u, d.value, !1), "checked" in f && (u = f.checked) !== void 0 && u !== t.checked && js(t, "checked", u, d.checked, !1));
  }
  return t;
}
function hd(t, e, n) {
  try {
    typeof t == "function" ? t(e) : t.current = e;
  } catch (o) {
    nt.__e(o, n);
  }
}
function dd(t, e, n) {
  var o, i;
  if (nt.unmount && nt.unmount(t), (o = t.ref) && (o.current && o.current !== t.__e || hd(o, null, e)), (o = t.__c) != null) {
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
      o[i] && dd(o[i], e, n || typeof t.type != "function");
  n || t.__e == null || ld(t.__e), t.__ = t.__e = t.__d = void 0;
}
function Lv(t, e, n) {
  return this.constructor(t, n);
}
function Dv(t, e, n) {
  var o, i, r;
  nt.__ && nt.__(t, e), i = (o = typeof n == "function") ? null : n && n.__k || e.__k, r = [], Uc(e, t = (!o && n || e).__k = Qo(El, null, [t]), i || Fs, Fs, e.ownerSVGElement !== void 0, !o && n ? [n] : i ? null : e.firstChild ? Cl.call(e.childNodes) : null, r, !o && n ? n : i ? i.__e : e.firstChild, o), ud(r, t);
}
Cl = id.slice, nt = { __e: function(t, e, n, o) {
  for (var i, r, l; e = e.__; )
    if ((i = e.__c) && !i.__)
      try {
        if ((r = i.constructor) && r.getDerivedStateFromError != null && (i.setState(r.getDerivedStateFromError(t)), l = i.__d), i.componentDidCatch != null && (i.componentDidCatch(t, o || {}), l = i.__d), l)
          return i.__E = i;
      } catch (c) {
        t = c;
      }
  throw t;
} }, sd = 0, xo.prototype.setState = function(t, e) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = Le({}, this.state), typeof t == "function" && (t = t(Le({}, n), this.props)), t && Le(n, t), t != null && this.__v && (e && this._sb.push(e), $_(this));
}, xo.prototype.forceUpdate = function(t) {
  this.__v && (this.__e = !0, t && this.__h.push(t), $_(this));
}, xo.prototype.render = El, ko = [], Bs.__r = 0;
var Nv = 0;
function q(t, e, n, o, i) {
  var r, l, c = {};
  for (l in e)
    l == "ref" ? r = e[l] : c[l] = e[l];
  var _ = { type: t, props: c, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: --Nv, __source: i, __self: o };
  if (typeof t == "function" && (r = t.defaultProps))
    for (l in r)
      c[l] === void 0 && (c[l] = r[l]);
  return nt.vnode && nt.vnode(_), _;
}
var pd = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, Z = {}, Rv = {
  get exports() {
    return Z;
  },
  set exports(t) {
    Z = t;
  }
};
(function(t, e) {
  (function(n, o) {
    t.exports = o();
  })(pd, function() {
    var n = 1e3, o = 6e4, i = 36e5, r = "millisecond", l = "second", c = "minute", _ = "hour", h = "day", s = "week", d = "month", f = "quarter", a = "year", u = "date", b = "Invalid Date", p = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, m = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, g = { name: "en", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), ordinal: function(N) {
      var S = ["th", "st", "nd", "rd"], $ = N % 100;
      return "[" + N + (S[($ - 20) % 10] || S[$] || S[0]) + "]";
    } }, w = function(N, S, $) {
      var R = String(N);
      return !R || R.length >= S ? N : "" + Array(S + 1 - R.length).join($) + N;
    }, k = { s: w, z: function(N) {
      var S = -N.utcOffset(), $ = Math.abs(S), R = Math.floor($ / 60), T = $ % 60;
      return (S <= 0 ? "+" : "-") + w(R, 2, "0") + ":" + w(T, 2, "0");
    }, m: function N(S, $) {
      if (S.date() < $.date())
        return -N($, S);
      var R = 12 * ($.year() - S.year()) + ($.month() - S.month()), T = S.clone().add(R, d), O = $ - T < 0, P = S.clone().add(R + (O ? -1 : 1), d);
      return +(-(R + ($ - T) / (O ? T - P : P - T)) || 0);
    }, a: function(N) {
      return N < 0 ? Math.ceil(N) || 0 : Math.floor(N);
    }, p: function(N) {
      return { M: d, y: a, w: s, d: h, D: u, h: _, m: c, s: l, ms: r, Q: f }[N] || String(N || "").toLowerCase().replace(/s$/, "");
    }, u: function(N) {
      return N === void 0;
    } }, C = "en", A = {};
    A[C] = g;
    var E = function(N) {
      return N instanceof z;
    }, y = function N(S, $, R) {
      var T;
      if (!S)
        return C;
      if (typeof S == "string") {
        var O = S.toLowerCase();
        A[O] && (T = O), $ && (A[O] = $, T = O);
        var P = S.split("-");
        if (!T && P.length > 1)
          return N(P[0]);
      } else {
        var I = S.name;
        A[I] = S, T = I;
      }
      return !R && T && (C = T), T || !R && C;
    }, x = function(N, S) {
      if (E(N))
        return N.clone();
      var $ = typeof S == "object" ? S : {};
      return $.date = N, $.args = arguments, new z($);
    }, D = k;
    D.l = y, D.i = E, D.w = function(N, S) {
      return x(N, { locale: S.$L, utc: S.$u, x: S.$x, $offset: S.$offset });
    };
    var z = function() {
      function N($) {
        this.$L = y($.locale, null, !0), this.parse($);
      }
      var S = N.prototype;
      return S.parse = function($) {
        this.$d = function(R) {
          var T = R.date, O = R.utc;
          if (T === null)
            return new Date(NaN);
          if (D.u(T))
            return new Date();
          if (T instanceof Date)
            return new Date(T);
          if (typeof T == "string" && !/Z$/i.test(T)) {
            var P = T.match(p);
            if (P) {
              var I = P[2] - 1 || 0, V = (P[7] || "0").substring(0, 3);
              return O ? new Date(Date.UTC(P[1], I, P[3] || 1, P[4] || 0, P[5] || 0, P[6] || 0, V)) : new Date(P[1], I, P[3] || 1, P[4] || 0, P[5] || 0, P[6] || 0, V);
            }
          }
          return new Date(T);
        }($), this.$x = $.x || {}, this.init();
      }, S.init = function() {
        var $ = this.$d;
        this.$y = $.getFullYear(), this.$M = $.getMonth(), this.$D = $.getDate(), this.$W = $.getDay(), this.$H = $.getHours(), this.$m = $.getMinutes(), this.$s = $.getSeconds(), this.$ms = $.getMilliseconds();
      }, S.$utils = function() {
        return D;
      }, S.isValid = function() {
        return this.$d.toString() !== b;
      }, S.isSame = function($, R) {
        var T = x($);
        return this.startOf(R) <= T && T <= this.endOf(R);
      }, S.isAfter = function($, R) {
        return x($) < this.startOf(R);
      }, S.isBefore = function($, R) {
        return this.endOf(R) < x($);
      }, S.$g = function($, R, T) {
        return D.u($) ? this[R] : this.set(T, $);
      }, S.unix = function() {
        return Math.floor(this.valueOf() / 1e3);
      }, S.valueOf = function() {
        return this.$d.getTime();
      }, S.startOf = function($, R) {
        var T = this, O = !!D.u(R) || R, P = D.p($), I = function(st, G) {
          var it = D.w(T.$u ? Date.UTC(T.$y, G, st) : new Date(T.$y, G, st), T);
          return O ? it : it.endOf(h);
        }, V = function(st, G) {
          return D.w(T.toDate()[st].apply(T.toDate("s"), (O ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(G)), T);
        }, j = this.$W, X = this.$M, vt = this.$D, U = "set" + (this.$u ? "UTC" : "");
        switch (P) {
          case a:
            return O ? I(1, 0) : I(31, 11);
          case d:
            return O ? I(1, X) : I(0, X + 1);
          case s:
            var K = this.$locale().weekStart || 0, yt = (j < K ? j + 7 : j) - K;
            return I(O ? vt - yt : vt + (6 - yt), X);
          case h:
          case u:
            return V(U + "Hours", 0);
          case _:
            return V(U + "Minutes", 1);
          case c:
            return V(U + "Seconds", 2);
          case l:
            return V(U + "Milliseconds", 3);
          default:
            return this.clone();
        }
      }, S.endOf = function($) {
        return this.startOf($, !1);
      }, S.$set = function($, R) {
        var T, O = D.p($), P = "set" + (this.$u ? "UTC" : ""), I = (T = {}, T[h] = P + "Date", T[u] = P + "Date", T[d] = P + "Month", T[a] = P + "FullYear", T[_] = P + "Hours", T[c] = P + "Minutes", T[l] = P + "Seconds", T[r] = P + "Milliseconds", T)[O], V = O === h ? this.$D + (R - this.$W) : R;
        if (O === d || O === a) {
          var j = this.clone().set(u, 1);
          j.$d[I](V), j.init(), this.$d = j.set(u, Math.min(this.$D, j.daysInMonth())).$d;
        } else
          I && this.$d[I](V);
        return this.init(), this;
      }, S.set = function($, R) {
        return this.clone().$set($, R);
      }, S.get = function($) {
        return this[D.p($)]();
      }, S.add = function($, R) {
        var T, O = this;
        $ = Number($);
        var P = D.p(R), I = function(X) {
          var vt = x(O);
          return D.w(vt.date(vt.date() + Math.round(X * $)), O);
        };
        if (P === d)
          return this.set(d, this.$M + $);
        if (P === a)
          return this.set(a, this.$y + $);
        if (P === h)
          return I(1);
        if (P === s)
          return I(7);
        var V = (T = {}, T[c] = o, T[_] = i, T[l] = n, T)[P] || 1, j = this.$d.getTime() + $ * V;
        return D.w(j, this);
      }, S.subtract = function($, R) {
        return this.add(-1 * $, R);
      }, S.format = function($) {
        var R = this, T = this.$locale();
        if (!this.isValid())
          return T.invalidDate || b;
        var O = $ || "YYYY-MM-DDTHH:mm:ssZ", P = D.z(this), I = this.$H, V = this.$m, j = this.$M, X = T.weekdays, vt = T.months, U = function(G, it, Et, At) {
          return G && (G[it] || G(R, O)) || Et[it].slice(0, At);
        }, K = function(G) {
          return D.s(I % 12 || 12, G, "0");
        }, yt = T.meridiem || function(G, it, Et) {
          var At = G < 12 ? "AM" : "PM";
          return Et ? At.toLowerCase() : At;
        }, st = { YY: String(this.$y).slice(-2), YYYY: this.$y, M: j + 1, MM: D.s(j + 1, 2, "0"), MMM: U(T.monthsShort, j, vt, 3), MMMM: U(vt, j), D: this.$D, DD: D.s(this.$D, 2, "0"), d: String(this.$W), dd: U(T.weekdaysMin, this.$W, X, 2), ddd: U(T.weekdaysShort, this.$W, X, 3), dddd: X[this.$W], H: String(I), HH: D.s(I, 2, "0"), h: K(1), hh: K(2), a: yt(I, V, !0), A: yt(I, V, !1), m: String(V), mm: D.s(V, 2, "0"), s: String(this.$s), ss: D.s(this.$s, 2, "0"), SSS: D.s(this.$ms, 3, "0"), Z: P };
        return O.replace(m, function(G, it) {
          return it || st[G] || P.replace(":", "");
        });
      }, S.utcOffset = function() {
        return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
      }, S.diff = function($, R, T) {
        var O, P = D.p(R), I = x($), V = (I.utcOffset() - this.utcOffset()) * o, j = this - I, X = D.m(this, I);
        return X = (O = {}, O[a] = X / 12, O[d] = X, O[f] = X / 3, O[s] = (j - V) / 6048e5, O[h] = (j - V) / 864e5, O[_] = j / i, O[c] = j / o, O[l] = j / n, O)[P] || j, T ? X : D.a(X);
      }, S.daysInMonth = function() {
        return this.endOf(d).$D;
      }, S.$locale = function() {
        return A[this.$L];
      }, S.locale = function($, R) {
        if (!$)
          return this.$L;
        var T = this.clone(), O = y($, R, !0);
        return O && (T.$L = O), T;
      }, S.clone = function() {
        return D.w(this.$d, this);
      }, S.toDate = function() {
        return new Date(this.valueOf());
      }, S.toJSON = function() {
        return this.isValid() ? this.toISOString() : null;
      }, S.toISOString = function() {
        return this.$d.toISOString();
      }, S.toString = function() {
        return this.$d.toUTCString();
      }, N;
    }(), B = z.prototype;
    return x.prototype = B, [["$ms", r], ["$s", l], ["$m", c], ["$H", _], ["$W", h], ["$M", d], ["$y", a], ["$D", u]].forEach(function(N) {
      B[N[1]] = function(S) {
        return this.$g(S, N[0], N[1]);
      };
    }), x.extend = function(N, S) {
      return N.$i || (N(S, z, x), N.$i = !0), x;
    }, x.locale = y, x.isDayjs = E, x.unix = function(N) {
      return x(1e3 * N);
    }, x.en = A[C], x.Ls = A, x.p = {}, x;
  });
})(Rv);
const _c = (t = 0, e = 0) => {
  const n = [];
  for (let o = t; o <= e; o++)
    n.push(o);
  return n;
}, md = (t, e) => {
  const n = Math.ceil(t.length / e);
  return new Array(e).fill({}).map((o, i) => t.slice(i * n, (i + 1) * n));
}, Pv = (t) => {
  const { format: e, minDate: n, maxDate: o, tagDate: i, DATEROWCOUNT: r, showOtherMonth: l, clickDay: c, selectedDate: _, handleChangePanel: h, showToday: s, handleChange: d, clickToday: f } = t, a = (D) => Z(D).isValid() ? Z(D).add(1, "months").format(e) : "", u = (D) => Z(D).isValid() ? Z(D).subtract(1, "months").format(e) : "", b = () => {
    const D = u(_ || Z().format(e));
    d(D, !1);
  }, p = () => {
    const D = a(_ || Z().format(e));
    d(D, !1);
  }, m = () => {
    d("", !0);
  }, g = () => {
    d(_, !0);
  }, w = (D, z, B, N) => {
    const S = Z(), $ = Z(_), R = new Array(D);
    for (let T = 0; T < D; T++) {
      const O = z + T + 1, P = B.set("date", O), I = N && !l ? !0 : n && P.isBefore(n, "date") || o && P.isAfter(o, "date");
      R[T] = {
        isSelected: $.isSame(B.set("date", O), "date"),
        isToday: S.isSame(P, "date"),
        isDisable: !!I,
        isTag: !!(i != null && i.includes(P.format(e))),
        date: P,
        isOtherMonth: N,
        onClick: () => I ? {} : c(P)
      };
    }
    return R;
  }, k = () => {
    const D = Z(_), z = Z(), B = _ ? D : z, N = B.set("date", 1).day(), S = N === 0 ? 6 : N - 1, $ = B.subtract(1, "month"), T = Number($.endOf("month").get("date")) - S;
    return w(S, T, $, !0);
  }, C = () => {
    const D = Z(_), z = Z(), B = _ ? D : z, N = B.set("date", 1).day(), S = N === 0 ? 6 : N - 1, $ = B.endOf("month").get("date"), R = B.add(1, "month"), T = 7 * 6 % (S + $);
    return w(T, 0, R, !0);
  }, A = () => {
    const D = _, z = Z(), B = _ ? Z(D) : z, N = B.endOf("month").get("date"), S = w(N, 0, B, !1), $ = k(), R = C(), T = [...$, ...S, ...R];
    return md(T, r);
  }, E = ["一", "二", "三", "四", "五", "六", "日"], y = A(), x = _ || Z().format(e);
  return /* @__PURE__ */ q("div", { className: F("datepicker-calendar-day"), children: [
    /* @__PURE__ */ q("div", { className: "datepicker-calendar-bar not-hide-datepicker", children: [
      /* @__PURE__ */ q("div", { class: "flex", children: /* @__PURE__ */ q("button", { type: "button", className: "btn ghost", onClick: () => h("year"), children: [
        /* @__PURE__ */ q("span", { children: Z(x).format("YYYY 年 MM 月") }),
        /* @__PURE__ */ q("span", { class: "caret" })
      ] }) }),
      /* @__PURE__ */ q("div", { class: "flex", children: [
        s && /* @__PURE__ */ q("button", { type: "button", className: "btn ghost", onClick: () => {
          f();
        }, children: "今天" }),
        /* @__PURE__ */ q("button", { type: "button", className: "btn ghost", onClick: () => b(), children: /* @__PURE__ */ q("i", { className: "icon icon-angle-left" }) }),
        /* @__PURE__ */ q("button", { type: "button", className: "btn ghost", onClick: () => p(), children: /* @__PURE__ */ q("i", { className: "icon icon-angle-right" }) })
      ] })
    ] }),
    /* @__PURE__ */ q("table", { className: "datepicker-calendar-table not-hide-datepicker", children: [
      /* @__PURE__ */ q("thead", { className: "datepicker-calendar-thead", children: /* @__PURE__ */ q("tr", { children: E.map((D, z) => /* @__PURE__ */ q("th", { children: D }, z)) }) }),
      /* @__PURE__ */ q("tbody", { className: "datepicker-calendar-tbody", children: y.map((D, z) => /* @__PURE__ */ q("tr", { children: D.map((B, N) => {
        const S = ["text-center"];
        return B.isToday && S.push("datepicker-calendar-today"), B.isSelected && S.push("datepicker-calendar-selected-date"), B.isOtherMonth && S.push("datepicker-calendar-other-month"), B.isTag && S.push("datepicker-calendar-tag"), /* @__PURE__ */ q("td", { className: F(S), children: /* @__PURE__ */ q("div", { className: F("btn", "ghost", "datepicker-calendar-date", B.isDisable ? "disabled" : ""), onClick: B.onClick, children: !l && B.isOtherMonth ? "" : Z(B.date).format("DD") }) }, N);
      }) }, z)) })
    ] }),
    /* @__PURE__ */ q("div", { class: "datepicker-calendar-footer text-right mt-1", children: [
      /* @__PURE__ */ q("button", { type: "button", className: "btn ghost text-primary", onClick: m, children: /* @__PURE__ */ q("span", { children: "清除" }) }),
      /* @__PURE__ */ q("button", { type: "button", className: "btn ghost text-primary", onClick: g, children: /* @__PURE__ */ q("span", { children: "确认" }) })
    ] })
  ] });
};
const Ov = (t) => {
  const { format: e, selectedDate: n, minDate: o, maxDate: i, year: r, handleChangeMonth: l } = t, c = Z(o).format("M"), _ = Z(i).format("M"), h = md(_c(1, 12), 3), s = (d, f) => {
    f || l(d);
  };
  return /* @__PURE__ */ q("div", { className: F("datepicker-calendar-month", "not-hide-datepicker"), children: /* @__PURE__ */ q("table", { className: "datepicker-calendar-month-table", children: /* @__PURE__ */ q("tbody", { className: "datepicker-calendar-month-table-body", children: h.map((d, f) => /* @__PURE__ */ q("tr", { children: d.map((a, u) => {
    const b = ["text-center"], p = Z(`${r}-${a}-01`).format(e), m = !!(c && Z(n).isBefore(c) || _ && Z(n).isBefore(_));
    return /* @__PURE__ */ q("td", { className: F(b), children: /* @__PURE__ */ q("div", { className: F("btn", "size-sm", "ghost", "datepicker-calendar-month", m ? "disabled" : ""), onClick: () => {
      s(p, m);
    }, children: [
      Z(p).format("MM"),
      " 月"
    ] }) }, u);
  }) }, f)) }) }) });
}, Hv = (t) => {
  const { selectedDate: e, handleChangeMonth: n } = t;
  setTimeout(() => {
    const l = document.getElementsByClassName("datepicker-accordion");
    l != null && l.length && (l[0].scrollTop = 2400);
  }, 800);
  const o = Z(e).year(), i = [..._c(o - 100, o), ..._c(o + 1, o + 100)], r = (l, c) => {
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
  return /* @__PURE__ */ q("div", { class: "datepicker-accordion scroll-smooth not-hide-datepicker", children: /* @__PURE__ */ q("ul", { children: i.map((l, c) => /* @__PURE__ */ q("li", { id: o === l ? "selected" : "", children: [
    /* @__PURE__ */ q("div", { class: "datepicker-accordion-title", onClick: (_) => r(_, l), children: l }),
    /* @__PURE__ */ q("div", { className: F("datepicker-accordion-content", o === l ? "" : "hidden"), children: Qo(Ov, {
      ...t,
      year: l,
      handleChangeMonth: n
    }) }, c)
  ] })) }) });
};
class Wv extends xo {
  constructor() {
    super(...arguments);
    L(this, "DATEROWCOUNT", 6);
    L(this, "ref", Av());
    L(this, "state", {
      selectedDate: this.props.date || null,
      type: "day"
    });
  }
  handleChange(n, o = !1) {
    var i;
    this.setState({ selectedDate: n }), o && ((i = this.props) == null || i.onChange(n));
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
    const o = n === "subtract" ? Z(this.state.selectedDate).subtract(1, "year").startOf("year").format(this.props.format) : Z(this.state.selectedDate).add(1, "year").startOf("year").format(this.props.format);
    this.handleChange(o);
  }
  clickDay(n) {
    const o = Z(n).format(this.props.format);
    this.handleChange(o);
  }
  clickToday() {
    this.handleChange(Z().format(this.props.format));
  }
  renderPanel() {
    return this.state.type === "day" ? Qo(Pv, {
      ...this.props,
      handleChange: this.handleChange.bind(this),
      handleChangePanel: this.handleChangePanel.bind(this),
      clickToday: this.clickToday.bind(this),
      clickDay: this.clickDay.bind(this),
      selectedDate: this.state.selectedDate,
      DATEROWCOUNT: this.DATEROWCOUNT
    }) : Qo(Hv, {
      ...this.props,
      selectedDate: this.state.selectedDate,
      handleChangeMonth: this.handleChangeMonth.bind(this)
    });
  }
  render() {
    const { className: n } = this.props;
    return /* @__PURE__ */ q("div", { className: F("datepicker-calendar", n), ref: this.ref, children: this.renderPanel() });
  }
}
function Ur(t) {
  return t.split("-")[1];
}
function Fc(t) {
  return t === "y" ? "height" : "width";
}
function zn(t) {
  return t.split("-")[0];
}
function Al(t) {
  return ["top", "bottom"].includes(zn(t)) ? "x" : "y";
}
function C_(t, e, n) {
  let {
    reference: o,
    floating: i
  } = t;
  const r = o.x + o.width / 2 - i.width / 2, l = o.y + o.height / 2 - i.height / 2, c = Al(e), _ = Fc(c), h = o[_] / 2 - i[_] / 2, s = zn(e), d = c === "x";
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
  switch (Ur(e)) {
    case "start":
      f[c] -= h * (n && d ? -1 : 1);
      break;
    case "end":
      f[c] += h * (n && d ? -1 : 1);
      break;
  }
  return f;
}
const Iv = async (t, e, n) => {
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
  } = C_(h, o, _), f = o, a = {}, u = 0;
  for (let b = 0; b < c.length; b++) {
    const {
      name: p,
      fn: m
    } = c[b], {
      x: g,
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
    if (s = g ?? s, d = w ?? d, a = {
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
      } = C_(h, f, _)), b = -1;
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
function Uv(t) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...t
  };
}
function gd(t) {
  return typeof t != "number" ? Uv(t) : {
    top: t,
    right: t,
    bottom: t,
    left: t
  };
}
function Vs(t) {
  return {
    ...t,
    top: t.y,
    left: t.x,
    right: t.x + t.width,
    bottom: t.y + t.height
  };
}
async function Fv(t, e) {
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
  } = e, u = gd(a), p = c[f ? d === "floating" ? "reference" : "floating" : d], m = Vs(await r.getClippingRect({
    element: (n = await (r.isElement == null ? void 0 : r.isElement(p))) == null || n ? p : p.contextElement || await (r.getDocumentElement == null ? void 0 : r.getDocumentElement(c.floating)),
    boundary: h,
    rootBoundary: s,
    strategy: _
  })), g = d === "floating" ? {
    ...l.floating,
    x: o,
    y: i
  } : l.reference, w = await (r.getOffsetParent == null ? void 0 : r.getOffsetParent(c.floating)), k = await (r.isElement == null ? void 0 : r.isElement(w)) ? await (r.getScale == null ? void 0 : r.getScale(w)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, C = Vs(r.convertOffsetParentRelativeRectToViewportRelativeRect ? await r.convertOffsetParentRelativeRectToViewportRelativeRect({
    rect: g,
    offsetParent: w,
    strategy: _
  }) : g);
  return {
    top: (m.top - C.top + u.top) / k.y,
    bottom: (C.bottom - m.bottom + u.bottom) / k.y,
    left: (m.left - C.left + u.left) / k.x,
    right: (C.right - m.right + u.right) / k.x
  };
}
const Bv = Math.min, jv = Math.max;
function Vv(t, e, n) {
  return jv(t, Bv(e, n));
}
const zv = (t) => ({
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
    const h = gd(o), s = {
      x: i,
      y: r
    }, d = Al(l), f = Fc(d), a = await _.getDimensions(n), u = d === "y" ? "top" : "left", b = d === "y" ? "bottom" : "right", p = c.reference[f] + c.reference[d] - s[d] - c.floating[f], m = s[d] - c.reference[d], g = await (_.getOffsetParent == null ? void 0 : _.getOffsetParent(n));
    let w = g ? d === "y" ? g.clientHeight || 0 : g.clientWidth || 0 : 0;
    w === 0 && (w = c.floating[f]);
    const k = p / 2 - m / 2, C = h[u], A = w - a[f] - h[b], E = w / 2 - a[f] / 2 + k, y = Vv(C, E, A), D = Ur(l) != null && E != y && c.reference[f] / 2 - (E < C ? h[u] : h[b]) - a[f] / 2 < 0 ? E < C ? C - E : A - E : 0;
    return {
      [d]: s[d] - D,
      data: {
        [d]: y,
        centerOffset: E - y
      }
    };
  }
}), Yv = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function zs(t) {
  return t.replace(/left|right|bottom|top/g, (e) => Yv[e]);
}
function Gv(t, e, n) {
  n === void 0 && (n = !1);
  const o = Ur(t), i = Al(t), r = Fc(i);
  let l = i === "x" ? o === (n ? "end" : "start") ? "right" : "left" : o === "start" ? "bottom" : "top";
  return e.reference[r] > e.floating[r] && (l = zs(l)), {
    main: l,
    cross: zs(l)
  };
}
const qv = {
  start: "end",
  end: "start"
};
function fc(t) {
  return t.replace(/start|end/g, (e) => qv[e]);
}
function Xv(t) {
  const e = zs(t);
  return [fc(t), e, fc(e)];
}
function Kv(t, e, n) {
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
function Zv(t, e, n, o) {
  const i = Ur(t);
  let r = Kv(zn(t), n === "start", o);
  return i && (r = r.map((l) => l + "-" + i), e && (r = r.concat(r.map(fc)))), r;
}
const Jv = function(t) {
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
      } = t, p = zn(o), m = zn(l) === l, g = await (c.isRTL == null ? void 0 : c.isRTL(_.floating)), w = d || (m || !u ? [zs(l)] : Xv(l));
      !d && a !== "none" && w.push(...Zv(l, u, a, g));
      const k = [l, ...w], C = await Fv(e, b), A = [];
      let E = ((n = i.flip) == null ? void 0 : n.overflows) || [];
      if (h && A.push(C[p]), s) {
        const {
          main: D,
          cross: z
        } = Gv(o, r, g);
        A.push(C[D], C[z]);
      }
      if (E = [...E, {
        placement: o,
        overflows: A
      }], !A.every((D) => D <= 0)) {
        var y;
        const D = (((y = i.flip) == null ? void 0 : y.index) || 0) + 1, z = k[D];
        if (z)
          return {
            data: {
              index: D,
              overflows: E
            },
            reset: {
              placement: z
            }
          };
        let B = "bottom";
        switch (f) {
          case "bestFit": {
            var x;
            const N = (x = E.map((S) => [S, S.overflows.filter(($) => $ > 0).reduce(($, R) => $ + R, 0)]).sort((S, $) => S[1] - $[1])[0]) == null ? void 0 : x[0].placement;
            N && (B = N);
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
async function Qv(t, e) {
  const {
    placement: n,
    platform: o,
    elements: i
  } = t, r = await (o.isRTL == null ? void 0 : o.isRTL(i.floating)), l = zn(n), c = Ur(n), _ = Al(n) === "x", h = ["left", "top"].includes(l) ? -1 : 1, s = r && _ ? -1 : 1, d = typeof e == "function" ? e(t) : e;
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
const tb = function(t) {
  return t === void 0 && (t = 0), {
    name: "offset",
    options: t,
    async fn(e) {
      const {
        x: n,
        y: o
      } = e, i = await Qv(e, t);
      return {
        x: n + i.x,
        y: o + i.y,
        data: i
      };
    }
  };
};
function Ht(t) {
  var e;
  return ((e = t.ownerDocument) == null ? void 0 : e.defaultView) || window;
}
function te(t) {
  return Ht(t).getComputedStyle(t);
}
function Be(t) {
  return vd(t) ? (t.nodeName || "").toLowerCase() : "";
}
let qr;
function yd() {
  if (qr)
    return qr;
  const t = navigator.userAgentData;
  return t && Array.isArray(t.brands) ? (qr = t.brands.map((e) => e.brand + "/" + e.version).join(" "), qr) : navigator.userAgent;
}
function ue(t) {
  return t instanceof Ht(t).HTMLElement;
}
function je(t) {
  return t instanceof Ht(t).Element;
}
function vd(t) {
  return t instanceof Ht(t).Node;
}
function E_(t) {
  if (typeof ShadowRoot > "u")
    return !1;
  const e = Ht(t).ShadowRoot;
  return t instanceof e || t instanceof ShadowRoot;
}
function Tl(t) {
  const {
    overflow: e,
    overflowX: n,
    overflowY: o,
    display: i
  } = te(t);
  return /auto|scroll|overlay|hidden|clip/.test(e + o + n) && !["inline", "contents"].includes(i);
}
function eb(t) {
  return ["table", "td", "th"].includes(Be(t));
}
function Bc(t) {
  const e = /firefox/i.test(yd()), n = te(t), o = n.backdropFilter || n.WebkitBackdropFilter;
  return n.transform !== "none" || n.perspective !== "none" || (o ? o !== "none" : !1) || e && n.willChange === "filter" || e && (n.filter ? n.filter !== "none" : !1) || ["transform", "perspective"].some((i) => n.willChange.includes(i)) || ["paint", "layout", "strict", "content"].some(
    // TS 4.1 compat
    (i) => {
      const r = n.contain;
      return r != null ? r.includes(i) : !1;
    }
  );
}
function bd() {
  return !/^((?!chrome|android).)*safari/i.test(yd());
}
function jc(t) {
  return ["html", "body", "#document"].includes(Be(t));
}
const A_ = Math.min, So = Math.max, Ys = Math.round;
function wd(t) {
  const e = te(t);
  let n = parseFloat(e.width), o = parseFloat(e.height);
  const i = t.offsetWidth, r = t.offsetHeight, l = Ys(n) !== i || Ys(o) !== r;
  return l && (n = i, o = r), {
    width: n,
    height: o,
    fallback: l
  };
}
function $d(t) {
  return je(t) ? t : t.contextElement;
}
const kd = {
  x: 1,
  y: 1
};
function un(t) {
  const e = $d(t);
  if (!ue(e))
    return kd;
  const n = e.getBoundingClientRect(), {
    width: o,
    height: i,
    fallback: r
  } = wd(e);
  let l = (r ? Ys(n.width) : n.width) / o, c = (r ? Ys(n.height) : n.height) / i;
  return (!l || !Number.isFinite(l)) && (l = 1), (!c || !Number.isFinite(c)) && (c = 1), {
    x: l,
    y: c
  };
}
function er(t, e, n, o) {
  var i, r;
  e === void 0 && (e = !1), n === void 0 && (n = !1);
  const l = t.getBoundingClientRect(), c = $d(t);
  let _ = kd;
  e && (o ? je(o) && (_ = un(o)) : _ = un(t));
  const h = c ? Ht(c) : window, s = !bd() && n;
  let d = (l.left + (s && ((i = h.visualViewport) == null ? void 0 : i.offsetLeft) || 0)) / _.x, f = (l.top + (s && ((r = h.visualViewport) == null ? void 0 : r.offsetTop) || 0)) / _.y, a = l.width / _.x, u = l.height / _.y;
  if (c) {
    const b = Ht(c), p = o && je(o) ? Ht(o) : o;
    let m = b.frameElement;
    for (; m && o && p !== b; ) {
      const g = un(m), w = m.getBoundingClientRect(), k = getComputedStyle(m);
      w.x += (m.clientLeft + parseFloat(k.paddingLeft)) * g.x, w.y += (m.clientTop + parseFloat(k.paddingTop)) * g.y, d *= g.x, f *= g.y, a *= g.x, u *= g.y, d += w.x, f += w.y, m = Ht(m).frameElement;
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
function qe(t) {
  return ((vd(t) ? t.ownerDocument : t.document) || window.document).documentElement;
}
function Ml(t) {
  return je(t) ? {
    scrollLeft: t.scrollLeft,
    scrollTop: t.scrollTop
  } : {
    scrollLeft: t.pageXOffset,
    scrollTop: t.pageYOffset
  };
}
function xd(t) {
  return er(qe(t)).left + Ml(t).scrollLeft;
}
function nb(t, e, n) {
  const o = ue(e), i = qe(e), r = er(t, !0, n === "fixed", e);
  let l = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const c = {
    x: 0,
    y: 0
  };
  if (o || !o && n !== "fixed")
    if ((Be(e) !== "body" || Tl(i)) && (l = Ml(e)), ue(e)) {
      const _ = er(e, !0);
      c.x = _.x + e.clientLeft, c.y = _.y + e.clientTop;
    } else
      i && (c.x = xd(i));
  return {
    x: r.left + l.scrollLeft - c.x,
    y: r.top + l.scrollTop - c.y,
    width: r.width,
    height: r.height
  };
}
function nr(t) {
  if (Be(t) === "html")
    return t;
  const e = (
    // Step into the shadow DOM of the parent of a slotted node
    t.assignedSlot || // DOM Element detected
    t.parentNode || // ShadowRoot detected
    (E_(t) ? t.host : null) || // Fallback
    qe(t)
  );
  return E_(e) ? e.host : e;
}
function T_(t) {
  return !ue(t) || te(t).position === "fixed" ? null : t.offsetParent;
}
function ob(t) {
  let e = nr(t);
  for (; ue(e) && !jc(e); ) {
    if (Bc(e))
      return e;
    e = nr(e);
  }
  return null;
}
function M_(t) {
  const e = Ht(t);
  let n = T_(t);
  for (; n && eb(n) && te(n).position === "static"; )
    n = T_(n);
  return n && (Be(n) === "html" || Be(n) === "body" && te(n).position === "static" && !Bc(n)) ? e : n || ob(t) || e;
}
function rb(t) {
  return wd(t);
}
function sb(t) {
  let {
    rect: e,
    offsetParent: n,
    strategy: o
  } = t;
  const i = ue(n), r = qe(n);
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
  if ((i || !i && o !== "fixed") && ((Be(n) !== "body" || Tl(r)) && (l = Ml(n)), ue(n))) {
    const h = er(n);
    c = un(n), _.x = h.x + n.clientLeft, _.y = h.y + n.clientTop;
  }
  return {
    width: e.width * c.x,
    height: e.height * c.y,
    x: e.x * c.x - l.scrollLeft * c.x + _.x,
    y: e.y * c.y - l.scrollTop * c.y + _.y
  };
}
function ib(t, e) {
  const n = Ht(t), o = qe(t), i = n.visualViewport;
  let r = o.clientWidth, l = o.clientHeight, c = 0, _ = 0;
  if (i) {
    r = i.width, l = i.height;
    const h = bd();
    (h || !h && e === "fixed") && (c = i.offsetLeft, _ = i.offsetTop);
  }
  return {
    width: r,
    height: l,
    x: c,
    y: _
  };
}
function lb(t) {
  var e;
  const n = qe(t), o = Ml(t), i = (e = t.ownerDocument) == null ? void 0 : e.body, r = So(n.scrollWidth, n.clientWidth, i ? i.scrollWidth : 0, i ? i.clientWidth : 0), l = So(n.scrollHeight, n.clientHeight, i ? i.scrollHeight : 0, i ? i.clientHeight : 0);
  let c = -o.scrollLeft + xd(t);
  const _ = -o.scrollTop;
  return te(i || n).direction === "rtl" && (c += So(n.clientWidth, i ? i.clientWidth : 0) - r), {
    width: r,
    height: l,
    x: c,
    y: _
  };
}
function Sd(t) {
  const e = nr(t);
  return jc(e) ? t.ownerDocument.body : ue(e) && Tl(e) ? e : Sd(e);
}
function Cd(t, e) {
  var n;
  e === void 0 && (e = []);
  const o = Sd(t), i = o === ((n = t.ownerDocument) == null ? void 0 : n.body), r = Ht(o);
  return i ? e.concat(r, r.visualViewport || [], Tl(o) ? o : []) : e.concat(o, Cd(o));
}
function cb(t, e) {
  const n = er(t, !0, e === "fixed"), o = n.top + t.clientTop, i = n.left + t.clientLeft, r = ue(t) ? un(t) : {
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
function L_(t, e, n) {
  return e === "viewport" ? Vs(ib(t, n)) : je(e) ? cb(e, n) : Vs(lb(qe(t)));
}
function ab(t, e) {
  const n = e.get(t);
  if (n)
    return n;
  let o = Cd(t).filter((c) => je(c) && Be(c) !== "body"), i = null;
  const r = te(t).position === "fixed";
  let l = r ? nr(t) : t;
  for (; je(l) && !jc(l); ) {
    const c = te(l), _ = Bc(l);
    (r ? !_ && !i : !_ && c.position === "static" && !!i && ["absolute", "fixed"].includes(i.position)) ? o = o.filter((s) => s !== l) : i = c, l = nr(l);
  }
  return e.set(t, o), o;
}
function _b(t) {
  let {
    element: e,
    boundary: n,
    rootBoundary: o,
    strategy: i
  } = t;
  const l = [...n === "clippingAncestors" ? ab(e, this._c) : [].concat(n), o], c = l[0], _ = l.reduce((h, s) => {
    const d = L_(e, s, i);
    return h.top = So(d.top, h.top), h.right = A_(d.right, h.right), h.bottom = A_(d.bottom, h.bottom), h.left = So(d.left, h.left), h;
  }, L_(e, c, i));
  return {
    width: _.right - _.left,
    height: _.bottom - _.top,
    x: _.left,
    y: _.top
  };
}
const fb = {
  getClippingRect: _b,
  convertOffsetParentRelativeRectToViewportRelativeRect: sb,
  isElement: je,
  getDimensions: rb,
  getOffsetParent: M_,
  getDocumentElement: qe,
  getScale: un,
  async getElementRects(t) {
    let {
      reference: e,
      floating: n,
      strategy: o
    } = t;
    const i = this.getOffsetParent || M_, r = this.getDimensions;
    return {
      reference: nb(e, await i(n), o),
      floating: {
        x: 0,
        y: 0,
        ...await r(n)
      }
    };
  },
  getClientRects: (t) => Array.from(t.getClientRects()),
  isRTL: (t) => te(t).direction === "rtl"
}, ub = (t, e, n) => {
  const o = /* @__PURE__ */ new Map(), i = {
    platform: fb,
    ...n
  }, r = {
    ...i.platform,
    _c: o
  };
  return Iv(t, e, {
    ...i,
    platform: r
  });
};
var En, An, kt, tn, yr, wi, Ed, $i, Ad, ki, Td, xi, Md, Si, Ld, Ci, Dd, Ei;
class Xt extends jt {
  constructor() {
    super(...arguments);
    M(this, wi);
    M(this, $i);
    M(this, ki);
    M(this, xi);
    M(this, Si);
    M(this, Ci);
    M(this, En, void 0);
    M(this, An, 0);
    M(this, kt, void 0);
    M(this, tn, void 0);
    M(this, yr, void 0);
    L(this, "hideLater", () => {
      v(this, Ei).call(this), H(this, An, window.setTimeout(this.hide.bind(this), 100));
    });
    M(this, Ei, () => {
      clearTimeout(v(this, An)), H(this, An, 0);
    });
  }
  get isShown() {
    var n;
    return (n = v(this, tn)) == null ? void 0 : n.classList.contains(this.constructor.CLASS_SHOW);
  }
  get datepicker() {
    return v(this, tn) || W(this, ki, Td).call(this);
  }
  get trigger() {
    return v(this, yr) || this.element;
  }
  get elementShowClass() {
    return `with-${this.constructor.NAME}-show`;
  }
  show(n) {
    return H(this, yr, n), !this.datepicker || !this.element ? !1 : (this.element.classList.add(this.elementShowClass), this.datepicker.classList.add(this.constructor.CLASS_SHOW), this.datepicker.classList.add("fade"), W(this, Si, Ld).call(this), !0);
  }
  hide() {
    var n;
    return this.element.classList.remove(this.elementShowClass), (n = v(this, tn)) == null || n.classList.remove(this.constructor.CLASS_SHOW), this.datepicker.classList.remove("fade"), !0;
  }
  toggle(n) {
    return this.isShown ? this.hide() : this.show(n);
  }
  destroy() {
    super.destroy();
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
}
En = new WeakMap(), An = new WeakMap(), kt = new WeakMap(), tn = new WeakMap(), yr = new WeakMap(), wi = new WeakSet(), Ed = function() {
  const { arrow: n } = this.options;
  return typeof n == "number" ? n : 4;
}, $i = new WeakSet(), Ad = function() {
  const n = document.createElement("div");
  return H(this, kt, n), v(this, kt).style.position = "absolute", v(this, kt).style.width = "8px", v(this, kt).style.height = "8px", v(this, kt).style.transform = "rotate(45deg)", v(this, kt).style.border = "inherit", v(this, kt).style.background = "inherit", n;
}, ki = new WeakSet(), Td = function() {
  const n = this.constructor.CLASSNAME, o = document.createElement("div");
  return o.classList.add(n), Dv(Qo(Wv, { ...this.options }), o), this.options.arrow && o.append(W(this, $i, Ad).call(this)), o.style.width = "max-content", o.style.position = "absolute", o.style.top = "0", o.style.left = "0", document.body.appendChild(o), H(this, tn, o), o;
}, xi = new WeakSet(), Md = function() {
  var i;
  const n = W(this, wi, Ed).call(this), o = {
    middleware: [tb(n + 3), Jv()]
  };
  return this.options.arrow && v(this, kt) && ((i = o.middleware) == null || i.push(zv({ element: v(this, kt) }))), this.options.placement && (o.placement = this.options.placement), o;
}, Si = new WeakSet(), Ld = function() {
  const n = W(this, xi, Md).call(this);
  ub(W(this, Ci, Dd).call(this), this.datepicker, n).then(({ x: o, y: i, middlewareData: r }) => {
    if (Object.assign(this.datepicker.style, {
      left: `${o}px`,
      top: `${i}px`
    }), this.options.placement) {
      const l = this.options.placement.split("-")[0], c = {
        top: "bottom",
        right: "left",
        bottom: "top",
        left: "right"
      }[l];
      if (r.arrow && v(this, kt)) {
        const { x: _, y: h } = r.arrow;
        Object.assign(v(this, kt).style, {
          left: _ != null ? `${_}px` : "",
          top: h != null ? `${h}px` : "",
          [c]: `${-v(this, kt).offsetWidth / 2}px`
        });
      }
    }
  });
}, Ci = new WeakSet(), Dd = function() {
  return v(this, En) || H(this, En, {
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
  }), v(this, En);
}, Ei = new WeakMap(), L(Xt, "NAME", "datepicker"), L(Xt, "CLASSNAME", "datepicker"), L(Xt, "CLASS_SHOW", "show"), L(Xt, "MENU_SELECTOR", ".form-datetime:not(.disabled):not(:disabled)"), L(Xt, "DEFAULT", {
  date: Z().format("YYYY-MM-DD"),
  format: "YYYY-MM-DD",
  showOtherMonth: !0,
  placement: "bottom-start",
  strategy: "absolute",
  trigger: "click",
  showToday: !0,
  arrow: !0
});
document.addEventListener("click", function(t) {
  const e = t.target, n = e.closest(Xt.MENU_SELECTOR), o = e.closest(".datepicker-calendar-bar, .datepicker-calendar-thead, .datepicker-calendar-month-table");
  n ? Xt.ensure(n).toggle() : o || Xt.clear({ event: t });
});
const hb = (t) => {
  const e = document.getElementsByClassName("with-datepicker-show")[0];
  if (!e)
    return;
  const n = typeof e.closest == "function" ? e.closest(Xt.MENU_SELECTOR) : null;
  !n || !t.target.contains(n) || Xt.clear({ event: t });
};
window.addEventListener("scroll", hb, !0);
function Nd(t, e, n) {
  if (n) {
    t.setAttribute("class", F(e));
    return;
  }
  bl(t.getAttribute("class"), e).forEach(([o, i]) => {
    t.classList.toggle(o, i);
  });
}
function eo(t, e, n) {
  if (typeof e == "object")
    return Object.entries(e).forEach(([o, i]) => {
      eo(t, o, i);
    });
  n !== void 0 && (t.style[e] = typeof n == "number" ? `${n}px` : n);
}
function Gs(t, e, n) {
  if (typeof e == "object")
    return Object.entries(e).forEach(([o, i]) => {
      Gs(t, o, i);
    });
  n !== void 0 && (n === null ? t.removeAttribute(e) : t.setAttribute(e, n));
}
var en, vr, ye, Ai, Tn, fs;
const re = class extends jt {
  constructor() {
    super(...arguments);
    M(this, Tn);
    M(this, en, 0);
    M(this, vr, void 0);
    M(this, ye, void 0);
    M(this, Ai, (n) => {
      const o = n.target;
      (o.closest(re.DISMISS_SELECTOR) || this.options.backdrop === !0 && !o.closest(".modal-dialog") && o.closest(".modal")) && this.hide();
    });
  }
  get modalElement() {
    return this.element;
  }
  get isShown() {
    return this.modalElement.classList.contains(re.CLASS_SHOW);
  }
  get dialog() {
    return this.modalElement.querySelector(".modal-dialog");
  }
  afterInit() {
    if (this.on("click", v(this, Ai)), this.options.responsive && typeof ResizeObserver < "u") {
      const { dialog: n } = this;
      if (n) {
        const o = new ResizeObserver(() => {
          if (!this.isShown)
            return;
          const i = n.clientWidth, r = n.clientHeight;
          (!v(this, ye) || v(this, ye)[0] !== i || v(this, ye)[1] !== r) && (H(this, ye, [i, r]), this.layout());
        });
        o.observe(n), H(this, vr, o);
      }
    }
    this.options.show && this.show();
  }
  destroy() {
    var n;
    super.destroy(), (n = v(this, vr)) == null || n.disconnect();
  }
  show(n) {
    if (this.isShown)
      return !1;
    this.setOptions(n);
    const { modalElement: o } = this, { animation: i, backdrop: r, className: l, style: c } = this.options;
    return Nd(o, [{
      "modal-trans": i,
      "modal-no-backdrop": !r
    }, re.CLASS_SHOW, l]), eo(o, {
      zIndex: `${re.zIndex++}`,
      ...c
    }), this.layout(), this.emit("show", this), W(this, Tn, fs).call(this, () => {
      o.classList.add(re.CLASS_SHOWN), W(this, Tn, fs).call(this, () => {
        this.emit("shown", this);
      });
    }, 50), !0;
  }
  hide() {
    return this.isShown ? (this.modalElement.classList.remove(re.CLASS_SHOWN), this.emit("hide", this), W(this, Tn, fs).call(this, () => {
      this.modalElement.classList.remove(re.CLASS_SHOW), this.emit("hidden", this);
    }), !0) : !1;
  }
  layout(n, o) {
    if (!this.isShown)
      return;
    const { dialog: i } = this;
    if (!i)
      return;
    o = o ?? this.options.size, Gs(i, "data-size", null);
    const r = { width: null, height: null };
    typeof o == "object" ? (r.width = o.width, r.height = o.height) : typeof o == "string" && ["md", "sm", "lg", "full"].includes(o) ? Gs(i, "data-size", o) : o && (r.width = o), eo(i, r), n = n ?? this.options.position ?? "fit";
    const l = i.clientWidth, c = i.clientHeight;
    H(this, ye, [l, c]), typeof n == "function" && (n = n({ width: l, height: c }));
    const _ = {
      top: null,
      left: null,
      bottom: null,
      right: null,
      alignSelf: "center"
    };
    typeof n == "number" ? (_.alignSelf = "flex-start", _.top = n) : typeof n == "object" && n ? (_.alignSelf = "flex-start", Object.assign(_, n)) : n === "fit" ? (_.alignSelf = "flex-start", _.top = `${Math.max(0, Math.floor((window.innerHeight - c) / 3))}px`) : n === "bottom" ? _.alignSelf = "flex-end" : n === "top" ? _.alignSelf = "flex-start" : n !== "center" && typeof n == "string" && (_.alignSelf = "flex-start", _.top = n), eo(i, _), eo(this.modalElement, "justifyContent", _.left ? "flex-start" : "center");
  }
};
let Tt = re;
en = new WeakMap(), vr = new WeakMap(), ye = new WeakMap(), Ai = new WeakMap(), Tn = new WeakSet(), fs = function(n, o) {
  v(this, en) && (clearTimeout(v(this, en)), H(this, en, 0)), n && (this.options.animation ? H(this, en, window.setTimeout(n, o ?? this.options.transTime)) : n());
}, L(Tt, "NAME", "Modal"), L(Tt, "EVENTS", !0), L(Tt, "DEFAULT", {
  position: "fit",
  show: !0,
  keyboard: !0,
  animation: !0,
  backdrop: !0,
  responsive: !0,
  transTime: 300
}), L(Tt, "CLASS_SHOW", "show"), L(Tt, "CLASS_SHOWN", "in"), L(Tt, "DISMISS_SELECTOR", '[data-dismiss="modal"]'), L(Tt, "zIndex", 2e3);
window.addEventListener("resize", () => {
  Tt.all.forEach((t) => {
    const e = t;
    e.isShown && e.options.responsive && e.layout();
  });
});
var Ll, ot, Rd, no, Co, D_, qs = {}, Pd = [], db = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function De(t, e) {
  for (var n in e)
    t[n] = e[n];
  return t;
}
function Od(t) {
  var e = t.parentNode;
  e && e.removeChild(t);
}
function pb(t, e, n) {
  var o, i, r, l = {};
  for (r in e)
    r == "key" ? o = e[r] : r == "ref" ? i = e[r] : l[r] = e[r];
  if (arguments.length > 2 && (l.children = arguments.length > 3 ? Ll.call(arguments, 2) : n), typeof t == "function" && t.defaultProps != null)
    for (r in t.defaultProps)
      l[r] === void 0 && (l[r] = t.defaultProps[r]);
  return us(t, l, o, i, null);
}
function us(t, e, n, o, i) {
  var r = { type: t, props: e, key: n, ref: o, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: i ?? ++Rd };
  return i == null && ot.vnode != null && ot.vnode(r), r;
}
function mb() {
  return { current: null };
}
function Dl(t) {
  return t.children;
}
function hn(t, e) {
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
function Hd(t) {
  var e, n;
  if ((t = t.__) != null && t.__c != null) {
    for (t.__e = t.__c.base = null, e = 0; e < t.__k.length; e++)
      if ((n = t.__k[e]) != null && n.__e != null) {
        t.__e = t.__c.base = n.__e;
        break;
      }
    return Hd(t);
  }
}
function N_(t) {
  (!t.__d && (t.__d = !0) && Co.push(t) && !Xs.__r++ || D_ !== ot.debounceRendering) && ((D_ = ot.debounceRendering) || setTimeout)(Xs);
}
function Xs() {
  for (var t; Xs.__r = Co.length; )
    t = Co.sort(function(e, n) {
      return e.__v.__b - n.__v.__b;
    }), Co = [], t.some(function(e) {
      var n, o, i, r, l, c;
      e.__d && (l = (r = (n = e).__v).__e, (c = n.__P) && (o = [], (i = De({}, r)).__v = r.__v + 1, Vc(c, r, i, n.__n, c.ownerSVGElement !== void 0, r.__h != null ? [l] : null, o, l ?? or(r), r.__h), Fd(o, r), r.__e != l && Hd(r)));
    });
}
function Wd(t, e, n, o, i, r, l, c, _, h) {
  var s, d, f, a, u, b, p, m = o && o.__k || Pd, g = m.length;
  for (n.__k = [], s = 0; s < e.length; s++)
    if ((a = n.__k[s] = (a = e[s]) == null || typeof a == "boolean" ? null : typeof a == "string" || typeof a == "number" || typeof a == "bigint" ? us(null, a, null, null, a) : Array.isArray(a) ? us(Dl, { children: a }, null, null, null) : a.__b > 0 ? us(a.type, a.props, a.key, a.ref ? a.ref : null, a.__v) : a) != null) {
      if (a.__ = n, a.__b = n.__b + 1, (f = m[s]) === null || f && a.key == f.key && a.type === f.type)
        m[s] = void 0;
      else
        for (d = 0; d < g; d++) {
          if ((f = m[d]) && a.key == f.key && a.type === f.type) {
            m[d] = void 0;
            break;
          }
          f = null;
        }
      Vc(t, a, f = f || qs, i, r, l, c, _, h), u = a.__e, (d = a.ref) && f.ref != d && (p || (p = []), f.ref && p.push(f.ref, null, a), p.push(d, a.__c || u, a)), u != null ? (b == null && (b = u), typeof a.type == "function" && a.__k === f.__k ? a.__d = _ = Id(a, _, t) : _ = Ud(t, a, f, m, u, _), typeof n.type == "function" && (n.__d = _)) : _ && f.__e == _ && _.parentNode != t && (_ = or(f));
    }
  for (n.__e = b, s = g; s--; )
    m[s] != null && jd(m[s], m[s]);
  if (p)
    for (s = 0; s < p.length; s++)
      Bd(p[s], p[++s], p[++s]);
}
function Id(t, e, n) {
  for (var o, i = t.__k, r = 0; i && r < i.length; r++)
    (o = i[r]) && (o.__ = t, e = typeof o.type == "function" ? Id(o, e, n) : Ud(n, o, o, i, o.__e, e));
  return e;
}
function Ud(t, e, n, o, i, r) {
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
    r === "children" || r === "key" || r in e || Ks(t, r, null, n[r], o);
  for (r in e)
    i && typeof e[r] != "function" || r === "children" || r === "key" || r === "value" || r === "checked" || n[r] === e[r] || Ks(t, r, e[r], n[r], o);
}
function R_(t, e, n) {
  e[0] === "-" ? t.setProperty(e, n) : t[e] = n == null ? "" : typeof n != "number" || db.test(e) ? n : n + "px";
}
function Ks(t, e, n, o, i) {
  var r;
  t:
    if (e === "style")
      if (typeof n == "string")
        t.style.cssText = n;
      else {
        if (typeof o == "string" && (t.style.cssText = o = ""), o)
          for (e in o)
            n && e in n || R_(t.style, e, "");
        if (n)
          for (e in n)
            o && n[e] === o[e] || R_(t.style, e, n[e]);
      }
    else if (e[0] === "o" && e[1] === "n")
      r = e !== (e = e.replace(/Capture$/, "")), e = e.toLowerCase() in t ? e.toLowerCase().slice(2) : e.slice(2), t.l || (t.l = {}), t.l[e + r] = n, n ? o || t.addEventListener(e, r ? O_ : P_, r) : t.removeEventListener(e, r ? O_ : P_, r);
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
function P_(t) {
  this.l[t.type + !1](ot.event ? ot.event(t) : t);
}
function O_(t) {
  this.l[t.type + !0](ot.event ? ot.event(t) : t);
}
function Vc(t, e, n, o, i, r, l, c, _) {
  var h, s, d, f, a, u, b, p, m, g, w, k, C, A, E, y = e.type;
  if (e.constructor !== void 0)
    return null;
  n.__h != null && (_ = n.__h, c = e.__e = n.__e, e.__h = null, r = [c]), (h = ot.__b) && h(e);
  try {
    t:
      if (typeof y == "function") {
        if (p = e.props, m = (h = y.contextType) && o[h.__c], g = h ? m ? m.props.value : h.__ : o, n.__c ? b = (s = e.__c = n.__c).__ = s.__E : ("prototype" in y && y.prototype.render ? e.__c = s = new y(p, g) : (e.__c = s = new hn(p, g), s.constructor = y, s.render = vb), m && m.sub(s), s.props = p, s.state || (s.state = {}), s.context = g, s.__n = o, d = s.__d = !0, s.__h = [], s._sb = []), s.__s == null && (s.__s = s.state), y.getDerivedStateFromProps != null && (s.__s == s.state && (s.__s = De({}, s.__s)), De(s.__s, y.getDerivedStateFromProps(p, s.__s))), f = s.props, a = s.state, d)
          y.getDerivedStateFromProps == null && s.componentWillMount != null && s.componentWillMount(), s.componentDidMount != null && s.__h.push(s.componentDidMount);
        else {
          if (y.getDerivedStateFromProps == null && p !== f && s.componentWillReceiveProps != null && s.componentWillReceiveProps(p, g), !s.__e && s.shouldComponentUpdate != null && s.shouldComponentUpdate(p, s.__s, g) === !1 || e.__v === n.__v) {
            for (s.props = p, s.state = s.__s, e.__v !== n.__v && (s.__d = !1), s.__v = e, e.__e = n.__e, e.__k = n.__k, e.__k.forEach(function(x) {
              x && (x.__ = e);
            }), w = 0; w < s._sb.length; w++)
              s.__h.push(s._sb[w]);
            s._sb = [], s.__h.length && l.push(s);
            break t;
          }
          s.componentWillUpdate != null && s.componentWillUpdate(p, s.__s, g), s.componentDidUpdate != null && s.__h.push(function() {
            s.componentDidUpdate(f, a, u);
          });
        }
        if (s.context = g, s.props = p, s.__v = e, s.__P = t, k = ot.__r, C = 0, "prototype" in y && y.prototype.render) {
          for (s.state = s.__s, s.__d = !1, k && k(e), h = s.render(s.props, s.state, s.context), A = 0; A < s._sb.length; A++)
            s.__h.push(s._sb[A]);
          s._sb = [];
        } else
          do
            s.__d = !1, k && k(e), h = s.render(s.props, s.state, s.context), s.state = s.__s;
          while (s.__d && ++C < 25);
        s.state = s.__s, s.getChildContext != null && (o = De(De({}, o), s.getChildContext())), d || s.getSnapshotBeforeUpdate == null || (u = s.getSnapshotBeforeUpdate(f, a)), E = h != null && h.type === Dl && h.key == null ? h.props.children : h, Wd(t, Array.isArray(E) ? E : [E], e, n, o, i, r, l, c, _), s.base = e.__e, e.__h = null, s.__h.length && l.push(s), b && (s.__E = s.__ = null), s.__e = !1;
      } else
        r == null && e.__v === n.__v ? (e.__k = n.__k, e.__e = n.__e) : e.__e = yb(n.__e, e, n, o, i, r, l, _);
    (h = ot.diffed) && h(e);
  } catch (x) {
    e.__v = null, (_ || r != null) && (e.__e = c, e.__h = !!_, r[r.indexOf(c)] = null), ot.__e(x, e, n);
  }
}
function Fd(t, e) {
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
    if (r = r && Ll.call(t.childNodes), h = (d = n.props || qs).dangerouslySetInnerHTML, s = f.dangerouslySetInnerHTML, !c) {
      if (r != null)
        for (d = {}, u = 0; u < t.attributes.length; u++)
          d[t.attributes[u].name] = t.attributes[u].value;
      (s || h) && (s && (h && s.__html == h.__html || s.__html === t.innerHTML) || (t.innerHTML = s && s.__html || ""));
    }
    if (gb(t, f, d, i, c), s)
      e.__k = [];
    else if (u = e.props.children, Wd(t, Array.isArray(u) ? u : [u], e, n, o, i && a !== "foreignObject", r, l, r ? r[0] : n.__k && or(n, 0), c), r != null)
      for (u = r.length; u--; )
        r[u] != null && Od(r[u]);
    c || ("value" in f && (u = f.value) !== void 0 && (u !== t.value || a === "progress" && !u || a === "option" && u !== d.value) && Ks(t, "value", u, d.value, !1), "checked" in f && (u = f.checked) !== void 0 && u !== t.checked && Ks(t, "checked", u, d.checked, !1));
  }
  return t;
}
function Bd(t, e, n) {
  try {
    typeof t == "function" ? t(e) : t.current = e;
  } catch (o) {
    ot.__e(o, n);
  }
}
function jd(t, e, n) {
  var o, i;
  if (ot.unmount && ot.unmount(t), (o = t.ref) && (o.current && o.current !== t.__e || Bd(o, null, e)), (o = t.__c) != null) {
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
      o[i] && jd(o[i], e, n || typeof t.type != "function");
  n || t.__e == null || Od(t.__e), t.__ = t.__e = t.__d = void 0;
}
function vb(t, e, n) {
  return this.constructor(t, n);
}
function bb(t, e, n) {
  var o, i, r;
  ot.__ && ot.__(t, e), i = (o = typeof n == "function") ? null : n && n.__k || e.__k, r = [], Vc(e, t = (!o && n || e).__k = pb(Dl, null, [t]), i || qs, qs, e.ownerSVGElement !== void 0, !o && n ? [n] : i ? null : e.firstChild ? Ll.call(e.childNodes) : null, r, !o && n ? n : i ? i.__e : e.firstChild, o), Fd(r, t);
}
Ll = Pd.slice, ot = { __e: function(t, e, n, o) {
  for (var i, r, l; e = e.__; )
    if ((i = e.__c) && !i.__)
      try {
        if ((r = i.constructor) && r.getDerivedStateFromError != null && (i.setState(r.getDerivedStateFromError(t)), l = i.__d), i.componentDidCatch != null && (i.componentDidCatch(t, o || {}), l = i.__d), l)
          return i.__E = i;
      } catch (c) {
        t = c;
      }
  throw t;
} }, Rd = 0, no = function(t) {
  return t != null && t.constructor === void 0;
}, hn.prototype.setState = function(t, e) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = De({}, this.state), typeof t == "function" && (t = t(De({}, n), this.props)), t && De(n, t), t != null && this.__v && (e && this._sb.push(e), N_(this));
}, hn.prototype.forceUpdate = function(t) {
  this.__v && (this.__e = !0, t && this.__h.push(t), N_(this));
}, hn.prototype.render = Dl, Co = [], Xs.__r = 0;
var wb = 0;
function bt(t, e, n, o, i) {
  var r, l, c = {};
  for (l in e)
    l == "ref" ? r = e[l] : c[l] = e[l];
  var _ = { type: t, props: c, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: --wb, __source: i, __self: o };
  if (typeof t == "function" && (r = t.defaultProps))
    for (l in r)
      c[l] === void 0 && (c[l] = r[l]);
  return ot.vnode && ot.vnode(_), _;
}
let $b = (t = 21) => crypto.getRandomValues(new Uint8Array(t)).reduce((e, n) => (n &= 63, n < 36 ? e += n.toString(36) : n < 62 ? e += (n - 26).toString(36).toUpperCase() : n > 62 ? e += "-" : e += "_", e), "");
class Vd extends hn {
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
    return no(e) ? e : e === !1 || !n ? null : /* @__PURE__ */ bt("div", { className: "modal-header", children: /* @__PURE__ */ bt("div", { className: "modal-title", children: n }) });
  }
  renderActions() {
    const {
      actions: e,
      closeBtn: n
    } = this.props;
    return !n && !e ? null : no(e) ? e : /* @__PURE__ */ bt("div", { className: "modal-actions", children: [
      e ? /* @__PURE__ */ bt(Vn, { ...e }) : null,
      n ? /* @__PURE__ */ bt("button", { type: "button", class: "btn square ghost", "data-dismiss": "modal", children: /* @__PURE__ */ bt("span", { class: "close" }) }) : null
    ] });
  }
  renderBody() {
    const {
      body: e
    } = this.props;
    return e ? no(e) ? e : /* @__PURE__ */ bt("div", { className: "modal-body", children: e }) : null;
  }
  renderFooter() {
    const {
      footer: e,
      footerActions: n
    } = this.props;
    return no(e) ? e : e === !1 || !n ? null : /* @__PURE__ */ bt("div", { className: "modal-footer", children: n ? /* @__PURE__ */ bt(Vn, { ...n }) : null });
  }
  render() {
    const {
      className: e,
      style: n,
      children: o
    } = this.props;
    return /* @__PURE__ */ bt("div", { className: F("modal-dialog", e), style: n, children: /* @__PURE__ */ bt("div", { className: "modal-content", children: [
      this.renderHeader(),
      this.renderActions(),
      this.renderBody(),
      o,
      this.renderFooter()
    ] }) });
  }
}
L(Vd, "defaultProps", { closeBtn: !0 });
var br, Mn, wr;
class kb extends hn {
  constructor() {
    super(...arguments);
    M(this, br, mb());
    M(this, Mn, void 0);
    L(this, "state", {});
    M(this, wr, () => {
      var i, r;
      const n = (r = (i = v(this, br).current) == null ? void 0 : i.contentWindow) == null ? void 0 : r.document;
      if (!n)
        return;
      let o = v(this, Mn);
      o == null || o.disconnect(), o = new ResizeObserver(() => {
        const l = n.body, c = n.documentElement, _ = Math.ceil(Math.max(l.scrollHeight, l.offsetHeight, c.offsetHeight));
        this.setState({ height: _ });
      }), o.observe(n.body), o.observe(n.documentElement), H(this, Mn, o);
    });
  }
  componentDidMount() {
    v(this, wr).call(this);
  }
  componentWillUnmount() {
    var n;
    (n = v(this, Mn)) == null || n.disconnect();
  }
  render() {
    const { url: n } = this.props;
    return /* @__PURE__ */ bt(
      "iframe",
      {
        className: "modal-iframe",
        style: this.state,
        src: n,
        ref: v(this, br),
        onLoad: v(this, wr)
      }
    );
  }
}
br = new WeakMap(), Mn = new WeakMap(), wr = new WeakMap();
function xb(t, e) {
  const { custom: n, title: o, content: i } = e;
  return {
    body: i,
    title: o,
    ...typeof n == "function" ? n() : n
  };
}
async function Sb(t, e) {
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
    body: n === "html" ? /* @__PURE__ */ bt("div", { className: "modal-body", dangerouslySetInnerHTML: { __html: _ } }) : _
  };
}
async function Cb(t, e) {
  const { url: n, custom: o, title: i } = e;
  return {
    title: i,
    ...o,
    body: /* @__PURE__ */ bt(kb, { url: n })
  };
}
const Eb = {
  custom: xb,
  ajax: Sb,
  iframe: Cb
};
var $r, kr, Yt, Ln, hs, Ti, zd, xr, uc;
const Uo = class extends Tt {
  constructor() {
    super(...arguments);
    M(this, Ln);
    M(this, Ti);
    M(this, xr);
    M(this, $r, void 0);
    M(this, kr, void 0);
    M(this, Yt, void 0);
  }
  get id() {
    return v(this, kr);
  }
  get loading() {
    return this.modalElement.classList.contains(Uo.LOADING_CLASS);
  }
  get modalElement() {
    let n = v(this, $r);
    if (!n) {
      const { id: o } = this;
      n = this.element.querySelector(`#${o}`), n || (n = document.createElement("div"), Gs(n, {
        id: o,
        style: this.options.style
      }), Nd(n, ["modal modal-async", this.options.className]), this.element.appendChild(n)), H(this, $r, n);
    }
    return n;
  }
  afterInit() {
    super.afterInit(), H(this, kr, this.options.id || `modal-${$b()}`);
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
    v(this, Yt) && clearTimeout(v(this, Yt));
    const { modalElement: n, options: o } = this, { type: i, loadTimeout: r } = o, l = Eb[i];
    if (!l)
      return console.warn(`Modal: Cannot build modal with type "${i}"`), !1;
    n.classList.add(Uo.LOADING_CLASS), await W(this, Ti, zd).call(this), r && H(this, Yt, window.setTimeout(() => {
      H(this, Yt, 0), W(this, xr, uc).call(this, this.options.timeoutTip);
    }, r));
    const c = await l(n, o);
    return c === !1 ? await W(this, xr, uc).call(this, this.options.failedTip) : c && typeof c == "object" && await W(this, Ln, hs).call(this, c), v(this, Yt) && (clearTimeout(v(this, Yt)), H(this, Yt, 0)), n.classList.remove(Uo.LOADING_CLASS), !0;
  }
};
let oo = Uo;
$r = new WeakMap(), kr = new WeakMap(), Yt = new WeakMap(), Ln = new WeakSet(), hs = function(n) {
  return new Promise((o) => {
    const { afterRender: i, ...r } = n;
    n = {
      afterRender: (l) => {
        this.layout(), i == null || i(l), o();
      },
      ...r
    }, bb(
      /* @__PURE__ */ bt(Vd, { ...n }),
      this.modalElement
    );
  });
}, Ti = new WeakSet(), zd = function() {
  const { loadingText: n } = this.options;
  return W(this, Ln, hs).call(this, {
    body: /* @__PURE__ */ bt("div", { className: "modal-loading-indicator", children: [
      /* @__PURE__ */ bt("span", { className: "spinner" }),
      n ? /* @__PURE__ */ bt("span", { className: "modal-loading-text", children: n }) : null
    ] })
  });
}, xr = new WeakSet(), uc = function(n) {
  if (n)
    return W(this, Ln, hs).call(this, {
      body: /* @__PURE__ */ bt("div", { className: "modal-load-failed", children: n })
    });
}, L(oo, "LOADING_CLASS", "loading"), L(oo, "DEFAULT", {
  ...Tt.DEFAULT,
  loadTimeout: 1e4
});
var ve, Mi, Yd, Li, Gd, Di, qd;
class Eo extends jt {
  constructor() {
    super(...arguments);
    M(this, Mi);
    M(this, Li);
    M(this, Di);
    M(this, ve, void 0);
  }
  get modal() {
    return v(this, ve);
  }
  get container() {
    const { container: n } = this.options;
    return typeof n == "string" ? document.querySelector(n) : n instanceof HTMLElement ? n : document.body;
  }
  show() {
    return W(this, Li, Gd).call(this).show();
  }
  hide() {
    var n;
    (n = v(this, ve)) == null || n.hide();
  }
}
ve = new WeakMap(), Mi = new WeakSet(), Yd = function() {
  const {
    container: n,
    ...o
  } = this.options, i = o, r = this.element.getAttribute("href") || "";
  return i.type || (i.target || r[0] === "#" ? i.type = "static" : i.type = i.type || (i.url ? "iframe" : "custom")), !i.url && (i.type === "iframe" || i.type === "ajax") && r[0] !== "#" && (i.url = r), i;
}, Li = new WeakSet(), Gd = function() {
  const n = W(this, Mi, Yd).call(this);
  let o = v(this, ve);
  return o ? o.setOptions(n) : n.type === "static" ? (o = new Tt(W(this, Di, qd).call(this), n), H(this, ve, o)) : (o = new oo(this.container, n), H(this, ve, o)), o;
}, Di = new WeakSet(), qd = function() {
  let n = this.options.target;
  if (!n) {
    const { element: o } = this;
    if (o.tagName === "A") {
      const i = o.getAttribute("href");
      i != null && i.startsWith("#") && (n = i);
    }
  }
  return this.container.querySelector(n || ".modal");
}, L(Eo, "NAME", "ModalTrigger"), L(Eo, "EVENTS", !0), L(Eo, "TOGGLE_SELECTOR", '[data-toggle="modal"]');
window.addEventListener("click", (t) => {
  const n = t.target.closest(Eo.TOGGLE_SELECTOR);
  if (n) {
    const o = Eo.ensure(n);
    o && o.show(), console.log("> modalTrigger", o);
  }
});
var ec;
let Ab = (ec = class extends jn {
  beforeRender() {
    const e = super.beforeRender();
    return e.className = F(e.className, e.type ? `nav-${e.type}` : "", {
      "nav-stacked": e.stacked
    }), e;
  }
}, L(ec, "NAME", "nav"), ec);
class H_ extends xt {
}
L(H_, "NAME", "nav"), L(H_, "Component", Ab);
var hc;
hc = { __e: function(t, e, n, o) {
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
var Tb = 0;
function We(t, e, n, o, i) {
  var r, l, c = {};
  for (l in e)
    l == "ref" ? r = e[l] : c[l] = e[l];
  var _ = { type: t, props: c, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: --Tb, __source: i, __self: o };
  if (typeof t == "function" && (r = t.defaultProps))
    for (l in r)
      c[l] === void 0 && (c[l] = r[l]);
  return hc.vnode && hc.vnode(_), _;
}
function rr(t, e) {
  const n = t.pageTotal || Math.ceil(t.recTotal / t.recPerPage);
  return typeof e == "string" && (e === "first" ? e = 1 : e === "last" ? e = n : e === "prev" ? e = t.page - 1 : e === "next" ? e = t.page + 1 : e === "current" ? e = t.page : e = Number.parseInt(e, 10)), e = e !== void 0 ? Math.max(1, Math.min(e < 0 ? n + e : e, n)) : t.page, {
    ...t,
    pageTotal: n,
    page: e
  };
}
function Mb({
  key: t,
  type: e,
  btnType: n,
  page: o,
  format: i,
  pagerInfo: r,
  linkCreator: l,
  ...c
}) {
  const _ = rr(r, o);
  return c.text === void 0 && !c.icon && i && (c.text = typeof i == "function" ? i(_) : Lt(i, _)), c.url === void 0 && l && (c.url = typeof l == "function" ? l(_) : Lt(l, _)), c.disabled === void 0 && (c.disabled = o !== void 0 && _.page === r.page), /* @__PURE__ */ We(Jt, { type: n, ...c });
}
const se = 24 * 60 * 60 * 1e3, Dt = (t) => t ? (t instanceof Date || (typeof t == "string" && (t = t.trim(), /^\d+$/.test(t) && (t = Number.parseInt(t, 10))), typeof t == "number" && t < 1e10 && (t *= 1e3), t = new Date(t)), t) : new Date(), Fr = (t, e = new Date()) => (t = Dt(t), e = Dt(e), t.getFullYear() === e.getFullYear() && t.getMonth() === e.getMonth() && t.getDate() === e.getDate()), W_ = (t, e = new Date()) => Dt(t).getFullYear() === Dt(e).getFullYear(), Lb = (t, e = new Date()) => (t = Dt(t), e = Dt(e), t.getFullYear() === e.getFullYear() && t.getMonth() === e.getMonth()), h$ = (t, e = new Date()) => {
  t = Dt(t), e = Dt(e);
  const n = 1e3 * 60 * 60 * 24, o = Math.floor(t.getTime() / n), i = Math.floor(e.getTime() / n);
  return Math.floor((o + 4) / 7) === Math.floor((i + 4) / 7);
}, d$ = (t, e) => Fr(Dt(e), t), p$ = (t, e) => Fr(Dt(e).getTime() - se, t), m$ = (t, e) => Fr(Dt(e).getTime() + se, t), g$ = (t, e) => Fr(Dt(e).getTime() - 2 * se, t), dc = (t, e = "yyyy-MM-dd hh:mm") => {
  t = Dt(t);
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
}, y$ = (t, e, n) => {
  const o = {
    full: "yyyy-M-d",
    month: "M-d",
    day: "d",
    str: "{0} ~ {1}",
    ...n
  }, i = dc(t, W_(t) ? o.month : o.full);
  if (Fr(t, e))
    return i;
  const r = dc(e, W_(t, e) ? Lb(t, e) ? o.day : o.month : o.full);
  return o.str.replace("{0}", i).replace("{1}", r);
}, v$ = (t) => {
  const e = new Date().getTime();
  switch (t) {
    case "oneWeek":
      return e - se * 7;
    case "oneMonth":
      return e - se * 31;
    case "threeMonth":
      return e - se * 31 * 3;
    case "halfYear":
      return e - se * 183;
    case "oneYear":
      return e - se * 365;
    case "twoYear":
      return e - 2 * (se * 365);
    default:
      return 0;
  }
}, I_ = (t, e, n = !0, o = Date.now()) => {
  switch (e) {
    case "year":
      return t *= 365, I_(t, "day", n, o);
    case "quarter":
      t *= 3;
    case "month":
      return t *= 30, I_(t, "day", n, o);
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
function Db({
  key: t,
  type: e,
  page: n,
  text: o = "",
  pagerInfo: i,
  children: r,
  ...l
}) {
  const c = rr(i, n);
  return o = typeof o == "function" ? o(c) : Lt(o, c), /* @__PURE__ */ We(lu, { ...l, children: [
    r,
    o
  ] });
}
function Nb({
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
  const _ = { ...c, square: !0 }, h = () => (_.text = "", _.icon = "icon-ellipsis-h", _.disabled = !0, /* @__PURE__ */ We(Jt, { type: n, ..._ })), s = (f, a) => {
    const u = [];
    for (let b = f; b <= a; b++) {
      _.text = b, delete _.icon, _.disabled = !1;
      const p = rr(i, b);
      l && (_.url = typeof l == "function" ? l(p) : Lt(l, p)), u.push(/* @__PURE__ */ We(Jt, { type: n, ..._, onClick: r }));
    }
    return u;
  };
  let d = [];
  return d = [...s(1, 1)], i.pageTotal <= 1 || (i.pageTotal <= o ? d = [...d, ...s(2, i.pageTotal)] : i.page < o - 2 ? d = [...d, ...s(2, o - 2), h(), ...s(i.pageTotal, i.pageTotal)] : i.page > i.pageTotal - o + 3 ? d = [...d, h(), ...s(i.pageTotal - o + 3, i.pageTotal)] : d = [...d, h(), ...s(i.page - Math.ceil((o - 4) / 2), i.page + Math.floor((o - 4) / 2)), h(), ...s(i.pageTotal, i.pageTotal)]), d;
}
function Rb({
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
      url: typeof n == "function" ? n(h) : Lt(n, h)
    };
  });
  const { text: l = "" } = r;
  return r.text = typeof l == "function" ? l(e) : Lt(l, e), i.menu = { ...i.menu, className: F((c = i.menu) == null ? void 0 : c.className, "pager-size-menu") }, /* @__PURE__ */ We(vh, { type: "dropdown", dropdown: i, ...r });
}
function Pb({
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
    const p = rr(i, d);
    c && !c({ info: p, event: b }) || (b.target.href = s.url = typeof _ == "function" ? _(p) : Lt(_, p));
  }, u = rr(i, e || 0);
  return s.url = typeof _ == "function" ? _(u) : Lt(_, u), s.className = F("input-group-addon", s.className), /* @__PURE__ */ We("div", { className: F("input-group", "pager-goto-group", r ? `size-${r}` : ""), children: [
    /* @__PURE__ */ We("input", { type: "number", class: "form-control", max: i.pageTotal, min: "1", onInput: f }),
    /* @__PURE__ */ We(Jt, { type: o, ...s, onClick: a })
  ] });
}
var Qn;
let Ob = (Qn = class extends Vn {
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
}, L(Qn, "NAME", "pager"), L(Qn, "defaultProps", {
  gap: 1,
  btnProps: {
    btnType: "ghost",
    size: "sm"
  }
}), L(Qn, "ItemComponents", {
  ...Vn.ItemComponents,
  link: Mb,
  info: Db,
  nav: Nb,
  "size-menu": Rb,
  goto: Pb
}), Qn);
class U_ extends xt {
}
L(U_, "NAME", "pager"), L(U_, "Component", Ob);
var Xd, dt, Kd, Ao, F_, Zd = {}, Jd = [], Hb = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function Ne(t, e) {
  for (var n in e)
    t[n] = e[n];
  return t;
}
function Qd(t) {
  var e = t.parentNode;
  e && e.removeChild(t);
}
function Xl(t, e, n, o, i) {
  var r = { type: t, props: e, key: n, ref: o, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: i ?? ++Kd };
  return i == null && dt.vnode != null && dt.vnode(r), r;
}
function Wb() {
  return { current: null };
}
function zc(t) {
  return t.children;
}
function Ie(t, e) {
  this.props = t, this.context = e;
}
function sr(t, e) {
  if (e == null)
    return t.__ ? sr(t.__, t.__.__k.indexOf(t) + 1) : null;
  for (var n; e < t.__k.length; e++)
    if ((n = t.__k[e]) != null && n.__e != null)
      return n.__e;
  return typeof t.type == "function" ? sr(t) : null;
}
function tp(t) {
  var e, n;
  if ((t = t.__) != null && t.__c != null) {
    for (t.__e = t.__c.base = null, e = 0; e < t.__k.length; e++)
      if ((n = t.__k[e]) != null && n.__e != null) {
        t.__e = t.__c.base = n.__e;
        break;
      }
    return tp(t);
  }
}
function B_(t) {
  (!t.__d && (t.__d = !0) && Ao.push(t) && !Zs.__r++ || F_ !== dt.debounceRendering) && ((F_ = dt.debounceRendering) || setTimeout)(Zs);
}
function Zs() {
  for (var t; Zs.__r = Ao.length; )
    t = Ao.sort(function(e, n) {
      return e.__v.__b - n.__v.__b;
    }), Ao = [], t.some(function(e) {
      var n, o, i, r, l, c;
      e.__d && (l = (r = (n = e).__v).__e, (c = n.__P) && (o = [], (i = Ne({}, r)).__v = r.__v + 1, rp(c, r, i, n.__n, c.ownerSVGElement !== void 0, r.__h != null ? [l] : null, o, l ?? sr(r), r.__h), Ub(o, r), r.__e != l && tp(r)));
    });
}
function ep(t, e, n, o, i, r, l, c, _, h) {
  var s, d, f, a, u, b, p, m = o && o.__k || Jd, g = m.length;
  for (n.__k = [], s = 0; s < e.length; s++)
    if ((a = n.__k[s] = (a = e[s]) == null || typeof a == "boolean" ? null : typeof a == "string" || typeof a == "number" || typeof a == "bigint" ? Xl(null, a, null, null, a) : Array.isArray(a) ? Xl(zc, { children: a }, null, null, null) : a.__b > 0 ? Xl(a.type, a.props, a.key, a.ref ? a.ref : null, a.__v) : a) != null) {
      if (a.__ = n, a.__b = n.__b + 1, (f = m[s]) === null || f && a.key == f.key && a.type === f.type)
        m[s] = void 0;
      else
        for (d = 0; d < g; d++) {
          if ((f = m[d]) && a.key == f.key && a.type === f.type) {
            m[d] = void 0;
            break;
          }
          f = null;
        }
      rp(t, a, f = f || Zd, i, r, l, c, _, h), u = a.__e, (d = a.ref) && f.ref != d && (p || (p = []), f.ref && p.push(f.ref, null, a), p.push(d, a.__c || u, a)), u != null ? (b == null && (b = u), typeof a.type == "function" && a.__k === f.__k ? a.__d = _ = np(a, _, t) : _ = op(t, a, f, m, u, _), typeof n.type == "function" && (n.__d = _)) : _ && f.__e == _ && _.parentNode != t && (_ = sr(f));
    }
  for (n.__e = b, s = g; s--; )
    m[s] != null && ip(m[s], m[s]);
  if (p)
    for (s = 0; s < p.length; s++)
      sp(p[s], p[++s], p[++s]);
}
function np(t, e, n) {
  for (var o, i = t.__k, r = 0; i && r < i.length; r++)
    (o = i[r]) && (o.__ = t, e = typeof o.type == "function" ? np(o, e, n) : op(n, o, o, i, o.__e, e));
  return e;
}
function op(t, e, n, o, i, r) {
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
function Ib(t, e, n, o, i) {
  var r;
  for (r in n)
    r === "children" || r === "key" || r in e || Js(t, r, null, n[r], o);
  for (r in e)
    i && typeof e[r] != "function" || r === "children" || r === "key" || r === "value" || r === "checked" || n[r] === e[r] || Js(t, r, e[r], n[r], o);
}
function j_(t, e, n) {
  e[0] === "-" ? t.setProperty(e, n) : t[e] = n == null ? "" : typeof n != "number" || Hb.test(e) ? n : n + "px";
}
function Js(t, e, n, o, i) {
  var r;
  t:
    if (e === "style")
      if (typeof n == "string")
        t.style.cssText = n;
      else {
        if (typeof o == "string" && (t.style.cssText = o = ""), o)
          for (e in o)
            n && e in n || j_(t.style, e, "");
        if (n)
          for (e in n)
            o && n[e] === o[e] || j_(t.style, e, n[e]);
      }
    else if (e[0] === "o" && e[1] === "n")
      r = e !== (e = e.replace(/Capture$/, "")), e = e.toLowerCase() in t ? e.toLowerCase().slice(2) : e.slice(2), t.l || (t.l = {}), t.l[e + r] = n, n ? o || t.addEventListener(e, r ? z_ : V_, r) : t.removeEventListener(e, r ? z_ : V_, r);
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
function V_(t) {
  this.l[t.type + !1](dt.event ? dt.event(t) : t);
}
function z_(t) {
  this.l[t.type + !0](dt.event ? dt.event(t) : t);
}
function rp(t, e, n, o, i, r, l, c, _) {
  var h, s, d, f, a, u, b, p, m, g, w, k, C, A, E, y = e.type;
  if (e.constructor !== void 0)
    return null;
  n.__h != null && (_ = n.__h, c = e.__e = n.__e, e.__h = null, r = [c]), (h = dt.__b) && h(e);
  try {
    t:
      if (typeof y == "function") {
        if (p = e.props, m = (h = y.contextType) && o[h.__c], g = h ? m ? m.props.value : h.__ : o, n.__c ? b = (s = e.__c = n.__c).__ = s.__E : ("prototype" in y && y.prototype.render ? e.__c = s = new y(p, g) : (e.__c = s = new Ie(p, g), s.constructor = y, s.render = Bb), m && m.sub(s), s.props = p, s.state || (s.state = {}), s.context = g, s.__n = o, d = s.__d = !0, s.__h = [], s._sb = []), s.__s == null && (s.__s = s.state), y.getDerivedStateFromProps != null && (s.__s == s.state && (s.__s = Ne({}, s.__s)), Ne(s.__s, y.getDerivedStateFromProps(p, s.__s))), f = s.props, a = s.state, d)
          y.getDerivedStateFromProps == null && s.componentWillMount != null && s.componentWillMount(), s.componentDidMount != null && s.__h.push(s.componentDidMount);
        else {
          if (y.getDerivedStateFromProps == null && p !== f && s.componentWillReceiveProps != null && s.componentWillReceiveProps(p, g), !s.__e && s.shouldComponentUpdate != null && s.shouldComponentUpdate(p, s.__s, g) === !1 || e.__v === n.__v) {
            for (s.props = p, s.state = s.__s, e.__v !== n.__v && (s.__d = !1), s.__v = e, e.__e = n.__e, e.__k = n.__k, e.__k.forEach(function(x) {
              x && (x.__ = e);
            }), w = 0; w < s._sb.length; w++)
              s.__h.push(s._sb[w]);
            s._sb = [], s.__h.length && l.push(s);
            break t;
          }
          s.componentWillUpdate != null && s.componentWillUpdate(p, s.__s, g), s.componentDidUpdate != null && s.__h.push(function() {
            s.componentDidUpdate(f, a, u);
          });
        }
        if (s.context = g, s.props = p, s.__v = e, s.__P = t, k = dt.__r, C = 0, "prototype" in y && y.prototype.render) {
          for (s.state = s.__s, s.__d = !1, k && k(e), h = s.render(s.props, s.state, s.context), A = 0; A < s._sb.length; A++)
            s.__h.push(s._sb[A]);
          s._sb = [];
        } else
          do
            s.__d = !1, k && k(e), h = s.render(s.props, s.state, s.context), s.state = s.__s;
          while (s.__d && ++C < 25);
        s.state = s.__s, s.getChildContext != null && (o = Ne(Ne({}, o), s.getChildContext())), d || s.getSnapshotBeforeUpdate == null || (u = s.getSnapshotBeforeUpdate(f, a)), E = h != null && h.type === zc && h.key == null ? h.props.children : h, ep(t, Array.isArray(E) ? E : [E], e, n, o, i, r, l, c, _), s.base = e.__e, e.__h = null, s.__h.length && l.push(s), b && (s.__E = s.__ = null), s.__e = !1;
      } else
        r == null && e.__v === n.__v ? (e.__k = n.__k, e.__e = n.__e) : e.__e = Fb(n.__e, e, n, o, i, r, l, _);
    (h = dt.diffed) && h(e);
  } catch (x) {
    e.__v = null, (_ || r != null) && (e.__e = c, e.__h = !!_, r[r.indexOf(c)] = null), dt.__e(x, e, n);
  }
}
function Ub(t, e) {
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
function Fb(t, e, n, o, i, r, l, c) {
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
    if (r = r && Xd.call(t.childNodes), h = (d = n.props || Zd).dangerouslySetInnerHTML, s = f.dangerouslySetInnerHTML, !c) {
      if (r != null)
        for (d = {}, u = 0; u < t.attributes.length; u++)
          d[t.attributes[u].name] = t.attributes[u].value;
      (s || h) && (s && (h && s.__html == h.__html || s.__html === t.innerHTML) || (t.innerHTML = s && s.__html || ""));
    }
    if (Ib(t, f, d, i, c), s)
      e.__k = [];
    else if (u = e.props.children, ep(t, Array.isArray(u) ? u : [u], e, n, o, i && a !== "foreignObject", r, l, r ? r[0] : n.__k && sr(n, 0), c), r != null)
      for (u = r.length; u--; )
        r[u] != null && Qd(r[u]);
    c || ("value" in f && (u = f.value) !== void 0 && (u !== t.value || a === "progress" && !u || a === "option" && u !== d.value) && Js(t, "value", u, d.value, !1), "checked" in f && (u = f.checked) !== void 0 && u !== t.checked && Js(t, "checked", u, d.checked, !1));
  }
  return t;
}
function sp(t, e, n) {
  try {
    typeof t == "function" ? t(e) : t.current = e;
  } catch (o) {
    dt.__e(o, n);
  }
}
function ip(t, e, n) {
  var o, i;
  if (dt.unmount && dt.unmount(t), (o = t.ref) && (o.current && o.current !== t.__e || sp(o, null, e)), (o = t.__c) != null) {
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
      o[i] && ip(o[i], e, n || typeof t.type != "function");
  n || t.__e == null || Qd(t.__e), t.__ = t.__e = t.__d = void 0;
}
function Bb(t, e, n) {
  return this.constructor(t, n);
}
Xd = Jd.slice, dt = { __e: function(t, e, n, o) {
  for (var i, r, l; e = e.__; )
    if ((i = e.__c) && !i.__)
      try {
        if ((r = i.constructor) && r.getDerivedStateFromError != null && (i.setState(r.getDerivedStateFromError(t)), l = i.__d), i.componentDidCatch != null && (i.componentDidCatch(t, o || {}), l = i.__d), l)
          return i.__E = i;
      } catch (c) {
        t = c;
      }
  throw t;
} }, Kd = 0, Ie.prototype.setState = function(t, e) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = Ne({}, this.state), typeof t == "function" && (t = t(Ne({}, n), this.props)), t && Ne(n, t), t != null && this.__v && (e && this._sb.push(e), B_(this));
}, Ie.prototype.forceUpdate = function(t) {
  this.__v && (this.__e = !0, t && this.__h.push(t), B_(this));
}, Ie.prototype.render = zc, Ao = [], Zs.__r = 0;
var jb = 0;
function Q(t, e, n, o, i) {
  var r, l, c = {};
  for (l in e)
    l == "ref" ? r = e[l] : c[l] = e[l];
  var _ = { type: t, props: c, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: --jb, __source: i, __self: o };
  if (typeof t == "function" && (r = t.defaultProps))
    for (l in r)
      c[l] === void 0 && (c[l] = r[l]);
  return dt.vnode && dt.vnode(_), _;
}
let Vb = (t = 21) => crypto.getRandomValues(new Uint8Array(t)).reduce((e, n) => (n &= 63, n < 36 ? e += n.toString(36) : n < 62 ? e += (n - 26).toString(36).toUpperCase() : n > 62 ? e += "-" : e += "_", e), "");
var Ni;
class zb extends Ie {
  constructor() {
    super(...arguments);
    M(this, Ni, (n) => {
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
    return c.length ? s = /* @__PURE__ */ Q("div", { className: "picker-multi-selections", children: c.map((d, f) => /* @__PURE__ */ Q("div", { className: "picker-multi-selection", children: [
      d.text ?? d.value,
      /* @__PURE__ */ Q("div", { className: "picker-deselect-btn btn", onClick: v(this, Ni), "data-idx": f, children: /* @__PURE__ */ Q("span", { className: "close" }) })
    ] })) }) : s = /* @__PURE__ */ Q("span", { className: "picker-select-placeholder", children: r }), /* @__PURE__ */ Q(
      "div",
      {
        className: F("picker-select picker-select-multi form-control", n, { disabled: i, focused: l }),
        style: o,
        onClick: _,
        children: [
          s,
          h,
          /* @__PURE__ */ Q("span", { class: "caret" })
        ]
      }
    );
  }
}
Ni = new WeakMap();
var Ri;
class Yb extends Ie {
  constructor() {
    super(...arguments);
    M(this, Ri, (n) => {
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
    } = this.props, [d] = c, f = d ? /* @__PURE__ */ Q("span", { className: "picker-single-selection", children: d.text ?? d.value }) : /* @__PURE__ */ Q("span", { className: "picker-select-placeholder", children: r }), a = d && _ ? /* @__PURE__ */ Q("button", { type: "button", className: "btn picker-deselect-btn", onClick: v(this, Ri), children: /* @__PURE__ */ Q("span", { className: "close" }) }) : null;
    return /* @__PURE__ */ Q(
      "div",
      {
        className: F("picker-select picker-select-single form-control", n, { disabled: i, focused: l }),
        style: o,
        onClick: h,
        children: [
          f,
          s,
          a,
          /* @__PURE__ */ Q("span", { class: "caret" })
        ]
      }
    );
  }
}
Ri = new WeakMap();
var Pi, lp, Sr, Oi, Cr, Hi;
class Gb extends Ie {
  constructor() {
    super(...arguments);
    M(this, Pi);
    L(this, "state", { keys: "", shown: !1 });
    M(this, Sr, (n) => {
      var o;
      (o = n.target) != null && o.closest(`#picker-menu-${this.props.id}`) || this.hide();
    });
    M(this, Oi, ({ item: n }) => {
      const o = this.props.items.find((i) => i.value === n.key);
      o && this.props.onSelectItem(o);
    });
    M(this, Cr, (n) => {
      this.setState({ keys: n.target.value });
    });
    M(this, Hi, () => {
      this.setState({ keys: "" });
    });
  }
  componentDidMount() {
    document.addEventListener("click", v(this, Sr)), this.show();
  }
  componentWillUnmount() {
    document.removeEventListener("click", v(this, Sr));
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
    return /* @__PURE__ */ Q("div", { className: F("picker-menu", i, { shown: d, "has-search": a }), id: `picker-menu-${n}`, style: { maxHeight: l, maxWidth: c, width: _, ...r }, children: [
      o ? /* @__PURE__ */ Q("div", { className: "picker-menu-search", children: [
        /* @__PURE__ */ Q("input", { className: "form-control picker-menu-search-input", type: "text", placeholder: s, value: f, onChange: v(this, Cr), onInput: v(this, Cr) }),
        a ? /* @__PURE__ */ Q("button", { type: "button", className: "btn picker-menu-search-clear", onClick: v(this, Hi), children: /* @__PURE__ */ Q("span", { className: "close" }) }) : /* @__PURE__ */ Q("span", { className: "magnifier" })
      ] }) : null,
      /* @__PURE__ */ Q(Tc, { className: "picker-menu-list", items: W(this, Pi, lp).call(this), onClickItem: v(this, Oi), ...h })
    ] });
  }
}
Pi = new WeakSet(), lp = function() {
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
      typeof f == "string" && r.length && (f = /* @__PURE__ */ Q("span", { dangerouslySetInnerHTML: { __html: r.reduce((a, u) => a.replace(u, `<span class="picker-menu-item-match">${u}</span>`), f) } })), l.push({
        key: _,
        active: i.has(_),
        text: f,
        ...d
      });
    }
    return l;
  }, []);
}, Sr = new WeakMap(), Oi = new WeakMap(), Cr = new WeakMap(), Hi = new WeakMap();
function Y_(t) {
  const e = /* @__PURE__ */ new Set();
  return t.reduce((n, o) => (e.has(o) || (e.add(o), n.push(o)), n), []);
}
var nc, Er, Ar, Tr, Dn, ds, Mr, pc, Wi, cp, Ii, ap, Ui, Fi, Bi, ji, Vi, _p;
let qb = (nc = class extends Ie {
  constructor(n) {
    super(n);
    M(this, Dn);
    M(this, Mr);
    M(this, Wi);
    M(this, Ii);
    M(this, Vi);
    M(this, Er, 0);
    M(this, Ar, Vb());
    M(this, Tr, Wb());
    M(this, Ui, (n, o) => {
      const { valueList: i } = this, r = new Set(n.map((c) => c.value)), l = i.filter((c) => !r.has(c));
      this.setState({ value: l.length ? l.join(this.props.valueSplitter ?? ",") : void 0 });
    });
    M(this, Fi, (n) => {
      console.log("#handleSelectClick", n), this.setState({ open: !0 });
    });
    M(this, Bi, () => {
      this.close();
    });
    M(this, ji, (n) => {
      this.props.multi ? this.toggleValue(n.value) : this.setState({ value: n.value }, () => {
        var o;
        (o = v(this, Tr).current) == null || o.hide();
      });
    });
    this.state = {
      value: W(this, Wi, cp).call(this, n.defaultValue) ?? "",
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
    return W(this, Mr, pc).call(this, this.state.value);
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
      const i = ++fa(this, Er)._;
      if (await W(this, Dn, ds).call(this, { loading: !0, items: [] }), n = await n(), v(this, Er) !== i)
        return [];
    }
    const o = {};
    return Array.isArray(n) && this.state.items !== n && (o.items = n), this.state.loading && (o.loading = !1), Object.keys(o).length && await W(this, Dn, ds).call(this, o), n;
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
    await W(this, Dn, ds).call(this, { open: n }), n && this.loadItemList();
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
    } = this.props, l = r ? zb : Yb;
    return /* @__PURE__ */ Q("div", { className: F("picker", n), style: o, id: `picker-${v(this, Ar)}`, children: [
      /* @__PURE__ */ Q(l, { ...W(this, Ii, ap).call(this) }),
      i,
      this.state.open ? /* @__PURE__ */ Q(Gb, { ...W(this, Vi, _p).call(this), ref: v(this, Tr) }) : null
    ] });
  }
}, Er = new WeakMap(), Ar = new WeakMap(), Tr = new WeakMap(), Dn = new WeakSet(), ds = function(n) {
  return new Promise((o) => {
    this.setState(n, o);
  });
}, Mr = new WeakSet(), pc = function(n) {
  return typeof n == "string" ? Y_(n.split(this.props.valueSplitter ?? ",")) : Array.isArray(n) ? Y_(n) : [];
}, Wi = new WeakSet(), cp = function(n) {
  const o = W(this, Mr, pc).call(this, n);
  return o.length ? o.join(this.props.valueSplitter ?? ",") : void 0;
}, Ii = new WeakSet(), ap = function() {
  const { placeholder: n, disabled: o } = this.props, { open: i } = this.state;
  return {
    focused: i,
    placeholder: n,
    disabled: o,
    selections: this.getSelections(),
    onClick: v(this, Fi),
    onDeselect: v(this, Ui)
  };
}, Ui = new WeakMap(), Fi = new WeakMap(), Bi = new WeakMap(), ji = new WeakMap(), Vi = new WeakSet(), _p = function() {
  const { search: n, menuClass: o, menuWidth: i, menuStyle: r, menuMaxHeight: l, menuMaxWidth: c } = this.props, { items: _ } = this.state;
  return {
    id: v(this, Ar),
    items: _,
    selections: this.valueList,
    search: n === !0 || typeof n == "number" && n <= _.length,
    style: r,
    className: o,
    width: i,
    maxHeight: l,
    maxWidth: c,
    onRequestHide: v(this, Bi),
    onSelectItem: v(this, ji)
  };
}, L(nc, "defaultProps", {
  container: "body",
  valueSplitter: ",",
  search: !0,
  menuWidth: "auto",
  menuMaxHeight: 400
}), nc);
class G_ extends xt {
}
L(G_, "NAME", "picker"), L(G_, "Component", qb);
var Nl, rt, fp, To, q_, Qs = {}, up = [], Xb = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function Re(t, e) {
  for (var n in e)
    t[n] = e[n];
  return t;
}
function hp(t) {
  var e = t.parentNode;
  e && e.removeChild(t);
}
function dp(t, e, n) {
  var o, i, r, l = {};
  for (r in e)
    r == "key" ? o = e[r] : r == "ref" ? i = e[r] : l[r] = e[r];
  if (arguments.length > 2 && (l.children = arguments.length > 3 ? Nl.call(arguments, 2) : n), typeof t == "function" && t.defaultProps != null)
    for (r in t.defaultProps)
      l[r] === void 0 && (l[r] = t.defaultProps[r]);
  return ps(t, l, o, i, null);
}
function ps(t, e, n, o, i) {
  var r = { type: t, props: e, key: n, ref: o, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: i ?? ++fp };
  return i == null && rt.vnode != null && rt.vnode(r), r;
}
function Xr() {
  return { current: null };
}
function Rl(t) {
  return t.children;
}
function Mo(t, e) {
  this.props = t, this.context = e;
}
function ir(t, e) {
  if (e == null)
    return t.__ ? ir(t.__, t.__.__k.indexOf(t) + 1) : null;
  for (var n; e < t.__k.length; e++)
    if ((n = t.__k[e]) != null && n.__e != null)
      return n.__e;
  return typeof t.type == "function" ? ir(t) : null;
}
function pp(t) {
  var e, n;
  if ((t = t.__) != null && t.__c != null) {
    for (t.__e = t.__c.base = null, e = 0; e < t.__k.length; e++)
      if ((n = t.__k[e]) != null && n.__e != null) {
        t.__e = t.__c.base = n.__e;
        break;
      }
    return pp(t);
  }
}
function X_(t) {
  (!t.__d && (t.__d = !0) && To.push(t) && !ti.__r++ || q_ !== rt.debounceRendering) && ((q_ = rt.debounceRendering) || setTimeout)(ti);
}
function ti() {
  for (var t; ti.__r = To.length; )
    t = To.sort(function(e, n) {
      return e.__v.__b - n.__v.__b;
    }), To = [], t.some(function(e) {
      var n, o, i, r, l, c;
      e.__d && (l = (r = (n = e).__v).__e, (c = n.__P) && (o = [], (i = Re({}, r)).__v = r.__v + 1, Yc(c, r, i, n.__n, c.ownerSVGElement !== void 0, r.__h != null ? [l] : null, o, l ?? ir(r), r.__h), vp(o, r), r.__e != l && pp(r)));
    });
}
function mp(t, e, n, o, i, r, l, c, _, h) {
  var s, d, f, a, u, b, p, m = o && o.__k || up, g = m.length;
  for (n.__k = [], s = 0; s < e.length; s++)
    if ((a = n.__k[s] = (a = e[s]) == null || typeof a == "boolean" ? null : typeof a == "string" || typeof a == "number" || typeof a == "bigint" ? ps(null, a, null, null, a) : Array.isArray(a) ? ps(Rl, { children: a }, null, null, null) : a.__b > 0 ? ps(a.type, a.props, a.key, a.ref ? a.ref : null, a.__v) : a) != null) {
      if (a.__ = n, a.__b = n.__b + 1, (f = m[s]) === null || f && a.key == f.key && a.type === f.type)
        m[s] = void 0;
      else
        for (d = 0; d < g; d++) {
          if ((f = m[d]) && a.key == f.key && a.type === f.type) {
            m[d] = void 0;
            break;
          }
          f = null;
        }
      Yc(t, a, f = f || Qs, i, r, l, c, _, h), u = a.__e, (d = a.ref) && f.ref != d && (p || (p = []), f.ref && p.push(f.ref, null, a), p.push(d, a.__c || u, a)), u != null ? (b == null && (b = u), typeof a.type == "function" && a.__k === f.__k ? a.__d = _ = gp(a, _, t) : _ = yp(t, a, f, m, u, _), typeof n.type == "function" && (n.__d = _)) : _ && f.__e == _ && _.parentNode != t && (_ = ir(f));
    }
  for (n.__e = b, s = g; s--; )
    m[s] != null && wp(m[s], m[s]);
  if (p)
    for (s = 0; s < p.length; s++)
      bp(p[s], p[++s], p[++s]);
}
function gp(t, e, n) {
  for (var o, i = t.__k, r = 0; i && r < i.length; r++)
    (o = i[r]) && (o.__ = t, e = typeof o.type == "function" ? gp(o, e, n) : yp(n, o, o, i, o.__e, e));
  return e;
}
function yp(t, e, n, o, i, r) {
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
function Kb(t, e, n, o, i) {
  var r;
  for (r in n)
    r === "children" || r === "key" || r in e || ei(t, r, null, n[r], o);
  for (r in e)
    i && typeof e[r] != "function" || r === "children" || r === "key" || r === "value" || r === "checked" || n[r] === e[r] || ei(t, r, e[r], n[r], o);
}
function K_(t, e, n) {
  e[0] === "-" ? t.setProperty(e, n) : t[e] = n == null ? "" : typeof n != "number" || Xb.test(e) ? n : n + "px";
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
            n && e in n || K_(t.style, e, "");
        if (n)
          for (e in n)
            o && n[e] === o[e] || K_(t.style, e, n[e]);
      }
    else if (e[0] === "o" && e[1] === "n")
      r = e !== (e = e.replace(/Capture$/, "")), e = e.toLowerCase() in t ? e.toLowerCase().slice(2) : e.slice(2), t.l || (t.l = {}), t.l[e + r] = n, n ? o || t.addEventListener(e, r ? J_ : Z_, r) : t.removeEventListener(e, r ? J_ : Z_, r);
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
function Z_(t) {
  this.l[t.type + !1](rt.event ? rt.event(t) : t);
}
function J_(t) {
  this.l[t.type + !0](rt.event ? rt.event(t) : t);
}
function Yc(t, e, n, o, i, r, l, c, _) {
  var h, s, d, f, a, u, b, p, m, g, w, k, C, A, E, y = e.type;
  if (e.constructor !== void 0)
    return null;
  n.__h != null && (_ = n.__h, c = e.__e = n.__e, e.__h = null, r = [c]), (h = rt.__b) && h(e);
  try {
    t:
      if (typeof y == "function") {
        if (p = e.props, m = (h = y.contextType) && o[h.__c], g = h ? m ? m.props.value : h.__ : o, n.__c ? b = (s = e.__c = n.__c).__ = s.__E : ("prototype" in y && y.prototype.render ? e.__c = s = new y(p, g) : (e.__c = s = new Mo(p, g), s.constructor = y, s.render = Jb), m && m.sub(s), s.props = p, s.state || (s.state = {}), s.context = g, s.__n = o, d = s.__d = !0, s.__h = [], s._sb = []), s.__s == null && (s.__s = s.state), y.getDerivedStateFromProps != null && (s.__s == s.state && (s.__s = Re({}, s.__s)), Re(s.__s, y.getDerivedStateFromProps(p, s.__s))), f = s.props, a = s.state, d)
          y.getDerivedStateFromProps == null && s.componentWillMount != null && s.componentWillMount(), s.componentDidMount != null && s.__h.push(s.componentDidMount);
        else {
          if (y.getDerivedStateFromProps == null && p !== f && s.componentWillReceiveProps != null && s.componentWillReceiveProps(p, g), !s.__e && s.shouldComponentUpdate != null && s.shouldComponentUpdate(p, s.__s, g) === !1 || e.__v === n.__v) {
            for (s.props = p, s.state = s.__s, e.__v !== n.__v && (s.__d = !1), s.__v = e, e.__e = n.__e, e.__k = n.__k, e.__k.forEach(function(x) {
              x && (x.__ = e);
            }), w = 0; w < s._sb.length; w++)
              s.__h.push(s._sb[w]);
            s._sb = [], s.__h.length && l.push(s);
            break t;
          }
          s.componentWillUpdate != null && s.componentWillUpdate(p, s.__s, g), s.componentDidUpdate != null && s.__h.push(function() {
            s.componentDidUpdate(f, a, u);
          });
        }
        if (s.context = g, s.props = p, s.__v = e, s.__P = t, k = rt.__r, C = 0, "prototype" in y && y.prototype.render) {
          for (s.state = s.__s, s.__d = !1, k && k(e), h = s.render(s.props, s.state, s.context), A = 0; A < s._sb.length; A++)
            s.__h.push(s._sb[A]);
          s._sb = [];
        } else
          do
            s.__d = !1, k && k(e), h = s.render(s.props, s.state, s.context), s.state = s.__s;
          while (s.__d && ++C < 25);
        s.state = s.__s, s.getChildContext != null && (o = Re(Re({}, o), s.getChildContext())), d || s.getSnapshotBeforeUpdate == null || (u = s.getSnapshotBeforeUpdate(f, a)), E = h != null && h.type === Rl && h.key == null ? h.props.children : h, mp(t, Array.isArray(E) ? E : [E], e, n, o, i, r, l, c, _), s.base = e.__e, e.__h = null, s.__h.length && l.push(s), b && (s.__E = s.__ = null), s.__e = !1;
      } else
        r == null && e.__v === n.__v ? (e.__k = n.__k, e.__e = n.__e) : e.__e = Zb(n.__e, e, n, o, i, r, l, _);
    (h = rt.diffed) && h(e);
  } catch (x) {
    e.__v = null, (_ || r != null) && (e.__e = c, e.__h = !!_, r[r.indexOf(c)] = null), rt.__e(x, e, n);
  }
}
function vp(t, e) {
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
function Zb(t, e, n, o, i, r, l, c) {
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
    if (r = r && Nl.call(t.childNodes), h = (d = n.props || Qs).dangerouslySetInnerHTML, s = f.dangerouslySetInnerHTML, !c) {
      if (r != null)
        for (d = {}, u = 0; u < t.attributes.length; u++)
          d[t.attributes[u].name] = t.attributes[u].value;
      (s || h) && (s && (h && s.__html == h.__html || s.__html === t.innerHTML) || (t.innerHTML = s && s.__html || ""));
    }
    if (Kb(t, f, d, i, c), s)
      e.__k = [];
    else if (u = e.props.children, mp(t, Array.isArray(u) ? u : [u], e, n, o, i && a !== "foreignObject", r, l, r ? r[0] : n.__k && ir(n, 0), c), r != null)
      for (u = r.length; u--; )
        r[u] != null && hp(r[u]);
    c || ("value" in f && (u = f.value) !== void 0 && (u !== t.value || a === "progress" && !u || a === "option" && u !== d.value) && ei(t, "value", u, d.value, !1), "checked" in f && (u = f.checked) !== void 0 && u !== t.checked && ei(t, "checked", u, d.checked, !1));
  }
  return t;
}
function bp(t, e, n) {
  try {
    typeof t == "function" ? t(e) : t.current = e;
  } catch (o) {
    rt.__e(o, n);
  }
}
function wp(t, e, n) {
  var o, i;
  if (rt.unmount && rt.unmount(t), (o = t.ref) && (o.current && o.current !== t.__e || bp(o, null, e)), (o = t.__c) != null) {
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
      o[i] && wp(o[i], e, n || typeof t.type != "function");
  n || t.__e == null || hp(t.__e), t.__ = t.__e = t.__d = void 0;
}
function Jb(t, e, n) {
  return this.constructor(t, n);
}
function Qb(t, e, n) {
  var o, i, r;
  rt.__ && rt.__(t, e), i = (o = typeof n == "function") ? null : n && n.__k || e.__k, r = [], Yc(e, t = (!o && n || e).__k = dp(Rl, null, [t]), i || Qs, Qs, e.ownerSVGElement !== void 0, !o && n ? [n] : i ? null : e.firstChild ? Nl.call(e.childNodes) : null, r, !o && n ? n : i ? i.__e : e.firstChild, o), vp(r, t);
}
Nl = up.slice, rt = { __e: function(t, e, n, o) {
  for (var i, r, l; e = e.__; )
    if ((i = e.__c) && !i.__)
      try {
        if ((r = i.constructor) && r.getDerivedStateFromError != null && (i.setState(r.getDerivedStateFromError(t)), l = i.__d), i.componentDidCatch != null && (i.componentDidCatch(t, o || {}), l = i.__d), l)
          return i.__E = i;
      } catch (c) {
        t = c;
      }
  throw t;
} }, fp = 0, Mo.prototype.setState = function(t, e) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = Re({}, this.state), typeof t == "function" && (t = t(Re({}, n), this.props)), t && Re(n, t), t != null && this.__v && (e && this._sb.push(e), X_(this));
}, Mo.prototype.forceUpdate = function(t) {
  this.__v && (this.__e = !0, t && this.__h.push(t), X_(this));
}, Mo.prototype.render = Rl, To = [], ti.__r = 0;
var t0 = 0;
function Nt(t, e, n, o, i) {
  var r, l, c = {};
  for (l in e)
    l == "ref" ? r = e[l] : c[l] = e[l];
  var _ = { type: t, props: c, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: --t0, __source: i, __self: o };
  if (typeof t == "function" && (r = t.defaultProps))
    for (l in r)
      c[l] === void 0 && (c[l] = r[l]);
  return rt.vnode && rt.vnode(_), _;
}
var ni = {}, e0 = {
  get exports() {
    return ni;
  },
  set exports(t) {
    ni = t;
  }
};
(function(t, e) {
  (function(n, o) {
    t.exports = o();
  })(pd, function() {
    var n = 1e3, o = 6e4, i = 36e5, r = "millisecond", l = "second", c = "minute", _ = "hour", h = "day", s = "week", d = "month", f = "quarter", a = "year", u = "date", b = "Invalid Date", p = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, m = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, g = { name: "en", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), ordinal: function(N) {
      var S = ["th", "st", "nd", "rd"], $ = N % 100;
      return "[" + N + (S[($ - 20) % 10] || S[$] || S[0]) + "]";
    } }, w = function(N, S, $) {
      var R = String(N);
      return !R || R.length >= S ? N : "" + Array(S + 1 - R.length).join($) + N;
    }, k = { s: w, z: function(N) {
      var S = -N.utcOffset(), $ = Math.abs(S), R = Math.floor($ / 60), T = $ % 60;
      return (S <= 0 ? "+" : "-") + w(R, 2, "0") + ":" + w(T, 2, "0");
    }, m: function N(S, $) {
      if (S.date() < $.date())
        return -N($, S);
      var R = 12 * ($.year() - S.year()) + ($.month() - S.month()), T = S.clone().add(R, d), O = $ - T < 0, P = S.clone().add(R + (O ? -1 : 1), d);
      return +(-(R + ($ - T) / (O ? T - P : P - T)) || 0);
    }, a: function(N) {
      return N < 0 ? Math.ceil(N) || 0 : Math.floor(N);
    }, p: function(N) {
      return { M: d, y: a, w: s, d: h, D: u, h: _, m: c, s: l, ms: r, Q: f }[N] || String(N || "").toLowerCase().replace(/s$/, "");
    }, u: function(N) {
      return N === void 0;
    } }, C = "en", A = {};
    A[C] = g;
    var E = function(N) {
      return N instanceof z;
    }, y = function N(S, $, R) {
      var T;
      if (!S)
        return C;
      if (typeof S == "string") {
        var O = S.toLowerCase();
        A[O] && (T = O), $ && (A[O] = $, T = O);
        var P = S.split("-");
        if (!T && P.length > 1)
          return N(P[0]);
      } else {
        var I = S.name;
        A[I] = S, T = I;
      }
      return !R && T && (C = T), T || !R && C;
    }, x = function(N, S) {
      if (E(N))
        return N.clone();
      var $ = typeof S == "object" ? S : {};
      return $.date = N, $.args = arguments, new z($);
    }, D = k;
    D.l = y, D.i = E, D.w = function(N, S) {
      return x(N, { locale: S.$L, utc: S.$u, x: S.$x, $offset: S.$offset });
    };
    var z = function() {
      function N($) {
        this.$L = y($.locale, null, !0), this.parse($);
      }
      var S = N.prototype;
      return S.parse = function($) {
        this.$d = function(R) {
          var T = R.date, O = R.utc;
          if (T === null)
            return new Date(NaN);
          if (D.u(T))
            return new Date();
          if (T instanceof Date)
            return new Date(T);
          if (typeof T == "string" && !/Z$/i.test(T)) {
            var P = T.match(p);
            if (P) {
              var I = P[2] - 1 || 0, V = (P[7] || "0").substring(0, 3);
              return O ? new Date(Date.UTC(P[1], I, P[3] || 1, P[4] || 0, P[5] || 0, P[6] || 0, V)) : new Date(P[1], I, P[3] || 1, P[4] || 0, P[5] || 0, P[6] || 0, V);
            }
          }
          return new Date(T);
        }($), this.$x = $.x || {}, this.init();
      }, S.init = function() {
        var $ = this.$d;
        this.$y = $.getFullYear(), this.$M = $.getMonth(), this.$D = $.getDate(), this.$W = $.getDay(), this.$H = $.getHours(), this.$m = $.getMinutes(), this.$s = $.getSeconds(), this.$ms = $.getMilliseconds();
      }, S.$utils = function() {
        return D;
      }, S.isValid = function() {
        return this.$d.toString() !== b;
      }, S.isSame = function($, R) {
        var T = x($);
        return this.startOf(R) <= T && T <= this.endOf(R);
      }, S.isAfter = function($, R) {
        return x($) < this.startOf(R);
      }, S.isBefore = function($, R) {
        return this.endOf(R) < x($);
      }, S.$g = function($, R, T) {
        return D.u($) ? this[R] : this.set(T, $);
      }, S.unix = function() {
        return Math.floor(this.valueOf() / 1e3);
      }, S.valueOf = function() {
        return this.$d.getTime();
      }, S.startOf = function($, R) {
        var T = this, O = !!D.u(R) || R, P = D.p($), I = function(st, G) {
          var it = D.w(T.$u ? Date.UTC(T.$y, G, st) : new Date(T.$y, G, st), T);
          return O ? it : it.endOf(h);
        }, V = function(st, G) {
          return D.w(T.toDate()[st].apply(T.toDate("s"), (O ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(G)), T);
        }, j = this.$W, X = this.$M, vt = this.$D, U = "set" + (this.$u ? "UTC" : "");
        switch (P) {
          case a:
            return O ? I(1, 0) : I(31, 11);
          case d:
            return O ? I(1, X) : I(0, X + 1);
          case s:
            var K = this.$locale().weekStart || 0, yt = (j < K ? j + 7 : j) - K;
            return I(O ? vt - yt : vt + (6 - yt), X);
          case h:
          case u:
            return V(U + "Hours", 0);
          case _:
            return V(U + "Minutes", 1);
          case c:
            return V(U + "Seconds", 2);
          case l:
            return V(U + "Milliseconds", 3);
          default:
            return this.clone();
        }
      }, S.endOf = function($) {
        return this.startOf($, !1);
      }, S.$set = function($, R) {
        var T, O = D.p($), P = "set" + (this.$u ? "UTC" : ""), I = (T = {}, T[h] = P + "Date", T[u] = P + "Date", T[d] = P + "Month", T[a] = P + "FullYear", T[_] = P + "Hours", T[c] = P + "Minutes", T[l] = P + "Seconds", T[r] = P + "Milliseconds", T)[O], V = O === h ? this.$D + (R - this.$W) : R;
        if (O === d || O === a) {
          var j = this.clone().set(u, 1);
          j.$d[I](V), j.init(), this.$d = j.set(u, Math.min(this.$D, j.daysInMonth())).$d;
        } else
          I && this.$d[I](V);
        return this.init(), this;
      }, S.set = function($, R) {
        return this.clone().$set($, R);
      }, S.get = function($) {
        return this[D.p($)]();
      }, S.add = function($, R) {
        var T, O = this;
        $ = Number($);
        var P = D.p(R), I = function(X) {
          var vt = x(O);
          return D.w(vt.date(vt.date() + Math.round(X * $)), O);
        };
        if (P === d)
          return this.set(d, this.$M + $);
        if (P === a)
          return this.set(a, this.$y + $);
        if (P === h)
          return I(1);
        if (P === s)
          return I(7);
        var V = (T = {}, T[c] = o, T[_] = i, T[l] = n, T)[P] || 1, j = this.$d.getTime() + $ * V;
        return D.w(j, this);
      }, S.subtract = function($, R) {
        return this.add(-1 * $, R);
      }, S.format = function($) {
        var R = this, T = this.$locale();
        if (!this.isValid())
          return T.invalidDate || b;
        var O = $ || "YYYY-MM-DDTHH:mm:ssZ", P = D.z(this), I = this.$H, V = this.$m, j = this.$M, X = T.weekdays, vt = T.months, U = function(G, it, Et, At) {
          return G && (G[it] || G(R, O)) || Et[it].slice(0, At);
        }, K = function(G) {
          return D.s(I % 12 || 12, G, "0");
        }, yt = T.meridiem || function(G, it, Et) {
          var At = G < 12 ? "AM" : "PM";
          return Et ? At.toLowerCase() : At;
        }, st = { YY: String(this.$y).slice(-2), YYYY: this.$y, M: j + 1, MM: D.s(j + 1, 2, "0"), MMM: U(T.monthsShort, j, vt, 3), MMMM: U(vt, j), D: this.$D, DD: D.s(this.$D, 2, "0"), d: String(this.$W), dd: U(T.weekdaysMin, this.$W, X, 2), ddd: U(T.weekdaysShort, this.$W, X, 3), dddd: X[this.$W], H: String(I), HH: D.s(I, 2, "0"), h: K(1), hh: K(2), a: yt(I, V, !0), A: yt(I, V, !1), m: String(V), mm: D.s(V, 2, "0"), s: String(this.$s), ss: D.s(this.$s, 2, "0"), SSS: D.s(this.$ms, 3, "0"), Z: P };
        return O.replace(m, function(G, it) {
          return it || st[G] || P.replace(":", "");
        });
      }, S.utcOffset = function() {
        return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
      }, S.diff = function($, R, T) {
        var O, P = D.p(R), I = x($), V = (I.utcOffset() - this.utcOffset()) * o, j = this - I, X = D.m(this, I);
        return X = (O = {}, O[a] = X / 12, O[d] = X, O[f] = X / 3, O[s] = (j - V) / 6048e5, O[h] = (j - V) / 864e5, O[_] = j / i, O[c] = j / o, O[l] = j / n, O)[P] || j, T ? X : D.a(X);
      }, S.daysInMonth = function() {
        return this.endOf(d).$D;
      }, S.$locale = function() {
        return A[this.$L];
      }, S.locale = function($, R) {
        if (!$)
          return this.$L;
        var T = this.clone(), O = y($, R, !0);
        return O && (T.$L = O), T;
      }, S.clone = function() {
        return D.w(this.$d, this);
      }, S.toDate = function() {
        return new Date(this.valueOf());
      }, S.toJSON = function() {
        return this.isValid() ? this.toISOString() : null;
      }, S.toISOString = function() {
        return this.$d.toISOString();
      }, S.toString = function() {
        return this.$d.toUTCString();
      }, N;
    }(), B = z.prototype;
    return x.prototype = B, [["$ms", r], ["$s", l], ["$m", c], ["$H", _], ["$W", h], ["$M", d], ["$y", a], ["$D", u]].forEach(function(N) {
      B[N[1]] = function(S) {
        return this.$g(S, N[0], N[1]);
      };
    }), x.extend = function(N, S) {
      return N.$i || (N(S, z, x), N.$i = !0), x;
    }, x.locale = y, x.isDayjs = E, x.unix = function(N) {
      return x(1e3 * N);
    }, x.en = A[C], x.Ls = A, x.p = {}, x;
  });
})(e0);
const n0 = (t) => {
  const e = ni(`1989-01-01 ${t || "00:00:00"}`);
  return {
    hour: e.hour(),
    minute: e.minute(),
    second: e.second()
  };
};
function o0() {
  let t = new Array(24).fill(0), e = new Array(60).fill(0), n = new Array(60).fill(0);
  return t = t.map((o, i) => o + i), e = e.map((o, i) => o + i), n = n.map((o, i) => o + i), { hourList: t, minuteList: e, secondList: n };
}
class r0 extends Mo {
  constructor() {
    super(...arguments);
    L(this, "cellHeight", 24);
    L(this, "ref", Xr());
    L(this, "hourRef", Xr());
    L(this, "minuteRef", Xr());
    L(this, "secondRef", Xr());
    L(this, "state", {
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
    const i = n0(this.state.selectTime);
    return o.map((r) => {
      const l = i[n] === r, c = { ...i, [n]: r };
      return /* @__PURE__ */ Nt(
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
    const { showSeconds: n, style: o } = this.props, { hourList: i, minuteList: r, secondList: l } = o0();
    return /* @__PURE__ */ Nt("div", { className: F("timepicker-timepanel", "pt-px"), style: o, ref: this.ref, children: [
      /* @__PURE__ */ Nt("div", { className: F("flex", " justify-around", "p-px", "not-hide-timepicker"), children: [
        /* @__PURE__ */ Nt("div", { className: "overflow-hidden", children: /* @__PURE__ */ Nt("div", { className: "timepicker-timepanel-select-col", ref: this.hourRef, children: this.renderColumn("hour", i) }) }),
        /* @__PURE__ */ Nt("div", { className: "overflow-hidden", children: /* @__PURE__ */ Nt("div", { className: "timepicker-timepanel-select-col", ref: this.minuteRef, children: this.renderColumn("minute", r) }) }),
        n && /* @__PURE__ */ Nt("div", { className: "overflow-hidden", children: /* @__PURE__ */ Nt("div", { className: "timepicker-timepanel-select-col", ref: this.secondRef, children: this.renderColumn("second", l) }) })
      ] }),
      /* @__PURE__ */ Nt("div", { className: F("timepicker-timepanel-actions", "flex", "p-px", "justify-between", "align-center"), children: [
        /* @__PURE__ */ Nt("button", { className: F("btn", "size-sm", "ghost", "text-primary"), type: "button", onClick: this.onClear.bind(this), children: "清除" }),
        /* @__PURE__ */ Nt("button", { className: F("btn", "size-sm", "ghost", "text-primary"), type: "button", onClick: this.onSubmit.bind(this), children: "确认" })
      ] })
    ] });
  }
}
function Br(t) {
  return t.split("-")[1];
}
function Gc(t) {
  return t === "y" ? "height" : "width";
}
function Yn(t) {
  return t.split("-")[0];
}
function Pl(t) {
  return ["top", "bottom"].includes(Yn(t)) ? "x" : "y";
}
function Q_(t, e, n) {
  let {
    reference: o,
    floating: i
  } = t;
  const r = o.x + o.width / 2 - i.width / 2, l = o.y + o.height / 2 - i.height / 2, c = Pl(e), _ = Gc(c), h = o[_] / 2 - i[_] / 2, s = Yn(e), d = c === "x";
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
  switch (Br(e)) {
    case "start":
      f[c] -= h * (n && d ? -1 : 1);
      break;
    case "end":
      f[c] += h * (n && d ? -1 : 1);
      break;
  }
  return f;
}
const s0 = async (t, e, n) => {
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
  } = Q_(h, o, _), f = o, a = {}, u = 0;
  for (let b = 0; b < c.length; b++) {
    const {
      name: p,
      fn: m
    } = c[b], {
      x: g,
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
    if (s = g ?? s, d = w ?? d, a = {
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
      } = Q_(h, f, _)), b = -1;
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
function i0(t) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...t
  };
}
function $p(t) {
  return typeof t != "number" ? i0(t) : {
    top: t,
    right: t,
    bottom: t,
    left: t
  };
}
function oi(t) {
  return {
    ...t,
    top: t.y,
    left: t.x,
    right: t.x + t.width,
    bottom: t.y + t.height
  };
}
async function l0(t, e) {
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
  } = e, u = $p(a), p = c[f ? d === "floating" ? "reference" : "floating" : d], m = oi(await r.getClippingRect({
    element: (n = await (r.isElement == null ? void 0 : r.isElement(p))) == null || n ? p : p.contextElement || await (r.getDocumentElement == null ? void 0 : r.getDocumentElement(c.floating)),
    boundary: h,
    rootBoundary: s,
    strategy: _
  })), g = d === "floating" ? {
    ...l.floating,
    x: o,
    y: i
  } : l.reference, w = await (r.getOffsetParent == null ? void 0 : r.getOffsetParent(c.floating)), k = await (r.isElement == null ? void 0 : r.isElement(w)) ? await (r.getScale == null ? void 0 : r.getScale(w)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, C = oi(r.convertOffsetParentRelativeRectToViewportRelativeRect ? await r.convertOffsetParentRelativeRectToViewportRelativeRect({
    rect: g,
    offsetParent: w,
    strategy: _
  }) : g);
  return {
    top: (m.top - C.top + u.top) / k.y,
    bottom: (C.bottom - m.bottom + u.bottom) / k.y,
    left: (m.left - C.left + u.left) / k.x,
    right: (C.right - m.right + u.right) / k.x
  };
}
const c0 = Math.min, a0 = Math.max;
function _0(t, e, n) {
  return a0(t, c0(e, n));
}
const f0 = (t) => ({
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
    const h = $p(o), s = {
      x: i,
      y: r
    }, d = Pl(l), f = Gc(d), a = await _.getDimensions(n), u = d === "y" ? "top" : "left", b = d === "y" ? "bottom" : "right", p = c.reference[f] + c.reference[d] - s[d] - c.floating[f], m = s[d] - c.reference[d], g = await (_.getOffsetParent == null ? void 0 : _.getOffsetParent(n));
    let w = g ? d === "y" ? g.clientHeight || 0 : g.clientWidth || 0 : 0;
    w === 0 && (w = c.floating[f]);
    const k = p / 2 - m / 2, C = h[u], A = w - a[f] - h[b], E = w / 2 - a[f] / 2 + k, y = _0(C, E, A), D = Br(l) != null && E != y && c.reference[f] / 2 - (E < C ? h[u] : h[b]) - a[f] / 2 < 0 ? E < C ? C - E : A - E : 0;
    return {
      [d]: s[d] - D,
      data: {
        [d]: y,
        centerOffset: E - y
      }
    };
  }
}), u0 = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function ri(t) {
  return t.replace(/left|right|bottom|top/g, (e) => u0[e]);
}
function h0(t, e, n) {
  n === void 0 && (n = !1);
  const o = Br(t), i = Pl(t), r = Gc(i);
  let l = i === "x" ? o === (n ? "end" : "start") ? "right" : "left" : o === "start" ? "bottom" : "top";
  return e.reference[r] > e.floating[r] && (l = ri(l)), {
    main: l,
    cross: ri(l)
  };
}
const d0 = {
  start: "end",
  end: "start"
};
function mc(t) {
  return t.replace(/start|end/g, (e) => d0[e]);
}
function p0(t) {
  const e = ri(t);
  return [mc(t), e, mc(e)];
}
function m0(t, e, n) {
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
function g0(t, e, n, o) {
  const i = Br(t);
  let r = m0(Yn(t), n === "start", o);
  return i && (r = r.map((l) => l + "-" + i), e && (r = r.concat(r.map(mc)))), r;
}
const y0 = function(t) {
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
      } = t, p = Yn(o), m = Yn(l) === l, g = await (c.isRTL == null ? void 0 : c.isRTL(_.floating)), w = d || (m || !u ? [ri(l)] : p0(l));
      !d && a !== "none" && w.push(...g0(l, u, a, g));
      const k = [l, ...w], C = await l0(e, b), A = [];
      let E = ((n = i.flip) == null ? void 0 : n.overflows) || [];
      if (h && A.push(C[p]), s) {
        const {
          main: D,
          cross: z
        } = h0(o, r, g);
        A.push(C[D], C[z]);
      }
      if (E = [...E, {
        placement: o,
        overflows: A
      }], !A.every((D) => D <= 0)) {
        var y;
        const D = (((y = i.flip) == null ? void 0 : y.index) || 0) + 1, z = k[D];
        if (z)
          return {
            data: {
              index: D,
              overflows: E
            },
            reset: {
              placement: z
            }
          };
        let B = "bottom";
        switch (f) {
          case "bestFit": {
            var x;
            const N = (x = E.map((S) => [S, S.overflows.filter(($) => $ > 0).reduce(($, R) => $ + R, 0)]).sort((S, $) => S[1] - $[1])[0]) == null ? void 0 : x[0].placement;
            N && (B = N);
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
async function v0(t, e) {
  const {
    placement: n,
    platform: o,
    elements: i
  } = t, r = await (o.isRTL == null ? void 0 : o.isRTL(i.floating)), l = Yn(n), c = Br(n), _ = Pl(n) === "x", h = ["left", "top"].includes(l) ? -1 : 1, s = r && _ ? -1 : 1, d = typeof e == "function" ? e(t) : e;
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
const b0 = function(t) {
  return t === void 0 && (t = 0), {
    name: "offset",
    options: t,
    async fn(e) {
      const {
        x: n,
        y: o
      } = e, i = await v0(e, t);
      return {
        x: n + i.x,
        y: o + i.y,
        data: i
      };
    }
  };
};
function Wt(t) {
  var e;
  return ((e = t.ownerDocument) == null ? void 0 : e.defaultView) || window;
}
function ee(t) {
  return Wt(t).getComputedStyle(t);
}
function Ve(t) {
  return xp(t) ? (t.nodeName || "").toLowerCase() : "";
}
let Kr;
function kp() {
  if (Kr)
    return Kr;
  const t = navigator.userAgentData;
  return t && Array.isArray(t.brands) ? (Kr = t.brands.map((e) => e.brand + "/" + e.version).join(" "), Kr) : navigator.userAgent;
}
function he(t) {
  return t instanceof Wt(t).HTMLElement;
}
function ze(t) {
  return t instanceof Wt(t).Element;
}
function xp(t) {
  return t instanceof Wt(t).Node;
}
function tf(t) {
  if (typeof ShadowRoot > "u")
    return !1;
  const e = Wt(t).ShadowRoot;
  return t instanceof e || t instanceof ShadowRoot;
}
function Ol(t) {
  const {
    overflow: e,
    overflowX: n,
    overflowY: o,
    display: i
  } = ee(t);
  return /auto|scroll|overlay|hidden|clip/.test(e + o + n) && !["inline", "contents"].includes(i);
}
function w0(t) {
  return ["table", "td", "th"].includes(Ve(t));
}
function qc(t) {
  const e = /firefox/i.test(kp()), n = ee(t), o = n.backdropFilter || n.WebkitBackdropFilter;
  return n.transform !== "none" || n.perspective !== "none" || (o ? o !== "none" : !1) || e && n.willChange === "filter" || e && (n.filter ? n.filter !== "none" : !1) || ["transform", "perspective"].some((i) => n.willChange.includes(i)) || ["paint", "layout", "strict", "content"].some(
    // TS 4.1 compat
    (i) => {
      const r = n.contain;
      return r != null ? r.includes(i) : !1;
    }
  );
}
function Sp() {
  return !/^((?!chrome|android).)*safari/i.test(kp());
}
function Xc(t) {
  return ["html", "body", "#document"].includes(Ve(t));
}
const ef = Math.min, Lo = Math.max, si = Math.round;
function Cp(t) {
  const e = ee(t);
  let n = parseFloat(e.width), o = parseFloat(e.height);
  const i = t.offsetWidth, r = t.offsetHeight, l = si(n) !== i || si(o) !== r;
  return l && (n = i, o = r), {
    width: n,
    height: o,
    fallback: l
  };
}
function Ep(t) {
  return ze(t) ? t : t.contextElement;
}
const Ap = {
  x: 1,
  y: 1
};
function dn(t) {
  const e = Ep(t);
  if (!he(e))
    return Ap;
  const n = e.getBoundingClientRect(), {
    width: o,
    height: i,
    fallback: r
  } = Cp(e);
  let l = (r ? si(n.width) : n.width) / o, c = (r ? si(n.height) : n.height) / i;
  return (!l || !Number.isFinite(l)) && (l = 1), (!c || !Number.isFinite(c)) && (c = 1), {
    x: l,
    y: c
  };
}
function lr(t, e, n, o) {
  var i, r;
  e === void 0 && (e = !1), n === void 0 && (n = !1);
  const l = t.getBoundingClientRect(), c = Ep(t);
  let _ = Ap;
  e && (o ? ze(o) && (_ = dn(o)) : _ = dn(t));
  const h = c ? Wt(c) : window, s = !Sp() && n;
  let d = (l.left + (s && ((i = h.visualViewport) == null ? void 0 : i.offsetLeft) || 0)) / _.x, f = (l.top + (s && ((r = h.visualViewport) == null ? void 0 : r.offsetTop) || 0)) / _.y, a = l.width / _.x, u = l.height / _.y;
  if (c) {
    const b = Wt(c), p = o && ze(o) ? Wt(o) : o;
    let m = b.frameElement;
    for (; m && o && p !== b; ) {
      const g = dn(m), w = m.getBoundingClientRect(), k = getComputedStyle(m);
      w.x += (m.clientLeft + parseFloat(k.paddingLeft)) * g.x, w.y += (m.clientTop + parseFloat(k.paddingTop)) * g.y, d *= g.x, f *= g.y, a *= g.x, u *= g.y, d += w.x, f += w.y, m = Wt(m).frameElement;
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
function Xe(t) {
  return ((xp(t) ? t.ownerDocument : t.document) || window.document).documentElement;
}
function Hl(t) {
  return ze(t) ? {
    scrollLeft: t.scrollLeft,
    scrollTop: t.scrollTop
  } : {
    scrollLeft: t.pageXOffset,
    scrollTop: t.pageYOffset
  };
}
function Tp(t) {
  return lr(Xe(t)).left + Hl(t).scrollLeft;
}
function $0(t, e, n) {
  const o = he(e), i = Xe(e), r = lr(t, !0, n === "fixed", e);
  let l = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const c = {
    x: 0,
    y: 0
  };
  if (o || !o && n !== "fixed")
    if ((Ve(e) !== "body" || Ol(i)) && (l = Hl(e)), he(e)) {
      const _ = lr(e, !0);
      c.x = _.x + e.clientLeft, c.y = _.y + e.clientTop;
    } else
      i && (c.x = Tp(i));
  return {
    x: r.left + l.scrollLeft - c.x,
    y: r.top + l.scrollTop - c.y,
    width: r.width,
    height: r.height
  };
}
function cr(t) {
  if (Ve(t) === "html")
    return t;
  const e = (
    // Step into the shadow DOM of the parent of a slotted node
    t.assignedSlot || // DOM Element detected
    t.parentNode || // ShadowRoot detected
    (tf(t) ? t.host : null) || // Fallback
    Xe(t)
  );
  return tf(e) ? e.host : e;
}
function nf(t) {
  return !he(t) || ee(t).position === "fixed" ? null : t.offsetParent;
}
function k0(t) {
  let e = cr(t);
  for (; he(e) && !Xc(e); ) {
    if (qc(e))
      return e;
    e = cr(e);
  }
  return null;
}
function of(t) {
  const e = Wt(t);
  let n = nf(t);
  for (; n && w0(n) && ee(n).position === "static"; )
    n = nf(n);
  return n && (Ve(n) === "html" || Ve(n) === "body" && ee(n).position === "static" && !qc(n)) ? e : n || k0(t) || e;
}
function x0(t) {
  return Cp(t);
}
function S0(t) {
  let {
    rect: e,
    offsetParent: n,
    strategy: o
  } = t;
  const i = he(n), r = Xe(n);
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
  if ((i || !i && o !== "fixed") && ((Ve(n) !== "body" || Ol(r)) && (l = Hl(n)), he(n))) {
    const h = lr(n);
    c = dn(n), _.x = h.x + n.clientLeft, _.y = h.y + n.clientTop;
  }
  return {
    width: e.width * c.x,
    height: e.height * c.y,
    x: e.x * c.x - l.scrollLeft * c.x + _.x,
    y: e.y * c.y - l.scrollTop * c.y + _.y
  };
}
function C0(t, e) {
  const n = Wt(t), o = Xe(t), i = n.visualViewport;
  let r = o.clientWidth, l = o.clientHeight, c = 0, _ = 0;
  if (i) {
    r = i.width, l = i.height;
    const h = Sp();
    (h || !h && e === "fixed") && (c = i.offsetLeft, _ = i.offsetTop);
  }
  return {
    width: r,
    height: l,
    x: c,
    y: _
  };
}
function E0(t) {
  var e;
  const n = Xe(t), o = Hl(t), i = (e = t.ownerDocument) == null ? void 0 : e.body, r = Lo(n.scrollWidth, n.clientWidth, i ? i.scrollWidth : 0, i ? i.clientWidth : 0), l = Lo(n.scrollHeight, n.clientHeight, i ? i.scrollHeight : 0, i ? i.clientHeight : 0);
  let c = -o.scrollLeft + Tp(t);
  const _ = -o.scrollTop;
  return ee(i || n).direction === "rtl" && (c += Lo(n.clientWidth, i ? i.clientWidth : 0) - r), {
    width: r,
    height: l,
    x: c,
    y: _
  };
}
function Mp(t) {
  const e = cr(t);
  return Xc(e) ? t.ownerDocument.body : he(e) && Ol(e) ? e : Mp(e);
}
function Lp(t, e) {
  var n;
  e === void 0 && (e = []);
  const o = Mp(t), i = o === ((n = t.ownerDocument) == null ? void 0 : n.body), r = Wt(o);
  return i ? e.concat(r, r.visualViewport || [], Ol(o) ? o : []) : e.concat(o, Lp(o));
}
function A0(t, e) {
  const n = lr(t, !0, e === "fixed"), o = n.top + t.clientTop, i = n.left + t.clientLeft, r = he(t) ? dn(t) : {
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
function rf(t, e, n) {
  return e === "viewport" ? oi(C0(t, n)) : ze(e) ? A0(e, n) : oi(E0(Xe(t)));
}
function T0(t, e) {
  const n = e.get(t);
  if (n)
    return n;
  let o = Lp(t).filter((c) => ze(c) && Ve(c) !== "body"), i = null;
  const r = ee(t).position === "fixed";
  let l = r ? cr(t) : t;
  for (; ze(l) && !Xc(l); ) {
    const c = ee(l), _ = qc(l);
    (r ? !_ && !i : !_ && c.position === "static" && !!i && ["absolute", "fixed"].includes(i.position)) ? o = o.filter((s) => s !== l) : i = c, l = cr(l);
  }
  return e.set(t, o), o;
}
function M0(t) {
  let {
    element: e,
    boundary: n,
    rootBoundary: o,
    strategy: i
  } = t;
  const l = [...n === "clippingAncestors" ? T0(e, this._c) : [].concat(n), o], c = l[0], _ = l.reduce((h, s) => {
    const d = rf(e, s, i);
    return h.top = Lo(d.top, h.top), h.right = ef(d.right, h.right), h.bottom = ef(d.bottom, h.bottom), h.left = Lo(d.left, h.left), h;
  }, rf(e, c, i));
  return {
    width: _.right - _.left,
    height: _.bottom - _.top,
    x: _.left,
    y: _.top
  };
}
const L0 = {
  getClippingRect: M0,
  convertOffsetParentRelativeRectToViewportRelativeRect: S0,
  isElement: ze,
  getDimensions: x0,
  getOffsetParent: of,
  getDocumentElement: Xe,
  getScale: dn,
  async getElementRects(t) {
    let {
      reference: e,
      floating: n,
      strategy: o
    } = t;
    const i = this.getOffsetParent || of, r = this.getDimensions;
    return {
      reference: $0(e, await i(n), o),
      floating: {
        x: 0,
        y: 0,
        ...await r(n)
      }
    };
  },
  getClientRects: (t) => Array.from(t.getClientRects()),
  isRTL: (t) => ee(t).direction === "rtl"
}, D0 = (t, e, n) => {
  const o = /* @__PURE__ */ new Map(), i = {
    platform: L0,
    ...n
  }, r = {
    ...i.platform,
    _c: o
  };
  return s0(t, e, {
    ...i,
    platform: r
  });
};
var Nn, Rn, nn, Lr, wt, zi, Dp, Yi, Np, Gi, Rp, qi, Pp, Xi, Op, Ki, Hp, Zi;
class Kt extends jt {
  constructor() {
    super(...arguments);
    M(this, zi);
    M(this, Yi);
    M(this, Gi);
    M(this, qi);
    M(this, Xi);
    M(this, Ki);
    M(this, Nn, void 0);
    M(this, Rn, 0);
    M(this, nn, void 0);
    M(this, Lr, void 0);
    M(this, wt, void 0);
    L(this, "hideLater", () => {
      v(this, Zi).call(this), H(this, Rn, window.setTimeout(this.hide.bind(this), 100));
    });
    M(this, Zi, () => {
      clearTimeout(v(this, Rn)), H(this, Rn, 0);
    });
  }
  get isShown() {
    var n;
    return (n = v(this, nn)) == null ? void 0 : n.classList.contains(this.constructor.CLASS_SHOW);
  }
  get timepicker() {
    return v(this, nn) || W(this, Gi, Rp).call(this);
  }
  get trigger() {
    return v(this, Lr) || this.element;
  }
  get elementShowClass() {
    return `with-${this.constructor.NAME}-show`;
  }
  show(n) {
    return H(this, Lr, n), !this.timepicker || !this.element ? !1 : (this.element.classList.add(this.elementShowClass), this.timepicker.classList.add(this.constructor.CLASS_SHOW), W(this, Xi, Op).call(this), !0);
  }
  hide() {
    var n;
    return this.element.classList.remove(this.elementShowClass), (n = v(this, nn)) == null || n.classList.remove(this.constructor.CLASS_SHOW), !0;
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
}
Nn = new WeakMap(), Rn = new WeakMap(), nn = new WeakMap(), Lr = new WeakMap(), wt = new WeakMap(), zi = new WeakSet(), Dp = function() {
  const { arrow: n } = this.options;
  return typeof n == "number" ? n : 4;
}, Yi = new WeakSet(), Np = function() {
  const n = document.createElement("div");
  return H(this, wt, n), v(this, wt).style.position = "absolute", v(this, wt).style.width = "8px", v(this, wt).style.height = "8px", v(this, wt).style.transform = "rotate(45deg)", v(this, wt).style.background = "inherit", v(this, wt).style.border = "inherit", v(this, wt).style.borderBottomStyle = "none", v(this, wt).style.borderRightStyle = "none", n;
}, Gi = new WeakSet(), Rp = function() {
  const n = this.constructor.CLASSNAME, o = document.createElement("div");
  return o.classList.add(n), Qb(dp(r0, { ...this.options }), o), this.options.arrow && o.append(W(this, Yi, Np).call(this)), o.style.width = "max-content", o.style.position = "absolute", o.style.top = "0", o.style.left = "0", document.body.appendChild(o), H(this, nn, o), o;
}, qi = new WeakSet(), Pp = function() {
  var i;
  const n = W(this, zi, Dp).call(this), o = {
    middleware: [b0(n + 3), y0()]
  };
  return this.options.arrow && v(this, wt) && ((i = o.middleware) == null || i.push(f0({ element: v(this, wt) }))), this.options.placement && (o.placement = this.options.placement), o;
}, Xi = new WeakSet(), Op = function() {
  const n = W(this, qi, Pp).call(this);
  D0(W(this, Ki, Hp).call(this), this.timepicker, n).then(({ x: o, y: i, middlewareData: r }) => {
    if (Object.assign(this.timepicker.style, {
      left: `${o}px`,
      top: `${i}px`
    }), this.options.placement) {
      const l = this.options.placement.split("-")[0], c = {
        top: "bottom",
        right: "left",
        bottom: "top",
        left: "right"
      }[l];
      if (r.arrow && v(this, wt)) {
        const { x: _, y: h } = r.arrow;
        Object.assign(v(this, wt).style, {
          left: _ != null ? `${_}px` : "",
          top: h != null ? `${h}px` : "",
          [c]: `${-v(this, wt).offsetWidth / 2}px`
        });
      }
    }
  });
}, Ki = new WeakSet(), Hp = function() {
  return v(this, Nn) || H(this, Nn, {
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
  }), v(this, Nn);
}, Zi = new WeakMap(), L(Kt, "NAME", "timepicker"), L(Kt, "CLASSNAME", "timepicker"), L(Kt, "CLASS_SHOW", "show"), L(Kt, "MENU_SELECTOR", ".form-time input:not(.disabled):not(:disabled)"), L(Kt, "DEFAULT", {
  value: ni().format("HH:mm:ss"),
  showSeconds: !1,
  placement: "bottom-start",
  strategy: "absolute",
  // trigger: 'click',
  arrow: !0
});
document.addEventListener("click", function(t) {
  const n = t.target.closest(Kt.MENU_SELECTOR);
  n ? Kt.ensure(n).toggle() : Kt.clear({ event: t });
});
const N0 = (t) => {
  const e = document.getElementsByClassName("with-timepicker-show")[0];
  if (!e)
    return;
  const n = typeof e.closest == "function" ? e.closest(Kt.MENU_SELECTOR) : null;
  !n || !t.target.contains(n) || Kt.clear({ event: t });
};
window.addEventListener("scroll", N0, !0);
class sf extends xt {
}
L(sf, "NAME", "toolbar"), L(sf, "Component", Vn);
function jr(t) {
  return t.split("-")[1];
}
function Kc(t) {
  return t === "y" ? "height" : "width";
}
function Gn(t) {
  return t.split("-")[0];
}
function Wl(t) {
  return ["top", "bottom"].includes(Gn(t)) ? "x" : "y";
}
function lf(t, e, n) {
  let {
    reference: o,
    floating: i
  } = t;
  const r = o.x + o.width / 2 - i.width / 2, l = o.y + o.height / 2 - i.height / 2, c = Wl(e), _ = Kc(c), h = o[_] / 2 - i[_] / 2, s = Gn(e), d = c === "x";
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
  switch (jr(e)) {
    case "start":
      f[c] -= h * (n && d ? -1 : 1);
      break;
    case "end":
      f[c] += h * (n && d ? -1 : 1);
      break;
  }
  return f;
}
const R0 = async (t, e, n) => {
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
  } = lf(h, o, _), f = o, a = {}, u = 0;
  for (let b = 0; b < c.length; b++) {
    const {
      name: p,
      fn: m
    } = c[b], {
      x: g,
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
    if (s = g ?? s, d = w ?? d, a = {
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
      } = lf(h, f, _)), b = -1;
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
function P0(t) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...t
  };
}
function Wp(t) {
  return typeof t != "number" ? P0(t) : {
    top: t,
    right: t,
    bottom: t,
    left: t
  };
}
function ii(t) {
  return {
    ...t,
    top: t.y,
    left: t.x,
    right: t.x + t.width,
    bottom: t.y + t.height
  };
}
async function O0(t, e) {
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
  } = e, u = Wp(a), p = c[f ? d === "floating" ? "reference" : "floating" : d], m = ii(await r.getClippingRect({
    element: (n = await (r.isElement == null ? void 0 : r.isElement(p))) == null || n ? p : p.contextElement || await (r.getDocumentElement == null ? void 0 : r.getDocumentElement(c.floating)),
    boundary: h,
    rootBoundary: s,
    strategy: _
  })), g = d === "floating" ? {
    ...l.floating,
    x: o,
    y: i
  } : l.reference, w = await (r.getOffsetParent == null ? void 0 : r.getOffsetParent(c.floating)), k = await (r.isElement == null ? void 0 : r.isElement(w)) ? await (r.getScale == null ? void 0 : r.getScale(w)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, C = ii(r.convertOffsetParentRelativeRectToViewportRelativeRect ? await r.convertOffsetParentRelativeRectToViewportRelativeRect({
    rect: g,
    offsetParent: w,
    strategy: _
  }) : g);
  return {
    top: (m.top - C.top + u.top) / k.y,
    bottom: (C.bottom - m.bottom + u.bottom) / k.y,
    left: (m.left - C.left + u.left) / k.x,
    right: (C.right - m.right + u.right) / k.x
  };
}
const H0 = Math.min, W0 = Math.max;
function I0(t, e, n) {
  return W0(t, H0(e, n));
}
const U0 = (t) => ({
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
    const h = Wp(o), s = {
      x: i,
      y: r
    }, d = Wl(l), f = Kc(d), a = await _.getDimensions(n), u = d === "y" ? "top" : "left", b = d === "y" ? "bottom" : "right", p = c.reference[f] + c.reference[d] - s[d] - c.floating[f], m = s[d] - c.reference[d], g = await (_.getOffsetParent == null ? void 0 : _.getOffsetParent(n));
    let w = g ? d === "y" ? g.clientHeight || 0 : g.clientWidth || 0 : 0;
    w === 0 && (w = c.floating[f]);
    const k = p / 2 - m / 2, C = h[u], A = w - a[f] - h[b], E = w / 2 - a[f] / 2 + k, y = I0(C, E, A), D = jr(l) != null && E != y && c.reference[f] / 2 - (E < C ? h[u] : h[b]) - a[f] / 2 < 0 ? E < C ? C - E : A - E : 0;
    return {
      [d]: s[d] - D,
      data: {
        [d]: y,
        centerOffset: E - y
      }
    };
  }
}), F0 = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function li(t) {
  return t.replace(/left|right|bottom|top/g, (e) => F0[e]);
}
function B0(t, e, n) {
  n === void 0 && (n = !1);
  const o = jr(t), i = Wl(t), r = Kc(i);
  let l = i === "x" ? o === (n ? "end" : "start") ? "right" : "left" : o === "start" ? "bottom" : "top";
  return e.reference[r] > e.floating[r] && (l = li(l)), {
    main: l,
    cross: li(l)
  };
}
const j0 = {
  start: "end",
  end: "start"
};
function gc(t) {
  return t.replace(/start|end/g, (e) => j0[e]);
}
function V0(t) {
  const e = li(t);
  return [gc(t), e, gc(e)];
}
function z0(t, e, n) {
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
function Y0(t, e, n, o) {
  const i = jr(t);
  let r = z0(Gn(t), n === "start", o);
  return i && (r = r.map((l) => l + "-" + i), e && (r = r.concat(r.map(gc)))), r;
}
const G0 = function(t) {
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
      } = t, p = Gn(o), m = Gn(l) === l, g = await (c.isRTL == null ? void 0 : c.isRTL(_.floating)), w = d || (m || !u ? [li(l)] : V0(l));
      !d && a !== "none" && w.push(...Y0(l, u, a, g));
      const k = [l, ...w], C = await O0(e, b), A = [];
      let E = ((n = i.flip) == null ? void 0 : n.overflows) || [];
      if (h && A.push(C[p]), s) {
        const {
          main: D,
          cross: z
        } = B0(o, r, g);
        A.push(C[D], C[z]);
      }
      if (E = [...E, {
        placement: o,
        overflows: A
      }], !A.every((D) => D <= 0)) {
        var y;
        const D = (((y = i.flip) == null ? void 0 : y.index) || 0) + 1, z = k[D];
        if (z)
          return {
            data: {
              index: D,
              overflows: E
            },
            reset: {
              placement: z
            }
          };
        let B = "bottom";
        switch (f) {
          case "bestFit": {
            var x;
            const N = (x = E.map((S) => [S, S.overflows.filter(($) => $ > 0).reduce(($, R) => $ + R, 0)]).sort((S, $) => S[1] - $[1])[0]) == null ? void 0 : x[0].placement;
            N && (B = N);
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
async function q0(t, e) {
  const {
    placement: n,
    platform: o,
    elements: i
  } = t, r = await (o.isRTL == null ? void 0 : o.isRTL(i.floating)), l = Gn(n), c = jr(n), _ = Wl(n) === "x", h = ["left", "top"].includes(l) ? -1 : 1, s = r && _ ? -1 : 1, d = typeof e == "function" ? e(t) : e;
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
const X0 = function(t) {
  return t === void 0 && (t = 0), {
    name: "offset",
    options: t,
    async fn(e) {
      const {
        x: n,
        y: o
      } = e, i = await q0(e, t);
      return {
        x: n + i.x,
        y: o + i.y,
        data: i
      };
    }
  };
};
function It(t) {
  var e;
  return ((e = t.ownerDocument) == null ? void 0 : e.defaultView) || window;
}
function ne(t) {
  return It(t).getComputedStyle(t);
}
function Ye(t) {
  return Up(t) ? (t.nodeName || "").toLowerCase() : "";
}
let Zr;
function Ip() {
  if (Zr)
    return Zr;
  const t = navigator.userAgentData;
  return t && Array.isArray(t.brands) ? (Zr = t.brands.map((e) => e.brand + "/" + e.version).join(" "), Zr) : navigator.userAgent;
}
function de(t) {
  return t instanceof It(t).HTMLElement;
}
function Bt(t) {
  return t instanceof It(t).Element;
}
function Up(t) {
  return t instanceof It(t).Node;
}
function cf(t) {
  if (typeof ShadowRoot > "u")
    return !1;
  const e = It(t).ShadowRoot;
  return t instanceof e || t instanceof ShadowRoot;
}
function Il(t) {
  const {
    overflow: e,
    overflowX: n,
    overflowY: o,
    display: i
  } = ne(t);
  return /auto|scroll|overlay|hidden|clip/.test(e + o + n) && !["inline", "contents"].includes(i);
}
function K0(t) {
  return ["table", "td", "th"].includes(Ye(t));
}
function Zc(t) {
  const e = /firefox/i.test(Ip()), n = ne(t), o = n.backdropFilter || n.WebkitBackdropFilter;
  return n.transform !== "none" || n.perspective !== "none" || (o ? o !== "none" : !1) || e && n.willChange === "filter" || e && (n.filter ? n.filter !== "none" : !1) || ["transform", "perspective"].some((i) => n.willChange.includes(i)) || ["paint", "layout", "strict", "content"].some(
    // TS 4.1 compat
    (i) => {
      const r = n.contain;
      return r != null ? r.includes(i) : !1;
    }
  );
}
function Fp() {
  return !/^((?!chrome|android).)*safari/i.test(Ip());
}
function Jc(t) {
  return ["html", "body", "#document"].includes(Ye(t));
}
const af = Math.min, Do = Math.max, ci = Math.round;
function Bp(t) {
  const e = ne(t);
  let n = parseFloat(e.width), o = parseFloat(e.height);
  const i = t.offsetWidth, r = t.offsetHeight, l = ci(n) !== i || ci(o) !== r;
  return l && (n = i, o = r), {
    width: n,
    height: o,
    fallback: l
  };
}
function jp(t) {
  return Bt(t) ? t : t.contextElement;
}
const Vp = {
  x: 1,
  y: 1
};
function pn(t) {
  const e = jp(t);
  if (!de(e))
    return Vp;
  const n = e.getBoundingClientRect(), {
    width: o,
    height: i,
    fallback: r
  } = Bp(e);
  let l = (r ? ci(n.width) : n.width) / o, c = (r ? ci(n.height) : n.height) / i;
  return (!l || !Number.isFinite(l)) && (l = 1), (!c || !Number.isFinite(c)) && (c = 1), {
    x: l,
    y: c
  };
}
function cn(t, e, n, o) {
  var i, r;
  e === void 0 && (e = !1), n === void 0 && (n = !1);
  const l = t.getBoundingClientRect(), c = jp(t);
  let _ = Vp;
  e && (o ? Bt(o) && (_ = pn(o)) : _ = pn(t));
  const h = c ? It(c) : window, s = !Fp() && n;
  let d = (l.left + (s && ((i = h.visualViewport) == null ? void 0 : i.offsetLeft) || 0)) / _.x, f = (l.top + (s && ((r = h.visualViewport) == null ? void 0 : r.offsetTop) || 0)) / _.y, a = l.width / _.x, u = l.height / _.y;
  if (c) {
    const b = It(c), p = o && Bt(o) ? It(o) : o;
    let m = b.frameElement;
    for (; m && o && p !== b; ) {
      const g = pn(m), w = m.getBoundingClientRect(), k = getComputedStyle(m);
      w.x += (m.clientLeft + parseFloat(k.paddingLeft)) * g.x, w.y += (m.clientTop + parseFloat(k.paddingTop)) * g.y, d *= g.x, f *= g.y, a *= g.x, u *= g.y, d += w.x, f += w.y, m = It(m).frameElement;
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
function Ke(t) {
  return ((Up(t) ? t.ownerDocument : t.document) || window.document).documentElement;
}
function Ul(t) {
  return Bt(t) ? {
    scrollLeft: t.scrollLeft,
    scrollTop: t.scrollTop
  } : {
    scrollLeft: t.pageXOffset,
    scrollTop: t.pageYOffset
  };
}
function zp(t) {
  return cn(Ke(t)).left + Ul(t).scrollLeft;
}
function Z0(t, e, n) {
  const o = de(e), i = Ke(e), r = cn(t, !0, n === "fixed", e);
  let l = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const c = {
    x: 0,
    y: 0
  };
  if (o || !o && n !== "fixed")
    if ((Ye(e) !== "body" || Il(i)) && (l = Ul(e)), de(e)) {
      const _ = cn(e, !0);
      c.x = _.x + e.clientLeft, c.y = _.y + e.clientTop;
    } else
      i && (c.x = zp(i));
  return {
    x: r.left + l.scrollLeft - c.x,
    y: r.top + l.scrollTop - c.y,
    width: r.width,
    height: r.height
  };
}
function ar(t) {
  if (Ye(t) === "html")
    return t;
  const e = (
    // Step into the shadow DOM of the parent of a slotted node
    t.assignedSlot || // DOM Element detected
    t.parentNode || // ShadowRoot detected
    (cf(t) ? t.host : null) || // Fallback
    Ke(t)
  );
  return cf(e) ? e.host : e;
}
function _f(t) {
  return !de(t) || ne(t).position === "fixed" ? null : t.offsetParent;
}
function J0(t) {
  let e = ar(t);
  for (; de(e) && !Jc(e); ) {
    if (Zc(e))
      return e;
    e = ar(e);
  }
  return null;
}
function ff(t) {
  const e = It(t);
  let n = _f(t);
  for (; n && K0(n) && ne(n).position === "static"; )
    n = _f(n);
  return n && (Ye(n) === "html" || Ye(n) === "body" && ne(n).position === "static" && !Zc(n)) ? e : n || J0(t) || e;
}
function Q0(t) {
  return Bp(t);
}
function tw(t) {
  let {
    rect: e,
    offsetParent: n,
    strategy: o
  } = t;
  const i = de(n), r = Ke(n);
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
  if ((i || !i && o !== "fixed") && ((Ye(n) !== "body" || Il(r)) && (l = Ul(n)), de(n))) {
    const h = cn(n);
    c = pn(n), _.x = h.x + n.clientLeft, _.y = h.y + n.clientTop;
  }
  return {
    width: e.width * c.x,
    height: e.height * c.y,
    x: e.x * c.x - l.scrollLeft * c.x + _.x,
    y: e.y * c.y - l.scrollTop * c.y + _.y
  };
}
function ew(t, e) {
  const n = It(t), o = Ke(t), i = n.visualViewport;
  let r = o.clientWidth, l = o.clientHeight, c = 0, _ = 0;
  if (i) {
    r = i.width, l = i.height;
    const h = Fp();
    (h || !h && e === "fixed") && (c = i.offsetLeft, _ = i.offsetTop);
  }
  return {
    width: r,
    height: l,
    x: c,
    y: _
  };
}
function nw(t) {
  var e;
  const n = Ke(t), o = Ul(t), i = (e = t.ownerDocument) == null ? void 0 : e.body, r = Do(n.scrollWidth, n.clientWidth, i ? i.scrollWidth : 0, i ? i.clientWidth : 0), l = Do(n.scrollHeight, n.clientHeight, i ? i.scrollHeight : 0, i ? i.clientHeight : 0);
  let c = -o.scrollLeft + zp(t);
  const _ = -o.scrollTop;
  return ne(i || n).direction === "rtl" && (c += Do(n.clientWidth, i ? i.clientWidth : 0) - r), {
    width: r,
    height: l,
    x: c,
    y: _
  };
}
function Yp(t) {
  const e = ar(t);
  return Jc(e) ? t.ownerDocument.body : de(e) && Il(e) ? e : Yp(e);
}
function No(t, e) {
  var n;
  e === void 0 && (e = []);
  const o = Yp(t), i = o === ((n = t.ownerDocument) == null ? void 0 : n.body), r = It(o);
  return i ? e.concat(r, r.visualViewport || [], Il(o) ? o : []) : e.concat(o, No(o));
}
function ow(t, e) {
  const n = cn(t, !0, e === "fixed"), o = n.top + t.clientTop, i = n.left + t.clientLeft, r = de(t) ? pn(t) : {
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
function uf(t, e, n) {
  return e === "viewport" ? ii(ew(t, n)) : Bt(e) ? ow(e, n) : ii(nw(Ke(t)));
}
function rw(t, e) {
  const n = e.get(t);
  if (n)
    return n;
  let o = No(t).filter((c) => Bt(c) && Ye(c) !== "body"), i = null;
  const r = ne(t).position === "fixed";
  let l = r ? ar(t) : t;
  for (; Bt(l) && !Jc(l); ) {
    const c = ne(l), _ = Zc(l);
    (r ? !_ && !i : !_ && c.position === "static" && !!i && ["absolute", "fixed"].includes(i.position)) ? o = o.filter((s) => s !== l) : i = c, l = ar(l);
  }
  return e.set(t, o), o;
}
function sw(t) {
  let {
    element: e,
    boundary: n,
    rootBoundary: o,
    strategy: i
  } = t;
  const l = [...n === "clippingAncestors" ? rw(e, this._c) : [].concat(n), o], c = l[0], _ = l.reduce((h, s) => {
    const d = uf(e, s, i);
    return h.top = Do(d.top, h.top), h.right = af(d.right, h.right), h.bottom = af(d.bottom, h.bottom), h.left = Do(d.left, h.left), h;
  }, uf(e, c, i));
  return {
    width: _.right - _.left,
    height: _.bottom - _.top,
    x: _.left,
    y: _.top
  };
}
const iw = {
  getClippingRect: sw,
  convertOffsetParentRelativeRectToViewportRelativeRect: tw,
  isElement: Bt,
  getDimensions: Q0,
  getOffsetParent: ff,
  getDocumentElement: Ke,
  getScale: pn,
  async getElementRects(t) {
    let {
      reference: e,
      floating: n,
      strategy: o
    } = t;
    const i = this.getOffsetParent || ff, r = this.getDimensions;
    return {
      reference: Z0(e, await i(n), o),
      floating: {
        x: 0,
        y: 0,
        ...await r(n)
      }
    };
  },
  getClientRects: (t) => Array.from(t.getClientRects()),
  isRTL: (t) => ne(t).direction === "rtl"
};
function lw(t, e, n, o) {
  o === void 0 && (o = {});
  const {
    ancestorScroll: i = !0,
    ancestorResize: r = !0,
    elementResize: l = !0,
    animationFrame: c = !1
  } = o, _ = i && !c, h = _ || r ? [...Bt(t) ? No(t) : t.contextElement ? No(t.contextElement) : [], ...No(e)] : [];
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
    }), Bt(t) && !c && s.observe(t), !Bt(t) && t.contextElement && !c && s.observe(t.contextElement), s.observe(e);
  }
  let d, f = c ? cn(t) : null;
  c && a();
  function a() {
    const u = cn(t);
    f && (u.x !== f.x || u.y !== f.y || u.width !== f.width || u.height !== f.height) && n(), f = u, d = requestAnimationFrame(a);
  }
  return n(), () => {
    var u;
    h.forEach((b) => {
      _ && b.removeEventListener("scroll", n), r && b.removeEventListener("resize", n);
    }), (u = s) == null || u.disconnect(), s = null, c && cancelAnimationFrame(d);
  };
}
const cw = (t, e, n) => {
  const o = /* @__PURE__ */ new Map(), i = {
    platform: iw,
    ...n
  }, r = {
    ...i.platform,
    _c: o
  };
  return R0(t, e, {
    ...i,
    platform: r
  });
};
var Pn, On, Hn, on, St, Ji, Dr, Nr, yc, Qi, Gp, tl, qp, el, Xp, nl, Kp, ol, Zp, rl, Jp, sl, Qp, Wn, il, tm;
const Ze = class extends jt {
  constructor() {
    super(...arguments);
    M(this, Nr);
    M(this, Qi);
    M(this, tl);
    M(this, el);
    M(this, nl);
    M(this, ol);
    M(this, rl);
    M(this, sl);
    M(this, il);
    M(this, Pn, !1);
    M(this, On, void 0);
    M(this, Hn, 0);
    M(this, on, void 0);
    M(this, St, void 0);
    M(this, Ji, void 0);
    M(this, Dr, void 0);
    L(this, "hideLater", () => {
      v(this, Wn).call(this), H(this, Hn, window.setTimeout(this.hide.bind(this), 100));
    });
    M(this, Wn, () => {
      clearTimeout(v(this, Hn)), H(this, Hn, 0);
    });
  }
  get isShown() {
    var n;
    return (n = v(this, on)) == null ? void 0 : n.classList.contains(Ze.CLASS_SHOW);
  }
  get tooltip() {
    return v(this, on) || W(this, tl, qp).call(this);
  }
  get trigger() {
    return v(this, Ji) || this.element;
  }
  get isHover() {
    return this.options.trigger === "hover";
  }
  get elementShowClass() {
    return `with-${Ze.NAME}-show`;
  }
  get isDynamic() {
    return this.options.title;
  }
  init() {
    const { element: n } = this;
    n !== document.body && !n.hasAttribute("data-toggle") && n.setAttribute("data-toggle", "tooltip");
  }
  show(n) {
    return this.setOptions(n), !v(this, Pn) && this.isHover && W(this, il, tm).call(this), this.options.animation && this.tooltip.classList.add("fade"), this.element.classList.add(this.elementShowClass), this.tooltip.classList.add(Ze.CLASS_SHOW), W(this, rl, Jp).call(this), !0;
  }
  hide() {
    var n, o;
    return (n = v(this, Dr)) == null || n.call(this), this.element.classList.remove(this.elementShowClass), (o = v(this, on)) == null || o.classList.remove(Ze.CLASS_SHOW), !0;
  }
  toggle(n) {
    return this.isShown ? this.hide() : this.show(n);
  }
  destroy() {
    v(this, Pn) && (this.element.removeEventListener("mouseleave", this.hideLater), this.tooltip.removeEventListener("mouseenter", v(this, Wn)), this.tooltip.removeEventListener("mouseleave", this.hideLater)), super.destroy();
  }
  static clear(n) {
    n instanceof Event && (n = { event: n });
    const { exclude: o } = n || {}, i = this.getAll().entries(), r = new Set(o || []);
    for (const [l, c] of i)
      r.has(l) || c.hide();
  }
};
let Pt = Ze;
Pn = new WeakMap(), On = new WeakMap(), Hn = new WeakMap(), on = new WeakMap(), St = new WeakMap(), Ji = new WeakMap(), Dr = new WeakMap(), Nr = new WeakSet(), yc = function() {
  const { arrow: n } = this.options;
  return typeof n == "number" ? n : 8;
}, Qi = new WeakSet(), Gp = function() {
  const n = W(this, Nr, yc).call(this);
  return H(this, St, document.createElement("div")), v(this, St).style.position = this.options.strategy, v(this, St).style.width = `${n}px`, v(this, St).style.height = `${n}px`, v(this, St).style.transform = "rotate(45deg)", v(this, St);
}, tl = new WeakSet(), qp = function() {
  var i;
  const n = Ze.TOOLTIP_CLASS;
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
  if (this.options.arrow && (o == null || o.append(W(this, Qi, Gp).call(this))), !o)
    throw new Error("Tooltip: Cannot find tooltip element");
  return o.style.width = "max-content", o.style.position = "absolute", o.style.top = "0", o.style.left = "0", document.body.appendChild(o), H(this, on, o), o;
}, el = new WeakSet(), Xp = function() {
  var i;
  const n = W(this, Nr, yc).call(this), o = {
    middleware: [X0(n), G0()],
    strategy: this.options.strategy
  };
  return this.options.arrow && v(this, St) && ((i = o.middleware) == null || i.push(U0({ element: v(this, St) }))), this.options.placement && (o.placement = this.options.placement), o;
}, nl = new WeakSet(), Kp = function(n) {
  return {
    top: "bottom",
    right: "left",
    bottom: "top",
    left: "right"
  }[n];
}, ol = new WeakSet(), Zp = function(n) {
  if (n === "bottom")
    return {
      borderBottomStyle: "none",
      borderRightStyle: "none"
    };
  if (n === "top")
    return {
      borderTopStyle: "none",
      borderLeftStyle: "none"
    };
  if (n === "left")
    return {
      borderBottomStyle: "none",
      borderLeftStyle: "none"
    };
  if (n === "right")
    return {
      borderTopStyle: "none",
      borderRightStyle: "none"
    };
}, rl = new WeakSet(), Jp = function() {
  const n = W(this, el, Xp).call(this), o = W(this, sl, Qp).call(this);
  H(this, Dr, lw(o, this.tooltip, () => {
    cw(o, this.tooltip, n).then(({ x: i, y: r, middlewareData: l, placement: c }) => {
      if (Object.assign(this.tooltip.style, {
        left: `${i}px`,
        top: `${r}px`
      }), c) {
        const _ = c.split("-")[0], h = W(this, nl, Kp).call(this, _);
        if (l.arrow && v(this, St)) {
          const { x: s, y: d } = l.arrow;
          Object.assign(v(this, St).style, {
            left: s != null ? `${s}px` : "",
            top: d != null ? `${d}px` : "",
            [h]: `${-v(this, St).offsetWidth / 2}px`,
            background: "inherit",
            border: "inherit",
            ...W(this, ol, Zp).call(this, _)
          });
        }
      }
    });
  }));
}, sl = new WeakSet(), Qp = function() {
  return v(this, On) || H(this, On, {
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
  }), v(this, On);
}, Wn = new WeakMap(), il = new WeakSet(), tm = function() {
  const { tooltip: n } = this;
  n.addEventListener("mouseenter", v(this, Wn)), n.addEventListener("mouseleave", this.hideLater), this.element.addEventListener("mouseleave", this.hideLater), H(this, Pn, !0);
}, L(Pt, "NAME", "tooltip"), L(Pt, "TOOLTIP_CLASS", "tooltip"), L(Pt, "CLASS_SHOW", "show"), L(Pt, "MENU_SELECTOR", '[data-toggle="tooltip"]:not(.disabled):not(:disabled)'), L(Pt, "DEFAULT", {
  animation: !0,
  placement: "top",
  strategy: "absolute",
  trigger: "hover",
  type: "darker",
  arrow: !0
});
document.addEventListener("click", function(t) {
  const n = t.target.closest(Pt.MENU_SELECTOR);
  if (n) {
    const o = Pt.ensure(n);
    o.options.trigger === "click" && o.toggle();
  } else
    Pt.clear({ event: t });
});
document.addEventListener("mouseover", function(t) {
  const e = t.target, n = typeof e.closest == "function" ? e.closest(Pt.MENU_SELECTOR) : null;
  if (!n)
    return;
  const o = Pt.ensure(n);
  o.isHover && o.show();
});
var em, pt, nm, Ro, hf, om = {}, rm = [], aw = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function Pe(t, e) {
  for (var n in e)
    t[n] = e[n];
  return t;
}
function sm(t) {
  var e = t.parentNode;
  e && e.removeChild(t);
}
function Kl(t, e, n, o, i) {
  var r = { type: t, props: e, key: n, ref: o, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: i ?? ++nm };
  return i == null && pt.vnode != null && pt.vnode(r), r;
}
function Qc(t) {
  return t.children;
}
function Po(t, e) {
  this.props = t, this.context = e;
}
function _r(t, e) {
  if (e == null)
    return t.__ ? _r(t.__, t.__.__k.indexOf(t) + 1) : null;
  for (var n; e < t.__k.length; e++)
    if ((n = t.__k[e]) != null && n.__e != null)
      return n.__e;
  return typeof t.type == "function" ? _r(t) : null;
}
function im(t) {
  var e, n;
  if ((t = t.__) != null && t.__c != null) {
    for (t.__e = t.__c.base = null, e = 0; e < t.__k.length; e++)
      if ((n = t.__k[e]) != null && n.__e != null) {
        t.__e = t.__c.base = n.__e;
        break;
      }
    return im(t);
  }
}
function df(t) {
  (!t.__d && (t.__d = !0) && Ro.push(t) && !ai.__r++ || hf !== pt.debounceRendering) && ((hf = pt.debounceRendering) || setTimeout)(ai);
}
function ai() {
  for (var t; ai.__r = Ro.length; )
    t = Ro.sort(function(e, n) {
      return e.__v.__b - n.__v.__b;
    }), Ro = [], t.some(function(e) {
      var n, o, i, r, l, c;
      e.__d && (l = (r = (n = e).__v).__e, (c = n.__P) && (o = [], (i = Pe({}, r)).__v = r.__v + 1, _m(c, r, i, n.__n, c.ownerSVGElement !== void 0, r.__h != null ? [l] : null, o, l ?? _r(r), r.__h), fw(o, r), r.__e != l && im(r)));
    });
}
function lm(t, e, n, o, i, r, l, c, _, h) {
  var s, d, f, a, u, b, p, m = o && o.__k || rm, g = m.length;
  for (n.__k = [], s = 0; s < e.length; s++)
    if ((a = n.__k[s] = (a = e[s]) == null || typeof a == "boolean" ? null : typeof a == "string" || typeof a == "number" || typeof a == "bigint" ? Kl(null, a, null, null, a) : Array.isArray(a) ? Kl(Qc, { children: a }, null, null, null) : a.__b > 0 ? Kl(a.type, a.props, a.key, a.ref ? a.ref : null, a.__v) : a) != null) {
      if (a.__ = n, a.__b = n.__b + 1, (f = m[s]) === null || f && a.key == f.key && a.type === f.type)
        m[s] = void 0;
      else
        for (d = 0; d < g; d++) {
          if ((f = m[d]) && a.key == f.key && a.type === f.type) {
            m[d] = void 0;
            break;
          }
          f = null;
        }
      _m(t, a, f = f || om, i, r, l, c, _, h), u = a.__e, (d = a.ref) && f.ref != d && (p || (p = []), f.ref && p.push(f.ref, null, a), p.push(d, a.__c || u, a)), u != null ? (b == null && (b = u), typeof a.type == "function" && a.__k === f.__k ? a.__d = _ = cm(a, _, t) : _ = am(t, a, f, m, u, _), typeof n.type == "function" && (n.__d = _)) : _ && f.__e == _ && _.parentNode != t && (_ = _r(f));
    }
  for (n.__e = b, s = g; s--; )
    m[s] != null && um(m[s], m[s]);
  if (p)
    for (s = 0; s < p.length; s++)
      fm(p[s], p[++s], p[++s]);
}
function cm(t, e, n) {
  for (var o, i = t.__k, r = 0; i && r < i.length; r++)
    (o = i[r]) && (o.__ = t, e = typeof o.type == "function" ? cm(o, e, n) : am(n, o, o, i, o.__e, e));
  return e;
}
function am(t, e, n, o, i, r) {
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
function _w(t, e, n, o, i) {
  var r;
  for (r in n)
    r === "children" || r === "key" || r in e || _i(t, r, null, n[r], o);
  for (r in e)
    i && typeof e[r] != "function" || r === "children" || r === "key" || r === "value" || r === "checked" || n[r] === e[r] || _i(t, r, e[r], n[r], o);
}
function pf(t, e, n) {
  e[0] === "-" ? t.setProperty(e, n) : t[e] = n == null ? "" : typeof n != "number" || aw.test(e) ? n : n + "px";
}
function _i(t, e, n, o, i) {
  var r;
  t:
    if (e === "style")
      if (typeof n == "string")
        t.style.cssText = n;
      else {
        if (typeof o == "string" && (t.style.cssText = o = ""), o)
          for (e in o)
            n && e in n || pf(t.style, e, "");
        if (n)
          for (e in n)
            o && n[e] === o[e] || pf(t.style, e, n[e]);
      }
    else if (e[0] === "o" && e[1] === "n")
      r = e !== (e = e.replace(/Capture$/, "")), e = e.toLowerCase() in t ? e.toLowerCase().slice(2) : e.slice(2), t.l || (t.l = {}), t.l[e + r] = n, n ? o || t.addEventListener(e, r ? gf : mf, r) : t.removeEventListener(e, r ? gf : mf, r);
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
function mf(t) {
  this.l[t.type + !1](pt.event ? pt.event(t) : t);
}
function gf(t) {
  this.l[t.type + !0](pt.event ? pt.event(t) : t);
}
function _m(t, e, n, o, i, r, l, c, _) {
  var h, s, d, f, a, u, b, p, m, g, w, k, C, A, E, y = e.type;
  if (e.constructor !== void 0)
    return null;
  n.__h != null && (_ = n.__h, c = e.__e = n.__e, e.__h = null, r = [c]), (h = pt.__b) && h(e);
  try {
    t:
      if (typeof y == "function") {
        if (p = e.props, m = (h = y.contextType) && o[h.__c], g = h ? m ? m.props.value : h.__ : o, n.__c ? b = (s = e.__c = n.__c).__ = s.__E : ("prototype" in y && y.prototype.render ? e.__c = s = new y(p, g) : (e.__c = s = new Po(p, g), s.constructor = y, s.render = hw), m && m.sub(s), s.props = p, s.state || (s.state = {}), s.context = g, s.__n = o, d = s.__d = !0, s.__h = [], s._sb = []), s.__s == null && (s.__s = s.state), y.getDerivedStateFromProps != null && (s.__s == s.state && (s.__s = Pe({}, s.__s)), Pe(s.__s, y.getDerivedStateFromProps(p, s.__s))), f = s.props, a = s.state, d)
          y.getDerivedStateFromProps == null && s.componentWillMount != null && s.componentWillMount(), s.componentDidMount != null && s.__h.push(s.componentDidMount);
        else {
          if (y.getDerivedStateFromProps == null && p !== f && s.componentWillReceiveProps != null && s.componentWillReceiveProps(p, g), !s.__e && s.shouldComponentUpdate != null && s.shouldComponentUpdate(p, s.__s, g) === !1 || e.__v === n.__v) {
            for (s.props = p, s.state = s.__s, e.__v !== n.__v && (s.__d = !1), s.__v = e, e.__e = n.__e, e.__k = n.__k, e.__k.forEach(function(x) {
              x && (x.__ = e);
            }), w = 0; w < s._sb.length; w++)
              s.__h.push(s._sb[w]);
            s._sb = [], s.__h.length && l.push(s);
            break t;
          }
          s.componentWillUpdate != null && s.componentWillUpdate(p, s.__s, g), s.componentDidUpdate != null && s.__h.push(function() {
            s.componentDidUpdate(f, a, u);
          });
        }
        if (s.context = g, s.props = p, s.__v = e, s.__P = t, k = pt.__r, C = 0, "prototype" in y && y.prototype.render) {
          for (s.state = s.__s, s.__d = !1, k && k(e), h = s.render(s.props, s.state, s.context), A = 0; A < s._sb.length; A++)
            s.__h.push(s._sb[A]);
          s._sb = [];
        } else
          do
            s.__d = !1, k && k(e), h = s.render(s.props, s.state, s.context), s.state = s.__s;
          while (s.__d && ++C < 25);
        s.state = s.__s, s.getChildContext != null && (o = Pe(Pe({}, o), s.getChildContext())), d || s.getSnapshotBeforeUpdate == null || (u = s.getSnapshotBeforeUpdate(f, a)), E = h != null && h.type === Qc && h.key == null ? h.props.children : h, lm(t, Array.isArray(E) ? E : [E], e, n, o, i, r, l, c, _), s.base = e.__e, e.__h = null, s.__h.length && l.push(s), b && (s.__E = s.__ = null), s.__e = !1;
      } else
        r == null && e.__v === n.__v ? (e.__k = n.__k, e.__e = n.__e) : e.__e = uw(n.__e, e, n, o, i, r, l, _);
    (h = pt.diffed) && h(e);
  } catch (x) {
    e.__v = null, (_ || r != null) && (e.__e = c, e.__h = !!_, r[r.indexOf(c)] = null), pt.__e(x, e, n);
  }
}
function fw(t, e) {
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
function uw(t, e, n, o, i, r, l, c) {
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
    if (r = r && em.call(t.childNodes), h = (d = n.props || om).dangerouslySetInnerHTML, s = f.dangerouslySetInnerHTML, !c) {
      if (r != null)
        for (d = {}, u = 0; u < t.attributes.length; u++)
          d[t.attributes[u].name] = t.attributes[u].value;
      (s || h) && (s && (h && s.__html == h.__html || s.__html === t.innerHTML) || (t.innerHTML = s && s.__html || ""));
    }
    if (_w(t, f, d, i, c), s)
      e.__k = [];
    else if (u = e.props.children, lm(t, Array.isArray(u) ? u : [u], e, n, o, i && a !== "foreignObject", r, l, r ? r[0] : n.__k && _r(n, 0), c), r != null)
      for (u = r.length; u--; )
        r[u] != null && sm(r[u]);
    c || ("value" in f && (u = f.value) !== void 0 && (u !== t.value || a === "progress" && !u || a === "option" && u !== d.value) && _i(t, "value", u, d.value, !1), "checked" in f && (u = f.checked) !== void 0 && u !== t.checked && _i(t, "checked", u, d.checked, !1));
  }
  return t;
}
function fm(t, e, n) {
  try {
    typeof t == "function" ? t(e) : t.current = e;
  } catch (o) {
    pt.__e(o, n);
  }
}
function um(t, e, n) {
  var o, i;
  if (pt.unmount && pt.unmount(t), (o = t.ref) && (o.current && o.current !== t.__e || fm(o, null, e)), (o = t.__c) != null) {
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
      o[i] && um(o[i], e, n || typeof t.type != "function");
  n || t.__e == null || sm(t.__e), t.__ = t.__e = t.__d = void 0;
}
function hw(t, e, n) {
  return this.constructor(t, n);
}
em = rm.slice, pt = { __e: function(t, e, n, o) {
  for (var i, r, l; e = e.__; )
    if ((i = e.__c) && !i.__)
      try {
        if ((r = i.constructor) && r.getDerivedStateFromError != null && (i.setState(r.getDerivedStateFromError(t)), l = i.__d), i.componentDidCatch != null && (i.componentDidCatch(t, o || {}), l = i.__d), l)
          return i.__E = i;
      } catch (c) {
        t = c;
      }
  throw t;
} }, nm = 0, Po.prototype.setState = function(t, e) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = Pe({}, this.state), typeof t == "function" && (t = t(Pe({}, n), this.props)), t && Pe(n, t), t != null && this.__v && (e && this._sb.push(e), df(this));
}, Po.prototype.forceUpdate = function(t) {
  this.__v && (this.__e = !0, t && this.__h.push(t), df(this));
}, Po.prototype.render = Qc, Ro = [], ai.__r = 0;
var dw = 0;
function fi(t, e, n, o, i) {
  var r, l, c = {};
  for (l in e)
    l == "ref" ? r = e[l] : c[l] = e[l];
  var _ = { type: t, props: c, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: --dw, __source: i, __self: o };
  if (typeof t == "function" && (r = t.defaultProps))
    for (l in r)
      c[l] === void 0 && (c[l] = r[l]);
  return pt.vnode && pt.vnode(_), _;
}
function pw({
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
  d ? a = d(t, c) : l ? a = /* @__PURE__ */ fi(l, { ...h }) : a = c;
  const { left: u, top: b, width: p, height: m } = o;
  return /* @__PURE__ */ fi("div", { style: { width: p, height: m, left: u + i, top: b + r, ...n }, ...f, children: [
    a,
    s
  ] });
}
function mw(t, e, n = 0, o = 0) {
  const i = t.left + n, r = t.top + o;
  return !(i > e.left + e.width || r > e.top + e.height || i + t.width < e.left || r + t.height < e.top);
}
let gw = class extends Po {
  render() {
    const { width: e, height: n, cells: o, left: i, top: r, visibleBounding: l, onRenderCell: c, style: _, children: h, offsetX: s = 0, offsetY: d = 0, ...f } = this.props, a = l ? o.filter((u) => mw(u.bounding, l, s, d)) : o;
    return /* @__PURE__ */ fi("div", { style: { width: e, height: n, left: i, top: r, ..._ }, ...f, children: [
      a.map((u) => /* @__PURE__ */ fi(pw, { offsetX: s, offsetY: d, ...u })),
      h
    ] });
  }
};
class yf extends xt {
}
L(yf, "NAME", "virtualgrid"), L(yf, "Component", gw);
var ta, mt, hm, dm, Oo, vf, pm = {}, mm = [], yw = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function Oe(t, e) {
  for (var n in e)
    t[n] = e[n];
  return t;
}
function gm(t) {
  var e = t.parentNode;
  e && e.removeChild(t);
}
function ea(t, e, n) {
  var o, i, r, l = {};
  for (r in e)
    r == "key" ? o = e[r] : r == "ref" ? i = e[r] : l[r] = e[r];
  if (arguments.length > 2 && (l.children = arguments.length > 3 ? ta.call(arguments, 2) : n), typeof t == "function" && t.defaultProps != null)
    for (r in t.defaultProps)
      l[r] === void 0 && (l[r] = t.defaultProps[r]);
  return ms(t, l, o, i, null);
}
function ms(t, e, n, o, i) {
  var r = { type: t, props: e, key: n, ref: o, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: i ?? ++hm };
  return i == null && mt.vnode != null && mt.vnode(r), r;
}
function vw() {
  return { current: null };
}
function na(t) {
  return t.children;
}
function Ho(t, e) {
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
function ym(t) {
  var e, n;
  if ((t = t.__) != null && t.__c != null) {
    for (t.__e = t.__c.base = null, e = 0; e < t.__k.length; e++)
      if ((n = t.__k[e]) != null && n.__e != null) {
        t.__e = t.__c.base = n.__e;
        break;
      }
    return ym(t);
  }
}
function bf(t) {
  (!t.__d && (t.__d = !0) && Oo.push(t) && !ui.__r++ || vf !== mt.debounceRendering) && ((vf = mt.debounceRendering) || setTimeout)(ui);
}
function ui() {
  for (var t; ui.__r = Oo.length; )
    t = Oo.sort(function(e, n) {
      return e.__v.__b - n.__v.__b;
    }), Oo = [], t.some(function(e) {
      var n, o, i, r, l, c;
      e.__d && (l = (r = (n = e).__v).__e, (c = n.__P) && (o = [], (i = Oe({}, r)).__v = r.__v + 1, $m(c, r, i, n.__n, c.ownerSVGElement !== void 0, r.__h != null ? [l] : null, o, l ?? fr(r), r.__h), ww(o, r), r.__e != l && ym(r)));
    });
}
function vm(t, e, n, o, i, r, l, c, _, h) {
  var s, d, f, a, u, b, p, m = o && o.__k || mm, g = m.length;
  for (n.__k = [], s = 0; s < e.length; s++)
    if ((a = n.__k[s] = (a = e[s]) == null || typeof a == "boolean" ? null : typeof a == "string" || typeof a == "number" || typeof a == "bigint" ? ms(null, a, null, null, a) : Array.isArray(a) ? ms(na, { children: a }, null, null, null) : a.__b > 0 ? ms(a.type, a.props, a.key, a.ref ? a.ref : null, a.__v) : a) != null) {
      if (a.__ = n, a.__b = n.__b + 1, (f = m[s]) === null || f && a.key == f.key && a.type === f.type)
        m[s] = void 0;
      else
        for (d = 0; d < g; d++) {
          if ((f = m[d]) && a.key == f.key && a.type === f.type) {
            m[d] = void 0;
            break;
          }
          f = null;
        }
      $m(t, a, f = f || pm, i, r, l, c, _, h), u = a.__e, (d = a.ref) && f.ref != d && (p || (p = []), f.ref && p.push(f.ref, null, a), p.push(d, a.__c || u, a)), u != null ? (b == null && (b = u), typeof a.type == "function" && a.__k === f.__k ? a.__d = _ = bm(a, _, t) : _ = wm(t, a, f, m, u, _), typeof n.type == "function" && (n.__d = _)) : _ && f.__e == _ && _.parentNode != t && (_ = fr(f));
    }
  for (n.__e = b, s = g; s--; )
    m[s] != null && xm(m[s], m[s]);
  if (p)
    for (s = 0; s < p.length; s++)
      km(p[s], p[++s], p[++s]);
}
function bm(t, e, n) {
  for (var o, i = t.__k, r = 0; i && r < i.length; r++)
    (o = i[r]) && (o.__ = t, e = typeof o.type == "function" ? bm(o, e, n) : wm(n, o, o, i, o.__e, e));
  return e;
}
function wm(t, e, n, o, i, r) {
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
function bw(t, e, n, o, i) {
  var r;
  for (r in n)
    r === "children" || r === "key" || r in e || hi(t, r, null, n[r], o);
  for (r in e)
    i && typeof e[r] != "function" || r === "children" || r === "key" || r === "value" || r === "checked" || n[r] === e[r] || hi(t, r, e[r], n[r], o);
}
function wf(t, e, n) {
  e[0] === "-" ? t.setProperty(e, n) : t[e] = n == null ? "" : typeof n != "number" || yw.test(e) ? n : n + "px";
}
function hi(t, e, n, o, i) {
  var r;
  t:
    if (e === "style")
      if (typeof n == "string")
        t.style.cssText = n;
      else {
        if (typeof o == "string" && (t.style.cssText = o = ""), o)
          for (e in o)
            n && e in n || wf(t.style, e, "");
        if (n)
          for (e in n)
            o && n[e] === o[e] || wf(t.style, e, n[e]);
      }
    else if (e[0] === "o" && e[1] === "n")
      r = e !== (e = e.replace(/Capture$/, "")), e = e.toLowerCase() in t ? e.toLowerCase().slice(2) : e.slice(2), t.l || (t.l = {}), t.l[e + r] = n, n ? o || t.addEventListener(e, r ? kf : $f, r) : t.removeEventListener(e, r ? kf : $f, r);
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
function $f(t) {
  this.l[t.type + !1](mt.event ? mt.event(t) : t);
}
function kf(t) {
  this.l[t.type + !0](mt.event ? mt.event(t) : t);
}
function $m(t, e, n, o, i, r, l, c, _) {
  var h, s, d, f, a, u, b, p, m, g, w, k, C, A, E, y = e.type;
  if (e.constructor !== void 0)
    return null;
  n.__h != null && (_ = n.__h, c = e.__e = n.__e, e.__h = null, r = [c]), (h = mt.__b) && h(e);
  try {
    t:
      if (typeof y == "function") {
        if (p = e.props, m = (h = y.contextType) && o[h.__c], g = h ? m ? m.props.value : h.__ : o, n.__c ? b = (s = e.__c = n.__c).__ = s.__E : ("prototype" in y && y.prototype.render ? e.__c = s = new y(p, g) : (e.__c = s = new Ho(p, g), s.constructor = y, s.render = kw), m && m.sub(s), s.props = p, s.state || (s.state = {}), s.context = g, s.__n = o, d = s.__d = !0, s.__h = [], s._sb = []), s.__s == null && (s.__s = s.state), y.getDerivedStateFromProps != null && (s.__s == s.state && (s.__s = Oe({}, s.__s)), Oe(s.__s, y.getDerivedStateFromProps(p, s.__s))), f = s.props, a = s.state, d)
          y.getDerivedStateFromProps == null && s.componentWillMount != null && s.componentWillMount(), s.componentDidMount != null && s.__h.push(s.componentDidMount);
        else {
          if (y.getDerivedStateFromProps == null && p !== f && s.componentWillReceiveProps != null && s.componentWillReceiveProps(p, g), !s.__e && s.shouldComponentUpdate != null && s.shouldComponentUpdate(p, s.__s, g) === !1 || e.__v === n.__v) {
            for (s.props = p, s.state = s.__s, e.__v !== n.__v && (s.__d = !1), s.__v = e, e.__e = n.__e, e.__k = n.__k, e.__k.forEach(function(x) {
              x && (x.__ = e);
            }), w = 0; w < s._sb.length; w++)
              s.__h.push(s._sb[w]);
            s._sb = [], s.__h.length && l.push(s);
            break t;
          }
          s.componentWillUpdate != null && s.componentWillUpdate(p, s.__s, g), s.componentDidUpdate != null && s.__h.push(function() {
            s.componentDidUpdate(f, a, u);
          });
        }
        if (s.context = g, s.props = p, s.__v = e, s.__P = t, k = mt.__r, C = 0, "prototype" in y && y.prototype.render) {
          for (s.state = s.__s, s.__d = !1, k && k(e), h = s.render(s.props, s.state, s.context), A = 0; A < s._sb.length; A++)
            s.__h.push(s._sb[A]);
          s._sb = [];
        } else
          do
            s.__d = !1, k && k(e), h = s.render(s.props, s.state, s.context), s.state = s.__s;
          while (s.__d && ++C < 25);
        s.state = s.__s, s.getChildContext != null && (o = Oe(Oe({}, o), s.getChildContext())), d || s.getSnapshotBeforeUpdate == null || (u = s.getSnapshotBeforeUpdate(f, a)), E = h != null && h.type === na && h.key == null ? h.props.children : h, vm(t, Array.isArray(E) ? E : [E], e, n, o, i, r, l, c, _), s.base = e.__e, e.__h = null, s.__h.length && l.push(s), b && (s.__E = s.__ = null), s.__e = !1;
      } else
        r == null && e.__v === n.__v ? (e.__k = n.__k, e.__e = n.__e) : e.__e = $w(n.__e, e, n, o, i, r, l, _);
    (h = mt.diffed) && h(e);
  } catch (x) {
    e.__v = null, (_ || r != null) && (e.__e = c, e.__h = !!_, r[r.indexOf(c)] = null), mt.__e(x, e, n);
  }
}
function ww(t, e) {
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
function $w(t, e, n, o, i, r, l, c) {
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
    if (r = r && ta.call(t.childNodes), h = (d = n.props || pm).dangerouslySetInnerHTML, s = f.dangerouslySetInnerHTML, !c) {
      if (r != null)
        for (d = {}, u = 0; u < t.attributes.length; u++)
          d[t.attributes[u].name] = t.attributes[u].value;
      (s || h) && (s && (h && s.__html == h.__html || s.__html === t.innerHTML) || (t.innerHTML = s && s.__html || ""));
    }
    if (bw(t, f, d, i, c), s)
      e.__k = [];
    else if (u = e.props.children, vm(t, Array.isArray(u) ? u : [u], e, n, o, i && a !== "foreignObject", r, l, r ? r[0] : n.__k && fr(n, 0), c), r != null)
      for (u = r.length; u--; )
        r[u] != null && gm(r[u]);
    c || ("value" in f && (u = f.value) !== void 0 && (u !== t.value || a === "progress" && !u || a === "option" && u !== d.value) && hi(t, "value", u, d.value, !1), "checked" in f && (u = f.checked) !== void 0 && u !== t.checked && hi(t, "checked", u, d.checked, !1));
  }
  return t;
}
function km(t, e, n) {
  try {
    typeof t == "function" ? t(e) : t.current = e;
  } catch (o) {
    mt.__e(o, n);
  }
}
function xm(t, e, n) {
  var o, i;
  if (mt.unmount && mt.unmount(t), (o = t.ref) && (o.current && o.current !== t.__e || km(o, null, e)), (o = t.__c) != null) {
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
      o[i] && xm(o[i], e, n || typeof t.type != "function");
  n || t.__e == null || gm(t.__e), t.__ = t.__e = t.__d = void 0;
}
function kw(t, e, n) {
  return this.constructor(t, n);
}
ta = mm.slice, mt = { __e: function(t, e, n, o) {
  for (var i, r, l; e = e.__; )
    if ((i = e.__c) && !i.__)
      try {
        if ((r = i.constructor) && r.getDerivedStateFromError != null && (i.setState(r.getDerivedStateFromError(t)), l = i.__d), i.componentDidCatch != null && (i.componentDidCatch(t, o || {}), l = i.__d), l)
          return i.__E = i;
      } catch (c) {
        t = c;
      }
  throw t;
} }, hm = 0, dm = function(t) {
  return t != null && t.constructor === void 0;
}, Ho.prototype.setState = function(t, e) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = Oe({}, this.state), typeof t == "function" && (t = t(Oe({}, n), this.props)), t && Oe(n, t), t != null && this.__v && (e && this._sb.push(e), bf(this));
}, Ho.prototype.forceUpdate = function(t) {
  this.__v && (this.__e = !0, t && this.__h.push(t), bf(this));
}, Ho.prototype.render = na, Oo = [], ui.__r = 0;
var xw = 0;
function Y(t, e, n, o, i) {
  var r, l, c = {};
  for (l in e)
    l == "ref" ? r = e[l] : c[l] = e[l];
  var _ = { type: t, props: c, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: --xw, __source: i, __self: o };
  if (typeof t == "function" && (r = t.defaultProps))
    for (l in r)
      c[l] === void 0 && (c[l] = r[l]);
  return mt.vnode && mt.vnode(_), _;
}
let Sw = (t = 21) => crypto.getRandomValues(new Uint8Array(t)).reduce((e, n) => (n &= 63, n < 36 ? e += n.toString(36) : n < 62 ? e += (n - 26).toString(36).toUpperCase() : n > 62 ? e += "-" : e += "_", e), "");
var Sm, gt, Cm, Wo, xf, Em = {}, Am = [], Cw = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function He(t, e) {
  for (var n in e)
    t[n] = e[n];
  return t;
}
function Tm(t) {
  var e = t.parentNode;
  e && e.removeChild(t);
}
function Zl(t, e, n, o, i) {
  var r = { type: t, props: e, key: n, ref: o, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: i ?? ++Cm };
  return i == null && gt.vnode != null && gt.vnode(r), r;
}
function oa(t) {
  return t.children;
}
function Io(t, e) {
  this.props = t, this.context = e;
}
function ur(t, e) {
  if (e == null)
    return t.__ ? ur(t.__, t.__.__k.indexOf(t) + 1) : null;
  for (var n; e < t.__k.length; e++)
    if ((n = t.__k[e]) != null && n.__e != null)
      return n.__e;
  return typeof t.type == "function" ? ur(t) : null;
}
function Mm(t) {
  var e, n;
  if ((t = t.__) != null && t.__c != null) {
    for (t.__e = t.__c.base = null, e = 0; e < t.__k.length; e++)
      if ((n = t.__k[e]) != null && n.__e != null) {
        t.__e = t.__c.base = n.__e;
        break;
      }
    return Mm(t);
  }
}
function Sf(t) {
  (!t.__d && (t.__d = !0) && Wo.push(t) && !di.__r++ || xf !== gt.debounceRendering) && ((xf = gt.debounceRendering) || setTimeout)(di);
}
function di() {
  for (var t; di.__r = Wo.length; )
    t = Wo.sort(function(e, n) {
      return e.__v.__b - n.__v.__b;
    }), Wo = [], t.some(function(e) {
      var n, o, i, r, l, c;
      e.__d && (l = (r = (n = e).__v).__e, (c = n.__P) && (o = [], (i = He({}, r)).__v = r.__v + 1, Rm(c, r, i, n.__n, c.ownerSVGElement !== void 0, r.__h != null ? [l] : null, o, l ?? ur(r), r.__h), Aw(o, r), r.__e != l && Mm(r)));
    });
}
function Lm(t, e, n, o, i, r, l, c, _, h) {
  var s, d, f, a, u, b, p, m = o && o.__k || Am, g = m.length;
  for (n.__k = [], s = 0; s < e.length; s++)
    if ((a = n.__k[s] = (a = e[s]) == null || typeof a == "boolean" ? null : typeof a == "string" || typeof a == "number" || typeof a == "bigint" ? Zl(null, a, null, null, a) : Array.isArray(a) ? Zl(oa, { children: a }, null, null, null) : a.__b > 0 ? Zl(a.type, a.props, a.key, a.ref ? a.ref : null, a.__v) : a) != null) {
      if (a.__ = n, a.__b = n.__b + 1, (f = m[s]) === null || f && a.key == f.key && a.type === f.type)
        m[s] = void 0;
      else
        for (d = 0; d < g; d++) {
          if ((f = m[d]) && a.key == f.key && a.type === f.type) {
            m[d] = void 0;
            break;
          }
          f = null;
        }
      Rm(t, a, f = f || Em, i, r, l, c, _, h), u = a.__e, (d = a.ref) && f.ref != d && (p || (p = []), f.ref && p.push(f.ref, null, a), p.push(d, a.__c || u, a)), u != null ? (b == null && (b = u), typeof a.type == "function" && a.__k === f.__k ? a.__d = _ = Dm(a, _, t) : _ = Nm(t, a, f, m, u, _), typeof n.type == "function" && (n.__d = _)) : _ && f.__e == _ && _.parentNode != t && (_ = ur(f));
    }
  for (n.__e = b, s = g; s--; )
    m[s] != null && Om(m[s], m[s]);
  if (p)
    for (s = 0; s < p.length; s++)
      Pm(p[s], p[++s], p[++s]);
}
function Dm(t, e, n) {
  for (var o, i = t.__k, r = 0; i && r < i.length; r++)
    (o = i[r]) && (o.__ = t, e = typeof o.type == "function" ? Dm(o, e, n) : Nm(n, o, o, i, o.__e, e));
  return e;
}
function Nm(t, e, n, o, i, r) {
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
function Ew(t, e, n, o, i) {
  var r;
  for (r in n)
    r === "children" || r === "key" || r in e || pi(t, r, null, n[r], o);
  for (r in e)
    i && typeof e[r] != "function" || r === "children" || r === "key" || r === "value" || r === "checked" || n[r] === e[r] || pi(t, r, e[r], n[r], o);
}
function Cf(t, e, n) {
  e[0] === "-" ? t.setProperty(e, n) : t[e] = n == null ? "" : typeof n != "number" || Cw.test(e) ? n : n + "px";
}
function pi(t, e, n, o, i) {
  var r;
  t:
    if (e === "style")
      if (typeof n == "string")
        t.style.cssText = n;
      else {
        if (typeof o == "string" && (t.style.cssText = o = ""), o)
          for (e in o)
            n && e in n || Cf(t.style, e, "");
        if (n)
          for (e in n)
            o && n[e] === o[e] || Cf(t.style, e, n[e]);
      }
    else if (e[0] === "o" && e[1] === "n")
      r = e !== (e = e.replace(/Capture$/, "")), e = e.toLowerCase() in t ? e.toLowerCase().slice(2) : e.slice(2), t.l || (t.l = {}), t.l[e + r] = n, n ? o || t.addEventListener(e, r ? Af : Ef, r) : t.removeEventListener(e, r ? Af : Ef, r);
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
function Ef(t) {
  this.l[t.type + !1](gt.event ? gt.event(t) : t);
}
function Af(t) {
  this.l[t.type + !0](gt.event ? gt.event(t) : t);
}
function Rm(t, e, n, o, i, r, l, c, _) {
  var h, s, d, f, a, u, b, p, m, g, w, k, C, A, E, y = e.type;
  if (e.constructor !== void 0)
    return null;
  n.__h != null && (_ = n.__h, c = e.__e = n.__e, e.__h = null, r = [c]), (h = gt.__b) && h(e);
  try {
    t:
      if (typeof y == "function") {
        if (p = e.props, m = (h = y.contextType) && o[h.__c], g = h ? m ? m.props.value : h.__ : o, n.__c ? b = (s = e.__c = n.__c).__ = s.__E : ("prototype" in y && y.prototype.render ? e.__c = s = new y(p, g) : (e.__c = s = new Io(p, g), s.constructor = y, s.render = Mw), m && m.sub(s), s.props = p, s.state || (s.state = {}), s.context = g, s.__n = o, d = s.__d = !0, s.__h = [], s._sb = []), s.__s == null && (s.__s = s.state), y.getDerivedStateFromProps != null && (s.__s == s.state && (s.__s = He({}, s.__s)), He(s.__s, y.getDerivedStateFromProps(p, s.__s))), f = s.props, a = s.state, d)
          y.getDerivedStateFromProps == null && s.componentWillMount != null && s.componentWillMount(), s.componentDidMount != null && s.__h.push(s.componentDidMount);
        else {
          if (y.getDerivedStateFromProps == null && p !== f && s.componentWillReceiveProps != null && s.componentWillReceiveProps(p, g), !s.__e && s.shouldComponentUpdate != null && s.shouldComponentUpdate(p, s.__s, g) === !1 || e.__v === n.__v) {
            for (s.props = p, s.state = s.__s, e.__v !== n.__v && (s.__d = !1), s.__v = e, e.__e = n.__e, e.__k = n.__k, e.__k.forEach(function(x) {
              x && (x.__ = e);
            }), w = 0; w < s._sb.length; w++)
              s.__h.push(s._sb[w]);
            s._sb = [], s.__h.length && l.push(s);
            break t;
          }
          s.componentWillUpdate != null && s.componentWillUpdate(p, s.__s, g), s.componentDidUpdate != null && s.__h.push(function() {
            s.componentDidUpdate(f, a, u);
          });
        }
        if (s.context = g, s.props = p, s.__v = e, s.__P = t, k = gt.__r, C = 0, "prototype" in y && y.prototype.render) {
          for (s.state = s.__s, s.__d = !1, k && k(e), h = s.render(s.props, s.state, s.context), A = 0; A < s._sb.length; A++)
            s.__h.push(s._sb[A]);
          s._sb = [];
        } else
          do
            s.__d = !1, k && k(e), h = s.render(s.props, s.state, s.context), s.state = s.__s;
          while (s.__d && ++C < 25);
        s.state = s.__s, s.getChildContext != null && (o = He(He({}, o), s.getChildContext())), d || s.getSnapshotBeforeUpdate == null || (u = s.getSnapshotBeforeUpdate(f, a)), E = h != null && h.type === oa && h.key == null ? h.props.children : h, Lm(t, Array.isArray(E) ? E : [E], e, n, o, i, r, l, c, _), s.base = e.__e, e.__h = null, s.__h.length && l.push(s), b && (s.__E = s.__ = null), s.__e = !1;
      } else
        r == null && e.__v === n.__v ? (e.__k = n.__k, e.__e = n.__e) : e.__e = Tw(n.__e, e, n, o, i, r, l, _);
    (h = gt.diffed) && h(e);
  } catch (x) {
    e.__v = null, (_ || r != null) && (e.__e = c, e.__h = !!_, r[r.indexOf(c)] = null), gt.__e(x, e, n);
  }
}
function Aw(t, e) {
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
function Tw(t, e, n, o, i, r, l, c) {
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
    if (r = r && Sm.call(t.childNodes), h = (d = n.props || Em).dangerouslySetInnerHTML, s = f.dangerouslySetInnerHTML, !c) {
      if (r != null)
        for (d = {}, u = 0; u < t.attributes.length; u++)
          d[t.attributes[u].name] = t.attributes[u].value;
      (s || h) && (s && (h && s.__html == h.__html || s.__html === t.innerHTML) || (t.innerHTML = s && s.__html || ""));
    }
    if (Ew(t, f, d, i, c), s)
      e.__k = [];
    else if (u = e.props.children, Lm(t, Array.isArray(u) ? u : [u], e, n, o, i && a !== "foreignObject", r, l, r ? r[0] : n.__k && ur(n, 0), c), r != null)
      for (u = r.length; u--; )
        r[u] != null && Tm(r[u]);
    c || ("value" in f && (u = f.value) !== void 0 && (u !== t.value || a === "progress" && !u || a === "option" && u !== d.value) && pi(t, "value", u, d.value, !1), "checked" in f && (u = f.checked) !== void 0 && u !== t.checked && pi(t, "checked", u, d.checked, !1));
  }
  return t;
}
function Pm(t, e, n) {
  try {
    typeof t == "function" ? t(e) : t.current = e;
  } catch (o) {
    gt.__e(o, n);
  }
}
function Om(t, e, n) {
  var o, i;
  if (gt.unmount && gt.unmount(t), (o = t.ref) && (o.current && o.current !== t.__e || Pm(o, null, e)), (o = t.__c) != null) {
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
      o[i] && Om(o[i], e, n || typeof t.type != "function");
  n || t.__e == null || Tm(t.__e), t.__ = t.__e = t.__d = void 0;
}
function Mw(t, e, n) {
  return this.constructor(t, n);
}
Sm = Am.slice, gt = { __e: function(t, e, n, o) {
  for (var i, r, l; e = e.__; )
    if ((i = e.__c) && !i.__)
      try {
        if ((r = i.constructor) && r.getDerivedStateFromError != null && (i.setState(r.getDerivedStateFromError(t)), l = i.__d), i.componentDidCatch != null && (i.componentDidCatch(t, o || {}), l = i.__d), l)
          return i.__E = i;
      } catch (c) {
        t = c;
      }
  throw t;
} }, Cm = 0, Io.prototype.setState = function(t, e) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = He({}, this.state), typeof t == "function" && (t = t(He({}, n), this.props)), t && He(n, t), t != null && this.__v && (e && this._sb.push(e), Sf(this));
}, Io.prototype.forceUpdate = function(t) {
  this.__v && (this.__e = !0, t && this.__h.push(t), Sf(this));
}, Io.prototype.render = oa, Wo = [], di.__r = 0;
var Lw = 0;
function Tf(t, e, n, o, i) {
  var r, l, c = {};
  for (l in e)
    l == "ref" ? r = e[l] : c[l] = e[l];
  var _ = { type: t, props: c, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: --Lw, __source: i, __self: o };
  if (typeof t == "function" && (r = t.defaultProps))
    for (l in r)
      c[l] === void 0 && (c[l] = r[l]);
  return gt.vnode && gt.vnode(_), _;
}
var rn, sn;
class Mf extends Io {
  constructor(n) {
    super(n);
    M(this, rn, 0);
    M(this, sn, null);
    L(this, "_handleWheel", (n) => {
      const { wheelContainer: o } = this.props, i = n.target;
      if (!(!i || !o) && (typeof o == "string" && i.closest(o) || typeof o == "object")) {
        const r = (this.props.type === "horz" ? n.deltaX : n.deltaY) * (this.props.wheelSpeed ?? 1);
        this.scrollOffset(r) && n.preventDefault();
      }
    });
    L(this, "_handleMouseMove", (n) => {
      const { dragStart: o } = this.state;
      o && (v(this, rn) && cancelAnimationFrame(v(this, rn)), H(this, rn, requestAnimationFrame(() => {
        const i = this.props.type === "horz" ? n.clientX - o.x : n.clientY - o.y;
        this.scroll(o.offset + i * this.props.scrollSize / this.props.clientSize), H(this, rn, 0);
      })), n.preventDefault());
    });
    L(this, "_handleMouseUp", () => {
      this.state.dragStart && this.setState({
        dragStart: !1
      });
    });
    L(this, "_handleMouseDown", (n) => {
      this.state.dragStart || this.setState({ dragStart: { x: n.clientX, y: n.clientY, offset: this.scrollPos } }), n.stopPropagation();
    });
    L(this, "_handleClick", (n) => {
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
    n && (H(this, sn, typeof n == "string" ? document : n.current), v(this, sn).addEventListener("wheel", this._handleWheel, { passive: !1 }));
  }
  componentWillUnmount() {
    document.removeEventListener("mousemove", this._handleMouseMove), document.removeEventListener("mouseup", this._handleMouseUp), v(this, sn) && v(this, sn).removeEventListener("wheel", this._handleWheel);
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
    return o === "horz" ? (u.height = i, u.width = n, b.width = this.barSize, b.left = Math.round(Math.min(d, f) * (n - b.width) / d)) : (u.width = i, u.height = n, b.height = this.barSize, b.top = Math.round(Math.min(d, f) * (n - b.height) / d)), /* @__PURE__ */ Tf(
      "div",
      {
        className: F("scrollbar", r, {
          "is-vert": o === "vert",
          "is-horz": o === "horz",
          "is-dragging": a
        }),
        style: u,
        onMouseDown: this._handleClick,
        children: /* @__PURE__ */ Tf(
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
rn = new WeakMap(), sn = new WeakMap();
function Lf(t, e, n) {
  return t && (e && (t = Math.max(e, t)), n && (t = Math.min(n, t))), t;
}
function Hm({ col: t, className: e, height: n, row: o, onRenderCell: i, style: r, outerStyle: l, children: c, outerClass: _, ...h }) {
  var y;
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
  }], b = ["dtable-cell-content", e], p = [c ?? ((y = o.data) == null ? void 0 : y[t.name]) ?? ""], m = i ? i(p, { row: o, col: t }, ea) : p, g = [], w = [], k = {}, C = {};
  let A = "div";
  m == null || m.forEach((x) => {
    if (typeof x == "object" && x && !dm(x) && ("html" in x || "className" in x || "style" in x || "attrs" in x || "children" in x || "tagName" in x)) {
      const D = x.outer ? g : w;
      x.html ? D.push(/* @__PURE__ */ Y("div", { className: F("dtable-cell-html", x.className), style: x.style, dangerouslySetInnerHTML: { __html: x.html }, ...x.attrs ?? {} })) : (x.style && Object.assign(x.outer ? s : a, x.style), x.className && (x.outer ? u : b).push(x.className), x.children && D.push(x.children), x.attrs && Object.assign(x.outer ? k : C, x.attrs)), x.tagName && !x.outer && (A = x.tagName);
    } else
      w.push(x);
  });
  const E = A;
  return /* @__PURE__ */ Y(
    "div",
    {
      className: F(u),
      style: s,
      "data-col": t.name,
      ...h,
      ...k,
      children: [
        w.length > 0 && /* @__PURE__ */ Y(E, { className: F(b), style: a, ...C, children: w }),
        g
      ]
    }
  );
}
function Jl({ row: t, className: e, top: n = 0, left: o = 0, width: i, height: r, cols: l, CellComponent: c = Hm, onRenderCell: _ }) {
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
function Wm({
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
  CellComponent: f = Hm,
  onRenderCell: a,
  style: u,
  ...b
}) {
  let p = null;
  i != null && i.length && (p = /* @__PURE__ */ Y(
    Jl,
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
    Jl,
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
  let g = null;
  r != null && r.length && (g = /* @__PURE__ */ Y(
    Jl,
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
        g
      ]
    }
  );
}
function Dw({ height: t, onRenderRow: e, ...n }) {
  const o = {
    height: t,
    ...n,
    row: { id: "HEADER", index: -1, top: 0 },
    className: "dtable-in-header",
    top: 0
  };
  if (e) {
    const i = e({ props: o }, ea);
    i && Object.assign(o, i);
  }
  return /* @__PURE__ */ Y("div", { className: "dtable-header", style: { height: t }, children: /* @__PURE__ */ Y(Wm, { ...o }) });
}
function Nw({
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
    }, d = c == null ? void 0 : c({ props: s, row: h }, ea);
    return d && Object.assign(s, d), /* @__PURE__ */ Y(Wm, { ...s });
  }) });
}
const mi = /* @__PURE__ */ new Map(), gi = [];
function Im(t, e) {
  const { name: n } = t;
  if (!(e != null && e.override) && mi.has(n))
    throw new Error(`DTable: Plugin with name ${n} already exists`);
  mi.set(n, t), e != null && e.buildIn && !gi.includes(n) && gi.push(n);
}
function Xn(t, e) {
  Im(t, e);
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
function Um(t) {
  return mi.delete(t);
}
function Rw(t) {
  if (typeof t == "string") {
    const e = mi.get(t);
    return e || console.warn(`DTable: Cannot found plugin "${t}"`), e;
  }
  if (typeof t == "function" && "plugin" in t)
    return t.plugin;
  if (typeof t == "object")
    return t;
  console.warn("DTable: Invalid plugin", t);
}
function Fm(t, e, n) {
  return e.forEach((o) => {
    var r;
    if (!o)
      return;
    const i = Rw(o);
    i && (n.has(i.name) || ((r = i.plugins) != null && r.length && Fm(t, i.plugins, n), t.push(i), n.add(i.name)));
  }), t;
}
function Pw(t = [], e = !0) {
  return e && gi.length && t.unshift(...gi), t != null && t.length ? Fm([], t, /* @__PURE__ */ new Set()) : [];
}
function Df() {
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
var Qr, ln, In, be, Gt, we, $t, Ft, qt, Un, Rr, Pr, _e, Fn, Bn, ll, Bm, cl, jm, al, Vm, _l, zm, Or, vc, fl, ul, Hr, Wr, hl, dl, pl, Ym, ml, Gm, gl, qm;
let Ow = (Qr = class extends Ho {
  constructor(n) {
    super(n);
    M(this, ll);
    M(this, cl);
    M(this, al);
    M(this, _l);
    M(this, Or);
    M(this, pl);
    M(this, ml);
    M(this, gl);
    L(this, "ref", vw());
    M(this, ln, 0);
    M(this, In, void 0);
    M(this, be, !1);
    M(this, Gt, void 0);
    M(this, we, void 0);
    M(this, $t, []);
    M(this, Ft, void 0);
    M(this, qt, /* @__PURE__ */ new Map());
    M(this, Un, {});
    M(this, Rr, void 0);
    M(this, Pr, []);
    L(this, "updateLayout", () => {
      v(this, ln) && cancelAnimationFrame(v(this, ln)), H(this, ln, requestAnimationFrame(() => {
        H(this, Ft, void 0), this.forceUpdate(), H(this, ln, 0);
      }));
    });
    M(this, _e, (n, o) => {
      o = o || n.type;
      const i = v(this, qt).get(o);
      if (i != null && i.length) {
        for (const r of i)
          if (r.call(this, n) === !1) {
            n.stopPropagation(), n.preventDefault();
            break;
          }
      }
    });
    M(this, Fn, (n) => {
      v(this, _e).call(this, n, `window_${n.type}`);
    });
    M(this, Bn, (n) => {
      v(this, _e).call(this, n, `document_${n.type}`);
    });
    M(this, fl, (n, o) => {
      if (this.options.onRenderRow) {
        const i = this.options.onRenderRow.call(this, n, o);
        i && Object.assign(n.props, i);
      }
      return v(this, $t).forEach((i) => {
        if (i.onRenderRow) {
          const r = i.onRenderRow.call(this, n, o);
          r && Object.assign(n.props, r);
        }
      }), n.props;
    });
    M(this, ul, (n, o) => (this.options.onRenderHeaderRow && (n.props = this.options.onRenderHeaderRow.call(this, n, o)), v(this, $t).forEach((i) => {
      i.onRenderHeaderRow && (n.props = i.onRenderHeaderRow.call(this, n, o));
    }), n.props));
    M(this, Hr, (n, o, i) => {
      const { row: r, col: l } = o;
      n[0] = this.getCellValue(r, l);
      const c = r.id === "HEADER" ? "onRenderHeaderCell" : "onRenderCell";
      return l.setting[c] && (n = l.setting[c].call(this, n, o, i)), this.options[c] && (n = this.options[c].call(this, n, o, i)), v(this, $t).forEach((_) => {
        _[c] && (n = _[c].call(this, n, o, i));
      }), n;
    });
    M(this, Wr, (n, o) => {
      o === "horz" ? this.scroll({ scrollLeft: n }) : this.scroll({ scrollTop: n });
    });
    M(this, hl, (n) => {
      var c, _, h, s, d;
      const o = this.getPointerInfo(n);
      if (!o)
        return;
      const { rowID: i, colName: r, cellElement: l } = o;
      if (i === "HEADER")
        l && ((c = this.options.onHeaderCellClick) == null || c.call(this, n, { colName: r, element: l }), v(this, $t).forEach((f) => {
          var a;
          (a = f.onHeaderCellClick) == null || a.call(this, n, { colName: r, element: l });
        }));
      else {
        const { rowElement: f } = o, a = this.layout.visibleRows.find((u) => u.id === i);
        if (l) {
          if (((_ = this.options.onCellClick) == null ? void 0 : _.call(this, n, { colName: r, rowID: i, rowInfo: a, element: l, rowElement: f })) === !0)
            return;
          for (const u of v(this, $t))
            if (((h = u.onCellClick) == null ? void 0 : h.call(this, n, { colName: r, rowID: i, rowInfo: a, element: l, rowElement: f })) === !0)
              return;
        }
        if (((s = this.options.onRowClick) == null ? void 0 : s.call(this, n, { rowID: i, rowInfo: a, element: f })) === !0)
          return;
        for (const u of v(this, $t))
          if (((d = u.onRowClick) == null ? void 0 : d.call(this, n, { rowID: i, rowInfo: a, element: f })) === !0)
            return;
      }
    });
    M(this, dl, (n) => {
      const o = n.key.toLowerCase();
      if (["pageup", "pagedown", "home", "end"].includes(o))
        return !this.scroll({ to: o.replace("page", "") });
    });
    H(this, In, n.id ?? `dtable-${Sw(10)}`), this.state = { scrollTop: 0, scrollLeft: 0, renderCount: 0 }, H(this, we, Object.freeze(Pw(n.plugins))), v(this, we).forEach((o) => {
      var c;
      const { methods: i, data: r, state: l } = o;
      i && Object.entries(i).forEach(([_, h]) => {
        typeof h == "function" && Object.assign(this, { [_]: h.bind(this) });
      }), r && Object.assign(v(this, Un), r.call(this)), l && Object.assign(this.state, l.call(this)), (c = o.onCreate) == null || c.call(this, o);
    });
  }
  get options() {
    var n;
    return ((n = v(this, Ft)) == null ? void 0 : n.options) || v(this, Gt) || Df();
  }
  get plugins() {
    return v(this, $t);
  }
  get layout() {
    return v(this, Ft);
  }
  get id() {
    return v(this, In);
  }
  get data() {
    return v(this, Un);
  }
  get parent() {
    var n;
    return this.props.parent ?? ((n = this.ref.current) == null ? void 0 : n.parentElement);
  }
  componentWillReceiveProps() {
    H(this, Gt, void 0);
  }
  componentDidMount() {
    if (v(this, be) ? this.forceUpdate() : W(this, Or, vc).call(this), v(this, $t).forEach((n) => {
      let { events: o } = n;
      o && (typeof o == "function" && (o = o.call(this)), Object.entries(o).forEach(([i, r]) => {
        r && this.on(i, r);
      }));
    }), this.on("click", v(this, hl)), this.on("keydown", v(this, dl)), this.options.responsive) {
      if (typeof ResizeObserver < "u") {
        const { parent: n } = this;
        if (n) {
          const o = new ResizeObserver(this.updateLayout);
          o.observe(n), H(this, Rr, o);
        }
      }
      this.on("window_resize", this.updateLayout);
    }
    v(this, $t).forEach((n) => {
      var o;
      (o = n.onMounted) == null || o.call(this);
    });
  }
  componentDidUpdate() {
    v(this, be) ? W(this, Or, vc).call(this) : v(this, $t).forEach((n) => {
      var o;
      (o = n.onUpdated) == null || o.call(this);
    });
  }
  componentWillUnmount() {
    var o;
    (o = v(this, Rr)) == null || o.disconnect();
    const { current: n } = this.ref;
    if (n)
      for (const i of v(this, qt).keys())
        i.startsWith("window_") ? window.removeEventListener(i.replace("window_", ""), v(this, Fn)) : i.startsWith("document_") ? document.removeEventListener(i.replace("document_", ""), v(this, Bn)) : n.removeEventListener(i, v(this, _e));
    v(this, $t).forEach((i) => {
      var r;
      (r = i.onUnmounted) == null || r.call(this);
    }), v(this, we).forEach((i) => {
      var r;
      (r = i.onDestory) == null || r.call(this);
    }), H(this, Un, {}), v(this, qt).clear();
  }
  on(n, o, i) {
    var l;
    i && (n = `${i}_${n}`);
    const r = v(this, qt).get(n);
    r ? r.push(o) : (v(this, qt).set(n, [o]), n.startsWith("window_") ? window.addEventListener(n.replace("window_", ""), v(this, Fn)) : n.startsWith("document_") ? document.addEventListener(n.replace("document_", ""), v(this, Bn)) : (l = this.ref.current) == null || l.addEventListener(n, v(this, _e)));
  }
  off(n, o, i) {
    var c;
    i && (n = `${i}_${n}`);
    const r = v(this, qt).get(n);
    if (!r)
      return;
    const l = r.indexOf(o);
    l >= 0 && r.splice(l, 1), r.length || (v(this, qt).delete(n), n.startsWith("window_") ? window.removeEventListener(n.replace("window_", ""), v(this, Fn)) : n.startsWith("document_") ? document.removeEventListener(n.replace("document_", ""), v(this, Bn)) : (c = this.ref.current) == null || c.removeEventListener(n, v(this, _e)));
  }
  emitCustomEvent(n, o) {
    v(this, _e).call(this, o instanceof Event ? o : new CustomEvent(n, { detail: o }), n);
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
    if (!v(this, Gt))
      return;
    typeof n == "function" && (o = n, n = {});
    const { dirtyType: i, state: r } = n;
    if (i === "layout")
      H(this, Ft, void 0);
    else if (i === "options") {
      if (H(this, Gt, void 0), !v(this, Ft))
        return;
      H(this, Ft, void 0);
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
    return Ir(v(this, Pr), n, o, i, this.options.lang) ?? `{i18n:${n}}`;
  }
  render() {
    const n = W(this, gl, qm).call(this), { className: o, rowHover: i, colHover: r, cellHover: l, bordered: c, striped: _, scrollbarHover: h } = this.options, s = { width: n == null ? void 0 : n.width, height: n == null ? void 0 : n.height }, d = ["dtable", o, {
      "dtable-hover-row": i,
      "dtable-hover-col": r,
      "dtable-hover-cell": l,
      "dtable-bordered": c,
      "dtable-striped": _,
      "dtable-scrolled-down": ((n == null ? void 0 : n.scrollTop) ?? 0) > 0,
      "scrollbar-hover": h
    }], f = [];
    return n && v(this, $t).forEach((a) => {
      var b;
      const u = (b = a.onRender) == null ? void 0 : b.call(this, n);
      u && (u.style && Object.assign(s, u.style), u.className && d.push(u.className), u.children && f.push(u.children));
    }), /* @__PURE__ */ Y(
      "div",
      {
        id: v(this, In),
        className: F(d),
        style: s,
        ref: this.ref,
        tabIndex: -1,
        children: [
          n && W(this, ll, Bm).call(this, n),
          n && W(this, cl, jm).call(this, n),
          n && W(this, al, Vm).call(this, n),
          n && W(this, _l, zm).call(this, n)
        ]
      }
    );
  }
}, ln = new WeakMap(), In = new WeakMap(), be = new WeakMap(), Gt = new WeakMap(), we = new WeakMap(), $t = new WeakMap(), Ft = new WeakMap(), qt = new WeakMap(), Un = new WeakMap(), Rr = new WeakMap(), Pr = new WeakMap(), _e = new WeakMap(), Fn = new WeakMap(), Bn = new WeakMap(), ll = new WeakSet(), Bm = function(n) {
  const { header: o, colsInfo: i, headerHeight: r, scrollLeft: l } = n;
  if (!o)
    return null;
  if (o === !0)
    return /* @__PURE__ */ Y(
      Dw,
      {
        scrollLeft: l,
        height: r,
        onRenderCell: v(this, Hr),
        onRenderRow: v(this, ul),
        ...i
      }
    );
  const c = Array.isArray(o) ? o : [o];
  return /* @__PURE__ */ Y(
    sc,
    {
      className: "dtable-header",
      style: { height: r },
      renders: c,
      generateArgs: [n],
      generatorThis: this
    }
  );
}, cl = new WeakSet(), jm = function(n) {
  const { headerHeight: o, rowsHeight: i, visibleRows: r, rowHeight: l, colsInfo: c, scrollLeft: _, scrollTop: h } = n;
  return /* @__PURE__ */ Y(
    Nw,
    {
      top: o,
      height: i,
      rows: r,
      rowHeight: l,
      scrollLeft: _,
      scrollTop: h,
      onRenderCell: v(this, Hr),
      onRenderRow: v(this, fl),
      ...c
    }
  );
}, al = new WeakSet(), Vm = function(n) {
  const { footer: o } = n;
  if (!o)
    return null;
  const i = typeof o == "function" ? o.call(this, n) : Array.isArray(o) ? o : [o];
  return /* @__PURE__ */ Y(
    sc,
    {
      className: "dtable-footer",
      style: { height: n.footerHeight, top: n.rowsHeight + n.headerHeight },
      renders: i,
      generateArgs: [n],
      generatorThis: this,
      generators: n.footerGenerators
    }
  );
}, _l = new WeakSet(), zm = function(n) {
  const o = [], { scrollLeft: i, colsInfo: r, scrollTop: l, rowsHeight: c, rowsHeightTotal: _, footerHeight: h } = n, { scrollColsWidth: s, scrollWidth: d } = r, { scrollbarSize: f = 12, horzScrollbarPos: a } = this.options;
  return s > d && o.push(
    /* @__PURE__ */ Y(
      Mf,
      {
        type: "horz",
        scrollPos: i,
        scrollSize: s,
        clientSize: d,
        onScroll: v(this, Wr),
        left: r.fixedLeftWidth,
        bottom: (a === "inside" ? 0 : -f) + h,
        size: f,
        wheelContainer: this.ref
      },
      "horz"
    )
  ), _ > c && o.push(
    /* @__PURE__ */ Y(
      Mf,
      {
        type: "vert",
        scrollPos: l,
        scrollSize: _,
        clientSize: c,
        onScroll: v(this, Wr),
        right: 0,
        size: f,
        top: n.headerHeight,
        wheelContainer: this.ref
      },
      "vert"
    )
  ), o.length ? o : null;
}, Or = new WeakSet(), vc = function() {
  var n;
  H(this, be, !1), (n = this.options.afterRender) == null || n.call(this), v(this, $t).forEach((o) => {
    var i;
    return (i = o.afterRender) == null ? void 0 : i.call(this);
  });
}, fl = new WeakMap(), ul = new WeakMap(), Hr = new WeakMap(), Wr = new WeakMap(), hl = new WeakMap(), dl = new WeakMap(), pl = new WeakSet(), Ym = function() {
  if (v(this, Gt))
    return !1;
  const o = { ...Df(), ...v(this, we).reduce((i, r) => {
    const { defaultOptions: l } = r;
    return l && Object.assign(i, l), i;
  }, {}), ...this.props };
  return H(this, Gt, o), H(this, $t, v(this, we).reduce((i, r) => {
    const { when: l, options: c } = r;
    return (!l || l(o)) && (i.push(r), c && Object.assign(o, typeof c == "function" ? c.call(this, o) : c)), i;
  }, [])), H(this, Pr, [this.options.i18n, ...this.plugins.map((i) => i.i18n)].filter(Boolean)), !0;
}, ml = new WeakSet(), Gm = function() {
  var X, vt;
  const { plugins: n } = this;
  let o = v(this, Gt);
  const i = {
    flex: /* @__PURE__ */ Y("div", { style: "flex:auto" }),
    divider: /* @__PURE__ */ Y("div", { style: "width:1px;margin:var(--space);background:var(--color-border);height:50%" })
  };
  n.forEach((U) => {
    var yt;
    const K = (yt = U.beforeLayout) == null ? void 0 : yt.call(this, o);
    K && (o = { ...o, ...K }), Object.assign(i, U.footer);
  });
  const { defaultColWidth: r, minColWidth: l, maxColWidth: c } = o, _ = [], h = [], s = [], d = {}, f = [], a = [];
  let u = 0, b = 0, p = 0;
  o.cols.forEach((U) => {
    if (U.hidden)
      return;
    const {
      name: K,
      type: yt = "",
      fixed: st = !1,
      flex: G = !1,
      width: it = r,
      minWidth: Et = l,
      maxWidth: At = c,
      ...eg
    } = U, J = {
      name: K,
      type: yt,
      setting: {
        name: K,
        type: yt,
        fixed: st,
        flex: G,
        width: it,
        minWidth: Et,
        maxWidth: At,
        ...eg
      },
      flex: st ? 0 : G === !0 ? 1 : typeof G == "number" ? G : 0,
      left: 0,
      width: Lf(it, Et, At),
      realWidth: 0,
      visible: !0,
      index: f.length
    };
    n.forEach((la) => {
      var ca, aa;
      const Vr = (ca = la.colTypes) == null ? void 0 : ca[yt];
      if (Vr) {
        const _a = typeof Vr == "function" ? Vr(J) : Vr;
        _a && Object.assign(J.setting, _a);
      }
      (aa = la.onAddCol) == null || aa.call(this, J);
    }), J.width = Lf(J.setting.width ?? J.width, J.setting.minWidth ?? Et, J.setting.maxWidth ?? At), J.realWidth = J.realWidth || J.width, st === "left" ? (J.left = u, u += J.width, _.push(J)) : st === "right" ? (J.left = b, b += J.width, h.push(J)) : (J.left = p, p += J.width, s.push(J)), J.flex && a.push(J), f.push(J), d[J.name] = J;
  });
  let m = o.width, g = 0;
  const w = u + p + b;
  if (typeof m == "function" && (m = m.call(this, w)), m === "auto")
    g = w;
  else if (m === "100%") {
    const { parent: U } = this;
    if (U)
      g = U.clientWidth;
    else {
      g = 0, H(this, be, !0);
      return;
    }
  } else
    g = m ?? 0;
  const { data: k, rowKey: C = "id", rowHeight: A } = o, E = [], y = (U, K, yt) => {
    var G, it;
    const st = { data: yt ?? { [C]: U }, id: U, index: E.length, top: 0 };
    if (yt || (st.lazy = !0), E.push(st), ((G = o.onAddRow) == null ? void 0 : G.call(this, st, K)) !== !1) {
      for (const Et of n)
        if (((it = Et.onAddRow) == null ? void 0 : it.call(this, st, K)) === !1)
          return;
    }
  };
  if (typeof k == "number")
    for (let U = 0; U < k; U++)
      y(`${U}`, U);
  else
    Array.isArray(k) && k.forEach((U, K) => {
      typeof U == "object" ? y(`${U[C] ?? ""}`, K, U) : y(`${U ?? ""}`, K);
    });
  let x = E;
  const D = {};
  if (o.onAddRows) {
    const U = o.onAddRows.call(this, x);
    U && (x = U);
  }
  for (const U of n) {
    const K = (X = U.onAddRows) == null ? void 0 : X.call(this, x);
    K && (x = K);
  }
  x.forEach((U, K) => {
    D[U.id] = U, U.index = K, U.top = U.index * A;
  });
  const { header: z, footer: B } = o, N = z ? o.headerHeight || A : 0, S = B ? o.footerHeight || A : 0;
  let $ = o.height, R = 0;
  const T = x.length * A, O = N + S + T;
  if (typeof $ == "function" && ($ = $.call(this, O)), $ === "auto")
    R = O;
  else if (typeof $ == "object")
    R = Math.min($.max, Math.max($.min, O));
  else if ($ === "100%") {
    const { parent: U } = this;
    if (U)
      R = U.clientHeight;
    else {
      R = 0, H(this, be, !0);
      return;
    }
  } else
    R = $;
  const P = R - N - S, I = g - u - b, V = {
    options: o,
    allRows: E,
    width: g,
    height: R,
    rows: x,
    rowsMap: D,
    rowHeight: A,
    rowsHeight: P,
    rowsHeightTotal: T,
    header: z,
    footer: B,
    footerGenerators: i,
    headerHeight: N,
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
  }, j = (vt = o.onLayout) == null ? void 0 : vt.call(this, V);
  j && Object.assign(V, j), n.forEach((U) => {
    if (U.onLayout) {
      const K = U.onLayout.call(this, V);
      K && Object.assign(V, K);
    }
  }), H(this, Ft, V);
}, gl = new WeakSet(), qm = function() {
  (W(this, pl, Ym).call(this) || !v(this, Ft)) && W(this, ml, Gm).call(this);
  const { layout: n } = this;
  if (!n)
    return;
  let { scrollLeft: o } = this.state;
  const { flexCols: i, colsInfo: { scrollCols: r, scrollWidth: l, scrollColsWidth: c } } = n;
  if (i.length) {
    const w = l - c;
    if (w > 0) {
      const k = i.reduce((A, E) => A + E.flex, 0);
      let C = 0;
      i.forEach((A) => {
        const E = Math.min(w - C, Math.ceil(w * (A.flex / k)));
        A.realWidth = E + A.width, C += A.realWidth;
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
  const { rowsHeightTotal: h, rowsHeight: s, rows: d, rowHeight: f } = n, a = Math.min(Math.max(0, h - s), this.state.scrollTop), u = Math.floor(a / f), b = a + s, p = Math.min(d.length, Math.ceil(b / f)), m = [], { rowDataGetter: g } = this.options;
  for (let w = u; w < p; w++) {
    const k = d[w];
    k.lazy && g && (k.data = g([k.id])[0], k.lazy = !1), m.push(k);
  }
  return n.visibleRows = m, n.scrollTop = a, n.scrollLeft = o, n;
}, L(Qr, "addPlugin", Im), L(Qr, "removePlugin", Um), Qr);
function Nf(t, e) {
  e !== void 0 ? t.data.hoverCol = e : e = t.data.hoverCol;
  const { current: n } = t.ref;
  if (!n)
    return;
  const o = "dtable-col-hover";
  n.querySelectorAll(`.${o}`).forEach((i) => i.classList.remove(o)), typeof e == "string" && e.length && n.querySelectorAll(`.dtable-cell[data-col="${e}"]`).forEach((i) => i.classList.add(o));
}
const Hw = {
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
      Nf(this, o);
    },
    mouseleave() {
      Nf(this, !1);
    }
  }
}, Ww = Xn(Hw, { buildIn: !0 });
function Iw(t, e) {
  var l, c;
  typeof t == "boolean" && (e = t, t = void 0);
  const n = this.state.checkedRows, o = {}, { canRowCheckable: i } = this.options, r = (_, h) => {
    i && !i.call(this, _) || !!n[_] === h || (h ? n[_] = !0 : delete n[_], o[_] = h);
  };
  if (t === void 0 ? (e === void 0 && (e = !Xm.call(this)), (l = this.layout) == null || l.allRows.forEach(({ id: _ }) => {
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
function Uw(t) {
  return this.state.checkedRows[t] ?? !1;
}
function Xm() {
  var n, o;
  const t = this.getChecks().length, { canRowCheckable: e } = this.options;
  return e ? t === ((n = this.layout) == null ? void 0 : n.allRows.reduce((i, r) => i + (e.call(this, r.id) ? 1 : 0), 0)) : t === ((o = this.layout) == null ? void 0 : o.allRows.length);
}
function Fw() {
  return Object.keys(this.state.checkedRows);
}
const Bw = {
  name: "checkable",
  defaultOptions: { checkable: !0 },
  when: (t) => !!t.checkable,
  state() {
    return { checkedRows: {} };
  },
  methods: {
    toggleCheckRows: Iw,
    isRowChecked: Uw,
    isAllRowChecked: Xm,
    getChecks: Fw
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
}, jw = Xn(Bw);
var Km = /* @__PURE__ */ ((t) => (t.unknown = "", t.collapsed = "collapsed", t.expanded = "expanded", t.hidden = "hidden", t.normal = "normal", t))(Km || {});
function bc(t) {
  const e = this.data.nestedMap.get(t);
  if (!e || e.state !== "")
    return e ?? { state: "normal", level: -1 };
  if (!e.parent && !e.children)
    return e.state = "normal", e;
  const n = this.state.collapsedRows, o = e.children && n && n[t];
  let i = !1, { parent: r } = e;
  for (; r; ) {
    const l = bc.call(this, r);
    if (l.state !== "expanded") {
      i = !0;
      break;
    }
    r = l.parent;
  }
  return e.state = i ? "hidden" : o ? "collapsed" : e.children ? "expanded" : "normal", e.level = e.parent ? bc.call(this, e.parent).level + 1 : 0, e;
}
function Vw(t, e) {
  let n = this.state.collapsedRows ?? {};
  const { nestedMap: o } = this.data;
  if (t === "HEADER")
    if (e === void 0 && (e = !Zm.call(this)), e) {
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
function Zm() {
  const t = this.data.nestedMap.values();
  for (const e of t)
    if (e.state === "expanded")
      return !1;
  return !0;
}
function Jm(t, e = 0, n, o = 0) {
  var i;
  n || (n = [...t.keys()]);
  for (const r of n) {
    const l = t.get(r);
    l && (l.level === o && (l.order = e++), (i = l.children) != null && i.length && (e = Jm(t, e, l.children, o + 1)));
  }
  return e;
}
function Qm(t, e, n, o) {
  const i = t.getNestedRowInfo(e);
  return !i || i.state === "" || !i.children || i.children.forEach((r) => {
    o[r] = n, Qm(t, r, n, o);
  }), i;
}
function tg(t, e, n, o, i) {
  var c;
  const r = t.getNestedRowInfo(e);
  if (!r || r.state === "")
    return;
  ((c = r.children) == null ? void 0 : c.every((_) => {
    const h = !!(o[_] !== void 0 ? o[_] : i[_]);
    return n === h;
  })) && (o[e] = n), r.parent && tg(t, r.parent, n, o, i);
}
const zw = {
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
        const l = Qm(this, i, r, o);
        l != null && l.parent && tg(this, l.parent, r, o, n);
      }), o;
    }
  },
  when: (t) => !!t.nested,
  data() {
    return { nestedMap: /* @__PURE__ */ new Map() };
  },
  methods: {
    toggleRow: Vw,
    isAllCollapsed: Zm,
    getNestedRowInfo: bc
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
    ), Jm(this.data.nestedMap), t.sort((e, n) => {
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
}, Yw = Xn(zw);
const Gw = {
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
        const { linkTemplate: o = "", linkProps: i } = e.setting, r = Lt(o, n.data);
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
            return h && (_ = { className: l, ...h, ..._ }), Lt(i, _);
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
        return typeof o == "function" ? t[0] = i === "html" ? { html: o(r) } : o(r) : i === "datetime" ? t[0] = dc(r, o) : i === "html" ? t[0] = { html: Lt(o, r) } : t[0] = Lt(o, r), t;
      }
    }
  }
}, qw = Xn(Gw, { buildIn: !0 }), Xw = {
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
}, Kw = Xn(Xw, { buildIn: !0 }), Zw = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  NestedRowState: Km,
  checkable: jw,
  colHover: Ww,
  nested: Yw,
  rich: qw,
  sortType: Kw
}, Symbol.toStringTag, { value: "Module" }));
class Zn extends xt {
}
L(Zn, "NAME", "dtable"), L(Zn, "Component", Ow), L(Zn, "definePlugin", Xn), L(Zn, "removePlugin", Um), L(Zn, "plugins", Zw);
var Rt;
class ro extends jt {
  constructor() {
    super(...arguments);
    M(this, Rt, void 0);
  }
  init() {
    const { element: n } = this;
    n !== document.body && !n.hasAttribute("data-toggle") && n.setAttribute("data-toggle", "tab");
  }
  showTarget() {
    const n = this.element.getAttribute("href") || this.element.dataset.target || this.element.dataset.tab;
    n != null && n.startsWith("#") && H(this, Rt, document.querySelector(n)), this.addActive(this.element.closest(`.${this.constructor.NAV_CLASS}`), this.element.parentElement), v(this, Rt) && (this.addActive(v(this, Rt).parentElement, v(this, Rt)), v(this, Rt).dispatchEvent(new CustomEvent("show.zui3.tab")));
  }
  show() {
    const n = this.element.getAttribute("href") || this.element.dataset.target || this.element.dataset.tab;
    n != null && n.startsWith("#") && H(this, Rt, document.querySelector(n)), v(this, Rt) && (this.addActive(v(this, Rt).parentElement, v(this, Rt)), this.addActive(this.element.closest(`.${this.constructor.NAV_CLASS}`), this.element.parentElement));
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
Rt = new WeakMap(), L(ro, "NAME", "NavTabs"), L(ro, "NAV_CLASS", "nav-tabs"), L(ro, "EVENTS", !0), L(ro, "TOGGLE_SELECTOR", '[data-toggle="tab"]');
document.addEventListener("click", (t) => {
  t.target instanceof HTMLElement && (t.target.dataset.toggle === "tab" || t.target.getAttribute("data-tab")) && (t.preventDefault(), new ro(t.target).showTarget());
});
export {
  ka as ActionMenu,
  Sa as ActionMenuNested,
  v_ as Avatar,
  b_ as BtnGroup,
  La as Button,
  Mt as ContextMenu,
  Zn as DTable,
  Xt as Datepicker,
  Ct as Dropdown,
  $c as EventBus,
  Da as Menu,
  Yr as Messager,
  Tt as Modal,
  Eo as ModalTrigger,
  H_ as Nav,
  ro as NavTabs,
  U_ as Pager,
  G_ as Picker,
  f_ as ProgressCircle,
  se as TIME_DAY,
  Kt as Timepicker,
  sf as Toolbar,
  Pt as Tooltip,
  yf as VirtualGrid,
  mg as addI18nMap,
  _$ as browser,
  I_ as calculateTimestamp,
  t$ as convertBytes,
  Dt as createDate,
  Qw as formatBytes,
  dc as formatDate,
  y$ as formatDateSpan,
  Lt as formatString,
  dg as getLangCode,
  v$ as getTimeBeforeDesc,
  Ir as i18n,
  g$ as isDBY,
  Bl as isObject,
  Fr as isSameDay,
  Lb as isSameMonth,
  h$ as isSameWeek,
  W_ as isSameYear,
  d$ as isToday,
  m$ as isTomorrow,
  p$ as isYesterday,
  rc as mergeDeep,
  oc as nativeEvents,
  pg as setLangCode,
  hv as store
};
