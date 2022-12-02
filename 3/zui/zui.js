var Lc = Object.defineProperty;
var Oc = (e, t, n) => t in e ? Lc(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var S = (e, t, n) => (Oc(e, typeof t != "symbol" ? t + "" : t, n), n), sr = (e, t, n) => {
  if (!t.has(e))
    throw TypeError("Cannot " + n);
};
var y = (e, t, n) => (sr(e, t, "read from private field"), n ? n.call(e) : t.get(e)), M = (e, t, n) => {
  if (t.has(e))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(e) : t.set(e, n);
}, N = (e, t, n, o) => (sr(e, t, "write to private field"), o ? o.call(e, n) : t.set(e, n), n);
var X = (e, t, n) => (sr(e, t, "access private method"), n);
var Yo, H, Wi, Ii, Vt, _s, so = {}, Ui = [], Dc = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function Ve(e, t) {
  for (var n in t)
    e[n] = t[n];
  return e;
}
function ji(e) {
  var t = e.parentNode;
  t && t.removeChild(e);
}
function Ko(e, t, n) {
  var o, i, r, l = {};
  for (r in t)
    r == "key" ? o = t[r] : r == "ref" ? i = t[r] : l[r] = t[r];
  if (arguments.length > 2 && (l.children = arguments.length > 3 ? Yo.call(arguments, 2) : n), typeof e == "function" && e.defaultProps != null)
    for (r in e.defaultProps)
      l[r] === void 0 && (l[r] = e.defaultProps[r]);
  return zn(e, l, o, i, null);
}
function zn(e, t, n, o, i) {
  var r = { type: e, props: t, key: n, ref: o, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: i == null ? ++Wi : i };
  return i == null && H.vnode != null && H.vnode(r), r;
}
function Hc() {
  return { current: null };
}
function Xo(e) {
  return e.children;
}
function Fn(e, t) {
  this.props = e, this.context = t;
}
function un(e, t) {
  if (t == null)
    return e.__ ? un(e.__, e.__.__k.indexOf(e) + 1) : null;
  for (var n; t < e.__k.length; t++)
    if ((n = e.__k[t]) != null && n.__e != null)
      return n.__e;
  return typeof e.type == "function" ? un(e) : null;
}
function Bi(e) {
  var t, n;
  if ((e = e.__) != null && e.__c != null) {
    for (e.__e = e.__c.base = null, t = 0; t < e.__k.length; t++)
      if ((n = e.__k[t]) != null && n.__e != null) {
        e.__e = e.__c.base = n.__e;
        break;
      }
    return Bi(e);
  }
}
function fs(e) {
  (!e.__d && (e.__d = !0) && Vt.push(e) && !io.__r++ || _s !== H.debounceRendering) && ((_s = H.debounceRendering) || setTimeout)(io);
}
function io() {
  for (var e; io.__r = Vt.length; )
    e = Vt.sort(function(t, n) {
      return t.__v.__b - n.__v.__b;
    }), Vt = [], e.some(function(t) {
      var n, o, i, r, l, c;
      t.__d && (l = (r = (n = t).__v).__e, (c = n.__P) && (o = [], (i = Ve({}, r)).__v = r.__v + 1, Cr(c, r, i, n.__n, c.ownerSVGElement !== void 0, r.__h != null ? [l] : null, o, l == null ? un(r) : l, r.__h), qi(o, r), r.__e != l && Bi(r)));
    });
}
function zi(e, t, n, o, i, r, l, c, _, h) {
  var s, p, f, a, u, m, d, v = o && o.__k || Ui, g = v.length;
  for (n.__k = [], s = 0; s < t.length; s++)
    if ((a = n.__k[s] = (a = t[s]) == null || typeof a == "boolean" ? null : typeof a == "string" || typeof a == "number" || typeof a == "bigint" ? zn(null, a, null, null, a) : Array.isArray(a) ? zn(Xo, { children: a }, null, null, null) : a.__b > 0 ? zn(a.type, a.props, a.key, a.ref ? a.ref : null, a.__v) : a) != null) {
      if (a.__ = n, a.__b = n.__b + 1, (f = v[s]) === null || f && a.key == f.key && a.type === f.type)
        v[s] = void 0;
      else
        for (p = 0; p < g; p++) {
          if ((f = v[p]) && a.key == f.key && a.type === f.type) {
            v[p] = void 0;
            break;
          }
          f = null;
        }
      Cr(e, a, f = f || so, i, r, l, c, _, h), u = a.__e, (p = a.ref) && f.ref != p && (d || (d = []), f.ref && d.push(f.ref, null, a), d.push(p, a.__c || u, a)), u != null ? (m == null && (m = u), typeof a.type == "function" && a.__k === f.__k ? a.__d = _ = Fi(a, _, e) : _ = Vi(e, a, f, v, u, _), typeof n.type == "function" && (n.__d = _)) : _ && f.__e == _ && _.parentNode != e && (_ = un(f));
    }
  for (n.__e = m, s = g; s--; )
    v[s] != null && Yi(v[s], v[s]);
  if (d)
    for (s = 0; s < d.length; s++)
      Gi(d[s], d[++s], d[++s]);
}
function Fi(e, t, n) {
  for (var o, i = e.__k, r = 0; i && r < i.length; r++)
    (o = i[r]) && (o.__ = e, t = typeof o.type == "function" ? Fi(o, t, n) : Vi(n, o, o, i, o.__e, t));
  return t;
}
function Vi(e, t, n, o, i, r) {
  var l, c, _;
  if (t.__d !== void 0)
    l = t.__d, t.__d = void 0;
  else if (n == null || i != r || i.parentNode == null)
    e:
      if (r == null || r.parentNode !== e)
        e.appendChild(i), l = null;
      else {
        for (c = r, _ = 0; (c = c.nextSibling) && _ < o.length; _ += 2)
          if (c == i)
            break e;
        e.insertBefore(i, r), l = r;
      }
  return l !== void 0 ? l : i.nextSibling;
}
function Wc(e, t, n, o, i) {
  var r;
  for (r in n)
    r === "children" || r === "key" || r in t || lo(e, r, null, n[r], o);
  for (r in t)
    i && typeof t[r] != "function" || r === "children" || r === "key" || r === "value" || r === "checked" || n[r] === t[r] || lo(e, r, t[r], n[r], o);
}
function us(e, t, n) {
  t[0] === "-" ? e.setProperty(t, n) : e[t] = n == null ? "" : typeof n != "number" || Dc.test(t) ? n : n + "px";
}
function lo(e, t, n, o, i) {
  var r;
  e:
    if (t === "style")
      if (typeof n == "string")
        e.style.cssText = n;
      else {
        if (typeof o == "string" && (e.style.cssText = o = ""), o)
          for (t in o)
            n && t in n || us(e.style, t, "");
        if (n)
          for (t in n)
            o && n[t] === o[t] || us(e.style, t, n[t]);
      }
    else if (t[0] === "o" && t[1] === "n")
      r = t !== (t = t.replace(/Capture$/, "")), t = t.toLowerCase() in e ? t.toLowerCase().slice(2) : t.slice(2), e.l || (e.l = {}), e.l[t + r] = n, n ? o || e.addEventListener(t, r ? ps : hs, r) : e.removeEventListener(t, r ? ps : hs, r);
    else if (t !== "dangerouslySetInnerHTML") {
      if (i)
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
function hs(e) {
  this.l[e.type + !1](H.event ? H.event(e) : e);
}
function ps(e) {
  this.l[e.type + !0](H.event ? H.event(e) : e);
}
function Cr(e, t, n, o, i, r, l, c, _) {
  var h, s, p, f, a, u, m, d, v, g, k, w, E, $, x, b = t.type;
  if (t.constructor !== void 0)
    return null;
  n.__h != null && (_ = n.__h, c = t.__e = n.__e, t.__h = null, r = [c]), (h = H.__b) && h(t);
  try {
    e:
      if (typeof b == "function") {
        if (d = t.props, v = (h = b.contextType) && o[h.__c], g = h ? v ? v.props.value : h.__ : o, n.__c ? m = (s = t.__c = n.__c).__ = s.__E : ("prototype" in b && b.prototype.render ? t.__c = s = new b(d, g) : (t.__c = s = new Fn(d, g), s.constructor = b, s.render = Uc), v && v.sub(s), s.props = d, s.state || (s.state = {}), s.context = g, s.__n = o, p = s.__d = !0, s.__h = [], s._sb = []), s.__s == null && (s.__s = s.state), b.getDerivedStateFromProps != null && (s.__s == s.state && (s.__s = Ve({}, s.__s)), Ve(s.__s, b.getDerivedStateFromProps(d, s.__s))), f = s.props, a = s.state, p)
          b.getDerivedStateFromProps == null && s.componentWillMount != null && s.componentWillMount(), s.componentDidMount != null && s.__h.push(s.componentDidMount);
        else {
          if (b.getDerivedStateFromProps == null && d !== f && s.componentWillReceiveProps != null && s.componentWillReceiveProps(d, g), !s.__e && s.shouldComponentUpdate != null && s.shouldComponentUpdate(d, s.__s, g) === !1 || t.__v === n.__v) {
            for (s.props = d, s.state = s.__s, t.__v !== n.__v && (s.__d = !1), s.__v = t, t.__e = n.__e, t.__k = n.__k, t.__k.forEach(function(C) {
              C && (C.__ = t);
            }), k = 0; k < s._sb.length; k++)
              s.__h.push(s._sb[k]);
            s._sb = [], s.__h.length && l.push(s);
            break e;
          }
          s.componentWillUpdate != null && s.componentWillUpdate(d, s.__s, g), s.componentDidUpdate != null && s.__h.push(function() {
            s.componentDidUpdate(f, a, u);
          });
        }
        if (s.context = g, s.props = d, s.__v = t, s.__P = e, w = H.__r, E = 0, "prototype" in b && b.prototype.render) {
          for (s.state = s.__s, s.__d = !1, w && w(t), h = s.render(s.props, s.state, s.context), $ = 0; $ < s._sb.length; $++)
            s.__h.push(s._sb[$]);
          s._sb = [];
        } else
          do
            s.__d = !1, w && w(t), h = s.render(s.props, s.state, s.context), s.state = s.__s;
          while (s.__d && ++E < 25);
        s.state = s.__s, s.getChildContext != null && (o = Ve(Ve({}, o), s.getChildContext())), p || s.getSnapshotBeforeUpdate == null || (u = s.getSnapshotBeforeUpdate(f, a)), x = h != null && h.type === Xo && h.key == null ? h.props.children : h, zi(e, Array.isArray(x) ? x : [x], t, n, o, i, r, l, c, _), s.base = t.__e, t.__h = null, s.__h.length && l.push(s), m && (s.__E = s.__ = null), s.__e = !1;
      } else
        r == null && t.__v === n.__v ? (t.__k = n.__k, t.__e = n.__e) : t.__e = Ic(n.__e, t, n, o, i, r, l, _);
    (h = H.diffed) && h(t);
  } catch (C) {
    t.__v = null, (_ || r != null) && (t.__e = c, t.__h = !!_, r[r.indexOf(c)] = null), H.__e(C, t, n);
  }
}
function qi(e, t) {
  H.__c && H.__c(t, e), e.some(function(n) {
    try {
      e = n.__h, n.__h = [], e.some(function(o) {
        o.call(n);
      });
    } catch (o) {
      H.__e(o, n.__v);
    }
  });
}
function Ic(e, t, n, o, i, r, l, c) {
  var _, h, s, p = n.props, f = t.props, a = t.type, u = 0;
  if (a === "svg" && (i = !0), r != null) {
    for (; u < r.length; u++)
      if ((_ = r[u]) && "setAttribute" in _ == !!a && (a ? _.localName === a : _.nodeType === 3)) {
        e = _, r[u] = null;
        break;
      }
  }
  if (e == null) {
    if (a === null)
      return document.createTextNode(f);
    e = i ? document.createElementNS("http://www.w3.org/2000/svg", a) : document.createElement(a, f.is && f), r = null, c = !1;
  }
  if (a === null)
    p === f || c && e.data === f || (e.data = f);
  else {
    if (r = r && Yo.call(e.childNodes), h = (p = n.props || so).dangerouslySetInnerHTML, s = f.dangerouslySetInnerHTML, !c) {
      if (r != null)
        for (p = {}, u = 0; u < e.attributes.length; u++)
          p[e.attributes[u].name] = e.attributes[u].value;
      (s || h) && (s && (h && s.__html == h.__html || s.__html === e.innerHTML) || (e.innerHTML = s && s.__html || ""));
    }
    if (Wc(e, f, p, i, c), s)
      t.__k = [];
    else if (u = t.props.children, zi(e, Array.isArray(u) ? u : [u], t, n, o, i && a !== "foreignObject", r, l, r ? r[0] : n.__k && un(n, 0), c), r != null)
      for (u = r.length; u--; )
        r[u] != null && ji(r[u]);
    c || ("value" in f && (u = f.value) !== void 0 && (u !== e.value || a === "progress" && !u || a === "option" && u !== p.value) && lo(e, "value", u, p.value, !1), "checked" in f && (u = f.checked) !== void 0 && u !== e.checked && lo(e, "checked", u, p.checked, !1));
  }
  return e;
}
function Gi(e, t, n) {
  try {
    typeof e == "function" ? e(t) : e.current = t;
  } catch (o) {
    H.__e(o, n);
  }
}
function Yi(e, t, n) {
  var o, i;
  if (H.unmount && H.unmount(e), (o = e.ref) && (o.current && o.current !== e.__e || Gi(o, null, t)), (o = e.__c) != null) {
    if (o.componentWillUnmount)
      try {
        o.componentWillUnmount();
      } catch (r) {
        H.__e(r, t);
      }
    o.base = o.__P = null, e.__c = void 0;
  }
  if (o = e.__k)
    for (i = 0; i < o.length; i++)
      o[i] && Yi(o[i], t, n || typeof e.type != "function");
  n || e.__e == null || ji(e.__e), e.__ = e.__e = e.__d = void 0;
}
function Uc(e, t, n) {
  return this.constructor(e, n);
}
function jc(e, t, n) {
  var o, i, r;
  H.__ && H.__(e, t), i = (o = typeof n == "function") ? null : n && n.__k || t.__k, r = [], Cr(t, e = (!o && n || t).__k = Ko(Xo, null, [e]), i || so, so, t.ownerSVGElement !== void 0, !o && n ? [n] : i ? null : t.firstChild ? Yo.call(t.childNodes) : null, r, !o && n ? n : i ? i.__e : t.firstChild, o), qi(r, e);
}
Yo = Ui.slice, H = { __e: function(e, t, n, o) {
  for (var i, r, l; t = t.__; )
    if ((i = t.__c) && !i.__)
      try {
        if ((r = i.constructor) && r.getDerivedStateFromError != null && (i.setState(r.getDerivedStateFromError(e)), l = i.__d), i.componentDidCatch != null && (i.componentDidCatch(e, o || {}), l = i.__d), l)
          return i.__E = i;
      } catch (c) {
        e = c;
      }
  throw e;
} }, Wi = 0, Ii = function(e) {
  return e != null && e.constructor === void 0;
}, Fn.prototype.setState = function(e, t) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = Ve({}, this.state), typeof e == "function" && (e = e(Ve({}, n), this.props)), e && Ve(n, e), e != null && this.__v && (t && this._sb.push(t), fs(this));
}, Fn.prototype.forceUpdate = function(e) {
  this.__v && (this.__e = !0, e && this.__h.push(e), fs(this));
}, Fn.prototype.render = Xo, Vt = [], io.__r = 0;
var Ae;
class Bc {
  constructor(t = "") {
    M(this, Ae, void 0);
    typeof t == "object" ? N(this, Ae, t) : N(this, Ae, document.appendChild(document.createComment(t)));
  }
  on(t, n, o) {
    y(this, Ae).addEventListener(t, n, o);
  }
  once(t, n, o) {
    y(this, Ae).addEventListener(t, n, { once: !0, ...o });
  }
  off(t, n, o) {
    y(this, Ae).removeEventListener(t, n, o);
  }
  emit(t) {
    return y(this, Ae).dispatchEvent(t), t;
  }
}
Ae = new WeakMap();
const _r = /* @__PURE__ */ new Set([
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
class Er extends Bc {
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
    return typeof t == "string" && (_r.has(t) ? (t = new Event(t), Object.assign(t, { detail: n })) : t = new CustomEvent(t, { detail: n })), super.emit(Er.createEvent(t, n));
  }
  static createEvent(t, n) {
    return typeof t == "string" && (_r.has(t) ? (t = new Event(t), Object.assign(t, { detail: n })) : t = new CustomEvent(t, { detail: n })), t;
  }
}
var Ne, En, ct, Ft;
class ds extends Er {
  constructor(n = "", o) {
    super(n);
    M(this, ct);
    M(this, Ne, /* @__PURE__ */ new Map());
    M(this, En, void 0);
    N(this, En, o == null ? void 0 : o.customEventSuffix);
  }
  on(n, o, i) {
    n = X(this, ct, Ft).call(this, n), super.on(n, o, i), y(this, Ne).set(o, [n, i]);
  }
  off(n, o, i) {
    n = X(this, ct, Ft).call(this, n), super.off(n, o, i), y(this, Ne).delete(o);
  }
  once(n, o, i) {
    n = X(this, ct, Ft).call(this, n);
    const r = (l) => {
      o(l), y(this, Ne).delete(r);
    };
    super.once(n, r, i), y(this, Ne).set(r, [n, i]);
  }
  emit(n, o) {
    return typeof n == "string" && (n = X(this, ct, Ft).call(this, n)), super.emit(n, o);
  }
  offAll() {
    Array.from(y(this, Ne).entries()).forEach(([n, [o, i]]) => {
      super.off(o, n, i);
    }), y(this, Ne).clear();
  }
}
Ne = new WeakMap(), En = new WeakMap(), ct = new WeakSet(), Ft = function(n) {
  const o = y(this, En);
  return _r.has(n) || typeof o != "string" || n.endsWith(o) ? n : `${n}${o}`;
};
function zc(e, t) {
  if (e == null)
    return [e, void 0];
  typeof t == "string" && (t = t.split("."));
  const n = t.join(".");
  let o = e;
  const i = [o];
  for (; typeof o == "object" && o !== null && t.length; ) {
    let r = t.shift(), l;
    const c = r.indexOf("[");
    if (c > 0 && c < r.length - 1 && r.endsWith("]") && (l = r.substring(c + 1, r.length - 1), r = r.substring(0, c)), o = o[r], i.push(o), l !== void 0)
      if (typeof o == "object" && o !== null)
        o instanceof Map ? o = o.get(l) : o = o[l], i.push(o);
      else
        throw new Error(`Cannot access property "${r}[${l}]", the full path is "${n}".`);
  }
  if (t.length)
    throw new Error(`Cannot access property with rest path "${t.join(".")}", the full path is "${n}".`);
  return i;
}
function Fc(e, t, n) {
  const o = zc(e, t), i = o[o.length - 1];
  return i === void 0 ? n : i;
}
function ir(e) {
  return !!e && typeof e == "object" && !Array.isArray(e);
}
function fr(e, ...t) {
  if (!t.length)
    return e;
  const n = t.shift();
  if (ir(e) && ir(n))
    for (const o in n)
      ir(n[o]) ? (e[o] || Object.assign(e, { [o]: {} }), fr(e[o], n[o])) : Object.assign(e, { [o]: n[o] });
  return fr(e, ...t);
}
function ce(e, ...t) {
  var n;
  if (t.length === 0)
    return e;
  if (t.length === 1 && typeof t[0] == "object" && t[0]) {
    const o = t[0];
    return Object.keys(o).forEach((i) => {
      var l;
      const r = (l = o[i]) != null ? l : 0;
      e = e.replace(new RegExp(`\\{${i}\\}`, "g"), `${r}`);
    }), e;
  }
  for (let o = 0; o < t.length; o++) {
    const i = (n = t[o]) != null ? n : "";
    e = e.replace(new RegExp(`\\{${o}\\}`, "g"), `${i}`);
  }
  return e;
}
var Sr = /* @__PURE__ */ ((e) => (e[e.B = 1] = "B", e[e.KB = 1024] = "KB", e[e.MB = 1048576] = "MB", e[e.GB = 1073741824] = "GB", e[e.TB = 1099511627776] = "TB", e))(Sr || {});
function xh(e, t = 2, n = "") {
  return Number.isNaN(e) ? "?KB" : (n || (e < 1024 ? n = "B" : e < 1048576 ? n = "KB" : e < 1073741824 ? n = "MB" : e < 1099511627776 ? n = "GB" : n = "TB"), (e / Sr[n]).toFixed(t) + n);
}
const Ch = (e) => {
  const t = /^[0-9]*(B|KB|MB|GB|TB)$/;
  e = e.toUpperCase();
  const n = e.match(t);
  if (!n)
    return 0;
  const o = n[1];
  return e = e.replace(o, ""), Number.parseInt(e, 10) * Sr[o];
};
var Di, Hi;
let Mr = (Hi = (Di = document.documentElement.getAttribute("lang")) == null ? void 0 : Di.toLowerCase()) != null ? Hi : "zh_cn", Ie;
function Vc() {
  return Mr;
}
function qc(e) {
  Mr = e.toLowerCase();
}
function Gc(e, t) {
  Ie || (Ie = {}), typeof e == "string" && (e = { [e]: t != null ? t : {} }), fr(Ie, e);
}
function Dn(e, t, n, o, i, r) {
  Array.isArray(e) ? Ie && e.unshift(Ie) : e = Ie ? [Ie, e] : [e], typeof n == "string" && (r = i, i = o, o = n, n = void 0);
  const l = i || Mr;
  let c;
  for (const _ of e) {
    if (!_)
      continue;
    const h = _[l];
    if (!h)
      continue;
    const s = r && _ === Ie ? `${r}.${t}` : t;
    if (c = Fc(h, s), c !== void 0)
      break;
  }
  return c === void 0 ? o : n ? ce(c, ...Array.isArray(n) ? n : [n]) : c;
}
Dn.addLang = Gc;
Dn.getCode = Vc;
Dn.setCode = qc;
function Yc(e) {
  return Object.fromEntries(Object.entries(e).map(([t, n]) => {
    if (typeof n == "string")
      try {
        n = JSON.parse(n);
      } catch {
      }
    return [t, n];
  }));
}
var Re, mt, oe;
class qt {
  constructor(t, n) {
    M(this, Re, void 0);
    M(this, mt, void 0);
    M(this, oe, void 0);
    var o;
    t = typeof t == "string" ? document.querySelector(t) : t, this.constructor.EVENTS && N(this, oe, new ds(t, { customEventSuffix: `.${this.constructor.KEY}` })), N(this, Re, { ...this.constructor.DEFAULT, ...t instanceof HTMLElement ? Yc(t.dataset) : null, ...n }), this.constructor.all.set(t, this), N(this, mt, t), this.init(), (o = y(this, oe)) == null || o.emit("inited", this);
  }
  get options() {
    return y(this, Re);
  }
  get element() {
    return y(this, mt);
  }
  get events() {
    return y(this, oe);
  }
  init() {
  }
  setOptions(t) {
    return t && Object.assign(y(this, Re), t), y(this, Re);
  }
  render(t) {
    this.setOptions(t);
  }
  destroy() {
    this.constructor.all.delete(y(this, mt)), y(this, oe) && (y(this, oe).emit("destroyed", this), y(this, oe).offAll());
  }
  on(t, n, o) {
    var i;
    (i = y(this, oe)) == null || i.on(t, n, o);
  }
  once(t, n, o) {
    var i;
    (i = y(this, oe)) == null || i.once(t, n, o);
  }
  off(t, n, o) {
    var i;
    (i = y(this, oe)) == null || i.off(t, n, o);
  }
  emit(t, n) {
    var l;
    let o = ds.createEvent(t, n);
    const i = `on${o.type.replace(`.${this.constructor.KEY}`, "")}`, r = y(this, Re)[i];
    return r && r(o) === !1 && (o.preventDefault(), o.stopPropagation()), o = (l = y(this, oe)) == null ? void 0 : l.emit(o), o;
  }
  i18n(t, n, o) {
    var i;
    return (i = Dn(y(this, Re).i18n, t, n, o, this.options.lang, this.constructor.NAME)) != null ? i : `{i18n:${t}}`;
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
Re = new WeakMap(), mt = new WeakMap(), oe = new WeakMap(), S(qt, "EVENTS", !1), S(qt, "DEFAULT", {}), S(qt, "allComponents", /* @__PURE__ */ new Map());
class xe extends qt {
  constructor() {
    super(...arguments);
    S(this, "ref", Hc());
  }
  get $() {
    return this.ref.current;
  }
  init() {
    requestAnimationFrame(() => this.render());
  }
  render(n) {
    const o = this.constructor.Component;
    jc(/* @__PURE__ */ Ko(o, {
      ref: this.ref,
      ...this.setOptions(n)
    }), this.element);
  }
}
var Tr, U, Ki, Xi, Gt, vs, Ji = {}, Zi = [], Kc = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function qe(e, t) {
  for (var n in t)
    e[n] = t[n];
  return e;
}
function Qi(e) {
  var t = e.parentNode;
  t && t.removeChild(e);
}
function te(e, t, n) {
  var o, i, r, l = {};
  for (r in t)
    r == "key" ? o = t[r] : r == "ref" ? i = t[r] : l[r] = t[r];
  if (arguments.length > 2 && (l.children = arguments.length > 3 ? Tr.call(arguments, 2) : n), typeof e == "function" && e.defaultProps != null)
    for (r in e.defaultProps)
      l[r] === void 0 && (l[r] = e.defaultProps[r]);
  return Vn(e, l, o, i, null);
}
function Vn(e, t, n, o, i) {
  var r = { type: e, props: t, key: n, ref: o, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: i == null ? ++Ki : i };
  return i == null && U.vnode != null && U.vnode(r), r;
}
function Xc() {
  return { current: null };
}
function Ar(e) {
  return e.children;
}
function Yt(e, t) {
  this.props = e, this.context = t;
}
function hn(e, t) {
  if (t == null)
    return e.__ ? hn(e.__, e.__.__k.indexOf(e) + 1) : null;
  for (var n; t < e.__k.length; t++)
    if ((n = e.__k[t]) != null && n.__e != null)
      return n.__e;
  return typeof e.type == "function" ? hn(e) : null;
}
function el(e) {
  var t, n;
  if ((e = e.__) != null && e.__c != null) {
    for (e.__e = e.__c.base = null, t = 0; t < e.__k.length; t++)
      if ((n = e.__k[t]) != null && n.__e != null) {
        e.__e = e.__c.base = n.__e;
        break;
      }
    return el(e);
  }
}
function gs(e) {
  (!e.__d && (e.__d = !0) && Gt.push(e) && !ao.__r++ || vs !== U.debounceRendering) && ((vs = U.debounceRendering) || setTimeout)(ao);
}
function ao() {
  for (var e; ao.__r = Gt.length; )
    e = Gt.sort(function(t, n) {
      return t.__v.__b - n.__v.__b;
    }), Gt = [], e.some(function(t) {
      var n, o, i, r, l, c;
      t.__d && (l = (r = (n = t).__v).__e, (c = n.__P) && (o = [], (i = qe({}, r)).__v = r.__v + 1, rl(c, r, i, n.__n, c.ownerSVGElement !== void 0, r.__h != null ? [l] : null, o, l == null ? hn(r) : l, r.__h), Zc(o, r), r.__e != l && el(r)));
    });
}
function tl(e, t, n, o, i, r, l, c, _, h) {
  var s, p, f, a, u, m, d, v = o && o.__k || Zi, g = v.length;
  for (n.__k = [], s = 0; s < t.length; s++)
    if ((a = n.__k[s] = (a = t[s]) == null || typeof a == "boolean" ? null : typeof a == "string" || typeof a == "number" || typeof a == "bigint" ? Vn(null, a, null, null, a) : Array.isArray(a) ? Vn(Ar, { children: a }, null, null, null) : a.__b > 0 ? Vn(a.type, a.props, a.key, a.ref ? a.ref : null, a.__v) : a) != null) {
      if (a.__ = n, a.__b = n.__b + 1, (f = v[s]) === null || f && a.key == f.key && a.type === f.type)
        v[s] = void 0;
      else
        for (p = 0; p < g; p++) {
          if ((f = v[p]) && a.key == f.key && a.type === f.type) {
            v[p] = void 0;
            break;
          }
          f = null;
        }
      rl(e, a, f = f || Ji, i, r, l, c, _, h), u = a.__e, (p = a.ref) && f.ref != p && (d || (d = []), f.ref && d.push(f.ref, null, a), d.push(p, a.__c || u, a)), u != null ? (m == null && (m = u), typeof a.type == "function" && a.__k === f.__k ? a.__d = _ = nl(a, _, e) : _ = ol(e, a, f, v, u, _), typeof n.type == "function" && (n.__d = _)) : _ && f.__e == _ && _.parentNode != e && (_ = hn(f));
    }
  for (n.__e = m, s = g; s--; )
    v[s] != null && il(v[s], v[s]);
  if (d)
    for (s = 0; s < d.length; s++)
      sl(d[s], d[++s], d[++s]);
}
function nl(e, t, n) {
  for (var o, i = e.__k, r = 0; i && r < i.length; r++)
    (o = i[r]) && (o.__ = e, t = typeof o.type == "function" ? nl(o, t, n) : ol(n, o, o, i, o.__e, t));
  return t;
}
function ol(e, t, n, o, i, r) {
  var l, c, _;
  if (t.__d !== void 0)
    l = t.__d, t.__d = void 0;
  else if (n == null || i != r || i.parentNode == null)
    e:
      if (r == null || r.parentNode !== e)
        e.appendChild(i), l = null;
      else {
        for (c = r, _ = 0; (c = c.nextSibling) && _ < o.length; _ += 2)
          if (c == i)
            break e;
        e.insertBefore(i, r), l = r;
      }
  return l !== void 0 ? l : i.nextSibling;
}
function Jc(e, t, n, o, i) {
  var r;
  for (r in n)
    r === "children" || r === "key" || r in t || co(e, r, null, n[r], o);
  for (r in t)
    i && typeof t[r] != "function" || r === "children" || r === "key" || r === "value" || r === "checked" || n[r] === t[r] || co(e, r, t[r], n[r], o);
}
function ms(e, t, n) {
  t[0] === "-" ? e.setProperty(t, n) : e[t] = n == null ? "" : typeof n != "number" || Kc.test(t) ? n : n + "px";
}
function co(e, t, n, o, i) {
  var r;
  e:
    if (t === "style")
      if (typeof n == "string")
        e.style.cssText = n;
      else {
        if (typeof o == "string" && (e.style.cssText = o = ""), o)
          for (t in o)
            n && t in n || ms(e.style, t, "");
        if (n)
          for (t in n)
            o && n[t] === o[t] || ms(e.style, t, n[t]);
      }
    else if (t[0] === "o" && t[1] === "n")
      r = t !== (t = t.replace(/Capture$/, "")), t = t.toLowerCase() in e ? t.toLowerCase().slice(2) : t.slice(2), e.l || (e.l = {}), e.l[t + r] = n, n ? o || e.addEventListener(t, r ? bs : ys, r) : e.removeEventListener(t, r ? bs : ys, r);
    else if (t !== "dangerouslySetInnerHTML") {
      if (i)
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
function ys(e) {
  this.l[e.type + !1](U.event ? U.event(e) : e);
}
function bs(e) {
  this.l[e.type + !0](U.event ? U.event(e) : e);
}
function rl(e, t, n, o, i, r, l, c, _) {
  var h, s, p, f, a, u, m, d, v, g, k, w, E, $, x, b = t.type;
  if (t.constructor !== void 0)
    return null;
  n.__h != null && (_ = n.__h, c = t.__e = n.__e, t.__h = null, r = [c]), (h = U.__b) && h(t);
  try {
    e:
      if (typeof b == "function") {
        if (d = t.props, v = (h = b.contextType) && o[h.__c], g = h ? v ? v.props.value : h.__ : o, n.__c ? m = (s = t.__c = n.__c).__ = s.__E : ("prototype" in b && b.prototype.render ? t.__c = s = new b(d, g) : (t.__c = s = new Yt(d, g), s.constructor = b, s.render = e_), v && v.sub(s), s.props = d, s.state || (s.state = {}), s.context = g, s.__n = o, p = s.__d = !0, s.__h = [], s._sb = []), s.__s == null && (s.__s = s.state), b.getDerivedStateFromProps != null && (s.__s == s.state && (s.__s = qe({}, s.__s)), qe(s.__s, b.getDerivedStateFromProps(d, s.__s))), f = s.props, a = s.state, p)
          b.getDerivedStateFromProps == null && s.componentWillMount != null && s.componentWillMount(), s.componentDidMount != null && s.__h.push(s.componentDidMount);
        else {
          if (b.getDerivedStateFromProps == null && d !== f && s.componentWillReceiveProps != null && s.componentWillReceiveProps(d, g), !s.__e && s.shouldComponentUpdate != null && s.shouldComponentUpdate(d, s.__s, g) === !1 || t.__v === n.__v) {
            for (s.props = d, s.state = s.__s, t.__v !== n.__v && (s.__d = !1), s.__v = t, t.__e = n.__e, t.__k = n.__k, t.__k.forEach(function(C) {
              C && (C.__ = t);
            }), k = 0; k < s._sb.length; k++)
              s.__h.push(s._sb[k]);
            s._sb = [], s.__h.length && l.push(s);
            break e;
          }
          s.componentWillUpdate != null && s.componentWillUpdate(d, s.__s, g), s.componentDidUpdate != null && s.__h.push(function() {
            s.componentDidUpdate(f, a, u);
          });
        }
        if (s.context = g, s.props = d, s.__v = t, s.__P = e, w = U.__r, E = 0, "prototype" in b && b.prototype.render) {
          for (s.state = s.__s, s.__d = !1, w && w(t), h = s.render(s.props, s.state, s.context), $ = 0; $ < s._sb.length; $++)
            s.__h.push(s._sb[$]);
          s._sb = [];
        } else
          do
            s.__d = !1, w && w(t), h = s.render(s.props, s.state, s.context), s.state = s.__s;
          while (s.__d && ++E < 25);
        s.state = s.__s, s.getChildContext != null && (o = qe(qe({}, o), s.getChildContext())), p || s.getSnapshotBeforeUpdate == null || (u = s.getSnapshotBeforeUpdate(f, a)), x = h != null && h.type === Ar && h.key == null ? h.props.children : h, tl(e, Array.isArray(x) ? x : [x], t, n, o, i, r, l, c, _), s.base = t.__e, t.__h = null, s.__h.length && l.push(s), m && (s.__E = s.__ = null), s.__e = !1;
      } else
        r == null && t.__v === n.__v ? (t.__k = n.__k, t.__e = n.__e) : t.__e = Qc(n.__e, t, n, o, i, r, l, _);
    (h = U.diffed) && h(t);
  } catch (C) {
    t.__v = null, (_ || r != null) && (t.__e = c, t.__h = !!_, r[r.indexOf(c)] = null), U.__e(C, t, n);
  }
}
function Zc(e, t) {
  U.__c && U.__c(t, e), e.some(function(n) {
    try {
      e = n.__h, n.__h = [], e.some(function(o) {
        o.call(n);
      });
    } catch (o) {
      U.__e(o, n.__v);
    }
  });
}
function Qc(e, t, n, o, i, r, l, c) {
  var _, h, s, p = n.props, f = t.props, a = t.type, u = 0;
  if (a === "svg" && (i = !0), r != null) {
    for (; u < r.length; u++)
      if ((_ = r[u]) && "setAttribute" in _ == !!a && (a ? _.localName === a : _.nodeType === 3)) {
        e = _, r[u] = null;
        break;
      }
  }
  if (e == null) {
    if (a === null)
      return document.createTextNode(f);
    e = i ? document.createElementNS("http://www.w3.org/2000/svg", a) : document.createElement(a, f.is && f), r = null, c = !1;
  }
  if (a === null)
    p === f || c && e.data === f || (e.data = f);
  else {
    if (r = r && Tr.call(e.childNodes), h = (p = n.props || Ji).dangerouslySetInnerHTML, s = f.dangerouslySetInnerHTML, !c) {
      if (r != null)
        for (p = {}, u = 0; u < e.attributes.length; u++)
          p[e.attributes[u].name] = e.attributes[u].value;
      (s || h) && (s && (h && s.__html == h.__html || s.__html === e.innerHTML) || (e.innerHTML = s && s.__html || ""));
    }
    if (Jc(e, f, p, i, c), s)
      t.__k = [];
    else if (u = t.props.children, tl(e, Array.isArray(u) ? u : [u], t, n, o, i && a !== "foreignObject", r, l, r ? r[0] : n.__k && hn(n, 0), c), r != null)
      for (u = r.length; u--; )
        r[u] != null && Qi(r[u]);
    c || ("value" in f && (u = f.value) !== void 0 && (u !== e.value || a === "progress" && !u || a === "option" && u !== p.value) && co(e, "value", u, p.value, !1), "checked" in f && (u = f.checked) !== void 0 && u !== e.checked && co(e, "checked", u, p.checked, !1));
  }
  return e;
}
function sl(e, t, n) {
  try {
    typeof e == "function" ? e(t) : e.current = t;
  } catch (o) {
    U.__e(o, n);
  }
}
function il(e, t, n) {
  var o, i;
  if (U.unmount && U.unmount(e), (o = e.ref) && (o.current && o.current !== e.__e || sl(o, null, t)), (o = e.__c) != null) {
    if (o.componentWillUnmount)
      try {
        o.componentWillUnmount();
      } catch (r) {
        U.__e(r, t);
      }
    o.base = o.__P = null, e.__c = void 0;
  }
  if (o = e.__k)
    for (i = 0; i < o.length; i++)
      o[i] && il(o[i], t, n || typeof e.type != "function");
  n || e.__e == null || Qi(e.__e), e.__ = e.__e = e.__d = void 0;
}
function e_(e, t, n) {
  return this.constructor(e, n);
}
Tr = Zi.slice, U = { __e: function(e, t, n, o) {
  for (var i, r, l; t = t.__; )
    if ((i = t.__c) && !i.__)
      try {
        if ((r = i.constructor) && r.getDerivedStateFromError != null && (i.setState(r.getDerivedStateFromError(e)), l = i.__d), i.componentDidCatch != null && (i.componentDidCatch(e, o || {}), l = i.__d), l)
          return i.__E = i;
      } catch (c) {
        e = c;
      }
  throw e;
} }, Ki = 0, Xi = function(e) {
  return e != null && e.constructor === void 0;
}, Yt.prototype.setState = function(e, t) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = qe({}, this.state), typeof e == "function" && (e = e(qe({}, n), this.props)), e && qe(n, e), e != null && this.__v && (t && this._sb.push(t), gs(this));
}, Yt.prototype.forceUpdate = function(e) {
  this.__v && (this.__e = !0, e && this.__h.push(e), gs(this));
}, Yt.prototype.render = Ar, Gt = [], ao.__r = 0;
const P = (...e) => {
  const t = e.map((n) => Array.isArray(n) ? P(...n) : typeof n == "function" ? P(n()) : n !== null && typeof n == "object" ? Object.keys(n).filter((o) => {
    const i = n[o];
    return typeof i == "function" ? !!i() : !!i;
  }).join(" ") : n).filter((n) => typeof n == "string" && n.length);
  return t.length ? t.join(" ") : void 0;
};
function t_({
  component: e = "div",
  className: t,
  children: n,
  style: o,
  attrs: i
}) {
  return te(e, {
    className: P(t),
    style: o,
    ...i
  }, n);
}
function ll({
  component: e = "a",
  className: t,
  children: n,
  attrs: o,
  url: i,
  disabled: r,
  active: l,
  icon: c,
  text: _,
  target: h,
  trailingIcon: s,
  hint: p,
  style: f,
  onClick: a
}) {
  const u = [
    typeof c == "string" ? /* @__PURE__ */ te("i", {
      class: `icon ${c}`
    }) : c,
    /* @__PURE__ */ te("span", {
      className: "text"
    }, _),
    typeof n == "function" ? n() : n,
    typeof s == "string" ? /* @__PURE__ */ te("i", {
      class: `icon ${s}`
    }) : s
  ];
  return te(e, {
    className: P(t, { disabled: r, active: l }),
    title: p,
    [e === "a" ? "href" : "data-url"]: r ? null : i,
    [e === "a" ? "target" : "data-target"]: h,
    style: f,
    onClick: r ? function() {
      return !1;
    } : a,
    ...o
  }, ...u);
}
function n_({
  component: e = "div",
  className: t,
  text: n,
  attrs: o,
  children: i,
  style: r,
  onClick: l
}) {
  return te(e, {
    className: P(t),
    style: r,
    onClick: l,
    ...o
  }, n, typeof i == "function" ? i() : i);
}
function o_({
  component: e = "div",
  className: t,
  style: n,
  space: o,
  flex: i,
  attrs: r,
  onClick: l,
  children: c
}) {
  return te(e, {
    className: P(t),
    style: { width: o, height: o, flex: i, ...n },
    onClick: l,
    ...r
  }, c);
}
function r_(e) {
  const {
    tag: t,
    className: n,
    style: o,
    renders: i,
    generateArgs: r = [],
    generatorThis: l,
    generators: c,
    onGenerate: _,
    onRenderItem: h,
    ...s
  } = e, p = [n], f = { ...o }, a = [], u = [];
  return i.forEach((m) => {
    var v;
    const d = [];
    typeof m == "string" && c && c[m] && (m = c[m]), typeof m == "function" ? _ ? d.push(..._.call(l, m, a, ...r)) : d.push(...(v = m.call(l, a, ...r)) != null ? v : []) : d.push(m), d.forEach((g) => {
      var k;
      g != null && (typeof g == "object" && !Ii(g) && ("html" in g || "__html" in g || "className" in g || "style" in g || "attrs" in g || "children" in g) ? g.html ? a.push(
        /* @__PURE__ */ Ko("div", {
          className: P(g.className),
          style: g.style,
          dangerouslySetInnerHTML: { __html: g.html },
          ...(k = g.attrs) != null ? k : {}
        })
      ) : g.__html ? u.push(g.__html) : (g.style && Object.assign(f, g.style), g.className && p.push(g.className), g.children && a.push(g.children), g.attrs && Object.assign(s, g.attrs)) : a.push(g));
    });
  }), u.length && Object.assign(s, { dangerouslySetInnerHTML: { __html: u } }), [{
    className: P(p),
    style: f,
    ...s
  }, a];
}
function ur({
  tag: e = "div",
  ...t
}) {
  const [n, o] = r_(t);
  return Ko(e, n, ...o);
}
function s_(e) {
  return /* @__PURE__ */ te(ur, {
    ...e
  });
}
function al({
  component: e = "div",
  className: t,
  children: n,
  style: o,
  attrs: i
}) {
  return te(e, {
    className: P(t),
    style: o,
    ...i
  }, n);
}
const Lo = class extends Yt {
  constructor() {
    super(...arguments);
    S(this, "ref", Xc());
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
    return r && Object.assign(c, r[o.type || "item"]), (l || o.onClick) && (c.onClick = this.handleItemClick.bind(this, c, i, o.onClick)), c.className = P(c.className), c;
  }
  renderItem(n, o, i) {
    const r = this.getItemRenderProps(n, o, i), { itemRender: l } = n;
    if (l) {
      if (typeof l == "object") {
        const d = l[o.type || "item"];
        if (d)
          return /* @__PURE__ */ te(d, {
            ...r
          });
      } else if (typeof l == "function") {
        const d = l.call(this, r, te);
        if (Xi(d))
          return d;
        typeof d == "object" && Object.assign(r, d);
      }
    }
    const { type: c = "item", component: _, key: h = i, rootAttrs: s, rootClass: p, rootStyle: f, rootChildren: a, ...u } = r, m = !_ || typeof _ == "string" ? this.constructor.ItemComponents && this.constructor.ItemComponents[c] || Lo.ItemComponents[c] : _;
    return Object.assign(u, {
      type: c,
      component: typeof _ == "string" ? _ : void 0
    }), this.renderTypedItem(m, {
      className: P(p),
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
    return /* @__PURE__ */ te("li", {
      className: P(`${this.name}-${i.type}`, l),
      key: c,
      ..._
    }, /* @__PURE__ */ te(n, {
      ...i
    }), typeof r == "function" ? r() : r);
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
      beforeRender: p,
      afterRender: f,
      beforeDestroy: a,
      ...u
    } = n, m = this.constructor.ROOT_TAG;
    return /* @__PURE__ */ te(m, {
      class: P(this.name, l),
      ...u,
      ref: this.ref
    }, c && c.map(this.renderItem.bind(this, n)), _);
  }
};
let Le = Lo;
S(Le, "ItemComponents", {
  divider: t_,
  item: ll,
  heading: n_,
  space: o_,
  custom: s_,
  basic: al
}), S(Le, "ROOT_TAG", "menu"), S(Le, "NAME", "action-menu");
class ws extends xe {
}
S(ws, "NAME", "actionmenu"), S(ws, "Component", Le);
function ks({
  ...e
}) {
  return /* @__PURE__ */ te(ll, {
    ...e
  });
}
var Sn, ge, yt;
class Nr extends Le {
  constructor(n) {
    var o;
    super(n);
    M(this, Sn, /* @__PURE__ */ new Set());
    M(this, ge, void 0);
    M(this, yt, (n, o, i) => {
      this.toggleNestedMenu(n, o), i.preventDefault();
    });
    N(this, ge, n.nestedShow === void 0), y(this, ge) && (this.state = { nestedShow: (o = n.defaultNestedShow) != null ? o : {} });
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
    return /* @__PURE__ */ te(i, {
      items: o,
      name: this.props.name,
      nestedShow: y(this, ge) ? this.state.nestedShow : this.props.nestedShow,
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
  renderToggleIcon(n, o) {
  }
  getItemRenderProps(n, o, i) {
    var h;
    const r = super.getItemRenderProps(n, o, i);
    if (!this.isNestedItem(r))
      return r;
    const l = (h = r.key) != null ? h : i;
    y(this, Sn).add(l);
    const c = this.isNestedMenuShow(l);
    if (c && (r.rootChildren = [
      r.rootChildren,
      this.renderNestedMenu(o)
    ], r.component = ks), this.nestedTrigger === "hover")
      r.rootAttrs = {
        ...r.rootAttrs,
        onMouseEnter: y(this, yt).bind(this, l, !0),
        onMouseLeave: y(this, yt).bind(this, l, !1)
      };
    else if (this.nestedTrigger === "click") {
      const { onClick: s } = r;
      r.onClick = (p) => {
        y(this, yt).call(this, l, void 0, p), s == null || s(p);
      };
    }
    const _ = this.renderToggleIcon(c, r);
    return _ && (r.children = [r.children, _]), r.rootClass = [r.rootClass, "has-nested-menu", c ? "show" : ""], r;
  }
  isNestedMenuShow(n) {
    const o = y(this, ge) ? this.state.nestedShow : this.props.nestedShow;
    return o && typeof o == "object" ? o[n] : !!o;
  }
  toggleNestedMenu(n, o) {
    const { controlledMenu: i } = this.props;
    if (i)
      return i.toggleNestedMenu(n, o);
    if (!y(this, ge))
      return !1;
    let { nestedShow: r = {} } = this.state;
    if (typeof r == "boolean" && (r === !0 ? r = [...y(this, Sn).values()].reduce((l, c) => (l[c] = !0, l), {}) : r = {}), o === void 0)
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
    !y(this, ge) || this.setState({ nestedShow: !0 });
  }
  hideAllNestedMenu() {
    !y(this, ge) || this.setState({ nestedShow: !1 });
  }
}
Sn = new WeakMap(), ge = new WeakMap(), yt = new WeakMap(), S(Nr, "ItemComponents", {
  item: ks
});
class $s extends xe {
}
S($s, "NAME", "actionmenunested"), S($s, "Component", Nr);
var cl, hr, _l, i_ = [];
function l_(e, t, n) {
  var o, i, r, l = {};
  for (r in t)
    r == "key" ? o = t[r] : r == "ref" ? i = t[r] : l[r] = t[r];
  if (arguments.length > 2 && (l.children = arguments.length > 3 ? cl.call(arguments, 2) : n), typeof e == "function" && e.defaultProps != null)
    for (r in e.defaultProps)
      l[r] === void 0 && (l[r] = e.defaultProps[r]);
  return a_(e, l, o, i, null);
}
function a_(e, t, n, o, i) {
  var r = { type: e, props: t, key: n, ref: o, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: i == null ? ++_l : i };
  return i == null && hr.vnode != null && hr.vnode(r), r;
}
cl = i_.slice, hr = { __e: function(e, t, n, o) {
  for (var i, r, l; t = t.__; )
    if ((i = t.__c) && !i.__)
      try {
        if ((r = i.constructor) && r.getDerivedStateFromError != null && (i.setState(r.getDerivedStateFromError(e)), l = i.__d), i.componentDidCatch != null && (i.componentDidCatch(e, o || {}), l = i.__d), l)
          return i.__E = i;
      } catch (c) {
        e = c;
      }
  throw e;
} }, _l = 0;
class Rr extends Nr {
  get nestedTrigger() {
    return this.props.nestedTrigger || "click";
  }
  get menuName() {
    return "menu-nested";
  }
  beforeRender() {
    const t = super.beforeRender();
    let { hasIcons: n } = t;
    return n === void 0 && (n = t.items.some((o) => o.icon)), t.className = P(t.className, this.menuName, {
      "has-icons": n,
      "has-nested-items": t.items.some((o) => this.isNestedItem(o))
    }), t;
  }
  renderToggleIcon(t) {
    return /* @__PURE__ */ l_("span", {
      class: `${this.name}-toggle-icon caret-${t ? "down" : "right"}`
    });
  }
}
S(Rr, "NAME", "menu");
class xs extends xe {
}
S(xs, "NAME", "menu"), S(xs, "Component", Rr);
var Pr, j, fl, Kt, Cs, ul = {}, hl = [], c_ = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function Ge(e, t) {
  for (var n in t)
    e[n] = t[n];
  return e;
}
function pl(e) {
  var t = e.parentNode;
  t && t.removeChild(e);
}
function jn(e, t, n) {
  var o, i, r, l = {};
  for (r in t)
    r == "key" ? o = t[r] : r == "ref" ? i = t[r] : l[r] = t[r];
  if (arguments.length > 2 && (l.children = arguments.length > 3 ? Pr.call(arguments, 2) : n), typeof e == "function" && e.defaultProps != null)
    for (r in e.defaultProps)
      l[r] === void 0 && (l[r] = e.defaultProps[r]);
  return qn(e, l, o, i, null);
}
function qn(e, t, n, o, i) {
  var r = { type: e, props: t, key: n, ref: o, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: i == null ? ++fl : i };
  return i == null && j.vnode != null && j.vnode(r), r;
}
function Lr(e) {
  return e.children;
}
function Xt(e, t) {
  this.props = e, this.context = t;
}
function pn(e, t) {
  if (t == null)
    return e.__ ? pn(e.__, e.__.__k.indexOf(e) + 1) : null;
  for (var n; t < e.__k.length; t++)
    if ((n = e.__k[t]) != null && n.__e != null)
      return n.__e;
  return typeof e.type == "function" ? pn(e) : null;
}
function dl(e) {
  var t, n;
  if ((e = e.__) != null && e.__c != null) {
    for (e.__e = e.__c.base = null, t = 0; t < e.__k.length; t++)
      if ((n = e.__k[t]) != null && n.__e != null) {
        e.__e = e.__c.base = n.__e;
        break;
      }
    return dl(e);
  }
}
function Es(e) {
  (!e.__d && (e.__d = !0) && Kt.push(e) && !_o.__r++ || Cs !== j.debounceRendering) && ((Cs = j.debounceRendering) || setTimeout)(_o);
}
function _o() {
  for (var e; _o.__r = Kt.length; )
    e = Kt.sort(function(t, n) {
      return t.__v.__b - n.__v.__b;
    }), Kt = [], e.some(function(t) {
      var n, o, i, r, l, c;
      t.__d && (l = (r = (n = t).__v).__e, (c = n.__P) && (o = [], (i = Ge({}, r)).__v = r.__v + 1, yl(c, r, i, n.__n, c.ownerSVGElement !== void 0, r.__h != null ? [l] : null, o, l == null ? pn(r) : l, r.__h), f_(o, r), r.__e != l && dl(r)));
    });
}
function vl(e, t, n, o, i, r, l, c, _, h) {
  var s, p, f, a, u, m, d, v = o && o.__k || hl, g = v.length;
  for (n.__k = [], s = 0; s < t.length; s++)
    if ((a = n.__k[s] = (a = t[s]) == null || typeof a == "boolean" ? null : typeof a == "string" || typeof a == "number" || typeof a == "bigint" ? qn(null, a, null, null, a) : Array.isArray(a) ? qn(Lr, { children: a }, null, null, null) : a.__b > 0 ? qn(a.type, a.props, a.key, a.ref ? a.ref : null, a.__v) : a) != null) {
      if (a.__ = n, a.__b = n.__b + 1, (f = v[s]) === null || f && a.key == f.key && a.type === f.type)
        v[s] = void 0;
      else
        for (p = 0; p < g; p++) {
          if ((f = v[p]) && a.key == f.key && a.type === f.type) {
            v[p] = void 0;
            break;
          }
          f = null;
        }
      yl(e, a, f = f || ul, i, r, l, c, _, h), u = a.__e, (p = a.ref) && f.ref != p && (d || (d = []), f.ref && d.push(f.ref, null, a), d.push(p, a.__c || u, a)), u != null ? (m == null && (m = u), typeof a.type == "function" && a.__k === f.__k ? a.__d = _ = gl(a, _, e) : _ = ml(e, a, f, v, u, _), typeof n.type == "function" && (n.__d = _)) : _ && f.__e == _ && _.parentNode != e && (_ = pn(f));
    }
  for (n.__e = m, s = g; s--; )
    v[s] != null && wl(v[s], v[s]);
  if (d)
    for (s = 0; s < d.length; s++)
      bl(d[s], d[++s], d[++s]);
}
function gl(e, t, n) {
  for (var o, i = e.__k, r = 0; i && r < i.length; r++)
    (o = i[r]) && (o.__ = e, t = typeof o.type == "function" ? gl(o, t, n) : ml(n, o, o, i, o.__e, t));
  return t;
}
function ml(e, t, n, o, i, r) {
  var l, c, _;
  if (t.__d !== void 0)
    l = t.__d, t.__d = void 0;
  else if (n == null || i != r || i.parentNode == null)
    e:
      if (r == null || r.parentNode !== e)
        e.appendChild(i), l = null;
      else {
        for (c = r, _ = 0; (c = c.nextSibling) && _ < o.length; _ += 2)
          if (c == i)
            break e;
        e.insertBefore(i, r), l = r;
      }
  return l !== void 0 ? l : i.nextSibling;
}
function __(e, t, n, o, i) {
  var r;
  for (r in n)
    r === "children" || r === "key" || r in t || fo(e, r, null, n[r], o);
  for (r in t)
    i && typeof t[r] != "function" || r === "children" || r === "key" || r === "value" || r === "checked" || n[r] === t[r] || fo(e, r, t[r], n[r], o);
}
function Ss(e, t, n) {
  t[0] === "-" ? e.setProperty(t, n) : e[t] = n == null ? "" : typeof n != "number" || c_.test(t) ? n : n + "px";
}
function fo(e, t, n, o, i) {
  var r;
  e:
    if (t === "style")
      if (typeof n == "string")
        e.style.cssText = n;
      else {
        if (typeof o == "string" && (e.style.cssText = o = ""), o)
          for (t in o)
            n && t in n || Ss(e.style, t, "");
        if (n)
          for (t in n)
            o && n[t] === o[t] || Ss(e.style, t, n[t]);
      }
    else if (t[0] === "o" && t[1] === "n")
      r = t !== (t = t.replace(/Capture$/, "")), t = t.toLowerCase() in e ? t.toLowerCase().slice(2) : t.slice(2), e.l || (e.l = {}), e.l[t + r] = n, n ? o || e.addEventListener(t, r ? Ts : Ms, r) : e.removeEventListener(t, r ? Ts : Ms, r);
    else if (t !== "dangerouslySetInnerHTML") {
      if (i)
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
function Ms(e) {
  this.l[e.type + !1](j.event ? j.event(e) : e);
}
function Ts(e) {
  this.l[e.type + !0](j.event ? j.event(e) : e);
}
function yl(e, t, n, o, i, r, l, c, _) {
  var h, s, p, f, a, u, m, d, v, g, k, w, E, $, x, b = t.type;
  if (t.constructor !== void 0)
    return null;
  n.__h != null && (_ = n.__h, c = t.__e = n.__e, t.__h = null, r = [c]), (h = j.__b) && h(t);
  try {
    e:
      if (typeof b == "function") {
        if (d = t.props, v = (h = b.contextType) && o[h.__c], g = h ? v ? v.props.value : h.__ : o, n.__c ? m = (s = t.__c = n.__c).__ = s.__E : ("prototype" in b && b.prototype.render ? t.__c = s = new b(d, g) : (t.__c = s = new Xt(d, g), s.constructor = b, s.render = h_), v && v.sub(s), s.props = d, s.state || (s.state = {}), s.context = g, s.__n = o, p = s.__d = !0, s.__h = [], s._sb = []), s.__s == null && (s.__s = s.state), b.getDerivedStateFromProps != null && (s.__s == s.state && (s.__s = Ge({}, s.__s)), Ge(s.__s, b.getDerivedStateFromProps(d, s.__s))), f = s.props, a = s.state, p)
          b.getDerivedStateFromProps == null && s.componentWillMount != null && s.componentWillMount(), s.componentDidMount != null && s.__h.push(s.componentDidMount);
        else {
          if (b.getDerivedStateFromProps == null && d !== f && s.componentWillReceiveProps != null && s.componentWillReceiveProps(d, g), !s.__e && s.shouldComponentUpdate != null && s.shouldComponentUpdate(d, s.__s, g) === !1 || t.__v === n.__v) {
            for (s.props = d, s.state = s.__s, t.__v !== n.__v && (s.__d = !1), s.__v = t, t.__e = n.__e, t.__k = n.__k, t.__k.forEach(function(C) {
              C && (C.__ = t);
            }), k = 0; k < s._sb.length; k++)
              s.__h.push(s._sb[k]);
            s._sb = [], s.__h.length && l.push(s);
            break e;
          }
          s.componentWillUpdate != null && s.componentWillUpdate(d, s.__s, g), s.componentDidUpdate != null && s.__h.push(function() {
            s.componentDidUpdate(f, a, u);
          });
        }
        if (s.context = g, s.props = d, s.__v = t, s.__P = e, w = j.__r, E = 0, "prototype" in b && b.prototype.render) {
          for (s.state = s.__s, s.__d = !1, w && w(t), h = s.render(s.props, s.state, s.context), $ = 0; $ < s._sb.length; $++)
            s.__h.push(s._sb[$]);
          s._sb = [];
        } else
          do
            s.__d = !1, w && w(t), h = s.render(s.props, s.state, s.context), s.state = s.__s;
          while (s.__d && ++E < 25);
        s.state = s.__s, s.getChildContext != null && (o = Ge(Ge({}, o), s.getChildContext())), p || s.getSnapshotBeforeUpdate == null || (u = s.getSnapshotBeforeUpdate(f, a)), x = h != null && h.type === Lr && h.key == null ? h.props.children : h, vl(e, Array.isArray(x) ? x : [x], t, n, o, i, r, l, c, _), s.base = t.__e, t.__h = null, s.__h.length && l.push(s), m && (s.__E = s.__ = null), s.__e = !1;
      } else
        r == null && t.__v === n.__v ? (t.__k = n.__k, t.__e = n.__e) : t.__e = u_(n.__e, t, n, o, i, r, l, _);
    (h = j.diffed) && h(t);
  } catch (C) {
    t.__v = null, (_ || r != null) && (t.__e = c, t.__h = !!_, r[r.indexOf(c)] = null), j.__e(C, t, n);
  }
}
function f_(e, t) {
  j.__c && j.__c(t, e), e.some(function(n) {
    try {
      e = n.__h, n.__h = [], e.some(function(o) {
        o.call(n);
      });
    } catch (o) {
      j.__e(o, n.__v);
    }
  });
}
function u_(e, t, n, o, i, r, l, c) {
  var _, h, s, p = n.props, f = t.props, a = t.type, u = 0;
  if (a === "svg" && (i = !0), r != null) {
    for (; u < r.length; u++)
      if ((_ = r[u]) && "setAttribute" in _ == !!a && (a ? _.localName === a : _.nodeType === 3)) {
        e = _, r[u] = null;
        break;
      }
  }
  if (e == null) {
    if (a === null)
      return document.createTextNode(f);
    e = i ? document.createElementNS("http://www.w3.org/2000/svg", a) : document.createElement(a, f.is && f), r = null, c = !1;
  }
  if (a === null)
    p === f || c && e.data === f || (e.data = f);
  else {
    if (r = r && Pr.call(e.childNodes), h = (p = n.props || ul).dangerouslySetInnerHTML, s = f.dangerouslySetInnerHTML, !c) {
      if (r != null)
        for (p = {}, u = 0; u < e.attributes.length; u++)
          p[e.attributes[u].name] = e.attributes[u].value;
      (s || h) && (s && (h && s.__html == h.__html || s.__html === e.innerHTML) || (e.innerHTML = s && s.__html || ""));
    }
    if (__(e, f, p, i, c), s)
      t.__k = [];
    else if (u = t.props.children, vl(e, Array.isArray(u) ? u : [u], t, n, o, i && a !== "foreignObject", r, l, r ? r[0] : n.__k && pn(n, 0), c), r != null)
      for (u = r.length; u--; )
        r[u] != null && pl(r[u]);
    c || ("value" in f && (u = f.value) !== void 0 && (u !== e.value || a === "progress" && !u || a === "option" && u !== p.value) && fo(e, "value", u, p.value, !1), "checked" in f && (u = f.checked) !== void 0 && u !== e.checked && fo(e, "checked", u, p.checked, !1));
  }
  return e;
}
function bl(e, t, n) {
  try {
    typeof e == "function" ? e(t) : e.current = t;
  } catch (o) {
    j.__e(o, n);
  }
}
function wl(e, t, n) {
  var o, i;
  if (j.unmount && j.unmount(e), (o = e.ref) && (o.current && o.current !== e.__e || bl(o, null, t)), (o = e.__c) != null) {
    if (o.componentWillUnmount)
      try {
        o.componentWillUnmount();
      } catch (r) {
        j.__e(r, t);
      }
    o.base = o.__P = null, e.__c = void 0;
  }
  if (o = e.__k)
    for (i = 0; i < o.length; i++)
      o[i] && wl(o[i], t, n || typeof e.type != "function");
  n || e.__e == null || pl(e.__e), e.__ = e.__e = e.__d = void 0;
}
function h_(e, t, n) {
  return this.constructor(e, n);
}
Pr = hl.slice, j = { __e: function(e, t, n, o) {
  for (var i, r, l; t = t.__; )
    if ((i = t.__c) && !i.__)
      try {
        if ((r = i.constructor) && r.getDerivedStateFromError != null && (i.setState(r.getDerivedStateFromError(e)), l = i.__d), i.componentDidCatch != null && (i.componentDidCatch(e, o || {}), l = i.__d), l)
          return i.__E = i;
      } catch (c) {
        e = c;
      }
  throw e;
} }, fl = 0, Xt.prototype.setState = function(e, t) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = Ge({}, this.state), typeof e == "function" && (e = e(Ge({}, n), this.props)), e && Ge(n, e), e != null && this.__v && (t && this._sb.push(t), Es(this));
}, Xt.prototype.forceUpdate = function(e) {
  this.__v && (this.__e = !0, e && this.__h.push(e), Es(this));
}, Xt.prototype.render = Lr, Kt = [], _o.__r = 0;
class pr extends Xt {
  render() {
    const { percent: t, circleSize: n, circleBorderSize: o, circleBgColor: i, circleColor: r } = this.props, l = (n - o) / 2, c = n / 2;
    return /* @__PURE__ */ jn("svg", {
      width: n,
      height: n,
      class: "progress-circle"
    }, /* @__PURE__ */ jn("circle", {
      cx: c,
      cy: c,
      r: l,
      stroke: i,
      "stroke-width": o
    }), /* @__PURE__ */ jn("circle", {
      cx: c,
      cy: c,
      r: l,
      stroke: r,
      "stroke-dasharray": Math.PI * l * 2,
      "stroke-dashoffset": Math.PI * l * 2 * (100 - t) / 100,
      "stroke-width": o
    }), /* @__PURE__ */ jn("text", {
      x: c,
      y: c + o / 4,
      "dominant-baseline": "middle",
      style: { fontSize: `${l}px` }
    }, Math.round(t)));
  }
}
S(pr, "NAME", "zui.progress-circle"), S(pr, "defaultProps", {
  circleSize: 24,
  circleBorderSize: 2,
  circleBgColor: "var(--progress-circle-bg)",
  circleColor: "var(--progress-circle-bar-color)"
});
class As extends xe {
}
S(As, "NAME", "table-sorter"), S(As, "Component", pr);
function p_(e) {
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
function d_(e) {
  document.readyState !== "loading" ? e() : document.addEventListener("DOMContentLoaded", e);
}
function v_(e, t) {
  const n = typeof e == "string" ? document.querySelector(e) : e;
  if (!n)
    return !1;
  const o = n.getBoundingClientRect(), i = window.innerHeight || document.documentElement.clientHeight, r = window.innerWidth || document.documentElement.clientWidth;
  if (t != null && t.fullyCheck)
    return o.left >= 0 && o.top >= 0 && o.left + o.width <= r && o.top + o.height <= i;
  const l = o.top <= i && o.top + o.height >= 0, c = o.left <= r && o.left + o.width >= 0;
  return l && c;
}
const Eh = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  selectText: p_,
  domReady: d_,
  isElementVisible: v_,
  classes: P
}, Symbol.toStringTag, { value: "Module" }));
let g_ = (e = 21) => crypto.getRandomValues(new Uint8Array(e)).reduce((t, n) => (n &= 63, n < 36 ? t += n.toString(36) : n < 62 ? t += (n - 26).toString(36).toUpperCase() : n > 62 ? t += "-" : t += "_", t), "");
var Mn, Ue, me, bt, wt, Gn;
const os = class {
  constructor(t, n = "local") {
    M(this, wt);
    M(this, Mn, void 0);
    M(this, Ue, void 0);
    M(this, me, void 0);
    M(this, bt, void 0);
    N(this, Mn, n), N(this, Ue, `ZUI_STORE:${t != null ? t : g_()}`), N(this, me, n === "local" ? localStorage : sessionStorage);
  }
  get type() {
    return y(this, Mn);
  }
  get session() {
    return this.type === "session" ? this : (y(this, bt) || N(this, bt, new os(y(this, Ue), "session")), y(this, bt));
  }
  get(t, n) {
    const o = y(this, me).getItem(X(this, wt, Gn).call(this, t));
    return typeof o == "string" ? JSON.parse(o) : o != null ? o : n;
  }
  set(t, n) {
    if (n == null)
      return this.remove(t);
    y(this, me).setItem(X(this, wt, Gn).call(this, t), JSON.stringify(n));
  }
  remove(t) {
    y(this, me).removeItem(X(this, wt, Gn).call(this, t));
  }
  each(t) {
    for (let n = 0; n < y(this, me).length; n++) {
      const o = y(this, me).key(n);
      if (o != null && o.startsWith(y(this, Ue))) {
        const i = y(this, me).getItem(o);
        typeof i == "string" && t(o.substring(y(this, Ue).length + 1), JSON.parse(i));
      }
    }
  }
  getAll() {
    const t = {};
    return this.each((n, o) => {
      t[n] = o;
    }), t;
  }
};
let uo = os;
Mn = new WeakMap(), Ue = new WeakMap(), me = new WeakMap(), bt = new WeakMap(), wt = new WeakSet(), Gn = function(t) {
  return `${y(this, Ue)}:${t}`;
};
const m_ = new uo("DEFAULT");
function y_(e, t = "local") {
  return new uo(e, t);
}
Object.assign(m_, { create: y_ });
var Or, B, kl, Jt, Ns, $l = {}, xl = [], b_ = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function Ye(e, t) {
  for (var n in t)
    e[n] = t[n];
  return e;
}
function Cl(e) {
  var t = e.parentNode;
  t && t.removeChild(e);
}
function lr(e, t, n) {
  var o, i, r, l = {};
  for (r in t)
    r == "key" ? o = t[r] : r == "ref" ? i = t[r] : l[r] = t[r];
  if (arguments.length > 2 && (l.children = arguments.length > 3 ? Or.call(arguments, 2) : n), typeof e == "function" && e.defaultProps != null)
    for (r in e.defaultProps)
      l[r] === void 0 && (l[r] = e.defaultProps[r]);
  return Yn(e, l, o, i, null);
}
function Yn(e, t, n, o, i) {
  var r = { type: e, props: t, key: n, ref: o, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: i == null ? ++kl : i };
  return i == null && B.vnode != null && B.vnode(r), r;
}
function Dr(e) {
  return e.children;
}
function Zt(e, t) {
  this.props = e, this.context = t;
}
function dn(e, t) {
  if (t == null)
    return e.__ ? dn(e.__, e.__.__k.indexOf(e) + 1) : null;
  for (var n; t < e.__k.length; t++)
    if ((n = e.__k[t]) != null && n.__e != null)
      return n.__e;
  return typeof e.type == "function" ? dn(e) : null;
}
function El(e) {
  var t, n;
  if ((e = e.__) != null && e.__c != null) {
    for (e.__e = e.__c.base = null, t = 0; t < e.__k.length; t++)
      if ((n = e.__k[t]) != null && n.__e != null) {
        e.__e = e.__c.base = n.__e;
        break;
      }
    return El(e);
  }
}
function Rs(e) {
  (!e.__d && (e.__d = !0) && Jt.push(e) && !ho.__r++ || Ns !== B.debounceRendering) && ((Ns = B.debounceRendering) || setTimeout)(ho);
}
function ho() {
  for (var e; ho.__r = Jt.length; )
    e = Jt.sort(function(t, n) {
      return t.__v.__b - n.__v.__b;
    }), Jt = [], e.some(function(t) {
      var n, o, i, r, l, c;
      t.__d && (l = (r = (n = t).__v).__e, (c = n.__P) && (o = [], (i = Ye({}, r)).__v = r.__v + 1, Al(c, r, i, n.__n, c.ownerSVGElement !== void 0, r.__h != null ? [l] : null, o, l == null ? dn(r) : l, r.__h), k_(o, r), r.__e != l && El(r)));
    });
}
function Sl(e, t, n, o, i, r, l, c, _, h) {
  var s, p, f, a, u, m, d, v = o && o.__k || xl, g = v.length;
  for (n.__k = [], s = 0; s < t.length; s++)
    if ((a = n.__k[s] = (a = t[s]) == null || typeof a == "boolean" ? null : typeof a == "string" || typeof a == "number" || typeof a == "bigint" ? Yn(null, a, null, null, a) : Array.isArray(a) ? Yn(Dr, { children: a }, null, null, null) : a.__b > 0 ? Yn(a.type, a.props, a.key, a.ref ? a.ref : null, a.__v) : a) != null) {
      if (a.__ = n, a.__b = n.__b + 1, (f = v[s]) === null || f && a.key == f.key && a.type === f.type)
        v[s] = void 0;
      else
        for (p = 0; p < g; p++) {
          if ((f = v[p]) && a.key == f.key && a.type === f.type) {
            v[p] = void 0;
            break;
          }
          f = null;
        }
      Al(e, a, f = f || $l, i, r, l, c, _, h), u = a.__e, (p = a.ref) && f.ref != p && (d || (d = []), f.ref && d.push(f.ref, null, a), d.push(p, a.__c || u, a)), u != null ? (m == null && (m = u), typeof a.type == "function" && a.__k === f.__k ? a.__d = _ = Ml(a, _, e) : _ = Tl(e, a, f, v, u, _), typeof n.type == "function" && (n.__d = _)) : _ && f.__e == _ && _.parentNode != e && (_ = dn(f));
    }
  for (n.__e = m, s = g; s--; )
    v[s] != null && Rl(v[s], v[s]);
  if (d)
    for (s = 0; s < d.length; s++)
      Nl(d[s], d[++s], d[++s]);
}
function Ml(e, t, n) {
  for (var o, i = e.__k, r = 0; i && r < i.length; r++)
    (o = i[r]) && (o.__ = e, t = typeof o.type == "function" ? Ml(o, t, n) : Tl(n, o, o, i, o.__e, t));
  return t;
}
function Tl(e, t, n, o, i, r) {
  var l, c, _;
  if (t.__d !== void 0)
    l = t.__d, t.__d = void 0;
  else if (n == null || i != r || i.parentNode == null)
    e:
      if (r == null || r.parentNode !== e)
        e.appendChild(i), l = null;
      else {
        for (c = r, _ = 0; (c = c.nextSibling) && _ < o.length; _ += 2)
          if (c == i)
            break e;
        e.insertBefore(i, r), l = r;
      }
  return l !== void 0 ? l : i.nextSibling;
}
function w_(e, t, n, o, i) {
  var r;
  for (r in n)
    r === "children" || r === "key" || r in t || po(e, r, null, n[r], o);
  for (r in t)
    i && typeof t[r] != "function" || r === "children" || r === "key" || r === "value" || r === "checked" || n[r] === t[r] || po(e, r, t[r], n[r], o);
}
function Ps(e, t, n) {
  t[0] === "-" ? e.setProperty(t, n) : e[t] = n == null ? "" : typeof n != "number" || b_.test(t) ? n : n + "px";
}
function po(e, t, n, o, i) {
  var r;
  e:
    if (t === "style")
      if (typeof n == "string")
        e.style.cssText = n;
      else {
        if (typeof o == "string" && (e.style.cssText = o = ""), o)
          for (t in o)
            n && t in n || Ps(e.style, t, "");
        if (n)
          for (t in n)
            o && n[t] === o[t] || Ps(e.style, t, n[t]);
      }
    else if (t[0] === "o" && t[1] === "n")
      r = t !== (t = t.replace(/Capture$/, "")), t = t.toLowerCase() in e ? t.toLowerCase().slice(2) : t.slice(2), e.l || (e.l = {}), e.l[t + r] = n, n ? o || e.addEventListener(t, r ? Os : Ls, r) : e.removeEventListener(t, r ? Os : Ls, r);
    else if (t !== "dangerouslySetInnerHTML") {
      if (i)
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
function Ls(e) {
  this.l[e.type + !1](B.event ? B.event(e) : e);
}
function Os(e) {
  this.l[e.type + !0](B.event ? B.event(e) : e);
}
function Al(e, t, n, o, i, r, l, c, _) {
  var h, s, p, f, a, u, m, d, v, g, k, w, E, $, x, b = t.type;
  if (t.constructor !== void 0)
    return null;
  n.__h != null && (_ = n.__h, c = t.__e = n.__e, t.__h = null, r = [c]), (h = B.__b) && h(t);
  try {
    e:
      if (typeof b == "function") {
        if (d = t.props, v = (h = b.contextType) && o[h.__c], g = h ? v ? v.props.value : h.__ : o, n.__c ? m = (s = t.__c = n.__c).__ = s.__E : ("prototype" in b && b.prototype.render ? t.__c = s = new b(d, g) : (t.__c = s = new Zt(d, g), s.constructor = b, s.render = x_), v && v.sub(s), s.props = d, s.state || (s.state = {}), s.context = g, s.__n = o, p = s.__d = !0, s.__h = [], s._sb = []), s.__s == null && (s.__s = s.state), b.getDerivedStateFromProps != null && (s.__s == s.state && (s.__s = Ye({}, s.__s)), Ye(s.__s, b.getDerivedStateFromProps(d, s.__s))), f = s.props, a = s.state, p)
          b.getDerivedStateFromProps == null && s.componentWillMount != null && s.componentWillMount(), s.componentDidMount != null && s.__h.push(s.componentDidMount);
        else {
          if (b.getDerivedStateFromProps == null && d !== f && s.componentWillReceiveProps != null && s.componentWillReceiveProps(d, g), !s.__e && s.shouldComponentUpdate != null && s.shouldComponentUpdate(d, s.__s, g) === !1 || t.__v === n.__v) {
            for (s.props = d, s.state = s.__s, t.__v !== n.__v && (s.__d = !1), s.__v = t, t.__e = n.__e, t.__k = n.__k, t.__k.forEach(function(C) {
              C && (C.__ = t);
            }), k = 0; k < s._sb.length; k++)
              s.__h.push(s._sb[k]);
            s._sb = [], s.__h.length && l.push(s);
            break e;
          }
          s.componentWillUpdate != null && s.componentWillUpdate(d, s.__s, g), s.componentDidUpdate != null && s.__h.push(function() {
            s.componentDidUpdate(f, a, u);
          });
        }
        if (s.context = g, s.props = d, s.__v = t, s.__P = e, w = B.__r, E = 0, "prototype" in b && b.prototype.render) {
          for (s.state = s.__s, s.__d = !1, w && w(t), h = s.render(s.props, s.state, s.context), $ = 0; $ < s._sb.length; $++)
            s.__h.push(s._sb[$]);
          s._sb = [];
        } else
          do
            s.__d = !1, w && w(t), h = s.render(s.props, s.state, s.context), s.state = s.__s;
          while (s.__d && ++E < 25);
        s.state = s.__s, s.getChildContext != null && (o = Ye(Ye({}, o), s.getChildContext())), p || s.getSnapshotBeforeUpdate == null || (u = s.getSnapshotBeforeUpdate(f, a)), x = h != null && h.type === Dr && h.key == null ? h.props.children : h, Sl(e, Array.isArray(x) ? x : [x], t, n, o, i, r, l, c, _), s.base = t.__e, t.__h = null, s.__h.length && l.push(s), m && (s.__E = s.__ = null), s.__e = !1;
      } else
        r == null && t.__v === n.__v ? (t.__k = n.__k, t.__e = n.__e) : t.__e = $_(n.__e, t, n, o, i, r, l, _);
    (h = B.diffed) && h(t);
  } catch (C) {
    t.__v = null, (_ || r != null) && (t.__e = c, t.__h = !!_, r[r.indexOf(c)] = null), B.__e(C, t, n);
  }
}
function k_(e, t) {
  B.__c && B.__c(t, e), e.some(function(n) {
    try {
      e = n.__h, n.__h = [], e.some(function(o) {
        o.call(n);
      });
    } catch (o) {
      B.__e(o, n.__v);
    }
  });
}
function $_(e, t, n, o, i, r, l, c) {
  var _, h, s, p = n.props, f = t.props, a = t.type, u = 0;
  if (a === "svg" && (i = !0), r != null) {
    for (; u < r.length; u++)
      if ((_ = r[u]) && "setAttribute" in _ == !!a && (a ? _.localName === a : _.nodeType === 3)) {
        e = _, r[u] = null;
        break;
      }
  }
  if (e == null) {
    if (a === null)
      return document.createTextNode(f);
    e = i ? document.createElementNS("http://www.w3.org/2000/svg", a) : document.createElement(a, f.is && f), r = null, c = !1;
  }
  if (a === null)
    p === f || c && e.data === f || (e.data = f);
  else {
    if (r = r && Or.call(e.childNodes), h = (p = n.props || $l).dangerouslySetInnerHTML, s = f.dangerouslySetInnerHTML, !c) {
      if (r != null)
        for (p = {}, u = 0; u < e.attributes.length; u++)
          p[e.attributes[u].name] = e.attributes[u].value;
      (s || h) && (s && (h && s.__html == h.__html || s.__html === e.innerHTML) || (e.innerHTML = s && s.__html || ""));
    }
    if (w_(e, f, p, i, c), s)
      t.__k = [];
    else if (u = t.props.children, Sl(e, Array.isArray(u) ? u : [u], t, n, o, i && a !== "foreignObject", r, l, r ? r[0] : n.__k && dn(n, 0), c), r != null)
      for (u = r.length; u--; )
        r[u] != null && Cl(r[u]);
    c || ("value" in f && (u = f.value) !== void 0 && (u !== e.value || a === "progress" && !u || a === "option" && u !== p.value) && po(e, "value", u, p.value, !1), "checked" in f && (u = f.checked) !== void 0 && u !== e.checked && po(e, "checked", u, p.checked, !1));
  }
  return e;
}
function Nl(e, t, n) {
  try {
    typeof e == "function" ? e(t) : e.current = t;
  } catch (o) {
    B.__e(o, n);
  }
}
function Rl(e, t, n) {
  var o, i;
  if (B.unmount && B.unmount(e), (o = e.ref) && (o.current && o.current !== e.__e || Nl(o, null, t)), (o = e.__c) != null) {
    if (o.componentWillUnmount)
      try {
        o.componentWillUnmount();
      } catch (r) {
        B.__e(r, t);
      }
    o.base = o.__P = null, e.__c = void 0;
  }
  if (o = e.__k)
    for (i = 0; i < o.length; i++)
      o[i] && Rl(o[i], t, n || typeof e.type != "function");
  n || e.__e == null || Cl(e.__e), e.__ = e.__e = e.__d = void 0;
}
function x_(e, t, n) {
  return this.constructor(e, n);
}
Or = xl.slice, B = { __e: function(e, t, n, o) {
  for (var i, r, l; t = t.__; )
    if ((i = t.__c) && !i.__)
      try {
        if ((r = i.constructor) && r.getDerivedStateFromError != null && (i.setState(r.getDerivedStateFromError(e)), l = i.__d), i.componentDidCatch != null && (i.componentDidCatch(e, o || {}), l = i.__d), l)
          return i.__E = i;
      } catch (c) {
        e = c;
      }
  throw e;
} }, kl = 0, Zt.prototype.setState = function(e, t) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = Ye({}, this.state), typeof e == "function" && (e = e(Ye({}, n), this.props)), e && Ye(n, e), e != null && this.__v && (t && this._sb.push(t), Rs(this));
}, Zt.prototype.forceUpdate = function(e) {
  this.__v && (this.__e = !0, e && this.__h.push(e), Rs(this));
}, Zt.prototype.render = Dr, Jt = [], ho.__r = 0;
function C_(e) {
  if (e.indexOf("#") === 0 && (e = e.slice(1)), e.length === 3 && (e = e[0] + e[0] + e[1] + e[1] + e[2] + e[2]), e.length !== 6)
    throw new Error(`Invalid HEX color "${e}".`);
  return [
    parseInt(e.slice(0, 2), 16),
    parseInt(e.slice(2, 4), 16),
    parseInt(e.slice(4, 6), 16)
  ];
}
function E_(e) {
  const [t, n, o] = typeof e == "string" ? C_(e) : e;
  return t * 0.299 + n * 0.587 + o * 0.114 > 186;
}
function Ds(e, t) {
  var n, o;
  return E_(e) ? (n = t == null ? void 0 : t.dark) != null ? n : "#333333" : (o = t == null ? void 0 : t.light) != null ? o : "#ffffff";
}
function Hs(e, t = 255) {
  return Math.min(Math.max(e, 0), t);
}
function S_(e, t, n) {
  e = e % 360 / 360, t = Hs(t), n = Hs(n);
  const o = n <= 0.5 ? n * (t + 1) : n + t - n * t, i = n * 2 - o, r = (l) => (l = l < 0 ? l + 1 : l > 1 ? l - 1 : l, l * 6 < 1 ? i + (o - i) * l * 6 : l * 2 < 1 ? o : l * 3 < 2 ? i + (o - i) * (2 / 3 - l) * 6 : i);
  return [
    r(e + 1 / 3) * 255,
    r(e) * 255,
    r(e - 1 / 3) * 255
  ];
}
function M_(e) {
  let t = 0;
  if (typeof e != "string" && (e = String(e)), e && e.length)
    for (let n = 0; n < e.length; ++n)
      t += (n + 1) * e.charCodeAt(n);
  return t;
}
function T_(e, t) {
  return /^[\u4e00-\u9fa5\s]+$/.test(e) ? e = e.length <= t ? e : e.substring(e.length - t) : /^[A-Za-z\d\s]+$/.test(e) ? e = e[0].toUpperCase() : e = e.length <= t ? e : e.substring(0, t), e;
}
class A_ extends Zt {
  render() {
    const {
      className: t,
      style: n,
      size: o = "",
      circle: i,
      rounded: r,
      background: l,
      foreColor: c,
      text: _,
      code: h,
      maxTextLength: s = 2,
      src: p,
      hueDistance: f = 43,
      saturation: a = 0.4,
      lightness: u = 0.6,
      children: m,
      ...d
    } = this.props, v = ["avatar", t], g = { ...n, background: l, color: c };
    let k = 32;
    o && (typeof o == "number" ? (g.width = `${o}px`, g.height = `${o}px`, g.fontSize = `${Math.max(12, Math.round(o / 2))}px`, k = o) : (v.push(`size-${o}`), k = { xs: 20, sm: 24, lg: 48, xl: 80 }[o])), i ? v.push("circle") : r && (typeof r == "number" ? g.borderRadius = `${r}px` : v.push(`rounded-${r}`));
    let w;
    if (p)
      v.push("has-img"), w = /* @__PURE__ */ lr("img", {
        className: "avatar-img",
        src: p,
        alt: _
      });
    else if (_ != null && _.length) {
      const E = T_(_, s);
      if (v.push("has-text", `has-text-${E.length}`), l)
        !c && l && (g.color = Ds(l));
      else {
        const x = h != null ? h : _, b = (typeof x == "number" ? x : M_(x)) * f % 360;
        if (g.background = `hsl(${b},${a * 100}%,${u * 100}%)`, !c) {
          const C = S_(b, a, u);
          g.color = Ds(C);
        }
      }
      let $;
      k && k < 14 * E.length && ($ = { transform: `scale(${k / (14 * E.length)})`, whiteSpace: "nowrap" }), w = /* @__PURE__ */ lr("div", {
        "data-actualSize": k,
        className: "avatar-text",
        style: $
      }, E);
    }
    return /* @__PURE__ */ lr("div", {
      className: P(v),
      style: g,
      ...d
    }, w, m);
  }
}
class Ws extends xe {
}
S(Ws, "NAME", "avatar"), S(Ws, "Component", A_);
var Hr, z, Pl, Ll, Qt, Is, Ol = {}, Dl = [], N_ = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function Ke(e, t) {
  for (var n in t)
    e[n] = t[n];
  return e;
}
function Hl(e) {
  var t = e.parentNode;
  t && t.removeChild(e);
}
function ar(e, t, n) {
  var o, i, r, l = {};
  for (r in t)
    r == "key" ? o = t[r] : r == "ref" ? i = t[r] : l[r] = t[r];
  if (arguments.length > 2 && (l.children = arguments.length > 3 ? Hr.call(arguments, 2) : n), typeof e == "function" && e.defaultProps != null)
    for (r in e.defaultProps)
      l[r] === void 0 && (l[r] = e.defaultProps[r]);
  return Kn(e, l, o, i, null);
}
function Kn(e, t, n, o, i) {
  var r = { type: e, props: t, key: n, ref: o, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: i == null ? ++Pl : i };
  return i == null && z.vnode != null && z.vnode(r), r;
}
function Wr(e) {
  return e.children;
}
function en(e, t) {
  this.props = e, this.context = t;
}
function vn(e, t) {
  if (t == null)
    return e.__ ? vn(e.__, e.__.__k.indexOf(e) + 1) : null;
  for (var n; t < e.__k.length; t++)
    if ((n = e.__k[t]) != null && n.__e != null)
      return n.__e;
  return typeof e.type == "function" ? vn(e) : null;
}
function Wl(e) {
  var t, n;
  if ((e = e.__) != null && e.__c != null) {
    for (e.__e = e.__c.base = null, t = 0; t < e.__k.length; t++)
      if ((n = e.__k[t]) != null && n.__e != null) {
        e.__e = e.__c.base = n.__e;
        break;
      }
    return Wl(e);
  }
}
function Us(e) {
  (!e.__d && (e.__d = !0) && Qt.push(e) && !vo.__r++ || Is !== z.debounceRendering) && ((Is = z.debounceRendering) || setTimeout)(vo);
}
function vo() {
  for (var e; vo.__r = Qt.length; )
    e = Qt.sort(function(t, n) {
      return t.__v.__b - n.__v.__b;
    }), Qt = [], e.some(function(t) {
      var n, o, i, r, l, c;
      t.__d && (l = (r = (n = t).__v).__e, (c = n.__P) && (o = [], (i = Ke({}, r)).__v = r.__v + 1, Bl(c, r, i, n.__n, c.ownerSVGElement !== void 0, r.__h != null ? [l] : null, o, l == null ? vn(r) : l, r.__h), P_(o, r), r.__e != l && Wl(r)));
    });
}
function Il(e, t, n, o, i, r, l, c, _, h) {
  var s, p, f, a, u, m, d, v = o && o.__k || Dl, g = v.length;
  for (n.__k = [], s = 0; s < t.length; s++)
    if ((a = n.__k[s] = (a = t[s]) == null || typeof a == "boolean" ? null : typeof a == "string" || typeof a == "number" || typeof a == "bigint" ? Kn(null, a, null, null, a) : Array.isArray(a) ? Kn(Wr, { children: a }, null, null, null) : a.__b > 0 ? Kn(a.type, a.props, a.key, a.ref ? a.ref : null, a.__v) : a) != null) {
      if (a.__ = n, a.__b = n.__b + 1, (f = v[s]) === null || f && a.key == f.key && a.type === f.type)
        v[s] = void 0;
      else
        for (p = 0; p < g; p++) {
          if ((f = v[p]) && a.key == f.key && a.type === f.type) {
            v[p] = void 0;
            break;
          }
          f = null;
        }
      Bl(e, a, f = f || Ol, i, r, l, c, _, h), u = a.__e, (p = a.ref) && f.ref != p && (d || (d = []), f.ref && d.push(f.ref, null, a), d.push(p, a.__c || u, a)), u != null ? (m == null && (m = u), typeof a.type == "function" && a.__k === f.__k ? a.__d = _ = Ul(a, _, e) : _ = jl(e, a, f, v, u, _), typeof n.type == "function" && (n.__d = _)) : _ && f.__e == _ && _.parentNode != e && (_ = vn(f));
    }
  for (n.__e = m, s = g; s--; )
    v[s] != null && Fl(v[s], v[s]);
  if (d)
    for (s = 0; s < d.length; s++)
      zl(d[s], d[++s], d[++s]);
}
function Ul(e, t, n) {
  for (var o, i = e.__k, r = 0; i && r < i.length; r++)
    (o = i[r]) && (o.__ = e, t = typeof o.type == "function" ? Ul(o, t, n) : jl(n, o, o, i, o.__e, t));
  return t;
}
function jl(e, t, n, o, i, r) {
  var l, c, _;
  if (t.__d !== void 0)
    l = t.__d, t.__d = void 0;
  else if (n == null || i != r || i.parentNode == null)
    e:
      if (r == null || r.parentNode !== e)
        e.appendChild(i), l = null;
      else {
        for (c = r, _ = 0; (c = c.nextSibling) && _ < o.length; _ += 2)
          if (c == i)
            break e;
        e.insertBefore(i, r), l = r;
      }
  return l !== void 0 ? l : i.nextSibling;
}
function R_(e, t, n, o, i) {
  var r;
  for (r in n)
    r === "children" || r === "key" || r in t || go(e, r, null, n[r], o);
  for (r in t)
    i && typeof t[r] != "function" || r === "children" || r === "key" || r === "value" || r === "checked" || n[r] === t[r] || go(e, r, t[r], n[r], o);
}
function js(e, t, n) {
  t[0] === "-" ? e.setProperty(t, n) : e[t] = n == null ? "" : typeof n != "number" || N_.test(t) ? n : n + "px";
}
function go(e, t, n, o, i) {
  var r;
  e:
    if (t === "style")
      if (typeof n == "string")
        e.style.cssText = n;
      else {
        if (typeof o == "string" && (e.style.cssText = o = ""), o)
          for (t in o)
            n && t in n || js(e.style, t, "");
        if (n)
          for (t in n)
            o && n[t] === o[t] || js(e.style, t, n[t]);
      }
    else if (t[0] === "o" && t[1] === "n")
      r = t !== (t = t.replace(/Capture$/, "")), t = t.toLowerCase() in e ? t.toLowerCase().slice(2) : t.slice(2), e.l || (e.l = {}), e.l[t + r] = n, n ? o || e.addEventListener(t, r ? zs : Bs, r) : e.removeEventListener(t, r ? zs : Bs, r);
    else if (t !== "dangerouslySetInnerHTML") {
      if (i)
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
function Bs(e) {
  this.l[e.type + !1](z.event ? z.event(e) : e);
}
function zs(e) {
  this.l[e.type + !0](z.event ? z.event(e) : e);
}
function Bl(e, t, n, o, i, r, l, c, _) {
  var h, s, p, f, a, u, m, d, v, g, k, w, E, $, x, b = t.type;
  if (t.constructor !== void 0)
    return null;
  n.__h != null && (_ = n.__h, c = t.__e = n.__e, t.__h = null, r = [c]), (h = z.__b) && h(t);
  try {
    e:
      if (typeof b == "function") {
        if (d = t.props, v = (h = b.contextType) && o[h.__c], g = h ? v ? v.props.value : h.__ : o, n.__c ? m = (s = t.__c = n.__c).__ = s.__E : ("prototype" in b && b.prototype.render ? t.__c = s = new b(d, g) : (t.__c = s = new en(d, g), s.constructor = b, s.render = O_), v && v.sub(s), s.props = d, s.state || (s.state = {}), s.context = g, s.__n = o, p = s.__d = !0, s.__h = [], s._sb = []), s.__s == null && (s.__s = s.state), b.getDerivedStateFromProps != null && (s.__s == s.state && (s.__s = Ke({}, s.__s)), Ke(s.__s, b.getDerivedStateFromProps(d, s.__s))), f = s.props, a = s.state, p)
          b.getDerivedStateFromProps == null && s.componentWillMount != null && s.componentWillMount(), s.componentDidMount != null && s.__h.push(s.componentDidMount);
        else {
          if (b.getDerivedStateFromProps == null && d !== f && s.componentWillReceiveProps != null && s.componentWillReceiveProps(d, g), !s.__e && s.shouldComponentUpdate != null && s.shouldComponentUpdate(d, s.__s, g) === !1 || t.__v === n.__v) {
            for (s.props = d, s.state = s.__s, t.__v !== n.__v && (s.__d = !1), s.__v = t, t.__e = n.__e, t.__k = n.__k, t.__k.forEach(function(C) {
              C && (C.__ = t);
            }), k = 0; k < s._sb.length; k++)
              s.__h.push(s._sb[k]);
            s._sb = [], s.__h.length && l.push(s);
            break e;
          }
          s.componentWillUpdate != null && s.componentWillUpdate(d, s.__s, g), s.componentDidUpdate != null && s.__h.push(function() {
            s.componentDidUpdate(f, a, u);
          });
        }
        if (s.context = g, s.props = d, s.__v = t, s.__P = e, w = z.__r, E = 0, "prototype" in b && b.prototype.render) {
          for (s.state = s.__s, s.__d = !1, w && w(t), h = s.render(s.props, s.state, s.context), $ = 0; $ < s._sb.length; $++)
            s.__h.push(s._sb[$]);
          s._sb = [];
        } else
          do
            s.__d = !1, w && w(t), h = s.render(s.props, s.state, s.context), s.state = s.__s;
          while (s.__d && ++E < 25);
        s.state = s.__s, s.getChildContext != null && (o = Ke(Ke({}, o), s.getChildContext())), p || s.getSnapshotBeforeUpdate == null || (u = s.getSnapshotBeforeUpdate(f, a)), x = h != null && h.type === Wr && h.key == null ? h.props.children : h, Il(e, Array.isArray(x) ? x : [x], t, n, o, i, r, l, c, _), s.base = t.__e, t.__h = null, s.__h.length && l.push(s), m && (s.__E = s.__ = null), s.__e = !1;
      } else
        r == null && t.__v === n.__v ? (t.__k = n.__k, t.__e = n.__e) : t.__e = L_(n.__e, t, n, o, i, r, l, _);
    (h = z.diffed) && h(t);
  } catch (C) {
    t.__v = null, (_ || r != null) && (t.__e = c, t.__h = !!_, r[r.indexOf(c)] = null), z.__e(C, t, n);
  }
}
function P_(e, t) {
  z.__c && z.__c(t, e), e.some(function(n) {
    try {
      e = n.__h, n.__h = [], e.some(function(o) {
        o.call(n);
      });
    } catch (o) {
      z.__e(o, n.__v);
    }
  });
}
function L_(e, t, n, o, i, r, l, c) {
  var _, h, s, p = n.props, f = t.props, a = t.type, u = 0;
  if (a === "svg" && (i = !0), r != null) {
    for (; u < r.length; u++)
      if ((_ = r[u]) && "setAttribute" in _ == !!a && (a ? _.localName === a : _.nodeType === 3)) {
        e = _, r[u] = null;
        break;
      }
  }
  if (e == null) {
    if (a === null)
      return document.createTextNode(f);
    e = i ? document.createElementNS("http://www.w3.org/2000/svg", a) : document.createElement(a, f.is && f), r = null, c = !1;
  }
  if (a === null)
    p === f || c && e.data === f || (e.data = f);
  else {
    if (r = r && Hr.call(e.childNodes), h = (p = n.props || Ol).dangerouslySetInnerHTML, s = f.dangerouslySetInnerHTML, !c) {
      if (r != null)
        for (p = {}, u = 0; u < e.attributes.length; u++)
          p[e.attributes[u].name] = e.attributes[u].value;
      (s || h) && (s && (h && s.__html == h.__html || s.__html === e.innerHTML) || (e.innerHTML = s && s.__html || ""));
    }
    if (R_(e, f, p, i, c), s)
      t.__k = [];
    else if (u = t.props.children, Il(e, Array.isArray(u) ? u : [u], t, n, o, i && a !== "foreignObject", r, l, r ? r[0] : n.__k && vn(n, 0), c), r != null)
      for (u = r.length; u--; )
        r[u] != null && Hl(r[u]);
    c || ("value" in f && (u = f.value) !== void 0 && (u !== e.value || a === "progress" && !u || a === "option" && u !== p.value) && go(e, "value", u, p.value, !1), "checked" in f && (u = f.checked) !== void 0 && u !== e.checked && go(e, "checked", u, p.checked, !1));
  }
  return e;
}
function zl(e, t, n) {
  try {
    typeof e == "function" ? e(t) : e.current = t;
  } catch (o) {
    z.__e(o, n);
  }
}
function Fl(e, t, n) {
  var o, i;
  if (z.unmount && z.unmount(e), (o = e.ref) && (o.current && o.current !== e.__e || zl(o, null, t)), (o = e.__c) != null) {
    if (o.componentWillUnmount)
      try {
        o.componentWillUnmount();
      } catch (r) {
        z.__e(r, t);
      }
    o.base = o.__P = null, e.__c = void 0;
  }
  if (o = e.__k)
    for (i = 0; i < o.length; i++)
      o[i] && Fl(o[i], t, n || typeof e.type != "function");
  n || e.__e == null || Hl(e.__e), e.__ = e.__e = e.__d = void 0;
}
function O_(e, t, n) {
  return this.constructor(e, n);
}
Hr = Dl.slice, z = { __e: function(e, t, n, o) {
  for (var i, r, l; t = t.__; )
    if ((i = t.__c) && !i.__)
      try {
        if ((r = i.constructor) && r.getDerivedStateFromError != null && (i.setState(r.getDerivedStateFromError(e)), l = i.__d), i.componentDidCatch != null && (i.componentDidCatch(e, o || {}), l = i.__d), l)
          return i.__E = i;
      } catch (c) {
        e = c;
      }
  throw e;
} }, Pl = 0, Ll = function(e) {
  return e != null && e.constructor === void 0;
}, en.prototype.setState = function(e, t) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = Ke({}, this.state), typeof e == "function" && (e = e(Ke({}, n), this.props)), e && Ke(n, e), e != null && this.__v && (t && this._sb.push(t), Us(this));
}, en.prototype.forceUpdate = function(e) {
  this.__v && (this.__e = !0, e && this.__h.push(e), Us(this));
}, en.prototype.render = Wr, Qt = [], vo.__r = 0;
var Ir, F, Vl, tn, Fs, ql = {}, Gl = [], D_ = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function Xe(e, t) {
  for (var n in t)
    e[n] = t[n];
  return e;
}
function Yl(e) {
  var t = e.parentNode;
  t && t.removeChild(e);
}
function jt(e, t, n) {
  var o, i, r, l = {};
  for (r in t)
    r == "key" ? o = t[r] : r == "ref" ? i = t[r] : l[r] = t[r];
  if (arguments.length > 2 && (l.children = arguments.length > 3 ? Ir.call(arguments, 2) : n), typeof e == "function" && e.defaultProps != null)
    for (r in e.defaultProps)
      l[r] === void 0 && (l[r] = e.defaultProps[r]);
  return Xn(e, l, o, i, null);
}
function Xn(e, t, n, o, i) {
  var r = { type: e, props: t, key: n, ref: o, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: i == null ? ++Vl : i };
  return i == null && F.vnode != null && F.vnode(r), r;
}
function Ur(e) {
  return e.children;
}
function nn(e, t) {
  this.props = e, this.context = t;
}
function gn(e, t) {
  if (t == null)
    return e.__ ? gn(e.__, e.__.__k.indexOf(e) + 1) : null;
  for (var n; t < e.__k.length; t++)
    if ((n = e.__k[t]) != null && n.__e != null)
      return n.__e;
  return typeof e.type == "function" ? gn(e) : null;
}
function Kl(e) {
  var t, n;
  if ((e = e.__) != null && e.__c != null) {
    for (e.__e = e.__c.base = null, t = 0; t < e.__k.length; t++)
      if ((n = e.__k[t]) != null && n.__e != null) {
        e.__e = e.__c.base = n.__e;
        break;
      }
    return Kl(e);
  }
}
function Vs(e) {
  (!e.__d && (e.__d = !0) && tn.push(e) && !mo.__r++ || Fs !== F.debounceRendering) && ((Fs = F.debounceRendering) || setTimeout)(mo);
}
function mo() {
  for (var e; mo.__r = tn.length; )
    e = tn.sort(function(t, n) {
      return t.__v.__b - n.__v.__b;
    }), tn = [], e.some(function(t) {
      var n, o, i, r, l, c;
      t.__d && (l = (r = (n = t).__v).__e, (c = n.__P) && (o = [], (i = Xe({}, r)).__v = r.__v + 1, Ql(c, r, i, n.__n, c.ownerSVGElement !== void 0, r.__h != null ? [l] : null, o, l == null ? gn(r) : l, r.__h), W_(o, r), r.__e != l && Kl(r)));
    });
}
function Xl(e, t, n, o, i, r, l, c, _, h) {
  var s, p, f, a, u, m, d, v = o && o.__k || Gl, g = v.length;
  for (n.__k = [], s = 0; s < t.length; s++)
    if ((a = n.__k[s] = (a = t[s]) == null || typeof a == "boolean" ? null : typeof a == "string" || typeof a == "number" || typeof a == "bigint" ? Xn(null, a, null, null, a) : Array.isArray(a) ? Xn(Ur, { children: a }, null, null, null) : a.__b > 0 ? Xn(a.type, a.props, a.key, a.ref ? a.ref : null, a.__v) : a) != null) {
      if (a.__ = n, a.__b = n.__b + 1, (f = v[s]) === null || f && a.key == f.key && a.type === f.type)
        v[s] = void 0;
      else
        for (p = 0; p < g; p++) {
          if ((f = v[p]) && a.key == f.key && a.type === f.type) {
            v[p] = void 0;
            break;
          }
          f = null;
        }
      Ql(e, a, f = f || ql, i, r, l, c, _, h), u = a.__e, (p = a.ref) && f.ref != p && (d || (d = []), f.ref && d.push(f.ref, null, a), d.push(p, a.__c || u, a)), u != null ? (m == null && (m = u), typeof a.type == "function" && a.__k === f.__k ? a.__d = _ = Jl(a, _, e) : _ = Zl(e, a, f, v, u, _), typeof n.type == "function" && (n.__d = _)) : _ && f.__e == _ && _.parentNode != e && (_ = gn(f));
    }
  for (n.__e = m, s = g; s--; )
    v[s] != null && ta(v[s], v[s]);
  if (d)
    for (s = 0; s < d.length; s++)
      ea(d[s], d[++s], d[++s]);
}
function Jl(e, t, n) {
  for (var o, i = e.__k, r = 0; i && r < i.length; r++)
    (o = i[r]) && (o.__ = e, t = typeof o.type == "function" ? Jl(o, t, n) : Zl(n, o, o, i, o.__e, t));
  return t;
}
function Zl(e, t, n, o, i, r) {
  var l, c, _;
  if (t.__d !== void 0)
    l = t.__d, t.__d = void 0;
  else if (n == null || i != r || i.parentNode == null)
    e:
      if (r == null || r.parentNode !== e)
        e.appendChild(i), l = null;
      else {
        for (c = r, _ = 0; (c = c.nextSibling) && _ < o.length; _ += 2)
          if (c == i)
            break e;
        e.insertBefore(i, r), l = r;
      }
  return l !== void 0 ? l : i.nextSibling;
}
function H_(e, t, n, o, i) {
  var r;
  for (r in n)
    r === "children" || r === "key" || r in t || yo(e, r, null, n[r], o);
  for (r in t)
    i && typeof t[r] != "function" || r === "children" || r === "key" || r === "value" || r === "checked" || n[r] === t[r] || yo(e, r, t[r], n[r], o);
}
function qs(e, t, n) {
  t[0] === "-" ? e.setProperty(t, n) : e[t] = n == null ? "" : typeof n != "number" || D_.test(t) ? n : n + "px";
}
function yo(e, t, n, o, i) {
  var r;
  e:
    if (t === "style")
      if (typeof n == "string")
        e.style.cssText = n;
      else {
        if (typeof o == "string" && (e.style.cssText = o = ""), o)
          for (t in o)
            n && t in n || qs(e.style, t, "");
        if (n)
          for (t in n)
            o && n[t] === o[t] || qs(e.style, t, n[t]);
      }
    else if (t[0] === "o" && t[1] === "n")
      r = t !== (t = t.replace(/Capture$/, "")), t = t.toLowerCase() in e ? t.toLowerCase().slice(2) : t.slice(2), e.l || (e.l = {}), e.l[t + r] = n, n ? o || e.addEventListener(t, r ? Ys : Gs, r) : e.removeEventListener(t, r ? Ys : Gs, r);
    else if (t !== "dangerouslySetInnerHTML") {
      if (i)
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
function Gs(e) {
  this.l[e.type + !1](F.event ? F.event(e) : e);
}
function Ys(e) {
  this.l[e.type + !0](F.event ? F.event(e) : e);
}
function Ql(e, t, n, o, i, r, l, c, _) {
  var h, s, p, f, a, u, m, d, v, g, k, w, E, $, x, b = t.type;
  if (t.constructor !== void 0)
    return null;
  n.__h != null && (_ = n.__h, c = t.__e = n.__e, t.__h = null, r = [c]), (h = F.__b) && h(t);
  try {
    e:
      if (typeof b == "function") {
        if (d = t.props, v = (h = b.contextType) && o[h.__c], g = h ? v ? v.props.value : h.__ : o, n.__c ? m = (s = t.__c = n.__c).__ = s.__E : ("prototype" in b && b.prototype.render ? t.__c = s = new b(d, g) : (t.__c = s = new nn(d, g), s.constructor = b, s.render = U_), v && v.sub(s), s.props = d, s.state || (s.state = {}), s.context = g, s.__n = o, p = s.__d = !0, s.__h = [], s._sb = []), s.__s == null && (s.__s = s.state), b.getDerivedStateFromProps != null && (s.__s == s.state && (s.__s = Xe({}, s.__s)), Xe(s.__s, b.getDerivedStateFromProps(d, s.__s))), f = s.props, a = s.state, p)
          b.getDerivedStateFromProps == null && s.componentWillMount != null && s.componentWillMount(), s.componentDidMount != null && s.__h.push(s.componentDidMount);
        else {
          if (b.getDerivedStateFromProps == null && d !== f && s.componentWillReceiveProps != null && s.componentWillReceiveProps(d, g), !s.__e && s.shouldComponentUpdate != null && s.shouldComponentUpdate(d, s.__s, g) === !1 || t.__v === n.__v) {
            for (s.props = d, s.state = s.__s, t.__v !== n.__v && (s.__d = !1), s.__v = t, t.__e = n.__e, t.__k = n.__k, t.__k.forEach(function(C) {
              C && (C.__ = t);
            }), k = 0; k < s._sb.length; k++)
              s.__h.push(s._sb[k]);
            s._sb = [], s.__h.length && l.push(s);
            break e;
          }
          s.componentWillUpdate != null && s.componentWillUpdate(d, s.__s, g), s.componentDidUpdate != null && s.__h.push(function() {
            s.componentDidUpdate(f, a, u);
          });
        }
        if (s.context = g, s.props = d, s.__v = t, s.__P = e, w = F.__r, E = 0, "prototype" in b && b.prototype.render) {
          for (s.state = s.__s, s.__d = !1, w && w(t), h = s.render(s.props, s.state, s.context), $ = 0; $ < s._sb.length; $++)
            s.__h.push(s._sb[$]);
          s._sb = [];
        } else
          do
            s.__d = !1, w && w(t), h = s.render(s.props, s.state, s.context), s.state = s.__s;
          while (s.__d && ++E < 25);
        s.state = s.__s, s.getChildContext != null && (o = Xe(Xe({}, o), s.getChildContext())), p || s.getSnapshotBeforeUpdate == null || (u = s.getSnapshotBeforeUpdate(f, a)), x = h != null && h.type === Ur && h.key == null ? h.props.children : h, Xl(e, Array.isArray(x) ? x : [x], t, n, o, i, r, l, c, _), s.base = t.__e, t.__h = null, s.__h.length && l.push(s), m && (s.__E = s.__ = null), s.__e = !1;
      } else
        r == null && t.__v === n.__v ? (t.__k = n.__k, t.__e = n.__e) : t.__e = I_(n.__e, t, n, o, i, r, l, _);
    (h = F.diffed) && h(t);
  } catch (C) {
    t.__v = null, (_ || r != null) && (t.__e = c, t.__h = !!_, r[r.indexOf(c)] = null), F.__e(C, t, n);
  }
}
function W_(e, t) {
  F.__c && F.__c(t, e), e.some(function(n) {
    try {
      e = n.__h, n.__h = [], e.some(function(o) {
        o.call(n);
      });
    } catch (o) {
      F.__e(o, n.__v);
    }
  });
}
function I_(e, t, n, o, i, r, l, c) {
  var _, h, s, p = n.props, f = t.props, a = t.type, u = 0;
  if (a === "svg" && (i = !0), r != null) {
    for (; u < r.length; u++)
      if ((_ = r[u]) && "setAttribute" in _ == !!a && (a ? _.localName === a : _.nodeType === 3)) {
        e = _, r[u] = null;
        break;
      }
  }
  if (e == null) {
    if (a === null)
      return document.createTextNode(f);
    e = i ? document.createElementNS("http://www.w3.org/2000/svg", a) : document.createElement(a, f.is && f), r = null, c = !1;
  }
  if (a === null)
    p === f || c && e.data === f || (e.data = f);
  else {
    if (r = r && Ir.call(e.childNodes), h = (p = n.props || ql).dangerouslySetInnerHTML, s = f.dangerouslySetInnerHTML, !c) {
      if (r != null)
        for (p = {}, u = 0; u < e.attributes.length; u++)
          p[e.attributes[u].name] = e.attributes[u].value;
      (s || h) && (s && (h && s.__html == h.__html || s.__html === e.innerHTML) || (e.innerHTML = s && s.__html || ""));
    }
    if (H_(e, f, p, i, c), s)
      t.__k = [];
    else if (u = t.props.children, Xl(e, Array.isArray(u) ? u : [u], t, n, o, i && a !== "foreignObject", r, l, r ? r[0] : n.__k && gn(n, 0), c), r != null)
      for (u = r.length; u--; )
        r[u] != null && Yl(r[u]);
    c || ("value" in f && (u = f.value) !== void 0 && (u !== e.value || a === "progress" && !u || a === "option" && u !== p.value) && yo(e, "value", u, p.value, !1), "checked" in f && (u = f.checked) !== void 0 && u !== e.checked && yo(e, "checked", u, p.checked, !1));
  }
  return e;
}
function ea(e, t, n) {
  try {
    typeof e == "function" ? e(t) : e.current = t;
  } catch (o) {
    F.__e(o, n);
  }
}
function ta(e, t, n) {
  var o, i;
  if (F.unmount && F.unmount(e), (o = e.ref) && (o.current && o.current !== e.__e || ea(o, null, t)), (o = e.__c) != null) {
    if (o.componentWillUnmount)
      try {
        o.componentWillUnmount();
      } catch (r) {
        F.__e(r, t);
      }
    o.base = o.__P = null, e.__c = void 0;
  }
  if (o = e.__k)
    for (i = 0; i < o.length; i++)
      o[i] && ta(o[i], t, n || typeof e.type != "function");
  n || e.__e == null || Yl(e.__e), e.__ = e.__e = e.__d = void 0;
}
function U_(e, t, n) {
  return this.constructor(e, n);
}
Ir = Gl.slice, F = { __e: function(e, t, n, o) {
  for (var i, r, l; t = t.__; )
    if ((i = t.__c) && !i.__)
      try {
        if ((r = i.constructor) && r.getDerivedStateFromError != null && (i.setState(r.getDerivedStateFromError(e)), l = i.__d), i.componentDidCatch != null && (i.componentDidCatch(e, o || {}), l = i.__d), l)
          return i.__E = i;
      } catch (c) {
        e = c;
      }
  throw e;
} }, Vl = 0, nn.prototype.setState = function(e, t) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = Xe({}, this.state), typeof e == "function" && (e = e(Xe({}, n), this.props)), e && Xe(n, e), e != null && this.__v && (t && this._sb.push(t), Vs(this));
}, nn.prototype.forceUpdate = function(e) {
  this.__v && (this.__e = !0, e && this.__h.push(e), Vs(this));
}, nn.prototype.render = Ur, tn = [], mo.__r = 0;
class pt extends nn {
  render() {
    const {
      component: t,
      type: n,
      size: o,
      className: i,
      children: r,
      url: l,
      target: c,
      disabled: _,
      active: h,
      loading: s,
      icon: p,
      text: f,
      trailingIcon: a,
      caret: u,
      square: m,
      hint: d,
      ...v
    } = this.props, g = t || (l ? "a" : "button"), k = f == null || typeof f == "string" && !f.length, w = k && !p && !a && !r;
    return jt(
      g,
      {
        className: P("btn", n, i, {
          "btn-caret": w,
          disabled: _,
          active: h,
          loading: s,
          square: m === void 0 ? !w && !r && k : m
        }, o ? `size-${o}` : ""),
        title: d,
        [g === "a" ? "href" : "data-url"]: l,
        [g === "a" ? "target" : "data-target"]: c,
        type: g === "button" ? "button" : void 0,
        ...v
      },
      typeof p == "string" ? /* @__PURE__ */ jt("i", {
        class: `icon ${p}`
      }) : p,
      k ? null : /* @__PURE__ */ jt("span", {
        className: "text"
      }, f),
      r,
      typeof a == "string" ? /* @__PURE__ */ jt("i", {
        class: `icon ${a}`
      }) : a,
      u ? /* @__PURE__ */ jt("span", {
        className: typeof u == "string" ? `caret-${u}` : "caret"
      }) : null
    );
  }
}
class na extends en {
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
  handleItemClick(t, n, o, i) {
    o && o.call(i.target, i);
    const { onClickItem: r } = this.props;
    r && r.call(this, { item: t, index: n, event: i });
  }
  beforeRender() {
    var o;
    const t = { ...this.props }, n = (o = t.beforeRender) == null ? void 0 : o.call(this, t);
    return n && Object.assign(t, n), typeof t.items == "function" && (t.items = t.items.call(this)), t;
  }
  onRenderItem(t, n) {
    const { key: o = n, ...i } = t;
    return /* @__PURE__ */ ar(pt, {
      key: o,
      ...i
    });
  }
  renderItem(t, n, o) {
    const { itemRender: i, defaultBtnProps: r, onClickItem: l } = t, c = { key: o, ...n };
    if (r && Object.assign(c, r), l && (c.onClick = this.handleItemClick.bind(this, c, o, n.onClick)), i) {
      const _ = i.call(this, c, ar);
      if (Ll(_))
        return _;
      typeof _ == "object" && Object.assign(c, _);
    }
    return this.onRenderItem(c, o);
  }
  render() {
    const t = this.beforeRender(), {
      className: n,
      items: o,
      size: i,
      type: r,
      defaultBtnProps: l,
      children: c,
      itemRender: _,
      onClickItem: h,
      beforeRender: s,
      afterRender: p,
      beforeDestroy: f,
      ...a
    } = t;
    return /* @__PURE__ */ ar("div", {
      className: P("btn-group", i ? `size-${i}` : "", n),
      ...a
    }, o && o.map(this.renderItem.bind(this, t)), c);
  }
}
class Ks extends xe {
}
S(Ks, "NAME", "btngroup"), S(Ks, "Component", na);
function j_() {
  const e = typeof window.innerWidth == "number" ? window.innerWidth - document.body.clientWidth : 17;
  document.body.style.paddingRight = `${e}px`, document.body.classList.add("modal-open");
}
function B_() {
  document.body.style.paddingRight = "", document.body.classList.remove("modal-open");
}
function z_(e, t) {
  j_(), e.classList.add("block"), Xs(e, t), e.onclick = (n) => F_(n, e), window.addEventListener("resize", () => {
    Xs(e, t);
  });
}
function oa(e) {
  var t;
  B_(), (t = e.classList) == null || t.remove("block");
}
function Xs(e, t) {
  const n = e.querySelector(".modal-dialog");
  if (!n)
    return;
  const o = Math.max(0, (window.innerHeight - n.clientHeight) / 2);
  if (t === "fit") {
    n.style.top = `${o > 50 ? Math.floor(o * 2 / 3) : o}px`;
    return;
  }
  if (t === "center") {
    n.style.top = `${o}px`;
    return;
  }
  n.style.top = t;
}
function F_(e, t) {
  e.target.closest("[data-dismiss=modal]") && (e.stopPropagation(), oa(t));
}
function V_(e) {
  var t, n;
  return e instanceof HTMLAnchorElement ? (n = (t = (e.href || "").match(/(?<selector>#\S+)$/)) == null ? void 0 : t.groups) == null ? void 0 : n.selector : e.dataset.target;
}
document.addEventListener("click", (e) => {
  const t = e.target, n = t.closest("[data-toggle=modal]");
  if (n) {
    const o = V_(n);
    if (!o)
      return;
    const i = document.querySelector(o);
    if (!i)
      return;
    z_(i, n.dataset.position || "fit");
  } else
    t.className.includes("modal") && oa(t);
});
class ra extends Le {
  beforeRender() {
    const t = super.beforeRender();
    return t.className = P(t.className, t.type ? `nav-${t.type}` : "", {
      "nav-stacked": t.stacked
    }), t;
  }
}
S(ra, "NAME", "nav");
class Js extends xe {
}
S(Js, "NAME", "nav"), S(Js, "Component", ra);
var sa, dr, ia, q_ = [];
function tt(e, t, n) {
  var o, i, r, l = {};
  for (r in t)
    r == "key" ? o = t[r] : r == "ref" ? i = t[r] : l[r] = t[r];
  if (arguments.length > 2 && (l.children = arguments.length > 3 ? sa.call(arguments, 2) : n), typeof e == "function" && e.defaultProps != null)
    for (r in e.defaultProps)
      l[r] === void 0 && (l[r] = e.defaultProps[r]);
  return G_(e, l, o, i, null);
}
function G_(e, t, n, o, i) {
  var r = { type: e, props: t, key: n, ref: o, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: i == null ? ++ia : i };
  return i == null && dr.vnode != null && dr.vnode(r), r;
}
sa = q_.slice, dr = { __e: function(e, t, n, o) {
  for (var i, r, l; t = t.__; )
    if ((i = t.__c) && !i.__)
      try {
        if ((r = i.constructor) && r.getDerivedStateFromError != null && (i.setState(r.getDerivedStateFromError(e)), l = i.__d), i.componentDidCatch != null && (i.componentDidCatch(e, o || {}), l = i.__d), l)
          return i.__E = i;
      } catch (c) {
        e = c;
      }
  throw e;
} }, ia = 0;
var la, vr, aa, Y_ = [];
function Jo(e, t, n) {
  var o, i, r, l = {};
  for (r in t)
    r == "key" ? o = t[r] : r == "ref" ? i = t[r] : l[r] = t[r];
  if (arguments.length > 2 && (l.children = arguments.length > 3 ? la.call(arguments, 2) : n), typeof e == "function" && e.defaultProps != null)
    for (r in e.defaultProps)
      l[r] === void 0 && (l[r] = e.defaultProps[r]);
  return K_(e, l, o, i, null);
}
function K_(e, t, n, o, i) {
  var r = { type: e, props: t, key: n, ref: o, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: i == null ? ++aa : i };
  return i == null && vr.vnode != null && vr.vnode(r), r;
}
la = Y_.slice, vr = { __e: function(e, t, n, o) {
  for (var i, r, l; t = t.__; )
    if ((i = t.__c) && !i.__)
      try {
        if ((r = i.constructor) && r.getDerivedStateFromError != null && (i.setState(r.getDerivedStateFromError(e)), l = i.__d), i.componentDidCatch != null && (i.componentDidCatch(e, o || {}), l = i.__d), l)
          return i.__E = i;
      } catch (c) {
        e = c;
      }
  throw e;
} }, aa = 0;
function X_({
  key: e,
  type: t,
  btnType: n,
  ...o
}) {
  return /* @__PURE__ */ Jo(pt, {
    type: n,
    ...o
  });
}
var jr, V, ca, on, Zs, _a = {}, fa = [], J_ = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function Je(e, t) {
  for (var n in t)
    e[n] = t[n];
  return e;
}
function ua(e) {
  var t = e.parentNode;
  t && t.removeChild(e);
}
function ha(e, t, n) {
  var o, i, r, l = {};
  for (r in t)
    r == "key" ? o = t[r] : r == "ref" ? i = t[r] : l[r] = t[r];
  if (arguments.length > 2 && (l.children = arguments.length > 3 ? jr.call(arguments, 2) : n), typeof e == "function" && e.defaultProps != null)
    for (r in e.defaultProps)
      l[r] === void 0 && (l[r] = e.defaultProps[r]);
  return Jn(e, l, o, i, null);
}
function Jn(e, t, n, o, i) {
  var r = { type: e, props: t, key: n, ref: o, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: i == null ? ++ca : i };
  return i == null && V.vnode != null && V.vnode(r), r;
}
function Z_() {
  return { current: null };
}
function Br(e) {
  return e.children;
}
function rn(e, t) {
  this.props = e, this.context = t;
}
function mn(e, t) {
  if (t == null)
    return e.__ ? mn(e.__, e.__.__k.indexOf(e) + 1) : null;
  for (var n; t < e.__k.length; t++)
    if ((n = e.__k[t]) != null && n.__e != null)
      return n.__e;
  return typeof e.type == "function" ? mn(e) : null;
}
function pa(e) {
  var t, n;
  if ((e = e.__) != null && e.__c != null) {
    for (e.__e = e.__c.base = null, t = 0; t < e.__k.length; t++)
      if ((n = e.__k[t]) != null && n.__e != null) {
        e.__e = e.__c.base = n.__e;
        break;
      }
    return pa(e);
  }
}
function Qs(e) {
  (!e.__d && (e.__d = !0) && on.push(e) && !bo.__r++ || Zs !== V.debounceRendering) && ((Zs = V.debounceRendering) || setTimeout)(bo);
}
function bo() {
  for (var e; bo.__r = on.length; )
    e = on.sort(function(t, n) {
      return t.__v.__b - n.__v.__b;
    }), on = [], e.some(function(t) {
      var n, o, i, r, l, c;
      t.__d && (l = (r = (n = t).__v).__e, (c = n.__P) && (o = [], (i = Je({}, r)).__v = r.__v + 1, ma(c, r, i, n.__n, c.ownerSVGElement !== void 0, r.__h != null ? [l] : null, o, l == null ? mn(r) : l, r.__h), ef(o, r), r.__e != l && pa(r)));
    });
}
function da(e, t, n, o, i, r, l, c, _, h) {
  var s, p, f, a, u, m, d, v = o && o.__k || fa, g = v.length;
  for (n.__k = [], s = 0; s < t.length; s++)
    if ((a = n.__k[s] = (a = t[s]) == null || typeof a == "boolean" ? null : typeof a == "string" || typeof a == "number" || typeof a == "bigint" ? Jn(null, a, null, null, a) : Array.isArray(a) ? Jn(Br, { children: a }, null, null, null) : a.__b > 0 ? Jn(a.type, a.props, a.key, a.ref ? a.ref : null, a.__v) : a) != null) {
      if (a.__ = n, a.__b = n.__b + 1, (f = v[s]) === null || f && a.key == f.key && a.type === f.type)
        v[s] = void 0;
      else
        for (p = 0; p < g; p++) {
          if ((f = v[p]) && a.key == f.key && a.type === f.type) {
            v[p] = void 0;
            break;
          }
          f = null;
        }
      ma(e, a, f = f || _a, i, r, l, c, _, h), u = a.__e, (p = a.ref) && f.ref != p && (d || (d = []), f.ref && d.push(f.ref, null, a), d.push(p, a.__c || u, a)), u != null ? (m == null && (m = u), typeof a.type == "function" && a.__k === f.__k ? a.__d = _ = va(a, _, e) : _ = ga(e, a, f, v, u, _), typeof n.type == "function" && (n.__d = _)) : _ && f.__e == _ && _.parentNode != e && (_ = mn(f));
    }
  for (n.__e = m, s = g; s--; )
    v[s] != null && ba(v[s], v[s]);
  if (d)
    for (s = 0; s < d.length; s++)
      ya(d[s], d[++s], d[++s]);
}
function va(e, t, n) {
  for (var o, i = e.__k, r = 0; i && r < i.length; r++)
    (o = i[r]) && (o.__ = e, t = typeof o.type == "function" ? va(o, t, n) : ga(n, o, o, i, o.__e, t));
  return t;
}
function ga(e, t, n, o, i, r) {
  var l, c, _;
  if (t.__d !== void 0)
    l = t.__d, t.__d = void 0;
  else if (n == null || i != r || i.parentNode == null)
    e:
      if (r == null || r.parentNode !== e)
        e.appendChild(i), l = null;
      else {
        for (c = r, _ = 0; (c = c.nextSibling) && _ < o.length; _ += 2)
          if (c == i)
            break e;
        e.insertBefore(i, r), l = r;
      }
  return l !== void 0 ? l : i.nextSibling;
}
function Q_(e, t, n, o, i) {
  var r;
  for (r in n)
    r === "children" || r === "key" || r in t || wo(e, r, null, n[r], o);
  for (r in t)
    i && typeof t[r] != "function" || r === "children" || r === "key" || r === "value" || r === "checked" || n[r] === t[r] || wo(e, r, t[r], n[r], o);
}
function ei(e, t, n) {
  t[0] === "-" ? e.setProperty(t, n) : e[t] = n == null ? "" : typeof n != "number" || J_.test(t) ? n : n + "px";
}
function wo(e, t, n, o, i) {
  var r;
  e:
    if (t === "style")
      if (typeof n == "string")
        e.style.cssText = n;
      else {
        if (typeof o == "string" && (e.style.cssText = o = ""), o)
          for (t in o)
            n && t in n || ei(e.style, t, "");
        if (n)
          for (t in n)
            o && n[t] === o[t] || ei(e.style, t, n[t]);
      }
    else if (t[0] === "o" && t[1] === "n")
      r = t !== (t = t.replace(/Capture$/, "")), t = t.toLowerCase() in e ? t.toLowerCase().slice(2) : t.slice(2), e.l || (e.l = {}), e.l[t + r] = n, n ? o || e.addEventListener(t, r ? ni : ti, r) : e.removeEventListener(t, r ? ni : ti, r);
    else if (t !== "dangerouslySetInnerHTML") {
      if (i)
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
function ti(e) {
  this.l[e.type + !1](V.event ? V.event(e) : e);
}
function ni(e) {
  this.l[e.type + !0](V.event ? V.event(e) : e);
}
function ma(e, t, n, o, i, r, l, c, _) {
  var h, s, p, f, a, u, m, d, v, g, k, w, E, $, x, b = t.type;
  if (t.constructor !== void 0)
    return null;
  n.__h != null && (_ = n.__h, c = t.__e = n.__e, t.__h = null, r = [c]), (h = V.__b) && h(t);
  try {
    e:
      if (typeof b == "function") {
        if (d = t.props, v = (h = b.contextType) && o[h.__c], g = h ? v ? v.props.value : h.__ : o, n.__c ? m = (s = t.__c = n.__c).__ = s.__E : ("prototype" in b && b.prototype.render ? t.__c = s = new b(d, g) : (t.__c = s = new rn(d, g), s.constructor = b, s.render = nf), v && v.sub(s), s.props = d, s.state || (s.state = {}), s.context = g, s.__n = o, p = s.__d = !0, s.__h = [], s._sb = []), s.__s == null && (s.__s = s.state), b.getDerivedStateFromProps != null && (s.__s == s.state && (s.__s = Je({}, s.__s)), Je(s.__s, b.getDerivedStateFromProps(d, s.__s))), f = s.props, a = s.state, p)
          b.getDerivedStateFromProps == null && s.componentWillMount != null && s.componentWillMount(), s.componentDidMount != null && s.__h.push(s.componentDidMount);
        else {
          if (b.getDerivedStateFromProps == null && d !== f && s.componentWillReceiveProps != null && s.componentWillReceiveProps(d, g), !s.__e && s.shouldComponentUpdate != null && s.shouldComponentUpdate(d, s.__s, g) === !1 || t.__v === n.__v) {
            for (s.props = d, s.state = s.__s, t.__v !== n.__v && (s.__d = !1), s.__v = t, t.__e = n.__e, t.__k = n.__k, t.__k.forEach(function(C) {
              C && (C.__ = t);
            }), k = 0; k < s._sb.length; k++)
              s.__h.push(s._sb[k]);
            s._sb = [], s.__h.length && l.push(s);
            break e;
          }
          s.componentWillUpdate != null && s.componentWillUpdate(d, s.__s, g), s.componentDidUpdate != null && s.__h.push(function() {
            s.componentDidUpdate(f, a, u);
          });
        }
        if (s.context = g, s.props = d, s.__v = t, s.__P = e, w = V.__r, E = 0, "prototype" in b && b.prototype.render) {
          for (s.state = s.__s, s.__d = !1, w && w(t), h = s.render(s.props, s.state, s.context), $ = 0; $ < s._sb.length; $++)
            s.__h.push(s._sb[$]);
          s._sb = [];
        } else
          do
            s.__d = !1, w && w(t), h = s.render(s.props, s.state, s.context), s.state = s.__s;
          while (s.__d && ++E < 25);
        s.state = s.__s, s.getChildContext != null && (o = Je(Je({}, o), s.getChildContext())), p || s.getSnapshotBeforeUpdate == null || (u = s.getSnapshotBeforeUpdate(f, a)), x = h != null && h.type === Br && h.key == null ? h.props.children : h, da(e, Array.isArray(x) ? x : [x], t, n, o, i, r, l, c, _), s.base = t.__e, t.__h = null, s.__h.length && l.push(s), m && (s.__E = s.__ = null), s.__e = !1;
      } else
        r == null && t.__v === n.__v ? (t.__k = n.__k, t.__e = n.__e) : t.__e = tf(n.__e, t, n, o, i, r, l, _);
    (h = V.diffed) && h(t);
  } catch (C) {
    t.__v = null, (_ || r != null) && (t.__e = c, t.__h = !!_, r[r.indexOf(c)] = null), V.__e(C, t, n);
  }
}
function ef(e, t) {
  V.__c && V.__c(t, e), e.some(function(n) {
    try {
      e = n.__h, n.__h = [], e.some(function(o) {
        o.call(n);
      });
    } catch (o) {
      V.__e(o, n.__v);
    }
  });
}
function tf(e, t, n, o, i, r, l, c) {
  var _, h, s, p = n.props, f = t.props, a = t.type, u = 0;
  if (a === "svg" && (i = !0), r != null) {
    for (; u < r.length; u++)
      if ((_ = r[u]) && "setAttribute" in _ == !!a && (a ? _.localName === a : _.nodeType === 3)) {
        e = _, r[u] = null;
        break;
      }
  }
  if (e == null) {
    if (a === null)
      return document.createTextNode(f);
    e = i ? document.createElementNS("http://www.w3.org/2000/svg", a) : document.createElement(a, f.is && f), r = null, c = !1;
  }
  if (a === null)
    p === f || c && e.data === f || (e.data = f);
  else {
    if (r = r && jr.call(e.childNodes), h = (p = n.props || _a).dangerouslySetInnerHTML, s = f.dangerouslySetInnerHTML, !c) {
      if (r != null)
        for (p = {}, u = 0; u < e.attributes.length; u++)
          p[e.attributes[u].name] = e.attributes[u].value;
      (s || h) && (s && (h && s.__html == h.__html || s.__html === e.innerHTML) || (e.innerHTML = s && s.__html || ""));
    }
    if (Q_(e, f, p, i, c), s)
      t.__k = [];
    else if (u = t.props.children, da(e, Array.isArray(u) ? u : [u], t, n, o, i && a !== "foreignObject", r, l, r ? r[0] : n.__k && mn(n, 0), c), r != null)
      for (u = r.length; u--; )
        r[u] != null && ua(r[u]);
    c || ("value" in f && (u = f.value) !== void 0 && (u !== e.value || a === "progress" && !u || a === "option" && u !== p.value) && wo(e, "value", u, p.value, !1), "checked" in f && (u = f.checked) !== void 0 && u !== e.checked && wo(e, "checked", u, p.checked, !1));
  }
  return e;
}
function ya(e, t, n) {
  try {
    typeof e == "function" ? e(t) : e.current = t;
  } catch (o) {
    V.__e(o, n);
  }
}
function ba(e, t, n) {
  var o, i;
  if (V.unmount && V.unmount(e), (o = e.ref) && (o.current && o.current !== e.__e || ya(o, null, t)), (o = e.__c) != null) {
    if (o.componentWillUnmount)
      try {
        o.componentWillUnmount();
      } catch (r) {
        V.__e(r, t);
      }
    o.base = o.__P = null, e.__c = void 0;
  }
  if (o = e.__k)
    for (i = 0; i < o.length; i++)
      o[i] && ba(o[i], t, n || typeof e.type != "function");
  n || e.__e == null || ua(e.__e), e.__ = e.__e = e.__d = void 0;
}
function nf(e, t, n) {
  return this.constructor(e, n);
}
jr = fa.slice, V = { __e: function(e, t, n, o) {
  for (var i, r, l; t = t.__; )
    if ((i = t.__c) && !i.__)
      try {
        if ((r = i.constructor) && r.getDerivedStateFromError != null && (i.setState(r.getDerivedStateFromError(e)), l = i.__d), i.componentDidCatch != null && (i.componentDidCatch(e, o || {}), l = i.__d), l)
          return i.__E = i;
      } catch (c) {
        e = c;
      }
  throw e;
} }, ca = 0, rn.prototype.setState = function(e, t) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = Je({}, this.state), typeof e == "function" && (e = e(Je({}, n), this.props)), e && Je(n, e), e != null && this.__v && (t && this._sb.push(t), Qs(this));
}, rn.prototype.forceUpdate = function(e) {
  this.__v && (this.__e = !0, e && this.__h.push(e), Qs(this));
}, rn.prototype.render = Br, on = [], bo.__r = 0;
var zr = "top", wa = "bottom", ko = "right", yn = "left", of = "auto", ka = [zr, wa, ko, yn], rf = "start", sf = "end", lf = /* @__PURE__ */ [].concat(ka, [of]).reduce(function(e, t) {
  return e.concat([t, t + "-" + rf, t + "-" + sf]);
}, []);
function $a(e) {
  return e.split("-")[0];
}
function Ot(e) {
  if (e == null)
    return window;
  if (e.toString() !== "[object Window]") {
    var t = e.ownerDocument;
    return t && t.defaultView || window;
  }
  return e;
}
function xa(e) {
  var t = Ot(e).Element;
  return e instanceof t || e instanceof Element;
}
function $o(e) {
  var t = Ot(e).HTMLElement;
  return e instanceof t || e instanceof HTMLElement;
}
function Fr(e) {
  if (typeof ShadowRoot > "u")
    return !1;
  var t = Ot(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot;
}
var af = Math.max, cf = Math.min, oi = Math.round;
function gr() {
  var e = navigator.userAgentData;
  return e != null && e.brands ? e.brands.map(function(t) {
    return t.brand + "/" + t.version;
  }).join(" ") : navigator.userAgent;
}
function _f() {
  return !/^((?!chrome|android).)*safari/i.test(gr());
}
function ff(e, t, n) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  var o = e.getBoundingClientRect(), i = 1, r = 1;
  t && $o(e) && (i = e.offsetWidth > 0 && oi(o.width) / e.offsetWidth || 1, r = e.offsetHeight > 0 && oi(o.height) / e.offsetHeight || 1);
  var l = xa(e) ? Ot(e) : window, c = l.visualViewport, _ = !_f() && n, h = (o.left + (_ && c ? c.offsetLeft : 0)) / i, s = (o.top + (_ && c ? c.offsetTop : 0)) / r, p = o.width / i, f = o.height / r;
  return {
    width: p,
    height: f,
    top: s,
    right: h + p,
    bottom: s + f,
    left: h,
    x: h,
    y: s
  };
}
function uf(e) {
  var t = ff(e), n = e.offsetWidth, o = e.offsetHeight;
  return Math.abs(t.width - n) <= 1 && (n = t.width), Math.abs(t.height - o) <= 1 && (o = t.height), {
    x: e.offsetLeft,
    y: e.offsetTop,
    width: n,
    height: o
  };
}
function hf(e, t) {
  var n = t.getRootNode && t.getRootNode();
  if (e.contains(t))
    return !0;
  if (n && Fr(n)) {
    var o = t;
    do {
      if (o && e.isSameNode(o))
        return !0;
      o = o.parentNode || o.host;
    } while (o);
  }
  return !1;
}
function bn(e) {
  return e ? (e.nodeName || "").toLowerCase() : null;
}
function wn(e) {
  return Ot(e).getComputedStyle(e);
}
function pf(e) {
  return ["table", "td", "th"].indexOf(bn(e)) >= 0;
}
function df(e) {
  return ((xa(e) ? e.ownerDocument : e.document) || window.document).documentElement;
}
function vf(e) {
  return bn(e) === "html" ? e : e.assignedSlot || e.parentNode || (Fr(e) ? e.host : null) || df(e);
}
function ri(e) {
  return !$o(e) || wn(e).position === "fixed" ? null : e.offsetParent;
}
function gf(e) {
  var t = /firefox/i.test(gr()), n = /Trident/i.test(gr());
  if (n && $o(e)) {
    var o = wn(e);
    if (o.position === "fixed")
      return null;
  }
  var i = vf(e);
  for (Fr(i) && (i = i.host); $o(i) && ["html", "body"].indexOf(bn(i)) < 0; ) {
    var r = wn(i);
    if (r.transform !== "none" || r.perspective !== "none" || r.contain === "paint" || ["transform", "perspective"].indexOf(r.willChange) !== -1 || t && r.willChange === "filter" || t && r.filter && r.filter !== "none")
      return i;
    i = i.parentNode;
  }
  return null;
}
function mf(e) {
  for (var t = Ot(e), n = ri(e); n && pf(n) && wn(n).position === "static"; )
    n = ri(n);
  return n && (bn(n) === "html" || bn(n) === "body" && wn(n).position === "static") ? t : n || gf(e) || t;
}
function yf(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function bf(e, t, n) {
  return af(e, cf(t, n));
}
function wf() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
function kf(e) {
  return Object.assign({}, wf(), e);
}
function $f(e, t) {
  return t.reduce(function(n, o) {
    return n[o] = e, n;
  }, {});
}
var xf = function(t, n) {
  return t = typeof t == "function" ? t(Object.assign({}, n.rects, {
    placement: n.placement
  })) : t, kf(typeof t != "number" ? t : $f(t, ka));
};
function Cf(e) {
  var t, n = e.state, o = e.name, i = e.options, r = n.elements.arrow, l = n.modifiersData.popperOffsets, c = $a(n.placement), _ = yf(c), h = [yn, ko].indexOf(c) >= 0, s = h ? "height" : "width";
  if (!(!r || !l)) {
    var p = xf(i.padding, n), f = uf(r), a = _ === "y" ? zr : yn, u = _ === "y" ? wa : ko, m = n.rects.reference[s] + n.rects.reference[_] - l[_] - n.rects.popper[s], d = l[_] - n.rects.reference[_], v = mf(r), g = v ? _ === "y" ? v.clientHeight || 0 : v.clientWidth || 0 : 0, k = m / 2 - d / 2, w = p[a], E = g - f[s] - p[u], $ = g / 2 - f[s] / 2 + k, x = bf(w, $, E), b = _;
    n.modifiersData[o] = (t = {}, t[b] = x, t.centerOffset = x - $, t);
  }
}
function Ef(e) {
  var t = e.state, n = e.options, o = n.element, i = o === void 0 ? "[data-popper-arrow]" : o;
  i != null && (typeof i == "string" && (i = t.elements.popper.querySelector(i), !i) || !hf(t.elements.popper, i) || (t.elements.arrow = i));
}
const Sf = {
  name: "arrow",
  enabled: !0,
  phase: "main",
  fn: Cf,
  effect: Ef,
  requires: ["popperOffsets"],
  requiresIfExists: ["preventOverflow"]
};
function Mf(e, t, n) {
  var o = $a(e), i = [yn, zr].indexOf(o) >= 0 ? -1 : 1, r = typeof n == "function" ? n(Object.assign({}, t, {
    placement: e
  })) : n, l = r[0], c = r[1];
  return l = l || 0, c = (c || 0) * i, [yn, ko].indexOf(o) >= 0 ? {
    x: c,
    y: l
  } : {
    x: l,
    y: c
  };
}
function Tf(e) {
  var t = e.state, n = e.options, o = e.name, i = n.offset, r = i === void 0 ? [0, 0] : i, l = lf.reduce(function(s, p) {
    return s[p] = Mf(p, t.rects, r), s;
  }, {}), c = l[t.placement], _ = c.x, h = c.y;
  t.modifiersData.popperOffsets != null && (t.modifiersData.popperOffsets.x += _, t.modifiersData.popperOffsets.y += h), t.modifiersData[o] = l;
}
const Af = {
  name: "offset",
  enabled: !0,
  phase: "main",
  requires: ["popperOffsets"],
  fn: Tf
};
var Zo, W, Ca, sn, si, xo = {}, Ea = [], Nf = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function Ze(e, t) {
  for (var n in t)
    e[n] = t[n];
  return e;
}
function Sa(e) {
  var t = e.parentNode;
  t && t.removeChild(e);
}
function Vr(e, t, n) {
  var o, i, r, l = {};
  for (r in t)
    r == "key" ? o = t[r] : r == "ref" ? i = t[r] : l[r] = t[r];
  if (arguments.length > 2 && (l.children = arguments.length > 3 ? Zo.call(arguments, 2) : n), typeof e == "function" && e.defaultProps != null)
    for (r in e.defaultProps)
      l[r] === void 0 && (l[r] = e.defaultProps[r]);
  return Zn(e, l, o, i, null);
}
function Zn(e, t, n, o, i) {
  var r = { type: e, props: t, key: n, ref: o, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: i == null ? ++Ca : i };
  return i == null && W.vnode != null && W.vnode(r), r;
}
function Qo(e) {
  return e.children;
}
function Qn(e, t) {
  this.props = e, this.context = t;
}
function kn(e, t) {
  if (t == null)
    return e.__ ? kn(e.__, e.__.__k.indexOf(e) + 1) : null;
  for (var n; t < e.__k.length; t++)
    if ((n = e.__k[t]) != null && n.__e != null)
      return n.__e;
  return typeof e.type == "function" ? kn(e) : null;
}
function Ma(e) {
  var t, n;
  if ((e = e.__) != null && e.__c != null) {
    for (e.__e = e.__c.base = null, t = 0; t < e.__k.length; t++)
      if ((n = e.__k[t]) != null && n.__e != null) {
        e.__e = e.__c.base = n.__e;
        break;
      }
    return Ma(e);
  }
}
function ii(e) {
  (!e.__d && (e.__d = !0) && sn.push(e) && !Co.__r++ || si !== W.debounceRendering) && ((si = W.debounceRendering) || setTimeout)(Co);
}
function Co() {
  for (var e; Co.__r = sn.length; )
    e = sn.sort(function(t, n) {
      return t.__v.__b - n.__v.__b;
    }), sn = [], e.some(function(t) {
      var n, o, i, r, l, c;
      t.__d && (l = (r = (n = t).__v).__e, (c = n.__P) && (o = [], (i = Ze({}, r)).__v = r.__v + 1, qr(c, r, i, n.__n, c.ownerSVGElement !== void 0, r.__h != null ? [l] : null, o, l == null ? kn(r) : l, r.__h), Ra(o, r), r.__e != l && Ma(r)));
    });
}
function Ta(e, t, n, o, i, r, l, c, _, h) {
  var s, p, f, a, u, m, d, v = o && o.__k || Ea, g = v.length;
  for (n.__k = [], s = 0; s < t.length; s++)
    if ((a = n.__k[s] = (a = t[s]) == null || typeof a == "boolean" ? null : typeof a == "string" || typeof a == "number" || typeof a == "bigint" ? Zn(null, a, null, null, a) : Array.isArray(a) ? Zn(Qo, { children: a }, null, null, null) : a.__b > 0 ? Zn(a.type, a.props, a.key, a.ref ? a.ref : null, a.__v) : a) != null) {
      if (a.__ = n, a.__b = n.__b + 1, (f = v[s]) === null || f && a.key == f.key && a.type === f.type)
        v[s] = void 0;
      else
        for (p = 0; p < g; p++) {
          if ((f = v[p]) && a.key == f.key && a.type === f.type) {
            v[p] = void 0;
            break;
          }
          f = null;
        }
      qr(e, a, f = f || xo, i, r, l, c, _, h), u = a.__e, (p = a.ref) && f.ref != p && (d || (d = []), f.ref && d.push(f.ref, null, a), d.push(p, a.__c || u, a)), u != null ? (m == null && (m = u), typeof a.type == "function" && a.__k === f.__k ? a.__d = _ = Aa(a, _, e) : _ = Na(e, a, f, v, u, _), typeof n.type == "function" && (n.__d = _)) : _ && f.__e == _ && _.parentNode != e && (_ = kn(f));
    }
  for (n.__e = m, s = g; s--; )
    v[s] != null && La(v[s], v[s]);
  if (d)
    for (s = 0; s < d.length; s++)
      Pa(d[s], d[++s], d[++s]);
}
function Aa(e, t, n) {
  for (var o, i = e.__k, r = 0; i && r < i.length; r++)
    (o = i[r]) && (o.__ = e, t = typeof o.type == "function" ? Aa(o, t, n) : Na(n, o, o, i, o.__e, t));
  return t;
}
function Na(e, t, n, o, i, r) {
  var l, c, _;
  if (t.__d !== void 0)
    l = t.__d, t.__d = void 0;
  else if (n == null || i != r || i.parentNode == null)
    e:
      if (r == null || r.parentNode !== e)
        e.appendChild(i), l = null;
      else {
        for (c = r, _ = 0; (c = c.nextSibling) && _ < o.length; _ += 2)
          if (c == i)
            break e;
        e.insertBefore(i, r), l = r;
      }
  return l !== void 0 ? l : i.nextSibling;
}
function Rf(e, t, n, o, i) {
  var r;
  for (r in n)
    r === "children" || r === "key" || r in t || Eo(e, r, null, n[r], o);
  for (r in t)
    i && typeof t[r] != "function" || r === "children" || r === "key" || r === "value" || r === "checked" || n[r] === t[r] || Eo(e, r, t[r], n[r], o);
}
function li(e, t, n) {
  t[0] === "-" ? e.setProperty(t, n) : e[t] = n == null ? "" : typeof n != "number" || Nf.test(t) ? n : n + "px";
}
function Eo(e, t, n, o, i) {
  var r;
  e:
    if (t === "style")
      if (typeof n == "string")
        e.style.cssText = n;
      else {
        if (typeof o == "string" && (e.style.cssText = o = ""), o)
          for (t in o)
            n && t in n || li(e.style, t, "");
        if (n)
          for (t in n)
            o && n[t] === o[t] || li(e.style, t, n[t]);
      }
    else if (t[0] === "o" && t[1] === "n")
      r = t !== (t = t.replace(/Capture$/, "")), t = t.toLowerCase() in e ? t.toLowerCase().slice(2) : t.slice(2), e.l || (e.l = {}), e.l[t + r] = n, n ? o || e.addEventListener(t, r ? ci : ai, r) : e.removeEventListener(t, r ? ci : ai, r);
    else if (t !== "dangerouslySetInnerHTML") {
      if (i)
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
function ai(e) {
  this.l[e.type + !1](W.event ? W.event(e) : e);
}
function ci(e) {
  this.l[e.type + !0](W.event ? W.event(e) : e);
}
function qr(e, t, n, o, i, r, l, c, _) {
  var h, s, p, f, a, u, m, d, v, g, k, w, E, $, x, b = t.type;
  if (t.constructor !== void 0)
    return null;
  n.__h != null && (_ = n.__h, c = t.__e = n.__e, t.__h = null, r = [c]), (h = W.__b) && h(t);
  try {
    e:
      if (typeof b == "function") {
        if (d = t.props, v = (h = b.contextType) && o[h.__c], g = h ? v ? v.props.value : h.__ : o, n.__c ? m = (s = t.__c = n.__c).__ = s.__E : ("prototype" in b && b.prototype.render ? t.__c = s = new b(d, g) : (t.__c = s = new Qn(d, g), s.constructor = b, s.render = Lf), v && v.sub(s), s.props = d, s.state || (s.state = {}), s.context = g, s.__n = o, p = s.__d = !0, s.__h = [], s._sb = []), s.__s == null && (s.__s = s.state), b.getDerivedStateFromProps != null && (s.__s == s.state && (s.__s = Ze({}, s.__s)), Ze(s.__s, b.getDerivedStateFromProps(d, s.__s))), f = s.props, a = s.state, p)
          b.getDerivedStateFromProps == null && s.componentWillMount != null && s.componentWillMount(), s.componentDidMount != null && s.__h.push(s.componentDidMount);
        else {
          if (b.getDerivedStateFromProps == null && d !== f && s.componentWillReceiveProps != null && s.componentWillReceiveProps(d, g), !s.__e && s.shouldComponentUpdate != null && s.shouldComponentUpdate(d, s.__s, g) === !1 || t.__v === n.__v) {
            for (s.props = d, s.state = s.__s, t.__v !== n.__v && (s.__d = !1), s.__v = t, t.__e = n.__e, t.__k = n.__k, t.__k.forEach(function(C) {
              C && (C.__ = t);
            }), k = 0; k < s._sb.length; k++)
              s.__h.push(s._sb[k]);
            s._sb = [], s.__h.length && l.push(s);
            break e;
          }
          s.componentWillUpdate != null && s.componentWillUpdate(d, s.__s, g), s.componentDidUpdate != null && s.__h.push(function() {
            s.componentDidUpdate(f, a, u);
          });
        }
        if (s.context = g, s.props = d, s.__v = t, s.__P = e, w = W.__r, E = 0, "prototype" in b && b.prototype.render) {
          for (s.state = s.__s, s.__d = !1, w && w(t), h = s.render(s.props, s.state, s.context), $ = 0; $ < s._sb.length; $++)
            s.__h.push(s._sb[$]);
          s._sb = [];
        } else
          do
            s.__d = !1, w && w(t), h = s.render(s.props, s.state, s.context), s.state = s.__s;
          while (s.__d && ++E < 25);
        s.state = s.__s, s.getChildContext != null && (o = Ze(Ze({}, o), s.getChildContext())), p || s.getSnapshotBeforeUpdate == null || (u = s.getSnapshotBeforeUpdate(f, a)), x = h != null && h.type === Qo && h.key == null ? h.props.children : h, Ta(e, Array.isArray(x) ? x : [x], t, n, o, i, r, l, c, _), s.base = t.__e, t.__h = null, s.__h.length && l.push(s), m && (s.__E = s.__ = null), s.__e = !1;
      } else
        r == null && t.__v === n.__v ? (t.__k = n.__k, t.__e = n.__e) : t.__e = Pf(n.__e, t, n, o, i, r, l, _);
    (h = W.diffed) && h(t);
  } catch (C) {
    t.__v = null, (_ || r != null) && (t.__e = c, t.__h = !!_, r[r.indexOf(c)] = null), W.__e(C, t, n);
  }
}
function Ra(e, t) {
  W.__c && W.__c(t, e), e.some(function(n) {
    try {
      e = n.__h, n.__h = [], e.some(function(o) {
        o.call(n);
      });
    } catch (o) {
      W.__e(o, n.__v);
    }
  });
}
function Pf(e, t, n, o, i, r, l, c) {
  var _, h, s, p = n.props, f = t.props, a = t.type, u = 0;
  if (a === "svg" && (i = !0), r != null) {
    for (; u < r.length; u++)
      if ((_ = r[u]) && "setAttribute" in _ == !!a && (a ? _.localName === a : _.nodeType === 3)) {
        e = _, r[u] = null;
        break;
      }
  }
  if (e == null) {
    if (a === null)
      return document.createTextNode(f);
    e = i ? document.createElementNS("http://www.w3.org/2000/svg", a) : document.createElement(a, f.is && f), r = null, c = !1;
  }
  if (a === null)
    p === f || c && e.data === f || (e.data = f);
  else {
    if (r = r && Zo.call(e.childNodes), h = (p = n.props || xo).dangerouslySetInnerHTML, s = f.dangerouslySetInnerHTML, !c) {
      if (r != null)
        for (p = {}, u = 0; u < e.attributes.length; u++)
          p[e.attributes[u].name] = e.attributes[u].value;
      (s || h) && (s && (h && s.__html == h.__html || s.__html === e.innerHTML) || (e.innerHTML = s && s.__html || ""));
    }
    if (Rf(e, f, p, i, c), s)
      t.__k = [];
    else if (u = t.props.children, Ta(e, Array.isArray(u) ? u : [u], t, n, o, i && a !== "foreignObject", r, l, r ? r[0] : n.__k && kn(n, 0), c), r != null)
      for (u = r.length; u--; )
        r[u] != null && Sa(r[u]);
    c || ("value" in f && (u = f.value) !== void 0 && (u !== e.value || a === "progress" && !u || a === "option" && u !== p.value) && Eo(e, "value", u, p.value, !1), "checked" in f && (u = f.checked) !== void 0 && u !== e.checked && Eo(e, "checked", u, p.checked, !1));
  }
  return e;
}
function Pa(e, t, n) {
  try {
    typeof e == "function" ? e(t) : e.current = t;
  } catch (o) {
    W.__e(o, n);
  }
}
function La(e, t, n) {
  var o, i;
  if (W.unmount && W.unmount(e), (o = e.ref) && (o.current && o.current !== e.__e || Pa(o, null, t)), (o = e.__c) != null) {
    if (o.componentWillUnmount)
      try {
        o.componentWillUnmount();
      } catch (r) {
        W.__e(r, t);
      }
    o.base = o.__P = null, e.__c = void 0;
  }
  if (o = e.__k)
    for (i = 0; i < o.length; i++)
      o[i] && La(o[i], t, n || typeof e.type != "function");
  n || e.__e == null || Sa(e.__e), e.__ = e.__e = e.__d = void 0;
}
function Lf(e, t, n) {
  return this.constructor(e, n);
}
function Of(e, t, n) {
  var o, i, r;
  W.__ && W.__(e, t), i = (o = typeof n == "function") ? null : n && n.__k || t.__k, r = [], qr(t, e = (!o && n || t).__k = Vr(Qo, null, [e]), i || xo, xo, t.ownerSVGElement !== void 0, !o && n ? [n] : i ? null : t.firstChild ? Zo.call(t.childNodes) : null, r, !o && n ? n : i ? i.__e : t.firstChild, o), Ra(r, e);
}
Zo = Ea.slice, W = { __e: function(e, t, n, o) {
  for (var i, r, l; t = t.__; )
    if ((i = t.__c) && !i.__)
      try {
        if ((r = i.constructor) && r.getDerivedStateFromError != null && (i.setState(r.getDerivedStateFromError(e)), l = i.__d), i.componentDidCatch != null && (i.componentDidCatch(e, o || {}), l = i.__d), l)
          return i.__E = i;
      } catch (c) {
        e = c;
      }
  throw e;
} }, Ca = 0, Qn.prototype.setState = function(e, t) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = Ze({}, this.state), typeof e == "function" && (e = e(Ze({}, n), this.props)), e && Ze(n, e), e != null && this.__v && (t && this._sb.push(t), ii(this));
}, Qn.prototype.forceUpdate = function(e) {
  this.__v && (this.__e = !0, e && this.__h.push(e), ii(this));
}, Qn.prototype.render = Qo, sn = [], Co.__r = 0;
function fe(e) {
  if (e == null)
    return window;
  if (e.toString() !== "[object Window]") {
    var t = e.ownerDocument;
    return t && t.defaultView || window;
  }
  return e;
}
function dt(e) {
  var t = fe(e).Element;
  return e instanceof t || e instanceof Element;
}
function _e(e) {
  var t = fe(e).HTMLElement;
  return e instanceof t || e instanceof HTMLElement;
}
function Gr(e) {
  if (typeof ShadowRoot > "u")
    return !1;
  var t = fe(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot;
}
var ht = Math.max, So = Math.min, Nt = Math.round;
function mr() {
  var e = navigator.userAgentData;
  return e != null && e.brands ? e.brands.map(function(t) {
    return t.brand + "/" + t.version;
  }).join(" ") : navigator.userAgent;
}
function Oa() {
  return !/^((?!chrome|android).)*safari/i.test(mr());
}
function Rt(e, t, n) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  var o = e.getBoundingClientRect(), i = 1, r = 1;
  t && _e(e) && (i = e.offsetWidth > 0 && Nt(o.width) / e.offsetWidth || 1, r = e.offsetHeight > 0 && Nt(o.height) / e.offsetHeight || 1);
  var l = dt(e) ? fe(e) : window, c = l.visualViewport, _ = !Oa() && n, h = (o.left + (_ && c ? c.offsetLeft : 0)) / i, s = (o.top + (_ && c ? c.offsetTop : 0)) / r, p = o.width / i, f = o.height / r;
  return {
    width: p,
    height: f,
    top: s,
    right: h + p,
    bottom: s + f,
    left: h,
    x: h,
    y: s
  };
}
function Yr(e) {
  var t = fe(e), n = t.pageXOffset, o = t.pageYOffset;
  return {
    scrollLeft: n,
    scrollTop: o
  };
}
function Df(e) {
  return {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  };
}
function Hf(e) {
  return e === fe(e) || !_e(e) ? Yr(e) : Df(e);
}
function ke(e) {
  return e ? (e.nodeName || "").toLowerCase() : null;
}
function rt(e) {
  return ((dt(e) ? e.ownerDocument : e.document) || window.document).documentElement;
}
function Kr(e) {
  return Rt(rt(e)).left + Yr(e).scrollLeft;
}
function De(e) {
  return fe(e).getComputedStyle(e);
}
function Xr(e) {
  var t = De(e), n = t.overflow, o = t.overflowX, i = t.overflowY;
  return /auto|scroll|overlay|hidden/.test(n + i + o);
}
function Wf(e) {
  var t = e.getBoundingClientRect(), n = Nt(t.width) / e.offsetWidth || 1, o = Nt(t.height) / e.offsetHeight || 1;
  return n !== 1 || o !== 1;
}
function If(e, t, n) {
  n === void 0 && (n = !1);
  var o = _e(t), i = _e(t) && Wf(t), r = rt(t), l = Rt(e, i, n), c = {
    scrollLeft: 0,
    scrollTop: 0
  }, _ = {
    x: 0,
    y: 0
  };
  return (o || !o && !n) && ((ke(t) !== "body" || Xr(r)) && (c = Hf(t)), _e(t) ? (_ = Rt(t, !0), _.x += t.clientLeft, _.y += t.clientTop) : r && (_.x = Kr(r))), {
    x: l.left + c.scrollLeft - _.x,
    y: l.top + c.scrollTop - _.y,
    width: l.width,
    height: l.height
  };
}
function Da(e) {
  var t = Rt(e), n = e.offsetWidth, o = e.offsetHeight;
  return Math.abs(t.width - n) <= 1 && (n = t.width), Math.abs(t.height - o) <= 1 && (o = t.height), {
    x: e.offsetLeft,
    y: e.offsetTop,
    width: n,
    height: o
  };
}
function er(e) {
  return ke(e) === "html" ? e : e.assignedSlot || e.parentNode || (Gr(e) ? e.host : null) || rt(e);
}
function Ha(e) {
  return ["html", "body", "#document"].indexOf(ke(e)) >= 0 ? e.ownerDocument.body : _e(e) && Xr(e) ? e : Ha(er(e));
}
function ln(e, t) {
  var n;
  t === void 0 && (t = []);
  var o = Ha(e), i = o === ((n = e.ownerDocument) == null ? void 0 : n.body), r = fe(o), l = i ? [r].concat(r.visualViewport || [], Xr(o) ? o : []) : o, c = t.concat(l);
  return i ? c : c.concat(ln(er(l)));
}
function Uf(e) {
  return ["table", "td", "th"].indexOf(ke(e)) >= 0;
}
function _i(e) {
  return !_e(e) || De(e).position === "fixed" ? null : e.offsetParent;
}
function jf(e) {
  var t = /firefox/i.test(mr()), n = /Trident/i.test(mr());
  if (n && _e(e)) {
    var o = De(e);
    if (o.position === "fixed")
      return null;
  }
  var i = er(e);
  for (Gr(i) && (i = i.host); _e(i) && ["html", "body"].indexOf(ke(i)) < 0; ) {
    var r = De(i);
    if (r.transform !== "none" || r.perspective !== "none" || r.contain === "paint" || ["transform", "perspective"].indexOf(r.willChange) !== -1 || t && r.willChange === "filter" || t && r.filter && r.filter !== "none")
      return i;
    i = i.parentNode;
  }
  return null;
}
function tr(e) {
  for (var t = fe(e), n = _i(e); n && Uf(n) && De(n).position === "static"; )
    n = _i(n);
  return n && (ke(n) === "html" || ke(n) === "body" && De(n).position === "static") ? t : n || jf(e) || t;
}
var de = "top", $e = "bottom", ot = "right", Oe = "left", Jr = "auto", nr = [de, $e, ot, Oe], Pt = "start", $n = "end", Bf = "clippingParents", Wa = "viewport", Bt = "popper", zf = "reference", fi = /* @__PURE__ */ nr.reduce(function(e, t) {
  return e.concat([t + "-" + Pt, t + "-" + $n]);
}, []), Ff = /* @__PURE__ */ [].concat(nr, [Jr]).reduce(function(e, t) {
  return e.concat([t, t + "-" + Pt, t + "-" + $n]);
}, []), Vf = "beforeRead", qf = "read", Gf = "afterRead", Yf = "beforeMain", Kf = "main", Xf = "afterMain", Jf = "beforeWrite", Zf = "write", Qf = "afterWrite", eu = [Vf, qf, Gf, Yf, Kf, Xf, Jf, Zf, Qf];
function tu(e) {
  var t = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Set(), o = [];
  e.forEach(function(r) {
    t.set(r.name, r);
  });
  function i(r) {
    n.add(r.name);
    var l = [].concat(r.requires || [], r.requiresIfExists || []);
    l.forEach(function(c) {
      if (!n.has(c)) {
        var _ = t.get(c);
        _ && i(_);
      }
    }), o.push(r);
  }
  return e.forEach(function(r) {
    n.has(r.name) || i(r);
  }), o;
}
function nu(e) {
  var t = tu(e);
  return eu.reduce(function(n, o) {
    return n.concat(t.filter(function(i) {
      return i.phase === o;
    }));
  }, []);
}
function ou(e) {
  var t;
  return function() {
    return t || (t = new Promise(function(n) {
      Promise.resolve().then(function() {
        t = void 0, n(e());
      });
    })), t;
  };
}
function nt(e) {
  return e.split("-")[0];
}
function ru(e) {
  var t = e.reduce(function(n, o) {
    var i = n[o.name];
    return n[o.name] = i ? Object.assign({}, i, o, {
      options: Object.assign({}, i.options, o.options),
      data: Object.assign({}, i.data, o.data)
    }) : o, n;
  }, {});
  return Object.keys(t).map(function(n) {
    return t[n];
  });
}
function su(e, t) {
  var n = fe(e), o = rt(e), i = n.visualViewport, r = o.clientWidth, l = o.clientHeight, c = 0, _ = 0;
  if (i) {
    r = i.width, l = i.height;
    var h = Oa();
    (h || !h && t === "fixed") && (c = i.offsetLeft, _ = i.offsetTop);
  }
  return {
    width: r,
    height: l,
    x: c + Kr(e),
    y: _
  };
}
function iu(e) {
  var t, n = rt(e), o = Yr(e), i = (t = e.ownerDocument) == null ? void 0 : t.body, r = ht(n.scrollWidth, n.clientWidth, i ? i.scrollWidth : 0, i ? i.clientWidth : 0), l = ht(n.scrollHeight, n.clientHeight, i ? i.scrollHeight : 0, i ? i.clientHeight : 0), c = -o.scrollLeft + Kr(e), _ = -o.scrollTop;
  return De(i || n).direction === "rtl" && (c += ht(n.clientWidth, i ? i.clientWidth : 0) - r), {
    width: r,
    height: l,
    x: c,
    y: _
  };
}
function lu(e, t) {
  var n = t.getRootNode && t.getRootNode();
  if (e.contains(t))
    return !0;
  if (n && Gr(n)) {
    var o = t;
    do {
      if (o && e.isSameNode(o))
        return !0;
      o = o.parentNode || o.host;
    } while (o);
  }
  return !1;
}
function yr(e) {
  return Object.assign({}, e, {
    left: e.x,
    top: e.y,
    right: e.x + e.width,
    bottom: e.y + e.height
  });
}
function au(e, t) {
  var n = Rt(e, !1, t === "fixed");
  return n.top = n.top + e.clientTop, n.left = n.left + e.clientLeft, n.bottom = n.top + e.clientHeight, n.right = n.left + e.clientWidth, n.width = e.clientWidth, n.height = e.clientHeight, n.x = n.left, n.y = n.top, n;
}
function ui(e, t, n) {
  return t === Wa ? yr(su(e, n)) : dt(t) ? au(t, n) : yr(iu(rt(e)));
}
function cu(e) {
  var t = ln(er(e)), n = ["absolute", "fixed"].indexOf(De(e).position) >= 0, o = n && _e(e) ? tr(e) : e;
  return dt(o) ? t.filter(function(i) {
    return dt(i) && lu(i, o) && ke(i) !== "body";
  }) : [];
}
function _u(e, t, n, o) {
  var i = t === "clippingParents" ? cu(e) : [].concat(t), r = [].concat(i, [n]), l = r[0], c = r.reduce(function(_, h) {
    var s = ui(e, h, o);
    return _.top = ht(s.top, _.top), _.right = So(s.right, _.right), _.bottom = So(s.bottom, _.bottom), _.left = ht(s.left, _.left), _;
  }, ui(e, l, o));
  return c.width = c.right - c.left, c.height = c.bottom - c.top, c.x = c.left, c.y = c.top, c;
}
function Lt(e) {
  return e.split("-")[1];
}
function Ia(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function Ua(e) {
  var t = e.reference, n = e.element, o = e.placement, i = o ? nt(o) : null, r = o ? Lt(o) : null, l = t.x + t.width / 2 - n.width / 2, c = t.y + t.height / 2 - n.height / 2, _;
  switch (i) {
    case de:
      _ = {
        x: l,
        y: t.y - n.height
      };
      break;
    case $e:
      _ = {
        x: l,
        y: t.y + t.height
      };
      break;
    case ot:
      _ = {
        x: t.x + t.width,
        y: c
      };
      break;
    case Oe:
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
  var h = i ? Ia(i) : null;
  if (h != null) {
    var s = h === "y" ? "height" : "width";
    switch (r) {
      case Pt:
        _[h] = _[h] - (t[s] / 2 - n[s] / 2);
        break;
      case $n:
        _[h] = _[h] + (t[s] / 2 - n[s] / 2);
        break;
    }
  }
  return _;
}
function ja() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
function fu(e) {
  return Object.assign({}, ja(), e);
}
function uu(e, t) {
  return t.reduce(function(n, o) {
    return n[o] = e, n;
  }, {});
}
function Zr(e, t) {
  t === void 0 && (t = {});
  var n = t, o = n.placement, i = o === void 0 ? e.placement : o, r = n.strategy, l = r === void 0 ? e.strategy : r, c = n.boundary, _ = c === void 0 ? Bf : c, h = n.rootBoundary, s = h === void 0 ? Wa : h, p = n.elementContext, f = p === void 0 ? Bt : p, a = n.altBoundary, u = a === void 0 ? !1 : a, m = n.padding, d = m === void 0 ? 0 : m, v = fu(typeof d != "number" ? d : uu(d, nr)), g = f === Bt ? zf : Bt, k = e.rects.popper, w = e.elements[u ? g : f], E = _u(dt(w) ? w : w.contextElement || rt(e.elements.popper), _, s, l), $ = Rt(e.elements.reference), x = Ua({
    reference: $,
    element: k,
    strategy: "absolute",
    placement: i
  }), b = yr(Object.assign({}, k, x)), C = f === Bt ? b : $, T = {
    top: E.top - C.top + v.top,
    bottom: C.bottom - E.bottom + v.bottom,
    left: E.left - C.left + v.left,
    right: C.right - E.right + v.right
  }, D = e.modifiersData.offset;
  if (f === Bt && D) {
    var J = D[i];
    Object.keys(T).forEach(function(Y) {
      var ue = [ot, $e].indexOf(Y) >= 0 ? 1 : -1, Z = [de, $e].indexOf(Y) >= 0 ? "y" : "x";
      T[Y] += J[Z] * ue;
    });
  }
  return T;
}
var hi = {
  placement: "bottom",
  modifiers: [],
  strategy: "absolute"
};
function pi() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return !t.some(function(o) {
    return !(o && typeof o.getBoundingClientRect == "function");
  });
}
function hu(e) {
  e === void 0 && (e = {});
  var t = e, n = t.defaultModifiers, o = n === void 0 ? [] : n, i = t.defaultOptions, r = i === void 0 ? hi : i;
  return function(c, _, h) {
    h === void 0 && (h = r);
    var s = {
      placement: "bottom",
      orderedModifiers: [],
      options: Object.assign({}, hi, r),
      modifiersData: {},
      elements: {
        reference: c,
        popper: _
      },
      attributes: {},
      styles: {}
    }, p = [], f = !1, a = {
      state: s,
      setOptions: function(v) {
        var g = typeof v == "function" ? v(s.options) : v;
        m(), s.options = Object.assign({}, r, s.options, g), s.scrollParents = {
          reference: dt(c) ? ln(c) : c.contextElement ? ln(c.contextElement) : [],
          popper: ln(_)
        };
        var k = nu(ru([].concat(o, s.options.modifiers)));
        return s.orderedModifiers = k.filter(function(w) {
          return w.enabled;
        }), u(), a.update();
      },
      forceUpdate: function() {
        if (!f) {
          var v = s.elements, g = v.reference, k = v.popper;
          if (!!pi(g, k)) {
            s.rects = {
              reference: If(g, tr(k), s.options.strategy === "fixed"),
              popper: Da(k)
            }, s.reset = !1, s.placement = s.options.placement, s.orderedModifiers.forEach(function(T) {
              return s.modifiersData[T.name] = Object.assign({}, T.data);
            });
            for (var w = 0; w < s.orderedModifiers.length; w++) {
              if (s.reset === !0) {
                s.reset = !1, w = -1;
                continue;
              }
              var E = s.orderedModifiers[w], $ = E.fn, x = E.options, b = x === void 0 ? {} : x, C = E.name;
              typeof $ == "function" && (s = $({
                state: s,
                options: b,
                name: C,
                instance: a
              }) || s);
            }
          }
        }
      },
      update: ou(function() {
        return new Promise(function(d) {
          a.forceUpdate(), d(s);
        });
      }),
      destroy: function() {
        m(), f = !0;
      }
    };
    if (!pi(c, _))
      return a;
    a.setOptions(h).then(function(d) {
      !f && h.onFirstUpdate && h.onFirstUpdate(d);
    });
    function u() {
      s.orderedModifiers.forEach(function(d) {
        var v = d.name, g = d.options, k = g === void 0 ? {} : g, w = d.effect;
        if (typeof w == "function") {
          var E = w({
            state: s,
            name: v,
            instance: a,
            options: k
          }), $ = function() {
          };
          p.push(E || $);
        }
      });
    }
    function m() {
      p.forEach(function(d) {
        return d();
      }), p = [];
    }
    return a;
  };
}
var Bn = {
  passive: !0
};
function pu(e) {
  var t = e.state, n = e.instance, o = e.options, i = o.scroll, r = i === void 0 ? !0 : i, l = o.resize, c = l === void 0 ? !0 : l, _ = fe(t.elements.popper), h = [].concat(t.scrollParents.reference, t.scrollParents.popper);
  return r && h.forEach(function(s) {
    s.addEventListener("scroll", n.update, Bn);
  }), c && _.addEventListener("resize", n.update, Bn), function() {
    r && h.forEach(function(s) {
      s.removeEventListener("scroll", n.update, Bn);
    }), c && _.removeEventListener("resize", n.update, Bn);
  };
}
const du = {
  name: "eventListeners",
  enabled: !0,
  phase: "write",
  fn: function() {
  },
  effect: pu,
  data: {}
};
function vu(e) {
  var t = e.state, n = e.name;
  t.modifiersData[n] = Ua({
    reference: t.rects.reference,
    element: t.rects.popper,
    strategy: "absolute",
    placement: t.placement
  });
}
const gu = {
  name: "popperOffsets",
  enabled: !0,
  phase: "read",
  fn: vu,
  data: {}
};
var mu = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function yu(e) {
  var t = e.x, n = e.y, o = window, i = o.devicePixelRatio || 1;
  return {
    x: Nt(t * i) / i || 0,
    y: Nt(n * i) / i || 0
  };
}
function di(e) {
  var t, n = e.popper, o = e.popperRect, i = e.placement, r = e.variation, l = e.offsets, c = e.position, _ = e.gpuAcceleration, h = e.adaptive, s = e.roundOffsets, p = e.isFixed, f = l.x, a = f === void 0 ? 0 : f, u = l.y, m = u === void 0 ? 0 : u, d = typeof s == "function" ? s({
    x: a,
    y: m
  }) : {
    x: a,
    y: m
  };
  a = d.x, m = d.y;
  var v = l.hasOwnProperty("x"), g = l.hasOwnProperty("y"), k = Oe, w = de, E = window;
  if (h) {
    var $ = tr(n), x = "clientHeight", b = "clientWidth";
    if ($ === fe(n) && ($ = rt(n), De($).position !== "static" && c === "absolute" && (x = "scrollHeight", b = "scrollWidth")), $ = $, i === de || (i === Oe || i === ot) && r === $n) {
      w = $e;
      var C = p && $ === E && E.visualViewport ? E.visualViewport.height : $[x];
      m -= C - o.height, m *= _ ? 1 : -1;
    }
    if (i === Oe || (i === de || i === $e) && r === $n) {
      k = ot;
      var T = p && $ === E && E.visualViewport ? E.visualViewport.width : $[b];
      a -= T - o.width, a *= _ ? 1 : -1;
    }
  }
  var D = Object.assign({
    position: c
  }, h && mu), J = s === !0 ? yu({
    x: a,
    y: m
  }) : {
    x: a,
    y: m
  };
  if (a = J.x, m = J.y, _) {
    var Y;
    return Object.assign({}, D, (Y = {}, Y[w] = g ? "0" : "", Y[k] = v ? "0" : "", Y.transform = (E.devicePixelRatio || 1) <= 1 ? "translate(" + a + "px, " + m + "px)" : "translate3d(" + a + "px, " + m + "px, 0)", Y));
  }
  return Object.assign({}, D, (t = {}, t[w] = g ? m + "px" : "", t[k] = v ? a + "px" : "", t.transform = "", t));
}
function bu(e) {
  var t = e.state, n = e.options, o = n.gpuAcceleration, i = o === void 0 ? !0 : o, r = n.adaptive, l = r === void 0 ? !0 : r, c = n.roundOffsets, _ = c === void 0 ? !0 : c, h = {
    placement: nt(t.placement),
    variation: Lt(t.placement),
    popper: t.elements.popper,
    popperRect: t.rects.popper,
    gpuAcceleration: i,
    isFixed: t.options.strategy === "fixed"
  };
  t.modifiersData.popperOffsets != null && (t.styles.popper = Object.assign({}, t.styles.popper, di(Object.assign({}, h, {
    offsets: t.modifiersData.popperOffsets,
    position: t.options.strategy,
    adaptive: l,
    roundOffsets: _
  })))), t.modifiersData.arrow != null && (t.styles.arrow = Object.assign({}, t.styles.arrow, di(Object.assign({}, h, {
    offsets: t.modifiersData.arrow,
    position: "absolute",
    adaptive: !1,
    roundOffsets: _
  })))), t.attributes.popper = Object.assign({}, t.attributes.popper, {
    "data-popper-placement": t.placement
  });
}
const wu = {
  name: "computeStyles",
  enabled: !0,
  phase: "beforeWrite",
  fn: bu,
  data: {}
};
function ku(e) {
  var t = e.state;
  Object.keys(t.elements).forEach(function(n) {
    var o = t.styles[n] || {}, i = t.attributes[n] || {}, r = t.elements[n];
    !_e(r) || !ke(r) || (Object.assign(r.style, o), Object.keys(i).forEach(function(l) {
      var c = i[l];
      c === !1 ? r.removeAttribute(l) : r.setAttribute(l, c === !0 ? "" : c);
    }));
  });
}
function $u(e) {
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
      var i = t.elements[o], r = t.attributes[o] || {}, l = Object.keys(t.styles.hasOwnProperty(o) ? t.styles[o] : n[o]), c = l.reduce(function(_, h) {
        return _[h] = "", _;
      }, {});
      !_e(i) || !ke(i) || (Object.assign(i.style, c), Object.keys(r).forEach(function(_) {
        i.removeAttribute(_);
      }));
    });
  };
}
const xu = {
  name: "applyStyles",
  enabled: !0,
  phase: "write",
  fn: ku,
  effect: $u,
  requires: ["computeStyles"]
};
var Cu = [du, gu, wu, xu], Ba = /* @__PURE__ */ hu({
  defaultModifiers: Cu
});
function Eu(e) {
  return e === "x" ? "y" : "x";
}
function eo(e, t, n) {
  return ht(e, So(t, n));
}
function Su(e, t, n) {
  var o = eo(e, t, n);
  return o > n ? n : o;
}
function Mu(e) {
  var t = e.state, n = e.options, o = e.name, i = n.mainAxis, r = i === void 0 ? !0 : i, l = n.altAxis, c = l === void 0 ? !1 : l, _ = n.boundary, h = n.rootBoundary, s = n.altBoundary, p = n.padding, f = n.tether, a = f === void 0 ? !0 : f, u = n.tetherOffset, m = u === void 0 ? 0 : u, d = Zr(t, {
    boundary: _,
    rootBoundary: h,
    padding: p,
    altBoundary: s
  }), v = nt(t.placement), g = Lt(t.placement), k = !g, w = Ia(v), E = Eu(w), $ = t.modifiersData.popperOffsets, x = t.rects.reference, b = t.rects.popper, C = typeof m == "function" ? m(Object.assign({}, t.rects, {
    placement: t.placement
  })) : m, T = typeof C == "number" ? {
    mainAxis: C,
    altAxis: C
  } : Object.assign({
    mainAxis: 0,
    altAxis: 0
  }, C), D = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null, J = {
    x: 0,
    y: 0
  };
  if (!!$) {
    if (r) {
      var Y, ue = w === "y" ? de : Oe, Z = w === "y" ? $e : ot, I = w === "y" ? "height" : "width", ne = $[w], He = ne + d[ue], Ce = ne - d[Z], vt = a ? -b[I] / 2 : 0, Ee = g === Pt ? x[I] : b[I], We = g === Pt ? -b[I] : -x[I], st = t.elements.arrow, Se = a && st ? Da(st) : {
        width: 0,
        height: 0
      }, A = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : ja(), O = A[ue], K = A[Z], Q = eo(0, x[I], Se[I]), he = k ? x[I] / 2 - vt - Q - O - T.mainAxis : Ee - Q - O - T.mainAxis, it = k ? -x[I] / 2 + vt + Q + K + T.mainAxis : We + Q + K + T.mainAxis, Me = t.elements.arrow && tr(t.elements.arrow), Ht = Me ? w === "y" ? Me.clientTop || 0 : Me.clientLeft || 0 : 0, Wn = (Y = D == null ? void 0 : D[w]) != null ? Y : 0, L = ne + he - Wn - Ht, In = ne + it - Wn, Wt = eo(a ? So(He, L) : He, ne, a ? ht(Ce, In) : Ce);
      $[w] = Wt, J[w] = Wt - ne;
    }
    if (c) {
      var It, Un = w === "x" ? de : Oe, gt = w === "x" ? $e : ot, ve = $[E], lt = E === "y" ? "height" : "width", Ut = ve + d[Un], ss = ve - d[gt], rr = [de, Oe].indexOf(v) !== -1, is = (It = D == null ? void 0 : D[E]) != null ? It : 0, ls = rr ? Ut : ve - x[lt] - b[lt] - is + T.altAxis, as = rr ? ve + x[lt] + b[lt] - is - T.altAxis : ss, cs = a && rr ? Su(ls, ve, as) : eo(a ? ls : Ut, ve, a ? as : ss);
      $[E] = cs, J[E] = cs - ve;
    }
    t.modifiersData[o] = J;
  }
}
const br = {
  name: "preventOverflow",
  enabled: !0,
  phase: "main",
  fn: Mu,
  requiresIfExists: ["offset"]
};
var Tu = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function to(e) {
  return e.replace(/left|right|bottom|top/g, function(t) {
    return Tu[t];
  });
}
var Au = {
  start: "end",
  end: "start"
};
function vi(e) {
  return e.replace(/start|end/g, function(t) {
    return Au[t];
  });
}
function Nu(e, t) {
  t === void 0 && (t = {});
  var n = t, o = n.placement, i = n.boundary, r = n.rootBoundary, l = n.padding, c = n.flipVariations, _ = n.allowedAutoPlacements, h = _ === void 0 ? Ff : _, s = Lt(o), p = s ? c ? fi : fi.filter(function(u) {
    return Lt(u) === s;
  }) : nr, f = p.filter(function(u) {
    return h.indexOf(u) >= 0;
  });
  f.length === 0 && (f = p);
  var a = f.reduce(function(u, m) {
    return u[m] = Zr(e, {
      placement: m,
      boundary: i,
      rootBoundary: r,
      padding: l
    })[nt(m)], u;
  }, {});
  return Object.keys(a).sort(function(u, m) {
    return a[u] - a[m];
  });
}
function Ru(e) {
  if (nt(e) === Jr)
    return [];
  var t = to(e);
  return [vi(e), t, vi(t)];
}
function Pu(e) {
  var t = e.state, n = e.options, o = e.name;
  if (!t.modifiersData[o]._skip) {
    for (var i = n.mainAxis, r = i === void 0 ? !0 : i, l = n.altAxis, c = l === void 0 ? !0 : l, _ = n.fallbackPlacements, h = n.padding, s = n.boundary, p = n.rootBoundary, f = n.altBoundary, a = n.flipVariations, u = a === void 0 ? !0 : a, m = n.allowedAutoPlacements, d = t.options.placement, v = nt(d), g = v === d, k = _ || (g || !u ? [to(d)] : Ru(d)), w = [d].concat(k).reduce(function(Se, A) {
      return Se.concat(nt(A) === Jr ? Nu(t, {
        placement: A,
        boundary: s,
        rootBoundary: p,
        padding: h,
        flipVariations: u,
        allowedAutoPlacements: m
      }) : A);
    }, []), E = t.rects.reference, $ = t.rects.popper, x = /* @__PURE__ */ new Map(), b = !0, C = w[0], T = 0; T < w.length; T++) {
      var D = w[T], J = nt(D), Y = Lt(D) === Pt, ue = [de, $e].indexOf(J) >= 0, Z = ue ? "width" : "height", I = Zr(t, {
        placement: D,
        boundary: s,
        rootBoundary: p,
        altBoundary: f,
        padding: h
      }), ne = ue ? Y ? ot : Oe : Y ? $e : de;
      E[Z] > $[Z] && (ne = to(ne));
      var He = to(ne), Ce = [];
      if (r && Ce.push(I[J] <= 0), c && Ce.push(I[ne] <= 0, I[He] <= 0), Ce.every(function(Se) {
        return Se;
      })) {
        C = D, b = !1;
        break;
      }
      x.set(D, Ce);
    }
    if (b)
      for (var vt = u ? 3 : 1, Ee = function(A) {
        var O = w.find(function(K) {
          var Q = x.get(K);
          if (Q)
            return Q.slice(0, A).every(function(he) {
              return he;
            });
        });
        if (O)
          return C = O, "break";
      }, We = vt; We > 0; We--) {
        var st = Ee(We);
        if (st === "break")
          break;
      }
    t.placement !== C && (t.modifiersData[o]._skip = !0, t.placement = C, t.reset = !0);
  }
}
const za = {
  name: "flip",
  enabled: !0,
  phase: "main",
  fn: Pu,
  requiresIfExists: ["offset"],
  data: {
    _skip: !1
  }
};
function Lu(e) {
  return e.button === 2;
}
var je;
class Ou extends Rr {
  constructor() {
    super(...arguments);
    M(this, je, void 0);
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
    super.componentWillUnmount(), (n = y(this, je)) == null || n.destroy();
  }
  _getPopperOptions() {
    return {
      modifiers: [br, za],
      placement: "right-start"
    };
  }
  _getPopperElement() {
    var n;
    return (n = this.ref.current) == null ? void 0 : n.parentElement;
  }
  _createPopper() {
    const n = this._getPopperOptions();
    return y(this, je) ? y(this, je).setOptions(n) : this.ref.current && N(this, je, Ba(this._getPopperElement(), this.ref.current, n)), y(this, je);
  }
  afterRender(n) {
    super.afterRender(n), this.props.controlledMenu && this._createPopper();
  }
  renderToggleIcon() {
    return /* @__PURE__ */ Vr("span", {
      class: "contextmenu-toggle-icon caret-right"
    });
  }
}
je = new WeakMap();
var Be, le, kt, Tn;
class se extends qt {
  constructor() {
    super(...arguments);
    M(this, Be, void 0);
    M(this, le, void 0);
    M(this, kt, void 0);
    M(this, Tn, void 0);
  }
  get isShown() {
    var n;
    return (n = y(this, Be)) == null ? void 0 : n.classList.contains(this.constructor.CLASS_SHOW);
  }
  get menu() {
    return y(this, Be) || this._ensureMenu();
  }
  get popper() {
    return y(this, le) ? y(this, le) : this._createPopper();
  }
  get trigger() {
    return y(this, Tn) || this.element;
  }
  get isDynamic() {
    return this.options.items || this.options.menu;
  }
  init() {
    const { element: n } = this;
    n !== document.body && !n.hasAttribute("data-toggle") && n.setAttribute("data-toggle", "contextmenu");
  }
  show(n) {
    return N(this, Tn, n), this.emit("show", { menu: this, trigger: this.trigger }).defaultPrevented || this.isDynamic && !this._renderMenu() ? !1 : (this.menu.classList.add(this.constructor.CLASS_SHOW), this._createPopper().update(), this.emit("shown", this), !0);
  }
  hide() {
    var o, i;
    return this.emit("hide", this).defaultPrevented ? !1 : ((o = y(this, le)) == null || o.destroy(), N(this, le, void 0), (i = y(this, Be)) == null || i.classList.remove(this.constructor.CLASS_SHOW), this.emit("hidden", this), !0);
  }
  toggle(n) {
    return this.isShown ? this.hide() : this.show(n);
  }
  destroy() {
    var n, o;
    (n = y(this, le)) == null || n.destroy(), super.destroy(), (o = y(this, Be)) == null || o.remove();
  }
  _ensureMenu() {
    var r, l;
    const { element: n } = this, o = this.constructor.MENU_CLASS;
    let i;
    if (this.isDynamic)
      i = document.createElement("div"), i.classList.add(o), document.body.appendChild(i);
    else if (n) {
      const c = (r = n.getAttribute("href")) != null ? r : n.dataset.target;
      if ((c == null ? void 0 : c[0]) === "#" && (i = document.querySelector(c)), !i) {
        const _ = n.nextElementSibling;
        _ != null && _.classList.contains(o) ? i = _ : i = (l = n.parentNode) == null ? void 0 : l.querySelector(`.${o}`);
      }
    }
    if (!i)
      throw new Error("ContextMenu: Cannot find menu element");
    return N(this, Be, i), i;
  }
  _getPopperOptions() {
    const { flip: n, preventOverflow: o, modifiers: i = [] } = this.options;
    return {
      modifiers: [
        o ? typeof o == "object" ? { ...br, options: o } : br : null,
        n ? za : null,
        ...i
      ].filter(Boolean),
      placement: this.options.placement,
      strategy: this.options.strategy
    };
  }
  _createPopper() {
    const n = this._getPopperOptions();
    return y(this, le) ? y(this, le).setOptions(n) : N(this, le, Ba(this._getPopperElement(), this.menu, n)), y(this, le);
  }
  _getMenuOptions() {
    const { menu: n, items: o } = this.options;
    let i = o || (n == null ? void 0 : n.items);
    if (!!i)
      return typeof i == "function" && (i = i(this)), {
        nestedTrigger: "hover",
        ...n,
        items: i
      };
  }
  _renderMenu() {
    const n = this._getMenuOptions();
    return !n || this.emit("updateMenu", { menu: n, trigger: this.trigger, contextmenu: this }).defaultPrevented ? !1 : (Of(Vr(Ou, n), this.menu), !0);
  }
  _getPopperElement() {
    return y(this, kt) || N(this, kt, {
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
    }), y(this, kt);
  }
  static clear(n) {
    var _, h;
    n instanceof Event && (n = { event: n });
    const { event: o, exclude: i, ignoreSelector: r = ".not-hide-menu" } = n || {};
    if (o && r && ((h = (_ = o.target).closest) == null ? void 0 : h.call(_, r)) || o && Lu(o))
      return;
    const l = this.getAll().entries(), c = new Set(i || []);
    for (const [s, p] of l)
      c.has(s) || p.hide();
  }
  static show(n) {
    const { event: o, ...i } = n, r = this.ensure(document.body);
    return Object.keys(i).length && r.setOptions(i), r.show(o), o == null || o.stopPropagation(), r;
  }
  static hide() {
    const n = this.get(document.body);
    return n == null || n.hide(), n;
  }
}
Be = new WeakMap(), le = new WeakMap(), kt = new WeakMap(), Tn = new WeakMap(), S(se, "NAME", "contextmenu"), S(se, "EVENTS", !0), S(se, "DEFAULT", {
  placement: "bottom-start",
  strategy: "fixed",
  flip: !0,
  preventOverflow: !0
}), S(se, "MENU_CLASS", "contextmenu"), S(se, "CLASS_SHOW", "show"), S(se, "MENU_SELECTOR", '[data-toggle="contextmenu"]:not(.disabled):not(:disabled)');
document.addEventListener("contextmenu", (e) => {
  const t = e.target;
  if (t.closest(`.${se.MENU_CLASS}`))
    return;
  const n = t.closest(se.MENU_SELECTOR);
  n && (se.ensure(n).show(e), e.preventDefault());
});
document.addEventListener("click", se.clear.bind(se));
var $t, xt, Ct, Oo, Fa, Do, Va;
const rs = class extends se {
  constructor() {
    super(...arguments);
    M(this, Oo);
    M(this, Do);
    M(this, $t, !1);
    M(this, xt, 0);
    S(this, "hideLater", () => {
      y(this, Ct).call(this), N(this, xt, window.setTimeout(this.hide.bind(this), 100));
    });
    M(this, Ct, () => {
      clearTimeout(y(this, xt)), N(this, xt, 0);
    });
  }
  get isHover() {
    return this.options.trigger === "hover";
  }
  get elementShowClass() {
    return `with-${this.constructor.NAME}-show`;
  }
  show(n, o) {
    (o == null ? void 0 : o.clearOthers) !== !1 && rs.clear({ event: o == null ? void 0 : o.event, exclude: [this.element] });
    const i = super.show(n);
    return i && (!y(this, $t) && this.isHover && X(this, Oo, Fa).call(this), this.element.classList.add(this.elementShowClass), X(this, Do, Va).call(this)), i;
  }
  hide() {
    const n = super.hide();
    return n && this.element.classList.remove(this.elementShowClass), n;
  }
  toggle(n, o) {
    return this.isShown ? this.hide() : this.show(n, { event: n, ...o });
  }
  destroy() {
    y(this, $t) && (this.element.removeEventListener("mouseleave", this.hideLater), this.menu.removeEventListener("mouseenter", y(this, Ct)), this.menu.removeEventListener("mouseleave", this.hideLater)), super.destroy();
  }
  _getArrowSize() {
    const { arrow: n } = this.options;
    return n ? typeof n == "number" ? n : 5 : 0;
  }
  _getPopperOptions() {
    var i;
    const n = super._getPopperOptions(), o = this._getArrowSize();
    return o && n.modifiers.push({ ...Sf, options: {
      padding: o,
      element: ".arrow"
    } }, {
      ...Af,
      options: {
        offset: [0, o + ((i = this.options.offset) != null ? i : 0)]
      }
    }, {
      name: "dropdown",
      enabled: !0,
      phase: "beforeWrite",
      fn: ({ state: r }) => {
        var c, _;
        const l = ((c = r.placement) == null ? void 0 : c.split("-").shift()) || "";
        (_ = this.menu.querySelector(".arrow")) == null || _.setAttribute("class", `arrow arrow-${l}`), this.element.setAttribute("data-dropdown-placement", l);
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
      n.afterRender = (...i) => {
        var l;
        const r = this.menu.querySelector(".arrow");
        r && ((l = this.menu.querySelector(".menu")) == null || l.appendChild(r), this.popper.update()), o == null || o(...i);
      };
    }
    return n;
  }
};
let ae = rs;
$t = new WeakMap(), xt = new WeakMap(), Ct = new WeakMap(), Oo = new WeakSet(), Fa = function() {
  const { menu: n } = this;
  n.addEventListener("mouseenter", y(this, Ct)), n.addEventListener("mouseleave", this.hideLater), this.element.addEventListener("mouseleave", this.hideLater), N(this, $t, !0);
}, Do = new WeakSet(), Va = function() {
  const { menu: n } = this;
  n.querySelector(".menu") && this.options.className && n.querySelector(".menu").classList.add(P([this.options.className]));
}, S(ae, "NAME", "dropdown"), S(ae, "MENU_CLASS", "dropdown-menu"), S(ae, "MENU_SELECTOR", '[data-toggle="dropdown"]:not(.disabled):not(:disabled)'), S(ae, "DEFAULT", {
  ...se.DEFAULT,
  strategy: "absolute",
  trigger: "click"
});
document.addEventListener("click", function(e) {
  const n = e.target.closest(ae.MENU_SELECTOR);
  if (n) {
    const o = ae.ensure(n);
    o.options.trigger === "click" && o.toggle();
  } else
    ae.clear({ event: e });
});
document.addEventListener("mouseover", function(e) {
  const t = e.target, n = typeof t.closest == "function" ? t.closest(ae.MENU_SELECTOR) : null;
  if (!n)
    return;
  const o = ae.ensure(n);
  o.isHover && o.show();
});
var An, Et;
class Du extends rn {
  constructor(n) {
    var o;
    super(n);
    M(this, An, void 0);
    M(this, Et, Z_());
    this.state = { placement: ((o = n.dropdown) == null ? void 0 : o.placement) || "", show: !1 };
  }
  get ref() {
    return y(this, Et);
  }
  get triggerElement() {
    return y(this, Et).current;
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
    }), N(this, An, ae.ensure(this.triggerElement, {
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
    (n = y(this, An)) == null || n.destroy();
  }
  beforeRender() {
    const { className: n, children: o, dropdown: i, ...r } = this.props;
    return {
      className: P("dropdown", n),
      children: typeof o == "function" ? o(this.state) : o,
      ...r,
      "data-toggle": "dropdown",
      "data-dropdown-placement": this.state.placement,
      ref: y(this, Et)
    };
  }
  render() {
    const { children: n, ...o } = this.beforeRender();
    return /* @__PURE__ */ ha("div", {
      ...o
    }, n);
  }
}
An = new WeakMap(), Et = new WeakMap();
class Hu extends Du {
  get triggerElement() {
    return this.ref.current.base;
  }
  render() {
    var r;
    const { placement: t, show: n } = this.state, o = this.beforeRender();
    let { caret: i = !0 } = o;
    if (i !== !1 && (n || i === !0)) {
      const l = n ? t : (r = this.props.dropdown) == null ? void 0 : r.placement;
      i = (l === "top" ? "up" : l === "bottom" ? "down" : l) || (typeof i == "string" ? i : "") || "down";
    }
    return o.caret = i, /* @__PURE__ */ ha(pt, {
      ...o
    });
  }
}
function qa({
  key: e,
  type: t,
  btnType: n,
  ...o
}) {
  return /* @__PURE__ */ Jo(Hu, {
    type: n,
    ...o
  });
}
function Wu({
  key: e,
  type: t,
  btnType: n,
  ...o
}) {
  return /* @__PURE__ */ Jo(na, {
    type: n,
    ...o
  });
}
class at extends Le {
  beforeRender() {
    const { gap: t, btnProps: n, wrap: o, ...i } = super.beforeRender();
    return i.className = P(i.className, o ? "flex-wrap" : "", typeof t == "number" ? `gap-${t}` : ""), typeof t == "string" && (i.style ? i.style.gap = t : i.style = { gap: t }), i;
  }
  isBtnItem(t) {
    return t === "item" || t === "dropdown";
  }
  renderTypedItem(t, n, o) {
    const i = this.isBtnItem(o.type) ? { btnType: "ghost", ...this.props.btnProps } : {}, r = {
      ...n,
      ...i,
      ...o,
      className: P(`${this.name}-${o.type}`, n.className, i.className, o.className),
      style: Object.assign({}, n.style, i.style, o.style)
    };
    return /* @__PURE__ */ Jo(t, {
      ...r
    });
  }
}
S(at, "ItemComponents", {
  item: X_,
  dropdown: qa,
  "btn-group": Wu
}), S(at, "ROOT_TAG", "nav"), S(at, "NAME", "toolbar"), S(at, "defaultProps", {
  btnProps: {
    btnType: "ghost"
  }
});
function or(e, t) {
  const n = e.pageTotal || Math.ceil(e.recTotal / e.recPerPage);
  return typeof t == "string" && (t === "first" ? t = 1 : t === "last" ? t = n : t === "prev" ? t = e.page - 1 : t === "next" ? t = e.page + 1 : t === "current" ? t = e.page : t = Number.parseInt(t, 10)), t = t !== void 0 ? Math.max(1, Math.min(t < 0 ? n + t : t, n)) : e.page, {
    ...e,
    pageTotal: n,
    page: t
  };
}
function Iu({
  key: e,
  type: t,
  btnType: n,
  page: o,
  format: i,
  pagerInfo: r,
  linkCreator: l,
  ...c
}) {
  const _ = or(r, o);
  return c.text === void 0 && !c.icon && i && (c.text = typeof i == "function" ? i(_) : ce(i, _)), c.url === void 0 && l && (c.url = typeof l == "function" ? l(_) : ce(l, _)), c.disabled === void 0 && (c.disabled = o !== void 0 && _.page === r.page), /* @__PURE__ */ tt(pt, {
    type: n,
    ...c
  });
}
const Te = 24 * 60 * 60 * 1e3, ie = (e) => e ? (e instanceof Date || (typeof e == "string" && (e = e.trim(), /^\d+$/.test(e) && (e = Number.parseInt(e, 10))), typeof e == "number" && e < 1e10 && (e *= 1e3), e = new Date(e)), e) : new Date(), Hn = (e, t = new Date()) => (e = ie(e), t = ie(t), e.getFullYear() === t.getFullYear() && e.getMonth() === t.getMonth() && e.getDate() === t.getDate()), gi = (e, t = new Date()) => ie(e).getFullYear() === ie(t).getFullYear(), Uu = (e, t = new Date()) => (e = ie(e), t = ie(t), e.getFullYear() === t.getFullYear() && e.getMonth() === t.getMonth()), Sh = (e, t = new Date()) => {
  e = ie(e), t = ie(t);
  const n = 1e3 * 60 * 60 * 24, o = Math.floor(e.getTime() / n), i = Math.floor(t.getTime() / n);
  return Math.floor((o + 4) / 7) === Math.floor((i + 4) / 7);
}, Mh = (e, t) => Hn(ie(t), e), Th = (e, t) => Hn(ie(t).getTime() - Te, e), Ah = (e, t) => Hn(ie(t).getTime() + Te, e), Nh = (e, t) => Hn(ie(t).getTime() - 2 * Te, e), wr = (e, t = "yyyy-MM-dd hh:mm") => {
  e = ie(e);
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
      const i = `${n[o]}`;
      t = t.replace(RegExp.$1, RegExp.$1.length === 1 ? i : `00${i}`.substring(i.length));
    }
  }), t;
}, Rh = (e, t, n) => {
  const o = {
    full: "yyyy-M-d",
    month: "M-d",
    day: "d",
    str: "{0} ~ {1}",
    ...n
  }, i = wr(e, gi(e) ? o.month : o.full);
  if (Hn(e, t))
    return i;
  const r = wr(t, gi(e, t) ? Uu(e, t) ? o.day : o.month : o.full);
  return o.str.replace("{0}", i).replace("{1}", r);
}, Ph = (e) => {
  const t = new Date().getTime();
  switch (e) {
    case "oneWeek":
      return t - Te * 7;
    case "oneMonth":
      return t - Te * 31;
    case "threeMonth":
      return t - Te * 31 * 3;
    case "halfYear":
      return t - Te * 183;
    case "oneYear":
      return t - Te * 365;
    case "twoYear":
      return t - 2 * (Te * 365);
    default:
      return 0;
  }
}, mi = (e, t, n = !0, o = Date.now()) => {
  switch (t) {
    case "year":
      return e *= 365, mi(e, "day", n, o);
    case "quarter":
      e *= 3;
    case "month":
      return e *= 30, mi(e, "day", n, o);
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
function ju({
  key: e,
  type: t,
  page: n,
  text: o = "",
  pagerInfo: i,
  children: r,
  ...l
}) {
  const c = or(i, n);
  return o = typeof o == "function" ? o(c) : ce(o, c), /* @__PURE__ */ tt(al, {
    ...l
  }, r, o);
}
function Bu({
  key: e,
  type: t,
  btnType: n,
  count: o = 12,
  pagerInfo: i,
  linkCreator: r,
  ...l
}) {
  if (i.pageTotal) {
    const c = (h, s) => {
      if (h) {
        const p = [];
        for (let f = h; f <= s; f++) {
          l.text = f, delete l.icon, l.disabled = !1;
          const a = or(i, f);
          r && (l.url = typeof r == "function" ? r(a) : ce(r, a)), p.push(/* @__PURE__ */ tt(pt, {
            type: n,
            ...l
          }));
        }
        return p;
      } else
        return l.text = "", l.icon = "icon-ellipsis-h", l.disabled = !0, /* @__PURE__ */ tt(pt, {
          type: n,
          ...l
        });
    };
    return (() => {
      const h = [];
      return h.push(c(1, 1)), i.pageTotal > 1 && (i.pageTotal <= o ? h.push(c(2, i.pageTotal)) : i.page < o - 2 ? (h.push(c(2, o - 2)), h.push(c(0, 0)), h.push(c(i.pageTotal, i.pageTotal))) : i.page > i.pageTotal - o + 3 ? (h.push(c(0, 0)), h.push(c(i.pageTotal - o + 3, i.pageTotal))) : (h.push(c(0, 0)), h.push(c(i.page - Math.ceil((o - 4) / 2), i.page + Math.floor((o - 4) / 2))), h.push(c(0, 0)), h.push(c(i.pageTotal, i.pageTotal)))), h;
    })();
  }
}
function zu({
  type: e,
  pagerInfo: t,
  linkCreator: n,
  items: o = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 100, 200, 500, 1e3, 2e3],
  dropdown: i = {},
  ...r
}) {
  var c, _;
  i.items = (c = i.items) != null ? c : o.map((h) => {
    const s = { ...t, recPerPage: h };
    return {
      text: `${h}`,
      url: typeof n == "function" ? n(s) : ce(n, s)
    };
  });
  const { text: l = "" } = r;
  return r.text = typeof l == "function" ? l(t) : ce(l, t), i.menu = { ...i.menu, className: P((_ = i.menu) == null ? void 0 : _.className, "pager-size-menu") }, /* @__PURE__ */ tt(qa, {
    type: "dropdown",
    dropdown: i,
    ...r
  });
}
function Fu({
  key: e,
  page: t,
  type: n,
  btnType: o,
  pagerInfo: i,
  size: r,
  onClick: l,
  linkCreator: c,
  ..._
}) {
  let h, s;
  const p = (u) => {
    var m;
    if (s = Number((m = u.target) == null ? void 0 : m.value) || 1, !(s > i.pageTotal))
      return h = s > i.pageTotal ? i.pageTotal : s, h;
  }, f = (u) => {
    h = h <= i.pageTotal ? h : i.pageTotal;
    const m = or(i, h);
    _.url = typeof c == "function" ? c(m) : ce(c, m), l == null || l.call(u.target);
  }, { className: a } = _;
  return _.className = "input-group-addon", /* @__PURE__ */ tt("div", {
    className: P("input-group", r ? `size-${r}` : "", a)
  }, /* @__PURE__ */ tt("input", {
    type: "number",
    class: "form-control",
    max: i.pageTotal,
    min: "1",
    onInput: p
  }), /* @__PURE__ */ tt(pt, {
    type: o,
    ..._,
    onClick: f
  }));
}
class no extends at {
  get pagerInfo() {
    const { page: t = 1, recTotal: n = 0, recPerPage: o = 10 } = this.props;
    return { page: t, recTotal: n, recPerPage: o, pageTotal: o ? Math.ceil(n / o) : 0 };
  }
  isBtnItem(t) {
    return t === "link" || t === "nav" || t === "size-menu" || t === "goto" || super.isBtnItem(t);
  }
  getItemRenderProps(t, n, o) {
    const i = super.getItemRenderProps(t, n, o), r = n.type || "item";
    return r === "info" ? Object.assign(i, { pagerInfo: this.pagerInfo }) : (r === "link" || r === "size-menu" || r === "nav" || r === "goto") && Object.assign(i, { pagerInfo: this.pagerInfo, linkCreator: t.linkCreator }), i;
  }
}
S(no, "NAME", "pager"), S(no, "defaultProps", {
  gap: 1,
  btnProps: {
    btnType: "ghost",
    size: "sm"
  }
}), S(no, "ItemComponents", {
  ...at.ItemComponents,
  link: Iu,
  info: ju,
  nav: Bu,
  "size-menu": zu,
  goto: Fu
});
class yi extends xe {
}
S(yi, "NAME", "pager"), S(yi, "Component", no);
class bi extends xe {
}
S(bi, "NAME", "toolbar"), S(bi, "Component", at);
var Qr, q, Ga, Ya, an, wi, Ka = {}, Xa = [], Vu = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function Qe(e, t) {
  for (var n in t)
    e[n] = t[n];
  return e;
}
function Ja(e) {
  var t = e.parentNode;
  t && t.removeChild(e);
}
function R(e, t, n) {
  var o, i, r, l = {};
  for (r in t)
    r == "key" ? o = t[r] : r == "ref" ? i = t[r] : l[r] = t[r];
  if (arguments.length > 2 && (l.children = arguments.length > 3 ? Qr.call(arguments, 2) : n), typeof e == "function" && e.defaultProps != null)
    for (r in e.defaultProps)
      l[r] === void 0 && (l[r] = e.defaultProps[r]);
  return oo(e, l, o, i, null);
}
function oo(e, t, n, o, i) {
  var r = { type: e, props: t, key: n, ref: o, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: i == null ? ++Ga : i };
  return i == null && q.vnode != null && q.vnode(r), r;
}
function qu() {
  return { current: null };
}
function es(e) {
  return e.children;
}
function cn(e, t) {
  this.props = e, this.context = t;
}
function xn(e, t) {
  if (t == null)
    return e.__ ? xn(e.__, e.__.__k.indexOf(e) + 1) : null;
  for (var n; t < e.__k.length; t++)
    if ((n = e.__k[t]) != null && n.__e != null)
      return n.__e;
  return typeof e.type == "function" ? xn(e) : null;
}
function Za(e) {
  var t, n;
  if ((e = e.__) != null && e.__c != null) {
    for (e.__e = e.__c.base = null, t = 0; t < e.__k.length; t++)
      if ((n = e.__k[t]) != null && n.__e != null) {
        e.__e = e.__c.base = n.__e;
        break;
      }
    return Za(e);
  }
}
function ki(e) {
  (!e.__d && (e.__d = !0) && an.push(e) && !Mo.__r++ || wi !== q.debounceRendering) && ((wi = q.debounceRendering) || setTimeout)(Mo);
}
function Mo() {
  for (var e; Mo.__r = an.length; )
    e = an.sort(function(t, n) {
      return t.__v.__b - n.__v.__b;
    }), an = [], e.some(function(t) {
      var n, o, i, r, l, c;
      t.__d && (l = (r = (n = t).__v).__e, (c = n.__P) && (o = [], (i = Qe({}, r)).__v = r.__v + 1, nc(c, r, i, n.__n, c.ownerSVGElement !== void 0, r.__h != null ? [l] : null, o, l == null ? xn(r) : l, r.__h), Yu(o, r), r.__e != l && Za(r)));
    });
}
function Qa(e, t, n, o, i, r, l, c, _, h) {
  var s, p, f, a, u, m, d, v = o && o.__k || Xa, g = v.length;
  for (n.__k = [], s = 0; s < t.length; s++)
    if ((a = n.__k[s] = (a = t[s]) == null || typeof a == "boolean" ? null : typeof a == "string" || typeof a == "number" || typeof a == "bigint" ? oo(null, a, null, null, a) : Array.isArray(a) ? oo(es, { children: a }, null, null, null) : a.__b > 0 ? oo(a.type, a.props, a.key, a.ref ? a.ref : null, a.__v) : a) != null) {
      if (a.__ = n, a.__b = n.__b + 1, (f = v[s]) === null || f && a.key == f.key && a.type === f.type)
        v[s] = void 0;
      else
        for (p = 0; p < g; p++) {
          if ((f = v[p]) && a.key == f.key && a.type === f.type) {
            v[p] = void 0;
            break;
          }
          f = null;
        }
      nc(e, a, f = f || Ka, i, r, l, c, _, h), u = a.__e, (p = a.ref) && f.ref != p && (d || (d = []), f.ref && d.push(f.ref, null, a), d.push(p, a.__c || u, a)), u != null ? (m == null && (m = u), typeof a.type == "function" && a.__k === f.__k ? a.__d = _ = ec(a, _, e) : _ = tc(e, a, f, v, u, _), typeof n.type == "function" && (n.__d = _)) : _ && f.__e == _ && _.parentNode != e && (_ = xn(f));
    }
  for (n.__e = m, s = g; s--; )
    v[s] != null && rc(v[s], v[s]);
  if (d)
    for (s = 0; s < d.length; s++)
      oc(d[s], d[++s], d[++s]);
}
function ec(e, t, n) {
  for (var o, i = e.__k, r = 0; i && r < i.length; r++)
    (o = i[r]) && (o.__ = e, t = typeof o.type == "function" ? ec(o, t, n) : tc(n, o, o, i, o.__e, t));
  return t;
}
function tc(e, t, n, o, i, r) {
  var l, c, _;
  if (t.__d !== void 0)
    l = t.__d, t.__d = void 0;
  else if (n == null || i != r || i.parentNode == null)
    e:
      if (r == null || r.parentNode !== e)
        e.appendChild(i), l = null;
      else {
        for (c = r, _ = 0; (c = c.nextSibling) && _ < o.length; _ += 2)
          if (c == i)
            break e;
        e.insertBefore(i, r), l = r;
      }
  return l !== void 0 ? l : i.nextSibling;
}
function Gu(e, t, n, o, i) {
  var r;
  for (r in n)
    r === "children" || r === "key" || r in t || To(e, r, null, n[r], o);
  for (r in t)
    i && typeof t[r] != "function" || r === "children" || r === "key" || r === "value" || r === "checked" || n[r] === t[r] || To(e, r, t[r], n[r], o);
}
function $i(e, t, n) {
  t[0] === "-" ? e.setProperty(t, n) : e[t] = n == null ? "" : typeof n != "number" || Vu.test(t) ? n : n + "px";
}
function To(e, t, n, o, i) {
  var r;
  e:
    if (t === "style")
      if (typeof n == "string")
        e.style.cssText = n;
      else {
        if (typeof o == "string" && (e.style.cssText = o = ""), o)
          for (t in o)
            n && t in n || $i(e.style, t, "");
        if (n)
          for (t in n)
            o && n[t] === o[t] || $i(e.style, t, n[t]);
      }
    else if (t[0] === "o" && t[1] === "n")
      r = t !== (t = t.replace(/Capture$/, "")), t = t.toLowerCase() in e ? t.toLowerCase().slice(2) : t.slice(2), e.l || (e.l = {}), e.l[t + r] = n, n ? o || e.addEventListener(t, r ? Ci : xi, r) : e.removeEventListener(t, r ? Ci : xi, r);
    else if (t !== "dangerouslySetInnerHTML") {
      if (i)
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
function xi(e) {
  this.l[e.type + !1](q.event ? q.event(e) : e);
}
function Ci(e) {
  this.l[e.type + !0](q.event ? q.event(e) : e);
}
function nc(e, t, n, o, i, r, l, c, _) {
  var h, s, p, f, a, u, m, d, v, g, k, w, E, $, x, b = t.type;
  if (t.constructor !== void 0)
    return null;
  n.__h != null && (_ = n.__h, c = t.__e = n.__e, t.__h = null, r = [c]), (h = q.__b) && h(t);
  try {
    e:
      if (typeof b == "function") {
        if (d = t.props, v = (h = b.contextType) && o[h.__c], g = h ? v ? v.props.value : h.__ : o, n.__c ? m = (s = t.__c = n.__c).__ = s.__E : ("prototype" in b && b.prototype.render ? t.__c = s = new b(d, g) : (t.__c = s = new cn(d, g), s.constructor = b, s.render = Xu), v && v.sub(s), s.props = d, s.state || (s.state = {}), s.context = g, s.__n = o, p = s.__d = !0, s.__h = [], s._sb = []), s.__s == null && (s.__s = s.state), b.getDerivedStateFromProps != null && (s.__s == s.state && (s.__s = Qe({}, s.__s)), Qe(s.__s, b.getDerivedStateFromProps(d, s.__s))), f = s.props, a = s.state, p)
          b.getDerivedStateFromProps == null && s.componentWillMount != null && s.componentWillMount(), s.componentDidMount != null && s.__h.push(s.componentDidMount);
        else {
          if (b.getDerivedStateFromProps == null && d !== f && s.componentWillReceiveProps != null && s.componentWillReceiveProps(d, g), !s.__e && s.shouldComponentUpdate != null && s.shouldComponentUpdate(d, s.__s, g) === !1 || t.__v === n.__v) {
            for (s.props = d, s.state = s.__s, t.__v !== n.__v && (s.__d = !1), s.__v = t, t.__e = n.__e, t.__k = n.__k, t.__k.forEach(function(C) {
              C && (C.__ = t);
            }), k = 0; k < s._sb.length; k++)
              s.__h.push(s._sb[k]);
            s._sb = [], s.__h.length && l.push(s);
            break e;
          }
          s.componentWillUpdate != null && s.componentWillUpdate(d, s.__s, g), s.componentDidUpdate != null && s.__h.push(function() {
            s.componentDidUpdate(f, a, u);
          });
        }
        if (s.context = g, s.props = d, s.__v = t, s.__P = e, w = q.__r, E = 0, "prototype" in b && b.prototype.render) {
          for (s.state = s.__s, s.__d = !1, w && w(t), h = s.render(s.props, s.state, s.context), $ = 0; $ < s._sb.length; $++)
            s.__h.push(s._sb[$]);
          s._sb = [];
        } else
          do
            s.__d = !1, w && w(t), h = s.render(s.props, s.state, s.context), s.state = s.__s;
          while (s.__d && ++E < 25);
        s.state = s.__s, s.getChildContext != null && (o = Qe(Qe({}, o), s.getChildContext())), p || s.getSnapshotBeforeUpdate == null || (u = s.getSnapshotBeforeUpdate(f, a)), x = h != null && h.type === es && h.key == null ? h.props.children : h, Qa(e, Array.isArray(x) ? x : [x], t, n, o, i, r, l, c, _), s.base = t.__e, t.__h = null, s.__h.length && l.push(s), m && (s.__E = s.__ = null), s.__e = !1;
      } else
        r == null && t.__v === n.__v ? (t.__k = n.__k, t.__e = n.__e) : t.__e = Ku(n.__e, t, n, o, i, r, l, _);
    (h = q.diffed) && h(t);
  } catch (C) {
    t.__v = null, (_ || r != null) && (t.__e = c, t.__h = !!_, r[r.indexOf(c)] = null), q.__e(C, t, n);
  }
}
function Yu(e, t) {
  q.__c && q.__c(t, e), e.some(function(n) {
    try {
      e = n.__h, n.__h = [], e.some(function(o) {
        o.call(n);
      });
    } catch (o) {
      q.__e(o, n.__v);
    }
  });
}
function Ku(e, t, n, o, i, r, l, c) {
  var _, h, s, p = n.props, f = t.props, a = t.type, u = 0;
  if (a === "svg" && (i = !0), r != null) {
    for (; u < r.length; u++)
      if ((_ = r[u]) && "setAttribute" in _ == !!a && (a ? _.localName === a : _.nodeType === 3)) {
        e = _, r[u] = null;
        break;
      }
  }
  if (e == null) {
    if (a === null)
      return document.createTextNode(f);
    e = i ? document.createElementNS("http://www.w3.org/2000/svg", a) : document.createElement(a, f.is && f), r = null, c = !1;
  }
  if (a === null)
    p === f || c && e.data === f || (e.data = f);
  else {
    if (r = r && Qr.call(e.childNodes), h = (p = n.props || Ka).dangerouslySetInnerHTML, s = f.dangerouslySetInnerHTML, !c) {
      if (r != null)
        for (p = {}, u = 0; u < e.attributes.length; u++)
          p[e.attributes[u].name] = e.attributes[u].value;
      (s || h) && (s && (h && s.__html == h.__html || s.__html === e.innerHTML) || (e.innerHTML = s && s.__html || ""));
    }
    if (Gu(e, f, p, i, c), s)
      t.__k = [];
    else if (u = t.props.children, Qa(e, Array.isArray(u) ? u : [u], t, n, o, i && a !== "foreignObject", r, l, r ? r[0] : n.__k && xn(n, 0), c), r != null)
      for (u = r.length; u--; )
        r[u] != null && Ja(r[u]);
    c || ("value" in f && (u = f.value) !== void 0 && (u !== e.value || a === "progress" && !u || a === "option" && u !== p.value) && To(e, "value", u, p.value, !1), "checked" in f && (u = f.checked) !== void 0 && u !== e.checked && To(e, "checked", u, p.checked, !1));
  }
  return e;
}
function oc(e, t, n) {
  try {
    typeof e == "function" ? e(t) : e.current = t;
  } catch (o) {
    q.__e(o, n);
  }
}
function rc(e, t, n) {
  var o, i;
  if (q.unmount && q.unmount(e), (o = e.ref) && (o.current && o.current !== e.__e || oc(o, null, t)), (o = e.__c) != null) {
    if (o.componentWillUnmount)
      try {
        o.componentWillUnmount();
      } catch (r) {
        q.__e(r, t);
      }
    o.base = o.__P = null, e.__c = void 0;
  }
  if (o = e.__k)
    for (i = 0; i < o.length; i++)
      o[i] && rc(o[i], t, n || typeof e.type != "function");
  n || e.__e == null || Ja(e.__e), e.__ = e.__e = e.__d = void 0;
}
function Xu(e, t, n) {
  return this.constructor(e, n);
}
Qr = Xa.slice, q = { __e: function(e, t, n, o) {
  for (var i, r, l; t = t.__; )
    if ((i = t.__c) && !i.__)
      try {
        if ((r = i.constructor) && r.getDerivedStateFromError != null && (i.setState(r.getDerivedStateFromError(e)), l = i.__d), i.componentDidCatch != null && (i.componentDidCatch(e, o || {}), l = i.__d), l)
          return i.__E = i;
      } catch (c) {
        e = c;
      }
  throw e;
} }, Ga = 0, Ya = function(e) {
  return e != null && e.constructor === void 0;
}, cn.prototype.setState = function(e, t) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = Qe({}, this.state), typeof e == "function" && (e = e(Qe({}, n), this.props)), e && Qe(n, e), e != null && this.__v && (t && this._sb.push(t), ki(this));
}, cn.prototype.forceUpdate = function(e) {
  this.__v && (this.__e = !0, e && this.__h.push(e), ki(this));
}, cn.prototype.render = es, an = [], Mo.__r = 0;
let Ju = (e = 21) => crypto.getRandomValues(new Uint8Array(e)).reduce((t, n) => (n &= 63, n < 36 ? t += n.toString(36) : n < 62 ? t += (n - 26).toString(36).toUpperCase() : n > 62 ? t += "-" : t += "_", t), "");
var ts, G, sc, _n, Ei, ic = {}, lc = [], Zu = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function et(e, t) {
  for (var n in t)
    e[n] = t[n];
  return e;
}
function ac(e) {
  var t = e.parentNode;
  t && t.removeChild(e);
}
function Si(e, t, n) {
  var o, i, r, l = {};
  for (r in t)
    r == "key" ? o = t[r] : r == "ref" ? i = t[r] : l[r] = t[r];
  if (arguments.length > 2 && (l.children = arguments.length > 3 ? ts.call(arguments, 2) : n), typeof e == "function" && e.defaultProps != null)
    for (r in e.defaultProps)
      l[r] === void 0 && (l[r] = e.defaultProps[r]);
  return ro(e, l, o, i, null);
}
function ro(e, t, n, o, i) {
  var r = { type: e, props: t, key: n, ref: o, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: i == null ? ++sc : i };
  return i == null && G.vnode != null && G.vnode(r), r;
}
function ns(e) {
  return e.children;
}
function fn(e, t) {
  this.props = e, this.context = t;
}
function Cn(e, t) {
  if (t == null)
    return e.__ ? Cn(e.__, e.__.__k.indexOf(e) + 1) : null;
  for (var n; t < e.__k.length; t++)
    if ((n = e.__k[t]) != null && n.__e != null)
      return n.__e;
  return typeof e.type == "function" ? Cn(e) : null;
}
function cc(e) {
  var t, n;
  if ((e = e.__) != null && e.__c != null) {
    for (e.__e = e.__c.base = null, t = 0; t < e.__k.length; t++)
      if ((n = e.__k[t]) != null && n.__e != null) {
        e.__e = e.__c.base = n.__e;
        break;
      }
    return cc(e);
  }
}
function Mi(e) {
  (!e.__d && (e.__d = !0) && _n.push(e) && !Ao.__r++ || Ei !== G.debounceRendering) && ((Ei = G.debounceRendering) || setTimeout)(Ao);
}
function Ao() {
  for (var e; Ao.__r = _n.length; )
    e = _n.sort(function(t, n) {
      return t.__v.__b - n.__v.__b;
    }), _n = [], e.some(function(t) {
      var n, o, i, r, l, c;
      t.__d && (l = (r = (n = t).__v).__e, (c = n.__P) && (o = [], (i = et({}, r)).__v = r.__v + 1, hc(c, r, i, n.__n, c.ownerSVGElement !== void 0, r.__h != null ? [l] : null, o, l == null ? Cn(r) : l, r.__h), eh(o, r), r.__e != l && cc(r)));
    });
}
function _c(e, t, n, o, i, r, l, c, _, h) {
  var s, p, f, a, u, m, d, v = o && o.__k || lc, g = v.length;
  for (n.__k = [], s = 0; s < t.length; s++)
    if ((a = n.__k[s] = (a = t[s]) == null || typeof a == "boolean" ? null : typeof a == "string" || typeof a == "number" || typeof a == "bigint" ? ro(null, a, null, null, a) : Array.isArray(a) ? ro(ns, { children: a }, null, null, null) : a.__b > 0 ? ro(a.type, a.props, a.key, a.ref ? a.ref : null, a.__v) : a) != null) {
      if (a.__ = n, a.__b = n.__b + 1, (f = v[s]) === null || f && a.key == f.key && a.type === f.type)
        v[s] = void 0;
      else
        for (p = 0; p < g; p++) {
          if ((f = v[p]) && a.key == f.key && a.type === f.type) {
            v[p] = void 0;
            break;
          }
          f = null;
        }
      hc(e, a, f = f || ic, i, r, l, c, _, h), u = a.__e, (p = a.ref) && f.ref != p && (d || (d = []), f.ref && d.push(f.ref, null, a), d.push(p, a.__c || u, a)), u != null ? (m == null && (m = u), typeof a.type == "function" && a.__k === f.__k ? a.__d = _ = fc(a, _, e) : _ = uc(e, a, f, v, u, _), typeof n.type == "function" && (n.__d = _)) : _ && f.__e == _ && _.parentNode != e && (_ = Cn(f));
    }
  for (n.__e = m, s = g; s--; )
    v[s] != null && dc(v[s], v[s]);
  if (d)
    for (s = 0; s < d.length; s++)
      pc(d[s], d[++s], d[++s]);
}
function fc(e, t, n) {
  for (var o, i = e.__k, r = 0; i && r < i.length; r++)
    (o = i[r]) && (o.__ = e, t = typeof o.type == "function" ? fc(o, t, n) : uc(n, o, o, i, o.__e, t));
  return t;
}
function uc(e, t, n, o, i, r) {
  var l, c, _;
  if (t.__d !== void 0)
    l = t.__d, t.__d = void 0;
  else if (n == null || i != r || i.parentNode == null)
    e:
      if (r == null || r.parentNode !== e)
        e.appendChild(i), l = null;
      else {
        for (c = r, _ = 0; (c = c.nextSibling) && _ < o.length; _ += 2)
          if (c == i)
            break e;
        e.insertBefore(i, r), l = r;
      }
  return l !== void 0 ? l : i.nextSibling;
}
function Qu(e, t, n, o, i) {
  var r;
  for (r in n)
    r === "children" || r === "key" || r in t || No(e, r, null, n[r], o);
  for (r in t)
    i && typeof t[r] != "function" || r === "children" || r === "key" || r === "value" || r === "checked" || n[r] === t[r] || No(e, r, t[r], n[r], o);
}
function Ti(e, t, n) {
  t[0] === "-" ? e.setProperty(t, n) : e[t] = n == null ? "" : typeof n != "number" || Zu.test(t) ? n : n + "px";
}
function No(e, t, n, o, i) {
  var r;
  e:
    if (t === "style")
      if (typeof n == "string")
        e.style.cssText = n;
      else {
        if (typeof o == "string" && (e.style.cssText = o = ""), o)
          for (t in o)
            n && t in n || Ti(e.style, t, "");
        if (n)
          for (t in n)
            o && n[t] === o[t] || Ti(e.style, t, n[t]);
      }
    else if (t[0] === "o" && t[1] === "n")
      r = t !== (t = t.replace(/Capture$/, "")), t = t.toLowerCase() in e ? t.toLowerCase().slice(2) : t.slice(2), e.l || (e.l = {}), e.l[t + r] = n, n ? o || e.addEventListener(t, r ? Ni : Ai, r) : e.removeEventListener(t, r ? Ni : Ai, r);
    else if (t !== "dangerouslySetInnerHTML") {
      if (i)
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
function Ai(e) {
  this.l[e.type + !1](G.event ? G.event(e) : e);
}
function Ni(e) {
  this.l[e.type + !0](G.event ? G.event(e) : e);
}
function hc(e, t, n, o, i, r, l, c, _) {
  var h, s, p, f, a, u, m, d, v, g, k, w, E, $, x, b = t.type;
  if (t.constructor !== void 0)
    return null;
  n.__h != null && (_ = n.__h, c = t.__e = n.__e, t.__h = null, r = [c]), (h = G.__b) && h(t);
  try {
    e:
      if (typeof b == "function") {
        if (d = t.props, v = (h = b.contextType) && o[h.__c], g = h ? v ? v.props.value : h.__ : o, n.__c ? m = (s = t.__c = n.__c).__ = s.__E : ("prototype" in b && b.prototype.render ? t.__c = s = new b(d, g) : (t.__c = s = new fn(d, g), s.constructor = b, s.render = nh), v && v.sub(s), s.props = d, s.state || (s.state = {}), s.context = g, s.__n = o, p = s.__d = !0, s.__h = [], s._sb = []), s.__s == null && (s.__s = s.state), b.getDerivedStateFromProps != null && (s.__s == s.state && (s.__s = et({}, s.__s)), et(s.__s, b.getDerivedStateFromProps(d, s.__s))), f = s.props, a = s.state, p)
          b.getDerivedStateFromProps == null && s.componentWillMount != null && s.componentWillMount(), s.componentDidMount != null && s.__h.push(s.componentDidMount);
        else {
          if (b.getDerivedStateFromProps == null && d !== f && s.componentWillReceiveProps != null && s.componentWillReceiveProps(d, g), !s.__e && s.shouldComponentUpdate != null && s.shouldComponentUpdate(d, s.__s, g) === !1 || t.__v === n.__v) {
            for (s.props = d, s.state = s.__s, t.__v !== n.__v && (s.__d = !1), s.__v = t, t.__e = n.__e, t.__k = n.__k, t.__k.forEach(function(C) {
              C && (C.__ = t);
            }), k = 0; k < s._sb.length; k++)
              s.__h.push(s._sb[k]);
            s._sb = [], s.__h.length && l.push(s);
            break e;
          }
          s.componentWillUpdate != null && s.componentWillUpdate(d, s.__s, g), s.componentDidUpdate != null && s.__h.push(function() {
            s.componentDidUpdate(f, a, u);
          });
        }
        if (s.context = g, s.props = d, s.__v = t, s.__P = e, w = G.__r, E = 0, "prototype" in b && b.prototype.render) {
          for (s.state = s.__s, s.__d = !1, w && w(t), h = s.render(s.props, s.state, s.context), $ = 0; $ < s._sb.length; $++)
            s.__h.push(s._sb[$]);
          s._sb = [];
        } else
          do
            s.__d = !1, w && w(t), h = s.render(s.props, s.state, s.context), s.state = s.__s;
          while (s.__d && ++E < 25);
        s.state = s.__s, s.getChildContext != null && (o = et(et({}, o), s.getChildContext())), p || s.getSnapshotBeforeUpdate == null || (u = s.getSnapshotBeforeUpdate(f, a)), x = h != null && h.type === ns && h.key == null ? h.props.children : h, _c(e, Array.isArray(x) ? x : [x], t, n, o, i, r, l, c, _), s.base = t.__e, t.__h = null, s.__h.length && l.push(s), m && (s.__E = s.__ = null), s.__e = !1;
      } else
        r == null && t.__v === n.__v ? (t.__k = n.__k, t.__e = n.__e) : t.__e = th(n.__e, t, n, o, i, r, l, _);
    (h = G.diffed) && h(t);
  } catch (C) {
    t.__v = null, (_ || r != null) && (t.__e = c, t.__h = !!_, r[r.indexOf(c)] = null), G.__e(C, t, n);
  }
}
function eh(e, t) {
  G.__c && G.__c(t, e), e.some(function(n) {
    try {
      e = n.__h, n.__h = [], e.some(function(o) {
        o.call(n);
      });
    } catch (o) {
      G.__e(o, n.__v);
    }
  });
}
function th(e, t, n, o, i, r, l, c) {
  var _, h, s, p = n.props, f = t.props, a = t.type, u = 0;
  if (a === "svg" && (i = !0), r != null) {
    for (; u < r.length; u++)
      if ((_ = r[u]) && "setAttribute" in _ == !!a && (a ? _.localName === a : _.nodeType === 3)) {
        e = _, r[u] = null;
        break;
      }
  }
  if (e == null) {
    if (a === null)
      return document.createTextNode(f);
    e = i ? document.createElementNS("http://www.w3.org/2000/svg", a) : document.createElement(a, f.is && f), r = null, c = !1;
  }
  if (a === null)
    p === f || c && e.data === f || (e.data = f);
  else {
    if (r = r && ts.call(e.childNodes), h = (p = n.props || ic).dangerouslySetInnerHTML, s = f.dangerouslySetInnerHTML, !c) {
      if (r != null)
        for (p = {}, u = 0; u < e.attributes.length; u++)
          p[e.attributes[u].name] = e.attributes[u].value;
      (s || h) && (s && (h && s.__html == h.__html || s.__html === e.innerHTML) || (e.innerHTML = s && s.__html || ""));
    }
    if (Qu(e, f, p, i, c), s)
      t.__k = [];
    else if (u = t.props.children, _c(e, Array.isArray(u) ? u : [u], t, n, o, i && a !== "foreignObject", r, l, r ? r[0] : n.__k && Cn(n, 0), c), r != null)
      for (u = r.length; u--; )
        r[u] != null && ac(r[u]);
    c || ("value" in f && (u = f.value) !== void 0 && (u !== e.value || a === "progress" && !u || a === "option" && u !== p.value) && No(e, "value", u, p.value, !1), "checked" in f && (u = f.checked) !== void 0 && u !== e.checked && No(e, "checked", u, p.checked, !1));
  }
  return e;
}
function pc(e, t, n) {
  try {
    typeof e == "function" ? e(t) : e.current = t;
  } catch (o) {
    G.__e(o, n);
  }
}
function dc(e, t, n) {
  var o, i;
  if (G.unmount && G.unmount(e), (o = e.ref) && (o.current && o.current !== e.__e || pc(o, null, t)), (o = e.__c) != null) {
    if (o.componentWillUnmount)
      try {
        o.componentWillUnmount();
      } catch (r) {
        G.__e(r, t);
      }
    o.base = o.__P = null, e.__c = void 0;
  }
  if (o = e.__k)
    for (i = 0; i < o.length; i++)
      o[i] && dc(o[i], t, n || typeof e.type != "function");
  n || e.__e == null || ac(e.__e), e.__ = e.__e = e.__d = void 0;
}
function nh(e, t, n) {
  return this.constructor(e, n);
}
ts = lc.slice, G = { __e: function(e, t, n, o) {
  for (var i, r, l; t = t.__; )
    if ((i = t.__c) && !i.__)
      try {
        if ((r = i.constructor) && r.getDerivedStateFromError != null && (i.setState(r.getDerivedStateFromError(e)), l = i.__d), i.componentDidCatch != null && (i.componentDidCatch(e, o || {}), l = i.__d), l)
          return i.__E = i;
      } catch (c) {
        e = c;
      }
  throw e;
} }, sc = 0, fn.prototype.setState = function(e, t) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = et({}, this.state), typeof e == "function" && (e = e(et({}, n), this.props)), e && et(n, e), e != null && this.__v && (t && this._sb.push(t), Mi(this));
}, fn.prototype.forceUpdate = function(e) {
  this.__v && (this.__e = !0, e && this.__h.push(e), Mi(this));
}, fn.prototype.render = ns, _n = [], Ao.__r = 0;
var _t, ft;
class Ri extends fn {
  constructor(n) {
    var o;
    super(n);
    M(this, _t, 0);
    M(this, ft, null);
    S(this, "_handleWheel", (n) => {
      var r;
      const { wheelContainer: o } = this.props, i = n.target;
      if (!(!i || !o) && (typeof o == "string" && i.closest(o) || typeof o == "object")) {
        const l = (this.props.type === "horz" ? n.deltaX : n.deltaY) * ((r = this.props.wheelSpeed) != null ? r : 1);
        this.scrollOffset(l) && n.preventDefault();
      }
    });
    S(this, "_handleMouseMove", (n) => {
      const { dragStart: o } = this.state;
      o && (y(this, _t) && cancelAnimationFrame(y(this, _t)), N(this, _t, requestAnimationFrame(() => {
        const i = this.props.type === "horz" ? n.clientX - o.x : n.clientY - o.y;
        this.scroll(o.offset + i * this.props.scrollSize / this.props.clientSize), N(this, _t, 0);
      })), n.preventDefault());
    });
    S(this, "_handleMouseUp", () => {
      this.state.dragStart && this.setState({
        dragStart: !1
      });
    });
    S(this, "_handleMouseDown", (n) => {
      this.state.dragStart || this.setState({ dragStart: { x: n.clientX, y: n.clientY, offset: this.scrollPos } }), n.stopPropagation();
    });
    S(this, "_handleClick", (n) => {
      const o = n.currentTarget;
      if (!o)
        return;
      const i = o.getBoundingClientRect(), { type: r, clientSize: l, scrollSize: c } = this.props, _ = (r === "horz" ? n.clientX - i.left : n.clientY - i.top) - this.barSize / 2;
      this.scroll(_ * c / l), n.preventDefault();
    });
    this.state = {
      scrollPos: (o = this.props.defaultScrollPos) != null ? o : 0,
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
    n && (N(this, ft, typeof n == "string" ? document : n.current), y(this, ft).addEventListener("wheel", this._handleWheel, { passive: !1 }));
  }
  componentWillUnmount() {
    document.removeEventListener("mousemove", this._handleMouseMove), document.removeEventListener("mouseup", this._handleMouseUp), y(this, ft) && y(this, ft).removeEventListener("wheel", this._handleWheel);
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
    var i;
    const { onScroll: o } = this.props;
    o && o(n, (i = this.props.type) != null ? i : "vert");
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
    } = this.props, { maxScrollPos: p, scrollPos: f } = this, { dragStart: a } = this.state, u = {
      left: c,
      top: _,
      bottom: h,
      right: s,
      ...l
    }, m = {};
    return o === "horz" ? (u.height = i, u.width = n, m.width = this.barSize, m.left = Math.round(Math.min(p, f) * (n - m.width) / p)) : (u.width = i, u.height = n, m.height = this.barSize, m.top = Math.round(Math.min(p, f) * (n - m.height) / p)), /* @__PURE__ */ Si("div", {
      className: P("scrollbar", r, {
        "is-vert": o === "vert",
        "is-horz": o === "horz",
        "is-dragging": a
      }),
      style: u,
      onMouseDown: this._handleClick
    }, /* @__PURE__ */ Si("div", {
      className: "scrollbar-bar",
      style: m,
      onMouseDown: this._handleMouseDown
    }));
  }
}
_t = new WeakMap(), ft = new WeakMap();
function Pi(e, t, n) {
  return e && (t && (e = Math.max(t, e)), n && (e = Math.min(n, e))), e;
}
function vc({ col: e, className: t, height: n, row: o, onRenderCell: i, style: r, outerStyle: l, children: c, outerClass: _, ...h }) {
  var b, C;
  const s = {
    left: e.left,
    width: e.realWidth,
    height: n,
    ...l
  }, { align: p, border: f } = e.setting, a = {
    justifyContent: p ? p === "left" ? "start" : p === "right" ? "end" : p : void 0,
    ...e.setting.cellStyle,
    ...r
  }, u = ["dtable-cell", _, e.setting.className, {
    "has-border-left": f === !0 || f === "left",
    "has-border-right": f === !0 || f === "right"
  }], m = ["dtable-cell-content", t], d = [(C = c != null ? c : (b = o.data) == null ? void 0 : b[e.name]) != null ? C : ""], v = i ? i(d, { row: o, col: e }, R) : d, g = [], k = [], w = {}, E = {};
  let $ = "div";
  v == null || v.forEach((T) => {
    var D;
    if (typeof T == "object" && T && !Ya(T) && ("html" in T || "className" in T || "style" in T || "attrs" in T || "children" in T || "tagName" in T)) {
      const J = T.outer ? g : k;
      T.html ? J.push(/* @__PURE__ */ R("div", {
        className: P("dtable-cell-html", T.className),
        style: T.style,
        dangerouslySetInnerHTML: { __html: T.html },
        ...(D = T.attrs) != null ? D : {}
      })) : (T.style && Object.assign(T.outer ? s : a, T.style), T.className && (T.outer ? u : m).push(T.className), T.children && J.push(T.children), T.attrs && Object.assign(T.outer ? w : E, T.attrs)), T.tagName && !T.outer && ($ = T.tagName);
    } else
      k.push(T);
  });
  const x = $;
  return /* @__PURE__ */ R("div", {
    className: P(u),
    style: s,
    "data-col": e.name,
    ...h,
    ...w
  }, k.length > 0 && /* @__PURE__ */ R(x, {
    className: P(m),
    style: a,
    ...E
  }, k), g);
}
function cr({ row: e, className: t, top: n = 0, left: o = 0, width: i, height: r, cols: l, CellComponent: c = vc, onRenderCell: _ }) {
  return /* @__PURE__ */ R("div", {
    className: P("dtable-cells", t),
    style: { top: n, left: o, width: i, height: r }
  }, l.map((h) => h.visible ? /* @__PURE__ */ R(c, {
    key: h.name,
    col: h,
    row: e,
    onRenderCell: _
  }) : null));
}
function gc({
  row: e,
  className: t,
  top: n,
  height: o,
  fixedLeftCols: i,
  fixedRightCols: r,
  scrollCols: l,
  fixedLeftWidth: c,
  scrollWidth: _,
  scrollColsWidth: h,
  fixedRightWidth: s,
  scrollLeft: p,
  CellComponent: f = vc,
  onRenderCell: a,
  style: u,
  ...m
}) {
  let d = null;
  i != null && i.length && (d = /* @__PURE__ */ R(cr, {
    className: "dtable-fixed-left",
    cols: i,
    width: c,
    row: e,
    CellComponent: f,
    onRenderCell: a
  }));
  let v = null;
  l != null && l.length && (v = /* @__PURE__ */ R(cr, {
    className: "dtable-flexable",
    cols: l,
    left: c - p,
    width: Math.max(_, h),
    row: e,
    CellComponent: f,
    onRenderCell: a
  }));
  let g = null;
  r != null && r.length && (g = /* @__PURE__ */ R(cr, {
    className: "dtable-fixed-right",
    cols: r,
    left: c + _,
    width: s,
    row: e,
    CellComponent: f,
    onRenderCell: a
  }));
  const k = { top: n, height: o, lineHeight: `${o - 2}px`, ...u };
  return /* @__PURE__ */ R("div", {
    className: P("dtable-row", t),
    style: k,
    "data-id": e.id,
    ...m
  }, d, v, g);
}
function oh({ height: e, onRenderRow: t, ...n }) {
  const o = {
    height: e,
    ...n,
    row: { id: "HEADER", index: -1, top: 0 },
    className: "dtable-in-header",
    top: 0
  };
  if (t) {
    const i = t({ props: o }, R);
    i && Object.assign(o, i);
  }
  return /* @__PURE__ */ R("div", {
    className: "dtable-header",
    style: { height: e }
  }, /* @__PURE__ */ R(gc, {
    ...o
  }));
}
function rh({
  className: e,
  style: t,
  top: n,
  rows: o,
  height: i,
  rowHeight: r,
  scrollTop: l,
  onRenderRow: c,
  ..._
}) {
  return t = { ...t, top: n, height: i }, /* @__PURE__ */ R("div", {
    className: P("dtable-rows", e),
    style: t
  }, o.map((h) => {
    const s = {
      className: `dtable-row-${h.index % 2 ? "odd" : "even"}`,
      row: h,
      top: h.top - l,
      height: r,
      ..._
    }, p = c == null ? void 0 : c({ props: s, row: h }, R);
    return p && Object.assign(s, p), /* @__PURE__ */ R(gc, {
      ...s
    });
  }));
}
const Ro = /* @__PURE__ */ new Map(), Po = [];
function mc(e, t) {
  const { name: n } = e;
  if (!(t != null && t.override) && Ro.has(n))
    throw new Error(`DTable: Plugin with name ${n} already exists`);
  Ro.set(n, e), (t == null ? void 0 : t.buildIn) && !Po.includes(n) && Po.push(n);
}
function Dt(e, t) {
  mc(e, t);
  const n = (o) => {
    if (!o)
      return e;
    const { defaultOptions: i, ...r } = e;
    return {
      ...r,
      defaultOptions: { ...i, ...o }
    };
  };
  return n.plugin = e, n;
}
function yc(e) {
  return Ro.delete(e);
}
function sh(e) {
  if (typeof e == "string") {
    const t = Ro.get(e);
    return t || console.warn(`DTable: Cannot found plugin "${e}"`), t;
  }
  if (typeof e == "function" && "plugin" in e)
    return e.plugin;
  if (typeof e == "object")
    return e;
  console.warn("DTable: Invalid plugin", e);
}
function bc(e, t, n) {
  return t.forEach((o) => {
    var r;
    if (!o)
      return;
    const i = sh(o);
    !i || n.has(i.name) || ((r = i.plugins) != null && r.length && bc(e, i.plugins, n), e.push(i), n.add(i.name));
  }), e;
}
function ih(e = [], t = !0) {
  return t && Po.length && e.unshift(...Po), e != null && e.length ? bc([], e, /* @__PURE__ */ new Set()) : [];
}
function Li() {
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
var ut, St, ze, ye, Fe, ee, pe, be, Mt, Nn, Rn, Pe, Tt, At, Ho, wc, Wo, kc, Io, $c, Uo, xc, Pn, $r, jo, Bo, Ln, On, zo, Fo, Vo, Cc, qo, Ec, Go, Sc;
class kr extends cn {
  constructor(n) {
    var o;
    super(n);
    M(this, Ho);
    M(this, Wo);
    M(this, Io);
    M(this, Uo);
    M(this, Pn);
    M(this, Vo);
    M(this, qo);
    M(this, Go);
    S(this, "ref", qu());
    M(this, ut, 0);
    M(this, St, void 0);
    M(this, ze, !1);
    M(this, ye, void 0);
    M(this, Fe, void 0);
    M(this, ee, []);
    M(this, pe, void 0);
    M(this, be, /* @__PURE__ */ new Map());
    M(this, Mt, {});
    M(this, Nn, void 0);
    M(this, Rn, []);
    S(this, "updateLayout", () => {
      y(this, ut) && cancelAnimationFrame(y(this, ut)), N(this, ut, requestAnimationFrame(() => {
        N(this, pe, void 0), this.forceUpdate(), N(this, ut, 0);
      }));
    });
    M(this, Pe, (n, o) => {
      o = o || n.type;
      const i = y(this, be).get(o);
      if (!!(i != null && i.length)) {
        for (const r of i)
          if (r.call(this, n) === !1) {
            n.stopPropagation(), n.preventDefault();
            break;
          }
      }
    });
    M(this, Tt, (n) => {
      y(this, Pe).call(this, n, `window_${n.type}`);
    });
    M(this, At, (n) => {
      y(this, Pe).call(this, n, `document_${n.type}`);
    });
    M(this, jo, (n, o) => {
      if (this.options.onRenderRow) {
        const i = this.options.onRenderRow.call(this, n, o);
        i && Object.assign(n.props, i);
      }
      return y(this, ee).forEach((i) => {
        if (i.onRenderRow) {
          const r = i.onRenderRow.call(this, n, o);
          r && Object.assign(n.props, r);
        }
      }), n.props;
    });
    M(this, Bo, (n, o) => (this.options.onRenderHeaderRow && (n.props = this.options.onRenderHeaderRow.call(this, n, o)), y(this, ee).forEach((i) => {
      i.onRenderHeaderRow && (n.props = i.onRenderHeaderRow.call(this, n, o));
    }), n.props));
    M(this, Ln, (n, o, i) => {
      const { row: r, col: l } = o;
      n[0] = this.getCellValue(r, l);
      const c = r.id === "HEADER" ? "onRenderHeaderCell" : "onRenderCell";
      return l.setting[c] && (n = l.setting[c].call(this, n, o, i)), this.options[c] && (n = this.options[c].call(this, n, o, i)), y(this, ee).forEach((_) => {
        _[c] && (n = _[c].call(this, n, o, i));
      }), n;
    });
    M(this, On, (n, o) => {
      o === "horz" ? this.scroll({ scrollLeft: n }) : this.scroll({ scrollTop: n });
    });
    M(this, zo, (n) => {
      var c, _, h, s, p;
      const o = this.getPointerInfo(n);
      if (!o)
        return;
      const { rowID: i, colName: r, cellElement: l } = o;
      if (i === "HEADER")
        l && ((c = this.options.onHeaderCellClick) == null || c.call(this, n, { colName: r, element: l }), y(this, ee).forEach((f) => {
          var a;
          (a = f.onHeaderCellClick) == null || a.call(this, n, { colName: r, element: l });
        }));
      else {
        const { rowElement: f } = o, a = this.layout.visibleRows.find((u) => u.id === i);
        if (l) {
          if (((_ = this.options.onCellClick) == null ? void 0 : _.call(this, n, { colName: r, rowID: i, rowInfo: a, element: l, rowElement: f })) === !0)
            return;
          for (const u of y(this, ee))
            if (((h = u.onCellClick) == null ? void 0 : h.call(this, n, { colName: r, rowID: i, rowInfo: a, element: l, rowElement: f })) === !0)
              return;
        }
        if (((s = this.options.onRowClick) == null ? void 0 : s.call(this, n, { rowID: i, rowInfo: a, element: f })) === !0)
          return;
        for (const u of y(this, ee))
          if (((p = u.onRowClick) == null ? void 0 : p.call(this, n, { rowID: i, rowInfo: a, element: f })) === !0)
            return;
      }
    });
    M(this, Fo, (n) => {
      const o = n.key.toLowerCase();
      if (["pageup", "pagedown", "home", "end"].includes(o))
        return !this.scroll({ to: o.replace("page", "") });
    });
    N(this, St, (o = n.id) != null ? o : `dtable-${Ju(10)}`), this.state = { scrollTop: 0, scrollLeft: 0, renderCount: 0 }, N(this, Fe, Object.freeze(ih(n.plugins))), y(this, Fe).forEach((i) => {
      var _;
      const { methods: r, data: l, state: c } = i;
      r && Object.entries(r).forEach(([h, s]) => {
        typeof s == "function" && Object.assign(this, { [h]: s.bind(this) });
      }), l && Object.assign(y(this, Mt), l.call(this)), c && Object.assign(this.state, c.call(this)), (_ = i.onCreate) == null || _.call(this, i);
    });
  }
  get options() {
    var n;
    return ((n = y(this, pe)) == null ? void 0 : n.options) || y(this, ye) || Li();
  }
  get plugins() {
    return y(this, ee);
  }
  get layout() {
    return y(this, pe);
  }
  get id() {
    return y(this, St);
  }
  get data() {
    return y(this, Mt);
  }
  get parent() {
    var n, o;
    return (o = this.props.parent) != null ? o : (n = this.ref.current) == null ? void 0 : n.parentElement;
  }
  componentWillReceiveProps() {
    N(this, ye, void 0);
  }
  componentDidMount() {
    if (y(this, ze) ? this.forceUpdate() : X(this, Pn, $r).call(this), y(this, ee).forEach((n) => {
      let { events: o } = n;
      !o || (typeof o == "function" && (o = o.call(this)), Object.entries(o).forEach(([i, r]) => {
        r && this.on(i, r);
      }));
    }), this.on("click", y(this, zo)), this.on("keydown", y(this, Fo)), this.options.responsive) {
      if (typeof ResizeObserver < "u") {
        const { parent: n } = this;
        if (n) {
          const o = new ResizeObserver(this.updateLayout);
          o.observe(n), N(this, Nn, o);
        }
      }
      this.on("window_resize", this.updateLayout);
    }
    y(this, ee).forEach((n) => {
      var o;
      (o = n.onMounted) == null || o.call(this);
    });
  }
  componentDidUpdate() {
    y(this, ze) ? X(this, Pn, $r).call(this) : y(this, ee).forEach((n) => {
      var o;
      (o = n.onUpdated) == null || o.call(this);
    });
  }
  componentWillUnmount() {
    var o;
    (o = y(this, Nn)) == null || o.disconnect();
    const { current: n } = this.ref;
    if (n)
      for (const i of y(this, be).keys())
        i.startsWith("window_") ? window.removeEventListener(i.replace("window_", ""), y(this, Tt)) : i.startsWith("document_") ? document.removeEventListener(i.replace("document_", ""), y(this, At)) : n.removeEventListener(i, y(this, Pe));
    y(this, ee).forEach((i) => {
      var r;
      (r = i.onUnmounted) == null || r.call(this);
    }), y(this, Fe).forEach((i) => {
      var r;
      (r = i.onDestory) == null || r.call(this);
    }), N(this, Mt, {}), y(this, be).clear();
  }
  on(n, o, i) {
    var l;
    i && (n = `${i}_${n}`);
    const r = y(this, be).get(n);
    r ? r.push(o) : (y(this, be).set(n, [o]), n.startsWith("window_") ? window.addEventListener(n.replace("window_", ""), y(this, Tt)) : n.startsWith("document_") ? document.addEventListener(n.replace("document_", ""), y(this, At)) : (l = this.ref.current) == null || l.addEventListener(n, y(this, Pe)));
  }
  off(n, o, i) {
    var c;
    i && (n = `${i}_${n}`);
    const r = y(this, be).get(n);
    if (!r)
      return;
    const l = r.indexOf(o);
    l >= 0 && r.splice(l, 1), r.length || (y(this, be).delete(n), n.startsWith("window_") ? window.removeEventListener(n.replace("window_", ""), y(this, Tt)) : n.startsWith("document_") ? document.removeEventListener(n.replace("document_", ""), y(this, At)) : (c = this.ref.current) == null || c.removeEventListener(n, y(this, Pe)));
  }
  emitCustomEvent(n, o) {
    y(this, Pe).call(this, o instanceof Event ? o : new CustomEvent(n, { detail: o }), n);
  }
  scroll(n, o) {
    const { scrollLeft: i, scrollTop: r, rowsHeightTotal: l, rowsHeight: c, rowHeight: _, colsInfo: { scrollWidth: h, scrollColsWidth: s } } = this.layout, { to: p } = n;
    let { scrollLeft: f, scrollTop: a } = n;
    if (p === "up" || p === "down")
      a = r + (p === "down" ? 1 : -1) * Math.floor(c / _) * _;
    else if (p === "left" || p === "right")
      f = i + (p === "right" ? 1 : -1) * h;
    else if (p === "home")
      a = 0;
    else if (p === "end")
      a = l - c;
    else if (p === "left-begin")
      f = 0;
    else if (p === "right-end")
      f = s - h;
    else {
      const { offsetLeft: m, offsetTop: d } = n;
      typeof m == "number" && (f = i + m), typeof d == "number" && (f = r + d);
    }
    const u = {};
    return typeof f == "number" && (f = Math.max(0, Math.min(f, s - h)), f !== i && (u.scrollLeft = f)), typeof a == "number" && (a = Math.max(0, Math.min(a, l - c)), a !== r && (u.scrollTop = a)), Object.keys(u).length ? (this.setState(u, () => {
      var m;
      (m = this.options.onScroll) == null || m.call(this, u), o == null || o.call(this, !0);
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
    var _, h;
    const i = typeof n == "object" ? n : this.getRowInfo(n);
    if (!i)
      return;
    const r = typeof o == "object" ? o : this.getColInfo(o);
    if (!r)
      return;
    let l = i.id === "HEADER" ? (_ = r.setting.title) != null ? _ : r.setting.name : (h = i.data) == null ? void 0 : h[r.name];
    const { cellValueGetter: c } = this.options;
    return c && (l = c.call(this, i, r, l)), l;
  }
  getRowInfoByIndex(n) {
    return this.layout.rows[n];
  }
  update(n = {}, o) {
    if (!y(this, ye))
      return;
    typeof n == "function" && (o = n, n = {});
    const { dirtyType: i, state: r } = n;
    if (i === "layout")
      N(this, pe, void 0);
    else if (i === "options") {
      if (N(this, ye, void 0), !y(this, pe))
        return;
      N(this, pe, void 0);
    }
    this.setState(r != null ? r : (l) => ({ renderCount: l.renderCount + 1 }), o);
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
    var r;
    return (r = Dn(y(this, Rn), n, o, i, this.options.lang)) != null ? r : `{i18n:${n}}`;
  }
  render() {
    var a;
    const n = X(this, Go, Sc).call(this), { className: o, rowHover: i, colHover: r, cellHover: l, bordered: c, striped: _, scrollbarHover: h } = this.options, s = { width: n == null ? void 0 : n.width, height: n == null ? void 0 : n.height }, p = ["dtable", o, {
      "dtable-hover-row": i,
      "dtable-hover-col": r,
      "dtable-hover-cell": l,
      "dtable-bordered": c,
      "dtable-striped": _,
      "dtable-scrolled-down": ((a = n == null ? void 0 : n.scrollTop) != null ? a : 0) > 0,
      "scrollbar-hover": h
    }], f = [];
    return n && y(this, ee).forEach((u) => {
      var d;
      const m = (d = u.onRender) == null ? void 0 : d.call(this, n);
      !m || (m.style && Object.assign(s, m.style), m.className && p.push(m.className), m.children && f.push(m.children));
    }), /* @__PURE__ */ R("div", {
      id: y(this, St),
      className: P(p),
      style: s,
      ref: this.ref,
      tabIndex: -1
    }, n && X(this, Ho, wc).call(this, n), n && X(this, Wo, kc).call(this, n), n && X(this, Io, $c).call(this, n), n && X(this, Uo, xc).call(this, n));
  }
}
ut = new WeakMap(), St = new WeakMap(), ze = new WeakMap(), ye = new WeakMap(), Fe = new WeakMap(), ee = new WeakMap(), pe = new WeakMap(), be = new WeakMap(), Mt = new WeakMap(), Nn = new WeakMap(), Rn = new WeakMap(), Pe = new WeakMap(), Tt = new WeakMap(), At = new WeakMap(), Ho = new WeakSet(), wc = function(n) {
  const { header: o, colsInfo: i, headerHeight: r, scrollLeft: l } = n;
  if (!o)
    return null;
  if (o === !0)
    return /* @__PURE__ */ R(oh, {
      scrollLeft: l,
      height: r,
      onRenderCell: y(this, Ln),
      onRenderRow: y(this, Bo),
      ...i
    });
  const c = Array.isArray(o) ? o : [o];
  return /* @__PURE__ */ R(ur, {
    className: "dtable-header",
    style: { height: r },
    renders: c,
    generateArgs: [n],
    generatorThis: this
  });
}, Wo = new WeakSet(), kc = function(n) {
  const { headerHeight: o, rowsHeight: i, visibleRows: r, rowHeight: l, colsInfo: c, scrollLeft: _, scrollTop: h } = n;
  return /* @__PURE__ */ R(rh, {
    top: o,
    height: i,
    rows: r,
    rowHeight: l,
    scrollLeft: _,
    scrollTop: h,
    onRenderCell: y(this, Ln),
    onRenderRow: y(this, jo),
    ...c
  });
}, Io = new WeakSet(), $c = function(n) {
  const { footer: o } = n;
  if (!o)
    return null;
  const i = typeof o == "function" ? o.call(this, n) : Array.isArray(o) ? o : [o];
  return /* @__PURE__ */ R(ur, {
    className: "dtable-footer",
    style: { height: n.footerHeight, top: n.rowsHeight + n.headerHeight },
    renders: i,
    generateArgs: [n],
    generatorThis: this,
    generators: n.footerGenerators
  });
}, Uo = new WeakSet(), xc = function(n) {
  const o = [], { scrollLeft: i, colsInfo: r, scrollTop: l, rowsHeight: c, rowsHeightTotal: _, footerHeight: h } = n, { scrollColsWidth: s, scrollWidth: p } = r, { scrollbarSize: f = 12, horzScrollbarPos: a } = this.options;
  return s > p && o.push(
    /* @__PURE__ */ R(Ri, {
      key: "horz",
      type: "horz",
      scrollPos: i,
      scrollSize: s,
      clientSize: p,
      onScroll: y(this, On),
      left: r.fixedLeftWidth,
      bottom: (a === "inside" ? 0 : -f) + h,
      size: f,
      wheelContainer: this.ref
    })
  ), _ > c && o.push(
    /* @__PURE__ */ R(Ri, {
      key: "vert",
      type: "vert",
      scrollPos: l,
      scrollSize: _,
      clientSize: c,
      onScroll: y(this, On),
      right: 0,
      size: f,
      top: n.headerHeight,
      wheelContainer: this.ref
    })
  ), o.length ? o : null;
}, Pn = new WeakSet(), $r = function() {
  var n;
  N(this, ze, !1), (n = this.options.afterRender) == null || n.call(this), y(this, ee).forEach((o) => {
    var i;
    return (i = o.afterRender) == null ? void 0 : i.call(this);
  });
}, jo = new WeakMap(), Bo = new WeakMap(), Ln = new WeakMap(), On = new WeakMap(), zo = new WeakMap(), Fo = new WeakMap(), Vo = new WeakSet(), Cc = function() {
  if (y(this, ye))
    return !1;
  const o = { ...Li(), ...y(this, Fe).reduce((i, r) => {
    const { defaultOptions: l } = r;
    return l && Object.assign(i, l), i;
  }, {}), ...this.props };
  return N(this, ye, o), N(this, ee, y(this, Fe).reduce((i, r) => {
    const { when: l, options: c } = r;
    return (!l || l(o)) && (i.push(r), c && Object.assign(o, typeof c == "function" ? c.call(this, o) : c)), i;
  }, [])), N(this, Rn, [this.options.i18n, ...this.plugins.map((i) => i.i18n)].filter(Boolean)), !0;
}, qo = new WeakSet(), Ec = function() {
  var st, Se;
  const { plugins: n } = this;
  let o = y(this, ye);
  const i = {
    flex: /* @__PURE__ */ R("div", {
      style: "flex:auto"
    }),
    divider: /* @__PURE__ */ R("div", {
      style: "width:1px;margin:var(--space);background:var(--color-border);height:50%"
    })
  };
  n.forEach((A) => {
    var K;
    const O = (K = A.beforeLayout) == null ? void 0 : K.call(this, o);
    O && (o = { ...o, ...O }), Object.assign(i, A.footer);
  });
  const { defaultColWidth: r, minColWidth: l, maxColWidth: c } = o, _ = [], h = [], s = [], p = {}, f = [], a = [];
  let u = 0, m = 0, d = 0;
  o.cols.forEach((A) => {
    var In, Wt, It;
    if (A.hidden)
      return;
    const {
      name: O,
      type: K = "",
      fixed: Q = !1,
      flex: he = !1,
      width: it = r,
      minWidth: Me = l,
      maxWidth: Ht = c,
      ...Wn
    } = A, L = {
      name: O,
      type: K,
      setting: {
        name: O,
        type: K,
        fixed: Q,
        flex: he,
        width: it,
        minWidth: Me,
        maxWidth: Ht,
        ...Wn
      },
      flex: Q ? 0 : he === !0 ? 1 : typeof he == "number" ? he : 0,
      left: 0,
      width: Pi(it, Me, Ht),
      realWidth: 0,
      visible: !0,
      index: f.length
    };
    n.forEach((Un) => {
      var ve, lt;
      const gt = (ve = Un.colTypes) == null ? void 0 : ve[K];
      if (gt) {
        const Ut = typeof gt == "function" ? gt(L) : gt;
        Ut && Object.assign(L.setting, Ut);
      }
      (lt = Un.onAddCol) == null || lt.call(this, L);
    }), L.width = Pi((In = L.setting.width) != null ? In : L.width, (Wt = L.setting.minWidth) != null ? Wt : Me, (It = L.setting.maxWidth) != null ? It : Ht), L.realWidth = L.realWidth || L.width, Q === "left" ? (L.left = u, u += L.width, _.push(L)) : Q === "right" ? (L.left = m, m += L.width, h.push(L)) : (L.left = d, d += L.width, s.push(L)), L.flex && a.push(L), f.push(L), p[L.name] = L;
  });
  let v = o.width, g = 0;
  const k = u + d + m;
  if (typeof v == "function" && (v = v.call(this, k)), v === "auto")
    g = k;
  else if (v === "100%") {
    const { parent: A } = this;
    if (A)
      g = A.clientWidth;
    else {
      g = 0, N(this, ze, !0);
      return;
    }
  } else
    g = v != null ? v : 0;
  const { data: w, rowKey: E = "id", rowHeight: $ } = o, x = [], b = (A, O, K) => {
    var he, it;
    const Q = { data: K != null ? K : { [E]: A }, id: A, index: x.length, top: 0 };
    if (K || (Q.lazy = !0), x.push(Q), ((he = o.onAddRow) == null ? void 0 : he.call(this, Q, O)) !== !1) {
      for (const Me of n)
        if (((it = Me.onAddRow) == null ? void 0 : it.call(this, Q, O)) === !1)
          return;
    }
  };
  if (typeof w == "number")
    for (let A = 0; A < w; A++)
      b(`${A}`, A);
  else
    Array.isArray(w) && w.forEach((A, O) => {
      var K;
      typeof A == "object" ? b(`${(K = A[E]) != null ? K : ""}`, O, A) : b(`${A != null ? A : ""}`, O);
    });
  let C = x;
  const T = {};
  if (o.onAddRows) {
    const A = o.onAddRows.call(this, C);
    A && (C = A);
  }
  for (const A of n) {
    const O = (st = A.onAddRows) == null ? void 0 : st.call(this, C);
    O && (C = O);
  }
  C.forEach((A, O) => {
    T[A.id] = A, A.index = O, A.top = A.index * $;
  });
  const { header: D, footer: J } = o, Y = D ? o.headerHeight || $ : 0, ue = J ? o.footerHeight || $ : 0;
  let Z = o.height, I = 0;
  const ne = C.length * $, He = Y + ue + ne;
  if (typeof Z == "function" && (Z = Z.call(this, He)), Z === "auto")
    I = He;
  else if (typeof Z == "object")
    I = Math.min(Z.max, Math.max(Z.min, He));
  else if (Z === "100%") {
    const { parent: A } = this;
    if (A)
      I = A.clientHeight;
    else {
      I = 0, N(this, ze, !0);
      return;
    }
  } else
    I = Z;
  const Ce = I - Y - ue, vt = g - u - m, Ee = {
    options: o,
    allRows: x,
    width: g,
    height: I,
    rows: C,
    rowsMap: T,
    rowHeight: $,
    rowsHeight: Ce,
    rowsHeightTotal: ne,
    header: D,
    footer: J,
    footerGenerators: i,
    headerHeight: Y,
    footerHeight: ue,
    colsMap: p,
    colsList: f,
    flexCols: a,
    colsInfo: {
      fixedLeftCols: _,
      fixedRightCols: h,
      scrollCols: s,
      fixedLeftWidth: u,
      scrollWidth: vt,
      scrollColsWidth: d,
      fixedRightWidth: m
    }
  }, We = (Se = o.onLayout) == null ? void 0 : Se.call(this, Ee);
  We && Object.assign(Ee, We), n.forEach((A) => {
    if (A.onLayout) {
      const O = A.onLayout.call(this, Ee);
      O && Object.assign(Ee, O);
    }
  }), N(this, pe, Ee);
}, Go = new WeakSet(), Sc = function() {
  (X(this, Vo, Cc).call(this) || !y(this, pe)) && X(this, qo, Ec).call(this);
  const { layout: n } = this;
  if (!n)
    return;
  let { scrollLeft: o } = this.state;
  const { flexCols: i, colsInfo: { scrollCols: r, scrollWidth: l, scrollColsWidth: c } } = n;
  if (i.length) {
    const k = l - c;
    if (k > 0) {
      const w = i.reduce(($, x) => $ + x.flex, 0);
      let E = 0;
      i.forEach(($) => {
        const x = Math.min(k - E, Math.ceil(k * ($.flex / w)));
        $.realWidth = x + $.width, E += $.realWidth;
      });
    } else
      i.forEach((w) => {
        w.realWidth = w.width;
      });
  }
  o = Math.min(Math.max(0, c - l), o);
  let _ = 0;
  r.forEach((k) => {
    k.left = _, _ += k.realWidth, k.visible = k.left + k.realWidth >= o && k.left <= o + l;
  });
  const { rowsHeightTotal: h, rowsHeight: s, rows: p, rowHeight: f } = n, a = Math.min(Math.max(0, h - s), this.state.scrollTop), u = Math.floor(a / f), m = a + s, d = Math.min(p.length, Math.ceil(m / f)), v = [], { rowDataGetter: g } = this.options;
  for (let k = u; k < d; k++) {
    const w = p[k];
    w.lazy && g && (w.data = g([w.id])[0], w.lazy = !1), v.push(w);
  }
  return n.visibleRows = v, n.scrollTop = a, n.scrollLeft = o, n;
}, S(kr, "addPlugin", mc), S(kr, "removePlugin", yc);
function Oi(e, t) {
  t !== void 0 ? e.data.hoverCol = t : t = e.data.hoverCol;
  const { current: n } = e.ref;
  if (!n)
    return;
  const o = "dtable-col-hover";
  n.querySelectorAll(`.${o}`).forEach((i) => i.classList.remove(o)), typeof t == "string" && t.length && n.querySelectorAll(`.dtable-cell[data-col="${t}"]`).forEach((i) => i.classList.add(o));
}
const lh = {
  name: "col-hover",
  defaultOptions: {
    colHover: !1
  },
  when: (e) => !!e.colHover,
  events: {
    mouseover(e) {
      var i, r;
      const { colHover: t } = this.options;
      if (!t)
        return;
      const n = (i = e.target) == null ? void 0 : i.closest(".dtable-cell");
      if (!n || t === "header" && !n.closest(".dtable-header"))
        return;
      const o = (r = n == null ? void 0 : n.getAttribute("data-col")) != null ? r : !1;
      Oi(this, o);
    },
    mouseleave() {
      Oi(this, !1);
    }
  }
}, ah = Dt(lh, { buildIn: !0 });
function ch(e, t) {
  var l, c;
  typeof e == "boolean" && (t = e, e = void 0);
  const n = this.state.checkedRows, o = {}, { canRowCheckable: i } = this.options, r = (_, h) => {
    i && !i.call(this, _) || !!n[_] === h || (h ? n[_] = !0 : delete n[_], o[_] = h);
  };
  if (e === void 0 ? (t === void 0 && (t = !Mc.call(this)), (l = this.layout) == null || l.allRows.forEach(({ id: _ }) => {
    r(_, !!t);
  })) : (Array.isArray(e) || (e = [e]), e.forEach((_) => {
    r(_, t != null ? t : !n[_]);
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
function _h(e) {
  var t;
  return (t = this.state.checkedRows[e]) != null ? t : !1;
}
function Mc() {
  var n, o;
  const e = this.getChecks().length, { canRowCheckable: t } = this.options;
  return t ? e === ((n = this.layout) == null ? void 0 : n.allRows.reduce((i, r) => i + (t.call(this, r.id) ? 1 : 0), 0)) : e === ((o = this.layout) == null ? void 0 : o.allRows.length);
}
function fh() {
  return Object.keys(this.state.checkedRows);
}
const uh = {
  name: "checkable",
  defaultOptions: { checkable: !0 },
  when: (e) => !!e.checkable,
  state() {
    return { checkedRows: {} };
  },
  methods: {
    toggleCheckRows: ch,
    isRowChecked: _h,
    isAllRowChecked: Mc,
    getChecks: fh
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
        /* @__PURE__ */ R("div", {
          style: { padding: "0 calc(3 * var(--space))", display: "flex", alignItems: "center" },
          onClick: () => this.toggleCheckRows()
        }, /* @__PURE__ */ R("input", {
          type: "checkbox",
          checked: e
        }))
      ];
    },
    checkedInfo(e, t) {
      const n = this.getChecks().length, o = [];
      return n && o.push(this.i18n("checkedCountInfo", { selected: n })), o.push(this.i18n("totalCountInfo", { total: t.allRows.length })), [
        /* @__PURE__ */ R("div", null, o.join(", "))
      ];
    }
  },
  onRenderCell(e, { row: t, col: n }) {
    var c, _;
    const { id: o } = t, { canRowCheckable: i } = this.options;
    if (i && !i.call(this, o))
      return e;
    const { checkbox: r } = n.setting;
    if (typeof r == "function" ? r.call(this, o) : r) {
      const h = this.isRowChecked(o), s = (_ = (c = this.options.checkboxRender) == null ? void 0 : c.call(this, h, o)) != null ? _ : /* @__PURE__ */ R("input", {
        type: "checkbox",
        checked: h
      });
      e.unshift(s), e.push({ className: "has-checkbox" });
    }
    return e;
  },
  onRenderHeaderCell(e, { row: t, col: n }) {
    var l, c;
    const { id: o } = t, { checkbox: i } = n.setting;
    if (typeof i == "function" ? i.call(this, o) : i) {
      const _ = this.isAllRowChecked(), h = (c = (l = this.options.checkboxRender) == null ? void 0 : l.call(this, _, o)) != null ? c : /* @__PURE__ */ R("input", {
        type: "checkbox",
        checked: _
      });
      e.unshift(h), e.push({ className: "has-checkbox" });
    }
    return e;
  },
  onRenderRow({ props: e, row: t }) {
    if (!!this.isRowChecked(t.id))
      return { className: P(e.className, "is-checked") };
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
}, hh = Dt(uh);
var Tc = /* @__PURE__ */ ((e) => (e.unknown = "", e.collapsed = "collapsed", e.expanded = "expanded", e.hidden = "hidden", e.normal = "normal", e))(Tc || {});
function xr(e) {
  const t = this.data.nestedMap.get(e);
  if (!t || t.state !== "")
    return t != null ? t : { state: "normal", level: -1 };
  if (!t.parent && !t.children)
    return t.state = "normal", t;
  const n = this.state.collapsedRows, o = t.children && n && n[e];
  let i = !1, { parent: r } = t;
  for (; r; ) {
    const l = xr.call(this, r);
    if (l.state !== "expanded") {
      i = !0;
      break;
    }
    r = l.parent;
  }
  return t.state = i ? "hidden" : o ? "collapsed" : t.children ? "expanded" : "normal", t.level = t.parent ? xr.call(this, t.parent).level + 1 : 0, t;
}
function ph(e, t) {
  var i;
  let n = (i = this.state.collapsedRows) != null ? i : {};
  const { nestedMap: o } = this.data;
  if (e === "HEADER")
    if (t === void 0 && (t = !Ac.call(this)), t) {
      const r = o.entries();
      for (const [l, c] of r)
        c.state === "expanded" && (n[l] = !0);
    } else
      n = {};
  else {
    const r = Array.isArray(e) ? e : [e];
    t === void 0 && (t = !n[r[0]]), r.forEach((l) => {
      const c = o.get(l);
      t && (c == null ? void 0 : c.children) ? n[l] = !0 : delete n[l];
    });
  }
  this.update({
    dirtyType: "layout",
    state: { collapsedRows: { ...n } }
  }, () => {
    var r;
    (r = this.options.onNestedChange) == null || r.call(this);
  });
}
function Ac() {
  const e = this.data.nestedMap.values();
  for (const t of e)
    if (t.state === "expanded")
      return !1;
  return !0;
}
function Nc(e, t = 0, n, o = 0) {
  var i;
  n || (n = [...e.keys()]);
  for (const r of n) {
    const l = e.get(r);
    !l || (l.level === o && (l.order = t++), (i = l.children) != null && i.length && (t = Nc(e, t, l.children, o + 1)));
  }
  return t;
}
function Rc(e, t, n, o) {
  const i = e.getNestedRowInfo(t);
  return !i || i.state === "" || !i.children || i.children.forEach((r) => {
    o[r] = n, Rc(e, r, n, o);
  }), i;
}
function Pc(e, t, n, o, i) {
  var c;
  const r = e.getNestedRowInfo(t);
  if (!r || r.state === "")
    return;
  ((c = r.children) == null ? void 0 : c.every((_) => {
    const h = !!(o[_] !== void 0 ? o[_] : i[_]);
    return n === h;
  })) && (o[t] = n), r.parent && Pc(e, r.parent, n, o, i);
}
const dh = {
  name: "nested",
  defaultOptions: {
    nested: !0,
    nestedParentKey: "parent",
    asParentKey: "asParent",
    nestedIndent: 20,
    canSortTo(e, t) {
      const { nestedMap: n } = this.data, o = n.get(e.id), i = n.get(t.id);
      return (o == null ? void 0 : o.parent) === (i == null ? void 0 : i.parent);
    },
    beforeCheckRows(e, t, n) {
      if (!this.options.checkable || !(e != null && e.length))
        return;
      const o = {};
      return Object.entries(t).forEach(([i, r]) => {
        const l = Rc(this, i, r, o);
        l != null && l.parent && Pc(this, l.parent, r, o, n);
      }), o;
    }
  },
  when: (e) => !!e.nested,
  data() {
    return { nestedMap: /* @__PURE__ */ new Map() };
  },
  methods: {
    toggleRow: ph,
    isAllCollapsed: Ac,
    getNestedRowInfo: xr
  },
  beforeLayout() {
    this.data.nestedMap.clear();
  },
  onAddRow(e) {
    var i, r, l, c, _;
    const { nestedMap: t } = this.data, n = (r = e.data) == null ? void 0 : r[(i = this.options.nestedParentKey) != null ? i : "parent"], o = (l = t.get(e.id)) != null ? l : {
      state: "",
      level: 0
    };
    if (o.parent = n, (_ = e.data) != null && _[(c = this.options.asParentKey) != null ? c : "asParent"] && (o.children = []), t.set(e.id, o), n) {
      let h = t.get(n);
      h || (h = {
        state: "",
        level: 0
      }, t.set(n, h)), h.children || (h.children = []), h.children.push(e.id);
    }
  },
  onAddRows(e) {
    return e = e.filter((t) => this.getNestedRowInfo(t.id).state !== "hidden"), Nc(this.data.nestedMap), e.sort((t, n) => {
      var l, c;
      const o = this.getNestedRowInfo(t.id), i = this.getNestedRowInfo(n.id), r = ((l = o.order) != null ? l : 0) - ((c = i.order) != null ? c : 0);
      return r === 0 ? t.index - n.index : r;
    }), e;
  },
  onRenderCell(e, { col: t, row: n }) {
    var c, _, h;
    const { id: o, data: i } = n, { nestedToggle: r } = t.setting, l = this.getNestedRowInfo(o);
    if (r && (l.children || l.parent) && e.unshift((_ = (c = this.options.onRenderNestedToggle) == null ? void 0 : c.call(this, l, o, t, i)) != null ? _ : /* @__PURE__ */ R("a", {
      role: "button",
      className: `dtable-nested-toggle state${l.children ? "" : " is-no-child"}`
    }, /* @__PURE__ */ R("span", {
      className: "toggle-icon"
    }))), l.level) {
      let { nestedIndent: s = r } = t.setting;
      s && (s === !0 && (s = (h = this.options.nestedIndent) != null ? h : 12), e.unshift(/* @__PURE__ */ R("div", {
        className: "dtable-nested-indent",
        style: { width: s * l.level + "px" }
      })));
    }
    return e;
  },
  onRenderHeaderCell(e, { row: t, col: n }) {
    var i, r;
    const { id: o } = t;
    return n.setting.nestedToggle && e.unshift((r = (i = this.options.onRenderNestedToggle) == null ? void 0 : i.call(this, void 0, o, n, void 0)) != null ? r : /* @__PURE__ */ R("a", {
      type: "button",
      className: "dtable-nested-toggle state"
    }, /* @__PURE__ */ R("span", {
      className: "toggle-icon"
    }))), e;
  },
  onRenderRow({ props: e, row: t }) {
    const n = this.getNestedRowInfo(t.id);
    return {
      className: P(e.className, `is-${n.state}`),
      "data-parent": n.parent
    };
  },
  onRenderHeaderRow({ props: e }) {
    return e.className = P(e.className, `is-${this.isAllCollapsed() ? "collapsed" : "expanded"}`), e;
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
}, vh = Dt(dh);
const gh = {
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
        const { linkTemplate: o = "", linkProps: i } = t.setting, r = ce(o, n.data);
        return e[0] = /* @__PURE__ */ R("a", {
          href: r,
          ...i
        }, e[0]), e;
      }
    },
    avatar: {
      onRenderCell(e, { col: t, row: n }) {
        const { data: o } = n, { avatarWithName: i, avatarClass: r = "size-xs circle", avatarKey: l = `${t.name}Avatar` } = t.setting, c = /* @__PURE__ */ R("div", {
          className: `avatar ${r} flex-none`
        }, /* @__PURE__ */ R("img", {
          src: o ? o[l] : ""
        }));
        return i ? e.unshift(c) : e[0] = c, e;
      }
    },
    circleProgress: {
      align: "center",
      onRenderCell(e, { col: t }) {
        const { circleSize: n = 24, circleBorderSize: o = 1, circleBgColor: i = "var(--color-border)", circleColor: r = "var(--color-success-500)" } = t.setting, l = (n - o) / 2, c = n / 2, _ = e[0];
        return e[0] = /* @__PURE__ */ R("svg", {
          width: n,
          height: n
        }, /* @__PURE__ */ R("circle", {
          cx: c,
          cy: c,
          r: l,
          "stroke-width": o,
          stroke: i,
          fill: "transparent"
        }), /* @__PURE__ */ R("circle", {
          cx: c,
          cy: c,
          r: l,
          "stroke-width": o,
          stroke: r,
          fill: "transparent",
          "stroke-linecap": "round",
          "stroke-dasharray": Math.PI * l * 2,
          "stroke-dashoffset": Math.PI * l * 2 * (100 - _) / 100,
          style: { transformOrigin: "center", transform: "rotate(-90deg)" }
        }), /* @__PURE__ */ R("text", {
          x: c,
          y: c + o,
          "dominant-baseline": "middle",
          "text-anchor": "middle",
          style: { fontSize: `${l}px` }
        }, Math.round(_))), e;
      }
    },
    actionButtons: {
      onRenderCell(e, { col: t, row: n }) {
        var c;
        const o = (c = n.data) == null ? void 0 : c[t.name];
        if (!o)
          return e;
        const { actionBtnTemplate: i = '<button type="button" data-action="{action}" title="{title}" class="{className}"><i class="icon icon-{icon}"></i></button>', actionBtnData: r = {}, actionBtnClass: l = "btn text-primary square size-sm ghost" } = t.setting;
        return [{
          html: o.map((_) => {
            typeof _ == "string" && (_ = { action: _ });
            const h = r[_.action];
            return h && (_ = { className: l, ...h, ..._ }), ce(i, _);
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
        const { format: o, type: i } = n, r = e[0];
        return typeof o == "function" ? e[0] = i === "html" ? { html: o(r) } : o(r) : i === "datetime" ? e[0] = wr(r, o) : i === "html" ? e[0] = { html: ce(o, r) } : e[0] = ce(o, r), e;
      }
    }
  }
}, mh = Dt(gh, { buildIn: !0 }), yh = {
  name: "sort-type",
  onRenderHeaderCell(e, { col: t }) {
    const { sortType: n } = t.setting;
    if (n) {
      const { sortLink: o = this.options.sortLink, sortAttrs: i } = t.setting, r = n === !0 ? "none" : n;
      if (e.push(
        /* @__PURE__ */ R("div", {
          className: `dtable-sort dtable-sort-${r}`
        }),
        { outer: !0, attrs: { "data-sort": r } }
      ), o) {
        const l = typeof o == "function" ? o.call(this, t, r) : o;
        e.push(
          { tagName: "a", attrs: { href: l, ...i } }
        );
      }
    }
    return e;
  }
}, bh = Dt(yh, { buildIn: !0 }), wh = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  colHover: ah,
  checkable: hh,
  NestedRowState: Tc,
  nested: vh,
  rich: mh,
  sortType: bh
}, Symbol.toStringTag, { value: "Module" }));
class zt extends xe {
}
S(zt, "NAME", "dtable"), S(zt, "Component", kr), S(zt, "definePlugin", Dt), S(zt, "removePlugin", yc), S(zt, "plugins", wh);
var we, re;
class kh {
  constructor(t) {
    M(this, we, void 0);
    M(this, re, void 0);
    N(this, we, t), N(this, re, document.querySelector(t.getAttribute("data-target")) || document.querySelector(t.getAttribute("data-tab")) || document.querySelector(t.getAttribute("href")));
  }
  showTarget() {
    this.addActive(y(this, we).parentElement.parentElement, y(this, we).parentElement), this.addActive(y(this, re).parentElement, y(this, re)), y(this, re).dispatchEvent(new CustomEvent("show.zui3.tab"));
  }
  show() {
    N(this, re, y(this, we)), this.addActive(y(this, re).parentElement, y(this, re)), N(this, we, document.querySelector(`[href='#${y(this, re).getAttribute("id")}']`) || document.querySelector(`[data-tab='#${y(this, re).getAttribute("id")}']`) || document.querySelector(`[data-target='#${y(this, re).getAttribute("id")}']`)), this.addActive(y(this, we).parentElement.parentElement, y(this, we).parentElement);
  }
  addActive(t, n) {
    const o = t.children;
    Array.from(o).forEach((r) => {
      r.classList.remove("active"), r.classList.contains("fade") && r.classList.remove("in");
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
we = new WeakMap(), re = new WeakMap();
document.addEventListener("click", function(e) {
  e.target instanceof HTMLElement && (e.target.dataset.toggle === "tab" || e.target.getAttribute("data-tab")) && (e.preventDefault(), new kh(e.target).showTarget());
});
export {
  ws as ActionMenu,
  $s as ActionMenuNested,
  Ws as Avatar,
  Ks as BtnGroup,
  se as ContextMenu,
  zt as DTable,
  ae as Dropdown,
  Er as EventBus,
  xs as Menu,
  Js as Nav,
  kh as NavTabs,
  yi as Pager,
  As as ProgressCircle,
  Te as TIME_DAY,
  bi as Toolbar,
  Gc as addI18nMap,
  Eh as browser,
  mi as calculateTimestamp,
  Ch as convertBytes,
  ie as createDate,
  xh as formatBytes,
  wr as formatDate,
  Rh as formatDateSpan,
  ce as formatString,
  Vc as getLangCode,
  Ph as getTimeBeforeDesc,
  Dn as i18n,
  Nh as isDBY,
  ir as isObject,
  Hn as isSameDay,
  Uu as isSameMonth,
  Sh as isSameWeek,
  gi as isSameYear,
  Mh as isToday,
  Ah as isTomorrow,
  Th as isYesterday,
  fr as mergeDeep,
  _r as nativeEvents,
  qc as setLangCode,
  m_ as store
};
