var Mi = Object.defineProperty;
var Ai = (e, t, n) => t in e ? Mi(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var A = (e, t, n) => (Ai(e, typeof t != "symbol" ? t + "" : t, n), n), fo = (e, t, n) => {
  if (!t.has(e))
    throw TypeError("Cannot " + n);
};
var v = (e, t, n) => (fo(e, t, "read from private field"), n ? n.call(e) : t.get(e)), $ = (e, t, n) => {
  if (t.has(e))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(e) : t.set(e, n);
}, R = (e, t, n, o) => (fo(e, t, "write to private field"), o ? o.call(e, n) : t.set(e, n), n);
var q = (e, t, n) => (fo(e, t, "access private method"), n);
var eo, H, Fr, Vr, Ot, Zo, kn = {}, qr = [], Oi = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function De(e, t) {
  for (var n in t)
    e[n] = t[n];
  return e;
}
function Yr(e) {
  var t = e.parentNode;
  t && t.removeChild(e);
}
function to(e, t, n) {
  var o, s, r, a = {};
  for (r in t)
    r == "key" ? o = t[r] : r == "ref" ? s = t[r] : a[r] = t[r];
  if (arguments.length > 2 && (a.children = arguments.length > 3 ? eo.call(arguments, 2) : n), typeof e == "function" && e.defaultProps != null)
    for (r in e.defaultProps)
      a[r] === void 0 && (a[r] = e.defaultProps[r]);
  return un(e, a, o, s, null);
}
function un(e, t, n, o, s) {
  var r = { type: e, props: t, key: n, ref: o, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: s == null ? ++Fr : s };
  return s == null && H.vnode != null && H.vnode(r), r;
}
function Ni() {
  return { current: null };
}
function no(e) {
  return e.children;
}
function hn(e, t) {
  this.props = e, this.context = t;
}
function gt(e, t) {
  if (t == null)
    return e.__ ? gt(e.__, e.__.__k.indexOf(e) + 1) : null;
  for (var n; t < e.__k.length; t++)
    if ((n = e.__k[t]) != null && n.__e != null)
      return n.__e;
  return typeof e.type == "function" ? gt(e) : null;
}
function Gr(e) {
  var t, n;
  if ((e = e.__) != null && e.__c != null) {
    for (e.__e = e.__c.base = null, t = 0; t < e.__k.length; t++)
      if ((n = e.__k[t]) != null && n.__e != null) {
        e.__e = e.__c.base = n.__e;
        break;
      }
    return Gr(e);
  }
}
function Qo(e) {
  (!e.__d && (e.__d = !0) && Ot.push(e) && !xn.__r++ || Zo !== H.debounceRendering) && ((Zo = H.debounceRendering) || setTimeout)(xn);
}
function xn() {
  for (var e; xn.__r = Ot.length; )
    e = Ot.sort(function(t, n) {
      return t.__v.__b - n.__v.__b;
    }), Ot = [], e.some(function(t) {
      var n, o, s, r, a, l;
      t.__d && (a = (r = (n = t).__v).__e, (l = n.__P) && (o = [], (s = De({}, r)).__v = r.__v + 1, Eo(l, r, s, n.__n, l.ownerSVGElement !== void 0, r.__h != null ? [a] : null, o, a == null ? gt(r) : a, r.__h), Zr(o, r), r.__e != a && Gr(r)));
    });
}
function Kr(e, t, n, o, s, r, a, l, f, h) {
  var i, p, u, c, d, b, _, g = o && o.__k || qr, m = g.length;
  for (n.__k = [], i = 0; i < t.length; i++)
    if ((c = n.__k[i] = (c = t[i]) == null || typeof c == "boolean" ? null : typeof c == "string" || typeof c == "number" || typeof c == "bigint" ? un(null, c, null, null, c) : Array.isArray(c) ? un(no, { children: c }, null, null, null) : c.__b > 0 ? un(c.type, c.props, c.key, null, c.__v) : c) != null) {
      if (c.__ = n, c.__b = n.__b + 1, (u = g[i]) === null || u && c.key == u.key && c.type === u.type)
        g[i] = void 0;
      else
        for (p = 0; p < m; p++) {
          if ((u = g[p]) && c.key == u.key && c.type === u.type) {
            g[p] = void 0;
            break;
          }
          u = null;
        }
      Eo(e, c, u = u || kn, s, r, a, l, f, h), d = c.__e, (p = c.ref) && u.ref != p && (_ || (_ = []), u.ref && _.push(u.ref, null, c), _.push(p, c.__c || d, c)), d != null ? (b == null && (b = d), typeof c.type == "function" && c.__k === u.__k ? c.__d = f = Xr(c, f, e) : f = Jr(e, c, u, g, d, f), typeof n.type == "function" && (n.__d = f)) : f && u.__e == f && f.parentNode != e && (f = gt(u));
    }
  for (n.__e = b, i = m; i--; )
    g[i] != null && (typeof n.type == "function" && g[i].__e != null && g[i].__e == n.__d && (n.__d = gt(o, i + 1)), es(g[i], g[i]));
  if (_)
    for (i = 0; i < _.length; i++)
      Qr(_[i], _[++i], _[++i]);
}
function Xr(e, t, n) {
  for (var o, s = e.__k, r = 0; s && r < s.length; r++)
    (o = s[r]) && (o.__ = e, t = typeof o.type == "function" ? Xr(o, t, n) : Jr(n, o, o, s, o.__e, t));
  return t;
}
function Jr(e, t, n, o, s, r) {
  var a, l, f;
  if (t.__d !== void 0)
    a = t.__d, t.__d = void 0;
  else if (n == null || s != r || s.parentNode == null)
    e:
      if (r == null || r.parentNode !== e)
        e.appendChild(s), a = null;
      else {
        for (l = r, f = 0; (l = l.nextSibling) && f < o.length; f += 2)
          if (l == s)
            break e;
        e.insertBefore(s, r), a = r;
      }
  return a !== void 0 ? a : s.nextSibling;
}
function Li(e, t, n, o, s) {
  var r;
  for (r in n)
    r === "children" || r === "key" || r in t || En(e, r, null, n[r], o);
  for (r in t)
    s && typeof t[r] != "function" || r === "children" || r === "key" || r === "value" || r === "checked" || n[r] === t[r] || En(e, r, t[r], n[r], o);
}
function er(e, t, n) {
  t[0] === "-" ? e.setProperty(t, n) : e[t] = n == null ? "" : typeof n != "number" || Oi.test(t) ? n : n + "px";
}
function En(e, t, n, o, s) {
  var r;
  e:
    if (t === "style")
      if (typeof n == "string")
        e.style.cssText = n;
      else {
        if (typeof o == "string" && (e.style.cssText = o = ""), o)
          for (t in o)
            n && t in n || er(e.style, t, "");
        if (n)
          for (t in n)
            o && n[t] === o[t] || er(e.style, t, n[t]);
      }
    else if (t[0] === "o" && t[1] === "n")
      r = t !== (t = t.replace(/Capture$/, "")), t = t.toLowerCase() in e ? t.toLowerCase().slice(2) : t.slice(2), e.l || (e.l = {}), e.l[t + r] = n, n ? o || e.addEventListener(t, r ? nr : tr, r) : e.removeEventListener(t, r ? nr : tr, r);
    else if (t !== "dangerouslySetInnerHTML") {
      if (s)
        t = t.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
      else if (t !== "href" && t !== "list" && t !== "form" && t !== "tabIndex" && t !== "download" && t in e)
        try {
          e[t] = n == null ? "" : n;
          break e;
        } catch {
        }
      typeof n == "function" || (n != null && (n !== !1 || t[0] === "a" && t[1] === "r") ? e.setAttribute(t, n) : e.removeAttribute(t));
    }
}
function tr(e) {
  this.l[e.type + !1](H.event ? H.event(e) : e);
}
function nr(e) {
  this.l[e.type + !0](H.event ? H.event(e) : e);
}
function Eo(e, t, n, o, s, r, a, l, f) {
  var h, i, p, u, c, d, b, _, g, m, w, k, x, y = t.type;
  if (t.constructor !== void 0)
    return null;
  n.__h != null && (f = n.__h, l = t.__e = n.__e, t.__h = null, r = [l]), (h = H.__b) && h(t);
  try {
    e:
      if (typeof y == "function") {
        if (_ = t.props, g = (h = y.contextType) && o[h.__c], m = h ? g ? g.props.value : h.__ : o, n.__c ? b = (i = t.__c = n.__c).__ = i.__E : ("prototype" in y && y.prototype.render ? t.__c = i = new y(_, m) : (t.__c = i = new hn(_, m), i.constructor = y, i.render = Ti), g && g.sub(i), i.props = _, i.state || (i.state = {}), i.context = m, i.__n = o, p = i.__d = !0, i.__h = []), i.__s == null && (i.__s = i.state), y.getDerivedStateFromProps != null && (i.__s == i.state && (i.__s = De({}, i.__s)), De(i.__s, y.getDerivedStateFromProps(_, i.__s))), u = i.props, c = i.state, p)
          y.getDerivedStateFromProps == null && i.componentWillMount != null && i.componentWillMount(), i.componentDidMount != null && i.__h.push(i.componentDidMount);
        else {
          if (y.getDerivedStateFromProps == null && _ !== u && i.componentWillReceiveProps != null && i.componentWillReceiveProps(_, m), !i.__e && i.shouldComponentUpdate != null && i.shouldComponentUpdate(_, i.__s, m) === !1 || t.__v === n.__v) {
            i.props = _, i.state = i.__s, t.__v !== n.__v && (i.__d = !1), i.__v = t, t.__e = n.__e, t.__k = n.__k, t.__k.forEach(function(E) {
              E && (E.__ = t);
            }), i.__h.length && a.push(i);
            break e;
          }
          i.componentWillUpdate != null && i.componentWillUpdate(_, i.__s, m), i.componentDidUpdate != null && i.__h.push(function() {
            i.componentDidUpdate(u, c, d);
          });
        }
        if (i.context = m, i.props = _, i.__v = t, i.__P = e, w = H.__r, k = 0, "prototype" in y && y.prototype.render)
          i.state = i.__s, i.__d = !1, w && w(t), h = i.render(i.props, i.state, i.context);
        else
          do
            i.__d = !1, w && w(t), h = i.render(i.props, i.state, i.context), i.state = i.__s;
          while (i.__d && ++k < 25);
        i.state = i.__s, i.getChildContext != null && (o = De(De({}, o), i.getChildContext())), p || i.getSnapshotBeforeUpdate == null || (d = i.getSnapshotBeforeUpdate(u, c)), x = h != null && h.type === no && h.key == null ? h.props.children : h, Kr(e, Array.isArray(x) ? x : [x], t, n, o, s, r, a, l, f), i.base = t.__e, t.__h = null, i.__h.length && a.push(i), b && (i.__E = i.__ = null), i.__e = !1;
      } else
        r == null && t.__v === n.__v ? (t.__k = n.__k, t.__e = n.__e) : t.__e = Pi(n.__e, t, n, o, s, r, a, f);
    (h = H.diffed) && h(t);
  } catch (E) {
    t.__v = null, (f || r != null) && (t.__e = l, t.__h = !!f, r[r.indexOf(l)] = null), H.__e(E, t, n);
  }
}
function Zr(e, t) {
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
function Pi(e, t, n, o, s, r, a, l) {
  var f, h, i, p = n.props, u = t.props, c = t.type, d = 0;
  if (c === "svg" && (s = !0), r != null) {
    for (; d < r.length; d++)
      if ((f = r[d]) && "setAttribute" in f == !!c && (c ? f.localName === c : f.nodeType === 3)) {
        e = f, r[d] = null;
        break;
      }
  }
  if (e == null) {
    if (c === null)
      return document.createTextNode(u);
    e = s ? document.createElementNS("http://www.w3.org/2000/svg", c) : document.createElement(c, u.is && u), r = null, l = !1;
  }
  if (c === null)
    p === u || l && e.data === u || (e.data = u);
  else {
    if (r = r && eo.call(e.childNodes), h = (p = n.props || kn).dangerouslySetInnerHTML, i = u.dangerouslySetInnerHTML, !l) {
      if (r != null)
        for (p = {}, d = 0; d < e.attributes.length; d++)
          p[e.attributes[d].name] = e.attributes[d].value;
      (i || h) && (i && (h && i.__html == h.__html || i.__html === e.innerHTML) || (e.innerHTML = i && i.__html || ""));
    }
    if (Li(e, u, p, s, l), i)
      t.__k = [];
    else if (d = t.props.children, Kr(e, Array.isArray(d) ? d : [d], t, n, o, s && c !== "foreignObject", r, a, r ? r[0] : n.__k && gt(n, 0), l), r != null)
      for (d = r.length; d--; )
        r[d] != null && Yr(r[d]);
    l || ("value" in u && (d = u.value) !== void 0 && (d !== e.value || c === "progress" && !d || c === "option" && d !== p.value) && En(e, "value", d, p.value, !1), "checked" in u && (d = u.checked) !== void 0 && d !== e.checked && En(e, "checked", d, p.checked, !1));
  }
  return e;
}
function Qr(e, t, n) {
  try {
    typeof e == "function" ? e(t) : e.current = t;
  } catch (o) {
    H.__e(o, n);
  }
}
function es(e, t, n) {
  var o, s;
  if (H.unmount && H.unmount(e), (o = e.ref) && (o.current && o.current !== e.__e || Qr(o, null, t)), (o = e.__c) != null) {
    if (o.componentWillUnmount)
      try {
        o.componentWillUnmount();
      } catch (r) {
        H.__e(r, t);
      }
    o.base = o.__P = null;
  }
  if (o = e.__k)
    for (s = 0; s < o.length; s++)
      o[s] && es(o[s], t, typeof e.type != "function");
  n || e.__e == null || Yr(e.__e), e.__e = e.__d = void 0;
}
function Ti(e, t, n) {
  return this.constructor(e, n);
}
function Di(e, t, n) {
  var o, s, r;
  H.__ && H.__(e, t), s = (o = typeof n == "function") ? null : n && n.__k || t.__k, r = [], Eo(t, e = (!o && n || t).__k = to(no, null, [e]), s || kn, kn, t.ownerSVGElement !== void 0, !o && n ? [n] : s ? null : t.firstChild ? eo.call(t.childNodes) : null, r, !o && n ? n : s ? s.__e : t.firstChild, o), Zr(r, e);
}
eo = qr.slice, H = { __e: function(e, t, n, o) {
  for (var s, r, a; t = t.__; )
    if ((s = t.__c) && !s.__)
      try {
        if ((r = s.constructor) && r.getDerivedStateFromError != null && (s.setState(r.getDerivedStateFromError(e)), a = s.__d), s.componentDidCatch != null && (s.componentDidCatch(e, o || {}), a = s.__d), a)
          return s.__E = s;
      } catch (l) {
        e = l;
      }
  throw e;
} }, Fr = 0, Vr = function(e) {
  return e != null && e.constructor === void 0;
}, hn.prototype.setState = function(e, t) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = De({}, this.state), typeof e == "function" && (e = e(De({}, n), this.props)), e && De(n, e), e != null && this.__v && (t && this.__h.push(t), Qo(this));
}, hn.prototype.forceUpdate = function(e) {
  this.__v && (this.__e = !0, e && this.__h.push(e), Qo(this));
}, hn.prototype.render = no, Ot = [], xn.__r = 0;
var we;
class Hi {
  constructor(t = "") {
    $(this, we, void 0);
    typeof t == "object" ? R(this, we, t) : R(this, we, document.appendChild(document.createComment(t)));
  }
  on(t, n, o) {
    v(this, we).addEventListener(t, n, o);
  }
  once(t, n, o) {
    v(this, we).addEventListener(t, n, { once: !0, ...o });
  }
  off(t, n, o) {
    v(this, we).removeEventListener(t, n, o);
  }
  emit(t) {
    return v(this, we).dispatchEvent(t), t;
  }
}
we = new WeakMap();
const ho = /* @__PURE__ */ new Set([
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
class $o extends Hi {
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
    return typeof t == "string" && (ho.has(t) ? (t = new Event(t), Object.assign(t, { detail: n })) : t = new CustomEvent(t, { detail: n })), super.emit($o.createEvent(t, n));
  }
  static createEvent(t, n) {
    return typeof t == "string" && (ho.has(t) ? (t = new Event(t), Object.assign(t, { detail: n })) : t = new CustomEvent(t, { detail: n })), t;
  }
}
var ke, qt, Ge, At;
class or extends $o {
  constructor(n = "", o) {
    super(n);
    $(this, Ge);
    $(this, ke, /* @__PURE__ */ new Map());
    $(this, qt, void 0);
    R(this, qt, o == null ? void 0 : o.customEventSuffix);
  }
  on(n, o, s) {
    n = q(this, Ge, At).call(this, n), super.on(n, o, s), v(this, ke).set(o, [n, s]);
  }
  off(n, o, s) {
    n = q(this, Ge, At).call(this, n), super.off(n, o, s), v(this, ke).delete(o);
  }
  once(n, o, s) {
    n = q(this, Ge, At).call(this, n);
    const r = (a) => {
      o(a), v(this, ke).delete(r);
    };
    super.once(n, r, s), v(this, ke).set(r, [n, s]);
  }
  emit(n, o) {
    return typeof n == "string" && (n = q(this, Ge, At).call(this, n)), super.emit(n, o);
  }
  offAll() {
    Array.from(v(this, ke).entries()).forEach(([n, [o, s]]) => {
      super.off(o, n, s);
    }), v(this, ke).clear();
  }
}
ke = new WeakMap(), qt = new WeakMap(), Ge = new WeakSet(), At = function(n) {
  const o = v(this, qt);
  return ho.has(n) || typeof o != "string" || n.endsWith(o) ? n : `${n}${o}`;
};
function ji(e, t) {
  if (e == null)
    return [e, void 0];
  typeof t == "string" && (t = t.split("."));
  const n = t.join(".");
  let o = e;
  const s = [o];
  for (; typeof o == "object" && o !== null && t.length; ) {
    let r = t.shift(), a;
    const l = r.indexOf("[");
    if (l > 0 && l < r.length - 1 && r.endsWith("]") && (a = r.substring(l + 1, r.length - 1), r = r.substring(0, l)), o = o[r], s.push(o), a !== void 0)
      if (typeof o == "object" && o !== null)
        o instanceof Map ? o = o.get(a) : o = o[a], s.push(o);
      else
        throw new Error(`Cannot access property "${r}[${a}]", the full path is "${n}".`);
  }
  if (t.length)
    throw new Error(`Cannot access property with rest path "${t.join(".")}", the full path is "${n}".`);
  return s;
}
function Wi(e, t, n) {
  const o = ji(e, t), s = o[o.length - 1];
  return s === void 0 ? n : s;
}
function dn(e) {
  return !!e && typeof e == "object" && !Array.isArray(e);
}
function $n(e, ...t) {
  if (!t.length)
    return e;
  const n = t.shift();
  if (dn(e) && dn(n))
    for (const o in n)
      dn(n[o]) ? (e[o] || Object.assign(e, { [o]: {} }), $n(e[o], n[o])) : Object.assign(e, { [o]: n[o] });
  return $n(e, ...t);
}
function nt(e, ...t) {
  var n;
  if (t.length === 0)
    return e;
  if (t.length === 1 && typeof t[0] == "object" && t[0]) {
    const o = t[0];
    return Object.keys(o).forEach((s) => {
      var a;
      const r = (a = o[s]) != null ? a : 0;
      e = e.replace(new RegExp(`\\{${s}\\}`, "g"), `${r}`);
    }), e;
  }
  for (let o = 0; o < t.length; o++) {
    const s = (n = t[o]) != null ? n : "";
    e = e.replace(new RegExp(`\\{${o}\\}`, "g"), `${s}`);
  }
  return e;
}
var So = /* @__PURE__ */ ((e) => (e[e.B = 1] = "B", e[e.KB = 1024] = "KB", e[e.MB = 1048576] = "MB", e[e.GB = 1073741824] = "GB", e[e.TB = 1099511627776] = "TB", e))(So || {});
function Ii(e, t = 2, n = "") {
  return Number.isNaN(e) ? "?KB" : (n || (e < 1024 ? n = "B" : e < 1048576 ? n = "KB" : e < 1073741824 ? n = "MB" : e < 1099511627776 ? n = "GB" : n = "TB"), (e / So[n]).toFixed(t) + n);
}
const Bi = (e) => {
  const t = /^[0-9]*(B|KB|MB|GB|TB)$/;
  e = e.toUpperCase();
  const n = e.match(t);
  if (!n)
    return 0;
  const o = n[1];
  return e = e.replace(o, ""), Number.parseInt(e, 10) * So[o];
};
var Ur, zr;
let Co = (zr = (Ur = document.documentElement.getAttribute("lang")) == null ? void 0 : Ur.toLowerCase()) != null ? zr : "zh_cn", Ne;
function Ui() {
  return Co;
}
function zi(e) {
  Co = e.toLowerCase();
}
function Fi(e, t) {
  Ne || (Ne = {}), typeof e == "string" && (e = { [e]: t != null ? t : {} }), $n(Ne, e);
}
function tn(e, t, n, o, s, r) {
  Array.isArray(e) ? Ne && e.unshift(Ne) : e = Ne ? [Ne, e] : [e], typeof n == "string" && (r = s, s = o, o = n, n = void 0);
  const a = s || Co;
  let l;
  for (const f of e) {
    if (!f)
      continue;
    const h = f[a];
    if (!h)
      continue;
    const i = r && f === Ne ? `${r}.${t}` : t;
    if (l = Wi(h, i), l !== void 0)
      break;
  }
  return l === void 0 ? o : n ? nt(l, ...Array.isArray(n) ? n : [n]) : l;
}
tn.addLang = Fi;
tn.getCode = Ui;
tn.setCode = zi;
function Vi(e) {
  return Object.fromEntries(Object.entries(e).map(([t, n]) => {
    if (typeof n == "string")
      try {
        n = JSON.parse(n);
      } catch {
      }
    return [t, n];
  }));
}
var xe, rt, Q;
class Sn {
  constructor(t, n) {
    $(this, xe, void 0);
    $(this, rt, void 0);
    $(this, Q, void 0);
    var o;
    t = typeof t == "string" ? document.querySelector(t) : t, this.constructor.EVENTS && R(this, Q, new or(t, { customEventSuffix: `.${this.constructor.KEY}` })), R(this, xe, { ...this.constructor.DEFAULT, ...t instanceof HTMLElement ? Vi(t.dataset) : null, ...n }), this.constructor.all.set(t, this), R(this, rt, t), this.init(), (o = v(this, Q)) == null || o.emit("inited", this);
  }
  get options() {
    return v(this, xe);
  }
  get element() {
    return v(this, rt);
  }
  get events() {
    return v(this, Q);
  }
  init() {
  }
  setOptions(t) {
    return t && Object.assign(v(this, xe), t), v(this, xe);
  }
  render(t) {
    this.setOptions(t);
  }
  destroy() {
    this.constructor.all.delete(v(this, rt)), v(this, Q) && (v(this, Q).emit("destroyed", this), v(this, Q).offAll());
  }
  on(t, n, o) {
    var s;
    (s = v(this, Q)) == null || s.on(t, n, o);
  }
  once(t, n, o) {
    var s;
    (s = v(this, Q)) == null || s.once(t, n, o);
  }
  off(t, n, o) {
    var s;
    (s = v(this, Q)) == null || s.off(t, n, o);
  }
  emit(t, n) {
    var a;
    let o = or.createEvent(t, n);
    const s = `on${o.type.replace(`.${this.constructor.KEY}`, "")}`, r = v(this, xe)[s];
    return r && r(o) === !1 && (o.preventDefault(), o.stopPropagation()), o = (a = v(this, Q)) == null ? void 0 : a.emit(o), o;
  }
  i18n(t, n, o) {
    var s;
    return (s = tn(v(this, xe).i18n, t, n, o, this.options.lang, this.constructor.NAME)) != null ? s : `{i18n:${t}}`;
  }
  static get NAME() {
    return this.name.toLowerCase();
  }
  static get KEY() {
    return `zui.${this.NAME}`;
  }
  static get DEFAULT() {
    return {};
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
xe = new WeakMap(), rt = new WeakMap(), Q = new WeakMap(), A(Sn, "EVENTS", !1), A(Sn, "allComponents", /* @__PURE__ */ new Map());
class oo extends Sn {
  constructor() {
    super(...arguments);
    A(this, "ref", Ni());
  }
  get $() {
    return this.ref.current;
  }
  init() {
    requestAnimationFrame(() => this.render());
  }
  render(n) {
    const o = this.constructor.Component;
    Di(/* @__PURE__ */ to(o, {
      ref: this.ref,
      ...this.setOptions(n)
    }), this.element);
  }
}
var Ro, W, ts, ns, Nt, rr, os = {}, rs = [], qi = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function He(e, t) {
  for (var n in t)
    e[n] = t[n];
  return e;
}
function ss(e) {
  var t = e.parentNode;
  t && t.removeChild(e);
}
function X(e, t, n) {
  var o, s, r, a = {};
  for (r in t)
    r == "key" ? o = t[r] : r == "ref" ? s = t[r] : a[r] = t[r];
  if (arguments.length > 2 && (a.children = arguments.length > 3 ? Ro.call(arguments, 2) : n), typeof e == "function" && e.defaultProps != null)
    for (r in e.defaultProps)
      a[r] === void 0 && (a[r] = e.defaultProps[r]);
  return pn(e, a, o, s, null);
}
function pn(e, t, n, o, s) {
  var r = { type: e, props: t, key: n, ref: o, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: s == null ? ++ts : s };
  return s == null && W.vnode != null && W.vnode(r), r;
}
function Yi() {
  return { current: null };
}
function Mo(e) {
  return e.children;
}
function Lt(e, t) {
  this.props = e, this.context = t;
}
function mt(e, t) {
  if (t == null)
    return e.__ ? mt(e.__, e.__.__k.indexOf(e) + 1) : null;
  for (var n; t < e.__k.length; t++)
    if ((n = e.__k[t]) != null && n.__e != null)
      return n.__e;
  return typeof e.type == "function" ? mt(e) : null;
}
function is(e) {
  var t, n;
  if ((e = e.__) != null && e.__c != null) {
    for (e.__e = e.__c.base = null, t = 0; t < e.__k.length; t++)
      if ((n = e.__k[t]) != null && n.__e != null) {
        e.__e = e.__c.base = n.__e;
        break;
      }
    return is(e);
  }
}
function sr(e) {
  (!e.__d && (e.__d = !0) && Nt.push(e) && !Cn.__r++ || rr !== W.debounceRendering) && ((rr = W.debounceRendering) || setTimeout)(Cn);
}
function Cn() {
  for (var e; Cn.__r = Nt.length; )
    e = Nt.sort(function(t, n) {
      return t.__v.__b - n.__v.__b;
    }), Nt = [], e.some(function(t) {
      var n, o, s, r, a, l;
      t.__d && (a = (r = (n = t).__v).__e, (l = n.__P) && (o = [], (s = He({}, r)).__v = r.__v + 1, fs(l, r, s, n.__n, l.ownerSVGElement !== void 0, r.__h != null ? [a] : null, o, a == null ? mt(r) : a, r.__h), Ki(o, r), r.__e != a && is(r)));
    });
}
function as(e, t, n, o, s, r, a, l, f, h) {
  var i, p, u, c, d, b, _, g = o && o.__k || rs, m = g.length;
  for (n.__k = [], i = 0; i < t.length; i++)
    if ((c = n.__k[i] = (c = t[i]) == null || typeof c == "boolean" ? null : typeof c == "string" || typeof c == "number" || typeof c == "bigint" ? pn(null, c, null, null, c) : Array.isArray(c) ? pn(Mo, { children: c }, null, null, null) : c.__b > 0 ? pn(c.type, c.props, c.key, null, c.__v) : c) != null) {
      if (c.__ = n, c.__b = n.__b + 1, (u = g[i]) === null || u && c.key == u.key && c.type === u.type)
        g[i] = void 0;
      else
        for (p = 0; p < m; p++) {
          if ((u = g[p]) && c.key == u.key && c.type === u.type) {
            g[p] = void 0;
            break;
          }
          u = null;
        }
      fs(e, c, u = u || os, s, r, a, l, f, h), d = c.__e, (p = c.ref) && u.ref != p && (_ || (_ = []), u.ref && _.push(u.ref, null, c), _.push(p, c.__c || d, c)), d != null ? (b == null && (b = d), typeof c.type == "function" && c.__k === u.__k ? c.__d = f = ls(c, f, e) : f = cs(e, c, u, g, d, f), typeof n.type == "function" && (n.__d = f)) : f && u.__e == f && f.parentNode != e && (f = mt(u));
    }
  for (n.__e = b, i = m; i--; )
    g[i] != null && (typeof n.type == "function" && g[i].__e != null && g[i].__e == n.__d && (n.__d = mt(o, i + 1)), hs(g[i], g[i]));
  if (_)
    for (i = 0; i < _.length; i++)
      us(_[i], _[++i], _[++i]);
}
function ls(e, t, n) {
  for (var o, s = e.__k, r = 0; s && r < s.length; r++)
    (o = s[r]) && (o.__ = e, t = typeof o.type == "function" ? ls(o, t, n) : cs(n, o, o, s, o.__e, t));
  return t;
}
function cs(e, t, n, o, s, r) {
  var a, l, f;
  if (t.__d !== void 0)
    a = t.__d, t.__d = void 0;
  else if (n == null || s != r || s.parentNode == null)
    e:
      if (r == null || r.parentNode !== e)
        e.appendChild(s), a = null;
      else {
        for (l = r, f = 0; (l = l.nextSibling) && f < o.length; f += 2)
          if (l == s)
            break e;
        e.insertBefore(s, r), a = r;
      }
  return a !== void 0 ? a : s.nextSibling;
}
function Gi(e, t, n, o, s) {
  var r;
  for (r in n)
    r === "children" || r === "key" || r in t || Rn(e, r, null, n[r], o);
  for (r in t)
    s && typeof t[r] != "function" || r === "children" || r === "key" || r === "value" || r === "checked" || n[r] === t[r] || Rn(e, r, t[r], n[r], o);
}
function ir(e, t, n) {
  t[0] === "-" ? e.setProperty(t, n) : e[t] = n == null ? "" : typeof n != "number" || qi.test(t) ? n : n + "px";
}
function Rn(e, t, n, o, s) {
  var r;
  e:
    if (t === "style")
      if (typeof n == "string")
        e.style.cssText = n;
      else {
        if (typeof o == "string" && (e.style.cssText = o = ""), o)
          for (t in o)
            n && t in n || ir(e.style, t, "");
        if (n)
          for (t in n)
            o && n[t] === o[t] || ir(e.style, t, n[t]);
      }
    else if (t[0] === "o" && t[1] === "n")
      r = t !== (t = t.replace(/Capture$/, "")), t = t.toLowerCase() in e ? t.toLowerCase().slice(2) : t.slice(2), e.l || (e.l = {}), e.l[t + r] = n, n ? o || e.addEventListener(t, r ? lr : ar, r) : e.removeEventListener(t, r ? lr : ar, r);
    else if (t !== "dangerouslySetInnerHTML") {
      if (s)
        t = t.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
      else if (t !== "href" && t !== "list" && t !== "form" && t !== "tabIndex" && t !== "download" && t in e)
        try {
          e[t] = n == null ? "" : n;
          break e;
        } catch {
        }
      typeof n == "function" || (n != null && (n !== !1 || t[0] === "a" && t[1] === "r") ? e.setAttribute(t, n) : e.removeAttribute(t));
    }
}
function ar(e) {
  this.l[e.type + !1](W.event ? W.event(e) : e);
}
function lr(e) {
  this.l[e.type + !0](W.event ? W.event(e) : e);
}
function fs(e, t, n, o, s, r, a, l, f) {
  var h, i, p, u, c, d, b, _, g, m, w, k, x, y = t.type;
  if (t.constructor !== void 0)
    return null;
  n.__h != null && (f = n.__h, l = t.__e = n.__e, t.__h = null, r = [l]), (h = W.__b) && h(t);
  try {
    e:
      if (typeof y == "function") {
        if (_ = t.props, g = (h = y.contextType) && o[h.__c], m = h ? g ? g.props.value : h.__ : o, n.__c ? b = (i = t.__c = n.__c).__ = i.__E : ("prototype" in y && y.prototype.render ? t.__c = i = new y(_, m) : (t.__c = i = new Lt(_, m), i.constructor = y, i.render = Ji), g && g.sub(i), i.props = _, i.state || (i.state = {}), i.context = m, i.__n = o, p = i.__d = !0, i.__h = []), i.__s == null && (i.__s = i.state), y.getDerivedStateFromProps != null && (i.__s == i.state && (i.__s = He({}, i.__s)), He(i.__s, y.getDerivedStateFromProps(_, i.__s))), u = i.props, c = i.state, p)
          y.getDerivedStateFromProps == null && i.componentWillMount != null && i.componentWillMount(), i.componentDidMount != null && i.__h.push(i.componentDidMount);
        else {
          if (y.getDerivedStateFromProps == null && _ !== u && i.componentWillReceiveProps != null && i.componentWillReceiveProps(_, m), !i.__e && i.shouldComponentUpdate != null && i.shouldComponentUpdate(_, i.__s, m) === !1 || t.__v === n.__v) {
            i.props = _, i.state = i.__s, t.__v !== n.__v && (i.__d = !1), i.__v = t, t.__e = n.__e, t.__k = n.__k, t.__k.forEach(function(E) {
              E && (E.__ = t);
            }), i.__h.length && a.push(i);
            break e;
          }
          i.componentWillUpdate != null && i.componentWillUpdate(_, i.__s, m), i.componentDidUpdate != null && i.__h.push(function() {
            i.componentDidUpdate(u, c, d);
          });
        }
        if (i.context = m, i.props = _, i.__v = t, i.__P = e, w = W.__r, k = 0, "prototype" in y && y.prototype.render)
          i.state = i.__s, i.__d = !1, w && w(t), h = i.render(i.props, i.state, i.context);
        else
          do
            i.__d = !1, w && w(t), h = i.render(i.props, i.state, i.context), i.state = i.__s;
          while (i.__d && ++k < 25);
        i.state = i.__s, i.getChildContext != null && (o = He(He({}, o), i.getChildContext())), p || i.getSnapshotBeforeUpdate == null || (d = i.getSnapshotBeforeUpdate(u, c)), x = h != null && h.type === Mo && h.key == null ? h.props.children : h, as(e, Array.isArray(x) ? x : [x], t, n, o, s, r, a, l, f), i.base = t.__e, t.__h = null, i.__h.length && a.push(i), b && (i.__E = i.__ = null), i.__e = !1;
      } else
        r == null && t.__v === n.__v ? (t.__k = n.__k, t.__e = n.__e) : t.__e = Xi(n.__e, t, n, o, s, r, a, f);
    (h = W.diffed) && h(t);
  } catch (E) {
    t.__v = null, (f || r != null) && (t.__e = l, t.__h = !!f, r[r.indexOf(l)] = null), W.__e(E, t, n);
  }
}
function Ki(e, t) {
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
function Xi(e, t, n, o, s, r, a, l) {
  var f, h, i, p = n.props, u = t.props, c = t.type, d = 0;
  if (c === "svg" && (s = !0), r != null) {
    for (; d < r.length; d++)
      if ((f = r[d]) && "setAttribute" in f == !!c && (c ? f.localName === c : f.nodeType === 3)) {
        e = f, r[d] = null;
        break;
      }
  }
  if (e == null) {
    if (c === null)
      return document.createTextNode(u);
    e = s ? document.createElementNS("http://www.w3.org/2000/svg", c) : document.createElement(c, u.is && u), r = null, l = !1;
  }
  if (c === null)
    p === u || l && e.data === u || (e.data = u);
  else {
    if (r = r && Ro.call(e.childNodes), h = (p = n.props || os).dangerouslySetInnerHTML, i = u.dangerouslySetInnerHTML, !l) {
      if (r != null)
        for (p = {}, d = 0; d < e.attributes.length; d++)
          p[e.attributes[d].name] = e.attributes[d].value;
      (i || h) && (i && (h && i.__html == h.__html || i.__html === e.innerHTML) || (e.innerHTML = i && i.__html || ""));
    }
    if (Gi(e, u, p, s, l), i)
      t.__k = [];
    else if (d = t.props.children, as(e, Array.isArray(d) ? d : [d], t, n, o, s && c !== "foreignObject", r, a, r ? r[0] : n.__k && mt(n, 0), l), r != null)
      for (d = r.length; d--; )
        r[d] != null && ss(r[d]);
    l || ("value" in u && (d = u.value) !== void 0 && (d !== e.value || c === "progress" && !d || c === "option" && d !== p.value) && Rn(e, "value", d, p.value, !1), "checked" in u && (d = u.checked) !== void 0 && d !== e.checked && Rn(e, "checked", d, p.checked, !1));
  }
  return e;
}
function us(e, t, n) {
  try {
    typeof e == "function" ? e(t) : e.current = t;
  } catch (o) {
    W.__e(o, n);
  }
}
function hs(e, t, n) {
  var o, s;
  if (W.unmount && W.unmount(e), (o = e.ref) && (o.current && o.current !== e.__e || us(o, null, t)), (o = e.__c) != null) {
    if (o.componentWillUnmount)
      try {
        o.componentWillUnmount();
      } catch (r) {
        W.__e(r, t);
      }
    o.base = o.__P = null;
  }
  if (o = e.__k)
    for (s = 0; s < o.length; s++)
      o[s] && hs(o[s], t, typeof e.type != "function");
  n || e.__e == null || ss(e.__e), e.__e = e.__d = void 0;
}
function Ji(e, t, n) {
  return this.constructor(e, n);
}
Ro = rs.slice, W = { __e: function(e, t, n, o) {
  for (var s, r, a; t = t.__; )
    if ((s = t.__c) && !s.__)
      try {
        if ((r = s.constructor) && r.getDerivedStateFromError != null && (s.setState(r.getDerivedStateFromError(e)), a = s.__d), s.componentDidCatch != null && (s.componentDidCatch(e, o || {}), a = s.__d), a)
          return s.__E = s;
      } catch (l) {
        e = l;
      }
  throw e;
} }, ts = 0, ns = function(e) {
  return e != null && e.constructor === void 0;
}, Lt.prototype.setState = function(e, t) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = He({}, this.state), typeof e == "function" && (e = e(He({}, n), this.props)), e && He(n, e), e != null && this.__v && (t && this.__h.push(t), sr(this));
}, Lt.prototype.forceUpdate = function(e) {
  this.__v && (this.__e = !0, e && this.__h.push(e), sr(this));
}, Lt.prototype.render = Mo, Nt = [], Cn.__r = 0;
const T = (...e) => {
  const t = e.map((n) => Array.isArray(n) ? T(...n) : typeof n == "function" ? T(n()) : n !== null && typeof n == "object" ? Object.keys(n).filter((o) => {
    const s = n[o];
    return typeof s == "function" ? !!s() : !!s;
  }).join(" ") : n).filter((n) => typeof n == "string" && n.length);
  return t.length ? t.join(" ") : void 0;
};
function Zi({
  component: e = "div",
  className: t,
  children: n,
  attrs: o
}) {
  return X(e, {
    className: T(t),
    ...o
  }, n);
}
function ds({
  component: e = "a",
  className: t,
  children: n,
  attrs: o,
  url: s,
  disabled: r,
  active: a,
  icon: l,
  text: f,
  target: h,
  trailingIcon: i,
  hint: p,
  style: u,
  onClick: c
}) {
  const d = [
    typeof l == "string" ? /* @__PURE__ */ X("i", {
      class: `icon ${l}`
    }) : l,
    /* @__PURE__ */ X("span", {
      className: "text"
    }, f),
    typeof n == "function" ? n() : n,
    typeof i == "string" ? /* @__PURE__ */ X("i", {
      class: `icon ${i}`
    }) : i
  ];
  return X(e, {
    className: T(t, { disabled: r, active: a }),
    title: p,
    [e === "a" ? "href" : "data-url"]: s,
    [e === "a" ? "target" : "data-target"]: h,
    style: u,
    onClick: c,
    ...o
  }, ...d);
}
function Qi({
  component: e = "div",
  className: t,
  text: n,
  attrs: o,
  children: s,
  style: r,
  onClick: a
}) {
  return X(e, {
    className: T(t),
    style: r,
    onClick: a,
    ...o
  }, n, typeof s == "function" ? s() : s);
}
function ea({
  component: e = "div",
  className: t,
  style: n,
  space: o,
  flex: s,
  attrs: r,
  onClick: a,
  children: l
}) {
  return X(e, {
    className: T(t),
    style: { width: o, height: o, flex: s, ...n },
    onClick: a,
    ...r
  }, l);
}
function ta(e) {
  const {
    tag: t,
    className: n,
    style: o,
    renders: s,
    generateArgs: r = [],
    generatorThis: a,
    generators: l,
    onGenerate: f,
    onRenderItem: h,
    ...i
  } = e, p = [n], u = { ...o }, c = [], d = [];
  return s.forEach((b) => {
    var g;
    const _ = [];
    typeof b == "string" && l && l[b] && (b = l[b]), typeof b == "function" ? f ? _.push(...f.call(a, b, c, ...r)) : _.push(...(g = b.call(a, c, ...r)) != null ? g : []) : _.push(b), _.forEach((m) => {
      var w;
      m != null && (typeof m == "object" && !Vr(m) && ("html" in m || "__html" in m || "className" in m || "style" in m || "attrs" in m || "children" in m) ? m.html ? c.push(
        /* @__PURE__ */ to("div", {
          className: T(m.className),
          style: m.style,
          dangerouslySetInnerHTML: { __html: m.html },
          ...(w = m.attrs) != null ? w : {}
        })
      ) : m.__html ? d.push(m.__html) : (m.style && Object.assign(u, m.style), m.className && p.push(m.className), m.children && c.push(m.children), m.attrs && Object.assign(i, m.attrs)) : c.push(m));
    });
  }), d.length && Object.assign(i, { dangerouslySetInnerHTML: { __html: d } }), [{
    className: T(p),
    style: u,
    ...i
  }, c];
}
function po({
  tag: e = "div",
  ...t
}) {
  const [n, o] = ta(t);
  return to(e, n, ...o);
}
function na(e) {
  return /* @__PURE__ */ X(po, {
    ...e
  });
}
const Bn = class extends Lt {
  constructor() {
    super(...arguments);
    A(this, "ref", Yi());
  }
  get name() {
    var n;
    return (n = this.props.name) != null ? n : this.constructor.name.replace(/([A-Z])/g, "-$1").toLowerCase().replace(/^-/, "");
  }
  componentDidMount() {
    var n, o;
    (o = (n = this.props).afterRender) == null || o.call(n, { menu: this, firstRender: !0 });
  }
  componentDidUpdate() {
    var n, o;
    (o = (n = this.props).afterRender) == null || o.call(n, { menu: this, firstRender: !1 });
  }
  componentWillUnmount() {
    var n, o;
    (o = (n = this.props).beforeDestroy) == null || o.call(n, { menu: this });
  }
  handleItemClick(n, o, s, r) {
    s && s.call(r.target, r);
    const { onClickItem: a } = this.props;
    a && a({ menu: this, item: n, index: o, event: r });
  }
  beforeRender() {
    var s;
    const n = { ...this.props };
    typeof n.items == "function" && (n.items = n.items(this));
    const o = (s = n.beforeRender) == null ? void 0 : s.call(n, { menu: this, options: n });
    return o && Object.assign(n, o), n;
  }
  getItemRenderProps(n, o, s) {
    const { itemProps: r, onClickItem: a } = n, l = { key: s, ...o };
    return r && Object.assign(l, r[o.type || "item"]), (a || o.onClick) && (l.onClick = this.handleItemClick.bind(this, l, s, o.onClick)), l.className = T(l.className), l;
  }
  renderItem(n, o, s) {
    const r = this.getItemRenderProps(n, o, s), { itemRender: a } = n;
    if (a) {
      if (typeof a == "object") {
        const _ = a[o.type || "item"];
        if (_)
          return /* @__PURE__ */ X(_, {
            ...r
          });
      } else if (typeof a == "function") {
        const _ = a.call(this, r, X);
        if (ns(_))
          return _;
        typeof _ == "object" && Object.assign(r, _);
      }
    }
    const { type: l = "item", component: f, key: h = s, rootAttrs: i, rootClass: p, rootStyle: u, rootChildren: c, ...d } = r, b = !f || typeof f == "string" ? this.constructor.ItemComponents && this.constructor.ItemComponents[l] || Bn.ItemComponents[l] : f;
    return Object.assign(d, {
      type: l,
      component: typeof f == "string" ? f : void 0
    }), /* @__PURE__ */ X("li", {
      className: T(`${this.name}-${l}`, p),
      style: u,
      key: h,
      ...i
    }, /* @__PURE__ */ X(b, {
      ...d
    }), typeof c == "function" ? c() : c);
  }
  render() {
    const n = this.beforeRender(), {
      name: o,
      style: s,
      itemProps: r,
      className: a,
      items: l,
      children: f,
      itemRender: h,
      onClickItem: i,
      beforeRender: p,
      afterRender: u,
      beforeDestroy: c,
      ...d
    } = n;
    return /* @__PURE__ */ X("menu", {
      class: T(this.name, a),
      ...d,
      ref: this.ref
    }, l && l.map(this.renderItem.bind(this, n)), f);
  }
};
let ot = Bn;
A(ot, "ItemComponents", {
  divider: Zi,
  item: ds,
  heading: Qi,
  space: ea,
  custom: na
});
function cr({
  ...e
}) {
  return /* @__PURE__ */ X(ds, {
    ...e
  });
}
var Yt, fe, st;
const Fo = class extends ot {
  constructor(n) {
    var o;
    super(n);
    $(this, Yt, /* @__PURE__ */ new Set());
    $(this, fe, void 0);
    $(this, st, (n, o, s) => {
      this.toggleNestedMenu(n, o), s.preventDefault();
    });
    R(this, fe, n.nestedShow === void 0), v(this, fe) && (this.state = { nestedShow: (o = n.defaultNestedShow) != null ? o : {} });
  }
  renderNestedMenu(n) {
    let { items: o } = n;
    if (!!o && (typeof o == "function" && (o = o(n, this)), !!o.length))
      return /* @__PURE__ */ X(Fo, {
        items: o,
        nestedShow: v(this, fe) ? this.state.nestedShow : this.props.nestedShow,
        nestedTrigger: this.props.nestedTrigger,
        controlledMenu: this.props.controlledMenu || this
      });
  }
  getItemRenderProps(n, o, s) {
    var f;
    const r = super.getItemRenderProps(n, o, s), a = r.type || "item", l = (f = r.key) != null ? f : s;
    if (a === "item" && (r == null ? void 0 : r.items)) {
      if (v(this, Yt).add(l), this.isNestedMenuShow(l) && (r.rootChildren = [
        r.rootChildren,
        this.renderNestedMenu(o)
      ], r.component = cr), this.props.nestedTrigger === "hover")
        r.rootAttrs = {
          ...r.rootAttrs,
          onMouseEnter: v(this, st).bind(this, l, !0),
          onMouseLeave: v(this, st).bind(this, l, !1)
        };
      else if (this.props.nestedTrigger === "click") {
        const { onClick: h } = r;
        r.onClick = (i) => {
          v(this, st).call(this, l, void 0, i), h == null || h(i);
        };
      }
    }
    return r;
  }
  isNestedMenuShow(n) {
    const o = v(this, fe) ? this.state.nestedShow : this.props.nestedShow;
    return o && typeof o == "object" ? o[n] : !!o;
  }
  toggleNestedMenu(n, o) {
    const { controlledMenu: s } = this.props;
    if (s)
      return s.toggleNestedMenu(n, o);
    if (!v(this, fe))
      return !1;
    let { nestedShow: r = {} } = this.state;
    if (typeof r == "boolean" && (r === !0 ? r = [...v(this, Yt).values()].reduce((a, l) => (a[l] = !0, a), {}) : r = {}), o === void 0)
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
    !v(this, fe) || this.setState({ nestedShow: !0 });
  }
  hideAllNestedMenu() {
    !v(this, fe) || this.setState({ nestedShow: !1 });
  }
};
let _n = Fo;
Yt = new WeakMap(), fe = new WeakMap(), st = new WeakMap(), A(_n, "ItemComponents", {
  item: cr
});
class oa extends oo {
}
A(oa, "Component", ot);
class ra extends oo {
}
A(ra, "Component", _n);
class sa extends ot {
  beforeRender() {
    const t = super.beforeRender();
    let { hasIcons: n } = t;
    return n === void 0 && (n = t.items.some((o) => o.icon)), n && (t.className = T(t.className, "has-icons")), t;
  }
}
class ps extends oo {
}
A(ps, "Component", sa);
var Ao, I, _s, Pt, fr, vs = {}, gs = [], ia = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function je(e, t) {
  for (var n in t)
    e[n] = t[n];
  return e;
}
function ms(e) {
  var t = e.parentNode;
  t && t.removeChild(e);
}
function ur(e, t, n) {
  var o, s, r, a = {};
  for (r in t)
    r == "key" ? o = t[r] : r == "ref" ? s = t[r] : a[r] = t[r];
  if (arguments.length > 2 && (a.children = arguments.length > 3 ? Ao.call(arguments, 2) : n), typeof e == "function" && e.defaultProps != null)
    for (r in e.defaultProps)
      a[r] === void 0 && (a[r] = e.defaultProps[r]);
  return vn(e, a, o, s, null);
}
function vn(e, t, n, o, s) {
  var r = { type: e, props: t, key: n, ref: o, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: s == null ? ++_s : s };
  return s == null && I.vnode != null && I.vnode(r), r;
}
function Oo(e) {
  return e.children;
}
function Tt(e, t) {
  this.props = e, this.context = t;
}
function yt(e, t) {
  if (t == null)
    return e.__ ? yt(e.__, e.__.__k.indexOf(e) + 1) : null;
  for (var n; t < e.__k.length; t++)
    if ((n = e.__k[t]) != null && n.__e != null)
      return n.__e;
  return typeof e.type == "function" ? yt(e) : null;
}
function ys(e) {
  var t, n;
  if ((e = e.__) != null && e.__c != null) {
    for (e.__e = e.__c.base = null, t = 0; t < e.__k.length; t++)
      if ((n = e.__k[t]) != null && n.__e != null) {
        e.__e = e.__c.base = n.__e;
        break;
      }
    return ys(e);
  }
}
function hr(e) {
  (!e.__d && (e.__d = !0) && Pt.push(e) && !Mn.__r++ || fr !== I.debounceRendering) && ((fr = I.debounceRendering) || setTimeout)(Mn);
}
function Mn() {
  for (var e; Mn.__r = Pt.length; )
    e = Pt.sort(function(t, n) {
      return t.__v.__b - n.__v.__b;
    }), Pt = [], e.some(function(t) {
      var n, o, s, r, a, l;
      t.__d && (a = (r = (n = t).__v).__e, (l = n.__P) && (o = [], (s = je({}, r)).__v = r.__v + 1, xs(l, r, s, n.__n, l.ownerSVGElement !== void 0, r.__h != null ? [a] : null, o, a == null ? yt(r) : a, r.__h), la(o, r), r.__e != a && ys(r)));
    });
}
function bs(e, t, n, o, s, r, a, l, f, h) {
  var i, p, u, c, d, b, _, g = o && o.__k || gs, m = g.length;
  for (n.__k = [], i = 0; i < t.length; i++)
    if ((c = n.__k[i] = (c = t[i]) == null || typeof c == "boolean" ? null : typeof c == "string" || typeof c == "number" || typeof c == "bigint" ? vn(null, c, null, null, c) : Array.isArray(c) ? vn(Oo, { children: c }, null, null, null) : c.__b > 0 ? vn(c.type, c.props, c.key, null, c.__v) : c) != null) {
      if (c.__ = n, c.__b = n.__b + 1, (u = g[i]) === null || u && c.key == u.key && c.type === u.type)
        g[i] = void 0;
      else
        for (p = 0; p < m; p++) {
          if ((u = g[p]) && c.key == u.key && c.type === u.type) {
            g[p] = void 0;
            break;
          }
          u = null;
        }
      xs(e, c, u = u || vs, s, r, a, l, f, h), d = c.__e, (p = c.ref) && u.ref != p && (_ || (_ = []), u.ref && _.push(u.ref, null, c), _.push(p, c.__c || d, c)), d != null ? (b == null && (b = d), typeof c.type == "function" && c.__k === u.__k ? c.__d = f = ws(c, f, e) : f = ks(e, c, u, g, d, f), typeof n.type == "function" && (n.__d = f)) : f && u.__e == f && f.parentNode != e && (f = yt(u));
    }
  for (n.__e = b, i = m; i--; )
    g[i] != null && (typeof n.type == "function" && g[i].__e != null && g[i].__e == n.__d && (n.__d = yt(o, i + 1)), $s(g[i], g[i]));
  if (_)
    for (i = 0; i < _.length; i++)
      Es(_[i], _[++i], _[++i]);
}
function ws(e, t, n) {
  for (var o, s = e.__k, r = 0; s && r < s.length; r++)
    (o = s[r]) && (o.__ = e, t = typeof o.type == "function" ? ws(o, t, n) : ks(n, o, o, s, o.__e, t));
  return t;
}
function ks(e, t, n, o, s, r) {
  var a, l, f;
  if (t.__d !== void 0)
    a = t.__d, t.__d = void 0;
  else if (n == null || s != r || s.parentNode == null)
    e:
      if (r == null || r.parentNode !== e)
        e.appendChild(s), a = null;
      else {
        for (l = r, f = 0; (l = l.nextSibling) && f < o.length; f += 2)
          if (l == s)
            break e;
        e.insertBefore(s, r), a = r;
      }
  return a !== void 0 ? a : s.nextSibling;
}
function aa(e, t, n, o, s) {
  var r;
  for (r in n)
    r === "children" || r === "key" || r in t || An(e, r, null, n[r], o);
  for (r in t)
    s && typeof t[r] != "function" || r === "children" || r === "key" || r === "value" || r === "checked" || n[r] === t[r] || An(e, r, t[r], n[r], o);
}
function dr(e, t, n) {
  t[0] === "-" ? e.setProperty(t, n) : e[t] = n == null ? "" : typeof n != "number" || ia.test(t) ? n : n + "px";
}
function An(e, t, n, o, s) {
  var r;
  e:
    if (t === "style")
      if (typeof n == "string")
        e.style.cssText = n;
      else {
        if (typeof o == "string" && (e.style.cssText = o = ""), o)
          for (t in o)
            n && t in n || dr(e.style, t, "");
        if (n)
          for (t in n)
            o && n[t] === o[t] || dr(e.style, t, n[t]);
      }
    else if (t[0] === "o" && t[1] === "n")
      r = t !== (t = t.replace(/Capture$/, "")), t = t.toLowerCase() in e ? t.toLowerCase().slice(2) : t.slice(2), e.l || (e.l = {}), e.l[t + r] = n, n ? o || e.addEventListener(t, r ? _r : pr, r) : e.removeEventListener(t, r ? _r : pr, r);
    else if (t !== "dangerouslySetInnerHTML") {
      if (s)
        t = t.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
      else if (t !== "href" && t !== "list" && t !== "form" && t !== "tabIndex" && t !== "download" && t in e)
        try {
          e[t] = n == null ? "" : n;
          break e;
        } catch {
        }
      typeof n == "function" || (n != null && (n !== !1 || t[0] === "a" && t[1] === "r") ? e.setAttribute(t, n) : e.removeAttribute(t));
    }
}
function pr(e) {
  this.l[e.type + !1](I.event ? I.event(e) : e);
}
function _r(e) {
  this.l[e.type + !0](I.event ? I.event(e) : e);
}
function xs(e, t, n, o, s, r, a, l, f) {
  var h, i, p, u, c, d, b, _, g, m, w, k, x, y = t.type;
  if (t.constructor !== void 0)
    return null;
  n.__h != null && (f = n.__h, l = t.__e = n.__e, t.__h = null, r = [l]), (h = I.__b) && h(t);
  try {
    e:
      if (typeof y == "function") {
        if (_ = t.props, g = (h = y.contextType) && o[h.__c], m = h ? g ? g.props.value : h.__ : o, n.__c ? b = (i = t.__c = n.__c).__ = i.__E : ("prototype" in y && y.prototype.render ? t.__c = i = new y(_, m) : (t.__c = i = new Tt(_, m), i.constructor = y, i.render = fa), g && g.sub(i), i.props = _, i.state || (i.state = {}), i.context = m, i.__n = o, p = i.__d = !0, i.__h = []), i.__s == null && (i.__s = i.state), y.getDerivedStateFromProps != null && (i.__s == i.state && (i.__s = je({}, i.__s)), je(i.__s, y.getDerivedStateFromProps(_, i.__s))), u = i.props, c = i.state, p)
          y.getDerivedStateFromProps == null && i.componentWillMount != null && i.componentWillMount(), i.componentDidMount != null && i.__h.push(i.componentDidMount);
        else {
          if (y.getDerivedStateFromProps == null && _ !== u && i.componentWillReceiveProps != null && i.componentWillReceiveProps(_, m), !i.__e && i.shouldComponentUpdate != null && i.shouldComponentUpdate(_, i.__s, m) === !1 || t.__v === n.__v) {
            i.props = _, i.state = i.__s, t.__v !== n.__v && (i.__d = !1), i.__v = t, t.__e = n.__e, t.__k = n.__k, t.__k.forEach(function(E) {
              E && (E.__ = t);
            }), i.__h.length && a.push(i);
            break e;
          }
          i.componentWillUpdate != null && i.componentWillUpdate(_, i.__s, m), i.componentDidUpdate != null && i.__h.push(function() {
            i.componentDidUpdate(u, c, d);
          });
        }
        if (i.context = m, i.props = _, i.__v = t, i.__P = e, w = I.__r, k = 0, "prototype" in y && y.prototype.render)
          i.state = i.__s, i.__d = !1, w && w(t), h = i.render(i.props, i.state, i.context);
        else
          do
            i.__d = !1, w && w(t), h = i.render(i.props, i.state, i.context), i.state = i.__s;
          while (i.__d && ++k < 25);
        i.state = i.__s, i.getChildContext != null && (o = je(je({}, o), i.getChildContext())), p || i.getSnapshotBeforeUpdate == null || (d = i.getSnapshotBeforeUpdate(u, c)), x = h != null && h.type === Oo && h.key == null ? h.props.children : h, bs(e, Array.isArray(x) ? x : [x], t, n, o, s, r, a, l, f), i.base = t.__e, t.__h = null, i.__h.length && a.push(i), b && (i.__E = i.__ = null), i.__e = !1;
      } else
        r == null && t.__v === n.__v ? (t.__k = n.__k, t.__e = n.__e) : t.__e = ca(n.__e, t, n, o, s, r, a, f);
    (h = I.diffed) && h(t);
  } catch (E) {
    t.__v = null, (f || r != null) && (t.__e = l, t.__h = !!f, r[r.indexOf(l)] = null), I.__e(E, t, n);
  }
}
function la(e, t) {
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
function ca(e, t, n, o, s, r, a, l) {
  var f, h, i, p = n.props, u = t.props, c = t.type, d = 0;
  if (c === "svg" && (s = !0), r != null) {
    for (; d < r.length; d++)
      if ((f = r[d]) && "setAttribute" in f == !!c && (c ? f.localName === c : f.nodeType === 3)) {
        e = f, r[d] = null;
        break;
      }
  }
  if (e == null) {
    if (c === null)
      return document.createTextNode(u);
    e = s ? document.createElementNS("http://www.w3.org/2000/svg", c) : document.createElement(c, u.is && u), r = null, l = !1;
  }
  if (c === null)
    p === u || l && e.data === u || (e.data = u);
  else {
    if (r = r && Ao.call(e.childNodes), h = (p = n.props || vs).dangerouslySetInnerHTML, i = u.dangerouslySetInnerHTML, !l) {
      if (r != null)
        for (p = {}, d = 0; d < e.attributes.length; d++)
          p[e.attributes[d].name] = e.attributes[d].value;
      (i || h) && (i && (h && i.__html == h.__html || i.__html === e.innerHTML) || (e.innerHTML = i && i.__html || ""));
    }
    if (aa(e, u, p, s, l), i)
      t.__k = [];
    else if (d = t.props.children, bs(e, Array.isArray(d) ? d : [d], t, n, o, s && c !== "foreignObject", r, a, r ? r[0] : n.__k && yt(n, 0), l), r != null)
      for (d = r.length; d--; )
        r[d] != null && ms(r[d]);
    l || ("value" in u && (d = u.value) !== void 0 && (d !== e.value || c === "progress" && !d || c === "option" && d !== p.value) && An(e, "value", d, p.value, !1), "checked" in u && (d = u.checked) !== void 0 && d !== e.checked && An(e, "checked", d, p.checked, !1));
  }
  return e;
}
function Es(e, t, n) {
  try {
    typeof e == "function" ? e(t) : e.current = t;
  } catch (o) {
    I.__e(o, n);
  }
}
function $s(e, t, n) {
  var o, s;
  if (I.unmount && I.unmount(e), (o = e.ref) && (o.current && o.current !== e.__e || Es(o, null, t)), (o = e.__c) != null) {
    if (o.componentWillUnmount)
      try {
        o.componentWillUnmount();
      } catch (r) {
        I.__e(r, t);
      }
    o.base = o.__P = null;
  }
  if (o = e.__k)
    for (s = 0; s < o.length; s++)
      o[s] && $s(o[s], t, typeof e.type != "function");
  n || e.__e == null || ms(e.__e), e.__e = e.__d = void 0;
}
function fa(e, t, n) {
  return this.constructor(e, n);
}
Ao = gs.slice, I = { __e: function(e, t, n, o) {
  for (var s, r, a; t = t.__; )
    if ((s = t.__c) && !s.__)
      try {
        if ((r = s.constructor) && r.getDerivedStateFromError != null && (s.setState(r.getDerivedStateFromError(e)), a = s.__d), s.componentDidCatch != null && (s.componentDidCatch(e, o || {}), a = s.__d), a)
          return s.__E = s;
      } catch (l) {
        e = l;
      }
  throw e;
} }, _s = 0, Tt.prototype.setState = function(e, t) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = je({}, this.state), typeof e == "function" && (e = e(je({}, n), this.props)), e && je(n, e), e != null && this.__v && (t && this.__h.push(t), hr(this));
}, Tt.prototype.forceUpdate = function(e) {
  this.__v && (this.__e = !0, e && this.__h.push(e), hr(this));
}, Tt.prototype.render = Oo, Pt = [], Mn.__r = 0;
var Ke, Xe;
class vr extends Tt {
  constructor(n) {
    var o;
    super(n);
    $(this, Ke, 0);
    $(this, Xe, null);
    A(this, "_handleWheel", (n) => {
      var r;
      const { wheelContainer: o } = this.props, s = n.target;
      if (!(!s || !o) && (typeof o == "string" && s.closest(o) || typeof o == "object")) {
        const a = (this.props.type === "horz" ? n.deltaX : n.deltaY) * ((r = this.props.wheelSpeed) != null ? r : 1);
        this.scrollOffset(a) && n.preventDefault();
      }
    });
    A(this, "_handleMouseMove", (n) => {
      const { dragStart: o } = this.state;
      o && (v(this, Ke) && cancelAnimationFrame(v(this, Ke)), R(this, Ke, requestAnimationFrame(() => {
        const s = this.props.type === "horz" ? n.clientX - o.x : n.clientY - o.y;
        this.scroll(o.offset + s * this.props.scrollSize / this.props.clientSize), R(this, Ke, 0);
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
      const o = n.currentTarget;
      if (!o)
        return;
      const s = o.getBoundingClientRect(), { type: r, clientSize: a, scrollSize: l } = this.props, f = (r === "horz" ? n.clientX - s.left : n.clientY - s.top) - this.barSize / 2;
      this.scroll(f * l / a), n.preventDefault();
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
    const { clientSize: n, scrollSize: o, size: s = 12, minBarSize: r = 3 * s } = this.props;
    return Math.max(Math.round(n * n / o), r);
  }
  componentDidMount() {
    document.addEventListener("mousemove", this._handleMouseMove), document.addEventListener("mouseup", this._handleMouseUp);
    const { wheelContainer: n } = this.props;
    n && (R(this, Xe, typeof n == "string" ? document : n.current), v(this, Xe).addEventListener("wheel", this._handleWheel, { passive: !1 }));
  }
  componentWillUnmount() {
    document.removeEventListener("mousemove", this._handleMouseMove), document.removeEventListener("mouseup", this._handleMouseUp), v(this, Xe) && v(this, Xe).removeEventListener("wheel", this._handleWheel);
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
    const { onScroll: o } = this.props;
    o && o(n, (s = this.props.type) != null ? s : "vert");
  }
  render() {
    const {
      clientSize: n,
      type: o,
      size: s = 12,
      className: r,
      style: a,
      left: l,
      top: f,
      bottom: h,
      right: i
    } = this.props, { maxScrollPos: p, scrollPos: u } = this, { dragStart: c } = this.state, d = {
      left: l,
      top: f,
      bottom: h,
      right: i,
      ...a
    }, b = {};
    return o === "horz" ? (d.height = s, d.width = n, b.width = this.barSize, b.left = Math.round(Math.min(p, u) * (n - b.width) / p)) : (d.width = s, d.height = n, b.height = this.barSize, b.top = Math.round(Math.min(p, u) * (n - b.height) / p)), /* @__PURE__ */ ur("div", {
      className: T("scrollbar", r, {
        "is-vert": o === "vert",
        "is-horz": o === "horz",
        "is-dragging": c
      }),
      style: d,
      onMouseDown: this._handleClick
    }, /* @__PURE__ */ ur("div", {
      className: "scrollbar-bar",
      style: b,
      onMouseDown: this._handleMouseDown
    }));
  }
}
Ke = new WeakMap(), Xe = new WeakMap();
function ua(e) {
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
function ha(e) {
  document.readyState !== "loading" ? e() : document.addEventListener("DOMContentLoaded", e);
}
function da(e, t) {
  const n = typeof e == "string" ? document.querySelector(e) : e;
  if (!n)
    return !1;
  const o = n.getBoundingClientRect(), s = window.innerHeight || document.documentElement.clientHeight, r = window.innerWidth || document.documentElement.clientWidth;
  if (t != null && t.fullyCheck)
    return o.left >= 0 && o.top >= 0 && o.left + o.width <= r && o.top + o.height <= s;
  const a = o.top <= s && o.top + o.height >= 0, l = o.left <= r && o.left + o.width >= 0;
  return a && l;
}
const Nc = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  selectText: ua,
  domReady: ha,
  isElementVisible: da,
  classes: T
}, Symbol.toStringTag, { value: "Module" }));
let pa = (e = 21) => crypto.getRandomValues(new Uint8Array(e)).reduce((t, n) => (n &= 63, n < 36 ? t += n.toString(36) : n < 62 ? t += (n - 26).toString(36).toUpperCase() : n > 62 ? t += "-" : t += "_", t), "");
var Gt, Le, ue, it, at, gn;
const Vo = class {
  constructor(t, n = "local") {
    $(this, at);
    $(this, Gt, void 0);
    $(this, Le, void 0);
    $(this, ue, void 0);
    $(this, it, void 0);
    R(this, Gt, n), R(this, Le, `ZUI_STORE:${t != null ? t : pa()}`), R(this, ue, n === "local" ? localStorage : sessionStorage);
  }
  get type() {
    return v(this, Gt);
  }
  get session() {
    return this.type === "session" ? this : (v(this, it) || R(this, it, new Vo(v(this, Le), "session")), v(this, it));
  }
  get(t, n) {
    const o = v(this, ue).getItem(q(this, at, gn).call(this, t));
    return typeof o == "string" ? JSON.parse(o) : o != null ? o : n;
  }
  set(t, n) {
    if (n == null)
      return this.remove(t);
    v(this, ue).setItem(q(this, at, gn).call(this, t), JSON.stringify(n));
  }
  remove(t) {
    v(this, ue).removeItem(q(this, at, gn).call(this, t));
  }
  each(t) {
    for (let n = 0; n < v(this, ue).length; n++) {
      const o = v(this, ue).key(n);
      if (o != null && o.startsWith(v(this, Le))) {
        const s = v(this, ue).getItem(o);
        typeof s == "string" && t(o.substring(v(this, Le).length + 1), JSON.parse(s));
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
let On = Vo;
Gt = new WeakMap(), Le = new WeakMap(), ue = new WeakMap(), it = new WeakMap(), at = new WeakSet(), gn = function(t) {
  return `${v(this, Le)}:${t}`;
};
const _a = new On("DEFAULT");
function va(e, t = "local") {
  return new On(e, t);
}
Object.assign(_a, { create: va });
var No, B, Ss, Dt, gr, Cs = {}, Rs = [], ga = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function We(e, t) {
  for (var n in t)
    e[n] = t[n];
  return e;
}
function Ms(e) {
  var t = e.parentNode;
  t && t.removeChild(e);
}
function mr(e, t, n) {
  var o, s, r, a = {};
  for (r in t)
    r == "key" ? o = t[r] : r == "ref" ? s = t[r] : a[r] = t[r];
  if (arguments.length > 2 && (a.children = arguments.length > 3 ? No.call(arguments, 2) : n), typeof e == "function" && e.defaultProps != null)
    for (r in e.defaultProps)
      a[r] === void 0 && (a[r] = e.defaultProps[r]);
  return mn(e, a, o, s, null);
}
function mn(e, t, n, o, s) {
  var r = { type: e, props: t, key: n, ref: o, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: s == null ? ++Ss : s };
  return s == null && B.vnode != null && B.vnode(r), r;
}
function Lo(e) {
  return e.children;
}
function Ht(e, t) {
  this.props = e, this.context = t;
}
function bt(e, t) {
  if (t == null)
    return e.__ ? bt(e.__, e.__.__k.indexOf(e) + 1) : null;
  for (var n; t < e.__k.length; t++)
    if ((n = e.__k[t]) != null && n.__e != null)
      return n.__e;
  return typeof e.type == "function" ? bt(e) : null;
}
function As(e) {
  var t, n;
  if ((e = e.__) != null && e.__c != null) {
    for (e.__e = e.__c.base = null, t = 0; t < e.__k.length; t++)
      if ((n = e.__k[t]) != null && n.__e != null) {
        e.__e = e.__c.base = n.__e;
        break;
      }
    return As(e);
  }
}
function yr(e) {
  (!e.__d && (e.__d = !0) && Dt.push(e) && !Nn.__r++ || gr !== B.debounceRendering) && ((gr = B.debounceRendering) || setTimeout)(Nn);
}
function Nn() {
  for (var e; Nn.__r = Dt.length; )
    e = Dt.sort(function(t, n) {
      return t.__v.__b - n.__v.__b;
    }), Dt = [], e.some(function(t) {
      var n, o, s, r, a, l;
      t.__d && (a = (r = (n = t).__v).__e, (l = n.__P) && (o = [], (s = We({}, r)).__v = r.__v + 1, Ps(l, r, s, n.__n, l.ownerSVGElement !== void 0, r.__h != null ? [a] : null, o, a == null ? bt(r) : a, r.__h), ya(o, r), r.__e != a && As(r)));
    });
}
function Os(e, t, n, o, s, r, a, l, f, h) {
  var i, p, u, c, d, b, _, g = o && o.__k || Rs, m = g.length;
  for (n.__k = [], i = 0; i < t.length; i++)
    if ((c = n.__k[i] = (c = t[i]) == null || typeof c == "boolean" ? null : typeof c == "string" || typeof c == "number" || typeof c == "bigint" ? mn(null, c, null, null, c) : Array.isArray(c) ? mn(Lo, { children: c }, null, null, null) : c.__b > 0 ? mn(c.type, c.props, c.key, null, c.__v) : c) != null) {
      if (c.__ = n, c.__b = n.__b + 1, (u = g[i]) === null || u && c.key == u.key && c.type === u.type)
        g[i] = void 0;
      else
        for (p = 0; p < m; p++) {
          if ((u = g[p]) && c.key == u.key && c.type === u.type) {
            g[p] = void 0;
            break;
          }
          u = null;
        }
      Ps(e, c, u = u || Cs, s, r, a, l, f, h), d = c.__e, (p = c.ref) && u.ref != p && (_ || (_ = []), u.ref && _.push(u.ref, null, c), _.push(p, c.__c || d, c)), d != null ? (b == null && (b = d), typeof c.type == "function" && c.__k === u.__k ? c.__d = f = Ns(c, f, e) : f = Ls(e, c, u, g, d, f), typeof n.type == "function" && (n.__d = f)) : f && u.__e == f && f.parentNode != e && (f = bt(u));
    }
  for (n.__e = b, i = m; i--; )
    g[i] != null && (typeof n.type == "function" && g[i].__e != null && g[i].__e == n.__d && (n.__d = bt(o, i + 1)), Ds(g[i], g[i]));
  if (_)
    for (i = 0; i < _.length; i++)
      Ts(_[i], _[++i], _[++i]);
}
function Ns(e, t, n) {
  for (var o, s = e.__k, r = 0; s && r < s.length; r++)
    (o = s[r]) && (o.__ = e, t = typeof o.type == "function" ? Ns(o, t, n) : Ls(n, o, o, s, o.__e, t));
  return t;
}
function Ls(e, t, n, o, s, r) {
  var a, l, f;
  if (t.__d !== void 0)
    a = t.__d, t.__d = void 0;
  else if (n == null || s != r || s.parentNode == null)
    e:
      if (r == null || r.parentNode !== e)
        e.appendChild(s), a = null;
      else {
        for (l = r, f = 0; (l = l.nextSibling) && f < o.length; f += 2)
          if (l == s)
            break e;
        e.insertBefore(s, r), a = r;
      }
  return a !== void 0 ? a : s.nextSibling;
}
function ma(e, t, n, o, s) {
  var r;
  for (r in n)
    r === "children" || r === "key" || r in t || Ln(e, r, null, n[r], o);
  for (r in t)
    s && typeof t[r] != "function" || r === "children" || r === "key" || r === "value" || r === "checked" || n[r] === t[r] || Ln(e, r, t[r], n[r], o);
}
function br(e, t, n) {
  t[0] === "-" ? e.setProperty(t, n) : e[t] = n == null ? "" : typeof n != "number" || ga.test(t) ? n : n + "px";
}
function Ln(e, t, n, o, s) {
  var r;
  e:
    if (t === "style")
      if (typeof n == "string")
        e.style.cssText = n;
      else {
        if (typeof o == "string" && (e.style.cssText = o = ""), o)
          for (t in o)
            n && t in n || br(e.style, t, "");
        if (n)
          for (t in n)
            o && n[t] === o[t] || br(e.style, t, n[t]);
      }
    else if (t[0] === "o" && t[1] === "n")
      r = t !== (t = t.replace(/Capture$/, "")), t = t.toLowerCase() in e ? t.toLowerCase().slice(2) : t.slice(2), e.l || (e.l = {}), e.l[t + r] = n, n ? o || e.addEventListener(t, r ? kr : wr, r) : e.removeEventListener(t, r ? kr : wr, r);
    else if (t !== "dangerouslySetInnerHTML") {
      if (s)
        t = t.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
      else if (t !== "href" && t !== "list" && t !== "form" && t !== "tabIndex" && t !== "download" && t in e)
        try {
          e[t] = n == null ? "" : n;
          break e;
        } catch {
        }
      typeof n == "function" || (n != null && (n !== !1 || t[0] === "a" && t[1] === "r") ? e.setAttribute(t, n) : e.removeAttribute(t));
    }
}
function wr(e) {
  this.l[e.type + !1](B.event ? B.event(e) : e);
}
function kr(e) {
  this.l[e.type + !0](B.event ? B.event(e) : e);
}
function Ps(e, t, n, o, s, r, a, l, f) {
  var h, i, p, u, c, d, b, _, g, m, w, k, x, y = t.type;
  if (t.constructor !== void 0)
    return null;
  n.__h != null && (f = n.__h, l = t.__e = n.__e, t.__h = null, r = [l]), (h = B.__b) && h(t);
  try {
    e:
      if (typeof y == "function") {
        if (_ = t.props, g = (h = y.contextType) && o[h.__c], m = h ? g ? g.props.value : h.__ : o, n.__c ? b = (i = t.__c = n.__c).__ = i.__E : ("prototype" in y && y.prototype.render ? t.__c = i = new y(_, m) : (t.__c = i = new Ht(_, m), i.constructor = y, i.render = wa), g && g.sub(i), i.props = _, i.state || (i.state = {}), i.context = m, i.__n = o, p = i.__d = !0, i.__h = []), i.__s == null && (i.__s = i.state), y.getDerivedStateFromProps != null && (i.__s == i.state && (i.__s = We({}, i.__s)), We(i.__s, y.getDerivedStateFromProps(_, i.__s))), u = i.props, c = i.state, p)
          y.getDerivedStateFromProps == null && i.componentWillMount != null && i.componentWillMount(), i.componentDidMount != null && i.__h.push(i.componentDidMount);
        else {
          if (y.getDerivedStateFromProps == null && _ !== u && i.componentWillReceiveProps != null && i.componentWillReceiveProps(_, m), !i.__e && i.shouldComponentUpdate != null && i.shouldComponentUpdate(_, i.__s, m) === !1 || t.__v === n.__v) {
            i.props = _, i.state = i.__s, t.__v !== n.__v && (i.__d = !1), i.__v = t, t.__e = n.__e, t.__k = n.__k, t.__k.forEach(function(E) {
              E && (E.__ = t);
            }), i.__h.length && a.push(i);
            break e;
          }
          i.componentWillUpdate != null && i.componentWillUpdate(_, i.__s, m), i.componentDidUpdate != null && i.__h.push(function() {
            i.componentDidUpdate(u, c, d);
          });
        }
        if (i.context = m, i.props = _, i.__v = t, i.__P = e, w = B.__r, k = 0, "prototype" in y && y.prototype.render)
          i.state = i.__s, i.__d = !1, w && w(t), h = i.render(i.props, i.state, i.context);
        else
          do
            i.__d = !1, w && w(t), h = i.render(i.props, i.state, i.context), i.state = i.__s;
          while (i.__d && ++k < 25);
        i.state = i.__s, i.getChildContext != null && (o = We(We({}, o), i.getChildContext())), p || i.getSnapshotBeforeUpdate == null || (d = i.getSnapshotBeforeUpdate(u, c)), x = h != null && h.type === Lo && h.key == null ? h.props.children : h, Os(e, Array.isArray(x) ? x : [x], t, n, o, s, r, a, l, f), i.base = t.__e, t.__h = null, i.__h.length && a.push(i), b && (i.__E = i.__ = null), i.__e = !1;
      } else
        r == null && t.__v === n.__v ? (t.__k = n.__k, t.__e = n.__e) : t.__e = ba(n.__e, t, n, o, s, r, a, f);
    (h = B.diffed) && h(t);
  } catch (E) {
    t.__v = null, (f || r != null) && (t.__e = l, t.__h = !!f, r[r.indexOf(l)] = null), B.__e(E, t, n);
  }
}
function ya(e, t) {
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
function ba(e, t, n, o, s, r, a, l) {
  var f, h, i, p = n.props, u = t.props, c = t.type, d = 0;
  if (c === "svg" && (s = !0), r != null) {
    for (; d < r.length; d++)
      if ((f = r[d]) && "setAttribute" in f == !!c && (c ? f.localName === c : f.nodeType === 3)) {
        e = f, r[d] = null;
        break;
      }
  }
  if (e == null) {
    if (c === null)
      return document.createTextNode(u);
    e = s ? document.createElementNS("http://www.w3.org/2000/svg", c) : document.createElement(c, u.is && u), r = null, l = !1;
  }
  if (c === null)
    p === u || l && e.data === u || (e.data = u);
  else {
    if (r = r && No.call(e.childNodes), h = (p = n.props || Cs).dangerouslySetInnerHTML, i = u.dangerouslySetInnerHTML, !l) {
      if (r != null)
        for (p = {}, d = 0; d < e.attributes.length; d++)
          p[e.attributes[d].name] = e.attributes[d].value;
      (i || h) && (i && (h && i.__html == h.__html || i.__html === e.innerHTML) || (e.innerHTML = i && i.__html || ""));
    }
    if (ma(e, u, p, s, l), i)
      t.__k = [];
    else if (d = t.props.children, Os(e, Array.isArray(d) ? d : [d], t, n, o, s && c !== "foreignObject", r, a, r ? r[0] : n.__k && bt(n, 0), l), r != null)
      for (d = r.length; d--; )
        r[d] != null && Ms(r[d]);
    l || ("value" in u && (d = u.value) !== void 0 && (d !== e.value || c === "progress" && !d || c === "option" && d !== p.value) && Ln(e, "value", d, p.value, !1), "checked" in u && (d = u.checked) !== void 0 && d !== e.checked && Ln(e, "checked", d, p.checked, !1));
  }
  return e;
}
function Ts(e, t, n) {
  try {
    typeof e == "function" ? e(t) : e.current = t;
  } catch (o) {
    B.__e(o, n);
  }
}
function Ds(e, t, n) {
  var o, s;
  if (B.unmount && B.unmount(e), (o = e.ref) && (o.current && o.current !== e.__e || Ts(o, null, t)), (o = e.__c) != null) {
    if (o.componentWillUnmount)
      try {
        o.componentWillUnmount();
      } catch (r) {
        B.__e(r, t);
      }
    o.base = o.__P = null;
  }
  if (o = e.__k)
    for (s = 0; s < o.length; s++)
      o[s] && Ds(o[s], t, typeof e.type != "function");
  n || e.__e == null || Ms(e.__e), e.__e = e.__d = void 0;
}
function wa(e, t, n) {
  return this.constructor(e, n);
}
No = Rs.slice, B = { __e: function(e, t, n, o) {
  for (var s, r, a; t = t.__; )
    if ((s = t.__c) && !s.__)
      try {
        if ((r = s.constructor) && r.getDerivedStateFromError != null && (s.setState(r.getDerivedStateFromError(e)), a = s.__d), s.componentDidCatch != null && (s.componentDidCatch(e, o || {}), a = s.__d), a)
          return s.__E = s;
      } catch (l) {
        e = l;
      }
  throw e;
} }, Ss = 0, Ht.prototype.setState = function(e, t) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = We({}, this.state), typeof e == "function" && (e = e(We({}, n), this.props)), e && We(n, e), e != null && this.__v && (t && this.__h.push(t), yr(this));
}, Ht.prototype.forceUpdate = function(e) {
  this.__v && (this.__e = !0, e && this.__h.push(e), yr(this));
}, Ht.prototype.render = Lo, Dt = [], Nn.__r = 0;
class Lc extends Ht {
  render() {
    const { size: t, rounded: n, className: o, style: s, src: r, text: a, children: l, ...f } = this.props, h = [o], i = { ...s };
    let p = null;
    return r ? p = /* @__PURE__ */ mr("img", {
      src: r,
      alt: a
    }) : p = a, typeof t == "number" ? (i.width = t, i.height = t) : typeof t == "string" && h.push(`avatar-${t}`), typeof n == "string" && h.push(`rounded-${n}`), /* @__PURE__ */ mr("div", {
      className: T(h),
      style: i,
      ...f
    }, p, l);
  }
}
function ka() {
  const e = typeof window.innerWidth == "number" ? window.innerWidth - document.body.clientWidth : 17;
  document.body.style.paddingRight = `${e}px`, document.body.classList.add("modal-open");
}
function xa() {
  document.body.style.paddingRight = "", document.body.classList.remove("modal-open");
}
function Ea(e, t) {
  ka(), e.classList.add("block"), xr(e, t), e.onclick = (n) => $a(n, e), window.addEventListener("resize", () => {
    xr(e, t);
  });
}
function Hs(e) {
  var t;
  xa(), (t = e.classList) == null || t.remove("block");
}
function xr(e, t) {
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
function $a(e, t) {
  e.target.closest("[data-dismiss=modal]") && (e.stopPropagation(), Hs(t));
}
function Sa(e) {
  var t, n;
  return e instanceof HTMLAnchorElement ? (n = (t = (e.href || "").match(/(?<selector>#\S+)$/)) == null ? void 0 : t.groups) == null ? void 0 : n.selector : e.dataset.target;
}
document.addEventListener("click", (e) => {
  const t = e.target, n = t.closest("[data-toggle=modal]");
  if (n) {
    const o = Sa(n);
    if (!o)
      return;
    const s = document.querySelector(o);
    if (!s)
      return;
    Ea(s, n.dataset.position || "fit");
  } else
    t.className.includes("modal") && Hs(t);
});
function oe(e) {
  if (e == null)
    return window;
  if (e.toString() !== "[object Window]") {
    var t = e.ownerDocument;
    return t && t.defaultView || window;
  }
  return e;
}
function et(e) {
  var t = oe(e).Element;
  return e instanceof t || e instanceof Element;
}
function ne(e) {
  var t = oe(e).HTMLElement;
  return e instanceof t || e instanceof HTMLElement;
}
function Po(e) {
  if (typeof ShadowRoot > "u")
    return !1;
  var t = oe(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot;
}
var Qe = Math.max, Pn = Math.min, wt = Math.round;
function _o() {
  var e = navigator.userAgentData;
  return e != null && e.brands ? e.brands.map(function(t) {
    return t.brand + "/" + t.version;
  }).join(" ") : navigator.userAgent;
}
function js() {
  return !/^((?!chrome|android).)*safari/i.test(_o());
}
function kt(e, t, n) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  var o = e.getBoundingClientRect(), s = 1, r = 1;
  t && ne(e) && (s = e.offsetWidth > 0 && wt(o.width) / e.offsetWidth || 1, r = e.offsetHeight > 0 && wt(o.height) / e.offsetHeight || 1);
  var a = et(e) ? oe(e) : window, l = a.visualViewport, f = !js() && n, h = (o.left + (f && l ? l.offsetLeft : 0)) / s, i = (o.top + (f && l ? l.offsetTop : 0)) / r, p = o.width / s, u = o.height / r;
  return {
    width: p,
    height: u,
    top: i,
    right: h + p,
    bottom: i + u,
    left: h,
    x: h,
    y: i
  };
}
function To(e) {
  var t = oe(e), n = t.pageXOffset, o = t.pageYOffset;
  return {
    scrollLeft: n,
    scrollTop: o
  };
}
function Ca(e) {
  return {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  };
}
function Ra(e) {
  return e === oe(e) || !ne(e) ? To(e) : Ca(e);
}
function ve(e) {
  return e ? (e.nodeName || "").toLowerCase() : null;
}
function ze(e) {
  return ((et(e) ? e.ownerDocument : e.document) || window.document).documentElement;
}
function Do(e) {
  return kt(ze(e)).left + To(e).scrollLeft;
}
function le(e) {
  return oe(e).getComputedStyle(e);
}
function Ho(e) {
  var t = le(e), n = t.overflow, o = t.overflowX, s = t.overflowY;
  return /auto|scroll|overlay|hidden/.test(n + s + o);
}
function Ma(e) {
  var t = e.getBoundingClientRect(), n = wt(t.width) / e.offsetWidth || 1, o = wt(t.height) / e.offsetHeight || 1;
  return n !== 1 || o !== 1;
}
function Aa(e, t, n) {
  n === void 0 && (n = !1);
  var o = ne(t), s = ne(t) && Ma(t), r = ze(t), a = kt(e, s, n), l = {
    scrollLeft: 0,
    scrollTop: 0
  }, f = {
    x: 0,
    y: 0
  };
  return (o || !o && !n) && ((ve(t) !== "body" || Ho(r)) && (l = Ra(t)), ne(t) ? (f = kt(t, !0), f.x += t.clientLeft, f.y += t.clientTop) : r && (f.x = Do(r))), {
    x: a.left + l.scrollLeft - f.x,
    y: a.top + l.scrollTop - f.y,
    width: a.width,
    height: a.height
  };
}
function Ws(e) {
  var t = kt(e), n = e.offsetWidth, o = e.offsetHeight;
  return Math.abs(t.width - n) <= 1 && (n = t.width), Math.abs(t.height - o) <= 1 && (o = t.height), {
    x: e.offsetLeft,
    y: e.offsetTop,
    width: n,
    height: o
  };
}
function ro(e) {
  return ve(e) === "html" ? e : e.assignedSlot || e.parentNode || (Po(e) ? e.host : null) || ze(e);
}
function Is(e) {
  return ["html", "body", "#document"].indexOf(ve(e)) >= 0 ? e.ownerDocument.body : ne(e) && Ho(e) ? e : Is(ro(e));
}
function jt(e, t) {
  var n;
  t === void 0 && (t = []);
  var o = Is(e), s = o === ((n = e.ownerDocument) == null ? void 0 : n.body), r = oe(o), a = s ? [r].concat(r.visualViewport || [], Ho(o) ? o : []) : o, l = t.concat(a);
  return s ? l : l.concat(jt(ro(a)));
}
function Oa(e) {
  return ["table", "td", "th"].indexOf(ve(e)) >= 0;
}
function Er(e) {
  return !ne(e) || le(e).position === "fixed" ? null : e.offsetParent;
}
function Na(e) {
  var t = /firefox/i.test(_o()), n = /Trident/i.test(_o());
  if (n && ne(e)) {
    var o = le(e);
    if (o.position === "fixed")
      return null;
  }
  var s = ro(e);
  for (Po(s) && (s = s.host); ne(s) && ["html", "body"].indexOf(ve(s)) < 0; ) {
    var r = le(s);
    if (r.transform !== "none" || r.perspective !== "none" || r.contain === "paint" || ["transform", "perspective"].indexOf(r.willChange) !== -1 || t && r.willChange === "filter" || t && r.filter && r.filter !== "none")
      return s;
    s = s.parentNode;
  }
  return null;
}
function so(e) {
  for (var t = oe(e), n = Er(e); n && Oa(n) && le(n).position === "static"; )
    n = Er(n);
  return n && (ve(n) === "html" || ve(n) === "body" && le(n).position === "static") ? t : n || Na(e) || t;
}
var ae = "top", ge = "bottom", Ue = "right", Se = "left", io = "auto", ao = [ae, ge, Ue, Se], xt = "start", Bt = "end", La = "clippingParents", Bs = "viewport", Mt = "popper", Pa = "reference", $r = /* @__PURE__ */ ao.reduce(function(e, t) {
  return e.concat([t + "-" + xt, t + "-" + Bt]);
}, []), Ta = /* @__PURE__ */ [].concat(ao, [io]).reduce(function(e, t) {
  return e.concat([t, t + "-" + xt, t + "-" + Bt]);
}, []), Da = "beforeRead", Ha = "read", ja = "afterRead", Wa = "beforeMain", Ia = "main", Ba = "afterMain", Ua = "beforeWrite", za = "write", Fa = "afterWrite", vo = [Da, Ha, ja, Wa, Ia, Ba, Ua, za, Fa];
function Va(e) {
  var t = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Set(), o = [];
  e.forEach(function(r) {
    t.set(r.name, r);
  });
  function s(r) {
    n.add(r.name);
    var a = [].concat(r.requires || [], r.requiresIfExists || []);
    a.forEach(function(l) {
      if (!n.has(l)) {
        var f = t.get(l);
        f && s(f);
      }
    }), o.push(r);
  }
  return e.forEach(function(r) {
    n.has(r.name) || s(r);
  }), o;
}
function qa(e) {
  var t = Va(e);
  return vo.reduce(function(n, o) {
    return n.concat(t.filter(function(s) {
      return s.phase === o;
    }));
  }, []);
}
function Ya(e) {
  var t;
  return function() {
    return t || (t = new Promise(function(n) {
      Promise.resolve().then(function() {
        t = void 0, n(e());
      });
    })), t;
  };
}
function Oe(e) {
  for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), o = 1; o < t; o++)
    n[o - 1] = arguments[o];
  return [].concat(n).reduce(function(s, r) {
    return s.replace(/%s/, r);
  }, e);
}
var Ye = 'Popper: modifier "%s" provided an invalid %s property, expected %s but got %s', Ga = 'Popper: modifier "%s" requires "%s", but "%s" modifier is not available', Sr = ["name", "enabled", "phase", "fn", "effect", "requires", "options"];
function Ka(e) {
  e.forEach(function(t) {
    [].concat(Object.keys(t), Sr).filter(function(n, o, s) {
      return s.indexOf(n) === o;
    }).forEach(function(n) {
      switch (n) {
        case "name":
          typeof t.name != "string" && console.error(Oe(Ye, String(t.name), '"name"', '"string"', '"' + String(t.name) + '"'));
          break;
        case "enabled":
          typeof t.enabled != "boolean" && console.error(Oe(Ye, t.name, '"enabled"', '"boolean"', '"' + String(t.enabled) + '"'));
          break;
        case "phase":
          vo.indexOf(t.phase) < 0 && console.error(Oe(Ye, t.name, '"phase"', "either " + vo.join(", "), '"' + String(t.phase) + '"'));
          break;
        case "fn":
          typeof t.fn != "function" && console.error(Oe(Ye, t.name, '"fn"', '"function"', '"' + String(t.fn) + '"'));
          break;
        case "effect":
          t.effect != null && typeof t.effect != "function" && console.error(Oe(Ye, t.name, '"effect"', '"function"', '"' + String(t.fn) + '"'));
          break;
        case "requires":
          t.requires != null && !Array.isArray(t.requires) && console.error(Oe(Ye, t.name, '"requires"', '"array"', '"' + String(t.requires) + '"'));
          break;
        case "requiresIfExists":
          Array.isArray(t.requiresIfExists) || console.error(Oe(Ye, t.name, '"requiresIfExists"', '"array"', '"' + String(t.requiresIfExists) + '"'));
          break;
        case "options":
        case "data":
          break;
        default:
          console.error('PopperJS: an invalid property has been provided to the "' + t.name + '" modifier, valid properties are ' + Sr.map(function(o) {
            return '"' + o + '"';
          }).join(", ") + '; but "' + n + '" was provided.');
      }
      t.requires && t.requires.forEach(function(o) {
        e.find(function(s) {
          return s.name === o;
        }) == null && console.error(Oe(Ga, String(t.name), o, o));
      });
    });
  });
}
function Xa(e, t) {
  var n = /* @__PURE__ */ new Set();
  return e.filter(function(o) {
    var s = t(o);
    if (!n.has(s))
      return n.add(s), !0;
  });
}
function Ce(e) {
  return e.split("-")[0];
}
function Ja(e) {
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
function Za(e, t) {
  var n = oe(e), o = ze(e), s = n.visualViewport, r = o.clientWidth, a = o.clientHeight, l = 0, f = 0;
  if (s) {
    r = s.width, a = s.height;
    var h = js();
    (h || !h && t === "fixed") && (l = s.offsetLeft, f = s.offsetTop);
  }
  return {
    width: r,
    height: a,
    x: l + Do(e),
    y: f
  };
}
function Qa(e) {
  var t, n = ze(e), o = To(e), s = (t = e.ownerDocument) == null ? void 0 : t.body, r = Qe(n.scrollWidth, n.clientWidth, s ? s.scrollWidth : 0, s ? s.clientWidth : 0), a = Qe(n.scrollHeight, n.clientHeight, s ? s.scrollHeight : 0, s ? s.clientHeight : 0), l = -o.scrollLeft + Do(e), f = -o.scrollTop;
  return le(s || n).direction === "rtl" && (l += Qe(n.clientWidth, s ? s.clientWidth : 0) - r), {
    width: r,
    height: a,
    x: l,
    y: f
  };
}
function el(e, t) {
  var n = t.getRootNode && t.getRootNode();
  if (e.contains(t))
    return !0;
  if (n && Po(n)) {
    var o = t;
    do {
      if (o && e.isSameNode(o))
        return !0;
      o = o.parentNode || o.host;
    } while (o);
  }
  return !1;
}
function go(e) {
  return Object.assign({}, e, {
    left: e.x,
    top: e.y,
    right: e.x + e.width,
    bottom: e.y + e.height
  });
}
function tl(e, t) {
  var n = kt(e, !1, t === "fixed");
  return n.top = n.top + e.clientTop, n.left = n.left + e.clientLeft, n.bottom = n.top + e.clientHeight, n.right = n.left + e.clientWidth, n.width = e.clientWidth, n.height = e.clientHeight, n.x = n.left, n.y = n.top, n;
}
function Cr(e, t, n) {
  return t === Bs ? go(Za(e, n)) : et(t) ? tl(t, n) : go(Qa(ze(e)));
}
function nl(e) {
  var t = jt(ro(e)), n = ["absolute", "fixed"].indexOf(le(e).position) >= 0, o = n && ne(e) ? so(e) : e;
  return et(o) ? t.filter(function(s) {
    return et(s) && el(s, o) && ve(s) !== "body";
  }) : [];
}
function ol(e, t, n, o) {
  var s = t === "clippingParents" ? nl(e) : [].concat(t), r = [].concat(s, [n]), a = r[0], l = r.reduce(function(f, h) {
    var i = Cr(e, h, o);
    return f.top = Qe(i.top, f.top), f.right = Pn(i.right, f.right), f.bottom = Pn(i.bottom, f.bottom), f.left = Qe(i.left, f.left), f;
  }, Cr(e, a, o));
  return l.width = l.right - l.left, l.height = l.bottom - l.top, l.x = l.left, l.y = l.top, l;
}
function Et(e) {
  return e.split("-")[1];
}
function Us(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function zs(e) {
  var t = e.reference, n = e.element, o = e.placement, s = o ? Ce(o) : null, r = o ? Et(o) : null, a = t.x + t.width / 2 - n.width / 2, l = t.y + t.height / 2 - n.height / 2, f;
  switch (s) {
    case ae:
      f = {
        x: a,
        y: t.y - n.height
      };
      break;
    case ge:
      f = {
        x: a,
        y: t.y + t.height
      };
      break;
    case Ue:
      f = {
        x: t.x + t.width,
        y: l
      };
      break;
    case Se:
      f = {
        x: t.x - n.width,
        y: l
      };
      break;
    default:
      f = {
        x: t.x,
        y: t.y
      };
  }
  var h = s ? Us(s) : null;
  if (h != null) {
    var i = h === "y" ? "height" : "width";
    switch (r) {
      case xt:
        f[h] = f[h] - (t[i] / 2 - n[i] / 2);
        break;
      case Bt:
        f[h] = f[h] + (t[i] / 2 - n[i] / 2);
        break;
    }
  }
  return f;
}
function Fs() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
function rl(e) {
  return Object.assign({}, Fs(), e);
}
function sl(e, t) {
  return t.reduce(function(n, o) {
    return n[o] = e, n;
  }, {});
}
function jo(e, t) {
  t === void 0 && (t = {});
  var n = t, o = n.placement, s = o === void 0 ? e.placement : o, r = n.strategy, a = r === void 0 ? e.strategy : r, l = n.boundary, f = l === void 0 ? La : l, h = n.rootBoundary, i = h === void 0 ? Bs : h, p = n.elementContext, u = p === void 0 ? Mt : p, c = n.altBoundary, d = c === void 0 ? !1 : c, b = n.padding, _ = b === void 0 ? 0 : b, g = rl(typeof _ != "number" ? _ : sl(_, ao)), m = u === Mt ? Pa : Mt, w = e.rects.popper, k = e.elements[d ? m : u], x = ol(et(k) ? k : k.contextElement || ze(e.elements.popper), f, i, a), y = kt(e.elements.reference), E = zs({
    reference: y,
    element: w,
    strategy: "absolute",
    placement: s
  }), S = go(Object.assign({}, w, E)), O = u === Mt ? S : y, L = {
    top: x.top - O.top + g.top,
    bottom: O.bottom - x.bottom + g.bottom,
    left: x.left - O.left + g.left,
    right: O.right - x.right + g.right
  }, N = e.modifiersData.offset;
  if (u === Mt && N) {
    var V = N[s];
    Object.keys(L).forEach(function(z) {
      var re = [Ue, ge].indexOf(z) >= 0 ? 1 : -1, Y = [ae, ge].indexOf(z) >= 0 ? "y" : "x";
      L[z] += V[Y] * re;
    });
  }
  return L;
}
var Rr = "Popper: Invalid reference or popper argument provided. They must be either a DOM element or virtual element.", il = "Popper: An infinite loop in the modifiers cycle has been detected! The cycle has been interrupted to prevent a browser crash.", Mr = {
  placement: "bottom",
  modifiers: [],
  strategy: "absolute"
};
function Ar() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return !t.some(function(o) {
    return !(o && typeof o.getBoundingClientRect == "function");
  });
}
function al(e) {
  e === void 0 && (e = {});
  var t = e, n = t.defaultModifiers, o = n === void 0 ? [] : n, s = t.defaultOptions, r = s === void 0 ? Mr : s;
  return function(l, f, h) {
    h === void 0 && (h = r);
    var i = {
      placement: "bottom",
      orderedModifiers: [],
      options: Object.assign({}, Mr, r),
      modifiersData: {},
      elements: {
        reference: l,
        popper: f
      },
      attributes: {},
      styles: {}
    }, p = [], u = !1, c = {
      state: i,
      setOptions: function(g) {
        var m = typeof g == "function" ? g(i.options) : g;
        b(), i.options = Object.assign({}, r, i.options, m), i.scrollParents = {
          reference: et(l) ? jt(l) : l.contextElement ? jt(l.contextElement) : [],
          popper: jt(f)
        };
        var w = qa(Ja([].concat(o, i.options.modifiers)));
        if (i.orderedModifiers = w.filter(function(N) {
          return N.enabled;
        }), process.env.NODE_ENV !== "production") {
          var k = Xa([].concat(w, i.options.modifiers), function(N) {
            var V = N.name;
            return V;
          });
          if (Ka(k), Ce(i.options.placement) === io) {
            var x = i.orderedModifiers.find(function(N) {
              var V = N.name;
              return V === "flip";
            });
            x || console.error(['Popper: "auto" placements require the "flip" modifier be', "present and enabled to work."].join(" "));
          }
          var y = le(f), E = y.marginTop, S = y.marginRight, O = y.marginBottom, L = y.marginLeft;
          [E, S, O, L].some(function(N) {
            return parseFloat(N);
          }) && console.warn(['Popper: CSS "margin" styles cannot be used to apply padding', "between the popper and its reference element or boundary.", "To replicate margin, use the `offset` modifier, as well as", "the `padding` option in the `preventOverflow` and `flip`", "modifiers."].join(" "));
        }
        return d(), c.update();
      },
      forceUpdate: function() {
        if (!u) {
          var g = i.elements, m = g.reference, w = g.popper;
          if (!Ar(m, w)) {
            process.env.NODE_ENV !== "production" && console.error(Rr);
            return;
          }
          i.rects = {
            reference: Aa(m, so(w), i.options.strategy === "fixed"),
            popper: Ws(w)
          }, i.reset = !1, i.placement = i.options.placement, i.orderedModifiers.forEach(function(N) {
            return i.modifiersData[N.name] = Object.assign({}, N.data);
          });
          for (var k = 0, x = 0; x < i.orderedModifiers.length; x++) {
            if (process.env.NODE_ENV !== "production" && (k += 1, k > 100)) {
              console.error(il);
              break;
            }
            if (i.reset === !0) {
              i.reset = !1, x = -1;
              continue;
            }
            var y = i.orderedModifiers[x], E = y.fn, S = y.options, O = S === void 0 ? {} : S, L = y.name;
            typeof E == "function" && (i = E({
              state: i,
              options: O,
              name: L,
              instance: c
            }) || i);
          }
        }
      },
      update: Ya(function() {
        return new Promise(function(_) {
          c.forceUpdate(), _(i);
        });
      }),
      destroy: function() {
        b(), u = !0;
      }
    };
    if (!Ar(l, f))
      return process.env.NODE_ENV !== "production" && console.error(Rr), c;
    c.setOptions(h).then(function(_) {
      !u && h.onFirstUpdate && h.onFirstUpdate(_);
    });
    function d() {
      i.orderedModifiers.forEach(function(_) {
        var g = _.name, m = _.options, w = m === void 0 ? {} : m, k = _.effect;
        if (typeof k == "function") {
          var x = k({
            state: i,
            name: g,
            instance: c,
            options: w
          }), y = function() {
          };
          p.push(x || y);
        }
      });
    }
    function b() {
      p.forEach(function(_) {
        return _();
      }), p = [];
    }
    return c;
  };
}
var cn = {
  passive: !0
};
function ll(e) {
  var t = e.state, n = e.instance, o = e.options, s = o.scroll, r = s === void 0 ? !0 : s, a = o.resize, l = a === void 0 ? !0 : a, f = oe(t.elements.popper), h = [].concat(t.scrollParents.reference, t.scrollParents.popper);
  return r && h.forEach(function(i) {
    i.addEventListener("scroll", n.update, cn);
  }), l && f.addEventListener("resize", n.update, cn), function() {
    r && h.forEach(function(i) {
      i.removeEventListener("scroll", n.update, cn);
    }), l && f.removeEventListener("resize", n.update, cn);
  };
}
const cl = {
  name: "eventListeners",
  enabled: !0,
  phase: "write",
  fn: function() {
  },
  effect: ll,
  data: {}
};
function fl(e) {
  var t = e.state, n = e.name;
  t.modifiersData[n] = zs({
    reference: t.rects.reference,
    element: t.rects.popper,
    strategy: "absolute",
    placement: t.placement
  });
}
const ul = {
  name: "popperOffsets",
  enabled: !0,
  phase: "read",
  fn: fl,
  data: {}
};
var hl = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function dl(e) {
  var t = e.x, n = e.y, o = window, s = o.devicePixelRatio || 1;
  return {
    x: wt(t * s) / s || 0,
    y: wt(n * s) / s || 0
  };
}
function Or(e) {
  var t, n = e.popper, o = e.popperRect, s = e.placement, r = e.variation, a = e.offsets, l = e.position, f = e.gpuAcceleration, h = e.adaptive, i = e.roundOffsets, p = e.isFixed, u = a.x, c = u === void 0 ? 0 : u, d = a.y, b = d === void 0 ? 0 : d, _ = typeof i == "function" ? i({
    x: c,
    y: b
  }) : {
    x: c,
    y: b
  };
  c = _.x, b = _.y;
  var g = a.hasOwnProperty("x"), m = a.hasOwnProperty("y"), w = Se, k = ae, x = window;
  if (h) {
    var y = so(n), E = "clientHeight", S = "clientWidth";
    if (y === oe(n) && (y = ze(n), le(y).position !== "static" && l === "absolute" && (E = "scrollHeight", S = "scrollWidth")), y = y, s === ae || (s === Se || s === Ue) && r === Bt) {
      k = ge;
      var O = p && y === x && x.visualViewport ? x.visualViewport.height : y[E];
      b -= O - o.height, b *= f ? 1 : -1;
    }
    if (s === Se || (s === ae || s === ge) && r === Bt) {
      w = Ue;
      var L = p && y === x && x.visualViewport ? x.visualViewport.width : y[S];
      c -= L - o.width, c *= f ? 1 : -1;
    }
  }
  var N = Object.assign({
    position: l
  }, h && hl), V = i === !0 ? dl({
    x: c,
    y: b
  }) : {
    x: c,
    y: b
  };
  if (c = V.x, b = V.y, f) {
    var z;
    return Object.assign({}, N, (z = {}, z[k] = m ? "0" : "", z[w] = g ? "0" : "", z.transform = (x.devicePixelRatio || 1) <= 1 ? "translate(" + c + "px, " + b + "px)" : "translate3d(" + c + "px, " + b + "px, 0)", z));
  }
  return Object.assign({}, N, (t = {}, t[k] = m ? b + "px" : "", t[w] = g ? c + "px" : "", t.transform = "", t));
}
function pl(e) {
  var t = e.state, n = e.options, o = n.gpuAcceleration, s = o === void 0 ? !0 : o, r = n.adaptive, a = r === void 0 ? !0 : r, l = n.roundOffsets, f = l === void 0 ? !0 : l;
  if (process.env.NODE_ENV !== "production") {
    var h = le(t.elements.popper).transitionProperty || "";
    a && ["transform", "top", "right", "bottom", "left"].some(function(p) {
      return h.indexOf(p) >= 0;
    }) && console.warn(["Popper: Detected CSS transitions on at least one of the following", 'CSS properties: "transform", "top", "right", "bottom", "left".', `

`, 'Disable the "computeStyles" modifier\'s `adaptive` option to allow', "for smooth transitions, or remove these properties from the CSS", "transition declaration on the popper element if only transitioning", "opacity or background-color for example.", `

`, "We recommend using the popper element as a wrapper around an inner", "element that can have any CSS property transitioned for animations."].join(" "));
  }
  var i = {
    placement: Ce(t.placement),
    variation: Et(t.placement),
    popper: t.elements.popper,
    popperRect: t.rects.popper,
    gpuAcceleration: s,
    isFixed: t.options.strategy === "fixed"
  };
  t.modifiersData.popperOffsets != null && (t.styles.popper = Object.assign({}, t.styles.popper, Or(Object.assign({}, i, {
    offsets: t.modifiersData.popperOffsets,
    position: t.options.strategy,
    adaptive: a,
    roundOffsets: f
  })))), t.modifiersData.arrow != null && (t.styles.arrow = Object.assign({}, t.styles.arrow, Or(Object.assign({}, i, {
    offsets: t.modifiersData.arrow,
    position: "absolute",
    adaptive: !1,
    roundOffsets: f
  })))), t.attributes.popper = Object.assign({}, t.attributes.popper, {
    "data-popper-placement": t.placement
  });
}
const _l = {
  name: "computeStyles",
  enabled: !0,
  phase: "beforeWrite",
  fn: pl,
  data: {}
};
function vl(e) {
  var t = e.state;
  Object.keys(t.elements).forEach(function(n) {
    var o = t.styles[n] || {}, s = t.attributes[n] || {}, r = t.elements[n];
    !ne(r) || !ve(r) || (Object.assign(r.style, o), Object.keys(s).forEach(function(a) {
      var l = s[a];
      l === !1 ? r.removeAttribute(a) : r.setAttribute(a, l === !0 ? "" : l);
    }));
  });
}
function gl(e) {
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
      var s = t.elements[o], r = t.attributes[o] || {}, a = Object.keys(t.styles.hasOwnProperty(o) ? t.styles[o] : n[o]), l = a.reduce(function(f, h) {
        return f[h] = "", f;
      }, {});
      !ne(s) || !ve(s) || (Object.assign(s.style, l), Object.keys(r).forEach(function(f) {
        s.removeAttribute(f);
      }));
    });
  };
}
const ml = {
  name: "applyStyles",
  enabled: !0,
  phase: "write",
  fn: vl,
  effect: gl,
  requires: ["computeStyles"]
};
var yl = [cl, ul, _l, ml], bl = /* @__PURE__ */ al({
  defaultModifiers: yl
});
function wl(e) {
  return e === "x" ? "y" : "x";
}
function yn(e, t, n) {
  return Qe(e, Pn(t, n));
}
function kl(e, t, n) {
  var o = yn(e, t, n);
  return o > n ? n : o;
}
function xl(e) {
  var t = e.state, n = e.options, o = e.name, s = n.mainAxis, r = s === void 0 ? !0 : s, a = n.altAxis, l = a === void 0 ? !1 : a, f = n.boundary, h = n.rootBoundary, i = n.altBoundary, p = n.padding, u = n.tether, c = u === void 0 ? !0 : u, d = n.tetherOffset, b = d === void 0 ? 0 : d, _ = jo(t, {
    boundary: f,
    rootBoundary: h,
    padding: p,
    altBoundary: i
  }), g = Ce(t.placement), m = Et(t.placement), w = !m, k = Us(g), x = wl(k), y = t.modifiersData.popperOffsets, E = t.rects.reference, S = t.rects.popper, O = typeof b == "function" ? b(Object.assign({}, t.rects, {
    placement: t.placement
  })) : b, L = typeof O == "number" ? {
    mainAxis: O,
    altAxis: O
  } : Object.assign({
    mainAxis: 0,
    altAxis: 0
  }, O), N = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null, V = {
    x: 0,
    y: 0
  };
  if (!!y) {
    if (r) {
      var z, re = k === "y" ? ae : Se, Y = k === "y" ? ge : Ue, j = k === "y" ? "height" : "width", J = y[k], Re = J + _[re], me = J - _[Y], tt = c ? -S[j] / 2 : 0, ye = m === xt ? E[j] : S[j], Me = m === xt ? -S[j] : -E[j], Fe = t.elements.arrow, be = c && Fe ? Ws(Fe) : {
        width: 0,
        height: 0
      }, C = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : Fs(), P = C[re], F = C[Y], G = yn(0, E[j], be[j]), se = w ? E[j] / 2 - tt - G - P - L.mainAxis : ye - G - P - L.mainAxis, Ve = w ? -E[j] / 2 + tt + G + F + L.mainAxis : Me + G + F + L.mainAxis, Ae = t.elements.arrow && so(t.elements.arrow), on = Ae ? k === "y" ? Ae.clientTop || 0 : Ae.clientLeft || 0 : 0, rn = (z = N == null ? void 0 : N[k]) != null ? z : 0, lo = J + se - rn - on, D = J + Ve - rn, Rt = yn(c ? Pn(Re, lo) : Re, J, c ? Qe(me, D) : me);
      y[k] = Rt, V[k] = Rt - J;
    }
    if (l) {
      var qe, sn = k === "x" ? ae : Se, an = k === "x" ? ge : Ue, ce = y[x], ln = x === "y" ? "height" : "width", qo = ce + _[sn], Yo = ce - _[an], co = [ae, Se].indexOf(g) !== -1, Go = (qe = N == null ? void 0 : N[x]) != null ? qe : 0, Ko = co ? qo : ce - E[ln] - S[ln] - Go + L.altAxis, Xo = co ? ce + E[ln] + S[ln] - Go - L.altAxis : Yo, Jo = c && co ? kl(Ko, ce, Xo) : yn(c ? Ko : qo, ce, c ? Xo : Yo);
      y[x] = Jo, V[x] = Jo - ce;
    }
    t.modifiersData[o] = V;
  }
}
const El = {
  name: "preventOverflow",
  enabled: !0,
  phase: "main",
  fn: xl,
  requiresIfExists: ["offset"]
};
var $l = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function bn(e) {
  return e.replace(/left|right|bottom|top/g, function(t) {
    return $l[t];
  });
}
var Sl = {
  start: "end",
  end: "start"
};
function Nr(e) {
  return e.replace(/start|end/g, function(t) {
    return Sl[t];
  });
}
function Cl(e, t) {
  t === void 0 && (t = {});
  var n = t, o = n.placement, s = n.boundary, r = n.rootBoundary, a = n.padding, l = n.flipVariations, f = n.allowedAutoPlacements, h = f === void 0 ? Ta : f, i = Et(o), p = i ? l ? $r : $r.filter(function(d) {
    return Et(d) === i;
  }) : ao, u = p.filter(function(d) {
    return h.indexOf(d) >= 0;
  });
  u.length === 0 && (u = p, process.env.NODE_ENV !== "production" && console.error(["Popper: The `allowedAutoPlacements` option did not allow any", "placements. Ensure the `placement` option matches the variation", "of the allowed placements.", 'For example, "auto" cannot be used to allow "bottom-start".', 'Use "auto-start" instead.'].join(" ")));
  var c = u.reduce(function(d, b) {
    return d[b] = jo(e, {
      placement: b,
      boundary: s,
      rootBoundary: r,
      padding: a
    })[Ce(b)], d;
  }, {});
  return Object.keys(c).sort(function(d, b) {
    return c[d] - c[b];
  });
}
function Rl(e) {
  if (Ce(e) === io)
    return [];
  var t = bn(e);
  return [Nr(e), t, Nr(t)];
}
function Ml(e) {
  var t = e.state, n = e.options, o = e.name;
  if (!t.modifiersData[o]._skip) {
    for (var s = n.mainAxis, r = s === void 0 ? !0 : s, a = n.altAxis, l = a === void 0 ? !0 : a, f = n.fallbackPlacements, h = n.padding, i = n.boundary, p = n.rootBoundary, u = n.altBoundary, c = n.flipVariations, d = c === void 0 ? !0 : c, b = n.allowedAutoPlacements, _ = t.options.placement, g = Ce(_), m = g === _, w = f || (m || !d ? [bn(_)] : Rl(_)), k = [_].concat(w).reduce(function(be, C) {
      return be.concat(Ce(C) === io ? Cl(t, {
        placement: C,
        boundary: i,
        rootBoundary: p,
        padding: h,
        flipVariations: d,
        allowedAutoPlacements: b
      }) : C);
    }, []), x = t.rects.reference, y = t.rects.popper, E = /* @__PURE__ */ new Map(), S = !0, O = k[0], L = 0; L < k.length; L++) {
      var N = k[L], V = Ce(N), z = Et(N) === xt, re = [ae, ge].indexOf(V) >= 0, Y = re ? "width" : "height", j = jo(t, {
        placement: N,
        boundary: i,
        rootBoundary: p,
        altBoundary: u,
        padding: h
      }), J = re ? z ? Ue : Se : z ? ge : ae;
      x[Y] > y[Y] && (J = bn(J));
      var Re = bn(J), me = [];
      if (r && me.push(j[V] <= 0), l && me.push(j[J] <= 0, j[Re] <= 0), me.every(function(be) {
        return be;
      })) {
        O = N, S = !1;
        break;
      }
      E.set(N, me);
    }
    if (S)
      for (var tt = d ? 3 : 1, ye = function(C) {
        var P = k.find(function(F) {
          var G = E.get(F);
          if (G)
            return G.slice(0, C).every(function(se) {
              return se;
            });
        });
        if (P)
          return O = P, "break";
      }, Me = tt; Me > 0; Me--) {
        var Fe = ye(Me);
        if (Fe === "break")
          break;
      }
    t.placement !== O && (t.modifiersData[o]._skip = !0, t.placement = O, t.reset = !0);
  }
}
const Al = {
  name: "flip",
  enabled: !0,
  phase: "main",
  fn: Ml,
  requiresIfExists: ["offset"],
  data: {
    _skip: !1
  }
};
function Ol(e) {
  return e.button === 2;
}
var Je, te, lt, Kt, ct;
class ie extends Sn {
  constructor() {
    super(...arguments);
    $(this, Je, void 0);
    $(this, te, void 0);
    $(this, lt, void 0);
    $(this, Kt, void 0);
    $(this, ct, void 0);
  }
  get isShown() {
    return this.menu.classList.contains(this.constructor.CLASS_SHOW);
  }
  get menu() {
    return v(this, Je) || this._ensureMenu();
  }
  get popper() {
    return v(this, te) ? v(this, te) : this._createPopper();
  }
  get trigger() {
    return v(this, Kt) || this.element;
  }
  init() {
    const { element: n } = this;
    n !== document.body && !n.hasAttribute("data-toggle") && n.setAttribute("data-toggle", "contextmenu");
  }
  show(n) {
    return R(this, Kt, n), this.emit("show", { menu: this, trigger: this.trigger }).defaultPrevented || (this.options.items || this.options.menu) && !this._renderMenu() ? !1 : (this.menu.classList.add(this.constructor.CLASS_SHOW), this._createPopper().update(), this.emit("shown", this), !0);
  }
  hide() {
    var o, s;
    if (this.emit("hide", this).defaultPrevented)
      return !1;
    (o = v(this, te)) == null || o.destroy(), R(this, te, void 0), (s = v(this, Je)) == null || s.classList.remove(this.constructor.CLASS_SHOW), this.emit("hidden", this);
  }
  toggle(n) {
    return this.isShown ? this.hide() : this.show(n);
  }
  destroy() {
    var n, o;
    (n = v(this, te)) == null || n.destroy(), super.destroy(), this.options.menu && ((o = v(this, Je)) == null || o.remove());
  }
  _ensureMenu() {
    var r, a;
    const { element: n } = this, o = this.constructor.MENU_CLASS;
    let s;
    if (this.options.menu)
      s = document.createElement("div"), s.classList.add(o), document.body.appendChild(s);
    else if (n) {
      const l = (r = n.getAttribute("href")) != null ? r : n.dataset.target;
      if ((l == null ? void 0 : l[0]) === "#" && (s = document.querySelector(l)), !s) {
        const f = n.nextElementSibling;
        f != null && f.classList.contains(o) ? s = f : s = (a = n.parentNode) == null ? void 0 : a.querySelector(`.${o}`);
      }
    }
    if (!s)
      throw new Error("ContextMenu: Cannot find menu element");
    return R(this, Je, s), s;
  }
  _getPopperOptions() {
    return {
      modifiers: [El, Al],
      placement: this.options.placement,
      strategy: this.options.strategy
    };
  }
  _createPopper() {
    const n = this._getPopperOptions();
    return v(this, te) ? v(this, te).setOptions(n) : R(this, te, bl(this._getPopperElement(), this.menu, n)), v(this, te);
  }
  _getMenuOptions() {
    const { menu: n, items: o } = this.options;
    let s = o || (n == null ? void 0 : n.items);
    if (!!s)
      return typeof s == "function" && (s = s(this)), {
        ...n,
        items: s
      };
  }
  _renderMenu() {
    const n = this._getMenuOptions();
    return !n || this.emit("updateMenu", { menu: n, trigger: this.trigger, contextmenu: this }).defaultPrevented ? !1 : (v(this, ct) ? v(this, ct).render(n) : R(this, ct, new ps(this.menu, n)), !0);
  }
  _getPopperElement() {
    return v(this, lt) || R(this, lt, {
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
    }), v(this, lt);
  }
  static clear(n) {
    n && Ol(n) || this.getAll().forEach((o) => o.hide());
  }
  static show(n) {
    const { event: o, ...s } = n, r = this.ensure(document.body);
    return Object.keys(s).length && r.setOptions(s), r.show(o), o == null || o.stopPropagation(), r;
  }
  static hide() {
    const n = this.get(document.body);
    return n == null || n.hide(), n;
  }
}
Je = new WeakMap(), te = new WeakMap(), lt = new WeakMap(), Kt = new WeakMap(), ct = new WeakMap(), A(ie, "EVENTS", !0), A(ie, "DEFAULT", {
  placement: "bottom-start",
  strategy: "fixed",
  subMenuTrigger: "hover"
}), A(ie, "MENU_CLASS", "contextmenu"), A(ie, "CLASS_SHOW", "show"), A(ie, "MENU_SELECTOR", '[data-toggle="contextmenu"]:not(.disabled):not(:disabled)');
document.addEventListener("contextmenu", (e) => {
  const t = e.target;
  if (t.closest(`.${ie.MENU_CLASS}`))
    return;
  const n = t.closest(ie.MENU_SELECTOR);
  n && (ie.ensure(n).show(e), e.preventDefault());
});
document.addEventListener("click", ie.clear.bind(ie));
var Wo = "top", Vs = "bottom", Tn = "right", Ut = "left", Nl = "auto", qs = [Wo, Vs, Tn, Ut], Ll = "start", Pl = "end", Tl = /* @__PURE__ */ [].concat(qs, [Nl]).reduce(function(e, t) {
  return e.concat([t, t + "-" + Ll, t + "-" + Pl]);
}, []);
function Ys(e) {
  return e.split("-")[0];
}
function St(e) {
  if (e == null)
    return window;
  if (e.toString() !== "[object Window]") {
    var t = e.ownerDocument;
    return t && t.defaultView || window;
  }
  return e;
}
function Gs(e) {
  var t = St(e).Element;
  return e instanceof t || e instanceof Element;
}
function zt(e) {
  var t = St(e).HTMLElement;
  return e instanceof t || e instanceof HTMLElement;
}
function Io(e) {
  if (typeof ShadowRoot > "u")
    return !1;
  var t = St(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot;
}
var Dl = Math.max, Hl = Math.min, Lr = Math.round;
function mo() {
  var e = navigator.userAgentData;
  return e != null && e.brands ? e.brands.map(function(t) {
    return t.brand + "/" + t.version;
  }).join(" ") : navigator.userAgent;
}
function jl() {
  return !/^((?!chrome|android).)*safari/i.test(mo());
}
function Wl(e, t, n) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  var o = e.getBoundingClientRect(), s = 1, r = 1;
  t && zt(e) && (s = e.offsetWidth > 0 && Lr(o.width) / e.offsetWidth || 1, r = e.offsetHeight > 0 && Lr(o.height) / e.offsetHeight || 1);
  var a = Gs(e) ? St(e) : window, l = a.visualViewport, f = !jl() && n, h = (o.left + (f && l ? l.offsetLeft : 0)) / s, i = (o.top + (f && l ? l.offsetTop : 0)) / r, p = o.width / s, u = o.height / r;
  return {
    width: p,
    height: u,
    top: i,
    right: h + p,
    bottom: i + u,
    left: h,
    x: h,
    y: i
  };
}
function Il(e) {
  var t = Wl(e), n = e.offsetWidth, o = e.offsetHeight;
  return Math.abs(t.width - n) <= 1 && (n = t.width), Math.abs(t.height - o) <= 1 && (o = t.height), {
    x: e.offsetLeft,
    y: e.offsetTop,
    width: n,
    height: o
  };
}
function Bl(e, t) {
  var n = t.getRootNode && t.getRootNode();
  if (e.contains(t))
    return !0;
  if (n && Io(n)) {
    var o = t;
    do {
      if (o && e.isSameNode(o))
        return !0;
      o = o.parentNode || o.host;
    } while (o);
  }
  return !1;
}
function Ft(e) {
  return e ? (e.nodeName || "").toLowerCase() : null;
}
function Vt(e) {
  return St(e).getComputedStyle(e);
}
function Ul(e) {
  return ["table", "td", "th"].indexOf(Ft(e)) >= 0;
}
function zl(e) {
  return ((Gs(e) ? e.ownerDocument : e.document) || window.document).documentElement;
}
function Fl(e) {
  return Ft(e) === "html" ? e : e.assignedSlot || e.parentNode || (Io(e) ? e.host : null) || zl(e);
}
function Pr(e) {
  return !zt(e) || Vt(e).position === "fixed" ? null : e.offsetParent;
}
function Vl(e) {
  var t = /firefox/i.test(mo()), n = /Trident/i.test(mo());
  if (n && zt(e)) {
    var o = Vt(e);
    if (o.position === "fixed")
      return null;
  }
  var s = Fl(e);
  for (Io(s) && (s = s.host); zt(s) && ["html", "body"].indexOf(Ft(s)) < 0; ) {
    var r = Vt(s);
    if (r.transform !== "none" || r.perspective !== "none" || r.contain === "paint" || ["transform", "perspective"].indexOf(r.willChange) !== -1 || t && r.willChange === "filter" || t && r.filter && r.filter !== "none")
      return s;
    s = s.parentNode;
  }
  return null;
}
function ql(e) {
  for (var t = St(e), n = Pr(e); n && Ul(n) && Vt(n).position === "static"; )
    n = Pr(n);
  return n && (Ft(n) === "html" || Ft(n) === "body" && Vt(n).position === "static") ? t : n || Vl(e) || t;
}
function Yl(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function Gl(e, t, n) {
  return Dl(e, Hl(t, n));
}
function Kl() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
function Xl(e) {
  return Object.assign({}, Kl(), e);
}
function Jl(e, t) {
  return t.reduce(function(n, o) {
    return n[o] = e, n;
  }, {});
}
var Zl = function(t, n) {
  return t = typeof t == "function" ? t(Object.assign({}, n.rects, {
    placement: n.placement
  })) : t, Xl(typeof t != "number" ? t : Jl(t, qs));
};
function Ql(e) {
  var t, n = e.state, o = e.name, s = e.options, r = n.elements.arrow, a = n.modifiersData.popperOffsets, l = Ys(n.placement), f = Yl(l), h = [Ut, Tn].indexOf(l) >= 0, i = h ? "height" : "width";
  if (!(!r || !a)) {
    var p = Zl(s.padding, n), u = Il(r), c = f === "y" ? Wo : Ut, d = f === "y" ? Vs : Tn, b = n.rects.reference[i] + n.rects.reference[f] - a[f] - n.rects.popper[i], _ = a[f] - n.rects.reference[f], g = ql(r), m = g ? f === "y" ? g.clientHeight || 0 : g.clientWidth || 0 : 0, w = b / 2 - _ / 2, k = p[c], x = m - u[i] - p[d], y = m / 2 - u[i] / 2 + w, E = Gl(k, y, x), S = f;
    n.modifiersData[o] = (t = {}, t[S] = E, t.centerOffset = E - y, t);
  }
}
function ec(e) {
  var t = e.state, n = e.options, o = n.element, s = o === void 0 ? "[data-popper-arrow]" : o;
  if (s != null && !(typeof s == "string" && (s = t.elements.popper.querySelector(s), !s))) {
    if (process.env.NODE_ENV !== "production" && (zt(s) || console.error(['Popper: "arrow" element must be an HTMLElement (not an SVGElement).', "To use an SVG arrow, wrap it in an HTMLElement that will be used as", "the arrow."].join(" "))), !Bl(t.elements.popper, s)) {
      process.env.NODE_ENV !== "production" && console.error(['Popper: "arrow" modifier\'s `element` must be a child of the popper', "element."].join(" "));
      return;
    }
    t.elements.arrow = s;
  }
}
const tc = {
  name: "arrow",
  enabled: !0,
  phase: "main",
  fn: Ql,
  effect: ec,
  requires: ["popperOffsets"],
  requiresIfExists: ["preventOverflow"]
};
function nc(e, t, n) {
  var o = Ys(e), s = [Ut, Wo].indexOf(o) >= 0 ? -1 : 1, r = typeof n == "function" ? n(Object.assign({}, t, {
    placement: e
  })) : n, a = r[0], l = r[1];
  return a = a || 0, l = (l || 0) * s, [Ut, Tn].indexOf(o) >= 0 ? {
    x: l,
    y: a
  } : {
    x: a,
    y: l
  };
}
function oc(e) {
  var t = e.state, n = e.options, o = e.name, s = n.offset, r = s === void 0 ? [0, 0] : s, a = Tl.reduce(function(i, p) {
    return i[p] = nc(p, t.rects, r), i;
  }, {}), l = a[t.placement], f = l.x, h = l.y;
  t.modifiersData.popperOffsets != null && (t.modifiersData.popperOffsets.x += f, t.modifiersData.popperOffsets.y += h), t.modifiersData[o] = a;
}
const rc = {
  name: "offset",
  enabled: !0,
  phase: "main",
  requires: ["popperOffsets"],
  fn: oc
};
var ft, ut, ht, Un, Ks;
class Be extends ie {
  constructor() {
    super(...arguments);
    $(this, Un);
    $(this, ft, !1);
    $(this, ut, 0);
    A(this, "hideLater", () => {
      v(this, ht).call(this), R(this, ut, window.setTimeout(this.hide.bind(this), 300));
    });
    $(this, ht, () => {
      clearTimeout(v(this, ut)), R(this, ut, 0);
    });
  }
  get isHover() {
    return this.options.trigger === "hover";
  }
  show(n) {
    const o = super.show(n);
    return o && !v(this, ft) && this.isHover && q(this, Un, Ks).call(this), o;
  }
  destroy() {
    v(this, ft) && (this.element.removeEventListener("mouseleave", this.hideLater), this.menu.removeEventListener("mouseenter", v(this, ht)), this.menu.removeEventListener("mouseleave", this.hideLater)), super.destroy();
  }
  _getArrowSize() {
    const { arrow: n } = this.options;
    return n ? typeof n == "number" ? n : 5 : 0;
  }
  _getPopperOptions() {
    var s;
    const n = super._getPopperOptions(), o = this._getArrowSize();
    if (o) {
      n.modifiers.push({ ...tc, options: {
        padding: o,
        element: ".arrow"
      } }, {
        ...rc,
        options: {
          offset: [0, o + ((s = this.options.offset) != null ? s : 0)]
        }
      });
      const { onFirstUpdate: r } = n;
      n.onFirstUpdate = (a) => {
        var l, f;
        r == null || r(a), (f = this.menu.querySelector(".arrow")) == null || f.classList.add(`arrow-${((l = a.placement) == null ? void 0 : l.split("-").shift()) || ""}`);
      };
    }
    return n;
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
        var a;
        const r = this.menu.querySelector(".arrow");
        r && ((a = this.menu.querySelector(".menu")) == null || a.appendChild(r), this.popper.update()), o == null || o(...s);
      };
    }
    return n;
  }
}
ft = new WeakMap(), ut = new WeakMap(), ht = new WeakMap(), Un = new WeakSet(), Ks = function() {
  const { menu: n } = this;
  n.addEventListener("mouseenter", v(this, ht)), n.addEventListener("mouseleave", this.hideLater), this.element.addEventListener("mouseleave", this.hideLater), R(this, ft, !0);
}, A(Be, "MENU_CLASS", "dropdown-menu"), A(Be, "MENU_SELECTOR", '[data-toggle="dropdown"]:not(.disabled):not(:disabled)'), A(Be, "DEFAULT", {
  placement: "bottom-start",
  strategy: "absolute",
  trigger: "click"
});
document.addEventListener("click", function(e) {
  const n = e.target.closest(Be.MENU_SELECTOR);
  n ? Be.ensure(n).toggle() : Be.clear(e);
});
document.addEventListener("mouseover", function(e) {
  const t = e.target, n = typeof t.closest == "function" ? t.closest(Be.MENU_SELECTOR) : null;
  if (!n)
    return;
  const o = Be.ensure(n);
  o.isHover && o.show();
});
var Bo, U, Xs, Js, Wt, Tr, Zs = {}, Qs = [], sc = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function Ie(e, t) {
  for (var n in t)
    e[n] = t[n];
  return e;
}
function ei(e) {
  var t = e.parentNode;
  t && t.removeChild(e);
}
function M(e, t, n) {
  var o, s, r, a = {};
  for (r in t)
    r == "key" ? o = t[r] : r == "ref" ? s = t[r] : a[r] = t[r];
  if (arguments.length > 2 && (a.children = arguments.length > 3 ? Bo.call(arguments, 2) : n), typeof e == "function" && e.defaultProps != null)
    for (r in e.defaultProps)
      a[r] === void 0 && (a[r] = e.defaultProps[r]);
  return wn(e, a, o, s, null);
}
function wn(e, t, n, o, s) {
  var r = { type: e, props: t, key: n, ref: o, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: s == null ? ++Xs : s };
  return s == null && U.vnode != null && U.vnode(r), r;
}
function ic() {
  return { current: null };
}
function Uo(e) {
  return e.children;
}
function It(e, t) {
  this.props = e, this.context = t;
}
function $t(e, t) {
  if (t == null)
    return e.__ ? $t(e.__, e.__.__k.indexOf(e) + 1) : null;
  for (var n; t < e.__k.length; t++)
    if ((n = e.__k[t]) != null && n.__e != null)
      return n.__e;
  return typeof e.type == "function" ? $t(e) : null;
}
function ti(e) {
  var t, n;
  if ((e = e.__) != null && e.__c != null) {
    for (e.__e = e.__c.base = null, t = 0; t < e.__k.length; t++)
      if ((n = e.__k[t]) != null && n.__e != null) {
        e.__e = e.__c.base = n.__e;
        break;
      }
    return ti(e);
  }
}
function Dr(e) {
  (!e.__d && (e.__d = !0) && Wt.push(e) && !Dn.__r++ || Tr !== U.debounceRendering) && ((Tr = U.debounceRendering) || setTimeout)(Dn);
}
function Dn() {
  for (var e; Dn.__r = Wt.length; )
    e = Wt.sort(function(t, n) {
      return t.__v.__b - n.__v.__b;
    }), Wt = [], e.some(function(t) {
      var n, o, s, r, a, l;
      t.__d && (a = (r = (n = t).__v).__e, (l = n.__P) && (o = [], (s = Ie({}, r)).__v = r.__v + 1, si(l, r, s, n.__n, l.ownerSVGElement !== void 0, r.__h != null ? [a] : null, o, a == null ? $t(r) : a, r.__h), lc(o, r), r.__e != a && ti(r)));
    });
}
function ni(e, t, n, o, s, r, a, l, f, h) {
  var i, p, u, c, d, b, _, g = o && o.__k || Qs, m = g.length;
  for (n.__k = [], i = 0; i < t.length; i++)
    if ((c = n.__k[i] = (c = t[i]) == null || typeof c == "boolean" ? null : typeof c == "string" || typeof c == "number" || typeof c == "bigint" ? wn(null, c, null, null, c) : Array.isArray(c) ? wn(Uo, { children: c }, null, null, null) : c.__b > 0 ? wn(c.type, c.props, c.key, null, c.__v) : c) != null) {
      if (c.__ = n, c.__b = n.__b + 1, (u = g[i]) === null || u && c.key == u.key && c.type === u.type)
        g[i] = void 0;
      else
        for (p = 0; p < m; p++) {
          if ((u = g[p]) && c.key == u.key && c.type === u.type) {
            g[p] = void 0;
            break;
          }
          u = null;
        }
      si(e, c, u = u || Zs, s, r, a, l, f, h), d = c.__e, (p = c.ref) && u.ref != p && (_ || (_ = []), u.ref && _.push(u.ref, null, c), _.push(p, c.__c || d, c)), d != null ? (b == null && (b = d), typeof c.type == "function" && c.__k === u.__k ? c.__d = f = oi(c, f, e) : f = ri(e, c, u, g, d, f), typeof n.type == "function" && (n.__d = f)) : f && u.__e == f && f.parentNode != e && (f = $t(u));
    }
  for (n.__e = b, i = m; i--; )
    g[i] != null && (typeof n.type == "function" && g[i].__e != null && g[i].__e == n.__d && (n.__d = $t(o, i + 1)), ai(g[i], g[i]));
  if (_)
    for (i = 0; i < _.length; i++)
      ii(_[i], _[++i], _[++i]);
}
function oi(e, t, n) {
  for (var o, s = e.__k, r = 0; s && r < s.length; r++)
    (o = s[r]) && (o.__ = e, t = typeof o.type == "function" ? oi(o, t, n) : ri(n, o, o, s, o.__e, t));
  return t;
}
function ri(e, t, n, o, s, r) {
  var a, l, f;
  if (t.__d !== void 0)
    a = t.__d, t.__d = void 0;
  else if (n == null || s != r || s.parentNode == null)
    e:
      if (r == null || r.parentNode !== e)
        e.appendChild(s), a = null;
      else {
        for (l = r, f = 0; (l = l.nextSibling) && f < o.length; f += 2)
          if (l == s)
            break e;
        e.insertBefore(s, r), a = r;
      }
  return a !== void 0 ? a : s.nextSibling;
}
function ac(e, t, n, o, s) {
  var r;
  for (r in n)
    r === "children" || r === "key" || r in t || Hn(e, r, null, n[r], o);
  for (r in t)
    s && typeof t[r] != "function" || r === "children" || r === "key" || r === "value" || r === "checked" || n[r] === t[r] || Hn(e, r, t[r], n[r], o);
}
function Hr(e, t, n) {
  t[0] === "-" ? e.setProperty(t, n) : e[t] = n == null ? "" : typeof n != "number" || sc.test(t) ? n : n + "px";
}
function Hn(e, t, n, o, s) {
  var r;
  e:
    if (t === "style")
      if (typeof n == "string")
        e.style.cssText = n;
      else {
        if (typeof o == "string" && (e.style.cssText = o = ""), o)
          for (t in o)
            n && t in n || Hr(e.style, t, "");
        if (n)
          for (t in n)
            o && n[t] === o[t] || Hr(e.style, t, n[t]);
      }
    else if (t[0] === "o" && t[1] === "n")
      r = t !== (t = t.replace(/Capture$/, "")), t = t.toLowerCase() in e ? t.toLowerCase().slice(2) : t.slice(2), e.l || (e.l = {}), e.l[t + r] = n, n ? o || e.addEventListener(t, r ? Wr : jr, r) : e.removeEventListener(t, r ? Wr : jr, r);
    else if (t !== "dangerouslySetInnerHTML") {
      if (s)
        t = t.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
      else if (t !== "href" && t !== "list" && t !== "form" && t !== "tabIndex" && t !== "download" && t in e)
        try {
          e[t] = n == null ? "" : n;
          break e;
        } catch {
        }
      typeof n == "function" || (n != null && (n !== !1 || t[0] === "a" && t[1] === "r") ? e.setAttribute(t, n) : e.removeAttribute(t));
    }
}
function jr(e) {
  this.l[e.type + !1](U.event ? U.event(e) : e);
}
function Wr(e) {
  this.l[e.type + !0](U.event ? U.event(e) : e);
}
function si(e, t, n, o, s, r, a, l, f) {
  var h, i, p, u, c, d, b, _, g, m, w, k, x, y = t.type;
  if (t.constructor !== void 0)
    return null;
  n.__h != null && (f = n.__h, l = t.__e = n.__e, t.__h = null, r = [l]), (h = U.__b) && h(t);
  try {
    e:
      if (typeof y == "function") {
        if (_ = t.props, g = (h = y.contextType) && o[h.__c], m = h ? g ? g.props.value : h.__ : o, n.__c ? b = (i = t.__c = n.__c).__ = i.__E : ("prototype" in y && y.prototype.render ? t.__c = i = new y(_, m) : (t.__c = i = new It(_, m), i.constructor = y, i.render = fc), g && g.sub(i), i.props = _, i.state || (i.state = {}), i.context = m, i.__n = o, p = i.__d = !0, i.__h = []), i.__s == null && (i.__s = i.state), y.getDerivedStateFromProps != null && (i.__s == i.state && (i.__s = Ie({}, i.__s)), Ie(i.__s, y.getDerivedStateFromProps(_, i.__s))), u = i.props, c = i.state, p)
          y.getDerivedStateFromProps == null && i.componentWillMount != null && i.componentWillMount(), i.componentDidMount != null && i.__h.push(i.componentDidMount);
        else {
          if (y.getDerivedStateFromProps == null && _ !== u && i.componentWillReceiveProps != null && i.componentWillReceiveProps(_, m), !i.__e && i.shouldComponentUpdate != null && i.shouldComponentUpdate(_, i.__s, m) === !1 || t.__v === n.__v) {
            i.props = _, i.state = i.__s, t.__v !== n.__v && (i.__d = !1), i.__v = t, t.__e = n.__e, t.__k = n.__k, t.__k.forEach(function(E) {
              E && (E.__ = t);
            }), i.__h.length && a.push(i);
            break e;
          }
          i.componentWillUpdate != null && i.componentWillUpdate(_, i.__s, m), i.componentDidUpdate != null && i.__h.push(function() {
            i.componentDidUpdate(u, c, d);
          });
        }
        if (i.context = m, i.props = _, i.__v = t, i.__P = e, w = U.__r, k = 0, "prototype" in y && y.prototype.render)
          i.state = i.__s, i.__d = !1, w && w(t), h = i.render(i.props, i.state, i.context);
        else
          do
            i.__d = !1, w && w(t), h = i.render(i.props, i.state, i.context), i.state = i.__s;
          while (i.__d && ++k < 25);
        i.state = i.__s, i.getChildContext != null && (o = Ie(Ie({}, o), i.getChildContext())), p || i.getSnapshotBeforeUpdate == null || (d = i.getSnapshotBeforeUpdate(u, c)), x = h != null && h.type === Uo && h.key == null ? h.props.children : h, ni(e, Array.isArray(x) ? x : [x], t, n, o, s, r, a, l, f), i.base = t.__e, t.__h = null, i.__h.length && a.push(i), b && (i.__E = i.__ = null), i.__e = !1;
      } else
        r == null && t.__v === n.__v ? (t.__k = n.__k, t.__e = n.__e) : t.__e = cc(n.__e, t, n, o, s, r, a, f);
    (h = U.diffed) && h(t);
  } catch (E) {
    t.__v = null, (f || r != null) && (t.__e = l, t.__h = !!f, r[r.indexOf(l)] = null), U.__e(E, t, n);
  }
}
function lc(e, t) {
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
function cc(e, t, n, o, s, r, a, l) {
  var f, h, i, p = n.props, u = t.props, c = t.type, d = 0;
  if (c === "svg" && (s = !0), r != null) {
    for (; d < r.length; d++)
      if ((f = r[d]) && "setAttribute" in f == !!c && (c ? f.localName === c : f.nodeType === 3)) {
        e = f, r[d] = null;
        break;
      }
  }
  if (e == null) {
    if (c === null)
      return document.createTextNode(u);
    e = s ? document.createElementNS("http://www.w3.org/2000/svg", c) : document.createElement(c, u.is && u), r = null, l = !1;
  }
  if (c === null)
    p === u || l && e.data === u || (e.data = u);
  else {
    if (r = r && Bo.call(e.childNodes), h = (p = n.props || Zs).dangerouslySetInnerHTML, i = u.dangerouslySetInnerHTML, !l) {
      if (r != null)
        for (p = {}, d = 0; d < e.attributes.length; d++)
          p[e.attributes[d].name] = e.attributes[d].value;
      (i || h) && (i && (h && i.__html == h.__html || i.__html === e.innerHTML) || (e.innerHTML = i && i.__html || ""));
    }
    if (ac(e, u, p, s, l), i)
      t.__k = [];
    else if (d = t.props.children, ni(e, Array.isArray(d) ? d : [d], t, n, o, s && c !== "foreignObject", r, a, r ? r[0] : n.__k && $t(n, 0), l), r != null)
      for (d = r.length; d--; )
        r[d] != null && ei(r[d]);
    l || ("value" in u && (d = u.value) !== void 0 && (d !== e.value || c === "progress" && !d || c === "option" && d !== p.value) && Hn(e, "value", d, p.value, !1), "checked" in u && (d = u.checked) !== void 0 && d !== e.checked && Hn(e, "checked", d, p.checked, !1));
  }
  return e;
}
function ii(e, t, n) {
  try {
    typeof e == "function" ? e(t) : e.current = t;
  } catch (o) {
    U.__e(o, n);
  }
}
function ai(e, t, n) {
  var o, s;
  if (U.unmount && U.unmount(e), (o = e.ref) && (o.current && o.current !== e.__e || ii(o, null, t)), (o = e.__c) != null) {
    if (o.componentWillUnmount)
      try {
        o.componentWillUnmount();
      } catch (r) {
        U.__e(r, t);
      }
    o.base = o.__P = null;
  }
  if (o = e.__k)
    for (s = 0; s < o.length; s++)
      o[s] && ai(o[s], t, typeof e.type != "function");
  n || e.__e == null || ei(e.__e), e.__e = e.__d = void 0;
}
function fc(e, t, n) {
  return this.constructor(e, n);
}
Bo = Qs.slice, U = { __e: function(e, t, n, o) {
  for (var s, r, a; t = t.__; )
    if ((s = t.__c) && !s.__)
      try {
        if ((r = s.constructor) && r.getDerivedStateFromError != null && (s.setState(r.getDerivedStateFromError(e)), a = s.__d), s.componentDidCatch != null && (s.componentDidCatch(e, o || {}), a = s.__d), a)
          return s.__E = s;
      } catch (l) {
        e = l;
      }
  throw e;
} }, Xs = 0, Js = function(e) {
  return e != null && e.constructor === void 0;
}, It.prototype.setState = function(e, t) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = Ie({}, this.state), typeof e == "function" && (e = e(Ie({}, n), this.props)), e && Ie(n, e), e != null && this.__v && (t && this.__h.push(t), Dr(this));
}, It.prototype.forceUpdate = function(e) {
  this.__v && (this.__e = !0, e && this.__h.push(e), Dr(this));
}, It.prototype.render = Uo, Wt = [], Dn.__r = 0;
let uc = (e = 21) => crypto.getRandomValues(new Uint8Array(e)).reduce((t, n) => (n &= 63, n < 36 ? t += n.toString(36) : n < 62 ? t += (n - 26).toString(36).toUpperCase() : n > 62 ? t += "-" : t += "_", t), "");
function hc(e, t, n) {
  return e && (t && (e = Math.max(t, e)), n && (e = Math.min(n, e))), e;
}
function zo({ col: e, className: t, height: n, row: o, onRenderCell: s, style: r, outerStyle: a, children: l, outerClass: f, ...h }) {
  var y, E;
  const i = {
    left: e.left,
    width: e.realWidth,
    height: n,
    ...a
  }, { align: p, border: u } = e.setting, c = {
    justifyContent: p ? p === "left" ? "start" : p === "right" ? "end" : p : void 0,
    ...e.setting.cellStyle,
    ...r
  }, d = ["dtable-cell", f, e.setting.className, {
    "has-border-left": u === !0 || u === "left",
    "has-border-right": u === !0 || u === "right"
  }], b = ["dtable-cell-content", t], _ = [(E = l != null ? l : (y = o.data) == null ? void 0 : y[e.name]) != null ? E : ""], g = s ? s(_, { row: o, col: e }, M) : _, m = [], w = [], k = {}, x = {};
  return g == null || g.forEach((S) => {
    var O;
    if (typeof S == "object" && S && !Js(S) && ("html" in S || "className" in S || "style" in S || "attrs" in S || "children" in S)) {
      const L = S.outer ? m : w;
      S.html ? L.push(/* @__PURE__ */ M("div", {
        className: T("dtable-cell-html", S.className),
        style: S.style,
        dangerouslySetInnerHTML: { __html: S.html },
        ...(O = S.attrs) != null ? O : {}
      })) : (S.style && Object.assign(S.outer ? i : c, S.style), S.className && (S.outer ? d : b).push(S.className), S.children && L.push(S.children), S.attrs && Object.assign(S.outer ? k : x, S.attrs));
    } else
      w.push(S);
  }), /* @__PURE__ */ M("div", {
    className: T(d),
    style: i,
    "data-col": e.name,
    ...h,
    ...k
  }, w.length > 0 && /* @__PURE__ */ M("div", {
    className: T(b),
    style: c,
    ...x
  }, w), m);
}
function dc({ col: e, children: t, style: n, ...o }) {
  var r;
  const { sortType: s } = e.setting;
  return /* @__PURE__ */ M(zo, {
    col: e,
    style: { ...n, ...e.setting.style },
    "data-sort": s || null,
    "data-type": e.type,
    ...o
  }, (r = e.setting.title) != null ? r : e.setting.name, s && /* @__PURE__ */ M("div", {
    className: `dtable-sort dtable-sort-${s === !0 ? "none" : s}`
  }), t);
}
function uo({ row: e, className: t, top: n = 0, left: o = 0, width: s, height: r, cols: a, CellComponent: l = zo, onRenderCell: f }) {
  return /* @__PURE__ */ M("div", {
    className: T("dtable-cells", t),
    style: { top: n, left: o, width: s, height: r }
  }, a.map((h) => h.visible ? /* @__PURE__ */ M(l, {
    key: h.name,
    col: h,
    row: e,
    onRenderCell: f
  }) : null));
}
function li({
  row: e,
  className: t,
  top: n,
  height: o,
  fixedLeftCols: s,
  fixedRightCols: r,
  scrollCols: a,
  fixedLeftWidth: l,
  scrollWidth: f,
  scrollColsWidth: h,
  fixedRightWidth: i,
  scrollLeft: p,
  CellComponent: u = zo,
  onRenderCell: c,
  style: d,
  ...b
}) {
  let _ = null;
  s != null && s.length && (_ = /* @__PURE__ */ M(uo, {
    className: "dtable-fixed-left",
    cols: s,
    width: l,
    row: e,
    CellComponent: u,
    onRenderCell: c
  }));
  let g = null;
  a != null && a.length && (g = /* @__PURE__ */ M(uo, {
    className: "dtable-flexable",
    cols: a,
    left: l - p,
    width: h,
    row: e,
    CellComponent: u,
    onRenderCell: c
  }));
  let m = null;
  r != null && r.length && (m = /* @__PURE__ */ M(uo, {
    className: "dtable-fixed-right",
    cols: r,
    left: l + f,
    width: i,
    row: e,
    CellComponent: u,
    onRenderCell: c
  }));
  const w = { top: n, height: o, lineHeight: `${o - 2}px`, ...d };
  return /* @__PURE__ */ M("div", {
    className: T("dtable-row", t),
    style: w,
    "data-id": e.id,
    ...b
  }, _, g, m);
}
function pc({ height: e, onRenderRow: t, ...n }) {
  const o = {
    height: e,
    ...n,
    row: { id: "HEADER", index: -1, top: 0 },
    className: "dtable-in-header",
    top: 0,
    CellComponent: dc
  };
  if (t) {
    const s = t({ props: o }, M);
    s && Object.assign(o, s);
  }
  return /* @__PURE__ */ M("div", {
    className: "dtable-header",
    style: { height: e }
  }, /* @__PURE__ */ M(li, {
    ...o
  }));
}
function _c({
  className: e,
  style: t,
  top: n,
  rows: o,
  height: s,
  rowHeight: r,
  scrollTop: a,
  onRenderRow: l,
  ...f
}) {
  return t = { ...t, top: n, height: s }, /* @__PURE__ */ M("div", {
    className: T("dtable-rows", e),
    style: t
  }, o.map((h) => {
    const i = {
      className: `dtable-row-${h.index % 2 ? "odd" : "even"}`,
      row: h,
      top: h.top - a,
      height: r,
      ...f
    }, p = l == null ? void 0 : l({ props: i, row: h }, M);
    return p && Object.assign(i, p), /* @__PURE__ */ M(li, {
      ...i
    });
  }));
}
const jn = /* @__PURE__ */ new Map(), Wn = [];
function ci(e, t) {
  const { name: n } = e;
  if (!(t != null && t.override) && jn.has(n))
    throw new Error(`DTable: Plugin with name ${n} already exists`);
  jn.set(n, e), (t == null ? void 0 : t.buildIn) && !Wn.includes(n) && Wn.push(n);
}
function nn(e, t) {
  ci(e, t);
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
function fi(e) {
  return jn.delete(e);
}
function vc(e) {
  if (typeof e == "string") {
    const t = jn.get(e);
    return t || console.warn(`DTable: Cannot found plugin "${e}"`), t;
  }
  if (typeof e == "function" && "plugin" in e)
    return e.plugin;
  if (typeof e == "object")
    return e;
  console.warn("DTable: Invalid plugin", e);
}
function ui(e, t, n) {
  return t.forEach((o) => {
    var r;
    if (!o)
      return;
    const s = vc(o);
    !s || n.has(s.name) || ((r = s.plugins) != null && r.length && ui(e, s.plugins, n), e.push(s), n.add(s.name));
  }), e;
}
function gc(e = [], t = !0) {
  return t && Wn.length && e.unshift(...Wn), e != null && e.length ? ui([], e, /* @__PURE__ */ new Set()) : [];
}
function Ir() {
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
var Ze, dt, Pe, Ee, Te, K, he, de, pt, Xt, Jt, $e, _t, vt, zn, hi, Fn, di, Vn, pi, qn, _i, Zt, bo, Yn, Gn, Qt, en, Kn, Xn, Jn, vi, Zn, gi, Qn, mi;
class yo extends It {
  constructor(n) {
    var o;
    super(n);
    $(this, zn);
    $(this, Fn);
    $(this, Vn);
    $(this, qn);
    $(this, Zt);
    $(this, Jn);
    $(this, Zn);
    $(this, Qn);
    A(this, "ref", ic());
    $(this, Ze, 0);
    $(this, dt, void 0);
    $(this, Pe, !1);
    $(this, Ee, void 0);
    $(this, Te, void 0);
    $(this, K, []);
    $(this, he, void 0);
    $(this, de, /* @__PURE__ */ new Map());
    $(this, pt, {});
    $(this, Xt, void 0);
    $(this, Jt, []);
    A(this, "updateLayout", () => {
      v(this, Ze) && cancelAnimationFrame(v(this, Ze)), R(this, Ze, requestAnimationFrame(() => {
        R(this, he, void 0), this.forceUpdate(), R(this, Ze, 0);
      }));
    });
    $(this, $e, (n, o) => {
      o = o || n.type;
      const s = v(this, de).get(o);
      if (!!(s != null && s.length)) {
        for (const r of s)
          if (r.call(this, n) === !1) {
            n.stopPropagation(), n.preventDefault();
            break;
          }
      }
    });
    $(this, _t, (n) => {
      v(this, $e).call(this, n, `window_${n.type}`);
    });
    $(this, vt, (n) => {
      v(this, $e).call(this, n, `document_${n.type}`);
    });
    $(this, Yn, (n, o) => {
      if (this.options.onRenderRow) {
        const s = this.options.onRenderRow.call(this, n, o);
        s && Object.assign(n.props, s);
      }
      return v(this, K).forEach((s) => {
        if (s.onRenderRow) {
          const r = s.onRenderRow.call(this, n, o);
          r && Object.assign(n.props, r);
        }
      }), n.props;
    });
    $(this, Gn, (n, o) => (this.options.onRenderHeaderRow && (n.props = this.options.onRenderHeaderRow.call(this, n, o)), v(this, K).forEach((s) => {
      s.onRenderHeaderRow && (n.props = s.onRenderHeaderRow.call(this, n, o));
    }), n.props));
    $(this, Qt, (n, o, s) => {
      const { row: r, col: a } = o;
      n[0] = this.getCellValue(r, a);
      const l = r.id === "HEADER" ? "onRenderHeaderCell" : "onRenderCell";
      return a.setting[l] && (n = a.setting[l].call(this, n, o, s)), this.options[l] && (n = this.options[l].call(this, n, o, s)), v(this, K).forEach((f) => {
        f[l] && (n = f[l].call(this, n, o, s));
      }), n;
    });
    $(this, en, (n, o) => {
      o === "horz" ? this.scroll({ scrollLeft: n }) : this.scroll({ scrollTop: n });
    });
    $(this, Kn, (n) => {
      var l, f, h, i, p;
      const o = this.getPointerInfo(n);
      if (!o)
        return;
      const { rowID: s, colName: r, cellElement: a } = o;
      if (s === "HEADER")
        a && ((l = this.options.onHeaderCellClick) == null || l.call(this, n, { colName: r, element: a }), v(this, K).forEach((u) => {
          var c;
          (c = u.onHeaderCellClick) == null || c.call(this, n, { colName: r, element: a });
        }));
      else {
        const { rowElement: u } = o, c = this.layout.visibleRows.find((d) => d.id === s);
        if (a) {
          if (((f = this.options.onCellClick) == null ? void 0 : f.call(this, n, { colName: r, rowID: s, rowInfo: c, element: a, rowElement: u })) === !0)
            return;
          for (const d of v(this, K))
            if (((h = d.onCellClick) == null ? void 0 : h.call(this, n, { colName: r, rowID: s, rowInfo: c, element: a, rowElement: u })) === !0)
              return;
        }
        if (((i = this.options.onRowClick) == null ? void 0 : i.call(this, n, { rowID: s, rowInfo: c, element: u })) === !0)
          return;
        for (const d of v(this, K))
          if (((p = d.onRowClick) == null ? void 0 : p.call(this, n, { rowID: s, rowInfo: c, element: u })) === !0)
            return;
      }
    });
    $(this, Xn, (n) => {
      const o = n.key.toLowerCase();
      if (["pageup", "pagedown", "home", "end"].includes(o))
        return !this.scroll({ to: o.replace("page", "") });
    });
    R(this, dt, (o = n.id) != null ? o : `dtable-${uc(10)}`), this.state = { scrollTop: 0, scrollLeft: 0 }, R(this, Te, Object.freeze(gc(n.plugins))), v(this, Te).forEach((s) => {
      var f;
      const { methods: r, data: a, state: l } = s;
      r && Object.entries(r).forEach(([h, i]) => {
        typeof i == "function" && Object.assign(this, { [h]: i.bind(this) });
      }), a && Object.assign(v(this, pt), a.call(this)), l && Object.assign(this.state, l.call(this)), (f = s.onCreate) == null || f.call(this, s);
    });
  }
  get options() {
    var n;
    return ((n = v(this, he)) == null ? void 0 : n.options) || v(this, Ee) || Ir();
  }
  get plugins() {
    return v(this, K);
  }
  get layout() {
    return v(this, he);
  }
  get id() {
    return v(this, dt);
  }
  get data() {
    return v(this, pt);
  }
  get parent() {
    var n, o;
    return (o = this.props.parent) != null ? o : (n = this.ref.current) == null ? void 0 : n.parentElement;
  }
  componentWillReceiveProps() {
    R(this, Ee, void 0);
  }
  componentDidMount() {
    if (v(this, Pe) ? this.forceUpdate() : q(this, Zt, bo).call(this), v(this, K).forEach((n) => {
      let { events: o } = n;
      !o || (typeof o == "function" && (o = o.call(this)), Object.entries(o).forEach(([s, r]) => {
        r && this.on(s, r);
      }));
    }), this.on("click", v(this, Kn)), this.on("keydown", v(this, Xn)), this.options.responsive)
      if (typeof ResizeObserver < "u") {
        const { parent: n } = this;
        if (n) {
          const o = new ResizeObserver(this.updateLayout);
          o.observe(n), R(this, Xt, o);
        }
      } else
        this.on("window_resize", this.updateLayout);
    v(this, K).forEach((n) => {
      var o;
      (o = n.onMounted) == null || o.call(this);
    });
  }
  componentDidUpdate() {
    v(this, Pe) ? q(this, Zt, bo).call(this) : v(this, K).forEach((n) => {
      var o;
      (o = n.onUpdated) == null || o.call(this);
    });
  }
  componentWillUnmount() {
    var o;
    (o = v(this, Xt)) == null || o.disconnect();
    const { current: n } = this.ref;
    if (n)
      for (const s of v(this, de).keys())
        s.startsWith("window_") ? window.removeEventListener(s.replace("window_", ""), v(this, _t)) : s.startsWith("document_") ? document.removeEventListener(s.replace("document_", ""), v(this, vt)) : n.removeEventListener(s, v(this, $e));
    v(this, K).forEach((s) => {
      var r;
      (r = s.onUnmounted) == null || r.call(this);
    }), v(this, Te).forEach((s) => {
      var r;
      (r = s.onDestory) == null || r.call(this);
    }), R(this, pt, {}), v(this, de).clear();
  }
  on(n, o, s) {
    var a;
    s && (n = `${s}_${n}`);
    const r = v(this, de).get(n);
    r ? r.push(o) : (v(this, de).set(n, [o]), n.startsWith("window_") ? window.addEventListener(n.replace("window_", ""), v(this, _t)) : n.startsWith("document_") ? document.addEventListener(n.replace("document_", ""), v(this, vt)) : (a = this.ref.current) == null || a.addEventListener(n, v(this, $e)));
  }
  off(n, o, s) {
    var l;
    s && (n = `${s}_${n}`);
    const r = v(this, de).get(n);
    if (!r)
      return;
    const a = r.indexOf(o);
    a >= 0 && r.splice(a, 1), r.length || (v(this, de).delete(n), n.startsWith("window_") ? window.removeEventListener(n.replace("window_", ""), v(this, _t)) : n.startsWith("document_") ? document.removeEventListener(n.replace("document_", ""), v(this, vt)) : (l = this.ref.current) == null || l.removeEventListener(n, v(this, $e)));
  }
  emitCustomEvent(n, o) {
    v(this, $e).call(this, o instanceof Event ? o : new CustomEvent(n, { detail: o }), n);
  }
  scroll(n, o) {
    const { scrollLeft: s, scrollTop: r, rowsHeightTotal: a, rowsHeight: l, rowHeight: f, colsInfo: { scrollWidth: h, scrollColsWidth: i } } = this.layout, { to: p } = n;
    let { scrollLeft: u, scrollTop: c } = n;
    if (p === "up" || p === "down")
      c = r + (p === "down" ? 1 : -1) * Math.floor(l / f) * f;
    else if (p === "left" || p === "right")
      u = s + (p === "right" ? 1 : -1) * h;
    else if (p === "home")
      c = 0;
    else if (p === "end")
      c = a - l;
    else if (p === "left-begin")
      u = 0;
    else if (p === "right-end")
      u = i - h;
    else {
      const { offsetLeft: b, offsetTop: _ } = n;
      typeof b == "number" && (u = s + b), typeof _ == "number" && (u = r + _);
    }
    const d = {};
    return typeof u == "number" && (u = Math.max(0, Math.min(u, i - h)), u !== s && (d.scrollLeft = u)), typeof c == "number" && (c = Math.max(0, Math.min(c, a - l)), c !== r && (d.scrollTop = c)), Object.keys(d).length ? (this.setState(d, () => {
      var b;
      (b = this.options.onScroll) == null || b.call(this, d), o == null || o.call(this, !0);
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
    var f, h;
    const s = typeof n == "object" ? n : this.getRowInfo(n);
    if (!s)
      return;
    const r = typeof o == "object" ? o : this.getColInfo(o);
    if (!r)
      return;
    let a = s.id === "HEADER" ? (f = r.setting.title) != null ? f : r.setting.name : (h = s.data) == null ? void 0 : h[r.name];
    const { cellValueGetter: l } = this.options;
    return l && (a = l.call(this, s, r, a)), a;
  }
  getRowInfoByIndex(n) {
    return this.layout.rows[n];
  }
  update(n = {}, o) {
    const { dirtyType: s, state: r } = n;
    s === "layout" ? R(this, he, void 0) : s === "options" && (R(this, he, void 0), R(this, Ee, void 0)), r ? this.setState({ ...r }, o) : this.forceUpdate(o);
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
    const a = s == null ? void 0 : s.getAttribute("data-col"), l = r == null ? void 0 : r.getAttribute("data-id");
    if (!(typeof a != "string" || typeof l != "string"))
      return {
        cellElement: s,
        rowElement: r,
        colName: a,
        rowID: l,
        target: o
      };
  }
  i18n(n, o, s) {
    var r;
    return (r = tn(v(this, Jt), n, o, s, this.options.lang)) != null ? r : `{i18n:${n}}`;
  }
  render() {
    var c;
    const n = q(this, Qn, mi).call(this), { className: o, rowHover: s, colHover: r, cellHover: a, bordered: l, striped: f, scrollbarHover: h } = this.options, i = { width: n == null ? void 0 : n.width, height: n == null ? void 0 : n.height }, p = ["dtable", o, {
      "dtable-hover-row": s,
      "dtable-hover-col": r,
      "dtable-hover-cell": a,
      "dtable-bordered": l,
      "dtable-striped": f,
      "dtable-scrolled-down": ((c = n == null ? void 0 : n.scrollTop) != null ? c : 0) > 0,
      "scrollbar-hover": h
    }], u = [];
    return n && v(this, K).forEach((d) => {
      var _;
      const b = (_ = d.onRender) == null ? void 0 : _.call(this, n);
      !b || (b.style && Object.assign(i, b.style), b.className && p.push(b.className), b.children && u.push(b.children));
    }), /* @__PURE__ */ M("div", {
      id: v(this, dt),
      className: T(p),
      style: i,
      ref: this.ref,
      tabIndex: -1
    }, n && q(this, zn, hi).call(this, n), n && q(this, Fn, di).call(this, n), n && q(this, Vn, pi).call(this, n), n && q(this, qn, _i).call(this, n));
  }
}
Ze = new WeakMap(), dt = new WeakMap(), Pe = new WeakMap(), Ee = new WeakMap(), Te = new WeakMap(), K = new WeakMap(), he = new WeakMap(), de = new WeakMap(), pt = new WeakMap(), Xt = new WeakMap(), Jt = new WeakMap(), $e = new WeakMap(), _t = new WeakMap(), vt = new WeakMap(), zn = new WeakSet(), hi = function(n) {
  const { header: o, colsInfo: s, headerHeight: r, scrollLeft: a } = n;
  if (!o)
    return null;
  if (o === !0)
    return /* @__PURE__ */ M(pc, {
      scrollLeft: a,
      height: r,
      onRenderCell: v(this, Qt),
      onRenderRow: v(this, Gn),
      ...s
    });
  const l = Array.isArray(o) ? o : [o];
  return /* @__PURE__ */ M(po, {
    className: "dtable-header",
    style: { height: r },
    renders: l,
    generateArgs: [n],
    generatorThis: this
  });
}, Fn = new WeakSet(), di = function(n) {
  const { headerHeight: o, rowsHeight: s, visibleRows: r, rowHeight: a, colsInfo: l, scrollLeft: f, scrollTop: h } = n;
  return /* @__PURE__ */ M(_c, {
    top: o,
    height: s,
    rows: r,
    rowHeight: a,
    scrollLeft: f,
    scrollTop: h,
    onRenderCell: v(this, Qt),
    onRenderRow: v(this, Yn),
    ...l
  });
}, Vn = new WeakSet(), pi = function(n) {
  const { footer: o } = n;
  if (!o)
    return null;
  const s = Array.isArray(o) ? o : [o];
  return /* @__PURE__ */ M(po, {
    className: "dtable-footer",
    style: { height: n.footerHeight, top: n.rowsHeight + n.headerHeight },
    renders: s,
    generateArgs: [n],
    generatorThis: this,
    generators: n.footerGenerators
  });
}, qn = new WeakSet(), _i = function(n) {
  const o = [], { scrollLeft: s, colsInfo: r, scrollTop: a, rowsHeight: l, rowsHeightTotal: f, footerHeight: h } = n, { scrollColsWidth: i, scrollWidth: p } = r, { scrollbarSize: u = 12, horzScrollbarPos: c } = this.options;
  return i > p && o.push(
    /* @__PURE__ */ M(vr, {
      key: "horz",
      type: "horz",
      scrollPos: s,
      scrollSize: i,
      clientSize: p,
      onScroll: v(this, en),
      left: r.fixedLeftWidth,
      bottom: (c === "inside" ? 0 : -u) + h,
      size: u,
      wheelContainer: this.ref
    })
  ), f > l && o.push(
    /* @__PURE__ */ M(vr, {
      key: "vert",
      type: "vert",
      scrollPos: a,
      scrollSize: f,
      clientSize: l,
      onScroll: v(this, en),
      right: 0,
      size: u,
      top: n.headerHeight,
      wheelContainer: this.ref
    })
  ), o.length ? o : null;
}, Zt = new WeakSet(), bo = function() {
  var n;
  R(this, Pe, !1), (n = this.options.afterRender) == null || n.call(this), v(this, K).forEach((o) => {
    var s;
    return (s = o.afterRender) == null ? void 0 : s.call(this);
  });
}, Yn = new WeakMap(), Gn = new WeakMap(), Qt = new WeakMap(), en = new WeakMap(), Kn = new WeakMap(), Xn = new WeakMap(), Jn = new WeakSet(), vi = function() {
  if (v(this, Ee))
    return !1;
  const o = { ...Ir(), ...v(this, Te).reduce((s, r) => {
    const { defaultOptions: a } = r;
    return a && Object.assign(s, a), s;
  }, {}), ...this.props };
  return R(this, Ee, o), R(this, K, v(this, Te).reduce((s, r) => {
    const { when: a, options: l } = r;
    return (!a || a(o)) && (s.push(r), l && Object.assign(o, typeof l == "function" ? l.call(this, o) : l)), s;
  }, [])), R(this, Jt, [this.options.i18n, ...this.plugins.map((s) => s.i18n)].filter(Boolean)), !0;
}, Zn = new WeakSet(), gi = function() {
  var Fe, be;
  const { plugins: n } = this;
  let o = v(this, Ee);
  const s = {
    flex: /* @__PURE__ */ M("div", {
      style: "flex:auto"
    }),
    divider: /* @__PURE__ */ M("div", {
      style: "width:1px;margin:var(--space);background:var(--color-border);height:50%"
    })
  };
  n.forEach((C) => {
    var F;
    const P = (F = C.beforeLayout) == null ? void 0 : F.call(this, o);
    P && (o = { ...o, ...P }), Object.assign(s, C.footer);
  });
  const { defaultColWidth: r, minColWidth: a, maxColWidth: l } = o, f = [], h = [], i = [], p = {}, u = [], c = [];
  let d = 0, b = 0, _ = 0;
  o.cols.forEach((C) => {
    if (C.hidden)
      return;
    const {
      name: P,
      type: F = "",
      fixed: G = !1,
      flex: se = !1,
      width: Ve = r,
      minWidth: Ae = a,
      maxWidth: on = l,
      ...rn
    } = C, lo = hc(Ve, Ae, on), D = {
      name: P,
      type: F,
      setting: {
        name: P,
        type: F,
        fixed: G,
        flex: se,
        width: Ve,
        minWidth: Ae,
        maxWidth: on,
        ...rn
      },
      flex: G ? 0 : se === !0 ? 1 : typeof se == "number" ? se : 0,
      left: 0,
      width: lo,
      realWidth: 0,
      visible: !0,
      index: u.length
    };
    n.forEach((Rt) => {
      var sn, an;
      const qe = (sn = Rt.colTypes) == null ? void 0 : sn[F];
      if (qe) {
        const ce = typeof qe == "function" ? qe(D) : qe;
        ce && Object.assign(D.setting, ce);
      }
      (an = Rt.onAddCol) == null || an.call(this, D);
    }), D.realWidth = D.realWidth || D.width, G === "left" ? (D.left = d, d += D.width, f.push(D)) : G === "right" ? (D.left = b, b += D.width, h.push(D)) : (D.left = _, _ += D.width, i.push(D)), D.flex && c.push(D), u.push(D), p[D.name] = D;
  });
  let g = o.width, m = 0;
  const w = d + _ + b;
  if (typeof g == "function" && (g = g.call(this, w)), g === "auto")
    m = w;
  else if (g === "100%") {
    const { parent: C } = this;
    if (C)
      m = C.clientWidth;
    else {
      m = 0, R(this, Pe, !0);
      return;
    }
  } else
    m = g != null ? g : 0;
  const { data: k, rowKey: x = "id", rowHeight: y } = o, E = [], S = (C, P, F) => {
    var se, Ve;
    const G = { data: F != null ? F : { [x]: C }, id: C, index: E.length, top: 0 };
    if (F || (G.lazy = !0), E.push(G), ((se = o.onAddRow) == null ? void 0 : se.call(this, G, P)) !== !1) {
      for (const Ae of n)
        if (((Ve = Ae.onAddRow) == null ? void 0 : Ve.call(this, G, P)) === !1)
          return;
    }
  };
  if (typeof k == "number")
    for (let C = 0; C < k; C++)
      S(`${C}`, C);
  else
    Array.isArray(k) && k.forEach((C, P) => {
      var F;
      typeof C == "object" ? S(`${(F = C[x]) != null ? F : ""}`, P, C) : S(`${C != null ? C : ""}`, P);
    });
  let O = E;
  const L = {};
  if (o.onAddRows) {
    const C = o.onAddRows.call(this, O);
    C && (O = C);
  }
  for (const C of n) {
    const P = (Fe = C.onAddRows) == null ? void 0 : Fe.call(this, O);
    P && (O = P);
  }
  O.forEach((C, P) => {
    L[C.id] = C, C.index = P, C.top = C.index * y;
  });
  const { header: N, footer: V } = o, z = N ? o.headerHeight || y : 0, re = V ? o.footerHeight || y : 0;
  let Y = o.height, j = 0;
  const J = O.length * y, Re = z + re + J;
  if (typeof Y == "function" && (Y = Y.call(this, Re)), Y === "auto")
    j = Re;
  else if (typeof Y == "object")
    j = Math.min(Y.max, Math.max(Y.min, Re));
  else if (Y === "100%") {
    const { parent: C } = this;
    if (C)
      j = C.clientHeight;
    else {
      j = 0, R(this, Pe, !0);
      return;
    }
  } else
    j = Y;
  const me = j - z - re, tt = m - d - b, ye = {
    options: o,
    allRows: E,
    width: m,
    height: j,
    rows: O,
    rowsMap: L,
    rowHeight: y,
    rowsHeight: me,
    rowsHeightTotal: J,
    header: N,
    footer: V,
    footerGenerators: s,
    headerHeight: z,
    footerHeight: re,
    colsMap: p,
    colsList: u,
    flexCols: c,
    colsInfo: {
      fixedLeftCols: f,
      fixedRightCols: h,
      scrollCols: i,
      fixedLeftWidth: d,
      scrollWidth: tt,
      scrollColsWidth: _,
      fixedRightWidth: b
    }
  }, Me = (be = o.onLayout) == null ? void 0 : be.call(this, ye);
  Me && Object.assign(ye, Me), n.forEach((C) => {
    if (C.onLayout) {
      const P = C.onLayout.call(this, ye);
      P && Object.assign(ye, P);
    }
  }), R(this, he, ye);
}, Qn = new WeakSet(), mi = function() {
  (q(this, Jn, vi).call(this) || !v(this, he)) && q(this, Zn, gi).call(this);
  const { layout: n } = this;
  if (!n)
    return;
  let { scrollLeft: o } = this.state;
  const { flexCols: s, colsInfo: { scrollCols: r, scrollWidth: a, scrollColsWidth: l } } = n;
  if (s.length) {
    const w = a - l;
    if (w > 0) {
      const k = s.reduce((y, E) => y + E.flex, 0);
      let x = 0;
      s.forEach((y) => {
        const E = Math.min(w - x, Math.ceil(w * (y.flex / k)));
        y.realWidth = E + y.width, x += y.realWidth;
      });
    } else
      s.forEach((k) => {
        k.realWidth = k.width;
      });
  }
  o = Math.min(Math.max(0, l - a), o);
  let f = 0;
  r.forEach((w) => {
    w.left = f, f += w.realWidth, w.visible = w.left + w.realWidth >= o && w.left <= o + a;
  });
  const { rowsHeightTotal: h, rowsHeight: i, rows: p, rowHeight: u } = n, c = Math.min(Math.max(0, h - i), this.state.scrollTop), d = Math.floor(c / u), b = c + i, _ = Math.min(p.length, Math.ceil(b / u)), g = [], { rowDataGetter: m } = this.options;
  for (let w = d; w < _; w++) {
    const k = p[w];
    k.lazy && m && (k.data = m([k.id])[0], k.lazy = !1), g.push(k);
  }
  return n.visibleRows = g, n.scrollTop = c, n.scrollLeft = o, n;
}, A(yo, "addPlugin", ci), A(yo, "removePlugin", fi);
function Br(e, t) {
  t !== void 0 ? e.data.hoverCol = t : t = e.data.hoverCol;
  const { current: n } = e.ref;
  if (!n)
    return;
  const o = "dtable-col-hover";
  n.querySelectorAll(`.${o}`).forEach((s) => s.classList.remove(o)), typeof t == "string" && t.length && n.querySelectorAll(`.dtable-cell[data-col="${t}"]`).forEach((s) => s.classList.add(o));
}
const yi = {
  name: "col-hover",
  defaultOptions: {
    colHover: !1
  },
  when: (e) => !!e.colHover,
  events: {
    mouseover(e) {
      var s, r;
      const { colHover: t } = this.options;
      if (!t)
        return;
      const n = (s = e.target) == null ? void 0 : s.closest(".dtable-cell");
      if (!n || t === "header" && !n.closest(".dtable-header"))
        return;
      const o = (r = n == null ? void 0 : n.getAttribute("data-col")) != null ? r : !1;
      Br(this, o);
    },
    mouseleave() {
      Br(this, !1);
    }
  }
};
nn(yi, { buildIn: !0 });
function mc(e, t) {
  var a, l;
  typeof e == "boolean" && (t = e, e = void 0);
  const n = this.state.checkedRows, o = {}, { canRowCheckable: s } = this.options, r = (f, h) => {
    s && !s.call(this, f) || !!n[f] === h || (h ? n[f] = !0 : delete n[f], o[f] = h);
  };
  if (e === void 0 ? (t === void 0 && (t = !bi.call(this)), (a = this.layout) == null || a.allRows.forEach(({ id: f }) => {
    r(f, !!t);
  })) : (Array.isArray(e) || (e = [e]), e.forEach((f) => {
    r(f, t != null ? t : !n[f]);
  })), Object.keys(o).length) {
    const f = (l = this.options.beforeCheckRows) == null ? void 0 : l.call(this, e, o, n);
    f && Object.keys(f).forEach((h) => {
      f[h] ? n[h] = !0 : delete n[h];
    }), this.setState({ checkedRows: { ...n } }, () => {
      var h;
      (h = this.options.onCheckChange) == null || h.call(this, o);
    });
  }
  return o;
}
function yc(e) {
  var t;
  return (t = this.state.checkedRows[e]) != null ? t : !1;
}
function bi() {
  var n, o;
  const e = this.getChecks().length, { canRowCheckable: t } = this.options;
  return t ? e === ((n = this.layout) == null ? void 0 : n.allRows.reduce((s, r) => s + (t.call(this, r.id) ? 1 : 0), 0)) : e === ((o = this.layout) == null ? void 0 : o.allRows.length);
}
function bc() {
  return Object.keys(this.state.checkedRows);
}
const wi = {
  name: "checkable",
  defaultOptions: { checkable: !0 },
  when: (e) => !!e.checkable,
  state() {
    return { checkedRows: {} };
  },
  methods: {
    toggleCheckRows: mc,
    isRowChecked: yc,
    isAllRowChecked: bi,
    getChecks: bc
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
        /* @__PURE__ */ M("div", {
          style: { padding: "0 calc(3 * var(--space))", display: "flex", alignItems: "center" },
          onClick: () => this.toggleCheckRows()
        }, /* @__PURE__ */ M("input", {
          type: "checkbox",
          checked: e
        }))
      ];
    },
    checkedInfo(e, t) {
      const n = this.getChecks().length, o = [];
      return n && o.push(this.i18n("checkedCountInfo", { selected: n })), o.push(this.i18n("totalCountInfo", { total: t.allRows.length })), [
        /* @__PURE__ */ M("div", null, o.join(", "))
      ];
    }
  },
  onRenderCell(e, { row: t, col: n }) {
    var l, f;
    const { id: o } = t, { canRowCheckable: s } = this.options;
    if (s && !s.call(this, o))
      return e;
    const { checkbox: r } = n.setting;
    if (typeof r == "function" ? r.call(this, o) : r) {
      const h = this.isRowChecked(o), i = (f = (l = this.options.checkboxRender) == null ? void 0 : l.call(this, h, o)) != null ? f : /* @__PURE__ */ M("input", {
        type: "checkbox",
        checked: h
      });
      e.unshift(i), e.push({ className: "has-checkbox" });
    }
    return e;
  },
  onRenderHeaderCell(e, { row: t, col: n }) {
    var a, l;
    const { id: o } = t, { checkbox: s } = n.setting;
    if (typeof s == "function" ? s.call(this, o) : s) {
      const f = this.isAllRowChecked(), h = (l = (a = this.options.checkboxRender) == null ? void 0 : a.call(this, f, o)) != null ? l : /* @__PURE__ */ M("input", {
        type: "checkbox",
        checked: f
      });
      e.unshift(h), e.push({ className: "has-checkbox" });
    }
    return e;
  },
  onRenderRow({ props: e, row: t }) {
    if (!!this.isRowChecked(t.id))
      return { className: T(e.className, "is-checked") };
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
};
nn(wi);
function wo(e) {
  const t = this.data.nestedMap.get(e);
  if (!t || t.state !== "")
    return t != null ? t : { state: "normal", level: -1 };
  if (!t.parent && !t.children)
    return t.state = "normal", t;
  const n = this.state.collapsedRows, o = t.children && n && n[e];
  let s = !1, { parent: r } = t;
  for (; r; ) {
    const a = wo.call(this, r);
    if (a.state !== "expanded") {
      s = !0;
      break;
    }
    r = a.parent;
  }
  return t.state = s ? "hidden" : o ? "collapsed" : t.children ? "expanded" : "normal", t.level = t.parent ? wo.call(this, t.parent).level + 1 : 0, t;
}
function wc(e, t) {
  var s;
  let n = (s = this.state.collapsedRows) != null ? s : {};
  const { nestedMap: o } = this.data;
  if (e === "HEADER")
    if (t === void 0 && (t = !ki.call(this)), t) {
      const r = o.entries();
      for (const [a, l] of r)
        l.state === "expanded" && (n[a] = !0);
    } else
      n = {};
  else {
    const r = Array.isArray(e) ? e : [e];
    t === void 0 && (t = !n[r[0]]), r.forEach((a) => {
      const l = o.get(a);
      t && (l == null ? void 0 : l.children) ? n[a] = !0 : delete n[a];
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
function ki() {
  const e = this.data.nestedMap.values();
  for (const t of e)
    if (t.state === "expanded")
      return !1;
  return !0;
}
function xi(e, t = 0, n, o = 0) {
  var s;
  n || (n = [...e.keys()]);
  for (const r of n) {
    const a = e.get(r);
    !a || (a.level === o && (a.order = t++), (s = a.children) != null && s.length && (t = xi(e, t, a.children, o + 1)));
  }
  return t;
}
function Ei(e, t, n, o) {
  const s = e.getNestedRowInfo(t);
  return !s || s.state === "" || !s.children || s.children.forEach((r) => {
    o[r] = n, Ei(e, r, n, o);
  }), s;
}
function $i(e, t, n, o, s) {
  var l;
  const r = e.getNestedRowInfo(t);
  if (!r || r.state === "")
    return;
  ((l = r.children) == null ? void 0 : l.every((f) => {
    const h = !!(o[f] !== void 0 ? o[f] : s[f]);
    return n === h;
  })) && (o[t] = n), r.parent && $i(e, r.parent, n, o, s);
}
const Si = {
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
        const a = Ei(this, s, r, o);
        a != null && a.parent && $i(this, a.parent, r, o, n);
      }), o;
    }
  },
  when: (e) => !!e.nested,
  data() {
    return { nestedMap: /* @__PURE__ */ new Map() };
  },
  methods: {
    toggleRow: wc,
    isAllCollapsed: ki,
    getNestedRowInfo: wo
  },
  beforeLayout() {
    this.data.nestedMap.clear();
  },
  onAddRow(e) {
    var s, r, a, l, f;
    const { nestedMap: t } = this.data, n = (r = e.data) == null ? void 0 : r[(s = this.options.nestedParentKey) != null ? s : "parent"], o = (a = t.get(e.id)) != null ? a : {
      state: "",
      level: 0
    };
    if (o.parent = n, (f = e.data) != null && f[(l = this.options.asParentKey) != null ? l : "asParent"] && (o.children = []), t.set(e.id, o), n) {
      let h = t.get(n);
      h || (h = {
        state: "",
        level: 0
      }, t.set(n, h)), h.children || (h.children = []), h.children.push(e.id);
    }
  },
  onAddRows(e) {
    return e = e.filter((t) => this.getNestedRowInfo(t.id).state !== "hidden"), xi(this.data.nestedMap), e.sort((t, n) => {
      var a, l;
      const o = this.getNestedRowInfo(t.id), s = this.getNestedRowInfo(n.id), r = ((a = o.order) != null ? a : 0) - ((l = s.order) != null ? l : 0);
      return r === 0 ? t.index - n.index : r;
    }), e;
  },
  onRenderCell(e, { col: t, row: n }) {
    var l, f, h;
    const { id: o, data: s } = n, { nestedToggle: r } = t.setting, a = this.getNestedRowInfo(o);
    if (r && (a.children || a.parent) && e.unshift((f = (l = this.options.onRenderNestedToggle) == null ? void 0 : l.call(this, a, o, t, s)) != null ? f : /* @__PURE__ */ M("a", {
      role: "button",
      className: `dtable-nested-toggle state${a.children ? "" : " is-no-child"}`
    }, /* @__PURE__ */ M("span", {
      className: "dtable-nested-toggle-icon"
    }))), a.level) {
      let { nestedIndent: i = r } = t.setting;
      i && (i === !0 && (i = (h = this.options.nestedIndent) != null ? h : 12), e.unshift(/* @__PURE__ */ M("div", {
        className: "dtable-nested-indent",
        style: { width: i * a.level + "px" }
      })));
    }
    return e;
  },
  onRenderHeaderCell(e, { row: t, col: n }) {
    var s, r;
    const { id: o } = t;
    return n.setting.nestedToggle && e.unshift((r = (s = this.options.onRenderNestedToggle) == null ? void 0 : s.call(this, void 0, o, n, void 0)) != null ? r : /* @__PURE__ */ M("a", {
      type: "button",
      className: "dtable-nested-toggle state"
    }, /* @__PURE__ */ M("span", {
      className: "dtable-nested-toggle-icon"
    }))), e;
  },
  onRenderRow({ props: e, row: t }) {
    const n = this.getNestedRowInfo(t.id);
    return {
      className: T(e.className, `is-nested-${n.state}`),
      "data-parent": n.parent
    };
  },
  onRenderHeaderRow({ props: e }) {
    return e.className = T(e.className, `is-nested-${this.isAllCollapsed() ? "collapsed" : "expanded"}`), e;
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
};
nn(Si);
const _e = 24 * 60 * 60 * 1e3, Z = (e) => e ? (e instanceof Date || (typeof e == "string" && (e = e.trim(), /^\d+$/.test(e) && (e = Number.parseInt(e, 10))), typeof e == "number" && e < 1e10 && (e *= 1e3), e = new Date(e)), e) : new Date(), Ct = (e, t = new Date()) => (e = Z(e), t = Z(t), e.getFullYear() === t.getFullYear() && e.getMonth() === t.getMonth() && e.getDate() === t.getDate()), ko = (e, t = new Date()) => Z(e).getFullYear() === Z(t).getFullYear(), Ci = (e, t = new Date()) => (e = Z(e), t = Z(t), e.getFullYear() === t.getFullYear() && e.getMonth() === t.getMonth()), kc = (e, t = new Date()) => {
  e = Z(e), t = Z(t);
  const n = 1e3 * 60 * 60 * 24, o = Math.floor(e.getTime() / n), s = Math.floor(t.getTime() / n);
  return Math.floor((o + 4) / 7) === Math.floor((s + 4) / 7);
}, xc = (e, t) => Ct(Z(t), e), Ec = (e, t) => Ct(Z(t).getTime() - _e, e), $c = (e, t) => Ct(Z(t).getTime() + _e, e), Sc = (e, t) => Ct(Z(t).getTime() - 2 * _e, e), In = (e, t = "yyyy-MM-dd hh:mm") => {
  e = Z(e);
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
}, Cc = (e, t, n) => {
  const o = {
    full: "yyyy-M-d",
    month: "M-d",
    day: "d",
    str: "{0} ~ {1}",
    ...n
  }, s = In(e, ko(e) ? o.month : o.full);
  if (Ct(e, t))
    return s;
  const r = In(t, ko(e, t) ? Ci(e, t) ? o.day : o.month : o.full);
  return o.str.replace("{0}", s).replace("{1}", r);
}, Rc = (e) => {
  const t = new Date().getTime();
  switch (e) {
    case "oneWeek":
      return t - _e * 7;
    case "oneMonth":
      return t - _e * 31;
    case "threeMonth":
      return t - _e * 31 * 3;
    case "halfYear":
      return t - _e * 183;
    case "oneYear":
      return t - _e * 365;
    case "twoYear":
      return t - 2 * (_e * 365);
    default:
      return 0;
  }
}, xo = (e, t, n = !0, o = Date.now()) => {
  switch (t) {
    case "year":
      return e *= 365, xo(e, "day", n, o);
    case "quarter":
      e *= 3;
    case "month":
      return e *= 30, xo(e, "day", n, o);
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
const Ri = {
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
        const { linkTemplate: o = "", linkProps: s } = t.setting, r = nt(o, n.data);
        return e[0] = /* @__PURE__ */ M("a", {
          href: r,
          ...s
        }, e[0]), e;
      }
    },
    avatar: {
      onRenderCell(e, { col: t, row: n }) {
        const { data: o } = n, { avatarWithName: s, avatarClass: r = "size-sm circle", avatarKey: a = `${t.name}Avatar` } = t.setting, l = /* @__PURE__ */ M("div", {
          className: `avatar ${r} flex-none`
        }, /* @__PURE__ */ M("img", {
          src: o ? o[a] : ""
        }));
        return s ? e.unshift(l) : e[0] = l, e;
      }
    },
    circleProgress: {
      onRenderCell(e, { col: t }) {
        const { circleSize: n = 24, circleBorderSize: o = 1, circleBgColor: s = "var(--color-border)", circleColor: r = "var(--color-success-500)" } = t.setting, a = (n - o) / 2, l = n / 2, f = e[0];
        return e[0] = /* @__PURE__ */ M("svg", {
          width: n,
          height: n
        }, /* @__PURE__ */ M("circle", {
          cx: l,
          cy: l,
          r: a,
          "stroke-width": o,
          stroke: s,
          fill: "transparent"
        }), /* @__PURE__ */ M("circle", {
          cx: l,
          cy: l,
          r: a,
          "stroke-width": o,
          stroke: r,
          fill: "transparent",
          "stroke-linecap": "round",
          "stroke-dasharray": Math.PI * a * 2,
          "stroke-dashoffset": Math.PI * a * 2 * (100 - f) / 100,
          style: { transformOrigin: "center", transform: "rotate(-90deg)" }
        }), /* @__PURE__ */ M("text", {
          x: l,
          y: l + o,
          "dominant-baseline": "middle",
          "text-anchor": "middle",
          style: { fontSize: `${a}px` }
        }, Math.round(f))), e;
      }
    },
    actionButtons: {
      onRenderCell(e, { col: t, row: n }) {
        var l;
        const o = (l = n.data) == null ? void 0 : l[t.name];
        if (!o)
          return e;
        const { actionBtnTemplate: s = '<button type="button" data-action="{action}" title="{title}" class="{className}"><i class="icon icon-{icon}"></i></button>', actionBtnData: r = {}, actionBtnClass: a = "btn text-primary square size-sm ghost" } = t.setting;
        return [{
          html: o.map((f) => {
            typeof f == "string" && (f = { action: f });
            const h = r[f.action];
            return h && (f = { className: a, ...h, ...f }), nt(s, f);
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
        return typeof o == "function" ? e[0] = s === "html" ? { html: o(r) } : o(r) : s === "datetime" ? e[0] = In(r, o) : s === "html" ? e[0] = { html: nt(o, r) } : e[0] = nt(o, r), e;
      }
    }
  }
};
nn(Ri);
const Mc = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  colHover: yi,
  checkable: wi,
  nested: Si,
  rich: Ri
}, Symbol.toStringTag, { value: "Module" }));
class fn extends oo {
}
A(fn, "Component", yo), A(fn, "definePlugin", nn), A(fn, "removePlugin", fi), A(fn, "plugins", Mc);
var pe, ee;
class Ac {
  constructor(t) {
    $(this, pe, void 0);
    $(this, ee, void 0);
    R(this, pe, t), R(this, ee, document.querySelector(t.getAttribute("data-target")) || document.querySelector(t.getAttribute("data-tab")) || document.querySelector(t.getAttribute("href")));
  }
  showTarget() {
    this.addActive(v(this, pe).parentElement.parentElement, v(this, pe).parentElement), this.addActive(v(this, ee).parentElement, v(this, ee)), v(this, ee).dispatchEvent(new CustomEvent("show.zui3.tab"));
  }
  show() {
    R(this, ee, v(this, pe)), this.addActive(v(this, ee).parentElement, v(this, ee)), R(this, pe, document.querySelector(`[href='#${v(this, ee).getAttribute("id")}']`) || document.querySelector(`[data-tab='#${v(this, ee).getAttribute("id")}']`) || document.querySelector(`[data-target='#${v(this, ee).getAttribute("id")}']`)), this.addActive(v(this, pe).parentElement.parentElement, v(this, pe).parentElement);
  }
  addActive(t, n) {
    const o = t.children;
    Array.from(o).forEach((r) => {
      r.classList.remove("active"), r.classList.contains("fade") && r.classList.remove("in");
    }), n.classList.add("active"), n.classList.contains("fade") && this.transition(n).then(function(r) {
      n.dispatchEvent(new CustomEvent("shown.zui3.tab"));
    });
  }
  transition(t) {
    return new Promise(function(n, o) {
      setTimeout(() => {
        t.classList.add("in"), n();
      }, 100);
    });
  }
}
pe = new WeakMap(), ee = new WeakMap();
document.addEventListener("click", function(e) {
  e.target instanceof HTMLElement && (e.target.dataset.toggle === "tab" || e.target.getAttribute("data-tab")) && (e.preventDefault(), new Ac(e.target).showTarget());
});
const Pc = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  TIME_DAY: _e,
  createDate: Z,
  isSameDay: Ct,
  isSameYear: ko,
  isSameMonth: Ci,
  isSameWeek: kc,
  isToday: xc,
  isYesterday: Ec,
  isTomorrow: $c,
  isDBY: Sc,
  formatDate: In,
  formatDateSpan: Cc,
  getTimeBeforeDesc: Rc,
  calculateTimestamp: xo,
  formatString: nt,
  formatBytes: Ii,
  convertBytes: Bi,
  isObject: dn,
  mergeDeep: $n
}, Symbol.toStringTag, { value: "Module" }));
export {
  oa as ActionMenu,
  ra as ActionMenuNested,
  Lc as Avatar,
  ie as ContextMenu,
  fn as DTable,
  Be as Dropdown,
  $o as EventBus,
  ps as Menu,
  Ac as NavTabs,
  vr as Scrollbar,
  Fi as addI18nMap,
  Nc as browser,
  Ui as getLangCode,
  Pc as helpers,
  tn as i18n,
  ho as nativeEvents,
  zi as setLangCode,
  _a as store
};
