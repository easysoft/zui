var op = Object.defineProperty;
var ip = (e, t, n) => t in e ? op(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var A = (e, t, n) => (ip(e, typeof t != "symbol" ? t + "" : t, n), n), Qi = (e, t, n) => {
  if (!t.has(e))
    throw TypeError("Cannot " + n);
};
var w = (e, t, n) => (Qi(e, t, "read from private field"), n ? n.call(e) : t.get(e)), P = (e, t, n) => {
  if (t.has(e))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(e) : t.set(e, n);
}, H = (e, t, n, r) => (Qi(e, t, "write to private field"), r ? r.call(e, n) : t.set(e, n), n);
var ne = (e, t, n) => (Qi(e, t, "access private method"), n);
var Wi, re, $c, kc, sr, $a, Io = {}, xc = [], sp = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function Ht(e, t) {
  for (var n in t)
    e[n] = t[n];
  return e;
}
function Sc(e) {
  var t = e.parentNode;
  t && t.removeChild(e);
}
function ji(e, t, n) {
  var r, s, o, a = {};
  for (o in t)
    o == "key" ? r = t[o] : o == "ref" ? s = t[o] : a[o] = t[o];
  if (arguments.length > 2 && (a.children = arguments.length > 3 ? Wi.call(arguments, 2) : n), typeof e == "function" && e.defaultProps != null)
    for (o in e.defaultProps)
      a[o] === void 0 && (a[o] = e.defaultProps[o]);
  return bo(e, a, r, s, null);
}
function bo(e, t, n, r, s) {
  var o = { type: e, props: t, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: s == null ? ++$c : s };
  return s == null && re.vnode != null && re.vnode(o), o;
}
function ap() {
  return { current: null };
}
function Bi(e) {
  return e.children;
}
function wo(e, t) {
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
function ka(e) {
  (!e.__d && (e.__d = !0) && sr.push(e) && !Uo.__r++ || $a !== re.debounceRendering) && (($a = re.debounceRendering) || setTimeout)(Uo);
}
function Uo() {
  for (var e; Uo.__r = sr.length; )
    e = sr.sort(function(t, n) {
      return t.__v.__b - n.__v.__b;
    }), sr = [], e.some(function(t) {
      var n, r, s, o, a, c;
      t.__d && (a = (o = (n = t).__v).__e, (c = n.__P) && (r = [], (s = Ht({}, o)).__v = o.__v + 1, ks(c, o, s, n.__n, c.ownerSVGElement !== void 0, o.__h != null ? [a] : null, r, a == null ? Tr(o) : a, o.__h), Ac(r, o), o.__e != a && Ec(o)));
    });
}
function Cc(e, t, n, r, s, o, a, c, f, p) {
  var i, d, u, l, _, g, h, v = r && r.__k || xc, m = v.length;
  for (n.__k = [], i = 0; i < t.length; i++)
    if ((l = n.__k[i] = (l = t[i]) == null || typeof l == "boolean" ? null : typeof l == "string" || typeof l == "number" || typeof l == "bigint" ? bo(null, l, null, null, l) : Array.isArray(l) ? bo(Bi, { children: l }, null, null, null) : l.__b > 0 ? bo(l.type, l.props, l.key, l.ref ? l.ref : null, l.__v) : l) != null) {
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
      ks(e, l, u = u || Io, s, o, a, c, f, p), _ = l.__e, (d = l.ref) && u.ref != d && (h || (h = []), u.ref && h.push(u.ref, null, l), h.push(d, l.__c || _, l)), _ != null ? (g == null && (g = _), typeof l.type == "function" && l.__k === u.__k ? l.__d = f = Oc(l, f, e) : f = Mc(e, l, u, v, _, f), typeof n.type == "function" && (n.__d = f)) : f && u.__e == f && f.parentNode != e && (f = Tr(u));
    }
  for (n.__e = g, i = m; i--; )
    v[i] != null && Tc(v[i], v[i]);
  if (h)
    for (i = 0; i < h.length; i++)
      Dc(h[i], h[++i], h[++i]);
}
function Oc(e, t, n) {
  for (var r, s = e.__k, o = 0; s && o < s.length; o++)
    (r = s[o]) && (r.__ = e, t = typeof r.type == "function" ? Oc(r, t, n) : Mc(n, r, r, s, r.__e, t));
  return t;
}
function Mc(e, t, n, r, s, o) {
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
function lp(e, t, n, r, s) {
  var o;
  for (o in n)
    o === "children" || o === "key" || o in t || Fo(e, o, null, n[o], r);
  for (o in t)
    s && typeof t[o] != "function" || o === "children" || o === "key" || o === "value" || o === "checked" || n[o] === t[o] || Fo(e, o, t[o], n[o], r);
}
function xa(e, t, n) {
  t[0] === "-" ? e.setProperty(t, n) : e[t] = n == null ? "" : typeof n != "number" || sp.test(t) ? n : n + "px";
}
function Fo(e, t, n, r, s) {
  var o;
  e:
    if (t === "style")
      if (typeof n == "string")
        e.style.cssText = n;
      else {
        if (typeof r == "string" && (e.style.cssText = r = ""), r)
          for (t in r)
            n && t in n || xa(e.style, t, "");
        if (n)
          for (t in n)
            r && n[t] === r[t] || xa(e.style, t, n[t]);
      }
    else if (t[0] === "o" && t[1] === "n")
      o = t !== (t = t.replace(/Capture$/, "")), t = t.toLowerCase() in e ? t.toLowerCase().slice(2) : t.slice(2), e.l || (e.l = {}), e.l[t + o] = n, n ? r || e.addEventListener(t, o ? Ea : Sa, o) : e.removeEventListener(t, o ? Ea : Sa, o);
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
  this.l[e.type + !1](re.event ? re.event(e) : e);
}
function Ea(e) {
  this.l[e.type + !0](re.event ? re.event(e) : e);
}
function ks(e, t, n, r, s, o, a, c, f) {
  var p, i, d, u, l, _, g, h, v, m, k, b, E, $, S, y = t.type;
  if (t.constructor !== void 0)
    return null;
  n.__h != null && (f = n.__h, c = t.__e = n.__e, t.__h = null, o = [c]), (p = re.__b) && p(t);
  try {
    e:
      if (typeof y == "function") {
        if (h = t.props, v = (p = y.contextType) && r[p.__c], m = p ? v ? v.props.value : p.__ : r, n.__c ? g = (i = t.__c = n.__c).__ = i.__E : ("prototype" in y && y.prototype.render ? t.__c = i = new y(h, m) : (t.__c = i = new wo(h, m), i.constructor = y, i.render = fp), v && v.sub(i), i.props = h, i.state || (i.state = {}), i.context = m, i.__n = r, d = i.__d = !0, i.__h = [], i._sb = []), i.__s == null && (i.__s = i.state), y.getDerivedStateFromProps != null && (i.__s == i.state && (i.__s = Ht({}, i.__s)), Ht(i.__s, y.getDerivedStateFromProps(h, i.__s))), u = i.props, l = i.state, d)
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
        i.state = i.__s, i.getChildContext != null && (r = Ht(Ht({}, r), i.getChildContext())), d || i.getSnapshotBeforeUpdate == null || (_ = i.getSnapshotBeforeUpdate(u, l)), S = p != null && p.type === Bi && p.key == null ? p.props.children : p, Cc(e, Array.isArray(S) ? S : [S], t, n, r, s, o, a, c, f), i.base = t.__e, t.__h = null, i.__h.length && a.push(i), g && (i.__E = i.__ = null), i.__e = !1;
      } else
        o == null && t.__v === n.__v ? (t.__k = n.__k, t.__e = n.__e) : t.__e = cp(n.__e, t, n, r, s, o, a, f);
    (p = re.diffed) && p(t);
  } catch (x) {
    t.__v = null, (f || o != null) && (t.__e = c, t.__h = !!f, o[o.indexOf(c)] = null), re.__e(x, t, n);
  }
}
function Ac(e, t) {
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
function cp(e, t, n, r, s, o, a, c) {
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
    if (o = o && Wi.call(e.childNodes), p = (d = n.props || Io).dangerouslySetInnerHTML, i = u.dangerouslySetInnerHTML, !c) {
      if (o != null)
        for (d = {}, _ = 0; _ < e.attributes.length; _++)
          d[e.attributes[_].name] = e.attributes[_].value;
      (i || p) && (i && (p && i.__html == p.__html || i.__html === e.innerHTML) || (e.innerHTML = i && i.__html || ""));
    }
    if (lp(e, u, d, s, c), i)
      t.__k = [];
    else if (_ = t.props.children, Cc(e, Array.isArray(_) ? _ : [_], t, n, r, s && l !== "foreignObject", o, a, o ? o[0] : n.__k && Tr(n, 0), c), o != null)
      for (_ = o.length; _--; )
        o[_] != null && Sc(o[_]);
    c || ("value" in u && (_ = u.value) !== void 0 && (_ !== e.value || l === "progress" && !_ || l === "option" && _ !== d.value) && Fo(e, "value", _, d.value, !1), "checked" in u && (_ = u.checked) !== void 0 && _ !== e.checked && Fo(e, "checked", _, d.checked, !1));
  }
  return e;
}
function Dc(e, t, n) {
  try {
    typeof e == "function" ? e(t) : e.current = t;
  } catch (r) {
    re.__e(r, n);
  }
}
function Tc(e, t, n) {
  var r, s;
  if (re.unmount && re.unmount(e), (r = e.ref) && (r.current && r.current !== e.__e || Dc(r, null, t)), (r = e.__c) != null) {
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
      r[s] && Tc(r[s], t, n || typeof e.type != "function");
  n || e.__e == null || Sc(e.__e), e.__ = e.__e = e.__d = void 0;
}
function fp(e, t, n) {
  return this.constructor(e, n);
}
function up(e, t, n) {
  var r, s, o;
  re.__ && re.__(e, t), s = (r = typeof n == "function") ? null : n && n.__k || t.__k, o = [], ks(t, e = (!r && n || t).__k = ji(Bi, null, [e]), s || Io, Io, t.ownerSVGElement !== void 0, !r && n ? [n] : s ? null : t.firstChild ? Wi.call(t.childNodes) : null, o, !r && n ? n : s ? s.__e : t.firstChild, r), Ac(o, e);
}
Wi = xc.slice, re = { __e: function(e, t, n, r) {
  for (var s, o, a; t = t.__; )
    if ((s = t.__c) && !s.__)
      try {
        if ((o = s.constructor) && o.getDerivedStateFromError != null && (s.setState(o.getDerivedStateFromError(e)), a = s.__d), s.componentDidCatch != null && (s.componentDidCatch(e, r || {}), a = s.__d), a)
          return s.__E = s;
      } catch (c) {
        e = c;
      }
  throw e;
} }, $c = 0, kc = function(e) {
  return e != null && e.constructor === void 0;
}, wo.prototype.setState = function(e, t) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = Ht({}, this.state), typeof e == "function" && (e = e(Ht({}, n), this.props)), e && Ht(n, e), e != null && this.__v && (t && this._sb.push(t), ka(this));
}, wo.prototype.forceUpdate = function(e) {
  this.__v && (this.__e = !0, e && this.__h.push(e), ka(this));
}, wo.prototype.render = Bi, sr = [], Uo.__r = 0;
var ht;
class _p {
  constructor(t = "") {
    P(this, ht, void 0);
    typeof t == "object" ? H(this, ht, t) : H(this, ht, document.appendChild(document.createComment(t)));
  }
  on(t, n, r) {
    w(this, ht).addEventListener(t, n, r);
  }
  once(t, n, r) {
    w(this, ht).addEventListener(t, n, { once: !0, ...r });
  }
  off(t, n, r) {
    w(this, ht).removeEventListener(t, n, r);
  }
  emit(t) {
    return w(this, ht).dispatchEvent(t), t;
  }
}
ht = new WeakMap();
const os = /* @__PURE__ */ new Set([
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
class xs extends _p {
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
    return typeof t == "string" && (os.has(t) ? (t = new Event(t), Object.assign(t, { detail: n })) : t = new CustomEvent(t, { detail: n })), super.emit(xs.createEvent(t, n));
  }
  static createEvent(t, n) {
    return typeof t == "string" && (os.has(t) ? (t = new Event(t), Object.assign(t, { detail: n })) : t = new CustomEvent(t, { detail: n })), t;
  }
}
var vt, Jr, sn, ir;
class Ca extends xs {
  constructor(n = "", r) {
    super(n);
    P(this, sn);
    P(this, vt, /* @__PURE__ */ new Map());
    P(this, Jr, void 0);
    H(this, Jr, r == null ? void 0 : r.customEventSuffix);
  }
  on(n, r, s) {
    n = ne(this, sn, ir).call(this, n), super.on(n, r, s), w(this, vt).set(r, [n, s]);
  }
  off(n, r, s) {
    n = ne(this, sn, ir).call(this, n), super.off(n, r, s), w(this, vt).delete(r);
  }
  once(n, r, s) {
    n = ne(this, sn, ir).call(this, n);
    const o = (a) => {
      r(a), w(this, vt).delete(o);
    };
    super.once(n, o, s), w(this, vt).set(o, [n, s]);
  }
  emit(n, r) {
    return typeof n == "string" && (n = ne(this, sn, ir).call(this, n)), super.emit(n, r);
  }
  offAll() {
    Array.from(w(this, vt).entries()).forEach(([n, [r, s]]) => {
      super.off(r, n, s);
    }), w(this, vt).clear();
  }
}
vt = new WeakMap(), Jr = new WeakMap(), sn = new WeakSet(), ir = function(n) {
  const r = w(this, Jr);
  return os.has(n) || typeof r != "string" || n.endsWith(r) ? n : `${n}${r}`;
};
function pp(e, t) {
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
function dp(e, t, n) {
  const r = pp(e, t), s = r[r.length - 1];
  return s === void 0 ? n : s;
}
function es(e) {
  return !!e && typeof e == "object" && !Array.isArray(e);
}
function is(e, ...t) {
  if (!t.length)
    return e;
  const n = t.shift();
  if (es(e) && es(n))
    for (const r in n)
      es(n[r]) ? (e[r] || Object.assign(e, { [r]: {} }), is(e[r], n[r])) : Object.assign(e, { [r]: n[r] });
  return is(e, ...t);
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
var Ss = /* @__PURE__ */ ((e) => (e[e.B = 1] = "B", e[e.KB = 1024] = "KB", e[e.MB = 1048576] = "MB", e[e.GB = 1073741824] = "GB", e[e.TB = 1099511627776] = "TB", e))(Ss || {});
function uy(e, t = 2, n = "") {
  return Number.isNaN(e) ? "?KB" : (n || (e < 1024 ? n = "B" : e < 1048576 ? n = "KB" : e < 1073741824 ? n = "MB" : e < 1099511627776 ? n = "GB" : n = "TB"), (e / Ss[n]).toFixed(t) + n);
}
const _y = (e) => {
  const t = /^[0-9]*(B|KB|MB|GB|TB)$/;
  e = e.toUpperCase();
  const n = e.match(t);
  if (!n)
    return 0;
  const r = n[1];
  return e = e.replace(r, ""), Number.parseInt(e, 10) * Ss[r];
};
var bc, wc;
let Es = (wc = (bc = document.documentElement.getAttribute("lang")) == null ? void 0 : bc.toLowerCase()) != null ? wc : "zh_cn", Dt;
function hp() {
  return Es;
}
function vp(e) {
  Es = e.toLowerCase();
}
function mp(e, t) {
  Dt || (Dt = {}), typeof e == "string" && (e = { [e]: t != null ? t : {} }), is(Dt, e);
}
function co(e, t, n, r, s, o) {
  Array.isArray(e) ? Dt && e.unshift(Dt) : e = Dt ? [Dt, e] : [e], typeof n == "string" && (o = s, s = r, r = n, n = void 0);
  const a = s || Es;
  let c;
  for (const f of e) {
    if (!f)
      continue;
    const p = f[a];
    if (!p)
      continue;
    const i = o && f === Dt ? `${o}.${t}` : t;
    if (c = dp(p, i), c !== void 0)
      break;
  }
  return c === void 0 ? r : n ? Se(c, ...Array.isArray(n) ? n : [n]) : c;
}
co.addLang = mp;
co.getCode = hp;
co.setCode = vp;
function gp(e) {
  return Object.fromEntries(Object.entries(e).map(([t, n]) => {
    if (typeof n == "string")
      try {
        n = JSON.parse(n);
      } catch {
      }
    return [t, n];
  }));
}
var mt, wn, $e;
class Xt {
  constructor(t, n) {
    P(this, mt, void 0);
    P(this, wn, void 0);
    P(this, $e, void 0);
    var r;
    t = typeof t == "string" ? document.querySelector(t) : t, this.constructor.EVENTS && H(this, $e, new Ca(t, { customEventSuffix: `.${this.constructor.KEY}` })), H(this, mt, { ...this.constructor.DEFAULT, ...t instanceof HTMLElement ? gp(t.dataset) : null, ...n }), this.constructor.all.set(t, this), H(this, wn, t), this.init(), (r = w(this, $e)) == null || r.emit("inited", this);
  }
  get options() {
    return w(this, mt);
  }
  get element() {
    return w(this, wn);
  }
  get events() {
    return w(this, $e);
  }
  init() {
  }
  setOptions(t) {
    return t && Object.assign(w(this, mt), t), w(this, mt);
  }
  render(t) {
    this.setOptions(t);
  }
  destroy() {
    this.constructor.all.delete(w(this, wn)), w(this, $e) && (w(this, $e).emit("destroyed", this), w(this, $e).offAll());
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
    let r = Ca.createEvent(t, n);
    const s = `on${r.type.replace(`.${this.constructor.KEY}`, "")}`, o = w(this, mt)[s];
    return o && o(r) === !1 && (r.preventDefault(), r.stopPropagation()), r = (a = w(this, $e)) == null ? void 0 : a.emit(r), r;
  }
  i18n(t, n, r) {
    var s;
    return (s = co(w(this, mt).i18n, t, n, r, this.options.lang, this.constructor.NAME)) != null ? s : `{i18n:${t}}`;
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
mt = new WeakMap(), wn = new WeakMap(), $e = new WeakMap(), A(Xt, "EVENTS", !1), A(Xt, "DEFAULT", {}), A(Xt, "allComponents", /* @__PURE__ */ new Map());
class Ke extends Xt {
  constructor() {
    super(...arguments);
    A(this, "ref", ap());
  }
  get $() {
    return this.ref.current;
  }
  init() {
    requestAnimationFrame(() => this.render());
  }
  render(n) {
    const r = this.constructor.Component;
    up(/* @__PURE__ */ ji(r, {
      ref: this.ref,
      ...this.setOptions(n)
    }), this.element);
  }
}
var Cs, ce, Nc, Lc, ar, Oa, Pc = {}, Rc = [], yp = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function Wt(e, t) {
  for (var n in t)
    e[n] = t[n];
  return e;
}
function Hc(e) {
  var t = e.parentNode;
  t && t.removeChild(e);
}
function ye(e, t, n) {
  var r, s, o, a = {};
  for (o in t)
    o == "key" ? r = t[o] : o == "ref" ? s = t[o] : a[o] = t[o];
  if (arguments.length > 2 && (a.children = arguments.length > 3 ? Cs.call(arguments, 2) : n), typeof e == "function" && e.defaultProps != null)
    for (o in e.defaultProps)
      a[o] === void 0 && (a[o] = e.defaultProps[o]);
  return $o(e, a, r, s, null);
}
function $o(e, t, n, r, s) {
  var o = { type: e, props: t, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: s == null ? ++Nc : s };
  return s == null && ce.vnode != null && ce.vnode(o), o;
}
function bp() {
  return { current: null };
}
function Os(e) {
  return e.children;
}
function lr(e, t) {
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
function Ma(e) {
  (!e.__d && (e.__d = !0) && ar.push(e) && !zo.__r++ || Oa !== ce.debounceRendering) && ((Oa = ce.debounceRendering) || setTimeout)(zo);
}
function zo() {
  for (var e; zo.__r = ar.length; )
    e = ar.sort(function(t, n) {
      return t.__v.__b - n.__v.__b;
    }), ar = [], e.some(function(t) {
      var n, r, s, o, a, c;
      t.__d && (a = (o = (n = t).__v).__e, (c = n.__P) && (r = [], (s = Wt({}, o)).__v = o.__v + 1, Uc(c, o, s, n.__n, c.ownerSVGElement !== void 0, o.__h != null ? [a] : null, r, a == null ? Nr(o) : a, o.__h), $p(r, o), o.__e != a && Wc(o)));
    });
}
function jc(e, t, n, r, s, o, a, c, f, p) {
  var i, d, u, l, _, g, h, v = r && r.__k || Rc, m = v.length;
  for (n.__k = [], i = 0; i < t.length; i++)
    if ((l = n.__k[i] = (l = t[i]) == null || typeof l == "boolean" ? null : typeof l == "string" || typeof l == "number" || typeof l == "bigint" ? $o(null, l, null, null, l) : Array.isArray(l) ? $o(Os, { children: l }, null, null, null) : l.__b > 0 ? $o(l.type, l.props, l.key, l.ref ? l.ref : null, l.__v) : l) != null) {
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
      Uc(e, l, u = u || Pc, s, o, a, c, f, p), _ = l.__e, (d = l.ref) && u.ref != d && (h || (h = []), u.ref && h.push(u.ref, null, l), h.push(d, l.__c || _, l)), _ != null ? (g == null && (g = _), typeof l.type == "function" && l.__k === u.__k ? l.__d = f = Bc(l, f, e) : f = Ic(e, l, u, v, _, f), typeof n.type == "function" && (n.__d = f)) : f && u.__e == f && f.parentNode != e && (f = Nr(u));
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
function wp(e, t, n, r, s) {
  var o;
  for (o in n)
    o === "children" || o === "key" || o in t || Yo(e, o, null, n[o], r);
  for (o in t)
    s && typeof t[o] != "function" || o === "children" || o === "key" || o === "value" || o === "checked" || n[o] === t[o] || Yo(e, o, t[o], n[o], r);
}
function Aa(e, t, n) {
  t[0] === "-" ? e.setProperty(t, n) : e[t] = n == null ? "" : typeof n != "number" || yp.test(t) ? n : n + "px";
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
            n && t in n || Aa(e.style, t, "");
        if (n)
          for (t in n)
            r && n[t] === r[t] || Aa(e.style, t, n[t]);
      }
    else if (t[0] === "o" && t[1] === "n")
      o = t !== (t = t.replace(/Capture$/, "")), t = t.toLowerCase() in e ? t.toLowerCase().slice(2) : t.slice(2), e.l || (e.l = {}), e.l[t + o] = n, n ? r || e.addEventListener(t, o ? Ta : Da, o) : e.removeEventListener(t, o ? Ta : Da, o);
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
function Da(e) {
  this.l[e.type + !1](ce.event ? ce.event(e) : e);
}
function Ta(e) {
  this.l[e.type + !0](ce.event ? ce.event(e) : e);
}
function Uc(e, t, n, r, s, o, a, c, f) {
  var p, i, d, u, l, _, g, h, v, m, k, b, E, $, S, y = t.type;
  if (t.constructor !== void 0)
    return null;
  n.__h != null && (f = n.__h, c = t.__e = n.__e, t.__h = null, o = [c]), (p = ce.__b) && p(t);
  try {
    e:
      if (typeof y == "function") {
        if (h = t.props, v = (p = y.contextType) && r[p.__c], m = p ? v ? v.props.value : p.__ : r, n.__c ? g = (i = t.__c = n.__c).__ = i.__E : ("prototype" in y && y.prototype.render ? t.__c = i = new y(h, m) : (t.__c = i = new lr(h, m), i.constructor = y, i.render = xp), v && v.sub(i), i.props = h, i.state || (i.state = {}), i.context = m, i.__n = r, d = i.__d = !0, i.__h = [], i._sb = []), i.__s == null && (i.__s = i.state), y.getDerivedStateFromProps != null && (i.__s == i.state && (i.__s = Wt({}, i.__s)), Wt(i.__s, y.getDerivedStateFromProps(h, i.__s))), u = i.props, l = i.state, d)
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
        i.state = i.__s, i.getChildContext != null && (r = Wt(Wt({}, r), i.getChildContext())), d || i.getSnapshotBeforeUpdate == null || (_ = i.getSnapshotBeforeUpdate(u, l)), S = p != null && p.type === Os && p.key == null ? p.props.children : p, jc(e, Array.isArray(S) ? S : [S], t, n, r, s, o, a, c, f), i.base = t.__e, t.__h = null, i.__h.length && a.push(i), g && (i.__E = i.__ = null), i.__e = !1;
      } else
        o == null && t.__v === n.__v ? (t.__k = n.__k, t.__e = n.__e) : t.__e = kp(n.__e, t, n, r, s, o, a, f);
    (p = ce.diffed) && p(t);
  } catch (x) {
    t.__v = null, (f || o != null) && (t.__e = c, t.__h = !!f, o[o.indexOf(c)] = null), ce.__e(x, t, n);
  }
}
function $p(e, t) {
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
function kp(e, t, n, r, s, o, a, c) {
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
    if (o = o && Cs.call(e.childNodes), p = (d = n.props || Pc).dangerouslySetInnerHTML, i = u.dangerouslySetInnerHTML, !c) {
      if (o != null)
        for (d = {}, _ = 0; _ < e.attributes.length; _++)
          d[e.attributes[_].name] = e.attributes[_].value;
      (i || p) && (i && (p && i.__html == p.__html || i.__html === e.innerHTML) || (e.innerHTML = i && i.__html || ""));
    }
    if (wp(e, u, d, s, c), i)
      t.__k = [];
    else if (_ = t.props.children, jc(e, Array.isArray(_) ? _ : [_], t, n, r, s && l !== "foreignObject", o, a, o ? o[0] : n.__k && Nr(n, 0), c), o != null)
      for (_ = o.length; _--; )
        o[_] != null && Hc(o[_]);
    c || ("value" in u && (_ = u.value) !== void 0 && (_ !== e.value || l === "progress" && !_ || l === "option" && _ !== d.value) && Yo(e, "value", _, d.value, !1), "checked" in u && (_ = u.checked) !== void 0 && _ !== e.checked && Yo(e, "checked", _, d.checked, !1));
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
function xp(e, t, n) {
  return this.constructor(e, n);
}
Cs = Rc.slice, ce = { __e: function(e, t, n, r) {
  for (var s, o, a; t = t.__; )
    if ((s = t.__c) && !s.__)
      try {
        if ((o = s.constructor) && o.getDerivedStateFromError != null && (s.setState(o.getDerivedStateFromError(e)), a = s.__d), s.componentDidCatch != null && (s.componentDidCatch(e, r || {}), a = s.__d), a)
          return s.__E = s;
      } catch (c) {
        e = c;
      }
  throw e;
} }, Nc = 0, Lc = function(e) {
  return e != null && e.constructor === void 0;
}, lr.prototype.setState = function(e, t) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = Wt({}, this.state), typeof e == "function" && (e = e(Wt({}, n), this.props)), e && Wt(n, e), e != null && this.__v && (t && this._sb.push(t), Ma(this));
}, lr.prototype.forceUpdate = function(e) {
  this.__v && (this.__e = !0, e && this.__h.push(e), Ma(this));
}, lr.prototype.render = Os, ar = [], zo.__r = 0;
const I = (...e) => {
  const t = e.map((n) => Array.isArray(n) ? I(...n) : typeof n == "function" ? I(n()) : n !== null && typeof n == "object" ? Object.keys(n).filter((r) => {
    const s = n[r];
    return typeof s == "function" ? !!s() : !!s;
  }).join(" ") : n).filter((n) => typeof n == "string" && n.length);
  return t.length ? t.join(" ") : void 0;
};
function Sp({
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
function Yc({
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
function Ep({
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
function Cp({
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
function Op(e) {
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
      m != null && (typeof m == "object" && !kc(m) && ("html" in m || "__html" in m || "className" in m || "style" in m || "attrs" in m || "children" in m) ? m.html ? l.push(
        /* @__PURE__ */ ji("div", {
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
function ss({
  tag: e = "div",
  ...t
}) {
  const [n, r] = Op(t);
  return ji(e, n, ...r);
}
function Mp(e) {
  return /* @__PURE__ */ ye(ss, {
    ...e
  });
}
function Vc({
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
const ki = class extends lr {
  constructor() {
    super(...arguments);
    A(this, "ref", bp());
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
        if (Lc(h))
          return h;
        typeof h == "object" && Object.assign(o, h);
      }
    }
    const { type: c = "item", component: f, key: p = s, rootAttrs: i, rootClass: d, rootStyle: u, rootChildren: l, ..._ } = o, g = !f || typeof f == "string" ? this.constructor.ItemComponents && this.constructor.ItemComponents[c] || ki.ItemComponents[c] : f;
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
let yt = ki;
A(yt, "ItemComponents", {
  divider: Sp,
  item: Yc,
  heading: Ep,
  space: Cp,
  custom: Mp,
  basic: Vc
}), A(yt, "ROOT_TAG", "menu"), A(yt, "NAME", "action-menu");
class Na extends Ke {
}
A(Na, "NAME", "actionmenu"), A(Na, "Component", yt);
function La({
  ...e
}) {
  return /* @__PURE__ */ ye(Yc, {
    ...e
  });
}
var Zr, et, $n;
class Ms extends yt {
  constructor(n) {
    var r;
    super(n);
    P(this, Zr, /* @__PURE__ */ new Set());
    P(this, et, void 0);
    P(this, $n, (n, r, s) => {
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
    w(this, Zr).add(a);
    const c = this.isNestedMenuShow(a);
    if (c && (o.rootChildren = [
      o.rootChildren,
      this.renderNestedMenu(r)
    ], o.component = La), this.nestedTrigger === "hover")
      o.rootAttrs = {
        ...o.rootAttrs,
        onMouseEnter: w(this, $n).bind(this, a, !0),
        onMouseLeave: w(this, $n).bind(this, a, !1)
      };
    else if (this.nestedTrigger === "click") {
      const { onClick: i } = o;
      o.onClick = (d) => {
        w(this, $n).call(this, a, void 0, d), i == null || i(d);
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
    if (typeof o == "boolean" && (o === !0 ? o = [...w(this, Zr).values()].reduce((a, c) => (a[c] = !0, a), {}) : o = {}), r === void 0)
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
Zr = new WeakMap(), et = new WeakMap(), $n = new WeakMap(), A(Ms, "ItemComponents", {
  item: La
});
class Pa extends Ke {
}
A(Pa, "NAME", "actionmenunested"), A(Pa, "Component", Ms);
var As, fe, qc, cr, Ra, Gc = {}, Xc = [], Ap = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function jt(e, t) {
  for (var n in t)
    e[n] = t[n];
  return e;
}
function Kc(e) {
  var t = e.parentNode;
  t && t.removeChild(e);
}
function yn(e, t, n) {
  var r, s, o, a = {};
  for (o in t)
    o == "key" ? r = t[o] : o == "ref" ? s = t[o] : a[o] = t[o];
  if (arguments.length > 2 && (a.children = arguments.length > 3 ? As.call(arguments, 2) : n), typeof e == "function" && e.defaultProps != null)
    for (o in e.defaultProps)
      a[o] === void 0 && (a[o] = e.defaultProps[o]);
  return ko(e, a, r, s, null);
}
function ko(e, t, n, r, s) {
  var o = { type: e, props: t, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: s == null ? ++qc : s };
  return s == null && fe.vnode != null && fe.vnode(o), o;
}
function Ds(e) {
  return e.children;
}
function fr(e, t) {
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
function Jc(e) {
  var t, n;
  if ((e = e.__) != null && e.__c != null) {
    for (e.__e = e.__c.base = null, t = 0; t < e.__k.length; t++)
      if ((n = e.__k[t]) != null && n.__e != null) {
        e.__e = e.__c.base = n.__e;
        break;
      }
    return Jc(e);
  }
}
function Ha(e) {
  (!e.__d && (e.__d = !0) && cr.push(e) && !Vo.__r++ || Ra !== fe.debounceRendering) && ((Ra = fe.debounceRendering) || setTimeout)(Vo);
}
function Vo() {
  for (var e; Vo.__r = cr.length; )
    e = cr.sort(function(t, n) {
      return t.__v.__b - n.__v.__b;
    }), cr = [], e.some(function(t) {
      var n, r, s, o, a, c;
      t.__d && (a = (o = (n = t).__v).__e, (c = n.__P) && (r = [], (s = jt({}, o)).__v = o.__v + 1, tf(c, o, s, n.__n, c.ownerSVGElement !== void 0, o.__h != null ? [a] : null, r, a == null ? Lr(o) : a, o.__h), Tp(r, o), o.__e != a && Jc(o)));
    });
}
function Zc(e, t, n, r, s, o, a, c, f, p) {
  var i, d, u, l, _, g, h, v = r && r.__k || Xc, m = v.length;
  for (n.__k = [], i = 0; i < t.length; i++)
    if ((l = n.__k[i] = (l = t[i]) == null || typeof l == "boolean" ? null : typeof l == "string" || typeof l == "number" || typeof l == "bigint" ? ko(null, l, null, null, l) : Array.isArray(l) ? ko(Ds, { children: l }, null, null, null) : l.__b > 0 ? ko(l.type, l.props, l.key, l.ref ? l.ref : null, l.__v) : l) != null) {
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
      tf(e, l, u = u || Gc, s, o, a, c, f, p), _ = l.__e, (d = l.ref) && u.ref != d && (h || (h = []), u.ref && h.push(u.ref, null, l), h.push(d, l.__c || _, l)), _ != null ? (g == null && (g = _), typeof l.type == "function" && l.__k === u.__k ? l.__d = f = Qc(l, f, e) : f = ef(e, l, u, v, _, f), typeof n.type == "function" && (n.__d = f)) : f && u.__e == f && f.parentNode != e && (f = Lr(u));
    }
  for (n.__e = g, i = m; i--; )
    v[i] != null && rf(v[i], v[i]);
  if (h)
    for (i = 0; i < h.length; i++)
      nf(h[i], h[++i], h[++i]);
}
function Qc(e, t, n) {
  for (var r, s = e.__k, o = 0; s && o < s.length; o++)
    (r = s[o]) && (r.__ = e, t = typeof r.type == "function" ? Qc(r, t, n) : ef(n, r, r, s, r.__e, t));
  return t;
}
function ef(e, t, n, r, s, o) {
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
    o === "children" || o === "key" || o in t || qo(e, o, null, n[o], r);
  for (o in t)
    s && typeof t[o] != "function" || o === "children" || o === "key" || o === "value" || o === "checked" || n[o] === t[o] || qo(e, o, t[o], n[o], r);
}
function Wa(e, t, n) {
  t[0] === "-" ? e.setProperty(t, n) : e[t] = n == null ? "" : typeof n != "number" || Ap.test(t) ? n : n + "px";
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
            n && t in n || Wa(e.style, t, "");
        if (n)
          for (t in n)
            r && n[t] === r[t] || Wa(e.style, t, n[t]);
      }
    else if (t[0] === "o" && t[1] === "n")
      o = t !== (t = t.replace(/Capture$/, "")), t = t.toLowerCase() in e ? t.toLowerCase().slice(2) : t.slice(2), e.l || (e.l = {}), e.l[t + o] = n, n ? r || e.addEventListener(t, o ? Ba : ja, o) : e.removeEventListener(t, o ? Ba : ja, o);
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
function ja(e) {
  this.l[e.type + !1](fe.event ? fe.event(e) : e);
}
function Ba(e) {
  this.l[e.type + !0](fe.event ? fe.event(e) : e);
}
function tf(e, t, n, r, s, o, a, c, f) {
  var p, i, d, u, l, _, g, h, v, m, k, b, E, $, S, y = t.type;
  if (t.constructor !== void 0)
    return null;
  n.__h != null && (f = n.__h, c = t.__e = n.__e, t.__h = null, o = [c]), (p = fe.__b) && p(t);
  try {
    e:
      if (typeof y == "function") {
        if (h = t.props, v = (p = y.contextType) && r[p.__c], m = p ? v ? v.props.value : p.__ : r, n.__c ? g = (i = t.__c = n.__c).__ = i.__E : ("prototype" in y && y.prototype.render ? t.__c = i = new y(h, m) : (t.__c = i = new fr(h, m), i.constructor = y, i.render = Lp), v && v.sub(i), i.props = h, i.state || (i.state = {}), i.context = m, i.__n = r, d = i.__d = !0, i.__h = [], i._sb = []), i.__s == null && (i.__s = i.state), y.getDerivedStateFromProps != null && (i.__s == i.state && (i.__s = jt({}, i.__s)), jt(i.__s, y.getDerivedStateFromProps(h, i.__s))), u = i.props, l = i.state, d)
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
        i.state = i.__s, i.getChildContext != null && (r = jt(jt({}, r), i.getChildContext())), d || i.getSnapshotBeforeUpdate == null || (_ = i.getSnapshotBeforeUpdate(u, l)), S = p != null && p.type === Ds && p.key == null ? p.props.children : p, Zc(e, Array.isArray(S) ? S : [S], t, n, r, s, o, a, c, f), i.base = t.__e, t.__h = null, i.__h.length && a.push(i), g && (i.__E = i.__ = null), i.__e = !1;
      } else
        o == null && t.__v === n.__v ? (t.__k = n.__k, t.__e = n.__e) : t.__e = Np(n.__e, t, n, r, s, o, a, f);
    (p = fe.diffed) && p(t);
  } catch (x) {
    t.__v = null, (f || o != null) && (t.__e = c, t.__h = !!f, o[o.indexOf(c)] = null), fe.__e(x, t, n);
  }
}
function Tp(e, t) {
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
function Np(e, t, n, r, s, o, a, c) {
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
    if (o = o && As.call(e.childNodes), p = (d = n.props || Gc).dangerouslySetInnerHTML, i = u.dangerouslySetInnerHTML, !c) {
      if (o != null)
        for (d = {}, _ = 0; _ < e.attributes.length; _++)
          d[e.attributes[_].name] = e.attributes[_].value;
      (i || p) && (i && (p && i.__html == p.__html || i.__html === e.innerHTML) || (e.innerHTML = i && i.__html || ""));
    }
    if (Dp(e, u, d, s, c), i)
      t.__k = [];
    else if (_ = t.props.children, Zc(e, Array.isArray(_) ? _ : [_], t, n, r, s && l !== "foreignObject", o, a, o ? o[0] : n.__k && Lr(n, 0), c), o != null)
      for (_ = o.length; _--; )
        o[_] != null && Kc(o[_]);
    c || ("value" in u && (_ = u.value) !== void 0 && (_ !== e.value || l === "progress" && !_ || l === "option" && _ !== d.value) && qo(e, "value", _, d.value, !1), "checked" in u && (_ = u.checked) !== void 0 && _ !== e.checked && qo(e, "checked", _, d.checked, !1));
  }
  return e;
}
function nf(e, t, n) {
  try {
    typeof e == "function" ? e(t) : e.current = t;
  } catch (r) {
    fe.__e(r, n);
  }
}
function rf(e, t, n) {
  var r, s;
  if (fe.unmount && fe.unmount(e), (r = e.ref) && (r.current && r.current !== e.__e || nf(r, null, t)), (r = e.__c) != null) {
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
      r[s] && rf(r[s], t, n || typeof e.type != "function");
  n || e.__e == null || Kc(e.__e), e.__ = e.__e = e.__d = void 0;
}
function Lp(e, t, n) {
  return this.constructor(e, n);
}
As = Xc.slice, fe = { __e: function(e, t, n, r) {
  for (var s, o, a; t = t.__; )
    if ((s = t.__c) && !s.__)
      try {
        if ((o = s.constructor) && o.getDerivedStateFromError != null && (s.setState(o.getDerivedStateFromError(e)), a = s.__d), s.componentDidCatch != null && (s.componentDidCatch(e, r || {}), a = s.__d), a)
          return s.__E = s;
      } catch (c) {
        e = c;
      }
  throw e;
} }, qc = 0, fr.prototype.setState = function(e, t) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = jt({}, this.state), typeof e == "function" && (e = e(jt({}, n), this.props)), e && jt(n, e), e != null && this.__v && (t && this._sb.push(t), Ha(this));
}, fr.prototype.forceUpdate = function(e) {
  this.__v && (this.__e = !0, e && this.__h.push(e), Ha(this));
}, fr.prototype.render = Ds, cr = [], Vo.__r = 0;
class Qt extends fr {
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
    return yn(
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
      i ? /* @__PURE__ */ yn("i", {
        class: `spin icon ${d || "icon-spinner-snake"}`
      }) : typeof l == "string" ? /* @__PURE__ */ yn("i", {
        class: `icon ${l}`
      }) : l,
      E ? null : /* @__PURE__ */ yn("span", {
        className: "text"
      }, i ? u : _),
      i ? null : o,
      i ? null : typeof g == "string" ? /* @__PURE__ */ yn("i", {
        class: `icon ${g}`
      }) : g,
      i ? null : h ? /* @__PURE__ */ yn("span", {
        className: typeof h == "string" ? `caret-${h}` : "caret"
      }) : null
    );
  }
}
class Ia extends Ke {
}
A(Ia, "NAME", "button"), A(Ia, "Component", Qt);
var of, as, sf, Pp = [];
function Rp(e, t, n) {
  var r, s, o, a = {};
  for (o in t)
    o == "key" ? r = t[o] : o == "ref" ? s = t[o] : a[o] = t[o];
  if (arguments.length > 2 && (a.children = arguments.length > 3 ? of.call(arguments, 2) : n), typeof e == "function" && e.defaultProps != null)
    for (o in e.defaultProps)
      a[o] === void 0 && (a[o] = e.defaultProps[o]);
  return Hp(e, a, r, s, null);
}
function Hp(e, t, n, r, s) {
  var o = { type: e, props: t, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: s == null ? ++sf : s };
  return s == null && as.vnode != null && as.vnode(o), o;
}
of = Pp.slice, as = { __e: function(e, t, n, r) {
  for (var s, o, a; t = t.__; )
    if ((s = t.__c) && !s.__)
      try {
        if ((o = s.constructor) && o.getDerivedStateFromError != null && (s.setState(o.getDerivedStateFromError(e)), a = s.__d), s.componentDidCatch != null && (s.componentDidCatch(e, r || {}), a = s.__d), a)
          return s.__E = s;
      } catch (c) {
        e = c;
      }
  throw e;
} }, sf = 0;
class Ts extends Ms {
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
    return /* @__PURE__ */ Rp("span", {
      class: `${this.name}-toggle-icon caret-${t ? "down" : "right"}`
    });
  }
}
A(Ts, "NAME", "menu");
class Ua extends Ke {
}
A(Ua, "NAME", "menu"), A(Ua, "Component", Ts);
var Ii, oe, af, ur, Fa, Go = {}, lf = [], Wp = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function Bt(e, t) {
  for (var n in t)
    e[n] = t[n];
  return e;
}
function cf(e) {
  var t = e.parentNode;
  t && t.removeChild(e);
}
function Kt(e, t, n) {
  var r, s, o, a = {};
  for (o in t)
    o == "key" ? r = t[o] : o == "ref" ? s = t[o] : a[o] = t[o];
  if (arguments.length > 2 && (a.children = arguments.length > 3 ? Ii.call(arguments, 2) : n), typeof e == "function" && e.defaultProps != null)
    for (o in e.defaultProps)
      a[o] === void 0 && (a[o] = e.defaultProps[o]);
  return xo(e, a, r, s, null);
}
function xo(e, t, n, r, s) {
  var o = { type: e, props: t, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: s == null ? ++af : s };
  return s == null && oe.vnode != null && oe.vnode(o), o;
}
function Ui(e) {
  return e.children;
}
function bn(e, t) {
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
function ff(e) {
  var t, n;
  if ((e = e.__) != null && e.__c != null) {
    for (e.__e = e.__c.base = null, t = 0; t < e.__k.length; t++)
      if ((n = e.__k[t]) != null && n.__e != null) {
        e.__e = e.__c.base = n.__e;
        break;
      }
    return ff(e);
  }
}
function za(e) {
  (!e.__d && (e.__d = !0) && ur.push(e) && !Xo.__r++ || Fa !== oe.debounceRendering) && ((Fa = oe.debounceRendering) || setTimeout)(Xo);
}
function Xo() {
  for (var e; Xo.__r = ur.length; )
    e = ur.sort(function(t, n) {
      return t.__v.__b - n.__v.__b;
    }), ur = [], e.some(function(t) {
      var n, r, s, o, a, c;
      t.__d && (a = (o = (n = t).__v).__e, (c = n.__P) && (r = [], (s = Bt({}, o)).__v = o.__v + 1, Ns(c, o, s, n.__n, c.ownerSVGElement !== void 0, o.__h != null ? [a] : null, r, a == null ? Pr(o) : a, o.__h), df(r, o), o.__e != a && ff(o)));
    });
}
function uf(e, t, n, r, s, o, a, c, f, p) {
  var i, d, u, l, _, g, h, v = r && r.__k || lf, m = v.length;
  for (n.__k = [], i = 0; i < t.length; i++)
    if ((l = n.__k[i] = (l = t[i]) == null || typeof l == "boolean" ? null : typeof l == "string" || typeof l == "number" || typeof l == "bigint" ? xo(null, l, null, null, l) : Array.isArray(l) ? xo(Ui, { children: l }, null, null, null) : l.__b > 0 ? xo(l.type, l.props, l.key, l.ref ? l.ref : null, l.__v) : l) != null) {
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
      Ns(e, l, u = u || Go, s, o, a, c, f, p), _ = l.__e, (d = l.ref) && u.ref != d && (h || (h = []), u.ref && h.push(u.ref, null, l), h.push(d, l.__c || _, l)), _ != null ? (g == null && (g = _), typeof l.type == "function" && l.__k === u.__k ? l.__d = f = _f(l, f, e) : f = pf(e, l, u, v, _, f), typeof n.type == "function" && (n.__d = f)) : f && u.__e == f && f.parentNode != e && (f = Pr(u));
    }
  for (n.__e = g, i = m; i--; )
    v[i] != null && vf(v[i], v[i]);
  if (h)
    for (i = 0; i < h.length; i++)
      hf(h[i], h[++i], h[++i]);
}
function _f(e, t, n) {
  for (var r, s = e.__k, o = 0; s && o < s.length; o++)
    (r = s[o]) && (r.__ = e, t = typeof r.type == "function" ? _f(r, t, n) : pf(n, r, r, s, r.__e, t));
  return t;
}
function pf(e, t, n, r, s, o) {
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
function jp(e, t, n, r, s) {
  var o;
  for (o in n)
    o === "children" || o === "key" || o in t || Ko(e, o, null, n[o], r);
  for (o in t)
    s && typeof t[o] != "function" || o === "children" || o === "key" || o === "value" || o === "checked" || n[o] === t[o] || Ko(e, o, t[o], n[o], r);
}
function Ya(e, t, n) {
  t[0] === "-" ? e.setProperty(t, n) : e[t] = n == null ? "" : typeof n != "number" || Wp.test(t) ? n : n + "px";
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
            n && t in n || Ya(e.style, t, "");
        if (n)
          for (t in n)
            r && n[t] === r[t] || Ya(e.style, t, n[t]);
      }
    else if (t[0] === "o" && t[1] === "n")
      o = t !== (t = t.replace(/Capture$/, "")), t = t.toLowerCase() in e ? t.toLowerCase().slice(2) : t.slice(2), e.l || (e.l = {}), e.l[t + o] = n, n ? r || e.addEventListener(t, o ? qa : Va, o) : e.removeEventListener(t, o ? qa : Va, o);
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
  this.l[e.type + !1](oe.event ? oe.event(e) : e);
}
function qa(e) {
  this.l[e.type + !0](oe.event ? oe.event(e) : e);
}
function Ns(e, t, n, r, s, o, a, c, f) {
  var p, i, d, u, l, _, g, h, v, m, k, b, E, $, S, y = t.type;
  if (t.constructor !== void 0)
    return null;
  n.__h != null && (f = n.__h, c = t.__e = n.__e, t.__h = null, o = [c]), (p = oe.__b) && p(t);
  try {
    e:
      if (typeof y == "function") {
        if (h = t.props, v = (p = y.contextType) && r[p.__c], m = p ? v ? v.props.value : p.__ : r, n.__c ? g = (i = t.__c = n.__c).__ = i.__E : ("prototype" in y && y.prototype.render ? t.__c = i = new y(h, m) : (t.__c = i = new bn(h, m), i.constructor = y, i.render = Ip), v && v.sub(i), i.props = h, i.state || (i.state = {}), i.context = m, i.__n = r, d = i.__d = !0, i.__h = [], i._sb = []), i.__s == null && (i.__s = i.state), y.getDerivedStateFromProps != null && (i.__s == i.state && (i.__s = Bt({}, i.__s)), Bt(i.__s, y.getDerivedStateFromProps(h, i.__s))), u = i.props, l = i.state, d)
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
        i.state = i.__s, i.getChildContext != null && (r = Bt(Bt({}, r), i.getChildContext())), d || i.getSnapshotBeforeUpdate == null || (_ = i.getSnapshotBeforeUpdate(u, l)), S = p != null && p.type === Ui && p.key == null ? p.props.children : p, uf(e, Array.isArray(S) ? S : [S], t, n, r, s, o, a, c, f), i.base = t.__e, t.__h = null, i.__h.length && a.push(i), g && (i.__E = i.__ = null), i.__e = !1;
      } else
        o == null && t.__v === n.__v ? (t.__k = n.__k, t.__e = n.__e) : t.__e = Bp(n.__e, t, n, r, s, o, a, f);
    (p = oe.diffed) && p(t);
  } catch (x) {
    t.__v = null, (f || o != null) && (t.__e = c, t.__h = !!f, o[o.indexOf(c)] = null), oe.__e(x, t, n);
  }
}
function df(e, t) {
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
function Bp(e, t, n, r, s, o, a, c) {
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
    if (o = o && Ii.call(e.childNodes), p = (d = n.props || Go).dangerouslySetInnerHTML, i = u.dangerouslySetInnerHTML, !c) {
      if (o != null)
        for (d = {}, _ = 0; _ < e.attributes.length; _++)
          d[e.attributes[_].name] = e.attributes[_].value;
      (i || p) && (i && (p && i.__html == p.__html || i.__html === e.innerHTML) || (e.innerHTML = i && i.__html || ""));
    }
    if (jp(e, u, d, s, c), i)
      t.__k = [];
    else if (_ = t.props.children, uf(e, Array.isArray(_) ? _ : [_], t, n, r, s && l !== "foreignObject", o, a, o ? o[0] : n.__k && Pr(n, 0), c), o != null)
      for (_ = o.length; _--; )
        o[_] != null && cf(o[_]);
    c || ("value" in u && (_ = u.value) !== void 0 && (_ !== e.value || l === "progress" && !_ || l === "option" && _ !== d.value) && Ko(e, "value", _, d.value, !1), "checked" in u && (_ = u.checked) !== void 0 && _ !== e.checked && Ko(e, "checked", _, d.checked, !1));
  }
  return e;
}
function hf(e, t, n) {
  try {
    typeof e == "function" ? e(t) : e.current = t;
  } catch (r) {
    oe.__e(r, n);
  }
}
function vf(e, t, n) {
  var r, s;
  if (oe.unmount && oe.unmount(e), (r = e.ref) && (r.current && r.current !== e.__e || hf(r, null, t)), (r = e.__c) != null) {
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
      r[s] && vf(r[s], t, n || typeof e.type != "function");
  n || e.__e == null || cf(e.__e), e.__ = e.__e = e.__d = void 0;
}
function Ip(e, t, n) {
  return this.constructor(e, n);
}
function Ga(e, t, n) {
  var r, s, o;
  oe.__ && oe.__(e, t), s = (r = typeof n == "function") ? null : n && n.__k || t.__k, o = [], Ns(t, e = (!r && n || t).__k = Kt(Ui, null, [e]), s || Go, Go, t.ownerSVGElement !== void 0, !r && n ? [n] : s ? null : t.firstChild ? Ii.call(t.childNodes) : null, o, !r && n ? n : s ? s.__e : t.firstChild, r), df(o, e);
}
Ii = lf.slice, oe = { __e: function(e, t, n, r) {
  for (var s, o, a; t = t.__; )
    if ((s = t.__c) && !s.__)
      try {
        if ((o = s.constructor) && o.getDerivedStateFromError != null && (s.setState(o.getDerivedStateFromError(e)), a = s.__d), s.componentDidCatch != null && (s.componentDidCatch(e, r || {}), a = s.__d), a)
          return s.__E = s;
      } catch (c) {
        e = c;
      }
  throw e;
} }, af = 0, bn.prototype.setState = function(e, t) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = Bt({}, this.state), typeof e == "function" && (e = e(Bt({}, n), this.props)), e && Bt(n, e), e != null && this.__v && (t && this._sb.push(t), za(this));
}, bn.prototype.forceUpdate = function(e) {
  this.__v && (this.__e = !0, e && this.__h.push(e), za(this));
}, bn.prototype.render = Ui, ur = [], Xo.__r = 0;
var Ls, ue, mf, gf, _r, Xa, yf = {}, bf = [], Up = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function It(e, t) {
  for (var n in t)
    e[n] = t[n];
  return e;
}
function wf(e) {
  var t = e.parentNode;
  t && t.removeChild(e);
}
function ts(e, t, n) {
  var r, s, o, a = {};
  for (o in t)
    o == "key" ? r = t[o] : o == "ref" ? s = t[o] : a[o] = t[o];
  if (arguments.length > 2 && (a.children = arguments.length > 3 ? Ls.call(arguments, 2) : n), typeof e == "function" && e.defaultProps != null)
    for (o in e.defaultProps)
      a[o] === void 0 && (a[o] = e.defaultProps[o]);
  return So(e, a, r, s, null);
}
function So(e, t, n, r, s) {
  var o = { type: e, props: t, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: s == null ? ++mf : s };
  return s == null && ue.vnode != null && ue.vnode(o), o;
}
function Ps(e) {
  return e.children;
}
function pr(e, t) {
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
function $f(e) {
  var t, n;
  if ((e = e.__) != null && e.__c != null) {
    for (e.__e = e.__c.base = null, t = 0; t < e.__k.length; t++)
      if ((n = e.__k[t]) != null && n.__e != null) {
        e.__e = e.__c.base = n.__e;
        break;
      }
    return $f(e);
  }
}
function Ka(e) {
  (!e.__d && (e.__d = !0) && _r.push(e) && !Jo.__r++ || Xa !== ue.debounceRendering) && ((Xa = ue.debounceRendering) || setTimeout)(Jo);
}
function Jo() {
  for (var e; Jo.__r = _r.length; )
    e = _r.sort(function(t, n) {
      return t.__v.__b - n.__v.__b;
    }), _r = [], e.some(function(t) {
      var n, r, s, o, a, c;
      t.__d && (a = (o = (n = t).__v).__e, (c = n.__P) && (r = [], (s = It({}, o)).__v = o.__v + 1, Ef(c, o, s, n.__n, c.ownerSVGElement !== void 0, o.__h != null ? [a] : null, r, a == null ? Rr(o) : a, o.__h), zp(r, o), o.__e != a && $f(o)));
    });
}
function kf(e, t, n, r, s, o, a, c, f, p) {
  var i, d, u, l, _, g, h, v = r && r.__k || bf, m = v.length;
  for (n.__k = [], i = 0; i < t.length; i++)
    if ((l = n.__k[i] = (l = t[i]) == null || typeof l == "boolean" ? null : typeof l == "string" || typeof l == "number" || typeof l == "bigint" ? So(null, l, null, null, l) : Array.isArray(l) ? So(Ps, { children: l }, null, null, null) : l.__b > 0 ? So(l.type, l.props, l.key, l.ref ? l.ref : null, l.__v) : l) != null) {
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
      Ef(e, l, u = u || yf, s, o, a, c, f, p), _ = l.__e, (d = l.ref) && u.ref != d && (h || (h = []), u.ref && h.push(u.ref, null, l), h.push(d, l.__c || _, l)), _ != null ? (g == null && (g = _), typeof l.type == "function" && l.__k === u.__k ? l.__d = f = xf(l, f, e) : f = Sf(e, l, u, v, _, f), typeof n.type == "function" && (n.__d = f)) : f && u.__e == f && f.parentNode != e && (f = Rr(u));
    }
  for (n.__e = g, i = m; i--; )
    v[i] != null && Of(v[i], v[i]);
  if (h)
    for (i = 0; i < h.length; i++)
      Cf(h[i], h[++i], h[++i]);
}
function xf(e, t, n) {
  for (var r, s = e.__k, o = 0; s && o < s.length; o++)
    (r = s[o]) && (r.__ = e, t = typeof r.type == "function" ? xf(r, t, n) : Sf(n, r, r, s, r.__e, t));
  return t;
}
function Sf(e, t, n, r, s, o) {
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
function Fp(e, t, n, r, s) {
  var o;
  for (o in n)
    o === "children" || o === "key" || o in t || Zo(e, o, null, n[o], r);
  for (o in t)
    s && typeof t[o] != "function" || o === "children" || o === "key" || o === "value" || o === "checked" || n[o] === t[o] || Zo(e, o, t[o], n[o], r);
}
function Ja(e, t, n) {
  t[0] === "-" ? e.setProperty(t, n) : e[t] = n == null ? "" : typeof n != "number" || Up.test(t) ? n : n + "px";
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
function Ef(e, t, n, r, s, o, a, c, f) {
  var p, i, d, u, l, _, g, h, v, m, k, b, E, $, S, y = t.type;
  if (t.constructor !== void 0)
    return null;
  n.__h != null && (f = n.__h, c = t.__e = n.__e, t.__h = null, o = [c]), (p = ue.__b) && p(t);
  try {
    e:
      if (typeof y == "function") {
        if (h = t.props, v = (p = y.contextType) && r[p.__c], m = p ? v ? v.props.value : p.__ : r, n.__c ? g = (i = t.__c = n.__c).__ = i.__E : ("prototype" in y && y.prototype.render ? t.__c = i = new y(h, m) : (t.__c = i = new pr(h, m), i.constructor = y, i.render = Vp), v && v.sub(i), i.props = h, i.state || (i.state = {}), i.context = m, i.__n = r, d = i.__d = !0, i.__h = [], i._sb = []), i.__s == null && (i.__s = i.state), y.getDerivedStateFromProps != null && (i.__s == i.state && (i.__s = It({}, i.__s)), It(i.__s, y.getDerivedStateFromProps(h, i.__s))), u = i.props, l = i.state, d)
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
        i.state = i.__s, i.getChildContext != null && (r = It(It({}, r), i.getChildContext())), d || i.getSnapshotBeforeUpdate == null || (_ = i.getSnapshotBeforeUpdate(u, l)), S = p != null && p.type === Ps && p.key == null ? p.props.children : p, kf(e, Array.isArray(S) ? S : [S], t, n, r, s, o, a, c, f), i.base = t.__e, t.__h = null, i.__h.length && a.push(i), g && (i.__E = i.__ = null), i.__e = !1;
      } else
        o == null && t.__v === n.__v ? (t.__k = n.__k, t.__e = n.__e) : t.__e = Yp(n.__e, t, n, r, s, o, a, f);
    (p = ue.diffed) && p(t);
  } catch (x) {
    t.__v = null, (f || o != null) && (t.__e = c, t.__h = !!f, o[o.indexOf(c)] = null), ue.__e(x, t, n);
  }
}
function zp(e, t) {
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
    if (o = o && Ls.call(e.childNodes), p = (d = n.props || yf).dangerouslySetInnerHTML, i = u.dangerouslySetInnerHTML, !c) {
      if (o != null)
        for (d = {}, _ = 0; _ < e.attributes.length; _++)
          d[e.attributes[_].name] = e.attributes[_].value;
      (i || p) && (i && (p && i.__html == p.__html || i.__html === e.innerHTML) || (e.innerHTML = i && i.__html || ""));
    }
    if (Fp(e, u, d, s, c), i)
      t.__k = [];
    else if (_ = t.props.children, kf(e, Array.isArray(_) ? _ : [_], t, n, r, s && l !== "foreignObject", o, a, o ? o[0] : n.__k && Rr(n, 0), c), o != null)
      for (_ = o.length; _--; )
        o[_] != null && wf(o[_]);
    c || ("value" in u && (_ = u.value) !== void 0 && (_ !== e.value || l === "progress" && !_ || l === "option" && _ !== d.value) && Zo(e, "value", _, d.value, !1), "checked" in u && (_ = u.checked) !== void 0 && _ !== e.checked && Zo(e, "checked", _, d.checked, !1));
  }
  return e;
}
function Cf(e, t, n) {
  try {
    typeof e == "function" ? e(t) : e.current = t;
  } catch (r) {
    ue.__e(r, n);
  }
}
function Of(e, t, n) {
  var r, s;
  if (ue.unmount && ue.unmount(e), (r = e.ref) && (r.current && r.current !== e.__e || Cf(r, null, t)), (r = e.__c) != null) {
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
      r[s] && Of(r[s], t, n || typeof e.type != "function");
  n || e.__e == null || wf(e.__e), e.__ = e.__e = e.__d = void 0;
}
function Vp(e, t, n) {
  return this.constructor(e, n);
}
Ls = bf.slice, ue = { __e: function(e, t, n, r) {
  for (var s, o, a; t = t.__; )
    if ((s = t.__c) && !s.__)
      try {
        if ((o = s.constructor) && o.getDerivedStateFromError != null && (s.setState(o.getDerivedStateFromError(e)), a = s.__d), s.componentDidCatch != null && (s.componentDidCatch(e, r || {}), a = s.__d), a)
          return s.__E = s;
      } catch (c) {
        e = c;
      }
  throw e;
} }, mf = 0, gf = function(e) {
  return e != null && e.constructor === void 0;
}, pr.prototype.setState = function(e, t) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = It({}, this.state), typeof e == "function" && (e = e(It({}, n), this.props)), e && It(n, e), e != null && this.__v && (t && this._sb.push(t), Ka(this));
}, pr.prototype.forceUpdate = function(e) {
  this.__v && (this.__e = !0, e && this.__h.push(e), Ka(this));
}, pr.prototype.render = Ps, _r = [], Jo.__r = 0;
class Rs extends pr {
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
    return /* @__PURE__ */ ts(Qt, {
      key: r,
      ...s
    });
  }
  renderItem(t, n, r) {
    const { itemRender: s, defaultBtnProps: o, onClickItem: a } = t, c = { key: r, ...n };
    if (o && Object.assign(c, o), a && (c.onClick = this.handleItemClick.bind(this, c, r, n.onClick)), s) {
      const f = s.call(this, c, ts);
      if (gf(f))
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
    return /* @__PURE__ */ ts("div", {
      className: I("btn-group", s ? `size-${s}` : "", n),
      ...l
    }, r && r.map(this.renderItem.bind(this, t)), c);
  }
}
function qp({
  ...e
}) {
  return /* @__PURE__ */ Kt(Rs, {
    ...e
  });
}
class Mf extends bn {
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
    return /* @__PURE__ */ Kt("div", {
      class: I([n, r || "default", "messager"])
    }, /* @__PURE__ */ Kt("div", {
      class: "messager-content"
    }, t), /* @__PURE__ */ Kt(qp, {
      items: c
    }));
  }
}
A(Mf, "defaultProps");
class Af extends bn {
  render() {
    const { className: t, placement: n } = this.props;
    return /* @__PURE__ */ Kt("div", {
      class: I([t || "", "messagers-holder", "col"]),
      "data-placement": n
    });
  }
}
A(Af, "defaultProps");
class el {
  constructor(t, n) {
    A(this, "message");
    A(this, "options");
    this.message = t, this.options = n;
  }
  show() {
    const { message: t, options: n } = this, r = n != null && n.placement ? n.placement : "top", s = (n == null ? void 0 : n.close) !== !1;
    let o = document.querySelector(".messagers-holder[data-placement=" + r + "]");
    if (!o) {
      const f = document.createElement("div");
      document.body.appendChild(f);
      const p = {
        ...n,
        placement: r
      };
      Ga(Kt(Af, p), f);
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
    Ga(Kt(Mf, c), o, a);
  }
}
A(el, "NAME", "messager"), A(el, "DEFAULT", {
  placement: "top",
  type: "default"
});
var Hs, _e, Df, dr, tl, Tf = {}, Nf = [], Gp = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function Ut(e, t) {
  for (var n in t)
    e[n] = t[n];
  return e;
}
function Lf(e) {
  var t = e.parentNode;
  t && t.removeChild(e);
}
function vo(e, t, n) {
  var r, s, o, a = {};
  for (o in t)
    o == "key" ? r = t[o] : o == "ref" ? s = t[o] : a[o] = t[o];
  if (arguments.length > 2 && (a.children = arguments.length > 3 ? Hs.call(arguments, 2) : n), typeof e == "function" && e.defaultProps != null)
    for (o in e.defaultProps)
      a[o] === void 0 && (a[o] = e.defaultProps[o]);
  return Eo(e, a, r, s, null);
}
function Eo(e, t, n, r, s) {
  var o = { type: e, props: t, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: s == null ? ++Df : s };
  return s == null && _e.vnode != null && _e.vnode(o), o;
}
function Ws(e) {
  return e.children;
}
function hr(e, t) {
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
function Pf(e) {
  var t, n;
  if ((e = e.__) != null && e.__c != null) {
    for (e.__e = e.__c.base = null, t = 0; t < e.__k.length; t++)
      if ((n = e.__k[t]) != null && n.__e != null) {
        e.__e = e.__c.base = n.__e;
        break;
      }
    return Pf(e);
  }
}
function nl(e) {
  (!e.__d && (e.__d = !0) && dr.push(e) && !Qo.__r++ || tl !== _e.debounceRendering) && ((tl = _e.debounceRendering) || setTimeout)(Qo);
}
function Qo() {
  for (var e; Qo.__r = dr.length; )
    e = dr.sort(function(t, n) {
      return t.__v.__b - n.__v.__b;
    }), dr = [], e.some(function(t) {
      var n, r, s, o, a, c;
      t.__d && (a = (o = (n = t).__v).__e, (c = n.__P) && (r = [], (s = Ut({}, o)).__v = o.__v + 1, jf(c, o, s, n.__n, c.ownerSVGElement !== void 0, o.__h != null ? [a] : null, r, a == null ? Hr(o) : a, o.__h), Kp(r, o), o.__e != a && Pf(o)));
    });
}
function Rf(e, t, n, r, s, o, a, c, f, p) {
  var i, d, u, l, _, g, h, v = r && r.__k || Nf, m = v.length;
  for (n.__k = [], i = 0; i < t.length; i++)
    if ((l = n.__k[i] = (l = t[i]) == null || typeof l == "boolean" ? null : typeof l == "string" || typeof l == "number" || typeof l == "bigint" ? Eo(null, l, null, null, l) : Array.isArray(l) ? Eo(Ws, { children: l }, null, null, null) : l.__b > 0 ? Eo(l.type, l.props, l.key, l.ref ? l.ref : null, l.__v) : l) != null) {
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
      jf(e, l, u = u || Tf, s, o, a, c, f, p), _ = l.__e, (d = l.ref) && u.ref != d && (h || (h = []), u.ref && h.push(u.ref, null, l), h.push(d, l.__c || _, l)), _ != null ? (g == null && (g = _), typeof l.type == "function" && l.__k === u.__k ? l.__d = f = Hf(l, f, e) : f = Wf(e, l, u, v, _, f), typeof n.type == "function" && (n.__d = f)) : f && u.__e == f && f.parentNode != e && (f = Hr(u));
    }
  for (n.__e = g, i = m; i--; )
    v[i] != null && If(v[i], v[i]);
  if (h)
    for (i = 0; i < h.length; i++)
      Bf(h[i], h[++i], h[++i]);
}
function Hf(e, t, n) {
  for (var r, s = e.__k, o = 0; s && o < s.length; o++)
    (r = s[o]) && (r.__ = e, t = typeof r.type == "function" ? Hf(r, t, n) : Wf(n, r, r, s, r.__e, t));
  return t;
}
function Wf(e, t, n, r, s, o) {
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
function Xp(e, t, n, r, s) {
  var o;
  for (o in n)
    o === "children" || o === "key" || o in t || ei(e, o, null, n[o], r);
  for (o in t)
    s && typeof t[o] != "function" || o === "children" || o === "key" || o === "value" || o === "checked" || n[o] === t[o] || ei(e, o, t[o], n[o], r);
}
function rl(e, t, n) {
  t[0] === "-" ? e.setProperty(t, n) : e[t] = n == null ? "" : typeof n != "number" || Gp.test(t) ? n : n + "px";
}
function ei(e, t, n, r, s) {
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
function jf(e, t, n, r, s, o, a, c, f) {
  var p, i, d, u, l, _, g, h, v, m, k, b, E, $, S, y = t.type;
  if (t.constructor !== void 0)
    return null;
  n.__h != null && (f = n.__h, c = t.__e = n.__e, t.__h = null, o = [c]), (p = _e.__b) && p(t);
  try {
    e:
      if (typeof y == "function") {
        if (h = t.props, v = (p = y.contextType) && r[p.__c], m = p ? v ? v.props.value : p.__ : r, n.__c ? g = (i = t.__c = n.__c).__ = i.__E : ("prototype" in y && y.prototype.render ? t.__c = i = new y(h, m) : (t.__c = i = new hr(h, m), i.constructor = y, i.render = Zp), v && v.sub(i), i.props = h, i.state || (i.state = {}), i.context = m, i.__n = r, d = i.__d = !0, i.__h = [], i._sb = []), i.__s == null && (i.__s = i.state), y.getDerivedStateFromProps != null && (i.__s == i.state && (i.__s = Ut({}, i.__s)), Ut(i.__s, y.getDerivedStateFromProps(h, i.__s))), u = i.props, l = i.state, d)
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
        i.state = i.__s, i.getChildContext != null && (r = Ut(Ut({}, r), i.getChildContext())), d || i.getSnapshotBeforeUpdate == null || (_ = i.getSnapshotBeforeUpdate(u, l)), S = p != null && p.type === Ws && p.key == null ? p.props.children : p, Rf(e, Array.isArray(S) ? S : [S], t, n, r, s, o, a, c, f), i.base = t.__e, t.__h = null, i.__h.length && a.push(i), g && (i.__E = i.__ = null), i.__e = !1;
      } else
        o == null && t.__v === n.__v ? (t.__k = n.__k, t.__e = n.__e) : t.__e = Jp(n.__e, t, n, r, s, o, a, f);
    (p = _e.diffed) && p(t);
  } catch (x) {
    t.__v = null, (f || o != null) && (t.__e = c, t.__h = !!f, o[o.indexOf(c)] = null), _e.__e(x, t, n);
  }
}
function Kp(e, t) {
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
function Jp(e, t, n, r, s, o, a, c) {
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
    if (o = o && Hs.call(e.childNodes), p = (d = n.props || Tf).dangerouslySetInnerHTML, i = u.dangerouslySetInnerHTML, !c) {
      if (o != null)
        for (d = {}, _ = 0; _ < e.attributes.length; _++)
          d[e.attributes[_].name] = e.attributes[_].value;
      (i || p) && (i && (p && i.__html == p.__html || i.__html === e.innerHTML) || (e.innerHTML = i && i.__html || ""));
    }
    if (Xp(e, u, d, s, c), i)
      t.__k = [];
    else if (_ = t.props.children, Rf(e, Array.isArray(_) ? _ : [_], t, n, r, s && l !== "foreignObject", o, a, o ? o[0] : n.__k && Hr(n, 0), c), o != null)
      for (_ = o.length; _--; )
        o[_] != null && Lf(o[_]);
    c || ("value" in u && (_ = u.value) !== void 0 && (_ !== e.value || l === "progress" && !_ || l === "option" && _ !== d.value) && ei(e, "value", _, d.value, !1), "checked" in u && (_ = u.checked) !== void 0 && _ !== e.checked && ei(e, "checked", _, d.checked, !1));
  }
  return e;
}
function Bf(e, t, n) {
  try {
    typeof e == "function" ? e(t) : e.current = t;
  } catch (r) {
    _e.__e(r, n);
  }
}
function If(e, t, n) {
  var r, s;
  if (_e.unmount && _e.unmount(e), (r = e.ref) && (r.current && r.current !== e.__e || Bf(r, null, t)), (r = e.__c) != null) {
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
      r[s] && If(r[s], t, n || typeof e.type != "function");
  n || e.__e == null || Lf(e.__e), e.__ = e.__e = e.__d = void 0;
}
function Zp(e, t, n) {
  return this.constructor(e, n);
}
Hs = Nf.slice, _e = { __e: function(e, t, n, r) {
  for (var s, o, a; t = t.__; )
    if ((s = t.__c) && !s.__)
      try {
        if ((o = s.constructor) && o.getDerivedStateFromError != null && (s.setState(o.getDerivedStateFromError(e)), a = s.__d), s.componentDidCatch != null && (s.componentDidCatch(e, r || {}), a = s.__d), a)
          return s.__E = s;
      } catch (c) {
        e = c;
      }
  throw e;
} }, Df = 0, hr.prototype.setState = function(e, t) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = Ut({}, this.state), typeof e == "function" && (e = e(Ut({}, n), this.props)), e && Ut(n, e), e != null && this.__v && (t && this._sb.push(t), nl(this));
}, hr.prototype.forceUpdate = function(e) {
  this.__v && (this.__e = !0, e && this.__h.push(e), nl(this));
}, hr.prototype.render = Ws, dr = [], Qo.__r = 0;
class ls extends hr {
  render() {
    const { percent: t, circleSize: n, circleBorderSize: r, circleBgColor: s, circleColor: o } = this.props, a = (n - r) / 2, c = n / 2;
    return /* @__PURE__ */ vo("svg", {
      width: n,
      height: n,
      class: "progress-circle"
    }, /* @__PURE__ */ vo("circle", {
      cx: c,
      cy: c,
      r: a,
      stroke: s,
      "stroke-width": r
    }), /* @__PURE__ */ vo("circle", {
      cx: c,
      cy: c,
      r: a,
      stroke: o,
      "stroke-dasharray": Math.PI * a * 2,
      "stroke-dashoffset": Math.PI * a * 2 * (100 - t) / 100,
      "stroke-width": r
    }), /* @__PURE__ */ vo("text", {
      x: c,
      y: c + r / 4,
      "dominant-baseline": "middle",
      style: { fontSize: `${a}px` }
    }, Math.round(t)));
  }
}
A(ls, "NAME", "zui.progress-circle"), A(ls, "defaultProps", {
  circleSize: 24,
  circleBorderSize: 2,
  circleBgColor: "var(--progress-circle-bg)",
  circleColor: "var(--progress-circle-bar-color)"
});
class sl extends Ke {
}
A(sl, "NAME", "table-sorter"), A(sl, "Component", ls);
function Qp(e) {
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
function ed(e) {
  document.readyState !== "loading" ? e() : document.addEventListener("DOMContentLoaded", e);
}
function td(e, t) {
  const n = typeof e == "string" ? document.querySelector(e) : e;
  if (!n)
    return !1;
  const r = n.getBoundingClientRect(), s = window.innerHeight || document.documentElement.clientHeight, o = window.innerWidth || document.documentElement.clientWidth;
  if (t != null && t.fullyCheck)
    return r.left >= 0 && r.top >= 0 && r.left + r.width <= o && r.top + r.height <= s;
  const a = r.top <= s && r.top + r.height >= 0, c = r.left <= o && r.left + r.width >= 0;
  return a && c;
}
const py = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  selectText: Qp,
  domReady: ed,
  isElementVisible: td,
  classes: I
}, Symbol.toStringTag, { value: "Module" }));
let nd = (e = 21) => crypto.getRandomValues(new Uint8Array(e)).reduce((t, n) => (n &= 63, n < 36 ? t += n.toString(36) : n < 62 ? t += (n - 26).toString(36).toUpperCase() : n > 62 ? t += "-" : t += "_", t), "");
var Qr, Tt, tt, kn, xn, Co;
const ba = class {
  constructor(t, n = "local") {
    P(this, xn);
    P(this, Qr, void 0);
    P(this, Tt, void 0);
    P(this, tt, void 0);
    P(this, kn, void 0);
    H(this, Qr, n), H(this, Tt, `ZUI_STORE:${t != null ? t : nd()}`), H(this, tt, n === "local" ? localStorage : sessionStorage);
  }
  get type() {
    return w(this, Qr);
  }
  get session() {
    return this.type === "session" ? this : (w(this, kn) || H(this, kn, new ba(w(this, Tt), "session")), w(this, kn));
  }
  get(t, n) {
    const r = w(this, tt).getItem(ne(this, xn, Co).call(this, t));
    return typeof r == "string" ? JSON.parse(r) : r != null ? r : n;
  }
  set(t, n) {
    if (n == null)
      return this.remove(t);
    w(this, tt).setItem(ne(this, xn, Co).call(this, t), JSON.stringify(n));
  }
  remove(t) {
    w(this, tt).removeItem(ne(this, xn, Co).call(this, t));
  }
  each(t) {
    for (let n = 0; n < w(this, tt).length; n++) {
      const r = w(this, tt).key(n);
      if (r != null && r.startsWith(w(this, Tt))) {
        const s = w(this, tt).getItem(r);
        typeof s == "string" && t(r.substring(w(this, Tt).length + 1), JSON.parse(s));
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
let ti = ba;
Qr = new WeakMap(), Tt = new WeakMap(), tt = new WeakMap(), kn = new WeakMap(), xn = new WeakSet(), Co = function(t) {
  return `${w(this, Tt)}:${t}`;
};
const rd = new ti("DEFAULT");
function od(e, t = "local") {
  return new ti(e, t);
}
Object.assign(rd, { create: od });
var js, pe, Uf, vr, al, Ff = {}, zf = [], id = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function Ft(e, t) {
  for (var n in t)
    e[n] = t[n];
  return e;
}
function Yf(e) {
  var t = e.parentNode;
  t && t.removeChild(e);
}
function ns(e, t, n) {
  var r, s, o, a = {};
  for (o in t)
    o == "key" ? r = t[o] : o == "ref" ? s = t[o] : a[o] = t[o];
  if (arguments.length > 2 && (a.children = arguments.length > 3 ? js.call(arguments, 2) : n), typeof e == "function" && e.defaultProps != null)
    for (o in e.defaultProps)
      a[o] === void 0 && (a[o] = e.defaultProps[o]);
  return Oo(e, a, r, s, null);
}
function Oo(e, t, n, r, s) {
  var o = { type: e, props: t, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: s == null ? ++Uf : s };
  return s == null && pe.vnode != null && pe.vnode(o), o;
}
function Bs(e) {
  return e.children;
}
function mr(e, t) {
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
function ll(e) {
  (!e.__d && (e.__d = !0) && vr.push(e) && !ni.__r++ || al !== pe.debounceRendering) && ((al = pe.debounceRendering) || setTimeout)(ni);
}
function ni() {
  for (var e; ni.__r = vr.length; )
    e = vr.sort(function(t, n) {
      return t.__v.__b - n.__v.__b;
    }), vr = [], e.some(function(t) {
      var n, r, s, o, a, c;
      t.__d && (a = (o = (n = t).__v).__e, (c = n.__P) && (r = [], (s = Ft({}, o)).__v = o.__v + 1, Kf(c, o, s, n.__n, c.ownerSVGElement !== void 0, o.__h != null ? [a] : null, r, a == null ? Wr(o) : a, o.__h), ad(r, o), o.__e != a && Vf(o)));
    });
}
function qf(e, t, n, r, s, o, a, c, f, p) {
  var i, d, u, l, _, g, h, v = r && r.__k || zf, m = v.length;
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
      Kf(e, l, u = u || Ff, s, o, a, c, f, p), _ = l.__e, (d = l.ref) && u.ref != d && (h || (h = []), u.ref && h.push(u.ref, null, l), h.push(d, l.__c || _, l)), _ != null ? (g == null && (g = _), typeof l.type == "function" && l.__k === u.__k ? l.__d = f = Gf(l, f, e) : f = Xf(e, l, u, v, _, f), typeof n.type == "function" && (n.__d = f)) : f && u.__e == f && f.parentNode != e && (f = Wr(u));
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
function sd(e, t, n, r, s) {
  var o;
  for (o in n)
    o === "children" || o === "key" || o in t || ri(e, o, null, n[o], r);
  for (o in t)
    s && typeof t[o] != "function" || o === "children" || o === "key" || o === "value" || o === "checked" || n[o] === t[o] || ri(e, o, t[o], n[o], r);
}
function cl(e, t, n) {
  t[0] === "-" ? e.setProperty(t, n) : e[t] = n == null ? "" : typeof n != "number" || id.test(t) ? n : n + "px";
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
  this.l[e.type + !1](pe.event ? pe.event(e) : e);
}
function ul(e) {
  this.l[e.type + !0](pe.event ? pe.event(e) : e);
}
function Kf(e, t, n, r, s, o, a, c, f) {
  var p, i, d, u, l, _, g, h, v, m, k, b, E, $, S, y = t.type;
  if (t.constructor !== void 0)
    return null;
  n.__h != null && (f = n.__h, c = t.__e = n.__e, t.__h = null, o = [c]), (p = pe.__b) && p(t);
  try {
    e:
      if (typeof y == "function") {
        if (h = t.props, v = (p = y.contextType) && r[p.__c], m = p ? v ? v.props.value : p.__ : r, n.__c ? g = (i = t.__c = n.__c).__ = i.__E : ("prototype" in y && y.prototype.render ? t.__c = i = new y(h, m) : (t.__c = i = new mr(h, m), i.constructor = y, i.render = cd), v && v.sub(i), i.props = h, i.state || (i.state = {}), i.context = m, i.__n = r, d = i.__d = !0, i.__h = [], i._sb = []), i.__s == null && (i.__s = i.state), y.getDerivedStateFromProps != null && (i.__s == i.state && (i.__s = Ft({}, i.__s)), Ft(i.__s, y.getDerivedStateFromProps(h, i.__s))), u = i.props, l = i.state, d)
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
        i.state = i.__s, i.getChildContext != null && (r = Ft(Ft({}, r), i.getChildContext())), d || i.getSnapshotBeforeUpdate == null || (_ = i.getSnapshotBeforeUpdate(u, l)), S = p != null && p.type === Bs && p.key == null ? p.props.children : p, qf(e, Array.isArray(S) ? S : [S], t, n, r, s, o, a, c, f), i.base = t.__e, t.__h = null, i.__h.length && a.push(i), g && (i.__E = i.__ = null), i.__e = !1;
      } else
        o == null && t.__v === n.__v ? (t.__k = n.__k, t.__e = n.__e) : t.__e = ld(n.__e, t, n, r, s, o, a, f);
    (p = pe.diffed) && p(t);
  } catch (x) {
    t.__v = null, (f || o != null) && (t.__e = c, t.__h = !!f, o[o.indexOf(c)] = null), pe.__e(x, t, n);
  }
}
function ad(e, t) {
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
function ld(e, t, n, r, s, o, a, c) {
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
    if (o = o && js.call(e.childNodes), p = (d = n.props || Ff).dangerouslySetInnerHTML, i = u.dangerouslySetInnerHTML, !c) {
      if (o != null)
        for (d = {}, _ = 0; _ < e.attributes.length; _++)
          d[e.attributes[_].name] = e.attributes[_].value;
      (i || p) && (i && (p && i.__html == p.__html || i.__html === e.innerHTML) || (e.innerHTML = i && i.__html || ""));
    }
    if (sd(e, u, d, s, c), i)
      t.__k = [];
    else if (_ = t.props.children, qf(e, Array.isArray(_) ? _ : [_], t, n, r, s && l !== "foreignObject", o, a, o ? o[0] : n.__k && Wr(n, 0), c), o != null)
      for (_ = o.length; _--; )
        o[_] != null && Yf(o[_]);
    c || ("value" in u && (_ = u.value) !== void 0 && (_ !== e.value || l === "progress" && !_ || l === "option" && _ !== d.value) && ri(e, "value", _, d.value, !1), "checked" in u && (_ = u.checked) !== void 0 && _ !== e.checked && ri(e, "checked", _, d.checked, !1));
  }
  return e;
}
function Jf(e, t, n) {
  try {
    typeof e == "function" ? e(t) : e.current = t;
  } catch (r) {
    pe.__e(r, n);
  }
}
function Zf(e, t, n) {
  var r, s;
  if (pe.unmount && pe.unmount(e), (r = e.ref) && (r.current && r.current !== e.__e || Jf(r, null, t)), (r = e.__c) != null) {
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
      r[s] && Zf(r[s], t, n || typeof e.type != "function");
  n || e.__e == null || Yf(e.__e), e.__ = e.__e = e.__d = void 0;
}
function cd(e, t, n) {
  return this.constructor(e, n);
}
js = zf.slice, pe = { __e: function(e, t, n, r) {
  for (var s, o, a; t = t.__; )
    if ((s = t.__c) && !s.__)
      try {
        if ((o = s.constructor) && o.getDerivedStateFromError != null && (s.setState(o.getDerivedStateFromError(e)), a = s.__d), s.componentDidCatch != null && (s.componentDidCatch(e, r || {}), a = s.__d), a)
          return s.__E = s;
      } catch (c) {
        e = c;
      }
  throw e;
} }, Uf = 0, mr.prototype.setState = function(e, t) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = Ft({}, this.state), typeof e == "function" && (e = e(Ft({}, n), this.props)), e && Ft(n, e), e != null && this.__v && (t && this._sb.push(t), ll(this));
}, mr.prototype.forceUpdate = function(e) {
  this.__v && (this.__e = !0, e && this.__h.push(e), ll(this));
}, mr.prototype.render = Bs, vr = [], ni.__r = 0;
function fd(e) {
  if (e.indexOf("#") === 0 && (e = e.slice(1)), e.length === 3 && (e = e[0] + e[0] + e[1] + e[1] + e[2] + e[2]), e.length !== 6)
    throw new Error(`Invalid HEX color "${e}".`);
  return [
    parseInt(e.slice(0, 2), 16),
    parseInt(e.slice(2, 4), 16),
    parseInt(e.slice(4, 6), 16)
  ];
}
function ud(e) {
  const [t, n, r] = typeof e == "string" ? fd(e) : e;
  return t * 0.299 + n * 0.587 + r * 0.114 > 186;
}
function _l(e, t) {
  var n, r;
  return ud(e) ? (n = t == null ? void 0 : t.dark) != null ? n : "#333333" : (r = t == null ? void 0 : t.light) != null ? r : "#ffffff";
}
function pl(e, t = 255) {
  return Math.min(Math.max(e, 0), t);
}
function _d(e, t, n) {
  e = e % 360 / 360, t = pl(t), n = pl(n);
  const r = n <= 0.5 ? n * (t + 1) : n + t - n * t, s = n * 2 - r, o = (a) => (a = a < 0 ? a + 1 : a > 1 ? a - 1 : a, a * 6 < 1 ? s + (r - s) * a * 6 : a * 2 < 1 ? r : a * 3 < 2 ? s + (r - s) * (2 / 3 - a) * 6 : s);
  return [
    o(e + 1 / 3) * 255,
    o(e) * 255,
    o(e - 1 / 3) * 255
  ];
}
function pd(e) {
  let t = 0;
  if (typeof e != "string" && (e = String(e)), e && e.length)
    for (let n = 0; n < e.length; ++n)
      t += (n + 1) * e.charCodeAt(n);
  return t;
}
function dd(e, t) {
  return /^[\u4e00-\u9fa5\s]+$/.test(e) ? e = e.length <= t ? e : e.substring(e.length - t) : /^[A-Za-z\d\s]+$/.test(e) ? e = e[0].toUpperCase() : e = e.length <= t ? e : e.substring(0, t), e;
}
class hd extends mr {
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
      v.push("has-img"), b = /* @__PURE__ */ ns("img", {
        className: "avatar-img",
        src: d,
        alt: f
      });
    else if (f != null && f.length) {
      const E = dd(f, i);
      if (v.push("has-text", `has-text-${E.length}`), a)
        !c && a && (m.color = _l(a));
      else {
        const S = p != null ? p : f, y = (typeof S == "number" ? S : pd(S)) * u % 360;
        if (m.background = `hsl(${y},${l * 100}%,${_ * 100}%)`, !c) {
          const x = _d(y, l, _);
          m.color = _l(x);
        }
      }
      let $;
      k && k < 14 * E.length && ($ = { transform: `scale(${k / (14 * E.length)})`, whiteSpace: "nowrap" }), b = /* @__PURE__ */ ns("div", {
        "data-actualSize": k,
        className: "avatar-text",
        style: $
      }, E);
    }
    return /* @__PURE__ */ ns("div", {
      className: I(v),
      style: m,
      ...h
    }, b, g);
  }
}
class dl extends Ke {
}
A(dl, "NAME", "avatar"), A(dl, "Component", hd);
class hl extends Ke {
}
A(hl, "NAME", "btngroup"), A(hl, "Component", Rs);
var Fi, ie, Qf, gr, vl, oi = {}, eu = [], vd = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function zt(e, t) {
  for (var n in t)
    e[n] = t[n];
  return e;
}
function tu(e) {
  var t = e.parentNode;
  t && t.removeChild(e);
}
function B(e, t, n) {
  var r, s, o, a = {};
  for (o in t)
    o == "key" ? r = t[o] : o == "ref" ? s = t[o] : a[o] = t[o];
  if (arguments.length > 2 && (a.children = arguments.length > 3 ? Fi.call(arguments, 2) : n), typeof e == "function" && e.defaultProps != null)
    for (o in e.defaultProps)
      a[o] === void 0 && (a[o] = e.defaultProps[o]);
  return Mo(e, a, r, s, null);
}
function Mo(e, t, n, r, s) {
  var o = { type: e, props: t, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: s == null ? ++Qf : s };
  return s == null && ie.vnode != null && ie.vnode(o), o;
}
function md() {
  return { current: null };
}
function zi(e) {
  return e.children;
}
function yr(e, t) {
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
function nu(e) {
  var t, n;
  if ((e = e.__) != null && e.__c != null) {
    for (e.__e = e.__c.base = null, t = 0; t < e.__k.length; t++)
      if ((n = e.__k[t]) != null && n.__e != null) {
        e.__e = e.__c.base = n.__e;
        break;
      }
    return nu(e);
  }
}
function ml(e) {
  (!e.__d && (e.__d = !0) && gr.push(e) && !ii.__r++ || vl !== ie.debounceRendering) && ((vl = ie.debounceRendering) || setTimeout)(ii);
}
function ii() {
  for (var e; ii.__r = gr.length; )
    e = gr.sort(function(t, n) {
      return t.__v.__b - n.__v.__b;
    }), gr = [], e.some(function(t) {
      var n, r, s, o, a, c;
      t.__d && (a = (o = (n = t).__v).__e, (c = n.__P) && (r = [], (s = zt({}, o)).__v = o.__v + 1, Is(c, o, s, n.__n, c.ownerSVGElement !== void 0, o.__h != null ? [a] : null, r, a == null ? jr(o) : a, o.__h), su(r, o), o.__e != a && nu(o)));
    });
}
function ru(e, t, n, r, s, o, a, c, f, p) {
  var i, d, u, l, _, g, h, v = r && r.__k || eu, m = v.length;
  for (n.__k = [], i = 0; i < t.length; i++)
    if ((l = n.__k[i] = (l = t[i]) == null || typeof l == "boolean" ? null : typeof l == "string" || typeof l == "number" || typeof l == "bigint" ? Mo(null, l, null, null, l) : Array.isArray(l) ? Mo(zi, { children: l }, null, null, null) : l.__b > 0 ? Mo(l.type, l.props, l.key, l.ref ? l.ref : null, l.__v) : l) != null) {
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
      Is(e, l, u = u || oi, s, o, a, c, f, p), _ = l.__e, (d = l.ref) && u.ref != d && (h || (h = []), u.ref && h.push(u.ref, null, l), h.push(d, l.__c || _, l)), _ != null ? (g == null && (g = _), typeof l.type == "function" && l.__k === u.__k ? l.__d = f = ou(l, f, e) : f = iu(e, l, u, v, _, f), typeof n.type == "function" && (n.__d = f)) : f && u.__e == f && f.parentNode != e && (f = jr(u));
    }
  for (n.__e = g, i = m; i--; )
    v[i] != null && lu(v[i], v[i]);
  if (h)
    for (i = 0; i < h.length; i++)
      au(h[i], h[++i], h[++i]);
}
function ou(e, t, n) {
  for (var r, s = e.__k, o = 0; s && o < s.length; o++)
    (r = s[o]) && (r.__ = e, t = typeof r.type == "function" ? ou(r, t, n) : iu(n, r, r, s, r.__e, t));
  return t;
}
function iu(e, t, n, r, s, o) {
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
function gd(e, t, n, r, s) {
  var o;
  for (o in n)
    o === "children" || o === "key" || o in t || si(e, o, null, n[o], r);
  for (o in t)
    s && typeof t[o] != "function" || o === "children" || o === "key" || o === "value" || o === "checked" || n[o] === t[o] || si(e, o, t[o], n[o], r);
}
function gl(e, t, n) {
  t[0] === "-" ? e.setProperty(t, n) : e[t] = n == null ? "" : typeof n != "number" || vd.test(t) ? n : n + "px";
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
            n && t in n || gl(e.style, t, "");
        if (n)
          for (t in n)
            r && n[t] === r[t] || gl(e.style, t, n[t]);
      }
    else if (t[0] === "o" && t[1] === "n")
      o = t !== (t = t.replace(/Capture$/, "")), t = t.toLowerCase() in e ? t.toLowerCase().slice(2) : t.slice(2), e.l || (e.l = {}), e.l[t + o] = n, n ? r || e.addEventListener(t, o ? bl : yl, o) : e.removeEventListener(t, o ? bl : yl, o);
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
function yl(e) {
  this.l[e.type + !1](ie.event ? ie.event(e) : e);
}
function bl(e) {
  this.l[e.type + !0](ie.event ? ie.event(e) : e);
}
function Is(e, t, n, r, s, o, a, c, f) {
  var p, i, d, u, l, _, g, h, v, m, k, b, E, $, S, y = t.type;
  if (t.constructor !== void 0)
    return null;
  n.__h != null && (f = n.__h, c = t.__e = n.__e, t.__h = null, o = [c]), (p = ie.__b) && p(t);
  try {
    e:
      if (typeof y == "function") {
        if (h = t.props, v = (p = y.contextType) && r[p.__c], m = p ? v ? v.props.value : p.__ : r, n.__c ? g = (i = t.__c = n.__c).__ = i.__E : ("prototype" in y && y.prototype.render ? t.__c = i = new y(h, m) : (t.__c = i = new yr(h, m), i.constructor = y, i.render = bd), v && v.sub(i), i.props = h, i.state || (i.state = {}), i.context = m, i.__n = r, d = i.__d = !0, i.__h = [], i._sb = []), i.__s == null && (i.__s = i.state), y.getDerivedStateFromProps != null && (i.__s == i.state && (i.__s = zt({}, i.__s)), zt(i.__s, y.getDerivedStateFromProps(h, i.__s))), u = i.props, l = i.state, d)
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
        i.state = i.__s, i.getChildContext != null && (r = zt(zt({}, r), i.getChildContext())), d || i.getSnapshotBeforeUpdate == null || (_ = i.getSnapshotBeforeUpdate(u, l)), S = p != null && p.type === zi && p.key == null ? p.props.children : p, ru(e, Array.isArray(S) ? S : [S], t, n, r, s, o, a, c, f), i.base = t.__e, t.__h = null, i.__h.length && a.push(i), g && (i.__E = i.__ = null), i.__e = !1;
      } else
        o == null && t.__v === n.__v ? (t.__k = n.__k, t.__e = n.__e) : t.__e = yd(n.__e, t, n, r, s, o, a, f);
    (p = ie.diffed) && p(t);
  } catch (x) {
    t.__v = null, (f || o != null) && (t.__e = c, t.__h = !!f, o[o.indexOf(c)] = null), ie.__e(x, t, n);
  }
}
function su(e, t) {
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
function yd(e, t, n, r, s, o, a, c) {
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
    if (o = o && Fi.call(e.childNodes), p = (d = n.props || oi).dangerouslySetInnerHTML, i = u.dangerouslySetInnerHTML, !c) {
      if (o != null)
        for (d = {}, _ = 0; _ < e.attributes.length; _++)
          d[e.attributes[_].name] = e.attributes[_].value;
      (i || p) && (i && (p && i.__html == p.__html || i.__html === e.innerHTML) || (e.innerHTML = i && i.__html || ""));
    }
    if (gd(e, u, d, s, c), i)
      t.__k = [];
    else if (_ = t.props.children, ru(e, Array.isArray(_) ? _ : [_], t, n, r, s && l !== "foreignObject", o, a, o ? o[0] : n.__k && jr(n, 0), c), o != null)
      for (_ = o.length; _--; )
        o[_] != null && tu(o[_]);
    c || ("value" in u && (_ = u.value) !== void 0 && (_ !== e.value || l === "progress" && !_ || l === "option" && _ !== d.value) && si(e, "value", _, d.value, !1), "checked" in u && (_ = u.checked) !== void 0 && _ !== e.checked && si(e, "checked", _, d.checked, !1));
  }
  return e;
}
function au(e, t, n) {
  try {
    typeof e == "function" ? e(t) : e.current = t;
  } catch (r) {
    ie.__e(r, n);
  }
}
function lu(e, t, n) {
  var r, s;
  if (ie.unmount && ie.unmount(e), (r = e.ref) && (r.current && r.current !== e.__e || au(r, null, t)), (r = e.__c) != null) {
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
      r[s] && lu(r[s], t, n || typeof e.type != "function");
  n || e.__e == null || tu(e.__e), e.__ = e.__e = e.__d = void 0;
}
function bd(e, t, n) {
  return this.constructor(e, n);
}
function wd(e, t, n) {
  var r, s, o;
  ie.__ && ie.__(e, t), s = (r = typeof n == "function") ? null : n && n.__k || t.__k, o = [], Is(t, e = (!r && n || t).__k = B(zi, null, [e]), s || oi, oi, t.ownerSVGElement !== void 0, !r && n ? [n] : s ? null : t.firstChild ? Fi.call(t.childNodes) : null, o, !r && n ? n : s ? s.__e : t.firstChild, r), su(o, e);
}
Fi = eu.slice, ie = { __e: function(e, t, n, r) {
  for (var s, o, a; t = t.__; )
    if ((s = t.__c) && !s.__)
      try {
        if ((o = s.constructor) && o.getDerivedStateFromError != null && (s.setState(o.getDerivedStateFromError(e)), a = s.__d), s.componentDidCatch != null && (s.componentDidCatch(e, r || {}), a = s.__d), a)
          return s.__E = s;
      } catch (c) {
        e = c;
      }
  throw e;
} }, Qf = 0, yr.prototype.setState = function(e, t) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = zt({}, this.state), typeof e == "function" && (e = e(zt({}, n), this.props)), e && zt(n, e), e != null && this.__v && (t && this._sb.push(t), ml(this));
}, yr.prototype.forceUpdate = function(e) {
  this.__v && (this.__e = !0, e && this.__h.push(e), ml(this));
}, yr.prototype.render = zi, gr = [], ii.__r = 0;
var $d = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, cu = { exports: {} };
(function(e, t) {
  (function(n, r) {
    e.exports = r();
  })($d, function() {
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
})(cu);
const Z = cu.exports;
class kd extends yr {
  constructor() {
    super(...arguments);
    A(this, "DATEROWCOUNT", 6);
    A(this, "ref", md());
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
function Pe(e) {
  if (e == null)
    return window;
  if (e.toString() !== "[object Window]") {
    var t = e.ownerDocument;
    return t && t.defaultView || window;
  }
  return e;
}
function vn(e) {
  var t = Pe(e).Element;
  return e instanceof t || e instanceof Element;
}
function Te(e) {
  var t = Pe(e).HTMLElement;
  return e instanceof t || e instanceof HTMLElement;
}
function Us(e) {
  if (typeof ShadowRoot > "u")
    return !1;
  var t = Pe(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot;
}
var pn = Math.max, ai = Math.min, In = Math.round;
function cs() {
  var e = navigator.userAgentData;
  return e != null && e.brands ? e.brands.map(function(t) {
    return t.brand + "/" + t.version;
  }).join(" ") : navigator.userAgent;
}
function fu() {
  return !/^((?!chrome|android).)*safari/i.test(cs());
}
function Un(e, t, n) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  var r = e.getBoundingClientRect(), s = 1, o = 1;
  t && Te(e) && (s = e.offsetWidth > 0 && In(r.width) / e.offsetWidth || 1, o = e.offsetHeight > 0 && In(r.height) / e.offsetHeight || 1);
  var a = vn(e) ? Pe(e) : window, c = a.visualViewport, f = !fu() && n, p = (r.left + (f && c ? c.offsetLeft : 0)) / s, i = (r.top + (f && c ? c.offsetTop : 0)) / o, d = r.width / s, u = r.height / o;
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
function Fs(e) {
  var t = Pe(e), n = t.pageXOffset, r = t.pageYOffset;
  return {
    scrollLeft: n,
    scrollTop: r
  };
}
function xd(e) {
  return {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  };
}
function Sd(e) {
  return e === Pe(e) || !Te(e) ? Fs(e) : xd(e);
}
function ct(e) {
  return e ? (e.nodeName || "").toLowerCase() : null;
}
function tn(e) {
  return ((vn(e) ? e.ownerDocument : e.document) || window.document).documentElement;
}
function zs(e) {
  return Un(tn(e)).left + Fs(e).scrollLeft;
}
function wt(e) {
  return Pe(e).getComputedStyle(e);
}
function Ys(e) {
  var t = wt(e), n = t.overflow, r = t.overflowX, s = t.overflowY;
  return /auto|scroll|overlay|hidden/.test(n + s + r);
}
function Ed(e) {
  var t = e.getBoundingClientRect(), n = In(t.width) / e.offsetWidth || 1, r = In(t.height) / e.offsetHeight || 1;
  return n !== 1 || r !== 1;
}
function Cd(e, t, n) {
  n === void 0 && (n = !1);
  var r = Te(t), s = Te(t) && Ed(t), o = tn(t), a = Un(e, s, n), c = {
    scrollLeft: 0,
    scrollTop: 0
  }, f = {
    x: 0,
    y: 0
  };
  return (r || !r && !n) && ((ct(t) !== "body" || Ys(o)) && (c = Sd(t)), Te(t) ? (f = Un(t, !0), f.x += t.clientLeft, f.y += t.clientTop) : o && (f.x = zs(o))), {
    x: a.left + c.scrollLeft - f.x,
    y: a.top + c.scrollTop - f.y,
    width: a.width,
    height: a.height
  };
}
function Vs(e) {
  var t = Un(e), n = e.offsetWidth, r = e.offsetHeight;
  return Math.abs(t.width - n) <= 1 && (n = t.width), Math.abs(t.height - r) <= 1 && (r = t.height), {
    x: e.offsetLeft,
    y: e.offsetTop,
    width: n,
    height: r
  };
}
function Yi(e) {
  return ct(e) === "html" ? e : e.assignedSlot || e.parentNode || (Us(e) ? e.host : null) || tn(e);
}
function uu(e) {
  return ["html", "body", "#document"].indexOf(ct(e)) >= 0 ? e.ownerDocument.body : Te(e) && Ys(e) ? e : uu(Yi(e));
}
function br(e, t) {
  var n;
  t === void 0 && (t = []);
  var r = uu(e), s = r === ((n = e.ownerDocument) == null ? void 0 : n.body), o = Pe(r), a = s ? [o].concat(o.visualViewport || [], Ys(r) ? r : []) : r, c = t.concat(a);
  return s ? c : c.concat(br(Yi(a)));
}
function Od(e) {
  return ["table", "td", "th"].indexOf(ct(e)) >= 0;
}
function wl(e) {
  return !Te(e) || wt(e).position === "fixed" ? null : e.offsetParent;
}
function Md(e) {
  var t = /firefox/i.test(cs()), n = /Trident/i.test(cs());
  if (n && Te(e)) {
    var r = wt(e);
    if (r.position === "fixed")
      return null;
  }
  var s = Yi(e);
  for (Us(s) && (s = s.host); Te(s) && ["html", "body"].indexOf(ct(s)) < 0; ) {
    var o = wt(s);
    if (o.transform !== "none" || o.perspective !== "none" || o.contain === "paint" || ["transform", "perspective"].indexOf(o.willChange) !== -1 || t && o.willChange === "filter" || t && o.filter && o.filter !== "none")
      return s;
    s = s.parentNode;
  }
  return null;
}
function fo(e) {
  for (var t = Pe(e), n = wl(e); n && Od(n) && wt(n).position === "static"; )
    n = wl(n);
  return n && (ct(n) === "html" || ct(n) === "body" && wt(n).position === "static") ? t : n || Md(e) || t;
}
var Ee = "top", Ve = "bottom", qe = "right", Ce = "left", qs = "auto", uo = [Ee, Ve, qe, Ce], Fn = "start", Br = "end", Ad = "clippingParents", _u = "viewport", tr = "popper", Dd = "reference", $l = /* @__PURE__ */ uo.reduce(function(e, t) {
  return e.concat([t + "-" + Fn, t + "-" + Br]);
}, []), pu = /* @__PURE__ */ [].concat(uo, [qs]).reduce(function(e, t) {
  return e.concat([t, t + "-" + Fn, t + "-" + Br]);
}, []), Td = "beforeRead", Nd = "read", Ld = "afterRead", Pd = "beforeMain", Rd = "main", Hd = "afterMain", Wd = "beforeWrite", jd = "write", Bd = "afterWrite", Id = [Td, Nd, Ld, Pd, Rd, Hd, Wd, jd, Bd];
function Ud(e) {
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
function Fd(e) {
  var t = Ud(e);
  return Id.reduce(function(n, r) {
    return n.concat(t.filter(function(s) {
      return s.phase === r;
    }));
  }, []);
}
function zd(e) {
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
function Yd(e) {
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
function Vd(e, t) {
  var n = Pe(e), r = tn(e), s = n.visualViewport, o = r.clientWidth, a = r.clientHeight, c = 0, f = 0;
  if (s) {
    o = s.width, a = s.height;
    var p = fu();
    (p || !p && t === "fixed") && (c = s.offsetLeft, f = s.offsetTop);
  }
  return {
    width: o,
    height: a,
    x: c + zs(e),
    y: f
  };
}
function qd(e) {
  var t, n = tn(e), r = Fs(e), s = (t = e.ownerDocument) == null ? void 0 : t.body, o = pn(n.scrollWidth, n.clientWidth, s ? s.scrollWidth : 0, s ? s.clientWidth : 0), a = pn(n.scrollHeight, n.clientHeight, s ? s.scrollHeight : 0, s ? s.clientHeight : 0), c = -r.scrollLeft + zs(e), f = -r.scrollTop;
  return wt(s || n).direction === "rtl" && (c += pn(n.clientWidth, s ? s.clientWidth : 0) - o), {
    width: o,
    height: a,
    x: c,
    y: f
  };
}
function du(e, t) {
  var n = t.getRootNode && t.getRootNode();
  if (e.contains(t))
    return !0;
  if (n && Us(n)) {
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
function Gd(e, t) {
  var n = Un(e, !1, t === "fixed");
  return n.top = n.top + e.clientTop, n.left = n.left + e.clientLeft, n.bottom = n.top + e.clientHeight, n.right = n.left + e.clientWidth, n.width = e.clientWidth, n.height = e.clientHeight, n.x = n.left, n.y = n.top, n;
}
function kl(e, t, n) {
  return t === _u ? fs(Vd(e, n)) : vn(t) ? Gd(t, n) : fs(qd(tn(e)));
}
function Xd(e) {
  var t = br(Yi(e)), n = ["absolute", "fixed"].indexOf(wt(e).position) >= 0, r = n && Te(e) ? fo(e) : e;
  return vn(r) ? t.filter(function(s) {
    return vn(s) && du(s, r) && ct(s) !== "body";
  }) : [];
}
function Kd(e, t, n, r) {
  var s = t === "clippingParents" ? Xd(e) : [].concat(t), o = [].concat(s, [n]), a = o[0], c = o.reduce(function(f, p) {
    var i = kl(e, p, r);
    return f.top = pn(i.top, f.top), f.right = ai(i.right, f.right), f.bottom = ai(i.bottom, f.bottom), f.left = pn(i.left, f.left), f;
  }, kl(e, a, r));
  return c.width = c.right - c.left, c.height = c.bottom - c.top, c.x = c.left, c.y = c.top, c;
}
function zn(e) {
  return e.split("-")[1];
}
function Gs(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function hu(e) {
  var t = e.reference, n = e.element, r = e.placement, s = r ? at(r) : null, o = r ? zn(r) : null, a = t.x + t.width / 2 - n.width / 2, c = t.y + t.height / 2 - n.height / 2, f;
  switch (s) {
    case Ee:
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
  var p = s ? Gs(s) : null;
  if (p != null) {
    var i = p === "y" ? "height" : "width";
    switch (o) {
      case Fn:
        f[p] = f[p] - (t[i] / 2 - n[i] / 2);
        break;
      case Br:
        f[p] = f[p] + (t[i] / 2 - n[i] / 2);
        break;
    }
  }
  return f;
}
function vu() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
function mu(e) {
  return Object.assign({}, vu(), e);
}
function gu(e, t) {
  return t.reduce(function(n, r) {
    return n[r] = e, n;
  }, {});
}
function Xs(e, t) {
  t === void 0 && (t = {});
  var n = t, r = n.placement, s = r === void 0 ? e.placement : r, o = n.strategy, a = o === void 0 ? e.strategy : o, c = n.boundary, f = c === void 0 ? Ad : c, p = n.rootBoundary, i = p === void 0 ? _u : p, d = n.elementContext, u = d === void 0 ? tr : d, l = n.altBoundary, _ = l === void 0 ? !1 : l, g = n.padding, h = g === void 0 ? 0 : g, v = mu(typeof h != "number" ? h : gu(h, uo)), m = u === tr ? Dd : tr, k = e.rects.popper, b = e.elements[_ ? m : u], E = Kd(vn(b) ? b : b.contextElement || tn(e.elements.popper), f, i, a), $ = Un(e.elements.reference), S = hu({
    reference: $,
    element: k,
    strategy: "absolute",
    placement: s
  }), y = fs(Object.assign({}, k, S)), x = u === tr ? y : $, C = {
    top: E.top - x.top + v.top,
    bottom: x.bottom - E.bottom + v.bottom,
    left: E.left - x.left + v.left,
    right: x.right - E.right + v.right
  }, W = e.modifiersData.offset;
  if (u === tr && W) {
    var F = W[s];
    Object.keys(C).forEach(function(D) {
      var T = [qe, Ve].indexOf(D) >= 0 ? 1 : -1, O = [Ee, Ve].indexOf(D) >= 0 ? "y" : "x";
      C[D] += F[O] * T;
    });
  }
  return C;
}
var xl = {
  placement: "bottom",
  modifiers: [],
  strategy: "absolute"
};
function Sl() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return !t.some(function(r) {
    return !(r && typeof r.getBoundingClientRect == "function");
  });
}
function Jd(e) {
  e === void 0 && (e = {});
  var t = e, n = t.defaultModifiers, r = n === void 0 ? [] : n, s = t.defaultOptions, o = s === void 0 ? xl : s;
  return function(c, f, p) {
    p === void 0 && (p = o);
    var i = {
      placement: "bottom",
      orderedModifiers: [],
      options: Object.assign({}, xl, o),
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
          reference: vn(c) ? br(c) : c.contextElement ? br(c.contextElement) : [],
          popper: br(f)
        };
        var k = Fd(Yd([].concat(r, i.options.modifiers)));
        return i.orderedModifiers = k.filter(function(b) {
          return b.enabled;
        }), _(), l.update();
      },
      forceUpdate: function() {
        if (!u) {
          var v = i.elements, m = v.reference, k = v.popper;
          if (!!Sl(m, k)) {
            i.rects = {
              reference: Cd(m, fo(k), i.options.strategy === "fixed"),
              popper: Vs(k)
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
      update: zd(function() {
        return new Promise(function(h) {
          l.forceUpdate(), h(i);
        });
      }),
      destroy: function() {
        g(), u = !0;
      }
    };
    if (!Sl(c, f))
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
var mo = {
  passive: !0
};
function Zd(e) {
  var t = e.state, n = e.instance, r = e.options, s = r.scroll, o = s === void 0 ? !0 : s, a = r.resize, c = a === void 0 ? !0 : a, f = Pe(t.elements.popper), p = [].concat(t.scrollParents.reference, t.scrollParents.popper);
  return o && p.forEach(function(i) {
    i.addEventListener("scroll", n.update, mo);
  }), c && f.addEventListener("resize", n.update, mo), function() {
    o && p.forEach(function(i) {
      i.removeEventListener("scroll", n.update, mo);
    }), c && f.removeEventListener("resize", n.update, mo);
  };
}
const Qd = {
  name: "eventListeners",
  enabled: !0,
  phase: "write",
  fn: function() {
  },
  effect: Zd,
  data: {}
};
function eh(e) {
  var t = e.state, n = e.name;
  t.modifiersData[n] = hu({
    reference: t.rects.reference,
    element: t.rects.popper,
    strategy: "absolute",
    placement: t.placement
  });
}
const th = {
  name: "popperOffsets",
  enabled: !0,
  phase: "read",
  fn: eh,
  data: {}
};
var nh = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function rh(e) {
  var t = e.x, n = e.y, r = window, s = r.devicePixelRatio || 1;
  return {
    x: In(t * s) / s || 0,
    y: In(n * s) / s || 0
  };
}
function El(e) {
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
    var $ = fo(n), S = "clientHeight", y = "clientWidth";
    if ($ === Pe(n) && ($ = tn(n), wt($).position !== "static" && c === "absolute" && (S = "scrollHeight", y = "scrollWidth")), $ = $, s === Ee || (s === Ce || s === qe) && o === Br) {
      b = Ve;
      var x = d && $ === E && E.visualViewport ? E.visualViewport.height : $[S];
      g -= x - r.height, g *= f ? 1 : -1;
    }
    if (s === Ce || (s === Ee || s === Ve) && o === Br) {
      k = qe;
      var C = d && $ === E && E.visualViewport ? E.visualViewport.width : $[y];
      l -= C - r.width, l *= f ? 1 : -1;
    }
  }
  var W = Object.assign({
    position: c
  }, p && nh), F = i === !0 ? rh({
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
function oh(e) {
  var t = e.state, n = e.options, r = n.gpuAcceleration, s = r === void 0 ? !0 : r, o = n.adaptive, a = o === void 0 ? !0 : o, c = n.roundOffsets, f = c === void 0 ? !0 : c, p = {
    placement: at(t.placement),
    variation: zn(t.placement),
    popper: t.elements.popper,
    popperRect: t.rects.popper,
    gpuAcceleration: s,
    isFixed: t.options.strategy === "fixed"
  };
  t.modifiersData.popperOffsets != null && (t.styles.popper = Object.assign({}, t.styles.popper, El(Object.assign({}, p, {
    offsets: t.modifiersData.popperOffsets,
    position: t.options.strategy,
    adaptive: a,
    roundOffsets: f
  })))), t.modifiersData.arrow != null && (t.styles.arrow = Object.assign({}, t.styles.arrow, El(Object.assign({}, p, {
    offsets: t.modifiersData.arrow,
    position: "absolute",
    adaptive: !1,
    roundOffsets: f
  })))), t.attributes.popper = Object.assign({}, t.attributes.popper, {
    "data-popper-placement": t.placement
  });
}
const ih = {
  name: "computeStyles",
  enabled: !0,
  phase: "beforeWrite",
  fn: oh,
  data: {}
};
function sh(e) {
  var t = e.state;
  Object.keys(t.elements).forEach(function(n) {
    var r = t.styles[n] || {}, s = t.attributes[n] || {}, o = t.elements[n];
    !Te(o) || !ct(o) || (Object.assign(o.style, r), Object.keys(s).forEach(function(a) {
      var c = s[a];
      c === !1 ? o.removeAttribute(a) : o.setAttribute(a, c === !0 ? "" : c);
    }));
  });
}
function ah(e) {
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
      !Te(s) || !ct(s) || (Object.assign(s.style, c), Object.keys(o).forEach(function(f) {
        s.removeAttribute(f);
      }));
    });
  };
}
const lh = {
  name: "applyStyles",
  enabled: !0,
  phase: "write",
  fn: sh,
  effect: ah,
  requires: ["computeStyles"]
};
var ch = [Qd, th, ih, lh], fh = /* @__PURE__ */ Jd({
  defaultModifiers: ch
});
function wr(e, t, n) {
  return pn(e, ai(t, n));
}
function uh(e, t, n) {
  var r = wr(e, t, n);
  return r > n ? n : r;
}
var _h = function(t, n) {
  return t = typeof t == "function" ? t(Object.assign({}, n.rects, {
    placement: n.placement
  })) : t, mu(typeof t != "number" ? t : gu(t, uo));
};
function ph(e) {
  var t, n = e.state, r = e.name, s = e.options, o = n.elements.arrow, a = n.modifiersData.popperOffsets, c = at(n.placement), f = Gs(c), p = [Ce, qe].indexOf(c) >= 0, i = p ? "height" : "width";
  if (!(!o || !a)) {
    var d = _h(s.padding, n), u = Vs(o), l = f === "y" ? Ee : Ce, _ = f === "y" ? Ve : qe, g = n.rects.reference[i] + n.rects.reference[f] - a[f] - n.rects.popper[i], h = a[f] - n.rects.reference[f], v = fo(o), m = v ? f === "y" ? v.clientHeight || 0 : v.clientWidth || 0 : 0, k = g / 2 - h / 2, b = d[l], E = m - u[i] - d[_], $ = m / 2 - u[i] / 2 + k, S = wr(b, $, E), y = f;
    n.modifiersData[r] = (t = {}, t[y] = S, t.centerOffset = S - $, t);
  }
}
function dh(e) {
  var t = e.state, n = e.options, r = n.element, s = r === void 0 ? "[data-popper-arrow]" : r;
  s != null && (typeof s == "string" && (s = t.elements.popper.querySelector(s), !s) || !du(t.elements.popper, s) || (t.elements.arrow = s));
}
const hh = {
  name: "arrow",
  enabled: !0,
  phase: "main",
  fn: ph,
  effect: dh,
  requires: ["popperOffsets"],
  requiresIfExists: ["preventOverflow"]
};
function vh(e, t, n) {
  var r = at(e), s = [Ce, Ee].indexOf(r) >= 0 ? -1 : 1, o = typeof n == "function" ? n(Object.assign({}, t, {
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
function mh(e) {
  var t = e.state, n = e.options, r = e.name, s = n.offset, o = s === void 0 ? [0, 0] : s, a = pu.reduce(function(i, d) {
    return i[d] = vh(d, t.rects, o), i;
  }, {}), c = a[t.placement], f = c.x, p = c.y;
  t.modifiersData.popperOffsets != null && (t.modifiersData.popperOffsets.x += f, t.modifiersData.popperOffsets.y += p), t.modifiersData[r] = a;
}
const gh = {
  name: "offset",
  enabled: !0,
  phase: "main",
  requires: ["popperOffsets"],
  fn: mh
};
function yh(e) {
  return e === "x" ? "y" : "x";
}
function bh(e) {
  var t = e.state, n = e.options, r = e.name, s = n.mainAxis, o = s === void 0 ? !0 : s, a = n.altAxis, c = a === void 0 ? !1 : a, f = n.boundary, p = n.rootBoundary, i = n.altBoundary, d = n.padding, u = n.tether, l = u === void 0 ? !0 : u, _ = n.tetherOffset, g = _ === void 0 ? 0 : _, h = Xs(t, {
    boundary: f,
    rootBoundary: p,
    padding: d,
    altBoundary: i
  }), v = at(t.placement), m = zn(t.placement), k = !m, b = Gs(v), E = yh(b), $ = t.modifiersData.popperOffsets, S = t.rects.reference, y = t.rects.popper, x = typeof g == "function" ? g(Object.assign({}, t.rects, {
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
      var D, T = b === "y" ? Ee : Ce, O = b === "y" ? Ve : qe, N = b === "y" ? "height" : "width", M = $[b], j = M + h[T], R = M - h[O], U = l ? -y[N] / 2 : 0, G = m === Fn ? S[N] : y[N], z = m === Fn ? -y[N] : -S[N], K = t.elements.arrow, Q = l && K ? Vs(K) : {
        width: 0,
        height: 0
      }, L = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : vu(), Y = L[T], X = L[O], q = wr(0, S[N], Q[N]), J = k ? S[N] / 2 - U - q - Y - C.mainAxis : G - q - Y - C.mainAxis, le = k ? -S[N] / 2 + U + q + X + C.mainAxis : z + q + X + C.mainAxis, ae = t.elements.arrow && fo(t.elements.arrow), be = ae ? b === "y" ? ae.clientTop || 0 : ae.clientLeft || 0 : 0, Je = (D = W == null ? void 0 : W[b]) != null ? D : 0, ee = M + J - Je - be, xt = M + le - Je, We = wr(l ? ai(j, ee) : j, M, l ? pn(R, xt) : R);
      $[b] = We, F[b] = We - M;
    }
    if (c) {
      var je, St = b === "x" ? Ee : Ce, Ze = b === "x" ? Ve : qe, te = $[E], me = E === "y" ? "height" : "width", Be = te + h[St], Et = te - h[Ze], Ie = [Ee, Ce].indexOf(v) !== -1, Ct = (je = W == null ? void 0 : W[E]) != null ? je : 0, Ot = Ie ? Be : te - S[me] - y[me] - Ct + C.altAxis, Mt = Ie ? te + S[me] + y[me] - Ct - C.altAxis : Et, At = l && Ie ? uh(Ot, te, Mt) : wr(l ? Ot : Be, te, l ? Mt : Et);
      $[E] = At, F[E] = At - te;
    }
    t.modifiersData[r] = F;
  }
}
const wh = {
  name: "preventOverflow",
  enabled: !0,
  phase: "main",
  fn: bh,
  requiresIfExists: ["offset"]
};
var $h = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function Ao(e) {
  return e.replace(/left|right|bottom|top/g, function(t) {
    return $h[t];
  });
}
var kh = {
  start: "end",
  end: "start"
};
function Cl(e) {
  return e.replace(/start|end/g, function(t) {
    return kh[t];
  });
}
function xh(e, t) {
  t === void 0 && (t = {});
  var n = t, r = n.placement, s = n.boundary, o = n.rootBoundary, a = n.padding, c = n.flipVariations, f = n.allowedAutoPlacements, p = f === void 0 ? pu : f, i = zn(r), d = i ? c ? $l : $l.filter(function(_) {
    return zn(_) === i;
  }) : uo, u = d.filter(function(_) {
    return p.indexOf(_) >= 0;
  });
  u.length === 0 && (u = d);
  var l = u.reduce(function(_, g) {
    return _[g] = Xs(e, {
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
function Sh(e) {
  if (at(e) === qs)
    return [];
  var t = Ao(e);
  return [Cl(e), t, Cl(t)];
}
function Eh(e) {
  var t = e.state, n = e.options, r = e.name;
  if (!t.modifiersData[r]._skip) {
    for (var s = n.mainAxis, o = s === void 0 ? !0 : s, a = n.altAxis, c = a === void 0 ? !0 : a, f = n.fallbackPlacements, p = n.padding, i = n.boundary, d = n.rootBoundary, u = n.altBoundary, l = n.flipVariations, _ = l === void 0 ? !0 : l, g = n.allowedAutoPlacements, h = t.options.placement, v = at(h), m = v === h, k = f || (m || !_ ? [Ao(h)] : Sh(h)), b = [h].concat(k).reduce(function(Q, L) {
      return Q.concat(at(L) === qs ? xh(t, {
        placement: L,
        boundary: i,
        rootBoundary: d,
        padding: p,
        flipVariations: _,
        allowedAutoPlacements: g
      }) : L);
    }, []), E = t.rects.reference, $ = t.rects.popper, S = /* @__PURE__ */ new Map(), y = !0, x = b[0], C = 0; C < b.length; C++) {
      var W = b[C], F = at(W), D = zn(W) === Fn, T = [Ee, Ve].indexOf(F) >= 0, O = T ? "width" : "height", N = Xs(t, {
        placement: W,
        boundary: i,
        rootBoundary: d,
        altBoundary: u,
        padding: p
      }), M = T ? D ? qe : Ce : D ? Ve : Ee;
      E[O] > $[O] && (M = Ao(M));
      var j = Ao(M), R = [];
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
const Ch = {
  name: "flip",
  enabled: !0,
  phase: "main",
  fn: Eh,
  requiresIfExists: ["offset"],
  data: {
    _skip: !1
  }
};
var Sn, En, an, Ue, eo, xi;
class it extends Xt {
  constructor() {
    super(...arguments);
    P(this, Sn, void 0);
    P(this, En, 0);
    P(this, an, void 0);
    P(this, Ue, void 0);
    P(this, eo, void 0);
    A(this, "hideLater", () => {
      w(this, xi).call(this), H(this, En, window.setTimeout(this.hide.bind(this), 100));
    });
    P(this, xi, () => {
      clearTimeout(w(this, En)), H(this, En, 0);
    });
  }
  get isShown() {
    var n;
    return (n = w(this, an)) == null ? void 0 : n.classList.contains(this.constructor.CLASS_SHOW);
  }
  get datetimepicker() {
    return w(this, an) || this._ensureDatetimepicker();
  }
  get popper() {
    return w(this, Ue) ? w(this, Ue) : this._createPopper();
  }
  get trigger() {
    return w(this, eo) || this.element;
  }
  get elementShowClass() {
    return `with-${this.constructor.NAME}-show`;
  }
  show(n) {
    var r;
    return H(this, eo, n), this.element.classList.add(this.elementShowClass), (r = this.datetimepicker) == null || r.classList.add(this.constructor.CLASS_SHOW), this.datetimepicker.classList.add("fade"), this._createPopper().update(), !0;
  }
  hide() {
    var n, r;
    return (n = w(this, Ue)) == null || n.destroy(), H(this, Ue, void 0), this.element.classList.remove(this.elementShowClass), (r = w(this, an)) == null || r.classList.remove(this.constructor.CLASS_SHOW), this.datetimepicker.classList.remove("fade"), !0;
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
    return r.classList.add(n), wd(B(kd, { ...this.options }), r), this.options.arrow && r.prepend(this._createArrow()), document.body.appendChild(r), H(this, an, r), r;
  }
  _getPopperOptions() {
    const n = this._getArrowSize();
    return {
      modifiers: [
        wh,
        Ch,
        { ...hh, options: {
          padding: n,
          element: ".arrow"
        } },
        {
          ...gh,
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
    return w(this, Ue) ? w(this, Ue).setOptions(n) : H(this, Ue, fh(this._getPopperElement(), this.datetimepicker, n)), w(this, Ue);
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
Sn = new WeakMap(), En = new WeakMap(), an = new WeakMap(), Ue = new WeakMap(), eo = new WeakMap(), xi = new WeakMap(), A(it, "NAME", "datetimepicker"), A(it, "CLASSNAME", "datetimepicker"), A(it, "CLASS_SHOW", "show"), A(it, "MENU_SELECTOR", ".form-datetime:not(.disabled):not(:disabled)"), A(it, "DEFAULT", {
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
const Oh = (e) => {
  const t = document.getElementsByClassName("with-datetimepicker-show")[0];
  if (!t)
    return;
  const n = typeof t.closest == "function" ? t.closest(it.MENU_SELECTOR) : null;
  !n || !e.target.contains(n) || it.clear({ event: e });
};
window.addEventListener("scroll", Oh, !0);
var ln, Cn, Do;
const pt = class extends Xt {
  constructor() {
    super(...arguments);
    P(this, Cn);
    P(this, ln, 0);
  }
  get isShown() {
    return this.element.classList.contains(pt.CLASS_SHOW);
  }
  init() {
    this.on("click", this._handleClick.bind(this)), this.options.show && requestAnimationFrame(() => this.show());
  }
  show() {
    this.isShown || (this.element.classList.toggle("modal-trans", !!this.options.animation), this.element.classList.add(pt.CLASS_SHOW), this.element.style.zIndex = `${pt.zIndex++}`, this.emit("show", this), ne(this, Cn, Do).call(this, () => {
      this.element.classList.add(pt.CLASS_SHOWN), ne(this, Cn, Do).call(this, () => {
        this.emit("shown", this);
      });
    }, 50));
  }
  hide() {
    !this.isShown || (this.element.classList.remove(pt.CLASS_SHOWN), this.emit("hide", this), ne(this, Cn, Do).call(this, () => {
      this.element.classList.remove(pt.CLASS_SHOW), this.emit("hidden", this);
    }));
  }
  _handleClick(n) {
    const r = n.target;
    if (r.closest(pt.DISMISS_SELECTOR) || this.options.backdrop === !0 && r.closest(".modal")) {
      this.hide();
      return;
    }
  }
};
let Qe = pt;
ln = new WeakMap(), Cn = new WeakSet(), Do = function(n, r) {
  w(this, ln) && (clearTimeout(w(this, ln)), H(this, ln, 0)), n && (this.options.animation ? H(this, ln, window.setTimeout(n, r != null ? r : this.options.transTime)) : n());
}, A(Qe, "NAME", "modal"), A(Qe, "EVENTS", !0), A(Qe, "DEFAULT", {
  position: "fit",
  show: !0,
  keyboard: !0,
  animation: !0,
  backdrop: !0,
  transTime: 300
}), A(Qe, "CLASS_SHOW", "show"), A(Qe, "CLASS_SHOWN", "in"), A(Qe, "TOGGLE_SELECTOR", '[data-toggle="modal"]'), A(Qe, "DISMISS_SELECTOR", '[data-dismiss="modal"]'), A(Qe, "zIndex", 2e3);
class yu extends yt {
  beforeRender() {
    const t = super.beforeRender();
    return t.className = I(t.className, t.type ? `nav-${t.type}` : "", {
      "nav-stacked": t.stacked
    }), t;
  }
}
A(yu, "NAME", "nav");
class Ol extends Ke {
}
A(Ol, "NAME", "nav"), A(Ol, "Component", yu);
var bu, us, wu, Mh = [];
function Jt(e, t, n) {
  var r, s, o, a = {};
  for (o in t)
    o == "key" ? r = t[o] : o == "ref" ? s = t[o] : a[o] = t[o];
  if (arguments.length > 2 && (a.children = arguments.length > 3 ? bu.call(arguments, 2) : n), typeof e == "function" && e.defaultProps != null)
    for (o in e.defaultProps)
      a[o] === void 0 && (a[o] = e.defaultProps[o]);
  return Ah(e, a, r, s, null);
}
function Ah(e, t, n, r, s) {
  var o = { type: e, props: t, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: s == null ? ++wu : s };
  return s == null && us.vnode != null && us.vnode(o), o;
}
bu = Mh.slice, us = { __e: function(e, t, n, r) {
  for (var s, o, a; t = t.__; )
    if ((s = t.__c) && !s.__)
      try {
        if ((o = s.constructor) && o.getDerivedStateFromError != null && (s.setState(o.getDerivedStateFromError(e)), a = s.__d), s.componentDidCatch != null && (s.componentDidCatch(e, r || {}), a = s.__d), a)
          return s.__E = s;
      } catch (c) {
        e = c;
      }
  throw e;
} }, wu = 0;
var $u, _s, ku, Dh = [];
function Vi(e, t, n) {
  var r, s, o, a = {};
  for (o in t)
    o == "key" ? r = t[o] : o == "ref" ? s = t[o] : a[o] = t[o];
  if (arguments.length > 2 && (a.children = arguments.length > 3 ? $u.call(arguments, 2) : n), typeof e == "function" && e.defaultProps != null)
    for (o in e.defaultProps)
      a[o] === void 0 && (a[o] = e.defaultProps[o]);
  return Th(e, a, r, s, null);
}
function Th(e, t, n, r, s) {
  var o = { type: e, props: t, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: s == null ? ++ku : s };
  return s == null && _s.vnode != null && _s.vnode(o), o;
}
$u = Dh.slice, _s = { __e: function(e, t, n, r) {
  for (var s, o, a; t = t.__; )
    if ((s = t.__c) && !s.__)
      try {
        if ((o = s.constructor) && o.getDerivedStateFromError != null && (s.setState(o.getDerivedStateFromError(e)), a = s.__d), s.componentDidCatch != null && (s.componentDidCatch(e, r || {}), a = s.__d), a)
          return s.__E = s;
      } catch (c) {
        e = c;
      }
  throw e;
} }, ku = 0;
function Nh({
  key: e,
  type: t,
  btnType: n,
  ...r
}) {
  return /* @__PURE__ */ Vi(Qt, {
    type: n,
    ...r
  });
}
var Ks, de, xu, $r, Ml, Su = {}, Eu = [], Lh = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function Yt(e, t) {
  for (var n in t)
    e[n] = t[n];
  return e;
}
function Cu(e) {
  var t = e.parentNode;
  t && t.removeChild(e);
}
function Ou(e, t, n) {
  var r, s, o, a = {};
  for (o in t)
    o == "key" ? r = t[o] : o == "ref" ? s = t[o] : a[o] = t[o];
  if (arguments.length > 2 && (a.children = arguments.length > 3 ? Ks.call(arguments, 2) : n), typeof e == "function" && e.defaultProps != null)
    for (o in e.defaultProps)
      a[o] === void 0 && (a[o] = e.defaultProps[o]);
  return To(e, a, r, s, null);
}
function To(e, t, n, r, s) {
  var o = { type: e, props: t, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: s == null ? ++xu : s };
  return s == null && de.vnode != null && de.vnode(o), o;
}
function Ph() {
  return { current: null };
}
function Js(e) {
  return e.children;
}
function kr(e, t) {
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
function Mu(e) {
  var t, n;
  if ((e = e.__) != null && e.__c != null) {
    for (e.__e = e.__c.base = null, t = 0; t < e.__k.length; t++)
      if ((n = e.__k[t]) != null && n.__e != null) {
        e.__e = e.__c.base = n.__e;
        break;
      }
    return Mu(e);
  }
}
function Al(e) {
  (!e.__d && (e.__d = !0) && $r.push(e) && !li.__r++ || Ml !== de.debounceRendering) && ((Ml = de.debounceRendering) || setTimeout)(li);
}
function li() {
  for (var e; li.__r = $r.length; )
    e = $r.sort(function(t, n) {
      return t.__v.__b - n.__v.__b;
    }), $r = [], e.some(function(t) {
      var n, r, s, o, a, c;
      t.__d && (a = (o = (n = t).__v).__e, (c = n.__P) && (r = [], (s = Yt({}, o)).__v = o.__v + 1, Nu(c, o, s, n.__n, c.ownerSVGElement !== void 0, o.__h != null ? [a] : null, r, a == null ? Ir(o) : a, o.__h), Hh(r, o), o.__e != a && Mu(o)));
    });
}
function Au(e, t, n, r, s, o, a, c, f, p) {
  var i, d, u, l, _, g, h, v = r && r.__k || Eu, m = v.length;
  for (n.__k = [], i = 0; i < t.length; i++)
    if ((l = n.__k[i] = (l = t[i]) == null || typeof l == "boolean" ? null : typeof l == "string" || typeof l == "number" || typeof l == "bigint" ? To(null, l, null, null, l) : Array.isArray(l) ? To(Js, { children: l }, null, null, null) : l.__b > 0 ? To(l.type, l.props, l.key, l.ref ? l.ref : null, l.__v) : l) != null) {
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
      Nu(e, l, u = u || Su, s, o, a, c, f, p), _ = l.__e, (d = l.ref) && u.ref != d && (h || (h = []), u.ref && h.push(u.ref, null, l), h.push(d, l.__c || _, l)), _ != null ? (g == null && (g = _), typeof l.type == "function" && l.__k === u.__k ? l.__d = f = Du(l, f, e) : f = Tu(e, l, u, v, _, f), typeof n.type == "function" && (n.__d = f)) : f && u.__e == f && f.parentNode != e && (f = Ir(u));
    }
  for (n.__e = g, i = m; i--; )
    v[i] != null && Pu(v[i], v[i]);
  if (h)
    for (i = 0; i < h.length; i++)
      Lu(h[i], h[++i], h[++i]);
}
function Du(e, t, n) {
  for (var r, s = e.__k, o = 0; s && o < s.length; o++)
    (r = s[o]) && (r.__ = e, t = typeof r.type == "function" ? Du(r, t, n) : Tu(n, r, r, s, r.__e, t));
  return t;
}
function Tu(e, t, n, r, s, o) {
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
function Rh(e, t, n, r, s) {
  var o;
  for (o in n)
    o === "children" || o === "key" || o in t || ci(e, o, null, n[o], r);
  for (o in t)
    s && typeof t[o] != "function" || o === "children" || o === "key" || o === "value" || o === "checked" || n[o] === t[o] || ci(e, o, t[o], n[o], r);
}
function Dl(e, t, n) {
  t[0] === "-" ? e.setProperty(t, n) : e[t] = n == null ? "" : typeof n != "number" || Lh.test(t) ? n : n + "px";
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
            n && t in n || Dl(e.style, t, "");
        if (n)
          for (t in n)
            r && n[t] === r[t] || Dl(e.style, t, n[t]);
      }
    else if (t[0] === "o" && t[1] === "n")
      o = t !== (t = t.replace(/Capture$/, "")), t = t.toLowerCase() in e ? t.toLowerCase().slice(2) : t.slice(2), e.l || (e.l = {}), e.l[t + o] = n, n ? r || e.addEventListener(t, o ? Nl : Tl, o) : e.removeEventListener(t, o ? Nl : Tl, o);
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
  this.l[e.type + !1](de.event ? de.event(e) : e);
}
function Nl(e) {
  this.l[e.type + !0](de.event ? de.event(e) : e);
}
function Nu(e, t, n, r, s, o, a, c, f) {
  var p, i, d, u, l, _, g, h, v, m, k, b, E, $, S, y = t.type;
  if (t.constructor !== void 0)
    return null;
  n.__h != null && (f = n.__h, c = t.__e = n.__e, t.__h = null, o = [c]), (p = de.__b) && p(t);
  try {
    e:
      if (typeof y == "function") {
        if (h = t.props, v = (p = y.contextType) && r[p.__c], m = p ? v ? v.props.value : p.__ : r, n.__c ? g = (i = t.__c = n.__c).__ = i.__E : ("prototype" in y && y.prototype.render ? t.__c = i = new y(h, m) : (t.__c = i = new kr(h, m), i.constructor = y, i.render = jh), v && v.sub(i), i.props = h, i.state || (i.state = {}), i.context = m, i.__n = r, d = i.__d = !0, i.__h = [], i._sb = []), i.__s == null && (i.__s = i.state), y.getDerivedStateFromProps != null && (i.__s == i.state && (i.__s = Yt({}, i.__s)), Yt(i.__s, y.getDerivedStateFromProps(h, i.__s))), u = i.props, l = i.state, d)
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
        i.state = i.__s, i.getChildContext != null && (r = Yt(Yt({}, r), i.getChildContext())), d || i.getSnapshotBeforeUpdate == null || (_ = i.getSnapshotBeforeUpdate(u, l)), S = p != null && p.type === Js && p.key == null ? p.props.children : p, Au(e, Array.isArray(S) ? S : [S], t, n, r, s, o, a, c, f), i.base = t.__e, t.__h = null, i.__h.length && a.push(i), g && (i.__E = i.__ = null), i.__e = !1;
      } else
        o == null && t.__v === n.__v ? (t.__k = n.__k, t.__e = n.__e) : t.__e = Wh(n.__e, t, n, r, s, o, a, f);
    (p = de.diffed) && p(t);
  } catch (x) {
    t.__v = null, (f || o != null) && (t.__e = c, t.__h = !!f, o[o.indexOf(c)] = null), de.__e(x, t, n);
  }
}
function Hh(e, t) {
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
function Wh(e, t, n, r, s, o, a, c) {
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
    if (o = o && Ks.call(e.childNodes), p = (d = n.props || Su).dangerouslySetInnerHTML, i = u.dangerouslySetInnerHTML, !c) {
      if (o != null)
        for (d = {}, _ = 0; _ < e.attributes.length; _++)
          d[e.attributes[_].name] = e.attributes[_].value;
      (i || p) && (i && (p && i.__html == p.__html || i.__html === e.innerHTML) || (e.innerHTML = i && i.__html || ""));
    }
    if (Rh(e, u, d, s, c), i)
      t.__k = [];
    else if (_ = t.props.children, Au(e, Array.isArray(_) ? _ : [_], t, n, r, s && l !== "foreignObject", o, a, o ? o[0] : n.__k && Ir(n, 0), c), o != null)
      for (_ = o.length; _--; )
        o[_] != null && Cu(o[_]);
    c || ("value" in u && (_ = u.value) !== void 0 && (_ !== e.value || l === "progress" && !_ || l === "option" && _ !== d.value) && ci(e, "value", _, d.value, !1), "checked" in u && (_ = u.checked) !== void 0 && _ !== e.checked && ci(e, "checked", _, d.checked, !1));
  }
  return e;
}
function Lu(e, t, n) {
  try {
    typeof e == "function" ? e(t) : e.current = t;
  } catch (r) {
    de.__e(r, n);
  }
}
function Pu(e, t, n) {
  var r, s;
  if (de.unmount && de.unmount(e), (r = e.ref) && (r.current && r.current !== e.__e || Lu(r, null, t)), (r = e.__c) != null) {
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
      r[s] && Pu(r[s], t, n || typeof e.type != "function");
  n || e.__e == null || Cu(e.__e), e.__ = e.__e = e.__d = void 0;
}
function jh(e, t, n) {
  return this.constructor(e, n);
}
Ks = Eu.slice, de = { __e: function(e, t, n, r) {
  for (var s, o, a; t = t.__; )
    if ((s = t.__c) && !s.__)
      try {
        if ((o = s.constructor) && o.getDerivedStateFromError != null && (s.setState(o.getDerivedStateFromError(e)), a = s.__d), s.componentDidCatch != null && (s.componentDidCatch(e, r || {}), a = s.__d), a)
          return s.__E = s;
      } catch (c) {
        e = c;
      }
  throw e;
} }, xu = 0, kr.prototype.setState = function(e, t) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = Yt({}, this.state), typeof e == "function" && (e = e(Yt({}, n), this.props)), e && Yt(n, e), e != null && this.__v && (t && this._sb.push(t), Al(this));
}, kr.prototype.forceUpdate = function(e) {
  this.__v && (this.__e = !0, e && this.__h.push(e), Al(this));
}, kr.prototype.render = Js, $r = [], li.__r = 0;
var Zs = "top", Ru = "bottom", fi = "right", Ur = "left", Bh = "auto", Hu = [Zs, Ru, fi, Ur], Ih = "start", Uh = "end", Fh = /* @__PURE__ */ [].concat(Hu, [Bh]).reduce(function(e, t) {
  return e.concat([t, t + "-" + Ih, t + "-" + Uh]);
}, []);
function Wu(e) {
  return e.split("-")[0];
}
function Qn(e) {
  if (e == null)
    return window;
  if (e.toString() !== "[object Window]") {
    var t = e.ownerDocument;
    return t && t.defaultView || window;
  }
  return e;
}
function ju(e) {
  var t = Qn(e).Element;
  return e instanceof t || e instanceof Element;
}
function ui(e) {
  var t = Qn(e).HTMLElement;
  return e instanceof t || e instanceof HTMLElement;
}
function Qs(e) {
  if (typeof ShadowRoot > "u")
    return !1;
  var t = Qn(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot;
}
var zh = Math.max, Yh = Math.min, Ll = Math.round;
function ps() {
  var e = navigator.userAgentData;
  return e != null && e.brands ? e.brands.map(function(t) {
    return t.brand + "/" + t.version;
  }).join(" ") : navigator.userAgent;
}
function Vh() {
  return !/^((?!chrome|android).)*safari/i.test(ps());
}
function qh(e, t, n) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  var r = e.getBoundingClientRect(), s = 1, o = 1;
  t && ui(e) && (s = e.offsetWidth > 0 && Ll(r.width) / e.offsetWidth || 1, o = e.offsetHeight > 0 && Ll(r.height) / e.offsetHeight || 1);
  var a = ju(e) ? Qn(e) : window, c = a.visualViewport, f = !Vh() && n, p = (r.left + (f && c ? c.offsetLeft : 0)) / s, i = (r.top + (f && c ? c.offsetTop : 0)) / o, d = r.width / s, u = r.height / o;
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
function Gh(e) {
  var t = qh(e), n = e.offsetWidth, r = e.offsetHeight;
  return Math.abs(t.width - n) <= 1 && (n = t.width), Math.abs(t.height - r) <= 1 && (r = t.height), {
    x: e.offsetLeft,
    y: e.offsetTop,
    width: n,
    height: r
  };
}
function Xh(e, t) {
  var n = t.getRootNode && t.getRootNode();
  if (e.contains(t))
    return !0;
  if (n && Qs(n)) {
    var r = t;
    do {
      if (r && e.isSameNode(r))
        return !0;
      r = r.parentNode || r.host;
    } while (r);
  }
  return !1;
}
function Fr(e) {
  return e ? (e.nodeName || "").toLowerCase() : null;
}
function zr(e) {
  return Qn(e).getComputedStyle(e);
}
function Kh(e) {
  return ["table", "td", "th"].indexOf(Fr(e)) >= 0;
}
function Jh(e) {
  return ((ju(e) ? e.ownerDocument : e.document) || window.document).documentElement;
}
function Zh(e) {
  return Fr(e) === "html" ? e : e.assignedSlot || e.parentNode || (Qs(e) ? e.host : null) || Jh(e);
}
function Pl(e) {
  return !ui(e) || zr(e).position === "fixed" ? null : e.offsetParent;
}
function Qh(e) {
  var t = /firefox/i.test(ps()), n = /Trident/i.test(ps());
  if (n && ui(e)) {
    var r = zr(e);
    if (r.position === "fixed")
      return null;
  }
  var s = Zh(e);
  for (Qs(s) && (s = s.host); ui(s) && ["html", "body"].indexOf(Fr(s)) < 0; ) {
    var o = zr(s);
    if (o.transform !== "none" || o.perspective !== "none" || o.contain === "paint" || ["transform", "perspective"].indexOf(o.willChange) !== -1 || t && o.willChange === "filter" || t && o.filter && o.filter !== "none")
      return s;
    s = s.parentNode;
  }
  return null;
}
function ev(e) {
  for (var t = Qn(e), n = Pl(e); n && Kh(n) && zr(n).position === "static"; )
    n = Pl(n);
  return n && (Fr(n) === "html" || Fr(n) === "body" && zr(n).position === "static") ? t : n || Qh(e) || t;
}
function tv(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function nv(e, t, n) {
  return zh(e, Yh(t, n));
}
function rv() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
function ov(e) {
  return Object.assign({}, rv(), e);
}
function iv(e, t) {
  return t.reduce(function(n, r) {
    return n[r] = e, n;
  }, {});
}
var sv = function(t, n) {
  return t = typeof t == "function" ? t(Object.assign({}, n.rects, {
    placement: n.placement
  })) : t, ov(typeof t != "number" ? t : iv(t, Hu));
};
function av(e) {
  var t, n = e.state, r = e.name, s = e.options, o = n.elements.arrow, a = n.modifiersData.popperOffsets, c = Wu(n.placement), f = tv(c), p = [Ur, fi].indexOf(c) >= 0, i = p ? "height" : "width";
  if (!(!o || !a)) {
    var d = sv(s.padding, n), u = Gh(o), l = f === "y" ? Zs : Ur, _ = f === "y" ? Ru : fi, g = n.rects.reference[i] + n.rects.reference[f] - a[f] - n.rects.popper[i], h = a[f] - n.rects.reference[f], v = ev(o), m = v ? f === "y" ? v.clientHeight || 0 : v.clientWidth || 0 : 0, k = g / 2 - h / 2, b = d[l], E = m - u[i] - d[_], $ = m / 2 - u[i] / 2 + k, S = nv(b, $, E), y = f;
    n.modifiersData[r] = (t = {}, t[y] = S, t.centerOffset = S - $, t);
  }
}
function lv(e) {
  var t = e.state, n = e.options, r = n.element, s = r === void 0 ? "[data-popper-arrow]" : r;
  s != null && (typeof s == "string" && (s = t.elements.popper.querySelector(s), !s) || !Xh(t.elements.popper, s) || (t.elements.arrow = s));
}
const cv = {
  name: "arrow",
  enabled: !0,
  phase: "main",
  fn: av,
  effect: lv,
  requires: ["popperOffsets"],
  requiresIfExists: ["preventOverflow"]
};
function fv(e, t, n) {
  var r = Wu(e), s = [Ur, Zs].indexOf(r) >= 0 ? -1 : 1, o = typeof n == "function" ? n(Object.assign({}, t, {
    placement: e
  })) : n, a = o[0], c = o[1];
  return a = a || 0, c = (c || 0) * s, [Ur, fi].indexOf(r) >= 0 ? {
    x: c,
    y: a
  } : {
    x: a,
    y: c
  };
}
function uv(e) {
  var t = e.state, n = e.options, r = e.name, s = n.offset, o = s === void 0 ? [0, 0] : s, a = Fh.reduce(function(i, d) {
    return i[d] = fv(d, t.rects, o), i;
  }, {}), c = a[t.placement], f = c.x, p = c.y;
  t.modifiersData.popperOffsets != null && (t.modifiersData.popperOffsets.x += f, t.modifiersData.popperOffsets.y += p), t.modifiersData[r] = a;
}
const _v = {
  name: "offset",
  enabled: !0,
  phase: "main",
  requires: ["popperOffsets"],
  fn: uv
};
var qi, se, Bu, xr, Rl, _i = {}, Iu = [], pv = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function Vt(e, t) {
  for (var n in t)
    e[n] = t[n];
  return e;
}
function Uu(e) {
  var t = e.parentNode;
  t && t.removeChild(e);
}
function ea(e, t, n) {
  var r, s, o, a = {};
  for (o in t)
    o == "key" ? r = t[o] : o == "ref" ? s = t[o] : a[o] = t[o];
  if (arguments.length > 2 && (a.children = arguments.length > 3 ? qi.call(arguments, 2) : n), typeof e == "function" && e.defaultProps != null)
    for (o in e.defaultProps)
      a[o] === void 0 && (a[o] = e.defaultProps[o]);
  return No(e, a, r, s, null);
}
function No(e, t, n, r, s) {
  var o = { type: e, props: t, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: s == null ? ++Bu : s };
  return s == null && se.vnode != null && se.vnode(o), o;
}
function Gi(e) {
  return e.children;
}
function Lo(e, t) {
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
function Fu(e) {
  var t, n;
  if ((e = e.__) != null && e.__c != null) {
    for (e.__e = e.__c.base = null, t = 0; t < e.__k.length; t++)
      if ((n = e.__k[t]) != null && n.__e != null) {
        e.__e = e.__c.base = n.__e;
        break;
      }
    return Fu(e);
  }
}
function Hl(e) {
  (!e.__d && (e.__d = !0) && xr.push(e) && !pi.__r++ || Rl !== se.debounceRendering) && ((Rl = se.debounceRendering) || setTimeout)(pi);
}
function pi() {
  for (var e; pi.__r = xr.length; )
    e = xr.sort(function(t, n) {
      return t.__v.__b - n.__v.__b;
    }), xr = [], e.some(function(t) {
      var n, r, s, o, a, c;
      t.__d && (a = (o = (n = t).__v).__e, (c = n.__P) && (r = [], (s = Vt({}, o)).__v = o.__v + 1, ta(c, o, s, n.__n, c.ownerSVGElement !== void 0, o.__h != null ? [a] : null, r, a == null ? Yr(o) : a, o.__h), qu(r, o), o.__e != a && Fu(o)));
    });
}
function zu(e, t, n, r, s, o, a, c, f, p) {
  var i, d, u, l, _, g, h, v = r && r.__k || Iu, m = v.length;
  for (n.__k = [], i = 0; i < t.length; i++)
    if ((l = n.__k[i] = (l = t[i]) == null || typeof l == "boolean" ? null : typeof l == "string" || typeof l == "number" || typeof l == "bigint" ? No(null, l, null, null, l) : Array.isArray(l) ? No(Gi, { children: l }, null, null, null) : l.__b > 0 ? No(l.type, l.props, l.key, l.ref ? l.ref : null, l.__v) : l) != null) {
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
      ta(e, l, u = u || _i, s, o, a, c, f, p), _ = l.__e, (d = l.ref) && u.ref != d && (h || (h = []), u.ref && h.push(u.ref, null, l), h.push(d, l.__c || _, l)), _ != null ? (g == null && (g = _), typeof l.type == "function" && l.__k === u.__k ? l.__d = f = Yu(l, f, e) : f = Vu(e, l, u, v, _, f), typeof n.type == "function" && (n.__d = f)) : f && u.__e == f && f.parentNode != e && (f = Yr(u));
    }
  for (n.__e = g, i = m; i--; )
    v[i] != null && Xu(v[i], v[i]);
  if (h)
    for (i = 0; i < h.length; i++)
      Gu(h[i], h[++i], h[++i]);
}
function Yu(e, t, n) {
  for (var r, s = e.__k, o = 0; s && o < s.length; o++)
    (r = s[o]) && (r.__ = e, t = typeof r.type == "function" ? Yu(r, t, n) : Vu(n, r, r, s, r.__e, t));
  return t;
}
function Vu(e, t, n, r, s, o) {
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
function dv(e, t, n, r, s) {
  var o;
  for (o in n)
    o === "children" || o === "key" || o in t || di(e, o, null, n[o], r);
  for (o in t)
    s && typeof t[o] != "function" || o === "children" || o === "key" || o === "value" || o === "checked" || n[o] === t[o] || di(e, o, t[o], n[o], r);
}
function Wl(e, t, n) {
  t[0] === "-" ? e.setProperty(t, n) : e[t] = n == null ? "" : typeof n != "number" || pv.test(t) ? n : n + "px";
}
function di(e, t, n, r, s) {
  var o;
  e:
    if (t === "style")
      if (typeof n == "string")
        e.style.cssText = n;
      else {
        if (typeof r == "string" && (e.style.cssText = r = ""), r)
          for (t in r)
            n && t in n || Wl(e.style, t, "");
        if (n)
          for (t in n)
            r && n[t] === r[t] || Wl(e.style, t, n[t]);
      }
    else if (t[0] === "o" && t[1] === "n")
      o = t !== (t = t.replace(/Capture$/, "")), t = t.toLowerCase() in e ? t.toLowerCase().slice(2) : t.slice(2), e.l || (e.l = {}), e.l[t + o] = n, n ? r || e.addEventListener(t, o ? Bl : jl, o) : e.removeEventListener(t, o ? Bl : jl, o);
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
function jl(e) {
  this.l[e.type + !1](se.event ? se.event(e) : e);
}
function Bl(e) {
  this.l[e.type + !0](se.event ? se.event(e) : e);
}
function ta(e, t, n, r, s, o, a, c, f) {
  var p, i, d, u, l, _, g, h, v, m, k, b, E, $, S, y = t.type;
  if (t.constructor !== void 0)
    return null;
  n.__h != null && (f = n.__h, c = t.__e = n.__e, t.__h = null, o = [c]), (p = se.__b) && p(t);
  try {
    e:
      if (typeof y == "function") {
        if (h = t.props, v = (p = y.contextType) && r[p.__c], m = p ? v ? v.props.value : p.__ : r, n.__c ? g = (i = t.__c = n.__c).__ = i.__E : ("prototype" in y && y.prototype.render ? t.__c = i = new y(h, m) : (t.__c = i = new Lo(h, m), i.constructor = y, i.render = vv), v && v.sub(i), i.props = h, i.state || (i.state = {}), i.context = m, i.__n = r, d = i.__d = !0, i.__h = [], i._sb = []), i.__s == null && (i.__s = i.state), y.getDerivedStateFromProps != null && (i.__s == i.state && (i.__s = Vt({}, i.__s)), Vt(i.__s, y.getDerivedStateFromProps(h, i.__s))), u = i.props, l = i.state, d)
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
        i.state = i.__s, i.getChildContext != null && (r = Vt(Vt({}, r), i.getChildContext())), d || i.getSnapshotBeforeUpdate == null || (_ = i.getSnapshotBeforeUpdate(u, l)), S = p != null && p.type === Gi && p.key == null ? p.props.children : p, zu(e, Array.isArray(S) ? S : [S], t, n, r, s, o, a, c, f), i.base = t.__e, t.__h = null, i.__h.length && a.push(i), g && (i.__E = i.__ = null), i.__e = !1;
      } else
        o == null && t.__v === n.__v ? (t.__k = n.__k, t.__e = n.__e) : t.__e = hv(n.__e, t, n, r, s, o, a, f);
    (p = se.diffed) && p(t);
  } catch (x) {
    t.__v = null, (f || o != null) && (t.__e = c, t.__h = !!f, o[o.indexOf(c)] = null), se.__e(x, t, n);
  }
}
function qu(e, t) {
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
function hv(e, t, n, r, s, o, a, c) {
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
    if (o = o && qi.call(e.childNodes), p = (d = n.props || _i).dangerouslySetInnerHTML, i = u.dangerouslySetInnerHTML, !c) {
      if (o != null)
        for (d = {}, _ = 0; _ < e.attributes.length; _++)
          d[e.attributes[_].name] = e.attributes[_].value;
      (i || p) && (i && (p && i.__html == p.__html || i.__html === e.innerHTML) || (e.innerHTML = i && i.__html || ""));
    }
    if (dv(e, u, d, s, c), i)
      t.__k = [];
    else if (_ = t.props.children, zu(e, Array.isArray(_) ? _ : [_], t, n, r, s && l !== "foreignObject", o, a, o ? o[0] : n.__k && Yr(n, 0), c), o != null)
      for (_ = o.length; _--; )
        o[_] != null && Uu(o[_]);
    c || ("value" in u && (_ = u.value) !== void 0 && (_ !== e.value || l === "progress" && !_ || l === "option" && _ !== d.value) && di(e, "value", _, d.value, !1), "checked" in u && (_ = u.checked) !== void 0 && _ !== e.checked && di(e, "checked", _, d.checked, !1));
  }
  return e;
}
function Gu(e, t, n) {
  try {
    typeof e == "function" ? e(t) : e.current = t;
  } catch (r) {
    se.__e(r, n);
  }
}
function Xu(e, t, n) {
  var r, s;
  if (se.unmount && se.unmount(e), (r = e.ref) && (r.current && r.current !== e.__e || Gu(r, null, t)), (r = e.__c) != null) {
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
      r[s] && Xu(r[s], t, n || typeof e.type != "function");
  n || e.__e == null || Uu(e.__e), e.__ = e.__e = e.__d = void 0;
}
function vv(e, t, n) {
  return this.constructor(e, n);
}
function mv(e, t, n) {
  var r, s, o;
  se.__ && se.__(e, t), s = (r = typeof n == "function") ? null : n && n.__k || t.__k, o = [], ta(t, e = (!r && n || t).__k = ea(Gi, null, [e]), s || _i, _i, t.ownerSVGElement !== void 0, !r && n ? [n] : s ? null : t.firstChild ? qi.call(t.childNodes) : null, o, !r && n ? n : s ? s.__e : t.firstChild, r), qu(o, e);
}
qi = Iu.slice, se = { __e: function(e, t, n, r) {
  for (var s, o, a; t = t.__; )
    if ((s = t.__c) && !s.__)
      try {
        if ((o = s.constructor) && o.getDerivedStateFromError != null && (s.setState(o.getDerivedStateFromError(e)), a = s.__d), s.componentDidCatch != null && (s.componentDidCatch(e, r || {}), a = s.__d), a)
          return s.__E = s;
      } catch (c) {
        e = c;
      }
  throw e;
} }, Bu = 0, Lo.prototype.setState = function(e, t) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = Vt({}, this.state), typeof e == "function" && (e = e(Vt({}, n), this.props)), e && Vt(n, e), e != null && this.__v && (t && this._sb.push(t), Hl(this));
}, Lo.prototype.forceUpdate = function(e) {
  this.__v && (this.__e = !0, e && this.__h.push(e), Hl(this));
}, Lo.prototype.render = Gi, xr = [], pi.__r = 0;
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
function na(e) {
  if (typeof ShadowRoot > "u")
    return !1;
  var t = Re(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot;
}
var dn = Math.max, hi = Math.min, Yn = Math.round;
function ds() {
  var e = navigator.userAgentData;
  return e != null && e.brands ? e.brands.map(function(t) {
    return t.brand + "/" + t.version;
  }).join(" ") : navigator.userAgent;
}
function Ku() {
  return !/^((?!chrome|android).)*safari/i.test(ds());
}
function Vn(e, t, n) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  var r = e.getBoundingClientRect(), s = 1, o = 1;
  t && Ne(e) && (s = e.offsetWidth > 0 && Yn(r.width) / e.offsetWidth || 1, o = e.offsetHeight > 0 && Yn(r.height) / e.offsetHeight || 1);
  var a = mn(e) ? Re(e) : window, c = a.visualViewport, f = !Ku() && n, p = (r.left + (f && c ? c.offsetLeft : 0)) / s, i = (r.top + (f && c ? c.offsetTop : 0)) / o, d = r.width / s, u = r.height / o;
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
function ra(e) {
  var t = Re(e), n = t.pageXOffset, r = t.pageYOffset;
  return {
    scrollLeft: n,
    scrollTop: r
  };
}
function gv(e) {
  return {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  };
}
function yv(e) {
  return e === Re(e) || !Ne(e) ? ra(e) : gv(e);
}
function ft(e) {
  return e ? (e.nodeName || "").toLowerCase() : null;
}
function nn(e) {
  return ((mn(e) ? e.ownerDocument : e.document) || window.document).documentElement;
}
function oa(e) {
  return Vn(nn(e)).left + ra(e).scrollLeft;
}
function $t(e) {
  return Re(e).getComputedStyle(e);
}
function ia(e) {
  var t = $t(e), n = t.overflow, r = t.overflowX, s = t.overflowY;
  return /auto|scroll|overlay|hidden/.test(n + s + r);
}
function bv(e) {
  var t = e.getBoundingClientRect(), n = Yn(t.width) / e.offsetWidth || 1, r = Yn(t.height) / e.offsetHeight || 1;
  return n !== 1 || r !== 1;
}
function wv(e, t, n) {
  n === void 0 && (n = !1);
  var r = Ne(t), s = Ne(t) && bv(t), o = nn(t), a = Vn(e, s, n), c = {
    scrollLeft: 0,
    scrollTop: 0
  }, f = {
    x: 0,
    y: 0
  };
  return (r || !r && !n) && ((ft(t) !== "body" || ia(o)) && (c = yv(t)), Ne(t) ? (f = Vn(t, !0), f.x += t.clientLeft, f.y += t.clientTop) : o && (f.x = oa(o))), {
    x: a.left + c.scrollLeft - f.x,
    y: a.top + c.scrollTop - f.y,
    width: a.width,
    height: a.height
  };
}
function Ju(e) {
  var t = Vn(e), n = e.offsetWidth, r = e.offsetHeight;
  return Math.abs(t.width - n) <= 1 && (n = t.width), Math.abs(t.height - r) <= 1 && (r = t.height), {
    x: e.offsetLeft,
    y: e.offsetTop,
    width: n,
    height: r
  };
}
function Xi(e) {
  return ft(e) === "html" ? e : e.assignedSlot || e.parentNode || (na(e) ? e.host : null) || nn(e);
}
function Zu(e) {
  return ["html", "body", "#document"].indexOf(ft(e)) >= 0 ? e.ownerDocument.body : Ne(e) && ia(e) ? e : Zu(Xi(e));
}
function Sr(e, t) {
  var n;
  t === void 0 && (t = []);
  var r = Zu(e), s = r === ((n = e.ownerDocument) == null ? void 0 : n.body), o = Re(r), a = s ? [o].concat(o.visualViewport || [], ia(r) ? r : []) : r, c = t.concat(a);
  return s ? c : c.concat(Sr(Xi(a)));
}
function $v(e) {
  return ["table", "td", "th"].indexOf(ft(e)) >= 0;
}
function Il(e) {
  return !Ne(e) || $t(e).position === "fixed" ? null : e.offsetParent;
}
function kv(e) {
  var t = /firefox/i.test(ds()), n = /Trident/i.test(ds());
  if (n && Ne(e)) {
    var r = $t(e);
    if (r.position === "fixed")
      return null;
  }
  var s = Xi(e);
  for (na(s) && (s = s.host); Ne(s) && ["html", "body"].indexOf(ft(s)) < 0; ) {
    var o = $t(s);
    if (o.transform !== "none" || o.perspective !== "none" || o.contain === "paint" || ["transform", "perspective"].indexOf(o.willChange) !== -1 || t && o.willChange === "filter" || t && o.filter && o.filter !== "none")
      return s;
    s = s.parentNode;
  }
  return null;
}
function Ki(e) {
  for (var t = Re(e), n = Il(e); n && $v(n) && $t(n).position === "static"; )
    n = Il(n);
  return n && (ft(n) === "html" || ft(n) === "body" && $t(n).position === "static") ? t : n || kv(e) || t;
}
var Ye = "top", ut = "bottom", en = "right", bt = "left", sa = "auto", Ji = [Ye, ut, en, bt], qn = "start", Vr = "end", xv = "clippingParents", Qu = "viewport", nr = "popper", Sv = "reference", Ul = /* @__PURE__ */ Ji.reduce(function(e, t) {
  return e.concat([t + "-" + qn, t + "-" + Vr]);
}, []), Ev = /* @__PURE__ */ [].concat(Ji, [sa]).reduce(function(e, t) {
  return e.concat([t, t + "-" + qn, t + "-" + Vr]);
}, []), Cv = "beforeRead", Ov = "read", Mv = "afterRead", Av = "beforeMain", Dv = "main", Tv = "afterMain", Nv = "beforeWrite", Lv = "write", Pv = "afterWrite", Rv = [Cv, Ov, Mv, Av, Dv, Tv, Nv, Lv, Pv];
function Hv(e) {
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
function Wv(e) {
  var t = Hv(e);
  return Rv.reduce(function(n, r) {
    return n.concat(t.filter(function(s) {
      return s.phase === r;
    }));
  }, []);
}
function jv(e) {
  var t;
  return function() {
    return t || (t = new Promise(function(n) {
      Promise.resolve().then(function() {
        t = void 0, n(e());
      });
    })), t;
  };
}
function Zt(e) {
  return e.split("-")[0];
}
function Bv(e) {
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
function Iv(e, t) {
  var n = Re(e), r = nn(e), s = n.visualViewport, o = r.clientWidth, a = r.clientHeight, c = 0, f = 0;
  if (s) {
    o = s.width, a = s.height;
    var p = Ku();
    (p || !p && t === "fixed") && (c = s.offsetLeft, f = s.offsetTop);
  }
  return {
    width: o,
    height: a,
    x: c + oa(e),
    y: f
  };
}
function Uv(e) {
  var t, n = nn(e), r = ra(e), s = (t = e.ownerDocument) == null ? void 0 : t.body, o = dn(n.scrollWidth, n.clientWidth, s ? s.scrollWidth : 0, s ? s.clientWidth : 0), a = dn(n.scrollHeight, n.clientHeight, s ? s.scrollHeight : 0, s ? s.clientHeight : 0), c = -r.scrollLeft + oa(e), f = -r.scrollTop;
  return $t(s || n).direction === "rtl" && (c += dn(n.clientWidth, s ? s.clientWidth : 0) - o), {
    width: o,
    height: a,
    x: c,
    y: f
  };
}
function Fv(e, t) {
  var n = t.getRootNode && t.getRootNode();
  if (e.contains(t))
    return !0;
  if (n && na(n)) {
    var r = t;
    do {
      if (r && e.isSameNode(r))
        return !0;
      r = r.parentNode || r.host;
    } while (r);
  }
  return !1;
}
function hs(e) {
  return Object.assign({}, e, {
    left: e.x,
    top: e.y,
    right: e.x + e.width,
    bottom: e.y + e.height
  });
}
function zv(e, t) {
  var n = Vn(e, !1, t === "fixed");
  return n.top = n.top + e.clientTop, n.left = n.left + e.clientLeft, n.bottom = n.top + e.clientHeight, n.right = n.left + e.clientWidth, n.width = e.clientWidth, n.height = e.clientHeight, n.x = n.left, n.y = n.top, n;
}
function Fl(e, t, n) {
  return t === Qu ? hs(Iv(e, n)) : mn(t) ? zv(t, n) : hs(Uv(nn(e)));
}
function Yv(e) {
  var t = Sr(Xi(e)), n = ["absolute", "fixed"].indexOf($t(e).position) >= 0, r = n && Ne(e) ? Ki(e) : e;
  return mn(r) ? t.filter(function(s) {
    return mn(s) && Fv(s, r) && ft(s) !== "body";
  }) : [];
}
function Vv(e, t, n, r) {
  var s = t === "clippingParents" ? Yv(e) : [].concat(t), o = [].concat(s, [n]), a = o[0], c = o.reduce(function(f, p) {
    var i = Fl(e, p, r);
    return f.top = dn(i.top, f.top), f.right = hi(i.right, f.right), f.bottom = hi(i.bottom, f.bottom), f.left = dn(i.left, f.left), f;
  }, Fl(e, a, r));
  return c.width = c.right - c.left, c.height = c.bottom - c.top, c.x = c.left, c.y = c.top, c;
}
function Gn(e) {
  return e.split("-")[1];
}
function e_(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function t_(e) {
  var t = e.reference, n = e.element, r = e.placement, s = r ? Zt(r) : null, o = r ? Gn(r) : null, a = t.x + t.width / 2 - n.width / 2, c = t.y + t.height / 2 - n.height / 2, f;
  switch (s) {
    case Ye:
      f = {
        x: a,
        y: t.y - n.height
      };
      break;
    case ut:
      f = {
        x: a,
        y: t.y + t.height
      };
      break;
    case en:
      f = {
        x: t.x + t.width,
        y: c
      };
      break;
    case bt:
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
  var p = s ? e_(s) : null;
  if (p != null) {
    var i = p === "y" ? "height" : "width";
    switch (o) {
      case qn:
        f[p] = f[p] - (t[i] / 2 - n[i] / 2);
        break;
      case Vr:
        f[p] = f[p] + (t[i] / 2 - n[i] / 2);
        break;
    }
  }
  return f;
}
function n_() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
function qv(e) {
  return Object.assign({}, n_(), e);
}
function Gv(e, t) {
  return t.reduce(function(n, r) {
    return n[r] = e, n;
  }, {});
}
function aa(e, t) {
  t === void 0 && (t = {});
  var n = t, r = n.placement, s = r === void 0 ? e.placement : r, o = n.strategy, a = o === void 0 ? e.strategy : o, c = n.boundary, f = c === void 0 ? xv : c, p = n.rootBoundary, i = p === void 0 ? Qu : p, d = n.elementContext, u = d === void 0 ? nr : d, l = n.altBoundary, _ = l === void 0 ? !1 : l, g = n.padding, h = g === void 0 ? 0 : g, v = qv(typeof h != "number" ? h : Gv(h, Ji)), m = u === nr ? Sv : nr, k = e.rects.popper, b = e.elements[_ ? m : u], E = Vv(mn(b) ? b : b.contextElement || nn(e.elements.popper), f, i, a), $ = Vn(e.elements.reference), S = t_({
    reference: $,
    element: k,
    strategy: "absolute",
    placement: s
  }), y = hs(Object.assign({}, k, S)), x = u === nr ? y : $, C = {
    top: E.top - x.top + v.top,
    bottom: x.bottom - E.bottom + v.bottom,
    left: E.left - x.left + v.left,
    right: x.right - E.right + v.right
  }, W = e.modifiersData.offset;
  if (u === nr && W) {
    var F = W[s];
    Object.keys(C).forEach(function(D) {
      var T = [en, ut].indexOf(D) >= 0 ? 1 : -1, O = [Ye, ut].indexOf(D) >= 0 ? "y" : "x";
      C[D] += F[O] * T;
    });
  }
  return C;
}
var zl = {
  placement: "bottom",
  modifiers: [],
  strategy: "absolute"
};
function Yl() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return !t.some(function(r) {
    return !(r && typeof r.getBoundingClientRect == "function");
  });
}
function Xv(e) {
  e === void 0 && (e = {});
  var t = e, n = t.defaultModifiers, r = n === void 0 ? [] : n, s = t.defaultOptions, o = s === void 0 ? zl : s;
  return function(c, f, p) {
    p === void 0 && (p = o);
    var i = {
      placement: "bottom",
      orderedModifiers: [],
      options: Object.assign({}, zl, o),
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
          reference: mn(c) ? Sr(c) : c.contextElement ? Sr(c.contextElement) : [],
          popper: Sr(f)
        };
        var k = Wv(Bv([].concat(r, i.options.modifiers)));
        return i.orderedModifiers = k.filter(function(b) {
          return b.enabled;
        }), _(), l.update();
      },
      forceUpdate: function() {
        if (!u) {
          var v = i.elements, m = v.reference, k = v.popper;
          if (!!Yl(m, k)) {
            i.rects = {
              reference: wv(m, Ki(k), i.options.strategy === "fixed"),
              popper: Ju(k)
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
      update: jv(function() {
        return new Promise(function(h) {
          l.forceUpdate(), h(i);
        });
      }),
      destroy: function() {
        g(), u = !0;
      }
    };
    if (!Yl(c, f))
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
var go = {
  passive: !0
};
function Kv(e) {
  var t = e.state, n = e.instance, r = e.options, s = r.scroll, o = s === void 0 ? !0 : s, a = r.resize, c = a === void 0 ? !0 : a, f = Re(t.elements.popper), p = [].concat(t.scrollParents.reference, t.scrollParents.popper);
  return o && p.forEach(function(i) {
    i.addEventListener("scroll", n.update, go);
  }), c && f.addEventListener("resize", n.update, go), function() {
    o && p.forEach(function(i) {
      i.removeEventListener("scroll", n.update, go);
    }), c && f.removeEventListener("resize", n.update, go);
  };
}
const Jv = {
  name: "eventListeners",
  enabled: !0,
  phase: "write",
  fn: function() {
  },
  effect: Kv,
  data: {}
};
function Zv(e) {
  var t = e.state, n = e.name;
  t.modifiersData[n] = t_({
    reference: t.rects.reference,
    element: t.rects.popper,
    strategy: "absolute",
    placement: t.placement
  });
}
const Qv = {
  name: "popperOffsets",
  enabled: !0,
  phase: "read",
  fn: Zv,
  data: {}
};
var em = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function tm(e) {
  var t = e.x, n = e.y, r = window, s = r.devicePixelRatio || 1;
  return {
    x: Yn(t * s) / s || 0,
    y: Yn(n * s) / s || 0
  };
}
function Vl(e) {
  var t, n = e.popper, r = e.popperRect, s = e.placement, o = e.variation, a = e.offsets, c = e.position, f = e.gpuAcceleration, p = e.adaptive, i = e.roundOffsets, d = e.isFixed, u = a.x, l = u === void 0 ? 0 : u, _ = a.y, g = _ === void 0 ? 0 : _, h = typeof i == "function" ? i({
    x: l,
    y: g
  }) : {
    x: l,
    y: g
  };
  l = h.x, g = h.y;
  var v = a.hasOwnProperty("x"), m = a.hasOwnProperty("y"), k = bt, b = Ye, E = window;
  if (p) {
    var $ = Ki(n), S = "clientHeight", y = "clientWidth";
    if ($ === Re(n) && ($ = nn(n), $t($).position !== "static" && c === "absolute" && (S = "scrollHeight", y = "scrollWidth")), $ = $, s === Ye || (s === bt || s === en) && o === Vr) {
      b = ut;
      var x = d && $ === E && E.visualViewport ? E.visualViewport.height : $[S];
      g -= x - r.height, g *= f ? 1 : -1;
    }
    if (s === bt || (s === Ye || s === ut) && o === Vr) {
      k = en;
      var C = d && $ === E && E.visualViewport ? E.visualViewport.width : $[y];
      l -= C - r.width, l *= f ? 1 : -1;
    }
  }
  var W = Object.assign({
    position: c
  }, p && em), F = i === !0 ? tm({
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
function nm(e) {
  var t = e.state, n = e.options, r = n.gpuAcceleration, s = r === void 0 ? !0 : r, o = n.adaptive, a = o === void 0 ? !0 : o, c = n.roundOffsets, f = c === void 0 ? !0 : c, p = {
    placement: Zt(t.placement),
    variation: Gn(t.placement),
    popper: t.elements.popper,
    popperRect: t.rects.popper,
    gpuAcceleration: s,
    isFixed: t.options.strategy === "fixed"
  };
  t.modifiersData.popperOffsets != null && (t.styles.popper = Object.assign({}, t.styles.popper, Vl(Object.assign({}, p, {
    offsets: t.modifiersData.popperOffsets,
    position: t.options.strategy,
    adaptive: a,
    roundOffsets: f
  })))), t.modifiersData.arrow != null && (t.styles.arrow = Object.assign({}, t.styles.arrow, Vl(Object.assign({}, p, {
    offsets: t.modifiersData.arrow,
    position: "absolute",
    adaptive: !1,
    roundOffsets: f
  })))), t.attributes.popper = Object.assign({}, t.attributes.popper, {
    "data-popper-placement": t.placement
  });
}
const rm = {
  name: "computeStyles",
  enabled: !0,
  phase: "beforeWrite",
  fn: nm,
  data: {}
};
function om(e) {
  var t = e.state;
  Object.keys(t.elements).forEach(function(n) {
    var r = t.styles[n] || {}, s = t.attributes[n] || {}, o = t.elements[n];
    !Ne(o) || !ft(o) || (Object.assign(o.style, r), Object.keys(s).forEach(function(a) {
      var c = s[a];
      c === !1 ? o.removeAttribute(a) : o.setAttribute(a, c === !0 ? "" : c);
    }));
  });
}
function im(e) {
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
const sm = {
  name: "applyStyles",
  enabled: !0,
  phase: "write",
  fn: om,
  effect: im,
  requires: ["computeStyles"]
};
var am = [Jv, Qv, rm, sm], r_ = /* @__PURE__ */ Xv({
  defaultModifiers: am
});
function lm(e) {
  return e === "x" ? "y" : "x";
}
function Po(e, t, n) {
  return dn(e, hi(t, n));
}
function cm(e, t, n) {
  var r = Po(e, t, n);
  return r > n ? n : r;
}
function fm(e) {
  var t = e.state, n = e.options, r = e.name, s = n.mainAxis, o = s === void 0 ? !0 : s, a = n.altAxis, c = a === void 0 ? !1 : a, f = n.boundary, p = n.rootBoundary, i = n.altBoundary, d = n.padding, u = n.tether, l = u === void 0 ? !0 : u, _ = n.tetherOffset, g = _ === void 0 ? 0 : _, h = aa(t, {
    boundary: f,
    rootBoundary: p,
    padding: d,
    altBoundary: i
  }), v = Zt(t.placement), m = Gn(t.placement), k = !m, b = e_(v), E = lm(b), $ = t.modifiersData.popperOffsets, S = t.rects.reference, y = t.rects.popper, x = typeof g == "function" ? g(Object.assign({}, t.rects, {
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
      var D, T = b === "y" ? Ye : bt, O = b === "y" ? ut : en, N = b === "y" ? "height" : "width", M = $[b], j = M + h[T], R = M - h[O], U = l ? -y[N] / 2 : 0, G = m === qn ? S[N] : y[N], z = m === qn ? -y[N] : -S[N], K = t.elements.arrow, Q = l && K ? Ju(K) : {
        width: 0,
        height: 0
      }, L = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : n_(), Y = L[T], X = L[O], q = Po(0, S[N], Q[N]), J = k ? S[N] / 2 - U - q - Y - C.mainAxis : G - q - Y - C.mainAxis, le = k ? -S[N] / 2 + U + q + X + C.mainAxis : z + q + X + C.mainAxis, ae = t.elements.arrow && Ki(t.elements.arrow), be = ae ? b === "y" ? ae.clientTop || 0 : ae.clientLeft || 0 : 0, Je = (D = W == null ? void 0 : W[b]) != null ? D : 0, ee = M + J - Je - be, xt = M + le - Je, We = Po(l ? hi(j, ee) : j, M, l ? dn(R, xt) : R);
      $[b] = We, F[b] = We - M;
    }
    if (c) {
      var je, St = b === "x" ? Ye : bt, Ze = b === "x" ? ut : en, te = $[E], me = E === "y" ? "height" : "width", Be = te + h[St], Et = te - h[Ze], Ie = [Ye, bt].indexOf(v) !== -1, Ct = (je = W == null ? void 0 : W[E]) != null ? je : 0, Ot = Ie ? Be : te - S[me] - y[me] - Ct + C.altAxis, Mt = Ie ? te + S[me] + y[me] - Ct - C.altAxis : Et, At = l && Ie ? cm(Ot, te, Mt) : Po(l ? Ot : Be, te, l ? Mt : Et);
      $[E] = At, F[E] = At - te;
    }
    t.modifiersData[r] = F;
  }
}
const vs = {
  name: "preventOverflow",
  enabled: !0,
  phase: "main",
  fn: fm,
  requiresIfExists: ["offset"]
};
var um = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function Ro(e) {
  return e.replace(/left|right|bottom|top/g, function(t) {
    return um[t];
  });
}
var _m = {
  start: "end",
  end: "start"
};
function ql(e) {
  return e.replace(/start|end/g, function(t) {
    return _m[t];
  });
}
function pm(e, t) {
  t === void 0 && (t = {});
  var n = t, r = n.placement, s = n.boundary, o = n.rootBoundary, a = n.padding, c = n.flipVariations, f = n.allowedAutoPlacements, p = f === void 0 ? Ev : f, i = Gn(r), d = i ? c ? Ul : Ul.filter(function(_) {
    return Gn(_) === i;
  }) : Ji, u = d.filter(function(_) {
    return p.indexOf(_) >= 0;
  });
  u.length === 0 && (u = d);
  var l = u.reduce(function(_, g) {
    return _[g] = aa(e, {
      placement: g,
      boundary: s,
      rootBoundary: o,
      padding: a
    })[Zt(g)], _;
  }, {});
  return Object.keys(l).sort(function(_, g) {
    return l[_] - l[g];
  });
}
function dm(e) {
  if (Zt(e) === sa)
    return [];
  var t = Ro(e);
  return [ql(e), t, ql(t)];
}
function hm(e) {
  var t = e.state, n = e.options, r = e.name;
  if (!t.modifiersData[r]._skip) {
    for (var s = n.mainAxis, o = s === void 0 ? !0 : s, a = n.altAxis, c = a === void 0 ? !0 : a, f = n.fallbackPlacements, p = n.padding, i = n.boundary, d = n.rootBoundary, u = n.altBoundary, l = n.flipVariations, _ = l === void 0 ? !0 : l, g = n.allowedAutoPlacements, h = t.options.placement, v = Zt(h), m = v === h, k = f || (m || !_ ? [Ro(h)] : dm(h)), b = [h].concat(k).reduce(function(Q, L) {
      return Q.concat(Zt(L) === sa ? pm(t, {
        placement: L,
        boundary: i,
        rootBoundary: d,
        padding: p,
        flipVariations: _,
        allowedAutoPlacements: g
      }) : L);
    }, []), E = t.rects.reference, $ = t.rects.popper, S = /* @__PURE__ */ new Map(), y = !0, x = b[0], C = 0; C < b.length; C++) {
      var W = b[C], F = Zt(W), D = Gn(W) === qn, T = [Ye, ut].indexOf(F) >= 0, O = T ? "width" : "height", N = aa(t, {
        placement: W,
        boundary: i,
        rootBoundary: d,
        altBoundary: u,
        padding: p
      }), M = T ? D ? en : bt : D ? ut : Ye;
      E[O] > $[O] && (M = Ro(M));
      var j = Ro(M), R = [];
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
const o_ = {
  name: "flip",
  enabled: !0,
  phase: "main",
  fn: hm,
  requiresIfExists: ["offset"],
  data: {
    _skip: !1
  }
};
function vm(e) {
  return e.button === 2;
}
var Nt;
class mm extends Ts {
  constructor() {
    super(...arguments);
    P(this, Nt, void 0);
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
    super.componentWillUnmount(), (n = w(this, Nt)) == null || n.destroy();
  }
  _getPopperOptions() {
    return {
      modifiers: [vs, o_],
      placement: "right-start"
    };
  }
  _getPopperElement() {
    var n;
    return (n = this.ref.current) == null ? void 0 : n.parentElement;
  }
  _createPopper() {
    const n = this._getPopperOptions();
    return w(this, Nt) ? w(this, Nt).setOptions(n) : this.ref.current && H(this, Nt, r_(this._getPopperElement(), this.ref.current, n)), w(this, Nt);
  }
  afterRender(n) {
    super.afterRender(n), this.props.controlledMenu && this._createPopper();
  }
  renderToggleIcon() {
    return /* @__PURE__ */ ea("span", {
      class: "contextmenu-toggle-icon caret-right"
    });
  }
}
Nt = new WeakMap();
var Lt, De, On, to;
class xe extends Xt {
  constructor() {
    super(...arguments);
    P(this, Lt, void 0);
    P(this, De, void 0);
    P(this, On, void 0);
    P(this, to, void 0);
  }
  get isShown() {
    var n;
    return (n = w(this, Lt)) == null ? void 0 : n.classList.contains(this.constructor.CLASS_SHOW);
  }
  get menu() {
    return w(this, Lt) || this._ensureMenu();
  }
  get popper() {
    return w(this, De) ? w(this, De) : this._createPopper();
  }
  get trigger() {
    return w(this, to) || this.element;
  }
  get isDynamic() {
    return this.options.items || this.options.menu;
  }
  init() {
    const { element: n } = this;
    n !== document.body && !n.hasAttribute("data-toggle") && n.setAttribute("data-toggle", "contextmenu");
  }
  show(n) {
    return H(this, to, n), this.emit("show", { menu: this, trigger: this.trigger }).defaultPrevented || this.isDynamic && !this._renderMenu() ? !1 : (this.menu.classList.add(this.constructor.CLASS_SHOW), this._createPopper().update(), this.emit("shown", this), !0);
  }
  hide() {
    var r, s;
    return this.emit("hide", this).defaultPrevented ? !1 : ((r = w(this, De)) == null || r.destroy(), H(this, De, void 0), (s = w(this, Lt)) == null || s.classList.remove(this.constructor.CLASS_SHOW), this.emit("hidden", this), !0);
  }
  toggle(n) {
    return this.isShown ? this.hide() : this.show(n);
  }
  destroy() {
    var n, r;
    (n = w(this, De)) == null || n.destroy(), super.destroy(), (r = w(this, Lt)) == null || r.remove();
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
    return H(this, Lt, s), s;
  }
  _getPopperOptions() {
    const { flip: n, preventOverflow: r, modifiers: s = [] } = this.options;
    return {
      modifiers: [
        r ? typeof r == "object" ? { ...vs, options: r } : vs : null,
        n ? o_ : null,
        ...s
      ].filter(Boolean),
      placement: this.options.placement,
      strategy: this.options.strategy
    };
  }
  _createPopper() {
    const n = this._getPopperOptions();
    return w(this, De) ? w(this, De).setOptions(n) : H(this, De, r_(this._getPopperElement(), this.menu, n)), w(this, De);
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
    return !n || this.emit("updateMenu", { menu: n, trigger: this.trigger, contextmenu: this }).defaultPrevented ? !1 : (mv(ea(mm, n), this.menu), !0);
  }
  _getPopperElement() {
    return w(this, On) || H(this, On, {
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
    }), w(this, On);
  }
  static clear(n) {
    var f, p;
    n instanceof Event && (n = { event: n });
    const { event: r, exclude: s, ignoreSelector: o = ".not-hide-menu" } = n || {};
    if (r && o && ((p = (f = r.target).closest) == null ? void 0 : p.call(f, o)) || r && vm(r))
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
Lt = new WeakMap(), De = new WeakMap(), On = new WeakMap(), to = new WeakMap(), A(xe, "NAME", "contextmenu"), A(xe, "EVENTS", !0), A(xe, "DEFAULT", {
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
var Mn, An, Dn, Si, i_;
const wa = class extends xe {
  constructor() {
    super(...arguments);
    P(this, Si);
    P(this, Mn, !1);
    P(this, An, 0);
    A(this, "hideLater", () => {
      w(this, Dn).call(this), H(this, An, window.setTimeout(this.hide.bind(this), 100));
    });
    P(this, Dn, () => {
      clearTimeout(w(this, An)), H(this, An, 0);
    });
  }
  get isHover() {
    return this.options.trigger === "hover";
  }
  get elementShowClass() {
    return `with-${this.constructor.NAME}-show`;
  }
  show(n, r) {
    (r == null ? void 0 : r.clearOthers) !== !1 && wa.clear({ event: r == null ? void 0 : r.event, exclude: [this.element] });
    const s = super.show(n);
    return s && (!w(this, Mn) && this.isHover && ne(this, Si, i_).call(this), this.element.classList.add(this.elementShowClass)), s;
  }
  hide() {
    const n = super.hide();
    return n && this.element.classList.remove(this.elementShowClass), n;
  }
  toggle(n, r) {
    return this.isShown ? this.hide() : this.show(n, { event: n, ...r });
  }
  destroy() {
    w(this, Mn) && (this.element.removeEventListener("mouseleave", this.hideLater), this.menu.removeEventListener("mouseenter", w(this, Dn)), this.menu.removeEventListener("mouseleave", this.hideLater)), super.destroy();
  }
  _getArrowSize() {
    const { arrow: n } = this.options;
    return n ? typeof n == "number" ? n : 5 : 0;
  }
  _getPopperOptions() {
    var s;
    const n = super._getPopperOptions(), r = this._getArrowSize();
    return r && n.modifiers.push({ ...cv, options: {
      padding: r,
      element: ".arrow"
    } }, {
      ..._v,
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
let we = wa;
Mn = new WeakMap(), An = new WeakMap(), Dn = new WeakMap(), Si = new WeakSet(), i_ = function() {
  const { menu: n } = this;
  n.addEventListener("mouseenter", w(this, Dn)), n.addEventListener("mouseleave", this.hideLater), this.element.addEventListener("mouseleave", this.hideLater), H(this, Mn, !0);
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
const gm = (e) => {
  const t = document.getElementsByClassName("with-dropdown-show")[0];
  if (!t)
    return;
  const n = typeof t.closest == "function" ? t.closest(we.MENU_SELECTOR) : null;
  !n || !e.target.contains(n) || we.clear({ event: e });
};
window.addEventListener("scroll", gm, !0);
var no, Tn;
class ym extends kr {
  constructor(n) {
    var r;
    super(n);
    P(this, no, void 0);
    P(this, Tn, Ph());
    this.state = { placement: ((r = n.dropdown) == null ? void 0 : r.placement) || "", show: !1 };
  }
  get ref() {
    return w(this, Tn);
  }
  get triggerElement() {
    return w(this, Tn).current;
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
    }), H(this, no, we.ensure(this.triggerElement, {
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
    (n = w(this, no)) == null || n.destroy();
  }
  beforeRender() {
    const { className: n, children: r, dropdown: s, ...o } = this.props;
    return {
      className: I("dropdown", n),
      children: typeof r == "function" ? r(this.state) : r,
      ...o,
      "data-toggle": "dropdown",
      "data-dropdown-placement": this.state.placement,
      ref: w(this, Tn)
    };
  }
  render() {
    const { children: n, ...r } = this.beforeRender();
    return /* @__PURE__ */ Ou("div", {
      ...r
    }, n);
  }
}
no = new WeakMap(), Tn = new WeakMap();
class bm extends ym {
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
    return r.caret = s, /* @__PURE__ */ Ou(Qt, {
      ...r
    });
  }
}
function s_({
  key: e,
  type: t,
  btnType: n,
  ...r
}) {
  return /* @__PURE__ */ Vi(bm, {
    type: n,
    ...r
  });
}
function wm({
  key: e,
  type: t,
  btnType: n,
  ...r
}) {
  return /* @__PURE__ */ Vi(Rs, {
    type: n,
    ...r
  });
}
class on extends yt {
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
    return /* @__PURE__ */ Vi(t, {
      ...o
    });
  }
}
A(on, "ItemComponents", {
  item: Nh,
  dropdown: s_,
  "btn-group": wm
}), A(on, "ROOT_TAG", "nav"), A(on, "NAME", "toolbar"), A(on, "defaultProps", {
  btnProps: {
    btnType: "ghost"
  }
});
function qr(e, t) {
  const n = e.pageTotal || Math.ceil(e.recTotal / e.recPerPage);
  return typeof t == "string" && (t === "first" ? t = 1 : t === "last" ? t = n : t === "prev" ? t = e.page - 1 : t === "next" ? t = e.page + 1 : t === "current" ? t = e.page : t = Number.parseInt(t, 10)), t = t !== void 0 ? Math.max(1, Math.min(t < 0 ? n + t : t, n)) : e.page, {
    ...e,
    pageTotal: n,
    page: t
  };
}
function $m({
  key: e,
  type: t,
  btnType: n,
  page: r,
  format: s,
  pagerInfo: o,
  linkCreator: a,
  ...c
}) {
  const f = qr(o, r);
  return c.text === void 0 && !c.icon && s && (c.text = typeof s == "function" ? s(f) : Se(s, f)), c.url === void 0 && a && (c.url = typeof a == "function" ? a(f) : Se(a, f)), c.disabled === void 0 && (c.disabled = r !== void 0 && f.page === o.page), /* @__PURE__ */ Jt(Qt, {
    type: n,
    ...c
  });
}
const dt = 24 * 60 * 60 * 1e3, Ae = (e) => e ? (e instanceof Date || (typeof e == "string" && (e = e.trim(), /^\d+$/.test(e) && (e = Number.parseInt(e, 10))), typeof e == "number" && e < 1e10 && (e *= 1e3), e = new Date(e)), e) : new Date(), _o = (e, t = new Date()) => (e = Ae(e), t = Ae(t), e.getFullYear() === t.getFullYear() && e.getMonth() === t.getMonth() && e.getDate() === t.getDate()), Gl = (e, t = new Date()) => Ae(e).getFullYear() === Ae(t).getFullYear(), km = (e, t = new Date()) => (e = Ae(e), t = Ae(t), e.getFullYear() === t.getFullYear() && e.getMonth() === t.getMonth()), dy = (e, t = new Date()) => {
  e = Ae(e), t = Ae(t);
  const n = 1e3 * 60 * 60 * 24, r = Math.floor(e.getTime() / n), s = Math.floor(t.getTime() / n);
  return Math.floor((r + 4) / 7) === Math.floor((s + 4) / 7);
}, hy = (e, t) => _o(Ae(t), e), vy = (e, t) => _o(Ae(t).getTime() - dt, e), my = (e, t) => _o(Ae(t).getTime() + dt, e), gy = (e, t) => _o(Ae(t).getTime() - 2 * dt, e), ms = (e, t = "yyyy-MM-dd hh:mm") => {
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
}, yy = (e, t, n) => {
  const r = {
    full: "yyyy-M-d",
    month: "M-d",
    day: "d",
    str: "{0} ~ {1}",
    ...n
  }, s = ms(e, Gl(e) ? r.month : r.full);
  if (_o(e, t))
    return s;
  const o = ms(t, Gl(e, t) ? km(e, t) ? r.day : r.month : r.full);
  return r.str.replace("{0}", s).replace("{1}", o);
}, by = (e) => {
  const t = new Date().getTime();
  switch (e) {
    case "oneWeek":
      return t - dt * 7;
    case "oneMonth":
      return t - dt * 31;
    case "threeMonth":
      return t - dt * 31 * 3;
    case "halfYear":
      return t - dt * 183;
    case "oneYear":
      return t - dt * 365;
    case "twoYear":
      return t - 2 * (dt * 365);
    default:
      return 0;
  }
}, Xl = (e, t, n = !0, r = Date.now()) => {
  switch (t) {
    case "year":
      return e *= 365, Xl(e, "day", n, r);
    case "quarter":
      e *= 3;
    case "month":
      return e *= 30, Xl(e, "day", n, r);
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
function xm({
  key: e,
  type: t,
  page: n,
  text: r = "",
  pagerInfo: s,
  children: o,
  ...a
}) {
  const c = qr(s, n);
  return r = typeof r == "function" ? r(c) : Se(r, c), /* @__PURE__ */ Jt(Vc, {
    ...a
  }, o, r);
}
function Sm({
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
  const f = { ...c, square: !0 }, p = () => (f.text = "", f.icon = "icon-ellipsis-h", f.disabled = !0, /* @__PURE__ */ Jt(Qt, {
    type: n,
    ...f
  })), i = (u, l) => {
    const _ = [];
    for (let g = u; g <= l; g++) {
      f.text = g, delete f.icon, f.disabled = !1;
      const h = qr(s, g);
      a && (f.url = typeof a == "function" ? a(h) : Se(a, h)), _.push(/* @__PURE__ */ Jt(Qt, {
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
function Em({
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
  return o.text = typeof a == "function" ? a(t) : Se(a, t), s.menu = { ...s.menu, className: I((f = s.menu) == null ? void 0 : f.className, "pager-size-menu") }, /* @__PURE__ */ Jt(s_, {
    type: "dropdown",
    dropdown: s,
    ...o
  });
}
function Cm({
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
    const h = qr(s, d);
    c && !c({ info: h, event: g }) || (g.target.href = i.url = typeof f == "function" ? f(h) : Se(f, h));
  }, _ = qr(s, t || 0);
  return i.url = typeof f == "function" ? f(_) : Se(f, _), i.className = I("input-group-addon", i.className), /* @__PURE__ */ Jt("div", {
    className: I("input-group", "pager-goto-group", o ? `size-${o}` : "")
  }, /* @__PURE__ */ Jt("input", {
    type: "number",
    class: "form-control",
    max: s.pageTotal,
    min: "1",
    onInput: u
  }), /* @__PURE__ */ Jt(Qt, {
    type: r,
    ...i,
    onClick: l
  }));
}
class Ho extends on {
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
A(Ho, "NAME", "pager"), A(Ho, "defaultProps", {
  gap: 1,
  btnProps: {
    btnType: "ghost",
    size: "sm"
  }
}), A(Ho, "ItemComponents", {
  ...on.ItemComponents,
  link: $m,
  info: xm,
  nav: Sm,
  "size-menu": Em,
  goto: Cm
});
class Kl extends Ke {
}
A(Kl, "NAME", "pager"), A(Kl, "Component", Ho);
class Jl extends Ke {
}
A(Jl, "NAME", "toolbar"), A(Jl, "Component", on);
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
var hn = Math.max, vi = Math.min, Xn = Math.round;
function gs() {
  var e = navigator.userAgentData;
  return e != null && e.brands ? e.brands.map(function(t) {
    return t.brand + "/" + t.version;
  }).join(" ") : navigator.userAgent;
}
function a_() {
  return !/^((?!chrome|android).)*safari/i.test(gs());
}
function Kn(e, t, n) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  var r = e.getBoundingClientRect(), s = 1, o = 1;
  t && Le(e) && (s = e.offsetWidth > 0 && Xn(r.width) / e.offsetWidth || 1, o = e.offsetHeight > 0 && Xn(r.height) / e.offsetHeight || 1);
  var a = gn(e) ? He(e) : window, c = a.visualViewport, f = !a_() && n, p = (r.left + (f && c ? c.offsetLeft : 0)) / s, i = (r.top + (f && c ? c.offsetTop : 0)) / o, d = r.width / s, u = r.height / o;
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
function Om(e) {
  return {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  };
}
function Mm(e) {
  return e === He(e) || !Le(e) ? ca(e) : Om(e);
}
function _t(e) {
  return e ? (e.nodeName || "").toLowerCase() : null;
}
function rn(e) {
  return ((gn(e) ? e.ownerDocument : e.document) || window.document).documentElement;
}
function fa(e) {
  return Kn(rn(e)).left + ca(e).scrollLeft;
}
function kt(e) {
  return He(e).getComputedStyle(e);
}
function ua(e) {
  var t = kt(e), n = t.overflow, r = t.overflowX, s = t.overflowY;
  return /auto|scroll|overlay|hidden/.test(n + s + r);
}
function Am(e) {
  var t = e.getBoundingClientRect(), n = Xn(t.width) / e.offsetWidth || 1, r = Xn(t.height) / e.offsetHeight || 1;
  return n !== 1 || r !== 1;
}
function Dm(e, t, n) {
  n === void 0 && (n = !1);
  var r = Le(t), s = Le(t) && Am(t), o = rn(t), a = Kn(e, s, n), c = {
    scrollLeft: 0,
    scrollTop: 0
  }, f = {
    x: 0,
    y: 0
  };
  return (r || !r && !n) && ((_t(t) !== "body" || ua(o)) && (c = Mm(t)), Le(t) ? (f = Kn(t, !0), f.x += t.clientLeft, f.y += t.clientTop) : o && (f.x = fa(o))), {
    x: a.left + c.scrollLeft - f.x,
    y: a.top + c.scrollTop - f.y,
    width: a.width,
    height: a.height
  };
}
function _a(e) {
  var t = Kn(e), n = e.offsetWidth, r = e.offsetHeight;
  return Math.abs(t.width - n) <= 1 && (n = t.width), Math.abs(t.height - r) <= 1 && (r = t.height), {
    x: e.offsetLeft,
    y: e.offsetTop,
    width: n,
    height: r
  };
}
function Zi(e) {
  return _t(e) === "html" ? e : e.assignedSlot || e.parentNode || (la(e) ? e.host : null) || rn(e);
}
function l_(e) {
  return ["html", "body", "#document"].indexOf(_t(e)) >= 0 ? e.ownerDocument.body : Le(e) && ua(e) ? e : l_(Zi(e));
}
function Er(e, t) {
  var n;
  t === void 0 && (t = []);
  var r = l_(e), s = r === ((n = e.ownerDocument) == null ? void 0 : n.body), o = He(r), a = s ? [o].concat(o.visualViewport || [], ua(r) ? r : []) : r, c = t.concat(a);
  return s ? c : c.concat(Er(Zi(a)));
}
function Tm(e) {
  return ["table", "td", "th"].indexOf(_t(e)) >= 0;
}
function Zl(e) {
  return !Le(e) || kt(e).position === "fixed" ? null : e.offsetParent;
}
function Nm(e) {
  var t = /firefox/i.test(gs()), n = /Trident/i.test(gs());
  if (n && Le(e)) {
    var r = kt(e);
    if (r.position === "fixed")
      return null;
  }
  var s = Zi(e);
  for (la(s) && (s = s.host); Le(s) && ["html", "body"].indexOf(_t(s)) < 0; ) {
    var o = kt(s);
    if (o.transform !== "none" || o.perspective !== "none" || o.contain === "paint" || ["transform", "perspective"].indexOf(o.willChange) !== -1 || t && o.willChange === "filter" || t && o.filter && o.filter !== "none")
      return s;
    s = s.parentNode;
  }
  return null;
}
function po(e) {
  for (var t = He(e), n = Zl(e); n && Tm(n) && kt(n).position === "static"; )
    n = Zl(n);
  return n && (_t(n) === "html" || _t(n) === "body" && kt(n).position === "static") ? t : n || Nm(e) || t;
}
var Oe = "top", Ge = "bottom", Xe = "right", Me = "left", pa = "auto", ho = [Oe, Ge, Xe, Me], Jn = "start", Gr = "end", Lm = "clippingParents", c_ = "viewport", rr = "popper", Pm = "reference", Ql = /* @__PURE__ */ ho.reduce(function(e, t) {
  return e.concat([t + "-" + Jn, t + "-" + Gr]);
}, []), f_ = /* @__PURE__ */ [].concat(ho, [pa]).reduce(function(e, t) {
  return e.concat([t, t + "-" + Jn, t + "-" + Gr]);
}, []), Rm = "beforeRead", Hm = "read", Wm = "afterRead", jm = "beforeMain", Bm = "main", Im = "afterMain", Um = "beforeWrite", Fm = "write", zm = "afterWrite", Ym = [Rm, Hm, Wm, jm, Bm, Im, Um, Fm, zm];
function Vm(e) {
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
function qm(e) {
  var t = Vm(e);
  return Ym.reduce(function(n, r) {
    return n.concat(t.filter(function(s) {
      return s.phase === r;
    }));
  }, []);
}
function Gm(e) {
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
function Xm(e) {
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
function Km(e, t) {
  var n = He(e), r = rn(e), s = n.visualViewport, o = r.clientWidth, a = r.clientHeight, c = 0, f = 0;
  if (s) {
    o = s.width, a = s.height;
    var p = a_();
    (p || !p && t === "fixed") && (c = s.offsetLeft, f = s.offsetTop);
  }
  return {
    width: o,
    height: a,
    x: c + fa(e),
    y: f
  };
}
function Jm(e) {
  var t, n = rn(e), r = ca(e), s = (t = e.ownerDocument) == null ? void 0 : t.body, o = hn(n.scrollWidth, n.clientWidth, s ? s.scrollWidth : 0, s ? s.clientWidth : 0), a = hn(n.scrollHeight, n.clientHeight, s ? s.scrollHeight : 0, s ? s.clientHeight : 0), c = -r.scrollLeft + fa(e), f = -r.scrollTop;
  return kt(s || n).direction === "rtl" && (c += hn(n.clientWidth, s ? s.clientWidth : 0) - o), {
    width: o,
    height: a,
    x: c,
    y: f
  };
}
function u_(e, t) {
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
function ys(e) {
  return Object.assign({}, e, {
    left: e.x,
    top: e.y,
    right: e.x + e.width,
    bottom: e.y + e.height
  });
}
function Zm(e, t) {
  var n = Kn(e, !1, t === "fixed");
  return n.top = n.top + e.clientTop, n.left = n.left + e.clientLeft, n.bottom = n.top + e.clientHeight, n.right = n.left + e.clientWidth, n.width = e.clientWidth, n.height = e.clientHeight, n.x = n.left, n.y = n.top, n;
}
function ec(e, t, n) {
  return t === c_ ? ys(Km(e, n)) : gn(t) ? Zm(t, n) : ys(Jm(rn(e)));
}
function Qm(e) {
  var t = Er(Zi(e)), n = ["absolute", "fixed"].indexOf(kt(e).position) >= 0, r = n && Le(e) ? po(e) : e;
  return gn(r) ? t.filter(function(s) {
    return gn(s) && u_(s, r) && _t(s) !== "body";
  }) : [];
}
function eg(e, t, n, r) {
  var s = t === "clippingParents" ? Qm(e) : [].concat(t), o = [].concat(s, [n]), a = o[0], c = o.reduce(function(f, p) {
    var i = ec(e, p, r);
    return f.top = hn(i.top, f.top), f.right = vi(i.right, f.right), f.bottom = vi(i.bottom, f.bottom), f.left = hn(i.left, f.left), f;
  }, ec(e, a, r));
  return c.width = c.right - c.left, c.height = c.bottom - c.top, c.x = c.left, c.y = c.top, c;
}
function Zn(e) {
  return e.split("-")[1];
}
function da(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function __(e) {
  var t = e.reference, n = e.element, r = e.placement, s = r ? lt(r) : null, o = r ? Zn(r) : null, a = t.x + t.width / 2 - n.width / 2, c = t.y + t.height / 2 - n.height / 2, f;
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
  var p = s ? da(s) : null;
  if (p != null) {
    var i = p === "y" ? "height" : "width";
    switch (o) {
      case Jn:
        f[p] = f[p] - (t[i] / 2 - n[i] / 2);
        break;
      case Gr:
        f[p] = f[p] + (t[i] / 2 - n[i] / 2);
        break;
    }
  }
  return f;
}
function p_() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
function d_(e) {
  return Object.assign({}, p_(), e);
}
function h_(e, t) {
  return t.reduce(function(n, r) {
    return n[r] = e, n;
  }, {});
}
function ha(e, t) {
  t === void 0 && (t = {});
  var n = t, r = n.placement, s = r === void 0 ? e.placement : r, o = n.strategy, a = o === void 0 ? e.strategy : o, c = n.boundary, f = c === void 0 ? Lm : c, p = n.rootBoundary, i = p === void 0 ? c_ : p, d = n.elementContext, u = d === void 0 ? rr : d, l = n.altBoundary, _ = l === void 0 ? !1 : l, g = n.padding, h = g === void 0 ? 0 : g, v = d_(typeof h != "number" ? h : h_(h, ho)), m = u === rr ? Pm : rr, k = e.rects.popper, b = e.elements[_ ? m : u], E = eg(gn(b) ? b : b.contextElement || rn(e.elements.popper), f, i, a), $ = Kn(e.elements.reference), S = __({
    reference: $,
    element: k,
    strategy: "absolute",
    placement: s
  }), y = ys(Object.assign({}, k, S)), x = u === rr ? y : $, C = {
    top: E.top - x.top + v.top,
    bottom: x.bottom - E.bottom + v.bottom,
    left: E.left - x.left + v.left,
    right: x.right - E.right + v.right
  }, W = e.modifiersData.offset;
  if (u === rr && W) {
    var F = W[s];
    Object.keys(C).forEach(function(D) {
      var T = [Xe, Ge].indexOf(D) >= 0 ? 1 : -1, O = [Oe, Ge].indexOf(D) >= 0 ? "y" : "x";
      C[D] += F[O] * T;
    });
  }
  return C;
}
var tc = {
  placement: "bottom",
  modifiers: [],
  strategy: "absolute"
};
function nc() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return !t.some(function(r) {
    return !(r && typeof r.getBoundingClientRect == "function");
  });
}
function tg(e) {
  e === void 0 && (e = {});
  var t = e, n = t.defaultModifiers, r = n === void 0 ? [] : n, s = t.defaultOptions, o = s === void 0 ? tc : s;
  return function(c, f, p) {
    p === void 0 && (p = o);
    var i = {
      placement: "bottom",
      orderedModifiers: [],
      options: Object.assign({}, tc, o),
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
          reference: gn(c) ? Er(c) : c.contextElement ? Er(c.contextElement) : [],
          popper: Er(f)
        };
        var k = qm(Xm([].concat(r, i.options.modifiers)));
        return i.orderedModifiers = k.filter(function(b) {
          return b.enabled;
        }), _(), l.update();
      },
      forceUpdate: function() {
        if (!u) {
          var v = i.elements, m = v.reference, k = v.popper;
          if (!!nc(m, k)) {
            i.rects = {
              reference: Dm(m, po(k), i.options.strategy === "fixed"),
              popper: _a(k)
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
      update: Gm(function() {
        return new Promise(function(h) {
          l.forceUpdate(), h(i);
        });
      }),
      destroy: function() {
        g(), u = !0;
      }
    };
    if (!nc(c, f))
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
var yo = {
  passive: !0
};
function ng(e) {
  var t = e.state, n = e.instance, r = e.options, s = r.scroll, o = s === void 0 ? !0 : s, a = r.resize, c = a === void 0 ? !0 : a, f = He(t.elements.popper), p = [].concat(t.scrollParents.reference, t.scrollParents.popper);
  return o && p.forEach(function(i) {
    i.addEventListener("scroll", n.update, yo);
  }), c && f.addEventListener("resize", n.update, yo), function() {
    o && p.forEach(function(i) {
      i.removeEventListener("scroll", n.update, yo);
    }), c && f.removeEventListener("resize", n.update, yo);
  };
}
const rg = {
  name: "eventListeners",
  enabled: !0,
  phase: "write",
  fn: function() {
  },
  effect: ng,
  data: {}
};
function og(e) {
  var t = e.state, n = e.name;
  t.modifiersData[n] = __({
    reference: t.rects.reference,
    element: t.rects.popper,
    strategy: "absolute",
    placement: t.placement
  });
}
const ig = {
  name: "popperOffsets",
  enabled: !0,
  phase: "read",
  fn: og,
  data: {}
};
var sg = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function ag(e) {
  var t = e.x, n = e.y, r = window, s = r.devicePixelRatio || 1;
  return {
    x: Xn(t * s) / s || 0,
    y: Xn(n * s) / s || 0
  };
}
function rc(e) {
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
    var $ = po(n), S = "clientHeight", y = "clientWidth";
    if ($ === He(n) && ($ = rn(n), kt($).position !== "static" && c === "absolute" && (S = "scrollHeight", y = "scrollWidth")), $ = $, s === Oe || (s === Me || s === Xe) && o === Gr) {
      b = Ge;
      var x = d && $ === E && E.visualViewport ? E.visualViewport.height : $[S];
      g -= x - r.height, g *= f ? 1 : -1;
    }
    if (s === Me || (s === Oe || s === Ge) && o === Gr) {
      k = Xe;
      var C = d && $ === E && E.visualViewport ? E.visualViewport.width : $[y];
      l -= C - r.width, l *= f ? 1 : -1;
    }
  }
  var W = Object.assign({
    position: c
  }, p && sg), F = i === !0 ? ag({
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
function lg(e) {
  var t = e.state, n = e.options, r = n.gpuAcceleration, s = r === void 0 ? !0 : r, o = n.adaptive, a = o === void 0 ? !0 : o, c = n.roundOffsets, f = c === void 0 ? !0 : c, p = {
    placement: lt(t.placement),
    variation: Zn(t.placement),
    popper: t.elements.popper,
    popperRect: t.rects.popper,
    gpuAcceleration: s,
    isFixed: t.options.strategy === "fixed"
  };
  t.modifiersData.popperOffsets != null && (t.styles.popper = Object.assign({}, t.styles.popper, rc(Object.assign({}, p, {
    offsets: t.modifiersData.popperOffsets,
    position: t.options.strategy,
    adaptive: a,
    roundOffsets: f
  })))), t.modifiersData.arrow != null && (t.styles.arrow = Object.assign({}, t.styles.arrow, rc(Object.assign({}, p, {
    offsets: t.modifiersData.arrow,
    position: "absolute",
    adaptive: !1,
    roundOffsets: f
  })))), t.attributes.popper = Object.assign({}, t.attributes.popper, {
    "data-popper-placement": t.placement
  });
}
const cg = {
  name: "computeStyles",
  enabled: !0,
  phase: "beforeWrite",
  fn: lg,
  data: {}
};
function fg(e) {
  var t = e.state;
  Object.keys(t.elements).forEach(function(n) {
    var r = t.styles[n] || {}, s = t.attributes[n] || {}, o = t.elements[n];
    !Le(o) || !_t(o) || (Object.assign(o.style, r), Object.keys(s).forEach(function(a) {
      var c = s[a];
      c === !1 ? o.removeAttribute(a) : o.setAttribute(a, c === !0 ? "" : c);
    }));
  });
}
function ug(e) {
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
      !Le(s) || !_t(s) || (Object.assign(s.style, c), Object.keys(o).forEach(function(f) {
        s.removeAttribute(f);
      }));
    });
  };
}
const _g = {
  name: "applyStyles",
  enabled: !0,
  phase: "write",
  fn: fg,
  effect: ug,
  requires: ["computeStyles"]
};
var pg = [rg, ig, cg, _g], dg = /* @__PURE__ */ tg({
  defaultModifiers: pg
});
function Cr(e, t, n) {
  return hn(e, vi(t, n));
}
function hg(e, t, n) {
  var r = Cr(e, t, n);
  return r > n ? n : r;
}
var vg = function(t, n) {
  return t = typeof t == "function" ? t(Object.assign({}, n.rects, {
    placement: n.placement
  })) : t, d_(typeof t != "number" ? t : h_(t, ho));
};
function mg(e) {
  var t, n = e.state, r = e.name, s = e.options, o = n.elements.arrow, a = n.modifiersData.popperOffsets, c = lt(n.placement), f = da(c), p = [Me, Xe].indexOf(c) >= 0, i = p ? "height" : "width";
  if (!(!o || !a)) {
    var d = vg(s.padding, n), u = _a(o), l = f === "y" ? Oe : Me, _ = f === "y" ? Ge : Xe, g = n.rects.reference[i] + n.rects.reference[f] - a[f] - n.rects.popper[i], h = a[f] - n.rects.reference[f], v = po(o), m = v ? f === "y" ? v.clientHeight || 0 : v.clientWidth || 0 : 0, k = g / 2 - h / 2, b = d[l], E = m - u[i] - d[_], $ = m / 2 - u[i] / 2 + k, S = Cr(b, $, E), y = f;
    n.modifiersData[r] = (t = {}, t[y] = S, t.centerOffset = S - $, t);
  }
}
function gg(e) {
  var t = e.state, n = e.options, r = n.element, s = r === void 0 ? "[data-popper-arrow]" : r;
  s != null && (typeof s == "string" && (s = t.elements.popper.querySelector(s), !s) || !u_(t.elements.popper, s) || (t.elements.arrow = s));
}
const yg = {
  name: "arrow",
  enabled: !0,
  phase: "main",
  fn: mg,
  effect: gg,
  requires: ["popperOffsets"],
  requiresIfExists: ["preventOverflow"]
};
function bg(e, t, n) {
  var r = lt(e), s = [Me, Oe].indexOf(r) >= 0 ? -1 : 1, o = typeof n == "function" ? n(Object.assign({}, t, {
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
function wg(e) {
  var t = e.state, n = e.options, r = e.name, s = n.offset, o = s === void 0 ? [0, 0] : s, a = f_.reduce(function(i, d) {
    return i[d] = bg(d, t.rects, o), i;
  }, {}), c = a[t.placement], f = c.x, p = c.y;
  t.modifiersData.popperOffsets != null && (t.modifiersData.popperOffsets.x += f, t.modifiersData.popperOffsets.y += p), t.modifiersData[r] = a;
}
const $g = {
  name: "offset",
  enabled: !0,
  phase: "main",
  requires: ["popperOffsets"],
  fn: wg
};
function kg(e) {
  return e === "x" ? "y" : "x";
}
function xg(e) {
  var t = e.state, n = e.options, r = e.name, s = n.mainAxis, o = s === void 0 ? !0 : s, a = n.altAxis, c = a === void 0 ? !1 : a, f = n.boundary, p = n.rootBoundary, i = n.altBoundary, d = n.padding, u = n.tether, l = u === void 0 ? !0 : u, _ = n.tetherOffset, g = _ === void 0 ? 0 : _, h = ha(t, {
    boundary: f,
    rootBoundary: p,
    padding: d,
    altBoundary: i
  }), v = lt(t.placement), m = Zn(t.placement), k = !m, b = da(v), E = kg(b), $ = t.modifiersData.popperOffsets, S = t.rects.reference, y = t.rects.popper, x = typeof g == "function" ? g(Object.assign({}, t.rects, {
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
      var D, T = b === "y" ? Oe : Me, O = b === "y" ? Ge : Xe, N = b === "y" ? "height" : "width", M = $[b], j = M + h[T], R = M - h[O], U = l ? -y[N] / 2 : 0, G = m === Jn ? S[N] : y[N], z = m === Jn ? -y[N] : -S[N], K = t.elements.arrow, Q = l && K ? _a(K) : {
        width: 0,
        height: 0
      }, L = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : p_(), Y = L[T], X = L[O], q = Cr(0, S[N], Q[N]), J = k ? S[N] / 2 - U - q - Y - C.mainAxis : G - q - Y - C.mainAxis, le = k ? -S[N] / 2 + U + q + X + C.mainAxis : z + q + X + C.mainAxis, ae = t.elements.arrow && po(t.elements.arrow), be = ae ? b === "y" ? ae.clientTop || 0 : ae.clientLeft || 0 : 0, Je = (D = W == null ? void 0 : W[b]) != null ? D : 0, ee = M + J - Je - be, xt = M + le - Je, We = Cr(l ? vi(j, ee) : j, M, l ? hn(R, xt) : R);
      $[b] = We, F[b] = We - M;
    }
    if (c) {
      var je, St = b === "x" ? Oe : Me, Ze = b === "x" ? Ge : Xe, te = $[E], me = E === "y" ? "height" : "width", Be = te + h[St], Et = te - h[Ze], Ie = [Oe, Me].indexOf(v) !== -1, Ct = (je = W == null ? void 0 : W[E]) != null ? je : 0, Ot = Ie ? Be : te - S[me] - y[me] - Ct + C.altAxis, Mt = Ie ? te + S[me] + y[me] - Ct - C.altAxis : Et, At = l && Ie ? hg(Ot, te, Mt) : Cr(l ? Ot : Be, te, l ? Mt : Et);
      $[E] = At, F[E] = At - te;
    }
    t.modifiersData[r] = F;
  }
}
const Sg = {
  name: "preventOverflow",
  enabled: !0,
  phase: "main",
  fn: xg,
  requiresIfExists: ["offset"]
};
var Eg = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function Wo(e) {
  return e.replace(/left|right|bottom|top/g, function(t) {
    return Eg[t];
  });
}
var Cg = {
  start: "end",
  end: "start"
};
function oc(e) {
  return e.replace(/start|end/g, function(t) {
    return Cg[t];
  });
}
function Og(e, t) {
  t === void 0 && (t = {});
  var n = t, r = n.placement, s = n.boundary, o = n.rootBoundary, a = n.padding, c = n.flipVariations, f = n.allowedAutoPlacements, p = f === void 0 ? f_ : f, i = Zn(r), d = i ? c ? Ql : Ql.filter(function(_) {
    return Zn(_) === i;
  }) : ho, u = d.filter(function(_) {
    return p.indexOf(_) >= 0;
  });
  u.length === 0 && (u = d);
  var l = u.reduce(function(_, g) {
    return _[g] = ha(e, {
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
function Mg(e) {
  if (lt(e) === pa)
    return [];
  var t = Wo(e);
  return [oc(e), t, oc(t)];
}
function Ag(e) {
  var t = e.state, n = e.options, r = e.name;
  if (!t.modifiersData[r]._skip) {
    for (var s = n.mainAxis, o = s === void 0 ? !0 : s, a = n.altAxis, c = a === void 0 ? !0 : a, f = n.fallbackPlacements, p = n.padding, i = n.boundary, d = n.rootBoundary, u = n.altBoundary, l = n.flipVariations, _ = l === void 0 ? !0 : l, g = n.allowedAutoPlacements, h = t.options.placement, v = lt(h), m = v === h, k = f || (m || !_ ? [Wo(h)] : Mg(h)), b = [h].concat(k).reduce(function(Q, L) {
      return Q.concat(lt(L) === pa ? Og(t, {
        placement: L,
        boundary: i,
        rootBoundary: d,
        padding: p,
        flipVariations: _,
        allowedAutoPlacements: g
      }) : L);
    }, []), E = t.rects.reference, $ = t.rects.popper, S = /* @__PURE__ */ new Map(), y = !0, x = b[0], C = 0; C < b.length; C++) {
      var W = b[C], F = lt(W), D = Zn(W) === Jn, T = [Oe, Ge].indexOf(F) >= 0, O = T ? "width" : "height", N = ha(t, {
        placement: W,
        boundary: i,
        rootBoundary: d,
        altBoundary: u,
        padding: p
      }), M = T ? D ? Xe : Me : D ? Ge : Oe;
      E[O] > $[O] && (M = Wo(M));
      var j = Wo(M), R = [];
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
const Dg = {
  name: "flip",
  enabled: !0,
  phase: "main",
  fn: Ag,
  requiresIfExists: ["offset"],
  data: {
    _skip: !1
  }
};
var Nn, Ln, Pn, cn, Fe, ro, Rn, Ei, v_;
class st extends Xt {
  constructor() {
    super(...arguments);
    P(this, Ei);
    P(this, Nn, !1);
    P(this, Ln, void 0);
    P(this, Pn, 0);
    P(this, cn, void 0);
    P(this, Fe, void 0);
    P(this, ro, void 0);
    A(this, "hideLater", () => {
      w(this, Rn).call(this), H(this, Pn, window.setTimeout(this.hide.bind(this), 100));
    });
    P(this, Rn, () => {
      clearTimeout(w(this, Pn)), H(this, Pn, 0);
    });
  }
  get isShown() {
    var n;
    return (n = w(this, cn)) == null ? void 0 : n.classList.contains(this.constructor.CLASS_SHOW);
  }
  get tooltip() {
    return w(this, cn) || this._ensureTooltip();
  }
  get popper() {
    return w(this, Fe) ? w(this, Fe) : this._createPopper();
  }
  get trigger() {
    return w(this, ro) || this.element;
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
    return H(this, ro, n), !w(this, Nn) && this.isHover && ne(this, Ei, v_).call(this), this.options.animation && this.tooltip.classList.add("fade"), this.element.classList.add(this.elementShowClass), this.tooltip.classList.add(this.constructor.CLASS_SHOW), this._createPopper().update(), !0;
  }
  hide() {
    var n, r;
    return (n = w(this, Fe)) == null || n.destroy(), H(this, Fe, void 0), this.element.classList.remove(this.elementShowClass), (r = w(this, cn)) == null || r.classList.remove(this.constructor.CLASS_SHOW), !0;
  }
  toggle(n) {
    return this.isShown ? this.hide() : this.show(n);
  }
  destroy() {
    w(this, Nn) && (this.element.removeEventListener("mouseleave", this.hideLater), this.tooltip.removeEventListener("mouseenter", w(this, Rn)), this.tooltip.removeEventListener("mouseleave", this.hideLater)), super.destroy();
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
    return o = o.concat(s), r.classList.add(...o), r[this.options.html ? "innerHTML" : "innerText"] = this.options.title || "", this.options.arrow && r.prepend(this._createArrow()), document.body.appendChild(r), H(this, cn, r), r;
  }
  _getPopperOptions() {
    const n = this._getArrowSize();
    return {
      modifiers: [
        Sg,
        Dg,
        { ...yg, options: {
          padding: n,
          element: ".arrow"
        } },
        {
          ...$g,
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
    return w(this, Fe) ? w(this, Fe).setOptions(n) : H(this, Fe, dg(this._getPopperElement(), this.tooltip, n)), w(this, Fe);
  }
  _getPopperElement() {
    return w(this, Ln) || H(this, Ln, {
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
    }), w(this, Ln);
  }
  static clear(n) {
    n instanceof Event && (n = { event: n });
    const { exclude: r } = n || {}, s = this.getAll().entries(), o = new Set(r || []);
    for (const [a, c] of s)
      o.has(a) || c.hide();
  }
}
Nn = new WeakMap(), Ln = new WeakMap(), Pn = new WeakMap(), cn = new WeakMap(), Fe = new WeakMap(), ro = new WeakMap(), Rn = new WeakMap(), Ei = new WeakSet(), v_ = function() {
  const { tooltip: n } = this;
  n.addEventListener("mouseenter", w(this, Rn)), n.addEventListener("mouseleave", this.hideLater), this.element.addEventListener("mouseleave", this.hideLater), H(this, Nn, !0);
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
var va, he, m_, g_, Or, ic, y_ = {}, b_ = [], Tg = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function qt(e, t) {
  for (var n in t)
    e[n] = t[n];
  return e;
}
function w_(e) {
  var t = e.parentNode;
  t && t.removeChild(e);
}
function V(e, t, n) {
  var r, s, o, a = {};
  for (o in t)
    o == "key" ? r = t[o] : o == "ref" ? s = t[o] : a[o] = t[o];
  if (arguments.length > 2 && (a.children = arguments.length > 3 ? va.call(arguments, 2) : n), typeof e == "function" && e.defaultProps != null)
    for (o in e.defaultProps)
      a[o] === void 0 && (a[o] = e.defaultProps[o]);
  return jo(e, a, r, s, null);
}
function jo(e, t, n, r, s) {
  var o = { type: e, props: t, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: s == null ? ++m_ : s };
  return s == null && he.vnode != null && he.vnode(o), o;
}
function Ng() {
  return { current: null };
}
function ma(e) {
  return e.children;
}
function Mr(e, t) {
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
function $_(e) {
  var t, n;
  if ((e = e.__) != null && e.__c != null) {
    for (e.__e = e.__c.base = null, t = 0; t < e.__k.length; t++)
      if ((n = e.__k[t]) != null && n.__e != null) {
        e.__e = e.__c.base = n.__e;
        break;
      }
    return $_(e);
  }
}
function sc(e) {
  (!e.__d && (e.__d = !0) && Or.push(e) && !mi.__r++ || ic !== he.debounceRendering) && ((ic = he.debounceRendering) || setTimeout)(mi);
}
function mi() {
  for (var e; mi.__r = Or.length; )
    e = Or.sort(function(t, n) {
      return t.__v.__b - n.__v.__b;
    }), Or = [], e.some(function(t) {
      var n, r, s, o, a, c;
      t.__d && (a = (o = (n = t).__v).__e, (c = n.__P) && (r = [], (s = qt({}, o)).__v = o.__v + 1, E_(c, o, s, n.__n, c.ownerSVGElement !== void 0, o.__h != null ? [a] : null, r, a == null ? Xr(o) : a, o.__h), Pg(r, o), o.__e != a && $_(o)));
    });
}
function k_(e, t, n, r, s, o, a, c, f, p) {
  var i, d, u, l, _, g, h, v = r && r.__k || b_, m = v.length;
  for (n.__k = [], i = 0; i < t.length; i++)
    if ((l = n.__k[i] = (l = t[i]) == null || typeof l == "boolean" ? null : typeof l == "string" || typeof l == "number" || typeof l == "bigint" ? jo(null, l, null, null, l) : Array.isArray(l) ? jo(ma, { children: l }, null, null, null) : l.__b > 0 ? jo(l.type, l.props, l.key, l.ref ? l.ref : null, l.__v) : l) != null) {
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
      E_(e, l, u = u || y_, s, o, a, c, f, p), _ = l.__e, (d = l.ref) && u.ref != d && (h || (h = []), u.ref && h.push(u.ref, null, l), h.push(d, l.__c || _, l)), _ != null ? (g == null && (g = _), typeof l.type == "function" && l.__k === u.__k ? l.__d = f = x_(l, f, e) : f = S_(e, l, u, v, _, f), typeof n.type == "function" && (n.__d = f)) : f && u.__e == f && f.parentNode != e && (f = Xr(u));
    }
  for (n.__e = g, i = m; i--; )
    v[i] != null && O_(v[i], v[i]);
  if (h)
    for (i = 0; i < h.length; i++)
      C_(h[i], h[++i], h[++i]);
}
function x_(e, t, n) {
  for (var r, s = e.__k, o = 0; s && o < s.length; o++)
    (r = s[o]) && (r.__ = e, t = typeof r.type == "function" ? x_(r, t, n) : S_(n, r, r, s, r.__e, t));
  return t;
}
function S_(e, t, n, r, s, o) {
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
    o === "children" || o === "key" || o in t || gi(e, o, null, n[o], r);
  for (o in t)
    s && typeof t[o] != "function" || o === "children" || o === "key" || o === "value" || o === "checked" || n[o] === t[o] || gi(e, o, t[o], n[o], r);
}
function ac(e, t, n) {
  t[0] === "-" ? e.setProperty(t, n) : e[t] = n == null ? "" : typeof n != "number" || Tg.test(t) ? n : n + "px";
}
function gi(e, t, n, r, s) {
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
function E_(e, t, n, r, s, o, a, c, f) {
  var p, i, d, u, l, _, g, h, v, m, k, b, E, $, S, y = t.type;
  if (t.constructor !== void 0)
    return null;
  n.__h != null && (f = n.__h, c = t.__e = n.__e, t.__h = null, o = [c]), (p = he.__b) && p(t);
  try {
    e:
      if (typeof y == "function") {
        if (h = t.props, v = (p = y.contextType) && r[p.__c], m = p ? v ? v.props.value : p.__ : r, n.__c ? g = (i = t.__c = n.__c).__ = i.__E : ("prototype" in y && y.prototype.render ? t.__c = i = new y(h, m) : (t.__c = i = new Mr(h, m), i.constructor = y, i.render = Hg), v && v.sub(i), i.props = h, i.state || (i.state = {}), i.context = m, i.__n = r, d = i.__d = !0, i.__h = [], i._sb = []), i.__s == null && (i.__s = i.state), y.getDerivedStateFromProps != null && (i.__s == i.state && (i.__s = qt({}, i.__s)), qt(i.__s, y.getDerivedStateFromProps(h, i.__s))), u = i.props, l = i.state, d)
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
        i.state = i.__s, i.getChildContext != null && (r = qt(qt({}, r), i.getChildContext())), d || i.getSnapshotBeforeUpdate == null || (_ = i.getSnapshotBeforeUpdate(u, l)), S = p != null && p.type === ma && p.key == null ? p.props.children : p, k_(e, Array.isArray(S) ? S : [S], t, n, r, s, o, a, c, f), i.base = t.__e, t.__h = null, i.__h.length && a.push(i), g && (i.__E = i.__ = null), i.__e = !1;
      } else
        o == null && t.__v === n.__v ? (t.__k = n.__k, t.__e = n.__e) : t.__e = Rg(n.__e, t, n, r, s, o, a, f);
    (p = he.diffed) && p(t);
  } catch (x) {
    t.__v = null, (f || o != null) && (t.__e = c, t.__h = !!f, o[o.indexOf(c)] = null), he.__e(x, t, n);
  }
}
function Pg(e, t) {
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
function Rg(e, t, n, r, s, o, a, c) {
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
    if (o = o && va.call(e.childNodes), p = (d = n.props || y_).dangerouslySetInnerHTML, i = u.dangerouslySetInnerHTML, !c) {
      if (o != null)
        for (d = {}, _ = 0; _ < e.attributes.length; _++)
          d[e.attributes[_].name] = e.attributes[_].value;
      (i || p) && (i && (p && i.__html == p.__html || i.__html === e.innerHTML) || (e.innerHTML = i && i.__html || ""));
    }
    if (Lg(e, u, d, s, c), i)
      t.__k = [];
    else if (_ = t.props.children, k_(e, Array.isArray(_) ? _ : [_], t, n, r, s && l !== "foreignObject", o, a, o ? o[0] : n.__k && Xr(n, 0), c), o != null)
      for (_ = o.length; _--; )
        o[_] != null && w_(o[_]);
    c || ("value" in u && (_ = u.value) !== void 0 && (_ !== e.value || l === "progress" && !_ || l === "option" && _ !== d.value) && gi(e, "value", _, d.value, !1), "checked" in u && (_ = u.checked) !== void 0 && _ !== e.checked && gi(e, "checked", _, d.checked, !1));
  }
  return e;
}
function C_(e, t, n) {
  try {
    typeof e == "function" ? e(t) : e.current = t;
  } catch (r) {
    he.__e(r, n);
  }
}
function O_(e, t, n) {
  var r, s;
  if (he.unmount && he.unmount(e), (r = e.ref) && (r.current && r.current !== e.__e || C_(r, null, t)), (r = e.__c) != null) {
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
      r[s] && O_(r[s], t, n || typeof e.type != "function");
  n || e.__e == null || w_(e.__e), e.__ = e.__e = e.__d = void 0;
}
function Hg(e, t, n) {
  return this.constructor(e, n);
}
va = b_.slice, he = { __e: function(e, t, n, r) {
  for (var s, o, a; t = t.__; )
    if ((s = t.__c) && !s.__)
      try {
        if ((o = s.constructor) && o.getDerivedStateFromError != null && (s.setState(o.getDerivedStateFromError(e)), a = s.__d), s.componentDidCatch != null && (s.componentDidCatch(e, r || {}), a = s.__d), a)
          return s.__E = s;
      } catch (c) {
        e = c;
      }
  throw e;
} }, m_ = 0, g_ = function(e) {
  return e != null && e.constructor === void 0;
}, Mr.prototype.setState = function(e, t) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = qt({}, this.state), typeof e == "function" && (e = e(qt({}, n), this.props)), e && qt(n, e), e != null && this.__v && (t && this._sb.push(t), sc(this));
}, Mr.prototype.forceUpdate = function(e) {
  this.__v && (this.__e = !0, e && this.__h.push(e), sc(this));
}, Mr.prototype.render = ma, Or = [], mi.__r = 0;
let Wg = (e = 21) => crypto.getRandomValues(new Uint8Array(e)).reduce((t, n) => (n &= 63, n < 36 ? t += n.toString(36) : n < 62 ? t += (n - 26).toString(36).toUpperCase() : n > 62 ? t += "-" : t += "_", t), "");
var ga, ve, M_, Ar, fc, A_ = {}, D_ = [], jg = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function Gt(e, t) {
  for (var n in t)
    e[n] = t[n];
  return e;
}
function T_(e) {
  var t = e.parentNode;
  t && t.removeChild(e);
}
function uc(e, t, n) {
  var r, s, o, a = {};
  for (o in t)
    o == "key" ? r = t[o] : o == "ref" ? s = t[o] : a[o] = t[o];
  if (arguments.length > 2 && (a.children = arguments.length > 3 ? ga.call(arguments, 2) : n), typeof e == "function" && e.defaultProps != null)
    for (o in e.defaultProps)
      a[o] === void 0 && (a[o] = e.defaultProps[o]);
  return Bo(e, a, r, s, null);
}
function Bo(e, t, n, r, s) {
  var o = { type: e, props: t, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: s == null ? ++M_ : s };
  return s == null && ve.vnode != null && ve.vnode(o), o;
}
function ya(e) {
  return e.children;
}
function Dr(e, t) {
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
function N_(e) {
  var t, n;
  if ((e = e.__) != null && e.__c != null) {
    for (e.__e = e.__c.base = null, t = 0; t < e.__k.length; t++)
      if ((n = e.__k[t]) != null && n.__e != null) {
        e.__e = e.__c.base = n.__e;
        break;
      }
    return N_(e);
  }
}
function _c(e) {
  (!e.__d && (e.__d = !0) && Ar.push(e) && !yi.__r++ || fc !== ve.debounceRendering) && ((fc = ve.debounceRendering) || setTimeout)(yi);
}
function yi() {
  for (var e; yi.__r = Ar.length; )
    e = Ar.sort(function(t, n) {
      return t.__v.__b - n.__v.__b;
    }), Ar = [], e.some(function(t) {
      var n, r, s, o, a, c;
      t.__d && (a = (o = (n = t).__v).__e, (c = n.__P) && (r = [], (s = Gt({}, o)).__v = o.__v + 1, H_(c, o, s, n.__n, c.ownerSVGElement !== void 0, o.__h != null ? [a] : null, r, a == null ? Kr(o) : a, o.__h), Ig(r, o), o.__e != a && N_(o)));
    });
}
function L_(e, t, n, r, s, o, a, c, f, p) {
  var i, d, u, l, _, g, h, v = r && r.__k || D_, m = v.length;
  for (n.__k = [], i = 0; i < t.length; i++)
    if ((l = n.__k[i] = (l = t[i]) == null || typeof l == "boolean" ? null : typeof l == "string" || typeof l == "number" || typeof l == "bigint" ? Bo(null, l, null, null, l) : Array.isArray(l) ? Bo(ya, { children: l }, null, null, null) : l.__b > 0 ? Bo(l.type, l.props, l.key, l.ref ? l.ref : null, l.__v) : l) != null) {
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
      H_(e, l, u = u || A_, s, o, a, c, f, p), _ = l.__e, (d = l.ref) && u.ref != d && (h || (h = []), u.ref && h.push(u.ref, null, l), h.push(d, l.__c || _, l)), _ != null ? (g == null && (g = _), typeof l.type == "function" && l.__k === u.__k ? l.__d = f = P_(l, f, e) : f = R_(e, l, u, v, _, f), typeof n.type == "function" && (n.__d = f)) : f && u.__e == f && f.parentNode != e && (f = Kr(u));
    }
  for (n.__e = g, i = m; i--; )
    v[i] != null && j_(v[i], v[i]);
  if (h)
    for (i = 0; i < h.length; i++)
      W_(h[i], h[++i], h[++i]);
}
function P_(e, t, n) {
  for (var r, s = e.__k, o = 0; s && o < s.length; o++)
    (r = s[o]) && (r.__ = e, t = typeof r.type == "function" ? P_(r, t, n) : R_(n, r, r, s, r.__e, t));
  return t;
}
function R_(e, t, n, r, s, o) {
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
    o === "children" || o === "key" || o in t || bi(e, o, null, n[o], r);
  for (o in t)
    s && typeof t[o] != "function" || o === "children" || o === "key" || o === "value" || o === "checked" || n[o] === t[o] || bi(e, o, t[o], n[o], r);
}
function pc(e, t, n) {
  t[0] === "-" ? e.setProperty(t, n) : e[t] = n == null ? "" : typeof n != "number" || jg.test(t) ? n : n + "px";
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
  this.l[e.type + !1](ve.event ? ve.event(e) : e);
}
function hc(e) {
  this.l[e.type + !0](ve.event ? ve.event(e) : e);
}
function H_(e, t, n, r, s, o, a, c, f) {
  var p, i, d, u, l, _, g, h, v, m, k, b, E, $, S, y = t.type;
  if (t.constructor !== void 0)
    return null;
  n.__h != null && (f = n.__h, c = t.__e = n.__e, t.__h = null, o = [c]), (p = ve.__b) && p(t);
  try {
    e:
      if (typeof y == "function") {
        if (h = t.props, v = (p = y.contextType) && r[p.__c], m = p ? v ? v.props.value : p.__ : r, n.__c ? g = (i = t.__c = n.__c).__ = i.__E : ("prototype" in y && y.prototype.render ? t.__c = i = new y(h, m) : (t.__c = i = new Dr(h, m), i.constructor = y, i.render = Fg), v && v.sub(i), i.props = h, i.state || (i.state = {}), i.context = m, i.__n = r, d = i.__d = !0, i.__h = [], i._sb = []), i.__s == null && (i.__s = i.state), y.getDerivedStateFromProps != null && (i.__s == i.state && (i.__s = Gt({}, i.__s)), Gt(i.__s, y.getDerivedStateFromProps(h, i.__s))), u = i.props, l = i.state, d)
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
        i.state = i.__s, i.getChildContext != null && (r = Gt(Gt({}, r), i.getChildContext())), d || i.getSnapshotBeforeUpdate == null || (_ = i.getSnapshotBeforeUpdate(u, l)), S = p != null && p.type === ya && p.key == null ? p.props.children : p, L_(e, Array.isArray(S) ? S : [S], t, n, r, s, o, a, c, f), i.base = t.__e, t.__h = null, i.__h.length && a.push(i), g && (i.__E = i.__ = null), i.__e = !1;
      } else
        o == null && t.__v === n.__v ? (t.__k = n.__k, t.__e = n.__e) : t.__e = Ug(n.__e, t, n, r, s, o, a, f);
    (p = ve.diffed) && p(t);
  } catch (x) {
    t.__v = null, (f || o != null) && (t.__e = c, t.__h = !!f, o[o.indexOf(c)] = null), ve.__e(x, t, n);
  }
}
function Ig(e, t) {
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
    if (o = o && ga.call(e.childNodes), p = (d = n.props || A_).dangerouslySetInnerHTML, i = u.dangerouslySetInnerHTML, !c) {
      if (o != null)
        for (d = {}, _ = 0; _ < e.attributes.length; _++)
          d[e.attributes[_].name] = e.attributes[_].value;
      (i || p) && (i && (p && i.__html == p.__html || i.__html === e.innerHTML) || (e.innerHTML = i && i.__html || ""));
    }
    if (Bg(e, u, d, s, c), i)
      t.__k = [];
    else if (_ = t.props.children, L_(e, Array.isArray(_) ? _ : [_], t, n, r, s && l !== "foreignObject", o, a, o ? o[0] : n.__k && Kr(n, 0), c), o != null)
      for (_ = o.length; _--; )
        o[_] != null && T_(o[_]);
    c || ("value" in u && (_ = u.value) !== void 0 && (_ !== e.value || l === "progress" && !_ || l === "option" && _ !== d.value) && bi(e, "value", _, d.value, !1), "checked" in u && (_ = u.checked) !== void 0 && _ !== e.checked && bi(e, "checked", _, d.checked, !1));
  }
  return e;
}
function W_(e, t, n) {
  try {
    typeof e == "function" ? e(t) : e.current = t;
  } catch (r) {
    ve.__e(r, n);
  }
}
function j_(e, t, n) {
  var r, s;
  if (ve.unmount && ve.unmount(e), (r = e.ref) && (r.current && r.current !== e.__e || W_(r, null, t)), (r = e.__c) != null) {
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
      r[s] && j_(r[s], t, n || typeof e.type != "function");
  n || e.__e == null || T_(e.__e), e.__ = e.__e = e.__d = void 0;
}
function Fg(e, t, n) {
  return this.constructor(e, n);
}
ga = D_.slice, ve = { __e: function(e, t, n, r) {
  for (var s, o, a; t = t.__; )
    if ((s = t.__c) && !s.__)
      try {
        if ((o = s.constructor) && o.getDerivedStateFromError != null && (s.setState(o.getDerivedStateFromError(e)), a = s.__d), s.componentDidCatch != null && (s.componentDidCatch(e, r || {}), a = s.__d), a)
          return s.__E = s;
      } catch (c) {
        e = c;
      }
  throw e;
} }, M_ = 0, Dr.prototype.setState = function(e, t) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = Gt({}, this.state), typeof e == "function" && (e = e(Gt({}, n), this.props)), e && Gt(n, e), e != null && this.__v && (t && this._sb.push(t), _c(this));
}, Dr.prototype.forceUpdate = function(e) {
  this.__v && (this.__e = !0, e && this.__h.push(e), _c(this));
}, Dr.prototype.render = ya, Ar = [], yi.__r = 0;
var fn, un;
class vc extends Dr {
  constructor(n) {
    var r;
    super(n);
    P(this, fn, 0);
    P(this, un, null);
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
      r && (w(this, fn) && cancelAnimationFrame(w(this, fn)), H(this, fn, requestAnimationFrame(() => {
        const s = this.props.type === "horz" ? n.clientX - r.x : n.clientY - r.y;
        this.scroll(r.offset + s * this.props.scrollSize / this.props.clientSize), H(this, fn, 0);
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
    n && (H(this, un, typeof n == "string" ? document : n.current), w(this, un).addEventListener("wheel", this._handleWheel, { passive: !1 }));
  }
  componentWillUnmount() {
    document.removeEventListener("mousemove", this._handleMouseMove), document.removeEventListener("mouseup", this._handleMouseUp), w(this, un) && w(this, un).removeEventListener("wheel", this._handleWheel);
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
    return r === "horz" ? (_.height = s, _.width = n, g.width = this.barSize, g.left = Math.round(Math.min(d, u) * (n - g.width) / d)) : (_.width = s, _.height = n, g.height = this.barSize, g.top = Math.round(Math.min(d, u) * (n - g.height) / d)), /* @__PURE__ */ uc("div", {
      className: I("scrollbar", o, {
        "is-vert": r === "vert",
        "is-horz": r === "horz",
        "is-dragging": l
      }),
      style: _,
      onMouseDown: this._handleClick
    }, /* @__PURE__ */ uc("div", {
      className: "scrollbar-bar",
      style: g,
      onMouseDown: this._handleMouseDown
    }));
  }
}
fn = new WeakMap(), un = new WeakMap();
function mc(e, t, n) {
  return e && (t && (e = Math.max(t, e)), n && (e = Math.min(n, e))), e;
}
function B_({ col: e, className: t, height: n, row: r, onRenderCell: s, style: o, outerStyle: a, children: c, outerClass: f, ...p }) {
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
    if (typeof C == "object" && C && !g_(C) && ("html" in C || "className" in C || "style" in C || "attrs" in C || "children" in C || "tagName" in C)) {
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
function rs({ row: e, className: t, top: n = 0, left: r = 0, width: s, height: o, cols: a, CellComponent: c = B_, onRenderCell: f }) {
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
function I_({
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
  CellComponent: u = B_,
  onRenderCell: l,
  style: _,
  ...g
}) {
  let h = null;
  s != null && s.length && (h = /* @__PURE__ */ V(rs, {
    className: "dtable-fixed-left",
    cols: s,
    width: c,
    row: e,
    CellComponent: u,
    onRenderCell: l
  }));
  let v = null;
  a != null && a.length && (v = /* @__PURE__ */ V(rs, {
    className: "dtable-flexable",
    cols: a,
    left: c - d,
    width: Math.max(f, p),
    row: e,
    CellComponent: u,
    onRenderCell: l
  }));
  let m = null;
  o != null && o.length && (m = /* @__PURE__ */ V(rs, {
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
function zg({ height: e, onRenderRow: t, ...n }) {
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
  }, /* @__PURE__ */ V(I_, {
    ...r
  }));
}
function Yg({
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
    return d && Object.assign(i, d), /* @__PURE__ */ V(I_, {
      ...i
    });
  }));
}
const wi = /* @__PURE__ */ new Map(), $i = [];
function U_(e, t) {
  const { name: n } = e;
  if (!(t != null && t.override) && wi.has(n))
    throw new Error(`DTable: Plugin with name ${n} already exists`);
  wi.set(n, e), (t == null ? void 0 : t.buildIn) && !$i.includes(n) && $i.push(n);
}
function er(e, t) {
  U_(e, t);
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
function F_(e) {
  return wi.delete(e);
}
function Vg(e) {
  if (typeof e == "string") {
    const t = wi.get(e);
    return t || console.warn(`DTable: Cannot found plugin "${e}"`), t;
  }
  if (typeof e == "function" && "plugin" in e)
    return e.plugin;
  if (typeof e == "object")
    return e;
  console.warn("DTable: Invalid plugin", e);
}
function z_(e, t, n) {
  return t.forEach((r) => {
    var o;
    if (!r)
      return;
    const s = Vg(r);
    !s || n.has(s.name) || ((o = s.plugins) != null && o.length && z_(e, s.plugins, n), e.push(s), n.add(s.name));
  }), e;
}
function qg(e = [], t = !0) {
  return t && $i.length && e.unshift(...$i), e != null && e.length ? z_([], e, /* @__PURE__ */ new Set()) : [];
}
function gc() {
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
var _n, Hn, Pt, nt, Rt, ge, ze, rt, Wn, oo, io, gt, jn, Bn, Ci, Y_, Oi, V_, Mi, q_, Ai, G_, so, ws, Di, Ti, ao, lo, Ni, Li, Pi, X_, Ri, K_, Hi, J_;
class bs extends Mr {
  constructor(n) {
    var r;
    super(n);
    P(this, Ci);
    P(this, Oi);
    P(this, Mi);
    P(this, Ai);
    P(this, so);
    P(this, Pi);
    P(this, Ri);
    P(this, Hi);
    A(this, "ref", Ng());
    P(this, _n, 0);
    P(this, Hn, void 0);
    P(this, Pt, !1);
    P(this, nt, void 0);
    P(this, Rt, void 0);
    P(this, ge, []);
    P(this, ze, void 0);
    P(this, rt, /* @__PURE__ */ new Map());
    P(this, Wn, {});
    P(this, oo, void 0);
    P(this, io, []);
    A(this, "updateLayout", () => {
      w(this, _n) && cancelAnimationFrame(w(this, _n)), H(this, _n, requestAnimationFrame(() => {
        H(this, ze, void 0), this.forceUpdate(), H(this, _n, 0);
      }));
    });
    P(this, gt, (n, r) => {
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
    P(this, jn, (n) => {
      w(this, gt).call(this, n, `window_${n.type}`);
    });
    P(this, Bn, (n) => {
      w(this, gt).call(this, n, `document_${n.type}`);
    });
    P(this, Di, (n, r) => {
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
    P(this, Ti, (n, r) => (this.options.onRenderHeaderRow && (n.props = this.options.onRenderHeaderRow.call(this, n, r)), w(this, ge).forEach((s) => {
      s.onRenderHeaderRow && (n.props = s.onRenderHeaderRow.call(this, n, r));
    }), n.props));
    P(this, ao, (n, r, s) => {
      const { row: o, col: a } = r;
      n[0] = this.getCellValue(o, a);
      const c = o.id === "HEADER" ? "onRenderHeaderCell" : "onRenderCell";
      return a.setting[c] && (n = a.setting[c].call(this, n, r, s)), this.options[c] && (n = this.options[c].call(this, n, r, s)), w(this, ge).forEach((f) => {
        f[c] && (n = f[c].call(this, n, r, s));
      }), n;
    });
    P(this, lo, (n, r) => {
      r === "horz" ? this.scroll({ scrollLeft: n }) : this.scroll({ scrollTop: n });
    });
    P(this, Ni, (n) => {
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
    P(this, Li, (n) => {
      const r = n.key.toLowerCase();
      if (["pageup", "pagedown", "home", "end"].includes(r))
        return !this.scroll({ to: r.replace("page", "") });
    });
    H(this, Hn, (r = n.id) != null ? r : `dtable-${Wg(10)}`), this.state = { scrollTop: 0, scrollLeft: 0, renderCount: 0 }, H(this, Rt, Object.freeze(qg(n.plugins))), w(this, Rt).forEach((s) => {
      var f;
      const { methods: o, data: a, state: c } = s;
      o && Object.entries(o).forEach(([p, i]) => {
        typeof i == "function" && Object.assign(this, { [p]: i.bind(this) });
      }), a && Object.assign(w(this, Wn), a.call(this)), c && Object.assign(this.state, c.call(this)), (f = s.onCreate) == null || f.call(this, s);
    });
  }
  get options() {
    var n;
    return ((n = w(this, ze)) == null ? void 0 : n.options) || w(this, nt) || gc();
  }
  get plugins() {
    return w(this, ge);
  }
  get layout() {
    return w(this, ze);
  }
  get id() {
    return w(this, Hn);
  }
  get data() {
    return w(this, Wn);
  }
  get parent() {
    var n, r;
    return (r = this.props.parent) != null ? r : (n = this.ref.current) == null ? void 0 : n.parentElement;
  }
  componentWillReceiveProps() {
    H(this, nt, void 0);
  }
  componentDidMount() {
    if (w(this, Pt) ? this.forceUpdate() : ne(this, so, ws).call(this), w(this, ge).forEach((n) => {
      let { events: r } = n;
      !r || (typeof r == "function" && (r = r.call(this)), Object.entries(r).forEach(([s, o]) => {
        o && this.on(s, o);
      }));
    }), this.on("click", w(this, Ni)), this.on("keydown", w(this, Li)), this.options.responsive) {
      if (typeof ResizeObserver < "u") {
        const { parent: n } = this;
        if (n) {
          const r = new ResizeObserver(this.updateLayout);
          r.observe(n), H(this, oo, r);
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
    w(this, Pt) ? ne(this, so, ws).call(this) : w(this, ge).forEach((n) => {
      var r;
      (r = n.onUpdated) == null || r.call(this);
    });
  }
  componentWillUnmount() {
    var r;
    (r = w(this, oo)) == null || r.disconnect();
    const { current: n } = this.ref;
    if (n)
      for (const s of w(this, rt).keys())
        s.startsWith("window_") ? window.removeEventListener(s.replace("window_", ""), w(this, jn)) : s.startsWith("document_") ? document.removeEventListener(s.replace("document_", ""), w(this, Bn)) : n.removeEventListener(s, w(this, gt));
    w(this, ge).forEach((s) => {
      var o;
      (o = s.onUnmounted) == null || o.call(this);
    }), w(this, Rt).forEach((s) => {
      var o;
      (o = s.onDestory) == null || o.call(this);
    }), H(this, Wn, {}), w(this, rt).clear();
  }
  on(n, r, s) {
    var a;
    s && (n = `${s}_${n}`);
    const o = w(this, rt).get(n);
    o ? o.push(r) : (w(this, rt).set(n, [r]), n.startsWith("window_") ? window.addEventListener(n.replace("window_", ""), w(this, jn)) : n.startsWith("document_") ? document.addEventListener(n.replace("document_", ""), w(this, Bn)) : (a = this.ref.current) == null || a.addEventListener(n, w(this, gt)));
  }
  off(n, r, s) {
    var c;
    s && (n = `${s}_${n}`);
    const o = w(this, rt).get(n);
    if (!o)
      return;
    const a = o.indexOf(r);
    a >= 0 && o.splice(a, 1), o.length || (w(this, rt).delete(n), n.startsWith("window_") ? window.removeEventListener(n.replace("window_", ""), w(this, jn)) : n.startsWith("document_") ? document.removeEventListener(n.replace("document_", ""), w(this, Bn)) : (c = this.ref.current) == null || c.removeEventListener(n, w(this, gt)));
  }
  emitCustomEvent(n, r) {
    w(this, gt).call(this, r instanceof Event ? r : new CustomEvent(n, { detail: r }), n);
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
      H(this, ze, void 0);
    else if (s === "options") {
      if (H(this, nt, void 0), !w(this, ze))
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
    return (o = co(w(this, io), n, r, s, this.options.lang)) != null ? o : `{i18n:${n}}`;
  }
  render() {
    var l;
    const n = ne(this, Hi, J_).call(this), { className: r, rowHover: s, colHover: o, cellHover: a, bordered: c, striped: f, scrollbarHover: p } = this.options, i = { width: n == null ? void 0 : n.width, height: n == null ? void 0 : n.height }, d = ["dtable", r, {
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
      id: w(this, Hn),
      className: I(d),
      style: i,
      ref: this.ref,
      tabIndex: -1
    }, n && ne(this, Ci, Y_).call(this, n), n && ne(this, Oi, V_).call(this, n), n && ne(this, Mi, q_).call(this, n), n && ne(this, Ai, G_).call(this, n));
  }
}
_n = new WeakMap(), Hn = new WeakMap(), Pt = new WeakMap(), nt = new WeakMap(), Rt = new WeakMap(), ge = new WeakMap(), ze = new WeakMap(), rt = new WeakMap(), Wn = new WeakMap(), oo = new WeakMap(), io = new WeakMap(), gt = new WeakMap(), jn = new WeakMap(), Bn = new WeakMap(), Ci = new WeakSet(), Y_ = function(n) {
  const { header: r, colsInfo: s, headerHeight: o, scrollLeft: a } = n;
  if (!r)
    return null;
  if (r === !0)
    return /* @__PURE__ */ V(zg, {
      scrollLeft: a,
      height: o,
      onRenderCell: w(this, ao),
      onRenderRow: w(this, Ti),
      ...s
    });
  const c = Array.isArray(r) ? r : [r];
  return /* @__PURE__ */ V(ss, {
    className: "dtable-header",
    style: { height: o },
    renders: c,
    generateArgs: [n],
    generatorThis: this
  });
}, Oi = new WeakSet(), V_ = function(n) {
  const { headerHeight: r, rowsHeight: s, visibleRows: o, rowHeight: a, colsInfo: c, scrollLeft: f, scrollTop: p } = n;
  return /* @__PURE__ */ V(Yg, {
    top: r,
    height: s,
    rows: o,
    rowHeight: a,
    scrollLeft: f,
    scrollTop: p,
    onRenderCell: w(this, ao),
    onRenderRow: w(this, Di),
    ...c
  });
}, Mi = new WeakSet(), q_ = function(n) {
  const { footer: r } = n;
  if (!r)
    return null;
  const s = typeof r == "function" ? r.call(this, n) : Array.isArray(r) ? r : [r];
  return /* @__PURE__ */ V(ss, {
    className: "dtable-footer",
    style: { height: n.footerHeight, top: n.rowsHeight + n.headerHeight },
    renders: s,
    generateArgs: [n],
    generatorThis: this,
    generators: n.footerGenerators
  });
}, Ai = new WeakSet(), G_ = function(n) {
  const r = [], { scrollLeft: s, colsInfo: o, scrollTop: a, rowsHeight: c, rowsHeightTotal: f, footerHeight: p } = n, { scrollColsWidth: i, scrollWidth: d } = o, { scrollbarSize: u = 12, horzScrollbarPos: l } = this.options;
  return i > d && r.push(
    /* @__PURE__ */ V(vc, {
      key: "horz",
      type: "horz",
      scrollPos: s,
      scrollSize: i,
      clientSize: d,
      onScroll: w(this, lo),
      left: o.fixedLeftWidth,
      bottom: (l === "inside" ? 0 : -u) + p,
      size: u,
      wheelContainer: this.ref
    })
  ), f > c && r.push(
    /* @__PURE__ */ V(vc, {
      key: "vert",
      type: "vert",
      scrollPos: a,
      scrollSize: f,
      clientSize: c,
      onScroll: w(this, lo),
      right: 0,
      size: u,
      top: n.headerHeight,
      wheelContainer: this.ref
    })
  ), r.length ? r : null;
}, so = new WeakSet(), ws = function() {
  var n;
  H(this, Pt, !1), (n = this.options.afterRender) == null || n.call(this), w(this, ge).forEach((r) => {
    var s;
    return (s = r.afterRender) == null ? void 0 : s.call(this);
  });
}, Di = new WeakMap(), Ti = new WeakMap(), ao = new WeakMap(), lo = new WeakMap(), Ni = new WeakMap(), Li = new WeakMap(), Pi = new WeakSet(), X_ = function() {
  if (w(this, nt))
    return !1;
  const r = { ...gc(), ...w(this, Rt).reduce((s, o) => {
    const { defaultOptions: a } = o;
    return a && Object.assign(s, a), s;
  }, {}), ...this.props };
  return H(this, nt, r), H(this, ge, w(this, Rt).reduce((s, o) => {
    const { when: a, options: c } = o;
    return (!a || a(r)) && (s.push(o), c && Object.assign(r, typeof c == "function" ? c.call(this, r) : c)), s;
  }, [])), H(this, io, [this.options.i18n, ...this.plugins.map((s) => s.i18n)].filter(Boolean)), !0;
}, Ri = new WeakSet(), K_ = function() {
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
    var xt, We, je;
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
      ...Je
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
        ...Je
      },
      flex: q ? 0 : J === !0 ? 1 : typeof J == "number" ? J : 0,
      left: 0,
      width: mc(le, ae, be),
      realWidth: 0,
      visible: !0,
      index: u.length
    };
    n.forEach((St) => {
      var te, me;
      const Ze = (te = St.colTypes) == null ? void 0 : te[X];
      if (Ze) {
        const Be = typeof Ze == "function" ? Ze(ee) : Ze;
        Be && Object.assign(ee.setting, Be);
      }
      (me = St.onAddCol) == null || me.call(this, ee);
    }), ee.width = mc((xt = ee.setting.width) != null ? xt : ee.width, (We = ee.setting.minWidth) != null ? We : ae, (je = ee.setting.maxWidth) != null ? je : be), ee.realWidth = ee.realWidth || ee.width, q === "left" ? (ee.left = _, _ += ee.width, f.push(ee)) : q === "right" ? (ee.left = g, g += ee.width, p.push(ee)) : (ee.left = h, h += ee.width, i.push(ee)), ee.flex && l.push(ee), u.push(ee), d[ee.name] = ee;
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
      m = 0, H(this, Pt, !0);
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
      N = 0, H(this, Pt, !0);
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
  }), H(this, ze, G);
}, Hi = new WeakSet(), J_ = function() {
  (ne(this, Pi, X_).call(this) || !w(this, ze)) && ne(this, Ri, K_).call(this);
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
}, A(bs, "addPlugin", U_), A(bs, "removePlugin", F_);
function yc(e, t) {
  t !== void 0 ? e.data.hoverCol = t : t = e.data.hoverCol;
  const { current: n } = e.ref;
  if (!n)
    return;
  const r = "dtable-col-hover";
  n.querySelectorAll(`.${r}`).forEach((s) => s.classList.remove(r)), typeof t == "string" && t.length && n.querySelectorAll(`.dtable-cell[data-col="${t}"]`).forEach((s) => s.classList.add(r));
}
const Gg = {
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
      yc(this, r);
    },
    mouseleave() {
      yc(this, !1);
    }
  }
}, Xg = er(Gg, { buildIn: !0 });
function Kg(e, t) {
  var a, c;
  typeof e == "boolean" && (t = e, e = void 0);
  const n = this.state.checkedRows, r = {}, { canRowCheckable: s } = this.options, o = (f, p) => {
    s && !s.call(this, f) || !!n[f] === p || (p ? n[f] = !0 : delete n[f], r[f] = p);
  };
  if (e === void 0 ? (t === void 0 && (t = !Z_.call(this)), (a = this.layout) == null || a.allRows.forEach(({ id: f }) => {
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
function Jg(e) {
  var t;
  return (t = this.state.checkedRows[e]) != null ? t : !1;
}
function Z_() {
  var n, r;
  const e = this.getChecks().length, { canRowCheckable: t } = this.options;
  return t ? e === ((n = this.layout) == null ? void 0 : n.allRows.reduce((s, o) => s + (t.call(this, o.id) ? 1 : 0), 0)) : e === ((r = this.layout) == null ? void 0 : r.allRows.length);
}
function Zg() {
  return Object.keys(this.state.checkedRows);
}
const Qg = {
  name: "checkable",
  defaultOptions: { checkable: !0 },
  when: (e) => !!e.checkable,
  state() {
    return { checkedRows: {} };
  },
  methods: {
    toggleCheckRows: Kg,
    isRowChecked: Jg,
    isAllRowChecked: Z_,
    getChecks: Zg
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
}, ey = er(Qg);
var Q_ = /* @__PURE__ */ ((e) => (e.unknown = "", e.collapsed = "collapsed", e.expanded = "expanded", e.hidden = "hidden", e.normal = "normal", e))(Q_ || {});
function $s(e) {
  const t = this.data.nestedMap.get(e);
  if (!t || t.state !== "")
    return t != null ? t : { state: "normal", level: -1 };
  if (!t.parent && !t.children)
    return t.state = "normal", t;
  const n = this.state.collapsedRows, r = t.children && n && n[e];
  let s = !1, { parent: o } = t;
  for (; o; ) {
    const a = $s.call(this, o);
    if (a.state !== "expanded") {
      s = !0;
      break;
    }
    o = a.parent;
  }
  return t.state = s ? "hidden" : r ? "collapsed" : t.children ? "expanded" : "normal", t.level = t.parent ? $s.call(this, t.parent).level + 1 : 0, t;
}
function ty(e, t) {
  var s;
  let n = (s = this.state.collapsedRows) != null ? s : {};
  const { nestedMap: r } = this.data;
  if (e === "HEADER")
    if (t === void 0 && (t = !ep.call(this)), t) {
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
function ep() {
  const e = this.data.nestedMap.values();
  for (const t of e)
    if (t.state === "expanded")
      return !1;
  return !0;
}
function tp(e, t = 0, n, r = 0) {
  var s;
  n || (n = [...e.keys()]);
  for (const o of n) {
    const a = e.get(o);
    !a || (a.level === r && (a.order = t++), (s = a.children) != null && s.length && (t = tp(e, t, a.children, r + 1)));
  }
  return t;
}
function np(e, t, n, r) {
  const s = e.getNestedRowInfo(t);
  return !s || s.state === "" || !s.children || s.children.forEach((o) => {
    r[o] = n, np(e, o, n, r);
  }), s;
}
function rp(e, t, n, r, s) {
  var c;
  const o = e.getNestedRowInfo(t);
  if (!o || o.state === "")
    return;
  ((c = o.children) == null ? void 0 : c.every((f) => {
    const p = !!(r[f] !== void 0 ? r[f] : s[f]);
    return n === p;
  })) && (r[t] = n), o.parent && rp(e, o.parent, n, r, s);
}
const ny = {
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
        const a = np(this, s, o, r);
        a != null && a.parent && rp(this, a.parent, o, r, n);
      }), r;
    }
  },
  when: (e) => !!e.nested,
  data() {
    return { nestedMap: /* @__PURE__ */ new Map() };
  },
  methods: {
    toggleRow: ty,
    isAllCollapsed: ep,
    getNestedRowInfo: $s
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
    return e = e.filter((t) => this.getNestedRowInfo(t.id).state !== "hidden"), tp(this.data.nestedMap), e.sort((t, n) => {
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
}, ry = er(ny);
const oy = {
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
        return typeof r == "function" ? e[0] = s === "html" ? { html: r(o) } : r(o) : s === "datetime" ? e[0] = ms(o, r) : s === "html" ? e[0] = { html: Se(r, o) } : e[0] = Se(r, o), e;
      }
    }
  }
}, iy = er(oy, { buildIn: !0 }), sy = {
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
}, ay = er(sy, { buildIn: !0 }), ly = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  colHover: Xg,
  checkable: ey,
  NestedRowState: Q_,
  nested: ry,
  rich: iy,
  sortType: ay
}, Symbol.toStringTag, { value: "Module" }));
class or extends Ke {
}
A(or, "NAME", "dtable"), A(or, "Component", bs), A(or, "definePlugin", er), A(or, "removePlugin", F_), A(or, "plugins", ly);
var ot, ke;
class cy {
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
  e.target instanceof HTMLElement && (e.target.dataset.toggle === "tab" || e.target.getAttribute("data-tab")) && (e.preventDefault(), new cy(e.target).showTarget());
});
export {
  Na as ActionMenu,
  Pa as ActionMenuNested,
  dl as Avatar,
  hl as BtnGroup,
  Ia as Button,
  xe as ContextMenu,
  or as DTable,
  it as Datetimepicker,
  we as Dropdown,
  xs as EventBus,
  Ua as Menu,
  el as Messager,
  Qe as Modal,
  Ol as Nav,
  cy as NavTabs,
  Kl as Pager,
  sl as ProgressCircle,
  dt as TIME_DAY,
  Jl as Toolbar,
  st as Tooltip,
  mp as addI18nMap,
  py as browser,
  Xl as calculateTimestamp,
  _y as convertBytes,
  Ae as createDate,
  uy as formatBytes,
  ms as formatDate,
  yy as formatDateSpan,
  Se as formatString,
  hp as getLangCode,
  by as getTimeBeforeDesc,
  co as i18n,
  gy as isDBY,
  es as isObject,
  _o as isSameDay,
  km as isSameMonth,
  dy as isSameWeek,
  Gl as isSameYear,
  hy as isToday,
  my as isTomorrow,
  vy as isYesterday,
  is as mergeDeep,
  os as nativeEvents,
  vp as setLangCode,
  rd as store
};
