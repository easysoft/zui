var $g = Object.defineProperty;
var kg = (e, t, n) => t in e ? $g(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var R = (e, t, n) => (kg(e, typeof t != "symbol" ? t + "" : t, n), n), tc = (e, t, n) => {
  if (!t.has(e))
    throw TypeError("Cannot " + n);
};
var b = (e, t, n) => (tc(e, t, "read from private field"), n ? n.call(e) : t.get(e)), T = (e, t, n) => {
  if (t.has(e))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(e) : t.set(e, n);
}, H = (e, t, n, o) => (tc(e, t, "write to private field"), o ? o.call(e, n) : t.set(e, n), n), Da = (e, t, n, o) => ({
  set _(s) {
    H(e, t, s, n);
  },
  get _() {
    return b(e, t, o);
  }
}), U = (e, t, n) => (tc(e, t, "access private method"), n);
var Al, re, cu, au, ho, Na, Mi = {}, _u = [], xg = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function xt(e, t) {
  for (var n in t)
    e[n] = t[n];
  return e;
}
function fu(e) {
  var t = e.parentNode;
  t && t.removeChild(e);
}
function uu(e, t, n) {
  var o, s, r, l = {};
  for (r in t)
    r == "key" ? o = t[r] : r == "ref" ? s = t[r] : l[r] = t[r];
  if (arguments.length > 2 && (l.children = arguments.length > 3 ? Al.call(arguments, 2) : n), typeof e == "function" && e.defaultProps != null)
    for (r in e.defaultProps)
      l[r] === void 0 && (l[r] = e.defaultProps[r]);
  return fi(e, l, o, s, null);
}
function fi(e, t, n, o, s) {
  var r = { type: e, props: t, key: n, ref: o, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: s ?? ++cu };
  return s == null && re.vnode != null && re.vnode(r), r;
}
function Sg() {
  return { current: null };
}
function Ml(e) {
  return e.children;
}
function ui(e, t) {
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
function hu(e) {
  var t, n;
  if ((e = e.__) != null && e.__c != null) {
    for (e.__e = e.__c.base = null, t = 0; t < e.__k.length; t++)
      if ((n = e.__k[t]) != null && n.__e != null) {
        e.__e = e.__c.base = n.__e;
        break;
      }
    return hu(e);
  }
}
function Ra(e) {
  (!e.__d && (e.__d = !0) && ho.push(e) && !Ti.__r++ || Na !== re.debounceRendering) && ((Na = re.debounceRendering) || setTimeout)(Ti);
}
function Ti() {
  for (var e; Ti.__r = ho.length; )
    e = ho.sort(function(t, n) {
      return t.__v.__b - n.__v.__b;
    }), ho = [], e.some(function(t) {
      var n, o, s, r, l, c;
      t.__d && (l = (r = (n = t).__v).__e, (c = n.__P) && (o = [], (s = xt({}, r)).__v = r.__v + 1, Oc(c, r, s, n.__n, c.ownerSVGElement !== void 0, r.__h != null ? [l] : null, o, l ?? qo(r), r.__h), gu(o, r), r.__e != l && hu(r)));
    });
}
function du(e, t, n, o, s, r, l, c, _, h) {
  var i, d, f, a, u, y, p, m = o && o.__k || _u, g = m.length;
  for (n.__k = [], i = 0; i < t.length; i++)
    if ((a = n.__k[i] = (a = t[i]) == null || typeof a == "boolean" ? null : typeof a == "string" || typeof a == "number" || typeof a == "bigint" ? fi(null, a, null, null, a) : Array.isArray(a) ? fi(Ml, { children: a }, null, null, null) : a.__b > 0 ? fi(a.type, a.props, a.key, a.ref ? a.ref : null, a.__v) : a) != null) {
      if (a.__ = n, a.__b = n.__b + 1, (f = m[i]) === null || f && a.key == f.key && a.type === f.type)
        m[i] = void 0;
      else
        for (d = 0; d < g; d++) {
          if ((f = m[d]) && a.key == f.key && a.type === f.type) {
            m[d] = void 0;
            break;
          }
          f = null;
        }
      Oc(e, a, f = f || Mi, s, r, l, c, _, h), u = a.__e, (d = a.ref) && f.ref != d && (p || (p = []), f.ref && p.push(f.ref, null, a), p.push(d, a.__c || u, a)), u != null ? (y == null && (y = u), typeof a.type == "function" && a.__k === f.__k ? a.__d = _ = pu(a, _, e) : _ = mu(e, a, f, m, u, _), typeof n.type == "function" && (n.__d = _)) : _ && f.__e == _ && _.parentNode != e && (_ = qo(f));
    }
  for (n.__e = y, i = g; i--; )
    m[i] != null && yu(m[i], m[i]);
  if (p)
    for (i = 0; i < p.length; i++)
      vu(p[i], p[++i], p[++i]);
}
function pu(e, t, n) {
  for (var o, s = e.__k, r = 0; s && r < s.length; r++)
    (o = s[r]) && (o.__ = e, t = typeof o.type == "function" ? pu(o, t, n) : mu(n, o, o, s, o.__e, t));
  return t;
}
function mu(e, t, n, o, s, r) {
  var l, c, _;
  if (t.__d !== void 0)
    l = t.__d, t.__d = void 0;
  else if (n == null || s != r || s.parentNode == null)
    e:
      if (r == null || r.parentNode !== e)
        e.appendChild(s), l = null;
      else {
        for (c = r, _ = 0; (c = c.nextSibling) && _ < o.length; _ += 2)
          if (c == s)
            break e;
        e.insertBefore(s, r), l = r;
      }
  return l !== void 0 ? l : s.nextSibling;
}
function Cg(e, t, n, o, s) {
  var r;
  for (r in n)
    r === "children" || r === "key" || r in t || Li(e, r, null, n[r], o);
  for (r in t)
    s && typeof t[r] != "function" || r === "children" || r === "key" || r === "value" || r === "checked" || n[r] === t[r] || Li(e, r, t[r], n[r], o);
}
function Oa(e, t, n) {
  t[0] === "-" ? e.setProperty(t, n) : e[t] = n == null ? "" : typeof n != "number" || xg.test(t) ? n : n + "px";
}
function Li(e, t, n, o, s) {
  var r;
  e:
    if (t === "style")
      if (typeof n == "string")
        e.style.cssText = n;
      else {
        if (typeof o == "string" && (e.style.cssText = o = ""), o)
          for (t in o)
            n && t in n || Oa(e.style, t, "");
        if (n)
          for (t in n)
            o && n[t] === o[t] || Oa(e.style, t, n[t]);
      }
    else if (t[0] === "o" && t[1] === "n")
      r = t !== (t = t.replace(/Capture$/, "")), t = t.toLowerCase() in e ? t.toLowerCase().slice(2) : t.slice(2), e.l || (e.l = {}), e.l[t + r] = n, n ? o || e.addEventListener(t, r ? Ha : Pa, r) : e.removeEventListener(t, r ? Ha : Pa, r);
    else if (t !== "dangerouslySetInnerHTML") {
      if (s)
        t = t.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
      else if (t !== "href" && t !== "list" && t !== "form" && t !== "tabIndex" && t !== "download" && t in e)
        try {
          e[t] = n ?? "";
          break e;
        } catch {
        }
      typeof n == "function" || (n == null || n === !1 && t.indexOf("-") == -1 ? e.removeAttribute(t) : e.setAttribute(t, n));
    }
}
function Pa(e) {
  this.l[e.type + !1](re.event ? re.event(e) : e);
}
function Ha(e) {
  this.l[e.type + !0](re.event ? re.event(e) : e);
}
function Oc(e, t, n, o, s, r, l, c, _) {
  var h, i, d, f, a, u, y, p, m, g, $, w, S, C, A, v = t.type;
  if (t.constructor !== void 0)
    return null;
  n.__h != null && (_ = n.__h, c = t.__e = n.__e, t.__h = null, r = [c]), (h = re.__b) && h(t);
  try {
    e:
      if (typeof v == "function") {
        if (p = t.props, m = (h = v.contextType) && o[h.__c], g = h ? m ? m.props.value : h.__ : o, n.__c ? y = (i = t.__c = n.__c).__ = i.__E : ("prototype" in v && v.prototype.render ? t.__c = i = new v(p, g) : (t.__c = i = new ui(p, g), i.constructor = v, i.render = Ag), m && m.sub(i), i.props = p, i.state || (i.state = {}), i.context = g, i.__n = o, d = i.__d = !0, i.__h = [], i._sb = []), i.__s == null && (i.__s = i.state), v.getDerivedStateFromProps != null && (i.__s == i.state && (i.__s = xt({}, i.__s)), xt(i.__s, v.getDerivedStateFromProps(p, i.__s))), f = i.props, a = i.state, d)
          v.getDerivedStateFromProps == null && i.componentWillMount != null && i.componentWillMount(), i.componentDidMount != null && i.__h.push(i.componentDidMount);
        else {
          if (v.getDerivedStateFromProps == null && p !== f && i.componentWillReceiveProps != null && i.componentWillReceiveProps(p, g), !i.__e && i.shouldComponentUpdate != null && i.shouldComponentUpdate(p, i.__s, g) === !1 || t.__v === n.__v) {
            for (i.props = p, i.state = i.__s, t.__v !== n.__v && (i.__d = !1), i.__v = t, t.__e = n.__e, t.__k = n.__k, t.__k.forEach(function(k) {
              k && (k.__ = t);
            }), $ = 0; $ < i._sb.length; $++)
              i.__h.push(i._sb[$]);
            i._sb = [], i.__h.length && l.push(i);
            break e;
          }
          i.componentWillUpdate != null && i.componentWillUpdate(p, i.__s, g), i.componentDidUpdate != null && i.__h.push(function() {
            i.componentDidUpdate(f, a, u);
          });
        }
        if (i.context = g, i.props = p, i.__v = t, i.__P = e, w = re.__r, S = 0, "prototype" in v && v.prototype.render) {
          for (i.state = i.__s, i.__d = !1, w && w(t), h = i.render(i.props, i.state, i.context), C = 0; C < i._sb.length; C++)
            i.__h.push(i._sb[C]);
          i._sb = [];
        } else
          do
            i.__d = !1, w && w(t), h = i.render(i.props, i.state, i.context), i.state = i.__s;
          while (i.__d && ++S < 25);
        i.state = i.__s, i.getChildContext != null && (o = xt(xt({}, o), i.getChildContext())), d || i.getSnapshotBeforeUpdate == null || (u = i.getSnapshotBeforeUpdate(f, a)), A = h != null && h.type === Ml && h.key == null ? h.props.children : h, du(e, Array.isArray(A) ? A : [A], t, n, o, s, r, l, c, _), i.base = t.__e, t.__h = null, i.__h.length && l.push(i), y && (i.__E = i.__ = null), i.__e = !1;
      } else
        r == null && t.__v === n.__v ? (t.__k = n.__k, t.__e = n.__e) : t.__e = Eg(n.__e, t, n, o, s, r, l, _);
    (h = re.diffed) && h(t);
  } catch (k) {
    t.__v = null, (_ || r != null) && (t.__e = c, t.__h = !!_, r[r.indexOf(c)] = null), re.__e(k, t, n);
  }
}
function gu(e, t) {
  re.__c && re.__c(t, e), e.some(function(n) {
    try {
      e = n.__h, n.__h = [], e.some(function(o) {
        o.call(n);
      });
    } catch (o) {
      re.__e(o, n.__v);
    }
  });
}
function Eg(e, t, n, o, s, r, l, c) {
  var _, h, i, d = n.props, f = t.props, a = t.type, u = 0;
  if (a === "svg" && (s = !0), r != null) {
    for (; u < r.length; u++)
      if ((_ = r[u]) && "setAttribute" in _ == !!a && (a ? _.localName === a : _.nodeType === 3)) {
        e = _, r[u] = null;
        break;
      }
  }
  if (e == null) {
    if (a === null)
      return document.createTextNode(f);
    e = s ? document.createElementNS("http://www.w3.org/2000/svg", a) : document.createElement(a, f.is && f), r = null, c = !1;
  }
  if (a === null)
    d === f || c && e.data === f || (e.data = f);
  else {
    if (r = r && Al.call(e.childNodes), h = (d = n.props || Mi).dangerouslySetInnerHTML, i = f.dangerouslySetInnerHTML, !c) {
      if (r != null)
        for (d = {}, u = 0; u < e.attributes.length; u++)
          d[e.attributes[u].name] = e.attributes[u].value;
      (i || h) && (i && (h && i.__html == h.__html || i.__html === e.innerHTML) || (e.innerHTML = i && i.__html || ""));
    }
    if (Cg(e, f, d, s, c), i)
      t.__k = [];
    else if (u = t.props.children, du(e, Array.isArray(u) ? u : [u], t, n, o, s && a !== "foreignObject", r, l, r ? r[0] : n.__k && qo(n, 0), c), r != null)
      for (u = r.length; u--; )
        r[u] != null && fu(r[u]);
    c || ("value" in f && (u = f.value) !== void 0 && (u !== e.value || a === "progress" && !u || a === "option" && u !== d.value) && Li(e, "value", u, d.value, !1), "checked" in f && (u = f.checked) !== void 0 && u !== e.checked && Li(e, "checked", u, d.checked, !1));
  }
  return e;
}
function vu(e, t, n) {
  try {
    typeof e == "function" ? e(t) : e.current = t;
  } catch (o) {
    re.__e(o, n);
  }
}
function yu(e, t, n) {
  var o, s;
  if (re.unmount && re.unmount(e), (o = e.ref) && (o.current && o.current !== e.__e || vu(o, null, t)), (o = e.__c) != null) {
    if (o.componentWillUnmount)
      try {
        o.componentWillUnmount();
      } catch (r) {
        re.__e(r, t);
      }
    o.base = o.__P = null, e.__c = void 0;
  }
  if (o = e.__k)
    for (s = 0; s < o.length; s++)
      o[s] && yu(o[s], t, n || typeof e.type != "function");
  n || e.__e == null || fu(e.__e), e.__ = e.__e = e.__d = void 0;
}
function Ag(e, t, n) {
  return this.constructor(e, n);
}
function Mg(e, t, n) {
  var o, s, r;
  re.__ && re.__(e, t), s = (o = typeof n == "function") ? null : n && n.__k || t.__k, r = [], Oc(t, e = (!o && n || t).__k = uu(Ml, null, [e]), s || Mi, Mi, t.ownerSVGElement !== void 0, !o && n ? [n] : s ? null : t.firstChild ? Al.call(t.childNodes) : null, r, !o && n ? n : s ? s.__e : t.firstChild, o), gu(r, e);
}
Al = _u.slice, re = { __e: function(e, t, n, o) {
  for (var s, r, l; t = t.__; )
    if ((s = t.__c) && !s.__)
      try {
        if ((r = s.constructor) && r.getDerivedStateFromError != null && (s.setState(r.getDerivedStateFromError(e)), l = s.__d), s.componentDidCatch != null && (s.componentDidCatch(e, o || {}), l = s.__d), l)
          return s.__E = s;
      } catch (c) {
        e = c;
      }
  throw e;
} }, cu = 0, au = function(e) {
  return e != null && e.constructor === void 0;
}, ui.prototype.setState = function(e, t) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = xt({}, this.state), typeof e == "function" && (e = e(xt({}, n), this.props)), e && xt(n, e), e != null && this.__v && (t && this._sb.push(t), Ra(this));
}, ui.prototype.forceUpdate = function(e) {
  this.__v && (this.__e = !0, e && this.__h.push(e), Ra(this));
}, ui.prototype.render = Ml, ho = [], Ti.__r = 0;
var Tg = 0;
function bu(e, t, n, o, s) {
  var r, l, c = {};
  for (l in t)
    l == "ref" ? r = t[l] : c[l] = t[l];
  var _ = { type: e, props: c, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: --Tg, __source: s, __self: o };
  if (typeof e == "function" && (r = e.defaultProps))
    for (l in r)
      c[l] === void 0 && (c[l] = r[l]);
  return re.vnode && re.vnode(_), _;
}
var lt;
class Lg {
  constructor(t = "") {
    T(this, lt, void 0);
    typeof t == "object" ? H(this, lt, t) : H(this, lt, document.appendChild(document.createComment(t)));
  }
  on(t, n, o) {
    b(this, lt).addEventListener(t, n, o);
  }
  once(t, n, o) {
    b(this, lt).addEventListener(t, n, { once: !0, ...o });
  }
  off(t, n, o) {
    b(this, lt).removeEventListener(t, n, o);
  }
  emit(t) {
    return b(this, lt).dispatchEvent(t), t;
  }
}
lt = new WeakMap();
const pc = /* @__PURE__ */ new Set([
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
class Pc extends Lg {
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
    return typeof t == "string" && (pc.has(t) ? (t = new Event(t), Object.assign(t, { detail: n })) : t = new CustomEvent(t, { detail: n })), super.emit(Pc.createEvent(t, n));
  }
  static createEvent(t, n) {
    return typeof t == "string" && (pc.has(t) ? (t = new Event(t), Object.assign(t, { detail: n })) : t = new CustomEvent(t, { detail: n })), t;
  }
}
var ct, kr, on, co;
class Wa extends Pc {
  constructor(n = "", o) {
    super(n);
    T(this, on);
    T(this, ct, /* @__PURE__ */ new Map());
    T(this, kr, void 0);
    H(this, kr, o == null ? void 0 : o.customEventSuffix);
  }
  on(n, o, s) {
    n = U(this, on, co).call(this, n), super.on(n, o, s), b(this, ct).set(o, [n, s]);
  }
  off(n, o, s) {
    n = U(this, on, co).call(this, n), super.off(n, o, s), b(this, ct).delete(o);
  }
  once(n, o, s) {
    n = U(this, on, co).call(this, n);
    const r = (l) => {
      o(l), b(this, ct).delete(r);
    };
    super.once(n, r, s), b(this, ct).set(r, [n, s]);
  }
  emit(n, o) {
    return typeof n == "string" && (n = U(this, on, co).call(this, n)), super.emit(n, o);
  }
  offAll() {
    Array.from(b(this, ct).entries()).forEach(([n, [o, s]]) => {
      super.off(o, n, s);
    }), b(this, ct).clear();
  }
}
ct = new WeakMap(), kr = new WeakMap(), on = new WeakSet(), co = function(n) {
  const o = b(this, kr);
  return pc.has(n) || typeof o != "string" || n.endsWith(o) ? n : `${n}${o}`;
};
function Dg(e, t) {
  if (e == null)
    return [e, void 0];
  typeof t == "string" && (t = t.split("."));
  const n = t.join(".");
  let o = e;
  const s = [o];
  for (; typeof o == "object" && o !== null && t.length; ) {
    let r = t.shift(), l;
    const c = r.indexOf("[");
    if (c > 0 && c < r.length - 1 && r.endsWith("]") && (l = r.substring(c + 1, r.length - 1), r = r.substring(0, c)), o = o[r], s.push(o), l !== void 0)
      if (typeof o == "object" && o !== null)
        o instanceof Map ? o = o.get(l) : o = o[l], s.push(o);
      else
        throw new Error(`Cannot access property "${r}[${l}]", the full path is "${n}".`);
  }
  if (t.length)
    throw new Error(`Cannot access property with rest path "${t.join(".")}", the full path is "${n}".`);
  return s;
}
function Ng(e, t, n) {
  const o = Dg(e, t), s = o[o.length - 1];
  return s === void 0 ? n : s;
}
function nc(e) {
  return !!e && typeof e == "object" && !Array.isArray(e);
}
function mc(e, ...t) {
  if (!t.length)
    return e;
  const n = t.shift();
  if (nc(e) && nc(n))
    for (const o in n)
      nc(n[o]) ? (e[o] || Object.assign(e, { [o]: {} }), mc(e[o], n[o])) : Object.assign(e, { [o]: n[o] });
  return mc(e, ...t);
}
function Le(e, ...t) {
  if (t.length === 0)
    return e;
  if (t.length === 1 && typeof t[0] == "object" && t[0]) {
    const n = t[0];
    return Object.keys(n).forEach((o) => {
      const s = n[o] ?? 0;
      e = e.replace(new RegExp(`\\{${o}\\}`, "g"), `${s}`);
    }), e;
  }
  for (let n = 0; n < t.length; n++) {
    const o = t[n] ?? "";
    e = e.replace(new RegExp(`\\{${n}\\}`, "g"), `${o}`);
  }
  return e;
}
var Hc = /* @__PURE__ */ ((e) => (e[e.B = 1] = "B", e[e.KB = 1024] = "KB", e[e.MB = 1048576] = "MB", e[e.GB = 1073741824] = "GB", e[e.TB = 1099511627776] = "TB", e))(Hc || {});
function lk(e, t = 2, n = "") {
  return Number.isNaN(e) ? "?KB" : (n || (e < 1024 ? n = "B" : e < 1048576 ? n = "KB" : e < 1073741824 ? n = "MB" : e < 1099511627776 ? n = "GB" : n = "TB"), (e / Hc[n]).toFixed(t) + n);
}
const ck = (e) => {
  const t = /^[0-9]*(B|KB|MB|GB|TB)$/;
  e = e.toUpperCase();
  const n = e.match(t);
  if (!n)
    return 0;
  const o = n[1];
  return e = e.replace(o, ""), Number.parseInt(e, 10) * Hc[o];
};
var su;
let Wc = ((su = document.documentElement.getAttribute("lang")) == null ? void 0 : su.toLowerCase()) ?? "zh_cn", mt;
function Rg() {
  return Wc;
}
function Og(e) {
  Wc = e.toLowerCase();
}
function Pg(e, t) {
  mt || (mt = {}), typeof e == "string" && (e = { [e]: t ?? {} }), mc(mt, e);
}
function Gr(e, t, n, o, s, r) {
  Array.isArray(e) ? mt && e.unshift(mt) : e = mt ? [mt, e] : [e], typeof n == "string" && (r = s, s = o, o = n, n = void 0);
  const l = s || Wc;
  let c;
  for (const _ of e) {
    if (!_)
      continue;
    const h = _[l];
    if (!h)
      continue;
    const i = r && _ === mt ? `${r}.${t}` : t;
    if (c = Ng(h, i), c !== void 0)
      break;
  }
  return c === void 0 ? o : n ? Le(c, ...Array.isArray(n) ? n : [n]) : c;
}
Gr.addLang = Pg;
Gr.getCode = Rg;
Gr.setCode = Og;
function Hg(e) {
  return Object.fromEntries(Object.entries(e).map(([t, n]) => {
    if (typeof n == "string")
      try {
        n = JSON.parse(n);
      } catch {
      }
    return [t, n];
  }));
}
var at, bn, Ae;
class Ue {
  constructor(t, n) {
    T(this, at, void 0);
    T(this, bn, void 0);
    T(this, Ae, void 0);
    t = typeof t == "string" ? document.querySelector(t) : t, this.constructor.EVENTS && H(this, Ae, new Wa(t, { customEventSuffix: `.${this.constructor.KEY}` })), H(this, at, { ...this.constructor.DEFAULT }), this.setOptions({ ...t instanceof HTMLElement ? Hg(t.dataset) : null, ...n }), this.constructor.all.set(t, this), H(this, bn, t), this.init(), requestAnimationFrame(() => {
      var o;
      this.afterInit(), (o = b(this, Ae)) == null || o.emit("inited", this);
    });
  }
  get options() {
    return b(this, at);
  }
  get element() {
    return b(this, bn);
  }
  get events() {
    return b(this, Ae);
  }
  init() {
  }
  afterInit() {
  }
  setOptions(t) {
    return t && Object.assign(b(this, at), t), b(this, at);
  }
  render(t) {
    this.setOptions(t);
  }
  destroy() {
    this.constructor.all.delete(b(this, bn)), b(this, Ae) && (b(this, Ae).emit("destroyed", this), b(this, Ae).offAll());
  }
  on(t, n, o) {
    var s;
    (s = b(this, Ae)) == null || s.on(t, n, o);
  }
  once(t, n, o) {
    var s;
    (s = b(this, Ae)) == null || s.once(t, n, o);
  }
  off(t, n, o) {
    var s;
    (s = b(this, Ae)) == null || s.off(t, n, o);
  }
  emit(t, n) {
    var l;
    let o = Wa.createEvent(t, n);
    const s = `on${o.type.replace(`.${this.constructor.KEY}`, "")}`, r = b(this, at)[s];
    return r && r(o) === !1 && (o.preventDefault(), o.stopPropagation()), o = (l = b(this, Ae)) == null ? void 0 : l.emit(o), o;
  }
  i18n(t, n, o) {
    return Gr(b(this, at).i18n, t, n, o, this.options.lang, this.constructor.NAME) ?? `{i18n:${t}}`;
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
at = new WeakMap(), bn = new WeakMap(), Ae = new WeakMap(), R(Ue, "EVENTS", !1), R(Ue, "DEFAULT", {}), R(Ue, "allComponents", /* @__PURE__ */ new Map());
class Ne extends Ue {
  constructor() {
    super(...arguments);
    R(this, "ref", Sg());
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
    Mg(/* @__PURE__ */ bu(o, { ref: this.ref, ...this.setOptions(n) }), this.element);
  }
}
var Ic, _e, wu, $u, po, Ia, ku = {}, xu = [], Wg = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function St(e, t) {
  for (var n in t)
    e[n] = t[n];
  return e;
}
function Su(e) {
  var t = e.parentNode;
  t && t.removeChild(e);
}
function Qn(e, t, n) {
  var o, s, r, l = {};
  for (r in t)
    r == "key" ? o = t[r] : r == "ref" ? s = t[r] : l[r] = t[r];
  if (arguments.length > 2 && (l.children = arguments.length > 3 ? Ic.call(arguments, 2) : n), typeof e == "function" && e.defaultProps != null)
    for (r in e.defaultProps)
      l[r] === void 0 && (l[r] = e.defaultProps[r]);
  return hi(e, l, o, s, null);
}
function hi(e, t, n, o, s) {
  var r = { type: e, props: t, key: n, ref: o, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: s ?? ++wu };
  return s == null && _e.vnode != null && _e.vnode(r), r;
}
function Ig() {
  return { current: null };
}
function Uc(e) {
  return e.children;
}
function mo(e, t) {
  this.props = e, this.context = t;
}
function Xo(e, t) {
  if (t == null)
    return e.__ ? Xo(e.__, e.__.__k.indexOf(e) + 1) : null;
  for (var n; t < e.__k.length; t++)
    if ((n = e.__k[t]) != null && n.__e != null)
      return n.__e;
  return typeof e.type == "function" ? Xo(e) : null;
}
function Cu(e) {
  var t, n;
  if ((e = e.__) != null && e.__c != null) {
    for (e.__e = e.__c.base = null, t = 0; t < e.__k.length; t++)
      if ((n = e.__k[t]) != null && n.__e != null) {
        e.__e = e.__c.base = n.__e;
        break;
      }
    return Cu(e);
  }
}
function Ua(e) {
  (!e.__d && (e.__d = !0) && po.push(e) && !Di.__r++ || Ia !== _e.debounceRendering) && ((Ia = _e.debounceRendering) || setTimeout)(Di);
}
function Di() {
  for (var e; Di.__r = po.length; )
    e = po.sort(function(t, n) {
      return t.__v.__b - n.__v.__b;
    }), po = [], e.some(function(t) {
      var n, o, s, r, l, c;
      t.__d && (l = (r = (n = t).__v).__e, (c = n.__P) && (o = [], (s = St({}, r)).__v = r.__v + 1, Tu(c, r, s, n.__n, c.ownerSVGElement !== void 0, r.__h != null ? [l] : null, o, l ?? Xo(r), r.__h), Fg(o, r), r.__e != l && Cu(r)));
    });
}
function Eu(e, t, n, o, s, r, l, c, _, h) {
  var i, d, f, a, u, y, p, m = o && o.__k || xu, g = m.length;
  for (n.__k = [], i = 0; i < t.length; i++)
    if ((a = n.__k[i] = (a = t[i]) == null || typeof a == "boolean" ? null : typeof a == "string" || typeof a == "number" || typeof a == "bigint" ? hi(null, a, null, null, a) : Array.isArray(a) ? hi(Uc, { children: a }, null, null, null) : a.__b > 0 ? hi(a.type, a.props, a.key, a.ref ? a.ref : null, a.__v) : a) != null) {
      if (a.__ = n, a.__b = n.__b + 1, (f = m[i]) === null || f && a.key == f.key && a.type === f.type)
        m[i] = void 0;
      else
        for (d = 0; d < g; d++) {
          if ((f = m[d]) && a.key == f.key && a.type === f.type) {
            m[d] = void 0;
            break;
          }
          f = null;
        }
      Tu(e, a, f = f || ku, s, r, l, c, _, h), u = a.__e, (d = a.ref) && f.ref != d && (p || (p = []), f.ref && p.push(f.ref, null, a), p.push(d, a.__c || u, a)), u != null ? (y == null && (y = u), typeof a.type == "function" && a.__k === f.__k ? a.__d = _ = Au(a, _, e) : _ = Mu(e, a, f, m, u, _), typeof n.type == "function" && (n.__d = _)) : _ && f.__e == _ && _.parentNode != e && (_ = Xo(f));
    }
  for (n.__e = y, i = g; i--; )
    m[i] != null && Du(m[i], m[i]);
  if (p)
    for (i = 0; i < p.length; i++)
      Lu(p[i], p[++i], p[++i]);
}
function Au(e, t, n) {
  for (var o, s = e.__k, r = 0; s && r < s.length; r++)
    (o = s[r]) && (o.__ = e, t = typeof o.type == "function" ? Au(o, t, n) : Mu(n, o, o, s, o.__e, t));
  return t;
}
function Mu(e, t, n, o, s, r) {
  var l, c, _;
  if (t.__d !== void 0)
    l = t.__d, t.__d = void 0;
  else if (n == null || s != r || s.parentNode == null)
    e:
      if (r == null || r.parentNode !== e)
        e.appendChild(s), l = null;
      else {
        for (c = r, _ = 0; (c = c.nextSibling) && _ < o.length; _ += 2)
          if (c == s)
            break e;
        e.insertBefore(s, r), l = r;
      }
  return l !== void 0 ? l : s.nextSibling;
}
function Ug(e, t, n, o, s) {
  var r;
  for (r in n)
    r === "children" || r === "key" || r in t || Ni(e, r, null, n[r], o);
  for (r in t)
    s && typeof t[r] != "function" || r === "children" || r === "key" || r === "value" || r === "checked" || n[r] === t[r] || Ni(e, r, t[r], n[r], o);
}
function Fa(e, t, n) {
  t[0] === "-" ? e.setProperty(t, n) : e[t] = n == null ? "" : typeof n != "number" || Wg.test(t) ? n : n + "px";
}
function Ni(e, t, n, o, s) {
  var r;
  e:
    if (t === "style")
      if (typeof n == "string")
        e.style.cssText = n;
      else {
        if (typeof o == "string" && (e.style.cssText = o = ""), o)
          for (t in o)
            n && t in n || Fa(e.style, t, "");
        if (n)
          for (t in n)
            o && n[t] === o[t] || Fa(e.style, t, n[t]);
      }
    else if (t[0] === "o" && t[1] === "n")
      r = t !== (t = t.replace(/Capture$/, "")), t = t.toLowerCase() in e ? t.toLowerCase().slice(2) : t.slice(2), e.l || (e.l = {}), e.l[t + r] = n, n ? o || e.addEventListener(t, r ? ja : Ba, r) : e.removeEventListener(t, r ? ja : Ba, r);
    else if (t !== "dangerouslySetInnerHTML") {
      if (s)
        t = t.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
      else if (t !== "href" && t !== "list" && t !== "form" && t !== "tabIndex" && t !== "download" && t in e)
        try {
          e[t] = n ?? "";
          break e;
        } catch {
        }
      typeof n == "function" || (n == null || n === !1 && t.indexOf("-") == -1 ? e.removeAttribute(t) : e.setAttribute(t, n));
    }
}
function Ba(e) {
  this.l[e.type + !1](_e.event ? _e.event(e) : e);
}
function ja(e) {
  this.l[e.type + !0](_e.event ? _e.event(e) : e);
}
function Tu(e, t, n, o, s, r, l, c, _) {
  var h, i, d, f, a, u, y, p, m, g, $, w, S, C, A, v = t.type;
  if (t.constructor !== void 0)
    return null;
  n.__h != null && (_ = n.__h, c = t.__e = n.__e, t.__h = null, r = [c]), (h = _e.__b) && h(t);
  try {
    e:
      if (typeof v == "function") {
        if (p = t.props, m = (h = v.contextType) && o[h.__c], g = h ? m ? m.props.value : h.__ : o, n.__c ? y = (i = t.__c = n.__c).__ = i.__E : ("prototype" in v && v.prototype.render ? t.__c = i = new v(p, g) : (t.__c = i = new mo(p, g), i.constructor = v, i.render = jg), m && m.sub(i), i.props = p, i.state || (i.state = {}), i.context = g, i.__n = o, d = i.__d = !0, i.__h = [], i._sb = []), i.__s == null && (i.__s = i.state), v.getDerivedStateFromProps != null && (i.__s == i.state && (i.__s = St({}, i.__s)), St(i.__s, v.getDerivedStateFromProps(p, i.__s))), f = i.props, a = i.state, d)
          v.getDerivedStateFromProps == null && i.componentWillMount != null && i.componentWillMount(), i.componentDidMount != null && i.__h.push(i.componentDidMount);
        else {
          if (v.getDerivedStateFromProps == null && p !== f && i.componentWillReceiveProps != null && i.componentWillReceiveProps(p, g), !i.__e && i.shouldComponentUpdate != null && i.shouldComponentUpdate(p, i.__s, g) === !1 || t.__v === n.__v) {
            for (i.props = p, i.state = i.__s, t.__v !== n.__v && (i.__d = !1), i.__v = t, t.__e = n.__e, t.__k = n.__k, t.__k.forEach(function(k) {
              k && (k.__ = t);
            }), $ = 0; $ < i._sb.length; $++)
              i.__h.push(i._sb[$]);
            i._sb = [], i.__h.length && l.push(i);
            break e;
          }
          i.componentWillUpdate != null && i.componentWillUpdate(p, i.__s, g), i.componentDidUpdate != null && i.__h.push(function() {
            i.componentDidUpdate(f, a, u);
          });
        }
        if (i.context = g, i.props = p, i.__v = t, i.__P = e, w = _e.__r, S = 0, "prototype" in v && v.prototype.render) {
          for (i.state = i.__s, i.__d = !1, w && w(t), h = i.render(i.props, i.state, i.context), C = 0; C < i._sb.length; C++)
            i.__h.push(i._sb[C]);
          i._sb = [];
        } else
          do
            i.__d = !1, w && w(t), h = i.render(i.props, i.state, i.context), i.state = i.__s;
          while (i.__d && ++S < 25);
        i.state = i.__s, i.getChildContext != null && (o = St(St({}, o), i.getChildContext())), d || i.getSnapshotBeforeUpdate == null || (u = i.getSnapshotBeforeUpdate(f, a)), A = h != null && h.type === Uc && h.key == null ? h.props.children : h, Eu(e, Array.isArray(A) ? A : [A], t, n, o, s, r, l, c, _), i.base = t.__e, t.__h = null, i.__h.length && l.push(i), y && (i.__E = i.__ = null), i.__e = !1;
      } else
        r == null && t.__v === n.__v ? (t.__k = n.__k, t.__e = n.__e) : t.__e = Bg(n.__e, t, n, o, s, r, l, _);
    (h = _e.diffed) && h(t);
  } catch (k) {
    t.__v = null, (_ || r != null) && (t.__e = c, t.__h = !!_, r[r.indexOf(c)] = null), _e.__e(k, t, n);
  }
}
function Fg(e, t) {
  _e.__c && _e.__c(t, e), e.some(function(n) {
    try {
      e = n.__h, n.__h = [], e.some(function(o) {
        o.call(n);
      });
    } catch (o) {
      _e.__e(o, n.__v);
    }
  });
}
function Bg(e, t, n, o, s, r, l, c) {
  var _, h, i, d = n.props, f = t.props, a = t.type, u = 0;
  if (a === "svg" && (s = !0), r != null) {
    for (; u < r.length; u++)
      if ((_ = r[u]) && "setAttribute" in _ == !!a && (a ? _.localName === a : _.nodeType === 3)) {
        e = _, r[u] = null;
        break;
      }
  }
  if (e == null) {
    if (a === null)
      return document.createTextNode(f);
    e = s ? document.createElementNS("http://www.w3.org/2000/svg", a) : document.createElement(a, f.is && f), r = null, c = !1;
  }
  if (a === null)
    d === f || c && e.data === f || (e.data = f);
  else {
    if (r = r && Ic.call(e.childNodes), h = (d = n.props || ku).dangerouslySetInnerHTML, i = f.dangerouslySetInnerHTML, !c) {
      if (r != null)
        for (d = {}, u = 0; u < e.attributes.length; u++)
          d[e.attributes[u].name] = e.attributes[u].value;
      (i || h) && (i && (h && i.__html == h.__html || i.__html === e.innerHTML) || (e.innerHTML = i && i.__html || ""));
    }
    if (Ug(e, f, d, s, c), i)
      t.__k = [];
    else if (u = t.props.children, Eu(e, Array.isArray(u) ? u : [u], t, n, o, s && a !== "foreignObject", r, l, r ? r[0] : n.__k && Xo(n, 0), c), r != null)
      for (u = r.length; u--; )
        r[u] != null && Su(r[u]);
    c || ("value" in f && (u = f.value) !== void 0 && (u !== e.value || a === "progress" && !u || a === "option" && u !== d.value) && Ni(e, "value", u, d.value, !1), "checked" in f && (u = f.checked) !== void 0 && u !== e.checked && Ni(e, "checked", u, d.checked, !1));
  }
  return e;
}
function Lu(e, t, n) {
  try {
    typeof e == "function" ? e(t) : e.current = t;
  } catch (o) {
    _e.__e(o, n);
  }
}
function Du(e, t, n) {
  var o, s;
  if (_e.unmount && _e.unmount(e), (o = e.ref) && (o.current && o.current !== e.__e || Lu(o, null, t)), (o = e.__c) != null) {
    if (o.componentWillUnmount)
      try {
        o.componentWillUnmount();
      } catch (r) {
        _e.__e(r, t);
      }
    o.base = o.__P = null, e.__c = void 0;
  }
  if (o = e.__k)
    for (s = 0; s < o.length; s++)
      o[s] && Du(o[s], t, n || typeof e.type != "function");
  n || e.__e == null || Su(e.__e), e.__ = e.__e = e.__d = void 0;
}
function jg(e, t, n) {
  return this.constructor(e, n);
}
Ic = xu.slice, _e = { __e: function(e, t, n, o) {
  for (var s, r, l; t = t.__; )
    if ((s = t.__c) && !s.__)
      try {
        if ((r = s.constructor) && r.getDerivedStateFromError != null && (s.setState(r.getDerivedStateFromError(e)), l = s.__d), s.componentDidCatch != null && (s.componentDidCatch(e, o || {}), l = s.__d), l)
          return s.__E = s;
      } catch (c) {
        e = c;
      }
  throw e;
} }, wu = 0, $u = function(e) {
  return e != null && e.constructor === void 0;
}, mo.prototype.setState = function(e, t) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = St({}, this.state), typeof e == "function" && (e = e(St({}, n), this.props)), e && St(n, e), e != null && this.__v && (t && this._sb.push(t), Ua(this));
}, mo.prototype.forceUpdate = function(e) {
  this.__v && (this.__e = !0, e && this.__h.push(e), Ua(this));
}, mo.prototype.render = Uc, po = [], Di.__r = 0;
var Vg = 0;
function Qe(e, t, n, o, s) {
  var r, l, c = {};
  for (l in t)
    l == "ref" ? r = t[l] : c[l] = t[l];
  var _ = { type: e, props: c, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: --Vg, __source: s, __self: o };
  if (typeof e == "function" && (r = e.defaultProps))
    for (l in r)
      c[l] === void 0 && (c[l] = r[l]);
  return _e.vnode && _e.vnode(_), _;
}
function Tl(...e) {
  const t = [], n = /* @__PURE__ */ new Map(), o = (s, r) => {
    if (Array.isArray(s) && (r = s[1], s = s[0]), !s.length)
      return;
    const l = n.get(s);
    typeof l == "number" ? t[l][1] = !!r : (n.set(s, t.length), t.push([s, !!r]));
  };
  return e.forEach((s) => {
    typeof s == "function" && (s = s()), Array.isArray(s) ? Tl(...s).forEach(o) : s && typeof s == "object" ? Object.entries(s).forEach(o) : typeof s == "string" && s.split(" ").forEach((r) => o(r, !0));
  }), t.sort((s, r) => (n.get(s[0]) || 0) - (n.get(r[0]) || 0));
}
const B = (...e) => Tl(...e).reduce((t, [n, o]) => (o && t.push(n), t), []).join(" ");
function zg({
  component: e = "div",
  className: t,
  children: n,
  style: o,
  attrs: s
}) {
  return Qn(e, {
    className: B(t),
    style: o,
    ...s
  }, n);
}
function Nu({
  component: e = "a",
  className: t,
  children: n,
  attrs: o,
  url: s,
  disabled: r,
  active: l,
  icon: c,
  text: _,
  target: h,
  trailingIcon: i,
  hint: d,
  style: f,
  onClick: a
}) {
  const u = [
    typeof c == "string" ? /* @__PURE__ */ Qe("i", { class: `icon ${c}` }) : c,
    /* @__PURE__ */ Qe("span", { className: "text", children: _ }),
    typeof n == "function" ? n() : n,
    typeof i == "string" ? /* @__PURE__ */ Qe("i", { class: `icon ${i}` }) : i
  ];
  return Qn(e, {
    className: B(t, { disabled: r, active: l }),
    title: d,
    [e === "a" ? "href" : "data-url"]: s,
    [e === "a" ? "target" : "data-target"]: h,
    style: f,
    onClick: a,
    ...o
  }, ...u);
}
function Yg({
  component: e = "div",
  className: t,
  text: n,
  attrs: o,
  children: s,
  style: r,
  onClick: l
}) {
  return Qn(e, {
    className: B(t),
    style: r,
    onClick: l,
    ...o
  }, n, typeof s == "function" ? s() : s);
}
function Gg({
  component: e = "div",
  className: t,
  style: n,
  space: o,
  flex: s,
  attrs: r,
  onClick: l,
  children: c
}) {
  return Qn(e, {
    className: B(t),
    style: { width: o, height: o, flex: s, ...n },
    onClick: l,
    ...r
  }, c);
}
function qg(e) {
  const {
    tag: t,
    className: n,
    style: o,
    renders: s,
    generateArgs: r = [],
    generatorThis: l,
    generators: c,
    onGenerate: _,
    onRenderItem: h,
    ...i
  } = e, d = [n], f = { ...o }, a = [], u = [];
  return s.forEach((y) => {
    const p = [];
    typeof y == "string" && c && c[y] && (y = c[y]), typeof y == "function" ? _ ? p.push(..._.call(l, y, a, ...r)) : p.push(...y.call(l, a, ...r) ?? []) : p.push(y), p.forEach((m) => {
      m != null && (typeof m == "object" && !au(m) && ("html" in m || "__html" in m || "className" in m || "style" in m || "attrs" in m || "children" in m) ? m.html ? a.push(
        /* @__PURE__ */ bu("div", { className: B(m.className), style: m.style, dangerouslySetInnerHTML: { __html: m.html }, ...m.attrs ?? {} })
      ) : m.__html ? u.push(m.__html) : (m.style && Object.assign(f, m.style), m.className && d.push(m.className), m.children && a.push(m.children), m.attrs && Object.assign(i, m.attrs)) : a.push(m));
    });
  }), u.length && Object.assign(i, { dangerouslySetInnerHTML: { __html: u } }), [{
    className: B(d),
    style: f,
    ...i
  }, a];
}
function gc({
  tag: e = "div",
  ...t
}) {
  const [n, o] = qg(t);
  return uu(e, n, ...o);
}
function Xg(e) {
  return /* @__PURE__ */ Qe(gc, { ...e });
}
function Ru({
  component: e = "div",
  className: t,
  children: n,
  style: o,
  attrs: s
}) {
  return Qn(e, {
    className: B(t),
    style: o,
    ...s
  }, n);
}
var so;
let zn = (so = class extends mo {
  constructor() {
    super(...arguments);
    R(this, "ref", Ig());
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
    var o, s;
    (s = (o = this.props).afterRender) == null || s.call(o, { menu: this, firstRender: n });
  }
  handleItemClick(n, o, s, r) {
    s && s.call(r.target, r);
    const { onClickItem: l } = this.props;
    l && l({ menu: this, item: n, index: o, event: r });
  }
  beforeRender() {
    var s;
    const n = { ...this.props };
    typeof n.items == "function" && (n.items = n.items(this));
    const o = (s = n.beforeRender) == null ? void 0 : s.call(n, { menu: this, options: n });
    return o && Object.assign(n, o), n;
  }
  getItemRenderProps(n, o, s) {
    const { itemProps: r, onClickItem: l } = n, c = { key: s, ...o };
    return r && Object.assign(c, r[o.type || "item"]), (l || o.onClick) && (c.onClick = this.handleItemClick.bind(this, c, s, o.onClick)), c.className = B(c.className), c;
  }
  renderItem(n, o, s) {
    const r = this.getItemRenderProps(n, o, s), { itemRender: l } = n;
    if (l) {
      if (typeof l == "object") {
        const p = l[o.type || "item"];
        if (p)
          return /* @__PURE__ */ Qe(p, { ...r });
      } else if (typeof l == "function") {
        const p = l.call(this, r, Qn);
        if ($u(p))
          return p;
        typeof p == "object" && Object.assign(r, p);
      }
    }
    const { type: c = "item", component: _, key: h = s, rootAttrs: i, rootClass: d, rootStyle: f, rootChildren: a, ...u } = r, y = !_ || typeof _ == "string" ? this.constructor.ItemComponents && this.constructor.ItemComponents[c] || zn.ItemComponents[c] : _;
    return Object.assign(u, {
      type: c,
      component: typeof _ == "string" ? _ : void 0
    }), this.renderTypedItem(y, {
      className: B(d),
      children: a,
      style: f,
      key: h,
      ...i
    }, {
      ...u,
      type: c,
      component: typeof _ == "string" ? _ : void 0
    });
  }
  renderTypedItem(n, o, s) {
    const { children: r, className: l, key: c, ..._ } = o;
    return /* @__PURE__ */ Qe(
      "li",
      {
        className: B(`${this.name}-${s.type}`, l),
        ..._,
        children: [
          /* @__PURE__ */ Qe(n, { ...s }),
          typeof r == "function" ? r() : r
        ]
      },
      c
    );
  }
  render() {
    const n = this.beforeRender(), {
      name: o,
      style: s,
      itemProps: r,
      className: l,
      items: c,
      children: _,
      itemRender: h,
      onClickItem: i,
      beforeRender: d,
      afterRender: f,
      beforeDestroy: a,
      ...u
    } = n, y = this.constructor.ROOT_TAG;
    return /* @__PURE__ */ Qe(y, { class: B(this.name, l), ...u, ref: this.ref, children: [
      c && c.map(this.renderItem.bind(this, n)),
      _
    ] });
  }
}, R(so, "ItemComponents", {
  divider: zg,
  item: Nu,
  heading: Yg,
  space: Gg,
  custom: Xg,
  basic: Ru
}), R(so, "ROOT_TAG", "menu"), R(so, "NAME", "action-menu"), so);
class Va extends Ne {
}
R(Va, "NAME", "actionmenu"), R(Va, "Component", zn);
function za({
  ...e
}) {
  return /* @__PURE__ */ Qe(Nu, { ...e });
}
var fc, xr, ze, wn;
let Ou = (fc = class extends zn {
  constructor(n) {
    super(n);
    T(this, xr, /* @__PURE__ */ new Set());
    T(this, ze, void 0);
    T(this, wn, (n, o, s) => {
      this.toggleNestedMenu(n, o), s.preventDefault();
    });
    H(this, ze, n.nestedShow === void 0), b(this, ze) && (this.state = { nestedShow: n.defaultNestedShow ?? {} });
  }
  get nestedTrigger() {
    return this.props.nestedTrigger;
  }
  beforeRender() {
    const n = super.beforeRender(), { nestedShow: o, nestedTrigger: s, defaultNestedShow: r, controlledMenu: l, ...c } = n;
    return c;
  }
  renderNestedMenu(n) {
    let { items: o } = n;
    if (!o || (typeof o == "function" && (o = o(n, this)), !o.length))
      return;
    const s = this.constructor;
    return /* @__PURE__ */ Qe(
      s,
      {
        items: o,
        name: this.props.name,
        nestedShow: b(this, ze) ? this.state.nestedShow : this.props.nestedShow,
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
  getItemRenderProps(n, o, s) {
    const r = super.getItemRenderProps(n, o, s);
    if (!this.isNestedItem(r))
      return r;
    const l = r.key ?? s;
    b(this, xr).add(l);
    const c = this.isNestedMenuShow(l);
    if (c && (r.rootChildren = [
      r.rootChildren,
      this.renderNestedMenu(o)
    ], r.component = za), this.nestedTrigger === "hover")
      r.rootAttrs = {
        ...r.rootAttrs,
        onMouseEnter: b(this, wn).bind(this, l, !0),
        onMouseLeave: b(this, wn).bind(this, l, !1)
      };
    else if (this.nestedTrigger === "click") {
      const { onClick: h } = r;
      r.onClick = (i) => {
        b(this, wn).call(this, l, void 0, i), h == null || h(i);
      };
    }
    const _ = this.renderToggleIcon(c, r);
    return _ && (r.children = [r.children, _]), r.rootClass = [r.rootClass, "has-nested-menu", c ? "show" : ""], r;
  }
  isNestedMenuShow(n) {
    const o = b(this, ze) ? this.state.nestedShow : this.props.nestedShow;
    return o && typeof o == "object" ? o[n] : !!o;
  }
  toggleNestedMenu(n, o) {
    const { controlledMenu: s } = this.props;
    if (s)
      return s.toggleNestedMenu(n, o);
    if (!b(this, ze))
      return !1;
    let { nestedShow: r = {} } = this.state;
    if (typeof r == "boolean" && (r === !0 ? r = [...b(this, xr).values()].reduce((l, c) => (l[c] = !0, l), {}) : r = {}), o === void 0)
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
    b(this, ze) && this.setState({ nestedShow: !0 });
  }
  hideAllNestedMenu() {
    b(this, ze) && this.setState({ nestedShow: !1 });
  }
}, xr = new WeakMap(), ze = new WeakMap(), wn = new WeakMap(), R(fc, "ItemComponents", {
  item: za
}), fc);
class Ya extends Ne {
}
R(Ya, "NAME", "actionmenunested"), R(Ya, "Component", Ou);
var Fc, fe, Pu, go, Ga, Hu = {}, Wu = [], Kg = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function Ct(e, t) {
  for (var n in t)
    e[n] = t[n];
  return e;
}
function Iu(e) {
  var t = e.parentNode;
  t && t.removeChild(e);
}
function Zg(e, t, n) {
  var o, s, r, l = {};
  for (r in t)
    r == "key" ? o = t[r] : r == "ref" ? s = t[r] : l[r] = t[r];
  if (arguments.length > 2 && (l.children = arguments.length > 3 ? Fc.call(arguments, 2) : n), typeof e == "function" && e.defaultProps != null)
    for (r in e.defaultProps)
      l[r] === void 0 && (l[r] = e.defaultProps[r]);
  return di(e, l, o, s, null);
}
function di(e, t, n, o, s) {
  var r = { type: e, props: t, key: n, ref: o, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: s ?? ++Pu };
  return s == null && fe.vnode != null && fe.vnode(r), r;
}
function Bc(e) {
  return e.children;
}
function vo(e, t) {
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
function Uu(e) {
  var t, n;
  if ((e = e.__) != null && e.__c != null) {
    for (e.__e = e.__c.base = null, t = 0; t < e.__k.length; t++)
      if ((n = e.__k[t]) != null && n.__e != null) {
        e.__e = e.__c.base = n.__e;
        break;
      }
    return Uu(e);
  }
}
function qa(e) {
  (!e.__d && (e.__d = !0) && go.push(e) && !Ri.__r++ || Ga !== fe.debounceRendering) && ((Ga = fe.debounceRendering) || setTimeout)(Ri);
}
function Ri() {
  for (var e; Ri.__r = go.length; )
    e = go.sort(function(t, n) {
      return t.__v.__b - n.__v.__b;
    }), go = [], e.some(function(t) {
      var n, o, s, r, l, c;
      t.__d && (l = (r = (n = t).__v).__e, (c = n.__P) && (o = [], (s = Ct({}, r)).__v = r.__v + 1, Vu(c, r, s, n.__n, c.ownerSVGElement !== void 0, r.__h != null ? [l] : null, o, l ?? Ko(r), r.__h), Qg(o, r), r.__e != l && Uu(r)));
    });
}
function Fu(e, t, n, o, s, r, l, c, _, h) {
  var i, d, f, a, u, y, p, m = o && o.__k || Wu, g = m.length;
  for (n.__k = [], i = 0; i < t.length; i++)
    if ((a = n.__k[i] = (a = t[i]) == null || typeof a == "boolean" ? null : typeof a == "string" || typeof a == "number" || typeof a == "bigint" ? di(null, a, null, null, a) : Array.isArray(a) ? di(Bc, { children: a }, null, null, null) : a.__b > 0 ? di(a.type, a.props, a.key, a.ref ? a.ref : null, a.__v) : a) != null) {
      if (a.__ = n, a.__b = n.__b + 1, (f = m[i]) === null || f && a.key == f.key && a.type === f.type)
        m[i] = void 0;
      else
        for (d = 0; d < g; d++) {
          if ((f = m[d]) && a.key == f.key && a.type === f.type) {
            m[d] = void 0;
            break;
          }
          f = null;
        }
      Vu(e, a, f = f || Hu, s, r, l, c, _, h), u = a.__e, (d = a.ref) && f.ref != d && (p || (p = []), f.ref && p.push(f.ref, null, a), p.push(d, a.__c || u, a)), u != null ? (y == null && (y = u), typeof a.type == "function" && a.__k === f.__k ? a.__d = _ = Bu(a, _, e) : _ = ju(e, a, f, m, u, _), typeof n.type == "function" && (n.__d = _)) : _ && f.__e == _ && _.parentNode != e && (_ = Ko(f));
    }
  for (n.__e = y, i = g; i--; )
    m[i] != null && Yu(m[i], m[i]);
  if (p)
    for (i = 0; i < p.length; i++)
      zu(p[i], p[++i], p[++i]);
}
function Bu(e, t, n) {
  for (var o, s = e.__k, r = 0; s && r < s.length; r++)
    (o = s[r]) && (o.__ = e, t = typeof o.type == "function" ? Bu(o, t, n) : ju(n, o, o, s, o.__e, t));
  return t;
}
function ju(e, t, n, o, s, r) {
  var l, c, _;
  if (t.__d !== void 0)
    l = t.__d, t.__d = void 0;
  else if (n == null || s != r || s.parentNode == null)
    e:
      if (r == null || r.parentNode !== e)
        e.appendChild(s), l = null;
      else {
        for (c = r, _ = 0; (c = c.nextSibling) && _ < o.length; _ += 2)
          if (c == s)
            break e;
        e.insertBefore(s, r), l = r;
      }
  return l !== void 0 ? l : s.nextSibling;
}
function Jg(e, t, n, o, s) {
  var r;
  for (r in n)
    r === "children" || r === "key" || r in t || Oi(e, r, null, n[r], o);
  for (r in t)
    s && typeof t[r] != "function" || r === "children" || r === "key" || r === "value" || r === "checked" || n[r] === t[r] || Oi(e, r, t[r], n[r], o);
}
function Xa(e, t, n) {
  t[0] === "-" ? e.setProperty(t, n) : e[t] = n == null ? "" : typeof n != "number" || Kg.test(t) ? n : n + "px";
}
function Oi(e, t, n, o, s) {
  var r;
  e:
    if (t === "style")
      if (typeof n == "string")
        e.style.cssText = n;
      else {
        if (typeof o == "string" && (e.style.cssText = o = ""), o)
          for (t in o)
            n && t in n || Xa(e.style, t, "");
        if (n)
          for (t in n)
            o && n[t] === o[t] || Xa(e.style, t, n[t]);
      }
    else if (t[0] === "o" && t[1] === "n")
      r = t !== (t = t.replace(/Capture$/, "")), t = t.toLowerCase() in e ? t.toLowerCase().slice(2) : t.slice(2), e.l || (e.l = {}), e.l[t + r] = n, n ? o || e.addEventListener(t, r ? Za : Ka, r) : e.removeEventListener(t, r ? Za : Ka, r);
    else if (t !== "dangerouslySetInnerHTML") {
      if (s)
        t = t.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
      else if (t !== "href" && t !== "list" && t !== "form" && t !== "tabIndex" && t !== "download" && t in e)
        try {
          e[t] = n ?? "";
          break e;
        } catch {
        }
      typeof n == "function" || (n == null || n === !1 && t.indexOf("-") == -1 ? e.removeAttribute(t) : e.setAttribute(t, n));
    }
}
function Ka(e) {
  this.l[e.type + !1](fe.event ? fe.event(e) : e);
}
function Za(e) {
  this.l[e.type + !0](fe.event ? fe.event(e) : e);
}
function Vu(e, t, n, o, s, r, l, c, _) {
  var h, i, d, f, a, u, y, p, m, g, $, w, S, C, A, v = t.type;
  if (t.constructor !== void 0)
    return null;
  n.__h != null && (_ = n.__h, c = t.__e = n.__e, t.__h = null, r = [c]), (h = fe.__b) && h(t);
  try {
    e:
      if (typeof v == "function") {
        if (p = t.props, m = (h = v.contextType) && o[h.__c], g = h ? m ? m.props.value : h.__ : o, n.__c ? y = (i = t.__c = n.__c).__ = i.__E : ("prototype" in v && v.prototype.render ? t.__c = i = new v(p, g) : (t.__c = i = new vo(p, g), i.constructor = v, i.render = tv), m && m.sub(i), i.props = p, i.state || (i.state = {}), i.context = g, i.__n = o, d = i.__d = !0, i.__h = [], i._sb = []), i.__s == null && (i.__s = i.state), v.getDerivedStateFromProps != null && (i.__s == i.state && (i.__s = Ct({}, i.__s)), Ct(i.__s, v.getDerivedStateFromProps(p, i.__s))), f = i.props, a = i.state, d)
          v.getDerivedStateFromProps == null && i.componentWillMount != null && i.componentWillMount(), i.componentDidMount != null && i.__h.push(i.componentDidMount);
        else {
          if (v.getDerivedStateFromProps == null && p !== f && i.componentWillReceiveProps != null && i.componentWillReceiveProps(p, g), !i.__e && i.shouldComponentUpdate != null && i.shouldComponentUpdate(p, i.__s, g) === !1 || t.__v === n.__v) {
            for (i.props = p, i.state = i.__s, t.__v !== n.__v && (i.__d = !1), i.__v = t, t.__e = n.__e, t.__k = n.__k, t.__k.forEach(function(k) {
              k && (k.__ = t);
            }), $ = 0; $ < i._sb.length; $++)
              i.__h.push(i._sb[$]);
            i._sb = [], i.__h.length && l.push(i);
            break e;
          }
          i.componentWillUpdate != null && i.componentWillUpdate(p, i.__s, g), i.componentDidUpdate != null && i.__h.push(function() {
            i.componentDidUpdate(f, a, u);
          });
        }
        if (i.context = g, i.props = p, i.__v = t, i.__P = e, w = fe.__r, S = 0, "prototype" in v && v.prototype.render) {
          for (i.state = i.__s, i.__d = !1, w && w(t), h = i.render(i.props, i.state, i.context), C = 0; C < i._sb.length; C++)
            i.__h.push(i._sb[C]);
          i._sb = [];
        } else
          do
            i.__d = !1, w && w(t), h = i.render(i.props, i.state, i.context), i.state = i.__s;
          while (i.__d && ++S < 25);
        i.state = i.__s, i.getChildContext != null && (o = Ct(Ct({}, o), i.getChildContext())), d || i.getSnapshotBeforeUpdate == null || (u = i.getSnapshotBeforeUpdate(f, a)), A = h != null && h.type === Bc && h.key == null ? h.props.children : h, Fu(e, Array.isArray(A) ? A : [A], t, n, o, s, r, l, c, _), i.base = t.__e, t.__h = null, i.__h.length && l.push(i), y && (i.__E = i.__ = null), i.__e = !1;
      } else
        r == null && t.__v === n.__v ? (t.__k = n.__k, t.__e = n.__e) : t.__e = ev(n.__e, t, n, o, s, r, l, _);
    (h = fe.diffed) && h(t);
  } catch (k) {
    t.__v = null, (_ || r != null) && (t.__e = c, t.__h = !!_, r[r.indexOf(c)] = null), fe.__e(k, t, n);
  }
}
function Qg(e, t) {
  fe.__c && fe.__c(t, e), e.some(function(n) {
    try {
      e = n.__h, n.__h = [], e.some(function(o) {
        o.call(n);
      });
    } catch (o) {
      fe.__e(o, n.__v);
    }
  });
}
function ev(e, t, n, o, s, r, l, c) {
  var _, h, i, d = n.props, f = t.props, a = t.type, u = 0;
  if (a === "svg" && (s = !0), r != null) {
    for (; u < r.length; u++)
      if ((_ = r[u]) && "setAttribute" in _ == !!a && (a ? _.localName === a : _.nodeType === 3)) {
        e = _, r[u] = null;
        break;
      }
  }
  if (e == null) {
    if (a === null)
      return document.createTextNode(f);
    e = s ? document.createElementNS("http://www.w3.org/2000/svg", a) : document.createElement(a, f.is && f), r = null, c = !1;
  }
  if (a === null)
    d === f || c && e.data === f || (e.data = f);
  else {
    if (r = r && Fc.call(e.childNodes), h = (d = n.props || Hu).dangerouslySetInnerHTML, i = f.dangerouslySetInnerHTML, !c) {
      if (r != null)
        for (d = {}, u = 0; u < e.attributes.length; u++)
          d[e.attributes[u].name] = e.attributes[u].value;
      (i || h) && (i && (h && i.__html == h.__html || i.__html === e.innerHTML) || (e.innerHTML = i && i.__html || ""));
    }
    if (Jg(e, f, d, s, c), i)
      t.__k = [];
    else if (u = t.props.children, Fu(e, Array.isArray(u) ? u : [u], t, n, o, s && a !== "foreignObject", r, l, r ? r[0] : n.__k && Ko(n, 0), c), r != null)
      for (u = r.length; u--; )
        r[u] != null && Iu(r[u]);
    c || ("value" in f && (u = f.value) !== void 0 && (u !== e.value || a === "progress" && !u || a === "option" && u !== d.value) && Oi(e, "value", u, d.value, !1), "checked" in f && (u = f.checked) !== void 0 && u !== e.checked && Oi(e, "checked", u, d.checked, !1));
  }
  return e;
}
function zu(e, t, n) {
  try {
    typeof e == "function" ? e(t) : e.current = t;
  } catch (o) {
    fe.__e(o, n);
  }
}
function Yu(e, t, n) {
  var o, s;
  if (fe.unmount && fe.unmount(e), (o = e.ref) && (o.current && o.current !== e.__e || zu(o, null, t)), (o = e.__c) != null) {
    if (o.componentWillUnmount)
      try {
        o.componentWillUnmount();
      } catch (r) {
        fe.__e(r, t);
      }
    o.base = o.__P = null, e.__c = void 0;
  }
  if (o = e.__k)
    for (s = 0; s < o.length; s++)
      o[s] && Yu(o[s], t, n || typeof e.type != "function");
  n || e.__e == null || Iu(e.__e), e.__ = e.__e = e.__d = void 0;
}
function tv(e, t, n) {
  return this.constructor(e, n);
}
Fc = Wu.slice, fe = { __e: function(e, t, n, o) {
  for (var s, r, l; t = t.__; )
    if ((s = t.__c) && !s.__)
      try {
        if ((r = s.constructor) && r.getDerivedStateFromError != null && (s.setState(r.getDerivedStateFromError(e)), l = s.__d), s.componentDidCatch != null && (s.componentDidCatch(e, o || {}), l = s.__d), l)
          return s.__E = s;
      } catch (c) {
        e = c;
      }
  throw e;
} }, Pu = 0, vo.prototype.setState = function(e, t) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = Ct({}, this.state), typeof e == "function" && (e = e(Ct({}, n), this.props)), e && Ct(n, e), e != null && this.__v && (t && this._sb.push(t), qa(this));
}, vo.prototype.forceUpdate = function(e) {
  this.__v && (this.__e = !0, e && this.__h.push(e), qa(this));
}, vo.prototype.render = Bc, go = [], Ri.__r = 0;
var nv = 0;
function oo(e, t, n, o, s) {
  var r, l, c = {};
  for (l in t)
    l == "ref" ? r = t[l] : c[l] = t[l];
  var _ = { type: e, props: c, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: --nv, __source: s, __self: o };
  if (typeof e == "function" && (r = e.defaultProps))
    for (l in r)
      c[l] === void 0 && (c[l] = r[l]);
  return fe.vnode && fe.vnode(_), _;
}
let jt = class extends vo {
  render() {
    const {
      component: t,
      type: n,
      size: o,
      className: s,
      children: r,
      url: l,
      target: c,
      disabled: _,
      active: h,
      loading: i,
      loadingIcon: d,
      loadingText: f,
      icon: a,
      text: u,
      trailingIcon: y,
      caret: p,
      square: m,
      hint: g,
      ...$
    } = this.props, w = t || (l ? "a" : "button"), S = u == null || typeof u == "string" && !u.length || i && !f, C = S && !a && !y && !r && !i;
    return Zg(
      w,
      {
        className: B("btn", n, s, {
          "btn-caret": C,
          disabled: _ || i,
          active: h,
          loading: i,
          square: m === void 0 ? !C && !r && S : m
        }, o ? `size-${o}` : ""),
        title: g,
        [w === "a" ? "href" : "data-url"]: l,
        [w === "a" ? "target" : "data-target"]: c,
        type: w === "button" ? "button" : void 0,
        ...$
      },
      i ? /* @__PURE__ */ oo("i", { class: `spin icon ${d || "icon-spinner-snake"}` }) : typeof a == "string" ? /* @__PURE__ */ oo("i", { class: `icon ${a}` }) : a,
      S ? null : /* @__PURE__ */ oo("span", { className: "text", children: i ? f : u }),
      i ? null : r,
      i ? null : typeof y == "string" ? /* @__PURE__ */ oo("i", { class: `icon ${y}` }) : y,
      i ? null : p ? /* @__PURE__ */ oo("span", { className: typeof p == "string" ? `caret-${p}` : "caret" }) : null
    );
  }
};
class Ja extends Ne {
}
R(Ja, "NAME", "button"), R(Ja, "Component", jt);
var vc;
vc = { __e: function(e, t, n, o) {
  for (var s, r, l; t = t.__; )
    if ((s = t.__c) && !s.__)
      try {
        if ((r = s.constructor) && r.getDerivedStateFromError != null && (s.setState(r.getDerivedStateFromError(e)), l = s.__d), s.componentDidCatch != null && (s.componentDidCatch(e, o || {}), l = s.__d), l)
          return s.__E = s;
      } catch (c) {
        e = c;
      }
  throw e;
} };
var ov = 0;
function rv(e, t, n, o, s) {
  var r, l, c = {};
  for (l in t)
    l == "ref" ? r = t[l] : c[l] = t[l];
  var _ = { type: e, props: c, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: --ov, __source: s, __self: o };
  if (typeof e == "function" && (r = e.defaultProps))
    for (l in r)
      c[l] === void 0 && (c[l] = r[l]);
  return vc.vnode && vc.vnode(_), _;
}
var uc;
let jc = (uc = class extends Ou {
  get nestedTrigger() {
    return this.props.nestedTrigger || "click";
  }
  get menuName() {
    return "menu-nested";
  }
  beforeRender() {
    const t = super.beforeRender();
    let { hasIcons: n } = t;
    return n === void 0 && (n = t.items.some((o) => o.icon)), t.className = B(t.className, this.menuName, {
      "has-icons": n,
      "has-nested-items": t.items.some((o) => this.isNestedItem(o))
    }), t;
  }
  renderToggleIcon(t) {
    return /* @__PURE__ */ rv("span", { class: `${this.name}-toggle-icon caret-${t ? "down" : "right"}` });
  }
}, R(uc, "NAME", "menu"), uc);
class Qa extends Ne {
}
R(Qa, "NAME", "menu"), R(Qa, "Component", jc);
var Ll, ie, Gu, yo, e_, Pi = {}, qu = [], iv = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function Et(e, t) {
  for (var n in t)
    e[n] = t[n];
  return e;
}
function Xu(e) {
  var t = e.parentNode;
  t && t.removeChild(e);
}
function yc(e, t, n) {
  var o, s, r, l = {};
  for (r in t)
    r == "key" ? o = t[r] : r == "ref" ? s = t[r] : l[r] = t[r];
  if (arguments.length > 2 && (l.children = arguments.length > 3 ? Ll.call(arguments, 2) : n), typeof e == "function" && e.defaultProps != null)
    for (r in e.defaultProps)
      l[r] === void 0 && (l[r] = e.defaultProps[r]);
  return pi(e, l, o, s, null);
}
function pi(e, t, n, o, s) {
  var r = { type: e, props: t, key: n, ref: o, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: s ?? ++Gu };
  return s == null && ie.vnode != null && ie.vnode(r), r;
}
function Dl(e) {
  return e.children;
}
function pn(e, t) {
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
function t_(e) {
  (!e.__d && (e.__d = !0) && yo.push(e) && !Hi.__r++ || e_ !== ie.debounceRendering) && ((e_ = ie.debounceRendering) || setTimeout)(Hi);
}
function Hi() {
  for (var e; Hi.__r = yo.length; )
    e = yo.sort(function(t, n) {
      return t.__v.__b - n.__v.__b;
    }), yo = [], e.some(function(t) {
      var n, o, s, r, l, c;
      t.__d && (l = (r = (n = t).__v).__e, (c = n.__P) && (o = [], (s = Et({}, r)).__v = r.__v + 1, Vc(c, r, s, n.__n, c.ownerSVGElement !== void 0, r.__h != null ? [l] : null, o, l ?? Zo(r), r.__h), eh(o, r), r.__e != l && Ku(r)));
    });
}
function Zu(e, t, n, o, s, r, l, c, _, h) {
  var i, d, f, a, u, y, p, m = o && o.__k || qu, g = m.length;
  for (n.__k = [], i = 0; i < t.length; i++)
    if ((a = n.__k[i] = (a = t[i]) == null || typeof a == "boolean" ? null : typeof a == "string" || typeof a == "number" || typeof a == "bigint" ? pi(null, a, null, null, a) : Array.isArray(a) ? pi(Dl, { children: a }, null, null, null) : a.__b > 0 ? pi(a.type, a.props, a.key, a.ref ? a.ref : null, a.__v) : a) != null) {
      if (a.__ = n, a.__b = n.__b + 1, (f = m[i]) === null || f && a.key == f.key && a.type === f.type)
        m[i] = void 0;
      else
        for (d = 0; d < g; d++) {
          if ((f = m[d]) && a.key == f.key && a.type === f.type) {
            m[d] = void 0;
            break;
          }
          f = null;
        }
      Vc(e, a, f = f || Pi, s, r, l, c, _, h), u = a.__e, (d = a.ref) && f.ref != d && (p || (p = []), f.ref && p.push(f.ref, null, a), p.push(d, a.__c || u, a)), u != null ? (y == null && (y = u), typeof a.type == "function" && a.__k === f.__k ? a.__d = _ = Ju(a, _, e) : _ = Qu(e, a, f, m, u, _), typeof n.type == "function" && (n.__d = _)) : _ && f.__e == _ && _.parentNode != e && (_ = Zo(f));
    }
  for (n.__e = y, i = g; i--; )
    m[i] != null && nh(m[i], m[i]);
  if (p)
    for (i = 0; i < p.length; i++)
      th(p[i], p[++i], p[++i]);
}
function Ju(e, t, n) {
  for (var o, s = e.__k, r = 0; s && r < s.length; r++)
    (o = s[r]) && (o.__ = e, t = typeof o.type == "function" ? Ju(o, t, n) : Qu(n, o, o, s, o.__e, t));
  return t;
}
function Qu(e, t, n, o, s, r) {
  var l, c, _;
  if (t.__d !== void 0)
    l = t.__d, t.__d = void 0;
  else if (n == null || s != r || s.parentNode == null)
    e:
      if (r == null || r.parentNode !== e)
        e.appendChild(s), l = null;
      else {
        for (c = r, _ = 0; (c = c.nextSibling) && _ < o.length; _ += 2)
          if (c == s)
            break e;
        e.insertBefore(s, r), l = r;
      }
  return l !== void 0 ? l : s.nextSibling;
}
function sv(e, t, n, o, s) {
  var r;
  for (r in n)
    r === "children" || r === "key" || r in t || Wi(e, r, null, n[r], o);
  for (r in t)
    s && typeof t[r] != "function" || r === "children" || r === "key" || r === "value" || r === "checked" || n[r] === t[r] || Wi(e, r, t[r], n[r], o);
}
function n_(e, t, n) {
  t[0] === "-" ? e.setProperty(t, n) : e[t] = n == null ? "" : typeof n != "number" || iv.test(t) ? n : n + "px";
}
function Wi(e, t, n, o, s) {
  var r;
  e:
    if (t === "style")
      if (typeof n == "string")
        e.style.cssText = n;
      else {
        if (typeof o == "string" && (e.style.cssText = o = ""), o)
          for (t in o)
            n && t in n || n_(e.style, t, "");
        if (n)
          for (t in n)
            o && n[t] === o[t] || n_(e.style, t, n[t]);
      }
    else if (t[0] === "o" && t[1] === "n")
      r = t !== (t = t.replace(/Capture$/, "")), t = t.toLowerCase() in e ? t.toLowerCase().slice(2) : t.slice(2), e.l || (e.l = {}), e.l[t + r] = n, n ? o || e.addEventListener(t, r ? r_ : o_, r) : e.removeEventListener(t, r ? r_ : o_, r);
    else if (t !== "dangerouslySetInnerHTML") {
      if (s)
        t = t.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
      else if (t !== "href" && t !== "list" && t !== "form" && t !== "tabIndex" && t !== "download" && t in e)
        try {
          e[t] = n ?? "";
          break e;
        } catch {
        }
      typeof n == "function" || (n == null || n === !1 && t.indexOf("-") == -1 ? e.removeAttribute(t) : e.setAttribute(t, n));
    }
}
function o_(e) {
  this.l[e.type + !1](ie.event ? ie.event(e) : e);
}
function r_(e) {
  this.l[e.type + !0](ie.event ? ie.event(e) : e);
}
function Vc(e, t, n, o, s, r, l, c, _) {
  var h, i, d, f, a, u, y, p, m, g, $, w, S, C, A, v = t.type;
  if (t.constructor !== void 0)
    return null;
  n.__h != null && (_ = n.__h, c = t.__e = n.__e, t.__h = null, r = [c]), (h = ie.__b) && h(t);
  try {
    e:
      if (typeof v == "function") {
        if (p = t.props, m = (h = v.contextType) && o[h.__c], g = h ? m ? m.props.value : h.__ : o, n.__c ? y = (i = t.__c = n.__c).__ = i.__E : ("prototype" in v && v.prototype.render ? t.__c = i = new v(p, g) : (t.__c = i = new pn(p, g), i.constructor = v, i.render = cv), m && m.sub(i), i.props = p, i.state || (i.state = {}), i.context = g, i.__n = o, d = i.__d = !0, i.__h = [], i._sb = []), i.__s == null && (i.__s = i.state), v.getDerivedStateFromProps != null && (i.__s == i.state && (i.__s = Et({}, i.__s)), Et(i.__s, v.getDerivedStateFromProps(p, i.__s))), f = i.props, a = i.state, d)
          v.getDerivedStateFromProps == null && i.componentWillMount != null && i.componentWillMount(), i.componentDidMount != null && i.__h.push(i.componentDidMount);
        else {
          if (v.getDerivedStateFromProps == null && p !== f && i.componentWillReceiveProps != null && i.componentWillReceiveProps(p, g), !i.__e && i.shouldComponentUpdate != null && i.shouldComponentUpdate(p, i.__s, g) === !1 || t.__v === n.__v) {
            for (i.props = p, i.state = i.__s, t.__v !== n.__v && (i.__d = !1), i.__v = t, t.__e = n.__e, t.__k = n.__k, t.__k.forEach(function(k) {
              k && (k.__ = t);
            }), $ = 0; $ < i._sb.length; $++)
              i.__h.push(i._sb[$]);
            i._sb = [], i.__h.length && l.push(i);
            break e;
          }
          i.componentWillUpdate != null && i.componentWillUpdate(p, i.__s, g), i.componentDidUpdate != null && i.__h.push(function() {
            i.componentDidUpdate(f, a, u);
          });
        }
        if (i.context = g, i.props = p, i.__v = t, i.__P = e, w = ie.__r, S = 0, "prototype" in v && v.prototype.render) {
          for (i.state = i.__s, i.__d = !1, w && w(t), h = i.render(i.props, i.state, i.context), C = 0; C < i._sb.length; C++)
            i.__h.push(i._sb[C]);
          i._sb = [];
        } else
          do
            i.__d = !1, w && w(t), h = i.render(i.props, i.state, i.context), i.state = i.__s;
          while (i.__d && ++S < 25);
        i.state = i.__s, i.getChildContext != null && (o = Et(Et({}, o), i.getChildContext())), d || i.getSnapshotBeforeUpdate == null || (u = i.getSnapshotBeforeUpdate(f, a)), A = h != null && h.type === Dl && h.key == null ? h.props.children : h, Zu(e, Array.isArray(A) ? A : [A], t, n, o, s, r, l, c, _), i.base = t.__e, t.__h = null, i.__h.length && l.push(i), y && (i.__E = i.__ = null), i.__e = !1;
      } else
        r == null && t.__v === n.__v ? (t.__k = n.__k, t.__e = n.__e) : t.__e = lv(n.__e, t, n, o, s, r, l, _);
    (h = ie.diffed) && h(t);
  } catch (k) {
    t.__v = null, (_ || r != null) && (t.__e = c, t.__h = !!_, r[r.indexOf(c)] = null), ie.__e(k, t, n);
  }
}
function eh(e, t) {
  ie.__c && ie.__c(t, e), e.some(function(n) {
    try {
      e = n.__h, n.__h = [], e.some(function(o) {
        o.call(n);
      });
    } catch (o) {
      ie.__e(o, n.__v);
    }
  });
}
function lv(e, t, n, o, s, r, l, c) {
  var _, h, i, d = n.props, f = t.props, a = t.type, u = 0;
  if (a === "svg" && (s = !0), r != null) {
    for (; u < r.length; u++)
      if ((_ = r[u]) && "setAttribute" in _ == !!a && (a ? _.localName === a : _.nodeType === 3)) {
        e = _, r[u] = null;
        break;
      }
  }
  if (e == null) {
    if (a === null)
      return document.createTextNode(f);
    e = s ? document.createElementNS("http://www.w3.org/2000/svg", a) : document.createElement(a, f.is && f), r = null, c = !1;
  }
  if (a === null)
    d === f || c && e.data === f || (e.data = f);
  else {
    if (r = r && Ll.call(e.childNodes), h = (d = n.props || Pi).dangerouslySetInnerHTML, i = f.dangerouslySetInnerHTML, !c) {
      if (r != null)
        for (d = {}, u = 0; u < e.attributes.length; u++)
          d[e.attributes[u].name] = e.attributes[u].value;
      (i || h) && (i && (h && i.__html == h.__html || i.__html === e.innerHTML) || (e.innerHTML = i && i.__html || ""));
    }
    if (sv(e, f, d, s, c), i)
      t.__k = [];
    else if (u = t.props.children, Zu(e, Array.isArray(u) ? u : [u], t, n, o, s && a !== "foreignObject", r, l, r ? r[0] : n.__k && Zo(n, 0), c), r != null)
      for (u = r.length; u--; )
        r[u] != null && Xu(r[u]);
    c || ("value" in f && (u = f.value) !== void 0 && (u !== e.value || a === "progress" && !u || a === "option" && u !== d.value) && Wi(e, "value", u, d.value, !1), "checked" in f && (u = f.checked) !== void 0 && u !== e.checked && Wi(e, "checked", u, d.checked, !1));
  }
  return e;
}
function th(e, t, n) {
  try {
    typeof e == "function" ? e(t) : e.current = t;
  } catch (o) {
    ie.__e(o, n);
  }
}
function nh(e, t, n) {
  var o, s;
  if (ie.unmount && ie.unmount(e), (o = e.ref) && (o.current && o.current !== e.__e || th(o, null, t)), (o = e.__c) != null) {
    if (o.componentWillUnmount)
      try {
        o.componentWillUnmount();
      } catch (r) {
        ie.__e(r, t);
      }
    o.base = o.__P = null, e.__c = void 0;
  }
  if (o = e.__k)
    for (s = 0; s < o.length; s++)
      o[s] && nh(o[s], t, n || typeof e.type != "function");
  n || e.__e == null || Xu(e.__e), e.__ = e.__e = e.__d = void 0;
}
function cv(e, t, n) {
  return this.constructor(e, n);
}
function i_(e, t, n) {
  var o, s, r;
  ie.__ && ie.__(e, t), s = (o = typeof n == "function") ? null : n && n.__k || t.__k, r = [], Vc(t, e = (!o && n || t).__k = yc(Dl, null, [e]), s || Pi, Pi, t.ownerSVGElement !== void 0, !o && n ? [n] : s ? null : t.firstChild ? Ll.call(t.childNodes) : null, r, !o && n ? n : s ? s.__e : t.firstChild, o), eh(r, e);
}
Ll = qu.slice, ie = { __e: function(e, t, n, o) {
  for (var s, r, l; t = t.__; )
    if ((s = t.__c) && !s.__)
      try {
        if ((r = s.constructor) && r.getDerivedStateFromError != null && (s.setState(r.getDerivedStateFromError(e)), l = s.__d), s.componentDidCatch != null && (s.componentDidCatch(e, o || {}), l = s.__d), l)
          return s.__E = s;
      } catch (c) {
        e = c;
      }
  throw e;
} }, Gu = 0, pn.prototype.setState = function(e, t) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = Et({}, this.state), typeof e == "function" && (e = e(Et({}, n), this.props)), e && Et(n, e), e != null && this.__v && (t && this._sb.push(t), t_(this));
}, pn.prototype.forceUpdate = function(e) {
  this.__v && (this.__e = !0, e && this.__h.push(e), t_(this));
}, pn.prototype.render = Dl, yo = [], Hi.__r = 0;
var av = 0;
function bo(e, t, n, o, s) {
  var r, l, c = {};
  for (l in t)
    l == "ref" ? r = t[l] : c[l] = t[l];
  var _ = { type: e, props: c, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: --av, __source: s, __self: o };
  if (typeof e == "function" && (r = e.defaultProps))
    for (l in r)
      c[l] === void 0 && (c[l] = r[l]);
  return ie.vnode && ie.vnode(_), _;
}
var zc, ue, oh, rh, wo, s_, ih = {}, sh = [], _v = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function At(e, t) {
  for (var n in t)
    e[n] = t[n];
  return e;
}
function lh(e) {
  var t = e.parentNode;
  t && t.removeChild(e);
}
function fv(e, t, n) {
  var o, s, r, l = {};
  for (r in t)
    r == "key" ? o = t[r] : r == "ref" ? s = t[r] : l[r] = t[r];
  if (arguments.length > 2 && (l.children = arguments.length > 3 ? zc.call(arguments, 2) : n), typeof e == "function" && e.defaultProps != null)
    for (r in e.defaultProps)
      l[r] === void 0 && (l[r] = e.defaultProps[r]);
  return mi(e, l, o, s, null);
}
function mi(e, t, n, o, s) {
  var r = { type: e, props: t, key: n, ref: o, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: s ?? ++oh };
  return s == null && ue.vnode != null && ue.vnode(r), r;
}
function Yc(e) {
  return e.children;
}
function $o(e, t) {
  this.props = e, this.context = t;
}
function Jo(e, t) {
  if (t == null)
    return e.__ ? Jo(e.__, e.__.__k.indexOf(e) + 1) : null;
  for (var n; t < e.__k.length; t++)
    if ((n = e.__k[t]) != null && n.__e != null)
      return n.__e;
  return typeof e.type == "function" ? Jo(e) : null;
}
function ch(e) {
  var t, n;
  if ((e = e.__) != null && e.__c != null) {
    for (e.__e = e.__c.base = null, t = 0; t < e.__k.length; t++)
      if ((n = e.__k[t]) != null && n.__e != null) {
        e.__e = e.__c.base = n.__e;
        break;
      }
    return ch(e);
  }
}
function l_(e) {
  (!e.__d && (e.__d = !0) && wo.push(e) && !Ii.__r++ || s_ !== ue.debounceRendering) && ((s_ = ue.debounceRendering) || setTimeout)(Ii);
}
function Ii() {
  for (var e; Ii.__r = wo.length; )
    e = wo.sort(function(t, n) {
      return t.__v.__b - n.__v.__b;
    }), wo = [], e.some(function(t) {
      var n, o, s, r, l, c;
      t.__d && (l = (r = (n = t).__v).__e, (c = n.__P) && (o = [], (s = At({}, r)).__v = r.__v + 1, uh(c, r, s, n.__n, c.ownerSVGElement !== void 0, r.__h != null ? [l] : null, o, l ?? Jo(r), r.__h), hv(o, r), r.__e != l && ch(r)));
    });
}
function ah(e, t, n, o, s, r, l, c, _, h) {
  var i, d, f, a, u, y, p, m = o && o.__k || sh, g = m.length;
  for (n.__k = [], i = 0; i < t.length; i++)
    if ((a = n.__k[i] = (a = t[i]) == null || typeof a == "boolean" ? null : typeof a == "string" || typeof a == "number" || typeof a == "bigint" ? mi(null, a, null, null, a) : Array.isArray(a) ? mi(Yc, { children: a }, null, null, null) : a.__b > 0 ? mi(a.type, a.props, a.key, a.ref ? a.ref : null, a.__v) : a) != null) {
      if (a.__ = n, a.__b = n.__b + 1, (f = m[i]) === null || f && a.key == f.key && a.type === f.type)
        m[i] = void 0;
      else
        for (d = 0; d < g; d++) {
          if ((f = m[d]) && a.key == f.key && a.type === f.type) {
            m[d] = void 0;
            break;
          }
          f = null;
        }
      uh(e, a, f = f || ih, s, r, l, c, _, h), u = a.__e, (d = a.ref) && f.ref != d && (p || (p = []), f.ref && p.push(f.ref, null, a), p.push(d, a.__c || u, a)), u != null ? (y == null && (y = u), typeof a.type == "function" && a.__k === f.__k ? a.__d = _ = _h(a, _, e) : _ = fh(e, a, f, m, u, _), typeof n.type == "function" && (n.__d = _)) : _ && f.__e == _ && _.parentNode != e && (_ = Jo(f));
    }
  for (n.__e = y, i = g; i--; )
    m[i] != null && dh(m[i], m[i]);
  if (p)
    for (i = 0; i < p.length; i++)
      hh(p[i], p[++i], p[++i]);
}
function _h(e, t, n) {
  for (var o, s = e.__k, r = 0; s && r < s.length; r++)
    (o = s[r]) && (o.__ = e, t = typeof o.type == "function" ? _h(o, t, n) : fh(n, o, o, s, o.__e, t));
  return t;
}
function fh(e, t, n, o, s, r) {
  var l, c, _;
  if (t.__d !== void 0)
    l = t.__d, t.__d = void 0;
  else if (n == null || s != r || s.parentNode == null)
    e:
      if (r == null || r.parentNode !== e)
        e.appendChild(s), l = null;
      else {
        for (c = r, _ = 0; (c = c.nextSibling) && _ < o.length; _ += 2)
          if (c == s)
            break e;
        e.insertBefore(s, r), l = r;
      }
  return l !== void 0 ? l : s.nextSibling;
}
function uv(e, t, n, o, s) {
  var r;
  for (r in n)
    r === "children" || r === "key" || r in t || Ui(e, r, null, n[r], o);
  for (r in t)
    s && typeof t[r] != "function" || r === "children" || r === "key" || r === "value" || r === "checked" || n[r] === t[r] || Ui(e, r, t[r], n[r], o);
}
function c_(e, t, n) {
  t[0] === "-" ? e.setProperty(t, n) : e[t] = n == null ? "" : typeof n != "number" || _v.test(t) ? n : n + "px";
}
function Ui(e, t, n, o, s) {
  var r;
  e:
    if (t === "style")
      if (typeof n == "string")
        e.style.cssText = n;
      else {
        if (typeof o == "string" && (e.style.cssText = o = ""), o)
          for (t in o)
            n && t in n || c_(e.style, t, "");
        if (n)
          for (t in n)
            o && n[t] === o[t] || c_(e.style, t, n[t]);
      }
    else if (t[0] === "o" && t[1] === "n")
      r = t !== (t = t.replace(/Capture$/, "")), t = t.toLowerCase() in e ? t.toLowerCase().slice(2) : t.slice(2), e.l || (e.l = {}), e.l[t + r] = n, n ? o || e.addEventListener(t, r ? __ : a_, r) : e.removeEventListener(t, r ? __ : a_, r);
    else if (t !== "dangerouslySetInnerHTML") {
      if (s)
        t = t.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
      else if (t !== "href" && t !== "list" && t !== "form" && t !== "tabIndex" && t !== "download" && t in e)
        try {
          e[t] = n ?? "";
          break e;
        } catch {
        }
      typeof n == "function" || (n == null || n === !1 && t.indexOf("-") == -1 ? e.removeAttribute(t) : e.setAttribute(t, n));
    }
}
function a_(e) {
  this.l[e.type + !1](ue.event ? ue.event(e) : e);
}
function __(e) {
  this.l[e.type + !0](ue.event ? ue.event(e) : e);
}
function uh(e, t, n, o, s, r, l, c, _) {
  var h, i, d, f, a, u, y, p, m, g, $, w, S, C, A, v = t.type;
  if (t.constructor !== void 0)
    return null;
  n.__h != null && (_ = n.__h, c = t.__e = n.__e, t.__h = null, r = [c]), (h = ue.__b) && h(t);
  try {
    e:
      if (typeof v == "function") {
        if (p = t.props, m = (h = v.contextType) && o[h.__c], g = h ? m ? m.props.value : h.__ : o, n.__c ? y = (i = t.__c = n.__c).__ = i.__E : ("prototype" in v && v.prototype.render ? t.__c = i = new v(p, g) : (t.__c = i = new $o(p, g), i.constructor = v, i.render = pv), m && m.sub(i), i.props = p, i.state || (i.state = {}), i.context = g, i.__n = o, d = i.__d = !0, i.__h = [], i._sb = []), i.__s == null && (i.__s = i.state), v.getDerivedStateFromProps != null && (i.__s == i.state && (i.__s = At({}, i.__s)), At(i.__s, v.getDerivedStateFromProps(p, i.__s))), f = i.props, a = i.state, d)
          v.getDerivedStateFromProps == null && i.componentWillMount != null && i.componentWillMount(), i.componentDidMount != null && i.__h.push(i.componentDidMount);
        else {
          if (v.getDerivedStateFromProps == null && p !== f && i.componentWillReceiveProps != null && i.componentWillReceiveProps(p, g), !i.__e && i.shouldComponentUpdate != null && i.shouldComponentUpdate(p, i.__s, g) === !1 || t.__v === n.__v) {
            for (i.props = p, i.state = i.__s, t.__v !== n.__v && (i.__d = !1), i.__v = t, t.__e = n.__e, t.__k = n.__k, t.__k.forEach(function(k) {
              k && (k.__ = t);
            }), $ = 0; $ < i._sb.length; $++)
              i.__h.push(i._sb[$]);
            i._sb = [], i.__h.length && l.push(i);
            break e;
          }
          i.componentWillUpdate != null && i.componentWillUpdate(p, i.__s, g), i.componentDidUpdate != null && i.__h.push(function() {
            i.componentDidUpdate(f, a, u);
          });
        }
        if (i.context = g, i.props = p, i.__v = t, i.__P = e, w = ue.__r, S = 0, "prototype" in v && v.prototype.render) {
          for (i.state = i.__s, i.__d = !1, w && w(t), h = i.render(i.props, i.state, i.context), C = 0; C < i._sb.length; C++)
            i.__h.push(i._sb[C]);
          i._sb = [];
        } else
          do
            i.__d = !1, w && w(t), h = i.render(i.props, i.state, i.context), i.state = i.__s;
          while (i.__d && ++S < 25);
        i.state = i.__s, i.getChildContext != null && (o = At(At({}, o), i.getChildContext())), d || i.getSnapshotBeforeUpdate == null || (u = i.getSnapshotBeforeUpdate(f, a)), A = h != null && h.type === Yc && h.key == null ? h.props.children : h, ah(e, Array.isArray(A) ? A : [A], t, n, o, s, r, l, c, _), i.base = t.__e, t.__h = null, i.__h.length && l.push(i), y && (i.__E = i.__ = null), i.__e = !1;
      } else
        r == null && t.__v === n.__v ? (t.__k = n.__k, t.__e = n.__e) : t.__e = dv(n.__e, t, n, o, s, r, l, _);
    (h = ue.diffed) && h(t);
  } catch (k) {
    t.__v = null, (_ || r != null) && (t.__e = c, t.__h = !!_, r[r.indexOf(c)] = null), ue.__e(k, t, n);
  }
}
function hv(e, t) {
  ue.__c && ue.__c(t, e), e.some(function(n) {
    try {
      e = n.__h, n.__h = [], e.some(function(o) {
        o.call(n);
      });
    } catch (o) {
      ue.__e(o, n.__v);
    }
  });
}
function dv(e, t, n, o, s, r, l, c) {
  var _, h, i, d = n.props, f = t.props, a = t.type, u = 0;
  if (a === "svg" && (s = !0), r != null) {
    for (; u < r.length; u++)
      if ((_ = r[u]) && "setAttribute" in _ == !!a && (a ? _.localName === a : _.nodeType === 3)) {
        e = _, r[u] = null;
        break;
      }
  }
  if (e == null) {
    if (a === null)
      return document.createTextNode(f);
    e = s ? document.createElementNS("http://www.w3.org/2000/svg", a) : document.createElement(a, f.is && f), r = null, c = !1;
  }
  if (a === null)
    d === f || c && e.data === f || (e.data = f);
  else {
    if (r = r && zc.call(e.childNodes), h = (d = n.props || ih).dangerouslySetInnerHTML, i = f.dangerouslySetInnerHTML, !c) {
      if (r != null)
        for (d = {}, u = 0; u < e.attributes.length; u++)
          d[e.attributes[u].name] = e.attributes[u].value;
      (i || h) && (i && (h && i.__html == h.__html || i.__html === e.innerHTML) || (e.innerHTML = i && i.__html || ""));
    }
    if (uv(e, f, d, s, c), i)
      t.__k = [];
    else if (u = t.props.children, ah(e, Array.isArray(u) ? u : [u], t, n, o, s && a !== "foreignObject", r, l, r ? r[0] : n.__k && Jo(n, 0), c), r != null)
      for (u = r.length; u--; )
        r[u] != null && lh(r[u]);
    c || ("value" in f && (u = f.value) !== void 0 && (u !== e.value || a === "progress" && !u || a === "option" && u !== d.value) && Ui(e, "value", u, d.value, !1), "checked" in f && (u = f.checked) !== void 0 && u !== e.checked && Ui(e, "checked", u, d.checked, !1));
  }
  return e;
}
function hh(e, t, n) {
  try {
    typeof e == "function" ? e(t) : e.current = t;
  } catch (o) {
    ue.__e(o, n);
  }
}
function dh(e, t, n) {
  var o, s;
  if (ue.unmount && ue.unmount(e), (o = e.ref) && (o.current && o.current !== e.__e || hh(o, null, t)), (o = e.__c) != null) {
    if (o.componentWillUnmount)
      try {
        o.componentWillUnmount();
      } catch (r) {
        ue.__e(r, t);
      }
    o.base = o.__P = null, e.__c = void 0;
  }
  if (o = e.__k)
    for (s = 0; s < o.length; s++)
      o[s] && dh(o[s], t, n || typeof e.type != "function");
  n || e.__e == null || lh(e.__e), e.__ = e.__e = e.__d = void 0;
}
function pv(e, t, n) {
  return this.constructor(e, n);
}
zc = sh.slice, ue = { __e: function(e, t, n, o) {
  for (var s, r, l; t = t.__; )
    if ((s = t.__c) && !s.__)
      try {
        if ((r = s.constructor) && r.getDerivedStateFromError != null && (s.setState(r.getDerivedStateFromError(e)), l = s.__d), s.componentDidCatch != null && (s.componentDidCatch(e, o || {}), l = s.__d), l)
          return s.__E = s;
      } catch (c) {
        e = c;
      }
  throw e;
} }, oh = 0, rh = function(e) {
  return e != null && e.constructor === void 0;
}, $o.prototype.setState = function(e, t) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = At({}, this.state), typeof e == "function" && (e = e(At({}, n), this.props)), e && At(n, e), e != null && this.__v && (t && this._sb.push(t), l_(this));
}, $o.prototype.forceUpdate = function(e) {
  this.__v && (this.__e = !0, e && this.__h.push(e), l_(this));
}, $o.prototype.render = Yc, wo = [], Ii.__r = 0;
var mv = 0;
function f_(e, t, n, o, s) {
  var r, l, c = {};
  for (l in t)
    l == "ref" ? r = t[l] : c[l] = t[l];
  var _ = { type: e, props: c, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: --mv, __source: s, __self: o };
  if (typeof e == "function" && (r = e.defaultProps))
    for (l in r)
      c[l] === void 0 && (c[l] = r[l]);
  return ue.vnode && ue.vnode(_), _;
}
let Gc = class extends $o {
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
  handleItemClick(t, n, o, s) {
    o && o.call(s.target, s);
    const { onClickItem: r } = this.props;
    r && r.call(this, { item: t, index: n, event: s });
  }
  beforeRender() {
    var o;
    const t = { ...this.props }, n = (o = t.beforeRender) == null ? void 0 : o.call(this, t);
    return n && Object.assign(t, n), typeof t.items == "function" && (t.items = t.items.call(this)), t;
  }
  onRenderItem(t, n) {
    const { key: o = n, ...s } = t;
    return /* @__PURE__ */ f_(jt, { ...s }, o);
  }
  renderItem(t, n, o) {
    const { itemRender: s, defaultBtnProps: r, onClickItem: l } = t, c = { key: o, ...n };
    if (r && Object.assign(c, r), l && (c.onClick = this.handleItemClick.bind(this, c, o, n.onClick)), s) {
      const _ = s.call(this, c, fv);
      if (rh(_))
        return _;
      typeof _ == "object" && Object.assign(c, _);
    }
    return this.onRenderItem(c, o);
  }
  render() {
    const t = this.beforeRender(), {
      className: n,
      items: o,
      size: s,
      type: r,
      defaultBtnProps: l,
      children: c,
      itemRender: _,
      onClickItem: h,
      beforeRender: i,
      afterRender: d,
      beforeDestroy: f,
      ...a
    } = t;
    return /* @__PURE__ */ f_(
      "div",
      {
        className: B("btn-group", s ? `size-${s}` : "", n),
        ...a,
        children: [
          o && o.map(this.renderItem.bind(this, t)),
          c
        ]
      }
    );
  }
};
function gv({
  ...e
}) {
  return /* @__PURE__ */ bo(Gc, { ...e });
}
class ph extends pn {
  render() {
    const { message: t, className: n, type: o, actions: s, close: r } = this.props, l = B([o, "border-none"]), c = s != null && s.length ? s.map((_) => ({ ..._, className: l })) : [];
    if (r) {
      const _ = {
        name: "times",
        icon: "icon-times",
        className: l,
        action: function() {
          console.log("你点击了关闭按钮。");
        }
      };
      c.push(_);
    }
    return /* @__PURE__ */ bo("div", { class: B([n, o || "default", "messager"]), children: [
      /* @__PURE__ */ bo("div", { class: "messager-content", children: t }),
      /* @__PURE__ */ bo(
        gv,
        {
          items: c
        }
      )
    ] });
  }
}
R(ph, "defaultProps");
class mh extends pn {
  render() {
    const { className: t, placement: n } = this.props;
    return /* @__PURE__ */ bo(
      "div",
      {
        class: B([t || "", "messagers-holder", "col"]),
        "data-placement": n
      }
    );
  }
}
R(mh, "defaultProps");
class u_ extends Ue {
  show(t, n) {
    console.log(t, n, "showFunc");
    const o = n != null && n.placement ? n.placement : "top", s = (n == null ? void 0 : n.close) !== !1;
    let r = document.querySelector(".messagers-holder[data-placement=" + o + "]");
    if (!r) {
      const _ = document.createElement("div");
      document.body.appendChild(_);
      const h = {
        ...n,
        placement: o
      };
      i_(yc(mh, h), _);
    }
    r = document.querySelector(".messagers-holder[data-placement=" + o + "]");
    const l = document.createElement("div");
    r.appendChild(l);
    const c = {
      ...n,
      message: t,
      placement: o,
      close: s
    };
    i_(yc(ph, c), r, l);
  }
}
R(u_, "NAME", "messager"), R(u_, "DEFAULT", {
  placement: "top",
  type: "default",
  close: !0
});
var gh, he, vh, ko, h_, yh = {}, bh = [], vv = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function Mt(e, t) {
  for (var n in t)
    e[n] = t[n];
  return e;
}
function wh(e) {
  var t = e.parentNode;
  t && t.removeChild(e);
}
function oc(e, t, n, o, s) {
  var r = { type: e, props: t, key: n, ref: o, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: s ?? ++vh };
  return s == null && he.vnode != null && he.vnode(r), r;
}
function qc(e) {
  return e.children;
}
function xo(e, t) {
  this.props = e, this.context = t;
}
function Qo(e, t) {
  if (t == null)
    return e.__ ? Qo(e.__, e.__.__k.indexOf(e) + 1) : null;
  for (var n; t < e.__k.length; t++)
    if ((n = e.__k[t]) != null && n.__e != null)
      return n.__e;
  return typeof e.type == "function" ? Qo(e) : null;
}
function $h(e) {
  var t, n;
  if ((e = e.__) != null && e.__c != null) {
    for (e.__e = e.__c.base = null, t = 0; t < e.__k.length; t++)
      if ((n = e.__k[t]) != null && n.__e != null) {
        e.__e = e.__c.base = n.__e;
        break;
      }
    return $h(e);
  }
}
function d_(e) {
  (!e.__d && (e.__d = !0) && ko.push(e) && !Fi.__r++ || h_ !== he.debounceRendering) && ((h_ = he.debounceRendering) || setTimeout)(Fi);
}
function Fi() {
  for (var e; Fi.__r = ko.length; )
    e = ko.sort(function(t, n) {
      return t.__v.__b - n.__v.__b;
    }), ko = [], e.some(function(t) {
      var n, o, s, r, l, c;
      t.__d && (l = (r = (n = t).__v).__e, (c = n.__P) && (o = [], (s = Mt({}, r)).__v = r.__v + 1, Ch(c, r, s, n.__n, c.ownerSVGElement !== void 0, r.__h != null ? [l] : null, o, l ?? Qo(r), r.__h), bv(o, r), r.__e != l && $h(r)));
    });
}
function kh(e, t, n, o, s, r, l, c, _, h) {
  var i, d, f, a, u, y, p, m = o && o.__k || bh, g = m.length;
  for (n.__k = [], i = 0; i < t.length; i++)
    if ((a = n.__k[i] = (a = t[i]) == null || typeof a == "boolean" ? null : typeof a == "string" || typeof a == "number" || typeof a == "bigint" ? oc(null, a, null, null, a) : Array.isArray(a) ? oc(qc, { children: a }, null, null, null) : a.__b > 0 ? oc(a.type, a.props, a.key, a.ref ? a.ref : null, a.__v) : a) != null) {
      if (a.__ = n, a.__b = n.__b + 1, (f = m[i]) === null || f && a.key == f.key && a.type === f.type)
        m[i] = void 0;
      else
        for (d = 0; d < g; d++) {
          if ((f = m[d]) && a.key == f.key && a.type === f.type) {
            m[d] = void 0;
            break;
          }
          f = null;
        }
      Ch(e, a, f = f || yh, s, r, l, c, _, h), u = a.__e, (d = a.ref) && f.ref != d && (p || (p = []), f.ref && p.push(f.ref, null, a), p.push(d, a.__c || u, a)), u != null ? (y == null && (y = u), typeof a.type == "function" && a.__k === f.__k ? a.__d = _ = xh(a, _, e) : _ = Sh(e, a, f, m, u, _), typeof n.type == "function" && (n.__d = _)) : _ && f.__e == _ && _.parentNode != e && (_ = Qo(f));
    }
  for (n.__e = y, i = g; i--; )
    m[i] != null && Ah(m[i], m[i]);
  if (p)
    for (i = 0; i < p.length; i++)
      Eh(p[i], p[++i], p[++i]);
}
function xh(e, t, n) {
  for (var o, s = e.__k, r = 0; s && r < s.length; r++)
    (o = s[r]) && (o.__ = e, t = typeof o.type == "function" ? xh(o, t, n) : Sh(n, o, o, s, o.__e, t));
  return t;
}
function Sh(e, t, n, o, s, r) {
  var l, c, _;
  if (t.__d !== void 0)
    l = t.__d, t.__d = void 0;
  else if (n == null || s != r || s.parentNode == null)
    e:
      if (r == null || r.parentNode !== e)
        e.appendChild(s), l = null;
      else {
        for (c = r, _ = 0; (c = c.nextSibling) && _ < o.length; _ += 2)
          if (c == s)
            break e;
        e.insertBefore(s, r), l = r;
      }
  return l !== void 0 ? l : s.nextSibling;
}
function yv(e, t, n, o, s) {
  var r;
  for (r in n)
    r === "children" || r === "key" || r in t || Bi(e, r, null, n[r], o);
  for (r in t)
    s && typeof t[r] != "function" || r === "children" || r === "key" || r === "value" || r === "checked" || n[r] === t[r] || Bi(e, r, t[r], n[r], o);
}
function p_(e, t, n) {
  t[0] === "-" ? e.setProperty(t, n) : e[t] = n == null ? "" : typeof n != "number" || vv.test(t) ? n : n + "px";
}
function Bi(e, t, n, o, s) {
  var r;
  e:
    if (t === "style")
      if (typeof n == "string")
        e.style.cssText = n;
      else {
        if (typeof o == "string" && (e.style.cssText = o = ""), o)
          for (t in o)
            n && t in n || p_(e.style, t, "");
        if (n)
          for (t in n)
            o && n[t] === o[t] || p_(e.style, t, n[t]);
      }
    else if (t[0] === "o" && t[1] === "n")
      r = t !== (t = t.replace(/Capture$/, "")), t = t.toLowerCase() in e ? t.toLowerCase().slice(2) : t.slice(2), e.l || (e.l = {}), e.l[t + r] = n, n ? o || e.addEventListener(t, r ? g_ : m_, r) : e.removeEventListener(t, r ? g_ : m_, r);
    else if (t !== "dangerouslySetInnerHTML") {
      if (s)
        t = t.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
      else if (t !== "href" && t !== "list" && t !== "form" && t !== "tabIndex" && t !== "download" && t in e)
        try {
          e[t] = n ?? "";
          break e;
        } catch {
        }
      typeof n == "function" || (n == null || n === !1 && t.indexOf("-") == -1 ? e.removeAttribute(t) : e.setAttribute(t, n));
    }
}
function m_(e) {
  this.l[e.type + !1](he.event ? he.event(e) : e);
}
function g_(e) {
  this.l[e.type + !0](he.event ? he.event(e) : e);
}
function Ch(e, t, n, o, s, r, l, c, _) {
  var h, i, d, f, a, u, y, p, m, g, $, w, S, C, A, v = t.type;
  if (t.constructor !== void 0)
    return null;
  n.__h != null && (_ = n.__h, c = t.__e = n.__e, t.__h = null, r = [c]), (h = he.__b) && h(t);
  try {
    e:
      if (typeof v == "function") {
        if (p = t.props, m = (h = v.contextType) && o[h.__c], g = h ? m ? m.props.value : h.__ : o, n.__c ? y = (i = t.__c = n.__c).__ = i.__E : ("prototype" in v && v.prototype.render ? t.__c = i = new v(p, g) : (t.__c = i = new xo(p, g), i.constructor = v, i.render = $v), m && m.sub(i), i.props = p, i.state || (i.state = {}), i.context = g, i.__n = o, d = i.__d = !0, i.__h = [], i._sb = []), i.__s == null && (i.__s = i.state), v.getDerivedStateFromProps != null && (i.__s == i.state && (i.__s = Mt({}, i.__s)), Mt(i.__s, v.getDerivedStateFromProps(p, i.__s))), f = i.props, a = i.state, d)
          v.getDerivedStateFromProps == null && i.componentWillMount != null && i.componentWillMount(), i.componentDidMount != null && i.__h.push(i.componentDidMount);
        else {
          if (v.getDerivedStateFromProps == null && p !== f && i.componentWillReceiveProps != null && i.componentWillReceiveProps(p, g), !i.__e && i.shouldComponentUpdate != null && i.shouldComponentUpdate(p, i.__s, g) === !1 || t.__v === n.__v) {
            for (i.props = p, i.state = i.__s, t.__v !== n.__v && (i.__d = !1), i.__v = t, t.__e = n.__e, t.__k = n.__k, t.__k.forEach(function(k) {
              k && (k.__ = t);
            }), $ = 0; $ < i._sb.length; $++)
              i.__h.push(i._sb[$]);
            i._sb = [], i.__h.length && l.push(i);
            break e;
          }
          i.componentWillUpdate != null && i.componentWillUpdate(p, i.__s, g), i.componentDidUpdate != null && i.__h.push(function() {
            i.componentDidUpdate(f, a, u);
          });
        }
        if (i.context = g, i.props = p, i.__v = t, i.__P = e, w = he.__r, S = 0, "prototype" in v && v.prototype.render) {
          for (i.state = i.__s, i.__d = !1, w && w(t), h = i.render(i.props, i.state, i.context), C = 0; C < i._sb.length; C++)
            i.__h.push(i._sb[C]);
          i._sb = [];
        } else
          do
            i.__d = !1, w && w(t), h = i.render(i.props, i.state, i.context), i.state = i.__s;
          while (i.__d && ++S < 25);
        i.state = i.__s, i.getChildContext != null && (o = Mt(Mt({}, o), i.getChildContext())), d || i.getSnapshotBeforeUpdate == null || (u = i.getSnapshotBeforeUpdate(f, a)), A = h != null && h.type === qc && h.key == null ? h.props.children : h, kh(e, Array.isArray(A) ? A : [A], t, n, o, s, r, l, c, _), i.base = t.__e, t.__h = null, i.__h.length && l.push(i), y && (i.__E = i.__ = null), i.__e = !1;
      } else
        r == null && t.__v === n.__v ? (t.__k = n.__k, t.__e = n.__e) : t.__e = wv(n.__e, t, n, o, s, r, l, _);
    (h = he.diffed) && h(t);
  } catch (k) {
    t.__v = null, (_ || r != null) && (t.__e = c, t.__h = !!_, r[r.indexOf(c)] = null), he.__e(k, t, n);
  }
}
function bv(e, t) {
  he.__c && he.__c(t, e), e.some(function(n) {
    try {
      e = n.__h, n.__h = [], e.some(function(o) {
        o.call(n);
      });
    } catch (o) {
      he.__e(o, n.__v);
    }
  });
}
function wv(e, t, n, o, s, r, l, c) {
  var _, h, i, d = n.props, f = t.props, a = t.type, u = 0;
  if (a === "svg" && (s = !0), r != null) {
    for (; u < r.length; u++)
      if ((_ = r[u]) && "setAttribute" in _ == !!a && (a ? _.localName === a : _.nodeType === 3)) {
        e = _, r[u] = null;
        break;
      }
  }
  if (e == null) {
    if (a === null)
      return document.createTextNode(f);
    e = s ? document.createElementNS("http://www.w3.org/2000/svg", a) : document.createElement(a, f.is && f), r = null, c = !1;
  }
  if (a === null)
    d === f || c && e.data === f || (e.data = f);
  else {
    if (r = r && gh.call(e.childNodes), h = (d = n.props || yh).dangerouslySetInnerHTML, i = f.dangerouslySetInnerHTML, !c) {
      if (r != null)
        for (d = {}, u = 0; u < e.attributes.length; u++)
          d[e.attributes[u].name] = e.attributes[u].value;
      (i || h) && (i && (h && i.__html == h.__html || i.__html === e.innerHTML) || (e.innerHTML = i && i.__html || ""));
    }
    if (yv(e, f, d, s, c), i)
      t.__k = [];
    else if (u = t.props.children, kh(e, Array.isArray(u) ? u : [u], t, n, o, s && a !== "foreignObject", r, l, r ? r[0] : n.__k && Qo(n, 0), c), r != null)
      for (u = r.length; u--; )
        r[u] != null && wh(r[u]);
    c || ("value" in f && (u = f.value) !== void 0 && (u !== e.value || a === "progress" && !u || a === "option" && u !== d.value) && Bi(e, "value", u, d.value, !1), "checked" in f && (u = f.checked) !== void 0 && u !== e.checked && Bi(e, "checked", u, d.checked, !1));
  }
  return e;
}
function Eh(e, t, n) {
  try {
    typeof e == "function" ? e(t) : e.current = t;
  } catch (o) {
    he.__e(o, n);
  }
}
function Ah(e, t, n) {
  var o, s;
  if (he.unmount && he.unmount(e), (o = e.ref) && (o.current && o.current !== e.__e || Eh(o, null, t)), (o = e.__c) != null) {
    if (o.componentWillUnmount)
      try {
        o.componentWillUnmount();
      } catch (r) {
        he.__e(r, t);
      }
    o.base = o.__P = null, e.__c = void 0;
  }
  if (o = e.__k)
    for (s = 0; s < o.length; s++)
      o[s] && Ah(o[s], t, n || typeof e.type != "function");
  n || e.__e == null || wh(e.__e), e.__ = e.__e = e.__d = void 0;
}
function $v(e, t, n) {
  return this.constructor(e, n);
}
gh = bh.slice, he = { __e: function(e, t, n, o) {
  for (var s, r, l; t = t.__; )
    if ((s = t.__c) && !s.__)
      try {
        if ((r = s.constructor) && r.getDerivedStateFromError != null && (s.setState(r.getDerivedStateFromError(e)), l = s.__d), s.componentDidCatch != null && (s.componentDidCatch(e, o || {}), l = s.__d), l)
          return s.__E = s;
      } catch (c) {
        e = c;
      }
  throw e;
} }, vh = 0, xo.prototype.setState = function(e, t) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = Mt({}, this.state), typeof e == "function" && (e = e(Mt({}, n), this.props)), e && Mt(n, e), e != null && this.__v && (t && this._sb.push(t), d_(this));
}, xo.prototype.forceUpdate = function(e) {
  this.__v && (this.__e = !0, e && this.__h.push(e), d_(this));
}, xo.prototype.render = qc, ko = [], Fi.__r = 0;
var kv = 0;
function oi(e, t, n, o, s) {
  var r, l, c = {};
  for (l in t)
    l == "ref" ? r = t[l] : c[l] = t[l];
  var _ = { type: e, props: c, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: --kv, __source: s, __self: o };
  if (typeof e == "function" && (r = e.defaultProps))
    for (l in r)
      c[l] === void 0 && (c[l] = r[l]);
  return he.vnode && he.vnode(_), _;
}
var ai;
let xv = (ai = class extends xo {
  render() {
    const { percent: t, circleSize: n, circleBorderSize: o, circleBgColor: s, circleColor: r } = this.props, l = (n - o) / 2, c = n / 2;
    return /* @__PURE__ */ oi("svg", { width: n, height: n, class: "progress-circle", children: [
      /* @__PURE__ */ oi("circle", { cx: c, cy: c, r: l, stroke: s, "stroke-width": o }),
      /* @__PURE__ */ oi("circle", { cx: c, cy: c, r: l, stroke: r, "stroke-dasharray": Math.PI * l * 2, "stroke-dashoffset": Math.PI * l * 2 * (100 - t) / 100, "stroke-width": o }),
      /* @__PURE__ */ oi("text", { x: c, y: c + o / 4, "dominant-baseline": "middle", style: { fontSize: `${l}px` }, children: Math.round(t) })
    ] });
  }
}, R(ai, "NAME", "zui.progress-circle"), R(ai, "defaultProps", {
  circleSize: 24,
  circleBorderSize: 2,
  circleBgColor: "var(--progress-circle-bg)",
  circleColor: "var(--progress-circle-bar-color)"
}), ai);
class v_ extends Ne {
}
R(v_, "NAME", "table-sorter"), R(v_, "Component", xv);
function Sv(e) {
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
function Cv(e) {
  document.readyState !== "loading" ? e() : document.addEventListener("DOMContentLoaded", e);
}
function Ev(e, t) {
  const n = typeof e == "string" ? document.querySelector(e) : e;
  if (!n)
    return !1;
  const o = n.getBoundingClientRect(), s = window.innerHeight || document.documentElement.clientHeight, r = window.innerWidth || document.documentElement.clientWidth;
  if (t != null && t.fullyCheck)
    return o.left >= 0 && o.top >= 0 && o.left + o.width <= r && o.top + o.height <= s;
  const l = o.top <= s && o.top + o.height >= 0, c = o.left <= r && o.left + o.width >= 0;
  return l && c;
}
const pk = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  classes: B,
  domReady: Cv,
  getClassList: Tl,
  isElementVisible: Ev,
  selectText: Sv
}, Symbol.toStringTag, { value: "Module" }));
let Av = (e = 21) => crypto.getRandomValues(new Uint8Array(e)).reduce((t, n) => (n &= 63, n < 36 ? t += n.toString(36) : n < 62 ? t += (n - 26).toString(36).toUpperCase() : n > 62 ? t += "-" : t += "_", t), "");
var Sr, gt, Ye, $n, kn, gi;
const xa = class {
  /**
   * Create new store instance
   * @param name Name of store
   * @param type Store type
   */
  constructor(t, n = "local") {
    T(this, kn);
    T(this, Sr, void 0);
    T(this, gt, void 0);
    T(this, Ye, void 0);
    T(this, $n, void 0);
    H(this, Sr, n), H(this, gt, `ZUI_STORE:${t ?? Av()}`), H(this, Ye, n === "local" ? localStorage : sessionStorage);
  }
  /**
   * Get store type
   */
  get type() {
    return b(this, Sr);
  }
  /**
   * Get session type store instance
   */
  get session() {
    return this.type === "session" ? this : (b(this, $n) || H(this, $n, new xa(b(this, gt), "session")), b(this, $n));
  }
  /**
   * Get value from store
   * @param key Key to get
   * @param defaultValue default value to return if key is not found
   * @returns Value of key or defaultValue if key is not found
   */
  get(t, n) {
    const o = b(this, Ye).getItem(U(this, kn, gi).call(this, t));
    return typeof o == "string" ? JSON.parse(o) : o ?? n;
  }
  /**
   * Set key-value pair in store
   * @param key Key to set
   * @param value Value to set
   */
  set(t, n) {
    if (n == null)
      return this.remove(t);
    b(this, Ye).setItem(U(this, kn, gi).call(this, t), JSON.stringify(n));
  }
  /**
   * Remove key-value pair from store
   * @param key Key to remove
   */
  remove(t) {
    b(this, Ye).removeItem(U(this, kn, gi).call(this, t));
  }
  /**
   * Iterate all key-value pairs in store
   * @param callback Callback function to call for each key-value pair in the store
   */
  each(t) {
    for (let n = 0; n < b(this, Ye).length; n++) {
      const o = b(this, Ye).key(n);
      if (o != null && o.startsWith(b(this, gt))) {
        const s = b(this, Ye).getItem(o);
        typeof s == "string" && t(o.substring(b(this, gt).length + 1), JSON.parse(s));
      }
    }
  }
  /**
   * Get all key values in store
   * @returns All key-value pairs in the store
   */
  getAll() {
    const t = {};
    return this.each((n, o) => {
      t[n] = o;
    }), t;
  }
};
let ji = xa;
Sr = new WeakMap(), gt = new WeakMap(), Ye = new WeakMap(), $n = new WeakMap(), kn = new WeakSet(), gi = function(t) {
  return `${b(this, gt)}:${t}`;
};
const Mv = new ji("DEFAULT");
function Tv(e, t = "local") {
  return new ji(e, t);
}
Object.assign(Mv, { create: Tv });
var Mh, de, Th, So, y_, Lh = {}, Dh = [], Lv = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function Tt(e, t) {
  for (var n in t)
    e[n] = t[n];
  return e;
}
function Nh(e) {
  var t = e.parentNode;
  t && t.removeChild(e);
}
function rc(e, t, n, o, s) {
  var r = { type: e, props: t, key: n, ref: o, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: s ?? ++Th };
  return s == null && de.vnode != null && de.vnode(r), r;
}
function Xc(e) {
  return e.children;
}
function Co(e, t) {
  this.props = e, this.context = t;
}
function er(e, t) {
  if (t == null)
    return e.__ ? er(e.__, e.__.__k.indexOf(e) + 1) : null;
  for (var n; t < e.__k.length; t++)
    if ((n = e.__k[t]) != null && n.__e != null)
      return n.__e;
  return typeof e.type == "function" ? er(e) : null;
}
function Rh(e) {
  var t, n;
  if ((e = e.__) != null && e.__c != null) {
    for (e.__e = e.__c.base = null, t = 0; t < e.__k.length; t++)
      if ((n = e.__k[t]) != null && n.__e != null) {
        e.__e = e.__c.base = n.__e;
        break;
      }
    return Rh(e);
  }
}
function b_(e) {
  (!e.__d && (e.__d = !0) && So.push(e) && !Vi.__r++ || y_ !== de.debounceRendering) && ((y_ = de.debounceRendering) || setTimeout)(Vi);
}
function Vi() {
  for (var e; Vi.__r = So.length; )
    e = So.sort(function(t, n) {
      return t.__v.__b - n.__v.__b;
    }), So = [], e.some(function(t) {
      var n, o, s, r, l, c;
      t.__d && (l = (r = (n = t).__v).__e, (c = n.__P) && (o = [], (s = Tt({}, r)).__v = r.__v + 1, Wh(c, r, s, n.__n, c.ownerSVGElement !== void 0, r.__h != null ? [l] : null, o, l ?? er(r), r.__h), Nv(o, r), r.__e != l && Rh(r)));
    });
}
function Oh(e, t, n, o, s, r, l, c, _, h) {
  var i, d, f, a, u, y, p, m = o && o.__k || Dh, g = m.length;
  for (n.__k = [], i = 0; i < t.length; i++)
    if ((a = n.__k[i] = (a = t[i]) == null || typeof a == "boolean" ? null : typeof a == "string" || typeof a == "number" || typeof a == "bigint" ? rc(null, a, null, null, a) : Array.isArray(a) ? rc(Xc, { children: a }, null, null, null) : a.__b > 0 ? rc(a.type, a.props, a.key, a.ref ? a.ref : null, a.__v) : a) != null) {
      if (a.__ = n, a.__b = n.__b + 1, (f = m[i]) === null || f && a.key == f.key && a.type === f.type)
        m[i] = void 0;
      else
        for (d = 0; d < g; d++) {
          if ((f = m[d]) && a.key == f.key && a.type === f.type) {
            m[d] = void 0;
            break;
          }
          f = null;
        }
      Wh(e, a, f = f || Lh, s, r, l, c, _, h), u = a.__e, (d = a.ref) && f.ref != d && (p || (p = []), f.ref && p.push(f.ref, null, a), p.push(d, a.__c || u, a)), u != null ? (y == null && (y = u), typeof a.type == "function" && a.__k === f.__k ? a.__d = _ = Ph(a, _, e) : _ = Hh(e, a, f, m, u, _), typeof n.type == "function" && (n.__d = _)) : _ && f.__e == _ && _.parentNode != e && (_ = er(f));
    }
  for (n.__e = y, i = g; i--; )
    m[i] != null && Uh(m[i], m[i]);
  if (p)
    for (i = 0; i < p.length; i++)
      Ih(p[i], p[++i], p[++i]);
}
function Ph(e, t, n) {
  for (var o, s = e.__k, r = 0; s && r < s.length; r++)
    (o = s[r]) && (o.__ = e, t = typeof o.type == "function" ? Ph(o, t, n) : Hh(n, o, o, s, o.__e, t));
  return t;
}
function Hh(e, t, n, o, s, r) {
  var l, c, _;
  if (t.__d !== void 0)
    l = t.__d, t.__d = void 0;
  else if (n == null || s != r || s.parentNode == null)
    e:
      if (r == null || r.parentNode !== e)
        e.appendChild(s), l = null;
      else {
        for (c = r, _ = 0; (c = c.nextSibling) && _ < o.length; _ += 2)
          if (c == s)
            break e;
        e.insertBefore(s, r), l = r;
      }
  return l !== void 0 ? l : s.nextSibling;
}
function Dv(e, t, n, o, s) {
  var r;
  for (r in n)
    r === "children" || r === "key" || r in t || zi(e, r, null, n[r], o);
  for (r in t)
    s && typeof t[r] != "function" || r === "children" || r === "key" || r === "value" || r === "checked" || n[r] === t[r] || zi(e, r, t[r], n[r], o);
}
function w_(e, t, n) {
  t[0] === "-" ? e.setProperty(t, n) : e[t] = n == null ? "" : typeof n != "number" || Lv.test(t) ? n : n + "px";
}
function zi(e, t, n, o, s) {
  var r;
  e:
    if (t === "style")
      if (typeof n == "string")
        e.style.cssText = n;
      else {
        if (typeof o == "string" && (e.style.cssText = o = ""), o)
          for (t in o)
            n && t in n || w_(e.style, t, "");
        if (n)
          for (t in n)
            o && n[t] === o[t] || w_(e.style, t, n[t]);
      }
    else if (t[0] === "o" && t[1] === "n")
      r = t !== (t = t.replace(/Capture$/, "")), t = t.toLowerCase() in e ? t.toLowerCase().slice(2) : t.slice(2), e.l || (e.l = {}), e.l[t + r] = n, n ? o || e.addEventListener(t, r ? k_ : $_, r) : e.removeEventListener(t, r ? k_ : $_, r);
    else if (t !== "dangerouslySetInnerHTML") {
      if (s)
        t = t.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
      else if (t !== "href" && t !== "list" && t !== "form" && t !== "tabIndex" && t !== "download" && t in e)
        try {
          e[t] = n ?? "";
          break e;
        } catch {
        }
      typeof n == "function" || (n == null || n === !1 && t.indexOf("-") == -1 ? e.removeAttribute(t) : e.setAttribute(t, n));
    }
}
function $_(e) {
  this.l[e.type + !1](de.event ? de.event(e) : e);
}
function k_(e) {
  this.l[e.type + !0](de.event ? de.event(e) : e);
}
function Wh(e, t, n, o, s, r, l, c, _) {
  var h, i, d, f, a, u, y, p, m, g, $, w, S, C, A, v = t.type;
  if (t.constructor !== void 0)
    return null;
  n.__h != null && (_ = n.__h, c = t.__e = n.__e, t.__h = null, r = [c]), (h = de.__b) && h(t);
  try {
    e:
      if (typeof v == "function") {
        if (p = t.props, m = (h = v.contextType) && o[h.__c], g = h ? m ? m.props.value : h.__ : o, n.__c ? y = (i = t.__c = n.__c).__ = i.__E : ("prototype" in v && v.prototype.render ? t.__c = i = new v(p, g) : (t.__c = i = new Co(p, g), i.constructor = v, i.render = Ov), m && m.sub(i), i.props = p, i.state || (i.state = {}), i.context = g, i.__n = o, d = i.__d = !0, i.__h = [], i._sb = []), i.__s == null && (i.__s = i.state), v.getDerivedStateFromProps != null && (i.__s == i.state && (i.__s = Tt({}, i.__s)), Tt(i.__s, v.getDerivedStateFromProps(p, i.__s))), f = i.props, a = i.state, d)
          v.getDerivedStateFromProps == null && i.componentWillMount != null && i.componentWillMount(), i.componentDidMount != null && i.__h.push(i.componentDidMount);
        else {
          if (v.getDerivedStateFromProps == null && p !== f && i.componentWillReceiveProps != null && i.componentWillReceiveProps(p, g), !i.__e && i.shouldComponentUpdate != null && i.shouldComponentUpdate(p, i.__s, g) === !1 || t.__v === n.__v) {
            for (i.props = p, i.state = i.__s, t.__v !== n.__v && (i.__d = !1), i.__v = t, t.__e = n.__e, t.__k = n.__k, t.__k.forEach(function(k) {
              k && (k.__ = t);
            }), $ = 0; $ < i._sb.length; $++)
              i.__h.push(i._sb[$]);
            i._sb = [], i.__h.length && l.push(i);
            break e;
          }
          i.componentWillUpdate != null && i.componentWillUpdate(p, i.__s, g), i.componentDidUpdate != null && i.__h.push(function() {
            i.componentDidUpdate(f, a, u);
          });
        }
        if (i.context = g, i.props = p, i.__v = t, i.__P = e, w = de.__r, S = 0, "prototype" in v && v.prototype.render) {
          for (i.state = i.__s, i.__d = !1, w && w(t), h = i.render(i.props, i.state, i.context), C = 0; C < i._sb.length; C++)
            i.__h.push(i._sb[C]);
          i._sb = [];
        } else
          do
            i.__d = !1, w && w(t), h = i.render(i.props, i.state, i.context), i.state = i.__s;
          while (i.__d && ++S < 25);
        i.state = i.__s, i.getChildContext != null && (o = Tt(Tt({}, o), i.getChildContext())), d || i.getSnapshotBeforeUpdate == null || (u = i.getSnapshotBeforeUpdate(f, a)), A = h != null && h.type === Xc && h.key == null ? h.props.children : h, Oh(e, Array.isArray(A) ? A : [A], t, n, o, s, r, l, c, _), i.base = t.__e, t.__h = null, i.__h.length && l.push(i), y && (i.__E = i.__ = null), i.__e = !1;
      } else
        r == null && t.__v === n.__v ? (t.__k = n.__k, t.__e = n.__e) : t.__e = Rv(n.__e, t, n, o, s, r, l, _);
    (h = de.diffed) && h(t);
  } catch (k) {
    t.__v = null, (_ || r != null) && (t.__e = c, t.__h = !!_, r[r.indexOf(c)] = null), de.__e(k, t, n);
  }
}
function Nv(e, t) {
  de.__c && de.__c(t, e), e.some(function(n) {
    try {
      e = n.__h, n.__h = [], e.some(function(o) {
        o.call(n);
      });
    } catch (o) {
      de.__e(o, n.__v);
    }
  });
}
function Rv(e, t, n, o, s, r, l, c) {
  var _, h, i, d = n.props, f = t.props, a = t.type, u = 0;
  if (a === "svg" && (s = !0), r != null) {
    for (; u < r.length; u++)
      if ((_ = r[u]) && "setAttribute" in _ == !!a && (a ? _.localName === a : _.nodeType === 3)) {
        e = _, r[u] = null;
        break;
      }
  }
  if (e == null) {
    if (a === null)
      return document.createTextNode(f);
    e = s ? document.createElementNS("http://www.w3.org/2000/svg", a) : document.createElement(a, f.is && f), r = null, c = !1;
  }
  if (a === null)
    d === f || c && e.data === f || (e.data = f);
  else {
    if (r = r && Mh.call(e.childNodes), h = (d = n.props || Lh).dangerouslySetInnerHTML, i = f.dangerouslySetInnerHTML, !c) {
      if (r != null)
        for (d = {}, u = 0; u < e.attributes.length; u++)
          d[e.attributes[u].name] = e.attributes[u].value;
      (i || h) && (i && (h && i.__html == h.__html || i.__html === e.innerHTML) || (e.innerHTML = i && i.__html || ""));
    }
    if (Dv(e, f, d, s, c), i)
      t.__k = [];
    else if (u = t.props.children, Oh(e, Array.isArray(u) ? u : [u], t, n, o, s && a !== "foreignObject", r, l, r ? r[0] : n.__k && er(n, 0), c), r != null)
      for (u = r.length; u--; )
        r[u] != null && Nh(r[u]);
    c || ("value" in f && (u = f.value) !== void 0 && (u !== e.value || a === "progress" && !u || a === "option" && u !== d.value) && zi(e, "value", u, d.value, !1), "checked" in f && (u = f.checked) !== void 0 && u !== e.checked && zi(e, "checked", u, d.checked, !1));
  }
  return e;
}
function Ih(e, t, n) {
  try {
    typeof e == "function" ? e(t) : e.current = t;
  } catch (o) {
    de.__e(o, n);
  }
}
function Uh(e, t, n) {
  var o, s;
  if (de.unmount && de.unmount(e), (o = e.ref) && (o.current && o.current !== e.__e || Ih(o, null, t)), (o = e.__c) != null) {
    if (o.componentWillUnmount)
      try {
        o.componentWillUnmount();
      } catch (r) {
        de.__e(r, t);
      }
    o.base = o.__P = null, e.__c = void 0;
  }
  if (o = e.__k)
    for (s = 0; s < o.length; s++)
      o[s] && Uh(o[s], t, n || typeof e.type != "function");
  n || e.__e == null || Nh(e.__e), e.__ = e.__e = e.__d = void 0;
}
function Ov(e, t, n) {
  return this.constructor(e, n);
}
Mh = Dh.slice, de = { __e: function(e, t, n, o) {
  for (var s, r, l; t = t.__; )
    if ((s = t.__c) && !s.__)
      try {
        if ((r = s.constructor) && r.getDerivedStateFromError != null && (s.setState(r.getDerivedStateFromError(e)), l = s.__d), s.componentDidCatch != null && (s.componentDidCatch(e, o || {}), l = s.__d), l)
          return s.__E = s;
      } catch (c) {
        e = c;
      }
  throw e;
} }, Th = 0, Co.prototype.setState = function(e, t) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = Tt({}, this.state), typeof e == "function" && (e = e(Tt({}, n), this.props)), e && Tt(n, e), e != null && this.__v && (t && this._sb.push(t), b_(this));
}, Co.prototype.forceUpdate = function(e) {
  this.__v && (this.__e = !0, e && this.__h.push(e), b_(this));
}, Co.prototype.render = Xc, So = [], Vi.__r = 0;
var Pv = 0;
function ic(e, t, n, o, s) {
  var r, l, c = {};
  for (l in t)
    l == "ref" ? r = t[l] : c[l] = t[l];
  var _ = { type: e, props: c, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: --Pv, __source: s, __self: o };
  if (typeof e == "function" && (r = e.defaultProps))
    for (l in r)
      c[l] === void 0 && (c[l] = r[l]);
  return de.vnode && de.vnode(_), _;
}
function Hv(e) {
  if (e.indexOf("#") === 0 && (e = e.slice(1)), e.length === 3 && (e = e[0] + e[0] + e[1] + e[1] + e[2] + e[2]), e.length !== 6)
    throw new Error(`Invalid HEX color "${e}".`);
  return [
    parseInt(e.slice(0, 2), 16),
    // r
    parseInt(e.slice(2, 4), 16),
    // g
    parseInt(e.slice(4, 6), 16)
    // b
  ];
}
function Wv(e) {
  const [t, n, o] = typeof e == "string" ? Hv(e) : e;
  return t * 0.299 + n * 0.587 + o * 0.114 > 186;
}
function x_(e, t) {
  return Wv(e) ? (t == null ? void 0 : t.dark) ?? "#333333" : (t == null ? void 0 : t.light) ?? "#ffffff";
}
function S_(e, t = 255) {
  return Math.min(Math.max(e, 0), t);
}
function Iv(e, t, n) {
  e = e % 360 / 360, t = S_(t), n = S_(n);
  const o = n <= 0.5 ? n * (t + 1) : n + t - n * t, s = n * 2 - o, r = (l) => (l = l < 0 ? l + 1 : l > 1 ? l - 1 : l, l * 6 < 1 ? s + (o - s) * l * 6 : l * 2 < 1 ? o : l * 3 < 2 ? s + (o - s) * (2 / 3 - l) * 6 : s);
  return [
    r(e + 1 / 3) * 255,
    r(e) * 255,
    r(e - 1 / 3) * 255
  ];
}
function Uv(e) {
  let t = 0;
  if (typeof e != "string" && (e = String(e)), e && e.length)
    for (let n = 0; n < e.length; ++n)
      t += (n + 1) * e.charCodeAt(n);
  return t;
}
function Fv(e, t) {
  return /^[\u4e00-\u9fa5\s]+$/.test(e) ? e = e.length <= t ? e : e.substring(e.length - t) : /^[A-Za-z\d\s]+$/.test(e) ? e = e[0].toUpperCase() : e = e.length <= t ? e : e.substring(0, t), e;
}
let Bv = class extends Co {
  render() {
    const {
      className: t,
      style: n,
      size: o = "",
      circle: s,
      rounded: r,
      background: l,
      foreColor: c,
      text: _,
      code: h,
      maxTextLength: i = 2,
      src: d,
      hueDistance: f = 43,
      saturation: a = 0.4,
      lightness: u = 0.6,
      children: y,
      ...p
    } = this.props, m = ["avatar", t], g = { ...n, background: l, color: c };
    let $ = 32;
    o && (typeof o == "number" ? (g.width = `${o}px`, g.height = `${o}px`, g.fontSize = `${Math.max(12, Math.round(o / 2))}px`, $ = o) : (m.push(`size-${o}`), $ = { xs: 20, sm: 24, lg: 48, xl: 80 }[o])), s ? m.push("circle") : r && (typeof r == "number" ? g.borderRadius = `${r}px` : m.push(`rounded-${r}`));
    let w;
    if (d)
      m.push("has-img"), w = /* @__PURE__ */ ic("img", { className: "avatar-img", src: d, alt: _ });
    else if (_ != null && _.length) {
      const S = Fv(_, i);
      if (m.push("has-text", `has-text-${S.length}`), l)
        !c && l && (g.color = x_(l));
      else {
        const A = h ?? _, v = (typeof A == "number" ? A : Uv(A)) * f % 360;
        if (g.background = `hsl(${v},${a * 100}%,${u * 100}%)`, !c) {
          const k = Iv(v, a, u);
          g.color = x_(k);
        }
      }
      let C;
      $ && $ < 14 * S.length && (C = { transform: `scale(${$ / (14 * S.length)})`, whiteSpace: "nowrap" }), w = /* @__PURE__ */ ic("div", { "data-actualSize": $, className: "avatar-text", style: C, children: S });
    }
    return /* @__PURE__ */ ic(
      "div",
      {
        className: B(m),
        style: g,
        ...p,
        children: [
          w,
          y
        ]
      }
    );
  }
};
class C_ extends Ne {
}
R(C_, "NAME", "avatar"), R(C_, "Component", Bv);
class E_ extends Ne {
}
R(E_, "NAME", "btngroup"), R(E_, "Component", Gc);
var Nl, se, Fh, Eo, A_, Yi = {}, Bh = [], jv = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function Lt(e, t) {
  for (var n in t)
    e[n] = t[n];
  return e;
}
function jh(e) {
  var t = e.parentNode;
  t && t.removeChild(e);
}
function tr(e, t, n) {
  var o, s, r, l = {};
  for (r in t)
    r == "key" ? o = t[r] : r == "ref" ? s = t[r] : l[r] = t[r];
  if (arguments.length > 2 && (l.children = arguments.length > 3 ? Nl.call(arguments, 2) : n), typeof e == "function" && e.defaultProps != null)
    for (r in e.defaultProps)
      l[r] === void 0 && (l[r] = e.defaultProps[r]);
  return vi(e, l, o, s, null);
}
function vi(e, t, n, o, s) {
  var r = { type: e, props: t, key: n, ref: o, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: s ?? ++Fh };
  return s == null && se.vnode != null && se.vnode(r), r;
}
function Vv() {
  return { current: null };
}
function Rl(e) {
  return e.children;
}
function Ao(e, t) {
  this.props = e, this.context = t;
}
function nr(e, t) {
  if (t == null)
    return e.__ ? nr(e.__, e.__.__k.indexOf(e) + 1) : null;
  for (var n; t < e.__k.length; t++)
    if ((n = e.__k[t]) != null && n.__e != null)
      return n.__e;
  return typeof e.type == "function" ? nr(e) : null;
}
function Vh(e) {
  var t, n;
  if ((e = e.__) != null && e.__c != null) {
    for (e.__e = e.__c.base = null, t = 0; t < e.__k.length; t++)
      if ((n = e.__k[t]) != null && n.__e != null) {
        e.__e = e.__c.base = n.__e;
        break;
      }
    return Vh(e);
  }
}
function M_(e) {
  (!e.__d && (e.__d = !0) && Eo.push(e) && !Gi.__r++ || A_ !== se.debounceRendering) && ((A_ = se.debounceRendering) || setTimeout)(Gi);
}
function Gi() {
  for (var e; Gi.__r = Eo.length; )
    e = Eo.sort(function(t, n) {
      return t.__v.__b - n.__v.__b;
    }), Eo = [], e.some(function(t) {
      var n, o, s, r, l, c;
      t.__d && (l = (r = (n = t).__v).__e, (c = n.__P) && (o = [], (s = Lt({}, r)).__v = r.__v + 1, Kc(c, r, s, n.__n, c.ownerSVGElement !== void 0, r.__h != null ? [l] : null, o, l ?? nr(r), r.__h), qh(o, r), r.__e != l && Vh(r)));
    });
}
function zh(e, t, n, o, s, r, l, c, _, h) {
  var i, d, f, a, u, y, p, m = o && o.__k || Bh, g = m.length;
  for (n.__k = [], i = 0; i < t.length; i++)
    if ((a = n.__k[i] = (a = t[i]) == null || typeof a == "boolean" ? null : typeof a == "string" || typeof a == "number" || typeof a == "bigint" ? vi(null, a, null, null, a) : Array.isArray(a) ? vi(Rl, { children: a }, null, null, null) : a.__b > 0 ? vi(a.type, a.props, a.key, a.ref ? a.ref : null, a.__v) : a) != null) {
      if (a.__ = n, a.__b = n.__b + 1, (f = m[i]) === null || f && a.key == f.key && a.type === f.type)
        m[i] = void 0;
      else
        for (d = 0; d < g; d++) {
          if ((f = m[d]) && a.key == f.key && a.type === f.type) {
            m[d] = void 0;
            break;
          }
          f = null;
        }
      Kc(e, a, f = f || Yi, s, r, l, c, _, h), u = a.__e, (d = a.ref) && f.ref != d && (p || (p = []), f.ref && p.push(f.ref, null, a), p.push(d, a.__c || u, a)), u != null ? (y == null && (y = u), typeof a.type == "function" && a.__k === f.__k ? a.__d = _ = Yh(a, _, e) : _ = Gh(e, a, f, m, u, _), typeof n.type == "function" && (n.__d = _)) : _ && f.__e == _ && _.parentNode != e && (_ = nr(f));
    }
  for (n.__e = y, i = g; i--; )
    m[i] != null && Kh(m[i], m[i]);
  if (p)
    for (i = 0; i < p.length; i++)
      Xh(p[i], p[++i], p[++i]);
}
function Yh(e, t, n) {
  for (var o, s = e.__k, r = 0; s && r < s.length; r++)
    (o = s[r]) && (o.__ = e, t = typeof o.type == "function" ? Yh(o, t, n) : Gh(n, o, o, s, o.__e, t));
  return t;
}
function Gh(e, t, n, o, s, r) {
  var l, c, _;
  if (t.__d !== void 0)
    l = t.__d, t.__d = void 0;
  else if (n == null || s != r || s.parentNode == null)
    e:
      if (r == null || r.parentNode !== e)
        e.appendChild(s), l = null;
      else {
        for (c = r, _ = 0; (c = c.nextSibling) && _ < o.length; _ += 2)
          if (c == s)
            break e;
        e.insertBefore(s, r), l = r;
      }
  return l !== void 0 ? l : s.nextSibling;
}
function zv(e, t, n, o, s) {
  var r;
  for (r in n)
    r === "children" || r === "key" || r in t || qi(e, r, null, n[r], o);
  for (r in t)
    s && typeof t[r] != "function" || r === "children" || r === "key" || r === "value" || r === "checked" || n[r] === t[r] || qi(e, r, t[r], n[r], o);
}
function T_(e, t, n) {
  t[0] === "-" ? e.setProperty(t, n) : e[t] = n == null ? "" : typeof n != "number" || jv.test(t) ? n : n + "px";
}
function qi(e, t, n, o, s) {
  var r;
  e:
    if (t === "style")
      if (typeof n == "string")
        e.style.cssText = n;
      else {
        if (typeof o == "string" && (e.style.cssText = o = ""), o)
          for (t in o)
            n && t in n || T_(e.style, t, "");
        if (n)
          for (t in n)
            o && n[t] === o[t] || T_(e.style, t, n[t]);
      }
    else if (t[0] === "o" && t[1] === "n")
      r = t !== (t = t.replace(/Capture$/, "")), t = t.toLowerCase() in e ? t.toLowerCase().slice(2) : t.slice(2), e.l || (e.l = {}), e.l[t + r] = n, n ? o || e.addEventListener(t, r ? D_ : L_, r) : e.removeEventListener(t, r ? D_ : L_, r);
    else if (t !== "dangerouslySetInnerHTML") {
      if (s)
        t = t.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
      else if (t !== "href" && t !== "list" && t !== "form" && t !== "tabIndex" && t !== "download" && t in e)
        try {
          e[t] = n ?? "";
          break e;
        } catch {
        }
      typeof n == "function" || (n == null || n === !1 && t.indexOf("-") == -1 ? e.removeAttribute(t) : e.setAttribute(t, n));
    }
}
function L_(e) {
  this.l[e.type + !1](se.event ? se.event(e) : e);
}
function D_(e) {
  this.l[e.type + !0](se.event ? se.event(e) : e);
}
function Kc(e, t, n, o, s, r, l, c, _) {
  var h, i, d, f, a, u, y, p, m, g, $, w, S, C, A, v = t.type;
  if (t.constructor !== void 0)
    return null;
  n.__h != null && (_ = n.__h, c = t.__e = n.__e, t.__h = null, r = [c]), (h = se.__b) && h(t);
  try {
    e:
      if (typeof v == "function") {
        if (p = t.props, m = (h = v.contextType) && o[h.__c], g = h ? m ? m.props.value : h.__ : o, n.__c ? y = (i = t.__c = n.__c).__ = i.__E : ("prototype" in v && v.prototype.render ? t.__c = i = new v(p, g) : (t.__c = i = new Ao(p, g), i.constructor = v, i.render = Gv), m && m.sub(i), i.props = p, i.state || (i.state = {}), i.context = g, i.__n = o, d = i.__d = !0, i.__h = [], i._sb = []), i.__s == null && (i.__s = i.state), v.getDerivedStateFromProps != null && (i.__s == i.state && (i.__s = Lt({}, i.__s)), Lt(i.__s, v.getDerivedStateFromProps(p, i.__s))), f = i.props, a = i.state, d)
          v.getDerivedStateFromProps == null && i.componentWillMount != null && i.componentWillMount(), i.componentDidMount != null && i.__h.push(i.componentDidMount);
        else {
          if (v.getDerivedStateFromProps == null && p !== f && i.componentWillReceiveProps != null && i.componentWillReceiveProps(p, g), !i.__e && i.shouldComponentUpdate != null && i.shouldComponentUpdate(p, i.__s, g) === !1 || t.__v === n.__v) {
            for (i.props = p, i.state = i.__s, t.__v !== n.__v && (i.__d = !1), i.__v = t, t.__e = n.__e, t.__k = n.__k, t.__k.forEach(function(k) {
              k && (k.__ = t);
            }), $ = 0; $ < i._sb.length; $++)
              i.__h.push(i._sb[$]);
            i._sb = [], i.__h.length && l.push(i);
            break e;
          }
          i.componentWillUpdate != null && i.componentWillUpdate(p, i.__s, g), i.componentDidUpdate != null && i.__h.push(function() {
            i.componentDidUpdate(f, a, u);
          });
        }
        if (i.context = g, i.props = p, i.__v = t, i.__P = e, w = se.__r, S = 0, "prototype" in v && v.prototype.render) {
          for (i.state = i.__s, i.__d = !1, w && w(t), h = i.render(i.props, i.state, i.context), C = 0; C < i._sb.length; C++)
            i.__h.push(i._sb[C]);
          i._sb = [];
        } else
          do
            i.__d = !1, w && w(t), h = i.render(i.props, i.state, i.context), i.state = i.__s;
          while (i.__d && ++S < 25);
        i.state = i.__s, i.getChildContext != null && (o = Lt(Lt({}, o), i.getChildContext())), d || i.getSnapshotBeforeUpdate == null || (u = i.getSnapshotBeforeUpdate(f, a)), A = h != null && h.type === Rl && h.key == null ? h.props.children : h, zh(e, Array.isArray(A) ? A : [A], t, n, o, s, r, l, c, _), i.base = t.__e, t.__h = null, i.__h.length && l.push(i), y && (i.__E = i.__ = null), i.__e = !1;
      } else
        r == null && t.__v === n.__v ? (t.__k = n.__k, t.__e = n.__e) : t.__e = Yv(n.__e, t, n, o, s, r, l, _);
    (h = se.diffed) && h(t);
  } catch (k) {
    t.__v = null, (_ || r != null) && (t.__e = c, t.__h = !!_, r[r.indexOf(c)] = null), se.__e(k, t, n);
  }
}
function qh(e, t) {
  se.__c && se.__c(t, e), e.some(function(n) {
    try {
      e = n.__h, n.__h = [], e.some(function(o) {
        o.call(n);
      });
    } catch (o) {
      se.__e(o, n.__v);
    }
  });
}
function Yv(e, t, n, o, s, r, l, c) {
  var _, h, i, d = n.props, f = t.props, a = t.type, u = 0;
  if (a === "svg" && (s = !0), r != null) {
    for (; u < r.length; u++)
      if ((_ = r[u]) && "setAttribute" in _ == !!a && (a ? _.localName === a : _.nodeType === 3)) {
        e = _, r[u] = null;
        break;
      }
  }
  if (e == null) {
    if (a === null)
      return document.createTextNode(f);
    e = s ? document.createElementNS("http://www.w3.org/2000/svg", a) : document.createElement(a, f.is && f), r = null, c = !1;
  }
  if (a === null)
    d === f || c && e.data === f || (e.data = f);
  else {
    if (r = r && Nl.call(e.childNodes), h = (d = n.props || Yi).dangerouslySetInnerHTML, i = f.dangerouslySetInnerHTML, !c) {
      if (r != null)
        for (d = {}, u = 0; u < e.attributes.length; u++)
          d[e.attributes[u].name] = e.attributes[u].value;
      (i || h) && (i && (h && i.__html == h.__html || i.__html === e.innerHTML) || (e.innerHTML = i && i.__html || ""));
    }
    if (zv(e, f, d, s, c), i)
      t.__k = [];
    else if (u = t.props.children, zh(e, Array.isArray(u) ? u : [u], t, n, o, s && a !== "foreignObject", r, l, r ? r[0] : n.__k && nr(n, 0), c), r != null)
      for (u = r.length; u--; )
        r[u] != null && jh(r[u]);
    c || ("value" in f && (u = f.value) !== void 0 && (u !== e.value || a === "progress" && !u || a === "option" && u !== d.value) && qi(e, "value", u, d.value, !1), "checked" in f && (u = f.checked) !== void 0 && u !== e.checked && qi(e, "checked", u, d.checked, !1));
  }
  return e;
}
function Xh(e, t, n) {
  try {
    typeof e == "function" ? e(t) : e.current = t;
  } catch (o) {
    se.__e(o, n);
  }
}
function Kh(e, t, n) {
  var o, s;
  if (se.unmount && se.unmount(e), (o = e.ref) && (o.current && o.current !== e.__e || Xh(o, null, t)), (o = e.__c) != null) {
    if (o.componentWillUnmount)
      try {
        o.componentWillUnmount();
      } catch (r) {
        se.__e(r, t);
      }
    o.base = o.__P = null, e.__c = void 0;
  }
  if (o = e.__k)
    for (s = 0; s < o.length; s++)
      o[s] && Kh(o[s], t, n || typeof e.type != "function");
  n || e.__e == null || jh(e.__e), e.__ = e.__e = e.__d = void 0;
}
function Gv(e, t, n) {
  return this.constructor(e, n);
}
function qv(e, t, n) {
  var o, s, r;
  se.__ && se.__(e, t), s = (o = typeof n == "function") ? null : n && n.__k || t.__k, r = [], Kc(t, e = (!o && n || t).__k = tr(Rl, null, [e]), s || Yi, Yi, t.ownerSVGElement !== void 0, !o && n ? [n] : s ? null : t.firstChild ? Nl.call(t.childNodes) : null, r, !o && n ? n : s ? s.__e : t.firstChild, o), qh(r, e);
}
Nl = Bh.slice, se = { __e: function(e, t, n, o) {
  for (var s, r, l; t = t.__; )
    if ((s = t.__c) && !s.__)
      try {
        if ((r = s.constructor) && r.getDerivedStateFromError != null && (s.setState(r.getDerivedStateFromError(e)), l = s.__d), s.componentDidCatch != null && (s.componentDidCatch(e, o || {}), l = s.__d), l)
          return s.__E = s;
      } catch (c) {
        e = c;
      }
  throw e;
} }, Fh = 0, Ao.prototype.setState = function(e, t) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = Lt({}, this.state), typeof e == "function" && (e = e(Lt({}, n), this.props)), e && Lt(n, e), e != null && this.__v && (t && this._sb.push(t), M_(this));
}, Ao.prototype.forceUpdate = function(e) {
  this.__v && (this.__e = !0, e && this.__h.push(e), M_(this));
}, Ao.prototype.render = Rl, Eo = [], Gi.__r = 0;
var Xv = 0;
function K(e, t, n, o, s) {
  var r, l, c = {};
  for (l in t)
    l == "ref" ? r = t[l] : c[l] = t[l];
  var _ = { type: e, props: c, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: --Xv, __source: s, __self: o };
  if (typeof e == "function" && (r = e.defaultProps))
    for (l in r)
      c[l] === void 0 && (c[l] = r[l]);
  return se.vnode && se.vnode(_), _;
}
var Zh = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, J = {}, Kv = {
  get exports() {
    return J;
  },
  set exports(e) {
    J = e;
  }
};
(function(e, t) {
  (function(n, o) {
    e.exports = o();
  })(Zh, function() {
    var n = 1e3, o = 6e4, s = 36e5, r = "millisecond", l = "second", c = "minute", _ = "hour", h = "day", i = "week", d = "month", f = "quarter", a = "year", u = "date", y = "Invalid Date", p = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, m = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, g = { name: "en", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), ordinal: function(D) {
      var E = ["th", "st", "nd", "rd"], x = D % 100;
      return "[" + D + (E[(x - 20) % 10] || E[x] || E[0]) + "]";
    } }, $ = function(D, E, x) {
      var N = String(D);
      return !N || N.length >= E ? D : "" + Array(E + 1 - N.length).join(x) + D;
    }, w = { s: $, z: function(D) {
      var E = -D.utcOffset(), x = Math.abs(E), N = Math.floor(x / 60), M = x % 60;
      return (E <= 0 ? "+" : "-") + $(N, 2, "0") + ":" + $(M, 2, "0");
    }, m: function D(E, x) {
      if (E.date() < x.date())
        return -D(x, E);
      var N = 12 * (x.year() - E.year()) + (x.month() - E.month()), M = E.clone().add(N, d), P = x - M < 0, O = E.clone().add(N + (P ? -1 : 1), d);
      return +(-(N + (x - M) / (P ? M - O : O - M)) || 0);
    }, a: function(D) {
      return D < 0 ? Math.ceil(D) || 0 : Math.floor(D);
    }, p: function(D) {
      return { M: d, y: a, w: i, d: h, D: u, h: _, m: c, s: l, ms: r, Q: f }[D] || String(D || "").toLowerCase().replace(/s$/, "");
    }, u: function(D) {
      return D === void 0;
    } }, S = "en", C = {};
    C[S] = g;
    var A = function(D) {
      return D instanceof j;
    }, v = function D(E, x, N) {
      var M;
      if (!E)
        return S;
      if (typeof E == "string") {
        var P = E.toLowerCase();
        C[P] && (M = P), x && (C[P] = x, M = P);
        var O = E.split("-");
        if (!M && O.length > 1)
          return D(O[0]);
      } else {
        var W = E.name;
        C[W] = E, M = W;
      }
      return !N && M && (S = M), M || !N && S;
    }, k = function(D, E) {
      if (A(D))
        return D.clone();
      var x = typeof E == "object" ? E : {};
      return x.date = D, x.args = arguments, new j(x);
    }, L = w;
    L.l = v, L.i = A, L.w = function(D, E) {
      return k(D, { locale: E.$L, utc: E.$u, x: E.$x, $offset: E.$offset });
    };
    var j = function() {
      function D(x) {
        this.$L = v(x.locale, null, !0), this.parse(x);
      }
      var E = D.prototype;
      return E.parse = function(x) {
        this.$d = function(N) {
          var M = N.date, P = N.utc;
          if (M === null)
            return new Date(NaN);
          if (L.u(M))
            return new Date();
          if (M instanceof Date)
            return new Date(M);
          if (typeof M == "string" && !/Z$/i.test(M)) {
            var O = M.match(p);
            if (O) {
              var W = O[2] - 1 || 0, z = (O[7] || "0").substring(0, 3);
              return P ? new Date(Date.UTC(O[1], W, O[3] || 1, O[4] || 0, O[5] || 0, O[6] || 0, z)) : new Date(O[1], W, O[3] || 1, O[4] || 0, O[5] || 0, O[6] || 0, z);
            }
          }
          return new Date(M);
        }(x), this.$x = x.x || {}, this.init();
      }, E.init = function() {
        var x = this.$d;
        this.$y = x.getFullYear(), this.$M = x.getMonth(), this.$D = x.getDate(), this.$W = x.getDay(), this.$H = x.getHours(), this.$m = x.getMinutes(), this.$s = x.getSeconds(), this.$ms = x.getMilliseconds();
      }, E.$utils = function() {
        return L;
      }, E.isValid = function() {
        return this.$d.toString() !== y;
      }, E.isSame = function(x, N) {
        var M = k(x);
        return this.startOf(N) <= M && M <= this.endOf(N);
      }, E.isAfter = function(x, N) {
        return k(x) < this.startOf(N);
      }, E.isBefore = function(x, N) {
        return this.endOf(N) < k(x);
      }, E.$g = function(x, N, M) {
        return L.u(x) ? this[N] : this.set(M, x);
      }, E.unix = function() {
        return Math.floor(this.valueOf() / 1e3);
      }, E.valueOf = function() {
        return this.$d.getTime();
      }, E.startOf = function(x, N) {
        var M = this, P = !!L.u(N) || N, O = L.p(x), W = function(Z, G) {
          var ne = L.w(M.$u ? Date.UTC(M.$y, G, Z) : new Date(M.$y, G, Z), M);
          return P ? ne : ne.endOf(h);
        }, z = function(Z, G) {
          return L.w(M.toDate()[Z].apply(M.toDate("s"), (P ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(G)), M);
        }, V = this.$W, Y = this.$M, Q = this.$D, I = "set" + (this.$u ? "UTC" : "");
        switch (O) {
          case a:
            return P ? W(1, 0) : W(31, 11);
          case d:
            return P ? W(1, Y) : W(0, Y + 1);
          case i:
            var X = this.$locale().weekStart || 0, te = (V < X ? V + 7 : V) - X;
            return W(P ? Q - te : Q + (6 - te), Y);
          case h:
          case u:
            return z(I + "Hours", 0);
          case _:
            return z(I + "Minutes", 1);
          case c:
            return z(I + "Seconds", 2);
          case l:
            return z(I + "Milliseconds", 3);
          default:
            return this.clone();
        }
      }, E.endOf = function(x) {
        return this.startOf(x, !1);
      }, E.$set = function(x, N) {
        var M, P = L.p(x), O = "set" + (this.$u ? "UTC" : ""), W = (M = {}, M[h] = O + "Date", M[u] = O + "Date", M[d] = O + "Month", M[a] = O + "FullYear", M[_] = O + "Hours", M[c] = O + "Minutes", M[l] = O + "Seconds", M[r] = O + "Milliseconds", M)[P], z = P === h ? this.$D + (N - this.$W) : N;
        if (P === d || P === a) {
          var V = this.clone().set(u, 1);
          V.$d[W](z), V.init(), this.$d = V.set(u, Math.min(this.$D, V.daysInMonth())).$d;
        } else
          W && this.$d[W](z);
        return this.init(), this;
      }, E.set = function(x, N) {
        return this.clone().$set(x, N);
      }, E.get = function(x) {
        return this[L.p(x)]();
      }, E.add = function(x, N) {
        var M, P = this;
        x = Number(x);
        var O = L.p(N), W = function(Y) {
          var Q = k(P);
          return L.w(Q.date(Q.date() + Math.round(Y * x)), P);
        };
        if (O === d)
          return this.set(d, this.$M + x);
        if (O === a)
          return this.set(a, this.$y + x);
        if (O === h)
          return W(1);
        if (O === i)
          return W(7);
        var z = (M = {}, M[c] = o, M[_] = s, M[l] = n, M)[O] || 1, V = this.$d.getTime() + x * z;
        return L.w(V, this);
      }, E.subtract = function(x, N) {
        return this.add(-1 * x, N);
      }, E.format = function(x) {
        var N = this, M = this.$locale();
        if (!this.isValid())
          return M.invalidDate || y;
        var P = x || "YYYY-MM-DDTHH:mm:ssZ", O = L.z(this), W = this.$H, z = this.$m, V = this.$M, Y = M.weekdays, Q = M.months, I = function(G, ne, we, Se) {
          return G && (G[ne] || G(N, P)) || we[ne].slice(0, Se);
        }, X = function(G) {
          return L.s(W % 12 || 12, G, "0");
        }, te = M.meridiem || function(G, ne, we) {
          var Se = G < 12 ? "AM" : "PM";
          return we ? Se.toLowerCase() : Se;
        }, Z = { YY: String(this.$y).slice(-2), YYYY: this.$y, M: V + 1, MM: L.s(V + 1, 2, "0"), MMM: I(M.monthsShort, V, Q, 3), MMMM: I(Q, V), D: this.$D, DD: L.s(this.$D, 2, "0"), d: String(this.$W), dd: I(M.weekdaysMin, this.$W, Y, 2), ddd: I(M.weekdaysShort, this.$W, Y, 3), dddd: Y[this.$W], H: String(W), HH: L.s(W, 2, "0"), h: X(1), hh: X(2), a: te(W, z, !0), A: te(W, z, !1), m: String(z), mm: L.s(z, 2, "0"), s: String(this.$s), ss: L.s(this.$s, 2, "0"), SSS: L.s(this.$ms, 3, "0"), Z: O };
        return P.replace(m, function(G, ne) {
          return ne || Z[G] || O.replace(":", "");
        });
      }, E.utcOffset = function() {
        return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
      }, E.diff = function(x, N, M) {
        var P, O = L.p(N), W = k(x), z = (W.utcOffset() - this.utcOffset()) * o, V = this - W, Y = L.m(this, W);
        return Y = (P = {}, P[a] = Y / 12, P[d] = Y, P[f] = Y / 3, P[i] = (V - z) / 6048e5, P[h] = (V - z) / 864e5, P[_] = V / s, P[c] = V / o, P[l] = V / n, P)[O] || V, M ? Y : L.a(Y);
      }, E.daysInMonth = function() {
        return this.endOf(d).$D;
      }, E.$locale = function() {
        return C[this.$L];
      }, E.locale = function(x, N) {
        if (!x)
          return this.$L;
        var M = this.clone(), P = v(x, N, !0);
        return P && (M.$L = P), M;
      }, E.clone = function() {
        return L.w(this.$d, this);
      }, E.toDate = function() {
        return new Date(this.valueOf());
      }, E.toJSON = function() {
        return this.isValid() ? this.toISOString() : null;
      }, E.toISOString = function() {
        return this.$d.toISOString();
      }, E.toString = function() {
        return this.$d.toUTCString();
      }, D;
    }(), F = j.prototype;
    return k.prototype = F, [["$ms", r], ["$s", l], ["$m", c], ["$H", _], ["$W", h], ["$M", d], ["$y", a], ["$D", u]].forEach(function(D) {
      F[D[1]] = function(E) {
        return this.$g(E, D[0], D[1]);
      };
    }), k.extend = function(D, E) {
      return D.$i || (D(E, j, k), D.$i = !0), k;
    }, k.locale = v, k.isDayjs = A, k.unix = function(D) {
      return k(1e3 * D);
    }, k.en = C[S], k.Ls = C, k.p = {}, k;
  });
})(Kv);
const bc = (e = 0, t = 0) => {
  const n = [];
  for (let o = e; o <= t; o++)
    n.push(o);
  return n;
}, Jh = (e, t) => {
  const n = Math.ceil(e.length / t);
  return new Array(t).fill({}).map((o, s) => e.slice(s * n, (s + 1) * n));
}, Zv = (e) => {
  const { format: t, minDate: n, maxDate: o, tagDate: s, DATEROWCOUNT: r, showOtherMonth: l, clickDay: c, selectedDate: _, handleChangePanel: h, showToday: i, handleChange: d, clickToday: f } = e, a = (L) => J(L).isValid() ? J(L).add(1, "months").format(t) : "", u = (L) => J(L).isValid() ? J(L).subtract(1, "months").format(t) : "", y = () => {
    const L = u(_ || J().format(t));
    d(L, !1);
  }, p = () => {
    const L = a(_ || J().format(t));
    d(L, !1);
  }, m = () => {
    d("", !0);
  }, g = () => {
    d(_, !0);
  }, $ = (L, j, F, D) => {
    const E = J(), x = J(_), N = new Array(L);
    for (let M = 0; M < L; M++) {
      const P = j + M + 1, O = F.set("date", P), W = D && !l ? !0 : n && O.isBefore(n, "date") || o && O.isAfter(o, "date");
      N[M] = {
        isSelected: x.isSame(F.set("date", P), "date"),
        isToday: E.isSame(O, "date"),
        isDisable: !!W,
        isTag: !!(s != null && s.includes(O.format(t))),
        date: O,
        isOtherMonth: D,
        onClick: () => W ? {} : c(O)
      };
    }
    return N;
  }, w = () => {
    const L = J(_), j = J(), F = _ ? L : j, D = F.set("date", 1).day(), E = D === 0 ? 6 : D - 1, x = F.subtract(1, "month"), M = Number(x.endOf("month").get("date")) - E;
    return $(E, M, x, !0);
  }, S = () => {
    const L = J(_), j = J(), F = _ ? L : j, D = F.set("date", 1).day(), E = D === 0 ? 6 : D - 1, x = F.endOf("month").get("date"), N = F.add(1, "month"), M = 7 * 6 % (E + x);
    return $(M, 0, N, !0);
  }, C = () => {
    const L = _, j = J(), F = _ ? J(L) : j, D = F.endOf("month").get("date"), E = $(D, 0, F, !1), x = w(), N = S(), M = [...x, ...E, ...N];
    return Jh(M, r);
  }, A = ["一", "二", "三", "四", "五", "六", "日"], v = C(), k = _ || J().format(t);
  return /* @__PURE__ */ K("div", { className: B("datepicker-calendar-day"), children: [
    /* @__PURE__ */ K("div", { className: "datepicker-calendar-bar not-hide-datepicker", children: [
      /* @__PURE__ */ K("div", { class: "flex", children: /* @__PURE__ */ K("button", { type: "button", className: "btn ghost", onClick: () => h("year"), children: [
        /* @__PURE__ */ K("span", { children: J(k).format("YYYY 年 MM 月") }),
        /* @__PURE__ */ K("span", { class: "caret" })
      ] }) }),
      /* @__PURE__ */ K("div", { class: "flex", children: [
        i && /* @__PURE__ */ K("button", { type: "button", className: "btn ghost", onClick: () => {
          f();
        }, children: "今天" }),
        /* @__PURE__ */ K("button", { type: "button", className: "btn ghost", onClick: () => y(), children: /* @__PURE__ */ K("i", { className: "icon icon-angle-left" }) }),
        /* @__PURE__ */ K("button", { type: "button", className: "btn ghost", onClick: () => p(), children: /* @__PURE__ */ K("i", { className: "icon icon-angle-right" }) })
      ] })
    ] }),
    /* @__PURE__ */ K("table", { className: "datepicker-calendar-table not-hide-datepicker", children: [
      /* @__PURE__ */ K("thead", { className: "datepicker-calendar-thead", children: /* @__PURE__ */ K("tr", { children: A.map((L, j) => /* @__PURE__ */ K("th", { children: L }, j)) }) }),
      /* @__PURE__ */ K("tbody", { className: "datepicker-calendar-tbody", children: v.map((L, j) => /* @__PURE__ */ K("tr", { children: L.map((F, D) => {
        const E = ["text-center"];
        return F.isToday && E.push("datepicker-calendar-today"), F.isSelected && E.push("datepicker-calendar-selected-date"), F.isOtherMonth && E.push("datepicker-calendar-other-month"), F.isTag && E.push("datepicker-calendar-tag"), /* @__PURE__ */ K("td", { className: B(E), children: /* @__PURE__ */ K("div", { className: B("btn", "ghost", "datepicker-calendar-date", F.isDisable ? "disabled" : ""), onClick: F.onClick, children: !l && F.isOtherMonth ? "" : J(F.date).format("DD") }) }, D);
      }) }, j)) })
    ] }),
    /* @__PURE__ */ K("div", { class: "datepicker-calendar-footer text-right mt-1", children: [
      /* @__PURE__ */ K("button", { type: "button", className: "btn ghost text-primary", onClick: m, children: /* @__PURE__ */ K("span", { children: "清除" }) }),
      /* @__PURE__ */ K("button", { type: "button", className: "btn ghost text-primary", onClick: g, children: /* @__PURE__ */ K("span", { children: "确认" }) })
    ] })
  ] });
};
const Jv = (e) => {
  const { format: t, selectedDate: n, minDate: o, maxDate: s, year: r, handleChangeMonth: l } = e, c = J(o).format("M"), _ = J(s).format("M"), h = Jh(bc(1, 12), 3), i = (d, f) => {
    f || l(d);
  };
  return /* @__PURE__ */ K("div", { className: B("datepicker-calendar-month", "not-hide-datepicker"), children: /* @__PURE__ */ K("table", { className: "datepicker-calendar-month-table", children: /* @__PURE__ */ K("tbody", { className: "datepicker-calendar-month-table-body", children: h.map((d, f) => /* @__PURE__ */ K("tr", { children: d.map((a, u) => {
    const y = ["text-center"], p = J(`${r}-${a}-01`).format(t), m = !!(c && J(n).isBefore(c) || _ && J(n).isBefore(_));
    return /* @__PURE__ */ K("td", { className: B(y), children: /* @__PURE__ */ K("div", { className: B("btn", "size-sm", "ghost", "datepicker-calendar-month", m ? "disabled" : ""), onClick: () => {
      i(p, m);
    }, children: [
      J(p).format("MM"),
      " 月"
    ] }) }, u);
  }) }, f)) }) }) });
}, Qv = (e) => {
  const { selectedDate: t, handleChangeMonth: n } = e;
  setTimeout(() => {
    const l = document.getElementsByClassName("datepicker-accordion");
    l != null && l.length && (l[0].scrollTop = 2400);
  }, 800);
  const o = J(t).year(), s = [...bc(o - 100, o), ...bc(o + 1, o + 100)], r = (l, c) => {
    var i, d, f;
    if (!(l != null && l.target))
      return;
    const _ = document.querySelectorAll(".datepicker-accordion > ul > li > .datepicker-accordion-title");
    for (let a = 0; a < _.length; a++)
      (i = _[a].nextElementSibling) != null && i.classList.contains("hidden") || (d = _[a].nextElementSibling) == null || d.classList.add("hidden");
    (f = l.target.nextElementSibling) == null || f.classList.toggle("hidden");
    const h = document.querySelector(".datepicker-accordion");
    h && (h.scrollTop + h.clientHeight === h.scrollHeight ? h.scrollTop = 0 : c < o ? h.scrollTop = h.scrollTop - 30 : h.scrollTop = h.scrollTop + 30);
  };
  return /* @__PURE__ */ K("div", { class: "datepicker-accordion scroll-smooth not-hide-datepicker", children: /* @__PURE__ */ K("ul", { children: s.map((l, c) => /* @__PURE__ */ K("li", { id: o === l ? "selected" : "", children: [
    /* @__PURE__ */ K("div", { class: "datepicker-accordion-title", onClick: (_) => r(_, l), children: l }),
    /* @__PURE__ */ K("div", { className: B("datepicker-accordion-content", o === l ? "" : "hidden"), children: tr(Jv, {
      ...e,
      year: l,
      handleChangeMonth: n
    }) }, c)
  ] })) }) });
};
class ey extends Ao {
  constructor() {
    super(...arguments);
    R(this, "DATEROWCOUNT", 6);
    R(this, "ref", Vv());
    R(this, "state", {
      selectedDate: this.props.date || null,
      type: "day"
    });
  }
  handleChange(n, o = !1) {
    var s;
    this.setState({ selectedDate: n }), o && ((s = this.props) == null || s.onChange(n));
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
    return this.state.type === "day" ? tr(Zv, {
      ...this.props,
      handleChange: this.handleChange.bind(this),
      handleChangePanel: this.handleChangePanel.bind(this),
      clickToday: this.clickToday.bind(this),
      clickDay: this.clickDay.bind(this),
      selectedDate: this.state.selectedDate,
      DATEROWCOUNT: this.DATEROWCOUNT
    }) : tr(Qv, {
      ...this.props,
      selectedDate: this.state.selectedDate,
      handleChangeMonth: this.handleChangeMonth.bind(this)
    });
  }
  render() {
    const { className: n } = this.props;
    return /* @__PURE__ */ K("div", { className: B("datepicker-calendar", n), ref: this.ref, children: this.renderPanel() });
  }
}
function qr(e) {
  return e.split("-")[1];
}
function Zc(e) {
  return e === "y" ? "height" : "width";
}
function Yn(e) {
  return e.split("-")[0];
}
function Ol(e) {
  return ["top", "bottom"].includes(Yn(e)) ? "x" : "y";
}
function N_(e, t, n) {
  let {
    reference: o,
    floating: s
  } = e;
  const r = o.x + o.width / 2 - s.width / 2, l = o.y + o.height / 2 - s.height / 2, c = Ol(t), _ = Zc(c), h = o[_] / 2 - s[_] / 2, i = Yn(t), d = c === "x";
  let f;
  switch (i) {
    case "top":
      f = {
        x: r,
        y: o.y - s.height
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
        x: o.x - s.width,
        y: l
      };
      break;
    default:
      f = {
        x: o.x,
        y: o.y
      };
  }
  switch (qr(t)) {
    case "start":
      f[c] -= h * (n && d ? -1 : 1);
      break;
    case "end":
      f[c] += h * (n && d ? -1 : 1);
      break;
  }
  return f;
}
const ty = async (e, t, n) => {
  const {
    placement: o = "bottom",
    strategy: s = "absolute",
    middleware: r = [],
    platform: l
  } = n, c = r.filter(Boolean), _ = await (l.isRTL == null ? void 0 : l.isRTL(t));
  let h = await l.getElementRects({
    reference: e,
    floating: t,
    strategy: s
  }), {
    x: i,
    y: d
  } = N_(h, o, _), f = o, a = {}, u = 0;
  for (let y = 0; y < c.length; y++) {
    const {
      name: p,
      fn: m
    } = c[y], {
      x: g,
      y: $,
      data: w,
      reset: S
    } = await m({
      x: i,
      y: d,
      initialPlacement: o,
      placement: f,
      strategy: s,
      middlewareData: a,
      rects: h,
      platform: l,
      elements: {
        reference: e,
        floating: t
      }
    });
    if (i = g ?? i, d = $ ?? d, a = {
      ...a,
      [p]: {
        ...a[p],
        ...w
      }
    }, S && u <= 50) {
      u++, typeof S == "object" && (S.placement && (f = S.placement), S.rects && (h = S.rects === !0 ? await l.getElementRects({
        reference: e,
        floating: t,
        strategy: s
      }) : S.rects), {
        x: i,
        y: d
      } = N_(h, f, _)), y = -1;
      continue;
    }
  }
  return {
    x: i,
    y: d,
    placement: f,
    strategy: s,
    middlewareData: a
  };
};
function ny(e) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...e
  };
}
function Qh(e) {
  return typeof e != "number" ? ny(e) : {
    top: e,
    right: e,
    bottom: e,
    left: e
  };
}
function Xi(e) {
  return {
    ...e,
    top: e.y,
    left: e.x,
    right: e.x + e.width,
    bottom: e.y + e.height
  };
}
async function oy(e, t) {
  var n;
  t === void 0 && (t = {});
  const {
    x: o,
    y: s,
    platform: r,
    rects: l,
    elements: c,
    strategy: _
  } = e, {
    boundary: h = "clippingAncestors",
    rootBoundary: i = "viewport",
    elementContext: d = "floating",
    altBoundary: f = !1,
    padding: a = 0
  } = t, u = Qh(a), p = c[f ? d === "floating" ? "reference" : "floating" : d], m = Xi(await r.getClippingRect({
    element: (n = await (r.isElement == null ? void 0 : r.isElement(p))) == null || n ? p : p.contextElement || await (r.getDocumentElement == null ? void 0 : r.getDocumentElement(c.floating)),
    boundary: h,
    rootBoundary: i,
    strategy: _
  })), g = d === "floating" ? {
    ...l.floating,
    x: o,
    y: s
  } : l.reference, $ = await (r.getOffsetParent == null ? void 0 : r.getOffsetParent(c.floating)), w = await (r.isElement == null ? void 0 : r.isElement($)) ? await (r.getScale == null ? void 0 : r.getScale($)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, S = Xi(r.convertOffsetParentRelativeRectToViewportRelativeRect ? await r.convertOffsetParentRelativeRectToViewportRelativeRect({
    rect: g,
    offsetParent: $,
    strategy: _
  }) : g);
  return {
    top: (m.top - S.top + u.top) / w.y,
    bottom: (S.bottom - m.bottom + u.bottom) / w.y,
    left: (m.left - S.left + u.left) / w.x,
    right: (S.right - m.right + u.right) / w.x
  };
}
const ry = Math.min, iy = Math.max;
function sy(e, t, n) {
  return iy(e, ry(t, n));
}
const ly = (e) => ({
  name: "arrow",
  options: e,
  async fn(t) {
    const {
      element: n,
      padding: o = 0
    } = e || {}, {
      x: s,
      y: r,
      placement: l,
      rects: c,
      platform: _
    } = t;
    if (n == null)
      return {};
    const h = Qh(o), i = {
      x: s,
      y: r
    }, d = Ol(l), f = Zc(d), a = await _.getDimensions(n), u = d === "y" ? "top" : "left", y = d === "y" ? "bottom" : "right", p = c.reference[f] + c.reference[d] - i[d] - c.floating[f], m = i[d] - c.reference[d], g = await (_.getOffsetParent == null ? void 0 : _.getOffsetParent(n));
    let $ = g ? d === "y" ? g.clientHeight || 0 : g.clientWidth || 0 : 0;
    $ === 0 && ($ = c.floating[f]);
    const w = p / 2 - m / 2, S = h[u], C = $ - a[f] - h[y], A = $ / 2 - a[f] / 2 + w, v = sy(S, A, C), L = qr(l) != null && A != v && c.reference[f] / 2 - (A < S ? h[u] : h[y]) - a[f] / 2 < 0 ? A < S ? S - A : C - A : 0;
    return {
      [d]: i[d] - L,
      data: {
        [d]: v,
        centerOffset: A - v
      }
    };
  }
}), cy = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function Ki(e) {
  return e.replace(/left|right|bottom|top/g, (t) => cy[t]);
}
function ay(e, t, n) {
  n === void 0 && (n = !1);
  const o = qr(e), s = Ol(e), r = Zc(s);
  let l = s === "x" ? o === (n ? "end" : "start") ? "right" : "left" : o === "start" ? "bottom" : "top";
  return t.reference[r] > t.floating[r] && (l = Ki(l)), {
    main: l,
    cross: Ki(l)
  };
}
const _y = {
  start: "end",
  end: "start"
};
function wc(e) {
  return e.replace(/start|end/g, (t) => _y[t]);
}
function fy(e) {
  const t = Ki(e);
  return [wc(e), t, wc(t)];
}
function uy(e, t, n) {
  const o = ["left", "right"], s = ["right", "left"], r = ["top", "bottom"], l = ["bottom", "top"];
  switch (e) {
    case "top":
    case "bottom":
      return n ? t ? s : o : t ? o : s;
    case "left":
    case "right":
      return t ? r : l;
    default:
      return [];
  }
}
function hy(e, t, n, o) {
  const s = qr(e);
  let r = uy(Yn(e), n === "start", o);
  return s && (r = r.map((l) => l + "-" + s), t && (r = r.concat(r.map(wc)))), r;
}
const dy = function(e) {
  return e === void 0 && (e = {}), {
    name: "flip",
    options: e,
    async fn(t) {
      var n;
      const {
        placement: o,
        middlewareData: s,
        rects: r,
        initialPlacement: l,
        platform: c,
        elements: _
      } = t, {
        mainAxis: h = !0,
        crossAxis: i = !0,
        fallbackPlacements: d,
        fallbackStrategy: f = "bestFit",
        fallbackAxisSideDirection: a = "none",
        flipAlignment: u = !0,
        ...y
      } = e, p = Yn(o), m = Yn(l) === l, g = await (c.isRTL == null ? void 0 : c.isRTL(_.floating)), $ = d || (m || !u ? [Ki(l)] : fy(l));
      !d && a !== "none" && $.push(...hy(l, u, a, g));
      const w = [l, ...$], S = await oy(t, y), C = [];
      let A = ((n = s.flip) == null ? void 0 : n.overflows) || [];
      if (h && C.push(S[p]), i) {
        const {
          main: L,
          cross: j
        } = ay(o, r, g);
        C.push(S[L], S[j]);
      }
      if (A = [...A, {
        placement: o,
        overflows: C
      }], !C.every((L) => L <= 0)) {
        var v;
        const L = (((v = s.flip) == null ? void 0 : v.index) || 0) + 1, j = w[L];
        if (j)
          return {
            data: {
              index: L,
              overflows: A
            },
            reset: {
              placement: j
            }
          };
        let F = "bottom";
        switch (f) {
          case "bestFit": {
            var k;
            const D = (k = A.map((E) => [E, E.overflows.filter((x) => x > 0).reduce((x, N) => x + N, 0)]).sort((E, x) => E[1] - x[1])[0]) == null ? void 0 : k[0].placement;
            D && (F = D);
            break;
          }
          case "initialPlacement":
            F = l;
            break;
        }
        if (o !== F)
          return {
            reset: {
              placement: F
            }
          };
      }
      return {};
    }
  };
};
async function py(e, t) {
  const {
    placement: n,
    platform: o,
    elements: s
  } = e, r = await (o.isRTL == null ? void 0 : o.isRTL(s.floating)), l = Yn(n), c = qr(n), _ = Ol(n) === "x", h = ["left", "top"].includes(l) ? -1 : 1, i = r && _ ? -1 : 1, d = typeof t == "function" ? t(e) : t;
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
    x: a * i,
    y: f * h
  } : {
    x: f * h,
    y: a * i
  };
}
const my = function(e) {
  return e === void 0 && (e = 0), {
    name: "offset",
    options: e,
    async fn(t) {
      const {
        x: n,
        y: o
      } = t, s = await py(t, e);
      return {
        x: n + s.x,
        y: o + s.y,
        data: s
      };
    }
  };
};
function He(e) {
  var t;
  return ((t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function et(e) {
  return He(e).getComputedStyle(e);
}
function Vt(e) {
  return td(e) ? (e.nodeName || "").toLowerCase() : "";
}
let ri;
function ed() {
  if (ri)
    return ri;
  const e = navigator.userAgentData;
  return e && Array.isArray(e.brands) ? (ri = e.brands.map((t) => t.brand + "/" + t.version).join(" "), ri) : navigator.userAgent;
}
function ut(e) {
  return e instanceof He(e).HTMLElement;
}
function zt(e) {
  return e instanceof He(e).Element;
}
function td(e) {
  return e instanceof He(e).Node;
}
function R_(e) {
  if (typeof ShadowRoot > "u")
    return !1;
  const t = He(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot;
}
function Pl(e) {
  const {
    overflow: t,
    overflowX: n,
    overflowY: o,
    display: s
  } = et(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + o + n) && !["inline", "contents"].includes(s);
}
function gy(e) {
  return ["table", "td", "th"].includes(Vt(e));
}
function Jc(e) {
  const t = /firefox/i.test(ed()), n = et(e), o = n.backdropFilter || n.WebkitBackdropFilter;
  return n.transform !== "none" || n.perspective !== "none" || (o ? o !== "none" : !1) || t && n.willChange === "filter" || t && (n.filter ? n.filter !== "none" : !1) || ["transform", "perspective"].some((s) => n.willChange.includes(s)) || ["paint", "layout", "strict", "content"].some(
    // TS 4.1 compat
    (s) => {
      const r = n.contain;
      return r != null ? r.includes(s) : !1;
    }
  );
}
function nd() {
  return !/^((?!chrome|android).)*safari/i.test(ed());
}
function Qc(e) {
  return ["html", "body", "#document"].includes(Vt(e));
}
const O_ = Math.min, Mo = Math.max, Zi = Math.round;
function od(e) {
  const t = et(e);
  let n = parseFloat(t.width), o = parseFloat(t.height);
  const s = e.offsetWidth, r = e.offsetHeight, l = Zi(n) !== s || Zi(o) !== r;
  return l && (n = s, o = r), {
    width: n,
    height: o,
    fallback: l
  };
}
function rd(e) {
  return zt(e) ? e : e.contextElement;
}
const id = {
  x: 1,
  y: 1
};
function mn(e) {
  const t = rd(e);
  if (!ut(t))
    return id;
  const n = t.getBoundingClientRect(), {
    width: o,
    height: s,
    fallback: r
  } = od(t);
  let l = (r ? Zi(n.width) : n.width) / o, c = (r ? Zi(n.height) : n.height) / s;
  return (!l || !Number.isFinite(l)) && (l = 1), (!c || !Number.isFinite(c)) && (c = 1), {
    x: l,
    y: c
  };
}
function or(e, t, n, o) {
  var s, r;
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const l = e.getBoundingClientRect(), c = rd(e);
  let _ = id;
  t && (o ? zt(o) && (_ = mn(o)) : _ = mn(e));
  const h = c ? He(c) : window, i = !nd() && n;
  let d = (l.left + (i && ((s = h.visualViewport) == null ? void 0 : s.offsetLeft) || 0)) / _.x, f = (l.top + (i && ((r = h.visualViewport) == null ? void 0 : r.offsetTop) || 0)) / _.y, a = l.width / _.x, u = l.height / _.y;
  if (c) {
    const y = He(c), p = o && zt(o) ? He(o) : o;
    let m = y.frameElement;
    for (; m && o && p !== y; ) {
      const g = mn(m), $ = m.getBoundingClientRect(), w = getComputedStyle(m);
      $.x += (m.clientLeft + parseFloat(w.paddingLeft)) * g.x, $.y += (m.clientTop + parseFloat(w.paddingTop)) * g.y, d *= g.x, f *= g.y, a *= g.x, u *= g.y, d += $.x, f += $.y, m = He(m).frameElement;
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
function Zt(e) {
  return ((td(e) ? e.ownerDocument : e.document) || window.document).documentElement;
}
function Hl(e) {
  return zt(e) ? {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  } : {
    scrollLeft: e.pageXOffset,
    scrollTop: e.pageYOffset
  };
}
function sd(e) {
  return or(Zt(e)).left + Hl(e).scrollLeft;
}
function vy(e, t, n) {
  const o = ut(t), s = Zt(t), r = or(e, !0, n === "fixed", t);
  let l = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const c = {
    x: 0,
    y: 0
  };
  if (o || !o && n !== "fixed")
    if ((Vt(t) !== "body" || Pl(s)) && (l = Hl(t)), ut(t)) {
      const _ = or(t, !0);
      c.x = _.x + t.clientLeft, c.y = _.y + t.clientTop;
    } else
      s && (c.x = sd(s));
  return {
    x: r.left + l.scrollLeft - c.x,
    y: r.top + l.scrollTop - c.y,
    width: r.width,
    height: r.height
  };
}
function rr(e) {
  if (Vt(e) === "html")
    return e;
  const t = (
    // Step into the shadow DOM of the parent of a slotted node
    e.assignedSlot || // DOM Element detected
    e.parentNode || // ShadowRoot detected
    (R_(e) ? e.host : null) || // Fallback
    Zt(e)
  );
  return R_(t) ? t.host : t;
}
function P_(e) {
  return !ut(e) || et(e).position === "fixed" ? null : e.offsetParent;
}
function yy(e) {
  let t = rr(e);
  for (; ut(t) && !Qc(t); ) {
    if (Jc(t))
      return t;
    t = rr(t);
  }
  return null;
}
function H_(e) {
  const t = He(e);
  let n = P_(e);
  for (; n && gy(n) && et(n).position === "static"; )
    n = P_(n);
  return n && (Vt(n) === "html" || Vt(n) === "body" && et(n).position === "static" && !Jc(n)) ? t : n || yy(e) || t;
}
function by(e) {
  return od(e);
}
function wy(e) {
  let {
    rect: t,
    offsetParent: n,
    strategy: o
  } = e;
  const s = ut(n), r = Zt(n);
  if (n === r)
    return t;
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
  if ((s || !s && o !== "fixed") && ((Vt(n) !== "body" || Pl(r)) && (l = Hl(n)), ut(n))) {
    const h = or(n);
    c = mn(n), _.x = h.x + n.clientLeft, _.y = h.y + n.clientTop;
  }
  return {
    width: t.width * c.x,
    height: t.height * c.y,
    x: t.x * c.x - l.scrollLeft * c.x + _.x,
    y: t.y * c.y - l.scrollTop * c.y + _.y
  };
}
function $y(e, t) {
  const n = He(e), o = Zt(e), s = n.visualViewport;
  let r = o.clientWidth, l = o.clientHeight, c = 0, _ = 0;
  if (s) {
    r = s.width, l = s.height;
    const h = nd();
    (h || !h && t === "fixed") && (c = s.offsetLeft, _ = s.offsetTop);
  }
  return {
    width: r,
    height: l,
    x: c,
    y: _
  };
}
function ky(e) {
  var t;
  const n = Zt(e), o = Hl(e), s = (t = e.ownerDocument) == null ? void 0 : t.body, r = Mo(n.scrollWidth, n.clientWidth, s ? s.scrollWidth : 0, s ? s.clientWidth : 0), l = Mo(n.scrollHeight, n.clientHeight, s ? s.scrollHeight : 0, s ? s.clientHeight : 0);
  let c = -o.scrollLeft + sd(e);
  const _ = -o.scrollTop;
  return et(s || n).direction === "rtl" && (c += Mo(n.clientWidth, s ? s.clientWidth : 0) - r), {
    width: r,
    height: l,
    x: c,
    y: _
  };
}
function ld(e) {
  const t = rr(e);
  return Qc(t) ? e.ownerDocument.body : ut(t) && Pl(t) ? t : ld(t);
}
function cd(e, t) {
  var n;
  t === void 0 && (t = []);
  const o = ld(e), s = o === ((n = e.ownerDocument) == null ? void 0 : n.body), r = He(o);
  return s ? t.concat(r, r.visualViewport || [], Pl(o) ? o : []) : t.concat(o, cd(o));
}
function xy(e, t) {
  const n = or(e, !0, t === "fixed"), o = n.top + e.clientTop, s = n.left + e.clientLeft, r = ut(e) ? mn(e) : {
    x: 1,
    y: 1
  }, l = e.clientWidth * r.x, c = e.clientHeight * r.y, _ = s * r.x, h = o * r.y;
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
function W_(e, t, n) {
  return t === "viewport" ? Xi($y(e, n)) : zt(t) ? xy(t, n) : Xi(ky(Zt(e)));
}
function Sy(e, t) {
  const n = t.get(e);
  if (n)
    return n;
  let o = cd(e).filter((c) => zt(c) && Vt(c) !== "body"), s = null;
  const r = et(e).position === "fixed";
  let l = r ? rr(e) : e;
  for (; zt(l) && !Qc(l); ) {
    const c = et(l), _ = Jc(l);
    (r ? !_ && !s : !_ && c.position === "static" && !!s && ["absolute", "fixed"].includes(s.position)) ? o = o.filter((i) => i !== l) : s = c, l = rr(l);
  }
  return t.set(e, o), o;
}
function Cy(e) {
  let {
    element: t,
    boundary: n,
    rootBoundary: o,
    strategy: s
  } = e;
  const l = [...n === "clippingAncestors" ? Sy(t, this._c) : [].concat(n), o], c = l[0], _ = l.reduce((h, i) => {
    const d = W_(t, i, s);
    return h.top = Mo(d.top, h.top), h.right = O_(d.right, h.right), h.bottom = O_(d.bottom, h.bottom), h.left = Mo(d.left, h.left), h;
  }, W_(t, c, s));
  return {
    width: _.right - _.left,
    height: _.bottom - _.top,
    x: _.left,
    y: _.top
  };
}
const Ey = {
  getClippingRect: Cy,
  convertOffsetParentRelativeRectToViewportRelativeRect: wy,
  isElement: zt,
  getDimensions: by,
  getOffsetParent: H_,
  getDocumentElement: Zt,
  getScale: mn,
  async getElementRects(e) {
    let {
      reference: t,
      floating: n,
      strategy: o
    } = e;
    const s = this.getOffsetParent || H_, r = this.getDimensions;
    return {
      reference: vy(t, await s(n), o),
      floating: {
        x: 0,
        y: 0,
        ...await r(n)
      }
    };
  },
  getClientRects: (e) => Array.from(e.getClientRects()),
  isRTL: (e) => et(e).direction === "rtl"
}, Ay = (e, t, n) => {
  const o = /* @__PURE__ */ new Map(), s = {
    platform: Ey,
    ...n
  }, r = {
    ...s.platform,
    _c: o
  };
  return ty(e, t, {
    ...s,
    platform: r
  });
};
var xn, Sn, Ce, rn, Cr, Ls, ad, Ds, _d, Ns, fd, Rs, ud, Os, hd, Ps, dd, Hs;
class Ke extends Ue {
  constructor() {
    super(...arguments);
    T(this, Ls);
    T(this, Ds);
    T(this, Ns);
    T(this, Rs);
    T(this, Os);
    T(this, Ps);
    T(this, xn, void 0);
    T(this, Sn, 0);
    T(this, Ce, void 0);
    T(this, rn, void 0);
    T(this, Cr, void 0);
    R(this, "hideLater", () => {
      b(this, Hs).call(this), H(this, Sn, window.setTimeout(this.hide.bind(this), 100));
    });
    T(this, Hs, () => {
      clearTimeout(b(this, Sn)), H(this, Sn, 0);
    });
  }
  get isShown() {
    var n;
    return (n = b(this, rn)) == null ? void 0 : n.classList.contains(this.constructor.CLASS_SHOW);
  }
  get datepicker() {
    return b(this, rn) || U(this, Ns, fd).call(this);
  }
  get trigger() {
    return b(this, Cr) || this.element;
  }
  get elementShowClass() {
    return `with-${this.constructor.NAME}-show`;
  }
  show(n) {
    return H(this, Cr, n), !this.datepicker || !this.element ? !1 : (this.element.classList.add(this.elementShowClass), this.datepicker.classList.add(this.constructor.CLASS_SHOW), this.datepicker.classList.add("fade"), U(this, Os, hd).call(this), !0);
  }
  hide() {
    var n;
    return this.element.classList.remove(this.elementShowClass), (n = b(this, rn)) == null || n.classList.remove(this.constructor.CLASS_SHOW), this.datepicker.classList.remove("fade"), !0;
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
    const { event: o, exclude: s, ignoreSelector: r = ".not-hide-datepicker" } = n || {};
    if (o && r && ((h = (_ = o.target).closest) != null && h.call(_, r)))
      return;
    const l = this.getAll().entries(), c = new Set(s || []);
    for (const [i, d] of l)
      c.has(i) || d.hide();
  }
}
xn = new WeakMap(), Sn = new WeakMap(), Ce = new WeakMap(), rn = new WeakMap(), Cr = new WeakMap(), Ls = new WeakSet(), ad = function() {
  const { arrow: n } = this.options;
  return typeof n == "number" ? n : 4;
}, Ds = new WeakSet(), _d = function() {
  const n = document.createElement("div");
  return H(this, Ce, n), b(this, Ce).style.position = "absolute", b(this, Ce).style.width = "8px", b(this, Ce).style.height = "8px", b(this, Ce).style.transform = "rotate(45deg)", b(this, Ce).style.border = "inherit", b(this, Ce).style.background = "inherit", n;
}, Ns = new WeakSet(), fd = function() {
  const n = this.constructor.CLASSNAME, o = document.createElement("div");
  return o.classList.add(n), qv(tr(ey, { ...this.options }), o), this.options.arrow && o.append(U(this, Ds, _d).call(this)), o.style.width = "max-content", o.style.position = "absolute", o.style.top = "0", o.style.left = "0", document.body.appendChild(o), H(this, rn, o), o;
}, Rs = new WeakSet(), ud = function() {
  var s;
  const n = U(this, Ls, ad).call(this), o = {
    middleware: [my(n + 3), dy()]
  };
  return this.options.arrow && b(this, Ce) && ((s = o.middleware) == null || s.push(ly({ element: b(this, Ce) }))), this.options.placement && (o.placement = this.options.placement), o;
}, Os = new WeakSet(), hd = function() {
  const n = U(this, Rs, ud).call(this);
  Ay(U(this, Ps, dd).call(this), this.datepicker, n).then(({ x: o, y: s, middlewareData: r }) => {
    if (Object.assign(this.datepicker.style, {
      left: `${o}px`,
      top: `${s}px`
    }), this.options.placement) {
      const l = this.options.placement.split("-")[0], c = {
        top: "bottom",
        right: "left",
        bottom: "top",
        left: "right"
      }[l];
      if (r.arrow && b(this, Ce)) {
        const { x: _, y: h } = r.arrow;
        Object.assign(b(this, Ce).style, {
          left: _ != null ? `${_}px` : "",
          top: h != null ? `${h}px` : "",
          [c]: `${-b(this, Ce).offsetWidth / 2}px`
        });
      }
    }
  });
}, Ps = new WeakSet(), dd = function() {
  return b(this, xn) || H(this, xn, {
    getBoundingClientRect: () => {
      const { element: n } = this;
      if (n instanceof MouseEvent) {
        const { clientX: o, clientY: s } = n;
        return {
          width: 0,
          height: 0,
          top: s,
          right: o,
          bottom: s,
          left: o
        };
      }
      return n instanceof HTMLElement ? n.getBoundingClientRect() : n;
    },
    contextElement: this.element
  }), b(this, xn);
}, Hs = new WeakMap(), R(Ke, "NAME", "datepicker"), R(Ke, "CLASSNAME", "datepicker"), R(Ke, "CLASS_SHOW", "show"), R(Ke, "MENU_SELECTOR", ".form-datetime:not(.disabled):not(:disabled)"), R(Ke, "DEFAULT", {
  date: J().format("YYYY-MM-DD"),
  format: "YYYY-MM-DD",
  showOtherMonth: !0,
  placement: "bottom-start",
  strategy: "absolute",
  trigger: "click",
  showToday: !0,
  arrow: !0
});
document.addEventListener("click", function(e) {
  const t = e.target, n = t.closest(Ke.MENU_SELECTOR), o = t.closest(".datepicker-calendar-bar, .datepicker-calendar-thead, .datepicker-calendar-month-table");
  n ? Ke.ensure(n).toggle() : o || Ke.clear({ event: e });
});
const My = (e) => {
  const t = document.getElementsByClassName("with-datepicker-show")[0];
  if (!t)
    return;
  const n = typeof t.closest == "function" ? t.closest(Ke.MENU_SELECTOR) : null;
  !n || !e.target.contains(n) || Ke.clear({ event: e });
};
window.addEventListener("scroll", My, !0);
function pd(e, t, n) {
  if (n) {
    e.setAttribute("class", B(t));
    return;
  }
  Tl(e.getAttribute("class"), t).forEach(([o, s]) => {
    e.classList.toggle(o, s);
  });
}
function ao(e, t, n) {
  if (typeof t == "object")
    return Object.entries(t).forEach(([o, s]) => {
      ao(e, o, s);
    });
  n !== void 0 && (e.style[t] = typeof n == "number" ? `${n}px` : n);
}
function Ji(e, t, n) {
  if (typeof t == "object")
    return Object.entries(t).forEach(([o, s]) => {
      Ji(e, o, s);
    });
  n !== void 0 && (n === null ? e.removeAttribute(t) : e.setAttribute(t, n));
}
var sn, Er, vt, Ws, Cn, yi;
const it = class extends Ue {
  constructor() {
    super(...arguments);
    T(this, Cn);
    T(this, sn, 0);
    T(this, Er, void 0);
    T(this, vt, void 0);
    T(this, Ws, (n) => {
      const o = n.target;
      (o.closest(it.DISMISS_SELECTOR) || this.options.backdrop === !0 && !o.closest(".modal-dialog") && o.closest(".modal")) && this.hide();
    });
  }
  get modalElement() {
    return this.element;
  }
  get isShown() {
    return this.modalElement.classList.contains(it.CLASS_SHOW);
  }
  get dialog() {
    return this.modalElement.querySelector(".modal-dialog");
  }
  afterInit() {
    if (this.on("click", b(this, Ws)), this.options.responsive && typeof ResizeObserver < "u") {
      const { dialog: n } = this;
      if (n) {
        const o = new ResizeObserver(() => {
          if (!this.isShown)
            return;
          const s = n.clientWidth, r = n.clientHeight;
          (!b(this, vt) || b(this, vt)[0] !== s || b(this, vt)[1] !== r) && (H(this, vt, [s, r]), this.layout());
        });
        o.observe(n), H(this, Er, o);
      }
    }
    this.options.show && this.show();
  }
  destroy() {
    var n;
    super.destroy(), (n = b(this, Er)) == null || n.disconnect();
  }
  show(n) {
    if (this.isShown)
      return !1;
    this.setOptions(n);
    const { modalElement: o } = this, { animation: s, backdrop: r, className: l, style: c } = this.options;
    return pd(o, [{
      "modal-trans": s,
      "modal-no-backdrop": !r
    }, it.CLASS_SHOW, l]), ao(o, {
      zIndex: `${it.zIndex++}`,
      ...c
    }), this.layout(), this.emit("show", this), U(this, Cn, yi).call(this, () => {
      o.classList.add(it.CLASS_SHOWN), U(this, Cn, yi).call(this, () => {
        this.emit("shown", this);
      });
    }, 50), !0;
  }
  hide() {
    return this.isShown ? (this.modalElement.classList.remove(it.CLASS_SHOWN), this.emit("hide", this), U(this, Cn, yi).call(this, () => {
      this.modalElement.classList.remove(it.CLASS_SHOW), this.emit("hidden", this);
    }), !0) : !1;
  }
  layout(n, o) {
    if (!this.isShown)
      return;
    const { dialog: s } = this;
    if (!s)
      return;
    o = o ?? this.options.size, Ji(s, "data-size", null);
    const r = { width: null, height: null };
    typeof o == "object" ? (r.width = o.width, r.height = o.height) : typeof o == "string" && ["md", "sm", "lg", "full"].includes(o) ? Ji(s, "data-size", o) : o && (r.width = o), ao(s, r), n = n ?? this.options.position ?? "fit";
    const l = s.clientWidth, c = s.clientHeight;
    H(this, vt, [l, c]), typeof n == "function" && (n = n({ width: l, height: c }));
    const _ = {
      top: null,
      left: null,
      bottom: null,
      right: null,
      alignSelf: "center"
    };
    typeof n == "number" ? (_.alignSelf = "flex-start", _.top = n) : typeof n == "object" && n ? (_.alignSelf = "flex-start", Object.assign(_, n)) : n === "fit" ? (_.alignSelf = "flex-start", _.top = `${Math.max(0, Math.floor((window.innerHeight - c) / 3))}px`) : n === "bottom" ? _.alignSelf = "flex-end" : n === "top" ? _.alignSelf = "flex-start" : n !== "center" && typeof n == "string" && (_.alignSelf = "flex-start", _.top = n), ao(s, _), ao(this.modalElement, "justifyContent", _.left ? "flex-start" : "center");
  }
};
let Me = it;
sn = new WeakMap(), Er = new WeakMap(), vt = new WeakMap(), Ws = new WeakMap(), Cn = new WeakSet(), yi = function(n, o) {
  b(this, sn) && (clearTimeout(b(this, sn)), H(this, sn, 0)), n && (this.options.animation ? H(this, sn, window.setTimeout(n, o ?? this.options.transTime)) : n());
}, R(Me, "NAME", "Modal"), R(Me, "EVENTS", !0), R(Me, "DEFAULT", {
  position: "fit",
  show: !0,
  keyboard: !0,
  animation: !0,
  backdrop: !0,
  responsive: !0,
  transTime: 300
}), R(Me, "CLASS_SHOW", "show"), R(Me, "CLASS_SHOWN", "in"), R(Me, "DISMISS_SELECTOR", '[data-dismiss="modal"]'), R(Me, "zIndex", 2e3);
window.addEventListener("resize", () => {
  Me.all.forEach((e) => {
    const t = e;
    t.isShown && t.options.responsive && t.layout();
  });
});
var Wl, le, md, _o, To, I_, Qi = {}, gd = [], Ty = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function Dt(e, t) {
  for (var n in t)
    e[n] = t[n];
  return e;
}
function vd(e) {
  var t = e.parentNode;
  t && t.removeChild(e);
}
function Ly(e, t, n) {
  var o, s, r, l = {};
  for (r in t)
    r == "key" ? o = t[r] : r == "ref" ? s = t[r] : l[r] = t[r];
  if (arguments.length > 2 && (l.children = arguments.length > 3 ? Wl.call(arguments, 2) : n), typeof e == "function" && e.defaultProps != null)
    for (r in e.defaultProps)
      l[r] === void 0 && (l[r] = e.defaultProps[r]);
  return bi(e, l, o, s, null);
}
function bi(e, t, n, o, s) {
  var r = { type: e, props: t, key: n, ref: o, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: s ?? ++md };
  return s == null && le.vnode != null && le.vnode(r), r;
}
function Dy() {
  return { current: null };
}
function Il(e) {
  return e.children;
}
function gn(e, t) {
  this.props = e, this.context = t;
}
function ir(e, t) {
  if (t == null)
    return e.__ ? ir(e.__, e.__.__k.indexOf(e) + 1) : null;
  for (var n; t < e.__k.length; t++)
    if ((n = e.__k[t]) != null && n.__e != null)
      return n.__e;
  return typeof e.type == "function" ? ir(e) : null;
}
function yd(e) {
  var t, n;
  if ((e = e.__) != null && e.__c != null) {
    for (e.__e = e.__c.base = null, t = 0; t < e.__k.length; t++)
      if ((n = e.__k[t]) != null && n.__e != null) {
        e.__e = e.__c.base = n.__e;
        break;
      }
    return yd(e);
  }
}
function U_(e) {
  (!e.__d && (e.__d = !0) && To.push(e) && !es.__r++ || I_ !== le.debounceRendering) && ((I_ = le.debounceRendering) || setTimeout)(es);
}
function es() {
  for (var e; es.__r = To.length; )
    e = To.sort(function(t, n) {
      return t.__v.__b - n.__v.__b;
    }), To = [], e.some(function(t) {
      var n, o, s, r, l, c;
      t.__d && (l = (r = (n = t).__v).__e, (c = n.__P) && (o = [], (s = Dt({}, r)).__v = r.__v + 1, ea(c, r, s, n.__n, c.ownerSVGElement !== void 0, r.__h != null ? [l] : null, o, l ?? ir(r), r.__h), kd(o, r), r.__e != l && yd(r)));
    });
}
function bd(e, t, n, o, s, r, l, c, _, h) {
  var i, d, f, a, u, y, p, m = o && o.__k || gd, g = m.length;
  for (n.__k = [], i = 0; i < t.length; i++)
    if ((a = n.__k[i] = (a = t[i]) == null || typeof a == "boolean" ? null : typeof a == "string" || typeof a == "number" || typeof a == "bigint" ? bi(null, a, null, null, a) : Array.isArray(a) ? bi(Il, { children: a }, null, null, null) : a.__b > 0 ? bi(a.type, a.props, a.key, a.ref ? a.ref : null, a.__v) : a) != null) {
      if (a.__ = n, a.__b = n.__b + 1, (f = m[i]) === null || f && a.key == f.key && a.type === f.type)
        m[i] = void 0;
      else
        for (d = 0; d < g; d++) {
          if ((f = m[d]) && a.key == f.key && a.type === f.type) {
            m[d] = void 0;
            break;
          }
          f = null;
        }
      ea(e, a, f = f || Qi, s, r, l, c, _, h), u = a.__e, (d = a.ref) && f.ref != d && (p || (p = []), f.ref && p.push(f.ref, null, a), p.push(d, a.__c || u, a)), u != null ? (y == null && (y = u), typeof a.type == "function" && a.__k === f.__k ? a.__d = _ = wd(a, _, e) : _ = $d(e, a, f, m, u, _), typeof n.type == "function" && (n.__d = _)) : _ && f.__e == _ && _.parentNode != e && (_ = ir(f));
    }
  for (n.__e = y, i = g; i--; )
    m[i] != null && Sd(m[i], m[i]);
  if (p)
    for (i = 0; i < p.length; i++)
      xd(p[i], p[++i], p[++i]);
}
function wd(e, t, n) {
  for (var o, s = e.__k, r = 0; s && r < s.length; r++)
    (o = s[r]) && (o.__ = e, t = typeof o.type == "function" ? wd(o, t, n) : $d(n, o, o, s, o.__e, t));
  return t;
}
function $d(e, t, n, o, s, r) {
  var l, c, _;
  if (t.__d !== void 0)
    l = t.__d, t.__d = void 0;
  else if (n == null || s != r || s.parentNode == null)
    e:
      if (r == null || r.parentNode !== e)
        e.appendChild(s), l = null;
      else {
        for (c = r, _ = 0; (c = c.nextSibling) && _ < o.length; _ += 2)
          if (c == s)
            break e;
        e.insertBefore(s, r), l = r;
      }
  return l !== void 0 ? l : s.nextSibling;
}
function Ny(e, t, n, o, s) {
  var r;
  for (r in n)
    r === "children" || r === "key" || r in t || ts(e, r, null, n[r], o);
  for (r in t)
    s && typeof t[r] != "function" || r === "children" || r === "key" || r === "value" || r === "checked" || n[r] === t[r] || ts(e, r, t[r], n[r], o);
}
function F_(e, t, n) {
  t[0] === "-" ? e.setProperty(t, n) : e[t] = n == null ? "" : typeof n != "number" || Ty.test(t) ? n : n + "px";
}
function ts(e, t, n, o, s) {
  var r;
  e:
    if (t === "style")
      if (typeof n == "string")
        e.style.cssText = n;
      else {
        if (typeof o == "string" && (e.style.cssText = o = ""), o)
          for (t in o)
            n && t in n || F_(e.style, t, "");
        if (n)
          for (t in n)
            o && n[t] === o[t] || F_(e.style, t, n[t]);
      }
    else if (t[0] === "o" && t[1] === "n")
      r = t !== (t = t.replace(/Capture$/, "")), t = t.toLowerCase() in e ? t.toLowerCase().slice(2) : t.slice(2), e.l || (e.l = {}), e.l[t + r] = n, n ? o || e.addEventListener(t, r ? j_ : B_, r) : e.removeEventListener(t, r ? j_ : B_, r);
    else if (t !== "dangerouslySetInnerHTML") {
      if (s)
        t = t.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
      else if (t !== "href" && t !== "list" && t !== "form" && t !== "tabIndex" && t !== "download" && t in e)
        try {
          e[t] = n ?? "";
          break e;
        } catch {
        }
      typeof n == "function" || (n == null || n === !1 && t.indexOf("-") == -1 ? e.removeAttribute(t) : e.setAttribute(t, n));
    }
}
function B_(e) {
  this.l[e.type + !1](le.event ? le.event(e) : e);
}
function j_(e) {
  this.l[e.type + !0](le.event ? le.event(e) : e);
}
function ea(e, t, n, o, s, r, l, c, _) {
  var h, i, d, f, a, u, y, p, m, g, $, w, S, C, A, v = t.type;
  if (t.constructor !== void 0)
    return null;
  n.__h != null && (_ = n.__h, c = t.__e = n.__e, t.__h = null, r = [c]), (h = le.__b) && h(t);
  try {
    e:
      if (typeof v == "function") {
        if (p = t.props, m = (h = v.contextType) && o[h.__c], g = h ? m ? m.props.value : h.__ : o, n.__c ? y = (i = t.__c = n.__c).__ = i.__E : ("prototype" in v && v.prototype.render ? t.__c = i = new v(p, g) : (t.__c = i = new gn(p, g), i.constructor = v, i.render = Oy), m && m.sub(i), i.props = p, i.state || (i.state = {}), i.context = g, i.__n = o, d = i.__d = !0, i.__h = [], i._sb = []), i.__s == null && (i.__s = i.state), v.getDerivedStateFromProps != null && (i.__s == i.state && (i.__s = Dt({}, i.__s)), Dt(i.__s, v.getDerivedStateFromProps(p, i.__s))), f = i.props, a = i.state, d)
          v.getDerivedStateFromProps == null && i.componentWillMount != null && i.componentWillMount(), i.componentDidMount != null && i.__h.push(i.componentDidMount);
        else {
          if (v.getDerivedStateFromProps == null && p !== f && i.componentWillReceiveProps != null && i.componentWillReceiveProps(p, g), !i.__e && i.shouldComponentUpdate != null && i.shouldComponentUpdate(p, i.__s, g) === !1 || t.__v === n.__v) {
            for (i.props = p, i.state = i.__s, t.__v !== n.__v && (i.__d = !1), i.__v = t, t.__e = n.__e, t.__k = n.__k, t.__k.forEach(function(k) {
              k && (k.__ = t);
            }), $ = 0; $ < i._sb.length; $++)
              i.__h.push(i._sb[$]);
            i._sb = [], i.__h.length && l.push(i);
            break e;
          }
          i.componentWillUpdate != null && i.componentWillUpdate(p, i.__s, g), i.componentDidUpdate != null && i.__h.push(function() {
            i.componentDidUpdate(f, a, u);
          });
        }
        if (i.context = g, i.props = p, i.__v = t, i.__P = e, w = le.__r, S = 0, "prototype" in v && v.prototype.render) {
          for (i.state = i.__s, i.__d = !1, w && w(t), h = i.render(i.props, i.state, i.context), C = 0; C < i._sb.length; C++)
            i.__h.push(i._sb[C]);
          i._sb = [];
        } else
          do
            i.__d = !1, w && w(t), h = i.render(i.props, i.state, i.context), i.state = i.__s;
          while (i.__d && ++S < 25);
        i.state = i.__s, i.getChildContext != null && (o = Dt(Dt({}, o), i.getChildContext())), d || i.getSnapshotBeforeUpdate == null || (u = i.getSnapshotBeforeUpdate(f, a)), A = h != null && h.type === Il && h.key == null ? h.props.children : h, bd(e, Array.isArray(A) ? A : [A], t, n, o, s, r, l, c, _), i.base = t.__e, t.__h = null, i.__h.length && l.push(i), y && (i.__E = i.__ = null), i.__e = !1;
      } else
        r == null && t.__v === n.__v ? (t.__k = n.__k, t.__e = n.__e) : t.__e = Ry(n.__e, t, n, o, s, r, l, _);
    (h = le.diffed) && h(t);
  } catch (k) {
    t.__v = null, (_ || r != null) && (t.__e = c, t.__h = !!_, r[r.indexOf(c)] = null), le.__e(k, t, n);
  }
}
function kd(e, t) {
  le.__c && le.__c(t, e), e.some(function(n) {
    try {
      e = n.__h, n.__h = [], e.some(function(o) {
        o.call(n);
      });
    } catch (o) {
      le.__e(o, n.__v);
    }
  });
}
function Ry(e, t, n, o, s, r, l, c) {
  var _, h, i, d = n.props, f = t.props, a = t.type, u = 0;
  if (a === "svg" && (s = !0), r != null) {
    for (; u < r.length; u++)
      if ((_ = r[u]) && "setAttribute" in _ == !!a && (a ? _.localName === a : _.nodeType === 3)) {
        e = _, r[u] = null;
        break;
      }
  }
  if (e == null) {
    if (a === null)
      return document.createTextNode(f);
    e = s ? document.createElementNS("http://www.w3.org/2000/svg", a) : document.createElement(a, f.is && f), r = null, c = !1;
  }
  if (a === null)
    d === f || c && e.data === f || (e.data = f);
  else {
    if (r = r && Wl.call(e.childNodes), h = (d = n.props || Qi).dangerouslySetInnerHTML, i = f.dangerouslySetInnerHTML, !c) {
      if (r != null)
        for (d = {}, u = 0; u < e.attributes.length; u++)
          d[e.attributes[u].name] = e.attributes[u].value;
      (i || h) && (i && (h && i.__html == h.__html || i.__html === e.innerHTML) || (e.innerHTML = i && i.__html || ""));
    }
    if (Ny(e, f, d, s, c), i)
      t.__k = [];
    else if (u = t.props.children, bd(e, Array.isArray(u) ? u : [u], t, n, o, s && a !== "foreignObject", r, l, r ? r[0] : n.__k && ir(n, 0), c), r != null)
      for (u = r.length; u--; )
        r[u] != null && vd(r[u]);
    c || ("value" in f && (u = f.value) !== void 0 && (u !== e.value || a === "progress" && !u || a === "option" && u !== d.value) && ts(e, "value", u, d.value, !1), "checked" in f && (u = f.checked) !== void 0 && u !== e.checked && ts(e, "checked", u, d.checked, !1));
  }
  return e;
}
function xd(e, t, n) {
  try {
    typeof e == "function" ? e(t) : e.current = t;
  } catch (o) {
    le.__e(o, n);
  }
}
function Sd(e, t, n) {
  var o, s;
  if (le.unmount && le.unmount(e), (o = e.ref) && (o.current && o.current !== e.__e || xd(o, null, t)), (o = e.__c) != null) {
    if (o.componentWillUnmount)
      try {
        o.componentWillUnmount();
      } catch (r) {
        le.__e(r, t);
      }
    o.base = o.__P = null, e.__c = void 0;
  }
  if (o = e.__k)
    for (s = 0; s < o.length; s++)
      o[s] && Sd(o[s], t, n || typeof e.type != "function");
  n || e.__e == null || vd(e.__e), e.__ = e.__e = e.__d = void 0;
}
function Oy(e, t, n) {
  return this.constructor(e, n);
}
function Py(e, t, n) {
  var o, s, r;
  le.__ && le.__(e, t), s = (o = typeof n == "function") ? null : n && n.__k || t.__k, r = [], ea(t, e = (!o && n || t).__k = Ly(Il, null, [e]), s || Qi, Qi, t.ownerSVGElement !== void 0, !o && n ? [n] : s ? null : t.firstChild ? Wl.call(t.childNodes) : null, r, !o && n ? n : s ? s.__e : t.firstChild, o), kd(r, e);
}
Wl = gd.slice, le = { __e: function(e, t, n, o) {
  for (var s, r, l; t = t.__; )
    if ((s = t.__c) && !s.__)
      try {
        if ((r = s.constructor) && r.getDerivedStateFromError != null && (s.setState(r.getDerivedStateFromError(e)), l = s.__d), s.componentDidCatch != null && (s.componentDidCatch(e, o || {}), l = s.__d), l)
          return s.__E = s;
      } catch (c) {
        e = c;
      }
  throw e;
} }, md = 0, _o = function(e) {
  return e != null && e.constructor === void 0;
}, gn.prototype.setState = function(e, t) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = Dt({}, this.state), typeof e == "function" && (e = e(Dt({}, n), this.props)), e && Dt(n, e), e != null && this.__v && (t && this._sb.push(t), U_(this));
}, gn.prototype.forceUpdate = function(e) {
  this.__v && (this.__e = !0, e && this.__h.push(e), U_(this));
}, gn.prototype.render = Il, To = [], es.__r = 0;
var Hy = 0;
function be(e, t, n, o, s) {
  var r, l, c = {};
  for (l in t)
    l == "ref" ? r = t[l] : c[l] = t[l];
  var _ = { type: e, props: c, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: --Hy, __source: s, __self: o };
  if (typeof e == "function" && (r = e.defaultProps))
    for (l in r)
      c[l] === void 0 && (c[l] = r[l]);
  return le.vnode && le.vnode(_), _;
}
let Wy = (e = 21) => crypto.getRandomValues(new Uint8Array(e)).reduce((t, n) => (n &= 63, n < 36 ? t += n.toString(36) : n < 62 ? t += (n - 26).toString(36).toUpperCase() : n > 62 ? t += "-" : t += "_", t), "");
var $c;
$c = { __e: function(e, t, n, o) {
  for (var s, r, l; t = t.__; )
    if ((s = t.__c) && !s.__)
      try {
        if ((r = s.constructor) && r.getDerivedStateFromError != null && (s.setState(r.getDerivedStateFromError(e)), l = s.__d), s.componentDidCatch != null && (s.componentDidCatch(e, o || {}), l = s.__d), l)
          return s.__E = s;
      } catch (c) {
        e = c;
      }
  throw e;
} };
var Iy = 0;
function Ul(e, t, n, o, s) {
  var r, l, c = {};
  for (l in t)
    l == "ref" ? r = t[l] : c[l] = t[l];
  var _ = { type: e, props: c, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: --Iy, __source: s, __self: o };
  if (typeof e == "function" && (r = e.defaultProps))
    for (l in r)
      c[l] === void 0 && (c[l] = r[l]);
  return $c.vnode && $c.vnode(_), _;
}
function Uy({
  key: e,
  type: t,
  btnType: n,
  ...o
}) {
  return /* @__PURE__ */ Ul(jt, { type: n, ...o });
}
var Cd, pe, Ed, Lo, V_, Ad = {}, Md = [], Fy = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function Nt(e, t) {
  for (var n in t)
    e[n] = t[n];
  return e;
}
function Td(e) {
  var t = e.parentNode;
  t && t.removeChild(e);
}
function sc(e, t, n, o, s) {
  var r = { type: e, props: t, key: n, ref: o, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: s ?? ++Ed };
  return s == null && pe.vnode != null && pe.vnode(r), r;
}
function By() {
  return { current: null };
}
function ta(e) {
  return e.children;
}
function Do(e, t) {
  this.props = e, this.context = t;
}
function sr(e, t) {
  if (t == null)
    return e.__ ? sr(e.__, e.__.__k.indexOf(e) + 1) : null;
  for (var n; t < e.__k.length; t++)
    if ((n = e.__k[t]) != null && n.__e != null)
      return n.__e;
  return typeof e.type == "function" ? sr(e) : null;
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
function z_(e) {
  (!e.__d && (e.__d = !0) && Lo.push(e) && !ns.__r++ || V_ !== pe.debounceRendering) && ((V_ = pe.debounceRendering) || setTimeout)(ns);
}
function ns() {
  for (var e; ns.__r = Lo.length; )
    e = Lo.sort(function(t, n) {
      return t.__v.__b - n.__v.__b;
    }), Lo = [], e.some(function(t) {
      var n, o, s, r, l, c;
      t.__d && (l = (r = (n = t).__v).__e, (c = n.__P) && (o = [], (s = Nt({}, r)).__v = r.__v + 1, Od(c, r, s, n.__n, c.ownerSVGElement !== void 0, r.__h != null ? [l] : null, o, l ?? sr(r), r.__h), Vy(o, r), r.__e != l && Ld(r)));
    });
}
function Dd(e, t, n, o, s, r, l, c, _, h) {
  var i, d, f, a, u, y, p, m = o && o.__k || Md, g = m.length;
  for (n.__k = [], i = 0; i < t.length; i++)
    if ((a = n.__k[i] = (a = t[i]) == null || typeof a == "boolean" ? null : typeof a == "string" || typeof a == "number" || typeof a == "bigint" ? sc(null, a, null, null, a) : Array.isArray(a) ? sc(ta, { children: a }, null, null, null) : a.__b > 0 ? sc(a.type, a.props, a.key, a.ref ? a.ref : null, a.__v) : a) != null) {
      if (a.__ = n, a.__b = n.__b + 1, (f = m[i]) === null || f && a.key == f.key && a.type === f.type)
        m[i] = void 0;
      else
        for (d = 0; d < g; d++) {
          if ((f = m[d]) && a.key == f.key && a.type === f.type) {
            m[d] = void 0;
            break;
          }
          f = null;
        }
      Od(e, a, f = f || Ad, s, r, l, c, _, h), u = a.__e, (d = a.ref) && f.ref != d && (p || (p = []), f.ref && p.push(f.ref, null, a), p.push(d, a.__c || u, a)), u != null ? (y == null && (y = u), typeof a.type == "function" && a.__k === f.__k ? a.__d = _ = Nd(a, _, e) : _ = Rd(e, a, f, m, u, _), typeof n.type == "function" && (n.__d = _)) : _ && f.__e == _ && _.parentNode != e && (_ = sr(f));
    }
  for (n.__e = y, i = g; i--; )
    m[i] != null && Hd(m[i], m[i]);
  if (p)
    for (i = 0; i < p.length; i++)
      Pd(p[i], p[++i], p[++i]);
}
function Nd(e, t, n) {
  for (var o, s = e.__k, r = 0; s && r < s.length; r++)
    (o = s[r]) && (o.__ = e, t = typeof o.type == "function" ? Nd(o, t, n) : Rd(n, o, o, s, o.__e, t));
  return t;
}
function Rd(e, t, n, o, s, r) {
  var l, c, _;
  if (t.__d !== void 0)
    l = t.__d, t.__d = void 0;
  else if (n == null || s != r || s.parentNode == null)
    e:
      if (r == null || r.parentNode !== e)
        e.appendChild(s), l = null;
      else {
        for (c = r, _ = 0; (c = c.nextSibling) && _ < o.length; _ += 2)
          if (c == s)
            break e;
        e.insertBefore(s, r), l = r;
      }
  return l !== void 0 ? l : s.nextSibling;
}
function jy(e, t, n, o, s) {
  var r;
  for (r in n)
    r === "children" || r === "key" || r in t || os(e, r, null, n[r], o);
  for (r in t)
    s && typeof t[r] != "function" || r === "children" || r === "key" || r === "value" || r === "checked" || n[r] === t[r] || os(e, r, t[r], n[r], o);
}
function Y_(e, t, n) {
  t[0] === "-" ? e.setProperty(t, n) : e[t] = n == null ? "" : typeof n != "number" || Fy.test(t) ? n : n + "px";
}
function os(e, t, n, o, s) {
  var r;
  e:
    if (t === "style")
      if (typeof n == "string")
        e.style.cssText = n;
      else {
        if (typeof o == "string" && (e.style.cssText = o = ""), o)
          for (t in o)
            n && t in n || Y_(e.style, t, "");
        if (n)
          for (t in n)
            o && n[t] === o[t] || Y_(e.style, t, n[t]);
      }
    else if (t[0] === "o" && t[1] === "n")
      r = t !== (t = t.replace(/Capture$/, "")), t = t.toLowerCase() in e ? t.toLowerCase().slice(2) : t.slice(2), e.l || (e.l = {}), e.l[t + r] = n, n ? o || e.addEventListener(t, r ? q_ : G_, r) : e.removeEventListener(t, r ? q_ : G_, r);
    else if (t !== "dangerouslySetInnerHTML") {
      if (s)
        t = t.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
      else if (t !== "href" && t !== "list" && t !== "form" && t !== "tabIndex" && t !== "download" && t in e)
        try {
          e[t] = n ?? "";
          break e;
        } catch {
        }
      typeof n == "function" || (n == null || n === !1 && t.indexOf("-") == -1 ? e.removeAttribute(t) : e.setAttribute(t, n));
    }
}
function G_(e) {
  this.l[e.type + !1](pe.event ? pe.event(e) : e);
}
function q_(e) {
  this.l[e.type + !0](pe.event ? pe.event(e) : e);
}
function Od(e, t, n, o, s, r, l, c, _) {
  var h, i, d, f, a, u, y, p, m, g, $, w, S, C, A, v = t.type;
  if (t.constructor !== void 0)
    return null;
  n.__h != null && (_ = n.__h, c = t.__e = n.__e, t.__h = null, r = [c]), (h = pe.__b) && h(t);
  try {
    e:
      if (typeof v == "function") {
        if (p = t.props, m = (h = v.contextType) && o[h.__c], g = h ? m ? m.props.value : h.__ : o, n.__c ? y = (i = t.__c = n.__c).__ = i.__E : ("prototype" in v && v.prototype.render ? t.__c = i = new v(p, g) : (t.__c = i = new Do(p, g), i.constructor = v, i.render = Yy), m && m.sub(i), i.props = p, i.state || (i.state = {}), i.context = g, i.__n = o, d = i.__d = !0, i.__h = [], i._sb = []), i.__s == null && (i.__s = i.state), v.getDerivedStateFromProps != null && (i.__s == i.state && (i.__s = Nt({}, i.__s)), Nt(i.__s, v.getDerivedStateFromProps(p, i.__s))), f = i.props, a = i.state, d)
          v.getDerivedStateFromProps == null && i.componentWillMount != null && i.componentWillMount(), i.componentDidMount != null && i.__h.push(i.componentDidMount);
        else {
          if (v.getDerivedStateFromProps == null && p !== f && i.componentWillReceiveProps != null && i.componentWillReceiveProps(p, g), !i.__e && i.shouldComponentUpdate != null && i.shouldComponentUpdate(p, i.__s, g) === !1 || t.__v === n.__v) {
            for (i.props = p, i.state = i.__s, t.__v !== n.__v && (i.__d = !1), i.__v = t, t.__e = n.__e, t.__k = n.__k, t.__k.forEach(function(k) {
              k && (k.__ = t);
            }), $ = 0; $ < i._sb.length; $++)
              i.__h.push(i._sb[$]);
            i._sb = [], i.__h.length && l.push(i);
            break e;
          }
          i.componentWillUpdate != null && i.componentWillUpdate(p, i.__s, g), i.componentDidUpdate != null && i.__h.push(function() {
            i.componentDidUpdate(f, a, u);
          });
        }
        if (i.context = g, i.props = p, i.__v = t, i.__P = e, w = pe.__r, S = 0, "prototype" in v && v.prototype.render) {
          for (i.state = i.__s, i.__d = !1, w && w(t), h = i.render(i.props, i.state, i.context), C = 0; C < i._sb.length; C++)
            i.__h.push(i._sb[C]);
          i._sb = [];
        } else
          do
            i.__d = !1, w && w(t), h = i.render(i.props, i.state, i.context), i.state = i.__s;
          while (i.__d && ++S < 25);
        i.state = i.__s, i.getChildContext != null && (o = Nt(Nt({}, o), i.getChildContext())), d || i.getSnapshotBeforeUpdate == null || (u = i.getSnapshotBeforeUpdate(f, a)), A = h != null && h.type === ta && h.key == null ? h.props.children : h, Dd(e, Array.isArray(A) ? A : [A], t, n, o, s, r, l, c, _), i.base = t.__e, t.__h = null, i.__h.length && l.push(i), y && (i.__E = i.__ = null), i.__e = !1;
      } else
        r == null && t.__v === n.__v ? (t.__k = n.__k, t.__e = n.__e) : t.__e = zy(n.__e, t, n, o, s, r, l, _);
    (h = pe.diffed) && h(t);
  } catch (k) {
    t.__v = null, (_ || r != null) && (t.__e = c, t.__h = !!_, r[r.indexOf(c)] = null), pe.__e(k, t, n);
  }
}
function Vy(e, t) {
  pe.__c && pe.__c(t, e), e.some(function(n) {
    try {
      e = n.__h, n.__h = [], e.some(function(o) {
        o.call(n);
      });
    } catch (o) {
      pe.__e(o, n.__v);
    }
  });
}
function zy(e, t, n, o, s, r, l, c) {
  var _, h, i, d = n.props, f = t.props, a = t.type, u = 0;
  if (a === "svg" && (s = !0), r != null) {
    for (; u < r.length; u++)
      if ((_ = r[u]) && "setAttribute" in _ == !!a && (a ? _.localName === a : _.nodeType === 3)) {
        e = _, r[u] = null;
        break;
      }
  }
  if (e == null) {
    if (a === null)
      return document.createTextNode(f);
    e = s ? document.createElementNS("http://www.w3.org/2000/svg", a) : document.createElement(a, f.is && f), r = null, c = !1;
  }
  if (a === null)
    d === f || c && e.data === f || (e.data = f);
  else {
    if (r = r && Cd.call(e.childNodes), h = (d = n.props || Ad).dangerouslySetInnerHTML, i = f.dangerouslySetInnerHTML, !c) {
      if (r != null)
        for (d = {}, u = 0; u < e.attributes.length; u++)
          d[e.attributes[u].name] = e.attributes[u].value;
      (i || h) && (i && (h && i.__html == h.__html || i.__html === e.innerHTML) || (e.innerHTML = i && i.__html || ""));
    }
    if (jy(e, f, d, s, c), i)
      t.__k = [];
    else if (u = t.props.children, Dd(e, Array.isArray(u) ? u : [u], t, n, o, s && a !== "foreignObject", r, l, r ? r[0] : n.__k && sr(n, 0), c), r != null)
      for (u = r.length; u--; )
        r[u] != null && Td(r[u]);
    c || ("value" in f && (u = f.value) !== void 0 && (u !== e.value || a === "progress" && !u || a === "option" && u !== d.value) && os(e, "value", u, d.value, !1), "checked" in f && (u = f.checked) !== void 0 && u !== e.checked && os(e, "checked", u, d.checked, !1));
  }
  return e;
}
function Pd(e, t, n) {
  try {
    typeof e == "function" ? e(t) : e.current = t;
  } catch (o) {
    pe.__e(o, n);
  }
}
function Hd(e, t, n) {
  var o, s;
  if (pe.unmount && pe.unmount(e), (o = e.ref) && (o.current && o.current !== e.__e || Pd(o, null, t)), (o = e.__c) != null) {
    if (o.componentWillUnmount)
      try {
        o.componentWillUnmount();
      } catch (r) {
        pe.__e(r, t);
      }
    o.base = o.__P = null, e.__c = void 0;
  }
  if (o = e.__k)
    for (s = 0; s < o.length; s++)
      o[s] && Hd(o[s], t, n || typeof e.type != "function");
  n || e.__e == null || Td(e.__e), e.__ = e.__e = e.__d = void 0;
}
function Yy(e, t, n) {
  return this.constructor(e, n);
}
Cd = Md.slice, pe = { __e: function(e, t, n, o) {
  for (var s, r, l; t = t.__; )
    if ((s = t.__c) && !s.__)
      try {
        if ((r = s.constructor) && r.getDerivedStateFromError != null && (s.setState(r.getDerivedStateFromError(e)), l = s.__d), s.componentDidCatch != null && (s.componentDidCatch(e, o || {}), l = s.__d), l)
          return s.__E = s;
      } catch (c) {
        e = c;
      }
  throw e;
} }, Ed = 0, Do.prototype.setState = function(e, t) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = Nt({}, this.state), typeof e == "function" && (e = e(Nt({}, n), this.props)), e && Nt(n, e), e != null && this.__v && (t && this._sb.push(t), z_(this));
}, Do.prototype.forceUpdate = function(e) {
  this.__v && (this.__e = !0, e && this.__h.push(e), z_(this));
}, Do.prototype.render = ta, Lo = [], ns.__r = 0;
var Gy = 0;
function Wd(e, t, n, o, s) {
  var r, l, c = {};
  for (l in t)
    l == "ref" ? r = t[l] : c[l] = t[l];
  var _ = { type: e, props: c, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: --Gy, __source: s, __self: o };
  if (typeof e == "function" && (r = e.defaultProps))
    for (l in r)
      c[l] === void 0 && (c[l] = r[l]);
  return pe.vnode && pe.vnode(_), _;
}
var na = "top", Id = "bottom", rs = "right", lr = "left", qy = "auto", Ud = [na, Id, rs, lr], Xy = "start", Ky = "end", Zy = /* @__PURE__ */ [].concat(Ud, [qy]).reduce(function(e, t) {
  return e.concat([t, t + "-" + Xy, t + "-" + Ky]);
}, []);
function Fd(e) {
  return e.split("-")[0];
}
function eo(e) {
  if (e == null)
    return window;
  if (e.toString() !== "[object Window]") {
    var t = e.ownerDocument;
    return t && t.defaultView || window;
  }
  return e;
}
function Bd(e) {
  var t = eo(e).Element;
  return e instanceof t || e instanceof Element;
}
function is(e) {
  var t = eo(e).HTMLElement;
  return e instanceof t || e instanceof HTMLElement;
}
function oa(e) {
  if (typeof ShadowRoot > "u")
    return !1;
  var t = eo(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot;
}
var Jy = Math.max, Qy = Math.min, X_ = Math.round;
function kc() {
  var e = navigator.userAgentData;
  return e != null && e.brands ? e.brands.map(function(t) {
    return t.brand + "/" + t.version;
  }).join(" ") : navigator.userAgent;
}
function eb() {
  return !/^((?!chrome|android).)*safari/i.test(kc());
}
function tb(e, t, n) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  var o = e.getBoundingClientRect(), s = 1, r = 1;
  t && is(e) && (s = e.offsetWidth > 0 && X_(o.width) / e.offsetWidth || 1, r = e.offsetHeight > 0 && X_(o.height) / e.offsetHeight || 1);
  var l = Bd(e) ? eo(e) : window, c = l.visualViewport, _ = !eb() && n, h = (o.left + (_ && c ? c.offsetLeft : 0)) / s, i = (o.top + (_ && c ? c.offsetTop : 0)) / r, d = o.width / s, f = o.height / r;
  return {
    width: d,
    height: f,
    top: i,
    right: h + d,
    bottom: i + f,
    left: h,
    x: h,
    y: i
  };
}
function nb(e) {
  var t = tb(e), n = e.offsetWidth, o = e.offsetHeight;
  return Math.abs(t.width - n) <= 1 && (n = t.width), Math.abs(t.height - o) <= 1 && (o = t.height), {
    x: e.offsetLeft,
    y: e.offsetTop,
    width: n,
    height: o
  };
}
function ob(e, t) {
  var n = t.getRootNode && t.getRootNode();
  if (e.contains(t))
    return !0;
  if (n && oa(n)) {
    var o = t;
    do {
      if (o && e.isSameNode(o))
        return !0;
      o = o.parentNode || o.host;
    } while (o);
  }
  return !1;
}
function cr(e) {
  return e ? (e.nodeName || "").toLowerCase() : null;
}
function ar(e) {
  return eo(e).getComputedStyle(e);
}
function rb(e) {
  return ["table", "td", "th"].indexOf(cr(e)) >= 0;
}
function ib(e) {
  return ((Bd(e) ? e.ownerDocument : (
    // $FlowFixMe[prop-missing]
    e.document
  )) || window.document).documentElement;
}
function sb(e) {
  return cr(e) === "html" ? e : (
    // this is a quicker (but less type safe) way to save quite some bytes from the bundle
    // $FlowFixMe[incompatible-return]
    // $FlowFixMe[prop-missing]
    e.assignedSlot || // step into the shadow DOM of the parent of a slotted node
    e.parentNode || // DOM Element detected
    (oa(e) ? e.host : null) || // ShadowRoot detected
    // $FlowFixMe[incompatible-call]: HTMLElement is a Node
    ib(e)
  );
}
function K_(e) {
  return !is(e) || // https://github.com/popperjs/popper-core/issues/837
  ar(e).position === "fixed" ? null : e.offsetParent;
}
function lb(e) {
  var t = /firefox/i.test(kc()), n = /Trident/i.test(kc());
  if (n && is(e)) {
    var o = ar(e);
    if (o.position === "fixed")
      return null;
  }
  var s = sb(e);
  for (oa(s) && (s = s.host); is(s) && ["html", "body"].indexOf(cr(s)) < 0; ) {
    var r = ar(s);
    if (r.transform !== "none" || r.perspective !== "none" || r.contain === "paint" || ["transform", "perspective"].indexOf(r.willChange) !== -1 || t && r.willChange === "filter" || t && r.filter && r.filter !== "none")
      return s;
    s = s.parentNode;
  }
  return null;
}
function cb(e) {
  for (var t = eo(e), n = K_(e); n && rb(n) && ar(n).position === "static"; )
    n = K_(n);
  return n && (cr(n) === "html" || cr(n) === "body" && ar(n).position === "static") ? t : n || lb(e) || t;
}
function ab(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function _b(e, t, n) {
  return Jy(e, Qy(t, n));
}
function fb() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
function ub(e) {
  return Object.assign({}, fb(), e);
}
function hb(e, t) {
  return t.reduce(function(n, o) {
    return n[o] = e, n;
  }, {});
}
var db = function(t, n) {
  return t = typeof t == "function" ? t(Object.assign({}, n.rects, {
    placement: n.placement
  })) : t, ub(typeof t != "number" ? t : hb(t, Ud));
};
function pb(e) {
  var t, n = e.state, o = e.name, s = e.options, r = n.elements.arrow, l = n.modifiersData.popperOffsets, c = Fd(n.placement), _ = ab(c), h = [lr, rs].indexOf(c) >= 0, i = h ? "height" : "width";
  if (!(!r || !l)) {
    var d = db(s.padding, n), f = nb(r), a = _ === "y" ? na : lr, u = _ === "y" ? Id : rs, y = n.rects.reference[i] + n.rects.reference[_] - l[_] - n.rects.popper[i], p = l[_] - n.rects.reference[_], m = cb(r), g = m ? _ === "y" ? m.clientHeight || 0 : m.clientWidth || 0 : 0, $ = y / 2 - p / 2, w = d[a], S = g - f[i] - d[u], C = g / 2 - f[i] / 2 + $, A = _b(w, C, S), v = _;
    n.modifiersData[o] = (t = {}, t[v] = A, t.centerOffset = A - C, t);
  }
}
function mb(e) {
  var t = e.state, n = e.options, o = n.element, s = o === void 0 ? "[data-popper-arrow]" : o;
  s != null && (typeof s == "string" && (s = t.elements.popper.querySelector(s), !s) || ob(t.elements.popper, s) && (t.elements.arrow = s));
}
const gb = {
  name: "arrow",
  enabled: !0,
  phase: "main",
  fn: pb,
  effect: mb,
  requires: ["popperOffsets"],
  requiresIfExists: ["preventOverflow"]
};
function vb(e, t, n) {
  var o = Fd(e), s = [lr, na].indexOf(o) >= 0 ? -1 : 1, r = typeof n == "function" ? n(Object.assign({}, t, {
    placement: e
  })) : n, l = r[0], c = r[1];
  return l = l || 0, c = (c || 0) * s, [lr, rs].indexOf(o) >= 0 ? {
    x: c,
    y: l
  } : {
    x: l,
    y: c
  };
}
function yb(e) {
  var t = e.state, n = e.options, o = e.name, s = n.offset, r = s === void 0 ? [0, 0] : s, l = Zy.reduce(function(i, d) {
    return i[d] = vb(d, t.rects, r), i;
  }, {}), c = l[t.placement], _ = c.x, h = c.y;
  t.modifiersData.popperOffsets != null && (t.modifiersData.popperOffsets.x += _, t.modifiersData.popperOffsets.y += h), t.modifiersData[o] = l;
}
const bb = {
  name: "offset",
  enabled: !0,
  phase: "main",
  requires: ["popperOffsets"],
  fn: yb
};
var Fl, ce, jd, No, Z_, ss = {}, Vd = [], wb = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function Rt(e, t) {
  for (var n in t)
    e[n] = t[n];
  return e;
}
function zd(e) {
  var t = e.parentNode;
  t && t.removeChild(e);
}
function Yd(e, t, n) {
  var o, s, r, l = {};
  for (r in t)
    r == "key" ? o = t[r] : r == "ref" ? s = t[r] : l[r] = t[r];
  if (arguments.length > 2 && (l.children = arguments.length > 3 ? Fl.call(arguments, 2) : n), typeof e == "function" && e.defaultProps != null)
    for (r in e.defaultProps)
      l[r] === void 0 && (l[r] = e.defaultProps[r]);
  return wi(e, l, o, s, null);
}
function wi(e, t, n, o, s) {
  var r = { type: e, props: t, key: n, ref: o, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: s ?? ++jd };
  return s == null && ce.vnode != null && ce.vnode(r), r;
}
function Bl(e) {
  return e.children;
}
function $i(e, t) {
  this.props = e, this.context = t;
}
function _r(e, t) {
  if (t == null)
    return e.__ ? _r(e.__, e.__.__k.indexOf(e) + 1) : null;
  for (var n; t < e.__k.length; t++)
    if ((n = e.__k[t]) != null && n.__e != null)
      return n.__e;
  return typeof e.type == "function" ? _r(e) : null;
}
function Gd(e) {
  var t, n;
  if ((e = e.__) != null && e.__c != null) {
    for (e.__e = e.__c.base = null, t = 0; t < e.__k.length; t++)
      if ((n = e.__k[t]) != null && n.__e != null) {
        e.__e = e.__c.base = n.__e;
        break;
      }
    return Gd(e);
  }
}
function J_(e) {
  (!e.__d && (e.__d = !0) && No.push(e) && !ls.__r++ || Z_ !== ce.debounceRendering) && ((Z_ = ce.debounceRendering) || setTimeout)(ls);
}
function ls() {
  for (var e; ls.__r = No.length; )
    e = No.sort(function(t, n) {
      return t.__v.__b - n.__v.__b;
    }), No = [], e.some(function(t) {
      var n, o, s, r, l, c;
      t.__d && (l = (r = (n = t).__v).__e, (c = n.__P) && (o = [], (s = Rt({}, r)).__v = r.__v + 1, ra(c, r, s, n.__n, c.ownerSVGElement !== void 0, r.__h != null ? [l] : null, o, l ?? _r(r), r.__h), Zd(o, r), r.__e != l && Gd(r)));
    });
}
function qd(e, t, n, o, s, r, l, c, _, h) {
  var i, d, f, a, u, y, p, m = o && o.__k || Vd, g = m.length;
  for (n.__k = [], i = 0; i < t.length; i++)
    if ((a = n.__k[i] = (a = t[i]) == null || typeof a == "boolean" ? null : typeof a == "string" || typeof a == "number" || typeof a == "bigint" ? wi(null, a, null, null, a) : Array.isArray(a) ? wi(Bl, { children: a }, null, null, null) : a.__b > 0 ? wi(a.type, a.props, a.key, a.ref ? a.ref : null, a.__v) : a) != null) {
      if (a.__ = n, a.__b = n.__b + 1, (f = m[i]) === null || f && a.key == f.key && a.type === f.type)
        m[i] = void 0;
      else
        for (d = 0; d < g; d++) {
          if ((f = m[d]) && a.key == f.key && a.type === f.type) {
            m[d] = void 0;
            break;
          }
          f = null;
        }
      ra(e, a, f = f || ss, s, r, l, c, _, h), u = a.__e, (d = a.ref) && f.ref != d && (p || (p = []), f.ref && p.push(f.ref, null, a), p.push(d, a.__c || u, a)), u != null ? (y == null && (y = u), typeof a.type == "function" && a.__k === f.__k ? a.__d = _ = Xd(a, _, e) : _ = Kd(e, a, f, m, u, _), typeof n.type == "function" && (n.__d = _)) : _ && f.__e == _ && _.parentNode != e && (_ = _r(f));
    }
  for (n.__e = y, i = g; i--; )
    m[i] != null && Qd(m[i], m[i]);
  if (p)
    for (i = 0; i < p.length; i++)
      Jd(p[i], p[++i], p[++i]);
}
function Xd(e, t, n) {
  for (var o, s = e.__k, r = 0; s && r < s.length; r++)
    (o = s[r]) && (o.__ = e, t = typeof o.type == "function" ? Xd(o, t, n) : Kd(n, o, o, s, o.__e, t));
  return t;
}
function Kd(e, t, n, o, s, r) {
  var l, c, _;
  if (t.__d !== void 0)
    l = t.__d, t.__d = void 0;
  else if (n == null || s != r || s.parentNode == null)
    e:
      if (r == null || r.parentNode !== e)
        e.appendChild(s), l = null;
      else {
        for (c = r, _ = 0; (c = c.nextSibling) && _ < o.length; _ += 2)
          if (c == s)
            break e;
        e.insertBefore(s, r), l = r;
      }
  return l !== void 0 ? l : s.nextSibling;
}
function $b(e, t, n, o, s) {
  var r;
  for (r in n)
    r === "children" || r === "key" || r in t || cs(e, r, null, n[r], o);
  for (r in t)
    s && typeof t[r] != "function" || r === "children" || r === "key" || r === "value" || r === "checked" || n[r] === t[r] || cs(e, r, t[r], n[r], o);
}
function Q_(e, t, n) {
  t[0] === "-" ? e.setProperty(t, n) : e[t] = n == null ? "" : typeof n != "number" || wb.test(t) ? n : n + "px";
}
function cs(e, t, n, o, s) {
  var r;
  e:
    if (t === "style")
      if (typeof n == "string")
        e.style.cssText = n;
      else {
        if (typeof o == "string" && (e.style.cssText = o = ""), o)
          for (t in o)
            n && t in n || Q_(e.style, t, "");
        if (n)
          for (t in n)
            o && n[t] === o[t] || Q_(e.style, t, n[t]);
      }
    else if (t[0] === "o" && t[1] === "n")
      r = t !== (t = t.replace(/Capture$/, "")), t = t.toLowerCase() in e ? t.toLowerCase().slice(2) : t.slice(2), e.l || (e.l = {}), e.l[t + r] = n, n ? o || e.addEventListener(t, r ? tf : ef, r) : e.removeEventListener(t, r ? tf : ef, r);
    else if (t !== "dangerouslySetInnerHTML") {
      if (s)
        t = t.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
      else if (t !== "href" && t !== "list" && t !== "form" && t !== "tabIndex" && t !== "download" && t in e)
        try {
          e[t] = n ?? "";
          break e;
        } catch {
        }
      typeof n == "function" || (n == null || n === !1 && t.indexOf("-") == -1 ? e.removeAttribute(t) : e.setAttribute(t, n));
    }
}
function ef(e) {
  this.l[e.type + !1](ce.event ? ce.event(e) : e);
}
function tf(e) {
  this.l[e.type + !0](ce.event ? ce.event(e) : e);
}
function ra(e, t, n, o, s, r, l, c, _) {
  var h, i, d, f, a, u, y, p, m, g, $, w, S, C, A, v = t.type;
  if (t.constructor !== void 0)
    return null;
  n.__h != null && (_ = n.__h, c = t.__e = n.__e, t.__h = null, r = [c]), (h = ce.__b) && h(t);
  try {
    e:
      if (typeof v == "function") {
        if (p = t.props, m = (h = v.contextType) && o[h.__c], g = h ? m ? m.props.value : h.__ : o, n.__c ? y = (i = t.__c = n.__c).__ = i.__E : ("prototype" in v && v.prototype.render ? t.__c = i = new v(p, g) : (t.__c = i = new $i(p, g), i.constructor = v, i.render = xb), m && m.sub(i), i.props = p, i.state || (i.state = {}), i.context = g, i.__n = o, d = i.__d = !0, i.__h = [], i._sb = []), i.__s == null && (i.__s = i.state), v.getDerivedStateFromProps != null && (i.__s == i.state && (i.__s = Rt({}, i.__s)), Rt(i.__s, v.getDerivedStateFromProps(p, i.__s))), f = i.props, a = i.state, d)
          v.getDerivedStateFromProps == null && i.componentWillMount != null && i.componentWillMount(), i.componentDidMount != null && i.__h.push(i.componentDidMount);
        else {
          if (v.getDerivedStateFromProps == null && p !== f && i.componentWillReceiveProps != null && i.componentWillReceiveProps(p, g), !i.__e && i.shouldComponentUpdate != null && i.shouldComponentUpdate(p, i.__s, g) === !1 || t.__v === n.__v) {
            for (i.props = p, i.state = i.__s, t.__v !== n.__v && (i.__d = !1), i.__v = t, t.__e = n.__e, t.__k = n.__k, t.__k.forEach(function(k) {
              k && (k.__ = t);
            }), $ = 0; $ < i._sb.length; $++)
              i.__h.push(i._sb[$]);
            i._sb = [], i.__h.length && l.push(i);
            break e;
          }
          i.componentWillUpdate != null && i.componentWillUpdate(p, i.__s, g), i.componentDidUpdate != null && i.__h.push(function() {
            i.componentDidUpdate(f, a, u);
          });
        }
        if (i.context = g, i.props = p, i.__v = t, i.__P = e, w = ce.__r, S = 0, "prototype" in v && v.prototype.render) {
          for (i.state = i.__s, i.__d = !1, w && w(t), h = i.render(i.props, i.state, i.context), C = 0; C < i._sb.length; C++)
            i.__h.push(i._sb[C]);
          i._sb = [];
        } else
          do
            i.__d = !1, w && w(t), h = i.render(i.props, i.state, i.context), i.state = i.__s;
          while (i.__d && ++S < 25);
        i.state = i.__s, i.getChildContext != null && (o = Rt(Rt({}, o), i.getChildContext())), d || i.getSnapshotBeforeUpdate == null || (u = i.getSnapshotBeforeUpdate(f, a)), A = h != null && h.type === Bl && h.key == null ? h.props.children : h, qd(e, Array.isArray(A) ? A : [A], t, n, o, s, r, l, c, _), i.base = t.__e, t.__h = null, i.__h.length && l.push(i), y && (i.__E = i.__ = null), i.__e = !1;
      } else
        r == null && t.__v === n.__v ? (t.__k = n.__k, t.__e = n.__e) : t.__e = kb(n.__e, t, n, o, s, r, l, _);
    (h = ce.diffed) && h(t);
  } catch (k) {
    t.__v = null, (_ || r != null) && (t.__e = c, t.__h = !!_, r[r.indexOf(c)] = null), ce.__e(k, t, n);
  }
}
function Zd(e, t) {
  ce.__c && ce.__c(t, e), e.some(function(n) {
    try {
      e = n.__h, n.__h = [], e.some(function(o) {
        o.call(n);
      });
    } catch (o) {
      ce.__e(o, n.__v);
    }
  });
}
function kb(e, t, n, o, s, r, l, c) {
  var _, h, i, d = n.props, f = t.props, a = t.type, u = 0;
  if (a === "svg" && (s = !0), r != null) {
    for (; u < r.length; u++)
      if ((_ = r[u]) && "setAttribute" in _ == !!a && (a ? _.localName === a : _.nodeType === 3)) {
        e = _, r[u] = null;
        break;
      }
  }
  if (e == null) {
    if (a === null)
      return document.createTextNode(f);
    e = s ? document.createElementNS("http://www.w3.org/2000/svg", a) : document.createElement(a, f.is && f), r = null, c = !1;
  }
  if (a === null)
    d === f || c && e.data === f || (e.data = f);
  else {
    if (r = r && Fl.call(e.childNodes), h = (d = n.props || ss).dangerouslySetInnerHTML, i = f.dangerouslySetInnerHTML, !c) {
      if (r != null)
        for (d = {}, u = 0; u < e.attributes.length; u++)
          d[e.attributes[u].name] = e.attributes[u].value;
      (i || h) && (i && (h && i.__html == h.__html || i.__html === e.innerHTML) || (e.innerHTML = i && i.__html || ""));
    }
    if ($b(e, f, d, s, c), i)
      t.__k = [];
    else if (u = t.props.children, qd(e, Array.isArray(u) ? u : [u], t, n, o, s && a !== "foreignObject", r, l, r ? r[0] : n.__k && _r(n, 0), c), r != null)
      for (u = r.length; u--; )
        r[u] != null && zd(r[u]);
    c || ("value" in f && (u = f.value) !== void 0 && (u !== e.value || a === "progress" && !u || a === "option" && u !== d.value) && cs(e, "value", u, d.value, !1), "checked" in f && (u = f.checked) !== void 0 && u !== e.checked && cs(e, "checked", u, d.checked, !1));
  }
  return e;
}
function Jd(e, t, n) {
  try {
    typeof e == "function" ? e(t) : e.current = t;
  } catch (o) {
    ce.__e(o, n);
  }
}
function Qd(e, t, n) {
  var o, s;
  if (ce.unmount && ce.unmount(e), (o = e.ref) && (o.current && o.current !== e.__e || Jd(o, null, t)), (o = e.__c) != null) {
    if (o.componentWillUnmount)
      try {
        o.componentWillUnmount();
      } catch (r) {
        ce.__e(r, t);
      }
    o.base = o.__P = null, e.__c = void 0;
  }
  if (o = e.__k)
    for (s = 0; s < o.length; s++)
      o[s] && Qd(o[s], t, n || typeof e.type != "function");
  n || e.__e == null || zd(e.__e), e.__ = e.__e = e.__d = void 0;
}
function xb(e, t, n) {
  return this.constructor(e, n);
}
function Sb(e, t, n) {
  var o, s, r;
  ce.__ && ce.__(e, t), s = (o = typeof n == "function") ? null : n && n.__k || t.__k, r = [], ra(t, e = (!o && n || t).__k = Yd(Bl, null, [e]), s || ss, ss, t.ownerSVGElement !== void 0, !o && n ? [n] : s ? null : t.firstChild ? Fl.call(t.childNodes) : null, r, !o && n ? n : s ? s.__e : t.firstChild, o), Zd(r, e);
}
Fl = Vd.slice, ce = { __e: function(e, t, n, o) {
  for (var s, r, l; t = t.__; )
    if ((s = t.__c) && !s.__)
      try {
        if ((r = s.constructor) && r.getDerivedStateFromError != null && (s.setState(r.getDerivedStateFromError(e)), l = s.__d), s.componentDidCatch != null && (s.componentDidCatch(e, o || {}), l = s.__d), l)
          return s.__E = s;
      } catch (c) {
        e = c;
      }
  throw e;
} }, jd = 0, $i.prototype.setState = function(e, t) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = Rt({}, this.state), typeof e == "function" && (e = e(Rt({}, n), this.props)), e && Rt(n, e), e != null && this.__v && (t && this._sb.push(t), J_(this));
}, $i.prototype.forceUpdate = function(e) {
  this.__v && (this.__e = !0, e && this.__h.push(e), J_(this));
}, $i.prototype.render = Bl, No = [], ls.__r = 0;
function Be(e) {
  if (e == null)
    return window;
  if (e.toString() !== "[object Window]") {
    var t = e.ownerDocument;
    return t && t.defaultView || window;
  }
  return e;
}
function hn(e) {
  var t = Be(e).Element;
  return e instanceof t || e instanceof Element;
}
function Fe(e) {
  var t = Be(e).HTMLElement;
  return e instanceof t || e instanceof HTMLElement;
}
function ia(e) {
  if (typeof ShadowRoot > "u")
    return !1;
  var t = Be(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot;
}
var un = Math.max, as = Math.min, Gn = Math.round;
function xc() {
  var e = navigator.userAgentData;
  return e != null && e.brands ? e.brands.map(function(t) {
    return t.brand + "/" + t.version;
  }).join(" ") : navigator.userAgent;
}
function ep() {
  return !/^((?!chrome|android).)*safari/i.test(xc());
}
function qn(e, t, n) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  var o = e.getBoundingClientRect(), s = 1, r = 1;
  t && Fe(e) && (s = e.offsetWidth > 0 && Gn(o.width) / e.offsetWidth || 1, r = e.offsetHeight > 0 && Gn(o.height) / e.offsetHeight || 1);
  var l = hn(e) ? Be(e) : window, c = l.visualViewport, _ = !ep() && n, h = (o.left + (_ && c ? c.offsetLeft : 0)) / s, i = (o.top + (_ && c ? c.offsetTop : 0)) / r, d = o.width / s, f = o.height / r;
  return {
    width: d,
    height: f,
    top: i,
    right: h + d,
    bottom: i + f,
    left: h,
    x: h,
    y: i
  };
}
function sa(e) {
  var t = Be(e), n = t.pageXOffset, o = t.pageYOffset;
  return {
    scrollLeft: n,
    scrollTop: o
  };
}
function Cb(e) {
  return {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  };
}
function Eb(e) {
  return e === Be(e) || !Fe(e) ? sa(e) : Cb(e);
}
function tt(e) {
  return e ? (e.nodeName || "").toLowerCase() : null;
}
function Jt(e) {
  return ((hn(e) ? e.ownerDocument : (
    // $FlowFixMe[prop-missing]
    e.document
  )) || window.document).documentElement;
}
function la(e) {
  return qn(Jt(e)).left + sa(e).scrollLeft;
}
function ht(e) {
  return Be(e).getComputedStyle(e);
}
function ca(e) {
  var t = ht(e), n = t.overflow, o = t.overflowX, s = t.overflowY;
  return /auto|scroll|overlay|hidden/.test(n + s + o);
}
function Ab(e) {
  var t = e.getBoundingClientRect(), n = Gn(t.width) / e.offsetWidth || 1, o = Gn(t.height) / e.offsetHeight || 1;
  return n !== 1 || o !== 1;
}
function Mb(e, t, n) {
  n === void 0 && (n = !1);
  var o = Fe(t), s = Fe(t) && Ab(t), r = Jt(t), l = qn(e, s, n), c = {
    scrollLeft: 0,
    scrollTop: 0
  }, _ = {
    x: 0,
    y: 0
  };
  return (o || !o && !n) && ((tt(t) !== "body" || // https://github.com/popperjs/popper-core/issues/1078
  ca(r)) && (c = Eb(t)), Fe(t) ? (_ = qn(t, !0), _.x += t.clientLeft, _.y += t.clientTop) : r && (_.x = la(r))), {
    x: l.left + c.scrollLeft - _.x,
    y: l.top + c.scrollTop - _.y,
    width: l.width,
    height: l.height
  };
}
function tp(e) {
  var t = qn(e), n = e.offsetWidth, o = e.offsetHeight;
  return Math.abs(t.width - n) <= 1 && (n = t.width), Math.abs(t.height - o) <= 1 && (o = t.height), {
    x: e.offsetLeft,
    y: e.offsetTop,
    width: n,
    height: o
  };
}
function jl(e) {
  return tt(e) === "html" ? e : (
    // this is a quicker (but less type safe) way to save quite some bytes from the bundle
    // $FlowFixMe[incompatible-return]
    // $FlowFixMe[prop-missing]
    e.assignedSlot || // step into the shadow DOM of the parent of a slotted node
    e.parentNode || // DOM Element detected
    (ia(e) ? e.host : null) || // ShadowRoot detected
    // $FlowFixMe[incompatible-call]: HTMLElement is a Node
    Jt(e)
  );
}
function np(e) {
  return ["html", "body", "#document"].indexOf(tt(e)) >= 0 ? e.ownerDocument.body : Fe(e) && ca(e) ? e : np(jl(e));
}
function Ro(e, t) {
  var n;
  t === void 0 && (t = []);
  var o = np(e), s = o === ((n = e.ownerDocument) == null ? void 0 : n.body), r = Be(o), l = s ? [r].concat(r.visualViewport || [], ca(o) ? o : []) : o, c = t.concat(l);
  return s ? c : (
    // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
    c.concat(Ro(jl(l)))
  );
}
function Tb(e) {
  return ["table", "td", "th"].indexOf(tt(e)) >= 0;
}
function nf(e) {
  return !Fe(e) || // https://github.com/popperjs/popper-core/issues/837
  ht(e).position === "fixed" ? null : e.offsetParent;
}
function Lb(e) {
  var t = /firefox/i.test(xc()), n = /Trident/i.test(xc());
  if (n && Fe(e)) {
    var o = ht(e);
    if (o.position === "fixed")
      return null;
  }
  var s = jl(e);
  for (ia(s) && (s = s.host); Fe(s) && ["html", "body"].indexOf(tt(s)) < 0; ) {
    var r = ht(s);
    if (r.transform !== "none" || r.perspective !== "none" || r.contain === "paint" || ["transform", "perspective"].indexOf(r.willChange) !== -1 || t && r.willChange === "filter" || t && r.filter && r.filter !== "none")
      return s;
    s = s.parentNode;
  }
  return null;
}
function Vl(e) {
  for (var t = Be(e), n = nf(e); n && Tb(n) && ht(n).position === "static"; )
    n = nf(n);
  return n && (tt(n) === "html" || tt(n) === "body" && ht(n).position === "static") ? t : n || Lb(e) || t;
}
var Ve = "top", nt = "bottom", Yt = "right", ft = "left", aa = "auto", zl = [Ve, nt, Yt, ft], Xn = "start", fr = "end", Db = "clippingParents", op = "viewport", ro = "popper", Nb = "reference", of = /* @__PURE__ */ zl.reduce(function(e, t) {
  return e.concat([t + "-" + Xn, t + "-" + fr]);
}, []), Rb = /* @__PURE__ */ [].concat(zl, [aa]).reduce(function(e, t) {
  return e.concat([t, t + "-" + Xn, t + "-" + fr]);
}, []), Ob = "beforeRead", Pb = "read", Hb = "afterRead", Wb = "beforeMain", Ib = "main", Ub = "afterMain", Fb = "beforeWrite", Bb = "write", jb = "afterWrite", Vb = [Ob, Pb, Hb, Wb, Ib, Ub, Fb, Bb, jb];
function zb(e) {
  var t = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Set(), o = [];
  e.forEach(function(r) {
    t.set(r.name, r);
  });
  function s(r) {
    n.add(r.name);
    var l = [].concat(r.requires || [], r.requiresIfExists || []);
    l.forEach(function(c) {
      if (!n.has(c)) {
        var _ = t.get(c);
        _ && s(_);
      }
    }), o.push(r);
  }
  return e.forEach(function(r) {
    n.has(r.name) || s(r);
  }), o;
}
function Yb(e) {
  var t = zb(e);
  return Vb.reduce(function(n, o) {
    return n.concat(t.filter(function(s) {
      return s.phase === o;
    }));
  }, []);
}
function Gb(e) {
  var t;
  return function() {
    return t || (t = new Promise(function(n) {
      Promise.resolve().then(function() {
        t = void 0, n(e());
      });
    })), t;
  };
}
function Ut(e) {
  return e.split("-")[0];
}
function qb(e) {
  var t = e.reduce(function(n, o) {
    var s = n[o.name];
    return n[o.name] = s ? Object.assign({}, s, o, {
      options: Object.assign({}, s.options, o.options),
      data: Object.assign({}, s.data, o.data)
    }) : o, n;
  }, {});
  return Object.keys(t).map(function(n) {
    return t[n];
  });
}
function Xb(e, t) {
  var n = Be(e), o = Jt(e), s = n.visualViewport, r = o.clientWidth, l = o.clientHeight, c = 0, _ = 0;
  if (s) {
    r = s.width, l = s.height;
    var h = ep();
    (h || !h && t === "fixed") && (c = s.offsetLeft, _ = s.offsetTop);
  }
  return {
    width: r,
    height: l,
    x: c + la(e),
    y: _
  };
}
function Kb(e) {
  var t, n = Jt(e), o = sa(e), s = (t = e.ownerDocument) == null ? void 0 : t.body, r = un(n.scrollWidth, n.clientWidth, s ? s.scrollWidth : 0, s ? s.clientWidth : 0), l = un(n.scrollHeight, n.clientHeight, s ? s.scrollHeight : 0, s ? s.clientHeight : 0), c = -o.scrollLeft + la(e), _ = -o.scrollTop;
  return ht(s || n).direction === "rtl" && (c += un(n.clientWidth, s ? s.clientWidth : 0) - r), {
    width: r,
    height: l,
    x: c,
    y: _
  };
}
function Zb(e, t) {
  var n = t.getRootNode && t.getRootNode();
  if (e.contains(t))
    return !0;
  if (n && ia(n)) {
    var o = t;
    do {
      if (o && e.isSameNode(o))
        return !0;
      o = o.parentNode || o.host;
    } while (o);
  }
  return !1;
}
function Sc(e) {
  return Object.assign({}, e, {
    left: e.x,
    top: e.y,
    right: e.x + e.width,
    bottom: e.y + e.height
  });
}
function Jb(e, t) {
  var n = qn(e, !1, t === "fixed");
  return n.top = n.top + e.clientTop, n.left = n.left + e.clientLeft, n.bottom = n.top + e.clientHeight, n.right = n.left + e.clientWidth, n.width = e.clientWidth, n.height = e.clientHeight, n.x = n.left, n.y = n.top, n;
}
function rf(e, t, n) {
  return t === op ? Sc(Xb(e, n)) : hn(t) ? Jb(t, n) : Sc(Kb(Jt(e)));
}
function Qb(e) {
  var t = Ro(jl(e)), n = ["absolute", "fixed"].indexOf(ht(e).position) >= 0, o = n && Fe(e) ? Vl(e) : e;
  return hn(o) ? t.filter(function(s) {
    return hn(s) && Zb(s, o) && tt(s) !== "body";
  }) : [];
}
function e0(e, t, n, o) {
  var s = t === "clippingParents" ? Qb(e) : [].concat(t), r = [].concat(s, [n]), l = r[0], c = r.reduce(function(_, h) {
    var i = rf(e, h, o);
    return _.top = un(i.top, _.top), _.right = as(i.right, _.right), _.bottom = as(i.bottom, _.bottom), _.left = un(i.left, _.left), _;
  }, rf(e, l, o));
  return c.width = c.right - c.left, c.height = c.bottom - c.top, c.x = c.left, c.y = c.top, c;
}
function Kn(e) {
  return e.split("-")[1];
}
function rp(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function ip(e) {
  var t = e.reference, n = e.element, o = e.placement, s = o ? Ut(o) : null, r = o ? Kn(o) : null, l = t.x + t.width / 2 - n.width / 2, c = t.y + t.height / 2 - n.height / 2, _;
  switch (s) {
    case Ve:
      _ = {
        x: l,
        y: t.y - n.height
      };
      break;
    case nt:
      _ = {
        x: l,
        y: t.y + t.height
      };
      break;
    case Yt:
      _ = {
        x: t.x + t.width,
        y: c
      };
      break;
    case ft:
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
  var h = s ? rp(s) : null;
  if (h != null) {
    var i = h === "y" ? "height" : "width";
    switch (r) {
      case Xn:
        _[h] = _[h] - (t[i] / 2 - n[i] / 2);
        break;
      case fr:
        _[h] = _[h] + (t[i] / 2 - n[i] / 2);
        break;
    }
  }
  return _;
}
function sp() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
function t0(e) {
  return Object.assign({}, sp(), e);
}
function n0(e, t) {
  return t.reduce(function(n, o) {
    return n[o] = e, n;
  }, {});
}
function _a(e, t) {
  t === void 0 && (t = {});
  var n = t, o = n.placement, s = o === void 0 ? e.placement : o, r = n.strategy, l = r === void 0 ? e.strategy : r, c = n.boundary, _ = c === void 0 ? Db : c, h = n.rootBoundary, i = h === void 0 ? op : h, d = n.elementContext, f = d === void 0 ? ro : d, a = n.altBoundary, u = a === void 0 ? !1 : a, y = n.padding, p = y === void 0 ? 0 : y, m = t0(typeof p != "number" ? p : n0(p, zl)), g = f === ro ? Nb : ro, $ = e.rects.popper, w = e.elements[u ? g : f], S = e0(hn(w) ? w : w.contextElement || Jt(e.elements.popper), _, i, l), C = qn(e.elements.reference), A = ip({
    reference: C,
    element: $,
    strategy: "absolute",
    placement: s
  }), v = Sc(Object.assign({}, $, A)), k = f === ro ? v : C, L = {
    top: S.top - k.top + m.top,
    bottom: k.bottom - S.bottom + m.bottom,
    left: S.left - k.left + m.left,
    right: k.right - S.right + m.right
  }, j = e.modifiersData.offset;
  if (f === ro && j) {
    var F = j[s];
    Object.keys(L).forEach(function(D) {
      var E = [Yt, nt].indexOf(D) >= 0 ? 1 : -1, x = [Ve, nt].indexOf(D) >= 0 ? "y" : "x";
      L[D] += F[x] * E;
    });
  }
  return L;
}
var sf = {
  placement: "bottom",
  modifiers: [],
  strategy: "absolute"
};
function lf() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return !t.some(function(o) {
    return !(o && typeof o.getBoundingClientRect == "function");
  });
}
function o0(e) {
  e === void 0 && (e = {});
  var t = e, n = t.defaultModifiers, o = n === void 0 ? [] : n, s = t.defaultOptions, r = s === void 0 ? sf : s;
  return function(c, _, h) {
    h === void 0 && (h = r);
    var i = {
      placement: "bottom",
      orderedModifiers: [],
      options: Object.assign({}, sf, r),
      modifiersData: {},
      elements: {
        reference: c,
        popper: _
      },
      attributes: {},
      styles: {}
    }, d = [], f = !1, a = {
      state: i,
      setOptions: function(m) {
        var g = typeof m == "function" ? m(i.options) : m;
        y(), i.options = Object.assign({}, r, i.options, g), i.scrollParents = {
          reference: hn(c) ? Ro(c) : c.contextElement ? Ro(c.contextElement) : [],
          popper: Ro(_)
        };
        var $ = Yb(qb([].concat(o, i.options.modifiers)));
        return i.orderedModifiers = $.filter(function(w) {
          return w.enabled;
        }), u(), a.update();
      },
      // Sync update – it will always be executed, even if not necessary. This
      // is useful for low frequency updates where sync behavior simplifies the
      // logic.
      // For high frequency updates (e.g. `resize` and `scroll` events), always
      // prefer the async Popper#update method
      forceUpdate: function() {
        if (!f) {
          var m = i.elements, g = m.reference, $ = m.popper;
          if (lf(g, $)) {
            i.rects = {
              reference: Mb(g, Vl($), i.options.strategy === "fixed"),
              popper: tp($)
            }, i.reset = !1, i.placement = i.options.placement, i.orderedModifiers.forEach(function(L) {
              return i.modifiersData[L.name] = Object.assign({}, L.data);
            });
            for (var w = 0; w < i.orderedModifiers.length; w++) {
              if (i.reset === !0) {
                i.reset = !1, w = -1;
                continue;
              }
              var S = i.orderedModifiers[w], C = S.fn, A = S.options, v = A === void 0 ? {} : A, k = S.name;
              typeof C == "function" && (i = C({
                state: i,
                options: v,
                name: k,
                instance: a
              }) || i);
            }
          }
        }
      },
      // Async and optimistically optimized update – it will not be executed if
      // not necessary (debounced to run at most once-per-tick)
      update: Gb(function() {
        return new Promise(function(p) {
          a.forceUpdate(), p(i);
        });
      }),
      destroy: function() {
        y(), f = !0;
      }
    };
    if (!lf(c, _))
      return a;
    a.setOptions(h).then(function(p) {
      !f && h.onFirstUpdate && h.onFirstUpdate(p);
    });
    function u() {
      i.orderedModifiers.forEach(function(p) {
        var m = p.name, g = p.options, $ = g === void 0 ? {} : g, w = p.effect;
        if (typeof w == "function") {
          var S = w({
            state: i,
            name: m,
            instance: a,
            options: $
          }), C = function() {
          };
          d.push(S || C);
        }
      });
    }
    function y() {
      d.forEach(function(p) {
        return p();
      }), d = [];
    }
    return a;
  };
}
var ii = {
  passive: !0
};
function r0(e) {
  var t = e.state, n = e.instance, o = e.options, s = o.scroll, r = s === void 0 ? !0 : s, l = o.resize, c = l === void 0 ? !0 : l, _ = Be(t.elements.popper), h = [].concat(t.scrollParents.reference, t.scrollParents.popper);
  return r && h.forEach(function(i) {
    i.addEventListener("scroll", n.update, ii);
  }), c && _.addEventListener("resize", n.update, ii), function() {
    r && h.forEach(function(i) {
      i.removeEventListener("scroll", n.update, ii);
    }), c && _.removeEventListener("resize", n.update, ii);
  };
}
const i0 = {
  name: "eventListeners",
  enabled: !0,
  phase: "write",
  fn: function() {
  },
  effect: r0,
  data: {}
};
function s0(e) {
  var t = e.state, n = e.name;
  t.modifiersData[n] = ip({
    reference: t.rects.reference,
    element: t.rects.popper,
    strategy: "absolute",
    placement: t.placement
  });
}
const l0 = {
  name: "popperOffsets",
  enabled: !0,
  phase: "read",
  fn: s0,
  data: {}
};
var c0 = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function a0(e) {
  var t = e.x, n = e.y, o = window, s = o.devicePixelRatio || 1;
  return {
    x: Gn(t * s) / s || 0,
    y: Gn(n * s) / s || 0
  };
}
function cf(e) {
  var t, n = e.popper, o = e.popperRect, s = e.placement, r = e.variation, l = e.offsets, c = e.position, _ = e.gpuAcceleration, h = e.adaptive, i = e.roundOffsets, d = e.isFixed, f = l.x, a = f === void 0 ? 0 : f, u = l.y, y = u === void 0 ? 0 : u, p = typeof i == "function" ? i({
    x: a,
    y
  }) : {
    x: a,
    y
  };
  a = p.x, y = p.y;
  var m = l.hasOwnProperty("x"), g = l.hasOwnProperty("y"), $ = ft, w = Ve, S = window;
  if (h) {
    var C = Vl(n), A = "clientHeight", v = "clientWidth";
    if (C === Be(n) && (C = Jt(n), ht(C).position !== "static" && c === "absolute" && (A = "scrollHeight", v = "scrollWidth")), C = C, s === Ve || (s === ft || s === Yt) && r === fr) {
      w = nt;
      var k = d && C === S && S.visualViewport ? S.visualViewport.height : (
        // $FlowFixMe[prop-missing]
        C[A]
      );
      y -= k - o.height, y *= _ ? 1 : -1;
    }
    if (s === ft || (s === Ve || s === nt) && r === fr) {
      $ = Yt;
      var L = d && C === S && S.visualViewport ? S.visualViewport.width : (
        // $FlowFixMe[prop-missing]
        C[v]
      );
      a -= L - o.width, a *= _ ? 1 : -1;
    }
  }
  var j = Object.assign({
    position: c
  }, h && c0), F = i === !0 ? a0({
    x: a,
    y
  }) : {
    x: a,
    y
  };
  if (a = F.x, y = F.y, _) {
    var D;
    return Object.assign({}, j, (D = {}, D[w] = g ? "0" : "", D[$] = m ? "0" : "", D.transform = (S.devicePixelRatio || 1) <= 1 ? "translate(" + a + "px, " + y + "px)" : "translate3d(" + a + "px, " + y + "px, 0)", D));
  }
  return Object.assign({}, j, (t = {}, t[w] = g ? y + "px" : "", t[$] = m ? a + "px" : "", t.transform = "", t));
}
function _0(e) {
  var t = e.state, n = e.options, o = n.gpuAcceleration, s = o === void 0 ? !0 : o, r = n.adaptive, l = r === void 0 ? !0 : r, c = n.roundOffsets, _ = c === void 0 ? !0 : c, h = {
    placement: Ut(t.placement),
    variation: Kn(t.placement),
    popper: t.elements.popper,
    popperRect: t.rects.popper,
    gpuAcceleration: s,
    isFixed: t.options.strategy === "fixed"
  };
  t.modifiersData.popperOffsets != null && (t.styles.popper = Object.assign({}, t.styles.popper, cf(Object.assign({}, h, {
    offsets: t.modifiersData.popperOffsets,
    position: t.options.strategy,
    adaptive: l,
    roundOffsets: _
  })))), t.modifiersData.arrow != null && (t.styles.arrow = Object.assign({}, t.styles.arrow, cf(Object.assign({}, h, {
    offsets: t.modifiersData.arrow,
    position: "absolute",
    adaptive: !1,
    roundOffsets: _
  })))), t.attributes.popper = Object.assign({}, t.attributes.popper, {
    "data-popper-placement": t.placement
  });
}
const f0 = {
  name: "computeStyles",
  enabled: !0,
  phase: "beforeWrite",
  fn: _0,
  data: {}
};
function u0(e) {
  var t = e.state;
  Object.keys(t.elements).forEach(function(n) {
    var o = t.styles[n] || {}, s = t.attributes[n] || {}, r = t.elements[n];
    !Fe(r) || !tt(r) || (Object.assign(r.style, o), Object.keys(s).forEach(function(l) {
      var c = s[l];
      c === !1 ? r.removeAttribute(l) : r.setAttribute(l, c === !0 ? "" : c);
    }));
  });
}
function h0(e) {
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
      var s = t.elements[o], r = t.attributes[o] || {}, l = Object.keys(t.styles.hasOwnProperty(o) ? t.styles[o] : n[o]), c = l.reduce(function(_, h) {
        return _[h] = "", _;
      }, {});
      !Fe(s) || !tt(s) || (Object.assign(s.style, c), Object.keys(r).forEach(function(_) {
        s.removeAttribute(_);
      }));
    });
  };
}
const d0 = {
  name: "applyStyles",
  enabled: !0,
  phase: "write",
  fn: u0,
  effect: h0,
  requires: ["computeStyles"]
};
var p0 = [i0, l0, f0, d0], lp = /* @__PURE__ */ o0({
  defaultModifiers: p0
});
function m0(e) {
  return e === "x" ? "y" : "x";
}
function ki(e, t, n) {
  return un(e, as(t, n));
}
function g0(e, t, n) {
  var o = ki(e, t, n);
  return o > n ? n : o;
}
function v0(e) {
  var t = e.state, n = e.options, o = e.name, s = n.mainAxis, r = s === void 0 ? !0 : s, l = n.altAxis, c = l === void 0 ? !1 : l, _ = n.boundary, h = n.rootBoundary, i = n.altBoundary, d = n.padding, f = n.tether, a = f === void 0 ? !0 : f, u = n.tetherOffset, y = u === void 0 ? 0 : u, p = _a(t, {
    boundary: _,
    rootBoundary: h,
    padding: d,
    altBoundary: i
  }), m = Ut(t.placement), g = Kn(t.placement), $ = !g, w = rp(m), S = m0(w), C = t.modifiersData.popperOffsets, A = t.rects.reference, v = t.rects.popper, k = typeof y == "function" ? y(Object.assign({}, t.rects, {
    placement: t.placement
  })) : y, L = typeof k == "number" ? {
    mainAxis: k,
    altAxis: k
  } : Object.assign({
    mainAxis: 0,
    altAxis: 0
  }, k), j = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null, F = {
    x: 0,
    y: 0
  };
  if (C) {
    if (r) {
      var D, E = w === "y" ? Ve : ft, x = w === "y" ? nt : Yt, N = w === "y" ? "height" : "width", M = C[w], P = M + p[E], O = M - p[x], W = a ? -v[N] / 2 : 0, z = g === Xn ? A[N] : v[N], V = g === Xn ? -v[N] : -A[N], Y = t.elements.arrow, Q = a && Y ? tp(Y) : {
        width: 0,
        height: 0
      }, I = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : sp(), X = I[E], te = I[x], Z = ki(0, A[N], Q[N]), G = $ ? A[N] / 2 - W - Z - X - L.mainAxis : z - Z - X - L.mainAxis, ne = $ ? -A[N] / 2 + W + Z + te + L.mainAxis : V + Z + te + L.mainAxis, we = t.elements.arrow && Vl(t.elements.arrow), Se = we ? w === "y" ? we.clientTop || 0 : we.clientLeft || 0 : 0, Jr = (D = j == null ? void 0 : j[w]) != null ? D : 0, ee = M + G - Jr - Se, Qr = M + ne - Jr, tn = ki(a ? as(P, ee) : P, M, a ? un(O, Qr) : O);
      C[w] = tn, F[w] = tn - M;
    }
    if (c) {
      var no, ei = w === "x" ? Ve : ft, ti = w === "x" ? nt : Yt, nn = C[S], ni = S === "y" ? "height" : "width", Ca = nn + p[ei], Ea = nn - p[ti], ec = [Ve, ft].indexOf(m) !== -1, Aa = (no = j == null ? void 0 : j[S]) != null ? no : 0, Ma = ec ? Ca : nn - A[ni] - v[ni] - Aa + L.altAxis, Ta = ec ? nn + A[ni] + v[ni] - Aa - L.altAxis : Ea, La = a && ec ? g0(Ma, nn, Ta) : ki(a ? Ma : Ca, nn, a ? Ta : Ea);
      C[S] = La, F[S] = La - nn;
    }
    t.modifiersData[o] = F;
  }
}
const Cc = {
  name: "preventOverflow",
  enabled: !0,
  phase: "main",
  fn: v0,
  requiresIfExists: ["offset"]
};
var y0 = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function xi(e) {
  return e.replace(/left|right|bottom|top/g, function(t) {
    return y0[t];
  });
}
var b0 = {
  start: "end",
  end: "start"
};
function af(e) {
  return e.replace(/start|end/g, function(t) {
    return b0[t];
  });
}
function w0(e, t) {
  t === void 0 && (t = {});
  var n = t, o = n.placement, s = n.boundary, r = n.rootBoundary, l = n.padding, c = n.flipVariations, _ = n.allowedAutoPlacements, h = _ === void 0 ? Rb : _, i = Kn(o), d = i ? c ? of : of.filter(function(u) {
    return Kn(u) === i;
  }) : zl, f = d.filter(function(u) {
    return h.indexOf(u) >= 0;
  });
  f.length === 0 && (f = d);
  var a = f.reduce(function(u, y) {
    return u[y] = _a(e, {
      placement: y,
      boundary: s,
      rootBoundary: r,
      padding: l
    })[Ut(y)], u;
  }, {});
  return Object.keys(a).sort(function(u, y) {
    return a[u] - a[y];
  });
}
function $0(e) {
  if (Ut(e) === aa)
    return [];
  var t = xi(e);
  return [af(e), t, af(t)];
}
function k0(e) {
  var t = e.state, n = e.options, o = e.name;
  if (!t.modifiersData[o]._skip) {
    for (var s = n.mainAxis, r = s === void 0 ? !0 : s, l = n.altAxis, c = l === void 0 ? !0 : l, _ = n.fallbackPlacements, h = n.padding, i = n.boundary, d = n.rootBoundary, f = n.altBoundary, a = n.flipVariations, u = a === void 0 ? !0 : a, y = n.allowedAutoPlacements, p = t.options.placement, m = Ut(p), g = m === p, $ = _ || (g || !u ? [xi(p)] : $0(p)), w = [p].concat($).reduce(function(Q, I) {
      return Q.concat(Ut(I) === aa ? w0(t, {
        placement: I,
        boundary: i,
        rootBoundary: d,
        padding: h,
        flipVariations: u,
        allowedAutoPlacements: y
      }) : I);
    }, []), S = t.rects.reference, C = t.rects.popper, A = /* @__PURE__ */ new Map(), v = !0, k = w[0], L = 0; L < w.length; L++) {
      var j = w[L], F = Ut(j), D = Kn(j) === Xn, E = [Ve, nt].indexOf(F) >= 0, x = E ? "width" : "height", N = _a(t, {
        placement: j,
        boundary: i,
        rootBoundary: d,
        altBoundary: f,
        padding: h
      }), M = E ? D ? Yt : ft : D ? nt : Ve;
      S[x] > C[x] && (M = xi(M));
      var P = xi(M), O = [];
      if (r && O.push(N[F] <= 0), c && O.push(N[M] <= 0, N[P] <= 0), O.every(function(Q) {
        return Q;
      })) {
        k = j, v = !1;
        break;
      }
      A.set(j, O);
    }
    if (v)
      for (var W = u ? 3 : 1, z = function(I) {
        var X = w.find(function(te) {
          var Z = A.get(te);
          if (Z)
            return Z.slice(0, I).every(function(G) {
              return G;
            });
        });
        if (X)
          return k = X, "break";
      }, V = W; V > 0; V--) {
        var Y = z(V);
        if (Y === "break")
          break;
      }
    t.placement !== k && (t.modifiersData[o]._skip = !0, t.placement = k, t.reset = !0);
  }
}
const cp = {
  name: "flip",
  enabled: !0,
  phase: "main",
  fn: k0,
  requiresIfExists: ["offset"],
  data: {
    _skip: !1
  }
};
function x0(e) {
  return e.button === 2;
}
var S0 = 0;
function C0(e, t, n, o, s) {
  var r, l, c = {};
  for (l in t)
    l == "ref" ? r = t[l] : c[l] = t[l];
  var _ = { type: e, props: c, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: --S0, __source: s, __self: o };
  if (typeof e == "function" && (r = e.defaultProps))
    for (l in r)
      c[l] === void 0 && (c[l] = r[l]);
  return ce.vnode && ce.vnode(_), _;
}
var yt, lu;
let E0 = (lu = class extends jc {
  constructor() {
    super(...arguments);
    T(this, yt, void 0);
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
    super.componentWillUnmount(), (n = b(this, yt)) == null || n.destroy();
  }
  _getPopperOptions() {
    return {
      modifiers: [Cc, cp],
      placement: "right-start"
    };
  }
  _getPopperElement() {
    var n;
    return (n = this.ref.current) == null ? void 0 : n.parentElement;
  }
  _createPopper() {
    const n = this._getPopperOptions();
    return b(this, yt) ? b(this, yt).setOptions(n) : this.ref.current && H(this, yt, lp(this._getPopperElement(), this.ref.current, n)), b(this, yt);
  }
  afterRender(n) {
    super.afterRender(n), this.props.controlledMenu && this._createPopper();
  }
  renderToggleIcon() {
    return /* @__PURE__ */ C0("span", { class: "contextmenu-toggle-icon caret-right" });
  }
}, yt = new WeakMap(), lu);
var bt, Oe, En, Ar;
class Te extends Ue {
  constructor() {
    super(...arguments);
    T(this, bt, void 0);
    T(this, Oe, void 0);
    T(this, En, void 0);
    T(this, Ar, void 0);
  }
  get isShown() {
    var n;
    return (n = b(this, bt)) == null ? void 0 : n.classList.contains(this.constructor.CLASS_SHOW);
  }
  get menu() {
    return b(this, bt) || this._ensureMenu();
  }
  get popper() {
    return b(this, Oe) ? b(this, Oe) : this._createPopper();
  }
  get trigger() {
    return b(this, Ar) || this.element;
  }
  get isDynamic() {
    return this.options.items || this.options.menu;
  }
  init() {
    const { element: n } = this;
    n !== document.body && !n.hasAttribute("data-toggle") && n.setAttribute("data-toggle", "contextmenu");
  }
  show(n) {
    return H(this, Ar, n), this.emit("show", { menu: this, trigger: this.trigger }).defaultPrevented || this.isDynamic && !this._renderMenu() ? !1 : (this.menu.classList.add(this.constructor.CLASS_SHOW), this._createPopper().update(), this.emit("shown", this), !0);
  }
  hide() {
    var o, s;
    return this.emit("hide", this).defaultPrevented ? !1 : ((o = b(this, Oe)) == null || o.destroy(), H(this, Oe, void 0), (s = b(this, bt)) == null || s.classList.remove(this.constructor.CLASS_SHOW), this.emit("hidden", this), !0);
  }
  toggle(n) {
    return this.isShown ? this.hide() : this.show(n);
  }
  destroy() {
    var n, o;
    (n = b(this, Oe)) == null || n.destroy(), super.destroy(), (o = b(this, bt)) == null || o.remove();
  }
  _ensureMenu() {
    var r;
    const { element: n } = this, o = this.constructor.MENU_CLASS;
    let s;
    if (this.isDynamic)
      s = document.createElement("div"), s.classList.add(o), document.body.appendChild(s);
    else if (n) {
      const l = n.getAttribute("href") ?? n.dataset.target;
      if ((l == null ? void 0 : l[0]) === "#" && (s = document.querySelector(l)), !s) {
        const c = n.nextElementSibling;
        c != null && c.classList.contains(o) ? s = c : s = (r = n.parentNode) == null ? void 0 : r.querySelector(`.${o}`);
      }
    }
    if (!s)
      throw new Error("ContextMenu: Cannot find menu element");
    return H(this, bt, s), s;
  }
  _getPopperOptions() {
    const { flip: n, preventOverflow: o, modifiers: s = [] } = this.options;
    return {
      modifiers: [
        o ? typeof o == "object" ? { ...Cc, options: o } : Cc : null,
        n ? cp : null,
        ...s
      ].filter(Boolean),
      placement: this.options.placement,
      strategy: this.options.strategy
    };
  }
  _createPopper() {
    const n = this._getPopperOptions();
    return b(this, Oe) ? b(this, Oe).setOptions(n) : H(this, Oe, lp(this._getPopperElement(), this.menu, n)), b(this, Oe);
  }
  _getMenuOptions() {
    const { menu: n, items: o } = this.options;
    let s = o || (n == null ? void 0 : n.items);
    if (s)
      return typeof s == "function" && (s = s(this)), {
        nestedTrigger: "hover",
        ...n,
        items: s
      };
  }
  _renderMenu() {
    const n = this._getMenuOptions();
    return !n || this.emit("updateMenu", { menu: n, trigger: this.trigger, contextmenu: this }).defaultPrevented ? !1 : (Sb(Yd(E0, n), this.menu), !0);
  }
  _getPopperElement() {
    return b(this, En) || H(this, En, {
      getBoundingClientRect: () => {
        const { trigger: n } = this;
        if (n instanceof MouseEvent) {
          const { clientX: o, clientY: s } = n;
          return {
            width: 0,
            height: 0,
            top: s,
            right: o,
            bottom: s,
            left: o
          };
        }
        return n instanceof HTMLElement ? n.getBoundingClientRect() : n;
      },
      contextElement: this.element
    }), b(this, En);
  }
  static clear(n) {
    var _, h;
    n instanceof Event && (n = { event: n });
    const { event: o, exclude: s, ignoreSelector: r = ".not-hide-menu" } = n || {};
    if (o && r && ((h = (_ = o.target).closest) != null && h.call(_, r)) || o && x0(o))
      return;
    const l = this.getAll().entries(), c = new Set(s || []);
    for (const [i, d] of l)
      c.has(i) || d.hide();
  }
  static show(n) {
    var l;
    const { event: o, ...s } = n, r = this.ensure(document.body);
    return Object.keys(s).length && r.setOptions(s), r.show(o), (l = o == null ? void 0 : o.stopPropagation) == null || l.call(o), r;
  }
  static hide() {
    const n = this.get(document.body);
    return n == null || n.hide(), n;
  }
}
bt = new WeakMap(), Oe = new WeakMap(), En = new WeakMap(), Ar = new WeakMap(), R(Te, "NAME", "contextmenu"), R(Te, "EVENTS", !0), R(Te, "DEFAULT", {
  placement: "bottom-start",
  strategy: "fixed",
  flip: !0,
  preventOverflow: !0
}), R(Te, "MENU_CLASS", "contextmenu"), R(Te, "CLASS_SHOW", "show"), R(Te, "MENU_SELECTOR", '[data-toggle="contextmenu"]:not(.disabled):not(:disabled)');
document.addEventListener("contextmenu", (e) => {
  const t = e.target;
  if (t.closest(`.${Te.MENU_CLASS}`))
    return;
  const n = t.closest(Te.MENU_SELECTOR);
  n && (Te.ensure(n).show(e), e.preventDefault());
});
document.addEventListener("click", Te.clear.bind(Te));
var An, Mn, Tn, Is, ap;
const Sa = class extends Te {
  constructor() {
    super(...arguments);
    T(this, Is);
    T(this, An, !1);
    T(this, Mn, 0);
    R(this, "hideLater", () => {
      b(this, Tn).call(this), H(this, Mn, window.setTimeout(this.hide.bind(this), 100));
    });
    T(this, Tn, () => {
      clearTimeout(b(this, Mn)), H(this, Mn, 0);
    });
  }
  get isHover() {
    return this.options.trigger === "hover";
  }
  get elementShowClass() {
    return `with-${this.constructor.NAME}-show`;
  }
  show(n, o) {
    (o == null ? void 0 : o.clearOthers) !== !1 && Sa.clear({ event: o == null ? void 0 : o.event, exclude: [this.element] });
    const s = super.show(n);
    return s && (!b(this, An) && this.isHover && U(this, Is, ap).call(this), this.element.classList.add(this.elementShowClass)), s;
  }
  hide() {
    const n = super.hide();
    return n && this.element.classList.remove(this.elementShowClass), n;
  }
  toggle(n, o) {
    return this.isShown ? this.hide() : this.show(n, { event: n, ...o });
  }
  destroy() {
    b(this, An) && (this.element.removeEventListener("mouseleave", this.hideLater), this.menu.removeEventListener("mouseenter", b(this, Tn)), this.menu.removeEventListener("mouseleave", this.hideLater)), super.destroy();
  }
  _getArrowSize() {
    const { arrow: n } = this.options;
    return n ? typeof n == "number" ? n : 5 : 0;
  }
  _getPopperOptions() {
    const n = super._getPopperOptions(), o = this._getArrowSize();
    return o && n.modifiers.push({ ...gb, options: {
      padding: o,
      element: ".arrow"
    } }, {
      ...bb,
      options: {
        offset: [0, o + (this.options.offset ?? 0)]
      }
    }, {
      name: "dropdown",
      enabled: !0,
      phase: "beforeWrite",
      fn: ({ state: s }) => {
        var l, c;
        const r = ((l = s.placement) == null ? void 0 : l.split("-").shift()) || "";
        (c = this.menu.querySelector(".arrow")) == null || c.setAttribute("class", `arrow arrow-${r}`), this.element.setAttribute("data-dropdown-placement", r);
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
      n.afterRender = (...s) => {
        var l;
        const r = this.menu.querySelector(".arrow");
        r && ((l = this.menu.querySelector(".menu")) == null || l.appendChild(r), this.popper.update()), o == null || o(...s);
      };
    }
    return n;
  }
};
let Ee = Sa;
An = new WeakMap(), Mn = new WeakMap(), Tn = new WeakMap(), Is = new WeakSet(), ap = function() {
  const { menu: n } = this;
  n.addEventListener("mouseenter", b(this, Tn)), n.addEventListener("mouseleave", this.hideLater), this.element.addEventListener("mouseleave", this.hideLater), H(this, An, !0);
}, R(Ee, "NAME", "dropdown"), R(Ee, "MENU_CLASS", "dropdown-menu"), R(Ee, "MENU_SELECTOR", '[data-toggle="dropdown"]:not(.disabled):not(:disabled)'), R(Ee, "DEFAULT", {
  ...Te.DEFAULT,
  strategy: "absolute",
  trigger: "click"
});
document.addEventListener("click", function(e) {
  const n = e.target.closest(Ee.MENU_SELECTOR);
  if (n) {
    const o = Ee.ensure(n);
    o.options.trigger === "click" && o.toggle();
  } else
    Ee.clear({ event: e });
});
document.addEventListener("mouseover", function(e) {
  const t = e.target, n = typeof t.closest == "function" ? t.closest(Ee.MENU_SELECTOR) : null;
  if (!n)
    return;
  const o = Ee.ensure(n);
  o.isHover && o.show();
});
const A0 = (e) => {
  const t = document.getElementsByClassName("with-dropdown-show")[0];
  if (!t)
    return;
  const n = typeof t.closest == "function" ? t.closest(Ee.MENU_SELECTOR) : null;
  !n || !e.target.contains(n) || Ee.clear({ event: e });
};
window.addEventListener("scroll", A0, !0);
var Mr, Ln;
class M0 extends Do {
  constructor(n) {
    var o;
    super(n);
    T(this, Mr, void 0);
    T(this, Ln, By());
    this.state = { placement: ((o = n.dropdown) == null ? void 0 : o.placement) || "", show: !1 };
  }
  get ref() {
    return b(this, Ln);
  }
  get triggerElement() {
    return b(this, Ln).current;
  }
  componentDidMount() {
    const { modifiers: n = [], ...o } = this.props.dropdown || {};
    n.push({
      name: "dropdown-trigger",
      enabled: !0,
      phase: "beforeMain",
      fn: ({ state: s }) => {
        var l;
        const r = ((l = s.placement) == null ? void 0 : l.split("-").shift()) || "";
        this.setState({ placement: r });
      }
    }), H(this, Mr, Ee.ensure(this.triggerElement, {
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
    (n = b(this, Mr)) == null || n.destroy();
  }
  beforeRender() {
    const { className: n, children: o, dropdown: s, ...r } = this.props;
    return {
      className: B("dropdown", n),
      children: typeof o == "function" ? o(this.state) : o,
      ...r,
      "data-toggle": "dropdown",
      "data-dropdown-placement": this.state.placement,
      ref: b(this, Ln)
    };
  }
  render() {
    const { children: n, ...o } = this.beforeRender();
    return /* @__PURE__ */ Wd("div", { ...o, children: n });
  }
}
Mr = new WeakMap(), Ln = new WeakMap();
class T0 extends M0 {
  get triggerElement() {
    return this.ref.current.base;
  }
  render() {
    var r;
    const { placement: t, show: n } = this.state, o = this.beforeRender();
    let { caret: s = !0 } = o;
    if (s !== !1 && (n || s === !0)) {
      const l = n ? t : (r = this.props.dropdown) == null ? void 0 : r.placement;
      s = (l === "top" ? "up" : l === "bottom" ? "down" : l) || (typeof s == "string" ? s : "") || "down";
    }
    return o.caret = s, /* @__PURE__ */ Wd(jt, { ...o });
  }
}
function _p({
  key: e,
  type: t,
  btnType: n,
  ...o
}) {
  return /* @__PURE__ */ Ul(T0, { type: n, ...o });
}
function L0({
  key: e,
  type: t,
  btnType: n,
  ...o
}) {
  return /* @__PURE__ */ Ul(Gc, { type: n, ...o });
}
var dn;
let ur = (dn = class extends zn {
  beforeRender() {
    const { gap: t, btnProps: n, wrap: o, ...s } = super.beforeRender();
    return s.className = B(s.className, o ? "flex-wrap" : "", typeof t == "number" ? `gap-${t}` : ""), typeof t == "string" && (s.style ? s.style.gap = t : s.style = { gap: t }), s;
  }
  isBtnItem(t) {
    return t === "item" || t === "dropdown";
  }
  renderTypedItem(t, n, o) {
    const s = this.isBtnItem(o.type) ? { btnType: "ghost", ...this.props.btnProps } : {}, r = {
      ...n,
      ...s,
      ...o,
      className: B(`${this.name}-${o.type}`, n.className, s.className, o.className),
      style: Object.assign({}, n.style, s.style, o.style)
    };
    return /* @__PURE__ */ Ul(t, { ...r });
  }
}, R(dn, "ItemComponents", {
  item: Uy,
  dropdown: _p,
  "btn-group": L0
}), R(dn, "ROOT_TAG", "nav"), R(dn, "NAME", "toolbar"), R(dn, "defaultProps", {
  btnProps: {
    btnType: "ghost"
  }
}), dn);
class fp extends gn {
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
    return _o(t) ? t : t === !1 || !n ? null : /* @__PURE__ */ be("div", { className: "modal-header", children: /* @__PURE__ */ be("div", { className: "modal-title", children: n }) });
  }
  renderActions() {
    const {
      actions: t,
      closeBtn: n
    } = this.props;
    return !n && !t ? null : _o(t) ? t : /* @__PURE__ */ be("div", { className: "modal-actions", children: [
      t ? /* @__PURE__ */ be(ur, { ...t }) : null,
      n ? /* @__PURE__ */ be("button", { type: "button", class: "btn square ghost", "data-dismiss": "modal", children: /* @__PURE__ */ be("span", { class: "close" }) }) : null
    ] });
  }
  renderBody() {
    const {
      body: t
    } = this.props;
    return t ? _o(t) ? t : /* @__PURE__ */ be("div", { className: "modal-body", children: t }) : null;
  }
  renderFooter() {
    const {
      footer: t,
      footerActions: n
    } = this.props;
    return _o(t) ? t : t === !1 || !n ? null : /* @__PURE__ */ be("div", { className: "modal-footer", children: n ? /* @__PURE__ */ be(ur, { ...n }) : null });
  }
  render() {
    const {
      className: t,
      style: n,
      children: o
    } = this.props;
    return /* @__PURE__ */ be("div", { className: B("modal-dialog", t), style: n, children: /* @__PURE__ */ be("div", { className: "modal-content", children: [
      this.renderHeader(),
      this.renderActions(),
      this.renderBody(),
      o,
      this.renderFooter()
    ] }) });
  }
}
R(fp, "defaultProps", { closeBtn: !0 });
var Tr, Dn, Lr;
class D0 extends gn {
  constructor() {
    super(...arguments);
    T(this, Tr, Dy());
    T(this, Dn, void 0);
    R(this, "state", {});
    T(this, Lr, () => {
      var s, r;
      const n = (r = (s = b(this, Tr).current) == null ? void 0 : s.contentWindow) == null ? void 0 : r.document;
      if (!n)
        return;
      let o = b(this, Dn);
      o == null || o.disconnect(), o = new ResizeObserver(() => {
        const l = n.body, c = n.documentElement, _ = Math.ceil(Math.max(l.scrollHeight, l.offsetHeight, c.offsetHeight));
        this.setState({ height: _ });
      }), o.observe(n.body), o.observe(n.documentElement), H(this, Dn, o);
    });
  }
  componentDidMount() {
    b(this, Lr).call(this);
  }
  componentWillUnmount() {
    var n;
    (n = b(this, Dn)) == null || n.disconnect();
  }
  render() {
    const { url: n } = this.props;
    return /* @__PURE__ */ be(
      "iframe",
      {
        className: "modal-iframe",
        style: this.state,
        src: n,
        ref: b(this, Tr),
        onLoad: b(this, Lr)
      }
    );
  }
}
Tr = new WeakMap(), Dn = new WeakMap(), Lr = new WeakMap();
function N0(e, t) {
  const { custom: n, title: o, content: s } = t;
  return {
    body: s,
    title: o,
    ...typeof n == "function" ? n() : n
  };
}
async function R0(e, t) {
  const { dataType: n, url: o, request: s, custom: r, title: l } = t, _ = await (await fetch(o, s)).text();
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
    body: n === "html" ? /* @__PURE__ */ be("div", { className: "modal-body", dangerouslySetInnerHTML: { __html: _ } }) : _
  };
}
async function O0(e, t) {
  const { url: n, custom: o, title: s } = t;
  return {
    title: s,
    ...o,
    body: /* @__PURE__ */ be(D0, { url: n })
  };
}
const P0 = {
  custom: N0,
  ajax: R0,
  iframe: O0
};
var Dr, Nr, Ge, Nn, Si, Us, up, Rr, Ec;
const Go = class extends Me {
  constructor() {
    super(...arguments);
    T(this, Nn);
    T(this, Us);
    T(this, Rr);
    T(this, Dr, void 0);
    T(this, Nr, void 0);
    T(this, Ge, void 0);
  }
  get id() {
    return b(this, Nr);
  }
  get loading() {
    return this.modalElement.classList.contains(Go.LOADING_CLASS);
  }
  get modalElement() {
    let n = b(this, Dr);
    if (!n) {
      const { id: o } = this;
      n = this.element.querySelector(`#${o}`), n || (n = document.createElement("div"), Ji(n, {
        id: o,
        style: this.options.style
      }), pd(n, ["modal modal-async", this.options.className]), this.element.appendChild(n)), H(this, Dr, n);
    }
    return n;
  }
  afterInit() {
    super.afterInit(), H(this, Nr, this.options.id || `modal-${Wy()}`);
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
    b(this, Ge) && clearTimeout(b(this, Ge));
    const { modalElement: n, options: o } = this, { type: s, loadTimeout: r } = o, l = P0[s];
    if (!l)
      return console.warn(`Modal: Cannot build modal with type "${s}"`), !1;
    n.classList.add(Go.LOADING_CLASS), await U(this, Us, up).call(this), r && H(this, Ge, window.setTimeout(() => {
      H(this, Ge, 0), U(this, Rr, Ec).call(this, this.options.timeoutTip);
    }, r));
    const c = await l(n, o);
    return c === !1 ? await U(this, Rr, Ec).call(this, this.options.failedTip) : c && typeof c == "object" && await U(this, Nn, Si).call(this, c), b(this, Ge) && (clearTimeout(b(this, Ge)), H(this, Ge, 0)), n.classList.remove(Go.LOADING_CLASS), !0;
  }
};
let fo = Go;
Dr = new WeakMap(), Nr = new WeakMap(), Ge = new WeakMap(), Nn = new WeakSet(), Si = function(n) {
  return new Promise((o) => {
    const { afterRender: s, ...r } = n;
    n = {
      afterRender: (l) => {
        this.layout(), s == null || s(l), o();
      },
      ...r
    }, Py(
      /* @__PURE__ */ be(fp, { ...n }),
      this.modalElement
    );
  });
}, Us = new WeakSet(), up = function() {
  const { loadingText: n } = this.options;
  return U(this, Nn, Si).call(this, {
    body: /* @__PURE__ */ be("div", { className: "modal-loading-indicator", children: [
      /* @__PURE__ */ be("span", { className: "spinner" }),
      n ? /* @__PURE__ */ be("span", { className: "modal-loading-text", children: n }) : null
    ] })
  });
}, Rr = new WeakSet(), Ec = function(n) {
  if (n)
    return U(this, Nn, Si).call(this, {
      body: /* @__PURE__ */ be("div", { className: "modal-load-failed", children: n })
    });
}, R(fo, "LOADING_CLASS", "loading"), R(fo, "DEFAULT", {
  ...Me.DEFAULT,
  loadTimeout: 1e4
});
var wt, Fs, hp, Bs, dp, js, pp;
class Oo extends Ue {
  constructor() {
    super(...arguments);
    T(this, Fs);
    T(this, Bs);
    T(this, js);
    T(this, wt, void 0);
  }
  get modal() {
    return b(this, wt);
  }
  get container() {
    const { container: n } = this.options;
    return typeof n == "string" ? document.querySelector(n) : n instanceof HTMLElement ? n : document.body;
  }
  show() {
    return U(this, Bs, dp).call(this).show();
  }
  hide() {
    var n;
    (n = b(this, wt)) == null || n.hide();
  }
}
wt = new WeakMap(), Fs = new WeakSet(), hp = function() {
  const {
    container: n,
    ...o
  } = this.options, s = o, r = this.element.getAttribute("href") || "";
  return s.type || (s.target || r[0] === "#" ? s.type = "static" : s.type = s.type || (s.url ? "iframe" : "custom")), !s.url && (s.type === "iframe" || s.type === "ajax") && r[0] !== "#" && (s.url = r), s;
}, Bs = new WeakSet(), dp = function() {
  const n = U(this, Fs, hp).call(this);
  let o = b(this, wt);
  return o ? o.setOptions(n) : n.type === "static" ? (o = new Me(U(this, js, pp).call(this), n), H(this, wt, o)) : (o = new fo(this.container, n), H(this, wt, o)), o;
}, js = new WeakSet(), pp = function() {
  let n = this.options.target;
  if (!n) {
    const { element: o } = this;
    if (o.tagName === "A") {
      const s = o.getAttribute("href");
      s != null && s.startsWith("#") && (n = s);
    }
  }
  return this.container.querySelector(n || ".modal");
}, R(Oo, "NAME", "ModalTrigger"), R(Oo, "EVENTS", !0), R(Oo, "TOGGLE_SELECTOR", '[data-toggle="modal"]');
window.addEventListener("click", (e) => {
  const n = e.target.closest(Oo.TOGGLE_SELECTOR);
  if (n) {
    const o = Oo.ensure(n);
    o && o.show(), console.log("> modalTrigger", o);
  }
});
var hc;
let H0 = (hc = class extends zn {
  beforeRender() {
    const t = super.beforeRender();
    return t.className = B(t.className, t.type ? `nav-${t.type}` : "", {
      "nav-stacked": t.stacked
    }), t;
  }
}, R(hc, "NAME", "nav"), hc);
class _f extends Ne {
}
R(_f, "NAME", "nav"), R(_f, "Component", H0);
var Ac;
Ac = { __e: function(e, t, n, o) {
  for (var s, r, l; t = t.__; )
    if ((s = t.__c) && !s.__)
      try {
        if ((r = s.constructor) && r.getDerivedStateFromError != null && (s.setState(r.getDerivedStateFromError(e)), l = s.__d), s.componentDidCatch != null && (s.componentDidCatch(e, o || {}), l = s.__d), l)
          return s.__E = s;
      } catch (c) {
        e = c;
      }
  throw e;
} };
var W0 = 0;
function Ft(e, t, n, o, s) {
  var r, l, c = {};
  for (l in t)
    l == "ref" ? r = t[l] : c[l] = t[l];
  var _ = { type: e, props: c, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: --W0, __source: s, __self: o };
  if (typeof e == "function" && (r = e.defaultProps))
    for (l in r)
      c[l] === void 0 && (c[l] = r[l]);
  return Ac.vnode && Ac.vnode(_), _;
}
function hr(e, t) {
  const n = e.pageTotal || Math.ceil(e.recTotal / e.recPerPage);
  return typeof t == "string" && (t === "first" ? t = 1 : t === "last" ? t = n : t === "prev" ? t = e.page - 1 : t === "next" ? t = e.page + 1 : t === "current" ? t = e.page : t = Number.parseInt(t, 10)), t = t !== void 0 ? Math.max(1, Math.min(t < 0 ? n + t : t, n)) : e.page, {
    ...e,
    pageTotal: n,
    page: t
  };
}
function I0({
  key: e,
  type: t,
  btnType: n,
  page: o,
  format: s,
  pagerInfo: r,
  linkCreator: l,
  ...c
}) {
  const _ = hr(r, o);
  return c.text === void 0 && !c.icon && s && (c.text = typeof s == "function" ? s(_) : Le(s, _)), c.url === void 0 && l && (c.url = typeof l == "function" ? l(_) : Le(l, _)), c.disabled === void 0 && (c.disabled = o !== void 0 && _.page === r.page), /* @__PURE__ */ Ft(jt, { type: n, ...c });
}
const st = 24 * 60 * 60 * 1e3, De = (e) => e ? (e instanceof Date || (typeof e == "string" && (e = e.trim(), /^\d+$/.test(e) && (e = Number.parseInt(e, 10))), typeof e == "number" && e < 1e10 && (e *= 1e3), e = new Date(e)), e) : new Date(), Xr = (e, t = new Date()) => (e = De(e), t = De(t), e.getFullYear() === t.getFullYear() && e.getMonth() === t.getMonth() && e.getDate() === t.getDate()), ff = (e, t = new Date()) => De(e).getFullYear() === De(t).getFullYear(), U0 = (e, t = new Date()) => (e = De(e), t = De(t), e.getFullYear() === t.getFullYear() && e.getMonth() === t.getMonth()), bk = (e, t = new Date()) => {
  e = De(e), t = De(t);
  const n = 1e3 * 60 * 60 * 24, o = Math.floor(e.getTime() / n), s = Math.floor(t.getTime() / n);
  return Math.floor((o + 4) / 7) === Math.floor((s + 4) / 7);
}, wk = (e, t) => Xr(De(t), e), $k = (e, t) => Xr(De(t).getTime() - st, e), kk = (e, t) => Xr(De(t).getTime() + st, e), xk = (e, t) => Xr(De(t).getTime() - 2 * st, e), Mc = (e, t = "yyyy-MM-dd hh:mm") => {
  e = De(e);
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
      const s = `${n[o]}`;
      t = t.replace(RegExp.$1, RegExp.$1.length === 1 ? s : `00${s}`.substring(s.length));
    }
  }), t;
}, Sk = (e, t, n) => {
  const o = {
    full: "yyyy-M-d",
    month: "M-d",
    day: "d",
    str: "{0} ~ {1}",
    ...n
  }, s = Mc(e, ff(e) ? o.month : o.full);
  if (Xr(e, t))
    return s;
  const r = Mc(t, ff(e, t) ? U0(e, t) ? o.day : o.month : o.full);
  return o.str.replace("{0}", s).replace("{1}", r);
}, Ck = (e) => {
  const t = new Date().getTime();
  switch (e) {
    case "oneWeek":
      return t - st * 7;
    case "oneMonth":
      return t - st * 31;
    case "threeMonth":
      return t - st * 31 * 3;
    case "halfYear":
      return t - st * 183;
    case "oneYear":
      return t - st * 365;
    case "twoYear":
      return t - 2 * (st * 365);
    default:
      return 0;
  }
}, uf = (e, t, n = !0, o = Date.now()) => {
  switch (t) {
    case "year":
      return e *= 365, uf(e, "day", n, o);
    case "quarter":
      e *= 3;
    case "month":
      return e *= 30, uf(e, "day", n, o);
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
function F0({
  key: e,
  type: t,
  page: n,
  text: o = "",
  pagerInfo: s,
  children: r,
  ...l
}) {
  const c = hr(s, n);
  return o = typeof o == "function" ? o(c) : Le(o, c), /* @__PURE__ */ Ft(Ru, { ...l, children: [
    r,
    o
  ] });
}
function B0({
  key: e,
  type: t,
  btnType: n,
  count: o = 12,
  pagerInfo: s,
  onClick: r,
  linkCreator: l,
  ...c
}) {
  if (!s.pageTotal)
    return;
  const _ = { ...c, square: !0 }, h = () => (_.text = "", _.icon = "icon-ellipsis-h", _.disabled = !0, /* @__PURE__ */ Ft(jt, { type: n, ..._ })), i = (f, a) => {
    const u = [];
    for (let y = f; y <= a; y++) {
      _.text = y, delete _.icon, _.disabled = !1;
      const p = hr(s, y);
      l && (_.url = typeof l == "function" ? l(p) : Le(l, p)), u.push(/* @__PURE__ */ Ft(jt, { type: n, ..._, onClick: r }));
    }
    return u;
  };
  let d = [];
  return d = [...i(1, 1)], s.pageTotal <= 1 || (s.pageTotal <= o ? d = [...d, ...i(2, s.pageTotal)] : s.page < o - 2 ? d = [...d, ...i(2, o - 2), h(), ...i(s.pageTotal, s.pageTotal)] : s.page > s.pageTotal - o + 3 ? d = [...d, h(), ...i(s.pageTotal - o + 3, s.pageTotal)] : d = [...d, h(), ...i(s.page - Math.ceil((o - 4) / 2), s.page + Math.floor((o - 4) / 2)), h(), ...i(s.pageTotal, s.pageTotal)]), d;
}
function j0({
  type: e,
  pagerInfo: t,
  linkCreator: n,
  items: o = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 100, 200, 500, 1e3, 2e3],
  dropdown: s = {},
  ...r
}) {
  var c;
  s.items = s.items ?? o.map((_) => {
    const h = { ...t, recPerPage: _ };
    return {
      text: `${_}`,
      url: typeof n == "function" ? n(h) : Le(n, h)
    };
  });
  const { text: l = "" } = r;
  return r.text = typeof l == "function" ? l(t) : Le(l, t), s.menu = { ...s.menu, className: B((c = s.menu) == null ? void 0 : c.className, "pager-size-menu") }, /* @__PURE__ */ Ft(_p, { type: "dropdown", dropdown: s, ...r });
}
function V0({
  key: e,
  page: t,
  type: n,
  btnType: o,
  pagerInfo: s,
  size: r,
  onClick: l,
  onChange: c,
  linkCreator: _,
  ...h
}) {
  const i = { ...h };
  let d;
  const f = (y) => {
    var p;
    d = Number((p = y.target) == null ? void 0 : p.value) || 1, d = d > s.pageTotal ? s.pageTotal : d;
  }, a = (y) => {
    if (!(y != null && y.target))
      return;
    d = d <= s.pageTotal ? d : s.pageTotal;
    const p = hr(s, d);
    c && !c({ info: p, event: y }) || (y.target.href = i.url = typeof _ == "function" ? _(p) : Le(_, p));
  }, u = hr(s, t || 0);
  return i.url = typeof _ == "function" ? _(u) : Le(_, u), i.className = B("input-group-addon", i.className), /* @__PURE__ */ Ft("div", { className: B("input-group", "pager-goto-group", r ? `size-${r}` : ""), children: [
    /* @__PURE__ */ Ft("input", { type: "number", class: "form-control", max: s.pageTotal, min: "1", onInput: f }),
    /* @__PURE__ */ Ft(jt, { type: o, ...i, onClick: a })
  ] });
}
var lo;
let z0 = (lo = class extends ur {
  get pagerInfo() {
    const { page: t = 1, recTotal: n = 0, recPerPage: o = 10 } = this.props;
    return { page: t, recTotal: n, recPerPage: o, pageTotal: o ? Math.ceil(n / o) : 0 };
  }
  isBtnItem(t) {
    return t === "link" || t === "nav" || t === "size-menu" || t === "goto" || super.isBtnItem(t);
  }
  getItemRenderProps(t, n, o) {
    const s = super.getItemRenderProps(t, n, o), r = n.type || "item";
    return r === "info" ? Object.assign(s, { pagerInfo: this.pagerInfo }) : (r === "link" || r === "size-menu" || r === "nav" || r === "goto") && Object.assign(s, { pagerInfo: this.pagerInfo, linkCreator: t.linkCreator }), s;
  }
}, R(lo, "NAME", "pager"), R(lo, "defaultProps", {
  gap: 1,
  btnProps: {
    btnType: "ghost",
    size: "sm"
  }
}), R(lo, "ItemComponents", {
  ...ur.ItemComponents,
  link: I0,
  info: F0,
  nav: B0,
  "size-menu": j0,
  goto: V0
}), lo);
class hf extends Ne {
}
R(hf, "NAME", "pager"), R(hf, "Component", z0);
var mp, me, gp, Po, df, vp = {}, yp = [], Y0 = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function Ot(e, t) {
  for (var n in t)
    e[n] = t[n];
  return e;
}
function bp(e) {
  var t = e.parentNode;
  t && t.removeChild(e);
}
function lc(e, t, n, o, s) {
  var r = { type: e, props: t, key: n, ref: o, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: s ?? ++gp };
  return s == null && me.vnode != null && me.vnode(r), r;
}
function G0() {
  return { current: null };
}
function fa(e) {
  return e.children;
}
function Bt(e, t) {
  this.props = e, this.context = t;
}
function dr(e, t) {
  if (t == null)
    return e.__ ? dr(e.__, e.__.__k.indexOf(e) + 1) : null;
  for (var n; t < e.__k.length; t++)
    if ((n = e.__k[t]) != null && n.__e != null)
      return n.__e;
  return typeof e.type == "function" ? dr(e) : null;
}
function wp(e) {
  var t, n;
  if ((e = e.__) != null && e.__c != null) {
    for (e.__e = e.__c.base = null, t = 0; t < e.__k.length; t++)
      if ((n = e.__k[t]) != null && n.__e != null) {
        e.__e = e.__c.base = n.__e;
        break;
      }
    return wp(e);
  }
}
function pf(e) {
  (!e.__d && (e.__d = !0) && Po.push(e) && !_s.__r++ || df !== me.debounceRendering) && ((df = me.debounceRendering) || setTimeout)(_s);
}
function _s() {
  for (var e; _s.__r = Po.length; )
    e = Po.sort(function(t, n) {
      return t.__v.__b - n.__v.__b;
    }), Po = [], e.some(function(t) {
      var n, o, s, r, l, c;
      t.__d && (l = (r = (n = t).__v).__e, (c = n.__P) && (o = [], (s = Ot({}, r)).__v = r.__v + 1, Sp(c, r, s, n.__n, c.ownerSVGElement !== void 0, r.__h != null ? [l] : null, o, l ?? dr(r), r.__h), X0(o, r), r.__e != l && wp(r)));
    });
}
function $p(e, t, n, o, s, r, l, c, _, h) {
  var i, d, f, a, u, y, p, m = o && o.__k || yp, g = m.length;
  for (n.__k = [], i = 0; i < t.length; i++)
    if ((a = n.__k[i] = (a = t[i]) == null || typeof a == "boolean" ? null : typeof a == "string" || typeof a == "number" || typeof a == "bigint" ? lc(null, a, null, null, a) : Array.isArray(a) ? lc(fa, { children: a }, null, null, null) : a.__b > 0 ? lc(a.type, a.props, a.key, a.ref ? a.ref : null, a.__v) : a) != null) {
      if (a.__ = n, a.__b = n.__b + 1, (f = m[i]) === null || f && a.key == f.key && a.type === f.type)
        m[i] = void 0;
      else
        for (d = 0; d < g; d++) {
          if ((f = m[d]) && a.key == f.key && a.type === f.type) {
            m[d] = void 0;
            break;
          }
          f = null;
        }
      Sp(e, a, f = f || vp, s, r, l, c, _, h), u = a.__e, (d = a.ref) && f.ref != d && (p || (p = []), f.ref && p.push(f.ref, null, a), p.push(d, a.__c || u, a)), u != null ? (y == null && (y = u), typeof a.type == "function" && a.__k === f.__k ? a.__d = _ = kp(a, _, e) : _ = xp(e, a, f, m, u, _), typeof n.type == "function" && (n.__d = _)) : _ && f.__e == _ && _.parentNode != e && (_ = dr(f));
    }
  for (n.__e = y, i = g; i--; )
    m[i] != null && Ep(m[i], m[i]);
  if (p)
    for (i = 0; i < p.length; i++)
      Cp(p[i], p[++i], p[++i]);
}
function kp(e, t, n) {
  for (var o, s = e.__k, r = 0; s && r < s.length; r++)
    (o = s[r]) && (o.__ = e, t = typeof o.type == "function" ? kp(o, t, n) : xp(n, o, o, s, o.__e, t));
  return t;
}
function xp(e, t, n, o, s, r) {
  var l, c, _;
  if (t.__d !== void 0)
    l = t.__d, t.__d = void 0;
  else if (n == null || s != r || s.parentNode == null)
    e:
      if (r == null || r.parentNode !== e)
        e.appendChild(s), l = null;
      else {
        for (c = r, _ = 0; (c = c.nextSibling) && _ < o.length; _ += 2)
          if (c == s)
            break e;
        e.insertBefore(s, r), l = r;
      }
  return l !== void 0 ? l : s.nextSibling;
}
function q0(e, t, n, o, s) {
  var r;
  for (r in n)
    r === "children" || r === "key" || r in t || fs(e, r, null, n[r], o);
  for (r in t)
    s && typeof t[r] != "function" || r === "children" || r === "key" || r === "value" || r === "checked" || n[r] === t[r] || fs(e, r, t[r], n[r], o);
}
function mf(e, t, n) {
  t[0] === "-" ? e.setProperty(t, n) : e[t] = n == null ? "" : typeof n != "number" || Y0.test(t) ? n : n + "px";
}
function fs(e, t, n, o, s) {
  var r;
  e:
    if (t === "style")
      if (typeof n == "string")
        e.style.cssText = n;
      else {
        if (typeof o == "string" && (e.style.cssText = o = ""), o)
          for (t in o)
            n && t in n || mf(e.style, t, "");
        if (n)
          for (t in n)
            o && n[t] === o[t] || mf(e.style, t, n[t]);
      }
    else if (t[0] === "o" && t[1] === "n")
      r = t !== (t = t.replace(/Capture$/, "")), t = t.toLowerCase() in e ? t.toLowerCase().slice(2) : t.slice(2), e.l || (e.l = {}), e.l[t + r] = n, n ? o || e.addEventListener(t, r ? vf : gf, r) : e.removeEventListener(t, r ? vf : gf, r);
    else if (t !== "dangerouslySetInnerHTML") {
      if (s)
        t = t.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
      else if (t !== "href" && t !== "list" && t !== "form" && t !== "tabIndex" && t !== "download" && t in e)
        try {
          e[t] = n ?? "";
          break e;
        } catch {
        }
      typeof n == "function" || (n == null || n === !1 && t.indexOf("-") == -1 ? e.removeAttribute(t) : e.setAttribute(t, n));
    }
}
function gf(e) {
  this.l[e.type + !1](me.event ? me.event(e) : e);
}
function vf(e) {
  this.l[e.type + !0](me.event ? me.event(e) : e);
}
function Sp(e, t, n, o, s, r, l, c, _) {
  var h, i, d, f, a, u, y, p, m, g, $, w, S, C, A, v = t.type;
  if (t.constructor !== void 0)
    return null;
  n.__h != null && (_ = n.__h, c = t.__e = n.__e, t.__h = null, r = [c]), (h = me.__b) && h(t);
  try {
    e:
      if (typeof v == "function") {
        if (p = t.props, m = (h = v.contextType) && o[h.__c], g = h ? m ? m.props.value : h.__ : o, n.__c ? y = (i = t.__c = n.__c).__ = i.__E : ("prototype" in v && v.prototype.render ? t.__c = i = new v(p, g) : (t.__c = i = new Bt(p, g), i.constructor = v, i.render = Z0), m && m.sub(i), i.props = p, i.state || (i.state = {}), i.context = g, i.__n = o, d = i.__d = !0, i.__h = [], i._sb = []), i.__s == null && (i.__s = i.state), v.getDerivedStateFromProps != null && (i.__s == i.state && (i.__s = Ot({}, i.__s)), Ot(i.__s, v.getDerivedStateFromProps(p, i.__s))), f = i.props, a = i.state, d)
          v.getDerivedStateFromProps == null && i.componentWillMount != null && i.componentWillMount(), i.componentDidMount != null && i.__h.push(i.componentDidMount);
        else {
          if (v.getDerivedStateFromProps == null && p !== f && i.componentWillReceiveProps != null && i.componentWillReceiveProps(p, g), !i.__e && i.shouldComponentUpdate != null && i.shouldComponentUpdate(p, i.__s, g) === !1 || t.__v === n.__v) {
            for (i.props = p, i.state = i.__s, t.__v !== n.__v && (i.__d = !1), i.__v = t, t.__e = n.__e, t.__k = n.__k, t.__k.forEach(function(k) {
              k && (k.__ = t);
            }), $ = 0; $ < i._sb.length; $++)
              i.__h.push(i._sb[$]);
            i._sb = [], i.__h.length && l.push(i);
            break e;
          }
          i.componentWillUpdate != null && i.componentWillUpdate(p, i.__s, g), i.componentDidUpdate != null && i.__h.push(function() {
            i.componentDidUpdate(f, a, u);
          });
        }
        if (i.context = g, i.props = p, i.__v = t, i.__P = e, w = me.__r, S = 0, "prototype" in v && v.prototype.render) {
          for (i.state = i.__s, i.__d = !1, w && w(t), h = i.render(i.props, i.state, i.context), C = 0; C < i._sb.length; C++)
            i.__h.push(i._sb[C]);
          i._sb = [];
        } else
          do
            i.__d = !1, w && w(t), h = i.render(i.props, i.state, i.context), i.state = i.__s;
          while (i.__d && ++S < 25);
        i.state = i.__s, i.getChildContext != null && (o = Ot(Ot({}, o), i.getChildContext())), d || i.getSnapshotBeforeUpdate == null || (u = i.getSnapshotBeforeUpdate(f, a)), A = h != null && h.type === fa && h.key == null ? h.props.children : h, $p(e, Array.isArray(A) ? A : [A], t, n, o, s, r, l, c, _), i.base = t.__e, t.__h = null, i.__h.length && l.push(i), y && (i.__E = i.__ = null), i.__e = !1;
      } else
        r == null && t.__v === n.__v ? (t.__k = n.__k, t.__e = n.__e) : t.__e = K0(n.__e, t, n, o, s, r, l, _);
    (h = me.diffed) && h(t);
  } catch (k) {
    t.__v = null, (_ || r != null) && (t.__e = c, t.__h = !!_, r[r.indexOf(c)] = null), me.__e(k, t, n);
  }
}
function X0(e, t) {
  me.__c && me.__c(t, e), e.some(function(n) {
    try {
      e = n.__h, n.__h = [], e.some(function(o) {
        o.call(n);
      });
    } catch (o) {
      me.__e(o, n.__v);
    }
  });
}
function K0(e, t, n, o, s, r, l, c) {
  var _, h, i, d = n.props, f = t.props, a = t.type, u = 0;
  if (a === "svg" && (s = !0), r != null) {
    for (; u < r.length; u++)
      if ((_ = r[u]) && "setAttribute" in _ == !!a && (a ? _.localName === a : _.nodeType === 3)) {
        e = _, r[u] = null;
        break;
      }
  }
  if (e == null) {
    if (a === null)
      return document.createTextNode(f);
    e = s ? document.createElementNS("http://www.w3.org/2000/svg", a) : document.createElement(a, f.is && f), r = null, c = !1;
  }
  if (a === null)
    d === f || c && e.data === f || (e.data = f);
  else {
    if (r = r && mp.call(e.childNodes), h = (d = n.props || vp).dangerouslySetInnerHTML, i = f.dangerouslySetInnerHTML, !c) {
      if (r != null)
        for (d = {}, u = 0; u < e.attributes.length; u++)
          d[e.attributes[u].name] = e.attributes[u].value;
      (i || h) && (i && (h && i.__html == h.__html || i.__html === e.innerHTML) || (e.innerHTML = i && i.__html || ""));
    }
    if (q0(e, f, d, s, c), i)
      t.__k = [];
    else if (u = t.props.children, $p(e, Array.isArray(u) ? u : [u], t, n, o, s && a !== "foreignObject", r, l, r ? r[0] : n.__k && dr(n, 0), c), r != null)
      for (u = r.length; u--; )
        r[u] != null && bp(r[u]);
    c || ("value" in f && (u = f.value) !== void 0 && (u !== e.value || a === "progress" && !u || a === "option" && u !== d.value) && fs(e, "value", u, d.value, !1), "checked" in f && (u = f.checked) !== void 0 && u !== e.checked && fs(e, "checked", u, d.checked, !1));
  }
  return e;
}
function Cp(e, t, n) {
  try {
    typeof e == "function" ? e(t) : e.current = t;
  } catch (o) {
    me.__e(o, n);
  }
}
function Ep(e, t, n) {
  var o, s;
  if (me.unmount && me.unmount(e), (o = e.ref) && (o.current && o.current !== e.__e || Cp(o, null, t)), (o = e.__c) != null) {
    if (o.componentWillUnmount)
      try {
        o.componentWillUnmount();
      } catch (r) {
        me.__e(r, t);
      }
    o.base = o.__P = null, e.__c = void 0;
  }
  if (o = e.__k)
    for (s = 0; s < o.length; s++)
      o[s] && Ep(o[s], t, n || typeof e.type != "function");
  n || e.__e == null || bp(e.__e), e.__ = e.__e = e.__d = void 0;
}
function Z0(e, t, n) {
  return this.constructor(e, n);
}
mp = yp.slice, me = { __e: function(e, t, n, o) {
  for (var s, r, l; t = t.__; )
    if ((s = t.__c) && !s.__)
      try {
        if ((r = s.constructor) && r.getDerivedStateFromError != null && (s.setState(r.getDerivedStateFromError(e)), l = s.__d), s.componentDidCatch != null && (s.componentDidCatch(e, o || {}), l = s.__d), l)
          return s.__E = s;
      } catch (c) {
        e = c;
      }
  throw e;
} }, gp = 0, Bt.prototype.setState = function(e, t) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = Ot({}, this.state), typeof e == "function" && (e = e(Ot({}, n), this.props)), e && Ot(n, e), e != null && this.__v && (t && this._sb.push(t), pf(this));
}, Bt.prototype.forceUpdate = function(e) {
  this.__v && (this.__e = !0, e && this.__h.push(e), pf(this));
}, Bt.prototype.render = fa, Po = [], _s.__r = 0;
var J0 = 0;
function oe(e, t, n, o, s) {
  var r, l, c = {};
  for (l in t)
    l == "ref" ? r = t[l] : c[l] = t[l];
  var _ = { type: e, props: c, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: --J0, __source: s, __self: o };
  if (typeof e == "function" && (r = e.defaultProps))
    for (l in r)
      c[l] === void 0 && (c[l] = r[l]);
  return me.vnode && me.vnode(_), _;
}
let Q0 = (e = 21) => crypto.getRandomValues(new Uint8Array(e)).reduce((t, n) => (n &= 63, n < 36 ? t += n.toString(36) : n < 62 ? t += (n - 26).toString(36).toUpperCase() : n > 62 ? t += "-" : t += "_", t), "");
var Vs;
class ew extends Bt {
  constructor() {
    super(...arguments);
    T(this, Vs, (n) => {
      var l;
      const { onDeselect: o, selections: s } = this.props, r = (l = n.target.closest(".picker-deselect-btn")) == null ? void 0 : l.dataset.idx;
      r && o && (s != null && s.length) && (n.stopPropagation(), o([s[+r]], n));
    });
  }
  render() {
    const {
      className: n,
      style: o,
      disabled: s,
      placeholder: r,
      focused: l,
      selections: c = [],
      onClick: _,
      children: h
    } = this.props;
    let i;
    return c.length ? i = /* @__PURE__ */ oe("div", { className: "picker-multi-selections", children: c.map((d, f) => /* @__PURE__ */ oe("div", { className: "picker-multi-selection", children: [
      d.text ?? d.value,
      /* @__PURE__ */ oe("div", { className: "picker-deselect-btn btn", onClick: b(this, Vs), "data-idx": f, children: /* @__PURE__ */ oe("span", { className: "close" }) })
    ] })) }) : i = /* @__PURE__ */ oe("span", { className: "picker-select-placeholder", children: r }), /* @__PURE__ */ oe(
      "div",
      {
        className: B("picker-select picker-select-multi form-control", n, { disabled: s, focused: l }),
        style: o,
        onClick: _,
        children: [
          i,
          h,
          /* @__PURE__ */ oe("span", { class: "caret" })
        ]
      }
    );
  }
}
Vs = new WeakMap();
var zs;
class tw extends Bt {
  constructor() {
    super(...arguments);
    T(this, zs, (n) => {
      const { onDeselect: o, selections: s } = this.props;
      o && (s != null && s.length) && (n.stopPropagation(), o(s, n));
    });
  }
  render() {
    const {
      className: n,
      style: o,
      disabled: s,
      placeholder: r,
      focused: l,
      selections: c = [],
      onDeselect: _,
      onClick: h,
      children: i
    } = this.props, [d] = c, f = d ? /* @__PURE__ */ oe("span", { className: "picker-single-selection", children: d.text ?? d.value }) : /* @__PURE__ */ oe("span", { className: "picker-select-placeholder", children: r }), a = d && _ ? /* @__PURE__ */ oe("button", { type: "button", className: "btn picker-deselect-btn", onClick: b(this, zs), children: /* @__PURE__ */ oe("span", { className: "close" }) }) : null;
    return /* @__PURE__ */ oe(
      "div",
      {
        className: B("picker-select picker-select-single form-control", n, { disabled: s, focused: l }),
        style: o,
        onClick: h,
        children: [
          f,
          i,
          a,
          /* @__PURE__ */ oe("span", { class: "caret" })
        ]
      }
    );
  }
}
zs = new WeakMap();
var Ys, Ap, Or, Gs, Pr, qs;
class nw extends Bt {
  constructor() {
    super(...arguments);
    T(this, Ys);
    R(this, "state", { keys: "", shown: !1 });
    T(this, Or, (n) => {
      var o;
      (o = n.target) != null && o.closest(`#picker-menu-${this.props.id}`) || this.hide();
    });
    T(this, Gs, ({ item: n }) => {
      const o = this.props.items.find((s) => s.value === n.key);
      o && this.props.onSelectItem(o);
    });
    T(this, Pr, (n) => {
      this.setState({ keys: n.target.value });
    });
    T(this, qs, () => {
      this.setState({ keys: "" });
    });
  }
  componentDidMount() {
    document.addEventListener("click", b(this, Or)), this.show();
  }
  componentWillUnmount() {
    document.removeEventListener("click", b(this, Or));
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
      className: s,
      style: r = {},
      maxHeight: l,
      maxWidth: c,
      width: _,
      menu: h,
      searchHint: i
    } = this.props, { shown: d, keys: f } = this.state, a = f.trim().length;
    return /* @__PURE__ */ oe("div", { className: B("picker-menu", s, { shown: d, "has-search": a }), id: `picker-menu-${n}`, style: { maxHeight: l, maxWidth: c, width: _, ...r }, children: [
      o ? /* @__PURE__ */ oe("div", { className: "picker-menu-search", children: [
        /* @__PURE__ */ oe("input", { className: "form-control picker-menu-search-input", type: "text", placeholder: i, value: f, onChange: b(this, Pr), onInput: b(this, Pr) }),
        a ? /* @__PURE__ */ oe("button", { type: "button", className: "btn picker-menu-search-clear", onClick: b(this, qs), children: /* @__PURE__ */ oe("span", { className: "close" }) }) : /* @__PURE__ */ oe("span", { className: "magnifier" })
      ] }) : null,
      /* @__PURE__ */ oe(jc, { className: "picker-menu-list", items: U(this, Ys, Ap).call(this), onClickItem: b(this, Gs), ...h })
    ] });
  }
}
Ys = new WeakSet(), Ap = function() {
  const { selections: n, items: o } = this.props, s = new Set(n), r = this.state.keys.toLowerCase().split(" ").filter((l) => l.length);
  return o.reduce((l, c) => {
    const {
      value: _,
      keys: h,
      text: i,
      ...d
    } = c;
    if (!r.length || r.every((f) => _.toLowerCase().includes(f) || (h == null ? void 0 : h.toLowerCase().includes(f)) || typeof i == "string" && i.toLowerCase().includes(f))) {
      let f = i ?? _;
      typeof f == "string" && r.length && (f = /* @__PURE__ */ oe("span", { dangerouslySetInnerHTML: { __html: r.reduce((a, u) => a.replace(u, `<span class="picker-menu-item-match">${u}</span>`), f) } })), l.push({
        key: _,
        active: s.has(_),
        text: f,
        ...d
      });
    }
    return l;
  }, []);
}, Or = new WeakMap(), Gs = new WeakMap(), Pr = new WeakMap(), qs = new WeakMap();
function yf(e) {
  const t = /* @__PURE__ */ new Set();
  return e.reduce((n, o) => (t.has(o) || (t.add(o), n.push(o)), n), []);
}
var dc, Hr, Wr, Ir, Rn, Ci, Ur, Tc, Xs, Mp, Ks, Tp, Zs, Js, Qs, el, tl, Lp;
let ow = (dc = class extends Bt {
  constructor(n) {
    super(n);
    T(this, Rn);
    T(this, Ur);
    T(this, Xs);
    T(this, Ks);
    T(this, tl);
    T(this, Hr, 0);
    T(this, Wr, Q0());
    T(this, Ir, G0());
    T(this, Zs, (n, o) => {
      const { valueList: s } = this, r = new Set(n.map((c) => c.value)), l = s.filter((c) => !r.has(c));
      this.setState({ value: l.length ? l.join(this.props.valueSplitter ?? ",") : void 0 });
    });
    T(this, Js, (n) => {
      console.log("#handleSelectClick", n), this.setState({ open: !0 });
    });
    T(this, Qs, () => {
      this.close();
    });
    T(this, el, (n) => {
      this.props.multi ? this.toggleValue(n.value) : this.setState({ value: n.value }, () => {
        var o;
        (o = b(this, Ir).current) == null || o.hide();
      });
    });
    this.state = {
      value: U(this, Xs, Mp).call(this, n.defaultValue) ?? "",
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
    return U(this, Ur, Tc).call(this, this.state.value);
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
      const s = ++Da(this, Hr)._;
      if (await U(this, Rn, Ci).call(this, { loading: !0, items: [] }), n = await n(), b(this, Hr) !== s)
        return [];
    }
    const o = {};
    return Array.isArray(n) && this.state.items !== n && (o.items = n), this.state.loading && (o.loading = !1), Object.keys(o).length && await U(this, Rn, Ci).call(this, o), n;
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
    await U(this, Rn, Ci).call(this, { open: n }), n && this.loadItemList();
  }
  open() {
    return this.toggle(!0);
  }
  close() {
    return this.toggle(!1);
  }
  toggleValue(n, o) {
    const { valueList: s } = this, r = s.indexOf(n);
    o !== !!r && (r > -1 ? s.splice(r, 1) : s.push(n), this.setState({ value: s.join(this.props.valueSplitter ?? ",") }));
  }
  render() {
    const {
      className: n,
      style: o,
      children: s,
      multi: r
    } = this.props, l = r ? ew : tw;
    return /* @__PURE__ */ oe("div", { className: B("picker", n), style: o, id: `picker-${b(this, Wr)}`, children: [
      /* @__PURE__ */ oe(l, { ...U(this, Ks, Tp).call(this) }),
      s,
      this.state.open ? /* @__PURE__ */ oe(nw, { ...U(this, tl, Lp).call(this), ref: b(this, Ir) }) : null
    ] });
  }
}, Hr = new WeakMap(), Wr = new WeakMap(), Ir = new WeakMap(), Rn = new WeakSet(), Ci = function(n) {
  return new Promise((o) => {
    this.setState(n, o);
  });
}, Ur = new WeakSet(), Tc = function(n) {
  return typeof n == "string" ? yf(n.split(this.props.valueSplitter ?? ",")) : Array.isArray(n) ? yf(n) : [];
}, Xs = new WeakSet(), Mp = function(n) {
  const o = U(this, Ur, Tc).call(this, n);
  return o.length ? o.join(this.props.valueSplitter ?? ",") : void 0;
}, Ks = new WeakSet(), Tp = function() {
  const { placeholder: n, disabled: o } = this.props, { open: s } = this.state;
  return {
    focused: s,
    placeholder: n,
    disabled: o,
    selections: this.getSelections(),
    onClick: b(this, Js),
    onDeselect: b(this, Zs)
  };
}, Zs = new WeakMap(), Js = new WeakMap(), Qs = new WeakMap(), el = new WeakMap(), tl = new WeakSet(), Lp = function() {
  const { search: n, menuClass: o, menuWidth: s, menuStyle: r, menuMaxHeight: l, menuMaxWidth: c } = this.props, { items: _ } = this.state;
  return {
    id: b(this, Wr),
    items: _,
    selections: this.valueList,
    search: n === !0 || typeof n == "number" && n <= _.length,
    style: r,
    className: o,
    width: s,
    maxHeight: l,
    maxWidth: c,
    onRequestHide: b(this, Qs),
    onSelectItem: b(this, el)
  };
}, R(dc, "defaultProps", {
  container: "body",
  valueSplitter: ",",
  search: !0,
  menuWidth: "auto",
  menuMaxHeight: 400
}), dc);
class bf extends Ne {
}
R(bf, "NAME", "picker"), R(bf, "Component", ow);
var Yl, ae, Dp, Ho, wf, us = {}, Np = [], rw = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function Pt(e, t) {
  for (var n in t)
    e[n] = t[n];
  return e;
}
function Rp(e) {
  var t = e.parentNode;
  t && t.removeChild(e);
}
function Op(e, t, n) {
  var o, s, r, l = {};
  for (r in t)
    r == "key" ? o = t[r] : r == "ref" ? s = t[r] : l[r] = t[r];
  if (arguments.length > 2 && (l.children = arguments.length > 3 ? Yl.call(arguments, 2) : n), typeof e == "function" && e.defaultProps != null)
    for (r in e.defaultProps)
      l[r] === void 0 && (l[r] = e.defaultProps[r]);
  return Ei(e, l, o, s, null);
}
function Ei(e, t, n, o, s) {
  var r = { type: e, props: t, key: n, ref: o, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: s ?? ++Dp };
  return s == null && ae.vnode != null && ae.vnode(r), r;
}
function si() {
  return { current: null };
}
function Gl(e) {
  return e.children;
}
function Wo(e, t) {
  this.props = e, this.context = t;
}
function pr(e, t) {
  if (t == null)
    return e.__ ? pr(e.__, e.__.__k.indexOf(e) + 1) : null;
  for (var n; t < e.__k.length; t++)
    if ((n = e.__k[t]) != null && n.__e != null)
      return n.__e;
  return typeof e.type == "function" ? pr(e) : null;
}
function Pp(e) {
  var t, n;
  if ((e = e.__) != null && e.__c != null) {
    for (e.__e = e.__c.base = null, t = 0; t < e.__k.length; t++)
      if ((n = e.__k[t]) != null && n.__e != null) {
        e.__e = e.__c.base = n.__e;
        break;
      }
    return Pp(e);
  }
}
function $f(e) {
  (!e.__d && (e.__d = !0) && Ho.push(e) && !hs.__r++ || wf !== ae.debounceRendering) && ((wf = ae.debounceRendering) || setTimeout)(hs);
}
function hs() {
  for (var e; hs.__r = Ho.length; )
    e = Ho.sort(function(t, n) {
      return t.__v.__b - n.__v.__b;
    }), Ho = [], e.some(function(t) {
      var n, o, s, r, l, c;
      t.__d && (l = (r = (n = t).__v).__e, (c = n.__P) && (o = [], (s = Pt({}, r)).__v = r.__v + 1, ua(c, r, s, n.__n, c.ownerSVGElement !== void 0, r.__h != null ? [l] : null, o, l ?? pr(r), r.__h), Up(o, r), r.__e != l && Pp(r)));
    });
}
function Hp(e, t, n, o, s, r, l, c, _, h) {
  var i, d, f, a, u, y, p, m = o && o.__k || Np, g = m.length;
  for (n.__k = [], i = 0; i < t.length; i++)
    if ((a = n.__k[i] = (a = t[i]) == null || typeof a == "boolean" ? null : typeof a == "string" || typeof a == "number" || typeof a == "bigint" ? Ei(null, a, null, null, a) : Array.isArray(a) ? Ei(Gl, { children: a }, null, null, null) : a.__b > 0 ? Ei(a.type, a.props, a.key, a.ref ? a.ref : null, a.__v) : a) != null) {
      if (a.__ = n, a.__b = n.__b + 1, (f = m[i]) === null || f && a.key == f.key && a.type === f.type)
        m[i] = void 0;
      else
        for (d = 0; d < g; d++) {
          if ((f = m[d]) && a.key == f.key && a.type === f.type) {
            m[d] = void 0;
            break;
          }
          f = null;
        }
      ua(e, a, f = f || us, s, r, l, c, _, h), u = a.__e, (d = a.ref) && f.ref != d && (p || (p = []), f.ref && p.push(f.ref, null, a), p.push(d, a.__c || u, a)), u != null ? (y == null && (y = u), typeof a.type == "function" && a.__k === f.__k ? a.__d = _ = Wp(a, _, e) : _ = Ip(e, a, f, m, u, _), typeof n.type == "function" && (n.__d = _)) : _ && f.__e == _ && _.parentNode != e && (_ = pr(f));
    }
  for (n.__e = y, i = g; i--; )
    m[i] != null && Bp(m[i], m[i]);
  if (p)
    for (i = 0; i < p.length; i++)
      Fp(p[i], p[++i], p[++i]);
}
function Wp(e, t, n) {
  for (var o, s = e.__k, r = 0; s && r < s.length; r++)
    (o = s[r]) && (o.__ = e, t = typeof o.type == "function" ? Wp(o, t, n) : Ip(n, o, o, s, o.__e, t));
  return t;
}
function Ip(e, t, n, o, s, r) {
  var l, c, _;
  if (t.__d !== void 0)
    l = t.__d, t.__d = void 0;
  else if (n == null || s != r || s.parentNode == null)
    e:
      if (r == null || r.parentNode !== e)
        e.appendChild(s), l = null;
      else {
        for (c = r, _ = 0; (c = c.nextSibling) && _ < o.length; _ += 2)
          if (c == s)
            break e;
        e.insertBefore(s, r), l = r;
      }
  return l !== void 0 ? l : s.nextSibling;
}
function iw(e, t, n, o, s) {
  var r;
  for (r in n)
    r === "children" || r === "key" || r in t || ds(e, r, null, n[r], o);
  for (r in t)
    s && typeof t[r] != "function" || r === "children" || r === "key" || r === "value" || r === "checked" || n[r] === t[r] || ds(e, r, t[r], n[r], o);
}
function kf(e, t, n) {
  t[0] === "-" ? e.setProperty(t, n) : e[t] = n == null ? "" : typeof n != "number" || rw.test(t) ? n : n + "px";
}
function ds(e, t, n, o, s) {
  var r;
  e:
    if (t === "style")
      if (typeof n == "string")
        e.style.cssText = n;
      else {
        if (typeof o == "string" && (e.style.cssText = o = ""), o)
          for (t in o)
            n && t in n || kf(e.style, t, "");
        if (n)
          for (t in n)
            o && n[t] === o[t] || kf(e.style, t, n[t]);
      }
    else if (t[0] === "o" && t[1] === "n")
      r = t !== (t = t.replace(/Capture$/, "")), t = t.toLowerCase() in e ? t.toLowerCase().slice(2) : t.slice(2), e.l || (e.l = {}), e.l[t + r] = n, n ? o || e.addEventListener(t, r ? Sf : xf, r) : e.removeEventListener(t, r ? Sf : xf, r);
    else if (t !== "dangerouslySetInnerHTML") {
      if (s)
        t = t.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
      else if (t !== "href" && t !== "list" && t !== "form" && t !== "tabIndex" && t !== "download" && t in e)
        try {
          e[t] = n ?? "";
          break e;
        } catch {
        }
      typeof n == "function" || (n == null || n === !1 && t.indexOf("-") == -1 ? e.removeAttribute(t) : e.setAttribute(t, n));
    }
}
function xf(e) {
  this.l[e.type + !1](ae.event ? ae.event(e) : e);
}
function Sf(e) {
  this.l[e.type + !0](ae.event ? ae.event(e) : e);
}
function ua(e, t, n, o, s, r, l, c, _) {
  var h, i, d, f, a, u, y, p, m, g, $, w, S, C, A, v = t.type;
  if (t.constructor !== void 0)
    return null;
  n.__h != null && (_ = n.__h, c = t.__e = n.__e, t.__h = null, r = [c]), (h = ae.__b) && h(t);
  try {
    e:
      if (typeof v == "function") {
        if (p = t.props, m = (h = v.contextType) && o[h.__c], g = h ? m ? m.props.value : h.__ : o, n.__c ? y = (i = t.__c = n.__c).__ = i.__E : ("prototype" in v && v.prototype.render ? t.__c = i = new v(p, g) : (t.__c = i = new Wo(p, g), i.constructor = v, i.render = lw), m && m.sub(i), i.props = p, i.state || (i.state = {}), i.context = g, i.__n = o, d = i.__d = !0, i.__h = [], i._sb = []), i.__s == null && (i.__s = i.state), v.getDerivedStateFromProps != null && (i.__s == i.state && (i.__s = Pt({}, i.__s)), Pt(i.__s, v.getDerivedStateFromProps(p, i.__s))), f = i.props, a = i.state, d)
          v.getDerivedStateFromProps == null && i.componentWillMount != null && i.componentWillMount(), i.componentDidMount != null && i.__h.push(i.componentDidMount);
        else {
          if (v.getDerivedStateFromProps == null && p !== f && i.componentWillReceiveProps != null && i.componentWillReceiveProps(p, g), !i.__e && i.shouldComponentUpdate != null && i.shouldComponentUpdate(p, i.__s, g) === !1 || t.__v === n.__v) {
            for (i.props = p, i.state = i.__s, t.__v !== n.__v && (i.__d = !1), i.__v = t, t.__e = n.__e, t.__k = n.__k, t.__k.forEach(function(k) {
              k && (k.__ = t);
            }), $ = 0; $ < i._sb.length; $++)
              i.__h.push(i._sb[$]);
            i._sb = [], i.__h.length && l.push(i);
            break e;
          }
          i.componentWillUpdate != null && i.componentWillUpdate(p, i.__s, g), i.componentDidUpdate != null && i.__h.push(function() {
            i.componentDidUpdate(f, a, u);
          });
        }
        if (i.context = g, i.props = p, i.__v = t, i.__P = e, w = ae.__r, S = 0, "prototype" in v && v.prototype.render) {
          for (i.state = i.__s, i.__d = !1, w && w(t), h = i.render(i.props, i.state, i.context), C = 0; C < i._sb.length; C++)
            i.__h.push(i._sb[C]);
          i._sb = [];
        } else
          do
            i.__d = !1, w && w(t), h = i.render(i.props, i.state, i.context), i.state = i.__s;
          while (i.__d && ++S < 25);
        i.state = i.__s, i.getChildContext != null && (o = Pt(Pt({}, o), i.getChildContext())), d || i.getSnapshotBeforeUpdate == null || (u = i.getSnapshotBeforeUpdate(f, a)), A = h != null && h.type === Gl && h.key == null ? h.props.children : h, Hp(e, Array.isArray(A) ? A : [A], t, n, o, s, r, l, c, _), i.base = t.__e, t.__h = null, i.__h.length && l.push(i), y && (i.__E = i.__ = null), i.__e = !1;
      } else
        r == null && t.__v === n.__v ? (t.__k = n.__k, t.__e = n.__e) : t.__e = sw(n.__e, t, n, o, s, r, l, _);
    (h = ae.diffed) && h(t);
  } catch (k) {
    t.__v = null, (_ || r != null) && (t.__e = c, t.__h = !!_, r[r.indexOf(c)] = null), ae.__e(k, t, n);
  }
}
function Up(e, t) {
  ae.__c && ae.__c(t, e), e.some(function(n) {
    try {
      e = n.__h, n.__h = [], e.some(function(o) {
        o.call(n);
      });
    } catch (o) {
      ae.__e(o, n.__v);
    }
  });
}
function sw(e, t, n, o, s, r, l, c) {
  var _, h, i, d = n.props, f = t.props, a = t.type, u = 0;
  if (a === "svg" && (s = !0), r != null) {
    for (; u < r.length; u++)
      if ((_ = r[u]) && "setAttribute" in _ == !!a && (a ? _.localName === a : _.nodeType === 3)) {
        e = _, r[u] = null;
        break;
      }
  }
  if (e == null) {
    if (a === null)
      return document.createTextNode(f);
    e = s ? document.createElementNS("http://www.w3.org/2000/svg", a) : document.createElement(a, f.is && f), r = null, c = !1;
  }
  if (a === null)
    d === f || c && e.data === f || (e.data = f);
  else {
    if (r = r && Yl.call(e.childNodes), h = (d = n.props || us).dangerouslySetInnerHTML, i = f.dangerouslySetInnerHTML, !c) {
      if (r != null)
        for (d = {}, u = 0; u < e.attributes.length; u++)
          d[e.attributes[u].name] = e.attributes[u].value;
      (i || h) && (i && (h && i.__html == h.__html || i.__html === e.innerHTML) || (e.innerHTML = i && i.__html || ""));
    }
    if (iw(e, f, d, s, c), i)
      t.__k = [];
    else if (u = t.props.children, Hp(e, Array.isArray(u) ? u : [u], t, n, o, s && a !== "foreignObject", r, l, r ? r[0] : n.__k && pr(n, 0), c), r != null)
      for (u = r.length; u--; )
        r[u] != null && Rp(r[u]);
    c || ("value" in f && (u = f.value) !== void 0 && (u !== e.value || a === "progress" && !u || a === "option" && u !== d.value) && ds(e, "value", u, d.value, !1), "checked" in f && (u = f.checked) !== void 0 && u !== e.checked && ds(e, "checked", u, d.checked, !1));
  }
  return e;
}
function Fp(e, t, n) {
  try {
    typeof e == "function" ? e(t) : e.current = t;
  } catch (o) {
    ae.__e(o, n);
  }
}
function Bp(e, t, n) {
  var o, s;
  if (ae.unmount && ae.unmount(e), (o = e.ref) && (o.current && o.current !== e.__e || Fp(o, null, t)), (o = e.__c) != null) {
    if (o.componentWillUnmount)
      try {
        o.componentWillUnmount();
      } catch (r) {
        ae.__e(r, t);
      }
    o.base = o.__P = null, e.__c = void 0;
  }
  if (o = e.__k)
    for (s = 0; s < o.length; s++)
      o[s] && Bp(o[s], t, n || typeof e.type != "function");
  n || e.__e == null || Rp(e.__e), e.__ = e.__e = e.__d = void 0;
}
function lw(e, t, n) {
  return this.constructor(e, n);
}
function cw(e, t, n) {
  var o, s, r;
  ae.__ && ae.__(e, t), s = (o = typeof n == "function") ? null : n && n.__k || t.__k, r = [], ua(t, e = (!o && n || t).__k = Op(Gl, null, [e]), s || us, us, t.ownerSVGElement !== void 0, !o && n ? [n] : s ? null : t.firstChild ? Yl.call(t.childNodes) : null, r, !o && n ? n : s ? s.__e : t.firstChild, o), Up(r, e);
}
Yl = Np.slice, ae = { __e: function(e, t, n, o) {
  for (var s, r, l; t = t.__; )
    if ((s = t.__c) && !s.__)
      try {
        if ((r = s.constructor) && r.getDerivedStateFromError != null && (s.setState(r.getDerivedStateFromError(e)), l = s.__d), s.componentDidCatch != null && (s.componentDidCatch(e, o || {}), l = s.__d), l)
          return s.__E = s;
      } catch (c) {
        e = c;
      }
  throw e;
} }, Dp = 0, Wo.prototype.setState = function(e, t) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = Pt({}, this.state), typeof e == "function" && (e = e(Pt({}, n), this.props)), e && Pt(n, e), e != null && this.__v && (t && this._sb.push(t), $f(this));
}, Wo.prototype.forceUpdate = function(e) {
  this.__v && (this.__e = !0, e && this.__h.push(e), $f(this));
}, Wo.prototype.render = Gl, Ho = [], hs.__r = 0;
var aw = 0;
function Re(e, t, n, o, s) {
  var r, l, c = {};
  for (l in t)
    l == "ref" ? r = t[l] : c[l] = t[l];
  var _ = { type: e, props: c, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: --aw, __source: s, __self: o };
  if (typeof e == "function" && (r = e.defaultProps))
    for (l in r)
      c[l] === void 0 && (c[l] = r[l]);
  return ae.vnode && ae.vnode(_), _;
}
var ps = {}, _w = {
  get exports() {
    return ps;
  },
  set exports(e) {
    ps = e;
  }
};
(function(e, t) {
  (function(n, o) {
    e.exports = o();
  })(Zh, function() {
    var n = 1e3, o = 6e4, s = 36e5, r = "millisecond", l = "second", c = "minute", _ = "hour", h = "day", i = "week", d = "month", f = "quarter", a = "year", u = "date", y = "Invalid Date", p = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, m = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, g = { name: "en", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), ordinal: function(D) {
      var E = ["th", "st", "nd", "rd"], x = D % 100;
      return "[" + D + (E[(x - 20) % 10] || E[x] || E[0]) + "]";
    } }, $ = function(D, E, x) {
      var N = String(D);
      return !N || N.length >= E ? D : "" + Array(E + 1 - N.length).join(x) + D;
    }, w = { s: $, z: function(D) {
      var E = -D.utcOffset(), x = Math.abs(E), N = Math.floor(x / 60), M = x % 60;
      return (E <= 0 ? "+" : "-") + $(N, 2, "0") + ":" + $(M, 2, "0");
    }, m: function D(E, x) {
      if (E.date() < x.date())
        return -D(x, E);
      var N = 12 * (x.year() - E.year()) + (x.month() - E.month()), M = E.clone().add(N, d), P = x - M < 0, O = E.clone().add(N + (P ? -1 : 1), d);
      return +(-(N + (x - M) / (P ? M - O : O - M)) || 0);
    }, a: function(D) {
      return D < 0 ? Math.ceil(D) || 0 : Math.floor(D);
    }, p: function(D) {
      return { M: d, y: a, w: i, d: h, D: u, h: _, m: c, s: l, ms: r, Q: f }[D] || String(D || "").toLowerCase().replace(/s$/, "");
    }, u: function(D) {
      return D === void 0;
    } }, S = "en", C = {};
    C[S] = g;
    var A = function(D) {
      return D instanceof j;
    }, v = function D(E, x, N) {
      var M;
      if (!E)
        return S;
      if (typeof E == "string") {
        var P = E.toLowerCase();
        C[P] && (M = P), x && (C[P] = x, M = P);
        var O = E.split("-");
        if (!M && O.length > 1)
          return D(O[0]);
      } else {
        var W = E.name;
        C[W] = E, M = W;
      }
      return !N && M && (S = M), M || !N && S;
    }, k = function(D, E) {
      if (A(D))
        return D.clone();
      var x = typeof E == "object" ? E : {};
      return x.date = D, x.args = arguments, new j(x);
    }, L = w;
    L.l = v, L.i = A, L.w = function(D, E) {
      return k(D, { locale: E.$L, utc: E.$u, x: E.$x, $offset: E.$offset });
    };
    var j = function() {
      function D(x) {
        this.$L = v(x.locale, null, !0), this.parse(x);
      }
      var E = D.prototype;
      return E.parse = function(x) {
        this.$d = function(N) {
          var M = N.date, P = N.utc;
          if (M === null)
            return new Date(NaN);
          if (L.u(M))
            return new Date();
          if (M instanceof Date)
            return new Date(M);
          if (typeof M == "string" && !/Z$/i.test(M)) {
            var O = M.match(p);
            if (O) {
              var W = O[2] - 1 || 0, z = (O[7] || "0").substring(0, 3);
              return P ? new Date(Date.UTC(O[1], W, O[3] || 1, O[4] || 0, O[5] || 0, O[6] || 0, z)) : new Date(O[1], W, O[3] || 1, O[4] || 0, O[5] || 0, O[6] || 0, z);
            }
          }
          return new Date(M);
        }(x), this.$x = x.x || {}, this.init();
      }, E.init = function() {
        var x = this.$d;
        this.$y = x.getFullYear(), this.$M = x.getMonth(), this.$D = x.getDate(), this.$W = x.getDay(), this.$H = x.getHours(), this.$m = x.getMinutes(), this.$s = x.getSeconds(), this.$ms = x.getMilliseconds();
      }, E.$utils = function() {
        return L;
      }, E.isValid = function() {
        return this.$d.toString() !== y;
      }, E.isSame = function(x, N) {
        var M = k(x);
        return this.startOf(N) <= M && M <= this.endOf(N);
      }, E.isAfter = function(x, N) {
        return k(x) < this.startOf(N);
      }, E.isBefore = function(x, N) {
        return this.endOf(N) < k(x);
      }, E.$g = function(x, N, M) {
        return L.u(x) ? this[N] : this.set(M, x);
      }, E.unix = function() {
        return Math.floor(this.valueOf() / 1e3);
      }, E.valueOf = function() {
        return this.$d.getTime();
      }, E.startOf = function(x, N) {
        var M = this, P = !!L.u(N) || N, O = L.p(x), W = function(Z, G) {
          var ne = L.w(M.$u ? Date.UTC(M.$y, G, Z) : new Date(M.$y, G, Z), M);
          return P ? ne : ne.endOf(h);
        }, z = function(Z, G) {
          return L.w(M.toDate()[Z].apply(M.toDate("s"), (P ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(G)), M);
        }, V = this.$W, Y = this.$M, Q = this.$D, I = "set" + (this.$u ? "UTC" : "");
        switch (O) {
          case a:
            return P ? W(1, 0) : W(31, 11);
          case d:
            return P ? W(1, Y) : W(0, Y + 1);
          case i:
            var X = this.$locale().weekStart || 0, te = (V < X ? V + 7 : V) - X;
            return W(P ? Q - te : Q + (6 - te), Y);
          case h:
          case u:
            return z(I + "Hours", 0);
          case _:
            return z(I + "Minutes", 1);
          case c:
            return z(I + "Seconds", 2);
          case l:
            return z(I + "Milliseconds", 3);
          default:
            return this.clone();
        }
      }, E.endOf = function(x) {
        return this.startOf(x, !1);
      }, E.$set = function(x, N) {
        var M, P = L.p(x), O = "set" + (this.$u ? "UTC" : ""), W = (M = {}, M[h] = O + "Date", M[u] = O + "Date", M[d] = O + "Month", M[a] = O + "FullYear", M[_] = O + "Hours", M[c] = O + "Minutes", M[l] = O + "Seconds", M[r] = O + "Milliseconds", M)[P], z = P === h ? this.$D + (N - this.$W) : N;
        if (P === d || P === a) {
          var V = this.clone().set(u, 1);
          V.$d[W](z), V.init(), this.$d = V.set(u, Math.min(this.$D, V.daysInMonth())).$d;
        } else
          W && this.$d[W](z);
        return this.init(), this;
      }, E.set = function(x, N) {
        return this.clone().$set(x, N);
      }, E.get = function(x) {
        return this[L.p(x)]();
      }, E.add = function(x, N) {
        var M, P = this;
        x = Number(x);
        var O = L.p(N), W = function(Y) {
          var Q = k(P);
          return L.w(Q.date(Q.date() + Math.round(Y * x)), P);
        };
        if (O === d)
          return this.set(d, this.$M + x);
        if (O === a)
          return this.set(a, this.$y + x);
        if (O === h)
          return W(1);
        if (O === i)
          return W(7);
        var z = (M = {}, M[c] = o, M[_] = s, M[l] = n, M)[O] || 1, V = this.$d.getTime() + x * z;
        return L.w(V, this);
      }, E.subtract = function(x, N) {
        return this.add(-1 * x, N);
      }, E.format = function(x) {
        var N = this, M = this.$locale();
        if (!this.isValid())
          return M.invalidDate || y;
        var P = x || "YYYY-MM-DDTHH:mm:ssZ", O = L.z(this), W = this.$H, z = this.$m, V = this.$M, Y = M.weekdays, Q = M.months, I = function(G, ne, we, Se) {
          return G && (G[ne] || G(N, P)) || we[ne].slice(0, Se);
        }, X = function(G) {
          return L.s(W % 12 || 12, G, "0");
        }, te = M.meridiem || function(G, ne, we) {
          var Se = G < 12 ? "AM" : "PM";
          return we ? Se.toLowerCase() : Se;
        }, Z = { YY: String(this.$y).slice(-2), YYYY: this.$y, M: V + 1, MM: L.s(V + 1, 2, "0"), MMM: I(M.monthsShort, V, Q, 3), MMMM: I(Q, V), D: this.$D, DD: L.s(this.$D, 2, "0"), d: String(this.$W), dd: I(M.weekdaysMin, this.$W, Y, 2), ddd: I(M.weekdaysShort, this.$W, Y, 3), dddd: Y[this.$W], H: String(W), HH: L.s(W, 2, "0"), h: X(1), hh: X(2), a: te(W, z, !0), A: te(W, z, !1), m: String(z), mm: L.s(z, 2, "0"), s: String(this.$s), ss: L.s(this.$s, 2, "0"), SSS: L.s(this.$ms, 3, "0"), Z: O };
        return P.replace(m, function(G, ne) {
          return ne || Z[G] || O.replace(":", "");
        });
      }, E.utcOffset = function() {
        return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
      }, E.diff = function(x, N, M) {
        var P, O = L.p(N), W = k(x), z = (W.utcOffset() - this.utcOffset()) * o, V = this - W, Y = L.m(this, W);
        return Y = (P = {}, P[a] = Y / 12, P[d] = Y, P[f] = Y / 3, P[i] = (V - z) / 6048e5, P[h] = (V - z) / 864e5, P[_] = V / s, P[c] = V / o, P[l] = V / n, P)[O] || V, M ? Y : L.a(Y);
      }, E.daysInMonth = function() {
        return this.endOf(d).$D;
      }, E.$locale = function() {
        return C[this.$L];
      }, E.locale = function(x, N) {
        if (!x)
          return this.$L;
        var M = this.clone(), P = v(x, N, !0);
        return P && (M.$L = P), M;
      }, E.clone = function() {
        return L.w(this.$d, this);
      }, E.toDate = function() {
        return new Date(this.valueOf());
      }, E.toJSON = function() {
        return this.isValid() ? this.toISOString() : null;
      }, E.toISOString = function() {
        return this.$d.toISOString();
      }, E.toString = function() {
        return this.$d.toUTCString();
      }, D;
    }(), F = j.prototype;
    return k.prototype = F, [["$ms", r], ["$s", l], ["$m", c], ["$H", _], ["$W", h], ["$M", d], ["$y", a], ["$D", u]].forEach(function(D) {
      F[D[1]] = function(E) {
        return this.$g(E, D[0], D[1]);
      };
    }), k.extend = function(D, E) {
      return D.$i || (D(E, j, k), D.$i = !0), k;
    }, k.locale = v, k.isDayjs = A, k.unix = function(D) {
      return k(1e3 * D);
    }, k.en = C[S], k.Ls = C, k.p = {}, k;
  });
})(_w);
const fw = (e) => {
  const t = ps(`1989-01-01 ${e || "00:00:00"}`);
  return {
    hour: t.hour(),
    minute: t.minute(),
    second: t.second()
  };
};
function uw() {
  let e = new Array(24).fill(0), t = new Array(60).fill(0), n = new Array(60).fill(0);
  return e = e.map((o, s) => o + s), t = t.map((o, s) => o + s), n = n.map((o, s) => o + s), { hourList: e, minuteList: t, secondList: n };
}
class hw extends Wo {
  constructor() {
    super(...arguments);
    R(this, "cellHeight", 24);
    R(this, "ref", si());
    R(this, "hourRef", si());
    R(this, "minuteRef", si());
    R(this, "secondRef", si());
    R(this, "state", {
      selectTime: this.props.value || "00:00:00"
    });
  }
  handleMoveTime(n) {
    var s, r, l;
    const o = "smooth";
    n.hour && this.hourRef.current && ((s = this.hourRef.current) == null || s.scrollTo({ behavior: o, top: n.hour * this.cellHeight })), n.minute && this.minuteRef.current && ((r = this.minuteRef.current) == null || r.scrollTo({ behavior: o, top: n.minute * this.cellHeight })), n.second && this.secondRef.current && ((l = this.secondRef.current) == null || l.scrollTo({ behavior: o, top: n.second * this.cellHeight }));
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
    const s = fw(this.state.selectTime);
    return o.map((r) => {
      const l = s[n] === r, c = { ...s, [n]: r };
      return /* @__PURE__ */ Re(
        "button",
        {
          className: B("btn", "size-sm", "ghost", "flex", { active: l }),
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
    const { showSeconds: n, style: o } = this.props, { hourList: s, minuteList: r, secondList: l } = uw();
    return /* @__PURE__ */ Re("div", { className: B("timepicker-timepanel", "pt-px"), style: o, ref: this.ref, children: [
      /* @__PURE__ */ Re("div", { className: B("flex", " justify-around", "p-px", "not-hide-timepicker"), children: [
        /* @__PURE__ */ Re("div", { className: "overflow-hidden", children: /* @__PURE__ */ Re("div", { className: "timepicker-timepanel-select-col", ref: this.hourRef, children: this.renderColumn("hour", s) }) }),
        /* @__PURE__ */ Re("div", { className: "overflow-hidden", children: /* @__PURE__ */ Re("div", { className: "timepicker-timepanel-select-col", ref: this.minuteRef, children: this.renderColumn("minute", r) }) }),
        n && /* @__PURE__ */ Re("div", { className: "overflow-hidden", children: /* @__PURE__ */ Re("div", { className: "timepicker-timepanel-select-col", ref: this.secondRef, children: this.renderColumn("second", l) }) })
      ] }),
      /* @__PURE__ */ Re("div", { className: B("timepicker-timepanel-actions", "flex", "p-px", "justify-between", "align-center"), children: [
        /* @__PURE__ */ Re("button", { className: B("btn", "size-sm", "ghost", "text-primary"), type: "button", onClick: this.onClear.bind(this), children: "清除" }),
        /* @__PURE__ */ Re("button", { className: B("btn", "size-sm", "ghost", "text-primary"), type: "button", onClick: this.onSubmit.bind(this), children: "确认" })
      ] })
    ] });
  }
}
function Kr(e) {
  return e.split("-")[1];
}
function ha(e) {
  return e === "y" ? "height" : "width";
}
function Zn(e) {
  return e.split("-")[0];
}
function ql(e) {
  return ["top", "bottom"].includes(Zn(e)) ? "x" : "y";
}
function Cf(e, t, n) {
  let {
    reference: o,
    floating: s
  } = e;
  const r = o.x + o.width / 2 - s.width / 2, l = o.y + o.height / 2 - s.height / 2, c = ql(t), _ = ha(c), h = o[_] / 2 - s[_] / 2, i = Zn(t), d = c === "x";
  let f;
  switch (i) {
    case "top":
      f = {
        x: r,
        y: o.y - s.height
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
        x: o.x - s.width,
        y: l
      };
      break;
    default:
      f = {
        x: o.x,
        y: o.y
      };
  }
  switch (Kr(t)) {
    case "start":
      f[c] -= h * (n && d ? -1 : 1);
      break;
    case "end":
      f[c] += h * (n && d ? -1 : 1);
      break;
  }
  return f;
}
const dw = async (e, t, n) => {
  const {
    placement: o = "bottom",
    strategy: s = "absolute",
    middleware: r = [],
    platform: l
  } = n, c = r.filter(Boolean), _ = await (l.isRTL == null ? void 0 : l.isRTL(t));
  let h = await l.getElementRects({
    reference: e,
    floating: t,
    strategy: s
  }), {
    x: i,
    y: d
  } = Cf(h, o, _), f = o, a = {}, u = 0;
  for (let y = 0; y < c.length; y++) {
    const {
      name: p,
      fn: m
    } = c[y], {
      x: g,
      y: $,
      data: w,
      reset: S
    } = await m({
      x: i,
      y: d,
      initialPlacement: o,
      placement: f,
      strategy: s,
      middlewareData: a,
      rects: h,
      platform: l,
      elements: {
        reference: e,
        floating: t
      }
    });
    if (i = g ?? i, d = $ ?? d, a = {
      ...a,
      [p]: {
        ...a[p],
        ...w
      }
    }, S && u <= 50) {
      u++, typeof S == "object" && (S.placement && (f = S.placement), S.rects && (h = S.rects === !0 ? await l.getElementRects({
        reference: e,
        floating: t,
        strategy: s
      }) : S.rects), {
        x: i,
        y: d
      } = Cf(h, f, _)), y = -1;
      continue;
    }
  }
  return {
    x: i,
    y: d,
    placement: f,
    strategy: s,
    middlewareData: a
  };
};
function pw(e) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...e
  };
}
function jp(e) {
  return typeof e != "number" ? pw(e) : {
    top: e,
    right: e,
    bottom: e,
    left: e
  };
}
function ms(e) {
  return {
    ...e,
    top: e.y,
    left: e.x,
    right: e.x + e.width,
    bottom: e.y + e.height
  };
}
async function mw(e, t) {
  var n;
  t === void 0 && (t = {});
  const {
    x: o,
    y: s,
    platform: r,
    rects: l,
    elements: c,
    strategy: _
  } = e, {
    boundary: h = "clippingAncestors",
    rootBoundary: i = "viewport",
    elementContext: d = "floating",
    altBoundary: f = !1,
    padding: a = 0
  } = t, u = jp(a), p = c[f ? d === "floating" ? "reference" : "floating" : d], m = ms(await r.getClippingRect({
    element: (n = await (r.isElement == null ? void 0 : r.isElement(p))) == null || n ? p : p.contextElement || await (r.getDocumentElement == null ? void 0 : r.getDocumentElement(c.floating)),
    boundary: h,
    rootBoundary: i,
    strategy: _
  })), g = d === "floating" ? {
    ...l.floating,
    x: o,
    y: s
  } : l.reference, $ = await (r.getOffsetParent == null ? void 0 : r.getOffsetParent(c.floating)), w = await (r.isElement == null ? void 0 : r.isElement($)) ? await (r.getScale == null ? void 0 : r.getScale($)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, S = ms(r.convertOffsetParentRelativeRectToViewportRelativeRect ? await r.convertOffsetParentRelativeRectToViewportRelativeRect({
    rect: g,
    offsetParent: $,
    strategy: _
  }) : g);
  return {
    top: (m.top - S.top + u.top) / w.y,
    bottom: (S.bottom - m.bottom + u.bottom) / w.y,
    left: (m.left - S.left + u.left) / w.x,
    right: (S.right - m.right + u.right) / w.x
  };
}
const gw = Math.min, vw = Math.max;
function yw(e, t, n) {
  return vw(e, gw(t, n));
}
const bw = (e) => ({
  name: "arrow",
  options: e,
  async fn(t) {
    const {
      element: n,
      padding: o = 0
    } = e || {}, {
      x: s,
      y: r,
      placement: l,
      rects: c,
      platform: _
    } = t;
    if (n == null)
      return {};
    const h = jp(o), i = {
      x: s,
      y: r
    }, d = ql(l), f = ha(d), a = await _.getDimensions(n), u = d === "y" ? "top" : "left", y = d === "y" ? "bottom" : "right", p = c.reference[f] + c.reference[d] - i[d] - c.floating[f], m = i[d] - c.reference[d], g = await (_.getOffsetParent == null ? void 0 : _.getOffsetParent(n));
    let $ = g ? d === "y" ? g.clientHeight || 0 : g.clientWidth || 0 : 0;
    $ === 0 && ($ = c.floating[f]);
    const w = p / 2 - m / 2, S = h[u], C = $ - a[f] - h[y], A = $ / 2 - a[f] / 2 + w, v = yw(S, A, C), L = Kr(l) != null && A != v && c.reference[f] / 2 - (A < S ? h[u] : h[y]) - a[f] / 2 < 0 ? A < S ? S - A : C - A : 0;
    return {
      [d]: i[d] - L,
      data: {
        [d]: v,
        centerOffset: A - v
      }
    };
  }
}), ww = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function gs(e) {
  return e.replace(/left|right|bottom|top/g, (t) => ww[t]);
}
function $w(e, t, n) {
  n === void 0 && (n = !1);
  const o = Kr(e), s = ql(e), r = ha(s);
  let l = s === "x" ? o === (n ? "end" : "start") ? "right" : "left" : o === "start" ? "bottom" : "top";
  return t.reference[r] > t.floating[r] && (l = gs(l)), {
    main: l,
    cross: gs(l)
  };
}
const kw = {
  start: "end",
  end: "start"
};
function Lc(e) {
  return e.replace(/start|end/g, (t) => kw[t]);
}
function xw(e) {
  const t = gs(e);
  return [Lc(e), t, Lc(t)];
}
function Sw(e, t, n) {
  const o = ["left", "right"], s = ["right", "left"], r = ["top", "bottom"], l = ["bottom", "top"];
  switch (e) {
    case "top":
    case "bottom":
      return n ? t ? s : o : t ? o : s;
    case "left":
    case "right":
      return t ? r : l;
    default:
      return [];
  }
}
function Cw(e, t, n, o) {
  const s = Kr(e);
  let r = Sw(Zn(e), n === "start", o);
  return s && (r = r.map((l) => l + "-" + s), t && (r = r.concat(r.map(Lc)))), r;
}
const Ew = function(e) {
  return e === void 0 && (e = {}), {
    name: "flip",
    options: e,
    async fn(t) {
      var n;
      const {
        placement: o,
        middlewareData: s,
        rects: r,
        initialPlacement: l,
        platform: c,
        elements: _
      } = t, {
        mainAxis: h = !0,
        crossAxis: i = !0,
        fallbackPlacements: d,
        fallbackStrategy: f = "bestFit",
        fallbackAxisSideDirection: a = "none",
        flipAlignment: u = !0,
        ...y
      } = e, p = Zn(o), m = Zn(l) === l, g = await (c.isRTL == null ? void 0 : c.isRTL(_.floating)), $ = d || (m || !u ? [gs(l)] : xw(l));
      !d && a !== "none" && $.push(...Cw(l, u, a, g));
      const w = [l, ...$], S = await mw(t, y), C = [];
      let A = ((n = s.flip) == null ? void 0 : n.overflows) || [];
      if (h && C.push(S[p]), i) {
        const {
          main: L,
          cross: j
        } = $w(o, r, g);
        C.push(S[L], S[j]);
      }
      if (A = [...A, {
        placement: o,
        overflows: C
      }], !C.every((L) => L <= 0)) {
        var v;
        const L = (((v = s.flip) == null ? void 0 : v.index) || 0) + 1, j = w[L];
        if (j)
          return {
            data: {
              index: L,
              overflows: A
            },
            reset: {
              placement: j
            }
          };
        let F = "bottom";
        switch (f) {
          case "bestFit": {
            var k;
            const D = (k = A.map((E) => [E, E.overflows.filter((x) => x > 0).reduce((x, N) => x + N, 0)]).sort((E, x) => E[1] - x[1])[0]) == null ? void 0 : k[0].placement;
            D && (F = D);
            break;
          }
          case "initialPlacement":
            F = l;
            break;
        }
        if (o !== F)
          return {
            reset: {
              placement: F
            }
          };
      }
      return {};
    }
  };
};
async function Aw(e, t) {
  const {
    placement: n,
    platform: o,
    elements: s
  } = e, r = await (o.isRTL == null ? void 0 : o.isRTL(s.floating)), l = Zn(n), c = Kr(n), _ = ql(n) === "x", h = ["left", "top"].includes(l) ? -1 : 1, i = r && _ ? -1 : 1, d = typeof t == "function" ? t(e) : t;
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
    x: a * i,
    y: f * h
  } : {
    x: f * h,
    y: a * i
  };
}
const Mw = function(e) {
  return e === void 0 && (e = 0), {
    name: "offset",
    options: e,
    async fn(t) {
      const {
        x: n,
        y: o
      } = t, s = await Aw(t, e);
      return {
        x: n + s.x,
        y: o + s.y,
        data: s
      };
    }
  };
};
function We(e) {
  var t;
  return ((t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function ot(e) {
  return We(e).getComputedStyle(e);
}
function Gt(e) {
  return zp(e) ? (e.nodeName || "").toLowerCase() : "";
}
let li;
function Vp() {
  if (li)
    return li;
  const e = navigator.userAgentData;
  return e && Array.isArray(e.brands) ? (li = e.brands.map((t) => t.brand + "/" + t.version).join(" "), li) : navigator.userAgent;
}
function dt(e) {
  return e instanceof We(e).HTMLElement;
}
function qt(e) {
  return e instanceof We(e).Element;
}
function zp(e) {
  return e instanceof We(e).Node;
}
function Ef(e) {
  if (typeof ShadowRoot > "u")
    return !1;
  const t = We(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot;
}
function Xl(e) {
  const {
    overflow: t,
    overflowX: n,
    overflowY: o,
    display: s
  } = ot(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + o + n) && !["inline", "contents"].includes(s);
}
function Tw(e) {
  return ["table", "td", "th"].includes(Gt(e));
}
function da(e) {
  const t = /firefox/i.test(Vp()), n = ot(e), o = n.backdropFilter || n.WebkitBackdropFilter;
  return n.transform !== "none" || n.perspective !== "none" || (o ? o !== "none" : !1) || t && n.willChange === "filter" || t && (n.filter ? n.filter !== "none" : !1) || ["transform", "perspective"].some((s) => n.willChange.includes(s)) || ["paint", "layout", "strict", "content"].some(
    // TS 4.1 compat
    (s) => {
      const r = n.contain;
      return r != null ? r.includes(s) : !1;
    }
  );
}
function Yp() {
  return !/^((?!chrome|android).)*safari/i.test(Vp());
}
function pa(e) {
  return ["html", "body", "#document"].includes(Gt(e));
}
const Af = Math.min, Io = Math.max, vs = Math.round;
function Gp(e) {
  const t = ot(e);
  let n = parseFloat(t.width), o = parseFloat(t.height);
  const s = e.offsetWidth, r = e.offsetHeight, l = vs(n) !== s || vs(o) !== r;
  return l && (n = s, o = r), {
    width: n,
    height: o,
    fallback: l
  };
}
function qp(e) {
  return qt(e) ? e : e.contextElement;
}
const Xp = {
  x: 1,
  y: 1
};
function vn(e) {
  const t = qp(e);
  if (!dt(t))
    return Xp;
  const n = t.getBoundingClientRect(), {
    width: o,
    height: s,
    fallback: r
  } = Gp(t);
  let l = (r ? vs(n.width) : n.width) / o, c = (r ? vs(n.height) : n.height) / s;
  return (!l || !Number.isFinite(l)) && (l = 1), (!c || !Number.isFinite(c)) && (c = 1), {
    x: l,
    y: c
  };
}
function mr(e, t, n, o) {
  var s, r;
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const l = e.getBoundingClientRect(), c = qp(e);
  let _ = Xp;
  t && (o ? qt(o) && (_ = vn(o)) : _ = vn(e));
  const h = c ? We(c) : window, i = !Yp() && n;
  let d = (l.left + (i && ((s = h.visualViewport) == null ? void 0 : s.offsetLeft) || 0)) / _.x, f = (l.top + (i && ((r = h.visualViewport) == null ? void 0 : r.offsetTop) || 0)) / _.y, a = l.width / _.x, u = l.height / _.y;
  if (c) {
    const y = We(c), p = o && qt(o) ? We(o) : o;
    let m = y.frameElement;
    for (; m && o && p !== y; ) {
      const g = vn(m), $ = m.getBoundingClientRect(), w = getComputedStyle(m);
      $.x += (m.clientLeft + parseFloat(w.paddingLeft)) * g.x, $.y += (m.clientTop + parseFloat(w.paddingTop)) * g.y, d *= g.x, f *= g.y, a *= g.x, u *= g.y, d += $.x, f += $.y, m = We(m).frameElement;
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
function Qt(e) {
  return ((zp(e) ? e.ownerDocument : e.document) || window.document).documentElement;
}
function Kl(e) {
  return qt(e) ? {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  } : {
    scrollLeft: e.pageXOffset,
    scrollTop: e.pageYOffset
  };
}
function Kp(e) {
  return mr(Qt(e)).left + Kl(e).scrollLeft;
}
function Lw(e, t, n) {
  const o = dt(t), s = Qt(t), r = mr(e, !0, n === "fixed", t);
  let l = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const c = {
    x: 0,
    y: 0
  };
  if (o || !o && n !== "fixed")
    if ((Gt(t) !== "body" || Xl(s)) && (l = Kl(t)), dt(t)) {
      const _ = mr(t, !0);
      c.x = _.x + t.clientLeft, c.y = _.y + t.clientTop;
    } else
      s && (c.x = Kp(s));
  return {
    x: r.left + l.scrollLeft - c.x,
    y: r.top + l.scrollTop - c.y,
    width: r.width,
    height: r.height
  };
}
function gr(e) {
  if (Gt(e) === "html")
    return e;
  const t = (
    // Step into the shadow DOM of the parent of a slotted node
    e.assignedSlot || // DOM Element detected
    e.parentNode || // ShadowRoot detected
    (Ef(e) ? e.host : null) || // Fallback
    Qt(e)
  );
  return Ef(t) ? t.host : t;
}
function Mf(e) {
  return !dt(e) || ot(e).position === "fixed" ? null : e.offsetParent;
}
function Dw(e) {
  let t = gr(e);
  for (; dt(t) && !pa(t); ) {
    if (da(t))
      return t;
    t = gr(t);
  }
  return null;
}
function Tf(e) {
  const t = We(e);
  let n = Mf(e);
  for (; n && Tw(n) && ot(n).position === "static"; )
    n = Mf(n);
  return n && (Gt(n) === "html" || Gt(n) === "body" && ot(n).position === "static" && !da(n)) ? t : n || Dw(e) || t;
}
function Nw(e) {
  return Gp(e);
}
function Rw(e) {
  let {
    rect: t,
    offsetParent: n,
    strategy: o
  } = e;
  const s = dt(n), r = Qt(n);
  if (n === r)
    return t;
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
  if ((s || !s && o !== "fixed") && ((Gt(n) !== "body" || Xl(r)) && (l = Kl(n)), dt(n))) {
    const h = mr(n);
    c = vn(n), _.x = h.x + n.clientLeft, _.y = h.y + n.clientTop;
  }
  return {
    width: t.width * c.x,
    height: t.height * c.y,
    x: t.x * c.x - l.scrollLeft * c.x + _.x,
    y: t.y * c.y - l.scrollTop * c.y + _.y
  };
}
function Ow(e, t) {
  const n = We(e), o = Qt(e), s = n.visualViewport;
  let r = o.clientWidth, l = o.clientHeight, c = 0, _ = 0;
  if (s) {
    r = s.width, l = s.height;
    const h = Yp();
    (h || !h && t === "fixed") && (c = s.offsetLeft, _ = s.offsetTop);
  }
  return {
    width: r,
    height: l,
    x: c,
    y: _
  };
}
function Pw(e) {
  var t;
  const n = Qt(e), o = Kl(e), s = (t = e.ownerDocument) == null ? void 0 : t.body, r = Io(n.scrollWidth, n.clientWidth, s ? s.scrollWidth : 0, s ? s.clientWidth : 0), l = Io(n.scrollHeight, n.clientHeight, s ? s.scrollHeight : 0, s ? s.clientHeight : 0);
  let c = -o.scrollLeft + Kp(e);
  const _ = -o.scrollTop;
  return ot(s || n).direction === "rtl" && (c += Io(n.clientWidth, s ? s.clientWidth : 0) - r), {
    width: r,
    height: l,
    x: c,
    y: _
  };
}
function Zp(e) {
  const t = gr(e);
  return pa(t) ? e.ownerDocument.body : dt(t) && Xl(t) ? t : Zp(t);
}
function Jp(e, t) {
  var n;
  t === void 0 && (t = []);
  const o = Zp(e), s = o === ((n = e.ownerDocument) == null ? void 0 : n.body), r = We(o);
  return s ? t.concat(r, r.visualViewport || [], Xl(o) ? o : []) : t.concat(o, Jp(o));
}
function Hw(e, t) {
  const n = mr(e, !0, t === "fixed"), o = n.top + e.clientTop, s = n.left + e.clientLeft, r = dt(e) ? vn(e) : {
    x: 1,
    y: 1
  }, l = e.clientWidth * r.x, c = e.clientHeight * r.y, _ = s * r.x, h = o * r.y;
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
function Lf(e, t, n) {
  return t === "viewport" ? ms(Ow(e, n)) : qt(t) ? Hw(t, n) : ms(Pw(Qt(e)));
}
function Ww(e, t) {
  const n = t.get(e);
  if (n)
    return n;
  let o = Jp(e).filter((c) => qt(c) && Gt(c) !== "body"), s = null;
  const r = ot(e).position === "fixed";
  let l = r ? gr(e) : e;
  for (; qt(l) && !pa(l); ) {
    const c = ot(l), _ = da(l);
    (r ? !_ && !s : !_ && c.position === "static" && !!s && ["absolute", "fixed"].includes(s.position)) ? o = o.filter((i) => i !== l) : s = c, l = gr(l);
  }
  return t.set(e, o), o;
}
function Iw(e) {
  let {
    element: t,
    boundary: n,
    rootBoundary: o,
    strategy: s
  } = e;
  const l = [...n === "clippingAncestors" ? Ww(t, this._c) : [].concat(n), o], c = l[0], _ = l.reduce((h, i) => {
    const d = Lf(t, i, s);
    return h.top = Io(d.top, h.top), h.right = Af(d.right, h.right), h.bottom = Af(d.bottom, h.bottom), h.left = Io(d.left, h.left), h;
  }, Lf(t, c, s));
  return {
    width: _.right - _.left,
    height: _.bottom - _.top,
    x: _.left,
    y: _.top
  };
}
const Uw = {
  getClippingRect: Iw,
  convertOffsetParentRelativeRectToViewportRelativeRect: Rw,
  isElement: qt,
  getDimensions: Nw,
  getOffsetParent: Tf,
  getDocumentElement: Qt,
  getScale: vn,
  async getElementRects(e) {
    let {
      reference: t,
      floating: n,
      strategy: o
    } = e;
    const s = this.getOffsetParent || Tf, r = this.getDimensions;
    return {
      reference: Lw(t, await s(n), o),
      floating: {
        x: 0,
        y: 0,
        ...await r(n)
      }
    };
  },
  getClientRects: (e) => Array.from(e.getClientRects()),
  isRTL: (e) => ot(e).direction === "rtl"
}, Fw = (e, t, n) => {
  const o = /* @__PURE__ */ new Map(), s = {
    platform: Uw,
    ...n
  }, r = {
    ...s.platform,
    _c: o
  };
  return dw(e, t, {
    ...s,
    platform: r
  });
};
var On, Pn, ln, Fr, $e, nl, Qp, ol, em, rl, tm, il, nm, sl, om, ll, rm, cl;
class Ze extends Ue {
  constructor() {
    super(...arguments);
    T(this, nl);
    T(this, ol);
    T(this, rl);
    T(this, il);
    T(this, sl);
    T(this, ll);
    T(this, On, void 0);
    T(this, Pn, 0);
    T(this, ln, void 0);
    T(this, Fr, void 0);
    T(this, $e, void 0);
    R(this, "hideLater", () => {
      b(this, cl).call(this), H(this, Pn, window.setTimeout(this.hide.bind(this), 100));
    });
    T(this, cl, () => {
      clearTimeout(b(this, Pn)), H(this, Pn, 0);
    });
  }
  get isShown() {
    var n;
    return (n = b(this, ln)) == null ? void 0 : n.classList.contains(this.constructor.CLASS_SHOW);
  }
  get timepicker() {
    return b(this, ln) || U(this, rl, tm).call(this);
  }
  get trigger() {
    return b(this, Fr) || this.element;
  }
  get elementShowClass() {
    return `with-${this.constructor.NAME}-show`;
  }
  show(n) {
    return H(this, Fr, n), !this.timepicker || !this.element ? !1 : (this.element.classList.add(this.elementShowClass), this.timepicker.classList.add(this.constructor.CLASS_SHOW), U(this, sl, om).call(this), !0);
  }
  hide() {
    var n;
    return this.element.classList.remove(this.elementShowClass), (n = b(this, ln)) == null || n.classList.remove(this.constructor.CLASS_SHOW), !0;
  }
  toggle(n) {
    return this.isShown ? this.hide() : this.show(n);
  }
  static show(n) {
    var l;
    const { event: o, ...s } = n, r = this.ensure(document.body);
    return Object.keys(s).length && r.setOptions(s), r.show(o), (l = o == null ? void 0 : o.stopPropagation) == null || l.call(o), r;
  }
  static hide() {
    const n = this.get(document.body);
    return n == null || n.hide(), n;
  }
  static clear(n) {
    var _, h;
    n instanceof Event && (n = { event: n });
    const { event: o, exclude: s, ignoreSelector: r = ".not-hide-timepicker" } = n || {};
    if (o && r && ((h = (_ = o.target).closest) != null && h.call(_, r)))
      return;
    const l = this.getAll().entries(), c = new Set(s || []);
    for (const [i, d] of l)
      c.has(i) || d.hide();
  }
}
On = new WeakMap(), Pn = new WeakMap(), ln = new WeakMap(), Fr = new WeakMap(), $e = new WeakMap(), nl = new WeakSet(), Qp = function() {
  const { arrow: n } = this.options;
  return typeof n == "number" ? n : 4;
}, ol = new WeakSet(), em = function() {
  const n = document.createElement("div");
  return H(this, $e, n), b(this, $e).style.position = "absolute", b(this, $e).style.width = "8px", b(this, $e).style.height = "8px", b(this, $e).style.transform = "rotate(45deg)", b(this, $e).style.background = "inherit", b(this, $e).style.border = "inherit", b(this, $e).style.borderBottomStyle = "none", b(this, $e).style.borderRightStyle = "none", n;
}, rl = new WeakSet(), tm = function() {
  const n = this.constructor.CLASSNAME, o = document.createElement("div");
  return o.classList.add(n), cw(Op(hw, { ...this.options }), o), this.options.arrow && o.append(U(this, ol, em).call(this)), o.style.width = "max-content", o.style.position = "absolute", o.style.top = "0", o.style.left = "0", document.body.appendChild(o), H(this, ln, o), o;
}, il = new WeakSet(), nm = function() {
  var s;
  const n = U(this, nl, Qp).call(this), o = {
    middleware: [Mw(n + 3), Ew()]
  };
  return this.options.arrow && b(this, $e) && ((s = o.middleware) == null || s.push(bw({ element: b(this, $e) }))), this.options.placement && (o.placement = this.options.placement), o;
}, sl = new WeakSet(), om = function() {
  const n = U(this, il, nm).call(this);
  Fw(U(this, ll, rm).call(this), this.timepicker, n).then(({ x: o, y: s, middlewareData: r }) => {
    if (Object.assign(this.timepicker.style, {
      left: `${o}px`,
      top: `${s}px`
    }), this.options.placement) {
      const l = this.options.placement.split("-")[0], c = {
        top: "bottom",
        right: "left",
        bottom: "top",
        left: "right"
      }[l];
      if (r.arrow && b(this, $e)) {
        const { x: _, y: h } = r.arrow;
        Object.assign(b(this, $e).style, {
          left: _ != null ? `${_}px` : "",
          top: h != null ? `${h}px` : "",
          [c]: `${-b(this, $e).offsetWidth / 2}px`
        });
      }
    }
  });
}, ll = new WeakSet(), rm = function() {
  return b(this, On) || H(this, On, {
    getBoundingClientRect: () => {
      const { element: n } = this;
      if (n instanceof MouseEvent) {
        const { clientX: o, clientY: s } = n;
        return {
          width: 0,
          height: 0,
          top: s,
          right: o,
          bottom: s,
          left: o
        };
      }
      return n instanceof HTMLElement ? n.getBoundingClientRect() : n;
    },
    contextElement: this.element
  }), b(this, On);
}, cl = new WeakMap(), R(Ze, "NAME", "timepicker"), R(Ze, "CLASSNAME", "timepicker"), R(Ze, "CLASS_SHOW", "show"), R(Ze, "MENU_SELECTOR", ".form-time input:not(.disabled):not(:disabled)"), R(Ze, "DEFAULT", {
  value: ps().format("HH:mm:ss"),
  showSeconds: !1,
  placement: "bottom-start",
  strategy: "absolute",
  // trigger: 'click',
  arrow: !0
});
document.addEventListener("click", function(e) {
  const n = e.target.closest(Ze.MENU_SELECTOR);
  n ? Ze.ensure(n).toggle() : Ze.clear({ event: e });
});
const Bw = (e) => {
  const t = document.getElementsByClassName("with-timepicker-show")[0];
  if (!t)
    return;
  const n = typeof t.closest == "function" ? t.closest(Ze.MENU_SELECTOR) : null;
  !n || !e.target.contains(n) || Ze.clear({ event: e });
};
window.addEventListener("scroll", Bw, !0);
class Df extends Ne {
}
R(Df, "NAME", "toolbar"), R(Df, "Component", ur);
function Zr(e) {
  return e.split("-")[1];
}
function ma(e) {
  return e === "y" ? "height" : "width";
}
function Jn(e) {
  return e.split("-")[0];
}
function Zl(e) {
  return ["top", "bottom"].includes(Jn(e)) ? "x" : "y";
}
function Nf(e, t, n) {
  let {
    reference: o,
    floating: s
  } = e;
  const r = o.x + o.width / 2 - s.width / 2, l = o.y + o.height / 2 - s.height / 2, c = Zl(t), _ = ma(c), h = o[_] / 2 - s[_] / 2, i = Jn(t), d = c === "x";
  let f;
  switch (i) {
    case "top":
      f = {
        x: r,
        y: o.y - s.height
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
        x: o.x - s.width,
        y: l
      };
      break;
    default:
      f = {
        x: o.x,
        y: o.y
      };
  }
  switch (Zr(t)) {
    case "start":
      f[c] -= h * (n && d ? -1 : 1);
      break;
    case "end":
      f[c] += h * (n && d ? -1 : 1);
      break;
  }
  return f;
}
const jw = async (e, t, n) => {
  const {
    placement: o = "bottom",
    strategy: s = "absolute",
    middleware: r = [],
    platform: l
  } = n, c = r.filter(Boolean), _ = await (l.isRTL == null ? void 0 : l.isRTL(t));
  let h = await l.getElementRects({
    reference: e,
    floating: t,
    strategy: s
  }), {
    x: i,
    y: d
  } = Nf(h, o, _), f = o, a = {}, u = 0;
  for (let y = 0; y < c.length; y++) {
    const {
      name: p,
      fn: m
    } = c[y], {
      x: g,
      y: $,
      data: w,
      reset: S
    } = await m({
      x: i,
      y: d,
      initialPlacement: o,
      placement: f,
      strategy: s,
      middlewareData: a,
      rects: h,
      platform: l,
      elements: {
        reference: e,
        floating: t
      }
    });
    if (i = g ?? i, d = $ ?? d, a = {
      ...a,
      [p]: {
        ...a[p],
        ...w
      }
    }, S && u <= 50) {
      u++, typeof S == "object" && (S.placement && (f = S.placement), S.rects && (h = S.rects === !0 ? await l.getElementRects({
        reference: e,
        floating: t,
        strategy: s
      }) : S.rects), {
        x: i,
        y: d
      } = Nf(h, f, _)), y = -1;
      continue;
    }
  }
  return {
    x: i,
    y: d,
    placement: f,
    strategy: s,
    middlewareData: a
  };
};
function Vw(e) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...e
  };
}
function im(e) {
  return typeof e != "number" ? Vw(e) : {
    top: e,
    right: e,
    bottom: e,
    left: e
  };
}
function ys(e) {
  return {
    ...e,
    top: e.y,
    left: e.x,
    right: e.x + e.width,
    bottom: e.y + e.height
  };
}
async function zw(e, t) {
  var n;
  t === void 0 && (t = {});
  const {
    x: o,
    y: s,
    platform: r,
    rects: l,
    elements: c,
    strategy: _
  } = e, {
    boundary: h = "clippingAncestors",
    rootBoundary: i = "viewport",
    elementContext: d = "floating",
    altBoundary: f = !1,
    padding: a = 0
  } = t, u = im(a), p = c[f ? d === "floating" ? "reference" : "floating" : d], m = ys(await r.getClippingRect({
    element: (n = await (r.isElement == null ? void 0 : r.isElement(p))) == null || n ? p : p.contextElement || await (r.getDocumentElement == null ? void 0 : r.getDocumentElement(c.floating)),
    boundary: h,
    rootBoundary: i,
    strategy: _
  })), g = d === "floating" ? {
    ...l.floating,
    x: o,
    y: s
  } : l.reference, $ = await (r.getOffsetParent == null ? void 0 : r.getOffsetParent(c.floating)), w = await (r.isElement == null ? void 0 : r.isElement($)) ? await (r.getScale == null ? void 0 : r.getScale($)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, S = ys(r.convertOffsetParentRelativeRectToViewportRelativeRect ? await r.convertOffsetParentRelativeRectToViewportRelativeRect({
    rect: g,
    offsetParent: $,
    strategy: _
  }) : g);
  return {
    top: (m.top - S.top + u.top) / w.y,
    bottom: (S.bottom - m.bottom + u.bottom) / w.y,
    left: (m.left - S.left + u.left) / w.x,
    right: (S.right - m.right + u.right) / w.x
  };
}
const Yw = Math.min, Gw = Math.max;
function qw(e, t, n) {
  return Gw(e, Yw(t, n));
}
const Xw = (e) => ({
  name: "arrow",
  options: e,
  async fn(t) {
    const {
      element: n,
      padding: o = 0
    } = e || {}, {
      x: s,
      y: r,
      placement: l,
      rects: c,
      platform: _
    } = t;
    if (n == null)
      return {};
    const h = im(o), i = {
      x: s,
      y: r
    }, d = Zl(l), f = ma(d), a = await _.getDimensions(n), u = d === "y" ? "top" : "left", y = d === "y" ? "bottom" : "right", p = c.reference[f] + c.reference[d] - i[d] - c.floating[f], m = i[d] - c.reference[d], g = await (_.getOffsetParent == null ? void 0 : _.getOffsetParent(n));
    let $ = g ? d === "y" ? g.clientHeight || 0 : g.clientWidth || 0 : 0;
    $ === 0 && ($ = c.floating[f]);
    const w = p / 2 - m / 2, S = h[u], C = $ - a[f] - h[y], A = $ / 2 - a[f] / 2 + w, v = qw(S, A, C), L = Zr(l) != null && A != v && c.reference[f] / 2 - (A < S ? h[u] : h[y]) - a[f] / 2 < 0 ? A < S ? S - A : C - A : 0;
    return {
      [d]: i[d] - L,
      data: {
        [d]: v,
        centerOffset: A - v
      }
    };
  }
}), Kw = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function bs(e) {
  return e.replace(/left|right|bottom|top/g, (t) => Kw[t]);
}
function Zw(e, t, n) {
  n === void 0 && (n = !1);
  const o = Zr(e), s = Zl(e), r = ma(s);
  let l = s === "x" ? o === (n ? "end" : "start") ? "right" : "left" : o === "start" ? "bottom" : "top";
  return t.reference[r] > t.floating[r] && (l = bs(l)), {
    main: l,
    cross: bs(l)
  };
}
const Jw = {
  start: "end",
  end: "start"
};
function Dc(e) {
  return e.replace(/start|end/g, (t) => Jw[t]);
}
function Qw(e) {
  const t = bs(e);
  return [Dc(e), t, Dc(t)];
}
function e$(e, t, n) {
  const o = ["left", "right"], s = ["right", "left"], r = ["top", "bottom"], l = ["bottom", "top"];
  switch (e) {
    case "top":
    case "bottom":
      return n ? t ? s : o : t ? o : s;
    case "left":
    case "right":
      return t ? r : l;
    default:
      return [];
  }
}
function t$(e, t, n, o) {
  const s = Zr(e);
  let r = e$(Jn(e), n === "start", o);
  return s && (r = r.map((l) => l + "-" + s), t && (r = r.concat(r.map(Dc)))), r;
}
const n$ = function(e) {
  return e === void 0 && (e = {}), {
    name: "flip",
    options: e,
    async fn(t) {
      var n;
      const {
        placement: o,
        middlewareData: s,
        rects: r,
        initialPlacement: l,
        platform: c,
        elements: _
      } = t, {
        mainAxis: h = !0,
        crossAxis: i = !0,
        fallbackPlacements: d,
        fallbackStrategy: f = "bestFit",
        fallbackAxisSideDirection: a = "none",
        flipAlignment: u = !0,
        ...y
      } = e, p = Jn(o), m = Jn(l) === l, g = await (c.isRTL == null ? void 0 : c.isRTL(_.floating)), $ = d || (m || !u ? [bs(l)] : Qw(l));
      !d && a !== "none" && $.push(...t$(l, u, a, g));
      const w = [l, ...$], S = await zw(t, y), C = [];
      let A = ((n = s.flip) == null ? void 0 : n.overflows) || [];
      if (h && C.push(S[p]), i) {
        const {
          main: L,
          cross: j
        } = Zw(o, r, g);
        C.push(S[L], S[j]);
      }
      if (A = [...A, {
        placement: o,
        overflows: C
      }], !C.every((L) => L <= 0)) {
        var v;
        const L = (((v = s.flip) == null ? void 0 : v.index) || 0) + 1, j = w[L];
        if (j)
          return {
            data: {
              index: L,
              overflows: A
            },
            reset: {
              placement: j
            }
          };
        let F = "bottom";
        switch (f) {
          case "bestFit": {
            var k;
            const D = (k = A.map((E) => [E, E.overflows.filter((x) => x > 0).reduce((x, N) => x + N, 0)]).sort((E, x) => E[1] - x[1])[0]) == null ? void 0 : k[0].placement;
            D && (F = D);
            break;
          }
          case "initialPlacement":
            F = l;
            break;
        }
        if (o !== F)
          return {
            reset: {
              placement: F
            }
          };
      }
      return {};
    }
  };
};
async function o$(e, t) {
  const {
    placement: n,
    platform: o,
    elements: s
  } = e, r = await (o.isRTL == null ? void 0 : o.isRTL(s.floating)), l = Jn(n), c = Zr(n), _ = Zl(n) === "x", h = ["left", "top"].includes(l) ? -1 : 1, i = r && _ ? -1 : 1, d = typeof t == "function" ? t(e) : t;
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
    x: a * i,
    y: f * h
  } : {
    x: f * h,
    y: a * i
  };
}
const r$ = function(e) {
  return e === void 0 && (e = 0), {
    name: "offset",
    options: e,
    async fn(t) {
      const {
        x: n,
        y: o
      } = t, s = await o$(t, e);
      return {
        x: n + s.x,
        y: o + s.y,
        data: s
      };
    }
  };
};
function Ie(e) {
  var t;
  return ((t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function rt(e) {
  return Ie(e).getComputedStyle(e);
}
function Xt(e) {
  return lm(e) ? (e.nodeName || "").toLowerCase() : "";
}
let ci;
function sm() {
  if (ci)
    return ci;
  const e = navigator.userAgentData;
  return e && Array.isArray(e.brands) ? (ci = e.brands.map((t) => t.brand + "/" + t.version).join(" "), ci) : navigator.userAgent;
}
function pt(e) {
  return e instanceof Ie(e).HTMLElement;
}
function Kt(e) {
  return e instanceof Ie(e).Element;
}
function lm(e) {
  return e instanceof Ie(e).Node;
}
function Rf(e) {
  if (typeof ShadowRoot > "u")
    return !1;
  const t = Ie(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot;
}
function Jl(e) {
  const {
    overflow: t,
    overflowX: n,
    overflowY: o,
    display: s
  } = rt(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + o + n) && !["inline", "contents"].includes(s);
}
function i$(e) {
  return ["table", "td", "th"].includes(Xt(e));
}
function ga(e) {
  const t = /firefox/i.test(sm()), n = rt(e), o = n.backdropFilter || n.WebkitBackdropFilter;
  return n.transform !== "none" || n.perspective !== "none" || (o ? o !== "none" : !1) || t && n.willChange === "filter" || t && (n.filter ? n.filter !== "none" : !1) || ["transform", "perspective"].some((s) => n.willChange.includes(s)) || ["paint", "layout", "strict", "content"].some(
    // TS 4.1 compat
    (s) => {
      const r = n.contain;
      return r != null ? r.includes(s) : !1;
    }
  );
}
function cm() {
  return !/^((?!chrome|android).)*safari/i.test(sm());
}
function va(e) {
  return ["html", "body", "#document"].includes(Xt(e));
}
const Of = Math.min, Uo = Math.max, ws = Math.round;
function am(e) {
  const t = rt(e);
  let n = parseFloat(t.width), o = parseFloat(t.height);
  const s = e.offsetWidth, r = e.offsetHeight, l = ws(n) !== s || ws(o) !== r;
  return l && (n = s, o = r), {
    width: n,
    height: o,
    fallback: l
  };
}
function _m(e) {
  return Kt(e) ? e : e.contextElement;
}
const fm = {
  x: 1,
  y: 1
};
function yn(e) {
  const t = _m(e);
  if (!pt(t))
    return fm;
  const n = t.getBoundingClientRect(), {
    width: o,
    height: s,
    fallback: r
  } = am(t);
  let l = (r ? ws(n.width) : n.width) / o, c = (r ? ws(n.height) : n.height) / s;
  return (!l || !Number.isFinite(l)) && (l = 1), (!c || !Number.isFinite(c)) && (c = 1), {
    x: l,
    y: c
  };
}
function vr(e, t, n, o) {
  var s, r;
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const l = e.getBoundingClientRect(), c = _m(e);
  let _ = fm;
  t && (o ? Kt(o) && (_ = yn(o)) : _ = yn(e));
  const h = c ? Ie(c) : window, i = !cm() && n;
  let d = (l.left + (i && ((s = h.visualViewport) == null ? void 0 : s.offsetLeft) || 0)) / _.x, f = (l.top + (i && ((r = h.visualViewport) == null ? void 0 : r.offsetTop) || 0)) / _.y, a = l.width / _.x, u = l.height / _.y;
  if (c) {
    const y = Ie(c), p = o && Kt(o) ? Ie(o) : o;
    let m = y.frameElement;
    for (; m && o && p !== y; ) {
      const g = yn(m), $ = m.getBoundingClientRect(), w = getComputedStyle(m);
      $.x += (m.clientLeft + parseFloat(w.paddingLeft)) * g.x, $.y += (m.clientTop + parseFloat(w.paddingTop)) * g.y, d *= g.x, f *= g.y, a *= g.x, u *= g.y, d += $.x, f += $.y, m = Ie(m).frameElement;
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
function en(e) {
  return ((lm(e) ? e.ownerDocument : e.document) || window.document).documentElement;
}
function Ql(e) {
  return Kt(e) ? {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  } : {
    scrollLeft: e.pageXOffset,
    scrollTop: e.pageYOffset
  };
}
function um(e) {
  return vr(en(e)).left + Ql(e).scrollLeft;
}
function s$(e, t, n) {
  const o = pt(t), s = en(t), r = vr(e, !0, n === "fixed", t);
  let l = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const c = {
    x: 0,
    y: 0
  };
  if (o || !o && n !== "fixed")
    if ((Xt(t) !== "body" || Jl(s)) && (l = Ql(t)), pt(t)) {
      const _ = vr(t, !0);
      c.x = _.x + t.clientLeft, c.y = _.y + t.clientTop;
    } else
      s && (c.x = um(s));
  return {
    x: r.left + l.scrollLeft - c.x,
    y: r.top + l.scrollTop - c.y,
    width: r.width,
    height: r.height
  };
}
function yr(e) {
  if (Xt(e) === "html")
    return e;
  const t = (
    // Step into the shadow DOM of the parent of a slotted node
    e.assignedSlot || // DOM Element detected
    e.parentNode || // ShadowRoot detected
    (Rf(e) ? e.host : null) || // Fallback
    en(e)
  );
  return Rf(t) ? t.host : t;
}
function Pf(e) {
  return !pt(e) || rt(e).position === "fixed" ? null : e.offsetParent;
}
function l$(e) {
  let t = yr(e);
  for (; pt(t) && !va(t); ) {
    if (ga(t))
      return t;
    t = yr(t);
  }
  return null;
}
function Hf(e) {
  const t = Ie(e);
  let n = Pf(e);
  for (; n && i$(n) && rt(n).position === "static"; )
    n = Pf(n);
  return n && (Xt(n) === "html" || Xt(n) === "body" && rt(n).position === "static" && !ga(n)) ? t : n || l$(e) || t;
}
function c$(e) {
  return am(e);
}
function a$(e) {
  let {
    rect: t,
    offsetParent: n,
    strategy: o
  } = e;
  const s = pt(n), r = en(n);
  if (n === r)
    return t;
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
  if ((s || !s && o !== "fixed") && ((Xt(n) !== "body" || Jl(r)) && (l = Ql(n)), pt(n))) {
    const h = vr(n);
    c = yn(n), _.x = h.x + n.clientLeft, _.y = h.y + n.clientTop;
  }
  return {
    width: t.width * c.x,
    height: t.height * c.y,
    x: t.x * c.x - l.scrollLeft * c.x + _.x,
    y: t.y * c.y - l.scrollTop * c.y + _.y
  };
}
function _$(e, t) {
  const n = Ie(e), o = en(e), s = n.visualViewport;
  let r = o.clientWidth, l = o.clientHeight, c = 0, _ = 0;
  if (s) {
    r = s.width, l = s.height;
    const h = cm();
    (h || !h && t === "fixed") && (c = s.offsetLeft, _ = s.offsetTop);
  }
  return {
    width: r,
    height: l,
    x: c,
    y: _
  };
}
function f$(e) {
  var t;
  const n = en(e), o = Ql(e), s = (t = e.ownerDocument) == null ? void 0 : t.body, r = Uo(n.scrollWidth, n.clientWidth, s ? s.scrollWidth : 0, s ? s.clientWidth : 0), l = Uo(n.scrollHeight, n.clientHeight, s ? s.scrollHeight : 0, s ? s.clientHeight : 0);
  let c = -o.scrollLeft + um(e);
  const _ = -o.scrollTop;
  return rt(s || n).direction === "rtl" && (c += Uo(n.clientWidth, s ? s.clientWidth : 0) - r), {
    width: r,
    height: l,
    x: c,
    y: _
  };
}
function hm(e) {
  const t = yr(e);
  return va(t) ? e.ownerDocument.body : pt(t) && Jl(t) ? t : hm(t);
}
function dm(e, t) {
  var n;
  t === void 0 && (t = []);
  const o = hm(e), s = o === ((n = e.ownerDocument) == null ? void 0 : n.body), r = Ie(o);
  return s ? t.concat(r, r.visualViewport || [], Jl(o) ? o : []) : t.concat(o, dm(o));
}
function u$(e, t) {
  const n = vr(e, !0, t === "fixed"), o = n.top + e.clientTop, s = n.left + e.clientLeft, r = pt(e) ? yn(e) : {
    x: 1,
    y: 1
  }, l = e.clientWidth * r.x, c = e.clientHeight * r.y, _ = s * r.x, h = o * r.y;
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
function Wf(e, t, n) {
  return t === "viewport" ? ys(_$(e, n)) : Kt(t) ? u$(t, n) : ys(f$(en(e)));
}
function h$(e, t) {
  const n = t.get(e);
  if (n)
    return n;
  let o = dm(e).filter((c) => Kt(c) && Xt(c) !== "body"), s = null;
  const r = rt(e).position === "fixed";
  let l = r ? yr(e) : e;
  for (; Kt(l) && !va(l); ) {
    const c = rt(l), _ = ga(l);
    (r ? !_ && !s : !_ && c.position === "static" && !!s && ["absolute", "fixed"].includes(s.position)) ? o = o.filter((i) => i !== l) : s = c, l = yr(l);
  }
  return t.set(e, o), o;
}
function d$(e) {
  let {
    element: t,
    boundary: n,
    rootBoundary: o,
    strategy: s
  } = e;
  const l = [...n === "clippingAncestors" ? h$(t, this._c) : [].concat(n), o], c = l[0], _ = l.reduce((h, i) => {
    const d = Wf(t, i, s);
    return h.top = Uo(d.top, h.top), h.right = Of(d.right, h.right), h.bottom = Of(d.bottom, h.bottom), h.left = Uo(d.left, h.left), h;
  }, Wf(t, c, s));
  return {
    width: _.right - _.left,
    height: _.bottom - _.top,
    x: _.left,
    y: _.top
  };
}
const p$ = {
  getClippingRect: d$,
  convertOffsetParentRelativeRectToViewportRelativeRect: a$,
  isElement: Kt,
  getDimensions: c$,
  getOffsetParent: Hf,
  getDocumentElement: en,
  getScale: yn,
  async getElementRects(e) {
    let {
      reference: t,
      floating: n,
      strategy: o
    } = e;
    const s = this.getOffsetParent || Hf, r = this.getDimensions;
    return {
      reference: s$(t, await s(n), o),
      floating: {
        x: 0,
        y: 0,
        ...await r(n)
      }
    };
  },
  getClientRects: (e) => Array.from(e.getClientRects()),
  isRTL: (e) => rt(e).direction === "rtl"
}, m$ = (e, t, n) => {
  const o = /* @__PURE__ */ new Map(), s = {
    platform: p$,
    ...n
  }, r = {
    ...s.platform,
    _c: o
  };
  return jw(e, t, {
    ...s,
    platform: r
  });
};
var Hn, Wn, In, cn, ke, al, _l, pm, fl, mm, ul, gm, hl, vm, dl, ym, pl, bm, Un, ml, wm;
class Je extends Ue {
  constructor() {
    super(...arguments);
    T(this, _l);
    T(this, fl);
    T(this, ul);
    T(this, hl);
    T(this, dl);
    T(this, pl);
    T(this, ml);
    T(this, Hn, !1);
    T(this, Wn, void 0);
    T(this, In, 0);
    T(this, cn, void 0);
    T(this, ke, void 0);
    T(this, al, void 0);
    R(this, "hideLater", () => {
      b(this, Un).call(this), H(this, In, window.setTimeout(this.hide.bind(this), 100));
    });
    T(this, Un, () => {
      clearTimeout(b(this, In)), H(this, In, 0);
    });
  }
  get isShown() {
    var n;
    return (n = b(this, cn)) == null ? void 0 : n.classList.contains(this.constructor.CLASS_SHOW);
  }
  get tooltip() {
    return b(this, cn) || U(this, ul, gm).call(this);
  }
  get trigger() {
    return b(this, al) || this.element;
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
    return this.setOptions(n), !b(this, Hn) && this.isHover && U(this, ml, wm).call(this), this.options.animation && this.tooltip.classList.add("fade"), this.element.classList.add(this.elementShowClass), this.tooltip.classList.add(this.constructor.CLASS_SHOW), U(this, dl, ym).call(this), !0;
  }
  hide() {
    var n;
    return this.element.classList.remove(this.elementShowClass), (n = b(this, cn)) == null || n.classList.remove(this.constructor.CLASS_SHOW), !0;
  }
  toggle(n) {
    return this.isShown ? this.hide() : this.show(n);
  }
  destroy() {
    b(this, Hn) && (this.element.removeEventListener("mouseleave", this.hideLater), this.tooltip.removeEventListener("mouseenter", b(this, Un)), this.tooltip.removeEventListener("mouseleave", this.hideLater)), super.destroy();
  }
  static clear(n) {
    n instanceof Event && (n = { event: n });
    const { exclude: o } = n || {}, s = this.getAll().entries(), r = new Set(o || []);
    for (const [l, c] of s)
      r.has(l) || c.hide();
  }
}
Hn = new WeakMap(), Wn = new WeakMap(), In = new WeakMap(), cn = new WeakMap(), ke = new WeakMap(), al = new WeakMap(), _l = new WeakSet(), pm = function() {
  const { arrow: n } = this.options;
  return typeof n == "number" ? n : 4;
}, fl = new WeakSet(), mm = function() {
  const n = document.createElement("div");
  return H(this, ke, n), b(this, ke).style.position = "absolute", b(this, ke).style.width = "8px", b(this, ke).style.height = "8px", this.options.className && (b(this, ke).className = this.options.className), this.options.type && b(this, ke).classList.add(this.options.type), b(this, ke).style.transform = "rotate(45deg)", b(this, ke).style.borderTopStyle = "none", b(this, ke).style.borderLeftStyle = "none", n;
}, ul = new WeakSet(), gm = function() {
  var s;
  const n = this.constructor.TOOLTIP_CLASS;
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
      l != null && l.classList.contains(n) ? o = l : o = (s = this.element.parentNode) == null ? void 0 : s.querySelector(`.${n}`);
    }
  }
  if (this.options.arrow && (o == null || o.append(U(this, fl, mm).call(this))), !o)
    throw new Error("Tooltip: Cannot find tooltip element");
  return o.style.width = "max-content", o.style.position = "absolute", o.style.top = "0", o.style.left = "0", document.body.appendChild(o), H(this, cn, o), o;
}, hl = new WeakSet(), vm = function() {
  var s;
  const n = U(this, _l, pm).call(this), o = {
    middleware: [r$(n + 3), n$()]
  };
  return this.options.arrow && b(this, ke) && ((s = o.middleware) == null || s.push(Xw({ element: b(this, ke) }))), this.options.placement && (o.placement = this.options.placement), o;
}, dl = new WeakSet(), ym = function() {
  const n = U(this, hl, vm).call(this);
  m$(U(this, pl, bm).call(this), this.tooltip, n).then(({ x: o, y: s, middlewareData: r }) => {
    if (Object.assign(this.tooltip.style, {
      left: `${o}px`,
      top: `${s}px`
    }), this.options.placement) {
      const l = this.options.placement.split("-")[0], c = {
        top: "bottom",
        right: "left",
        bottom: "top",
        left: "right"
      }[l];
      if (r.arrow && b(this, ke)) {
        const { x: _, y: h } = r.arrow;
        Object.assign(b(this, ke).style, {
          left: _ != null ? `${_}px` : "",
          top: h != null ? `${h}px` : "",
          [c]: `${-b(this, ke).offsetWidth / 2}px`
        });
      }
    }
  });
}, pl = new WeakSet(), bm = function() {
  return b(this, Wn) || H(this, Wn, {
    getBoundingClientRect: () => {
      const { element: n } = this;
      if (n instanceof MouseEvent) {
        const { clientX: o, clientY: s } = n;
        return {
          width: 0,
          height: 0,
          top: s,
          right: o,
          bottom: s,
          left: o
        };
      }
      return n instanceof HTMLElement ? n.getBoundingClientRect() : n;
    },
    contextElement: this.element
  }), b(this, Wn);
}, Un = new WeakMap(), ml = new WeakSet(), wm = function() {
  const { tooltip: n } = this;
  n.addEventListener("mouseenter", b(this, Un)), n.addEventListener("mouseleave", this.hideLater), this.element.addEventListener("mouseleave", this.hideLater), H(this, Hn, !0);
}, R(Je, "NAME", "tooltip"), R(Je, "TOOLTIP_CLASS", "tooltip"), R(Je, "CLASS_SHOW", "show"), R(Je, "MENU_SELECTOR", '[data-toggle="tooltip"]:not(.disabled):not(:disabled)'), R(Je, "DEFAULT", {
  animation: !0,
  placement: "top",
  strategy: "absolute",
  trigger: "hover",
  type: "darker",
  arrow: !0
});
document.addEventListener("click", function(e) {
  const n = e.target.closest(Je.MENU_SELECTOR);
  if (n) {
    const o = Je.ensure(n);
    o.options.trigger === "click" && o.toggle();
  } else
    Je.clear({ event: e });
});
document.addEventListener("mouseover", function(e) {
  const t = e.target, n = typeof t.closest == "function" ? t.closest(Je.MENU_SELECTOR) : null;
  if (!n)
    return;
  const o = Je.ensure(n);
  o.isHover && o.show();
});
var $m, ge, km, Fo, If, xm = {}, Sm = [], g$ = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function Ht(e, t) {
  for (var n in t)
    e[n] = t[n];
  return e;
}
function Cm(e) {
  var t = e.parentNode;
  t && t.removeChild(e);
}
function cc(e, t, n, o, s) {
  var r = { type: e, props: t, key: n, ref: o, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: s ?? ++km };
  return s == null && ge.vnode != null && ge.vnode(r), r;
}
function ya(e) {
  return e.children;
}
function Bo(e, t) {
  this.props = e, this.context = t;
}
function br(e, t) {
  if (t == null)
    return e.__ ? br(e.__, e.__.__k.indexOf(e) + 1) : null;
  for (var n; t < e.__k.length; t++)
    if ((n = e.__k[t]) != null && n.__e != null)
      return n.__e;
  return typeof e.type == "function" ? br(e) : null;
}
function Em(e) {
  var t, n;
  if ((e = e.__) != null && e.__c != null) {
    for (e.__e = e.__c.base = null, t = 0; t < e.__k.length; t++)
      if ((n = e.__k[t]) != null && n.__e != null) {
        e.__e = e.__c.base = n.__e;
        break;
      }
    return Em(e);
  }
}
function Uf(e) {
  (!e.__d && (e.__d = !0) && Fo.push(e) && !$s.__r++ || If !== ge.debounceRendering) && ((If = ge.debounceRendering) || setTimeout)($s);
}
function $s() {
  for (var e; $s.__r = Fo.length; )
    e = Fo.sort(function(t, n) {
      return t.__v.__b - n.__v.__b;
    }), Fo = [], e.some(function(t) {
      var n, o, s, r, l, c;
      t.__d && (l = (r = (n = t).__v).__e, (c = n.__P) && (o = [], (s = Ht({}, r)).__v = r.__v + 1, Lm(c, r, s, n.__n, c.ownerSVGElement !== void 0, r.__h != null ? [l] : null, o, l ?? br(r), r.__h), y$(o, r), r.__e != l && Em(r)));
    });
}
function Am(e, t, n, o, s, r, l, c, _, h) {
  var i, d, f, a, u, y, p, m = o && o.__k || Sm, g = m.length;
  for (n.__k = [], i = 0; i < t.length; i++)
    if ((a = n.__k[i] = (a = t[i]) == null || typeof a == "boolean" ? null : typeof a == "string" || typeof a == "number" || typeof a == "bigint" ? cc(null, a, null, null, a) : Array.isArray(a) ? cc(ya, { children: a }, null, null, null) : a.__b > 0 ? cc(a.type, a.props, a.key, a.ref ? a.ref : null, a.__v) : a) != null) {
      if (a.__ = n, a.__b = n.__b + 1, (f = m[i]) === null || f && a.key == f.key && a.type === f.type)
        m[i] = void 0;
      else
        for (d = 0; d < g; d++) {
          if ((f = m[d]) && a.key == f.key && a.type === f.type) {
            m[d] = void 0;
            break;
          }
          f = null;
        }
      Lm(e, a, f = f || xm, s, r, l, c, _, h), u = a.__e, (d = a.ref) && f.ref != d && (p || (p = []), f.ref && p.push(f.ref, null, a), p.push(d, a.__c || u, a)), u != null ? (y == null && (y = u), typeof a.type == "function" && a.__k === f.__k ? a.__d = _ = Mm(a, _, e) : _ = Tm(e, a, f, m, u, _), typeof n.type == "function" && (n.__d = _)) : _ && f.__e == _ && _.parentNode != e && (_ = br(f));
    }
  for (n.__e = y, i = g; i--; )
    m[i] != null && Nm(m[i], m[i]);
  if (p)
    for (i = 0; i < p.length; i++)
      Dm(p[i], p[++i], p[++i]);
}
function Mm(e, t, n) {
  for (var o, s = e.__k, r = 0; s && r < s.length; r++)
    (o = s[r]) && (o.__ = e, t = typeof o.type == "function" ? Mm(o, t, n) : Tm(n, o, o, s, o.__e, t));
  return t;
}
function Tm(e, t, n, o, s, r) {
  var l, c, _;
  if (t.__d !== void 0)
    l = t.__d, t.__d = void 0;
  else if (n == null || s != r || s.parentNode == null)
    e:
      if (r == null || r.parentNode !== e)
        e.appendChild(s), l = null;
      else {
        for (c = r, _ = 0; (c = c.nextSibling) && _ < o.length; _ += 2)
          if (c == s)
            break e;
        e.insertBefore(s, r), l = r;
      }
  return l !== void 0 ? l : s.nextSibling;
}
function v$(e, t, n, o, s) {
  var r;
  for (r in n)
    r === "children" || r === "key" || r in t || ks(e, r, null, n[r], o);
  for (r in t)
    s && typeof t[r] != "function" || r === "children" || r === "key" || r === "value" || r === "checked" || n[r] === t[r] || ks(e, r, t[r], n[r], o);
}
function Ff(e, t, n) {
  t[0] === "-" ? e.setProperty(t, n) : e[t] = n == null ? "" : typeof n != "number" || g$.test(t) ? n : n + "px";
}
function ks(e, t, n, o, s) {
  var r;
  e:
    if (t === "style")
      if (typeof n == "string")
        e.style.cssText = n;
      else {
        if (typeof o == "string" && (e.style.cssText = o = ""), o)
          for (t in o)
            n && t in n || Ff(e.style, t, "");
        if (n)
          for (t in n)
            o && n[t] === o[t] || Ff(e.style, t, n[t]);
      }
    else if (t[0] === "o" && t[1] === "n")
      r = t !== (t = t.replace(/Capture$/, "")), t = t.toLowerCase() in e ? t.toLowerCase().slice(2) : t.slice(2), e.l || (e.l = {}), e.l[t + r] = n, n ? o || e.addEventListener(t, r ? jf : Bf, r) : e.removeEventListener(t, r ? jf : Bf, r);
    else if (t !== "dangerouslySetInnerHTML") {
      if (s)
        t = t.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
      else if (t !== "href" && t !== "list" && t !== "form" && t !== "tabIndex" && t !== "download" && t in e)
        try {
          e[t] = n ?? "";
          break e;
        } catch {
        }
      typeof n == "function" || (n == null || n === !1 && t.indexOf("-") == -1 ? e.removeAttribute(t) : e.setAttribute(t, n));
    }
}
function Bf(e) {
  this.l[e.type + !1](ge.event ? ge.event(e) : e);
}
function jf(e) {
  this.l[e.type + !0](ge.event ? ge.event(e) : e);
}
function Lm(e, t, n, o, s, r, l, c, _) {
  var h, i, d, f, a, u, y, p, m, g, $, w, S, C, A, v = t.type;
  if (t.constructor !== void 0)
    return null;
  n.__h != null && (_ = n.__h, c = t.__e = n.__e, t.__h = null, r = [c]), (h = ge.__b) && h(t);
  try {
    e:
      if (typeof v == "function") {
        if (p = t.props, m = (h = v.contextType) && o[h.__c], g = h ? m ? m.props.value : h.__ : o, n.__c ? y = (i = t.__c = n.__c).__ = i.__E : ("prototype" in v && v.prototype.render ? t.__c = i = new v(p, g) : (t.__c = i = new Bo(p, g), i.constructor = v, i.render = w$), m && m.sub(i), i.props = p, i.state || (i.state = {}), i.context = g, i.__n = o, d = i.__d = !0, i.__h = [], i._sb = []), i.__s == null && (i.__s = i.state), v.getDerivedStateFromProps != null && (i.__s == i.state && (i.__s = Ht({}, i.__s)), Ht(i.__s, v.getDerivedStateFromProps(p, i.__s))), f = i.props, a = i.state, d)
          v.getDerivedStateFromProps == null && i.componentWillMount != null && i.componentWillMount(), i.componentDidMount != null && i.__h.push(i.componentDidMount);
        else {
          if (v.getDerivedStateFromProps == null && p !== f && i.componentWillReceiveProps != null && i.componentWillReceiveProps(p, g), !i.__e && i.shouldComponentUpdate != null && i.shouldComponentUpdate(p, i.__s, g) === !1 || t.__v === n.__v) {
            for (i.props = p, i.state = i.__s, t.__v !== n.__v && (i.__d = !1), i.__v = t, t.__e = n.__e, t.__k = n.__k, t.__k.forEach(function(k) {
              k && (k.__ = t);
            }), $ = 0; $ < i._sb.length; $++)
              i.__h.push(i._sb[$]);
            i._sb = [], i.__h.length && l.push(i);
            break e;
          }
          i.componentWillUpdate != null && i.componentWillUpdate(p, i.__s, g), i.componentDidUpdate != null && i.__h.push(function() {
            i.componentDidUpdate(f, a, u);
          });
        }
        if (i.context = g, i.props = p, i.__v = t, i.__P = e, w = ge.__r, S = 0, "prototype" in v && v.prototype.render) {
          for (i.state = i.__s, i.__d = !1, w && w(t), h = i.render(i.props, i.state, i.context), C = 0; C < i._sb.length; C++)
            i.__h.push(i._sb[C]);
          i._sb = [];
        } else
          do
            i.__d = !1, w && w(t), h = i.render(i.props, i.state, i.context), i.state = i.__s;
          while (i.__d && ++S < 25);
        i.state = i.__s, i.getChildContext != null && (o = Ht(Ht({}, o), i.getChildContext())), d || i.getSnapshotBeforeUpdate == null || (u = i.getSnapshotBeforeUpdate(f, a)), A = h != null && h.type === ya && h.key == null ? h.props.children : h, Am(e, Array.isArray(A) ? A : [A], t, n, o, s, r, l, c, _), i.base = t.__e, t.__h = null, i.__h.length && l.push(i), y && (i.__E = i.__ = null), i.__e = !1;
      } else
        r == null && t.__v === n.__v ? (t.__k = n.__k, t.__e = n.__e) : t.__e = b$(n.__e, t, n, o, s, r, l, _);
    (h = ge.diffed) && h(t);
  } catch (k) {
    t.__v = null, (_ || r != null) && (t.__e = c, t.__h = !!_, r[r.indexOf(c)] = null), ge.__e(k, t, n);
  }
}
function y$(e, t) {
  ge.__c && ge.__c(t, e), e.some(function(n) {
    try {
      e = n.__h, n.__h = [], e.some(function(o) {
        o.call(n);
      });
    } catch (o) {
      ge.__e(o, n.__v);
    }
  });
}
function b$(e, t, n, o, s, r, l, c) {
  var _, h, i, d = n.props, f = t.props, a = t.type, u = 0;
  if (a === "svg" && (s = !0), r != null) {
    for (; u < r.length; u++)
      if ((_ = r[u]) && "setAttribute" in _ == !!a && (a ? _.localName === a : _.nodeType === 3)) {
        e = _, r[u] = null;
        break;
      }
  }
  if (e == null) {
    if (a === null)
      return document.createTextNode(f);
    e = s ? document.createElementNS("http://www.w3.org/2000/svg", a) : document.createElement(a, f.is && f), r = null, c = !1;
  }
  if (a === null)
    d === f || c && e.data === f || (e.data = f);
  else {
    if (r = r && $m.call(e.childNodes), h = (d = n.props || xm).dangerouslySetInnerHTML, i = f.dangerouslySetInnerHTML, !c) {
      if (r != null)
        for (d = {}, u = 0; u < e.attributes.length; u++)
          d[e.attributes[u].name] = e.attributes[u].value;
      (i || h) && (i && (h && i.__html == h.__html || i.__html === e.innerHTML) || (e.innerHTML = i && i.__html || ""));
    }
    if (v$(e, f, d, s, c), i)
      t.__k = [];
    else if (u = t.props.children, Am(e, Array.isArray(u) ? u : [u], t, n, o, s && a !== "foreignObject", r, l, r ? r[0] : n.__k && br(n, 0), c), r != null)
      for (u = r.length; u--; )
        r[u] != null && Cm(r[u]);
    c || ("value" in f && (u = f.value) !== void 0 && (u !== e.value || a === "progress" && !u || a === "option" && u !== d.value) && ks(e, "value", u, d.value, !1), "checked" in f && (u = f.checked) !== void 0 && u !== e.checked && ks(e, "checked", u, d.checked, !1));
  }
  return e;
}
function Dm(e, t, n) {
  try {
    typeof e == "function" ? e(t) : e.current = t;
  } catch (o) {
    ge.__e(o, n);
  }
}
function Nm(e, t, n) {
  var o, s;
  if (ge.unmount && ge.unmount(e), (o = e.ref) && (o.current && o.current !== e.__e || Dm(o, null, t)), (o = e.__c) != null) {
    if (o.componentWillUnmount)
      try {
        o.componentWillUnmount();
      } catch (r) {
        ge.__e(r, t);
      }
    o.base = o.__P = null, e.__c = void 0;
  }
  if (o = e.__k)
    for (s = 0; s < o.length; s++)
      o[s] && Nm(o[s], t, n || typeof e.type != "function");
  n || e.__e == null || Cm(e.__e), e.__ = e.__e = e.__d = void 0;
}
function w$(e, t, n) {
  return this.constructor(e, n);
}
$m = Sm.slice, ge = { __e: function(e, t, n, o) {
  for (var s, r, l; t = t.__; )
    if ((s = t.__c) && !s.__)
      try {
        if ((r = s.constructor) && r.getDerivedStateFromError != null && (s.setState(r.getDerivedStateFromError(e)), l = s.__d), s.componentDidCatch != null && (s.componentDidCatch(e, o || {}), l = s.__d), l)
          return s.__E = s;
      } catch (c) {
        e = c;
      }
  throw e;
} }, km = 0, Bo.prototype.setState = function(e, t) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = Ht({}, this.state), typeof e == "function" && (e = e(Ht({}, n), this.props)), e && Ht(n, e), e != null && this.__v && (t && this._sb.push(t), Uf(this));
}, Bo.prototype.forceUpdate = function(e) {
  this.__v && (this.__e = !0, e && this.__h.push(e), Uf(this));
}, Bo.prototype.render = ya, Fo = [], $s.__r = 0;
var $$ = 0;
function xs(e, t, n, o, s) {
  var r, l, c = {};
  for (l in t)
    l == "ref" ? r = t[l] : c[l] = t[l];
  var _ = { type: e, props: c, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: --$$, __source: s, __self: o };
  if (typeof e == "function" && (r = e.defaultProps))
    for (l in r)
      c[l] === void 0 && (c[l] = r[l]);
  return ge.vnode && ge.vnode(_), _;
}
function k$({
  type: e,
  key: t,
  style: n,
  bounding: o,
  offsetX: s = 0,
  offsetY: r = 0,
  component: l,
  data: c,
  hidden: _,
  props: h,
  children: i,
  onRender: d,
  ...f
}) {
  if (_)
    return null;
  let a;
  d ? a = d(e, c) : l ? a = /* @__PURE__ */ xs(l, { ...h }) : a = c;
  const { left: u, top: y, width: p, height: m } = o;
  return /* @__PURE__ */ xs("div", { style: { width: p, height: m, left: u + s, top: y + r, ...n }, ...f, children: [
    a,
    i
  ] });
}
function x$(e, t, n = 0, o = 0) {
  const s = e.left + n, r = e.top + o;
  return !(s > t.left + t.width || r > t.top + t.height || s + e.width < t.left || r + e.height < t.top);
}
let S$ = class extends Bo {
  render() {
    const { width: t, height: n, cells: o, left: s, top: r, visibleBounding: l, onRenderCell: c, style: _, children: h, offsetX: i = 0, offsetY: d = 0, ...f } = this.props, a = l ? o.filter((u) => x$(u.bounding, l, i, d)) : o;
    return /* @__PURE__ */ xs("div", { style: { width: t, height: n, left: s, top: r, ..._ }, ...f, children: [
      a.map((u) => /* @__PURE__ */ xs(k$, { offsetX: i, offsetY: d, ...u })),
      h
    ] });
  }
};
class Vf extends Ne {
}
R(Vf, "NAME", "virtualgrid"), R(Vf, "Component", S$);
var ba, ve, Rm, Om, jo, zf, Pm = {}, Hm = [], C$ = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function Wt(e, t) {
  for (var n in t)
    e[n] = t[n];
  return e;
}
function Wm(e) {
  var t = e.parentNode;
  t && t.removeChild(e);
}
function wa(e, t, n) {
  var o, s, r, l = {};
  for (r in t)
    r == "key" ? o = t[r] : r == "ref" ? s = t[r] : l[r] = t[r];
  if (arguments.length > 2 && (l.children = arguments.length > 3 ? ba.call(arguments, 2) : n), typeof e == "function" && e.defaultProps != null)
    for (r in e.defaultProps)
      l[r] === void 0 && (l[r] = e.defaultProps[r]);
  return Ai(e, l, o, s, null);
}
function Ai(e, t, n, o, s) {
  var r = { type: e, props: t, key: n, ref: o, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: s ?? ++Rm };
  return s == null && ve.vnode != null && ve.vnode(r), r;
}
function E$() {
  return { current: null };
}
function $a(e) {
  return e.children;
}
function Vo(e, t) {
  this.props = e, this.context = t;
}
function wr(e, t) {
  if (t == null)
    return e.__ ? wr(e.__, e.__.__k.indexOf(e) + 1) : null;
  for (var n; t < e.__k.length; t++)
    if ((n = e.__k[t]) != null && n.__e != null)
      return n.__e;
  return typeof e.type == "function" ? wr(e) : null;
}
function Im(e) {
  var t, n;
  if ((e = e.__) != null && e.__c != null) {
    for (e.__e = e.__c.base = null, t = 0; t < e.__k.length; t++)
      if ((n = e.__k[t]) != null && n.__e != null) {
        e.__e = e.__c.base = n.__e;
        break;
      }
    return Im(e);
  }
}
function Yf(e) {
  (!e.__d && (e.__d = !0) && jo.push(e) && !Ss.__r++ || zf !== ve.debounceRendering) && ((zf = ve.debounceRendering) || setTimeout)(Ss);
}
function Ss() {
  for (var e; Ss.__r = jo.length; )
    e = jo.sort(function(t, n) {
      return t.__v.__b - n.__v.__b;
    }), jo = [], e.some(function(t) {
      var n, o, s, r, l, c;
      t.__d && (l = (r = (n = t).__v).__e, (c = n.__P) && (o = [], (s = Wt({}, r)).__v = r.__v + 1, jm(c, r, s, n.__n, c.ownerSVGElement !== void 0, r.__h != null ? [l] : null, o, l ?? wr(r), r.__h), M$(o, r), r.__e != l && Im(r)));
    });
}
function Um(e, t, n, o, s, r, l, c, _, h) {
  var i, d, f, a, u, y, p, m = o && o.__k || Hm, g = m.length;
  for (n.__k = [], i = 0; i < t.length; i++)
    if ((a = n.__k[i] = (a = t[i]) == null || typeof a == "boolean" ? null : typeof a == "string" || typeof a == "number" || typeof a == "bigint" ? Ai(null, a, null, null, a) : Array.isArray(a) ? Ai($a, { children: a }, null, null, null) : a.__b > 0 ? Ai(a.type, a.props, a.key, a.ref ? a.ref : null, a.__v) : a) != null) {
      if (a.__ = n, a.__b = n.__b + 1, (f = m[i]) === null || f && a.key == f.key && a.type === f.type)
        m[i] = void 0;
      else
        for (d = 0; d < g; d++) {
          if ((f = m[d]) && a.key == f.key && a.type === f.type) {
            m[d] = void 0;
            break;
          }
          f = null;
        }
      jm(e, a, f = f || Pm, s, r, l, c, _, h), u = a.__e, (d = a.ref) && f.ref != d && (p || (p = []), f.ref && p.push(f.ref, null, a), p.push(d, a.__c || u, a)), u != null ? (y == null && (y = u), typeof a.type == "function" && a.__k === f.__k ? a.__d = _ = Fm(a, _, e) : _ = Bm(e, a, f, m, u, _), typeof n.type == "function" && (n.__d = _)) : _ && f.__e == _ && _.parentNode != e && (_ = wr(f));
    }
  for (n.__e = y, i = g; i--; )
    m[i] != null && zm(m[i], m[i]);
  if (p)
    for (i = 0; i < p.length; i++)
      Vm(p[i], p[++i], p[++i]);
}
function Fm(e, t, n) {
  for (var o, s = e.__k, r = 0; s && r < s.length; r++)
    (o = s[r]) && (o.__ = e, t = typeof o.type == "function" ? Fm(o, t, n) : Bm(n, o, o, s, o.__e, t));
  return t;
}
function Bm(e, t, n, o, s, r) {
  var l, c, _;
  if (t.__d !== void 0)
    l = t.__d, t.__d = void 0;
  else if (n == null || s != r || s.parentNode == null)
    e:
      if (r == null || r.parentNode !== e)
        e.appendChild(s), l = null;
      else {
        for (c = r, _ = 0; (c = c.nextSibling) && _ < o.length; _ += 2)
          if (c == s)
            break e;
        e.insertBefore(s, r), l = r;
      }
  return l !== void 0 ? l : s.nextSibling;
}
function A$(e, t, n, o, s) {
  var r;
  for (r in n)
    r === "children" || r === "key" || r in t || Cs(e, r, null, n[r], o);
  for (r in t)
    s && typeof t[r] != "function" || r === "children" || r === "key" || r === "value" || r === "checked" || n[r] === t[r] || Cs(e, r, t[r], n[r], o);
}
function Gf(e, t, n) {
  t[0] === "-" ? e.setProperty(t, n) : e[t] = n == null ? "" : typeof n != "number" || C$.test(t) ? n : n + "px";
}
function Cs(e, t, n, o, s) {
  var r;
  e:
    if (t === "style")
      if (typeof n == "string")
        e.style.cssText = n;
      else {
        if (typeof o == "string" && (e.style.cssText = o = ""), o)
          for (t in o)
            n && t in n || Gf(e.style, t, "");
        if (n)
          for (t in n)
            o && n[t] === o[t] || Gf(e.style, t, n[t]);
      }
    else if (t[0] === "o" && t[1] === "n")
      r = t !== (t = t.replace(/Capture$/, "")), t = t.toLowerCase() in e ? t.toLowerCase().slice(2) : t.slice(2), e.l || (e.l = {}), e.l[t + r] = n, n ? o || e.addEventListener(t, r ? Xf : qf, r) : e.removeEventListener(t, r ? Xf : qf, r);
    else if (t !== "dangerouslySetInnerHTML") {
      if (s)
        t = t.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
      else if (t !== "href" && t !== "list" && t !== "form" && t !== "tabIndex" && t !== "download" && t in e)
        try {
          e[t] = n ?? "";
          break e;
        } catch {
        }
      typeof n == "function" || (n == null || n === !1 && t.indexOf("-") == -1 ? e.removeAttribute(t) : e.setAttribute(t, n));
    }
}
function qf(e) {
  this.l[e.type + !1](ve.event ? ve.event(e) : e);
}
function Xf(e) {
  this.l[e.type + !0](ve.event ? ve.event(e) : e);
}
function jm(e, t, n, o, s, r, l, c, _) {
  var h, i, d, f, a, u, y, p, m, g, $, w, S, C, A, v = t.type;
  if (t.constructor !== void 0)
    return null;
  n.__h != null && (_ = n.__h, c = t.__e = n.__e, t.__h = null, r = [c]), (h = ve.__b) && h(t);
  try {
    e:
      if (typeof v == "function") {
        if (p = t.props, m = (h = v.contextType) && o[h.__c], g = h ? m ? m.props.value : h.__ : o, n.__c ? y = (i = t.__c = n.__c).__ = i.__E : ("prototype" in v && v.prototype.render ? t.__c = i = new v(p, g) : (t.__c = i = new Vo(p, g), i.constructor = v, i.render = L$), m && m.sub(i), i.props = p, i.state || (i.state = {}), i.context = g, i.__n = o, d = i.__d = !0, i.__h = [], i._sb = []), i.__s == null && (i.__s = i.state), v.getDerivedStateFromProps != null && (i.__s == i.state && (i.__s = Wt({}, i.__s)), Wt(i.__s, v.getDerivedStateFromProps(p, i.__s))), f = i.props, a = i.state, d)
          v.getDerivedStateFromProps == null && i.componentWillMount != null && i.componentWillMount(), i.componentDidMount != null && i.__h.push(i.componentDidMount);
        else {
          if (v.getDerivedStateFromProps == null && p !== f && i.componentWillReceiveProps != null && i.componentWillReceiveProps(p, g), !i.__e && i.shouldComponentUpdate != null && i.shouldComponentUpdate(p, i.__s, g) === !1 || t.__v === n.__v) {
            for (i.props = p, i.state = i.__s, t.__v !== n.__v && (i.__d = !1), i.__v = t, t.__e = n.__e, t.__k = n.__k, t.__k.forEach(function(k) {
              k && (k.__ = t);
            }), $ = 0; $ < i._sb.length; $++)
              i.__h.push(i._sb[$]);
            i._sb = [], i.__h.length && l.push(i);
            break e;
          }
          i.componentWillUpdate != null && i.componentWillUpdate(p, i.__s, g), i.componentDidUpdate != null && i.__h.push(function() {
            i.componentDidUpdate(f, a, u);
          });
        }
        if (i.context = g, i.props = p, i.__v = t, i.__P = e, w = ve.__r, S = 0, "prototype" in v && v.prototype.render) {
          for (i.state = i.__s, i.__d = !1, w && w(t), h = i.render(i.props, i.state, i.context), C = 0; C < i._sb.length; C++)
            i.__h.push(i._sb[C]);
          i._sb = [];
        } else
          do
            i.__d = !1, w && w(t), h = i.render(i.props, i.state, i.context), i.state = i.__s;
          while (i.__d && ++S < 25);
        i.state = i.__s, i.getChildContext != null && (o = Wt(Wt({}, o), i.getChildContext())), d || i.getSnapshotBeforeUpdate == null || (u = i.getSnapshotBeforeUpdate(f, a)), A = h != null && h.type === $a && h.key == null ? h.props.children : h, Um(e, Array.isArray(A) ? A : [A], t, n, o, s, r, l, c, _), i.base = t.__e, t.__h = null, i.__h.length && l.push(i), y && (i.__E = i.__ = null), i.__e = !1;
      } else
        r == null && t.__v === n.__v ? (t.__k = n.__k, t.__e = n.__e) : t.__e = T$(n.__e, t, n, o, s, r, l, _);
    (h = ve.diffed) && h(t);
  } catch (k) {
    t.__v = null, (_ || r != null) && (t.__e = c, t.__h = !!_, r[r.indexOf(c)] = null), ve.__e(k, t, n);
  }
}
function M$(e, t) {
  ve.__c && ve.__c(t, e), e.some(function(n) {
    try {
      e = n.__h, n.__h = [], e.some(function(o) {
        o.call(n);
      });
    } catch (o) {
      ve.__e(o, n.__v);
    }
  });
}
function T$(e, t, n, o, s, r, l, c) {
  var _, h, i, d = n.props, f = t.props, a = t.type, u = 0;
  if (a === "svg" && (s = !0), r != null) {
    for (; u < r.length; u++)
      if ((_ = r[u]) && "setAttribute" in _ == !!a && (a ? _.localName === a : _.nodeType === 3)) {
        e = _, r[u] = null;
        break;
      }
  }
  if (e == null) {
    if (a === null)
      return document.createTextNode(f);
    e = s ? document.createElementNS("http://www.w3.org/2000/svg", a) : document.createElement(a, f.is && f), r = null, c = !1;
  }
  if (a === null)
    d === f || c && e.data === f || (e.data = f);
  else {
    if (r = r && ba.call(e.childNodes), h = (d = n.props || Pm).dangerouslySetInnerHTML, i = f.dangerouslySetInnerHTML, !c) {
      if (r != null)
        for (d = {}, u = 0; u < e.attributes.length; u++)
          d[e.attributes[u].name] = e.attributes[u].value;
      (i || h) && (i && (h && i.__html == h.__html || i.__html === e.innerHTML) || (e.innerHTML = i && i.__html || ""));
    }
    if (A$(e, f, d, s, c), i)
      t.__k = [];
    else if (u = t.props.children, Um(e, Array.isArray(u) ? u : [u], t, n, o, s && a !== "foreignObject", r, l, r ? r[0] : n.__k && wr(n, 0), c), r != null)
      for (u = r.length; u--; )
        r[u] != null && Wm(r[u]);
    c || ("value" in f && (u = f.value) !== void 0 && (u !== e.value || a === "progress" && !u || a === "option" && u !== d.value) && Cs(e, "value", u, d.value, !1), "checked" in f && (u = f.checked) !== void 0 && u !== e.checked && Cs(e, "checked", u, d.checked, !1));
  }
  return e;
}
function Vm(e, t, n) {
  try {
    typeof e == "function" ? e(t) : e.current = t;
  } catch (o) {
    ve.__e(o, n);
  }
}
function zm(e, t, n) {
  var o, s;
  if (ve.unmount && ve.unmount(e), (o = e.ref) && (o.current && o.current !== e.__e || Vm(o, null, t)), (o = e.__c) != null) {
    if (o.componentWillUnmount)
      try {
        o.componentWillUnmount();
      } catch (r) {
        ve.__e(r, t);
      }
    o.base = o.__P = null, e.__c = void 0;
  }
  if (o = e.__k)
    for (s = 0; s < o.length; s++)
      o[s] && zm(o[s], t, n || typeof e.type != "function");
  n || e.__e == null || Wm(e.__e), e.__ = e.__e = e.__d = void 0;
}
function L$(e, t, n) {
  return this.constructor(e, n);
}
ba = Hm.slice, ve = { __e: function(e, t, n, o) {
  for (var s, r, l; t = t.__; )
    if ((s = t.__c) && !s.__)
      try {
        if ((r = s.constructor) && r.getDerivedStateFromError != null && (s.setState(r.getDerivedStateFromError(e)), l = s.__d), s.componentDidCatch != null && (s.componentDidCatch(e, o || {}), l = s.__d), l)
          return s.__E = s;
      } catch (c) {
        e = c;
      }
  throw e;
} }, Rm = 0, Om = function(e) {
  return e != null && e.constructor === void 0;
}, Vo.prototype.setState = function(e, t) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = Wt({}, this.state), typeof e == "function" && (e = e(Wt({}, n), this.props)), e && Wt(n, e), e != null && this.__v && (t && this._sb.push(t), Yf(this));
}, Vo.prototype.forceUpdate = function(e) {
  this.__v && (this.__e = !0, e && this.__h.push(e), Yf(this));
}, Vo.prototype.render = $a, jo = [], Ss.__r = 0;
var D$ = 0;
function q(e, t, n, o, s) {
  var r, l, c = {};
  for (l in t)
    l == "ref" ? r = t[l] : c[l] = t[l];
  var _ = { type: e, props: c, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: --D$, __source: s, __self: o };
  if (typeof e == "function" && (r = e.defaultProps))
    for (l in r)
      c[l] === void 0 && (c[l] = r[l]);
  return ve.vnode && ve.vnode(_), _;
}
let N$ = (e = 21) => crypto.getRandomValues(new Uint8Array(e)).reduce((t, n) => (n &= 63, n < 36 ? t += n.toString(36) : n < 62 ? t += (n - 26).toString(36).toUpperCase() : n > 62 ? t += "-" : t += "_", t), "");
var Ym, ye, Gm, zo, Kf, qm = {}, Xm = [], R$ = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function It(e, t) {
  for (var n in t)
    e[n] = t[n];
  return e;
}
function Km(e) {
  var t = e.parentNode;
  t && t.removeChild(e);
}
function ac(e, t, n, o, s) {
  var r = { type: e, props: t, key: n, ref: o, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: s ?? ++Gm };
  return s == null && ye.vnode != null && ye.vnode(r), r;
}
function ka(e) {
  return e.children;
}
function Yo(e, t) {
  this.props = e, this.context = t;
}
function $r(e, t) {
  if (t == null)
    return e.__ ? $r(e.__, e.__.__k.indexOf(e) + 1) : null;
  for (var n; t < e.__k.length; t++)
    if ((n = e.__k[t]) != null && n.__e != null)
      return n.__e;
  return typeof e.type == "function" ? $r(e) : null;
}
function Zm(e) {
  var t, n;
  if ((e = e.__) != null && e.__c != null) {
    for (e.__e = e.__c.base = null, t = 0; t < e.__k.length; t++)
      if ((n = e.__k[t]) != null && n.__e != null) {
        e.__e = e.__c.base = n.__e;
        break;
      }
    return Zm(e);
  }
}
function Zf(e) {
  (!e.__d && (e.__d = !0) && zo.push(e) && !Es.__r++ || Kf !== ye.debounceRendering) && ((Kf = ye.debounceRendering) || setTimeout)(Es);
}
function Es() {
  for (var e; Es.__r = zo.length; )
    e = zo.sort(function(t, n) {
      return t.__v.__b - n.__v.__b;
    }), zo = [], e.some(function(t) {
      var n, o, s, r, l, c;
      t.__d && (l = (r = (n = t).__v).__e, (c = n.__P) && (o = [], (s = It({}, r)).__v = r.__v + 1, tg(c, r, s, n.__n, c.ownerSVGElement !== void 0, r.__h != null ? [l] : null, o, l ?? $r(r), r.__h), P$(o, r), r.__e != l && Zm(r)));
    });
}
function Jm(e, t, n, o, s, r, l, c, _, h) {
  var i, d, f, a, u, y, p, m = o && o.__k || Xm, g = m.length;
  for (n.__k = [], i = 0; i < t.length; i++)
    if ((a = n.__k[i] = (a = t[i]) == null || typeof a == "boolean" ? null : typeof a == "string" || typeof a == "number" || typeof a == "bigint" ? ac(null, a, null, null, a) : Array.isArray(a) ? ac(ka, { children: a }, null, null, null) : a.__b > 0 ? ac(a.type, a.props, a.key, a.ref ? a.ref : null, a.__v) : a) != null) {
      if (a.__ = n, a.__b = n.__b + 1, (f = m[i]) === null || f && a.key == f.key && a.type === f.type)
        m[i] = void 0;
      else
        for (d = 0; d < g; d++) {
          if ((f = m[d]) && a.key == f.key && a.type === f.type) {
            m[d] = void 0;
            break;
          }
          f = null;
        }
      tg(e, a, f = f || qm, s, r, l, c, _, h), u = a.__e, (d = a.ref) && f.ref != d && (p || (p = []), f.ref && p.push(f.ref, null, a), p.push(d, a.__c || u, a)), u != null ? (y == null && (y = u), typeof a.type == "function" && a.__k === f.__k ? a.__d = _ = Qm(a, _, e) : _ = eg(e, a, f, m, u, _), typeof n.type == "function" && (n.__d = _)) : _ && f.__e == _ && _.parentNode != e && (_ = $r(f));
    }
  for (n.__e = y, i = g; i--; )
    m[i] != null && og(m[i], m[i]);
  if (p)
    for (i = 0; i < p.length; i++)
      ng(p[i], p[++i], p[++i]);
}
function Qm(e, t, n) {
  for (var o, s = e.__k, r = 0; s && r < s.length; r++)
    (o = s[r]) && (o.__ = e, t = typeof o.type == "function" ? Qm(o, t, n) : eg(n, o, o, s, o.__e, t));
  return t;
}
function eg(e, t, n, o, s, r) {
  var l, c, _;
  if (t.__d !== void 0)
    l = t.__d, t.__d = void 0;
  else if (n == null || s != r || s.parentNode == null)
    e:
      if (r == null || r.parentNode !== e)
        e.appendChild(s), l = null;
      else {
        for (c = r, _ = 0; (c = c.nextSibling) && _ < o.length; _ += 2)
          if (c == s)
            break e;
        e.insertBefore(s, r), l = r;
      }
  return l !== void 0 ? l : s.nextSibling;
}
function O$(e, t, n, o, s) {
  var r;
  for (r in n)
    r === "children" || r === "key" || r in t || As(e, r, null, n[r], o);
  for (r in t)
    s && typeof t[r] != "function" || r === "children" || r === "key" || r === "value" || r === "checked" || n[r] === t[r] || As(e, r, t[r], n[r], o);
}
function Jf(e, t, n) {
  t[0] === "-" ? e.setProperty(t, n) : e[t] = n == null ? "" : typeof n != "number" || R$.test(t) ? n : n + "px";
}
function As(e, t, n, o, s) {
  var r;
  e:
    if (t === "style")
      if (typeof n == "string")
        e.style.cssText = n;
      else {
        if (typeof o == "string" && (e.style.cssText = o = ""), o)
          for (t in o)
            n && t in n || Jf(e.style, t, "");
        if (n)
          for (t in n)
            o && n[t] === o[t] || Jf(e.style, t, n[t]);
      }
    else if (t[0] === "o" && t[1] === "n")
      r = t !== (t = t.replace(/Capture$/, "")), t = t.toLowerCase() in e ? t.toLowerCase().slice(2) : t.slice(2), e.l || (e.l = {}), e.l[t + r] = n, n ? o || e.addEventListener(t, r ? eu : Qf, r) : e.removeEventListener(t, r ? eu : Qf, r);
    else if (t !== "dangerouslySetInnerHTML") {
      if (s)
        t = t.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
      else if (t !== "href" && t !== "list" && t !== "form" && t !== "tabIndex" && t !== "download" && t in e)
        try {
          e[t] = n ?? "";
          break e;
        } catch {
        }
      typeof n == "function" || (n == null || n === !1 && t.indexOf("-") == -1 ? e.removeAttribute(t) : e.setAttribute(t, n));
    }
}
function Qf(e) {
  this.l[e.type + !1](ye.event ? ye.event(e) : e);
}
function eu(e) {
  this.l[e.type + !0](ye.event ? ye.event(e) : e);
}
function tg(e, t, n, o, s, r, l, c, _) {
  var h, i, d, f, a, u, y, p, m, g, $, w, S, C, A, v = t.type;
  if (t.constructor !== void 0)
    return null;
  n.__h != null && (_ = n.__h, c = t.__e = n.__e, t.__h = null, r = [c]), (h = ye.__b) && h(t);
  try {
    e:
      if (typeof v == "function") {
        if (p = t.props, m = (h = v.contextType) && o[h.__c], g = h ? m ? m.props.value : h.__ : o, n.__c ? y = (i = t.__c = n.__c).__ = i.__E : ("prototype" in v && v.prototype.render ? t.__c = i = new v(p, g) : (t.__c = i = new Yo(p, g), i.constructor = v, i.render = W$), m && m.sub(i), i.props = p, i.state || (i.state = {}), i.context = g, i.__n = o, d = i.__d = !0, i.__h = [], i._sb = []), i.__s == null && (i.__s = i.state), v.getDerivedStateFromProps != null && (i.__s == i.state && (i.__s = It({}, i.__s)), It(i.__s, v.getDerivedStateFromProps(p, i.__s))), f = i.props, a = i.state, d)
          v.getDerivedStateFromProps == null && i.componentWillMount != null && i.componentWillMount(), i.componentDidMount != null && i.__h.push(i.componentDidMount);
        else {
          if (v.getDerivedStateFromProps == null && p !== f && i.componentWillReceiveProps != null && i.componentWillReceiveProps(p, g), !i.__e && i.shouldComponentUpdate != null && i.shouldComponentUpdate(p, i.__s, g) === !1 || t.__v === n.__v) {
            for (i.props = p, i.state = i.__s, t.__v !== n.__v && (i.__d = !1), i.__v = t, t.__e = n.__e, t.__k = n.__k, t.__k.forEach(function(k) {
              k && (k.__ = t);
            }), $ = 0; $ < i._sb.length; $++)
              i.__h.push(i._sb[$]);
            i._sb = [], i.__h.length && l.push(i);
            break e;
          }
          i.componentWillUpdate != null && i.componentWillUpdate(p, i.__s, g), i.componentDidUpdate != null && i.__h.push(function() {
            i.componentDidUpdate(f, a, u);
          });
        }
        if (i.context = g, i.props = p, i.__v = t, i.__P = e, w = ye.__r, S = 0, "prototype" in v && v.prototype.render) {
          for (i.state = i.__s, i.__d = !1, w && w(t), h = i.render(i.props, i.state, i.context), C = 0; C < i._sb.length; C++)
            i.__h.push(i._sb[C]);
          i._sb = [];
        } else
          do
            i.__d = !1, w && w(t), h = i.render(i.props, i.state, i.context), i.state = i.__s;
          while (i.__d && ++S < 25);
        i.state = i.__s, i.getChildContext != null && (o = It(It({}, o), i.getChildContext())), d || i.getSnapshotBeforeUpdate == null || (u = i.getSnapshotBeforeUpdate(f, a)), A = h != null && h.type === ka && h.key == null ? h.props.children : h, Jm(e, Array.isArray(A) ? A : [A], t, n, o, s, r, l, c, _), i.base = t.__e, t.__h = null, i.__h.length && l.push(i), y && (i.__E = i.__ = null), i.__e = !1;
      } else
        r == null && t.__v === n.__v ? (t.__k = n.__k, t.__e = n.__e) : t.__e = H$(n.__e, t, n, o, s, r, l, _);
    (h = ye.diffed) && h(t);
  } catch (k) {
    t.__v = null, (_ || r != null) && (t.__e = c, t.__h = !!_, r[r.indexOf(c)] = null), ye.__e(k, t, n);
  }
}
function P$(e, t) {
  ye.__c && ye.__c(t, e), e.some(function(n) {
    try {
      e = n.__h, n.__h = [], e.some(function(o) {
        o.call(n);
      });
    } catch (o) {
      ye.__e(o, n.__v);
    }
  });
}
function H$(e, t, n, o, s, r, l, c) {
  var _, h, i, d = n.props, f = t.props, a = t.type, u = 0;
  if (a === "svg" && (s = !0), r != null) {
    for (; u < r.length; u++)
      if ((_ = r[u]) && "setAttribute" in _ == !!a && (a ? _.localName === a : _.nodeType === 3)) {
        e = _, r[u] = null;
        break;
      }
  }
  if (e == null) {
    if (a === null)
      return document.createTextNode(f);
    e = s ? document.createElementNS("http://www.w3.org/2000/svg", a) : document.createElement(a, f.is && f), r = null, c = !1;
  }
  if (a === null)
    d === f || c && e.data === f || (e.data = f);
  else {
    if (r = r && Ym.call(e.childNodes), h = (d = n.props || qm).dangerouslySetInnerHTML, i = f.dangerouslySetInnerHTML, !c) {
      if (r != null)
        for (d = {}, u = 0; u < e.attributes.length; u++)
          d[e.attributes[u].name] = e.attributes[u].value;
      (i || h) && (i && (h && i.__html == h.__html || i.__html === e.innerHTML) || (e.innerHTML = i && i.__html || ""));
    }
    if (O$(e, f, d, s, c), i)
      t.__k = [];
    else if (u = t.props.children, Jm(e, Array.isArray(u) ? u : [u], t, n, o, s && a !== "foreignObject", r, l, r ? r[0] : n.__k && $r(n, 0), c), r != null)
      for (u = r.length; u--; )
        r[u] != null && Km(r[u]);
    c || ("value" in f && (u = f.value) !== void 0 && (u !== e.value || a === "progress" && !u || a === "option" && u !== d.value) && As(e, "value", u, d.value, !1), "checked" in f && (u = f.checked) !== void 0 && u !== e.checked && As(e, "checked", u, d.checked, !1));
  }
  return e;
}
function ng(e, t, n) {
  try {
    typeof e == "function" ? e(t) : e.current = t;
  } catch (o) {
    ye.__e(o, n);
  }
}
function og(e, t, n) {
  var o, s;
  if (ye.unmount && ye.unmount(e), (o = e.ref) && (o.current && o.current !== e.__e || ng(o, null, t)), (o = e.__c) != null) {
    if (o.componentWillUnmount)
      try {
        o.componentWillUnmount();
      } catch (r) {
        ye.__e(r, t);
      }
    o.base = o.__P = null, e.__c = void 0;
  }
  if (o = e.__k)
    for (s = 0; s < o.length; s++)
      o[s] && og(o[s], t, n || typeof e.type != "function");
  n || e.__e == null || Km(e.__e), e.__ = e.__e = e.__d = void 0;
}
function W$(e, t, n) {
  return this.constructor(e, n);
}
Ym = Xm.slice, ye = { __e: function(e, t, n, o) {
  for (var s, r, l; t = t.__; )
    if ((s = t.__c) && !s.__)
      try {
        if ((r = s.constructor) && r.getDerivedStateFromError != null && (s.setState(r.getDerivedStateFromError(e)), l = s.__d), s.componentDidCatch != null && (s.componentDidCatch(e, o || {}), l = s.__d), l)
          return s.__E = s;
      } catch (c) {
        e = c;
      }
  throw e;
} }, Gm = 0, Yo.prototype.setState = function(e, t) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = It({}, this.state), typeof e == "function" && (e = e(It({}, n), this.props)), e && It(n, e), e != null && this.__v && (t && this._sb.push(t), Zf(this));
}, Yo.prototype.forceUpdate = function(e) {
  this.__v && (this.__e = !0, e && this.__h.push(e), Zf(this));
}, Yo.prototype.render = ka, zo = [], Es.__r = 0;
var I$ = 0;
function tu(e, t, n, o, s) {
  var r, l, c = {};
  for (l in t)
    l == "ref" ? r = t[l] : c[l] = t[l];
  var _ = { type: e, props: c, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: --I$, __source: s, __self: o };
  if (typeof e == "function" && (r = e.defaultProps))
    for (l in r)
      c[l] === void 0 && (c[l] = r[l]);
  return ye.vnode && ye.vnode(_), _;
}
var an, _n;
class nu extends Yo {
  constructor(n) {
    super(n);
    T(this, an, 0);
    T(this, _n, null);
    R(this, "_handleWheel", (n) => {
      const { wheelContainer: o } = this.props, s = n.target;
      if (!(!s || !o) && (typeof o == "string" && s.closest(o) || typeof o == "object")) {
        const r = (this.props.type === "horz" ? n.deltaX : n.deltaY) * (this.props.wheelSpeed ?? 1);
        this.scrollOffset(r) && n.preventDefault();
      }
    });
    R(this, "_handleMouseMove", (n) => {
      const { dragStart: o } = this.state;
      o && (b(this, an) && cancelAnimationFrame(b(this, an)), H(this, an, requestAnimationFrame(() => {
        const s = this.props.type === "horz" ? n.clientX - o.x : n.clientY - o.y;
        this.scroll(o.offset + s * this.props.scrollSize / this.props.clientSize), H(this, an, 0);
      })), n.preventDefault());
    });
    R(this, "_handleMouseUp", () => {
      this.state.dragStart && this.setState({
        dragStart: !1
      });
    });
    R(this, "_handleMouseDown", (n) => {
      this.state.dragStart || this.setState({ dragStart: { x: n.clientX, y: n.clientY, offset: this.scrollPos } }), n.stopPropagation();
    });
    R(this, "_handleClick", (n) => {
      const o = n.currentTarget;
      if (!o)
        return;
      const s = o.getBoundingClientRect(), { type: r, clientSize: l, scrollSize: c } = this.props, _ = (r === "horz" ? n.clientX - s.left : n.clientY - s.top) - this.barSize / 2;
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
    const { clientSize: n, scrollSize: o, size: s = 12, minBarSize: r = 3 * s } = this.props;
    return Math.max(Math.round(n * n / o), r);
  }
  componentDidMount() {
    document.addEventListener("mousemove", this._handleMouseMove), document.addEventListener("mouseup", this._handleMouseUp);
    const { wheelContainer: n } = this.props;
    n && (H(this, _n, typeof n == "string" ? document : n.current), b(this, _n).addEventListener("wheel", this._handleWheel, { passive: !1 }));
  }
  componentWillUnmount() {
    document.removeEventListener("mousemove", this._handleMouseMove), document.removeEventListener("mouseup", this._handleMouseUp), b(this, _n) && b(this, _n).removeEventListener("wheel", this._handleWheel);
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
      size: s = 12,
      className: r,
      style: l,
      left: c,
      top: _,
      bottom: h,
      right: i
    } = this.props, { maxScrollPos: d, scrollPos: f } = this, { dragStart: a } = this.state, u = {
      left: c,
      top: _,
      bottom: h,
      right: i,
      ...l
    }, y = {};
    return o === "horz" ? (u.height = s, u.width = n, y.width = this.barSize, y.left = Math.round(Math.min(d, f) * (n - y.width) / d)) : (u.width = s, u.height = n, y.height = this.barSize, y.top = Math.round(Math.min(d, f) * (n - y.height) / d)), /* @__PURE__ */ tu(
      "div",
      {
        className: B("scrollbar", r, {
          "is-vert": o === "vert",
          "is-horz": o === "horz",
          "is-dragging": a
        }),
        style: u,
        onMouseDown: this._handleClick,
        children: /* @__PURE__ */ tu(
          "div",
          {
            className: "scrollbar-bar",
            style: y,
            onMouseDown: this._handleMouseDown
          }
        )
      }
    );
  }
}
an = new WeakMap(), _n = new WeakMap();
function ou(e, t, n) {
  return e && (t && (e = Math.max(t, e)), n && (e = Math.min(n, e))), e;
}
function rg({ col: e, className: t, height: n, row: o, onRenderCell: s, style: r, outerStyle: l, children: c, outerClass: _, ...h }) {
  var v;
  const i = {
    left: e.left,
    width: e.realWidth,
    height: n,
    ...l
  }, { align: d, border: f } = e.setting, a = {
    justifyContent: d ? d === "left" ? "start" : d === "right" ? "end" : d : void 0,
    ...e.setting.cellStyle,
    ...r
  }, u = ["dtable-cell", _, e.setting.className, {
    "has-border-left": f === !0 || f === "left",
    "has-border-right": f === !0 || f === "right"
  }], y = ["dtable-cell-content", t], p = [c ?? ((v = o.data) == null ? void 0 : v[e.name]) ?? ""], m = s ? s(p, { row: o, col: e }, wa) : p, g = [], $ = [], w = {}, S = {};
  let C = "div";
  m == null || m.forEach((k) => {
    if (typeof k == "object" && k && !Om(k) && ("html" in k || "className" in k || "style" in k || "attrs" in k || "children" in k || "tagName" in k)) {
      const L = k.outer ? g : $;
      k.html ? L.push(/* @__PURE__ */ q("div", { className: B("dtable-cell-html", k.className), style: k.style, dangerouslySetInnerHTML: { __html: k.html }, ...k.attrs ?? {} })) : (k.style && Object.assign(k.outer ? i : a, k.style), k.className && (k.outer ? u : y).push(k.className), k.children && L.push(k.children), k.attrs && Object.assign(k.outer ? w : S, k.attrs)), k.tagName && !k.outer && (C = k.tagName);
    } else
      $.push(k);
  });
  const A = C;
  return /* @__PURE__ */ q(
    "div",
    {
      className: B(u),
      style: i,
      "data-col": e.name,
      ...h,
      ...w,
      children: [
        $.length > 0 && /* @__PURE__ */ q(A, { className: B(y), style: a, ...S, children: $ }),
        g
      ]
    }
  );
}
function _c({ row: e, className: t, top: n = 0, left: o = 0, width: s, height: r, cols: l, CellComponent: c = rg, onRenderCell: _ }) {
  return /* @__PURE__ */ q("div", { className: B("dtable-cells", t), style: { top: n, left: o, width: s, height: r }, children: l.map((h) => h.visible ? /* @__PURE__ */ q(
    c,
    {
      col: h,
      row: e,
      onRenderCell: _
    },
    h.name
  ) : null) });
}
function ig({
  row: e,
  className: t,
  top: n,
  height: o,
  fixedLeftCols: s,
  fixedRightCols: r,
  scrollCols: l,
  fixedLeftWidth: c,
  scrollWidth: _,
  scrollColsWidth: h,
  fixedRightWidth: i,
  scrollLeft: d,
  CellComponent: f = rg,
  onRenderCell: a,
  style: u,
  ...y
}) {
  let p = null;
  s != null && s.length && (p = /* @__PURE__ */ q(
    _c,
    {
      className: "dtable-fixed-left",
      cols: s,
      width: c,
      row: e,
      CellComponent: f,
      onRenderCell: a
    }
  ));
  let m = null;
  l != null && l.length && (m = /* @__PURE__ */ q(
    _c,
    {
      className: "dtable-flexable",
      cols: l,
      left: c - d,
      width: Math.max(_, h),
      row: e,
      CellComponent: f,
      onRenderCell: a
    }
  ));
  let g = null;
  r != null && r.length && (g = /* @__PURE__ */ q(
    _c,
    {
      className: "dtable-fixed-right",
      cols: r,
      left: c + _,
      width: i,
      row: e,
      CellComponent: f,
      onRenderCell: a
    }
  ));
  const $ = { top: n, height: o, lineHeight: `${o - 2}px`, ...u };
  return /* @__PURE__ */ q(
    "div",
    {
      className: B("dtable-row", t),
      style: $,
      "data-id": e.id,
      ...y,
      children: [
        p,
        m,
        g
      ]
    }
  );
}
function U$({ height: e, onRenderRow: t, ...n }) {
  const o = {
    height: e,
    ...n,
    row: { id: "HEADER", index: -1, top: 0 },
    className: "dtable-in-header",
    top: 0
  };
  if (t) {
    const s = t({ props: o }, wa);
    s && Object.assign(o, s);
  }
  return /* @__PURE__ */ q("div", { className: "dtable-header", style: { height: e }, children: /* @__PURE__ */ q(ig, { ...o }) });
}
function F$({
  className: e,
  style: t,
  top: n,
  rows: o,
  height: s,
  rowHeight: r,
  scrollTop: l,
  onRenderRow: c,
  ..._
}) {
  return t = { ...t, top: n, height: s }, /* @__PURE__ */ q("div", { className: B("dtable-rows", e), style: t, children: o.map((h) => {
    const i = {
      className: `dtable-row-${h.index % 2 ? "odd" : "even"}`,
      row: h,
      top: h.top - l,
      height: r,
      ..._
    }, d = c == null ? void 0 : c({ props: i, row: h }, wa);
    return d && Object.assign(i, d), /* @__PURE__ */ q(ig, { ...i });
  }) });
}
const Ms = /* @__PURE__ */ new Map(), Ts = [];
function sg(e, t) {
  const { name: n } = e;
  if (!(t != null && t.override) && Ms.has(n))
    throw new Error(`DTable: Plugin with name ${n} already exists`);
  Ms.set(n, e), t != null && t.buildIn && !Ts.includes(n) && Ts.push(n);
}
function to(e, t) {
  sg(e, t);
  const n = (o) => {
    if (!o)
      return e;
    const { defaultOptions: s, ...r } = e;
    return {
      ...r,
      defaultOptions: { ...s, ...o }
    };
  };
  return n.plugin = e, n;
}
function lg(e) {
  return Ms.delete(e);
}
function B$(e) {
  if (typeof e == "string") {
    const t = Ms.get(e);
    return t || console.warn(`DTable: Cannot found plugin "${e}"`), t;
  }
  if (typeof e == "function" && "plugin" in e)
    return e.plugin;
  if (typeof e == "object")
    return e;
  console.warn("DTable: Invalid plugin", e);
}
function cg(e, t, n) {
  return t.forEach((o) => {
    var r;
    if (!o)
      return;
    const s = B$(o);
    s && (n.has(s.name) || ((r = s.plugins) != null && r.length && cg(e, s.plugins, n), e.push(s), n.add(s.name)));
  }), e;
}
function j$(e = [], t = !0) {
  return t && Ts.length && e.unshift(...Ts), e != null && e.length ? cg([], e, /* @__PURE__ */ new Set()) : [];
}
function ru() {
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
var _i, fn, Fn, $t, qe, kt, xe, je, Xe, Bn, Br, jr, _t, jn, Vn, gl, ag, vl, _g, yl, fg, bl, ug, Vr, Nc, wl, $l, zr, Yr, kl, xl, Sl, hg, Cl, dg, El, pg;
let V$ = (_i = class extends Vo {
  constructor(n) {
    super(n);
    T(this, gl);
    T(this, vl);
    T(this, yl);
    T(this, bl);
    T(this, Vr);
    T(this, Sl);
    T(this, Cl);
    T(this, El);
    R(this, "ref", E$());
    T(this, fn, 0);
    T(this, Fn, void 0);
    T(this, $t, !1);
    T(this, qe, void 0);
    T(this, kt, void 0);
    T(this, xe, []);
    T(this, je, void 0);
    T(this, Xe, /* @__PURE__ */ new Map());
    T(this, Bn, {});
    T(this, Br, void 0);
    T(this, jr, []);
    R(this, "updateLayout", () => {
      b(this, fn) && cancelAnimationFrame(b(this, fn)), H(this, fn, requestAnimationFrame(() => {
        H(this, je, void 0), this.forceUpdate(), H(this, fn, 0);
      }));
    });
    T(this, _t, (n, o) => {
      o = o || n.type;
      const s = b(this, Xe).get(o);
      if (s != null && s.length) {
        for (const r of s)
          if (r.call(this, n) === !1) {
            n.stopPropagation(), n.preventDefault();
            break;
          }
      }
    });
    T(this, jn, (n) => {
      b(this, _t).call(this, n, `window_${n.type}`);
    });
    T(this, Vn, (n) => {
      b(this, _t).call(this, n, `document_${n.type}`);
    });
    T(this, wl, (n, o) => {
      if (this.options.onRenderRow) {
        const s = this.options.onRenderRow.call(this, n, o);
        s && Object.assign(n.props, s);
      }
      return b(this, xe).forEach((s) => {
        if (s.onRenderRow) {
          const r = s.onRenderRow.call(this, n, o);
          r && Object.assign(n.props, r);
        }
      }), n.props;
    });
    T(this, $l, (n, o) => (this.options.onRenderHeaderRow && (n.props = this.options.onRenderHeaderRow.call(this, n, o)), b(this, xe).forEach((s) => {
      s.onRenderHeaderRow && (n.props = s.onRenderHeaderRow.call(this, n, o));
    }), n.props));
    T(this, zr, (n, o, s) => {
      const { row: r, col: l } = o;
      n[0] = this.getCellValue(r, l);
      const c = r.id === "HEADER" ? "onRenderHeaderCell" : "onRenderCell";
      return l.setting[c] && (n = l.setting[c].call(this, n, o, s)), this.options[c] && (n = this.options[c].call(this, n, o, s)), b(this, xe).forEach((_) => {
        _[c] && (n = _[c].call(this, n, o, s));
      }), n;
    });
    T(this, Yr, (n, o) => {
      o === "horz" ? this.scroll({ scrollLeft: n }) : this.scroll({ scrollTop: n });
    });
    T(this, kl, (n) => {
      var c, _, h, i, d;
      const o = this.getPointerInfo(n);
      if (!o)
        return;
      const { rowID: s, colName: r, cellElement: l } = o;
      if (s === "HEADER")
        l && ((c = this.options.onHeaderCellClick) == null || c.call(this, n, { colName: r, element: l }), b(this, xe).forEach((f) => {
          var a;
          (a = f.onHeaderCellClick) == null || a.call(this, n, { colName: r, element: l });
        }));
      else {
        const { rowElement: f } = o, a = this.layout.visibleRows.find((u) => u.id === s);
        if (l) {
          if (((_ = this.options.onCellClick) == null ? void 0 : _.call(this, n, { colName: r, rowID: s, rowInfo: a, element: l, rowElement: f })) === !0)
            return;
          for (const u of b(this, xe))
            if (((h = u.onCellClick) == null ? void 0 : h.call(this, n, { colName: r, rowID: s, rowInfo: a, element: l, rowElement: f })) === !0)
              return;
        }
        if (((i = this.options.onRowClick) == null ? void 0 : i.call(this, n, { rowID: s, rowInfo: a, element: f })) === !0)
          return;
        for (const u of b(this, xe))
          if (((d = u.onRowClick) == null ? void 0 : d.call(this, n, { rowID: s, rowInfo: a, element: f })) === !0)
            return;
      }
    });
    T(this, xl, (n) => {
      const o = n.key.toLowerCase();
      if (["pageup", "pagedown", "home", "end"].includes(o))
        return !this.scroll({ to: o.replace("page", "") });
    });
    H(this, Fn, n.id ?? `dtable-${N$(10)}`), this.state = { scrollTop: 0, scrollLeft: 0, renderCount: 0 }, H(this, kt, Object.freeze(j$(n.plugins))), b(this, kt).forEach((o) => {
      var c;
      const { methods: s, data: r, state: l } = o;
      s && Object.entries(s).forEach(([_, h]) => {
        typeof h == "function" && Object.assign(this, { [_]: h.bind(this) });
      }), r && Object.assign(b(this, Bn), r.call(this)), l && Object.assign(this.state, l.call(this)), (c = o.onCreate) == null || c.call(this, o);
    });
  }
  get options() {
    var n;
    return ((n = b(this, je)) == null ? void 0 : n.options) || b(this, qe) || ru();
  }
  get plugins() {
    return b(this, xe);
  }
  get layout() {
    return b(this, je);
  }
  get id() {
    return b(this, Fn);
  }
  get data() {
    return b(this, Bn);
  }
  get parent() {
    var n;
    return this.props.parent ?? ((n = this.ref.current) == null ? void 0 : n.parentElement);
  }
  componentWillReceiveProps() {
    H(this, qe, void 0);
  }
  componentDidMount() {
    if (b(this, $t) ? this.forceUpdate() : U(this, Vr, Nc).call(this), b(this, xe).forEach((n) => {
      let { events: o } = n;
      o && (typeof o == "function" && (o = o.call(this)), Object.entries(o).forEach(([s, r]) => {
        r && this.on(s, r);
      }));
    }), this.on("click", b(this, kl)), this.on("keydown", b(this, xl)), this.options.responsive) {
      if (typeof ResizeObserver < "u") {
        const { parent: n } = this;
        if (n) {
          const o = new ResizeObserver(this.updateLayout);
          o.observe(n), H(this, Br, o);
        }
      }
      this.on("window_resize", this.updateLayout);
    }
    b(this, xe).forEach((n) => {
      var o;
      (o = n.onMounted) == null || o.call(this);
    });
  }
  componentDidUpdate() {
    b(this, $t) ? U(this, Vr, Nc).call(this) : b(this, xe).forEach((n) => {
      var o;
      (o = n.onUpdated) == null || o.call(this);
    });
  }
  componentWillUnmount() {
    var o;
    (o = b(this, Br)) == null || o.disconnect();
    const { current: n } = this.ref;
    if (n)
      for (const s of b(this, Xe).keys())
        s.startsWith("window_") ? window.removeEventListener(s.replace("window_", ""), b(this, jn)) : s.startsWith("document_") ? document.removeEventListener(s.replace("document_", ""), b(this, Vn)) : n.removeEventListener(s, b(this, _t));
    b(this, xe).forEach((s) => {
      var r;
      (r = s.onUnmounted) == null || r.call(this);
    }), b(this, kt).forEach((s) => {
      var r;
      (r = s.onDestory) == null || r.call(this);
    }), H(this, Bn, {}), b(this, Xe).clear();
  }
  on(n, o, s) {
    var l;
    s && (n = `${s}_${n}`);
    const r = b(this, Xe).get(n);
    r ? r.push(o) : (b(this, Xe).set(n, [o]), n.startsWith("window_") ? window.addEventListener(n.replace("window_", ""), b(this, jn)) : n.startsWith("document_") ? document.addEventListener(n.replace("document_", ""), b(this, Vn)) : (l = this.ref.current) == null || l.addEventListener(n, b(this, _t)));
  }
  off(n, o, s) {
    var c;
    s && (n = `${s}_${n}`);
    const r = b(this, Xe).get(n);
    if (!r)
      return;
    const l = r.indexOf(o);
    l >= 0 && r.splice(l, 1), r.length || (b(this, Xe).delete(n), n.startsWith("window_") ? window.removeEventListener(n.replace("window_", ""), b(this, jn)) : n.startsWith("document_") ? document.removeEventListener(n.replace("document_", ""), b(this, Vn)) : (c = this.ref.current) == null || c.removeEventListener(n, b(this, _t)));
  }
  emitCustomEvent(n, o) {
    b(this, _t).call(this, o instanceof Event ? o : new CustomEvent(n, { detail: o }), n);
  }
  scroll(n, o) {
    const { scrollLeft: s, scrollTop: r, rowsHeightTotal: l, rowsHeight: c, rowHeight: _, colsInfo: { scrollWidth: h, scrollColsWidth: i } } = this.layout, { to: d } = n;
    let { scrollLeft: f, scrollTop: a } = n;
    if (d === "up" || d === "down")
      a = r + (d === "down" ? 1 : -1) * Math.floor(c / _) * _;
    else if (d === "left" || d === "right")
      f = s + (d === "right" ? 1 : -1) * h;
    else if (d === "home")
      a = 0;
    else if (d === "end")
      a = l - c;
    else if (d === "left-begin")
      f = 0;
    else if (d === "right-end")
      f = i - h;
    else {
      const { offsetLeft: y, offsetTop: p } = n;
      typeof y == "number" && (f = s + y), typeof p == "number" && (f = r + p);
    }
    const u = {};
    return typeof f == "number" && (f = Math.max(0, Math.min(f, i - h)), f !== s && (u.scrollLeft = f)), typeof a == "number" && (a = Math.max(0, Math.min(a, l - c)), a !== r && (u.scrollTop = a)), Object.keys(u).length ? (this.setState(u, () => {
      var y;
      (y = this.options.onScroll) == null || y.call(this, u), o == null || o.call(this, !0);
    }), !0) : (o == null || o.call(this, !1), !1);
  }
  getColInfo(n) {
    if (n === void 0)
      return;
    if (typeof n == "object")
      return n;
    const { colsMap: o, colsList: s } = this.layout;
    return typeof n == "number" ? s[n] : o[n];
  }
  getRowInfo(n) {
    if (n === void 0)
      return;
    if (typeof n == "object")
      return n;
    if (n === -1 || n === "HEADER")
      return { id: "HEADER", index: -1, top: 0 };
    const { rows: o, rowsMap: s } = this.layout;
    return typeof n == "number" ? o[n] : s[n];
  }
  getCellValue(n, o) {
    var _;
    const s = typeof n == "object" ? n : this.getRowInfo(n);
    if (!s)
      return;
    const r = typeof o == "object" ? o : this.getColInfo(o);
    if (!r)
      return;
    let l = s.id === "HEADER" ? r.setting.title ?? r.setting.name : (_ = s.data) == null ? void 0 : _[r.name];
    const { cellValueGetter: c } = this.options;
    return c && (l = c.call(this, s, r, l)), l;
  }
  getRowInfoByIndex(n) {
    return this.layout.rows[n];
  }
  update(n = {}, o) {
    if (!b(this, qe))
      return;
    typeof n == "function" && (o = n, n = {});
    const { dirtyType: s, state: r } = n;
    if (s === "layout")
      H(this, je, void 0);
    else if (s === "options") {
      if (H(this, qe, void 0), !b(this, je))
        return;
      H(this, je, void 0);
    }
    this.setState(r ?? ((l) => ({ renderCount: l.renderCount + 1 })), o);
  }
  getPointerInfo(n) {
    const o = n.target;
    if (!o || o.closest(".no-cell-event"))
      return;
    const s = o.closest(".dtable-cell");
    if (!s)
      return;
    const r = s.closest(".dtable-row");
    if (!r)
      return;
    const l = s == null ? void 0 : s.getAttribute("data-col"), c = r == null ? void 0 : r.getAttribute("data-id");
    if (!(typeof l != "string" || typeof c != "string"))
      return {
        cellElement: s,
        rowElement: r,
        colName: l,
        rowID: c,
        target: o
      };
  }
  i18n(n, o, s) {
    return Gr(b(this, jr), n, o, s, this.options.lang) ?? `{i18n:${n}}`;
  }
  render() {
    const n = U(this, El, pg).call(this), { className: o, rowHover: s, colHover: r, cellHover: l, bordered: c, striped: _, scrollbarHover: h } = this.options, i = { width: n == null ? void 0 : n.width, height: n == null ? void 0 : n.height }, d = ["dtable", o, {
      "dtable-hover-row": s,
      "dtable-hover-col": r,
      "dtable-hover-cell": l,
      "dtable-bordered": c,
      "dtable-striped": _,
      "dtable-scrolled-down": ((n == null ? void 0 : n.scrollTop) ?? 0) > 0,
      "scrollbar-hover": h
    }], f = [];
    return n && b(this, xe).forEach((a) => {
      var y;
      const u = (y = a.onRender) == null ? void 0 : y.call(this, n);
      u && (u.style && Object.assign(i, u.style), u.className && d.push(u.className), u.children && f.push(u.children));
    }), /* @__PURE__ */ q(
      "div",
      {
        id: b(this, Fn),
        className: B(d),
        style: i,
        ref: this.ref,
        tabIndex: -1,
        children: [
          n && U(this, gl, ag).call(this, n),
          n && U(this, vl, _g).call(this, n),
          n && U(this, yl, fg).call(this, n),
          n && U(this, bl, ug).call(this, n)
        ]
      }
    );
  }
}, fn = new WeakMap(), Fn = new WeakMap(), $t = new WeakMap(), qe = new WeakMap(), kt = new WeakMap(), xe = new WeakMap(), je = new WeakMap(), Xe = new WeakMap(), Bn = new WeakMap(), Br = new WeakMap(), jr = new WeakMap(), _t = new WeakMap(), jn = new WeakMap(), Vn = new WeakMap(), gl = new WeakSet(), ag = function(n) {
  const { header: o, colsInfo: s, headerHeight: r, scrollLeft: l } = n;
  if (!o)
    return null;
  if (o === !0)
    return /* @__PURE__ */ q(
      U$,
      {
        scrollLeft: l,
        height: r,
        onRenderCell: b(this, zr),
        onRenderRow: b(this, $l),
        ...s
      }
    );
  const c = Array.isArray(o) ? o : [o];
  return /* @__PURE__ */ q(
    gc,
    {
      className: "dtable-header",
      style: { height: r },
      renders: c,
      generateArgs: [n],
      generatorThis: this
    }
  );
}, vl = new WeakSet(), _g = function(n) {
  const { headerHeight: o, rowsHeight: s, visibleRows: r, rowHeight: l, colsInfo: c, scrollLeft: _, scrollTop: h } = n;
  return /* @__PURE__ */ q(
    F$,
    {
      top: o,
      height: s,
      rows: r,
      rowHeight: l,
      scrollLeft: _,
      scrollTop: h,
      onRenderCell: b(this, zr),
      onRenderRow: b(this, wl),
      ...c
    }
  );
}, yl = new WeakSet(), fg = function(n) {
  const { footer: o } = n;
  if (!o)
    return null;
  const s = typeof o == "function" ? o.call(this, n) : Array.isArray(o) ? o : [o];
  return /* @__PURE__ */ q(
    gc,
    {
      className: "dtable-footer",
      style: { height: n.footerHeight, top: n.rowsHeight + n.headerHeight },
      renders: s,
      generateArgs: [n],
      generatorThis: this,
      generators: n.footerGenerators
    }
  );
}, bl = new WeakSet(), ug = function(n) {
  const o = [], { scrollLeft: s, colsInfo: r, scrollTop: l, rowsHeight: c, rowsHeightTotal: _, footerHeight: h } = n, { scrollColsWidth: i, scrollWidth: d } = r, { scrollbarSize: f = 12, horzScrollbarPos: a } = this.options;
  return i > d && o.push(
    /* @__PURE__ */ q(
      nu,
      {
        type: "horz",
        scrollPos: s,
        scrollSize: i,
        clientSize: d,
        onScroll: b(this, Yr),
        left: r.fixedLeftWidth,
        bottom: (a === "inside" ? 0 : -f) + h,
        size: f,
        wheelContainer: this.ref
      },
      "horz"
    )
  ), _ > c && o.push(
    /* @__PURE__ */ q(
      nu,
      {
        type: "vert",
        scrollPos: l,
        scrollSize: _,
        clientSize: c,
        onScroll: b(this, Yr),
        right: 0,
        size: f,
        top: n.headerHeight,
        wheelContainer: this.ref
      },
      "vert"
    )
  ), o.length ? o : null;
}, Vr = new WeakSet(), Nc = function() {
  var n;
  H(this, $t, !1), (n = this.options.afterRender) == null || n.call(this), b(this, xe).forEach((o) => {
    var s;
    return (s = o.afterRender) == null ? void 0 : s.call(this);
  });
}, wl = new WeakMap(), $l = new WeakMap(), zr = new WeakMap(), Yr = new WeakMap(), kl = new WeakMap(), xl = new WeakMap(), Sl = new WeakSet(), hg = function() {
  if (b(this, qe))
    return !1;
  const o = { ...ru(), ...b(this, kt).reduce((s, r) => {
    const { defaultOptions: l } = r;
    return l && Object.assign(s, l), s;
  }, {}), ...this.props };
  return H(this, qe, o), H(this, xe, b(this, kt).reduce((s, r) => {
    const { when: l, options: c } = r;
    return (!l || l(o)) && (s.push(r), c && Object.assign(o, typeof c == "function" ? c.call(this, o) : c)), s;
  }, [])), H(this, jr, [this.options.i18n, ...this.plugins.map((s) => s.i18n)].filter(Boolean)), !0;
}, Cl = new WeakSet(), dg = function() {
  var Y, Q;
  const { plugins: n } = this;
  let o = b(this, qe);
  const s = {
    flex: /* @__PURE__ */ q("div", { style: "flex:auto" }),
    divider: /* @__PURE__ */ q("div", { style: "width:1px;margin:var(--space);background:var(--color-border);height:50%" })
  };
  n.forEach((I) => {
    var te;
    const X = (te = I.beforeLayout) == null ? void 0 : te.call(this, o);
    X && (o = { ...o, ...X }), Object.assign(s, I.footer);
  });
  const { defaultColWidth: r, minColWidth: l, maxColWidth: c } = o, _ = [], h = [], i = [], d = {}, f = [], a = [];
  let u = 0, y = 0, p = 0;
  o.cols.forEach((I) => {
    if (I.hidden)
      return;
    const {
      name: X,
      type: te = "",
      fixed: Z = !1,
      flex: G = !1,
      width: ne = r,
      minWidth: we = l,
      maxWidth: Se = c,
      ...Jr
    } = I, ee = {
      name: X,
      type: te,
      setting: {
        name: X,
        type: te,
        fixed: Z,
        flex: G,
        width: ne,
        minWidth: we,
        maxWidth: Se,
        ...Jr
      },
      flex: Z ? 0 : G === !0 ? 1 : typeof G == "number" ? G : 0,
      left: 0,
      width: ou(ne, we, Se),
      realWidth: 0,
      visible: !0,
      index: f.length
    };
    n.forEach((Qr) => {
      var no, ei;
      const tn = (no = Qr.colTypes) == null ? void 0 : no[te];
      if (tn) {
        const ti = typeof tn == "function" ? tn(ee) : tn;
        ti && Object.assign(ee.setting, ti);
      }
      (ei = Qr.onAddCol) == null || ei.call(this, ee);
    }), ee.width = ou(ee.setting.width ?? ee.width, ee.setting.minWidth ?? we, ee.setting.maxWidth ?? Se), ee.realWidth = ee.realWidth || ee.width, Z === "left" ? (ee.left = u, u += ee.width, _.push(ee)) : Z === "right" ? (ee.left = y, y += ee.width, h.push(ee)) : (ee.left = p, p += ee.width, i.push(ee)), ee.flex && a.push(ee), f.push(ee), d[ee.name] = ee;
  });
  let m = o.width, g = 0;
  const $ = u + p + y;
  if (typeof m == "function" && (m = m.call(this, $)), m === "auto")
    g = $;
  else if (m === "100%") {
    const { parent: I } = this;
    if (I)
      g = I.clientWidth;
    else {
      g = 0, H(this, $t, !0);
      return;
    }
  } else
    g = m ?? 0;
  const { data: w, rowKey: S = "id", rowHeight: C } = o, A = [], v = (I, X, te) => {
    var G, ne;
    const Z = { data: te ?? { [S]: I }, id: I, index: A.length, top: 0 };
    if (te || (Z.lazy = !0), A.push(Z), ((G = o.onAddRow) == null ? void 0 : G.call(this, Z, X)) !== !1) {
      for (const we of n)
        if (((ne = we.onAddRow) == null ? void 0 : ne.call(this, Z, X)) === !1)
          return;
    }
  };
  if (typeof w == "number")
    for (let I = 0; I < w; I++)
      v(`${I}`, I);
  else
    Array.isArray(w) && w.forEach((I, X) => {
      typeof I == "object" ? v(`${I[S] ?? ""}`, X, I) : v(`${I ?? ""}`, X);
    });
  let k = A;
  const L = {};
  if (o.onAddRows) {
    const I = o.onAddRows.call(this, k);
    I && (k = I);
  }
  for (const I of n) {
    const X = (Y = I.onAddRows) == null ? void 0 : Y.call(this, k);
    X && (k = X);
  }
  k.forEach((I, X) => {
    L[I.id] = I, I.index = X, I.top = I.index * C;
  });
  const { header: j, footer: F } = o, D = j ? o.headerHeight || C : 0, E = F ? o.footerHeight || C : 0;
  let x = o.height, N = 0;
  const M = k.length * C, P = D + E + M;
  if (typeof x == "function" && (x = x.call(this, P)), x === "auto")
    N = P;
  else if (typeof x == "object")
    N = Math.min(x.max, Math.max(x.min, P));
  else if (x === "100%") {
    const { parent: I } = this;
    if (I)
      N = I.clientHeight;
    else {
      N = 0, H(this, $t, !0);
      return;
    }
  } else
    N = x;
  const O = N - D - E, W = g - u - y, z = {
    options: o,
    allRows: A,
    width: g,
    height: N,
    rows: k,
    rowsMap: L,
    rowHeight: C,
    rowsHeight: O,
    rowsHeightTotal: M,
    header: j,
    footer: F,
    footerGenerators: s,
    headerHeight: D,
    footerHeight: E,
    colsMap: d,
    colsList: f,
    flexCols: a,
    colsInfo: {
      fixedLeftCols: _,
      fixedRightCols: h,
      scrollCols: i,
      fixedLeftWidth: u,
      scrollWidth: W,
      scrollColsWidth: p,
      fixedRightWidth: y
    }
  }, V = (Q = o.onLayout) == null ? void 0 : Q.call(this, z);
  V && Object.assign(z, V), n.forEach((I) => {
    if (I.onLayout) {
      const X = I.onLayout.call(this, z);
      X && Object.assign(z, X);
    }
  }), H(this, je, z);
}, El = new WeakSet(), pg = function() {
  (U(this, Sl, hg).call(this) || !b(this, je)) && U(this, Cl, dg).call(this);
  const { layout: n } = this;
  if (!n)
    return;
  let { scrollLeft: o } = this.state;
  const { flexCols: s, colsInfo: { scrollCols: r, scrollWidth: l, scrollColsWidth: c } } = n;
  if (s.length) {
    const $ = l - c;
    if ($ > 0) {
      const w = s.reduce((C, A) => C + A.flex, 0);
      let S = 0;
      s.forEach((C) => {
        const A = Math.min($ - S, Math.ceil($ * (C.flex / w)));
        C.realWidth = A + C.width, S += C.realWidth;
      });
    } else
      s.forEach((w) => {
        w.realWidth = w.width;
      });
  }
  o = Math.min(Math.max(0, c - l), o);
  let _ = 0;
  r.forEach(($) => {
    $.left = _, _ += $.realWidth, $.visible = $.left + $.realWidth >= o && $.left <= o + l;
  });
  const { rowsHeightTotal: h, rowsHeight: i, rows: d, rowHeight: f } = n, a = Math.min(Math.max(0, h - i), this.state.scrollTop), u = Math.floor(a / f), y = a + i, p = Math.min(d.length, Math.ceil(y / f)), m = [], { rowDataGetter: g } = this.options;
  for (let $ = u; $ < p; $++) {
    const w = d[$];
    w.lazy && g && (w.data = g([w.id])[0], w.lazy = !1), m.push(w);
  }
  return n.visibleRows = m, n.scrollTop = a, n.scrollLeft = o, n;
}, R(_i, "addPlugin", sg), R(_i, "removePlugin", lg), _i);
function iu(e, t) {
  t !== void 0 ? e.data.hoverCol = t : t = e.data.hoverCol;
  const { current: n } = e.ref;
  if (!n)
    return;
  const o = "dtable-col-hover";
  n.querySelectorAll(`.${o}`).forEach((s) => s.classList.remove(o)), typeof t == "string" && t.length && n.querySelectorAll(`.dtable-cell[data-col="${t}"]`).forEach((s) => s.classList.add(o));
}
const z$ = {
  name: "col-hover",
  defaultOptions: {
    colHover: !1
  },
  when: (e) => !!e.colHover,
  events: {
    mouseover(e) {
      var s;
      const { colHover: t } = this.options;
      if (!t)
        return;
      const n = (s = e.target) == null ? void 0 : s.closest(".dtable-cell");
      if (!n || t === "header" && !n.closest(".dtable-header"))
        return;
      const o = (n == null ? void 0 : n.getAttribute("data-col")) ?? !1;
      iu(this, o);
    },
    mouseleave() {
      iu(this, !1);
    }
  }
}, Y$ = to(z$, { buildIn: !0 });
function G$(e, t) {
  var l, c;
  typeof e == "boolean" && (t = e, e = void 0);
  const n = this.state.checkedRows, o = {}, { canRowCheckable: s } = this.options, r = (_, h) => {
    s && !s.call(this, _) || !!n[_] === h || (h ? n[_] = !0 : delete n[_], o[_] = h);
  };
  if (e === void 0 ? (t === void 0 && (t = !mg.call(this)), (l = this.layout) == null || l.allRows.forEach(({ id: _ }) => {
    r(_, !!t);
  })) : (Array.isArray(e) || (e = [e]), e.forEach((_) => {
    r(_, t ?? !n[_]);
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
function q$(e) {
  return this.state.checkedRows[e] ?? !1;
}
function mg() {
  var n, o;
  const e = this.getChecks().length, { canRowCheckable: t } = this.options;
  return t ? e === ((n = this.layout) == null ? void 0 : n.allRows.reduce((s, r) => s + (t.call(this, r.id) ? 1 : 0), 0)) : e === ((o = this.layout) == null ? void 0 : o.allRows.length);
}
function X$() {
  return Object.keys(this.state.checkedRows);
}
const K$ = {
  name: "checkable",
  defaultOptions: { checkable: !0 },
  when: (e) => !!e.checkable,
  state() {
    return { checkedRows: {} };
  },
  methods: {
    toggleCheckRows: G$,
    isRowChecked: q$,
    isAllRowChecked: mg,
    getChecks: X$
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
      const e = this.isAllRowChecked();
      return [
        /* @__PURE__ */ q("div", { style: { padding: "0 calc(3 * var(--space))", display: "flex", alignItems: "center" }, onClick: () => this.toggleCheckRows(), children: /* @__PURE__ */ q("input", { type: "checkbox", checked: e }) })
      ];
    },
    checkedInfo(e, t) {
      const n = this.getChecks().length, o = [];
      return n && o.push(this.i18n("checkedCountInfo", { selected: n })), o.push(this.i18n("totalCountInfo", { total: t.allRows.length })), [
        /* @__PURE__ */ q("div", { children: o.join(", ") })
      ];
    }
  },
  onRenderCell(e, { row: t, col: n }) {
    var c;
    const { id: o } = t, { canRowCheckable: s } = this.options;
    if (s && !s.call(this, o))
      return e;
    const { checkbox: r } = n.setting;
    if (typeof r == "function" ? r.call(this, o) : r) {
      const _ = this.isRowChecked(o), h = ((c = this.options.checkboxRender) == null ? void 0 : c.call(this, _, o)) ?? /* @__PURE__ */ q("input", { type: "checkbox", checked: _ });
      e.unshift(h), e.push({ className: "has-checkbox" });
    }
    return e;
  },
  onRenderHeaderCell(e, { row: t, col: n }) {
    var l;
    const { id: o } = t, { checkbox: s } = n.setting;
    if (typeof s == "function" ? s.call(this, o) : s) {
      const c = this.isAllRowChecked(), _ = ((l = this.options.checkboxRender) == null ? void 0 : l.call(this, c, o)) ?? /* @__PURE__ */ q("input", { type: "checkbox", checked: c });
      e.unshift(_), e.push({ className: "has-checkbox" });
    }
    return e;
  },
  onRenderRow({ props: e, row: t }) {
    if (this.isRowChecked(t.id))
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
}, Z$ = to(K$);
var gg = /* @__PURE__ */ ((e) => (e.unknown = "", e.collapsed = "collapsed", e.expanded = "expanded", e.hidden = "hidden", e.normal = "normal", e))(gg || {});
function Rc(e) {
  const t = this.data.nestedMap.get(e);
  if (!t || t.state !== "")
    return t ?? { state: "normal", level: -1 };
  if (!t.parent && !t.children)
    return t.state = "normal", t;
  const n = this.state.collapsedRows, o = t.children && n && n[e];
  let s = !1, { parent: r } = t;
  for (; r; ) {
    const l = Rc.call(this, r);
    if (l.state !== "expanded") {
      s = !0;
      break;
    }
    r = l.parent;
  }
  return t.state = s ? "hidden" : o ? "collapsed" : t.children ? "expanded" : "normal", t.level = t.parent ? Rc.call(this, t.parent).level + 1 : 0, t;
}
function J$(e, t) {
  let n = this.state.collapsedRows ?? {};
  const { nestedMap: o } = this.data;
  if (e === "HEADER")
    if (t === void 0 && (t = !vg.call(this)), t) {
      const s = o.entries();
      for (const [r, l] of s)
        l.state === "expanded" && (n[r] = !0);
    } else
      n = {};
  else {
    const s = Array.isArray(e) ? e : [e];
    t === void 0 && (t = !n[s[0]]), s.forEach((r) => {
      const l = o.get(r);
      t && (l != null && l.children) ? n[r] = !0 : delete n[r];
    });
  }
  this.update({
    dirtyType: "layout",
    state: { collapsedRows: { ...n } }
  }, () => {
    var s;
    (s = this.options.onNestedChange) == null || s.call(this);
  });
}
function vg() {
  const e = this.data.nestedMap.values();
  for (const t of e)
    if (t.state === "expanded")
      return !1;
  return !0;
}
function yg(e, t = 0, n, o = 0) {
  var s;
  n || (n = [...e.keys()]);
  for (const r of n) {
    const l = e.get(r);
    l && (l.level === o && (l.order = t++), (s = l.children) != null && s.length && (t = yg(e, t, l.children, o + 1)));
  }
  return t;
}
function bg(e, t, n, o) {
  const s = e.getNestedRowInfo(t);
  return !s || s.state === "" || !s.children || s.children.forEach((r) => {
    o[r] = n, bg(e, r, n, o);
  }), s;
}
function wg(e, t, n, o, s) {
  var c;
  const r = e.getNestedRowInfo(t);
  if (!r || r.state === "")
    return;
  ((c = r.children) == null ? void 0 : c.every((_) => {
    const h = !!(o[_] !== void 0 ? o[_] : s[_]);
    return n === h;
  })) && (o[t] = n), r.parent && wg(e, r.parent, n, o, s);
}
const Q$ = {
  name: "nested",
  defaultOptions: {
    nested: !0,
    nestedParentKey: "parent",
    asParentKey: "asParent",
    nestedIndent: 20,
    canSortTo(e, t) {
      const { nestedMap: n } = this.data, o = n.get(e.id), s = n.get(t.id);
      return (o == null ? void 0 : o.parent) === (s == null ? void 0 : s.parent);
    },
    beforeCheckRows(e, t, n) {
      if (!this.options.checkable || !(e != null && e.length))
        return;
      const o = {};
      return Object.entries(t).forEach(([s, r]) => {
        const l = bg(this, s, r, o);
        l != null && l.parent && wg(this, l.parent, r, o, n);
      }), o;
    }
  },
  when: (e) => !!e.nested,
  data() {
    return { nestedMap: /* @__PURE__ */ new Map() };
  },
  methods: {
    toggleRow: J$,
    isAllCollapsed: vg,
    getNestedRowInfo: Rc
  },
  beforeLayout() {
    this.data.nestedMap.clear();
  },
  onAddRow(e) {
    var s, r;
    const { nestedMap: t } = this.data, n = (s = e.data) == null ? void 0 : s[this.options.nestedParentKey ?? "parent"], o = t.get(e.id) ?? {
      state: "",
      level: 0
    };
    if (o.parent = n, (r = e.data) != null && r[this.options.asParentKey ?? "asParent"] && (o.children = []), t.set(e.id, o), n) {
      let l = t.get(n);
      l || (l = {
        state: "",
        level: 0
      }, t.set(n, l)), l.children || (l.children = []), l.children.push(e.id);
    }
  },
  onAddRows(e) {
    return e = e.filter(
      (t) => this.getNestedRowInfo(t.id).state !== "hidden"
      /* hidden */
    ), yg(this.data.nestedMap), e.sort((t, n) => {
      const o = this.getNestedRowInfo(t.id), s = this.getNestedRowInfo(n.id), r = (o.order ?? 0) - (s.order ?? 0);
      return r === 0 ? t.index - n.index : r;
    }), e;
  },
  onRenderCell(e, { col: t, row: n }) {
    var c;
    const { id: o, data: s } = n, { nestedToggle: r } = t.setting, l = this.getNestedRowInfo(o);
    if (r && (l.children || l.parent) && e.unshift(((c = this.options.onRenderNestedToggle) == null ? void 0 : c.call(this, l, o, t, s)) ?? /* @__PURE__ */ q("a", { role: "button", className: `dtable-nested-toggle state${l.children ? "" : " is-no-child"}`, children: /* @__PURE__ */ q("span", { className: "toggle-icon" }) })), l.level) {
      let { nestedIndent: _ = r } = t.setting;
      _ && (_ === !0 && (_ = this.options.nestedIndent ?? 12), e.unshift(/* @__PURE__ */ q("div", { className: "dtable-nested-indent", style: { width: _ * l.level + "px" } })));
    }
    return e;
  },
  onRenderHeaderCell(e, { row: t, col: n }) {
    var s;
    const { id: o } = t;
    return n.setting.nestedToggle && e.unshift(((s = this.options.onRenderNestedToggle) == null ? void 0 : s.call(this, void 0, o, n, void 0)) ?? /* @__PURE__ */ q("a", { type: "button", className: "dtable-nested-toggle state", children: /* @__PURE__ */ q("span", { className: "toggle-icon" }) })), e;
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
}, ek = to(Q$);
const tk = {
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
        const { linkTemplate: o = "", linkProps: s } = t.setting, r = Le(o, n.data);
        return e[0] = /* @__PURE__ */ q("a", { href: r, ...s, children: e[0] }), e;
      }
    },
    avatar: {
      onRenderCell(e, { col: t, row: n }) {
        const { data: o } = n, { avatarWithName: s, avatarClass: r = "size-xs circle", avatarKey: l = `${t.name}Avatar` } = t.setting, c = /* @__PURE__ */ q("div", { className: `avatar ${r} flex-none`, children: /* @__PURE__ */ q("img", { src: o ? o[l] : "" }) });
        return s ? e.unshift(c) : e[0] = c, e;
      }
    },
    circleProgress: {
      align: "center",
      onRenderCell(e, { col: t }) {
        const { circleSize: n = 24, circleBorderSize: o = 1, circleBgColor: s = "var(--color-border)", circleColor: r = "var(--color-success-500)" } = t.setting, l = (n - o) / 2, c = n / 2, _ = e[0];
        return e[0] = /* @__PURE__ */ q("svg", { width: n, height: n, children: [
          /* @__PURE__ */ q("circle", { cx: c, cy: c, r: l, "stroke-width": o, stroke: s, fill: "transparent" }),
          /* @__PURE__ */ q("circle", { cx: c, cy: c, r: l, "stroke-width": o, stroke: r, fill: "transparent", "stroke-linecap": "round", "stroke-dasharray": Math.PI * l * 2, "stroke-dashoffset": Math.PI * l * 2 * (100 - _) / 100, style: { transformOrigin: "center", transform: "rotate(-90deg)" } }),
          /* @__PURE__ */ q("text", { x: c, y: c + o, "dominant-baseline": "middle", "text-anchor": "middle", style: { fontSize: `${l}px` }, children: Math.round(_) })
        ] }), e;
      }
    },
    actionButtons: {
      onRenderCell(e, { col: t, row: n }) {
        var c;
        const o = (c = n.data) == null ? void 0 : c[t.name];
        if (!o)
          return e;
        const { actionBtnTemplate: s = '<button type="button" data-action="{action}" title="{title}" class="{className}"><i class="icon icon-{icon}"></i></button>', actionBtnData: r = {}, actionBtnClass: l = "btn text-primary square size-sm ghost" } = t.setting;
        return [{
          html: o.map((_) => {
            typeof _ == "string" && (_ = { action: _ });
            const h = r[_.action];
            return h && (_ = { className: l, ...h, ..._ }), Le(s, _);
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
        const { format: o, type: s } = n, r = e[0];
        return typeof o == "function" ? e[0] = s === "html" ? { html: o(r) } : o(r) : s === "datetime" ? e[0] = Mc(r, o) : s === "html" ? e[0] = { html: Le(o, r) } : e[0] = Le(o, r), e;
      }
    }
  }
}, nk = to(tk, { buildIn: !0 }), ok = {
  name: "sort-type",
  onRenderHeaderCell(e, { col: t }) {
    const { sortType: n } = t.setting;
    if (n) {
      const { sortLink: o = this.options.sortLink, sortAttrs: s } = t.setting, r = n === !0 ? "none" : n;
      if (e.push(
        /* @__PURE__ */ q("div", { className: `dtable-sort dtable-sort-${r}` }),
        { outer: !0, attrs: { "data-sort": r } }
      ), o) {
        const l = typeof o == "function" ? o.call(this, t, r) : o;
        e.push(
          { tagName: "a", attrs: { href: l, ...s } }
        );
      }
    }
    return e;
  }
}, rk = to(ok, { buildIn: !0 }), ik = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  NestedRowState: gg,
  checkable: Z$,
  colHover: Y$,
  nested: ek,
  rich: nk,
  sortType: rk
}, Symbol.toStringTag, { value: "Module" }));
class io extends Ne {
}
R(io, "NAME", "dtable"), R(io, "Component", V$), R(io, "definePlugin", to), R(io, "removePlugin", lg), R(io, "plugins", ik);
var Pe;
class uo extends Ue {
  constructor() {
    super(...arguments);
    T(this, Pe, void 0);
  }
  init() {
    const { element: n } = this;
    n !== document.body && !n.hasAttribute("data-toggle") && n.setAttribute("data-toggle", "tab");
  }
  showTarget() {
    const n = this.element.getAttribute("href") || this.element.dataset.target || this.element.dataset.tab;
    n != null && n.startsWith("#") && H(this, Pe, document.querySelector(n)), this.addActive(this.element.closest(`.${this.constructor.NAV_CLASS}`), this.element.parentElement), b(this, Pe) && (this.addActive(b(this, Pe).parentElement, b(this, Pe)), b(this, Pe).dispatchEvent(new CustomEvent("show.zui3.tab")));
  }
  show() {
    const n = this.element.getAttribute("href") || this.element.dataset.target || this.element.dataset.tab;
    n != null && n.startsWith("#") && H(this, Pe, document.querySelector(n)), b(this, Pe) && (this.addActive(b(this, Pe).parentElement, b(this, Pe)), this.addActive(this.element.closest(`.${this.constructor.NAV_CLASS}`), this.element.parentElement));
  }
  addActive(n, o) {
    const s = n.children;
    Array.from(s).forEach((l) => {
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
Pe = new WeakMap(), R(uo, "NAME", "NavTabs"), R(uo, "NAV_CLASS", "nav-tabs"), R(uo, "EVENTS", !0), R(uo, "TOGGLE_SELECTOR", '[data-toggle="tab"]');
document.addEventListener("click", (e) => {
  e.target instanceof HTMLElement && (e.target.dataset.toggle === "tab" || e.target.getAttribute("data-tab")) && (e.preventDefault(), new uo(e.target).showTarget());
});
export {
  Va as ActionMenu,
  Ya as ActionMenuNested,
  C_ as Avatar,
  E_ as BtnGroup,
  Ja as Button,
  Te as ContextMenu,
  io as DTable,
  Ke as Datepicker,
  Ee as Dropdown,
  Pc as EventBus,
  Qa as Menu,
  u_ as Messager,
  Me as Modal,
  Oo as ModalTrigger,
  _f as Nav,
  uo as NavTabs,
  hf as Pager,
  bf as Picker,
  v_ as ProgressCircle,
  st as TIME_DAY,
  Ze as Timepicker,
  Df as Toolbar,
  Je as Tooltip,
  Vf as VirtualGrid,
  Pg as addI18nMap,
  pk as browser,
  uf as calculateTimestamp,
  ck as convertBytes,
  De as createDate,
  lk as formatBytes,
  Mc as formatDate,
  Sk as formatDateSpan,
  Le as formatString,
  Rg as getLangCode,
  Ck as getTimeBeforeDesc,
  Gr as i18n,
  xk as isDBY,
  nc as isObject,
  Xr as isSameDay,
  U0 as isSameMonth,
  bk as isSameWeek,
  ff as isSameYear,
  wk as isToday,
  kk as isTomorrow,
  $k as isYesterday,
  mc as mergeDeep,
  pc as nativeEvents,
  Og as setLangCode,
  Mv as store
};
