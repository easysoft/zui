var ci = Object.defineProperty;
var fi = (e, t, n) => t in e ? ci(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var N = (e, t, n) => (fi(e, typeof t != "symbol" ? t + "" : t, n), n), Zn = (e, t, n) => {
  if (!t.has(e))
    throw TypeError("Cannot " + n);
};
var v = (e, t, n) => (Zn(e, t, "read from private field"), n ? n.call(e) : t.get(e)), C = (e, t, n) => {
  if (t.has(e))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(e) : t.set(e, n);
}, A = (e, t, n, o) => (Zn(e, t, "write to private field"), o ? o.call(e, n) : t.set(e, n), n);
var j = (e, t, n) => (Zn(e, t, "access private method"), n);
var zn, H, Rr, Ar, Ct, jo, hn = {}, Mr = [], ui = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function Te(e, t) {
  for (var n in t)
    e[n] = t[n];
  return e;
}
function Lr(e) {
  var t = e.parentNode;
  t && t.removeChild(e);
}
function Fn(e, t, n) {
  var o, s, r, l = {};
  for (r in t)
    r == "key" ? o = t[r] : r == "ref" ? s = t[r] : l[r] = t[r];
  if (arguments.length > 2 && (l.children = arguments.length > 3 ? zn.call(arguments, 2) : n), typeof e == "function" && e.defaultProps != null)
    for (r in e.defaultProps)
      l[r] === void 0 && (l[r] = e.defaultProps[r]);
  return tn(e, l, o, s, null);
}
function tn(e, t, n, o, s) {
  var r = { type: e, props: t, key: n, ref: o, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: s == null ? ++Rr : s };
  return s == null && H.vnode != null && H.vnode(r), r;
}
function hi() {
  return { current: null };
}
function Vn(e) {
  return e.children;
}
function nn(e, t) {
  this.props = e, this.context = t;
}
function ht(e, t) {
  if (t == null)
    return e.__ ? ht(e.__, e.__.__k.indexOf(e) + 1) : null;
  for (var n; t < e.__k.length; t++)
    if ((n = e.__k[t]) != null && n.__e != null)
      return n.__e;
  return typeof e.type == "function" ? ht(e) : null;
}
function Nr(e) {
  var t, n;
  if ((e = e.__) != null && e.__c != null) {
    for (e.__e = e.__c.base = null, t = 0; t < e.__k.length; t++)
      if ((n = e.__k[t]) != null && n.__e != null) {
        e.__e = e.__c.base = n.__e;
        break;
      }
    return Nr(e);
  }
}
function Io(e) {
  (!e.__d && (e.__d = !0) && Ct.push(e) && !_n.__r++ || jo !== H.debounceRendering) && ((jo = H.debounceRendering) || setTimeout)(_n);
}
function _n() {
  for (var e; _n.__r = Ct.length; )
    e = Ct.sort(function(t, n) {
      return t.__v.__b - n.__v.__b;
    }), Ct = [], e.some(function(t) {
      var n, o, s, r, l, a;
      t.__d && (l = (r = (n = t).__v).__e, (a = n.__P) && (o = [], (s = Te({}, r)).__v = r.__v + 1, uo(a, r, s, n.__n, a.ownerSVGElement !== void 0, r.__h != null ? [l] : null, o, l == null ? ht(r) : l, r.__h), Tr(o, r), r.__e != l && Nr(r)));
    });
}
function Or(e, t, n, o, s, r, l, a, f, h) {
  var i, d, u, c, _, b, p, g = o && o.__k || Mr, m = g.length;
  for (n.__k = [], i = 0; i < t.length; i++)
    if ((c = n.__k[i] = (c = t[i]) == null || typeof c == "boolean" ? null : typeof c == "string" || typeof c == "number" || typeof c == "bigint" ? tn(null, c, null, null, c) : Array.isArray(c) ? tn(Vn, { children: c }, null, null, null) : c.__b > 0 ? tn(c.type, c.props, c.key, null, c.__v) : c) != null) {
      if (c.__ = n, c.__b = n.__b + 1, (u = g[i]) === null || u && c.key == u.key && c.type === u.type)
        g[i] = void 0;
      else
        for (d = 0; d < m; d++) {
          if ((u = g[d]) && c.key == u.key && c.type === u.type) {
            g[d] = void 0;
            break;
          }
          u = null;
        }
      uo(e, c, u = u || hn, s, r, l, a, f, h), _ = c.__e, (d = c.ref) && u.ref != d && (p || (p = []), u.ref && p.push(u.ref, null, c), p.push(d, c.__c || _, c)), _ != null ? (b == null && (b = _), typeof c.type == "function" && c.__k === u.__k ? c.__d = f = Dr(c, f, e) : f = Pr(e, c, u, g, _, f), typeof n.type == "function" && (n.__d = f)) : f && u.__e == f && f.parentNode != e && (f = ht(u));
    }
  for (n.__e = b, i = m; i--; )
    g[i] != null && (typeof n.type == "function" && g[i].__e != null && g[i].__e == n.__d && (n.__d = ht(o, i + 1)), Wr(g[i], g[i]));
  if (p)
    for (i = 0; i < p.length; i++)
      Hr(p[i], p[++i], p[++i]);
}
function Dr(e, t, n) {
  for (var o, s = e.__k, r = 0; s && r < s.length; r++)
    (o = s[r]) && (o.__ = e, t = typeof o.type == "function" ? Dr(o, t, n) : Pr(n, o, o, s, o.__e, t));
  return t;
}
function Pr(e, t, n, o, s, r) {
  var l, a, f;
  if (t.__d !== void 0)
    l = t.__d, t.__d = void 0;
  else if (n == null || s != r || s.parentNode == null)
    e:
      if (r == null || r.parentNode !== e)
        e.appendChild(s), l = null;
      else {
        for (a = r, f = 0; (a = a.nextSibling) && f < o.length; f += 2)
          if (a == s)
            break e;
        e.insertBefore(s, r), l = r;
      }
  return l !== void 0 ? l : s.nextSibling;
}
function _i(e, t, n, o, s) {
  var r;
  for (r in n)
    r === "children" || r === "key" || r in t || dn(e, r, null, n[r], o);
  for (r in t)
    s && typeof t[r] != "function" || r === "children" || r === "key" || r === "value" || r === "checked" || n[r] === t[r] || dn(e, r, t[r], n[r], o);
}
function Uo(e, t, n) {
  t[0] === "-" ? e.setProperty(t, n) : e[t] = n == null ? "" : typeof n != "number" || ui.test(t) ? n : n + "px";
}
function dn(e, t, n, o, s) {
  var r;
  e:
    if (t === "style")
      if (typeof n == "string")
        e.style.cssText = n;
      else {
        if (typeof o == "string" && (e.style.cssText = o = ""), o)
          for (t in o)
            n && t in n || Uo(e.style, t, "");
        if (n)
          for (t in n)
            o && n[t] === o[t] || Uo(e.style, t, n[t]);
      }
    else if (t[0] === "o" && t[1] === "n")
      r = t !== (t = t.replace(/Capture$/, "")), t = t.toLowerCase() in e ? t.toLowerCase().slice(2) : t.slice(2), e.l || (e.l = {}), e.l[t + r] = n, n ? o || e.addEventListener(t, r ? zo : Bo, r) : e.removeEventListener(t, r ? zo : Bo, r);
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
function Bo(e) {
  this.l[e.type + !1](H.event ? H.event(e) : e);
}
function zo(e) {
  this.l[e.type + !0](H.event ? H.event(e) : e);
}
function uo(e, t, n, o, s, r, l, a, f) {
  var h, i, d, u, c, _, b, p, g, m, w, k, x, y = t.type;
  if (t.constructor !== void 0)
    return null;
  n.__h != null && (f = n.__h, a = t.__e = n.__e, t.__h = null, r = [a]), (h = H.__b) && h(t);
  try {
    e:
      if (typeof y == "function") {
        if (p = t.props, g = (h = y.contextType) && o[h.__c], m = h ? g ? g.props.value : h.__ : o, n.__c ? b = (i = t.__c = n.__c).__ = i.__E : ("prototype" in y && y.prototype.render ? t.__c = i = new y(p, m) : (t.__c = i = new nn(p, m), i.constructor = y, i.render = pi), g && g.sub(i), i.props = p, i.state || (i.state = {}), i.context = m, i.__n = o, d = i.__d = !0, i.__h = []), i.__s == null && (i.__s = i.state), y.getDerivedStateFromProps != null && (i.__s == i.state && (i.__s = Te({}, i.__s)), Te(i.__s, y.getDerivedStateFromProps(p, i.__s))), u = i.props, c = i.state, d)
          y.getDerivedStateFromProps == null && i.componentWillMount != null && i.componentWillMount(), i.componentDidMount != null && i.__h.push(i.componentDidMount);
        else {
          if (y.getDerivedStateFromProps == null && p !== u && i.componentWillReceiveProps != null && i.componentWillReceiveProps(p, m), !i.__e && i.shouldComponentUpdate != null && i.shouldComponentUpdate(p, i.__s, m) === !1 || t.__v === n.__v) {
            i.props = p, i.state = i.__s, t.__v !== n.__v && (i.__d = !1), i.__v = t, t.__e = n.__e, t.__k = n.__k, t.__k.forEach(function(E) {
              E && (E.__ = t);
            }), i.__h.length && l.push(i);
            break e;
          }
          i.componentWillUpdate != null && i.componentWillUpdate(p, i.__s, m), i.componentDidUpdate != null && i.__h.push(function() {
            i.componentDidUpdate(u, c, _);
          });
        }
        if (i.context = m, i.props = p, i.__v = t, i.__P = e, w = H.__r, k = 0, "prototype" in y && y.prototype.render)
          i.state = i.__s, i.__d = !1, w && w(t), h = i.render(i.props, i.state, i.context);
        else
          do
            i.__d = !1, w && w(t), h = i.render(i.props, i.state, i.context), i.state = i.__s;
          while (i.__d && ++k < 25);
        i.state = i.__s, i.getChildContext != null && (o = Te(Te({}, o), i.getChildContext())), d || i.getSnapshotBeforeUpdate == null || (_ = i.getSnapshotBeforeUpdate(u, c)), x = h != null && h.type === Vn && h.key == null ? h.props.children : h, Or(e, Array.isArray(x) ? x : [x], t, n, o, s, r, l, a, f), i.base = t.__e, t.__h = null, i.__h.length && l.push(i), b && (i.__E = i.__ = null), i.__e = !1;
      } else
        r == null && t.__v === n.__v ? (t.__k = n.__k, t.__e = n.__e) : t.__e = di(n.__e, t, n, o, s, r, l, f);
    (h = H.diffed) && h(t);
  } catch (E) {
    t.__v = null, (f || r != null) && (t.__e = a, t.__h = !!f, r[r.indexOf(a)] = null), H.__e(E, t, n);
  }
}
function Tr(e, t) {
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
function di(e, t, n, o, s, r, l, a) {
  var f, h, i, d = n.props, u = t.props, c = t.type, _ = 0;
  if (c === "svg" && (s = !0), r != null) {
    for (; _ < r.length; _++)
      if ((f = r[_]) && "setAttribute" in f == !!c && (c ? f.localName === c : f.nodeType === 3)) {
        e = f, r[_] = null;
        break;
      }
  }
  if (e == null) {
    if (c === null)
      return document.createTextNode(u);
    e = s ? document.createElementNS("http://www.w3.org/2000/svg", c) : document.createElement(c, u.is && u), r = null, a = !1;
  }
  if (c === null)
    d === u || a && e.data === u || (e.data = u);
  else {
    if (r = r && zn.call(e.childNodes), h = (d = n.props || hn).dangerouslySetInnerHTML, i = u.dangerouslySetInnerHTML, !a) {
      if (r != null)
        for (d = {}, _ = 0; _ < e.attributes.length; _++)
          d[e.attributes[_].name] = e.attributes[_].value;
      (i || h) && (i && (h && i.__html == h.__html || i.__html === e.innerHTML) || (e.innerHTML = i && i.__html || ""));
    }
    if (_i(e, u, d, s, a), i)
      t.__k = [];
    else if (_ = t.props.children, Or(e, Array.isArray(_) ? _ : [_], t, n, o, s && c !== "foreignObject", r, l, r ? r[0] : n.__k && ht(n, 0), a), r != null)
      for (_ = r.length; _--; )
        r[_] != null && Lr(r[_]);
    a || ("value" in u && (_ = u.value) !== void 0 && (_ !== e.value || c === "progress" && !_ || c === "option" && _ !== d.value) && dn(e, "value", _, d.value, !1), "checked" in u && (_ = u.checked) !== void 0 && _ !== e.checked && dn(e, "checked", _, d.checked, !1));
  }
  return e;
}
function Hr(e, t, n) {
  try {
    typeof e == "function" ? e(t) : e.current = t;
  } catch (o) {
    H.__e(o, n);
  }
}
function Wr(e, t, n) {
  var o, s;
  if (H.unmount && H.unmount(e), (o = e.ref) && (o.current && o.current !== e.__e || Hr(o, null, t)), (o = e.__c) != null) {
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
      o[s] && Wr(o[s], t, typeof e.type != "function");
  n || e.__e == null || Lr(e.__e), e.__e = e.__d = void 0;
}
function pi(e, t, n) {
  return this.constructor(e, n);
}
function vi(e, t, n) {
  var o, s, r;
  H.__ && H.__(e, t), s = (o = typeof n == "function") ? null : n && n.__k || t.__k, r = [], uo(t, e = (!o && n || t).__k = Fn(Vn, null, [e]), s || hn, hn, t.ownerSVGElement !== void 0, !o && n ? [n] : s ? null : t.firstChild ? zn.call(t.childNodes) : null, r, !o && n ? n : s ? s.__e : t.firstChild, o), Tr(r, e);
}
zn = Mr.slice, H = { __e: function(e, t, n, o) {
  for (var s, r, l; t = t.__; )
    if ((s = t.__c) && !s.__)
      try {
        if ((r = s.constructor) && r.getDerivedStateFromError != null && (s.setState(r.getDerivedStateFromError(e)), l = s.__d), s.componentDidCatch != null && (s.componentDidCatch(e, o || {}), l = s.__d), l)
          return s.__E = s;
      } catch (a) {
        e = a;
      }
  throw e;
} }, Rr = 0, Ar = function(e) {
  return e != null && e.constructor === void 0;
}, nn.prototype.setState = function(e, t) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = Te({}, this.state), typeof e == "function" && (e = e(Te({}, n), this.props)), e && Te(n, e), e != null && this.__v && (t && this.__h.push(t), Io(this));
}, nn.prototype.forceUpdate = function(e) {
  this.__v && (this.__e = !0, e && this.__h.push(e), Io(this));
}, nn.prototype.render = Vn, Ct = [], _n.__r = 0;
var be;
class gi {
  constructor(t = "") {
    C(this, be, void 0);
    typeof t == "object" ? A(this, be, t) : A(this, be, document.appendChild(document.createComment(t)));
  }
  on(t, n, o) {
    v(this, be).addEventListener(t, n, o);
  }
  once(t, n, o) {
    v(this, be).addEventListener(t, n, { once: !0, ...o });
  }
  off(t, n, o) {
    v(this, be).removeEventListener(t, n, o);
  }
  emit(t) {
    return v(this, be).dispatchEvent(t), t;
  }
}
be = new WeakMap();
const eo = /* @__PURE__ */ new Set([
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
class ho extends gi {
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
    return typeof t == "string" && (eo.has(t) ? (t = new Event(t), Object.assign(t, { detail: n })) : t = new CustomEvent(t, { detail: n })), super.emit(ho.createEvent(t, n));
  }
  static createEvent(t, n) {
    return typeof t == "string" && (eo.has(t) ? (t = new Event(t), Object.assign(t, { detail: n })) : t = new CustomEvent(t, { detail: n })), t;
  }
}
var we, Ht, Ye, Et;
class Fo extends ho {
  constructor(n = "", o) {
    super(n);
    C(this, Ye);
    C(this, we, /* @__PURE__ */ new Map());
    C(this, Ht, void 0);
    A(this, Ht, o == null ? void 0 : o.customEventSuffix);
  }
  on(n, o, s) {
    n = j(this, Ye, Et).call(this, n), super.on(n, o, s), v(this, we).set(o, [n, s]);
  }
  off(n, o, s) {
    n = j(this, Ye, Et).call(this, n), super.off(n, o, s), v(this, we).delete(o);
  }
  once(n, o, s) {
    n = j(this, Ye, Et).call(this, n);
    const r = (l) => {
      o(l), v(this, we).delete(r);
    };
    super.once(n, r, s), v(this, we).set(r, [n, s]);
  }
  emit(n, o) {
    return typeof n == "string" && (n = j(this, Ye, Et).call(this, n)), super.emit(n, o);
  }
  offAll() {
    Array.from(v(this, we).entries()).forEach(([n, [o, s]]) => {
      super.off(o, n, s);
    }), v(this, we).clear();
  }
}
we = new WeakMap(), Ht = new WeakMap(), Ye = new WeakSet(), Et = function(n) {
  const o = v(this, Ht);
  return eo.has(n) || typeof o != "string" || n.endsWith(o) ? n : `${n}${o}`;
};
function mi(e, t) {
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
function yi(e, t, n) {
  const o = mi(e, t), s = o[o.length - 1];
  return s === void 0 ? n : s;
}
function on(e) {
  return !!e && typeof e == "object" && !Array.isArray(e);
}
function pn(e, ...t) {
  if (!t.length)
    return e;
  const n = t.shift();
  if (on(e) && on(n))
    for (const o in n)
      on(n[o]) ? (e[o] || Object.assign(e, { [o]: {} }), pn(e[o], n[o])) : Object.assign(e, { [o]: n[o] });
  return pn(e, ...t);
}
function et(e, ...t) {
  var n;
  if (t.length === 0)
    return e;
  if (t.length === 1 && typeof t[0] == "object" && t[0]) {
    const o = t[0];
    return Object.keys(o).forEach((s) => {
      var l;
      const r = (l = o[s]) != null ? l : 0;
      e = e.replace(new RegExp(`\\{${s}\\}`, "g"), `${r}`);
    }), e;
  }
  for (let o = 0; o < t.length; o++) {
    const s = (n = t[o]) != null ? n : "";
    e = e.replace(new RegExp(`\\{${o}\\}`, "g"), `${s}`);
  }
  return e;
}
var _o = /* @__PURE__ */ ((e) => (e[e.B = 1] = "B", e[e.KB = 1024] = "KB", e[e.MB = 1048576] = "MB", e[e.GB = 1073741824] = "GB", e[e.TB = 1099511627776] = "TB", e))(_o || {});
function bi(e, t = 2, n = "") {
  return Number.isNaN(e) ? "?KB" : (n || (e < 1024 ? n = "B" : e < 1048576 ? n = "KB" : e < 1073741824 ? n = "MB" : e < 1099511627776 ? n = "GB" : n = "TB"), (e / _o[n]).toFixed(t) + n);
}
const wi = (e) => {
  const t = /^[0-9]*(B|KB|MB|GB|TB)$/;
  e = e.toUpperCase();
  const n = e.match(t);
  if (!n)
    return 0;
  const o = n[1];
  return e = e.replace(o, ""), Number.parseInt(e, 10) * _o[o];
};
var $r, Sr;
let po = (Sr = ($r = document.documentElement.getAttribute("lang")) == null ? void 0 : $r.toLowerCase()) != null ? Sr : "zh_cn", Le;
function ki() {
  return po;
}
function xi(e) {
  po = e.toLowerCase();
}
function Ei(e, t) {
  Le || (Le = {}), typeof e == "string" && (e = { [e]: t != null ? t : {} }), pn(Le, e);
}
function qt(e, t, n, o, s, r) {
  Array.isArray(e) ? Le && e.unshift(Le) : e = Le ? [Le, e] : [e], typeof n == "string" && (r = s, s = o, o = n, n = void 0);
  const l = s || po;
  let a;
  for (const f of e) {
    if (!f)
      continue;
    const h = f[l];
    if (!h)
      continue;
    const i = r && f === Le ? `${r}.${t}` : t;
    if (a = yi(h, i), a !== void 0)
      break;
  }
  return a === void 0 ? o : n ? et(a, ...Array.isArray(n) ? n : [n]) : a;
}
qt.addLang = Ei;
qt.getCode = ki;
qt.setCode = xi;
function Ci(e) {
  return Object.fromEntries(Object.entries(e).map(([t, n]) => {
    if (typeof n == "string")
      try {
        n = JSON.parse(n);
      } catch {
      }
    return [t, n];
  }));
}
var ke, ot, Z;
class vn {
  constructor(t, n) {
    C(this, ke, void 0);
    C(this, ot, void 0);
    C(this, Z, void 0);
    var o;
    t = typeof t == "string" ? document.querySelector(t) : t, this.constructor.EVENTS && A(this, Z, new Fo(t, { customEventSuffix: `.${this.constructor.KEY}` })), A(this, ke, { ...this.constructor.DEFAULT, ...t instanceof HTMLElement ? Ci(t.dataset) : null, ...n }), this.constructor.all.set(t, this), A(this, ot, t), this.init(), (o = v(this, Z)) == null || o.emit("inited", this);
  }
  get options() {
    return v(this, ke);
  }
  get element() {
    return v(this, ot);
  }
  get events() {
    return v(this, Z);
  }
  init() {
  }
  setOptions(t) {
    return t && Object.assign(v(this, ke), t), v(this, ke);
  }
  render(t) {
    this.setOptions(t);
  }
  destroy() {
    this.constructor.all.delete(v(this, ot)), v(this, Z) && (v(this, Z).emit("destroyed", this), v(this, Z).offAll());
  }
  on(t, n, o) {
    var s;
    (s = v(this, Z)) == null || s.on(t, n, o);
  }
  once(t, n, o) {
    var s;
    (s = v(this, Z)) == null || s.once(t, n, o);
  }
  off(t, n, o) {
    var s;
    (s = v(this, Z)) == null || s.off(t, n, o);
  }
  emit(t, n) {
    var l;
    let o = Fo.createEvent(t, n);
    const s = `on${o.type.replace(`.${this.constructor.KEY}`, "")}`, r = v(this, ke)[s];
    return r && r(o) === !1 && (o.preventDefault(), o.stopPropagation()), o = (l = v(this, Z)) == null ? void 0 : l.emit(o), o;
  }
  i18n(t, n, o) {
    var s;
    return (s = qt(v(this, ke).i18n, t, n, o, this.options.lang, this.constructor.NAME)) != null ? s : `{i18n:${t}}`;
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
ke = new WeakMap(), ot = new WeakMap(), Z = new WeakMap(), N(vn, "EVENTS", !1), N(vn, "allComponents", /* @__PURE__ */ new Map());
class vo extends vn {
  constructor() {
    super(...arguments);
    N(this, "ref", hi());
  }
  get $() {
    return this.ref.current;
  }
  init() {
    requestAnimationFrame(() => this.render());
  }
  render(n) {
    const o = this.constructor.Component;
    vi(/* @__PURE__ */ Fn(o, {
      ref: this.ref,
      ...this.setOptions(n)
    }), this.element);
  }
}
var go, I, jr, Ir, $t, Vo, Ur = {}, Br = [], $i = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function He(e, t) {
  for (var n in t)
    e[n] = t[n];
  return e;
}
function zr(e) {
  var t = e.parentNode;
  t && t.removeChild(e);
}
function ee(e, t, n) {
  var o, s, r, l = {};
  for (r in t)
    r == "key" ? o = t[r] : r == "ref" ? s = t[r] : l[r] = t[r];
  if (arguments.length > 2 && (l.children = arguments.length > 3 ? go.call(arguments, 2) : n), typeof e == "function" && e.defaultProps != null)
    for (r in e.defaultProps)
      l[r] === void 0 && (l[r] = e.defaultProps[r]);
  return rn(e, l, o, s, null);
}
function rn(e, t, n, o, s) {
  var r = { type: e, props: t, key: n, ref: o, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: s == null ? ++jr : s };
  return s == null && I.vnode != null && I.vnode(r), r;
}
function Si() {
  return { current: null };
}
function mo(e) {
  return e.children;
}
function St(e, t) {
  this.props = e, this.context = t;
}
function _t(e, t) {
  if (t == null)
    return e.__ ? _t(e.__, e.__.__k.indexOf(e) + 1) : null;
  for (var n; t < e.__k.length; t++)
    if ((n = e.__k[t]) != null && n.__e != null)
      return n.__e;
  return typeof e.type == "function" ? _t(e) : null;
}
function Fr(e) {
  var t, n;
  if ((e = e.__) != null && e.__c != null) {
    for (e.__e = e.__c.base = null, t = 0; t < e.__k.length; t++)
      if ((n = e.__k[t]) != null && n.__e != null) {
        e.__e = e.__c.base = n.__e;
        break;
      }
    return Fr(e);
  }
}
function qo(e) {
  (!e.__d && (e.__d = !0) && $t.push(e) && !gn.__r++ || Vo !== I.debounceRendering) && ((Vo = I.debounceRendering) || setTimeout)(gn);
}
function gn() {
  for (var e; gn.__r = $t.length; )
    e = $t.sort(function(t, n) {
      return t.__v.__b - n.__v.__b;
    }), $t = [], e.some(function(t) {
      var n, o, s, r, l, a;
      t.__d && (l = (r = (n = t).__v).__e, (a = n.__P) && (o = [], (s = He({}, r)).__v = r.__v + 1, Gr(a, r, s, n.__n, a.ownerSVGElement !== void 0, r.__h != null ? [l] : null, o, l == null ? _t(r) : l, r.__h), Ai(o, r), r.__e != l && Fr(r)));
    });
}
function Vr(e, t, n, o, s, r, l, a, f, h) {
  var i, d, u, c, _, b, p, g = o && o.__k || Br, m = g.length;
  for (n.__k = [], i = 0; i < t.length; i++)
    if ((c = n.__k[i] = (c = t[i]) == null || typeof c == "boolean" ? null : typeof c == "string" || typeof c == "number" || typeof c == "bigint" ? rn(null, c, null, null, c) : Array.isArray(c) ? rn(mo, { children: c }, null, null, null) : c.__b > 0 ? rn(c.type, c.props, c.key, null, c.__v) : c) != null) {
      if (c.__ = n, c.__b = n.__b + 1, (u = g[i]) === null || u && c.key == u.key && c.type === u.type)
        g[i] = void 0;
      else
        for (d = 0; d < m; d++) {
          if ((u = g[d]) && c.key == u.key && c.type === u.type) {
            g[d] = void 0;
            break;
          }
          u = null;
        }
      Gr(e, c, u = u || Ur, s, r, l, a, f, h), _ = c.__e, (d = c.ref) && u.ref != d && (p || (p = []), u.ref && p.push(u.ref, null, c), p.push(d, c.__c || _, c)), _ != null ? (b == null && (b = _), typeof c.type == "function" && c.__k === u.__k ? c.__d = f = qr(c, f, e) : f = Yr(e, c, u, g, _, f), typeof n.type == "function" && (n.__d = f)) : f && u.__e == f && f.parentNode != e && (f = _t(u));
    }
  for (n.__e = b, i = m; i--; )
    g[i] != null && (typeof n.type == "function" && g[i].__e != null && g[i].__e == n.__d && (n.__d = _t(o, i + 1)), Xr(g[i], g[i]));
  if (p)
    for (i = 0; i < p.length; i++)
      Kr(p[i], p[++i], p[++i]);
}
function qr(e, t, n) {
  for (var o, s = e.__k, r = 0; s && r < s.length; r++)
    (o = s[r]) && (o.__ = e, t = typeof o.type == "function" ? qr(o, t, n) : Yr(n, o, o, s, o.__e, t));
  return t;
}
function Yr(e, t, n, o, s, r) {
  var l, a, f;
  if (t.__d !== void 0)
    l = t.__d, t.__d = void 0;
  else if (n == null || s != r || s.parentNode == null)
    e:
      if (r == null || r.parentNode !== e)
        e.appendChild(s), l = null;
      else {
        for (a = r, f = 0; (a = a.nextSibling) && f < o.length; f += 2)
          if (a == s)
            break e;
        e.insertBefore(s, r), l = r;
      }
  return l !== void 0 ? l : s.nextSibling;
}
function Ri(e, t, n, o, s) {
  var r;
  for (r in n)
    r === "children" || r === "key" || r in t || mn(e, r, null, n[r], o);
  for (r in t)
    s && typeof t[r] != "function" || r === "children" || r === "key" || r === "value" || r === "checked" || n[r] === t[r] || mn(e, r, t[r], n[r], o);
}
function Yo(e, t, n) {
  t[0] === "-" ? e.setProperty(t, n) : e[t] = n == null ? "" : typeof n != "number" || $i.test(t) ? n : n + "px";
}
function mn(e, t, n, o, s) {
  var r;
  e:
    if (t === "style")
      if (typeof n == "string")
        e.style.cssText = n;
      else {
        if (typeof o == "string" && (e.style.cssText = o = ""), o)
          for (t in o)
            n && t in n || Yo(e.style, t, "");
        if (n)
          for (t in n)
            o && n[t] === o[t] || Yo(e.style, t, n[t]);
      }
    else if (t[0] === "o" && t[1] === "n")
      r = t !== (t = t.replace(/Capture$/, "")), t = t.toLowerCase() in e ? t.toLowerCase().slice(2) : t.slice(2), e.l || (e.l = {}), e.l[t + r] = n, n ? o || e.addEventListener(t, r ? Ko : Go, r) : e.removeEventListener(t, r ? Ko : Go, r);
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
function Go(e) {
  this.l[e.type + !1](I.event ? I.event(e) : e);
}
function Ko(e) {
  this.l[e.type + !0](I.event ? I.event(e) : e);
}
function Gr(e, t, n, o, s, r, l, a, f) {
  var h, i, d, u, c, _, b, p, g, m, w, k, x, y = t.type;
  if (t.constructor !== void 0)
    return null;
  n.__h != null && (f = n.__h, a = t.__e = n.__e, t.__h = null, r = [a]), (h = I.__b) && h(t);
  try {
    e:
      if (typeof y == "function") {
        if (p = t.props, g = (h = y.contextType) && o[h.__c], m = h ? g ? g.props.value : h.__ : o, n.__c ? b = (i = t.__c = n.__c).__ = i.__E : ("prototype" in y && y.prototype.render ? t.__c = i = new y(p, m) : (t.__c = i = new St(p, m), i.constructor = y, i.render = Li), g && g.sub(i), i.props = p, i.state || (i.state = {}), i.context = m, i.__n = o, d = i.__d = !0, i.__h = []), i.__s == null && (i.__s = i.state), y.getDerivedStateFromProps != null && (i.__s == i.state && (i.__s = He({}, i.__s)), He(i.__s, y.getDerivedStateFromProps(p, i.__s))), u = i.props, c = i.state, d)
          y.getDerivedStateFromProps == null && i.componentWillMount != null && i.componentWillMount(), i.componentDidMount != null && i.__h.push(i.componentDidMount);
        else {
          if (y.getDerivedStateFromProps == null && p !== u && i.componentWillReceiveProps != null && i.componentWillReceiveProps(p, m), !i.__e && i.shouldComponentUpdate != null && i.shouldComponentUpdate(p, i.__s, m) === !1 || t.__v === n.__v) {
            i.props = p, i.state = i.__s, t.__v !== n.__v && (i.__d = !1), i.__v = t, t.__e = n.__e, t.__k = n.__k, t.__k.forEach(function(E) {
              E && (E.__ = t);
            }), i.__h.length && l.push(i);
            break e;
          }
          i.componentWillUpdate != null && i.componentWillUpdate(p, i.__s, m), i.componentDidUpdate != null && i.__h.push(function() {
            i.componentDidUpdate(u, c, _);
          });
        }
        if (i.context = m, i.props = p, i.__v = t, i.__P = e, w = I.__r, k = 0, "prototype" in y && y.prototype.render)
          i.state = i.__s, i.__d = !1, w && w(t), h = i.render(i.props, i.state, i.context);
        else
          do
            i.__d = !1, w && w(t), h = i.render(i.props, i.state, i.context), i.state = i.__s;
          while (i.__d && ++k < 25);
        i.state = i.__s, i.getChildContext != null && (o = He(He({}, o), i.getChildContext())), d || i.getSnapshotBeforeUpdate == null || (_ = i.getSnapshotBeforeUpdate(u, c)), x = h != null && h.type === mo && h.key == null ? h.props.children : h, Vr(e, Array.isArray(x) ? x : [x], t, n, o, s, r, l, a, f), i.base = t.__e, t.__h = null, i.__h.length && l.push(i), b && (i.__E = i.__ = null), i.__e = !1;
      } else
        r == null && t.__v === n.__v ? (t.__k = n.__k, t.__e = n.__e) : t.__e = Mi(n.__e, t, n, o, s, r, l, f);
    (h = I.diffed) && h(t);
  } catch (E) {
    t.__v = null, (f || r != null) && (t.__e = a, t.__h = !!f, r[r.indexOf(a)] = null), I.__e(E, t, n);
  }
}
function Ai(e, t) {
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
function Mi(e, t, n, o, s, r, l, a) {
  var f, h, i, d = n.props, u = t.props, c = t.type, _ = 0;
  if (c === "svg" && (s = !0), r != null) {
    for (; _ < r.length; _++)
      if ((f = r[_]) && "setAttribute" in f == !!c && (c ? f.localName === c : f.nodeType === 3)) {
        e = f, r[_] = null;
        break;
      }
  }
  if (e == null) {
    if (c === null)
      return document.createTextNode(u);
    e = s ? document.createElementNS("http://www.w3.org/2000/svg", c) : document.createElement(c, u.is && u), r = null, a = !1;
  }
  if (c === null)
    d === u || a && e.data === u || (e.data = u);
  else {
    if (r = r && go.call(e.childNodes), h = (d = n.props || Ur).dangerouslySetInnerHTML, i = u.dangerouslySetInnerHTML, !a) {
      if (r != null)
        for (d = {}, _ = 0; _ < e.attributes.length; _++)
          d[e.attributes[_].name] = e.attributes[_].value;
      (i || h) && (i && (h && i.__html == h.__html || i.__html === e.innerHTML) || (e.innerHTML = i && i.__html || ""));
    }
    if (Ri(e, u, d, s, a), i)
      t.__k = [];
    else if (_ = t.props.children, Vr(e, Array.isArray(_) ? _ : [_], t, n, o, s && c !== "foreignObject", r, l, r ? r[0] : n.__k && _t(n, 0), a), r != null)
      for (_ = r.length; _--; )
        r[_] != null && zr(r[_]);
    a || ("value" in u && (_ = u.value) !== void 0 && (_ !== e.value || c === "progress" && !_ || c === "option" && _ !== d.value) && mn(e, "value", _, d.value, !1), "checked" in u && (_ = u.checked) !== void 0 && _ !== e.checked && mn(e, "checked", _, d.checked, !1));
  }
  return e;
}
function Kr(e, t, n) {
  try {
    typeof e == "function" ? e(t) : e.current = t;
  } catch (o) {
    I.__e(o, n);
  }
}
function Xr(e, t, n) {
  var o, s;
  if (I.unmount && I.unmount(e), (o = e.ref) && (o.current && o.current !== e.__e || Kr(o, null, t)), (o = e.__c) != null) {
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
      o[s] && Xr(o[s], t, typeof e.type != "function");
  n || e.__e == null || zr(e.__e), e.__e = e.__d = void 0;
}
function Li(e, t, n) {
  return this.constructor(e, n);
}
go = Br.slice, I = { __e: function(e, t, n, o) {
  for (var s, r, l; t = t.__; )
    if ((s = t.__c) && !s.__)
      try {
        if ((r = s.constructor) && r.getDerivedStateFromError != null && (s.setState(r.getDerivedStateFromError(e)), l = s.__d), s.componentDidCatch != null && (s.componentDidCatch(e, o || {}), l = s.__d), l)
          return s.__E = s;
      } catch (a) {
        e = a;
      }
  throw e;
} }, jr = 0, Ir = function(e) {
  return e != null && e.constructor === void 0;
}, St.prototype.setState = function(e, t) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = He({}, this.state), typeof e == "function" && (e = e(He({}, n), this.props)), e && He(n, e), e != null && this.__v && (t && this.__h.push(t), qo(this));
}, St.prototype.forceUpdate = function(e) {
  this.__v && (this.__e = !0, e && this.__h.push(e), qo(this));
}, St.prototype.render = mo, $t = [], gn.__r = 0;
const P = (...e) => {
  const t = e.map((n) => Array.isArray(n) ? P(...n) : typeof n == "function" ? P(n()) : n !== null && typeof n == "object" ? Object.keys(n).filter((o) => {
    const s = n[o];
    return typeof s == "function" ? !!s() : !!s;
  }).join(" ") : n).filter((n) => typeof n == "string" && n.length);
  return t.length ? t.join(" ") : void 0;
};
function Ni({
  component: e = "div",
  className: t,
  children: n,
  attrs: o
}) {
  return ee(e, {
    className: P(t),
    ...o
  }, n);
}
function Oi({
  component: e = "a",
  className: t,
  children: n,
  attrs: o,
  url: s,
  disabled: r,
  active: l,
  icon: a,
  text: f,
  target: h,
  trailingIcon: i,
  hint: d,
  style: u,
  onClick: c
}) {
  const _ = [
    typeof a == "string" ? /* @__PURE__ */ ee("i", {
      class: `icon ${a}`
    }) : a,
    /* @__PURE__ */ ee("span", {
      className: "text"
    }, f),
    n,
    typeof i == "string" ? /* @__PURE__ */ ee("i", {
      class: `icon ${i}`
    }) : i
  ];
  return ee(e, {
    className: P(t, { disabled: r, active: l }),
    title: d,
    [e === "a" ? "href" : "data-url"]: s,
    [e === "a" ? "target" : "data-target"]: h,
    style: u,
    onClick: c,
    ...o
  }, ..._);
}
function Di({
  component: e = "div",
  className: t,
  text: n,
  attrs: o,
  children: s,
  style: r,
  onClick: l
}) {
  return ee(e, {
    className: P(t),
    style: r,
    onClick: l,
    ...o
  }, n, s);
}
function Pi({
  component: e = "div",
  className: t,
  style: n,
  space: o,
  flex: s,
  attrs: r,
  onClick: l,
  children: a
}) {
  return ee(e, {
    className: P(t),
    style: { width: o, height: o, flex: s, ...n },
    onClick: l,
    ...r
  }, a);
}
function Ti(e) {
  const {
    tag: t,
    className: n,
    style: o,
    renders: s,
    generateArgs: r = [],
    generatorThis: l,
    generators: a,
    onGenerate: f,
    onRenderItem: h,
    ...i
  } = e, d = [n], u = { ...o }, c = [], _ = [];
  return s.forEach((b) => {
    var g;
    const p = [];
    typeof b == "string" && a && a[b] && (b = a[b]), typeof b == "function" ? f ? p.push(...f.call(l, b, c, ...r)) : p.push(...(g = b.call(l, c, ...r)) != null ? g : []) : p.push(b), p.forEach((m) => {
      var w;
      m != null && (typeof m == "object" && !Ar(m) && ("html" in m || "__html" in m || "className" in m || "style" in m || "attrs" in m || "children" in m) ? m.html ? c.push(
        /* @__PURE__ */ Fn("div", {
          className: P(m.className),
          style: m.style,
          dangerouslySetInnerHTML: { __html: m.html },
          ...(w = m.attrs) != null ? w : {}
        })
      ) : m.__html ? _.push(m.__html) : (m.style && Object.assign(u, m.style), m.className && d.push(m.className), m.children && c.push(m.children), m.attrs && Object.assign(i, m.attrs)) : c.push(m));
    });
  }), _.length && Object.assign(i, { dangerouslySetInnerHTML: { __html: _ } }), [{
    className: P(d),
    style: u,
    ...i
  }, c];
}
function to({
  tag: e = "div",
  ...t
}) {
  const [n, o] = Ti(t);
  return Fn(e, n, ...o);
}
function Hi(e) {
  return /* @__PURE__ */ ee(to, {
    ...e
  });
}
const Lo = class extends St {
  constructor() {
    super(...arguments);
    N(this, "ref", Si());
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
  onRenderItem(n, o) {
    const { type: s = "item", component: r, key: l = o, rootAttrs: a, rootClass: f, rootStyle: h, ...i } = n, d = !r || typeof r == "string" ? this.constructor.ItemComponents ? this.constructor.ItemComponents[s] : Lo.ItemComponents[s] : r;
    return Object.assign(i, {
      type: s,
      component: typeof r == "string" ? r : void 0
    }), /* @__PURE__ */ ee("li", {
      className: P(`${this.name}-${s}`, f),
      style: h,
      key: l,
      ...a
    }, /* @__PURE__ */ ee(d, {
      ...i
    }));
  }
  renderItem(n, o, s) {
    var i;
    const { itemRender: r, defaultItemProps: l, onClickItem: a } = n, f = { key: s, ...o }, h = (i = f.type) != null ? i : "item";
    if (l && Object.assign(f, l[h]), (a || o.onClick) && (f.onClick = this.handleItemClick.bind(this, f, s, o.onClick)), f.className = P(f.className), r) {
      if (typeof r == "object") {
        const d = r[h];
        if (d)
          return /* @__PURE__ */ ee(d, {
            ...f
          });
      } else if (typeof r == "function") {
        const d = r.call(this, f, ee);
        if (Ir(d))
          return d;
        typeof d == "object" && Object.assign(f, d);
      }
    }
    return this.onRenderItem(f, s);
  }
  render() {
    const n = this.beforeRender(), {
      name: o,
      style: s,
      defaultItemProps: r,
      className: l,
      items: a,
      children: f,
      itemRender: h,
      onClickItem: i,
      beforeRender: d,
      afterRender: u,
      beforeDestroy: c,
      ..._
    } = n;
    return /* @__PURE__ */ ee("menu", {
      class: P(this.name, l),
      ..._,
      ref: this.ref
    }, a && a.map(this.renderItem.bind(this, n)), f);
  }
};
let Rt = Lo;
N(Rt, "ItemComponents", {
  divider: Ni,
  item: Oi,
  heading: Di,
  space: Pi,
  custom: Hi
});
class Wi extends vo {
}
N(Wi, "Component", Rt);
class ji extends Rt {
  beforeRender() {
    const t = super.beforeRender();
    let { hasIcons: n } = t;
    return n === void 0 && (n = t.items.some((o) => o.icon)), n && (t.className = P(t.className, "has-icons")), t;
  }
}
class Jr extends vo {
}
N(Jr, "Component", ji);
var yo, U, Zr, At, Xo, Qr = {}, es = [], Ii = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function We(e, t) {
  for (var n in t)
    e[n] = t[n];
  return e;
}
function ts(e) {
  var t = e.parentNode;
  t && t.removeChild(e);
}
function Jo(e, t, n) {
  var o, s, r, l = {};
  for (r in t)
    r == "key" ? o = t[r] : r == "ref" ? s = t[r] : l[r] = t[r];
  if (arguments.length > 2 && (l.children = arguments.length > 3 ? yo.call(arguments, 2) : n), typeof e == "function" && e.defaultProps != null)
    for (r in e.defaultProps)
      l[r] === void 0 && (l[r] = e.defaultProps[r]);
  return sn(e, l, o, s, null);
}
function sn(e, t, n, o, s) {
  var r = { type: e, props: t, key: n, ref: o, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: s == null ? ++Zr : s };
  return s == null && U.vnode != null && U.vnode(r), r;
}
function bo(e) {
  return e.children;
}
function Mt(e, t) {
  this.props = e, this.context = t;
}
function dt(e, t) {
  if (t == null)
    return e.__ ? dt(e.__, e.__.__k.indexOf(e) + 1) : null;
  for (var n; t < e.__k.length; t++)
    if ((n = e.__k[t]) != null && n.__e != null)
      return n.__e;
  return typeof e.type == "function" ? dt(e) : null;
}
function ns(e) {
  var t, n;
  if ((e = e.__) != null && e.__c != null) {
    for (e.__e = e.__c.base = null, t = 0; t < e.__k.length; t++)
      if ((n = e.__k[t]) != null && n.__e != null) {
        e.__e = e.__c.base = n.__e;
        break;
      }
    return ns(e);
  }
}
function Zo(e) {
  (!e.__d && (e.__d = !0) && At.push(e) && !yn.__r++ || Xo !== U.debounceRendering) && ((Xo = U.debounceRendering) || setTimeout)(yn);
}
function yn() {
  for (var e; yn.__r = At.length; )
    e = At.sort(function(t, n) {
      return t.__v.__b - n.__v.__b;
    }), At = [], e.some(function(t) {
      var n, o, s, r, l, a;
      t.__d && (l = (r = (n = t).__v).__e, (a = n.__P) && (o = [], (s = We({}, r)).__v = r.__v + 1, is(a, r, s, n.__n, a.ownerSVGElement !== void 0, r.__h != null ? [l] : null, o, l == null ? dt(r) : l, r.__h), Bi(o, r), r.__e != l && ns(r)));
    });
}
function os(e, t, n, o, s, r, l, a, f, h) {
  var i, d, u, c, _, b, p, g = o && o.__k || es, m = g.length;
  for (n.__k = [], i = 0; i < t.length; i++)
    if ((c = n.__k[i] = (c = t[i]) == null || typeof c == "boolean" ? null : typeof c == "string" || typeof c == "number" || typeof c == "bigint" ? sn(null, c, null, null, c) : Array.isArray(c) ? sn(bo, { children: c }, null, null, null) : c.__b > 0 ? sn(c.type, c.props, c.key, null, c.__v) : c) != null) {
      if (c.__ = n, c.__b = n.__b + 1, (u = g[i]) === null || u && c.key == u.key && c.type === u.type)
        g[i] = void 0;
      else
        for (d = 0; d < m; d++) {
          if ((u = g[d]) && c.key == u.key && c.type === u.type) {
            g[d] = void 0;
            break;
          }
          u = null;
        }
      is(e, c, u = u || Qr, s, r, l, a, f, h), _ = c.__e, (d = c.ref) && u.ref != d && (p || (p = []), u.ref && p.push(u.ref, null, c), p.push(d, c.__c || _, c)), _ != null ? (b == null && (b = _), typeof c.type == "function" && c.__k === u.__k ? c.__d = f = rs(c, f, e) : f = ss(e, c, u, g, _, f), typeof n.type == "function" && (n.__d = f)) : f && u.__e == f && f.parentNode != e && (f = dt(u));
    }
  for (n.__e = b, i = m; i--; )
    g[i] != null && (typeof n.type == "function" && g[i].__e != null && g[i].__e == n.__d && (n.__d = dt(o, i + 1)), as(g[i], g[i]));
  if (p)
    for (i = 0; i < p.length; i++)
      ls(p[i], p[++i], p[++i]);
}
function rs(e, t, n) {
  for (var o, s = e.__k, r = 0; s && r < s.length; r++)
    (o = s[r]) && (o.__ = e, t = typeof o.type == "function" ? rs(o, t, n) : ss(n, o, o, s, o.__e, t));
  return t;
}
function ss(e, t, n, o, s, r) {
  var l, a, f;
  if (t.__d !== void 0)
    l = t.__d, t.__d = void 0;
  else if (n == null || s != r || s.parentNode == null)
    e:
      if (r == null || r.parentNode !== e)
        e.appendChild(s), l = null;
      else {
        for (a = r, f = 0; (a = a.nextSibling) && f < o.length; f += 2)
          if (a == s)
            break e;
        e.insertBefore(s, r), l = r;
      }
  return l !== void 0 ? l : s.nextSibling;
}
function Ui(e, t, n, o, s) {
  var r;
  for (r in n)
    r === "children" || r === "key" || r in t || bn(e, r, null, n[r], o);
  for (r in t)
    s && typeof t[r] != "function" || r === "children" || r === "key" || r === "value" || r === "checked" || n[r] === t[r] || bn(e, r, t[r], n[r], o);
}
function Qo(e, t, n) {
  t[0] === "-" ? e.setProperty(t, n) : e[t] = n == null ? "" : typeof n != "number" || Ii.test(t) ? n : n + "px";
}
function bn(e, t, n, o, s) {
  var r;
  e:
    if (t === "style")
      if (typeof n == "string")
        e.style.cssText = n;
      else {
        if (typeof o == "string" && (e.style.cssText = o = ""), o)
          for (t in o)
            n && t in n || Qo(e.style, t, "");
        if (n)
          for (t in n)
            o && n[t] === o[t] || Qo(e.style, t, n[t]);
      }
    else if (t[0] === "o" && t[1] === "n")
      r = t !== (t = t.replace(/Capture$/, "")), t = t.toLowerCase() in e ? t.toLowerCase().slice(2) : t.slice(2), e.l || (e.l = {}), e.l[t + r] = n, n ? o || e.addEventListener(t, r ? tr : er, r) : e.removeEventListener(t, r ? tr : er, r);
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
function er(e) {
  this.l[e.type + !1](U.event ? U.event(e) : e);
}
function tr(e) {
  this.l[e.type + !0](U.event ? U.event(e) : e);
}
function is(e, t, n, o, s, r, l, a, f) {
  var h, i, d, u, c, _, b, p, g, m, w, k, x, y = t.type;
  if (t.constructor !== void 0)
    return null;
  n.__h != null && (f = n.__h, a = t.__e = n.__e, t.__h = null, r = [a]), (h = U.__b) && h(t);
  try {
    e:
      if (typeof y == "function") {
        if (p = t.props, g = (h = y.contextType) && o[h.__c], m = h ? g ? g.props.value : h.__ : o, n.__c ? b = (i = t.__c = n.__c).__ = i.__E : ("prototype" in y && y.prototype.render ? t.__c = i = new y(p, m) : (t.__c = i = new Mt(p, m), i.constructor = y, i.render = Fi), g && g.sub(i), i.props = p, i.state || (i.state = {}), i.context = m, i.__n = o, d = i.__d = !0, i.__h = []), i.__s == null && (i.__s = i.state), y.getDerivedStateFromProps != null && (i.__s == i.state && (i.__s = We({}, i.__s)), We(i.__s, y.getDerivedStateFromProps(p, i.__s))), u = i.props, c = i.state, d)
          y.getDerivedStateFromProps == null && i.componentWillMount != null && i.componentWillMount(), i.componentDidMount != null && i.__h.push(i.componentDidMount);
        else {
          if (y.getDerivedStateFromProps == null && p !== u && i.componentWillReceiveProps != null && i.componentWillReceiveProps(p, m), !i.__e && i.shouldComponentUpdate != null && i.shouldComponentUpdate(p, i.__s, m) === !1 || t.__v === n.__v) {
            i.props = p, i.state = i.__s, t.__v !== n.__v && (i.__d = !1), i.__v = t, t.__e = n.__e, t.__k = n.__k, t.__k.forEach(function(E) {
              E && (E.__ = t);
            }), i.__h.length && l.push(i);
            break e;
          }
          i.componentWillUpdate != null && i.componentWillUpdate(p, i.__s, m), i.componentDidUpdate != null && i.__h.push(function() {
            i.componentDidUpdate(u, c, _);
          });
        }
        if (i.context = m, i.props = p, i.__v = t, i.__P = e, w = U.__r, k = 0, "prototype" in y && y.prototype.render)
          i.state = i.__s, i.__d = !1, w && w(t), h = i.render(i.props, i.state, i.context);
        else
          do
            i.__d = !1, w && w(t), h = i.render(i.props, i.state, i.context), i.state = i.__s;
          while (i.__d && ++k < 25);
        i.state = i.__s, i.getChildContext != null && (o = We(We({}, o), i.getChildContext())), d || i.getSnapshotBeforeUpdate == null || (_ = i.getSnapshotBeforeUpdate(u, c)), x = h != null && h.type === bo && h.key == null ? h.props.children : h, os(e, Array.isArray(x) ? x : [x], t, n, o, s, r, l, a, f), i.base = t.__e, t.__h = null, i.__h.length && l.push(i), b && (i.__E = i.__ = null), i.__e = !1;
      } else
        r == null && t.__v === n.__v ? (t.__k = n.__k, t.__e = n.__e) : t.__e = zi(n.__e, t, n, o, s, r, l, f);
    (h = U.diffed) && h(t);
  } catch (E) {
    t.__v = null, (f || r != null) && (t.__e = a, t.__h = !!f, r[r.indexOf(a)] = null), U.__e(E, t, n);
  }
}
function Bi(e, t) {
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
function zi(e, t, n, o, s, r, l, a) {
  var f, h, i, d = n.props, u = t.props, c = t.type, _ = 0;
  if (c === "svg" && (s = !0), r != null) {
    for (; _ < r.length; _++)
      if ((f = r[_]) && "setAttribute" in f == !!c && (c ? f.localName === c : f.nodeType === 3)) {
        e = f, r[_] = null;
        break;
      }
  }
  if (e == null) {
    if (c === null)
      return document.createTextNode(u);
    e = s ? document.createElementNS("http://www.w3.org/2000/svg", c) : document.createElement(c, u.is && u), r = null, a = !1;
  }
  if (c === null)
    d === u || a && e.data === u || (e.data = u);
  else {
    if (r = r && yo.call(e.childNodes), h = (d = n.props || Qr).dangerouslySetInnerHTML, i = u.dangerouslySetInnerHTML, !a) {
      if (r != null)
        for (d = {}, _ = 0; _ < e.attributes.length; _++)
          d[e.attributes[_].name] = e.attributes[_].value;
      (i || h) && (i && (h && i.__html == h.__html || i.__html === e.innerHTML) || (e.innerHTML = i && i.__html || ""));
    }
    if (Ui(e, u, d, s, a), i)
      t.__k = [];
    else if (_ = t.props.children, os(e, Array.isArray(_) ? _ : [_], t, n, o, s && c !== "foreignObject", r, l, r ? r[0] : n.__k && dt(n, 0), a), r != null)
      for (_ = r.length; _--; )
        r[_] != null && ts(r[_]);
    a || ("value" in u && (_ = u.value) !== void 0 && (_ !== e.value || c === "progress" && !_ || c === "option" && _ !== d.value) && bn(e, "value", _, d.value, !1), "checked" in u && (_ = u.checked) !== void 0 && _ !== e.checked && bn(e, "checked", _, d.checked, !1));
  }
  return e;
}
function ls(e, t, n) {
  try {
    typeof e == "function" ? e(t) : e.current = t;
  } catch (o) {
    U.__e(o, n);
  }
}
function as(e, t, n) {
  var o, s;
  if (U.unmount && U.unmount(e), (o = e.ref) && (o.current && o.current !== e.__e || ls(o, null, t)), (o = e.__c) != null) {
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
      o[s] && as(o[s], t, typeof e.type != "function");
  n || e.__e == null || ts(e.__e), e.__e = e.__d = void 0;
}
function Fi(e, t, n) {
  return this.constructor(e, n);
}
yo = es.slice, U = { __e: function(e, t, n, o) {
  for (var s, r, l; t = t.__; )
    if ((s = t.__c) && !s.__)
      try {
        if ((r = s.constructor) && r.getDerivedStateFromError != null && (s.setState(r.getDerivedStateFromError(e)), l = s.__d), s.componentDidCatch != null && (s.componentDidCatch(e, o || {}), l = s.__d), l)
          return s.__E = s;
      } catch (a) {
        e = a;
      }
  throw e;
} }, Zr = 0, Mt.prototype.setState = function(e, t) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = We({}, this.state), typeof e == "function" && (e = e(We({}, n), this.props)), e && We(n, e), e != null && this.__v && (t && this.__h.push(t), Zo(this));
}, Mt.prototype.forceUpdate = function(e) {
  this.__v && (this.__e = !0, e && this.__h.push(e), Zo(this));
}, Mt.prototype.render = bo, At = [], yn.__r = 0;
var Ge, Ke;
class nr extends Mt {
  constructor(n) {
    var o;
    super(n);
    C(this, Ge, 0);
    C(this, Ke, null);
    N(this, "_handleWheel", (n) => {
      var r;
      const { wheelContainer: o } = this.props, s = n.target;
      if (!(!s || !o) && (typeof o == "string" && s.closest(o) || typeof o == "object")) {
        const l = (this.props.type === "horz" ? n.deltaX : n.deltaY) * ((r = this.props.wheelSpeed) != null ? r : 1);
        this.scrollOffset(l) && n.preventDefault();
      }
    });
    N(this, "_handleMouseMove", (n) => {
      const { dragStart: o } = this.state;
      o && (v(this, Ge) && cancelAnimationFrame(v(this, Ge)), A(this, Ge, requestAnimationFrame(() => {
        const s = this.props.type === "horz" ? n.clientX - o.x : n.clientY - o.y;
        this.scroll(o.offset + s * this.props.scrollSize / this.props.clientSize), A(this, Ge, 0);
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
      const s = o.getBoundingClientRect(), { type: r, clientSize: l, scrollSize: a } = this.props, f = (r === "horz" ? n.clientX - s.left : n.clientY - s.top) - this.barSize / 2;
      this.scroll(f * a / l), n.preventDefault();
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
    n && (A(this, Ke, typeof n == "string" ? document : n.current), v(this, Ke).addEventListener("wheel", this._handleWheel, { passive: !1 }));
  }
  componentWillUnmount() {
    document.removeEventListener("mousemove", this._handleMouseMove), document.removeEventListener("mouseup", this._handleMouseUp), v(this, Ke) && v(this, Ke).removeEventListener("wheel", this._handleWheel);
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
      style: l,
      left: a,
      top: f,
      bottom: h,
      right: i
    } = this.props, { maxScrollPos: d, scrollPos: u } = this, { dragStart: c } = this.state, _ = {
      left: a,
      top: f,
      bottom: h,
      right: i,
      ...l
    }, b = {};
    return o === "horz" ? (_.height = s, _.width = n, b.width = this.barSize, b.left = Math.round(Math.min(d, u) * (n - b.width) / d)) : (_.width = s, _.height = n, b.height = this.barSize, b.top = Math.round(Math.min(d, u) * (n - b.height) / d)), /* @__PURE__ */ Jo("div", {
      className: P("scrollbar", r, {
        "is-vert": o === "vert",
        "is-horz": o === "horz",
        "is-dragging": c
      }),
      style: _,
      onMouseDown: this._handleClick
    }, /* @__PURE__ */ Jo("div", {
      className: "scrollbar-bar",
      style: b,
      onMouseDown: this._handleMouseDown
    }));
  }
}
Ge = new WeakMap(), Ke = new WeakMap();
function Vi(e) {
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
function qi(e) {
  document.readyState !== "loading" ? e() : document.addEventListener("DOMContentLoaded", e);
}
function Yi(e, t) {
  const n = typeof e == "string" ? document.querySelector(e) : e;
  if (!n)
    return !1;
  const o = n.getBoundingClientRect(), s = window.innerHeight || document.documentElement.clientHeight, r = window.innerWidth || document.documentElement.clientWidth;
  if (t != null && t.fullyCheck)
    return o.left >= 0 && o.top >= 0 && o.left + o.width <= r && o.top + o.height <= s;
  const l = o.top <= s && o.top + o.height >= 0, a = o.left <= r && o.left + o.width >= 0;
  return l && a;
}
const ja = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  selectText: Vi,
  domReady: qi,
  isElementVisible: Yi,
  classes: P
}, Symbol.toStringTag, { value: "Module" }));
let Gi = (e = 21) => crypto.getRandomValues(new Uint8Array(e)).reduce((t, n) => (n &= 63, n < 36 ? t += n.toString(36) : n < 62 ? t += (n - 26).toString(36).toUpperCase() : n > 62 ? t += "-" : t += "_", t), "");
var Wt, Ne, fe, rt, st, ln;
const No = class {
  constructor(t, n = "local") {
    C(this, st);
    C(this, Wt, void 0);
    C(this, Ne, void 0);
    C(this, fe, void 0);
    C(this, rt, void 0);
    A(this, Wt, n), A(this, Ne, `ZUI_STORE:${t != null ? t : Gi()}`), A(this, fe, n === "local" ? localStorage : sessionStorage);
  }
  get type() {
    return v(this, Wt);
  }
  get session() {
    return this.type === "session" ? this : (v(this, rt) || A(this, rt, new No(v(this, Ne), "session")), v(this, rt));
  }
  get(t, n) {
    const o = v(this, fe).getItem(j(this, st, ln).call(this, t));
    return typeof o == "string" ? JSON.parse(o) : o != null ? o : n;
  }
  set(t, n) {
    if (n == null)
      return this.remove(t);
    v(this, fe).setItem(j(this, st, ln).call(this, t), JSON.stringify(n));
  }
  remove(t) {
    v(this, fe).removeItem(j(this, st, ln).call(this, t));
  }
  each(t) {
    for (let n = 0; n < v(this, fe).length; n++) {
      const o = v(this, fe).key(n);
      if (o != null && o.startsWith(v(this, Ne))) {
        const s = v(this, fe).getItem(o);
        typeof s == "string" && t(o.substring(v(this, Ne).length + 1), JSON.parse(s));
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
let wn = No;
Wt = new WeakMap(), Ne = new WeakMap(), fe = new WeakMap(), rt = new WeakMap(), st = new WeakSet(), ln = function(t) {
  return `${v(this, Ne)}:${t}`;
};
const Ki = new wn("DEFAULT");
function Xi(e, t = "local") {
  return new wn(e, t);
}
Object.assign(Ki, { create: Xi });
var wo, B, cs, Lt, or, fs = {}, us = [], Ji = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function je(e, t) {
  for (var n in t)
    e[n] = t[n];
  return e;
}
function hs(e) {
  var t = e.parentNode;
  t && t.removeChild(e);
}
function rr(e, t, n) {
  var o, s, r, l = {};
  for (r in t)
    r == "key" ? o = t[r] : r == "ref" ? s = t[r] : l[r] = t[r];
  if (arguments.length > 2 && (l.children = arguments.length > 3 ? wo.call(arguments, 2) : n), typeof e == "function" && e.defaultProps != null)
    for (r in e.defaultProps)
      l[r] === void 0 && (l[r] = e.defaultProps[r]);
  return an(e, l, o, s, null);
}
function an(e, t, n, o, s) {
  var r = { type: e, props: t, key: n, ref: o, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: s == null ? ++cs : s };
  return s == null && B.vnode != null && B.vnode(r), r;
}
function ko(e) {
  return e.children;
}
function Nt(e, t) {
  this.props = e, this.context = t;
}
function pt(e, t) {
  if (t == null)
    return e.__ ? pt(e.__, e.__.__k.indexOf(e) + 1) : null;
  for (var n; t < e.__k.length; t++)
    if ((n = e.__k[t]) != null && n.__e != null)
      return n.__e;
  return typeof e.type == "function" ? pt(e) : null;
}
function _s(e) {
  var t, n;
  if ((e = e.__) != null && e.__c != null) {
    for (e.__e = e.__c.base = null, t = 0; t < e.__k.length; t++)
      if ((n = e.__k[t]) != null && n.__e != null) {
        e.__e = e.__c.base = n.__e;
        break;
      }
    return _s(e);
  }
}
function sr(e) {
  (!e.__d && (e.__d = !0) && Lt.push(e) && !kn.__r++ || or !== B.debounceRendering) && ((or = B.debounceRendering) || setTimeout)(kn);
}
function kn() {
  for (var e; kn.__r = Lt.length; )
    e = Lt.sort(function(t, n) {
      return t.__v.__b - n.__v.__b;
    }), Lt = [], e.some(function(t) {
      var n, o, s, r, l, a;
      t.__d && (l = (r = (n = t).__v).__e, (a = n.__P) && (o = [], (s = je({}, r)).__v = r.__v + 1, gs(a, r, s, n.__n, a.ownerSVGElement !== void 0, r.__h != null ? [l] : null, o, l == null ? pt(r) : l, r.__h), Qi(o, r), r.__e != l && _s(r)));
    });
}
function ds(e, t, n, o, s, r, l, a, f, h) {
  var i, d, u, c, _, b, p, g = o && o.__k || us, m = g.length;
  for (n.__k = [], i = 0; i < t.length; i++)
    if ((c = n.__k[i] = (c = t[i]) == null || typeof c == "boolean" ? null : typeof c == "string" || typeof c == "number" || typeof c == "bigint" ? an(null, c, null, null, c) : Array.isArray(c) ? an(ko, { children: c }, null, null, null) : c.__b > 0 ? an(c.type, c.props, c.key, null, c.__v) : c) != null) {
      if (c.__ = n, c.__b = n.__b + 1, (u = g[i]) === null || u && c.key == u.key && c.type === u.type)
        g[i] = void 0;
      else
        for (d = 0; d < m; d++) {
          if ((u = g[d]) && c.key == u.key && c.type === u.type) {
            g[d] = void 0;
            break;
          }
          u = null;
        }
      gs(e, c, u = u || fs, s, r, l, a, f, h), _ = c.__e, (d = c.ref) && u.ref != d && (p || (p = []), u.ref && p.push(u.ref, null, c), p.push(d, c.__c || _, c)), _ != null ? (b == null && (b = _), typeof c.type == "function" && c.__k === u.__k ? c.__d = f = ps(c, f, e) : f = vs(e, c, u, g, _, f), typeof n.type == "function" && (n.__d = f)) : f && u.__e == f && f.parentNode != e && (f = pt(u));
    }
  for (n.__e = b, i = m; i--; )
    g[i] != null && (typeof n.type == "function" && g[i].__e != null && g[i].__e == n.__d && (n.__d = pt(o, i + 1)), ys(g[i], g[i]));
  if (p)
    for (i = 0; i < p.length; i++)
      ms(p[i], p[++i], p[++i]);
}
function ps(e, t, n) {
  for (var o, s = e.__k, r = 0; s && r < s.length; r++)
    (o = s[r]) && (o.__ = e, t = typeof o.type == "function" ? ps(o, t, n) : vs(n, o, o, s, o.__e, t));
  return t;
}
function vs(e, t, n, o, s, r) {
  var l, a, f;
  if (t.__d !== void 0)
    l = t.__d, t.__d = void 0;
  else if (n == null || s != r || s.parentNode == null)
    e:
      if (r == null || r.parentNode !== e)
        e.appendChild(s), l = null;
      else {
        for (a = r, f = 0; (a = a.nextSibling) && f < o.length; f += 2)
          if (a == s)
            break e;
        e.insertBefore(s, r), l = r;
      }
  return l !== void 0 ? l : s.nextSibling;
}
function Zi(e, t, n, o, s) {
  var r;
  for (r in n)
    r === "children" || r === "key" || r in t || xn(e, r, null, n[r], o);
  for (r in t)
    s && typeof t[r] != "function" || r === "children" || r === "key" || r === "value" || r === "checked" || n[r] === t[r] || xn(e, r, t[r], n[r], o);
}
function ir(e, t, n) {
  t[0] === "-" ? e.setProperty(t, n) : e[t] = n == null ? "" : typeof n != "number" || Ji.test(t) ? n : n + "px";
}
function xn(e, t, n, o, s) {
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
      r = t !== (t = t.replace(/Capture$/, "")), t = t.toLowerCase() in e ? t.toLowerCase().slice(2) : t.slice(2), e.l || (e.l = {}), e.l[t + r] = n, n ? o || e.addEventListener(t, r ? ar : lr, r) : e.removeEventListener(t, r ? ar : lr, r);
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
function lr(e) {
  this.l[e.type + !1](B.event ? B.event(e) : e);
}
function ar(e) {
  this.l[e.type + !0](B.event ? B.event(e) : e);
}
function gs(e, t, n, o, s, r, l, a, f) {
  var h, i, d, u, c, _, b, p, g, m, w, k, x, y = t.type;
  if (t.constructor !== void 0)
    return null;
  n.__h != null && (f = n.__h, a = t.__e = n.__e, t.__h = null, r = [a]), (h = B.__b) && h(t);
  try {
    e:
      if (typeof y == "function") {
        if (p = t.props, g = (h = y.contextType) && o[h.__c], m = h ? g ? g.props.value : h.__ : o, n.__c ? b = (i = t.__c = n.__c).__ = i.__E : ("prototype" in y && y.prototype.render ? t.__c = i = new y(p, m) : (t.__c = i = new Nt(p, m), i.constructor = y, i.render = tl), g && g.sub(i), i.props = p, i.state || (i.state = {}), i.context = m, i.__n = o, d = i.__d = !0, i.__h = []), i.__s == null && (i.__s = i.state), y.getDerivedStateFromProps != null && (i.__s == i.state && (i.__s = je({}, i.__s)), je(i.__s, y.getDerivedStateFromProps(p, i.__s))), u = i.props, c = i.state, d)
          y.getDerivedStateFromProps == null && i.componentWillMount != null && i.componentWillMount(), i.componentDidMount != null && i.__h.push(i.componentDidMount);
        else {
          if (y.getDerivedStateFromProps == null && p !== u && i.componentWillReceiveProps != null && i.componentWillReceiveProps(p, m), !i.__e && i.shouldComponentUpdate != null && i.shouldComponentUpdate(p, i.__s, m) === !1 || t.__v === n.__v) {
            i.props = p, i.state = i.__s, t.__v !== n.__v && (i.__d = !1), i.__v = t, t.__e = n.__e, t.__k = n.__k, t.__k.forEach(function(E) {
              E && (E.__ = t);
            }), i.__h.length && l.push(i);
            break e;
          }
          i.componentWillUpdate != null && i.componentWillUpdate(p, i.__s, m), i.componentDidUpdate != null && i.__h.push(function() {
            i.componentDidUpdate(u, c, _);
          });
        }
        if (i.context = m, i.props = p, i.__v = t, i.__P = e, w = B.__r, k = 0, "prototype" in y && y.prototype.render)
          i.state = i.__s, i.__d = !1, w && w(t), h = i.render(i.props, i.state, i.context);
        else
          do
            i.__d = !1, w && w(t), h = i.render(i.props, i.state, i.context), i.state = i.__s;
          while (i.__d && ++k < 25);
        i.state = i.__s, i.getChildContext != null && (o = je(je({}, o), i.getChildContext())), d || i.getSnapshotBeforeUpdate == null || (_ = i.getSnapshotBeforeUpdate(u, c)), x = h != null && h.type === ko && h.key == null ? h.props.children : h, ds(e, Array.isArray(x) ? x : [x], t, n, o, s, r, l, a, f), i.base = t.__e, t.__h = null, i.__h.length && l.push(i), b && (i.__E = i.__ = null), i.__e = !1;
      } else
        r == null && t.__v === n.__v ? (t.__k = n.__k, t.__e = n.__e) : t.__e = el(n.__e, t, n, o, s, r, l, f);
    (h = B.diffed) && h(t);
  } catch (E) {
    t.__v = null, (f || r != null) && (t.__e = a, t.__h = !!f, r[r.indexOf(a)] = null), B.__e(E, t, n);
  }
}
function Qi(e, t) {
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
function el(e, t, n, o, s, r, l, a) {
  var f, h, i, d = n.props, u = t.props, c = t.type, _ = 0;
  if (c === "svg" && (s = !0), r != null) {
    for (; _ < r.length; _++)
      if ((f = r[_]) && "setAttribute" in f == !!c && (c ? f.localName === c : f.nodeType === 3)) {
        e = f, r[_] = null;
        break;
      }
  }
  if (e == null) {
    if (c === null)
      return document.createTextNode(u);
    e = s ? document.createElementNS("http://www.w3.org/2000/svg", c) : document.createElement(c, u.is && u), r = null, a = !1;
  }
  if (c === null)
    d === u || a && e.data === u || (e.data = u);
  else {
    if (r = r && wo.call(e.childNodes), h = (d = n.props || fs).dangerouslySetInnerHTML, i = u.dangerouslySetInnerHTML, !a) {
      if (r != null)
        for (d = {}, _ = 0; _ < e.attributes.length; _++)
          d[e.attributes[_].name] = e.attributes[_].value;
      (i || h) && (i && (h && i.__html == h.__html || i.__html === e.innerHTML) || (e.innerHTML = i && i.__html || ""));
    }
    if (Zi(e, u, d, s, a), i)
      t.__k = [];
    else if (_ = t.props.children, ds(e, Array.isArray(_) ? _ : [_], t, n, o, s && c !== "foreignObject", r, l, r ? r[0] : n.__k && pt(n, 0), a), r != null)
      for (_ = r.length; _--; )
        r[_] != null && hs(r[_]);
    a || ("value" in u && (_ = u.value) !== void 0 && (_ !== e.value || c === "progress" && !_ || c === "option" && _ !== d.value) && xn(e, "value", _, d.value, !1), "checked" in u && (_ = u.checked) !== void 0 && _ !== e.checked && xn(e, "checked", _, d.checked, !1));
  }
  return e;
}
function ms(e, t, n) {
  try {
    typeof e == "function" ? e(t) : e.current = t;
  } catch (o) {
    B.__e(o, n);
  }
}
function ys(e, t, n) {
  var o, s;
  if (B.unmount && B.unmount(e), (o = e.ref) && (o.current && o.current !== e.__e || ms(o, null, t)), (o = e.__c) != null) {
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
      o[s] && ys(o[s], t, typeof e.type != "function");
  n || e.__e == null || hs(e.__e), e.__e = e.__d = void 0;
}
function tl(e, t, n) {
  return this.constructor(e, n);
}
wo = us.slice, B = { __e: function(e, t, n, o) {
  for (var s, r, l; t = t.__; )
    if ((s = t.__c) && !s.__)
      try {
        if ((r = s.constructor) && r.getDerivedStateFromError != null && (s.setState(r.getDerivedStateFromError(e)), l = s.__d), s.componentDidCatch != null && (s.componentDidCatch(e, o || {}), l = s.__d), l)
          return s.__E = s;
      } catch (a) {
        e = a;
      }
  throw e;
} }, cs = 0, Nt.prototype.setState = function(e, t) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = je({}, this.state), typeof e == "function" && (e = e(je({}, n), this.props)), e && je(n, e), e != null && this.__v && (t && this.__h.push(t), sr(this));
}, Nt.prototype.forceUpdate = function(e) {
  this.__v && (this.__e = !0, e && this.__h.push(e), sr(this));
}, Nt.prototype.render = ko, Lt = [], kn.__r = 0;
class Ia extends Nt {
  render() {
    const { size: t, rounded: n, className: o, style: s, src: r, text: l, children: a, ...f } = this.props, h = [o], i = { ...s };
    let d = null;
    return r ? d = /* @__PURE__ */ rr("img", {
      src: r,
      alt: l
    }) : d = l, typeof t == "number" ? (i.width = t, i.height = t) : typeof t == "string" && h.push(`avatar-${t}`), typeof n == "string" && h.push(`rounded-${n}`), /* @__PURE__ */ rr("div", {
      className: P(h),
      style: i,
      ...f
    }, d, a);
  }
}
function nl() {
  const e = typeof window.innerWidth == "number" ? window.innerWidth - document.body.clientWidth : 17;
  document.body.style.paddingRight = `${e}px`, document.body.classList.add("modal-open");
}
function ol() {
  document.body.style.paddingRight = "", document.body.classList.remove("modal-open");
}
function rl(e, t) {
  nl(), e.classList.add("block"), cr(e, t), e.onclick = (n) => sl(n, e), window.addEventListener("resize", () => {
    cr(e, t);
  });
}
function bs(e) {
  var t;
  ol(), (t = e.classList) == null || t.remove("block");
}
function cr(e, t) {
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
function sl(e, t) {
  e.target.closest("[data-dismiss=modal]") && (e.stopPropagation(), bs(t));
}
function il(e) {
  var t, n;
  return e instanceof HTMLAnchorElement ? (n = (t = (e.href || "").match(/(?<selector>#\S+)$/)) == null ? void 0 : t.groups) == null ? void 0 : n.selector : e.dataset.target;
}
document.addEventListener("click", (e) => {
  const t = e.target, n = t.closest("[data-toggle=modal]");
  if (n) {
    const o = il(n);
    if (!o)
      return;
    const s = document.querySelector(o);
    if (!s)
      return;
    rl(s, n.dataset.position || "fit");
  } else
    t.className.includes("modal") && bs(t);
});
function re(e) {
  if (e == null)
    return window;
  if (e.toString() !== "[object Window]") {
    var t = e.ownerDocument;
    return t && t.defaultView || window;
  }
  return e;
}
function Ze(e) {
  var t = re(e).Element;
  return e instanceof t || e instanceof Element;
}
function oe(e) {
  var t = re(e).HTMLElement;
  return e instanceof t || e instanceof HTMLElement;
}
function xo(e) {
  if (typeof ShadowRoot > "u")
    return !1;
  var t = re(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot;
}
var Je = Math.max, En = Math.min, vt = Math.round;
function no() {
  var e = navigator.userAgentData;
  return e != null && e.brands ? e.brands.map(function(t) {
    return t.brand + "/" + t.version;
  }).join(" ") : navigator.userAgent;
}
function ws() {
  return !/^((?!chrome|android).)*safari/i.test(no());
}
function gt(e, t, n) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  var o = e.getBoundingClientRect(), s = 1, r = 1;
  t && oe(e) && (s = e.offsetWidth > 0 && vt(o.width) / e.offsetWidth || 1, r = e.offsetHeight > 0 && vt(o.height) / e.offsetHeight || 1);
  var l = Ze(e) ? re(e) : window, a = l.visualViewport, f = !ws() && n, h = (o.left + (f && a ? a.offsetLeft : 0)) / s, i = (o.top + (f && a ? a.offsetTop : 0)) / r, d = o.width / s, u = o.height / r;
  return {
    width: d,
    height: u,
    top: i,
    right: h + d,
    bottom: i + u,
    left: h,
    x: h,
    y: i
  };
}
function Eo(e) {
  var t = re(e), n = t.pageXOffset, o = t.pageYOffset;
  return {
    scrollLeft: n,
    scrollTop: o
  };
}
function ll(e) {
  return {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  };
}
function al(e) {
  return e === re(e) || !oe(e) ? Eo(e) : ll(e);
}
function pe(e) {
  return e ? (e.nodeName || "").toLowerCase() : null;
}
function Be(e) {
  return ((Ze(e) ? e.ownerDocument : e.document) || window.document).documentElement;
}
function Co(e) {
  return gt(Be(e)).left + Eo(e).scrollLeft;
}
function ae(e) {
  return re(e).getComputedStyle(e);
}
function $o(e) {
  var t = ae(e), n = t.overflow, o = t.overflowX, s = t.overflowY;
  return /auto|scroll|overlay|hidden/.test(n + s + o);
}
function cl(e) {
  var t = e.getBoundingClientRect(), n = vt(t.width) / e.offsetWidth || 1, o = vt(t.height) / e.offsetHeight || 1;
  return n !== 1 || o !== 1;
}
function fl(e, t, n) {
  n === void 0 && (n = !1);
  var o = oe(t), s = oe(t) && cl(t), r = Be(t), l = gt(e, s, n), a = {
    scrollLeft: 0,
    scrollTop: 0
  }, f = {
    x: 0,
    y: 0
  };
  return (o || !o && !n) && ((pe(t) !== "body" || $o(r)) && (a = al(t)), oe(t) ? (f = gt(t, !0), f.x += t.clientLeft, f.y += t.clientTop) : r && (f.x = Co(r))), {
    x: l.left + a.scrollLeft - f.x,
    y: l.top + a.scrollTop - f.y,
    width: l.width,
    height: l.height
  };
}
function ks(e) {
  var t = gt(e), n = e.offsetWidth, o = e.offsetHeight;
  return Math.abs(t.width - n) <= 1 && (n = t.width), Math.abs(t.height - o) <= 1 && (o = t.height), {
    x: e.offsetLeft,
    y: e.offsetTop,
    width: n,
    height: o
  };
}
function qn(e) {
  return pe(e) === "html" ? e : e.assignedSlot || e.parentNode || (xo(e) ? e.host : null) || Be(e);
}
function xs(e) {
  return ["html", "body", "#document"].indexOf(pe(e)) >= 0 ? e.ownerDocument.body : oe(e) && $o(e) ? e : xs(qn(e));
}
function Ot(e, t) {
  var n;
  t === void 0 && (t = []);
  var o = xs(e), s = o === ((n = e.ownerDocument) == null ? void 0 : n.body), r = re(o), l = s ? [r].concat(r.visualViewport || [], $o(o) ? o : []) : o, a = t.concat(l);
  return s ? a : a.concat(Ot(qn(l)));
}
function ul(e) {
  return ["table", "td", "th"].indexOf(pe(e)) >= 0;
}
function fr(e) {
  return !oe(e) || ae(e).position === "fixed" ? null : e.offsetParent;
}
function hl(e) {
  var t = /firefox/i.test(no()), n = /Trident/i.test(no());
  if (n && oe(e)) {
    var o = ae(e);
    if (o.position === "fixed")
      return null;
  }
  var s = qn(e);
  for (xo(s) && (s = s.host); oe(s) && ["html", "body"].indexOf(pe(s)) < 0; ) {
    var r = ae(s);
    if (r.transform !== "none" || r.perspective !== "none" || r.contain === "paint" || ["transform", "perspective"].indexOf(r.willChange) !== -1 || t && r.willChange === "filter" || t && r.filter && r.filter !== "none")
      return s;
    s = s.parentNode;
  }
  return null;
}
function Yn(e) {
  for (var t = re(e), n = fr(e); n && ul(n) && ae(n).position === "static"; )
    n = fr(n);
  return n && (pe(n) === "html" || pe(n) === "body" && ae(n).position === "static") ? t : n || hl(e) || t;
}
var le = "top", ve = "bottom", Ue = "right", Ce = "left", Gn = "auto", Kn = [le, ve, Ue, Ce], mt = "start", Tt = "end", _l = "clippingParents", Es = "viewport", xt = "popper", dl = "reference", ur = /* @__PURE__ */ Kn.reduce(function(e, t) {
  return e.concat([t + "-" + mt, t + "-" + Tt]);
}, []), pl = /* @__PURE__ */ [].concat(Kn, [Gn]).reduce(function(e, t) {
  return e.concat([t, t + "-" + mt, t + "-" + Tt]);
}, []), vl = "beforeRead", gl = "read", ml = "afterRead", yl = "beforeMain", bl = "main", wl = "afterMain", kl = "beforeWrite", xl = "write", El = "afterWrite", oo = [vl, gl, ml, yl, bl, wl, kl, xl, El];
function Cl(e) {
  var t = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Set(), o = [];
  e.forEach(function(r) {
    t.set(r.name, r);
  });
  function s(r) {
    n.add(r.name);
    var l = [].concat(r.requires || [], r.requiresIfExists || []);
    l.forEach(function(a) {
      if (!n.has(a)) {
        var f = t.get(a);
        f && s(f);
      }
    }), o.push(r);
  }
  return e.forEach(function(r) {
    n.has(r.name) || s(r);
  }), o;
}
function $l(e) {
  var t = Cl(e);
  return oo.reduce(function(n, o) {
    return n.concat(t.filter(function(s) {
      return s.phase === o;
    }));
  }, []);
}
function Sl(e) {
  var t;
  return function() {
    return t || (t = new Promise(function(n) {
      Promise.resolve().then(function() {
        t = void 0, n(e());
      });
    })), t;
  };
}
function Me(e) {
  for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), o = 1; o < t; o++)
    n[o - 1] = arguments[o];
  return [].concat(n).reduce(function(s, r) {
    return s.replace(/%s/, r);
  }, e);
}
var qe = 'Popper: modifier "%s" provided an invalid %s property, expected %s but got %s', Rl = 'Popper: modifier "%s" requires "%s", but "%s" modifier is not available', hr = ["name", "enabled", "phase", "fn", "effect", "requires", "options"];
function Al(e) {
  e.forEach(function(t) {
    [].concat(Object.keys(t), hr).filter(function(n, o, s) {
      return s.indexOf(n) === o;
    }).forEach(function(n) {
      switch (n) {
        case "name":
          typeof t.name != "string" && console.error(Me(qe, String(t.name), '"name"', '"string"', '"' + String(t.name) + '"'));
          break;
        case "enabled":
          typeof t.enabled != "boolean" && console.error(Me(qe, t.name, '"enabled"', '"boolean"', '"' + String(t.enabled) + '"'));
          break;
        case "phase":
          oo.indexOf(t.phase) < 0 && console.error(Me(qe, t.name, '"phase"', "either " + oo.join(", "), '"' + String(t.phase) + '"'));
          break;
        case "fn":
          typeof t.fn != "function" && console.error(Me(qe, t.name, '"fn"', '"function"', '"' + String(t.fn) + '"'));
          break;
        case "effect":
          t.effect != null && typeof t.effect != "function" && console.error(Me(qe, t.name, '"effect"', '"function"', '"' + String(t.fn) + '"'));
          break;
        case "requires":
          t.requires != null && !Array.isArray(t.requires) && console.error(Me(qe, t.name, '"requires"', '"array"', '"' + String(t.requires) + '"'));
          break;
        case "requiresIfExists":
          Array.isArray(t.requiresIfExists) || console.error(Me(qe, t.name, '"requiresIfExists"', '"array"', '"' + String(t.requiresIfExists) + '"'));
          break;
        case "options":
        case "data":
          break;
        default:
          console.error('PopperJS: an invalid property has been provided to the "' + t.name + '" modifier, valid properties are ' + hr.map(function(o) {
            return '"' + o + '"';
          }).join(", ") + '; but "' + n + '" was provided.');
      }
      t.requires && t.requires.forEach(function(o) {
        e.find(function(s) {
          return s.name === o;
        }) == null && console.error(Me(Rl, String(t.name), o, o));
      });
    });
  });
}
function Ml(e, t) {
  var n = /* @__PURE__ */ new Set();
  return e.filter(function(o) {
    var s = t(o);
    if (!n.has(s))
      return n.add(s), !0;
  });
}
function $e(e) {
  return e.split("-")[0];
}
function Ll(e) {
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
function Nl(e, t) {
  var n = re(e), o = Be(e), s = n.visualViewport, r = o.clientWidth, l = o.clientHeight, a = 0, f = 0;
  if (s) {
    r = s.width, l = s.height;
    var h = ws();
    (h || !h && t === "fixed") && (a = s.offsetLeft, f = s.offsetTop);
  }
  return {
    width: r,
    height: l,
    x: a + Co(e),
    y: f
  };
}
function Ol(e) {
  var t, n = Be(e), o = Eo(e), s = (t = e.ownerDocument) == null ? void 0 : t.body, r = Je(n.scrollWidth, n.clientWidth, s ? s.scrollWidth : 0, s ? s.clientWidth : 0), l = Je(n.scrollHeight, n.clientHeight, s ? s.scrollHeight : 0, s ? s.clientHeight : 0), a = -o.scrollLeft + Co(e), f = -o.scrollTop;
  return ae(s || n).direction === "rtl" && (a += Je(n.clientWidth, s ? s.clientWidth : 0) - r), {
    width: r,
    height: l,
    x: a,
    y: f
  };
}
function Dl(e, t) {
  var n = t.getRootNode && t.getRootNode();
  if (e.contains(t))
    return !0;
  if (n && xo(n)) {
    var o = t;
    do {
      if (o && e.isSameNode(o))
        return !0;
      o = o.parentNode || o.host;
    } while (o);
  }
  return !1;
}
function ro(e) {
  return Object.assign({}, e, {
    left: e.x,
    top: e.y,
    right: e.x + e.width,
    bottom: e.y + e.height
  });
}
function Pl(e, t) {
  var n = gt(e, !1, t === "fixed");
  return n.top = n.top + e.clientTop, n.left = n.left + e.clientLeft, n.bottom = n.top + e.clientHeight, n.right = n.left + e.clientWidth, n.width = e.clientWidth, n.height = e.clientHeight, n.x = n.left, n.y = n.top, n;
}
function _r(e, t, n) {
  return t === Es ? ro(Nl(e, n)) : Ze(t) ? Pl(t, n) : ro(Ol(Be(e)));
}
function Tl(e) {
  var t = Ot(qn(e)), n = ["absolute", "fixed"].indexOf(ae(e).position) >= 0, o = n && oe(e) ? Yn(e) : e;
  return Ze(o) ? t.filter(function(s) {
    return Ze(s) && Dl(s, o) && pe(s) !== "body";
  }) : [];
}
function Hl(e, t, n, o) {
  var s = t === "clippingParents" ? Tl(e) : [].concat(t), r = [].concat(s, [n]), l = r[0], a = r.reduce(function(f, h) {
    var i = _r(e, h, o);
    return f.top = Je(i.top, f.top), f.right = En(i.right, f.right), f.bottom = En(i.bottom, f.bottom), f.left = Je(i.left, f.left), f;
  }, _r(e, l, o));
  return a.width = a.right - a.left, a.height = a.bottom - a.top, a.x = a.left, a.y = a.top, a;
}
function yt(e) {
  return e.split("-")[1];
}
function Cs(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function $s(e) {
  var t = e.reference, n = e.element, o = e.placement, s = o ? $e(o) : null, r = o ? yt(o) : null, l = t.x + t.width / 2 - n.width / 2, a = t.y + t.height / 2 - n.height / 2, f;
  switch (s) {
    case le:
      f = {
        x: l,
        y: t.y - n.height
      };
      break;
    case ve:
      f = {
        x: l,
        y: t.y + t.height
      };
      break;
    case Ue:
      f = {
        x: t.x + t.width,
        y: a
      };
      break;
    case Ce:
      f = {
        x: t.x - n.width,
        y: a
      };
      break;
    default:
      f = {
        x: t.x,
        y: t.y
      };
  }
  var h = s ? Cs(s) : null;
  if (h != null) {
    var i = h === "y" ? "height" : "width";
    switch (r) {
      case mt:
        f[h] = f[h] - (t[i] / 2 - n[i] / 2);
        break;
      case Tt:
        f[h] = f[h] + (t[i] / 2 - n[i] / 2);
        break;
    }
  }
  return f;
}
function Ss() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
function Wl(e) {
  return Object.assign({}, Ss(), e);
}
function jl(e, t) {
  return t.reduce(function(n, o) {
    return n[o] = e, n;
  }, {});
}
function So(e, t) {
  t === void 0 && (t = {});
  var n = t, o = n.placement, s = o === void 0 ? e.placement : o, r = n.strategy, l = r === void 0 ? e.strategy : r, a = n.boundary, f = a === void 0 ? _l : a, h = n.rootBoundary, i = h === void 0 ? Es : h, d = n.elementContext, u = d === void 0 ? xt : d, c = n.altBoundary, _ = c === void 0 ? !1 : c, b = n.padding, p = b === void 0 ? 0 : b, g = Wl(typeof p != "number" ? p : jl(p, Kn)), m = u === xt ? dl : xt, w = e.rects.popper, k = e.elements[_ ? m : u], x = Hl(Ze(k) ? k : k.contextElement || Be(e.elements.popper), f, i, l), y = gt(e.elements.reference), E = $s({
    reference: y,
    element: w,
    strategy: "absolute",
    placement: s
  }), $ = ro(Object.assign({}, w, E)), M = u === xt ? $ : y, O = {
    top: x.top - M.top + g.top,
    bottom: M.bottom - x.bottom + g.bottom,
    left: x.left - M.left + g.left,
    right: M.right - x.right + g.right
  }, L = e.modifiersData.offset;
  if (u === xt && L) {
    var q = L[s];
    Object.keys(O).forEach(function(F) {
      var se = [Ue, ve].indexOf(F) >= 0 ? 1 : -1, Y = [le, ve].indexOf(F) >= 0 ? "y" : "x";
      O[F] += q[Y] * se;
    });
  }
  return O;
}
var dr = "Popper: Invalid reference or popper argument provided. They must be either a DOM element or virtual element.", Il = "Popper: An infinite loop in the modifiers cycle has been detected! The cycle has been interrupted to prevent a browser crash.", pr = {
  placement: "bottom",
  modifiers: [],
  strategy: "absolute"
};
function vr() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return !t.some(function(o) {
    return !(o && typeof o.getBoundingClientRect == "function");
  });
}
function Ul(e) {
  e === void 0 && (e = {});
  var t = e, n = t.defaultModifiers, o = n === void 0 ? [] : n, s = t.defaultOptions, r = s === void 0 ? pr : s;
  return function(a, f, h) {
    h === void 0 && (h = r);
    var i = {
      placement: "bottom",
      orderedModifiers: [],
      options: Object.assign({}, pr, r),
      modifiersData: {},
      elements: {
        reference: a,
        popper: f
      },
      attributes: {},
      styles: {}
    }, d = [], u = !1, c = {
      state: i,
      setOptions: function(g) {
        var m = typeof g == "function" ? g(i.options) : g;
        b(), i.options = Object.assign({}, r, i.options, m), i.scrollParents = {
          reference: Ze(a) ? Ot(a) : a.contextElement ? Ot(a.contextElement) : [],
          popper: Ot(f)
        };
        var w = $l(Ll([].concat(o, i.options.modifiers)));
        if (i.orderedModifiers = w.filter(function(L) {
          return L.enabled;
        }), process.env.NODE_ENV !== "production") {
          var k = Ml([].concat(w, i.options.modifiers), function(L) {
            var q = L.name;
            return q;
          });
          if (Al(k), $e(i.options.placement) === Gn) {
            var x = i.orderedModifiers.find(function(L) {
              var q = L.name;
              return q === "flip";
            });
            x || console.error(['Popper: "auto" placements require the "flip" modifier be', "present and enabled to work."].join(" "));
          }
          var y = ae(f), E = y.marginTop, $ = y.marginRight, M = y.marginBottom, O = y.marginLeft;
          [E, $, M, O].some(function(L) {
            return parseFloat(L);
          }) && console.warn(['Popper: CSS "margin" styles cannot be used to apply padding', "between the popper and its reference element or boundary.", "To replicate margin, use the `offset` modifier, as well as", "the `padding` option in the `preventOverflow` and `flip`", "modifiers."].join(" "));
        }
        return _(), c.update();
      },
      forceUpdate: function() {
        if (!u) {
          var g = i.elements, m = g.reference, w = g.popper;
          if (!vr(m, w)) {
            process.env.NODE_ENV !== "production" && console.error(dr);
            return;
          }
          i.rects = {
            reference: fl(m, Yn(w), i.options.strategy === "fixed"),
            popper: ks(w)
          }, i.reset = !1, i.placement = i.options.placement, i.orderedModifiers.forEach(function(L) {
            return i.modifiersData[L.name] = Object.assign({}, L.data);
          });
          for (var k = 0, x = 0; x < i.orderedModifiers.length; x++) {
            if (process.env.NODE_ENV !== "production" && (k += 1, k > 100)) {
              console.error(Il);
              break;
            }
            if (i.reset === !0) {
              i.reset = !1, x = -1;
              continue;
            }
            var y = i.orderedModifiers[x], E = y.fn, $ = y.options, M = $ === void 0 ? {} : $, O = y.name;
            typeof E == "function" && (i = E({
              state: i,
              options: M,
              name: O,
              instance: c
            }) || i);
          }
        }
      },
      update: Sl(function() {
        return new Promise(function(p) {
          c.forceUpdate(), p(i);
        });
      }),
      destroy: function() {
        b(), u = !0;
      }
    };
    if (!vr(a, f))
      return process.env.NODE_ENV !== "production" && console.error(dr), c;
    c.setOptions(h).then(function(p) {
      !u && h.onFirstUpdate && h.onFirstUpdate(p);
    });
    function _() {
      i.orderedModifiers.forEach(function(p) {
        var g = p.name, m = p.options, w = m === void 0 ? {} : m, k = p.effect;
        if (typeof k == "function") {
          var x = k({
            state: i,
            name: g,
            instance: c,
            options: w
          }), y = function() {
          };
          d.push(x || y);
        }
      });
    }
    function b() {
      d.forEach(function(p) {
        return p();
      }), d = [];
    }
    return c;
  };
}
var Qt = {
  passive: !0
};
function Bl(e) {
  var t = e.state, n = e.instance, o = e.options, s = o.scroll, r = s === void 0 ? !0 : s, l = o.resize, a = l === void 0 ? !0 : l, f = re(t.elements.popper), h = [].concat(t.scrollParents.reference, t.scrollParents.popper);
  return r && h.forEach(function(i) {
    i.addEventListener("scroll", n.update, Qt);
  }), a && f.addEventListener("resize", n.update, Qt), function() {
    r && h.forEach(function(i) {
      i.removeEventListener("scroll", n.update, Qt);
    }), a && f.removeEventListener("resize", n.update, Qt);
  };
}
const zl = {
  name: "eventListeners",
  enabled: !0,
  phase: "write",
  fn: function() {
  },
  effect: Bl,
  data: {}
};
function Fl(e) {
  var t = e.state, n = e.name;
  t.modifiersData[n] = $s({
    reference: t.rects.reference,
    element: t.rects.popper,
    strategy: "absolute",
    placement: t.placement
  });
}
const Vl = {
  name: "popperOffsets",
  enabled: !0,
  phase: "read",
  fn: Fl,
  data: {}
};
var ql = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function Yl(e) {
  var t = e.x, n = e.y, o = window, s = o.devicePixelRatio || 1;
  return {
    x: vt(t * s) / s || 0,
    y: vt(n * s) / s || 0
  };
}
function gr(e) {
  var t, n = e.popper, o = e.popperRect, s = e.placement, r = e.variation, l = e.offsets, a = e.position, f = e.gpuAcceleration, h = e.adaptive, i = e.roundOffsets, d = e.isFixed, u = l.x, c = u === void 0 ? 0 : u, _ = l.y, b = _ === void 0 ? 0 : _, p = typeof i == "function" ? i({
    x: c,
    y: b
  }) : {
    x: c,
    y: b
  };
  c = p.x, b = p.y;
  var g = l.hasOwnProperty("x"), m = l.hasOwnProperty("y"), w = Ce, k = le, x = window;
  if (h) {
    var y = Yn(n), E = "clientHeight", $ = "clientWidth";
    if (y === re(n) && (y = Be(n), ae(y).position !== "static" && a === "absolute" && (E = "scrollHeight", $ = "scrollWidth")), y = y, s === le || (s === Ce || s === Ue) && r === Tt) {
      k = ve;
      var M = d && y === x && x.visualViewport ? x.visualViewport.height : y[E];
      b -= M - o.height, b *= f ? 1 : -1;
    }
    if (s === Ce || (s === le || s === ve) && r === Tt) {
      w = Ue;
      var O = d && y === x && x.visualViewport ? x.visualViewport.width : y[$];
      c -= O - o.width, c *= f ? 1 : -1;
    }
  }
  var L = Object.assign({
    position: a
  }, h && ql), q = i === !0 ? Yl({
    x: c,
    y: b
  }) : {
    x: c,
    y: b
  };
  if (c = q.x, b = q.y, f) {
    var F;
    return Object.assign({}, L, (F = {}, F[k] = m ? "0" : "", F[w] = g ? "0" : "", F.transform = (x.devicePixelRatio || 1) <= 1 ? "translate(" + c + "px, " + b + "px)" : "translate3d(" + c + "px, " + b + "px, 0)", F));
  }
  return Object.assign({}, L, (t = {}, t[k] = m ? b + "px" : "", t[w] = g ? c + "px" : "", t.transform = "", t));
}
function Gl(e) {
  var t = e.state, n = e.options, o = n.gpuAcceleration, s = o === void 0 ? !0 : o, r = n.adaptive, l = r === void 0 ? !0 : r, a = n.roundOffsets, f = a === void 0 ? !0 : a;
  if (process.env.NODE_ENV !== "production") {
    var h = ae(t.elements.popper).transitionProperty || "";
    l && ["transform", "top", "right", "bottom", "left"].some(function(d) {
      return h.indexOf(d) >= 0;
    }) && console.warn(["Popper: Detected CSS transitions on at least one of the following", 'CSS properties: "transform", "top", "right", "bottom", "left".', `

`, 'Disable the "computeStyles" modifier\'s `adaptive` option to allow', "for smooth transitions, or remove these properties from the CSS", "transition declaration on the popper element if only transitioning", "opacity or background-color for example.", `

`, "We recommend using the popper element as a wrapper around an inner", "element that can have any CSS property transitioned for animations."].join(" "));
  }
  var i = {
    placement: $e(t.placement),
    variation: yt(t.placement),
    popper: t.elements.popper,
    popperRect: t.rects.popper,
    gpuAcceleration: s,
    isFixed: t.options.strategy === "fixed"
  };
  t.modifiersData.popperOffsets != null && (t.styles.popper = Object.assign({}, t.styles.popper, gr(Object.assign({}, i, {
    offsets: t.modifiersData.popperOffsets,
    position: t.options.strategy,
    adaptive: l,
    roundOffsets: f
  })))), t.modifiersData.arrow != null && (t.styles.arrow = Object.assign({}, t.styles.arrow, gr(Object.assign({}, i, {
    offsets: t.modifiersData.arrow,
    position: "absolute",
    adaptive: !1,
    roundOffsets: f
  })))), t.attributes.popper = Object.assign({}, t.attributes.popper, {
    "data-popper-placement": t.placement
  });
}
const Kl = {
  name: "computeStyles",
  enabled: !0,
  phase: "beforeWrite",
  fn: Gl,
  data: {}
};
function Xl(e) {
  var t = e.state;
  Object.keys(t.elements).forEach(function(n) {
    var o = t.styles[n] || {}, s = t.attributes[n] || {}, r = t.elements[n];
    !oe(r) || !pe(r) || (Object.assign(r.style, o), Object.keys(s).forEach(function(l) {
      var a = s[l];
      a === !1 ? r.removeAttribute(l) : r.setAttribute(l, a === !0 ? "" : a);
    }));
  });
}
function Jl(e) {
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
      var s = t.elements[o], r = t.attributes[o] || {}, l = Object.keys(t.styles.hasOwnProperty(o) ? t.styles[o] : n[o]), a = l.reduce(function(f, h) {
        return f[h] = "", f;
      }, {});
      !oe(s) || !pe(s) || (Object.assign(s.style, a), Object.keys(r).forEach(function(f) {
        s.removeAttribute(f);
      }));
    });
  };
}
const Zl = {
  name: "applyStyles",
  enabled: !0,
  phase: "write",
  fn: Xl,
  effect: Jl,
  requires: ["computeStyles"]
};
var Ql = [zl, Vl, Kl, Zl], ea = /* @__PURE__ */ Ul({
  defaultModifiers: Ql
});
function ta(e) {
  return e === "x" ? "y" : "x";
}
function cn(e, t, n) {
  return Je(e, En(t, n));
}
function na(e, t, n) {
  var o = cn(e, t, n);
  return o > n ? n : o;
}
function oa(e) {
  var t = e.state, n = e.options, o = e.name, s = n.mainAxis, r = s === void 0 ? !0 : s, l = n.altAxis, a = l === void 0 ? !1 : l, f = n.boundary, h = n.rootBoundary, i = n.altBoundary, d = n.padding, u = n.tether, c = u === void 0 ? !0 : u, _ = n.tetherOffset, b = _ === void 0 ? 0 : _, p = So(t, {
    boundary: f,
    rootBoundary: h,
    padding: d,
    altBoundary: i
  }), g = $e(t.placement), m = yt(t.placement), w = !m, k = Cs(g), x = ta(k), y = t.modifiersData.popperOffsets, E = t.rects.reference, $ = t.rects.popper, M = typeof b == "function" ? b(Object.assign({}, t.rects, {
    placement: t.placement
  })) : b, O = typeof M == "number" ? {
    mainAxis: M,
    altAxis: M
  } : Object.assign({
    mainAxis: 0,
    altAxis: 0
  }, M), L = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null, q = {
    x: 0,
    y: 0
  };
  if (!!y) {
    if (r) {
      var F, se = k === "y" ? le : Ce, Y = k === "y" ? ve : Ue, W = k === "y" ? "height" : "width", X = y[k], Se = X + p[se], ge = X - p[Y], Qe = c ? -$[W] / 2 : 0, me = m === mt ? E[W] : $[W], Re = m === mt ? -$[W] : -E[W], ze = t.elements.arrow, ye = c && ze ? ks(ze) : {
        width: 0,
        height: 0
      }, S = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : Ss(), D = S[se], V = S[Y], G = cn(0, E[W], ye[W]), ie = w ? E[W] / 2 - Qe - G - D - O.mainAxis : me - G - D - O.mainAxis, Fe = w ? -E[W] / 2 + Qe + G + V + O.mainAxis : Re + G + V + O.mainAxis, Ae = t.elements.arrow && Yn(t.elements.arrow), Gt = Ae ? k === "y" ? Ae.clientTop || 0 : Ae.clientLeft || 0 : 0, Kt = (F = L == null ? void 0 : L[k]) != null ? F : 0, Xn = X + ie - Kt - Gt, T = X + Fe - Kt, kt = cn(c ? En(Se, Xn) : Se, X, c ? Je(ge, T) : ge);
      y[k] = kt, q[k] = kt - X;
    }
    if (a) {
      var Ve, Xt = k === "x" ? le : Ce, Jt = k === "x" ? ve : Ue, ce = y[x], Zt = x === "y" ? "height" : "width", Oo = ce + p[Xt], Do = ce - p[Jt], Jn = [le, Ce].indexOf(g) !== -1, Po = (Ve = L == null ? void 0 : L[x]) != null ? Ve : 0, To = Jn ? Oo : ce - E[Zt] - $[Zt] - Po + O.altAxis, Ho = Jn ? ce + E[Zt] + $[Zt] - Po - O.altAxis : Do, Wo = c && Jn ? na(To, ce, Ho) : cn(c ? To : Oo, ce, c ? Ho : Do);
      y[x] = Wo, q[x] = Wo - ce;
    }
    t.modifiersData[o] = q;
  }
}
const ra = {
  name: "preventOverflow",
  enabled: !0,
  phase: "main",
  fn: oa,
  requiresIfExists: ["offset"]
};
var sa = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function fn(e) {
  return e.replace(/left|right|bottom|top/g, function(t) {
    return sa[t];
  });
}
var ia = {
  start: "end",
  end: "start"
};
function mr(e) {
  return e.replace(/start|end/g, function(t) {
    return ia[t];
  });
}
function la(e, t) {
  t === void 0 && (t = {});
  var n = t, o = n.placement, s = n.boundary, r = n.rootBoundary, l = n.padding, a = n.flipVariations, f = n.allowedAutoPlacements, h = f === void 0 ? pl : f, i = yt(o), d = i ? a ? ur : ur.filter(function(_) {
    return yt(_) === i;
  }) : Kn, u = d.filter(function(_) {
    return h.indexOf(_) >= 0;
  });
  u.length === 0 && (u = d, process.env.NODE_ENV !== "production" && console.error(["Popper: The `allowedAutoPlacements` option did not allow any", "placements. Ensure the `placement` option matches the variation", "of the allowed placements.", 'For example, "auto" cannot be used to allow "bottom-start".', 'Use "auto-start" instead.'].join(" ")));
  var c = u.reduce(function(_, b) {
    return _[b] = So(e, {
      placement: b,
      boundary: s,
      rootBoundary: r,
      padding: l
    })[$e(b)], _;
  }, {});
  return Object.keys(c).sort(function(_, b) {
    return c[_] - c[b];
  });
}
function aa(e) {
  if ($e(e) === Gn)
    return [];
  var t = fn(e);
  return [mr(e), t, mr(t)];
}
function ca(e) {
  var t = e.state, n = e.options, o = e.name;
  if (!t.modifiersData[o]._skip) {
    for (var s = n.mainAxis, r = s === void 0 ? !0 : s, l = n.altAxis, a = l === void 0 ? !0 : l, f = n.fallbackPlacements, h = n.padding, i = n.boundary, d = n.rootBoundary, u = n.altBoundary, c = n.flipVariations, _ = c === void 0 ? !0 : c, b = n.allowedAutoPlacements, p = t.options.placement, g = $e(p), m = g === p, w = f || (m || !_ ? [fn(p)] : aa(p)), k = [p].concat(w).reduce(function(ye, S) {
      return ye.concat($e(S) === Gn ? la(t, {
        placement: S,
        boundary: i,
        rootBoundary: d,
        padding: h,
        flipVariations: _,
        allowedAutoPlacements: b
      }) : S);
    }, []), x = t.rects.reference, y = t.rects.popper, E = /* @__PURE__ */ new Map(), $ = !0, M = k[0], O = 0; O < k.length; O++) {
      var L = k[O], q = $e(L), F = yt(L) === mt, se = [le, ve].indexOf(q) >= 0, Y = se ? "width" : "height", W = So(t, {
        placement: L,
        boundary: i,
        rootBoundary: d,
        altBoundary: u,
        padding: h
      }), X = se ? F ? Ue : Ce : F ? ve : le;
      x[Y] > y[Y] && (X = fn(X));
      var Se = fn(X), ge = [];
      if (r && ge.push(W[q] <= 0), a && ge.push(W[X] <= 0, W[Se] <= 0), ge.every(function(ye) {
        return ye;
      })) {
        M = L, $ = !1;
        break;
      }
      E.set(L, ge);
    }
    if ($)
      for (var Qe = _ ? 3 : 1, me = function(S) {
        var D = k.find(function(V) {
          var G = E.get(V);
          if (G)
            return G.slice(0, S).every(function(ie) {
              return ie;
            });
        });
        if (D)
          return M = D, "break";
      }, Re = Qe; Re > 0; Re--) {
        var ze = me(Re);
        if (ze === "break")
          break;
      }
    t.placement !== M && (t.modifiersData[o]._skip = !0, t.placement = M, t.reset = !0);
  }
}
const fa = {
  name: "flip",
  enabled: !0,
  phase: "main",
  fn: ca,
  requiresIfExists: ["offset"],
  data: {
    _skip: !1
  }
};
function ua(e) {
  return e.button === 2;
}
var Oe, te, it, jt, lt, It, so, Mn, Rs, Ln, As;
const tt = class extends vn {
  constructor() {
    super(...arguments);
    C(this, It);
    C(this, Mn);
    C(this, Ln);
    C(this, Oe, void 0);
    C(this, te, void 0);
    C(this, it, void 0);
    C(this, jt, void 0);
    C(this, lt, void 0);
  }
  get isShown() {
    return this.menu.classList.contains(this.constructor.CLASS_SHOW);
  }
  get menu() {
    var r, l;
    if (v(this, Oe))
      return v(this, Oe);
    const { element: n } = this, o = this.constructor.MENU_CLASS;
    let s;
    if (this.options.menu)
      s = document.createElement("div"), s.classList.add(o), document.body.appendChild(s);
    else if (n) {
      const a = (r = n.getAttribute("href")) != null ? r : n.dataset.target;
      if ((a == null ? void 0 : a[0]) === "#" && (s = document.querySelector(a)), !s) {
        const f = n.nextElementSibling;
        f != null && f.classList.contains(o) ? s = f : s = (l = n.parentNode) == null ? void 0 : l.querySelector(`.${o}`);
      }
    }
    if (s)
      return A(this, Oe, s), s;
    throw new Error("ContextMenu: Cannot find menu element");
  }
  get popper() {
    return v(this, te) ? v(this, te) : j(this, It, so).call(this);
  }
  get trigger() {
    return v(this, jt) || this.element;
  }
  init() {
    const { element: n } = this;
    n !== document.body && !n.hasAttribute("data-toggle") && n.setAttribute("data-toggle", "contextmenu");
  }
  show(n) {
    if (A(this, jt, n), this.emit("show", { menu: this, trigger: this.trigger }).defaultPrevented)
      return !1;
    j(this, Mn, Rs).call(this) !== !1 && (this.menu.classList.add(this.constructor.CLASS_SHOW), j(this, It, so).call(this).update(), this.emit("shown", this));
  }
  hide() {
    var o, s;
    if (this.emit("hide", this).defaultPrevented)
      return !1;
    (o = v(this, te)) == null || o.destroy(), A(this, te, void 0), (s = v(this, Oe)) == null || s.classList.remove(this.constructor.CLASS_SHOW), this.emit("hidden", this);
  }
  toggle(n) {
    return this.isShown ? this.hide() : this.show(n);
  }
  destroy() {
    var n, o;
    (n = v(this, te)) == null || n.destroy(), super.destroy(), this.options.menu && ((o = v(this, Oe)) == null || o.remove());
  }
  static clear(n) {
    n && ua(n) || (tt.getAll(), tt.getAll().forEach((o) => o.hide()));
  }
  static show(n) {
    const { event: o, ...s } = n, r = tt.ensure(document.body);
    return Object.keys(s).length && r.setOptions(s), r.show(o), o == null || o.stopPropagation(), r;
  }
  static hide() {
    const n = tt.get(document.body);
    return n == null || n.hide(), n;
  }
};
let ne = tt;
Oe = new WeakMap(), te = new WeakMap(), it = new WeakMap(), jt = new WeakMap(), lt = new WeakMap(), It = new WeakSet(), so = function() {
  const n = {
    modifiers: [ra, fa],
    placement: this.options.placement,
    strategy: this.options.strategy
  };
  return v(this, te) ? v(this, te).setOptions(n) : A(this, te, ea(j(this, Ln, As).call(this), this.menu, n)), v(this, te);
}, Mn = new WeakSet(), Rs = function() {
  const { menu: n, items: o } = this.options;
  let s = o || (n == null ? void 0 : n.items);
  if (!s)
    return;
  typeof s == "function" && (s = s(this));
  const r = {
    ...n,
    menuItems: s
  };
  return this.emit("updateMenu", { menu: r, trigger: this.trigger, contextmenu: this }).defaultPrevented ? !1 : (v(this, lt) ? v(this, lt).render(r) : A(this, lt, new Jr(this.menu, r)), !0);
}, Ln = new WeakSet(), As = function() {
  return v(this, it) || A(this, it, {
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
  }), v(this, it);
}, N(ne, "EVENTS", !0), N(ne, "DEFAULT", {
  placement: "bottom-start",
  strategy: "fixed",
  subMenuTrigger: "hover"
}), N(ne, "MENU_CLASS", "contextmenu"), N(ne, "CLASS_SHOW", "show"), N(ne, "MENU_SELECTOR", '[data-toggle="contextmenu"]:not(.disabled):not(:disabled)');
document.addEventListener("contextmenu", (e) => {
  const t = e.target;
  if (t.closest(`.${ne.MENU_CLASS}`))
    return;
  const n = t.closest(ne.MENU_SELECTOR);
  n && (ne.ensure(n).show(e), e.preventDefault());
});
document.addEventListener("click", ne.clear);
class nt extends ne {
}
N(nt, "MENU_CLASS", "dropdown"), N(nt, "MENU_SELECTOR", '[data-toggle="dropdown"]:not(.disabled):not(:disabled)'), N(nt, "DEFAULT", {
  placement: "bottom-start",
  strategy: "absolute"
});
document.addEventListener("click", function(e) {
  const n = e.target.closest(nt.MENU_SELECTOR);
  n ? nt.ensure(n).toggle() : nt.clear(e);
});
var Ro, z, Ms, Ls, Dt, yr, Ns = {}, Os = [], ha = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function Ie(e, t) {
  for (var n in t)
    e[n] = t[n];
  return e;
}
function Ds(e) {
  var t = e.parentNode;
  t && t.removeChild(e);
}
function R(e, t, n) {
  var o, s, r, l = {};
  for (r in t)
    r == "key" ? o = t[r] : r == "ref" ? s = t[r] : l[r] = t[r];
  if (arguments.length > 2 && (l.children = arguments.length > 3 ? Ro.call(arguments, 2) : n), typeof e == "function" && e.defaultProps != null)
    for (r in e.defaultProps)
      l[r] === void 0 && (l[r] = e.defaultProps[r]);
  return un(e, l, o, s, null);
}
function un(e, t, n, o, s) {
  var r = { type: e, props: t, key: n, ref: o, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: s == null ? ++Ms : s };
  return s == null && z.vnode != null && z.vnode(r), r;
}
function _a() {
  return { current: null };
}
function Ao(e) {
  return e.children;
}
function Pt(e, t) {
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
function Ps(e) {
  var t, n;
  if ((e = e.__) != null && e.__c != null) {
    for (e.__e = e.__c.base = null, t = 0; t < e.__k.length; t++)
      if ((n = e.__k[t]) != null && n.__e != null) {
        e.__e = e.__c.base = n.__e;
        break;
      }
    return Ps(e);
  }
}
function br(e) {
  (!e.__d && (e.__d = !0) && Dt.push(e) && !Cn.__r++ || yr !== z.debounceRendering) && ((yr = z.debounceRendering) || setTimeout)(Cn);
}
function Cn() {
  for (var e; Cn.__r = Dt.length; )
    e = Dt.sort(function(t, n) {
      return t.__v.__b - n.__v.__b;
    }), Dt = [], e.some(function(t) {
      var n, o, s, r, l, a;
      t.__d && (l = (r = (n = t).__v).__e, (a = n.__P) && (o = [], (s = Ie({}, r)).__v = r.__v + 1, js(a, r, s, n.__n, a.ownerSVGElement !== void 0, r.__h != null ? [l] : null, o, l == null ? bt(r) : l, r.__h), pa(o, r), r.__e != l && Ps(r)));
    });
}
function Ts(e, t, n, o, s, r, l, a, f, h) {
  var i, d, u, c, _, b, p, g = o && o.__k || Os, m = g.length;
  for (n.__k = [], i = 0; i < t.length; i++)
    if ((c = n.__k[i] = (c = t[i]) == null || typeof c == "boolean" ? null : typeof c == "string" || typeof c == "number" || typeof c == "bigint" ? un(null, c, null, null, c) : Array.isArray(c) ? un(Ao, { children: c }, null, null, null) : c.__b > 0 ? un(c.type, c.props, c.key, null, c.__v) : c) != null) {
      if (c.__ = n, c.__b = n.__b + 1, (u = g[i]) === null || u && c.key == u.key && c.type === u.type)
        g[i] = void 0;
      else
        for (d = 0; d < m; d++) {
          if ((u = g[d]) && c.key == u.key && c.type === u.type) {
            g[d] = void 0;
            break;
          }
          u = null;
        }
      js(e, c, u = u || Ns, s, r, l, a, f, h), _ = c.__e, (d = c.ref) && u.ref != d && (p || (p = []), u.ref && p.push(u.ref, null, c), p.push(d, c.__c || _, c)), _ != null ? (b == null && (b = _), typeof c.type == "function" && c.__k === u.__k ? c.__d = f = Hs(c, f, e) : f = Ws(e, c, u, g, _, f), typeof n.type == "function" && (n.__d = f)) : f && u.__e == f && f.parentNode != e && (f = bt(u));
    }
  for (n.__e = b, i = m; i--; )
    g[i] != null && (typeof n.type == "function" && g[i].__e != null && g[i].__e == n.__d && (n.__d = bt(o, i + 1)), Us(g[i], g[i]));
  if (p)
    for (i = 0; i < p.length; i++)
      Is(p[i], p[++i], p[++i]);
}
function Hs(e, t, n) {
  for (var o, s = e.__k, r = 0; s && r < s.length; r++)
    (o = s[r]) && (o.__ = e, t = typeof o.type == "function" ? Hs(o, t, n) : Ws(n, o, o, s, o.__e, t));
  return t;
}
function Ws(e, t, n, o, s, r) {
  var l, a, f;
  if (t.__d !== void 0)
    l = t.__d, t.__d = void 0;
  else if (n == null || s != r || s.parentNode == null)
    e:
      if (r == null || r.parentNode !== e)
        e.appendChild(s), l = null;
      else {
        for (a = r, f = 0; (a = a.nextSibling) && f < o.length; f += 2)
          if (a == s)
            break e;
        e.insertBefore(s, r), l = r;
      }
  return l !== void 0 ? l : s.nextSibling;
}
function da(e, t, n, o, s) {
  var r;
  for (r in n)
    r === "children" || r === "key" || r in t || $n(e, r, null, n[r], o);
  for (r in t)
    s && typeof t[r] != "function" || r === "children" || r === "key" || r === "value" || r === "checked" || n[r] === t[r] || $n(e, r, t[r], n[r], o);
}
function wr(e, t, n) {
  t[0] === "-" ? e.setProperty(t, n) : e[t] = n == null ? "" : typeof n != "number" || ha.test(t) ? n : n + "px";
}
function $n(e, t, n, o, s) {
  var r;
  e:
    if (t === "style")
      if (typeof n == "string")
        e.style.cssText = n;
      else {
        if (typeof o == "string" && (e.style.cssText = o = ""), o)
          for (t in o)
            n && t in n || wr(e.style, t, "");
        if (n)
          for (t in n)
            o && n[t] === o[t] || wr(e.style, t, n[t]);
      }
    else if (t[0] === "o" && t[1] === "n")
      r = t !== (t = t.replace(/Capture$/, "")), t = t.toLowerCase() in e ? t.toLowerCase().slice(2) : t.slice(2), e.l || (e.l = {}), e.l[t + r] = n, n ? o || e.addEventListener(t, r ? xr : kr, r) : e.removeEventListener(t, r ? xr : kr, r);
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
function kr(e) {
  this.l[e.type + !1](z.event ? z.event(e) : e);
}
function xr(e) {
  this.l[e.type + !0](z.event ? z.event(e) : e);
}
function js(e, t, n, o, s, r, l, a, f) {
  var h, i, d, u, c, _, b, p, g, m, w, k, x, y = t.type;
  if (t.constructor !== void 0)
    return null;
  n.__h != null && (f = n.__h, a = t.__e = n.__e, t.__h = null, r = [a]), (h = z.__b) && h(t);
  try {
    e:
      if (typeof y == "function") {
        if (p = t.props, g = (h = y.contextType) && o[h.__c], m = h ? g ? g.props.value : h.__ : o, n.__c ? b = (i = t.__c = n.__c).__ = i.__E : ("prototype" in y && y.prototype.render ? t.__c = i = new y(p, m) : (t.__c = i = new Pt(p, m), i.constructor = y, i.render = ga), g && g.sub(i), i.props = p, i.state || (i.state = {}), i.context = m, i.__n = o, d = i.__d = !0, i.__h = []), i.__s == null && (i.__s = i.state), y.getDerivedStateFromProps != null && (i.__s == i.state && (i.__s = Ie({}, i.__s)), Ie(i.__s, y.getDerivedStateFromProps(p, i.__s))), u = i.props, c = i.state, d)
          y.getDerivedStateFromProps == null && i.componentWillMount != null && i.componentWillMount(), i.componentDidMount != null && i.__h.push(i.componentDidMount);
        else {
          if (y.getDerivedStateFromProps == null && p !== u && i.componentWillReceiveProps != null && i.componentWillReceiveProps(p, m), !i.__e && i.shouldComponentUpdate != null && i.shouldComponentUpdate(p, i.__s, m) === !1 || t.__v === n.__v) {
            i.props = p, i.state = i.__s, t.__v !== n.__v && (i.__d = !1), i.__v = t, t.__e = n.__e, t.__k = n.__k, t.__k.forEach(function(E) {
              E && (E.__ = t);
            }), i.__h.length && l.push(i);
            break e;
          }
          i.componentWillUpdate != null && i.componentWillUpdate(p, i.__s, m), i.componentDidUpdate != null && i.__h.push(function() {
            i.componentDidUpdate(u, c, _);
          });
        }
        if (i.context = m, i.props = p, i.__v = t, i.__P = e, w = z.__r, k = 0, "prototype" in y && y.prototype.render)
          i.state = i.__s, i.__d = !1, w && w(t), h = i.render(i.props, i.state, i.context);
        else
          do
            i.__d = !1, w && w(t), h = i.render(i.props, i.state, i.context), i.state = i.__s;
          while (i.__d && ++k < 25);
        i.state = i.__s, i.getChildContext != null && (o = Ie(Ie({}, o), i.getChildContext())), d || i.getSnapshotBeforeUpdate == null || (_ = i.getSnapshotBeforeUpdate(u, c)), x = h != null && h.type === Ao && h.key == null ? h.props.children : h, Ts(e, Array.isArray(x) ? x : [x], t, n, o, s, r, l, a, f), i.base = t.__e, t.__h = null, i.__h.length && l.push(i), b && (i.__E = i.__ = null), i.__e = !1;
      } else
        r == null && t.__v === n.__v ? (t.__k = n.__k, t.__e = n.__e) : t.__e = va(n.__e, t, n, o, s, r, l, f);
    (h = z.diffed) && h(t);
  } catch (E) {
    t.__v = null, (f || r != null) && (t.__e = a, t.__h = !!f, r[r.indexOf(a)] = null), z.__e(E, t, n);
  }
}
function pa(e, t) {
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
function va(e, t, n, o, s, r, l, a) {
  var f, h, i, d = n.props, u = t.props, c = t.type, _ = 0;
  if (c === "svg" && (s = !0), r != null) {
    for (; _ < r.length; _++)
      if ((f = r[_]) && "setAttribute" in f == !!c && (c ? f.localName === c : f.nodeType === 3)) {
        e = f, r[_] = null;
        break;
      }
  }
  if (e == null) {
    if (c === null)
      return document.createTextNode(u);
    e = s ? document.createElementNS("http://www.w3.org/2000/svg", c) : document.createElement(c, u.is && u), r = null, a = !1;
  }
  if (c === null)
    d === u || a && e.data === u || (e.data = u);
  else {
    if (r = r && Ro.call(e.childNodes), h = (d = n.props || Ns).dangerouslySetInnerHTML, i = u.dangerouslySetInnerHTML, !a) {
      if (r != null)
        for (d = {}, _ = 0; _ < e.attributes.length; _++)
          d[e.attributes[_].name] = e.attributes[_].value;
      (i || h) && (i && (h && i.__html == h.__html || i.__html === e.innerHTML) || (e.innerHTML = i && i.__html || ""));
    }
    if (da(e, u, d, s, a), i)
      t.__k = [];
    else if (_ = t.props.children, Ts(e, Array.isArray(_) ? _ : [_], t, n, o, s && c !== "foreignObject", r, l, r ? r[0] : n.__k && bt(n, 0), a), r != null)
      for (_ = r.length; _--; )
        r[_] != null && Ds(r[_]);
    a || ("value" in u && (_ = u.value) !== void 0 && (_ !== e.value || c === "progress" && !_ || c === "option" && _ !== d.value) && $n(e, "value", _, d.value, !1), "checked" in u && (_ = u.checked) !== void 0 && _ !== e.checked && $n(e, "checked", _, d.checked, !1));
  }
  return e;
}
function Is(e, t, n) {
  try {
    typeof e == "function" ? e(t) : e.current = t;
  } catch (o) {
    z.__e(o, n);
  }
}
function Us(e, t, n) {
  var o, s;
  if (z.unmount && z.unmount(e), (o = e.ref) && (o.current && o.current !== e.__e || Is(o, null, t)), (o = e.__c) != null) {
    if (o.componentWillUnmount)
      try {
        o.componentWillUnmount();
      } catch (r) {
        z.__e(r, t);
      }
    o.base = o.__P = null;
  }
  if (o = e.__k)
    for (s = 0; s < o.length; s++)
      o[s] && Us(o[s], t, typeof e.type != "function");
  n || e.__e == null || Ds(e.__e), e.__e = e.__d = void 0;
}
function ga(e, t, n) {
  return this.constructor(e, n);
}
Ro = Os.slice, z = { __e: function(e, t, n, o) {
  for (var s, r, l; t = t.__; )
    if ((s = t.__c) && !s.__)
      try {
        if ((r = s.constructor) && r.getDerivedStateFromError != null && (s.setState(r.getDerivedStateFromError(e)), l = s.__d), s.componentDidCatch != null && (s.componentDidCatch(e, o || {}), l = s.__d), l)
          return s.__E = s;
      } catch (a) {
        e = a;
      }
  throw e;
} }, Ms = 0, Ls = function(e) {
  return e != null && e.constructor === void 0;
}, Pt.prototype.setState = function(e, t) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = Ie({}, this.state), typeof e == "function" && (e = e(Ie({}, n), this.props)), e && Ie(n, e), e != null && this.__v && (t && this.__h.push(t), br(this));
}, Pt.prototype.forceUpdate = function(e) {
  this.__v && (this.__e = !0, e && this.__h.push(e), br(this));
}, Pt.prototype.render = Ao, Dt = [], Cn.__r = 0;
let ma = (e = 21) => crypto.getRandomValues(new Uint8Array(e)).reduce((t, n) => (n &= 63, n < 36 ? t += n.toString(36) : n < 62 ? t += (n - 26).toString(36).toUpperCase() : n > 62 ? t += "-" : t += "_", t), "");
function ya(e, t, n) {
  return e && (t && (e = Math.max(t, e)), n && (e = Math.min(n, e))), e;
}
function Mo({ col: e, className: t, height: n, row: o, onRenderCell: s, style: r, outerStyle: l, children: a, outerClass: f, ...h }) {
  var y, E;
  const i = {
    left: e.left,
    width: e.realWidth,
    height: n,
    ...l
  }, { align: d, border: u } = e.setting, c = {
    justifyContent: d ? d === "left" ? "start" : d === "right" ? "end" : d : void 0,
    ...e.setting.cellStyle,
    ...r
  }, _ = ["dtable-cell", f, e.setting.className, {
    "has-border-left": u === !0 || u === "left",
    "has-border-right": u === !0 || u === "right"
  }], b = ["dtable-cell-content", t], p = [(E = a != null ? a : (y = o.data) == null ? void 0 : y[e.name]) != null ? E : ""], g = s ? s(p, { row: o, col: e }, R) : p, m = [], w = [], k = {}, x = {};
  return g == null || g.forEach(($) => {
    var M;
    if (typeof $ == "object" && $ && !Ls($) && ("html" in $ || "className" in $ || "style" in $ || "attrs" in $ || "children" in $)) {
      const O = $.outer ? m : w;
      $.html ? O.push(/* @__PURE__ */ R("div", {
        className: P("dtable-cell-html", $.className),
        style: $.style,
        dangerouslySetInnerHTML: { __html: $.html },
        ...(M = $.attrs) != null ? M : {}
      })) : ($.style && Object.assign($.outer ? i : c, $.style), $.className && ($.outer ? _ : b).push($.className), $.children && O.push($.children), $.attrs && Object.assign($.outer ? k : x, $.attrs));
    } else
      w.push($);
  }), /* @__PURE__ */ R("div", {
    className: P(_),
    style: i,
    "data-col": e.name,
    ...h,
    ...k
  }, w.length > 0 && /* @__PURE__ */ R("div", {
    className: P(b),
    style: c,
    ...x
  }, w), m);
}
function ba({ col: e, children: t, style: n, ...o }) {
  var r;
  const { sortType: s } = e.setting;
  return /* @__PURE__ */ R(Mo, {
    col: e,
    style: { ...n, ...e.setting.style },
    "data-sort": s || null,
    "data-type": e.type,
    ...o
  }, (r = e.setting.title) != null ? r : e.setting.name, s && /* @__PURE__ */ R("div", {
    className: `dtable-sort dtable-sort-${s === !0 ? "none" : s}`
  }), t);
}
function Qn({ row: e, className: t, top: n = 0, left: o = 0, width: s, height: r, cols: l, CellComponent: a = Mo, onRenderCell: f }) {
  return /* @__PURE__ */ R("div", {
    className: P("dtable-cells", t),
    style: { top: n, left: o, width: s, height: r }
  }, l.map((h) => h.visible ? /* @__PURE__ */ R(a, {
    key: h.name,
    col: h,
    row: e,
    onRenderCell: f
  }) : null));
}
function Bs({
  row: e,
  className: t,
  top: n,
  height: o,
  fixedLeftCols: s,
  fixedRightCols: r,
  scrollCols: l,
  fixedLeftWidth: a,
  scrollWidth: f,
  scrollColsWidth: h,
  fixedRightWidth: i,
  scrollLeft: d,
  CellComponent: u = Mo,
  onRenderCell: c,
  style: _,
  ...b
}) {
  let p = null;
  s != null && s.length && (p = /* @__PURE__ */ R(Qn, {
    className: "dtable-fixed-left",
    cols: s,
    width: a,
    row: e,
    CellComponent: u,
    onRenderCell: c
  }));
  let g = null;
  l != null && l.length && (g = /* @__PURE__ */ R(Qn, {
    className: "dtable-flexable",
    cols: l,
    left: a - d,
    width: h,
    row: e,
    CellComponent: u,
    onRenderCell: c
  }));
  let m = null;
  r != null && r.length && (m = /* @__PURE__ */ R(Qn, {
    className: "dtable-fixed-right",
    cols: r,
    left: a + f,
    width: i,
    row: e,
    CellComponent: u,
    onRenderCell: c
  }));
  const w = { top: n, height: o, lineHeight: `${o - 2}px`, ..._ };
  return /* @__PURE__ */ R("div", {
    className: P("dtable-row", t),
    style: w,
    "data-id": e.id,
    ...b
  }, p, g, m);
}
function wa({ height: e, onRenderRow: t, ...n }) {
  const o = {
    height: e,
    ...n,
    row: { id: "HEADER", index: -1, top: 0 },
    className: "dtable-in-header",
    top: 0,
    CellComponent: ba
  };
  if (t) {
    const s = t({ props: o }, R);
    s && Object.assign(o, s);
  }
  return /* @__PURE__ */ R("div", {
    className: "dtable-header",
    style: { height: e }
  }, /* @__PURE__ */ R(Bs, {
    ...o
  }));
}
function ka({
  className: e,
  style: t,
  top: n,
  rows: o,
  height: s,
  rowHeight: r,
  scrollTop: l,
  onRenderRow: a,
  ...f
}) {
  return t = { ...t, top: n, height: s }, /* @__PURE__ */ R("div", {
    className: P("dtable-rows", e),
    style: t
  }, o.map((h) => {
    const i = {
      className: `dtable-row-${h.index % 2 ? "odd" : "even"}`,
      row: h,
      top: h.top - l,
      height: r,
      ...f
    }, d = a == null ? void 0 : a({ props: i, row: h }, R);
    return d && Object.assign(i, d), /* @__PURE__ */ R(Bs, {
      ...i
    });
  }));
}
const Sn = /* @__PURE__ */ new Map(), Rn = [];
function zs(e, t) {
  const { name: n } = e;
  if (!(t != null && t.override) && Sn.has(n))
    throw new Error(`DTable: Plugin with name ${n} already exists`);
  Sn.set(n, e), (t == null ? void 0 : t.buildIn) && !Rn.includes(n) && Rn.push(n);
}
function Yt(e, t) {
  zs(e, t);
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
function Fs(e) {
  return Sn.delete(e);
}
function xa(e) {
  if (typeof e == "string") {
    const t = Sn.get(e);
    return t || console.warn(`DTable: Cannot found plugin "${e}"`), t;
  }
  if (typeof e == "function" && "plugin" in e)
    return e.plugin;
  if (typeof e == "object")
    return e;
  console.warn("DTable: Invalid plugin", e);
}
function Vs(e, t, n) {
  return t.forEach((o) => {
    var r;
    if (!o)
      return;
    const s = xa(o);
    !s || n.has(s.name) || ((r = s.plugins) != null && r.length && Vs(e, s.plugins, n), e.push(s), n.add(s.name));
  }), e;
}
function Ea(e = [], t = !0) {
  return t && Rn.length && e.unshift(...Rn), e != null && e.length ? Vs([], e, /* @__PURE__ */ new Set()) : [];
}
function Er() {
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
var Xe, at, De, xe, Pe, K, ue, he, ct, Ut, Bt, Ee, ft, ut, Nn, qs, On, Ys, Dn, Gs, Pn, Ks, zt, lo, Tn, Hn, Ft, Vt, Wn, jn, In, Xs, Un, Js, Bn, Zs;
class io extends Pt {
  constructor(n) {
    var o;
    super(n);
    C(this, Nn);
    C(this, On);
    C(this, Dn);
    C(this, Pn);
    C(this, zt);
    C(this, In);
    C(this, Un);
    C(this, Bn);
    N(this, "ref", _a());
    C(this, Xe, 0);
    C(this, at, void 0);
    C(this, De, !1);
    C(this, xe, void 0);
    C(this, Pe, void 0);
    C(this, K, []);
    C(this, ue, void 0);
    C(this, he, /* @__PURE__ */ new Map());
    C(this, ct, {});
    C(this, Ut, void 0);
    C(this, Bt, []);
    N(this, "updateLayout", () => {
      v(this, Xe) && cancelAnimationFrame(v(this, Xe)), A(this, Xe, requestAnimationFrame(() => {
        A(this, ue, void 0), this.forceUpdate(), A(this, Xe, 0);
      }));
    });
    C(this, Ee, (n, o) => {
      o = o || n.type;
      const s = v(this, he).get(o);
      if (!!(s != null && s.length)) {
        for (const r of s)
          if (r.call(this, n) === !1) {
            n.stopPropagation(), n.preventDefault();
            break;
          }
      }
    });
    C(this, ft, (n) => {
      v(this, Ee).call(this, n, `window_${n.type}`);
    });
    C(this, ut, (n) => {
      v(this, Ee).call(this, n, `document_${n.type}`);
    });
    C(this, Tn, (n, o) => {
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
    C(this, Hn, (n, o) => (this.options.onRenderHeaderRow && (n.props = this.options.onRenderHeaderRow.call(this, n, o)), v(this, K).forEach((s) => {
      s.onRenderHeaderRow && (n.props = s.onRenderHeaderRow.call(this, n, o));
    }), n.props));
    C(this, Ft, (n, o, s) => {
      const { row: r, col: l } = o;
      n[0] = this.getCellValue(r, l);
      const a = r.id === "HEADER" ? "onRenderHeaderCell" : "onRenderCell";
      return l.setting[a] && (n = l.setting[a].call(this, n, o, s)), this.options[a] && (n = this.options[a].call(this, n, o, s)), v(this, K).forEach((f) => {
        f[a] && (n = f[a].call(this, n, o, s));
      }), n;
    });
    C(this, Vt, (n, o) => {
      o === "horz" ? this.scroll({ scrollLeft: n }) : this.scroll({ scrollTop: n });
    });
    C(this, Wn, (n) => {
      var a, f, h, i, d;
      const o = this.getPointerInfo(n);
      if (!o)
        return;
      const { rowID: s, colName: r, cellElement: l } = o;
      if (s === "HEADER")
        l && ((a = this.options.onHeaderCellClick) == null || a.call(this, n, { colName: r, element: l }), v(this, K).forEach((u) => {
          var c;
          (c = u.onHeaderCellClick) == null || c.call(this, n, { colName: r, element: l });
        }));
      else {
        const { rowElement: u } = o, c = this.layout.visibleRows.find((_) => _.id === s);
        if (l) {
          if (((f = this.options.onCellClick) == null ? void 0 : f.call(this, n, { colName: r, rowID: s, rowInfo: c, element: l, rowElement: u })) === !0)
            return;
          for (const _ of v(this, K))
            if (((h = _.onCellClick) == null ? void 0 : h.call(this, n, { colName: r, rowID: s, rowInfo: c, element: l, rowElement: u })) === !0)
              return;
        }
        if (((i = this.options.onRowClick) == null ? void 0 : i.call(this, n, { rowID: s, rowInfo: c, element: u })) === !0)
          return;
        for (const _ of v(this, K))
          if (((d = _.onRowClick) == null ? void 0 : d.call(this, n, { rowID: s, rowInfo: c, element: u })) === !0)
            return;
      }
    });
    C(this, jn, (n) => {
      const o = n.key.toLowerCase();
      if (["pageup", "pagedown", "home", "end"].includes(o))
        return !this.scroll({ to: o.replace("page", "") });
    });
    A(this, at, (o = n.id) != null ? o : `dtable-${ma(10)}`), this.state = { scrollTop: 0, scrollLeft: 0 }, A(this, Pe, Object.freeze(Ea(n.plugins))), v(this, Pe).forEach((s) => {
      var f;
      const { methods: r, data: l, state: a } = s;
      r && Object.entries(r).forEach(([h, i]) => {
        typeof i == "function" && Object.assign(this, { [h]: i.bind(this) });
      }), l && Object.assign(v(this, ct), l.call(this)), a && Object.assign(this.state, a.call(this)), (f = s.onCreate) == null || f.call(this, s);
    });
  }
  get options() {
    var n;
    return ((n = v(this, ue)) == null ? void 0 : n.options) || v(this, xe) || Er();
  }
  get plugins() {
    return v(this, K);
  }
  get layout() {
    return v(this, ue);
  }
  get id() {
    return v(this, at);
  }
  get data() {
    return v(this, ct);
  }
  get parent() {
    var n, o;
    return (o = this.props.parent) != null ? o : (n = this.ref.current) == null ? void 0 : n.parentElement;
  }
  componentWillReceiveProps() {
    A(this, xe, void 0);
  }
  componentDidMount() {
    if (v(this, De) ? this.forceUpdate() : j(this, zt, lo).call(this), v(this, K).forEach((n) => {
      let { events: o } = n;
      !o || (typeof o == "function" && (o = o.call(this)), Object.entries(o).forEach(([s, r]) => {
        r && this.on(s, r);
      }));
    }), this.on("click", v(this, Wn)), this.on("keydown", v(this, jn)), this.options.responsive)
      if (typeof ResizeObserver < "u") {
        const { parent: n } = this;
        if (n) {
          const o = new ResizeObserver(this.updateLayout);
          o.observe(n), A(this, Ut, o);
        }
      } else
        this.on("window_resize", this.updateLayout);
    v(this, K).forEach((n) => {
      var o;
      (o = n.onMounted) == null || o.call(this);
    });
  }
  componentDidUpdate() {
    v(this, De) ? j(this, zt, lo).call(this) : v(this, K).forEach((n) => {
      var o;
      (o = n.onUpdated) == null || o.call(this);
    });
  }
  componentWillUnmount() {
    var o;
    (o = v(this, Ut)) == null || o.disconnect();
    const { current: n } = this.ref;
    if (n)
      for (const s of v(this, he).keys())
        s.startsWith("window_") ? window.removeEventListener(s.replace("window_", ""), v(this, ft)) : s.startsWith("document_") ? document.removeEventListener(s.replace("document_", ""), v(this, ut)) : n.removeEventListener(s, v(this, Ee));
    v(this, K).forEach((s) => {
      var r;
      (r = s.onUnmounted) == null || r.call(this);
    }), v(this, Pe).forEach((s) => {
      var r;
      (r = s.onDestory) == null || r.call(this);
    }), A(this, ct, {}), v(this, he).clear();
  }
  on(n, o, s) {
    var l;
    s && (n = `${s}_${n}`);
    const r = v(this, he).get(n);
    r ? r.push(o) : (v(this, he).set(n, [o]), n.startsWith("window_") ? window.addEventListener(n.replace("window_", ""), v(this, ft)) : n.startsWith("document_") ? document.addEventListener(n.replace("document_", ""), v(this, ut)) : (l = this.ref.current) == null || l.addEventListener(n, v(this, Ee)));
  }
  off(n, o, s) {
    var a;
    s && (n = `${s}_${n}`);
    const r = v(this, he).get(n);
    if (!r)
      return;
    const l = r.indexOf(o);
    l >= 0 && r.splice(l, 1), r.length || (v(this, he).delete(n), n.startsWith("window_") ? window.removeEventListener(n.replace("window_", ""), v(this, ft)) : n.startsWith("document_") ? document.removeEventListener(n.replace("document_", ""), v(this, ut)) : (a = this.ref.current) == null || a.removeEventListener(n, v(this, Ee)));
  }
  emitCustomEvent(n, o) {
    v(this, Ee).call(this, o instanceof Event ? o : new CustomEvent(n, { detail: o }), n);
  }
  scroll(n, o) {
    const { scrollLeft: s, scrollTop: r, rowsHeightTotal: l, rowsHeight: a, rowHeight: f, colsInfo: { scrollWidth: h, scrollColsWidth: i } } = this.layout, { to: d } = n;
    let { scrollLeft: u, scrollTop: c } = n;
    if (d === "up" || d === "down")
      c = r + (d === "down" ? 1 : -1) * Math.floor(a / f) * f;
    else if (d === "left" || d === "right")
      u = s + (d === "right" ? 1 : -1) * h;
    else if (d === "home")
      c = 0;
    else if (d === "end")
      c = l - a;
    else if (d === "left-begin")
      u = 0;
    else if (d === "right-end")
      u = i - h;
    else {
      const { offsetLeft: b, offsetTop: p } = n;
      typeof b == "number" && (u = s + b), typeof p == "number" && (u = r + p);
    }
    const _ = {};
    return typeof u == "number" && (u = Math.max(0, Math.min(u, i - h)), u !== s && (_.scrollLeft = u)), typeof c == "number" && (c = Math.max(0, Math.min(c, l - a)), c !== r && (_.scrollTop = c)), Object.keys(_).length ? (this.setState(_, () => {
      var b;
      (b = this.options.onScroll) == null || b.call(this, _), o == null || o.call(this, !0);
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
    let l = s.id === "HEADER" ? (f = r.setting.title) != null ? f : r.setting.name : (h = s.data) == null ? void 0 : h[r.name];
    const { cellValueGetter: a } = this.options;
    return a && (l = a.call(this, s, r, l)), l;
  }
  getRowInfoByIndex(n) {
    return this.layout.rows[n];
  }
  update(n = {}, o) {
    const { dirtyType: s, state: r } = n;
    s === "layout" ? A(this, ue, void 0) : s === "options" && (A(this, ue, void 0), A(this, xe, void 0)), r ? this.setState({ ...r }, o) : this.forceUpdate(o);
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
    var r;
    return (r = qt(v(this, Bt), n, o, s, this.options.lang)) != null ? r : `{i18n:${n}}`;
  }
  render() {
    var c;
    const n = j(this, Bn, Zs).call(this), { className: o, rowHover: s, colHover: r, cellHover: l, bordered: a, striped: f, scrollbarHover: h } = this.options, i = { width: n == null ? void 0 : n.width, height: n == null ? void 0 : n.height }, d = ["dtable", o, {
      "dtable-hover-row": s,
      "dtable-hover-col": r,
      "dtable-hover-cell": l,
      "dtable-bordered": a,
      "dtable-striped": f,
      "dtable-scrolled-down": ((c = n == null ? void 0 : n.scrollTop) != null ? c : 0) > 0,
      "scrollbar-hover": h
    }], u = [];
    return n && v(this, K).forEach((_) => {
      var p;
      const b = (p = _.onRender) == null ? void 0 : p.call(this, n);
      !b || (b.style && Object.assign(i, b.style), b.className && d.push(b.className), b.children && u.push(b.children));
    }), /* @__PURE__ */ R("div", {
      id: v(this, at),
      className: P(d),
      style: i,
      ref: this.ref,
      tabIndex: -1
    }, n && j(this, Nn, qs).call(this, n), n && j(this, On, Ys).call(this, n), n && j(this, Dn, Gs).call(this, n), n && j(this, Pn, Ks).call(this, n));
  }
}
Xe = new WeakMap(), at = new WeakMap(), De = new WeakMap(), xe = new WeakMap(), Pe = new WeakMap(), K = new WeakMap(), ue = new WeakMap(), he = new WeakMap(), ct = new WeakMap(), Ut = new WeakMap(), Bt = new WeakMap(), Ee = new WeakMap(), ft = new WeakMap(), ut = new WeakMap(), Nn = new WeakSet(), qs = function(n) {
  const { header: o, colsInfo: s, headerHeight: r, scrollLeft: l } = n;
  if (!o)
    return null;
  if (o === !0)
    return /* @__PURE__ */ R(wa, {
      scrollLeft: l,
      height: r,
      onRenderCell: v(this, Ft),
      onRenderRow: v(this, Hn),
      ...s
    });
  const a = Array.isArray(o) ? o : [o];
  return /* @__PURE__ */ R(to, {
    className: "dtable-header",
    style: { height: r },
    renders: a,
    generateArgs: [n],
    generatorThis: this
  });
}, On = new WeakSet(), Ys = function(n) {
  const { headerHeight: o, rowsHeight: s, visibleRows: r, rowHeight: l, colsInfo: a, scrollLeft: f, scrollTop: h } = n;
  return /* @__PURE__ */ R(ka, {
    top: o,
    height: s,
    rows: r,
    rowHeight: l,
    scrollLeft: f,
    scrollTop: h,
    onRenderCell: v(this, Ft),
    onRenderRow: v(this, Tn),
    ...a
  });
}, Dn = new WeakSet(), Gs = function(n) {
  const { footer: o } = n;
  if (!o)
    return null;
  const s = Array.isArray(o) ? o : [o];
  return /* @__PURE__ */ R(to, {
    className: "dtable-footer",
    style: { height: n.footerHeight, top: n.rowsHeight + n.headerHeight },
    renders: s,
    generateArgs: [n],
    generatorThis: this,
    generators: n.footerGenerators
  });
}, Pn = new WeakSet(), Ks = function(n) {
  const o = [], { scrollLeft: s, colsInfo: r, scrollTop: l, rowsHeight: a, rowsHeightTotal: f, footerHeight: h } = n, { scrollColsWidth: i, scrollWidth: d } = r, { scrollbarSize: u = 12, horzScrollbarPos: c } = this.options;
  return i > d && o.push(
    /* @__PURE__ */ R(nr, {
      key: "horz",
      type: "horz",
      scrollPos: s,
      scrollSize: i,
      clientSize: d,
      onScroll: v(this, Vt),
      left: r.fixedLeftWidth,
      bottom: (c === "inside" ? 0 : -u) + h,
      size: u,
      wheelContainer: this.ref
    })
  ), f > a && o.push(
    /* @__PURE__ */ R(nr, {
      key: "vert",
      type: "vert",
      scrollPos: l,
      scrollSize: f,
      clientSize: a,
      onScroll: v(this, Vt),
      right: 0,
      size: u,
      top: n.headerHeight,
      wheelContainer: this.ref
    })
  ), o.length ? o : null;
}, zt = new WeakSet(), lo = function() {
  var n;
  A(this, De, !1), (n = this.options.afterRender) == null || n.call(this), v(this, K).forEach((o) => {
    var s;
    return (s = o.afterRender) == null ? void 0 : s.call(this);
  });
}, Tn = new WeakMap(), Hn = new WeakMap(), Ft = new WeakMap(), Vt = new WeakMap(), Wn = new WeakMap(), jn = new WeakMap(), In = new WeakSet(), Xs = function() {
  if (v(this, xe))
    return !1;
  const o = { ...Er(), ...v(this, Pe).reduce((s, r) => {
    const { defaultOptions: l } = r;
    return l && Object.assign(s, l), s;
  }, {}), ...this.props };
  return A(this, xe, o), A(this, K, v(this, Pe).reduce((s, r) => {
    const { when: l, options: a } = r;
    return (!l || l(o)) && (s.push(r), a && Object.assign(o, typeof a == "function" ? a.call(this, o) : a)), s;
  }, [])), A(this, Bt, [this.options.i18n, ...this.plugins.map((s) => s.i18n)].filter(Boolean)), !0;
}, Un = new WeakSet(), Js = function() {
  var ze, ye;
  const { plugins: n } = this;
  let o = v(this, xe);
  const s = {
    flex: /* @__PURE__ */ R("div", {
      style: "flex:auto"
    }),
    divider: /* @__PURE__ */ R("div", {
      style: "width:1px;margin:var(--space);background:var(--color-border);height:50%"
    })
  };
  n.forEach((S) => {
    var V;
    const D = (V = S.beforeLayout) == null ? void 0 : V.call(this, o);
    D && (o = { ...o, ...D }), Object.assign(s, S.footer);
  });
  const { defaultColWidth: r, minColWidth: l, maxColWidth: a } = o, f = [], h = [], i = [], d = {}, u = [], c = [];
  let _ = 0, b = 0, p = 0;
  o.cols.forEach((S) => {
    if (S.hidden)
      return;
    const {
      name: D,
      type: V = "",
      fixed: G = !1,
      flex: ie = !1,
      width: Fe = r,
      minWidth: Ae = l,
      maxWidth: Gt = a,
      ...Kt
    } = S, Xn = ya(Fe, Ae, Gt), T = {
      name: D,
      type: V,
      setting: {
        name: D,
        type: V,
        fixed: G,
        flex: ie,
        width: Fe,
        minWidth: Ae,
        maxWidth: Gt,
        ...Kt
      },
      flex: G ? 0 : ie === !0 ? 1 : typeof ie == "number" ? ie : 0,
      left: 0,
      width: Xn,
      realWidth: 0,
      visible: !0,
      index: u.length
    };
    n.forEach((kt) => {
      var Xt, Jt;
      const Ve = (Xt = kt.colTypes) == null ? void 0 : Xt[V];
      if (Ve) {
        const ce = typeof Ve == "function" ? Ve(T) : Ve;
        ce && Object.assign(T.setting, ce);
      }
      (Jt = kt.onAddCol) == null || Jt.call(this, T);
    }), T.realWidth = T.realWidth || T.width, G === "left" ? (T.left = _, _ += T.width, f.push(T)) : G === "right" ? (T.left = b, b += T.width, h.push(T)) : (T.left = p, p += T.width, i.push(T)), T.flex && c.push(T), u.push(T), d[T.name] = T;
  });
  let g = o.width, m = 0;
  const w = _ + p + b;
  if (typeof g == "function" && (g = g.call(this, w)), g === "auto")
    m = w;
  else if (g === "100%") {
    const { parent: S } = this;
    if (S)
      m = S.clientWidth;
    else {
      m = 0, A(this, De, !0);
      return;
    }
  } else
    m = g != null ? g : 0;
  const { data: k, rowKey: x = "id", rowHeight: y } = o, E = [], $ = (S, D, V) => {
    var ie, Fe;
    const G = { data: V != null ? V : { [x]: S }, id: S, index: E.length, top: 0 };
    if (V || (G.lazy = !0), E.push(G), ((ie = o.onAddRow) == null ? void 0 : ie.call(this, G, D)) !== !1) {
      for (const Ae of n)
        if (((Fe = Ae.onAddRow) == null ? void 0 : Fe.call(this, G, D)) === !1)
          return;
    }
  };
  if (typeof k == "number")
    for (let S = 0; S < k; S++)
      $(`${S}`, S);
  else
    Array.isArray(k) && k.forEach((S, D) => {
      var V;
      typeof S == "object" ? $(`${(V = S[x]) != null ? V : ""}`, D, S) : $(`${S != null ? S : ""}`, D);
    });
  let M = E;
  const O = {};
  if (o.onAddRows) {
    const S = o.onAddRows.call(this, M);
    S && (M = S);
  }
  for (const S of n) {
    const D = (ze = S.onAddRows) == null ? void 0 : ze.call(this, M);
    D && (M = D);
  }
  M.forEach((S, D) => {
    O[S.id] = S, S.index = D, S.top = S.index * y;
  });
  const { header: L, footer: q } = o, F = L ? o.headerHeight || y : 0, se = q ? o.footerHeight || y : 0;
  let Y = o.height, W = 0;
  const X = M.length * y, Se = F + se + X;
  if (typeof Y == "function" && (Y = Y.call(this, Se)), Y === "auto")
    W = Se;
  else if (typeof Y == "object")
    W = Math.min(Y.max, Math.max(Y.min, Se));
  else if (Y === "100%") {
    const { parent: S } = this;
    if (S)
      W = S.clientHeight;
    else {
      W = 0, A(this, De, !0);
      return;
    }
  } else
    W = Y;
  const ge = W - F - se, Qe = m - _ - b, me = {
    options: o,
    allRows: E,
    width: m,
    height: W,
    rows: M,
    rowsMap: O,
    rowHeight: y,
    rowsHeight: ge,
    rowsHeightTotal: X,
    header: L,
    footer: q,
    footerGenerators: s,
    headerHeight: F,
    footerHeight: se,
    colsMap: d,
    colsList: u,
    flexCols: c,
    colsInfo: {
      fixedLeftCols: f,
      fixedRightCols: h,
      scrollCols: i,
      fixedLeftWidth: _,
      scrollWidth: Qe,
      scrollColsWidth: p,
      fixedRightWidth: b
    }
  }, Re = (ye = o.onLayout) == null ? void 0 : ye.call(this, me);
  Re && Object.assign(me, Re), n.forEach((S) => {
    if (S.onLayout) {
      const D = S.onLayout.call(this, me);
      D && Object.assign(me, D);
    }
  }), A(this, ue, me);
}, Bn = new WeakSet(), Zs = function() {
  (j(this, In, Xs).call(this) || !v(this, ue)) && j(this, Un, Js).call(this);
  const { layout: n } = this;
  if (!n)
    return;
  let { scrollLeft: o } = this.state;
  const { flexCols: s, colsInfo: { scrollCols: r, scrollWidth: l, scrollColsWidth: a } } = n;
  if (s.length) {
    const w = l - a;
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
  o = Math.min(Math.max(0, a - l), o);
  let f = 0;
  r.forEach((w) => {
    w.left = f, f += w.realWidth, w.visible = w.left + w.realWidth >= o && w.left <= o + l;
  });
  const { rowsHeightTotal: h, rowsHeight: i, rows: d, rowHeight: u } = n, c = Math.min(Math.max(0, h - i), this.state.scrollTop), _ = Math.floor(c / u), b = c + i, p = Math.min(d.length, Math.ceil(b / u)), g = [], { rowDataGetter: m } = this.options;
  for (let w = _; w < p; w++) {
    const k = d[w];
    k.lazy && m && (k.data = m([k.id])[0], k.lazy = !1), g.push(k);
  }
  return n.visibleRows = g, n.scrollTop = c, n.scrollLeft = o, n;
}, N(io, "addPlugin", zs), N(io, "removePlugin", Fs);
function Cr(e, t) {
  t !== void 0 ? e.data.hoverCol = t : t = e.data.hoverCol;
  const { current: n } = e.ref;
  if (!n)
    return;
  const o = "dtable-col-hover";
  n.querySelectorAll(`.${o}`).forEach((s) => s.classList.remove(o)), typeof t == "string" && t.length && n.querySelectorAll(`.dtable-cell[data-col="${t}"]`).forEach((s) => s.classList.add(o));
}
const Qs = {
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
      Cr(this, o);
    },
    mouseleave() {
      Cr(this, !1);
    }
  }
};
Yt(Qs, { buildIn: !0 });
function Ca(e, t) {
  var l, a;
  typeof e == "boolean" && (t = e, e = void 0);
  const n = this.state.checkedRows, o = {}, { canRowCheckable: s } = this.options, r = (f, h) => {
    s && !s.call(this, f) || !!n[f] === h || (h ? n[f] = !0 : delete n[f], o[f] = h);
  };
  if (e === void 0 ? (t === void 0 && (t = !ei.call(this)), (l = this.layout) == null || l.allRows.forEach(({ id: f }) => {
    r(f, !!t);
  })) : (Array.isArray(e) || (e = [e]), e.forEach((f) => {
    r(f, t != null ? t : !n[f]);
  })), Object.keys(o).length) {
    const f = (a = this.options.beforeCheckRows) == null ? void 0 : a.call(this, e, o, n);
    f && Object.keys(f).forEach((h) => {
      f[h] ? n[h] = !0 : delete n[h];
    }), this.setState({ checkedRows: { ...n } }, () => {
      var h;
      (h = this.options.onCheckChange) == null || h.call(this, o);
    });
  }
  return o;
}
function $a(e) {
  var t;
  return (t = this.state.checkedRows[e]) != null ? t : !1;
}
function ei() {
  var n, o;
  const e = this.getChecks().length, { canRowCheckable: t } = this.options;
  return t ? e === ((n = this.layout) == null ? void 0 : n.allRows.reduce((s, r) => s + (t.call(this, r.id) ? 1 : 0), 0)) : e === ((o = this.layout) == null ? void 0 : o.allRows.length);
}
function Sa() {
  return Object.keys(this.state.checkedRows);
}
const ti = {
  name: "checkable",
  defaultOptions: { checkable: !0 },
  when: (e) => !!e.checkable,
  state() {
    return { checkedRows: {} };
  },
  methods: {
    toggleCheckRows: Ca,
    isRowChecked: $a,
    isAllRowChecked: ei,
    getChecks: Sa
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
    var a, f;
    const { id: o } = t, { canRowCheckable: s } = this.options;
    if (s && !s.call(this, o))
      return e;
    const { checkbox: r } = n.setting;
    if (typeof r == "function" ? r.call(this, o) : r) {
      const h = this.isRowChecked(o), i = (f = (a = this.options.checkboxRender) == null ? void 0 : a.call(this, h, o)) != null ? f : /* @__PURE__ */ R("input", {
        type: "checkbox",
        checked: h
      });
      e.unshift(i), e.push({ className: "has-checkbox" });
    }
    return e;
  },
  onRenderHeaderCell(e, { row: t, col: n }) {
    var l, a;
    const { id: o } = t, { checkbox: s } = n.setting;
    if (typeof s == "function" ? s.call(this, o) : s) {
      const f = this.isAllRowChecked(), h = (a = (l = this.options.checkboxRender) == null ? void 0 : l.call(this, f, o)) != null ? a : /* @__PURE__ */ R("input", {
        type: "checkbox",
        checked: f
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
};
Yt(ti);
function ao(e) {
  const t = this.data.nestedMap.get(e);
  if (!t || t.state !== "")
    return t != null ? t : { state: "normal", level: -1 };
  if (!t.parent && !t.children)
    return t.state = "normal", t;
  const n = this.state.collapsedRows, o = t.children && n && n[e];
  let s = !1, { parent: r } = t;
  for (; r; ) {
    const l = ao.call(this, r);
    if (l.state !== "expanded") {
      s = !0;
      break;
    }
    r = l.parent;
  }
  return t.state = s ? "hidden" : o ? "collapsed" : t.children ? "expanded" : "normal", t.level = t.parent ? ao.call(this, t.parent).level + 1 : 0, t;
}
function Ra(e, t) {
  var s;
  let n = (s = this.state.collapsedRows) != null ? s : {};
  const { nestedMap: o } = this.data;
  if (e === "HEADER")
    if (t === void 0 && (t = !ni.call(this)), t) {
      const r = o.entries();
      for (const [l, a] of r)
        a.state === "expanded" && (n[l] = !0);
    } else
      n = {};
  else {
    const r = Array.isArray(e) ? e : [e];
    t === void 0 && (t = !n[r[0]]), r.forEach((l) => {
      const a = o.get(l);
      t && (a == null ? void 0 : a.children) ? n[l] = !0 : delete n[l];
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
function ni() {
  const e = this.data.nestedMap.values();
  for (const t of e)
    if (t.state === "expanded")
      return !1;
  return !0;
}
function oi(e, t = 0, n, o = 0) {
  var s;
  n || (n = [...e.keys()]);
  for (const r of n) {
    const l = e.get(r);
    !l || (l.level === o && (l.order = t++), (s = l.children) != null && s.length && (t = oi(e, t, l.children, o + 1)));
  }
  return t;
}
function ri(e, t, n, o) {
  const s = e.getNestedRowInfo(t);
  return !s || s.state === "" || !s.children || s.children.forEach((r) => {
    o[r] = n, ri(e, r, n, o);
  }), s;
}
function si(e, t, n, o, s) {
  var a;
  const r = e.getNestedRowInfo(t);
  if (!r || r.state === "")
    return;
  ((a = r.children) == null ? void 0 : a.every((f) => {
    const h = !!(o[f] !== void 0 ? o[f] : s[f]);
    return n === h;
  })) && (o[t] = n), r.parent && si(e, r.parent, n, o, s);
}
const ii = {
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
        const l = ri(this, s, r, o);
        l != null && l.parent && si(this, l.parent, r, o, n);
      }), o;
    }
  },
  when: (e) => !!e.nested,
  data() {
    return { nestedMap: /* @__PURE__ */ new Map() };
  },
  methods: {
    toggleRow: Ra,
    isAllCollapsed: ni,
    getNestedRowInfo: ao
  },
  beforeLayout() {
    this.data.nestedMap.clear();
  },
  onAddRow(e) {
    var s, r, l, a, f;
    const { nestedMap: t } = this.data, n = (r = e.data) == null ? void 0 : r[(s = this.options.nestedParentKey) != null ? s : "parent"], o = (l = t.get(e.id)) != null ? l : {
      state: "",
      level: 0
    };
    if (o.parent = n, (f = e.data) != null && f[(a = this.options.asParentKey) != null ? a : "asParent"] && (o.children = []), t.set(e.id, o), n) {
      let h = t.get(n);
      h || (h = {
        state: "",
        level: 0
      }, t.set(n, h)), h.children || (h.children = []), h.children.push(e.id);
    }
  },
  onAddRows(e) {
    return e = e.filter((t) => this.getNestedRowInfo(t.id).state !== "hidden"), oi(this.data.nestedMap), e.sort((t, n) => {
      var l, a;
      const o = this.getNestedRowInfo(t.id), s = this.getNestedRowInfo(n.id), r = ((l = o.order) != null ? l : 0) - ((a = s.order) != null ? a : 0);
      return r === 0 ? t.index - n.index : r;
    }), e;
  },
  onRenderCell(e, { col: t, row: n }) {
    var a, f, h;
    const { id: o, data: s } = n, { nestedToggle: r } = t.setting, l = this.getNestedRowInfo(o);
    if (r && (l.children || l.parent) && e.unshift((f = (a = this.options.onRenderNestedToggle) == null ? void 0 : a.call(this, l, o, t, s)) != null ? f : /* @__PURE__ */ R("a", {
      role: "button",
      className: `dtable-nested-toggle state${l.children ? "" : " is-no-child"}`
    }, /* @__PURE__ */ R("span", {
      className: "dtable-nested-toggle-icon"
    }))), l.level) {
      let { nestedIndent: i = r } = t.setting;
      i && (i === !0 && (i = (h = this.options.nestedIndent) != null ? h : 12), e.unshift(/* @__PURE__ */ R("div", {
        className: "dtable-nested-indent",
        style: { width: i * l.level + "px" }
      })));
    }
    return e;
  },
  onRenderHeaderCell(e, { row: t, col: n }) {
    var s, r;
    const { id: o } = t;
    return n.setting.nestedToggle && e.unshift((r = (s = this.options.onRenderNestedToggle) == null ? void 0 : s.call(this, void 0, o, n, void 0)) != null ? r : /* @__PURE__ */ R("a", {
      type: "button",
      className: "dtable-nested-toggle state"
    }, /* @__PURE__ */ R("span", {
      className: "dtable-nested-toggle-icon"
    }))), e;
  },
  onRenderRow({ props: e, row: t }) {
    const n = this.getNestedRowInfo(t.id);
    return {
      className: P(e.className, `is-nested-${n.state}`),
      "data-parent": n.parent
    };
  },
  onRenderHeaderRow({ props: e }) {
    return e.className = P(e.className, `is-nested-${this.isAllCollapsed() ? "collapsed" : "expanded"}`), e;
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
Yt(ii);
const de = 24 * 60 * 60 * 1e3, J = (e) => e ? (e instanceof Date || (typeof e == "string" && (e = e.trim(), /^\d+$/.test(e) && (e = Number.parseInt(e, 10))), typeof e == "number" && e < 1e10 && (e *= 1e3), e = new Date(e)), e) : new Date(), wt = (e, t = new Date()) => (e = J(e), t = J(t), e.getFullYear() === t.getFullYear() && e.getMonth() === t.getMonth() && e.getDate() === t.getDate()), co = (e, t = new Date()) => J(e).getFullYear() === J(t).getFullYear(), li = (e, t = new Date()) => (e = J(e), t = J(t), e.getFullYear() === t.getFullYear() && e.getMonth() === t.getMonth()), Aa = (e, t = new Date()) => {
  e = J(e), t = J(t);
  const n = 1e3 * 60 * 60 * 24, o = Math.floor(e.getTime() / n), s = Math.floor(t.getTime() / n);
  return Math.floor((o + 4) / 7) === Math.floor((s + 4) / 7);
}, Ma = (e, t) => wt(J(t), e), La = (e, t) => wt(J(t).getTime() - de, e), Na = (e, t) => wt(J(t).getTime() + de, e), Oa = (e, t) => wt(J(t).getTime() - 2 * de, e), An = (e, t = "yyyy-MM-dd hh:mm") => {
  e = J(e);
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
}, Da = (e, t, n) => {
  const o = {
    full: "yyyy-M-d",
    month: "M-d",
    day: "d",
    str: "{0} ~ {1}",
    ...n
  }, s = An(e, co(e) ? o.month : o.full);
  if (wt(e, t))
    return s;
  const r = An(t, co(e, t) ? li(e, t) ? o.day : o.month : o.full);
  return o.str.replace("{0}", s).replace("{1}", r);
}, Pa = (e) => {
  const t = new Date().getTime();
  switch (e) {
    case "oneWeek":
      return t - de * 7;
    case "oneMonth":
      return t - de * 31;
    case "threeMonth":
      return t - de * 31 * 3;
    case "halfYear":
      return t - de * 183;
    case "oneYear":
      return t - de * 365;
    case "twoYear":
      return t - 2 * (de * 365);
    default:
      return 0;
  }
}, fo = (e, t, n = !0, o = Date.now()) => {
  switch (t) {
    case "year":
      return e *= 365, fo(e, "day", n, o);
    case "quarter":
      e *= 3;
    case "month":
      return e *= 30, fo(e, "day", n, o);
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
const ai = {
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
        const { linkTemplate: o = "", linkProps: s } = t.setting, r = et(o, n.data);
        return e[0] = /* @__PURE__ */ R("a", {
          href: r,
          ...s
        }, e[0]), e;
      }
    },
    avatar: {
      onRenderCell(e, { col: t, row: n }) {
        const { data: o } = n, { avatarWithName: s, avatarClass: r = "size-sm circle", avatarKey: l = `${t.name}Avatar` } = t.setting, a = /* @__PURE__ */ R("div", {
          className: `avatar ${r} flex-none`
        }, /* @__PURE__ */ R("img", {
          src: o ? o[l] : ""
        }));
        return s ? e.unshift(a) : e[0] = a, e;
      }
    },
    circleProgress: {
      onRenderCell(e, { col: t }) {
        const { circleSize: n = 24, circleBorderSize: o = 1, circleBgColor: s = "var(--color-border)", circleColor: r = "var(--color-success-500)" } = t.setting, l = (n - o) / 2, a = n / 2, f = e[0];
        return e[0] = /* @__PURE__ */ R("svg", {
          width: n,
          height: n
        }, /* @__PURE__ */ R("circle", {
          cx: a,
          cy: a,
          r: l,
          "stroke-width": o,
          stroke: s,
          fill: "transparent"
        }), /* @__PURE__ */ R("circle", {
          cx: a,
          cy: a,
          r: l,
          "stroke-width": o,
          stroke: r,
          fill: "transparent",
          "stroke-linecap": "round",
          "stroke-dasharray": Math.PI * l * 2,
          "stroke-dashoffset": Math.PI * l * 2 * (100 - f) / 100,
          style: { transformOrigin: "center", transform: "rotate(-90deg)" }
        }), /* @__PURE__ */ R("text", {
          x: a,
          y: a + o,
          "dominant-baseline": "middle",
          "text-anchor": "middle",
          style: { fontSize: `${l}px` }
        }, Math.round(f))), e;
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
          html: o.map((f) => {
            typeof f == "string" && (f = { action: f });
            const h = r[f.action];
            return h && (f = { className: l, ...h, ...f }), et(s, f);
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
        return typeof o == "function" ? e[0] = s === "html" ? { html: o(r) } : o(r) : s === "datetime" ? e[0] = An(r, o) : s === "html" ? e[0] = { html: et(o, r) } : e[0] = et(o, r), e;
      }
    }
  }
};
Yt(ai);
const Ta = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  colHover: Qs,
  checkable: ti,
  nested: ii,
  rich: ai
}, Symbol.toStringTag, { value: "Module" }));
class en extends vo {
}
N(en, "Component", io), N(en, "definePlugin", Yt), N(en, "removePlugin", Fs), N(en, "plugins", Ta);
var _e, Q;
class Ha {
  constructor(t) {
    C(this, _e, void 0);
    C(this, Q, void 0);
    A(this, _e, t), A(this, Q, document.querySelector(t.getAttribute("data-target")) || document.querySelector(t.getAttribute("data-tab")) || document.querySelector(t.getAttribute("href")));
  }
  showTarget() {
    this.addActive(v(this, _e).parentElement.parentElement, v(this, _e).parentElement), this.addActive(v(this, Q).parentElement, v(this, Q)), v(this, Q).dispatchEvent(new CustomEvent("show.zui3.tab"));
  }
  show() {
    A(this, Q, v(this, _e)), this.addActive(v(this, Q).parentElement, v(this, Q)), A(this, _e, document.querySelector(`[href='#${v(this, Q).getAttribute("id")}']`) || document.querySelector(`[data-tab='#${v(this, Q).getAttribute("id")}']`) || document.querySelector(`[data-target='#${v(this, Q).getAttribute("id")}']`)), this.addActive(v(this, _e).parentElement.parentElement, v(this, _e).parentElement);
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
_e = new WeakMap(), Q = new WeakMap();
document.addEventListener("click", function(e) {
  e.target instanceof HTMLElement && (e.target.dataset.toggle === "tab" || e.target.getAttribute("data-tab")) && (e.preventDefault(), new Ha(e.target).showTarget());
});
const Ua = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  TIME_DAY: de,
  createDate: J,
  isSameDay: wt,
  isSameYear: co,
  isSameMonth: li,
  isSameWeek: Aa,
  isToday: Ma,
  isYesterday: La,
  isTomorrow: Na,
  isDBY: Oa,
  formatDate: An,
  formatDateSpan: Da,
  getTimeBeforeDesc: Pa,
  calculateTimestamp: fo,
  formatString: et,
  formatBytes: bi,
  convertBytes: wi,
  isObject: on,
  mergeDeep: pn
}, Symbol.toStringTag, { value: "Module" }));
export {
  Wi as ActionMenu,
  Ia as Avatar,
  ne as ContextMenu,
  en as DTable,
  nt as Dropdown,
  ho as EventBus,
  Jr as Menu,
  Ha as NavTabs,
  nr as Scrollbar,
  Ei as addI18nMap,
  ja as browser,
  ki as getLangCode,
  Ua as helpers,
  qt as i18n,
  eo as nativeEvents,
  xi as setLangCode,
  Ki as store
};
