var kv = Object.defineProperty;
var xv = (e, t, n) => t in e ? kv(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var N = (e, t, n) => (xv(e, typeof t != "symbol" ? t + "" : t, n), n), aa = (e, t, n) => {
  if (!t.has(e))
    throw TypeError("Cannot " + n);
};
var b = (e, t, n) => (aa(e, t, "read from private field"), n ? n.call(e) : t.get(e)), O = (e, t, n) => {
  if (t.has(e))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(e) : t.set(e, n);
}, H = (e, t, n, o) => (aa(e, t, "write to private field"), o ? o.call(e, n) : t.set(e, n), n), Ic = (e, t, n, o) => ({
  set _(s) {
    H(e, t, s, n);
  },
  get _() {
    return b(e, t, o);
  }
}), z = (e, t, n) => (aa(e, t, "access private method"), n);
var Wl, re, mu, vu, Po, Uc, qi = {}, gu = [], Sv = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function Nt(e, t) {
  for (var n in t)
    e[n] = t[n];
  return e;
}
function yu(e) {
  var t = e.parentNode;
  t && t.removeChild(e);
}
function bu(e, t, n) {
  var o, s, r, l = {};
  for (r in t)
    r == "key" ? o = t[r] : r == "ref" ? s = t[r] : l[r] = t[r];
  if (arguments.length > 2 && (l.children = arguments.length > 3 ? Wl.call(arguments, 2) : n), typeof e == "function" && e.defaultProps != null)
    for (r in e.defaultProps)
      l[r] === void 0 && (l[r] = e.defaultProps[r]);
  return Ai(e, l, o, s, null);
}
function Ai(e, t, n, o, s) {
  var r = { type: e, props: t, key: n, ref: o, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: s ?? ++mu };
  return s == null && re.vnode != null && re.vnode(r), r;
}
function Cv() {
  return { current: null };
}
function Il(e) {
  return e.children;
}
function Mi(e, t) {
  this.props = e, this.context = t;
}
function mr(e, t) {
  if (t == null)
    return e.__ ? mr(e.__, e.__.__k.indexOf(e) + 1) : null;
  for (var n; t < e.__k.length; t++)
    if ((n = e.__k[t]) != null && n.__e != null)
      return n.__e;
  return typeof e.type == "function" ? mr(e) : null;
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
function Bc(e) {
  (!e.__d && (e.__d = !0) && Po.push(e) && !Gi.__r++ || Uc !== re.debounceRendering) && ((Uc = re.debounceRendering) || setTimeout)(Gi);
}
function Gi() {
  for (var e; Gi.__r = Po.length; )
    e = Po.sort(function(t, n) {
      return t.__v.__b - n.__v.__b;
    }), Po = [], e.some(function(t) {
      var n, o, s, r, l, a;
      t.__d && (l = (r = (n = t).__v).__e, (a = n.__P) && (o = [], (s = Nt({}, r)).__v = r.__v + 1, ja(a, r, s, n.__n, a.ownerSVGElement !== void 0, r.__h != null ? [l] : null, o, l ?? mr(r), r.__h), Su(o, r), r.__e != l && wu(r)));
    });
}
function $u(e, t, n, o, s, r, l, a, _, d) {
  var i, h, f, c, u, y, p, m = o && o.__k || gu, v = m.length;
  for (n.__k = [], i = 0; i < t.length; i++)
    if ((c = n.__k[i] = (c = t[i]) == null || typeof c == "boolean" ? null : typeof c == "string" || typeof c == "number" || typeof c == "bigint" ? Ai(null, c, null, null, c) : Array.isArray(c) ? Ai(Il, { children: c }, null, null, null) : c.__b > 0 ? Ai(c.type, c.props, c.key, c.ref ? c.ref : null, c.__v) : c) != null) {
      if (c.__ = n, c.__b = n.__b + 1, (f = m[i]) === null || f && c.key == f.key && c.type === f.type)
        m[i] = void 0;
      else
        for (h = 0; h < v; h++) {
          if ((f = m[h]) && c.key == f.key && c.type === f.type) {
            m[h] = void 0;
            break;
          }
          f = null;
        }
      ja(e, c, f = f || qi, s, r, l, a, _, d), u = c.__e, (h = c.ref) && f.ref != h && (p || (p = []), f.ref && p.push(f.ref, null, c), p.push(h, c.__c || u, c)), u != null ? (y == null && (y = u), typeof c.type == "function" && c.__k === f.__k ? c.__d = _ = ku(c, _, e) : _ = xu(e, c, f, m, u, _), typeof n.type == "function" && (n.__d = _)) : _ && f.__e == _ && _.parentNode != e && (_ = mr(f));
    }
  for (n.__e = y, i = v; i--; )
    m[i] != null && Eu(m[i], m[i]);
  if (p)
    for (i = 0; i < p.length; i++)
      Cu(p[i], p[++i], p[++i]);
}
function ku(e, t, n) {
  for (var o, s = e.__k, r = 0; s && r < s.length; r++)
    (o = s[r]) && (o.__ = e, t = typeof o.type == "function" ? ku(o, t, n) : xu(n, o, o, s, o.__e, t));
  return t;
}
function xu(e, t, n, o, s, r) {
  var l, a, _;
  if (t.__d !== void 0)
    l = t.__d, t.__d = void 0;
  else if (n == null || s != r || s.parentNode == null)
    e:
      if (r == null || r.parentNode !== e)
        e.appendChild(s), l = null;
      else {
        for (a = r, _ = 0; (a = a.nextSibling) && _ < o.length; _ += 2)
          if (a == s)
            break e;
        e.insertBefore(s, r), l = r;
      }
  return l !== void 0 ? l : s.nextSibling;
}
function Ev(e, t, n, o, s) {
  var r;
  for (r in n)
    r === "children" || r === "key" || r in t || Xi(e, r, null, n[r], o);
  for (r in t)
    s && typeof t[r] != "function" || r === "children" || r === "key" || r === "value" || r === "checked" || n[r] === t[r] || Xi(e, r, t[r], n[r], o);
}
function Fc(e, t, n) {
  t[0] === "-" ? e.setProperty(t, n) : e[t] = n == null ? "" : typeof n != "number" || Sv.test(t) ? n : n + "px";
}
function Xi(e, t, n, o, s) {
  var r;
  e:
    if (t === "style")
      if (typeof n == "string")
        e.style.cssText = n;
      else {
        if (typeof o == "string" && (e.style.cssText = o = ""), o)
          for (t in o)
            n && t in n || Fc(e.style, t, "");
        if (n)
          for (t in n)
            o && n[t] === o[t] || Fc(e.style, t, n[t]);
      }
    else if (t[0] === "o" && t[1] === "n")
      r = t !== (t = t.replace(/Capture$/, "")), t = t.toLowerCase() in e ? t.toLowerCase().slice(2) : t.slice(2), e.l || (e.l = {}), e.l[t + r] = n, n ? o || e.addEventListener(t, r ? Vc : jc, r) : e.removeEventListener(t, r ? Vc : jc, r);
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
function jc(e) {
  this.l[e.type + !1](re.event ? re.event(e) : e);
}
function Vc(e) {
  this.l[e.type + !0](re.event ? re.event(e) : e);
}
function ja(e, t, n, o, s, r, l, a, _) {
  var d, i, h, f, c, u, y, p, m, v, $, w, C, x, E, g = t.type;
  if (t.constructor !== void 0)
    return null;
  n.__h != null && (_ = n.__h, a = t.__e = n.__e, t.__h = null, r = [a]), (d = re.__b) && d(t);
  try {
    e:
      if (typeof g == "function") {
        if (p = t.props, m = (d = g.contextType) && o[d.__c], v = d ? m ? m.props.value : d.__ : o, n.__c ? y = (i = t.__c = n.__c).__ = i.__E : ("prototype" in g && g.prototype.render ? t.__c = i = new g(p, v) : (t.__c = i = new Mi(p, v), i.constructor = g, i.render = Mv), m && m.sub(i), i.props = p, i.state || (i.state = {}), i.context = v, i.__n = o, h = i.__d = !0, i.__h = [], i._sb = []), i.__s == null && (i.__s = i.state), g.getDerivedStateFromProps != null && (i.__s == i.state && (i.__s = Nt({}, i.__s)), Nt(i.__s, g.getDerivedStateFromProps(p, i.__s))), f = i.props, c = i.state, h)
          g.getDerivedStateFromProps == null && i.componentWillMount != null && i.componentWillMount(), i.componentDidMount != null && i.__h.push(i.componentDidMount);
        else {
          if (g.getDerivedStateFromProps == null && p !== f && i.componentWillReceiveProps != null && i.componentWillReceiveProps(p, v), !i.__e && i.shouldComponentUpdate != null && i.shouldComponentUpdate(p, i.__s, v) === !1 || t.__v === n.__v) {
            for (i.props = p, i.state = i.__s, t.__v !== n.__v && (i.__d = !1), i.__v = t, t.__e = n.__e, t.__k = n.__k, t.__k.forEach(function(k) {
              k && (k.__ = t);
            }), $ = 0; $ < i._sb.length; $++)
              i.__h.push(i._sb[$]);
            i._sb = [], i.__h.length && l.push(i);
            break e;
          }
          i.componentWillUpdate != null && i.componentWillUpdate(p, i.__s, v), i.componentDidUpdate != null && i.__h.push(function() {
            i.componentDidUpdate(f, c, u);
          });
        }
        if (i.context = v, i.props = p, i.__v = t, i.__P = e, w = re.__r, C = 0, "prototype" in g && g.prototype.render) {
          for (i.state = i.__s, i.__d = !1, w && w(t), d = i.render(i.props, i.state, i.context), x = 0; x < i._sb.length; x++)
            i.__h.push(i._sb[x]);
          i._sb = [];
        } else
          do
            i.__d = !1, w && w(t), d = i.render(i.props, i.state, i.context), i.state = i.__s;
          while (i.__d && ++C < 25);
        i.state = i.__s, i.getChildContext != null && (o = Nt(Nt({}, o), i.getChildContext())), h || i.getSnapshotBeforeUpdate == null || (u = i.getSnapshotBeforeUpdate(f, c)), E = d != null && d.type === Il && d.key == null ? d.props.children : d, $u(e, Array.isArray(E) ? E : [E], t, n, o, s, r, l, a, _), i.base = t.__e, t.__h = null, i.__h.length && l.push(i), y && (i.__E = i.__ = null), i.__e = !1;
      } else
        r == null && t.__v === n.__v ? (t.__k = n.__k, t.__e = n.__e) : t.__e = Av(n.__e, t, n, o, s, r, l, _);
    (d = re.diffed) && d(t);
  } catch (k) {
    t.__v = null, (_ || r != null) && (t.__e = a, t.__h = !!_, r[r.indexOf(a)] = null), re.__e(k, t, n);
  }
}
function Su(e, t) {
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
function Av(e, t, n, o, s, r, l, a) {
  var _, d, i, h = n.props, f = t.props, c = t.type, u = 0;
  if (c === "svg" && (s = !0), r != null) {
    for (; u < r.length; u++)
      if ((_ = r[u]) && "setAttribute" in _ == !!c && (c ? _.localName === c : _.nodeType === 3)) {
        e = _, r[u] = null;
        break;
      }
  }
  if (e == null) {
    if (c === null)
      return document.createTextNode(f);
    e = s ? document.createElementNS("http://www.w3.org/2000/svg", c) : document.createElement(c, f.is && f), r = null, a = !1;
  }
  if (c === null)
    h === f || a && e.data === f || (e.data = f);
  else {
    if (r = r && Wl.call(e.childNodes), d = (h = n.props || qi).dangerouslySetInnerHTML, i = f.dangerouslySetInnerHTML, !a) {
      if (r != null)
        for (h = {}, u = 0; u < e.attributes.length; u++)
          h[e.attributes[u].name] = e.attributes[u].value;
      (i || d) && (i && (d && i.__html == d.__html || i.__html === e.innerHTML) || (e.innerHTML = i && i.__html || ""));
    }
    if (Ev(e, f, h, s, a), i)
      t.__k = [];
    else if (u = t.props.children, $u(e, Array.isArray(u) ? u : [u], t, n, o, s && c !== "foreignObject", r, l, r ? r[0] : n.__k && mr(n, 0), a), r != null)
      for (u = r.length; u--; )
        r[u] != null && yu(r[u]);
    a || ("value" in f && (u = f.value) !== void 0 && (u !== e.value || c === "progress" && !u || c === "option" && u !== h.value) && Xi(e, "value", u, h.value, !1), "checked" in f && (u = f.checked) !== void 0 && u !== e.checked && Xi(e, "checked", u, h.checked, !1));
  }
  return e;
}
function Cu(e, t, n) {
  try {
    typeof e == "function" ? e(t) : e.current = t;
  } catch (o) {
    re.__e(o, n);
  }
}
function Eu(e, t, n) {
  var o, s;
  if (re.unmount && re.unmount(e), (o = e.ref) && (o.current && o.current !== e.__e || Cu(o, null, t)), (o = e.__c) != null) {
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
      o[s] && Eu(o[s], t, n || typeof e.type != "function");
  n || e.__e == null || yu(e.__e), e.__ = e.__e = e.__d = void 0;
}
function Mv(e, t, n) {
  return this.constructor(e, n);
}
function Tv(e, t, n) {
  var o, s, r;
  re.__ && re.__(e, t), s = (o = typeof n == "function") ? null : n && n.__k || t.__k, r = [], ja(t, e = (!o && n || t).__k = bu(Il, null, [e]), s || qi, qi, t.ownerSVGElement !== void 0, !o && n ? [n] : s ? null : t.firstChild ? Wl.call(t.childNodes) : null, r, !o && n ? n : s ? s.__e : t.firstChild, o), Su(r, e);
}
Wl = gu.slice, re = { __e: function(e, t, n, o) {
  for (var s, r, l; t = t.__; )
    if ((s = t.__c) && !s.__)
      try {
        if ((r = s.constructor) && r.getDerivedStateFromError != null && (s.setState(r.getDerivedStateFromError(e)), l = s.__d), s.componentDidCatch != null && (s.componentDidCatch(e, o || {}), l = s.__d), l)
          return s.__E = s;
      } catch (a) {
        e = a;
      }
  throw e;
} }, mu = 0, vu = function(e) {
  return e != null && e.constructor === void 0;
}, Mi.prototype.setState = function(e, t) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = Nt({}, this.state), typeof e == "function" && (e = e(Nt({}, n), this.props)), e && Nt(n, e), e != null && this.__v && (t && this._sb.push(t), Bc(this));
}, Mi.prototype.forceUpdate = function(e) {
  this.__v && (this.__e = !0, e && this.__h.push(e), Bc(this));
}, Mi.prototype.render = Il, Po = [], Gi.__r = 0;
var Lv = 0;
function Au(e, t, n, o, s) {
  var r, l, a = {};
  for (l in t)
    l == "ref" ? r = t[l] : a[l] = t[l];
  var _ = { type: e, props: a, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: --Lv, __source: s, __self: o };
  if (typeof e == "function" && (r = e.defaultProps))
    for (l in r)
      a[l] === void 0 && (a[l] = r[l]);
  return re.vnode && re.vnode(_), _;
}
var mt;
class Dv {
  constructor(t = "") {
    O(this, mt, void 0);
    typeof t == "object" ? H(this, mt, t) : H(this, mt, document.appendChild(document.createComment(t)));
  }
  on(t, n, o) {
    b(this, mt).addEventListener(t, n, o);
  }
  once(t, n, o) {
    b(this, mt).addEventListener(t, n, { once: !0, ...o });
  }
  off(t, n, o) {
    b(this, mt).removeEventListener(t, n, o);
  }
  emit(t) {
    return b(this, mt).dispatchEvent(t), t;
  }
}
mt = new WeakMap();
const $a = /* @__PURE__ */ new Set([
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
class Va extends Dv {
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
    return typeof t == "string" && ($a.has(t) ? (t = new Event(t), Object.assign(t, { detail: n })) : t = new CustomEvent(t, { detail: n })), super.emit(Va.createEvent(t, n));
  }
  static createEvent(t, n) {
    return typeof t == "string" && ($a.has(t) ? (t = new Event(t), Object.assign(t, { detail: n })) : t = new CustomEvent(t, { detail: n })), t;
  }
}
var vt, Vr, un, To;
class zc extends Va {
  constructor(n = "", o) {
    super(n);
    O(this, un);
    O(this, vt, /* @__PURE__ */ new Map());
    O(this, Vr, void 0);
    H(this, Vr, o == null ? void 0 : o.customEventSuffix);
  }
  on(n, o, s) {
    n = z(this, un, To).call(this, n), super.on(n, o, s), b(this, vt).set(o, [n, s]);
  }
  off(n, o, s) {
    n = z(this, un, To).call(this, n), super.off(n, o, s), b(this, vt).delete(o);
  }
  once(n, o, s) {
    n = z(this, un, To).call(this, n);
    const r = (l) => {
      o(l), b(this, vt).delete(r);
    };
    super.once(n, r, s), b(this, vt).set(r, [n, s]);
  }
  emit(n, o) {
    return typeof n == "string" && (n = z(this, un, To).call(this, n)), super.emit(n, o);
  }
  offAll() {
    Array.from(b(this, vt).entries()).forEach(([n, [o, s]]) => {
      super.off(o, n, s);
    }), b(this, vt).clear();
  }
}
vt = new WeakMap(), Vr = new WeakMap(), un = new WeakSet(), To = function(n) {
  const o = b(this, Vr);
  return $a.has(n) || typeof o != "string" || n.endsWith(o) ? n : `${n}${o}`;
};
function Ov(e, t) {
  if (e == null)
    return [e, void 0];
  typeof t == "string" && (t = t.split("."));
  const n = t.join(".");
  let o = e;
  const s = [o];
  for (; typeof o == "object" && o !== null && t.length; ) {
    let r = t.shift(), l;
    const a = r.indexOf("[");
    if (a > 0 && a < r.length - 1 && r.endsWith("]") && (l = r.substring(a + 1, r.length - 1), r = r.substring(0, a)), o = o[r], s.push(o), l !== void 0)
      if (typeof o == "object" && o !== null)
        o instanceof Map ? o = o.get(l) : o = o[l], s.push(o);
      else
        throw new Error(`Cannot access property "${r}[${l}]", the full path is "${n}".`);
  }
  if (t.length)
    throw new Error(`Cannot access property with rest path "${t.join(".")}", the full path is "${n}".`);
  return s;
}
function Nv(e, t, n) {
  const o = Ov(e, t), s = o[o.length - 1];
  return s === void 0 ? n : s;
}
function ca(e) {
  return !!e && typeof e == "object" && !Array.isArray(e);
}
function ka(e, ...t) {
  if (!t.length)
    return e;
  const n = t.shift();
  if (ca(e) && ca(n))
    for (const o in n)
      ca(n[o]) ? (e[o] || Object.assign(e, { [o]: {} }), ka(e[o], n[o])) : Object.assign(e, { [o]: n[o] });
  return ka(e, ...t);
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
var za = /* @__PURE__ */ ((e) => (e[e.B = 1] = "B", e[e.KB = 1024] = "KB", e[e.MB = 1048576] = "MB", e[e.GB = 1073741824] = "GB", e[e.TB = 1099511627776] = "TB", e))(za || {});
function Wk(e, t = 2, n = "") {
  return Number.isNaN(e) ? "?KB" : (n || (e < 1024 ? n = "B" : e < 1048576 ? n = "KB" : e < 1073741824 ? n = "MB" : e < 1099511627776 ? n = "GB" : n = "TB"), (e / za[n]).toFixed(t) + n);
}
const Ik = (e) => {
  const t = /^[0-9]*(B|KB|MB|GB|TB)$/;
  e = e.toUpperCase();
  const n = e.match(t);
  if (!n)
    return 0;
  const o = n[1];
  return e = e.replace(o, ""), Number.parseInt(e, 10) * za[o];
};
var hu;
let Ya = ((hu = document.documentElement.getAttribute("lang")) == null ? void 0 : hu.toLowerCase()) ?? "zh_cn", Ct;
function Pv() {
  return Ya;
}
function Rv(e) {
  Ya = e.toLowerCase();
}
function Hv(e, t) {
  Ct || (Ct = {}), typeof e == "string" && (e = { [e]: t ?? {} }), ka(Ct, e);
}
function hi(e, t, n, o, s, r) {
  Array.isArray(e) ? Ct && e.unshift(Ct) : e = Ct ? [Ct, e] : [e], typeof n == "string" && (r = s, s = o, o = n, n = void 0);
  const l = s || Ya;
  let a;
  for (const _ of e) {
    if (!_)
      continue;
    const d = _[l];
    if (!d)
      continue;
    const i = r && _ === Ct ? `${r}.${t}` : t;
    if (a = Nv(d, i), a !== void 0)
      break;
  }
  return a === void 0 ? o : n ? Le(a, ...Array.isArray(n) ? n : [n]) : a;
}
hi.addLang = Hv;
hi.getCode = Pv;
hi.setCode = Rv;
function Wv(e) {
  return Object.fromEntries(Object.entries(e).map(([t, n]) => {
    if (typeof n == "string")
      try {
        n = JSON.parse(n);
      } catch {
      }
    return [t, n];
  }));
}
var gt, Dn, Ae;
class Be {
  constructor(t, n) {
    O(this, gt, void 0);
    O(this, Dn, void 0);
    O(this, Ae, void 0);
    t = typeof t == "string" ? document.querySelector(t) : t, this.constructor.EVENTS && H(this, Ae, new zc(t, { customEventSuffix: `.${this.constructor.KEY}` })), H(this, gt, { ...this.constructor.DEFAULT }), this.setOptions({ ...t instanceof HTMLElement ? Wv(t.dataset) : null, ...n }), this.constructor.all.set(t, this), H(this, Dn, t), this.init(), requestAnimationFrame(() => {
      var o;
      this.afterInit(), (o = b(this, Ae)) == null || o.emit("inited", this);
    });
  }
  get options() {
    return b(this, gt);
  }
  get element() {
    return b(this, Dn);
  }
  get events() {
    return b(this, Ae);
  }
  init() {
  }
  afterInit() {
  }
  setOptions(t) {
    return t && Object.assign(b(this, gt), t), b(this, gt);
  }
  render(t) {
    this.setOptions(t);
  }
  destroy() {
    this.constructor.all.delete(b(this, Dn)), b(this, Ae) && (b(this, Ae).emit("destroyed", this), b(this, Ae).offAll());
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
    let o = zc.createEvent(t, n);
    const s = `on${o.type.replace(`.${this.constructor.KEY}`, "")}`, r = b(this, gt)[s];
    return r && r(o) === !1 && (o.preventDefault(), o.stopPropagation()), o = (l = b(this, Ae)) == null ? void 0 : l.emit(o), o;
  }
  i18n(t, n, o) {
    return hi(b(this, gt).i18n, t, n, o, this.options.lang, this.constructor.NAME) ?? `{i18n:${t}}`;
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
gt = new WeakMap(), Dn = new WeakMap(), Ae = new WeakMap(), N(Be, "EVENTS", !1), N(Be, "DEFAULT", {}), N(Be, "allComponents", /* @__PURE__ */ new Map());
class Pe extends Be {
  constructor() {
    super(...arguments);
    N(this, "ref", Cv());
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
    Tv(/* @__PURE__ */ Au(o, { ref: this.ref, ...this.setOptions(n) }), this.element);
  }
}
var qa, _e, Mu, Tu, Ro, Yc, Lu = {}, Du = [], Iv = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function Pt(e, t) {
  for (var n in t)
    e[n] = t[n];
  return e;
}
function Ou(e) {
  var t = e.parentNode;
  t && t.removeChild(e);
}
function po(e, t, n) {
  var o, s, r, l = {};
  for (r in t)
    r == "key" ? o = t[r] : r == "ref" ? s = t[r] : l[r] = t[r];
  if (arguments.length > 2 && (l.children = arguments.length > 3 ? qa.call(arguments, 2) : n), typeof e == "function" && e.defaultProps != null)
    for (r in e.defaultProps)
      l[r] === void 0 && (l[r] = e.defaultProps[r]);
  return Ti(e, l, o, s, null);
}
function Ti(e, t, n, o, s) {
  var r = { type: e, props: t, key: n, ref: o, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: s ?? ++Mu };
  return s == null && _e.vnode != null && _e.vnode(r), r;
}
function Uv() {
  return { current: null };
}
function Ga(e) {
  return e.children;
}
function Ho(e, t) {
  this.props = e, this.context = t;
}
function vr(e, t) {
  if (t == null)
    return e.__ ? vr(e.__, e.__.__k.indexOf(e) + 1) : null;
  for (var n; t < e.__k.length; t++)
    if ((n = e.__k[t]) != null && n.__e != null)
      return n.__e;
  return typeof e.type == "function" ? vr(e) : null;
}
function Nu(e) {
  var t, n;
  if ((e = e.__) != null && e.__c != null) {
    for (e.__e = e.__c.base = null, t = 0; t < e.__k.length; t++)
      if ((n = e.__k[t]) != null && n.__e != null) {
        e.__e = e.__c.base = n.__e;
        break;
      }
    return Nu(e);
  }
}
function qc(e) {
  (!e.__d && (e.__d = !0) && Ro.push(e) && !Ki.__r++ || Yc !== _e.debounceRendering) && ((Yc = _e.debounceRendering) || setTimeout)(Ki);
}
function Ki() {
  for (var e; Ki.__r = Ro.length; )
    e = Ro.sort(function(t, n) {
      return t.__v.__b - n.__v.__b;
    }), Ro = [], e.some(function(t) {
      var n, o, s, r, l, a;
      t.__d && (l = (r = (n = t).__v).__e, (a = n.__P) && (o = [], (s = Pt({}, r)).__v = r.__v + 1, Wu(a, r, s, n.__n, a.ownerSVGElement !== void 0, r.__h != null ? [l] : null, o, l ?? vr(r), r.__h), Fv(o, r), r.__e != l && Nu(r)));
    });
}
function Pu(e, t, n, o, s, r, l, a, _, d) {
  var i, h, f, c, u, y, p, m = o && o.__k || Du, v = m.length;
  for (n.__k = [], i = 0; i < t.length; i++)
    if ((c = n.__k[i] = (c = t[i]) == null || typeof c == "boolean" ? null : typeof c == "string" || typeof c == "number" || typeof c == "bigint" ? Ti(null, c, null, null, c) : Array.isArray(c) ? Ti(Ga, { children: c }, null, null, null) : c.__b > 0 ? Ti(c.type, c.props, c.key, c.ref ? c.ref : null, c.__v) : c) != null) {
      if (c.__ = n, c.__b = n.__b + 1, (f = m[i]) === null || f && c.key == f.key && c.type === f.type)
        m[i] = void 0;
      else
        for (h = 0; h < v; h++) {
          if ((f = m[h]) && c.key == f.key && c.type === f.type) {
            m[h] = void 0;
            break;
          }
          f = null;
        }
      Wu(e, c, f = f || Lu, s, r, l, a, _, d), u = c.__e, (h = c.ref) && f.ref != h && (p || (p = []), f.ref && p.push(f.ref, null, c), p.push(h, c.__c || u, c)), u != null ? (y == null && (y = u), typeof c.type == "function" && c.__k === f.__k ? c.__d = _ = Ru(c, _, e) : _ = Hu(e, c, f, m, u, _), typeof n.type == "function" && (n.__d = _)) : _ && f.__e == _ && _.parentNode != e && (_ = vr(f));
    }
  for (n.__e = y, i = v; i--; )
    m[i] != null && Uu(m[i], m[i]);
  if (p)
    for (i = 0; i < p.length; i++)
      Iu(p[i], p[++i], p[++i]);
}
function Ru(e, t, n) {
  for (var o, s = e.__k, r = 0; s && r < s.length; r++)
    (o = s[r]) && (o.__ = e, t = typeof o.type == "function" ? Ru(o, t, n) : Hu(n, o, o, s, o.__e, t));
  return t;
}
function Hu(e, t, n, o, s, r) {
  var l, a, _;
  if (t.__d !== void 0)
    l = t.__d, t.__d = void 0;
  else if (n == null || s != r || s.parentNode == null)
    e:
      if (r == null || r.parentNode !== e)
        e.appendChild(s), l = null;
      else {
        for (a = r, _ = 0; (a = a.nextSibling) && _ < o.length; _ += 2)
          if (a == s)
            break e;
        e.insertBefore(s, r), l = r;
      }
  return l !== void 0 ? l : s.nextSibling;
}
function Bv(e, t, n, o, s) {
  var r;
  for (r in n)
    r === "children" || r === "key" || r in t || Zi(e, r, null, n[r], o);
  for (r in t)
    s && typeof t[r] != "function" || r === "children" || r === "key" || r === "value" || r === "checked" || n[r] === t[r] || Zi(e, r, t[r], n[r], o);
}
function Gc(e, t, n) {
  t[0] === "-" ? e.setProperty(t, n) : e[t] = n == null ? "" : typeof n != "number" || Iv.test(t) ? n : n + "px";
}
function Zi(e, t, n, o, s) {
  var r;
  e:
    if (t === "style")
      if (typeof n == "string")
        e.style.cssText = n;
      else {
        if (typeof o == "string" && (e.style.cssText = o = ""), o)
          for (t in o)
            n && t in n || Gc(e.style, t, "");
        if (n)
          for (t in n)
            o && n[t] === o[t] || Gc(e.style, t, n[t]);
      }
    else if (t[0] === "o" && t[1] === "n")
      r = t !== (t = t.replace(/Capture$/, "")), t = t.toLowerCase() in e ? t.toLowerCase().slice(2) : t.slice(2), e.l || (e.l = {}), e.l[t + r] = n, n ? o || e.addEventListener(t, r ? Kc : Xc, r) : e.removeEventListener(t, r ? Kc : Xc, r);
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
function Xc(e) {
  this.l[e.type + !1](_e.event ? _e.event(e) : e);
}
function Kc(e) {
  this.l[e.type + !0](_e.event ? _e.event(e) : e);
}
function Wu(e, t, n, o, s, r, l, a, _) {
  var d, i, h, f, c, u, y, p, m, v, $, w, C, x, E, g = t.type;
  if (t.constructor !== void 0)
    return null;
  n.__h != null && (_ = n.__h, a = t.__e = n.__e, t.__h = null, r = [a]), (d = _e.__b) && d(t);
  try {
    e:
      if (typeof g == "function") {
        if (p = t.props, m = (d = g.contextType) && o[d.__c], v = d ? m ? m.props.value : d.__ : o, n.__c ? y = (i = t.__c = n.__c).__ = i.__E : ("prototype" in g && g.prototype.render ? t.__c = i = new g(p, v) : (t.__c = i = new Ho(p, v), i.constructor = g, i.render = Vv), m && m.sub(i), i.props = p, i.state || (i.state = {}), i.context = v, i.__n = o, h = i.__d = !0, i.__h = [], i._sb = []), i.__s == null && (i.__s = i.state), g.getDerivedStateFromProps != null && (i.__s == i.state && (i.__s = Pt({}, i.__s)), Pt(i.__s, g.getDerivedStateFromProps(p, i.__s))), f = i.props, c = i.state, h)
          g.getDerivedStateFromProps == null && i.componentWillMount != null && i.componentWillMount(), i.componentDidMount != null && i.__h.push(i.componentDidMount);
        else {
          if (g.getDerivedStateFromProps == null && p !== f && i.componentWillReceiveProps != null && i.componentWillReceiveProps(p, v), !i.__e && i.shouldComponentUpdate != null && i.shouldComponentUpdate(p, i.__s, v) === !1 || t.__v === n.__v) {
            for (i.props = p, i.state = i.__s, t.__v !== n.__v && (i.__d = !1), i.__v = t, t.__e = n.__e, t.__k = n.__k, t.__k.forEach(function(k) {
              k && (k.__ = t);
            }), $ = 0; $ < i._sb.length; $++)
              i.__h.push(i._sb[$]);
            i._sb = [], i.__h.length && l.push(i);
            break e;
          }
          i.componentWillUpdate != null && i.componentWillUpdate(p, i.__s, v), i.componentDidUpdate != null && i.__h.push(function() {
            i.componentDidUpdate(f, c, u);
          });
        }
        if (i.context = v, i.props = p, i.__v = t, i.__P = e, w = _e.__r, C = 0, "prototype" in g && g.prototype.render) {
          for (i.state = i.__s, i.__d = !1, w && w(t), d = i.render(i.props, i.state, i.context), x = 0; x < i._sb.length; x++)
            i.__h.push(i._sb[x]);
          i._sb = [];
        } else
          do
            i.__d = !1, w && w(t), d = i.render(i.props, i.state, i.context), i.state = i.__s;
          while (i.__d && ++C < 25);
        i.state = i.__s, i.getChildContext != null && (o = Pt(Pt({}, o), i.getChildContext())), h || i.getSnapshotBeforeUpdate == null || (u = i.getSnapshotBeforeUpdate(f, c)), E = d != null && d.type === Ga && d.key == null ? d.props.children : d, Pu(e, Array.isArray(E) ? E : [E], t, n, o, s, r, l, a, _), i.base = t.__e, t.__h = null, i.__h.length && l.push(i), y && (i.__E = i.__ = null), i.__e = !1;
      } else
        r == null && t.__v === n.__v ? (t.__k = n.__k, t.__e = n.__e) : t.__e = jv(n.__e, t, n, o, s, r, l, _);
    (d = _e.diffed) && d(t);
  } catch (k) {
    t.__v = null, (_ || r != null) && (t.__e = a, t.__h = !!_, r[r.indexOf(a)] = null), _e.__e(k, t, n);
  }
}
function Fv(e, t) {
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
function jv(e, t, n, o, s, r, l, a) {
  var _, d, i, h = n.props, f = t.props, c = t.type, u = 0;
  if (c === "svg" && (s = !0), r != null) {
    for (; u < r.length; u++)
      if ((_ = r[u]) && "setAttribute" in _ == !!c && (c ? _.localName === c : _.nodeType === 3)) {
        e = _, r[u] = null;
        break;
      }
  }
  if (e == null) {
    if (c === null)
      return document.createTextNode(f);
    e = s ? document.createElementNS("http://www.w3.org/2000/svg", c) : document.createElement(c, f.is && f), r = null, a = !1;
  }
  if (c === null)
    h === f || a && e.data === f || (e.data = f);
  else {
    if (r = r && qa.call(e.childNodes), d = (h = n.props || Lu).dangerouslySetInnerHTML, i = f.dangerouslySetInnerHTML, !a) {
      if (r != null)
        for (h = {}, u = 0; u < e.attributes.length; u++)
          h[e.attributes[u].name] = e.attributes[u].value;
      (i || d) && (i && (d && i.__html == d.__html || i.__html === e.innerHTML) || (e.innerHTML = i && i.__html || ""));
    }
    if (Bv(e, f, h, s, a), i)
      t.__k = [];
    else if (u = t.props.children, Pu(e, Array.isArray(u) ? u : [u], t, n, o, s && c !== "foreignObject", r, l, r ? r[0] : n.__k && vr(n, 0), a), r != null)
      for (u = r.length; u--; )
        r[u] != null && Ou(r[u]);
    a || ("value" in f && (u = f.value) !== void 0 && (u !== e.value || c === "progress" && !u || c === "option" && u !== h.value) && Zi(e, "value", u, h.value, !1), "checked" in f && (u = f.checked) !== void 0 && u !== e.checked && Zi(e, "checked", u, h.checked, !1));
  }
  return e;
}
function Iu(e, t, n) {
  try {
    typeof e == "function" ? e(t) : e.current = t;
  } catch (o) {
    _e.__e(o, n);
  }
}
function Uu(e, t, n) {
  var o, s;
  if (_e.unmount && _e.unmount(e), (o = e.ref) && (o.current && o.current !== e.__e || Iu(o, null, t)), (o = e.__c) != null) {
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
      o[s] && Uu(o[s], t, n || typeof e.type != "function");
  n || e.__e == null || Ou(e.__e), e.__ = e.__e = e.__d = void 0;
}
function Vv(e, t, n) {
  return this.constructor(e, n);
}
qa = Du.slice, _e = { __e: function(e, t, n, o) {
  for (var s, r, l; t = t.__; )
    if ((s = t.__c) && !s.__)
      try {
        if ((r = s.constructor) && r.getDerivedStateFromError != null && (s.setState(r.getDerivedStateFromError(e)), l = s.__d), s.componentDidCatch != null && (s.componentDidCatch(e, o || {}), l = s.__d), l)
          return s.__E = s;
      } catch (a) {
        e = a;
      }
  throw e;
} }, Mu = 0, Tu = function(e) {
  return e != null && e.constructor === void 0;
}, Ho.prototype.setState = function(e, t) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = Pt({}, this.state), typeof e == "function" && (e = e(Pt({}, n), this.props)), e && Pt(n, e), e != null && this.__v && (t && this._sb.push(t), qc(this));
}, Ho.prototype.forceUpdate = function(e) {
  this.__v && (this.__e = !0, e && this.__h.push(e), qc(this));
}, Ho.prototype.render = Ga, Ro = [], Ki.__r = 0;
var zv = 0;
function st(e, t, n, o, s) {
  var r, l, a = {};
  for (l in t)
    l == "ref" ? r = t[l] : a[l] = t[l];
  var _ = { type: e, props: a, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: --zv, __source: s, __self: o };
  if (typeof e == "function" && (r = e.defaultProps))
    for (l in r)
      a[l] === void 0 && (a[l] = r[l]);
  return _e.vnode && _e.vnode(_), _;
}
function Ul(...e) {
  const t = [], n = /* @__PURE__ */ new Map(), o = (s, r) => {
    if (Array.isArray(s) && (r = s[1], s = s[0]), !s.length)
      return;
    const l = n.get(s);
    typeof l == "number" ? t[l][1] = !!r : (n.set(s, t.length), t.push([s, !!r]));
  };
  return e.forEach((s) => {
    typeof s == "function" && (s = s()), Array.isArray(s) ? Ul(...s).forEach(o) : s && typeof s == "object" ? Object.entries(s).forEach(o) : typeof s == "string" && s.split(" ").forEach((r) => o(r, !0));
  }), t.sort((s, r) => (n.get(s[0]) || 0) - (n.get(r[0]) || 0));
}
const j = (...e) => Ul(...e).reduce((t, [n, o]) => (o && t.push(n), t), []).join(" ");
function Yv({
  component: e = "div",
  className: t,
  children: n,
  style: o,
  attrs: s
}) {
  return po(e, {
    className: j(t),
    style: o,
    ...s
  }, n);
}
function Bu({
  component: e = "a",
  className: t,
  children: n,
  attrs: o,
  url: s,
  disabled: r,
  active: l,
  icon: a,
  text: _,
  target: d,
  trailingIcon: i,
  hint: h,
  style: f,
  onClick: c
}) {
  const u = [
    typeof a == "string" ? /* @__PURE__ */ st("i", { class: `icon ${a}` }) : a,
    /* @__PURE__ */ st("span", { className: "text", children: _ }),
    typeof n == "function" ? n() : n,
    typeof i == "string" ? /* @__PURE__ */ st("i", { class: `icon ${i}` }) : i
  ];
  return po(e, {
    className: j(t, { disabled: r, active: l }),
    title: h,
    [e === "a" ? "href" : "data-url"]: s,
    [e === "a" ? "target" : "data-target"]: d,
    style: f,
    onClick: c,
    ...o
  }, ...u);
}
function qv({
  component: e = "div",
  className: t,
  text: n,
  attrs: o,
  children: s,
  style: r,
  onClick: l
}) {
  return po(e, {
    className: j(t),
    style: r,
    onClick: l,
    ...o
  }, n, typeof s == "function" ? s() : s);
}
function Gv({
  component: e = "div",
  className: t,
  style: n,
  space: o,
  flex: s,
  attrs: r,
  onClick: l,
  children: a
}) {
  return po(e, {
    className: j(t),
    style: { width: o, height: o, flex: s, ...n },
    onClick: l,
    ...r
  }, a);
}
function Xv(e) {
  const {
    tag: t,
    className: n,
    style: o,
    renders: s,
    generateArgs: r = [],
    generatorThis: l,
    generators: a,
    onGenerate: _,
    onRenderItem: d,
    ...i
  } = e, h = [n], f = { ...o }, c = [], u = [];
  return s.forEach((y) => {
    const p = [];
    typeof y == "string" && a && a[y] && (y = a[y]), typeof y == "function" ? _ ? p.push(..._.call(l, y, c, ...r)) : p.push(...y.call(l, c, ...r) ?? []) : p.push(y), p.forEach((m) => {
      m != null && (typeof m == "object" && !vu(m) && ("html" in m || "__html" in m || "className" in m || "style" in m || "attrs" in m || "children" in m) ? m.html ? c.push(
        /* @__PURE__ */ Au("div", { className: j(m.className), style: m.style, dangerouslySetInnerHTML: { __html: m.html }, ...m.attrs ?? {} })
      ) : m.__html ? u.push(m.__html) : (m.style && Object.assign(f, m.style), m.className && h.push(m.className), m.children && c.push(m.children), m.attrs && Object.assign(i, m.attrs)) : c.push(m));
    });
  }), u.length && Object.assign(i, { dangerouslySetInnerHTML: { __html: u } }), [{
    className: j(h),
    style: f,
    ...i
  }, c];
}
function xa({
  tag: e = "div",
  ...t
}) {
  const [n, o] = Xv(t);
  return bu(e, n, ...o);
}
function Kv(e) {
  return /* @__PURE__ */ st(xa, { ...e });
}
function Fu({
  component: e = "div",
  className: t,
  children: n,
  style: o,
  attrs: s
}) {
  return po(e, {
    className: j(t),
    style: o,
    ...s
  }, n);
}
var Ao;
let oo = (Ao = class extends Ho {
  constructor() {
    super(...arguments);
    N(this, "ref", Uv());
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
    const { itemProps: r, onClickItem: l } = n, a = { key: s, ...o };
    return r && Object.assign(a, r[o.type || "item"]), (l || o.onClick) && (a.onClick = this.handleItemClick.bind(this, a, s, o.onClick)), a.className = j(a.className), a;
  }
  renderItem(n, o, s) {
    const r = this.getItemRenderProps(n, o, s), { itemRender: l } = n;
    if (l) {
      if (typeof l == "object") {
        const p = l[o.type || "item"];
        if (p)
          return /* @__PURE__ */ st(p, { ...r });
      } else if (typeof l == "function") {
        const p = l.call(this, r, po);
        if (Tu(p))
          return p;
        typeof p == "object" && Object.assign(r, p);
      }
    }
    const { type: a = "item", component: _, key: d = s, rootAttrs: i, rootClass: h, rootStyle: f, rootChildren: c, ...u } = r, y = !_ || typeof _ == "string" ? this.constructor.ItemComponents && this.constructor.ItemComponents[a] || oo.ItemComponents[a] : _;
    return Object.assign(u, {
      type: a,
      component: typeof _ == "string" ? _ : void 0
    }), this.renderTypedItem(y, {
      className: j(h),
      children: c,
      style: f,
      key: d,
      ...i
    }, {
      ...u,
      type: a,
      component: typeof _ == "string" ? _ : void 0
    });
  }
  renderTypedItem(n, o, s) {
    const { children: r, className: l, key: a, ..._ } = o;
    return /* @__PURE__ */ st(
      "li",
      {
        className: j(`${this.name}-${s.type}`, l),
        ..._,
        children: [
          /* @__PURE__ */ st(n, { ...s }),
          typeof r == "function" ? r() : r
        ]
      },
      a
    );
  }
  render() {
    const n = this.beforeRender(), {
      name: o,
      style: s,
      itemProps: r,
      className: l,
      items: a,
      children: _,
      itemRender: d,
      onClickItem: i,
      beforeRender: h,
      afterRender: f,
      beforeDestroy: c,
      ...u
    } = n, y = this.constructor.ROOT_TAG;
    return /* @__PURE__ */ st(y, { class: j(this.name, l), ...u, ref: this.ref, children: [
      a && a.map(this.renderItem.bind(this, n)),
      _
    ] });
  }
}, N(Ao, "ItemComponents", {
  divider: Yv,
  item: Bu,
  heading: qv,
  space: Gv,
  custom: Kv,
  basic: Fu
}), N(Ao, "ROOT_TAG", "menu"), N(Ao, "NAME", "action-menu"), Ao);
class Zc extends Pe {
}
N(Zc, "NAME", "actionmenu"), N(Zc, "Component", oo);
function Jc({
  ...e
}) {
  return /* @__PURE__ */ st(Bu, { ...e });
}
var ga, zr, Je, On;
let ju = (ga = class extends oo {
  constructor(n) {
    super(n);
    O(this, zr, /* @__PURE__ */ new Set());
    O(this, Je, void 0);
    O(this, On, (n, o, s) => {
      this.toggleNestedMenu(n, o), s.preventDefault();
    });
    H(this, Je, n.nestedShow === void 0), b(this, Je) && (this.state = { nestedShow: n.defaultNestedShow ?? {} });
  }
  get nestedTrigger() {
    return this.props.nestedTrigger;
  }
  beforeRender() {
    const n = super.beforeRender(), { nestedShow: o, nestedTrigger: s, defaultNestedShow: r, controlledMenu: l, ...a } = n;
    return a;
  }
  renderNestedMenu(n) {
    let { items: o } = n;
    if (!o || (typeof o == "function" && (o = o(n, this)), !o.length))
      return;
    const s = this.constructor;
    return /* @__PURE__ */ st(
      s,
      {
        items: o,
        name: this.props.name,
        nestedShow: b(this, Je) ? this.state.nestedShow : this.props.nestedShow,
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
    b(this, zr).add(l);
    const a = this.isNestedMenuShow(l);
    if (a && (r.rootChildren = [
      r.rootChildren,
      this.renderNestedMenu(o)
    ], r.component = Jc), this.nestedTrigger === "hover")
      r.rootAttrs = {
        ...r.rootAttrs,
        onMouseEnter: b(this, On).bind(this, l, !0),
        onMouseLeave: b(this, On).bind(this, l, !1)
      };
    else if (this.nestedTrigger === "click") {
      const { onClick: d } = r;
      r.onClick = (i) => {
        b(this, On).call(this, l, void 0, i), d == null || d(i);
      };
    }
    const _ = this.renderToggleIcon(a, r);
    return _ && (r.children = [r.children, _]), r.rootClass = [r.rootClass, "has-nested-menu", a ? "show" : ""], r;
  }
  isNestedMenuShow(n) {
    const o = b(this, Je) ? this.state.nestedShow : this.props.nestedShow;
    return o && typeof o == "object" ? o[n] : !!o;
  }
  toggleNestedMenu(n, o) {
    const { controlledMenu: s } = this.props;
    if (s)
      return s.toggleNestedMenu(n, o);
    if (!b(this, Je))
      return !1;
    let { nestedShow: r = {} } = this.state;
    if (typeof r == "boolean" && (r === !0 ? r = [...b(this, zr).values()].reduce((l, a) => (l[a] = !0, l), {}) : r = {}), o === void 0)
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
    b(this, Je) && this.setState({ nestedShow: !0 });
  }
  hideAllNestedMenu() {
    b(this, Je) && this.setState({ nestedShow: !1 });
  }
}, zr = new WeakMap(), Je = new WeakMap(), On = new WeakMap(), N(ga, "ItemComponents", {
  item: Jc
}), ga);
class Qc extends Pe {
}
N(Qc, "NAME", "actionmenunested"), N(Qc, "Component", ju);
var Xa, fe, Vu, Wo, e_, zu = {}, Yu = [], Zv = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function Rt(e, t) {
  for (var n in t)
    e[n] = t[n];
  return e;
}
function qu(e) {
  var t = e.parentNode;
  t && t.removeChild(e);
}
function Jv(e, t, n) {
  var o, s, r, l = {};
  for (r in t)
    r == "key" ? o = t[r] : r == "ref" ? s = t[r] : l[r] = t[r];
  if (arguments.length > 2 && (l.children = arguments.length > 3 ? Xa.call(arguments, 2) : n), typeof e == "function" && e.defaultProps != null)
    for (r in e.defaultProps)
      l[r] === void 0 && (l[r] = e.defaultProps[r]);
  return Li(e, l, o, s, null);
}
function Li(e, t, n, o, s) {
  var r = { type: e, props: t, key: n, ref: o, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: s ?? ++Vu };
  return s == null && fe.vnode != null && fe.vnode(r), r;
}
function Ka(e) {
  return e.children;
}
function Io(e, t) {
  this.props = e, this.context = t;
}
function gr(e, t) {
  if (t == null)
    return e.__ ? gr(e.__, e.__.__k.indexOf(e) + 1) : null;
  for (var n; t < e.__k.length; t++)
    if ((n = e.__k[t]) != null && n.__e != null)
      return n.__e;
  return typeof e.type == "function" ? gr(e) : null;
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
function t_(e) {
  (!e.__d && (e.__d = !0) && Wo.push(e) && !Ji.__r++ || e_ !== fe.debounceRendering) && ((e_ = fe.debounceRendering) || setTimeout)(Ji);
}
function Ji() {
  for (var e; Ji.__r = Wo.length; )
    e = Wo.sort(function(t, n) {
      return t.__v.__b - n.__v.__b;
    }), Wo = [], e.some(function(t) {
      var n, o, s, r, l, a;
      t.__d && (l = (r = (n = t).__v).__e, (a = n.__P) && (o = [], (s = Rt({}, r)).__v = r.__v + 1, Ju(a, r, s, n.__n, a.ownerSVGElement !== void 0, r.__h != null ? [l] : null, o, l ?? gr(r), r.__h), eg(o, r), r.__e != l && Gu(r)));
    });
}
function Xu(e, t, n, o, s, r, l, a, _, d) {
  var i, h, f, c, u, y, p, m = o && o.__k || Yu, v = m.length;
  for (n.__k = [], i = 0; i < t.length; i++)
    if ((c = n.__k[i] = (c = t[i]) == null || typeof c == "boolean" ? null : typeof c == "string" || typeof c == "number" || typeof c == "bigint" ? Li(null, c, null, null, c) : Array.isArray(c) ? Li(Ka, { children: c }, null, null, null) : c.__b > 0 ? Li(c.type, c.props, c.key, c.ref ? c.ref : null, c.__v) : c) != null) {
      if (c.__ = n, c.__b = n.__b + 1, (f = m[i]) === null || f && c.key == f.key && c.type === f.type)
        m[i] = void 0;
      else
        for (h = 0; h < v; h++) {
          if ((f = m[h]) && c.key == f.key && c.type === f.type) {
            m[h] = void 0;
            break;
          }
          f = null;
        }
      Ju(e, c, f = f || zu, s, r, l, a, _, d), u = c.__e, (h = c.ref) && f.ref != h && (p || (p = []), f.ref && p.push(f.ref, null, c), p.push(h, c.__c || u, c)), u != null ? (y == null && (y = u), typeof c.type == "function" && c.__k === f.__k ? c.__d = _ = Ku(c, _, e) : _ = Zu(e, c, f, m, u, _), typeof n.type == "function" && (n.__d = _)) : _ && f.__e == _ && _.parentNode != e && (_ = gr(f));
    }
  for (n.__e = y, i = v; i--; )
    m[i] != null && ed(m[i], m[i]);
  if (p)
    for (i = 0; i < p.length; i++)
      Qu(p[i], p[++i], p[++i]);
}
function Ku(e, t, n) {
  for (var o, s = e.__k, r = 0; s && r < s.length; r++)
    (o = s[r]) && (o.__ = e, t = typeof o.type == "function" ? Ku(o, t, n) : Zu(n, o, o, s, o.__e, t));
  return t;
}
function Zu(e, t, n, o, s, r) {
  var l, a, _;
  if (t.__d !== void 0)
    l = t.__d, t.__d = void 0;
  else if (n == null || s != r || s.parentNode == null)
    e:
      if (r == null || r.parentNode !== e)
        e.appendChild(s), l = null;
      else {
        for (a = r, _ = 0; (a = a.nextSibling) && _ < o.length; _ += 2)
          if (a == s)
            break e;
        e.insertBefore(s, r), l = r;
      }
  return l !== void 0 ? l : s.nextSibling;
}
function Qv(e, t, n, o, s) {
  var r;
  for (r in n)
    r === "children" || r === "key" || r in t || Qi(e, r, null, n[r], o);
  for (r in t)
    s && typeof t[r] != "function" || r === "children" || r === "key" || r === "value" || r === "checked" || n[r] === t[r] || Qi(e, r, t[r], n[r], o);
}
function n_(e, t, n) {
  t[0] === "-" ? e.setProperty(t, n) : e[t] = n == null ? "" : typeof n != "number" || Zv.test(t) ? n : n + "px";
}
function Qi(e, t, n, o, s) {
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
  this.l[e.type + !1](fe.event ? fe.event(e) : e);
}
function r_(e) {
  this.l[e.type + !0](fe.event ? fe.event(e) : e);
}
function Ju(e, t, n, o, s, r, l, a, _) {
  var d, i, h, f, c, u, y, p, m, v, $, w, C, x, E, g = t.type;
  if (t.constructor !== void 0)
    return null;
  n.__h != null && (_ = n.__h, a = t.__e = n.__e, t.__h = null, r = [a]), (d = fe.__b) && d(t);
  try {
    e:
      if (typeof g == "function") {
        if (p = t.props, m = (d = g.contextType) && o[d.__c], v = d ? m ? m.props.value : d.__ : o, n.__c ? y = (i = t.__c = n.__c).__ = i.__E : ("prototype" in g && g.prototype.render ? t.__c = i = new g(p, v) : (t.__c = i = new Io(p, v), i.constructor = g, i.render = ng), m && m.sub(i), i.props = p, i.state || (i.state = {}), i.context = v, i.__n = o, h = i.__d = !0, i.__h = [], i._sb = []), i.__s == null && (i.__s = i.state), g.getDerivedStateFromProps != null && (i.__s == i.state && (i.__s = Rt({}, i.__s)), Rt(i.__s, g.getDerivedStateFromProps(p, i.__s))), f = i.props, c = i.state, h)
          g.getDerivedStateFromProps == null && i.componentWillMount != null && i.componentWillMount(), i.componentDidMount != null && i.__h.push(i.componentDidMount);
        else {
          if (g.getDerivedStateFromProps == null && p !== f && i.componentWillReceiveProps != null && i.componentWillReceiveProps(p, v), !i.__e && i.shouldComponentUpdate != null && i.shouldComponentUpdate(p, i.__s, v) === !1 || t.__v === n.__v) {
            for (i.props = p, i.state = i.__s, t.__v !== n.__v && (i.__d = !1), i.__v = t, t.__e = n.__e, t.__k = n.__k, t.__k.forEach(function(k) {
              k && (k.__ = t);
            }), $ = 0; $ < i._sb.length; $++)
              i.__h.push(i._sb[$]);
            i._sb = [], i.__h.length && l.push(i);
            break e;
          }
          i.componentWillUpdate != null && i.componentWillUpdate(p, i.__s, v), i.componentDidUpdate != null && i.__h.push(function() {
            i.componentDidUpdate(f, c, u);
          });
        }
        if (i.context = v, i.props = p, i.__v = t, i.__P = e, w = fe.__r, C = 0, "prototype" in g && g.prototype.render) {
          for (i.state = i.__s, i.__d = !1, w && w(t), d = i.render(i.props, i.state, i.context), x = 0; x < i._sb.length; x++)
            i.__h.push(i._sb[x]);
          i._sb = [];
        } else
          do
            i.__d = !1, w && w(t), d = i.render(i.props, i.state, i.context), i.state = i.__s;
          while (i.__d && ++C < 25);
        i.state = i.__s, i.getChildContext != null && (o = Rt(Rt({}, o), i.getChildContext())), h || i.getSnapshotBeforeUpdate == null || (u = i.getSnapshotBeforeUpdate(f, c)), E = d != null && d.type === Ka && d.key == null ? d.props.children : d, Xu(e, Array.isArray(E) ? E : [E], t, n, o, s, r, l, a, _), i.base = t.__e, t.__h = null, i.__h.length && l.push(i), y && (i.__E = i.__ = null), i.__e = !1;
      } else
        r == null && t.__v === n.__v ? (t.__k = n.__k, t.__e = n.__e) : t.__e = tg(n.__e, t, n, o, s, r, l, _);
    (d = fe.diffed) && d(t);
  } catch (k) {
    t.__v = null, (_ || r != null) && (t.__e = a, t.__h = !!_, r[r.indexOf(a)] = null), fe.__e(k, t, n);
  }
}
function eg(e, t) {
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
function tg(e, t, n, o, s, r, l, a) {
  var _, d, i, h = n.props, f = t.props, c = t.type, u = 0;
  if (c === "svg" && (s = !0), r != null) {
    for (; u < r.length; u++)
      if ((_ = r[u]) && "setAttribute" in _ == !!c && (c ? _.localName === c : _.nodeType === 3)) {
        e = _, r[u] = null;
        break;
      }
  }
  if (e == null) {
    if (c === null)
      return document.createTextNode(f);
    e = s ? document.createElementNS("http://www.w3.org/2000/svg", c) : document.createElement(c, f.is && f), r = null, a = !1;
  }
  if (c === null)
    h === f || a && e.data === f || (e.data = f);
  else {
    if (r = r && Xa.call(e.childNodes), d = (h = n.props || zu).dangerouslySetInnerHTML, i = f.dangerouslySetInnerHTML, !a) {
      if (r != null)
        for (h = {}, u = 0; u < e.attributes.length; u++)
          h[e.attributes[u].name] = e.attributes[u].value;
      (i || d) && (i && (d && i.__html == d.__html || i.__html === e.innerHTML) || (e.innerHTML = i && i.__html || ""));
    }
    if (Qv(e, f, h, s, a), i)
      t.__k = [];
    else if (u = t.props.children, Xu(e, Array.isArray(u) ? u : [u], t, n, o, s && c !== "foreignObject", r, l, r ? r[0] : n.__k && gr(n, 0), a), r != null)
      for (u = r.length; u--; )
        r[u] != null && qu(r[u]);
    a || ("value" in f && (u = f.value) !== void 0 && (u !== e.value || c === "progress" && !u || c === "option" && u !== h.value) && Qi(e, "value", u, h.value, !1), "checked" in f && (u = f.checked) !== void 0 && u !== e.checked && Qi(e, "checked", u, h.checked, !1));
  }
  return e;
}
function Qu(e, t, n) {
  try {
    typeof e == "function" ? e(t) : e.current = t;
  } catch (o) {
    fe.__e(o, n);
  }
}
function ed(e, t, n) {
  var o, s;
  if (fe.unmount && fe.unmount(e), (o = e.ref) && (o.current && o.current !== e.__e || Qu(o, null, t)), (o = e.__c) != null) {
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
      o[s] && ed(o[s], t, n || typeof e.type != "function");
  n || e.__e == null || qu(e.__e), e.__ = e.__e = e.__d = void 0;
}
function ng(e, t, n) {
  return this.constructor(e, n);
}
Xa = Yu.slice, fe = { __e: function(e, t, n, o) {
  for (var s, r, l; t = t.__; )
    if ((s = t.__c) && !s.__)
      try {
        if ((r = s.constructor) && r.getDerivedStateFromError != null && (s.setState(r.getDerivedStateFromError(e)), l = s.__d), s.componentDidCatch != null && (s.componentDidCatch(e, o || {}), l = s.__d), l)
          return s.__E = s;
      } catch (a) {
        e = a;
      }
  throw e;
} }, Vu = 0, Io.prototype.setState = function(e, t) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = Rt({}, this.state), typeof e == "function" && (e = e(Rt({}, n), this.props)), e && Rt(n, e), e != null && this.__v && (t && this._sb.push(t), t_(this));
}, Io.prototype.forceUpdate = function(e) {
  this.__v && (this.__e = !0, e && this.__h.push(e), t_(this));
}, Io.prototype.render = Ka, Wo = [], Ji.__r = 0;
var og = 0;
function xo(e, t, n, o, s) {
  var r, l, a = {};
  for (l in t)
    l == "ref" ? r = t[l] : a[l] = t[l];
  var _ = { type: e, props: a, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: --og, __source: s, __self: o };
  if (typeof e == "function" && (r = e.defaultProps))
    for (l in r)
      a[l] === void 0 && (a[l] = r[l]);
  return fe.vnode && fe.vnode(_), _;
}
let Qt = class extends Io {
  render() {
    const {
      component: t,
      type: n,
      size: o,
      className: s,
      children: r,
      url: l,
      target: a,
      disabled: _,
      active: d,
      loading: i,
      loadingIcon: h,
      loadingText: f,
      icon: c,
      text: u,
      trailingIcon: y,
      caret: p,
      square: m,
      hint: v,
      ...$
    } = this.props, w = t || (l ? "a" : "button"), C = u == null || typeof u == "string" && !u.length || i && !f, x = C && !c && !y && !r && !i;
    return Jv(
      w,
      {
        className: j("btn", n, s, {
          "btn-caret": x,
          disabled: _ || i,
          active: d,
          loading: i,
          square: m === void 0 ? !x && !r && C : m
        }, o ? `size-${o}` : ""),
        title: v,
        [w === "a" ? "href" : "data-url"]: l,
        [w === "a" ? "target" : "data-target"]: a,
        type: w === "button" ? "button" : void 0,
        ...$
      },
      i ? /* @__PURE__ */ xo("i", { class: `spin icon ${h || "icon-spinner-snake"}` }) : typeof c == "string" ? /* @__PURE__ */ xo("i", { class: `icon ${c}` }) : c,
      C ? null : /* @__PURE__ */ xo("span", { className: "text", children: i ? f : u }),
      i ? null : r,
      i ? null : typeof y == "string" ? /* @__PURE__ */ xo("i", { class: `icon ${y}` }) : y,
      i ? null : p ? /* @__PURE__ */ xo("span", { className: typeof p == "string" ? `caret-${p}` : "caret" }) : null
    );
  }
};
class i_ extends Pe {
}
N(i_, "NAME", "button"), N(i_, "Component", Qt);
var Sa;
Sa = { __e: function(e, t, n, o) {
  for (var s, r, l; t = t.__; )
    if ((s = t.__c) && !s.__)
      try {
        if ((r = s.constructor) && r.getDerivedStateFromError != null && (s.setState(r.getDerivedStateFromError(e)), l = s.__d), s.componentDidCatch != null && (s.componentDidCatch(e, o || {}), l = s.__d), l)
          return s.__E = s;
      } catch (a) {
        e = a;
      }
  throw e;
} };
var rg = 0;
function ig(e, t, n, o, s) {
  var r, l, a = {};
  for (l in t)
    l == "ref" ? r = t[l] : a[l] = t[l];
  var _ = { type: e, props: a, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: --rg, __source: s, __self: o };
  if (typeof e == "function" && (r = e.defaultProps))
    for (l in r)
      a[l] === void 0 && (a[l] = r[l]);
  return Sa.vnode && Sa.vnode(_), _;
}
var ya;
let Za = (ya = class extends ju {
  get nestedTrigger() {
    return this.props.nestedTrigger || "click";
  }
  get menuName() {
    return "menu-nested";
  }
  beforeRender() {
    const t = super.beforeRender();
    let { hasIcons: n } = t;
    return n === void 0 && (n = t.items.some((o) => o.icon)), t.className = j(t.className, this.menuName, {
      "has-icons": n,
      "has-nested-items": t.items.some((o) => this.isNestedItem(o))
    }), t;
  }
  renderToggleIcon(t) {
    return /* @__PURE__ */ ig("span", { class: `${this.name}-toggle-icon caret-${t ? "down" : "right"}` });
  }
}, N(ya, "NAME", "menu"), ya);
class s_ extends Pe {
}
N(s_, "NAME", "menu"), N(s_, "Component", Za);
var Bl, ie, td, Uo, l_, es = {}, nd = [], sg = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function Ht(e, t) {
  for (var n in t)
    e[n] = t[n];
  return e;
}
function od(e) {
  var t = e.parentNode;
  t && t.removeChild(e);
}
function Ca(e, t, n) {
  var o, s, r, l = {};
  for (r in t)
    r == "key" ? o = t[r] : r == "ref" ? s = t[r] : l[r] = t[r];
  if (arguments.length > 2 && (l.children = arguments.length > 3 ? Bl.call(arguments, 2) : n), typeof e == "function" && e.defaultProps != null)
    for (r in e.defaultProps)
      l[r] === void 0 && (l[r] = e.defaultProps[r]);
  return Di(e, l, o, s, null);
}
function Di(e, t, n, o, s) {
  var r = { type: e, props: t, key: n, ref: o, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: s ?? ++td };
  return s == null && ie.vnode != null && ie.vnode(r), r;
}
function Fl(e) {
  return e.children;
}
function An(e, t) {
  this.props = e, this.context = t;
}
function yr(e, t) {
  if (t == null)
    return e.__ ? yr(e.__, e.__.__k.indexOf(e) + 1) : null;
  for (var n; t < e.__k.length; t++)
    if ((n = e.__k[t]) != null && n.__e != null)
      return n.__e;
  return typeof e.type == "function" ? yr(e) : null;
}
function rd(e) {
  var t, n;
  if ((e = e.__) != null && e.__c != null) {
    for (e.__e = e.__c.base = null, t = 0; t < e.__k.length; t++)
      if ((n = e.__k[t]) != null && n.__e != null) {
        e.__e = e.__c.base = n.__e;
        break;
      }
    return rd(e);
  }
}
function a_(e) {
  (!e.__d && (e.__d = !0) && Uo.push(e) && !ts.__r++ || l_ !== ie.debounceRendering) && ((l_ = ie.debounceRendering) || setTimeout)(ts);
}
function ts() {
  for (var e; ts.__r = Uo.length; )
    e = Uo.sort(function(t, n) {
      return t.__v.__b - n.__v.__b;
    }), Uo = [], e.some(function(t) {
      var n, o, s, r, l, a;
      t.__d && (l = (r = (n = t).__v).__e, (a = n.__P) && (o = [], (s = Ht({}, r)).__v = r.__v + 1, Ja(a, r, s, n.__n, a.ownerSVGElement !== void 0, r.__h != null ? [l] : null, o, l ?? yr(r), r.__h), ad(o, r), r.__e != l && rd(r)));
    });
}
function id(e, t, n, o, s, r, l, a, _, d) {
  var i, h, f, c, u, y, p, m = o && o.__k || nd, v = m.length;
  for (n.__k = [], i = 0; i < t.length; i++)
    if ((c = n.__k[i] = (c = t[i]) == null || typeof c == "boolean" ? null : typeof c == "string" || typeof c == "number" || typeof c == "bigint" ? Di(null, c, null, null, c) : Array.isArray(c) ? Di(Fl, { children: c }, null, null, null) : c.__b > 0 ? Di(c.type, c.props, c.key, c.ref ? c.ref : null, c.__v) : c) != null) {
      if (c.__ = n, c.__b = n.__b + 1, (f = m[i]) === null || f && c.key == f.key && c.type === f.type)
        m[i] = void 0;
      else
        for (h = 0; h < v; h++) {
          if ((f = m[h]) && c.key == f.key && c.type === f.type) {
            m[h] = void 0;
            break;
          }
          f = null;
        }
      Ja(e, c, f = f || es, s, r, l, a, _, d), u = c.__e, (h = c.ref) && f.ref != h && (p || (p = []), f.ref && p.push(f.ref, null, c), p.push(h, c.__c || u, c)), u != null ? (y == null && (y = u), typeof c.type == "function" && c.__k === f.__k ? c.__d = _ = sd(c, _, e) : _ = ld(e, c, f, m, u, _), typeof n.type == "function" && (n.__d = _)) : _ && f.__e == _ && _.parentNode != e && (_ = yr(f));
    }
  for (n.__e = y, i = v; i--; )
    m[i] != null && _d(m[i], m[i]);
  if (p)
    for (i = 0; i < p.length; i++)
      cd(p[i], p[++i], p[++i]);
}
function sd(e, t, n) {
  for (var o, s = e.__k, r = 0; s && r < s.length; r++)
    (o = s[r]) && (o.__ = e, t = typeof o.type == "function" ? sd(o, t, n) : ld(n, o, o, s, o.__e, t));
  return t;
}
function ld(e, t, n, o, s, r) {
  var l, a, _;
  if (t.__d !== void 0)
    l = t.__d, t.__d = void 0;
  else if (n == null || s != r || s.parentNode == null)
    e:
      if (r == null || r.parentNode !== e)
        e.appendChild(s), l = null;
      else {
        for (a = r, _ = 0; (a = a.nextSibling) && _ < o.length; _ += 2)
          if (a == s)
            break e;
        e.insertBefore(s, r), l = r;
      }
  return l !== void 0 ? l : s.nextSibling;
}
function lg(e, t, n, o, s) {
  var r;
  for (r in n)
    r === "children" || r === "key" || r in t || ns(e, r, null, n[r], o);
  for (r in t)
    s && typeof t[r] != "function" || r === "children" || r === "key" || r === "value" || r === "checked" || n[r] === t[r] || ns(e, r, t[r], n[r], o);
}
function c_(e, t, n) {
  t[0] === "-" ? e.setProperty(t, n) : e[t] = n == null ? "" : typeof n != "number" || sg.test(t) ? n : n + "px";
}
function ns(e, t, n, o, s) {
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
      r = t !== (t = t.replace(/Capture$/, "")), t = t.toLowerCase() in e ? t.toLowerCase().slice(2) : t.slice(2), e.l || (e.l = {}), e.l[t + r] = n, n ? o || e.addEventListener(t, r ? f_ : __, r) : e.removeEventListener(t, r ? f_ : __, r);
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
function __(e) {
  this.l[e.type + !1](ie.event ? ie.event(e) : e);
}
function f_(e) {
  this.l[e.type + !0](ie.event ? ie.event(e) : e);
}
function Ja(e, t, n, o, s, r, l, a, _) {
  var d, i, h, f, c, u, y, p, m, v, $, w, C, x, E, g = t.type;
  if (t.constructor !== void 0)
    return null;
  n.__h != null && (_ = n.__h, a = t.__e = n.__e, t.__h = null, r = [a]), (d = ie.__b) && d(t);
  try {
    e:
      if (typeof g == "function") {
        if (p = t.props, m = (d = g.contextType) && o[d.__c], v = d ? m ? m.props.value : d.__ : o, n.__c ? y = (i = t.__c = n.__c).__ = i.__E : ("prototype" in g && g.prototype.render ? t.__c = i = new g(p, v) : (t.__c = i = new An(p, v), i.constructor = g, i.render = cg), m && m.sub(i), i.props = p, i.state || (i.state = {}), i.context = v, i.__n = o, h = i.__d = !0, i.__h = [], i._sb = []), i.__s == null && (i.__s = i.state), g.getDerivedStateFromProps != null && (i.__s == i.state && (i.__s = Ht({}, i.__s)), Ht(i.__s, g.getDerivedStateFromProps(p, i.__s))), f = i.props, c = i.state, h)
          g.getDerivedStateFromProps == null && i.componentWillMount != null && i.componentWillMount(), i.componentDidMount != null && i.__h.push(i.componentDidMount);
        else {
          if (g.getDerivedStateFromProps == null && p !== f && i.componentWillReceiveProps != null && i.componentWillReceiveProps(p, v), !i.__e && i.shouldComponentUpdate != null && i.shouldComponentUpdate(p, i.__s, v) === !1 || t.__v === n.__v) {
            for (i.props = p, i.state = i.__s, t.__v !== n.__v && (i.__d = !1), i.__v = t, t.__e = n.__e, t.__k = n.__k, t.__k.forEach(function(k) {
              k && (k.__ = t);
            }), $ = 0; $ < i._sb.length; $++)
              i.__h.push(i._sb[$]);
            i._sb = [], i.__h.length && l.push(i);
            break e;
          }
          i.componentWillUpdate != null && i.componentWillUpdate(p, i.__s, v), i.componentDidUpdate != null && i.__h.push(function() {
            i.componentDidUpdate(f, c, u);
          });
        }
        if (i.context = v, i.props = p, i.__v = t, i.__P = e, w = ie.__r, C = 0, "prototype" in g && g.prototype.render) {
          for (i.state = i.__s, i.__d = !1, w && w(t), d = i.render(i.props, i.state, i.context), x = 0; x < i._sb.length; x++)
            i.__h.push(i._sb[x]);
          i._sb = [];
        } else
          do
            i.__d = !1, w && w(t), d = i.render(i.props, i.state, i.context), i.state = i.__s;
          while (i.__d && ++C < 25);
        i.state = i.__s, i.getChildContext != null && (o = Ht(Ht({}, o), i.getChildContext())), h || i.getSnapshotBeforeUpdate == null || (u = i.getSnapshotBeforeUpdate(f, c)), E = d != null && d.type === Fl && d.key == null ? d.props.children : d, id(e, Array.isArray(E) ? E : [E], t, n, o, s, r, l, a, _), i.base = t.__e, t.__h = null, i.__h.length && l.push(i), y && (i.__E = i.__ = null), i.__e = !1;
      } else
        r == null && t.__v === n.__v ? (t.__k = n.__k, t.__e = n.__e) : t.__e = ag(n.__e, t, n, o, s, r, l, _);
    (d = ie.diffed) && d(t);
  } catch (k) {
    t.__v = null, (_ || r != null) && (t.__e = a, t.__h = !!_, r[r.indexOf(a)] = null), ie.__e(k, t, n);
  }
}
function ad(e, t) {
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
function ag(e, t, n, o, s, r, l, a) {
  var _, d, i, h = n.props, f = t.props, c = t.type, u = 0;
  if (c === "svg" && (s = !0), r != null) {
    for (; u < r.length; u++)
      if ((_ = r[u]) && "setAttribute" in _ == !!c && (c ? _.localName === c : _.nodeType === 3)) {
        e = _, r[u] = null;
        break;
      }
  }
  if (e == null) {
    if (c === null)
      return document.createTextNode(f);
    e = s ? document.createElementNS("http://www.w3.org/2000/svg", c) : document.createElement(c, f.is && f), r = null, a = !1;
  }
  if (c === null)
    h === f || a && e.data === f || (e.data = f);
  else {
    if (r = r && Bl.call(e.childNodes), d = (h = n.props || es).dangerouslySetInnerHTML, i = f.dangerouslySetInnerHTML, !a) {
      if (r != null)
        for (h = {}, u = 0; u < e.attributes.length; u++)
          h[e.attributes[u].name] = e.attributes[u].value;
      (i || d) && (i && (d && i.__html == d.__html || i.__html === e.innerHTML) || (e.innerHTML = i && i.__html || ""));
    }
    if (lg(e, f, h, s, a), i)
      t.__k = [];
    else if (u = t.props.children, id(e, Array.isArray(u) ? u : [u], t, n, o, s && c !== "foreignObject", r, l, r ? r[0] : n.__k && yr(n, 0), a), r != null)
      for (u = r.length; u--; )
        r[u] != null && od(r[u]);
    a || ("value" in f && (u = f.value) !== void 0 && (u !== e.value || c === "progress" && !u || c === "option" && u !== h.value) && ns(e, "value", u, h.value, !1), "checked" in f && (u = f.checked) !== void 0 && u !== e.checked && ns(e, "checked", u, h.checked, !1));
  }
  return e;
}
function cd(e, t, n) {
  try {
    typeof e == "function" ? e(t) : e.current = t;
  } catch (o) {
    ie.__e(o, n);
  }
}
function _d(e, t, n) {
  var o, s;
  if (ie.unmount && ie.unmount(e), (o = e.ref) && (o.current && o.current !== e.__e || cd(o, null, t)), (o = e.__c) != null) {
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
      o[s] && _d(o[s], t, n || typeof e.type != "function");
  n || e.__e == null || od(e.__e), e.__ = e.__e = e.__d = void 0;
}
function cg(e, t, n) {
  return this.constructor(e, n);
}
function u_(e, t, n) {
  var o, s, r;
  ie.__ && ie.__(e, t), s = (o = typeof n == "function") ? null : n && n.__k || t.__k, r = [], Ja(t, e = (!o && n || t).__k = Ca(Fl, null, [e]), s || es, es, t.ownerSVGElement !== void 0, !o && n ? [n] : s ? null : t.firstChild ? Bl.call(t.childNodes) : null, r, !o && n ? n : s ? s.__e : t.firstChild, o), ad(r, e);
}
Bl = nd.slice, ie = { __e: function(e, t, n, o) {
  for (var s, r, l; t = t.__; )
    if ((s = t.__c) && !s.__)
      try {
        if ((r = s.constructor) && r.getDerivedStateFromError != null && (s.setState(r.getDerivedStateFromError(e)), l = s.__d), s.componentDidCatch != null && (s.componentDidCatch(e, o || {}), l = s.__d), l)
          return s.__E = s;
      } catch (a) {
        e = a;
      }
  throw e;
} }, td = 0, An.prototype.setState = function(e, t) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = Ht({}, this.state), typeof e == "function" && (e = e(Ht({}, n), this.props)), e && Ht(n, e), e != null && this.__v && (t && this._sb.push(t), a_(this));
}, An.prototype.forceUpdate = function(e) {
  this.__v && (this.__e = !0, e && this.__h.push(e), a_(this));
}, An.prototype.render = Fl, Uo = [], ts.__r = 0;
var _g = 0;
function Bo(e, t, n, o, s) {
  var r, l, a = {};
  for (l in t)
    l == "ref" ? r = t[l] : a[l] = t[l];
  var _ = { type: e, props: a, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: --_g, __source: s, __self: o };
  if (typeof e == "function" && (r = e.defaultProps))
    for (l in r)
      a[l] === void 0 && (a[l] = r[l]);
  return ie.vnode && ie.vnode(_), _;
}
var Qa, ue, fd, ud, Fo, d_, dd = {}, hd = [], fg = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function Wt(e, t) {
  for (var n in t)
    e[n] = t[n];
  return e;
}
function pd(e) {
  var t = e.parentNode;
  t && t.removeChild(e);
}
function ug(e, t, n) {
  var o, s, r, l = {};
  for (r in t)
    r == "key" ? o = t[r] : r == "ref" ? s = t[r] : l[r] = t[r];
  if (arguments.length > 2 && (l.children = arguments.length > 3 ? Qa.call(arguments, 2) : n), typeof e == "function" && e.defaultProps != null)
    for (r in e.defaultProps)
      l[r] === void 0 && (l[r] = e.defaultProps[r]);
  return Oi(e, l, o, s, null);
}
function Oi(e, t, n, o, s) {
  var r = { type: e, props: t, key: n, ref: o, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: s ?? ++fd };
  return s == null && ue.vnode != null && ue.vnode(r), r;
}
function ec(e) {
  return e.children;
}
function jo(e, t) {
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
function md(e) {
  var t, n;
  if ((e = e.__) != null && e.__c != null) {
    for (e.__e = e.__c.base = null, t = 0; t < e.__k.length; t++)
      if ((n = e.__k[t]) != null && n.__e != null) {
        e.__e = e.__c.base = n.__e;
        break;
      }
    return md(e);
  }
}
function h_(e) {
  (!e.__d && (e.__d = !0) && Fo.push(e) && !os.__r++ || d_ !== ue.debounceRendering) && ((d_ = ue.debounceRendering) || setTimeout)(os);
}
function os() {
  for (var e; os.__r = Fo.length; )
    e = Fo.sort(function(t, n) {
      return t.__v.__b - n.__v.__b;
    }), Fo = [], e.some(function(t) {
      var n, o, s, r, l, a;
      t.__d && (l = (r = (n = t).__v).__e, (a = n.__P) && (o = [], (s = Wt({}, r)).__v = r.__v + 1, bd(a, r, s, n.__n, a.ownerSVGElement !== void 0, r.__h != null ? [l] : null, o, l ?? br(r), r.__h), hg(o, r), r.__e != l && md(r)));
    });
}
function vd(e, t, n, o, s, r, l, a, _, d) {
  var i, h, f, c, u, y, p, m = o && o.__k || hd, v = m.length;
  for (n.__k = [], i = 0; i < t.length; i++)
    if ((c = n.__k[i] = (c = t[i]) == null || typeof c == "boolean" ? null : typeof c == "string" || typeof c == "number" || typeof c == "bigint" ? Oi(null, c, null, null, c) : Array.isArray(c) ? Oi(ec, { children: c }, null, null, null) : c.__b > 0 ? Oi(c.type, c.props, c.key, c.ref ? c.ref : null, c.__v) : c) != null) {
      if (c.__ = n, c.__b = n.__b + 1, (f = m[i]) === null || f && c.key == f.key && c.type === f.type)
        m[i] = void 0;
      else
        for (h = 0; h < v; h++) {
          if ((f = m[h]) && c.key == f.key && c.type === f.type) {
            m[h] = void 0;
            break;
          }
          f = null;
        }
      bd(e, c, f = f || dd, s, r, l, a, _, d), u = c.__e, (h = c.ref) && f.ref != h && (p || (p = []), f.ref && p.push(f.ref, null, c), p.push(h, c.__c || u, c)), u != null ? (y == null && (y = u), typeof c.type == "function" && c.__k === f.__k ? c.__d = _ = gd(c, _, e) : _ = yd(e, c, f, m, u, _), typeof n.type == "function" && (n.__d = _)) : _ && f.__e == _ && _.parentNode != e && (_ = br(f));
    }
  for (n.__e = y, i = v; i--; )
    m[i] != null && $d(m[i], m[i]);
  if (p)
    for (i = 0; i < p.length; i++)
      wd(p[i], p[++i], p[++i]);
}
function gd(e, t, n) {
  for (var o, s = e.__k, r = 0; s && r < s.length; r++)
    (o = s[r]) && (o.__ = e, t = typeof o.type == "function" ? gd(o, t, n) : yd(n, o, o, s, o.__e, t));
  return t;
}
function yd(e, t, n, o, s, r) {
  var l, a, _;
  if (t.__d !== void 0)
    l = t.__d, t.__d = void 0;
  else if (n == null || s != r || s.parentNode == null)
    e:
      if (r == null || r.parentNode !== e)
        e.appendChild(s), l = null;
      else {
        for (a = r, _ = 0; (a = a.nextSibling) && _ < o.length; _ += 2)
          if (a == s)
            break e;
        e.insertBefore(s, r), l = r;
      }
  return l !== void 0 ? l : s.nextSibling;
}
function dg(e, t, n, o, s) {
  var r;
  for (r in n)
    r === "children" || r === "key" || r in t || rs(e, r, null, n[r], o);
  for (r in t)
    s && typeof t[r] != "function" || r === "children" || r === "key" || r === "value" || r === "checked" || n[r] === t[r] || rs(e, r, t[r], n[r], o);
}
function p_(e, t, n) {
  t[0] === "-" ? e.setProperty(t, n) : e[t] = n == null ? "" : typeof n != "number" || fg.test(t) ? n : n + "px";
}
function rs(e, t, n, o, s) {
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
      r = t !== (t = t.replace(/Capture$/, "")), t = t.toLowerCase() in e ? t.toLowerCase().slice(2) : t.slice(2), e.l || (e.l = {}), e.l[t + r] = n, n ? o || e.addEventListener(t, r ? v_ : m_, r) : e.removeEventListener(t, r ? v_ : m_, r);
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
  this.l[e.type + !1](ue.event ? ue.event(e) : e);
}
function v_(e) {
  this.l[e.type + !0](ue.event ? ue.event(e) : e);
}
function bd(e, t, n, o, s, r, l, a, _) {
  var d, i, h, f, c, u, y, p, m, v, $, w, C, x, E, g = t.type;
  if (t.constructor !== void 0)
    return null;
  n.__h != null && (_ = n.__h, a = t.__e = n.__e, t.__h = null, r = [a]), (d = ue.__b) && d(t);
  try {
    e:
      if (typeof g == "function") {
        if (p = t.props, m = (d = g.contextType) && o[d.__c], v = d ? m ? m.props.value : d.__ : o, n.__c ? y = (i = t.__c = n.__c).__ = i.__E : ("prototype" in g && g.prototype.render ? t.__c = i = new g(p, v) : (t.__c = i = new jo(p, v), i.constructor = g, i.render = mg), m && m.sub(i), i.props = p, i.state || (i.state = {}), i.context = v, i.__n = o, h = i.__d = !0, i.__h = [], i._sb = []), i.__s == null && (i.__s = i.state), g.getDerivedStateFromProps != null && (i.__s == i.state && (i.__s = Wt({}, i.__s)), Wt(i.__s, g.getDerivedStateFromProps(p, i.__s))), f = i.props, c = i.state, h)
          g.getDerivedStateFromProps == null && i.componentWillMount != null && i.componentWillMount(), i.componentDidMount != null && i.__h.push(i.componentDidMount);
        else {
          if (g.getDerivedStateFromProps == null && p !== f && i.componentWillReceiveProps != null && i.componentWillReceiveProps(p, v), !i.__e && i.shouldComponentUpdate != null && i.shouldComponentUpdate(p, i.__s, v) === !1 || t.__v === n.__v) {
            for (i.props = p, i.state = i.__s, t.__v !== n.__v && (i.__d = !1), i.__v = t, t.__e = n.__e, t.__k = n.__k, t.__k.forEach(function(k) {
              k && (k.__ = t);
            }), $ = 0; $ < i._sb.length; $++)
              i.__h.push(i._sb[$]);
            i._sb = [], i.__h.length && l.push(i);
            break e;
          }
          i.componentWillUpdate != null && i.componentWillUpdate(p, i.__s, v), i.componentDidUpdate != null && i.__h.push(function() {
            i.componentDidUpdate(f, c, u);
          });
        }
        if (i.context = v, i.props = p, i.__v = t, i.__P = e, w = ue.__r, C = 0, "prototype" in g && g.prototype.render) {
          for (i.state = i.__s, i.__d = !1, w && w(t), d = i.render(i.props, i.state, i.context), x = 0; x < i._sb.length; x++)
            i.__h.push(i._sb[x]);
          i._sb = [];
        } else
          do
            i.__d = !1, w && w(t), d = i.render(i.props, i.state, i.context), i.state = i.__s;
          while (i.__d && ++C < 25);
        i.state = i.__s, i.getChildContext != null && (o = Wt(Wt({}, o), i.getChildContext())), h || i.getSnapshotBeforeUpdate == null || (u = i.getSnapshotBeforeUpdate(f, c)), E = d != null && d.type === ec && d.key == null ? d.props.children : d, vd(e, Array.isArray(E) ? E : [E], t, n, o, s, r, l, a, _), i.base = t.__e, t.__h = null, i.__h.length && l.push(i), y && (i.__E = i.__ = null), i.__e = !1;
      } else
        r == null && t.__v === n.__v ? (t.__k = n.__k, t.__e = n.__e) : t.__e = pg(n.__e, t, n, o, s, r, l, _);
    (d = ue.diffed) && d(t);
  } catch (k) {
    t.__v = null, (_ || r != null) && (t.__e = a, t.__h = !!_, r[r.indexOf(a)] = null), ue.__e(k, t, n);
  }
}
function hg(e, t) {
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
function pg(e, t, n, o, s, r, l, a) {
  var _, d, i, h = n.props, f = t.props, c = t.type, u = 0;
  if (c === "svg" && (s = !0), r != null) {
    for (; u < r.length; u++)
      if ((_ = r[u]) && "setAttribute" in _ == !!c && (c ? _.localName === c : _.nodeType === 3)) {
        e = _, r[u] = null;
        break;
      }
  }
  if (e == null) {
    if (c === null)
      return document.createTextNode(f);
    e = s ? document.createElementNS("http://www.w3.org/2000/svg", c) : document.createElement(c, f.is && f), r = null, a = !1;
  }
  if (c === null)
    h === f || a && e.data === f || (e.data = f);
  else {
    if (r = r && Qa.call(e.childNodes), d = (h = n.props || dd).dangerouslySetInnerHTML, i = f.dangerouslySetInnerHTML, !a) {
      if (r != null)
        for (h = {}, u = 0; u < e.attributes.length; u++)
          h[e.attributes[u].name] = e.attributes[u].value;
      (i || d) && (i && (d && i.__html == d.__html || i.__html === e.innerHTML) || (e.innerHTML = i && i.__html || ""));
    }
    if (dg(e, f, h, s, a), i)
      t.__k = [];
    else if (u = t.props.children, vd(e, Array.isArray(u) ? u : [u], t, n, o, s && c !== "foreignObject", r, l, r ? r[0] : n.__k && br(n, 0), a), r != null)
      for (u = r.length; u--; )
        r[u] != null && pd(r[u]);
    a || ("value" in f && (u = f.value) !== void 0 && (u !== e.value || c === "progress" && !u || c === "option" && u !== h.value) && rs(e, "value", u, h.value, !1), "checked" in f && (u = f.checked) !== void 0 && u !== e.checked && rs(e, "checked", u, h.checked, !1));
  }
  return e;
}
function wd(e, t, n) {
  try {
    typeof e == "function" ? e(t) : e.current = t;
  } catch (o) {
    ue.__e(o, n);
  }
}
function $d(e, t, n) {
  var o, s;
  if (ue.unmount && ue.unmount(e), (o = e.ref) && (o.current && o.current !== e.__e || wd(o, null, t)), (o = e.__c) != null) {
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
      o[s] && $d(o[s], t, n || typeof e.type != "function");
  n || e.__e == null || pd(e.__e), e.__ = e.__e = e.__d = void 0;
}
function mg(e, t, n) {
  return this.constructor(e, n);
}
Qa = hd.slice, ue = { __e: function(e, t, n, o) {
  for (var s, r, l; t = t.__; )
    if ((s = t.__c) && !s.__)
      try {
        if ((r = s.constructor) && r.getDerivedStateFromError != null && (s.setState(r.getDerivedStateFromError(e)), l = s.__d), s.componentDidCatch != null && (s.componentDidCatch(e, o || {}), l = s.__d), l)
          return s.__E = s;
      } catch (a) {
        e = a;
      }
  throw e;
} }, fd = 0, ud = function(e) {
  return e != null && e.constructor === void 0;
}, jo.prototype.setState = function(e, t) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = Wt({}, this.state), typeof e == "function" && (e = e(Wt({}, n), this.props)), e && Wt(n, e), e != null && this.__v && (t && this._sb.push(t), h_(this));
}, jo.prototype.forceUpdate = function(e) {
  this.__v && (this.__e = !0, e && this.__h.push(e), h_(this));
}, jo.prototype.render = ec, Fo = [], os.__r = 0;
var vg = 0;
function g_(e, t, n, o, s) {
  var r, l, a = {};
  for (l in t)
    l == "ref" ? r = t[l] : a[l] = t[l];
  var _ = { type: e, props: a, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: --vg, __source: s, __self: o };
  if (typeof e == "function" && (r = e.defaultProps))
    for (l in r)
      a[l] === void 0 && (a[l] = r[l]);
  return ue.vnode && ue.vnode(_), _;
}
let tc = class extends jo {
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
    return /* @__PURE__ */ g_(Qt, { ...s }, o);
  }
  renderItem(t, n, o) {
    const { itemRender: s, defaultBtnProps: r, onClickItem: l } = t, a = { key: o, ...n };
    if (r && Object.assign(a, r), l && (a.onClick = this.handleItemClick.bind(this, a, o, n.onClick)), s) {
      const _ = s.call(this, a, ug);
      if (ud(_))
        return _;
      typeof _ == "object" && Object.assign(a, _);
    }
    return this.onRenderItem(a, o);
  }
  render() {
    const t = this.beforeRender(), {
      className: n,
      items: o,
      size: s,
      type: r,
      defaultBtnProps: l,
      children: a,
      itemRender: _,
      onClickItem: d,
      beforeRender: i,
      afterRender: h,
      beforeDestroy: f,
      ...c
    } = t;
    return /* @__PURE__ */ g_(
      "div",
      {
        className: j("btn-group", s ? `size-${s}` : "", n),
        ...c,
        children: [
          o && o.map(this.renderItem.bind(this, t)),
          a
        ]
      }
    );
  }
};
function gg({
  ...e
}) {
  return /* @__PURE__ */ Bo(tc, { ...e });
}
class kd extends An {
  render() {
    const { message: t, className: n, type: o, actions: s, close: r } = this.props, l = j([o, "border-none"]), a = s != null && s.length ? s.map((_) => ({ ..._, className: l })) : [];
    if (r) {
      const _ = {
        name: "times",
        icon: "icon-times",
        className: l,
        action: function() {
          console.log("你点击了关闭按钮。");
        }
      };
      a.push(_);
    }
    return /* @__PURE__ */ Bo("div", { class: j([n, o || "default", "messager"]), children: [
      /* @__PURE__ */ Bo("div", { class: "messager-content", children: t }),
      /* @__PURE__ */ Bo(
        gg,
        {
          items: a
        }
      )
    ] });
  }
}
N(kd, "defaultProps");
class xd extends An {
  render() {
    const { className: t, placement: n } = this.props;
    return /* @__PURE__ */ Bo(
      "div",
      {
        class: j([t || "", "messagers-holder", "col"]),
        "data-placement": n
      }
    );
  }
}
N(xd, "defaultProps");
class y_ extends Be {
  show(t, n) {
    console.log(t, n, "showFunc");
    const o = n != null && n.placement ? n.placement : "top", s = (n == null ? void 0 : n.close) !== !1;
    let r = document.querySelector(".messagers-holder[data-placement=" + o + "]");
    if (!r) {
      const _ = document.createElement("div");
      document.body.appendChild(_);
      const d = {
        ...n,
        placement: o
      };
      u_(Ca(xd, d), _);
    }
    r = document.querySelector(".messagers-holder[data-placement=" + o + "]");
    const l = document.createElement("div");
    r.appendChild(l);
    const a = {
      ...n,
      message: t,
      placement: o,
      close: s
    };
    u_(Ca(kd, a), r, l);
  }
}
N(y_, "NAME", "messager"), N(y_, "DEFAULT", {
  placement: "top",
  type: "default",
  close: !0
});
var Sd, de, Cd, Vo, b_, Ed = {}, Ad = [], yg = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function It(e, t) {
  for (var n in t)
    e[n] = t[n];
  return e;
}
function Md(e) {
  var t = e.parentNode;
  t && t.removeChild(e);
}
function _a(e, t, n, o, s) {
  var r = { type: e, props: t, key: n, ref: o, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: s ?? ++Cd };
  return s == null && de.vnode != null && de.vnode(r), r;
}
function nc(e) {
  return e.children;
}
function zo(e, t) {
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
function Td(e) {
  var t, n;
  if ((e = e.__) != null && e.__c != null) {
    for (e.__e = e.__c.base = null, t = 0; t < e.__k.length; t++)
      if ((n = e.__k[t]) != null && n.__e != null) {
        e.__e = e.__c.base = n.__e;
        break;
      }
    return Td(e);
  }
}
function w_(e) {
  (!e.__d && (e.__d = !0) && Vo.push(e) && !is.__r++ || b_ !== de.debounceRendering) && ((b_ = de.debounceRendering) || setTimeout)(is);
}
function is() {
  for (var e; is.__r = Vo.length; )
    e = Vo.sort(function(t, n) {
      return t.__v.__b - n.__v.__b;
    }), Vo = [], e.some(function(t) {
      var n, o, s, r, l, a;
      t.__d && (l = (r = (n = t).__v).__e, (a = n.__P) && (o = [], (s = It({}, r)).__v = r.__v + 1, Nd(a, r, s, n.__n, a.ownerSVGElement !== void 0, r.__h != null ? [l] : null, o, l ?? wr(r), r.__h), wg(o, r), r.__e != l && Td(r)));
    });
}
function Ld(e, t, n, o, s, r, l, a, _, d) {
  var i, h, f, c, u, y, p, m = o && o.__k || Ad, v = m.length;
  for (n.__k = [], i = 0; i < t.length; i++)
    if ((c = n.__k[i] = (c = t[i]) == null || typeof c == "boolean" ? null : typeof c == "string" || typeof c == "number" || typeof c == "bigint" ? _a(null, c, null, null, c) : Array.isArray(c) ? _a(nc, { children: c }, null, null, null) : c.__b > 0 ? _a(c.type, c.props, c.key, c.ref ? c.ref : null, c.__v) : c) != null) {
      if (c.__ = n, c.__b = n.__b + 1, (f = m[i]) === null || f && c.key == f.key && c.type === f.type)
        m[i] = void 0;
      else
        for (h = 0; h < v; h++) {
          if ((f = m[h]) && c.key == f.key && c.type === f.type) {
            m[h] = void 0;
            break;
          }
          f = null;
        }
      Nd(e, c, f = f || Ed, s, r, l, a, _, d), u = c.__e, (h = c.ref) && f.ref != h && (p || (p = []), f.ref && p.push(f.ref, null, c), p.push(h, c.__c || u, c)), u != null ? (y == null && (y = u), typeof c.type == "function" && c.__k === f.__k ? c.__d = _ = Dd(c, _, e) : _ = Od(e, c, f, m, u, _), typeof n.type == "function" && (n.__d = _)) : _ && f.__e == _ && _.parentNode != e && (_ = wr(f));
    }
  for (n.__e = y, i = v; i--; )
    m[i] != null && Rd(m[i], m[i]);
  if (p)
    for (i = 0; i < p.length; i++)
      Pd(p[i], p[++i], p[++i]);
}
function Dd(e, t, n) {
  for (var o, s = e.__k, r = 0; s && r < s.length; r++)
    (o = s[r]) && (o.__ = e, t = typeof o.type == "function" ? Dd(o, t, n) : Od(n, o, o, s, o.__e, t));
  return t;
}
function Od(e, t, n, o, s, r) {
  var l, a, _;
  if (t.__d !== void 0)
    l = t.__d, t.__d = void 0;
  else if (n == null || s != r || s.parentNode == null)
    e:
      if (r == null || r.parentNode !== e)
        e.appendChild(s), l = null;
      else {
        for (a = r, _ = 0; (a = a.nextSibling) && _ < o.length; _ += 2)
          if (a == s)
            break e;
        e.insertBefore(s, r), l = r;
      }
  return l !== void 0 ? l : s.nextSibling;
}
function bg(e, t, n, o, s) {
  var r;
  for (r in n)
    r === "children" || r === "key" || r in t || ss(e, r, null, n[r], o);
  for (r in t)
    s && typeof t[r] != "function" || r === "children" || r === "key" || r === "value" || r === "checked" || n[r] === t[r] || ss(e, r, t[r], n[r], o);
}
function $_(e, t, n) {
  t[0] === "-" ? e.setProperty(t, n) : e[t] = n == null ? "" : typeof n != "number" || yg.test(t) ? n : n + "px";
}
function ss(e, t, n, o, s) {
  var r;
  e:
    if (t === "style")
      if (typeof n == "string")
        e.style.cssText = n;
      else {
        if (typeof o == "string" && (e.style.cssText = o = ""), o)
          for (t in o)
            n && t in n || $_(e.style, t, "");
        if (n)
          for (t in n)
            o && n[t] === o[t] || $_(e.style, t, n[t]);
      }
    else if (t[0] === "o" && t[1] === "n")
      r = t !== (t = t.replace(/Capture$/, "")), t = t.toLowerCase() in e ? t.toLowerCase().slice(2) : t.slice(2), e.l || (e.l = {}), e.l[t + r] = n, n ? o || e.addEventListener(t, r ? x_ : k_, r) : e.removeEventListener(t, r ? x_ : k_, r);
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
function k_(e) {
  this.l[e.type + !1](de.event ? de.event(e) : e);
}
function x_(e) {
  this.l[e.type + !0](de.event ? de.event(e) : e);
}
function Nd(e, t, n, o, s, r, l, a, _) {
  var d, i, h, f, c, u, y, p, m, v, $, w, C, x, E, g = t.type;
  if (t.constructor !== void 0)
    return null;
  n.__h != null && (_ = n.__h, a = t.__e = n.__e, t.__h = null, r = [a]), (d = de.__b) && d(t);
  try {
    e:
      if (typeof g == "function") {
        if (p = t.props, m = (d = g.contextType) && o[d.__c], v = d ? m ? m.props.value : d.__ : o, n.__c ? y = (i = t.__c = n.__c).__ = i.__E : ("prototype" in g && g.prototype.render ? t.__c = i = new g(p, v) : (t.__c = i = new zo(p, v), i.constructor = g, i.render = kg), m && m.sub(i), i.props = p, i.state || (i.state = {}), i.context = v, i.__n = o, h = i.__d = !0, i.__h = [], i._sb = []), i.__s == null && (i.__s = i.state), g.getDerivedStateFromProps != null && (i.__s == i.state && (i.__s = It({}, i.__s)), It(i.__s, g.getDerivedStateFromProps(p, i.__s))), f = i.props, c = i.state, h)
          g.getDerivedStateFromProps == null && i.componentWillMount != null && i.componentWillMount(), i.componentDidMount != null && i.__h.push(i.componentDidMount);
        else {
          if (g.getDerivedStateFromProps == null && p !== f && i.componentWillReceiveProps != null && i.componentWillReceiveProps(p, v), !i.__e && i.shouldComponentUpdate != null && i.shouldComponentUpdate(p, i.__s, v) === !1 || t.__v === n.__v) {
            for (i.props = p, i.state = i.__s, t.__v !== n.__v && (i.__d = !1), i.__v = t, t.__e = n.__e, t.__k = n.__k, t.__k.forEach(function(k) {
              k && (k.__ = t);
            }), $ = 0; $ < i._sb.length; $++)
              i.__h.push(i._sb[$]);
            i._sb = [], i.__h.length && l.push(i);
            break e;
          }
          i.componentWillUpdate != null && i.componentWillUpdate(p, i.__s, v), i.componentDidUpdate != null && i.__h.push(function() {
            i.componentDidUpdate(f, c, u);
          });
        }
        if (i.context = v, i.props = p, i.__v = t, i.__P = e, w = de.__r, C = 0, "prototype" in g && g.prototype.render) {
          for (i.state = i.__s, i.__d = !1, w && w(t), d = i.render(i.props, i.state, i.context), x = 0; x < i._sb.length; x++)
            i.__h.push(i._sb[x]);
          i._sb = [];
        } else
          do
            i.__d = !1, w && w(t), d = i.render(i.props, i.state, i.context), i.state = i.__s;
          while (i.__d && ++C < 25);
        i.state = i.__s, i.getChildContext != null && (o = It(It({}, o), i.getChildContext())), h || i.getSnapshotBeforeUpdate == null || (u = i.getSnapshotBeforeUpdate(f, c)), E = d != null && d.type === nc && d.key == null ? d.props.children : d, Ld(e, Array.isArray(E) ? E : [E], t, n, o, s, r, l, a, _), i.base = t.__e, t.__h = null, i.__h.length && l.push(i), y && (i.__E = i.__ = null), i.__e = !1;
      } else
        r == null && t.__v === n.__v ? (t.__k = n.__k, t.__e = n.__e) : t.__e = $g(n.__e, t, n, o, s, r, l, _);
    (d = de.diffed) && d(t);
  } catch (k) {
    t.__v = null, (_ || r != null) && (t.__e = a, t.__h = !!_, r[r.indexOf(a)] = null), de.__e(k, t, n);
  }
}
function wg(e, t) {
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
function $g(e, t, n, o, s, r, l, a) {
  var _, d, i, h = n.props, f = t.props, c = t.type, u = 0;
  if (c === "svg" && (s = !0), r != null) {
    for (; u < r.length; u++)
      if ((_ = r[u]) && "setAttribute" in _ == !!c && (c ? _.localName === c : _.nodeType === 3)) {
        e = _, r[u] = null;
        break;
      }
  }
  if (e == null) {
    if (c === null)
      return document.createTextNode(f);
    e = s ? document.createElementNS("http://www.w3.org/2000/svg", c) : document.createElement(c, f.is && f), r = null, a = !1;
  }
  if (c === null)
    h === f || a && e.data === f || (e.data = f);
  else {
    if (r = r && Sd.call(e.childNodes), d = (h = n.props || Ed).dangerouslySetInnerHTML, i = f.dangerouslySetInnerHTML, !a) {
      if (r != null)
        for (h = {}, u = 0; u < e.attributes.length; u++)
          h[e.attributes[u].name] = e.attributes[u].value;
      (i || d) && (i && (d && i.__html == d.__html || i.__html === e.innerHTML) || (e.innerHTML = i && i.__html || ""));
    }
    if (bg(e, f, h, s, a), i)
      t.__k = [];
    else if (u = t.props.children, Ld(e, Array.isArray(u) ? u : [u], t, n, o, s && c !== "foreignObject", r, l, r ? r[0] : n.__k && wr(n, 0), a), r != null)
      for (u = r.length; u--; )
        r[u] != null && Md(r[u]);
    a || ("value" in f && (u = f.value) !== void 0 && (u !== e.value || c === "progress" && !u || c === "option" && u !== h.value) && ss(e, "value", u, h.value, !1), "checked" in f && (u = f.checked) !== void 0 && u !== e.checked && ss(e, "checked", u, h.checked, !1));
  }
  return e;
}
function Pd(e, t, n) {
  try {
    typeof e == "function" ? e(t) : e.current = t;
  } catch (o) {
    de.__e(o, n);
  }
}
function Rd(e, t, n) {
  var o, s;
  if (de.unmount && de.unmount(e), (o = e.ref) && (o.current && o.current !== e.__e || Pd(o, null, t)), (o = e.__c) != null) {
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
      o[s] && Rd(o[s], t, n || typeof e.type != "function");
  n || e.__e == null || Md(e.__e), e.__ = e.__e = e.__d = void 0;
}
function kg(e, t, n) {
  return this.constructor(e, n);
}
Sd = Ad.slice, de = { __e: function(e, t, n, o) {
  for (var s, r, l; t = t.__; )
    if ((s = t.__c) && !s.__)
      try {
        if ((r = s.constructor) && r.getDerivedStateFromError != null && (s.setState(r.getDerivedStateFromError(e)), l = s.__d), s.componentDidCatch != null && (s.componentDidCatch(e, o || {}), l = s.__d), l)
          return s.__E = s;
      } catch (a) {
        e = a;
      }
  throw e;
} }, Cd = 0, zo.prototype.setState = function(e, t) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = It({}, this.state), typeof e == "function" && (e = e(It({}, n), this.props)), e && It(n, e), e != null && this.__v && (t && this._sb.push(t), w_(this));
}, zo.prototype.forceUpdate = function(e) {
  this.__v && (this.__e = !0, e && this.__h.push(e), w_(this));
}, zo.prototype.render = nc, Vo = [], is.__r = 0;
var xg = 0;
function bi(e, t, n, o, s) {
  var r, l, a = {};
  for (l in t)
    l == "ref" ? r = t[l] : a[l] = t[l];
  var _ = { type: e, props: a, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: --xg, __source: s, __self: o };
  if (typeof e == "function" && (r = e.defaultProps))
    for (l in r)
      a[l] === void 0 && (a[l] = r[l]);
  return de.vnode && de.vnode(_), _;
}
var Ci;
let Sg = (Ci = class extends zo {
  render() {
    const { percent: t, circleSize: n, circleBorderSize: o, circleBgColor: s, circleColor: r } = this.props, l = (n - o) / 2, a = n / 2;
    return /* @__PURE__ */ bi("svg", { width: n, height: n, class: "progress-circle", children: [
      /* @__PURE__ */ bi("circle", { cx: a, cy: a, r: l, stroke: s, "stroke-width": o }),
      /* @__PURE__ */ bi("circle", { cx: a, cy: a, r: l, stroke: r, "stroke-dasharray": Math.PI * l * 2, "stroke-dashoffset": Math.PI * l * 2 * (100 - t) / 100, "stroke-width": o }),
      /* @__PURE__ */ bi("text", { x: a, y: a + o / 4, "dominant-baseline": "middle", style: { fontSize: `${l}px` }, children: Math.round(t) })
    ] });
  }
}, N(Ci, "NAME", "zui.progress-circle"), N(Ci, "defaultProps", {
  circleSize: 24,
  circleBorderSize: 2,
  circleBgColor: "var(--progress-circle-bg)",
  circleColor: "var(--progress-circle-bar-color)"
}), Ci);
class S_ extends Pe {
}
N(S_, "NAME", "table-sorter"), N(S_, "Component", Sg);
function Cg(e) {
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
function Eg(e) {
  document.readyState !== "loading" ? e() : document.addEventListener("DOMContentLoaded", e);
}
function Ag(e, t) {
  const n = typeof e == "string" ? document.querySelector(e) : e;
  if (!n)
    return !1;
  const o = n.getBoundingClientRect(), s = window.innerHeight || document.documentElement.clientHeight, r = window.innerWidth || document.documentElement.clientWidth;
  if (t != null && t.fullyCheck)
    return o.left >= 0 && o.top >= 0 && o.left + o.width <= r && o.top + o.height <= s;
  const l = o.top <= s && o.top + o.height >= 0, a = o.left <= r && o.left + o.width >= 0;
  return l && a;
}
const Yk = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  classes: j,
  domReady: Eg,
  getClassList: Ul,
  isElementVisible: Ag,
  selectText: Cg
}, Symbol.toStringTag, { value: "Module" }));
let Mg = (e = 21) => crypto.getRandomValues(new Uint8Array(e)).reduce((t, n) => (n &= 63, n < 36 ? t += n.toString(36) : n < 62 ? t += (n - 26).toString(36).toUpperCase() : n > 62 ? t += "-" : t += "_", t), "");
var Yr, Et, Qe, Nn, Pn, Ni;
const Hc = class {
  /**
   * Create new store instance
   * @param name Name of store
   * @param type Store type
   */
  constructor(t, n = "local") {
    O(this, Pn);
    O(this, Yr, void 0);
    O(this, Et, void 0);
    O(this, Qe, void 0);
    O(this, Nn, void 0);
    H(this, Yr, n), H(this, Et, `ZUI_STORE:${t ?? Mg()}`), H(this, Qe, n === "local" ? localStorage : sessionStorage);
  }
  /**
   * Get store type
   */
  get type() {
    return b(this, Yr);
  }
  /**
   * Get session type store instance
   */
  get session() {
    return this.type === "session" ? this : (b(this, Nn) || H(this, Nn, new Hc(b(this, Et), "session")), b(this, Nn));
  }
  /**
   * Get value from store
   * @param key Key to get
   * @param defaultValue default value to return if key is not found
   * @returns Value of key or defaultValue if key is not found
   */
  get(t, n) {
    const o = b(this, Qe).getItem(z(this, Pn, Ni).call(this, t));
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
    b(this, Qe).setItem(z(this, Pn, Ni).call(this, t), JSON.stringify(n));
  }
  /**
   * Remove key-value pair from store
   * @param key Key to remove
   */
  remove(t) {
    b(this, Qe).removeItem(z(this, Pn, Ni).call(this, t));
  }
  /**
   * Iterate all key-value pairs in store
   * @param callback Callback function to call for each key-value pair in the store
   */
  each(t) {
    for (let n = 0; n < b(this, Qe).length; n++) {
      const o = b(this, Qe).key(n);
      if (o != null && o.startsWith(b(this, Et))) {
        const s = b(this, Qe).getItem(o);
        typeof s == "string" && t(o.substring(b(this, Et).length + 1), JSON.parse(s));
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
let ls = Hc;
Yr = new WeakMap(), Et = new WeakMap(), Qe = new WeakMap(), Nn = new WeakMap(), Pn = new WeakSet(), Ni = function(t) {
  return `${b(this, Et)}:${t}`;
};
const Tg = new ls("DEFAULT");
function Lg(e, t = "local") {
  return new ls(e, t);
}
Object.assign(Tg, { create: Lg });
var Hd, he, Wd, Yo, C_, Id = {}, Ud = [], Dg = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function Ut(e, t) {
  for (var n in t)
    e[n] = t[n];
  return e;
}
function Bd(e) {
  var t = e.parentNode;
  t && t.removeChild(e);
}
function fa(e, t, n, o, s) {
  var r = { type: e, props: t, key: n, ref: o, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: s ?? ++Wd };
  return s == null && he.vnode != null && he.vnode(r), r;
}
function oc(e) {
  return e.children;
}
function qo(e, t) {
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
function Fd(e) {
  var t, n;
  if ((e = e.__) != null && e.__c != null) {
    for (e.__e = e.__c.base = null, t = 0; t < e.__k.length; t++)
      if ((n = e.__k[t]) != null && n.__e != null) {
        e.__e = e.__c.base = n.__e;
        break;
      }
    return Fd(e);
  }
}
function E_(e) {
  (!e.__d && (e.__d = !0) && Yo.push(e) && !as.__r++ || C_ !== he.debounceRendering) && ((C_ = he.debounceRendering) || setTimeout)(as);
}
function as() {
  for (var e; as.__r = Yo.length; )
    e = Yo.sort(function(t, n) {
      return t.__v.__b - n.__v.__b;
    }), Yo = [], e.some(function(t) {
      var n, o, s, r, l, a;
      t.__d && (l = (r = (n = t).__v).__e, (a = n.__P) && (o = [], (s = Ut({}, r)).__v = r.__v + 1, Yd(a, r, s, n.__n, a.ownerSVGElement !== void 0, r.__h != null ? [l] : null, o, l ?? $r(r), r.__h), Ng(o, r), r.__e != l && Fd(r)));
    });
}
function jd(e, t, n, o, s, r, l, a, _, d) {
  var i, h, f, c, u, y, p, m = o && o.__k || Ud, v = m.length;
  for (n.__k = [], i = 0; i < t.length; i++)
    if ((c = n.__k[i] = (c = t[i]) == null || typeof c == "boolean" ? null : typeof c == "string" || typeof c == "number" || typeof c == "bigint" ? fa(null, c, null, null, c) : Array.isArray(c) ? fa(oc, { children: c }, null, null, null) : c.__b > 0 ? fa(c.type, c.props, c.key, c.ref ? c.ref : null, c.__v) : c) != null) {
      if (c.__ = n, c.__b = n.__b + 1, (f = m[i]) === null || f && c.key == f.key && c.type === f.type)
        m[i] = void 0;
      else
        for (h = 0; h < v; h++) {
          if ((f = m[h]) && c.key == f.key && c.type === f.type) {
            m[h] = void 0;
            break;
          }
          f = null;
        }
      Yd(e, c, f = f || Id, s, r, l, a, _, d), u = c.__e, (h = c.ref) && f.ref != h && (p || (p = []), f.ref && p.push(f.ref, null, c), p.push(h, c.__c || u, c)), u != null ? (y == null && (y = u), typeof c.type == "function" && c.__k === f.__k ? c.__d = _ = Vd(c, _, e) : _ = zd(e, c, f, m, u, _), typeof n.type == "function" && (n.__d = _)) : _ && f.__e == _ && _.parentNode != e && (_ = $r(f));
    }
  for (n.__e = y, i = v; i--; )
    m[i] != null && Gd(m[i], m[i]);
  if (p)
    for (i = 0; i < p.length; i++)
      qd(p[i], p[++i], p[++i]);
}
function Vd(e, t, n) {
  for (var o, s = e.__k, r = 0; s && r < s.length; r++)
    (o = s[r]) && (o.__ = e, t = typeof o.type == "function" ? Vd(o, t, n) : zd(n, o, o, s, o.__e, t));
  return t;
}
function zd(e, t, n, o, s, r) {
  var l, a, _;
  if (t.__d !== void 0)
    l = t.__d, t.__d = void 0;
  else if (n == null || s != r || s.parentNode == null)
    e:
      if (r == null || r.parentNode !== e)
        e.appendChild(s), l = null;
      else {
        for (a = r, _ = 0; (a = a.nextSibling) && _ < o.length; _ += 2)
          if (a == s)
            break e;
        e.insertBefore(s, r), l = r;
      }
  return l !== void 0 ? l : s.nextSibling;
}
function Og(e, t, n, o, s) {
  var r;
  for (r in n)
    r === "children" || r === "key" || r in t || cs(e, r, null, n[r], o);
  for (r in t)
    s && typeof t[r] != "function" || r === "children" || r === "key" || r === "value" || r === "checked" || n[r] === t[r] || cs(e, r, t[r], n[r], o);
}
function A_(e, t, n) {
  t[0] === "-" ? e.setProperty(t, n) : e[t] = n == null ? "" : typeof n != "number" || Dg.test(t) ? n : n + "px";
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
            n && t in n || A_(e.style, t, "");
        if (n)
          for (t in n)
            o && n[t] === o[t] || A_(e.style, t, n[t]);
      }
    else if (t[0] === "o" && t[1] === "n")
      r = t !== (t = t.replace(/Capture$/, "")), t = t.toLowerCase() in e ? t.toLowerCase().slice(2) : t.slice(2), e.l || (e.l = {}), e.l[t + r] = n, n ? o || e.addEventListener(t, r ? T_ : M_, r) : e.removeEventListener(t, r ? T_ : M_, r);
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
function M_(e) {
  this.l[e.type + !1](he.event ? he.event(e) : e);
}
function T_(e) {
  this.l[e.type + !0](he.event ? he.event(e) : e);
}
function Yd(e, t, n, o, s, r, l, a, _) {
  var d, i, h, f, c, u, y, p, m, v, $, w, C, x, E, g = t.type;
  if (t.constructor !== void 0)
    return null;
  n.__h != null && (_ = n.__h, a = t.__e = n.__e, t.__h = null, r = [a]), (d = he.__b) && d(t);
  try {
    e:
      if (typeof g == "function") {
        if (p = t.props, m = (d = g.contextType) && o[d.__c], v = d ? m ? m.props.value : d.__ : o, n.__c ? y = (i = t.__c = n.__c).__ = i.__E : ("prototype" in g && g.prototype.render ? t.__c = i = new g(p, v) : (t.__c = i = new qo(p, v), i.constructor = g, i.render = Rg), m && m.sub(i), i.props = p, i.state || (i.state = {}), i.context = v, i.__n = o, h = i.__d = !0, i.__h = [], i._sb = []), i.__s == null && (i.__s = i.state), g.getDerivedStateFromProps != null && (i.__s == i.state && (i.__s = Ut({}, i.__s)), Ut(i.__s, g.getDerivedStateFromProps(p, i.__s))), f = i.props, c = i.state, h)
          g.getDerivedStateFromProps == null && i.componentWillMount != null && i.componentWillMount(), i.componentDidMount != null && i.__h.push(i.componentDidMount);
        else {
          if (g.getDerivedStateFromProps == null && p !== f && i.componentWillReceiveProps != null && i.componentWillReceiveProps(p, v), !i.__e && i.shouldComponentUpdate != null && i.shouldComponentUpdate(p, i.__s, v) === !1 || t.__v === n.__v) {
            for (i.props = p, i.state = i.__s, t.__v !== n.__v && (i.__d = !1), i.__v = t, t.__e = n.__e, t.__k = n.__k, t.__k.forEach(function(k) {
              k && (k.__ = t);
            }), $ = 0; $ < i._sb.length; $++)
              i.__h.push(i._sb[$]);
            i._sb = [], i.__h.length && l.push(i);
            break e;
          }
          i.componentWillUpdate != null && i.componentWillUpdate(p, i.__s, v), i.componentDidUpdate != null && i.__h.push(function() {
            i.componentDidUpdate(f, c, u);
          });
        }
        if (i.context = v, i.props = p, i.__v = t, i.__P = e, w = he.__r, C = 0, "prototype" in g && g.prototype.render) {
          for (i.state = i.__s, i.__d = !1, w && w(t), d = i.render(i.props, i.state, i.context), x = 0; x < i._sb.length; x++)
            i.__h.push(i._sb[x]);
          i._sb = [];
        } else
          do
            i.__d = !1, w && w(t), d = i.render(i.props, i.state, i.context), i.state = i.__s;
          while (i.__d && ++C < 25);
        i.state = i.__s, i.getChildContext != null && (o = Ut(Ut({}, o), i.getChildContext())), h || i.getSnapshotBeforeUpdate == null || (u = i.getSnapshotBeforeUpdate(f, c)), E = d != null && d.type === oc && d.key == null ? d.props.children : d, jd(e, Array.isArray(E) ? E : [E], t, n, o, s, r, l, a, _), i.base = t.__e, t.__h = null, i.__h.length && l.push(i), y && (i.__E = i.__ = null), i.__e = !1;
      } else
        r == null && t.__v === n.__v ? (t.__k = n.__k, t.__e = n.__e) : t.__e = Pg(n.__e, t, n, o, s, r, l, _);
    (d = he.diffed) && d(t);
  } catch (k) {
    t.__v = null, (_ || r != null) && (t.__e = a, t.__h = !!_, r[r.indexOf(a)] = null), he.__e(k, t, n);
  }
}
function Ng(e, t) {
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
function Pg(e, t, n, o, s, r, l, a) {
  var _, d, i, h = n.props, f = t.props, c = t.type, u = 0;
  if (c === "svg" && (s = !0), r != null) {
    for (; u < r.length; u++)
      if ((_ = r[u]) && "setAttribute" in _ == !!c && (c ? _.localName === c : _.nodeType === 3)) {
        e = _, r[u] = null;
        break;
      }
  }
  if (e == null) {
    if (c === null)
      return document.createTextNode(f);
    e = s ? document.createElementNS("http://www.w3.org/2000/svg", c) : document.createElement(c, f.is && f), r = null, a = !1;
  }
  if (c === null)
    h === f || a && e.data === f || (e.data = f);
  else {
    if (r = r && Hd.call(e.childNodes), d = (h = n.props || Id).dangerouslySetInnerHTML, i = f.dangerouslySetInnerHTML, !a) {
      if (r != null)
        for (h = {}, u = 0; u < e.attributes.length; u++)
          h[e.attributes[u].name] = e.attributes[u].value;
      (i || d) && (i && (d && i.__html == d.__html || i.__html === e.innerHTML) || (e.innerHTML = i && i.__html || ""));
    }
    if (Og(e, f, h, s, a), i)
      t.__k = [];
    else if (u = t.props.children, jd(e, Array.isArray(u) ? u : [u], t, n, o, s && c !== "foreignObject", r, l, r ? r[0] : n.__k && $r(n, 0), a), r != null)
      for (u = r.length; u--; )
        r[u] != null && Bd(r[u]);
    a || ("value" in f && (u = f.value) !== void 0 && (u !== e.value || c === "progress" && !u || c === "option" && u !== h.value) && cs(e, "value", u, h.value, !1), "checked" in f && (u = f.checked) !== void 0 && u !== e.checked && cs(e, "checked", u, h.checked, !1));
  }
  return e;
}
function qd(e, t, n) {
  try {
    typeof e == "function" ? e(t) : e.current = t;
  } catch (o) {
    he.__e(o, n);
  }
}
function Gd(e, t, n) {
  var o, s;
  if (he.unmount && he.unmount(e), (o = e.ref) && (o.current && o.current !== e.__e || qd(o, null, t)), (o = e.__c) != null) {
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
      o[s] && Gd(o[s], t, n || typeof e.type != "function");
  n || e.__e == null || Bd(e.__e), e.__ = e.__e = e.__d = void 0;
}
function Rg(e, t, n) {
  return this.constructor(e, n);
}
Hd = Ud.slice, he = { __e: function(e, t, n, o) {
  for (var s, r, l; t = t.__; )
    if ((s = t.__c) && !s.__)
      try {
        if ((r = s.constructor) && r.getDerivedStateFromError != null && (s.setState(r.getDerivedStateFromError(e)), l = s.__d), s.componentDidCatch != null && (s.componentDidCatch(e, o || {}), l = s.__d), l)
          return s.__E = s;
      } catch (a) {
        e = a;
      }
  throw e;
} }, Wd = 0, qo.prototype.setState = function(e, t) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = Ut({}, this.state), typeof e == "function" && (e = e(Ut({}, n), this.props)), e && Ut(n, e), e != null && this.__v && (t && this._sb.push(t), E_(this));
}, qo.prototype.forceUpdate = function(e) {
  this.__v && (this.__e = !0, e && this.__h.push(e), E_(this));
}, qo.prototype.render = oc, Yo = [], as.__r = 0;
var Hg = 0;
function ua(e, t, n, o, s) {
  var r, l, a = {};
  for (l in t)
    l == "ref" ? r = t[l] : a[l] = t[l];
  var _ = { type: e, props: a, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: --Hg, __source: s, __self: o };
  if (typeof e == "function" && (r = e.defaultProps))
    for (l in r)
      a[l] === void 0 && (a[l] = r[l]);
  return he.vnode && he.vnode(_), _;
}
function Wg(e) {
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
function Ig(e) {
  const [t, n, o] = typeof e == "string" ? Wg(e) : e;
  return t * 0.299 + n * 0.587 + o * 0.114 > 186;
}
function L_(e, t) {
  return Ig(e) ? (t == null ? void 0 : t.dark) ?? "#333333" : (t == null ? void 0 : t.light) ?? "#ffffff";
}
function D_(e, t = 255) {
  return Math.min(Math.max(e, 0), t);
}
function Ug(e, t, n) {
  e = e % 360 / 360, t = D_(t), n = D_(n);
  const o = n <= 0.5 ? n * (t + 1) : n + t - n * t, s = n * 2 - o, r = (l) => (l = l < 0 ? l + 1 : l > 1 ? l - 1 : l, l * 6 < 1 ? s + (o - s) * l * 6 : l * 2 < 1 ? o : l * 3 < 2 ? s + (o - s) * (2 / 3 - l) * 6 : s);
  return [
    r(e + 1 / 3) * 255,
    r(e) * 255,
    r(e - 1 / 3) * 255
  ];
}
function Bg(e) {
  let t = 0;
  if (typeof e != "string" && (e = String(e)), e && e.length)
    for (let n = 0; n < e.length; ++n)
      t += (n + 1) * e.charCodeAt(n);
  return t;
}
function Fg(e, t) {
  return /^[\u4e00-\u9fa5\s]+$/.test(e) ? e = e.length <= t ? e : e.substring(e.length - t) : /^[A-Za-z\d\s]+$/.test(e) ? e = e[0].toUpperCase() : e = e.length <= t ? e : e.substring(0, t), e;
}
let jg = class extends qo {
  render() {
    const {
      className: t,
      style: n,
      size: o = "",
      circle: s,
      rounded: r,
      background: l,
      foreColor: a,
      text: _,
      code: d,
      maxTextLength: i = 2,
      src: h,
      hueDistance: f = 43,
      saturation: c = 0.4,
      lightness: u = 0.6,
      children: y,
      ...p
    } = this.props, m = ["avatar", t], v = { ...n, background: l, color: a };
    let $ = 32;
    o && (typeof o == "number" ? (v.width = `${o}px`, v.height = `${o}px`, v.fontSize = `${Math.max(12, Math.round(o / 2))}px`, $ = o) : (m.push(`size-${o}`), $ = { xs: 20, sm: 24, lg: 48, xl: 80 }[o])), s ? m.push("circle") : r && (typeof r == "number" ? v.borderRadius = `${r}px` : m.push(`rounded-${r}`));
    let w;
    if (h)
      m.push("has-img"), w = /* @__PURE__ */ ua("img", { className: "avatar-img", src: h, alt: _ });
    else if (_ != null && _.length) {
      const C = Fg(_, i);
      if (m.push("has-text", `has-text-${C.length}`), l)
        !a && l && (v.color = L_(l));
      else {
        const E = d ?? _, g = (typeof E == "number" ? E : Bg(E)) * f % 360;
        if (v.background = `hsl(${g},${c * 100}%,${u * 100}%)`, !a) {
          const k = Ug(g, c, u);
          v.color = L_(k);
        }
      }
      let x;
      $ && $ < 14 * C.length && (x = { transform: `scale(${$ / (14 * C.length)})`, whiteSpace: "nowrap" }), w = /* @__PURE__ */ ua("div", { "data-actualSize": $, className: "avatar-text", style: x, children: C });
    }
    return /* @__PURE__ */ ua(
      "div",
      {
        className: j(m),
        style: v,
        ...p,
        children: [
          w,
          y
        ]
      }
    );
  }
};
class O_ extends Pe {
}
N(O_, "NAME", "avatar"), N(O_, "Component", jg);
class N_ extends Pe {
}
N(N_, "NAME", "btngroup"), N(N_, "Component", tc);
var jl, se, Xd, Go, P_, _s = {}, Kd = [], Vg = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function Bt(e, t) {
  for (var n in t)
    e[n] = t[n];
  return e;
}
function Zd(e) {
  var t = e.parentNode;
  t && t.removeChild(e);
}
function kr(e, t, n) {
  var o, s, r, l = {};
  for (r in t)
    r == "key" ? o = t[r] : r == "ref" ? s = t[r] : l[r] = t[r];
  if (arguments.length > 2 && (l.children = arguments.length > 3 ? jl.call(arguments, 2) : n), typeof e == "function" && e.defaultProps != null)
    for (r in e.defaultProps)
      l[r] === void 0 && (l[r] = e.defaultProps[r]);
  return Pi(e, l, o, s, null);
}
function Pi(e, t, n, o, s) {
  var r = { type: e, props: t, key: n, ref: o, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: s ?? ++Xd };
  return s == null && se.vnode != null && se.vnode(r), r;
}
function zg() {
  return { current: null };
}
function Vl(e) {
  return e.children;
}
function Xo(e, t) {
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
function Jd(e) {
  var t, n;
  if ((e = e.__) != null && e.__c != null) {
    for (e.__e = e.__c.base = null, t = 0; t < e.__k.length; t++)
      if ((n = e.__k[t]) != null && n.__e != null) {
        e.__e = e.__c.base = n.__e;
        break;
      }
    return Jd(e);
  }
}
function R_(e) {
  (!e.__d && (e.__d = !0) && Go.push(e) && !fs.__r++ || P_ !== se.debounceRendering) && ((P_ = se.debounceRendering) || setTimeout)(fs);
}
function fs() {
  for (var e; fs.__r = Go.length; )
    e = Go.sort(function(t, n) {
      return t.__v.__b - n.__v.__b;
    }), Go = [], e.some(function(t) {
      var n, o, s, r, l, a;
      t.__d && (l = (r = (n = t).__v).__e, (a = n.__P) && (o = [], (s = Bt({}, r)).__v = r.__v + 1, rc(a, r, s, n.__n, a.ownerSVGElement !== void 0, r.__h != null ? [l] : null, o, l ?? xr(r), r.__h), nh(o, r), r.__e != l && Jd(r)));
    });
}
function Qd(e, t, n, o, s, r, l, a, _, d) {
  var i, h, f, c, u, y, p, m = o && o.__k || Kd, v = m.length;
  for (n.__k = [], i = 0; i < t.length; i++)
    if ((c = n.__k[i] = (c = t[i]) == null || typeof c == "boolean" ? null : typeof c == "string" || typeof c == "number" || typeof c == "bigint" ? Pi(null, c, null, null, c) : Array.isArray(c) ? Pi(Vl, { children: c }, null, null, null) : c.__b > 0 ? Pi(c.type, c.props, c.key, c.ref ? c.ref : null, c.__v) : c) != null) {
      if (c.__ = n, c.__b = n.__b + 1, (f = m[i]) === null || f && c.key == f.key && c.type === f.type)
        m[i] = void 0;
      else
        for (h = 0; h < v; h++) {
          if ((f = m[h]) && c.key == f.key && c.type === f.type) {
            m[h] = void 0;
            break;
          }
          f = null;
        }
      rc(e, c, f = f || _s, s, r, l, a, _, d), u = c.__e, (h = c.ref) && f.ref != h && (p || (p = []), f.ref && p.push(f.ref, null, c), p.push(h, c.__c || u, c)), u != null ? (y == null && (y = u), typeof c.type == "function" && c.__k === f.__k ? c.__d = _ = eh(c, _, e) : _ = th(e, c, f, m, u, _), typeof n.type == "function" && (n.__d = _)) : _ && f.__e == _ && _.parentNode != e && (_ = xr(f));
    }
  for (n.__e = y, i = v; i--; )
    m[i] != null && rh(m[i], m[i]);
  if (p)
    for (i = 0; i < p.length; i++)
      oh(p[i], p[++i], p[++i]);
}
function eh(e, t, n) {
  for (var o, s = e.__k, r = 0; s && r < s.length; r++)
    (o = s[r]) && (o.__ = e, t = typeof o.type == "function" ? eh(o, t, n) : th(n, o, o, s, o.__e, t));
  return t;
}
function th(e, t, n, o, s, r) {
  var l, a, _;
  if (t.__d !== void 0)
    l = t.__d, t.__d = void 0;
  else if (n == null || s != r || s.parentNode == null)
    e:
      if (r == null || r.parentNode !== e)
        e.appendChild(s), l = null;
      else {
        for (a = r, _ = 0; (a = a.nextSibling) && _ < o.length; _ += 2)
          if (a == s)
            break e;
        e.insertBefore(s, r), l = r;
      }
  return l !== void 0 ? l : s.nextSibling;
}
function Yg(e, t, n, o, s) {
  var r;
  for (r in n)
    r === "children" || r === "key" || r in t || us(e, r, null, n[r], o);
  for (r in t)
    s && typeof t[r] != "function" || r === "children" || r === "key" || r === "value" || r === "checked" || n[r] === t[r] || us(e, r, t[r], n[r], o);
}
function H_(e, t, n) {
  t[0] === "-" ? e.setProperty(t, n) : e[t] = n == null ? "" : typeof n != "number" || Vg.test(t) ? n : n + "px";
}
function us(e, t, n, o, s) {
  var r;
  e:
    if (t === "style")
      if (typeof n == "string")
        e.style.cssText = n;
      else {
        if (typeof o == "string" && (e.style.cssText = o = ""), o)
          for (t in o)
            n && t in n || H_(e.style, t, "");
        if (n)
          for (t in n)
            o && n[t] === o[t] || H_(e.style, t, n[t]);
      }
    else if (t[0] === "o" && t[1] === "n")
      r = t !== (t = t.replace(/Capture$/, "")), t = t.toLowerCase() in e ? t.toLowerCase().slice(2) : t.slice(2), e.l || (e.l = {}), e.l[t + r] = n, n ? o || e.addEventListener(t, r ? I_ : W_, r) : e.removeEventListener(t, r ? I_ : W_, r);
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
function W_(e) {
  this.l[e.type + !1](se.event ? se.event(e) : e);
}
function I_(e) {
  this.l[e.type + !0](se.event ? se.event(e) : e);
}
function rc(e, t, n, o, s, r, l, a, _) {
  var d, i, h, f, c, u, y, p, m, v, $, w, C, x, E, g = t.type;
  if (t.constructor !== void 0)
    return null;
  n.__h != null && (_ = n.__h, a = t.__e = n.__e, t.__h = null, r = [a]), (d = se.__b) && d(t);
  try {
    e:
      if (typeof g == "function") {
        if (p = t.props, m = (d = g.contextType) && o[d.__c], v = d ? m ? m.props.value : d.__ : o, n.__c ? y = (i = t.__c = n.__c).__ = i.__E : ("prototype" in g && g.prototype.render ? t.__c = i = new g(p, v) : (t.__c = i = new Xo(p, v), i.constructor = g, i.render = Gg), m && m.sub(i), i.props = p, i.state || (i.state = {}), i.context = v, i.__n = o, h = i.__d = !0, i.__h = [], i._sb = []), i.__s == null && (i.__s = i.state), g.getDerivedStateFromProps != null && (i.__s == i.state && (i.__s = Bt({}, i.__s)), Bt(i.__s, g.getDerivedStateFromProps(p, i.__s))), f = i.props, c = i.state, h)
          g.getDerivedStateFromProps == null && i.componentWillMount != null && i.componentWillMount(), i.componentDidMount != null && i.__h.push(i.componentDidMount);
        else {
          if (g.getDerivedStateFromProps == null && p !== f && i.componentWillReceiveProps != null && i.componentWillReceiveProps(p, v), !i.__e && i.shouldComponentUpdate != null && i.shouldComponentUpdate(p, i.__s, v) === !1 || t.__v === n.__v) {
            for (i.props = p, i.state = i.__s, t.__v !== n.__v && (i.__d = !1), i.__v = t, t.__e = n.__e, t.__k = n.__k, t.__k.forEach(function(k) {
              k && (k.__ = t);
            }), $ = 0; $ < i._sb.length; $++)
              i.__h.push(i._sb[$]);
            i._sb = [], i.__h.length && l.push(i);
            break e;
          }
          i.componentWillUpdate != null && i.componentWillUpdate(p, i.__s, v), i.componentDidUpdate != null && i.__h.push(function() {
            i.componentDidUpdate(f, c, u);
          });
        }
        if (i.context = v, i.props = p, i.__v = t, i.__P = e, w = se.__r, C = 0, "prototype" in g && g.prototype.render) {
          for (i.state = i.__s, i.__d = !1, w && w(t), d = i.render(i.props, i.state, i.context), x = 0; x < i._sb.length; x++)
            i.__h.push(i._sb[x]);
          i._sb = [];
        } else
          do
            i.__d = !1, w && w(t), d = i.render(i.props, i.state, i.context), i.state = i.__s;
          while (i.__d && ++C < 25);
        i.state = i.__s, i.getChildContext != null && (o = Bt(Bt({}, o), i.getChildContext())), h || i.getSnapshotBeforeUpdate == null || (u = i.getSnapshotBeforeUpdate(f, c)), E = d != null && d.type === Vl && d.key == null ? d.props.children : d, Qd(e, Array.isArray(E) ? E : [E], t, n, o, s, r, l, a, _), i.base = t.__e, t.__h = null, i.__h.length && l.push(i), y && (i.__E = i.__ = null), i.__e = !1;
      } else
        r == null && t.__v === n.__v ? (t.__k = n.__k, t.__e = n.__e) : t.__e = qg(n.__e, t, n, o, s, r, l, _);
    (d = se.diffed) && d(t);
  } catch (k) {
    t.__v = null, (_ || r != null) && (t.__e = a, t.__h = !!_, r[r.indexOf(a)] = null), se.__e(k, t, n);
  }
}
function nh(e, t) {
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
function qg(e, t, n, o, s, r, l, a) {
  var _, d, i, h = n.props, f = t.props, c = t.type, u = 0;
  if (c === "svg" && (s = !0), r != null) {
    for (; u < r.length; u++)
      if ((_ = r[u]) && "setAttribute" in _ == !!c && (c ? _.localName === c : _.nodeType === 3)) {
        e = _, r[u] = null;
        break;
      }
  }
  if (e == null) {
    if (c === null)
      return document.createTextNode(f);
    e = s ? document.createElementNS("http://www.w3.org/2000/svg", c) : document.createElement(c, f.is && f), r = null, a = !1;
  }
  if (c === null)
    h === f || a && e.data === f || (e.data = f);
  else {
    if (r = r && jl.call(e.childNodes), d = (h = n.props || _s).dangerouslySetInnerHTML, i = f.dangerouslySetInnerHTML, !a) {
      if (r != null)
        for (h = {}, u = 0; u < e.attributes.length; u++)
          h[e.attributes[u].name] = e.attributes[u].value;
      (i || d) && (i && (d && i.__html == d.__html || i.__html === e.innerHTML) || (e.innerHTML = i && i.__html || ""));
    }
    if (Yg(e, f, h, s, a), i)
      t.__k = [];
    else if (u = t.props.children, Qd(e, Array.isArray(u) ? u : [u], t, n, o, s && c !== "foreignObject", r, l, r ? r[0] : n.__k && xr(n, 0), a), r != null)
      for (u = r.length; u--; )
        r[u] != null && Zd(r[u]);
    a || ("value" in f && (u = f.value) !== void 0 && (u !== e.value || c === "progress" && !u || c === "option" && u !== h.value) && us(e, "value", u, h.value, !1), "checked" in f && (u = f.checked) !== void 0 && u !== e.checked && us(e, "checked", u, h.checked, !1));
  }
  return e;
}
function oh(e, t, n) {
  try {
    typeof e == "function" ? e(t) : e.current = t;
  } catch (o) {
    se.__e(o, n);
  }
}
function rh(e, t, n) {
  var o, s;
  if (se.unmount && se.unmount(e), (o = e.ref) && (o.current && o.current !== e.__e || oh(o, null, t)), (o = e.__c) != null) {
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
      o[s] && rh(o[s], t, n || typeof e.type != "function");
  n || e.__e == null || Zd(e.__e), e.__ = e.__e = e.__d = void 0;
}
function Gg(e, t, n) {
  return this.constructor(e, n);
}
function Xg(e, t, n) {
  var o, s, r;
  se.__ && se.__(e, t), s = (o = typeof n == "function") ? null : n && n.__k || t.__k, r = [], rc(t, e = (!o && n || t).__k = kr(Vl, null, [e]), s || _s, _s, t.ownerSVGElement !== void 0, !o && n ? [n] : s ? null : t.firstChild ? jl.call(t.childNodes) : null, r, !o && n ? n : s ? s.__e : t.firstChild, o), nh(r, e);
}
jl = Kd.slice, se = { __e: function(e, t, n, o) {
  for (var s, r, l; t = t.__; )
    if ((s = t.__c) && !s.__)
      try {
        if ((r = s.constructor) && r.getDerivedStateFromError != null && (s.setState(r.getDerivedStateFromError(e)), l = s.__d), s.componentDidCatch != null && (s.componentDidCatch(e, o || {}), l = s.__d), l)
          return s.__E = s;
      } catch (a) {
        e = a;
      }
  throw e;
} }, Xd = 0, Xo.prototype.setState = function(e, t) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = Bt({}, this.state), typeof e == "function" && (e = e(Bt({}, n), this.props)), e && Bt(n, e), e != null && this.__v && (t && this._sb.push(t), R_(this));
}, Xo.prototype.forceUpdate = function(e) {
  this.__v && (this.__e = !0, e && this.__h.push(e), R_(this));
}, Xo.prototype.render = Vl, Go = [], fs.__r = 0;
var Kg = 0;
function Z(e, t, n, o, s) {
  var r, l, a = {};
  for (l in t)
    l == "ref" ? r = t[l] : a[l] = t[l];
  var _ = { type: e, props: a, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: --Kg, __source: s, __self: o };
  if (typeof e == "function" && (r = e.defaultProps))
    for (l in r)
      a[l] === void 0 && (a[l] = r[l]);
  return se.vnode && se.vnode(_), _;
}
var ih = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, ee = {}, Zg = {
  get exports() {
    return ee;
  },
  set exports(e) {
    ee = e;
  }
};
(function(e, t) {
  (function(n, o) {
    e.exports = o();
  })(ih, function() {
    var n = 1e3, o = 6e4, s = 36e5, r = "millisecond", l = "second", a = "minute", _ = "hour", d = "day", i = "week", h = "month", f = "quarter", c = "year", u = "date", y = "Invalid Date", p = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, m = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, v = { name: "en", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), ordinal: function(L) {
      var A = ["th", "st", "nd", "rd"], S = L % 100;
      return "[" + L + (A[(S - 20) % 10] || A[S] || A[0]) + "]";
    } }, $ = function(L, A, S) {
      var D = String(L);
      return !D || D.length >= A ? L : "" + Array(A + 1 - D.length).join(S) + L;
    }, w = { s: $, z: function(L) {
      var A = -L.utcOffset(), S = Math.abs(A), D = Math.floor(S / 60), M = S % 60;
      return (A <= 0 ? "+" : "-") + $(D, 2, "0") + ":" + $(M, 2, "0");
    }, m: function L(A, S) {
      if (A.date() < S.date())
        return -L(S, A);
      var D = 12 * (S.year() - A.year()) + (S.month() - A.month()), M = A.clone().add(D, h), R = S - M < 0, P = A.clone().add(D + (R ? -1 : 1), h);
      return +(-(D + (S - M) / (R ? M - P : P - M)) || 0);
    }, a: function(L) {
      return L < 0 ? Math.ceil(L) || 0 : Math.floor(L);
    }, p: function(L) {
      return { M: h, y: c, w: i, d, D: u, h: _, m: a, s: l, ms: r, Q: f }[L] || String(L || "").toLowerCase().replace(/s$/, "");
    }, u: function(L) {
      return L === void 0;
    } }, C = "en", x = {};
    x[C] = v;
    var E = function(L) {
      return L instanceof U;
    }, g = function L(A, S, D) {
      var M;
      if (!A)
        return C;
      if (typeof A == "string") {
        var R = A.toLowerCase();
        x[R] && (M = R), S && (x[R] = S, M = R);
        var P = A.split("-");
        if (!M && P.length > 1)
          return L(P[0]);
      } else {
        var I = A.name;
        x[I] = A, M = I;
      }
      return !D && M && (C = M), M || !D && C;
    }, k = function(L, A) {
      if (E(L))
        return L.clone();
      var S = typeof A == "object" ? A : {};
      return S.date = L, S.args = arguments, new U(S);
    }, T = w;
    T.l = g, T.i = E, T.w = function(L, A) {
      return k(L, { locale: A.$L, utc: A.$u, x: A.$x, $offset: A.$offset });
    };
    var U = function() {
      function L(S) {
        this.$L = g(S.locale, null, !0), this.parse(S);
      }
      var A = L.prototype;
      return A.parse = function(S) {
        this.$d = function(D) {
          var M = D.date, R = D.utc;
          if (M === null)
            return new Date(NaN);
          if (T.u(M))
            return new Date();
          if (M instanceof Date)
            return new Date(M);
          if (typeof M == "string" && !/Z$/i.test(M)) {
            var P = M.match(p);
            if (P) {
              var I = P[2] - 1 || 0, V = (P[7] || "0").substring(0, 3);
              return R ? new Date(Date.UTC(P[1], I, P[3] || 1, P[4] || 0, P[5] || 0, P[6] || 0, V)) : new Date(P[1], I, P[3] || 1, P[4] || 0, P[5] || 0, P[6] || 0, V);
            }
          }
          return new Date(M);
        }(S), this.$x = S.x || {}, this.init();
      }, A.init = function() {
        var S = this.$d;
        this.$y = S.getFullYear(), this.$M = S.getMonth(), this.$D = S.getDate(), this.$W = S.getDay(), this.$H = S.getHours(), this.$m = S.getMinutes(), this.$s = S.getSeconds(), this.$ms = S.getMilliseconds();
      }, A.$utils = function() {
        return T;
      }, A.isValid = function() {
        return this.$d.toString() !== y;
      }, A.isSame = function(S, D) {
        var M = k(S);
        return this.startOf(D) <= M && M <= this.endOf(D);
      }, A.isAfter = function(S, D) {
        return k(S) < this.startOf(D);
      }, A.isBefore = function(S, D) {
        return this.endOf(D) < k(S);
      }, A.$g = function(S, D, M) {
        return T.u(S) ? this[D] : this.set(M, S);
      }, A.unix = function() {
        return Math.floor(this.valueOf() / 1e3);
      }, A.valueOf = function() {
        return this.$d.getTime();
      }, A.startOf = function(S, D) {
        var M = this, R = !!T.u(D) || D, P = T.p(S), I = function(K, q) {
          var ne = T.w(M.$u ? Date.UTC(M.$y, q, K) : new Date(M.$y, q, K), M);
          return R ? ne : ne.endOf(d);
        }, V = function(K, q) {
          return T.w(M.toDate()[K].apply(M.toDate("s"), (R ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(q)), M);
        }, F = this.$W, Y = this.$M, J = this.$D, W = "set" + (this.$u ? "UTC" : "");
        switch (P) {
          case c:
            return R ? I(1, 0) : I(31, 11);
          case h:
            return R ? I(1, Y) : I(0, Y + 1);
          case i:
            var G = this.$locale().weekStart || 0, Q = (F < G ? F + 7 : F) - G;
            return I(R ? J - Q : J + (6 - Q), Y);
          case d:
          case u:
            return V(W + "Hours", 0);
          case _:
            return V(W + "Minutes", 1);
          case a:
            return V(W + "Seconds", 2);
          case l:
            return V(W + "Milliseconds", 3);
          default:
            return this.clone();
        }
      }, A.endOf = function(S) {
        return this.startOf(S, !1);
      }, A.$set = function(S, D) {
        var M, R = T.p(S), P = "set" + (this.$u ? "UTC" : ""), I = (M = {}, M[d] = P + "Date", M[u] = P + "Date", M[h] = P + "Month", M[c] = P + "FullYear", M[_] = P + "Hours", M[a] = P + "Minutes", M[l] = P + "Seconds", M[r] = P + "Milliseconds", M)[R], V = R === d ? this.$D + (D - this.$W) : D;
        if (R === h || R === c) {
          var F = this.clone().set(u, 1);
          F.$d[I](V), F.init(), this.$d = F.set(u, Math.min(this.$D, F.daysInMonth())).$d;
        } else
          I && this.$d[I](V);
        return this.init(), this;
      }, A.set = function(S, D) {
        return this.clone().$set(S, D);
      }, A.get = function(S) {
        return this[T.p(S)]();
      }, A.add = function(S, D) {
        var M, R = this;
        S = Number(S);
        var P = T.p(D), I = function(Y) {
          var J = k(R);
          return T.w(J.date(J.date() + Math.round(Y * S)), R);
        };
        if (P === h)
          return this.set(h, this.$M + S);
        if (P === c)
          return this.set(c, this.$y + S);
        if (P === d)
          return I(1);
        if (P === i)
          return I(7);
        var V = (M = {}, M[a] = o, M[_] = s, M[l] = n, M)[P] || 1, F = this.$d.getTime() + S * V;
        return T.w(F, this);
      }, A.subtract = function(S, D) {
        return this.add(-1 * S, D);
      }, A.format = function(S) {
        var D = this, M = this.$locale();
        if (!this.isValid())
          return M.invalidDate || y;
        var R = S || "YYYY-MM-DDTHH:mm:ssZ", P = T.z(this), I = this.$H, V = this.$m, F = this.$M, Y = M.weekdays, J = M.months, W = function(q, ne, be, $e) {
          return q && (q[ne] || q(D, R)) || be[ne].slice(0, $e);
        }, G = function(q) {
          return T.s(I % 12 || 12, q, "0");
        }, Q = M.meridiem || function(q, ne, be) {
          var $e = q < 12 ? "AM" : "PM";
          return be ? $e.toLowerCase() : $e;
        }, K = { YY: String(this.$y).slice(-2), YYYY: this.$y, M: F + 1, MM: T.s(F + 1, 2, "0"), MMM: W(M.monthsShort, F, J, 3), MMMM: W(J, F), D: this.$D, DD: T.s(this.$D, 2, "0"), d: String(this.$W), dd: W(M.weekdaysMin, this.$W, Y, 2), ddd: W(M.weekdaysShort, this.$W, Y, 3), dddd: Y[this.$W], H: String(I), HH: T.s(I, 2, "0"), h: G(1), hh: G(2), a: Q(I, V, !0), A: Q(I, V, !1), m: String(V), mm: T.s(V, 2, "0"), s: String(this.$s), ss: T.s(this.$s, 2, "0"), SSS: T.s(this.$ms, 3, "0"), Z: P };
        return R.replace(m, function(q, ne) {
          return ne || K[q] || P.replace(":", "");
        });
      }, A.utcOffset = function() {
        return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
      }, A.diff = function(S, D, M) {
        var R, P = T.p(D), I = k(S), V = (I.utcOffset() - this.utcOffset()) * o, F = this - I, Y = T.m(this, I);
        return Y = (R = {}, R[c] = Y / 12, R[h] = Y, R[f] = Y / 3, R[i] = (F - V) / 6048e5, R[d] = (F - V) / 864e5, R[_] = F / s, R[a] = F / o, R[l] = F / n, R)[P] || F, M ? Y : T.a(Y);
      }, A.daysInMonth = function() {
        return this.endOf(h).$D;
      }, A.$locale = function() {
        return x[this.$L];
      }, A.locale = function(S, D) {
        if (!S)
          return this.$L;
        var M = this.clone(), R = g(S, D, !0);
        return R && (M.$L = R), M;
      }, A.clone = function() {
        return T.w(this.$d, this);
      }, A.toDate = function() {
        return new Date(this.valueOf());
      }, A.toJSON = function() {
        return this.isValid() ? this.toISOString() : null;
      }, A.toISOString = function() {
        return this.$d.toISOString();
      }, A.toString = function() {
        return this.$d.toUTCString();
      }, L;
    }(), B = U.prototype;
    return k.prototype = B, [["$ms", r], ["$s", l], ["$m", a], ["$H", _], ["$W", d], ["$M", h], ["$y", c], ["$D", u]].forEach(function(L) {
      B[L[1]] = function(A) {
        return this.$g(A, L[0], L[1]);
      };
    }), k.extend = function(L, A) {
      return L.$i || (L(A, U, k), L.$i = !0), k;
    }, k.locale = g, k.isDayjs = E, k.unix = function(L) {
      return k(1e3 * L);
    }, k.en = x[C], k.Ls = x, k.p = {}, k;
  });
})(Zg);
const Ea = (e = 0, t = 0) => {
  const n = [];
  for (let o = e; o <= t; o++)
    n.push(o);
  return n;
}, sh = (e, t) => {
  const n = Math.ceil(e.length / t);
  return new Array(t).fill({}).map((o, s) => e.slice(s * n, (s + 1) * n));
}, Jg = (e) => {
  const { format: t, minDate: n, maxDate: o, tagDate: s, DATEROWCOUNT: r, showOtherMonth: l, clickDay: a, selectedDate: _, handleChangePanel: d, showToday: i, handleChange: h, clickToday: f } = e, c = (T) => ee(T).isValid() ? ee(T).add(1, "months").format(t) : "", u = (T) => ee(T).isValid() ? ee(T).subtract(1, "months").format(t) : "", y = () => {
    const T = u(_ || ee().format(t));
    h(T, !1);
  }, p = () => {
    const T = c(_ || ee().format(t));
    h(T, !1);
  }, m = () => {
    h("", !0);
  }, v = () => {
    h(_, !0);
  }, $ = (T, U, B, L) => {
    const A = ee(), S = ee(_), D = new Array(T);
    for (let M = 0; M < T; M++) {
      const R = U + M + 1, P = B.set("date", R), I = L && !l ? !0 : n && P.isBefore(n, "date") || o && P.isAfter(o, "date");
      D[M] = {
        isSelected: S.isSame(B.set("date", R), "date"),
        isToday: A.isSame(P, "date"),
        isDisable: !!I,
        isTag: !!(s != null && s.includes(P.format(t))),
        date: P,
        isOtherMonth: L,
        onClick: () => I ? {} : a(P)
      };
    }
    return D;
  }, w = () => {
    const T = ee(_), U = ee(), B = _ ? T : U, L = B.set("date", 1).day(), A = L === 0 ? 6 : L - 1, S = B.subtract(1, "month"), M = Number(S.endOf("month").get("date")) - A;
    return $(A, M, S, !0);
  }, C = () => {
    const T = ee(_), U = ee(), B = _ ? T : U, L = B.set("date", 1).day(), A = L === 0 ? 6 : L - 1, S = B.endOf("month").get("date"), D = B.add(1, "month"), M = 7 * 6 % (A + S);
    return $(M, 0, D, !0);
  }, x = () => {
    const T = _, U = ee(), B = _ ? ee(T) : U, L = B.endOf("month").get("date"), A = $(L, 0, B, !1), S = w(), D = C(), M = [...S, ...A, ...D];
    return sh(M, r);
  }, E = ["一", "二", "三", "四", "五", "六", "日"], g = x(), k = _ || ee().format(t);
  return /* @__PURE__ */ Z("div", { className: j("datepicker-calendar-day"), children: [
    /* @__PURE__ */ Z("div", { className: "datepicker-calendar-bar not-hide-datepicker", children: [
      /* @__PURE__ */ Z("div", { class: "flex", children: /* @__PURE__ */ Z("button", { type: "button", className: "btn ghost", onClick: () => d("year"), children: [
        /* @__PURE__ */ Z("span", { children: ee(k).format("YYYY 年 MM 月") }),
        /* @__PURE__ */ Z("span", { class: "caret" })
      ] }) }),
      /* @__PURE__ */ Z("div", { class: "flex", children: [
        i && /* @__PURE__ */ Z("button", { type: "button", className: "btn ghost", onClick: () => {
          f();
        }, children: "今天" }),
        /* @__PURE__ */ Z("button", { type: "button", className: "btn ghost", onClick: () => y(), children: /* @__PURE__ */ Z("i", { className: "icon icon-angle-left" }) }),
        /* @__PURE__ */ Z("button", { type: "button", className: "btn ghost", onClick: () => p(), children: /* @__PURE__ */ Z("i", { className: "icon icon-angle-right" }) })
      ] })
    ] }),
    /* @__PURE__ */ Z("table", { className: "datepicker-calendar-table not-hide-datepicker", children: [
      /* @__PURE__ */ Z("thead", { className: "datepicker-calendar-thead", children: /* @__PURE__ */ Z("tr", { children: E.map((T, U) => /* @__PURE__ */ Z("th", { children: T }, U)) }) }),
      /* @__PURE__ */ Z("tbody", { className: "datepicker-calendar-tbody", children: g.map((T, U) => /* @__PURE__ */ Z("tr", { children: T.map((B, L) => {
        const A = ["text-center"];
        return B.isToday && A.push("datepicker-calendar-today"), B.isSelected && A.push("datepicker-calendar-selected-date"), B.isOtherMonth && A.push("datepicker-calendar-other-month"), B.isTag && A.push("datepicker-calendar-tag"), /* @__PURE__ */ Z("td", { className: j(A), children: /* @__PURE__ */ Z("div", { className: j("btn", "ghost", "datepicker-calendar-date", B.isDisable ? "disabled" : ""), onClick: B.onClick, children: !l && B.isOtherMonth ? "" : ee(B.date).format("DD") }) }, L);
      }) }, U)) })
    ] }),
    /* @__PURE__ */ Z("div", { class: "datepicker-calendar-footer text-right mt-1", children: [
      /* @__PURE__ */ Z("button", { type: "button", className: "btn ghost text-primary", onClick: m, children: /* @__PURE__ */ Z("span", { children: "清除" }) }),
      /* @__PURE__ */ Z("button", { type: "button", className: "btn ghost text-primary", onClick: v, children: /* @__PURE__ */ Z("span", { children: "确认" }) })
    ] })
  ] });
};
const Qg = (e) => {
  const { format: t, selectedDate: n, minDate: o, maxDate: s, year: r, handleChangeMonth: l } = e, a = ee(o).format("M"), _ = ee(s).format("M"), d = sh(Ea(1, 12), 3), i = (h, f) => {
    f || l(h);
  };
  return /* @__PURE__ */ Z("div", { className: j("datepicker-calendar-month", "not-hide-datepicker"), children: /* @__PURE__ */ Z("table", { className: "datepicker-calendar-month-table", children: /* @__PURE__ */ Z("tbody", { className: "datepicker-calendar-month-table-body", children: d.map((h, f) => /* @__PURE__ */ Z("tr", { children: h.map((c, u) => {
    const y = ["text-center"], p = ee(`${r}-${c}-01`).format(t), m = !!(a && ee(n).isBefore(a) || _ && ee(n).isBefore(_));
    return /* @__PURE__ */ Z("td", { className: j(y), children: /* @__PURE__ */ Z("div", { className: j("btn", "size-sm", "ghost", "datepicker-calendar-month", m ? "disabled" : ""), onClick: () => {
      i(p, m);
    }, children: [
      ee(p).format("MM"),
      " 月"
    ] }) }, u);
  }) }, f)) }) }) });
}, ey = (e) => {
  const { selectedDate: t, handleChangeMonth: n } = e;
  setTimeout(() => {
    const l = document.getElementsByClassName("datepicker-accordion");
    l != null && l.length && (l[0].scrollTop = 2400);
  }, 800);
  const o = ee(t).year(), s = [...Ea(o - 100, o), ...Ea(o + 1, o + 100)], r = (l, a) => {
    var i, h, f;
    if (!(l != null && l.target))
      return;
    const _ = document.querySelectorAll(".datepicker-accordion > ul > li > .datepicker-accordion-title");
    for (let c = 0; c < _.length; c++)
      (i = _[c].nextElementSibling) != null && i.classList.contains("hidden") || (h = _[c].nextElementSibling) == null || h.classList.add("hidden");
    (f = l.target.nextElementSibling) == null || f.classList.toggle("hidden");
    const d = document.querySelector(".datepicker-accordion");
    d && (d.scrollTop + d.clientHeight === d.scrollHeight ? d.scrollTop = 0 : a < o ? d.scrollTop = d.scrollTop - 30 : d.scrollTop = d.scrollTop + 30);
  };
  return /* @__PURE__ */ Z("div", { class: "datepicker-accordion scroll-smooth not-hide-datepicker", children: /* @__PURE__ */ Z("ul", { children: s.map((l, a) => /* @__PURE__ */ Z("li", { id: o === l ? "selected" : "", children: [
    /* @__PURE__ */ Z("div", { class: "datepicker-accordion-title", onClick: (_) => r(_, l), children: l }),
    /* @__PURE__ */ Z("div", { className: j("datepicker-accordion-content", o === l ? "" : "hidden"), children: kr(Qg, {
      ...e,
      year: l,
      handleChangeMonth: n
    }) }, a)
  ] })) }) });
};
class ty extends Xo {
  constructor() {
    super(...arguments);
    N(this, "DATEROWCOUNT", 6);
    N(this, "ref", zg());
    N(this, "state", {
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
    const o = n === "subtract" ? ee(this.state.selectedDate).subtract(1, "year").startOf("year").format(this.props.format) : ee(this.state.selectedDate).add(1, "year").startOf("year").format(this.props.format);
    this.handleChange(o);
  }
  clickDay(n) {
    const o = ee(n).format(this.props.format);
    this.handleChange(o);
  }
  clickToday() {
    this.handleChange(ee().format(this.props.format));
  }
  renderPanel() {
    return this.state.type === "day" ? kr(Jg, {
      ...this.props,
      handleChange: this.handleChange.bind(this),
      handleChangePanel: this.handleChangePanel.bind(this),
      clickToday: this.clickToday.bind(this),
      clickDay: this.clickDay.bind(this),
      selectedDate: this.state.selectedDate,
      DATEROWCOUNT: this.DATEROWCOUNT
    }) : kr(ey, {
      ...this.props,
      selectedDate: this.state.selectedDate,
      handleChangeMonth: this.handleChangeMonth.bind(this)
    });
  }
  render() {
    const { className: n } = this.props;
    return /* @__PURE__ */ Z("div", { className: j("datepicker-calendar", n), ref: this.ref, children: this.renderPanel() });
  }
}
function pi(e) {
  return e.split("-")[1];
}
function ic(e) {
  return e === "y" ? "height" : "width";
}
function ro(e) {
  return e.split("-")[0];
}
function zl(e) {
  return ["top", "bottom"].includes(ro(e)) ? "x" : "y";
}
function U_(e, t, n) {
  let {
    reference: o,
    floating: s
  } = e;
  const r = o.x + o.width / 2 - s.width / 2, l = o.y + o.height / 2 - s.height / 2, a = zl(t), _ = ic(a), d = o[_] / 2 - s[_] / 2, i = ro(t), h = a === "x";
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
  switch (pi(t)) {
    case "start":
      f[a] -= d * (n && h ? -1 : 1);
      break;
    case "end":
      f[a] += d * (n && h ? -1 : 1);
      break;
  }
  return f;
}
const ny = async (e, t, n) => {
  const {
    placement: o = "bottom",
    strategy: s = "absolute",
    middleware: r = [],
    platform: l
  } = n, a = r.filter(Boolean), _ = await (l.isRTL == null ? void 0 : l.isRTL(t));
  let d = await l.getElementRects({
    reference: e,
    floating: t,
    strategy: s
  }), {
    x: i,
    y: h
  } = U_(d, o, _), f = o, c = {}, u = 0;
  for (let y = 0; y < a.length; y++) {
    const {
      name: p,
      fn: m
    } = a[y], {
      x: v,
      y: $,
      data: w,
      reset: C
    } = await m({
      x: i,
      y: h,
      initialPlacement: o,
      placement: f,
      strategy: s,
      middlewareData: c,
      rects: d,
      platform: l,
      elements: {
        reference: e,
        floating: t
      }
    });
    if (i = v ?? i, h = $ ?? h, c = {
      ...c,
      [p]: {
        ...c[p],
        ...w
      }
    }, C && u <= 50) {
      u++, typeof C == "object" && (C.placement && (f = C.placement), C.rects && (d = C.rects === !0 ? await l.getElementRects({
        reference: e,
        floating: t,
        strategy: s
      }) : C.rects), {
        x: i,
        y: h
      } = U_(d, f, _)), y = -1;
      continue;
    }
  }
  return {
    x: i,
    y: h,
    placement: f,
    strategy: s,
    middlewareData: c
  };
};
function oy(e) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...e
  };
}
function lh(e) {
  return typeof e != "number" ? oy(e) : {
    top: e,
    right: e,
    bottom: e,
    left: e
  };
}
function ds(e) {
  return {
    ...e,
    top: e.y,
    left: e.x,
    right: e.x + e.width,
    bottom: e.y + e.height
  };
}
async function ry(e, t) {
  var n;
  t === void 0 && (t = {});
  const {
    x: o,
    y: s,
    platform: r,
    rects: l,
    elements: a,
    strategy: _
  } = e, {
    boundary: d = "clippingAncestors",
    rootBoundary: i = "viewport",
    elementContext: h = "floating",
    altBoundary: f = !1,
    padding: c = 0
  } = t, u = lh(c), p = a[f ? h === "floating" ? "reference" : "floating" : h], m = ds(await r.getClippingRect({
    element: (n = await (r.isElement == null ? void 0 : r.isElement(p))) == null || n ? p : p.contextElement || await (r.getDocumentElement == null ? void 0 : r.getDocumentElement(a.floating)),
    boundary: d,
    rootBoundary: i,
    strategy: _
  })), v = h === "floating" ? {
    ...l.floating,
    x: o,
    y: s
  } : l.reference, $ = await (r.getOffsetParent == null ? void 0 : r.getOffsetParent(a.floating)), w = await (r.isElement == null ? void 0 : r.isElement($)) ? await (r.getScale == null ? void 0 : r.getScale($)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, C = ds(r.convertOffsetParentRelativeRectToViewportRelativeRect ? await r.convertOffsetParentRelativeRectToViewportRelativeRect({
    rect: v,
    offsetParent: $,
    strategy: _
  }) : v);
  return {
    top: (m.top - C.top + u.top) / w.y,
    bottom: (C.bottom - m.bottom + u.bottom) / w.y,
    left: (m.left - C.left + u.left) / w.x,
    right: (C.right - m.right + u.right) / w.x
  };
}
const iy = Math.min, sy = Math.max;
function ly(e, t, n) {
  return sy(e, iy(t, n));
}
const ay = (e) => ({
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
      rects: a,
      platform: _
    } = t;
    if (n == null)
      return {};
    const d = lh(o), i = {
      x: s,
      y: r
    }, h = zl(l), f = ic(h), c = await _.getDimensions(n), u = h === "y" ? "top" : "left", y = h === "y" ? "bottom" : "right", p = a.reference[f] + a.reference[h] - i[h] - a.floating[f], m = i[h] - a.reference[h], v = await (_.getOffsetParent == null ? void 0 : _.getOffsetParent(n));
    let $ = v ? h === "y" ? v.clientHeight || 0 : v.clientWidth || 0 : 0;
    $ === 0 && ($ = a.floating[f]);
    const w = p / 2 - m / 2, C = d[u], x = $ - c[f] - d[y], E = $ / 2 - c[f] / 2 + w, g = ly(C, E, x), T = pi(l) != null && E != g && a.reference[f] / 2 - (E < C ? d[u] : d[y]) - c[f] / 2 < 0 ? E < C ? C - E : x - E : 0;
    return {
      [h]: i[h] - T,
      data: {
        [h]: g,
        centerOffset: E - g
      }
    };
  }
}), cy = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function hs(e) {
  return e.replace(/left|right|bottom|top/g, (t) => cy[t]);
}
function _y(e, t, n) {
  n === void 0 && (n = !1);
  const o = pi(e), s = zl(e), r = ic(s);
  let l = s === "x" ? o === (n ? "end" : "start") ? "right" : "left" : o === "start" ? "bottom" : "top";
  return t.reference[r] > t.floating[r] && (l = hs(l)), {
    main: l,
    cross: hs(l)
  };
}
const fy = {
  start: "end",
  end: "start"
};
function Aa(e) {
  return e.replace(/start|end/g, (t) => fy[t]);
}
function uy(e) {
  const t = hs(e);
  return [Aa(e), t, Aa(t)];
}
function dy(e, t, n) {
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
  const s = pi(e);
  let r = dy(ro(e), n === "start", o);
  return s && (r = r.map((l) => l + "-" + s), t && (r = r.concat(r.map(Aa)))), r;
}
const py = function(e) {
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
        platform: a,
        elements: _
      } = t, {
        mainAxis: d = !0,
        crossAxis: i = !0,
        fallbackPlacements: h,
        fallbackStrategy: f = "bestFit",
        fallbackAxisSideDirection: c = "none",
        flipAlignment: u = !0,
        ...y
      } = e, p = ro(o), m = ro(l) === l, v = await (a.isRTL == null ? void 0 : a.isRTL(_.floating)), $ = h || (m || !u ? [hs(l)] : uy(l));
      !h && c !== "none" && $.push(...hy(l, u, c, v));
      const w = [l, ...$], C = await ry(t, y), x = [];
      let E = ((n = s.flip) == null ? void 0 : n.overflows) || [];
      if (d && x.push(C[p]), i) {
        const {
          main: T,
          cross: U
        } = _y(o, r, v);
        x.push(C[T], C[U]);
      }
      if (E = [...E, {
        placement: o,
        overflows: x
      }], !x.every((T) => T <= 0)) {
        var g;
        const T = (((g = s.flip) == null ? void 0 : g.index) || 0) + 1, U = w[T];
        if (U)
          return {
            data: {
              index: T,
              overflows: E
            },
            reset: {
              placement: U
            }
          };
        let B = "bottom";
        switch (f) {
          case "bestFit": {
            var k;
            const L = (k = E.map((A) => [A, A.overflows.filter((S) => S > 0).reduce((S, D) => S + D, 0)]).sort((A, S) => A[1] - S[1])[0]) == null ? void 0 : k[0].placement;
            L && (B = L);
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
async function my(e, t) {
  const {
    placement: n,
    platform: o,
    elements: s
  } = e, r = await (o.isRTL == null ? void 0 : o.isRTL(s.floating)), l = ro(n), a = pi(n), _ = zl(n) === "x", d = ["left", "top"].includes(l) ? -1 : 1, i = r && _ ? -1 : 1, h = typeof t == "function" ? t(e) : t;
  let {
    mainAxis: f,
    crossAxis: c,
    alignmentAxis: u
  } = typeof h == "number" ? {
    mainAxis: h,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: 0,
    crossAxis: 0,
    alignmentAxis: null,
    ...h
  };
  return a && typeof u == "number" && (c = a === "end" ? u * -1 : u), _ ? {
    x: c * i,
    y: f * d
  } : {
    x: f * d,
    y: c * i
  };
}
const vy = function(e) {
  return e === void 0 && (e = 0), {
    name: "offset",
    options: e,
    async fn(t) {
      const {
        x: n,
        y: o
      } = t, s = await my(t, e);
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
function at(e) {
  return Ie(e).getComputedStyle(e);
}
function en(e) {
  return ch(e) ? (e.nodeName || "").toLowerCase() : "";
}
let wi;
function ah() {
  if (wi)
    return wi;
  const e = navigator.userAgentData;
  return e && Array.isArray(e.brands) ? (wi = e.brands.map((t) => t.brand + "/" + t.version).join(" "), wi) : navigator.userAgent;
}
function wt(e) {
  return e instanceof Ie(e).HTMLElement;
}
function tn(e) {
  return e instanceof Ie(e).Element;
}
function ch(e) {
  return e instanceof Ie(e).Node;
}
function B_(e) {
  if (typeof ShadowRoot > "u")
    return !1;
  const t = Ie(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot;
}
function Yl(e) {
  const {
    overflow: t,
    overflowX: n,
    overflowY: o,
    display: s
  } = at(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + o + n) && !["inline", "contents"].includes(s);
}
function gy(e) {
  return ["table", "td", "th"].includes(en(e));
}
function sc(e) {
  const t = /firefox/i.test(ah()), n = at(e), o = n.backdropFilter || n.WebkitBackdropFilter;
  return n.transform !== "none" || n.perspective !== "none" || (o ? o !== "none" : !1) || t && n.willChange === "filter" || t && (n.filter ? n.filter !== "none" : !1) || ["transform", "perspective"].some((s) => n.willChange.includes(s)) || ["paint", "layout", "strict", "content"].some(
    // TS 4.1 compat
    (s) => {
      const r = n.contain;
      return r != null ? r.includes(s) : !1;
    }
  );
}
function _h() {
  return !/^((?!chrome|android).)*safari/i.test(ah());
}
function lc(e) {
  return ["html", "body", "#document"].includes(en(e));
}
const F_ = Math.min, Ko = Math.max, ps = Math.round;
function fh(e) {
  const t = at(e);
  let n = parseFloat(t.width), o = parseFloat(t.height);
  const s = e.offsetWidth, r = e.offsetHeight, l = ps(n) !== s || ps(o) !== r;
  return l && (n = s, o = r), {
    width: n,
    height: o,
    fallback: l
  };
}
function uh(e) {
  return tn(e) ? e : e.contextElement;
}
const dh = {
  x: 1,
  y: 1
};
function Mn(e) {
  const t = uh(e);
  if (!wt(t))
    return dh;
  const n = t.getBoundingClientRect(), {
    width: o,
    height: s,
    fallback: r
  } = fh(t);
  let l = (r ? ps(n.width) : n.width) / o, a = (r ? ps(n.height) : n.height) / s;
  return (!l || !Number.isFinite(l)) && (l = 1), (!a || !Number.isFinite(a)) && (a = 1), {
    x: l,
    y: a
  };
}
function Sr(e, t, n, o) {
  var s, r;
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const l = e.getBoundingClientRect(), a = uh(e);
  let _ = dh;
  t && (o ? tn(o) && (_ = Mn(o)) : _ = Mn(e));
  const d = a ? Ie(a) : window, i = !_h() && n;
  let h = (l.left + (i && ((s = d.visualViewport) == null ? void 0 : s.offsetLeft) || 0)) / _.x, f = (l.top + (i && ((r = d.visualViewport) == null ? void 0 : r.offsetTop) || 0)) / _.y, c = l.width / _.x, u = l.height / _.y;
  if (a) {
    const y = Ie(a), p = o && tn(o) ? Ie(o) : o;
    let m = y.frameElement;
    for (; m && o && p !== y; ) {
      const v = Mn(m), $ = m.getBoundingClientRect(), w = getComputedStyle(m);
      $.x += (m.clientLeft + parseFloat(w.paddingLeft)) * v.x, $.y += (m.clientTop + parseFloat(w.paddingTop)) * v.y, h *= v.x, f *= v.y, c *= v.x, u *= v.y, h += $.x, f += $.y, m = Ie(m).frameElement;
    }
  }
  return {
    width: c,
    height: u,
    top: f,
    right: h + c,
    bottom: f + u,
    left: h,
    x: h,
    y: f
  };
}
function sn(e) {
  return ((ch(e) ? e.ownerDocument : e.document) || window.document).documentElement;
}
function ql(e) {
  return tn(e) ? {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  } : {
    scrollLeft: e.pageXOffset,
    scrollTop: e.pageYOffset
  };
}
function hh(e) {
  return Sr(sn(e)).left + ql(e).scrollLeft;
}
function yy(e, t, n) {
  const o = wt(t), s = sn(t), r = Sr(e, !0, n === "fixed", t);
  let l = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const a = {
    x: 0,
    y: 0
  };
  if (o || !o && n !== "fixed")
    if ((en(t) !== "body" || Yl(s)) && (l = ql(t)), wt(t)) {
      const _ = Sr(t, !0);
      a.x = _.x + t.clientLeft, a.y = _.y + t.clientTop;
    } else
      s && (a.x = hh(s));
  return {
    x: r.left + l.scrollLeft - a.x,
    y: r.top + l.scrollTop - a.y,
    width: r.width,
    height: r.height
  };
}
function Cr(e) {
  if (en(e) === "html")
    return e;
  const t = (
    // Step into the shadow DOM of the parent of a slotted node
    e.assignedSlot || // DOM Element detected
    e.parentNode || // ShadowRoot detected
    (B_(e) ? e.host : null) || // Fallback
    sn(e)
  );
  return B_(t) ? t.host : t;
}
function j_(e) {
  return !wt(e) || at(e).position === "fixed" ? null : e.offsetParent;
}
function by(e) {
  let t = Cr(e);
  for (; wt(t) && !lc(t); ) {
    if (sc(t))
      return t;
    t = Cr(t);
  }
  return null;
}
function V_(e) {
  const t = Ie(e);
  let n = j_(e);
  for (; n && gy(n) && at(n).position === "static"; )
    n = j_(n);
  return n && (en(n) === "html" || en(n) === "body" && at(n).position === "static" && !sc(n)) ? t : n || by(e) || t;
}
function wy(e) {
  return fh(e);
}
function $y(e) {
  let {
    rect: t,
    offsetParent: n,
    strategy: o
  } = e;
  const s = wt(n), r = sn(n);
  if (n === r)
    return t;
  let l = {
    scrollLeft: 0,
    scrollTop: 0
  }, a = {
    x: 1,
    y: 1
  };
  const _ = {
    x: 0,
    y: 0
  };
  if ((s || !s && o !== "fixed") && ((en(n) !== "body" || Yl(r)) && (l = ql(n)), wt(n))) {
    const d = Sr(n);
    a = Mn(n), _.x = d.x + n.clientLeft, _.y = d.y + n.clientTop;
  }
  return {
    width: t.width * a.x,
    height: t.height * a.y,
    x: t.x * a.x - l.scrollLeft * a.x + _.x,
    y: t.y * a.y - l.scrollTop * a.y + _.y
  };
}
function ky(e, t) {
  const n = Ie(e), o = sn(e), s = n.visualViewport;
  let r = o.clientWidth, l = o.clientHeight, a = 0, _ = 0;
  if (s) {
    r = s.width, l = s.height;
    const d = _h();
    (d || !d && t === "fixed") && (a = s.offsetLeft, _ = s.offsetTop);
  }
  return {
    width: r,
    height: l,
    x: a,
    y: _
  };
}
function xy(e) {
  var t;
  const n = sn(e), o = ql(e), s = (t = e.ownerDocument) == null ? void 0 : t.body, r = Ko(n.scrollWidth, n.clientWidth, s ? s.scrollWidth : 0, s ? s.clientWidth : 0), l = Ko(n.scrollHeight, n.clientHeight, s ? s.scrollHeight : 0, s ? s.clientHeight : 0);
  let a = -o.scrollLeft + hh(e);
  const _ = -o.scrollTop;
  return at(s || n).direction === "rtl" && (a += Ko(n.clientWidth, s ? s.clientWidth : 0) - r), {
    width: r,
    height: l,
    x: a,
    y: _
  };
}
function ph(e) {
  const t = Cr(e);
  return lc(t) ? e.ownerDocument.body : wt(t) && Yl(t) ? t : ph(t);
}
function mh(e, t) {
  var n;
  t === void 0 && (t = []);
  const o = ph(e), s = o === ((n = e.ownerDocument) == null ? void 0 : n.body), r = Ie(o);
  return s ? t.concat(r, r.visualViewport || [], Yl(o) ? o : []) : t.concat(o, mh(o));
}
function Sy(e, t) {
  const n = Sr(e, !0, t === "fixed"), o = n.top + e.clientTop, s = n.left + e.clientLeft, r = wt(e) ? Mn(e) : {
    x: 1,
    y: 1
  }, l = e.clientWidth * r.x, a = e.clientHeight * r.y, _ = s * r.x, d = o * r.y;
  return {
    top: d,
    left: _,
    right: _ + l,
    bottom: d + a,
    x: _,
    y: d,
    width: l,
    height: a
  };
}
function z_(e, t, n) {
  return t === "viewport" ? ds(ky(e, n)) : tn(t) ? Sy(t, n) : ds(xy(sn(e)));
}
function Cy(e, t) {
  const n = t.get(e);
  if (n)
    return n;
  let o = mh(e).filter((a) => tn(a) && en(a) !== "body"), s = null;
  const r = at(e).position === "fixed";
  let l = r ? Cr(e) : e;
  for (; tn(l) && !lc(l); ) {
    const a = at(l), _ = sc(l);
    (r ? !_ && !s : !_ && a.position === "static" && !!s && ["absolute", "fixed"].includes(s.position)) ? o = o.filter((i) => i !== l) : s = a, l = Cr(l);
  }
  return t.set(e, o), o;
}
function Ey(e) {
  let {
    element: t,
    boundary: n,
    rootBoundary: o,
    strategy: s
  } = e;
  const l = [...n === "clippingAncestors" ? Cy(t, this._c) : [].concat(n), o], a = l[0], _ = l.reduce((d, i) => {
    const h = z_(t, i, s);
    return d.top = Ko(h.top, d.top), d.right = F_(h.right, d.right), d.bottom = F_(h.bottom, d.bottom), d.left = Ko(h.left, d.left), d;
  }, z_(t, a, s));
  return {
    width: _.right - _.left,
    height: _.bottom - _.top,
    x: _.left,
    y: _.top
  };
}
const Ay = {
  getClippingRect: Ey,
  convertOffsetParentRelativeRectToViewportRelativeRect: $y,
  isElement: tn,
  getDimensions: wy,
  getOffsetParent: V_,
  getDocumentElement: sn,
  getScale: Mn,
  async getElementRects(e) {
    let {
      reference: t,
      floating: n,
      strategy: o
    } = e;
    const s = this.getOffsetParent || V_, r = this.getDimensions;
    return {
      reference: yy(t, await s(n), o),
      floating: {
        x: 0,
        y: 0,
        ...await r(n)
      }
    };
  },
  getClientRects: (e) => Array.from(e.getClientRects()),
  isRTL: (e) => at(e).direction === "rtl"
}, My = (e, t, n) => {
  const o = /* @__PURE__ */ new Map(), s = {
    platform: Ay,
    ...n
  }, r = {
    ...s.platform,
    _c: o
  };
  return ny(e, t, {
    ...s,
    platform: r
  });
};
var Rn, Hn, Ce, dn, qr, qs, vh, Gs, gh, Xs, yh, Ks, bh, Zs, wh, Js, $h, Qs;
class ot extends Be {
  constructor() {
    super(...arguments);
    O(this, qs);
    O(this, Gs);
    O(this, Xs);
    O(this, Ks);
    O(this, Zs);
    O(this, Js);
    O(this, Rn, void 0);
    O(this, Hn, 0);
    O(this, Ce, void 0);
    O(this, dn, void 0);
    O(this, qr, void 0);
    N(this, "hideLater", () => {
      b(this, Qs).call(this), H(this, Hn, window.setTimeout(this.hide.bind(this), 100));
    });
    O(this, Qs, () => {
      clearTimeout(b(this, Hn)), H(this, Hn, 0);
    });
  }
  get isShown() {
    var n;
    return (n = b(this, dn)) == null ? void 0 : n.classList.contains(this.constructor.CLASS_SHOW);
  }
  get datepicker() {
    return b(this, dn) || z(this, Xs, yh).call(this);
  }
  get trigger() {
    return b(this, qr) || this.element;
  }
  get elementShowClass() {
    return `with-${this.constructor.NAME}-show`;
  }
  show(n) {
    return H(this, qr, n), !this.datepicker || !this.element ? !1 : (this.element.classList.add(this.elementShowClass), this.datepicker.classList.add(this.constructor.CLASS_SHOW), this.datepicker.classList.add("fade"), z(this, Zs, wh).call(this), !0);
  }
  hide() {
    var n;
    return this.element.classList.remove(this.elementShowClass), (n = b(this, dn)) == null || n.classList.remove(this.constructor.CLASS_SHOW), this.datepicker.classList.remove("fade"), !0;
  }
  toggle(n) {
    return this.isShown ? this.hide() : this.show(n);
  }
  destroy() {
    super.destroy();
  }
  static clear(n) {
    var _, d;
    n instanceof Event && (n = { event: n });
    const { event: o, exclude: s, ignoreSelector: r = ".not-hide-datepicker" } = n || {};
    if (o && r && ((d = (_ = o.target).closest) != null && d.call(_, r)))
      return;
    const l = this.getAll().entries(), a = new Set(s || []);
    for (const [i, h] of l)
      a.has(i) || h.hide();
  }
}
Rn = new WeakMap(), Hn = new WeakMap(), Ce = new WeakMap(), dn = new WeakMap(), qr = new WeakMap(), qs = new WeakSet(), vh = function() {
  const { arrow: n } = this.options;
  return typeof n == "number" ? n : 4;
}, Gs = new WeakSet(), gh = function() {
  const n = document.createElement("div");
  return H(this, Ce, n), b(this, Ce).style.position = "absolute", b(this, Ce).style.width = "8px", b(this, Ce).style.height = "8px", b(this, Ce).style.transform = "rotate(45deg)", b(this, Ce).style.border = "inherit", b(this, Ce).style.background = "inherit", n;
}, Xs = new WeakSet(), yh = function() {
  const n = this.constructor.CLASSNAME, o = document.createElement("div");
  return o.classList.add(n), Xg(kr(ty, { ...this.options }), o), this.options.arrow && o.append(z(this, Gs, gh).call(this)), o.style.width = "max-content", o.style.position = "absolute", o.style.top = "0", o.style.left = "0", document.body.appendChild(o), H(this, dn, o), o;
}, Ks = new WeakSet(), bh = function() {
  var s;
  const n = z(this, qs, vh).call(this), o = {
    middleware: [vy(n + 3), py()]
  };
  return this.options.arrow && b(this, Ce) && ((s = o.middleware) == null || s.push(ay({ element: b(this, Ce) }))), this.options.placement && (o.placement = this.options.placement), o;
}, Zs = new WeakSet(), wh = function() {
  const n = z(this, Ks, bh).call(this);
  My(z(this, Js, $h).call(this), this.datepicker, n).then(({ x: o, y: s, middlewareData: r }) => {
    if (Object.assign(this.datepicker.style, {
      left: `${o}px`,
      top: `${s}px`
    }), this.options.placement) {
      const l = this.options.placement.split("-")[0], a = {
        top: "bottom",
        right: "left",
        bottom: "top",
        left: "right"
      }[l];
      if (r.arrow && b(this, Ce)) {
        const { x: _, y: d } = r.arrow;
        Object.assign(b(this, Ce).style, {
          left: _ != null ? `${_}px` : "",
          top: d != null ? `${d}px` : "",
          [a]: `${-b(this, Ce).offsetWidth / 2}px`
        });
      }
    }
  });
}, Js = new WeakSet(), $h = function() {
  return b(this, Rn) || H(this, Rn, {
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
  }), b(this, Rn);
}, Qs = new WeakMap(), N(ot, "NAME", "datepicker"), N(ot, "CLASSNAME", "datepicker"), N(ot, "CLASS_SHOW", "show"), N(ot, "MENU_SELECTOR", ".form-datetime:not(.disabled):not(:disabled)"), N(ot, "DEFAULT", {
  date: ee().format("YYYY-MM-DD"),
  format: "YYYY-MM-DD",
  showOtherMonth: !0,
  placement: "bottom-start",
  strategy: "absolute",
  trigger: "click",
  showToday: !0,
  arrow: !0
});
document.addEventListener("click", function(e) {
  const t = e.target, n = t.closest(ot.MENU_SELECTOR), o = t.closest(".datepicker-calendar-bar, .datepicker-calendar-thead, .datepicker-calendar-month-table");
  n ? ot.ensure(n).toggle() : o || ot.clear({ event: e });
});
const Ty = (e) => {
  const t = document.getElementsByClassName("with-datepicker-show")[0];
  if (!t)
    return;
  const n = typeof t.closest == "function" ? t.closest(ot.MENU_SELECTOR) : null;
  !n || !e.target.contains(n) || ot.clear({ event: e });
};
window.addEventListener("scroll", Ty, !0);
function kh(e, t, n) {
  if (n) {
    e.setAttribute("class", j(t));
    return;
  }
  Ul(e.getAttribute("class"), t).forEach(([o, s]) => {
    e.classList.toggle(o, s);
  });
}
function Lo(e, t, n) {
  if (typeof t == "object")
    return Object.entries(t).forEach(([o, s]) => {
      Lo(e, o, s);
    });
  n !== void 0 && (e.style[t] = typeof n == "number" ? `${n}px` : n);
}
function ms(e, t, n) {
  if (typeof t == "object")
    return Object.entries(t).forEach(([o, s]) => {
      ms(e, o, s);
    });
  n !== void 0 && (n === null ? e.removeAttribute(t) : e.setAttribute(t, n));
}
var hn, Gr, At, el, Wn, Ri;
const ht = class extends Be {
  constructor() {
    super(...arguments);
    O(this, Wn);
    O(this, hn, 0);
    O(this, Gr, void 0);
    O(this, At, void 0);
    O(this, el, (n) => {
      const o = n.target;
      (o.closest(ht.DISMISS_SELECTOR) || this.options.backdrop === !0 && !o.closest(".modal-dialog") && o.closest(".modal")) && this.hide();
    });
  }
  get modalElement() {
    return this.element;
  }
  get isShown() {
    return this.modalElement.classList.contains(ht.CLASS_SHOW);
  }
  get dialog() {
    return this.modalElement.querySelector(".modal-dialog");
  }
  afterInit() {
    if (this.on("click", b(this, el)), this.options.responsive && typeof ResizeObserver < "u") {
      const { dialog: n } = this;
      if (n) {
        const o = new ResizeObserver(() => {
          if (!this.isShown)
            return;
          const s = n.clientWidth, r = n.clientHeight;
          (!b(this, At) || b(this, At)[0] !== s || b(this, At)[1] !== r) && (H(this, At, [s, r]), this.layout());
        });
        o.observe(n), H(this, Gr, o);
      }
    }
    this.options.show && this.show();
  }
  destroy() {
    var n;
    super.destroy(), (n = b(this, Gr)) == null || n.disconnect();
  }
  show(n) {
    if (this.isShown)
      return !1;
    this.setOptions(n);
    const { modalElement: o } = this, { animation: s, backdrop: r, className: l, style: a } = this.options;
    return kh(o, [{
      "modal-trans": s,
      "modal-no-backdrop": !r
    }, ht.CLASS_SHOW, l]), Lo(o, {
      zIndex: `${ht.zIndex++}`,
      ...a
    }), this.layout(), this.emit("show", this), z(this, Wn, Ri).call(this, () => {
      o.classList.add(ht.CLASS_SHOWN), z(this, Wn, Ri).call(this, () => {
        this.emit("shown", this);
      });
    }, 50), !0;
  }
  hide() {
    return this.isShown ? (this.modalElement.classList.remove(ht.CLASS_SHOWN), this.emit("hide", this), z(this, Wn, Ri).call(this, () => {
      this.modalElement.classList.remove(ht.CLASS_SHOW), this.emit("hidden", this);
    }), !0) : !1;
  }
  layout(n, o) {
    if (!this.isShown)
      return;
    const { dialog: s } = this;
    if (!s)
      return;
    o = o ?? this.options.size, ms(s, "data-size", null);
    const r = { width: null, height: null };
    typeof o == "object" ? (r.width = o.width, r.height = o.height) : typeof o == "string" && ["md", "sm", "lg", "full"].includes(o) ? ms(s, "data-size", o) : o && (r.width = o), Lo(s, r), n = n ?? this.options.position ?? "fit";
    const l = s.clientWidth, a = s.clientHeight;
    H(this, At, [l, a]), typeof n == "function" && (n = n({ width: l, height: a }));
    const _ = {
      top: null,
      left: null,
      bottom: null,
      right: null,
      alignSelf: "center"
    };
    typeof n == "number" ? (_.alignSelf = "flex-start", _.top = n) : typeof n == "object" && n ? (_.alignSelf = "flex-start", Object.assign(_, n)) : n === "fit" ? (_.alignSelf = "flex-start", _.top = `${Math.max(0, Math.floor((window.innerHeight - a) / 3))}px`) : n === "bottom" ? _.alignSelf = "flex-end" : n === "top" ? _.alignSelf = "flex-start" : n !== "center" && typeof n == "string" && (_.alignSelf = "flex-start", _.top = n), Lo(s, _), Lo(this.modalElement, "justifyContent", _.left ? "flex-start" : "center");
  }
};
let Me = ht;
hn = new WeakMap(), Gr = new WeakMap(), At = new WeakMap(), el = new WeakMap(), Wn = new WeakSet(), Ri = function(n, o) {
  b(this, hn) && (clearTimeout(b(this, hn)), H(this, hn, 0)), n && (this.options.animation ? H(this, hn, window.setTimeout(n, o ?? this.options.transTime)) : n());
}, N(Me, "NAME", "Modal"), N(Me, "EVENTS", !0), N(Me, "DEFAULT", {
  position: "fit",
  show: !0,
  keyboard: !0,
  animation: !0,
  backdrop: !0,
  responsive: !0,
  transTime: 300
}), N(Me, "CLASS_SHOW", "show"), N(Me, "CLASS_SHOWN", "in"), N(Me, "DISMISS_SELECTOR", '[data-dismiss="modal"]'), N(Me, "zIndex", 2e3);
window.addEventListener("resize", () => {
  Me.all.forEach((e) => {
    const t = e;
    t.isShown && t.options.responsive && t.layout();
  });
});
var Gl, le, xh, Do, Zo, Y_, vs = {}, Sh = [], Ly = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function Ft(e, t) {
  for (var n in t)
    e[n] = t[n];
  return e;
}
function Ch(e) {
  var t = e.parentNode;
  t && t.removeChild(e);
}
function Dy(e, t, n) {
  var o, s, r, l = {};
  for (r in t)
    r == "key" ? o = t[r] : r == "ref" ? s = t[r] : l[r] = t[r];
  if (arguments.length > 2 && (l.children = arguments.length > 3 ? Gl.call(arguments, 2) : n), typeof e == "function" && e.defaultProps != null)
    for (r in e.defaultProps)
      l[r] === void 0 && (l[r] = e.defaultProps[r]);
  return Hi(e, l, o, s, null);
}
function Hi(e, t, n, o, s) {
  var r = { type: e, props: t, key: n, ref: o, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: s ?? ++xh };
  return s == null && le.vnode != null && le.vnode(r), r;
}
function Oy() {
  return { current: null };
}
function Xl(e) {
  return e.children;
}
function Tn(e, t) {
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
function Eh(e) {
  var t, n;
  if ((e = e.__) != null && e.__c != null) {
    for (e.__e = e.__c.base = null, t = 0; t < e.__k.length; t++)
      if ((n = e.__k[t]) != null && n.__e != null) {
        e.__e = e.__c.base = n.__e;
        break;
      }
    return Eh(e);
  }
}
function q_(e) {
  (!e.__d && (e.__d = !0) && Zo.push(e) && !gs.__r++ || Y_ !== le.debounceRendering) && ((Y_ = le.debounceRendering) || setTimeout)(gs);
}
function gs() {
  for (var e; gs.__r = Zo.length; )
    e = Zo.sort(function(t, n) {
      return t.__v.__b - n.__v.__b;
    }), Zo = [], e.some(function(t) {
      var n, o, s, r, l, a;
      t.__d && (l = (r = (n = t).__v).__e, (a = n.__P) && (o = [], (s = Ft({}, r)).__v = r.__v + 1, ac(a, r, s, n.__n, a.ownerSVGElement !== void 0, r.__h != null ? [l] : null, o, l ?? Er(r), r.__h), Lh(o, r), r.__e != l && Eh(r)));
    });
}
function Ah(e, t, n, o, s, r, l, a, _, d) {
  var i, h, f, c, u, y, p, m = o && o.__k || Sh, v = m.length;
  for (n.__k = [], i = 0; i < t.length; i++)
    if ((c = n.__k[i] = (c = t[i]) == null || typeof c == "boolean" ? null : typeof c == "string" || typeof c == "number" || typeof c == "bigint" ? Hi(null, c, null, null, c) : Array.isArray(c) ? Hi(Xl, { children: c }, null, null, null) : c.__b > 0 ? Hi(c.type, c.props, c.key, c.ref ? c.ref : null, c.__v) : c) != null) {
      if (c.__ = n, c.__b = n.__b + 1, (f = m[i]) === null || f && c.key == f.key && c.type === f.type)
        m[i] = void 0;
      else
        for (h = 0; h < v; h++) {
          if ((f = m[h]) && c.key == f.key && c.type === f.type) {
            m[h] = void 0;
            break;
          }
          f = null;
        }
      ac(e, c, f = f || vs, s, r, l, a, _, d), u = c.__e, (h = c.ref) && f.ref != h && (p || (p = []), f.ref && p.push(f.ref, null, c), p.push(h, c.__c || u, c)), u != null ? (y == null && (y = u), typeof c.type == "function" && c.__k === f.__k ? c.__d = _ = Mh(c, _, e) : _ = Th(e, c, f, m, u, _), typeof n.type == "function" && (n.__d = _)) : _ && f.__e == _ && _.parentNode != e && (_ = Er(f));
    }
  for (n.__e = y, i = v; i--; )
    m[i] != null && Oh(m[i], m[i]);
  if (p)
    for (i = 0; i < p.length; i++)
      Dh(p[i], p[++i], p[++i]);
}
function Mh(e, t, n) {
  for (var o, s = e.__k, r = 0; s && r < s.length; r++)
    (o = s[r]) && (o.__ = e, t = typeof o.type == "function" ? Mh(o, t, n) : Th(n, o, o, s, o.__e, t));
  return t;
}
function Th(e, t, n, o, s, r) {
  var l, a, _;
  if (t.__d !== void 0)
    l = t.__d, t.__d = void 0;
  else if (n == null || s != r || s.parentNode == null)
    e:
      if (r == null || r.parentNode !== e)
        e.appendChild(s), l = null;
      else {
        for (a = r, _ = 0; (a = a.nextSibling) && _ < o.length; _ += 2)
          if (a == s)
            break e;
        e.insertBefore(s, r), l = r;
      }
  return l !== void 0 ? l : s.nextSibling;
}
function Ny(e, t, n, o, s) {
  var r;
  for (r in n)
    r === "children" || r === "key" || r in t || ys(e, r, null, n[r], o);
  for (r in t)
    s && typeof t[r] != "function" || r === "children" || r === "key" || r === "value" || r === "checked" || n[r] === t[r] || ys(e, r, t[r], n[r], o);
}
function G_(e, t, n) {
  t[0] === "-" ? e.setProperty(t, n) : e[t] = n == null ? "" : typeof n != "number" || Ly.test(t) ? n : n + "px";
}
function ys(e, t, n, o, s) {
  var r;
  e:
    if (t === "style")
      if (typeof n == "string")
        e.style.cssText = n;
      else {
        if (typeof o == "string" && (e.style.cssText = o = ""), o)
          for (t in o)
            n && t in n || G_(e.style, t, "");
        if (n)
          for (t in n)
            o && n[t] === o[t] || G_(e.style, t, n[t]);
      }
    else if (t[0] === "o" && t[1] === "n")
      r = t !== (t = t.replace(/Capture$/, "")), t = t.toLowerCase() in e ? t.toLowerCase().slice(2) : t.slice(2), e.l || (e.l = {}), e.l[t + r] = n, n ? o || e.addEventListener(t, r ? K_ : X_, r) : e.removeEventListener(t, r ? K_ : X_, r);
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
function X_(e) {
  this.l[e.type + !1](le.event ? le.event(e) : e);
}
function K_(e) {
  this.l[e.type + !0](le.event ? le.event(e) : e);
}
function ac(e, t, n, o, s, r, l, a, _) {
  var d, i, h, f, c, u, y, p, m, v, $, w, C, x, E, g = t.type;
  if (t.constructor !== void 0)
    return null;
  n.__h != null && (_ = n.__h, a = t.__e = n.__e, t.__h = null, r = [a]), (d = le.__b) && d(t);
  try {
    e:
      if (typeof g == "function") {
        if (p = t.props, m = (d = g.contextType) && o[d.__c], v = d ? m ? m.props.value : d.__ : o, n.__c ? y = (i = t.__c = n.__c).__ = i.__E : ("prototype" in g && g.prototype.render ? t.__c = i = new g(p, v) : (t.__c = i = new Tn(p, v), i.constructor = g, i.render = Ry), m && m.sub(i), i.props = p, i.state || (i.state = {}), i.context = v, i.__n = o, h = i.__d = !0, i.__h = [], i._sb = []), i.__s == null && (i.__s = i.state), g.getDerivedStateFromProps != null && (i.__s == i.state && (i.__s = Ft({}, i.__s)), Ft(i.__s, g.getDerivedStateFromProps(p, i.__s))), f = i.props, c = i.state, h)
          g.getDerivedStateFromProps == null && i.componentWillMount != null && i.componentWillMount(), i.componentDidMount != null && i.__h.push(i.componentDidMount);
        else {
          if (g.getDerivedStateFromProps == null && p !== f && i.componentWillReceiveProps != null && i.componentWillReceiveProps(p, v), !i.__e && i.shouldComponentUpdate != null && i.shouldComponentUpdate(p, i.__s, v) === !1 || t.__v === n.__v) {
            for (i.props = p, i.state = i.__s, t.__v !== n.__v && (i.__d = !1), i.__v = t, t.__e = n.__e, t.__k = n.__k, t.__k.forEach(function(k) {
              k && (k.__ = t);
            }), $ = 0; $ < i._sb.length; $++)
              i.__h.push(i._sb[$]);
            i._sb = [], i.__h.length && l.push(i);
            break e;
          }
          i.componentWillUpdate != null && i.componentWillUpdate(p, i.__s, v), i.componentDidUpdate != null && i.__h.push(function() {
            i.componentDidUpdate(f, c, u);
          });
        }
        if (i.context = v, i.props = p, i.__v = t, i.__P = e, w = le.__r, C = 0, "prototype" in g && g.prototype.render) {
          for (i.state = i.__s, i.__d = !1, w && w(t), d = i.render(i.props, i.state, i.context), x = 0; x < i._sb.length; x++)
            i.__h.push(i._sb[x]);
          i._sb = [];
        } else
          do
            i.__d = !1, w && w(t), d = i.render(i.props, i.state, i.context), i.state = i.__s;
          while (i.__d && ++C < 25);
        i.state = i.__s, i.getChildContext != null && (o = Ft(Ft({}, o), i.getChildContext())), h || i.getSnapshotBeforeUpdate == null || (u = i.getSnapshotBeforeUpdate(f, c)), E = d != null && d.type === Xl && d.key == null ? d.props.children : d, Ah(e, Array.isArray(E) ? E : [E], t, n, o, s, r, l, a, _), i.base = t.__e, t.__h = null, i.__h.length && l.push(i), y && (i.__E = i.__ = null), i.__e = !1;
      } else
        r == null && t.__v === n.__v ? (t.__k = n.__k, t.__e = n.__e) : t.__e = Py(n.__e, t, n, o, s, r, l, _);
    (d = le.diffed) && d(t);
  } catch (k) {
    t.__v = null, (_ || r != null) && (t.__e = a, t.__h = !!_, r[r.indexOf(a)] = null), le.__e(k, t, n);
  }
}
function Lh(e, t) {
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
function Py(e, t, n, o, s, r, l, a) {
  var _, d, i, h = n.props, f = t.props, c = t.type, u = 0;
  if (c === "svg" && (s = !0), r != null) {
    for (; u < r.length; u++)
      if ((_ = r[u]) && "setAttribute" in _ == !!c && (c ? _.localName === c : _.nodeType === 3)) {
        e = _, r[u] = null;
        break;
      }
  }
  if (e == null) {
    if (c === null)
      return document.createTextNode(f);
    e = s ? document.createElementNS("http://www.w3.org/2000/svg", c) : document.createElement(c, f.is && f), r = null, a = !1;
  }
  if (c === null)
    h === f || a && e.data === f || (e.data = f);
  else {
    if (r = r && Gl.call(e.childNodes), d = (h = n.props || vs).dangerouslySetInnerHTML, i = f.dangerouslySetInnerHTML, !a) {
      if (r != null)
        for (h = {}, u = 0; u < e.attributes.length; u++)
          h[e.attributes[u].name] = e.attributes[u].value;
      (i || d) && (i && (d && i.__html == d.__html || i.__html === e.innerHTML) || (e.innerHTML = i && i.__html || ""));
    }
    if (Ny(e, f, h, s, a), i)
      t.__k = [];
    else if (u = t.props.children, Ah(e, Array.isArray(u) ? u : [u], t, n, o, s && c !== "foreignObject", r, l, r ? r[0] : n.__k && Er(n, 0), a), r != null)
      for (u = r.length; u--; )
        r[u] != null && Ch(r[u]);
    a || ("value" in f && (u = f.value) !== void 0 && (u !== e.value || c === "progress" && !u || c === "option" && u !== h.value) && ys(e, "value", u, h.value, !1), "checked" in f && (u = f.checked) !== void 0 && u !== e.checked && ys(e, "checked", u, h.checked, !1));
  }
  return e;
}
function Dh(e, t, n) {
  try {
    typeof e == "function" ? e(t) : e.current = t;
  } catch (o) {
    le.__e(o, n);
  }
}
function Oh(e, t, n) {
  var o, s;
  if (le.unmount && le.unmount(e), (o = e.ref) && (o.current && o.current !== e.__e || Dh(o, null, t)), (o = e.__c) != null) {
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
      o[s] && Oh(o[s], t, n || typeof e.type != "function");
  n || e.__e == null || Ch(e.__e), e.__ = e.__e = e.__d = void 0;
}
function Ry(e, t, n) {
  return this.constructor(e, n);
}
function Hy(e, t, n) {
  var o, s, r;
  le.__ && le.__(e, t), s = (o = typeof n == "function") ? null : n && n.__k || t.__k, r = [], ac(t, e = (!o && n || t).__k = Dy(Xl, null, [e]), s || vs, vs, t.ownerSVGElement !== void 0, !o && n ? [n] : s ? null : t.firstChild ? Gl.call(t.childNodes) : null, r, !o && n ? n : s ? s.__e : t.firstChild, o), Lh(r, e);
}
Gl = Sh.slice, le = { __e: function(e, t, n, o) {
  for (var s, r, l; t = t.__; )
    if ((s = t.__c) && !s.__)
      try {
        if ((r = s.constructor) && r.getDerivedStateFromError != null && (s.setState(r.getDerivedStateFromError(e)), l = s.__d), s.componentDidCatch != null && (s.componentDidCatch(e, o || {}), l = s.__d), l)
          return s.__E = s;
      } catch (a) {
        e = a;
      }
  throw e;
} }, xh = 0, Do = function(e) {
  return e != null && e.constructor === void 0;
}, Tn.prototype.setState = function(e, t) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = Ft({}, this.state), typeof e == "function" && (e = e(Ft({}, n), this.props)), e && Ft(n, e), e != null && this.__v && (t && this._sb.push(t), q_(this));
}, Tn.prototype.forceUpdate = function(e) {
  this.__v && (this.__e = !0, e && this.__h.push(e), q_(this));
}, Tn.prototype.render = Xl, Zo = [], gs.__r = 0;
var Wy = 0;
function we(e, t, n, o, s) {
  var r, l, a = {};
  for (l in t)
    l == "ref" ? r = t[l] : a[l] = t[l];
  var _ = { type: e, props: a, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: --Wy, __source: s, __self: o };
  if (typeof e == "function" && (r = e.defaultProps))
    for (l in r)
      a[l] === void 0 && (a[l] = r[l]);
  return le.vnode && le.vnode(_), _;
}
let Iy = (e = 21) => crypto.getRandomValues(new Uint8Array(e)).reduce((t, n) => (n &= 63, n < 36 ? t += n.toString(36) : n < 62 ? t += (n - 26).toString(36).toUpperCase() : n > 62 ? t += "-" : t += "_", t), "");
var Ma;
Ma = { __e: function(e, t, n, o) {
  for (var s, r, l; t = t.__; )
    if ((s = t.__c) && !s.__)
      try {
        if ((r = s.constructor) && r.getDerivedStateFromError != null && (s.setState(r.getDerivedStateFromError(e)), l = s.__d), s.componentDidCatch != null && (s.componentDidCatch(e, o || {}), l = s.__d), l)
          return s.__E = s;
      } catch (a) {
        e = a;
      }
  throw e;
} };
var Uy = 0;
function Kl(e, t, n, o, s) {
  var r, l, a = {};
  for (l in t)
    l == "ref" ? r = t[l] : a[l] = t[l];
  var _ = { type: e, props: a, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: --Uy, __source: s, __self: o };
  if (typeof e == "function" && (r = e.defaultProps))
    for (l in r)
      a[l] === void 0 && (a[l] = r[l]);
  return Ma.vnode && Ma.vnode(_), _;
}
function By({
  key: e,
  type: t,
  btnType: n,
  ...o
}) {
  return /* @__PURE__ */ Kl(Qt, { type: n, ...o });
}
var Nh, pe, Ph, Jo, Z_, Rh = {}, Hh = [], Fy = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function jt(e, t) {
  for (var n in t)
    e[n] = t[n];
  return e;
}
function Wh(e) {
  var t = e.parentNode;
  t && t.removeChild(e);
}
function da(e, t, n, o, s) {
  var r = { type: e, props: t, key: n, ref: o, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: s ?? ++Ph };
  return s == null && pe.vnode != null && pe.vnode(r), r;
}
function jy() {
  return { current: null };
}
function cc(e) {
  return e.children;
}
function Qo(e, t) {
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
function Ih(e) {
  var t, n;
  if ((e = e.__) != null && e.__c != null) {
    for (e.__e = e.__c.base = null, t = 0; t < e.__k.length; t++)
      if ((n = e.__k[t]) != null && n.__e != null) {
        e.__e = e.__c.base = n.__e;
        break;
      }
    return Ih(e);
  }
}
function J_(e) {
  (!e.__d && (e.__d = !0) && Jo.push(e) && !bs.__r++ || Z_ !== pe.debounceRendering) && ((Z_ = pe.debounceRendering) || setTimeout)(bs);
}
function bs() {
  for (var e; bs.__r = Jo.length; )
    e = Jo.sort(function(t, n) {
      return t.__v.__b - n.__v.__b;
    }), Jo = [], e.some(function(t) {
      var n, o, s, r, l, a;
      t.__d && (l = (r = (n = t).__v).__e, (a = n.__P) && (o = [], (s = jt({}, r)).__v = r.__v + 1, jh(a, r, s, n.__n, a.ownerSVGElement !== void 0, r.__h != null ? [l] : null, o, l ?? Ar(r), r.__h), zy(o, r), r.__e != l && Ih(r)));
    });
}
function Uh(e, t, n, o, s, r, l, a, _, d) {
  var i, h, f, c, u, y, p, m = o && o.__k || Hh, v = m.length;
  for (n.__k = [], i = 0; i < t.length; i++)
    if ((c = n.__k[i] = (c = t[i]) == null || typeof c == "boolean" ? null : typeof c == "string" || typeof c == "number" || typeof c == "bigint" ? da(null, c, null, null, c) : Array.isArray(c) ? da(cc, { children: c }, null, null, null) : c.__b > 0 ? da(c.type, c.props, c.key, c.ref ? c.ref : null, c.__v) : c) != null) {
      if (c.__ = n, c.__b = n.__b + 1, (f = m[i]) === null || f && c.key == f.key && c.type === f.type)
        m[i] = void 0;
      else
        for (h = 0; h < v; h++) {
          if ((f = m[h]) && c.key == f.key && c.type === f.type) {
            m[h] = void 0;
            break;
          }
          f = null;
        }
      jh(e, c, f = f || Rh, s, r, l, a, _, d), u = c.__e, (h = c.ref) && f.ref != h && (p || (p = []), f.ref && p.push(f.ref, null, c), p.push(h, c.__c || u, c)), u != null ? (y == null && (y = u), typeof c.type == "function" && c.__k === f.__k ? c.__d = _ = Bh(c, _, e) : _ = Fh(e, c, f, m, u, _), typeof n.type == "function" && (n.__d = _)) : _ && f.__e == _ && _.parentNode != e && (_ = Ar(f));
    }
  for (n.__e = y, i = v; i--; )
    m[i] != null && zh(m[i], m[i]);
  if (p)
    for (i = 0; i < p.length; i++)
      Vh(p[i], p[++i], p[++i]);
}
function Bh(e, t, n) {
  for (var o, s = e.__k, r = 0; s && r < s.length; r++)
    (o = s[r]) && (o.__ = e, t = typeof o.type == "function" ? Bh(o, t, n) : Fh(n, o, o, s, o.__e, t));
  return t;
}
function Fh(e, t, n, o, s, r) {
  var l, a, _;
  if (t.__d !== void 0)
    l = t.__d, t.__d = void 0;
  else if (n == null || s != r || s.parentNode == null)
    e:
      if (r == null || r.parentNode !== e)
        e.appendChild(s), l = null;
      else {
        for (a = r, _ = 0; (a = a.nextSibling) && _ < o.length; _ += 2)
          if (a == s)
            break e;
        e.insertBefore(s, r), l = r;
      }
  return l !== void 0 ? l : s.nextSibling;
}
function Vy(e, t, n, o, s) {
  var r;
  for (r in n)
    r === "children" || r === "key" || r in t || ws(e, r, null, n[r], o);
  for (r in t)
    s && typeof t[r] != "function" || r === "children" || r === "key" || r === "value" || r === "checked" || n[r] === t[r] || ws(e, r, t[r], n[r], o);
}
function Q_(e, t, n) {
  t[0] === "-" ? e.setProperty(t, n) : e[t] = n == null ? "" : typeof n != "number" || Fy.test(t) ? n : n + "px";
}
function ws(e, t, n, o, s) {
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
  this.l[e.type + !1](pe.event ? pe.event(e) : e);
}
function tf(e) {
  this.l[e.type + !0](pe.event ? pe.event(e) : e);
}
function jh(e, t, n, o, s, r, l, a, _) {
  var d, i, h, f, c, u, y, p, m, v, $, w, C, x, E, g = t.type;
  if (t.constructor !== void 0)
    return null;
  n.__h != null && (_ = n.__h, a = t.__e = n.__e, t.__h = null, r = [a]), (d = pe.__b) && d(t);
  try {
    e:
      if (typeof g == "function") {
        if (p = t.props, m = (d = g.contextType) && o[d.__c], v = d ? m ? m.props.value : d.__ : o, n.__c ? y = (i = t.__c = n.__c).__ = i.__E : ("prototype" in g && g.prototype.render ? t.__c = i = new g(p, v) : (t.__c = i = new Qo(p, v), i.constructor = g, i.render = qy), m && m.sub(i), i.props = p, i.state || (i.state = {}), i.context = v, i.__n = o, h = i.__d = !0, i.__h = [], i._sb = []), i.__s == null && (i.__s = i.state), g.getDerivedStateFromProps != null && (i.__s == i.state && (i.__s = jt({}, i.__s)), jt(i.__s, g.getDerivedStateFromProps(p, i.__s))), f = i.props, c = i.state, h)
          g.getDerivedStateFromProps == null && i.componentWillMount != null && i.componentWillMount(), i.componentDidMount != null && i.__h.push(i.componentDidMount);
        else {
          if (g.getDerivedStateFromProps == null && p !== f && i.componentWillReceiveProps != null && i.componentWillReceiveProps(p, v), !i.__e && i.shouldComponentUpdate != null && i.shouldComponentUpdate(p, i.__s, v) === !1 || t.__v === n.__v) {
            for (i.props = p, i.state = i.__s, t.__v !== n.__v && (i.__d = !1), i.__v = t, t.__e = n.__e, t.__k = n.__k, t.__k.forEach(function(k) {
              k && (k.__ = t);
            }), $ = 0; $ < i._sb.length; $++)
              i.__h.push(i._sb[$]);
            i._sb = [], i.__h.length && l.push(i);
            break e;
          }
          i.componentWillUpdate != null && i.componentWillUpdate(p, i.__s, v), i.componentDidUpdate != null && i.__h.push(function() {
            i.componentDidUpdate(f, c, u);
          });
        }
        if (i.context = v, i.props = p, i.__v = t, i.__P = e, w = pe.__r, C = 0, "prototype" in g && g.prototype.render) {
          for (i.state = i.__s, i.__d = !1, w && w(t), d = i.render(i.props, i.state, i.context), x = 0; x < i._sb.length; x++)
            i.__h.push(i._sb[x]);
          i._sb = [];
        } else
          do
            i.__d = !1, w && w(t), d = i.render(i.props, i.state, i.context), i.state = i.__s;
          while (i.__d && ++C < 25);
        i.state = i.__s, i.getChildContext != null && (o = jt(jt({}, o), i.getChildContext())), h || i.getSnapshotBeforeUpdate == null || (u = i.getSnapshotBeforeUpdate(f, c)), E = d != null && d.type === cc && d.key == null ? d.props.children : d, Uh(e, Array.isArray(E) ? E : [E], t, n, o, s, r, l, a, _), i.base = t.__e, t.__h = null, i.__h.length && l.push(i), y && (i.__E = i.__ = null), i.__e = !1;
      } else
        r == null && t.__v === n.__v ? (t.__k = n.__k, t.__e = n.__e) : t.__e = Yy(n.__e, t, n, o, s, r, l, _);
    (d = pe.diffed) && d(t);
  } catch (k) {
    t.__v = null, (_ || r != null) && (t.__e = a, t.__h = !!_, r[r.indexOf(a)] = null), pe.__e(k, t, n);
  }
}
function zy(e, t) {
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
function Yy(e, t, n, o, s, r, l, a) {
  var _, d, i, h = n.props, f = t.props, c = t.type, u = 0;
  if (c === "svg" && (s = !0), r != null) {
    for (; u < r.length; u++)
      if ((_ = r[u]) && "setAttribute" in _ == !!c && (c ? _.localName === c : _.nodeType === 3)) {
        e = _, r[u] = null;
        break;
      }
  }
  if (e == null) {
    if (c === null)
      return document.createTextNode(f);
    e = s ? document.createElementNS("http://www.w3.org/2000/svg", c) : document.createElement(c, f.is && f), r = null, a = !1;
  }
  if (c === null)
    h === f || a && e.data === f || (e.data = f);
  else {
    if (r = r && Nh.call(e.childNodes), d = (h = n.props || Rh).dangerouslySetInnerHTML, i = f.dangerouslySetInnerHTML, !a) {
      if (r != null)
        for (h = {}, u = 0; u < e.attributes.length; u++)
          h[e.attributes[u].name] = e.attributes[u].value;
      (i || d) && (i && (d && i.__html == d.__html || i.__html === e.innerHTML) || (e.innerHTML = i && i.__html || ""));
    }
    if (Vy(e, f, h, s, a), i)
      t.__k = [];
    else if (u = t.props.children, Uh(e, Array.isArray(u) ? u : [u], t, n, o, s && c !== "foreignObject", r, l, r ? r[0] : n.__k && Ar(n, 0), a), r != null)
      for (u = r.length; u--; )
        r[u] != null && Wh(r[u]);
    a || ("value" in f && (u = f.value) !== void 0 && (u !== e.value || c === "progress" && !u || c === "option" && u !== h.value) && ws(e, "value", u, h.value, !1), "checked" in f && (u = f.checked) !== void 0 && u !== e.checked && ws(e, "checked", u, h.checked, !1));
  }
  return e;
}
function Vh(e, t, n) {
  try {
    typeof e == "function" ? e(t) : e.current = t;
  } catch (o) {
    pe.__e(o, n);
  }
}
function zh(e, t, n) {
  var o, s;
  if (pe.unmount && pe.unmount(e), (o = e.ref) && (o.current && o.current !== e.__e || Vh(o, null, t)), (o = e.__c) != null) {
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
      o[s] && zh(o[s], t, n || typeof e.type != "function");
  n || e.__e == null || Wh(e.__e), e.__ = e.__e = e.__d = void 0;
}
function qy(e, t, n) {
  return this.constructor(e, n);
}
Nh = Hh.slice, pe = { __e: function(e, t, n, o) {
  for (var s, r, l; t = t.__; )
    if ((s = t.__c) && !s.__)
      try {
        if ((r = s.constructor) && r.getDerivedStateFromError != null && (s.setState(r.getDerivedStateFromError(e)), l = s.__d), s.componentDidCatch != null && (s.componentDidCatch(e, o || {}), l = s.__d), l)
          return s.__E = s;
      } catch (a) {
        e = a;
      }
  throw e;
} }, Ph = 0, Qo.prototype.setState = function(e, t) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = jt({}, this.state), typeof e == "function" && (e = e(jt({}, n), this.props)), e && jt(n, e), e != null && this.__v && (t && this._sb.push(t), J_(this));
}, Qo.prototype.forceUpdate = function(e) {
  this.__v && (this.__e = !0, e && this.__h.push(e), J_(this));
}, Qo.prototype.render = cc, Jo = [], bs.__r = 0;
var Gy = 0;
function Yh(e, t, n, o, s) {
  var r, l, a = {};
  for (l in t)
    l == "ref" ? r = t[l] : a[l] = t[l];
  var _ = { type: e, props: a, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: --Gy, __source: s, __self: o };
  if (typeof e == "function" && (r = e.defaultProps))
    for (l in r)
      a[l] === void 0 && (a[l] = r[l]);
  return pe.vnode && pe.vnode(_), _;
}
var _c = "top", qh = "bottom", $s = "right", Mr = "left", Xy = "auto", Gh = [_c, qh, $s, Mr], Ky = "start", Zy = "end", Jy = /* @__PURE__ */ [].concat(Gh, [Xy]).reduce(function(e, t) {
  return e.concat([t, t + "-" + Ky, t + "-" + Zy]);
}, []);
function Xh(e) {
  return e.split("-")[0];
}
function mo(e) {
  if (e == null)
    return window;
  if (e.toString() !== "[object Window]") {
    var t = e.ownerDocument;
    return t && t.defaultView || window;
  }
  return e;
}
function Kh(e) {
  var t = mo(e).Element;
  return e instanceof t || e instanceof Element;
}
function ks(e) {
  var t = mo(e).HTMLElement;
  return e instanceof t || e instanceof HTMLElement;
}
function fc(e) {
  if (typeof ShadowRoot > "u")
    return !1;
  var t = mo(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot;
}
var Qy = Math.max, eb = Math.min, nf = Math.round;
function Ta() {
  var e = navigator.userAgentData;
  return e != null && e.brands ? e.brands.map(function(t) {
    return t.brand + "/" + t.version;
  }).join(" ") : navigator.userAgent;
}
function tb() {
  return !/^((?!chrome|android).)*safari/i.test(Ta());
}
function nb(e, t, n) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  var o = e.getBoundingClientRect(), s = 1, r = 1;
  t && ks(e) && (s = e.offsetWidth > 0 && nf(o.width) / e.offsetWidth || 1, r = e.offsetHeight > 0 && nf(o.height) / e.offsetHeight || 1);
  var l = Kh(e) ? mo(e) : window, a = l.visualViewport, _ = !tb() && n, d = (o.left + (_ && a ? a.offsetLeft : 0)) / s, i = (o.top + (_ && a ? a.offsetTop : 0)) / r, h = o.width / s, f = o.height / r;
  return {
    width: h,
    height: f,
    top: i,
    right: d + h,
    bottom: i + f,
    left: d,
    x: d,
    y: i
  };
}
function ob(e) {
  var t = nb(e), n = e.offsetWidth, o = e.offsetHeight;
  return Math.abs(t.width - n) <= 1 && (n = t.width), Math.abs(t.height - o) <= 1 && (o = t.height), {
    x: e.offsetLeft,
    y: e.offsetTop,
    width: n,
    height: o
  };
}
function rb(e, t) {
  var n = t.getRootNode && t.getRootNode();
  if (e.contains(t))
    return !0;
  if (n && fc(n)) {
    var o = t;
    do {
      if (o && e.isSameNode(o))
        return !0;
      o = o.parentNode || o.host;
    } while (o);
  }
  return !1;
}
function Tr(e) {
  return e ? (e.nodeName || "").toLowerCase() : null;
}
function Lr(e) {
  return mo(e).getComputedStyle(e);
}
function ib(e) {
  return ["table", "td", "th"].indexOf(Tr(e)) >= 0;
}
function sb(e) {
  return ((Kh(e) ? e.ownerDocument : (
    // $FlowFixMe[prop-missing]
    e.document
  )) || window.document).documentElement;
}
function lb(e) {
  return Tr(e) === "html" ? e : (
    // this is a quicker (but less type safe) way to save quite some bytes from the bundle
    // $FlowFixMe[incompatible-return]
    // $FlowFixMe[prop-missing]
    e.assignedSlot || // step into the shadow DOM of the parent of a slotted node
    e.parentNode || // DOM Element detected
    (fc(e) ? e.host : null) || // ShadowRoot detected
    // $FlowFixMe[incompatible-call]: HTMLElement is a Node
    sb(e)
  );
}
function of(e) {
  return !ks(e) || // https://github.com/popperjs/popper-core/issues/837
  Lr(e).position === "fixed" ? null : e.offsetParent;
}
function ab(e) {
  var t = /firefox/i.test(Ta()), n = /Trident/i.test(Ta());
  if (n && ks(e)) {
    var o = Lr(e);
    if (o.position === "fixed")
      return null;
  }
  var s = lb(e);
  for (fc(s) && (s = s.host); ks(s) && ["html", "body"].indexOf(Tr(s)) < 0; ) {
    var r = Lr(s);
    if (r.transform !== "none" || r.perspective !== "none" || r.contain === "paint" || ["transform", "perspective"].indexOf(r.willChange) !== -1 || t && r.willChange === "filter" || t && r.filter && r.filter !== "none")
      return s;
    s = s.parentNode;
  }
  return null;
}
function cb(e) {
  for (var t = mo(e), n = of(e); n && ib(n) && Lr(n).position === "static"; )
    n = of(n);
  return n && (Tr(n) === "html" || Tr(n) === "body" && Lr(n).position === "static") ? t : n || ab(e) || t;
}
function _b(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function fb(e, t, n) {
  return Qy(e, eb(t, n));
}
function ub() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
function db(e) {
  return Object.assign({}, ub(), e);
}
function hb(e, t) {
  return t.reduce(function(n, o) {
    return n[o] = e, n;
  }, {});
}
var pb = function(t, n) {
  return t = typeof t == "function" ? t(Object.assign({}, n.rects, {
    placement: n.placement
  })) : t, db(typeof t != "number" ? t : hb(t, Gh));
};
function mb(e) {
  var t, n = e.state, o = e.name, s = e.options, r = n.elements.arrow, l = n.modifiersData.popperOffsets, a = Xh(n.placement), _ = _b(a), d = [Mr, $s].indexOf(a) >= 0, i = d ? "height" : "width";
  if (!(!r || !l)) {
    var h = pb(s.padding, n), f = ob(r), c = _ === "y" ? _c : Mr, u = _ === "y" ? qh : $s, y = n.rects.reference[i] + n.rects.reference[_] - l[_] - n.rects.popper[i], p = l[_] - n.rects.reference[_], m = cb(r), v = m ? _ === "y" ? m.clientHeight || 0 : m.clientWidth || 0 : 0, $ = y / 2 - p / 2, w = h[c], C = v - f[i] - h[u], x = v / 2 - f[i] / 2 + $, E = fb(w, x, C), g = _;
    n.modifiersData[o] = (t = {}, t[g] = E, t.centerOffset = E - x, t);
  }
}
function vb(e) {
  var t = e.state, n = e.options, o = n.element, s = o === void 0 ? "[data-popper-arrow]" : o;
  s != null && (typeof s == "string" && (s = t.elements.popper.querySelector(s), !s) || rb(t.elements.popper, s) && (t.elements.arrow = s));
}
const gb = {
  name: "arrow",
  enabled: !0,
  phase: "main",
  fn: mb,
  effect: vb,
  requires: ["popperOffsets"],
  requiresIfExists: ["preventOverflow"]
};
function yb(e, t, n) {
  var o = Xh(e), s = [Mr, _c].indexOf(o) >= 0 ? -1 : 1, r = typeof n == "function" ? n(Object.assign({}, t, {
    placement: e
  })) : n, l = r[0], a = r[1];
  return l = l || 0, a = (a || 0) * s, [Mr, $s].indexOf(o) >= 0 ? {
    x: a,
    y: l
  } : {
    x: l,
    y: a
  };
}
function bb(e) {
  var t = e.state, n = e.options, o = e.name, s = n.offset, r = s === void 0 ? [0, 0] : s, l = Jy.reduce(function(i, h) {
    return i[h] = yb(h, t.rects, r), i;
  }, {}), a = l[t.placement], _ = a.x, d = a.y;
  t.modifiersData.popperOffsets != null && (t.modifiersData.popperOffsets.x += _, t.modifiersData.popperOffsets.y += d), t.modifiersData[o] = l;
}
const wb = {
  name: "offset",
  enabled: !0,
  phase: "main",
  requires: ["popperOffsets"],
  fn: bb
};
var Zl, ae, Zh, er, rf, xs = {}, Jh = [], $b = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function Vt(e, t) {
  for (var n in t)
    e[n] = t[n];
  return e;
}
function Qh(e) {
  var t = e.parentNode;
  t && t.removeChild(e);
}
function ep(e, t, n) {
  var o, s, r, l = {};
  for (r in t)
    r == "key" ? o = t[r] : r == "ref" ? s = t[r] : l[r] = t[r];
  if (arguments.length > 2 && (l.children = arguments.length > 3 ? Zl.call(arguments, 2) : n), typeof e == "function" && e.defaultProps != null)
    for (r in e.defaultProps)
      l[r] === void 0 && (l[r] = e.defaultProps[r]);
  return Wi(e, l, o, s, null);
}
function Wi(e, t, n, o, s) {
  var r = { type: e, props: t, key: n, ref: o, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: s ?? ++Zh };
  return s == null && ae.vnode != null && ae.vnode(r), r;
}
function Jl(e) {
  return e.children;
}
function Ii(e, t) {
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
function tp(e) {
  var t, n;
  if ((e = e.__) != null && e.__c != null) {
    for (e.__e = e.__c.base = null, t = 0; t < e.__k.length; t++)
      if ((n = e.__k[t]) != null && n.__e != null) {
        e.__e = e.__c.base = n.__e;
        break;
      }
    return tp(e);
  }
}
function sf(e) {
  (!e.__d && (e.__d = !0) && er.push(e) && !Ss.__r++ || rf !== ae.debounceRendering) && ((rf = ae.debounceRendering) || setTimeout)(Ss);
}
function Ss() {
  for (var e; Ss.__r = er.length; )
    e = er.sort(function(t, n) {
      return t.__v.__b - n.__v.__b;
    }), er = [], e.some(function(t) {
      var n, o, s, r, l, a;
      t.__d && (l = (r = (n = t).__v).__e, (a = n.__P) && (o = [], (s = Vt({}, r)).__v = r.__v + 1, uc(a, r, s, n.__n, a.ownerSVGElement !== void 0, r.__h != null ? [l] : null, o, l ?? Dr(r), r.__h), ip(o, r), r.__e != l && tp(r)));
    });
}
function np(e, t, n, o, s, r, l, a, _, d) {
  var i, h, f, c, u, y, p, m = o && o.__k || Jh, v = m.length;
  for (n.__k = [], i = 0; i < t.length; i++)
    if ((c = n.__k[i] = (c = t[i]) == null || typeof c == "boolean" ? null : typeof c == "string" || typeof c == "number" || typeof c == "bigint" ? Wi(null, c, null, null, c) : Array.isArray(c) ? Wi(Jl, { children: c }, null, null, null) : c.__b > 0 ? Wi(c.type, c.props, c.key, c.ref ? c.ref : null, c.__v) : c) != null) {
      if (c.__ = n, c.__b = n.__b + 1, (f = m[i]) === null || f && c.key == f.key && c.type === f.type)
        m[i] = void 0;
      else
        for (h = 0; h < v; h++) {
          if ((f = m[h]) && c.key == f.key && c.type === f.type) {
            m[h] = void 0;
            break;
          }
          f = null;
        }
      uc(e, c, f = f || xs, s, r, l, a, _, d), u = c.__e, (h = c.ref) && f.ref != h && (p || (p = []), f.ref && p.push(f.ref, null, c), p.push(h, c.__c || u, c)), u != null ? (y == null && (y = u), typeof c.type == "function" && c.__k === f.__k ? c.__d = _ = op(c, _, e) : _ = rp(e, c, f, m, u, _), typeof n.type == "function" && (n.__d = _)) : _ && f.__e == _ && _.parentNode != e && (_ = Dr(f));
    }
  for (n.__e = y, i = v; i--; )
    m[i] != null && lp(m[i], m[i]);
  if (p)
    for (i = 0; i < p.length; i++)
      sp(p[i], p[++i], p[++i]);
}
function op(e, t, n) {
  for (var o, s = e.__k, r = 0; s && r < s.length; r++)
    (o = s[r]) && (o.__ = e, t = typeof o.type == "function" ? op(o, t, n) : rp(n, o, o, s, o.__e, t));
  return t;
}
function rp(e, t, n, o, s, r) {
  var l, a, _;
  if (t.__d !== void 0)
    l = t.__d, t.__d = void 0;
  else if (n == null || s != r || s.parentNode == null)
    e:
      if (r == null || r.parentNode !== e)
        e.appendChild(s), l = null;
      else {
        for (a = r, _ = 0; (a = a.nextSibling) && _ < o.length; _ += 2)
          if (a == s)
            break e;
        e.insertBefore(s, r), l = r;
      }
  return l !== void 0 ? l : s.nextSibling;
}
function kb(e, t, n, o, s) {
  var r;
  for (r in n)
    r === "children" || r === "key" || r in t || Cs(e, r, null, n[r], o);
  for (r in t)
    s && typeof t[r] != "function" || r === "children" || r === "key" || r === "value" || r === "checked" || n[r] === t[r] || Cs(e, r, t[r], n[r], o);
}
function lf(e, t, n) {
  t[0] === "-" ? e.setProperty(t, n) : e[t] = n == null ? "" : typeof n != "number" || $b.test(t) ? n : n + "px";
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
            n && t in n || lf(e.style, t, "");
        if (n)
          for (t in n)
            o && n[t] === o[t] || lf(e.style, t, n[t]);
      }
    else if (t[0] === "o" && t[1] === "n")
      r = t !== (t = t.replace(/Capture$/, "")), t = t.toLowerCase() in e ? t.toLowerCase().slice(2) : t.slice(2), e.l || (e.l = {}), e.l[t + r] = n, n ? o || e.addEventListener(t, r ? cf : af, r) : e.removeEventListener(t, r ? cf : af, r);
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
function af(e) {
  this.l[e.type + !1](ae.event ? ae.event(e) : e);
}
function cf(e) {
  this.l[e.type + !0](ae.event ? ae.event(e) : e);
}
function uc(e, t, n, o, s, r, l, a, _) {
  var d, i, h, f, c, u, y, p, m, v, $, w, C, x, E, g = t.type;
  if (t.constructor !== void 0)
    return null;
  n.__h != null && (_ = n.__h, a = t.__e = n.__e, t.__h = null, r = [a]), (d = ae.__b) && d(t);
  try {
    e:
      if (typeof g == "function") {
        if (p = t.props, m = (d = g.contextType) && o[d.__c], v = d ? m ? m.props.value : d.__ : o, n.__c ? y = (i = t.__c = n.__c).__ = i.__E : ("prototype" in g && g.prototype.render ? t.__c = i = new g(p, v) : (t.__c = i = new Ii(p, v), i.constructor = g, i.render = Sb), m && m.sub(i), i.props = p, i.state || (i.state = {}), i.context = v, i.__n = o, h = i.__d = !0, i.__h = [], i._sb = []), i.__s == null && (i.__s = i.state), g.getDerivedStateFromProps != null && (i.__s == i.state && (i.__s = Vt({}, i.__s)), Vt(i.__s, g.getDerivedStateFromProps(p, i.__s))), f = i.props, c = i.state, h)
          g.getDerivedStateFromProps == null && i.componentWillMount != null && i.componentWillMount(), i.componentDidMount != null && i.__h.push(i.componentDidMount);
        else {
          if (g.getDerivedStateFromProps == null && p !== f && i.componentWillReceiveProps != null && i.componentWillReceiveProps(p, v), !i.__e && i.shouldComponentUpdate != null && i.shouldComponentUpdate(p, i.__s, v) === !1 || t.__v === n.__v) {
            for (i.props = p, i.state = i.__s, t.__v !== n.__v && (i.__d = !1), i.__v = t, t.__e = n.__e, t.__k = n.__k, t.__k.forEach(function(k) {
              k && (k.__ = t);
            }), $ = 0; $ < i._sb.length; $++)
              i.__h.push(i._sb[$]);
            i._sb = [], i.__h.length && l.push(i);
            break e;
          }
          i.componentWillUpdate != null && i.componentWillUpdate(p, i.__s, v), i.componentDidUpdate != null && i.__h.push(function() {
            i.componentDidUpdate(f, c, u);
          });
        }
        if (i.context = v, i.props = p, i.__v = t, i.__P = e, w = ae.__r, C = 0, "prototype" in g && g.prototype.render) {
          for (i.state = i.__s, i.__d = !1, w && w(t), d = i.render(i.props, i.state, i.context), x = 0; x < i._sb.length; x++)
            i.__h.push(i._sb[x]);
          i._sb = [];
        } else
          do
            i.__d = !1, w && w(t), d = i.render(i.props, i.state, i.context), i.state = i.__s;
          while (i.__d && ++C < 25);
        i.state = i.__s, i.getChildContext != null && (o = Vt(Vt({}, o), i.getChildContext())), h || i.getSnapshotBeforeUpdate == null || (u = i.getSnapshotBeforeUpdate(f, c)), E = d != null && d.type === Jl && d.key == null ? d.props.children : d, np(e, Array.isArray(E) ? E : [E], t, n, o, s, r, l, a, _), i.base = t.__e, t.__h = null, i.__h.length && l.push(i), y && (i.__E = i.__ = null), i.__e = !1;
      } else
        r == null && t.__v === n.__v ? (t.__k = n.__k, t.__e = n.__e) : t.__e = xb(n.__e, t, n, o, s, r, l, _);
    (d = ae.diffed) && d(t);
  } catch (k) {
    t.__v = null, (_ || r != null) && (t.__e = a, t.__h = !!_, r[r.indexOf(a)] = null), ae.__e(k, t, n);
  }
}
function ip(e, t) {
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
function xb(e, t, n, o, s, r, l, a) {
  var _, d, i, h = n.props, f = t.props, c = t.type, u = 0;
  if (c === "svg" && (s = !0), r != null) {
    for (; u < r.length; u++)
      if ((_ = r[u]) && "setAttribute" in _ == !!c && (c ? _.localName === c : _.nodeType === 3)) {
        e = _, r[u] = null;
        break;
      }
  }
  if (e == null) {
    if (c === null)
      return document.createTextNode(f);
    e = s ? document.createElementNS("http://www.w3.org/2000/svg", c) : document.createElement(c, f.is && f), r = null, a = !1;
  }
  if (c === null)
    h === f || a && e.data === f || (e.data = f);
  else {
    if (r = r && Zl.call(e.childNodes), d = (h = n.props || xs).dangerouslySetInnerHTML, i = f.dangerouslySetInnerHTML, !a) {
      if (r != null)
        for (h = {}, u = 0; u < e.attributes.length; u++)
          h[e.attributes[u].name] = e.attributes[u].value;
      (i || d) && (i && (d && i.__html == d.__html || i.__html === e.innerHTML) || (e.innerHTML = i && i.__html || ""));
    }
    if (kb(e, f, h, s, a), i)
      t.__k = [];
    else if (u = t.props.children, np(e, Array.isArray(u) ? u : [u], t, n, o, s && c !== "foreignObject", r, l, r ? r[0] : n.__k && Dr(n, 0), a), r != null)
      for (u = r.length; u--; )
        r[u] != null && Qh(r[u]);
    a || ("value" in f && (u = f.value) !== void 0 && (u !== e.value || c === "progress" && !u || c === "option" && u !== h.value) && Cs(e, "value", u, h.value, !1), "checked" in f && (u = f.checked) !== void 0 && u !== e.checked && Cs(e, "checked", u, h.checked, !1));
  }
  return e;
}
function sp(e, t, n) {
  try {
    typeof e == "function" ? e(t) : e.current = t;
  } catch (o) {
    ae.__e(o, n);
  }
}
function lp(e, t, n) {
  var o, s;
  if (ae.unmount && ae.unmount(e), (o = e.ref) && (o.current && o.current !== e.__e || sp(o, null, t)), (o = e.__c) != null) {
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
      o[s] && lp(o[s], t, n || typeof e.type != "function");
  n || e.__e == null || Qh(e.__e), e.__ = e.__e = e.__d = void 0;
}
function Sb(e, t, n) {
  return this.constructor(e, n);
}
function Cb(e, t, n) {
  var o, s, r;
  ae.__ && ae.__(e, t), s = (o = typeof n == "function") ? null : n && n.__k || t.__k, r = [], uc(t, e = (!o && n || t).__k = ep(Jl, null, [e]), s || xs, xs, t.ownerSVGElement !== void 0, !o && n ? [n] : s ? null : t.firstChild ? Zl.call(t.childNodes) : null, r, !o && n ? n : s ? s.__e : t.firstChild, o), ip(r, e);
}
Zl = Jh.slice, ae = { __e: function(e, t, n, o) {
  for (var s, r, l; t = t.__; )
    if ((s = t.__c) && !s.__)
      try {
        if ((r = s.constructor) && r.getDerivedStateFromError != null && (s.setState(r.getDerivedStateFromError(e)), l = s.__d), s.componentDidCatch != null && (s.componentDidCatch(e, o || {}), l = s.__d), l)
          return s.__E = s;
      } catch (a) {
        e = a;
      }
  throw e;
} }, Zh = 0, Ii.prototype.setState = function(e, t) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = Vt({}, this.state), typeof e == "function" && (e = e(Vt({}, n), this.props)), e && Vt(n, e), e != null && this.__v && (t && this._sb.push(t), sf(this));
}, Ii.prototype.forceUpdate = function(e) {
  this.__v && (this.__e = !0, e && this.__h.push(e), sf(this));
}, Ii.prototype.render = Jl, er = [], Ss.__r = 0;
function Ve(e) {
  if (e == null)
    return window;
  if (e.toString() !== "[object Window]") {
    var t = e.ownerDocument;
    return t && t.defaultView || window;
  }
  return e;
}
function $n(e) {
  var t = Ve(e).Element;
  return e instanceof t || e instanceof Element;
}
function Fe(e) {
  var t = Ve(e).HTMLElement;
  return e instanceof t || e instanceof HTMLElement;
}
function dc(e) {
  if (typeof ShadowRoot > "u")
    return !1;
  var t = Ve(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot;
}
var bn = Math.max, Es = Math.min, io = Math.round;
function La() {
  var e = navigator.userAgentData;
  return e != null && e.brands ? e.brands.map(function(t) {
    return t.brand + "/" + t.version;
  }).join(" ") : navigator.userAgent;
}
function ap() {
  return !/^((?!chrome|android).)*safari/i.test(La());
}
function so(e, t, n) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  var o = e.getBoundingClientRect(), s = 1, r = 1;
  t && Fe(e) && (s = e.offsetWidth > 0 && io(o.width) / e.offsetWidth || 1, r = e.offsetHeight > 0 && io(o.height) / e.offsetHeight || 1);
  var l = $n(e) ? Ve(e) : window, a = l.visualViewport, _ = !ap() && n, d = (o.left + (_ && a ? a.offsetLeft : 0)) / s, i = (o.top + (_ && a ? a.offsetTop : 0)) / r, h = o.width / s, f = o.height / r;
  return {
    width: h,
    height: f,
    top: i,
    right: d + h,
    bottom: i + f,
    left: d,
    x: d,
    y: i
  };
}
function hc(e) {
  var t = Ve(e), n = t.pageXOffset, o = t.pageYOffset;
  return {
    scrollLeft: n,
    scrollTop: o
  };
}
function Eb(e) {
  return {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  };
}
function Ab(e) {
  return e === Ve(e) || !Fe(e) ? hc(e) : Eb(e);
}
function ct(e) {
  return e ? (e.nodeName || "").toLowerCase() : null;
}
function ln(e) {
  return (($n(e) ? e.ownerDocument : (
    // $FlowFixMe[prop-missing]
    e.document
  )) || window.document).documentElement;
}
function pc(e) {
  return so(ln(e)).left + hc(e).scrollLeft;
}
function $t(e) {
  return Ve(e).getComputedStyle(e);
}
function mc(e) {
  var t = $t(e), n = t.overflow, o = t.overflowX, s = t.overflowY;
  return /auto|scroll|overlay|hidden/.test(n + s + o);
}
function Mb(e) {
  var t = e.getBoundingClientRect(), n = io(t.width) / e.offsetWidth || 1, o = io(t.height) / e.offsetHeight || 1;
  return n !== 1 || o !== 1;
}
function Tb(e, t, n) {
  n === void 0 && (n = !1);
  var o = Fe(t), s = Fe(t) && Mb(t), r = ln(t), l = so(e, s, n), a = {
    scrollLeft: 0,
    scrollTop: 0
  }, _ = {
    x: 0,
    y: 0
  };
  return (o || !o && !n) && ((ct(t) !== "body" || // https://github.com/popperjs/popper-core/issues/1078
  mc(r)) && (a = Ab(t)), Fe(t) ? (_ = so(t, !0), _.x += t.clientLeft, _.y += t.clientTop) : r && (_.x = pc(r))), {
    x: l.left + a.scrollLeft - _.x,
    y: l.top + a.scrollTop - _.y,
    width: l.width,
    height: l.height
  };
}
function cp(e) {
  var t = so(e), n = e.offsetWidth, o = e.offsetHeight;
  return Math.abs(t.width - n) <= 1 && (n = t.width), Math.abs(t.height - o) <= 1 && (o = t.height), {
    x: e.offsetLeft,
    y: e.offsetTop,
    width: n,
    height: o
  };
}
function Ql(e) {
  return ct(e) === "html" ? e : (
    // this is a quicker (but less type safe) way to save quite some bytes from the bundle
    // $FlowFixMe[incompatible-return]
    // $FlowFixMe[prop-missing]
    e.assignedSlot || // step into the shadow DOM of the parent of a slotted node
    e.parentNode || // DOM Element detected
    (dc(e) ? e.host : null) || // ShadowRoot detected
    // $FlowFixMe[incompatible-call]: HTMLElement is a Node
    ln(e)
  );
}
function _p(e) {
  return ["html", "body", "#document"].indexOf(ct(e)) >= 0 ? e.ownerDocument.body : Fe(e) && mc(e) ? e : _p(Ql(e));
}
function tr(e, t) {
  var n;
  t === void 0 && (t = []);
  var o = _p(e), s = o === ((n = e.ownerDocument) == null ? void 0 : n.body), r = Ve(o), l = s ? [r].concat(r.visualViewport || [], mc(o) ? o : []) : o, a = t.concat(l);
  return s ? a : (
    // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
    a.concat(tr(Ql(l)))
  );
}
function Lb(e) {
  return ["table", "td", "th"].indexOf(ct(e)) >= 0;
}
function _f(e) {
  return !Fe(e) || // https://github.com/popperjs/popper-core/issues/837
  $t(e).position === "fixed" ? null : e.offsetParent;
}
function Db(e) {
  var t = /firefox/i.test(La()), n = /Trident/i.test(La());
  if (n && Fe(e)) {
    var o = $t(e);
    if (o.position === "fixed")
      return null;
  }
  var s = Ql(e);
  for (dc(s) && (s = s.host); Fe(s) && ["html", "body"].indexOf(ct(s)) < 0; ) {
    var r = $t(s);
    if (r.transform !== "none" || r.perspective !== "none" || r.contain === "paint" || ["transform", "perspective"].indexOf(r.willChange) !== -1 || t && r.willChange === "filter" || t && r.filter && r.filter !== "none")
      return s;
    s = s.parentNode;
  }
  return null;
}
function ea(e) {
  for (var t = Ve(e), n = _f(e); n && Lb(n) && $t(n).position === "static"; )
    n = _f(n);
  return n && (ct(n) === "html" || ct(n) === "body" && $t(n).position === "static") ? t : n || Db(e) || t;
}
var Ge = "top", _t = "bottom", nn = "right", bt = "left", vc = "auto", ta = [Ge, _t, nn, bt], lo = "start", Or = "end", Ob = "clippingParents", fp = "viewport", So = "popper", Nb = "reference", ff = /* @__PURE__ */ ta.reduce(function(e, t) {
  return e.concat([t + "-" + lo, t + "-" + Or]);
}, []), Pb = /* @__PURE__ */ [].concat(ta, [vc]).reduce(function(e, t) {
  return e.concat([t, t + "-" + lo, t + "-" + Or]);
}, []), Rb = "beforeRead", Hb = "read", Wb = "afterRead", Ib = "beforeMain", Ub = "main", Bb = "afterMain", Fb = "beforeWrite", jb = "write", Vb = "afterWrite", zb = [Rb, Hb, Wb, Ib, Ub, Bb, Fb, jb, Vb];
function Yb(e) {
  var t = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Set(), o = [];
  e.forEach(function(r) {
    t.set(r.name, r);
  });
  function s(r) {
    n.add(r.name);
    var l = [].concat(r.requires || [], r.requiresIfExists || []);
    l.forEach(function(a) {
      if (!n.has(a)) {
        var _ = t.get(a);
        _ && s(_);
      }
    }), o.push(r);
  }
  return e.forEach(function(r) {
    n.has(r.name) || s(r);
  }), o;
}
function qb(e) {
  var t = Yb(e);
  return zb.reduce(function(n, o) {
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
function Kt(e) {
  return e.split("-")[0];
}
function Xb(e) {
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
function Kb(e, t) {
  var n = Ve(e), o = ln(e), s = n.visualViewport, r = o.clientWidth, l = o.clientHeight, a = 0, _ = 0;
  if (s) {
    r = s.width, l = s.height;
    var d = ap();
    (d || !d && t === "fixed") && (a = s.offsetLeft, _ = s.offsetTop);
  }
  return {
    width: r,
    height: l,
    x: a + pc(e),
    y: _
  };
}
function Zb(e) {
  var t, n = ln(e), o = hc(e), s = (t = e.ownerDocument) == null ? void 0 : t.body, r = bn(n.scrollWidth, n.clientWidth, s ? s.scrollWidth : 0, s ? s.clientWidth : 0), l = bn(n.scrollHeight, n.clientHeight, s ? s.scrollHeight : 0, s ? s.clientHeight : 0), a = -o.scrollLeft + pc(e), _ = -o.scrollTop;
  return $t(s || n).direction === "rtl" && (a += bn(n.clientWidth, s ? s.clientWidth : 0) - r), {
    width: r,
    height: l,
    x: a,
    y: _
  };
}
function Jb(e, t) {
  var n = t.getRootNode && t.getRootNode();
  if (e.contains(t))
    return !0;
  if (n && dc(n)) {
    var o = t;
    do {
      if (o && e.isSameNode(o))
        return !0;
      o = o.parentNode || o.host;
    } while (o);
  }
  return !1;
}
function Da(e) {
  return Object.assign({}, e, {
    left: e.x,
    top: e.y,
    right: e.x + e.width,
    bottom: e.y + e.height
  });
}
function Qb(e, t) {
  var n = so(e, !1, t === "fixed");
  return n.top = n.top + e.clientTop, n.left = n.left + e.clientLeft, n.bottom = n.top + e.clientHeight, n.right = n.left + e.clientWidth, n.width = e.clientWidth, n.height = e.clientHeight, n.x = n.left, n.y = n.top, n;
}
function uf(e, t, n) {
  return t === fp ? Da(Kb(e, n)) : $n(t) ? Qb(t, n) : Da(Zb(ln(e)));
}
function e0(e) {
  var t = tr(Ql(e)), n = ["absolute", "fixed"].indexOf($t(e).position) >= 0, o = n && Fe(e) ? ea(e) : e;
  return $n(o) ? t.filter(function(s) {
    return $n(s) && Jb(s, o) && ct(s) !== "body";
  }) : [];
}
function t0(e, t, n, o) {
  var s = t === "clippingParents" ? e0(e) : [].concat(t), r = [].concat(s, [n]), l = r[0], a = r.reduce(function(_, d) {
    var i = uf(e, d, o);
    return _.top = bn(i.top, _.top), _.right = Es(i.right, _.right), _.bottom = Es(i.bottom, _.bottom), _.left = bn(i.left, _.left), _;
  }, uf(e, l, o));
  return a.width = a.right - a.left, a.height = a.bottom - a.top, a.x = a.left, a.y = a.top, a;
}
function ao(e) {
  return e.split("-")[1];
}
function up(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function dp(e) {
  var t = e.reference, n = e.element, o = e.placement, s = o ? Kt(o) : null, r = o ? ao(o) : null, l = t.x + t.width / 2 - n.width / 2, a = t.y + t.height / 2 - n.height / 2, _;
  switch (s) {
    case Ge:
      _ = {
        x: l,
        y: t.y - n.height
      };
      break;
    case _t:
      _ = {
        x: l,
        y: t.y + t.height
      };
      break;
    case nn:
      _ = {
        x: t.x + t.width,
        y: a
      };
      break;
    case bt:
      _ = {
        x: t.x - n.width,
        y: a
      };
      break;
    default:
      _ = {
        x: t.x,
        y: t.y
      };
  }
  var d = s ? up(s) : null;
  if (d != null) {
    var i = d === "y" ? "height" : "width";
    switch (r) {
      case lo:
        _[d] = _[d] - (t[i] / 2 - n[i] / 2);
        break;
      case Or:
        _[d] = _[d] + (t[i] / 2 - n[i] / 2);
        break;
    }
  }
  return _;
}
function hp() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
function n0(e) {
  return Object.assign({}, hp(), e);
}
function o0(e, t) {
  return t.reduce(function(n, o) {
    return n[o] = e, n;
  }, {});
}
function gc(e, t) {
  t === void 0 && (t = {});
  var n = t, o = n.placement, s = o === void 0 ? e.placement : o, r = n.strategy, l = r === void 0 ? e.strategy : r, a = n.boundary, _ = a === void 0 ? Ob : a, d = n.rootBoundary, i = d === void 0 ? fp : d, h = n.elementContext, f = h === void 0 ? So : h, c = n.altBoundary, u = c === void 0 ? !1 : c, y = n.padding, p = y === void 0 ? 0 : y, m = n0(typeof p != "number" ? p : o0(p, ta)), v = f === So ? Nb : So, $ = e.rects.popper, w = e.elements[u ? v : f], C = t0($n(w) ? w : w.contextElement || ln(e.elements.popper), _, i, l), x = so(e.elements.reference), E = dp({
    reference: x,
    element: $,
    strategy: "absolute",
    placement: s
  }), g = Da(Object.assign({}, $, E)), k = f === So ? g : x, T = {
    top: C.top - k.top + m.top,
    bottom: k.bottom - C.bottom + m.bottom,
    left: C.left - k.left + m.left,
    right: k.right - C.right + m.right
  }, U = e.modifiersData.offset;
  if (f === So && U) {
    var B = U[s];
    Object.keys(T).forEach(function(L) {
      var A = [nn, _t].indexOf(L) >= 0 ? 1 : -1, S = [Ge, _t].indexOf(L) >= 0 ? "y" : "x";
      T[L] += B[S] * A;
    });
  }
  return T;
}
var df = {
  placement: "bottom",
  modifiers: [],
  strategy: "absolute"
};
function hf() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return !t.some(function(o) {
    return !(o && typeof o.getBoundingClientRect == "function");
  });
}
function r0(e) {
  e === void 0 && (e = {});
  var t = e, n = t.defaultModifiers, o = n === void 0 ? [] : n, s = t.defaultOptions, r = s === void 0 ? df : s;
  return function(a, _, d) {
    d === void 0 && (d = r);
    var i = {
      placement: "bottom",
      orderedModifiers: [],
      options: Object.assign({}, df, r),
      modifiersData: {},
      elements: {
        reference: a,
        popper: _
      },
      attributes: {},
      styles: {}
    }, h = [], f = !1, c = {
      state: i,
      setOptions: function(m) {
        var v = typeof m == "function" ? m(i.options) : m;
        y(), i.options = Object.assign({}, r, i.options, v), i.scrollParents = {
          reference: $n(a) ? tr(a) : a.contextElement ? tr(a.contextElement) : [],
          popper: tr(_)
        };
        var $ = qb(Xb([].concat(o, i.options.modifiers)));
        return i.orderedModifiers = $.filter(function(w) {
          return w.enabled;
        }), u(), c.update();
      },
      // Sync update – it will always be executed, even if not necessary. This
      // is useful for low frequency updates where sync behavior simplifies the
      // logic.
      // For high frequency updates (e.g. `resize` and `scroll` events), always
      // prefer the async Popper#update method
      forceUpdate: function() {
        if (!f) {
          var m = i.elements, v = m.reference, $ = m.popper;
          if (hf(v, $)) {
            i.rects = {
              reference: Tb(v, ea($), i.options.strategy === "fixed"),
              popper: cp($)
            }, i.reset = !1, i.placement = i.options.placement, i.orderedModifiers.forEach(function(T) {
              return i.modifiersData[T.name] = Object.assign({}, T.data);
            });
            for (var w = 0; w < i.orderedModifiers.length; w++) {
              if (i.reset === !0) {
                i.reset = !1, w = -1;
                continue;
              }
              var C = i.orderedModifiers[w], x = C.fn, E = C.options, g = E === void 0 ? {} : E, k = C.name;
              typeof x == "function" && (i = x({
                state: i,
                options: g,
                name: k,
                instance: c
              }) || i);
            }
          }
        }
      },
      // Async and optimistically optimized update – it will not be executed if
      // not necessary (debounced to run at most once-per-tick)
      update: Gb(function() {
        return new Promise(function(p) {
          c.forceUpdate(), p(i);
        });
      }),
      destroy: function() {
        y(), f = !0;
      }
    };
    if (!hf(a, _))
      return c;
    c.setOptions(d).then(function(p) {
      !f && d.onFirstUpdate && d.onFirstUpdate(p);
    });
    function u() {
      i.orderedModifiers.forEach(function(p) {
        var m = p.name, v = p.options, $ = v === void 0 ? {} : v, w = p.effect;
        if (typeof w == "function") {
          var C = w({
            state: i,
            name: m,
            instance: c,
            options: $
          }), x = function() {
          };
          h.push(C || x);
        }
      });
    }
    function y() {
      h.forEach(function(p) {
        return p();
      }), h = [];
    }
    return c;
  };
}
var $i = {
  passive: !0
};
function i0(e) {
  var t = e.state, n = e.instance, o = e.options, s = o.scroll, r = s === void 0 ? !0 : s, l = o.resize, a = l === void 0 ? !0 : l, _ = Ve(t.elements.popper), d = [].concat(t.scrollParents.reference, t.scrollParents.popper);
  return r && d.forEach(function(i) {
    i.addEventListener("scroll", n.update, $i);
  }), a && _.addEventListener("resize", n.update, $i), function() {
    r && d.forEach(function(i) {
      i.removeEventListener("scroll", n.update, $i);
    }), a && _.removeEventListener("resize", n.update, $i);
  };
}
const s0 = {
  name: "eventListeners",
  enabled: !0,
  phase: "write",
  fn: function() {
  },
  effect: i0,
  data: {}
};
function l0(e) {
  var t = e.state, n = e.name;
  t.modifiersData[n] = dp({
    reference: t.rects.reference,
    element: t.rects.popper,
    strategy: "absolute",
    placement: t.placement
  });
}
const a0 = {
  name: "popperOffsets",
  enabled: !0,
  phase: "read",
  fn: l0,
  data: {}
};
var c0 = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function _0(e) {
  var t = e.x, n = e.y, o = window, s = o.devicePixelRatio || 1;
  return {
    x: io(t * s) / s || 0,
    y: io(n * s) / s || 0
  };
}
function pf(e) {
  var t, n = e.popper, o = e.popperRect, s = e.placement, r = e.variation, l = e.offsets, a = e.position, _ = e.gpuAcceleration, d = e.adaptive, i = e.roundOffsets, h = e.isFixed, f = l.x, c = f === void 0 ? 0 : f, u = l.y, y = u === void 0 ? 0 : u, p = typeof i == "function" ? i({
    x: c,
    y
  }) : {
    x: c,
    y
  };
  c = p.x, y = p.y;
  var m = l.hasOwnProperty("x"), v = l.hasOwnProperty("y"), $ = bt, w = Ge, C = window;
  if (d) {
    var x = ea(n), E = "clientHeight", g = "clientWidth";
    if (x === Ve(n) && (x = ln(n), $t(x).position !== "static" && a === "absolute" && (E = "scrollHeight", g = "scrollWidth")), x = x, s === Ge || (s === bt || s === nn) && r === Or) {
      w = _t;
      var k = h && x === C && C.visualViewport ? C.visualViewport.height : (
        // $FlowFixMe[prop-missing]
        x[E]
      );
      y -= k - o.height, y *= _ ? 1 : -1;
    }
    if (s === bt || (s === Ge || s === _t) && r === Or) {
      $ = nn;
      var T = h && x === C && C.visualViewport ? C.visualViewport.width : (
        // $FlowFixMe[prop-missing]
        x[g]
      );
      c -= T - o.width, c *= _ ? 1 : -1;
    }
  }
  var U = Object.assign({
    position: a
  }, d && c0), B = i === !0 ? _0({
    x: c,
    y
  }) : {
    x: c,
    y
  };
  if (c = B.x, y = B.y, _) {
    var L;
    return Object.assign({}, U, (L = {}, L[w] = v ? "0" : "", L[$] = m ? "0" : "", L.transform = (C.devicePixelRatio || 1) <= 1 ? "translate(" + c + "px, " + y + "px)" : "translate3d(" + c + "px, " + y + "px, 0)", L));
  }
  return Object.assign({}, U, (t = {}, t[w] = v ? y + "px" : "", t[$] = m ? c + "px" : "", t.transform = "", t));
}
function f0(e) {
  var t = e.state, n = e.options, o = n.gpuAcceleration, s = o === void 0 ? !0 : o, r = n.adaptive, l = r === void 0 ? !0 : r, a = n.roundOffsets, _ = a === void 0 ? !0 : a, d = {
    placement: Kt(t.placement),
    variation: ao(t.placement),
    popper: t.elements.popper,
    popperRect: t.rects.popper,
    gpuAcceleration: s,
    isFixed: t.options.strategy === "fixed"
  };
  t.modifiersData.popperOffsets != null && (t.styles.popper = Object.assign({}, t.styles.popper, pf(Object.assign({}, d, {
    offsets: t.modifiersData.popperOffsets,
    position: t.options.strategy,
    adaptive: l,
    roundOffsets: _
  })))), t.modifiersData.arrow != null && (t.styles.arrow = Object.assign({}, t.styles.arrow, pf(Object.assign({}, d, {
    offsets: t.modifiersData.arrow,
    position: "absolute",
    adaptive: !1,
    roundOffsets: _
  })))), t.attributes.popper = Object.assign({}, t.attributes.popper, {
    "data-popper-placement": t.placement
  });
}
const u0 = {
  name: "computeStyles",
  enabled: !0,
  phase: "beforeWrite",
  fn: f0,
  data: {}
};
function d0(e) {
  var t = e.state;
  Object.keys(t.elements).forEach(function(n) {
    var o = t.styles[n] || {}, s = t.attributes[n] || {}, r = t.elements[n];
    !Fe(r) || !ct(r) || (Object.assign(r.style, o), Object.keys(s).forEach(function(l) {
      var a = s[l];
      a === !1 ? r.removeAttribute(l) : r.setAttribute(l, a === !0 ? "" : a);
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
      var s = t.elements[o], r = t.attributes[o] || {}, l = Object.keys(t.styles.hasOwnProperty(o) ? t.styles[o] : n[o]), a = l.reduce(function(_, d) {
        return _[d] = "", _;
      }, {});
      !Fe(s) || !ct(s) || (Object.assign(s.style, a), Object.keys(r).forEach(function(_) {
        s.removeAttribute(_);
      }));
    });
  };
}
const p0 = {
  name: "applyStyles",
  enabled: !0,
  phase: "write",
  fn: d0,
  effect: h0,
  requires: ["computeStyles"]
};
var m0 = [s0, a0, u0, p0], pp = /* @__PURE__ */ r0({
  defaultModifiers: m0
});
function v0(e) {
  return e === "x" ? "y" : "x";
}
function Ui(e, t, n) {
  return bn(e, Es(t, n));
}
function g0(e, t, n) {
  var o = Ui(e, t, n);
  return o > n ? n : o;
}
function y0(e) {
  var t = e.state, n = e.options, o = e.name, s = n.mainAxis, r = s === void 0 ? !0 : s, l = n.altAxis, a = l === void 0 ? !1 : l, _ = n.boundary, d = n.rootBoundary, i = n.altBoundary, h = n.padding, f = n.tether, c = f === void 0 ? !0 : f, u = n.tetherOffset, y = u === void 0 ? 0 : u, p = gc(t, {
    boundary: _,
    rootBoundary: d,
    padding: h,
    altBoundary: i
  }), m = Kt(t.placement), v = ao(t.placement), $ = !v, w = up(m), C = v0(w), x = t.modifiersData.popperOffsets, E = t.rects.reference, g = t.rects.popper, k = typeof y == "function" ? y(Object.assign({}, t.rects, {
    placement: t.placement
  })) : y, T = typeof k == "number" ? {
    mainAxis: k,
    altAxis: k
  } : Object.assign({
    mainAxis: 0,
    altAxis: 0
  }, k), U = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null, B = {
    x: 0,
    y: 0
  };
  if (x) {
    if (r) {
      var L, A = w === "y" ? Ge : bt, S = w === "y" ? _t : nn, D = w === "y" ? "height" : "width", M = x[w], R = M + p[A], P = M - p[S], I = c ? -g[D] / 2 : 0, V = v === lo ? E[D] : g[D], F = v === lo ? -g[D] : -E[D], Y = t.elements.arrow, J = c && Y ? cp(Y) : {
        width: 0,
        height: 0
      }, W = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : hp(), G = W[A], Q = W[S], K = Ui(0, E[D], J[D]), q = $ ? E[D] / 2 - I - K - G - T.mainAxis : V - K - G - T.mainAxis, ne = $ ? -E[D] / 2 + I + K + Q + T.mainAxis : F + K + Q + T.mainAxis, be = t.elements.arrow && ea(t.elements.arrow), $e = be ? w === "y" ? be.clientTop || 0 : be.clientLeft || 0 : 0, _n = (L = U == null ? void 0 : U[w]) != null ? L : 0, te = M + q - _n - $e, xn = M + ne - _n, Ze = Ui(c ? Es(R, te) : R, M, c ? bn(P, xn) : P);
      x[w] = Ze, B[w] = Ze - M;
    }
    if (a) {
      var St, Sn = w === "x" ? Ge : bt, Cn = w === "x" ? _t : nn, Se = x[C], dt = C === "y" ? "height" : "width", go = Se + p[Sn], yo = Se - p[Cn], fn = [Ge, bt].indexOf(m) !== -1, bo = (St = U == null ? void 0 : U[C]) != null ? St : 0, wo = fn ? go : Se - E[dt] - g[dt] - bo + T.altAxis, $o = fn ? Se + E[dt] + g[dt] - bo - T.altAxis : yo, ko = c && fn ? g0(wo, Se, $o) : Ui(c ? wo : go, Se, c ? $o : yo);
      x[C] = ko, B[C] = ko - Se;
    }
    t.modifiersData[o] = B;
  }
}
const Oa = {
  name: "preventOverflow",
  enabled: !0,
  phase: "main",
  fn: y0,
  requiresIfExists: ["offset"]
};
var b0 = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function Bi(e) {
  return e.replace(/left|right|bottom|top/g, function(t) {
    return b0[t];
  });
}
var w0 = {
  start: "end",
  end: "start"
};
function mf(e) {
  return e.replace(/start|end/g, function(t) {
    return w0[t];
  });
}
function $0(e, t) {
  t === void 0 && (t = {});
  var n = t, o = n.placement, s = n.boundary, r = n.rootBoundary, l = n.padding, a = n.flipVariations, _ = n.allowedAutoPlacements, d = _ === void 0 ? Pb : _, i = ao(o), h = i ? a ? ff : ff.filter(function(u) {
    return ao(u) === i;
  }) : ta, f = h.filter(function(u) {
    return d.indexOf(u) >= 0;
  });
  f.length === 0 && (f = h);
  var c = f.reduce(function(u, y) {
    return u[y] = gc(e, {
      placement: y,
      boundary: s,
      rootBoundary: r,
      padding: l
    })[Kt(y)], u;
  }, {});
  return Object.keys(c).sort(function(u, y) {
    return c[u] - c[y];
  });
}
function k0(e) {
  if (Kt(e) === vc)
    return [];
  var t = Bi(e);
  return [mf(e), t, mf(t)];
}
function x0(e) {
  var t = e.state, n = e.options, o = e.name;
  if (!t.modifiersData[o]._skip) {
    for (var s = n.mainAxis, r = s === void 0 ? !0 : s, l = n.altAxis, a = l === void 0 ? !0 : l, _ = n.fallbackPlacements, d = n.padding, i = n.boundary, h = n.rootBoundary, f = n.altBoundary, c = n.flipVariations, u = c === void 0 ? !0 : c, y = n.allowedAutoPlacements, p = t.options.placement, m = Kt(p), v = m === p, $ = _ || (v || !u ? [Bi(p)] : k0(p)), w = [p].concat($).reduce(function(J, W) {
      return J.concat(Kt(W) === vc ? $0(t, {
        placement: W,
        boundary: i,
        rootBoundary: h,
        padding: d,
        flipVariations: u,
        allowedAutoPlacements: y
      }) : W);
    }, []), C = t.rects.reference, x = t.rects.popper, E = /* @__PURE__ */ new Map(), g = !0, k = w[0], T = 0; T < w.length; T++) {
      var U = w[T], B = Kt(U), L = ao(U) === lo, A = [Ge, _t].indexOf(B) >= 0, S = A ? "width" : "height", D = gc(t, {
        placement: U,
        boundary: i,
        rootBoundary: h,
        altBoundary: f,
        padding: d
      }), M = A ? L ? nn : bt : L ? _t : Ge;
      C[S] > x[S] && (M = Bi(M));
      var R = Bi(M), P = [];
      if (r && P.push(D[B] <= 0), a && P.push(D[M] <= 0, D[R] <= 0), P.every(function(J) {
        return J;
      })) {
        k = U, g = !1;
        break;
      }
      E.set(U, P);
    }
    if (g)
      for (var I = u ? 3 : 1, V = function(W) {
        var G = w.find(function(Q) {
          var K = E.get(Q);
          if (K)
            return K.slice(0, W).every(function(q) {
              return q;
            });
        });
        if (G)
          return k = G, "break";
      }, F = I; F > 0; F--) {
        var Y = V(F);
        if (Y === "break")
          break;
      }
    t.placement !== k && (t.modifiersData[o]._skip = !0, t.placement = k, t.reset = !0);
  }
}
const mp = {
  name: "flip",
  enabled: !0,
  phase: "main",
  fn: x0,
  requiresIfExists: ["offset"],
  data: {
    _skip: !1
  }
};
function S0(e) {
  return e.button === 2;
}
var C0 = 0;
function E0(e, t, n, o, s) {
  var r, l, a = {};
  for (l in t)
    l == "ref" ? r = t[l] : a[l] = t[l];
  var _ = { type: e, props: a, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: --C0, __source: s, __self: o };
  if (typeof e == "function" && (r = e.defaultProps))
    for (l in r)
      a[l] === void 0 && (a[l] = r[l]);
  return ae.vnode && ae.vnode(_), _;
}
var Mt, pu;
let A0 = (pu = class extends Za {
  constructor() {
    super(...arguments);
    O(this, Mt, void 0);
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
    super.componentWillUnmount(), (n = b(this, Mt)) == null || n.destroy();
  }
  _getPopperOptions() {
    return {
      modifiers: [Oa, mp],
      placement: "right-start"
    };
  }
  _getPopperElement() {
    var n;
    return (n = this.ref.current) == null ? void 0 : n.parentElement;
  }
  _createPopper() {
    const n = this._getPopperOptions();
    return b(this, Mt) ? b(this, Mt).setOptions(n) : this.ref.current && H(this, Mt, pp(this._getPopperElement(), this.ref.current, n)), b(this, Mt);
  }
  afterRender(n) {
    super.afterRender(n), this.props.controlledMenu && this._createPopper();
  }
  renderToggleIcon() {
    return /* @__PURE__ */ E0("span", { class: "contextmenu-toggle-icon caret-right" });
  }
}, Mt = new WeakMap(), pu);
var Tt, He, In, Xr;
class Te extends Be {
  constructor() {
    super(...arguments);
    O(this, Tt, void 0);
    O(this, He, void 0);
    O(this, In, void 0);
    O(this, Xr, void 0);
  }
  get isShown() {
    var n;
    return (n = b(this, Tt)) == null ? void 0 : n.classList.contains(this.constructor.CLASS_SHOW);
  }
  get menu() {
    return b(this, Tt) || this._ensureMenu();
  }
  get popper() {
    return b(this, He) ? b(this, He) : this._createPopper();
  }
  get trigger() {
    return b(this, Xr) || this.element;
  }
  get isDynamic() {
    return this.options.items || this.options.menu;
  }
  init() {
    const { element: n } = this;
    n !== document.body && !n.hasAttribute("data-toggle") && n.setAttribute("data-toggle", "contextmenu");
  }
  show(n) {
    return H(this, Xr, n), this.emit("show", { menu: this, trigger: this.trigger }).defaultPrevented || this.isDynamic && !this._renderMenu() ? !1 : (this.menu.classList.add(this.constructor.CLASS_SHOW), this._createPopper().update(), this.emit("shown", this), !0);
  }
  hide() {
    var o, s;
    return this.emit("hide", this).defaultPrevented ? !1 : ((o = b(this, He)) == null || o.destroy(), H(this, He, void 0), (s = b(this, Tt)) == null || s.classList.remove(this.constructor.CLASS_SHOW), this.emit("hidden", this), !0);
  }
  toggle(n) {
    return this.isShown ? this.hide() : this.show(n);
  }
  destroy() {
    var n, o;
    (n = b(this, He)) == null || n.destroy(), super.destroy(), (o = b(this, Tt)) == null || o.remove();
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
        const a = n.nextElementSibling;
        a != null && a.classList.contains(o) ? s = a : s = (r = n.parentNode) == null ? void 0 : r.querySelector(`.${o}`);
      }
    }
    if (!s)
      throw new Error("ContextMenu: Cannot find menu element");
    return H(this, Tt, s), s;
  }
  _getPopperOptions() {
    const { flip: n, preventOverflow: o, modifiers: s = [] } = this.options;
    return {
      modifiers: [
        o ? typeof o == "object" ? { ...Oa, options: o } : Oa : null,
        n ? mp : null,
        ...s
      ].filter(Boolean),
      placement: this.options.placement,
      strategy: this.options.strategy
    };
  }
  _createPopper() {
    const n = this._getPopperOptions();
    return b(this, He) ? b(this, He).setOptions(n) : H(this, He, pp(this._getPopperElement(), this.menu, n)), b(this, He);
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
    return !n || this.emit("updateMenu", { menu: n, trigger: this.trigger, contextmenu: this }).defaultPrevented ? !1 : (Cb(ep(A0, n), this.menu), !0);
  }
  _getPopperElement() {
    return b(this, In) || H(this, In, {
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
    }), b(this, In);
  }
  static clear(n) {
    var _, d;
    n instanceof Event && (n = { event: n });
    const { event: o, exclude: s, ignoreSelector: r = ".not-hide-menu" } = n || {};
    if (o && r && ((d = (_ = o.target).closest) != null && d.call(_, r)) || o && S0(o))
      return;
    const l = this.getAll().entries(), a = new Set(s || []);
    for (const [i, h] of l)
      a.has(i) || h.hide();
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
Tt = new WeakMap(), He = new WeakMap(), In = new WeakMap(), Xr = new WeakMap(), N(Te, "NAME", "contextmenu"), N(Te, "EVENTS", !0), N(Te, "DEFAULT", {
  placement: "bottom-start",
  strategy: "fixed",
  flip: !0,
  preventOverflow: !0
}), N(Te, "MENU_CLASS", "contextmenu"), N(Te, "CLASS_SHOW", "show"), N(Te, "MENU_SELECTOR", '[data-toggle="contextmenu"]:not(.disabled):not(:disabled)');
document.addEventListener("contextmenu", (e) => {
  const t = e.target;
  if (t.closest(`.${Te.MENU_CLASS}`))
    return;
  const n = t.closest(Te.MENU_SELECTOR);
  n && (Te.ensure(n).show(e), e.preventDefault());
});
document.addEventListener("click", Te.clear.bind(Te));
var Un, Bn, Fn, tl, vp;
const Wc = class extends Te {
  constructor() {
    super(...arguments);
    O(this, tl);
    O(this, Un, !1);
    O(this, Bn, 0);
    N(this, "hideLater", () => {
      b(this, Fn).call(this), H(this, Bn, window.setTimeout(this.hide.bind(this), 100));
    });
    O(this, Fn, () => {
      clearTimeout(b(this, Bn)), H(this, Bn, 0);
    });
  }
  get isHover() {
    return this.options.trigger === "hover";
  }
  get elementShowClass() {
    return `with-${this.constructor.NAME}-show`;
  }
  show(n, o) {
    (o == null ? void 0 : o.clearOthers) !== !1 && Wc.clear({ event: o == null ? void 0 : o.event, exclude: [this.element] });
    const s = super.show(n);
    return s && (!b(this, Un) && this.isHover && z(this, tl, vp).call(this), this.element.classList.add(this.elementShowClass)), s;
  }
  hide() {
    const n = super.hide();
    return n && this.element.classList.remove(this.elementShowClass), n;
  }
  toggle(n, o) {
    return this.isShown ? this.hide() : this.show(n, { event: n, ...o });
  }
  destroy() {
    b(this, Un) && (this.element.removeEventListener("mouseleave", this.hideLater), this.menu.removeEventListener("mouseenter", b(this, Fn)), this.menu.removeEventListener("mouseleave", this.hideLater)), super.destroy();
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
      ...wb,
      options: {
        offset: [0, o + (this.options.offset ?? 0)]
      }
    }, {
      name: "dropdown",
      enabled: !0,
      phase: "beforeWrite",
      fn: ({ state: s }) => {
        var l, a;
        const r = ((l = s.placement) == null ? void 0 : l.split("-").shift()) || "";
        (a = this.menu.querySelector(".arrow")) == null || a.setAttribute("class", `arrow arrow-${r}`), this.element.setAttribute("data-dropdown-placement", r);
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
let Ee = Wc;
Un = new WeakMap(), Bn = new WeakMap(), Fn = new WeakMap(), tl = new WeakSet(), vp = function() {
  const { menu: n } = this;
  n.addEventListener("mouseenter", b(this, Fn)), n.addEventListener("mouseleave", this.hideLater), this.element.addEventListener("mouseleave", this.hideLater), H(this, Un, !0);
}, N(Ee, "NAME", "dropdown"), N(Ee, "MENU_CLASS", "dropdown-menu"), N(Ee, "MENU_SELECTOR", '[data-toggle="dropdown"]:not(.disabled):not(:disabled)'), N(Ee, "DEFAULT", {
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
const M0 = (e) => {
  const t = document.getElementsByClassName("with-dropdown-show")[0];
  if (!t)
    return;
  const n = typeof t.closest == "function" ? t.closest(Ee.MENU_SELECTOR) : null;
  !n || !e.target.contains(n) || Ee.clear({ event: e });
};
window.addEventListener("scroll", M0, !0);
var Kr, jn;
class T0 extends Qo {
  constructor(n) {
    var o;
    super(n);
    O(this, Kr, void 0);
    O(this, jn, jy());
    this.state = { placement: ((o = n.dropdown) == null ? void 0 : o.placement) || "", show: !1 };
  }
  get ref() {
    return b(this, jn);
  }
  get triggerElement() {
    return b(this, jn).current;
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
    }), H(this, Kr, Ee.ensure(this.triggerElement, {
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
    (n = b(this, Kr)) == null || n.destroy();
  }
  beforeRender() {
    const { className: n, children: o, dropdown: s, ...r } = this.props;
    return {
      className: j("dropdown", n),
      children: typeof o == "function" ? o(this.state) : o,
      ...r,
      "data-toggle": "dropdown",
      "data-dropdown-placement": this.state.placement,
      ref: b(this, jn)
    };
  }
  render() {
    const { children: n, ...o } = this.beforeRender();
    return /* @__PURE__ */ Yh("div", { ...o, children: n });
  }
}
Kr = new WeakMap(), jn = new WeakMap();
class L0 extends T0 {
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
    return o.caret = s, /* @__PURE__ */ Yh(Qt, { ...o });
  }
}
function gp({
  key: e,
  type: t,
  btnType: n,
  ...o
}) {
  return /* @__PURE__ */ Kl(L0, { type: n, ...o });
}
function D0({
  key: e,
  type: t,
  btnType: n,
  ...o
}) {
  return /* @__PURE__ */ Kl(tc, { type: n, ...o });
}
var En;
let Nr = (En = class extends oo {
  beforeRender() {
    const { gap: t, btnProps: n, wrap: o, ...s } = super.beforeRender();
    return s.className = j(s.className, o ? "flex-wrap" : "", typeof t == "number" ? `gap-${t}` : ""), typeof t == "string" && (s.style ? s.style.gap = t : s.style = { gap: t }), s;
  }
  isBtnItem(t) {
    return t === "item" || t === "dropdown";
  }
  renderTypedItem(t, n, o) {
    const s = this.isBtnItem(o.type) ? { btnType: "ghost", ...this.props.btnProps } : {}, r = {
      ...n,
      ...s,
      ...o,
      className: j(`${this.name}-${o.type}`, n.className, s.className, o.className),
      style: Object.assign({}, n.style, s.style, o.style)
    };
    return /* @__PURE__ */ Kl(t, { ...r });
  }
}, N(En, "ItemComponents", {
  item: By,
  dropdown: gp,
  "btn-group": D0
}), N(En, "ROOT_TAG", "nav"), N(En, "NAME", "toolbar"), N(En, "defaultProps", {
  btnProps: {
    btnType: "ghost"
  }
}), En);
class yp extends Tn {
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
    return Do(t) ? t : t === !1 || !n ? null : /* @__PURE__ */ we("div", { className: "modal-header", children: /* @__PURE__ */ we("div", { className: "modal-title", children: n }) });
  }
  renderActions() {
    const {
      actions: t,
      closeBtn: n
    } = this.props;
    return !n && !t ? null : Do(t) ? t : /* @__PURE__ */ we("div", { className: "modal-actions", children: [
      t ? /* @__PURE__ */ we(Nr, { ...t }) : null,
      n ? /* @__PURE__ */ we("button", { type: "button", class: "btn square ghost", "data-dismiss": "modal", children: /* @__PURE__ */ we("span", { class: "close" }) }) : null
    ] });
  }
  renderBody() {
    const {
      body: t
    } = this.props;
    return t ? Do(t) ? t : /* @__PURE__ */ we("div", { className: "modal-body", children: t }) : null;
  }
  renderFooter() {
    const {
      footer: t,
      footerActions: n
    } = this.props;
    return Do(t) ? t : t === !1 || !n ? null : /* @__PURE__ */ we("div", { className: "modal-footer", children: n ? /* @__PURE__ */ we(Nr, { ...n }) : null });
  }
  render() {
    const {
      className: t,
      style: n,
      children: o
    } = this.props;
    return /* @__PURE__ */ we("div", { className: j("modal-dialog", t), style: n, children: /* @__PURE__ */ we("div", { className: "modal-content", children: [
      this.renderHeader(),
      this.renderActions(),
      this.renderBody(),
      o,
      this.renderFooter()
    ] }) });
  }
}
N(yp, "defaultProps", { closeBtn: !0 });
var Zr, Vn, Jr;
class O0 extends Tn {
  constructor() {
    super(...arguments);
    O(this, Zr, Oy());
    O(this, Vn, void 0);
    N(this, "state", {});
    O(this, Jr, () => {
      var s, r;
      const n = (r = (s = b(this, Zr).current) == null ? void 0 : s.contentWindow) == null ? void 0 : r.document;
      if (!n)
        return;
      let o = b(this, Vn);
      o == null || o.disconnect(), o = new ResizeObserver(() => {
        const l = n.body, a = n.documentElement, _ = Math.ceil(Math.max(l.scrollHeight, l.offsetHeight, a.offsetHeight));
        this.setState({ height: _ });
      }), o.observe(n.body), o.observe(n.documentElement), H(this, Vn, o);
    });
  }
  componentDidMount() {
    b(this, Jr).call(this);
  }
  componentWillUnmount() {
    var n;
    (n = b(this, Vn)) == null || n.disconnect();
  }
  render() {
    const { url: n } = this.props;
    return /* @__PURE__ */ we(
      "iframe",
      {
        className: "modal-iframe",
        style: this.state,
        src: n,
        ref: b(this, Zr),
        onLoad: b(this, Jr)
      }
    );
  }
}
Zr = new WeakMap(), Vn = new WeakMap(), Jr = new WeakMap();
function N0(e, t) {
  const { custom: n, title: o, content: s } = t;
  return {
    body: s,
    title: o,
    ...typeof n == "function" ? n() : n
  };
}
async function P0(e, t) {
  const { dataType: n, url: o, request: s, custom: r, title: l } = t, _ = await (await fetch(o, s)).text();
  if (n !== "html")
    try {
      const d = JSON.parse(_);
      return {
        title: l,
        ...r,
        ...d
      };
    } catch {
    }
  return {
    title: l,
    ...r,
    body: n === "html" ? /* @__PURE__ */ we("div", { className: "modal-body", dangerouslySetInnerHTML: { __html: _ } }) : _
  };
}
async function R0(e, t) {
  const { url: n, custom: o, title: s } = t;
  return {
    title: s,
    ...o,
    body: /* @__PURE__ */ we(O0, { url: n })
  };
}
const H0 = {
  custom: N0,
  ajax: P0,
  iframe: R0
};
var Qr, ei, et, zn, Fi, nl, bp, ti, Na;
const pr = class extends Me {
  constructor() {
    super(...arguments);
    O(this, zn);
    O(this, nl);
    O(this, ti);
    O(this, Qr, void 0);
    O(this, ei, void 0);
    O(this, et, void 0);
  }
  get id() {
    return b(this, ei);
  }
  get loading() {
    return this.modalElement.classList.contains(pr.LOADING_CLASS);
  }
  get modalElement() {
    let n = b(this, Qr);
    if (!n) {
      const { id: o } = this;
      n = this.element.querySelector(`#${o}`), n || (n = document.createElement("div"), ms(n, {
        id: o,
        style: this.options.style
      }), kh(n, ["modal modal-async", this.options.className]), this.element.appendChild(n)), H(this, Qr, n);
    }
    return n;
  }
  afterInit() {
    super.afterInit(), H(this, ei, this.options.id || `modal-${Iy()}`);
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
    b(this, et) && clearTimeout(b(this, et));
    const { modalElement: n, options: o } = this, { type: s, loadTimeout: r } = o, l = H0[s];
    if (!l)
      return console.warn(`Modal: Cannot build modal with type "${s}"`), !1;
    n.classList.add(pr.LOADING_CLASS), await z(this, nl, bp).call(this), r && H(this, et, window.setTimeout(() => {
      H(this, et, 0), z(this, ti, Na).call(this, this.options.timeoutTip);
    }, r));
    const a = await l(n, o);
    return a === !1 ? await z(this, ti, Na).call(this, this.options.failedTip) : a && typeof a == "object" && await z(this, zn, Fi).call(this, a), b(this, et) && (clearTimeout(b(this, et)), H(this, et, 0)), n.classList.remove(pr.LOADING_CLASS), !0;
  }
};
let Oo = pr;
Qr = new WeakMap(), ei = new WeakMap(), et = new WeakMap(), zn = new WeakSet(), Fi = function(n) {
  return new Promise((o) => {
    const { afterRender: s, ...r } = n;
    n = {
      afterRender: (l) => {
        this.layout(), s == null || s(l), o();
      },
      ...r
    }, Hy(
      /* @__PURE__ */ we(yp, { ...n }),
      this.modalElement
    );
  });
}, nl = new WeakSet(), bp = function() {
  const { loadingText: n } = this.options;
  return z(this, zn, Fi).call(this, {
    body: /* @__PURE__ */ we("div", { className: "modal-loading-indicator", children: [
      /* @__PURE__ */ we("span", { className: "spinner" }),
      n ? /* @__PURE__ */ we("span", { className: "modal-loading-text", children: n }) : null
    ] })
  });
}, ti = new WeakSet(), Na = function(n) {
  if (n)
    return z(this, zn, Fi).call(this, {
      body: /* @__PURE__ */ we("div", { className: "modal-load-failed", children: n })
    });
}, N(Oo, "LOADING_CLASS", "loading"), N(Oo, "DEFAULT", {
  ...Me.DEFAULT,
  loadTimeout: 1e4
});
var Lt, ol, wp, rl, $p, il, kp;
class nr extends Be {
  constructor() {
    super(...arguments);
    O(this, ol);
    O(this, rl);
    O(this, il);
    O(this, Lt, void 0);
  }
  get modal() {
    return b(this, Lt);
  }
  get container() {
    const { container: n } = this.options;
    return typeof n == "string" ? document.querySelector(n) : n instanceof HTMLElement ? n : document.body;
  }
  show() {
    return z(this, rl, $p).call(this).show();
  }
  hide() {
    var n;
    (n = b(this, Lt)) == null || n.hide();
  }
}
Lt = new WeakMap(), ol = new WeakSet(), wp = function() {
  const {
    container: n,
    ...o
  } = this.options, s = o, r = this.element.getAttribute("href") || "";
  return s.type || (s.target || r[0] === "#" ? s.type = "static" : s.type = s.type || (s.url ? "iframe" : "custom")), !s.url && (s.type === "iframe" || s.type === "ajax") && r[0] !== "#" && (s.url = r), s;
}, rl = new WeakSet(), $p = function() {
  const n = z(this, ol, wp).call(this);
  let o = b(this, Lt);
  return o ? o.setOptions(n) : n.type === "static" ? (o = new Me(z(this, il, kp).call(this), n), H(this, Lt, o)) : (o = new Oo(this.container, n), H(this, Lt, o)), o;
}, il = new WeakSet(), kp = function() {
  let n = this.options.target;
  if (!n) {
    const { element: o } = this;
    if (o.tagName === "A") {
      const s = o.getAttribute("href");
      s != null && s.startsWith("#") && (n = s);
    }
  }
  return this.container.querySelector(n || ".modal");
}, N(nr, "NAME", "ModalTrigger"), N(nr, "EVENTS", !0), N(nr, "TOGGLE_SELECTOR", '[data-toggle="modal"]');
window.addEventListener("click", (e) => {
  const n = e.target.closest(nr.TOGGLE_SELECTOR);
  if (n) {
    const o = nr.ensure(n);
    o && o.show(), console.log("> modalTrigger", o);
  }
});
var ba;
let W0 = (ba = class extends oo {
  beforeRender() {
    const t = super.beforeRender();
    return t.className = j(t.className, t.type ? `nav-${t.type}` : "", {
      "nav-stacked": t.stacked
    }), t;
  }
}, N(ba, "NAME", "nav"), ba);
class vf extends Pe {
}
N(vf, "NAME", "nav"), N(vf, "Component", W0);
var Pa;
Pa = { __e: function(e, t, n, o) {
  for (var s, r, l; t = t.__; )
    if ((s = t.__c) && !s.__)
      try {
        if ((r = s.constructor) && r.getDerivedStateFromError != null && (s.setState(r.getDerivedStateFromError(e)), l = s.__d), s.componentDidCatch != null && (s.componentDidCatch(e, o || {}), l = s.__d), l)
          return s.__E = s;
      } catch (a) {
        e = a;
      }
  throw e;
} };
var I0 = 0;
function Zt(e, t, n, o, s) {
  var r, l, a = {};
  for (l in t)
    l == "ref" ? r = t[l] : a[l] = t[l];
  var _ = { type: e, props: a, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: --I0, __source: s, __self: o };
  if (typeof e == "function" && (r = e.defaultProps))
    for (l in r)
      a[l] === void 0 && (a[l] = r[l]);
  return Pa.vnode && Pa.vnode(_), _;
}
function Pr(e, t) {
  const n = e.pageTotal || Math.ceil(e.recTotal / e.recPerPage);
  return typeof t == "string" && (t === "first" ? t = 1 : t === "last" ? t = n : t === "prev" ? t = e.page - 1 : t === "next" ? t = e.page + 1 : t === "current" ? t = e.page : t = Number.parseInt(t, 10)), t = t !== void 0 ? Math.max(1, Math.min(t < 0 ? n + t : t, n)) : e.page, {
    ...e,
    pageTotal: n,
    page: t
  };
}
function U0({
  key: e,
  type: t,
  btnType: n,
  page: o,
  format: s,
  pagerInfo: r,
  linkCreator: l,
  ...a
}) {
  const _ = Pr(r, o);
  return a.text === void 0 && !a.icon && s && (a.text = typeof s == "function" ? s(_) : Le(s, _)), a.url === void 0 && l && (a.url = typeof l == "function" ? l(_) : Le(l, _)), a.disabled === void 0 && (a.disabled = o !== void 0 && _.page === r.page), /* @__PURE__ */ Zt(Qt, { type: n, ...a });
}
const pt = 24 * 60 * 60 * 1e3, Ne = (e) => e ? (e instanceof Date || (typeof e == "string" && (e = e.trim(), /^\d+$/.test(e) && (e = Number.parseInt(e, 10))), typeof e == "number" && e < 1e10 && (e *= 1e3), e = new Date(e)), e) : new Date(), mi = (e, t = new Date()) => (e = Ne(e), t = Ne(t), e.getFullYear() === t.getFullYear() && e.getMonth() === t.getMonth() && e.getDate() === t.getDate()), gf = (e, t = new Date()) => Ne(e).getFullYear() === Ne(t).getFullYear(), B0 = (e, t = new Date()) => (e = Ne(e), t = Ne(t), e.getFullYear() === t.getFullYear() && e.getMonth() === t.getMonth()), Zk = (e, t = new Date()) => {
  e = Ne(e), t = Ne(t);
  const n = 1e3 * 60 * 60 * 24, o = Math.floor(e.getTime() / n), s = Math.floor(t.getTime() / n);
  return Math.floor((o + 4) / 7) === Math.floor((s + 4) / 7);
}, Jk = (e, t) => mi(Ne(t), e), Qk = (e, t) => mi(Ne(t).getTime() - pt, e), ex = (e, t) => mi(Ne(t).getTime() + pt, e), tx = (e, t) => mi(Ne(t).getTime() - 2 * pt, e), Ra = (e, t = "yyyy-MM-dd hh:mm") => {
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
  return /(y+)/i.test(t) && (t = t.replace(RegExp.$1, `${e.getFullYear()}`.substring(4 - RegExp.$1.length))), Object.keys(n).forEach((o) => {
    if (new RegExp(`(${o})`).test(t)) {
      const s = `${n[o]}`;
      t = t.replace(RegExp.$1, RegExp.$1.length === 1 ? s : `00${s}`.substring(s.length));
    }
  }), t;
}, nx = (e, t, n) => {
  const o = {
    full: "yyyy-M-d",
    month: "M-d",
    day: "d",
    str: "{0} ~ {1}",
    ...n
  }, s = Ra(e, gf(e) ? o.month : o.full);
  if (mi(e, t))
    return s;
  const r = Ra(t, gf(e, t) ? B0(e, t) ? o.day : o.month : o.full);
  return o.str.replace("{0}", s).replace("{1}", r);
}, ox = (e) => {
  const t = new Date().getTime();
  switch (e) {
    case "oneWeek":
      return t - pt * 7;
    case "oneMonth":
      return t - pt * 31;
    case "threeMonth":
      return t - pt * 31 * 3;
    case "halfYear":
      return t - pt * 183;
    case "oneYear":
      return t - pt * 365;
    case "twoYear":
      return t - 2 * (pt * 365);
    default:
      return 0;
  }
}, yf = (e, t, n = !0, o = Date.now()) => {
  switch (t) {
    case "year":
      return e *= 365, yf(e, "day", n, o);
    case "quarter":
      e *= 3;
    case "month":
      return e *= 30, yf(e, "day", n, o);
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
  const a = Pr(s, n);
  return o = typeof o == "function" ? o(a) : Le(o, a), /* @__PURE__ */ Zt(Fu, { ...l, children: [
    r,
    o
  ] });
}
function j0({
  key: e,
  type: t,
  btnType: n,
  count: o = 12,
  pagerInfo: s,
  onClick: r,
  linkCreator: l,
  ...a
}) {
  if (!s.pageTotal)
    return;
  const _ = { ...a, square: !0 }, d = () => (_.text = "", _.icon = "icon-ellipsis-h", _.disabled = !0, /* @__PURE__ */ Zt(Qt, { type: n, ..._ })), i = (f, c) => {
    const u = [];
    for (let y = f; y <= c; y++) {
      _.text = y, delete _.icon, _.disabled = !1;
      const p = Pr(s, y);
      l && (_.url = typeof l == "function" ? l(p) : Le(l, p)), u.push(/* @__PURE__ */ Zt(Qt, { type: n, ..._, onClick: r }));
    }
    return u;
  };
  let h = [];
  return h = [...i(1, 1)], s.pageTotal <= 1 || (s.pageTotal <= o ? h = [...h, ...i(2, s.pageTotal)] : s.page < o - 2 ? h = [...h, ...i(2, o - 2), d(), ...i(s.pageTotal, s.pageTotal)] : s.page > s.pageTotal - o + 3 ? h = [...h, d(), ...i(s.pageTotal - o + 3, s.pageTotal)] : h = [...h, d(), ...i(s.page - Math.ceil((o - 4) / 2), s.page + Math.floor((o - 4) / 2)), d(), ...i(s.pageTotal, s.pageTotal)]), h;
}
function V0({
  type: e,
  pagerInfo: t,
  linkCreator: n,
  items: o = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 100, 200, 500, 1e3, 2e3],
  dropdown: s = {},
  ...r
}) {
  var a;
  s.items = s.items ?? o.map((_) => {
    const d = { ...t, recPerPage: _ };
    return {
      text: `${_}`,
      url: typeof n == "function" ? n(d) : Le(n, d)
    };
  });
  const { text: l = "" } = r;
  return r.text = typeof l == "function" ? l(t) : Le(l, t), s.menu = { ...s.menu, className: j((a = s.menu) == null ? void 0 : a.className, "pager-size-menu") }, /* @__PURE__ */ Zt(gp, { type: "dropdown", dropdown: s, ...r });
}
function z0({
  key: e,
  page: t,
  type: n,
  btnType: o,
  pagerInfo: s,
  size: r,
  onClick: l,
  onChange: a,
  linkCreator: _,
  ...d
}) {
  const i = { ...d };
  let h;
  const f = (y) => {
    var p;
    h = Number((p = y.target) == null ? void 0 : p.value) || 1, h = h > s.pageTotal ? s.pageTotal : h;
  }, c = (y) => {
    if (!(y != null && y.target))
      return;
    h = h <= s.pageTotal ? h : s.pageTotal;
    const p = Pr(s, h);
    a && !a({ info: p, event: y }) || (y.target.href = i.url = typeof _ == "function" ? _(p) : Le(_, p));
  }, u = Pr(s, t || 0);
  return i.url = typeof _ == "function" ? _(u) : Le(_, u), i.className = j("input-group-addon", i.className), /* @__PURE__ */ Zt("div", { className: j("input-group", "pager-goto-group", r ? `size-${r}` : ""), children: [
    /* @__PURE__ */ Zt("input", { type: "number", class: "form-control", max: s.pageTotal, min: "1", onInput: f }),
    /* @__PURE__ */ Zt(Qt, { type: o, ...i, onClick: c })
  ] });
}
var Mo;
let Y0 = (Mo = class extends Nr {
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
}, N(Mo, "NAME", "pager"), N(Mo, "defaultProps", {
  gap: 1,
  btnProps: {
    btnType: "ghost",
    size: "sm"
  }
}), N(Mo, "ItemComponents", {
  ...Nr.ItemComponents,
  link: U0,
  info: F0,
  nav: j0,
  "size-menu": V0,
  goto: z0
}), Mo);
class bf extends Pe {
}
N(bf, "NAME", "pager"), N(bf, "Component", Y0);
var xp, me, Sp, or, wf, Cp = {}, Ep = [], q0 = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function zt(e, t) {
  for (var n in t)
    e[n] = t[n];
  return e;
}
function Ap(e) {
  var t = e.parentNode;
  t && t.removeChild(e);
}
function ha(e, t, n, o, s) {
  var r = { type: e, props: t, key: n, ref: o, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: s ?? ++Sp };
  return s == null && me.vnode != null && me.vnode(r), r;
}
function G0() {
  return { current: null };
}
function yc(e) {
  return e.children;
}
function Jt(e, t) {
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
function $f(e) {
  (!e.__d && (e.__d = !0) && or.push(e) && !As.__r++ || wf !== me.debounceRendering) && ((wf = me.debounceRendering) || setTimeout)(As);
}
function As() {
  for (var e; As.__r = or.length; )
    e = or.sort(function(t, n) {
      return t.__v.__b - n.__v.__b;
    }), or = [], e.some(function(t) {
      var n, o, s, r, l, a;
      t.__d && (l = (r = (n = t).__v).__e, (a = n.__P) && (o = [], (s = zt({}, r)).__v = r.__v + 1, Op(a, r, s, n.__n, a.ownerSVGElement !== void 0, r.__h != null ? [l] : null, o, l ?? Rr(r), r.__h), K0(o, r), r.__e != l && Mp(r)));
    });
}
function Tp(e, t, n, o, s, r, l, a, _, d) {
  var i, h, f, c, u, y, p, m = o && o.__k || Ep, v = m.length;
  for (n.__k = [], i = 0; i < t.length; i++)
    if ((c = n.__k[i] = (c = t[i]) == null || typeof c == "boolean" ? null : typeof c == "string" || typeof c == "number" || typeof c == "bigint" ? ha(null, c, null, null, c) : Array.isArray(c) ? ha(yc, { children: c }, null, null, null) : c.__b > 0 ? ha(c.type, c.props, c.key, c.ref ? c.ref : null, c.__v) : c) != null) {
      if (c.__ = n, c.__b = n.__b + 1, (f = m[i]) === null || f && c.key == f.key && c.type === f.type)
        m[i] = void 0;
      else
        for (h = 0; h < v; h++) {
          if ((f = m[h]) && c.key == f.key && c.type === f.type) {
            m[h] = void 0;
            break;
          }
          f = null;
        }
      Op(e, c, f = f || Cp, s, r, l, a, _, d), u = c.__e, (h = c.ref) && f.ref != h && (p || (p = []), f.ref && p.push(f.ref, null, c), p.push(h, c.__c || u, c)), u != null ? (y == null && (y = u), typeof c.type == "function" && c.__k === f.__k ? c.__d = _ = Lp(c, _, e) : _ = Dp(e, c, f, m, u, _), typeof n.type == "function" && (n.__d = _)) : _ && f.__e == _ && _.parentNode != e && (_ = Rr(f));
    }
  for (n.__e = y, i = v; i--; )
    m[i] != null && Pp(m[i], m[i]);
  if (p)
    for (i = 0; i < p.length; i++)
      Np(p[i], p[++i], p[++i]);
}
function Lp(e, t, n) {
  for (var o, s = e.__k, r = 0; s && r < s.length; r++)
    (o = s[r]) && (o.__ = e, t = typeof o.type == "function" ? Lp(o, t, n) : Dp(n, o, o, s, o.__e, t));
  return t;
}
function Dp(e, t, n, o, s, r) {
  var l, a, _;
  if (t.__d !== void 0)
    l = t.__d, t.__d = void 0;
  else if (n == null || s != r || s.parentNode == null)
    e:
      if (r == null || r.parentNode !== e)
        e.appendChild(s), l = null;
      else {
        for (a = r, _ = 0; (a = a.nextSibling) && _ < o.length; _ += 2)
          if (a == s)
            break e;
        e.insertBefore(s, r), l = r;
      }
  return l !== void 0 ? l : s.nextSibling;
}
function X0(e, t, n, o, s) {
  var r;
  for (r in n)
    r === "children" || r === "key" || r in t || Ms(e, r, null, n[r], o);
  for (r in t)
    s && typeof t[r] != "function" || r === "children" || r === "key" || r === "value" || r === "checked" || n[r] === t[r] || Ms(e, r, t[r], n[r], o);
}
function kf(e, t, n) {
  t[0] === "-" ? e.setProperty(t, n) : e[t] = n == null ? "" : typeof n != "number" || q0.test(t) ? n : n + "px";
}
function Ms(e, t, n, o, s) {
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
  this.l[e.type + !1](me.event ? me.event(e) : e);
}
function Sf(e) {
  this.l[e.type + !0](me.event ? me.event(e) : e);
}
function Op(e, t, n, o, s, r, l, a, _) {
  var d, i, h, f, c, u, y, p, m, v, $, w, C, x, E, g = t.type;
  if (t.constructor !== void 0)
    return null;
  n.__h != null && (_ = n.__h, a = t.__e = n.__e, t.__h = null, r = [a]), (d = me.__b) && d(t);
  try {
    e:
      if (typeof g == "function") {
        if (p = t.props, m = (d = g.contextType) && o[d.__c], v = d ? m ? m.props.value : d.__ : o, n.__c ? y = (i = t.__c = n.__c).__ = i.__E : ("prototype" in g && g.prototype.render ? t.__c = i = new g(p, v) : (t.__c = i = new Jt(p, v), i.constructor = g, i.render = J0), m && m.sub(i), i.props = p, i.state || (i.state = {}), i.context = v, i.__n = o, h = i.__d = !0, i.__h = [], i._sb = []), i.__s == null && (i.__s = i.state), g.getDerivedStateFromProps != null && (i.__s == i.state && (i.__s = zt({}, i.__s)), zt(i.__s, g.getDerivedStateFromProps(p, i.__s))), f = i.props, c = i.state, h)
          g.getDerivedStateFromProps == null && i.componentWillMount != null && i.componentWillMount(), i.componentDidMount != null && i.__h.push(i.componentDidMount);
        else {
          if (g.getDerivedStateFromProps == null && p !== f && i.componentWillReceiveProps != null && i.componentWillReceiveProps(p, v), !i.__e && i.shouldComponentUpdate != null && i.shouldComponentUpdate(p, i.__s, v) === !1 || t.__v === n.__v) {
            for (i.props = p, i.state = i.__s, t.__v !== n.__v && (i.__d = !1), i.__v = t, t.__e = n.__e, t.__k = n.__k, t.__k.forEach(function(k) {
              k && (k.__ = t);
            }), $ = 0; $ < i._sb.length; $++)
              i.__h.push(i._sb[$]);
            i._sb = [], i.__h.length && l.push(i);
            break e;
          }
          i.componentWillUpdate != null && i.componentWillUpdate(p, i.__s, v), i.componentDidUpdate != null && i.__h.push(function() {
            i.componentDidUpdate(f, c, u);
          });
        }
        if (i.context = v, i.props = p, i.__v = t, i.__P = e, w = me.__r, C = 0, "prototype" in g && g.prototype.render) {
          for (i.state = i.__s, i.__d = !1, w && w(t), d = i.render(i.props, i.state, i.context), x = 0; x < i._sb.length; x++)
            i.__h.push(i._sb[x]);
          i._sb = [];
        } else
          do
            i.__d = !1, w && w(t), d = i.render(i.props, i.state, i.context), i.state = i.__s;
          while (i.__d && ++C < 25);
        i.state = i.__s, i.getChildContext != null && (o = zt(zt({}, o), i.getChildContext())), h || i.getSnapshotBeforeUpdate == null || (u = i.getSnapshotBeforeUpdate(f, c)), E = d != null && d.type === yc && d.key == null ? d.props.children : d, Tp(e, Array.isArray(E) ? E : [E], t, n, o, s, r, l, a, _), i.base = t.__e, t.__h = null, i.__h.length && l.push(i), y && (i.__E = i.__ = null), i.__e = !1;
      } else
        r == null && t.__v === n.__v ? (t.__k = n.__k, t.__e = n.__e) : t.__e = Z0(n.__e, t, n, o, s, r, l, _);
    (d = me.diffed) && d(t);
  } catch (k) {
    t.__v = null, (_ || r != null) && (t.__e = a, t.__h = !!_, r[r.indexOf(a)] = null), me.__e(k, t, n);
  }
}
function K0(e, t) {
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
function Z0(e, t, n, o, s, r, l, a) {
  var _, d, i, h = n.props, f = t.props, c = t.type, u = 0;
  if (c === "svg" && (s = !0), r != null) {
    for (; u < r.length; u++)
      if ((_ = r[u]) && "setAttribute" in _ == !!c && (c ? _.localName === c : _.nodeType === 3)) {
        e = _, r[u] = null;
        break;
      }
  }
  if (e == null) {
    if (c === null)
      return document.createTextNode(f);
    e = s ? document.createElementNS("http://www.w3.org/2000/svg", c) : document.createElement(c, f.is && f), r = null, a = !1;
  }
  if (c === null)
    h === f || a && e.data === f || (e.data = f);
  else {
    if (r = r && xp.call(e.childNodes), d = (h = n.props || Cp).dangerouslySetInnerHTML, i = f.dangerouslySetInnerHTML, !a) {
      if (r != null)
        for (h = {}, u = 0; u < e.attributes.length; u++)
          h[e.attributes[u].name] = e.attributes[u].value;
      (i || d) && (i && (d && i.__html == d.__html || i.__html === e.innerHTML) || (e.innerHTML = i && i.__html || ""));
    }
    if (X0(e, f, h, s, a), i)
      t.__k = [];
    else if (u = t.props.children, Tp(e, Array.isArray(u) ? u : [u], t, n, o, s && c !== "foreignObject", r, l, r ? r[0] : n.__k && Rr(n, 0), a), r != null)
      for (u = r.length; u--; )
        r[u] != null && Ap(r[u]);
    a || ("value" in f && (u = f.value) !== void 0 && (u !== e.value || c === "progress" && !u || c === "option" && u !== h.value) && Ms(e, "value", u, h.value, !1), "checked" in f && (u = f.checked) !== void 0 && u !== e.checked && Ms(e, "checked", u, h.checked, !1));
  }
  return e;
}
function Np(e, t, n) {
  try {
    typeof e == "function" ? e(t) : e.current = t;
  } catch (o) {
    me.__e(o, n);
  }
}
function Pp(e, t, n) {
  var o, s;
  if (me.unmount && me.unmount(e), (o = e.ref) && (o.current && o.current !== e.__e || Np(o, null, t)), (o = e.__c) != null) {
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
      o[s] && Pp(o[s], t, n || typeof e.type != "function");
  n || e.__e == null || Ap(e.__e), e.__ = e.__e = e.__d = void 0;
}
function J0(e, t, n) {
  return this.constructor(e, n);
}
xp = Ep.slice, me = { __e: function(e, t, n, o) {
  for (var s, r, l; t = t.__; )
    if ((s = t.__c) && !s.__)
      try {
        if ((r = s.constructor) && r.getDerivedStateFromError != null && (s.setState(r.getDerivedStateFromError(e)), l = s.__d), s.componentDidCatch != null && (s.componentDidCatch(e, o || {}), l = s.__d), l)
          return s.__E = s;
      } catch (a) {
        e = a;
      }
  throw e;
} }, Sp = 0, Jt.prototype.setState = function(e, t) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = zt({}, this.state), typeof e == "function" && (e = e(zt({}, n), this.props)), e && zt(n, e), e != null && this.__v && (t && this._sb.push(t), $f(this));
}, Jt.prototype.forceUpdate = function(e) {
  this.__v && (this.__e = !0, e && this.__h.push(e), $f(this));
}, Jt.prototype.render = yc, or = [], As.__r = 0;
var Q0 = 0;
function oe(e, t, n, o, s) {
  var r, l, a = {};
  for (l in t)
    l == "ref" ? r = t[l] : a[l] = t[l];
  var _ = { type: e, props: a, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: --Q0, __source: s, __self: o };
  if (typeof e == "function" && (r = e.defaultProps))
    for (l in r)
      a[l] === void 0 && (a[l] = r[l]);
  return me.vnode && me.vnode(_), _;
}
let ew = (e = 21) => crypto.getRandomValues(new Uint8Array(e)).reduce((t, n) => (n &= 63, n < 36 ? t += n.toString(36) : n < 62 ? t += (n - 26).toString(36).toUpperCase() : n > 62 ? t += "-" : t += "_", t), "");
var sl;
class tw extends Jt {
  constructor() {
    super(...arguments);
    O(this, sl, (n) => {
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
      selections: a = [],
      onClick: _,
      children: d
    } = this.props;
    let i;
    return a.length ? i = /* @__PURE__ */ oe("div", { className: "picker-multi-selections", children: a.map((h, f) => /* @__PURE__ */ oe("div", { className: "picker-multi-selection", children: [
      h.text ?? h.value,
      /* @__PURE__ */ oe("div", { className: "picker-deselect-btn btn", onClick: b(this, sl), "data-idx": f, children: /* @__PURE__ */ oe("span", { className: "close" }) })
    ] })) }) : i = /* @__PURE__ */ oe("span", { className: "picker-select-placeholder", children: r }), /* @__PURE__ */ oe(
      "div",
      {
        className: j("picker-select picker-select-multi form-control", n, { disabled: s, focused: l }),
        style: o,
        onClick: _,
        children: [
          i,
          d,
          /* @__PURE__ */ oe("span", { class: "caret" })
        ]
      }
    );
  }
}
sl = new WeakMap();
var ll;
class nw extends Jt {
  constructor() {
    super(...arguments);
    O(this, ll, (n) => {
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
      selections: a = [],
      onDeselect: _,
      onClick: d,
      children: i
    } = this.props, [h] = a, f = h ? /* @__PURE__ */ oe("span", { className: "picker-single-selection", children: h.text ?? h.value }) : /* @__PURE__ */ oe("span", { className: "picker-select-placeholder", children: r }), c = h && _ ? /* @__PURE__ */ oe("button", { type: "button", className: "btn picker-deselect-btn", onClick: b(this, ll), children: /* @__PURE__ */ oe("span", { className: "close" }) }) : null;
    return /* @__PURE__ */ oe(
      "div",
      {
        className: j("picker-select picker-select-single form-control", n, { disabled: s, focused: l }),
        style: o,
        onClick: d,
        children: [
          f,
          i,
          c,
          /* @__PURE__ */ oe("span", { class: "caret" })
        ]
      }
    );
  }
}
ll = new WeakMap();
var al, Rp, ni, cl, oi, _l;
class ow extends Jt {
  constructor() {
    super(...arguments);
    O(this, al);
    N(this, "state", { keys: "", shown: !1 });
    O(this, ni, (n) => {
      var o;
      (o = n.target) != null && o.closest(`#picker-menu-${this.props.id}`) || this.hide();
    });
    O(this, cl, ({ item: n }) => {
      const o = this.props.items.find((s) => s.value === n.key);
      o && this.props.onSelectItem(o);
    });
    O(this, oi, (n) => {
      this.setState({ keys: n.target.value });
    });
    O(this, _l, () => {
      this.setState({ keys: "" });
    });
  }
  componentDidMount() {
    document.addEventListener("click", b(this, ni)), this.show();
  }
  componentWillUnmount() {
    document.removeEventListener("click", b(this, ni));
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
      maxWidth: a,
      width: _,
      menu: d,
      searchHint: i
    } = this.props, { shown: h, keys: f } = this.state, c = f.trim().length;
    return /* @__PURE__ */ oe("div", { className: j("picker-menu", s, { shown: h, "has-search": c }), id: `picker-menu-${n}`, style: { maxHeight: l, maxWidth: a, width: _, ...r }, children: [
      o ? /* @__PURE__ */ oe("div", { className: "picker-menu-search", children: [
        /* @__PURE__ */ oe("input", { className: "form-control picker-menu-search-input", type: "text", placeholder: i, value: f, onChange: b(this, oi), onInput: b(this, oi) }),
        c ? /* @__PURE__ */ oe("button", { type: "button", className: "btn picker-menu-search-clear", onClick: b(this, _l), children: /* @__PURE__ */ oe("span", { className: "close" }) }) : /* @__PURE__ */ oe("span", { className: "magnifier" })
      ] }) : null,
      /* @__PURE__ */ oe(Za, { className: "picker-menu-list", items: z(this, al, Rp).call(this), onClickItem: b(this, cl), ...d })
    ] });
  }
}
al = new WeakSet(), Rp = function() {
  const { selections: n, items: o } = this.props, s = new Set(n), r = this.state.keys.toLowerCase().split(" ").filter((l) => l.length);
  return o.reduce((l, a) => {
    const {
      value: _,
      keys: d,
      text: i,
      ...h
    } = a;
    if (!r.length || r.every((f) => _.toLowerCase().includes(f) || (d == null ? void 0 : d.toLowerCase().includes(f)) || typeof i == "string" && i.toLowerCase().includes(f))) {
      let f = i ?? _;
      typeof f == "string" && r.length && (f = /* @__PURE__ */ oe("span", { dangerouslySetInnerHTML: { __html: r.reduce((c, u) => c.replace(u, `<span class="picker-menu-item-match">${u}</span>`), f) } })), l.push({
        key: _,
        active: s.has(_),
        text: f,
        ...h
      });
    }
    return l;
  }, []);
}, ni = new WeakMap(), cl = new WeakMap(), oi = new WeakMap(), _l = new WeakMap();
function Cf(e) {
  const t = /* @__PURE__ */ new Set();
  return e.reduce((n, o) => (t.has(o) || (t.add(o), n.push(o)), n), []);
}
var wa, ri, ii, si, Yn, ji, li, Ha, fl, Hp, ul, Wp, dl, hl, pl, ml, vl, Ip;
let rw = (wa = class extends Jt {
  constructor(n) {
    super(n);
    O(this, Yn);
    O(this, li);
    O(this, fl);
    O(this, ul);
    O(this, vl);
    O(this, ri, 0);
    O(this, ii, ew());
    O(this, si, G0());
    O(this, dl, (n, o) => {
      const { valueList: s } = this, r = new Set(n.map((a) => a.value)), l = s.filter((a) => !r.has(a));
      this.setState({ value: l.length ? l.join(this.props.valueSplitter ?? ",") : void 0 });
    });
    O(this, hl, (n) => {
      console.log("#handleSelectClick", n), this.setState({ open: !0 });
    });
    O(this, pl, () => {
      this.close();
    });
    O(this, ml, (n) => {
      this.props.multi ? this.toggleValue(n.value) : this.setState({ value: n.value }, () => {
        var o;
        (o = b(this, si).current) == null || o.hide();
      });
    });
    this.state = {
      value: z(this, fl, Hp).call(this, n.defaultValue) ?? "",
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
    return z(this, li, Ha).call(this, this.state.value);
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
      const s = ++Ic(this, ri)._;
      if (await z(this, Yn, ji).call(this, { loading: !0, items: [] }), n = await n(), b(this, ri) !== s)
        return [];
    }
    const o = {};
    return Array.isArray(n) && this.state.items !== n && (o.items = n), this.state.loading && (o.loading = !1), Object.keys(o).length && await z(this, Yn, ji).call(this, o), n;
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
    await z(this, Yn, ji).call(this, { open: n }), n && this.loadItemList();
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
    } = this.props, l = r ? tw : nw;
    return /* @__PURE__ */ oe("div", { className: j("picker", n), style: o, id: `picker-${b(this, ii)}`, children: [
      /* @__PURE__ */ oe(l, { ...z(this, ul, Wp).call(this) }),
      s,
      this.state.open ? /* @__PURE__ */ oe(ow, { ...z(this, vl, Ip).call(this), ref: b(this, si) }) : null
    ] });
  }
}, ri = new WeakMap(), ii = new WeakMap(), si = new WeakMap(), Yn = new WeakSet(), ji = function(n) {
  return new Promise((o) => {
    this.setState(n, o);
  });
}, li = new WeakSet(), Ha = function(n) {
  return typeof n == "string" ? Cf(n.split(this.props.valueSplitter ?? ",")) : Array.isArray(n) ? Cf(n) : [];
}, fl = new WeakSet(), Hp = function(n) {
  const o = z(this, li, Ha).call(this, n);
  return o.length ? o.join(this.props.valueSplitter ?? ",") : void 0;
}, ul = new WeakSet(), Wp = function() {
  const { placeholder: n, disabled: o } = this.props, { open: s } = this.state;
  return {
    focused: s,
    placeholder: n,
    disabled: o,
    selections: this.getSelections(),
    onClick: b(this, hl),
    onDeselect: b(this, dl)
  };
}, dl = new WeakMap(), hl = new WeakMap(), pl = new WeakMap(), ml = new WeakMap(), vl = new WeakSet(), Ip = function() {
  const { search: n, menuClass: o, menuWidth: s, menuStyle: r, menuMaxHeight: l, menuMaxWidth: a } = this.props, { items: _ } = this.state;
  return {
    id: b(this, ii),
    items: _,
    selections: this.valueList,
    search: n === !0 || typeof n == "number" && n <= _.length,
    style: r,
    className: o,
    width: s,
    maxHeight: l,
    maxWidth: a,
    onRequestHide: b(this, pl),
    onSelectItem: b(this, ml)
  };
}, N(wa, "defaultProps", {
  container: "body",
  valueSplitter: ",",
  search: !0,
  menuWidth: "auto",
  menuMaxHeight: 400
}), wa);
class Ef extends Pe {
}
N(Ef, "NAME", "picker"), N(Ef, "Component", rw);
var na, ce, Up, rr, Af, Ts = {}, Bp = [], iw = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function Yt(e, t) {
  for (var n in t)
    e[n] = t[n];
  return e;
}
function Fp(e) {
  var t = e.parentNode;
  t && t.removeChild(e);
}
function jp(e, t, n) {
  var o, s, r, l = {};
  for (r in t)
    r == "key" ? o = t[r] : r == "ref" ? s = t[r] : l[r] = t[r];
  if (arguments.length > 2 && (l.children = arguments.length > 3 ? na.call(arguments, 2) : n), typeof e == "function" && e.defaultProps != null)
    for (r in e.defaultProps)
      l[r] === void 0 && (l[r] = e.defaultProps[r]);
  return Vi(e, l, o, s, null);
}
function Vi(e, t, n, o, s) {
  var r = { type: e, props: t, key: n, ref: o, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: s ?? ++Up };
  return s == null && ce.vnode != null && ce.vnode(r), r;
}
function ki() {
  return { current: null };
}
function oa(e) {
  return e.children;
}
function ir(e, t) {
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
function Vp(e) {
  var t, n;
  if ((e = e.__) != null && e.__c != null) {
    for (e.__e = e.__c.base = null, t = 0; t < e.__k.length; t++)
      if ((n = e.__k[t]) != null && n.__e != null) {
        e.__e = e.__c.base = n.__e;
        break;
      }
    return Vp(e);
  }
}
function Mf(e) {
  (!e.__d && (e.__d = !0) && rr.push(e) && !Ls.__r++ || Af !== ce.debounceRendering) && ((Af = ce.debounceRendering) || setTimeout)(Ls);
}
function Ls() {
  for (var e; Ls.__r = rr.length; )
    e = rr.sort(function(t, n) {
      return t.__v.__b - n.__v.__b;
    }), rr = [], e.some(function(t) {
      var n, o, s, r, l, a;
      t.__d && (l = (r = (n = t).__v).__e, (a = n.__P) && (o = [], (s = Yt({}, r)).__v = r.__v + 1, bc(a, r, s, n.__n, a.ownerSVGElement !== void 0, r.__h != null ? [l] : null, o, l ?? Hr(r), r.__h), Gp(o, r), r.__e != l && Vp(r)));
    });
}
function zp(e, t, n, o, s, r, l, a, _, d) {
  var i, h, f, c, u, y, p, m = o && o.__k || Bp, v = m.length;
  for (n.__k = [], i = 0; i < t.length; i++)
    if ((c = n.__k[i] = (c = t[i]) == null || typeof c == "boolean" ? null : typeof c == "string" || typeof c == "number" || typeof c == "bigint" ? Vi(null, c, null, null, c) : Array.isArray(c) ? Vi(oa, { children: c }, null, null, null) : c.__b > 0 ? Vi(c.type, c.props, c.key, c.ref ? c.ref : null, c.__v) : c) != null) {
      if (c.__ = n, c.__b = n.__b + 1, (f = m[i]) === null || f && c.key == f.key && c.type === f.type)
        m[i] = void 0;
      else
        for (h = 0; h < v; h++) {
          if ((f = m[h]) && c.key == f.key && c.type === f.type) {
            m[h] = void 0;
            break;
          }
          f = null;
        }
      bc(e, c, f = f || Ts, s, r, l, a, _, d), u = c.__e, (h = c.ref) && f.ref != h && (p || (p = []), f.ref && p.push(f.ref, null, c), p.push(h, c.__c || u, c)), u != null ? (y == null && (y = u), typeof c.type == "function" && c.__k === f.__k ? c.__d = _ = Yp(c, _, e) : _ = qp(e, c, f, m, u, _), typeof n.type == "function" && (n.__d = _)) : _ && f.__e == _ && _.parentNode != e && (_ = Hr(f));
    }
  for (n.__e = y, i = v; i--; )
    m[i] != null && Kp(m[i], m[i]);
  if (p)
    for (i = 0; i < p.length; i++)
      Xp(p[i], p[++i], p[++i]);
}
function Yp(e, t, n) {
  for (var o, s = e.__k, r = 0; s && r < s.length; r++)
    (o = s[r]) && (o.__ = e, t = typeof o.type == "function" ? Yp(o, t, n) : qp(n, o, o, s, o.__e, t));
  return t;
}
function qp(e, t, n, o, s, r) {
  var l, a, _;
  if (t.__d !== void 0)
    l = t.__d, t.__d = void 0;
  else if (n == null || s != r || s.parentNode == null)
    e:
      if (r == null || r.parentNode !== e)
        e.appendChild(s), l = null;
      else {
        for (a = r, _ = 0; (a = a.nextSibling) && _ < o.length; _ += 2)
          if (a == s)
            break e;
        e.insertBefore(s, r), l = r;
      }
  return l !== void 0 ? l : s.nextSibling;
}
function sw(e, t, n, o, s) {
  var r;
  for (r in n)
    r === "children" || r === "key" || r in t || Ds(e, r, null, n[r], o);
  for (r in t)
    s && typeof t[r] != "function" || r === "children" || r === "key" || r === "value" || r === "checked" || n[r] === t[r] || Ds(e, r, t[r], n[r], o);
}
function Tf(e, t, n) {
  t[0] === "-" ? e.setProperty(t, n) : e[t] = n == null ? "" : typeof n != "number" || iw.test(t) ? n : n + "px";
}
function Ds(e, t, n, o, s) {
  var r;
  e:
    if (t === "style")
      if (typeof n == "string")
        e.style.cssText = n;
      else {
        if (typeof o == "string" && (e.style.cssText = o = ""), o)
          for (t in o)
            n && t in n || Tf(e.style, t, "");
        if (n)
          for (t in n)
            o && n[t] === o[t] || Tf(e.style, t, n[t]);
      }
    else if (t[0] === "o" && t[1] === "n")
      r = t !== (t = t.replace(/Capture$/, "")), t = t.toLowerCase() in e ? t.toLowerCase().slice(2) : t.slice(2), e.l || (e.l = {}), e.l[t + r] = n, n ? o || e.addEventListener(t, r ? Df : Lf, r) : e.removeEventListener(t, r ? Df : Lf, r);
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
function Lf(e) {
  this.l[e.type + !1](ce.event ? ce.event(e) : e);
}
function Df(e) {
  this.l[e.type + !0](ce.event ? ce.event(e) : e);
}
function bc(e, t, n, o, s, r, l, a, _) {
  var d, i, h, f, c, u, y, p, m, v, $, w, C, x, E, g = t.type;
  if (t.constructor !== void 0)
    return null;
  n.__h != null && (_ = n.__h, a = t.__e = n.__e, t.__h = null, r = [a]), (d = ce.__b) && d(t);
  try {
    e:
      if (typeof g == "function") {
        if (p = t.props, m = (d = g.contextType) && o[d.__c], v = d ? m ? m.props.value : d.__ : o, n.__c ? y = (i = t.__c = n.__c).__ = i.__E : ("prototype" in g && g.prototype.render ? t.__c = i = new g(p, v) : (t.__c = i = new ir(p, v), i.constructor = g, i.render = aw), m && m.sub(i), i.props = p, i.state || (i.state = {}), i.context = v, i.__n = o, h = i.__d = !0, i.__h = [], i._sb = []), i.__s == null && (i.__s = i.state), g.getDerivedStateFromProps != null && (i.__s == i.state && (i.__s = Yt({}, i.__s)), Yt(i.__s, g.getDerivedStateFromProps(p, i.__s))), f = i.props, c = i.state, h)
          g.getDerivedStateFromProps == null && i.componentWillMount != null && i.componentWillMount(), i.componentDidMount != null && i.__h.push(i.componentDidMount);
        else {
          if (g.getDerivedStateFromProps == null && p !== f && i.componentWillReceiveProps != null && i.componentWillReceiveProps(p, v), !i.__e && i.shouldComponentUpdate != null && i.shouldComponentUpdate(p, i.__s, v) === !1 || t.__v === n.__v) {
            for (i.props = p, i.state = i.__s, t.__v !== n.__v && (i.__d = !1), i.__v = t, t.__e = n.__e, t.__k = n.__k, t.__k.forEach(function(k) {
              k && (k.__ = t);
            }), $ = 0; $ < i._sb.length; $++)
              i.__h.push(i._sb[$]);
            i._sb = [], i.__h.length && l.push(i);
            break e;
          }
          i.componentWillUpdate != null && i.componentWillUpdate(p, i.__s, v), i.componentDidUpdate != null && i.__h.push(function() {
            i.componentDidUpdate(f, c, u);
          });
        }
        if (i.context = v, i.props = p, i.__v = t, i.__P = e, w = ce.__r, C = 0, "prototype" in g && g.prototype.render) {
          for (i.state = i.__s, i.__d = !1, w && w(t), d = i.render(i.props, i.state, i.context), x = 0; x < i._sb.length; x++)
            i.__h.push(i._sb[x]);
          i._sb = [];
        } else
          do
            i.__d = !1, w && w(t), d = i.render(i.props, i.state, i.context), i.state = i.__s;
          while (i.__d && ++C < 25);
        i.state = i.__s, i.getChildContext != null && (o = Yt(Yt({}, o), i.getChildContext())), h || i.getSnapshotBeforeUpdate == null || (u = i.getSnapshotBeforeUpdate(f, c)), E = d != null && d.type === oa && d.key == null ? d.props.children : d, zp(e, Array.isArray(E) ? E : [E], t, n, o, s, r, l, a, _), i.base = t.__e, t.__h = null, i.__h.length && l.push(i), y && (i.__E = i.__ = null), i.__e = !1;
      } else
        r == null && t.__v === n.__v ? (t.__k = n.__k, t.__e = n.__e) : t.__e = lw(n.__e, t, n, o, s, r, l, _);
    (d = ce.diffed) && d(t);
  } catch (k) {
    t.__v = null, (_ || r != null) && (t.__e = a, t.__h = !!_, r[r.indexOf(a)] = null), ce.__e(k, t, n);
  }
}
function Gp(e, t) {
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
function lw(e, t, n, o, s, r, l, a) {
  var _, d, i, h = n.props, f = t.props, c = t.type, u = 0;
  if (c === "svg" && (s = !0), r != null) {
    for (; u < r.length; u++)
      if ((_ = r[u]) && "setAttribute" in _ == !!c && (c ? _.localName === c : _.nodeType === 3)) {
        e = _, r[u] = null;
        break;
      }
  }
  if (e == null) {
    if (c === null)
      return document.createTextNode(f);
    e = s ? document.createElementNS("http://www.w3.org/2000/svg", c) : document.createElement(c, f.is && f), r = null, a = !1;
  }
  if (c === null)
    h === f || a && e.data === f || (e.data = f);
  else {
    if (r = r && na.call(e.childNodes), d = (h = n.props || Ts).dangerouslySetInnerHTML, i = f.dangerouslySetInnerHTML, !a) {
      if (r != null)
        for (h = {}, u = 0; u < e.attributes.length; u++)
          h[e.attributes[u].name] = e.attributes[u].value;
      (i || d) && (i && (d && i.__html == d.__html || i.__html === e.innerHTML) || (e.innerHTML = i && i.__html || ""));
    }
    if (sw(e, f, h, s, a), i)
      t.__k = [];
    else if (u = t.props.children, zp(e, Array.isArray(u) ? u : [u], t, n, o, s && c !== "foreignObject", r, l, r ? r[0] : n.__k && Hr(n, 0), a), r != null)
      for (u = r.length; u--; )
        r[u] != null && Fp(r[u]);
    a || ("value" in f && (u = f.value) !== void 0 && (u !== e.value || c === "progress" && !u || c === "option" && u !== h.value) && Ds(e, "value", u, h.value, !1), "checked" in f && (u = f.checked) !== void 0 && u !== e.checked && Ds(e, "checked", u, h.checked, !1));
  }
  return e;
}
function Xp(e, t, n) {
  try {
    typeof e == "function" ? e(t) : e.current = t;
  } catch (o) {
    ce.__e(o, n);
  }
}
function Kp(e, t, n) {
  var o, s;
  if (ce.unmount && ce.unmount(e), (o = e.ref) && (o.current && o.current !== e.__e || Xp(o, null, t)), (o = e.__c) != null) {
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
      o[s] && Kp(o[s], t, n || typeof e.type != "function");
  n || e.__e == null || Fp(e.__e), e.__ = e.__e = e.__d = void 0;
}
function aw(e, t, n) {
  return this.constructor(e, n);
}
function cw(e, t, n) {
  var o, s, r;
  ce.__ && ce.__(e, t), s = (o = typeof n == "function") ? null : n && n.__k || t.__k, r = [], bc(t, e = (!o && n || t).__k = jp(oa, null, [e]), s || Ts, Ts, t.ownerSVGElement !== void 0, !o && n ? [n] : s ? null : t.firstChild ? na.call(t.childNodes) : null, r, !o && n ? n : s ? s.__e : t.firstChild, o), Gp(r, e);
}
na = Bp.slice, ce = { __e: function(e, t, n, o) {
  for (var s, r, l; t = t.__; )
    if ((s = t.__c) && !s.__)
      try {
        if ((r = s.constructor) && r.getDerivedStateFromError != null && (s.setState(r.getDerivedStateFromError(e)), l = s.__d), s.componentDidCatch != null && (s.componentDidCatch(e, o || {}), l = s.__d), l)
          return s.__E = s;
      } catch (a) {
        e = a;
      }
  throw e;
} }, Up = 0, ir.prototype.setState = function(e, t) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = Yt({}, this.state), typeof e == "function" && (e = e(Yt({}, n), this.props)), e && Yt(n, e), e != null && this.__v && (t && this._sb.push(t), Mf(this));
}, ir.prototype.forceUpdate = function(e) {
  this.__v && (this.__e = !0, e && this.__h.push(e), Mf(this));
}, ir.prototype.render = oa, rr = [], Ls.__r = 0;
var _w = 0;
function Re(e, t, n, o, s) {
  var r, l, a = {};
  for (l in t)
    l == "ref" ? r = t[l] : a[l] = t[l];
  var _ = { type: e, props: a, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: --_w, __source: s, __self: o };
  if (typeof e == "function" && (r = e.defaultProps))
    for (l in r)
      a[l] === void 0 && (a[l] = r[l]);
  return ce.vnode && ce.vnode(_), _;
}
var Os = {}, fw = {
  get exports() {
    return Os;
  },
  set exports(e) {
    Os = e;
  }
};
(function(e, t) {
  (function(n, o) {
    e.exports = o();
  })(ih, function() {
    var n = 1e3, o = 6e4, s = 36e5, r = "millisecond", l = "second", a = "minute", _ = "hour", d = "day", i = "week", h = "month", f = "quarter", c = "year", u = "date", y = "Invalid Date", p = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, m = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, v = { name: "en", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), ordinal: function(L) {
      var A = ["th", "st", "nd", "rd"], S = L % 100;
      return "[" + L + (A[(S - 20) % 10] || A[S] || A[0]) + "]";
    } }, $ = function(L, A, S) {
      var D = String(L);
      return !D || D.length >= A ? L : "" + Array(A + 1 - D.length).join(S) + L;
    }, w = { s: $, z: function(L) {
      var A = -L.utcOffset(), S = Math.abs(A), D = Math.floor(S / 60), M = S % 60;
      return (A <= 0 ? "+" : "-") + $(D, 2, "0") + ":" + $(M, 2, "0");
    }, m: function L(A, S) {
      if (A.date() < S.date())
        return -L(S, A);
      var D = 12 * (S.year() - A.year()) + (S.month() - A.month()), M = A.clone().add(D, h), R = S - M < 0, P = A.clone().add(D + (R ? -1 : 1), h);
      return +(-(D + (S - M) / (R ? M - P : P - M)) || 0);
    }, a: function(L) {
      return L < 0 ? Math.ceil(L) || 0 : Math.floor(L);
    }, p: function(L) {
      return { M: h, y: c, w: i, d, D: u, h: _, m: a, s: l, ms: r, Q: f }[L] || String(L || "").toLowerCase().replace(/s$/, "");
    }, u: function(L) {
      return L === void 0;
    } }, C = "en", x = {};
    x[C] = v;
    var E = function(L) {
      return L instanceof U;
    }, g = function L(A, S, D) {
      var M;
      if (!A)
        return C;
      if (typeof A == "string") {
        var R = A.toLowerCase();
        x[R] && (M = R), S && (x[R] = S, M = R);
        var P = A.split("-");
        if (!M && P.length > 1)
          return L(P[0]);
      } else {
        var I = A.name;
        x[I] = A, M = I;
      }
      return !D && M && (C = M), M || !D && C;
    }, k = function(L, A) {
      if (E(L))
        return L.clone();
      var S = typeof A == "object" ? A : {};
      return S.date = L, S.args = arguments, new U(S);
    }, T = w;
    T.l = g, T.i = E, T.w = function(L, A) {
      return k(L, { locale: A.$L, utc: A.$u, x: A.$x, $offset: A.$offset });
    };
    var U = function() {
      function L(S) {
        this.$L = g(S.locale, null, !0), this.parse(S);
      }
      var A = L.prototype;
      return A.parse = function(S) {
        this.$d = function(D) {
          var M = D.date, R = D.utc;
          if (M === null)
            return new Date(NaN);
          if (T.u(M))
            return new Date();
          if (M instanceof Date)
            return new Date(M);
          if (typeof M == "string" && !/Z$/i.test(M)) {
            var P = M.match(p);
            if (P) {
              var I = P[2] - 1 || 0, V = (P[7] || "0").substring(0, 3);
              return R ? new Date(Date.UTC(P[1], I, P[3] || 1, P[4] || 0, P[5] || 0, P[6] || 0, V)) : new Date(P[1], I, P[3] || 1, P[4] || 0, P[5] || 0, P[6] || 0, V);
            }
          }
          return new Date(M);
        }(S), this.$x = S.x || {}, this.init();
      }, A.init = function() {
        var S = this.$d;
        this.$y = S.getFullYear(), this.$M = S.getMonth(), this.$D = S.getDate(), this.$W = S.getDay(), this.$H = S.getHours(), this.$m = S.getMinutes(), this.$s = S.getSeconds(), this.$ms = S.getMilliseconds();
      }, A.$utils = function() {
        return T;
      }, A.isValid = function() {
        return this.$d.toString() !== y;
      }, A.isSame = function(S, D) {
        var M = k(S);
        return this.startOf(D) <= M && M <= this.endOf(D);
      }, A.isAfter = function(S, D) {
        return k(S) < this.startOf(D);
      }, A.isBefore = function(S, D) {
        return this.endOf(D) < k(S);
      }, A.$g = function(S, D, M) {
        return T.u(S) ? this[D] : this.set(M, S);
      }, A.unix = function() {
        return Math.floor(this.valueOf() / 1e3);
      }, A.valueOf = function() {
        return this.$d.getTime();
      }, A.startOf = function(S, D) {
        var M = this, R = !!T.u(D) || D, P = T.p(S), I = function(K, q) {
          var ne = T.w(M.$u ? Date.UTC(M.$y, q, K) : new Date(M.$y, q, K), M);
          return R ? ne : ne.endOf(d);
        }, V = function(K, q) {
          return T.w(M.toDate()[K].apply(M.toDate("s"), (R ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(q)), M);
        }, F = this.$W, Y = this.$M, J = this.$D, W = "set" + (this.$u ? "UTC" : "");
        switch (P) {
          case c:
            return R ? I(1, 0) : I(31, 11);
          case h:
            return R ? I(1, Y) : I(0, Y + 1);
          case i:
            var G = this.$locale().weekStart || 0, Q = (F < G ? F + 7 : F) - G;
            return I(R ? J - Q : J + (6 - Q), Y);
          case d:
          case u:
            return V(W + "Hours", 0);
          case _:
            return V(W + "Minutes", 1);
          case a:
            return V(W + "Seconds", 2);
          case l:
            return V(W + "Milliseconds", 3);
          default:
            return this.clone();
        }
      }, A.endOf = function(S) {
        return this.startOf(S, !1);
      }, A.$set = function(S, D) {
        var M, R = T.p(S), P = "set" + (this.$u ? "UTC" : ""), I = (M = {}, M[d] = P + "Date", M[u] = P + "Date", M[h] = P + "Month", M[c] = P + "FullYear", M[_] = P + "Hours", M[a] = P + "Minutes", M[l] = P + "Seconds", M[r] = P + "Milliseconds", M)[R], V = R === d ? this.$D + (D - this.$W) : D;
        if (R === h || R === c) {
          var F = this.clone().set(u, 1);
          F.$d[I](V), F.init(), this.$d = F.set(u, Math.min(this.$D, F.daysInMonth())).$d;
        } else
          I && this.$d[I](V);
        return this.init(), this;
      }, A.set = function(S, D) {
        return this.clone().$set(S, D);
      }, A.get = function(S) {
        return this[T.p(S)]();
      }, A.add = function(S, D) {
        var M, R = this;
        S = Number(S);
        var P = T.p(D), I = function(Y) {
          var J = k(R);
          return T.w(J.date(J.date() + Math.round(Y * S)), R);
        };
        if (P === h)
          return this.set(h, this.$M + S);
        if (P === c)
          return this.set(c, this.$y + S);
        if (P === d)
          return I(1);
        if (P === i)
          return I(7);
        var V = (M = {}, M[a] = o, M[_] = s, M[l] = n, M)[P] || 1, F = this.$d.getTime() + S * V;
        return T.w(F, this);
      }, A.subtract = function(S, D) {
        return this.add(-1 * S, D);
      }, A.format = function(S) {
        var D = this, M = this.$locale();
        if (!this.isValid())
          return M.invalidDate || y;
        var R = S || "YYYY-MM-DDTHH:mm:ssZ", P = T.z(this), I = this.$H, V = this.$m, F = this.$M, Y = M.weekdays, J = M.months, W = function(q, ne, be, $e) {
          return q && (q[ne] || q(D, R)) || be[ne].slice(0, $e);
        }, G = function(q) {
          return T.s(I % 12 || 12, q, "0");
        }, Q = M.meridiem || function(q, ne, be) {
          var $e = q < 12 ? "AM" : "PM";
          return be ? $e.toLowerCase() : $e;
        }, K = { YY: String(this.$y).slice(-2), YYYY: this.$y, M: F + 1, MM: T.s(F + 1, 2, "0"), MMM: W(M.monthsShort, F, J, 3), MMMM: W(J, F), D: this.$D, DD: T.s(this.$D, 2, "0"), d: String(this.$W), dd: W(M.weekdaysMin, this.$W, Y, 2), ddd: W(M.weekdaysShort, this.$W, Y, 3), dddd: Y[this.$W], H: String(I), HH: T.s(I, 2, "0"), h: G(1), hh: G(2), a: Q(I, V, !0), A: Q(I, V, !1), m: String(V), mm: T.s(V, 2, "0"), s: String(this.$s), ss: T.s(this.$s, 2, "0"), SSS: T.s(this.$ms, 3, "0"), Z: P };
        return R.replace(m, function(q, ne) {
          return ne || K[q] || P.replace(":", "");
        });
      }, A.utcOffset = function() {
        return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
      }, A.diff = function(S, D, M) {
        var R, P = T.p(D), I = k(S), V = (I.utcOffset() - this.utcOffset()) * o, F = this - I, Y = T.m(this, I);
        return Y = (R = {}, R[c] = Y / 12, R[h] = Y, R[f] = Y / 3, R[i] = (F - V) / 6048e5, R[d] = (F - V) / 864e5, R[_] = F / s, R[a] = F / o, R[l] = F / n, R)[P] || F, M ? Y : T.a(Y);
      }, A.daysInMonth = function() {
        return this.endOf(h).$D;
      }, A.$locale = function() {
        return x[this.$L];
      }, A.locale = function(S, D) {
        if (!S)
          return this.$L;
        var M = this.clone(), R = g(S, D, !0);
        return R && (M.$L = R), M;
      }, A.clone = function() {
        return T.w(this.$d, this);
      }, A.toDate = function() {
        return new Date(this.valueOf());
      }, A.toJSON = function() {
        return this.isValid() ? this.toISOString() : null;
      }, A.toISOString = function() {
        return this.$d.toISOString();
      }, A.toString = function() {
        return this.$d.toUTCString();
      }, L;
    }(), B = U.prototype;
    return k.prototype = B, [["$ms", r], ["$s", l], ["$m", a], ["$H", _], ["$W", d], ["$M", h], ["$y", c], ["$D", u]].forEach(function(L) {
      B[L[1]] = function(A) {
        return this.$g(A, L[0], L[1]);
      };
    }), k.extend = function(L, A) {
      return L.$i || (L(A, U, k), L.$i = !0), k;
    }, k.locale = g, k.isDayjs = E, k.unix = function(L) {
      return k(1e3 * L);
    }, k.en = x[C], k.Ls = x, k.p = {}, k;
  });
})(fw);
const uw = (e) => {
  const t = Os(`1989-01-01 ${e || "00:00:00"}`);
  return {
    hour: t.hour(),
    minute: t.minute(),
    second: t.second()
  };
};
function dw() {
  let e = new Array(24).fill(0), t = new Array(60).fill(0), n = new Array(60).fill(0);
  return e = e.map((o, s) => o + s), t = t.map((o, s) => o + s), n = n.map((o, s) => o + s), { hourList: e, minuteList: t, secondList: n };
}
class hw extends ir {
  constructor() {
    super(...arguments);
    N(this, "cellHeight", 24);
    N(this, "ref", ki());
    N(this, "hourRef", ki());
    N(this, "minuteRef", ki());
    N(this, "secondRef", ki());
    N(this, "state", {
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
    const s = uw(this.state.selectTime);
    return o.map((r) => {
      const l = s[n] === r, a = { ...s, [n]: r };
      return /* @__PURE__ */ Re(
        "button",
        {
          className: j("btn", "size-sm", "ghost", "flex", { active: l }),
          type: "button",
          onClick: () => this.handleChange(a),
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
    const { showSeconds: n, style: o } = this.props, { hourList: s, minuteList: r, secondList: l } = dw();
    return /* @__PURE__ */ Re("div", { className: j("timepicker-timepanel", "pt-px"), style: o, ref: this.ref, children: [
      /* @__PURE__ */ Re("div", { className: j("flex", " justify-around", "p-px", "not-hide-timepicker"), children: [
        /* @__PURE__ */ Re("div", { className: "overflow-hidden", children: /* @__PURE__ */ Re("div", { className: "timepicker-timepanel-select-col", ref: this.hourRef, children: this.renderColumn("hour", s) }) }),
        /* @__PURE__ */ Re("div", { className: "overflow-hidden", children: /* @__PURE__ */ Re("div", { className: "timepicker-timepanel-select-col", ref: this.minuteRef, children: this.renderColumn("minute", r) }) }),
        n && /* @__PURE__ */ Re("div", { className: "overflow-hidden", children: /* @__PURE__ */ Re("div", { className: "timepicker-timepanel-select-col", ref: this.secondRef, children: this.renderColumn("second", l) }) })
      ] }),
      /* @__PURE__ */ Re("div", { className: j("timepicker-timepanel-actions", "flex", "p-px", "justify-between", "align-center"), children: [
        /* @__PURE__ */ Re("button", { className: j("btn", "size-sm", "ghost", "text-primary"), type: "button", onClick: this.onClear.bind(this), children: "清除" }),
        /* @__PURE__ */ Re("button", { className: j("btn", "size-sm", "ghost", "text-primary"), type: "button", onClick: this.onSubmit.bind(this), children: "确认" })
      ] })
    ] });
  }
}
function ze(e) {
  if (e == null)
    return window;
  if (e.toString() !== "[object Window]") {
    var t = e.ownerDocument;
    return t && t.defaultView || window;
  }
  return e;
}
function kn(e) {
  var t = ze(e).Element;
  return e instanceof t || e instanceof Element;
}
function je(e) {
  var t = ze(e).HTMLElement;
  return e instanceof t || e instanceof HTMLElement;
}
function wc(e) {
  if (typeof ShadowRoot > "u")
    return !1;
  var t = ze(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot;
}
var wn = Math.max, Ns = Math.min, co = Math.round;
function Wa() {
  var e = navigator.userAgentData;
  return e != null && e.brands ? e.brands.map(function(t) {
    return t.brand + "/" + t.version;
  }).join(" ") : navigator.userAgent;
}
function Zp() {
  return !/^((?!chrome|android).)*safari/i.test(Wa());
}
function _o(e, t, n) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  var o = e.getBoundingClientRect(), s = 1, r = 1;
  t && je(e) && (s = e.offsetWidth > 0 && co(o.width) / e.offsetWidth || 1, r = e.offsetHeight > 0 && co(o.height) / e.offsetHeight || 1);
  var l = kn(e) ? ze(e) : window, a = l.visualViewport, _ = !Zp() && n, d = (o.left + (_ && a ? a.offsetLeft : 0)) / s, i = (o.top + (_ && a ? a.offsetTop : 0)) / r, h = o.width / s, f = o.height / r;
  return {
    width: h,
    height: f,
    top: i,
    right: d + h,
    bottom: i + f,
    left: d,
    x: d,
    y: i
  };
}
function $c(e) {
  var t = ze(e), n = t.pageXOffset, o = t.pageYOffset;
  return {
    scrollLeft: n,
    scrollTop: o
  };
}
function pw(e) {
  return {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  };
}
function mw(e) {
  return e === ze(e) || !je(e) ? $c(e) : pw(e);
}
function ft(e) {
  return e ? (e.nodeName || "").toLowerCase() : null;
}
function an(e) {
  return ((kn(e) ? e.ownerDocument : (
    // $FlowFixMe[prop-missing]
    e.document
  )) || window.document).documentElement;
}
function kc(e) {
  return _o(an(e)).left + $c(e).scrollLeft;
}
function kt(e) {
  return ze(e).getComputedStyle(e);
}
function xc(e) {
  var t = kt(e), n = t.overflow, o = t.overflowX, s = t.overflowY;
  return /auto|scroll|overlay|hidden/.test(n + s + o);
}
function vw(e) {
  var t = e.getBoundingClientRect(), n = co(t.width) / e.offsetWidth || 1, o = co(t.height) / e.offsetHeight || 1;
  return n !== 1 || o !== 1;
}
function gw(e, t, n) {
  n === void 0 && (n = !1);
  var o = je(t), s = je(t) && vw(t), r = an(t), l = _o(e, s, n), a = {
    scrollLeft: 0,
    scrollTop: 0
  }, _ = {
    x: 0,
    y: 0
  };
  return (o || !o && !n) && ((ft(t) !== "body" || // https://github.com/popperjs/popper-core/issues/1078
  xc(r)) && (a = mw(t)), je(t) ? (_ = _o(t, !0), _.x += t.clientLeft, _.y += t.clientTop) : r && (_.x = kc(r))), {
    x: l.left + a.scrollLeft - _.x,
    y: l.top + a.scrollTop - _.y,
    width: l.width,
    height: l.height
  };
}
function Sc(e) {
  var t = _o(e), n = e.offsetWidth, o = e.offsetHeight;
  return Math.abs(t.width - n) <= 1 && (n = t.width), Math.abs(t.height - o) <= 1 && (o = t.height), {
    x: e.offsetLeft,
    y: e.offsetTop,
    width: n,
    height: o
  };
}
function ra(e) {
  return ft(e) === "html" ? e : (
    // this is a quicker (but less type safe) way to save quite some bytes from the bundle
    // $FlowFixMe[incompatible-return]
    // $FlowFixMe[prop-missing]
    e.assignedSlot || // step into the shadow DOM of the parent of a slotted node
    e.parentNode || // DOM Element detected
    (wc(e) ? e.host : null) || // ShadowRoot detected
    // $FlowFixMe[incompatible-call]: HTMLElement is a Node
    an(e)
  );
}
function Jp(e) {
  return ["html", "body", "#document"].indexOf(ft(e)) >= 0 ? e.ownerDocument.body : je(e) && xc(e) ? e : Jp(ra(e));
}
function sr(e, t) {
  var n;
  t === void 0 && (t = []);
  var o = Jp(e), s = o === ((n = e.ownerDocument) == null ? void 0 : n.body), r = ze(o), l = s ? [r].concat(r.visualViewport || [], xc(o) ? o : []) : o, a = t.concat(l);
  return s ? a : (
    // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
    a.concat(sr(ra(l)))
  );
}
function yw(e) {
  return ["table", "td", "th"].indexOf(ft(e)) >= 0;
}
function Of(e) {
  return !je(e) || // https://github.com/popperjs/popper-core/issues/837
  kt(e).position === "fixed" ? null : e.offsetParent;
}
function bw(e) {
  var t = /firefox/i.test(Wa()), n = /Trident/i.test(Wa());
  if (n && je(e)) {
    var o = kt(e);
    if (o.position === "fixed")
      return null;
  }
  var s = ra(e);
  for (wc(s) && (s = s.host); je(s) && ["html", "body"].indexOf(ft(s)) < 0; ) {
    var r = kt(s);
    if (r.transform !== "none" || r.perspective !== "none" || r.contain === "paint" || ["transform", "perspective"].indexOf(r.willChange) !== -1 || t && r.willChange === "filter" || t && r.filter && r.filter !== "none")
      return s;
    s = s.parentNode;
  }
  return null;
}
function vi(e) {
  for (var t = ze(e), n = Of(e); n && yw(n) && kt(n).position === "static"; )
    n = Of(n);
  return n && (ft(n) === "html" || ft(n) === "body" && kt(n).position === "static") ? t : n || bw(e) || t;
}
var De = "top", Xe = "bottom", Ke = "right", Oe = "left", Cc = "auto", gi = [De, Xe, Ke, Oe], fo = "start", Wr = "end", ww = "clippingParents", Qp = "viewport", Co = "popper", $w = "reference", Nf = /* @__PURE__ */ gi.reduce(function(e, t) {
  return e.concat([t + "-" + fo, t + "-" + Wr]);
}, []), em = /* @__PURE__ */ [].concat(gi, [Cc]).reduce(function(e, t) {
  return e.concat([t, t + "-" + fo, t + "-" + Wr]);
}, []), kw = "beforeRead", xw = "read", Sw = "afterRead", Cw = "beforeMain", Ew = "main", Aw = "afterMain", Mw = "beforeWrite", Tw = "write", Lw = "afterWrite", Dw = [kw, xw, Sw, Cw, Ew, Aw, Mw, Tw, Lw];
function Ow(e) {
  var t = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Set(), o = [];
  e.forEach(function(r) {
    t.set(r.name, r);
  });
  function s(r) {
    n.add(r.name);
    var l = [].concat(r.requires || [], r.requiresIfExists || []);
    l.forEach(function(a) {
      if (!n.has(a)) {
        var _ = t.get(a);
        _ && s(_);
      }
    }), o.push(r);
  }
  return e.forEach(function(r) {
    n.has(r.name) || s(r);
  }), o;
}
function Nw(e) {
  var t = Ow(e);
  return Dw.reduce(function(n, o) {
    return n.concat(t.filter(function(s) {
      return s.phase === o;
    }));
  }, []);
}
function Pw(e) {
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
function Rw(e) {
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
function Hw(e, t) {
  var n = ze(e), o = an(e), s = n.visualViewport, r = o.clientWidth, l = o.clientHeight, a = 0, _ = 0;
  if (s) {
    r = s.width, l = s.height;
    var d = Zp();
    (d || !d && t === "fixed") && (a = s.offsetLeft, _ = s.offsetTop);
  }
  return {
    width: r,
    height: l,
    x: a + kc(e),
    y: _
  };
}
function Ww(e) {
  var t, n = an(e), o = $c(e), s = (t = e.ownerDocument) == null ? void 0 : t.body, r = wn(n.scrollWidth, n.clientWidth, s ? s.scrollWidth : 0, s ? s.clientWidth : 0), l = wn(n.scrollHeight, n.clientHeight, s ? s.scrollHeight : 0, s ? s.clientHeight : 0), a = -o.scrollLeft + kc(e), _ = -o.scrollTop;
  return kt(s || n).direction === "rtl" && (a += wn(n.clientWidth, s ? s.clientWidth : 0) - r), {
    width: r,
    height: l,
    x: a,
    y: _
  };
}
function tm(e, t) {
  var n = t.getRootNode && t.getRootNode();
  if (e.contains(t))
    return !0;
  if (n && wc(n)) {
    var o = t;
    do {
      if (o && e.isSameNode(o))
        return !0;
      o = o.parentNode || o.host;
    } while (o);
  }
  return !1;
}
function Ia(e) {
  return Object.assign({}, e, {
    left: e.x,
    top: e.y,
    right: e.x + e.width,
    bottom: e.y + e.height
  });
}
function Iw(e, t) {
  var n = _o(e, !1, t === "fixed");
  return n.top = n.top + e.clientTop, n.left = n.left + e.clientLeft, n.bottom = n.top + e.clientHeight, n.right = n.left + e.clientWidth, n.width = e.clientWidth, n.height = e.clientHeight, n.x = n.left, n.y = n.top, n;
}
function Pf(e, t, n) {
  return t === Qp ? Ia(Hw(e, n)) : kn(t) ? Iw(t, n) : Ia(Ww(an(e)));
}
function Uw(e) {
  var t = sr(ra(e)), n = ["absolute", "fixed"].indexOf(kt(e).position) >= 0, o = n && je(e) ? vi(e) : e;
  return kn(o) ? t.filter(function(s) {
    return kn(s) && tm(s, o) && ft(s) !== "body";
  }) : [];
}
function Bw(e, t, n, o) {
  var s = t === "clippingParents" ? Uw(e) : [].concat(t), r = [].concat(s, [n]), l = r[0], a = r.reduce(function(_, d) {
    var i = Pf(e, d, o);
    return _.top = wn(i.top, _.top), _.right = Ns(i.right, _.right), _.bottom = Ns(i.bottom, _.bottom), _.left = wn(i.left, _.left), _;
  }, Pf(e, l, o));
  return a.width = a.right - a.left, a.height = a.bottom - a.top, a.x = a.left, a.y = a.top, a;
}
function uo(e) {
  return e.split("-")[1];
}
function Ec(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function nm(e) {
  var t = e.reference, n = e.element, o = e.placement, s = o ? lt(o) : null, r = o ? uo(o) : null, l = t.x + t.width / 2 - n.width / 2, a = t.y + t.height / 2 - n.height / 2, _;
  switch (s) {
    case De:
      _ = {
        x: l,
        y: t.y - n.height
      };
      break;
    case Xe:
      _ = {
        x: l,
        y: t.y + t.height
      };
      break;
    case Ke:
      _ = {
        x: t.x + t.width,
        y: a
      };
      break;
    case Oe:
      _ = {
        x: t.x - n.width,
        y: a
      };
      break;
    default:
      _ = {
        x: t.x,
        y: t.y
      };
  }
  var d = s ? Ec(s) : null;
  if (d != null) {
    var i = d === "y" ? "height" : "width";
    switch (r) {
      case fo:
        _[d] = _[d] - (t[i] / 2 - n[i] / 2);
        break;
      case Wr:
        _[d] = _[d] + (t[i] / 2 - n[i] / 2);
        break;
    }
  }
  return _;
}
function om() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
function rm(e) {
  return Object.assign({}, om(), e);
}
function im(e, t) {
  return t.reduce(function(n, o) {
    return n[o] = e, n;
  }, {});
}
function Ac(e, t) {
  t === void 0 && (t = {});
  var n = t, o = n.placement, s = o === void 0 ? e.placement : o, r = n.strategy, l = r === void 0 ? e.strategy : r, a = n.boundary, _ = a === void 0 ? ww : a, d = n.rootBoundary, i = d === void 0 ? Qp : d, h = n.elementContext, f = h === void 0 ? Co : h, c = n.altBoundary, u = c === void 0 ? !1 : c, y = n.padding, p = y === void 0 ? 0 : y, m = rm(typeof p != "number" ? p : im(p, gi)), v = f === Co ? $w : Co, $ = e.rects.popper, w = e.elements[u ? v : f], C = Bw(kn(w) ? w : w.contextElement || an(e.elements.popper), _, i, l), x = _o(e.elements.reference), E = nm({
    reference: x,
    element: $,
    strategy: "absolute",
    placement: s
  }), g = Ia(Object.assign({}, $, E)), k = f === Co ? g : x, T = {
    top: C.top - k.top + m.top,
    bottom: k.bottom - C.bottom + m.bottom,
    left: C.left - k.left + m.left,
    right: k.right - C.right + m.right
  }, U = e.modifiersData.offset;
  if (f === Co && U) {
    var B = U[s];
    Object.keys(T).forEach(function(L) {
      var A = [Ke, Xe].indexOf(L) >= 0 ? 1 : -1, S = [De, Xe].indexOf(L) >= 0 ? "y" : "x";
      T[L] += B[S] * A;
    });
  }
  return T;
}
var Rf = {
  placement: "bottom",
  modifiers: [],
  strategy: "absolute"
};
function Hf() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return !t.some(function(o) {
    return !(o && typeof o.getBoundingClientRect == "function");
  });
}
function Fw(e) {
  e === void 0 && (e = {});
  var t = e, n = t.defaultModifiers, o = n === void 0 ? [] : n, s = t.defaultOptions, r = s === void 0 ? Rf : s;
  return function(a, _, d) {
    d === void 0 && (d = r);
    var i = {
      placement: "bottom",
      orderedModifiers: [],
      options: Object.assign({}, Rf, r),
      modifiersData: {},
      elements: {
        reference: a,
        popper: _
      },
      attributes: {},
      styles: {}
    }, h = [], f = !1, c = {
      state: i,
      setOptions: function(m) {
        var v = typeof m == "function" ? m(i.options) : m;
        y(), i.options = Object.assign({}, r, i.options, v), i.scrollParents = {
          reference: kn(a) ? sr(a) : a.contextElement ? sr(a.contextElement) : [],
          popper: sr(_)
        };
        var $ = Nw(Rw([].concat(o, i.options.modifiers)));
        return i.orderedModifiers = $.filter(function(w) {
          return w.enabled;
        }), u(), c.update();
      },
      // Sync update – it will always be executed, even if not necessary. This
      // is useful for low frequency updates where sync behavior simplifies the
      // logic.
      // For high frequency updates (e.g. `resize` and `scroll` events), always
      // prefer the async Popper#update method
      forceUpdate: function() {
        if (!f) {
          var m = i.elements, v = m.reference, $ = m.popper;
          if (Hf(v, $)) {
            i.rects = {
              reference: gw(v, vi($), i.options.strategy === "fixed"),
              popper: Sc($)
            }, i.reset = !1, i.placement = i.options.placement, i.orderedModifiers.forEach(function(T) {
              return i.modifiersData[T.name] = Object.assign({}, T.data);
            });
            for (var w = 0; w < i.orderedModifiers.length; w++) {
              if (i.reset === !0) {
                i.reset = !1, w = -1;
                continue;
              }
              var C = i.orderedModifiers[w], x = C.fn, E = C.options, g = E === void 0 ? {} : E, k = C.name;
              typeof x == "function" && (i = x({
                state: i,
                options: g,
                name: k,
                instance: c
              }) || i);
            }
          }
        }
      },
      // Async and optimistically optimized update – it will not be executed if
      // not necessary (debounced to run at most once-per-tick)
      update: Pw(function() {
        return new Promise(function(p) {
          c.forceUpdate(), p(i);
        });
      }),
      destroy: function() {
        y(), f = !0;
      }
    };
    if (!Hf(a, _))
      return c;
    c.setOptions(d).then(function(p) {
      !f && d.onFirstUpdate && d.onFirstUpdate(p);
    });
    function u() {
      i.orderedModifiers.forEach(function(p) {
        var m = p.name, v = p.options, $ = v === void 0 ? {} : v, w = p.effect;
        if (typeof w == "function") {
          var C = w({
            state: i,
            name: m,
            instance: c,
            options: $
          }), x = function() {
          };
          h.push(C || x);
        }
      });
    }
    function y() {
      h.forEach(function(p) {
        return p();
      }), h = [];
    }
    return c;
  };
}
var xi = {
  passive: !0
};
function jw(e) {
  var t = e.state, n = e.instance, o = e.options, s = o.scroll, r = s === void 0 ? !0 : s, l = o.resize, a = l === void 0 ? !0 : l, _ = ze(t.elements.popper), d = [].concat(t.scrollParents.reference, t.scrollParents.popper);
  return r && d.forEach(function(i) {
    i.addEventListener("scroll", n.update, xi);
  }), a && _.addEventListener("resize", n.update, xi), function() {
    r && d.forEach(function(i) {
      i.removeEventListener("scroll", n.update, xi);
    }), a && _.removeEventListener("resize", n.update, xi);
  };
}
const Vw = {
  name: "eventListeners",
  enabled: !0,
  phase: "write",
  fn: function() {
  },
  effect: jw,
  data: {}
};
function zw(e) {
  var t = e.state, n = e.name;
  t.modifiersData[n] = nm({
    reference: t.rects.reference,
    element: t.rects.popper,
    strategy: "absolute",
    placement: t.placement
  });
}
const Yw = {
  name: "popperOffsets",
  enabled: !0,
  phase: "read",
  fn: zw,
  data: {}
};
var qw = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function Gw(e) {
  var t = e.x, n = e.y, o = window, s = o.devicePixelRatio || 1;
  return {
    x: co(t * s) / s || 0,
    y: co(n * s) / s || 0
  };
}
function Wf(e) {
  var t, n = e.popper, o = e.popperRect, s = e.placement, r = e.variation, l = e.offsets, a = e.position, _ = e.gpuAcceleration, d = e.adaptive, i = e.roundOffsets, h = e.isFixed, f = l.x, c = f === void 0 ? 0 : f, u = l.y, y = u === void 0 ? 0 : u, p = typeof i == "function" ? i({
    x: c,
    y
  }) : {
    x: c,
    y
  };
  c = p.x, y = p.y;
  var m = l.hasOwnProperty("x"), v = l.hasOwnProperty("y"), $ = Oe, w = De, C = window;
  if (d) {
    var x = vi(n), E = "clientHeight", g = "clientWidth";
    if (x === ze(n) && (x = an(n), kt(x).position !== "static" && a === "absolute" && (E = "scrollHeight", g = "scrollWidth")), x = x, s === De || (s === Oe || s === Ke) && r === Wr) {
      w = Xe;
      var k = h && x === C && C.visualViewport ? C.visualViewport.height : (
        // $FlowFixMe[prop-missing]
        x[E]
      );
      y -= k - o.height, y *= _ ? 1 : -1;
    }
    if (s === Oe || (s === De || s === Xe) && r === Wr) {
      $ = Ke;
      var T = h && x === C && C.visualViewport ? C.visualViewport.width : (
        // $FlowFixMe[prop-missing]
        x[g]
      );
      c -= T - o.width, c *= _ ? 1 : -1;
    }
  }
  var U = Object.assign({
    position: a
  }, d && qw), B = i === !0 ? Gw({
    x: c,
    y
  }) : {
    x: c,
    y
  };
  if (c = B.x, y = B.y, _) {
    var L;
    return Object.assign({}, U, (L = {}, L[w] = v ? "0" : "", L[$] = m ? "0" : "", L.transform = (C.devicePixelRatio || 1) <= 1 ? "translate(" + c + "px, " + y + "px)" : "translate3d(" + c + "px, " + y + "px, 0)", L));
  }
  return Object.assign({}, U, (t = {}, t[w] = v ? y + "px" : "", t[$] = m ? c + "px" : "", t.transform = "", t));
}
function Xw(e) {
  var t = e.state, n = e.options, o = n.gpuAcceleration, s = o === void 0 ? !0 : o, r = n.adaptive, l = r === void 0 ? !0 : r, a = n.roundOffsets, _ = a === void 0 ? !0 : a, d = {
    placement: lt(t.placement),
    variation: uo(t.placement),
    popper: t.elements.popper,
    popperRect: t.rects.popper,
    gpuAcceleration: s,
    isFixed: t.options.strategy === "fixed"
  };
  t.modifiersData.popperOffsets != null && (t.styles.popper = Object.assign({}, t.styles.popper, Wf(Object.assign({}, d, {
    offsets: t.modifiersData.popperOffsets,
    position: t.options.strategy,
    adaptive: l,
    roundOffsets: _
  })))), t.modifiersData.arrow != null && (t.styles.arrow = Object.assign({}, t.styles.arrow, Wf(Object.assign({}, d, {
    offsets: t.modifiersData.arrow,
    position: "absolute",
    adaptive: !1,
    roundOffsets: _
  })))), t.attributes.popper = Object.assign({}, t.attributes.popper, {
    "data-popper-placement": t.placement
  });
}
const Kw = {
  name: "computeStyles",
  enabled: !0,
  phase: "beforeWrite",
  fn: Xw,
  data: {}
};
function Zw(e) {
  var t = e.state;
  Object.keys(t.elements).forEach(function(n) {
    var o = t.styles[n] || {}, s = t.attributes[n] || {}, r = t.elements[n];
    !je(r) || !ft(r) || (Object.assign(r.style, o), Object.keys(s).forEach(function(l) {
      var a = s[l];
      a === !1 ? r.removeAttribute(l) : r.setAttribute(l, a === !0 ? "" : a);
    }));
  });
}
function Jw(e) {
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
      var s = t.elements[o], r = t.attributes[o] || {}, l = Object.keys(t.styles.hasOwnProperty(o) ? t.styles[o] : n[o]), a = l.reduce(function(_, d) {
        return _[d] = "", _;
      }, {});
      !je(s) || !ft(s) || (Object.assign(s.style, a), Object.keys(r).forEach(function(_) {
        s.removeAttribute(_);
      }));
    });
  };
}
const Qw = {
  name: "applyStyles",
  enabled: !0,
  phase: "write",
  fn: Zw,
  effect: Jw,
  requires: ["computeStyles"]
};
var e$ = [Vw, Yw, Kw, Qw], t$ = /* @__PURE__ */ Fw({
  defaultModifiers: e$
});
function lr(e, t, n) {
  return wn(e, Ns(t, n));
}
function n$(e, t, n) {
  var o = lr(e, t, n);
  return o > n ? n : o;
}
var o$ = function(t, n) {
  return t = typeof t == "function" ? t(Object.assign({}, n.rects, {
    placement: n.placement
  })) : t, rm(typeof t != "number" ? t : im(t, gi));
};
function r$(e) {
  var t, n = e.state, o = e.name, s = e.options, r = n.elements.arrow, l = n.modifiersData.popperOffsets, a = lt(n.placement), _ = Ec(a), d = [Oe, Ke].indexOf(a) >= 0, i = d ? "height" : "width";
  if (!(!r || !l)) {
    var h = o$(s.padding, n), f = Sc(r), c = _ === "y" ? De : Oe, u = _ === "y" ? Xe : Ke, y = n.rects.reference[i] + n.rects.reference[_] - l[_] - n.rects.popper[i], p = l[_] - n.rects.reference[_], m = vi(r), v = m ? _ === "y" ? m.clientHeight || 0 : m.clientWidth || 0 : 0, $ = y / 2 - p / 2, w = h[c], C = v - f[i] - h[u], x = v / 2 - f[i] / 2 + $, E = lr(w, x, C), g = _;
    n.modifiersData[o] = (t = {}, t[g] = E, t.centerOffset = E - x, t);
  }
}
function i$(e) {
  var t = e.state, n = e.options, o = n.element, s = o === void 0 ? "[data-popper-arrow]" : o;
  s != null && (typeof s == "string" && (s = t.elements.popper.querySelector(s), !s) || tm(t.elements.popper, s) && (t.elements.arrow = s));
}
const s$ = {
  name: "arrow",
  enabled: !0,
  phase: "main",
  fn: r$,
  effect: i$,
  requires: ["popperOffsets"],
  requiresIfExists: ["preventOverflow"]
};
function l$(e, t, n) {
  var o = lt(e), s = [Oe, De].indexOf(o) >= 0 ? -1 : 1, r = typeof n == "function" ? n(Object.assign({}, t, {
    placement: e
  })) : n, l = r[0], a = r[1];
  return l = l || 0, a = (a || 0) * s, [Oe, Ke].indexOf(o) >= 0 ? {
    x: a,
    y: l
  } : {
    x: l,
    y: a
  };
}
function a$(e) {
  var t = e.state, n = e.options, o = e.name, s = n.offset, r = s === void 0 ? [0, 0] : s, l = em.reduce(function(i, h) {
    return i[h] = l$(h, t.rects, r), i;
  }, {}), a = l[t.placement], _ = a.x, d = a.y;
  t.modifiersData.popperOffsets != null && (t.modifiersData.popperOffsets.x += _, t.modifiersData.popperOffsets.y += d), t.modifiersData[o] = l;
}
const c$ = {
  name: "offset",
  enabled: !0,
  phase: "main",
  requires: ["popperOffsets"],
  fn: a$
};
function _$(e) {
  return e === "x" ? "y" : "x";
}
function f$(e) {
  var t = e.state, n = e.options, o = e.name, s = n.mainAxis, r = s === void 0 ? !0 : s, l = n.altAxis, a = l === void 0 ? !1 : l, _ = n.boundary, d = n.rootBoundary, i = n.altBoundary, h = n.padding, f = n.tether, c = f === void 0 ? !0 : f, u = n.tetherOffset, y = u === void 0 ? 0 : u, p = Ac(t, {
    boundary: _,
    rootBoundary: d,
    padding: h,
    altBoundary: i
  }), m = lt(t.placement), v = uo(t.placement), $ = !v, w = Ec(m), C = _$(w), x = t.modifiersData.popperOffsets, E = t.rects.reference, g = t.rects.popper, k = typeof y == "function" ? y(Object.assign({}, t.rects, {
    placement: t.placement
  })) : y, T = typeof k == "number" ? {
    mainAxis: k,
    altAxis: k
  } : Object.assign({
    mainAxis: 0,
    altAxis: 0
  }, k), U = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null, B = {
    x: 0,
    y: 0
  };
  if (x) {
    if (r) {
      var L, A = w === "y" ? De : Oe, S = w === "y" ? Xe : Ke, D = w === "y" ? "height" : "width", M = x[w], R = M + p[A], P = M - p[S], I = c ? -g[D] / 2 : 0, V = v === fo ? E[D] : g[D], F = v === fo ? -g[D] : -E[D], Y = t.elements.arrow, J = c && Y ? Sc(Y) : {
        width: 0,
        height: 0
      }, W = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : om(), G = W[A], Q = W[S], K = lr(0, E[D], J[D]), q = $ ? E[D] / 2 - I - K - G - T.mainAxis : V - K - G - T.mainAxis, ne = $ ? -E[D] / 2 + I + K + Q + T.mainAxis : F + K + Q + T.mainAxis, be = t.elements.arrow && vi(t.elements.arrow), $e = be ? w === "y" ? be.clientTop || 0 : be.clientLeft || 0 : 0, _n = (L = U == null ? void 0 : U[w]) != null ? L : 0, te = M + q - _n - $e, xn = M + ne - _n, Ze = lr(c ? Ns(R, te) : R, M, c ? wn(P, xn) : P);
      x[w] = Ze, B[w] = Ze - M;
    }
    if (a) {
      var St, Sn = w === "x" ? De : Oe, Cn = w === "x" ? Xe : Ke, Se = x[C], dt = C === "y" ? "height" : "width", go = Se + p[Sn], yo = Se - p[Cn], fn = [De, Oe].indexOf(m) !== -1, bo = (St = U == null ? void 0 : U[C]) != null ? St : 0, wo = fn ? go : Se - E[dt] - g[dt] - bo + T.altAxis, $o = fn ? Se + E[dt] + g[dt] - bo - T.altAxis : yo, ko = c && fn ? n$(wo, Se, $o) : lr(c ? wo : go, Se, c ? $o : yo);
      x[C] = ko, B[C] = ko - Se;
    }
    t.modifiersData[o] = B;
  }
}
const u$ = {
  name: "preventOverflow",
  enabled: !0,
  phase: "main",
  fn: f$,
  requiresIfExists: ["offset"]
};
var d$ = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function zi(e) {
  return e.replace(/left|right|bottom|top/g, function(t) {
    return d$[t];
  });
}
var h$ = {
  start: "end",
  end: "start"
};
function If(e) {
  return e.replace(/start|end/g, function(t) {
    return h$[t];
  });
}
function p$(e, t) {
  t === void 0 && (t = {});
  var n = t, o = n.placement, s = n.boundary, r = n.rootBoundary, l = n.padding, a = n.flipVariations, _ = n.allowedAutoPlacements, d = _ === void 0 ? em : _, i = uo(o), h = i ? a ? Nf : Nf.filter(function(u) {
    return uo(u) === i;
  }) : gi, f = h.filter(function(u) {
    return d.indexOf(u) >= 0;
  });
  f.length === 0 && (f = h);
  var c = f.reduce(function(u, y) {
    return u[y] = Ac(e, {
      placement: y,
      boundary: s,
      rootBoundary: r,
      padding: l
    })[lt(y)], u;
  }, {});
  return Object.keys(c).sort(function(u, y) {
    return c[u] - c[y];
  });
}
function m$(e) {
  if (lt(e) === Cc)
    return [];
  var t = zi(e);
  return [If(e), t, If(t)];
}
function v$(e) {
  var t = e.state, n = e.options, o = e.name;
  if (!t.modifiersData[o]._skip) {
    for (var s = n.mainAxis, r = s === void 0 ? !0 : s, l = n.altAxis, a = l === void 0 ? !0 : l, _ = n.fallbackPlacements, d = n.padding, i = n.boundary, h = n.rootBoundary, f = n.altBoundary, c = n.flipVariations, u = c === void 0 ? !0 : c, y = n.allowedAutoPlacements, p = t.options.placement, m = lt(p), v = m === p, $ = _ || (v || !u ? [zi(p)] : m$(p)), w = [p].concat($).reduce(function(J, W) {
      return J.concat(lt(W) === Cc ? p$(t, {
        placement: W,
        boundary: i,
        rootBoundary: h,
        padding: d,
        flipVariations: u,
        allowedAutoPlacements: y
      }) : W);
    }, []), C = t.rects.reference, x = t.rects.popper, E = /* @__PURE__ */ new Map(), g = !0, k = w[0], T = 0; T < w.length; T++) {
      var U = w[T], B = lt(U), L = uo(U) === fo, A = [De, Xe].indexOf(B) >= 0, S = A ? "width" : "height", D = Ac(t, {
        placement: U,
        boundary: i,
        rootBoundary: h,
        altBoundary: f,
        padding: d
      }), M = A ? L ? Ke : Oe : L ? Xe : De;
      C[S] > x[S] && (M = zi(M));
      var R = zi(M), P = [];
      if (r && P.push(D[B] <= 0), a && P.push(D[M] <= 0, D[R] <= 0), P.every(function(J) {
        return J;
      })) {
        k = U, g = !1;
        break;
      }
      E.set(U, P);
    }
    if (g)
      for (var I = u ? 3 : 1, V = function(W) {
        var G = w.find(function(Q) {
          var K = E.get(Q);
          if (K)
            return K.slice(0, W).every(function(q) {
              return q;
            });
        });
        if (G)
          return k = G, "break";
      }, F = I; F > 0; F--) {
        var Y = V(F);
        if (Y === "break")
          break;
      }
    t.placement !== k && (t.modifiersData[o]._skip = !0, t.placement = k, t.reset = !0);
  }
}
const g$ = {
  name: "flip",
  enabled: !0,
  phase: "main",
  fn: v$,
  requiresIfExists: ["offset"],
  data: {
    _skip: !1
  }
};
var qn, Gn, pn, Ye, ai, gl;
class rt extends Be {
  constructor() {
    super(...arguments);
    O(this, qn, void 0);
    O(this, Gn, 0);
    O(this, pn, void 0);
    O(this, Ye, void 0);
    O(this, ai, void 0);
    N(this, "hideLater", () => {
      b(this, gl).call(this), H(this, Gn, window.setTimeout(this.hide.bind(this), 100));
    });
    O(this, gl, () => {
      clearTimeout(b(this, Gn)), H(this, Gn, 0);
    });
  }
  get isShown() {
    var n;
    return (n = b(this, pn)) == null ? void 0 : n.classList.contains(this.constructor.CLASS_SHOW);
  }
  get timepicker() {
    return b(this, pn) || this._ensureTimepicker();
  }
  get popper() {
    return b(this, Ye) ? b(this, Ye) : this._createPopper();
  }
  get trigger() {
    return b(this, ai) || this.element;
  }
  get elementShowClass() {
    return `with-${this.constructor.NAME}-show`;
  }
  show(n) {
    return H(this, ai, n), !this.timepicker || !this.element ? !1 : (this.element.classList.add(this.elementShowClass), this.timepicker.classList.add(this.constructor.CLASS_SHOW), this._createPopper().update(), !0);
  }
  hide() {
    var n, o;
    return (n = b(this, Ye)) == null || n.destroy(), H(this, Ye, void 0), this.element.classList.remove(this.elementShowClass), (o = b(this, pn)) == null || o.classList.remove(this.constructor.CLASS_SHOW), !0;
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
    const n = this.constructor.CLASSNAME, o = document.createElement("div");
    return o.classList.add(n), cw(jp(hw, { ...this.options }), o), this.options.arrow && o.prepend(this._createArrow()), document.body.appendChild(o), H(this, pn, o), o;
  }
  _getPopperOptions() {
    const n = this._getArrowSize();
    return {
      modifiers: [
        u$,
        g$,
        { ...s$, options: {
          padding: n,
          element: ".arrow"
        } },
        {
          ...c$,
          options: {
            offset: [0, n + 3]
          }
        },
        {
          name: "timepicker",
          enabled: !0,
          phase: "beforeWrite",
          fn: ({ state: o }) => {
            var r, l;
            const s = ((r = o.placement) == null ? void 0 : r.split("-").shift()) || "";
            (l = this.timepicker.querySelector(".arrow")) == null || l.setAttribute("class", `arrow arrow-${s}`), this.element.setAttribute("data-timepicker-placement", s);
          }
        }
      ].filter(Boolean),
      placement: this.options.placement,
      strategy: "absolute"
    };
  }
  _createPopper() {
    const n = this._getPopperOptions();
    return b(this, Ye) ? b(this, Ye).setOptions(n) : H(this, Ye, t$(this._getPopperElement(), this.timepicker, n)), b(this, Ye);
  }
  _getPopperElement() {
    return b(this, qn) || H(this, qn, {
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
    }), b(this, qn);
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
    var _, d;
    n instanceof Event && (n = { event: n });
    const { event: o, exclude: s, ignoreSelector: r = ".not-hide-timepicker" } = n || {};
    if (o && r && ((d = (_ = o.target).closest) != null && d.call(_, r)))
      return;
    const l = this.getAll().entries(), a = new Set(s || []);
    for (const [i, h] of l)
      a.has(i) || h.hide();
  }
}
qn = new WeakMap(), Gn = new WeakMap(), pn = new WeakMap(), Ye = new WeakMap(), ai = new WeakMap(), gl = new WeakMap(), N(rt, "NAME", "timepicker"), N(rt, "CLASSNAME", "timepicker"), N(rt, "CLASS_SHOW", "show"), N(rt, "MENU_SELECTOR", ".form-time input:not(.disabled):not(:disabled)"), N(rt, "DEFAULT", {
  value: Os().format("HH:mm:ss"),
  showSeconds: !1,
  placement: "bottom-start",
  strategy: "absolute",
  // trigger: 'click',
  arrow: !0
});
document.addEventListener("click", function(e) {
  const n = e.target.closest(rt.MENU_SELECTOR);
  n ? rt.ensure(n).toggle() : rt.clear({ event: e });
});
const y$ = (e) => {
  const t = document.getElementsByClassName("with-timepicker-show")[0];
  if (!t)
    return;
  const n = typeof t.closest == "function" ? t.closest(rt.MENU_SELECTOR) : null;
  !n || !e.target.contains(n) || rt.clear({ event: e });
};
window.addEventListener("scroll", y$, !0);
class Uf extends Pe {
}
N(Uf, "NAME", "toolbar"), N(Uf, "Component", Nr);
function yi(e) {
  return e.split("-")[1];
}
function Mc(e) {
  return e === "y" ? "height" : "width";
}
function ho(e) {
  return e.split("-")[0];
}
function ia(e) {
  return ["top", "bottom"].includes(ho(e)) ? "x" : "y";
}
function Bf(e, t, n) {
  let {
    reference: o,
    floating: s
  } = e;
  const r = o.x + o.width / 2 - s.width / 2, l = o.y + o.height / 2 - s.height / 2, a = ia(t), _ = Mc(a), d = o[_] / 2 - s[_] / 2, i = ho(t), h = a === "x";
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
  switch (yi(t)) {
    case "start":
      f[a] -= d * (n && h ? -1 : 1);
      break;
    case "end":
      f[a] += d * (n && h ? -1 : 1);
      break;
  }
  return f;
}
const b$ = async (e, t, n) => {
  const {
    placement: o = "bottom",
    strategy: s = "absolute",
    middleware: r = [],
    platform: l
  } = n, a = r.filter(Boolean), _ = await (l.isRTL == null ? void 0 : l.isRTL(t));
  let d = await l.getElementRects({
    reference: e,
    floating: t,
    strategy: s
  }), {
    x: i,
    y: h
  } = Bf(d, o, _), f = o, c = {}, u = 0;
  for (let y = 0; y < a.length; y++) {
    const {
      name: p,
      fn: m
    } = a[y], {
      x: v,
      y: $,
      data: w,
      reset: C
    } = await m({
      x: i,
      y: h,
      initialPlacement: o,
      placement: f,
      strategy: s,
      middlewareData: c,
      rects: d,
      platform: l,
      elements: {
        reference: e,
        floating: t
      }
    });
    if (i = v ?? i, h = $ ?? h, c = {
      ...c,
      [p]: {
        ...c[p],
        ...w
      }
    }, C && u <= 50) {
      u++, typeof C == "object" && (C.placement && (f = C.placement), C.rects && (d = C.rects === !0 ? await l.getElementRects({
        reference: e,
        floating: t,
        strategy: s
      }) : C.rects), {
        x: i,
        y: h
      } = Bf(d, f, _)), y = -1;
      continue;
    }
  }
  return {
    x: i,
    y: h,
    placement: f,
    strategy: s,
    middlewareData: c
  };
};
function w$(e) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...e
  };
}
function sm(e) {
  return typeof e != "number" ? w$(e) : {
    top: e,
    right: e,
    bottom: e,
    left: e
  };
}
function Ps(e) {
  return {
    ...e,
    top: e.y,
    left: e.x,
    right: e.x + e.width,
    bottom: e.y + e.height
  };
}
async function $$(e, t) {
  var n;
  t === void 0 && (t = {});
  const {
    x: o,
    y: s,
    platform: r,
    rects: l,
    elements: a,
    strategy: _
  } = e, {
    boundary: d = "clippingAncestors",
    rootBoundary: i = "viewport",
    elementContext: h = "floating",
    altBoundary: f = !1,
    padding: c = 0
  } = t, u = sm(c), p = a[f ? h === "floating" ? "reference" : "floating" : h], m = Ps(await r.getClippingRect({
    element: (n = await (r.isElement == null ? void 0 : r.isElement(p))) == null || n ? p : p.contextElement || await (r.getDocumentElement == null ? void 0 : r.getDocumentElement(a.floating)),
    boundary: d,
    rootBoundary: i,
    strategy: _
  })), v = h === "floating" ? {
    ...l.floating,
    x: o,
    y: s
  } : l.reference, $ = await (r.getOffsetParent == null ? void 0 : r.getOffsetParent(a.floating)), w = await (r.isElement == null ? void 0 : r.isElement($)) ? await (r.getScale == null ? void 0 : r.getScale($)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, C = Ps(r.convertOffsetParentRelativeRectToViewportRelativeRect ? await r.convertOffsetParentRelativeRectToViewportRelativeRect({
    rect: v,
    offsetParent: $,
    strategy: _
  }) : v);
  return {
    top: (m.top - C.top + u.top) / w.y,
    bottom: (C.bottom - m.bottom + u.bottom) / w.y,
    left: (m.left - C.left + u.left) / w.x,
    right: (C.right - m.right + u.right) / w.x
  };
}
const k$ = Math.min, x$ = Math.max;
function S$(e, t, n) {
  return x$(e, k$(t, n));
}
const C$ = (e) => ({
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
      rects: a,
      platform: _
    } = t;
    if (n == null)
      return {};
    const d = sm(o), i = {
      x: s,
      y: r
    }, h = ia(l), f = Mc(h), c = await _.getDimensions(n), u = h === "y" ? "top" : "left", y = h === "y" ? "bottom" : "right", p = a.reference[f] + a.reference[h] - i[h] - a.floating[f], m = i[h] - a.reference[h], v = await (_.getOffsetParent == null ? void 0 : _.getOffsetParent(n));
    let $ = v ? h === "y" ? v.clientHeight || 0 : v.clientWidth || 0 : 0;
    $ === 0 && ($ = a.floating[f]);
    const w = p / 2 - m / 2, C = d[u], x = $ - c[f] - d[y], E = $ / 2 - c[f] / 2 + w, g = S$(C, E, x), T = yi(l) != null && E != g && a.reference[f] / 2 - (E < C ? d[u] : d[y]) - c[f] / 2 < 0 ? E < C ? C - E : x - E : 0;
    return {
      [h]: i[h] - T,
      data: {
        [h]: g,
        centerOffset: E - g
      }
    };
  }
}), E$ = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function Rs(e) {
  return e.replace(/left|right|bottom|top/g, (t) => E$[t]);
}
function A$(e, t, n) {
  n === void 0 && (n = !1);
  const o = yi(e), s = ia(e), r = Mc(s);
  let l = s === "x" ? o === (n ? "end" : "start") ? "right" : "left" : o === "start" ? "bottom" : "top";
  return t.reference[r] > t.floating[r] && (l = Rs(l)), {
    main: l,
    cross: Rs(l)
  };
}
const M$ = {
  start: "end",
  end: "start"
};
function Ua(e) {
  return e.replace(/start|end/g, (t) => M$[t]);
}
function T$(e) {
  const t = Rs(e);
  return [Ua(e), t, Ua(t)];
}
function L$(e, t, n) {
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
function D$(e, t, n, o) {
  const s = yi(e);
  let r = L$(ho(e), n === "start", o);
  return s && (r = r.map((l) => l + "-" + s), t && (r = r.concat(r.map(Ua)))), r;
}
const O$ = function(e) {
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
        platform: a,
        elements: _
      } = t, {
        mainAxis: d = !0,
        crossAxis: i = !0,
        fallbackPlacements: h,
        fallbackStrategy: f = "bestFit",
        fallbackAxisSideDirection: c = "none",
        flipAlignment: u = !0,
        ...y
      } = e, p = ho(o), m = ho(l) === l, v = await (a.isRTL == null ? void 0 : a.isRTL(_.floating)), $ = h || (m || !u ? [Rs(l)] : T$(l));
      !h && c !== "none" && $.push(...D$(l, u, c, v));
      const w = [l, ...$], C = await $$(t, y), x = [];
      let E = ((n = s.flip) == null ? void 0 : n.overflows) || [];
      if (d && x.push(C[p]), i) {
        const {
          main: T,
          cross: U
        } = A$(o, r, v);
        x.push(C[T], C[U]);
      }
      if (E = [...E, {
        placement: o,
        overflows: x
      }], !x.every((T) => T <= 0)) {
        var g;
        const T = (((g = s.flip) == null ? void 0 : g.index) || 0) + 1, U = w[T];
        if (U)
          return {
            data: {
              index: T,
              overflows: E
            },
            reset: {
              placement: U
            }
          };
        let B = "bottom";
        switch (f) {
          case "bestFit": {
            var k;
            const L = (k = E.map((A) => [A, A.overflows.filter((S) => S > 0).reduce((S, D) => S + D, 0)]).sort((A, S) => A[1] - S[1])[0]) == null ? void 0 : k[0].placement;
            L && (B = L);
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
async function N$(e, t) {
  const {
    placement: n,
    platform: o,
    elements: s
  } = e, r = await (o.isRTL == null ? void 0 : o.isRTL(s.floating)), l = ho(n), a = yi(n), _ = ia(n) === "x", d = ["left", "top"].includes(l) ? -1 : 1, i = r && _ ? -1 : 1, h = typeof t == "function" ? t(e) : t;
  let {
    mainAxis: f,
    crossAxis: c,
    alignmentAxis: u
  } = typeof h == "number" ? {
    mainAxis: h,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: 0,
    crossAxis: 0,
    alignmentAxis: null,
    ...h
  };
  return a && typeof u == "number" && (c = a === "end" ? u * -1 : u), _ ? {
    x: c * i,
    y: f * d
  } : {
    x: f * d,
    y: c * i
  };
}
const P$ = function(e) {
  return e === void 0 && (e = 0), {
    name: "offset",
    options: e,
    async fn(t) {
      const {
        x: n,
        y: o
      } = t, s = await N$(t, e);
      return {
        x: n + s.x,
        y: o + s.y,
        data: s
      };
    }
  };
};
function Ue(e) {
  var t;
  return ((t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function ut(e) {
  return Ue(e).getComputedStyle(e);
}
function on(e) {
  return am(e) ? (e.nodeName || "").toLowerCase() : "";
}
let Si;
function lm() {
  if (Si)
    return Si;
  const e = navigator.userAgentData;
  return e && Array.isArray(e.brands) ? (Si = e.brands.map((t) => t.brand + "/" + t.version).join(" "), Si) : navigator.userAgent;
}
function xt(e) {
  return e instanceof Ue(e).HTMLElement;
}
function rn(e) {
  return e instanceof Ue(e).Element;
}
function am(e) {
  return e instanceof Ue(e).Node;
}
function Ff(e) {
  if (typeof ShadowRoot > "u")
    return !1;
  const t = Ue(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot;
}
function sa(e) {
  const {
    overflow: t,
    overflowX: n,
    overflowY: o,
    display: s
  } = ut(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + o + n) && !["inline", "contents"].includes(s);
}
function R$(e) {
  return ["table", "td", "th"].includes(on(e));
}
function Tc(e) {
  const t = /firefox/i.test(lm()), n = ut(e), o = n.backdropFilter || n.WebkitBackdropFilter;
  return n.transform !== "none" || n.perspective !== "none" || (o ? o !== "none" : !1) || t && n.willChange === "filter" || t && (n.filter ? n.filter !== "none" : !1) || ["transform", "perspective"].some((s) => n.willChange.includes(s)) || ["paint", "layout", "strict", "content"].some(
    // TS 4.1 compat
    (s) => {
      const r = n.contain;
      return r != null ? r.includes(s) : !1;
    }
  );
}
function cm() {
  return !/^((?!chrome|android).)*safari/i.test(lm());
}
function Lc(e) {
  return ["html", "body", "#document"].includes(on(e));
}
const jf = Math.min, ar = Math.max, Hs = Math.round;
function _m(e) {
  const t = ut(e);
  let n = parseFloat(t.width), o = parseFloat(t.height);
  const s = e.offsetWidth, r = e.offsetHeight, l = Hs(n) !== s || Hs(o) !== r;
  return l && (n = s, o = r), {
    width: n,
    height: o,
    fallback: l
  };
}
function fm(e) {
  return rn(e) ? e : e.contextElement;
}
const um = {
  x: 1,
  y: 1
};
function Ln(e) {
  const t = fm(e);
  if (!xt(t))
    return um;
  const n = t.getBoundingClientRect(), {
    width: o,
    height: s,
    fallback: r
  } = _m(t);
  let l = (r ? Hs(n.width) : n.width) / o, a = (r ? Hs(n.height) : n.height) / s;
  return (!l || !Number.isFinite(l)) && (l = 1), (!a || !Number.isFinite(a)) && (a = 1), {
    x: l,
    y: a
  };
}
function Ir(e, t, n, o) {
  var s, r;
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const l = e.getBoundingClientRect(), a = fm(e);
  let _ = um;
  t && (o ? rn(o) && (_ = Ln(o)) : _ = Ln(e));
  const d = a ? Ue(a) : window, i = !cm() && n;
  let h = (l.left + (i && ((s = d.visualViewport) == null ? void 0 : s.offsetLeft) || 0)) / _.x, f = (l.top + (i && ((r = d.visualViewport) == null ? void 0 : r.offsetTop) || 0)) / _.y, c = l.width / _.x, u = l.height / _.y;
  if (a) {
    const y = Ue(a), p = o && rn(o) ? Ue(o) : o;
    let m = y.frameElement;
    for (; m && o && p !== y; ) {
      const v = Ln(m), $ = m.getBoundingClientRect(), w = getComputedStyle(m);
      $.x += (m.clientLeft + parseFloat(w.paddingLeft)) * v.x, $.y += (m.clientTop + parseFloat(w.paddingTop)) * v.y, h *= v.x, f *= v.y, c *= v.x, u *= v.y, h += $.x, f += $.y, m = Ue(m).frameElement;
    }
  }
  return {
    width: c,
    height: u,
    top: f,
    right: h + c,
    bottom: f + u,
    left: h,
    x: h,
    y: f
  };
}
function cn(e) {
  return ((am(e) ? e.ownerDocument : e.document) || window.document).documentElement;
}
function la(e) {
  return rn(e) ? {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  } : {
    scrollLeft: e.pageXOffset,
    scrollTop: e.pageYOffset
  };
}
function dm(e) {
  return Ir(cn(e)).left + la(e).scrollLeft;
}
function H$(e, t, n) {
  const o = xt(t), s = cn(t), r = Ir(e, !0, n === "fixed", t);
  let l = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const a = {
    x: 0,
    y: 0
  };
  if (o || !o && n !== "fixed")
    if ((on(t) !== "body" || sa(s)) && (l = la(t)), xt(t)) {
      const _ = Ir(t, !0);
      a.x = _.x + t.clientLeft, a.y = _.y + t.clientTop;
    } else
      s && (a.x = dm(s));
  return {
    x: r.left + l.scrollLeft - a.x,
    y: r.top + l.scrollTop - a.y,
    width: r.width,
    height: r.height
  };
}
function Ur(e) {
  if (on(e) === "html")
    return e;
  const t = (
    // Step into the shadow DOM of the parent of a slotted node
    e.assignedSlot || // DOM Element detected
    e.parentNode || // ShadowRoot detected
    (Ff(e) ? e.host : null) || // Fallback
    cn(e)
  );
  return Ff(t) ? t.host : t;
}
function Vf(e) {
  return !xt(e) || ut(e).position === "fixed" ? null : e.offsetParent;
}
function W$(e) {
  let t = Ur(e);
  for (; xt(t) && !Lc(t); ) {
    if (Tc(t))
      return t;
    t = Ur(t);
  }
  return null;
}
function zf(e) {
  const t = Ue(e);
  let n = Vf(e);
  for (; n && R$(n) && ut(n).position === "static"; )
    n = Vf(n);
  return n && (on(n) === "html" || on(n) === "body" && ut(n).position === "static" && !Tc(n)) ? t : n || W$(e) || t;
}
function I$(e) {
  return _m(e);
}
function U$(e) {
  let {
    rect: t,
    offsetParent: n,
    strategy: o
  } = e;
  const s = xt(n), r = cn(n);
  if (n === r)
    return t;
  let l = {
    scrollLeft: 0,
    scrollTop: 0
  }, a = {
    x: 1,
    y: 1
  };
  const _ = {
    x: 0,
    y: 0
  };
  if ((s || !s && o !== "fixed") && ((on(n) !== "body" || sa(r)) && (l = la(n)), xt(n))) {
    const d = Ir(n);
    a = Ln(n), _.x = d.x + n.clientLeft, _.y = d.y + n.clientTop;
  }
  return {
    width: t.width * a.x,
    height: t.height * a.y,
    x: t.x * a.x - l.scrollLeft * a.x + _.x,
    y: t.y * a.y - l.scrollTop * a.y + _.y
  };
}
function B$(e, t) {
  const n = Ue(e), o = cn(e), s = n.visualViewport;
  let r = o.clientWidth, l = o.clientHeight, a = 0, _ = 0;
  if (s) {
    r = s.width, l = s.height;
    const d = cm();
    (d || !d && t === "fixed") && (a = s.offsetLeft, _ = s.offsetTop);
  }
  return {
    width: r,
    height: l,
    x: a,
    y: _
  };
}
function F$(e) {
  var t;
  const n = cn(e), o = la(e), s = (t = e.ownerDocument) == null ? void 0 : t.body, r = ar(n.scrollWidth, n.clientWidth, s ? s.scrollWidth : 0, s ? s.clientWidth : 0), l = ar(n.scrollHeight, n.clientHeight, s ? s.scrollHeight : 0, s ? s.clientHeight : 0);
  let a = -o.scrollLeft + dm(e);
  const _ = -o.scrollTop;
  return ut(s || n).direction === "rtl" && (a += ar(n.clientWidth, s ? s.clientWidth : 0) - r), {
    width: r,
    height: l,
    x: a,
    y: _
  };
}
function hm(e) {
  const t = Ur(e);
  return Lc(t) ? e.ownerDocument.body : xt(t) && sa(t) ? t : hm(t);
}
function pm(e, t) {
  var n;
  t === void 0 && (t = []);
  const o = hm(e), s = o === ((n = e.ownerDocument) == null ? void 0 : n.body), r = Ue(o);
  return s ? t.concat(r, r.visualViewport || [], sa(o) ? o : []) : t.concat(o, pm(o));
}
function j$(e, t) {
  const n = Ir(e, !0, t === "fixed"), o = n.top + e.clientTop, s = n.left + e.clientLeft, r = xt(e) ? Ln(e) : {
    x: 1,
    y: 1
  }, l = e.clientWidth * r.x, a = e.clientHeight * r.y, _ = s * r.x, d = o * r.y;
  return {
    top: d,
    left: _,
    right: _ + l,
    bottom: d + a,
    x: _,
    y: d,
    width: l,
    height: a
  };
}
function Yf(e, t, n) {
  return t === "viewport" ? Ps(B$(e, n)) : rn(t) ? j$(t, n) : Ps(F$(cn(e)));
}
function V$(e, t) {
  const n = t.get(e);
  if (n)
    return n;
  let o = pm(e).filter((a) => rn(a) && on(a) !== "body"), s = null;
  const r = ut(e).position === "fixed";
  let l = r ? Ur(e) : e;
  for (; rn(l) && !Lc(l); ) {
    const a = ut(l), _ = Tc(l);
    (r ? !_ && !s : !_ && a.position === "static" && !!s && ["absolute", "fixed"].includes(s.position)) ? o = o.filter((i) => i !== l) : s = a, l = Ur(l);
  }
  return t.set(e, o), o;
}
function z$(e) {
  let {
    element: t,
    boundary: n,
    rootBoundary: o,
    strategy: s
  } = e;
  const l = [...n === "clippingAncestors" ? V$(t, this._c) : [].concat(n), o], a = l[0], _ = l.reduce((d, i) => {
    const h = Yf(t, i, s);
    return d.top = ar(h.top, d.top), d.right = jf(h.right, d.right), d.bottom = jf(h.bottom, d.bottom), d.left = ar(h.left, d.left), d;
  }, Yf(t, a, s));
  return {
    width: _.right - _.left,
    height: _.bottom - _.top,
    x: _.left,
    y: _.top
  };
}
const Y$ = {
  getClippingRect: z$,
  convertOffsetParentRelativeRectToViewportRelativeRect: U$,
  isElement: rn,
  getDimensions: I$,
  getOffsetParent: zf,
  getDocumentElement: cn,
  getScale: Ln,
  async getElementRects(e) {
    let {
      reference: t,
      floating: n,
      strategy: o
    } = e;
    const s = this.getOffsetParent || zf, r = this.getDimensions;
    return {
      reference: H$(t, await s(n), o),
      floating: {
        x: 0,
        y: 0,
        ...await r(n)
      }
    };
  },
  getClientRects: (e) => Array.from(e.getClientRects()),
  isRTL: (e) => ut(e).direction === "rtl"
}, q$ = (e, t, n) => {
  const o = /* @__PURE__ */ new Map(), s = {
    platform: Y$,
    ...n
  }, r = {
    ...s.platform,
    _c: o
  };
  return b$(e, t, {
    ...s,
    platform: r
  });
};
var Xn, Kn, Zn, mn, ke, yl, bl, mm, wl, vm, $l, gm, kl, ym, xl, bm, Sl, wm, Jn, Cl, $m;
class it extends Be {
  constructor() {
    super(...arguments);
    O(this, bl);
    O(this, wl);
    O(this, $l);
    O(this, kl);
    O(this, xl);
    O(this, Sl);
    O(this, Cl);
    O(this, Xn, !1);
    O(this, Kn, void 0);
    O(this, Zn, 0);
    O(this, mn, void 0);
    O(this, ke, void 0);
    O(this, yl, void 0);
    N(this, "hideLater", () => {
      b(this, Jn).call(this), H(this, Zn, window.setTimeout(this.hide.bind(this), 100));
    });
    O(this, Jn, () => {
      clearTimeout(b(this, Zn)), H(this, Zn, 0);
    });
  }
  get isShown() {
    var n;
    return (n = b(this, mn)) == null ? void 0 : n.classList.contains(this.constructor.CLASS_SHOW);
  }
  get tooltip() {
    return b(this, mn) || z(this, $l, gm).call(this);
  }
  get trigger() {
    return b(this, yl) || this.element;
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
    return this.setOptions(n), !b(this, Xn) && this.isHover && z(this, Cl, $m).call(this), this.options.animation && this.tooltip.classList.add("fade"), this.element.classList.add(this.elementShowClass), this.tooltip.classList.add(this.constructor.CLASS_SHOW), z(this, xl, bm).call(this), !0;
  }
  hide() {
    var n;
    return this.element.classList.remove(this.elementShowClass), (n = b(this, mn)) == null || n.classList.remove(this.constructor.CLASS_SHOW), !0;
  }
  toggle(n) {
    return this.isShown ? this.hide() : this.show(n);
  }
  destroy() {
    b(this, Xn) && (this.element.removeEventListener("mouseleave", this.hideLater), this.tooltip.removeEventListener("mouseenter", b(this, Jn)), this.tooltip.removeEventListener("mouseleave", this.hideLater)), super.destroy();
  }
  static clear(n) {
    n instanceof Event && (n = { event: n });
    const { exclude: o } = n || {}, s = this.getAll().entries(), r = new Set(o || []);
    for (const [l, a] of s)
      r.has(l) || a.hide();
  }
}
Xn = new WeakMap(), Kn = new WeakMap(), Zn = new WeakMap(), mn = new WeakMap(), ke = new WeakMap(), yl = new WeakMap(), bl = new WeakSet(), mm = function() {
  const { arrow: n } = this.options;
  return typeof n == "number" ? n : 4;
}, wl = new WeakSet(), vm = function() {
  const n = document.createElement("div");
  return H(this, ke, n), b(this, ke).style.position = "absolute", b(this, ke).style.width = "8px", b(this, ke).style.height = "8px", this.options.className && (b(this, ke).className = this.options.className), this.options.type && b(this, ke).classList.add(this.options.type), b(this, ke).style.transform = "rotate(45deg)", b(this, ke).style.borderTopStyle = "none", b(this, ke).style.borderLeftStyle = "none", n;
}, $l = new WeakSet(), gm = function() {
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
  if (this.options.arrow && (o == null || o.append(z(this, wl, vm).call(this))), !o)
    throw new Error("Tooltip: Cannot find tooltip element");
  return o.style.width = "max-content", o.style.position = "absolute", o.style.top = "0", o.style.left = "0", document.body.appendChild(o), H(this, mn, o), o;
}, kl = new WeakSet(), ym = function() {
  var s;
  const n = z(this, bl, mm).call(this), o = {
    middleware: [P$(n + 3), O$()]
  };
  return this.options.arrow && b(this, ke) && ((s = o.middleware) == null || s.push(C$({ element: b(this, ke) }))), this.options.placement && (o.placement = this.options.placement), o;
}, xl = new WeakSet(), bm = function() {
  const n = z(this, kl, ym).call(this);
  q$(z(this, Sl, wm).call(this), this.tooltip, n).then(({ x: o, y: s, middlewareData: r }) => {
    if (Object.assign(this.tooltip.style, {
      left: `${o}px`,
      top: `${s}px`
    }), this.options.placement) {
      const l = this.options.placement.split("-")[0], a = {
        top: "bottom",
        right: "left",
        bottom: "top",
        left: "right"
      }[l];
      if (r.arrow && b(this, ke)) {
        const { x: _, y: d } = r.arrow;
        Object.assign(b(this, ke).style, {
          left: _ != null ? `${_}px` : "",
          top: d != null ? `${d}px` : "",
          [a]: `${-b(this, ke).offsetWidth / 2}px`
        });
      }
    }
  });
}, Sl = new WeakSet(), wm = function() {
  return b(this, Kn) || H(this, Kn, {
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
  }), b(this, Kn);
}, Jn = new WeakMap(), Cl = new WeakSet(), $m = function() {
  const { tooltip: n } = this;
  n.addEventListener("mouseenter", b(this, Jn)), n.addEventListener("mouseleave", this.hideLater), this.element.addEventListener("mouseleave", this.hideLater), H(this, Xn, !0);
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
    const o = it.ensure(n);
    o.options.trigger === "click" && o.toggle();
  } else
    it.clear({ event: e });
});
document.addEventListener("mouseover", function(e) {
  const t = e.target, n = typeof t.closest == "function" ? t.closest(it.MENU_SELECTOR) : null;
  if (!n)
    return;
  const o = it.ensure(n);
  o.isHover && o.show();
});
var km, ve, xm, cr, qf, Sm = {}, Cm = [], G$ = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function qt(e, t) {
  for (var n in t)
    e[n] = t[n];
  return e;
}
function Em(e) {
  var t = e.parentNode;
  t && t.removeChild(e);
}
function pa(e, t, n, o, s) {
  var r = { type: e, props: t, key: n, ref: o, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: s ?? ++xm };
  return s == null && ve.vnode != null && ve.vnode(r), r;
}
function Dc(e) {
  return e.children;
}
function _r(e, t) {
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
function Am(e) {
  var t, n;
  if ((e = e.__) != null && e.__c != null) {
    for (e.__e = e.__c.base = null, t = 0; t < e.__k.length; t++)
      if ((n = e.__k[t]) != null && n.__e != null) {
        e.__e = e.__c.base = n.__e;
        break;
      }
    return Am(e);
  }
}
function Gf(e) {
  (!e.__d && (e.__d = !0) && cr.push(e) && !Ws.__r++ || qf !== ve.debounceRendering) && ((qf = ve.debounceRendering) || setTimeout)(Ws);
}
function Ws() {
  for (var e; Ws.__r = cr.length; )
    e = cr.sort(function(t, n) {
      return t.__v.__b - n.__v.__b;
    }), cr = [], e.some(function(t) {
      var n, o, s, r, l, a;
      t.__d && (l = (r = (n = t).__v).__e, (a = n.__P) && (o = [], (s = qt({}, r)).__v = r.__v + 1, Dm(a, r, s, n.__n, a.ownerSVGElement !== void 0, r.__h != null ? [l] : null, o, l ?? Br(r), r.__h), K$(o, r), r.__e != l && Am(r)));
    });
}
function Mm(e, t, n, o, s, r, l, a, _, d) {
  var i, h, f, c, u, y, p, m = o && o.__k || Cm, v = m.length;
  for (n.__k = [], i = 0; i < t.length; i++)
    if ((c = n.__k[i] = (c = t[i]) == null || typeof c == "boolean" ? null : typeof c == "string" || typeof c == "number" || typeof c == "bigint" ? pa(null, c, null, null, c) : Array.isArray(c) ? pa(Dc, { children: c }, null, null, null) : c.__b > 0 ? pa(c.type, c.props, c.key, c.ref ? c.ref : null, c.__v) : c) != null) {
      if (c.__ = n, c.__b = n.__b + 1, (f = m[i]) === null || f && c.key == f.key && c.type === f.type)
        m[i] = void 0;
      else
        for (h = 0; h < v; h++) {
          if ((f = m[h]) && c.key == f.key && c.type === f.type) {
            m[h] = void 0;
            break;
          }
          f = null;
        }
      Dm(e, c, f = f || Sm, s, r, l, a, _, d), u = c.__e, (h = c.ref) && f.ref != h && (p || (p = []), f.ref && p.push(f.ref, null, c), p.push(h, c.__c || u, c)), u != null ? (y == null && (y = u), typeof c.type == "function" && c.__k === f.__k ? c.__d = _ = Tm(c, _, e) : _ = Lm(e, c, f, m, u, _), typeof n.type == "function" && (n.__d = _)) : _ && f.__e == _ && _.parentNode != e && (_ = Br(f));
    }
  for (n.__e = y, i = v; i--; )
    m[i] != null && Nm(m[i], m[i]);
  if (p)
    for (i = 0; i < p.length; i++)
      Om(p[i], p[++i], p[++i]);
}
function Tm(e, t, n) {
  for (var o, s = e.__k, r = 0; s && r < s.length; r++)
    (o = s[r]) && (o.__ = e, t = typeof o.type == "function" ? Tm(o, t, n) : Lm(n, o, o, s, o.__e, t));
  return t;
}
function Lm(e, t, n, o, s, r) {
  var l, a, _;
  if (t.__d !== void 0)
    l = t.__d, t.__d = void 0;
  else if (n == null || s != r || s.parentNode == null)
    e:
      if (r == null || r.parentNode !== e)
        e.appendChild(s), l = null;
      else {
        for (a = r, _ = 0; (a = a.nextSibling) && _ < o.length; _ += 2)
          if (a == s)
            break e;
        e.insertBefore(s, r), l = r;
      }
  return l !== void 0 ? l : s.nextSibling;
}
function X$(e, t, n, o, s) {
  var r;
  for (r in n)
    r === "children" || r === "key" || r in t || Is(e, r, null, n[r], o);
  for (r in t)
    s && typeof t[r] != "function" || r === "children" || r === "key" || r === "value" || r === "checked" || n[r] === t[r] || Is(e, r, t[r], n[r], o);
}
function Xf(e, t, n) {
  t[0] === "-" ? e.setProperty(t, n) : e[t] = n == null ? "" : typeof n != "number" || G$.test(t) ? n : n + "px";
}
function Is(e, t, n, o, s) {
  var r;
  e:
    if (t === "style")
      if (typeof n == "string")
        e.style.cssText = n;
      else {
        if (typeof o == "string" && (e.style.cssText = o = ""), o)
          for (t in o)
            n && t in n || Xf(e.style, t, "");
        if (n)
          for (t in n)
            o && n[t] === o[t] || Xf(e.style, t, n[t]);
      }
    else if (t[0] === "o" && t[1] === "n")
      r = t !== (t = t.replace(/Capture$/, "")), t = t.toLowerCase() in e ? t.toLowerCase().slice(2) : t.slice(2), e.l || (e.l = {}), e.l[t + r] = n, n ? o || e.addEventListener(t, r ? Zf : Kf, r) : e.removeEventListener(t, r ? Zf : Kf, r);
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
function Kf(e) {
  this.l[e.type + !1](ve.event ? ve.event(e) : e);
}
function Zf(e) {
  this.l[e.type + !0](ve.event ? ve.event(e) : e);
}
function Dm(e, t, n, o, s, r, l, a, _) {
  var d, i, h, f, c, u, y, p, m, v, $, w, C, x, E, g = t.type;
  if (t.constructor !== void 0)
    return null;
  n.__h != null && (_ = n.__h, a = t.__e = n.__e, t.__h = null, r = [a]), (d = ve.__b) && d(t);
  try {
    e:
      if (typeof g == "function") {
        if (p = t.props, m = (d = g.contextType) && o[d.__c], v = d ? m ? m.props.value : d.__ : o, n.__c ? y = (i = t.__c = n.__c).__ = i.__E : ("prototype" in g && g.prototype.render ? t.__c = i = new g(p, v) : (t.__c = i = new _r(p, v), i.constructor = g, i.render = J$), m && m.sub(i), i.props = p, i.state || (i.state = {}), i.context = v, i.__n = o, h = i.__d = !0, i.__h = [], i._sb = []), i.__s == null && (i.__s = i.state), g.getDerivedStateFromProps != null && (i.__s == i.state && (i.__s = qt({}, i.__s)), qt(i.__s, g.getDerivedStateFromProps(p, i.__s))), f = i.props, c = i.state, h)
          g.getDerivedStateFromProps == null && i.componentWillMount != null && i.componentWillMount(), i.componentDidMount != null && i.__h.push(i.componentDidMount);
        else {
          if (g.getDerivedStateFromProps == null && p !== f && i.componentWillReceiveProps != null && i.componentWillReceiveProps(p, v), !i.__e && i.shouldComponentUpdate != null && i.shouldComponentUpdate(p, i.__s, v) === !1 || t.__v === n.__v) {
            for (i.props = p, i.state = i.__s, t.__v !== n.__v && (i.__d = !1), i.__v = t, t.__e = n.__e, t.__k = n.__k, t.__k.forEach(function(k) {
              k && (k.__ = t);
            }), $ = 0; $ < i._sb.length; $++)
              i.__h.push(i._sb[$]);
            i._sb = [], i.__h.length && l.push(i);
            break e;
          }
          i.componentWillUpdate != null && i.componentWillUpdate(p, i.__s, v), i.componentDidUpdate != null && i.__h.push(function() {
            i.componentDidUpdate(f, c, u);
          });
        }
        if (i.context = v, i.props = p, i.__v = t, i.__P = e, w = ve.__r, C = 0, "prototype" in g && g.prototype.render) {
          for (i.state = i.__s, i.__d = !1, w && w(t), d = i.render(i.props, i.state, i.context), x = 0; x < i._sb.length; x++)
            i.__h.push(i._sb[x]);
          i._sb = [];
        } else
          do
            i.__d = !1, w && w(t), d = i.render(i.props, i.state, i.context), i.state = i.__s;
          while (i.__d && ++C < 25);
        i.state = i.__s, i.getChildContext != null && (o = qt(qt({}, o), i.getChildContext())), h || i.getSnapshotBeforeUpdate == null || (u = i.getSnapshotBeforeUpdate(f, c)), E = d != null && d.type === Dc && d.key == null ? d.props.children : d, Mm(e, Array.isArray(E) ? E : [E], t, n, o, s, r, l, a, _), i.base = t.__e, t.__h = null, i.__h.length && l.push(i), y && (i.__E = i.__ = null), i.__e = !1;
      } else
        r == null && t.__v === n.__v ? (t.__k = n.__k, t.__e = n.__e) : t.__e = Z$(n.__e, t, n, o, s, r, l, _);
    (d = ve.diffed) && d(t);
  } catch (k) {
    t.__v = null, (_ || r != null) && (t.__e = a, t.__h = !!_, r[r.indexOf(a)] = null), ve.__e(k, t, n);
  }
}
function K$(e, t) {
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
function Z$(e, t, n, o, s, r, l, a) {
  var _, d, i, h = n.props, f = t.props, c = t.type, u = 0;
  if (c === "svg" && (s = !0), r != null) {
    for (; u < r.length; u++)
      if ((_ = r[u]) && "setAttribute" in _ == !!c && (c ? _.localName === c : _.nodeType === 3)) {
        e = _, r[u] = null;
        break;
      }
  }
  if (e == null) {
    if (c === null)
      return document.createTextNode(f);
    e = s ? document.createElementNS("http://www.w3.org/2000/svg", c) : document.createElement(c, f.is && f), r = null, a = !1;
  }
  if (c === null)
    h === f || a && e.data === f || (e.data = f);
  else {
    if (r = r && km.call(e.childNodes), d = (h = n.props || Sm).dangerouslySetInnerHTML, i = f.dangerouslySetInnerHTML, !a) {
      if (r != null)
        for (h = {}, u = 0; u < e.attributes.length; u++)
          h[e.attributes[u].name] = e.attributes[u].value;
      (i || d) && (i && (d && i.__html == d.__html || i.__html === e.innerHTML) || (e.innerHTML = i && i.__html || ""));
    }
    if (X$(e, f, h, s, a), i)
      t.__k = [];
    else if (u = t.props.children, Mm(e, Array.isArray(u) ? u : [u], t, n, o, s && c !== "foreignObject", r, l, r ? r[0] : n.__k && Br(n, 0), a), r != null)
      for (u = r.length; u--; )
        r[u] != null && Em(r[u]);
    a || ("value" in f && (u = f.value) !== void 0 && (u !== e.value || c === "progress" && !u || c === "option" && u !== h.value) && Is(e, "value", u, h.value, !1), "checked" in f && (u = f.checked) !== void 0 && u !== e.checked && Is(e, "checked", u, h.checked, !1));
  }
  return e;
}
function Om(e, t, n) {
  try {
    typeof e == "function" ? e(t) : e.current = t;
  } catch (o) {
    ve.__e(o, n);
  }
}
function Nm(e, t, n) {
  var o, s;
  if (ve.unmount && ve.unmount(e), (o = e.ref) && (o.current && o.current !== e.__e || Om(o, null, t)), (o = e.__c) != null) {
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
      o[s] && Nm(o[s], t, n || typeof e.type != "function");
  n || e.__e == null || Em(e.__e), e.__ = e.__e = e.__d = void 0;
}
function J$(e, t, n) {
  return this.constructor(e, n);
}
km = Cm.slice, ve = { __e: function(e, t, n, o) {
  for (var s, r, l; t = t.__; )
    if ((s = t.__c) && !s.__)
      try {
        if ((r = s.constructor) && r.getDerivedStateFromError != null && (s.setState(r.getDerivedStateFromError(e)), l = s.__d), s.componentDidCatch != null && (s.componentDidCatch(e, o || {}), l = s.__d), l)
          return s.__E = s;
      } catch (a) {
        e = a;
      }
  throw e;
} }, xm = 0, _r.prototype.setState = function(e, t) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = qt({}, this.state), typeof e == "function" && (e = e(qt({}, n), this.props)), e && qt(n, e), e != null && this.__v && (t && this._sb.push(t), Gf(this));
}, _r.prototype.forceUpdate = function(e) {
  this.__v && (this.__e = !0, e && this.__h.push(e), Gf(this));
}, _r.prototype.render = Dc, cr = [], Ws.__r = 0;
var Q$ = 0;
function Us(e, t, n, o, s) {
  var r, l, a = {};
  for (l in t)
    l == "ref" ? r = t[l] : a[l] = t[l];
  var _ = { type: e, props: a, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: --Q$, __source: s, __self: o };
  if (typeof e == "function" && (r = e.defaultProps))
    for (l in r)
      a[l] === void 0 && (a[l] = r[l]);
  return ve.vnode && ve.vnode(_), _;
}
function ek({
  type: e,
  key: t,
  style: n,
  bounding: o,
  offsetX: s = 0,
  offsetY: r = 0,
  component: l,
  data: a,
  hidden: _,
  props: d,
  children: i,
  onRender: h,
  ...f
}) {
  if (_)
    return null;
  let c;
  h ? c = h(e, a) : l ? c = /* @__PURE__ */ Us(l, { ...d }) : c = a;
  const { left: u, top: y, width: p, height: m } = o;
  return /* @__PURE__ */ Us("div", { style: { width: p, height: m, left: u + s, top: y + r, ...n }, ...f, children: [
    c,
    i
  ] });
}
function tk(e, t, n = 0, o = 0) {
  const s = e.left + n, r = e.top + o;
  return !(s > t.left + t.width || r > t.top + t.height || s + e.width < t.left || r + e.height < t.top);
}
let nk = class extends _r {
  render() {
    const { width: t, height: n, cells: o, left: s, top: r, visibleBounding: l, onRenderCell: a, style: _, children: d, offsetX: i = 0, offsetY: h = 0, ...f } = this.props, c = l ? o.filter((u) => tk(u.bounding, l, i, h)) : o;
    return /* @__PURE__ */ Us("div", { style: { width: t, height: n, left: s, top: r, ..._ }, ...f, children: [
      c.map((u) => /* @__PURE__ */ Us(ek, { offsetX: i, offsetY: h, ...u })),
      d
    ] });
  }
};
class Jf extends Pe {
}
N(Jf, "NAME", "virtualgrid"), N(Jf, "Component", nk);
var Oc, ge, Pm, Rm, fr, Qf, Hm = {}, Wm = [], ok = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function Gt(e, t) {
  for (var n in t)
    e[n] = t[n];
  return e;
}
function Im(e) {
  var t = e.parentNode;
  t && t.removeChild(e);
}
function Nc(e, t, n) {
  var o, s, r, l = {};
  for (r in t)
    r == "key" ? o = t[r] : r == "ref" ? s = t[r] : l[r] = t[r];
  if (arguments.length > 2 && (l.children = arguments.length > 3 ? Oc.call(arguments, 2) : n), typeof e == "function" && e.defaultProps != null)
    for (r in e.defaultProps)
      l[r] === void 0 && (l[r] = e.defaultProps[r]);
  return Yi(e, l, o, s, null);
}
function Yi(e, t, n, o, s) {
  var r = { type: e, props: t, key: n, ref: o, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: s ?? ++Pm };
  return s == null && ge.vnode != null && ge.vnode(r), r;
}
function rk() {
  return { current: null };
}
function Pc(e) {
  return e.children;
}
function ur(e, t) {
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
function Um(e) {
  var t, n;
  if ((e = e.__) != null && e.__c != null) {
    for (e.__e = e.__c.base = null, t = 0; t < e.__k.length; t++)
      if ((n = e.__k[t]) != null && n.__e != null) {
        e.__e = e.__c.base = n.__e;
        break;
      }
    return Um(e);
  }
}
function eu(e) {
  (!e.__d && (e.__d = !0) && fr.push(e) && !Bs.__r++ || Qf !== ge.debounceRendering) && ((Qf = ge.debounceRendering) || setTimeout)(Bs);
}
function Bs() {
  for (var e; Bs.__r = fr.length; )
    e = fr.sort(function(t, n) {
      return t.__v.__b - n.__v.__b;
    }), fr = [], e.some(function(t) {
      var n, o, s, r, l, a;
      t.__d && (l = (r = (n = t).__v).__e, (a = n.__P) && (o = [], (s = Gt({}, r)).__v = r.__v + 1, Vm(a, r, s, n.__n, a.ownerSVGElement !== void 0, r.__h != null ? [l] : null, o, l ?? Fr(r), r.__h), sk(o, r), r.__e != l && Um(r)));
    });
}
function Bm(e, t, n, o, s, r, l, a, _, d) {
  var i, h, f, c, u, y, p, m = o && o.__k || Wm, v = m.length;
  for (n.__k = [], i = 0; i < t.length; i++)
    if ((c = n.__k[i] = (c = t[i]) == null || typeof c == "boolean" ? null : typeof c == "string" || typeof c == "number" || typeof c == "bigint" ? Yi(null, c, null, null, c) : Array.isArray(c) ? Yi(Pc, { children: c }, null, null, null) : c.__b > 0 ? Yi(c.type, c.props, c.key, c.ref ? c.ref : null, c.__v) : c) != null) {
      if (c.__ = n, c.__b = n.__b + 1, (f = m[i]) === null || f && c.key == f.key && c.type === f.type)
        m[i] = void 0;
      else
        for (h = 0; h < v; h++) {
          if ((f = m[h]) && c.key == f.key && c.type === f.type) {
            m[h] = void 0;
            break;
          }
          f = null;
        }
      Vm(e, c, f = f || Hm, s, r, l, a, _, d), u = c.__e, (h = c.ref) && f.ref != h && (p || (p = []), f.ref && p.push(f.ref, null, c), p.push(h, c.__c || u, c)), u != null ? (y == null && (y = u), typeof c.type == "function" && c.__k === f.__k ? c.__d = _ = Fm(c, _, e) : _ = jm(e, c, f, m, u, _), typeof n.type == "function" && (n.__d = _)) : _ && f.__e == _ && _.parentNode != e && (_ = Fr(f));
    }
  for (n.__e = y, i = v; i--; )
    m[i] != null && Ym(m[i], m[i]);
  if (p)
    for (i = 0; i < p.length; i++)
      zm(p[i], p[++i], p[++i]);
}
function Fm(e, t, n) {
  for (var o, s = e.__k, r = 0; s && r < s.length; r++)
    (o = s[r]) && (o.__ = e, t = typeof o.type == "function" ? Fm(o, t, n) : jm(n, o, o, s, o.__e, t));
  return t;
}
function jm(e, t, n, o, s, r) {
  var l, a, _;
  if (t.__d !== void 0)
    l = t.__d, t.__d = void 0;
  else if (n == null || s != r || s.parentNode == null)
    e:
      if (r == null || r.parentNode !== e)
        e.appendChild(s), l = null;
      else {
        for (a = r, _ = 0; (a = a.nextSibling) && _ < o.length; _ += 2)
          if (a == s)
            break e;
        e.insertBefore(s, r), l = r;
      }
  return l !== void 0 ? l : s.nextSibling;
}
function ik(e, t, n, o, s) {
  var r;
  for (r in n)
    r === "children" || r === "key" || r in t || Fs(e, r, null, n[r], o);
  for (r in t)
    s && typeof t[r] != "function" || r === "children" || r === "key" || r === "value" || r === "checked" || n[r] === t[r] || Fs(e, r, t[r], n[r], o);
}
function tu(e, t, n) {
  t[0] === "-" ? e.setProperty(t, n) : e[t] = n == null ? "" : typeof n != "number" || ok.test(t) ? n : n + "px";
}
function Fs(e, t, n, o, s) {
  var r;
  e:
    if (t === "style")
      if (typeof n == "string")
        e.style.cssText = n;
      else {
        if (typeof o == "string" && (e.style.cssText = o = ""), o)
          for (t in o)
            n && t in n || tu(e.style, t, "");
        if (n)
          for (t in n)
            o && n[t] === o[t] || tu(e.style, t, n[t]);
      }
    else if (t[0] === "o" && t[1] === "n")
      r = t !== (t = t.replace(/Capture$/, "")), t = t.toLowerCase() in e ? t.toLowerCase().slice(2) : t.slice(2), e.l || (e.l = {}), e.l[t + r] = n, n ? o || e.addEventListener(t, r ? ou : nu, r) : e.removeEventListener(t, r ? ou : nu, r);
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
function nu(e) {
  this.l[e.type + !1](ge.event ? ge.event(e) : e);
}
function ou(e) {
  this.l[e.type + !0](ge.event ? ge.event(e) : e);
}
function Vm(e, t, n, o, s, r, l, a, _) {
  var d, i, h, f, c, u, y, p, m, v, $, w, C, x, E, g = t.type;
  if (t.constructor !== void 0)
    return null;
  n.__h != null && (_ = n.__h, a = t.__e = n.__e, t.__h = null, r = [a]), (d = ge.__b) && d(t);
  try {
    e:
      if (typeof g == "function") {
        if (p = t.props, m = (d = g.contextType) && o[d.__c], v = d ? m ? m.props.value : d.__ : o, n.__c ? y = (i = t.__c = n.__c).__ = i.__E : ("prototype" in g && g.prototype.render ? t.__c = i = new g(p, v) : (t.__c = i = new ur(p, v), i.constructor = g, i.render = ak), m && m.sub(i), i.props = p, i.state || (i.state = {}), i.context = v, i.__n = o, h = i.__d = !0, i.__h = [], i._sb = []), i.__s == null && (i.__s = i.state), g.getDerivedStateFromProps != null && (i.__s == i.state && (i.__s = Gt({}, i.__s)), Gt(i.__s, g.getDerivedStateFromProps(p, i.__s))), f = i.props, c = i.state, h)
          g.getDerivedStateFromProps == null && i.componentWillMount != null && i.componentWillMount(), i.componentDidMount != null && i.__h.push(i.componentDidMount);
        else {
          if (g.getDerivedStateFromProps == null && p !== f && i.componentWillReceiveProps != null && i.componentWillReceiveProps(p, v), !i.__e && i.shouldComponentUpdate != null && i.shouldComponentUpdate(p, i.__s, v) === !1 || t.__v === n.__v) {
            for (i.props = p, i.state = i.__s, t.__v !== n.__v && (i.__d = !1), i.__v = t, t.__e = n.__e, t.__k = n.__k, t.__k.forEach(function(k) {
              k && (k.__ = t);
            }), $ = 0; $ < i._sb.length; $++)
              i.__h.push(i._sb[$]);
            i._sb = [], i.__h.length && l.push(i);
            break e;
          }
          i.componentWillUpdate != null && i.componentWillUpdate(p, i.__s, v), i.componentDidUpdate != null && i.__h.push(function() {
            i.componentDidUpdate(f, c, u);
          });
        }
        if (i.context = v, i.props = p, i.__v = t, i.__P = e, w = ge.__r, C = 0, "prototype" in g && g.prototype.render) {
          for (i.state = i.__s, i.__d = !1, w && w(t), d = i.render(i.props, i.state, i.context), x = 0; x < i._sb.length; x++)
            i.__h.push(i._sb[x]);
          i._sb = [];
        } else
          do
            i.__d = !1, w && w(t), d = i.render(i.props, i.state, i.context), i.state = i.__s;
          while (i.__d && ++C < 25);
        i.state = i.__s, i.getChildContext != null && (o = Gt(Gt({}, o), i.getChildContext())), h || i.getSnapshotBeforeUpdate == null || (u = i.getSnapshotBeforeUpdate(f, c)), E = d != null && d.type === Pc && d.key == null ? d.props.children : d, Bm(e, Array.isArray(E) ? E : [E], t, n, o, s, r, l, a, _), i.base = t.__e, t.__h = null, i.__h.length && l.push(i), y && (i.__E = i.__ = null), i.__e = !1;
      } else
        r == null && t.__v === n.__v ? (t.__k = n.__k, t.__e = n.__e) : t.__e = lk(n.__e, t, n, o, s, r, l, _);
    (d = ge.diffed) && d(t);
  } catch (k) {
    t.__v = null, (_ || r != null) && (t.__e = a, t.__h = !!_, r[r.indexOf(a)] = null), ge.__e(k, t, n);
  }
}
function sk(e, t) {
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
function lk(e, t, n, o, s, r, l, a) {
  var _, d, i, h = n.props, f = t.props, c = t.type, u = 0;
  if (c === "svg" && (s = !0), r != null) {
    for (; u < r.length; u++)
      if ((_ = r[u]) && "setAttribute" in _ == !!c && (c ? _.localName === c : _.nodeType === 3)) {
        e = _, r[u] = null;
        break;
      }
  }
  if (e == null) {
    if (c === null)
      return document.createTextNode(f);
    e = s ? document.createElementNS("http://www.w3.org/2000/svg", c) : document.createElement(c, f.is && f), r = null, a = !1;
  }
  if (c === null)
    h === f || a && e.data === f || (e.data = f);
  else {
    if (r = r && Oc.call(e.childNodes), d = (h = n.props || Hm).dangerouslySetInnerHTML, i = f.dangerouslySetInnerHTML, !a) {
      if (r != null)
        for (h = {}, u = 0; u < e.attributes.length; u++)
          h[e.attributes[u].name] = e.attributes[u].value;
      (i || d) && (i && (d && i.__html == d.__html || i.__html === e.innerHTML) || (e.innerHTML = i && i.__html || ""));
    }
    if (ik(e, f, h, s, a), i)
      t.__k = [];
    else if (u = t.props.children, Bm(e, Array.isArray(u) ? u : [u], t, n, o, s && c !== "foreignObject", r, l, r ? r[0] : n.__k && Fr(n, 0), a), r != null)
      for (u = r.length; u--; )
        r[u] != null && Im(r[u]);
    a || ("value" in f && (u = f.value) !== void 0 && (u !== e.value || c === "progress" && !u || c === "option" && u !== h.value) && Fs(e, "value", u, h.value, !1), "checked" in f && (u = f.checked) !== void 0 && u !== e.checked && Fs(e, "checked", u, h.checked, !1));
  }
  return e;
}
function zm(e, t, n) {
  try {
    typeof e == "function" ? e(t) : e.current = t;
  } catch (o) {
    ge.__e(o, n);
  }
}
function Ym(e, t, n) {
  var o, s;
  if (ge.unmount && ge.unmount(e), (o = e.ref) && (o.current && o.current !== e.__e || zm(o, null, t)), (o = e.__c) != null) {
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
      o[s] && Ym(o[s], t, n || typeof e.type != "function");
  n || e.__e == null || Im(e.__e), e.__ = e.__e = e.__d = void 0;
}
function ak(e, t, n) {
  return this.constructor(e, n);
}
Oc = Wm.slice, ge = { __e: function(e, t, n, o) {
  for (var s, r, l; t = t.__; )
    if ((s = t.__c) && !s.__)
      try {
        if ((r = s.constructor) && r.getDerivedStateFromError != null && (s.setState(r.getDerivedStateFromError(e)), l = s.__d), s.componentDidCatch != null && (s.componentDidCatch(e, o || {}), l = s.__d), l)
          return s.__E = s;
      } catch (a) {
        e = a;
      }
  throw e;
} }, Pm = 0, Rm = function(e) {
  return e != null && e.constructor === void 0;
}, ur.prototype.setState = function(e, t) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = Gt({}, this.state), typeof e == "function" && (e = e(Gt({}, n), this.props)), e && Gt(n, e), e != null && this.__v && (t && this._sb.push(t), eu(this));
}, ur.prototype.forceUpdate = function(e) {
  this.__v && (this.__e = !0, e && this.__h.push(e), eu(this));
}, ur.prototype.render = Pc, fr = [], Bs.__r = 0;
var ck = 0;
function X(e, t, n, o, s) {
  var r, l, a = {};
  for (l in t)
    l == "ref" ? r = t[l] : a[l] = t[l];
  var _ = { type: e, props: a, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: --ck, __source: s, __self: o };
  if (typeof e == "function" && (r = e.defaultProps))
    for (l in r)
      a[l] === void 0 && (a[l] = r[l]);
  return ge.vnode && ge.vnode(_), _;
}
let _k = (e = 21) => crypto.getRandomValues(new Uint8Array(e)).reduce((t, n) => (n &= 63, n < 36 ? t += n.toString(36) : n < 62 ? t += (n - 26).toString(36).toUpperCase() : n > 62 ? t += "-" : t += "_", t), "");
var qm, ye, Gm, dr, ru, Xm = {}, Km = [], fk = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function Xt(e, t) {
  for (var n in t)
    e[n] = t[n];
  return e;
}
function Zm(e) {
  var t = e.parentNode;
  t && t.removeChild(e);
}
function ma(e, t, n, o, s) {
  var r = { type: e, props: t, key: n, ref: o, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: s ?? ++Gm };
  return s == null && ye.vnode != null && ye.vnode(r), r;
}
function Rc(e) {
  return e.children;
}
function hr(e, t) {
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
function Jm(e) {
  var t, n;
  if ((e = e.__) != null && e.__c != null) {
    for (e.__e = e.__c.base = null, t = 0; t < e.__k.length; t++)
      if ((n = e.__k[t]) != null && n.__e != null) {
        e.__e = e.__c.base = n.__e;
        break;
      }
    return Jm(e);
  }
}
function iu(e) {
  (!e.__d && (e.__d = !0) && dr.push(e) && !js.__r++ || ru !== ye.debounceRendering) && ((ru = ye.debounceRendering) || setTimeout)(js);
}
function js() {
  for (var e; js.__r = dr.length; )
    e = dr.sort(function(t, n) {
      return t.__v.__b - n.__v.__b;
    }), dr = [], e.some(function(t) {
      var n, o, s, r, l, a;
      t.__d && (l = (r = (n = t).__v).__e, (a = n.__P) && (o = [], (s = Xt({}, r)).__v = r.__v + 1, nv(a, r, s, n.__n, a.ownerSVGElement !== void 0, r.__h != null ? [l] : null, o, l ?? jr(r), r.__h), dk(o, r), r.__e != l && Jm(r)));
    });
}
function Qm(e, t, n, o, s, r, l, a, _, d) {
  var i, h, f, c, u, y, p, m = o && o.__k || Km, v = m.length;
  for (n.__k = [], i = 0; i < t.length; i++)
    if ((c = n.__k[i] = (c = t[i]) == null || typeof c == "boolean" ? null : typeof c == "string" || typeof c == "number" || typeof c == "bigint" ? ma(null, c, null, null, c) : Array.isArray(c) ? ma(Rc, { children: c }, null, null, null) : c.__b > 0 ? ma(c.type, c.props, c.key, c.ref ? c.ref : null, c.__v) : c) != null) {
      if (c.__ = n, c.__b = n.__b + 1, (f = m[i]) === null || f && c.key == f.key && c.type === f.type)
        m[i] = void 0;
      else
        for (h = 0; h < v; h++) {
          if ((f = m[h]) && c.key == f.key && c.type === f.type) {
            m[h] = void 0;
            break;
          }
          f = null;
        }
      nv(e, c, f = f || Xm, s, r, l, a, _, d), u = c.__e, (h = c.ref) && f.ref != h && (p || (p = []), f.ref && p.push(f.ref, null, c), p.push(h, c.__c || u, c)), u != null ? (y == null && (y = u), typeof c.type == "function" && c.__k === f.__k ? c.__d = _ = ev(c, _, e) : _ = tv(e, c, f, m, u, _), typeof n.type == "function" && (n.__d = _)) : _ && f.__e == _ && _.parentNode != e && (_ = jr(f));
    }
  for (n.__e = y, i = v; i--; )
    m[i] != null && rv(m[i], m[i]);
  if (p)
    for (i = 0; i < p.length; i++)
      ov(p[i], p[++i], p[++i]);
}
function ev(e, t, n) {
  for (var o, s = e.__k, r = 0; s && r < s.length; r++)
    (o = s[r]) && (o.__ = e, t = typeof o.type == "function" ? ev(o, t, n) : tv(n, o, o, s, o.__e, t));
  return t;
}
function tv(e, t, n, o, s, r) {
  var l, a, _;
  if (t.__d !== void 0)
    l = t.__d, t.__d = void 0;
  else if (n == null || s != r || s.parentNode == null)
    e:
      if (r == null || r.parentNode !== e)
        e.appendChild(s), l = null;
      else {
        for (a = r, _ = 0; (a = a.nextSibling) && _ < o.length; _ += 2)
          if (a == s)
            break e;
        e.insertBefore(s, r), l = r;
      }
  return l !== void 0 ? l : s.nextSibling;
}
function uk(e, t, n, o, s) {
  var r;
  for (r in n)
    r === "children" || r === "key" || r in t || Vs(e, r, null, n[r], o);
  for (r in t)
    s && typeof t[r] != "function" || r === "children" || r === "key" || r === "value" || r === "checked" || n[r] === t[r] || Vs(e, r, t[r], n[r], o);
}
function su(e, t, n) {
  t[0] === "-" ? e.setProperty(t, n) : e[t] = n == null ? "" : typeof n != "number" || fk.test(t) ? n : n + "px";
}
function Vs(e, t, n, o, s) {
  var r;
  e:
    if (t === "style")
      if (typeof n == "string")
        e.style.cssText = n;
      else {
        if (typeof o == "string" && (e.style.cssText = o = ""), o)
          for (t in o)
            n && t in n || su(e.style, t, "");
        if (n)
          for (t in n)
            o && n[t] === o[t] || su(e.style, t, n[t]);
      }
    else if (t[0] === "o" && t[1] === "n")
      r = t !== (t = t.replace(/Capture$/, "")), t = t.toLowerCase() in e ? t.toLowerCase().slice(2) : t.slice(2), e.l || (e.l = {}), e.l[t + r] = n, n ? o || e.addEventListener(t, r ? au : lu, r) : e.removeEventListener(t, r ? au : lu, r);
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
function lu(e) {
  this.l[e.type + !1](ye.event ? ye.event(e) : e);
}
function au(e) {
  this.l[e.type + !0](ye.event ? ye.event(e) : e);
}
function nv(e, t, n, o, s, r, l, a, _) {
  var d, i, h, f, c, u, y, p, m, v, $, w, C, x, E, g = t.type;
  if (t.constructor !== void 0)
    return null;
  n.__h != null && (_ = n.__h, a = t.__e = n.__e, t.__h = null, r = [a]), (d = ye.__b) && d(t);
  try {
    e:
      if (typeof g == "function") {
        if (p = t.props, m = (d = g.contextType) && o[d.__c], v = d ? m ? m.props.value : d.__ : o, n.__c ? y = (i = t.__c = n.__c).__ = i.__E : ("prototype" in g && g.prototype.render ? t.__c = i = new g(p, v) : (t.__c = i = new hr(p, v), i.constructor = g, i.render = pk), m && m.sub(i), i.props = p, i.state || (i.state = {}), i.context = v, i.__n = o, h = i.__d = !0, i.__h = [], i._sb = []), i.__s == null && (i.__s = i.state), g.getDerivedStateFromProps != null && (i.__s == i.state && (i.__s = Xt({}, i.__s)), Xt(i.__s, g.getDerivedStateFromProps(p, i.__s))), f = i.props, c = i.state, h)
          g.getDerivedStateFromProps == null && i.componentWillMount != null && i.componentWillMount(), i.componentDidMount != null && i.__h.push(i.componentDidMount);
        else {
          if (g.getDerivedStateFromProps == null && p !== f && i.componentWillReceiveProps != null && i.componentWillReceiveProps(p, v), !i.__e && i.shouldComponentUpdate != null && i.shouldComponentUpdate(p, i.__s, v) === !1 || t.__v === n.__v) {
            for (i.props = p, i.state = i.__s, t.__v !== n.__v && (i.__d = !1), i.__v = t, t.__e = n.__e, t.__k = n.__k, t.__k.forEach(function(k) {
              k && (k.__ = t);
            }), $ = 0; $ < i._sb.length; $++)
              i.__h.push(i._sb[$]);
            i._sb = [], i.__h.length && l.push(i);
            break e;
          }
          i.componentWillUpdate != null && i.componentWillUpdate(p, i.__s, v), i.componentDidUpdate != null && i.__h.push(function() {
            i.componentDidUpdate(f, c, u);
          });
        }
        if (i.context = v, i.props = p, i.__v = t, i.__P = e, w = ye.__r, C = 0, "prototype" in g && g.prototype.render) {
          for (i.state = i.__s, i.__d = !1, w && w(t), d = i.render(i.props, i.state, i.context), x = 0; x < i._sb.length; x++)
            i.__h.push(i._sb[x]);
          i._sb = [];
        } else
          do
            i.__d = !1, w && w(t), d = i.render(i.props, i.state, i.context), i.state = i.__s;
          while (i.__d && ++C < 25);
        i.state = i.__s, i.getChildContext != null && (o = Xt(Xt({}, o), i.getChildContext())), h || i.getSnapshotBeforeUpdate == null || (u = i.getSnapshotBeforeUpdate(f, c)), E = d != null && d.type === Rc && d.key == null ? d.props.children : d, Qm(e, Array.isArray(E) ? E : [E], t, n, o, s, r, l, a, _), i.base = t.__e, t.__h = null, i.__h.length && l.push(i), y && (i.__E = i.__ = null), i.__e = !1;
      } else
        r == null && t.__v === n.__v ? (t.__k = n.__k, t.__e = n.__e) : t.__e = hk(n.__e, t, n, o, s, r, l, _);
    (d = ye.diffed) && d(t);
  } catch (k) {
    t.__v = null, (_ || r != null) && (t.__e = a, t.__h = !!_, r[r.indexOf(a)] = null), ye.__e(k, t, n);
  }
}
function dk(e, t) {
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
function hk(e, t, n, o, s, r, l, a) {
  var _, d, i, h = n.props, f = t.props, c = t.type, u = 0;
  if (c === "svg" && (s = !0), r != null) {
    for (; u < r.length; u++)
      if ((_ = r[u]) && "setAttribute" in _ == !!c && (c ? _.localName === c : _.nodeType === 3)) {
        e = _, r[u] = null;
        break;
      }
  }
  if (e == null) {
    if (c === null)
      return document.createTextNode(f);
    e = s ? document.createElementNS("http://www.w3.org/2000/svg", c) : document.createElement(c, f.is && f), r = null, a = !1;
  }
  if (c === null)
    h === f || a && e.data === f || (e.data = f);
  else {
    if (r = r && qm.call(e.childNodes), d = (h = n.props || Xm).dangerouslySetInnerHTML, i = f.dangerouslySetInnerHTML, !a) {
      if (r != null)
        for (h = {}, u = 0; u < e.attributes.length; u++)
          h[e.attributes[u].name] = e.attributes[u].value;
      (i || d) && (i && (d && i.__html == d.__html || i.__html === e.innerHTML) || (e.innerHTML = i && i.__html || ""));
    }
    if (uk(e, f, h, s, a), i)
      t.__k = [];
    else if (u = t.props.children, Qm(e, Array.isArray(u) ? u : [u], t, n, o, s && c !== "foreignObject", r, l, r ? r[0] : n.__k && jr(n, 0), a), r != null)
      for (u = r.length; u--; )
        r[u] != null && Zm(r[u]);
    a || ("value" in f && (u = f.value) !== void 0 && (u !== e.value || c === "progress" && !u || c === "option" && u !== h.value) && Vs(e, "value", u, h.value, !1), "checked" in f && (u = f.checked) !== void 0 && u !== e.checked && Vs(e, "checked", u, h.checked, !1));
  }
  return e;
}
function ov(e, t, n) {
  try {
    typeof e == "function" ? e(t) : e.current = t;
  } catch (o) {
    ye.__e(o, n);
  }
}
function rv(e, t, n) {
  var o, s;
  if (ye.unmount && ye.unmount(e), (o = e.ref) && (o.current && o.current !== e.__e || ov(o, null, t)), (o = e.__c) != null) {
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
      o[s] && rv(o[s], t, n || typeof e.type != "function");
  n || e.__e == null || Zm(e.__e), e.__ = e.__e = e.__d = void 0;
}
function pk(e, t, n) {
  return this.constructor(e, n);
}
qm = Km.slice, ye = { __e: function(e, t, n, o) {
  for (var s, r, l; t = t.__; )
    if ((s = t.__c) && !s.__)
      try {
        if ((r = s.constructor) && r.getDerivedStateFromError != null && (s.setState(r.getDerivedStateFromError(e)), l = s.__d), s.componentDidCatch != null && (s.componentDidCatch(e, o || {}), l = s.__d), l)
          return s.__E = s;
      } catch (a) {
        e = a;
      }
  throw e;
} }, Gm = 0, hr.prototype.setState = function(e, t) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = Xt({}, this.state), typeof e == "function" && (e = e(Xt({}, n), this.props)), e && Xt(n, e), e != null && this.__v && (t && this._sb.push(t), iu(this));
}, hr.prototype.forceUpdate = function(e) {
  this.__v && (this.__e = !0, e && this.__h.push(e), iu(this));
}, hr.prototype.render = Rc, dr = [], js.__r = 0;
var mk = 0;
function cu(e, t, n, o, s) {
  var r, l, a = {};
  for (l in t)
    l == "ref" ? r = t[l] : a[l] = t[l];
  var _ = { type: e, props: a, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: --mk, __source: s, __self: o };
  if (typeof e == "function" && (r = e.defaultProps))
    for (l in r)
      a[l] === void 0 && (a[l] = r[l]);
  return ye.vnode && ye.vnode(_), _;
}
var vn, gn;
class _u extends hr {
  constructor(n) {
    super(n);
    O(this, vn, 0);
    O(this, gn, null);
    N(this, "_handleWheel", (n) => {
      const { wheelContainer: o } = this.props, s = n.target;
      if (!(!s || !o) && (typeof o == "string" && s.closest(o) || typeof o == "object")) {
        const r = (this.props.type === "horz" ? n.deltaX : n.deltaY) * (this.props.wheelSpeed ?? 1);
        this.scrollOffset(r) && n.preventDefault();
      }
    });
    N(this, "_handleMouseMove", (n) => {
      const { dragStart: o } = this.state;
      o && (b(this, vn) && cancelAnimationFrame(b(this, vn)), H(this, vn, requestAnimationFrame(() => {
        const s = this.props.type === "horz" ? n.clientX - o.x : n.clientY - o.y;
        this.scroll(o.offset + s * this.props.scrollSize / this.props.clientSize), H(this, vn, 0);
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
      const o = n.currentTarget;
      if (!o)
        return;
      const s = o.getBoundingClientRect(), { type: r, clientSize: l, scrollSize: a } = this.props, _ = (r === "horz" ? n.clientX - s.left : n.clientY - s.top) - this.barSize / 2;
      this.scroll(_ * a / l), n.preventDefault();
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
    n && (H(this, gn, typeof n == "string" ? document : n.current), b(this, gn).addEventListener("wheel", this._handleWheel, { passive: !1 }));
  }
  componentWillUnmount() {
    document.removeEventListener("mousemove", this._handleMouseMove), document.removeEventListener("mouseup", this._handleMouseUp), b(this, gn) && b(this, gn).removeEventListener("wheel", this._handleWheel);
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
      left: a,
      top: _,
      bottom: d,
      right: i
    } = this.props, { maxScrollPos: h, scrollPos: f } = this, { dragStart: c } = this.state, u = {
      left: a,
      top: _,
      bottom: d,
      right: i,
      ...l
    }, y = {};
    return o === "horz" ? (u.height = s, u.width = n, y.width = this.barSize, y.left = Math.round(Math.min(h, f) * (n - y.width) / h)) : (u.width = s, u.height = n, y.height = this.barSize, y.top = Math.round(Math.min(h, f) * (n - y.height) / h)), /* @__PURE__ */ cu(
      "div",
      {
        className: j("scrollbar", r, {
          "is-vert": o === "vert",
          "is-horz": o === "horz",
          "is-dragging": c
        }),
        style: u,
        onMouseDown: this._handleClick,
        children: /* @__PURE__ */ cu(
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
vn = new WeakMap(), gn = new WeakMap();
function fu(e, t, n) {
  return e && (t && (e = Math.max(t, e)), n && (e = Math.min(n, e))), e;
}
function iv({ col: e, className: t, height: n, row: o, onRenderCell: s, style: r, outerStyle: l, children: a, outerClass: _, ...d }) {
  var g;
  const i = {
    left: e.left,
    width: e.realWidth,
    height: n,
    ...l
  }, { align: h, border: f } = e.setting, c = {
    justifyContent: h ? h === "left" ? "start" : h === "right" ? "end" : h : void 0,
    ...e.setting.cellStyle,
    ...r
  }, u = ["dtable-cell", _, e.setting.className, {
    "has-border-left": f === !0 || f === "left",
    "has-border-right": f === !0 || f === "right"
  }], y = ["dtable-cell-content", t], p = [a ?? ((g = o.data) == null ? void 0 : g[e.name]) ?? ""], m = s ? s(p, { row: o, col: e }, Nc) : p, v = [], $ = [], w = {}, C = {};
  let x = "div";
  m == null || m.forEach((k) => {
    if (typeof k == "object" && k && !Rm(k) && ("html" in k || "className" in k || "style" in k || "attrs" in k || "children" in k || "tagName" in k)) {
      const T = k.outer ? v : $;
      k.html ? T.push(/* @__PURE__ */ X("div", { className: j("dtable-cell-html", k.className), style: k.style, dangerouslySetInnerHTML: { __html: k.html }, ...k.attrs ?? {} })) : (k.style && Object.assign(k.outer ? i : c, k.style), k.className && (k.outer ? u : y).push(k.className), k.children && T.push(k.children), k.attrs && Object.assign(k.outer ? w : C, k.attrs)), k.tagName && !k.outer && (x = k.tagName);
    } else
      $.push(k);
  });
  const E = x;
  return /* @__PURE__ */ X(
    "div",
    {
      className: j(u),
      style: i,
      "data-col": e.name,
      ...d,
      ...w,
      children: [
        $.length > 0 && /* @__PURE__ */ X(E, { className: j(y), style: c, ...C, children: $ }),
        v
      ]
    }
  );
}
function va({ row: e, className: t, top: n = 0, left: o = 0, width: s, height: r, cols: l, CellComponent: a = iv, onRenderCell: _ }) {
  return /* @__PURE__ */ X("div", { className: j("dtable-cells", t), style: { top: n, left: o, width: s, height: r }, children: l.map((d) => d.visible ? /* @__PURE__ */ X(
    a,
    {
      col: d,
      row: e,
      onRenderCell: _
    },
    d.name
  ) : null) });
}
function sv({
  row: e,
  className: t,
  top: n,
  height: o,
  fixedLeftCols: s,
  fixedRightCols: r,
  scrollCols: l,
  fixedLeftWidth: a,
  scrollWidth: _,
  scrollColsWidth: d,
  fixedRightWidth: i,
  scrollLeft: h,
  CellComponent: f = iv,
  onRenderCell: c,
  style: u,
  ...y
}) {
  let p = null;
  s != null && s.length && (p = /* @__PURE__ */ X(
    va,
    {
      className: "dtable-fixed-left",
      cols: s,
      width: a,
      row: e,
      CellComponent: f,
      onRenderCell: c
    }
  ));
  let m = null;
  l != null && l.length && (m = /* @__PURE__ */ X(
    va,
    {
      className: "dtable-flexable",
      cols: l,
      left: a - h,
      width: Math.max(_, d),
      row: e,
      CellComponent: f,
      onRenderCell: c
    }
  ));
  let v = null;
  r != null && r.length && (v = /* @__PURE__ */ X(
    va,
    {
      className: "dtable-fixed-right",
      cols: r,
      left: a + _,
      width: i,
      row: e,
      CellComponent: f,
      onRenderCell: c
    }
  ));
  const $ = { top: n, height: o, lineHeight: `${o - 2}px`, ...u };
  return /* @__PURE__ */ X(
    "div",
    {
      className: j("dtable-row", t),
      style: $,
      "data-id": e.id,
      ...y,
      children: [
        p,
        m,
        v
      ]
    }
  );
}
function vk({ height: e, onRenderRow: t, ...n }) {
  const o = {
    height: e,
    ...n,
    row: { id: "HEADER", index: -1, top: 0 },
    className: "dtable-in-header",
    top: 0
  };
  if (t) {
    const s = t({ props: o }, Nc);
    s && Object.assign(o, s);
  }
  return /* @__PURE__ */ X("div", { className: "dtable-header", style: { height: e }, children: /* @__PURE__ */ X(sv, { ...o }) });
}
function gk({
  className: e,
  style: t,
  top: n,
  rows: o,
  height: s,
  rowHeight: r,
  scrollTop: l,
  onRenderRow: a,
  ..._
}) {
  return t = { ...t, top: n, height: s }, /* @__PURE__ */ X("div", { className: j("dtable-rows", e), style: t, children: o.map((d) => {
    const i = {
      className: `dtable-row-${d.index % 2 ? "odd" : "even"}`,
      row: d,
      top: d.top - l,
      height: r,
      ..._
    }, h = a == null ? void 0 : a({ props: i, row: d }, Nc);
    return h && Object.assign(i, h), /* @__PURE__ */ X(sv, { ...i });
  }) });
}
const zs = /* @__PURE__ */ new Map(), Ys = [];
function lv(e, t) {
  const { name: n } = e;
  if (!(t != null && t.override) && zs.has(n))
    throw new Error(`DTable: Plugin with name ${n} already exists`);
  zs.set(n, e), t != null && t.buildIn && !Ys.includes(n) && Ys.push(n);
}
function vo(e, t) {
  lv(e, t);
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
function av(e) {
  return zs.delete(e);
}
function yk(e) {
  if (typeof e == "string") {
    const t = zs.get(e);
    return t || console.warn(`DTable: Cannot found plugin "${e}"`), t;
  }
  if (typeof e == "function" && "plugin" in e)
    return e.plugin;
  if (typeof e == "object")
    return e;
  console.warn("DTable: Invalid plugin", e);
}
function cv(e, t, n) {
  return t.forEach((o) => {
    var r;
    if (!o)
      return;
    const s = yk(o);
    s && (n.has(s.name) || ((r = s.plugins) != null && r.length && cv(e, s.plugins, n), e.push(s), n.add(s.name)));
  }), e;
}
function bk(e = [], t = !0) {
  return t && Ys.length && e.unshift(...Ys), e != null && e.length ? cv([], e, /* @__PURE__ */ new Set()) : [];
}
function uu() {
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
var Ei, yn, Qn, Dt, tt, Ot, xe, qe, nt, eo, ci, _i, yt, to, no, El, _v, Al, fv, Ml, uv, Tl, dv, fi, Ba, Ll, Dl, ui, di, Ol, Nl, Pl, hv, Rl, pv, Hl, mv;
let wk = (Ei = class extends ur {
  constructor(n) {
    super(n);
    O(this, El);
    O(this, Al);
    O(this, Ml);
    O(this, Tl);
    O(this, fi);
    O(this, Pl);
    O(this, Rl);
    O(this, Hl);
    N(this, "ref", rk());
    O(this, yn, 0);
    O(this, Qn, void 0);
    O(this, Dt, !1);
    O(this, tt, void 0);
    O(this, Ot, void 0);
    O(this, xe, []);
    O(this, qe, void 0);
    O(this, nt, /* @__PURE__ */ new Map());
    O(this, eo, {});
    O(this, ci, void 0);
    O(this, _i, []);
    N(this, "updateLayout", () => {
      b(this, yn) && cancelAnimationFrame(b(this, yn)), H(this, yn, requestAnimationFrame(() => {
        H(this, qe, void 0), this.forceUpdate(), H(this, yn, 0);
      }));
    });
    O(this, yt, (n, o) => {
      o = o || n.type;
      const s = b(this, nt).get(o);
      if (s != null && s.length) {
        for (const r of s)
          if (r.call(this, n) === !1) {
            n.stopPropagation(), n.preventDefault();
            break;
          }
      }
    });
    O(this, to, (n) => {
      b(this, yt).call(this, n, `window_${n.type}`);
    });
    O(this, no, (n) => {
      b(this, yt).call(this, n, `document_${n.type}`);
    });
    O(this, Ll, (n, o) => {
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
    O(this, Dl, (n, o) => (this.options.onRenderHeaderRow && (n.props = this.options.onRenderHeaderRow.call(this, n, o)), b(this, xe).forEach((s) => {
      s.onRenderHeaderRow && (n.props = s.onRenderHeaderRow.call(this, n, o));
    }), n.props));
    O(this, ui, (n, o, s) => {
      const { row: r, col: l } = o;
      n[0] = this.getCellValue(r, l);
      const a = r.id === "HEADER" ? "onRenderHeaderCell" : "onRenderCell";
      return l.setting[a] && (n = l.setting[a].call(this, n, o, s)), this.options[a] && (n = this.options[a].call(this, n, o, s)), b(this, xe).forEach((_) => {
        _[a] && (n = _[a].call(this, n, o, s));
      }), n;
    });
    O(this, di, (n, o) => {
      o === "horz" ? this.scroll({ scrollLeft: n }) : this.scroll({ scrollTop: n });
    });
    O(this, Ol, (n) => {
      var a, _, d, i, h;
      const o = this.getPointerInfo(n);
      if (!o)
        return;
      const { rowID: s, colName: r, cellElement: l } = o;
      if (s === "HEADER")
        l && ((a = this.options.onHeaderCellClick) == null || a.call(this, n, { colName: r, element: l }), b(this, xe).forEach((f) => {
          var c;
          (c = f.onHeaderCellClick) == null || c.call(this, n, { colName: r, element: l });
        }));
      else {
        const { rowElement: f } = o, c = this.layout.visibleRows.find((u) => u.id === s);
        if (l) {
          if (((_ = this.options.onCellClick) == null ? void 0 : _.call(this, n, { colName: r, rowID: s, rowInfo: c, element: l, rowElement: f })) === !0)
            return;
          for (const u of b(this, xe))
            if (((d = u.onCellClick) == null ? void 0 : d.call(this, n, { colName: r, rowID: s, rowInfo: c, element: l, rowElement: f })) === !0)
              return;
        }
        if (((i = this.options.onRowClick) == null ? void 0 : i.call(this, n, { rowID: s, rowInfo: c, element: f })) === !0)
          return;
        for (const u of b(this, xe))
          if (((h = u.onRowClick) == null ? void 0 : h.call(this, n, { rowID: s, rowInfo: c, element: f })) === !0)
            return;
      }
    });
    O(this, Nl, (n) => {
      const o = n.key.toLowerCase();
      if (["pageup", "pagedown", "home", "end"].includes(o))
        return !this.scroll({ to: o.replace("page", "") });
    });
    H(this, Qn, n.id ?? `dtable-${_k(10)}`), this.state = { scrollTop: 0, scrollLeft: 0, renderCount: 0 }, H(this, Ot, Object.freeze(bk(n.plugins))), b(this, Ot).forEach((o) => {
      var a;
      const { methods: s, data: r, state: l } = o;
      s && Object.entries(s).forEach(([_, d]) => {
        typeof d == "function" && Object.assign(this, { [_]: d.bind(this) });
      }), r && Object.assign(b(this, eo), r.call(this)), l && Object.assign(this.state, l.call(this)), (a = o.onCreate) == null || a.call(this, o);
    });
  }
  get options() {
    var n;
    return ((n = b(this, qe)) == null ? void 0 : n.options) || b(this, tt) || uu();
  }
  get plugins() {
    return b(this, xe);
  }
  get layout() {
    return b(this, qe);
  }
  get id() {
    return b(this, Qn);
  }
  get data() {
    return b(this, eo);
  }
  get parent() {
    var n;
    return this.props.parent ?? ((n = this.ref.current) == null ? void 0 : n.parentElement);
  }
  componentWillReceiveProps() {
    H(this, tt, void 0);
  }
  componentDidMount() {
    if (b(this, Dt) ? this.forceUpdate() : z(this, fi, Ba).call(this), b(this, xe).forEach((n) => {
      let { events: o } = n;
      o && (typeof o == "function" && (o = o.call(this)), Object.entries(o).forEach(([s, r]) => {
        r && this.on(s, r);
      }));
    }), this.on("click", b(this, Ol)), this.on("keydown", b(this, Nl)), this.options.responsive) {
      if (typeof ResizeObserver < "u") {
        const { parent: n } = this;
        if (n) {
          const o = new ResizeObserver(this.updateLayout);
          o.observe(n), H(this, ci, o);
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
    b(this, Dt) ? z(this, fi, Ba).call(this) : b(this, xe).forEach((n) => {
      var o;
      (o = n.onUpdated) == null || o.call(this);
    });
  }
  componentWillUnmount() {
    var o;
    (o = b(this, ci)) == null || o.disconnect();
    const { current: n } = this.ref;
    if (n)
      for (const s of b(this, nt).keys())
        s.startsWith("window_") ? window.removeEventListener(s.replace("window_", ""), b(this, to)) : s.startsWith("document_") ? document.removeEventListener(s.replace("document_", ""), b(this, no)) : n.removeEventListener(s, b(this, yt));
    b(this, xe).forEach((s) => {
      var r;
      (r = s.onUnmounted) == null || r.call(this);
    }), b(this, Ot).forEach((s) => {
      var r;
      (r = s.onDestory) == null || r.call(this);
    }), H(this, eo, {}), b(this, nt).clear();
  }
  on(n, o, s) {
    var l;
    s && (n = `${s}_${n}`);
    const r = b(this, nt).get(n);
    r ? r.push(o) : (b(this, nt).set(n, [o]), n.startsWith("window_") ? window.addEventListener(n.replace("window_", ""), b(this, to)) : n.startsWith("document_") ? document.addEventListener(n.replace("document_", ""), b(this, no)) : (l = this.ref.current) == null || l.addEventListener(n, b(this, yt)));
  }
  off(n, o, s) {
    var a;
    s && (n = `${s}_${n}`);
    const r = b(this, nt).get(n);
    if (!r)
      return;
    const l = r.indexOf(o);
    l >= 0 && r.splice(l, 1), r.length || (b(this, nt).delete(n), n.startsWith("window_") ? window.removeEventListener(n.replace("window_", ""), b(this, to)) : n.startsWith("document_") ? document.removeEventListener(n.replace("document_", ""), b(this, no)) : (a = this.ref.current) == null || a.removeEventListener(n, b(this, yt)));
  }
  emitCustomEvent(n, o) {
    b(this, yt).call(this, o instanceof Event ? o : new CustomEvent(n, { detail: o }), n);
  }
  scroll(n, o) {
    const { scrollLeft: s, scrollTop: r, rowsHeightTotal: l, rowsHeight: a, rowHeight: _, colsInfo: { scrollWidth: d, scrollColsWidth: i } } = this.layout, { to: h } = n;
    let { scrollLeft: f, scrollTop: c } = n;
    if (h === "up" || h === "down")
      c = r + (h === "down" ? 1 : -1) * Math.floor(a / _) * _;
    else if (h === "left" || h === "right")
      f = s + (h === "right" ? 1 : -1) * d;
    else if (h === "home")
      c = 0;
    else if (h === "end")
      c = l - a;
    else if (h === "left-begin")
      f = 0;
    else if (h === "right-end")
      f = i - d;
    else {
      const { offsetLeft: y, offsetTop: p } = n;
      typeof y == "number" && (f = s + y), typeof p == "number" && (f = r + p);
    }
    const u = {};
    return typeof f == "number" && (f = Math.max(0, Math.min(f, i - d)), f !== s && (u.scrollLeft = f)), typeof c == "number" && (c = Math.max(0, Math.min(c, l - a)), c !== r && (u.scrollTop = c)), Object.keys(u).length ? (this.setState(u, () => {
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
    const { cellValueGetter: a } = this.options;
    return a && (l = a.call(this, s, r, l)), l;
  }
  getRowInfoByIndex(n) {
    return this.layout.rows[n];
  }
  update(n = {}, o) {
    if (!b(this, tt))
      return;
    typeof n == "function" && (o = n, n = {});
    const { dirtyType: s, state: r } = n;
    if (s === "layout")
      H(this, qe, void 0);
    else if (s === "options") {
      if (H(this, tt, void 0), !b(this, qe))
        return;
      H(this, qe, void 0);
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
    const l = s == null ? void 0 : s.getAttribute("data-col"), a = r == null ? void 0 : r.getAttribute("data-id");
    if (!(typeof l != "string" || typeof a != "string"))
      return {
        cellElement: s,
        rowElement: r,
        colName: l,
        rowID: a,
        target: o
      };
  }
  i18n(n, o, s) {
    return hi(b(this, _i), n, o, s, this.options.lang) ?? `{i18n:${n}}`;
  }
  render() {
    const n = z(this, Hl, mv).call(this), { className: o, rowHover: s, colHover: r, cellHover: l, bordered: a, striped: _, scrollbarHover: d } = this.options, i = { width: n == null ? void 0 : n.width, height: n == null ? void 0 : n.height }, h = ["dtable", o, {
      "dtable-hover-row": s,
      "dtable-hover-col": r,
      "dtable-hover-cell": l,
      "dtable-bordered": a,
      "dtable-striped": _,
      "dtable-scrolled-down": ((n == null ? void 0 : n.scrollTop) ?? 0) > 0,
      "scrollbar-hover": d
    }], f = [];
    return n && b(this, xe).forEach((c) => {
      var y;
      const u = (y = c.onRender) == null ? void 0 : y.call(this, n);
      u && (u.style && Object.assign(i, u.style), u.className && h.push(u.className), u.children && f.push(u.children));
    }), /* @__PURE__ */ X(
      "div",
      {
        id: b(this, Qn),
        className: j(h),
        style: i,
        ref: this.ref,
        tabIndex: -1,
        children: [
          n && z(this, El, _v).call(this, n),
          n && z(this, Al, fv).call(this, n),
          n && z(this, Ml, uv).call(this, n),
          n && z(this, Tl, dv).call(this, n)
        ]
      }
    );
  }
}, yn = new WeakMap(), Qn = new WeakMap(), Dt = new WeakMap(), tt = new WeakMap(), Ot = new WeakMap(), xe = new WeakMap(), qe = new WeakMap(), nt = new WeakMap(), eo = new WeakMap(), ci = new WeakMap(), _i = new WeakMap(), yt = new WeakMap(), to = new WeakMap(), no = new WeakMap(), El = new WeakSet(), _v = function(n) {
  const { header: o, colsInfo: s, headerHeight: r, scrollLeft: l } = n;
  if (!o)
    return null;
  if (o === !0)
    return /* @__PURE__ */ X(
      vk,
      {
        scrollLeft: l,
        height: r,
        onRenderCell: b(this, ui),
        onRenderRow: b(this, Dl),
        ...s
      }
    );
  const a = Array.isArray(o) ? o : [o];
  return /* @__PURE__ */ X(
    xa,
    {
      className: "dtable-header",
      style: { height: r },
      renders: a,
      generateArgs: [n],
      generatorThis: this
    }
  );
}, Al = new WeakSet(), fv = function(n) {
  const { headerHeight: o, rowsHeight: s, visibleRows: r, rowHeight: l, colsInfo: a, scrollLeft: _, scrollTop: d } = n;
  return /* @__PURE__ */ X(
    gk,
    {
      top: o,
      height: s,
      rows: r,
      rowHeight: l,
      scrollLeft: _,
      scrollTop: d,
      onRenderCell: b(this, ui),
      onRenderRow: b(this, Ll),
      ...a
    }
  );
}, Ml = new WeakSet(), uv = function(n) {
  const { footer: o } = n;
  if (!o)
    return null;
  const s = typeof o == "function" ? o.call(this, n) : Array.isArray(o) ? o : [o];
  return /* @__PURE__ */ X(
    xa,
    {
      className: "dtable-footer",
      style: { height: n.footerHeight, top: n.rowsHeight + n.headerHeight },
      renders: s,
      generateArgs: [n],
      generatorThis: this,
      generators: n.footerGenerators
    }
  );
}, Tl = new WeakSet(), dv = function(n) {
  const o = [], { scrollLeft: s, colsInfo: r, scrollTop: l, rowsHeight: a, rowsHeightTotal: _, footerHeight: d } = n, { scrollColsWidth: i, scrollWidth: h } = r, { scrollbarSize: f = 12, horzScrollbarPos: c } = this.options;
  return i > h && o.push(
    /* @__PURE__ */ X(
      _u,
      {
        type: "horz",
        scrollPos: s,
        scrollSize: i,
        clientSize: h,
        onScroll: b(this, di),
        left: r.fixedLeftWidth,
        bottom: (c === "inside" ? 0 : -f) + d,
        size: f,
        wheelContainer: this.ref
      },
      "horz"
    )
  ), _ > a && o.push(
    /* @__PURE__ */ X(
      _u,
      {
        type: "vert",
        scrollPos: l,
        scrollSize: _,
        clientSize: a,
        onScroll: b(this, di),
        right: 0,
        size: f,
        top: n.headerHeight,
        wheelContainer: this.ref
      },
      "vert"
    )
  ), o.length ? o : null;
}, fi = new WeakSet(), Ba = function() {
  var n;
  H(this, Dt, !1), (n = this.options.afterRender) == null || n.call(this), b(this, xe).forEach((o) => {
    var s;
    return (s = o.afterRender) == null ? void 0 : s.call(this);
  });
}, Ll = new WeakMap(), Dl = new WeakMap(), ui = new WeakMap(), di = new WeakMap(), Ol = new WeakMap(), Nl = new WeakMap(), Pl = new WeakSet(), hv = function() {
  if (b(this, tt))
    return !1;
  const o = { ...uu(), ...b(this, Ot).reduce((s, r) => {
    const { defaultOptions: l } = r;
    return l && Object.assign(s, l), s;
  }, {}), ...this.props };
  return H(this, tt, o), H(this, xe, b(this, Ot).reduce((s, r) => {
    const { when: l, options: a } = r;
    return (!l || l(o)) && (s.push(r), a && Object.assign(o, typeof a == "function" ? a.call(this, o) : a)), s;
  }, [])), H(this, _i, [this.options.i18n, ...this.plugins.map((s) => s.i18n)].filter(Boolean)), !0;
}, Rl = new WeakSet(), pv = function() {
  var Y, J;
  const { plugins: n } = this;
  let o = b(this, tt);
  const s = {
    flex: /* @__PURE__ */ X("div", { style: "flex:auto" }),
    divider: /* @__PURE__ */ X("div", { style: "width:1px;margin:var(--space);background:var(--color-border);height:50%" })
  };
  n.forEach((W) => {
    var Q;
    const G = (Q = W.beforeLayout) == null ? void 0 : Q.call(this, o);
    G && (o = { ...o, ...G }), Object.assign(s, W.footer);
  });
  const { defaultColWidth: r, minColWidth: l, maxColWidth: a } = o, _ = [], d = [], i = [], h = {}, f = [], c = [];
  let u = 0, y = 0, p = 0;
  o.cols.forEach((W) => {
    if (W.hidden)
      return;
    const {
      name: G,
      type: Q = "",
      fixed: K = !1,
      flex: q = !1,
      width: ne = r,
      minWidth: be = l,
      maxWidth: $e = a,
      ..._n
    } = W, te = {
      name: G,
      type: Q,
      setting: {
        name: G,
        type: Q,
        fixed: K,
        flex: q,
        width: ne,
        minWidth: be,
        maxWidth: $e,
        ..._n
      },
      flex: K ? 0 : q === !0 ? 1 : typeof q == "number" ? q : 0,
      left: 0,
      width: fu(ne, be, $e),
      realWidth: 0,
      visible: !0,
      index: f.length
    };
    n.forEach((xn) => {
      var St, Sn;
      const Ze = (St = xn.colTypes) == null ? void 0 : St[Q];
      if (Ze) {
        const Cn = typeof Ze == "function" ? Ze(te) : Ze;
        Cn && Object.assign(te.setting, Cn);
      }
      (Sn = xn.onAddCol) == null || Sn.call(this, te);
    }), te.width = fu(te.setting.width ?? te.width, te.setting.minWidth ?? be, te.setting.maxWidth ?? $e), te.realWidth = te.realWidth || te.width, K === "left" ? (te.left = u, u += te.width, _.push(te)) : K === "right" ? (te.left = y, y += te.width, d.push(te)) : (te.left = p, p += te.width, i.push(te)), te.flex && c.push(te), f.push(te), h[te.name] = te;
  });
  let m = o.width, v = 0;
  const $ = u + p + y;
  if (typeof m == "function" && (m = m.call(this, $)), m === "auto")
    v = $;
  else if (m === "100%") {
    const { parent: W } = this;
    if (W)
      v = W.clientWidth;
    else {
      v = 0, H(this, Dt, !0);
      return;
    }
  } else
    v = m ?? 0;
  const { data: w, rowKey: C = "id", rowHeight: x } = o, E = [], g = (W, G, Q) => {
    var q, ne;
    const K = { data: Q ?? { [C]: W }, id: W, index: E.length, top: 0 };
    if (Q || (K.lazy = !0), E.push(K), ((q = o.onAddRow) == null ? void 0 : q.call(this, K, G)) !== !1) {
      for (const be of n)
        if (((ne = be.onAddRow) == null ? void 0 : ne.call(this, K, G)) === !1)
          return;
    }
  };
  if (typeof w == "number")
    for (let W = 0; W < w; W++)
      g(`${W}`, W);
  else
    Array.isArray(w) && w.forEach((W, G) => {
      typeof W == "object" ? g(`${W[C] ?? ""}`, G, W) : g(`${W ?? ""}`, G);
    });
  let k = E;
  const T = {};
  if (o.onAddRows) {
    const W = o.onAddRows.call(this, k);
    W && (k = W);
  }
  for (const W of n) {
    const G = (Y = W.onAddRows) == null ? void 0 : Y.call(this, k);
    G && (k = G);
  }
  k.forEach((W, G) => {
    T[W.id] = W, W.index = G, W.top = W.index * x;
  });
  const { header: U, footer: B } = o, L = U ? o.headerHeight || x : 0, A = B ? o.footerHeight || x : 0;
  let S = o.height, D = 0;
  const M = k.length * x, R = L + A + M;
  if (typeof S == "function" && (S = S.call(this, R)), S === "auto")
    D = R;
  else if (typeof S == "object")
    D = Math.min(S.max, Math.max(S.min, R));
  else if (S === "100%") {
    const { parent: W } = this;
    if (W)
      D = W.clientHeight;
    else {
      D = 0, H(this, Dt, !0);
      return;
    }
  } else
    D = S;
  const P = D - L - A, I = v - u - y, V = {
    options: o,
    allRows: E,
    width: v,
    height: D,
    rows: k,
    rowsMap: T,
    rowHeight: x,
    rowsHeight: P,
    rowsHeightTotal: M,
    header: U,
    footer: B,
    footerGenerators: s,
    headerHeight: L,
    footerHeight: A,
    colsMap: h,
    colsList: f,
    flexCols: c,
    colsInfo: {
      fixedLeftCols: _,
      fixedRightCols: d,
      scrollCols: i,
      fixedLeftWidth: u,
      scrollWidth: I,
      scrollColsWidth: p,
      fixedRightWidth: y
    }
  }, F = (J = o.onLayout) == null ? void 0 : J.call(this, V);
  F && Object.assign(V, F), n.forEach((W) => {
    if (W.onLayout) {
      const G = W.onLayout.call(this, V);
      G && Object.assign(V, G);
    }
  }), H(this, qe, V);
}, Hl = new WeakSet(), mv = function() {
  (z(this, Pl, hv).call(this) || !b(this, qe)) && z(this, Rl, pv).call(this);
  const { layout: n } = this;
  if (!n)
    return;
  let { scrollLeft: o } = this.state;
  const { flexCols: s, colsInfo: { scrollCols: r, scrollWidth: l, scrollColsWidth: a } } = n;
  if (s.length) {
    const $ = l - a;
    if ($ > 0) {
      const w = s.reduce((x, E) => x + E.flex, 0);
      let C = 0;
      s.forEach((x) => {
        const E = Math.min($ - C, Math.ceil($ * (x.flex / w)));
        x.realWidth = E + x.width, C += x.realWidth;
      });
    } else
      s.forEach((w) => {
        w.realWidth = w.width;
      });
  }
  o = Math.min(Math.max(0, a - l), o);
  let _ = 0;
  r.forEach(($) => {
    $.left = _, _ += $.realWidth, $.visible = $.left + $.realWidth >= o && $.left <= o + l;
  });
  const { rowsHeightTotal: d, rowsHeight: i, rows: h, rowHeight: f } = n, c = Math.min(Math.max(0, d - i), this.state.scrollTop), u = Math.floor(c / f), y = c + i, p = Math.min(h.length, Math.ceil(y / f)), m = [], { rowDataGetter: v } = this.options;
  for (let $ = u; $ < p; $++) {
    const w = h[$];
    w.lazy && v && (w.data = v([w.id])[0], w.lazy = !1), m.push(w);
  }
  return n.visibleRows = m, n.scrollTop = c, n.scrollLeft = o, n;
}, N(Ei, "addPlugin", lv), N(Ei, "removePlugin", av), Ei);
function du(e, t) {
  t !== void 0 ? e.data.hoverCol = t : t = e.data.hoverCol;
  const { current: n } = e.ref;
  if (!n)
    return;
  const o = "dtable-col-hover";
  n.querySelectorAll(`.${o}`).forEach((s) => s.classList.remove(o)), typeof t == "string" && t.length && n.querySelectorAll(`.dtable-cell[data-col="${t}"]`).forEach((s) => s.classList.add(o));
}
const $k = {
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
      du(this, o);
    },
    mouseleave() {
      du(this, !1);
    }
  }
}, kk = vo($k, { buildIn: !0 });
function xk(e, t) {
  var l, a;
  typeof e == "boolean" && (t = e, e = void 0);
  const n = this.state.checkedRows, o = {}, { canRowCheckable: s } = this.options, r = (_, d) => {
    s && !s.call(this, _) || !!n[_] === d || (d ? n[_] = !0 : delete n[_], o[_] = d);
  };
  if (e === void 0 ? (t === void 0 && (t = !vv.call(this)), (l = this.layout) == null || l.allRows.forEach(({ id: _ }) => {
    r(_, !!t);
  })) : (Array.isArray(e) || (e = [e]), e.forEach((_) => {
    r(_, t ?? !n[_]);
  })), Object.keys(o).length) {
    const _ = (a = this.options.beforeCheckRows) == null ? void 0 : a.call(this, e, o, n);
    _ && Object.keys(_).forEach((d) => {
      _[d] ? n[d] = !0 : delete n[d];
    }), this.setState({ checkedRows: { ...n } }, () => {
      var d;
      (d = this.options.onCheckChange) == null || d.call(this, o);
    });
  }
  return o;
}
function Sk(e) {
  return this.state.checkedRows[e] ?? !1;
}
function vv() {
  var n, o;
  const e = this.getChecks().length, { canRowCheckable: t } = this.options;
  return t ? e === ((n = this.layout) == null ? void 0 : n.allRows.reduce((s, r) => s + (t.call(this, r.id) ? 1 : 0), 0)) : e === ((o = this.layout) == null ? void 0 : o.allRows.length);
}
function Ck() {
  return Object.keys(this.state.checkedRows);
}
const Ek = {
  name: "checkable",
  defaultOptions: { checkable: !0 },
  when: (e) => !!e.checkable,
  state() {
    return { checkedRows: {} };
  },
  methods: {
    toggleCheckRows: xk,
    isRowChecked: Sk,
    isAllRowChecked: vv,
    getChecks: Ck
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
        /* @__PURE__ */ X("div", { style: { padding: "0 calc(3 * var(--space))", display: "flex", alignItems: "center" }, onClick: () => this.toggleCheckRows(), children: /* @__PURE__ */ X("input", { type: "checkbox", checked: e }) })
      ];
    },
    checkedInfo(e, t) {
      const n = this.getChecks().length, o = [];
      return n && o.push(this.i18n("checkedCountInfo", { selected: n })), o.push(this.i18n("totalCountInfo", { total: t.allRows.length })), [
        /* @__PURE__ */ X("div", { children: o.join(", ") })
      ];
    }
  },
  onRenderCell(e, { row: t, col: n }) {
    var a;
    const { id: o } = t, { canRowCheckable: s } = this.options;
    if (s && !s.call(this, o))
      return e;
    const { checkbox: r } = n.setting;
    if (typeof r == "function" ? r.call(this, o) : r) {
      const _ = this.isRowChecked(o), d = ((a = this.options.checkboxRender) == null ? void 0 : a.call(this, _, o)) ?? /* @__PURE__ */ X("input", { type: "checkbox", checked: _ });
      e.unshift(d), e.push({ className: "has-checkbox" });
    }
    return e;
  },
  onRenderHeaderCell(e, { row: t, col: n }) {
    var l;
    const { id: o } = t, { checkbox: s } = n.setting;
    if (typeof s == "function" ? s.call(this, o) : s) {
      const a = this.isAllRowChecked(), _ = ((l = this.options.checkboxRender) == null ? void 0 : l.call(this, a, o)) ?? /* @__PURE__ */ X("input", { type: "checkbox", checked: a });
      e.unshift(_), e.push({ className: "has-checkbox" });
    }
    return e;
  },
  onRenderRow({ props: e, row: t }) {
    if (this.isRowChecked(t.id))
      return { className: j(e.className, "is-checked") };
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
}, Ak = vo(Ek);
var gv = /* @__PURE__ */ ((e) => (e.unknown = "", e.collapsed = "collapsed", e.expanded = "expanded", e.hidden = "hidden", e.normal = "normal", e))(gv || {});
function Fa(e) {
  const t = this.data.nestedMap.get(e);
  if (!t || t.state !== "")
    return t ?? { state: "normal", level: -1 };
  if (!t.parent && !t.children)
    return t.state = "normal", t;
  const n = this.state.collapsedRows, o = t.children && n && n[e];
  let s = !1, { parent: r } = t;
  for (; r; ) {
    const l = Fa.call(this, r);
    if (l.state !== "expanded") {
      s = !0;
      break;
    }
    r = l.parent;
  }
  return t.state = s ? "hidden" : o ? "collapsed" : t.children ? "expanded" : "normal", t.level = t.parent ? Fa.call(this, t.parent).level + 1 : 0, t;
}
function Mk(e, t) {
  let n = this.state.collapsedRows ?? {};
  const { nestedMap: o } = this.data;
  if (e === "HEADER")
    if (t === void 0 && (t = !yv.call(this)), t) {
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
function yv() {
  const e = this.data.nestedMap.values();
  for (const t of e)
    if (t.state === "expanded")
      return !1;
  return !0;
}
function bv(e, t = 0, n, o = 0) {
  var s;
  n || (n = [...e.keys()]);
  for (const r of n) {
    const l = e.get(r);
    l && (l.level === o && (l.order = t++), (s = l.children) != null && s.length && (t = bv(e, t, l.children, o + 1)));
  }
  return t;
}
function wv(e, t, n, o) {
  const s = e.getNestedRowInfo(t);
  return !s || s.state === "" || !s.children || s.children.forEach((r) => {
    o[r] = n, wv(e, r, n, o);
  }), s;
}
function $v(e, t, n, o, s) {
  var a;
  const r = e.getNestedRowInfo(t);
  if (!r || r.state === "")
    return;
  ((a = r.children) == null ? void 0 : a.every((_) => {
    const d = !!(o[_] !== void 0 ? o[_] : s[_]);
    return n === d;
  })) && (o[t] = n), r.parent && $v(e, r.parent, n, o, s);
}
const Tk = {
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
        const l = wv(this, s, r, o);
        l != null && l.parent && $v(this, l.parent, r, o, n);
      }), o;
    }
  },
  when: (e) => !!e.nested,
  data() {
    return { nestedMap: /* @__PURE__ */ new Map() };
  },
  methods: {
    toggleRow: Mk,
    isAllCollapsed: yv,
    getNestedRowInfo: Fa
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
    ), bv(this.data.nestedMap), e.sort((t, n) => {
      const o = this.getNestedRowInfo(t.id), s = this.getNestedRowInfo(n.id), r = (o.order ?? 0) - (s.order ?? 0);
      return r === 0 ? t.index - n.index : r;
    }), e;
  },
  onRenderCell(e, { col: t, row: n }) {
    var a;
    const { id: o, data: s } = n, { nestedToggle: r } = t.setting, l = this.getNestedRowInfo(o);
    if (r && (l.children || l.parent) && e.unshift(((a = this.options.onRenderNestedToggle) == null ? void 0 : a.call(this, l, o, t, s)) ?? /* @__PURE__ */ X("a", { role: "button", className: `dtable-nested-toggle state${l.children ? "" : " is-no-child"}`, children: /* @__PURE__ */ X("span", { className: "toggle-icon" }) })), l.level) {
      let { nestedIndent: _ = r } = t.setting;
      _ && (_ === !0 && (_ = this.options.nestedIndent ?? 12), e.unshift(/* @__PURE__ */ X("div", { className: "dtable-nested-indent", style: { width: _ * l.level + "px" } })));
    }
    return e;
  },
  onRenderHeaderCell(e, { row: t, col: n }) {
    var s;
    const { id: o } = t;
    return n.setting.nestedToggle && e.unshift(((s = this.options.onRenderNestedToggle) == null ? void 0 : s.call(this, void 0, o, n, void 0)) ?? /* @__PURE__ */ X("a", { type: "button", className: "dtable-nested-toggle state", children: /* @__PURE__ */ X("span", { className: "toggle-icon" }) })), e;
  },
  onRenderRow({ props: e, row: t }) {
    const n = this.getNestedRowInfo(t.id);
    return {
      className: j(e.className, `is-${n.state}`),
      "data-parent": n.parent
    };
  },
  onRenderHeaderRow({ props: e }) {
    return e.className = j(e.className, `is-${this.isAllCollapsed() ? "collapsed" : "expanded"}`), e;
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
}, Lk = vo(Tk);
const Dk = {
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
        return e[0] = /* @__PURE__ */ X("a", { href: r, ...s, children: e[0] }), e;
      }
    },
    avatar: {
      onRenderCell(e, { col: t, row: n }) {
        const { data: o } = n, { avatarWithName: s, avatarClass: r = "size-xs circle", avatarKey: l = `${t.name}Avatar` } = t.setting, a = /* @__PURE__ */ X("div", { className: `avatar ${r} flex-none`, children: /* @__PURE__ */ X("img", { src: o ? o[l] : "" }) });
        return s ? e.unshift(a) : e[0] = a, e;
      }
    },
    circleProgress: {
      align: "center",
      onRenderCell(e, { col: t }) {
        const { circleSize: n = 24, circleBorderSize: o = 1, circleBgColor: s = "var(--color-border)", circleColor: r = "var(--color-success-500)" } = t.setting, l = (n - o) / 2, a = n / 2, _ = e[0];
        return e[0] = /* @__PURE__ */ X("svg", { width: n, height: n, children: [
          /* @__PURE__ */ X("circle", { cx: a, cy: a, r: l, "stroke-width": o, stroke: s, fill: "transparent" }),
          /* @__PURE__ */ X("circle", { cx: a, cy: a, r: l, "stroke-width": o, stroke: r, fill: "transparent", "stroke-linecap": "round", "stroke-dasharray": Math.PI * l * 2, "stroke-dashoffset": Math.PI * l * 2 * (100 - _) / 100, style: { transformOrigin: "center", transform: "rotate(-90deg)" } }),
          /* @__PURE__ */ X("text", { x: a, y: a + o, "dominant-baseline": "middle", "text-anchor": "middle", style: { fontSize: `${l}px` }, children: Math.round(_) })
        ] }), e;
      }
    },
    actionButtons: {
      onRenderCell(e, { col: t, row: n }) {
        var a;
        const o = (a = n.data) == null ? void 0 : a[t.name];
        if (!o)
          return e;
        const { actionBtnTemplate: s = '<button type="button" data-action="{action}" title="{title}" class="{className}"><i class="icon icon-{icon}"></i></button>', actionBtnData: r = {}, actionBtnClass: l = "btn text-primary square size-sm ghost" } = t.setting;
        return [{
          html: o.map((_) => {
            typeof _ == "string" && (_ = { action: _ });
            const d = r[_.action];
            return d && (_ = { className: l, ...d, ..._ }), Le(s, _);
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
        return typeof o == "function" ? e[0] = s === "html" ? { html: o(r) } : o(r) : s === "datetime" ? e[0] = Ra(r, o) : s === "html" ? e[0] = { html: Le(o, r) } : e[0] = Le(o, r), e;
      }
    }
  }
}, Ok = vo(Dk, { buildIn: !0 }), Nk = {
  name: "sort-type",
  onRenderHeaderCell(e, { col: t }) {
    const { sortType: n } = t.setting;
    if (n) {
      const { sortLink: o = this.options.sortLink, sortAttrs: s } = t.setting, r = n === !0 ? "none" : n;
      if (e.push(
        /* @__PURE__ */ X("div", { className: `dtable-sort dtable-sort-${r}` }),
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
}, Pk = vo(Nk, { buildIn: !0 }), Rk = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  NestedRowState: gv,
  checkable: Ak,
  colHover: kk,
  nested: Lk,
  rich: Ok,
  sortType: Pk
}, Symbol.toStringTag, { value: "Module" }));
class Eo extends Pe {
}
N(Eo, "NAME", "dtable"), N(Eo, "Component", wk), N(Eo, "definePlugin", vo), N(Eo, "removePlugin", av), N(Eo, "plugins", Rk);
var We;
class No extends Be {
  constructor() {
    super(...arguments);
    O(this, We, void 0);
  }
  init() {
    const { element: n } = this;
    n !== document.body && !n.hasAttribute("data-toggle") && n.setAttribute("data-toggle", "tab");
  }
  showTarget() {
    const n = this.element.getAttribute("href") || this.element.dataset.target || this.element.dataset.tab;
    n != null && n.startsWith("#") && H(this, We, document.querySelector(n)), this.addActive(this.element.closest(`.${this.constructor.NAV_CLASS}`), this.element.parentElement), b(this, We) && (this.addActive(b(this, We).parentElement, b(this, We)), b(this, We).dispatchEvent(new CustomEvent("show.zui3.tab")));
  }
  show() {
    const n = this.element.getAttribute("href") || this.element.dataset.target || this.element.dataset.tab;
    n != null && n.startsWith("#") && H(this, We, document.querySelector(n)), b(this, We) && (this.addActive(b(this, We).parentElement, b(this, We)), this.addActive(this.element.closest(`.${this.constructor.NAV_CLASS}`), this.element.parentElement));
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
We = new WeakMap(), N(No, "NAME", "NavTabs"), N(No, "NAV_CLASS", "nav-tabs"), N(No, "EVENTS", !0), N(No, "TOGGLE_SELECTOR", '[data-toggle="tab"]');
document.addEventListener("click", (e) => {
  e.target instanceof HTMLElement && (e.target.dataset.toggle === "tab" || e.target.getAttribute("data-tab")) && (e.preventDefault(), new No(e.target).showTarget());
});
export {
  Zc as ActionMenu,
  Qc as ActionMenuNested,
  O_ as Avatar,
  N_ as BtnGroup,
  i_ as Button,
  Te as ContextMenu,
  Eo as DTable,
  ot as Datepicker,
  Ee as Dropdown,
  Va as EventBus,
  s_ as Menu,
  y_ as Messager,
  Me as Modal,
  nr as ModalTrigger,
  vf as Nav,
  No as NavTabs,
  bf as Pager,
  Ef as Picker,
  S_ as ProgressCircle,
  pt as TIME_DAY,
  rt as Timepicker,
  Uf as Toolbar,
  it as Tooltip,
  Jf as VirtualGrid,
  Hv as addI18nMap,
  Yk as browser,
  yf as calculateTimestamp,
  Ik as convertBytes,
  Ne as createDate,
  Wk as formatBytes,
  Ra as formatDate,
  nx as formatDateSpan,
  Le as formatString,
  Pv as getLangCode,
  ox as getTimeBeforeDesc,
  hi as i18n,
  tx as isDBY,
  ca as isObject,
  mi as isSameDay,
  B0 as isSameMonth,
  Zk as isSameWeek,
  gf as isSameYear,
  Jk as isToday,
  ex as isTomorrow,
  Qk as isYesterday,
  ka as mergeDeep,
  $a as nativeEvents,
  Rv as setLangCode,
  Tg as store
};
