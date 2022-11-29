var nc = Object.defineProperty;
var oc = (e, t, n) => t in e ? nc(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var S = (e, t, n) => (oc(e, typeof t != "symbol" ? t + "" : t, n), n), Ko = (e, t, n) => {
  if (!t.has(e))
    throw TypeError("Cannot " + n);
};
var m = (e, t, n) => (Ko(e, t, "read from private field"), n ? n.call(e) : t.get(e)), M = (e, t, n) => {
  if (t.has(e))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(e) : t.set(e, n);
}, N = (e, t, n, o) => (Ko(e, t, "write to private field"), o ? o.call(e, n) : t.set(e, n), n);
var K = (e, t, n) => (Ko(e, t, "access private method"), n);
var Io, H, gi, mi, Ut, Jr, Zn = {}, yi = [], rc = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function Fe(e, t) {
  for (var n in t)
    e[n] = t[n];
  return e;
}
function bi(e) {
  var t = e.parentNode;
  t && t.removeChild(e);
}
function Wo(e, t, n) {
  var o, i, r, l = {};
  for (r in t)
    r == "key" ? o = t[r] : r == "ref" ? i = t[r] : l[r] = t[r];
  if (arguments.length > 2 && (l.children = arguments.length > 3 ? Io.call(arguments, 2) : n), typeof e == "function" && e.defaultProps != null)
    for (r in e.defaultProps)
      l[r] === void 0 && (l[r] = e.defaultProps[r]);
  return Hn(e, l, o, i, null);
}
function Hn(e, t, n, o, i) {
  var r = { type: e, props: t, key: n, ref: o, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: i == null ? ++gi : i };
  return i == null && H.vnode != null && H.vnode(r), r;
}
function sc() {
  return { current: null };
}
function jo(e) {
  return e.children;
}
function In(e, t) {
  this.props = e, this.context = t;
}
function sn(e, t) {
  if (t == null)
    return e.__ ? sn(e.__, e.__.__k.indexOf(e) + 1) : null;
  for (var n; t < e.__k.length; t++)
    if ((n = e.__k[t]) != null && n.__e != null)
      return n.__e;
  return typeof e.type == "function" ? sn(e) : null;
}
function wi(e) {
  var t, n;
  if ((e = e.__) != null && e.__c != null) {
    for (e.__e = e.__c.base = null, t = 0; t < e.__k.length; t++)
      if ((n = e.__k[t]) != null && n.__e != null) {
        e.__e = e.__c.base = n.__e;
        break;
      }
    return wi(e);
  }
}
function Zr(e) {
  (!e.__d && (e.__d = !0) && Ut.push(e) && !Qn.__r++ || Jr !== H.debounceRendering) && ((Jr = H.debounceRendering) || setTimeout)(Qn);
}
function Qn() {
  for (var e; Qn.__r = Ut.length; )
    e = Ut.sort(function(t, n) {
      return t.__v.__b - n.__v.__b;
    }), Ut = [], e.some(function(t) {
      var n, o, i, r, l, c;
      t.__d && (l = (r = (n = t).__v).__e, (c = n.__P) && (o = [], (i = Fe({}, r)).__v = r.__v + 1, pr(c, r, i, n.__n, c.ownerSVGElement !== void 0, r.__h != null ? [l] : null, o, l == null ? sn(r) : l, r.__h), Ci(o, r), r.__e != l && wi(r)));
    });
}
function ki(e, t, n, o, i, r, l, c, _, h) {
  var s, p, f, a, u, y, d, v = o && o.__k || yi, g = v.length;
  for (n.__k = [], s = 0; s < t.length; s++)
    if ((a = n.__k[s] = (a = t[s]) == null || typeof a == "boolean" ? null : typeof a == "string" || typeof a == "number" || typeof a == "bigint" ? Hn(null, a, null, null, a) : Array.isArray(a) ? Hn(jo, { children: a }, null, null, null) : a.__b > 0 ? Hn(a.type, a.props, a.key, a.ref ? a.ref : null, a.__v) : a) != null) {
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
      pr(e, a, f = f || Zn, i, r, l, c, _, h), u = a.__e, (p = a.ref) && f.ref != p && (d || (d = []), f.ref && d.push(f.ref, null, a), d.push(p, a.__c || u, a)), u != null ? (y == null && (y = u), typeof a.type == "function" && a.__k === f.__k ? a.__d = _ = $i(a, _, e) : _ = xi(e, a, f, v, u, _), typeof n.type == "function" && (n.__d = _)) : _ && f.__e == _ && _.parentNode != e && (_ = sn(f));
    }
  for (n.__e = y, s = g; s--; )
    v[s] != null && Si(v[s], v[s]);
  if (d)
    for (s = 0; s < d.length; s++)
      Ei(d[s], d[++s], d[++s]);
}
function $i(e, t, n) {
  for (var o, i = e.__k, r = 0; i && r < i.length; r++)
    (o = i[r]) && (o.__ = e, t = typeof o.type == "function" ? $i(o, t, n) : xi(n, o, o, i, o.__e, t));
  return t;
}
function xi(e, t, n, o, i, r) {
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
function ic(e, t, n, o, i) {
  var r;
  for (r in n)
    r === "children" || r === "key" || r in t || eo(e, r, null, n[r], o);
  for (r in t)
    i && typeof t[r] != "function" || r === "children" || r === "key" || r === "value" || r === "checked" || n[r] === t[r] || eo(e, r, t[r], n[r], o);
}
function Qr(e, t, n) {
  t[0] === "-" ? e.setProperty(t, n) : e[t] = n == null ? "" : typeof n != "number" || rc.test(t) ? n : n + "px";
}
function eo(e, t, n, o, i) {
  var r;
  e:
    if (t === "style")
      if (typeof n == "string")
        e.style.cssText = n;
      else {
        if (typeof o == "string" && (e.style.cssText = o = ""), o)
          for (t in o)
            n && t in n || Qr(e.style, t, "");
        if (n)
          for (t in n)
            o && n[t] === o[t] || Qr(e.style, t, n[t]);
      }
    else if (t[0] === "o" && t[1] === "n")
      r = t !== (t = t.replace(/Capture$/, "")), t = t.toLowerCase() in e ? t.toLowerCase().slice(2) : t.slice(2), e.l || (e.l = {}), e.l[t + r] = n, n ? o || e.addEventListener(t, r ? ts : es, r) : e.removeEventListener(t, r ? ts : es, r);
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
function es(e) {
  this.l[e.type + !1](H.event ? H.event(e) : e);
}
function ts(e) {
  this.l[e.type + !0](H.event ? H.event(e) : e);
}
function pr(e, t, n, o, i, r, l, c, _) {
  var h, s, p, f, a, u, y, d, v, g, k, w, E, $, x, b = t.type;
  if (t.constructor !== void 0)
    return null;
  n.__h != null && (_ = n.__h, c = t.__e = n.__e, t.__h = null, r = [c]), (h = H.__b) && h(t);
  try {
    e:
      if (typeof b == "function") {
        if (d = t.props, v = (h = b.contextType) && o[h.__c], g = h ? v ? v.props.value : h.__ : o, n.__c ? y = (s = t.__c = n.__c).__ = s.__E : ("prototype" in b && b.prototype.render ? t.__c = s = new b(d, g) : (t.__c = s = new In(d, g), s.constructor = b, s.render = ac), v && v.sub(s), s.props = d, s.state || (s.state = {}), s.context = g, s.__n = o, p = s.__d = !0, s.__h = [], s._sb = []), s.__s == null && (s.__s = s.state), b.getDerivedStateFromProps != null && (s.__s == s.state && (s.__s = Fe({}, s.__s)), Fe(s.__s, b.getDerivedStateFromProps(d, s.__s))), f = s.props, a = s.state, p)
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
        s.state = s.__s, s.getChildContext != null && (o = Fe(Fe({}, o), s.getChildContext())), p || s.getSnapshotBeforeUpdate == null || (u = s.getSnapshotBeforeUpdate(f, a)), x = h != null && h.type === jo && h.key == null ? h.props.children : h, ki(e, Array.isArray(x) ? x : [x], t, n, o, i, r, l, c, _), s.base = t.__e, t.__h = null, s.__h.length && l.push(s), y && (s.__E = s.__ = null), s.__e = !1;
      } else
        r == null && t.__v === n.__v ? (t.__k = n.__k, t.__e = n.__e) : t.__e = lc(n.__e, t, n, o, i, r, l, _);
    (h = H.diffed) && h(t);
  } catch (C) {
    t.__v = null, (_ || r != null) && (t.__e = c, t.__h = !!_, r[r.indexOf(c)] = null), H.__e(C, t, n);
  }
}
function Ci(e, t) {
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
function lc(e, t, n, o, i, r, l, c) {
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
    if (r = r && Io.call(e.childNodes), h = (p = n.props || Zn).dangerouslySetInnerHTML, s = f.dangerouslySetInnerHTML, !c) {
      if (r != null)
        for (p = {}, u = 0; u < e.attributes.length; u++)
          p[e.attributes[u].name] = e.attributes[u].value;
      (s || h) && (s && (h && s.__html == h.__html || s.__html === e.innerHTML) || (e.innerHTML = s && s.__html || ""));
    }
    if (ic(e, f, p, i, c), s)
      t.__k = [];
    else if (u = t.props.children, ki(e, Array.isArray(u) ? u : [u], t, n, o, i && a !== "foreignObject", r, l, r ? r[0] : n.__k && sn(n, 0), c), r != null)
      for (u = r.length; u--; )
        r[u] != null && bi(r[u]);
    c || ("value" in f && (u = f.value) !== void 0 && (u !== e.value || a === "progress" && !u || a === "option" && u !== p.value) && eo(e, "value", u, p.value, !1), "checked" in f && (u = f.checked) !== void 0 && u !== e.checked && eo(e, "checked", u, p.checked, !1));
  }
  return e;
}
function Ei(e, t, n) {
  try {
    typeof e == "function" ? e(t) : e.current = t;
  } catch (o) {
    H.__e(o, n);
  }
}
function Si(e, t, n) {
  var o, i;
  if (H.unmount && H.unmount(e), (o = e.ref) && (o.current && o.current !== e.__e || Ei(o, null, t)), (o = e.__c) != null) {
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
      o[i] && Si(o[i], t, n || typeof e.type != "function");
  n || e.__e == null || bi(e.__e), e.__ = e.__e = e.__d = void 0;
}
function ac(e, t, n) {
  return this.constructor(e, n);
}
function cc(e, t, n) {
  var o, i, r;
  H.__ && H.__(e, t), i = (o = typeof n == "function") ? null : n && n.__k || t.__k, r = [], pr(t, e = (!o && n || t).__k = Wo(jo, null, [e]), i || Zn, Zn, t.ownerSVGElement !== void 0, !o && n ? [n] : i ? null : t.firstChild ? Io.call(t.childNodes) : null, r, !o && n ? n : i ? i.__e : t.firstChild, o), Ci(r, e);
}
Io = yi.slice, H = { __e: function(e, t, n, o) {
  for (var i, r, l; t = t.__; )
    if ((i = t.__c) && !i.__)
      try {
        if ((r = i.constructor) && r.getDerivedStateFromError != null && (i.setState(r.getDerivedStateFromError(e)), l = i.__d), i.componentDidCatch != null && (i.componentDidCatch(e, o || {}), l = i.__d), l)
          return i.__E = i;
      } catch (c) {
        e = c;
      }
  throw e;
} }, gi = 0, mi = function(e) {
  return e != null && e.constructor === void 0;
}, In.prototype.setState = function(e, t) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = Fe({}, this.state), typeof e == "function" && (e = e(Fe({}, n), this.props)), e && Fe(n, e), e != null && this.__v && (t && this._sb.push(t), Zr(this));
}, In.prototype.forceUpdate = function(e) {
  this.__v && (this.__e = !0, e && this.__h.push(e), Zr(this));
}, In.prototype.render = jo, Ut = [], Qn.__r = 0;
var Me;
class _c {
  constructor(t = "") {
    M(this, Me, void 0);
    typeof t == "object" ? N(this, Me, t) : N(this, Me, document.appendChild(document.createComment(t)));
  }
  on(t, n, o) {
    m(this, Me).addEventListener(t, n, o);
  }
  once(t, n, o) {
    m(this, Me).addEventListener(t, n, { once: !0, ...o });
  }
  off(t, n, o) {
    m(this, Me).removeEventListener(t, n, o);
  }
  emit(t) {
    return m(this, Me).dispatchEvent(t), t;
  }
}
Me = new WeakMap();
const Qo = /* @__PURE__ */ new Set([
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
class dr extends _c {
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
    return typeof t == "string" && (Qo.has(t) ? (t = new Event(t), Object.assign(t, { detail: n })) : t = new CustomEvent(t, { detail: n })), super.emit(dr.createEvent(t, n));
  }
  static createEvent(t, n) {
    return typeof t == "string" && (Qo.has(t) ? (t = new Event(t), Object.assign(t, { detail: n })) : t = new CustomEvent(t, { detail: n })), t;
  }
}
var Ae, yn, it, jt;
class ns extends dr {
  constructor(n = "", o) {
    super(n);
    M(this, it);
    M(this, Ae, /* @__PURE__ */ new Map());
    M(this, yn, void 0);
    N(this, yn, o == null ? void 0 : o.customEventSuffix);
  }
  on(n, o, i) {
    n = K(this, it, jt).call(this, n), super.on(n, o, i), m(this, Ae).set(o, [n, i]);
  }
  off(n, o, i) {
    n = K(this, it, jt).call(this, n), super.off(n, o, i), m(this, Ae).delete(o);
  }
  once(n, o, i) {
    n = K(this, it, jt).call(this, n);
    const r = (l) => {
      o(l), m(this, Ae).delete(r);
    };
    super.once(n, r, i), m(this, Ae).set(r, [n, i]);
  }
  emit(n, o) {
    return typeof n == "string" && (n = K(this, it, jt).call(this, n)), super.emit(n, o);
  }
  offAll() {
    Array.from(m(this, Ae).entries()).forEach(([n, [o, i]]) => {
      super.off(o, n, i);
    }), m(this, Ae).clear();
  }
}
Ae = new WeakMap(), yn = new WeakMap(), it = new WeakSet(), jt = function(n) {
  const o = m(this, yn);
  return Qo.has(n) || typeof o != "string" || n.endsWith(o) ? n : `${n}${o}`;
};
function fc(e, t) {
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
function uc(e, t, n) {
  const o = fc(e, t), i = o[o.length - 1];
  return i === void 0 ? n : i;
}
function Xo(e) {
  return !!e && typeof e == "object" && !Array.isArray(e);
}
function er(e, ...t) {
  if (!t.length)
    return e;
  const n = t.shift();
  if (Xo(e) && Xo(n))
    for (const o in n)
      Xo(n[o]) ? (e[o] || Object.assign(e, { [o]: {} }), er(e[o], n[o])) : Object.assign(e, { [o]: n[o] });
  return er(e, ...t);
}
function be(e, ...t) {
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
var vr = /* @__PURE__ */ ((e) => (e[e.B = 1] = "B", e[e.KB = 1024] = "KB", e[e.MB = 1048576] = "MB", e[e.GB = 1073741824] = "GB", e[e.TB = 1099511627776] = "TB", e))(vr || {});
function Ou(e, t = 2, n = "") {
  return Number.isNaN(e) ? "?KB" : (n || (e < 1024 ? n = "B" : e < 1048576 ? n = "KB" : e < 1073741824 ? n = "MB" : e < 1099511627776 ? n = "GB" : n = "TB"), (e / vr[n]).toFixed(t) + n);
}
const Lu = (e) => {
  const t = /^[0-9]*(B|KB|MB|GB|TB)$/;
  e = e.toUpperCase();
  const n = e.match(t);
  if (!n)
    return 0;
  const o = n[1];
  return e = e.replace(o, ""), Number.parseInt(e, 10) * vr[o];
};
var di, vi;
let gr = (vi = (di = document.documentElement.getAttribute("lang")) == null ? void 0 : di.toLowerCase()) != null ? vi : "zh_cn", Ie;
function hc() {
  return gr;
}
function pc(e) {
  gr = e.toLowerCase();
}
function dc(e, t) {
  Ie || (Ie = {}), typeof e == "string" && (e = { [e]: t != null ? t : {} }), er(Ie, e);
}
function An(e, t, n, o, i, r) {
  Array.isArray(e) ? Ie && e.unshift(Ie) : e = Ie ? [Ie, e] : [e], typeof n == "string" && (r = i, i = o, o = n, n = void 0);
  const l = i || gr;
  let c;
  for (const _ of e) {
    if (!_)
      continue;
    const h = _[l];
    if (!h)
      continue;
    const s = r && _ === Ie ? `${r}.${t}` : t;
    if (c = uc(h, s), c !== void 0)
      break;
  }
  return c === void 0 ? o : n ? be(c, ...Array.isArray(n) ? n : [n]) : c;
}
An.addLang = dc;
An.getCode = hc;
An.setCode = pc;
function vc(e) {
  return Object.fromEntries(Object.entries(e).map(([t, n]) => {
    if (typeof n == "string")
      try {
        n = JSON.parse(n);
      } catch {
      }
    return [t, n];
  }));
}
var Re, pt, ne;
class Bt {
  constructor(t, n) {
    M(this, Re, void 0);
    M(this, pt, void 0);
    M(this, ne, void 0);
    var o;
    t = typeof t == "string" ? document.querySelector(t) : t, this.constructor.EVENTS && N(this, ne, new ns(t, { customEventSuffix: `.${this.constructor.KEY}` })), N(this, Re, { ...this.constructor.DEFAULT, ...t instanceof HTMLElement ? vc(t.dataset) : null, ...n }), this.constructor.all.set(t, this), N(this, pt, t), this.init(), (o = m(this, ne)) == null || o.emit("inited", this);
  }
  get options() {
    return m(this, Re);
  }
  get element() {
    return m(this, pt);
  }
  get events() {
    return m(this, ne);
  }
  init() {
  }
  setOptions(t) {
    return t && Object.assign(m(this, Re), t), m(this, Re);
  }
  render(t) {
    this.setOptions(t);
  }
  destroy() {
    this.constructor.all.delete(m(this, pt)), m(this, ne) && (m(this, ne).emit("destroyed", this), m(this, ne).offAll());
  }
  on(t, n, o) {
    var i;
    (i = m(this, ne)) == null || i.on(t, n, o);
  }
  once(t, n, o) {
    var i;
    (i = m(this, ne)) == null || i.once(t, n, o);
  }
  off(t, n, o) {
    var i;
    (i = m(this, ne)) == null || i.off(t, n, o);
  }
  emit(t, n) {
    var l;
    let o = ns.createEvent(t, n);
    const i = `on${o.type.replace(`.${this.constructor.KEY}`, "")}`, r = m(this, Re)[i];
    return r && r(o) === !1 && (o.preventDefault(), o.stopPropagation()), o = (l = m(this, ne)) == null ? void 0 : l.emit(o), o;
  }
  i18n(t, n, o) {
    var i;
    return (i = An(m(this, Re).i18n, t, n, o, this.options.lang, this.constructor.NAME)) != null ? i : `{i18n:${t}}`;
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
Re = new WeakMap(), pt = new WeakMap(), ne = new WeakMap(), S(Bt, "EVENTS", !1), S(Bt, "DEFAULT", {}), S(Bt, "allComponents", /* @__PURE__ */ new Map());
class Le extends Bt {
  constructor() {
    super(...arguments);
    S(this, "ref", sc());
  }
  get $() {
    return this.ref.current;
  }
  init() {
    requestAnimationFrame(() => this.render());
  }
  render(n) {
    const o = this.constructor.Component;
    cc(/* @__PURE__ */ Wo(o, {
      ref: this.ref,
      ...this.setOptions(n)
    }), this.element);
  }
}
var mr, j, Mi, Ai, zt, os, Ri = {}, Ni = [], gc = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function Ve(e, t) {
  for (var n in t)
    e[n] = t[n];
  return e;
}
function Ti(e) {
  var t = e.parentNode;
  t && t.removeChild(e);
}
function ee(e, t, n) {
  var o, i, r, l = {};
  for (r in t)
    r == "key" ? o = t[r] : r == "ref" ? i = t[r] : l[r] = t[r];
  if (arguments.length > 2 && (l.children = arguments.length > 3 ? mr.call(arguments, 2) : n), typeof e == "function" && e.defaultProps != null)
    for (r in e.defaultProps)
      l[r] === void 0 && (l[r] = e.defaultProps[r]);
  return Wn(e, l, o, i, null);
}
function Wn(e, t, n, o, i) {
  var r = { type: e, props: t, key: n, ref: o, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: i == null ? ++Mi : i };
  return i == null && j.vnode != null && j.vnode(r), r;
}
function mc() {
  return { current: null };
}
function yr(e) {
  return e.children;
}
function Ft(e, t) {
  this.props = e, this.context = t;
}
function ln(e, t) {
  if (t == null)
    return e.__ ? ln(e.__, e.__.__k.indexOf(e) + 1) : null;
  for (var n; t < e.__k.length; t++)
    if ((n = e.__k[t]) != null && n.__e != null)
      return n.__e;
  return typeof e.type == "function" ? ln(e) : null;
}
function Pi(e) {
  var t, n;
  if ((e = e.__) != null && e.__c != null) {
    for (e.__e = e.__c.base = null, t = 0; t < e.__k.length; t++)
      if ((n = e.__k[t]) != null && n.__e != null) {
        e.__e = e.__c.base = n.__e;
        break;
      }
    return Pi(e);
  }
}
function rs(e) {
  (!e.__d && (e.__d = !0) && zt.push(e) && !to.__r++ || os !== j.debounceRendering) && ((os = j.debounceRendering) || setTimeout)(to);
}
function to() {
  for (var e; to.__r = zt.length; )
    e = zt.sort(function(t, n) {
      return t.__v.__b - n.__v.__b;
    }), zt = [], e.some(function(t) {
      var n, o, i, r, l, c;
      t.__d && (l = (r = (n = t).__v).__e, (c = n.__P) && (o = [], (i = Ve({}, r)).__v = r.__v + 1, Hi(c, r, i, n.__n, c.ownerSVGElement !== void 0, r.__h != null ? [l] : null, o, l == null ? ln(r) : l, r.__h), bc(o, r), r.__e != l && Pi(r)));
    });
}
function Oi(e, t, n, o, i, r, l, c, _, h) {
  var s, p, f, a, u, y, d, v = o && o.__k || Ni, g = v.length;
  for (n.__k = [], s = 0; s < t.length; s++)
    if ((a = n.__k[s] = (a = t[s]) == null || typeof a == "boolean" ? null : typeof a == "string" || typeof a == "number" || typeof a == "bigint" ? Wn(null, a, null, null, a) : Array.isArray(a) ? Wn(yr, { children: a }, null, null, null) : a.__b > 0 ? Wn(a.type, a.props, a.key, a.ref ? a.ref : null, a.__v) : a) != null) {
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
      Hi(e, a, f = f || Ri, i, r, l, c, _, h), u = a.__e, (p = a.ref) && f.ref != p && (d || (d = []), f.ref && d.push(f.ref, null, a), d.push(p, a.__c || u, a)), u != null ? (y == null && (y = u), typeof a.type == "function" && a.__k === f.__k ? a.__d = _ = Li(a, _, e) : _ = Di(e, a, f, v, u, _), typeof n.type == "function" && (n.__d = _)) : _ && f.__e == _ && _.parentNode != e && (_ = ln(f));
    }
  for (n.__e = y, s = g; s--; )
    v[s] != null && Wi(v[s], v[s]);
  if (d)
    for (s = 0; s < d.length; s++)
      Ii(d[s], d[++s], d[++s]);
}
function Li(e, t, n) {
  for (var o, i = e.__k, r = 0; i && r < i.length; r++)
    (o = i[r]) && (o.__ = e, t = typeof o.type == "function" ? Li(o, t, n) : Di(n, o, o, i, o.__e, t));
  return t;
}
function Di(e, t, n, o, i, r) {
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
function yc(e, t, n, o, i) {
  var r;
  for (r in n)
    r === "children" || r === "key" || r in t || no(e, r, null, n[r], o);
  for (r in t)
    i && typeof t[r] != "function" || r === "children" || r === "key" || r === "value" || r === "checked" || n[r] === t[r] || no(e, r, t[r], n[r], o);
}
function ss(e, t, n) {
  t[0] === "-" ? e.setProperty(t, n) : e[t] = n == null ? "" : typeof n != "number" || gc.test(t) ? n : n + "px";
}
function no(e, t, n, o, i) {
  var r;
  e:
    if (t === "style")
      if (typeof n == "string")
        e.style.cssText = n;
      else {
        if (typeof o == "string" && (e.style.cssText = o = ""), o)
          for (t in o)
            n && t in n || ss(e.style, t, "");
        if (n)
          for (t in n)
            o && n[t] === o[t] || ss(e.style, t, n[t]);
      }
    else if (t[0] === "o" && t[1] === "n")
      r = t !== (t = t.replace(/Capture$/, "")), t = t.toLowerCase() in e ? t.toLowerCase().slice(2) : t.slice(2), e.l || (e.l = {}), e.l[t + r] = n, n ? o || e.addEventListener(t, r ? ls : is, r) : e.removeEventListener(t, r ? ls : is, r);
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
function is(e) {
  this.l[e.type + !1](j.event ? j.event(e) : e);
}
function ls(e) {
  this.l[e.type + !0](j.event ? j.event(e) : e);
}
function Hi(e, t, n, o, i, r, l, c, _) {
  var h, s, p, f, a, u, y, d, v, g, k, w, E, $, x, b = t.type;
  if (t.constructor !== void 0)
    return null;
  n.__h != null && (_ = n.__h, c = t.__e = n.__e, t.__h = null, r = [c]), (h = j.__b) && h(t);
  try {
    e:
      if (typeof b == "function") {
        if (d = t.props, v = (h = b.contextType) && o[h.__c], g = h ? v ? v.props.value : h.__ : o, n.__c ? y = (s = t.__c = n.__c).__ = s.__E : ("prototype" in b && b.prototype.render ? t.__c = s = new b(d, g) : (t.__c = s = new Ft(d, g), s.constructor = b, s.render = kc), v && v.sub(s), s.props = d, s.state || (s.state = {}), s.context = g, s.__n = o, p = s.__d = !0, s.__h = [], s._sb = []), s.__s == null && (s.__s = s.state), b.getDerivedStateFromProps != null && (s.__s == s.state && (s.__s = Ve({}, s.__s)), Ve(s.__s, b.getDerivedStateFromProps(d, s.__s))), f = s.props, a = s.state, p)
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
        s.state = s.__s, s.getChildContext != null && (o = Ve(Ve({}, o), s.getChildContext())), p || s.getSnapshotBeforeUpdate == null || (u = s.getSnapshotBeforeUpdate(f, a)), x = h != null && h.type === yr && h.key == null ? h.props.children : h, Oi(e, Array.isArray(x) ? x : [x], t, n, o, i, r, l, c, _), s.base = t.__e, t.__h = null, s.__h.length && l.push(s), y && (s.__E = s.__ = null), s.__e = !1;
      } else
        r == null && t.__v === n.__v ? (t.__k = n.__k, t.__e = n.__e) : t.__e = wc(n.__e, t, n, o, i, r, l, _);
    (h = j.diffed) && h(t);
  } catch (C) {
    t.__v = null, (_ || r != null) && (t.__e = c, t.__h = !!_, r[r.indexOf(c)] = null), j.__e(C, t, n);
  }
}
function bc(e, t) {
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
function wc(e, t, n, o, i, r, l, c) {
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
    if (r = r && mr.call(e.childNodes), h = (p = n.props || Ri).dangerouslySetInnerHTML, s = f.dangerouslySetInnerHTML, !c) {
      if (r != null)
        for (p = {}, u = 0; u < e.attributes.length; u++)
          p[e.attributes[u].name] = e.attributes[u].value;
      (s || h) && (s && (h && s.__html == h.__html || s.__html === e.innerHTML) || (e.innerHTML = s && s.__html || ""));
    }
    if (yc(e, f, p, i, c), s)
      t.__k = [];
    else if (u = t.props.children, Oi(e, Array.isArray(u) ? u : [u], t, n, o, i && a !== "foreignObject", r, l, r ? r[0] : n.__k && ln(n, 0), c), r != null)
      for (u = r.length; u--; )
        r[u] != null && Ti(r[u]);
    c || ("value" in f && (u = f.value) !== void 0 && (u !== e.value || a === "progress" && !u || a === "option" && u !== p.value) && no(e, "value", u, p.value, !1), "checked" in f && (u = f.checked) !== void 0 && u !== e.checked && no(e, "checked", u, p.checked, !1));
  }
  return e;
}
function Ii(e, t, n) {
  try {
    typeof e == "function" ? e(t) : e.current = t;
  } catch (o) {
    j.__e(o, n);
  }
}
function Wi(e, t, n) {
  var o, i;
  if (j.unmount && j.unmount(e), (o = e.ref) && (o.current && o.current !== e.__e || Ii(o, null, t)), (o = e.__c) != null) {
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
      o[i] && Wi(o[i], t, n || typeof e.type != "function");
  n || e.__e == null || Ti(e.__e), e.__ = e.__e = e.__d = void 0;
}
function kc(e, t, n) {
  return this.constructor(e, n);
}
mr = Ni.slice, j = { __e: function(e, t, n, o) {
  for (var i, r, l; t = t.__; )
    if ((i = t.__c) && !i.__)
      try {
        if ((r = i.constructor) && r.getDerivedStateFromError != null && (i.setState(r.getDerivedStateFromError(e)), l = i.__d), i.componentDidCatch != null && (i.componentDidCatch(e, o || {}), l = i.__d), l)
          return i.__E = i;
      } catch (c) {
        e = c;
      }
  throw e;
} }, Mi = 0, Ai = function(e) {
  return e != null && e.constructor === void 0;
}, Ft.prototype.setState = function(e, t) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = Ve({}, this.state), typeof e == "function" && (e = e(Ve({}, n), this.props)), e && Ve(n, e), e != null && this.__v && (t && this._sb.push(t), rs(this));
}, Ft.prototype.forceUpdate = function(e) {
  this.__v && (this.__e = !0, e && this.__h.push(e), rs(this));
}, Ft.prototype.render = yr, zt = [], to.__r = 0;
const P = (...e) => {
  const t = e.map((n) => Array.isArray(n) ? P(...n) : typeof n == "function" ? P(n()) : n !== null && typeof n == "object" ? Object.keys(n).filter((o) => {
    const i = n[o];
    return typeof i == "function" ? !!i() : !!i;
  }).join(" ") : n).filter((n) => typeof n == "string" && n.length);
  return t.length ? t.join(" ") : void 0;
};
function $c({
  component: e = "div",
  className: t,
  children: n,
  style: o,
  attrs: i
}) {
  return ee(e, {
    className: P(t),
    style: o,
    ...i
  }, n);
}
function ji({
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
    typeof c == "string" ? /* @__PURE__ */ ee("i", {
      class: `icon ${c}`
    }) : c,
    /* @__PURE__ */ ee("span", {
      className: "text"
    }, _),
    typeof n == "function" ? n() : n,
    typeof s == "string" ? /* @__PURE__ */ ee("i", {
      class: `icon ${s}`
    }) : s
  ];
  return ee(e, {
    className: P(t, { disabled: r, active: l }),
    title: p,
    [e === "a" ? "href" : "data-url"]: i,
    [e === "a" ? "target" : "data-target"]: h,
    style: f,
    onClick: a,
    ...o
  }, ...u);
}
function xc({
  component: e = "div",
  className: t,
  text: n,
  attrs: o,
  children: i,
  style: r,
  onClick: l
}) {
  return ee(e, {
    className: P(t),
    style: r,
    onClick: l,
    ...o
  }, n, typeof i == "function" ? i() : i);
}
function Cc({
  component: e = "div",
  className: t,
  style: n,
  space: o,
  flex: i,
  attrs: r,
  onClick: l,
  children: c
}) {
  return ee(e, {
    className: P(t),
    style: { width: o, height: o, flex: i, ...n },
    onClick: l,
    ...r
  }, c);
}
function Ec(e) {
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
  return i.forEach((y) => {
    var v;
    const d = [];
    typeof y == "string" && c && c[y] && (y = c[y]), typeof y == "function" ? _ ? d.push(..._.call(l, y, a, ...r)) : d.push(...(v = y.call(l, a, ...r)) != null ? v : []) : d.push(y), d.forEach((g) => {
      var k;
      g != null && (typeof g == "object" && !mi(g) && ("html" in g || "__html" in g || "className" in g || "style" in g || "attrs" in g || "children" in g) ? g.html ? a.push(
        /* @__PURE__ */ Wo("div", {
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
function tr({
  tag: e = "div",
  ...t
}) {
  const [n, o] = Ec(t);
  return Wo(e, n, ...o);
}
function Sc(e) {
  return /* @__PURE__ */ ee(tr, {
    ...e
  });
}
function Ui({
  component: e = "div",
  className: t,
  children: n,
  style: o,
  attrs: i
}) {
  return ee(e, {
    className: P(t),
    style: o,
    ...i
  }, n);
}
const Co = class extends Ft {
  constructor() {
    super(...arguments);
    S(this, "ref", mc());
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
          return /* @__PURE__ */ ee(d, {
            ...r
          });
      } else if (typeof l == "function") {
        const d = l.call(this, r, ee);
        if (Ai(d))
          return d;
        typeof d == "object" && Object.assign(r, d);
      }
    }
    const { type: c = "item", component: _, key: h = i, rootAttrs: s, rootClass: p, rootStyle: f, rootChildren: a, ...u } = r, y = !_ || typeof _ == "string" ? this.constructor.ItemComponents && this.constructor.ItemComponents[c] || Co.ItemComponents[c] : _;
    return Object.assign(u, {
      type: c,
      component: typeof _ == "string" ? _ : void 0
    }), this.renderTypedItem(y, {
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
    return /* @__PURE__ */ ee("li", {
      className: P(`${this.name}-${i.type}`, l),
      key: c,
      ..._
    }, /* @__PURE__ */ ee(n, {
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
    } = n, y = this.constructor.ROOT_TAG;
    return /* @__PURE__ */ ee(y, {
      class: P(this.name, l),
      ...u,
      ref: this.ref
    }, c && c.map(this.renderItem.bind(this, n)), _);
  }
};
let Te = Co;
S(Te, "ItemComponents", {
  divider: $c,
  item: ji,
  heading: xc,
  space: Cc,
  custom: Sc,
  basic: Ui
}), S(Te, "ROOT_TAG", "menu"), S(Te, "NAME", "action-menu");
class as extends Le {
}
S(as, "NAME", "actionmenu"), S(as, "Component", Te);
function cs({
  ...e
}) {
  return /* @__PURE__ */ ee(ji, {
    ...e
  });
}
var bn, de, dt;
class br extends Te {
  constructor(n) {
    var o;
    super(n);
    M(this, bn, /* @__PURE__ */ new Set());
    M(this, de, void 0);
    M(this, dt, (n, o, i) => {
      this.toggleNestedMenu(n, o), i.preventDefault();
    });
    N(this, de, n.nestedShow === void 0), m(this, de) && (this.state = { nestedShow: (o = n.defaultNestedShow) != null ? o : {} });
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
    return /* @__PURE__ */ ee(i, {
      items: o,
      name: this.props.name,
      nestedShow: m(this, de) ? this.state.nestedShow : this.props.nestedShow,
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
    m(this, bn).add(l);
    const c = this.isNestedMenuShow(l);
    if (c && (r.rootChildren = [
      r.rootChildren,
      this.renderNestedMenu(o)
    ], r.component = cs), this.nestedTrigger === "hover")
      r.rootAttrs = {
        ...r.rootAttrs,
        onMouseEnter: m(this, dt).bind(this, l, !0),
        onMouseLeave: m(this, dt).bind(this, l, !1)
      };
    else if (this.nestedTrigger === "click") {
      const { onClick: s } = r;
      r.onClick = (p) => {
        m(this, dt).call(this, l, void 0, p), s == null || s(p);
      };
    }
    const _ = this.renderToggleIcon(c, r);
    return _ && (r.children = [r.children, _]), r.rootClass = [r.rootClass, "has-nested-menu", c ? "show" : ""], r;
  }
  isNestedMenuShow(n) {
    const o = m(this, de) ? this.state.nestedShow : this.props.nestedShow;
    return o && typeof o == "object" ? o[n] : !!o;
  }
  toggleNestedMenu(n, o) {
    const { controlledMenu: i } = this.props;
    if (i)
      return i.toggleNestedMenu(n, o);
    if (!m(this, de))
      return !1;
    let { nestedShow: r = {} } = this.state;
    if (typeof r == "boolean" && (r === !0 ? r = [...m(this, bn).values()].reduce((l, c) => (l[c] = !0, l), {}) : r = {}), o === void 0)
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
    !m(this, de) || this.setState({ nestedShow: !0 });
  }
  hideAllNestedMenu() {
    !m(this, de) || this.setState({ nestedShow: !1 });
  }
}
bn = new WeakMap(), de = new WeakMap(), dt = new WeakMap(), S(br, "ItemComponents", {
  item: cs
});
class _s extends Le {
}
S(_s, "NAME", "actionmenunested"), S(_s, "Component", br);
var Bi, nr, zi, Mc = [];
function Ac(e, t, n) {
  var o, i, r, l = {};
  for (r in t)
    r == "key" ? o = t[r] : r == "ref" ? i = t[r] : l[r] = t[r];
  if (arguments.length > 2 && (l.children = arguments.length > 3 ? Bi.call(arguments, 2) : n), typeof e == "function" && e.defaultProps != null)
    for (r in e.defaultProps)
      l[r] === void 0 && (l[r] = e.defaultProps[r]);
  return Rc(e, l, o, i, null);
}
function Rc(e, t, n, o, i) {
  var r = { type: e, props: t, key: n, ref: o, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: i == null ? ++zi : i };
  return i == null && nr.vnode != null && nr.vnode(r), r;
}
Bi = Mc.slice, nr = { __e: function(e, t, n, o) {
  for (var i, r, l; t = t.__; )
    if ((i = t.__c) && !i.__)
      try {
        if ((r = i.constructor) && r.getDerivedStateFromError != null && (i.setState(r.getDerivedStateFromError(e)), l = i.__d), i.componentDidCatch != null && (i.componentDidCatch(e, o || {}), l = i.__d), l)
          return i.__E = i;
      } catch (c) {
        e = c;
      }
  throw e;
} }, zi = 0;
class wr extends br {
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
    return /* @__PURE__ */ Ac("span", {
      class: `${this.name}-toggle-icon caret-${t ? "down" : "right"}`
    });
  }
}
S(wr, "NAME", "menu");
class fs extends Le {
}
S(fs, "NAME", "menu"), S(fs, "Component", wr);
var kr, U, Fi, Vt, us, Vi = {}, qi = [], Nc = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function qe(e, t) {
  for (var n in t)
    e[n] = t[n];
  return e;
}
function Gi(e) {
  var t = e.parentNode;
  t && t.removeChild(e);
}
function Ln(e, t, n) {
  var o, i, r, l = {};
  for (r in t)
    r == "key" ? o = t[r] : r == "ref" ? i = t[r] : l[r] = t[r];
  if (arguments.length > 2 && (l.children = arguments.length > 3 ? kr.call(arguments, 2) : n), typeof e == "function" && e.defaultProps != null)
    for (r in e.defaultProps)
      l[r] === void 0 && (l[r] = e.defaultProps[r]);
  return jn(e, l, o, i, null);
}
function jn(e, t, n, o, i) {
  var r = { type: e, props: t, key: n, ref: o, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: i == null ? ++Fi : i };
  return i == null && U.vnode != null && U.vnode(r), r;
}
function $r(e) {
  return e.children;
}
function qt(e, t) {
  this.props = e, this.context = t;
}
function an(e, t) {
  if (t == null)
    return e.__ ? an(e.__, e.__.__k.indexOf(e) + 1) : null;
  for (var n; t < e.__k.length; t++)
    if ((n = e.__k[t]) != null && n.__e != null)
      return n.__e;
  return typeof e.type == "function" ? an(e) : null;
}
function Yi(e) {
  var t, n;
  if ((e = e.__) != null && e.__c != null) {
    for (e.__e = e.__c.base = null, t = 0; t < e.__k.length; t++)
      if ((n = e.__k[t]) != null && n.__e != null) {
        e.__e = e.__c.base = n.__e;
        break;
      }
    return Yi(e);
  }
}
function hs(e) {
  (!e.__d && (e.__d = !0) && Vt.push(e) && !oo.__r++ || us !== U.debounceRendering) && ((us = U.debounceRendering) || setTimeout)(oo);
}
function oo() {
  for (var e; oo.__r = Vt.length; )
    e = Vt.sort(function(t, n) {
      return t.__v.__b - n.__v.__b;
    }), Vt = [], e.some(function(t) {
      var n, o, i, r, l, c;
      t.__d && (l = (r = (n = t).__v).__e, (c = n.__P) && (o = [], (i = qe({}, r)).__v = r.__v + 1, Zi(c, r, i, n.__n, c.ownerSVGElement !== void 0, r.__h != null ? [l] : null, o, l == null ? an(r) : l, r.__h), Pc(o, r), r.__e != l && Yi(r)));
    });
}
function Ki(e, t, n, o, i, r, l, c, _, h) {
  var s, p, f, a, u, y, d, v = o && o.__k || qi, g = v.length;
  for (n.__k = [], s = 0; s < t.length; s++)
    if ((a = n.__k[s] = (a = t[s]) == null || typeof a == "boolean" ? null : typeof a == "string" || typeof a == "number" || typeof a == "bigint" ? jn(null, a, null, null, a) : Array.isArray(a) ? jn($r, { children: a }, null, null, null) : a.__b > 0 ? jn(a.type, a.props, a.key, a.ref ? a.ref : null, a.__v) : a) != null) {
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
      Zi(e, a, f = f || Vi, i, r, l, c, _, h), u = a.__e, (p = a.ref) && f.ref != p && (d || (d = []), f.ref && d.push(f.ref, null, a), d.push(p, a.__c || u, a)), u != null ? (y == null && (y = u), typeof a.type == "function" && a.__k === f.__k ? a.__d = _ = Xi(a, _, e) : _ = Ji(e, a, f, v, u, _), typeof n.type == "function" && (n.__d = _)) : _ && f.__e == _ && _.parentNode != e && (_ = an(f));
    }
  for (n.__e = y, s = g; s--; )
    v[s] != null && el(v[s], v[s]);
  if (d)
    for (s = 0; s < d.length; s++)
      Qi(d[s], d[++s], d[++s]);
}
function Xi(e, t, n) {
  for (var o, i = e.__k, r = 0; i && r < i.length; r++)
    (o = i[r]) && (o.__ = e, t = typeof o.type == "function" ? Xi(o, t, n) : Ji(n, o, o, i, o.__e, t));
  return t;
}
function Ji(e, t, n, o, i, r) {
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
function Tc(e, t, n, o, i) {
  var r;
  for (r in n)
    r === "children" || r === "key" || r in t || ro(e, r, null, n[r], o);
  for (r in t)
    i && typeof t[r] != "function" || r === "children" || r === "key" || r === "value" || r === "checked" || n[r] === t[r] || ro(e, r, t[r], n[r], o);
}
function ps(e, t, n) {
  t[0] === "-" ? e.setProperty(t, n) : e[t] = n == null ? "" : typeof n != "number" || Nc.test(t) ? n : n + "px";
}
function ro(e, t, n, o, i) {
  var r;
  e:
    if (t === "style")
      if (typeof n == "string")
        e.style.cssText = n;
      else {
        if (typeof o == "string" && (e.style.cssText = o = ""), o)
          for (t in o)
            n && t in n || ps(e.style, t, "");
        if (n)
          for (t in n)
            o && n[t] === o[t] || ps(e.style, t, n[t]);
      }
    else if (t[0] === "o" && t[1] === "n")
      r = t !== (t = t.replace(/Capture$/, "")), t = t.toLowerCase() in e ? t.toLowerCase().slice(2) : t.slice(2), e.l || (e.l = {}), e.l[t + r] = n, n ? o || e.addEventListener(t, r ? vs : ds, r) : e.removeEventListener(t, r ? vs : ds, r);
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
function ds(e) {
  this.l[e.type + !1](U.event ? U.event(e) : e);
}
function vs(e) {
  this.l[e.type + !0](U.event ? U.event(e) : e);
}
function Zi(e, t, n, o, i, r, l, c, _) {
  var h, s, p, f, a, u, y, d, v, g, k, w, E, $, x, b = t.type;
  if (t.constructor !== void 0)
    return null;
  n.__h != null && (_ = n.__h, c = t.__e = n.__e, t.__h = null, r = [c]), (h = U.__b) && h(t);
  try {
    e:
      if (typeof b == "function") {
        if (d = t.props, v = (h = b.contextType) && o[h.__c], g = h ? v ? v.props.value : h.__ : o, n.__c ? y = (s = t.__c = n.__c).__ = s.__E : ("prototype" in b && b.prototype.render ? t.__c = s = new b(d, g) : (t.__c = s = new qt(d, g), s.constructor = b, s.render = Lc), v && v.sub(s), s.props = d, s.state || (s.state = {}), s.context = g, s.__n = o, p = s.__d = !0, s.__h = [], s._sb = []), s.__s == null && (s.__s = s.state), b.getDerivedStateFromProps != null && (s.__s == s.state && (s.__s = qe({}, s.__s)), qe(s.__s, b.getDerivedStateFromProps(d, s.__s))), f = s.props, a = s.state, p)
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
        s.state = s.__s, s.getChildContext != null && (o = qe(qe({}, o), s.getChildContext())), p || s.getSnapshotBeforeUpdate == null || (u = s.getSnapshotBeforeUpdate(f, a)), x = h != null && h.type === $r && h.key == null ? h.props.children : h, Ki(e, Array.isArray(x) ? x : [x], t, n, o, i, r, l, c, _), s.base = t.__e, t.__h = null, s.__h.length && l.push(s), y && (s.__E = s.__ = null), s.__e = !1;
      } else
        r == null && t.__v === n.__v ? (t.__k = n.__k, t.__e = n.__e) : t.__e = Oc(n.__e, t, n, o, i, r, l, _);
    (h = U.diffed) && h(t);
  } catch (C) {
    t.__v = null, (_ || r != null) && (t.__e = c, t.__h = !!_, r[r.indexOf(c)] = null), U.__e(C, t, n);
  }
}
function Pc(e, t) {
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
function Oc(e, t, n, o, i, r, l, c) {
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
    if (r = r && kr.call(e.childNodes), h = (p = n.props || Vi).dangerouslySetInnerHTML, s = f.dangerouslySetInnerHTML, !c) {
      if (r != null)
        for (p = {}, u = 0; u < e.attributes.length; u++)
          p[e.attributes[u].name] = e.attributes[u].value;
      (s || h) && (s && (h && s.__html == h.__html || s.__html === e.innerHTML) || (e.innerHTML = s && s.__html || ""));
    }
    if (Tc(e, f, p, i, c), s)
      t.__k = [];
    else if (u = t.props.children, Ki(e, Array.isArray(u) ? u : [u], t, n, o, i && a !== "foreignObject", r, l, r ? r[0] : n.__k && an(n, 0), c), r != null)
      for (u = r.length; u--; )
        r[u] != null && Gi(r[u]);
    c || ("value" in f && (u = f.value) !== void 0 && (u !== e.value || a === "progress" && !u || a === "option" && u !== p.value) && ro(e, "value", u, p.value, !1), "checked" in f && (u = f.checked) !== void 0 && u !== e.checked && ro(e, "checked", u, p.checked, !1));
  }
  return e;
}
function Qi(e, t, n) {
  try {
    typeof e == "function" ? e(t) : e.current = t;
  } catch (o) {
    U.__e(o, n);
  }
}
function el(e, t, n) {
  var o, i;
  if (U.unmount && U.unmount(e), (o = e.ref) && (o.current && o.current !== e.__e || Qi(o, null, t)), (o = e.__c) != null) {
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
      o[i] && el(o[i], t, n || typeof e.type != "function");
  n || e.__e == null || Gi(e.__e), e.__ = e.__e = e.__d = void 0;
}
function Lc(e, t, n) {
  return this.constructor(e, n);
}
kr = qi.slice, U = { __e: function(e, t, n, o) {
  for (var i, r, l; t = t.__; )
    if ((i = t.__c) && !i.__)
      try {
        if ((r = i.constructor) && r.getDerivedStateFromError != null && (i.setState(r.getDerivedStateFromError(e)), l = i.__d), i.componentDidCatch != null && (i.componentDidCatch(e, o || {}), l = i.__d), l)
          return i.__E = i;
      } catch (c) {
        e = c;
      }
  throw e;
} }, Fi = 0, qt.prototype.setState = function(e, t) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = qe({}, this.state), typeof e == "function" && (e = e(qe({}, n), this.props)), e && qe(n, e), e != null && this.__v && (t && this._sb.push(t), hs(this));
}, qt.prototype.forceUpdate = function(e) {
  this.__v && (this.__e = !0, e && this.__h.push(e), hs(this));
}, qt.prototype.render = $r, Vt = [], oo.__r = 0;
class or extends qt {
  render() {
    const { percent: t, circleSize: n, circleBorderSize: o, circleBgColor: i, circleColor: r } = this.props, l = (n - o) / 2, c = n / 2;
    return /* @__PURE__ */ Ln("svg", {
      width: n,
      height: n,
      class: "progress-circle"
    }, /* @__PURE__ */ Ln("circle", {
      cx: c,
      cy: c,
      r: l,
      stroke: i,
      "stroke-width": o
    }), /* @__PURE__ */ Ln("circle", {
      cx: c,
      cy: c,
      r: l,
      stroke: r,
      "stroke-dasharray": Math.PI * l * 2,
      "stroke-dashoffset": Math.PI * l * 2 * (100 - t) / 100,
      "stroke-width": o
    }), /* @__PURE__ */ Ln("text", {
      x: c,
      y: c + o / 4,
      "dominant-baseline": "middle",
      style: { fontSize: `${l}px` }
    }, Math.round(t)));
  }
}
S(or, "NAME", "zui.progress-circle"), S(or, "defaultProps", {
  circleSize: 24,
  circleBorderSize: 2,
  circleBgColor: "var(--progress-circle-bg)",
  circleColor: "var(--progress-circle-bar-color)"
});
class gs extends Le {
}
S(gs, "NAME", "table-sorter"), S(gs, "Component", or);
function Dc(e) {
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
function Hc(e) {
  document.readyState !== "loading" ? e() : document.addEventListener("DOMContentLoaded", e);
}
function Ic(e, t) {
  const n = typeof e == "string" ? document.querySelector(e) : e;
  if (!n)
    return !1;
  const o = n.getBoundingClientRect(), i = window.innerHeight || document.documentElement.clientHeight, r = window.innerWidth || document.documentElement.clientWidth;
  if (t != null && t.fullyCheck)
    return o.left >= 0 && o.top >= 0 && o.left + o.width <= r && o.top + o.height <= i;
  const l = o.top <= i && o.top + o.height >= 0, c = o.left <= r && o.left + o.width >= 0;
  return l && c;
}
const Du = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  selectText: Dc,
  domReady: Hc,
  isElementVisible: Ic,
  classes: P
}, Symbol.toStringTag, { value: "Module" }));
let Wc = (e = 21) => crypto.getRandomValues(new Uint8Array(e)).reduce((t, n) => (n &= 63, n < 36 ? t += n.toString(36) : n < 62 ? t += (n - 26).toString(36).toUpperCase() : n > 62 ? t += "-" : t += "_", t), "");
var wn, We, ve, vt, gt, Un;
const Fr = class {
  constructor(t, n = "local") {
    M(this, gt);
    M(this, wn, void 0);
    M(this, We, void 0);
    M(this, ve, void 0);
    M(this, vt, void 0);
    N(this, wn, n), N(this, We, `ZUI_STORE:${t != null ? t : Wc()}`), N(this, ve, n === "local" ? localStorage : sessionStorage);
  }
  get type() {
    return m(this, wn);
  }
  get session() {
    return this.type === "session" ? this : (m(this, vt) || N(this, vt, new Fr(m(this, We), "session")), m(this, vt));
  }
  get(t, n) {
    const o = m(this, ve).getItem(K(this, gt, Un).call(this, t));
    return typeof o == "string" ? JSON.parse(o) : o != null ? o : n;
  }
  set(t, n) {
    if (n == null)
      return this.remove(t);
    m(this, ve).setItem(K(this, gt, Un).call(this, t), JSON.stringify(n));
  }
  remove(t) {
    m(this, ve).removeItem(K(this, gt, Un).call(this, t));
  }
  each(t) {
    for (let n = 0; n < m(this, ve).length; n++) {
      const o = m(this, ve).key(n);
      if (o != null && o.startsWith(m(this, We))) {
        const i = m(this, ve).getItem(o);
        typeof i == "string" && t(o.substring(m(this, We).length + 1), JSON.parse(i));
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
let so = Fr;
wn = new WeakMap(), We = new WeakMap(), ve = new WeakMap(), vt = new WeakMap(), gt = new WeakSet(), Un = function(t) {
  return `${m(this, We)}:${t}`;
};
const jc = new so("DEFAULT");
function Uc(e, t = "local") {
  return new so(e, t);
}
Object.assign(jc, { create: Uc });
var xr, B, tl, nl, Gt, ms, ol = {}, rl = [], Bc = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function Ge(e, t) {
  for (var n in t)
    e[n] = t[n];
  return e;
}
function sl(e) {
  var t = e.parentNode;
  t && t.removeChild(e);
}
function Jo(e, t, n) {
  var o, i, r, l = {};
  for (r in t)
    r == "key" ? o = t[r] : r == "ref" ? i = t[r] : l[r] = t[r];
  if (arguments.length > 2 && (l.children = arguments.length > 3 ? xr.call(arguments, 2) : n), typeof e == "function" && e.defaultProps != null)
    for (r in e.defaultProps)
      l[r] === void 0 && (l[r] = e.defaultProps[r]);
  return Bn(e, l, o, i, null);
}
function Bn(e, t, n, o, i) {
  var r = { type: e, props: t, key: n, ref: o, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: i == null ? ++tl : i };
  return i == null && B.vnode != null && B.vnode(r), r;
}
function Cr(e) {
  return e.children;
}
function Yt(e, t) {
  this.props = e, this.context = t;
}
function cn(e, t) {
  if (t == null)
    return e.__ ? cn(e.__, e.__.__k.indexOf(e) + 1) : null;
  for (var n; t < e.__k.length; t++)
    if ((n = e.__k[t]) != null && n.__e != null)
      return n.__e;
  return typeof e.type == "function" ? cn(e) : null;
}
function il(e) {
  var t, n;
  if ((e = e.__) != null && e.__c != null) {
    for (e.__e = e.__c.base = null, t = 0; t < e.__k.length; t++)
      if ((n = e.__k[t]) != null && n.__e != null) {
        e.__e = e.__c.base = n.__e;
        break;
      }
    return il(e);
  }
}
function ys(e) {
  (!e.__d && (e.__d = !0) && Gt.push(e) && !io.__r++ || ms !== B.debounceRendering) && ((ms = B.debounceRendering) || setTimeout)(io);
}
function io() {
  for (var e; io.__r = Gt.length; )
    e = Gt.sort(function(t, n) {
      return t.__v.__b - n.__v.__b;
    }), Gt = [], e.some(function(t) {
      var n, o, i, r, l, c;
      t.__d && (l = (r = (n = t).__v).__e, (c = n.__P) && (o = [], (i = Ge({}, r)).__v = r.__v + 1, _l(c, r, i, n.__n, c.ownerSVGElement !== void 0, r.__h != null ? [l] : null, o, l == null ? cn(r) : l, r.__h), Fc(o, r), r.__e != l && il(r)));
    });
}
function ll(e, t, n, o, i, r, l, c, _, h) {
  var s, p, f, a, u, y, d, v = o && o.__k || rl, g = v.length;
  for (n.__k = [], s = 0; s < t.length; s++)
    if ((a = n.__k[s] = (a = t[s]) == null || typeof a == "boolean" ? null : typeof a == "string" || typeof a == "number" || typeof a == "bigint" ? Bn(null, a, null, null, a) : Array.isArray(a) ? Bn(Cr, { children: a }, null, null, null) : a.__b > 0 ? Bn(a.type, a.props, a.key, a.ref ? a.ref : null, a.__v) : a) != null) {
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
      _l(e, a, f = f || ol, i, r, l, c, _, h), u = a.__e, (p = a.ref) && f.ref != p && (d || (d = []), f.ref && d.push(f.ref, null, a), d.push(p, a.__c || u, a)), u != null ? (y == null && (y = u), typeof a.type == "function" && a.__k === f.__k ? a.__d = _ = al(a, _, e) : _ = cl(e, a, f, v, u, _), typeof n.type == "function" && (n.__d = _)) : _ && f.__e == _ && _.parentNode != e && (_ = cn(f));
    }
  for (n.__e = y, s = g; s--; )
    v[s] != null && ul(v[s], v[s]);
  if (d)
    for (s = 0; s < d.length; s++)
      fl(d[s], d[++s], d[++s]);
}
function al(e, t, n) {
  for (var o, i = e.__k, r = 0; i && r < i.length; r++)
    (o = i[r]) && (o.__ = e, t = typeof o.type == "function" ? al(o, t, n) : cl(n, o, o, i, o.__e, t));
  return t;
}
function cl(e, t, n, o, i, r) {
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
function zc(e, t, n, o, i) {
  var r;
  for (r in n)
    r === "children" || r === "key" || r in t || lo(e, r, null, n[r], o);
  for (r in t)
    i && typeof t[r] != "function" || r === "children" || r === "key" || r === "value" || r === "checked" || n[r] === t[r] || lo(e, r, t[r], n[r], o);
}
function bs(e, t, n) {
  t[0] === "-" ? e.setProperty(t, n) : e[t] = n == null ? "" : typeof n != "number" || Bc.test(t) ? n : n + "px";
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
            n && t in n || bs(e.style, t, "");
        if (n)
          for (t in n)
            o && n[t] === o[t] || bs(e.style, t, n[t]);
      }
    else if (t[0] === "o" && t[1] === "n")
      r = t !== (t = t.replace(/Capture$/, "")), t = t.toLowerCase() in e ? t.toLowerCase().slice(2) : t.slice(2), e.l || (e.l = {}), e.l[t + r] = n, n ? o || e.addEventListener(t, r ? ks : ws, r) : e.removeEventListener(t, r ? ks : ws, r);
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
function ws(e) {
  this.l[e.type + !1](B.event ? B.event(e) : e);
}
function ks(e) {
  this.l[e.type + !0](B.event ? B.event(e) : e);
}
function _l(e, t, n, o, i, r, l, c, _) {
  var h, s, p, f, a, u, y, d, v, g, k, w, E, $, x, b = t.type;
  if (t.constructor !== void 0)
    return null;
  n.__h != null && (_ = n.__h, c = t.__e = n.__e, t.__h = null, r = [c]), (h = B.__b) && h(t);
  try {
    e:
      if (typeof b == "function") {
        if (d = t.props, v = (h = b.contextType) && o[h.__c], g = h ? v ? v.props.value : h.__ : o, n.__c ? y = (s = t.__c = n.__c).__ = s.__E : ("prototype" in b && b.prototype.render ? t.__c = s = new b(d, g) : (t.__c = s = new Yt(d, g), s.constructor = b, s.render = qc), v && v.sub(s), s.props = d, s.state || (s.state = {}), s.context = g, s.__n = o, p = s.__d = !0, s.__h = [], s._sb = []), s.__s == null && (s.__s = s.state), b.getDerivedStateFromProps != null && (s.__s == s.state && (s.__s = Ge({}, s.__s)), Ge(s.__s, b.getDerivedStateFromProps(d, s.__s))), f = s.props, a = s.state, p)
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
        s.state = s.__s, s.getChildContext != null && (o = Ge(Ge({}, o), s.getChildContext())), p || s.getSnapshotBeforeUpdate == null || (u = s.getSnapshotBeforeUpdate(f, a)), x = h != null && h.type === Cr && h.key == null ? h.props.children : h, ll(e, Array.isArray(x) ? x : [x], t, n, o, i, r, l, c, _), s.base = t.__e, t.__h = null, s.__h.length && l.push(s), y && (s.__E = s.__ = null), s.__e = !1;
      } else
        r == null && t.__v === n.__v ? (t.__k = n.__k, t.__e = n.__e) : t.__e = Vc(n.__e, t, n, o, i, r, l, _);
    (h = B.diffed) && h(t);
  } catch (C) {
    t.__v = null, (_ || r != null) && (t.__e = c, t.__h = !!_, r[r.indexOf(c)] = null), B.__e(C, t, n);
  }
}
function Fc(e, t) {
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
function Vc(e, t, n, o, i, r, l, c) {
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
    if (r = r && xr.call(e.childNodes), h = (p = n.props || ol).dangerouslySetInnerHTML, s = f.dangerouslySetInnerHTML, !c) {
      if (r != null)
        for (p = {}, u = 0; u < e.attributes.length; u++)
          p[e.attributes[u].name] = e.attributes[u].value;
      (s || h) && (s && (h && s.__html == h.__html || s.__html === e.innerHTML) || (e.innerHTML = s && s.__html || ""));
    }
    if (zc(e, f, p, i, c), s)
      t.__k = [];
    else if (u = t.props.children, ll(e, Array.isArray(u) ? u : [u], t, n, o, i && a !== "foreignObject", r, l, r ? r[0] : n.__k && cn(n, 0), c), r != null)
      for (u = r.length; u--; )
        r[u] != null && sl(r[u]);
    c || ("value" in f && (u = f.value) !== void 0 && (u !== e.value || a === "progress" && !u || a === "option" && u !== p.value) && lo(e, "value", u, p.value, !1), "checked" in f && (u = f.checked) !== void 0 && u !== e.checked && lo(e, "checked", u, p.checked, !1));
  }
  return e;
}
function fl(e, t, n) {
  try {
    typeof e == "function" ? e(t) : e.current = t;
  } catch (o) {
    B.__e(o, n);
  }
}
function ul(e, t, n) {
  var o, i;
  if (B.unmount && B.unmount(e), (o = e.ref) && (o.current && o.current !== e.__e || fl(o, null, t)), (o = e.__c) != null) {
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
      o[i] && ul(o[i], t, n || typeof e.type != "function");
  n || e.__e == null || sl(e.__e), e.__ = e.__e = e.__d = void 0;
}
function qc(e, t, n) {
  return this.constructor(e, n);
}
xr = rl.slice, B = { __e: function(e, t, n, o) {
  for (var i, r, l; t = t.__; )
    if ((i = t.__c) && !i.__)
      try {
        if ((r = i.constructor) && r.getDerivedStateFromError != null && (i.setState(r.getDerivedStateFromError(e)), l = i.__d), i.componentDidCatch != null && (i.componentDidCatch(e, o || {}), l = i.__d), l)
          return i.__E = i;
      } catch (c) {
        e = c;
      }
  throw e;
} }, tl = 0, nl = function(e) {
  return e != null && e.constructor === void 0;
}, Yt.prototype.setState = function(e, t) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = Ge({}, this.state), typeof e == "function" && (e = e(Ge({}, n), this.props)), e && Ge(n, e), e != null && this.__v && (t && this._sb.push(t), ys(this));
}, Yt.prototype.forceUpdate = function(e) {
  this.__v && (this.__e = !0, e && this.__h.push(e), ys(this));
}, Yt.prototype.render = Cr, Gt = [], io.__r = 0;
var Er, z, hl, Kt, $s, pl = {}, dl = [], Gc = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function Ye(e, t) {
  for (var n in t)
    e[n] = t[n];
  return e;
}
function vl(e) {
  var t = e.parentNode;
  t && t.removeChild(e);
}
function Ht(e, t, n) {
  var o, i, r, l = {};
  for (r in t)
    r == "key" ? o = t[r] : r == "ref" ? i = t[r] : l[r] = t[r];
  if (arguments.length > 2 && (l.children = arguments.length > 3 ? Er.call(arguments, 2) : n), typeof e == "function" && e.defaultProps != null)
    for (r in e.defaultProps)
      l[r] === void 0 && (l[r] = e.defaultProps[r]);
  return zn(e, l, o, i, null);
}
function zn(e, t, n, o, i) {
  var r = { type: e, props: t, key: n, ref: o, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: i == null ? ++hl : i };
  return i == null && z.vnode != null && z.vnode(r), r;
}
function Sr(e) {
  return e.children;
}
function Xt(e, t) {
  this.props = e, this.context = t;
}
function _n(e, t) {
  if (t == null)
    return e.__ ? _n(e.__, e.__.__k.indexOf(e) + 1) : null;
  for (var n; t < e.__k.length; t++)
    if ((n = e.__k[t]) != null && n.__e != null)
      return n.__e;
  return typeof e.type == "function" ? _n(e) : null;
}
function gl(e) {
  var t, n;
  if ((e = e.__) != null && e.__c != null) {
    for (e.__e = e.__c.base = null, t = 0; t < e.__k.length; t++)
      if ((n = e.__k[t]) != null && n.__e != null) {
        e.__e = e.__c.base = n.__e;
        break;
      }
    return gl(e);
  }
}
function xs(e) {
  (!e.__d && (e.__d = !0) && Kt.push(e) && !ao.__r++ || $s !== z.debounceRendering) && (($s = z.debounceRendering) || setTimeout)(ao);
}
function ao() {
  for (var e; ao.__r = Kt.length; )
    e = Kt.sort(function(t, n) {
      return t.__v.__b - n.__v.__b;
    }), Kt = [], e.some(function(t) {
      var n, o, i, r, l, c;
      t.__d && (l = (r = (n = t).__v).__e, (c = n.__P) && (o = [], (i = Ye({}, r)).__v = r.__v + 1, wl(c, r, i, n.__n, c.ownerSVGElement !== void 0, r.__h != null ? [l] : null, o, l == null ? _n(r) : l, r.__h), Kc(o, r), r.__e != l && gl(r)));
    });
}
function ml(e, t, n, o, i, r, l, c, _, h) {
  var s, p, f, a, u, y, d, v = o && o.__k || dl, g = v.length;
  for (n.__k = [], s = 0; s < t.length; s++)
    if ((a = n.__k[s] = (a = t[s]) == null || typeof a == "boolean" ? null : typeof a == "string" || typeof a == "number" || typeof a == "bigint" ? zn(null, a, null, null, a) : Array.isArray(a) ? zn(Sr, { children: a }, null, null, null) : a.__b > 0 ? zn(a.type, a.props, a.key, a.ref ? a.ref : null, a.__v) : a) != null) {
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
      wl(e, a, f = f || pl, i, r, l, c, _, h), u = a.__e, (p = a.ref) && f.ref != p && (d || (d = []), f.ref && d.push(f.ref, null, a), d.push(p, a.__c || u, a)), u != null ? (y == null && (y = u), typeof a.type == "function" && a.__k === f.__k ? a.__d = _ = yl(a, _, e) : _ = bl(e, a, f, v, u, _), typeof n.type == "function" && (n.__d = _)) : _ && f.__e == _ && _.parentNode != e && (_ = _n(f));
    }
  for (n.__e = y, s = g; s--; )
    v[s] != null && $l(v[s], v[s]);
  if (d)
    for (s = 0; s < d.length; s++)
      kl(d[s], d[++s], d[++s]);
}
function yl(e, t, n) {
  for (var o, i = e.__k, r = 0; i && r < i.length; r++)
    (o = i[r]) && (o.__ = e, t = typeof o.type == "function" ? yl(o, t, n) : bl(n, o, o, i, o.__e, t));
  return t;
}
function bl(e, t, n, o, i, r) {
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
function Yc(e, t, n, o, i) {
  var r;
  for (r in n)
    r === "children" || r === "key" || r in t || co(e, r, null, n[r], o);
  for (r in t)
    i && typeof t[r] != "function" || r === "children" || r === "key" || r === "value" || r === "checked" || n[r] === t[r] || co(e, r, t[r], n[r], o);
}
function Cs(e, t, n) {
  t[0] === "-" ? e.setProperty(t, n) : e[t] = n == null ? "" : typeof n != "number" || Gc.test(t) ? n : n + "px";
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
            n && t in n || Cs(e.style, t, "");
        if (n)
          for (t in n)
            o && n[t] === o[t] || Cs(e.style, t, n[t]);
      }
    else if (t[0] === "o" && t[1] === "n")
      r = t !== (t = t.replace(/Capture$/, "")), t = t.toLowerCase() in e ? t.toLowerCase().slice(2) : t.slice(2), e.l || (e.l = {}), e.l[t + r] = n, n ? o || e.addEventListener(t, r ? Ss : Es, r) : e.removeEventListener(t, r ? Ss : Es, r);
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
function Es(e) {
  this.l[e.type + !1](z.event ? z.event(e) : e);
}
function Ss(e) {
  this.l[e.type + !0](z.event ? z.event(e) : e);
}
function wl(e, t, n, o, i, r, l, c, _) {
  var h, s, p, f, a, u, y, d, v, g, k, w, E, $, x, b = t.type;
  if (t.constructor !== void 0)
    return null;
  n.__h != null && (_ = n.__h, c = t.__e = n.__e, t.__h = null, r = [c]), (h = z.__b) && h(t);
  try {
    e:
      if (typeof b == "function") {
        if (d = t.props, v = (h = b.contextType) && o[h.__c], g = h ? v ? v.props.value : h.__ : o, n.__c ? y = (s = t.__c = n.__c).__ = s.__E : ("prototype" in b && b.prototype.render ? t.__c = s = new b(d, g) : (t.__c = s = new Xt(d, g), s.constructor = b, s.render = Jc), v && v.sub(s), s.props = d, s.state || (s.state = {}), s.context = g, s.__n = o, p = s.__d = !0, s.__h = [], s._sb = []), s.__s == null && (s.__s = s.state), b.getDerivedStateFromProps != null && (s.__s == s.state && (s.__s = Ye({}, s.__s)), Ye(s.__s, b.getDerivedStateFromProps(d, s.__s))), f = s.props, a = s.state, p)
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
        s.state = s.__s, s.getChildContext != null && (o = Ye(Ye({}, o), s.getChildContext())), p || s.getSnapshotBeforeUpdate == null || (u = s.getSnapshotBeforeUpdate(f, a)), x = h != null && h.type === Sr && h.key == null ? h.props.children : h, ml(e, Array.isArray(x) ? x : [x], t, n, o, i, r, l, c, _), s.base = t.__e, t.__h = null, s.__h.length && l.push(s), y && (s.__E = s.__ = null), s.__e = !1;
      } else
        r == null && t.__v === n.__v ? (t.__k = n.__k, t.__e = n.__e) : t.__e = Xc(n.__e, t, n, o, i, r, l, _);
    (h = z.diffed) && h(t);
  } catch (C) {
    t.__v = null, (_ || r != null) && (t.__e = c, t.__h = !!_, r[r.indexOf(c)] = null), z.__e(C, t, n);
  }
}
function Kc(e, t) {
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
function Xc(e, t, n, o, i, r, l, c) {
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
    if (r = r && Er.call(e.childNodes), h = (p = n.props || pl).dangerouslySetInnerHTML, s = f.dangerouslySetInnerHTML, !c) {
      if (r != null)
        for (p = {}, u = 0; u < e.attributes.length; u++)
          p[e.attributes[u].name] = e.attributes[u].value;
      (s || h) && (s && (h && s.__html == h.__html || s.__html === e.innerHTML) || (e.innerHTML = s && s.__html || ""));
    }
    if (Yc(e, f, p, i, c), s)
      t.__k = [];
    else if (u = t.props.children, ml(e, Array.isArray(u) ? u : [u], t, n, o, i && a !== "foreignObject", r, l, r ? r[0] : n.__k && _n(n, 0), c), r != null)
      for (u = r.length; u--; )
        r[u] != null && vl(r[u]);
    c || ("value" in f && (u = f.value) !== void 0 && (u !== e.value || a === "progress" && !u || a === "option" && u !== p.value) && co(e, "value", u, p.value, !1), "checked" in f && (u = f.checked) !== void 0 && u !== e.checked && co(e, "checked", u, p.checked, !1));
  }
  return e;
}
function kl(e, t, n) {
  try {
    typeof e == "function" ? e(t) : e.current = t;
  } catch (o) {
    z.__e(o, n);
  }
}
function $l(e, t, n) {
  var o, i;
  if (z.unmount && z.unmount(e), (o = e.ref) && (o.current && o.current !== e.__e || kl(o, null, t)), (o = e.__c) != null) {
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
      o[i] && $l(o[i], t, n || typeof e.type != "function");
  n || e.__e == null || vl(e.__e), e.__ = e.__e = e.__d = void 0;
}
function Jc(e, t, n) {
  return this.constructor(e, n);
}
Er = dl.slice, z = { __e: function(e, t, n, o) {
  for (var i, r, l; t = t.__; )
    if ((i = t.__c) && !i.__)
      try {
        if ((r = i.constructor) && r.getDerivedStateFromError != null && (i.setState(r.getDerivedStateFromError(e)), l = i.__d), i.componentDidCatch != null && (i.componentDidCatch(e, o || {}), l = i.__d), l)
          return i.__E = i;
      } catch (c) {
        e = c;
      }
  throw e;
} }, hl = 0, Xt.prototype.setState = function(e, t) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = Ye({}, this.state), typeof e == "function" && (e = e(Ye({}, n), this.props)), e && Ye(n, e), e != null && this.__v && (t && this._sb.push(t), xs(this));
}, Xt.prototype.forceUpdate = function(e) {
  this.__v && (this.__e = !0, e && this.__h.push(e), xs(this));
}, Xt.prototype.render = Sr, Kt = [], ao.__r = 0;
class Rn extends Xt {
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
      square: y,
      hint: d,
      ...v
    } = this.props, g = t || (l ? "a" : "button"), k = f == null || typeof f == "string" && !f.length, w = k && !p && !a && !r;
    return Ht(
      g,
      {
        className: P("btn", n, i, {
          "btn-caret": w,
          disabled: _,
          active: h,
          loading: s,
          square: y === void 0 ? !w && !r && k : y
        }, o ? `size-${o}` : ""),
        title: d,
        [g === "a" ? "href" : "data-url"]: l,
        [g === "a" ? "target" : "data-target"]: c,
        type: g === "button" ? "button" : void 0,
        ...v
      },
      typeof p == "string" ? /* @__PURE__ */ Ht("i", {
        class: `icon ${p}`
      }) : p,
      k ? null : /* @__PURE__ */ Ht("span", {
        className: "text"
      }, f),
      r,
      typeof a == "string" ? /* @__PURE__ */ Ht("i", {
        class: `icon ${a}`
      }) : a,
      u ? /* @__PURE__ */ Ht("span", {
        className: typeof u == "string" ? `caret-${u}` : "caret"
      }) : null
    );
  }
}
class xl extends Yt {
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
    return /* @__PURE__ */ Jo(Rn, {
      key: o,
      ...i
    });
  }
  renderItem(t, n, o) {
    const { itemRender: i, defaultBtnProps: r, onClickItem: l } = t, c = { key: o, ...n };
    if (r && Object.assign(c, r), l && (c.onClick = this.handleItemClick.bind(this, c, o, n.onClick)), i) {
      const _ = i.call(this, c, Jo);
      if (nl(_))
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
    return /* @__PURE__ */ Jo("div", {
      className: P("btn-group", i ? `size-${i}` : "", n),
      ...a
    }, o && o.map(this.renderItem.bind(this, t)), c);
  }
}
class Ms extends Le {
}
S(Ms, "NAME", "btngroup"), S(Ms, "Component", xl);
function Zc() {
  const e = typeof window.innerWidth == "number" ? window.innerWidth - document.body.clientWidth : 17;
  document.body.style.paddingRight = `${e}px`, document.body.classList.add("modal-open");
}
function Qc() {
  document.body.style.paddingRight = "", document.body.classList.remove("modal-open");
}
function e_(e, t) {
  Zc(), e.classList.add("block"), As(e, t), e.onclick = (n) => t_(n, e), window.addEventListener("resize", () => {
    As(e, t);
  });
}
function Cl(e) {
  var t;
  Qc(), (t = e.classList) == null || t.remove("block");
}
function As(e, t) {
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
function t_(e, t) {
  e.target.closest("[data-dismiss=modal]") && (e.stopPropagation(), Cl(t));
}
function n_(e) {
  var t, n;
  return e instanceof HTMLAnchorElement ? (n = (t = (e.href || "").match(/(?<selector>#\S+)$/)) == null ? void 0 : t.groups) == null ? void 0 : n.selector : e.dataset.target;
}
document.addEventListener("click", (e) => {
  const t = e.target, n = t.closest("[data-toggle=modal]");
  if (n) {
    const o = n_(n);
    if (!o)
      return;
    const i = document.querySelector(o);
    if (!i)
      return;
    e_(i, n.dataset.position || "fit");
  } else
    t.className.includes("modal") && Cl(t);
});
class El extends Te {
  beforeRender() {
    const t = super.beforeRender();
    return t.className = P(t.className, t.type ? `nav-${t.type}` : "", {
      "nav-stacked": t.stacked
    }), t;
  }
}
S(El, "NAME", "nav");
class Rs extends Le {
}
S(Rs, "NAME", "nav"), S(Rs, "Component", El);
var Sl, rr, Ml, o_ = [];
function Uo(e, t, n) {
  var o, i, r, l = {};
  for (r in t)
    r == "key" ? o = t[r] : r == "ref" ? i = t[r] : l[r] = t[r];
  if (arguments.length > 2 && (l.children = arguments.length > 3 ? Sl.call(arguments, 2) : n), typeof e == "function" && e.defaultProps != null)
    for (r in e.defaultProps)
      l[r] === void 0 && (l[r] = e.defaultProps[r]);
  return r_(e, l, o, i, null);
}
function r_(e, t, n, o, i) {
  var r = { type: e, props: t, key: n, ref: o, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: i == null ? ++Ml : i };
  return i == null && rr.vnode != null && rr.vnode(r), r;
}
Sl = o_.slice, rr = { __e: function(e, t, n, o) {
  for (var i, r, l; t = t.__; )
    if ((i = t.__c) && !i.__)
      try {
        if ((r = i.constructor) && r.getDerivedStateFromError != null && (i.setState(r.getDerivedStateFromError(e)), l = i.__d), i.componentDidCatch != null && (i.componentDidCatch(e, o || {}), l = i.__d), l)
          return i.__E = i;
      } catch (c) {
        e = c;
      }
  throw e;
} }, Ml = 0;
var Al, sr, Rl, s_ = [];
function Bo(e, t, n) {
  var o, i, r, l = {};
  for (r in t)
    r == "key" ? o = t[r] : r == "ref" ? i = t[r] : l[r] = t[r];
  if (arguments.length > 2 && (l.children = arguments.length > 3 ? Al.call(arguments, 2) : n), typeof e == "function" && e.defaultProps != null)
    for (r in e.defaultProps)
      l[r] === void 0 && (l[r] = e.defaultProps[r]);
  return i_(e, l, o, i, null);
}
function i_(e, t, n, o, i) {
  var r = { type: e, props: t, key: n, ref: o, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: i == null ? ++Rl : i };
  return i == null && sr.vnode != null && sr.vnode(r), r;
}
Al = s_.slice, sr = { __e: function(e, t, n, o) {
  for (var i, r, l; t = t.__; )
    if ((i = t.__c) && !i.__)
      try {
        if ((r = i.constructor) && r.getDerivedStateFromError != null && (i.setState(r.getDerivedStateFromError(e)), l = i.__d), i.componentDidCatch != null && (i.componentDidCatch(e, o || {}), l = i.__d), l)
          return i.__E = i;
      } catch (c) {
        e = c;
      }
  throw e;
} }, Rl = 0;
function l_({
  key: e,
  type: t,
  btnType: n,
  ...o
}) {
  return /* @__PURE__ */ Bo(Rn, {
    type: n,
    ...o
  });
}
var Mr, F, Nl, Jt, Ns, Tl = {}, Pl = [], a_ = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function Ke(e, t) {
  for (var n in t)
    e[n] = t[n];
  return e;
}
function Ol(e) {
  var t = e.parentNode;
  t && t.removeChild(e);
}
function Ll(e, t, n) {
  var o, i, r, l = {};
  for (r in t)
    r == "key" ? o = t[r] : r == "ref" ? i = t[r] : l[r] = t[r];
  if (arguments.length > 2 && (l.children = arguments.length > 3 ? Mr.call(arguments, 2) : n), typeof e == "function" && e.defaultProps != null)
    for (r in e.defaultProps)
      l[r] === void 0 && (l[r] = e.defaultProps[r]);
  return Fn(e, l, o, i, null);
}
function Fn(e, t, n, o, i) {
  var r = { type: e, props: t, key: n, ref: o, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: i == null ? ++Nl : i };
  return i == null && F.vnode != null && F.vnode(r), r;
}
function c_() {
  return { current: null };
}
function Ar(e) {
  return e.children;
}
function Zt(e, t) {
  this.props = e, this.context = t;
}
function fn(e, t) {
  if (t == null)
    return e.__ ? fn(e.__, e.__.__k.indexOf(e) + 1) : null;
  for (var n; t < e.__k.length; t++)
    if ((n = e.__k[t]) != null && n.__e != null)
      return n.__e;
  return typeof e.type == "function" ? fn(e) : null;
}
function Dl(e) {
  var t, n;
  if ((e = e.__) != null && e.__c != null) {
    for (e.__e = e.__c.base = null, t = 0; t < e.__k.length; t++)
      if ((n = e.__k[t]) != null && n.__e != null) {
        e.__e = e.__c.base = n.__e;
        break;
      }
    return Dl(e);
  }
}
function Ts(e) {
  (!e.__d && (e.__d = !0) && Jt.push(e) && !_o.__r++ || Ns !== F.debounceRendering) && ((Ns = F.debounceRendering) || setTimeout)(_o);
}
function _o() {
  for (var e; _o.__r = Jt.length; )
    e = Jt.sort(function(t, n) {
      return t.__v.__b - n.__v.__b;
    }), Jt = [], e.some(function(t) {
      var n, o, i, r, l, c;
      t.__d && (l = (r = (n = t).__v).__e, (c = n.__P) && (o = [], (i = Ke({}, r)).__v = r.__v + 1, jl(c, r, i, n.__n, c.ownerSVGElement !== void 0, r.__h != null ? [l] : null, o, l == null ? fn(r) : l, r.__h), f_(o, r), r.__e != l && Dl(r)));
    });
}
function Hl(e, t, n, o, i, r, l, c, _, h) {
  var s, p, f, a, u, y, d, v = o && o.__k || Pl, g = v.length;
  for (n.__k = [], s = 0; s < t.length; s++)
    if ((a = n.__k[s] = (a = t[s]) == null || typeof a == "boolean" ? null : typeof a == "string" || typeof a == "number" || typeof a == "bigint" ? Fn(null, a, null, null, a) : Array.isArray(a) ? Fn(Ar, { children: a }, null, null, null) : a.__b > 0 ? Fn(a.type, a.props, a.key, a.ref ? a.ref : null, a.__v) : a) != null) {
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
      jl(e, a, f = f || Tl, i, r, l, c, _, h), u = a.__e, (p = a.ref) && f.ref != p && (d || (d = []), f.ref && d.push(f.ref, null, a), d.push(p, a.__c || u, a)), u != null ? (y == null && (y = u), typeof a.type == "function" && a.__k === f.__k ? a.__d = _ = Il(a, _, e) : _ = Wl(e, a, f, v, u, _), typeof n.type == "function" && (n.__d = _)) : _ && f.__e == _ && _.parentNode != e && (_ = fn(f));
    }
  for (n.__e = y, s = g; s--; )
    v[s] != null && Bl(v[s], v[s]);
  if (d)
    for (s = 0; s < d.length; s++)
      Ul(d[s], d[++s], d[++s]);
}
function Il(e, t, n) {
  for (var o, i = e.__k, r = 0; i && r < i.length; r++)
    (o = i[r]) && (o.__ = e, t = typeof o.type == "function" ? Il(o, t, n) : Wl(n, o, o, i, o.__e, t));
  return t;
}
function Wl(e, t, n, o, i, r) {
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
function Ps(e, t, n) {
  t[0] === "-" ? e.setProperty(t, n) : e[t] = n == null ? "" : typeof n != "number" || a_.test(t) ? n : n + "px";
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
            n && t in n || Ps(e.style, t, "");
        if (n)
          for (t in n)
            o && n[t] === o[t] || Ps(e.style, t, n[t]);
      }
    else if (t[0] === "o" && t[1] === "n")
      r = t !== (t = t.replace(/Capture$/, "")), t = t.toLowerCase() in e ? t.toLowerCase().slice(2) : t.slice(2), e.l || (e.l = {}), e.l[t + r] = n, n ? o || e.addEventListener(t, r ? Ls : Os, r) : e.removeEventListener(t, r ? Ls : Os, r);
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
function Os(e) {
  this.l[e.type + !1](F.event ? F.event(e) : e);
}
function Ls(e) {
  this.l[e.type + !0](F.event ? F.event(e) : e);
}
function jl(e, t, n, o, i, r, l, c, _) {
  var h, s, p, f, a, u, y, d, v, g, k, w, E, $, x, b = t.type;
  if (t.constructor !== void 0)
    return null;
  n.__h != null && (_ = n.__h, c = t.__e = n.__e, t.__h = null, r = [c]), (h = F.__b) && h(t);
  try {
    e:
      if (typeof b == "function") {
        if (d = t.props, v = (h = b.contextType) && o[h.__c], g = h ? v ? v.props.value : h.__ : o, n.__c ? y = (s = t.__c = n.__c).__ = s.__E : ("prototype" in b && b.prototype.render ? t.__c = s = new b(d, g) : (t.__c = s = new Zt(d, g), s.constructor = b, s.render = h_), v && v.sub(s), s.props = d, s.state || (s.state = {}), s.context = g, s.__n = o, p = s.__d = !0, s.__h = [], s._sb = []), s.__s == null && (s.__s = s.state), b.getDerivedStateFromProps != null && (s.__s == s.state && (s.__s = Ke({}, s.__s)), Ke(s.__s, b.getDerivedStateFromProps(d, s.__s))), f = s.props, a = s.state, p)
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
        s.state = s.__s, s.getChildContext != null && (o = Ke(Ke({}, o), s.getChildContext())), p || s.getSnapshotBeforeUpdate == null || (u = s.getSnapshotBeforeUpdate(f, a)), x = h != null && h.type === Ar && h.key == null ? h.props.children : h, Hl(e, Array.isArray(x) ? x : [x], t, n, o, i, r, l, c, _), s.base = t.__e, t.__h = null, s.__h.length && l.push(s), y && (s.__E = s.__ = null), s.__e = !1;
      } else
        r == null && t.__v === n.__v ? (t.__k = n.__k, t.__e = n.__e) : t.__e = u_(n.__e, t, n, o, i, r, l, _);
    (h = F.diffed) && h(t);
  } catch (C) {
    t.__v = null, (_ || r != null) && (t.__e = c, t.__h = !!_, r[r.indexOf(c)] = null), F.__e(C, t, n);
  }
}
function f_(e, t) {
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
    if (r = r && Mr.call(e.childNodes), h = (p = n.props || Tl).dangerouslySetInnerHTML, s = f.dangerouslySetInnerHTML, !c) {
      if (r != null)
        for (p = {}, u = 0; u < e.attributes.length; u++)
          p[e.attributes[u].name] = e.attributes[u].value;
      (s || h) && (s && (h && s.__html == h.__html || s.__html === e.innerHTML) || (e.innerHTML = s && s.__html || ""));
    }
    if (__(e, f, p, i, c), s)
      t.__k = [];
    else if (u = t.props.children, Hl(e, Array.isArray(u) ? u : [u], t, n, o, i && a !== "foreignObject", r, l, r ? r[0] : n.__k && fn(n, 0), c), r != null)
      for (u = r.length; u--; )
        r[u] != null && Ol(r[u]);
    c || ("value" in f && (u = f.value) !== void 0 && (u !== e.value || a === "progress" && !u || a === "option" && u !== p.value) && fo(e, "value", u, p.value, !1), "checked" in f && (u = f.checked) !== void 0 && u !== e.checked && fo(e, "checked", u, p.checked, !1));
  }
  return e;
}
function Ul(e, t, n) {
  try {
    typeof e == "function" ? e(t) : e.current = t;
  } catch (o) {
    F.__e(o, n);
  }
}
function Bl(e, t, n) {
  var o, i;
  if (F.unmount && F.unmount(e), (o = e.ref) && (o.current && o.current !== e.__e || Ul(o, null, t)), (o = e.__c) != null) {
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
      o[i] && Bl(o[i], t, n || typeof e.type != "function");
  n || e.__e == null || Ol(e.__e), e.__ = e.__e = e.__d = void 0;
}
function h_(e, t, n) {
  return this.constructor(e, n);
}
Mr = Pl.slice, F = { __e: function(e, t, n, o) {
  for (var i, r, l; t = t.__; )
    if ((i = t.__c) && !i.__)
      try {
        if ((r = i.constructor) && r.getDerivedStateFromError != null && (i.setState(r.getDerivedStateFromError(e)), l = i.__d), i.componentDidCatch != null && (i.componentDidCatch(e, o || {}), l = i.__d), l)
          return i.__E = i;
      } catch (c) {
        e = c;
      }
  throw e;
} }, Nl = 0, Zt.prototype.setState = function(e, t) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = Ke({}, this.state), typeof e == "function" && (e = e(Ke({}, n), this.props)), e && Ke(n, e), e != null && this.__v && (t && this._sb.push(t), Ts(this));
}, Zt.prototype.forceUpdate = function(e) {
  this.__v && (this.__e = !0, e && this.__h.push(e), Ts(this));
}, Zt.prototype.render = Ar, Jt = [], _o.__r = 0;
var Rr = "top", zl = "bottom", uo = "right", un = "left", p_ = "auto", Fl = [Rr, zl, uo, un], d_ = "start", v_ = "end", g_ = /* @__PURE__ */ [].concat(Fl, [p_]).reduce(function(e, t) {
  return e.concat([t, t + "-" + d_, t + "-" + v_]);
}, []);
function Vl(e) {
  return e.split("-")[0];
}
function Nt(e) {
  if (e == null)
    return window;
  if (e.toString() !== "[object Window]") {
    var t = e.ownerDocument;
    return t && t.defaultView || window;
  }
  return e;
}
function ql(e) {
  var t = Nt(e).Element;
  return e instanceof t || e instanceof Element;
}
function ho(e) {
  var t = Nt(e).HTMLElement;
  return e instanceof t || e instanceof HTMLElement;
}
function Nr(e) {
  if (typeof ShadowRoot > "u")
    return !1;
  var t = Nt(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot;
}
var m_ = Math.max, y_ = Math.min, Ds = Math.round;
function ir() {
  var e = navigator.userAgentData;
  return e != null && e.brands ? e.brands.map(function(t) {
    return t.brand + "/" + t.version;
  }).join(" ") : navigator.userAgent;
}
function b_() {
  return !/^((?!chrome|android).)*safari/i.test(ir());
}
function w_(e, t, n) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  var o = e.getBoundingClientRect(), i = 1, r = 1;
  t && ho(e) && (i = e.offsetWidth > 0 && Ds(o.width) / e.offsetWidth || 1, r = e.offsetHeight > 0 && Ds(o.height) / e.offsetHeight || 1);
  var l = ql(e) ? Nt(e) : window, c = l.visualViewport, _ = !b_() && n, h = (o.left + (_ && c ? c.offsetLeft : 0)) / i, s = (o.top + (_ && c ? c.offsetTop : 0)) / r, p = o.width / i, f = o.height / r;
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
function k_(e) {
  var t = w_(e), n = e.offsetWidth, o = e.offsetHeight;
  return Math.abs(t.width - n) <= 1 && (n = t.width), Math.abs(t.height - o) <= 1 && (o = t.height), {
    x: e.offsetLeft,
    y: e.offsetTop,
    width: n,
    height: o
  };
}
function $_(e, t) {
  var n = t.getRootNode && t.getRootNode();
  if (e.contains(t))
    return !0;
  if (n && Nr(n)) {
    var o = t;
    do {
      if (o && e.isSameNode(o))
        return !0;
      o = o.parentNode || o.host;
    } while (o);
  }
  return !1;
}
function hn(e) {
  return e ? (e.nodeName || "").toLowerCase() : null;
}
function pn(e) {
  return Nt(e).getComputedStyle(e);
}
function x_(e) {
  return ["table", "td", "th"].indexOf(hn(e)) >= 0;
}
function C_(e) {
  return ((ql(e) ? e.ownerDocument : e.document) || window.document).documentElement;
}
function E_(e) {
  return hn(e) === "html" ? e : e.assignedSlot || e.parentNode || (Nr(e) ? e.host : null) || C_(e);
}
function Hs(e) {
  return !ho(e) || pn(e).position === "fixed" ? null : e.offsetParent;
}
function S_(e) {
  var t = /firefox/i.test(ir()), n = /Trident/i.test(ir());
  if (n && ho(e)) {
    var o = pn(e);
    if (o.position === "fixed")
      return null;
  }
  var i = E_(e);
  for (Nr(i) && (i = i.host); ho(i) && ["html", "body"].indexOf(hn(i)) < 0; ) {
    var r = pn(i);
    if (r.transform !== "none" || r.perspective !== "none" || r.contain === "paint" || ["transform", "perspective"].indexOf(r.willChange) !== -1 || t && r.willChange === "filter" || t && r.filter && r.filter !== "none")
      return i;
    i = i.parentNode;
  }
  return null;
}
function M_(e) {
  for (var t = Nt(e), n = Hs(e); n && x_(n) && pn(n).position === "static"; )
    n = Hs(n);
  return n && (hn(n) === "html" || hn(n) === "body" && pn(n).position === "static") ? t : n || S_(e) || t;
}
function A_(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function R_(e, t, n) {
  return m_(e, y_(t, n));
}
function N_() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
function T_(e) {
  return Object.assign({}, N_(), e);
}
function P_(e, t) {
  return t.reduce(function(n, o) {
    return n[o] = e, n;
  }, {});
}
var O_ = function(t, n) {
  return t = typeof t == "function" ? t(Object.assign({}, n.rects, {
    placement: n.placement
  })) : t, T_(typeof t != "number" ? t : P_(t, Fl));
};
function L_(e) {
  var t, n = e.state, o = e.name, i = e.options, r = n.elements.arrow, l = n.modifiersData.popperOffsets, c = Vl(n.placement), _ = A_(c), h = [un, uo].indexOf(c) >= 0, s = h ? "height" : "width";
  if (!(!r || !l)) {
    var p = O_(i.padding, n), f = k_(r), a = _ === "y" ? Rr : un, u = _ === "y" ? zl : uo, y = n.rects.reference[s] + n.rects.reference[_] - l[_] - n.rects.popper[s], d = l[_] - n.rects.reference[_], v = M_(r), g = v ? _ === "y" ? v.clientHeight || 0 : v.clientWidth || 0 : 0, k = y / 2 - d / 2, w = p[a], E = g - f[s] - p[u], $ = g / 2 - f[s] / 2 + k, x = R_(w, $, E), b = _;
    n.modifiersData[o] = (t = {}, t[b] = x, t.centerOffset = x - $, t);
  }
}
function D_(e) {
  var t = e.state, n = e.options, o = n.element, i = o === void 0 ? "[data-popper-arrow]" : o;
  i != null && (typeof i == "string" && (i = t.elements.popper.querySelector(i), !i) || !$_(t.elements.popper, i) || (t.elements.arrow = i));
}
const H_ = {
  name: "arrow",
  enabled: !0,
  phase: "main",
  fn: L_,
  effect: D_,
  requires: ["popperOffsets"],
  requiresIfExists: ["preventOverflow"]
};
function I_(e, t, n) {
  var o = Vl(e), i = [un, Rr].indexOf(o) >= 0 ? -1 : 1, r = typeof n == "function" ? n(Object.assign({}, t, {
    placement: e
  })) : n, l = r[0], c = r[1];
  return l = l || 0, c = (c || 0) * i, [un, uo].indexOf(o) >= 0 ? {
    x: c,
    y: l
  } : {
    x: l,
    y: c
  };
}
function W_(e) {
  var t = e.state, n = e.options, o = e.name, i = n.offset, r = i === void 0 ? [0, 0] : i, l = g_.reduce(function(s, p) {
    return s[p] = I_(p, t.rects, r), s;
  }, {}), c = l[t.placement], _ = c.x, h = c.y;
  t.modifiersData.popperOffsets != null && (t.modifiersData.popperOffsets.x += _, t.modifiersData.popperOffsets.y += h), t.modifiersData[o] = l;
}
const j_ = {
  name: "offset",
  enabled: !0,
  phase: "main",
  requires: ["popperOffsets"],
  fn: W_
};
var zo, I, Gl, Qt, Is, po = {}, Yl = [], U_ = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function Xe(e, t) {
  for (var n in t)
    e[n] = t[n];
  return e;
}
function Kl(e) {
  var t = e.parentNode;
  t && t.removeChild(e);
}
function Tr(e, t, n) {
  var o, i, r, l = {};
  for (r in t)
    r == "key" ? o = t[r] : r == "ref" ? i = t[r] : l[r] = t[r];
  if (arguments.length > 2 && (l.children = arguments.length > 3 ? zo.call(arguments, 2) : n), typeof e == "function" && e.defaultProps != null)
    for (r in e.defaultProps)
      l[r] === void 0 && (l[r] = e.defaultProps[r]);
  return Vn(e, l, o, i, null);
}
function Vn(e, t, n, o, i) {
  var r = { type: e, props: t, key: n, ref: o, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: i == null ? ++Gl : i };
  return i == null && I.vnode != null && I.vnode(r), r;
}
function Fo(e) {
  return e.children;
}
function qn(e, t) {
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
function Xl(e) {
  var t, n;
  if ((e = e.__) != null && e.__c != null) {
    for (e.__e = e.__c.base = null, t = 0; t < e.__k.length; t++)
      if ((n = e.__k[t]) != null && n.__e != null) {
        e.__e = e.__c.base = n.__e;
        break;
      }
    return Xl(e);
  }
}
function Ws(e) {
  (!e.__d && (e.__d = !0) && Qt.push(e) && !vo.__r++ || Is !== I.debounceRendering) && ((Is = I.debounceRendering) || setTimeout)(vo);
}
function vo() {
  for (var e; vo.__r = Qt.length; )
    e = Qt.sort(function(t, n) {
      return t.__v.__b - n.__v.__b;
    }), Qt = [], e.some(function(t) {
      var n, o, i, r, l, c;
      t.__d && (l = (r = (n = t).__v).__e, (c = n.__P) && (o = [], (i = Xe({}, r)).__v = r.__v + 1, Pr(c, r, i, n.__n, c.ownerSVGElement !== void 0, r.__h != null ? [l] : null, o, l == null ? dn(r) : l, r.__h), ea(o, r), r.__e != l && Xl(r)));
    });
}
function Jl(e, t, n, o, i, r, l, c, _, h) {
  var s, p, f, a, u, y, d, v = o && o.__k || Yl, g = v.length;
  for (n.__k = [], s = 0; s < t.length; s++)
    if ((a = n.__k[s] = (a = t[s]) == null || typeof a == "boolean" ? null : typeof a == "string" || typeof a == "number" || typeof a == "bigint" ? Vn(null, a, null, null, a) : Array.isArray(a) ? Vn(Fo, { children: a }, null, null, null) : a.__b > 0 ? Vn(a.type, a.props, a.key, a.ref ? a.ref : null, a.__v) : a) != null) {
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
      Pr(e, a, f = f || po, i, r, l, c, _, h), u = a.__e, (p = a.ref) && f.ref != p && (d || (d = []), f.ref && d.push(f.ref, null, a), d.push(p, a.__c || u, a)), u != null ? (y == null && (y = u), typeof a.type == "function" && a.__k === f.__k ? a.__d = _ = Zl(a, _, e) : _ = Ql(e, a, f, v, u, _), typeof n.type == "function" && (n.__d = _)) : _ && f.__e == _ && _.parentNode != e && (_ = dn(f));
    }
  for (n.__e = y, s = g; s--; )
    v[s] != null && na(v[s], v[s]);
  if (d)
    for (s = 0; s < d.length; s++)
      ta(d[s], d[++s], d[++s]);
}
function Zl(e, t, n) {
  for (var o, i = e.__k, r = 0; i && r < i.length; r++)
    (o = i[r]) && (o.__ = e, t = typeof o.type == "function" ? Zl(o, t, n) : Ql(n, o, o, i, o.__e, t));
  return t;
}
function Ql(e, t, n, o, i, r) {
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
function B_(e, t, n, o, i) {
  var r;
  for (r in n)
    r === "children" || r === "key" || r in t || go(e, r, null, n[r], o);
  for (r in t)
    i && typeof t[r] != "function" || r === "children" || r === "key" || r === "value" || r === "checked" || n[r] === t[r] || go(e, r, t[r], n[r], o);
}
function js(e, t, n) {
  t[0] === "-" ? e.setProperty(t, n) : e[t] = n == null ? "" : typeof n != "number" || U_.test(t) ? n : n + "px";
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
      r = t !== (t = t.replace(/Capture$/, "")), t = t.toLowerCase() in e ? t.toLowerCase().slice(2) : t.slice(2), e.l || (e.l = {}), e.l[t + r] = n, n ? o || e.addEventListener(t, r ? Bs : Us, r) : e.removeEventListener(t, r ? Bs : Us, r);
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
function Us(e) {
  this.l[e.type + !1](I.event ? I.event(e) : e);
}
function Bs(e) {
  this.l[e.type + !0](I.event ? I.event(e) : e);
}
function Pr(e, t, n, o, i, r, l, c, _) {
  var h, s, p, f, a, u, y, d, v, g, k, w, E, $, x, b = t.type;
  if (t.constructor !== void 0)
    return null;
  n.__h != null && (_ = n.__h, c = t.__e = n.__e, t.__h = null, r = [c]), (h = I.__b) && h(t);
  try {
    e:
      if (typeof b == "function") {
        if (d = t.props, v = (h = b.contextType) && o[h.__c], g = h ? v ? v.props.value : h.__ : o, n.__c ? y = (s = t.__c = n.__c).__ = s.__E : ("prototype" in b && b.prototype.render ? t.__c = s = new b(d, g) : (t.__c = s = new qn(d, g), s.constructor = b, s.render = F_), v && v.sub(s), s.props = d, s.state || (s.state = {}), s.context = g, s.__n = o, p = s.__d = !0, s.__h = [], s._sb = []), s.__s == null && (s.__s = s.state), b.getDerivedStateFromProps != null && (s.__s == s.state && (s.__s = Xe({}, s.__s)), Xe(s.__s, b.getDerivedStateFromProps(d, s.__s))), f = s.props, a = s.state, p)
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
        if (s.context = g, s.props = d, s.__v = t, s.__P = e, w = I.__r, E = 0, "prototype" in b && b.prototype.render) {
          for (s.state = s.__s, s.__d = !1, w && w(t), h = s.render(s.props, s.state, s.context), $ = 0; $ < s._sb.length; $++)
            s.__h.push(s._sb[$]);
          s._sb = [];
        } else
          do
            s.__d = !1, w && w(t), h = s.render(s.props, s.state, s.context), s.state = s.__s;
          while (s.__d && ++E < 25);
        s.state = s.__s, s.getChildContext != null && (o = Xe(Xe({}, o), s.getChildContext())), p || s.getSnapshotBeforeUpdate == null || (u = s.getSnapshotBeforeUpdate(f, a)), x = h != null && h.type === Fo && h.key == null ? h.props.children : h, Jl(e, Array.isArray(x) ? x : [x], t, n, o, i, r, l, c, _), s.base = t.__e, t.__h = null, s.__h.length && l.push(s), y && (s.__E = s.__ = null), s.__e = !1;
      } else
        r == null && t.__v === n.__v ? (t.__k = n.__k, t.__e = n.__e) : t.__e = z_(n.__e, t, n, o, i, r, l, _);
    (h = I.diffed) && h(t);
  } catch (C) {
    t.__v = null, (_ || r != null) && (t.__e = c, t.__h = !!_, r[r.indexOf(c)] = null), I.__e(C, t, n);
  }
}
function ea(e, t) {
  I.__c && I.__c(t, e), e.some(function(n) {
    try {
      e = n.__h, n.__h = [], e.some(function(o) {
        o.call(n);
      });
    } catch (o) {
      I.__e(o, n.__v);
    }
  });
}
function z_(e, t, n, o, i, r, l, c) {
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
    if (r = r && zo.call(e.childNodes), h = (p = n.props || po).dangerouslySetInnerHTML, s = f.dangerouslySetInnerHTML, !c) {
      if (r != null)
        for (p = {}, u = 0; u < e.attributes.length; u++)
          p[e.attributes[u].name] = e.attributes[u].value;
      (s || h) && (s && (h && s.__html == h.__html || s.__html === e.innerHTML) || (e.innerHTML = s && s.__html || ""));
    }
    if (B_(e, f, p, i, c), s)
      t.__k = [];
    else if (u = t.props.children, Jl(e, Array.isArray(u) ? u : [u], t, n, o, i && a !== "foreignObject", r, l, r ? r[0] : n.__k && dn(n, 0), c), r != null)
      for (u = r.length; u--; )
        r[u] != null && Kl(r[u]);
    c || ("value" in f && (u = f.value) !== void 0 && (u !== e.value || a === "progress" && !u || a === "option" && u !== p.value) && go(e, "value", u, p.value, !1), "checked" in f && (u = f.checked) !== void 0 && u !== e.checked && go(e, "checked", u, p.checked, !1));
  }
  return e;
}
function ta(e, t, n) {
  try {
    typeof e == "function" ? e(t) : e.current = t;
  } catch (o) {
    I.__e(o, n);
  }
}
function na(e, t, n) {
  var o, i;
  if (I.unmount && I.unmount(e), (o = e.ref) && (o.current && o.current !== e.__e || ta(o, null, t)), (o = e.__c) != null) {
    if (o.componentWillUnmount)
      try {
        o.componentWillUnmount();
      } catch (r) {
        I.__e(r, t);
      }
    o.base = o.__P = null, e.__c = void 0;
  }
  if (o = e.__k)
    for (i = 0; i < o.length; i++)
      o[i] && na(o[i], t, n || typeof e.type != "function");
  n || e.__e == null || Kl(e.__e), e.__ = e.__e = e.__d = void 0;
}
function F_(e, t, n) {
  return this.constructor(e, n);
}
function V_(e, t, n) {
  var o, i, r;
  I.__ && I.__(e, t), i = (o = typeof n == "function") ? null : n && n.__k || t.__k, r = [], Pr(t, e = (!o && n || t).__k = Tr(Fo, null, [e]), i || po, po, t.ownerSVGElement !== void 0, !o && n ? [n] : i ? null : t.firstChild ? zo.call(t.childNodes) : null, r, !o && n ? n : i ? i.__e : t.firstChild, o), ea(r, e);
}
zo = Yl.slice, I = { __e: function(e, t, n, o) {
  for (var i, r, l; t = t.__; )
    if ((i = t.__c) && !i.__)
      try {
        if ((r = i.constructor) && r.getDerivedStateFromError != null && (i.setState(r.getDerivedStateFromError(e)), l = i.__d), i.componentDidCatch != null && (i.componentDidCatch(e, o || {}), l = i.__d), l)
          return i.__E = i;
      } catch (c) {
        e = c;
      }
  throw e;
} }, Gl = 0, qn.prototype.setState = function(e, t) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = Xe({}, this.state), typeof e == "function" && (e = e(Xe({}, n), this.props)), e && Xe(n, e), e != null && this.__v && (t && this._sb.push(t), Ws(this));
}, qn.prototype.forceUpdate = function(e) {
  this.__v && (this.__e = !0, e && this.__h.push(e), Ws(this));
}, qn.prototype.render = Fo, Qt = [], vo.__r = 0;
function ce(e) {
  if (e == null)
    return window;
  if (e.toString() !== "[object Window]") {
    var t = e.ownerDocument;
    return t && t.defaultView || window;
  }
  return e;
}
function ft(e) {
  var t = ce(e).Element;
  return e instanceof t || e instanceof Element;
}
function ae(e) {
  var t = ce(e).HTMLElement;
  return e instanceof t || e instanceof HTMLElement;
}
function Or(e) {
  if (typeof ShadowRoot > "u")
    return !1;
  var t = ce(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot;
}
var _t = Math.max, mo = Math.min, St = Math.round;
function lr() {
  var e = navigator.userAgentData;
  return e != null && e.brands ? e.brands.map(function(t) {
    return t.brand + "/" + t.version;
  }).join(" ") : navigator.userAgent;
}
function oa() {
  return !/^((?!chrome|android).)*safari/i.test(lr());
}
function Mt(e, t, n) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  var o = e.getBoundingClientRect(), i = 1, r = 1;
  t && ae(e) && (i = e.offsetWidth > 0 && St(o.width) / e.offsetWidth || 1, r = e.offsetHeight > 0 && St(o.height) / e.offsetHeight || 1);
  var l = ft(e) ? ce(e) : window, c = l.visualViewport, _ = !oa() && n, h = (o.left + (_ && c ? c.offsetLeft : 0)) / i, s = (o.top + (_ && c ? c.offsetTop : 0)) / r, p = o.width / i, f = o.height / r;
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
function Lr(e) {
  var t = ce(e), n = t.pageXOffset, o = t.pageYOffset;
  return {
    scrollLeft: n,
    scrollTop: o
  };
}
function q_(e) {
  return {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  };
}
function G_(e) {
  return e === ce(e) || !ae(e) ? Lr(e) : q_(e);
}
function we(e) {
  return e ? (e.nodeName || "").toLowerCase() : null;
}
function tt(e) {
  return ((ft(e) ? e.ownerDocument : e.document) || window.document).documentElement;
}
function Dr(e) {
  return Mt(tt(e)).left + Lr(e).scrollLeft;
}
function Oe(e) {
  return ce(e).getComputedStyle(e);
}
function Hr(e) {
  var t = Oe(e), n = t.overflow, o = t.overflowX, i = t.overflowY;
  return /auto|scroll|overlay|hidden/.test(n + i + o);
}
function Y_(e) {
  var t = e.getBoundingClientRect(), n = St(t.width) / e.offsetWidth || 1, o = St(t.height) / e.offsetHeight || 1;
  return n !== 1 || o !== 1;
}
function K_(e, t, n) {
  n === void 0 && (n = !1);
  var o = ae(t), i = ae(t) && Y_(t), r = tt(t), l = Mt(e, i, n), c = {
    scrollLeft: 0,
    scrollTop: 0
  }, _ = {
    x: 0,
    y: 0
  };
  return (o || !o && !n) && ((we(t) !== "body" || Hr(r)) && (c = G_(t)), ae(t) ? (_ = Mt(t, !0), _.x += t.clientLeft, _.y += t.clientTop) : r && (_.x = Dr(r))), {
    x: l.left + c.scrollLeft - _.x,
    y: l.top + c.scrollTop - _.y,
    width: l.width,
    height: l.height
  };
}
function ra(e) {
  var t = Mt(e), n = e.offsetWidth, o = e.offsetHeight;
  return Math.abs(t.width - n) <= 1 && (n = t.width), Math.abs(t.height - o) <= 1 && (o = t.height), {
    x: e.offsetLeft,
    y: e.offsetTop,
    width: n,
    height: o
  };
}
function Vo(e) {
  return we(e) === "html" ? e : e.assignedSlot || e.parentNode || (Or(e) ? e.host : null) || tt(e);
}
function sa(e) {
  return ["html", "body", "#document"].indexOf(we(e)) >= 0 ? e.ownerDocument.body : ae(e) && Hr(e) ? e : sa(Vo(e));
}
function en(e, t) {
  var n;
  t === void 0 && (t = []);
  var o = sa(e), i = o === ((n = e.ownerDocument) == null ? void 0 : n.body), r = ce(o), l = i ? [r].concat(r.visualViewport || [], Hr(o) ? o : []) : o, c = t.concat(l);
  return i ? c : c.concat(en(Vo(l)));
}
function X_(e) {
  return ["table", "td", "th"].indexOf(we(e)) >= 0;
}
function zs(e) {
  return !ae(e) || Oe(e).position === "fixed" ? null : e.offsetParent;
}
function J_(e) {
  var t = /firefox/i.test(lr()), n = /Trident/i.test(lr());
  if (n && ae(e)) {
    var o = Oe(e);
    if (o.position === "fixed")
      return null;
  }
  var i = Vo(e);
  for (Or(i) && (i = i.host); ae(i) && ["html", "body"].indexOf(we(i)) < 0; ) {
    var r = Oe(i);
    if (r.transform !== "none" || r.perspective !== "none" || r.contain === "paint" || ["transform", "perspective"].indexOf(r.willChange) !== -1 || t && r.willChange === "filter" || t && r.filter && r.filter !== "none")
      return i;
    i = i.parentNode;
  }
  return null;
}
function qo(e) {
  for (var t = ce(e), n = zs(e); n && X_(n) && Oe(n).position === "static"; )
    n = zs(n);
  return n && (we(n) === "html" || we(n) === "body" && Oe(n).position === "static") ? t : n || J_(e) || t;
}
var he = "top", ke = "bottom", et = "right", Pe = "left", Ir = "auto", Go = [he, ke, et, Pe], At = "start", vn = "end", Z_ = "clippingParents", ia = "viewport", It = "popper", Q_ = "reference", Fs = /* @__PURE__ */ Go.reduce(function(e, t) {
  return e.concat([t + "-" + At, t + "-" + vn]);
}, []), ef = /* @__PURE__ */ [].concat(Go, [Ir]).reduce(function(e, t) {
  return e.concat([t, t + "-" + At, t + "-" + vn]);
}, []), tf = "beforeRead", nf = "read", of = "afterRead", rf = "beforeMain", sf = "main", lf = "afterMain", af = "beforeWrite", cf = "write", _f = "afterWrite", ff = [tf, nf, of, rf, sf, lf, af, cf, _f];
function uf(e) {
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
function hf(e) {
  var t = uf(e);
  return ff.reduce(function(n, o) {
    return n.concat(t.filter(function(i) {
      return i.phase === o;
    }));
  }, []);
}
function pf(e) {
  var t;
  return function() {
    return t || (t = new Promise(function(n) {
      Promise.resolve().then(function() {
        t = void 0, n(e());
      });
    })), t;
  };
}
function Qe(e) {
  return e.split("-")[0];
}
function df(e) {
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
function vf(e, t) {
  var n = ce(e), o = tt(e), i = n.visualViewport, r = o.clientWidth, l = o.clientHeight, c = 0, _ = 0;
  if (i) {
    r = i.width, l = i.height;
    var h = oa();
    (h || !h && t === "fixed") && (c = i.offsetLeft, _ = i.offsetTop);
  }
  return {
    width: r,
    height: l,
    x: c + Dr(e),
    y: _
  };
}
function gf(e) {
  var t, n = tt(e), o = Lr(e), i = (t = e.ownerDocument) == null ? void 0 : t.body, r = _t(n.scrollWidth, n.clientWidth, i ? i.scrollWidth : 0, i ? i.clientWidth : 0), l = _t(n.scrollHeight, n.clientHeight, i ? i.scrollHeight : 0, i ? i.clientHeight : 0), c = -o.scrollLeft + Dr(e), _ = -o.scrollTop;
  return Oe(i || n).direction === "rtl" && (c += _t(n.clientWidth, i ? i.clientWidth : 0) - r), {
    width: r,
    height: l,
    x: c,
    y: _
  };
}
function mf(e, t) {
  var n = t.getRootNode && t.getRootNode();
  if (e.contains(t))
    return !0;
  if (n && Or(n)) {
    var o = t;
    do {
      if (o && e.isSameNode(o))
        return !0;
      o = o.parentNode || o.host;
    } while (o);
  }
  return !1;
}
function ar(e) {
  return Object.assign({}, e, {
    left: e.x,
    top: e.y,
    right: e.x + e.width,
    bottom: e.y + e.height
  });
}
function yf(e, t) {
  var n = Mt(e, !1, t === "fixed");
  return n.top = n.top + e.clientTop, n.left = n.left + e.clientLeft, n.bottom = n.top + e.clientHeight, n.right = n.left + e.clientWidth, n.width = e.clientWidth, n.height = e.clientHeight, n.x = n.left, n.y = n.top, n;
}
function Vs(e, t, n) {
  return t === ia ? ar(vf(e, n)) : ft(t) ? yf(t, n) : ar(gf(tt(e)));
}
function bf(e) {
  var t = en(Vo(e)), n = ["absolute", "fixed"].indexOf(Oe(e).position) >= 0, o = n && ae(e) ? qo(e) : e;
  return ft(o) ? t.filter(function(i) {
    return ft(i) && mf(i, o) && we(i) !== "body";
  }) : [];
}
function wf(e, t, n, o) {
  var i = t === "clippingParents" ? bf(e) : [].concat(t), r = [].concat(i, [n]), l = r[0], c = r.reduce(function(_, h) {
    var s = Vs(e, h, o);
    return _.top = _t(s.top, _.top), _.right = mo(s.right, _.right), _.bottom = mo(s.bottom, _.bottom), _.left = _t(s.left, _.left), _;
  }, Vs(e, l, o));
  return c.width = c.right - c.left, c.height = c.bottom - c.top, c.x = c.left, c.y = c.top, c;
}
function Rt(e) {
  return e.split("-")[1];
}
function la(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function aa(e) {
  var t = e.reference, n = e.element, o = e.placement, i = o ? Qe(o) : null, r = o ? Rt(o) : null, l = t.x + t.width / 2 - n.width / 2, c = t.y + t.height / 2 - n.height / 2, _;
  switch (i) {
    case he:
      _ = {
        x: l,
        y: t.y - n.height
      };
      break;
    case ke:
      _ = {
        x: l,
        y: t.y + t.height
      };
      break;
    case et:
      _ = {
        x: t.x + t.width,
        y: c
      };
      break;
    case Pe:
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
  var h = i ? la(i) : null;
  if (h != null) {
    var s = h === "y" ? "height" : "width";
    switch (r) {
      case At:
        _[h] = _[h] - (t[s] / 2 - n[s] / 2);
        break;
      case vn:
        _[h] = _[h] + (t[s] / 2 - n[s] / 2);
        break;
    }
  }
  return _;
}
function ca() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
function kf(e) {
  return Object.assign({}, ca(), e);
}
function $f(e, t) {
  return t.reduce(function(n, o) {
    return n[o] = e, n;
  }, {});
}
function Wr(e, t) {
  t === void 0 && (t = {});
  var n = t, o = n.placement, i = o === void 0 ? e.placement : o, r = n.strategy, l = r === void 0 ? e.strategy : r, c = n.boundary, _ = c === void 0 ? Z_ : c, h = n.rootBoundary, s = h === void 0 ? ia : h, p = n.elementContext, f = p === void 0 ? It : p, a = n.altBoundary, u = a === void 0 ? !1 : a, y = n.padding, d = y === void 0 ? 0 : y, v = kf(typeof d != "number" ? d : $f(d, Go)), g = f === It ? Q_ : It, k = e.rects.popper, w = e.elements[u ? g : f], E = wf(ft(w) ? w : w.contextElement || tt(e.elements.popper), _, s, l), $ = Mt(e.elements.reference), x = aa({
    reference: $,
    element: k,
    strategy: "absolute",
    placement: i
  }), b = ar(Object.assign({}, k, x)), C = f === It ? b : $, A = {
    top: E.top - C.top + v.top,
    bottom: C.bottom - E.bottom + v.bottom,
    left: E.left - C.left + v.left,
    right: C.right - E.right + v.right
  }, D = e.modifiersData.offset;
  if (f === It && D) {
    var X = D[i];
    Object.keys(A).forEach(function(G) {
      var _e = [et, ke].indexOf(G) >= 0 ? 1 : -1, J = [he, ke].indexOf(G) >= 0 ? "y" : "x";
      A[G] += X[J] * _e;
    });
  }
  return A;
}
var qs = {
  placement: "bottom",
  modifiers: [],
  strategy: "absolute"
};
function Gs() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return !t.some(function(o) {
    return !(o && typeof o.getBoundingClientRect == "function");
  });
}
function xf(e) {
  e === void 0 && (e = {});
  var t = e, n = t.defaultModifiers, o = n === void 0 ? [] : n, i = t.defaultOptions, r = i === void 0 ? qs : i;
  return function(c, _, h) {
    h === void 0 && (h = r);
    var s = {
      placement: "bottom",
      orderedModifiers: [],
      options: Object.assign({}, qs, r),
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
        y(), s.options = Object.assign({}, r, s.options, g), s.scrollParents = {
          reference: ft(c) ? en(c) : c.contextElement ? en(c.contextElement) : [],
          popper: en(_)
        };
        var k = hf(df([].concat(o, s.options.modifiers)));
        return s.orderedModifiers = k.filter(function(w) {
          return w.enabled;
        }), u(), a.update();
      },
      forceUpdate: function() {
        if (!f) {
          var v = s.elements, g = v.reference, k = v.popper;
          if (!!Gs(g, k)) {
            s.rects = {
              reference: K_(g, qo(k), s.options.strategy === "fixed"),
              popper: ra(k)
            }, s.reset = !1, s.placement = s.options.placement, s.orderedModifiers.forEach(function(A) {
              return s.modifiersData[A.name] = Object.assign({}, A.data);
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
      update: pf(function() {
        return new Promise(function(d) {
          a.forceUpdate(), d(s);
        });
      }),
      destroy: function() {
        y(), f = !0;
      }
    };
    if (!Gs(c, _))
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
    function y() {
      p.forEach(function(d) {
        return d();
      }), p = [];
    }
    return a;
  };
}
var Dn = {
  passive: !0
};
function Cf(e) {
  var t = e.state, n = e.instance, o = e.options, i = o.scroll, r = i === void 0 ? !0 : i, l = o.resize, c = l === void 0 ? !0 : l, _ = ce(t.elements.popper), h = [].concat(t.scrollParents.reference, t.scrollParents.popper);
  return r && h.forEach(function(s) {
    s.addEventListener("scroll", n.update, Dn);
  }), c && _.addEventListener("resize", n.update, Dn), function() {
    r && h.forEach(function(s) {
      s.removeEventListener("scroll", n.update, Dn);
    }), c && _.removeEventListener("resize", n.update, Dn);
  };
}
const Ef = {
  name: "eventListeners",
  enabled: !0,
  phase: "write",
  fn: function() {
  },
  effect: Cf,
  data: {}
};
function Sf(e) {
  var t = e.state, n = e.name;
  t.modifiersData[n] = aa({
    reference: t.rects.reference,
    element: t.rects.popper,
    strategy: "absolute",
    placement: t.placement
  });
}
const Mf = {
  name: "popperOffsets",
  enabled: !0,
  phase: "read",
  fn: Sf,
  data: {}
};
var Af = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function Rf(e) {
  var t = e.x, n = e.y, o = window, i = o.devicePixelRatio || 1;
  return {
    x: St(t * i) / i || 0,
    y: St(n * i) / i || 0
  };
}
function Ys(e) {
  var t, n = e.popper, o = e.popperRect, i = e.placement, r = e.variation, l = e.offsets, c = e.position, _ = e.gpuAcceleration, h = e.adaptive, s = e.roundOffsets, p = e.isFixed, f = l.x, a = f === void 0 ? 0 : f, u = l.y, y = u === void 0 ? 0 : u, d = typeof s == "function" ? s({
    x: a,
    y
  }) : {
    x: a,
    y
  };
  a = d.x, y = d.y;
  var v = l.hasOwnProperty("x"), g = l.hasOwnProperty("y"), k = Pe, w = he, E = window;
  if (h) {
    var $ = qo(n), x = "clientHeight", b = "clientWidth";
    if ($ === ce(n) && ($ = tt(n), Oe($).position !== "static" && c === "absolute" && (x = "scrollHeight", b = "scrollWidth")), $ = $, i === he || (i === Pe || i === et) && r === vn) {
      w = ke;
      var C = p && $ === E && E.visualViewport ? E.visualViewport.height : $[x];
      y -= C - o.height, y *= _ ? 1 : -1;
    }
    if (i === Pe || (i === he || i === ke) && r === vn) {
      k = et;
      var A = p && $ === E && E.visualViewport ? E.visualViewport.width : $[b];
      a -= A - o.width, a *= _ ? 1 : -1;
    }
  }
  var D = Object.assign({
    position: c
  }, h && Af), X = s === !0 ? Rf({
    x: a,
    y
  }) : {
    x: a,
    y
  };
  if (a = X.x, y = X.y, _) {
    var G;
    return Object.assign({}, D, (G = {}, G[w] = g ? "0" : "", G[k] = v ? "0" : "", G.transform = (E.devicePixelRatio || 1) <= 1 ? "translate(" + a + "px, " + y + "px)" : "translate3d(" + a + "px, " + y + "px, 0)", G));
  }
  return Object.assign({}, D, (t = {}, t[w] = g ? y + "px" : "", t[k] = v ? a + "px" : "", t.transform = "", t));
}
function Nf(e) {
  var t = e.state, n = e.options, o = n.gpuAcceleration, i = o === void 0 ? !0 : o, r = n.adaptive, l = r === void 0 ? !0 : r, c = n.roundOffsets, _ = c === void 0 ? !0 : c, h = {
    placement: Qe(t.placement),
    variation: Rt(t.placement),
    popper: t.elements.popper,
    popperRect: t.rects.popper,
    gpuAcceleration: i,
    isFixed: t.options.strategy === "fixed"
  };
  t.modifiersData.popperOffsets != null && (t.styles.popper = Object.assign({}, t.styles.popper, Ys(Object.assign({}, h, {
    offsets: t.modifiersData.popperOffsets,
    position: t.options.strategy,
    adaptive: l,
    roundOffsets: _
  })))), t.modifiersData.arrow != null && (t.styles.arrow = Object.assign({}, t.styles.arrow, Ys(Object.assign({}, h, {
    offsets: t.modifiersData.arrow,
    position: "absolute",
    adaptive: !1,
    roundOffsets: _
  })))), t.attributes.popper = Object.assign({}, t.attributes.popper, {
    "data-popper-placement": t.placement
  });
}
const Tf = {
  name: "computeStyles",
  enabled: !0,
  phase: "beforeWrite",
  fn: Nf,
  data: {}
};
function Pf(e) {
  var t = e.state;
  Object.keys(t.elements).forEach(function(n) {
    var o = t.styles[n] || {}, i = t.attributes[n] || {}, r = t.elements[n];
    !ae(r) || !we(r) || (Object.assign(r.style, o), Object.keys(i).forEach(function(l) {
      var c = i[l];
      c === !1 ? r.removeAttribute(l) : r.setAttribute(l, c === !0 ? "" : c);
    }));
  });
}
function Of(e) {
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
      !ae(i) || !we(i) || (Object.assign(i.style, c), Object.keys(r).forEach(function(_) {
        i.removeAttribute(_);
      }));
    });
  };
}
const Lf = {
  name: "applyStyles",
  enabled: !0,
  phase: "write",
  fn: Pf,
  effect: Of,
  requires: ["computeStyles"]
};
var Df = [Ef, Mf, Tf, Lf], _a = /* @__PURE__ */ xf({
  defaultModifiers: Df
});
function Hf(e) {
  return e === "x" ? "y" : "x";
}
function Gn(e, t, n) {
  return _t(e, mo(t, n));
}
function If(e, t, n) {
  var o = Gn(e, t, n);
  return o > n ? n : o;
}
function Wf(e) {
  var t = e.state, n = e.options, o = e.name, i = n.mainAxis, r = i === void 0 ? !0 : i, l = n.altAxis, c = l === void 0 ? !1 : l, _ = n.boundary, h = n.rootBoundary, s = n.altBoundary, p = n.padding, f = n.tether, a = f === void 0 ? !0 : f, u = n.tetherOffset, y = u === void 0 ? 0 : u, d = Wr(t, {
    boundary: _,
    rootBoundary: h,
    padding: p,
    altBoundary: s
  }), v = Qe(t.placement), g = Rt(t.placement), k = !g, w = la(v), E = Hf(w), $ = t.modifiersData.popperOffsets, x = t.rects.reference, b = t.rects.popper, C = typeof y == "function" ? y(Object.assign({}, t.rects, {
    placement: t.placement
  })) : y, A = typeof C == "number" ? {
    mainAxis: C,
    altAxis: C
  } : Object.assign({
    mainAxis: 0,
    altAxis: 0
  }, C), D = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null, X = {
    x: 0,
    y: 0
  };
  if (!!$) {
    if (r) {
      var G, _e = w === "y" ? he : Pe, J = w === "y" ? ke : et, W = w === "y" ? "height" : "width", te = $[w], De = te + d[_e], $e = te - d[J], ut = a ? -b[W] / 2 : 0, xe = g === At ? x[W] : b[W], He = g === At ? -b[W] : -x[W], nt = t.elements.arrow, Ce = a && nt ? ra(nt) : {
        width: 0,
        height: 0
      }, R = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : ca(), L = R[_e], Y = R[J], Z = Gn(0, x[W], Ce[W]), fe = k ? x[W] / 2 - ut - Z - L - A.mainAxis : xe - Z - L - A.mainAxis, ot = k ? -x[W] / 2 + ut + Z + Y + A.mainAxis : He + Z + Y + A.mainAxis, Ee = t.elements.arrow && qo(t.elements.arrow), Pt = Ee ? w === "y" ? Ee.clientTop || 0 : Ee.clientLeft || 0 : 0, Tn = (G = D == null ? void 0 : D[w]) != null ? G : 0, O = te + fe - Tn - Pt, Pn = te + ot - Tn, Ot = Gn(a ? mo(De, O) : De, te, a ? _t($e, Pn) : $e);
      $[w] = Ot, X[w] = Ot - te;
    }
    if (c) {
      var Lt, On = w === "x" ? he : Pe, ht = w === "x" ? ke : et, pe = $[E], rt = E === "y" ? "height" : "width", Dt = pe + d[On], qr = pe - d[ht], Yo = [he, Pe].indexOf(v) !== -1, Gr = (Lt = D == null ? void 0 : D[E]) != null ? Lt : 0, Yr = Yo ? Dt : pe - x[rt] - b[rt] - Gr + A.altAxis, Kr = Yo ? pe + x[rt] + b[rt] - Gr - A.altAxis : qr, Xr = a && Yo ? If(Yr, pe, Kr) : Gn(a ? Yr : Dt, pe, a ? Kr : qr);
      $[E] = Xr, X[E] = Xr - pe;
    }
    t.modifiersData[o] = X;
  }
}
const cr = {
  name: "preventOverflow",
  enabled: !0,
  phase: "main",
  fn: Wf,
  requiresIfExists: ["offset"]
};
var jf = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function Yn(e) {
  return e.replace(/left|right|bottom|top/g, function(t) {
    return jf[t];
  });
}
var Uf = {
  start: "end",
  end: "start"
};
function Ks(e) {
  return e.replace(/start|end/g, function(t) {
    return Uf[t];
  });
}
function Bf(e, t) {
  t === void 0 && (t = {});
  var n = t, o = n.placement, i = n.boundary, r = n.rootBoundary, l = n.padding, c = n.flipVariations, _ = n.allowedAutoPlacements, h = _ === void 0 ? ef : _, s = Rt(o), p = s ? c ? Fs : Fs.filter(function(u) {
    return Rt(u) === s;
  }) : Go, f = p.filter(function(u) {
    return h.indexOf(u) >= 0;
  });
  f.length === 0 && (f = p);
  var a = f.reduce(function(u, y) {
    return u[y] = Wr(e, {
      placement: y,
      boundary: i,
      rootBoundary: r,
      padding: l
    })[Qe(y)], u;
  }, {});
  return Object.keys(a).sort(function(u, y) {
    return a[u] - a[y];
  });
}
function zf(e) {
  if (Qe(e) === Ir)
    return [];
  var t = Yn(e);
  return [Ks(e), t, Ks(t)];
}
function Ff(e) {
  var t = e.state, n = e.options, o = e.name;
  if (!t.modifiersData[o]._skip) {
    for (var i = n.mainAxis, r = i === void 0 ? !0 : i, l = n.altAxis, c = l === void 0 ? !0 : l, _ = n.fallbackPlacements, h = n.padding, s = n.boundary, p = n.rootBoundary, f = n.altBoundary, a = n.flipVariations, u = a === void 0 ? !0 : a, y = n.allowedAutoPlacements, d = t.options.placement, v = Qe(d), g = v === d, k = _ || (g || !u ? [Yn(d)] : zf(d)), w = [d].concat(k).reduce(function(Ce, R) {
      return Ce.concat(Qe(R) === Ir ? Bf(t, {
        placement: R,
        boundary: s,
        rootBoundary: p,
        padding: h,
        flipVariations: u,
        allowedAutoPlacements: y
      }) : R);
    }, []), E = t.rects.reference, $ = t.rects.popper, x = /* @__PURE__ */ new Map(), b = !0, C = w[0], A = 0; A < w.length; A++) {
      var D = w[A], X = Qe(D), G = Rt(D) === At, _e = [he, ke].indexOf(X) >= 0, J = _e ? "width" : "height", W = Wr(t, {
        placement: D,
        boundary: s,
        rootBoundary: p,
        altBoundary: f,
        padding: h
      }), te = _e ? G ? et : Pe : G ? ke : he;
      E[J] > $[J] && (te = Yn(te));
      var De = Yn(te), $e = [];
      if (r && $e.push(W[X] <= 0), c && $e.push(W[te] <= 0, W[De] <= 0), $e.every(function(Ce) {
        return Ce;
      })) {
        C = D, b = !1;
        break;
      }
      x.set(D, $e);
    }
    if (b)
      for (var ut = u ? 3 : 1, xe = function(R) {
        var L = w.find(function(Y) {
          var Z = x.get(Y);
          if (Z)
            return Z.slice(0, R).every(function(fe) {
              return fe;
            });
        });
        if (L)
          return C = L, "break";
      }, He = ut; He > 0; He--) {
        var nt = xe(He);
        if (nt === "break")
          break;
      }
    t.placement !== C && (t.modifiersData[o]._skip = !0, t.placement = C, t.reset = !0);
  }
}
const fa = {
  name: "flip",
  enabled: !0,
  phase: "main",
  fn: Ff,
  requiresIfExists: ["offset"],
  data: {
    _skip: !1
  }
};
function Vf(e) {
  return e.button === 2;
}
var je;
class qf extends wr {
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
    super.componentWillUnmount(), (n = m(this, je)) == null || n.destroy();
  }
  _getPopperOptions() {
    return {
      modifiers: [cr, fa],
      placement: "right-start"
    };
  }
  _getPopperElement() {
    var n;
    return (n = this.ref.current) == null ? void 0 : n.parentElement;
  }
  _createPopper() {
    const n = this._getPopperOptions();
    return m(this, je) ? m(this, je).setOptions(n) : this.ref.current && N(this, je, _a(this._getPopperElement(), this.ref.current, n)), m(this, je);
  }
  afterRender(n) {
    super.afterRender(n), this.props.controlledMenu && this._createPopper();
  }
  renderToggleIcon() {
    return /* @__PURE__ */ Tr("span", {
      class: "contextmenu-toggle-icon caret-right"
    });
  }
}
je = new WeakMap();
var Ue, ie, mt, kn;
class re extends Bt {
  constructor() {
    super(...arguments);
    M(this, Ue, void 0);
    M(this, ie, void 0);
    M(this, mt, void 0);
    M(this, kn, void 0);
  }
  get isShown() {
    var n;
    return (n = m(this, Ue)) == null ? void 0 : n.classList.contains(this.constructor.CLASS_SHOW);
  }
  get menu() {
    return m(this, Ue) || this._ensureMenu();
  }
  get popper() {
    return m(this, ie) ? m(this, ie) : this._createPopper();
  }
  get trigger() {
    return m(this, kn) || this.element;
  }
  get isDynamic() {
    return this.options.items || this.options.menu;
  }
  init() {
    const { element: n } = this;
    n !== document.body && !n.hasAttribute("data-toggle") && n.setAttribute("data-toggle", "contextmenu");
  }
  show(n) {
    return N(this, kn, n), this.emit("show", { menu: this, trigger: this.trigger }).defaultPrevented || this.isDynamic && !this._renderMenu() ? !1 : (this.menu.classList.add(this.constructor.CLASS_SHOW), this._createPopper().update(), this.emit("shown", this), !0);
  }
  hide() {
    var o, i;
    return this.emit("hide", this).defaultPrevented ? !1 : ((o = m(this, ie)) == null || o.destroy(), N(this, ie, void 0), (i = m(this, Ue)) == null || i.classList.remove(this.constructor.CLASS_SHOW), this.emit("hidden", this), !0);
  }
  toggle(n) {
    return this.isShown ? this.hide() : this.show(n);
  }
  destroy() {
    var n, o;
    (n = m(this, ie)) == null || n.destroy(), super.destroy(), (o = m(this, Ue)) == null || o.remove();
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
    return N(this, Ue, i), i;
  }
  _getPopperOptions() {
    const { flip: n, preventOverflow: o, modifiers: i = [] } = this.options;
    return {
      modifiers: [
        o ? typeof o == "object" ? { ...cr, options: o } : cr : null,
        n ? fa : null,
        ...i
      ].filter(Boolean),
      placement: this.options.placement,
      strategy: this.options.strategy
    };
  }
  _createPopper() {
    const n = this._getPopperOptions();
    return m(this, ie) ? m(this, ie).setOptions(n) : N(this, ie, _a(this._getPopperElement(), this.menu, n)), m(this, ie);
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
    return !n || this.emit("updateMenu", { menu: n, trigger: this.trigger, contextmenu: this }).defaultPrevented ? !1 : (V_(Tr(qf, n), this.menu), !0);
  }
  _getPopperElement() {
    return m(this, mt) || N(this, mt, {
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
    }), m(this, mt);
  }
  static clear(n) {
    var _, h;
    n instanceof Event && (n = { event: n });
    const { event: o, exclude: i, ignoreSelector: r = ".not-hide-menu" } = n || {};
    if (o && r && ((h = (_ = o.target).closest) == null ? void 0 : h.call(_, r)) || o && Vf(o))
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
Ue = new WeakMap(), ie = new WeakMap(), mt = new WeakMap(), kn = new WeakMap(), S(re, "NAME", "contextmenu"), S(re, "EVENTS", !0), S(re, "DEFAULT", {
  placement: "bottom-start",
  strategy: "fixed",
  flip: !0,
  preventOverflow: !0
}), S(re, "MENU_CLASS", "contextmenu"), S(re, "CLASS_SHOW", "show"), S(re, "MENU_SELECTOR", '[data-toggle="contextmenu"]:not(.disabled):not(:disabled)');
document.addEventListener("contextmenu", (e) => {
  const t = e.target;
  if (t.closest(`.${re.MENU_CLASS}`))
    return;
  const n = t.closest(re.MENU_SELECTOR);
  n && (re.ensure(n).show(e), e.preventDefault());
});
document.addEventListener("click", re.clear.bind(re));
var yt, bt, wt, Eo, ua;
const Vr = class extends re {
  constructor() {
    super(...arguments);
    M(this, Eo);
    M(this, yt, !1);
    M(this, bt, 0);
    S(this, "hideLater", () => {
      m(this, wt).call(this), N(this, bt, window.setTimeout(this.hide.bind(this), 100));
    });
    M(this, wt, () => {
      clearTimeout(m(this, bt)), N(this, bt, 0);
    });
  }
  get isHover() {
    return this.options.trigger === "hover";
  }
  get elementShowClass() {
    return `with-${this.constructor.NAME}-show`;
  }
  show(n, o) {
    (o == null ? void 0 : o.clearOthers) !== !1 && Vr.clear({ event: o == null ? void 0 : o.event, exclude: [this.element] });
    const i = super.show(n);
    return i && (!m(this, yt) && this.isHover && K(this, Eo, ua).call(this), this.element.classList.add(this.elementShowClass)), i;
  }
  hide() {
    const n = super.hide();
    return n && this.element.classList.remove(this.elementShowClass), n;
  }
  toggle(n, o) {
    return this.isShown ? this.hide() : this.show(n, { event: n, ...o });
  }
  destroy() {
    m(this, yt) && (this.element.removeEventListener("mouseleave", this.hideLater), this.menu.removeEventListener("mouseenter", m(this, wt)), this.menu.removeEventListener("mouseleave", this.hideLater)), super.destroy();
  }
  _getArrowSize() {
    const { arrow: n } = this.options;
    return n ? typeof n == "number" ? n : 5 : 0;
  }
  _getPopperOptions() {
    var i;
    const n = super._getPopperOptions(), o = this._getArrowSize();
    return o && n.modifiers.push({ ...H_, options: {
      padding: o,
      element: ".arrow"
    } }, {
      ...j_,
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
let le = Vr;
yt = new WeakMap(), bt = new WeakMap(), wt = new WeakMap(), Eo = new WeakSet(), ua = function() {
  const { menu: n } = this;
  n.addEventListener("mouseenter", m(this, wt)), n.addEventListener("mouseleave", this.hideLater), this.element.addEventListener("mouseleave", this.hideLater), N(this, yt, !0);
}, S(le, "NAME", "dropdown"), S(le, "MENU_CLASS", "dropdown-menu"), S(le, "MENU_SELECTOR", '[data-toggle="dropdown"]:not(.disabled):not(:disabled)'), S(le, "DEFAULT", {
  ...re.DEFAULT,
  strategy: "absolute",
  trigger: "click"
});
document.addEventListener("click", function(e) {
  const n = e.target.closest(le.MENU_SELECTOR);
  if (n) {
    const o = le.ensure(n);
    o.options.trigger === "click" && o.toggle();
  } else
    le.clear({ event: e });
});
document.addEventListener("mouseover", function(e) {
  const t = e.target, n = typeof t.closest == "function" ? t.closest(le.MENU_SELECTOR) : null;
  if (!n)
    return;
  const o = le.ensure(n);
  o.isHover && o.show();
});
var $n, kt;
class Gf extends Zt {
  constructor(n) {
    var o;
    super(n);
    M(this, $n, void 0);
    M(this, kt, c_());
    this.state = { placement: ((o = n.dropdown) == null ? void 0 : o.placement) || "", show: !1 };
  }
  get ref() {
    return m(this, kt);
  }
  get triggerElement() {
    return m(this, kt).current;
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
    }), N(this, $n, le.ensure(this.triggerElement, {
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
    (n = m(this, $n)) == null || n.destroy();
  }
  beforeRender() {
    const { className: n, children: o, dropdown: i, ...r } = this.props;
    return {
      className: P("dropdown", n),
      children: typeof o == "function" ? o(this.state) : o,
      ...r,
      "data-toggle": "dropdown",
      "data-dropdown-placement": this.state.placement,
      ref: m(this, kt)
    };
  }
  render() {
    const { children: n, ...o } = this.beforeRender();
    return /* @__PURE__ */ Ll("div", {
      ...o
    }, n);
  }
}
$n = new WeakMap(), kt = new WeakMap();
class Yf extends Gf {
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
    return o.caret = i, /* @__PURE__ */ Ll(Rn, {
      ...o
    });
  }
}
function ha({
  key: e,
  type: t,
  btnType: n,
  ...o
}) {
  return /* @__PURE__ */ Bo(Yf, {
    type: n,
    ...o
  });
}
function Kf({
  key: e,
  type: t,
  btnType: n,
  ...o
}) {
  return /* @__PURE__ */ Bo(xl, {
    type: n,
    ...o
  });
}
class st extends Te {
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
    return /* @__PURE__ */ Bo(t, {
      ...r
    });
  }
}
S(st, "ItemComponents", {
  item: l_,
  dropdown: ha,
  "btn-group": Kf
}), S(st, "ROOT_TAG", "nav"), S(st, "NAME", "toolbar"), S(st, "defaultProps", {
  btnProps: {
    btnType: "ghost"
  }
});
function pa(e, t) {
  const n = e.pageTotal || Math.ceil(e.recTotal / e.recPerPage);
  return typeof t == "string" && (t === "first" ? t = 1 : t === "last" ? t = n : t === "prev" ? t = e.page - 1 : t === "next" ? t = e.page + 1 : t === "current" ? t = e.page : t = Number.parseInt(t, 10)), t = t !== void 0 ? Math.max(1, Math.min(t < 0 ? n + t : t, n)) : e.page, {
    ...e,
    pageTotal: n,
    page: t
  };
}
function Xf({
  key: e,
  type: t,
  btnType: n,
  page: o,
  format: i,
  pagerInfo: r,
  linkCreator: l,
  ...c
}) {
  const _ = pa(r, o);
  return c.text === void 0 && !c.icon && i && (c.text = typeof i == "function" ? i(_) : be(i, _)), c.url === void 0 && l && (c.url = typeof l == "function" ? l(_) : be(l, _)), c.disabled === void 0 && (c.disabled = o !== void 0 && _.page === r.page), /* @__PURE__ */ Uo(Rn, {
    type: n,
    ...c
  });
}
const Se = 24 * 60 * 60 * 1e3, se = (e) => e ? (e instanceof Date || (typeof e == "string" && (e = e.trim(), /^\d+$/.test(e) && (e = Number.parseInt(e, 10))), typeof e == "number" && e < 1e10 && (e *= 1e3), e = new Date(e)), e) : new Date(), Nn = (e, t = new Date()) => (e = se(e), t = se(t), e.getFullYear() === t.getFullYear() && e.getMonth() === t.getMonth() && e.getDate() === t.getDate()), Xs = (e, t = new Date()) => se(e).getFullYear() === se(t).getFullYear(), Jf = (e, t = new Date()) => (e = se(e), t = se(t), e.getFullYear() === t.getFullYear() && e.getMonth() === t.getMonth()), Hu = (e, t = new Date()) => {
  e = se(e), t = se(t);
  const n = 1e3 * 60 * 60 * 24, o = Math.floor(e.getTime() / n), i = Math.floor(t.getTime() / n);
  return Math.floor((o + 4) / 7) === Math.floor((i + 4) / 7);
}, Iu = (e, t) => Nn(se(t), e), Wu = (e, t) => Nn(se(t).getTime() - Se, e), ju = (e, t) => Nn(se(t).getTime() + Se, e), Uu = (e, t) => Nn(se(t).getTime() - 2 * Se, e), _r = (e, t = "yyyy-MM-dd hh:mm") => {
  e = se(e);
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
}, Bu = (e, t, n) => {
  const o = {
    full: "yyyy-M-d",
    month: "M-d",
    day: "d",
    str: "{0} ~ {1}",
    ...n
  }, i = _r(e, Xs(e) ? o.month : o.full);
  if (Nn(e, t))
    return i;
  const r = _r(t, Xs(e, t) ? Jf(e, t) ? o.day : o.month : o.full);
  return o.str.replace("{0}", i).replace("{1}", r);
}, zu = (e) => {
  const t = new Date().getTime();
  switch (e) {
    case "oneWeek":
      return t - Se * 7;
    case "oneMonth":
      return t - Se * 31;
    case "threeMonth":
      return t - Se * 31 * 3;
    case "halfYear":
      return t - Se * 183;
    case "oneYear":
      return t - Se * 365;
    case "twoYear":
      return t - 2 * (Se * 365);
    default:
      return 0;
  }
}, Js = (e, t, n = !0, o = Date.now()) => {
  switch (t) {
    case "year":
      return e *= 365, Js(e, "day", n, o);
    case "quarter":
      e *= 3;
    case "month":
      return e *= 30, Js(e, "day", n, o);
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
function Zf({
  key: e,
  type: t,
  page: n,
  text: o = "",
  pagerInfo: i,
  children: r,
  ...l
}) {
  const c = pa(i, n);
  return o = typeof o == "function" ? o(c) : be(o, c), /* @__PURE__ */ Uo(Ui, {
    ...l
  }, r, o);
}
function Qf({
  key: e,
  type: t,
  btnType: n,
  count: o,
  pagerInfo: i,
  linkCreator: r,
  ...l
}) {
  return /* @__PURE__ */ Uo(Rn, {
    type: n,
    ...l
  });
}
function eu({
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
      url: typeof n == "function" ? n(s) : be(n, s)
    };
  });
  const { text: l = "" } = r;
  return r.text = typeof l == "function" ? l(t) : be(l, t), i.menu = { ...i.menu, className: P((_ = i.menu) == null ? void 0 : _.className, "pager-size-menu") }, /* @__PURE__ */ Uo(ha, {
    type: "dropdown",
    dropdown: i,
    ...r
  });
}
class Kn extends st {
  get pagerInfo() {
    const { page: t = 1, recTotal: n = 0, recPerPage: o = 10 } = this.props;
    return { page: t, recTotal: n, recPerPage: o, pageTotal: o ? Math.ceil(n / o) : 0 };
  }
  isBtnItem(t) {
    return t === "link" || t === "nav" || t === "size-menu" || super.isBtnItem(t);
  }
  getItemRenderProps(t, n, o) {
    const i = super.getItemRenderProps(t, n, o), r = n.type || "item";
    return r === "info" ? Object.assign(i, { pagerInfo: this.pagerInfo }) : (r === "link" || r === "size-menu" || r === "nav") && Object.assign(i, { pagerInfo: this.pagerInfo, linkCreator: t.linkCreator }), i;
  }
}
S(Kn, "NAME", "pager"), S(Kn, "defaultProps", {
  gap: 1,
  btnProps: {
    btnType: "ghost",
    size: "sm"
  }
}), S(Kn, "ItemComponents", {
  ...st.ItemComponents,
  link: Xf,
  info: Zf,
  nav: Qf,
  "size-menu": eu
});
class Zs extends Le {
}
S(Zs, "NAME", "pager"), S(Zs, "Component", Kn);
class Qs extends Le {
}
S(Qs, "NAME", "toolbar"), S(Qs, "Component", st);
var jr, V, da, va, tn, ei, ga = {}, ma = [], tu = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function Je(e, t) {
  for (var n in t)
    e[n] = t[n];
  return e;
}
function ya(e) {
  var t = e.parentNode;
  t && t.removeChild(e);
}
function T(e, t, n) {
  var o, i, r, l = {};
  for (r in t)
    r == "key" ? o = t[r] : r == "ref" ? i = t[r] : l[r] = t[r];
  if (arguments.length > 2 && (l.children = arguments.length > 3 ? jr.call(arguments, 2) : n), typeof e == "function" && e.defaultProps != null)
    for (r in e.defaultProps)
      l[r] === void 0 && (l[r] = e.defaultProps[r]);
  return Xn(e, l, o, i, null);
}
function Xn(e, t, n, o, i) {
  var r = { type: e, props: t, key: n, ref: o, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: i == null ? ++da : i };
  return i == null && V.vnode != null && V.vnode(r), r;
}
function nu() {
  return { current: null };
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
function ba(e) {
  var t, n;
  if ((e = e.__) != null && e.__c != null) {
    for (e.__e = e.__c.base = null, t = 0; t < e.__k.length; t++)
      if ((n = e.__k[t]) != null && n.__e != null) {
        e.__e = e.__c.base = n.__e;
        break;
      }
    return ba(e);
  }
}
function ti(e) {
  (!e.__d && (e.__d = !0) && tn.push(e) && !yo.__r++ || ei !== V.debounceRendering) && ((ei = V.debounceRendering) || setTimeout)(yo);
}
function yo() {
  for (var e; yo.__r = tn.length; )
    e = tn.sort(function(t, n) {
      return t.__v.__b - n.__v.__b;
    }), tn = [], e.some(function(t) {
      var n, o, i, r, l, c;
      t.__d && (l = (r = (n = t).__v).__e, (c = n.__P) && (o = [], (i = Je({}, r)).__v = r.__v + 1, xa(c, r, i, n.__n, c.ownerSVGElement !== void 0, r.__h != null ? [l] : null, o, l == null ? gn(r) : l, r.__h), ru(o, r), r.__e != l && ba(r)));
    });
}
function wa(e, t, n, o, i, r, l, c, _, h) {
  var s, p, f, a, u, y, d, v = o && o.__k || ma, g = v.length;
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
      xa(e, a, f = f || ga, i, r, l, c, _, h), u = a.__e, (p = a.ref) && f.ref != p && (d || (d = []), f.ref && d.push(f.ref, null, a), d.push(p, a.__c || u, a)), u != null ? (y == null && (y = u), typeof a.type == "function" && a.__k === f.__k ? a.__d = _ = ka(a, _, e) : _ = $a(e, a, f, v, u, _), typeof n.type == "function" && (n.__d = _)) : _ && f.__e == _ && _.parentNode != e && (_ = gn(f));
    }
  for (n.__e = y, s = g; s--; )
    v[s] != null && Ea(v[s], v[s]);
  if (d)
    for (s = 0; s < d.length; s++)
      Ca(d[s], d[++s], d[++s]);
}
function ka(e, t, n) {
  for (var o, i = e.__k, r = 0; i && r < i.length; r++)
    (o = i[r]) && (o.__ = e, t = typeof o.type == "function" ? ka(o, t, n) : $a(n, o, o, i, o.__e, t));
  return t;
}
function $a(e, t, n, o, i, r) {
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
function ou(e, t, n, o, i) {
  var r;
  for (r in n)
    r === "children" || r === "key" || r in t || bo(e, r, null, n[r], o);
  for (r in t)
    i && typeof t[r] != "function" || r === "children" || r === "key" || r === "value" || r === "checked" || n[r] === t[r] || bo(e, r, t[r], n[r], o);
}
function ni(e, t, n) {
  t[0] === "-" ? e.setProperty(t, n) : e[t] = n == null ? "" : typeof n != "number" || tu.test(t) ? n : n + "px";
}
function bo(e, t, n, o, i) {
  var r;
  e:
    if (t === "style")
      if (typeof n == "string")
        e.style.cssText = n;
      else {
        if (typeof o == "string" && (e.style.cssText = o = ""), o)
          for (t in o)
            n && t in n || ni(e.style, t, "");
        if (n)
          for (t in n)
            o && n[t] === o[t] || ni(e.style, t, n[t]);
      }
    else if (t[0] === "o" && t[1] === "n")
      r = t !== (t = t.replace(/Capture$/, "")), t = t.toLowerCase() in e ? t.toLowerCase().slice(2) : t.slice(2), e.l || (e.l = {}), e.l[t + r] = n, n ? o || e.addEventListener(t, r ? ri : oi, r) : e.removeEventListener(t, r ? ri : oi, r);
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
function oi(e) {
  this.l[e.type + !1](V.event ? V.event(e) : e);
}
function ri(e) {
  this.l[e.type + !0](V.event ? V.event(e) : e);
}
function xa(e, t, n, o, i, r, l, c, _) {
  var h, s, p, f, a, u, y, d, v, g, k, w, E, $, x, b = t.type;
  if (t.constructor !== void 0)
    return null;
  n.__h != null && (_ = n.__h, c = t.__e = n.__e, t.__h = null, r = [c]), (h = V.__b) && h(t);
  try {
    e:
      if (typeof b == "function") {
        if (d = t.props, v = (h = b.contextType) && o[h.__c], g = h ? v ? v.props.value : h.__ : o, n.__c ? y = (s = t.__c = n.__c).__ = s.__E : ("prototype" in b && b.prototype.render ? t.__c = s = new b(d, g) : (t.__c = s = new nn(d, g), s.constructor = b, s.render = iu), v && v.sub(s), s.props = d, s.state || (s.state = {}), s.context = g, s.__n = o, p = s.__d = !0, s.__h = [], s._sb = []), s.__s == null && (s.__s = s.state), b.getDerivedStateFromProps != null && (s.__s == s.state && (s.__s = Je({}, s.__s)), Je(s.__s, b.getDerivedStateFromProps(d, s.__s))), f = s.props, a = s.state, p)
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
        s.state = s.__s, s.getChildContext != null && (o = Je(Je({}, o), s.getChildContext())), p || s.getSnapshotBeforeUpdate == null || (u = s.getSnapshotBeforeUpdate(f, a)), x = h != null && h.type === Ur && h.key == null ? h.props.children : h, wa(e, Array.isArray(x) ? x : [x], t, n, o, i, r, l, c, _), s.base = t.__e, t.__h = null, s.__h.length && l.push(s), y && (s.__E = s.__ = null), s.__e = !1;
      } else
        r == null && t.__v === n.__v ? (t.__k = n.__k, t.__e = n.__e) : t.__e = su(n.__e, t, n, o, i, r, l, _);
    (h = V.diffed) && h(t);
  } catch (C) {
    t.__v = null, (_ || r != null) && (t.__e = c, t.__h = !!_, r[r.indexOf(c)] = null), V.__e(C, t, n);
  }
}
function ru(e, t) {
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
function su(e, t, n, o, i, r, l, c) {
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
    if (r = r && jr.call(e.childNodes), h = (p = n.props || ga).dangerouslySetInnerHTML, s = f.dangerouslySetInnerHTML, !c) {
      if (r != null)
        for (p = {}, u = 0; u < e.attributes.length; u++)
          p[e.attributes[u].name] = e.attributes[u].value;
      (s || h) && (s && (h && s.__html == h.__html || s.__html === e.innerHTML) || (e.innerHTML = s && s.__html || ""));
    }
    if (ou(e, f, p, i, c), s)
      t.__k = [];
    else if (u = t.props.children, wa(e, Array.isArray(u) ? u : [u], t, n, o, i && a !== "foreignObject", r, l, r ? r[0] : n.__k && gn(n, 0), c), r != null)
      for (u = r.length; u--; )
        r[u] != null && ya(r[u]);
    c || ("value" in f && (u = f.value) !== void 0 && (u !== e.value || a === "progress" && !u || a === "option" && u !== p.value) && bo(e, "value", u, p.value, !1), "checked" in f && (u = f.checked) !== void 0 && u !== e.checked && bo(e, "checked", u, p.checked, !1));
  }
  return e;
}
function Ca(e, t, n) {
  try {
    typeof e == "function" ? e(t) : e.current = t;
  } catch (o) {
    V.__e(o, n);
  }
}
function Ea(e, t, n) {
  var o, i;
  if (V.unmount && V.unmount(e), (o = e.ref) && (o.current && o.current !== e.__e || Ca(o, null, t)), (o = e.__c) != null) {
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
      o[i] && Ea(o[i], t, n || typeof e.type != "function");
  n || e.__e == null || ya(e.__e), e.__ = e.__e = e.__d = void 0;
}
function iu(e, t, n) {
  return this.constructor(e, n);
}
jr = ma.slice, V = { __e: function(e, t, n, o) {
  for (var i, r, l; t = t.__; )
    if ((i = t.__c) && !i.__)
      try {
        if ((r = i.constructor) && r.getDerivedStateFromError != null && (i.setState(r.getDerivedStateFromError(e)), l = i.__d), i.componentDidCatch != null && (i.componentDidCatch(e, o || {}), l = i.__d), l)
          return i.__E = i;
      } catch (c) {
        e = c;
      }
  throw e;
} }, da = 0, va = function(e) {
  return e != null && e.constructor === void 0;
}, nn.prototype.setState = function(e, t) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = Je({}, this.state), typeof e == "function" && (e = e(Je({}, n), this.props)), e && Je(n, e), e != null && this.__v && (t && this._sb.push(t), ti(this));
}, nn.prototype.forceUpdate = function(e) {
  this.__v && (this.__e = !0, e && this.__h.push(e), ti(this));
}, nn.prototype.render = Ur, tn = [], yo.__r = 0;
let lu = (e = 21) => crypto.getRandomValues(new Uint8Array(e)).reduce((t, n) => (n &= 63, n < 36 ? t += n.toString(36) : n < 62 ? t += (n - 26).toString(36).toUpperCase() : n > 62 ? t += "-" : t += "_", t), "");
var Br, q, Sa, on, si, Ma = {}, Aa = [], au = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function Ze(e, t) {
  for (var n in t)
    e[n] = t[n];
  return e;
}
function Ra(e) {
  var t = e.parentNode;
  t && t.removeChild(e);
}
function ii(e, t, n) {
  var o, i, r, l = {};
  for (r in t)
    r == "key" ? o = t[r] : r == "ref" ? i = t[r] : l[r] = t[r];
  if (arguments.length > 2 && (l.children = arguments.length > 3 ? Br.call(arguments, 2) : n), typeof e == "function" && e.defaultProps != null)
    for (r in e.defaultProps)
      l[r] === void 0 && (l[r] = e.defaultProps[r]);
  return Jn(e, l, o, i, null);
}
function Jn(e, t, n, o, i) {
  var r = { type: e, props: t, key: n, ref: o, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: i == null ? ++Sa : i };
  return i == null && q.vnode != null && q.vnode(r), r;
}
function zr(e) {
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
function Na(e) {
  var t, n;
  if ((e = e.__) != null && e.__c != null) {
    for (e.__e = e.__c.base = null, t = 0; t < e.__k.length; t++)
      if ((n = e.__k[t]) != null && n.__e != null) {
        e.__e = e.__c.base = n.__e;
        break;
      }
    return Na(e);
  }
}
function li(e) {
  (!e.__d && (e.__d = !0) && on.push(e) && !wo.__r++ || si !== q.debounceRendering) && ((si = q.debounceRendering) || setTimeout)(wo);
}
function wo() {
  for (var e; wo.__r = on.length; )
    e = on.sort(function(t, n) {
      return t.__v.__b - n.__v.__b;
    }), on = [], e.some(function(t) {
      var n, o, i, r, l, c;
      t.__d && (l = (r = (n = t).__v).__e, (c = n.__P) && (o = [], (i = Ze({}, r)).__v = r.__v + 1, La(c, r, i, n.__n, c.ownerSVGElement !== void 0, r.__h != null ? [l] : null, o, l == null ? mn(r) : l, r.__h), _u(o, r), r.__e != l && Na(r)));
    });
}
function Ta(e, t, n, o, i, r, l, c, _, h) {
  var s, p, f, a, u, y, d, v = o && o.__k || Aa, g = v.length;
  for (n.__k = [], s = 0; s < t.length; s++)
    if ((a = n.__k[s] = (a = t[s]) == null || typeof a == "boolean" ? null : typeof a == "string" || typeof a == "number" || typeof a == "bigint" ? Jn(null, a, null, null, a) : Array.isArray(a) ? Jn(zr, { children: a }, null, null, null) : a.__b > 0 ? Jn(a.type, a.props, a.key, a.ref ? a.ref : null, a.__v) : a) != null) {
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
      La(e, a, f = f || Ma, i, r, l, c, _, h), u = a.__e, (p = a.ref) && f.ref != p && (d || (d = []), f.ref && d.push(f.ref, null, a), d.push(p, a.__c || u, a)), u != null ? (y == null && (y = u), typeof a.type == "function" && a.__k === f.__k ? a.__d = _ = Pa(a, _, e) : _ = Oa(e, a, f, v, u, _), typeof n.type == "function" && (n.__d = _)) : _ && f.__e == _ && _.parentNode != e && (_ = mn(f));
    }
  for (n.__e = y, s = g; s--; )
    v[s] != null && Ha(v[s], v[s]);
  if (d)
    for (s = 0; s < d.length; s++)
      Da(d[s], d[++s], d[++s]);
}
function Pa(e, t, n) {
  for (var o, i = e.__k, r = 0; i && r < i.length; r++)
    (o = i[r]) && (o.__ = e, t = typeof o.type == "function" ? Pa(o, t, n) : Oa(n, o, o, i, o.__e, t));
  return t;
}
function Oa(e, t, n, o, i, r) {
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
function cu(e, t, n, o, i) {
  var r;
  for (r in n)
    r === "children" || r === "key" || r in t || ko(e, r, null, n[r], o);
  for (r in t)
    i && typeof t[r] != "function" || r === "children" || r === "key" || r === "value" || r === "checked" || n[r] === t[r] || ko(e, r, t[r], n[r], o);
}
function ai(e, t, n) {
  t[0] === "-" ? e.setProperty(t, n) : e[t] = n == null ? "" : typeof n != "number" || au.test(t) ? n : n + "px";
}
function ko(e, t, n, o, i) {
  var r;
  e:
    if (t === "style")
      if (typeof n == "string")
        e.style.cssText = n;
      else {
        if (typeof o == "string" && (e.style.cssText = o = ""), o)
          for (t in o)
            n && t in n || ai(e.style, t, "");
        if (n)
          for (t in n)
            o && n[t] === o[t] || ai(e.style, t, n[t]);
      }
    else if (t[0] === "o" && t[1] === "n")
      r = t !== (t = t.replace(/Capture$/, "")), t = t.toLowerCase() in e ? t.toLowerCase().slice(2) : t.slice(2), e.l || (e.l = {}), e.l[t + r] = n, n ? o || e.addEventListener(t, r ? _i : ci, r) : e.removeEventListener(t, r ? _i : ci, r);
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
function ci(e) {
  this.l[e.type + !1](q.event ? q.event(e) : e);
}
function _i(e) {
  this.l[e.type + !0](q.event ? q.event(e) : e);
}
function La(e, t, n, o, i, r, l, c, _) {
  var h, s, p, f, a, u, y, d, v, g, k, w, E, $, x, b = t.type;
  if (t.constructor !== void 0)
    return null;
  n.__h != null && (_ = n.__h, c = t.__e = n.__e, t.__h = null, r = [c]), (h = q.__b) && h(t);
  try {
    e:
      if (typeof b == "function") {
        if (d = t.props, v = (h = b.contextType) && o[h.__c], g = h ? v ? v.props.value : h.__ : o, n.__c ? y = (s = t.__c = n.__c).__ = s.__E : ("prototype" in b && b.prototype.render ? t.__c = s = new b(d, g) : (t.__c = s = new rn(d, g), s.constructor = b, s.render = uu), v && v.sub(s), s.props = d, s.state || (s.state = {}), s.context = g, s.__n = o, p = s.__d = !0, s.__h = [], s._sb = []), s.__s == null && (s.__s = s.state), b.getDerivedStateFromProps != null && (s.__s == s.state && (s.__s = Ze({}, s.__s)), Ze(s.__s, b.getDerivedStateFromProps(d, s.__s))), f = s.props, a = s.state, p)
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
        s.state = s.__s, s.getChildContext != null && (o = Ze(Ze({}, o), s.getChildContext())), p || s.getSnapshotBeforeUpdate == null || (u = s.getSnapshotBeforeUpdate(f, a)), x = h != null && h.type === zr && h.key == null ? h.props.children : h, Ta(e, Array.isArray(x) ? x : [x], t, n, o, i, r, l, c, _), s.base = t.__e, t.__h = null, s.__h.length && l.push(s), y && (s.__E = s.__ = null), s.__e = !1;
      } else
        r == null && t.__v === n.__v ? (t.__k = n.__k, t.__e = n.__e) : t.__e = fu(n.__e, t, n, o, i, r, l, _);
    (h = q.diffed) && h(t);
  } catch (C) {
    t.__v = null, (_ || r != null) && (t.__e = c, t.__h = !!_, r[r.indexOf(c)] = null), q.__e(C, t, n);
  }
}
function _u(e, t) {
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
function fu(e, t, n, o, i, r, l, c) {
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
    if (r = r && Br.call(e.childNodes), h = (p = n.props || Ma).dangerouslySetInnerHTML, s = f.dangerouslySetInnerHTML, !c) {
      if (r != null)
        for (p = {}, u = 0; u < e.attributes.length; u++)
          p[e.attributes[u].name] = e.attributes[u].value;
      (s || h) && (s && (h && s.__html == h.__html || s.__html === e.innerHTML) || (e.innerHTML = s && s.__html || ""));
    }
    if (cu(e, f, p, i, c), s)
      t.__k = [];
    else if (u = t.props.children, Ta(e, Array.isArray(u) ? u : [u], t, n, o, i && a !== "foreignObject", r, l, r ? r[0] : n.__k && mn(n, 0), c), r != null)
      for (u = r.length; u--; )
        r[u] != null && Ra(r[u]);
    c || ("value" in f && (u = f.value) !== void 0 && (u !== e.value || a === "progress" && !u || a === "option" && u !== p.value) && ko(e, "value", u, p.value, !1), "checked" in f && (u = f.checked) !== void 0 && u !== e.checked && ko(e, "checked", u, p.checked, !1));
  }
  return e;
}
function Da(e, t, n) {
  try {
    typeof e == "function" ? e(t) : e.current = t;
  } catch (o) {
    q.__e(o, n);
  }
}
function Ha(e, t, n) {
  var o, i;
  if (q.unmount && q.unmount(e), (o = e.ref) && (o.current && o.current !== e.__e || Da(o, null, t)), (o = e.__c) != null) {
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
      o[i] && Ha(o[i], t, n || typeof e.type != "function");
  n || e.__e == null || Ra(e.__e), e.__ = e.__e = e.__d = void 0;
}
function uu(e, t, n) {
  return this.constructor(e, n);
}
Br = Aa.slice, q = { __e: function(e, t, n, o) {
  for (var i, r, l; t = t.__; )
    if ((i = t.__c) && !i.__)
      try {
        if ((r = i.constructor) && r.getDerivedStateFromError != null && (i.setState(r.getDerivedStateFromError(e)), l = i.__d), i.componentDidCatch != null && (i.componentDidCatch(e, o || {}), l = i.__d), l)
          return i.__E = i;
      } catch (c) {
        e = c;
      }
  throw e;
} }, Sa = 0, rn.prototype.setState = function(e, t) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = Ze({}, this.state), typeof e == "function" && (e = e(Ze({}, n), this.props)), e && Ze(n, e), e != null && this.__v && (t && this._sb.push(t), li(this));
}, rn.prototype.forceUpdate = function(e) {
  this.__v && (this.__e = !0, e && this.__h.push(e), li(this));
}, rn.prototype.render = zr, on = [], wo.__r = 0;
var lt, at;
class fi extends rn {
  constructor(n) {
    var o;
    super(n);
    M(this, lt, 0);
    M(this, at, null);
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
      o && (m(this, lt) && cancelAnimationFrame(m(this, lt)), N(this, lt, requestAnimationFrame(() => {
        const i = this.props.type === "horz" ? n.clientX - o.x : n.clientY - o.y;
        this.scroll(o.offset + i * this.props.scrollSize / this.props.clientSize), N(this, lt, 0);
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
    n && (N(this, at, typeof n == "string" ? document : n.current), m(this, at).addEventListener("wheel", this._handleWheel, { passive: !1 }));
  }
  componentWillUnmount() {
    document.removeEventListener("mousemove", this._handleMouseMove), document.removeEventListener("mouseup", this._handleMouseUp), m(this, at) && m(this, at).removeEventListener("wheel", this._handleWheel);
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
    }, y = {};
    return o === "horz" ? (u.height = i, u.width = n, y.width = this.barSize, y.left = Math.round(Math.min(p, f) * (n - y.width) / p)) : (u.width = i, u.height = n, y.height = this.barSize, y.top = Math.round(Math.min(p, f) * (n - y.height) / p)), /* @__PURE__ */ ii("div", {
      className: P("scrollbar", r, {
        "is-vert": o === "vert",
        "is-horz": o === "horz",
        "is-dragging": a
      }),
      style: u,
      onMouseDown: this._handleClick
    }, /* @__PURE__ */ ii("div", {
      className: "scrollbar-bar",
      style: y,
      onMouseDown: this._handleMouseDown
    }));
  }
}
lt = new WeakMap(), at = new WeakMap();
function ui(e, t, n) {
  return e && (t && (e = Math.max(t, e)), n && (e = Math.min(n, e))), e;
}
function Ia({ col: e, className: t, height: n, row: o, onRenderCell: i, style: r, outerStyle: l, children: c, outerClass: _, ...h }) {
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
  }], y = ["dtable-cell-content", t], d = [(C = c != null ? c : (b = o.data) == null ? void 0 : b[e.name]) != null ? C : ""], v = i ? i(d, { row: o, col: e }, T) : d, g = [], k = [], w = {}, E = {};
  let $ = "div";
  v == null || v.forEach((A) => {
    var D;
    if (typeof A == "object" && A && !va(A) && ("html" in A || "className" in A || "style" in A || "attrs" in A || "children" in A || "tagName" in A)) {
      const X = A.outer ? g : k;
      A.html ? X.push(/* @__PURE__ */ T("div", {
        className: P("dtable-cell-html", A.className),
        style: A.style,
        dangerouslySetInnerHTML: { __html: A.html },
        ...(D = A.attrs) != null ? D : {}
      })) : (A.style && Object.assign(A.outer ? s : a, A.style), A.className && (A.outer ? u : y).push(A.className), A.children && X.push(A.children), A.attrs && Object.assign(A.outer ? w : E, A.attrs)), A.tagName && !A.outer && ($ = A.tagName);
    } else
      k.push(A);
  });
  const x = $;
  return /* @__PURE__ */ T("div", {
    className: P(u),
    style: s,
    "data-col": e.name,
    ...h,
    ...w
  }, k.length > 0 && /* @__PURE__ */ T(x, {
    className: P(y),
    style: a,
    ...E
  }, k), g);
}
function Zo({ row: e, className: t, top: n = 0, left: o = 0, width: i, height: r, cols: l, CellComponent: c = Ia, onRenderCell: _ }) {
  return /* @__PURE__ */ T("div", {
    className: P("dtable-cells", t),
    style: { top: n, left: o, width: i, height: r }
  }, l.map((h) => h.visible ? /* @__PURE__ */ T(c, {
    key: h.name,
    col: h,
    row: e,
    onRenderCell: _
  }) : null));
}
function Wa({
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
  CellComponent: f = Ia,
  onRenderCell: a,
  style: u,
  ...y
}) {
  let d = null;
  i != null && i.length && (d = /* @__PURE__ */ T(Zo, {
    className: "dtable-fixed-left",
    cols: i,
    width: c,
    row: e,
    CellComponent: f,
    onRenderCell: a
  }));
  let v = null;
  l != null && l.length && (v = /* @__PURE__ */ T(Zo, {
    className: "dtable-flexable",
    cols: l,
    left: c - p,
    width: Math.max(_, h),
    row: e,
    CellComponent: f,
    onRenderCell: a
  }));
  let g = null;
  r != null && r.length && (g = /* @__PURE__ */ T(Zo, {
    className: "dtable-fixed-right",
    cols: r,
    left: c + _,
    width: s,
    row: e,
    CellComponent: f,
    onRenderCell: a
  }));
  const k = { top: n, height: o, lineHeight: `${o - 2}px`, ...u };
  return /* @__PURE__ */ T("div", {
    className: P("dtable-row", t),
    style: k,
    "data-id": e.id,
    ...y
  }, d, v, g);
}
function hu({ height: e, onRenderRow: t, ...n }) {
  const o = {
    height: e,
    ...n,
    row: { id: "HEADER", index: -1, top: 0 },
    className: "dtable-in-header",
    top: 0
  };
  if (t) {
    const i = t({ props: o }, T);
    i && Object.assign(o, i);
  }
  return /* @__PURE__ */ T("div", {
    className: "dtable-header",
    style: { height: e }
  }, /* @__PURE__ */ T(Wa, {
    ...o
  }));
}
function pu({
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
  return t = { ...t, top: n, height: i }, /* @__PURE__ */ T("div", {
    className: P("dtable-rows", e),
    style: t
  }, o.map((h) => {
    const s = {
      className: `dtable-row-${h.index % 2 ? "odd" : "even"}`,
      row: h,
      top: h.top - l,
      height: r,
      ..._
    }, p = c == null ? void 0 : c({ props: s, row: h }, T);
    return p && Object.assign(s, p), /* @__PURE__ */ T(Wa, {
      ...s
    });
  }));
}
const $o = /* @__PURE__ */ new Map(), xo = [];
function ja(e, t) {
  const { name: n } = e;
  if (!(t != null && t.override) && $o.has(n))
    throw new Error(`DTable: Plugin with name ${n} already exists`);
  $o.set(n, e), (t == null ? void 0 : t.buildIn) && !xo.includes(n) && xo.push(n);
}
function Tt(e, t) {
  ja(e, t);
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
function Ua(e) {
  return $o.delete(e);
}
function du(e) {
  if (typeof e == "string") {
    const t = $o.get(e);
    return t || console.warn(`DTable: Cannot found plugin "${e}"`), t;
  }
  if (typeof e == "function" && "plugin" in e)
    return e.plugin;
  if (typeof e == "object")
    return e;
  console.warn("DTable: Invalid plugin", e);
}
function Ba(e, t, n) {
  return t.forEach((o) => {
    var r;
    if (!o)
      return;
    const i = du(o);
    !i || n.has(i.name) || ((r = i.plugins) != null && r.length && Ba(e, i.plugins, n), e.push(i), n.add(i.name));
  }), e;
}
function vu(e = [], t = !0) {
  return t && xo.length && e.unshift(...xo), e != null && e.length ? Ba([], e, /* @__PURE__ */ new Set()) : [];
}
function hi() {
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
var ct, $t, Be, ge, ze, Q, ue, me, xt, xn, Cn, Ne, Ct, Et, So, za, Mo, Fa, Ao, Va, Ro, qa, En, ur, No, To, Sn, Mn, Po, Oo, Lo, Ga, Do, Ya, Ho, Ka;
class fr extends nn {
  constructor(n) {
    var o;
    super(n);
    M(this, So);
    M(this, Mo);
    M(this, Ao);
    M(this, Ro);
    M(this, En);
    M(this, Lo);
    M(this, Do);
    M(this, Ho);
    S(this, "ref", nu());
    M(this, ct, 0);
    M(this, $t, void 0);
    M(this, Be, !1);
    M(this, ge, void 0);
    M(this, ze, void 0);
    M(this, Q, []);
    M(this, ue, void 0);
    M(this, me, /* @__PURE__ */ new Map());
    M(this, xt, {});
    M(this, xn, void 0);
    M(this, Cn, []);
    S(this, "updateLayout", () => {
      m(this, ct) && cancelAnimationFrame(m(this, ct)), N(this, ct, requestAnimationFrame(() => {
        N(this, ue, void 0), this.forceUpdate(), N(this, ct, 0);
      }));
    });
    M(this, Ne, (n, o) => {
      o = o || n.type;
      const i = m(this, me).get(o);
      if (!!(i != null && i.length)) {
        for (const r of i)
          if (r.call(this, n) === !1) {
            n.stopPropagation(), n.preventDefault();
            break;
          }
      }
    });
    M(this, Ct, (n) => {
      m(this, Ne).call(this, n, `window_${n.type}`);
    });
    M(this, Et, (n) => {
      m(this, Ne).call(this, n, `document_${n.type}`);
    });
    M(this, No, (n, o) => {
      if (this.options.onRenderRow) {
        const i = this.options.onRenderRow.call(this, n, o);
        i && Object.assign(n.props, i);
      }
      return m(this, Q).forEach((i) => {
        if (i.onRenderRow) {
          const r = i.onRenderRow.call(this, n, o);
          r && Object.assign(n.props, r);
        }
      }), n.props;
    });
    M(this, To, (n, o) => (this.options.onRenderHeaderRow && (n.props = this.options.onRenderHeaderRow.call(this, n, o)), m(this, Q).forEach((i) => {
      i.onRenderHeaderRow && (n.props = i.onRenderHeaderRow.call(this, n, o));
    }), n.props));
    M(this, Sn, (n, o, i) => {
      const { row: r, col: l } = o;
      n[0] = this.getCellValue(r, l);
      const c = r.id === "HEADER" ? "onRenderHeaderCell" : "onRenderCell";
      return l.setting[c] && (n = l.setting[c].call(this, n, o, i)), this.options[c] && (n = this.options[c].call(this, n, o, i)), m(this, Q).forEach((_) => {
        _[c] && (n = _[c].call(this, n, o, i));
      }), n;
    });
    M(this, Mn, (n, o) => {
      o === "horz" ? this.scroll({ scrollLeft: n }) : this.scroll({ scrollTop: n });
    });
    M(this, Po, (n) => {
      var c, _, h, s, p;
      const o = this.getPointerInfo(n);
      if (!o)
        return;
      const { rowID: i, colName: r, cellElement: l } = o;
      if (i === "HEADER")
        l && ((c = this.options.onHeaderCellClick) == null || c.call(this, n, { colName: r, element: l }), m(this, Q).forEach((f) => {
          var a;
          (a = f.onHeaderCellClick) == null || a.call(this, n, { colName: r, element: l });
        }));
      else {
        const { rowElement: f } = o, a = this.layout.visibleRows.find((u) => u.id === i);
        if (l) {
          if (((_ = this.options.onCellClick) == null ? void 0 : _.call(this, n, { colName: r, rowID: i, rowInfo: a, element: l, rowElement: f })) === !0)
            return;
          for (const u of m(this, Q))
            if (((h = u.onCellClick) == null ? void 0 : h.call(this, n, { colName: r, rowID: i, rowInfo: a, element: l, rowElement: f })) === !0)
              return;
        }
        if (((s = this.options.onRowClick) == null ? void 0 : s.call(this, n, { rowID: i, rowInfo: a, element: f })) === !0)
          return;
        for (const u of m(this, Q))
          if (((p = u.onRowClick) == null ? void 0 : p.call(this, n, { rowID: i, rowInfo: a, element: f })) === !0)
            return;
      }
    });
    M(this, Oo, (n) => {
      const o = n.key.toLowerCase();
      if (["pageup", "pagedown", "home", "end"].includes(o))
        return !this.scroll({ to: o.replace("page", "") });
    });
    N(this, $t, (o = n.id) != null ? o : `dtable-${lu(10)}`), this.state = { scrollTop: 0, scrollLeft: 0, renderCount: 0 }, N(this, ze, Object.freeze(vu(n.plugins))), m(this, ze).forEach((i) => {
      var _;
      const { methods: r, data: l, state: c } = i;
      r && Object.entries(r).forEach(([h, s]) => {
        typeof s == "function" && Object.assign(this, { [h]: s.bind(this) });
      }), l && Object.assign(m(this, xt), l.call(this)), c && Object.assign(this.state, c.call(this)), (_ = i.onCreate) == null || _.call(this, i);
    });
  }
  get options() {
    var n;
    return ((n = m(this, ue)) == null ? void 0 : n.options) || m(this, ge) || hi();
  }
  get plugins() {
    return m(this, Q);
  }
  get layout() {
    return m(this, ue);
  }
  get id() {
    return m(this, $t);
  }
  get data() {
    return m(this, xt);
  }
  get parent() {
    var n, o;
    return (o = this.props.parent) != null ? o : (n = this.ref.current) == null ? void 0 : n.parentElement;
  }
  componentWillReceiveProps() {
    N(this, ge, void 0);
  }
  componentDidMount() {
    if (m(this, Be) ? this.forceUpdate() : K(this, En, ur).call(this), m(this, Q).forEach((n) => {
      let { events: o } = n;
      !o || (typeof o == "function" && (o = o.call(this)), Object.entries(o).forEach(([i, r]) => {
        r && this.on(i, r);
      }));
    }), this.on("click", m(this, Po)), this.on("keydown", m(this, Oo)), this.options.responsive) {
      if (typeof ResizeObserver < "u") {
        const { parent: n } = this;
        if (n) {
          const o = new ResizeObserver(this.updateLayout);
          o.observe(n), N(this, xn, o);
        }
      }
      this.on("window_resize", this.updateLayout);
    }
    m(this, Q).forEach((n) => {
      var o;
      (o = n.onMounted) == null || o.call(this);
    });
  }
  componentDidUpdate() {
    m(this, Be) ? K(this, En, ur).call(this) : m(this, Q).forEach((n) => {
      var o;
      (o = n.onUpdated) == null || o.call(this);
    });
  }
  componentWillUnmount() {
    var o;
    (o = m(this, xn)) == null || o.disconnect();
    const { current: n } = this.ref;
    if (n)
      for (const i of m(this, me).keys())
        i.startsWith("window_") ? window.removeEventListener(i.replace("window_", ""), m(this, Ct)) : i.startsWith("document_") ? document.removeEventListener(i.replace("document_", ""), m(this, Et)) : n.removeEventListener(i, m(this, Ne));
    m(this, Q).forEach((i) => {
      var r;
      (r = i.onUnmounted) == null || r.call(this);
    }), m(this, ze).forEach((i) => {
      var r;
      (r = i.onDestory) == null || r.call(this);
    }), N(this, xt, {}), m(this, me).clear();
  }
  on(n, o, i) {
    var l;
    i && (n = `${i}_${n}`);
    const r = m(this, me).get(n);
    r ? r.push(o) : (m(this, me).set(n, [o]), n.startsWith("window_") ? window.addEventListener(n.replace("window_", ""), m(this, Ct)) : n.startsWith("document_") ? document.addEventListener(n.replace("document_", ""), m(this, Et)) : (l = this.ref.current) == null || l.addEventListener(n, m(this, Ne)));
  }
  off(n, o, i) {
    var c;
    i && (n = `${i}_${n}`);
    const r = m(this, me).get(n);
    if (!r)
      return;
    const l = r.indexOf(o);
    l >= 0 && r.splice(l, 1), r.length || (m(this, me).delete(n), n.startsWith("window_") ? window.removeEventListener(n.replace("window_", ""), m(this, Ct)) : n.startsWith("document_") ? document.removeEventListener(n.replace("document_", ""), m(this, Et)) : (c = this.ref.current) == null || c.removeEventListener(n, m(this, Ne)));
  }
  emitCustomEvent(n, o) {
    m(this, Ne).call(this, o instanceof Event ? o : new CustomEvent(n, { detail: o }), n);
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
      const { offsetLeft: y, offsetTop: d } = n;
      typeof y == "number" && (f = i + y), typeof d == "number" && (f = r + d);
    }
    const u = {};
    return typeof f == "number" && (f = Math.max(0, Math.min(f, s - h)), f !== i && (u.scrollLeft = f)), typeof a == "number" && (a = Math.max(0, Math.min(a, l - c)), a !== r && (u.scrollTop = a)), Object.keys(u).length ? (this.setState(u, () => {
      var y;
      (y = this.options.onScroll) == null || y.call(this, u), o == null || o.call(this, !0);
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
    if (!m(this, ge))
      return;
    typeof n == "function" && (o = n, n = {});
    const { dirtyType: i, state: r } = n;
    if (i === "layout")
      N(this, ue, void 0);
    else if (i === "options") {
      if (N(this, ge, void 0), !m(this, ue))
        return;
      N(this, ue, void 0);
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
    return (r = An(m(this, Cn), n, o, i, this.options.lang)) != null ? r : `{i18n:${n}}`;
  }
  render() {
    var a;
    const n = K(this, Ho, Ka).call(this), { className: o, rowHover: i, colHover: r, cellHover: l, bordered: c, striped: _, scrollbarHover: h } = this.options, s = { width: n == null ? void 0 : n.width, height: n == null ? void 0 : n.height }, p = ["dtable", o, {
      "dtable-hover-row": i,
      "dtable-hover-col": r,
      "dtable-hover-cell": l,
      "dtable-bordered": c,
      "dtable-striped": _,
      "dtable-scrolled-down": ((a = n == null ? void 0 : n.scrollTop) != null ? a : 0) > 0,
      "scrollbar-hover": h
    }], f = [];
    return n && m(this, Q).forEach((u) => {
      var d;
      const y = (d = u.onRender) == null ? void 0 : d.call(this, n);
      !y || (y.style && Object.assign(s, y.style), y.className && p.push(y.className), y.children && f.push(y.children));
    }), /* @__PURE__ */ T("div", {
      id: m(this, $t),
      className: P(p),
      style: s,
      ref: this.ref,
      tabIndex: -1
    }, n && K(this, So, za).call(this, n), n && K(this, Mo, Fa).call(this, n), n && K(this, Ao, Va).call(this, n), n && K(this, Ro, qa).call(this, n));
  }
}
ct = new WeakMap(), $t = new WeakMap(), Be = new WeakMap(), ge = new WeakMap(), ze = new WeakMap(), Q = new WeakMap(), ue = new WeakMap(), me = new WeakMap(), xt = new WeakMap(), xn = new WeakMap(), Cn = new WeakMap(), Ne = new WeakMap(), Ct = new WeakMap(), Et = new WeakMap(), So = new WeakSet(), za = function(n) {
  const { header: o, colsInfo: i, headerHeight: r, scrollLeft: l } = n;
  if (!o)
    return null;
  if (o === !0)
    return /* @__PURE__ */ T(hu, {
      scrollLeft: l,
      height: r,
      onRenderCell: m(this, Sn),
      onRenderRow: m(this, To),
      ...i
    });
  const c = Array.isArray(o) ? o : [o];
  return /* @__PURE__ */ T(tr, {
    className: "dtable-header",
    style: { height: r },
    renders: c,
    generateArgs: [n],
    generatorThis: this
  });
}, Mo = new WeakSet(), Fa = function(n) {
  const { headerHeight: o, rowsHeight: i, visibleRows: r, rowHeight: l, colsInfo: c, scrollLeft: _, scrollTop: h } = n;
  return /* @__PURE__ */ T(pu, {
    top: o,
    height: i,
    rows: r,
    rowHeight: l,
    scrollLeft: _,
    scrollTop: h,
    onRenderCell: m(this, Sn),
    onRenderRow: m(this, No),
    ...c
  });
}, Ao = new WeakSet(), Va = function(n) {
  const { footer: o } = n;
  if (!o)
    return null;
  const i = typeof o == "function" ? o.call(this, n) : Array.isArray(o) ? o : [o];
  return /* @__PURE__ */ T(tr, {
    className: "dtable-footer",
    style: { height: n.footerHeight, top: n.rowsHeight + n.headerHeight },
    renders: i,
    generateArgs: [n],
    generatorThis: this,
    generators: n.footerGenerators
  });
}, Ro = new WeakSet(), qa = function(n) {
  const o = [], { scrollLeft: i, colsInfo: r, scrollTop: l, rowsHeight: c, rowsHeightTotal: _, footerHeight: h } = n, { scrollColsWidth: s, scrollWidth: p } = r, { scrollbarSize: f = 12, horzScrollbarPos: a } = this.options;
  return s > p && o.push(
    /* @__PURE__ */ T(fi, {
      key: "horz",
      type: "horz",
      scrollPos: i,
      scrollSize: s,
      clientSize: p,
      onScroll: m(this, Mn),
      left: r.fixedLeftWidth,
      bottom: (a === "inside" ? 0 : -f) + h,
      size: f,
      wheelContainer: this.ref
    })
  ), _ > c && o.push(
    /* @__PURE__ */ T(fi, {
      key: "vert",
      type: "vert",
      scrollPos: l,
      scrollSize: _,
      clientSize: c,
      onScroll: m(this, Mn),
      right: 0,
      size: f,
      top: n.headerHeight,
      wheelContainer: this.ref
    })
  ), o.length ? o : null;
}, En = new WeakSet(), ur = function() {
  var n;
  N(this, Be, !1), (n = this.options.afterRender) == null || n.call(this), m(this, Q).forEach((o) => {
    var i;
    return (i = o.afterRender) == null ? void 0 : i.call(this);
  });
}, No = new WeakMap(), To = new WeakMap(), Sn = new WeakMap(), Mn = new WeakMap(), Po = new WeakMap(), Oo = new WeakMap(), Lo = new WeakSet(), Ga = function() {
  if (m(this, ge))
    return !1;
  const o = { ...hi(), ...m(this, ze).reduce((i, r) => {
    const { defaultOptions: l } = r;
    return l && Object.assign(i, l), i;
  }, {}), ...this.props };
  return N(this, ge, o), N(this, Q, m(this, ze).reduce((i, r) => {
    const { when: l, options: c } = r;
    return (!l || l(o)) && (i.push(r), c && Object.assign(o, typeof c == "function" ? c.call(this, o) : c)), i;
  }, [])), N(this, Cn, [this.options.i18n, ...this.plugins.map((i) => i.i18n)].filter(Boolean)), !0;
}, Do = new WeakSet(), Ya = function() {
  var nt, Ce;
  const { plugins: n } = this;
  let o = m(this, ge);
  const i = {
    flex: /* @__PURE__ */ T("div", {
      style: "flex:auto"
    }),
    divider: /* @__PURE__ */ T("div", {
      style: "width:1px;margin:var(--space);background:var(--color-border);height:50%"
    })
  };
  n.forEach((R) => {
    var Y;
    const L = (Y = R.beforeLayout) == null ? void 0 : Y.call(this, o);
    L && (o = { ...o, ...L }), Object.assign(i, R.footer);
  });
  const { defaultColWidth: r, minColWidth: l, maxColWidth: c } = o, _ = [], h = [], s = [], p = {}, f = [], a = [];
  let u = 0, y = 0, d = 0;
  o.cols.forEach((R) => {
    var Pn, Ot, Lt;
    if (R.hidden)
      return;
    const {
      name: L,
      type: Y = "",
      fixed: Z = !1,
      flex: fe = !1,
      width: ot = r,
      minWidth: Ee = l,
      maxWidth: Pt = c,
      ...Tn
    } = R, O = {
      name: L,
      type: Y,
      setting: {
        name: L,
        type: Y,
        fixed: Z,
        flex: fe,
        width: ot,
        minWidth: Ee,
        maxWidth: Pt,
        ...Tn
      },
      flex: Z ? 0 : fe === !0 ? 1 : typeof fe == "number" ? fe : 0,
      left: 0,
      width: ui(ot, Ee, Pt),
      realWidth: 0,
      visible: !0,
      index: f.length
    };
    n.forEach((On) => {
      var pe, rt;
      const ht = (pe = On.colTypes) == null ? void 0 : pe[Y];
      if (ht) {
        const Dt = typeof ht == "function" ? ht(O) : ht;
        Dt && Object.assign(O.setting, Dt);
      }
      (rt = On.onAddCol) == null || rt.call(this, O);
    }), O.width = ui((Pn = O.setting.width) != null ? Pn : O.width, (Ot = O.setting.minWidth) != null ? Ot : Ee, (Lt = O.setting.maxWidth) != null ? Lt : Pt), O.realWidth = O.realWidth || O.width, Z === "left" ? (O.left = u, u += O.width, _.push(O)) : Z === "right" ? (O.left = y, y += O.width, h.push(O)) : (O.left = d, d += O.width, s.push(O)), O.flex && a.push(O), f.push(O), p[O.name] = O;
  });
  let v = o.width, g = 0;
  const k = u + d + y;
  if (typeof v == "function" && (v = v.call(this, k)), v === "auto")
    g = k;
  else if (v === "100%") {
    const { parent: R } = this;
    if (R)
      g = R.clientWidth;
    else {
      g = 0, N(this, Be, !0);
      return;
    }
  } else
    g = v != null ? v : 0;
  const { data: w, rowKey: E = "id", rowHeight: $ } = o, x = [], b = (R, L, Y) => {
    var fe, ot;
    const Z = { data: Y != null ? Y : { [E]: R }, id: R, index: x.length, top: 0 };
    if (Y || (Z.lazy = !0), x.push(Z), ((fe = o.onAddRow) == null ? void 0 : fe.call(this, Z, L)) !== !1) {
      for (const Ee of n)
        if (((ot = Ee.onAddRow) == null ? void 0 : ot.call(this, Z, L)) === !1)
          return;
    }
  };
  if (typeof w == "number")
    for (let R = 0; R < w; R++)
      b(`${R}`, R);
  else
    Array.isArray(w) && w.forEach((R, L) => {
      var Y;
      typeof R == "object" ? b(`${(Y = R[E]) != null ? Y : ""}`, L, R) : b(`${R != null ? R : ""}`, L);
    });
  let C = x;
  const A = {};
  if (o.onAddRows) {
    const R = o.onAddRows.call(this, C);
    R && (C = R);
  }
  for (const R of n) {
    const L = (nt = R.onAddRows) == null ? void 0 : nt.call(this, C);
    L && (C = L);
  }
  C.forEach((R, L) => {
    A[R.id] = R, R.index = L, R.top = R.index * $;
  });
  const { header: D, footer: X } = o, G = D ? o.headerHeight || $ : 0, _e = X ? o.footerHeight || $ : 0;
  let J = o.height, W = 0;
  const te = C.length * $, De = G + _e + te;
  if (typeof J == "function" && (J = J.call(this, De)), J === "auto")
    W = De;
  else if (typeof J == "object")
    W = Math.min(J.max, Math.max(J.min, De));
  else if (J === "100%") {
    const { parent: R } = this;
    if (R)
      W = R.clientHeight;
    else {
      W = 0, N(this, Be, !0);
      return;
    }
  } else
    W = J;
  const $e = W - G - _e, ut = g - u - y, xe = {
    options: o,
    allRows: x,
    width: g,
    height: W,
    rows: C,
    rowsMap: A,
    rowHeight: $,
    rowsHeight: $e,
    rowsHeightTotal: te,
    header: D,
    footer: X,
    footerGenerators: i,
    headerHeight: G,
    footerHeight: _e,
    colsMap: p,
    colsList: f,
    flexCols: a,
    colsInfo: {
      fixedLeftCols: _,
      fixedRightCols: h,
      scrollCols: s,
      fixedLeftWidth: u,
      scrollWidth: ut,
      scrollColsWidth: d,
      fixedRightWidth: y
    }
  }, He = (Ce = o.onLayout) == null ? void 0 : Ce.call(this, xe);
  He && Object.assign(xe, He), n.forEach((R) => {
    if (R.onLayout) {
      const L = R.onLayout.call(this, xe);
      L && Object.assign(xe, L);
    }
  }), N(this, ue, xe);
}, Ho = new WeakSet(), Ka = function() {
  (K(this, Lo, Ga).call(this) || !m(this, ue)) && K(this, Do, Ya).call(this);
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
  const { rowsHeightTotal: h, rowsHeight: s, rows: p, rowHeight: f } = n, a = Math.min(Math.max(0, h - s), this.state.scrollTop), u = Math.floor(a / f), y = a + s, d = Math.min(p.length, Math.ceil(y / f)), v = [], { rowDataGetter: g } = this.options;
  for (let k = u; k < d; k++) {
    const w = p[k];
    w.lazy && g && (w.data = g([w.id])[0], w.lazy = !1), v.push(w);
  }
  return n.visibleRows = v, n.scrollTop = a, n.scrollLeft = o, n;
}, S(fr, "addPlugin", ja), S(fr, "removePlugin", Ua);
function pi(e, t) {
  t !== void 0 ? e.data.hoverCol = t : t = e.data.hoverCol;
  const { current: n } = e.ref;
  if (!n)
    return;
  const o = "dtable-col-hover";
  n.querySelectorAll(`.${o}`).forEach((i) => i.classList.remove(o)), typeof t == "string" && t.length && n.querySelectorAll(`.dtable-cell[data-col="${t}"]`).forEach((i) => i.classList.add(o));
}
const gu = {
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
      pi(this, o);
    },
    mouseleave() {
      pi(this, !1);
    }
  }
}, mu = Tt(gu, { buildIn: !0 });
function yu(e, t) {
  var l, c;
  typeof e == "boolean" && (t = e, e = void 0);
  const n = this.state.checkedRows, o = {}, { canRowCheckable: i } = this.options, r = (_, h) => {
    i && !i.call(this, _) || !!n[_] === h || (h ? n[_] = !0 : delete n[_], o[_] = h);
  };
  if (e === void 0 ? (t === void 0 && (t = !Xa.call(this)), (l = this.layout) == null || l.allRows.forEach(({ id: _ }) => {
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
function bu(e) {
  var t;
  return (t = this.state.checkedRows[e]) != null ? t : !1;
}
function Xa() {
  var n, o;
  const e = this.getChecks().length, { canRowCheckable: t } = this.options;
  return t ? e === ((n = this.layout) == null ? void 0 : n.allRows.reduce((i, r) => i + (t.call(this, r.id) ? 1 : 0), 0)) : e === ((o = this.layout) == null ? void 0 : o.allRows.length);
}
function wu() {
  return Object.keys(this.state.checkedRows);
}
const ku = {
  name: "checkable",
  defaultOptions: { checkable: !0 },
  when: (e) => !!e.checkable,
  state() {
    return { checkedRows: {} };
  },
  methods: {
    toggleCheckRows: yu,
    isRowChecked: bu,
    isAllRowChecked: Xa,
    getChecks: wu
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
        /* @__PURE__ */ T("div", {
          style: { padding: "0 calc(3 * var(--space))", display: "flex", alignItems: "center" },
          onClick: () => this.toggleCheckRows()
        }, /* @__PURE__ */ T("input", {
          type: "checkbox",
          checked: e
        }))
      ];
    },
    checkedInfo(e, t) {
      const n = this.getChecks().length, o = [];
      return n && o.push(this.i18n("checkedCountInfo", { selected: n })), o.push(this.i18n("totalCountInfo", { total: t.allRows.length })), [
        /* @__PURE__ */ T("div", null, o.join(", "))
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
      const h = this.isRowChecked(o), s = (_ = (c = this.options.checkboxRender) == null ? void 0 : c.call(this, h, o)) != null ? _ : /* @__PURE__ */ T("input", {
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
      const _ = this.isAllRowChecked(), h = (c = (l = this.options.checkboxRender) == null ? void 0 : l.call(this, _, o)) != null ? c : /* @__PURE__ */ T("input", {
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
}, $u = Tt(ku);
var Ja = /* @__PURE__ */ ((e) => (e.unknown = "", e.collapsed = "collapsed", e.expanded = "expanded", e.hidden = "hidden", e.normal = "normal", e))(Ja || {});
function hr(e) {
  const t = this.data.nestedMap.get(e);
  if (!t || t.state !== "")
    return t != null ? t : { state: "normal", level: -1 };
  if (!t.parent && !t.children)
    return t.state = "normal", t;
  const n = this.state.collapsedRows, o = t.children && n && n[e];
  let i = !1, { parent: r } = t;
  for (; r; ) {
    const l = hr.call(this, r);
    if (l.state !== "expanded") {
      i = !0;
      break;
    }
    r = l.parent;
  }
  return t.state = i ? "hidden" : o ? "collapsed" : t.children ? "expanded" : "normal", t.level = t.parent ? hr.call(this, t.parent).level + 1 : 0, t;
}
function xu(e, t) {
  var i;
  let n = (i = this.state.collapsedRows) != null ? i : {};
  const { nestedMap: o } = this.data;
  if (e === "HEADER")
    if (t === void 0 && (t = !Za.call(this)), t) {
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
function Za() {
  const e = this.data.nestedMap.values();
  for (const t of e)
    if (t.state === "expanded")
      return !1;
  return !0;
}
function Qa(e, t = 0, n, o = 0) {
  var i;
  n || (n = [...e.keys()]);
  for (const r of n) {
    const l = e.get(r);
    !l || (l.level === o && (l.order = t++), (i = l.children) != null && i.length && (t = Qa(e, t, l.children, o + 1)));
  }
  return t;
}
function ec(e, t, n, o) {
  const i = e.getNestedRowInfo(t);
  return !i || i.state === "" || !i.children || i.children.forEach((r) => {
    o[r] = n, ec(e, r, n, o);
  }), i;
}
function tc(e, t, n, o, i) {
  var c;
  const r = e.getNestedRowInfo(t);
  if (!r || r.state === "")
    return;
  ((c = r.children) == null ? void 0 : c.every((_) => {
    const h = !!(o[_] !== void 0 ? o[_] : i[_]);
    return n === h;
  })) && (o[t] = n), r.parent && tc(e, r.parent, n, o, i);
}
const Cu = {
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
        const l = ec(this, i, r, o);
        l != null && l.parent && tc(this, l.parent, r, o, n);
      }), o;
    }
  },
  when: (e) => !!e.nested,
  data() {
    return { nestedMap: /* @__PURE__ */ new Map() };
  },
  methods: {
    toggleRow: xu,
    isAllCollapsed: Za,
    getNestedRowInfo: hr
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
    return e = e.filter((t) => this.getNestedRowInfo(t.id).state !== "hidden"), Qa(this.data.nestedMap), e.sort((t, n) => {
      var l, c;
      const o = this.getNestedRowInfo(t.id), i = this.getNestedRowInfo(n.id), r = ((l = o.order) != null ? l : 0) - ((c = i.order) != null ? c : 0);
      return r === 0 ? t.index - n.index : r;
    }), e;
  },
  onRenderCell(e, { col: t, row: n }) {
    var c, _, h;
    const { id: o, data: i } = n, { nestedToggle: r } = t.setting, l = this.getNestedRowInfo(o);
    if (r && (l.children || l.parent) && e.unshift((_ = (c = this.options.onRenderNestedToggle) == null ? void 0 : c.call(this, l, o, t, i)) != null ? _ : /* @__PURE__ */ T("a", {
      role: "button",
      className: `dtable-nested-toggle state${l.children ? "" : " is-no-child"}`
    }, /* @__PURE__ */ T("span", {
      className: "toggle-icon"
    }))), l.level) {
      let { nestedIndent: s = r } = t.setting;
      s && (s === !0 && (s = (h = this.options.nestedIndent) != null ? h : 12), e.unshift(/* @__PURE__ */ T("div", {
        className: "dtable-nested-indent",
        style: { width: s * l.level + "px" }
      })));
    }
    return e;
  },
  onRenderHeaderCell(e, { row: t, col: n }) {
    var i, r;
    const { id: o } = t;
    return n.setting.nestedToggle && e.unshift((r = (i = this.options.onRenderNestedToggle) == null ? void 0 : i.call(this, void 0, o, n, void 0)) != null ? r : /* @__PURE__ */ T("a", {
      type: "button",
      className: "dtable-nested-toggle state"
    }, /* @__PURE__ */ T("span", {
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
}, Eu = Tt(Cu);
const Su = {
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
        const { linkTemplate: o = "", linkProps: i } = t.setting, r = be(o, n.data);
        return e[0] = /* @__PURE__ */ T("a", {
          href: r,
          ...i
        }, e[0]), e;
      }
    },
    avatar: {
      onRenderCell(e, { col: t, row: n }) {
        const { data: o } = n, { avatarWithName: i, avatarClass: r = "size-xs circle", avatarKey: l = `${t.name}Avatar` } = t.setting, c = /* @__PURE__ */ T("div", {
          className: `avatar ${r} flex-none`
        }, /* @__PURE__ */ T("img", {
          src: o ? o[l] : ""
        }));
        return i ? e.unshift(c) : e[0] = c, e;
      }
    },
    circleProgress: {
      align: "center",
      onRenderCell(e, { col: t }) {
        const { circleSize: n = 24, circleBorderSize: o = 1, circleBgColor: i = "var(--color-border)", circleColor: r = "var(--color-success-500)" } = t.setting, l = (n - o) / 2, c = n / 2, _ = e[0];
        return e[0] = /* @__PURE__ */ T("svg", {
          width: n,
          height: n
        }, /* @__PURE__ */ T("circle", {
          cx: c,
          cy: c,
          r: l,
          "stroke-width": o,
          stroke: i,
          fill: "transparent"
        }), /* @__PURE__ */ T("circle", {
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
        }), /* @__PURE__ */ T("text", {
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
            return h && (_ = { className: l, ...h, ..._ }), be(i, _);
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
        return typeof o == "function" ? e[0] = i === "html" ? { html: o(r) } : o(r) : i === "datetime" ? e[0] = _r(r, o) : i === "html" ? e[0] = { html: be(o, r) } : e[0] = be(o, r), e;
      }
    }
  }
}, Mu = Tt(Su, { buildIn: !0 }), Au = {
  name: "sort-type",
  onRenderHeaderCell(e, { col: t }) {
    const { sortType: n } = t.setting;
    if (n) {
      const { sortLink: o = this.options.sortLink, sortAttrs: i } = t.setting, r = n === !0 ? "none" : n;
      if (e.push(
        /* @__PURE__ */ T("div", {
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
}, Ru = Tt(Au, { buildIn: !0 }), Nu = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  colHover: mu,
  checkable: $u,
  NestedRowState: Ja,
  nested: Eu,
  rich: Mu,
  sortType: Ru
}, Symbol.toStringTag, { value: "Module" }));
class Wt extends Le {
}
S(Wt, "NAME", "dtable"), S(Wt, "Component", fr), S(Wt, "definePlugin", Tt), S(Wt, "removePlugin", Ua), S(Wt, "plugins", Nu);
var ye, oe;
class Tu {
  constructor(t) {
    M(this, ye, void 0);
    M(this, oe, void 0);
    N(this, ye, t), N(this, oe, document.querySelector(t.getAttribute("data-target")) || document.querySelector(t.getAttribute("data-tab")) || document.querySelector(t.getAttribute("href")));
  }
  showTarget() {
    this.addActive(m(this, ye).parentElement.parentElement, m(this, ye).parentElement), this.addActive(m(this, oe).parentElement, m(this, oe)), m(this, oe).dispatchEvent(new CustomEvent("show.zui3.tab"));
  }
  show() {
    N(this, oe, m(this, ye)), this.addActive(m(this, oe).parentElement, m(this, oe)), N(this, ye, document.querySelector(`[href='#${m(this, oe).getAttribute("id")}']`) || document.querySelector(`[data-tab='#${m(this, oe).getAttribute("id")}']`) || document.querySelector(`[data-target='#${m(this, oe).getAttribute("id")}']`)), this.addActive(m(this, ye).parentElement.parentElement, m(this, ye).parentElement);
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
ye = new WeakMap(), oe = new WeakMap();
document.addEventListener("click", function(e) {
  e.target instanceof HTMLElement && (e.target.dataset.toggle === "tab" || e.target.getAttribute("data-tab")) && (e.preventDefault(), new Tu(e.target).showTarget());
});
export {
  as as ActionMenu,
  _s as ActionMenuNested,
  Ms as BtnGroup,
  re as ContextMenu,
  Wt as DTable,
  le as Dropdown,
  dr as EventBus,
  fs as Menu,
  Rs as Nav,
  Tu as NavTabs,
  Zs as Pager,
  gs as ProgressCircle,
  Se as TIME_DAY,
  Qs as Toolbar,
  dc as addI18nMap,
  Du as browser,
  Js as calculateTimestamp,
  Lu as convertBytes,
  se as createDate,
  Ou as formatBytes,
  _r as formatDate,
  Bu as formatDateSpan,
  be as formatString,
  hc as getLangCode,
  zu as getTimeBeforeDesc,
  An as i18n,
  Uu as isDBY,
  Xo as isObject,
  Nn as isSameDay,
  Jf as isSameMonth,
  Hu as isSameWeek,
  Xs as isSameYear,
  Iu as isToday,
  ju as isTomorrow,
  Wu as isYesterday,
  er as mergeDeep,
  Qo as nativeEvents,
  pc as setLangCode,
  jc as store
};
